

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_JsImporter from "../../ff/compiler/JsImporter.mjs"

import * as ff_compiler_Patterns from "../../ff/compiler/Patterns.mjs"

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

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type JsEmitter
export function JsEmitter(otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, emittingAsync_, tailCallUsed_) {
return {otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, emittingAsync_, tailCallUsed_};
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

export const primitiveTypes_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Bool.Bool", ff_core_List.Link("ff:core/Char.Char", ff_core_List.Link("ff:core/Int.Int", ff_core_List.Link("ff:core/Float.Float", ff_core_List.Link("ff:core/String.String", ff_core_List.Empty()))))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);

export function make_(otherModules_, emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((ff_compiler_Syntax.PackagePair_groupName(m_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(m_.file_, 3));
return ff_core_Pair.Pair(moduleName_, m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.make_(), emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, false, false)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function detectIfElse_(term_) {
{
const term_a = term_;
{
if(term_a.ECall) {
const at_ = term_a.at_;
if(term_a.target_.StaticCall) {
if(term_a.target_.name_ == "ff:core/Core.if") {
if(term_a.arguments_.Link) {
const condition_ = term_a.arguments_.head_;
if(term_a.arguments_.tail_.Link) {
const body_ = term_a.arguments_.tail_.head_;
if(term_a.arguments_.tail_.tail_.Empty) {
return ff_core_List.Link(ff_core_Pair.Pair(condition_.value_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), ff_core_List.Empty())
return
}
}
}
}
}
}
}
{
if(term_a.ECall) {
const at_ = term_a.at_;
if(term_a.target_.StaticCall) {
if(term_a.target_.name_ == "ff:core/Option.Option_elseIf") {
if(term_a.arguments_.Link) {
const option_ = term_a.arguments_.head_;
if(term_a.arguments_.tail_.Link) {
const condition_ = term_a.arguments_.tail_.head_;
if(term_a.arguments_.tail_.tail_.Link) {
const body_ = term_a.arguments_.tail_.tail_.head_;
if(term_a.arguments_.tail_.tail_.tail_.Empty) {
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return ff_core_List.Empty()
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), list_)
}
return
}
}
}
}
}
}
}
}
{
if(term_a.ECall) {
const at_ = term_a.at_;
if(term_a.target_.StaticCall) {
if(term_a.target_.name_ == "ff:core/Option.Option_else") {
if(term_a.arguments_.Link) {
const option_ = term_a.arguments_.head_;
if(term_a.arguments_.tail_.Link) {
const body_ = term_a.arguments_.tail_.head_;
if(term_a.arguments_.tail_.tail_.Empty) {
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return ff_core_List.Empty()
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", ff_core_List.Empty(), ff_core_Option.None()), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), list_)
}
return
}
}
}
}
}
}
}
{
return ff_core_List.Empty()
return
}
}
}

export function invokeImmediately_(function_) {
{
const function_a = function_;
{
if(function_a.ELambda) {
const effect_ = function_a.lambda_.effect_;
if(function_a.lambda_.cases_.Link) {
if(function_a.lambda_.cases_.head_.patterns_.Empty) {
if(function_a.lambda_.cases_.head_.guards_.Empty) {
const body_ = function_a.lambda_.cases_.head_.body_;
if(function_a.lambda_.cases_.tail_.Empty) {
return body_
return
}
}
}
}
}
}
{
const effect_ = ff_compiler_Syntax.TConstructor(function_.at_, "Q$", ff_core_List.Empty());
return ff_compiler_Syntax.ECall(function_.at_, ff_compiler_Syntax.DynamicCall(function_, false), effect_, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty())
return
}
}
}

export function extractTypeName_(type_) {
{
const type_a = type_;
{
if(type_a.TVariable) {
const at_ = type_a.at_;
const index_ = type_a.index_;
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
return
}
}
{
if(type_a.TConstructor) {
const t_ = type_a;
return t_.name_
return
}
}
}
}

export function firstTypeName_(types_) {
return (((_1) => {
{
if(_1.TConstructor) {
const t_ = _1;
return t_
return
}
}
{
if(_1.TVariable) {
const t_ = _1;
return ff_compiler_JsEmitter.fail_(t_.at_, " is still a unification variable")
return
}
}
}))(ff_core_List.List_grabFirst(types_)).name_
}

export function makeDictionaryName_(traitName_, typeName_) {
return ((ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(traitName_, ".", "_"), ":", "_"), "/", "_") + "$") + ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(typeName_, ".", "_"), ":", "_"), "/", "_"))
}

export function charLiteralToNumber_(charLiteral_) {
{
const charLiteral_a = charLiteral_;
{
if(charLiteral_a == "'\\t'") {
return "9"
return
}
}
{
if(charLiteral_a == "'\\n'") {
return "10"
return
}
}
{
if(charLiteral_a == "'\\r'") {
return "13"
return
}
}
{
if(charLiteral_a == "'\\\"'") {
return "34"
return
}
}
{
if(charLiteral_a == "'\\''") {
return "39"
return
}
}
{
const value_ = charLiteral_a;
return ("" + ff_core_String.String_grab(value_, 1))
return
}
}
}

export function escapeResolved_(word_) {
const parts_ = ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46));
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
{
const effect_a = effect_;
{
if(effect_a.TConstructor) {
if(effect_a.name_ == "Q$") {
return true
return
}
}
}
{
return false
return
}
}
}

export async function make_$(otherModules_, emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, $task) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((ff_compiler_Syntax.PackagePair_groupName(m_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(m_.file_, 3));
return ff_core_Pair.Pair(moduleName_, m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.make_(), emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, false, false)
}

export async function fail_$(at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function detectIfElse_$(term_, $task) {
{
const term_a = term_;
{
if(term_a.ECall) {
const at_ = term_a.at_;
if(term_a.target_.StaticCall) {
if(term_a.target_.name_ == "ff:core/Core.if") {
if(term_a.arguments_.Link) {
const condition_ = term_a.arguments_.head_;
if(term_a.arguments_.tail_.Link) {
const body_ = term_a.arguments_.tail_.head_;
if(term_a.arguments_.tail_.tail_.Empty) {
return ff_core_List.Link(ff_core_Pair.Pair(condition_.value_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), ff_core_List.Empty())
return
}
}
}
}
}
}
}
{
if(term_a.ECall) {
const at_ = term_a.at_;
if(term_a.target_.StaticCall) {
if(term_a.target_.name_ == "ff:core/Option.Option_elseIf") {
if(term_a.arguments_.Link) {
const option_ = term_a.arguments_.head_;
if(term_a.arguments_.tail_.Link) {
const condition_ = term_a.arguments_.tail_.head_;
if(term_a.arguments_.tail_.tail_.Link) {
const body_ = term_a.arguments_.tail_.tail_.head_;
if(term_a.arguments_.tail_.tail_.tail_.Empty) {
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return ff_core_List.Empty()
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), list_)
}
return
}
}
}
}
}
}
}
}
{
if(term_a.ECall) {
const at_ = term_a.at_;
if(term_a.target_.StaticCall) {
if(term_a.target_.name_ == "ff:core/Option.Option_else") {
if(term_a.arguments_.Link) {
const option_ = term_a.arguments_.head_;
if(term_a.arguments_.tail_.Link) {
const body_ = term_a.arguments_.tail_.head_;
if(term_a.arguments_.tail_.tail_.Empty) {
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_);
if(ff_core_List.List_isEmpty(list_)) {
return ff_core_List.Empty()
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", ff_core_List.Empty(), ff_core_Option.None()), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), list_)
}
return
}
}
}
}
}
}
}
{
return ff_core_List.Empty()
return
}
}
}

export async function invokeImmediately_$(function_, $task) {
{
const function_a = function_;
{
if(function_a.ELambda) {
const effect_ = function_a.lambda_.effect_;
if(function_a.lambda_.cases_.Link) {
if(function_a.lambda_.cases_.head_.patterns_.Empty) {
if(function_a.lambda_.cases_.head_.guards_.Empty) {
const body_ = function_a.lambda_.cases_.head_.body_;
if(function_a.lambda_.cases_.tail_.Empty) {
return body_
return
}
}
}
}
}
}
{
const effect_ = ff_compiler_Syntax.TConstructor(function_.at_, "Q$", ff_core_List.Empty());
return ff_compiler_Syntax.ECall(function_.at_, ff_compiler_Syntax.DynamicCall(function_, false), effect_, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty())
return
}
}
}

export async function extractTypeName_$(type_, $task) {
{
const type_a = type_;
{
if(type_a.TVariable) {
const at_ = type_a.at_;
const index_ = type_a.index_;
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
return
}
}
{
if(type_a.TConstructor) {
const t_ = type_a;
return t_.name_
return
}
}
}
}

export async function firstTypeName_$(types_, $task) {
return (((_1) => {
{
if(_1.TConstructor) {
const t_ = _1;
return t_
return
}
}
{
if(_1.TVariable) {
const t_ = _1;
return ff_compiler_JsEmitter.fail_(t_.at_, " is still a unification variable")
return
}
}
}))(ff_core_List.List_grabFirst(types_)).name_
}

export async function makeDictionaryName_$(traitName_, typeName_, $task) {
return ((ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(traitName_, ".", "_"), ":", "_"), "/", "_") + "$") + ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(typeName_, ".", "_"), ":", "_"), "/", "_"))
}

export async function charLiteralToNumber_$(charLiteral_, $task) {
{
const charLiteral_a = charLiteral_;
{
if(charLiteral_a == "'\\t'") {
return "9"
return
}
}
{
if(charLiteral_a == "'\\n'") {
return "10"
return
}
}
{
if(charLiteral_a == "'\\r'") {
return "13"
return
}
}
{
if(charLiteral_a == "'\\\"'") {
return "34"
return
}
}
{
if(charLiteral_a == "'\\''") {
return "39"
return
}
}
{
const value_ = charLiteral_a;
return ("" + ff_core_String.String_grab(value_, 1))
return
}
}
}

export async function escapeResolved_$(word_, $task) {
const parts_ = ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46));
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
{
const effect_a = effect_;
{
if(effect_a.TConstructor) {
if(effect_a.name_ == "Q$") {
return true
return
}
}
}
{
return false
return
}
}
}

