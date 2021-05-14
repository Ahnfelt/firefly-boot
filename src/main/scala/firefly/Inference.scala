package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._

import firefly.Unification_._

import firefly.Environment_._
object Inference_ {

case class Inference(unification : Unification_.Unification)

def make(instances : Firefly_Core.List[Syntax_.DInstance]) : Inference_.Inference = {
Inference_.Inference(unification = Unification_.make(instances))
}

def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show()))
}

def core(name : Firefly_Core.String) : Firefly_Core.String = {
("ff:core/Core." + name)
}
implicit class Inference_extend0(self : Inference_.Inference) {

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
val condition = case_.condition.map({(e) =>
self.inferTerm(newEnvironment, Syntax_.TConstructor(e.at, Inference_.core("Bool"), List()), e)
});
val body = self.inferTerm(newEnvironment, returnType, case_.body);
case_.copy(condition = condition, body = body)
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
val listType = Syntax_.TConstructor(at, Inference_.core("List"), List(t));
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
Inference_.fail(at, ("No such variant: " + name))
});
Firefly_Core.Map()
case (Syntax_.PVariantAs(at, name, Firefly_Core.Some(variable))) =>
val scheme = environment.symbols.get(name).else_({() =>
Inference_.fail(at, ("No such variant: " + name))
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
Inference_.fail(at, ("No such variant: " + name))
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
self.unification.unify(term.at, expected, Syntax_.TConstructor(term.at, Inference_.core(coreTypeName), List()));
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
self.inferEtaExpansion(environment, expected, e.at, scheme.signature, term)
})
}).else_({() =>
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
})
case (e : Syntax_.EField) =>
val recordType = self.unification.freshTypeVariable(e.at);
val record = self.inferTerm(environment, recordType, e.record);
val e2 = e.copy(record = record);
pipe_dot(self.unification.substitute(recordType))({
case (Syntax_.TConstructor(_, name, typeParameters)) =>
val methodName = ((name + "_") + e.field);
pipe_dot(environment.symbols.get(methodName))({
case (Firefly_Core.Some(scheme)) =>
val signature = scheme.signature.copy(parameters = scheme.signature.parameters.drop(1));
self.inferEtaExpansion(environment, expected, e.at, signature, e2)
case (Firefly_Core.None()) =>
term
})
case (Syntax_.TVariable(_, index)) =>
Inference_.fail(e.at, ((("No such field " + e.field) + " on unknown type: $") + index))
})
case (e : Syntax_.EWildcard) =>
environment.symbols.get(("_w" + e.index)).map({(scheme) =>
self.unification.unify(e.at, expected, scheme.signature.returnType);
term
}).get
case (Syntax_.EList(at, t, items)) =>
val listType = Syntax_.TConstructor(term.at, Inference_.core("List"), List(t));
self.unification.unify(at, expected, listType);
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
case (Syntax_.ELambda(at, l)) =>
val lambda = self.inferLambda(environment, expected, l);
Syntax_.ELambda(at, lambda)
case (e : Syntax_.EVariant) =>
val signature = environment.symbols.get(e.name).else_({() =>
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
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
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
}).signature;
val typeArguments = self.inferTypeArguments(e.at, e.name, signature.generics, e.typeArguments);
e.copy(typeArguments = typeArguments.map({(_w1) =>
_w1.second
}))
case (e : Syntax_.ECopy) =>
val signature = environment.symbols.get(e.name).else_({() =>
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
}).signature;
e.arguments.find({(a) =>
(!signature.parameters.exists({(_w1) =>
(_w1.name == a.name)
}))
}).each({
case (Syntax_.Field(at, name, value)) =>
Inference_.fail(at, ("Unknown parameter: " + name))
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
case (e : Syntax_.ECall) =>
pipe_dot(e.function)({
case (Syntax_.EVariable(variableAt, x, List(), List())) =>
Firefly_Core.if_(x.headOption.exists({(c) =>
((c != '_') && (!c.isLetter))
}), {() =>
self.inferOperator(environment, expected, x, e)
}).else_({() =>
pipe_dot(environment.symbols.get(x))({
case (Firefly_Core.Some(scheme)) =>
Firefly_Core.if_(scheme.isVariable, {() =>
self.inferLambdaCall(environment, expected, e)
}).else_({() =>
self.inferFunctionCall(environment, expected, scheme.signature, e, x)
})
case (Firefly_Core.None()) =>
Inference_.fail(variableAt, ("No such function: " + x))
})
})
case (f : Syntax_.EField) =>
val recordType = self.unification.freshTypeVariable(f.at);
val record = self.inferTerm(environment, recordType, f.record);
val e2 = e.copy(function = f.copy(record = record));
pipe_dot(self.unification.substitute(recordType))({
case (Syntax_.TConstructor(_, name, typeParameters)) =>
val methodName = ((name + "_") + f.field);
pipe_dot(environment.symbols.get(methodName))({
case (Firefly_Core.Some(scheme)) =>
self.inferMethodCall(environment, expected, scheme.signature, e2, record, methodName)
case (Firefly_Core.None()) =>
self.inferLambdaCall(environment, expected, e2)
})
case (Syntax_.TVariable(_, index)) =>
Inference_.fail(f.at, ((("No such field " + f.field) + " on unknown type: $") + index))
})
case (_) =>
self.inferLambdaCall(environment, expected, e)
})
case (_) =>
term
})
}

