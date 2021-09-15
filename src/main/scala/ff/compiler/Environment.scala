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
object Environment_ {

case class Environment(symbols_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme])

case class Scheme(isVariable_ : ff.core.Bool_.Bool, isMutable_ : ff.core.Bool_.Bool, signature_ : ff.compiler.Syntax_.Signature)

case class Instantiated(typeArguments_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]], scheme_ : ff.compiler.Environment_.Scheme)

def make_(module_ : ff.compiler.Syntax_.Module, otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Environment_.Environment = {
ff.compiler.Environment_.Environment((ff.compiler.Environment_.processModule_(module_, ff.core.Bool_.True()).symbols_ ++ otherModules_.map_({(_w1) =>
ff.compiler.Environment_.processModule_(_w1, ff.core.Bool_.False()).symbols_
}).foldLeft_(ff.core.Core_.mapOf_[ff.core.String_.String, ff.compiler.Environment_.Scheme]())({(_w1, _w2) =>
(_w1 ++ _w2)
})))
}

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_(((message_ + " ") + at_.show_()))
}

def processModule_(module_ : ff.compiler.Syntax_.Module, isCurrentModule_ : ff.core.Bool_.Bool) : ff.compiler.Environment_.Environment = {
def full_(module_ : ff.compiler.Syntax_.Module, name_ : ff.core.String_.String) : ff.core.String_.String = {
((((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + module_.file_.dropLast_(3)) + ".") + name_)
}
val functions_ = module_.functions_.map_({(d_) =>
ff.core.Pair_.Pair(full_(module_, d_.signature_.name_), ff.compiler.Environment_.Scheme(ff.core.Bool_.False(), ff.core.Bool_.False(), d_.signature_))
});
val lets_ = module_.lets_.map_({(d_) =>
ff.core.Pair_.Pair(full_(module_, d_.name_), ff.compiler.Environment_.Scheme(ff.core.Bool_.True(), ff.core.Bool_.False(), ff.compiler.Syntax_.Signature(d_.at_, d_.name_, List(), List(), List(), d_.variableType_)))
});
val extends_ = module_.extends_.flatMap_({(d_) =>
pipe_dot(d_.type_)({
case (t_ : ff.compiler.Syntax_.TVariable) =>
ff.compiler.Environment_.fail_(t_.at_, ("Unexpected type variable: $" + t_.index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
val prefix_ = (t_.name_ + "_");
val selfParameter_ = ff.compiler.Syntax_.Parameter(d_.at_, ff.core.Bool_.False(), d_.name_, d_.type_, ff.core.Option_.None());
d_.methods_.map_({(method_) =>
ff.core.Pair_.Pair((prefix_ + method_.signature_.name_), ff.compiler.Environment_.Scheme(ff.core.Bool_.False(), ff.core.Bool_.False(), method_.signature_.copy(generics_ = (d_.generics_ ++ method_.signature_.generics_), constraints_ = (d_.constraints_ ++ method_.signature_.constraints_), parameters_ = (List(List(selfParameter_), method_.signature_.parameters_).flatten))))
})
})
});
val fields_ = module_.types_.flatMap_({(d_) =>
val prefix_ = (d_.name_ + "_");
val t_ = ff.compiler.Syntax_.TConstructor(d_.at_, d_.name_, d_.generics_.map_({(g_) =>
ff.compiler.Syntax_.TConstructor(d_.at_, g_, List())
}));
val selfParameter_ = ff.compiler.Syntax_.Parameter(d_.at_, ff.core.Bool_.False(), d_.name_, t_, ff.core.Option_.None());
d_.commonFields_.map_({(f_) =>
ff.core.Pair_.Pair(full_(module_, (prefix_ + f_.name_)), ff.compiler.Environment_.Scheme(ff.core.Bool_.True(), f_.mutable_, ff.compiler.Syntax_.Signature(at_ = f_.at_, name_ = f_.name_, generics_ = d_.generics_, constraints_ = d_.constraints_, parameters_ = List(selfParameter_), returnType_ = f_.valueType_)))
})
});
val variants_ = module_.types_.flatMap_({(d_) =>
val returnType_ = ff.compiler.Syntax_.TConstructor(d_.at_, full_(module_, d_.name_), d_.generics_.map_({(typeParameter_) =>
ff.compiler.Syntax_.TConstructor(d_.at_, typeParameter_, List())
}));
d_.variants_.map_({(variant_) =>
ff.core.Pair_.Pair(full_(module_, variant_.name_), ff.compiler.Environment_.Scheme(ff.core.Bool_.False(), ff.core.Bool_.False(), ff.compiler.Syntax_.Signature(variant_.at_, variant_.name_, generics_ = d_.generics_, constraints_ = d_.constraints_, parameters_ = (d_.commonFields_ ++ variant_.fields_), returnType_ = returnType_)))
})
});
ff.compiler.Environment_.Environment(((((functions_ ++ lets_) ++ fields_) ++ extends_) ++ variants_).getMap_())
}



}
