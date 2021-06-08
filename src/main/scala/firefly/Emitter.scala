package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Emitter_ {


val keywords = List("abstract", "case", "catch", "class", "def", "do", "else", "extends", "false", "final", "finally", "for", "forSome", "if", "implicit", "import", "lazy", "match", "new", "null", "object", "override", "package", "private", "protected", "return", "sealed", "super", "this", "throw", "trait", "true", "try", "type", "val", "var", "while", "with", "yield", "scala", "java").toSet
def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show()))
}

def emitModule(module : Syntax_.Module) : Firefly_Core.String = {
val moduleNamespace = module.file.replace("\\", "/").getReverse().takeWhile({(_w1) =>
(_w1 != '/')
}).getReverse().takeWhile({(_w1) =>
(_w1 != '.')
});
val parts = List(List("package firefly"), (List(List("import firefly.Firefly_Core._"), module.imports.map({(_w1) =>
(("import firefly." + _w1.file) + "_._")
})).flatten), List((("object " + moduleNamespace) + "_ {")), Firefly_Core.if_(module.functions.exists({(_w1) =>
(_w1.signature.name == "main")
}), {() =>
List(Emitter_.emitMain())
}).else_({() =>
List()
}), module.types.map(Emitter_.emitTypeDefinition), module.lets.map({(_w1) =>
Emitter_.emitLetDefinition(_w1)
}), module.functions.map({(_w1) =>
Emitter_.emitFunctionDefinition(_w1)
}), module.extends_.pairs().map({(pair) =>
Emitter_.emitExtendImplicit(pair.second, pair.first)
}), module.traits.map(Emitter_.emitTraitDefinition), module.instances.map(Emitter_.emitInstanceDefinition), List("}"));
module.extends_.map({(_w1) =>
_w1.type_
}).getCollect(({ case _w : Syntax_.TConstructor => Some(_w); case _ => None() })).find({(t) =>
(!module.types.exists({(_w1) =>
(((moduleNamespace + ".") + _w1.name) == t.name)
}))
}).each({(t) =>
Emitter_.fail(t.at, ("Type not defined in this file: " + t.name))
});
(parts.map({(_w1) =>
_w1.join("\n\n")
}).join("\n") + "\n")
}

def emitMain() = {
"def main(arguments : Array[String]) : Unit = main(new System(arguments))"
}

def emitTypeMembers(name : Firefly_Core.String, lets : Firefly_Core.List[Syntax_.DLet], functions : Firefly_Core.List[Syntax_.DFunction]) = {
val strings = (lets.map({(_w1) =>
Emitter_.emitLetDefinition(_w1)
}) ++ functions.map({(_w1) =>
Emitter_.emitFunctionDefinition(_w1)
}));
(((("object " + name) + " {\n\n") + strings.join("\n\n")) + "\n\n}")
}

def emitTypeDefinition(definition : Syntax_.DType) : Firefly_Core.String = {
val generics = Emitter_.emitTypeParameters(definition.generics);
Firefly_Core.if_(((definition.variants.getSize() == 1) && (definition.variants.expectFirst().name == definition.name)), {() =>
val fields = (("(" + definition.commonFields.map(Emitter_.emitParameter).join(", ")) + ")");
((("case class " + definition.name) + generics) + fields)
}).else_({() =>
val commonFields = Firefly_Core.if_(definition.commonFields.getEmpty(), {() =>
""
}).else_({() =>
((" {\n" + definition.commonFields.map(Emitter_.emitParameter).map({(_w1) =>
(("    val " + _w1) + "\n")
}).join()) + "}")
});
val variants = definition.variants.map({(_w1) =>
Emitter_.emitVariantDefinition(definition, _w1)
});
val head = ((("sealed abstract class " + definition.name) + generics) + " extends Product with Serializable");
((head + commonFields) + variants.map({(_w1) =>
("\n" + _w1)
}).join())
})
}

def emitLetDefinition(definition : Syntax_.DLet, mutable : Firefly_Core.Bool = Firefly_Core.False()) : Firefly_Core.String = {
val typeAnnotation = Emitter_.emitTypeAnnotation(definition.variableType);
val mutability = Firefly_Core.if_(mutable, {() =>
"var"
}).else_({() =>
"val"
});
(((((mutability + " ") + Emitter_.escapeKeyword(definition.name)) + typeAnnotation) + " = ") + Emitter_.emitTerm(definition.value))
}