def inferMethodCall(environment : Environment_.Environment, expected : Syntax_.Type, signature : Syntax_.Signature, term : Syntax_.Term, record : Syntax_.Term, name : Firefly_Core.String) : Syntax_.Term = {
val e = pipe_dot(term)({
case (e : Syntax_.ECall) =>
e
case (_) =>
Inference_.fail(term.at, "Call expected")
});
val e2 = e.copy(function = Syntax_.EVariable(e.at, name, List(), List()), arguments = (List(List(Syntax_.Argument(record.at, Firefly_Core.None(), record)), e.arguments).flatten));
self.inferFunctionCall(environment, expected, signature, e2, name)
}

def inferFunctionCall(environment : Environment_.Environment, expected : Syntax_.Type, signature : Syntax_.Signature, term : Syntax_.Term, name : Firefly_Core.String) : Syntax_.Term = {
val e = pipe_dot(term)({
case (e : Syntax_.ECall) =>
e
case (_) =>
Inference_.fail(term.at, "Call expected")
});
val typeArguments = self.inferTypeArguments(e.at, name, signature.generics, e.typeArguments);
val instantiation = typeArguments.toMap;
val returnType = self.unification.instantiate(instantiation, signature.returnType);
self.unification.unify(e.at, expected, returnType);
val arguments = self.inferArguments(e.at, environment, instantiation, signature.parameters, e.arguments);
e.copy(function = e.function, typeArguments = typeArguments.map({(_w1) =>
_w1.second
}), arguments = arguments)
}

def inferLambdaCall(environment : Environment_.Environment, expected : Syntax_.Type, term : Syntax_.Term) : Syntax_.Term = {
val e = pipe_dot(term)({
case (e : Syntax_.ECall) =>
e
case (_) =>
Inference_.fail(term.at, "Call expected")
});
val arguments = e.arguments.map({(argument) =>
val t = self.unification.freshTypeVariable(argument.at);
argument.name.foreach({(name) =>
Inference_.fail(argument.at, ("Named argument not allowed here: " + name))
});
(t -> argument.copy(value = self.inferTerm(environment, t, argument.value)))
});
val argumentTypes = arguments.map({(_w1) =>
_w1.first
});
val functionType = Syntax_.TConstructor(e.at, ("Function$" + e.arguments.size), (List(argumentTypes, List(expected)).flatten));
val function = self.inferTerm(environment, functionType, e.function);
e.typeArguments.headOption.foreach({(typeArgument) =>
Inference_.fail(typeArgument.at, "Type arguments not allowed here")
});
e.copy(function = function, typeArguments = List(), arguments = arguments.map({(_w1) =>
_w1.second
}))
}

