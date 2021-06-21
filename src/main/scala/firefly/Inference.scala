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
val extends_ = module.extends_.map({(_w1) =>
self.inferExtendDefinition(environment, _w1)
});
module.copy(extends_ = extends_, lets = lets, functions = functions)
}

def inferLetDefinition(environment : Environment_.Environment, definition : Syntax_.DLet) : Syntax_.DLet = {
val value = self.inferTerm(environment, definition.variableType, definition.value);
definition.copy(value = value)
}

def inferExtendDefinition(environment : Environment_.Environment, definition : Syntax_.DExtend) : Syntax_.DExtend = {
val selfParameter = Syntax_.Parameter(at = definition.at, mutable = Firefly_Core.False(), name = definition.name, valueType = definition.type_, default = Firefly_Core.None());
val functions = definition.methods.map({(method) =>
val signature = method.signature.copy(generics = (definition.generics ++ method.signature.generics), constraints = (definition.constraints ++ method.signature.constraints), parameters = (List(List(selfParameter), method.signature.parameters).flatten));
val lambda = method.body.copy(cases = method.body.cases.map({(case_) =>
val selfPattern = Syntax_.PVariable(method.at, Firefly_Core.Some(definition.name));
case_.copy(patterns = (List(List(selfPattern), case_.patterns).flatten))
}));
val function = method.copy(signature = signature, body = lambda);
self.inferFunctionDefinition(environment, function)
});
definition.copy(methods = functions)
}

def inferFunctionDefinition(environment : Environment_.Environment, definition : Syntax_.DFunction) : Syntax_.DFunction = {
val parameters = definition.signature.parameters.map({(p) =>
val scheme = Environment_.Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(p.at, p.name, List(), List(), List(), p.valueType));
Firefly_Core.Pair(p.name, scheme)
});
val parameterMap = parameters.getMap();
val environment2 = environment.copy(symbols = (environment.symbols ++ parameterMap));
val functionType = Syntax_.TConstructor(definition.at, ("Function$" + parameters.getSize()), (List(parameters.map({(_w1) =>
_w1.second.signature.returnType
}), List(definition.signature.returnType)).flatten));
definition.copy(body = self.inferLambda(environment2, functionType, definition.body))
}

def inferLambda(environment : Environment_.Environment, expected : Syntax_.Type, lambda : Syntax_.Lambda) : Syntax_.Lambda = {
val unitName = "ff:core/Core.Unit";
val returnsUnit = pipe_dot(self.unification.substitute(expected))({
case (Syntax_.TConstructor(_, name, ts)) if name.startsWith("Function$") =>
pipe_dot(ts.expectLast())({
case (Syntax_.TConstructor(_, n, List())) =>
(n == unitName)
case (_) =>
Firefly_Core.False()
})
case (_) =>
Firefly_Core.False()
});
val cases = Firefly_Core.if_((!returnsUnit), {() =>
lambda.cases
}).else_({() =>
lambda.cases.map({(c) =>
c.copy(body = Syntax_.ESequential(c.at, c.body, Syntax_.EVariant(c.at, unitName, List(), Firefly_Core.None())))
})
});
lambda.copy(cases = cases.map({(_w1) =>
self.inferMatchCase(environment, expected, _w1)
}))
}

