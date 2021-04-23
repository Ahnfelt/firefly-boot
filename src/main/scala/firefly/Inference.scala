package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._

import firefly.Unification_._

import firefly.Environment_._
object Inference_ {

case class Inference(unification : Unification_.Unification)
def make(instances : Firefly_Core.List[Syntax_.DInstance]) : Inference = {
Inference(unification = Unification_.make(instances))
}

def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}

def core(name : Firefly_Core.String) : Firefly_Core.String = {
("ff:core/Core." + name)
}
implicit class Inference_extend0(self : Inference) {

def inferModule(coreModule : Syntax_.Module, module : Syntax_.Module, otherModules : Firefly_Core.List[Syntax_.Module]) : Syntax_.Module = {
val environment = Environment_.make(coreModule, module, otherModules);
val lets = module.lets.map({(_w1) =>
self.inferLetDefinition(environment, _w1)
});
val functions = module.functions.map({(_w1) =>
self.inferFunctionDefinition(environment, _w1)
});
module.copy(lets = lets, functions = functions)
}

def inferLetDefinition(environment : Environment_.Environment, definition : Syntax_.DLet) : Syntax_.DLet = {
val value = self.inferTerm(environment, definition.variableType, definition.value);
definition.copy(value = value)
}

def inferFunctionDefinition(environment : Environment_.Environment, definition : Syntax_.DFunction) : Syntax_.DFunction = {
val parameters = definition.signature.parameters.map({(p) =>
val scheme = Environment_.Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(p.at, p.name, List(), List(), List(), p.valueType));
Firefly_Core.Pair(p.name, scheme)
});
val environment2 = environment.copy(symbols = (environment.symbols ++ parameters));
val functionType = Syntax_.TConstructor(definition.at, ("Function$" + parameters.size), (List(parameters.map({(_w1) =>
_w1.second.signature.returnType
}), List(definition.signature.returnType)).flatten));
definition.copy(body = self.inferLambda(environment2, functionType, definition.body))
}

def inferLambda(environment : Environment_.Environment, expected : Syntax_.Type, lambda : Syntax_.Lambda) : Syntax_.Lambda = {
lambda.copy(cases = lambda.cases.map({(_w1) =>
self.inferMatchCase(environment, expected, _w1)
}))
}

def inferMatchCase(environment : Environment_.Environment, expected : Syntax_.Type, case_ : Syntax_.MatchCase) : Syntax_.MatchCase = {
val parameterTypes = case_.patterns.map({(_w1) =>
self.unification.freshTypeVariable(_w1.at)
});
val returnType = self.unification.freshTypeVariable(case_.at);
val functionType = Syntax_.TConstructor(case_.at, ("Function$" + case_.patterns.size), (List(parameterTypes, List(returnType)).flatten));
self.unification.unify(case_.at, expected, functionType);
val newEnvironment = parameterTypes.zip(case_.patterns).foldLeft(environment)({
case (environment1, Firefly_Core.Pair(t, c)) =>
val symbols = self.inferPattern(environment, t, c).map({
case (Firefly_Core.Pair(name, type_)) =>
Firefly_Core.Pair(name, Environment_.Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(c.at, name, List(), List(), List(), type_)))
});
Environment_.Environment((environment1.symbols ++ symbols))
});
val body = self.inferTerm(newEnvironment, returnType, case_.body);
case_.copy(body = body)
}

