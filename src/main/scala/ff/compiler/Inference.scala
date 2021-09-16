package ff.compiler
import ff.compiler.Environment_._

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
ff.compiler.Inference_.Inference(unification_ = ff.compiler.Unification_.make_(instances_))
}

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_(((message_ + " ") + at_.show_()))
}

def core_(name_ : ff.core.String_.String) : ff.core.String_.String = {
((("ff:core/" + name_) + ".") + name_)
}
implicit class Inference_extend0(self_ : ff.compiler.Inference_.Inference) {

def inferModule_(module_ : ff.compiler.Syntax_.Module, otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Syntax_.Module = {
val environment_ = ff.compiler.Environment_.make_(module_, otherModules_);
val lets_ = module_.lets_.map_({(_w1) =>
self_.inferLetDefinition_(environment_, _w1)
});
val functions_ = module_.functions_.map_({(_w1) =>
self_.inferFunctionDefinition_(environment_, _w1)
});
val extends_ = module_.extends_.map_({(_w1) =>
self_.inferExtendDefinition_(environment_, _w1)
});
module_.copy(extends_ = extends_, lets_ = lets_, functions_ = functions_)
}

def inferLetDefinition_(environment_ : ff.compiler.Environment_.Environment, definition_ : ff.compiler.Syntax_.DLet) : ff.compiler.Syntax_.DLet = {
val value_ = self_.inferTerm_(environment_, definition_.variableType_, definition_.value_);
definition_.copy(value_ = value_)
}

def inferExtendDefinition_(environment_ : ff.compiler.Environment_.Environment, definition_ : ff.compiler.Syntax_.DExtend) : ff.compiler.Syntax_.DExtend = {
val selfParameter_ = ff.compiler.Syntax_.Parameter(at_ = definition_.at_, mutable_ = ff.core.Bool_.False(), name_ = definition_.name_, valueType_ = definition_.type_, default_ = ff.core.Option_.None());
val functions_ = definition_.methods_.map_({(method_) =>
val signature_ = method_.signature_.copy(generics_ = (definition_.generics_ ++ method_.signature_.generics_), constraints_ = (definition_.constraints_ ++ method_.signature_.constraints_), parameters_ = (List(List(selfParameter_), method_.signature_.parameters_).flatten));
val lambda_ = method_.body_.copy(cases_ = method_.body_.cases_.map_({(case_) =>
val selfPattern_ = ff.compiler.Syntax_.PVariable(method_.at_, ff.core.Option_.Some(definition_.name_));
case_.copy(patterns_ = (List(List(selfPattern_), case_.patterns_).flatten))
}));
val function_ = method_.copy(signature_ = signature_, body_ = lambda_);
self_.inferFunctionDefinition_(environment_, function_)
});
definition_.copy(methods_ = functions_)
}

def inferFunctionDefinition_(environment_ : ff.compiler.Environment_.Environment, definition_ : ff.compiler.Syntax_.DFunction) : ff.compiler.Syntax_.DFunction = {
val parameters_ = definition_.signature_.parameters_.map_({(p_) =>
val scheme_ = ff.compiler.Environment_.Scheme(ff.core.Bool_.True(), ff.core.Bool_.False(), ff.compiler.Syntax_.Signature(p_.at_, p_.name_, List(), List(), List(), p_.valueType_));
ff.core.Pair_.Pair(p_.name_, scheme_)
});
val parameterMap_ = parameters_.getMap_();
val environment2_ = environment_.copy(symbols_ = (environment_.symbols_ ++ parameterMap_));
val functionType_ = ff.compiler.Syntax_.TConstructor(definition_.at_, ("Function$" + parameters_.getSize_()), (List(parameters_.map_({(_w1) =>
_w1.second_.signature_.returnType_
}), List(definition_.signature_.returnType_)).flatten));
definition_.copy(body_ = self_.inferLambda_(environment2_, functionType_, definition_.body_))
}

def inferLambda_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, lambda_ : ff.compiler.Syntax_.Lambda) : ff.compiler.Syntax_.Lambda = {
val unitName_ = ff.compiler.Inference_.core_("Unit");
val returnsUnit_ = pipe_dot(self_.unification_.substitute_(expected_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, ts_)) if name_.startsWith_("Function$") =>
pipe_dot(ts_.expectLast_())({
case (ff.compiler.Syntax_.TConstructor(_, n_, List())) =>
(n_ == unitName_)
case (_) =>
ff.core.Bool_.False()
})
case (_) =>
ff.core.Bool_.False()
});
val cases_ = ff.core.Core_.if_((!returnsUnit_), {() =>
lambda_.cases_
}).else_({() =>
lambda_.cases_.map_({(c_) =>
c_.copy(body_ = ff.compiler.Syntax_.ESequential(c_.at_, c_.body_, ff.compiler.Syntax_.EVariant(c_.at_, unitName_, List(), ff.core.Option_.None())))
})
});
lambda_.copy(cases_ = cases_.map_({(_w1) =>
self_.inferMatchCase_(environment_, expected_, _w1)
}))
}

