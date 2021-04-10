package firefly
import firefly.Firefly_Core._

import firefly.Token_._

import firefly.Wildcards_._

import firefly.Syntax_._
object Parser_ {

case class Parser(file : Firefly_Core.String, tokens : Firefly_Core.Array[Token_.Token], end : Token_.Token, var offset : Firefly_Core.Int, var nextTypeVariableIndex : Firefly_Core.Int)

case class Poly(generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Syntax_.Constraint])
val binaryOperators = List(List("||"), List("&&"), List("!=", "=="), List("<=", ">=", "<", ">"), List("++"), List("+", "-"), List("*", "/", "%"), List("^")).toArray
def make(file : Firefly_Core.String, tokens : Firefly_Core.Array[Token_.Token]) : Parser = {
Parser(Firefly_Core.if_((file == "../core/Core.ff"), {() =>
"ff:core/Core.ff"
}).else_({() =>
file
}), tokens, tokens.last, 0, 1)
}
implicit class Parser_extend0(self : Parser) {

def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}

def current() : Token_.Token = {
Firefly_Core.if_((self.offset < self.tokens.length), {() =>
self.tokens(self.offset)
}).else_({() =>
self.end
})
}

def ahead() : Token_.Token = {
Firefly_Core.if_(((self.offset + 1) < self.tokens.length), {() =>
self.tokens((self.offset + 1))
}).else_({() =>
self.end
})
}

def aheadAhead() : Token_.Token = {
Firefly_Core.if_(((self.offset + 2) < self.tokens.length), {() =>
self.tokens((self.offset + 2))
}).else_({() =>
self.end
})
}

def skip(kind : Token_.TokenKind) : Token_.Token = {
val c = self.current;
Firefly_Core.if_((c.kind != kind), {() =>
self.fail(c.at, ((("Expected " + kind) + ", got ") + c.raw))
});
self.offset += 1;
c
}

def rawSkip(kind : Token_.TokenKind, value : Firefly_Core.String) : Token_.Token = {
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

def freshTypeVariable(at : Syntax_.Location) : Syntax_.Type = {
val result = Syntax_.TVariable(at, self.nextTypeVariableIndex);
self.nextTypeVariableIndex += 2;
result
}

def currentIsSeparator(kind : Token_.TokenKind) : Firefly_Core.Bool = {
(self.current.is(kind) || self.current.is(Token_.LSeparator()))
}

def skipSeparator(kind : Token_.TokenKind) : Token_.Token = {
Firefly_Core.if_(self.current.is(Token_.LSeparator()), {() =>
self.skip(Token_.LSeparator())
}).else_({() =>
self.skip(kind)
})
}

def parseModule() : Syntax_.Module = {
val dependencies = Firefly_Core.listBuilderOf[Syntax_.DDependency]();
val imports = Firefly_Core.listBuilderOf[Syntax_.DImport]();
val types = Firefly_Core.listBuilderOf[Syntax_.DType]();
val traits = Firefly_Core.listBuilderOf[Syntax_.DTrait]();
val instances = Firefly_Core.listBuilderOf[Syntax_.DInstance]();
val extends_ = Firefly_Core.listBuilderOf[Syntax_.DExtend]();
val lets = Firefly_Core.listBuilderOf[Syntax_.DLet]();
val functions = Firefly_Core.listBuilderOf[Syntax_.DFunction]();
Firefly_Core.while_({() =>
(!self.current.is(Token_.LEnd()))
}, {() =>
Firefly_Core.if_((self.current.is(Token_.LLower()) && (self.ahead.is(Token_.LAssign()) || self.ahead.is(Token_.LColon()))), {() =>
lets.append(self.parseLetDefinition())
}).elseIf({() =>
(self.current.is(Token_.LLower()) && self.ahead.is(Token_.LBracketLeft()))
}, {() =>
functions.append(self.parseFunctionDefinition())
}).elseIf({() =>
(self.current.is(Token_.LKeyword()) && self.current.rawIs("extend"))
}, {() =>
extends_.append(self.parseExtendDefinition())
}).elseIf({() =>
(self.current.is(Token_.LKeyword()) && self.current.rawIs("trait"))
}, {() =>
traits.append(self.parseTraitDefinition())
}).elseIf({() =>
(self.current.is(Token_.LKeyword()) && self.current.rawIs("instance"))
}, {() =>
instances.append(self.parseInstanceDefinition())
}).elseIf({() =>
(self.current.is(Token_.LKeyword()) && self.current.rawIs("type"))
}, {() =>
types.append(self.parseTypeDefinition())
}).elseIf({() =>
(self.current.is(Token_.LKeyword()) && self.current.rawIs("import"))
}, {() =>
imports.append(self.parseImportDefinition())
}).elseIf({() =>
(self.current.is(Token_.LKeyword()) && ((self.current.rawIs("safe") || self.current.rawIs("unsafe")) || self.current.rawIs("trust")))
}, {() =>
dependencies.append(self.parseDependencyDefinition())
}).else_({() =>
self.skip(Token_.LEnd())
});
Firefly_Core.if_((!self.current.is(Token_.LEnd())), {() =>
self.skipSeparator(Token_.LSemicolon())
})
});
Syntax_.Module(file = self.file, dependencies = dependencies.drain, imports = imports.drain, lets = lets.drain, functions = functions.drain, extends_ = extends_.drain, types = types.drain, traits = traits.drain, instances = instances.drain)
}

def parseLetDefinition() : Syntax_.DLet = {
val nameToken = self.skip(Token_.LLower());
val variableType = Firefly_Core.if_(self.current.is(Token_.LColon()), {() =>
self.skip(Token_.LColon());
self.parseType()
}).else_({() =>
self.freshTypeVariable(nameToken.at)
});
self.skip(Token_.LAssign());
val value = self.parseTerm();
Syntax_.DLet(nameToken.at, nameToken.raw, variableType, value)
}

def parseFunctionDefinition() : Syntax_.DFunction = {
val signature = self.parseSignature();
val body = self.parseLambda(signature.parameters.size);
Syntax_.DFunction(signature.at, signature, body)
}

def parseSignature() : Syntax_.Signature = {
val nameToken = self.skip(Token_.LLower());
val poly = Firefly_Core.if_(self.current.rawIs("["), {() =>
self.parseTypeParameters()
}).else_({() =>
Poly(List(), List())
});
val parameters = self.parseFunctionParameters();
val returnType = self.parseOptionalType();
Syntax_.Signature(nameToken.at, nameToken.raw, poly.generics, poly.constraints, parameters, returnType)
}

def parseExtendDefinition() : Syntax_.DExtend = {
self.rawSkip(Token_.LKeyword(), "extend");
val nameToken = self.skip(Token_.LLower());
val poly = Firefly_Core.if_(self.current.rawIs("["), {() =>
self.parseTypeParameters()
}).else_({() =>
Poly(List(), List())
});
self.skip(Token_.LColon());
val type_ = self.parseType();
self.rawSkip(Token_.LBracketLeft(), "{");
val methods = Firefly_Core.listBuilderOf[Syntax_.DFunction]();
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
methods.append(self.parseFunctionDefinition());
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LSemicolon())
})
});
self.rawSkip(Token_.LBracketRight(), "}");
Syntax_.DExtend(nameToken.at, nameToken.raw, poly.generics, poly.constraints, type_, methods.drain)
}