def inferMatchCase(environment : Environment_.Environment, expected : Syntax_.Type, case_ : Syntax_.MatchCase) : Syntax_.MatchCase = {
val parameterTypes = case_.patterns.map({(_w1) =>
self.unification.freshTypeVariable(_w1.at)
});
val returnType = self.unification.freshTypeVariable(case_.at);
val functionType = Syntax_.TConstructor(case_.at, ("Function$" + case_.patterns.getSize()), (List(parameterTypes, List(returnType)).flatten));
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
List(Firefly_Core.Pair(name, expected)).getMap()
case (Syntax_.PAlias(at, pattern, variable)) =>
self.inferPattern(environment, expected, pattern).add(variable, expected)
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
val instantiated = self.lookup(environment, at, name, List()).else_({() =>
Inference_.fail(at, ("No such variant: " + name))
});
Firefly_Core.Map()
case (Syntax_.PVariantAs(at, name, Firefly_Core.Some(variable))) =>
val instantiated = self.lookup(environment, at, name, List()).else_({() =>
Inference_.fail(at, ("No such variant: " + name))
});
self.unification.unify(at, expected, instantiated.scheme.signature.returnType);
val parameters = instantiated.scheme.signature.parameters.sortBy({(_w1) =>
_w1.name
});
val recordType = Syntax_.TConstructor(at, ("Record$" + parameters.map({(_w1) =>
_w1.name
}).join("$")), parameters.map({(_w1) =>
_w1.valueType
}));
List(Firefly_Core.Pair(variable, recordType)).getMap()
case (Syntax_.PVariant(at, name, patterns)) =>
val instantiated = self.lookup(environment, at, name, List()).else_({() =>
Inference_.fail(at, ("No such variant: " + name))
});
self.unification.unify(at, expected, instantiated.scheme.signature.returnType);
patterns.zip(instantiated.scheme.signature.parameters).map({
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
self.lookup(environment, e.at, e.name, e.generics).map({(instantiated) =>
Firefly_Core.if_(instantiated.scheme.isVariable, {() =>
self.unification.unify(e.at, expected, instantiated.scheme.signature.returnType);
term
}).else_({() =>
self.inferEtaExpansion(environment, expected, e.at, instantiated.scheme.signature, term)
})
}).else_({() =>
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
})
case (e : Syntax_.EField) =>
val recordType = self.unification.freshTypeVariable(e.at);
val record = self.inferTerm(environment, recordType, e.record);
val e2 = e.copy(record = record);
pipe_dot(self.unification.substitute(recordType))({
case (t @ (Syntax_.TConstructor(_, name, typeArguments))) if name.startsWith("Record$") =>
val fieldNames = name.split('$').getList().drop(1);
fieldNames.pairs().find({(_w1) =>
(_w1.second == e.field)
}).map({(_w1) =>
_w1.first
}).map({(index) =>
val t1 = typeArguments.expect(index);
self.unification.unify(e.at, expected, t1);
e2
}).else_({() =>
Inference_.fail(e.at, ((("No such field " + e.field) + " on type: ") + t.show()))
})
case (t @ (Syntax_.TConstructor(_, name, typeArguments))) =>
val methodName = ((name + "_") + e.field);
pipe_dot(self.lookup(environment, e.at, methodName, typeArguments))({
case (Firefly_Core.Some(instantiated)) if (!instantiated.scheme.isVariable) =>
val signature = instantiated.scheme.signature.copy(parameters = instantiated.scheme.signature.parameters.drop(1));
self.unification.unify(e.at, recordType, instantiated.scheme.signature.parameters.expect(0).valueType);
self.inferEtaExpansion(environment, expected, e.at, signature, e2)
case (Firefly_Core.Some(instantiated)) =>
self.unification.unify(e.at, expected, instantiated.scheme.signature.returnType);
e.copy(record = record)
case (Firefly_Core.None()) =>
Inference_.fail(e.at, ((("No such field " + e.field) + " on type: ") + t.show()))
})
case (Syntax_.TVariable(_, index)) =>
Inference_.fail(e.at, ((("No such field " + e.field) + " on unknown type: $") + index))
})
case (e : Syntax_.EWildcard) =>
self.lookup(environment, e.at, ("_w" + e.index), List()).map({(instantiated) =>
self.unification.unify(e.at, expected, instantiated.scheme.signature.returnType);
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
val instantiated = self.lookup(environment, e.at, e.name, e.typeArguments).else_({() =>
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
});
self.unification.unify(e.at, expected, instantiated.scheme.signature.returnType);
val arguments = e.arguments.map({(_w1) =>
self.inferArguments(e.at, environment, instantiated.scheme.signature.parameters, _w1)
});
e.copy(typeArguments = instantiated.typeArguments.map({(_w1) =>
_w1.second
}), arguments = arguments)
case (e : Syntax_.EVariantIs) =>
val instantiated = self.lookup(environment, e.at, e.name, e.typeArguments).else_({() =>
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
});
val parameters = instantiated.scheme.signature.parameters.sortBy({(_w1) =>
_w1.name
});
val recordType = Syntax_.TConstructor(e.at, ("Record$" + parameters.map({(_w1) =>
_w1.name
}).join("$")), parameters.map({(_w1) =>
_w1.valueType
}));
val functionType = Syntax_.TConstructor(e.at, "Function$1", List(instantiated.scheme.signature.returnType, Syntax_.TConstructor(e.at, "ff:core/Core.Option", List(recordType))));
self.unification.unify(e.at, expected, functionType);
e.copy(typeArguments = instantiated.typeArguments.map({(_w1) =>
_w1.second
}))
case (e : Syntax_.ECopy) =>
val signature = self.lookup(environment, e.at, e.name, List()).else_({() =>
Inference_.fail(e.at, ("Symbol not in scope: " + e.name))
}).scheme.signature;
val parameterNames = signature.parameters.map({(_w1) =>
_w1.name
});
e.arguments.find({(a) =>
(!parameterNames.exists({(_w1) =>
(_w1 == a.name)
}))
}).each({
case (Syntax_.Field(at, name, value)) =>
Inference_.fail(at, ("Unknown parameter: " + name))
});
val arguments = parameterNames.map({(name) =>
e.arguments.find({(_w1) =>
(_w1.name == name)
}).map({
case (Syntax_.Field(at, _, value)) =>
Syntax_.Argument(at, Firefly_Core.Some(name), value)
}).else_({() =>
Syntax_.Argument(e.at, Firefly_Core.Some(name), Syntax_.EField(e.at, Syntax_.EVariable(e.at, "_c", List(), List()), name))
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
Firefly_Core.if_(x.first().exists({(c) =>
((c != '_') && (!c.isLetter))
}), {() =>
self.inferOperator(environment, expected, x, e)
}).else_({() =>
pipe_dot(self.lookup(environment, e.at, x, e.typeArguments))({
case (Firefly_Core.Some(instantiated)) =>
Firefly_Core.if_(instantiated.scheme.isVariable, {() =>
self.inferLambdaCall(environment, expected, e)
}).else_({() =>
val signature = instantiated.scheme.signature;
self.inferFunctionCall(environment, expected, signature, instantiated.typeArguments, e, x)
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
case (t @ (Syntax_.TConstructor(_, name, typeParameters))) =>
val methodName = ((name + "_") + f.field);
pipe_dot(self.lookup(environment, f.at, methodName, List()))({
case (Firefly_Core.Some(instantiated)) if (!instantiated.scheme.isVariable) =>
self.inferMethodCall(environment, expected, instantiated.scheme.signature, instantiated.typeArguments, e2, record, methodName)
case (Firefly_Core.Some(instantiated)) =>
self.inferLambdaCall(environment, expected, e2)
case (Firefly_Core.None()) =>
Inference_.fail(f.at, ((("No such field " + f.field) + " on type: ") + t.show()))
})
case (Syntax_.TVariable(_, index)) =>
Inference_.fail(f.at, ((("No such field " + f.field) + " on unknown type: $") + index))
})
case (_) =>
self.inferLambdaCall(environment, expected, e)
})
case (e : Syntax_.ERecord) =>
val fields = e.fields.sortBy({(_w1) =>
_w1.name
});
val fieldTypes = fields.map({(_w1) =>
self.unification.freshTypeVariable(_w1.at)
});
val recordType = Syntax_.TConstructor(e.at, ("Record$" + fields.map({(_w1) =>
_w1.name
}).join("$")), fieldTypes);
self.unification.unify(e.at, expected, recordType);
val newFields = fields.zip(fieldTypes).map({
case (Firefly_Core.Pair(field, t)) =>
field.copy(value = self.inferTerm(environment, t, field.value))
});
e.copy(fields = newFields)
case (Syntax_.EFunctions(at, functions, body)) =>
val functionMap = functions.map({(f) =>
val scheme = Environment_.Scheme(Firefly_Core.False(), Firefly_Core.False(), f.signature);
Firefly_Core.Pair(f.signature.name, scheme)
}).getMap();
val environment2 = environment.copy(symbols = (environment.symbols ++ functionMap));
val newFunctions = functions.map({(_w1) =>
self.inferFunctionDefinition(environment2, _w1)
});
val newBody = self.inferTerm(environment2, expected, body);
Syntax_.EFunctions(at = at, functions = newFunctions, body = newBody)
case (_) =>
term
})
}

def inferMethodCall(environment : Environment_.Environment, expected : Syntax_.Type, signature : Syntax_.Signature, instantiation : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Type]], term : Syntax_.Term, record : Syntax_.Term, name : Firefly_Core.String) : Syntax_.Term = {
val e = pipe_dot(term)({
case (e : Syntax_.ECall) =>
e
case (_) =>
Inference_.fail(term.at, "Call expected")
});
val e2 = e.copy(function = Syntax_.EVariable(e.at, name, List(), List()), arguments = (List(List(Syntax_.Argument(record.at, Firefly_Core.None(), record)), e.arguments).flatten));
self.inferFunctionCall(environment, expected, signature, instantiation, e2, name)
}

def inferFunctionCall(environment : Environment_.Environment, expected : Syntax_.Type, signature : Syntax_.Signature, instantiation : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Type]], term : Syntax_.Term, name : Firefly_Core.String) : Syntax_.Term = {
val e = pipe_dot(term)({
case (e : Syntax_.ECall) =>
e
case (_) =>
Inference_.fail(term.at, "Call expected")
});
self.unification.unify(e.at, expected, signature.returnType);
val arguments = self.inferArguments(e.at, environment, signature.parameters, e.arguments);
e.copy(function = e.function, typeArguments = instantiation.map({(_w1) =>
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
val argumentTypes = e.arguments.map({(_w1) =>
self.unification.freshTypeVariable(_w1.at)
});
val functionType = Syntax_.TConstructor(e.at, ("Function$" + e.arguments.getSize()), (List(argumentTypes, List(expected)).flatten));
val function = self.inferTerm(environment, functionType, e.function);
val arguments = e.arguments.zip(argumentTypes).map({
case (Firefly_Core.Pair(argument, t)) =>
argument.name.each({(name) =>
Inference_.fail(argument.at, ("Named argument not allowed here: " + name))
});
argument.copy(value = self.inferTerm(environment, t, argument.value))
});
e.typeArguments.first().each({(typeArgument) =>
Inference_.fail(typeArgument.at, "Type arguments not allowed here")
});
e.copy(function = function, typeArguments = List(), arguments = arguments)
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
val t = self.unification.freshTypeVariable(e.at);
val e1 = self.inferTerm(environment, t, a1.value);
val e2 = self.inferTerm(environment, t, a2.value);
self.unification.unify(e.at, expected, t);
val name = pipe_dot(self.unification.substitute(t))({
case (Syntax_.TConstructor(_, name, _)) =>
name
case (_) =>
Inference_.fail(e.at, "Operators on unknown types not currently supported")
});
Firefly_Core.if_(((((name != Inference_.core("List")) && (name != Inference_.core("Array"))) && (name != Inference_.core("Set"))) && (name != Inference_.core("Map"))), {() =>
Inference_.fail(e.at, ("Operator ++ not currently supported for " + name))
});
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
case (_, _) if ((operator == "==") || (operator == "!=")) =>
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
_w1.default.getEmpty()
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

def inferArguments(at : Syntax_.Location, environment : Environment_.Environment, parameters : Firefly_Core.List[Syntax_.Parameter], arguments : Firefly_Core.List[Syntax_.Argument]) : Firefly_Core.List[Syntax_.Argument] = {
var remainingArguments = arguments;
val newArguments = parameters.map({(p) =>
val t = p.valueType;
def defaultArgument() : Syntax_.Argument = {
p.default.map({(e) =>
val e2 = self.inferTerm(environment, t, e);
Syntax_.Argument(at, Firefly_Core.Some(p.name), e2)
}).else_({() =>
Inference_.fail(at, ("Missing argument: " + p.name))
})
}
pipe_dot(remainingArguments)({
case (List()) =>
defaultArgument()
case (List(Syntax_.Argument(at, Firefly_Core.None(), e), remaining_seq @ _*)) =>
val remaining = remaining_seq.toList;
remainingArguments = remaining;
val e2 = self.inferTerm(environment, t, e);
Syntax_.Argument(at, Firefly_Core.Some(p.name), e2)
case (_) =>
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
defaultArgument()
})
})
});
remainingArguments.first().each({
case (Syntax_.Argument(at, Firefly_Core.None(), _)) =>
Inference_.fail(at, "Too many arguments")
case (Syntax_.Argument(at, Firefly_Core.Some(name), _)) =>
Inference_.fail(at, ("Unknown argument: " + name))
});
newArguments
}

def lookup(environment : Environment_.Environment, at : Syntax_.Location, symbol : Firefly_Core.String, typeArguments : Firefly_Core.List[Syntax_.Type]) : Firefly_Core.Option[Environment_.Instantiated] = {
environment.symbols.get(symbol).map({(scheme) =>
val instantiation = Firefly_Core.if_((!typeArguments.getEmpty()), {() =>
Firefly_Core.if_((scheme.signature.generics.getSize() != typeArguments.getSize()), {() =>
Inference_.fail(at, ((((("Wrong number of type parameters for " + symbol) + ", expected ") + scheme.signature.generics.getSize()) + ", got ") + typeArguments.getSize()))
});
scheme.signature.generics.zip(typeArguments)
}).else_({() =>
scheme.signature.generics.map({(name) =>
Firefly_Core.Pair(name, self.unification.freshTypeVariable(at))
})
});
val instantiationMap = instantiation.getMap();
val parameters = scheme.signature.parameters.map({(p) =>
p.copy(valueType = self.unification.instantiate(instantiationMap, p.valueType))
});
val returnType = self.unification.instantiate(instantiationMap, scheme.signature.returnType);
val signature = scheme.signature.copy(generics = List(), constraints = List(), parameters = parameters, returnType = returnType);
Environment_.Instantiated(typeArguments = instantiation, scheme = scheme.copy(signature = signature))
})
}

}


}
