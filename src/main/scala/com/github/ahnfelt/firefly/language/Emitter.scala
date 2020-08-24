package com.github.ahnfelt.firefly.language

import com.github.ahnfelt.firefly.language.Syntax._

class Emitter() {

    def emitModule(module : Module) : String = {
        val moduleNamespace = module.file.replace('\\', '/').reverse.takeWhile(_ != '/').reverse.takeWhile(_ != '.')
        val namespaces = module.types.map { definition =>
            val lets = module.lets.filter(_.namespace.contains(definition.name + "_"))
            val functions = module.functions.filter(_.namespace.contains(definition.name + "_"))
            if(lets.isEmpty && functions.isEmpty) None
            else Some(emitTypeMembers(definition.name, lets, functions))
        }
        val parts = List(
            List(
                "package firefly",
                "import firefly.Firefly_Core._",
                "object " + moduleNamespace + " {"
            ),
            module.types.map(emitTypeDefinition),
            module.lets.filter(_.namespace.isEmpty).map(emitLetDefinition(_)),
            module.functions.filter(_.namespace.isEmpty).map(emitFunctionDefinition),
            module.traits.map(emitTraitDefinition),
            module.instances.map(emitInstanceDefinition),
            namespaces.flatten,
            List(
                "}"
            ),
        )
        val allNamespaces = module.lets.flatMap(_.namespace) ++ module.functions.flatMap(_.namespace)
        allNamespaces.find(n => !module.types.exists(_.name + "_" == n)).foreach { n =>
            throw ParseException(Location(module.file, 1, 1), "No such type: " + n)
        }
        parts.map(_.mkString("\n\n")).mkString("\n") + "\n"
    }

    def emitTypeMembers(name : String, lets : List[DLet], functions : List[DFunction]) = {
        val strings =
            lets.map(emitLetDefinition(_)) ++
            functions.map(emitFunctionDefinition)
        "object " + name + " {\n\n" + strings.mkString("\n\n") + "\n\n}"
    }

    def emitTypeDefinition(definition : DType) : String = {
        val generics = emitTypeParameters(definition.generics)
        if(definition.variants.size == 1 && definition.variants.head.name == definition.name) {
            val fields = "(" + definition.commonFields.map(emitParameter).mkString(", ") + ")"
            "case class " + definition.name + generics + fields
        } else {
            val commonFields = if(definition.commonFields.isEmpty) "" else
                " {\n" + definition.commonFields.map(emitParameter).map("    val " + _ + "\n").mkString + "}"
            val variants = definition.variants.map(emitVariantDefinition(definition, _))
            val head = "sealed abstract class " + definition.name + generics + " extends Product with Serializable"
            head + commonFields + variants.map("\n" + _).mkString
        }
    }

    def emitLetDefinition(definition : DLet, mutable : Boolean = false) : String = {
        val typeAnnotation = emitTypeAnnotation(definition.variableType)
        val mutability = if(mutable) "var" else "val"
        mutability + " " + definition.name + typeAnnotation + " = " + emitTerm(definition.value)
    }

    def emitFunctionDefinition(definition : DFunction) : String = {
        val signature = emitSignature(definition.signature)
        definition.body match {
            case ELambda(_, List(matchCase))
                if matchCase.patterns.forall { case PVariable(_, None) => true; case _ => false } =>
                val body = emitStatements(matchCase.body)
                signature + " = {\n" + body + "\n}"
            case _ =>
                val tuple = "(" + definition.signature.parameters.map(p => p.name).mkString(", ") + ")"
                val cases = definition.body.cases.map(emitCase).mkString("\n")
                signature + " = " + tuple + " match {\n" + cases + "\n}"
        }
    }

    def emitTraitDefinition(definition : DTrait) : String = {
        val generics = emitTypeParameters(definition.generics)
        val implicits = emitConstraints(definition.constraints)
        val parameters = if(definition.generatorParameters.isEmpty) ""
            else "(" + definition.generatorParameters.map(emitParameter).mkString(", ") + ")"
        val methods = if(definition.methods.isEmpty) "" else " {\n\n" + definition.methods.map { signature =>
            val body = definition.methodDefaults.find(_._1 == signature.name).map { case (_, e) =>
                " {\n" + emitStatements(e) + "\n}"
            }.orElse(definition.methodGenerators.find(_._1 == signature.name).map { case (_, e) =>
                " {\n// TODO: Generate\n}"
            }).getOrElse {
                ""
            }
            emitSignature(signature) + body
        }.mkString("\n\n") + "\n\n}"
        "abstract class " + definition.name + generics + parameters + implicits + methods
    }

    def emitInstanceDefinition(definition : DInstance) : String = {
        val signature = emitSignature(Signature(
            definition.at,
            definition.name + "_" + definition.hashCode().abs,
            List(),
            definition.constraints,
            List(),
            Type(definition.at, "?", List())
        ))
        val methods = " {\n\n" + definition.methods.map(emitFunctionDefinition).mkString("\n\n") + "\n\n}"
        val value = "new " + emitType(Type(definition.at, definition.name, definition.generics)) + methods
        "implicit " + signature + " = " + value
    }