def inferMatchCase_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, case_ : ff.compiler.Syntax_.MatchCase) : ff.compiler.Syntax_.MatchCase = {
val parameterTypes_ = case_.patterns_.map_({(_w1) =>
self_.unification_.freshTypeVariable_(_w1.at_)
});
val returnType_ = self_.unification_.freshTypeVariable_(case_.at_);
val functionType_ = ff.compiler.Syntax_.TConstructor(case_.at_, ("Function$" + case_.patterns_.getSize_()), (List(parameterTypes_, List(returnType_)).flatten));
self_.unification_.unify_(case_.at_, expected_, functionType_);
val newEnvironment_ = parameterTypes_.zip_(case_.patterns_).foldLeft_(environment_)({
case (environment1_, ff.core.Pair_.Pair(t_, c_)) =>
val symbols_ = self_.inferPattern_(environment_, t_, c_).map_({
case (ff.core.Pair_.Pair(name_, type_)) =>
ff.core.Pair_.Pair(name_, ff.compiler.Environment_.Scheme(ff.core.Bool_.True(), ff.core.Bool_.False(), ff.compiler.Syntax_.Signature(c_.at_, name_, List(), List(), List(), type_)))
});
ff.compiler.Environment_.Environment((environment1_.symbols_ ++ symbols_))
});
val condition_ = case_.condition_.map_({(e_) =>
self_.inferTerm_(newEnvironment_, ff.compiler.Syntax_.TConstructor(e_.at_, ff.compiler.Inference_.core_("Bool"), List()), e_)
});
val body_ = self_.inferTerm_(newEnvironment_, returnType_, case_.body_);
case_.copy(condition_ = condition_, body_ = body_)
}

def inferPattern_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Type] = {
pipe_dot(pattern_)({
case (ff.compiler.Syntax_.PVariable(at_, ff.core.Option_.None())) =>
ff.core.Map_.empty_()
case (ff.compiler.Syntax_.PVariable(at_, ff.core.Option_.Some(name_))) =>
List(ff.core.Pair_.Pair(name_, expected_)).getMap_()
case (ff.compiler.Syntax_.PAlias(at_, pattern_, variable_)) =>
self_.inferPattern_(environment_, expected_, pattern_).add_(variable_, expected_)
case (ff.compiler.Syntax_.PList(at_, t_, items_)) =>
val listType_ = ff.compiler.Syntax_.TConstructor(at_, ff.compiler.Inference_.core_("List"), List(t_));
self_.unification_.unify_(at_, expected_, listType_);
items_.map_({
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.False())) =>
self_.inferPattern_(environment_, t_, item_)
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.True())) =>
self_.inferPattern_(environment_, listType_, item_)
}).foldLeft_(ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Type]())({(_w1, _w2) =>
(_w1 ++ _w2)
})
case (ff.compiler.Syntax_.PVariantAs(at_, name_, ff.core.Option_.None())) =>
val instantiated_ = self_.lookup_(environment_, at_, name_, List()).else_({() =>
ff.compiler.Inference_.fail_(at_, ("No such variant: " + name_))
});
ff.core.Map_.empty_()
case (ff.compiler.Syntax_.PVariantAs(at_, name_, ff.core.Option_.Some(variable_))) =>
val instantiated_ = self_.lookup_(environment_, at_, name_, List()).else_({() =>
ff.compiler.Inference_.fail_(at_, ("No such variant: " + name_))
});
self_.unification_.unify_(at_, expected_, instantiated_.scheme_.signature_.returnType_);
val parameters_ = instantiated_.scheme_.signature_.parameters_.sortBy_({(_w1) =>
_w1.name_
});
val recordType_ = ff.compiler.Syntax_.TConstructor(at_, ("Record$" + parameters_.map_({(_w1) =>
_w1.name_
}).join_("$")), parameters_.map_({(_w1) =>
_w1.valueType_
}));
List(ff.core.Pair_.Pair(variable_, recordType_)).getMap_()
case (ff.compiler.Syntax_.PVariant(at_, name_, patterns_)) =>
val instantiated_ = self_.lookup_(environment_, at_, name_, List()).else_({() =>
ff.compiler.Inference_.fail_(at_, ("No such variant: " + name_))
});
self_.unification_.unify_(at_, expected_, instantiated_.scheme_.signature_.returnType_);
patterns_.zip_(instantiated_.scheme_.signature_.parameters_).map_({
case (ff.core.Pair_.Pair(pattern_, parameter_)) =>
self_.inferPattern_(environment_, parameter_.valueType_, pattern_)
}).foldLeft_(ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Type]())({(_w1, _w2) =>
(_w1 ++ _w2)
})
})
}

