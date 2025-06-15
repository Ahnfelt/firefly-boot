import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_JsImporter from "../../ff/compiler/JsImporter.mjs"

import * as ff_compiler_Patterns from "../../ff/compiler/Patterns.mjs"

import * as ff_compiler_SourceMap from "../../ff/compiler/SourceMap.mjs"

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

// type JsEmitter
export function JsEmitter(otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, emittingAsync_, tailCallUsed_, writtenColumn_, writtenStrings_, writtenSegments_, writtenAnchors_, writtenNames_) {
return {otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, emittingAsync_, tailCallUsed_, writtenColumn_, writtenStrings_, writtenSegments_, writtenAnchors_, writtenNames_};
}

// type EmitTarget
const EmitNode$ = {EmitNode: true};
export function EmitNode() {
return EmitNode$;
}
const EmitBrowser$ = {EmitBrowser: true};
export function EmitBrowser() {
return EmitBrowser$;
}
const EmitBuild$ = {EmitBuild: true};
export function EmitBuild() {
return EmitBuild$;
}
const EmitExecutable$ = {EmitExecutable: true};
export function EmitExecutable() {
return EmitExecutable$;
}

// type ProcessedVariantCase
export function ProcessedVariantCase(variantName_, newtype_, loneVariant_, arguments_) {
return {variantName_, newtype_, loneVariant_, arguments_};
}

// type Liner
export function Liner(emitter_, double_, first_) {
return {emitter_, double_, first_};
}

// type Comma
export function Comma(emitter_, first_, delimiter_) {
return {emitter_, first_, delimiter_};
}

export const primitiveTypes_ = ff_core_List.List_toSet(["ff:core/Bool.Bool", "ff:core/Char.Char", "ff:core/Int.Int", "ff:core/Float.Float", "ff:core/String.String"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);

export function new_(otherModules_, emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
return ff_core_Pair.Pair(ff_compiler_Syntax.ModuleKey_qualifiedName(m_.moduleKey_), m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.new_(), emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, false, false, 0, ff_core_List.List_toArray([ff_core_List.List_toArray([])]), ff_core_List.List_toArray([ff_core_List.List_toArray([])]), ff_core_IntMap.new_(), ff_core_StringMap.new_())
}

export function fail_(at_, message_) {
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(at_, message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}

export function rawJs_(at_, rawIdentifier_) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.StaticCall("ff:core/Js.rawIdentifier", false, false), noEffect_, [], [ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.EString(at_, rawIdentifier_))], [])
}

export function detectIfElse_(term_) {
const term_a = term_;
if(term_a.ECall && term_a.target_.StaticCall && term_a.target_.name_ === "ff:core/Core.if" && term_a.arguments_.length === 2) {
const at_ = term_a.at_;
const condition_ = term_a.arguments_[0];
const body_ = term_a.arguments_[1];
return [ff_core_Pair.Pair(condition_.value_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_))]
}
if(term_a.ECall && term_a.target_.StaticCall && term_a.target_.name_ === "ff:core/Option.Option_elseIf" && term_a.arguments_.length === 3) {
const at_ = term_a.at_;
const option_ = term_a.arguments_[0];
const condition_ = term_a.arguments_[1];
const body_ = term_a.arguments_[2];
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return []
} else {
return [ff_core_Pair.Pair(ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), ...list_]
}
return
}
if(term_a.ECall && term_a.target_.StaticCall && term_a.target_.name_ === "ff:core/Option.Option_else" && term_a.arguments_.length === 2) {
const at_ = term_a.at_;
const option_ = term_a.arguments_[0];
const body_ = term_a.arguments_[1];
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return []
} else {
return [ff_core_Pair.Pair(ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", [], ff_core_Option.None()), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), ...list_]
}
return
}
{
return []
}
}

export function invokeImmediately_(function_) {
const function_a = function_;
if(function_a.ELambda && function_a.lambda_.cases_.length === 1 && function_a.lambda_.cases_[0].patterns_.length === 0 && function_a.lambda_.cases_[0].guards_.length === 0) {
const effect_ = function_a.lambda_.effect_;
const body_ = function_a.lambda_.cases_[0].body_;
return body_
}
{
const effect_ = ff_compiler_Syntax.TConstructor(function_.at_, "Q$", []);
return ff_compiler_Syntax.ECall(function_.at_, ff_compiler_Syntax.DynamicCall(function_, false), effect_, [], [], [])
}
}

export function safeCommable_(term_) {
{
const _1 = term_;
if(_1.EField) {
return true
}
if(_1.EVariable) {
return true
}
if(_1.EAssign) {
return true
}
if(_1.EAssignField) {
return true
}
if(_1.ECall) {
return true
}
if(_1.ECopy) {
return true
}
if(_1.EVariant) {
return true
}
if(_1.EString) {
return true
}
if(_1.EInt) {
return true
}
if(_1.EChar) {
return true
}
if(_1.EFloat) {
return true
}
if(_1.EList) {
return true
}
if(_1.EPipe) {
return true
}
if(_1.ERecord) {
return true
}
if(_1.EWildcard) {
return true
}
{
return false
}
}
}

export function extractTypeName_(type_) {
const type_a = type_;
if(type_a.TVariable) {
const at_ = type_a.at_;
const index_ = type_a.index_;
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
}
{
const t_ = type_a;
return t_.name_
}
}

export function firstTypeName_(types_) {
{
const _1 = ff_core_List.List_grabFirst(types_);
if(_1.TConstructor) {
const t_ = _1;
return t_.name_
}
{
const t_ = _1;
return ff_compiler_JsEmitter.fail_(t_.at_, " is still a unification variable")
}
}
}

export function makeDictionaryName_(traitName_, typeName_) {
return ((ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(traitName_, ".", "_"), ":", "_"), "/", "_") + "$") + ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(typeName_, ".", "_"), ":", "_"), "/", "_"))
}

export function charLiteralToNumber_(charLiteral_) {
const charLiteral_a = charLiteral_;
if(charLiteral_a === "'\\t'") {
return "9"
}
if(charLiteral_a === "'\\n'") {
return "10"
}
if(charLiteral_a === "'\\r'") {
return "13"
}
if(charLiteral_a === "'\\\"'") {
return "34"
}
if(charLiteral_a === "'\\''") {
return "39"
}
{
const value_ = charLiteral_a;
return ("" + ff_core_String.String_grab(value_, 1))
}
}

export function escapeResolved_(word_) {
const parts_ = ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46);
const initialParts_ = ff_core_List.List_dropLast(parts_, 1);
if(ff_core_List.List_isEmpty(initialParts_)) {
return ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_grabLast(parts_))
} else {
return ((ff_core_List.List_join(initialParts_, "_") + ".") + ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_grabLast(parts_)))
}
}

export function escapeKeyword_(word_) {
if(ff_core_Char.Char_isAsciiLower(ff_core_String.String_grabFirst(word_))) {
return (word_ + "_")
} else {
return word_
}
}

export function effectTypeIsAsync_(effect_) {
const effect_a = effect_;
if(effect_a.TConstructor && effect_a.name_ === "Q$") {
return true
}
{
return false
}
}

export function safeBare_(quotedString_) {
return ff_core_Option.Option_filter(ff_core_Option.Option_flatMap(ff_core_String.String_removeFirst(quotedString_, "\""), ((_w1) => {
return ff_core_String.String_removeLast(_w1, "\"")
})), ((s_) => {
return (ff_core_Option.Option_any(ff_core_String.String_first(s_), ((_w1) => {
return ff_core_Char.Char_isAsciiLetter(_w1)
})) && ff_core_String.String_all(s_, ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
})))
}))
}

export function noSideEffects_(term_) {
{
const _1 = term_;
if(_1.EField) {
const e_ = _1.record_;
return ff_compiler_JsEmitter.noSideEffects_(e_)
}
if(_1.EVariable) {
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/BrowserSystem.BrowserSystem_js" && _1.arguments_.length === 1) {
const a_ = _1.arguments_[0];
return ff_compiler_JsEmitter.noSideEffects_(a_.value_)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/BuildSystem.BuildSystem_js" && _1.arguments_.length === 1) {
const a_ = _1.arguments_[0];
return ff_compiler_JsEmitter.noSideEffects_(a_.value_)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/NodeSystem.NodeSystem_js" && _1.arguments_.length === 1) {
const a_ = _1.arguments_[0];
return ff_compiler_JsEmitter.noSideEffects_(a_.value_)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Js.jsSystem") {
return true
}
if(_1.EString) {
return true
}
if(_1.EInt) {
return true
}
if(_1.EChar) {
return true
}
if(_1.EFloat) {
return true
}
{
return false
}
}
}

export async function new_$(otherModules_, emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, $task) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
return ff_core_Pair.Pair(ff_compiler_Syntax.ModuleKey_qualifiedName(m_.moduleKey_), m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.new_(), emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, false, false, 0, ff_core_List.List_toArray([ff_core_List.List_toArray([])]), ff_core_List.List_toArray([ff_core_List.List_toArray([])]), ff_core_IntMap.new_(), ff_core_StringMap.new_())
}

export async function fail_$(at_, message_, $task) {
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(at_, message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}

export async function rawJs_$(at_, rawIdentifier_, $task) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.StaticCall("ff:core/Js.rawIdentifier", false, false), noEffect_, [], [ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.EString(at_, rawIdentifier_))], [])
}

export async function detectIfElse_$(term_, $task) {
const term_a = term_;
if(term_a.ECall && term_a.target_.StaticCall && term_a.target_.name_ === "ff:core/Core.if" && term_a.arguments_.length === 2) {
const at_ = term_a.at_;
const condition_ = term_a.arguments_[0];
const body_ = term_a.arguments_[1];
return [ff_core_Pair.Pair(condition_.value_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_))]
}
if(term_a.ECall && term_a.target_.StaticCall && term_a.target_.name_ === "ff:core/Option.Option_elseIf" && term_a.arguments_.length === 3) {
const at_ = term_a.at_;
const option_ = term_a.arguments_[0];
const condition_ = term_a.arguments_[1];
const body_ = term_a.arguments_[2];
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return []
} else {
return [ff_core_Pair.Pair(ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), ...list_]
}
return
}
if(term_a.ECall && term_a.target_.StaticCall && term_a.target_.name_ === "ff:core/Option.Option_else" && term_a.arguments_.length === 2) {
const at_ = term_a.at_;
const option_ = term_a.arguments_[0];
const body_ = term_a.arguments_[1];
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return []
} else {
return [ff_core_Pair.Pair(ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", [], ff_core_Option.None()), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), ...list_]
}
return
}
{
return []
}
}

export async function invokeImmediately_$(function_, $task) {
const function_a = function_;
if(function_a.ELambda && function_a.lambda_.cases_.length === 1 && function_a.lambda_.cases_[0].patterns_.length === 0 && function_a.lambda_.cases_[0].guards_.length === 0) {
const effect_ = function_a.lambda_.effect_;
const body_ = function_a.lambda_.cases_[0].body_;
return body_
}
{
const effect_ = ff_compiler_Syntax.TConstructor(function_.at_, "Q$", []);
return ff_compiler_Syntax.ECall(function_.at_, ff_compiler_Syntax.DynamicCall(function_, false), effect_, [], [], [])
}
}

export async function safeCommable_$(term_, $task) {
{
const _1 = term_;
if(_1.EField) {
return true
}
if(_1.EVariable) {
return true
}
if(_1.EAssign) {
return true
}
if(_1.EAssignField) {
return true
}
if(_1.ECall) {
return true
}
if(_1.ECopy) {
return true
}
if(_1.EVariant) {
return true
}
if(_1.EString) {
return true
}
if(_1.EInt) {
return true
}
if(_1.EChar) {
return true
}
if(_1.EFloat) {
return true
}
if(_1.EList) {
return true
}
if(_1.EPipe) {
return true
}
if(_1.ERecord) {
return true
}
if(_1.EWildcard) {
return true
}
{
return false
}
}
}

export async function extractTypeName_$(type_, $task) {
const type_a = type_;
if(type_a.TVariable) {
const at_ = type_a.at_;
const index_ = type_a.index_;
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
}
{
const t_ = type_a;
return t_.name_
}
}

export async function firstTypeName_$(types_, $task) {
{
const _1 = ff_core_List.List_grabFirst(types_);
if(_1.TConstructor) {
const t_ = _1;
return t_.name_
}
{
const t_ = _1;
return ff_compiler_JsEmitter.fail_(t_.at_, " is still a unification variable")
}
}
}

export async function makeDictionaryName_$(traitName_, typeName_, $task) {
return ((ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(traitName_, ".", "_"), ":", "_"), "/", "_") + "$") + ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(typeName_, ".", "_"), ":", "_"), "/", "_"))
}

export async function charLiteralToNumber_$(charLiteral_, $task) {
const charLiteral_a = charLiteral_;
if(charLiteral_a === "'\\t'") {
return "9"
}
if(charLiteral_a === "'\\n'") {
return "10"
}
if(charLiteral_a === "'\\r'") {
return "13"
}
if(charLiteral_a === "'\\\"'") {
return "34"
}
if(charLiteral_a === "'\\''") {
return "39"
}
{
const value_ = charLiteral_a;
return ("" + ff_core_String.String_grab(value_, 1))
}
}

export async function escapeResolved_$(word_, $task) {
const parts_ = ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46);
const initialParts_ = ff_core_List.List_dropLast(parts_, 1);
if(ff_core_List.List_isEmpty(initialParts_)) {
return ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_grabLast(parts_))
} else {
return ((ff_core_List.List_join(initialParts_, "_") + ".") + ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_grabLast(parts_)))
}
}

export async function escapeKeyword_$(word_, $task) {
if(ff_core_Char.Char_isAsciiLower(ff_core_String.String_grabFirst(word_))) {
return (word_ + "_")
} else {
return word_
}
}

export async function effectTypeIsAsync_$(effect_, $task) {
const effect_a = effect_;
if(effect_a.TConstructor && effect_a.name_ === "Q$") {
return true
}
{
return false
}
}

export async function safeBare_$(quotedString_, $task) {
return ff_core_Option.Option_filter(ff_core_Option.Option_flatMap(ff_core_String.String_removeFirst(quotedString_, "\""), ((_w1) => {
return ff_core_String.String_removeLast(_w1, "\"")
})), ((s_) => {
return (ff_core_Option.Option_any(ff_core_String.String_first(s_), ((_w1) => {
return ff_core_Char.Char_isAsciiLetter(_w1)
})) && ff_core_String.String_all(s_, ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
})))
}))
}

export async function noSideEffects_$(term_, $task) {
{
const _1 = term_;
if(_1.EField) {
const e_ = _1.record_;
return ff_compiler_JsEmitter.noSideEffects_(e_)
}
if(_1.EVariable) {
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/BrowserSystem.BrowserSystem_js" && _1.arguments_.length === 1) {
const a_ = _1.arguments_[0];
return ff_compiler_JsEmitter.noSideEffects_(a_.value_)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/BuildSystem.BuildSystem_js" && _1.arguments_.length === 1) {
const a_ = _1.arguments_[0];
return ff_compiler_JsEmitter.noSideEffects_(a_.value_)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/NodeSystem.NodeSystem_js" && _1.arguments_.length === 1) {
const a_ = _1.arguments_[0];
return ff_compiler_JsEmitter.noSideEffects_(a_.value_)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Js.jsSystem") {
return true
}
if(_1.EString) {
return true
}
if(_1.EInt) {
return true
}
if(_1.EChar) {
return true
}
if(_1.EFloat) {
return true
}
{
return false
}
}
}

