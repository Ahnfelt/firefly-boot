package firefly
import firefly.Firefly_Core._

import firefly.Emitter._

import firefly.Main._

import firefly.Parser._

import firefly.Syntax._

import firefly.Token._

import firefly.Tokenizer._

import firefly.Wildcards._
object Parser {

case class Parser(file : String, tokens : Array[Token], end : Token, var offset : Int)

case class Poly(generics : List[String], constraints : List[Constraint])
val binaryOperators = Array(List("||"), List("&&"), List("!=", "=="), List("<=", ">=", "<", ">"), List("::"), List("++"), List("+", "-"), List("*", "/", "%"), List("^"))

implicit class Parser_fail[T](self : Parser) {

def fail(at : Location, message : String) : T = Parser.fail(self, at, message)

}

implicit class Parser_current(self : Parser) {

def current() : Token = Parser.current(self)

}

implicit class Parser_ahead(self : Parser) {

def ahead() : Token = Parser.ahead(self)

}

implicit class Parser_aheadAhead(self : Parser) {

def aheadAhead() : Token = Parser.aheadAhead(self)

}

implicit class Parser_skip(self : Parser) {

def skip(kind : TokenKind) : Token = Parser.skip(self, kind)

}

implicit class Parser_rawSkip(self : Parser) {

def rawSkip(kind : TokenKind, value : String) : Token = Parser.rawSkip(self, kind, value)

}

implicit class Parser_currentIsSeparator(self : Parser) {

def currentIsSeparator(kind : TokenKind) : Bool = Parser.currentIsSeparator(self, kind)

}

implicit class Parser_skipSeparator(self : Parser) {

def skipSeparator(kind : TokenKind) : Token = Parser.skipSeparator(self, kind)

}

implicit class Parser_parseModule(self : Parser) {

def parseModule() : Module = Parser.parseModule(self)

}

implicit class Parser_parseLetDefinition(self : Parser) {

def parseLetDefinition(scopeType : Option[String] = None()) : DLet = Parser.parseLetDefinition(self, scopeType)

}

implicit class Parser_parseFunctionDefinition(self : Parser) {

def parseFunctionDefinition(scopeType : Option[String] = None()) : DFunction = Parser.parseFunctionDefinition(self, scopeType)

}

implicit class Parser_parseSignature(self : Parser) {

def parseSignature(scopeType : Option[String] = None()) : Signature = Parser.parseSignature(self, scopeType)

}

implicit class Parser_parseTraitDefinition(self : Parser) {

def parseTraitDefinition() : DTrait = Parser.parseTraitDefinition(self)

}

implicit class Parser_parseInstanceDefinition(self : Parser) {

def parseInstanceDefinition() : DInstance = Parser.parseInstanceDefinition(self)

}

implicit class Parser_parseTypeDefinition(self : Parser) {

def parseTypeDefinition() : DType = Parser.parseTypeDefinition(self)

}

implicit class Parser_parseImportDefinition(self : Parser) {

def parseImportDefinition() : DImport = Parser.parseImportDefinition(self)

}

implicit class Parser_parseDependencyDefinition(self : Parser) {

def parseDependencyDefinition() : DDependency = Parser.parseDependencyDefinition(self)

}

implicit class Parser_parseVersion(self : Parser) {

def parseVersion() : Version = Parser.parseVersion(self)

}

implicit class Parser_parseDashedName(self : Parser) {

def parseDashedName() : String = Parser.parseDashedName(self)

}

implicit class Parser_parseTypeParameters(self : Parser) {

def parseTypeParameters() : Poly = Parser.parseTypeParameters(self)

}

implicit class Parser_parseTypeArguments(self : Parser) {

def parseTypeArguments(parenthesis : Boolean = False()) : List[Type] = Parser.parseTypeArguments(self, parenthesis)

}

implicit class Parser_parseFunctionParameters(self : Parser) {

def parseFunctionParameters(allowMutable : Boolean = False()) : List[Parameter] = Parser.parseFunctionParameters(self, allowMutable)

}

implicit class Parser_parseFunctionArguments(self : Parser) {

def parseFunctionArguments() : List[Argument] = Parser.parseFunctionArguments(self)

}

implicit class Parser_parseOptionalType(self : Parser) {

def parseOptionalType() : Type = Parser.parseOptionalType(self)

}

implicit class Parser_parseLambda(self : Parser) {

def parseLambda(defaultParameterCount : Int = 0, ignoreGenerateKeyword : Boolean = False(), allowColon : Boolean = False()) : ELambda = Parser.parseLambda(self, defaultParameterCount, ignoreGenerateKeyword, allowColon)

}

implicit class Parser_parseCase(self : Parser) {

def parseCase() : MatchCase = Parser.parseCase(self)

}

implicit class Parser_parsePattern(self : Parser) {

def parsePattern() : MatchPattern = Parser.parsePattern(self)

}

implicit class Parser_parseType(self : Parser) {

def parseType() : Type = Parser.parseType(self)

}

implicit class Parser_parseStatements(self : Parser) {

def parseStatements() : Term = Parser.parseStatements(self)

}

implicit class Parser_parseStatement(self : Parser) {

def parseStatement() : Term = Parser.parseStatement(self)

}

implicit class Parser_parseLet(self : Parser) {

def parseLet() : Term = Parser.parseLet(self)

}

implicit class Parser_parseFunctions(self : Parser) {

def parseFunctions() : Term = Parser.parseFunctions(self)

}

implicit class Parser_parseTerm(self : Parser) {

def parseTerm() : Term = Parser.parseTerm(self)

}

implicit class Parser_parseBinary(self : Parser) {

def parseBinary(level : Int) : Term = Parser.parseBinary(self, level)

}

implicit class Parser_parseUnary(self : Parser) {

def parseUnary() : Term = Parser.parseUnary(self)

}

implicit class Parser_parseFieldsAndCalls(self : Parser) {

def parseFieldsAndCalls() : Term = Parser.parseFieldsAndCalls(self)

}

implicit class Parser_parseAtom(self : Parser) {

def parseAtom() : Term = Parser.parseAtom(self)

}

implicit class Parser_parseVariant(self : Parser) {

def parseVariant(prefix : String) : Term = Parser.parseVariant(self, prefix)

}

implicit class Parser_parseCopy(self : Parser) {

def parseCopy(record : Term) : Term = Parser.parseCopy(self, record)

}

implicit class Parser_parseRecord(self : Parser) {

def parseRecord() : List[Field] = Parser.parseRecord(self)

}

implicit class Parser_parseRecordType(self : Parser) {

def parseRecordType() : List[Pair[String, Type]] = Parser.parseRecordType(self)

}

implicit class Parser_parseRecordPattern(self : Parser) {

def parseRecordPattern() : List[Pair[String, MatchPattern]] = Parser.parseRecordPattern(self)

}

implicit class Parser_parseList(self : Parser) {

def parseList() : Term = Parser.parseList(self)

}


object Parser {

def of(file : String, tokens : Array[Token]) : Parser = {
Parser(file, tokens, tokens.last, 0)
}

def fail[T](self : Parser, at : Location, message : String) : T = {
panic(((message + " ") + at.show))
}

def current(self : Parser) : Token = {
if_((self.offset < self.tokens.length), {() =>
self.tokens(self.offset)
}).else_({() =>
self.end
})
}

def ahead(self : Parser) : Token = {
if_(((self.offset + 1) < self.tokens.length), {() =>
self.tokens((self.offset + 1))
}).else_({() =>
self.end
})
}

def aheadAhead(self : Parser) : Token = {
if_(((self.offset + 2) < self.tokens.length), {() =>
self.tokens((self.offset + 2))
}).else_({() =>
self.end
})
}

def skip(self : Parser, kind : TokenKind) : Token = {
val c = self.current;
if_((c.kind != kind), {() =>
self.fail(c.at, ((("Expected " + kind) + ", got ") + c.raw))
});
self.offset += 1;
c
}

def rawSkip(self : Parser, kind : TokenKind, value : String) : Token = {
val c = self.current;
if_((c.kind != kind), {() =>
self.fail(c.at, ((((("Expected " + kind) + " ") + value) + ", got ") + c.raw))
});
if_((!c.rawIs(value)), {() =>
self.fail(c.at, ((("Expected " + value) + " got ") + c.raw))
});
self.offset += 1;
c
}

def currentIsSeparator(self : Parser, kind : TokenKind) : Bool = {
(self.current.is(kind) || self.current.is(LSeparator()))
}

def skipSeparator(self : Parser, kind : TokenKind) : Token = {
if_(self.current.is(LSeparator()), {() =>
self.skip(LSeparator())
}).else_({() =>
self.skip(kind)
})
}

def parseModule(self : Parser) : Module = {
var result = Module(self.file, List(), List(), List(), List(), List(), List(), List());
while_({() =>
(!self.current.is(LEnd()))
}, {() =>
if_((self.current.is(LLower()) && (self.ahead.is(LAssign()) || self.ahead.is(LColon()))), {() =>
result = result.copy(lets = (self.parseLetDefinition() :: result.lets))
}).elseIf({() =>
((self.current.is(LNamespace()) && self.ahead.is(LLower())) && self.aheadAhead.is2(LAssign(), LColon()))
}, {() =>
val namespace = Some(self.skip(LNamespace()).raw);
result = result.copy(lets = (self.parseLetDefinition(namespace) :: result.lets))
}).elseIf({() =>
(self.current.is(LLower()) && self.ahead.is(LBracketLeft()))
}, {() =>
result = result.copy(functions = (self.parseFunctionDefinition() :: result.functions))
}).elseIf({() =>
((self.current.is(LNamespace()) && self.ahead.is(LLower())) && self.aheadAhead.is(LBracketLeft()))
}, {() =>
val namespace = Some(self.skip(LNamespace()).raw);
result = result.copy(functions = (self.parseFunctionDefinition(namespace) :: result.functions))
}).elseIf({() =>
(self.current.is(LKeyword()) && self.current.rawIs("trait"))
}, {() =>
result = result.copy(traits = (self.parseTraitDefinition() :: result.traits))
}).elseIf({() =>
(self.current.is(LKeyword()) && self.current.rawIs("instance"))
}, {() =>
result = result.copy(instances = (self.parseInstanceDefinition() :: result.instances))
}).elseIf({() =>
(self.current.is(LKeyword()) && self.current.rawIs("type"))
}, {() =>
result = result.copy(types = (self.parseTypeDefinition() :: result.types))
}).elseIf({() =>
(self.current.is(LKeyword()) && self.current.rawIs("import"))
}, {() =>
result = result.copy(imports = (self.parseImportDefinition() :: result.imports))
}).elseIf({() =>
(self.current.is(LKeyword()) && ((self.current.rawIs("safe") || self.current.rawIs("unsafe")) || self.current.rawIs("trust")))
}, {() =>
result = result.copy(dependencies = (self.parseDependencyDefinition() :: result.dependencies))
}).else_({() =>
self.skip(LEnd())
});
if_((!self.current.is(LEnd())), {() =>
self.skipSeparator(LSemicolon())
})
});
Module(file = self.file, dependencies = result.dependencies.reverse, imports = result.imports.reverse, lets = result.lets.reverse, functions = result.functions.reverse, types = result.types.reverse, traits = result.traits.reverse, instances = result.instances.reverse)
}

def parseLetDefinition(self : Parser, scopeType : Option[String] = None()) : DLet = {
val nameToken = self.skip(LLower());
val variableType = if_(self.current.is(LColon()), {() =>
self.skip(LColon());
self.parseType()
}).else_({() =>
Type(nameToken.at, "?", List())
});
self.skip(LAssign());
val value = self.parseTerm();
DLet(nameToken.at, scopeType, nameToken.raw, variableType, value)
}

def parseFunctionDefinition(self : Parser, scopeType : Option[String] = None()) : DFunction = {
val signature = self.parseSignature(scopeType);
val body = self.parseLambda(signature.parameters.size);
DFunction(signature.at, scopeType, signature, body)
}

def parseSignature(self : Parser, scopeType : Option[String] = None()) : Signature = {
val nameToken = self.skip(LLower());
val poly = if_(self.current.rawIs("["), {() =>
self.parseTypeParameters()
}).else_({() =>
Poly(List(), List())
});
val parameters = self.parseFunctionParameters();
val returnType = self.parseOptionalType();
Signature(nameToken.at, nameToken.raw, poly.generics, poly.constraints, parameters, returnType)
}

def parseTraitDefinition(self : Parser) : DTrait = {
self.rawSkip(LKeyword(), "trait");
val nameToken = self.skip(LUpper());
val poly = if_((!self.current.rawIs("[")), {() =>
Poly(List(), List())
}).else_({() =>
self.parseTypeParameters()
});
val generatorParameters = if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionParameters()
});
var methodGenerators = List[Pair[String, Term]]();
var methodDefaults = List[Pair[String, Term]]();
val methodSignatures = if_((!self.current.rawIs("{")), {() =>
List()
}).else_({() =>
var signatures = List[Signature]();
self.rawSkip(LBracketLeft(), "{");
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val signature = self.parseSignature(Some(nameToken.raw));
signatures ::= signature;
if_(self.current.rawIs("{"), {() =>
val generator = (self.ahead.is(LKeyword()) && self.ahead.rawIs("generate"));
val body = self.parseLambda(signature.parameters.size, ignoreGenerateKeyword = True());
if_(generator, {() =>
methodGenerators ::= Pair(signature.name, body)
}).else_({() =>
methodDefaults ::= Pair(signature.name, body)
})
});
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LSemicolon())
})
});
self.rawSkip(LBracketRight(), "}");
signatures
});
DTrait(nameToken.at, nameToken.raw, poly.generics, poly.constraints, generatorParameters, methodSignatures.reverse, methodDefaults.reverse, methodGenerators.reverse)
}

