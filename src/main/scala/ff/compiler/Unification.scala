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

import ff.core.Nothing_._

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
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}
ff.compiler.Unification_.Unification(substitution_ = ff.core.Map_.empty_[ff.core.Int_.Int, ff.compiler.Syntax_.Type](), constraints_ = ff.core.Map_.empty_[ff.core.Int_.Int, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](), nextTypeVariableIndex_ = 2, instances_ = ff.core.List_.List_toMap[ff.compiler.Unification_.InstanceKey, ff.compiler.Unification_.InstanceValue](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DInstance, ff.core.Pair_.Pair[ff.compiler.Unification_.InstanceKey, ff.compiler.Unification_.InstanceValue]](self_ = instances_, body_ = {(definition_) =>
pipe_dot(definition_.traitType_)({
case (ff.compiler.Syntax_.TConstructor(at_, name_, List(ff.compiler.Syntax_.TConstructor(_, typeName_, _), __seq @ _*))) =>
val _ = __seq.toList;
ff.core.Pair_.Pair[ff.compiler.Unification_.InstanceKey, ff.compiler.Unification_.InstanceValue](first_ = ff.compiler.Unification_.InstanceKey(traitName_ = name_, typeName_ = typeName_), second_ = ff.compiler.Unification_.InstanceValue(generics_ = definition_.generics_, constraints_ = definition_.constraints_, traitType_ = definition_.traitType_))
case (ff.compiler.Syntax_.TConstructor(at_, name_, _)) =>
fail_[ff.core.Pair_.Pair[ff.compiler.Unification_.InstanceKey, ff.compiler.Unification_.InstanceValue]](at_ = at_, message_ = (("Instance requires type arguments: " + name_) + "[]"))
case (ff.compiler.Syntax_.TVariable(at_, i_)) =>
fail_[ff.core.Pair_.Pair[ff.compiler.Unification_.InstanceKey, ff.compiler.Unification_.InstanceValue]](at_ = at_, message_ = ("Unexpected type variable: $" + i_))
})
})))
}
def Unification_fail[T](self_ : ff.compiler.Unification_.Unification, at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = (self_, at_, message_) match {
case (self_, _, _) =>
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}

def Unification_freshTypeVariable(self_ : ff.compiler.Unification_.Unification, at_ : ff.compiler.Syntax_.Location) : ff.compiler.Syntax_.Type = (self_, at_) match {
case (self_, _) =>
val result_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TVariable(at_ = at_, index_ = self_.nextTypeVariableIndex_);
self_.nextTypeVariableIndex_ += 2;
result_
}

def Unification_instantiate(self_ : ff.compiler.Unification_.Unification, instantiation_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type], type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (self_, instantiation_, type_) match {
case (self_, _, ff.compiler.Syntax_.TConstructor(at_, name_, List())) =>
pipe_dot(ff.core.Map_.Map_get[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = instantiation_, key_ = name_))({
case (ff.core.Option_.Some(t_)) =>
t_
case (ff.core.Option_.None()) =>
type_
})
case (self_, _, ff.compiler.Syntax_.TConstructor(at_, name_, generics_)) =>
ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = name_, generics_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = generics_, body_ = {(_w1) =>
ff.compiler.Unification_.Unification_instantiate(self_ = self_, instantiation_ = instantiation_, type_ = _w1)
}))
case (self_, _, ff.compiler.Syntax_.TVariable(_, i_)) if ff.compiler.Unification_.Unification_has(self_ = self_, index_ = i_) =>
ff.compiler.Unification_.Unification_instantiate(self_ = self_, instantiation_ = instantiation_, type_ = ff.compiler.Unification_.Unification_get(self_ = self_, index_ = i_))
case (self_, _, ff.compiler.Syntax_.TVariable(_, i_)) =>
type_
}

