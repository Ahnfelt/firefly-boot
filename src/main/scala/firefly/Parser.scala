package firefly
import firefly.Firefly_Core._

import firefly.Token._

import firefly.Wildcards._

import firefly.Syntax._
object Parser {

case class Parser(file : String, tokens : Firefly_Core.Array[Token], end : Token, var offset : Int)

case class Poly(generics : Firefly_Core.List[String], constraints : Firefly_Core.List[Constraint])
val binaryOperators = Firefly_Core.Array(Firefly_Core.List("||"), Firefly_Core.List("&&"), Firefly_Core.List("!=", "=="), Firefly_Core.List("<=", ">=", "<", ">"), Firefly_Core.List("::"), Firefly_Core.List("++"), Firefly_Core.List("+", "-"), Firefly_Core.List("*", "/", "%"), Firefly_Core.List("^"))
def make(file : String, tokens : Firefly_Core.Array[Token]) : Parser = {
Parser(file, tokens, tokens.last, 0)
}
implicit class Parser_extend0(self : Parser) {

def fail[T](at : Location, message : String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}

def current() : Token = {
Firefly_Core.if_((self.offset < self.tokens.length), {() =>
self.tokens(self.offset)
}).else_({() =>
self.end
})
}

def ahead() : Token = {
Firefly_Core.if_(((self.offset + 1) < self.tokens.length), {() =>
self.tokens((self.offset + 1))
}).else_({() =>
self.end
})
}

def aheadAhead() : Token = {
Firefly_Core.if_(((self.offset + 2) < self.tokens.length), {() =>
self.tokens((self.offset + 2))
}).else_({() =>
self.end
})
}

def skip(kind : TokenKind) : Token = {
val c = self.current;
Firefly_Core.if_((c.kind != kind), {() =>
self.fail(c.at, ((("Expected " + kind) + ", got ") + c.raw))
});
self.offset += 1;
c
}

def rawSkip(kind : TokenKind, value : String) : Token = {
val c = self.current;
Firefly_Core.if_((c.kind != kind), {() =>
self.fail(c.at, ((((("Expected " + kind) + " ") + value) + ", got ") + c.raw))
});
Firefly_Core.if_((!c.rawIs(value)), {() =>
self.fail(c.at, ((("Expected " + value) + " got ") + c.raw))
});
self.offset += 1;
c
}

def currentIsSeparator(kind : TokenKind) : Firefly_Core.Bool = {
(self.current.is(kind) || self.current.is(LSeparator()))
}

def skipSeparator(kind : TokenKind) : Token = {
Firefly_Core.if_(self.current.is(LSeparator()), {() =>
self.skip(LSeparator())
}).else_({() =>
self.skip(kind)
})
}

def parseModule() : Module = {
var result = Module(self.file, Firefly_Core.List(), Firefly_Core.List(), Firefly_Core.List(), Firefly_Core.List(), Firefly_Core.List(), Firefly_Core.List(), Firefly_Core.List(), Firefly_Core.List());
Firefly_Core.while_({() =>
(!self.current.is(LEnd()))
}, {() =>
Firefly_Core.if_((self.current.is(LLower()) && (self.ahead.is(LAssign()) || self.ahead.is(LColon()))), {() =>
result = result.copy(lets = (self.parseLetDefinition() :: result.lets))
}).elseIf({() =>
(self.current.is(LLower()) && self.ahead.is(LBracketLeft()))
}, {() =>
result = result.copy(functions = (self.parseFunctionDefinition() :: result.functions))
}).elseIf({() =>
(self.current.is(LKeyword()) && self.current.rawIs("extend"))
}, {() =>
result = result.copy(extends_ = (self.parseExtendDefinition() :: result.extends_))
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
Firefly_Core.if_((!self.current.is(LEnd())), {() =>
self.skipSeparator(LSemicolon())
})
});
Module(file = self.file, dependencies = result.dependencies.reverse, imports = result.imports.reverse, lets = result.lets.reverse, functions = result.functions.reverse, extends_ = result.extends_.reverse, types = result.types.reverse, traits = result.traits.reverse, instances = result.instances.reverse)
}

def parseLetDefinition() : DLet = {
val nameToken = self.skip(LLower());
val variableType = Firefly_Core.if_(self.current.is(LColon()), {() =>
self.skip(LColon());
self.parseType()
}).else_({() =>
Type(nameToken.at, "?", Firefly_Core.List())
});
self.skip(LAssign());
val value = self.parseTerm();
DLet(nameToken.at, nameToken.raw, variableType, value)
}

def parseFunctionDefinition() : DFunction = {
val signature = self.parseSignature();
val body = self.parseLambda(signature.parameters.size);
DFunction(signature.at, signature, body)
}

def parseSignature() : Signature = {
val nameToken = self.skip(LLower());
val poly = Firefly_Core.if_(self.current.rawIs("["), {() =>
self.parseTypeParameters()
}).else_({() =>
Poly(Firefly_Core.List(), Firefly_Core.List())
});
val parameters = self.parseFunctionParameters();
val returnType = self.parseOptionalType();
Signature(nameToken.at, nameToken.raw, poly.generics, poly.constraints, parameters, returnType)
}

def parseExtendDefinition() : DExtend = {
self.rawSkip(LKeyword(), "extend");
val nameToken = self.skip(LLower());
val poly = Firefly_Core.if_(self.current.rawIs("["), {() =>
self.parseTypeParameters()
}).else_({() =>
Poly(Firefly_Core.List(), Firefly_Core.List())
});
self.skip(LColon());
val type_ = self.parseType();
self.rawSkip(LBracketLeft(), "{");
var methods = Firefly_Core.List[DFunction]();
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
methods ::= self.parseFunctionDefinition();
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LSemicolon())
})
});
self.rawSkip(LBracketRight(), "}");
DExtend(nameToken.at, nameToken.raw, poly.generics, poly.constraints, type_, methods.reverse)
}