def inferOperator(environment : Environment_.Environment, expected : Syntax_.Type, operator : Firefly_Core.String, term : Syntax_.Term) : Syntax_.Term = {
val e = pipe_dot(term)({
case (e : Syntax_.ECall) =>
e
case (_) =>
Inference_.fail(term.at, "Call expected")
});
pipe_dot(e.arguments)({
case (List(a1)) if (operator == "!") =>
val t = Syntax_.TConstructor(e.at, Inference_.core("Bool"), List());
val e1 = self.inferTerm(environment, t, a1.value);
self.unification.unify(e.at, expected, t);
e.copy(arguments = List(a1.copy(value = e1)))
case (List(a1)) if (operator == "-") =>
val t1 = self.unification.freshTypeVariable(e.at);
val e1 = self.inferTerm(environment, t1, a1.value);
pipe_dot(self.unification.substitute(t1))({
case (Syntax_.TConstructor(_, name, List())) if (name == Inference_.core("Float")) =>
self.unification.unify(e.at, expected, t1)
case (Syntax_.TConstructor(_, name, List())) if (name == Inference_.core("Int")) =>
self.unification.unify(e.at, expected, t1)
case (_) =>
Inference_.fail(e.at, "Operators on unknown types not currently supported")
});
e.copy(arguments = List(a1.copy(value = e1)))
case (List(a1, a2)) if (operator == "++") =>
val t1 = self.unification.freshTypeVariable(e.at);
val t = Syntax_.TConstructor(e.at, Inference_.core("List"), List(t1));
val e1 = self.inferTerm(environment, t, a1.value);
val e2 = self.inferTerm(environment, t, a2.value);
self.unification.unify(e.at, expected, t);
e.copy(arguments = List(a1.copy(value = e1), a2.copy(value = e2)))
case (List(a1, a2)) if ((operator == "||") || (operator == "&&")) =>
val t = Syntax_.TConstructor(e.at, Inference_.core("Bool"), List());
val e1 = self.inferTerm(environment, t, a1.value);
val e2 = self.inferTerm(environment, t, a2.value);
self.unification.unify(e.at, expected, t);
e.copy(arguments = List(a1.copy(value = e1), a2.copy(value = e2)))
case (List(a1, a2)) if ((((((operator == "<") || (operator == ">")) || (operator == "<=")) || (operator == ">=")) || (operator == "==")) || (operator == "!=")) =>
val t = Syntax_.TConstructor(e.at, Inference_.core("Bool"), List());
val t1 = self.unification.freshTypeVariable(e.at);
val t2 = self.unification.freshTypeVariable(e.at);
val e1 = self.inferTerm(environment, t1, a1.value);
val e2 = self.inferTerm(environment, t2, a2.value);
val magic : Function1[Syntax_.Type, Firefly_Core.Option[Firefly_Core.String]] = {(t) =>
pipe_dot(self.unification.substitute(t))({
case (Syntax_.TConstructor(_, name, List())) if (name == Inference_.core("String")) =>
Firefly_Core.Some("String")
case (Syntax_.TConstructor(_, name, List())) if (name == Inference_.core("Float")) =>
Firefly_Core.Some("Float")
case (Syntax_.TConstructor(_, name, List())) if (name == Inference_.core("Int")) =>
Firefly_Core.Some("Int")
case (_) =>
Firefly_Core.None()
})
};
val chooseType : Function2[Firefly_Core.Option[Firefly_Core.String], Firefly_Core.Option[Firefly_Core.String], Firefly_Core.Unit] = {
case (Firefly_Core.Some(_), _) =>
self.unification.unify(e.at, t1, t2);
self.unification.unify(e.at, expected, t)
case (_, Firefly_Core.Some(_)) =>
self.unification.unify(e.at, t2, t1);
self.unification.unify(e.at, expected, t)
case (Firefly_Core.None(), Firefly_Core.None()) =>
Inference_.fail(e.at, "Operators on unknown types not currently supported")
};
chooseType(magic(t1), magic(t2));
e.copy(arguments = List(a1.copy(value = e1), a2.copy(value = e2)))
case (List(a1, a2)) if ((((((operator == "+") || (operator == "-")) || (operator == "*")) || (operator == "/")) || (operator == "%")) || (operator == "^")) =>
val t1 = self.unification.freshTypeVariable(e.at);
val t2 = self.unification.freshTypeVariable(e.at);
val e1 = self.inferTerm(environment, t1, a1.value);
val e2 = self.inferTerm(environment, t2, a2.value);
val magic : Function1[Syntax_.Type, Firefly_Core.Option[Firefly_Core.String]] = {(t) =>
pipe_dot(self.unification.substitute(t))({
case (Syntax_.TConstructor(_, name, List())) if (name == Inference_.core("Float")) =>
Firefly_Core.Some("Float")
case (Syntax_.TConstructor(_, name, List())) if (name == Inference_.core("Int")) =>
Firefly_Core.Some("Int")
case (Syntax_.TConstructor(_, name, List())) if ((operator == "+") && (name == Inference_.core("String"))) =>
Firefly_Core.Some("String")
case (_) =>
Firefly_Core.None()
})
};
val chooseType : Function2[Firefly_Core.Option[Firefly_Core.String], Firefly_Core.Option[Firefly_Core.String], Firefly_Core.Unit] = {
case (Firefly_Core.Some(n), Firefly_Core.Some(_)) if (n == "String") =>
self.unification.unify(e.at, expected, t1)
case (Firefly_Core.Some(_), Firefly_Core.Some(n)) if (n == "String") =>
self.unification.unify(e.at, expected, t2)
case (Firefly_Core.Some(n), Firefly_Core.Some(_)) if (n == "Float") =>
self.unification.unify(e.at, expected, t1)
case (Firefly_Core.Some(_), Firefly_Core.Some(n)) if (n == "Float") =>
self.unification.unify(e.at, expected, t2)
case (Firefly_Core.Some(n), Firefly_Core.Some(_)) if (n == "Int") =>
self.unification.unify(e.at, expected, t1)
case (Firefly_Core.Some(_), Firefly_Core.Some(n)) if (n == "Int") =>
self.unification.unify(e.at, expected, t2)
case (Firefly_Core.Some(_), Firefly_Core.None()) =>
self.unification.unify(e.at, t1, t2);
self.unification.unify(e.at, expected, t1)
case (Firefly_Core.None(), Firefly_Core.Some(_)) =>
self.unification.unify(e.at, t2, t1);
self.unification.unify(e.at, expected, t2)
case (Firefly_Core.None(), Firefly_Core.None()) =>
Inference_.fail(e.at, "Operators on unknown types not currently supported")
};
chooseType(magic(t1), magic(t2));
e.copy(arguments = List(a1.copy(value = e1), a2.copy(value = e2)))
case (_) =>
Inference_.fail(e.at, ("Unknown operator: " + operator))
})
}

