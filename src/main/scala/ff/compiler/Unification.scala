package ff.compiler
import ff.compiler.Syntax_._

import ff.core.Array_._

import ff.core.ArrayBuilder_._

import ff.core.Bool_._

import ff.core.Char_._

import ff.core.Core_._

import ff.core.FileSystem_._

import ff.core.Int_._

import ff.core.List_._

import ff.core.Log_._

import ff.core.Map_._

import ff.core.Option_._

import ff.core.Pair_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object Unification_ {

case class Unification(var substitution_ : ff.core.Map_.Map[ff.core.Int_.Int, ff.compiler.Syntax_.Type], var constraints_ : ff.core.Map_.Map[ff.core.Int_.Int, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]], var nextTypeVariableIndex_ : ff.core.Int_.Int, instances_ : ff.core.Map_.Map[ff.compiler.Unification_.InstanceKey, ff.compiler.Unification_.InstanceValue])

case class ConstraintGenerics(at_ : ff.compiler.Syntax_.Location, generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type])

case class InstanceKey(traitName_ : ff.core.String_.String, typeName_ : ff.core.String_.String)

case class InstanceValue(generics_ : ff.core.List_.List[ff.core.String_.String], constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint], traitType_ : ff.compiler.Syntax_.Type)

def make_(instances_ : ff.core.List_.List[ff.compiler.Syntax_.DInstance]) : ff.compiler.Unification_.Unification = {
def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_(((message_ + " ") + at_.show_()))
}
ff.compiler.Unification_.Unification(ff.core.Core_.mapOf_(), ff.core.Core_.mapOf_(), 2, instances_.map_({(definition_) =>
pipe_dot(definition_.traitType_)({
case (ff.compiler.Syntax_.TConstructor(at_, name_, List(ff.compiler.Syntax_.TConstructor(_, typeName_, _), __seq @ _*))) =>
val _ = __seq.toList;
ff.core.Pair_.Pair(ff.compiler.Unification_.InstanceKey(name_, typeName_), ff.compiler.Unification_.InstanceValue(generics_ = definition_.generics_, constraints_ = definition_.constraints_, traitType_ = definition_.traitType_))
case (ff.compiler.Syntax_.TConstructor(at_, name_, _)) =>
fail_(at_, (("Instance requires type arguments: " + name_) + "[]"))
case (ff.compiler.Syntax_.TVariable(at_, i_)) =>
fail_(at_, ("Unexpected type variable: $" + i_))
})
}).getMap_())
}
implicit class Unification_extend0(self_ : ff.compiler.Unification_.Unification) {

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_(((message_ + " ") + at_.show_()))
}

def freshTypeVariable_(at_ : ff.compiler.Syntax_.Location) : ff.compiler.Syntax_.Type = {
val result_ = ff.compiler.Syntax_.TVariable(at_, self_.nextTypeVariableIndex_);
self_.nextTypeVariableIndex_ += 2;
result_
}

def instantiate_(instantiation_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type], type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (instantiation_, type_) match {
case (_, ff.compiler.Syntax_.TConstructor(at_, name_, List())) =>
pipe_dot(instantiation_.get_(name_))({
case (ff.core.Option_.Some(t_)) =>
t_
case (ff.core.Option_.None()) =>
type_
})
case (_, ff.compiler.Syntax_.TConstructor(at_, name_, generics_)) =>
ff.compiler.Syntax_.TConstructor(at_, name_, generics_.map_({(_w1) =>
self_.instantiate_(instantiation_, _w1)
}))
case (_, ff.compiler.Syntax_.TVariable(_, i_)) if self_.has_(i_) =>
self_.instantiate_(instantiation_, self_.get_(i_))
case (_, ff.compiler.Syntax_.TVariable(_, i_)) =>
type_
}

def constrain_(at_ : ff.compiler.Syntax_.Location, type_ : ff.compiler.Syntax_.Type, constraintName_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type]) : ff.core.Unit_.Unit = {
pipe_dot(type_)({
case (ff.compiler.Syntax_.TVariable(_, i_)) if self_.has_(i_) =>
self_.constrain_(at_, self_.get_(i_), constraintName_, generics_)
case (ff.compiler.Syntax_.TVariable(_, i_)) =>
pipe_dot(self_.constraints_.get_(i_))({
case (ff.core.Option_.None()) =>
self_.constraints_ = self_.constraints_.add_(i_, List(ff.core.Pair_.Pair(constraintName_, ff.compiler.Unification_.ConstraintGenerics(at_, generics_))).getMap_())
case (ff.core.Option_.Some(map_)) =>
pipe_dot(map_.get_(constraintName_))({
case (ff.core.Option_.None()) =>
val newMap_ = map_.add_(constraintName_, ff.compiler.Unification_.ConstraintGenerics(at_, generics_));
self_.constraints_ = self_.constraints_.add_(i_, newMap_)
case (ff.core.Option_.Some(ff.compiler.Unification_.ConstraintGenerics(_, generics2_))) =>
generics_.zip_(generics2_).each_({
case (ff.core.Pair_.Pair(t1_, t2_)) =>
self_.unify_(at_, t1_, t2_)
})
})
})
case (ff.compiler.Syntax_.TConstructor(_, name_, generics2_)) =>
pipe_dot(self_.instances_.get_(ff.compiler.Unification_.InstanceKey(constraintName_, name_)))({
case (ff.core.Option_.None()) =>
val g1_ = ff.core.Core_.if_(generics_.getEmpty_(), {() =>
""
}).else_({() =>
"[...]"
});
val g2_ = ff.core.Core_.if_(generics2_.getEmpty_(), {() =>
""
}).else_({() =>
"[...]"
});
self_.fail_(at_, ((((("No such instance: " + name_) + g2_) + ": ") + constraintName_) + g1_))
case (ff.core.Option_.Some(definition_)) =>
val typeVariables_ = definition_.generics_.map_({(_) =>
self_.freshTypeVariable_(at_)
});
val instantiation_ = definition_.generics_.zip_(typeVariables_).getMap_();
val traitType1_ = self_.instantiate_(instantiation_, definition_.traitType_);
val traitType2_ = ff.compiler.Syntax_.TConstructor(at_, constraintName_, (List(List(type_), generics_).flatten));
self_.unify_(at_, traitType1_, traitType2_);
definition_.constraints_.each_({(constraint_) =>
pipe_dot(self_.instantiate_(instantiation_, constraint_.representation_))({
case (ff.compiler.Syntax_.TConstructor(_, newConstraintName_, newGenerics_)) =>
self_.constrain_(at_, type_, newConstraintName_, newGenerics_)
case (ff.compiler.Syntax_.TVariable(_, i_)) =>
self_.fail_(at_, ("Constraint can't be a type variable: $" + i_))
})
})
})
})
}