def parseTraitDefinition() : DTrait = {
self.rawSkip(LKeyword(), "trait");
val nameToken = self.skip(LUpper());
val poly = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Poly(Firefly_Core.List(), Firefly_Core.List())
}).else_({() =>
self.parseTypeParameters()
});
val generatorParameters = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseFunctionParameters()
});
var methodGenerators = Firefly_Core.List[Firefly_Core.Pair[String, Term]]();
var methodDefaults = Firefly_Core.List[Firefly_Core.Pair[String, Term]]();
val methodSignatures = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
Firefly_Core.List()
}).else_({() =>
var signatures = Firefly_Core.List[Signature]();
self.rawSkip(LBracketLeft(), "{");
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val signature = self.parseSignature();
signatures ::= signature;
Firefly_Core.if_(self.current.rawIs("{"), {() =>
val generator = (self.ahead.is(LKeyword()) && self.ahead.rawIs("generate"));
val body = self.parseLambda(signature.parameters.size, ignoreGenerateKeyword = Firefly_Core.True());
Firefly_Core.if_(generator, {() =>
methodGenerators ::= Firefly_Core.Pair(signature.name, body)
}).else_({() =>
methodDefaults ::= Firefly_Core.Pair(signature.name, body)
})
});
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LSemicolon())
})
});
self.rawSkip(LBracketRight(), "}");
signatures
});
DTrait(nameToken.at, nameToken.raw, poly.generics, poly.constraints, generatorParameters, methodSignatures.reverse, methodDefaults.reverse, methodGenerators.reverse)
}