def Unification_constrain(self_ : ff.compiler.Unification_.Unification, at_ : ff.compiler.Syntax_.Location, type_ : ff.compiler.Syntax_.Type, constraintName_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type]) : ff.core.Unit_.Unit = (self_, at_, type_, constraintName_, generics_) match {
case (self_, _, _, _, _) =>
pipe_dot(type_)({
case (ff.compiler.Syntax_.TVariable(_, i_)) if ff.compiler.Unification_.Unification_has(self_ = self_, index_ = i_) =>
ff.compiler.Unification_.Unification_constrain(self_ = self_, at_ = at_, type_ = ff.compiler.Unification_.Unification_get(self_ = self_, index_ = i_), constraintName_ = constraintName_, generics_ = generics_)
case (ff.compiler.Syntax_.TVariable(_, i_)) =>
pipe_dot(ff.core.Map_.Map_get[ff.core.Int_.Int, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](self_ = self_.constraints_, key_ = i_))({
case (ff.core.Option_.None()) =>
self_.constraints_ = ff.core.Map_.Map_add[ff.core.Int_.Int, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](self_ = self_.constraints_, key_ = i_, value_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics](self_ = List(ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics](first_ = constraintName_, second_ = ff.compiler.Unification_.ConstraintGenerics(at_ = at_, generics_ = generics_)))));
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(map_)) =>
pipe_dot(ff.core.Map_.Map_get[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics](self_ = map_, key_ = constraintName_))({
case (ff.core.Option_.None()) =>
val newMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics] = ff.core.Map_.Map_add[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics](self_ = map_, key_ = constraintName_, value_ = ff.compiler.Unification_.ConstraintGenerics(at_ = at_, generics_ = generics_));
self_.constraints_ = ff.core.Map_.Map_add[ff.core.Int_.Int, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](self_ = self_.constraints_, key_ = i_, value_ = newMap_)
case (ff.core.Option_.Some(ff.compiler.Unification_.ConstraintGenerics(_, generics2_))) =>
ff.core.List_.List_each[ff.core.Pair_.Pair[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type]](self_ = ff.core.List_.List_zip[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = generics_, that_ = generics2_), body_ = {
case (ff.core.Pair_.Pair(t1_, t2_)) =>
ff.compiler.Unification_.Unification_unify(self_ = self_, at_ = at_, t1_ = t1_, t2_ = t2_);
ff.core.Unit_.Unit()
})
});
ff.core.Unit_.Unit()
})
case (ff.compiler.Syntax_.TConstructor(_, name_, generics2_)) =>
pipe_dot(ff.core.Map_.Map_get[ff.compiler.Unification_.InstanceKey, ff.compiler.Unification_.InstanceValue](self_ = self_.instances_, key_ = ff.compiler.Unification_.InstanceKey(traitName_ = constraintName_, typeName_ = name_)))({
case (ff.core.Option_.None()) =>
val g1_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Type](self_ = generics_), body_ = {() =>
""
}), body_ = {() =>
"[...]"
});
val g2_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Type](self_ = generics2_), body_ = {() =>
""
}), body_ = {() =>
"[...]"
});
ff.compiler.Unification_.Unification_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = at_, message_ = ((((("No such instance: " + name_) + g2_) + ": ") + constraintName_) + g1_));
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(definition_)) =>
val typeVariables_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = definition_.generics_, body_ = {(_) =>
ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_, at_ = at_)
});
val instantiation_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type] = ff.core.List_.List_toMap[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = ff.core.List_.List_zip[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = definition_.generics_, that_ = typeVariables_));
val traitType1_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_instantiate(self_ = self_, instantiation_ = instantiation_, type_ = definition_.traitType_);
val traitType2_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = constraintName_, generics_ = (List(List(type_), generics_).flatten));
ff.compiler.Unification_.Unification_unify(self_ = self_, at_ = at_, t1_ = traitType1_, t2_ = traitType2_);
ff.core.List_.List_each[ff.compiler.Syntax_.Constraint](self_ = definition_.constraints_, body_ = {(constraint_) =>
pipe_dot(ff.compiler.Unification_.Unification_instantiate(self_ = self_, instantiation_ = instantiation_, type_ = constraint_.representation_))({
case (ff.compiler.Syntax_.TConstructor(_, newConstraintName_, newGenerics_)) =>
ff.compiler.Unification_.Unification_constrain(self_ = self_, at_ = at_, type_ = type_, constraintName_ = newConstraintName_, generics_ = newGenerics_)
case (ff.compiler.Syntax_.TVariable(_, i_)) =>
ff.compiler.Unification_.Unification_fail[ff.core.Unit_.Unit](self_ = self_, at_ = at_, message_ = ("Constraint can't be a type variable: $" + i_))
});
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
})
});
ff.core.Unit_.Unit()
}