def parseTraitDefinition() : Syntax_.DTrait = {
self.rawSkip(Token_.LKeyword(), "trait");
val nameToken = self.skip(Token_.LUpper());
val poly = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Poly(List(), List())
}).else_({() =>
self.parseTypeParameters()
});
val generatorParameters = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionParameters()
});
val methodGenerators = Firefly_Core.listBuilderOf[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Lambda]]();
val methodDefaults = Firefly_Core.listBuilderOf[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Lambda]]();
val methodSignatures = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
List()
}).else_({() =>
val signatures = Firefly_Core.listBuilderOf[Syntax_.Signature]();
self.rawSkip(Token_.LBracketLeft(), "{");
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val signature = self.parseSignature();
signatures.append(signature);
Firefly_Core.if_(self.current.rawIs("{"), {() =>
val generator = (self.ahead.is(Token_.LKeyword()) && self.ahead.rawIs("generate"));
val body = self.parseLambda(signature.parameters.size, ignoreGenerateKeyword = Firefly_Core.True());
Firefly_Core.if_(generator, {() =>
methodGenerators.append(Firefly_Core.Pair(signature.name, body))
}).else_({() =>
methodDefaults.append(Firefly_Core.Pair(signature.name, body))
})
});
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LSemicolon())
})
});
self.rawSkip(Token_.LBracketRight(), "}");
signatures.drain
});
Syntax_.DTrait(nameToken.at, nameToken.raw, poly.generics, poly.constraints, generatorParameters, methodSignatures, methodDefaults.drain, methodGenerators.drain)
}

def parseInstanceDefinition() : Syntax_.DInstance = {
self.rawSkip(Token_.LKeyword(), "instance");
val nameToken = self.skip(Token_.LUpper());
val typeArguments = Firefly_Core.listBuilderOf[Syntax_.Type]();
self.rawSkip(Token_.LBracketLeft(), "[");
val token = self.skip(Token_.LUpper());
val poly = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Poly(List(), List())
}).else_({() =>
self.parseTypeParameters()
});
typeArguments.append(Syntax_.TConstructor(token.at, token.raw, poly.generics.map({(_w1) =>
Syntax_.TConstructor(token.at, _w1, List())
})));
Firefly_Core.while_({() =>
self.current.is(Token_.LComma())
}, {() =>
self.skip(Token_.LComma());
typeArguments.append(self.parseType())
});
self.rawSkip(Token_.LBracketRight(), "]");
val generatorArguments = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionArguments()
});
val methods = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
List()
}).else_({() =>
val definitions = Firefly_Core.listBuilderOf[Syntax_.DFunction]();
self.rawSkip(Token_.LBracketLeft(), "{");
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
definitions.append(self.parseFunctionDefinition());
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LSemicolon())
})
});
self.rawSkip(Token_.LBracketRight(), "}");
definitions.drain
});
val traitType = Syntax_.TConstructor(nameToken.at, nameToken.raw, typeArguments.drain);
Syntax_.DInstance(nameToken.at, poly.generics, poly.constraints, traitType, generatorArguments, methods)
}

