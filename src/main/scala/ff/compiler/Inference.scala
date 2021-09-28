package ff.compiler
import ff.compiler.Environment_._

import ff.compiler.Substitution_._

import ff.compiler.Syntax_._

import ff.compiler.Unification_._

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
object Inference_ {

case class Inference(unification_ : ff.compiler.Unification_.Unification)

def make_(instances_ : ff.core.List_.List[ff.compiler.Syntax_.DInstance]) : ff.compiler.Inference_.Inference = {
ff.compiler.Inference_.Inference(unification_ = ff.compiler.Unification_.make_(instances_ = instances_))
}

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}

def core_(name_ : ff.core.String_.String) : ff.core.String_.String = {
((("ff:core/" + name_) + ".") + name_)
}
def Inference_inferModule(self_ : ff.compiler.Inference_.Inference, module_ : ff.compiler.Syntax_.Module, otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Syntax_.Module = (self_, module_, otherModules_) match {
case (self_, _, _) =>
val environment_ : ff.compiler.Environment_.Environment = ff.compiler.Environment_.make_(module_ = module_, otherModules_ = otherModules_);
val lets_ : ff.core.List_.List[ff.compiler.Syntax_.DLet] = ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.compiler.Syntax_.DLet](self_ = module_.lets_, body_ = {(_w1) =>
ff.compiler.Inference_.Inference_inferLetDefinition(self_ = self_, environment_ = environment_, definition_ = _w1)
});
val functions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = module_.functions_, body_ = {(_w1) =>
ff.compiler.Inference_.Inference_inferFunctionDefinition(self_ = self_, environment_ = environment_, definition_ = _w1)
});
val extends_ : ff.core.List_.List[ff.compiler.Syntax_.DExtend] = ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.compiler.Syntax_.DExtend](self_ = module_.extends_, body_ = {(_w1) =>
ff.compiler.Inference_.Inference_inferExtendDefinition(self_ = self_, environment_ = environment_, definition_ = _w1)
});
val result_ : ff.compiler.Syntax_.Module = pipe_dot(module_)({(_c) =>
ff.compiler.Syntax_.Module(packagePair_ = _c.packagePair_, file_ = _c.file_, dependencies_ = _c.dependencies_, imports_ = _c.imports_, types_ = _c.types_, traits_ = _c.traits_, instances_ = _c.instances_, extends_ = extends_, lets_ = lets_, functions_ = functions_)
});
ff.compiler.Substitution_.Substitution_substituteModule(self_ = ff.compiler.Substitution_.Substitution(substitution_ = self_.unification_.substitution_), module_ = result_)
}

def Inference_inferLetDefinition(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, definition_ : ff.compiler.Syntax_.DLet) : ff.compiler.Syntax_.DLet = (self_, environment_, definition_) match {
case (self_, _, _) =>
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = definition_.variableType_, term_ = definition_.value_);
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DLet(at_ = _c.at_, name_ = _c.name_, variableType_ = _c.variableType_, value_ = value_, targets_ = _c.targets_)
})
}

def Inference_inferExtendDefinition(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, definition_ : ff.compiler.Syntax_.DExtend) : ff.compiler.Syntax_.DExtend = (self_, environment_, definition_) match {
case (self_, _, _) =>
val selfParameter_ : ff.compiler.Syntax_.Parameter = ff.compiler.Syntax_.Parameter(at_ = definition_.at_, mutable_ = ff.core.Bool_.False(), name_ = definition_.name_, valueType_ = definition_.type_, default_ = ff.core.Option_.None[ff.compiler.Syntax_.Term]());
val functions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = definition_.methods_, body_ = {(method_) =>
val signature_ : ff.compiler.Syntax_.Signature = pipe_dot(method_.signature_)({(_c) =>
ff.compiler.Syntax_.Signature(at_ = _c.at_, name_ = _c.name_, generics_ = ff.core.List_.List_addAll[ff.core.String_.String](self_ = definition_.generics_, list_ = method_.signature_.generics_), constraints_ = ff.core.List_.List_addAll[ff.compiler.Syntax_.Constraint](self_ = definition_.constraints_, list_ = method_.signature_.constraints_), parameters_ = (List(List(selfParameter_), method_.signature_.parameters_).flatten), returnType_ = _c.returnType_)
});
val lambda_ : ff.compiler.Syntax_.Lambda = pipe_dot(method_.body_)({(_c) =>
ff.compiler.Syntax_.Lambda(at_ = _c.at_, cases_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.compiler.Syntax_.MatchCase](self_ = method_.body_.cases_, body_ = {(case_) =>
val selfPattern_ : ff.compiler.Syntax_.MatchPattern = ff.compiler.Syntax_.PVariable(at_ = method_.at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = definition_.name_));
pipe_dot(case_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = (List(List(selfPattern_), case_.patterns_).flatten), condition_ = _c.condition_, body_ = _c.body_)
})
}))
});
val function_ : ff.compiler.Syntax_.DFunction = pipe_dot(method_)({(_c) =>
ff.compiler.Syntax_.DFunction(at_ = _c.at_, signature_ = signature_, body_ = lambda_, targets_ = _c.targets_)
});
ff.compiler.Inference_.Inference_inferFunctionDefinition(self_ = self_, environment_ = environment_, definition_ = function_)
});
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DExtend(at_ = _c.at_, name_ = _c.name_, generics_ = _c.generics_, constraints_ = _c.constraints_, type_ = _c.type_, methods_ = functions_)
})
}

def Inference_inferFunctionDefinition(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, definition_ : ff.compiler.Syntax_.DFunction) : ff.compiler.Syntax_.DFunction = (self_, environment_, definition_) match {
case (self_, _, _) =>
val parameters_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]] = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = definition_.signature_.parameters_, body_ = {(p_) =>
val scheme_ : ff.compiler.Environment_.Scheme = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.True(), isMutable_ = ff.core.Bool_.False(), signature_ = ff.compiler.Syntax_.Signature(at_ = p_.at_, name_ = p_.name_, generics_ = List(), constraints_ = List(), parameters_ = List(), returnType_ = p_.valueType_));
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = p_.name_, second_ = scheme_)
});
val parameterMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme] = ff.core.List_.List_getMap[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = parameters_);
val environment2_ : ff.compiler.Environment_.Environment = pipe_dot(environment_)({(_c) =>
ff.compiler.Environment_.Environment(symbols_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = environment_.symbols_, that_ = parameterMap_))
});
val functionType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = definition_.at_, name_ = ("Function$" + ff.core.List_.List_getSize[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = parameters_)), generics_ = (List(ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme], ff.compiler.Syntax_.Type](self_ = parameters_, body_ = {(_w1) =>
_w1.second_.signature_.returnType_
}), List(definition_.signature_.returnType_)).flatten));
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DFunction(at_ = _c.at_, signature_ = _c.signature_, body_ = ff.compiler.Inference_.Inference_inferLambda(self_ = self_, environment_ = environment2_, expected_ = functionType_, lambda_ = definition_.body_), targets_ = _c.targets_)
})
}

