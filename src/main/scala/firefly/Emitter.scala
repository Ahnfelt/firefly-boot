package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Emitter_ {


val keywords = Firefly_Core.Set("abstract", "case", "catch", "class", "def", "do", "else", "extends", "false", "final", "finally", "for", "forSome", "if", "implicit", "import", "lazy", "match", "new", "null", "object", "override", "package", "private", "protected", "return", "sealed", "super", "this", "throw", "trait", "true", "try", "type", "val", "var", "while", "with", "yield", "scala", "java")
def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}

def emitModule(module : Syntax_.Module) : Firefly_Core.String = {
val moduleNamespace = module.file.replace('\\', '/').reverse.takeWhile({(_w1) =>
(_w1 != '/')
}).reverse.takeWhile({(_w1) =>
(_w1 != '.')
});
val parts = Firefly_Core.List(Firefly_Core.List("package firefly"), (Firefly_Core.List("import firefly.Firefly_Core._") ++ module.imports.map({(_w1) =>
(("import firefly." + _w1.file) + "_._")
})), Firefly_Core.List((("object " + moduleNamespace) + "_ {")), Firefly_Core.if_(module.functions.exists({(_w1) =>
(_w1.signature.name == "main")
}), {() =>
Firefly_Core.List(emitMain())
}).else_({() =>
Firefly_Core.List()
}), module.types.map(emitTypeDefinition), module.lets.map({(_w1) =>
emitLetDefinition(_w1)
}), module.functions.map({(_w1) =>
emitFunctionDefinition(_w1)
}), module.extends_.pairs.map({(pair) =>
emitExtendImplicit(pair.second, pair.first)
}), module.traits.map(emitTraitDefinition), module.instances.map(emitInstanceDefinition), Firefly_Core.List("}"));
module.extends_.map({(_w1) =>
_w1.type_
}).find({(t) =>
(!module.types.exists({(_w1) =>
(_w1.name == t.name)
}))
}).foreach({(t) =>
fail(t.at, ("Type not defined in this file: " + t))
});
(parts.map({(_w1) =>
_w1.mkString("\n\n")
}).join("\n") + "\n")
}

def emitMain() = {
"def main(arguments : Array[String]) : Unit = main(new System(arguments))"
}

def emitTypeMembers(name : Firefly_Core.String, lets : Firefly_Core.List[Syntax_.DLet], functions : Firefly_Core.List[Syntax_.DFunction]) = {
val strings = (lets.map({(_w1) =>
emitLetDefinition(_w1)
}) ++ functions.map({(_w1) =>
emitFunctionDefinition(_w1)
}));
(((("object " + name) + " {\n\n") + strings.mkString("\n\n")) + "\n\n}")
}

def emitTypeDefinition(definition : Syntax_.DType) : Firefly_Core.String = {
val generics = emitTypeParameters(definition.generics);
Firefly_Core.if_(((definition.variants.size == 1) && (definition.variants.head.name == definition.name)), {() =>
val fields = (("(" + definition.commonFields.map(emitParameter).mkString(", ")) + ")");
((("case class " + definition.name) + generics) + fields)
}).else_({() =>
val commonFields = Firefly_Core.if_(definition.commonFields.isEmpty, {() =>
""
}).else_({() =>
((" {\n" + definition.commonFields.map(emitParameter).map({(_w1) =>
(("    val " + _w1) + "\n")
}).mkString) + "}")
});
val variants = definition.variants.map({(_w1) =>
emitVariantDefinition(definition, _w1)
});
val head = ((("sealed abstract class " + definition.name) + generics) + " extends Product with Serializable");
((head + commonFields) + variants.map({(_w1) =>
("\n" + _w1)
}).mkString)
})
}

def emitLetDefinition(definition : Syntax_.DLet, mutable : Firefly_Core.Bool = Firefly_Core.False()) : Firefly_Core.String = {
val typeAnnotation = emitTypeAnnotation(definition.variableType);
val mutability = Firefly_Core.if_(mutable, {() =>
"var"
}).else_({() =>
"val"
});
(((((mutability + " ") + escapeKeyword(definition.name)) + typeAnnotation) + " = ") + emitTerm(definition.value))
}

def emitFunctionDefinition(definition : Syntax_.DFunction, suffix : Firefly_Core.String = "") : Firefly_Core.String = {
val signature = emitSignature(definition.signature, suffix);
pipe_dot(definition.body)({
case (Syntax_.Lambda(_, Firefly_Core.Link(matchCase, Firefly_Core.Empty()))) if matchCase.patterns.all({
case (Syntax_.PVariable(_, Firefly_Core.None())) =>
Firefly_Core.True()
case (_) =>
Firefly_Core.False()
}) =>
val body = emitStatements(matchCase.body);
(((signature + " = {\n") + body) + "\n}")
case (_) =>
val tuple = (("(" + definition.signature.parameters.map({(_w1) =>
escapeKeyword(_w1.name)
}).mkString(", ")) + ")");
val cases = definition.body.cases.map(emitCase).mkString("\n");
(((((signature + " = ") + tuple) + " match {\n") + cases) + "\n}")
})
}