def inferTerm_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = {
def literal_(coreTypeName_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = {
self_.unification_.unify_(term_.at_, expected_, ff.compiler.Syntax_.TConstructor(term_.at_, ff.compiler.Inference_.core_(coreTypeName_), List()));
term_
}
pipe_dot(term_)({
case (_ : ff.compiler.Syntax_.EString) =>
literal_("String")
case (_ : ff.compiler.Syntax_.EChar) =>
literal_("Char")
case (_ : ff.compiler.Syntax_.EInt) =>
literal_("Int")
case (_ : ff.compiler.Syntax_.EFloat) =>
literal_("Float")
case (e_ : ff.compiler.Syntax_.EVariable) =>
self_.lookup_(environment_, e_.at_, e_.name_, e_.generics_).map_({(instantiated_) =>
ff.core.Core_.if_(instantiated_.scheme_.isVariable_, {() =>
self_.unification_.unify_(e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
term_
}).else_({() =>
self_.inferEtaExpansion_(environment_, expected_, e_.at_, instantiated_.scheme_.signature_, term_)
})
}).else_({() =>
ff.compiler.Inference_.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
})
case (e_ : ff.compiler.Syntax_.EField) =>
val recordType_ = self_.unification_.freshTypeVariable_(e_.at_);
val record_ = self_.inferTerm_(environment_, recordType_, e_.record_);
val e2_ = e_.copy(record_ = record_);
pipe_dot(self_.unification_.substitute_(recordType_))({
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) if name_.startsWith_("Record$") =>
val fieldNames_ = name_.split_('$').getList_().dropFirst_(1);
fieldNames_.pairs_().find_({(_w1) =>
(_w1.second_ == e_.field_)
}).map_({(_w1) =>
_w1.first_
}).map_({(index_) =>
val t1_ = typeArguments_.expect_(index_);
self_.unification_.unify_(e_.at_, expected_, t1_);
e2_
}).else_({() =>
ff.compiler.Inference_.fail_(e_.at_, ((("No such field " + e_.field_) + " on type: ") + t_.show_()))
})
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) =>
val methodName_ = ((name_ + "_") + e_.field_);
pipe_dot(self_.lookup_(environment_, e_.at_, methodName_, typeArguments_))({
case (ff.core.Option_.Some(instantiated_)) if (!instantiated_.scheme_.isVariable_) =>
val signature_ = instantiated_.scheme_.signature_.copy(parameters_ = instantiated_.scheme_.signature_.parameters_.dropFirst_(1));
self_.unification_.unify_(e_.at_, recordType_, instantiated_.scheme_.signature_.parameters_.expect_(0).valueType_);
self_.inferEtaExpansion_(environment_, expected_, e_.at_, signature_, e2_)
case (ff.core.Option_.Some(instantiated_)) =>
self_.unification_.unify_(e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
e_.copy(record_ = record_)
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_(e_.at_, ((("No such field " + e_.field_) + " on type: ") + t_.show_()))
})
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
ff.compiler.Inference_.fail_(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_))
})
case (e_ : ff.compiler.Syntax_.EWildcard) =>
self_.lookup_(environment_, e_.at_, ("_w" + e_.index_), List()).map_({(instantiated_) =>
self_.unification_.unify_(e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
term_
}).expect_()
case (ff.compiler.Syntax_.EList(at_, t_, items_)) =>
val listType_ = ff.compiler.Syntax_.TConstructor(term_.at_, ff.compiler.Inference_.core_("List"), List(t_));
self_.unification_.unify_(at_, expected_, listType_);
ff.compiler.Syntax_.EList(at_, t_, items_.map_({
case (ff.core.Pair_.Pair(item_, spread_)) =>
ff.core.Pair_.Pair(self_.inferTerm_(environment_, ff.core.Core_.if_(spread_, {() =>
listType_
}).else_({() =>
t_
}), item_), spread_)
}))
case (ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
ff.compiler.Syntax_.ESequential(at_ = at_, before_ = self_.inferTerm_(environment_, self_.unification_.freshTypeVariable_(at_), before_), after_ = self_.inferTerm_(environment_, expected_, after_))
case (e_ : ff.compiler.Syntax_.ELet) =>
val scheme_ = ff.compiler.Environment_.Scheme(ff.core.Bool_.True(), e_.mutable_, ff.compiler.Syntax_.Signature(e_.at_, e_.name_, List(), List(), List(), e_.valueType_));
val environment2_ = environment_.copy(symbols_ = environment_.symbols_.add_(e_.name_, scheme_));
e_.copy(value_ = self_.inferTerm_(environment_, e_.valueType_, e_.value_), body_ = self_.inferTerm_(environment2_, expected_, e_.body_))
case (ff.compiler.Syntax_.ELambda(at_, l_)) =>
val lambda_ = self_.inferLambda_(environment_, expected_, l_);
ff.compiler.Syntax_.ELambda(at_, lambda_)
case (e_ : ff.compiler.Syntax_.EVariant) =>
val instantiated_ = self_.lookup_(environment_, e_.at_, e_.name_, e_.typeArguments_).else_({() =>
ff.compiler.Inference_.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
});
self_.unification_.unify_(e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
val arguments_ = e_.arguments_.map_({(_w1) =>
self_.inferArguments_(e_.at_, environment_, instantiated_.scheme_.signature_.parameters_, _w1)
});
e_.copy(typeArguments_ = instantiated_.typeArguments_.map_({(_w1) =>
_w1.second_
}), arguments_ = arguments_)
case (e_ : ff.compiler.Syntax_.EVariantIs) =>
val instantiated_ = self_.lookup_(environment_, e_.at_, e_.name_, e_.typeArguments_).else_({() =>
ff.compiler.Inference_.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
});
val parameters_ = instantiated_.scheme_.signature_.parameters_.sortBy_({(_w1) =>
_w1.name_
});
val recordType_ = ff.compiler.Syntax_.TConstructor(e_.at_, ("Record$" + parameters_.map_({(_w1) =>
_w1.name_
}).join_("$")), parameters_.map_({(_w1) =>
_w1.valueType_
}));
val functionType_ = ff.compiler.Syntax_.TConstructor(e_.at_, "Function$1", List(instantiated_.scheme_.signature_.returnType_, ff.compiler.Syntax_.TConstructor(e_.at_, ff.compiler.Inference_.core_("Option"), List(recordType_))));
self_.unification_.unify_(e_.at_, expected_, functionType_);
e_.copy(typeArguments_ = instantiated_.typeArguments_.map_({(_w1) =>
_w1.second_
}))
case (e_ : ff.compiler.Syntax_.ECopy) =>
val signature_ = self_.lookup_(environment_, e_.at_, e_.name_, List()).else_({() =>
ff.compiler.Inference_.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
}).scheme_.signature_;
val parameterNames_ = signature_.parameters_.map_({(_w1) =>
_w1.name_
});
e_.arguments_.find_({(a_) =>
(!parameterNames_.any_({(_w1) =>
(_w1 == a_.name_)
}))
}).each_({
case (ff.compiler.Syntax_.Field(at_, name_, value_)) =>
ff.compiler.Inference_.fail_(at_, ("Unknown parameter: " + name_))
});
val arguments_ = parameterNames_.map_({(name_) =>
e_.arguments_.find_({(_w1) =>
(_w1.name_ == name_)
}).map_({
case (ff.compiler.Syntax_.Field(at_, _, value_)) =>
ff.compiler.Syntax_.Argument(at_, ff.core.Option_.Some(name_), value_)
}).else_({() =>
ff.compiler.Syntax_.Argument(e_.at_, ff.core.Option_.Some(name_), ff.compiler.Syntax_.EField(e_.at_, ff.compiler.Syntax_.EVariable(e_.at_, "_c", List(), List()), name_))
})
});
val body_ = ff.compiler.Syntax_.EVariant(e_.at_, e_.name_, List(), ff.core.Option_.Some(arguments_));
val term_ = ff.compiler.Syntax_.EPipe(e_.at_, e_.record_, ff.compiler.Syntax_.ELambda(e_.at_, ff.compiler.Syntax_.Lambda(e_.at_, List(ff.compiler.Syntax_.MatchCase(e_.at_, List(ff.compiler.Syntax_.PVariable(e_.at_, ff.core.Option_.Some("_c"))), ff.core.Option_.None(), body_)))));
self_.inferTerm_(environment_, expected_, term_)
case (e_ : ff.compiler.Syntax_.EPipe) =>
val valueType_ = self_.unification_.freshTypeVariable_(e_.at_);
val functionType_ = ff.compiler.Syntax_.TConstructor(e_.at_, "Function$1", List(valueType_, expected_));
val value_ = self_.inferTerm_(environment_, valueType_, e_.value_);
val function_ = self_.inferTerm_(environment_, functionType_, e_.function_);
e_.copy(value_ = value_, function_ = function_)
case (e_ : ff.compiler.Syntax_.ECall) =>
pipe_dot(e_.function_)({
case (ff.compiler.Syntax_.EVariable(variableAt_, x_, List(), List())) =>
ff.core.Core_.if_(x_.first_().any_({(c_) =>
((c_ != '_') && (!c_.getIsLetter_()))
}), {() =>
self_.inferOperator_(environment_, expected_, x_, term_)
}).else_({() =>
pipe_dot(self_.lookup_(environment_, e_.at_, x_, e_.typeArguments_))({
case (ff.core.Option_.Some(instantiated_)) =>
ff.core.Core_.if_(instantiated_.scheme_.isVariable_, {() =>
self_.inferLambdaCall_(environment_, expected_, term_)
}).else_({() =>
val signature_ = instantiated_.scheme_.signature_;
self_.inferFunctionCall_(environment_, expected_, signature_, instantiated_.typeArguments_, term_, x_)
})
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_(variableAt_, ("No such function: " + x_))
})
})
case (f_ : ff.compiler.Syntax_.EField) =>
val recordType_ = self_.unification_.freshTypeVariable_(f_.at_);
val record_ = self_.inferTerm_(environment_, recordType_, f_.record_);
val e2_ = e_.copy(function_ = f_.copy(record_ = record_));
pipe_dot(self_.unification_.substitute_(recordType_))({
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeParameters_))) =>
val methodName_ = ((name_ + "_") + f_.field_);
pipe_dot(self_.lookup_(environment_, f_.at_, methodName_, List()))({
case (ff.core.Option_.Some(instantiated_)) if (!instantiated_.scheme_.isVariable_) =>
self_.inferMethodCall_(environment_, expected_, instantiated_.scheme_.signature_, instantiated_.typeArguments_, e2_, record_, methodName_)
case (ff.core.Option_.Some(instantiated_)) =>
self_.inferLambdaCall_(environment_, expected_, e2_)
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_(f_.at_, ((("No such field " + f_.field_) + " on type: ") + t_.show_()))
})
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
ff.compiler.Inference_.fail_(f_.at_, ((("No such field " + f_.field_) + " on unknown type: $") + index_))
})
case (_) =>
self_.inferLambdaCall_(environment_, expected_, term_)
})
case (e_ : ff.compiler.Syntax_.ERecord) =>
val fields_ = e_.fields_.sortBy_({(_w1) =>
_w1.name_
});
val fieldTypes_ = fields_.map_({(_w1) =>
self_.unification_.freshTypeVariable_(_w1.at_)
});
val recordType_ = ff.compiler.Syntax_.TConstructor(e_.at_, ("Record$" + fields_.map_({(_w1) =>
_w1.name_
}).join_("$")), fieldTypes_);
self_.unification_.unify_(e_.at_, expected_, recordType_);
val newFields_ = fields_.zip_(fieldTypes_).map_({
case (ff.core.Pair_.Pair(field_, t_)) =>
field_.copy(value_ = self_.inferTerm_(environment_, t_, field_.value_))
});
e_.copy(fields_ = newFields_)
case (ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionMap_ = functions_.map_({(f_) =>
val scheme_ = ff.compiler.Environment_.Scheme(ff.core.Bool_.False(), ff.core.Bool_.False(), f_.signature_);
ff.core.Pair_.Pair(f_.signature_.name_, scheme_)
}).getMap_();
val environment2_ = environment_.copy(symbols_ = (environment_.symbols_ ++ functionMap_));
val newFunctions_ = functions_.map_({(_w1) =>
self_.inferFunctionDefinition_(environment2_, _w1)
});
val newBody_ = self_.inferTerm_(environment2_, expected_, body_);
ff.compiler.Syntax_.EFunctions(at_ = at_, functions_ = newFunctions_, body_ = newBody_)
case (e_ : ff.compiler.Syntax_.EAssign) =>
self_.lookup_(environment_, e_.at_, e_.variable_, List()).map_({(instantiated_) =>
ff.core.Core_.if_(instantiated_.scheme_.isMutable_, {() =>
val value_ = self_.inferAssignment_(environment_ = environment_, expected_ = expected_, at_ = e_.at_, operator_ = e_.operator_, value_ = e_.value_, signature_ = instantiated_.scheme_.signature_);
e_.copy(value_ = value_)
}).else_({() =>
ff.compiler.Inference_.fail_(e_.at_, ("Symbol is not mutable: " + e_.variable_))
})
}).else_({() =>
ff.compiler.Inference_.fail_(e_.at_, ("Symbol not in scope: " + e_.variable_))
})
case (e_ : ff.compiler.Syntax_.EAssignField) =>
val recordType_ = self_.unification_.freshTypeVariable_(e_.at_);
val record_ = self_.inferTerm_(environment_, recordType_, e_.record_);
pipe_dot(self_.unification_.substitute_(recordType_))({
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) if name_.startsWith_("Record$") =>
ff.compiler.Inference_.fail_(e_.at_, ("Can't assign fields of anonymous records: " + e_.field_))
case (t_ @ (ff.compiler.Syntax_.TConstructor(_, name_, typeArguments_))) =>
val methodName_ = ((name_ + "_") + e_.field_);
pipe_dot(self_.lookup_(environment_, e_.at_, methodName_, typeArguments_))({
case (ff.core.Option_.Some(instantiated_)) if instantiated_.scheme_.isMutable_ =>
val value_ = self_.inferAssignment_(environment_ = environment_, expected_ = expected_, at_ = e_.at_, operator_ = e_.operator_, value_ = e_.value_, signature_ = instantiated_.scheme_.signature_);
e_.copy(record_ = record_, value_ = value_)
case (ff.core.Option_.Some(instantiated_)) =>
ff.compiler.Inference_.fail_(e_.at_, ((("Can't assign an immutable field " + e_.field_) + " on type: ") + t_.show_()))
case (ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_(e_.at_, ((("No such field " + e_.field_) + " on type: ") + t_.show_()))
})
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
ff.compiler.Inference_.fail_(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_))
})
})
}