def parseTypeDefinition() : Syntax_.DType = {
self.rawSkip(Token_.LKeyword(), "type");
val nameToken = self.skip(Token_.LUpper());
val poly = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
Poly(List(), List())
}).else_({() =>
self.parseTypeParameters()
});
val commonFields = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionParameters(allowMutable = Firefly_Core.True())
});
val variants = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
List(Syntax_.Variant(nameToken.at, nameToken.raw, List()))
}).else_({() =>
self.rawSkip(Token_.LBracketLeft(), "{");
val variantsBuilder = Firefly_Core.listBuilderOf[Syntax_.Variant]();
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val variantNameToken = self.skip(Token_.LUpper());
val variantFields = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionParameters(allowMutable = Firefly_Core.True())
});
variantsBuilder.append(Syntax_.Variant(variantNameToken.at, variantNameToken.raw, variantFields));
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LSemicolon())
})
});
self.rawSkip(Token_.LBracketRight(), "}");
variantsBuilder.drain
});
Syntax_.DType(nameToken.at, nameToken.raw, poly.generics, poly.constraints, commonFields, variants)
}

def parseImportDefinition() : Syntax_.DImport = {
self.rawSkip(Token_.LKeyword(), "import");
val aliasToken = self.skip(Token_.LUpper());
Firefly_Core.if_((!self.current.is(Token_.LKeyword())), {() =>
Syntax_.DImport(aliasToken.at, aliasToken.raw, Firefly_Core.None(), List(), aliasToken.raw)
}).else_({() =>
self.rawSkip(Token_.LKeyword(), "from");
val firstName = self.parseDashedName();
val package_ = Firefly_Core.if_(self.current.is(Token_.LColon()), {() =>
val user = firstName;
self.skip(Token_.LColon());
val name = self.parseDashedName();
Firefly_Core.if_(self.current.rawIs("/"), {() =>
self.skip(Token_.LOperator())
});
Firefly_Core.Pair(user, name)
});
val path = Firefly_Core.listBuilderOf[Firefly_Core.String]();
Firefly_Core.if_(package_.isEmpty, {() =>
path.append(firstName)
});
Firefly_Core.if_((self.current.rawIs("/") && self.ahead.is2(Token_.LLower(), Token_.LUpper())), {() =>
self.skip(Token_.LOperator())
});
Firefly_Core.while_({() =>
self.current.is(Token_.LLower())
}, {() =>
path.append(self.parseDashedName());
Firefly_Core.if_((self.current.rawIs("/") && self.ahead.is2(Token_.LLower(), Token_.LUpper())), {() =>
self.skip(Token_.LOperator())
})
});
val file = Firefly_Core.if_(self.current.is(Token_.LUpper()), {() =>
self.skip(Token_.LUpper()).raw
}).else_({() =>
aliasToken.raw
});
Syntax_.DImport(aliasToken.at, aliasToken.raw, package_, path.drain, file)
})
}

def parseDependencyDefinition() : Syntax_.DDependency = {
val safety = Firefly_Core.if_(self.current.rawIs("safe"), {() =>
Syntax_.Safe()
}).else_({() =>
Firefly_Core.if_(self.current.rawIs("unsafe"), {() =>
Syntax_.Unsafe()
}).else_({() =>
Syntax_.Trust()
})
});
val at = self.skip(Token_.LKeyword()).at;
val user = self.skip(Token_.LLower()).raw;
self.skip(Token_.LColon());
val name = self.skip(Token_.LLower()).raw;
val goodVersions = Firefly_Core.listBuilderOf[Syntax_.Version]();
val badVersions = Firefly_Core.listBuilderOf[Syntax_.Version]();
Firefly_Core.if_(self.current.rawIs("("), {() =>
self.skip(Token_.LBracketLeft());
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val bad = self.current.rawIs("!");
Firefly_Core.if_(bad, {() =>
self.skip(Token_.LOperator())
});
val version = self.parseVersion();
Firefly_Core.if_(bad, {() =>
badVersions.append(version)
}).else_({() =>
goodVersions.append(version)
});
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skip(Token_.LComma())
})
});
self.skip(Token_.LBracketRight())
});
Syntax_.DDependency(at, Firefly_Core.Pair(user, name), safety, goodVersions.drain, badVersions.drain)
}

def parseVersion() : Syntax_.Version = {
Firefly_Core.if_(self.current.is(Token_.LFloat()), {() =>
val majorMinor = self.skip(Token_.LFloat());
val parts = majorMinor.raw.split('.');
val patch = Firefly_Core.if_(self.current.is(Token_.LDot()), {() =>
self.skip(Token_.LDot());
self.skip(Token_.LInt()).raw.toInt
}).else_({() =>
0
});
Syntax_.Version(majorMinor.at, parts(0).toInt, parts(1).toInt, patch)
}).else_({() =>
val major = self.skip(Token_.LInt());
Syntax_.Version(major.at, major.raw.toInt, 0, 0)
})
}

