package firefly
import firefly.Firefly_Core._

import firefly.Syntax._
object Resolver {

case class Resolver(variables : Firefly_Core.Map[String, String], variants : Firefly_Core.Map[String, String], types : Firefly_Core.Map[String, String], traits : Firefly_Core.Map[String, String])

def make() = {
def core(name : String) : Firefly_Core.Pair[String, String] = {
Firefly_Core.Pair(name, ("ff:core/Core." + name))
}
Resolver(variables = Firefly_Core.List("if", "while", "do", "panic", "try", "log").map(core).toMap, variants = Firefly_Core.List("True", "False", "Some", "None", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, types = Firefly_Core.List("Bool", "Option", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, traits = Firefly_Core.Map())
}

def fail[T](at : Location, message : String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}
implicit class Resolver_extend0(self : Resolver) {

def resolveModule(module : Module, otherModules : Firefly_Core.List[Module]) : Module = {
val moduleNamespace = module.file.replace('\\', '/').reverse.takeWhile({(_w1) =>
(_w1 != '/')
}).reverse.takeWhile({(_w1) =>
(_w1 != '.')
});
val self2 = self.processImports(module.imports, otherModules);
val self3 = self2.processDefinitions(module, Firefly_Core.None());
module.copy(types = module.types.map({(_w1) =>
self3.resolveTypeDefinition(_w1)
}), traits = module.traits.map({(_w1) =>
self3.resolveTraitDefinition(_w1)
}), instances = module.instances.map({(_w1) =>
self3.resolveInstanceDefinition(_w1)
}), extends_ = module.extends_.map({(_w1) =>
self3.resolveExtendDefinition(_w1)
}), lets = module.lets.map({(_w1) =>
self3.resolveLetDefinition(_w1)
}), functions = module.functions.map({(_w1) =>
self3.resolveFunctionDefinition(_w1)
}))
}

def processImports(imports : Firefly_Core.List[DImport], modules : Firefly_Core.List[Module]) : Resolver = {
var resolver = self;
imports.each({(import_) =>
modules.find({(_w1) =>
(_w1.file.dropRight(3) == import_.file)
}).each({(module) =>
resolver = resolver.processDefinitions(module, Firefly_Core.Some(import_.alias))
})
});
resolver
}

def processDefinitions(module : Module, importAlias : Firefly_Core.Option[String]) : Resolver = {
def entry(name : String, unqualified : Firefly_Core.Bool) : Firefly_Core.List[Firefly_Core.Pair[String, String]] = {
val full = ((module.file.dropRight(3) + ".") + name);
pipe_dot(importAlias)({
case (Firefly_Core.None()) =>
Firefly_Core.List(Firefly_Core.Pair(name, name))
case (Firefly_Core.Some(alias)) if unqualified =>
Firefly_Core.List(Firefly_Core.Pair(((alias + ".") + name), full), Firefly_Core.Pair(name, full))
case (Firefly_Core.Some(alias)) =>
Firefly_Core.List(Firefly_Core.Pair(((alias + ".") + name), full))
})
}
val lets = module.lets.flatMap({(_w1) =>
entry(_w1.name, Firefly_Core.False())
}).toMap;
val functions = module.functions.flatMap({(_w1) =>
entry(_w1.signature.name, Firefly_Core.False())
}).toMap;
val traitMethods = module.traits.flatMap({(_w1) =>
_w1.methods
}).flatMap({(_w1) =>
entry(_w1.name, Firefly_Core.False())
}).toMap;
val traits = module.traits.flatMap({(_w1) =>
entry(_w1.name, Firefly_Core.True())
}).toMap;
val types = module.types.flatMap({(_w1) =>
entry(_w1.name, Firefly_Core.True())
}).toMap;
val variants = module.types.flatMap({(_w1) =>
_w1.variants
}).flatMap({(_w1) =>
entry(_w1.name, Firefly_Core.True())
}).toMap;
Resolver(variables = (((self.variables ++ lets) ++ functions) ++ traitMethods), variants = (self.variants ++ variants), types = (self.types ++ types), traits = (self.traits ++ traits))
}

def resolveTypeDefinition(definition : DType) : DType = {
val generics = definition.generics.map({(g) =>
Firefly_Core.Pair(g, g)
}).toMap;
val self2 = self.copy(types = (self.types ++ generics));
definition.copy(constraints = definition.constraints.map({(c) =>
c.copy(representation = self2.resolveType(c.representation))
}), commonFields = definition.commonFields.map({(f) =>
f.copy(valueType = self2.resolveType(f.valueType), default = f.default.map({(_w1) =>
self2.resolveTerm(_w1)
}))
}), variants = definition.variants.map({(v) =>
v.copy(fields = v.fields.map({(f) =>
f.copy(valueType = self2.resolveType(f.valueType), default = f.default.map({(_w1) =>
self2.resolveTerm(_w1)
}))
}))
}))
}

def resolveTraitDefinition(definition : DTrait) : DTrait = {
definition
}

def resolveInstanceDefinition(definition : DInstance) : DInstance = {
definition
}

def resolveExtendDefinition(definition : DExtend) : DExtend = {
val generics = definition.generics.map({(g) =>
Firefly_Core.Pair(g, g)
}).toMap;
val self2 = self.copy(types = (self.types ++ generics), variables = (self.variables + Firefly_Core.Pair(definition.name, definition.name)));
definition.copy(constraints = definition.constraints.map({(c) =>
c.copy(representation = self2.resolveType(c.representation))
}), type_ = self2.resolveType(definition.type_), methods = definition.methods.map({(_w1) =>
self2.resolveFunctionDefinition(_w1)
}))
}

def resolveLetDefinition(definition : DLet) : DLet = {
val self2 = self.copy(variables = (self.variables + Firefly_Core.Pair(definition.name, definition.name)));
definition.copy(variableType = self.resolveType(definition.variableType), value = self.resolveTerm(definition.value))
}

def resolveFunctionDefinition(definition : DFunction) : DFunction = {
val local = resolveFunction(LocalFunction(definition.signature, definition.body));
definition.copy(signature = local.signature, body = local.body)
}

def resolveTerm(term : Term) : Term = (term) match {
case (_ : EString) =>
term
case (_ : EChar) =>
term
case (_ : EInt) =>
term
case (_ : EFloat) =>
term
case (e : EVariable) =>
self.variables.get(e.name).map({(_w1) =>
e.copy(name = _w1)
}).else_({() =>
term
})
case (EList(at, items)) =>
EList(at, items.map({(_w1) =>
self.resolveTerm(_w1)
}))
case (EVariant(at, name, typeArguments, arguments)) =>
EVariant(at = at, name = self.variants.getOrElse(name, name), typeArguments = typeArguments.map({(_w1) =>
self.resolveType(_w1)
}), arguments = arguments.map({(_w1) =>
_w1.map({(a) =>
a.copy(value = self.resolveTerm(a.value))
})
}))
case (EVariantIs(at, name, typeArguments)) =>
EVariantIs(at = at, name = self.variants.getOrElse(name, name), typeArguments = typeArguments.map({(_w1) =>
self.resolveType(_w1)
}))
case (ECopy(at, name, record, arguments)) =>
ECopy(at = at, name = self.variants.getOrElse(name, name), record = self.resolveTerm(record), arguments = arguments.map({(f) =>
f.copy(value = self.resolveTerm(f.value))
}))
case (e : EField) =>
e.copy(record = self.resolveTerm(e.record))
case (ELambda(at, cases)) =>
ELambda(at, cases.map({(_w1) =>
self.resolveCase(_w1)
}))
case (EPipe(at, value, function)) =>
EPipe(at = at, value = self.resolveTerm(value), function = self.resolveTerm(function))
case (ECall(at, function, typeArguments, arguments)) =>
ECall(at = at, function = self.resolveTerm(function), typeArguments = typeArguments.map({(_w1) =>
self.resolveType(_w1)
}), arguments = arguments.map({(a) =>
a.copy(value = self.resolveTerm(a.value))
}))
case (ERecord(at, fields)) =>
ERecord(at = at, fields = fields.map({(f) =>
f.copy(value = self.resolveTerm(f.value))
}))
case (e : EWildcard) =>
Firefly_Core.if_((e.index == 0), {() =>
fail(e.at, "Unbound wildcard")
});
e
case (EFunctions(at, functions, body)) =>
val functionMap = functions.map({(_w1) =>
_w1.signature.name
}).map({(name) =>
Firefly_Core.Pair(name, name)
}).toMap;
val self2 = self.copy(variables = (self.variables ++ functionMap));
EFunctions(at = at, functions = functions.map({(_w1) =>
self2.resolveFunction(_w1)
}), body = self2.resolveTerm(body))
case (e : ELet) =>
val self2 = self.copy(variables = (self.variables + Firefly_Core.Pair(e.name, e.name)));
e.copy(valueType = self.resolveType(e.valueType), value = self.resolveTerm(e.value), body = self2.resolveTerm(e.body))
case (ESequential(at, before, after)) =>
ESequential(at = at, before = self.resolveTerm(before), after = self.resolveTerm(after))
case (EAssign(at, operator, variable, value)) =>
EAssign(at = at, operator = operator, variable = self.variables.get(variable).else_({() =>
variable
}), value = self.resolveTerm(value))
case (EAssignField(at, operator, field, value)) =>
EAssignField(at = at, operator = operator, field = field.copy(record = self.resolveTerm(field.record)), value = self.resolveTerm(value))
}

def resolveType(type_ : Type) : Type = {
type_.copy(name = self.types.get(type_.name).else_({() =>
type_.name
}), generics = type_.generics.map({(_w1) =>
self.resolveType(_w1)
}))
}

def resolveFunction(function : LocalFunction) : LocalFunction = {
val variableMap = function.signature.parameters.map({(_w1) =>
_w1.name
}).map({(name) =>
Firefly_Core.Pair(name, name)
}).toMap;
val typeMap = function.signature.generics.map({(name) =>
Firefly_Core.Pair(name, name)
}).toMap;
val self2 = self.copy(variables = (self.variables ++ variableMap), types = (self.types ++ typeMap));
val signature = function.signature.copy(constraints = function.signature.constraints.map({(c) =>
Constraint(self2.resolveType(c.representation))
}), parameters = function.signature.parameters.map({(p) =>
p.copy(valueType = self2.resolveType(p.valueType), default = p.default.map({(_w1) =>
self2.resolveTerm(_w1)
}))
}), returnType = self2.resolveType(function.signature.returnType));
pipe_dot(self2.resolveTerm(function.body))({
case (body @ (_ : ELambda)) =>
LocalFunction(signature, body)
case (e) =>
fail(function.signature.at, ("Function body must be a lambda: " + e))
})
}

def resolveCase(case_ : MatchCase) : MatchCase = {
def findVariables(pattern : MatchPattern) : Firefly_Core.Map[String, String] = (pattern) match {
case (PVariable(_, Firefly_Core.Some(name))) =>
Firefly_Core.Map(Firefly_Core.Pair(name, name))
case (PVariable(_, Firefly_Core.None())) =>
Firefly_Core.Map()
case (PVariant(_, _, patterns)) =>
patterns.map(findVariables).foldLeft(Firefly_Core.Map[String, String]())({(_w1, _w2) =>
(_w1 ++ _w2)
}).toMap
case (PVariantAs(_, _, variable)) =>
variable.toList.map({(x) =>
Firefly_Core.Pair(x, x)
}).toMap
case (PAlias(_, pattern, variable)) =>
(Firefly_Core.Map(Firefly_Core.Pair(variable, variable)) ++ findVariables(pattern))
}
val variableMap = case_.patterns.map(findVariables).foldLeft(Firefly_Core.Map[String, String]())({(_w1, _w2) =>
(_w1 ++ _w2)
}).toMap;
val self2 = self.copy(variables = (self.variables ++ variableMap));
MatchCase(at = case_.at, patterns = case_.patterns.map({(_w1) =>
self2.resolvePattern(_w1)
}), condition = case_.condition.map({(_w1) =>
self2.resolveTerm(_w1)
}), body = self2.resolveTerm(case_.body))
}

def resolvePattern(pattern : MatchPattern) : MatchPattern = (pattern) match {
case (p @ (_ : PVariable)) =>
p
case (PVariant(at, name, patterns)) =>
val newName = self.variants.getOrElse(name, name);
val newPatterns = patterns.map({(_w1) =>
self.resolvePattern(_w1)
});
PVariant(at, newName, newPatterns)
case (PVariantAs(at, name, variable)) =>
val newName = self.variants.getOrElse(name, name);
PVariantAs(at, newName, variable)
case (PAlias(at, pattern, variable)) =>
val newPattern = resolvePattern(pattern);
PAlias(at, newPattern, variable)
}

}


object Resolver {

def make() = {
def core(name : String) : Firefly_Core.Pair[String, String] = {
Firefly_Core.Pair(name, ("ff:core/Core." + name))
}
Resolver(variables = Firefly_Core.List("if", "while", "do", "panic", "try", "log").map(core).toMap, variants = Firefly_Core.List("True", "False", "Some", "None", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, types = Firefly_Core.List("Bool", "Option", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, traits = Firefly_Core.Map())
}

def fail[T](at : Location, message : String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}

}

}
