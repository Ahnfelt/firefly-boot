

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Box from "../../ff/core/Box.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

import * as ff_core_Json from "../../ff/core/Json.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Lock from "../../ff/core/Lock.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Path from "../../ff/core/Path.mjs"

import * as ff_core_Random from "../../ff/core/Random.mjs"

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Unification
export function Unification(substitution_, constraints_, nextUnificationVariableIndex_, instances_, affects_, attemptFixes_) {
return {substitution_, constraints_, nextUnificationVariableIndex_, instances_, affects_, attemptFixes_};
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
export function InstanceValue(generics_, constraints_, packagePair_, moduleName_, traitName_, typeArguments_) {
return {generics_, constraints_, packagePair_, moduleName_, traitName_, typeArguments_};
}



export function fail_(at_, message_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}

export function make_(modules_, attemptFixes_) {
return ff_compiler_Unification.Unification(ff_core_Map.empty_(), ff_core_Map.empty_(), 3, ff_core_List.List_toMap(ff_core_List.List_flatMap(modules_, ((module_) => {
const moduleName_ = ff_core_String.String_dropLast(module_.file_, ff_core_String.String_size(".ff"));
return ff_core_List.List_map(module_.instances_, ((definition_) => {
const typeName_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
return ff_compiler_Unification.fail_(definition_.at_, ("Unexpected unification variable: $" + i_))
}
}
}))(ff_core_List.List_grabFirst(definition_.typeArguments_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(definition_.traitName_, typeName_), ff_compiler_Unification.InstanceValue(definition_.generics_, definition_.constraints_, module_.packagePair_, moduleName_, definition_.traitName_, definition_.typeArguments_))
}))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), attemptFixes_)
}

export async function fail_$(at_, message_, $task) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}

export async function make_$(modules_, attemptFixes_, $task) {
return ff_compiler_Unification.Unification(ff_core_Map.empty_(), ff_core_Map.empty_(), 3, ff_core_List.List_toMap(ff_core_List.List_flatMap(modules_, ((module_) => {
const moduleName_ = ff_core_String.String_dropLast(module_.file_, ff_core_String.String_size(".ff"));
return ff_core_List.List_map(module_.instances_, ((definition_) => {
const typeName_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
return ff_compiler_Unification.fail_(definition_.at_, ("Unexpected unification variable: $" + i_))
}
}
}))(ff_core_List.List_grabFirst(definition_.typeArguments_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(definition_.traitName_, typeName_), ff_compiler_Unification.InstanceValue(definition_.generics_, definition_.constraints_, module_.packagePair_, moduleName_, definition_.traitName_, definition_.typeArguments_))
}))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), attemptFixes_)
}

export function Unification_withLocalInstances(self_, instances_, body_) {
const oldInstances_ = self_.instances_;
self_.instances_ = ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey);
try {
return body_()
} finally {
self_.instances_ = oldInstances_
}
}

export function Unification_freshUnificationVariable(self_, at_) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextUnificationVariableIndex_);
self_.nextUnificationVariableIndex_ += 3;
return result_
}

export function Unification_instantiate(self_, instantiation_, type_) {
const self_a = self_;
const instantiation_a = instantiation_;
const type_a = type_;
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
if(type_a.generics_.length === 0) {
{
const _1 = ff_core_Map.Map_get(instantiation_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
if(_1.Some) {
const t_ = _1.value_;
return t_
}
}
{
if(_1.None) {
return type_
}
}
}
return
}
}
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
const generics_ = type_a.generics_;
return ff_compiler_Syntax.TConstructor(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, t_)
}
}
if(type_a.TVariable) {
const i_ = type_a.index_;
return type_
}
}