def parseInstanceDefinition(self : Parser) : DInstance = {
self.rawSkip(LKeyword(), "instance");
val nameToken = self.skip(LUpper());
var typeArguments = List[Type]();
self.rawSkip(LBracketLeft(), "[");
val token = self.skip(LUpper());
val poly = if_((!self.current.rawIs("[")), {() =>
Poly(List(), List())
}).else_({() =>
self.parseTypeParameters()
});
typeArguments ::= Type(token.at, token.raw, poly.generics.map({(_w1) =>
Type(token.at, _w1, List())
}));
while_({() =>
self.current.is(LComma())
}, {() =>
self.skip(LComma());
typeArguments ::= self.parseType()
});
self.rawSkip(LBracketRight(), "]");
val generatorArguments = if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionArguments()
});
val methods = if_((!self.current.rawIs("{")), {() =>
List()
}).else_({() =>
var definitions = List[DFunction]();
self.rawSkip(LBracketLeft(), "{");
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
definitions ::= self.parseFunctionDefinition(Some(nameToken.raw));
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LSemicolon())
})
});
self.rawSkip(LBracketRight(), "}");
definitions
});
val traitType = Type(nameToken.at, nameToken.raw, typeArguments.reverse);
DInstance(nameToken.at, poly.generics, poly.constraints, traitType, generatorArguments, methods)
}