def parseDashedName() : Firefly_Core.String = {
val at = self.current.at;
def readPart() = {
Firefly_Core.if_(self.current.is(Token_.LInt()), {() =>
val prefix = self.skip(Token_.LInt()).raw;
Firefly_Core.if_(self.current.is(Token_.LLower()), {() =>
(prefix + self.skip(Token_.LLower()).raw)
}).else_({() =>
prefix
})
}).else_({() =>
self.skip(Token_.LLower()).raw
})
}
var part = readPart();
Firefly_Core.while_({() =>
self.current.rawIs("-")
}, {() =>
self.skip(Token_.LOperator());
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
self.rawSkip(Token_.LBracketLeft(), "[");
val parameters = Firefly_Core.listBuilderOf[Firefly_Core.String]();
val constraints = Firefly_Core.listBuilderOf[Syntax_.Constraint]();
Firefly_Core.while_({() =>
((!self.current.is(Token_.LBracketRight())) && (!self.current.is(Token_.LSemicolon())))
}, {() =>
Firefly_Core.if_(self.ahead.is(Token_.LBracketLeft()), {() =>
constraints.append(Syntax_.Constraint(self.parseType()))
}).else_({() =>
val parameterNameToken = self.skip(Token_.LUpper());
parameters.append(parameterNameToken.raw);
Firefly_Core.while_({() =>
self.current.is(Token_.LColon())
}, {() =>
self.skip(Token_.LColon());
pipe_dot(self.parseType())({
case (t : Syntax_.TVariable) =>
self.fail(t.at, ("Unexpected type variable: $" + t.index))
case (t : Syntax_.TConstructor) =>
constraints.append(Syntax_.Constraint(t.copy(generics = (List(List(Syntax_.TConstructor(t.at, parameterNameToken.raw, List())), t.generics).flatten))))
})
})
});
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skip(Token_.LComma())
})
});
Firefly_Core.if_(self.current.is(Token_.LSemicolon()), {() =>
self.skip(Token_.LSemicolon());
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
constraints.append(Syntax_.Constraint(self.parseType()));
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skip(Token_.LComma())
})
})
});
self.rawSkip(Token_.LBracketRight(), "]");
Poly(parameters.drain, constraints.drain)
}

def parseTypeArguments(parenthesis : Firefly_Core.Bool = Firefly_Core.False()) : Firefly_Core.List[Syntax_.Type] = {
self.rawSkip(Token_.LBracketLeft(), Firefly_Core.if_(parenthesis, {() =>
"("
}).else_({() =>
"["
}));
val types = Firefly_Core.listBuilderOf[Syntax_.Type]();
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
types.append(self.parseType());
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skip(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), Firefly_Core.if_(parenthesis, {() =>
")"
}).else_({() =>
"]"
}));
types.drain
}

def parseFunctionParameters(allowMutable : Firefly_Core.Bool = Firefly_Core.False()) : Firefly_Core.List[Syntax_.Parameter] = {
val parameters = Firefly_Core.listBuilderOf[Syntax_.Parameter]();
self.rawSkip(Token_.LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val mutable = ((allowMutable && self.current.is(Token_.LKeyword())) && self.current.rawIs("mutable"));
Firefly_Core.if_(mutable, {() =>
self.skip(Token_.LKeyword())
});
val parameterNameToken = self.skip(Token_.LLower());
val parameterType = self.parseOptionalType();
val default = Firefly_Core.if_((!self.current.is(Token_.LAssign())), {() =>
Firefly_Core.None()
}).else_({() =>
self.skip(Token_.LAssign());
Firefly_Core.Some(self.parseTerm())
});
parameters.append(Syntax_.Parameter(parameterNameToken.at, mutable, parameterNameToken.raw, parameterType, default));
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), ")");
parameters.drain
}

def parseFunctionArguments() : Firefly_Core.List[Syntax_.Argument] = {
self.rawSkip(Token_.LBracketLeft(), "(");
val arguments = Firefly_Core.listBuilderOf[Syntax_.Argument]();
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val nameToken = Firefly_Core.if_((self.current.is(Token_.LLower()) && self.ahead.is(Token_.LAssign())), {() =>
val token = self.skip(Token_.LLower());
self.skip(Token_.LAssign());
Firefly_Core.Some(token)
}).else_({() =>
Firefly_Core.None()
});
val value = self.parseTerm();
arguments.append(Syntax_.Argument(nameToken.map({(_w1) =>
_w1.at
}).getOrElse(value.at), nameToken.map({(_w1) =>
_w1.raw
}), value));
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), ")");
arguments.drain
}

def parseOptionalType() : Syntax_.Type = {
val token = self.current;
Firefly_Core.if_(token.is(Token_.LColon()), {() =>
self.skip(Token_.LColon());
self.parseType()
}).else_({() =>
self.freshTypeVariable(token.at)
})
}