export function JsEmitter_writeUnmapped(self_, text_) {
ff_core_Array.Array_grabLast(self_.writtenStrings_).array.push(text_);
ff_core_Array.Array_grabLast(self_.writtenSegments_).array.push([self_.writtenColumn_]);
self_.writtenColumn_ += text_.length
}

export function JsEmitter_writeMapped(self_, at_, text_) {
ff_core_Array.Array_grabLast(self_.writtenStrings_).array.push(text_);
ff_core_Array.Array_grabLast(self_.writtenSegments_).array.push([self_.writtenColumn_, 0, (at_.line_ - 1), (at_.column_ - 1)]);
self_.writtenColumn_ += text_.length
}

export function JsEmitter_writeNamed(self_, name_, at_, text_) {
const unqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((c_) => {
return ((c_ !== 46) && (c_ !== 95))
})));
const nameIndex_ = ff_core_StringMap.StringMap_getOrSet(self_.writtenNames_, unqualified_, (() => {
return ff_core_StringMap.StringMap_size(self_.writtenNames_)
}));
ff_core_Array.Array_grabLast(self_.writtenStrings_).array.push(text_);
ff_core_Array.Array_grabLast(self_.writtenSegments_).array.push([self_.writtenColumn_, 0, (at_.line_ - 1), (at_.column_ - 1), nameIndex_]);
self_.writtenColumn_ += text_.length
}

export function JsEmitter_writeLine(self_) {
self_.writtenStrings_.array.push(ff_core_Array.new_());
self_.writtenSegments_.array.push(ff_core_Array.new_());
self_.writtenColumn_ = 0
}

export function JsEmitter_writeAnchor(self_) {
return (self_.writtenStrings_.array.length - 1)
}

export function JsEmitter_writeAnchorLines(self_, anchor_, lines_) {
if(ff_core_IntMap.IntMap_has(self_.writtenAnchors_, anchor_)) {
ff_core_IntMap.IntMap_set(self_.writtenAnchors_, anchor_, [...ff_core_IntMap.IntMap_grab(self_.writtenAnchors_, anchor_), ...lines_])
} else {
ff_core_IntMap.IntMap_set(self_.writtenAnchors_, anchor_, lines_)
}
}

export function JsEmitter_makeOutput(self_) {
return ff_compiler_SourceMap.makeOutput_(self_.writtenStrings_, self_.writtenAnchors_)
}

export function JsEmitter_makeOutputAndSourceMap(self_, fireflyFile_, fireflySource_) {
return ff_compiler_SourceMap.makeOutputAndSourceMap_(fireflyFile_, fireflySource_, self_.writtenStrings_, self_.writtenSegments_, self_.writtenAnchors_, self_.writtenNames_)
}

export function JsEmitter_emitModule(self_, module_) {
const selfImport_ = ff_compiler_JsEmitter.JsEmitter_emitImport(self_, self_.moduleKey_);
const imports_ = ff_core_List.List_flatten([ff_core_Option.Option_toList(ff_core_Option.Option_map(self_.compilerModuleFileUrl_, ((_w1) => {
return (("import * as $firefly_compiler from '" + _w1) + "'")
}))), ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((_w1) => {
return _w1.moduleKey_
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_ModuleKey), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitImport(self_, _w1.moduleKey_)
}))]);
const liner_ = ff_compiler_JsEmitter.Liner(self_, true, true);
if((!ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 === selfImport_)
})))) {
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, selfImport_)
};
for(let for_a = imports_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const import_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, import_)
};
const anchor_ = ff_compiler_JsEmitter.JsEmitter_writeAnchor(self_);
for(let for_a = module_.types_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition(self_, _w1)
};
for(let for_a = module_.lets_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, _w1, false, false)
};
for(let for_a = module_.functions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "", false)
};
ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
for(let for_a = module_.functions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "", false)
}
}));
for(let for_a = module_.extends_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition(self_, _w1)
};
for(let for_a = module_.instances_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitInstanceDefinition(self_, _w1)
};
const ignoreJsImports_ = ((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && ff_compiler_Syntax.PackagePair_isCore(self_.moduleKey_.packagePair_))
? ["esbuild"]
: []);
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
if((!ff_core_List.List_isEmpty(jsImports_))) {
ff_compiler_JsEmitter.JsEmitter_writeAnchorLines(self_, anchor_, jsImports_)
}
}

export function JsEmitter_emitImport(self_, moduleKey_) {
const dots_ = ff_core_String.String_repeat("../", (self_.moduleKey_.folders_.length + 2));
const jsImportName_ = (((ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "_") + "_") + ff_core_List.List_join(ff_core_List.List_map(moduleKey_.folders_, ((_w1) => {
return (_w1 + "_")
})), "")) + moduleKey_.name_);
const jsImportFrom_ = (((((dots_ + ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "/")) + "/") + ff_core_List.List_join(ff_core_List.List_map(moduleKey_.folders_, ((_w1) => {
return (_w1 + "/")
})), "")) + moduleKey_.name_) + ".mjs");
return (((("import * as " + jsImportName_) + " from \"") + jsImportFrom_) + "\"")
}

export function JsEmitter_withEmittingAsync(self_, body_) {
try {
self_.emittingAsync_ = true;
return body_()
} finally {
self_.emittingAsync_ = false
}
}

export function JsEmitter_makeRun(self_, moduleName_, functions_, mainPackagePair_, bootstrapping_) {
const buildMainFunction_ = ff_core_Option.Option_filter(ff_core_List.List_find(functions_, ((_w1) => {
return (_w1.signature_.name_ === "buildMain")
})), ((_) => {
return (ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
}));
const willRunOnNode_ = ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget);
const targetMain_ = (willRunOnNode_
? "nodeMain"
: "browserMain");
const mainFunction_ = ff_core_Option.Option_orElse(ff_core_List.List_find(functions_, ((_w1) => {
return (_w1.signature_.name_ === targetMain_)
})), (() => {
return ff_core_List.List_find(functions_, ((_w1) => {
return (_w1.signature_.name_ === "main")
}))
}));
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_map(mainFunction_, ((_w1) => {
return _w1.signature_.name_
})), ((mainName_) => {
return [ff_core_List.List_join([...ff_core_Option.Option_toList(ff_core_Option.Option_map(buildMainFunction_, ((buildMain_) => {
return (((("import {" + ff_compiler_JsEmitter.escapeKeyword_(buildMain_.signature_.name_)) + "$} from './") + moduleName_) + ".mjs'")
}))), (((("import {" + ff_compiler_JsEmitter.escapeKeyword_(mainName_)) + "$} from './") + moduleName_) + ".mjs'"), "export async function $run$(fireflyPath_, arguments_) {", "Error.stackTraceLimit = 50", "const $task = {controller_: new AbortController(), subtasks_: new Set(), promise_: new Promise(() => {}), started_: performance.now() * 0.001}", ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ["let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)"]
: []), "let system = {", "task_: $task,", "array_: arguments_,", "fireflyPath_: fireflyPath_,", (((("mainPackagePair_: {group_: \"" + mainPackagePair_.group_) + "\", name_: \"") + mainPackagePair_.name_) + "\"},"), (("executableMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable())
? "true"
: "false")) + ","), ("buildMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false")), "}", "try {", ...((!ff_core_Option.Option_isEmpty(buildMainFunction_))
? ["await buildMain_$(system, $task)"]
: []), ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? [(("await " + mainName_) + "_$(system, $task)")]
: []), ...(ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? ["await $firefly_compiler.internalCreateExecutable_$(system, '.firefly/output/executable/Main.bundle.js', '.firefly/output', ['host'], system.assets_, $task)"]
: []), "} finally {", ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ["$task.controller_.abort()", "clearInterval(interval)"]
: []), "}", "}", ...(((_1) => {
if(_1.EmitBrowser) {
return ["queueMicrotask(async () => {", "await $run$(null, [])", "})"]
}
if(_1.EmitNode && bootstrapping_) {
return ["import * as path from 'node:path'", "queueMicrotask(async () => {", "let fireflyPath_ = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(process.argv[1])))))", "await $run$(fireflyPath_, process.argv.slice(2))", "})"]
}
if(_1.EmitExecutable) {
return ["queueMicrotask(async () => {", "await $run$(null, process.argv.slice(2))", "})"]
}
{
return []
}
}))(self_.emitTarget_)], "\n")]
})), (() => {
return []
}))
}

export function JsEmitter_emitLetDefinition(self_, definition_, mutable_, async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, (mutable_
? "let "
: "const "));
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, ff_compiler_JsEmitter.escapeKeyword_(definition_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ";")
}

export function JsEmitter_emitExtendsDefinition(self_, definition_) {
const typeName_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_compiler_JsEmitter.extractTypeName_(definition_.type_)), ((_w1) => {
return (_w1 !== 46)
})));
const methods_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
{
const _1 = method_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, ((typeName_ + "_") + method_.signature_.name_), _c.member_, _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_, _c.effect_)
}))(method_.signature_), _c.body_)
return
}
}
}));
const liner_ = ff_compiler_JsEmitter.Liner(self_, true, true);
for(let for_a = methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "", false)
};
ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
for(let for_a = methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "", false)
}
}))
}

export function JsEmitter_emitInstanceDefinition(self_, definition_) {
const name_ = ff_compiler_JsEmitter.makeDictionaryName_(definition_.traitName_, ff_compiler_JsEmitter.firstTypeName_(definition_.typeArguments_));
do {
const _1 = definition_.constraints_;
if(_1.length === 0) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, definition_.at_, name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " = ")
break
}
{
const constraints_ = _1;
const dictionaries_ = ff_core_List.List_map(constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export function ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, definition_.at_, name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, (("(" + ff_core_List.List_join(dictionaries_, ", ")) + ") { return "))
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
for(let for_a = definition_.methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "", true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ",");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
};
ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(definition_.methods_, ((_w1) => {
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "", true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ",");
return ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}))
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}");
do {
const _1 = definition_.constraints_;
if(_1.length === 0) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ";")
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
}
} while(false)
}

export function JsEmitter_emitFunctionDefinition(self_, definition_, async_, suffix_ = "", asMethod_ = false) {
ff_compiler_JsEmitter.JsEmitter_emitSignature(self_, definition_.signature_, async_, suffix_, asMethod_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
do {
const _1 = definition_.body_;
if(_1.cases_.length === 1) {
const effect_ = _1.effect_;
const matchCase_ = _1.cases_[0];
if(ff_core_List.List_all(matchCase_.patterns_, ((_1) => {
if(_1.PVariable && _1.name_.None) {
return true
}
{
return false
}
}))) {
ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true, false, async_)
}))
break
}
}
{
const effect_ = _1.effect_;
const cases_ = _1.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = definition_.signature_.parameters_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const p_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, p_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, p_.name_, p_.at_, (p_.name_ + "_a"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, p_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, p_.name_, p_.at_, ff_compiler_JsEmitter.escapeKeyword_(p_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, p_.at_, ";")
};
const argumentTerms_ = ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
return (() => {
return ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, p_.name_, p_.at_, (p_.name_ + "_a"))
})
}));
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, argumentTerms_, c_, [], [], true, true, false, lastCase_, async_)
}
}))
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
}

export function JsEmitter_emitTailCall(self_, body_) {
const outerTailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = false;
const anchor_ = ff_compiler_JsEmitter.JsEmitter_writeAnchor(self_);
body_();
const tailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = outerTailCallUsed_;
if(tailCallUsed_) {
ff_compiler_JsEmitter.JsEmitter_writeAnchorLines(self_, anchor_, ["_tailcall: for(;;) {"]);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "return");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "}")
}
}

export function JsEmitter_emitSignature(self_, signature_, async_, suffix_ = "", asMethod_ = false) {
const prefix_ = (async_
? "async "
: "");
const asyncSuffix_ = (async_
? "$"
: "");
const fullPrefix_ = (prefix_ + (asMethod_
? ""
: "function "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, fullPrefix_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, signature_.name_, signature_.at_, ((ff_compiler_JsEmitter.escapeKeyword_(signature_.name_) + suffix_) + asyncSuffix_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = signature_.parameters_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitParameter(self_, _w1, async_)
};
for(let for_a = signature_.constraints_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, c_.at_, ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_)))
};
if(async_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, ")")
}

export function JsEmitter_emitParameter(self_, parameter_, async_) {
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, parameter_.name_, parameter_.at_, ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_));
{
const if_o = parameter_.default_
if(if_o.Some) {
const e_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)
}
}
}

export function JsEmitter_emitTypeDefinition(self_, definition_) {
if(definition_.newtype_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ("// newtype " + definition_.name_))
} else {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ("// type " + definition_.name_));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = definition_.variants_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition(self_, definition_, _w1)
}
}
}

export function JsEmitter_emitVariantDefinition(self_, typeDefinition_, definition_) {
const allFields_ = [...typeDefinition_.commonFields_, ...definition_.fields_];
function emitFields_() {
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = allFields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, f_.name_, f_.at_, ff_compiler_JsEmitter.escapeKeyword_(f_.name_))
}
}
function emitConstructor_() {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export function ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, definition_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "(");
emitFields_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
if(ff_core_List.List_isEmpty(allFields_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, (definition_.name_ + "$"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " = {");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, definition_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ": true};");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
emitConstructor_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "return ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, (definition_.name_ + "$"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
} else if((typeDefinition_.variants_.length === 1)) {
emitConstructor_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "return {");
emitFields_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "};");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
} else {
emitConstructor_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "return {");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, definition_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ": true, ");
emitFields_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "};");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
}
}

export function JsEmitter_emitTerm(self_, term_, async_, ignored_ = false) {
{
const _1 = term_;
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
if(ff_core_String.String_startsWith(value_, "\"\"\"", 0)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (("\"" + ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(value_, 3), 3), "\r", "\\r"), "\n", "\\n"), "\"", "\\\"")) + "\""))
return
}
}
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, value_)
return
}
if(_1.EChar) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_compiler_JsEmitter.charLiteralToNumber_(value_))
return
}
if(_1.EInt) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, value_)
return
}
if(_1.EFloat) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, value_)
return
}
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeResolved_(name_))
return
}
if(_1.EList) {
const at_ = _1.at_;
const items_ = _1.items_;
ff_compiler_JsEmitter.JsEmitter_emitList(self_, at_, items_, async_)
return
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "false")
return
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "true")
return
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(void 0)")
return
}
if(_1.EVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const arguments_ = _1.arguments_;
const newtype_ = ff_compiler_JsEmitter.JsEmitter_processVariant(self_, name_);
if(newtype_) {
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, ff_core_List.List_grabFirst(ff_core_Option.Option_grab(arguments_)), async_)
} else {
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeResolved_(name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_)), for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }")
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }")
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "function(_v) { return ff_core_Option.Some(_v); }")
return
}
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const n_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(function(_v) { return _v.");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, at_, ff_compiler_JsEmitter.escapeResolved_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " ? ff_core_Option.Some(_v) : ff_core_Option.None();})")
return
}
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const fields_ = _1.arguments_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "{...");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false);
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, f_.name_, at_, ff_compiler_JsEmitter.escapeKeyword_(f_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "}")
return
}
if(_1.EField) {
const at_ = _1.at_;
const newtype_ = _1.newtype_;
const record_ = _1.record_;
const field_ = _1.field_;
if(newtype_) {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false)
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, field_, at_, ff_compiler_JsEmitter.escapeKeyword_(field_))
}
return
}
if(_1.ELambda && _1.lambda_.cases_.length === 1 && _1.lambda_.cases_[0].guards_.length === 0) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const patterns_ = _1.lambda_.cases_[0].patterns_;
const body_ = _1.lambda_.cases_[0].body_;
if(ff_core_List.List_all(patterns_, ((_1) => {
if(_1.PVariable) {
return true
}
{
return false
}
}))) {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
if(newAsync_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "async ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
ff_core_List.List_each(patterns_, ((_1) => {
if(_1.PVariable && _1.name_.Some) {
const patternAt_ = _1.at_;
const name_ = _1.name_.value_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, patternAt_, ff_compiler_JsEmitter.escapeKeyword_(name_))
return
}
if(_1.PVariable && _1.name_.None) {
const patternAt_ = _1.at_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, patternAt_, "_")
return
}
{
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(at_, "Internal compiler error"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}));
if(newAsync_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") => {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, newAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})")
return
}
}
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const cases_ = _1.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs((cases_[0] ?? ff_core_List.List_grab(cases_, 0)).patterns_), ((_1) => {
{
const i_ = _1.first_;
const p_ = _1.second_;
return ff_core_Pair.Pair(p_.at_, ("_" + (i_ + 1)))
}
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
if(newAsync_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "async ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const a_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.first_, a_.second_)
};
const argumentTerms_ = ff_core_List.List_map(arguments_, ((_1) => {
{
const at_ = _1.first_;
const n_ = _1.second_;
return (() => {
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, n_)
})
return
}
}));
if(newAsync_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") => {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, argumentTerms_, c_, [], [], true, true, false, lastCase_, newAsync_)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})")
return
}
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", $task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_, ignored_)) {