export function Unification_instantiateConstraint(self_, instantiation_, constraint_) {
const self_a = self_;
const instantiation_a = instantiation_;
const constraint_a = constraint_;
const at_ = constraint_a.at_;
const name_ = constraint_a.name_;
const generics_ = constraint_a.generics_;
return ff_compiler_Syntax.Constraint(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
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
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, ff_core_List.List_toMap([ff_core_Pair.Pair(constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
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
if((!self_.attemptFixes_)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((((("No such instance: " + name_) + g2_) + ": ") + constraintName_) + g1_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
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
const traitType2_ = ff_compiler_Syntax.TConstructor(at_, constraintName_, [type_, ...generics_]);
ff_compiler_Unification.Unification_unify(self_, at_, traitType1_, traitType2_);
ff_core_List.List_each(definition_.constraints_, ((constraint_) => {
{
const _1 = ff_compiler_Unification.Unification_instantiateConstraint(self_, instantiation_, constraint_);
{
const constraintName_ = _1.name_;
const newGenerics_ = _1.generics_;
ff_compiler_Unification.Unification_constrain(self_, at_, ff_core_List.List_grabFirst(newGenerics_), constraintName_, ff_core_List.List_dropFirst(newGenerics_, 1))
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
}
}
}
{
const t_ = _1;
return t_
}
}))
}

export function Unification_substitute(self_, type_) {
const self_a = self_;
const type_a = type_;
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_substitute(self_, t_)
}
}
if(type_a.TVariable) {
return type_
}
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

export function Unification_unify(self_, at_, t1_, t2_) {
const self_a = self_;
const at_a = at_;
const t1_a = t1_;
const t2_a = t2_;
if(t1_a.TVariable) {
const i1_ = t1_a.index_;
if(t2_a.TVariable) {
const i2_ = t2_a.index_;
if((i1_ === i2_)) {

return
}
}
}
if(t1_a.TVariable) {
const i_ = t1_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t_, t2_)
return
}
}
if(t2_a.TVariable) {
const i_ = t2_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t_)
return
}
}
if(t1_a.TVariable) {
const i_ = t1_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t2_)
return
}
if(t2_a.TVariable) {
const i_ = t2_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t1_)
return
}
if(t1_a.TConstructor) {
const name1_ = t1_a.name_;
const generics1_ = t1_a.generics_;
if(t2_a.TConstructor) {
const name2_ = t2_a.name_;
const generics2_ = t2_a.generics_;
if(((name1_ !== name2_) || (ff_core_List.List_size(generics1_) !== ff_core_List.List_size(generics2_)))) {
if((!self_.attemptFixes_)) {
const t3_ = ff_compiler_Unification.Unification_substitute(self_, t1_);
const t4_ = ff_compiler_Unification.Unification_substitute(self_, t2_);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((("Type mismatch: " + ff_compiler_Syntax.Type_show(t3_, [t3_, t4_])) + " vs. ") + ff_compiler_Syntax.Type_show(t4_, [t3_, t4_]))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else if((ff_core_String.String_startsWith(name1_, "Function$", 0) && ff_core_String.String_startsWith(name2_, "Function$", 0))) {
ff_core_List.List_each(ff_core_List.List_zip(ff_core_List.List_dropLast(generics1_, 1), ff_core_List.List_dropLast(generics2_, 1)), ((_1) => {
{
const t3_ = _1.first_;
const t4_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t3_, t4_)
return
}
}));
ff_core_List.List_each(ff_core_List.List_zip(ff_core_List.List_takeLast(generics1_, 1), ff_core_List.List_takeLast(generics2_, 1)), ((_1) => {
{
const t3_ = _1.first_;
const t4_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t3_, t4_)
return
}
}))
} else {}
} else {
ff_core_List.List_each(ff_core_List.List_zip(generics1_, generics2_), ((_1) => {
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}))
}
return
}
}
}