def parseLambda(defaultParameterCount : Firefly_Core.Int = 0, ignoreGenerateKeyword : Firefly_Core.Bool = Firefly_Core.False(), allowColon : Firefly_Core.Bool = Firefly_Core.False()) : Syntax_.Lambda = {
val colon = (allowColon && self.current.is(Token_.LColon()));
val token = Firefly_Core.if_(colon, {() =>
self.skip(Token_.LColon())
}).else_({() =>
self.rawSkip(Token_.LBracketLeft(), "{")
});
Firefly_Core.if_(((ignoreGenerateKeyword && self.current.is(Token_.LKeyword())) && self.current.rawIs("generate")), {() =>
self.skip(Token_.LKeyword())
});
val result = Firefly_Core.if_(self.current.is(Token_.LPipe()), {() =>
val cases = Firefly_Core.listBuilderOf[Syntax_.MatchCase]();
Firefly_Core.while_({() =>
self.current.is(Token_.LPipe())
}, {() =>
cases.append(self.parseCase())
});
cases.drain
}).elseIf({() =>
(self.current.is(Token_.LLower()) && self.ahead.is2(Token_.LComma(), Token_.LArrowThick()))
}, {() =>
val parameters = Firefly_Core.listBuilderOf[Syntax_.MatchPattern]();
Firefly_Core.while_({() =>
(!self.current.is(Token_.LArrowThick()))
}, {() =>
val parameterToken = self.skip(Token_.LLower());
parameters.append(Syntax_.PVariable(parameterToken.at, Firefly_Core.Some(parameterToken.raw)));
Firefly_Core.if_((!self.current.is(Token_.LArrowThick())), {() =>
self.skip(Token_.LComma())
})
});
self.skip(Token_.LArrowThick());
val term = self.parseStatements();
List(Syntax_.MatchCase(token.at, parameters.drain, Firefly_Core.None(), term))
}).else_({() =>
val term = self.parseStatements();
val wildcards = Wildcards_.make();
val e = wildcards.fixWildcards(term);
val arguments = Firefly_Core.if_((wildcards.seenWildcards != 0), {() =>
1.to(wildcards.seenWildcards).toList.map({(i) =>
Syntax_.PVariable(token.at, Firefly_Core.Some(("_w" + i)))
})
}).else_({() =>
1.to(defaultParameterCount).toList.map({(i) =>
Syntax_.PVariable(token.at, Firefly_Core.None())
})
});
List(Syntax_.MatchCase(token.at, arguments, Firefly_Core.None(), e))
});
Firefly_Core.if_((!colon), {() =>
self.rawSkip(Token_.LBracketRight(), "}")
});
Syntax_.Lambda(token.at, result)
}

def parseCase() : Syntax_.MatchCase = {
val token = self.skip(Token_.LPipe());
val patterns = Firefly_Core.listBuilderOf[Syntax_.MatchPattern]();
Firefly_Core.while_({() =>
((!self.current.is(Token_.LArrowThick())) && (!self.current.rawIs("{")))
}, {() =>
patterns.append(self.parsePattern());
Firefly_Core.if_(((!self.current.is(Token_.LArrowThick())) && (!self.current.rawIs("{"))), {() =>
self.skip(Token_.LComma())
})
});
val condition = Firefly_Core.if_((!self.current.rawIs("{")), {() =>
Firefly_Core.None()
}).else_({() =>
self.skip(Token_.LBracketLeft());
val term = self.parseStatements();
self.skip(Token_.LBracketRight());
Firefly_Core.Some(term)
});
self.skip(Token_.LArrowThick());
val body = self.parseStatements();
Syntax_.MatchCase(token.at, patterns.drain, condition, body)
}

def parsePattern() : Syntax_.MatchPattern = {
val pattern = Firefly_Core.if_(self.current.is(Token_.LWildcard()), {() =>
val token = self.skip(Token_.LWildcard());
Syntax_.PVariable(token.at, Firefly_Core.None())
}).elseIf({() =>
self.current.is(Token_.LLower())
}, {() =>
val token = self.skip(Token_.LLower());
Syntax_.PVariable(token.at, Firefly_Core.Some(token.raw))
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
val at = self.current.at;
val pair = self.parseRecordPattern().unzip;
Syntax_.PVariant(at, ("Record$" + pair.first.mkString("$")), pair.second)
}).elseIf({() =>
self.current.rawIs("[")
}, {() =>
self.parseListPattern()
}).else_({() =>
val token = self.skip(Token_.LUpper());
Firefly_Core.if_(self.current.rawIs("("), {() =>
val patterns = Firefly_Core.listBuilderOf[Syntax_.MatchPattern]();
self.rawSkip(Token_.LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
patterns.append(self.parsePattern());
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skip(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), ")");
Syntax_.PVariant(token.at, token.raw, patterns.drain)
}).else_({() =>
Firefly_Core.if_(self.current.is(Token_.LLower()), {() =>
val asToken = self.skip(Token_.LLower());
Syntax_.PVariantAs(token.at, token.raw, Firefly_Core.Some(asToken.raw))
}).elseIf({() =>
self.current.is(Token_.LWildcard())
}, {() =>
self.skip(Token_.LWildcard());
Syntax_.PVariantAs(token.at, token.raw, Firefly_Core.None())
}).else_({() =>
Syntax_.PVariant(token.at, token.raw, List())
})
})
});
Firefly_Core.if_(self.current.rawIs("@"), {() =>
val atToken = self.skip(Token_.LOperator());
val asToken = self.skip(Token_.LLower());
Syntax_.PAlias(atToken.at, pattern, asToken.raw)
}).else_({() =>
pattern
})
}

