package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._

import firefly.Unification_._
object Inference_ {

case class Inference(unification : Unification_.Unification)

case class Scheme(isVariable : Firefly_Core.Bool, isMutable : Firefly_Core.Bool, signature : Syntax_.Signature)

case class Environment(symbols : Firefly_Core.Map[Firefly_Core.String, Scheme])

def make(instances : Firefly_Core.List[Syntax_.DInstance]) : Inference = {
Inference(unification = Unification_.make(instances))
}

def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}
implicit class Inference_extend0(self : Inference) {

def inferModule(module : Syntax_.Module, otherModules : Firefly_Core.List[Syntax_.Module]) : Syntax_.Module = {
val environment = self.createEnvironment(module, otherModules);
val lets = module.lets.map({(_w1) =>
self.inferLetDefinition(environment, _w1)
});
module.copy(lets = lets)
}

def createEnvironment(module : Syntax_.Module, otherModules : Firefly_Core.List[Syntax_.Module]) : Environment = {
Environment((self.createModuleEnvironment(module, Firefly_Core.True()).symbols ++ otherModules.map({(_w1) =>
self.createModuleEnvironment(_w1, Firefly_Core.False()).symbols
}).fold(Firefly_Core.Map())({(_w1, _w2) =>
(_w1 ++ _w2)
})))
}

def createModuleEnvironment(module : Syntax_.Module, isCurrentModule : Firefly_Core.Bool) : Environment = {
def full(module : Syntax_.Module, name : Firefly_Core.String) : Firefly_Core.String = {
Firefly_Core.if_(isCurrentModule, {() =>
name
}).else_({() =>
((module.file.dropRight(3) + ".") + name)
})
}
Environment((module.functions.map({(d) =>
Firefly_Core.Pair(full(module, d.signature.name), Scheme(Firefly_Core.False(), Firefly_Core.False(), d.signature))
}) ++ module.lets.map({(d) =>
Firefly_Core.Pair(full(module, d.name), Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(d.at, d.name, Firefly_Core.Empty(), Firefly_Core.Empty(), Firefly_Core.Empty(), d.variableType)))
})).toMap)
}

def inferLetDefinition(environment : Environment, definition : Syntax_.DLet) : Syntax_.DLet = {
val value = self.inferTerm(environment, definition.variableType, definition.value);
definition.copy(value = value)
}

def inferTerm(environment : Environment, expected : Syntax_.Type, term : Syntax_.Term) : Syntax_.Term = {
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