def Unification_get(self_ : ff.compiler.Unification_.Unification, index_ : ff.core.Int_.Int) : ff.compiler.Syntax_.Type = (self_, index_) match {
case (self_, _) =>
pipe_dot(ff.core.Map_.Map_expect[ff.core.Int_.Int, ff.compiler.Syntax_.Type](self_ = self_.substitution_, key_ = index_))({
case (ff.compiler.Syntax_.TVariable(_, i_)) if ff.compiler.Unification_.Unification_has(self_ = self_, index_ = i_) =>
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_get(self_ = self_, index_ = i_);
self_.substitution_ = ff.core.Map_.Map_add[ff.core.Int_.Int, ff.compiler.Syntax_.Type](self_ = self_.substitution_, key_ = index_, value_ = t_);
t_
case (t_) =>
t_
})
}

def Unification_has(self_ : ff.compiler.Unification_.Unification, index_ : ff.core.Int_.Int) : ff.core.Bool_.Bool = (self_, index_) match {
case (self_, _) =>
ff.core.Map_.Map_contains[ff.core.Int_.Int, ff.compiler.Syntax_.Type](self_ = self_.substitution_, key_ = index_)
}

def Unification_substitute(self_ : ff.compiler.Unification_.Unification, type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (self_, type_) match {
case (self_, ff.compiler.Syntax_.TVariable(_, i_)) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Type](condition_ = ff.compiler.Unification_.Unification_has(self_ = self_, index_ = i_), body_ = {() =>
ff.compiler.Unification_.Unification_substitute(self_ = self_, type_ = ff.compiler.Unification_.Unification_get(self_ = self_, index_ = i_))
}), body_ = {() =>
type_
})
case (self_, t_ : ff.compiler.Syntax_.TConstructor) =>
pipe_dot(t_)({(_c) =>
ff.compiler.Syntax_.TConstructor(at_ = _c.at_, name_ = _c.name_, generics_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = t_.generics_, body_ = {(t_) =>
ff.compiler.Unification_.Unification_substitute(self_ = self_, type_ = t_)
}))
})
}