def parseType() : Syntax_.Type = {
val leftTypes = Firefly_Core.if_(((self.current.rawIs("(") && self.ahead.is(Token_.LLower())) && self.aheadAhead.is(Token_.LColon())), {() =>
val at = self.current.at;
val pair = self.parseRecordType().unzip;
List(Syntax_.TConstructor(at, ("Record$" + pair.first.mkString("$")), pair.second))
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
self.parseTypeArguments(parenthesis = Firefly_Core.True())
}).else_({() =>
val namespace = Firefly_Core.if_(self.current.is(Token_.LNamespace()), {() =>
self.skip(Token_.LNamespace()).raw
}).else_({() =>
""
});
val token = self.skip(Token_.LUpper());
val arguments = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
List()
}).else_({() =>
self.parseTypeArguments()
});
List(Syntax_.TConstructor(token.at, (namespace + token.raw), arguments))
});
Firefly_Core.if_(((!self.current.is(Token_.LArrowThick())) && (leftTypes.size == 1)), {() =>
leftTypes.head
}).else_({() =>
val arrowToken = self.skip(Token_.LArrowThick());
val rightType = self.parseType();
Syntax_.TConstructor(arrowToken.at, ("Function$" + leftTypes.size), (List(leftTypes, List(rightType)).flatten))
})
}

def parseStatements() : Syntax_.Term = {
Firefly_Core.if_(self.current.is2(Token_.LBracketRight(), Token_.LPipe()), {() =>
Syntax_.EVariant(self.current.at, "Unit", List(), Firefly_Core.None())
}).else_({() =>
var result = self.parseStatement();
Firefly_Core.while_({() =>
self.currentIsSeparator(Token_.LSemicolon())
}, {() =>
val token = self.skipSeparator(Token_.LSemicolon());
result = Syntax_.ESequential(token.at, result, self.parseStatement())
});
result
})
}

def parseStatement() : Syntax_.Term = {
Firefly_Core.if_((self.current.is(Token_.LKeyword()) && (self.current.rawIs("let") || self.current.rawIs("mutable"))), {() =>
self.parseLet()
}).else_({() =>
Firefly_Core.if_((self.current.is(Token_.LKeyword()) && self.current.rawIs("function")), {() =>
self.parseFunctions()
}).else_({() =>
val term = self.parseTerm();
Firefly_Core.if_(((!self.current.is(Token_.LAssign())) && (!self.current.is3(Token_.LAssignPlus(), Token_.LAssignMinus(), Token_.LAssignLink()))), {() =>
term
}).else_({() =>
val token = Firefly_Core.do_({() =>
Firefly_Core.if_(self.current.is(Token_.LAssignPlus()), {() =>
self.skip(Token_.LAssignPlus())
}).else_({() =>
Firefly_Core.if_(self.current.is(Token_.LAssignMinus()), {() =>
self.skip(Token_.LAssignMinus())
}).else_({() =>
Firefly_Core.if_(self.current.is(Token_.LAssignLink()), {() =>
self.skip(Token_.LAssignLink())
}).else_({() =>
self.skip(Token_.LAssign())
})
})
})
});
val operator = token.raw.dropRight(1);
val value = self.parseTerm();
pipe_dot(term)({
case (Syntax_.EVariable(_, name, _, _)) =>
Syntax_.EAssign(token.at, operator, name, value)
case (e : Syntax_.EField) =>
Syntax_.EAssignField(token.at, operator, e.record, e.field, value)
case (_) =>
self.fail(token.at, "Only variables and fields are assignable")
})
})
})
})
}

def parseLet() : Syntax_.Term = {
val mutable = self.current.rawIs("mutable");
Firefly_Core.if_(mutable, {() =>
self.rawSkip(Token_.LKeyword(), "mutable")
}).else_({() =>
self.rawSkip(Token_.LKeyword(), "let")
});
val nameToken = self.skip(Token_.LLower());
val valueType = Firefly_Core.if_((!self.current.is(Token_.LColon())), {() =>
self.freshTypeVariable(nameToken.at)
}).else_({() =>
self.skip(Token_.LColon());
self.parseType()
});
self.skip(Token_.LAssign());
val value = self.parseTerm();
self.skipSeparator(Token_.LSemicolon());
val body = self.parseStatements();
Syntax_.ELet(nameToken.at, mutable, nameToken.raw, valueType, value, body)
}

def parseFunctions() : Syntax_.Term = {
val at = self.current.at;
val functions = Firefly_Core.listBuilderOf[Syntax_.LocalFunction]();
Firefly_Core.while_({() =>
self.current.rawIs("function")
}, {() =>
self.rawSkip(Token_.LKeyword(), "function");
val signature = self.parseSignature();
val body = self.parseLambda();
functions.append(Syntax_.LocalFunction(signature, body));
self.skipSeparator(Token_.LSemicolon())
});
val body = self.parseStatements();
Syntax_.EFunctions(at, functions.drain, body)
}

def parseTerm() : Syntax_.Term = {
self.parseBinary(0)
}

