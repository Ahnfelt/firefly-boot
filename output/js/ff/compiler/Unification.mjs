import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Unification
export function Unification(substitution_, constraints_, nextUnificationVariableIndex_, instances_, affects_) {
return {substitution_, constraints_, nextUnificationVariableIndex_, instances_, affects_};
}

// type ConstraintGenerics
export function ConstraintGenerics(at_, generics_) {
return {at_, generics_};
}

// type InstanceKey
export function InstanceKey(traitName_, typeName_) {
return {traitName_, typeName_};
}

// type InstanceValue
export function InstanceValue(generics_, constraints_, packageName_, moduleName_, traitName_, typeArguments_) {
return {generics_, constraints_, packageName_, moduleName_, traitName_, typeArguments_};
}



export function make_(modules_) {
function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}
return ff_compiler_Unification.Unification(ff_core_Map.empty_(), ff_core_Map.empty_(), 3, ff_core_List.List_toMap(ff_core_List.List_flatMap(modules_, ((module_) => {
const packageName_ = ((module_.packagePair_.first_ + ":") + module_.packagePair_.second_);
const moduleName_ = ff_core_String.String_dropLast(module_.file_, ff_core_String.String_size(".ff"));
return ff_core_List.List_map(module_.instances_, ((definition_) => {
const typeName_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
return
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
return fail_(definition_.at_, ("Unexpected unification variable: $" + i_))
return
}
}
}))(ff_core_List.List_expectFirst(definition_.typeArguments_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(definition_.traitName_, typeName_), ff_compiler_Unification.InstanceValue(definition_.generics_, definition_.constraints_, packageName_, moduleName_, definition_.traitName_, definition_.typeArguments_))
}))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int))
}

export async function make_$(modules_, $controller) {
function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}
return ff_compiler_Unification.Unification(ff_core_Map.empty_(), ff_core_Map.empty_(), 3, ff_core_List.List_toMap(ff_core_List.List_flatMap(modules_, ((module_) => {
const packageName_ = ((module_.packagePair_.first_ + ":") + module_.packagePair_.second_);
const moduleName_ = ff_core_String.String_dropLast(module_.file_, ff_core_String.String_size(".ff"));
return ff_core_List.List_map(module_.instances_, ((definition_) => {
const typeName_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
return
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
return fail_(definition_.at_, ("Unexpected unification variable: $" + i_))
return
}
}
}))(ff_core_List.List_expectFirst(definition_.typeArguments_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(definition_.traitName_, typeName_), ff_compiler_Unification.InstanceValue(definition_.generics_, definition_.constraints_, packageName_, moduleName_, definition_.traitName_, definition_.typeArguments_))
}))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int))
}

export function Unification_fail(self_, at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Unification_withLocalInstances(self_, instances_, body_) {
const oldInstances_ = self_.instances_;
self_.instances_ = ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey);
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return body_()
})), (() => {
self_.instances_ = oldInstances_
})))
}

export function Unification_freshUnificationVariable(self_, at_) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextUnificationVariableIndex_);
self_.nextUnificationVariableIndex_ += 3;
return result_
}

export function Unification_instantiate(self_, instantiation_, type_) {
{
const self_a = self_;
const instantiation_a = instantiation_;
const type_a = type_;
{
const self_ = self_a;
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
if(type_a.generics_.Empty) {
{
const _1 = ff_core_Map.Map_get(instantiation_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
if(_1.Some) {
const t_ = _1.value_;
return t_
return
}
}
{
if(_1.None) {
return type_
return
}
}
}
return
}
}
}
{
const self_ = self_a;
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
const generics_ = type_a.generics_;
return ff_compiler_Syntax.TConstructor(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}
}
{
const self_ = self_a;
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, t_)
return
}
}
}
{
const self_ = self_a;
if(type_a.TVariable) {
const i_ = type_a.index_;
return type_
return
}
}
}
}

