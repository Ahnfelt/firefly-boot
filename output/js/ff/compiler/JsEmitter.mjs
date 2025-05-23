

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_JsImporter from "../../ff/compiler/JsImporter.mjs"

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

// type JsEmitter
export function JsEmitter(otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, emittingAsync_, tailCallUsed_) {
return {otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, emittingAsync_, tailCallUsed_};
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

export const primitiveTypes_ = ff_core_List.List_toSet(["ff:core/Bool.Bool", "ff:core/Char.Char", "ff:core/Int.Int", "ff:core/Float.Float", "ff:core/String.String"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);

export function new_(otherModules_, emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
return ff_core_Pair.Pair(ff_compiler_Syntax.ModuleKey_qualifiedName(m_.moduleKey_), m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.new_(), emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, false, false)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
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
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.new_(), emitTarget_, isMainModule_, compilerModuleFileUrl_, moduleKey_, false, false)
}

export async function fail_$(at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
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

export function JsEmitter_emitModule(self_, module_) {
const selfImport_ = ff_compiler_JsEmitter.JsEmitter_emitImport(self_, self_.moduleKey_);
const imports_ = ff_core_List.List_flatten([ff_core_Option.Option_toList(ff_core_Option.Option_map(self_.compilerModuleFileUrl_, ((_w1) => {
return (("import * as $firefly_compiler from '" + _w1) + "'")
}))), ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((_w1) => {
return _w1.moduleKey_
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_ModuleKey), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitImport(self_, _w1.moduleKey_)
}))]);
const parts_ = [(ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 === selfImport_)
}))
? imports_
: [selfImport_, ...imports_]), ff_core_List.List_map(module_.types_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition(self_, _w1)
})), ff_core_List.List_map(module_.lets_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, _w1, false, false))
})), ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, ""))
})), ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
}))
})), ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition(self_, _w1)
})), ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitInstanceDefinition(self_, _w1)
}))];
const ignoreJsImports_ = ((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && ff_compiler_Syntax.PackagePair_isCore(self_.moduleKey_.packagePair_))
? ["esbuild"]
: []);
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (ff_core_List.List_join(ff_core_List.List_map([jsImports_, ...parts_], ((_w1) => {
return ff_core_List.List_join(_w1, "\n\n")
})), "\n\n") + "\n")
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

export function JsEmitter_emitRun(self_, moduleName_, functions_, mainPackagePair_, bootstrapping_) {
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
const mutability_ = (mutable_
? "let"
: "const");
const valueCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_, async_, false);
const assignmentCode_ = (((!mutable_) || (valueCode_ !== "(void 0)"))
? (" = " + valueCode_)
: "");
return ((((mutability_ + " ") + ff_compiler_JsEmitter.escapeKeyword_(definition_.name_)) + assignmentCode_) + ";")
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
const syncMethods_ = ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, ""))
}));
const asyncMethods_ = ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
}))
}));
return ff_core_List.List_join([...syncMethods_, ...asyncMethods_], "\n\n")
}

export function JsEmitter_emitInstanceDefinition(self_, definition_) {
const name_ = ff_compiler_JsEmitter.makeDictionaryName_(definition_.traitName_, ff_compiler_JsEmitter.firstTypeName_(definition_.typeArguments_));
const methods_ = ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "")
})), ((_w1) => {
return ff_core_String.String_dropFirst(_w1, "function ".length)
}));
const asyncMethods_ = ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "")
})), ((_w1) => {
return ("async " + ff_core_String.String_dropFirst(_w1, "async function ".length))
}))
}));
const body_ = (("{\n" + ff_core_List.List_join([...methods_, ...asyncMethods_], ",\n")) + "\n}");
{
const _1 = definition_.constraints_;
if(_1.length === 0) {
return (((("export const " + name_) + " = ") + body_) + ";")
}
{
const constraints_ = _1;
const dictionaries_ = ff_core_List.List_map(constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
return (((((("export function " + name_) + "(") + ff_core_List.List_join(dictionaries_, ", ")) + ") { return ") + body_) + "}")
}
}
}

export function JsEmitter_emitFunctionDefinition(self_, definition_, async_, suffix_ = "") {
const signature_ = ff_compiler_JsEmitter.JsEmitter_emitSignature(self_, definition_.signature_, async_, suffix_);
{
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
const body_ = ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true, false, async_)
}));
return (((signature_ + " {\n") + body_) + "\n}")
}
}
{
const effect_ = _1.effect_;
const cases_ = _1.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const escapedArguments_ = ff_core_List.List_map(definition_.signature_.parameters_, ((_w1) => {
return (_w1.name_ + "_a")
}));
const shadowingWorkaround_ = ff_core_List.List_join(ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
return (((("const " + p_.name_) + "_a = ") + ff_compiler_JsEmitter.escapeKeyword_(p_.name_)) + ";")
})), "\n");
const body_ = ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, c_, [], [], true, true, false, lastCase_, async_)
}
})), "\n");
return ((shadowingWorkaround_ + "\n") + casesString_)
}));
return (((signature_ + " {\n") + body_) + "\n}")
}
}
}

export function JsEmitter_emitTailCall(self_, body_) {
const outerTailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = false;
const result_ = body_();
const tailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = outerTailCallUsed_;
if(tailCallUsed_) {
return (("_tailcall: for(;;) {\n" + result_) + "\nreturn\n}")
} else {
return result_
}
}

export function JsEmitter_emitSignature(self_, signature_, async_, suffix_ = "") {
const parameterStrings_ = ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitParameter(self_, _w1, async_)
}));
const dictionaryStrings_ = ff_core_List.List_map(signature_.constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
const controller_ = (async_
? ["$task"]
: []);
const parameters_ = (("(" + ff_core_List.List_join([...parameterStrings_, ...dictionaryStrings_, ...controller_], ", ")) + ")");
const prefix_ = (async_
? "async "
: "");
const asyncSuffix_ = (async_
? "$"
: "");
return (((((prefix_ + "function ") + ff_compiler_JsEmitter.escapeKeyword_(signature_.name_)) + suffix_) + asyncSuffix_) + parameters_)
}

export function JsEmitter_emitParameter(self_, parameter_, async_) {
const defaultValue_ = ff_core_Option.Option_else(ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return (" = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false))
})), (() => {
return ""
}));
return (ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_) + defaultValue_)
}

export function JsEmitter_emitTypeDefinition(self_, definition_) {
if(definition_.newtype_) {
return ("// newtype " + definition_.name_)
} else {
return ((("// type " + definition_.name_) + "\n") + ff_core_List.List_join(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition(self_, definition_, _w1)
})), "\n"))
}
}

export function JsEmitter_emitVariantDefinition(self_, typeDefinition_, definition_) {
const allFields_ = [...typeDefinition_.commonFields_, ...definition_.fields_];
const fields_ = ff_core_List.List_join(ff_core_List.List_map(allFields_, ((_w1) => {
return ff_compiler_JsEmitter.escapeKeyword_(_w1.name_)
})), ", ");
if(ff_core_List.List_isEmpty(allFields_)) {
return ((((((((((((("const " + definition_.name_) + "$ = {") + definition_.name_) + ": true};\n") + "export function ") + definition_.name_) + "(") + fields_) + ") {\n") + "return ") + definition_.name_) + "$;\n") + "}")
} else if((typeDefinition_.variants_.length === 1)) {
return (((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + fields_) + "};\n") + "}")
} else {
return (((((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + definition_.name_) + ": true, ") + fields_) + "};\n") + "}")
}
}