def Inference_inferLambda(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, lambda_ : ff.compiler.Syntax_.Lambda) : ff.compiler.Syntax_.Lambda = (self_, environment_, expected_, lambda_) match {
case (self_, _, _, _) =>
val unitName_ : ff.core.String_.String = ff.compiler.Inference_.core_(name_ = "Unit");
val returnsUnit_ : ff.core.Bool_.Bool = pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = expected_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, ts_)) if ff.core.String_.String_startsWith(self_ = name_, prefix_ = "Function$") =>
pipe_dot(ff.core.List_.List_expectLast[ff.compiler.Syntax_.Type](self_ = ts_))({
case (ff.compiler.Syntax_.TConstructor(_, n_, List())) =>
(n_ == unitName_)
case (_) =>
ff.core.Bool_.False()
})
case (_) =>
ff.core.Bool_.False()
});
val cases_ : ff.core.List_.List[ff.compiler.Syntax_.MatchCase] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.MatchCase]](condition_ = (!returnsUnit_), body_ = {() =>
lambda_.cases_
}), body_ = {() =>
ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.compiler.Syntax_.MatchCase](self_ = lambda_.cases_, body_ = {(c_) =>
pipe_dot(c_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = _c.patterns_, condition_ = _c.condition_, body_ = ff.compiler.Syntax_.ESequential(at_ = c_.at_, before_ = c_.body_, after_ = ff.compiler.Syntax_.EVariant(at_ = c_.at_, name_ = unitName_, typeArguments_ = List(), arguments_ = ff.core.Option_.None[ff.core.List_.List[ff.compiler.Syntax_.Argument]]())))
})
})
});
pipe_dot(lambda_)({(_c) =>
ff.compiler.Syntax_.Lambda(at_ = _c.at_, cases_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.compiler.Syntax_.MatchCase](self_ = cases_, body_ = {(_w1) =>
ff.compiler.Inference_.Inference_inferMatchCase(self_ = self_, environment_ = environment_, expected_ = expected_, case_ = _w1)
}))
})
}

def Inference_inferMatchCase(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, case_ : ff.compiler.Syntax_.MatchCase) : ff.compiler.Syntax_.MatchCase = (self_, environment_, expected_, case_) match {
case (self_, _, _, _) =>
val parameterTypes_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.compiler.Syntax_.Type](self_ = case_.patterns_, body_ = {(_w1) =>
ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = _w1.at_)
});
val returnType_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = case_.at_);
val functionType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = case_.at_, name_ = ("Function$" + ff.core.List_.List_getSize[ff.compiler.Syntax_.MatchPattern](self_ = case_.patterns_)), generics_ = (List(parameterTypes_, List(returnType_)).flatten));
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = case_.at_, t1_ = expected_, t2_ = functionType_);
val newEnvironment_ : ff.compiler.Environment_.Environment = ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.MatchPattern], ff.compiler.Environment_.Environment](self_ = ff.core.List_.List_zip[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.MatchPattern](self_ = parameterTypes_, that_ = case_.patterns_), initial_ = environment_)({
case (environment1_, ff.core.Pair_.Pair(t_, c_)) =>
val symbols_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme] = ff.core.Map_.Map_map[ff.core.String_.String, ff.compiler.Syntax_.Type, ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = ff.compiler.Inference_.Inference_inferPattern(self_ = self_, environment_ = environment_, expected_ = t_, pattern_ = c_), body_ = {
case (ff.core.Pair_.Pair(name_, type_)) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = name_, second_ = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.True(), isMutable_ = ff.core.Bool_.False(), signature_ = ff.compiler.Syntax_.Signature(at_ = c_.at_, name_ = name_, generics_ = List(), constraints_ = List(), parameters_ = List(), returnType_ = type_)))
});
ff.compiler.Environment_.Environment(symbols_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = environment1_.symbols_, that_ = symbols_))
});
val condition_ : ff.core.Option_.Option[ff.compiler.Syntax_.Term] = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](self_ = case_.condition_, body_ = {(e_) =>
ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = newEnvironment_, expected_ = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ff.compiler.Inference_.core_(name_ = "Bool"), generics_ = List()), term_ = e_)
});
val body_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = newEnvironment_, expected_ = returnType_, term_ = case_.body_);
pipe_dot(case_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = _c.patterns_, condition_ = condition_, body_ = body_)
})
}

def Inference_inferPattern(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type] = (self_, environment_, expected_, pattern_) match {
case (self_, _, _, _) =>
pipe_dot(pattern_)({
case (ff.compiler.Syntax_.PVariable(at_, ff.core.Option_.None())) =>
ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Type]()
case (ff.compiler.Syntax_.PVariable(at_, ff.core.Option_.Some(name_))) =>
ff.core.List_.List_getMap[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = List(ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type](first_ = name_, second_ = expected_)))
case (ff.compiler.Syntax_.PAlias(at_, pattern_, variable_)) =>
ff.core.Map_.Map_add[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = ff.compiler.Inference_.Inference_inferPattern(self_ = self_, environment_ = environment_, expected_ = expected_, pattern_ = pattern_), key_ = variable_, value_ = expected_)
case (ff.compiler.Syntax_.PList(at_, t_, items_)) =>
val listType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = ff.compiler.Inference_.core_(name_ = "List"), generics_ = List(t_));
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = at_, t1_ = expected_, t2_ = listType_);
ff.core.List_.List_foldLeft[ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type], ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool], ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.False())) =>
ff.compiler.Inference_.Inference_inferPattern(self_ = self_, environment_ = environment_, expected_ = t_, pattern_ = item_)
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.True())) =>
ff.compiler.Inference_.Inference_inferPattern(self_ = self_, environment_ = environment_, expected_ = listType_, pattern_ = item_)
}), initial_ = ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Type]())({(_w1, _w2) =>
ff.core.Map_.Map_addAll[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = _w1, that_ = _w2)
})
case (ff.compiler.Syntax_.PVariantAs(at_, name_, ff.core.Option_.None())) =>
val instantiated_ : ff.compiler.Environment_.Instantiated = ff.core.Option_.Option_else(self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = at_, symbol_ = name_, typeArguments_ = List()), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Environment_.Instantiated](at_ = at_, message_ = ("No such variant: " + name_))
});
ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Type]()
case (ff.compiler.Syntax_.PVariantAs(at_, name_, ff.core.Option_.Some(variable_))) =>
val instantiated_ : ff.compiler.Environment_.Instantiated = ff.core.Option_.Option_else(self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = at_, symbol_ = name_, typeArguments_ = List()), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Environment_.Instantiated](at_ = at_, message_ = ("No such variant: " + name_))
});
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = at_, t1_ = expected_, t2_ = instantiated_.scheme_.signature_.returnType_);
val parameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.List_.List_sortBy[ff.compiler.Syntax_.Parameter](self_ = instantiated_.scheme_.signature_.parameters_, body_ = {(_w1) =>
_w1.name_
});
val recordType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = ("Record$" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = parameters_, body_ = {(_w1) =>
_w1.name_
}), separator_ = "$")), generics_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.compiler.Syntax_.Type](self_ = parameters_, body_ = {(_w1) =>
_w1.valueType_
}));
ff.core.List_.List_getMap[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = List(ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type](first_ = variable_, second_ = recordType_)))
case (ff.compiler.Syntax_.PVariant(at_, name_, patterns_)) =>
val instantiated_ : ff.compiler.Environment_.Instantiated = ff.core.Option_.Option_else(self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = at_, symbol_ = name_, typeArguments_ = List()), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Environment_.Instantiated](at_ = at_, message_ = ("No such variant: " + name_))
});
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = at_, t1_ = expected_, t2_ = instantiated_.scheme_.signature_.returnType_);
ff.core.List_.List_foldLeft[ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type], ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.compiler.Syntax_.Parameter], ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = ff.core.List_.List_zip[ff.compiler.Syntax_.MatchPattern, ff.compiler.Syntax_.Parameter](self_ = patterns_, that_ = instantiated_.scheme_.signature_.parameters_), body_ = {
case (ff.core.Pair_.Pair(pattern_, parameter_)) =>
ff.compiler.Inference_.Inference_inferPattern(self_ = self_, environment_ = environment_, expected_ = parameter_.valueType_, pattern_ = pattern_)
}), initial_ = ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Type]())({(_w1, _w2) =>
ff.core.Map_.Map_addAll[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = _w1, that_ = _w2)
})
})
}