def inferAssignment_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, at_ : ff.compiler.Syntax_.Location, operator_ : ff.core.String_.String, value_ : ff.compiler.Syntax_.Term, signature_ : ff.compiler.Syntax_.Signature) : ff.compiler.Syntax_.Term = {
val t_ = signature_.returnType_;
ff.core.Core_.if_(((operator_ == "+") || (operator_ == "-")), {() =>
self_.unification_.unify_(at_, t_, ff.compiler.Syntax_.TConstructor(at_, ff.compiler.Inference_.core_("Int"), List()))
}).elseIf_({() =>
(operator_ != "")
}, {() =>
ff.compiler.Inference_.fail_(at_, (("Only +=, -= and = assignments are supported. Got: " + operator_) + "="))
});
val newValue_ = self_.inferTerm_(environment_, t_, value_);
self_.unification_.unify_(at_, expected_, ff.compiler.Syntax_.TConstructor(at_, ff.compiler.Inference_.core_("Unit"), List()));
newValue_
}

def inferMethodCall_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, signature_ : ff.compiler.Syntax_.Signature, instantiation_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]], term_ : ff.compiler.Syntax_.Term, record_ : ff.compiler.Syntax_.Term, name_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = {
val e_ = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_(term_.at_, "Call expected")
});
val e2_ = e_.copy(function_ = ff.compiler.Syntax_.EVariable(e_.at_, name_, List(), List()), arguments_ = (List(List(ff.compiler.Syntax_.Argument(record_.at_, ff.core.Option_.None(), record_)), e_.arguments_).flatten));
self_.inferFunctionCall_(environment_, expected_, signature_, instantiation_, e2_, name_)
}

