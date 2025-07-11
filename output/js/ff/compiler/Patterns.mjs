import * as ff_compiler_Patterns from "../../ff/compiler/Patterns.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Crypto from "../../ff/core/Crypto.mjs"

import * as ff_core_Date from "../../ff/core/Date.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_Js from "../../ff/core/Js.mjs"

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

import * as ff_core_Queue from "../../ff/core/Queue.mjs"

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
if(_1.first_.length >= 1) {
const f_ = _1.first_[0].first_;
const p_ = _1.first_[0].second_;
const fs_ = _1.first_.slice(1);
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
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [...newFields_, ...fs_], cs_, true, guard_)
} else {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_List.List_toSet([p_.variant_], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [...newFields_, ...fs_], cs_, true, guard_);
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_Set.Set_remove(vs_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [], cs_, false, guard_)
}
} else {
ff_compiler_Patterns.check_(variants_, [], cs_, false, guard_)
}
return
}
if((success_ && (!guard_))) {

return
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const fs_ = _1.second_[0].fields_;
const g_ = _1.second_[0].guard_;
const cs_ = _1.second_.slice(1);
ff_compiler_Patterns.check_(variants_, fs_, cs_, true, g_)
return
}
{
const remaining_ = ff_core_List.List_map(ff_core_List.List_filter(ff_core_Map.Map_pairs(variants_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return (ff_core_Set.Set_size(_w1.second_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)
})), ((_1) => {
{
const f_ = _1.first_;
const vs_ = _1.second_;
return ((f_ + " could be ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(ff_core_Set.Set_toList(vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}
}));
if((remaining_.length !== 0)) {
ff_core_Core.panic_(("Unexhaustive match:\n" + ff_core_List.List_join(remaining_, "\n")))
}
return
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
if((name_ === "List$Empty")) {
return ff_core_List.List_toSet(["List$Link"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
} else {
if((name_ === "List$Link")) {
return ff_core_List.List_toSet(["List$Empty"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
} else {
const variantName_ = unqualifiedName_(name_);
const moduleName_ = ff_core_String.String_dropLast(name_, (variantName_.length + 1));
const variantModule_ = ff_core_Map.Map_grab(modules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
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
}
}
function convertPattern_(pattern_) {
const pattern_a = pattern_;
if(pattern_a.PString) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("String literal", ff_core_List.List_toSet(["Any other String literal"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), []))
}
if(pattern_a.PInt) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Int literal", ff_core_List.List_toSet(["Any other Int literal"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), []))
}
if(pattern_a.PChar) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Char literal", ff_core_List.List_toSet(["Any other Char literal"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), []))
}
if(pattern_a.PVariable) {
const p_ = pattern_a;
return ff_core_Option.None()
}
if(pattern_a.PVariant) {
const p_ = pattern_a;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(p_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
if(_1.second_.Some) {
const i_ = _1.first_;
const info_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), info_))
}
{
return ff_core_Option.None()
}
}));
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), fields_))
}
if(pattern_a.PVariantAs) {
const p_ = pattern_a;
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), []))
}
{
const p_ = pattern_a;
return convertPattern_(p_.pattern_)
}
}
return ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const caseIndex_ = _1.first_;
const case_ = _1.second_;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
if(_1.second_.Some) {
const i_ = _1.first_;
const p_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
}
{
return ff_core_Option.None()
}
}));
const exhaustiveGuards_ = ff_core_List.List_all(case_.guards_, ((g_) => {
const guardConverted_ = ff_compiler_Patterns.convert_(modules_, [ff_compiler_Syntax.MatchCase(g_.at_, [g_.pattern_], [], case_.body_)]);
return ff_core_Try.Try_else(ff_core_Core.try_((() => {
ff_compiler_Patterns.check_(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [], guardConverted_, false, false);
return true
})), (() => {
return false
}))
}));
return ff_compiler_Patterns.PatternCaseInfo(fields_, (!exhaustiveGuards_))
}
}))
}