export function JsEmitter_emitTerm(self_, term_, async_, ignored_ = false) {
{
const _1 = term_;
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
if(ff_core_String.String_startsWith(value_, "\"\"\"", 0)) {
return (("`" + ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(value_, 3), 3), "`", "\\`")) + "`")
}
}
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
}
if(_1.EChar) {
const at_ = _1.at_;
const value_ = _1.value_;
return ff_compiler_JsEmitter.charLiteralToNumber_(value_)
}
if(_1.EInt) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
}
if(_1.EFloat) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
}
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_JsEmitter.escapeResolved_(name_)
}
if(_1.EList) {
const at_ = _1.at_;
const items_ = _1.items_;
return ff_compiler_JsEmitter.JsEmitter_emitList(self_, items_, async_)
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
return "false"
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
return "true"
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return "(void 0)"
}
if(_1.EVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const arguments_ = _1.arguments_;
const argumentsString_ = ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_)), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
})), ", ");
const newtype_ = ff_compiler_JsEmitter.JsEmitter_processVariant(self_, name_);
if(newtype_) {
return argumentsString_
} else {
return (((ff_compiler_JsEmitter.escapeResolved_(name_) + "(") + argumentsString_) + ")")
}
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
return "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
return "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
}
if(_1.EVariantIs && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return "function(_v) { return ff_core_Option.Some(_v); }"
}
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const n_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
return (((("(function(_v) { " + "return _v.") + ff_compiler_JsEmitter.escapeResolved_(n_)) + " ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
}
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const fields_ = _1.arguments_;
const fieldCode_ = ff_core_List.List_join(ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false))
})), ", ");
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false)) + ", ") + fieldCode_) + "}")
}
if(_1.EField) {
const at_ = _1.at_;
const newtype_ = _1.newtype_;
const record_ = _1.record_;
const field_ = _1.field_;
if(newtype_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false)
} else {
return ((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
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
const controller_ = (newAsync_
? ["$task"]
: []);
const parameters_ = ff_core_List.List_join([...patternParameters_, ...controller_], ", ");
const prefix_ = (newAsync_
? "async "
: "");
return (((((("(" + prefix_) + "(") + parameters_) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, newAsync_)) + "\n})")
}
}
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const cases_ = _1.lambda_.cases_;
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const controller_ = (newAsync_
? ["$task"]
: []);
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs((cases_[0] ?? ff_core_List.List_grab(cases_, 0)).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const caseStrings_ = ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, c_, [], [], true, true, false, lastCase_, newAsync_)
}
}));
const prefix_ = (newAsync_
? "async "
: "");
return ((((((("(" + prefix_) + "(") + ff_core_List.List_join([...escapedArguments_, ...controller_], ", ")) + ") => ") + "{\n") + ff_core_List.List_join(caseStrings_, "\n")) + "\n})")
}
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const c_ = (await_
? ", $task"
: "");
const call_ = ((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + c_) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
{
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
if(ignored_) {
return code_
} else {
return (("(" + code_) + ", void 0)")
}
return
}
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitSpecialCall(self_, term_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
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
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, _w1)
}));
const ds_ = ff_core_List.List_dropFirst(dictionaryStrings_, 1);
const d_ = ff_core_List.List_grabFirst(dictionaryStrings_);
const asyncSuffix_ = (await_
? "$"
: "");
const n_ = (ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))) + asyncSuffix_);
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
}));
const controller_ = (await_
? ["$task"]
: []);
const call_ = (((((d_ + ".") + n_) + "(") + ff_core_List.List_join([...emittedArguments_, ...ds_, ...controller_], ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
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
const ds_ = ff_core_List.List_map(dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, _w1)
}));
const functionCode_ = (ff_compiler_JsEmitter.escapeResolved_(name_) + (await_
? "$"
: ""));
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
}));
const controller_ = (await_
? ["$task"]
: []);
const call_ = (((functionCode_ + "(") + ff_core_List.List_join([...emittedArguments_, ...ds_, ...controller_], ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
return (("(" + ff_core_List.List_foldLeft(list_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, elseBody_, async_, false), ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false) + "\n? ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + "\n: ") + otherwise_)
}
}))) + ")")
return
}
{
const list_ = _1;
return (("(" + ff_core_List.List_foldLeft(list_, "ff_core_Option.None()", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false) + "\n? ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + ")\n: ") + otherwise_)
}
}))) + ")")
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
const functionCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false);
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
}));
const controller_ = (await_
? ["$task"]
: []);
const call_ = (((functionCode_ + "(") + ff_core_List.List_join([...emittedArguments_, ...controller_], ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
if(ff_core_List.List_isEmpty(fields_)) {
return "{}"
} else {
const list_ = ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false))
}));
return (("{\n" + ff_core_List.List_join(list_, ",\n")) + "\n}")
}
return
}
if(_1.EWildcard) {
const at_ = _1.at_;
const index_ = _1.index_;
if((index_ === 0)) {
ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
};
return ("_w" + index_)
}
if(_1.ESequential && _1.before_.ESequential && _1.before_.before_.ESequential) {
const before1_ = _1.before_.before_.before_;
const before2_ = _1.before_.before_.after_;
const before3_ = _1.before_.after_;
const after_ = _1.after_;
if((((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(before3_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
return (((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before3_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_)) + ")")
}
}
if(_1.ESequential && _1.before_.ESequential) {
const before1_ = _1.before_.before_;
const before2_ = _1.before_.after_;
const after_ = _1.after_;
if(((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_)) + ")")
}
}
if(_1.ESequential) {
const before_ = _1.before_;
const after_ = _1.after_;
if((ff_compiler_JsEmitter.safeCommable_(before_) && ff_compiler_JsEmitter.safeCommable_(after_))) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_)) + ")")
}
}
if(async_) {
return (("(await (async function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_)) + "\n})())")
}
{
return (("(function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_)) + "\n})()")
}
}
}

export function JsEmitter_emitField(self_, term_, async_, dot_ = ".") {
{
const _1 = term_;
if(_1.EString) {
const q_ = _1.value_;
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return (dot_ + s_)
}
}
{
return (("[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)) + "]")
}
}
}

export function JsEmitter_emitDictionary(self_, d_) {
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
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, _w1)
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
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, f_, newAsync_, "")
}));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_))
}
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
return ((ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_) + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_))
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return ""
}
if(_1.ESequential && _1.before_.EVariant && _1.before_.name_ === "ff:core/Unit.Unit") {
const after_ = _1.after_;
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_)
}
if(_1.ESequential && _1.after_.EVariant && _1.after_.name_ === "ff:core/Unit.Unit") {
const before_ = _1.before_;
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, break_, async_)
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return ((ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, false, async_) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.tailCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const instanceCall_ = _1.target_.instanceCall_;
const effect_ = _1.effect_;
const arguments_ = _1.arguments_;
if(instanceCall_) {
ff_core_Core.throw_(ff_compiler_Syntax.CompileError(at_, "Not yet implemented: Tail calls on trait methods."), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
self_.tailCallUsed_ = true;
const pair_ = ff_core_List.List_unzip(ff_core_List.List_collect(ff_core_List.List_map(arguments_, ((a_) => {
return ff_core_Option.Some(ff_core_Pair.Pair((((("const " + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r"))) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_, async_, false)) + ";"), ((ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_grab(a_.name_)) + " = ") + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")))))
})), ((_w1) => {
return _w1
})));
return (((("{\n" + ff_core_List.List_join(pair_.first_, "\n")) + "\n") + ff_core_List.List_join(pair_.second_, "\n")) + "\ncontinue _tailcall\n}")
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitSpecialStatement(self_, term_, last_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.EPipe && _1.function_.ELambda) {
const at_ = _1.at_;
const value_ = _1.value_;
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
return (((((((((!last_) && (!break_))
? "do "
: "") + "{\nconst _1 = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + ";\n") + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ["_1"], c_, [], [], true, last_, break_, lastCase_, async_)
}
})), "\n")) + "\n}") + (((!last_) && (!break_))
? " while(false)"
: ""))
return
}
{
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
if(break_) {
return (("if(!" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)) + ") break")
} else if(last_) {
return ("return " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false))
} else {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, true)
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
const initial_ = (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, elseBody_, last_, break_, async_)) + "\n}");
return ff_core_List.List_foldLeft(list_, initial_, ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)) + "\n} else ") + otherwise_)
}
}))
return
}
{
const list_ = _1;
if((!last_)) {
return ff_core_List.List_foldLeft(list_, "{}", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)) + "\n} else ") + otherwise_)
}
}))
return
}
}
{
const list_ = _1;
return ff_core_List.List_foldLeft(list_, "return ff_core_Option.None()", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return (((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + "return ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + ")\n} else ") + otherwise_)
}
}))
return
}
}
return
}
}
}

