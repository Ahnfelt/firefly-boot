package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Environment_ {

case class Environment(symbols : Firefly_Core.Map[Firefly_Core.String, Scheme])

case class Scheme(isVariable : Firefly_Core.Bool, isMutable : Firefly_Core.Bool, signature : Syntax_.Signature)

def make(coreModule : Syntax_.Module, module : Syntax_.Module, otherModules : Firefly_Core.List[Syntax_.Module]) : Environment = {
Environment(((processModule(coreModule, Firefly_Core.False(), Firefly_Core.True()).symbols ++ processModule(module, Firefly_Core.True(), Firefly_Core.False()).symbols) ++ otherModules.map({(_w1) =>
processModule(_w1, Firefly_Core.False(), Firefly_Core.False()).symbols
}).fold(Firefly_Core.Map())({(_w1, _w2) =>
(_w1 ++ _w2)
})))
}

def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}

def processModule(module : Syntax_.Module, isCurrentModule : Firefly_Core.Bool, isCoreModule : Firefly_Core.Bool) : Environment = {
def full(module : Syntax_.Module, name : Firefly_Core.String) : Firefly_Core.String = {
Firefly_Core.if_(isCurrentModule, {() =>
name
}).else_({() =>
((module.file.dropRight(3) + ".") + name)
})
}
val functions = module.functions.map({(d) =>
Firefly_Core.Pair(full(module, d.signature.name), Scheme(Firefly_Core.False(), Firefly_Core.False(), d.signature))
});
val lets = module.lets.map({(d) =>
Firefly_Core.Pair(full(module, d.name), Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(d.at, d.name, List(), List(), List(), d.variableType)))
});
val extends_ = module.extends_.flatMap({(d) =>
pipe_dot(d.type_)({
case (t : Syntax_.TVariable) =>
fail(t.at, ("Unexpected type variable: $" + t.index))
case (t : Syntax_.TConstructor) =>
val prefix = (t.name + "_");
val selfParameter = Syntax_.Parameter(d.at, Firefly_Core.False(), d.name, d.type_, Firefly_Core.None());
d.methods.map({(method) =>
Firefly_Core.Pair(full(module, (prefix + method.signature.name)), Scheme(Firefly_Core.False(), Firefly_Core.False(), method.signature.copy(generics = (d.generics ++ method.signature.generics), constraints = (d.constraints ++ method.signature.constraints), parameters = (List(List(selfParameter), method.signature.parameters).flatten))))
})
})
});
val variants = module.types.flatMap({(d) =>
val returnType = Syntax_.TConstructor(d.at, full(module, d.name), d.generics.map({(typeParameter) =>
Syntax_.TConstructor(d.at, typeParameter, List())
}));
d.variants.map({(variant) =>
Firefly_Core.Pair(full(module, variant.name), Scheme(Firefly_Core.False(), Firefly_Core.False(), Syntax_.Signature(variant.at, variant.name, generics = d.generics, constraints = d.constraints, parameters = (d.commonFields ++ variant.fields), returnType = returnType)))
})
});
Environment((((functions ++ lets) ++ extends_) ++ variants).toMap)
}



}