def Inference_inferTerm(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, environment_, expected_, term_) match {
case (self_, _, _, _) =>
def literal_(coreTypeName_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = {
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = term_.at_, t1_ = expected_, t2_ = ff.compiler.Syntax_.TConstructor(at_ = term_.at_, name_ = ff.compiler.Inference_.core_(name_ = coreTypeName_), generics_ = List()));
term_
}
pipe_dot(term_)({
case (_ : ff.compiler.Syntax_.EString) =>
literal_(coreTypeName_ = "String")
case (_ : ff.compiler.Syntax_.EChar) =>
literal_(coreTypeName_ = "Char")
case (_ : ff.compiler.Syntax_.EInt) =>
literal_(coreTypeName_ = "Int")
case (_ : ff.compiler.Syntax_.EFloat) =>
literal_(coreTypeName_ = "Float")
case (e_ : ff.compiler.Syntax_.EVariable) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Environment_.Instantiated, ff.compiler.Syntax_.Term](self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = e_.name_, typeArguments_ = e_.generics_), body_ = {(instantiated_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = instantiated_.scheme_.isVariable_, body_ = {() =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = instantiated_.scheme_.signature_.returnType_);
term_
}), body_ = {() =>
ff.compiler.Inference_.Inference_inferEtaExpansion(self_ = self_, environment_ = environment_, expected_ = expected_, at_ = e_.at_, signature_ = instantiated_.scheme_.signature_, term_ = term_)
})
}), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ("Symbol not in scope: " + e_.name_))
})
case (e_ : ff.compiler.Syntax_.EField) =>
val recordType_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val record_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = recordType_, term_ = e_.record_);
val e2_ : ff.compiler.Syntax_.Term = pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EField(at_ = _c.at_, record_ = record_, field_ = _c.field_)
});
pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = recordType_))({
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) if ff.core.String_.String_startsWith(self_ = name_, prefix_ = "Record$") =>
val fieldNames_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_dropFirst[ff.core.String_.String](self_ = ff.core.Array_.Array_getList[ff.core.String_.String](self_ = ff.core.String_.String_split(self_ = name_, char_ = '$')), count_ = 1);
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.Int_.Int, ff.compiler.Syntax_.Term](self_ = ff.core.Option_.Option_map[ff.core.Pair_.Pair[ff.core.Int_.Int, ff.core.String_.String], ff.core.Int_.Int](self_ = ff.core.List_.List_find[ff.core.Pair_.Pair[ff.core.Int_.Int, ff.core.String_.String]](self_ = ff.core.List_.List_pairs[ff.core.String_.String](self_ = fieldNames_), body_ = {(_w1) =>
(_w1.second_ == e_.field_)
}), body_ = {(_w1) =>
_w1.first_
}), body_ = {(index_) =>
val t1_ : ff.compiler.Syntax_.Type = ff.core.List_.List_expect[ff.compiler.Syntax_.Type](self_ = typeArguments_, index_ = index_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t1_);
e2_
}), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ((("No such field " + e_.field_) + " on type: ") + ff.compiler.Syntax_.Type_show(self_ = t_)))
})
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) =>
val methodName_ : ff.core.String_.String = ((name_ + "_") + e_.field_);
pipe_dot(ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = methodName_, typeArguments_ = typeArguments_))({
case (ff.core.Option_.Some(instantiated_)) if (!instantiated_.scheme_.isVariable_) =>
val signature_ : ff.compiler.Syntax_.Signature = pipe_dot(instantiated_.scheme_.signature_)({(_c) =>
ff.compiler.Syntax_.Signature(at_ = _c.at_, name_ = _c.name_, generics_ = _c.generics_, constraints_ = _c.constraints_, parameters_ = ff.core.List_.List_dropFirst[ff.compiler.Syntax_.Parameter](self_ = instantiated_.scheme_.signature_.parameters_, count_ = 1), returnType_ = _c.returnType_)
});
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = recordType_, t2_ = ff.core.List_.List_expect[ff.compiler.Syntax_.Parameter](self_ = instantiated_.scheme_.signature_.parameters_, index_ = 0).valueType_);
ff.compiler.Inference_.Inference_inferEtaExpansion(self_ = self_, environment_ = environment_, expected_ = expected_, at_ = e_.at_, signature_ = signature_, term_ = e2_)
case (ff.core.Option_.Some(instantiated_)) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = instantiated_.scheme_.signature_.returnType_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EField(at_ = _c.at_, record_ = record_, field_ = _c.field_)
})
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ((("No such field " + e_.field_) + " on type: ") + ff.compiler.Syntax_.Type_show(self_ = t_)))
})
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ((("No such field " + e_.field_) + " on unknown type: $") + index_))
})
case (e_ : ff.compiler.Syntax_.EWildcard) =>
ff.core.Option_.Option_expect[ff.compiler.Syntax_.Term](self_ = ff.core.Option_.Option_map[ff.compiler.Environment_.Instantiated, ff.compiler.Syntax_.Term](self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = ("_w" + e_.index_), typeArguments_ = List()), body_ = {(instantiated_) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = instantiated_.scheme_.signature_.returnType_);
term_
}))
case (ff.compiler.Syntax_.EList(at_, t_, items_)) =>
val listType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = term_.at_, name_ = ff.compiler.Inference_.core_(name_ = "List"), generics_ = List(t_));
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = at_, t1_ = expected_, t2_ = listType_);
ff.compiler.Syntax_.EList(at_ = at_, elementType_ = t_, items_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool], ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(item_, spread_)) =>
ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool](first_ = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Type](condition_ = spread_, body_ = {() =>
listType_
}), body_ = {() =>
t_
}), term_ = item_), second_ = spread_)
}))
case (ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
ff.compiler.Syntax_.ESequential(at_ = at_, before_ = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = at_), term_ = before_), after_ = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = expected_, term_ = after_))
case (e_ : ff.compiler.Syntax_.ELet) =>
val scheme_ : ff.compiler.Environment_.Scheme = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.True(), isMutable_ = e_.mutable_, signature_ = ff.compiler.Syntax_.Signature(at_ = e_.at_, name_ = e_.name_, generics_ = List(), constraints_ = List(), parameters_ = List(), returnType_ = e_.valueType_));
val environment2_ : ff.compiler.Environment_.Environment = pipe_dot(environment_)({(_c) =>
ff.compiler.Environment_.Environment(symbols_ = ff.core.Map_.Map_add[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = environment_.symbols_, key_ = e_.name_, value_ = scheme_))
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ELet(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = _c.valueType_, value_ = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = e_.valueType_, term_ = e_.value_), body_ = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment2_, expected_ = expected_, term_ = e_.body_))
})
case (ff.compiler.Syntax_.ELambda(at_, l_)) =>
val lambda_ : ff.compiler.Syntax_.Lambda = ff.compiler.Inference_.Inference_inferLambda(self_ = self_, environment_ = environment_, expected_ = expected_, lambda_ = l_);
ff.compiler.Syntax_.ELambda(at_ = at_, lambda_ = lambda_)
case (e_ : ff.compiler.Syntax_.EVariant) =>
val instantiated_ : ff.compiler.Environment_.Instantiated = ff.core.Option_.Option_else(self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = e_.name_, typeArguments_ = e_.typeArguments_), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Environment_.Instantiated](at_ = e_.at_, message_ = ("Symbol not in scope: " + e_.name_))
});
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = instantiated_.scheme_.signature_.returnType_);
val arguments_ : ff.core.Option_.Option[ff.core.List_.List[ff.compiler.Syntax_.Argument]] = ff.core.Option_.Option_map[ff.core.List_.List[ff.compiler.Syntax_.Argument], ff.core.List_.List[ff.compiler.Syntax_.Argument]](self_ = e_.arguments_, body_ = {(_w1) =>
ff.compiler.Inference_.Inference_inferArguments(self_ = self_, at_ = e_.at_, environment_ = environment_, parameters_ = instantiated_.scheme_.signature_.parameters_, arguments_ = _w1)
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EVariant(at_ = _c.at_, name_ = _c.name_, typeArguments_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type], ff.compiler.Syntax_.Type](self_ = instantiated_.typeArguments_, body_ = {(_w1) =>
_w1.second_
}), arguments_ = arguments_)
})
case (e_ : ff.compiler.Syntax_.EVariantIs) =>
val instantiated_ : ff.compiler.Environment_.Instantiated = ff.core.Option_.Option_else(self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = e_.name_, typeArguments_ = e_.typeArguments_), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Environment_.Instantiated](at_ = e_.at_, message_ = ("Symbol not in scope: " + e_.name_))
});
val parameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.List_.List_sortBy[ff.compiler.Syntax_.Parameter](self_ = instantiated_.scheme_.signature_.parameters_, body_ = {(_w1) =>
_w1.name_
});
val recordType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ("Record$" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = parameters_, body_ = {(_w1) =>
_w1.name_
}), separator_ = "$")), generics_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.compiler.Syntax_.Type](self_ = parameters_, body_ = {(_w1) =>
_w1.valueType_
}));
val functionType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = "Function$1", generics_ = List(instantiated_.scheme_.signature_.returnType_, ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ff.compiler.Inference_.core_(name_ = "Option"), generics_ = List(recordType_))));
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = functionType_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EVariantIs(at_ = _c.at_, name_ = _c.name_, typeArguments_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type], ff.compiler.Syntax_.Type](self_ = instantiated_.typeArguments_, body_ = {(_w1) =>
_w1.second_
}))
})
case (e_ : ff.compiler.Syntax_.ECopy) =>
val signature_ : ff.compiler.Syntax_.Signature = ff.core.Option_.Option_else(self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = e_.name_, typeArguments_ = List()), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Environment_.Instantiated](at_ = e_.at_, message_ = ("Symbol not in scope: " + e_.name_))
}).scheme_.signature_;
val parameterNames_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = signature_.parameters_, body_ = {(_w1) =>
_w1.name_
});
ff.core.Option_.Option_each[ff.compiler.Syntax_.Field](self_ = ff.core.List_.List_find[ff.compiler.Syntax_.Field](self_ = e_.arguments_, body_ = {(a_) =>
(!ff.core.List_.List_any[ff.core.String_.String](self_ = parameterNames_, body_ = {(_w1) =>
(_w1 == a_.name_)
}))
}), body_ = {
case (ff.compiler.Syntax_.Field(at_, name_, value_)) =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = ("Unknown parameter: " + name_));
ff.core.Unit_.Unit()
});
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.Argument](self_ = parameterNames_, body_ = {(name_) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Argument](self_ = ff.core.List_.List_find[ff.compiler.Syntax_.Field](self_ = e_.arguments_, body_ = {(_w1) =>
(_w1.name_ == name_)
}), body_ = {
case (ff.compiler.Syntax_.Field(at_, _, value_)) =>
ff.compiler.Syntax_.Argument(at_ = at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = name_), value_ = value_)
}), body_ = {() =>
ff.compiler.Syntax_.Argument(at_ = e_.at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = name_), value_ = ff.compiler.Syntax_.EField(at_ = e_.at_, record_ = ff.compiler.Syntax_.EVariable(at_ = e_.at_, name_ = "_c", generics_ = List(), instances_ = List()), field_ = name_))
})
});
val body_ : ff.compiler.Syntax_.Term = ff.compiler.Syntax_.EVariant(at_ = e_.at_, name_ = e_.name_, typeArguments_ = List(), arguments_ = ff.core.Option_.Some[ff.core.List_.List[ff.compiler.Syntax_.Argument]](value_ = arguments_));
val term_ : ff.compiler.Syntax_.Term = ff.compiler.Syntax_.EPipe(at_ = e_.at_, value_ = e_.record_, function_ = ff.compiler.Syntax_.ELambda(at_ = e_.at_, lambda_ = ff.compiler.Syntax_.Lambda(at_ = e_.at_, cases_ = List(ff.compiler.Syntax_.MatchCase(at_ = e_.at_, patterns_ = List(ff.compiler.Syntax_.PVariable(at_ = e_.at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = "_c"))), condition_ = ff.core.Option_.None[ff.compiler.Syntax_.Term](), body_ = body_)))));
ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = expected_, term_ = term_)
case (e_ : ff.compiler.Syntax_.EPipe) =>
val valueType_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val functionType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = "Function$1", generics_ = List(valueType_, expected_));
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = valueType_, term_ = e_.value_);
val function_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = functionType_, term_ = e_.function_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EPipe(at_ = _c.at_, value_ = value_, function_ = function_)
})
case (e_ : ff.compiler.Syntax_.ECall) =>
pipe_dot(e_.function_)({
case (ff.compiler.Syntax_.EVariable(variableAt_, x_, List(), List())) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ff.core.Option_.Option_any[ff.core.Char_.Char](self_ = ff.core.String_.String_first(self_ = x_), body_ = {(c_) =>
((c_ != '_') && (!ff.core.Char_.Char_isAsciiLetter(self_ = c_)))
}), body_ = {() =>
ff.compiler.Inference_.Inference_inferOperator(self_ = self_, environment_ = environment_, expected_ = expected_, operator_ = x_, term_ = term_)
}), body_ = {() =>
pipe_dot(ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = x_, typeArguments_ = e_.typeArguments_))({
case (ff.core.Option_.Some(instantiated_)) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = instantiated_.scheme_.isVariable_, body_ = {() =>
ff.compiler.Inference_.Inference_inferLambdaCall(self_ = self_, environment_ = environment_, expected_ = expected_, term_ = term_)
}), body_ = {() =>
val signature_ : ff.compiler.Syntax_.Signature = instantiated_.scheme_.signature_;
ff.compiler.Inference_.Inference_inferFunctionCall(self_ = self_, environment_ = environment_, expected_ = expected_, signature_ = signature_, instantiation_ = instantiated_.typeArguments_, term_ = term_, name_ = x_)
})
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = variableAt_, message_ = ("No such function: " + x_))
})
})
case (f_ : ff.compiler.Syntax_.EField) =>
val recordType_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = f_.at_);
val record_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = recordType_, term_ = f_.record_);
val e2_ : ff.compiler.Syntax_.Term = pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = pipe_dot(f_)({(_c) =>
ff.compiler.Syntax_.EField(at_ = _c.at_, record_ = record_, field_ = _c.field_)
}), typeArguments_ = _c.typeArguments_, arguments_ = _c.arguments_)
});
pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = recordType_))({
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeParameters_))) =>
val methodName_ : ff.core.String_.String = ((name_ + "_") + f_.field_);
pipe_dot(ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = f_.at_, symbol_ = methodName_, typeArguments_ = List()))({
case (ff.core.Option_.Some(instantiated_)) if (!instantiated_.scheme_.isVariable_) =>
ff.compiler.Inference_.Inference_inferMethodCall(self_ = self_, environment_ = environment_, expected_ = expected_, signature_ = instantiated_.scheme_.signature_, instantiation_ = instantiated_.typeArguments_, term_ = e2_, record_ = record_, name_ = methodName_)
case (ff.core.Option_.Some(instantiated_)) =>
ff.compiler.Inference_.Inference_inferLambdaCall(self_ = self_, environment_ = environment_, expected_ = expected_, term_ = e2_)
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = f_.at_, message_ = ((("No such field " + f_.field_) + " on type: ") + ff.compiler.Syntax_.Type_show(self_ = t_)))
})
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = f_.at_, message_ = ((("No such field " + f_.field_) + " on unknown type: $") + index_))
})
case (_) =>
ff.compiler.Inference_.Inference_inferLambdaCall(self_ = self_, environment_ = environment_, expected_ = expected_, term_ = term_)
})
case (e_ : ff.compiler.Syntax_.ERecord) =>
val fields_ : ff.core.List_.List[ff.compiler.Syntax_.Field] = ff.core.List_.List_sortBy[ff.compiler.Syntax_.Field](self_ = e_.fields_, body_ = {(_w1) =>
_w1.name_
});
val fieldTypes_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Type](self_ = fields_, body_ = {(_w1) =>
ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = _w1.at_)
});
val recordType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ("Record$" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.core.String_.String](self_ = fields_, body_ = {(_w1) =>
_w1.name_
}), separator_ = "$")), generics_ = fieldTypes_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = recordType_);
val newFields_ : ff.core.List_.List[ff.compiler.Syntax_.Field] = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Type], ff.compiler.Syntax_.Field](self_ = ff.core.List_.List_zip[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Type](self_ = fields_, that_ = fieldTypes_), body_ = {
case (ff.core.Pair_.Pair(field_, t_)) =>
pipe_dot(field_)({(_c) =>
ff.compiler.Syntax_.Field(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = field_.value_))
})
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ERecord(at_ = _c.at_, fields_ = newFields_)
})
case (ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Environment_.Scheme] = ff.core.List_.List_getMap[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme]](self_ = functions_, body_ = {(f_) =>
val scheme_ : ff.compiler.Environment_.Scheme = ff.compiler.Environment_.Scheme(isVariable_ = ff.core.Bool_.False(), isMutable_ = ff.core.Bool_.False(), signature_ = f_.signature_);
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Environment_.Scheme](first_ = f_.signature_.name_, second_ = scheme_)
}));
val environment2_ : ff.compiler.Environment_.Environment = pipe_dot(environment_)({(_c) =>
ff.compiler.Environment_.Environment(symbols_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = environment_.symbols_, that_ = functionMap_))
});
val newFunctions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = functions_, body_ = {(_w1) =>
ff.compiler.Inference_.Inference_inferFunctionDefinition(self_ = self_, environment_ = environment2_, definition_ = _w1)
});
val newBody_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment2_, expected_ = expected_, term_ = body_);
ff.compiler.Syntax_.EFunctions(at_ = at_, functions_ = newFunctions_, body_ = newBody_)
case (e_ : ff.compiler.Syntax_.EAssign) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Environment_.Instantiated, ff.compiler.Syntax_.Term](self_ = ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = e_.variable_, typeArguments_ = List()), body_ = {(instantiated_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = instantiated_.scheme_.isMutable_, body_ = {() =>
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferAssignment(self_ = self_, environment_ = environment_, expected_ = expected_, at_ = e_.at_, operator_ = e_.operator_, value_ = e_.value_, signature_ = instantiated_.scheme_.signature_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EAssign(at_ = _c.at_, operator_ = _c.operator_, variable_ = _c.variable_, value_ = value_)
})
}), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ("Symbol is not mutable: " + e_.variable_))
})
}), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ("Symbol not in scope: " + e_.variable_))
})
case (e_ : ff.compiler.Syntax_.EAssignField) =>
val recordType_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val record_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = recordType_, term_ = e_.record_);
pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = recordType_))({
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) if ff.core.String_.String_startsWith(self_ = name_, prefix_ = "Record$") =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ("Can't assign fields of anonymous records: " + e_.field_))
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) =>
val methodName_ : ff.core.String_.String = ((name_ + "_") + e_.field_);
pipe_dot(ff.compiler.Inference_.Inference_lookup(self_ = self_, environment_ = environment_, at_ = e_.at_, symbol_ = methodName_, typeArguments_ = typeArguments_))({
case (ff.core.Option_.Some(instantiated_)) if instantiated_.scheme_.isMutable_ =>
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferAssignment(self_ = self_, environment_ = environment_, expected_ = expected_, at_ = e_.at_, operator_ = e_.operator_, value_ = e_.value_, signature_ = instantiated_.scheme_.signature_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EAssignField(at_ = _c.at_, operator_ = _c.operator_, record_ = record_, field_ = _c.field_, value_ = value_)
})
case (ff.core.Option_.Some(instantiated_)) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ((("Can't assign an immutable field " + e_.field_) + " on type: ") + ff.compiler.Syntax_.Type_show(self_ = t_)))
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ((("No such field " + e_.field_) + " on type: ") + ff.compiler.Syntax_.Type_show(self_ = t_)))
})
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ((("No such field " + e_.field_) + " on unknown type: $") + index_))
})
})
}