export function JsEmitter_emitAssignment(self_, term_, async_) {
const self_a = self_;
const term_a = term_;
const async_a = async_;
if(term_a.ECall && term_a.target_.StaticCall) {
const at_ = term_a.at_;
const name_ = term_a.target_.name_;
const arguments_ = term_a.arguments_;
const dictionaries_ = term_a.dictionaries_;
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
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + " += ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + " -= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
}
}
if(_1 === "ff:core/JsSystem.JsSystem_set") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " += ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " -= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
}
}
}
}
if(_1 === "ff:core/Js.set") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)))
}
}
}
if(_1 === "ff:core/Js.increment") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " += ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)))
}
}
}
if(_1 === "ff:core/Js.decrement") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " -= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)))
}
}
}
{
return ff_core_Option.None()
}
}
return
}
if(term_a.EAssign) {
const at_ = term_a.at_;
const operator_ = term_a.operator_;
const name_ = term_a.variable_;
const value_ = term_a.value_;
return ff_core_Option.Some(((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)))
}
if(term_a.EAssignField) {
const at_ = term_a.at_;
const operator_ = term_a.operator_;
const record_ = term_a.record_;
const field_ = term_a.field_;
const value_ = term_a.value_;
return ff_core_Option.Some(((((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)))
}
{
return ff_core_Option.None()
}
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
return ff_core_Option.Some(((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + ")"))
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
return ff_core_Option.Some((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
}
}
}
if(_1 === "ff:core/List.List_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
const code1_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
const code2_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return ff_core_Option.Some(((((((((("(" + code1_) + "[") + code2_) + "] ?? ") + "ff_core_List.List_grab(") + code1_) + ", ") + code2_) + "))"))
}
}
}
if(_1 === "ff:core/Array.Array_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
const code1_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
const code2_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return ff_core_Option.Some(((((((((("(" + code1_) + ".array[") + code2_) + "] ?? ") + "ff_core_Array.Array_grab(") + code1_) + ", ") + code2_) + "))"))
}
}
}
if(_1 === "ff:core/List.List_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false) + ".length"))
}
}
if(_1 === "ff:core/Array.Array_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false) + ".array.length"))
}
}
if(_1 === "ff:core/String.String_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false) + ".length"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " < ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " >= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " > ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " <= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
const n_ = ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return ff_compiler_JsEmitter.escapeResolved_(_w1)
})), (() => {
return "i"
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_));
const await_ = (newAsync_
? "await "
: "");
return ff_core_Option.Some(((((((((((((((((((await_ + "((() => {\n") + "const size = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, size_, async_, false)) + ";\n") + "const result = [];\n") + "for(let ") + n_) + " = 0; ") + n_) + " < size; ") + n_) + "++) {\n") + "result.push(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, newAsync_, false)) + ");\n") + "}\n") + "return result;\n") + "})())"))
}
}
}
}
if(_1 === "ff:core/Js.import") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const url_ = _guard1[0].value_;
{
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
return ff_core_Option.Some("(() => {throw new Error('Node.js imports are not supported in the browser')})()")
}
{
return ff_core_Option.Some(ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
}
}
return
}
}
if(_1 === "ff:core/Js.browserImport") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const url_ = _guard1[0].value_;
{
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
return ff_core_Option.Some(ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
}
{
return ff_core_Option.Some("(() => {throw new Error('Browser imports are not supported in Node.js')})()")
}
}
return
}
}
if(_1 === "ff:core/Js.dynamicImport") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const url_ = _guard1[0];
return ff_core_Option.Some((("import(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, url_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.await") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const body_ = _guard1[0];
if(async_) {
return ff_core_Option.Some((("(await " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + ")"))
} else {
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false))
}
return
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
return ff_core_Option.Some((((("async (" + ff_core_List.List_join(patternParameters_, ", ")) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, false)) + "\n}"))
}
}
}
}
}
{
const name_ = _1;
if(ff_core_String.String_startsWith(name_, "ff:core/Js.async", 0)) {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(term_.at_, "JS async functions must take a simple parameter list"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
if(_1 === "ff:core/Js.cancelled") {
return ff_core_Option.Some((async_
? "$task.controller_.signal.aborted"
: "false"))
return
}
if(_1 === "ff:core/Js.throwIfCancelled") {
return ff_core_Option.Some((async_
? "((() => ff_core_Task.Task_throwIfAborted($task))())"
: ""))
return
}
if(_1 === "ff:core/Js.currentTask") {
return ff_core_Option.Some("$task")
}
if(_1 === "ff:core/Js.controller") {
return ff_core_Option.Some("$task.controller_")
}
if(_1 === "ff:core/Js.setController") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const a_ = _guard1[0];
return ff_core_Option.Some((("($task.controller_ = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.inAsync") {
return ff_core_Option.Some((self_.emittingAsync_
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.inBrowser") {
return ff_core_Option.Some((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser())
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.inNode") {
return ff_core_Option.Some((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitNode())
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.inBuild") {
return ff_core_Option.Some((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.value") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Js.fromValue") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Js.rawIdentifier") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
return ff_core_Option.Some(ff_core_String.String_replace(op_, "\"", ""))
}
}
if(_1 === "ff:core/Js.unaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
return ff_core_Option.Some(((("(" + ff_core_String.String_replace(op_, "\"", "")) + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.binaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
return ff_core_Option.Some((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false)) + " ") + ff_core_String.String_replace(op_, "\"", "")) + " ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.shortCircuitingOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
return ff_core_Option.Some((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false)) + " ") + ff_core_String.String_replace(op_, "\"", "")) + " ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(a2_), async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_spreadToArray") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e1_ = _guard1[0];
return ff_core_Option.Some((("[..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "]"))
}
}
if(_1 === "ff:core/JsValue.JsValue_typeof") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((("(typeof " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_instanceof") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " instanceof ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_get") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")))
}
}
if(_1 === "ff:core/JsValue.JsValue_equals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_notEquals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Int.Int_bitAnd") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " & ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Int.Int_bitRightUnsigned") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " >>> ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Int.Int_bitRight") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " >> ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
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
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some(((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + "(") + argumentCode_) + ")"))
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
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + "(") + argumentCode_) + ")"))
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
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some(((((("(new " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "(") + argumentCode_) + ")") + ")"))
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
return go_(a1_.value_, [ff_core_Pair.Pair(a2_.value_, a3_.value_), ...fields_])
}
}
if(_1.ECall && _1.target_.StaticCall) {
const n_ = _1.target_.name_;
const as_ = _1.arguments_;
const _guard2 = ((((((n_ === "ff:core/JsSystem.JsSystem_object") || (n_ === "ff:core/JsSystem.JsSystem_new0")) || (n_ === "ff:core/Js.object")) || (n_ === "ff:core/Js.new0")) || (n_ === "ff:core/Json.Json_object")) || (n_ === "ff:core/Json.Json_new0"));
if(_guard2 && ff_core_List.List_all(as_, ((_w1) => {
return ff_compiler_JsEmitter.noSideEffects_(_w1.value_)
}))) {
return (("{" + ff_core_List.List_join(ff_core_List.List_map(fields_, ((p_) => {
return ((ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "") + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false))
})), ", ")) + "}")
return
}
}
{
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)) + ", ") + ff_core_List.List_join(ff_core_List.List_map(fields_, ((p_) => {
return ((ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "") + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false))
})), ", ")) + "}")
return
}
}
}
return ff_core_Option.Some(go_(term_, []))
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
const q_ = _guard2[1].value_;
const es_ = _guard2.slice(2);
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some((((ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + "]")
})) + "(") + argumentCode_) + ")"))
return
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
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false))
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
const q_ = _guard2[1].value_;
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
return ff_core_Option.Some(ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + "]")
})))
return
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_object") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("{}")
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_new0") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("{}")
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_null") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("null")
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_undefined") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("(void 0)")
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
const q_ = _guard1[0].value_;
const es_ = _guard1.slice(1);
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some((((ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "]")
})) + "(") + argumentCode_) + ")"))
return
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
return ff_core_Option.Some(((((((("(async (" + argumentCode_) + ") => await ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "(") + argumentCode_) + taskCode_) + "))"))
} else {
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false))
}
return
}
}
}
}
}
if(_1 === "ff:core/Js.get") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const e1_ = _guard1[0];
const q_ = _guard1[0].value_;
return ff_core_Option.Some(ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "]")
})))
return
}
}
if(_1 === "ff:core/Js.object") {
return ff_core_Option.Some("{}")
}
if(_1 === "ff:core/Js.new0") {
return ff_core_Option.Some("{}")
}
if(_1 === "ff:core/Js.null") {
return ff_core_Option.Some("null")
}
if(_1 === "ff:core/Js.undefined") {
return ff_core_Option.Some("(void 0)")
}
if(_1 === "ff:core/Js.globalThis") {
return ff_core_Option.Some("globalThis")
}
if(_1 === "ff:core/BrowserSystem.BrowserSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("globalThis")
}
}
}
if(_1 === "ff:core/BuildSystem.BuildSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("globalThis")
}
}
}
if(_1 === "ff:core/NodeSystem.NodeSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("globalThis")
}
}
}
if(_1 === "ff:core/Js.jsSystem") {
return ff_core_Option.Some("globalThis")
}
if(_1 === "ff:core/Json.string") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.int") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.float") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.bool") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.array") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.null") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some("null")
}
}
if(_1 === "ff:core/Json.object") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some("{}")
}
}
{
return ff_core_Option.None()
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
return ff_core_Option.Some((((("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_), async_, false)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_)) + "\n}"))
}
}
if(_1 === "ff:core/Core.doWhile") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const doWhileBody_ = _guard2[0];
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
{
const body_ = _guard1;
return ff_core_Option.Some((("while(true) {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, false, true, async_)) + "\n}"))
}
}
}
if(_1 === "ff:core/Option.Option_each") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0];
const name_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
return ff_core_Option.Some(((((("{\nconst if_o = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false)) + "\nif(if_o.Some) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = if_o.value_;\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, false, async_)) + "\n}\n}"))
return
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
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
const startCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
const endCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
const op_ = ((r_ === "ff:core/Int.Int_until")
? "<"
: "<=");
return ff_core_Option.Some((((((((((("for(let " + "for_i = ") + startCode_) + ", for_e = ") + endCode_) + "; for_i ") + op_) + " for_e; for_i++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
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
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
const startCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
const endCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
const delta_ = ((r_ === "ff:core/Int.Int_until")
? " - 1"
: "");
return ff_core_Option.Some(((((((((("for(let " + "for_e = ") + startCode_) + ", for_i = ") + endCode_) + delta_) + "; for_i >= for_e; for_i--) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
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
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
const fusion1_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a", list1_.value_, async_);
const fusion2_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a2", list2_.value_, async_);
const start1_ = fusion1_.second_.first_;
const end1_ = fusion1_.second_.second_;
const listCode1_ = fusion1_.first_;
const start2_ = fusion2_.second_.first_;
const end2_ = fusion2_.second_.second_;
const listCode2_ = fusion2_.first_;
return ff_core_Option.Some(((((((((((((((((("for(let for_a = " + listCode1_) + ", for_i = ") + start1_) + ", for_l = ") + end1_) + ", ") + "for_a2 = ") + listCode2_) + ", for_i2 = ") + start2_) + ", for_l2 = ") + end2_) + "; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name1_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];\n")
})), (() => {
return ""
}))) + ff_core_Option.Option_else(ff_core_Option.Option_map(name2_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a2[for_i2];\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
}
}
}
{
const n_ = _1;
const _guard2 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].ECall && _guard1[0].target_.StaticCall && _guard1[0].target_.name_ === "ff:core/List.List_pairs" && _guard1[0].arguments_.length === 1 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariant && _guard1[1].lambda_.cases_[0].patterns_[0].name_ === "ff:core/Pair.Pair" && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_.length === 2 && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0].arguments_[0];
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
const fusion_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a", list_.value_, async_);
const start_ = fusion_.second_.first_;
const end_ = fusion_.second_.second_;
const listCode_ = fusion_.first_;
return ff_core_Option.Some((((((((((("for(let for_a = " + listCode_) + ", for_i = ") + start_) + ", for_l = ") + end_) + "; for_i < for_l; for_i++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name1_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;\n")
})), (() => {
return ""
}))) + ff_core_Option.Option_else(ff_core_Option.Option_map(name2_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
}
}
}
{
const n_ = _1;
const _guard2 = ((((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile")) || (n_ === "ff:core/Array.Array_each")) || (n_ === "ff:core/Array.Array_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0];
const name_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
const fusion_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a", list_, async_);
const start_ = fusion_.second_.first_;
const end_ = fusion_.second_.second_;
const listCode_ = (fusion_.first_ + (ff_core_String.String_startsWith(n_, "ff:core/Array.", 0)
? ".array"
: ""));
return ff_core_Option.Some(((((((((("for(let for_a = " + listCode_) + ", for_i = ") + start_) + ", for_l = ") + end_) + "; for_i < for_l; for_i++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
}
}
}
if(_1 === "ff:core/Array.Array_push") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const array_ = _guard1[0];
const value_ = _guard1[1];
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, array_, async_, false) + ".array.push(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Core.if") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const condition_ = _guard1[0];
const body_ = _guard1[1];
return ff_core_Option.Some(((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + (last_
? (("return ff_core_Option.Some(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), async_, false)) + ")\n} else return ff_core_Option.None()")
: (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_) + "\n}"))))
return
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
if(_guard1.length === 1) {
const dictionary_ = _guard1[0];
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
const a_ = ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, term_.at_, argument_, async_);
return ff_core_Option.Some((((("throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(" + a_) + ", ") + d_) + ")})"))
}
}
}
}
if(_1 === "ff:core/Try.Try_catch") {
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return ff_core_Option.Some(code_)
}
}
if(_1 === "ff:core/Try.Try_catchAny") {
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return ff_core_Option.Some(code_)
}
}
if(_1 === "ff:core/Try.Try_finally") {
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return ff_core_Option.Some(code_)
}
}
if(_1 === "ff:core/Js.throwIfCancelled") {
return ff_core_Option.Some((async_
? "ff_core_Task.Task_throwIfAborted($task)"
: ""))
return
}
if(_1 === "ff:core/Js.throw") {
const _guard2 = term_;
if(_guard2.ECall) {
const c_ = _guard2;
const _guard1 = c_.arguments_;
if(_guard1.length === 1) {
const argument_ = _guard1[0];
return ff_core_Option.Some(("throw " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_, async_, false)))
}
}
}
{
return ff_core_Option.None()
}
}
}

export function JsEmitter_emitLightFusion(self_, listName_, list_, async_) {
let start_ = "0";
let end_ = (listName_ + ".length");
const listCode_ = (((_1) => {
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
start_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(start_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
start_ = (("Math.max(" + start_) + ", 0)")
};
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
const count_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(count_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
end_ = (((end_ + " - Math.max(") + count_) + ", 0)")
} else {
end_ = ((end_ + " - ") + count_)
};
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
end_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(end_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
end_ = (("Math.max(" + end_) + ", 0)")
};
end_ = (((("Math.min(" + end_) + ", ") + listName_) + ".length)");
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
const count_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(count_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
start_ = (((("Math.max(" + listName_) + ".length - Math.max(") + count_) + ", 0), 0)")
} else {
start_ = (((("Math.max(" + listName_) + ".length - ") + count_) + ", 0)")
};
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
{
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false)
}
}))(list_);
return ff_core_Pair.Pair(listCode_, ff_core_Pair.Pair(start_, end_))
}

export function JsEmitter_emitTryCatchFinally(self_, term_, last_, async_) {
function emitCatch_(catchEffect_, cases_) {
const catchAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(catchEffect_));
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ["_exception.value_", "_error"];
{
const _1 = cases_;
if(_1.length === 1) {
const case_ = _1[0];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, case_, [], [], false, last_, false, true, catchAsync_)
}
{
const cs_ = _1;
const caseStrings_ = ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, c_, [], [], true, last_, false, lastCase_, catchAsync_)
}
}));
if(last_) {
return ff_core_List.List_join(caseStrings_, "\n")
} else {
return (("do {\n" + ff_core_List.List_join(caseStrings_, "\n")) + "\n} while(false)")
}
return
}
}
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
return ff_core_Option.Some((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_)) + "\n}"))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catchAny" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].PVariable && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const name_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].name_;
const catchBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
return ff_core_Option.Some((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} catch") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("(" + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + ")")
})), (() => {
return ""
}))) + " {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, catchBody_, last_, false, tryAsync_)) + "\n}"))
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.dictionaries_.length === 1) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.dictionaries_[0];
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
return ff_core_Option.Some(((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n}"))
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
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
return ff_core_Option.Some(((((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_)) + "\n}"))
}
{
return ff_core_Option.None()
}
}
}