export function convertAndCheck_(modules_, cases_) {
const converted_ = ff_compiler_Patterns.convert_(modules_, cases_);
ff_core_Try.Try_else(ff_core_Core.try_((() => {
ff_compiler_Patterns.check_(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [], converted_, false, false)
})), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError((cases_[0] ?? ff_core_List.List_grab(cases_, 0)).at_, "Unexhaustive match"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function check_$(variants_, fields_, cases_, success_, guard_, $task) {
{
const _1 = ff_core_Pair.Pair(fields_, cases_);
if(_1.first_.length >= 1) {
const f_ = _1.first_[0].first_;
const p_ = _1.first_[0].second_;
const fs_ = _1.first_.slice(1);
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
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [...newFields_, ...fs_], cs_, true, guard_)
} else {
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_List.List_toSet([p_.variant_], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [...newFields_, ...fs_], cs_, true, guard_);
ff_compiler_Patterns.check_(ff_core_Map.Map_add(variants_, f_, ff_core_Set.Set_remove(vs_, p_.variant_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [], cs_, false, guard_)
}
} else {
ff_compiler_Patterns.check_(variants_, [], cs_, false, guard_)
}
return
}
if((success_ && (!guard_))) {

return
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const fs_ = _1.second_[0].fields_;
const g_ = _1.second_[0].guard_;
const cs_ = _1.second_.slice(1);
ff_compiler_Patterns.check_(variants_, fs_, cs_, true, g_)
return
}
{
const remaining_ = ff_core_List.List_map(ff_core_List.List_filter(ff_core_Map.Map_pairs(variants_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return (ff_core_Set.Set_size(_w1.second_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)
})), ((_1) => {
{
const f_ = _1.first_;
const vs_ = _1.second_;
return ((f_ + " could be ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(ff_core_Set.Set_toList(vs_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}
}));
if((remaining_.length !== 0)) {
ff_core_Core.panic_(("Unexhaustive match:\n" + ff_core_List.List_join(remaining_, "\n")))
}
return
}
}
}

export async function convert_$(modules_, cases_, $task) {
function unqualifiedName_(name_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))
}
function otherVariants_(name_) {
if((name_ === "List$Empty")) {
return ff_core_List.List_toSet(["List$Link"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
} else {
if((name_ === "List$Link")) {
return ff_core_List.List_toSet(["List$Empty"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
} else {
const variantName_ = unqualifiedName_(name_);
const moduleName_ = ff_core_String.String_dropLast(name_, (variantName_.length + 1));
const variantModule_ = ff_core_Map.Map_grab(modules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
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
}
}
function convertPattern_(pattern_) {
const pattern_a = pattern_;
if(pattern_a.PString) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("String literal", ff_core_List.List_toSet(["Any other String literal"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), []))
}
if(pattern_a.PInt) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Int literal", ff_core_List.List_toSet(["Any other Int literal"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), []))
}
if(pattern_a.PChar) {
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo("Char literal", ff_core_List.List_toSet(["Any other Char literal"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), []))
}
if(pattern_a.PVariable) {
const p_ = pattern_a;
return ff_core_Option.None()
}
if(pattern_a.PVariant) {
const p_ = pattern_a;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(p_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
if(_1.second_.Some) {
const i_ = _1.first_;
const info_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), info_))
}
{
return ff_core_Option.None()
}
}));
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), fields_))
}
if(pattern_a.PVariantAs) {
const p_ = pattern_a;
return ff_core_Option.Some(ff_compiler_Patterns.PatternInfo(unqualifiedName_(p_.name_), otherVariants_(p_.name_), []))
}
{
const p_ = pattern_a;
return convertPattern_(p_.pattern_)
}
}
return ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const caseIndex_ = _1.first_;
const case_ = _1.second_;
const fields_ = ff_core_List.List_collect(ff_core_List.List_pairs(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return convertPattern_(pattern_)
}))), ((_1) => {
if(_1.second_.Some) {
const i_ = _1.first_;
const p_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(("" + i_), p_))
}
{
return ff_core_Option.None()
}
}));
const exhaustiveGuards_ = ff_core_List.List_all(case_.guards_, ((g_) => {
const guardConverted_ = ff_compiler_Patterns.convert_(modules_, [ff_compiler_Syntax.MatchCase(g_.at_, [g_.pattern_], [], case_.body_)]);
return ff_core_Try.Try_else(ff_core_Core.try_((() => {
ff_compiler_Patterns.check_(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [], guardConverted_, false, false);
return true
})), (() => {
return false
}))
}));
return ff_compiler_Patterns.PatternCaseInfo(fields_, (!exhaustiveGuards_))
}
}))
}