return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
if(ff_compiler_JsEmitter.JsEmitter_emitSpecialCall(self_, term_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_)) {

return
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.instanceCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const dictionaryStrings_ = ff_core_List.List_map(dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, _w1)
}));
const ds_ = ff_core_List.List_dropFirst(dictionaryStrings_, 1);
const d_ = ff_core_List.List_grabFirst(dictionaryStrings_);
const asyncSuffix_ = (await_
? "$"
: "");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, d_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, (ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))) + asyncSuffix_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
for(let for_a = ds_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, _w1)
};
if(await_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const dictionaryStrings_ = ff_core_List.List_map(dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, _w1)
}));
const asyncSuffix_ = (await_
? "$"
: "");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, (ff_compiler_JsEmitter.escapeResolved_(name_) + asyncSuffix_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
for(let for_a = dictionaryStrings_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, _w1)
};
if(await_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "? ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ": ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, elseBody_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
{
const list_ = _1;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "? ff_core_Option.Some(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ": ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "ff_core_Option.None())")
return
}
}
return
}
if(_1.ECall && _1.target_.DynamicCall) {
const at_ = _1.at_;
const function_ = _1.target_.function_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if((!ff_core_List.List_isEmpty(dictionaries_))) {
ff_compiler_JsEmitter.fail_(at_, "Internal error: Dictionaries in lambda call")
};
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
if(await_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
if(ff_core_List.List_isEmpty(fields_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}")
} else {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, f_.name_, f_.at_, ff_compiler_JsEmitter.escapeKeyword_(f_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, f_.at_, ": ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}")
}
return
}
if(_1.EWildcard) {
const at_ = _1.at_;
const index_ = _1.index_;
if((index_ === 0)) {
ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ("_w" + index_))
return
}
if(_1.ESequential && _1.before_.ESequential && _1.before_.before_.ESequential) {
const before1_ = _1.before_.before_.before_;
const before2_ = _1.before_.before_.after_;
const before3_ = _1.before_.after_;
const after_ = _1.after_;
if((((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(before3_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before3_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
}
if(_1.ESequential && _1.before_.ESequential) {
const before1_ = _1.before_.before_;
const before2_ = _1.before_.after_;
const after_ = _1.after_;
if(((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
}
if(_1.ESequential) {
const before_ = _1.before_;
const after_ = _1.after_;
if((ff_compiler_JsEmitter.safeCommable_(before_) && ff_compiler_JsEmitter.safeCommable_(after_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
}
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await (async function() {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})())")
return
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(function() {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})()")
return
}
}
}

export function JsEmitter_emitField(self_, term_, async_, dot_ = ".") {
{
const _1 = term_;
if(_1.EString) {
const at_ = _1.at_;
const q_ = _1.value_;
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, dot_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_)
return
}
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
return
}
}
}

export function JsEmitter_makeDictionary(self_, d_) {
const m_ = ((d_.moduleKey_.name_ !== "")
? ((((ff_compiler_Syntax.PackagePair_groupName(d_.moduleKey_.packagePair_, "_") + "_") + ff_core_List.List_join(ff_core_List.List_map(d_.moduleKey_.folders_, ((_w1) => {
return (_w1 + "_")
})), "")) + d_.moduleKey_.name_) + ".")
: "");
const c_ = (m_ + ff_compiler_JsEmitter.makeDictionaryName_(d_.traitName_, d_.typeName_));
if(ff_core_List.List_isEmpty(d_.dictionaries_)) {
return c_
} else {
return (((c_ + "(") + ff_core_List.List_join(ff_core_List.List_map(d_.dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, _w1)
})), ", ")) + ")")
}
}

export function JsEmitter_emitStatements(self_, term_, last_, break_, async_) {
{
const _1 = term_;
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = functions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, f_, newAsync_, "", false)
};
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)
return
}
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)
return
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;

return
}
if(_1.ESequential && _1.before_.EVariant && _1.before_.name_ === "ff:core/Unit.Unit") {
const after_ = _1.after_;
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_)
return
}
if(_1.ESequential && _1.after_.EVariant && _1.after_.name_ === "ff:core/Unit.Unit") {
const before_ = _1.before_;
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, break_, async_)
return
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_)
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.tailCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const instanceCall_ = _1.target_.instanceCall_;
const effect_ = _1.effect_;
const arguments_ = _1.arguments_;
if(instanceCall_) {
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(at_, "Not yet implemented: Tail calls on trait methods."), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
self_.tailCallUsed_ = true;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const a_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_grab(a_.name_), a_.at_, ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.at_, ";")
};
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const a_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_grab(a_.name_), a_.at_, ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_grab(a_.name_)));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_grab(a_.name_), a_.at_, ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")))
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "continue _tailcall");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}")
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
if(ff_compiler_JsEmitter.JsEmitter_emitSpecialStatement(self_, term_, last_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_)) {

return
}
}
if(_1.EPipe && _1.function_.ELambda) {
const at_ = _1.at_;
const value_ = _1.value_;
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
if(((!last_) && (!break_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "do ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const _1 = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ";");
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [(() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, c_.at_, "_1")
})], c_, [], [], true, last_, break_, lastCase_, async_)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
if(((!last_) && (!break_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " while(false)")
}
return
}
if(ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_, true)) {

return
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
if(break_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") break")
} else if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, true)
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "} else ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, elseBody_, last_, break_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}")
return
}
{
const list_ = _1;
if((!last_)) {
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "} else ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}")
return
}
}
{
const list_ = _1;
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "return ff_core_Option.Some(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "} else ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return ff_core_Option.None()")
return
}
}
return
}
}
}

export function JsEmitter_emitAssignment(self_, term_, async_, ignored_) {
const anchor_ = ff_compiler_JsEmitter.JsEmitter_writeAnchor(self_);
const emitted_ = (((_1) => {
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
{
const _1 = name_;
if(_1 === "ff:core/JsValue.JsValue_set") {
const _guard1 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard1.length === 3) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const e3_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_increment") {
const _guard1 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard1.length === 3) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const e3_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " += ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_decrement") {
const _guard1 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard1.length === 3) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const e3_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " -= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
if(_1 === "ff:core/JsSystem.JsSystem_set") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const at_ = _guard3[1].at_;
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_increment") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const at_ = _guard3[1].at_;
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " += ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_decrement") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const at_ = _guard3[1].at_;
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " -= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
}
}
if(_1 === "ff:core/Js.set") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const at_ = _guard2[0].at_;
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
if(_1 === "ff:core/Js.increment") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const at_ = _guard2[0].at_;
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " += ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
if(_1 === "ff:core/Js.decrement") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const at_ = _guard2[0].at_;
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " -= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
{
return false
}
}
return
}
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const name_ = _1.variable_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeKeyword_(name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ((" " + operator_) + "= "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
return true
}
if(_1.EAssignField) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, field_, at_, ff_compiler_JsEmitter.escapeKeyword_(field_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ((" " + operator_) + "= "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
return true
}
{
return false
}
}))(term_);
if(((!ignored_) && emitted_)) {
ff_compiler_JsEmitter.JsEmitter_writeAnchorLines(self_, anchor_, ["("]);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", void 0)")
};
return emitted_
}

export function JsEmitter_emitSpecialCall(self_, term_, async_, name_, arguments_, dictionaries_) {
{
const _1 = name_;
{
const operator_ = _1;
const _guard2 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const value_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, operator_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
{
const operator_ = _1;
const _guard2 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const left_ = _guard1[0];
const right_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, operator_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
if(_1 === "ff:core/List.List_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "] ?? ff_core_List.List_grab(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "))");
return true
}
}
}
if(_1 === "ff:core/Array.Array_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".array[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "] ?? ff_core_Array.Array_grab(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "))");
return true
}
}
}
if(_1 === "ff:core/List.List_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".length");
return true
}
}
if(_1 === "ff:core/Array.Array_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".array.length");
return true
}
}
if(_1 === "ff:core/String.String_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".length");
return true
}
}
if(_1 === "ff:core/Equal.equals") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " === ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Equal.notEquals") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " !== ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.before") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " < ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.notBefore") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " >= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.after") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " > ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.notAfter") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " <= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/List.fillBy") {
const _guard3 = term_;
if(_guard3.ECall) {
const call_ = _guard3;
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[1].ELambda && _guard2[1].lambda_.cases_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_[0].PVariable && _guard2[1].lambda_.cases_[0].guards_.length === 0) {
const size_ = _guard2[0];
const at_ = _guard2[1].at_;
const l_ = _guard2[1].lambda_;
const c_ = _guard2[1].lambda_.cases_[0];
const variableAt_ = _guard2[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
const n_ = ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return ff_compiler_JsEmitter.escapeResolved_(_w1)
})), (() => {
return "i"
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_));
if(newAsync_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "await ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "((() => {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const size = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, size_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const result = [];");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_else(name_, (() => {
return "_"
})), variableAt_, n_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = 0; ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_else(name_, (() => {
return "_"
})), variableAt_, n_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " < size; ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_else(name_, (() => {
return "_"
})), variableAt_, n_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "result.push(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, newAsync_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ");");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return result;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})())");
return true
}
}
}
}
if(_1 === "ff:core/Js.import") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const url_ = _guard1[0].value_;
do {
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(() => {throw new Error('Node.js imports are not supported in the browser')})()")
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
}
} while(false);
return true
}
}
if(_1 === "ff:core/Js.browserImport") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const url_ = _guard1[0].value_;
do {
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(() => {throw new Error('Browser imports are not supported in Node.js')})()")
}
} while(false);
return true
}
}
if(_1 === "ff:core/Js.dynamicImport") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const url_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "import(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, url_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.await") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const body_ = _guard1[0];
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)
};
return true
}
}
{
const name_ = _1;
const _guard4 = ff_core_String.String_removeFirst(name_, "ff:core/Js.async");
if(_guard4.Some) {
const n_ = _guard4.value_;
const _guard3 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 1 && _guard2[0].ELambda && _guard2[0].lambda_.cases_.length === 1 && _guard2[0].lambda_.cases_[0].guards_.length === 0) {
const at_ = _guard2[0].at_;
const effect_ = _guard2[0].lambda_.effect_;
const patterns_ = _guard2[0].lambda_.cases_[0].patterns_;
const body_ = _guard2[0].lambda_.cases_[0].body_;
if(ff_core_List.List_all(patterns_, ((_1) => {
if(_1.PVariable) {
return true
}
{
return false
}
}))) {
const patternParameters_ = ff_core_List.List_map(patterns_, ((_1) => {
if(_1.PVariable) {
const p_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.name_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), (() => {
return "_"
}))
return
}
{
return ff_core_Core.panic_("!")
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (("async (" + ff_core_List.List_join(patternParameters_, ", ")) + ") => {"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
}
}
{
const name_ = _1;
if(ff_core_String.String_startsWith(name_, "ff:core/Js.async", 0)) {
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(term_.at_, "JS async functions must take a simple parameter list"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
if(_1 === "ff:core/Js.cancelled") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (async_
? "$task.controller_.signal.aborted"
: "false"));
return true
}
if(_1 === "ff:core/Js.throwIfCancelled") {
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "((() => ff_core_Task.Task_throwIfAborted($task))())")
};
return true
}
if(_1 === "ff:core/Js.currentTask") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task");
return true
}
if(_1 === "ff:core/Js.controller") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task.controller_");
return true
}
if(_1 === "ff:core/Js.setController") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const a_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "($task.controller_ = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.inAsync") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (self_.emittingAsync_
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.inBrowser") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser())
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.inNode") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitNode())
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.inBuild") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.value") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Js.fromValue") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Js.rawIdentifier") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
return true
}
}
if(_1 === "ff:core/Js.unaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.binaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.shortCircuitingOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(a2_), async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_spreadToArray") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e1_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "[...");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_typeof") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(typeof ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_instanceof") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " instanceof ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_get") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_equals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " === ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_notEquals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " !== ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Int.Int_bitAnd") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " & ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Int.Int_bitRightUnsigned") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " >>> ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Int.Int_bitRight") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " >> ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/JsValue.JsValue_call");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const es_ = _guard1.slice(2);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/JsValue.JsValue_callValue");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 1) {
const e1_ = _guard1[0];
const es_ = _guard1.slice(1);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/JsValue.JsValue_new");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 1) {
const e1_ = _guard1[0];
const es_ = _guard1.slice(1);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(new ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "))");
return true
}
}
}
}
{
const name_ = _1;
if(((name_ === "ff:core/JsValue.JsValue_with") || (name_ === "ff:core/Json.Json_with"))) {
function go_(e_, fields_) {
{
const _1 = e_;
if(_1.ECall && _1.target_.StaticCall && _1.arguments_.length === 3) {
const n_ = _1.target_.name_;
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
const a3_ = _1.arguments_[2];
if((n_ === name_)) {
go_(a1_.value_, [ff_core_Pair.Pair(a2_.value_, a3_.value_), ...fields_])
return
}
}
if(_1.ECall && _1.target_.StaticCall) {
const n_ = _1.target_.name_;
const as_ = _1.arguments_;
const _guard2 = ((((((n_ === "ff:core/JsSystem.JsSystem_object") || (n_ === "ff:core/JsSystem.JsSystem_new0")) || (n_ === "ff:core/Js.object")) || (n_ === "ff:core/Js.new0")) || (n_ === "ff:core/Json.Json_object")) || (n_ === "ff:core/Json.Json_new0"));
if(_guard2 && ff_core_List.List_all(as_, ((_w1) => {
return ff_compiler_JsEmitter.noSideEffects_(_w1.value_)
}))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "{");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const p_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, ": ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "}")
return
}
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "{...");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const p_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, ": ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "}")
return
}
}
}
go_(term_, []);
return true
}
}
{
const name_ = _1;
const _guard4 = ff_core_String.String_removeFirst(name_, "ff:core/JsSystem.JsSystem_call");
if(_guard4.Some) {
const n_ = _guard4.value_;
const _guard3 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length >= 2 && _guard2[1].EString) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
const at_ = _guard2[1].at_;
const q_ = _guard2[1].value_;
const es_ = _guard2.slice(2);
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
}
{
const name_ = _1;
const _guard6 = ff_core_String.String_removeFirst(name_, "ff:core/JsSystem.JsSystem_function");
if(_guard6.Some) {
const n_ = _guard6.value_;
const _guard5 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard5) {
const _guard4 = arguments_;
if(_guard4.length === 2) {
const e1_ = _guard4[0];
const e2_ = _guard4[1];
const _guard3 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard3) {
const _guard2 = term_;
if(_guard2.ECall) {
const call_ = _guard2;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
}
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_get") {
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[1].EString) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
const at_ = _guard2[1].at_;
const q_ = _guard2[1].value_;
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_object") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_new0") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_null") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "null");
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_undefined") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(void 0)");
return true
}
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/Js.call");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 1 && _guard1[0].EString) {
const e1_ = _guard1[0];
const at_ = _guard1[0].at_;
const q_ = _guard1[0].value_;
const es_ = _guard1.slice(1);
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
{
const name_ = _1;
const _guard4 = ff_core_String.String_removeFirst(name_, "ff:core/Js.function");
if(_guard4.Some) {
const n_ = _guard4.value_;
const _guard3 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e1_ = _guard2[0];
const _guard1 = term_;
if(_guard1.ECall) {
const call_ = _guard1;
if((self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(ff_core_Int.Int_to(1, ff_core_String.String_grabInt(n_)), ((_w1) => {
return ("a_" + _w1)
})), ", ");
const taskCode_ = ((argumentCode_ === "")
? "$task"
: ", $task");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (("(async (" + argumentCode_) + ") => await "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ((("(" + argumentCode_) + taskCode_) + "))"))
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)
};
return true
}
}
}
}
}
if(_1 === "ff:core/Js.get") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const e1_ = _guard1[0];
const at_ = _guard1[0].at_;
const q_ = _guard1[0].value_;
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
return true
}
}
if(_1 === "ff:core/Js.object") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
if(_1 === "ff:core/Js.new0") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
if(_1 === "ff:core/Js.null") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "null");
return true
}
if(_1 === "ff:core/Js.undefined") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(void 0)");
return true
}
if(_1 === "ff:core/Js.globalThis") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
if(_1 === "ff:core/BrowserSystem.BrowserSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
}
}
if(_1 === "ff:core/BuildSystem.BuildSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
}
}
if(_1 === "ff:core/NodeSystem.NodeSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
}
}
if(_1 === "ff:core/Js.jsSystem") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
if(_1 === "ff:core/Json.string") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.int") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.float") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.bool") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.array") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.null") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "null");
return true
}
}
if(_1 === "ff:core/Json.object") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
}
{
return false
}
}
}