export function JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_) {
function emitWrapper_(code_) {
return ((((ff_core_List.List_isEmpty(conditions_)
? "{\n"
: (("if(" + ff_core_List.List_join(conditions_, " && ")) + ") {\n")) + ff_core_List.List_join(variables_, "")) + code_) + "\n}")
}
{
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
if(_1.first_.length >= 1) {
const p_ = _1.first_[0];
const ps_ = _1.first_.slice(1);
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, (arguments_[0] ?? ff_core_List.List_grab(arguments_, 0)), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), conditions_, variables_, jump_, last_, break_, lastCase_, async_)
return
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
if(ff_core_List.List_isEmpty(variables_)) {
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [...conditions_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)], [], jump_, last_, break_, lastCase_, async_)
}
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
const code_ = ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)], [], jump_, last_, break_, lastCase_, async_);
return emitWrapper_(code_)
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const guard_ = _1.second_[0];
const guards_ = _1.second_.slice(1);
const guardName_ = ("_guard" + (guards_.length + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [guard_.pattern_], guards_, _c.body_)
}))(matchCase_);
const code_ = ((((("const " + guardName_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_, false)) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [guardName_], newCase_, [], [], jump_, last_, break_, lastCase_, async_));
return emitWrapper_(code_)
}
{
const statementsCode_ = ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, break_, async_);
const lastLine_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(statementsCode_), ((_w1) => {
return (_w1 !== 10)
})));
const returns_ = ((((((ff_core_String.String_startsWith(lastLine_, "return ", 0) || ff_core_String.String_startsWith(lastLine_, "break ", 0)) || ff_core_String.String_startsWith(lastLine_, "continue ", 0)) || ff_core_String.String_startsWith(lastLine_, "return;", 0)) || ff_core_String.String_startsWith(lastLine_, "break;", 0)) || ff_core_String.String_startsWith(lastLine_, "continue;", 0)) || ff_core_String.String_startsWith(lastLine_, "throw ", 0));
const code_ = (statementsCode_ + (((jump_ && last_) && (!returns_))
? "\nreturn"
: ((jump_ && (!returns_)) && (!lastCase_))
? (break_
? "\ncontinue"
: "\nbreak")
: ""));
return emitWrapper_(code_)
}
}
}

export function JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_) {
function addCondition_(condition_) {
if(lastCase_) {
return conditions_
} else {
return [...conditions_, condition_]
}
}
{
const _1 = pattern_;
if(_1.PString) {
const value_ = _1.value_;
const newConditions_ = addCondition_(((argument_ + " === ") + value_));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PInt) {
const value_ = _1.value_;
const newConditions_ = addCondition_(((argument_ + " === ") + value_));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PChar) {
const value_ = _1.value_;
const newConditions_ = addCondition_(((argument_ + " === ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_)));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariable && _1.name_.None) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariable && _1.name_.Some) {
const name_ = _1.name_.value_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.False" && _1.patterns_.length === 0) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, addCondition_(("!" + argument_)), variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.True" && _1.patterns_.length === 0) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, addCondition_(argument_), variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariant) {
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
return (((argument_ + "[") + i_) + "]")
}
}));
const restArgument_ = ff_core_Option.Option_map(restPattern_, ((_) => {
return (((argument_ + ".slice(") + patterns_.length) + ")")
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
const newConditions_ = addCondition_(((((argument_ + ".length ") + operator_) + " ") + patterns_.length));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
}
if(_1.PVariant) {
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, ((argument_ + ".") + processed_.variantName_)]);
const newArguments_ = [...processed_.arguments_, ...arguments_];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, ((argument_ + ".") + processed_.variantName_)]);
const newVariables_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(ff_core_Option.Option_map(variable_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), ((_w1) => {
return (_w1 !== argument_)
})), ((_w1) => {
return [...variables_, (((("const " + _w1) + " = ") + argument_) + ";\n")]
})), (() => {
return []
}));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
}
{
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
}
}
}

export function JsEmitter_emitList(self_, items_, async_) {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(items_, ((_1) => {
if(!_1.second_) {
const item_ = _1.first_;
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false)
}
{
const item_ = _1.first_;
return ("..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false))
}
})), ", ")) + "]")
}

export function JsEmitter_processVariantCase(self_, name_, argument_) {
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
return ((argument_ + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
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
const newArguments_ = ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
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
return ((((((((((("\"" + ff_core_List.List_join(ff_core_List.List_map(self_.moduleKey_.folders_, ((_w1) => {
return (_w1 + "/")
})), "")) + self_.moduleKey_.name_) + ":") + callAt_.line_) + ":") + callAt_.column_) + ",") + self_.moduleKey_.packagePair_.group_) + ",") + self_.moduleKey_.packagePair_.name_) + "\"")
return
}
{
const value_ = _1;
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)
}
}
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
const parts_ = [(ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 === selfImport_)
}))
? imports_
: [selfImport_, ...imports_]), ff_core_List.List_map(module_.types_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition(self_, _w1)
})), ff_core_List.List_map(module_.lets_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, _w1, false, false))
})), ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, ""))
})), ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
}))
})), ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition(self_, _w1)
})), ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitInstanceDefinition(self_, _w1)
}))];
const ignoreJsImports_ = ((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && ff_compiler_Syntax.PackagePair_isCore(self_.moduleKey_.packagePair_))
? ["esbuild"]
: []);
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (ff_core_List.List_join(ff_core_List.List_map([jsImports_, ...parts_], ((_w1) => {
return ff_core_List.List_join(_w1, "\n\n")
})), "\n\n") + "\n")
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

export async function JsEmitter_emitRun$(self_, moduleName_, functions_, mainPackagePair_, bootstrapping_, $task) {
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
const mutability_ = (mutable_
? "let"
: "const");
const valueCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_, async_, false);
const assignmentCode_ = (((!mutable_) || (valueCode_ !== "(void 0)"))
? (" = " + valueCode_)
: "");
return ((((mutability_ + " ") + ff_compiler_JsEmitter.escapeKeyword_(definition_.name_)) + assignmentCode_) + ";")
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
const syncMethods_ = ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, ""))
}));
const asyncMethods_ = ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
}))
}));
return ff_core_List.List_join([...syncMethods_, ...asyncMethods_], "\n\n")
}

export async function JsEmitter_emitInstanceDefinition$(self_, definition_, $task) {
const name_ = ff_compiler_JsEmitter.makeDictionaryName_(definition_.traitName_, ff_compiler_JsEmitter.firstTypeName_(definition_.typeArguments_));
const methods_ = ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "")
})), ((_w1) => {
return ff_core_String.String_dropFirst(_w1, "function ".length)
}));
const asyncMethods_ = ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "")
})), ((_w1) => {
return ("async " + ff_core_String.String_dropFirst(_w1, "async function ".length))
}))
}));
const body_ = (("{\n" + ff_core_List.List_join([...methods_, ...asyncMethods_], ",\n")) + "\n}");
{
const _1 = definition_.constraints_;
if(_1.length === 0) {
return (((("export const " + name_) + " = ") + body_) + ";")
}
{
const constraints_ = _1;
const dictionaries_ = ff_core_List.List_map(constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
return (((((("export function " + name_) + "(") + ff_core_List.List_join(dictionaries_, ", ")) + ") { return ") + body_) + "}")
}
}
}

export async function JsEmitter_emitFunctionDefinition$(self_, definition_, async_, suffix_ = "", $task) {
const signature_ = ff_compiler_JsEmitter.JsEmitter_emitSignature(self_, definition_.signature_, async_, suffix_);
{
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
const body_ = ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true, false, async_)
}));
return (((signature_ + " {\n") + body_) + "\n}")
}
}
{
const effect_ = _1.effect_;
const cases_ = _1.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const escapedArguments_ = ff_core_List.List_map(definition_.signature_.parameters_, ((_w1) => {
return (_w1.name_ + "_a")
}));
const shadowingWorkaround_ = ff_core_List.List_join(ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
return (((("const " + p_.name_) + "_a = ") + ff_compiler_JsEmitter.escapeKeyword_(p_.name_)) + ";")
})), "\n");
const body_ = ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, c_, [], [], true, true, false, lastCase_, async_)
}
})), "\n");
return ((shadowingWorkaround_ + "\n") + casesString_)
}));
return (((signature_ + " {\n") + body_) + "\n}")
}
}
}