def inferFunctionCall_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, signature_ : ff.compiler.Syntax_.Signature, instantiation_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]], term_ : ff.compiler.Syntax_.Term, name_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = {
val e_ = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_(term_.at_, "Call expected")
});
self_.unification_.unify_(e_.at_, expected_, signature_.returnType_);
val arguments_ = self_.inferArguments_(e_.at_, environment_, signature_.parameters_, e_.arguments_);
e_.copy(function_ = e_.function_, typeArguments_ = instantiation_.map_({(_w1) =>
_w1.second_
}), arguments_ = arguments_)
}

def inferLambdaCall_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = {
val e_ = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_(term_.at_, "Call expected")
});
val argumentTypes_ = e_.arguments_.map_({(_w1) =>
self_.unification_.freshTypeVariable_(_w1.at_)
});
val functionType_ = ff.compiler.Syntax_.TConstructor(e_.at_, ("Function$" + e_.arguments_.getSize_()), (List(argumentTypes_, List(expected_)).flatten));
val function_ = self_.inferTerm_(environment_, functionType_, e_.function_);
val arguments_ = e_.arguments_.zip_(argumentTypes_).map_({
case (ff.core.Pair_.Pair(argument_, t_)) =>
argument_.name_.each_({(name_) =>
ff.compiler.Inference_.fail_(argument_.at_, ("Named argument not allowed here: " + name_))
});
argument_.copy(value_ = self_.inferTerm_(environment_, t_, argument_.value_))
});
e_.typeArguments_.first_().each_({(typeArgument_) =>
ff.compiler.Inference_.fail_(typeArgument_.at_, "Type arguments not allowed here")
});
e_.copy(function_ = function_, typeArguments_ = List(), arguments_ = arguments_)
}