export function JsEmitter_emitSpecialStatement(self_, term_, last_, async_, name_, arguments_, dictionaries_) {
{
const _1 = name_;
if(_1 === "ff:core/Core.while") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const condition_ = _guard1[0];
const body_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "while");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_), async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
if(_1 === "ff:core/Core.doWhile") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const doWhileBody_ = _guard2[0];
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
{
const body_ = _guard1;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "while");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(true) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, false, true, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
if(_1 === "ff:core/Option.Option_each") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0];
const nameAt_ = _guard1[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const if_o = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(if_o.Some) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = if_o.value_;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
{
const n_ = _1;
const _guard3 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[0].ECall && _guard2[0].target_.StaticCall && _guard2[0].arguments_.length === 2 && _guard2[1].ELambda && _guard2[1].lambda_.cases_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_[0].PVariable && _guard2[1].lambda_.cases_[0].guards_.length === 0) {
const r_ = _guard2[0].target_.name_;
const start_ = _guard2[0].arguments_[0];
const end_ = _guard2[0].arguments_[1];
const nameAt_ = _guard2[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(let for_i = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", for_e = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
const op_ = ((r_ === "ff:core/Int.Int_until")
? "<"
: "<=");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (("; for_i " + op_) + " for_e; for_i++) {"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = for_i;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
}
{
const n_ = _1;
const _guard3 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[0].ECall && _guard2[0].target_.StaticCall && _guard2[0].target_.name_ === "ff:core/List.List_reverse" && _guard2[0].arguments_.length === 1 && _guard2[0].arguments_[0].value_.ECall && _guard2[0].arguments_[0].value_.target_.StaticCall && _guard2[0].arguments_[0].value_.arguments_.length === 2 && _guard2[1].ELambda && _guard2[1].lambda_.cases_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_[0].PVariable && _guard2[1].lambda_.cases_[0].guards_.length === 0) {
const r_ = _guard2[0].arguments_[0].value_.target_.name_;
const start_ = _guard2[0].arguments_[0].value_.arguments_[0];
const end_ = _guard2[0].arguments_[0].value_.arguments_[1];
const nameAt_ = _guard2[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(let for_e = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", for_i = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
if((r_ === "ff:core/Int.Int_until")) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " - 1")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i >= for_e; for_i--) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = for_i;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
}
{
const n_ = _1;
const _guard2 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].ECall && _guard1[0].target_.StaticCall && _guard1[0].target_.name_ === "ff:core/List.List_zip" && _guard1[0].arguments_.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariant && _guard1[1].lambda_.cases_[0].patterns_[0].name_ === "ff:core/Pair.Pair" && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_.length === 2 && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list1_ = _guard1[0].arguments_[0];
const list2_ = _guard1[0].arguments_[1];
const at1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].at_;
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const at2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].at_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "", list1_.value_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "2", list2_.value_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name1_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at1_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
{
const if_o = name2_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at2_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a2[for_i2];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
{
const n_ = _1;
const _guard2 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].ECall && _guard1[0].target_.StaticCall && _guard1[0].target_.name_ === "ff:core/List.List_pairs" && _guard1[0].arguments_.length === 1 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariant && _guard1[1].lambda_.cases_[0].patterns_[0].name_ === "ff:core/Pair.Pair" && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_.length === 2 && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list1_ = _guard1[0].arguments_[0];
const at1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].at_;
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const at2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].at_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "", list1_.value_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i < for_l; for_i++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name1_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at1_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
{
const if_o = name2_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at2_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
{
const n_ = _1;
const _guard2 = ((((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile")) || (n_ === "ff:core/Array.Array_each")) || (n_ === "ff:core/Array.Array_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list1_ = _guard1[0];
const at1_ = _guard1[1].lambda_.cases_[0].patterns_[0].at_;
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "", list1_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i < for_l; for_i++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name1_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at1_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
if(_1 === "ff:core/Array.Array_push") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const array_ = _guard1[0];
const value_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, array_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, array_.at_, ".array.push(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, array_.at_, ")");
return true
}
}
if(_1 === "ff:core/Core.if") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const condition_ = _guard1[0];
const body_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return ff_core_Option.Some(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
} else {
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " else return ff_core_Option.None()")
};
return true
}
}
if(_1 === "ff:core/Core.throw") {
const _guard3 = term_;
if(_guard3.ECall) {
const c_ = _guard3;
const _guard2 = c_.arguments_;
if(_guard2.length === 1) {
const argument_ = _guard2[0];
const _guard1 = dictionaries_;
if(_guard1.length === 2) {
const hasAnyTag_ = _guard1[0];
const show_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "throw ff_core_Js.initializeError_(new Error(), ");
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, term_.at_, argument_, async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, hasAnyTag_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, show_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Try.Try_catch" && ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_)) {
return true
}
if(_1 === "ff:core/Try.Try_catchAny" && ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_)) {
return true
}
if(_1 === "ff:core/Try.Try_finally" && ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_)) {
return true
}
if(_1 === "ff:core/Js.throwIfCancelled") {
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "ff_core_Task.Task_throwIfAborted($task)")
};
return true
}
if(_1 === "ff:core/Js.throw") {
const _guard2 = term_;
if(_guard2.ECall) {
const c_ = _guard2;
const _guard1 = c_.arguments_;
if(_guard1.length === 1) {
const argument_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "throw ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_, async_, false);
return true
}
}
}
{
return false
}
}
}

export function JsEmitter_emitLightFusion(self_, suffix_, list_, isArray_, async_) {
function wrapUnlessInt_(term_, before_, after_) {
const term_a = term_;
const before_a = before_;
const after_a = after_;
if(term_a.EInt) {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)
return
}
{
if((before_ !== "")) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, before_)
};
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false);
if((after_ !== "")) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, after_)
}
return
}
}
do {
const _1 = list_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = "));
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length"))
break
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = 0"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length - "));
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)")
break
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = 0"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, "Math.min(");
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_a" + suffix_) + ".length)"))
break
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("Math.max(for_a" + suffix_) + ".length - "));
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", 0), for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length"))
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = 0"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length"))
}
} while(false)
}

export function JsEmitter_emitTryCatchFinally(self_, term_, last_, async_) {
function emitCatch_(catchEffect_, cases_) {
const catchAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(catchEffect_));
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = [(() => {
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "_exception.value_")
}), (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "_error")
})];
do {
const _1 = cases_;
if(_1.length === 1) {
const case_ = _1[0];
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, case_, [], [], false, last_, false, true, catchAsync_)
break
}
{
const cs_ = _1;
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "do {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
};
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, c_, [], [], true, last_, false, lastCase_, catchAsync_)
};
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} while(false)")
} else {

}
}
} while(false)
}
{
const _1 = term_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_finally" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const finallyEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const finallyBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} finally {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catchAny" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].PVariable && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const nameAt_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].at_;
const name_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].name_;
const catchBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} catch");
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, nameAt_, "(");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, nameAt_, ")")
}
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, catchBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.dictionaries_.length === 1) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.dictionaries_[0];
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, dictionary_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} catch(_error) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_error.ffException) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const _exception = ff_core_Any.fromAny_(_error.ffException, ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, d_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_exception.Some) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
emitCatch_(catchEffect_, cases_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_finally" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_[0].value_.arguments_.length === 2 && _1.arguments_[0].value_.arguments_[0].value_.ECall && _1.arguments_[0].value_.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[0].value_.arguments_[1].value_.ELambda && _1.arguments_[0].value_.dictionaries_.length === 1 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[0].value_.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[0].value_.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.arguments_[0].value_.dictionaries_[0];
const finallyEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const finallyBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, dictionary_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} catch(_error) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_error.ffException) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const _exception = ff_core_Any.fromAny_(_error.ffException, ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, d_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_exception.Some) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
emitCatch_(catchEffect_, cases_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} finally {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
{
return false
}
}
}

export function JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_) {
function emitWrapperStart_() {
if(ff_core_List.List_isEmpty(conditions_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "{")
} else {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "if(");
for(let for_a = conditions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
c_();
if((i_ < (conditions_.length - 1))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, " && ")
}
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, ") {")
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
for(let for_a = variables_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
_w1()
}
}
function emitWrapperEnd_() {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "}")
}
do {
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
if(_1.first_.length >= 1) {
const p_ = _1.first_[0];
const ps_ = _1.first_.slice(1);
ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, (arguments_[0] ?? ff_core_List.List_grab(arguments_, 0)), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), conditions_, variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
if(ff_core_List.List_isEmpty(variables_)) {
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [...conditions_, (() => {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)
})], [], jump_, last_, break_, lastCase_, async_)
break
}
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
emitWrapperStart_();
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [(() => {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)
})], [], jump_, last_, break_, lastCase_, async_);
emitWrapperEnd_()
break
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const guard_ = _1.second_[0];
const guards_ = _1.second_.slice(1);
const guardName_ = ("_guard" + (guards_.length + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [guard_.pattern_], guards_, _c.body_)
}))(matchCase_);
emitWrapperStart_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, guard_.at_, (("const " + guardName_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, guard_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [(() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, guard_.at_, guardName_)
})], newCase_, [], [], jump_, last_, break_, lastCase_, async_);
emitWrapperEnd_()
break
}
{
emitWrapperStart_();
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, break_, async_);
const returns_ = ff_core_Option.Option_any(ff_core_Array.Array_last(self_.writtenStrings_), ((line_) => {
return ff_core_Option.Option_any(ff_core_Array.Array_first(line_), ((part_) => {
return ((((((ff_core_String.String_startsWith(part_, "return ", 0) || ff_core_String.String_startsWith(part_, "break ", 0)) || ff_core_String.String_startsWith(part_, "continue ", 0)) || ff_core_String.String_startsWith(part_, "return;", 0)) || ff_core_String.String_startsWith(part_, "break;", 0)) || ff_core_String.String_startsWith(part_, "continue;", 0)) || ff_core_String.String_startsWith(part_, "throw ", 0))
}))
}));
if(((jump_ && last_) && (!returns_))) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "return")
} else if(((jump_ && (!returns_)) && (!lastCase_))) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, (break_
? "continue"
: "break"))
} else {};
emitWrapperEnd_()
}
} while(false)
}

export function JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_) {
function addUnaryCondition_(at_, operator_, right_) {
return addCondition_((() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, operator_);
right_()
}))
}
function addBinaryCondition_(at_, operator_, left_, right_) {
return addCondition_((() => {
left_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ((" " + operator_) + " "));
right_()
}))
}
function addCondition_(condition_) {
if(lastCase_) {
return conditions_
} else {
return [...conditions_, condition_]
}
}
do {
const _1 = pattern_;
if(_1.PString) {
const value_ = _1.value_;
const newConditions_ = addBinaryCondition_(pattern_.at_, "===", argument_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, pattern_.at_, value_)
}));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PInt) {
const value_ = _1.value_;
const newConditions_ = addBinaryCondition_(pattern_.at_, "===", argument_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, pattern_.at_, value_)
}));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PChar) {
const value_ = _1.value_;
const newConditions_ = addBinaryCondition_(pattern_.at_, "===", argument_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, pattern_.at_, ff_compiler_JsEmitter.charLiteralToNumber_(value_))
}));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PVariable && _1.name_.None) {
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PVariable && _1.name_.Some) {
const at_ = _1.at_;
const name_ = _1.name_.value_;
const newVariables_ = [...variables_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeKeyword_(name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
argument_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
})];
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.False" && _1.patterns_.length === 0) {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, addUnaryCondition_(at_, "!", argument_), variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.True" && _1.patterns_.length === 0) {
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, addCondition_(argument_), variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PVariant) {
const at_ = _1.at_;
const emptyOrLink_ = _1.name_;
if(((emptyOrLink_ === "List$Empty") || (emptyOrLink_ === "List$Link"))) {
let restPattern_ = ff_core_Option.None();
function listPatterns_(matchPattern_) {
const matchPattern_a = matchPattern_;
if(matchPattern_a.PVariant && matchPattern_a.name_ === "List$Empty" && matchPattern_a.patterns_.length === 0) {
return []
}
if(matchPattern_a.PVariant && matchPattern_a.name_ === "List$Link" && matchPattern_a.patterns_.length === 2) {
const head_ = matchPattern_a.patterns_[0];
const tail_ = matchPattern_a.patterns_[1];
return [head_, ...listPatterns_(tail_)]
}
{
const p_ = matchPattern_a;
restPattern_ = ff_core_Option.Some(p_);
return []
}
}
const patterns_ = listPatterns_(pattern_);
const itemArguments_ = ff_core_List.List_map(ff_core_List.List_pairs(patterns_), ((_1) => {
{
const i_ = _1.first_;
return (() => {
argument_();
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (("[" + i_) + "]"))
})
return
}
}));
const restArgument_ = ff_core_Option.Option_map(restPattern_, ((_) => {
return (() => {
argument_();
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ((".slice(" + patterns_.length) + ")"))
})
}));
const newArguments_ = [...itemArguments_, ...ff_core_Option.Option_toList(restArgument_), ...arguments_];
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...ff_core_Option.Option_toList(restPattern_), ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const operator_ = ff_core_Option.Option_else(ff_core_Option.Option_map(restPattern_, ((_) => {
return ">="
})), (() => {
return "==="
}));
const newConditions_ = addBinaryCondition_(at_, operator_, (() => {
argument_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".length")
}), (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ("" + patterns_.length))
}));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
break
}
}
if(_1.PVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, at_, name_, argument_);
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, (() => {
argument_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, processed_.variantName_, at_, processed_.variantName_)
})]);
const newArguments_ = [...processed_.arguments_, ...arguments_];
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
break
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, at_, name_, argument_);
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, (() => {
argument_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, processed_.variantName_, at_, processed_.variantName_)
})]);
const newVariables_ = ff_core_Option.Option_else(ff_core_Option.Option_map(variable_, ((x_) => {
return [...variables_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, x_, at_, ff_compiler_JsEmitter.escapeKeyword_(x_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
argument_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
})]
})), (() => {
return variables_
}));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
break
}
{
const at_ = _1.at_;
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const newVariables_ = [...variables_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, variable_, at_, ff_compiler_JsEmitter.escapeKeyword_(variable_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
argument_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
})];
ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
}
} while(false)
}

