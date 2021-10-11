import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

import * as ff_compiler_Substitution from "../../ff/compiler/Substitution.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Inference
export function Inference(unification_) {
return {unification_};
}



export function make_(instances_) {
return ff_compiler_Inference.Inference(ff_compiler_Unification.make_(instances_))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function core_(name_) {
return ((("ff:core/" + name_) + ".") + name_)
}

export function Inference_inferModule(self_, module_, otherModules_) {
const environment_ = ff_compiler_Environment.make_(module_, otherModules_)
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Inference.Inference_inferLetDefinition(self_, environment_, _w1)
}))
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment_, _w1)
}))
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Inference.Inference_inferExtendDefinition(self_, environment_, _w1)
}))
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.packagePair_, _c.file_, _c.dependencies_, _c.imports_, _c.types_, _c.traits_, _c.instances_, extends_, lets_, functions_)
}))(module_)
return ff_compiler_Substitution.Substitution_substituteModule(ff_compiler_Substitution.Substitution(self_.unification_.substitution_), result_)
}

export function Inference_inferLetDefinition(self_, environment_, definition_) {
const value_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, definition_.variableType_, definition_.value_)
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, _c.variableType_, value_, _c.targets_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferExtendDefinition(self_, environment_, definition_) {
const selfParameter_ = ff_compiler_Syntax.Parameter(definition_.at_, false, definition_.name_, definition_.type_, ff_core_Option.None())
const functions_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, ff_core_List.List_addAll(definition_.generics_, method_.signature_.generics_), ff_core_List.List_addAll(definition_.constraints_, method_.signature_.constraints_), ff_core_List.Link(selfParameter_, method_.signature_.parameters_), _c.returnType_)
}))(method_.signature_)
const lambda_ = (((_c) => {
return ff_compiler_Syntax.Lambda(_c.at_, ff_core_List.List_map(method_.body_.cases_, ((case_) => {
const selfPattern_ = ff_compiler_Syntax.PVariable(method_.at_, ff_core_Option.Some(definition_.name_))
{
const _1 = case_
{
const _c = _1
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.Link(selfPattern_, case_.patterns_), _c.condition_, _c.body_)
return
}
throw new Error('Unexhaustive pattern match')
}
})))
}))(method_.body_)
const function_ = (((_c) => {
return ff_compiler_Syntax.DFunction(_c.at_, signature_, lambda_, _c.targets_)
}))(method_)
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment_, function_)
}))
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, functions_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferFunctionDefinition(self_, environment_, definition_) {
const parameters_ = ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
const scheme_ = ff_compiler_Environment.Scheme(true, false, false, ff_compiler_Syntax.Signature(p_.at_, p_.name_, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty(), p_.valueType_))
return ff_core_Pair.Pair(p_.name_, scheme_)
}))
const parameterMap_ = ff_core_List.List_toMap(parameters_)
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(ff_core_Map.Map_addAll(environment_.symbols_, parameterMap_))
}))(environment_)
const functionType_ = ff_compiler_Syntax.TConstructor(definition_.at_, ("Function$" + ff_core_List.List_size(parameters_)), ff_core_List.List_addAll(ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.second_.signature_.returnType_
})), ff_core_List.Link(definition_.signature_.returnType_, ff_core_List.Empty())))
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Inference.Inference_inferLambda(self_, environment2_, functionType_, definition_.body_), _c.targets_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferLambda(self_, environment_, expected_, lambda_) {
const unitName_ = ff_compiler_Inference.core_("Unit")
const returnsUnit_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_
const ts_ = _1.generics_
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
{
const _1 = ff_core_List.List_expectLast(ts_)
{
if(_1.TConstructor) {
const n_ = _1.name_
if(_1.generics_.Empty) {
return (n_ == unitName_)
return
}
}
}
{
return false
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
{
return false
return
}
throw new Error('Unexhaustive pattern match')
}))(ff_compiler_Unification.Unification_substitute(self_.unification_, expected_))
const cases_ = ((!returnsUnit_)
? lambda_.cases_
: ff_core_List.List_map(lambda_.cases_, ((c_) => {
{
const _1 = c_
{
const _c = _1
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.condition_, ff_compiler_Syntax.ESequential(c_.at_, c_.body_, ff_compiler_Syntax.EVariant(c_.at_, unitName_, ff_core_List.Empty(), ff_core_Option.None())))
return
}
throw new Error('Unexhaustive pattern match')
}
})))
{
const _1 = lambda_
{
const _c = _1
return ff_compiler_Syntax.Lambda(_c.at_, ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_Inference.Inference_inferMatchCase(self_, environment_, expected_, _w1)
})))
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferMatchCase(self_, environment_, expected_, case_) {
const parameterTypes_ = ff_core_List.List_map(case_.patterns_, ((_w1) => {
return ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, _w1.at_)
}))
const returnType_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, case_.at_)
const functionType_ = ff_compiler_Syntax.TConstructor(case_.at_, ("Function$" + ff_core_List.List_size(case_.patterns_)), ff_core_List.List_addAll(parameterTypes_, ff_core_List.Link(returnType_, ff_core_List.Empty())))
ff_compiler_Unification.Unification_unify(self_.unification_, case_.at_, expected_, functionType_)
const newEnvironment_ = ff_core_List.List_foldLeft(ff_core_List.List_zip(parameterTypes_, case_.patterns_), environment_)(((_1, _2) => {
{
const environment1_ = _1
const t_ = _2.first_
const c_ = _2.second_
const symbols_ = ff_core_Map.Map_map(ff_compiler_Inference.Inference_inferPattern(self_, environment_, t_, c_), ((_1) => {
{
const name_ = _1.first_
const type_ = _1.second_
return ff_core_Pair.Pair(name_, ff_compiler_Environment.Scheme(true, false, false, ff_compiler_Syntax.Signature(c_.at_, name_, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty(), type_)))
return
}
throw new Error('Unexhaustive pattern match')
}))
return ff_compiler_Environment.Environment(ff_core_Map.Map_addAll(environment1_.symbols_, symbols_))
return
}
throw new Error('Unexhaustive pattern match')
}))
const condition_ = ff_core_Option.Option_map(case_.condition_, ((e_) => {
return ff_compiler_Inference.Inference_inferTerm(self_, newEnvironment_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), ff_core_List.Empty()), e_)
}))
const body_ = ff_compiler_Inference.Inference_inferTerm(self_, newEnvironment_, returnType_, case_.body_)
{
const _1 = case_
{
const _c = _1
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, condition_, body_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferPattern(self_, environment_, expected_, pattern_) {
{
const _1 = pattern_
{
if(_1.PVariable) {
const at_ = _1.at_
if(_1.name_.None) {
return ff_core_Map.empty_()
return
}
}
}
{
if(_1.PVariable) {
const at_ = _1.at_
if(_1.name_.Some) {
const name_ = _1.name_.value_
return ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(name_, expected_), ff_core_List.Empty()))
return
}
}
}
{
if(_1.PAlias) {
const at_ = _1.at_
const pattern_ = _1.pattern_
const variable_ = _1.variable_
return ff_core_Map.Map_add(ff_compiler_Inference.Inference_inferPattern(self_, environment_, expected_, pattern_), variable_, expected_)
return
}
}
{
if(_1.PList) {
const at_ = _1.at_
const t_ = _1.itemType_
const items_ = _1.items_
const listType_ = ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("List"), ff_core_List.Link(t_, ff_core_List.Empty()))
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_)
return ff_core_List.List_foldLeft(ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_
if(!_1.second_) {
return ff_compiler_Inference.Inference_inferPattern(self_, environment_, t_, item_)
return
}
}
{
const item_ = _1.first_
if(_1.second_) {
return ff_compiler_Inference.Inference_inferPattern(self_, environment_, listType_, item_)
return
}
}
throw new Error('Unexhaustive pattern match')
})), ff_core_Map.empty_())(((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2)
}))
return
}
}
{
if(_1.PVariantAs) {
const at_ = _1.at_
const name_ = _1.name_
if(_1.variable_.None) {
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, at_, name_, ff_core_List.Empty()), (() => {
return ff_compiler_Inference.fail_(at_, ("No such variant: " + name_))
}))
if(instantiated_.scheme_.isNewtype_) {
ff_compiler_Inference.fail_(at_, "This kind of pattern is not allowed for newtypes")
}
return ff_core_Map.empty_()
return
}
}
}
{
if(_1.PVariantAs) {
const at_ = _1.at_
const name_ = _1.name_
if(_1.variable_.Some) {
const variable_ = _1.variable_.value_
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, at_, name_, ff_core_List.Empty()), (() => {
return ff_compiler_Inference.fail_(at_, ("No such variant: " + name_))
}))
if(instantiated_.scheme_.isNewtype_) {
ff_compiler_Inference.fail_(at_, "This kind of pattern is not allowed for newtypes")
}
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, instantiated_.scheme_.signature_.returnType_)
const parameters_ = ff_core_List.List_sortBy(instantiated_.scheme_.signature_.parameters_, ((_w1) => {
return _w1.name_
}))
const recordType_ = ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.name_
})), "$")), ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.valueType_
})))
return ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(variable_, recordType_), ff_core_List.Empty()))
return
}
}
}
{
if(_1.PVariant) {
const at_ = _1.at_
const name_ = _1.name_
const patterns_ = _1.patterns_
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, at_, name_, ff_core_List.Empty()), (() => {
return ff_compiler_Inference.fail_(at_, ("No such variant: " + name_))
}))
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, instantiated_.scheme_.signature_.returnType_)
return ff_core_List.List_foldLeft(ff_core_List.List_map(ff_core_List.List_zip(patterns_, instantiated_.scheme_.signature_.parameters_), ((_1) => {
{
const pattern_ = _1.first_
const parameter_ = _1.second_
return ff_compiler_Inference.Inference_inferPattern(self_, environment_, parameter_.valueType_, pattern_)
return
}
throw new Error('Unexhaustive pattern match')
})), ff_core_Map.empty_())(((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2)
}))
return
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferTerm(self_, environment_, expected_, term_) {
function literal_(coreTypeName_) {
ff_compiler_Unification.Unification_unify(self_.unification_, term_.at_, expected_, ff_compiler_Syntax.TConstructor(term_.at_, ff_compiler_Inference.core_(coreTypeName_), ff_core_List.Empty()))
return term_
}
{
const _1 = term_
{
if(_1.EString) {
return literal_("String")
return
}
}
{
if(_1.EChar) {
return literal_("Char")
return
}
}
{
if(_1.EInt) {
return literal_("Int")
return
}
}
{
if(_1.EFloat) {
return literal_("Float")
return
}
}
{
if(_1.EVariable) {
const e_ = _1
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, e_.name_, e_.generics_), ((instantiated_) => {
if(instantiated_.scheme_.isVariable_) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_)
return term_
} else {
return ff_compiler_Inference.Inference_inferEtaExpansion(self_, environment_, expected_, e_.at_, instantiated_.scheme_.signature_, term_)
}
})), (() => {
return ff_compiler_Inference.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
}))
return
}
}
{
if(_1.EField) {
const e_ = _1
const recordType_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, e_.record_)
const e2_ = (((_c) => {
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, record_, _c.field_)
}))(e_)
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_)
{
const t_ = _1
if(_1.TConstructor) {
const name_ = _1.name_
const typeArguments_ = _1.generics_
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
const fieldNames_ = ff_core_List.List_dropFirst(ff_core_Array.Array_toList(ff_core_String.String_split(name_, 36)), 1)
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_map(ff_core_List.List_find(ff_core_List.List_pairs(fieldNames_), ((_w1) => {
return (_w1.second_ == e_.field_)
})), ((_w1) => {
return _w1.first_
})), ((index_) => {
const t1_ = ff_core_List.List_expect(typeArguments_, index_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return e2_
})), (() => {
return ff_compiler_Inference.fail_(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_)))
}))
return
}
}
}
{
const t_ = _1
if(_1.TConstructor) {
const name_ = _1.name_
const typeArguments_ = _1.generics_
const methodName_ = ((name_ + "_") + e_.field_)
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, methodName_, typeArguments_)
{
if(_1.Some) {
const instantiated_ = _1.value_
if((!instantiated_.scheme_.isVariable_)) {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.generics_, _c.constraints_, ff_core_List.List_dropFirst(instantiated_.scheme_.signature_.parameters_, 1), _c.returnType_)
}))(instantiated_.scheme_.signature_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, recordType_, ff_core_List.List_expect(instantiated_.scheme_.signature_.parameters_, 0).valueType_)
return ff_compiler_Inference.Inference_inferEtaExpansion(self_, environment_, expected_, e_.at_, signature_, e2_)
return
}
}
}
{
if(_1.Some) {
const instantiated_ = _1.value_
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EField(_c.at_, instantiated_.scheme_.isNewtype_, record_, _c.field_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.None) {
return ff_compiler_Inference.fail_(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_)))
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.TVariable) {
const index_ = _1.index_
return ff_compiler_Inference.fail_(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.EWildcard) {
const e_ = _1
return ff_core_Option.Option_expect(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, ("_w" + e_.index_), ff_core_List.Empty()), ((instantiated_) => {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_)
return term_
})))
return
}
}
{
if(_1.EList) {
const at_ = _1.at_
const t_ = _1.elementType_
const items_ = _1.items_
const listType_ = ff_compiler_Syntax.TConstructor(term_.at_, ff_compiler_Inference.core_("List"), ff_core_List.Link(t_, ff_core_List.Empty()))
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_)
return ff_compiler_Syntax.EList(at_, t_, ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_
const spread_ = _1.second_
return ff_core_Pair.Pair(ff_compiler_Inference.Inference_inferTerm(self_, environment_, (spread_
? listType_
: t_), item_), spread_)
return
}
throw new Error('Unexhaustive pattern match')
})))
return
}
}
{
if(_1.ESequential) {
const at_ = _1.at_
const before_ = _1.before_
const after_ = _1.after_
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, at_), before_), ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, after_))
return
}
}
{
if(_1.ELet) {
const e_ = _1
const scheme_ = ff_compiler_Environment.Scheme(true, e_.mutable_, false, ff_compiler_Syntax.Signature(e_.at_, e_.name_, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty(), e_.valueType_))
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(ff_core_Map.Map_add(environment_.symbols_, e_.name_, scheme_))
}))(environment_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, e_.valueType_, e_.value_), ff_compiler_Inference.Inference_inferTerm(self_, environment2_, expected_, e_.body_))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.ELambda) {
const at_ = _1.at_
const l_ = _1.lambda_
const lambda_ = ff_compiler_Inference.Inference_inferLambda(self_, environment_, expected_, l_)
return ff_compiler_Syntax.ELambda(at_, lambda_)
return
}
}
{
if(_1.EVariant) {
const e_ = _1
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, e_.name_, e_.typeArguments_), (() => {
return ff_compiler_Inference.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
}))
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_)
const arguments_ = ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_compiler_Inference.Inference_inferArguments(self_, e_.at_, environment_, instantiated_.scheme_.signature_.parameters_, _w1)
}))
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, ff_core_List.List_map(instantiated_.typeArguments_, ((_w1) => {
return _w1.second_
})), arguments_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.EVariantIs) {
const e_ = _1
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, e_.name_, e_.typeArguments_), (() => {
return ff_compiler_Inference.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
}))
const parameters_ = ff_core_List.List_sortBy(instantiated_.scheme_.signature_.parameters_, ((_w1) => {
return _w1.name_
}))
const recordType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.name_
})), "$")), ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.valueType_
})))
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, "Function$1", ff_core_List.Link(instantiated_.scheme_.signature_.returnType_, ff_core_List.Link(ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Option"), ff_core_List.Link(recordType_, ff_core_List.Empty())), ff_core_List.Empty())))
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, functionType_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EVariantIs(_c.at_, _c.name_, ff_core_List.List_map(instantiated_.typeArguments_, ((_w1) => {
return _w1.second_
})))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.ECopy) {
const e_ = _1
const scheme_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, e_.name_, ff_core_List.Empty()), (() => {
return ff_compiler_Inference.fail_(e_.at_, ("Symbol not in scope: " + e_.name_))
})).scheme_
if(scheme_.isNewtype_) {
ff_compiler_Inference.fail_(e_.at_, "Newtypes can't be copied")
}
const signature_ = scheme_.signature_
const parameterNames_ = ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
}))
ff_core_Option.Option_each(ff_core_List.List_find(e_.arguments_, ((a_) => {
return (!ff_core_List.List_any(parameterNames_, ((_w1) => {
return (_w1 == a_.name_)
})))
})), ((_1) => {
{
const at_ = _1.at_
const name_ = _1.name_
const value_ = _1.value_
ff_compiler_Inference.fail_(at_, ("Unknown parameter: " + name_))
return
}
throw new Error('Unexhaustive pattern match')
}))
const arguments_ = ff_core_List.List_map(parameterNames_, ((name_) => {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(e_.arguments_, ((_w1) => {
return (_w1.name_ == name_)
})), ((_1) => {
{
const at_ = _1.at_
const value_ = _1.value_
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(name_), value_)
return
}
throw new Error('Unexhaustive pattern match')
})), (() => {
return ff_compiler_Syntax.Argument(e_.at_, ff_core_Option.Some(name_), ff_compiler_Syntax.EField(e_.at_, false, ff_compiler_Syntax.EVariable(e_.at_, "_c", ff_core_List.Empty(), ff_core_List.Empty()), name_))
}))
}))
const body_ = ff_compiler_Syntax.EVariant(e_.at_, e_.name_, ff_core_List.Empty(), ff_core_Option.Some(arguments_))
const term_ = ff_compiler_Syntax.EPipe(e_.at_, e_.record_, ff_compiler_Syntax.ELambda(e_.at_, ff_compiler_Syntax.Lambda(e_.at_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(e_.at_, ff_core_List.Link(ff_compiler_Syntax.PVariable(e_.at_, ff_core_Option.Some("_c")), ff_core_List.Empty()), ff_core_Option.None(), body_), ff_core_List.Empty()))))
return ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, term_)
return
}
}
{
if(_1.EPipe) {
const e_ = _1
const valueType_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, "Function$1", ff_core_List.Link(valueType_, ff_core_List.Link(expected_, ff_core_List.Empty())))
const value_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, valueType_, e_.value_)
const function_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, functionType_, e_.function_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EPipe(_c.at_, value_, function_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.ECall) {
const e_ = _1
{
const _1 = e_.function_
{
if(_1.EVariable) {
const variableAt_ = _1.at_
const x_ = _1.name_
if(_1.generics_.Empty) {
if(_1.instances_.Empty) {
if(ff_core_Option.Option_any(ff_core_String.String_first(x_), ((c_) => {
return ((c_ != 95) && (!ff_core_Char.Char_isAsciiLetter(c_)))
}))) {
return ff_compiler_Inference.Inference_inferOperator(self_, environment_, expected_, x_, term_)
} else {
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, x_, e_.typeArguments_)
{
if(_1.Some) {
const instantiated_ = _1.value_
if(instantiated_.scheme_.isVariable_) {
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, term_)
} else {
const signature_ = instantiated_.scheme_.signature_
return ff_compiler_Inference.Inference_inferFunctionCall(self_, environment_, expected_, signature_, instantiated_.typeArguments_, term_, x_)
}
return
}
}
{
if(_1.None) {
return ff_compiler_Inference.fail_(variableAt_, ("No such function: " + x_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
}
return
}
}
}
}
{
if(_1.EField) {
const f_ = _1
const recordType_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, f_.at_)
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, f_.record_)
const e2_ = (((_c) => {
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, (((_c) => {
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, record_, _c.field_)
}))(f_), _c.typeArguments_, _c.arguments_)
}))(e_)
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_)
{
const t_ = _1
if(_1.TConstructor) {
const name_ = _1.name_
const typeParameters_ = _1.generics_
const methodName_ = ((name_ + "_") + f_.field_)
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, f_.at_, methodName_, ff_core_List.Empty())
{
if(_1.Some) {
const instantiated_ = _1.value_
if((!instantiated_.scheme_.isVariable_)) {
return ff_compiler_Inference.Inference_inferMethodCall(self_, environment_, expected_, instantiated_.scheme_.signature_, instantiated_.typeArguments_, e2_, record_, methodName_)
return
}
}
}
{
if(_1.Some) {
const instantiated_ = _1.value_
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, e2_)
return
}
}
{
if(_1.None) {
return ff_compiler_Inference.fail_(f_.at_, ((("No such field " + f_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_)))
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.TVariable) {
const index_ = _1.index_
return ff_compiler_Inference.fail_(f_.at_, ((("No such field " + f_.field_) + " on unknown type: $") + index_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, term_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.ERecord) {
const e_ = _1
const fields_ = ff_core_List.List_sortBy(e_.fields_, ((_w1) => {
return _w1.name_
}))
const fieldTypes_ = ff_core_List.List_map(fields_, ((_w1) => {
return ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, _w1.at_)
}))
const recordType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(fields_, ((_w1) => {
return _w1.name_
})), "$")), fieldTypes_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, recordType_)
const newFields_ = ff_core_List.List_map(ff_core_List.List_zip(fields_, fieldTypes_), ((_1) => {
{
const field_ = _1.first_
const t_ = _1.second_
{
const _1 = field_
{
const _c = _1
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, field_.value_))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
throw new Error('Unexhaustive pattern match')
}))
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ERecord(_c.at_, newFields_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.EFunctions) {
const at_ = _1.at_
const functions_ = _1.functions_
const body_ = _1.body_
const functionMap_ = ff_core_List.List_toMap(ff_core_List.List_map(functions_, ((f_) => {
const scheme_ = ff_compiler_Environment.Scheme(false, false, false, f_.signature_)
return ff_core_Pair.Pair(f_.signature_.name_, scheme_)
})))
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(ff_core_Map.Map_addAll(environment_.symbols_, functionMap_))
}))(environment_)
const newFunctions_ = ff_core_List.List_map(functions_, ((_w1) => {
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment2_, _w1)
}))
const newBody_ = ff_compiler_Inference.Inference_inferTerm(self_, environment2_, expected_, body_)
return ff_compiler_Syntax.EFunctions(at_, newFunctions_, newBody_)
return
}
}
{
if(_1.EAssign) {
const e_ = _1
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, e_.variable_, ff_core_List.Empty()), ((instantiated_) => {
if(instantiated_.scheme_.isMutable_) {
const value_ = ff_compiler_Inference.Inference_inferAssignment(self_, environment_, expected_, e_.at_, e_.operator_, e_.value_, instantiated_.scheme_.signature_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, value_)
return
}
throw new Error('Unexhaustive pattern match')
}
} else {
return ff_compiler_Inference.fail_(e_.at_, ("Symbol is not mutable: " + e_.variable_))
}
})), (() => {
return ff_compiler_Inference.fail_(e_.at_, ("Symbol not in scope: " + e_.variable_))
}))
return
}
}
{
if(_1.EAssignField) {
const e_ = _1
const recordType_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, e_.record_)
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_)
{
const t_ = _1
if(_1.TConstructor) {
const name_ = _1.name_
const typeArguments_ = _1.generics_
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
return ff_compiler_Inference.fail_(e_.at_, ("Can't assign fields of anonymous records: " + e_.field_))
return
}
}
}
{
const t_ = _1
if(_1.TConstructor) {
const name_ = _1.name_
const typeArguments_ = _1.generics_
const methodName_ = ((name_ + "_") + e_.field_)
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, e_.at_, methodName_, typeArguments_)
{
if(_1.Some) {
const instantiated_ = _1.value_
if(instantiated_.scheme_.isMutable_) {
const value_ = ff_compiler_Inference.Inference_inferAssignment(self_, environment_, expected_, e_.at_, e_.operator_, e_.value_, instantiated_.scheme_.signature_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, record_, _c.field_, value_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
{
if(_1.Some) {
const instantiated_ = _1.value_
return ff_compiler_Inference.fail_(e_.at_, ((("Can't assign an immutable field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_)))
return
}
}
{
if(_1.None) {
return ff_compiler_Inference.fail_(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_)))
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
if(_1.TVariable) {
const index_ = _1.index_
return ff_compiler_Inference.fail_(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferAssignment(self_, environment_, expected_, at_, operator_, value_, signature_) {
const t_ = signature_.returnType_
if(((operator_ == "+") || (operator_ == "-"))) {
ff_compiler_Unification.Unification_unify(self_.unification_, at_, t_, ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Int"), ff_core_List.Empty()))
} else if((operator_ != "")) {
ff_compiler_Inference.fail_(at_, (("Only +=, -= and = assignments are supported. Got: " + operator_) + "="))
} else {}
const newValue_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, value_)
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Unit"), ff_core_List.Empty()))
return newValue_
}

export function Inference_inferMethodCall(self_, environment_, expected_, signature_, instantiation_, term_, record_, name_) {
const e_ = (((_1) => {
{
if(_1.ECall) {
const e_ = _1
return e_
return
}
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
return
}
throw new Error('Unexhaustive pattern match')
}))(term_)
const e2_ = (((_c) => {
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, ff_compiler_Syntax.EVariable(e_.at_, name_, ff_core_List.Empty(), ff_core_List.Empty()), _c.typeArguments_, ff_core_List.Link(ff_compiler_Syntax.Argument(record_.at_, ff_core_Option.None(), record_), e_.arguments_))
}))(e_)
return ff_compiler_Inference.Inference_inferFunctionCall(self_, environment_, expected_, signature_, instantiation_, e2_, name_)
}

export function Inference_inferFunctionCall(self_, environment_, expected_, signature_, instantiation_, term_, name_) {
const e_ = (((_1) => {
{
if(_1.ECall) {
const e_ = _1
return e_
return
}
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
return
}
throw new Error('Unexhaustive pattern match')
}))(term_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, signature_.returnType_)
const arguments_ = ff_compiler_Inference.Inference_inferArguments(self_, e_.at_, environment_, signature_.parameters_, e_.arguments_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, e_.function_, ff_core_List.List_map(instantiation_, ((_w1) => {
return _w1.second_
})), arguments_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferLambdaCall(self_, environment_, expected_, term_) {
const e_ = (((_1) => {
{
if(_1.ECall) {
const e_ = _1
return e_
return
}
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
return
}
throw new Error('Unexhaustive pattern match')
}))(term_)
const argumentTypes_ = ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, _w1.at_)
}))
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Function$" + ff_core_List.List_size(e_.arguments_)), ff_core_List.List_addAll(argumentTypes_, ff_core_List.Link(expected_, ff_core_List.Empty())))
const function_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, functionType_, e_.function_)
const arguments_ = ff_core_List.List_map(ff_core_List.List_zip(e_.arguments_, argumentTypes_), ((_1) => {
{
const argument_ = _1.first_
const t_ = _1.second_
ff_core_Option.Option_each(argument_.name_, ((name_) => {
ff_compiler_Inference.fail_(argument_.at_, ("Named argument not allowed here: " + name_))
}))
{
const _1 = argument_
{
const _c = _1
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, argument_.value_))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
throw new Error('Unexhaustive pattern match')
}))
ff_core_Option.Option_each(ff_core_List.List_first(e_.typeArguments_), ((typeArgument_) => {
ff_compiler_Inference.fail_(typeArgument_.at_, "Type arguments not allowed here")
}))
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, function_, ff_core_List.Empty(), arguments_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferOperator(self_, environment_, expected_, operator_, term_) {
const e_ = (((_1) => {
{
if(_1.ECall) {
const e_ = _1
return e_
return
}
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
return
}
throw new Error('Unexhaustive pattern match')
}))(term_)
{
const _1 = e_.arguments_
{
if(_1.Link) {
const a1_ = _1.head_
if(_1.tail_.Empty) {
if((operator_ == "!")) {
const t_ = ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), ff_core_List.Empty())
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a1_.value_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, _c.function_, _c.typeArguments_, ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), ff_core_List.Empty()))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
{
if(_1.Link) {
const a1_ = _1.head_
if(_1.tail_.Empty) {
if((operator_ == "-")) {
const t1_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_)
for(;;) {
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t1_)
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("Float"))) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
break
}
}
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("Int"))) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
break
}
}
}
}
{
ff_compiler_Inference.fail_(e_.at_, "Operators on unknown types not currently supported")
break
}
throw new Error('Unexhaustive pattern match')
}
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, _c.function_, _c.typeArguments_, ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), ff_core_List.Empty()))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
{
if(_1.Link) {
const a1_ = _1.head_
if(_1.tail_.Link) {
const a2_ = _1.tail_.head_
if(_1.tail_.tail_.Empty) {
if((operator_ == "++")) {
const t_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a1_.value_)
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a2_.value_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_)
const name_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_
return name_
return
}
}
{
return ff_compiler_Inference.fail_(e_.at_, "Operators on unknown types not currently supported")
return
}
throw new Error('Unexhaustive pattern match')
}))(ff_compiler_Unification.Unification_substitute(self_.unification_, t_))
if(((((name_ != ff_compiler_Inference.core_("List")) && (name_ != ff_compiler_Inference.core_("Array"))) && (name_ != ff_compiler_Inference.core_("Set"))) && (name_ != ff_compiler_Inference.core_("Map")))) {
ff_compiler_Inference.fail_(e_.at_, ("Operator ++ not currently supported for " + name_))
}
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, _c.function_, _c.typeArguments_, ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_), ff_core_List.Empty())))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
}
{
if(_1.Link) {
const a1_ = _1.head_
if(_1.tail_.Link) {
const a2_ = _1.tail_.head_
if(_1.tail_.tail_.Empty) {
if(((operator_ == "||") || (operator_ == "&&"))) {
const t_ = ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), ff_core_List.Empty())
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a1_.value_)
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a2_.value_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, _c.function_, _c.typeArguments_, ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_), ff_core_List.Empty())))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
}
{
if(_1.Link) {
const a1_ = _1.head_
if(_1.tail_.Link) {
const a2_ = _1.tail_.head_
if(_1.tail_.tail_.Empty) {
if(((((((operator_ == "<") || (operator_ == ">")) || (operator_ == "<=")) || (operator_ == ">=")) || (operator_ == "==")) || (operator_ == "!="))) {
const t_ = ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), ff_core_List.Empty())
const t1_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const t2_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_)
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t2_, a2_.value_)
const magic_ = ((t_) => {
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_)
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("String"))) {
return ff_core_Option.Some("String")
return
}
}
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("Float"))) {
return ff_core_Option.Some("Float")
return
}
}
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("Int"))) {
return ff_core_Option.Some("Int")
return
}
}
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("Char"))) {
return ff_core_Option.Some("Char")
return
}
}
}
}
{
return ff_core_Option.None()
return
}
throw new Error('Unexhaustive pattern match')
}
})
const chooseType_ = ((_1, _2) => {
{
if(_1.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, t1_, t2_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_)
return
}
}
{
if(_2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, t2_, t1_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_)
return
}
}
{
if(((operator_ == "==") || (operator_ == "!="))) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, t2_, t1_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_)
return
}
}
{
if(_1.None) {
if(_2.None) {
ff_compiler_Inference.fail_(e_.at_, "Operators on unknown types not currently supported")
return
}
}
}
throw new Error('Unexhaustive pattern match')
})
chooseType_(magic_(t1_), magic_(t2_))
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, _c.function_, _c.typeArguments_, ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_), ff_core_List.Empty())))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
}
{
if(_1.Link) {
const a1_ = _1.head_
if(_1.tail_.Link) {
const a2_ = _1.tail_.head_
if(_1.tail_.tail_.Empty) {
if(((((((operator_ == "+") || (operator_ == "-")) || (operator_ == "*")) || (operator_ == "/")) || (operator_ == "%")) || (operator_ == "^"))) {
const t1_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const t2_ = ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, e_.at_)
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_)
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t2_, a2_.value_)
const magic_ = ((t_) => {
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_)
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("Float"))) {
return ff_core_Option.Some("Float")
return
}
}
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if((name_ == ff_compiler_Inference.core_("Int"))) {
return ff_core_Option.Some("Int")
return
}
}
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_
if(_1.generics_.Empty) {
if(((operator_ == "+") && (name_ == ff_compiler_Inference.core_("String")))) {
return ff_core_Option.Some("String")
return
}
}
}
}
{
return ff_core_Option.None()
return
}
throw new Error('Unexhaustive pattern match')
}
})
const chooseType_ = ((_1, _2) => {
{
if(_1.Some) {
const n_ = _1.value_
if(_2.Some) {
if((n_ == "String")) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
}
}
}
{
if(_1.Some) {
if(_2.Some) {
const n_ = _2.value_
if((n_ == "String")) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
}
}
}
{
if(_1.Some) {
const n_ = _1.value_
if(_2.Some) {
if((n_ == "Float")) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
}
}
}
{
if(_1.Some) {
if(_2.Some) {
const n_ = _2.value_
if((n_ == "Float")) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
}
}
}
{
if(_1.Some) {
const n_ = _1.value_
if(_2.Some) {
if((n_ == "Int")) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
}
}
}
{
if(_1.Some) {
if(_2.Some) {
const n_ = _2.value_
if((n_ == "Int")) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
}
}
}
{
if(_1.Some) {
if(_2.None) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, t1_, t2_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
}
}
{
if(_1.None) {
if(_2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, t2_, t1_)
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
}
}
{
if(_1.None) {
if(_2.None) {
ff_compiler_Inference.fail_(e_.at_, "Operators on unknown types not currently supported")
return
}
}
}
throw new Error('Unexhaustive pattern match')
})
chooseType_(magic_(t1_), magic_(t2_))
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, _c.function_, _c.typeArguments_, ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), ff_core_List.Link((((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_), ff_core_List.Empty())))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
}
{
return ff_compiler_Inference.fail_(e_.at_, ("Unknown operator: " + operator_))
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Inference_inferEtaExpansion(self_, environment_, expected_, at_, signature_, term_) {
const parameters_ = ff_core_List.List_map(ff_core_List.List_filter(signature_.parameters_, ((_w1) => {
return ff_core_Option.Option_isEmpty(_w1.default_)
})), ((p_) => {
return p_.name_
}))
const body_ = ff_compiler_Syntax.ECall(at_, false, term_, ff_core_List.Empty(), ff_core_List.List_map(parameters_, ((x_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(x_), ff_compiler_Syntax.EVariable(at_, x_, ff_core_List.Empty(), ff_core_List.Empty()))
})))
const lambda_ = ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.List_map(parameters_, ((_w1) => {
return ff_compiler_Syntax.PVariable(at_, ff_core_Option.Some(_w1))
})), ff_core_Option.None(), body_), ff_core_List.Empty())))
return ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, lambda_)
}