def parseBinary(level : Firefly_Core.Int) : Syntax_.Term = {
Firefly_Core.if_((level >= binaryOperators.length), {() =>
self.parseUnary()
}).else_({() =>
val operators = binaryOperators(level);
var result = self.parseBinary((level + 1));
Firefly_Core.if_(self.current.is(Token_.LOperator()), {() =>
Firefly_Core.while_({() =>
operators.exists(self.current.rawIs)
}, {() =>
val token = self.skip(Token_.LOperator());
val right = self.parseBinary((level + 1));
val arguments = List(Syntax_.Argument(result.at, Firefly_Core.None(), result), Syntax_.Argument(right.at, Firefly_Core.None(), right));
result = Syntax_.ECall(token.at, Syntax_.EVariable(token.at, token.raw, List(), List()), List(), arguments)
})
});
result
})
}

def parseUnary() : Syntax_.Term = {
Firefly_Core.if_(self.current.is(Token_.LOperator()), {() =>
val token = self.skip(Token_.LOperator());
val term = self.parseUnary();
Syntax_.ECall(token.at, Syntax_.EVariable(token.at, token.raw, List(), List()), List(), List(Syntax_.Argument(term.at, Firefly_Core.None(), term)))
}).else_({() =>
self.parseFieldsAndCalls()
})
}

def parseFieldsAndCalls() : Syntax_.Term = {
var result = self.parseAtom();
Firefly_Core.while_({() =>
((self.current.is(Token_.LBracketLeft()) || self.current.is(Token_.LColon())) || self.current.is(Token_.LDot()))
}, {() =>
Firefly_Core.if_(self.current.is(Token_.LDot()), {() =>
self.skip(Token_.LDot());
Firefly_Core.if_(self.current.rawIs("{"), {() =>
val term = self.parseAtom();
result = Syntax_.EPipe(term.at, result, term)
}).elseIf({() =>
self.current.is2(Token_.LUpper(), Token_.LNamespace())
}, {() =>
result = self.parseCopy(result)
}).else_({() =>
val token = self.skip(Token_.LLower());
result = Syntax_.EField(token.at, result, token.raw)
})
}).else_({() =>
val at = self.current.at;
val typeArguments = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
List()
}).else_({() =>
self.parseTypeArguments()
});
val arguments = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
List()
}).else_({() =>
self.parseFunctionArguments()
});
val moreArguments = Firefly_Core.listBuilderOf[Syntax_.Argument]();
var lastWasCurly = Firefly_Core.False();
Firefly_Core.while_({() =>
(self.current.rawIs("{") || self.current.is(Token_.LColon()))
}, {() =>
lastWasCurly = self.current.rawIs("{");
val lambda = self.parseLambda(allowColon = Firefly_Core.True());
moreArguments.append(Syntax_.Argument(lambda.at, Firefly_Core.None(), Syntax_.ELambda(lambda.at, lambda)))
});
result = Syntax_.ECall(at, result, typeArguments, (List(arguments, moreArguments.drain).flatten));
Firefly_Core.if_((lastWasCurly && self.current.is(Token_.LLower())), {() =>
val token = self.skip(Token_.LLower());
result = Syntax_.EField(token.at, result, token.raw)
})
})
});
result
}

def parseAtom() : Syntax_.Term = {
Firefly_Core.if_(self.current.is(Token_.LString()), {() =>
val token = self.skip(Token_.LString());
Syntax_.EString(token.at, token.raw)
}).elseIf({() =>
self.current.is(Token_.LChar())
}, {() =>
val token = self.skip(Token_.LChar());
Syntax_.EChar(token.at, token.raw)
}).elseIf({() =>
self.current.is(Token_.LInt())
}, {() =>
val token = self.skip(Token_.LInt());
Syntax_.EInt(token.at, token.raw)
}).elseIf({() =>
self.current.is(Token_.LFloat())
}, {() =>
val token = self.skip(Token_.LFloat());
Syntax_.EFloat(token.at, token.raw)
}).elseIf({() =>
self.current.is(Token_.LLower())
}, {() =>
val token = self.skip(Token_.LLower());
Syntax_.EVariable(token.at, token.raw, List(), List())
}).elseIf({() =>
self.current.is(Token_.LNamespace())
}, {() =>
val namespaceToken = self.skip(Token_.LNamespace());
val extraNamespace = Firefly_Core.if_((!self.current.is(Token_.LNamespace())), {() =>
Firefly_Core.None()
}).else_({() =>
Firefly_Core.Some(self.skip(Token_.LNamespace()).raw)
});
val prefix = (namespaceToken.raw + extraNamespace.getOrElse(""));
Firefly_Core.if_(self.current.is(Token_.LLower()), {() =>
val token = self.skip(Token_.LLower());
Syntax_.EVariable(token.at, (prefix + token.raw), List(), List())
}).else_({() =>
self.parseVariant(prefix)
})
}).elseIf({() =>
self.current.is(Token_.LUpper())
}, {() =>
self.parseVariant("")
}).elseIf({() =>
self.current.rawIs("{")
}, {() =>
val lambda = self.parseLambda();
Syntax_.ELambda(lambda.at, lambda)
}).elseIf({() =>
self.current.rawIs("[")
}, {() =>
self.parseList()
}).elseIf({() =>
((self.current.rawIs("(") && self.ahead.is(Token_.LLower())) && self.aheadAhead.is(Token_.LAssign()))
}, {() =>
Syntax_.ERecord(self.current.at, self.parseRecord())
}).elseIf({() =>
self.current.rawIs("(")
}, {() =>
self.rawSkip(Token_.LBracketLeft(), "(");
val result = self.parseTerm();
self.rawSkip(Token_.LBracketRight(), ")");
result
}).elseIf({() =>
self.current.is(Token_.LWildcard())
}, {() =>
val token = self.skip(Token_.LWildcard());
Syntax_.EWildcard(token.at, 0)
}).else_({() =>
self.fail(self.current.at, ("Expected atom, got " + self.current.raw))
})
}

