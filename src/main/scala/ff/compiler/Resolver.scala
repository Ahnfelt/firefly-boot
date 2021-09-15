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
object Resolver_ {

case class Resolver(variables_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], variants_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], types_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], traits_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String])

def make_() : ff.compiler.Resolver_.Resolver = {
ff.compiler.Resolver_.Resolver(variables_ = List().getMap_(), variants_ = List().getMap_(), types_ = List().getMap_(), traits_ = List().getMap_())
}

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_(((message_ + " ") + at_.show_()))
}
implicit class Resolver_extend0(self_ : ff.compiler.Resolver_.Resolver) {

def resolveModule_(module_ : ff.compiler.Syntax_.Module, otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Syntax_.Module = {
val moduleNamespace_ = module_.file_.replace_("\\", "/").getReverse_().takeWhile_({(_w1) =>
(_w1 != '/')
}).getReverse_().takeWhile_({(_w1) =>
(_w1 != '.')
});
val self2_ = self_.processImports_(module_.imports_, otherModules_);
val self3_ = self2_.processDefinitions_(module_, ff.core.Option_.None());
module_.copy(types_ = module_.types_.map_({(_w1) =>
self3_.resolveTypeDefinition_(_w1)
}), traits_ = module_.traits_.map_({(_w1) =>
self3_.resolveTraitDefinition_(_w1)
}), instances_ = module_.instances_.map_({(_w1) =>
self3_.resolveInstanceDefinition_(_w1)
}), extends_ = module_.extends_.map_({(_w1) =>
self3_.resolveExtendDefinition_(_w1)
}), lets_ = module_.lets_.map_({(_w1) =>
self3_.resolveLetDefinition_(_w1)
}), functions_ = module_.functions_.map_({(_w1) =>
self3_.resolveFunctionDefinition_(_w1)
}))
}

def processImports_(imports_ : ff.core.List_.List[ff.compiler.Syntax_.DImport], modules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Resolver_.Resolver = {
var resolver_ = self_;
imports_.each_({(import_) =>
pipe_dot(modules_.find_({(_w1) =>
(_w1.file_.dropLast_(3) == import_.file_)
}))({
case (ff.core.Option_.Some(module_)) =>
resolver_ = resolver_.processDefinitions_(module_, ff.core.Option_.Some(import_.alias_))
case (ff.core.Option_.None()) =>
ff.compiler.Resolver_.fail_(import_.at_, ("No such module: " + import_.file_))
})
});
resolver_
}

def processDefinitions_(module_ : ff.compiler.Syntax_.Module, importAlias_ : ff.core.Option_.Option[ff.core.String_.String]) : ff.compiler.Resolver_.Resolver = {
def entry_(name_ : ff.core.String_.String, unqualified_ : ff.core.Bool_.Bool) : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]] = {
val full_ = ((((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + module_.file_.dropLast_(3)) + ".") + name_);
pipe_dot(importAlias_)({
case (ff.core.Option_.None()) =>
List(ff.core.Pair_.Pair(name_, full_))
case (ff.core.Option_.Some(alias_)) if unqualified_ =>
List(ff.core.Pair_.Pair(((alias_ + ".") + name_), full_), ff.core.Pair_.Pair(name_, full_))
case (ff.core.Option_.Some(alias_)) =>
List(ff.core.Pair_.Pair(((alias_ + ".") + name_), full_))
})
}
val isCore_ = (((module_.packagePair_.first_ == "ff") && (module_.packagePair_.second_ == "core")) && (module_.file_ == "Core.ff"));
val lets_ = module_.lets_.flatMap_({(_w1) =>
entry_(_w1.name_, isCore_)
}).getMap_();
val functions_ = module_.functions_.flatMap_({(_w1) =>
entry_(_w1.signature_.name_, isCore_)
}).getMap_();
val traitMethods_ = module_.traits_.flatMap_({(_w1) =>
_w1.methods_
}).flatMap_({(_w1) =>
entry_(_w1.name_, ff.core.Bool_.False())
}).getMap_();
val traits_ = module_.traits_.flatMap_({(_w1) =>
entry_(_w1.name_, ff.core.Bool_.True())
}).getMap_();
val types_ = module_.types_.flatMap_({(_w1) =>
entry_(_w1.name_, ff.core.Bool_.True())
}).getMap_();
val variants_ = module_.types_.flatMap_({(_w1) =>
_w1.variants_
}).flatMap_({(_w1) =>
entry_(_w1.name_, ff.core.Bool_.True())
}).getMap_();
ff.compiler.Resolver_.Resolver(variables_ = (((self_.variables_ ++ lets_) ++ functions_) ++ traitMethods_), variants_ = (self_.variants_ ++ variants_), types_ = (self_.types_ ++ types_), traits_ = (self_.traits_ ++ traits_))
}

def resolveTypeDefinition_(definition_ : ff.compiler.Syntax_.DType) : ff.compiler.Syntax_.DType = {
val generics_ = definition_.generics_.map_({(g_) =>
ff.core.Pair_.Pair(g_, g_)
}).getMap_();
val self2_ = self_.copy(types_ = (self_.types_ ++ generics_));
definition_.copy(constraints_ = definition_.constraints_.map_({(c_) =>
c_.copy(representation_ = self2_.resolveType_(c_.representation_))
}), commonFields_ = definition_.commonFields_.map_({(f_) =>
f_.copy(valueType_ = self2_.resolveType_(f_.valueType_), default_ = f_.default_.map_({(_w1) =>
self2_.resolveTerm_(_w1)
}))
}), variants_ = definition_.variants_.map_({(v_) =>
v_.copy(fields_ = v_.fields_.map_({(f_) =>
f_.copy(valueType_ = self2_.resolveType_(f_.valueType_), default_ = f_.default_.map_({(_w1) =>
self2_.resolveTerm_(_w1)
}))
}))
}))
}

def resolveTraitDefinition_(definition_ : ff.compiler.Syntax_.DTrait) : ff.compiler.Syntax_.DTrait = {
definition_
}

def resolveInstanceDefinition_(definition_ : ff.compiler.Syntax_.DInstance) : ff.compiler.Syntax_.DInstance = {
definition_
}

def resolveExtendDefinition_(definition_ : ff.compiler.Syntax_.DExtend) : ff.compiler.Syntax_.DExtend = {
val generics_ = definition_.generics_.map_({(g_) =>
ff.core.Pair_.Pair(g_, g_)
}).getMap_();
val self2_ = self_.copy(types_ = (self_.types_ ++ generics_), variables_ = self_.variables_.add_(definition_.name_, definition_.name_));
definition_.copy(constraints_ = definition_.constraints_.map_({(c_) =>
c_.copy(representation_ = self2_.resolveType_(c_.representation_))
}), type_ = self2_.resolveType_(definition_.type_), methods_ = definition_.methods_.map_({(_w1) =>
self2_.resolveFunctionDefinition_(_w1)
}))
}

def resolveLetDefinition_(definition_ : ff.compiler.Syntax_.DLet) : ff.compiler.Syntax_.DLet = {
val self2_ = self_.copy(variables_ = self_.variables_.add_(definition_.name_, definition_.name_));
definition_.copy(variableType_ = self_.resolveType_(definition_.variableType_), value_ = self_.resolveTerm_(definition_.value_))
}

def resolveTerm_(term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (term_) match {
case (_ : ff.compiler.Syntax_.EString) =>
term_
case (_ : ff.compiler.Syntax_.EChar) =>
term_
case (_ : ff.compiler.Syntax_.EInt) =>
term_
case (_ : ff.compiler.Syntax_.EFloat) =>
term_
case (e_ : ff.compiler.Syntax_.EVariable) =>
self_.variables_.get_(e_.name_).map_({(_w1) =>
e_.copy(name_ = _w1)
}).else_({() =>
ff.core.Core_.if_(e_.name_.first_().any_({(_w1) =>
_w1.getIsLetter_()
}), {() =>
ff.compiler.Resolver_.fail_(e_.at_, ("No such variable: " + e_.name_))
}).else_({() =>
term_
})
})
case (ff.compiler.Syntax_.EList(at_, t_, items_)) =>
ff.compiler.Syntax_.EList(at_, self_.resolveType_(t_), items_.map_({
case (ff.core.Pair_.Pair(item_, spread_)) =>
ff.core.Pair_.Pair(self_.resolveTerm_(item_), spread_)
}))
case (ff.compiler.Syntax_.EVariant(at_, name_, typeArguments_, arguments_)) =>
ff.compiler.Syntax_.EVariant(at_ = at_, name_ = self_.variants_.get_(name_).else_({() =>
ff.compiler.Resolver_.fail_(at_, ("No such variant: " + name_))
}), typeArguments_ = typeArguments_.map_({(_w1) =>
self_.resolveType_(_w1)
}), arguments_ = arguments_.map_({(_w1) =>
_w1.map_({(a_) =>
a_.copy(value_ = self_.resolveTerm_(a_.value_))
})
}))
case (ff.compiler.Syntax_.EVariantIs(at_, name_, typeArguments_)) =>
ff.compiler.Syntax_.EVariantIs(at_ = at_, name_ = self_.variants_.get_(name_).else_({() =>
ff.compiler.Resolver_.fail_(at_, ("No such variant: " + name_))
}), typeArguments_ = typeArguments_.map_({(_w1) =>
self_.resolveType_(_w1)
}))
case (ff.compiler.Syntax_.ECopy(at_, name_, record_, arguments_)) =>
ff.compiler.Syntax_.ECopy(at_ = at_, name_ = self_.variants_.get_(name_).else_({() =>
ff.compiler.Resolver_.fail_(at_, ("No such variant: " + name_))
}), record_ = self_.resolveTerm_(record_), arguments_ = arguments_.map_({(f_) =>
f_.copy(value_ = self_.resolveTerm_(f_.value_))
}))
case (e_ : ff.compiler.Syntax_.EField) =>
e_.copy(record_ = self_.resolveTerm_(e_.record_))
case (ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(lambdaAt_, cases_))) =>
ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(lambdaAt_, cases_.map_({(_w1) =>
self_.resolveCase_(_w1)
})))
case (ff.compiler.Syntax_.EPipe(at_, value_, function_)) =>
ff.compiler.Syntax_.EPipe(at_ = at_, value_ = self_.resolveTerm_(value_), function_ = self_.resolveTerm_(function_))
case (ff.compiler.Syntax_.ECall(at_, tailCall_, function_, typeArguments_, arguments_)) =>
ff.compiler.Syntax_.ECall(at_ = at_, tailCall_ = tailCall_, function_ = self_.resolveTerm_(function_), typeArguments_ = typeArguments_.map_({(_w1) =>
self_.resolveType_(_w1)
}), arguments_ = arguments_.map_({(a_) =>
a_.copy(value_ = self_.resolveTerm_(a_.value_))
}))
case (ff.compiler.Syntax_.ERecord(at_, fields_)) =>
ff.compiler.Syntax_.ERecord(at_ = at_, fields_ = fields_.map_({(f_) =>
f_.copy(value_ = self_.resolveTerm_(f_.value_))
}))
case (e_ : ff.compiler.Syntax_.EWildcard) =>
ff.core.Core_.if_((e_.index_ == 0), {() =>
ff.compiler.Resolver_.fail_(e_.at_, "Unbound wildcard")
});
e_.copy()
case (ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionMap_ = functions_.map_({(_w1) =>
_w1.signature_.name_
}).map_({(name_) =>
ff.core.Pair_.Pair(name_, name_)
}).getMap_();
val self2_ = self_.copy(variables_ = (self_.variables_ ++ functionMap_));
ff.compiler.Syntax_.EFunctions(at_ = at_, functions_ = functions_.map_({(_w1) =>
self2_.resolveFunctionDefinition_(_w1)
}), body_ = self2_.resolveTerm_(body_))
case (e_ : ff.compiler.Syntax_.ELet) =>
val self2_ = self_.copy(variables_ = self_.variables_.add_(e_.name_, e_.name_));
e_.copy(valueType_ = self_.resolveType_(e_.valueType_), value_ = self_.resolveTerm_(e_.value_), body_ = self2_.resolveTerm_(e_.body_))
case (ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
ff.compiler.Syntax_.ESequential(at_ = at_, before_ = self_.resolveTerm_(before_), after_ = self_.resolveTerm_(after_))
case (ff.compiler.Syntax_.EAssign(at_, operator_, variable_, value_)) =>
ff.compiler.Syntax_.EAssign(at_ = at_, operator_ = operator_, variable_ = self_.variables_.get_(variable_).else_({() =>
ff.compiler.Resolver_.fail_(at_, ("No such variable: " + variable_))
}), value_ = self_.resolveTerm_(value_))
case (ff.compiler.Syntax_.EAssignField(at_, operator_, record_, field_, value_)) =>
ff.compiler.Syntax_.EAssignField(at_ = at_, operator_ = operator_, record_ = self_.resolveTerm_(record_), field_ = field_, value_ = self_.resolveTerm_(value_))
}

def resolveType_(type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (type_) match {
case (_ : ff.compiler.Syntax_.TVariable) =>
type_
case (constructor_ : ff.compiler.Syntax_.TConstructor) =>
val name_ = ff.core.Core_.if_(constructor_.name_.contains_("$"), {() =>
constructor_.name_
}).else_({() =>
self_.types_.get_(constructor_.name_).else_({() =>
ff.compiler.Resolver_.fail_(constructor_.at_, ("No such type: " + constructor_.name_))
})
});
constructor_.copy(name_ = name_, generics_ = constructor_.generics_.map_({(_w1) =>
self_.resolveType_(_w1)
}))
}

def resolveFunctionDefinition_(definition_ : ff.compiler.Syntax_.DFunction) : ff.compiler.Syntax_.DFunction = {
val variableMap_ = definition_.signature_.parameters_.map_({(_w1) =>
_w1.name_
}).map_({(name_) =>
ff.core.Pair_.Pair(name_, name_)
}).getMap_();
val typeMap_ = definition_.signature_.generics_.map_({(name_) =>
ff.core.Pair_.Pair(name_, name_)
}).getMap_();
val self2_ = self_.copy(variables_ = (self_.variables_ ++ variableMap_), types_ = (self_.types_ ++ typeMap_));
val signature_ = definition_.signature_.copy(constraints_ = definition_.signature_.constraints_.map_({(c_) =>
ff.compiler.Syntax_.Constraint(self2_.resolveType_(c_.representation_))
}), parameters_ = definition_.signature_.parameters_.map_({(p_) =>
p_.copy(valueType_ = self2_.resolveType_(p_.valueType_), default_ = p_.default_.map_({(_w1) =>
self2_.resolveTerm_(_w1)
}))
}), returnType_ = self2_.resolveType_(definition_.signature_.returnType_));
val body_ = definition_.body_.copy(cases_ = definition_.body_.cases_.map_({(_w1) =>
self2_.resolveCase_(_w1)
}));
ff.compiler.Syntax_.DFunction(definition_.at_, signature_, body_, definition_.scalaTarget_)
}

def resolveCase_(case_ : ff.compiler.Syntax_.MatchCase) : ff.compiler.Syntax_.MatchCase = {
def findVariables_(pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = (pattern_) match {
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.Some(name_))) =>
List(ff.core.Pair_.Pair(name_, name_)).getMap_()
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.None())) =>
ff.core.Core_.mapOf_()
case (ff.compiler.Syntax_.PVariant(_, _, patterns_)) =>
patterns_.map_(findVariables_).foldLeft_(ff.core.Core_.mapOf_[ff.core.String_.String, ff.core.String_.String]())({(_w1, _w2) =>
(_w1 ++ _w2)
})
case (ff.compiler.Syntax_.PVariantAs(_, _, variable_)) =>
variable_.getList_().map_({(x_) =>
ff.core.Pair_.Pair(x_, x_)
}).getMap_()
case (ff.compiler.Syntax_.PAlias(_, pattern_, variable_)) =>
(List(ff.core.Pair_.Pair(variable_, variable_)).getMap_() ++ findVariables_(pattern_))
case (ff.compiler.Syntax_.PList(_, _, items_)) =>
items_.map_({
case (ff.core.Pair_.Pair(item_, _)) =>
findVariables_(item_)
}).foldLeft_(ff.core.Core_.mapOf_[ff.core.String_.String, ff.core.String_.String]())({(_w1, _w2) =>
(_w1 ++ _w2)
})
}
val variableMap_ = case_.patterns_.map_(findVariables_).foldLeft_(ff.core.Core_.mapOf_[ff.core.String_.String, ff.core.String_.String]())({(_w1, _w2) =>
(_w1 ++ _w2)
});
val self2_ = self_.copy(variables_ = (self_.variables_ ++ variableMap_));
ff.compiler.Syntax_.MatchCase(at_ = case_.at_, patterns_ = case_.patterns_.map_({(_w1) =>
self2_.resolvePattern_(_w1)
}), condition_ = case_.condition_.map_({(_w1) =>
self2_.resolveTerm_(_w1)
}), body_ = self2_.resolveTerm_(case_.body_))
}

def resolvePattern_(pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.compiler.Syntax_.MatchPattern = (pattern_) match {
case (p_ @ (_ : ff.compiler.Syntax_.PVariable)) =>
p_
case (ff.compiler.Syntax_.PVariant(at_, name_, patterns_)) =>
val newName_ = self_.variants_.get_(name_).else_({() =>
ff.compiler.Resolver_.fail_(at_, ("No such variant: " + name_))
});
val newPatterns_ = patterns_.map_({(_w1) =>
self_.resolvePattern_(_w1)
});
ff.compiler.Syntax_.PVariant(at_, newName_, newPatterns_)
case (ff.compiler.Syntax_.PVariantAs(at_, name_, variable_)) =>
val newName_ = self_.variants_.get_(name_).else_({() =>
ff.compiler.Resolver_.fail_(at_, ("No such variant: " + name_))
});
ff.compiler.Syntax_.PVariantAs(at_, newName_, variable_)
case (ff.compiler.Syntax_.PAlias(at_, pattern_, variable_)) =>
val newPattern_ = self_.resolvePattern_(pattern_);
ff.compiler.Syntax_.PAlias(at_, newPattern_, variable_)
case (ff.compiler.Syntax_.PList(at_, t_, items_)) =>
val newType_ = self_.resolveType_(t_);
val newPatterns_ = items_.map_({
case (ff.core.Pair_.Pair(pattern_, spread_)) =>
ff.core.Pair_.Pair(self_.resolvePattern_(pattern_), spread_)
});
ff.compiler.Syntax_.PList(at_, newType_, newPatterns_)
}

}


}