export function Unification_instantiateConstraint(self_, instantiation_, constraint_) {
{
const self_a = self_;
const instantiation_a = instantiation_;
const constraint_a = constraint_;
{
const self_ = self_a;
const at_ = constraint_a.at_;
const name_ = constraint_a.name_;
const generics_ = constraint_a.generics_;
return ff_compiler_Syntax.Constraint(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}
}
}

export function Unification_constrain(self_, at_, type_, constraintName_, generics_) {
{
const _1 = type_;
{
if(_1.TVariable) {
const i_ = _1.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_constrain(self_, at_, t_, constraintName_, generics_)
return
}
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
{
const _1 = ff_core_Map.Map_get(self_.constraints_, i_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
{
if(_1.None) {
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_)), ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
{
if(_1.Some) {
const map_ = _1.value_;
{
const _1 = ff_core_Map.Map_get(map_, constraintName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
if(_1.None) {
const newMap_ = ff_core_Map.Map_add(map_, constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, newMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
{
if(_1.Some) {
const generics2_ = _1.value_.generics_;
ff_core_List.List_each(ff_core_List.List_zip(generics_, generics2_), ((_1) => {
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}))
return
}
}
}
return
}
}
}
return
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_;
const generics2_ = _1.generics_;
{
const _1 = ff_core_Map.Map_get(self_.instances_, ff_compiler_Unification.InstanceKey(constraintName_, name_), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey);
{
if(_1.None) {
const g1_ = (ff_core_List.List_isEmpty(generics_)
? ""
: "[...]");
const g2_ = (ff_core_List.List_isEmpty(generics2_)
? ""
: "[...]");
ff_compiler_Unification.Unification_fail(self_, at_, ((((("No such instance: " + name_) + g2_) + ": ") + constraintName_) + g1_))
return
}
}
{
if(_1.Some) {
const definition_ = _1.value_;
const unificationVariables_ = ff_core_List.List_map(definition_.generics_, ((_) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_, at_)
}));
const instantiation_ = ff_core_List.List_toMap(ff_core_List.List_zip(definition_.generics_, unificationVariables_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitType1_ = ff_compiler_Unification.Unification_instantiate(self_, instantiation_, ff_compiler_Syntax.TConstructor(at_, definition_.traitName_, definition_.typeArguments_));
const traitType2_ = ff_compiler_Syntax.TConstructor(at_, constraintName_, ff_core_List.Link(type_, generics_));
ff_compiler_Unification.Unification_unify(self_, at_, traitType1_, traitType2_);
ff_core_List.List_each(definition_.constraints_, ((constraint_) => {
{
const _1 = ff_compiler_Unification.Unification_instantiateConstraint(self_, instantiation_, constraint_);
{
const constraintName_ = _1.name_;
const newGenerics_ = _1.generics_;
ff_compiler_Unification.Unification_constrain(self_, at_, ff_core_List.List_expectFirst(newGenerics_), constraintName_, ff_core_List.List_dropFirst(newGenerics_, 1))
return
}
}
}))
return
}
}
}
return
}
}
}
}

export function Unification_get(self_, index_) {
return ff_core_Option.Option_map(ff_core_Map.Map_get(self_.substitution_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_1) => {
{
if(_1.TVariable) {
const i_ = _1.index_;
const _guard1 = ff_core_Map.Map_get(self_.substitution_, i_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
if(_guard1.Some) {
const t_ = _guard1.value_;
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, t_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
return t_
return
}
}
}
{
const t_ = _1;
return t_
return
}
}))
}

export function Unification_substitute(self_, type_) {
{
const self_a = self_;
const type_a = type_;
{
const self_ = self_a;
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_substitute(self_, t_)
return
}
}
}
{
const self_ = self_a;
if(type_a.TVariable) {
return type_
return
}
}
{
const self_ = self_a;
if(type_a.TConstructor) {
const t_ = type_a;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, _c.name_, ff_core_List.List_map(t_.generics_, ((t_) => {
return ff_compiler_Unification.Unification_substitute(self_, t_)
})))
return
}
}
return
}
}
}
}

export function Unification_unify(self_, at_, t1_, t2_) {
{
const self_a = self_;
const at_a = at_;
const t1_a = t1_;
const t2_a = t2_;
{
const self_ = self_a;
if(t1_a.TVariable) {
const i1_ = t1_a.index_;
if(t2_a.TVariable) {
const i2_ = t2_a.index_;
const _guard1 = (i1_ == i2_);
if(_guard1) {

return
}
}
}
}
{
const self_ = self_a;
if(t1_a.TVariable) {
const i_ = t1_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t_, t2_)
return
}
}
}
{
const self_ = self_a;
if(t2_a.TVariable) {
const i_ = t2_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t_)
return
}
}
}
{
const self_ = self_a;
if(t1_a.TVariable) {
const i_ = t1_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t2_)
return
}
}
{
const self_ = self_a;
if(t2_a.TVariable) {
const i_ = t2_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t1_)
return
}
}
{
const self_ = self_a;
if(t1_a.TConstructor) {
const name1_ = t1_a.name_;
const generics1_ = t1_a.generics_;
if(t2_a.TConstructor) {
const name2_ = t2_a.name_;
const generics2_ = t2_a.generics_;
if(((name1_ != name2_) || (ff_core_List.List_size(generics1_) != ff_core_List.List_size(generics2_)))) {
ff_compiler_Unification.Unification_fail(self_, at_, ((("Type mismatch: " + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, t1_))) + " vs. ") + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, t2_))))
};
ff_core_List.List_each(ff_core_List.List_zip(generics1_, generics2_), ((_1) => {
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}))
return
}
}
}
}
}