export function Inference_inferArguments(self_, at_, environment_, parameters_, arguments_) {
let remainingArguments_ = arguments_
const newArguments_ = ff_core_List.List_map(parameters_, ((p_) => {
const t_ = p_.valueType_
function defaultArgument_() {
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.default_, ((e_) => {
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, e_)
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(p_.name_), e2_)
})), (() => {
return ff_compiler_Inference.fail_(at_, ("Missing argument: " + p_.name_))
}))
}
{
const _1 = remainingArguments_
{
if(_1.Empty) {
return defaultArgument_()
return
}
}
{
if(_1.Link) {
const at_ = _1.head_.at_
if(_1.head_.name_.None) {
const e_ = _1.head_.value_
const remaining_ = _1.tail_
remainingArguments_ = remaining_
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, e_)
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(p_.name_), e2_)
return
}
}
}
{
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(remainingArguments_, ((_w1) => {
return ff_core_Option.Option_contains(_w1.name_, p_.name_)
})), ((_1) => {
{
const at_ = _1.at_
const e_ = _1.value_
remainingArguments_ = ff_core_List.List_filter(remainingArguments_, ((_w1) => {
return (!ff_core_Option.Option_contains(_w1.name_, p_.name_))
}))
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, e_)
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(p_.name_), e2_)
return
}
throw new Error('Unexhaustive pattern match')
})), (() => {
return defaultArgument_()
}))
return
}
throw new Error('Unexhaustive pattern match')
}
}))
ff_core_Option.Option_each(ff_core_List.List_first(remainingArguments_), ((_1) => {
{
const at_ = _1.at_
if(_1.name_.None) {
ff_compiler_Inference.fail_(at_, "Too many arguments")
return
}
}
{
const at_ = _1.at_
if(_1.name_.Some) {
const name_ = _1.name_.value_
ff_compiler_Inference.fail_(at_, ("Unknown argument: " + name_))
return
}
}
throw new Error('Unexhaustive pattern match')
}))
return newArguments_
}