export async function JsEmitter_emitTailCall$(self_, body_, $task) {
const outerTailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = false;
const result_ = (await body_($task));
const tailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = outerTailCallUsed_;
if(tailCallUsed_) {
return (("_tailcall: for(;;) {\n" + result_) + "\nreturn\n}")
} else {
return result_
}
}

export async function JsEmitter_emitSignature$(self_, signature_, async_, suffix_ = "", $task) {
const parameterStrings_ = ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitParameter(self_, _w1, async_)
}));
const dictionaryStrings_ = ff_core_List.List_map(signature_.constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
const controller_ = (async_
? ["$task"]
: []);
const parameters_ = (("(" + ff_core_List.List_join([...parameterStrings_, ...dictionaryStrings_, ...controller_], ", ")) + ")");
const prefix_ = (async_
? "async "
: "");
const asyncSuffix_ = (async_
? "$"
: "");
return (((((prefix_ + "function ") + ff_compiler_JsEmitter.escapeKeyword_(signature_.name_)) + suffix_) + asyncSuffix_) + parameters_)
}

export async function JsEmitter_emitParameter$(self_, parameter_, async_, $task) {
const defaultValue_ = ff_core_Option.Option_else(ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return (" = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false))
})), (() => {
return ""
}));
return (ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_) + defaultValue_)
}

export async function JsEmitter_emitTypeDefinition$(self_, definition_, $task) {
if(definition_.newtype_) {
return ("// newtype " + definition_.name_)
} else {
return ((("// type " + definition_.name_) + "\n") + ff_core_List.List_join(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition(self_, definition_, _w1)
})), "\n"))
}
}

export async function JsEmitter_emitVariantDefinition$(self_, typeDefinition_, definition_, $task) {
const allFields_ = [...typeDefinition_.commonFields_, ...definition_.fields_];
const fields_ = ff_core_List.List_join(ff_core_List.List_map(allFields_, ((_w1) => {
return ff_compiler_JsEmitter.escapeKeyword_(_w1.name_)
})), ", ");
if(ff_core_List.List_isEmpty(allFields_)) {
return ((((((((((((("const " + definition_.name_) + "$ = {") + definition_.name_) + ": true};\n") + "export function ") + definition_.name_) + "(") + fields_) + ") {\n") + "return ") + definition_.name_) + "$;\n") + "}")
} else if((typeDefinition_.variants_.length === 1)) {
return (((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + fields_) + "};\n") + "}")
} else {
return (((((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + definition_.name_) + ": true, ") + fields_) + "};\n") + "}")
}
}

export async function JsEmitter_emitTerm$(self_, term_, async_, ignored_ = false, $task) {
{
const _1 = term_;
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
if(ff_core_String.String_startsWith(value_, "\"\"\"", 0)) {
return (("`" + ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(value_, 3), 3), "`", "\\`")) + "`")
}
}
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
}
if(_1.EChar) {
const at_ = _1.at_;
const value_ = _1.value_;
return ff_compiler_JsEmitter.charLiteralToNumber_(value_)
}
if(_1.EInt) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
}
if(_1.EFloat) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
}
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_JsEmitter.escapeResolved_(name_)
}
if(_1.EList) {
const at_ = _1.at_;
const items_ = _1.items_;
return ff_compiler_JsEmitter.JsEmitter_emitList(self_, items_, async_)
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
return "false"
}
if(_1.EVariant && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
return "true"
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return "(void 0)"
}
if(_1.EVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const arguments_ = _1.arguments_;
const argumentsString_ = ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_)), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
})), ", ");
const newtype_ = ff_compiler_JsEmitter.JsEmitter_processVariant(self_, name_);
if(newtype_) {
return argumentsString_
} else {
return (((ff_compiler_JsEmitter.escapeResolved_(name_) + "(") + argumentsString_) + ")")
}
return
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.False") {
const at_ = _1.at_;
return "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
}
if(_1.EVariantIs && _1.name_ === "ff:core/Bool.True") {
const at_ = _1.at_;
return "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
}
if(_1.EVariantIs && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return "function(_v) { return ff_core_Option.Some(_v); }"
}
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const n_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
return (((("(function(_v) { " + "return _v.") + ff_compiler_JsEmitter.escapeResolved_(n_)) + " ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
}
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const fields_ = _1.arguments_;
const fieldCode_ = ff_core_List.List_join(ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false))
})), ", ");
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false)) + ", ") + fieldCode_) + "}")
}
if(_1.EField) {
const at_ = _1.at_;
const newtype_ = _1.newtype_;
const record_ = _1.record_;
const field_ = _1.field_;
if(newtype_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false)
} else {
return ((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
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
const controller_ = (newAsync_
? ["$task"]
: []);
const parameters_ = ff_core_List.List_join([...patternParameters_, ...controller_], ", ");
const prefix_ = (newAsync_
? "async "
: "");
return (((((("(" + prefix_) + "(") + parameters_) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, newAsync_)) + "\n})")
}
}
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const cases_ = _1.lambda_.cases_;
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const controller_ = (newAsync_
? ["$task"]
: []);
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs((cases_[0] ?? ff_core_List.List_grab(cases_, 0)).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const caseStrings_ = ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, c_, [], [], true, true, false, lastCase_, newAsync_)
}
}));
const prefix_ = (newAsync_
? "async "
: "");
return ((((((("(" + prefix_) + "(") + ff_core_List.List_join([...escapedArguments_, ...controller_], ", ")) + ") => ") + "{\n") + ff_core_List.List_join(caseStrings_, "\n")) + "\n})")
}
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const c_ = (await_
? ", $task"
: "");
const call_ = ((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + c_) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
{
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
if(ignored_) {
return code_
} else {
return (("(" + code_) + ", void 0)")
}
return
}
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitSpecialCall(self_, term_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
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
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, _w1)
}));
const ds_ = ff_core_List.List_dropFirst(dictionaryStrings_, 1);
const d_ = ff_core_List.List_grabFirst(dictionaryStrings_);
const asyncSuffix_ = (await_
? "$"
: "");
const n_ = (ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))) + asyncSuffix_);
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
}));
const controller_ = (await_
? ["$task"]
: []);
const call_ = (((((d_ + ".") + n_) + "(") + ff_core_List.List_join([...emittedArguments_, ...ds_, ...controller_], ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
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
const ds_ = ff_core_List.List_map(dictionaries_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, _w1)
}));
const functionCode_ = (ff_compiler_JsEmitter.escapeResolved_(name_) + (await_
? "$"
: ""));
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
}));
const controller_ = (await_
? ["$task"]
: []);
const call_ = (((functionCode_ + "(") + ff_core_List.List_join([...emittedArguments_, ...ds_, ...controller_], ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
return (("(" + ff_core_List.List_foldLeft(list_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, elseBody_, async_, false), ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false) + "\n? ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + "\n: ") + otherwise_)
}
}))) + ")")
return
}
{
const list_ = _1;
return (("(" + ff_core_List.List_foldLeft(list_, "ff_core_Option.None()", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false) + "\n? ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + ")\n: ") + otherwise_)
}
}))) + ")")
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
const functionCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_, false);
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
}));
const controller_ = (await_
? ["$task"]
: []);
const call_ = (((functionCode_ + "(") + ff_core_List.List_join([...emittedArguments_, ...controller_], ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
if(ff_core_List.List_isEmpty(fields_)) {
return "{}"
} else {
const list_ = ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_, false))
}));
return (("{\n" + ff_core_List.List_join(list_, ",\n")) + "\n}")
}
return
}
if(_1.EWildcard) {
const at_ = _1.at_;
const index_ = _1.index_;
if((index_ === 0)) {
ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
};
return ("_w" + index_)
}
if(_1.ESequential && _1.before_.ESequential && _1.before_.before_.ESequential) {
const before1_ = _1.before_.before_.before_;
const before2_ = _1.before_.before_.after_;
const before3_ = _1.before_.after_;
const after_ = _1.after_;
if((((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(before3_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
return (((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before3_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_)) + ")")
}
}
if(_1.ESequential && _1.before_.ESequential) {
const before1_ = _1.before_.before_;
const before2_ = _1.before_.after_;
const after_ = _1.after_;
if(((ff_compiler_JsEmitter.safeCommable_(before1_) && ff_compiler_JsEmitter.safeCommable_(before2_)) && ff_compiler_JsEmitter.safeCommable_(after_))) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before1_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before2_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_)) + ")")
}
}
if(_1.ESequential) {
const before_ = _1.before_;
const after_ = _1.after_;
if((ff_compiler_JsEmitter.safeCommable_(before_) && ff_compiler_JsEmitter.safeCommable_(after_))) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, before_, async_, true)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, after_, async_, ignored_)) + ")")
}
}
if(async_) {
return (("(await (async function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_)) + "\n})())")
}
{
return (("(function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, false, async_)) + "\n})()")
}
}
}

export async function JsEmitter_emitField$(self_, term_, async_, dot_ = ".", $task) {
{
const _1 = term_;
if(_1.EString) {
const q_ = _1.value_;
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return (dot_ + s_)
}
}
{
return (("[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)) + "]")
}
}
}

