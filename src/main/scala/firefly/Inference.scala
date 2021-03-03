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
implicit class Inference_extend0(self : Inference) {

def inferModule(module : Syntax_.Module, otherModules : Firefly_Core.List[Syntax_.Module]) : Syntax_.Module = {
val environment = Environment_.make(module, otherModules);
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
val scheme = Environment_.Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(p.at, p.name, Firefly_Core.Empty(), Firefly_Core.Empty(), Firefly_Core.Empty(), p.valueType));
Firefly_Core.Pair(p.name, scheme)
});
val environment2 = environment.copy(symbols = (environment.symbols ++ parameters));
definition
}

def inferTerm(environment : Environment_.Environment, expected : Syntax_.Type, term : Syntax_.Term) : Syntax_.Term = {
def core(name : Firefly_Core.String) : Firefly_Core.String = {
("ff:core/Core." + name)
}
def literal(coreTypeName : Firefly_Core.String) : Syntax_.Term = {
self.unification.unify(term.at, expected, Syntax_.TConstructor(term.at, core(coreTypeName), Firefly_Core.Empty()));
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
Syntax_.EList(at, t, items.map({(_w1) =>
self.inferTerm(environment, t, _w1)
}))
case (Syntax_.ESequential(at, before, after)) =>
Syntax_.ESequential(at = at, before = self.inferTerm(environment, self.unification.freshTypeVariable(at), before), after = self.inferTerm(environment, expected, after))
case (e : Syntax_.ELet) =>
val scheme = Environment_.Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(e.at, e.name, Firefly_Core.Empty(), Firefly_Core.Empty(), Firefly_Core.Empty(), e.valueType));
val environment2 = environment.copy(symbols = (environment.symbols + Firefly_Core.Pair(e.name, scheme)));
e.copy(value = self.inferTerm(environment, e.valueType, e.value), body = self.inferTerm(environment2, expected, e.body))
case (_) =>
term
})
}

}


}