def inferOperator_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, operator_ : ff.core.String_.String, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = {
val e_ = pipe_dot(term_)({
case (e_ : ff.compiler.Syntax_.ECall) =>
e_
case (_) =>
ff.compiler.Inference_.fail_(term_.at_, "Call expected")
});
pipe_dot(e_.arguments_)({
case (List(a1_)) if (operator_ == "!") =>
val t_ = ff.compiler.Syntax_.TConstructor(e_.at_, ff.compiler.Inference_.core_("Bool"), List());
val e1_ = self_.inferTerm_(environment_, t_, a1_.value_);
self_.unification_.unify_(e_.at_, expected_, t_);
e_.copy(arguments_ = List(a1_.copy(value_ = e1_)))
case (List(a1_)) if (operator_ == "-") =>
val t1_ = self_.unification_.freshTypeVariable_(e_.at_);
val e1_ = self_.inferTerm_(environment_, t1_, a1_.value_);
pipe_dot(self_.unification_.substitute_(t1_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("Float")) =>
self_.unification_.unify_(e_.at_, expected_, t1_)
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("Int")) =>
self_.unification_.unify_(e_.at_, expected_, t1_)
case (_) =>
ff.compiler.Inference_.fail_(e_.at_, "Operators on unknown types not currently supported")
});
e_.copy(arguments_ = List(a1_.copy(value_ = e1_)))
case (List(a1_, a2_)) if (operator_ == "++") =>
val t_ = self_.unification_.freshTypeVariable_(e_.at_);
val e1_ = self_.inferTerm_(environment_, t_, a1_.value_);
val e2_ = self_.inferTerm_(environment_, t_, a2_.value_);
self_.unification_.unify_(e_.at_, expected_, t_);
val name_ = pipe_dot(self_.unification_.substitute_(t_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, _)) =>
name_
case (_) =>
ff.compiler.Inference_.fail_(e_.at_, "Operators on unknown types not currently supported")
});
ff.core.Core_.if_(((((name_ != ff.compiler.Inference_.core_("List")) && (name_ != ff.compiler.Inference_.core_("Array"))) && (name_ != ff.compiler.Inference_.core_("Set"))) && (name_ != ff.compiler.Inference_.core_("Map"))), {() =>
ff.compiler.Inference_.fail_(e_.at_, ("Operator ++ not currently supported for " + name_))
});
e_.copy(arguments_ = List(a1_.copy(value_ = e1_), a2_.copy(value_ = e2_)))
case (List(a1_, a2_)) if ((operator_ == "||") || (operator_ == "&&")) =>
val t_ = ff.compiler.Syntax_.TConstructor(e_.at_, ff.compiler.Inference_.core_("Bool"), List());
val e1_ = self_.inferTerm_(environment_, t_, a1_.value_);
val e2_ = self_.inferTerm_(environment_, t_, a2_.value_);
self_.unification_.unify_(e_.at_, expected_, t_);
e_.copy(arguments_ = List(a1_.copy(value_ = e1_), a2_.copy(value_ = e2_)))
case (List(a1_, a2_)) if ((((((operator_ == "<") || (operator_ == ">")) || (operator_ == "<=")) || (operator_ == ">=")) || (operator_ == "==")) || (operator_ == "!=")) =>
val t_ = ff.compiler.Syntax_.TConstructor(e_.at_, ff.compiler.Inference_.core_("Bool"), List());
val t1_ = self_.unification_.freshTypeVariable_(e_.at_);
val t2_ = self_.unification_.freshTypeVariable_(e_.at_);
val e1_ = self_.inferTerm_(environment_, t1_, a1_.value_);
val e2_ = self_.inferTerm_(environment_, t2_, a2_.value_);
val magic_ : Function1[ff.compiler.Syntax_.Type, ff.core.Option_.Option[ff.core.String_.String]] = {(t_) =>
pipe_dot(self_.unification_.substitute_(t_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("String")) =>
ff.core.Option_.Some("String")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("Float")) =>
ff.core.Option_.Some("Float")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("Int")) =>
ff.core.Option_.Some("Int")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("Char")) =>
ff.core.Option_.Some("Char")
case (_) =>
ff.core.Option_.None()
})
};
val chooseType_ : Function2[ff.core.Option_.Option[ff.core.String_.String], ff.core.Option_.Option[ff.core.String_.String], ff.core.Unit_.Unit] = {
case (ff.core.Option_.Some(_), _) =>
self_.unification_.unify_(e_.at_, t1_, t2_);
self_.unification_.unify_(e_.at_, expected_, t_)
case (_, ff.core.Option_.Some(_)) =>
self_.unification_.unify_(e_.at_, t2_, t1_);
self_.unification_.unify_(e_.at_, expected_, t_)
case (_, _) if ((operator_ == "==") || (operator_ == "!=")) =>
self_.unification_.unify_(e_.at_, t2_, t1_);
self_.unification_.unify_(e_.at_, expected_, t_)
case (ff.core.Option_.None(), ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_(e_.at_, "Operators on unknown types not currently supported")
};
chooseType_(magic_(t1_), magic_(t2_));
e_.copy(arguments_ = List(a1_.copy(value_ = e1_), a2_.copy(value_ = e2_)))
case (List(a1_, a2_)) if ((((((operator_ == "+") || (operator_ == "-")) || (operator_ == "*")) || (operator_ == "/")) || (operator_ == "%")) || (operator_ == "^")) =>
val t1_ = self_.unification_.freshTypeVariable_(e_.at_);
val t2_ = self_.unification_.freshTypeVariable_(e_.at_);
val e1_ = self_.inferTerm_(environment_, t1_, a1_.value_);
val e2_ = self_.inferTerm_(environment_, t2_, a2_.value_);
val magic_ : Function1[ff.compiler.Syntax_.Type, ff.core.Option_.Option[ff.core.String_.String]] = {(t_) =>
pipe_dot(self_.unification_.substitute_(t_))({
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("Float")) =>
ff.core.Option_.Some("Float")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if (name_ == ff.compiler.Inference_.core_("Int")) =>
ff.core.Option_.Some("Int")
case (ff.compiler.Syntax_.TConstructor(_, name_, List())) if ((operator_ == "+") && (name_ == ff.compiler.Inference_.core_("String"))) =>
ff.core.Option_.Some("String")
case (_) =>
ff.core.Option_.None()
})
};
val chooseType_ : Function2[ff.core.Option_.Option[ff.core.String_.String], ff.core.Option_.Option[ff.core.String_.String], ff.core.Unit_.Unit] = {
case (ff.core.Option_.Some(n_), ff.core.Option_.Some(_)) if (n_ == "String") =>
self_.unification_.unify_(e_.at_, expected_, t1_)
case (ff.core.Option_.Some(_), ff.core.Option_.Some(n_)) if (n_ == "String") =>
self_.unification_.unify_(e_.at_, expected_, t2_)
case (ff.core.Option_.Some(n_), ff.core.Option_.Some(_)) if (n_ == "Float") =>
self_.unification_.unify_(e_.at_, expected_, t1_)
case (ff.core.Option_.Some(_), ff.core.Option_.Some(n_)) if (n_ == "Float") =>
self_.unification_.unify_(e_.at_, expected_, t2_)
case (ff.core.Option_.Some(n_), ff.core.Option_.Some(_)) if (n_ == "Int") =>
self_.unification_.unify_(e_.at_, expected_, t1_)
case (ff.core.Option_.Some(_), ff.core.Option_.Some(n_)) if (n_ == "Int") =>
self_.unification_.unify_(e_.at_, expected_, t2_)
case (ff.core.Option_.Some(_), ff.core.Option_.None()) =>
self_.unification_.unify_(e_.at_, t1_, t2_);
self_.unification_.unify_(e_.at_, expected_, t1_)
case (ff.core.Option_.None(), ff.core.Option_.Some(_)) =>
self_.unification_.unify_(e_.at_, t2_, t1_);
self_.unification_.unify_(e_.at_, expected_, t2_)
case (ff.core.Option_.None(), ff.core.Option_.None()) =>
ff.compiler.Inference_.fail_(e_.at_, "Operators on unknown types not currently supported")
};
chooseType_(magic_(t1_), magic_(t2_));
e_.copy(arguments_ = List(a1_.copy(value_ = e1_), a2_.copy(value_ = e2_)))
case (_) =>
ff.compiler.Inference_.fail_(e_.at_, ("Unknown operator: " + operator_))
})
}