    def emitVariantDefinition(typeDefinition : DType, definition : Variant) : String = {
        val generics = emitTypeParameters(typeDefinition.generics)
        val allFields = typeDefinition.commonFields ++ definition.fields
        val fields = "(" + allFields.map(emitParameter).mkString(", ") + ")"
        "case class " + definition.name + generics + fields + " extends " + typeDefinition.name + generics
    }

    def emitSignature(signature : Signature) : String = {
        val generics = emitTypeParameters(signature.generics)
        val parameters = "(" + signature.parameters.map(emitParameter).mkString(", ") + ")"
        val returnType = emitTypeAnnotation(signature.returnType)
        "def " + signature.name + generics + parameters + returnType
    }

    def emitParameter(parameter : Parameter) : String = {
        val mutability = if(parameter.mutable) "var " else ""
        val defaultValue = parameter.default.map(f => " = " + emitTerm(f)).getOrElse("")
        mutability + parameter.name + emitTypeAnnotation(parameter.valueType) + defaultValue
    }

    def emitConstraints(constraints : List[Constraint]) : String = if(constraints.isEmpty) "" else {
        val pairs = constraints.map(_.representation).map(emitType).zipWithIndex
        "(implicit " + pairs.map { case (k, v) => "i_" + v + " : " + k }.mkString(", ") + ")"
    }

    def emitTypeParameters(generics : List[String]) = {
        if(generics.isEmpty) "" else "[" + generics.mkString(", ") + "]"
    }

    def emitTypeAnnotation(t : Type) : String = {
        if(t.name == "?") "" else " : " + emitType(t)
    }

    def emitType(t : Type) : String = {
        val generics = if(t.generics.isEmpty) "" else "[" + t.generics.map(emitType).mkString(", ") + "]"
        t.name.replace("_", ".") + generics
    }

    def emitStatements(term : Term) : String = term match {
        case EFunctions(at, functions, body) =>
            val functionStrings = functions.map(f => emitFunctionDefinition(DFunction(at, None, f.signature, f.body)))
            functionStrings.mkString("\n") + "\n" + emitStatements(body)
        case ELet(at, mutable, name, valueType, value, body) =>
            emitLetDefinition(DLet(at, None, name, valueType, value), mutable) + ";\n" + emitStatements(body)
        case ESequential(at, before, after) =>
            emitStatements(before) + ";\n" + emitStatements(after)
        case EAssign(at, operator, name, value) =>
            name + " " + operator + " " + emitTerm(value)
        case EAssignField(at, operator, field, value) =>
            emitTerm(field) + " " + operator + " " + emitTerm(value)
        case _ => emitTerm(term)
    }

    def emitTerm(term : Term) : String = term match {
        case EString(at, value) => value
        case EInt(at, value) => value
        case EFloat(at, value) => value
        case EVariable(at, name) => name.replace("_", ".")
        case EList(at, items) => "List(" + items.map(emitTerm).mkString(", ") + ")"
        case EVariant(at, name, arguments) => name + "(" + arguments.map(emitTerm).mkString(", ") + ")"
        case EField(at, record, field) => emitTerm(record) + "." + field
        case ELambda(at, List(MatchCase(_, patterns, body))) if(patterns.forall(_.isInstanceOf[PVariable])) =>
            val parameters = patterns.map(_.asInstanceOf[PVariable].name.getOrElse("_")).mkString(", ")
            "{(" + parameters + ") =>\n" + emitStatements(body) + "\n}"
        case ELambda(at, cases) =>
            val casesString = cases.map(emitCase).mkString("\n")
            "{\n" + casesString + "\n}"
        case ECall(at, EVariable(_, operator), List(), List(value)) if !operator.head.isLetter =>
            "(" + operator + emitTerm(value) + ")"
        case ECall(at, EVariable(_, operator), List(), List(left, right)) if !operator.head.isLetter =>
            "(" + emitTerm(left) + " " + operator + " " + emitTerm(right) + ")"
        case ECall(at, function, typeArguments, arguments) =>
            val generics = if(typeArguments.isEmpty) "" else "[" + typeArguments.map(emitType).mkString(", ") + "]"
            emitTerm(function) + generics + "(" + arguments.map(emitTerm).mkString(", ") + ")"
        case _ : EFunctions | _ : ELet | _ : ESequential | _ : EAssign | _ : EAssignField =>
            "{\n" + emitStatements(term) + "\n}"
    }

    def emitCase(matchCase : MatchCase) = {
        val patterns = matchCase.patterns.map(emitPattern).mkString(", ")
        "case (" + patterns + ") =>\n" + emitStatements(matchCase.body)
    }

    def emitPattern(pattern : MatchPattern) : String = pattern match {
        case PVariable(at, name) => name.getOrElse("_")
        case PVariant(at, name, patterns) =>
            name + "(" + patterns.map(emitPattern).mkString(", ") + ")"
    }

}
