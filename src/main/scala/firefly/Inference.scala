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
Firefly_Core.log.debug(environment);
val lets = module.lets.map({(_w1) =>
self.inferLetDefinition(environment, _w1)
});
module.copy(lets = lets)
}

def inferLetDefinition(environment : Environment_.Environment, definition : Syntax_.DLet) : Syntax_.DLet = {
val value = self.inferTerm(environment, definition.variableType, definition.value);
definition.copy(value = value)
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
term
})
}).else_({() =>
fail(e.at, ("Symbol not in scope: " + e.name))
})
case (_) =>
term
})
}

}


}
