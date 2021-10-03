import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

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

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Unification
export function Unification(substitution_, constraints_, nextTypeVariableIndex_, instances_) {
return {_: 'Unification', substitution_, constraints_, nextTypeVariableIndex_, instances_};
}

// type ConstraintGenerics
export function ConstraintGenerics(at_, generics_) {
return {_: 'ConstraintGenerics', at_, generics_};
}

// type InstanceKey
export function InstanceKey(traitName_, typeName_) {
return {_: 'InstanceKey', traitName_, typeName_};
}

// type InstanceValue
export function InstanceValue(generics_, constraints_, traitType_) {
return {_: 'InstanceValue', generics_, constraints_, traitType_};
}



export function make_(instances_) {
function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}
return ff_compiler_Unification.Unification(ff_core_Map.empty_(), ff_core_Map.empty_(), 2, ff_core_List.List_toMap(ff_core_List.List_map(instances_, ((definition_) => {
{
const _1 = definition_.traitType_
{
if(_1._ === 'TConstructor') {
const at_ = _1.at_
const name_ = _1.name_
if(_1.generics_._ === 'Link') {
if(_1.generics_.head_._ === 'TConstructor') {
const typeName_ = _1.generics_.head_.name_
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(name_, typeName_), ff_compiler_Unification.InstanceValue(definition_.generics_, definition_.constraints_, definition_.traitType_))
return
}}}
}
{
if(_1._ === 'TConstructor') {
const at_ = _1.at_
const name_ = _1.name_
return fail_(at_, (("Instance requires type arguments: " + name_) + "[]"))
return
}
}
{
if(_1._ === 'TVariable') {
const at_ = _1.at_
const i_ = _1.index_
return fail_(at_, ("Unexpected type variable: $" + i_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
}))))
}

export function Unification_fail(self_, at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Unification_freshTypeVariable(self_, at_) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextTypeVariableIndex_)
self_.nextTypeVariableIndex_ += 2
return result_
}

export function Unification_instantiate(self_, instantiation_, type_){
const self_a = self_
const instantiation_a = instantiation_
const type_a = type_
{
const self_ = self_a
if(type_a._ === 'TConstructor') {
const at_ = type_a.at_
const name_ = type_a.name_
if(type_a.generics_._ === 'Empty') {
{
const _1 = ff_core_Map.Map_get(instantiation_, name_)
{
if(_1._ === 'Some') {
const t_ = _1.value_
return t_
return
}
}
{
if(_1._ === 'None') {
return type_
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}}
}
{
const self_ = self_a
if(type_a._ === 'TConstructor') {
const at_ = type_a.at_
const name_ = type_a.name_
const generics_ = type_a.generics_
return ff_compiler_Syntax.TConstructor(at_, name_, ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, _w1)
})))
return
}
}
{
const self_ = self_a
if(type_a._ === 'TVariable') {
const i_ = type_a.index_
if(ff_compiler_Unification.Unification_has(self_, i_)) {
return ff_compiler_Unification.Unification_instantiate(self_, instantiation_, ff_compiler_Unification.Unification_get(self_, i_))
return
}}
}
{
const self_ = self_a
if(type_a._ === 'TVariable') {
const i_ = type_a.index_
return type_
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function Unification_constrain(self_, at_, type_, constraintName_, generics_) {
{
const _1 = type_
{
if(_1._ === 'TVariable') {
const i_ = _1.index_
if(ff_compiler_Unification.Unification_has(self_, i_)) {
return ff_compiler_Unification.Unification_constrain(self_, at_, ff_compiler_Unification.Unification_get(self_, i_), constraintName_, generics_)
return
}}
}
{
if(_1._ === 'TVariable') {
const i_ = _1.index_
{
const _1 = ff_core_Map.Map_get(self_.constraints_, i_)
{
if(_1._ === 'None') {
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, ff_core_List.List_toMap(ff_core_Array.Array_toList([ff_core_Pair.Pair(constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_))])))
return
}
}
{
if(_1._ === 'Some') {
const map_ = _1.value_
{
const _1 = ff_core_Map.Map_get(map_, constraintName_)
{
if(_1._ === 'None') {
const newMap_ = ff_core_Map.Map_add(map_, constraintName_, ff_compiler_Unification.ConstraintGenerics(at_, generics_))
self_.constraints_ = ff_core_Map.Map_add(self_.constraints_, i_, newMap_)
return
}
}
{
if(_1._ === 'Some') {
const generics2_ = _1.value_.generics_
return ff_core_List.List_each(ff_core_List.List_zip(generics_, generics2_), ((_1) => {
{
const t1_ = _1.first_
const t2_ = _1.second_
return ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return

}
throw new Error('Unexhaustive pattern match')
}))
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
return
}
}
{
if(_1._ === 'TConstructor') {
const name_ = _1.name_
const generics2_ = _1.generics_
{
const _1 = ff_core_Map.Map_get(self_.instances_, ff_compiler_Unification.InstanceKey(constraintName_, name_))
{
if(_1._ === 'None') {
const g1_ = (ff_core_List.List_isEmpty(generics_)
? ""
: "[...]")
const g2_ = (ff_core_List.List_isEmpty(generics2_)
? ""
: "[...]")
return ff_compiler_Unification.Unification_fail(self_, at_, ((((("No such instance: " + name_) + g2_) + ": ") + constraintName_) + g1_))
return
}
}
{
if(_1._ === 'Some') {
const definition_ = _1.value_
const typeVariables_ = ff_core_List.List_map(definition_.generics_, ((_) => {
return ff_compiler_Unification.Unification_freshTypeVariable(self_, at_)
}))
const instantiation_ = ff_core_List.List_toMap(ff_core_List.List_zip(definition_.generics_, typeVariables_))
const traitType1_ = ff_compiler_Unification.Unification_instantiate(self_, instantiation_, definition_.traitType_)
const traitType2_ = ff_compiler_Syntax.TConstructor(at_, constraintName_, ff_core_Array.Array_toList([type_, ...ff_core_List.List_toArray(generics_)]))
ff_compiler_Unification.Unification_unify(self_, at_, traitType1_, traitType2_)
return ff_core_List.List_each(definition_.constraints_, ((constraint_) => {
{
const _1 = ff_compiler_Unification.Unification_instantiate(self_, instantiation_, constraint_.representation_)
{
if(_1._ === 'TConstructor') {
const newConstraintName_ = _1.name_
const newGenerics_ = _1.generics_
return ff_compiler_Unification.Unification_constrain(self_, at_, type_, newConstraintName_, newGenerics_)
return
}
}
{
if(_1._ === 'TVariable') {
const i_ = _1.index_
return ff_compiler_Unification.Unification_fail(self_, at_, ("Constraint can't be a type variable: $" + i_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
}))
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

export function Unification_get(self_, index_) {
{
const _1 = ff_core_Map.Map_expect(self_.substitution_, index_)
{
if(_1._ === 'TVariable') {
const i_ = _1.index_
if(ff_compiler_Unification.Unification_has(self_, i_)) {
const t_ = ff_compiler_Unification.Unification_get(self_, i_)
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, t_)
return t_
return
}}
}
{
const t_ = _1
return t_
return

}
throw new Error('Unexhaustive pattern match')
}
}

export function Unification_has(self_, index_) {
return ff_core_Map.Map_contains(self_.substitution_, index_)
}

export function Unification_substitute(self_, type_){
const self_a = self_
const type_a = type_
{
const self_ = self_a
if(type_a._ === 'TVariable') {
const i_ = type_a.index_
if(ff_compiler_Unification.Unification_has(self_, i_)) {
return ff_compiler_Unification.Unification_substitute(self_, ff_compiler_Unification.Unification_get(self_, i_))
} else {
return type_
}
return
}
}
{
const self_ = self_a
if(type_a._ === 'TConstructor') {
const t_ = type_a
{
const _1 = t_
{
const _c = _1
return ff_compiler_Syntax.TConstructor(_c.at_, _c.name_, ff_core_List.List_map(t_.generics_, ((t_) => {
return ff_compiler_Unification.Unification_substitute(self_, t_)
})))
return

}
throw new Error('Unexhaustive pattern match')
}
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function Unification_unify(self_, at_, t1_, t2_){
const self_a = self_
const at_a = at_
const t1_a = t1_
const t2_a = t2_
{
const self_ = self_a
if(t1_a._ === 'TVariable') {
const i1_ = t1_a.index_
if(t2_a._ === 'TVariable') {
const i2_ = t2_a.index_
if((i1_ == i2_)) {

return
}}}
}
{
const self_ = self_a
if(t1_a._ === 'TVariable') {
const i_ = t1_a.index_
if(ff_compiler_Unification.Unification_has(self_, i_)) {
return ff_compiler_Unification.Unification_unify(self_, at_, ff_compiler_Unification.Unification_get(self_, i_), t2_)
return
}}
}
{
const self_ = self_a
if(t2_a._ === 'TVariable') {
const i_ = t2_a.index_
if(ff_compiler_Unification.Unification_has(self_, i_)) {
return ff_compiler_Unification.Unification_unify(self_, at_, t1_, ff_compiler_Unification.Unification_get(self_, i_))
return
}}
}
{
const self_ = self_a
if(t1_a._ === 'TVariable') {
const i_ = t1_a.index_
return ff_compiler_Unification.Unification_bind(self_, at_, i_, t2_)
return
}
}
{
const self_ = self_a
if(t2_a._ === 'TVariable') {
const i_ = t2_a.index_
return ff_compiler_Unification.Unification_bind(self_, at_, i_, t1_)
return
}
}
{
const self_ = self_a
if(t1_a._ === 'TConstructor') {
const name1_ = t1_a.name_
const generics1_ = t1_a.generics_
if(t2_a._ === 'TConstructor') {
const name2_ = t2_a.name_
const generics2_ = t2_a.generics_
if(((name1_ != name2_) || (ff_core_List.List_size(generics1_) != ff_core_List.List_size(generics2_)))) {
ff_compiler_Unification.Unification_fail(self_, at_, ((("Type mismatch: " + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, t1_))) + " vs. ") + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, t2_))))
}
return ff_core_List.List_each(ff_core_List.List_zip(generics1_, generics2_), ((_1) => {
{
const t1_ = _1.first_
const t2_ = _1.second_
return ff_compiler_Unification.Unification_unify(self_, at_, t1_, t2_)
return

}
throw new Error('Unexhaustive pattern match')
}))
return
}}
}
throw new Error('Unexhaustive pattern match')
}

export function Unification_bind(self_, at_, index_, type_) {
if(ff_compiler_Unification.Unification_occursIn(self_, index_, type_)) {
ff_compiler_Unification.Unification_fail(self_, at_, ((("Infinite type: $" + index_) + " = ") + ff_compiler_Syntax.Type_show(ff_compiler_Unification.Unification_substitute(self_, type_))))
}
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, type_)
return ff_core_Option.Option_each(ff_core_Map.Map_get(self_.constraints_, index_), ((map_) => {
self_.constraints_ = ff_core_Map.Map_remove(self_.constraints_, index_)
return ff_core_List.List_each(ff_core_Map.Map_pairs(map_), ((_1) => {
{
const name_ = _1.first_
const at2_ = _1.second_.at_
const generics_ = _1.second_.generics_
return ff_compiler_Unification.Unification_constrain(self_, at2_, type_, name_, generics_)
return

}
throw new Error('Unexhaustive pattern match')
}))
}))
}

export function Unification_occursIn(self_, index_, t_){
const self_a = self_
const index_a = index_
const t_a = t_
{
const self_ = self_a
if(t_a._ === 'TVariable') {
const i_ = t_a.index_
if(ff_compiler_Unification.Unification_has(self_, i_)) {
return ff_compiler_Unification.Unification_occursIn(self_, index_, ff_compiler_Unification.Unification_get(self_, i_))
return
}}
}
{
const self_ = self_a
if(t_a._ === 'TVariable') {
const i_ = t_a.index_
return (i_ == index_)
return
}
}
{
const self_ = self_a
if(t_a._ === 'TConstructor') {
const generics_ = t_a.generics_
return ff_core_List.List_any(generics_, ((t_) => {
return ff_compiler_Unification.Unification_occursIn(self_, index_, t_)
}))
return
}
}
throw new Error('Unexhaustive pattern match')
}