def Unification_unify(self_ : ff.compiler.Unification_.Unification, at_ : ff.compiler.Syntax_.Location, t1_ : ff.compiler.Syntax_.Type, t2_ : ff.compiler.Syntax_.Type) : ff.core.Unit_.Unit = (self_, at_, t1_, t2_) match {
case (self_, _, ff.compiler.Syntax_.TVariable(_, i1_), ff.compiler.Syntax_.TVariable(_, i2_)) if (i1_ == i2_) =>
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
case (self_, _, ff.compiler.Syntax_.TVariable(_, i_), _) if ff.compiler.Unification_.Unification_has(self_ = self_, index_ = i_) =>
ff.compiler.Unification_.Unification_unify(self_ = self_, at_ = at_, t1_ = ff.compiler.Unification_.Unification_get(self_ = self_, index_ = i_), t2_ = t2_);
ff.core.Unit_.Unit()
case (self_, _, _, ff.compiler.Syntax_.TVariable(_, i_)) if ff.compiler.Unification_.Unification_has(self_ = self_, index_ = i_) =>
ff.compiler.Unification_.Unification_unify(self_ = self_, at_ = at_, t1_ = t1_, t2_ = ff.compiler.Unification_.Unification_get(self_ = self_, index_ = i_));
ff.core.Unit_.Unit()
case (self_, _, ff.compiler.Syntax_.TVariable(_, i_), _) =>
ff.compiler.Unification_.Unification_bind(self_ = self_, at_ = at_, index_ = i_, type_ = t2_);
ff.core.Unit_.Unit()
case (self_, _, _, ff.compiler.Syntax_.TVariable(_, i_)) =>
ff.compiler.Unification_.Unification_bind(self_ = self_, at_ = at_, index_ = i_, type_ = t1_);
ff.core.Unit_.Unit()
case (self_, _, ff.compiler.Syntax_.TConstructor(_, name1_, generics1_), ff.compiler.Syntax_.TConstructor(_, name2_, generics2_)) =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = ((name1_ != name2_) || (ff.core.List_.List_size[ff.compiler.Syntax_.Type](self_ = generics1_) != ff.core.List_.List_size[ff.compiler.Syntax_.Type](self_ = generics2_))), body_ = {() =>
ff.compiler.Unification_.Unification_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = at_, message_ = ((("Type mismatch: " + ff.compiler.Syntax_.Type_show(self_ = ff.compiler.Unification_.Unification_substitute(self_ = self_, type_ = t1_))) + " vs. ") + ff.compiler.Syntax_.Type_show(self_ = ff.compiler.Unification_.Unification_substitute(self_ = self_, type_ = t2_))))
});
ff.core.List_.List_each[ff.core.Pair_.Pair[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type]](self_ = ff.core.List_.List_zip[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = generics1_, that_ = generics2_), body_ = {
case (ff.core.Pair_.Pair(t1_, t2_)) =>
ff.compiler.Unification_.Unification_unify(self_ = self_, at_ = at_, t1_ = t1_, t2_ = t2_);
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
}

def Unification_bind(self_ : ff.compiler.Unification_.Unification, at_ : ff.compiler.Syntax_.Location, index_ : ff.core.Int_.Int, type_ : ff.compiler.Syntax_.Type) : ff.core.Unit_.Unit = (self_, at_, index_, type_) match {
case (self_, _, _, _) =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = ff.compiler.Unification_.Unification_occursIn(self_ = self_, index_ = index_, t_ = type_), body_ = {() =>
ff.compiler.Unification_.Unification_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = at_, message_ = ((("Infinite type: $" + index_) + " = ") + ff.compiler.Syntax_.Type_show(self_ = ff.compiler.Unification_.Unification_substitute(self_ = self_, type_ = type_))))
});
self_.substitution_ = ff.core.Map_.Map_add[ff.core.Int_.Int, ff.compiler.Syntax_.Type](self_ = self_.substitution_, key_ = index_, value_ = type_);
ff.core.Option_.Option_each[ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](self_ = ff.core.Map_.Map_get[ff.core.Int_.Int, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](self_ = self_.constraints_, key_ = index_), body_ = {(map_) =>
self_.constraints_ = ff.core.Map_.Map_remove[ff.core.Int_.Int, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](self_ = self_.constraints_, key_ = index_);
ff.core.List_.List_each[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics]](self_ = ff.core.Map_.Map_pairs[ff.core.String_.String, ff.compiler.Unification_.ConstraintGenerics](self_ = map_), body_ = {
case (ff.core.Pair_.Pair(name_, ff.compiler.Unification_.ConstraintGenerics(at2_, generics_))) =>
ff.compiler.Unification_.Unification_constrain(self_ = self_, at_ = at2_, type_ = type_, constraintName_ = name_, generics_ = generics_);
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
}

def Unification_occursIn(self_ : ff.compiler.Unification_.Unification, index_ : ff.core.Int_.Int, t_ : ff.compiler.Syntax_.Type) : ff.core.Bool_.Bool = (self_, index_, t_) match {
case (self_, _, ff.compiler.Syntax_.TVariable(_, i_)) if ff.compiler.Unification_.Unification_has(self_ = self_, index_ = i_) =>
ff.compiler.Unification_.Unification_occursIn(self_ = self_, index_ = index_, t_ = ff.compiler.Unification_.Unification_get(self_ = self_, index_ = i_))
case (self_, _, ff.compiler.Syntax_.TVariable(_, i_)) =>
(i_ == index_)
case (self_, _, ff.compiler.Syntax_.TConstructor(_, _, generics_)) =>
ff.core.List_.List_any[ff.compiler.Syntax_.Type](self_ = generics_, body_ = {(t_) =>
ff.compiler.Unification_.Unification_occursIn(self_ = self_, index_ = index_, t_ = t_)
})
}


}