def emitExtendImplicit(definition : Syntax_.DExtend, index : Firefly_Core.Int) : Firefly_Core.String = {
val generics = emitTypeParameters(definition.generics);
val implicits = emitConstraints(definition.constraints);
val parameter = ((escapeKeyword(definition.name) + " : ") + emitType(definition.type_));
val methods = definition.methods.map({(_w1) =>
emitFunctionDefinition(_w1)
}).join("\n\n");
((((((((((("implicit class " + definition.type_.name) + "_extend") + index) + generics) + "(") + parameter) + ")") + implicits) + " {\n\n") + methods) + "\n\n}")
}

def emitTraitDefinition(definition : Syntax_.DTrait) : Firefly_Core.String = {
val generics = emitTypeParameters(definition.generics);
val implicits = emitConstraints(definition.constraints);
val parameters = Firefly_Core.if_(definition.generatorParameters.isEmpty, {() =>
""
}).else_({() =>
(("(" + definition.generatorParameters.map(emitParameter).mkString(", ")) + ")")
});
val methods = Firefly_Core.if_(definition.methods.isEmpty, {() =>
""
}).else_({() =>
((((" {\n\nimport " + definition.name) + "._\n\n") + definition.methods.map({(signature) =>
val body = definition.methodDefaults.find({(_w1) =>
(_w1.first == signature.name)
}).map({
case (Firefly_Core.Pair(_, lambda)) =>
((" {\n" + emitStatements(Syntax_.ELambda(lambda.at, lambda))) + "\n}")
}).orElse(definition.methodGenerators.find({(_w1) =>
(_w1.first == signature.name)
}).map({
case (Firefly_Core.Pair(_, e)) =>
" {\n// TODO: Generate\n}"
})).getOrElse({() =>
""
});
(emitSignature(signature, "_m") + body)
}).mkString("\n\n")) + "\n\n}")
});
val methodWrappers = Firefly_Core.if_(definition.methods.isEmpty, {() =>
""
}).else_({() =>
((" \n\n" + definition.methods.map({(signature) =>
val t = Syntax_.Type(definition.at, definition.name, definition.generics.map({(_w1) =>
Syntax_.Type(definition.at, _w1, Firefly_Core.List())
}));
(((((((emitSignature(signature.copy(generics = (definition.generics ++ signature.generics), constraints = (Syntax_.Constraint(t) :: (definition.constraints ++ signature.constraints)))) + " =\n    scala.Predef.implicitly[") + emitType(t)) + "].") + escapeKeyword(signature.name)) + "_m(") + signature.parameters.map({(_w1) =>
_w1.name
}).map(escapeKeyword).join(", ")) + ")")
}).join("\n\n")) + "\n\n")
});
((((((((((("abstract class " + definition.name) + generics) + parameters) + implicits) + methods) + "\n") + "object ") + definition.name) + " {") + methodWrappers) + "}")
}

def emitInstanceDefinition(definition : Syntax_.DInstance) : Firefly_Core.String = {
val signature = emitSignature(Syntax_.Signature(definition.at, ((definition.traitType.name + "_") + definition.hashCode().abs), definition.generics, definition.constraints, Firefly_Core.List(), definition.traitType));
val methods = ((((" {\n\nimport " + definition.traitType.name) + "._\n\n") + definition.methods.map({(_w1) =>
emitFunctionDefinition(_w1, "_m")
}).join("\n\n")) + "\n\n}");
val value = (("new " + emitType(definition.traitType)) + methods);
((("implicit " + signature) + " =\n    ") + value)
}

def emitVariantDefinition(typeDefinition : Syntax_.DType, definition : Syntax_.Variant) : Firefly_Core.String = {
val generics = emitTypeParameters(typeDefinition.generics);
val allFields = (typeDefinition.commonFields ++ definition.fields);
val fields = (("(" + allFields.map(emitParameter).mkString(", ")) + ")");
(((((("case class " + definition.name) + generics) + fields) + " extends ") + typeDefinition.name) + generics)
}