def inferEtaExpansion_(environment_ : ff.compiler.Environment_.Environment, expected_ : ff.compiler.Syntax_.Type, at_ : ff.compiler.Syntax_.Location, signature_ : ff.compiler.Syntax_.Signature, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = {
val parameters_ = signature_.parameters_.filter_({(_w1) =>
_w1.default_.getEmpty_()
}).map_({(p_) =>
p_.name_
});
val body_ = ff.compiler.Syntax_.ECall(at_, ff.core.Bool_.False(), term_, List(), parameters_.map_({(x_) =>
ff.compiler.Syntax_.Argument(at_, ff.core.Option_.Some(x_), ff.compiler.Syntax_.EVariable(at_, x_, List(), List()))
}));
val lambda_ = ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(at_, List(ff.compiler.Syntax_.MatchCase(at_ = at_, patterns_ = parameters_.map_({(_w1) =>
ff.compiler.Syntax_.PVariable(at_, ff.core.Option_.Some(_w1))
}), condition_ = ff.core.Option_.None(), body_ = body_))));
self_.inferTerm_(environment_, expected_, lambda_)
}

def inferArguments_(at_ : ff.compiler.Syntax_.Location, environment_ : ff.compiler.Environment_.Environment, parameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter], arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]) : ff.core.List_.List[ff.compiler.Syntax_.Argument] = {
var remainingArguments_ = arguments_;
val newArguments_ = parameters_.map_({(p_) =>
val t_ = p_.valueType_;
def defaultArgument_() : ff.compiler.Syntax_.Argument = {
p_.default_.map_({(e_) =>
val e2_ = self_.inferTerm_(environment_, t_, e_);
ff.compiler.Syntax_.Argument(at_, ff.core.Option_.Some(p_.name_), e2_)
}).else_({() =>
ff.compiler.Inference_.fail_(at_, ("Missing argument: " + p_.name_))
})
}
pipe_dot(remainingArguments_)({
case (List()) =>
defaultArgument_()
case (List(ff.compiler.Syntax_.Argument(at_, ff.core.Option_.None(), e_), remaining__seq @ _*)) =>
val remaining_ = remaining__seq.toList;
remainingArguments_ = remaining_;
val e2_ = self_.inferTerm_(environment_, t_, e_);
ff.compiler.Syntax_.Argument(at_, ff.core.Option_.Some(p_.name_), e2_)
case (_) =>
remainingArguments_.find_({(_w1) =>
_w1.name_.contains_(p_.name_)
}).map_({
case (ff.compiler.Syntax_.Argument(at_, _, e_)) =>
remainingArguments_ = remainingArguments_.filter_({(_w1) =>
(!_w1.name_.contains_(p_.name_))
});
val e2_ = self_.inferTerm_(environment_, t_, e_);
ff.compiler.Syntax_.Argument(at_, ff.core.Option_.Some(p_.name_), e2_)
}).else_({() =>
defaultArgument_()
})
})
});
remainingArguments_.first_().each_({
case (ff.compiler.Syntax_.Argument(at_, ff.core.Option_.None(), _)) =>
ff.compiler.Inference_.fail_(at_, "Too many arguments")
case (ff.compiler.Syntax_.Argument(at_, ff.core.Option_.Some(name_), _)) =>
ff.compiler.Inference_.fail_(at_, ("Unknown argument: " + name_))
});
newArguments_
}