def parseTypeDefinition(self : Parser) : DType = {
self.rawSkip(LKeyword(), "type");
val nameToken = self.skip(LUpper());
val poly = if_((!self.current.rawIs("[")), {() =>
Poly(List(), List())
}).else_({() =>
self.parseTypeParameters()
});
val commonFields = if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionParameters(allowMutable = True())
});
val variants = if_((!self.current.rawIs("{")), {() =>
List(Variant(nameToken.at, nameToken.raw, List()))
}).else_({() =>
self.rawSkip(LBracketLeft(), "{");
var reverseVariants = List[Variant]();
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val variantNameToken = self.skip(LUpper());
val variantFields = if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionParameters(allowMutable = True())
});
reverseVariants ::= Variant(variantNameToken.at, variantNameToken.raw, variantFields);
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LSemicolon())
})
});
self.rawSkip(LBracketRight(), "}");
reverseVariants.reverse
});
DType(nameToken.at, nameToken.raw, poly.generics, poly.constraints, commonFields, variants)
}

def parseImportDefinition(self : Parser) : DImport = {
self.rawSkip(LKeyword(), "import");
val aliasToken = self.skip(LUpper());
if_((!self.current.is(LKeyword())), {() =>
DImport(aliasToken.at, aliasToken.raw, None(), List(), aliasToken.raw)
}).else_({() =>
self.rawSkip(LKeyword(), "from");
val firstName = self.parseDashedName();
val package_ = if_(self.current.is(LColon()), {() =>
val user = firstName;
self.skip(LColon());
val name = self.parseDashedName();
if_(self.current.rawIs("/"), {() =>
self.skip(LOperator())
});
Pair(user, name)
});
var path = if_(package_.isEmpty, {() =>
List(firstName)
}).else_({() =>
List()
});
if_((self.current.rawIs("/") && self.ahead.is2(LLower(), LUpper())), {() =>
self.skip(LOperator())
});
while_({() =>
self.current.is(LLower())
}, {() =>
path ::= self.parseDashedName();
if_((self.current.rawIs("/") && self.ahead.is2(LLower(), LUpper())), {() =>
self.skip(LOperator())
})
});
val file = if_(self.current.is(LUpper()), {() =>
self.skip(LUpper()).raw
}).else_({() =>
aliasToken.raw
});
DImport(aliasToken.at, aliasToken.raw, package_, path.reverse, file)
})
}