export function JsEmitter_emitModule(self_, packagePair_, module_) {
const selfImport_ = ((((((((("import * as " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "_")) + "_") + ff_core_String.String_dropLast(module_.file_, 3)) + " ") + "from \"../../") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".mjs\"");
const imports_ = ff_core_List.List_flatten(ff_core_List.Link(ff_core_Option.Option_toList(ff_core_Option.Option_map(self_.compilerModulePath_, ((_w1) => {
return (("import * as $firefly_compiler from '" + ff_core_Path.Path_url(_w1)) + "'")
}))), ff_core_List.Link(ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((i_) => {
return ff_core_Pair.Pair(i_.package_, i_.file_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitImportDefinition(self_, _w1)
})), ff_core_List.Empty())));
const parts_ = ff_core_List.Link((ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 === selfImport_)
}))
? imports_
: ff_core_List.Link(selfImport_, imports_)), ff_core_List.Link(ff_core_List.List_map(module_.types_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition(self_, _w1)
})), ff_core_List.Link(ff_core_List.List_map(module_.lets_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, _w1, false, false))
})), ff_core_List.Link(ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, ""))
})), ff_core_List.Link(ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
}))
})), ff_core_List.Link(ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition(self_, _w1)
})), ff_core_List.Link(ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitInstanceDefinition(self_, _w1)
})), ff_core_List.Link((self_.isMainModule_
? ff_compiler_JsEmitter.JsEmitter_emitRun(self_, module_.functions_, packagePair_, ((packagePair_.group_ === "ff") && (packagePair_.name_ === "compiler")))
: ff_core_List.Empty()), ff_core_List.Empty()))))))));
const ignoreJsImports_ = (((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && (packagePair_.group_ === "ff")) && (packagePair_.name_ === "core"))
? ff_core_List.Link("esbuild", ff_core_List.Empty())
: ff_core_List.Empty());
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (ff_core_List.List_join(ff_core_List.List_map(ff_core_List.Link(jsImports_, parts_), ((_w1) => {
return ff_core_List.List_join(_w1, "\n\n")
})), "\n\n") + "\n")
}

export function JsEmitter_withEmittingAsync(self_, body_) {
try {
self_.emittingAsync_ = true;
return body_()
} finally {
self_.emittingAsync_ = false
}
}

export function JsEmitter_emitRun(self_, functions_, mainPackagePair_, bootstrapping_) {
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
return ff_core_List.Link(ff_core_List.List_join(ff_core_List.Link("export async function $run$(fireflyPath_, arguments_) {", ff_core_List.Link("Error.stackTraceLimit = 50", ff_core_List.Link("const $task = {controller: new AbortController(), subtasks: new Set(), promise: new Promise(() => {}), started: performance.now() * 0.001}", ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link("let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.Link("let system = {", ff_core_List.Link("task_: $task,", ff_core_List.Link("array_: arguments_,", ff_core_List.Link("fireflyPath_: fireflyPath_,", ff_core_List.Link((((("mainPackagePair_: {group_: \"" + mainPackagePair_.group_) + "\", name_: \"") + mainPackagePair_.name_) + "\"},"), ff_core_List.Link((("executableMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable())
? "true"
: "false")) + ","), ff_core_List.Link(("buildMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false")), ff_core_List.Link("}", ff_core_List.Link("try {", ff_core_List.List_addAll(((!ff_core_Option.Option_isEmpty(buildMainFunction_))
? ff_core_List.Link("await buildMain_$(system, $task)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link((("await " + mainName_) + "_$(system, $task)"), ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? ff_core_List.Link("await $firefly_compiler.internalCreateExecutable_$(system, '.firefly/output/executable/Main.bundle.js', '.firefly/output', ['host'], system.assets_, $task)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.Link("} finally {", ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link("ff_core_Task.Task_abort$($task)", ff_core_List.Link("clearInterval(interval)", ff_core_List.Empty()))
: ff_core_List.Empty()), ff_core_List.Link("}", ff_core_List.Link("}", (((_1) => {
{
if(_1.EmitBrowser) {
return ff_core_List.Link("queueMicrotask(async () => {", ff_core_List.Link("await $run$(null, [])", ff_core_List.Link("})", ff_core_List.Empty())))
return
}
}
{
if(_1.EmitNode) {
const _guard1 = bootstrapping_;
if(_guard1) {
return ff_core_List.Link("import * as path from 'node:path'", ff_core_List.Link("queueMicrotask(async () => {", ff_core_List.Link("let fireflyPath_ = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(process.argv[1])))))", ff_core_List.Link("await $run$(fireflyPath_, process.argv.slice(2))", ff_core_List.Link("})", ff_core_List.Empty())))))
return
}
}
}
{
if(_1.EmitExecutable) {
return ff_core_List.Link("queueMicrotask(async () => {", ff_core_List.Link("await $run$(null, process.argv.slice(2))", ff_core_List.Link("})", ff_core_List.Empty())))
return
}
}
{
return ff_core_List.Empty()
return
}
}))(self_.emitTarget_))))))))))))))))))))), "\n"), ff_core_List.Empty())
})), (() => {
return ff_core_List.Empty()
}))
}

export function JsEmitter_emitImportDefinition(self_, definition_) {
return ((((((((((((("import * as " + definition_.package_.group_) + "_") + definition_.package_.name_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.group_) + "/") + definition_.package_.name_) + "/") + definition_.file_) + ".mjs\"")
}

export function JsEmitter_emitLetDefinition(self_, definition_, mutable_, async_) {
const mutability_ = (mutable_
? "let"
: "const");
const valueCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_, async_);
return (((((mutability_ + " ") + ff_compiler_JsEmitter.escapeKeyword_(definition_.name_)) + " = ") + valueCode_) + ";")
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
return ff_core_List.List_join(ff_core_List.List_addAll(syncMethods_, asyncMethods_), "\n\n")
}

export function JsEmitter_emitInstanceDefinition(self_, definition_) {
const name_ = ff_compiler_JsEmitter.makeDictionaryName_(definition_.traitName_, ff_compiler_JsEmitter.firstTypeName_(definition_.typeArguments_));
const methods_ = ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "")
})), ((_w1) => {
return ff_core_String.String_dropFirst(_w1, ff_core_String.String_size("function "))
}));
const asyncMethods_ = ff_compiler_JsEmitter.JsEmitter_withEmittingAsync(self_, (() => {
return ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "")
})), ((_w1) => {
return ("async " + ff_core_String.String_dropFirst(_w1, ff_core_String.String_size("async function ")))
}))
}));
const body_ = (("{\n" + ff_core_List.List_join(ff_core_List.List_addAll(methods_, asyncMethods_), ",\n")) + "\n}");
{
const _1 = definition_.constraints_;
{
if(_1.Empty) {
return (((("export const " + name_) + " = ") + body_) + ";")
return
}
}
{
const constraints_ = _1;
const dictionaries_ = ff_core_List.List_map(constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
return (((((("export function " + name_) + "(") + ff_core_List.List_join(dictionaries_, ", ")) + ") { return ") + body_) + "}")
return
}
}
}

export function JsEmitter_emitFunctionDefinition(self_, definition_, async_, suffix_ = "") {
const signature_ = ff_compiler_JsEmitter.JsEmitter_emitSignature(self_, definition_.signature_, async_, suffix_);
{
const _1 = ff_core_Pair.Pair(async_, definition_.body_);
{
if(!_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.syncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in sync context.');\n}")
return
}
}
}
}
{
if(_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.asyncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in async context.');\n}")
return
}
}
}
}
{
if(!_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.syncCode_.Some) {
const code_ = _1.second_.syncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
return
}
}
}
}
{
if(_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.asyncCode_.Some) {
const code_ = _1.second_.asyncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
return
}
}
}
}
{
if(_1.second_.FireflyTarget) {
const lambda_ = _1.second_.lambda_;
{
const _1 = lambda_;
{
const effect_ = _1.effect_;
if(_1.cases_.Link) {
const matchCase_ = _1.cases_.head_;
if(_1.cases_.tail_.Empty) {
const _guard1 = ff_core_List.List_all(matchCase_.patterns_, ((_1) => {
{
if(_1.PVariable) {
if(_1.name_.None) {
return true
return
}
}
}
{
return false
return
}
}));
if(_guard1) {
const body_ = ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true, async_)
}));
return (((signature_ + " {\n") + body_) + "\n}")
return
}
}
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
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true, true, async_)) + "\n}")
})), "\n");
return (((("{\n" + shadowingWorkaround_) + "\n") + casesString_) + "\n}")
}));
return (((signature_ + " {\n") + body_) + "\n}")
return
}
}
return
}
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
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const parameters_ = (("(" + ff_core_List.List_join(ff_core_List.List_addAll(parameterStrings_, ff_core_List.List_addAll(dictionaryStrings_, controller_)), ", ")) + ")");
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
return (" = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_))
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
const allFields_ = ff_core_List.List_addAll(typeDefinition_.commonFields_, definition_.fields_);
const fields_ = ff_core_List.List_join(ff_core_List.List_map(allFields_, ((_w1) => {
return ff_compiler_JsEmitter.escapeKeyword_(_w1.name_)
})), ", ");
if(ff_core_List.List_isEmpty(allFields_)) {
return ((((((((((((("const " + definition_.name_) + "$ = {") + definition_.name_) + ": true};\n") + "export function ") + definition_.name_) + "(") + fields_) + ") {\n") + "return ") + definition_.name_) + "$;\n") + "}")
} else if((ff_core_List.List_size(typeDefinition_.variants_) === 1)) {
return (((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + fields_) + "};\n") + "}")
} else {
return (((((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + definition_.name_) + ": true, ") + fields_) + "};\n") + "}")
}
}