def inferEtaExpansion(environment : Environment_.Environment, expected : Syntax_.Type, at : Syntax_.Location, signature : Syntax_.Signature, term : Syntax_.Term) : Syntax_.Term = {
val parameters = signature.parameters.filter({(_w1) =>
_w1.default.isEmpty
}).map({(p) =>
p.name
});
val body = Syntax_.ECall(at, term, List(), parameters.map({(x) =>
Syntax_.Argument(at, Firefly_Core.Some(x), Syntax_.EVariable(at, x, List(), List()))
}));
val lambda = Syntax_.ELambda(at, Syntax_.Lambda(at, List(Syntax_.MatchCase(at = at, patterns = parameters.map({(_w1) =>
Syntax_.PVariable(at, Firefly_Core.Some(_w1))
}), condition = Firefly_Core.None(), body = body))));
self.inferTerm(environment, expected, lambda)
}

def inferTypeArguments(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], typeArguments : Firefly_Core.List[Syntax_.Type]) : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Type]] = {
Firefly_Core.if_(typeArguments.nonEmpty, {() =>
Firefly_Core.if_((generics.size != typeArguments.size), {() =>
Inference_.fail(at, ((((("Wrong number of type parameters for " + name) + ", expected ") + generics.size) + ", got ") + typeArguments.size))
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
Inference_.fail(at, ("Missing argument: " + p.name))
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
Inference_.fail(at, ("Missing argument: " + p.name))
})
})
});
remainingArguments.headOption.each({
case (Syntax_.Argument(at, Firefly_Core.None(), _)) =>
Inference_.fail(at, "Too many arguments")
case (Syntax_.Argument(at, Firefly_Core.Some(name), _)) =>
Inference_.fail(at, ("Unknown argument: " + name))
});
newArguments
}

}


}