def emitSignature(signature : Syntax_.Signature, suffix : Firefly_Core.String = "") : Firefly_Core.String = {
val generics = emitTypeParameters(signature.generics);
val parameters = (("(" + signature.parameters.map(emitParameter).mkString(", ")) + ")");
val implicits = Firefly_Core.if_(signature.constraints.isEmpty, {() =>
""
}).else_({() =>
(("(implicit " + signature.constraints.zipWithIndex.map({
case (Firefly_Core.Pair(c, i)) =>
((("i_" + i) + " : ") + emitType(c.representation))
}).mkString(", ")) + ")")
});
val returnType = emitTypeAnnotation(signature.returnType);
(((((("def " + escapeKeyword(signature.name)) + suffix) + generics) + parameters) + implicits) + returnType)
}

def emitParameter(parameter : Syntax_.Parameter) : Firefly_Core.String = {
val mutability = Firefly_Core.if_(parameter.mutable, {() =>
"var "
}).else_({() =>
""
});
val defaultValue = parameter.default.map({(_w1) =>
(" = " + emitTerm(_w1))
}).getOrElse("");
(((mutability + escapeKeyword(parameter.name)) + emitTypeAnnotation(parameter.valueType)) + defaultValue)
}

def emitConstraints(constraints : Firefly_Core.List[Syntax_.Constraint]) : Firefly_Core.String = {
Firefly_Core.if_(constraints.isEmpty, {() =>
""
}).else_({() =>
val pairs = constraints.map({(_w1) =>
_w1.representation
}).map(emitType).zipWithIndex;
(("(implicit " + pairs.map({
case (Firefly_Core.Pair(k, v)) =>
((("i_" + v) + " : ") + k)
}).mkString(", ")) + ")")
})
}

def emitTypeParameters(generics : Firefly_Core.List[Firefly_Core.String]) = {
Firefly_Core.if_(generics.isEmpty, {() =>
""
}).else_({() =>
(("[" + generics.mkString(", ")) + "]")
})
}

def emitTypeAnnotation(t : Syntax_.Type) : Firefly_Core.String = {
Firefly_Core.if_((t.name == "?"), {() =>
""
}).else_({() =>
(" : " + emitType(t))
})
}

def emitType(t : Syntax_.Type) : Firefly_Core.String = {
Firefly_Core.if_(t.name.startsWith("Function$"), {() =>
emitType(t.copy(name = t.name.replace("$", "")))
}).elseIf({() =>
t.name.startsWith("Record$")
}, {() =>
(("{" + t.name.split('$').drop(1).toList.zip(t.generics).map({
case (Firefly_Core.Pair(field, fieldType)) =>
((("val " + escapeKeyword(field)) + " : ") + emitType(fieldType))
}).mkString("; ")) + "}")
}).else_({() =>
val generics = Firefly_Core.if_(t.generics.isEmpty, {() =>
""
}).else_({() =>
(("[" + t.generics.map(emitType).mkString(", ")) + "]")
});
(escapeResolved(t.name) + generics)
})
}