export function Unification_bind(self_, at_, index_, type_) {
if(ff_compiler_Unification.Unification_occursIn(self_, index_, type_)) {
ff_compiler_Unification.Unification_fail(self_, at_, ((("Infinite type: $" + index_) + " = ") + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, type_))))
};
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, type_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
ff_core_Option.Option_each(ff_core_Map.Map_get(self_.constraints_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((map_) => {
self_.constraints_ = ff_core_Map.Map_remove(self_.constraints_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
ff_core_List.List_each(ff_core_Map.Map_pairs(map_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const name_ = _1.first_;
const at2_ = _1.second_.at_;
const generics_ = _1.second_.generics_;
ff_compiler_Unification.Unification_constrain(self_, at2_, type_, name_, generics_)
return
}
}))
}));
ff_core_Option.Option_each(ff_core_Map.Map_get(self_.affects_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((affected_) => {
ff_core_Map.Map_remove(self_.affects_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
ff_core_Set.Set_each(affected_, ((i_) => {
ff_compiler_Unification.Unification_affect(self_, at_, type_, ff_compiler_Syntax.TVariable(at_, i_))
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}))
}

export function Unification_affect(self_, at_, source_, target_) {
{
const _1 = ff_core_Pair.Pair(ff_compiler_Unification.Unification_substitute(self_, source_), ff_compiler_Unification.Unification_substitute(self_, target_));
{
if(_1.first_.TVariable) {
const i1_ = _1.first_.index_;
if(_1.second_.TVariable) {
const i2_ = _1.second_.index_;
const is_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.affects_, i1_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), (() => {
return ff_core_List.List_toSet(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}));
self_.affects_ = ff_core_Map.Map_add(self_.affects_, i1_, ff_core_Set.Set_add(is_, i2_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
}
{
if(_1.second_.TConstructor) {
if(_1.second_.name_ == "Q$") {

return
}
}
}
{
if(_1.first_.TConstructor) {
if(_1.first_.name_ == "ff:core/Nothing.Nothing") {

return
}
}
}
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}
}

export function Unification_occursIn(self_, index_, t_) {
{
const self_a = self_;
const index_a = index_;
const t_a = t_;
{
const self_ = self_a;
if(t_a.TVariable) {
const i_ = t_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const type_ = _guard1.value_;
return ff_compiler_Unification.Unification_occursIn(self_, index_, type_)
return
}
}
}
{
const self_ = self_a;
if(t_a.TVariable) {
const i_ = t_a.index_;
return (i_ == index_)
return
}
}
{
const self_ = self_a;
if(t_a.TConstructor) {
const generics_ = t_a.generics_;
return ff_core_List.List_any(generics_, ((t_) => {
return ff_compiler_Unification.Unification_occursIn(self_, index_, t_)
}))
return
}
}
}
}

export async function Unification_fail$(self_, at_, message_, $controller) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function Unification_withLocalInstances$(self_, instances_, body_, $controller) {
const oldInstances_ = self_.instances_;
self_.instances_ = ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey);
return ff_core_Try.Try_expect(ff_core_Try.Try_finally((await ff_core_Core.try_$((async ($controller) => {
return (await body_($controller))
}), $controller)), (() => {
self_.instances_ = oldInstances_
})))
}

export async function Unification_freshUnificationVariable$(self_, at_, $controller) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextUnificationVariableIndex_);
self_.nextUnificationVariableIndex_ += 3;
return result_
}

export async function Unification_instantiate$(self_, instantiation_, type_, $controller) {
{
const self_a = self_;
const instantiation_a = instantiation_;
const type_a = type_;
{
const self_ = self_a;
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
if(type_a.generics_.Empty) {
{
const _1 = ff_core_Map.Map_get(instantiation_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
if(_1.Some) {
const t_ = _1.value_;
return t_
return
}
}
{
if(_1.None) {
return type_
return
}
}
}
return
}
}
}
{
const self_ = self_a;
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
const generics_ = type_a.generics_;
return ff_compiler_Syntax.TConstructor(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}
}
{
const self_ = self_a;
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, t_)
return
}
}
}
{
const self_ = self_a;
if(type_a.TVariable) {
const i_ = type_a.index_;
return type_
return
}
}
}
}

