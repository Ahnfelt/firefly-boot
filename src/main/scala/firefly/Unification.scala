package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Unification_ {

case class Unification(var substitution : Firefly_Core.Map[Firefly_Core.Int, Syntax_.Type], var constraints : Firefly_Core.Map[Firefly_Core.Int, Firefly_Core.Map[Firefly_Core.String, Unification_.ConstraintGenerics]], var nextTypeVariableIndex : Firefly_Core.Int, instances : Firefly_Core.Map[Unification_.InstanceKey, Unification_.InstanceValue])

case class ConstraintGenerics(at : Syntax_.Location, generics : Firefly_Core.List[Syntax_.Type])

case class InstanceKey(traitName : Firefly_Core.String, typeName : Firefly_Core.String)

case class InstanceValue(generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Syntax_.Constraint], traitType : Syntax_.Type)

def make(instances : Firefly_Core.List[Syntax_.DInstance]) : Unification_.Unification = {
def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show()))
}
Unification_.Unification(Firefly_Core.Map(), Firefly_Core.Map(), 2, instances.map({(definition) =>
pipe_dot(definition.traitType)({
case (Syntax_.TConstructor(at, name, List(Syntax_.TConstructor(_, typeName, _), _ @ _*))) =>
Firefly_Core.Pair(Unification_.InstanceKey(name, typeName), Unification_.InstanceValue(generics = definition.generics, constraints = definition.constraints, traitType = definition.traitType))
case (Syntax_.TConstructor(at, name, _)) =>
fail(at, (("Instance requires type arguments: " + name) + "[]"))
case (Syntax_.TVariable(at, i)) =>
fail(at, ("Unexpected type variable: $" + i))
})
}).toMap)
}
implicit class Unification_extend0(self : Unification_.Unification) {

def fail[T](at : Syntax_.Location, message : Firefly_Core.String) : T = {
Firefly_Core.panic(((message + " ") + at.show()))
}

def freshTypeVariable(at : Syntax_.Location) : Syntax_.Type = {
val result = Syntax_.TVariable(at, self.nextTypeVariableIndex);
self.nextTypeVariableIndex += 2;
result
}

def instantiate(instantiation : Firefly_Core.Map[Firefly_Core.String, Syntax_.Type], type_ : Syntax_.Type) : Syntax_.Type = (instantiation, type_) match {
case (_, Syntax_.TConstructor(at, name, List())) =>
pipe_dot(instantiation.get(name))({
case (Firefly_Core.Some(t)) =>
t
case (Firefly_Core.None()) =>
type_
})
case (_, Syntax_.TConstructor(at, name, generics)) =>
Syntax_.TConstructor(at, name, generics.map({(_w1) =>
self.instantiate(instantiation, _w1)
}))
case (_, Syntax_.TVariable(_, i)) if self.has(i) =>
self.instantiate(instantiation, self.get(i))
case (_, Syntax_.TVariable(_, i)) =>
type_
}

def constrain(at : Syntax_.Location, type_ : Syntax_.Type, constraintName : Firefly_Core.String, generics : Firefly_Core.List[Syntax_.Type]) : Firefly_Core.Unit = {
pipe_dot(type_)({
case (Syntax_.TVariable(_, i)) if self.has(i) =>
self.constrain(at, self.get(i), constraintName, generics)
case (Syntax_.TVariable(_, i)) =>
pipe_dot(self.constraints.get(i))({
case (Firefly_Core.None()) =>
self.constraints += Firefly_Core.Pair(i, Firefly_Core.Map(Firefly_Core.Pair(constraintName, Unification_.ConstraintGenerics(at, generics))))
case (Firefly_Core.Some(map)) =>
pipe_dot(map.get(constraintName))({
case (Firefly_Core.None()) =>
val newMap = map.updated(constraintName, Unification_.ConstraintGenerics(at, generics));
self.constraints = self.constraints.updated(i, newMap)
case (Firefly_Core.Some(Unification_.ConstraintGenerics(_, generics2))) =>
generics.zip(generics2).each({
case (Firefly_Core.Pair(t1, t2)) =>
self.unify(at, t1, t2)
})
})
})
case (Syntax_.TConstructor(_, name, generics2)) =>
pipe_dot(self.instances.get(Unification_.InstanceKey(constraintName, name)))({
case (Firefly_Core.None()) =>
val g1 = Firefly_Core.if_(generics.getEmpty(), {() =>
""
}).else_({() =>
"[...]"
});
val g2 = Firefly_Core.if_(generics2.getEmpty(), {() =>
""
}).else_({() =>
"[...]"
});
self.fail(at, ((((("No such instance: " + name) + g2) + ": ") + constraintName) + g1))
case (Firefly_Core.Some(definition)) =>
val typeVariables = definition.generics.map({(_) =>
self.freshTypeVariable(at)
});
val instantiation = definition.generics.zip(typeVariables).toMap;
val traitType1 = self.instantiate(instantiation, definition.traitType);
val traitType2 = Syntax_.TConstructor(at, constraintName, (List(List(type_), generics).flatten));
self.unify(at, traitType1, traitType2);
definition.constraints.each({(constraint) =>
pipe_dot(self.instantiate(instantiation, constraint.representation))({
case (Syntax_.TConstructor(_, newConstraintName, newGenerics)) =>
self.constrain(at, type_, newConstraintName, newGenerics)
case (Syntax_.TVariable(_, i)) =>
self.fail(at, ("Constraint can't be a type variable: $" + i))
})
})
})
})
}

def get(index : Firefly_Core.Int) : Syntax_.Type = {
pipe_dot(self.substitution(index))({
case (Syntax_.TVariable(_, i)) if self.has(i) =>
val t = self.get(i);
self.substitution += Firefly_Core.Pair(index, t);
t
case (t) =>
t
})
}

def has(index : Firefly_Core.Int) : Firefly_Core.Bool = {
self.substitution.contains(index)
}

def substitute(type_ : Syntax_.Type) : Syntax_.Type = (type_) match {
case (Syntax_.TVariable(_, i)) =>
Firefly_Core.if_(self.has(i), {() =>
self.substitute(self.get(i))
}).else_({() =>
type_
})
case (t : Syntax_.TConstructor) =>
t.copy(generics = t.generics.map({(t) =>
self.substitute(t)
}))
}

def unify(at : Syntax_.Location, t1 : Syntax_.Type, t2 : Syntax_.Type) : Firefly_Core.Unit = (at, t1, t2) match {
case (_, Syntax_.TVariable(_, i1), Syntax_.TVariable(_, i2)) if (i1 == i2) =>
Firefly_Core.Unit()
case (_, Syntax_.TVariable(_, i), _) if self.has(i) =>
self.unify(at, self.get(i), t2)
case (_, _, Syntax_.TVariable(_, i)) if self.has(i) =>
self.unify(at, t1, self.get(i))
case (_, Syntax_.TVariable(_, i), _) =>
self.bind(at, i, t2)
case (_, _, Syntax_.TVariable(_, i)) =>
self.bind(at, i, t1)
case (_, Syntax_.TConstructor(_, name1, generics1), Syntax_.TConstructor(_, name2, generics2)) =>
Firefly_Core.if_(((name1 != name2) || (generics1.getSize() != generics2.getSize())), {() =>
self.fail(at, ((("Type mismatch: " + self.substitute(t1).show()) + " vs. ") + self.substitute(t2).show()))
});
generics1.zip(generics2).each({
case (Firefly_Core.Pair(t1, t2)) =>
self.unify(at, t1, t2)
})
}

def bind(at : Syntax_.Location, index : Firefly_Core.Int, type_ : Syntax_.Type) : Firefly_Core.Unit = {
Firefly_Core.if_(self.occursIn(index, type_), {() =>
self.fail(at, ((("Infinite type: $" + index) + " = ") + self.substitute(type_).show()))
});
self.substitution += Firefly_Core.Pair(index, type_);
self.constraints.get(index).each({(map) =>
self.constraints -= index;
map.pairs().each({
case (Firefly_Core.Pair(name, Unification_.ConstraintGenerics(at2, generics))) =>
self.constrain(at2, type_, name, generics)
})
})
}

def occursIn(index : Firefly_Core.Int, t : Syntax_.Type) : Firefly_Core.Bool = (index, t) match {
case (_, Syntax_.TVariable(_, i)) if self.has(i) =>
self.occursIn(index, self.get(i))
case (_, Syntax_.TVariable(_, i)) =>
(i == index)
case (_, Syntax_.TConstructor(_, _, generics)) =>
generics.any({(t) =>
self.occursIn(index, t)
})
}

}


}