def get_(index_ : ff.core.Int_.Int) : ff.compiler.Syntax_.Type = {
pipe_dot(self_.substitution_.expect_(index_))({
case (ff.compiler.Syntax_.TVariable(_, i_)) if self_.has_(i_) =>
val t_ = self_.get_(i_);
self_.substitution_ = self_.substitution_.add_(index_, t_);
t_
case (t_) =>
t_
})
}

def has_(index_ : ff.core.Int_.Int) : ff.core.Bool_.Bool = {
self_.substitution_.contains_(index_)
}

def substitute_(type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (type_) match {
case (ff.compiler.Syntax_.TVariable(_, i_)) =>
ff.core.Core_.if_(self_.has_(i_), {() =>
self_.substitute_(self_.get_(i_))
}).else_({() =>
type_
})
case (t_ : ff.compiler.Syntax_.TConstructor) =>
t_.copy(generics_ = t_.generics_.map_({(t_) =>
self_.substitute_(t_)
}))
}

def unify_(at_ : ff.compiler.Syntax_.Location, t1_ : ff.compiler.Syntax_.Type, t2_ : ff.compiler.Syntax_.Type) : ff.core.Unit_.Unit = (at_, t1_, t2_) match {
case (_, ff.compiler.Syntax_.TVariable(_, i1_), ff.compiler.Syntax_.TVariable(_, i2_)) if (i1_ == i2_) =>
ff.core.Unit_.Unit()
case (_, ff.compiler.Syntax_.TVariable(_, i_), _) if self_.has_(i_) =>
self_.unify_(at_, self_.get_(i_), t2_)
case (_, _, ff.compiler.Syntax_.TVariable(_, i_)) if self_.has_(i_) =>
self_.unify_(at_, t1_, self_.get_(i_))
case (_, ff.compiler.Syntax_.TVariable(_, i_), _) =>
self_.bind_(at_, i_, t2_)
case (_, _, ff.compiler.Syntax_.TVariable(_, i_)) =>
self_.bind_(at_, i_, t1_)
case (_, ff.compiler.Syntax_.TConstructor(_, name1_, generics1_), ff.compiler.Syntax_.TConstructor(_, name2_, generics2_)) =>
ff.core.Core_.if_(((name1_ != name2_) || (generics1_.getSize_() != generics2_.getSize_())), {() =>
self_.fail_(at_, ((("Type mismatch: " + self_.substitute_(t1_).show_()) + " vs. ") + self_.substitute_(t2_).show_()))
});
generics1_.zip_(generics2_).each_({
case (ff.core.Pair_.Pair(t1_, t2_)) =>
self_.unify_(at_, t1_, t2_)
})
}

def bind_(at_ : ff.compiler.Syntax_.Location, index_ : ff.core.Int_.Int, type_ : ff.compiler.Syntax_.Type) : ff.core.Unit_.Unit = {
ff.core.Core_.if_(self_.occursIn_(index_, type_), {() =>
self_.fail_(at_, ((("Infinite type: $" + index_) + " = ") + self_.substitute_(type_).show_()))
});
self_.substitution_ = self_.substitution_.add_(index_, type_);
self_.constraints_.get_(index_).each_({(map_) =>
self_.constraints_ = self_.constraints_.remove_(index_);
map_.pairs_().each_({
case (ff.core.Pair_.Pair(name_, ff.compiler.Unification_.ConstraintGenerics(at2_, generics_))) =>
self_.constrain_(at2_, type_, name_, generics_)
})
})
}

def occursIn_(index_ : ff.core.Int_.Int, t_ : ff.compiler.Syntax_.Type) : ff.core.Bool_.Bool = (index_, t_) match {
case (_, ff.compiler.Syntax_.TVariable(_, i_)) if self_.has_(i_) =>
self_.occursIn_(index_, self_.get_(i_))
case (_, ff.compiler.Syntax_.TVariable(_, i_)) =>
(i_ == index_)
case (_, ff.compiler.Syntax_.TConstructor(_, _, generics_)) =>
generics_.any_({(t_) =>
self_.occursIn_(index_, t_)
})
}

}


}