def emitFunctionDefinition(definition : Syntax_.DFunction, suffix : Firefly_Core.String = "") : Firefly_Core.String = {
val signature = Emitter_.emitSignature(definition.signature, suffix);
pipe_dot(definition.body)({
case (Syntax_.Lambda(_, List(matchCase))) if matchCase.patterns.all({
case (Syntax_.PVariable(_, Firefly_Core.None())) =>
Firefly_Core.True()
case (_) =>
Firefly_Core.False()
}) =>
val body = Emitter_.emitStatements(matchCase.body);
(((signature + " = {\n") + body) + "\n}")
case (_) =>
val tuple = (("(" + definition.signature.parameters.map({(_w1) =>
Emitter_.escapeKeyword(_w1.name)
}).join(", ")) + ")");
val cases = definition.body.cases.map(Emitter_.emitCase).join("\n");
(((((signature + " = ") + tuple) + " match {\n") + cases) + "\n}")
})
}

def emitExtendImplicit(definition : Syntax_.DExtend, index : Firefly_Core.Int) : Firefly_Core.String = {
val generics = Emitter_.emitTypeParameters(definition.generics);
val implicits = Emitter_.emitConstraints(definition.constraints);
val parameter = ((Emitter_.escapeKeyword(definition.name) + " : ") + Emitter_.emitType(definition.type_));
val methods = definition.methods.map({(_w1) =>
Emitter_.emitFunctionDefinition(_w1)
}).join("\n\n");
val typeName = Emitter_.extractTypeName(definition.type_).getReverse().takeWhile({(_w1) =>
(_w1 != '.')
}).getReverse();
((((((((((("implicit class " + typeName) + "_extend") + index) + generics) + "(") + parameter) + ")") + implicits) + " {\n\n") + methods) + "\n\n}")
}

def emitTraitDefinition(definition : Syntax_.DTrait) : Firefly_Core.String = {
val generics = Emitter_.emitTypeParameters(definition.generics);
val implicits = Emitter_.emitConstraints(definition.constraints);
val parameters = Firefly_Core.if_(definition.generatorParameters.getEmpty(), {() =>
""
}).else_({() =>
(("(" + definition.generatorParameters.map(Emitter_.emitParameter).join(", ")) + ")")
});
val methods = Firefly_Core.if_(definition.methods.getEmpty(), {() =>
""
}).else_({() =>
((((" {\n\nimport " + definition.name) + "._\n\n") + definition.methods.map({(signature) =>
val body = definition.methodDefaults.find({(_w1) =>
(_w1.first == signature.name)
}).map({
case (Firefly_Core.Pair(_, lambda)) =>
((" {\n" + Emitter_.emitStatements(Syntax_.ELambda(lambda.at, lambda))) + "\n}")
}).getElse({() =>
definition.methodGenerators.find({(_w1) =>
(_w1.first == signature.name)
}).map({
case (Firefly_Core.Pair(_, e)) =>
" {\n// TODO: Generate\n}"
})
}).else_({() =>
""
});
(Emitter_.emitSignature(signature, "_m") + body)
}).join("\n\n")) + "\n\n}")
});
val methodWrappers = Firefly_Core.if_(definition.methods.getEmpty(), {() =>
""
}).else_({() =>
((" \n\n" + definition.methods.map({(signature) =>
val t = Syntax_.TConstructor(definition.at, definition.name, definition.generics.map({(_w1) =>
Syntax_.TConstructor(definition.at, _w1, List())
}));
(((((((Emitter_.emitSignature(signature.copy(generics = (definition.generics ++ signature.generics), constraints = (List(List(Syntax_.Constraint(t)), definition.constraints, signature.constraints).flatten))) + " =\n    scala.Predef.implicitly[") + Emitter_.emitType(t)) + "].") + Emitter_.escapeKeyword(signature.name)) + "_m(") + signature.parameters.map({(_w1) =>
_w1.name
}).map(Emitter_.escapeKeyword).join(", ")) + ")")
}).join("\n\n")) + "\n\n")
});
((((((((((("abstract class " + definition.name) + generics) + parameters) + implicits) + methods) + "\n") + "object ") + definition.name) + " {") + methodWrappers) + "}")
}

def emitInstanceDefinition(definition : Syntax_.DInstance) : Firefly_Core.String = {
val signature = Emitter_.emitSignature(Syntax_.Signature(definition.at, ((Emitter_.extractTypeName(definition.traitType) + "_") + Firefly_Core.magicHashCode(definition).getAbs()), definition.generics, definition.constraints, List(), definition.traitType));
val methods = ((((" {\n\nimport " + Emitter_.extractTypeName(definition.traitType)) + "._\n\n") + definition.methods.map({(_w1) =>
Emitter_.emitFunctionDefinition(_w1, "_m")
}).join("\n\n")) + "\n\n}");
val value = (("new " + Emitter_.emitType(definition.traitType)) + methods);
((("implicit " + signature) + " =\n    ") + value)
}

