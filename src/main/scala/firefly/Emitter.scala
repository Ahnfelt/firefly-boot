package firefly
import firefly.Firefly_Core._

import firefly.Emitter._

import firefly.Main._

import firefly.Parser._

import firefly.Syntax._

import firefly.Token._

import firefly.Tokenizer._

import firefly.Wildcards._
object Emitter {

case class Emitter()





object Emitter {

val keywords = Set("abstract", "case", "catch", "class", "def", "do", "else", "extends", "false", "final", "finally", "for", "forSome", "if", "implicit", "import", "lazy", "match", "new", "null", "object", "override", "package", "private", "protected", "return", "sealed", "super", "this", "throw", "trait", "true", "try", "type", "val", "var", "while", "with", "yield", "scala", "java")

def fail[T](at : Location, message : String) : T = {
panic(((message + " ") + at.show))
}

def emitModule(module : Module, otherModules : List[String]) : String = {
val moduleNamespace = module.file.replace('\\', '/').reverse.takeWhile({(_w1) =>
(_w1 != '/')
}).reverse.takeWhile({(_w1) =>
(_w1 != '.')
});
val namespaces = module.types.map({(definition) =>
val lets = module.lets.filter({(_w1) =>
_w1.namespace.contains((definition.name + "_"))
});
val functions = module.functions.filter({(_w1) =>
_w1.namespace.contains((definition.name + "_"))
});
if_((lets.isEmpty && functions.isEmpty), {() =>
None()
}).else_({() =>
Some(emitTypeMembers(definition.name, lets, functions))
})
});
val parts = List(List("package firefly"), (List("import firefly.Firefly_Core._") ++ otherModules.map({(_w1) =>
(("import firefly." + _w1) + "._")
})), List((("object " + moduleNamespace) + " {")), if_(module.functions.exists({(f) =>
(f.namespace.isEmpty && (f.signature.name == "main"))
}), {() =>
List(emitMain())
}).else_({() =>
List()
}), module.types.map(emitTypeDefinition), module.lets.filter({(_w1) =>
_w1.namespace.isEmpty
}).map({(_w1) =>
emitLetDefinition(_w1)
}), module.functions.filter({(_w1) =>
_w1.namespace.isEmpty
}).map({(_w1) =>
emitFunctionDefinition(_w1)
}), module.functions.filter({(f) =>
f.namespace.exists(f.signature.parameters.headOption.map({(_w1) =>
(_w1.valueType.name + "_")
}).contains)
}).map(emitMethodImplicit), module.traits.map(emitTraitDefinition), module.instances.map(emitInstanceDefinition), namespaces.flatten, List("}"));
val allNamespaces = (module.lets.flatMap({(_w1) =>
_w1.namespace
}) ++ module.functions.flatMap({(_w1) =>
_w1.namespace
}));
allNamespaces.find({(n) =>
(!module.types.exists({(_w1) =>
((_w1.name + "_") == n)
}))
}).foreach({(n) =>
Emitter.fail(Location(module.file, 1, 1), ("No such type: " + n))
});
(parts.map({(_w1) =>
_w1.mkString("\n\n")
}).join("\n") + "\n")
}

def emitMain() = {
"def main(arguments : Array[String]) : Unit = main(new System(arguments))"
}

def emitTypeMembers(name : String, lets : List[DLet], functions : List[DFunction]) = {
val strings = (lets.map({(_w1) =>
emitLetDefinition(_w1)
}) ++ functions.map({(_w1) =>
emitFunctionDefinition(_w1)
}));
(((("object " + name) + " {\n\n") + strings.mkString("\n\n")) + "\n\n}")
}

def emitTypeDefinition(definition : DType) : String = {
val generics = emitTypeParameters(definition.generics);
if_(((definition.variants.size == 1) && (definition.variants.head.name == definition.name)), {() =>
val fields = (("(" + definition.commonFields.map(emitParameter).mkString(", ")) + ")");
((("case class " + definition.name) + generics) + fields)
}).else_({() =>
val commonFields = if_(definition.commonFields.isEmpty, {() =>
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

def emitLetDefinition(definition : DLet, mutable : Boolean = False()) : String = {
val typeAnnotation = emitTypeAnnotation(definition.variableType);
val mutability = if_(mutable, {() =>
"var"
}).else_({() =>
"val"
});
(((((mutability + " ") + escapeKeyword(definition.name)) + typeAnnotation) + " = ") + emitTerm(definition.value))
}

def emitFunctionDefinition(definition : DFunction, suffix : String = "") : String = {
val signature = emitSignature(definition.signature, suffix);
pipe_dot(definition.body)({
case (ELambda(_, List(matchCase))) if matchCase.patterns.all({
case (PVariable(_, None())) =>
True()
case (_) =>
False()
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

def emitMethodImplicit(definition : DFunction) : String = {
val generics = emitTypeParameters(definition.signature.generics);
val parameter = definition.signature.parameters.headOption.map({(p) =>
((escapeKeyword(p.name) + " : ") + emitType(p.valueType))
}).get;
val signature = emitSignature(definition.signature.copy(generics = List(), parameters = definition.signature.parameters.drop(1)));
val method = ((((((signature + " = ") + definition.namespace.get.replace("_", ".")) + escapeKeyword(definition.signature.name)) + "(") + definition.signature.parameters.map({(_w1) =>
_w1.name
}).map(escapeKeyword).join(", ")) + ")");
(((((((("implicit class " + definition.namespace.get) + definition.signature.name) + generics) + "(") + parameter) + ") {\n\n") + method) + "\n\n}")
}

def emitTraitDefinition(definition : DTrait) : String = {
val generics = emitTypeParameters(definition.generics);
val implicits = emitConstraints(definition.constraints);
val parameters = if_(definition.generatorParameters.isEmpty, {() =>
""
}).else_({() =>
(("(" + definition.generatorParameters.map(emitParameter).mkString(", ")) + ")")
});
val methods = if_(definition.methods.isEmpty, {() =>
""
}).else_({() =>
((((" {\n\nimport " + definition.name) + "._\n\n") + definition.methods.map({(signature) =>
val body = definition.methodDefaults.find({(_w1) =>
(_w1.first == signature.name)
}).map({
case (Pair(_, e)) =>
((" {\n" + emitStatements(e)) + "\n}")
}).orElse(definition.methodGenerators.find({(_w1) =>
(_w1.first == signature.name)
}).map({
case (Pair(_, e)) =>
" {\n// TODO: Generate\n}"
})).getOrElse({() =>
""
});
(emitSignature(signature, "_m") + body)
}).mkString("\n\n")) + "\n\n}")
});
val methodWrappers = if_(definition.methods.isEmpty, {() =>
""
}).else_({() =>
((" \n\n" + definition.methods.map({(signature) =>
val t = Type(definition.at, definition.name, definition.generics.map({(_w1) =>
Type(definition.at, _w1, List())
}));
(((((((emitSignature(signature.copy(generics = (definition.generics ++ signature.generics), constraints = (Constraint(t) :: (definition.constraints ++ signature.constraints)))) + " =\n    scala.Predef.implicitly[") + emitType(t)) + "].") + escapeKeyword(signature.name)) + "_m(") + signature.parameters.map({(_w1) =>
_w1.name
}).map(escapeKeyword).join(", ")) + ")")
}).join("\n\n")) + "\n\n")
});
((((((((((("abstract class " + definition.name) + generics) + parameters) + implicits) + methods) + "\n") + "object ") + definition.name) + " {") + methodWrappers) + "}")
}

def emitInstanceDefinition(definition : DInstance) : String = {
val signature = emitSignature(Signature(definition.at, ((definition.traitType.name + "_") + definition.hashCode().abs), definition.generics, definition.constraints, List(), definition.traitType));
val methods = ((((" {\n\nimport " + definition.traitType.name) + "._\n\n") + definition.methods.map({(_w1) =>
emitFunctionDefinition(_w1, "_m")
}).join("\n\n")) + "\n\n}");
val value = (("new " + emitType(definition.traitType)) + methods);
((("implicit " + signature) + " =\n    ") + value)
}

def emitVariantDefinition(typeDefinition : DType, definition : Variant) : String = {
val generics = emitTypeParameters(typeDefinition.generics);
val allFields = (typeDefinition.commonFields ++ definition.fields);
val fields = (("(" + allFields.map(emitParameter).mkString(", ")) + ")");
(((((("case class " + definition.name) + generics) + fields) + " extends ") + typeDefinition.name) + generics)
}

def emitSignature(signature : Signature, suffix : String = "") : String = {
val generics = emitTypeParameters(signature.generics);
val parameters = (("(" + signature.parameters.map(emitParameter).mkString(", ")) + ")");
val implicits = if_(signature.constraints.isEmpty, {() =>
""
}).else_({() =>
(("(implicit " + signature.constraints.zipWithIndex.map({
case (Pair(c, i)) =>
((("i_" + i) + " : ") + emitType(c.representation))
}).mkString(", ")) + ")")
});
val returnType = emitTypeAnnotation(signature.returnType);
(((((("def " + escapeKeyword(signature.name)) + suffix) + generics) + parameters) + implicits) + returnType)
}

def emitParameter(parameter : Parameter) : String = {
val mutability = if_(parameter.mutable, {() =>
"var "
}).else_({() =>
""
});
val defaultValue = parameter.default.map({(_w1) =>
(" = " + emitTerm(_w1))
}).getOrElse("");
(((mutability + escapeKeyword(parameter.name)) + emitTypeAnnotation(parameter.valueType)) + defaultValue)
}

def emitConstraints(constraints : List[Constraint]) : String = {
if_(constraints.isEmpty, {() =>
""
}).else_({() =>
val pairs = constraints.map({(_w1) =>
_w1.representation
}).map(emitType).zipWithIndex;
(("(implicit " + pairs.map({
case (Pair(k, v)) =>
((("i_" + v) + " : ") + k)
}).mkString(", ")) + ")")
})
}

def emitTypeParameters(generics : List[String]) = {
if_(generics.isEmpty, {() =>
""
}).else_({() =>
(("[" + generics.mkString(", ")) + "]")
})
}

def emitTypeAnnotation(t : Type) : String = {
if_((t.name == "?"), {() =>
""
}).else_({() =>
(" : " + emitType(t))
})
}

def emitType(t : Type) : String = {
if_(t.name.startsWith("Function$"), {() =>
emitType(t.copy(name = t.name.replace("$", "")))
}).elseIf({() =>
t.name.startsWith("Record$")
}, {() =>
(("{" + t.name.split('$').drop(1).toList.zip(t.generics).map({
case (Pair(field, fieldType)) =>
((("val " + escapeKeyword(field)) + " : ") + emitType(fieldType))
}).mkString("; ")) + "}")
}).else_({() =>
val generics = if_(t.generics.isEmpty, {() =>
""
}).else_({() =>
(("[" + t.generics.map(emitType).mkString(", ")) + "]")
});
(t.name.replace("_", ".") + generics)
})
}

def emitStatements(term : Term) : String = (term) match {
case (EFunctions(at, functions, body)) =>
val functionStrings = functions.map({(f) =>
emitFunctionDefinition(DFunction(at, None(), f.signature, f.body))
});
((functionStrings.mkString("\n") + "\n") + emitStatements(body))
case (ELet(at, mutable, name, valueType, value, body)) =>
((emitLetDefinition(DLet(at, None(), name, valueType, value), mutable) + ";\n") + emitStatements(body))
case (ESequential(at, before, after)) =>
((emitStatements(before) + ";\n") + emitStatements(after))
case (EAssign(at, operator, name, value)) =>
((((escapeKeyword(name) + " ") + operator) + "= ") + emitTerm(value))
case (EAssignField(at, operator, field, value)) =>
((((emitTerm(field) + " ") + operator) + "= ") + emitTerm(value))
case (_) =>
emitTerm(term)
}

def emitTerm(term : Term) : String = (term) match {
case (EString(at, value)) =>
value
case (EChar(at, value)) =>
value
case (EInt(at, value)) =>
value
case (EFloat(at, value)) =>
value
case (EVariable(at, name)) =>
escapeKeyword(name.replace("_", "."))
case (EList(at, items)) =>
(("List(" + items.map(emitTerm).mkString(", ")) + ")")
case (EVariant(at, name, typeArguments, arguments)) =>
val generics = if_(typeArguments.isEmpty, {() =>
""
}).else_({() =>
(("[" + typeArguments.map(emitType).mkString(", ")) + "]")
});
((((name.replace("_", ".") + generics) + "(") + arguments.toList.flatten.map(emitArgument).mkString(", ")) + ")")
case (ECopy(at, name, record, fields)) =>
val fieldCode = fields.map({(f) =>
((escapeKeyword(f.name) + " = ") + emitTerm(f.value))
}).mkString(", ");
(((emitTerm(record) + ".copy(") + fieldCode) + ")")
case (EField(at, record, field)) =>
((emitTerm(record) + ".") + escapeKeyword(field))
case (ELambda(at, List(MatchCase(_, patterns, None(), body)))) if patterns.all({
case (_ : PVariable) =>
True()
case (_) =>
False()
}) =>
val parameters = patterns.map({
case (p : PVariable) =>
p.name.map(escapeKeyword).getOrElse("_")
case (_) =>
panic("!")
}).mkString(", ");
(((("{(" + parameters) + ") =>\n") + emitStatements(body)) + "\n}")
case (ELambda(at, cases)) =>
val casesString = cases.map(emitCase).mkString("\n");
(("{\n" + casesString) + "\n}")
case (EPipe(at, value, function)) =>
(((("pipe_dot(" + emitTerm(value)) + ")(") + emitTerm(function)) + ")")
case (ECall(at, EVariable(_, operator), List(), List(value))) if (!operator.head.isLetter) =>
((("(" + operator) + emitArgument(value)) + ")")
case (ECall(at, EVariable(_, operator), List(), List(left, right))) if (!operator.head.isLetter) =>
(((((("(" + emitArgument(left)) + " ") + operator) + " ") + emitArgument(right)) + ")")
case (ECall(at, function, typeArguments, arguments)) =>
val generics = if_(typeArguments.isEmpty, {() =>
""
}).else_({() =>
(("[" + typeArguments.map(emitType).mkString(", ")) + "]")
});
((((emitTerm(function) + generics) + "(") + arguments.map(emitArgument).mkString(", ")) + ")")
case (ERecord(at, fields)) =>
if_(fields.isEmpty, {() =>
"{}"
}).else_({() =>
val list = fields.map({(f) =>
((("val " + escapeKeyword(f.name)) + " = ") + emitTerm(f.value))
});
(("new {\n" + list.mkString(";\n")) + ";\n}")
})
case (EWildcard(at, index)) =>
if_((index == 0), {() =>
Emitter.fail(at, "Unbound wildcard")
});
("_w" + index)
case (_) =>
(("{\n" + emitStatements(term)) + "\n}")
}

def emitArgument(argument : Argument) = {
(argument.name.map({(_w1) =>
(_w1 + " = ")
}).getOrElse("") + emitTerm(argument.value))
}

def emitCase(matchCase : MatchCase) = {
val patterns = matchCase.patterns.map(emitPattern).mkString(", ");
val condition = matchCase.condition.map({(_w1) =>
(("if " + emitTerm(_w1)) + " ")
}).getOrElse("");
((((("case (" + patterns) + ") ") + condition) + "=>\n") + emitStatements(matchCase.body))
}

def emitPattern(pattern : MatchPattern) : String = (pattern) match {
case (PVariable(at, name)) =>
name.map(escapeKeyword).getOrElse("_")
case (PVariant(at, name, patterns)) =>
(((name + "(") + patterns.map(emitPattern).mkString(", ")) + ")")
case (PVariantAs(at, name, variable)) =>
((variable.map(Emitter.escapeKeyword).getOrElse("_") + " : ") + name)
case (PAlias(at, p, variable)) =>
(((Emitter.escapeKeyword(variable) + " @ (") + Emitter.emitPattern(p)) + ")")
}

def escapeKeyword(word : String) = {
if_(keywords(word), {() =>
(word + "_")
}).else_({() =>
word
})
}

}
}