def inferPattern(environment : Environment_.Environment, expected : Syntax_.Type, pattern : Syntax_.MatchPattern) : Firefly_Core.Map[Firefly_Core.String, Syntax_.Type] = {
pipe_dot(pattern)({
case (Syntax_.PVariable(at, Firefly_Core.None())) =>
Firefly_Core.Map()
case (Syntax_.PVariable(at, Firefly_Core.Some(name))) =>
Firefly_Core.Map(Firefly_Core.Pair(name, expected))
case (Syntax_.PAlias(at, pattern, variable)) =>
(self.inferPattern(environment, expected, pattern) + Firefly_Core.Pair(variable, expected))
case (Syntax_.PList(at, t, items)) =>
val listType = Syntax_.TConstructor(at, core("List"), List(t));
self.unification.unify(at, expected, listType);
items.map({
case (Firefly_Core.Pair(item, Firefly_Core.False())) =>
self.inferPattern(environment, t, item)
case (Firefly_Core.Pair(item, Firefly_Core.True())) =>
self.inferPattern(environment, listType, item)
}).foldLeft(Firefly_Core.Map[Firefly_Core.String, Syntax_.Type]())({(_w1, _w2) =>
(_w1 ++ _w2)
})
case (Syntax_.PVariantAs(at, name, Firefly_Core.None())) =>
val scheme = environment.symbols.get(name).else_({() =>
fail(at, ("No such variant: " + name))
});
Firefly_Core.Map()
case (Syntax_.PVariantAs(at, name, Firefly_Core.Some(variable))) =>
val scheme = environment.symbols.get(name).else_({() =>
fail(at, ("No such variant: " + name))
});
val parameters = scheme.signature.parameters;
val recordType = Syntax_.TConstructor(at, ("Record$" + parameters.map({(_w1) =>
_w1.name
}).join("$")), parameters.map({(_w1) =>
_w1.valueType
}));
Firefly_Core.Map(Firefly_Core.Pair(variable, recordType))
case (Syntax_.PVariant(at, name, patterns)) =>
val scheme = environment.symbols.get(name).else_({() =>
fail(at, ("No such variant: " + name))
});
val parameters = scheme.signature.parameters;
patterns.zip(parameters).map({
case (Firefly_Core.Pair(pattern, parameter)) =>
self.inferPattern(environment, parameter.valueType, pattern)
}).foldLeft(Firefly_Core.Map[Firefly_Core.String, Syntax_.Type]())({(_w1, _w2) =>
(_w1 ++ _w2)
})
})
}

def inferTerm(environment : Environment_.Environment, expected : Syntax_.Type, term : Syntax_.Term) : Syntax_.Term = {
def literal(coreTypeName : Firefly_Core.String) : Syntax_.Term = {
self.unification.unify(term.at, expected, Syntax_.TConstructor(term.at, core(coreTypeName), List()));
term
}
pipe_dot(term)({
case (_ : Syntax_.EString) =>
literal("String")
case (_ : Syntax_.EChar) =>
literal("Char")
case (_ : Syntax_.EInt) =>
literal("Int")
case (_ : Syntax_.EFloat) =>
literal("Float")
case (e : Syntax_.EVariable) =>
environment.symbols.get(e.name).map({(scheme) =>
Firefly_Core.if_(scheme.isVariable, {() =>
self.unification.unify(e.at, expected, scheme.signature.returnType);
term
}).else_({() =>
fail(e.at, ("Functions need to be called: " + e.name))
})
}).else_({() =>
fail(e.at, ("Symbol not in scope: " + e.name))
})
case (Syntax_.EList(at, t, items)) =>
val listType = Syntax_.TConstructor(term.at, core("List"), List(t));
Syntax_.EList(at, t, items.map({
case (Firefly_Core.Pair(item, spread)) =>
Firefly_Core.Pair(self.inferTerm(environment, Firefly_Core.if_(spread, {() =>
listType
}).else_({() =>
t
}), item), spread)
}))
case (Syntax_.ESequential(at, before, after)) =>
Syntax_.ESequential(at = at, before = self.inferTerm(environment, self.unification.freshTypeVariable(at), before), after = self.inferTerm(environment, expected, after))
case (e : Syntax_.ELet) =>
val scheme = Environment_.Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(e.at, e.name, List(), List(), List(), e.valueType));
val environment2 = environment.copy(symbols = (environment.symbols + Firefly_Core.Pair(e.name, scheme)));
e.copy(value = self.inferTerm(environment, e.valueType, e.value), body = self.inferTerm(environment2, expected, e.body))
case (e : Syntax_.EVariant) =>
val signature = environment.symbols.get(e.name).else_({() =>
fail(e.at, ("Symbol not in scope: " + e.name))
}).signature;
val typeArguments = self.inferTypeArguments(e.at, e.name, signature.generics, e.typeArguments);
val instantiation = typeArguments.toMap;
val returnType = self.unification.instantiate(instantiation, signature.returnType);
self.unification.unify(e.at, expected, returnType);
val arguments = e.arguments.map({(_w1) =>
self.inferArguments(e.at, environment, instantiation, signature.parameters, _w1)
});
e.copy(typeArguments = typeArguments.map({(_w1) =>
_w1.second
}), arguments = arguments)
case (e : Syntax_.EVariantIs) =>
val signature = environment.symbols.get(e.name).else_({() =>
fail(e.at, ("Symbol not in scope: " + e.name))
}).signature;
val typeArguments = self.inferTypeArguments(e.at, e.name, signature.generics, e.typeArguments);
e.copy(typeArguments = typeArguments.map({(_w1) =>
_w1.second
}))
case (e : Syntax_.ECopy) =>
val signature = environment.symbols.get(e.name).else_({() =>
fail(e.at, ("Symbol not in scope: " + e.name))
}).signature;
e.arguments.find({(a) =>
(!signature.parameters.exists({(_w1) =>
(_w1.name == a.name)
}))
}).each({
case (Syntax_.Field(at, name, value)) =>
fail(at, ("Unknown parameter: " + name))
});
val arguments = signature.parameters.map({(p) =>
e.arguments.find({(_w1) =>
(_w1.name == p.name)
}).map({
case (Syntax_.Field(at, _, value)) =>
Syntax_.Argument(at, Firefly_Core.Some(p.name), value)
}).else_({() =>
Syntax_.Argument(e.at, Firefly_Core.Some(p.name), Syntax_.EField(e.at, Syntax_.EVariable(e.at, "_c", List(), List()), p.name))
})
});
val body = Syntax_.EVariant(e.at, e.name, List(), Firefly_Core.Some(arguments));
val term = Syntax_.EPipe(e.at, e.record, Syntax_.ELambda(e.at, Syntax_.Lambda(e.at, List(Syntax_.MatchCase(e.at, List(Syntax_.PVariable(e.at, Firefly_Core.Some("_c"))), Firefly_Core.None(), body)))));
self.inferTerm(environment, expected, term)
case (e : Syntax_.EPipe) =>
val valueType = self.unification.freshTypeVariable(e.at);
val functionType = Syntax_.TConstructor(e.at, "Function$1", List(valueType, expected));
val value = self.inferTerm(environment, valueType, e.value);
val function = self.inferTerm(environment, functionType, e.function);
e.copy(value = value, function = function)
case (Syntax_.ELambda(at, l)) =>
val lambda = self.inferLambda(environment, expected, l);
Syntax_.ELambda(at, lambda)
case (_) =>
term
})
}