def emitVariantDefinition(typeDefinition : Syntax_.DType, definition : Syntax_.Variant) : Firefly_Core.String = {
val generics = Emitter_.emitTypeParameters(typeDefinition.generics);
val allFields = (typeDefinition.commonFields ++ definition.fields);
val fields = (("(" + allFields.map(Emitter_.emitParameter).join(", ")) + ")");
(((((("case class " + definition.name) + generics) + fields) + " extends ") + typeDefinition.name) + generics)
}

def emitSignature(signature : Syntax_.Signature, suffix : Firefly_Core.String = "") : Firefly_Core.String = {
val generics = Emitter_.emitTypeParameters(signature.generics);
val parameters = (("(" + signature.parameters.map(Emitter_.emitParameter).join(", ")) + ")");
val implicits = Firefly_Core.if_(signature.constraints.getEmpty(), {() =>
""
}).else_({() =>
(("(implicit " + signature.constraints.pairs().map({
case (Firefly_Core.Pair(i, c)) =>
((("i_" + i) + " : ") + Emitter_.emitType(c.representation))
}).join(", ")) + ")")
});
val returnType = Emitter_.emitTypeAnnotation(signature.returnType);
(((((("def " + Emitter_.escapeKeyword(signature.name)) + suffix) + generics) + parameters) + implicits) + returnType)
}

def emitParameter(parameter : Syntax_.Parameter) : Firefly_Core.String = {
val mutability = Firefly_Core.if_(parameter.mutable, {() =>
"var "
}).else_({() =>
""
});
val defaultValue = parameter.default.map({(_w1) =>
(" = " + Emitter_.emitTerm(_w1))
}).getOrElse("");
(((mutability + Emitter_.escapeKeyword(parameter.name)) + Emitter_.emitTypeAnnotation(parameter.valueType)) + defaultValue)
}

def emitConstraints(constraints : Firefly_Core.List[Syntax_.Constraint]) : Firefly_Core.String = {
Firefly_Core.if_(constraints.getEmpty(), {() =>
""
}).else_({() =>
val pairs = constraints.map({(_w1) =>
_w1.representation
}).map(Emitter_.emitType).pairs();
(("(implicit " + pairs.map({
case (Firefly_Core.Pair(k, v)) =>
((("i_" + k) + " : ") + v)
}).join(", ")) + ")")
})
}

def emitTypeParameters(generics : Firefly_Core.List[Firefly_Core.String]) = {
Firefly_Core.if_(generics.getEmpty(), {() =>
""
}).else_({() =>
(("[" + generics.join(", ")) + "]")
})
}

def emitTypeAnnotation(t : Syntax_.Type) : Firefly_Core.String = (t) match {
case (_ : Syntax_.TVariable) =>
""
case (_ : Syntax_.TConstructor) =>
(" : " + Emitter_.emitType(t))
}

def emitType(type_ : Syntax_.Type) : Firefly_Core.String = (type_) match {
case (Syntax_.TVariable(_, index)) =>
("$" + index)
case (t : Syntax_.TConstructor) =>
Firefly_Core.if_(t.name.startsWith("Function$"), {() =>
Emitter_.emitType(t.copy(name = t.name.replace("$", "")))
}).elseIf({() =>
t.name.startsWith("Record$")
}, {() =>
(("{" + t.name.split('$').drop(1).getList().zip(t.generics).map({
case (Firefly_Core.Pair(field, fieldType)) =>
((("val " + Emitter_.escapeKeyword(field)) + " : ") + Emitter_.emitType(fieldType))
}).join("; ")) + "}")
}).else_({() =>
val generics = Firefly_Core.if_(t.generics.getEmpty(), {() =>
""
}).else_({() =>
(("[" + t.generics.map(Emitter_.emitType).join(", ")) + "]")
});
(Emitter_.escapeResolved(t.name) + generics)
})
}