export function Unification_bind(self_, at_, index_, type_) {
if(ff_compiler_Unification.Unification_occursIn(self_, index_, type_)) {
const t_ = ff_compiler_Unification.Unification_substitute(self_, type_);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((("Infinite type: " + ff_compiler_Syntax.Type_show(ff_compiler_Syntax.TVariable(at_, index_), [t_])) + " = ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
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
return ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}));
self_.affects_ = ff_core_Map.Map_add(self_.affects_, i1_, ff_core_Set.Set_add(is_, i2_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
}
{
if(_1.second_.TConstructor) {
if(_1.second_.name_ === "Q$") {

return
}
}
}
{
if(_1.first_.TConstructor) {
if(_1.first_.name_ === "ff:core/Nothing.Nothing") {

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
const self_a = self_;
const index_a = index_;
const t_a = t_;
if(t_a.TVariable) {
const i_ = t_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const type_ = _guard1.value_;
return ff_compiler_Unification.Unification_occursIn(self_, index_, type_)
}
}
if(t_a.TVariable) {
const i_ = t_a.index_;
return (i_ === index_)
}
if(t_a.TConstructor) {
const generics_ = t_a.generics_;
return ff_core_List.List_any(generics_, ((t_) => {
return ff_compiler_Unification.Unification_occursIn(self_, index_, t_)
}))
return
}
}

export async function Unification_withLocalInstances$(self_, instances_, body_, $task) {
const oldInstances_ = self_.instances_;
self_.instances_ = ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey);
try {
return (await body_($task))
} finally {
self_.instances_ = oldInstances_
}
}

export async function Unification_freshUnificationVariable$(self_, at_, $task) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextUnificationVariableIndex_);
self_.nextUnificationVariableIndex_ += 3;
return result_
}

export async function Unification_instantiate$(self_, instantiation_, type_, $task) {
const self_a = self_;
const instantiation_a = instantiation_;
const type_a = type_;
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
if(type_a.generics_.length === 0) {
{
const _1 = ff_core_Map.Map_get(instantiation_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
if(_1.Some) {
const t_ = _1.value_;
return t_
}
}
{
if(_1.None) {
return type_
}
}
}
return
}
}
if(type_a.TConstructor) {
const at_ = type_a.at_;
const name_ = type_a.name_;
const generics_ = type_a.generics_;
return ff_compiler_Syntax.TConstructor(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, t_)
}
}
if(type_a.TVariable) {
const i_ = type_a.index_;
return type_
}
}