export async function convertAndCheck_$(modules_, cases_, $task) {
const converted_ = ff_compiler_Patterns.convert_(modules_, cases_);
ff_core_Try.Try_else(ff_core_Core.try_((() => {
ff_compiler_Patterns.check_(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), [], converted_, false, false)
})), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError((cases_[0] ?? ff_core_List.List_grab(cases_, 0)).at_, "Unexhaustive match"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}))
}

export async function fail_$(at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export const ff_core_Any_HasAnyTag$ff_compiler_Patterns_PatternInfo = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Patterns.PatternInfo" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Patterns.PatternInfo" + "[") + "]"))
},
};

export const ff_core_Any_HasAnyTag$ff_compiler_Patterns_PatternCaseInfo = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Patterns.PatternCaseInfo" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Patterns.PatternCaseInfo" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_Patterns_PatternInfo = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("PatternInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variant_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).show_(z_.otherVariants_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("PatternInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variant_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).show_(z_.otherVariants_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ")")
}
},
};

export const ff_core_Show_Show$ff_compiler_Patterns_PatternCaseInfo = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("PatternCaseInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.guard_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("PatternCaseInfo" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Patterns.ff_core_Show_Show$ff_compiler_Patterns_PatternInfo)).show_(z_.fields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.guard_)) + ")")
}
},
};

export const ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.variant_ === y_.variant_) && (ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).equals_(x_.otherVariants_, y_.otherVariants_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.variant_ === y_.variant_) && (ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).equals_(x_.otherVariants_, y_.otherVariants_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_)))
}
},
};

export const ff_core_Equal_Equal$ff_compiler_Patterns_PatternCaseInfo = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_) && (x_.guard_ === y_.guard_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Patterns.ff_core_Equal_Equal$ff_compiler_Patterns_PatternInfo)).equals_(x_.fields_, y_.fields_) && (x_.guard_ === y_.guard_))
}
},
};

export const ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const variantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variant_, y_.variant_);
if((variantOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variantOrdering_
} else {
const otherVariantsOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.otherVariants_, y_.otherVariants_);
if((otherVariantsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return otherVariantsOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const variantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variant_, y_.variant_);
if((variantOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variantOrdering_
} else {
const otherVariantsOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.otherVariants_, y_.otherVariants_);
if((otherVariantsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return otherVariantsOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
},
};

export const ff_core_Ordering_Order$ff_compiler_Patterns_PatternCaseInfo = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
const guardOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.guard_, y_.guard_);
if((guardOrdering_ !== ff_core_Ordering.OrderingSame())) {
return guardOrdering_
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
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Patterns.ff_core_Ordering_Order$ff_compiler_Patterns_PatternInfo)).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
const guardOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.guard_, y_.guard_);
if((guardOrdering_ !== ff_core_Ordering.OrderingSame())) {
return guardOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variant_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).serializeUsing_(serialization_, v_.otherVariants_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).serializeUsing_(serialization_, v_.fields_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
return ff_compiler_Patterns.PatternInfo(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variant_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).serializeUsing_(serialization_, v_.otherVariants_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).serializeUsing_(serialization_, v_.fields_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
return ff_compiler_Patterns.PatternInfo(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternCaseInfo = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).serializeUsing_(serialization_, v_.fields_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.guard_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_Patterns.PatternCaseInfo(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).serializeUsing_(serialization_, v_.fields_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.guard_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_Patterns.PatternCaseInfo(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Patterns.ff_core_Serializable_Serializable$ff_compiler_Patterns_PatternInfo)).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};


//# sourceMappingURL=Patterns.mjs.map