export function JsEmitter_emitTerm(self_, term_, async_) {
{
const _1 = term_;
{
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
const _guard1 = ff_core_String.String_startsWith(value_, "\"\"\"", 0);
if(_guard1) {
return (("`" + ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(value_, 3), 3), "`", "\\`")) + "`")
return
}
}
}
{
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.EChar) {
const at_ = _1.at_;
const value_ = _1.value_;
return ff_compiler_JsEmitter.charLiteralToNumber_(value_)
return
}
}
{
if(_1.EInt) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.EFloat) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_JsEmitter.escapeResolved_(name_)
return
}
}
{
if(_1.EList) {
const at_ = _1.at_;
const items_ = _1.items_;
return ff_compiler_JsEmitter.JsEmitter_emitList(self_, items_, async_)
return
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.False") {
return "false"
return
}
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.True") {
return "true"
return
}
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Unit.Unit") {
return "(void 0)"
return
}
}
}
{
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
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.False") {
return "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}
}
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.True") {
return "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}
}
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Unit.Unit") {
return "function(_v) { return ff_core_Option.Some(_v); }"
return
}
}
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const n_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
return (((("(function(_v) { " + "return _v.") + ff_compiler_JsEmitter.escapeResolved_(n_)) + " ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
return
}
}
{
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const fields_ = _1.arguments_;
const fieldCode_ = ff_core_List.List_join(ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_))
})), ", ");
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_)) + ", ") + fieldCode_) + "}")
return
}
}
{
if(_1.EField) {
const at_ = _1.at_;
const newtype_ = _1.newtype_;
const record_ = _1.record_;
const field_ = _1.field_;
if(newtype_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_)
} else {
return ((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
}
return
}
}
{
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
if(_1.lambda_.cases_.Link) {
const patterns_ = _1.lambda_.cases_.head_.patterns_;
if(_1.lambda_.cases_.head_.guards_.Empty) {
const body_ = _1.lambda_.cases_.head_.body_;
if(_1.lambda_.cases_.tail_.Empty) {
const _guard1 = ff_core_List.List_all(patterns_, ((_1) => {
{
if(_1.PVariable) {
return true
return
}
}
{
return false
return
}
}));
if(_guard1) {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const patternParameters_ = ff_core_List.List_map(patterns_, ((_1) => {
{
if(_1.PVariable) {
const p_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.name_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), (() => {
return "_"
}))
return
}
}
{
return ff_core_Core.panic_("!")
return
}
}));
const controller_ = (newAsync_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const parameters_ = ff_core_List.List_join(ff_core_List.List_addAll(patternParameters_, controller_), ", ");
const prefix_ = (newAsync_
? "async "
: "");
return (((((("(" + prefix_) + "(") + parameters_) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, newAsync_)) + "\n})")
return
}
}
}
}
}
}
{
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const cases_ = _1.lambda_.cases_;
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const controller_ = (newAsync_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_grab(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const caseStrings_ = ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true, true, newAsync_)) + "\n}")
}));
const prefix_ = (newAsync_
? "async "
: "");
return ((((((("(" + prefix_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(escapedArguments_, controller_), ", ")) + ") => ") + "{\n") + ff_core_List.List_join(caseStrings_, "\n")) + "\n})")
return
}
}
{
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const c_ = (await_
? ", $task"
: "");
const call_ = ((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + c_) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const operator_ = _1.target_.name_;
if(_1.typeArguments_.Empty) {
if(_1.arguments_.Link) {
const value_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard1) {
return ((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, value_, async_)) + ")")
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const operator_ = _1.target_.name_;
if(_1.typeArguments_.Empty) {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard1) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
return
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.import") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.EString) {
const url_ = _1.arguments_.head_.value_.value_;
if(_1.arguments_.tail_.Empty) {
return ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", ""))
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.await") {
if(_1.arguments_.Link) {
const body_ = _1.arguments_.head_.value_;
if(_1.arguments_.tail_.Empty) {
const emittedBody_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_);
if(async_) {
return (("(await " + emittedBody_) + "($task))")
} else {
return (("(" + emittedBody_) + "())")
}
return
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.cancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "$task.controller.signal.aborted"
} else {
return "false"
}
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.throwIfCancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "((() => ff_core_Task.Task_throwIfAborted($task))())"
} else {
return ""
}
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Equal.equals") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = (ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"));
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Equal.notEquals") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = (ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"));
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.before") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " < ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.notBefore") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " >= ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.after") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " > ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.notAfter") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " <= ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Array.fillBy") {
const effect_ = _1.effect_;
if(_1.arguments_.Link) {
const size_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const at_ = _1.arguments_.tail_.head_.value_.at_;
const l_ = _1.arguments_.tail_.head_.value_.lambda_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.Link) {
const c_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.Link) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.head_.PVariable) {
const name_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.head_.name_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.tail_.Empty) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const body_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.tail_.tail_.Empty) {
const _guard1 = (!ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if(_guard1) {
const n_ = ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return ff_compiler_JsEmitter.escapeResolved_(_w1)
})), (() => {
return "i"
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const await_ = (newAsync_
? "await "
: "");
return ((((((((((((((((((await_ + "((() => {\n") + "const size = ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, size_, async_)) + ";\n") + "const result = [];\n") + "for(let ") + n_) + " = 0; ") + n_) + " < size; ") + n_) + "++) {\n") + "result.push(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, newAsync_)) + ");\n") + "}\n") + "return result;\n") + "})())")
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const name_ = _1.target_.name_;
if(_1.target_.instanceCall_) {
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
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = (((((d_ + ".") + n_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, ff_core_List.List_addAll(ds_, controller_)), ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const name_ = _1.target_.name_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
{
if(_1.Empty) {
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
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = (((functionCode_ + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, ff_core_List.List_addAll(ds_, controller_)), ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
{
if(_1.Link) {
if(_1.head_.first_.EVariant) {
if(_1.head_.first_.name_ == "ff:core/Bool.True") {
const elseBody_ = _1.head_.second_;
const list_ = _1.tail_;
return (("(" + ff_core_List.List_foldLeft(list_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, elseBody_, async_), ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_) + "\n? ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_)) + "\n: ") + otherwise_)
return
}
}))) + ")")
return
}
}
}
}
{
const list_ = _1;
return (("(" + ff_core_List.List_foldLeft(list_, "ff_core_Option.None()", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_) + "\n? ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_)) + ")\n: ") + otherwise_)
return
}
}))) + ")")
return
}
}
return
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.DynamicCall) {
const function_ = _1.target_.function_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if((!ff_core_List.List_isEmpty(dictionaries_))) {
ff_compiler_JsEmitter.fail_(at_, "Internal error: Dictionaries in lambda call")
};
const functionCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_);
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, _w1, async_)
}));
const controller_ = (await_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = (((functionCode_ + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, controller_), ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
}
{
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
if(ff_core_List.List_isEmpty(fields_)) {
return "{}"
} else {
const list_ = ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_))
}));
return (("{\n" + ff_core_List.List_join(list_, ",\n")) + "\n}")
}
return
}
}
{
if(_1.EWildcard) {
const at_ = _1.at_;
const index_ = _1.index_;
if((index_ === 0)) {
ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
};
return ("_w" + index_)
return
}
}
{
const _guard1 = async_;
if(_guard1) {
return (("(await (async function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, async_)) + "\n})())")
return
}
}
{
return (("(function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, async_)) + "\n})()")
return
}
}
}

export function JsEmitter_emitDictionary(self_, d_) {
const m_ = ((d_.moduleName_ !== "")
? (((ff_compiler_Syntax.PackagePair_groupName(d_.packagePair_, "_") + "_") + ff_core_String.String_replace(d_.moduleName_, "/", "_")) + ".")
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

export function JsEmitter_emitStatements(self_, term_, last_, async_) {
{
const _1 = term_;
{
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, f_, newAsync_, "")
}));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_))
return
}
}
{
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
return ((ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_) + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_))
return
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Unit.Unit") {
return ""
return
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_;
if(_1.before_.EVariant) {
const at_ = _1.before_.at_;
if(_1.before_.name_ == "ff:core/Unit.Unit") {
const after_ = _1.after_;
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, async_)
return
}
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
if(_1.after_.EVariant) {
const at_ = _1.after_.at_;
if(_1.after_.name_ == "ff:core/Unit.Unit") {
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, async_)
return
}
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return ((ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, async_) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, async_))
return
}
}
{
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const name_ = _1.variable_;
const value_ = _1.value_;
return ((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_))
return
}
}
{
if(_1.EAssignField) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
return ((((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_))
return
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.while") {
if(_1.arguments_.Link) {
const condition_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const body_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
return (((("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), async_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_)) + "\n}")
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.doWhile") {
if(_1.arguments_.Link) {
const doWhileBody_ = _1.arguments_.head_.value_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
if(_guard1.ESequential) {
const body_ = _guard1.before_;
const condition_ = _guard1.after_;
return ((((("while(true) {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, false, async_)) + "\nif(!") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_)) + ") break") + "\n}")
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.doWhile") {
if(_1.arguments_.Link) {
const doWhileBody_ = _1.arguments_.head_.value_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
const body_ = _guard1;
return (("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_)) + ") {}")
return
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.if") {
if(_1.arguments_.Link) {
const condition_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const body_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
return ((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_.value_, async_)) + ") {\n") + (last_
? (("return ff_core_Option.Some(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), async_)) + ")\n} else return ff_core_Option.None()")
: (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_) + "\n}")))
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.throw") {
if(_1.arguments_.Link) {
const argument_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const dictionary_ = _1.dictionaries_.head_;
if(_1.dictionaries_.tail_.Empty) {
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
const a_ = ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, argument_, async_);
return (((("throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(" + a_) + ", ") + d_) + ")})")
return
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.try") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a try without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_map") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a map without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_flatMap") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a flatMap without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_flatten") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a flatten without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_catch") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a catch without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_catchAny") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a catchAny without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_finally") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a finally without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_grab") {
if(_1.arguments_.Link) {
const argument_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, argument_.value_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.throwIfCancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "ff_core_Task.Task_throwIfAborted($task)"
} else {
return ""
}
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const name_ = _1.target_.name_;
if(_1.target_.tailCall_) {
const instanceCall_ = _1.target_.instanceCall_;
const effect_ = _1.effect_;
const arguments_ = _1.arguments_;
if(instanceCall_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Not yet implemented: Tail calls on trait methods."), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
self_.tailCallUsed_ = true;
const pair_ = ff_core_List.List_unzip(ff_core_List.List_collect(ff_core_List.List_map(arguments_, ((a_) => {
return ff_core_Option.Some(ff_core_Pair.Pair((((("const " + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r"))) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_, async_)) + ";"), ((ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_grab(a_.name_)) + " = ") + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")))))
})), ((_w1) => {
return _w1
})));
return (((("{\n" + ff_core_List.List_join(pair_.first_, "\n")) + "\n") + ff_core_List.List_join(pair_.second_, "\n")) + "\ncontinue _tailcall\n}")
return
}
}
}
}
{
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
if(_1.function_.ELambda) {
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
return ((((((((!last_)
? "do "
: "") + "{\nconst _1 = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + ";\n") + ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link("_1", ff_core_List.Empty()), _w1, true, last_, async_)) + "\n}")
})), "\n")) + "\n}") + ((!last_)
? " while(false)"
: ""))
return
}
}
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
{
if(_1.Empty) {
if(last_) {
return ("return " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_))
} else {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_)
}
return
}
}
{
if(_1.Link) {
if(_1.head_.first_.EVariant) {
if(_1.head_.first_.name_ == "ff:core/Bool.True") {
const elseBody_ = _1.head_.second_;
const list_ = _1.tail_;
const initial_ = (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, elseBody_, last_, async_)) + "\n}");
return ff_core_List.List_foldLeft(list_, initial_, ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_)) + "\n} else ") + otherwise_)
return
}
}))
return
}
}
}
}
{
const list_ = _1;
const _guard1 = (!last_);
if(_guard1) {
return ff_core_List.List_foldLeft(list_, "{}", ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_)) + "\n} else ") + otherwise_)
return
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
return (((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_)) + ") {\n") + "return ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_)) + ")\n} else ") + otherwise_)
return
}
}))
return
}
}
return
}
}
}