export function JsEmitter_emitList(self_, at_, items_, async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "[");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
ff_core_List.List_each(items_, ((_1) => {
if(!_1.second_) {
const item_ = _1.first_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false)
return
}
{
const item_ = _1.first_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, item_.at_, "...");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false)
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "]")
}

export function JsEmitter_processVariantCase(self_, at_, name_, argument_) {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (variantNameUnqualified_.length + 1));
const variantModule_ = ff_core_Map.Map_grab(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
let loneVariant_ = false;
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_;
loneVariant_ = (definition_.variants_.length === 1);
return [...ff_core_List.List_map(definition_.commonFields_, ((_w1) => {
return _w1.name_
})), ...ff_core_List.List_map(variant_.fields_, ((_w1) => {
return _w1.name_
}))]
}))
}))), ((field_) => {
if(newtype_) {
return argument_
} else {
return (() => {
argument_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ("." + ff_compiler_JsEmitter.escapeKeyword_(field_)))
})
}
}));
return ff_compiler_JsEmitter.ProcessedVariantCase(variantName_, newtype_, loneVariant_, newArguments_)
}

export function JsEmitter_processVariant(self_, name_) {
if(ff_core_String.String_startsWith(name_, "List$", 0)) {
return false
} else {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (variantNameUnqualified_.length + 1));
const variantModule_ = ff_core_Map.Map_grab(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_
}))
})));
return newtype_
}
}

export function JsEmitter_emitArgument(self_, callAt_, argument_, async_) {
{
const _1 = argument_.value_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/SourceLocation.callSite") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "\"");
for(let for_a = self_.moduleKey_.folders_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (_w1 + "/"))
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, self_.moduleKey_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (((":" + callAt_.line_) + ":") + callAt_.column_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ((("," + self_.moduleKey_.packagePair_.group_) + ",") + self_.moduleKey_.packagePair_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "\"")
return
}
{
const value_ = _1;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)
return
}
}
}

export async function JsEmitter_writeUnmapped$(self_, text_, $task) {
ff_core_Array.Array_grabLast(self_.writtenStrings_).array.push(text_);
ff_core_Array.Array_grabLast(self_.writtenSegments_).array.push([self_.writtenColumn_]);
self_.writtenColumn_ += text_.length
}

export async function JsEmitter_writeMapped$(self_, at_, text_, $task) {
ff_core_Array.Array_grabLast(self_.writtenStrings_).array.push(text_);
ff_core_Array.Array_grabLast(self_.writtenSegments_).array.push([self_.writtenColumn_, 0, (at_.line_ - 1), (at_.column_ - 1)]);
self_.writtenColumn_ += text_.length
}

export async function JsEmitter_writeNamed$(self_, name_, at_, text_, $task) {
const unqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((c_) => {
return ((c_ !== 46) && (c_ !== 95))
})));
const nameIndex_ = ff_core_StringMap.StringMap_getOrSet(self_.writtenNames_, unqualified_, (() => {
return ff_core_StringMap.StringMap_size(self_.writtenNames_)
}));
ff_core_Array.Array_grabLast(self_.writtenStrings_).array.push(text_);
ff_core_Array.Array_grabLast(self_.writtenSegments_).array.push([self_.writtenColumn_, 0, (at_.line_ - 1), (at_.column_ - 1), nameIndex_]);
self_.writtenColumn_ += text_.length
}

export async function JsEmitter_writeLine$(self_, $task) {
self_.writtenStrings_.array.push(ff_core_Array.new_());
self_.writtenSegments_.array.push(ff_core_Array.new_());
self_.writtenColumn_ = 0
}

export async function JsEmitter_writeAnchor$(self_, $task) {
return (self_.writtenStrings_.array.length - 1)
}

export async function JsEmitter_writeAnchorLines$(self_, anchor_, lines_, $task) {
if(ff_core_IntMap.IntMap_has(self_.writtenAnchors_, anchor_)) {
ff_core_IntMap.IntMap_set(self_.writtenAnchors_, anchor_, [...ff_core_IntMap.IntMap_grab(self_.writtenAnchors_, anchor_), ...lines_])
} else {
ff_core_IntMap.IntMap_set(self_.writtenAnchors_, anchor_, lines_)
}
}

export async function JsEmitter_makeOutput$(self_, $task) {
return ff_compiler_SourceMap.makeOutput_(self_.writtenStrings_, self_.writtenAnchors_)
}

export async function JsEmitter_makeOutputAndSourceMap$(self_, fireflyFile_, fireflySource_, $task) {
return ff_compiler_SourceMap.makeOutputAndSourceMap_(fireflyFile_, fireflySource_, self_.writtenStrings_, self_.writtenSegments_, self_.writtenAnchors_, self_.writtenNames_)
}

export async function JsEmitter_emitModule$(self_, module_, $task) {
const selfImport_ = ff_compiler_JsEmitter.JsEmitter_emitImport(self_, self_.moduleKey_);
const imports_ = ff_core_List.List_flatten([ff_core_Option.Option_toList(ff_core_Option.Option_map(self_.compilerModuleFileUrl_, ((_w1) => {
return (("import * as $firefly_compiler from '" + _w1) + "'")
}))), ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((_w1) => {
return _w1.moduleKey_
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_ModuleKey), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitImport(self_, _w1.moduleKey_)
}))]);
const liner_ = ff_compiler_JsEmitter.Liner(self_, true, true);
if((!ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 === selfImport_)
})))) {
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, selfImport_)
};
for(let for_a = imports_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const import_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, import_)
};
const anchor_ = ff_compiler_JsEmitter.JsEmitter_writeAnchor(self_);
for(let for_a = module_.types_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition(self_, _w1)
};
for(let for_a = module_.lets_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, _w1, false, false)
};
for(let for_a = module_.functions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "", false)
};
ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
for(let for_a = module_.functions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "", false)
}
}));
for(let for_a = module_.extends_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition(self_, _w1)
};
for(let for_a = module_.instances_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitInstanceDefinition(self_, _w1)
};
const ignoreJsImports_ = ((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && ff_compiler_Syntax.PackagePair_isCore(self_.moduleKey_.packagePair_))
? ["esbuild"]
: []);
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
if((!ff_core_List.List_isEmpty(jsImports_))) {
ff_compiler_JsEmitter.JsEmitter_writeAnchorLines(self_, anchor_, jsImports_)
}
}

export async function JsEmitter_emitImport$(self_, moduleKey_, $task) {
const dots_ = ff_core_String.String_repeat("../", (self_.moduleKey_.folders_.length + 2));
const jsImportName_ = (((ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "_") + "_") + ff_core_List.List_join(ff_core_List.List_map(moduleKey_.folders_, ((_w1) => {
return (_w1 + "_")
})), "")) + moduleKey_.name_);
const jsImportFrom_ = (((((dots_ + ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "/")) + "/") + ff_core_List.List_join(ff_core_List.List_map(moduleKey_.folders_, ((_w1) => {
return (_w1 + "/")
})), "")) + moduleKey_.name_) + ".mjs");
return (((("import * as " + jsImportName_) + " from \"") + jsImportFrom_) + "\"")
}

export async function JsEmitter_withEmittingAsync$(self_, body_, $task) {
try {
self_.emittingAsync_ = true;
return (await body_($task))
} finally {
self_.emittingAsync_ = false
}
}

export async function JsEmitter_makeRun$(self_, moduleName_, functions_, mainPackagePair_, bootstrapping_, $task) {
const buildMainFunction_ = ff_core_Option.Option_filter(ff_core_List.List_find(functions_, ((_w1) => {
return (_w1.signature_.name_ === "buildMain")
})), ((_) => {
return (ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
}));
const willRunOnNode_ = ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget);
const targetMain_ = (willRunOnNode_
? "nodeMain"
: "browserMain");
const mainFunction_ = ff_core_Option.Option_orElse(ff_core_List.List_find(functions_, ((_w1) => {
return (_w1.signature_.name_ === targetMain_)
})), (() => {
return ff_core_List.List_find(functions_, ((_w1) => {
return (_w1.signature_.name_ === "main")
}))
}));
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_map(mainFunction_, ((_w1) => {
return _w1.signature_.name_
})), ((mainName_) => {
return [ff_core_List.List_join([...ff_core_Option.Option_toList(ff_core_Option.Option_map(buildMainFunction_, ((buildMain_) => {
return (((("import {" + ff_compiler_JsEmitter.escapeKeyword_(buildMain_.signature_.name_)) + "$} from './") + moduleName_) + ".mjs'")
}))), (((("import {" + ff_compiler_JsEmitter.escapeKeyword_(mainName_)) + "$} from './") + moduleName_) + ".mjs'"), "export async function $run$(fireflyPath_, arguments_) {", "Error.stackTraceLimit = 50", "const $task = {controller_: new AbortController(), subtasks_: new Set(), promise_: new Promise(() => {}), started_: performance.now() * 0.001}", ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ["let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)"]
: []), "let system = {", "task_: $task,", "array_: arguments_,", "fireflyPath_: fireflyPath_,", (((("mainPackagePair_: {group_: \"" + mainPackagePair_.group_) + "\", name_: \"") + mainPackagePair_.name_) + "\"},"), (("executableMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable())
? "true"
: "false")) + ","), ("buildMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false")), "}", "try {", ...((!ff_core_Option.Option_isEmpty(buildMainFunction_))
? ["await buildMain_$(system, $task)"]
: []), ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? [(("await " + mainName_) + "_$(system, $task)")]
: []), ...(ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? ["await $firefly_compiler.internalCreateExecutable_$(system, '.firefly/output/executable/Main.bundle.js', '.firefly/output', ['host'], system.assets_, $task)"]
: []), "} finally {", ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ["$task.controller_.abort()", "clearInterval(interval)"]
: []), "}", "}", ...(((_1) => {
if(_1.EmitBrowser) {
return ["queueMicrotask(async () => {", "await $run$(null, [])", "})"]
}
if(_1.EmitNode && bootstrapping_) {
return ["import * as path from 'node:path'", "queueMicrotask(async () => {", "let fireflyPath_ = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(process.argv[1])))))", "await $run$(fireflyPath_, process.argv.slice(2))", "})"]
}
if(_1.EmitExecutable) {
return ["queueMicrotask(async () => {", "await $run$(null, process.argv.slice(2))", "})"]
}
{
return []
}
}))(self_.emitTarget_)], "\n")]
})), (() => {
return []
}))
}

export async function JsEmitter_emitLetDefinition$(self_, definition_, mutable_, async_, $task) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, (mutable_
? "let "
: "const "));
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, ff_compiler_JsEmitter.escapeKeyword_(definition_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ";")
}

export async function JsEmitter_emitExtendsDefinition$(self_, definition_, $task) {
const typeName_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_compiler_JsEmitter.extractTypeName_(definition_.type_)), ((_w1) => {
return (_w1 !== 46)
})));
const methods_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
{
const _1 = method_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, ((typeName_ + "_") + method_.signature_.name_), _c.member_, _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_, _c.effect_)
}))(method_.signature_), _c.body_)
return
}
}
}));
const liner_ = ff_compiler_JsEmitter.Liner(self_, true, true);
for(let for_a = methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "", false)
};
ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
for(let for_a = methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export ");
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "", false)
}
}))
}

export async function JsEmitter_emitInstanceDefinition$(self_, definition_, $task) {
const name_ = ff_compiler_JsEmitter.makeDictionaryName_(definition_.traitName_, ff_compiler_JsEmitter.firstTypeName_(definition_.typeArguments_));
do {
const _1 = definition_.constraints_;
if(_1.length === 0) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, definition_.at_, name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " = ")
break
}
{
const constraints_ = _1;
const dictionaries_ = ff_core_List.List_map(constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export function ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, definition_.at_, name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, (("(" + ff_core_List.List_join(dictionaries_, ", ")) + ") { return "))
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
for(let for_a = definition_.methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "", true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ",");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
};
ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(definition_.methods_, ((_w1) => {
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "", true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ",");
return ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}))
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}");
do {
const _1 = definition_.constraints_;
if(_1.length === 0) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ";")
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
}
} while(false)
}

export async function JsEmitter_emitFunctionDefinition$(self_, definition_, async_, suffix_ = "", asMethod_ = false, $task) {
ff_compiler_JsEmitter.JsEmitter_emitSignature(self_, definition_.signature_, async_, suffix_, asMethod_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
do {
const _1 = definition_.body_;
if(_1.cases_.length === 1) {
const effect_ = _1.effect_;
const matchCase_ = _1.cases_[0];
if(ff_core_List.List_all(matchCase_.patterns_, ((_1) => {
if(_1.PVariable && _1.name_.None) {
return true
}
{
return false
}
}))) {
ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true, false, async_)
}))
break
}
}
{
const effect_ = _1.effect_;
const cases_ = _1.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = definition_.signature_.parameters_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const p_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, p_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, p_.name_, p_.at_, (p_.name_ + "_a"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, p_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, p_.name_, p_.at_, ff_compiler_JsEmitter.escapeKeyword_(p_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, p_.at_, ";")
};
const argumentTerms_ = ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
return (() => {
return ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, p_.name_, p_.at_, (p_.name_ + "_a"))
})
}));
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, argumentTerms_, c_, [], [], true, true, false, lastCase_, async_)
}
}))
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
}

export async function JsEmitter_emitTailCall$(self_, body_, $task) {
const outerTailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = false;
const anchor_ = ff_compiler_JsEmitter.JsEmitter_writeAnchor(self_);
(await body_($task));
const tailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = outerTailCallUsed_;
if(tailCallUsed_) {
ff_compiler_JsEmitter.JsEmitter_writeAnchorLines(self_, anchor_, ["_tailcall: for(;;) {"]);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "return");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_, "}")
}
}