def parseDependencyDefinition(self : Parser) : DDependency = {
val safety = if_(self.current.rawIs("safe"), {() =>
Safe()
}).else_({() =>
if_(self.current.rawIs("unsafe"), {() =>
Unsafe()
}).else_({() =>
Trust()
})
});
val at = self.skip(LKeyword()).at;
val user = self.skip(LLower()).raw;
self.skip(LColon());
val name = self.skip(LLower()).raw;
var goodVersions = List[Version]();
var badVersions = List[Version]();
if_(self.current.rawIs("("), {() =>
self.skip(LBracketLeft());
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val bad = self.current.rawIs("!");
if_(bad, {() =>
self.skip(LOperator())
});
val version = self.parseVersion();
if_(bad, {() =>
badVersions ::= version
}).else_({() =>
goodVersions ::= version
});
if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
self.skip(LBracketRight())
});
DDependency(at, Pair(user, name), safety, goodVersions.reverse, badVersions.reverse)
}

def parseVersion(self : Parser) : Version = {
if_(self.current.is(LFloat()), {() =>
val majorMinor = self.skip(LFloat());
val parts = majorMinor.raw.split('.');
val patch = if_(self.current.is(LDot()), {() =>
self.skip(LDot());
self.skip(LInt()).raw.toInt
}).else_({() =>
0
});
Version(majorMinor.at, parts(0).toInt, parts(1).toInt, patch)
}).else_({() =>
val major = self.skip(LInt());
Version(major.at, major.raw.toInt, 0, 0)
})
}