export function JsEmitter_emitTryCatchFinally(self_, term_, last_, async_) {
function emitCatch_(catchEffect_, cases_) {
const catchAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(catchEffect_));
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.Link("_exception.value_", ff_core_List.Link("_error", ff_core_List.Empty()));
{
const _1 = cases_;
{
if(_1.Link) {
const case_ = _1.head_;
if(_1.tail_.Empty) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, case_, false, last_, catchAsync_)
return
}
}
}
{
const cs_ = _1;
const caseStrings_ = ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, _w1, true, last_, catchAsync_)) + "\n}")
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
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_finally") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.target_.name_ == "ff:core/Core.try") {
if(_1.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.ELambda) {
const tryEffect_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.effect_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const tryBody_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.tail_.Empty) {
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const finallyEffect_ = _1.arguments_.tail_.head_.value_.lambda_.effect_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const finallyBody_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.tail_.tail_.Empty) {
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
return ff_core_Option.Some((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, tryAsync_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, finallyAsync_)) + "\n}"))
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_catch") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.target_.name_ == "ff:core/Core.try") {
if(_1.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.ELambda) {
const tryEffect_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.effect_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const tryBody_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.tail_.Empty) {
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const catchEffect_ = _1.arguments_.tail_.head_.value_.lambda_.effect_;
const cases_ = _1.arguments_.tail_.head_.value_.lambda_.cases_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const dictionary_ = _1.dictionaries_.head_;
if(_1.dictionaries_.tail_.Empty) {
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
return ff_core_Option.Some(((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n}"))
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_finally") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.target_.name_ == "ff:core/Try.Try_catch") {
if(_1.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.target_.name_ == "ff:core/Core.try") {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.ELambda) {
const tryEffect_ = _1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.effect_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const tryBody_ = _1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.tail_.Link) {
if(_1.arguments_.head_.value_.arguments_.tail_.head_.value_.ELambda) {
const catchEffect_ = _1.arguments_.head_.value_.arguments_.tail_.head_.value_.lambda_.effect_;
const cases_ = _1.arguments_.head_.value_.arguments_.tail_.head_.value_.lambda_.cases_;
if(_1.arguments_.head_.value_.arguments_.tail_.tail_.Empty) {
if(_1.arguments_.head_.value_.dictionaries_.Link) {
const dictionary_ = _1.arguments_.head_.value_.dictionaries_.head_;
if(_1.arguments_.head_.value_.dictionaries_.tail_.Empty) {
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const finallyEffect_ = _1.arguments_.tail_.head_.value_.lambda_.effect_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const finallyBody_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.tail_.tail_.Empty) {
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
return ff_core_Option.Some(((((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, finallyAsync_)) + "\n}"))
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
return ff_core_Option.None()
return
}
}
}

export function JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_) {
{
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
{
if(_1.first_.Link) {
const p_ = _1.first_.head_;
const ps_ = _1.first_.tail_;
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, ff_core_List.List_grab(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), jump_, last_, async_)
return
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Link) {
const guard_ = _1.second_.head_;
const guards_ = _1.second_.tail_;
const guardName_ = ("_guard" + (ff_core_List.List_size(guards_) + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.Link(guard_.pattern_, ff_core_List.Empty()), guards_, _c.body_)
}))(matchCase_);
return ((((("const " + guardName_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_)) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link(guardName_, ff_core_List.Empty()), newCase_, jump_, last_, async_))
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
return (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, async_) + ((jump_ && last_)
? "\nreturn"
: jump_
? "\nbreak"
: ""))
return
}
}
}
}
}

export function JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, jump_, last_, async_) {
{
const _1 = pattern_;
{
if(_1.PString) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PInt) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PChar) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PVariable) {
if(_1.name_.None) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_)
return
}
}
}
{
if(_1.PVariable) {
if(_1.name_.Some) {
const name_ = _1.name_.value_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_);
return (((escaped_ !== argument_)
? (((("const " + escaped_) + " = ") + argument_) + ";\n")
: "") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_))
return
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.False") {
if(_1.patterns_.Empty) {
return (((("if(!" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_)) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.True") {
if(_1.patterns_.Empty) {
return (((("if(" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_)) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.List_addAll(patterns_, matchCase_.patterns_), _c.guards_, _c.body_)
}))(matchCase_);
return (((processed_.loneVariant_
? ""
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.List_addAll(processed_.arguments_, arguments_), newMatchCase_, jump_, last_, async_)) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
return ((((processed_.loneVariant_
? ""
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(ff_core_Option.Option_map(variable_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), ((_w1) => {
return (_w1 !== argument_)
})), ((_w1) => {
return (((("const " + _w1) + " = ") + argument_) + ";\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, jump_, last_, async_)) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PAlias) {
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_);
return (((escaped_ !== argument_)
? (((("const " + escaped_) + " = ") + argument_) + ";\n")
: "") + ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, jump_, last_, async_))
return
}
}
}
}

export function JsEmitter_emitList(self_, items_, async_) {
{
const _1 = items_;
{
if(_1.Empty) {
return "ff_core_List.Empty()"
return
}
}
{
if(_1.Link) {
const e_ = _1.head_.first_;
if(_1.head_.second_) {
if(_1.tail_.Empty) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_)
return
}
}
}
}
{
if(_1.Link) {
const e_ = _1.head_.first_;
if(!_1.head_.second_) {
const list_ = _1.tail_;
return (((("ff_core_List.Link(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitList(self_, list_, async_)) + ")")
return
}
}
}
{
if(_1.Link) {
const e_ = _1.head_.first_;
if(_1.head_.second_) {
const list_ = _1.tail_;
return (((("ff_core_List.List_addAll(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitList(self_, list_, async_)) + ")")
return
}
}
}
}
}

export function JsEmitter_processVariantCase(self_, name_, argument_) {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1));
const variantModule_ = ff_core_Map.Map_grab(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
let loneVariant_ = false;
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_;
loneVariant_ = (ff_core_List.List_size(definition_.variants_) === 1);
return ff_core_List.List_addAll(ff_core_List.List_map(definition_.commonFields_, ((_w1) => {
return _w1.name_
})), ff_core_List.List_map(variant_.fields_, ((_w1) => {
return _w1.name_
})))
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
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1));
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

export function JsEmitter_emitArgument(self_, callAt_, argument_, async_) {
{
const _1 = argument_.value_;
{
if(_1.ECall) {
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/SourceLocation.callSite") {
return (((((((((("\"" + self_.moduleName_) + ":") + callAt_.line_) + ":") + callAt_.column_) + ",") + self_.packagePair_.group_) + ",") + self_.packagePair_.name_) + "\"")
return
}
}
}
}
{
const value_ = _1;
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)
return
}
}
}

export async function JsEmitter_emitModule$(self_, packagePair_, module_, $task) {
const selfImport_ = ((((((((("import * as " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "_")) + "_") + ff_core_String.String_dropLast(module_.file_, 3)) + " ") + "from \"../../") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".mjs\"");
const imports_ = ff_core_List.List_flatten(ff_core_List.Link(ff_core_Option.Option_toList((await ff_core_Option.Option_map$(self_.compilerModulePath_, (async (_w1, $task) => {
return (("import * as $firefly_compiler from '" + (await ff_core_Path.Path_url$(_w1, $task))) + "'")
}), $task))), ff_core_List.Link((await ff_core_List.List_map$(ff_core_List.List_sortBy(module_.imports_, ((i_) => {
return ff_core_Pair.Pair(i_.package_, i_.file_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)), (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitImportDefinition$(self_, _w1, $task))
}), $task)), ff_core_List.Empty())));
const parts_ = ff_core_List.Link((ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 === selfImport_)
}))
? imports_
: ff_core_List.Link(selfImport_, imports_)), ff_core_List.Link((await ff_core_List.List_map$(module_.types_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition$(self_, _w1, $task))
}), $task)), ff_core_List.Link((await ff_core_List.List_map$(module_.lets_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitLetDefinition$(self_, _w1, false, false, $task)))
}), $task)), ff_core_List.Link((await ff_core_List.List_map$(module_.functions_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, false, "", $task)))
}), $task)), ff_core_List.Link((await ff_compiler_JsEmitter.JsEmitter_withEmittingAsync$(self_, (async ($task) => {
return (await ff_core_List.List_map$(module_.functions_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, true, "", $task)))
}), $task))
}), $task)), ff_core_List.Link((await ff_core_List.List_map$(module_.extends_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition$(self_, _w1, $task))
}), $task)), ff_core_List.Link((await ff_core_List.List_map$(module_.instances_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitInstanceDefinition$(self_, _w1, $task))
}), $task)), ff_core_List.Link((self_.isMainModule_
? (await ff_compiler_JsEmitter.JsEmitter_emitRun$(self_, module_.functions_, packagePair_, ((packagePair_.group_ === "ff") && (packagePair_.name_ === "compiler")), $task))
: ff_core_List.Empty()), ff_core_List.Empty()))))))));
const ignoreJsImports_ = (((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && (packagePair_.group_ === "ff")) && (packagePair_.name_ === "core"))
? ff_core_List.Link("esbuild", ff_core_List.Empty())
: ff_core_List.Empty());
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (ff_core_List.List_join(ff_core_List.List_map(ff_core_List.Link(jsImports_, parts_), ((_w1) => {
return ff_core_List.List_join(_w1, "\n\n")
})), "\n\n") + "\n")
}

