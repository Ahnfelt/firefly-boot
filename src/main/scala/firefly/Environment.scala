package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Environment_ {

case class Environment(symbols : Firefly_Core.Map[Firefly_Core.String, Environment_.Scheme])

case class Scheme(isVariable : Firefly_Core.Bool, isMutable : Firefly_Core.Bool, signature : Syntax_.Signature)

case class Instantiated(typeArguments : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Type]], scheme : Environment_.Scheme)

def make(coreModule : Syntax_.Module, module : Syntax_.Module, otherModules : Firefly_Core.List[Syntax_.Module]) : Environment_.Environment = {
Environment_.Environment(((Environment_.processModule(coreModule, Firefly_Core.False(), Firefly_Core.True()).symbols ++ Environment_.processModule(module, Firefly_Core.True(), Firefly_Core.False()).symbols) ++ otherModules.map({(_w1) =>
Environment_.processModule(_w1, Firefly_Core.False(), Firefly_Core.False()).symbols
}).fold(Firefly_Core.Map())({(_w1, _w2) =>
(_w1 ++ _w2)
})))
}

def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show))
}

def processModule(module : Syntax_.Module, isCurrentModule : Firefly_Core.Bool, isCoreModule : Firefly_Core.Bool) : Environment_.Environment = {
def full(module : Syntax_.Module, name : Firefly_Core.String) : Firefly_Core.String = {
((module.file.dropRight(3) + ".") + name)
}
val functions = module.functions.map({(d) =>
Firefly_Core.Pair(full(module, d.signature.name), Environment_.Scheme(Firefly_Core.False(), Firefly_Core.False(), d.signature))
});
val lets = module.lets.map({(d) =>
Firefly_Core.Pair(full(module, d.name), Environment_.Scheme(Firefly_Core.True(), Firefly_Core.False(), Syntax_.Signature(d.at, d.name, List(), List(), List(), d.variableType)))
});
val extends_ = module.extends_.flatMap({(d) =>
pipe_dot(d.type_)({
case (t : Syntax_.TVariable) =>
Environment_.fail(t.at, ("Unexpected type variable: $" + t.index))
case (t : Syntax_.TConstructor) =>
val prefix = (t.name + "_");
val selfParameter = Syntax_.Parameter(d.at, Firefly_Core.False(), d.name, d.type_, Firefly_Core.None());
d.methods.map({(method) =>
Firefly_Core.Pair((prefix + method.signature.name), Environment_.Scheme(Firefly_Core.False(), Firefly_Core.False(), method.signature.copy(generics = (d.generics ++ method.signature.generics), constraints = (d.constraints ++ method.signature.constraints), parameters = (List(List(selfParameter), method.signature.parameters).flatten))))
})
})
});
val fields = module.types.flatMap({(d) =>
val prefix = (d.name + "_");
val t = Syntax_.TConstructor(d.at, d.name, d.generics.map({(g) =>
Syntax_.TConstructor(d.at, g, List())
}));
val selfParameter = Syntax_.Parameter(d.at, Firefly_Core.False(), d.name, t, Firefly_Core.None());
d.commonFields.map({(f) =>
Firefly_Core.Pair(full(module, (prefix + f.name)), Environment_.Scheme(Firefly_Core.True(), f.mutable, Syntax_.Signature(at = f.at, name = f.name, generics = d.generics, constraints = d.constraints, parameters = List(selfParameter), returnType = f.valueType)))
})
});
val variants = module.types.flatMap({(d) =>
val returnType = Syntax_.TConstructor(d.at, full(module, d.name), d.generics.map({(typeParameter) =>
Syntax_.TConstructor(d.at, typeParameter, List())
}));
d.variants.map({(variant) =>
Firefly_Core.Pair(full(module, variant.name), Environment_.Scheme(Firefly_Core.False(), Firefly_Core.False(), Syntax_.Signature(variant.at, variant.name, generics = d.generics, constraints = d.constraints, parameters = (d.commonFields ++ variant.fields), returnType = returnType)))
})
});
Environment_.Environment(((((functions ++ lets) ++ fields) ++ extends_) ++ variants).toMap)
}



}
