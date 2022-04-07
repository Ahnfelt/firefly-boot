

import * as ff_compiler_Wildcards from "../../ff/compiler/Wildcards.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Wildcards
export function Wildcards(seenWildcards_) {
return {seenWildcards_};
}



export function make_() {
return ff_compiler_Wildcards.Wildcards(0)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function make_$($c) {
return ff_compiler_Wildcards.Wildcards(0)
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Wildcards_fixWildcards(self_, term_) {
{
const self_a = self_;
const term_a = term_;
{
const self_ = self_a;
if(term_a.ELet) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_), ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.body_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ESequential) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.before_), ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.after_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EAssign) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EAssignField) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.record_), _c.field_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EPipe) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_), ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.function_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ECall) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, (((_1) => {
{
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Wildcards.Wildcards_fixWildcards(self_, call_.function_), _c.tailCall_)
return
}
}
return
}
}
{
return ff_compiler_Wildcards.fail_(e_.at_, "Internal error: Static calls not expected in the Wildcards phase")
return
}
}))(e_.target_), _c.effect_, _c.typeArguments_, ff_core_List.List_map(e_.arguments_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
})), _c.dictionaries_)
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EList) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EList(_c.at_, _c.elementType_, ff_core_List.List_map(e_.items_, ((_1) => {
{
const item_ = _1.first_;
const spread_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Wildcards.Wildcards_fixWildcards(self_, item_), spread_)
return
}
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ECopy) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECopy(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.record_), ff_core_List.List_map(e_.arguments_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EVariant) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, _c.typeArguments_, ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
}))
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ERecord) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ERecord(_c.at_, ff_core_List.List_map(e_.fields_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EField) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.record_), _c.field_)
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EWildcard) {
const e_ = term_a;
self_.seenWildcards_ += 1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EWildcard(_c.at_, self_.seenWildcards_)
return
}
}
return
}
}
{
const self_ = self_a;
return term_
return
}
}
}

export async function Wildcards_fixWildcards$(self_, term_, $c) {
{
const self_a = self_;
const term_a = term_;
{
const self_ = self_a;
if(term_a.ELet) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_), ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.body_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ESequential) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.before_), ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.after_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EAssign) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EAssignField) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.record_), _c.field_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EPipe) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.value_), ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.function_))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ECall) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, ((async (_1, $c) => {
{
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Wildcards.Wildcards_fixWildcards(self_, call_.function_), _c.tailCall_)
return
}
}
return
}
}
{
return ff_compiler_Wildcards.fail_(e_.at_, "Internal error: Static calls not expected in the Wildcards phase")
return
}
}))(e_.target_), _c.effect_, _c.typeArguments_, ff_core_List.List_map(e_.arguments_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
})), _c.dictionaries_)
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EList) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EList(_c.at_, _c.elementType_, ff_core_List.List_map(e_.items_, ((_1) => {
{
const item_ = _1.first_;
const spread_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Wildcards.Wildcards_fixWildcards(self_, item_), spread_)
return
}
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ECopy) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECopy(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.record_), ff_core_List.List_map(e_.arguments_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EVariant) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, _c.typeArguments_, ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
}))
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.ERecord) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ERecord(_c.at_, ff_core_List.List_map(e_.fields_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, a_.value_))
return
}
}
})))
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EField) {
const e_ = term_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Wildcards.Wildcards_fixWildcards(self_, e_.record_), _c.field_)
return
}
}
return
}
}
{
const self_ = self_a;
if(term_a.EWildcard) {
const e_ = term_a;
self_.seenWildcards_ += 1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EWildcard(_c.at_, self_.seenWildcards_)
return
}
}
return
}
}
{
const self_ = self_a;
return term_
return
}
}
}