export async function Unification_instantiateConstraint$(self_, instantiation_, constraint_, $controller) {
{
const self_a = self_;
const instantiation_a = instantiation_;
const constraint_a = constraint_;
{
const self_ = self_a;
const at_ = constraint_a.at_;
const name_ = constraint_a.name_;
const generics_ = constraint_a.generics_;
return ff_compiler_Syntax.Constraint(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}
}
}

export async function Unification_constrain$(self_, at_, type_, constraintName_, generics_, $controller) {
{
const _1 = type_;
{
if(_1.TVariable) {
const i_ = _1.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_constrain(self_, at_, t_, constraintName_, generics_)
return
}
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
{
const _1 = ff_core_Map.Map_get(self_.constraints_, i_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
{
if(_1.None) {
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_)), ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
{
if(_1.Some) {
const map_ = _1.value_;
{
const _1 = ff_core_Map.Map_get(map_, constraintName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
if(_1.None) {
const newMap_ = ff_core_Map.Map_add(map_, constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, newMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
{
if(_1.Some) {
const generics2_ = _1.value_.generics_;
ff_core_List.List_each(ff_core_List.List_zip(generics_, generics2_), ((_1) => {
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}))
return
}
}
}
return
}
}
}
return
}
}
{
if(_1.TConstructor) {
const name_ = _1.name_;
const generics2_ = _1.generics_;
{
const _1 = ff_core_Map.Map_get(self_.instances_, ff_compiler_Unification.InstanceKey(constraintName_, name_), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey);
{
if(_1.None) {
const g1_ = (ff_core_List.List_isEmpty(generics_)
? ""
: "[...]");
const g2_ = (ff_core_List.List_isEmpty(generics2_)
? ""
: "[...]");
ff_compiler_Unification.Unification_fail(self_, at_, ((((("No such instance: " + name_) + g2_) + ": ") + constraintName_) + g1_))
return
}
}
{
if(_1.Some) {
const definition_ = _1.value_;
const unificationVariables_ = ff_core_List.List_map(definition_.generics_, ((_) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_, at_)
}));
const instantiation_ = ff_core_List.List_toMap(ff_core_List.List_zip(definition_.generics_, unificationVariables_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitType1_ = ff_compiler_Unification.Unification_instantiate(self_, instantiation_, ff_compiler_Syntax.TConstructor(at_, definition_.traitName_, definition_.typeArguments_));
const traitType2_ = ff_compiler_Syntax.TConstructor(at_, constraintName_, ff_core_List.Link(type_, generics_));
ff_compiler_Unification.Unification_unify(self_, at_, traitType1_, traitType2_);
ff_core_List.List_each(definition_.constraints_, ((constraint_) => {
{
const _1 = ff_compiler_Unification.Unification_instantiateConstraint(self_, instantiation_, constraint_);
{
const constraintName_ = _1.name_;
const newGenerics_ = _1.generics_;
ff_compiler_Unification.Unification_constrain(self_, at_, ff_core_List.List_expectFirst(newGenerics_), constraintName_, ff_core_List.List_dropFirst(newGenerics_, 1))
return
}
}
}))
return
}
}
}
return
}
}
}
}

export async function Unification_get$(self_, index_, $controller) {
return ff_core_Option.Option_map(ff_core_Map.Map_get(self_.substitution_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_1) => {
{
if(_1.TVariable) {
const i_ = _1.index_;
const _guard1 = ff_core_Map.Map_get(self_.substitution_, i_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
if(_guard1.Some) {
const t_ = _guard1.value_;
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, t_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
return t_
return
}
}
}
{
const t_ = _1;
return t_
return
}
}))
}

export async function Unification_substitute$(self_, type_, $controller) {
{
const self_a = self_;
const type_a = type_;
{
const self_ = self_a;
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_substitute(self_, t_)
return
}
}
}
{
const self_ = self_a;
if(type_a.TVariable) {
return type_
return
}
}
{
const self_ = self_a;
if(type_a.TConstructor) {
const t_ = type_a;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, _c.name_, ff_core_List.List_map(t_.generics_, ((t_) => {
return ff_compiler_Unification.Unification_substitute(self_, t_)
})))
return
}
}
return
}
}
}
}

