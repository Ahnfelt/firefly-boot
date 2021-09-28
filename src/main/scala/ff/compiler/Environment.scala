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
object Environment_ {

case class Environment(symbols_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme])

case class Scheme(isVariable_ : ff.core.Bool_.Bool, isMutable_ : ff.core.Bool_.Bool, signature_ : ff.compiler.Syntax_.Signature)

case class Instantiated(typeArguments_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]], scheme_ : ff.compiler.Environment_.Scheme)

def make_(module_ : ff.compiler.Syntax_.Module, otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Environment_.Environment = {
ff.compiler.Environment_.Environment(symbols_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = ff.compiler.Environment_.processModule_(module_ = module_, isCurrentModule_ = ff.core.Bool_.True()).symbols_, that_ = ff.core.List_.List_foldLeft[ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme], ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Module, ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = otherModules_, body_ = {(_w1) =>
ff.compiler.Environment_.processModule_(module_ = _w1, isCurrentModule_ = ff.core.Bool_.False()).symbols_
}), initial_ = ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Environment_.Scheme]())({(_w1, _w2) =>
ff.core.Map_.Map_addAll[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = _w1, that_ = _w2)
})))
}

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}

def processModule_(module_ : ff.compiler.Syntax_.Module, isCurrentModule_ : ff.core.Bool_.Bool) : ff.compiler.Environment_.Environment = {
def full_(module_ : ff.compiler.Syntax_.Module, name_ : ff.core.String_.String) : ff.core.String_.String = {
((((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + ff.core.String_.String_dropLast(self_ = module_.file_, count_ = 3)) + ".") + name_)
}
val functions_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = module_.functions_, body_ = {(d_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = full_(module_ = module_, name_ = d_.signature_.name_), second_ = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.False(), isMutable_ = ff.core.Bool_.False(), signature_ = d_.signature_))
});
val lets_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]] = ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = module_.lets_, body_ = {(d_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = full_(module_ = module_, name_ = d_.name_), second_ = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.True(), isMutable_ = ff.core.Bool_.False(), signature_ = ff.compiler.Syntax_.Signature(at_ = d_.at_, name_ = d_.name_, generics_ = List(), constraints_ = List(), parameters_ = List(), returnType_ = d_.variableType_)))
});
val extends_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]] = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DExtend, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = module_.extends_, body_ = {(d_) =>
pipe_dot(d_.type_)({
case (t_ : ff.compiler.Syntax_.TVariable) =>
ff.compiler.Environment_.fail_[ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]]](at_ = t_.at_, message_ = ("Unexpected type variable: $" + t_.index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
val prefix_ : ff.core.String_.String = (t_.name_ + "_");
val selfParameter_ : ff.compiler.Syntax_.Parameter = ff.compiler.Syntax_.Parameter(at_ = d_.at_, mutable_ = ff.core.Bool_.False(), name_ = d_.name_, valueType_ = d_.type_, default_ = ff.core.Option_.None[ff.compiler.Syntax_.Term]());
ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = d_.methods_, body_ = {(method_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = (prefix_ + method_.signature_.name_), second_ = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.False(), isMutable_ = ff.core.Bool_.False(), signature_ = pipe_dot(method_.signature_)({(_c) =>
ff.compiler.Syntax_.Signature(at_ = _c.at_, name_ = _c.name_, generics_ = ff.core.List_.List_addAll[ff.core.String_.String](self_ = d_.generics_, list_ = method_.signature_.generics_), constraints_ = ff.core.List_.List_addAll[ff.compiler.Syntax_.Constraint](self_ = d_.constraints_, list_ = method_.signature_.constraints_), parameters_ = (List(List(selfParameter_), method_.signature_.parameters_).flatten), returnType_ = _c.returnType_)
})))
})
})
});
val fields_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]] = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DType, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = module_.types_, body_ = {(d_) =>
val prefix_ : ff.core.String_.String = (d_.name_ + "_");
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = d_.at_, name_ = d_.name_, generics_ = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = d_.generics_, body_ = {(g_) =>
ff.compiler.Syntax_.TConstructor(at_ = d_.at_, name_ = g_, generics_ = List())
}));
val selfParameter_ : ff.compiler.Syntax_.Parameter = ff.compiler.Syntax_.Parameter(at_ = d_.at_, mutable_ = ff.core.Bool_.False(), name_ = d_.name_, valueType_ = t_, default_ = ff.core.Option_.None[ff.compiler.Syntax_.Term]());
ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = d_.commonFields_, body_ = {(f_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = full_(module_ = module_, name_ = (prefix_ + f_.name_)), second_ = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.True(), isMutable_ = f_.mutable_, signature_ = ff.compiler.Syntax_.Signature(at_ = f_.at_, name_ = f_.name_, generics_ = d_.generics_, constraints_ = d_.constraints_, parameters_ = List(selfParameter_), returnType_ = f_.valueType_)))
})
});
val variants_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]] = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DType, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = module_.types_, body_ = {(d_) =>
val returnType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = d_.at_, name_ = full_(module_ = module_, name_ = d_.name_), generics_ = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = d_.generics_, body_ = {(typeParameter_) =>
ff.compiler.Syntax_.TConstructor(at_ = d_.at_, name_ = typeParameter_, generics_ = List())
}));
ff.core.List_.List_map[ff.compiler.Syntax_.Variant, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = d_.variants_, body_ = {(variant_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = full_(module_ = module_, name_ = variant_.name_), second_ = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.False(), isMutable_ = ff.core.Bool_.False(), signature_ = ff.compiler.Syntax_.Signature(at_ = variant_.at_, name_ = variant_.name_, generics_ = d_.generics_, constraints_ = d_.constraints_, parameters_ = ff.core.List_.List_addAll[ff.compiler.Syntax_.Parameter](self_ = d_.commonFields_, list_ = variant_.fields_), returnType_ = returnType_)))
})
});
ff.compiler.Environment_.Environment(symbols_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = ff.core.List_.List_addAll[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = ff.core.List_.List_addAll[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = ff.core.List_.List_addAll[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = ff.core.List_.List_addAll[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = functions_, list_ = lets_), list_ = fields_), list_ = extends_), list_ = variants_)))
}



}