export function Inference_lookup(self_, environment_, at_, symbol_, typeArguments_) {
return ff_core_Option.Option_map(ff_core_Map.Map_get(environment_.symbols_, symbol_), ((scheme_) => {
const instantiation_ = ((!ff_core_List.List_isEmpty(typeArguments_))
? (function() {
if((ff_core_List.List_size(scheme_.signature_.generics_) != ff_core_List.List_size(typeArguments_))) {
ff_compiler_Inference.fail_(at_, ((((("Wrong number of type parameters for " + symbol_) + ", expected ") + ff_core_List.List_size(scheme_.signature_.generics_)) + ", got ") + ff_core_List.List_size(typeArguments_)))
}
return ff_core_List.List_zip(scheme_.signature_.generics_, typeArguments_)
})()
: ff_core_List.List_map(scheme_.signature_.generics_, ((name_) => {
return ff_core_Pair.Pair(name_, ff_compiler_Unification.Unification_freshTypeVariable(self_.unification_, at_))
})))
const instantiationMap_ = ff_core_List.List_toMap(instantiation_)
const parameters_ = ff_core_List.List_map(scheme_.signature_.parameters_, ((p_) => {
{
const _1 = p_
{
const _c = _1
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, p_.valueType_), _c.default_)
return
}
throw new Error('Unexhaustive pattern match')
}
}))
const returnType_ = ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, scheme_.signature_.returnType_)
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, ff_core_List.Empty(), ff_core_List.Empty(), parameters_, returnType_)
}))(scheme_.signature_)
return ff_compiler_Environment.Instantiated(instantiation_, (((_c) => {
return ff_compiler_Environment.Scheme(_c.isVariable_, _c.isMutable_, _c.isNewtype_, signature_)
}))(scheme_))
}))
}