def Inference_inferAssignment(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, at_ : ff.compiler.Syntax_.Location, operator_ : ff.core.String_.String, value_ : ff.compiler.Syntax_.Term, signature_ : ff.compiler.Syntax_.Signature) : ff.compiler.Syntax_.Term = (self_, environment_, expected_, at_, operator_, value_, signature_) match {
case (self_, _, _, _, _, _, _) =>
val t_ : ff.compiler.Syntax_.Type = signature_.returnType_;
ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ((operator_ == "+") || (operator_ == "-")), body_ = {() =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = at_, t1_ = t_, t2_ = ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = ff.compiler.Inference_.core_(name_ = "Int"), generics_ = List()));
ff.core.Unit_.Unit()
}), condition_ = {() =>
(operator_ != "")
}, body_ = {() =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = (("Only +=, -= and = assignments are supported. Got: " + operator_) + "="));
ff.core.Unit_.Unit()
});
val newValue_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = value_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = at_, t1_ = expected_, t2_ = ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = ff.compiler.Inference_.core_(name_ = "Unit"), generics_ = List()));
newValue_
}

def Inference_inferMethodCall(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, signature_ : ff.compiler.Syntax_.Signature, instantiation_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]], term_ : ff.compiler.Syntax_.Term, record_ : ff.compiler.Syntax_.Term, name_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = (self_, environment_, expected_, signature_, instantiation_, term_, record_, name_) match {
case (self_, _, _, _, _, _, _, _) =>
val e_ : {val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]} = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_[{val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]}](at_ = term_.at_, message_ = "Call expected")
});
val e2_ : ff.compiler.Syntax_.Term = pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = ff.compiler.Syntax_.EVariable(at_ = e_.at_, name_ = name_, generics_ = List(), instances_ = List()), typeArguments_ = _c.typeArguments_, arguments_ = (List(List(ff.compiler.Syntax_.Argument(at_ = record_.at_, name_ = ff.core.Option_.None[ff.core.String_.String](), value_ = record_)), e_.arguments_).flatten))
});
ff.compiler.Inference_.Inference_inferFunctionCall(self_ = self_, environment_ = environment_, expected_ = expected_, signature_ = signature_, instantiation_ = instantiation_, term_ = e2_, name_ = name_)
}