export async function JsEmitter_emitDictionary$(self_, d_, $task) {
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
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, _w1)
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
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, f_, newAsync_, "")
}));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_))
}
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
return ((ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_) + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_))
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return ""
}
if(_1.ESequential && _1.before_.EVariant && _1.before_.name_ === "ff:core/Unit.Unit") {
const after_ = _1.after_;
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_)
}
if(_1.ESequential && _1.after_.EVariant && _1.after_.name_ === "ff:core/Unit.Unit") {
const before_ = _1.before_;
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, break_, async_)
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return ((ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, false, async_) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, break_, async_))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.tailCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const instanceCall_ = _1.target_.instanceCall_;
const effect_ = _1.effect_;
const arguments_ = _1.arguments_;
if(instanceCall_) {
ff_core_Core.throw_(ff_compiler_Syntax.CompileError(at_, "Not yet implemented: Tail calls on trait methods."), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
self_.tailCallUsed_ = true;
const pair_ = ff_core_List.List_unzip(ff_core_List.List_collect(ff_core_List.List_map(arguments_, ((a_) => {
return ff_core_Option.Some(ff_core_Pair.Pair((((("const " + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r"))) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_, async_, false)) + ";"), ((ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_grab(a_.name_)) + " = ") + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")))))
})), ((_w1) => {
return _w1
})));
return (((("{\n" + ff_core_List.List_join(pair_.first_, "\n")) + "\n") + ff_core_List.List_join(pair_.second_, "\n")) + "\ncontinue _tailcall\n}")
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitSpecialStatement(self_, term_, last_, async_, name_, ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
})), dictionaries_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.EPipe && _1.function_.ELambda) {
const at_ = _1.at_;
const value_ = _1.value_;
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
return (((((((((!last_) && (!break_))
? "do "
: "") + "{\nconst _1 = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + ";\n") + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ["_1"], c_, [], [], true, last_, break_, lastCase_, async_)
}
})), "\n")) + "\n}") + (((!last_) && (!break_))
? " while(false)"
: ""))
return
}
{
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitAssignment(self_, term_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
if(break_) {
return (("if(!" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false)) + ") break")
} else if(last_) {
return ("return " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, false))
} else {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_, true)
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
const initial_ = (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, elseBody_, last_, break_, async_)) + "\n}");
return ff_core_List.List_foldLeft(list_, initial_, ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)) + "\n} else ") + otherwise_)
}
}))
return
}
{
const list_ = _1;
if((!last_)) {
return ff_core_List.List_foldLeft(list_, "{}", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, break_, async_)) + "\n} else ") + otherwise_)
}
}))
return
}
}
{
const list_ = _1;
return ff_core_List.List_foldLeft(list_, "return ff_core_Option.None()", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return (((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + "return ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + ")\n} else ") + otherwise_)
}
}))
return
}
}
return
}
}
}