def parseDashedName(self : Parser) : String = {
val at = self.current.at;
def readPart() = {
if_(self.current.is(LInt()), {() =>
val prefix = self.skip(LInt()).raw;
if_(self.current.is(LLower()), {() =>
(prefix + self.skip(LLower()).raw)
}).else_({() =>
prefix
})
}).else_({() =>
self.skip(LLower()).raw
})
}
var part = readPart();
while_({() =>
self.current.rawIs("-")
}, {() =>
self.skip(LOperator());
part = ((part + "-") + readPart())
});
if_(part.exists({(_w1) =>
_w1.isUpper
}), {() =>
self.fail(at, ("Package names and paths must not contain upper case letters: " + part))
});
if_(part.exists({(_w1) =>
(_w1 == '_')
}), {() =>
self.fail(at, ("Package names and paths must not contain underscores: " + part))
});
part
}

def parseTypeParameters(self : Parser) : Poly = {
self.rawSkip(LBracketLeft(), "[");
var parameters = List[String]();
var constraints = List[Constraint]();
while_({() =>
((!self.current.is(LBracketRight())) && (!self.current.is(LSemicolon())))
}, {() =>
if_(self.ahead.is(LBracketLeft()), {() =>
constraints ::= Constraint(self.parseType())
}).else_({() =>
val parameterNameToken = self.skip(LUpper());
parameters ::= parameterNameToken.raw;
while_({() =>
self.current.is(LColon())
}, {() =>
self.skip(LColon());
val t = self.parseType();
constraints ::= Constraint(t.copy(generics = (Type(t.at, parameterNameToken.raw, List()) :: t.generics)))
})
});
if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
if_(self.current.is(LSemicolon()), {() =>
self.skip(LSemicolon());
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
constraints ::= Constraint(self.parseType());
if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
})
});
self.rawSkip(LBracketRight(), "]");
Poly(parameters.reverse, constraints.reverse)
}

def parseTypeArguments(self : Parser, parenthesis : Boolean = False()) : List[Type] = {
self.rawSkip(LBracketLeft(), if_(parenthesis, {() =>
"("
}).else_({() =>
"["
}));
var types = List[Type]();
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
types ::= self.parseType();
if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
self.rawSkip(LBracketRight(), if_(parenthesis, {() =>
")"
}).else_({() =>
"]"
}));
types.reverse
}

def parseFunctionParameters(self : Parser, allowMutable : Boolean = False()) : List[Parameter] = {
var parameters = List[Parameter]();
self.rawSkip(LBracketLeft(), "(");
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val mutable = ((allowMutable && self.current.is(LKeyword())) && self.current.rawIs("mutable"));
if_(mutable, {() =>
self.skip(LKeyword())
});
val parameterNameToken = self.skip(LLower());
val parameterType = self.parseOptionalType();
val default = if_((!self.current.is(LAssign())), {() =>
None()
}).else_({() =>
self.skip(LAssign());
Some(self.parseTerm())
});
parameters ::= Parameter(parameterNameToken.at, mutable, parameterNameToken.raw, parameterType, default);
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
parameters.reverse
}

def parseFunctionArguments(self : Parser) : List[Argument] = {
self.rawSkip(LBracketLeft(), "(");
var arguments = List[Argument]();
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val nameToken = if_((self.current.is(LLower()) && self.ahead.is(LAssign())), {() =>
val token = self.skip(LLower());
self.skip(LAssign());
Some(token)
}).else_({() =>
None()
});
val value = self.parseTerm();
arguments ::= Argument(nameToken.map({(_w1) =>
_w1.at
}).getOrElse(value.at), nameToken.map({(_w1) =>
_w1.raw
}), value);
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
arguments.reverse
}

def parseOptionalType(self : Parser) : Type = {
val token = self.current;
if_(token.is(LColon()), {() =>
self.skip(LColon());
self.parseType()
}).else_({() =>
Type(token.at, "?", List())
})
}