def inferTypeArguments(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], typeArguments : Firefly_Core.List[Syntax_.Type]) : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Type]] = {
Firefly_Core.if_(typeArguments.nonEmpty, {() =>
Firefly_Core.if_((generics.size != typeArguments.size), {() =>
fail(at, ((((("Wrong number of type parameters for " + name) + ", expected ") + generics.size) + ", got ") + typeArguments.size))
});
generics.zip(typeArguments)
}).else_({() =>
generics.map({(name) =>
Firefly_Core.Pair(name, self.unification.freshTypeVariable(at))
})
})
}

def inferArguments(at : Syntax_.Location, environment : Environment_.Environment, instantiation : Firefly_Core.Map[Firefly_Core.String, Syntax_.Type], parameters : Firefly_Core.List[Syntax_.Parameter], arguments : Firefly_Core.List[Syntax_.Argument]) : Firefly_Core.List[Syntax_.Argument] = {
var remainingArguments = arguments;
val newArguments = parameters.map({(p) =>
val t = self.unification.instantiate(instantiation, p.valueType);
pipe_dot(remainingArguments)({
case (List()) =>
p.default.map({(e) =>
val e2 = self.inferTerm(environment, t, e);
Syntax_.Argument(at, Firefly_Core.Some(p.name), e2)
}).else_({() =>
fail(at, ("Missing argument: " + p.name))
})
case (List(Syntax_.Argument(at, Firefly_Core.None(), e), remaining @ _*)) =>
remainingArguments = remaining.toList;
val e2 = self.inferTerm(environment, t, e);
Syntax_.Argument(at, Firefly_Core.Some(p.name), e2)
case (remaining) =>
remainingArguments.find({(_w1) =>
_w1.name.contains(p.name)
}).map({
case (Syntax_.Argument(at, _, e)) =>
remainingArguments = remainingArguments.filter({(_w1) =>
(!_w1.name.contains(p.name))
});
val e2 = self.inferTerm(environment, t, e);
Syntax_.Argument(at, Firefly_Core.Some(p.name), e2)
}).else_({() =>
fail(at, ("Missing argument: " + p.name))
})
})
});
remainingArguments.headOption.each({
case (Syntax_.Argument(at, Firefly_Core.None(), _)) =>
fail(at, "Too many arguments")
case (Syntax_.Argument(at, Firefly_Core.Some(name), _)) =>
fail(at, ("Unknown argument: " + name))
});
newArguments
}

}


}