export async function JsEmitter_emitSignature$(self_, signature_, async_, suffix_ = "", asMethod_ = false, $task) {
const prefix_ = (async_
? "async "
: "");
const asyncSuffix_ = (async_
? "$"
: "");
const fullPrefix_ = (prefix_ + (asMethod_
? ""
: "function "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, fullPrefix_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, signature_.name_, signature_.at_, ((ff_compiler_JsEmitter.escapeKeyword_(signature_.name_) + suffix_) + asyncSuffix_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = signature_.parameters_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitParameter(self_, _w1, async_)
};
for(let for_a = signature_.constraints_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, c_.at_, ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_)))
};
if(async_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, signature_.at_, ")")
}

export async function JsEmitter_emitParameter$(self_, parameter_, async_, $task) {
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, parameter_.name_, parameter_.at_, ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_));
{
const if_o = parameter_.default_
if(if_o.Some) {
const e_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)
}
}
}

export async function JsEmitter_emitTypeDefinition$(self_, definition_, $task) {
if(definition_.newtype_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ("// newtype " + definition_.name_))
} else {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ("// type " + definition_.name_));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = definition_.variants_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition(self_, definition_, _w1)
}
}
}

export async function JsEmitter_emitVariantDefinition$(self_, typeDefinition_, definition_, $task) {
const allFields_ = [...typeDefinition_.commonFields_, ...definition_.fields_];
function emitFields_() {
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = allFields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, f_.name_, f_.at_, ff_compiler_JsEmitter.escapeKeyword_(f_.name_))
}
}
function emitConstructor_() {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "export function ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, definition_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "(");
emitFields_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
if(ff_core_List.List_isEmpty(allFields_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, (definition_.name_ + "$"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, " = {");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, definition_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ": true};");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
emitConstructor_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "return ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, (definition_.name_ + "$"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
} else if((typeDefinition_.variants_.length === 1)) {
emitConstructor_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "return {");
emitFields_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "};");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
} else {
emitConstructor_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "return {");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, definition_.name_, definition_.at_, definition_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, ": true, ");
emitFields_();
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "};");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, definition_.at_, "}")
}
}

export async function JsEmitter_emitTerm$(self_, term_, async_, ignored_ = false, $task) {
{
const _1 = term_;
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
if(ff_core_String.String_startsWith(value_, "\"\"\"", 0)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (("\"" + ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(value_, 3), 3), "\r", "\\r"), "\n", "\\n"), "\"", "\\\"")) + "\""))
return
}
}
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, value_)
return
}
if(_1.EChar) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_compiler_JsEmitter.charLiteralToNumber_(value_))
return
}
if(_1.EInt) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, value_)
return
}
if(_1.EFloat) {
const at_ = _1.at_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, value_)
return
}
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeResolved_(name_))
return
}
if(_1.EList) {
const at_ = _1.at_;
const items_ = _1.items_;
ff_compiler_JsEmitter.JsEmitter_emitList(self_, at_, items_, async_)
return
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "false")
return
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "true")
return
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(void 0)")
return
}
if(_1.EVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const arguments_ = _1.arguments_;
const newtype_ = ff_compiler_JsEmitter.JsEmitter_processVariant(self_, name_);
if(newtype_) {
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, ff_core_List.List_grabFirst(ff_core_Option.Option_grab(arguments_)), async_)
} else {
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeResolved_(name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_)), for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }")
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }")
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "function(_v) { return ff_core_Option.Some(_v); }")
return
}
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const n_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(function(_v) { return _v.");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, at_, ff_compiler_JsEmitter.escapeResolved_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " ? ff_core_Option.Some(_v) : ff_core_Option.None();})")
return
}
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const fields_ = _1.arguments_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "{...");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false);
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, f_.name_, at_, ff_compiler_JsEmitter.escapeKeyword_(f_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "}")
return
}
if(_1.EField) {
const at_ = _1.at_;
const newtype_ = _1.newtype_;
const record_ = _1.record_;
const field_ = _1.field_;
if(newtype_) {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false)
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, field_, at_, ff_compiler_JsEmitter.escapeKeyword_(field_))
}
return
}
if(_1.ELambda && _1.lambda_.cases_.length === 1 && _1.lambda_.cases_[0].guards_.length === 0) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const patterns_ = _1.lambda_.cases_[0].patterns_;
const body_ = _1.lambda_.cases_[0].body_;
if(ff_core_List.List_all(patterns_, ((_1) => {
if(_1.PVariable) {
return true
}
{
return false
}
}))) {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
if(newAsync_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "async ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
ff_core_List.List_each(patterns_, ((_1) => {
if(_1.PVariable && _1.name_.Some) {
const patternAt_ = _1.at_;
const name_ = _1.name_.value_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, patternAt_, ff_compiler_JsEmitter.escapeKeyword_(name_))
return
}
if(_1.PVariable && _1.name_.None) {
const patternAt_ = _1.at_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, patternAt_, "_")
return
}
{
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(at_, "Internal compiler error"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}));
if(newAsync_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") => {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, newAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})")
return
}
}
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const cases_ = _1.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs((cases_[0] ?? ff_core_List.List_grab(cases_, 0)).patterns_), ((_1) => {
{
const i_ = _1.first_;
const p_ = _1.second_;
return ff_core_Pair.Pair(p_.at_, ("_" + (i_ + 1)))
}
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
if(newAsync_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "async ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const a_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.first_, a_.second_)
};
const argumentTerms_ = ff_core_List.List_map(arguments_, ((_1) => {
{
const at_ = _1.first_;
const n_ = _1.second_;
return (() => {
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, n_)
})
return
}
}));
if(newAsync_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") => {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, argumentTerms_, c_, [], [], true, true, false, lastCase_, newAsync_)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})")
return
}
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", $task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_, ignored_)) {

return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
if(ff_compiler_JsEmitter.JsEmitter_emitSpecialCall(self_, term_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_)) {

return
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.instanceCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const dictionaryStrings_ = ff_core_List.List_map(dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, _w1)
}));
const ds_ = ff_core_List.List_dropFirst(dictionaryStrings_, 1);
const d_ = ff_core_List.List_grabFirst(dictionaryStrings_);
const asyncSuffix_ = (await_
? "$"
: "");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, d_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, (ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))) + asyncSuffix_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
for(let for_a = ds_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, _w1)
};
if(await_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const dictionaryStrings_ = ff_core_List.List_map(dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, _w1)
}));
const asyncSuffix_ = (await_
? "$"
: "");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, (ff_compiler_JsEmitter.escapeResolved_(name_) + asyncSuffix_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
for(let for_a = dictionaryStrings_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, _w1)
};
if(await_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "? ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ": ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, elseBody_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
{
const list_ = _1;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "? ff_core_Option.Some(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ": ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "ff_core_Option.None())")
return
}
}
return
}
if(_1.ECall && _1.target_.DynamicCall) {
const at_ = _1.at_;
const function_ = _1.target_.function_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if((!ff_core_List.List_isEmpty(dictionaries_))) {
ff_compiler_JsEmitter.fail_(at_, "Internal error: Dictionaries in lambda call")
};
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ")
};
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
};
if(await_) {
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
if(await_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
}
return
}
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
if(ff_core_List.List_isEmpty(fields_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}")
} else {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, f_.name_, f_.at_, ff_compiler_JsEmitter.escapeKeyword_(f_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, f_.at_, ": ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}")
}
return
}
if(_1.EWildcard) {
const at_ = _1.at_;
const index_ = _1.index_;
if((index_ === 0)) {
ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ("_w" + index_))
return
}
if(_1.ESequential && _1.before_.ESequential && _1.before_.before_.ESequential) {
const before1_ = _1.before_.before_.before_;
const before2_ = _1.before_.before_.after_;
const before3_ = _1.before_.after_;
const after_ = _1.after_;
if((((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(before3_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before3_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
}
if(_1.ESequential && _1.before_.ESequential) {
const before1_ = _1.before_.before_;
const before2_ = _1.before_.after_;
const after_ = _1.after_;
if(((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
}
if(_1.ESequential) {
const before_ = _1.before_;
const after_ = _1.after_;
if((ff_compiler_JsEmitter.safeCommable_(before_) && ff_compiler_JsEmitter.safeCommable_(after_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before_, async_, true);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
return
}
}
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await (async function() {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})())")
return
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(function() {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})()")
return
}
}
}

export async function JsEmitter_emitField$(self_, term_, async_, dot_ = ".", $task) {
{
const _1 = term_;
if(_1.EString) {
const at_ = _1.at_;
const q_ = _1.value_;
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, dot_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_)
return
}
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
return
}
}
}

export async function JsEmitter_makeDictionary$(self_, d_, $task) {
const m_ = ((d_.moduleKey_.name_ !== "")
? ((((ff_compiler_Syntax.PackagePair_groupName(d_.moduleKey_.packagePair_, "_") + "_") + ff_core_List.List_join(ff_core_List.List_map(d_.moduleKey_.folders_, ((_w1) => {
return (_w1 + "_")
})), "")) + d_.moduleKey_.name_) + ".")
: "");
const c_ = (m_ + ff_compiler_JsEmitter.makeDictionaryName_(d_.traitName_, d_.typeName_));
if(ff_core_List.List_isEmpty(d_.dictionaries_)) {
return c_
} else {
return (((c_ + "(") + ff_core_List.List_join(ff_core_List.List_map(d_.dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, _w1)
})), ", ")) + ")")
}
}

export async function JsEmitter_emitStatements$(self_, term_, last_, break_, async_, $task) {
{
const _1 = term_;
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = functions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, f_, newAsync_, "", false)
};
ff_compiler_JsEmitter.Liner_writeLines(liner_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)
return
}
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)
return
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;

return
}
if(_1.ESequential && _1.before_.EVariant && _1.before_.name_ === "ff:core/Unit.Unit") {
const after_ = _1.after_;
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_)
return
}
if(_1.ESequential && _1.after_.EVariant && _1.after_.name_ === "ff:core/Unit.Unit") {
const before_ = _1.before_;
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, break_, async_)
return
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_)
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.tailCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const instanceCall_ = _1.target_.instanceCall_;
const effect_ = _1.effect_;
const arguments_ = _1.arguments_;
if(instanceCall_) {
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(at_, "Not yet implemented: Tail calls on trait methods."), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
self_.tailCallUsed_ = true;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const a_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_grab(a_.name_), a_.at_, ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, a_.at_, ";")
};
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const a_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_grab(a_.name_), a_.at_, ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_grab(a_.name_)));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_grab(a_.name_), a_.at_, ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")))
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "continue _tailcall");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}")
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
if(ff_compiler_JsEmitter.JsEmitter_emitSpecialStatement(self_, term_, last_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_)) {

return
}
}
if(_1.EPipe && _1.function_.ELambda) {
const at_ = _1.at_;
const value_ = _1.value_;
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
if(((!last_) && (!break_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "do ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const _1 = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ";");
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [(() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, c_.at_, "_1")
})], c_, [], [], true, last_, break_, lastCase_, async_)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
if(((!last_) && (!break_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " while(false)")
}
return
}
if(ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_, true)) {

return
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
if(break_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") break")
} else if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, true)
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "} else ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, elseBody_, last_, break_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}")
return
}
{
const list_ = _1;
if((!last_)) {
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "} else ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}")
return
}
}
{
const list_ = _1;
ff_core_List.List_each(ff_core_List.List_reverse(list_), ((_1) => {
{
const condition_ = _1.first_;
const body_ = _1.second_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "return ff_core_Option.Some(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "} else ")
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return ff_core_Option.None()")
return
}
}
return
}
}
}

export async function JsEmitter_emitAssignment$(self_, term_, async_, ignored_, $task) {
const anchor_ = ff_compiler_JsEmitter.JsEmitter_writeAnchor(self_);
const emitted_ = (((_1) => {
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
{
const _1 = name_;
if(_1 === "ff:core/JsValue.JsValue_set") {
const _guard1 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard1.length === 3) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const e3_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_increment") {
const _guard1 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard1.length === 3) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const e3_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " += ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_decrement") {
const _guard1 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard1.length === 3) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const e3_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " -= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
if(_1 === "ff:core/JsSystem.JsSystem_set") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const at_ = _guard3[1].at_;
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_increment") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const at_ = _guard3[1].at_;
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " += ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_decrement") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const at_ = _guard3[1].at_;
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " -= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false);
return true
}
}
}
}
if(_1 === "ff:core/Js.set") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const at_ = _guard2[0].at_;
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
if(_1 === "ff:core/Js.increment") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const at_ = _guard2[0].at_;
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " += ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
if(_1 === "ff:core/Js.decrement") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const at_ = _guard2[0].at_;
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, s_, at_, s_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " -= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
{
return false
}
}
return
}
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const name_ = _1.variable_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeKeyword_(name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ((" " + operator_) + "= "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
return true
}
if(_1.EAssignField) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, field_, at_, ff_compiler_JsEmitter.escapeKeyword_(field_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ((" " + operator_) + "= "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
return true
}
{
return false
}
}))(term_);
if(((!ignored_) && emitted_)) {
ff_compiler_JsEmitter.JsEmitter_writeAnchorLines(self_, anchor_, ["("]);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", void 0)")
};
return emitted_
}