def parseLambda(self : Parser, defaultParameterCount : Int = 0, ignoreGenerateKeyword : Boolean = False(), allowColon : Boolean = False()) : ELambda = {
val colon = (allowColon && self.current.is(LColon()));
val token = if_(colon, {() =>
self.skip(LColon())
}).else_({() =>
self.rawSkip(LBracketLeft(), "{")
});
if_(((ignoreGenerateKeyword && self.current.is(LKeyword())) && self.current.rawIs("generate")), {() =>
self.skip(LKeyword())
});
val result = if_(self.current.is(LPipe()), {() =>
var cases = List[MatchCase]();
while_({() =>
self.current.is(LPipe())
}, {() =>
cases ::= self.parseCase()
});
cases.reverse
}).elseIf({() =>
(self.current.is(LLower()) && self.ahead.is2(LComma(), LArrowThick()))
}, {() =>
var parameters = List[MatchPattern]();
while_({() =>
(!self.current.is(LArrowThick()))
}, {() =>
val parameterToken = self.skip(LLower());
parameters ::= PVariable(parameterToken.at, Some(parameterToken.raw));
if_((!self.current.is(LArrowThick())), {() =>
self.skip(LComma())
})
});
self.skip(LArrowThick());
val term = self.parseStatements();
List(MatchCase(token.at, parameters.reverse, None(), term))
}).else_({() =>
val term = self.parseStatements();
val wildcards = Wildcards.of();
val e = wildcards.fixWildcards(term);
val arguments = if_((wildcards.seenWildcards != 0), {() =>
1.to(wildcards.seenWildcards).toList.map({(i) =>
PVariable(token.at, Some(("_w" + i)))
})
}).else_({() =>
1.to(defaultParameterCount).toList.map({(i) =>
PVariable(token.at, None())
})
});
List(MatchCase(token.at, arguments, None(), e))
});
if_((!colon), {() =>
self.rawSkip(LBracketRight(), "}")
});
ELambda(token.at, result)
}

def parseCase(self : Parser) : MatchCase = {
val token = self.skip(LPipe());
var patterns = List[MatchPattern]();
while_({() =>
((!self.current.is(LArrowThick())) && (!self.current.rawIs("{")))
}, {() =>
patterns ::= self.parsePattern();
if_(((!self.current.is(LArrowThick())) && (!self.current.rawIs("{"))), {() =>
self.skip(LComma())
})
});
val condition = if_((!self.current.rawIs("{")), {() =>
None()
}).else_({() =>
self.skip(LBracketLeft());
val term = self.parseStatements();
self.skip(LBracketRight());
Some(term)
});
self.skip(LArrowThick());
val body = self.parseStatements();
MatchCase(token.at, patterns.reverse, condition, body)
}

def parsePattern(self : Parser) : MatchPattern = {
val pattern = if_(self.current.is(LWildcard()), {() =>
val token = self.skip(LWildcard());
PVariable(token.at, None())
}).elseIf({() =>
self.current.is(LLower())
}, {() =>
val token = self.skip(LLower());
PVariable(token.at, Some(token.raw))
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
val at = self.current.at;
val pair = self.parseRecordPattern().unzip;
PVariant(at, ("Record$" + pair.first.mkString("$")), pair.second)
}).else_({() =>
val token = self.skip(LUpper());
if_(self.current.rawIs("("), {() =>
var patterns = List[MatchPattern]();
self.rawSkip(LBracketLeft(), "(");
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
patterns ::= self.parsePattern();
if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
PVariant(token.at, token.raw, patterns.reverse)
}).else_({() =>
if_(self.current.is(LLower()), {() =>
val asToken = self.skip(LLower());
PVariantAs(token.at, token.raw, Some(asToken.raw))
}).elseIf({() =>
self.current.is(LWildcard())
}, {() =>
self.skip(LWildcard());
PVariantAs(token.at, token.raw, None())
}).else_({() =>
PVariant(token.at, token.raw, List())
})
})
});
if_(self.current.rawIs("@"), {() =>
val atToken = self.skip(LOperator());
val asToken = self.skip(LLower());
PAlias(atToken.at, pattern, asToken.raw)
}).else_({() =>
pattern
})
}

def parseType(self : Parser) : Type = {
val leftTypes = if_(((self.current.rawIs("(") && self.ahead.is(LLower())) && self.aheadAhead.is(LColon())), {() =>
val at = self.current.at;
val pair = self.parseRecordType().unzip;
List(Type(at, ("Record$" + pair.first.mkString("$")), pair.second))
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
self.parseTypeArguments(parenthesis = True())
}).else_({() =>
val namespace = if_(self.current.is(LNamespace()), {() =>
self.skip(LNamespace()).raw
}).else_({() =>
""
});
val token = self.skip(LUpper());
val arguments = if_((!self.current.rawIs("[")), {() =>
List()
}).else_({() =>
self.parseTypeArguments()
});
List(Type(token.at, (namespace + token.raw), arguments))
});
if_(((!self.current.is(LArrowThick())) && (leftTypes.size == 1)), {() =>
leftTypes.head
}).else_({() =>
val arrowToken = self.skip(LArrowThick());
val rightType = self.parseType();
Type(arrowToken.at, ("Function$" + leftTypes.size), (leftTypes ++ List(rightType)))
})
}

def parseStatements(self : Parser) : Term = {
if_(self.current.is2(LBracketRight(), LPipe()), {() =>
EVariant(self.current.at, "Unit", List(), None())
}).else_({() =>
var result = self.parseStatement();
while_({() =>
self.currentIsSeparator(LSemicolon())
}, {() =>
val token = self.skipSeparator(LSemicolon());
result = ESequential(token.at, result, self.parseStatement())
});
result
})
}