def Inference_inferFunctionCall(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, signature_ : ff.compiler.Syntax_.Signature, instantiation_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]], term_ : ff.compiler.Syntax_.Term, name_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = (self_, environment_, expected_, signature_, instantiation_, term_, name_) match {
case (self_, _, _, _, _, _, _) =>
val e_ : {val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]} = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_[{val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]}](at_ = term_.at_, message_ = "Call expected")
});
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = signature_.returnType_);
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = ff.compiler.Inference_.Inference_inferArguments(self_ = self_, at_ = e_.at_, environment_ = environment_, parameters_ = signature_.parameters_, arguments_ = e_.arguments_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = e_.function_, typeArguments_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type], ff.compiler.Syntax_.Type](self_ = instantiation_, body_ = {(_w1) =>
_w1.second_
}), arguments_ = arguments_)
})
}

def Inference_inferLambdaCall(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, environment_, expected_, term_) match {
case (self_, _, _, _) =>
val e_ : {val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]} = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_[{val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]}](at_ = term_.at_, message_ = "Call expected")
});
val argumentTypes_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Type](self_ = e_.arguments_, body_ = {(_w1) =>
ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = _w1.at_)
});
val functionType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ("Function$" + ff.core.List_.List_getSize[ff.compiler.Syntax_.Argument](self_ = e_.arguments_)), generics_ = (List(argumentTypes_, List(expected_)).flatten));
val function_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = functionType_, term_ = e_.function_);
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Type], ff.compiler.Syntax_.Argument](self_ = ff.core.List_.List_zip[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Type](self_ = e_.arguments_, that_ = argumentTypes_), body_ = {
case (ff.core.Pair_.Pair(argument_, t_)) =>
ff.core.Option_.Option_each[ff.core.String_.String](self_ = argument_.name_, body_ = {(name_) =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = argument_.at_, message_ = ("Named argument not allowed here: " + name_));
ff.core.Unit_.Unit()
});
pipe_dot(argument_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = argument_.value_))
})
});
ff.core.Option_.Option_each[ff.compiler.Syntax_.Type](self_ = ff.core.List_.List_first[ff.compiler.Syntax_.Type](self_ = e_.typeArguments_), body_ = {(typeArgument_) =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = typeArgument_.at_, message_ = "Type arguments not allowed here");
ff.core.Unit_.Unit()
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = function_, typeArguments_ = List(), arguments_ = arguments_)
})
}

