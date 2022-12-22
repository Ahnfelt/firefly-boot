

import * as ff_compiler_Patterns from "../../ff/compiler/Patterns.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

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
const _1 = ff_core_Pair.Pair(fields_, cases_);
{
if(_1.first_.Link) {
const f_ = _1.first_.head_.first_;
const p_ = _1.first_.head_.second_;
const fs_ = _1.first_.tail_;
const cs_ = _1.second_;
const vs_ = ff_core_Option.Option_else(ff_core_Map.Map_get(variants_, f_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_core_Set.Set_add(p_.otherVariants_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
if(ff_core_Set.Set_contains(vs_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
const newFields_ = ff_core_List.List_map(p_.fields_, ((_w1) => {
return ff_core_Pair.Pair_mapFirst(_w1, ((_w1) => {
return ((((f_ + ".") + p_.variant_) + "_") + _w1)
}))
}));
if((ff_core_Set.Set_size(vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) === 1)) {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_addAll(newFields_, fs_), cs_, true, guard_)
} else {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_List.List_toSet(ff_core_List.Link(p_.variant_, ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_addAll(newFields_, fs_), cs_, true, guard_);
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_Set.Set_remove(vs_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty(), cs_, false, guard_)
}
} else {
ff_compiler_Patterns.check_(variants_, ff_core_List.Empty(), cs_, false, guard_)
}
return
}
}
{
const _guard1 = (success_ && (!guard_));
if(_guard1) {

return
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Link) {
const fs_ = _1.second_.head_.fields_;
const g_ = _1.second_.head_.guard_;
const cs_ = _1.second_.tail_;
ff_compiler_Patterns.check_(variants_, fs_, cs_, true, g_)
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
const remaining_ = ff_core_List.List_map(ff_core_List.List_filter(ff_core_Map.Map_pairs(variants_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return (ff_core_Set.Set_size(_w1.second_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)
})), ((_1) => {
{
const f_ = _1.first_;
const vs_ = _1.second_;
return ((f_ + " could be ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(ff_core_Set.Set_toList(vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
return
}
}));
if((ff_core_List.List_size(remaining_) !== 0)) {
ff_core_Core.panic_(("Unexhaustive match:\n" + ff_core_List.List_join(remaining_, "\n")))
}
return
}
}
}
}
}

export function convert_(modules_, cases_) {
function unqualifiedName_(name_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))
}
function otherVariants_(name_) {
const variantName_ = unqualifiedName_(name_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantName_) + 1));
const variantModule_ = ff_core_Map.Map_expect(modules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
return ff_core_List.List_toSet(ff_core_List.List_filter(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return _w1.name_
})), ((_w1) => {
return (_w1 !== variantName_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
})))
}
function convertPattern_(pattern_) {
{
const pattern_a = pattern_;
{
if(pattern_a.PString) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("String literal", ff_core_List.List_toSet(ff_core_List.Link("Any other String literal", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PInt) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Int literal", ff_core_List.List_toSet(ff_core_List.Link("Any other Int literal", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PChar) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Char literal", ff_core_List.List_toSet(ff_core_List.Link("Any other Char literal", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PVariable) {
const p_ = pattern_a;
return ff_core_Option.None()
return
}
}
{
if(pattern_a.PVariant) {
const p_ = pattern_a;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(p_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
{
const i_ = _1.first_;
if(_1.second_.Some) {
const p_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
return
}
}
{
return ff_core_Option.None()
return
}
}));
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), fields_))
return
}
}
{
if(pattern_a.PVariantAs) {
const p_ = pattern_a;
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PAlias) {
const p_ = pattern_a;
return convertPattern_(p_.pattern_)
return
}
}
}
}
return ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const caseIndex_ = _1.first_;
const case_ = _1.second_;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
{
const i_ = _1.first_;
if(_1.second_.Some) {
const p_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
return
}
}
{
return ff_core_Option.None()
return
}
}));
const exhaustiveGuards_ = ff_core_List.List_all(case_.guards_, ((g_) => {
const guardConverted_ = ff_compiler_Patterns.convert_(modules_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(g_.at_, ff_core_List.Link(g_.pattern_, ff_core_List.Empty()), ff_core_List.Empty(), case_.body_), ff_core_List.Empty()));
return ff_core_Try.Try_else(ff_core_Core.try_((() => {
ff_compiler_Patterns.check_(ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty(), guardConverted_, false, false);
return true
})), (() => {
return false
}))
}));
return ff_compiler_Patterns.PatternCaseInfo(fields_, (!exhaustiveGuards_))
return
}
}))
}