export async function JsEmitter_withEmittingAsync$(self_, body_, $task) {
try {
self_.emittingAsync_ = true;
return (await body_($task))
} finally {
self_.emittingAsync_ = false
}
}

export async function JsEmitter_emitRun$(self_, functions_, mainPackagePair_, bootstrapping_, $task) {
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
return ff_core_List.Link(ff_core_List.List_join(ff_core_List.Link("export async function $run$(fireflyPath_, arguments_) {", ff_core_List.Link("Error.stackTraceLimit = 50", ff_core_List.Link("const $task = {controller: new AbortController(), subtasks: new Set(), promise: new Promise(() => {}), started: performance.now() * 0.001}", ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link("let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.Link("let system = {", ff_core_List.Link("task_: $task,", ff_core_List.Link("array_: arguments_,", ff_core_List.Link("fireflyPath_: fireflyPath_,", ff_core_List.Link((((("mainPackagePair_: {group_: \"" + mainPackagePair_.group_) + "\", name_: \"") + mainPackagePair_.name_) + "\"},"), ff_core_List.Link((("executableMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable())
? "true"
: "false")) + ","), ff_core_List.Link(("buildMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false")), ff_core_List.Link("}", ff_core_List.Link("try {", ff_core_List.List_addAll(((!ff_core_Option.Option_isEmpty(buildMainFunction_))
? ff_core_List.Link("await buildMain_$(system, $task)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link((("await " + mainName_) + "_$(system, $task)"), ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? ff_core_List.Link("await $firefly_compiler.internalCreateExecutable_$(system, '.firefly/output/executable/Main.bundle.js', '.firefly/output', ['host'], system.assets_, $task)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.Link("} finally {", ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link("ff_core_Task.Task_abort$($task)", ff_core_List.Link("clearInterval(interval)", ff_core_List.Empty()))
: ff_core_List.Empty()), ff_core_List.Link("}", ff_core_List.Link("}", (((_1) => {
{
if(_1.EmitBrowser) {
return ff_core_List.Link("queueMicrotask(async () => {", ff_core_List.Link("await $run$(null, [])", ff_core_List.Link("})", ff_core_List.Empty())))
return
}
}
{
if(_1.EmitNode) {
const _guard1 = bootstrapping_;
if(_guard1) {
return ff_core_List.Link("import * as path from 'node:path'", ff_core_List.Link("queueMicrotask(async () => {", ff_core_List.Link("let fireflyPath_ = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(process.argv[1])))))", ff_core_List.Link("await $run$(fireflyPath_, process.argv.slice(2))", ff_core_List.Link("})", ff_core_List.Empty())))))
return
}
}
}
{
if(_1.EmitExecutable) {
return ff_core_List.Link("queueMicrotask(async () => {", ff_core_List.Link("await $run$(null, process.argv.slice(2))", ff_core_List.Link("})", ff_core_List.Empty())))
return
}
}
{
return ff_core_List.Empty()
return
}
}))(self_.emitTarget_))))))))))))))))))))), "\n"), ff_core_List.Empty())
})), (() => {
return ff_core_List.Empty()
}))
}

export async function JsEmitter_emitImportDefinition$(self_, definition_, $task) {
return ((((((((((((("import * as " + definition_.package_.group_) + "_") + definition_.package_.name_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.group_) + "/") + definition_.package_.name_) + "/") + definition_.file_) + ".mjs\"")
}

export async function JsEmitter_emitLetDefinition$(self_, definition_, mutable_, async_, $task) {
const mutability_ = (mutable_
? "let"
: "const");
const valueCode_ = (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, definition_.value_, async_, $task));
return (((((mutability_ + " ") + ff_compiler_JsEmitter.escapeKeyword_(definition_.name_)) + " = ") + valueCode_) + ";")
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
const syncMethods_ = (await ff_core_List.List_map$(methods_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, false, "", $task)))
}), $task));
const asyncMethods_ = (await ff_compiler_JsEmitter.JsEmitter_withEmittingAsync$(self_, (async ($task) => {
return (await ff_core_List.List_map$(methods_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, true, "", $task)))
}), $task))
}), $task));
return ff_core_List.List_join(ff_core_List.List_addAll(syncMethods_, asyncMethods_), "\n\n")
}

export async function JsEmitter_emitInstanceDefinition$(self_, definition_, $task) {
const name_ = ff_compiler_JsEmitter.makeDictionaryName_(definition_.traitName_, ff_compiler_JsEmitter.firstTypeName_(definition_.typeArguments_));
const methods_ = ff_core_List.List_map((await ff_core_List.List_map$(definition_.methods_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, false, "", $task))
}), $task)), ((_w1) => {
return ff_core_String.String_dropFirst(_w1, ff_core_String.String_size("function "))
}));
const asyncMethods_ = (await ff_compiler_JsEmitter.JsEmitter_withEmittingAsync$(self_, (async ($task) => {
return ff_core_List.List_map((await ff_core_List.List_map$(definition_.methods_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, true, "", $task))
}), $task)), ((_w1) => {
return ("async " + ff_core_String.String_dropFirst(_w1, ff_core_String.String_size("async function ")))
}))
}), $task));
const body_ = (("{\n" + ff_core_List.List_join(ff_core_List.List_addAll(methods_, asyncMethods_), ",\n")) + "\n}");
{
const _1 = definition_.constraints_;
{
if(_1.Empty) {
return (((("export const " + name_) + " = ") + body_) + ";")
return
}
}
{
const constraints_ = _1;
const dictionaries_ = ff_core_List.List_map(constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
return (((((("export function " + name_) + "(") + ff_core_List.List_join(dictionaries_, ", ")) + ") { return ") + body_) + "}")
return
}
}
}

export async function JsEmitter_emitFunctionDefinition$(self_, definition_, async_, suffix_ = "", $task) {
const signature_ = (await ff_compiler_JsEmitter.JsEmitter_emitSignature$(self_, definition_.signature_, async_, suffix_, $task));
{
const _1 = ff_core_Pair.Pair(async_, definition_.body_);
{
if(!_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.syncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in sync context.');\n}")
return
}
}
}
}
{
if(_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.asyncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in async context.');\n}")
return
}
}
}
}
{
if(!_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.syncCode_.Some) {
const code_ = _1.second_.syncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
return
}
}
}
}
{
if(_1.first_) {
if(_1.second_.ForeignTarget) {
if(_1.second_.asyncCode_.Some) {
const code_ = _1.second_.asyncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
return
}
}
}
}
{
if(_1.second_.FireflyTarget) {
const lambda_ = _1.second_.lambda_;
{
const _1 = lambda_;
{
const effect_ = _1.effect_;
if(_1.cases_.Link) {
const matchCase_ = _1.cases_.head_;
if(_1.cases_.tail_.Empty) {
const _guard1 = ff_core_List.List_all(matchCase_.patterns_, ((_1) => {
{
if(_1.PVariable) {
if(_1.name_.None) {
return true
return
}
}
}
{
return false
return
}
}));
if(_guard1) {
const body_ = (await ff_compiler_JsEmitter.JsEmitter_emitTailCall$(self_, (async ($task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, matchCase_.body_, true, async_, $task))
}), $task));
return (((signature_ + " {\n") + body_) + "\n}")
return
}
}
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
const body_ = (await ff_compiler_JsEmitter.JsEmitter_emitTailCall$(self_, (async ($task) => {
const casesString_ = ff_core_List.List_join((await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (("{\n" + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, escapedArguments_, _w1, true, true, async_, $task))) + "\n}")
}), $task)), "\n");
return (((("{\n" + shadowingWorkaround_) + "\n") + casesString_) + "\n}")
}), $task));
return (((signature_ + " {\n") + body_) + "\n}")
return
}
}
return
}
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
const parameterStrings_ = (await ff_core_List.List_map$(signature_.parameters_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitParameter$(self_, _w1, async_, $task))
}), $task));
const dictionaryStrings_ = ff_core_List.List_map(signature_.constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
const controller_ = (async_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const parameters_ = (("(" + ff_core_List.List_join(ff_core_List.List_addAll(parameterStrings_, ff_core_List.List_addAll(dictionaryStrings_, controller_)), ", ")) + ")");
const prefix_ = (async_
? "async "
: "");
const asyncSuffix_ = (async_
? "$"
: "");
return (((((prefix_ + "function ") + ff_compiler_JsEmitter.escapeKeyword_(signature_.name_)) + suffix_) + asyncSuffix_) + parameters_)
}

export async function JsEmitter_emitParameter$(self_, parameter_, async_, $task) {
const defaultValue_ = ff_core_Option.Option_else((await ff_core_Option.Option_map$(parameter_.default_, (async (_w1, $task) => {
return (" = " + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, _w1, async_, $task)))
}), $task)), (() => {
return ""
}));
return (ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_) + defaultValue_)
}

export async function JsEmitter_emitTypeDefinition$(self_, definition_, $task) {
if(definition_.newtype_) {
return ("// newtype " + definition_.name_)
} else {
return ((("// type " + definition_.name_) + "\n") + ff_core_List.List_join((await ff_core_List.List_map$(definition_.variants_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition$(self_, definition_, _w1, $task))
}), $task)), "\n"))
}
}