def emitStatements(term : Syntax_.Term) : Firefly_Core.String = (term) match {
case (Syntax_.EFunctions(at, functions, body)) =>
val functionStrings = functions.map({(f) =>
emitFunctionDefinition(Syntax_.DFunction(at, f.signature, f.body))
});
((functionStrings.mkString("\n") + "\n") + emitStatements(body))
case (Syntax_.ELet(at, mutable, name, valueType, value, body)) =>
((emitLetDefinition(Syntax_.DLet(at, name, valueType, value), mutable) + ";\n") + emitStatements(body))
case (Syntax_.ESequential(at, before, after)) =>
((emitStatements(before) + ";\n") + emitStatements(after))
case (Syntax_.EAssign(at, operator, name, value)) =>
((((escapeKeyword(name) + " ") + operator) + "= ") + emitTerm(value))
case (Syntax_.EAssignField(at, operator, record, field, value)) =>
((((((emitTerm(record) + ".") + escapeKeyword(field)) + " ") + operator) + "= ") + emitTerm(value))
case (_) =>
emitTerm(term)
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
case (Syntax_.EVariable(at, name)) =>
escapeResolved(name)
case (Syntax_.EList(at, items)) =>
(("List(" + items.map(emitTerm).mkString(", ")) + ")")
case (Syntax_.EVariant(at, name, typeArguments, arguments)) =>
val generics = Firefly_Core.if_(typeArguments.isEmpty, {() =>
""
}).else_({() =>
(("[" + typeArguments.map(emitType).mkString(", ")) + "]")
});
((((escapeResolved(name) + generics) + "(") + arguments.toList.flatten.map(emitArgument).mkString(", ")) + ")")
case (Syntax_.EVariantIs(at, name, typeArguments)) =>
val generics = Firefly_Core.if_(typeArguments.isEmpty, {() =>
""
}).else_({() =>
(("[" + typeArguments.map(emitType).mkString(", ")) + "]")
});
((("({ case _w : " + escapeResolved(name)) + generics) + " => Some(_w); case _ => None() })")
case (Syntax_.ECopy(at, name, record, fields)) =>
val fieldCode = fields.map({(f) =>
((escapeKeyword(f.name) + " = ") + emitTerm(f.value))
}).mkString(", ");
(((emitTerm(record) + ".copy(") + fieldCode) + ")")
case (Syntax_.EField(at, record, field)) =>
((emitTerm(record) + ".") + escapeKeyword(field))
case (Syntax_.ELambda(at, Syntax_.Lambda(_, Firefly_Core.Link(Syntax_.MatchCase(_, patterns, Firefly_Core.None(), body), Firefly_Core.Empty())))) if patterns.all({
case (_ : Syntax_.PVariable) =>
Firefly_Core.True()
case (_) =>
Firefly_Core.False()
}) =>
val parameters = patterns.map({
case (p : Syntax_.PVariable) =>
p.name.map(escapeKeyword).getOrElse("_")
case (_) =>
Firefly_Core.panic("!")
}).mkString(", ");
(((("{(" + parameters) + ") =>\n") + emitStatements(body)) + "\n}")
case (Syntax_.ELambda(at, Syntax_.Lambda(_, cases))) =>
val casesString = cases.map(emitCase).mkString("\n");
(("{\n" + casesString) + "\n}")
case (Syntax_.EPipe(at, value, function)) =>
(((("pipe_dot(" + emitTerm(value)) + ")(") + emitTerm(function)) + ")")
case (Syntax_.ECall(at, Syntax_.EVariable(_, operator), Firefly_Core.Empty(), Firefly_Core.Link(value, Firefly_Core.Empty()))) if (!operator.head.isLetter) =>
((("(" + operator) + emitArgument(value)) + ")")
case (Syntax_.ECall(at, Syntax_.EVariable(_, operator), Firefly_Core.Empty(), Firefly_Core.Link(left, Firefly_Core.Link(right, Firefly_Core.Empty())))) if (!operator.head.isLetter) =>
(((((("(" + emitArgument(left)) + " ") + operator) + " ") + emitArgument(right)) + ")")
case (Syntax_.ECall(at, function, typeArguments, arguments)) =>
val generics = Firefly_Core.if_(typeArguments.isEmpty, {() =>
""
}).else_({() =>
(("[" + typeArguments.map(emitType).mkString(", ")) + "]")
});
((((emitTerm(function) + generics) + "(") + arguments.map(emitArgument).mkString(", ")) + ")")
case (Syntax_.ERecord(at, fields)) =>
Firefly_Core.if_(fields.isEmpty, {() =>
"{}"
}).else_({() =>
val list = fields.map({(f) =>
((("val " + escapeKeyword(f.name)) + " = ") + emitTerm(f.value))
});
(("new {\n" + list.mkString(";\n")) + ";\n}")
})
case (Syntax_.EWildcard(at, index)) =>
Firefly_Core.if_((index == 0), {() =>
fail(at, "Unbound wildcard")
});
("_w" + index)
case (_) =>
(("{\n" + emitStatements(term)) + "\n}")
}

def emitArgument(argument : Syntax_.Argument) = {
(argument.name.map({(name) =>
(escapeKeyword(name) + " = ")
}).getOrElse("") + emitTerm(argument.value))
}

def emitCase(matchCase : Syntax_.MatchCase) = {
val patterns = matchCase.patterns.map(emitPattern).mkString(", ");
val condition = matchCase.condition.map({(_w1) =>
(("if " + emitTerm(_w1)) + " ")
}).getOrElse("");
((((("case (" + patterns) + ") ") + condition) + "=>\n") + emitStatements(matchCase.body))
}

def emitPattern(pattern : Syntax_.MatchPattern) : Firefly_Core.String = (pattern) match {
case (Syntax_.PVariable(at, name)) =>
name.map(escapeKeyword).getOrElse("_")
case (Syntax_.PVariant(at, name, patterns)) =>
(((escapeResolved(name) + "(") + patterns.map(emitPattern).mkString(", ")) + ")")
case (Syntax_.PVariantAs(at, name, variable)) =>
((variable.map(escapeKeyword).getOrElse("_") + " : ") + escapeResolved(name))
case (Syntax_.PAlias(at, p, variable)) =>
(((escapeKeyword(variable) + " @ (") + emitPattern(p)) + ")")
}

def escapeResolved(word : Firefly_Core.String) = {
val parts = word.split("[.]").toList.map(escapeKeyword).join(".");
Firefly_Core.if_(parts.startsWith("ff:core/Core."), {() =>
parts.replace("ff:core/Core.", "Firefly_Core.")
}).else_({() =>
parts.replace(".", "_.")
})
}

def escapeKeyword(word : Firefly_Core.String) = {
Firefly_Core.if_(keywords(word), {() =>
(word + "_")
}).else_({() =>
word
})
}



}