def parseStatement(self : Parser) : Term = {
if_((self.current.is(LKeyword()) && (self.current.rawIs("let") || self.current.rawIs("mutable"))), {() =>
self.parseLet()
}).else_({() =>
if_((self.current.is(LKeyword()) && self.current.rawIs("function")), {() =>
self.parseFunctions()
}).else_({() =>
val term = self.parseTerm();
if_(((!self.current.is(LAssign())) && (!self.current.is3(LAssignPlus(), LAssignMinus(), LAssignLink()))), {() =>
term
}).else_({() =>
val token = do_({() =>
if_(self.current.is(LAssignPlus()), {() =>
self.skip(LAssignPlus())
}).else_({() =>
if_(self.current.is(LAssignMinus()), {() =>
self.skip(LAssignMinus())
}).else_({() =>
if_(self.current.is(LAssignLink()), {() =>
self.skip(LAssignLink())
}).else_({() =>
self.skip(LAssign())
})
})
})
});
val operator = token.raw.dropRight(1);
val value = self.parseTerm();
pipe_dot(term)({
case (EVariable(_, name)) =>
EAssign(token.at, operator, name, value)
case (e @ (_ : EField)) =>
EAssignField(token.at, operator, e, value)
case (_) =>
self.fail(token.at, "Only variables and fields are assignable")
})
})
})
})
}

def parseLet(self : Parser) : Term = {
val mutable = self.current.rawIs("mutable");
if_(mutable, {() =>
self.rawSkip(LKeyword(), "mutable")
}).else_({() =>
self.rawSkip(LKeyword(), "let")
});
val nameToken = self.skip(LLower());
val valueType = if_((!self.current.is(LColon())), {() =>
Type(nameToken.at, "?", List())
}).else_({() =>
self.skip(LColon());
self.parseType()
});
self.skip(LAssign());
val value = self.parseTerm();
self.skipSeparator(LSemicolon());
val body = self.parseStatements();
ELet(nameToken.at, mutable, nameToken.raw, valueType, value, body)
}

def parseFunctions(self : Parser) : Term = {
val at = self.current.at;
var functions = List[LocalFunction]();
while_({() =>
self.current.rawIs("function")
}, {() =>
self.rawSkip(LKeyword(), "function");
val signature = self.parseSignature();
val body = self.parseLambda();
functions ::= LocalFunction(signature, body);
self.skipSeparator(LSemicolon())
});
val body = self.parseStatements();
EFunctions(at, functions.reverse, body)
}

def parseTerm(self : Parser) : Term = {
self.parseBinary(0)
}

def parseBinary(self : Parser, level : Int) : Term = {
if_((level >= binaryOperators.length), {() =>
self.parseUnary()
}).else_({() =>
val operators = binaryOperators(level);
var result = self.parseBinary((level + 1));
if_(self.current.is(LOperator()), {() =>
while_({() =>
operators.exists(self.current.rawIs)
}, {() =>
val token = self.skip(LOperator());
val right = self.parseBinary((level + 1));
val arguments = List(Argument(result.at, None(), result), Argument(right.at, None(), right));
result = ECall(token.at, EVariable(token.at, token.raw), List(), arguments)
})
});
result
})
}

def parseUnary(self : Parser) : Term = {
if_(self.current.is(LOperator()), {() =>
val token = self.skip(LOperator());
val term = self.parseUnary();
ECall(token.at, EVariable(token.at, token.raw), List(), List(Argument(term.at, None(), term)))
}).else_({() =>
self.parseFieldsAndCalls()
})
}

def parseFieldsAndCalls(self : Parser) : Term = {
var result = self.parseAtom();
while_({() =>
((self.current.is(LBracketLeft()) || self.current.is(LColon())) || self.current.is(LDot()))
}, {() =>
if_(self.current.is(LDot()), {() =>
self.skip(LDot());
if_(self.current.rawIs("{"), {() =>
val term = self.parseAtom();
result = EPipe(term.at, result, term)
}).elseIf({() =>
self.current.is2(LUpper(), LNamespace())
}, {() =>
result = self.parseCopy(result)
}).else_({() =>
val token = self.skip(LLower());
result = EField(token.at, result, token.raw)
})
}).else_({() =>
val at = self.current.at;
val typeArguments = if_((!self.current.rawIs("[")), {() =>
List()
}).else_({() =>
self.parseTypeArguments()
});
val arguments = if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionArguments()
});
var moreArguments = List[Argument]();
var lastWasCurly = False();
while_({() =>
(self.current.rawIs("{") || self.current.is(LColon()))
}, {() =>
lastWasCurly = self.current.rawIs("{");
val lambda = self.parseLambda(allowColon = True());
moreArguments ::= Argument(lambda.at, None(), lambda)
});
result = ECall(at, result, typeArguments, (arguments ++ moreArguments.reverse));
if_((lastWasCurly && self.current.is(LLower())), {() =>
val token = self.skip(LLower());
result = EField(token.at, result, token.raw)
})
})
});
result
}