def Inference_inferOperator(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, operator_ : ff.core.String_.String, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, environment_, expected_, operator_, term_) match {
case (self_, _, _, _, _) =>
val e_ : {val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]} = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_[{val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]; val at_ : ff.compiler.Syntax_.Location; val function_ : ff.compiler.Syntax_.Term; val tailCall_ : ff.core.Bool_.Bool; val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]}](at_ = term_.at_, message_ = "Call expected")
});
pipe_dot(e_.arguments_)({
case (List(a1_)) if (operator_ == "!") =>
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ff.compiler.Inference_.core_(name_ = "Bool"), generics_ = List());
val e1_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = a1_.value_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = _c.function_, typeArguments_ = _c.typeArguments_, arguments_ = List(pipe_dot(a1_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e1_)
})))
})
case (List(a1_)) if (operator_ == "-") =>
val t1_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val e1_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t1_, term_ = a1_.value_);
pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = t1_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "Float")) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t1_)
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "Int")) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t1_)
case (_) =>
ff.compiler.Inference_.fail_[ff.core.Unit_.Unit](at_ = e_.at_, message_ = "Operators on unknown types not currently supported")
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = _c.function_, typeArguments_ = _c.typeArguments_, arguments_ = List(pipe_dot(a1_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e1_)
})))
})
case (List(a1_, a2_)) if (operator_ == "++") =>
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val e1_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = a1_.value_);
val e2_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = a2_.value_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t_);
val name_ : ff.core.String_.String = pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = t_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, _)) =>
name_
case (_) =>
ff.compiler.Inference_.fail_[ff.core.String_.String](at_ = e_.at_, message_ = "Operators on unknown types not currently supported")
});
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = ((((name_ != ff.compiler.Inference_.core_(name_ = "List")) && (name_ != ff.compiler.Inference_.core_(name_ = "Array"))) && (name_ != ff.compiler.Inference_.core_(name_ = "Set"))) && (name_ != ff.compiler.Inference_.core_(name_ = "Map"))), body_ = {() =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = e_.at_, message_ = ("Operator ++ not currently supported for " + name_))
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = _c.function_, typeArguments_ = _c.typeArguments_, arguments_ = List(pipe_dot(a1_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e1_)
}), pipe_dot(a2_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e2_)
})))
})
case (List(a1_, a2_)) if ((operator_ == "||") || (operator_ == "&&")) =>
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ff.compiler.Inference_.core_(name_ = "Bool"), generics_ = List());
val e1_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = a1_.value_);
val e2_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = a2_.value_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t_);
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = _c.function_, typeArguments_ = _c.typeArguments_, arguments_ = List(pipe_dot(a1_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e1_)
}), pipe_dot(a2_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e2_)
})))
})
case (List(a1_, a2_)) if ((((((operator_ == "<") || (operator_ == ">")) || (operator_ == "<=")) || (operator_ == ">=")) || (operator_ == "==")) || (operator_ == "!=")) =>
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = e_.at_, name_ = ff.compiler.Inference_.core_(name_ = "Bool"), generics_ = List());
val t1_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val t2_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val e1_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t1_, term_ = a1_.value_);
val e2_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t2_, term_ = a2_.value_);
val magic_ : Function1[ff.compiler.Syntax_.Type, ff.core.Option_.Option[ff.core.String_.String]] = {(t_) =>
pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = t_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "String")) =>
ff.core.Option_.Some[ff.core.String_.String](value_ = "String")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "Float")) =>
ff.core.Option_.Some[ff.core.String_.String](value_ = "Float")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "Int")) =>
ff.core.Option_.Some[ff.core.String_.String](value_ = "Int")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "Char")) =>
ff.core.Option_.Some[ff.core.String_.String](value_ = "Char")
case (_) =>
ff.core.Option_.None[ff.core.String_.String]()
})
};
val chooseType_ : Function2[ff.core.Option_.Option[ff.core.String_.String], ff.core.Option_.Option[ff.core.String_.String], ff.core.Unit_.Unit] = {
case (ff.core.Option_.Some(_), _) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = t1_, t2_ = t2_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t_);
ff.core.Unit_.Unit()
case (_, ff.core.Option_.Some(_)) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = t2_, t2_ = t1_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t_);
ff.core.Unit_.Unit()
case (_, _) if ((operator_ == "==") || (operator_ == "!=")) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = t2_, t2_ = t1_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t_);
ff.core.Unit_.Unit()
case (ff.core.Option_.None(), ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = e_.at_, message_ = "Operators on unknown types not currently supported");
ff.core.Unit_.Unit()
};
chooseType_(magic_(t1_), magic_(t2_));
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = _c.function_, typeArguments_ = _c.typeArguments_, arguments_ = List(pipe_dot(a1_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e1_)
}), pipe_dot(a2_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e2_)
})))
})
case (List(a1_, a2_)) if ((((((operator_ == "+") || (operator_ == "-")) || (operator_ == "*")) || (operator_ == "/")) || (operator_ == "%")) || (operator_ == "^")) =>
val t1_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val t2_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = e_.at_);
val e1_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t1_, term_ = a1_.value_);
val e2_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t2_, term_ = a2_.value_);
val magic_ : Function1[ff.compiler.Syntax_.Type, ff.core.Option_.Option[ff.core.String_.String]] = {(t_) =>
pipe_dot(ff.compiler.Unification_.Unification_substitute(self_ = self_.unification_, type_ = t_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "Float")) =>
ff.core.Option_.Some[ff.core.String_.String](value_ = "Float")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_(name_ = "Int")) =>
ff.core.Option_.Some[ff.core.String_.String](value_ = "Int")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if ((operator_ == "+") && (name_ == ff.compiler.Inference_.core_(name_ = "String"))) =>
ff.core.Option_.Some[ff.core.String_.String](value_ = "String")
case (_) =>
ff.core.Option_.None[ff.core.String_.String]()
})
};
val chooseType_ : Function2[ff.core.Option_.Option[ff.core.String_.String], ff.core.Option_.Option[ff.core.String_.String], ff.core.Unit_.Unit] = {
case (ff.core.Option_.Some(n_), ff.core.Option_.Some(_)) if (n_ == "String") =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t1_);
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(_), ff.core.Option_.Some(n_)) if (n_ == "String") =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t2_);
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(n_), ff.core.Option_.Some(_)) if (n_ == "Float") =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t1_);
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(_), ff.core.Option_.Some(n_)) if (n_ == "Float") =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t2_);
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(n_), ff.core.Option_.Some(_)) if (n_ == "Int") =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t1_);
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(_), ff.core.Option_.Some(n_)) if (n_ == "Int") =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t2_);
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(_), ff.core.Option_.None()) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = t1_, t2_ = t2_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t1_);
ff.core.Unit_.Unit()
case (ff.core.Option_.None(), ff.core.Option_.Some(_)) =>
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = t2_, t2_ = t1_);
ff.compiler.Unification_.Unification_unify(self_ = self_.unification_, at_ = e_.at_, t1_ = expected_, t2_ = t2_);
ff.core.Unit_.Unit()
case (ff.core.Option_.None(), ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = e_.at_, message_ = "Operators on unknown types not currently supported");
ff.core.Unit_.Unit()
};
chooseType_(magic_(t1_), magic_(t2_));
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = _c.function_, typeArguments_ = _c.typeArguments_, arguments_ = List(pipe_dot(a1_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e1_)
}), pipe_dot(a2_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = e2_)
})))
})
case (_) =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ("Unknown operator: " + operator_))
})
}