export async function Unification_unify$(self_, at_, t1_, t2_, $controller) {
{
const self_a = self_;
const at_a = at_;
const t1_a = t1_;
const t2_a = t2_;
{
const self_ = self_a;
if(t1_a.TVariable) {
const i1_ = t1_a.index_;
if(t2_a.TVariable) {
const i2_ = t2_a.index_;
const _guard1 = (i1_ == i2_);
if(_guard1) {

return
}
}
}
}
{
const self_ = self_a;
if(t1_a.TVariable) {
const i_ = t1_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t_, t2_)
return
}
}
}
{
const self_ = self_a;
if(t2_a.TVariable) {
const i_ = t2_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t_)
return
}
}
}
{
const self_ = self_a;
if(t1_a.TVariable) {
const i_ = t1_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t2_)
return
}
}
{
const self_ = self_a;
if(t2_a.TVariable) {
const i_ = t2_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t1_)
return
}
}
{
const self_ = self_a;
if(t1_a.TConstructor) {
const name1_ = t1_a.name_;
const generics1_ = t1_a.generics_;
if(t2_a.TConstructor) {
const name2_ = t2_a.name_;
const generics2_ = t2_a.generics_;
if(((name1_ != name2_) || (ff_core_List.List_size(generics1_) != ff_core_List.List_size(generics2_)))) {
ff_compiler_Unification.Unification_fail(self_, at_, ((("Type mismatch: " + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, t1_))) + " vs. ") + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, t2_))))
};
ff_core_List.List_each(ff_core_List.List_zip(generics1_, generics2_), ((_1) => {
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}))
return
}
}
}
}
}

export async function Unification_bind$(self_, at_, index_, type_, $controller) {
if(ff_compiler_Unification.Unification_occursIn(self_, index_, type_)) {
ff_compiler_Unification.Unification_fail(self_, at_, ((("Infinite type: $" + index_) + " = ") + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, type_))))
};
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, type_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
ff_core_Option.Option_each(ff_core_Map.Map_get(self_.constraints_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((map_) => {
self_.constraints_ = ff_core_Map.Map_remove(self_.constraints_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
ff_core_List.List_each(ff_core_Map.Map_pairs(map_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const name_ = _1.first_;
const at2_ = _1.second_.at_;
const generics_ = _1.second_.generics_;
ff_compiler_Unification.Unification_constrain(self_, at2_, type_, name_, generics_)
return
}
}))
}));
ff_core_Option.Option_each(ff_core_Map.Map_get(self_.affects_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((affected_) => {
ff_core_Map.Map_remove(self_.affects_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
ff_core_Set.Set_each(affected_, ((i_) => {
ff_compiler_Unification.Unification_affect(self_, at_, type_, ff_compiler_Syntax.TVariable(at_, i_))
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}))
}

export async function Unification_affect$(self_, at_, source_, target_, $controller) {
{
const _1 = ff_core_Pair.Pair(ff_compiler_Unification.Unification_substitute(self_, source_), ff_compiler_Unification.Unification_substitute(self_, target_));
{
if(_1.first_.TVariable) {
const i1_ = _1.first_.index_;
if(_1.second_.TVariable) {
const i2_ = _1.second_.index_;
const is_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.affects_, i1_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), (() => {
return ff_core_List.List_toSet(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}));
self_.affects_ = ff_core_Map.Map_add(self_.affects_, i1_, ff_core_Set.Set_add(is_, i2_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
}
{
if(_1.second_.TConstructor) {
if(_1.second_.name_ == "Q$") {

return
}
}
}
{
if(_1.first_.TConstructor) {
if(_1.first_.name_ == "ff:core/Nothing.Nothing") {

return
}
}
}
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}
}

export async function Unification_occursIn$(self_, index_, t_, $controller) {
{
const self_a = self_;
const index_a = index_;
const t_a = t_;
{
const self_ = self_a;
if(t_a.TVariable) {
const i_ = t_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const type_ = _guard1.value_;
return ff_compiler_Unification.Unification_occursIn(self_, index_, type_)
return
}
}
}
{
const self_ = self_a;
if(t_a.TVariable) {
const i_ = t_a.index_;
return (i_ == index_)
return
}
}
{
const self_ = self_a;
if(t_a.TConstructor) {
const generics_ = t_a.generics_;
return ff_core_List.List_any(generics_, ((t_) => {
return ff_compiler_Unification.Unification_occursIn(self_, index_, t_)
}))
return
}
}
}
}

export const ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey = {
compare_(x_, y_) {
{
const _1 = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
{
if(_1.OrderingSame) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
},
async compare_$(x_, y_, $controller) {
{
const _1 = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
{
if(_1.OrderingSame) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
}
};