def emitStatements(term : Syntax_.Term) : Firefly_Core.String = (term) match {
case (Syntax_.EFunctions(at, functions, body)) =>
val functionStrings = functions.map({(f) =>
Emitter_.emitFunctionDefinition(Syntax_.DFunction(at, f.signature, f.body))
});
((functionStrings.join("\n") + "\n") + Emitter_.emitStatements(body))
case (Syntax_.ELet(at, mutable, name, valueType, value, body)) =>
((Emitter_.emitLetDefinition(Syntax_.DLet(at, name, valueType, value), mutable) + ";\n") + Emitter_.emitStatements(body))
case (Syntax_.ESequential(at, before, after)) =>
((Emitter_.emitStatements(before) + ";\n") + Emitter_.emitStatements(after))
case (Syntax_.EAssign(at, operator, name, value)) =>
((((Emitter_.escapeKeyword(name) + " ") + operator) + "= ") + Emitter_.emitTerm(value))
case (Syntax_.EAssignField(at, operator, record, field, value)) =>
((((((Emitter_.emitTerm(record) + ".") + Emitter_.escapeKeyword(field)) + " ") + operator) + "= ") + Emitter_.emitTerm(value))
case (_) =>
Emitter_.emitTerm(term)
}

def emitTerm(term : Syntax_.Term) : Firefly_Core.String = (term) match {
case (Syntax_.EString(at, value)) =>
value
case (Syntax_.EChar(at, value)) =>
value
case (Syntax_.EInt(at, value)) =>
value
case (Syntax_.EFloat(at, value)) =>
value
case (Syntax_.EVariable(at, name, _, _)) =>
Emitter_.escapeResolved(name)
case (Syntax_.EList(at, _, items)) if items.all({(_w1) =>
(!_w1.second)
}) =>
(("List(" + items.map({(_w1) =>
Emitter_.emitTerm(_w1.first)
}).join(", ")) + ")")
case (Syntax_.EList(at, _, items)) =>
(("(List(" + items.map({
case (Firefly_Core.Pair(item, Firefly_Core.False())) =>
(("List(" + Emitter_.emitTerm(item)) + ")")
case (Firefly_Core.Pair(item, Firefly_Core.True())) =>
Emitter_.emitTerm(item)
}).join(", ")) + ").flatten)")
case (Syntax_.EVariant(at, name, typeArguments, arguments)) =>
val generics = Firefly_Core.if_(typeArguments.getEmpty(), {() =>
""
}).else_({() =>
(("[" + typeArguments.map(Emitter_.emitType).join(", ")) + "]")
});
((((Emitter_.escapeResolved(name) + generics) + "(") + arguments.getList().flatten.map(Emitter_.emitArgument).join(", ")) + ")")
case (Syntax_.EVariantIs(at, name, typeArguments)) =>
val generics = Firefly_Core.if_(typeArguments.getEmpty(), {() =>
""
}).else_({() =>
(("[" + typeArguments.map(Emitter_.emitType).join(", ")) + "]")
});
((("({ case _w : " + Emitter_.escapeResolved(name)) + generics) + " => Some(_w); case _ => None() })")
case (Syntax_.ECopy(at, name, record, fields)) =>
val fieldCode = fields.map({(f) =>
((Emitter_.escapeKeyword(f.name) + " = ") + Emitter_.emitTerm(f.value))
}).join(", ");
(((Emitter_.emitTerm(record) + ".copy(") + fieldCode) + ")")
case (Syntax_.EField(at, record, field)) =>
((Emitter_.emitTerm(record) + ".") + Emitter_.escapeKeyword(field))
case (Syntax_.ELambda(at, Syntax_.Lambda(_, List(Syntax_.MatchCase(_, patterns, Firefly_Core.None(), body))))) if patterns.all({
case (_ : Syntax_.PVariable) =>
Firefly_Core.True()
case (_) =>
Firefly_Core.False()
}) =>
val parameters = patterns.map({
case (p : Syntax_.PVariable) =>
p.name.map(Emitter_.escapeKeyword).getOrElse("_")
case (_) =>
Firefly_Core.panic("!")
}).join(", ");
(((("{(" + parameters) + ") =>\n") + Emitter_.emitStatements(body)) + "\n}")
case (Syntax_.ELambda(at, Syntax_.Lambda(_, cases))) =>
val casesString = cases.map(Emitter_.emitCase).join("\n");
(("{\n" + casesString) + "\n}")
case (Syntax_.EPipe(at, value, function)) =>
(((("pipe_dot(" + Emitter_.emitTerm(value)) + ")(") + Emitter_.emitTerm(function)) + ")")
case (Syntax_.ECall(at, Syntax_.EVariable(_, operator, _, _), List(), List(value))) if (!operator.head.isLetter) =>
((("(" + operator) + Emitter_.emitArgument(value)) + ")")
case (Syntax_.ECall(at, Syntax_.EVariable(_, operator, _, _), List(), List(left, right))) if (!operator.head.isLetter) =>
(((((("(" + Emitter_.emitArgument(left)) + " ") + operator) + " ") + Emitter_.emitArgument(right)) + ")")
case (Syntax_.ECall(at, function, typeArguments, arguments)) =>
val generics = Firefly_Core.if_(typeArguments.getEmpty(), {() =>
""
}).else_({() =>
(("[" + typeArguments.map(Emitter_.emitType).join(", ")) + "]")
});
((((Emitter_.emitTerm(function) + generics) + "(") + arguments.map(Emitter_.emitArgument).join(", ")) + ")")
case (Syntax_.ERecord(at, fields)) =>
Firefly_Core.if_(fields.getEmpty(), {() =>
"{}"
}).else_({() =>
val list = fields.map({(f) =>
((("val " + Emitter_.escapeKeyword(f.name)) + " = ") + Emitter_.emitTerm(f.value))
});
(("new {\n" + list.join(";\n")) + ";\n}")
})
case (Syntax_.EWildcard(at, index)) =>
Firefly_Core.if_((index == 0), {() =>
Emitter_.fail(at, "Unbound wildcard")
});
("_w" + index)
case (_) =>
(("{\n" + Emitter_.emitStatements(term)) + "\n}")
}