def Inference_inferEtaExpansion(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, at_ : ff.compiler.Syntax_.Location, signature_ : ff.compiler.Syntax_.Signature, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, environment_, expected_, at_, signature_, term_) match {
case (self_, _, _, _, _, _) =>
val parameters_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = ff.core.List_.List_filter[ff.compiler.Syntax_.Parameter](self_ = signature_.parameters_, body_ = {(_w1) =>
ff.core.Option_.Option_getEmpty[ff.compiler.Syntax_.Term](self_ = _w1.default_)
}), body_ = {(p_) =>
p_.name_
});
val body_ : ff.compiler.Syntax_.Term = ff.compiler.Syntax_.ECall(at_ = at_, tailCall_ = ff.core.Bool_.False(), function_ = term_, typeArguments_ = List(), arguments_ = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.Argument](self_ = parameters_, body_ = {(x_) =>
ff.compiler.Syntax_.Argument(at_ = at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = x_), value_ = ff.compiler.Syntax_.EVariable(at_ = at_, name_ = x_, generics_ = List(), instances_ = List()))
}));
val lambda_ : ff.compiler.Syntax_.Term = ff.compiler.Syntax_.ELambda(at_ = at_, lambda_ = ff.compiler.Syntax_.Lambda(at_ = at_, cases_ = List(ff.compiler.Syntax_.MatchCase(at_ = at_, patterns_ = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern](self_ = parameters_, body_ = {(_w1) =>
ff.compiler.Syntax_.PVariable(at_ = at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = _w1))
}), condition_ = ff.core.Option_.None[ff.compiler.Syntax_.Term](), body_ = body_))));
ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = expected_, term_ = lambda_)
}