export function convertAndCheck_(modules_, cases_) {
const converted_ = ff_compiler_Patterns.convert_(modules_, cases_);
ff_core_Try.Try_else(ff_core_Core.try_((() => {
return ff_compiler_Patterns.check_(ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty(), converted_, false, false)
})), (() => {
ff_compiler_Patterns.fail_(ff_core_List.List_expect(cases_, 0).at_, "Unexhaustive match")
}))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function check_$(variants_, fields_, cases_, success_, guard_, $c) {
{
const _1 = ff_core_Pair.Pair(fields_, cases_);
{
if(_1.first_.Link) {
const f_ = _1.first_.head_.first_;
const p_ = _1.first_.head_.second_;
const fs_ = _1.first_.tail_;
const cs_ = _1.second_;
const vs_ = ff_core_Option.Option_else(ff_core_Map.Map_get(variants_, f_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_core_Set.Set_add(p_.otherVariants_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
if(ff_core_Set.Set_contains(vs_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
const newFields_ = ff_core_List.List_map(p_.fields_, ((_w1) => {
return ff_core_Pair.Pair_mapFirst(_w1, ((_w1) => {
return ((((f_ + ".") + p_.variant_) + "_") + _w1)
}))
}));
if((ff_core_Set.Set_size(vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) === 1)) {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_addAll(newFields_, fs_), cs_, true, guard_)
} else {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_List.List_toSet(ff_core_List.Link(p_.variant_, ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_addAll(newFields_, fs_), cs_, true, guard_);
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_Set.Set_remove(vs_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty(), cs_, false, guard_)
}
} else {
ff_compiler_Patterns.check_(variants_, ff_core_List.Empty(), cs_, false, guard_)
}
return
}
}
{
const _guard1 = (success_ && (!guard_));
if(_guard1) {

return
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Link) {
const fs_ = _1.second_.head_.fields_;
const g_ = _1.second_.head_.guard_;
const cs_ = _1.second_.tail_;
ff_compiler_Patterns.check_(variants_, fs_, cs_, true, g_)
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
const remaining_ = ff_core_List.List_map(ff_core_List.List_filter(ff_core_Map.Map_pairs(variants_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return (ff_core_Set.Set_size(_w1.second_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)
})), ((_1) => {
{
const f_ = _1.first_;
const vs_ = _1.second_;
return ((f_ + " could be ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(ff_core_Set.Set_toList(vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
return
}
}));
if((ff_core_List.List_size(remaining_) !== 0)) {
ff_core_Core.panic_(("Unexhaustive match:\n" + ff_core_List.List_join(remaining_, "\n")))
}
return
}
}
}
}
}

export async function convert_$(modules_, cases_, $c) {
function unqualifiedName_(name_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))
}
function otherVariants_(name_) {
const variantName_ = unqualifiedName_(name_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantName_) + 1));
const variantModule_ = ff_core_Map.Map_expect(modules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
return ff_core_List.List_toSet(ff_core_List.List_filter(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return _w1.name_
})), ((_w1) => {
return (_w1 !== variantName_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
})))
}
function convertPattern_(pattern_) {
{
const pattern_a = pattern_;
{
if(pattern_a.PString) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("String literal", ff_core_List.List_toSet(ff_core_List.Link("Any other String literal", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PInt) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Int literal", ff_core_List.List_toSet(ff_core_List.Link("Any other Int literal", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PChar) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Char literal", ff_core_List.List_toSet(ff_core_List.Link("Any other Char literal", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PVariable) {
const p_ = pattern_a;
return ff_core_Option.None()
return
}
}
{
if(pattern_a.PVariant) {
const p_ = pattern_a;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(p_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
{
const i_ = _1.first_;
if(_1.second_.Some) {
const p_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
return
}
}
{
return ff_core_Option.None()
return
}
}));
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), fields_))
return
}
}
{
if(pattern_a.PVariantAs) {
const p_ = pattern_a;
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), ff_core_List.Empty()))
return
}
}
{
if(pattern_a.PAlias) {
const p_ = pattern_a;
return convertPattern_(p_.pattern_)
return
}
}
}
}
return ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const caseIndex_ = _1.first_;
const case_ = _1.second_;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
{
const i_ = _1.first_;
if(_1.second_.Some) {
const p_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
return
}
}
{
return ff_core_Option.None()
return
}
}));
const exhaustiveGuards_ = ff_core_List.List_all(case_.guards_, ((g_) => {
const guardConverted_ = ff_compiler_Patterns.convert_(modules_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(g_.at_, ff_core_List.Link(g_.pattern_, ff_core_List.Empty()), ff_core_List.Empty(), case_.body_), ff_core_List.Empty()));
return ff_core_Try.Try_else(ff_core_Core.try_((() => {
ff_compiler_Patterns.check_(ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty(), guardConverted_, false, false);
return true
})), (() => {
return false
}))
}));
return ff_compiler_Patterns.PatternCaseInfo(fields_, (!exhaustiveGuards_))
return
}
}))
}