export async function JsEmitter_emitAssignment$(self_, term_, async_, $task) {
const self_a = self_;
const term_a = term_;
const async_a = async_;
if(term_a.ECall && term_a.target_.StaticCall) {
const at_ = term_a.at_;
const name_ = term_a.target_.name_;
const arguments_ = term_a.arguments_;
const dictionaries_ = term_a.dictionaries_;
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
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + " += ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + " -= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
}
}
if(_1 === "ff:core/JsSystem.JsSystem_set") {
const _guard3 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard3.length === 3 && _guard3[1].EString) {
const e1_ = _guard3[0];
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " += ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
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
const q_ = _guard3[1].value_;
const e3_ = _guard3[2];
const _guard2 = ff_compiler_JsEmitter.noSideEffects_(e1_);
if(_guard2) {
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " -= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e3_, async_, false)))
}
}
}
}
if(_1 === "ff:core/Js.set") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)))
}
}
}
if(_1 === "ff:core/Js.increment") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " += ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)))
}
}
}
if(_1 === "ff:core/Js.decrement") {
const _guard2 = ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.value_
}));
if(_guard2.length === 2 && _guard2[0].EString) {
const q_ = _guard2[0].value_;
const e2_ = _guard2[1];
const _guard1 = ff_compiler_JsEmitter.safeBare_(q_);
if(_guard1.Some) {
const s_ = _guard1.value_;
return ff_core_Option.Some(((s_ + " -= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)))
}
}
}
{
return ff_core_Option.None()
}
}
return
}
if(term_a.EAssign) {
const at_ = term_a.at_;
const operator_ = term_a.operator_;
const name_ = term_a.variable_;
const value_ = term_a.value_;
return ff_core_Option.Some(((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)))
}
if(term_a.EAssignField) {
const at_ = term_a.at_;
const operator_ = term_a.operator_;
const record_ = term_a.record_;
const field_ = term_a.field_;
const value_ = term_a.value_;
return ff_core_Option.Some(((((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_, false) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)))
}
{
return ff_core_Option.None()
}
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
return ff_core_Option.Some(((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + ")"))
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
return ff_core_Option.Some((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
}
}
}
if(_1 === "ff:core/List.List_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
const code1_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
const code2_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return ff_core_Option.Some(((((((((("(" + code1_) + "[") + code2_) + "] ?? ") + "ff_core_List.List_grab(") + code1_) + ", ") + code2_) + "))"))
}
}
}
if(_1 === "ff:core/Array.Array_grab") {
const _guard2 = arguments_;
if(_guard2.length === 2) {
const e1_ = _guard2[0];
const e2_ = _guard2[1];
if((ff_compiler_JsEmitter.noSideEffects_(e1_) && ff_compiler_JsEmitter.noSideEffects_(e2_))) {
const code1_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false);
const code2_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false);
return ff_core_Option.Some(((((((((("(" + code1_) + ".array[") + code2_) + "] ?? ") + "ff_core_Array.Array_grab(") + code1_) + ", ") + code2_) + "))"))
}
}
}
if(_1 === "ff:core/List.List_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false) + ".length"))
}
}
if(_1 === "ff:core/Array.Array_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false) + ".array.length"))
}
}
if(_1 === "ff:core/String.String_size") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false) + ".length"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " < ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " >= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " > ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, left_, async_, false)) + " <= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, right_, async_, false)) + ")"))
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
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_))) {
const n_ = ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return ff_compiler_JsEmitter.escapeResolved_(_w1)
})), (() => {
return "i"
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(call_.effect_));
const await_ = (newAsync_
? "await "
: "");
return ff_core_Option.Some(((((((((((((((((((await_ + "((() => {\n") + "const size = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, size_, async_, false)) + ";\n") + "const result = [];\n") + "for(let ") + n_) + " = 0; ") + n_) + " < size; ") + n_) + "++) {\n") + "result.push(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, newAsync_, false)) + ");\n") + "}\n") + "return result;\n") + "})())"))
}
}
}
}
if(_1 === "ff:core/Js.import") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const url_ = _guard1[0].value_;
{
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
return ff_core_Option.Some("(() => {throw new Error('Node.js imports are not supported in the browser')})()")
}
{
return ff_core_Option.Some(ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
}
}
return
}
}
if(_1 === "ff:core/Js.browserImport") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const url_ = _guard1[0].value_;
{
const _1 = self_.emitTarget_;
if(_1.EmitBrowser) {
return ff_core_Option.Some(ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", "")))
}
{
return ff_core_Option.Some("(() => {throw new Error('Browser imports are not supported in Node.js')})()")
}
}
return
}
}
if(_1 === "ff:core/Js.dynamicImport") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const url_ = _guard1[0];
return ff_core_Option.Some((("import(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, url_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.await") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const body_ = _guard1[0];
if(async_) {
return ff_core_Option.Some((("(await " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false)) + ")"))
} else {
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_, false))
}
return
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
return ff_core_Option.Some((((("async (" + ff_core_List.List_join(patternParameters_, ", ")) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, false, false)) + "\n}"))
}
}
}
}
}
{
const name_ = _1;
if(ff_core_String.String_startsWith(name_, "ff:core/Js.async", 0)) {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(term_.at_, "JS async functions must take a simple parameter list"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
if(_1 === "ff:core/Js.cancelled") {
return ff_core_Option.Some((async_
? "$task.controller_.signal.aborted"
: "false"))
return
}
if(_1 === "ff:core/Js.throwIfCancelled") {
return ff_core_Option.Some((async_
? "((() => ff_core_Task.Task_throwIfAborted($task))())"
: ""))
return
}
if(_1 === "ff:core/Js.currentTask") {
return ff_core_Option.Some("$task")
}
if(_1 === "ff:core/Js.controller") {
return ff_core_Option.Some("$task.controller_")
}
if(_1 === "ff:core/Js.setController") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const a_ = _guard1[0];
return ff_core_Option.Some((("($task.controller_ = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.inAsync") {
return ff_core_Option.Some((self_.emittingAsync_
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.inBrowser") {
return ff_core_Option.Some((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser())
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.inNode") {
return ff_core_Option.Some((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitNode())
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.inBuild") {
return ff_core_Option.Some((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false"))
return
}
if(_1 === "ff:core/Js.value") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Js.fromValue") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Js.rawIdentifier") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
return ff_core_Option.Some(ff_core_String.String_replace(op_, "\"", ""))
}
}
if(_1 === "ff:core/Js.unaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
return ff_core_Option.Some(((("(" + ff_core_String.String_replace(op_, "\"", "")) + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.binaryOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
return ff_core_Option.Some((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false)) + " ") + ff_core_String.String_replace(op_, "\"", "")) + " ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Js.shortCircuitingOperator") {
const _guard1 = arguments_;
if(_guard1.length === 3 && _guard1[0].EString) {
const op_ = _guard1[0].value_;
const a1_ = _guard1[1];
const a2_ = _guard1[2];
return ff_core_Option.Some((((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_, async_, false)) + " ") + ff_core_String.String_replace(op_, "\"", "")) + " ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(a2_), async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_spreadToArray") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e1_ = _guard1[0];
return ff_core_Option.Some((("[..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "]"))
}
}
if(_1 === "ff:core/JsValue.JsValue_typeof") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some((("(typeof " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_instanceof") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " instanceof ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_get") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")))
}
}
if(_1 === "ff:core/JsValue.JsValue_equals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/JsValue.JsValue_notEquals") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Int.Int_bitAnd") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " & ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Int.Int_bitRightUnsigned") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " >>> ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Int.Int_bitRight") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const e1_ = _guard1[0];
const e2_ = _guard1[1];
return ff_core_Option.Some((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + " >> ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + ")"))
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
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some(((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + ff_compiler_JsEmitter.JsEmitter_emitField(self_, e2_, async_, ".")) + "(") + argumentCode_) + ")"))
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
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false) + "(") + argumentCode_) + ")"))
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
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some(((((("(new " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "(") + argumentCode_) + ")") + ")"))
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
return go_(a1_.value_, [ff_core_Pair.Pair(a2_.value_, a3_.value_), ...fields_])
}
}
if(_1.ECall && _1.target_.StaticCall) {
const n_ = _1.target_.name_;
const as_ = _1.arguments_;
const _guard2 = ((((((n_ === "ff:core/JsSystem.JsSystem_object") || (n_ === "ff:core/JsSystem.JsSystem_new0")) || (n_ === "ff:core/Js.object")) || (n_ === "ff:core/Js.new0")) || (n_ === "ff:core/Json.Json_object")) || (n_ === "ff:core/Json.Json_new0"));
if(_guard2 && ff_core_List.List_all(as_, ((_w1) => {
return ff_compiler_JsEmitter.noSideEffects_(_w1.value_)
}))) {
return (("{" + ff_core_List.List_join(ff_core_List.List_map(fields_, ((p_) => {
return ((ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "") + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false))
})), ", ")) + "}")
return
}
}
{
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)) + ", ") + ff_core_List.List_join(ff_core_List.List_map(fields_, ((p_) => {
return ((ff_compiler_JsEmitter.JsEmitter_emitField(self_, p_.first_, async_, "") + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, p_.second_, async_, false))
})), ", ")) + "}")
return
}
}
}
return ff_core_Option.Some(go_(term_, []))
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
const q_ = _guard2[1].value_;
const es_ = _guard2.slice(2);
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some((((ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + "]")
})) + "(") + argumentCode_) + ")"))
return
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
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false))
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
const q_ = _guard2[1].value_;
if(ff_compiler_JsEmitter.noSideEffects_(e1_)) {
return ff_core_Option.Some(ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e2_, async_, false)) + "]")
})))
return
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_object") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("{}")
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_new0") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("{}")
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_null") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("null")
}
}
}
if(_1 === "ff:core/JsSystem.JsSystem_undefined") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("(void 0)")
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
const q_ = _guard1[0].value_;
const es_ = _guard1.slice(1);
const argumentCode_ = ff_core_List.List_join(ff_core_List.List_map(es_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_, false)
})), ", ");
return ff_core_Option.Some((((ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "]")
})) + "(") + argumentCode_) + ")"))
return
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
return ff_core_Option.Some(((((((("(async (" + argumentCode_) + ") => await ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "(") + argumentCode_) + taskCode_) + "))"))
} else {
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false))
}
return
}
}
}
}
}
if(_1 === "ff:core/Js.get") {
const _guard1 = arguments_;
if(_guard1.length === 1 && _guard1[0].EString) {
const e1_ = _guard1[0];
const q_ = _guard1[0].value_;
return ff_core_Option.Some(ff_core_Option.Option_else(ff_compiler_JsEmitter.safeBare_(q_), (() => {
return (("globalThis[" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e1_, async_, false)) + "]")
})))
return
}
}
if(_1 === "ff:core/Js.object") {
return ff_core_Option.Some("{}")
}
if(_1 === "ff:core/Js.new0") {
return ff_core_Option.Some("{}")
}
if(_1 === "ff:core/Js.null") {
return ff_core_Option.Some("null")
}
if(_1 === "ff:core/Js.undefined") {
return ff_core_Option.Some("(void 0)")
}
if(_1 === "ff:core/Js.globalThis") {
return ff_core_Option.Some("globalThis")
}
if(_1 === "ff:core/BrowserSystem.BrowserSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("globalThis")
}
}
}
if(_1 === "ff:core/BuildSystem.BuildSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("globalThis")
}
}
}
if(_1 === "ff:core/NodeSystem.NodeSystem_js") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const e_ = _guard2[0];
if(ff_compiler_JsEmitter.noSideEffects_(e_)) {
return ff_core_Option.Some("globalThis")
}
}
}
if(_1 === "ff:core/Js.jsSystem") {
return ff_core_Option.Some("globalThis")
}
if(_1 === "ff:core/Json.string") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.int") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.float") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.bool") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.array") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some(ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false))
}
}
if(_1 === "ff:core/Json.null") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some("null")
}
}
if(_1 === "ff:core/Json.object") {
const _guard1 = arguments_;
if(_guard1.length === 1) {
const e_ = _guard1[0];
return ff_core_Option.Some("{}")
}
}
{
return ff_core_Option.None()
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
return ff_core_Option.Some((((("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_), async_, false)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_)) + "\n}"))
}
}
if(_1 === "ff:core/Core.doWhile") {
const _guard2 = arguments_;
if(_guard2.length === 1) {
const doWhileBody_ = _guard2[0];
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
{
const body_ = _guard1;
return ff_core_Option.Some((("while(true) {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, false, true, async_)) + "\n}"))
}
}
}
if(_1 === "ff:core/Option.Option_each") {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0];
const name_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
return ff_core_Option.Some(((((("{\nconst if_o = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false)) + "\nif(if_o.Some) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = if_o.value_;\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, false, async_)) + "\n}\n}"))
return
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
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
const startCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
const endCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
const op_ = ((r_ === "ff:core/Int.Int_until")
? "<"
: "<=");
return ff_core_Option.Some((((((((((("for(let " + "for_i = ") + startCode_) + ", for_e = ") + endCode_) + "; for_i ") + op_) + " for_e; for_i++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
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
const name_ = _guard2[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard2[1].lambda_.cases_[0].body_;
if(((r_ === "ff:core/Int.Int_until") || (r_ === "ff:core/Int.Int_to"))) {
const startCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, start_.value_, async_, false);
const endCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, end_.value_, async_, false);
const delta_ = ((r_ === "ff:core/Int.Int_until")
? " - 1"
: "");
return ff_core_Option.Some(((((((((("for(let " + "for_e = ") + startCode_) + ", for_i = ") + endCode_) + delta_) + "; for_i >= for_e; for_i--) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
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
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
const fusion1_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a", list1_.value_, async_);
const fusion2_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a2", list2_.value_, async_);
const start1_ = fusion1_.second_.first_;
const end1_ = fusion1_.second_.second_;
const listCode1_ = fusion1_.first_;
const start2_ = fusion2_.second_.first_;
const end2_ = fusion2_.second_.second_;
const listCode2_ = fusion2_.first_;
return ff_core_Option.Some(((((((((((((((((("for(let for_a = " + listCode1_) + ", for_i = ") + start1_) + ", for_l = ") + end1_) + ", ") + "for_a2 = ") + listCode2_) + ", for_i2 = ") + start2_) + ", for_l2 = ") + end2_) + "; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name1_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];\n")
})), (() => {
return ""
}))) + ff_core_Option.Option_else(ff_core_Option.Option_map(name2_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a2[for_i2];\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
}
}
}
{
const n_ = _1;
const _guard2 = ((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[0].ECall && _guard1[0].target_.StaticCall && _guard1[0].target_.name_ === "ff:core/List.List_pairs" && _guard1[0].arguments_.length === 1 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariant && _guard1[1].lambda_.cases_[0].patterns_[0].name_ === "ff:core/Pair.Pair" && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_.length === 2 && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0].arguments_[0];
const name1_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[0].name_;
const name2_ = _guard1[1].lambda_.cases_[0].patterns_[0].patterns_[1].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
const fusion_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a", list_.value_, async_);
const start_ = fusion_.second_.first_;
const end_ = fusion_.second_.second_;
const listCode_ = fusion_.first_;
return ff_core_Option.Some((((((((((("for(let for_a = " + listCode_) + ", for_i = ") + start_) + ", for_l = ") + end_) + "; for_i < for_l; for_i++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name1_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_i;\n")
})), (() => {
return ""
}))) + ff_core_Option.Option_else(ff_core_Option.Option_map(name2_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
}
}
}
{
const n_ = _1;
const _guard2 = ((((n_ === "ff:core/List.List_each") || (n_ === "ff:core/List.List_eachWhile")) || (n_ === "ff:core/Array.Array_each")) || (n_ === "ff:core/Array.Array_eachWhile"));
if(_guard2) {
const _guard1 = arguments_;
if(_guard1.length === 2 && _guard1[1].ELambda && _guard1[1].lambda_.cases_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_.length === 1 && _guard1[1].lambda_.cases_[0].patterns_[0].PVariable && _guard1[1].lambda_.cases_[0].guards_.length === 0) {
const list_ = _guard1[0];
const name_ = _guard1[1].lambda_.cases_[0].patterns_[0].name_;
const body_ = _guard1[1].lambda_.cases_[0].body_;
const fusion_ = ff_compiler_JsEmitter.JsEmitter_emitLightFusion(self_, "for_a", list_, async_);
const start_ = fusion_.second_.first_;
const end_ = fusion_.second_.second_;
const listCode_ = (fusion_.first_ + (ff_core_String.String_startsWith(n_, "ff:core/Array.", 0)
? ".array"
: ""));
return ff_core_Option.Some(((((((((("for(let for_a = " + listCode_) + ", for_i = ") + start_) + ", for_l = ") + end_) + "; for_i < for_l; for_i++) {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("const " + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + " = for_a[for_i];\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, ff_core_String.String_endsWith(n_, "eachWhile"), async_)) + "\n}"))
return
}
}
}
if(_1 === "ff:core/Array.Array_push") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const array_ = _guard1[0];
const value_ = _guard1[1];
return ff_core_Option.Some((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, array_, async_, false) + ".array.push(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)) + ")"))
}
}
if(_1 === "ff:core/Core.if") {
const _guard1 = arguments_;
if(_guard1.length === 2) {
const condition_ = _guard1[0];
const body_ = _guard1[1];
return ff_core_Option.Some(((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_, false)) + ") {\n") + (last_
? (("return ff_core_Option.Some(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), async_, false)) + ")\n} else return ff_core_Option.None()")
: (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_), false, false, async_) + "\n}"))))
return
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
if(_guard1.length === 1) {
const dictionary_ = _guard1[0];
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
const a_ = ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, term_.at_, argument_, async_);
return ff_core_Option.Some((((("throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(" + a_) + ", ") + d_) + ")})"))
}
}
}
}
if(_1 === "ff:core/Try.Try_catch") {
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return ff_core_Option.Some(code_)
}
}
if(_1 === "ff:core/Try.Try_catchAny") {
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return ff_core_Option.Some(code_)
}
}
if(_1 === "ff:core/Try.Try_finally") {
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return ff_core_Option.Some(code_)
}
}
if(_1 === "ff:core/Js.throwIfCancelled") {
return ff_core_Option.Some((async_
? "ff_core_Task.Task_throwIfAborted($task)"
: ""))
return
}
if(_1 === "ff:core/Js.throw") {
const _guard2 = term_;
if(_guard2.ECall) {
const c_ = _guard2;
const _guard1 = c_.arguments_;
if(_guard1.length === 1) {
const argument_ = _guard1[0];
return ff_core_Option.Some(("throw " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_, async_, false)))
}
}
}
{
return ff_core_Option.None()
}
}
}

export async function JsEmitter_emitLightFusion$(self_, listName_, list_, async_, $task) {
let start_ = "0";
let end_ = (listName_ + ".length");
const listCode_ = (((_1) => {
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
start_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(start_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
start_ = (("Math.max(" + start_) + ", 0)")
};
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_dropLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
const count_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(count_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
end_ = (((end_ + " - Math.max(") + count_) + ", 0)")
} else {
end_ = ((end_ + " - ") + count_)
};
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeFirst" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
end_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(end_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
end_ = (("Math.max(" + end_) + ", 0)")
};
end_ = (((("Math.min(" + end_) + ", ") + listName_) + ".length)");
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_takeLast" && _1.arguments_.length === 2) {
const a1_ = _1.arguments_[0];
const a2_ = _1.arguments_[1];
const count_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a2_.value_, async_, false);
if((!ff_core_String.String_all(count_, ((_w1) => {
return ff_core_Char.Char_isAsciiDigit(_w1)
})))) {
start_ = (((("Math.max(" + listName_) + ".length - Math.max(") + count_) + ", 0), 0)")
} else {
start_ = (((("Math.max(" + listName_) + ".length - ") + count_) + ", 0)")
};
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a1_.value_, async_, false)
}
{
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, list_, async_, false)
}
}))(list_);
return ff_core_Pair.Pair(listCode_, ff_core_Pair.Pair(start_, end_))
}