export async function JsEmitter_emitSpecialCall$(self_, term_, async_, name_, arguments_, dictionaries_, $task) {
{
const _1 = name_;
{
const operator_ = _1;
const _guard2 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const value_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, operator_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
{
const operator_ = _1;
const _guard2 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const left_ = _guard1[0];
const right_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, operator_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
if(_1 === "ff:core/List.List_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "] ?? ff_core_List.List_grab(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "))");
return true
}
}
}
if(_1 === "ff:core/Array.Array_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".array[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "] ?? ff_core_Array.Array_grab(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "))");
return true
}
}
}
if(_1 === "ff:core/List.List_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".length");
return true
}
}
if(_1 === "ff:core/Array.Array_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".array.length");
return true
}
}
if(_1 === "ff:core/String.String_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ".length");
return true
}
}
if(_1 === "ff:core/Equal.equals") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " === ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Equal.notEquals") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " !== ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.before") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " < ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.notBefore") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " >= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.after") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " > ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Ordering.notAfter") {
const _guard3 = arguments_;
if(_guard3.length === 2) {
const left_ = _guard3[0];
const right_ = _guard3[1];
const _guard2 = dictionaries_;
if(_guard2.length === 1 && _guard2[0].dictionaries_.length === 0) {
const typeName_ = _guard2[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " <= ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/List.fillBy") {
const _guard3 = term_;
if(_guard3.ECall) {
const call_ = _guard3;
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[1].ELambda && _guard2[1].lambda_.cases_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_[0].PVariable && _guard2[1].lambda_.cases_[0].guards_.length === 0) {
const size_ = _guard2[0];
const at_ = _guard2[1].at_;
const l_ = _guard2[1].lambda_;
const c_ = _guard2[1].lambda_.cases_[0];
const variableAt_ = _guard2[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
const n_ = ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return ff_compiler_JsEmitter.escapeResolved_(_w1)
})), (() => {
return "i"
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_));
if(newAsync_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "await ")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "((() => {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const size = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, size_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const result = [];");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_else(name_, (() => {
return "_"
})), variableAt_, n_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = 0; ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_else(name_, (() => {
return "_"
})), variableAt_, n_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " < size; ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, ff_core_Option.Option_else(name_, (() => {
return "_"
})), variableAt_, n_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "result.push(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, newAsync_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ");");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return result;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "})())");
return true
}
}
}
}
if(_1 === "ff:core/Js.import") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const url_ = _guard1[0].value_;
do {
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(() => {throw new Error('Node.js imports are not supported in the browser')})()")
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
}
} while(false);
return true
}
}
if(_1 === "ff:core/Js.browserImport") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const url_ = _guard1[0].value_;
do {
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "(() => {throw new Error('Browser imports are not supported in Node.js')})()")
}
} while(false);
return true
}
}
if(_1 === "ff:core/Js.dynamicImport") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const url_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "import(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, url_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.await") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const body_ = _guard1[0];
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(await ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)
};
return true
}
}
{
const name_ = _1;
const _guard4 = ff_core_String.String_removeFirst(name_, "ff:core/Js.async");
if(_guard4.Some) {
const n_ = _guard4.value_;
const _guard3 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 1 && _guard2[0].ELambda && _guard2[0].lambda_.cases_.length === 1 && _guard2[0].lambda_.cases_[0].guards_.length === 0) {
const at_ = _guard2[0].at_;
const effect_ = _guard2[0].lambda_.effect_;
const patterns_ = _guard2[0].lambda_.cases_[0].patterns_;
const body_ = _guard2[0].lambda_.cases_[0].body_;
if(ff_core_List.List_all(patterns_, ((_1) => {
if(_1.PVariable) {
return true
}
{
return false
}
}))) {
const patternParameters_ = ff_core_List.List_map(patterns_, ((_1) => {
if(_1.PVariable) {
const p_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.name_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), (() => {
return "_"
}))
return
}
{
return ff_core_Core.panic_("!")
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (("async (" + ff_core_List.List_join(patternParameters_, ", ")) + ") => {"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
}
}
{
const name_ = _1;
if(ff_core_String.String_startsWith(name_, "ff:core/Js.async", 0)) {
throw ff_core_Js.initializeError_(new Error(), ff_compiler_Syntax.CompileError(term_.at_, "JS async functions must take a simple parameter list"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
if(_1 === "ff:core/Js.cancelled") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (async_
? "$task.controller_.signal.aborted"
: "false"));
return true
}
if(_1 === "ff:core/Js.throwIfCancelled") {
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "((() => ff_core_Task.Task_throwIfAborted($task))())")
};
return true
}
if(_1 === "ff:core/Js.currentTask") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task");
return true
}
if(_1 === "ff:core/Js.controller") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "$task.controller_");
return true
}
if(_1 === "ff:core/Js.setController") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const a_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "($task.controller_ = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.inAsync") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (self_.emittingAsync_
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.inBrowser") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser())
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.inNode") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitNode())
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.inBuild") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false"));
return true
}
if(_1 === "ff:core/Js.value") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Js.fromValue") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Js.rawIdentifier") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
return true
}
}
if(_1 === "ff:core/Js.unaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.binaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Js.shortCircuitingOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const at_ = _guard1[0].at_;
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ff_core_String.String_replace(op_, "\"", ""));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(a2_), async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_spreadToArray") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e1_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "[...");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_typeof") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(typeof ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_instanceof") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " instanceof ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_get") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_equals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " === ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/JsValue.JsValue_notEquals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " !== ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Int.Int_bitAnd") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " & ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Int.Int_bitRightUnsigned") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " >>> ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
if(_1 === "ff:core/Int.Int_bitRight") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " >> ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/JsValue.JsValue_call");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
const es_ = _guard1.slice(2);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/JsValue.JsValue_callValue");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 1) {
const e1_ = _guard1[0];
const es_ = _guard1.slice(1);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/JsValue.JsValue_new");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 1) {
const e1_ = _guard1[0];
const es_ = _guard1.slice(1);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(new ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "))");
return true
}
}
}
}
{
const name_ = _1;
if(((name_ === "ff:core/JsValue.JsValue_with") || (name_ === "ff:core/Json.Json_with"))) {
function go_(e_, fields_) {
{
const _1 = e_;
if(_1.ECall && _1.target_.StaticCall && _1.arguments_.length === 3) {
const n_ = _1.target_.name_;
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
const a3_ = _1.arguments_[2];
if((n_ === name_)) {
go_(a1_.value_, [ff_core_Pair.Pair(a2_.value_, a3_.value_), ...fields_])
return
}
}
if(_1.ECall && _1.target_.StaticCall) {
const n_ = _1.target_.name_;
const as_ = _1.arguments_;
const _guard2 = ((((((n_ === "ff:core/JsSystem.JsSystem_object") || (n_ === "ff:core/JsSystem.JsSystem_new0")) || (n_ === "ff:core/Js.object")) || (n_ === "ff:core/Js.new0")) || (n_ === "ff:core/Json.Json_object")) || (n_ === "ff:core/Json.Json_new0"));
if(_guard2 && ff_core_List.List_all(as_, ((_w1) => {
return ff_compiler_JsEmitter.noSideEffects_(_w1.value_)
}))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "{");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const p_ = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, ": ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "}")
return
}
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "{...");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
for(let for_a = fields_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const p_ = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, ": ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, e_.at_, "}")
return
}
}
}
go_(term_, []);
return true
}
}
{
const name_ = _1;
const _guard4 = ff_core_String.String_removeFirst(name_, "ff:core/JsSystem.JsSystem_call");
if(_guard4.Some) {
const n_ = _guard4.value_;
const _guard3 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length >= 2 && _guard2[1].EString) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
const at_ = _guard2[1].at_;
const q_ = _guard2[1].value_;
const es_ = _guard2.slice(2);
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
}
{
const name_ = _1;
const _guard6 = ff_core_String.String_removeFirst(name_, "ff:core/JsSystem.JsSystem_function");
if(_guard6.Some) {
const n_ = _guard6.value_;
const _guard5 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard5) {
const _guard4 = arguments_;
if(_guard4.length === 2) {
const e1_ = _guard4[0];
const e2_ = _guard4[1];
const _guard3 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard3) {
const _guard2 = term_;
if(_guard2.ECall) {
const call_ = _guard2;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return true
}
}
}
}
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_get") {
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[1].EString) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
const at_ = _guard2[1].at_;
const q_ = _guard2[1].value_;
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_object") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_new0") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_null") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "null");
return true
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_undefined") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(void 0)");
return true
}
}
}
{
const name_ = _1;
const _guard3 = ff_core_String.String_removeFirst(name_, "ff:core/Js.call");
if(_guard3.Some) {
const n_ = _guard3.value_;
const _guard2 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length >= 1 && _guard1[0].EString) {
const e1_ = _guard1[0];
const at_ = _guard1[0].at_;
const q_ = _guard1[0].value_;
const es_ = _guard1.slice(1);
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
for(let for_a = es_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
{
const name_ = _1;
const _guard4 = ff_core_String.String_removeFirst(name_, "ff:core/Js.function");
if(_guard4.Some) {
const n_ = _guard4.value_;
const _guard3 = ff_core_String.String_all(n_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
}));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e1_ = _guard2[0];
const _guard1 = term_;
if(_guard1.ECall) {
const call_ = _guard1;
if((self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(ff_core_Int.Int_to(1, ff_core_String.String_grabInt(n_)), ((_w1) => {
return ("a_" + _w1)
})), ", ");
const taskCode_ = ((argumentCode_ === "")
? "$task"
: ", $task");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (("(async (" + argumentCode_) + ") => await "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ((("(" + argumentCode_) + taskCode_) + "))"))
} else {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)
};
return true
}
}
}
}
}
if(_1 === "ff:core/Js.get") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const e1_ = _guard1[0];
const at_ = _guard1[0].at_;
const q_ = _guard1[0].value_;
do {
const _1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_1.Some) {
const bare_ = _1.value_;
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, q_, at_, bare_)
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis[");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "]")
}
} while(false);
return true
}
}
if(_1 === "ff:core/Js.object") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
if(_1 === "ff:core/Js.new0") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
if(_1 === "ff:core/Js.null") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "null");
return true
}
if(_1 === "ff:core/Js.undefined") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(void 0)");
return true
}
if(_1 === "ff:core/Js.globalThis") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
if(_1 === "ff:core/BrowserSystem.BrowserSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
}
}
if(_1 === "ff:core/BuildSystem.BuildSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
}
}
if(_1 === "ff:core/NodeSystem.NodeSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
}
}
if(_1 === "ff:core/Js.jsSystem") {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "globalThis");
return true
}
if(_1 === "ff:core/Json.string") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.int") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.float") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.bool") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.array") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false);
return true
}
}
if(_1 === "ff:core/Json.null") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "null");
return true
}
}
if(_1 === "ff:core/Json.object") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{}");
return true
}
}
{
return false
}
}
}

export async function JsEmitter_emitSpecialStatement$(self_, term_, last_, async_, name_, arguments_, dictionaries_, $task) {
{
const _1 = name_;
if(_1 === "ff:core/Core.while") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const condition_ = _guard1[0];
const body_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "while");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_), async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
if(_1 === "ff:core/Core.doWhile") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const doWhileBody_ = _guard2[0];
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
{
const body_ = _guard1;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "while");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(true) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, false, true, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
if(_1 === "ff:core/Option.Option_each") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0];
const nameAt_ = _guard1[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "{");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const if_o = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(if_o.Some) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = if_o.value_;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, false, async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
{
const n_ = _1;
const _guard3 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[0].ECall && _guard2[0].target_.StaticCall && _guard2[0].arguments_.length === 2 && _guard2[1].ELambda && _guard2[1].lambda_.cases_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_[0].PVariable && _guard2[1].lambda_.cases_[0].guards_.length === 0) {
const r_ = _guard2[0].target_.name_;
const start_ = _guard2[0].arguments_[0];
const end_ = _guard2[0].arguments_[1];
const nameAt_ = _guard2[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(let for_i = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", for_e = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
const op_ = ((r_ === "ff:core/Int.Int_until")
? "<"
: "<=");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, (("; for_i " + op_) + " for_e; for_i++) {"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = for_i;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
}
{
const n_ = _1;
const _guard3 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard3) {
const _guard2 = arguments_;
if(_guard2.length === 2 && _guard2[0].ECall && _guard2[0].target_.StaticCall && _guard2[0].target_.name_ === "ff:core/List.List_reverse" && _guard2[0].arguments_.length === 1 && _guard2[0].arguments_[0].value_.ECall && _guard2[0].arguments_[0].value_.target_.StaticCall && _guard2[0].arguments_[0].value_.arguments_.length === 2 && _guard2[1].ELambda && _guard2[1].lambda_.cases_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_.length === 1 && _guard2[1].lambda_.cases_[0].patterns_[0].PVariable && _guard2[1].lambda_.cases_[0].guards_.length === 0) {
const r_ = _guard2[0].arguments_[0].value_.target_.name_;
const start_ = _guard2[0].arguments_[0].value_.arguments_[0];
const end_ = _guard2[0].arguments_[0].value_.arguments_[1];
const nameAt_ = _guard2[1].lambda_.cases_[0].patterns_[0].at_;
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "(let for_e = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", for_i = ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
if((r_ === "ff:core/Int.Int_until")) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " - 1")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i >= for_e; for_i--) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " = for_i;");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
}
{
const n_ = _1;
const _guard2 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].ECall && _guard1[0].target_.StaticCall && _guard1[0].target_.name_ === "ff:core/List.List_zip" && _guard1[0].arguments_.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariant && _guard1[1].lambda_.cases_[0].patterns_[0].name_ === "ff:core/Pair.Pair" && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_.length === 2 && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list1_ = _guard1[0].arguments_[0];
const list2_ = _guard1[0].arguments_[1];
const at1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].at_;
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const at2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].at_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "", list1_.value_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "2", list2_.value_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name1_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at1_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
{
const if_o = name2_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at2_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a2[for_i2];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
{
const n_ = _1;
const _guard2 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].ECall && _guard1[0].target_.StaticCall && _guard1[0].target_.name_ === "ff:core/List.List_pairs" && _guard1[0].arguments_.length === 1 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariant && _guard1[1].lambda_.cases_[0].patterns_[0].name_ === "ff:core/Pair.Pair" && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_.length === 2 && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list1_ = _guard1[0].arguments_[0];
const at1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].at_;
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const at2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].at_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "", list1_.value_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i < for_l; for_i++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name1_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at1_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
{
const if_o = name2_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at2_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
{
const n_ = _1;
const _guard2 = ((((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile")) || (n_ === "ff:core/Array.Array_each")) || (n_ === "ff:core/Array.Array_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list1_ = _guard1[0];
const at1_ = _guard1[1].lambda_.cases_[0].patterns_[0].at_;
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "for(let ");
ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "", list1_, ff_core_String.String_startsWith(n_, "ff:core/Array.", 0), async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "; for_i < for_l; for_i++) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
{
const if_o = name1_
if(if_o.Some) {
const _w1 = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at1_, (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];"));
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
}
};
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
}
}
if(_1 === "ff:core/Array.Array_push") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const array_ = _guard1[0];
const value_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, array_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, array_.at_, ".array.push(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, array_.at_, ")");
return true
}
}
if(_1 === "ff:core/Core.if") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const condition_ = _guard1[0];
const body_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, "if(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, condition_.at_, ") {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "return ff_core_Option.Some(");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")")
} else {
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_)
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " else return ff_core_Option.None()")
};
return true
}
}
if(_1 === "ff:core/Core.throw") {
const _guard3 = term_;
if(_guard3.ECall) {
const c_ = _guard3;
const _guard2 = c_.arguments_;
if(_guard2.length === 1) {
const argument_ = _guard2[0];
const _guard1 = dictionaries_;
if(_guard1.length === 2) {
const hasAnyTag_ = _guard1[0];
const show_ = _guard1[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "throw ff_core_Js.initializeError_(new Error(), ");
ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, term_.at_, argument_, async_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, hasAnyTag_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ", ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, show_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
return true
}
}
}
}
if(_1 === "ff:core/Try.Try_catch" && ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_)) {
return true
}
if(_1 === "ff:core/Try.Try_catchAny" && ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_)) {
return true
}
if(_1 === "ff:core/Try.Try_finally" && ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_)) {
return true
}
if(_1 === "ff:core/Js.throwIfCancelled") {
if(async_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "ff_core_Task.Task_throwIfAborted($task)")
};
return true
}
if(_1 === "ff:core/Js.throw") {
const _guard2 = term_;
if(_guard2.ECall) {
const c_ = _guard2;
const _guard1 = c_.arguments_;
if(_guard1.length === 1) {
const argument_ = _guard1[0];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "throw ");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_, async_, false);
return true
}
}
}
{
return false
}
}
}

export async function JsEmitter_emitLightFusion$(self_, suffix_, list_, isArray_, async_, $task) {
function wrapUnlessInt_(term_, before_, after_) {
const term_a = term_;
const before_a = before_;
const after_a = after_;
if(term_a.EInt) {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)
return
}
{
if((before_ !== "")) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, before_)
};
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false);
if((after_ !== "")) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, after_)
}
return
}
}
do {
const _1 = list_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = "));
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length"))
break
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = 0"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length - "));
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)")
break
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = 0"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, "Math.min(");
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_a" + suffix_) + ".length)"))
break
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("Math.max(for_a" + suffix_) + ".length - "));
wrapUnlessInt_(a2_.value_, "Math.max(", ", 0)");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", 0), for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length"))
break
}
{
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false);
if(isArray_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ".array")
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_i" + suffix_) + " = 0"));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, ((", for_l" + suffix_) + " = "));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, list_.at_, (("for_a" + suffix_) + ".length"))
}
} while(false)
}