def emitArgument(argument : Syntax_.Argument) = {
(argument.name.map({(name) =>
(Emitter_.escapeKeyword(name) + " = ")
}).getOrElse("") + Emitter_.emitTerm(argument.value))
}

def emitCase(matchCase : Syntax_.MatchCase) = {
val pair = matchCase.patterns.map(Emitter_.emitPattern).getUnzip();
val patterns = pair.first.join(", ");
val condition = matchCase.condition.map({(_w1) =>
(("if " + Emitter_.emitTerm(_w1)) + " ")
}).getOrElse("");
val toLists = pair.second.flatMap({(_w1) =>
_w1
}).join();
(((((("case (" + patterns) + ") ") + condition) + "=>\n") + toLists) + Emitter_.emitStatements(matchCase.body))
}

def emitPattern(pattern : Syntax_.MatchPattern) : Firefly_Core.Pair[Firefly_Core.String, Firefly_Core.List[Firefly_Core.String]] = (pattern) match {
case (Syntax_.PVariable(at, name)) =>
Firefly_Core.Pair(name.map(Emitter_.escapeKeyword).getOrElse("_"), List())
case (Syntax_.PVariant(at, name, patterns)) =>
val pairs = patterns.map(Emitter_.emitPattern);
Firefly_Core.Pair((((Emitter_.escapeResolved(name) + "(") + pairs.map({(_w1) =>
_w1.first
}).join(", ")) + ")"), pairs.flatMap({(_w1) =>
_w1.second
}))
case (Syntax_.PVariantAs(at, name, variable)) =>
Firefly_Core.Pair(((variable.map(Emitter_.escapeKeyword).getOrElse("_") + " : ") + Emitter_.escapeResolved(name)), List())
case (Syntax_.PAlias(at, p, variable)) =>
val pair = Emitter_.emitPattern(p);
Firefly_Core.Pair((((Emitter_.escapeKeyword(variable) + " @ (") + pair.first) + ")"), pair.second)
case (Syntax_.PList(at, _, items)) =>
val pair = items.map({
case (Firefly_Core.Pair(item, Firefly_Core.False())) =>
Emitter_.emitPattern(item)
case (Firefly_Core.Pair(item, Firefly_Core.True())) =>
val pair = Emitter_.emitPattern(item);
Firefly_Core.Pair((pair.first + "_seq @ _*"), (List(List((((("val " + pair.first) + " = ") + pair.first) + "_seq.toList;\n")), pair.second).flatten))
}).getUnzip();
Firefly_Core.Pair((("List(" + pair.first.join(", ")) + ")"), pair.second.flatMap({(_w1) =>
_w1
}))
}

def extractTypeName(type_ : Syntax_.Type) : Firefly_Core.String = (type_) match {
case (Syntax_.TVariable(at, index)) =>
Emitter_.fail(at, ("Unexpected type variable: $" + index))
case (t : Syntax_.TConstructor) =>
t.name
}

def escapeResolved(word : Firefly_Core.String) = {
val parts = word.split("[.]").getList().map(Emitter_.escapeKeyword).join(".");
Firefly_Core.if_(parts.startsWith("ff:core/Core."), {() =>
parts.replace("ff:core/Core.", "Firefly_Core.")
}).else_({() =>
parts.replace(".", "_.")
})
}

def escapeKeyword(word : Firefly_Core.String) = {
Firefly_Core.if_(Emitter_.keywords(word), {() =>
(word + "_")
}).else_({() =>
word
})
}



}