export async function JsEmitter_emitTryCatchFinally$(self_, term_, last_, async_, $task) {
function emitCatch_(catchEffect_, cases_) {
const catchAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(catchEffect_));
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ["_exception.value_", "_error"];
{
const _1 = cases_;
if(_1.length === 1) {
const case_ = _1[0];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, case_, [], [], false, last_, false, true, catchAsync_)
}
{
const cs_ = _1;
const caseStrings_ = ff_core_List.List_map(ff_core_List.List_pairs(cases_), ((_1) => {
{
const i_ = _1.first_;
const c_ = _1.second_;
const lastCase_ = (i_ === (cases_.length - 1));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, c_, [], [], true, last_, false, lastCase_, catchAsync_)
}
}));
if(last_) {
return ff_core_List.List_join(caseStrings_, "\n")
} else {
return (("do {\n" + ff_core_List.List_join(caseStrings_, "\n")) + "\n} while(false)")
}
return
}
}
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
return ff_core_Option.Some((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_)) + "\n}"))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catchAny" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].PVariable && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const name_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].name_;
const catchBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
return ff_core_Option.Some((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} catch") + ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return (("(" + ff_compiler_JsEmitter.escapeKeyword_(_w1)) + ")")
})), (() => {
return ""
}))) + " {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, catchBody_, last_, false, tryAsync_)) + "\n}"))
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.dictionaries_.length === 1) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.dictionaries_[0];
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
return ff_core_Option.Some(((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n}"))
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
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
return ff_core_Option.Some(((((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, false, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, false, finallyAsync_)) + "\n}"))
}
{
return ff_core_Option.None()
}
}
}

export async function JsEmitter_emitCase$(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_, $task) {
function emitWrapper_(code_) {
return ((((ff_core_List.List_isEmpty(conditions_)
? "{\n"
: (("if(" + ff_core_List.List_join(conditions_, " && ")) + ") {\n")) + ff_core_List.List_join(variables_, "")) + code_) + "\n}")
}
{
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
if(_1.first_.length >= 1) {
const p_ = _1.first_[0];
const ps_ = _1.first_.slice(1);
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, (arguments_[0] ?? ff_core_List.List_grab(arguments_, 0)), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), conditions_, variables_, jump_, last_, break_, lastCase_, async_)
return
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
if(ff_core_List.List_isEmpty(variables_)) {
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [...conditions_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)], [], jump_, last_, break_, lastCase_, async_)
}
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
const code_ = ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_, false)], [], jump_, last_, break_, lastCase_, async_);
return emitWrapper_(code_)
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const guard_ = _1.second_[0];
const guards_ = _1.second_.slice(1);
const guardName_ = ("_guard" + (guards_.length + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [guard_.pattern_], guards_, _c.body_)
}))(matchCase_);
const code_ = ((((("const " + guardName_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_, false)) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [guardName_], newCase_, [], [], jump_, last_, break_, lastCase_, async_));
return emitWrapper_(code_)
}
{
const statementsCode_ = ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, break_, async_);
const lastLine_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(statementsCode_), ((_w1) => {
return (_w1 !== 10)
})));
const returns_ = ((((((ff_core_String.String_startsWith(lastLine_, "return ", 0) || ff_core_String.String_startsWith(lastLine_, "break ", 0)) || ff_core_String.String_startsWith(lastLine_, "continue ", 0)) || ff_core_String.String_startsWith(lastLine_, "return;", 0)) || ff_core_String.String_startsWith(lastLine_, "break;", 0)) || ff_core_String.String_startsWith(lastLine_, "continue;", 0)) || ff_core_String.String_startsWith(lastLine_, "throw ", 0));
const code_ = (statementsCode_ + (((jump_ && last_) && (!returns_))
? "\nreturn"
: ((jump_ && (!returns_)) && (!lastCase_))
? (break_
? "\ncontinue"
: "\nbreak")
: ""));
return emitWrapper_(code_)
}
}
}

export async function JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_, $task) {
function addCondition_(condition_) {
if(lastCase_) {
return conditions_
} else {
return [...conditions_, condition_]
}
}
{
const _1 = pattern_;
if(_1.PString) {
const value_ = _1.value_;
const newConditions_ = addCondition_(((argument_ + " === ") + value_));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PInt) {
const value_ = _1.value_;
const newConditions_ = addCondition_(((argument_ + " === ") + value_));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PChar) {
const value_ = _1.value_;
const newConditions_ = addCondition_(((argument_ + " === ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_)));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariable && _1.name_.None) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariable && _1.name_.Some) {
const name_ = _1.name_.value_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.False" && _1.patterns_.length === 0) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, addCondition_(("!" + argument_)), variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.True" && _1.patterns_.length === 0) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, addCondition_(argument_), variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariant) {
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
return (((argument_ + "[") + i_) + "]")
}
}));
const restArgument_ = ff_core_Option.Option_map(restPattern_, ((_) => {
return (((argument_ + ".slice(") + patterns_.length) + ")")
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
const newConditions_ = addCondition_(((((argument_ + ".length ") + operator_) + " ") + patterns_.length));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
}
if(_1.PVariant) {
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, ((argument_ + ".") + processed_.variantName_)]);
const newArguments_ = [...processed_.arguments_, ...arguments_];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, break_, lastCase_, async_)
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
const newConditions_ = ((processed_.loneVariant_ || lastCase_)
? conditions_
: [...conditions_, ((argument_ + ".") + processed_.variantName_)]);
const newVariables_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(ff_core_Option.Option_map(variable_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), ((_w1) => {
return (_w1 !== argument_)
})), ((_w1) => {
return [...variables_, (((("const " + _w1) + " = ") + argument_) + ";\n")]
})), (() => {
return []
}));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
}
{
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, break_, lastCase_, async_)
}
}
}

export async function JsEmitter_emitList$(self_, items_, async_, $task) {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(items_, ((_1) => {
if(!_1.second_) {
const item_ = _1.first_;
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false)
}
{
const item_ = _1.first_;
return ("..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_, false))
}
})), ", ")) + "]")
}

export async function JsEmitter_processVariantCase$(self_, name_, argument_, $task) {
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
return ((argument_ + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
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
const newArguments_ = ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
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
return ((((((((((("\"" + ff_core_List.List_join(ff_core_List.List_map(self_.moduleKey_.folders_, ((_w1) => {
return (_w1 + "/")
})), "")) + self_.moduleKey_.name_) + ":") + callAt_.line_) + ":") + callAt_.column_) + ",") + self_.moduleKey_.packagePair_.group_) + ",") + self_.moduleKey_.packagePair_.name_) + "\"")
return
}
{
const value_ = _1;
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_, false)
}
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_JsEmitter_EmitTarget = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/JsEmitter.EmitTarget" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/JsEmitter.EmitTarget" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_JsEmitter_ProcessedVariantCase = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/JsEmitter.ProcessedVariantCase" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/JsEmitter.ProcessedVariantCase" + "[") + "]"))
}
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
}
};

export const ff_core_Show_Show$ff_compiler_JsEmitter_ProcessedVariantCase = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("ProcessedVariantCase" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variantName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.loneVariant_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.arguments_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("ProcessedVariantCase" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variantName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.loneVariant_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.arguments_)) + ")")
}
}
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
}
};

export const ff_core_Equal_Equal$ff_compiler_JsEmitter_ProcessedVariantCase = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.variantName_ === y_.variantName_) && ((x_.newtype_ === y_.newtype_) && ((x_.loneVariant_ === y_.loneVariant_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.arguments_, y_.arguments_))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.variantName_ === y_.variantName_) && ((x_.newtype_ === y_.newtype_) && ((x_.loneVariant_ === y_.loneVariant_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.arguments_, y_.arguments_))))
}
}
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
}
};

export const ff_core_Ordering_Order$ff_compiler_JsEmitter_ProcessedVariantCase = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const variantNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variantName_, y_.variantName_);
if((variantNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variantNameOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const loneVariantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.loneVariant_, y_.loneVariant_);
if((loneVariantOrdering_ !== ff_core_Ordering.OrderingSame())) {
return loneVariantOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const variantNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variantName_, y_.variantName_);
if((variantNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variantNameOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const loneVariantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.loneVariant_, y_.loneVariant_);
if((loneVariantOrdering_ !== ff_core_Ordering.OrderingSame())) {
return loneVariantOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
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
return ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
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
return ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_JsEmitter_ProcessedVariantCase = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variantName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.newtype_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.loneVariant_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.arguments_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
return ff_compiler_JsEmitter.ProcessedVariantCase(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
{
return ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variantName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.newtype_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.loneVariant_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.arguments_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
return ff_compiler_JsEmitter.ProcessedVariantCase(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
{
return ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
}
};