def lookup_(environment_ : ff.compiler.Environment_.Environment, at_ : ff.compiler.Syntax_.Location, symbol_ : ff.core.String_.String, typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]) : ff.core.Option_.Option[ff.compiler.Environment_.Instantiated] = {
environment_.symbols_.get_(symbol_).map_({(scheme_) =>
val instantiation_ = ff.core.Core_.if_((!typeArguments_.getEmpty_()), {() =>
ff.core.Core_.if_((scheme_.signature_.generics_.getSize_() != typeArguments_.getSize_()), {() =>
ff.compiler.Inference_.fail_(at_, ((((("Wrong number of type parameters for " + symbol_) + ", expected ") + scheme_.signature_.generics_.getSize_()) + ", got ") + typeArguments_.getSize_()))
});
scheme_.signature_.generics_.zip_(typeArguments_)
}).else_({() =>
scheme_.signature_.generics_.map_({(name_) =>
ff.core.Pair_.Pair(name_, self_.unification_.freshTypeVariable_(at_))
})
});
val instantiationMap_ = instantiation_.getMap_();
val parameters_ = scheme_.signature_.parameters_.map_({(p_) =>
p_.copy(valueType_ = self_.unification_.instantiate_(instantiationMap_, p_.valueType_))
});
val returnType_ = self_.unification_.instantiate_(instantiationMap_, scheme_.signature_.returnType_);
val signature_ = scheme_.signature_.copy(generics_ = List(), constraints_ = List(), parameters_ = parameters_, returnType_ = returnType_);
ff.compiler.Environment_.Instantiated(typeArguments_ = instantiation_, scheme_ = scheme_.copy(signature_ = signature_))
})
}

}


}
