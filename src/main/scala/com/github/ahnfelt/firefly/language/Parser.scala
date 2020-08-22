package com.github.ahnfelt.firefly.language

import com.github.ahnfelt.firefly.language.Syntax._

import scala.collection.mutable.ArrayBuffer

case class ParseException(at : Location, message : String) extends RuntimeException(message + " " + at.toSuffix)

class Parser(file : String, tokens : ArrayBuffer[Token]) {

    val end = tokens.last

    private var offset = 0
    private def current =
        if(offset < tokens.length) tokens(offset) else end
    private def ahead =
        if(offset + 1 < tokens.length) tokens(offset + 1) else end
    private def aheadAhead =
        if(offset + 2 < tokens.length) tokens(offset + 2) else end
    private def skip(kind : TokenKind, value : String = null) : Token = {
        val c = current
        if(c.kind != kind) throw ParseException(c.at, "Expected " + kind + (if(value == null) "" else " " + value) + ", got " + c.raw)
        if(value != null && !c.isString(value)) throw ParseException(c.at, "Expected " + value + " got " + c.raw)
        offset += 1
        c
    }

    def parseModule() : Module = {
        var result = Module(file, List(), List(), List(), List(), List())
        while(!current.is(LEnd)) {
            if(current.is(LLower) && ahead.is(LAssign)) {
                result = result.copy(lets = parseLetDefinition() :: result.lets)
            } else if(current.is(LScopeType) && ahead.is(LLower) && aheadAhead.is(LAssign)) {
                val scopeType = Some(skip(LScopeType).raw)
                result = result.copy(lets = parseLetDefinition(scopeType) :: result.lets)
            } else if(current.is(LLower) && ahead.is(LBracketLeft)) {
                result = result.copy(functions = parseFunctionDefinition() :: result.functions)
            } else if(current.is(LScopeType) && ahead.is(LLower) && aheadAhead.is(LBracketLeft)) {
                val scopeType = Some(skip(LScopeType).raw)
                result = result.copy(functions = parseFunctionDefinition(scopeType) :: result.functions)
            } else if(current.is(LKeyword) && current.isString("trait")) {
                result = result.copy(traits = parseTraitDefinition() :: result.traits)
            } else if(current.is(LKeyword) && current.isString("instance")) {
                result = result.copy(instances = parseInstanceDefinition() :: result.instances)
            } else if(current.is(LKeyword) && current.isString("type")) {
                result = result.copy(types = parseTypeDefinition() :: result.types)
            } else {
                skip(LEnd)
            }
            if(!current.is(LEnd)) skip(LComma)
        }
        Module(
            file = file,
            lets = result.lets.reverse,
            functions = result.functions.reverse,
            types = result.types.reverse,
            traits = result.traits.reverse,
            instances = result.instances.reverse
        )
    }

    def parseLetDefinition(scopeType : Option[String] = None) : DLet = {
        val nameToken = skip(LLower)
        val variableType = if(current.is(LColon)) {
            skip(LColon)
            parseType()
        } else Type(nameToken.at, "?", List())
        skip(LAssign)
        val value = parseTerm()
        DLet(nameToken.at, scopeType, nameToken.raw, variableType, value)
    }

    def parseFunctionDefinition(scopeType : Option[String] = None) : DFunction = {
        val signature = parseSignature(scopeType)
        val body = parseLambda(signature.parameters.size)
        DFunction(
            signature.at,
            scopeType,
            signature,
            body
        )
    }

    def parseSignature(scopeType : Option[String] = None) : Signature = {
        val nameToken = skip(LLower)
        val (generics, constraints) = if(current.isString("[")) parseTypeParameters() else List() -> List()
        val parameters = parseFunctionParameters()
        val returnType = parseOptionalType()
        Signature(nameToken.at, nameToken.raw, generics, constraints, parameters, returnType)
    }

    def parseTraitDefinition() : DTrait = {
        skip(LKeyword, "trait")
        val nameToken = skip(LUpper)
        val (generics, constraints) = if(!current.isString("[")) List() -> List() else parseTypeParameters()
        val generatorParameters = if(!current.isString("(")) List() else parseFunctionParameters()
        var generatorTerms = List[(String, Term)]()
        val methods = if(!current.isString("{")) List() else {
            var signatures = List[Signature]()
            skip(LBracketLeft, "{")
            while(!current.is(LBracketRight)) {
                signatures ::= parseSignature(Some(nameToken.raw))
                if(!current.is(LBracketRight)) skip(LComma)
            }
            skip(LBracketRight, "}")
            signatures
        }
        DTrait(nameToken.at, nameToken.raw, generics, constraints, methods, generatorParameters, generatorTerms)
    }

    def parseInstanceDefinition() : DInstance = {
        skip(LKeyword, "instance")
        val nameToken = skip(LUpper)
        val generics = if(!current.isString("[")) List() else parseTypeArguments()
        val constraints = List()
        val generatorArguments = if(!current.isString("(")) List() else parseFunctionArguments()
        val methods = if(!current.isString("{")) List() else {
            var definitions = List[DFunction]()
            skip(LBracketLeft, "{")
            while(!current.is(LBracketRight)) {
                definitions ::= parseFunctionDefinition(Some(nameToken.raw))
                if(!current.is(LBracketRight)) skip(LComma)
            }
            skip(LBracketRight, "}")
            definitions
        }
        DInstance(nameToken.at, nameToken.raw, generics, constraints, methods, generatorArguments)
    }