export async function JsEmitter_emitVariantDefinition$(self_, typeDefinition_, definition_, $task) {
const allFields_ = ff_core_List.List_addAll(typeDefinition_.commonFields_, definition_.fields_);
const fields_ = ff_core_List.List_join(ff_core_List.List_map(allFields_, ((_w1) => {
return ff_compiler_JsEmitter.escapeKeyword_(_w1.name_)
})), ", ");
if(ff_core_List.List_isEmpty(allFields_)) {
return ((((((((((((("const " + definition_.name_) + "$ = {") + definition_.name_) + ": true};\n") + "export function ") + definition_.name_) + "(") + fields_) + ") {\n") + "return ") + definition_.name_) + "$;\n") + "}")
} else if((ff_core_List.List_size(typeDefinition_.variants_) === 1)) {
return (((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + fields_) + "};\n") + "}")
} else {
return (((((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + definition_.name_) + ": true, ") + fields_) + "};\n") + "}")
}
}

export async function JsEmitter_emitTerm$(self_, term_, async_, $task) {
{
const _1 = term_;
{
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
const _guard1 = ff_core_String.String_startsWith(value_, "\"\"\"", 0);
if(_guard1) {
return (("`" + ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(value_, 3), 3), "`", "\\`")) + "`")
return
}
}
}
{
if(_1.EString) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.EChar) {
const at_ = _1.at_;
const value_ = _1.value_;
return ff_compiler_JsEmitter.charLiteralToNumber_(value_)
return
}
}
{
if(_1.EInt) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.EFloat) {
const at_ = _1.at_;
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_JsEmitter.escapeResolved_(name_)
return
}
}
{
if(_1.EList) {
const at_ = _1.at_;
const items_ = _1.items_;
return (await ff_compiler_JsEmitter.JsEmitter_emitList$(self_, items_, async_, $task))
return
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.False") {
return "false"
return
}
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.True") {
return "true"
return
}
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Unit.Unit") {
return "(void 0)"
return
}
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const arguments_ = _1.arguments_;
const argumentsString_ = ff_core_List.List_join((await ff_core_List.List_map$(ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_)), (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, _w1, async_, $task))
}), $task)), ", ");
const newtype_ = (await ff_compiler_JsEmitter.JsEmitter_processVariant$(self_, name_, $task));
if(newtype_) {
return argumentsString_
} else {
return (((ff_compiler_JsEmitter.escapeResolved_(name_) + "(") + argumentsString_) + ")")
}
return
}
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.False") {
return "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}
}
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Bool.True") {
return "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}
}
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Unit.Unit") {
return "function(_v) { return ff_core_Option.Some(_v); }"
return
}
}
}
{
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const n_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
return (((("(function(_v) { " + "return _v.") + ff_compiler_JsEmitter.escapeResolved_(n_)) + " ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
return
}
}
{
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const fields_ = _1.arguments_;
const fieldCode_ = ff_core_List.List_join((await ff_core_List.List_map$(fields_, (async (f_, $task) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, f_.value_, async_, $task)))
}), $task)), ", ");
return (((("{..." + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, record_, async_, $task))) + ", ") + fieldCode_) + "}")
return
}
}
{
if(_1.EField) {
const at_ = _1.at_;
const newtype_ = _1.newtype_;
const record_ = _1.record_;
const field_ = _1.field_;
if(newtype_) {
return (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, record_, async_, $task))
} else {
return (((await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, record_, async_, $task)) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
}
return
}
}
{
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
if(_1.lambda_.cases_.Link) {
const patterns_ = _1.lambda_.cases_.head_.patterns_;
if(_1.lambda_.cases_.head_.guards_.Empty) {
const body_ = _1.lambda_.cases_.head_.body_;
if(_1.lambda_.cases_.tail_.Empty) {
const _guard1 = ff_core_List.List_all(patterns_, ((_1) => {
{
if(_1.PVariable) {
return true
return
}
}
{
return false
return
}
}));
if(_guard1) {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const patternParameters_ = ff_core_List.List_map(patterns_, ((_1) => {
{
if(_1.PVariable) {
const p_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.name_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), (() => {
return "_"
}))
return
}
}
{
return ff_core_Core.panic_("!")
return
}
}));
const controller_ = (newAsync_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const parameters_ = ff_core_List.List_join(ff_core_List.List_addAll(patternParameters_, controller_), ", ");
const prefix_ = (newAsync_
? "async "
: "");
return (((((("(" + prefix_) + "(") + parameters_) + ") => {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, true, newAsync_, $task))) + "\n})")
return
}
}
}
}
}
}
{
if(_1.ELambda) {
const at_ = _1.at_;
const effect_ = _1.lambda_.effect_;
const cases_ = _1.lambda_.cases_;
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const controller_ = (newAsync_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_grab(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const caseStrings_ = (await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (("{\n" + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, escapedArguments_, _w1, true, true, newAsync_, $task))) + "\n}")
}), $task));
const prefix_ = (newAsync_
? "async "
: "");
return ((((((("(" + prefix_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(escapedArguments_, controller_), ", ")) + ") => ") + "{\n") + ff_core_List.List_join(caseStrings_, "\n")) + "\n})")
return
}
}
{
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const c_ = (await_
? ", $task"
: "");
const call_ = ((((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, function_, async_, $task))) + ")(") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task))) + c_) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const operator_ = _1.target_.name_;
if(_1.typeArguments_.Empty) {
if(_1.arguments_.Link) {
const value_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard1) {
return ((("(" + operator_) + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, value_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const operator_ = _1.target_.name_;
if(_1.typeArguments_.Empty) {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)));
if(_guard1) {
return (((((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " ") + operator_) + " ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.import") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.EString) {
const url_ = _1.arguments_.head_.value_.value_;
if(_1.arguments_.tail_.Empty) {
return ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", ""))
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.await") {
if(_1.arguments_.Link) {
const body_ = _1.arguments_.head_.value_;
if(_1.arguments_.tail_.Empty) {
const emittedBody_ = (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task));
if(async_) {
return (("(await " + emittedBody_) + "($task))")
} else {
return (("(" + emittedBody_) + "())")
}
return
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.cancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "$task.controller.signal.aborted"
} else {
return "false"
}
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.throwIfCancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "((() => ff_core_Task.Task_throwIfAborted($task))())"
} else {
return ""
}
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Equal.equals") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = (ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"));
if(_guard1) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " === ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Equal.notEquals") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = (ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"));
if(_guard1) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " !== ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.before") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " < ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.notBefore") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " >= ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.after") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " > ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Ordering.notAfter") {
if(_1.arguments_.Link) {
const left_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const right_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const typeName_ = _1.dictionaries_.head_.typeName_;
if(_1.dictionaries_.head_.dictionaries_.Empty) {
if(_1.dictionaries_.tail_.Empty) {
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " <= ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
return
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Array.fillBy") {
const effect_ = _1.effect_;
if(_1.arguments_.Link) {
const size_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const at_ = _1.arguments_.tail_.head_.value_.at_;
const l_ = _1.arguments_.tail_.head_.value_.lambda_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.Link) {
const c_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.Link) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.head_.PVariable) {
const name_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.head_.name_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.tail_.Empty) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const body_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.tail_.tail_.Empty) {
const _guard1 = (!ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if(_guard1) {
const n_ = ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((_w1) => {
return ff_compiler_JsEmitter.escapeResolved_(_w1)
})), (() => {
return "i"
}));
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const await_ = (newAsync_
? "await "
: "");
return ((((((((((((((((((await_ + "((() => {\n") + "const size = ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, size_, async_, $task))) + ";\n") + "const result = [];\n") + "for(let ") + n_) + " = 0; ") + n_) + " < size; ") + n_) + "++) {\n") + "result.push(") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, newAsync_, $task))) + ");\n") + "}\n") + "return result;\n") + "})())")
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const name_ = _1.target_.name_;
if(_1.target_.instanceCall_) {
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const dictionaryStrings_ = (await ff_core_List.List_map$(dictionaries_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, _w1, $task))
}), $task));
const ds_ = ff_core_List.List_dropFirst(dictionaryStrings_, 1);
const d_ = ff_core_List.List_grabFirst(dictionaryStrings_);
const asyncSuffix_ = (await_
? "$"
: "");
const n_ = (ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))) + asyncSuffix_);
const emittedArguments_ = (await ff_core_List.List_map$(arguments_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, _w1, async_, $task))
}), $task));
const controller_ = (await_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = (((((d_ + ".") + n_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, ff_core_List.List_addAll(ds_, controller_)), ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const name_ = _1.target_.name_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
{
if(_1.Empty) {
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const ds_ = (await ff_core_List.List_map$(dictionaries_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, _w1, $task))
}), $task));
const functionCode_ = (ff_compiler_JsEmitter.escapeResolved_(name_) + (await_
? "$"
: ""));
const emittedArguments_ = (await ff_core_List.List_map$(arguments_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, _w1, async_, $task))
}), $task));
const controller_ = (await_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = (((functionCode_ + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, ff_core_List.List_addAll(ds_, controller_)), ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
{
if(_1.Link) {
if(_1.head_.first_.EVariant) {
if(_1.head_.first_.name_ == "ff:core/Bool.True") {
const elseBody_ = _1.head_.second_;
const list_ = _1.tail_;
return (("(" + (await ff_core_List.List_foldLeft$(list_, (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, elseBody_, async_, $task)), (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return (((((await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task)) + "\n? ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task))) + "\n: ") + otherwise_)
return
}
}), $task))) + ")")
return
}
}
}
}
{
const list_ = _1;
return (("(" + (await ff_core_List.List_foldLeft$(list_, "ff_core_Option.None()", (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return (((((await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task)) + "\n? ff_core_Option.Some(") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task))) + ")\n: ") + otherwise_)
return
}
}), $task))) + ")")
return
}
}
return
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.DynamicCall) {
const function_ = _1.target_.function_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
if((!ff_core_List.List_isEmpty(dictionaries_))) {
ff_compiler_JsEmitter.fail_(at_, "Internal error: Dictionaries in lambda call")
};
const functionCode_ = (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, function_, async_, $task));
const emittedArguments_ = (await ff_core_List.List_map$(arguments_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, _w1, async_, $task))
}), $task));
const controller_ = (await_
? ff_core_List.Link("$task", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = (((functionCode_ + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, controller_), ", ")) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
}
}
{
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
if(ff_core_List.List_isEmpty(fields_)) {
return "{}"
} else {
const list_ = (await ff_core_List.List_map$(fields_, (async (f_, $task) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + ": ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, f_.value_, async_, $task)))
}), $task));
return (("{\n" + ff_core_List.List_join(list_, ",\n")) + "\n}")
}
return
}
}
{
if(_1.EWildcard) {
const at_ = _1.at_;
const index_ = _1.index_;
if((index_ === 0)) {
ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
};
return ("_w" + index_)
return
}
}
{
const _guard1 = async_;
if(_guard1) {
return (("(await (async function() {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, term_, true, async_, $task))) + "\n})())")
return
}
}
{
return (("(function() {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, term_, true, async_, $task))) + "\n})()")
return
}
}
}