def parseVariant(prefix : Firefly_Core.String) : Syntax_.Term = {
val token = self.skip(Token_.LUpper());
val name = (prefix + token.raw);
val typeArguments = Firefly_Core.if_((!self.current.rawIs("[")), {() =>
List()
}).else_({() =>
self.parseTypeArguments()
});
Firefly_Core.if_(self.current.rawIs("?"), {() =>
self.skip(Token_.LOperator());
Syntax_.EVariantIs(token.at, name, typeArguments)
}).else_({() =>
val arguments = Firefly_Core.if_((!self.current.rawIs("(")), {() =>
Firefly_Core.None()
}).else_({() =>
Firefly_Core.Some(self.parseFunctionArguments())
});
Syntax_.EVariant(token.at, name, typeArguments, arguments)
})
}

def parseCopy(record : Syntax_.Term) : Syntax_.Term = {
val namespace = Firefly_Core.if_((!self.current.is(Token_.LNamespace())), {() =>
""
}).else_({() =>
self.skip(Token_.LNamespace()).raw
});
val extraNamespace = Firefly_Core.if_((!self.current.is(Token_.LNamespace())), {() =>
""
}).else_({() =>
self.skip(Token_.LNamespace()).raw
});
val prefix = (namespace + extraNamespace);
val token = self.skip(Token_.LUpper());
val name = (prefix + token.raw);
val fields = self.parseRecord();
Syntax_.ECopy(token.at, name, record, fields)
}

def parseRecord() : Firefly_Core.List[Syntax_.Field] = {
val fields = Firefly_Core.listBuilderOf[Syntax_.Field]();
self.rawSkip(Token_.LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val fieldToken = self.skip(Token_.LLower());
self.skip(Token_.LAssign());
fields.append(Syntax_.Field(fieldToken.at, fieldToken.raw, self.parseTerm()));
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), ")");
fields.drain
}

def parseRecordType() : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Type]] = {
val fields = Firefly_Core.listBuilderOf[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Type]]();
self.rawSkip(Token_.LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val fieldToken = self.skip(Token_.LLower());
self.skipSeparator(Token_.LColon());
fields.append(Firefly_Core.Pair(fieldToken.raw, self.parseType()));
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), ")");
fields.drain.sortBy({(_w1) =>
_w1.first
})
}

def parseRecordPattern() : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.MatchPattern]] = {
val fields = Firefly_Core.listBuilderOf[Firefly_Core.Pair[Firefly_Core.String, Syntax_.MatchPattern]]();
self.rawSkip(Token_.LBracketLeft(), "(");
Firefly_Core.while_({() =>
(!self.current.is(Token_.LBracketRight()))
}, {() =>
val fieldToken = self.skip(Token_.LLower());
self.skip(Token_.LAssign());
fields.append(Firefly_Core.Pair(fieldToken.raw, self.parsePattern()));
Firefly_Core.if_((!self.current.is(Token_.LBracketRight())), {() =>
self.skipSeparator(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), ")");
fields.drain
}

def parseListPattern() : Syntax_.MatchPattern = {
val items = Firefly_Core.listBuilderOf[Firefly_Core.Pair[Syntax_.MatchPattern, Firefly_Core.Bool]]();
val at = self.rawSkip(Token_.LBracketLeft(), "[").at;
Firefly_Core.while_({() =>
(!self.current.rawIs("]"))
}, {() =>
val spread = self.current.is(Token_.LDotDotDot());
Firefly_Core.if_(spread, {() =>
self.skip(Token_.LDotDotDot())
});
val pattern = Firefly_Core.if_((spread && self.current.rawIs("]")), {() =>
Syntax_.PVariable(self.current.at, Firefly_Core.None())
}).else_({() =>
self.parsePattern()
});
items.append(Firefly_Core.Pair(pattern, spread));
Firefly_Core.if_((!self.current.rawIs("]")), {() =>
self.skipSeparator(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), "]");
Syntax_.PList(at, self.freshTypeVariable(at), items.drain)
}

def parseList() : Syntax_.Term = {
val items = Firefly_Core.listBuilderOf[Firefly_Core.Pair[Syntax_.Term, Firefly_Core.Bool]]();
val at = self.rawSkip(Token_.LBracketLeft(), "[").at;
Firefly_Core.while_({() =>
(!self.current.rawIs("]"))
}, {() =>
val spread = self.current.is(Token_.LDotDotDot());
Firefly_Core.if_(spread, {() =>
self.skip(Token_.LDotDotDot())
});
items.append(Firefly_Core.Pair(self.parseTerm(), spread));
Firefly_Core.if_((!self.current.rawIs("]")), {() =>
self.skipSeparator(Token_.LComma())
})
});
self.rawSkip(Token_.LBracketRight(), "]");
Syntax_.EList(at, self.freshTypeVariable(at), items.drain)
}

}


}
