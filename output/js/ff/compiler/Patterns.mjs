import * as ff_compiler_Patterns from "../../ff/compiler/Patterns.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

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

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type PatternInfo
export function PatternInfo(variant_, otherVariants_, fields_) {
return {variant_, otherVariants_, fields_};
}

// type PatternCaseInfo
export function PatternCaseInfo(fields_, guard_) {
return {fields_, guard_};
}



export function check_(variants_, fields_, cases_, success_, guard_) {
{
const _1 = ff_core_Pair.Pair(fields_, cases_)
{
if(_1.first_.Link) {
const f_ = _1.first_.head_.first_
const p_ = _1.first_.head_.second_
const fs_ = _1.first_.tail_
const cs_ = _1.second_
const vs_ = ff_core_Option.Option_else(ff_core_Map.Map_get(variants_, f_), (() => {
return ff_core_Set.Set_add(p_.otherVariants_, p_.variant_)
}))
if(ff_core_Set.Set_contains(vs_, p_.variant_)) {
const newFields_ = ff_core_List.List_map(p_.fields_, ((_w1) => {
return ff_core_Pair.Pair_mapFirst(_w1, ((_w1) => {
return ((((f_ + ".") + p_.variant_) + "_") + _w1)
}))
}))
if((ff_core_Set.Set_size(vs_) == 1)) {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, vs_), ff_core_List.List_addAll(newFields_, fs_), cs_, true, guard_)
} else {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_List.List_toSet(ff_core_List.Link(p_.variant_, ff_core_List.Empty()))), ff_core_List.List_addAll(newFields_, fs_), cs_, true, guard_)
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_Set.Set_remove(vs_, p_.variant_)), ff_core_List.Empty(), cs_, false, guard_)
}
} else {
ff_compiler_Patterns.check_(variants_, ff_core_List.Empty(), cs_, false, guard_)
}
return
}
}
{
if((success_ && (!guard_))) {

return
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Link) {
const fs_ = _1.second_.head_.fields_
const g_ = _1.second_.head_.guard_
const cs_ = _1.second_.tail_
ff_compiler_Patterns.check_(variants_, fs_, cs_, true, g_)
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
const remaining_ = ff_core_List.List_map(ff_core_List.List_filter(ff_core_Map.Map_pairs(variants_), ((_w1) => {
return (ff_core_Set.Set_size(_w1.second_) != 0)
})), ((_1) => {
{
const f_ = _1.first_
const vs_ = _1.second_
return ((f_ + " could be ") + ff_core_Core.magicShow_(ff_core_List.List_toArray(ff_core_Set.Set_toList(vs_))))
return
}
throw new Error('Unexhaustive pattern match')
}))
if((ff_core_List.List_size(remaining_) != 0)) {
ff_core_Log.debug_(("Unexhaustive match:\n" + ff_core_List.List_join(remaining_, "\n")))
ff_core_Core.panic_(("Unexhaustive match:\n" + ff_core_List.List_join(remaining_, "\n")))
}
return
}
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function convert_(modules_, cases_) {
function unqualifiedName_(name_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 != 46)
})))
}
function otherVariants_(name_) {
const variantName_ = unqualifiedName_(name_)
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantName_) + 1))
const variantModule_ = ff_core_Map.Map_expect(modules_, moduleName_)
return ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ == variantName_)
})), ((variant_) => {
return ff_core_List.List_toSet(ff_core_List.List_filter(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return _w1.name_
})), ((_w1) => {
return (_w1 != variantName_)
})))
}))
})))
}
function convertPattern_(pattern_) {
{
const pattern_a = pattern_
{
if(pattern_a.PVariable) {
const p_ = pattern_a
return ff_core_Option.None()
return
}
}
{
if(pattern_a.PVariant) {
const p_ = pattern_a
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(p_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
{
const i_ = _1.first_
if(_1.second_.Some) {
const p_ = _1.second_.value_
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
return
}
}
{
return ff_core_Option.None()
return
}
throw new Error('Unexhaustive pattern match')
}))
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), fields_))
return
}
}
{
if(pattern_a.PVariantAs) {
const p_ = pattern_a
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PAlias) {
const p_ = pattern_a
return convertPattern_(p_.pattern_)
return
}
}
{
if(pattern_a.PList) {
return ff_core_Option.None()
return
}
}
throw new Error('Unexhaustive pattern match')
}
}
return ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const caseIndex_ = _1.first_
const case_ = _1.second_
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
{
const i_ = _1.first_
if(_1.second_.Some) {
const p_ = _1.second_.value_
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
return
}
}
{
return ff_core_Option.None()
return
}
throw new Error('Unexhaustive pattern match')
}))
return ff_compiler_Patterns.PatternCaseInfo(fields_, (!ff_core_Option.Option_isEmpty(case_.condition_)))
return
}
throw new Error('Unexhaustive pattern match')
}))
}

export function convertAndCheck_(modules_, cases_) {
const converted_ = ff_compiler_Patterns.convert_(modules_, cases_)
ff_core_Try.Try_else(ff_core_Core.try_((() => {
ff_compiler_Patterns.check_(ff_core_List.List_toMap(ff_core_List.Empty()), ff_core_List.Empty(), converted_, false, false)
})), (() => {
ff_core_Log.debug_(("Warning: Unexhaustive match " + ff_compiler_Syntax.Location_show(ff_core_List.List_expect(cases_, 0).at_)))
}))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}