    def parseTypeDefinition() : DType = {
        skip(LKeyword, "type")
        val nameToken = skip(LUpper)
        val (generics, constraints) = if(!current.isString("[")) List() -> List() else parseTypeParameters()
        val commonFields = if(!current.isString("(")) List() else parseFunctionParameters()
        val variants = if(!current.isString("{")) List(Variant(nameToken.at, nameToken.raw, List())) else {
            skip(LBracketLeft, "{")
            var reverseVariants = List[Variant]()
            while(!current.is(LBracketRight)) {
                val variantNameToken = skip(LUpper)
                val variantFields = if(!current.isString("(")) List() else parseFunctionParameters()
                reverseVariants ::= Variant(variantNameToken.at, variantNameToken.raw, variantFields)
                if(!current.is(LBracketRight)) skip(LComma)
            }
            skip(LBracketRight, "}")
            reverseVariants.reverse
        }
        DType(nameToken.at, nameToken.raw, generics, constraints, commonFields, variants)
    }

    def parseTypeParameters() : (List[String], List[Constraint]) = {
        skip(LBracketLeft, "[")
        var parameters = List[String]()
        var constraints = List[Constraint]()
        while(!current.is(LBracketRight)) {
            if(ahead.is(LBracketLeft)) {
                constraints ::= Constraint(parseType())
            } else {
                val parameterNameToken = skip(LUpper)
                parameters ::= parameterNameToken.raw
                while(current.is(LColon)) {
                    skip(LColon)
                    val t = parseType()
                    constraints ::= Constraint(t.copy(generics =
                        Type(t.at, parameterNameToken.raw, List()) :: t.generics
                    ))
                }
            }
            if(!current.is(LBracketRight)) skip(LComma)
        }
        skip(LBracketRight, "]")
        parameters.reverse -> constraints.reverse
    }

    def parseTypeArguments() : List[Type] = {
        skip(LBracketLeft, "[")
        var types = List[Type]()
        while(!current.is(LBracketRight)) {
            types ::= parseType()
            if(!current.is(LBracketRight)) skip(LComma)
        }
        skip(LBracketRight, "]")
        types.reverse
    }

    def parseFunctionParameters() : List[Parameter] = {
        var parameters = List[Parameter]()
        skip(LBracketLeft, "(")
        while(!current.is(LBracketRight)) {
            val parameterNameToken = skip(LLower)
            val parameterType = parseOptionalType()
            parameters ::= Parameter(parameterNameToken.at, parameterNameToken.raw, parameterType)
            if(!current.is(LBracketRight)) skip(LComma)
        }
        skip(LBracketRight, ")")
        parameters.reverse
    }

    def parseFunctionArguments() : List[Term] = {
        skip(LBracketLeft, "(")
        var arguments = List[Term]()
        while(!current.is(LBracketRight)) {
            arguments ::= parseTerm()
            if(!current.is(LBracketRight)) skip(LComma)
        }
        skip(LBracketRight, ")")
        arguments.reverse
    }

    def parseOptionalType() : Type = {
        val token = current
        if(token.is(LColon)) {
            skip(LColon)
            parseType()
        } else Type(token.at, "?", List())
    }

    def parseLambda(defaultParameterCount : Int = 0) : ELambda = {
        val token = skip(LBracketLeft, "{")
        val result = if(current.is(LPipe)) {
            var cases = List[MatchCase]()
            while(current.is(LPipe)) {
                cases ::= parseCase()
            }
            cases.reverse
        } else if(current.is(LLower) && ahead.is(LComma, LArrowThick)) {
            var parameters = List[MatchPattern]()
            while(!current.is(LArrowThick)) {
                val parameterToken = skip(LLower)
                parameters ::= PVariable(parameterToken.at, Some(parameterToken.raw))
                if(!current.is(LArrowThick)) skip(LComma)
            }
            skip(LArrowThick)
            val term = parseStatements()
            List(MatchCase(token.at, parameters.reverse, term))
        } else {
            val term = parseStatements()
            List(MatchCase(token.at, 1.to(defaultParameterCount).toList.map(_ => PVariable(token.at, None)), term))
        }
        skip(LBracketRight, "}")
        ELambda(token.at, result)
    }

    def parseCase() : MatchCase = {
        val token = skip(LPipe)
        var patterns = List[MatchPattern]()
        while(!current.is(LArrowThick)) {
            patterns ::= parsePattern()
            if(!current.is(LArrowThick)) skip(LComma)
        }
        skip(LArrowThick)
        val body = parseStatements()
        MatchCase(token.at, patterns.reverse, body)
    }

    def parsePattern() : MatchPattern = {
        if(current.is(LWildcard)) {
            val token = skip(LWildcard)
            PVariable(token.at, None)
        } else if(current.is(LLower)) {
            val token = skip(LLower)
            PVariable(token.at, Some(token.raw))
        } else {
            val token = skip(LUpper)
            val patterns = if(!current.isString("(")) List() else {
                var result = List[MatchPattern]()
                skip(LBracketLeft, "(")
                while(!current.is(LBracketRight)) {
                    result ::= parsePattern()
                    if(!current.is(LBracketRight)) skip(LComma)
                }
                skip(LBracketRight, ")")
                result.reverse
            }
            PVariant(token.at, token.raw, patterns)
        }
    }

    def parseType() : Type = {
        val token = skip(LUpper)
        val arguments = if(!current.isString("[")) List() else {
            var result = List[Type]()
            skip(LBracketLeft, "[")
            while(!current.is(LBracketRight)) {
                result ::= parseType()
                if(!current.is(LBracketRight)) skip(LComma)
            }
            skip(LBracketRight, "]")
            result.reverse
        }
        Type(token.at, token.raw, arguments)
    }

    def parseStatements() : Term = {
        while(!current.isString("}")) offset += 1
        EInt(current.at, "42")
    }

    def parseTerm() : Term = {
        ???
    }

}