def parseInstanceDefinition() : DInstance = {
self.rawSkip(LKeyword(), "instance");
val nameToken = self.skip(LUpper());
var typeArguments = Firefly_Core.List[Type]();
self.rawSkip(LBracketLeft(), "[");
val token = self.skip(LUpper());
val poly = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Poly(Firefly_Core.List(), Firefly_Core.List())
}).else_({() =>
self.parseTypeParameters()
});
typeArguments ::= Type(token.at, token.raw, poly.generics.map({(_w1) =>
Type(token.at, _w1, Firefly_Core.List())
}));
Firefly_Core.while_({() =>
self.current.is(LComma())
}, {() =>
self.skip(LComma());
typeArguments ::= self.parseType()
});
self.rawSkip(LBracketRight(), "]");
val generatorArguments = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseFunctionArguments()
});
val methods = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
Firefly_Core.List()
}).else_({() =>
var definitions = Firefly_Core.List[DFunction]();
self.rawSkip(LBracketLeft(), "{");
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
definitions ::= self.parseFunctionDefinition();
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LSemicolon())
})
});
self.rawSkip(LBracketRight(), "}");
definitions
});
val traitType = Type(nameToken.at, nameToken.raw, typeArguments.reverse);
DInstance(nameToken.at, poly.generics, poly.constraints, traitType, generatorArguments, methods)
}

def parseTypeDefinition() : DType = {
self.rawSkip(LKeyword(), "type");
val nameToken = self.skip(LUpper());
val poly = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Poly(Firefly_Core.List(), Firefly_Core.List())
}).else_({() =>
self.parseTypeParameters()
});
val commonFields = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseFunctionParameters(allowMutable = Firefly_Core.True())
});
val variants = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
Firefly_Core.List(Variant(nameToken.at, nameToken.raw, Firefly_Core.List()))
}).else_({() =>
self.rawSkip(LBracketLeft(), "{");
var reverseVariants = Firefly_Core.List[Variant]();
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val variantNameToken = self.skip(LUpper());
val variantFields = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseFunctionParameters(allowMutable = Firefly_Core.True())
});
reverseVariants ::= Variant(variantNameToken.at, variantNameToken.raw, variantFields);
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LSemicolon())
})
});
self.rawSkip(LBracketRight(), "}");
reverseVariants.reverse
});
DType(nameToken.at, nameToken.raw, poly.generics, poly.constraints, commonFields, variants)
}

def parseImportDefinition() : DImport = {
self.rawSkip(LKeyword(), "import");
val aliasToken = self.skip(LUpper());
Firefly_Core.if_((!self.current.is(LKeyword())), {() =>
DImport(aliasToken.at, aliasToken.raw, Firefly_Core.None(), Firefly_Core.List(), aliasToken.raw)
}).else_({() =>
self.rawSkip(LKeyword(), "from");
val firstName = self.parseDashedName();
val package_ = Firefly_Core.if_(self.current.is(LColon()), {() =>
val user = firstName;
self.skip(LColon());
val name = self.parseDashedName();
Firefly_Core.if_(self.current.rawIs("/"), {() =>
self.skip(LOperator())
});
Firefly_Core.Pair(user, name)
});
var path = Firefly_Core.if_(package_.isEmpty, {() =>
Firefly_Core.List(firstName)
}).else_({() =>
Firefly_Core.List()
});
Firefly_Core.if_((self.current.rawIs("/") && self.ahead.is2(LLower(), LUpper())), {() =>
self.skip(LOperator())
});
Firefly_Core.while_({() =>
self.current.is(LLower())
}, {() =>
path ::= self.parseDashedName();
Firefly_Core.if_((self.current.rawIs("/") && self.ahead.is2(LLower(), LUpper())), {() =>
self.skip(LOperator())
})
});
val file = Firefly_Core.if_(self.current.is(LUpper()), {() =>
self.skip(LUpper()).raw
}).else_({() =>
aliasToken.raw
});
DImport(aliasToken.at, aliasToken.raw, package_, path.reverse, file)
})
}