def Inference_inferArguments(self_ : ff.compiler.Inference_.Inference, at_ : ff.compiler.Syntax_.Location, environment_ : ff.compiler.Environment_.Environment, parameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter], arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]) : ff.core.List_.List[ff.compiler.Syntax_.Argument] = (self_, at_, environment_, parameters_, arguments_) match {
case (self_, _, _, _, _) =>
var remainingArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = arguments_;
val newArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.compiler.Syntax_.Argument](self_ = parameters_, body_ = {(p_) =>
val t_ : ff.compiler.Syntax_.Type = p_.valueType_;
def defaultArgument_() : ff.compiler.Syntax_.Argument = {
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Argument](self_ = p_.default_, body_ = {(e_) =>
val e2_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = e_);
ff.compiler.Syntax_.Argument(at_ = at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = p_.name_), value_ = e2_)
}), body_ = {() =>
ff.compiler.Inference_.fail_[ff.compiler.Syntax_.Argument](at_ = at_, message_ = ("Missing argument: " + p_.name_))
})
}
pipe_dot(remainingArguments_)({
case (List()) =>
defaultArgument_()
case (List(ff.compiler.Syntax_.Argument(at_, ff.core.Option_.None(), e_), remaining__seq @ _*)) =>
val remaining_ = remaining__seq.toList;
remainingArguments_ = remaining_;
val e2_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = e_);
ff.compiler.Syntax_.Argument(at_ = at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = p_.name_), value_ = e2_)
case (_) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Argument](self_ = ff.core.List_.List_find[ff.compiler.Syntax_.Argument](self_ = remainingArguments_, body_ = {(_w1) =>
ff.core.Option_.Option_contains[ff.core.String_.String](self_ = _w1.name_, value_ = p_.name_)
}), body_ = {
case (ff.compiler.Syntax_.Argument(at_, _, e_)) =>
remainingArguments_ = ff.core.List_.List_filter[ff.compiler.Syntax_.Argument](self_ = remainingArguments_, body_ = {(_w1) =>
(!ff.core.Option_.Option_contains[ff.core.String_.String](self_ = _w1.name_, value_ = p_.name_))
});
val e2_ : ff.compiler.Syntax_.Term = ff.compiler.Inference_.Inference_inferTerm(self_ = self_, environment_ = environment_, expected_ = t_, term_ = e_);
ff.compiler.Syntax_.Argument(at_ = at_, name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = p_.name_), value_ = e2_)
}), body_ = {() =>
defaultArgument_()
})
})
});
ff.core.Option_.Option_each[ff.compiler.Syntax_.Argument](self_ = ff.core.List_.List_first[ff.compiler.Syntax_.Argument](self_ = remainingArguments_), body_ = {
case (ff.compiler.Syntax_.Argument(at_, ff.core.Option_.None(), _)) =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = "Too many arguments");
ff.core.Unit_.Unit()
case (ff.compiler.Syntax_.Argument(at_, ff.core.Option_.Some(name_), _)) =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = ("Unknown argument: " + name_));
ff.core.Unit_.Unit()
});
newArguments_
}

def Inference_lookup(self_ : ff.compiler.Inference_.Inference, environment_ : ff.compiler.Environment_.Environment, at_ : ff.compiler.Syntax_.Location, symbol_ : ff.core.String_.String, typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]) : ff.core.Option_.Option[ff.compiler.Environment_.Instantiated] = (self_, environment_, at_, symbol_, typeArguments_) match {
case (self_, _, _, _, _) =>
ff.core.Option_.Option_map[ff.compiler.Environment_.Scheme, ff.compiler.Environment_.Instantiated](self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.compiler.Environment_.Scheme](self_ = environment_.symbols_, key_ = symbol_), body_ = {(scheme_) =>
val instantiation_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]]](condition_ = (!ff.core.List_.List_getEmpty[ff.compiler.Syntax_.Type](self_ = typeArguments_)), body_ = {() =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (ff.core.List_.List_getSize[ff.core.String_.String](self_ = scheme_.signature_.generics_) != ff.core.List_.List_getSize[ff.compiler.Syntax_.Type](self_ = typeArguments_)), body_ = {() =>
ff.compiler.Inference_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = ((((("Wrong number of type parameters for " + symbol_) + ", expected ") + ff.core.List_.List_getSize[ff.core.String_.String](self_ = scheme_.signature_.generics_)) + ", got ") + ff.core.List_.List_getSize[ff.compiler.Syntax_.Type](self_ = typeArguments_)))
});
ff.core.List_.List_zip[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = scheme_.signature_.generics_, that_ = typeArguments_)
}), body_ = {() =>
ff.core.List_.List_map[ff.core.String_.String, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = scheme_.signature_.generics_, body_ = {(name_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type](first_ = name_, second_ = ff.compiler.Unification_.Unification_freshTypeVariable(self_ = self_.unification_, at_ = at_))
})
});
val instantiationMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type] = ff.core.List_.List_getMap[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = instantiation_);
val parameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.compiler.Syntax_.Parameter](self_ = scheme_.signature_.parameters_, body_ = {(p_) =>
pipe_dot(p_)({(_c) =>
ff.compiler.Syntax_.Parameter(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = ff.compiler.Unification_.Unification_instantiate(self_ = self_.unification_, instantiation_ = instantiationMap_, type_ = p_.valueType_), default_ = _c.default_)
})
});
val returnType_ : ff.compiler.Syntax_.Type = ff.compiler.Unification_.Unification_instantiate(self_ = self_.unification_, instantiation_ = instantiationMap_, type_ = scheme_.signature_.returnType_);
val signature_ : ff.compiler.Syntax_.Signature = pipe_dot(scheme_.signature_)({(_c) =>
ff.compiler.Syntax_.Signature(at_ = _c.at_, name_ = _c.name_, generics_ = List(), constraints_ = List(), parameters_ = parameters_, returnType_ = returnType_)
});
ff.compiler.Environment_.Instantiated(typeArguments_ = instantiation_, scheme_ = pipe_dot(scheme_)({(_c) =>
ff.compiler.Environment_.Scheme(isVariable_ = _c.isVariable_, isMutable_ = _c.isMutable_, signature_ = signature_)
}))
})
}


}