def parseAtom(self : Parser) : Term = {
if_(self.current.is(LString()), {() =>
val token = self.skip(LString());
EString(token.at, token.raw)
}).elseIf({() =>
self.current.is(LChar())
}, {() =>
val token = self.skip(LChar());
EChar(token.at, token.raw)
}).elseIf({() =>
self.current.is(LInt())
}, {() =>
val token = self.skip(LInt());
EInt(token.at, token.raw)
}).elseIf({() =>
self.current.is(LFloat())
}, {() =>
val token = self.skip(LFloat());
EFloat(token.at, token.raw)
}).elseIf({() =>
self.current.is(LLower())
}, {() =>
val token = self.skip(LLower());
EVariable(token.at, token.raw)
}).elseIf({() =>
self.current.is(LNamespace())
}, {() =>
val namespaceToken = self.skip(LNamespace());
val extraNamespace = if_((!self.current.is(LNamespace())), {() =>
None()
}).else_({() =>
Some(self.skip(LNamespace()).raw)
});
val prefix = (namespaceToken.raw + extraNamespace.getOrElse(""));
if_(self.current.is(LLower()), {() =>
val token = self.skip(LLower());
EVariable(token.at, (prefix + token.raw))
}).else_({() =>
self.parseVariant(prefix)
})
}).elseIf({() =>
self.current.is(LUpper())
}, {() =>
self.parseVariant("")
}).elseIf({() =>
self.current.rawIs("{")
}, {() =>
self.parseLambda()
}).elseIf({() =>
self.current.rawIs("[")
}, {() =>
self.parseList()
}).elseIf({() =>
((self.current.rawIs("(") && self.ahead.is(LLower())) && self.aheadAhead.is(LAssign()))
}, {() =>
ERecord(self.current.at, self.parseRecord())
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
self.rawSkip(LBracketLeft(), "(");
val result = self.parseTerm();
self.rawSkip(LBracketRight(), ")");
result
}).elseIf({() =>
self.current.is(LWildcard())
}, {() =>
val token = self.skip(LWildcard());
EWildcard(token.at, 0)
}).else_({() =>
self.fail(self.current.at, ("Expected atom, got " + self.current.raw))
})
}

def parseVariant(self : Parser, prefix : String) : Term = {
val token = self.skip(LUpper());
val name = (prefix + token.raw);
val typeArguments = if_((!self.current.rawIs("[")), {() =>
List()
}).else_({() =>
self.parseTypeArguments()
});
val arguments = if_((!self.current.rawIs("(")), {() =>
None()
}).else_({() =>
Some(self.parseFunctionArguments())
});
EVariant(token.at, name, typeArguments, arguments)
}

def parseCopy(self : Parser, record : Term) : Term = {
val namespace = if_((!self.current.is(LNamespace())), {() =>
""
}).else_({() =>
self.skip(LNamespace()).raw
});
val extraNamespace = if_((!self.current.is(LNamespace())), {() =>
""
}).else_({() =>
self.skip(LNamespace()).raw
});
val prefix = (namespace + extraNamespace);
val token = self.skip(LUpper());
val name = (prefix + token.raw);
val fields = self.parseRecord();
ECopy(token.at, name, record, fields)
}

def parseRecord(self : Parser) : List[Field] = {
var fields = List[Field]();
self.rawSkip(LBracketLeft(), "(");
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val fieldToken = self.skip(LLower());
self.skip(LAssign());
fields ::= Field(fieldToken.at, fieldToken.raw, self.parseTerm());
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
fields.reverse
}

def parseRecordType(self : Parser) : List[Pair[String, Type]] = {
var fields = List[Pair[String, Type]]();
self.rawSkip(LBracketLeft(), "(");
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val fieldToken = self.skip(LLower());
self.skipSeparator(LColon());
fields ::= Pair(fieldToken.raw, self.parseType());
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
fields.reverse.sortBy({(_w1) =>
_w1.first
})
}

def parseRecordPattern(self : Parser) : List[Pair[String, MatchPattern]] = {
var fields = List[Pair[String, MatchPattern]]();
self.rawSkip(LBracketLeft(), "(");
while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val fieldToken = self.skip(LLower());
self.skip(LAssign());
fields ::= Pair(fieldToken.raw, self.parsePattern());
if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
fields.reverse
}

def parseList(self : Parser) : Term = {
var items = List[Term]();
val at = self.rawSkip(LBracketLeft(), "[").at;
while_({() =>
(!self.current.rawIs("]"))
}, {() =>
items ::= self.parseTerm();
if_((!self.current.rawIs("]")), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), "]");
EList(at, items.reverse)
}

}
}