def parseDependencyDefinition() : DDependency = {
val safety = Firefly_Core.if_(self.current.rawIs("safe"), {() =>
Safe()
}).else_({() =>
Firefly_Core.if_(self.current.rawIs("unsafe"), {() =>
Unsafe()
}).else_({() =>
Trust()
})
});
val at = self.skip(LKeyword()).at;
val user = self.skip(LLower()).raw;
self.skip(LColon());
val name = self.skip(LLower()).raw;
var goodVersions = Firefly_Core.List[Version]();
var badVersions = Firefly_Core.List[Version]();
Firefly_Core.if_(self.current.rawIs("("), {() =>
self.skip(LBracketLeft());
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val bad = self.current.rawIs("!");
Firefly_Core.if_(bad, {() =>
self.skip(LOperator())
});
val version = self.parseVersion();
Firefly_Core.if_(bad, {() =>
badVersions ::= version
}).else_({() =>
goodVersions ::= version
});
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
self.skip(LBracketRight())
});
DDependency(at, Firefly_Core.Pair(user, name), safety, goodVersions.reverse, badVersions.reverse)
}

def parseVersion() : Version = {
Firefly_Core.if_(self.current.is(LFloat()), {() =>
val majorMinor = self.skip(LFloat());
val parts = majorMinor.raw.split('.');
val patch = Firefly_Core.if_(self.current.is(LDot()), {() =>
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

def parseDashedName() : String = {
val at = self.current.at;
def readPart() = {
Firefly_Core.if_(self.current.is(LInt()), {() =>
val prefix = self.skip(LInt()).raw;
Firefly_Core.if_(self.current.is(LLower()), {() =>
(prefix + self.skip(LLower()).raw)
}).else_({() =>
prefix
})
}).else_({() =>
self.skip(LLower()).raw
})
}
var part = readPart();
Firefly_Core.while_({() =>
self.current.rawIs("-")
}, {() =>
self.skip(LOperator());
part = ((part + "-") + readPart())
});
Firefly_Core.if_(part.exists({(_w1) =>
_w1.isUpper
}), {() =>
self.fail(at, ("Package names and paths must not contain upper case letters: " + part))
});
Firefly_Core.if_((part.exists({(_w1) =>
(_w1 == '_')
}) || part.exists({(_w1) =>
(_w1 == '.')
})), {() =>
self.fail(at, ("Package names and paths must not contain underscores or dots: " + part))
});
part
}

def parseTypeParameters() : Poly = {
self.rawSkip(LBracketLeft(), "[");
var parameters = Firefly_Core.List[String]();
var constraints = Firefly_Core.List[Constraint]();
Firefly_Core.while_({() =>
((!self.current.is(LBracketRight())) && (!self.current.is(LSemicolon())))
}, {() =>
Firefly_Core.if_(self.ahead.is(LBracketLeft()), {() =>
constraints ::= Constraint(self.parseType())
}).else_({() =>
val parameterNameToken = self.skip(LUpper());
parameters ::= parameterNameToken.raw;
Firefly_Core.while_({() =>
self.current.is(LColon())
}, {() =>
self.skip(LColon());
val t = self.parseType();
constraints ::= Constraint(t.copy(generics = (Type(t.at, parameterNameToken.raw, Firefly_Core.List()) :: t.generics)))
})
});
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
Firefly_Core.if_(self.current.is(LSemicolon()), {() =>
self.skip(LSemicolon());
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
constraints ::= Constraint(self.parseType());
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
})
});
self.rawSkip(LBracketRight(), "]");
Poly(parameters.reverse, constraints.reverse)
}

def parseTypeArguments(parenthesis : Boolean = Firefly_Core.False()) : Firefly_Core.List[Type] = {
self.rawSkip(LBracketLeft(), Firefly_Core.if_(parenthesis, {() =>
"("
}).else_({() =>
"["
}));
var types = Firefly_Core.List[Type]();
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
types ::= self.parseType();
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
self.rawSkip(LBracketRight(), Firefly_Core.if_(parenthesis, {() =>
")"
}).else_({() =>
"]"
}));
types.reverse
}

def parseFunctionParameters(allowMutable : Boolean = Firefly_Core.False()) : Firefly_Core.List[Parameter] = {
var parameters = Firefly_Core.List[Parameter]();
self.rawSkip(LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val mutable = ((allowMutable && self.current.is(LKeyword())) && self.current.rawIs("mutable"));
Firefly_Core.if_(mutable, {() =>
self.skip(LKeyword())
});
val parameterNameToken = self.skip(LLower());
val parameterType = self.parseOptionalType();
val default = Firefly_Core.if_((!self.current.is(LAssign())), {() =>
Firefly_Core.None()
}).else_({() =>
self.skip(LAssign());
Firefly_Core.Some(self.parseTerm())
});
parameters ::= Parameter(parameterNameToken.at, mutable, parameterNameToken.raw, parameterType, default);
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
parameters.reverse
}

def parseFunctionArguments() : Firefly_Core.List[Argument] = {
self.rawSkip(LBracketLeft(), "(");
var arguments = Firefly_Core.List[Argument]();
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val nameToken = Firefly_Core.if_((self.current.is(LLower()) && self.ahead.is(LAssign())), {() =>
val token = self.skip(LLower());
self.skip(LAssign());
Firefly_Core.Some(token)
}).else_({() =>
Firefly_Core.None()
});
val value = self.parseTerm();
arguments ::= Argument(nameToken.map({(_w1) =>
_w1.at
}).getOrElse(value.at), nameToken.map({(_w1) =>
_w1.raw
}), value);
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
arguments.reverse
}

def parseOptionalType() : Type = {
val token = self.current;
Firefly_Core.if_(token.is(LColon()), {() =>
self.skip(LColon());
self.parseType()
}).else_({() =>
Type(token.at, "?", Firefly_Core.List())
})
}

def parseLambda(defaultParameterCount : Int = 0, ignoreGenerateKeyword : Boolean = Firefly_Core.False(), allowColon : Boolean = Firefly_Core.False()) : ELambda = {
val colon = (allowColon && self.current.is(LColon()));
val token = Firefly_Core.if_(colon, {() =>
self.skip(LColon())
}).else_({() =>
self.rawSkip(LBracketLeft(), "{")
});
Firefly_Core.if_(((ignoreGenerateKeyword && self.current.is(LKeyword())) && self.current.rawIs("generate")), {() =>
self.skip(LKeyword())
});
val result = Firefly_Core.if_(self.current.is(LPipe()), {() =>
var cases = Firefly_Core.List[MatchCase]();
Firefly_Core.while_({() =>
self.current.is(LPipe())
}, {() =>
cases ::= self.parseCase()
});
cases.reverse
}).elseIf({() =>
(self.current.is(LLower()) && self.ahead.is2(LComma(), LArrowThick()))
}, {() =>
var parameters = Firefly_Core.List[MatchPattern]();
Firefly_Core.while_({() =>
(!self.current.is(LArrowThick()))
}, {() =>
val parameterToken = self.skip(LLower());
parameters ::= PVariable(parameterToken.at, Firefly_Core.Some(parameterToken.raw));
Firefly_Core.if_((!self.current.is(LArrowThick())), {() =>
self.skip(LComma())
})
});
self.skip(LArrowThick());
val term = self.parseStatements();
Firefly_Core.List(MatchCase(token.at, parameters.reverse, Firefly_Core.None(), term))
}).else_({() =>
val term = self.parseStatements();
val wildcards = Wildcards.make();
val e = wildcards.fixWildcards(term);
val arguments = Firefly_Core.if_((wildcards.seenWildcards != 0), {() =>
1.to(wildcards.seenWildcards).toList.map({(i) =>
PVariable(token.at, Firefly_Core.Some(("_w" + i)))
})
}).else_({() =>
1.to(defaultParameterCount).toList.map({(i) =>
PVariable(token.at, Firefly_Core.None())
})
});
Firefly_Core.List(MatchCase(token.at, arguments, Firefly_Core.None(), e))
});
Firefly_Core.if_((!colon), {() =>
self.rawSkip(LBracketRight(), "}")
});
ELambda(token.at, result)
}

def parseCase() : MatchCase = {
val token = self.skip(LPipe());
var patterns = Firefly_Core.List[MatchPattern]();
Firefly_Core.while_({() =>
((!self.current.is(LArrowThick())) && (!self.current.rawIs("{")))
}, {() =>
patterns ::= self.parsePattern();
Firefly_Core.if_(((!self.current.is(LArrowThick())) && (!self.current.rawIs("{"))), {() =>
self.skip(LComma())
})
});
val condition = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
Firefly_Core.None()
}).else_({() =>
self.skip(LBracketLeft());
val term = self.parseStatements();
self.skip(LBracketRight());
Firefly_Core.Some(term)
});
self.skip(LArrowThick());
val body = self.parseStatements();
MatchCase(token.at, patterns.reverse, condition, body)
}

def parsePattern() : MatchPattern = {
val pattern = Firefly_Core.if_(self.current.is(LWildcard()), {() =>
val token = self.skip(LWildcard());
PVariable(token.at, Firefly_Core.None())
}).elseIf({() =>
self.current.is(LLower())
}, {() =>
val token = self.skip(LLower());
PVariable(token.at, Firefly_Core.Some(token.raw))
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
val at = self.current.at;
val pair = self.parseRecordPattern().unzip;
PVariant(at, ("Record$" + pair.first.mkString("$")), pair.second)
}).else_({() =>
val token = self.skip(LUpper());
Firefly_Core.if_(self.current.rawIs("("), {() =>
var patterns = Firefly_Core.List[MatchPattern]();
self.rawSkip(LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
patterns ::= self.parsePattern();
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skip(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
PVariant(token.at, token.raw, patterns.reverse)
}).else_({() =>
Firefly_Core.if_(self.current.is(LLower()), {() =>
val asToken = self.skip(LLower());
PVariantAs(token.at, token.raw, Firefly_Core.Some(asToken.raw))
}).elseIf({() =>
self.current.is(LWildcard())
}, {() =>
self.skip(LWildcard());
PVariantAs(token.at, token.raw, Firefly_Core.None())
}).else_({() =>
PVariant(token.at, token.raw, Firefly_Core.List())
})
})
});
Firefly_Core.if_(self.current.rawIs("@"), {() =>
val atToken = self.skip(LOperator());
val asToken = self.skip(LLower());
PAlias(atToken.at, pattern, asToken.raw)
}).else_({() =>
pattern
})
}

def parseType() : Type = {
val leftTypes = Firefly_Core.if_(((self.current.rawIs("(") && self.ahead.is(LLower())) && self.aheadAhead.is(LColon())), {() =>
val at = self.current.at;
val pair = self.parseRecordType().unzip;
Firefly_Core.List(Type(at, ("Record$" + pair.first.mkString("$")), pair.second))
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
self.parseTypeArguments(parenthesis = Firefly_Core.True())
}).else_({() =>
val namespace = Firefly_Core.if_(self.current.is(LNamespace()), {() =>
self.skip(LNamespace()).raw
}).else_({() =>
""
});
val token = self.skip(LUpper());
val arguments = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseTypeArguments()
});
Firefly_Core.List(Type(token.at, (namespace + token.raw), arguments))
});
Firefly_Core.if_(((!self.current.is(LArrowThick())) && (leftTypes.size == 1)), {() =>
leftTypes.head
}).else_({() =>
val arrowToken = self.skip(LArrowThick());
val rightType = self.parseType();
Type(arrowToken.at, ("Function$" + leftTypes.size), (leftTypes ++ Firefly_Core.List(rightType)))
})
}

def parseStatements() : Term = {
Firefly_Core.if_(self.current.is2(LBracketRight(), LPipe()), {() =>
EVariant(self.current.at, "Unit", Firefly_Core.List(), Firefly_Core.None())
}).else_({() =>
var result = self.parseStatement();
Firefly_Core.while_({() =>
self.currentIsSeparator(LSemicolon())
}, {() =>
val token = self.skipSeparator(LSemicolon());
result = ESequential(token.at, result, self.parseStatement())
});
result
})
}

def parseStatement() : Term = {
Firefly_Core.if_((self.current.is(LKeyword()) && (self.current.rawIs("let") || self.current.rawIs("mutable"))), {() =>
self.parseLet()
}).else_({() =>
Firefly_Core.if_((self.current.is(LKeyword()) && self.current.rawIs("function")), {() =>
self.parseFunctions()
}).else_({() =>
val term = self.parseTerm();
Firefly_Core.if_(((!self.current.is(LAssign())) && (!self.current.is3(LAssignPlus(), LAssignMinus(), LAssignLink()))), {() =>
term
}).else_({() =>
val token = Firefly_Core.do_({() =>
Firefly_Core.if_(self.current.is(LAssignPlus()), {() =>
self.skip(LAssignPlus())
}).else_({() =>
Firefly_Core.if_(self.current.is(LAssignMinus()), {() =>
self.skip(LAssignMinus())
}).else_({() =>
Firefly_Core.if_(self.current.is(LAssignLink()), {() =>
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

def parseLet() : Term = {
val mutable = self.current.rawIs("mutable");
Firefly_Core.if_(mutable, {() =>
self.rawSkip(LKeyword(), "mutable")
}).else_({() =>
self.rawSkip(LKeyword(), "let")
});
val nameToken = self.skip(LLower());
val valueType = Firefly_Core.if_((!self.current.is(LColon())), {() =>
Type(nameToken.at, "?", Firefly_Core.List())
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

def parseFunctions() : Term = {
val at = self.current.at;
var functions = Firefly_Core.List[LocalFunction]();
Firefly_Core.while_({() =>
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

def parseTerm() : Term = {
self.parseBinary(0)
}

def parseBinary(level : Int) : Term = {
Firefly_Core.if_((level >= binaryOperators.length), {() =>
self.parseUnary()
}).else_({() =>
val operators = binaryOperators(level);
var result = self.parseBinary((level + 1));
Firefly_Core.if_(self.current.is(LOperator()), {() =>
Firefly_Core.while_({() =>
operators.exists(self.current.rawIs)
}, {() =>
val token = self.skip(LOperator());
val right = self.parseBinary((level + 1));
val arguments = Firefly_Core.List(Argument(result.at, Firefly_Core.None(), result), Argument(right.at, Firefly_Core.None(), right));
result = ECall(token.at, EVariable(token.at, token.raw), Firefly_Core.List(), arguments)
})
});
result
})
}

def parseUnary() : Term = {
Firefly_Core.if_(self.current.is(LOperator()), {() =>
val token = self.skip(LOperator());
val term = self.parseUnary();
ECall(token.at, EVariable(token.at, token.raw), Firefly_Core.List(), Firefly_Core.List(Argument(term.at, Firefly_Core.None(), term)))
}).else_({() =>
self.parseFieldsAndCalls()
})
}

def parseFieldsAndCalls() : Term = {
var result = self.parseAtom();
Firefly_Core.while_({() =>
((self.current.is(LBracketLeft()) || self.current.is(LColon())) || self.current.is(LDot()))
}, {() =>
Firefly_Core.if_(self.current.is(LDot()), {() =>
self.skip(LDot());
Firefly_Core.if_(self.current.rawIs("{"), {() =>
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
val typeArguments = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseTypeArguments()
});
val arguments = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseFunctionArguments()
});
var moreArguments = Firefly_Core.List[Argument]();
var lastWasCurly = Firefly_Core.False();
Firefly_Core.while_({() =>
(self.current.rawIs("{") || self.current.is(LColon()))
}, {() =>
lastWasCurly = self.current.rawIs("{");
val lambda = self.parseLambda(allowColon = Firefly_Core.True());
moreArguments ::= Argument(lambda.at, Firefly_Core.None(), lambda)
});
result = ECall(at, result, typeArguments, (arguments ++ moreArguments.reverse));
Firefly_Core.if_((lastWasCurly && self.current.is(LLower())), {() =>
val token = self.skip(LLower());
result = EField(token.at, result, token.raw)
})
})
});
result
}

def parseAtom() : Term = {
Firefly_Core.if_(self.current.is(LString()), {() =>
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
val extraNamespace = Firefly_Core.if_((!self.current.is(LNamespace())), {() =>
Firefly_Core.None()
}).else_({() =>
Firefly_Core.Some(self.skip(LNamespace()).raw)
});
val prefix = (namespaceToken.raw + extraNamespace.getOrElse(""));
Firefly_Core.if_(self.current.is(LLower()), {() =>
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

def parseVariant(prefix : String) : Term = {
val token = self.skip(LUpper());
val name = (prefix + token.raw);
val typeArguments = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Firefly_Core.List()
}).else_({() =>
self.parseTypeArguments()
});
Firefly_Core.if_(self.current.rawIs("?"), {() =>
self.skip(LOperator());
EVariantIs(token.at, name, typeArguments)
}).else_({() =>
val arguments = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
Firefly_Core.None()
}).else_({() =>
Firefly_Core.Some(self.parseFunctionArguments())
});
EVariant(token.at, name, typeArguments, arguments)
})
}

def parseCopy(record : Term) : Term = {
val namespace = Firefly_Core.if_((!self.current.is(LNamespace())), {() =>
""
}).else_({() =>
self.skip(LNamespace()).raw
});
val extraNamespace = Firefly_Core.if_((!self.current.is(LNamespace())), {() =>
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

def parseRecord() : Firefly_Core.List[Field] = {
var fields = Firefly_Core.List[Field]();
self.rawSkip(LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val fieldToken = self.skip(LLower());
self.skip(LAssign());
fields ::= Field(fieldToken.at, fieldToken.raw, self.parseTerm());
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
fields.reverse
}

def parseRecordType() : Firefly_Core.List[Firefly_Core.Pair[String, Type]] = {
var fields = Firefly_Core.List[Firefly_Core.Pair[String, Type]]();
self.rawSkip(LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val fieldToken = self.skip(LLower());
self.skipSeparator(LColon());
fields ::= Firefly_Core.Pair(fieldToken.raw, self.parseType());
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
fields.reverse.sortBy({(_w1) =>
_w1.first
})
}

def parseRecordPattern() : Firefly_Core.List[Firefly_Core.Pair[String, MatchPattern]] = {
var fields = Firefly_Core.List[Firefly_Core.Pair[String, MatchPattern]]();
self.rawSkip(LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(LBracketRight()))
}, {() =>
val fieldToken = self.skip(LLower());
self.skip(LAssign());
fields ::= Firefly_Core.Pair(fieldToken.raw, self.parsePattern());
Firefly_Core.if_((!self.current.is(LBracketRight())), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), ")");
fields.reverse
}

def parseList() : Term = {
var items = Firefly_Core.List[Term]();
val at = self.rawSkip(LBracketLeft(), "[").at;
Firefly_Core.while_({() =>
(!self.current.rawIs("]"))
}, {() =>
items ::= self.parseTerm();
Firefly_Core.if_((!self.current.rawIs("]")), {() =>
self.skipSeparator(LComma())
})
});
self.rawSkip(LBracketRight(), "]");
EList(at, items.reverse)
}

}


object Parser {

val binaryOperators = Firefly_Core.Array(Firefly_Core.List("||"), Firefly_Core.List("&&"), Firefly_Core.List("!=", "=="), Firefly_Core.List("<=", ">=", "<", ">"), Firefly_Core.List("::"), Firefly_Core.List("++"), Firefly_Core.List("+", "-"), Firefly_Core.List("*", "/", "%"), Firefly_Core.List("^"))

def make(file : String, tokens : Firefly_Core.Array[Token]) : Parser = {
Parser(file, tokens, tokens.last, 0)
}

}

}