export async function Unification_instantiateConstraint$(self_, instantiation_, constraint_, $task) {
const self_a = self_;
const instantiation_a = instantiation_;
const constraint_a = constraint_;
const at_ = constraint_a.at_;
const name_ = constraint_a.name_;
const generics_ = constraint_a.generics_;
return ff_compiler_Syntax.Constraint(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}

export async function Unification_constrain$(self_, at_, type_, constraintName_, generics_, $task) {
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
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, ff_core_List.List_toMap([ff_core_Pair.Pair(constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
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
if((!self_.attemptFixes_)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((((("No such instance: " + name_) + g2_) + ": ") + constraintName_) + g1_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
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
const traitType2_ = ff_compiler_Syntax.TConstructor(at_, constraintName_, [type_, ...generics_]);
ff_compiler_Unification.Unification_unify(self_, at_, traitType1_, traitType2_);
ff_core_List.List_each(definition_.constraints_, ((constraint_) => {
{
const _1 = ff_compiler_Unification.Unification_instantiateConstraint(self_, instantiation_, constraint_);
{
const constraintName_ = _1.name_;
const newGenerics_ = _1.generics_;
ff_compiler_Unification.Unification_constrain(self_, at_, ff_core_List.List_grabFirst(newGenerics_), constraintName_, ff_core_List.List_dropFirst(newGenerics_, 1))
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

export async function Unification_get$(self_, index_, $task) {
return ff_core_Option.Option_map(ff_core_Map.Map_get(self_.substitution_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_1) => {
{
if(_1.TVariable) {
const i_ = _1.index_;
const _guard1 = ff_core_Map.Map_get(self_.substitution_, i_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
if(_guard1.Some) {
const t_ = _guard1.value_;
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, t_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
return t_
}
}
}
{
const t_ = _1;
return t_
}
}))
}

export async function Unification_substitute$(self_, type_, $task) {
const self_a = self_;
const type_a = type_;
if(type_a.TVariable) {
const i_ = type_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
return ff_compiler_Unification.Unification_substitute(self_, t_)
}
}
if(type_a.TVariable) {
return type_
}
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

export async function Unification_unify$(self_, at_, t1_, t2_, $task) {
const self_a = self_;
const at_a = at_;
const t1_a = t1_;
const t2_a = t2_;
if(t1_a.TVariable) {
const i1_ = t1_a.index_;
if(t2_a.TVariable) {
const i2_ = t2_a.index_;
if((i1_ === i2_)) {

return
}
}
}
if(t1_a.TVariable) {
const i_ = t1_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t_, t2_)
return
}
}
if(t2_a.TVariable) {
const i_ = t2_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const t_ = _guard1.value_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t_)
return
}
}
if(t1_a.TVariable) {
const i_ = t1_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t2_)
return
}
if(t2_a.TVariable) {
const i_ = t2_a.index_;
ff_compiler_Unification.Unification_bind(self_, at_, i_, t1_)
return
}
if(t1_a.TConstructor) {
const name1_ = t1_a.name_;
const generics1_ = t1_a.generics_;
if(t2_a.TConstructor) {
const name2_ = t2_a.name_;
const generics2_ = t2_a.generics_;
if(((name1_ !== name2_) || (ff_core_List.List_size(generics1_) !== ff_core_List.List_size(generics2_)))) {
if((!self_.attemptFixes_)) {
const t3_ = ff_compiler_Unification.Unification_substitute(self_, t1_);
const t4_ = ff_compiler_Unification.Unification_substitute(self_, t2_);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((("Type mismatch: " + ff_compiler_Syntax.Type_show(t3_, [t3_, t4_])) + " vs. ") + ff_compiler_Syntax.Type_show(t4_, [t3_, t4_]))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else if((ff_core_String.String_startsWith(name1_, "Function$", 0) && ff_core_String.String_startsWith(name2_, "Function$", 0))) {
ff_core_List.List_each(ff_core_List.List_zip(ff_core_List.List_dropLast(generics1_, 1), ff_core_List.List_dropLast(generics2_, 1)), ((_1) => {
{
const t3_ = _1.first_;
const t4_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t3_, t4_)
return
}
}));
ff_core_List.List_each(ff_core_List.List_zip(ff_core_List.List_takeLast(generics1_, 1), ff_core_List.List_takeLast(generics2_, 1)), ((_1) => {
{
const t3_ = _1.first_;
const t4_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t3_, t4_)
return
}
}))
} else {}
} else {
ff_core_List.List_each(ff_core_List.List_zip(generics1_, generics2_), ((_1) => {
{
const t1_ = _1.first_;
const t2_ = _1.second_;
ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return
}
}))
}
return
}
}
}

export async function Unification_bind$(self_, at_, index_, type_, $task) {
if(ff_compiler_Unification.Unification_occursIn(self_, index_, type_)) {
const t_ = ff_compiler_Unification.Unification_substitute(self_, type_);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((("Infinite type: " + ff_compiler_Syntax.Type_show(ff_compiler_Syntax.TVariable(at_, index_), [t_])) + " = ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
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

export async function Unification_affect$(self_, at_, source_, target_, $task) {
{
const _1 = ff_core_Pair.Pair(ff_compiler_Unification.Unification_substitute(self_, source_), ff_compiler_Unification.Unification_substitute(self_, target_));
{
if(_1.first_.TVariable) {
const i1_ = _1.first_.index_;
if(_1.second_.TVariable) {
const i2_ = _1.second_.index_;
const is_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.affects_, i1_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), (() => {
return ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}));
self_.affects_ = ff_core_Map.Map_add(self_.affects_, i1_, ff_core_Set.Set_add(is_, i2_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
return
}
}
}
{
if(_1.second_.TConstructor) {
if(_1.second_.name_ === "Q$") {

return
}
}
}
{
if(_1.first_.TConstructor) {
if(_1.first_.name_ === "ff:core/Nothing.Nothing") {

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

export async function Unification_occursIn$(self_, index_, t_, $task) {
const self_a = self_;
const index_a = index_;
const t_a = t_;
if(t_a.TVariable) {
const i_ = t_a.index_;
const _guard1 = ff_compiler_Unification.Unification_get(self_, i_);
if(_guard1.Some) {
const type_ = _guard1.value_;
return ff_compiler_Unification.Unification_occursIn(self_, index_, type_)
}
}
if(t_a.TVariable) {
const i_ = t_a.index_;
return (i_ === index_)
}
if(t_a.TConstructor) {
const generics_ = t_a.generics_;
return ff_core_List.List_any(generics_, ((t_) => {
return ff_compiler_Unification.Unification_occursIn(self_, index_, t_)
}))
return
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_Unification_ConstraintGenerics = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Unification.ConstraintGenerics" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Unification.ConstraintGenerics" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Unification_InstanceKey = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Unification.InstanceKey" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Unification.InstanceKey" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Unification_InstanceValue = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Unification.InstanceValue" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Unification.InstanceValue" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Unification_ConstraintGenerics = {
show_(value_) {
const value_a = value_;
const z_ = value_a;
return ((((("ConstraintGenerics" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
},
async show_$(value_, $task) {
const value_a = value_;
const z_ = value_a;
return ((((("ConstraintGenerics" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
}
};

export const ff_core_Show_Show$ff_compiler_Unification_InstanceKey = {
show_(value_) {
const value_a = value_;
const z_ = value_a;
return ((((("InstanceKey" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.typeName_)) + ")")
},
async show_$(value_, $task) {
const value_a = value_;
const z_ = value_a;
return ((((("InstanceKey" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.typeName_)) + ")")
}
};

export const ff_core_Show_Show$ff_compiler_Unification_InstanceValue = {
show_(value_) {
const value_a = value_;
const z_ = value_a;
return ((((((((((((("InstanceValue" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.moduleName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ")")
},
async show_$(value_, $task) {
const value_a = value_;
const z_ = value_a;
return ((((((((((((("InstanceValue" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.moduleName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ")")
}
};

export const ff_core_Equal_Equal$ff_compiler_Unification_ConstraintGenerics = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.generics_, y_.generics_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.generics_, y_.generics_))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Unification_InstanceKey = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.traitName_ === y_.traitName_) && (x_.typeName_ === y_.typeName_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.traitName_ === y_.traitName_) && (x_.typeName_ === y_.typeName_))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Unification_InstanceValue = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && ((x_.moduleName_ === y_.moduleName_) && ((x_.traitName_ === y_.traitName_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_))))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && ((x_.moduleName_ === y_.moduleName_) && ((x_.traitName_ === y_.traitName_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_))))))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Unification_ConstraintGenerics = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_);
if((typeNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeNameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_);
if((typeNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeNameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Unification_InstanceValue = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const moduleNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.moduleName_, y_.moduleName_);
if((moduleNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return moduleNameOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
}
return
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const moduleNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.moduleName_, y_.moduleName_);
if((moduleNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return moduleNameOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
}
return
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Unification_ConstraintGenerics = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.generics_)
return
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
return ff_compiler_Unification.ConstraintGenerics(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.generics_)
return
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
return ff_compiler_Unification.ConstraintGenerics(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceKey = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.typeName_)
return
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
return ff_compiler_Unification.InstanceKey(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.typeName_)
return
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
return ff_compiler_Unification.InstanceKey(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceValue = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.moduleName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_)
return
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
return ff_compiler_Unification.InstanceValue(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.moduleName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_)
return
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
return ff_compiler_Unification.InstanceValue(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};