export async function JsEmitter_emitDictionary$(self_, d_, $task) {
const m_ = ((d_.moduleName_ !== "")
? (((ff_compiler_Syntax.PackagePair_groupName(d_.packagePair_, "_") + "_") + ff_core_String.String_replace(d_.moduleName_, "/", "_")) + ".")
: "");
const c_ = (m_ + ff_compiler_JsEmitter.makeDictionaryName_(d_.traitName_, d_.typeName_));
if(ff_core_List.List_isEmpty(d_.dictionaries_)) {
return c_
} else {
return (((c_ + "(") + ff_core_List.List_join((await ff_core_List.List_map$(d_.dictionaries_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, _w1, $task))
}), $task)), ", ")) + ")")
}
}

export async function JsEmitter_emitStatements$(self_, term_, last_, async_, $task) {
{
const _1 = term_;
{
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionStrings_ = (await ff_core_List.List_map$(functions_, (async (f_, $task) => {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
return (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, f_, newAsync_, "", $task))
}), $task));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task)))
return
}
}
{
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
return (((await ff_compiler_JsEmitter.JsEmitter_emitLetDefinition$(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_, $task)) + "\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task)))
return
}
}
{
if(_1.EVariant) {
const at_ = _1.at_;
if(_1.name_ == "ff:core/Unit.Unit") {
return ""
return
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_;
if(_1.before_.EVariant) {
const at_ = _1.before_.at_;
if(_1.before_.name_ == "ff:core/Unit.Unit") {
const after_ = _1.after_;
return (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, after_, last_, async_, $task))
return
}
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
if(_1.after_.EVariant) {
const at_ = _1.after_.at_;
if(_1.after_.name_ == "ff:core/Unit.Unit") {
return (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, before_, false, async_, $task))
return
}
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return (((await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, before_, false, async_, $task)) + ";\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, after_, last_, async_, $task)))
return
}
}
{
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const name_ = _1.variable_;
const value_ = _1.value_;
return ((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task)))
return
}
}
{
if(_1.EAssignField) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
return (((((((await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, record_, async_, $task)) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task)))
return
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.while") {
if(_1.arguments_.Link) {
const condition_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const body_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
return (((("while(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), async_, $task))) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_, $task))) + "\n}")
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.doWhile") {
if(_1.arguments_.Link) {
const doWhileBody_ = _1.arguments_.head_.value_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
if(_guard1.ESequential) {
const body_ = _guard1.before_;
const condition_ = _guard1.after_;
return ((((("while(true) {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, false, async_, $task))) + "\nif(!") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task))) + ") break") + "\n}")
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.doWhile") {
if(_1.arguments_.Link) {
const doWhileBody_ = _1.arguments_.head_.value_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
const body_ = _guard1;
return (("while(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task))) + ") {}")
return
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.if") {
if(_1.arguments_.Link) {
const condition_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Link) {
const body_ = _1.arguments_.tail_.head_;
if(_1.arguments_.tail_.tail_.Empty) {
return ((("if(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_.value_, async_, $task))) + ") {\n") + (last_
? (("return ff_core_Option.Some(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), async_, $task))) + ")\n} else return ff_core_Option.None()")
: ((await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_, $task)) + "\n}")))
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.throw") {
if(_1.arguments_.Link) {
const argument_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const dictionary_ = _1.dictionaries_.head_;
if(_1.dictionaries_.tail_.Empty) {
const d_ = (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, dictionary_, $task));
const a_ = (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, argument_, async_, $task));
return (((("throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(" + a_) + ", ") + d_) + ")})")
return
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Core.try") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a try without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_map") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a map without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_flatMap") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a flatMap without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_flatten") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a flatten without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_catch") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a catch without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_catchAny") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a catchAny without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_finally") {
const _guard1 = (!last_);
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Statements can't be a finally without a grab"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_grab") {
if(_1.arguments_.Link) {
const argument_ = _1.arguments_.head_;
if(_1.arguments_.tail_.Empty) {
const _guard1 = (await ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally$(self_, argument_.value_, last_, async_, $task));
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.throwIfCancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "ff_core_Task.Task_throwIfAborted($task)"
} else {
return ""
}
return
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const name_ = _1.target_.name_;
if(_1.target_.tailCall_) {
const instanceCall_ = _1.target_.instanceCall_;
const effect_ = _1.effect_;
const arguments_ = _1.arguments_;
if(instanceCall_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Not yet implemented: Tail calls on trait methods."), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
self_.tailCallUsed_ = true;
const pair_ = ff_core_List.List_unzip(ff_core_List.List_collect((await ff_core_List.List_map$(arguments_, (async (a_, $task) => {
return ff_core_Option.Some(ff_core_Pair.Pair((((("const " + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r"))) + " = ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, a_.value_, async_, $task))) + ";"), ((ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_grab(a_.name_)) + " = ") + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_grab(a_.name_) + "_r")))))
}), $task)), ((_w1) => {
return _w1
})));
return (((("{\n" + ff_core_List.List_join(pair_.first_, "\n")) + "\n") + ff_core_List.List_join(pair_.second_, "\n")) + "\ncontinue _tailcall\n}")
return
}
}
}
}
{
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
if(_1.function_.ELambda) {
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
return ((((((((!last_)
? "do "
: "") + "{\nconst _1 = ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task))) + ";\n") + ff_core_List.List_join((await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (("{\n" + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, ff_core_List.Link("_1", ff_core_List.Empty()), _w1, true, last_, async_, $task))) + "\n}")
}), $task)), "\n")) + "\n}") + ((!last_)
? " while(false)"
: ""))
return
}
}
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
{
if(_1.Empty) {
if(last_) {
return ("return " + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, term_, async_, $task)))
} else {
return (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, term_, async_, $task))
}
return
}
}
{
if(_1.Link) {
if(_1.head_.first_.EVariant) {
if(_1.head_.first_.name_ == "ff:core/Bool.True") {
const elseBody_ = _1.head_.second_;
const list_ = _1.tail_;
const initial_ = (("{\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, elseBody_, last_, async_, $task))) + "\n}");
return (await ff_core_List.List_foldLeft$(list_, initial_, (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task))) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task))) + "\n} else ") + otherwise_)
return
}
}), $task))
return
}
}
}
}
{
const list_ = _1;
const _guard1 = (!last_);
if(_guard1) {
return (await ff_core_List.List_foldLeft$(list_, "{}", (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task))) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task))) + "\n} else ") + otherwise_)
return
}
}), $task))
return
}
}
{
const list_ = _1;
return (await ff_core_List.List_foldLeft$(list_, "return ff_core_Option.None()", (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return (((((("if(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task))) + ") {\n") + "return ff_core_Option.Some(") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task))) + ")\n} else ") + otherwise_)
return
}
}), $task))
return
}
}
return
}
}
}