export async function convertAndCheck_$(modules_, cases_, $c) {
const converted_ = ff_compiler_Patterns.convert_(modules_, cases_);
ff_core_Try.Try_else(ff_core_Core.try_((() => {
return ff_compiler_Patterns.check_(ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.Empty(), converted_, false, false)
})), (() => {
ff_compiler_Patterns.fail_(ff_core_List.List_expect(cases_, 0).at_, "Unexhaustive match")
}))
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}



export const ff_core_Show_Show$ff_compiler_Patterns_PatternInfo = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("PatternInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variant_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).show_(z_.otherVariants_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("PatternInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variant_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).show_(z_.otherVariants_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Patterns_PatternCaseInfo = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("PatternCaseInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.guard_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("PatternCaseInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.guard_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo = {
equals_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return ((x_.variant_ === y_.variant_) && (ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).equals_(x_.otherVariants_, y_.otherVariants_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_)))
return
}
}
},
async equals_$(x_, y_, $c) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return ((x_.variant_ === y_.variant_) && (ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).equals_(x_.otherVariants_, y_.otherVariants_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_)))
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Patterns_PatternCaseInfo = {
equals_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_) && (x_.guard_ === y_.guard_))
return
}
}
},
async equals_$(x_, y_, $c) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_) && (x_.guard_ === y_.guard_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo = {
compare_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
const variantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variant_, y_.variant_);
if((variantOrdering_ != ff_core_Ordering.OrderingSame())) {
return variantOrdering_
} else {
const otherVariantsOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.otherVariants_, y_.otherVariants_);
if((otherVariantsOrdering_ != ff_core_Ordering.OrderingSame())) {
return otherVariantsOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
},
async compare_$(x_, y_, $c) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
const variantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variant_, y_.variant_);
if((variantOrdering_ != ff_core_Ordering.OrderingSame())) {
return variantOrdering_
} else {
const otherVariantsOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.otherVariants_, y_.otherVariants_);
if((otherVariantsOrdering_ != ff_core_Ordering.OrderingSame())) {
return otherVariantsOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Patterns_PatternCaseInfo = {
compare_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
const guardOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.guard_, y_.guard_);
if((guardOrdering_ != ff_core_Ordering.OrderingSame())) {
return guardOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
},
async compare_$(x_, y_, $c) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
const guardOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.guard_, y_.guard_);
if((guardOrdering_ != ff_core_Ordering.OrderingSame())) {
return guardOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
};