export async function JsEmitter_emitTryCatchFinally$(self_, term_, last_, async_, $task) {
function emitCatch_(catchEffect_, cases_) {
const catchAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(catchEffect_));
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = [(() => {
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "_exception.value_")
}), (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "_error")
})];
do {
const _1 = cases_;
if(_1.length === 1) {
const case_ = _1[0];
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, case_, [], [], false, last_, false, true, catchAsync_)
break
}
{
const cs_ = _1;
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "do {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
};
const liner_ = ff_compiler_JsEmitter.Liner(self_, false, true);
for(let for_a = cases_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
ff_compiler_JsEmitter.Liner_writeLines(liner_);
const lastCase_ = (i_ === (cases_.length - 1));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, c_, [], [], true, last_, false, lastCase_, catchAsync_)
};
if(last_) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} while(false)")
} else {

}
}
} while(false)
}
{
const _1 = term_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_finally" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const finallyEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const finallyBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} finally {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catchAny" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].PVariable && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const nameAt_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].at_;
const name_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].name_;
const catchBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} catch");
{
const if_o = name_
if(if_o.Some) {
const n_ = if_o.value_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, nameAt_, "(");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, n_, nameAt_, ff_compiler_JsEmitter.escapeKeyword_(n_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, nameAt_, ")")
}
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, " {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, catchBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.dictionaries_.length === 1) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.dictionaries_[0];
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, dictionary_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} catch(_error) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_error.ffException) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const _exception = ff_core_Any.fromAny_(_error.ffException, ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, d_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_exception.Some) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
emitCatch_(catchEffect_, cases_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_finally" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_[0].value_.arguments_.length === 2 && _1.arguments_[0].value_.arguments_[0].value_.ECall && _1.arguments_[0].value_.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[0].value_.arguments_[1].value_.ELambda && _1.arguments_[0].value_.dictionaries_.length === 1 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[0].value_.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[0].value_.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.arguments_[0].value_.dictionaries_[0];
const finallyEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const finallyBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_makeDictionary(self_, dictionary_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "try {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} catch(_error) {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_error.ffException) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "const _exception = ff_core_Any.fromAny_(_error.ffException, ");
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, d_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, ")");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "if(!_exception.Some) throw _error");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
emitCatch_(catchEffect_, cases_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "} finally {");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_);
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, term_.at_, "}");
return true
}
{
return false
}
}
}

export async function JsEmitter_emitCase$(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_, $task) {
async function emitWrapperStart_$($task) {
if(ff_core_List.List_isEmpty(conditions_)) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "{")
} else {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "if(");
for(let for_a = conditions_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const c_ = for_a[for_i];
(await c_($task));
if((i_ < (conditions_.length - 1))) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, " && ")
}
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, ") {")
};
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
for(let for_a = variables_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
(await _w1($task))
}
}
function emitWrapperEnd_() {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "}")
}
do {
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
if(_1.first_.length >= 1) {
const p_ = _1.first_[0];
const ps_ = _1.first_.slice(1);
(await ff_compiler_JsEmitter.JsEmitter_emitPattern$(self_, (arguments_[0] ?? ff_core_List.List_grab(arguments_, 0)), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), conditions_, variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
if(ff_core_List.List_isEmpty(variables_)) {
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, [], newCase_, [...conditions_, (async ($task) => {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)
})], [], jump_, last_, break_, lastCase_, async_, $task))
break
}
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
(await emitWrapperStart_$($task));
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [(() => {
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)
})], [], jump_, last_, break_, lastCase_, async_);
emitWrapperEnd_()
break
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const guard_ = _1.second_[0];
const guards_ = _1.second_.slice(1);
const guardName_ = ("_guard" + (guards_.length + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [guard_.pattern_], guards_, _c.body_)
}))(matchCase_);
(await emitWrapperStart_$($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, guard_.at_, (("const " + guardName_) + " = "));
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_, false);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, guard_.at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [(() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, guard_.at_, guardName_)
})], newCase_, [], [], jump_, last_, break_, lastCase_, async_);
emitWrapperEnd_()
break
}
{
(await emitWrapperStart_$($task));
ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, break_, async_);
const returns_ = ff_core_Option.Option_any(ff_core_Array.Array_last(self_.writtenStrings_), ((line_) => {
return ff_core_Option.Option_any(ff_core_Array.Array_first(line_), ((part_) => {
return ((((((ff_core_String.String_startsWith(part_, "return ", 0) || ff_core_String.String_startsWith(part_, "break ", 0)) || ff_core_String.String_startsWith(part_, "continue ", 0)) || ff_core_String.String_startsWith(part_, "return;", 0)) || ff_core_String.String_startsWith(part_, "break;", 0)) || ff_core_String.String_startsWith(part_, "continue;", 0)) || ff_core_String.String_startsWith(part_, "throw ", 0))
}))
}));
if(((jump_ && last_) && (!returns_))) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, "return")
} else if(((jump_ && (!returns_)) && (!lastCase_))) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, matchCase_.at_, (break_
? "continue"
: "break"))
} else {};
emitWrapperEnd_()
}
} while(false)
}

export async function JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_, $task) {
function addUnaryCondition_(at_, operator_, right_) {
return addCondition_((async ($task) => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, operator_);
(await right_($task))
}))
}
function addBinaryCondition_(at_, operator_, left_, right_) {
return addCondition_((async ($task) => {
(await left_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ((" " + operator_) + " "));
right_()
}))
}
function addCondition_(condition_) {
if(lastCase_) {
return conditions_
} else {
return [...conditions_, condition_]
}
}
do {
const _1 = pattern_;
if(_1.PString) {
const value_ = _1.value_;
const newConditions_ = addBinaryCondition_(pattern_.at_, "===", argument_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, pattern_.at_, value_)
}));
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PInt) {
const value_ = _1.value_;
const newConditions_ = addBinaryCondition_(pattern_.at_, "===", argument_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, pattern_.at_, value_)
}));
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PChar) {
const value_ = _1.value_;
const newConditions_ = addBinaryCondition_(pattern_.at_, "===", argument_, (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, pattern_.at_, ff_compiler_JsEmitter.charLiteralToNumber_(value_))
}));
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PVariable && _1.name_.None) {
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PVariable && _1.name_.Some) {
const at_ = _1.at_;
const name_ = _1.name_.value_;
const newVariables_ = [...variables_, (async ($task) => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, name_, at_, ff_compiler_JsEmitter.escapeKeyword_(name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
(await argument_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
})];
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.False" && _1.patterns_.length === 0) {
const at_ = _1.at_;
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, addUnaryCondition_(at_, "!", argument_), variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.True" && _1.patterns_.length === 0) {
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, addCondition_(argument_), variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PVariant) {
const at_ = _1.at_;
const emptyOrLink_ = _1.name_;
if(((emptyOrLink_ === "List$Empty") || (emptyOrLink_ === "List$Link"))) {
let restPattern_ = ff_core_Option.None();
function listPatterns_(matchPattern_) {
const matchPattern_a = matchPattern_;
if(matchPattern_a.PVariant && matchPattern_a.name_ === "List$Empty" && matchPattern_a.patterns_.length === 0) {
return []
}
if(matchPattern_a.PVariant && matchPattern_a.name_ === "List$Link" && matchPattern_a.patterns_.length === 2) {
const head_ = matchPattern_a.patterns_[0];
const tail_ = matchPattern_a.patterns_[1];
return [head_, ...listPatterns_(tail_)]
}
{
const p_ = matchPattern_a;
restPattern_ = ff_core_Option.Some(p_);
return []
}
}
const patterns_ = listPatterns_(pattern_);
const itemArguments_ = ff_core_List.List_map(ff_core_List.List_pairs(patterns_), ((_1) => {
{
const i_ = _1.first_;
return (async ($task) => {
(await argument_($task));
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (("[" + i_) + "]"))
})
return
}
}));
const restArgument_ = ff_core_Option.Option_map(restPattern_, ((_) => {
return (async ($task) => {
(await argument_($task));
return ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ((".slice(" + patterns_.length) + ")"))
})
}));
const newArguments_ = [...itemArguments_, ...ff_core_Option.Option_toList(restArgument_), ...arguments_];
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...ff_core_Option.Option_toList(restPattern_), ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const operator_ = ff_core_Option.Option_else(ff_core_Option.Option_map(restPattern_, ((_) => {
return ">="
})), (() => {
return "==="
}));
const newConditions_ = addBinaryCondition_(at_, operator_, (async ($task) => {
(await argument_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".length")
}), (() => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ("" + patterns_.length))
}));
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
}
if(_1.PVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = (await ff_compiler_JsEmitter.JsEmitter_processVariantCase$(self_, at_, name_, argument_, $task));
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, (async ($task) => {
(await argument_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, processed_.variantName_, at_, processed_.variantName_)
})]);
const newArguments_ = [...processed_.arguments_, ...arguments_];
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = (await ff_compiler_JsEmitter.JsEmitter_processVariantCase$(self_, at_, name_, argument_, $task));
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, (async ($task) => {
(await argument_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ".");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, processed_.variantName_, at_, processed_.variantName_)
})]);
const newVariables_ = ff_core_Option.Option_else(ff_core_Option.Option_map(variable_, ((x_) => {
return [...variables_, (async ($task) => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, x_, at_, ff_compiler_JsEmitter.escapeKeyword_(x_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
(await argument_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
})]
})), (() => {
return variables_
}));
(await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, newVariables_, jump_, last_, break_, lastCase_, async_, $task))
break
}
{
const at_ = _1.at_;
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const newVariables_ = [...variables_, (async ($task) => {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "const ");
ff_compiler_JsEmitter.JsEmitter_writeNamed(self_, variable_, at_, ff_compiler_JsEmitter.escapeKeyword_(variable_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, " = ");
(await argument_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ";");
ff_compiler_JsEmitter.JsEmitter_writeLine(self_)
})];
(await ff_compiler_JsEmitter.JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_, $task))
}
} while(false)
}

export async function JsEmitter_emitList$(self_, at_, items_, async_, $task) {
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "[");
const comma_ = ff_compiler_JsEmitter.Comma(self_, true, ", ");
ff_core_List.List_each(items_, ((_1) => {
if(!_1.second_) {
const item_ = _1.first_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false)
return
}
{
const item_ = _1.first_;
ff_compiler_JsEmitter.Comma_writeComma(comma_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, item_.at_, "...");
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false)
return
}
}));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "]")
}

export async function JsEmitter_processVariantCase$(self_, at_, name_, argument_, $task) {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (variantNameUnqualified_.length + 1));
const variantModule_ = ff_core_Map.Map_grab(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
let loneVariant_ = false;
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_;
loneVariant_ = (definition_.variants_.length === 1);
return [...ff_core_List.List_map(definition_.commonFields_, ((_w1) => {
return _w1.name_
})), ...ff_core_List.List_map(variant_.fields_, ((_w1) => {
return _w1.name_
}))]
}))
}))), ((field_) => {
if(newtype_) {
return argument_
} else {
return (async ($task) => {
(await argument_($task));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ("." + ff_compiler_JsEmitter.escapeKeyword_(field_)))
})
}
}));
return ff_compiler_JsEmitter.ProcessedVariantCase(variantName_, newtype_, loneVariant_, newArguments_)
}

export async function JsEmitter_processVariant$(self_, name_, $task) {
if(ff_core_String.String_startsWith(name_, "List$", 0)) {
return false
} else {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (variantNameUnqualified_.length + 1));
const variantModule_ = ff_core_Map.Map_grab(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_
}))
})));
return newtype_
}
}

export async function JsEmitter_emitArgument$(self_, callAt_, argument_, async_, $task) {
{
const _1 = argument_.value_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/SourceLocation.callSite") {
const at_ = _1.at_;
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "\"");
for(let for_a = self_.moduleKey_.folders_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (_w1 + "/"))
};
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, self_.moduleKey_.name_);
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, (((":" + callAt_.line_) + ":") + callAt_.column_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, ((("," + self_.moduleKey_.packagePair_.group_) + ",") + self_.moduleKey_.packagePair_.name_));
ff_compiler_JsEmitter.JsEmitter_writeMapped(self_, at_, "\"")
return
}
{
const value_ = _1;
ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)
return
}
}
}

export function Liner_writeLines(self_) {
if(self_.first_) {
self_.first_ = false
} else {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_.emitter_);
if(self_.double_) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_.emitter_)
}
}
}

export async function Liner_writeLines$(self_, $task) {
if(self_.first_) {
self_.first_ = false
} else {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_.emitter_);
if(self_.double_) {
ff_compiler_JsEmitter.JsEmitter_writeLine(self_.emitter_)
}
}
}

export function Comma_writeComma(self_) {
if(self_.first_) {
self_.first_ = false
} else {
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_.emitter_, self_.delimiter_)
}
}

export async function Comma_writeComma$(self_, $task) {
if(self_.first_) {
self_.first_ = false
} else {
ff_compiler_JsEmitter.JsEmitter_writeUnmapped(self_.emitter_, self_.delimiter_)
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_JsEmitter_EmitTarget = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/JsEmitter.EmitTarget" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/JsEmitter.EmitTarget" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_JsEmitter_EmitTarget = {
show_(value_) {
const value_a = value_;
if(value_a.EmitNode) {
const z_ = value_a;
return "EmitNode"
}
if(value_a.EmitBrowser) {
const z_ = value_a;
return "EmitBrowser"
}
if(value_a.EmitBuild) {
const z_ = value_a;
return "EmitBuild"
}
{
const z_ = value_a;
return "EmitExecutable"
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.EmitNode) {
const z_ = value_a;
return "EmitNode"
}
if(value_a.EmitBrowser) {
const z_ = value_a;
return "EmitBrowser"
}
if(value_a.EmitBuild) {
const z_ = value_a;
return "EmitBuild"
}
{
const z_ = value_a;
return "EmitExecutable"
}
},
};

export const ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return false
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return false
}
},
};

export const ff_core_Ordering_Order$ff_compiler_JsEmitter_EmitTarget = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
function number_(z_) {
const z_a = z_;
if(z_a.EmitNode) {
return 0
}
if(z_a.EmitBrowser) {
return 1
}
if(z_a.EmitBuild) {
return 2
}
{
return 3
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
function number_(z_) {
const z_a = z_;
if(z_a.EmitNode) {
return 0
}
if(z_a.EmitBrowser) {
return 1
}
if(z_a.EmitBuild) {
return 2
}
{
return 3
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_JsEmitter_EmitTarget = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.EmitNode) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
if(value_a.EmitBrowser) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
if(value_a.EmitBuild) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_JsEmitter.EmitNode()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_JsEmitter.EmitBrowser()
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_JsEmitter.EmitBuild()
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_JsEmitter.EmitExecutable()
}
{
throw ff_core_Js.initializeError_(new Error(), ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.EmitNode) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
if(value_a.EmitBrowser) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
if(value_a.EmitBuild) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_JsEmitter.EmitNode()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_JsEmitter.EmitBrowser()
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_JsEmitter.EmitBuild()
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_JsEmitter.EmitExecutable()
}
{
throw ff_core_Js.initializeError_(new Error(), ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};


//# sourceMappingURL=JsEmitter.mjs.map