export async function JsEmitter_emitTryCatchFinally$(self_, term_, last_, async_, $task) {
async function emitCatch_$(catchEffect_, cases_, $task) {
const catchAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(catchEffect_));
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.Link("_exception.value_", ff_core_List.Link("_error", ff_core_List.Empty()));
{
const _1 = cases_;
{
if(_1.Link) {
const case_ = _1.head_;
if(_1.tail_.Empty) {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, case_, false, last_, catchAsync_, $task))
return
}
}
}
{
const cs_ = _1;
const caseStrings_ = (await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (("{\n" + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, _w1, true, last_, catchAsync_, $task))) + "\n}")
}), $task));
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
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_finally") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.target_.name_ == "ff:core/Core.try") {
if(_1.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.ELambda) {
const tryEffect_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.effect_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const tryBody_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.tail_.Empty) {
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const finallyEffect_ = _1.arguments_.tail_.head_.value_.lambda_.effect_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const finallyBody_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.tail_.tail_.Empty) {
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
return ff_core_Option.Some((((("try {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, tryBody_, last_, tryAsync_, $task))) + "\n} finally {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, finallyBody_, last_, finallyAsync_, $task))) + "\n}"))
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_catch") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.target_.name_ == "ff:core/Core.try") {
if(_1.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.ELambda) {
const tryEffect_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.effect_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const tryBody_ = _1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.tail_.Empty) {
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const catchEffect_ = _1.arguments_.tail_.head_.value_.lambda_.effect_;
const cases_ = _1.arguments_.tail_.head_.value_.lambda_.cases_;
if(_1.arguments_.tail_.tail_.Empty) {
if(_1.dictionaries_.Link) {
const dictionary_ = _1.dictionaries_.head_;
if(_1.dictionaries_.tail_.Empty) {
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, dictionary_, $task));
return ff_core_Option.Some(((((((((("try {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, tryBody_, last_, tryAsync_, $task))) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + (await emitCatch_$(catchEffect_, cases_, $task))) + "\n}"))
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/Try.Try_finally") {
if(_1.arguments_.Link) {
if(_1.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.target_.name_ == "ff:core/Try.Try_catch") {
if(_1.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.ECall) {
const at_ = _1.arguments_.head_.value_.arguments_.head_.value_.at_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.target_.StaticCall) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.target_.name_ == "ff:core/Core.try") {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.ELambda) {
const tryEffect_ = _1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.effect_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const tryBody_ = _1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.head_.value_.arguments_.tail_.Empty) {
if(_1.arguments_.head_.value_.arguments_.tail_.Link) {
if(_1.arguments_.head_.value_.arguments_.tail_.head_.value_.ELambda) {
const catchEffect_ = _1.arguments_.head_.value_.arguments_.tail_.head_.value_.lambda_.effect_;
const cases_ = _1.arguments_.head_.value_.arguments_.tail_.head_.value_.lambda_.cases_;
if(_1.arguments_.head_.value_.arguments_.tail_.tail_.Empty) {
if(_1.arguments_.head_.value_.dictionaries_.Link) {
const dictionary_ = _1.arguments_.head_.value_.dictionaries_.head_;
if(_1.arguments_.head_.value_.dictionaries_.tail_.Empty) {
if(_1.arguments_.tail_.Link) {
if(_1.arguments_.tail_.head_.value_.ELambda) {
const finallyEffect_ = _1.arguments_.tail_.head_.value_.lambda_.effect_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.Link) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.patterns_.Empty) {
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.head_.guards_.Empty) {
const finallyBody_ = _1.arguments_.tail_.head_.value_.lambda_.cases_.head_.body_;
if(_1.arguments_.tail_.head_.value_.lambda_.cases_.tail_.Empty) {
if(_1.arguments_.tail_.tail_.Empty) {
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
const d_ = (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, dictionary_, $task));
return ff_core_Option.Some(((((((((((("try {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, tryBody_, last_, tryAsync_, $task))) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + (await emitCatch_$(catchEffect_, cases_, $task))) + "\n} finally {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, finallyBody_, last_, finallyAsync_, $task))) + "\n}"))
return
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
{
return ff_core_Option.None()
return
}
}
}

export async function JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task) {
{
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
{
if(_1.first_.Link) {
const p_ = _1.first_.head_;
const ps_ = _1.first_.tail_;
return (await ff_compiler_JsEmitter.JsEmitter_emitPattern$(self_, ff_core_List.List_grab(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), jump_, last_, async_, $task))
return
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Link) {
const guard_ = _1.second_.head_;
const guards_ = _1.second_.tail_;
const guardName_ = ("_guard" + (ff_core_List.List_size(guards_) + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.Link(guard_.pattern_, ff_core_List.Empty()), guards_, _c.body_)
}))(matchCase_);
return ((((("const " + guardName_) + " = ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, guard_.term_, async_, $task))) + ";\n") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, ff_core_List.Link(guardName_, ff_core_List.Empty()), newCase_, jump_, last_, async_, $task)))
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
return ((await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, matchCase_.body_, last_, async_, $task)) + ((jump_ && last_)
? "\nreturn"
: jump_
? "\nbreak"
: ""))
return
}
}
}
}
}

export async function JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, jump_, last_, async_, $task) {
{
const _1 = pattern_;
{
if(_1.PString) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task))) + "\n}")
return
}
}
{
if(_1.PInt) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task))) + "\n}")
return
}
}
{
if(_1.PChar) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_)) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task))) + "\n}")
return
}
}
{
if(_1.PVariable) {
if(_1.name_.None) {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task))
return
}
}
}
{
if(_1.PVariable) {
if(_1.name_.Some) {
const name_ = _1.name_.value_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_);
return (((escaped_ !== argument_)
? (((("const " + escaped_) + " = ") + argument_) + ";\n")
: "") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task)))
return
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.False") {
if(_1.patterns_.Empty) {
return (((("if(!" + argument_) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task))) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.True") {
if(_1.patterns_.Empty) {
return (((("if(" + argument_) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task))) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = (await ff_compiler_JsEmitter.JsEmitter_processVariantCase$(self_, name_, argument_, $task));
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.List_addAll(patterns_, matchCase_.patterns_), _c.guards_, _c.body_)
}))(matchCase_);
return (((processed_.loneVariant_
? ""
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, ff_core_List.List_addAll(processed_.arguments_, arguments_), newMatchCase_, jump_, last_, async_, $task))) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = (await ff_compiler_JsEmitter.JsEmitter_processVariantCase$(self_, name_, argument_, $task));
return ((((processed_.loneVariant_
? ""
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(ff_core_Option.Option_map(variable_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), ((_w1) => {
return (_w1 !== argument_)
})), ((_w1) => {
return (((("const " + _w1) + " = ") + argument_) + ";\n")
})), (() => {
return ""
}))) + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, jump_, last_, async_, $task))) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PAlias) {
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_);
return (((escaped_ !== argument_)
? (((("const " + escaped_) + " = ") + argument_) + ";\n")
: "") + (await ff_compiler_JsEmitter.JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, jump_, last_, async_, $task)))
return
}
}
}
}

export async function JsEmitter_emitList$(self_, items_, async_, $task) {
{
const _1 = items_;
{
if(_1.Empty) {
return "ff_core_List.Empty()"
return
}
}
{
if(_1.Link) {
const e_ = _1.head_.first_;
if(_1.head_.second_) {
if(_1.tail_.Empty) {
return (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, e_, async_, $task))
return
}
}
}
}
{
if(_1.Link) {
const e_ = _1.head_.first_;
if(!_1.head_.second_) {
const list_ = _1.tail_;
return (((("ff_core_List.Link(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, e_, async_, $task))) + ", ") + (await ff_compiler_JsEmitter.JsEmitter_emitList$(self_, list_, async_, $task))) + ")")
return
}
}
}
{
if(_1.Link) {
const e_ = _1.head_.first_;
if(_1.head_.second_) {
const list_ = _1.tail_;
return (((("ff_core_List.List_addAll(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, e_, async_, $task))) + ", ") + (await ff_compiler_JsEmitter.JsEmitter_emitList$(self_, list_, async_, $task))) + ")")
return
}
}
}
}
}

export async function JsEmitter_processVariantCase$(self_, name_, argument_, $task) {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1));
const variantModule_ = ff_core_Map.Map_grab(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
let loneVariant_ = false;
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_grab(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_;
loneVariant_ = (ff_core_List.List_size(definition_.variants_) === 1);
return ff_core_List.List_addAll(ff_core_List.List_map(definition_.commonFields_, ((_w1) => {
return _w1.name_
})), ff_core_List.List_map(variant_.fields_, ((_w1) => {
return _w1.name_
})))
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
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1));
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

export async function JsEmitter_emitArgument$(self_, callAt_, argument_, async_, $task) {
{
const _1 = argument_.value_;
{
if(_1.ECall) {
if(_1.target_.StaticCall) {
if(_1.target_.name_ == "ff:core/SourceLocation.callSite") {
return (((((((((("\"" + self_.moduleName_) + ":") + callAt_.line_) + ":") + callAt_.column_) + ",") + self_.packagePair_.group_) + ",") + self_.packagePair_.name_) + "\"")
return
}
}
}
}
{
const value_ = _1;
return (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task))
return
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
{
const value_a = value_;
{
if(value_a.EmitNode) {
const z_ = value_a;
return "EmitNode"
return
}
}
{
if(value_a.EmitBrowser) {
const z_ = value_a;
return "EmitBrowser"
return
}
}
{
if(value_a.EmitBuild) {
const z_ = value_a;
return "EmitBuild"
return
}
}
{
if(value_a.EmitExecutable) {
const z_ = value_a;
return "EmitExecutable"
return
}
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
if(value_a.EmitNode) {
const z_ = value_a;
return "EmitNode"
return
}
}
{
if(value_a.EmitBrowser) {
const z_ = value_a;
return "EmitBrowser"
return
}
}
{
if(value_a.EmitBuild) {
const z_ = value_a;
return "EmitBuild"
return
}
}
{
if(value_a.EmitExecutable) {
const z_ = value_a;
return "EmitExecutable"
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_JsEmitter_ProcessedVariantCase = {
show_(value_) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((("ProcessedVariantCase" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variantName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.loneVariant_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.arguments_)) + ")")
return
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((("ProcessedVariantCase" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variantName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.loneVariant_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.arguments_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget = {
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
return false
return
}
}
},
async equals_$(x_, y_, $task) {
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
return false
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_JsEmitter_ProcessedVariantCase = {
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
return ((x_.variantName_ === y_.variantName_) && ((x_.newtype_ === y_.newtype_) && ((x_.loneVariant_ === y_.loneVariant_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.arguments_, y_.arguments_))))
return
}
}
},
async equals_$(x_, y_, $task) {
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
return ((x_.variantName_ === y_.variantName_) && ((x_.newtype_ === y_.newtype_) && ((x_.loneVariant_ === y_.loneVariant_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.arguments_, y_.arguments_))))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_JsEmitter_EmitTarget = {
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
function number_(z_) {
{
const z_a = z_;
{
if(z_a.EmitNode) {
return 0
return
}
}
{
if(z_a.EmitBrowser) {
return 1
return
}
}
{
if(z_a.EmitBuild) {
return 2
return
}
}
{
if(z_a.EmitExecutable) {
return 3
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
},
async compare_$(x_, y_, $task) {
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
function number_(z_) {
{
const z_a = z_;
{
if(z_a.EmitNode) {
return 0
return
}
}
{
if(z_a.EmitBrowser) {
return 1
return
}
}
{
if(z_a.EmitBuild) {
return 2
return
}
}
{
if(z_a.EmitExecutable) {
return 3
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_JsEmitter_ProcessedVariantCase = {
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
},
async compare_$(x_, y_, $task) {
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
}
};

export const ff_core_Serializable_Serializable$ff_compiler_JsEmitter_EmitTarget = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
if(value_a.EmitNode) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(value_a.EmitBrowser) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
}
{
if(value_a.EmitBuild) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
}
{
if(value_a.EmitExecutable) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1
return
}
}
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_JsEmitter.EmitNode()
return
}
}
{
if(_1 == 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_JsEmitter.EmitBrowser()
return
}
}
{
if(_1 == 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_JsEmitter.EmitBuild()
return
}
}
{
if(_1 == 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_JsEmitter.EmitExecutable()
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
{
const serialization_a = serialization_;
const value_a = value_;
{
if(value_a.EmitNode) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(value_a.EmitBrowser) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
}
{
if(value_a.EmitBuild) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
}
{
if(value_a.EmitExecutable) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1
return
}
}
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_JsEmitter.EmitNode()
return
}
}
{
if(_1 == 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_JsEmitter.EmitBrowser()
return
}
}
{
if(_1 == 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_JsEmitter.EmitBuild()
return
}
}
{
if(_1 == 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_JsEmitter.EmitExecutable()
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_JsEmitter_ProcessedVariantCase = {
serializeUsing_(serialization_, value_) {
{
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
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
return ff_compiler_JsEmitter.ProcessedVariantCase(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
{
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
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 42), 0);
return ff_compiler_JsEmitter.ProcessedVariantCase(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
}
};


