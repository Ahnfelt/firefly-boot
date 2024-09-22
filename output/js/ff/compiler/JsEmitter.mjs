

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

export const primitiveTypes_ = ff_core_List.List_toSet(["ff:core/Bool.Bool", "ff:core/Char.Char", "ff:core/Int.Int", "ff:core/Float.Float", "ff:core/String.String"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);

export function new_(otherModules_, emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((ff_compiler_Syntax.PackagePair_groupName(m_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(m_.file_, 3));
return ff_core_Pair.Pair(moduleName_, m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.new_(), emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, false, false)
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

export function extractTypeName_(type_) {
const type_a = type_;
if(type_a.TVariable) {
const at_ = type_a.at_;
const index_ = type_a.index_;
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
}
if(type_a.TConstructor) {
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
if(_1.TVariable) {
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

export async function new_$(otherModules_, emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, $task) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((ff_compiler_Syntax.PackagePair_groupName(m_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(m_.file_, 3));
return ff_core_Pair.Pair(moduleName_, m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.new_(), emitTarget_, isMainModule_, compilerModulePath_, packagePair_, moduleName_, false, false)
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

export async function extractTypeName_$(type_, $task) {
const type_a = type_;
if(type_a.TVariable) {
const at_ = type_a.at_;
const index_ = type_a.index_;
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
}
if(type_a.TConstructor) {
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
if(_1.TVariable) {
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

export function JsEmitter_emitModule(self_, packagePair_, module_) {
const selfImport_ = ((((((((("import * as " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "_")) + "_") + ff_core_String.String_dropLast(module_.file_, 3)) + " ") + "from \"../../") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".mjs\"");
const imports_ = ff_core_List.List_flatten([ff_core_Option.Option_toList(ff_core_Option.Option_map(self_.compilerModulePath_, ((_w1) => {
return (("import * as $firefly_compiler from '" + ff_core_Path.Path_url(_w1)) + "'")
}))), ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((i_) => {
return ff_core_Pair.Pair(i_.package_, i_.file_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitImportDefinition(self_, _w1)
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
})), (self_.isMainModule_
? ff_compiler_JsEmitter.JsEmitter_emitRun(self_, module_.functions_, packagePair_, ((packagePair_.group_ === "ff") && (packagePair_.name_ === "compiler")))
: [])];
const ignoreJsImports_ = (((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && (packagePair_.group_ === "ff")) && (packagePair_.name_ === "core"))
? ["esbuild"]
: []);
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (ff_core_List.List_join(ff_core_List.List_map([jsImports_, ...parts_], ((_w1) => {
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
return [ff_core_List.List_join(["export async function $run$(fireflyPath_, arguments_) {", "Error.stackTraceLimit = 50", "const $task = {controller: new AbortController(), subtasks: new Set(), promise: new Promise(() => {}), started: performance.now() * 0.001}", ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
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
? ["ff_core_Task.Task_abort$($task)", "clearInterval(interval)"]
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
return ff_core_List.List_join([...syncMethods_, ...asyncMethods_], "\n\n")
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
const _1 = ff_core_Pair.Pair(async_, definition_.body_);
if(!_1.first_ && _1.second_.ForeignTarget && _1.second_.syncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in sync context.');\n}")
}
if(_1.first_ && _1.second_.ForeignTarget && _1.second_.asyncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in async context.');\n}")
}
if(!_1.first_ && _1.second_.ForeignTarget && _1.second_.syncCode_.Some) {
const code_ = _1.second_.syncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
}
if(_1.first_ && _1.second_.ForeignTarget && _1.second_.asyncCode_.Some) {
const code_ = _1.second_.asyncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
}
if(_1.second_.FireflyTarget) {
const lambda_ = _1.second_.lambda_;
{
const _1 = lambda_;
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
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true, async_)
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
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, [], [], true, true, async_)
})), "\n");
return ((shadowingWorkaround_ + "\n") + casesString_)
}));
return (((signature_ + " {\n") + body_) + "\n}")
}
}
return
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
const allFields_ = [...typeDefinition_.commonFields_, ...definition_.fields_];
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
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_))
})), ", ");
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_)) + ", ") + fieldCode_) + "}")
}
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
return (((((("(" + prefix_) + "(") + parameters_) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true, newAsync_)) + "\n})")
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
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_grab(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const caseStrings_ = ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, [], [], true, true, newAsync_)
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
const call_ = ((((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + c_) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.typeArguments_.length === 0 && _1.arguments_.length === 1) {
const at_ = _1.at_;
const operator_ = _1.target_.name_;
const value_ = _1.arguments_[0];
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)))) {
return ((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, value_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.typeArguments_.length === 0 && _1.arguments_.length === 2) {
const at_ = _1.at_;
const operator_ = _1.target_.name_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)))) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_grab" && _1.arguments_.length === 2 && _1.arguments_[0].value_.EVariable && _1.arguments_[1].value_.EVariable) {
const at_ = _1.at_;
const x1_ = _1.arguments_[0].value_.name_;
const x2_ = _1.arguments_[1].value_.name_;
return ((((((((("(" + ff_compiler_JsEmitter.escapeResolved_(x1_)) + "[") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "] ?? ") + "ff_core_List.internalGrab_(") + ff_compiler_JsEmitter.escapeResolved_(x1_)) + ", ") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "))")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Array.Array_grab" && _1.arguments_.length === 2 && _1.arguments_[0].value_.EVariable && _1.arguments_[1].value_.EVariable) {
const at_ = _1.at_;
const x1_ = _1.arguments_[0].value_.name_;
const x2_ = _1.arguments_[1].value_.name_;
return ((((((((("(" + ff_compiler_JsEmitter.escapeResolved_(x1_)) + ".array[") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "] ?? ") + "ff_core_Array.internalGrab_(") + ff_compiler_JsEmitter.escapeResolved_(x1_)) + ", ") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "))")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.import" && _1.arguments_.length === 1 && _1.arguments_[0].value_.EString) {
const at_ = _1.at_;
const url_ = _1.arguments_[0].value_.value_;
return ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", ""))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.await" && _1.arguments_.length === 1) {
const at_ = _1.at_;
const body_ = _1.arguments_[0].value_;
const emittedBody_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_);
if(async_) {
return (("(await " + emittedBody_) + "($task))")
} else {
return (("(" + emittedBody_) + "())")
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.cancelled" && _1.arguments_.length === 0) {
const at_ = _1.at_;
if(async_) {
return "$task.controller.signal.aborted"
} else {
return "false"
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.throwIfCancelled" && _1.arguments_.length === 0) {
const at_ = _1.at_;
if(async_) {
return "((() => ff_core_Task.Task_throwIfAborted($task))())"
} else {
return ""
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Equal.equals" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Equal.notEquals" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.before" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " < ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.notBefore" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " >= ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.after" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " > ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.notAfter" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, left_, async_)) + " <= ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, right_, async_)) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.fillBy" && _1.arguments_.length === 2 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].PVariable && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const effect_ = _1.effect_;
const size_ = _1.arguments_[0];
const at_ = _1.arguments_[1].value_.at_;
const l_ = _1.arguments_[1].value_.lambda_;
const c_ = _1.arguments_[1].value_.lambda_.cases_[0];
const name_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].name_;
const body_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(effect_))) {
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
if(ff_core_String.String_contains(name_, "bundleForBrowser")) {
if((!ff_core_Option.Option_contains(ff_core_List.List_grab(arguments_, 0).name_, "system", ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
ff_core_Log.debug_(("Wrong arguments for bundleForBrowser: " + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String)).show_(ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.name_
})))));
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
};
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
return (("(" + ff_core_List.List_foldLeft(list_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, elseBody_, async_), ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_) + "\n? ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_)) + "\n: ") + otherwise_)
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
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_) + "\n? ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_)) + ")\n: ") + otherwise_)
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
const functionCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_);
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
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + ": ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_, async_))
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
if(async_) {
return (("(await (async function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, async_)) + "\n})())")
}
{
return (("(function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true, async_)) + "\n})()")
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
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, f_, newAsync_, "")
}));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_))
}
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
return ((ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_) + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_))
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return ""
}
if(_1.ESequential && _1.before_.EVariant && _1.before_.name_ === "ff:core/Unit.Unit") {
const after_ = _1.after_;
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, async_)
}
if(_1.ESequential && _1.after_.EVariant && _1.after_.name_ === "ff:core/Unit.Unit") {
const before_ = _1.before_;
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, async_)
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return ((ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false, async_) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_, async_))
}
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const name_ = _1.variable_;
const value_ = _1.value_;
return ((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_))
}
if(_1.EAssignField) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
return ((((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_, async_) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.while" && _1.arguments_.length === 2) {
const at_ = _1.at_;
const condition_ = _1.arguments_[0];
const body_ = _1.arguments_[1];
return (((("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), async_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_)) + "\n}")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.doWhile" && _1.arguments_.length === 1) {
const at_ = _1.at_;
const doWhileBody_ = _1.arguments_[0].value_;
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
if(_guard1.ESequential) {
const body_ = _guard1.before_;
const condition_ = _guard1.after_;
return ((((("while(true) {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, false, async_)) + "\nif(!") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_)) + ") break") + "\n}")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.doWhile" && _1.arguments_.length === 1) {
const at_ = _1.at_;
const doWhileBody_ = _1.arguments_[0].value_;
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
{
const body_ = _guard1;
return (("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_, async_)) + ") {}")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.if" && _1.arguments_.length === 2) {
const at_ = _1.at_;
const condition_ = _1.arguments_[0];
const body_ = _1.arguments_[1];
return ((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_.value_, async_)) + ") {\n") + (last_
? (("return ff_core_Option.Some(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), async_)) + ")\n} else return ff_core_Option.None()")
: (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_) + "\n}")))
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.throw" && _1.arguments_.length === 1 && _1.dictionaries_.length === 1) {
const at_ = _1.at_;
const argument_ = _1.arguments_[0];
const dictionary_ = _1.dictionaries_[0];
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
const a_ = ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, at_, argument_, async_);
return (((("throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(" + a_) + ", ") + d_) + ")})")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch") {
const at_ = _1.at_;
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catchAny") {
const at_ = _1.at_;
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_finally") {
const at_ = _1.at_;
const _guard1 = ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally(self_, term_, last_, async_);
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.throwIfCancelled" && _1.arguments_.length === 0) {
const at_ = _1.at_;
if(async_) {
return "ff_core_Task.Task_throwIfAborted($task)"
} else {
return ""
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.tailCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
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
}
if(_1.EPipe && _1.function_.ELambda) {
const at_ = _1.at_;
const value_ = _1.value_;
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
return ((((((((!last_)
? "do "
: "") + "{\nconst _1 = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + ";\n") + ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ["_1"], _w1, [], [], true, last_, async_)
})), "\n")) + "\n}") + ((!last_)
? " while(false)"
: ""))
return
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
if(last_) {
return ("return " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_))
} else {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_, async_)
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
const initial_ = (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, elseBody_, last_, async_)) + "\n}");
return ff_core_List.List_foldLeft(list_, initial_, ((_1, _2) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_)) + "\n} else ") + otherwise_)
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
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_, async_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_, async_)) + "\n} else ") + otherwise_)
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
const arguments_ = ["_exception.value_", "_error"];
{
const _1 = cases_;
if(_1.length === 1) {
const case_ = _1[0];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, case_, [], [], false, last_, catchAsync_)
}
{
const cs_ = _1;
const caseStrings_ = ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, _w1, [], [], true, last_, catchAsync_)
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
return ff_core_Option.Some((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, tryAsync_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, finallyAsync_)) + "\n}"))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.dictionaries_.length === 1) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.dictionaries_[0];
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, dictionary_);
return ff_core_Option.Some(((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n}"))
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
return ff_core_Option.Some(((((((((((("try {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, tryBody_, last_, tryAsync_)) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + emitCatch_(catchEffect_, cases_)) + "\n} finally {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, finallyBody_, last_, finallyAsync_)) + "\n}"))
}
{
return ff_core_Option.None()
}
}
}

export function JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, async_) {
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
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, ff_core_List.List_grab(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), conditions_, variables_, jump_, last_, async_)
return
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
if(ff_core_List.List_isEmpty(variables_)) {
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [...conditions_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_)], [], jump_, last_, async_)
}
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
const code_ = ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [], newCase_, [ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_, async_)], [], jump_, last_, async_);
return emitWrapper_(code_)
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const guard_ = _1.second_[0];
const guards_ = _1.second_.slice(1);
const guardName_ = ("_guard" + (ff_core_List.List_size(guards_) + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [guard_.pattern_], guards_, _c.body_)
}))(matchCase_);
const code_ = ((((("const " + guardName_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_)) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, [guardName_], newCase_, [], [], jump_, last_, async_));
return emitWrapper_(code_)
}
if(_1.first_.length === 0 && _1.second_.length === 0) {
const statementsCode_ = ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, async_);
const lastLine_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(statementsCode_), ((_w1) => {
return (_w1 !== 10)
})));
const returns_ = ((((((ff_core_String.String_startsWith(lastLine_, "return ", 0) || ff_core_String.String_startsWith(lastLine_, "break ", 0)) || ff_core_String.String_startsWith(lastLine_, "continue ", 0)) || ff_core_String.String_startsWith(lastLine_, "return;", 0)) || ff_core_String.String_startsWith(lastLine_, "break;", 0)) || ff_core_String.String_startsWith(lastLine_, "continue;", 0)) || ff_core_String.String_startsWith(lastLine_, "throw ", 0));
const code_ = (statementsCode_ + (((jump_ && last_) && (!returns_))
? "\nreturn"
: (jump_ && (!returns_))
? "\nbreak"
: ""));
return emitWrapper_(code_)
}
}
}

export function JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, conditions_, variables_, jump_, last_, async_) {
{
const _1 = pattern_;
if(_1.PString) {
const value_ = _1.value_;
const newConditions_ = [...conditions_, ((argument_ + " === ") + value_)];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, async_)
}
if(_1.PInt) {
const value_ = _1.value_;
const newConditions_ = [...conditions_, ((argument_ + " === ") + value_)];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, async_)
}
if(_1.PChar) {
const value_ = _1.value_;
const newConditions_ = [...conditions_, ((argument_ + " === ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_))];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, async_)
}
if(_1.PVariable && _1.name_.None) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, async_)
}
if(_1.PVariable && _1.name_.Some) {
const name_ = _1.name_.value_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, async_)
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.False" && _1.patterns_.length === 0) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, [...conditions_, ("!" + argument_)], variables_, jump_, last_, async_)
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.True" && _1.patterns_.length === 0) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, [...conditions_, argument_], variables_, jump_, last_, async_)
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
return (((argument_ + ".slice(") + ff_core_List.List_size(patterns_)) + ")")
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
const newConditions_ = [...conditions_, ((((argument_ + ".length ") + operator_) + " ") + ff_core_List.List_size(patterns_))];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, async_)
}
}
if(_1.PVariant) {
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const newConditions_ = (processed_.loneVariant_
? conditions_
: [...conditions_, ((argument_ + ".") + processed_.variantName_)]);
const newArguments_ = [...processed_.arguments_, ...arguments_];
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, async_)
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_);
const newConditions_ = (processed_.loneVariant_
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
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, newConditions_, newVariables_, jump_, last_, async_)
}
if(_1.PAlias) {
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, async_)
}
}
}

export function JsEmitter_emitList(self_, items_, async_) {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(items_, ((_1) => {
if(!_1.second_) {
const item_ = _1.first_;
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_)
}
if(_1.second_) {
const item_ = _1.first_;
return ("..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_, async_))
}
})), ", ")) + "]")
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
}

export function JsEmitter_emitArgument(self_, callAt_, argument_, async_) {
{
const _1 = argument_.value_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/SourceLocation.callSite") {
return (((((((((("\"" + self_.moduleName_) + ":") + callAt_.line_) + ":") + callAt_.column_) + ",") + self_.packagePair_.group_) + ",") + self_.packagePair_.name_) + "\"")
}
{
const value_ = _1;
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)
}
}
}

export async function JsEmitter_emitModule$(self_, packagePair_, module_, $task) {
const selfImport_ = ((((((((("import * as " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "_")) + "_") + ff_core_String.String_dropLast(module_.file_, 3)) + " ") + "from \"../../") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".mjs\"");
const imports_ = ff_core_List.List_flatten([ff_core_Option.Option_toList((await ff_core_Option.Option_map$(self_.compilerModulePath_, (async (_w1, $task) => {
return (("import * as $firefly_compiler from '" + (await ff_core_Path.Path_url$(_w1, $task))) + "'")
}), $task))), (await ff_core_List.List_map$(ff_core_List.List_sortBy(module_.imports_, ((i_) => {
return ff_core_Pair.Pair(i_.package_, i_.file_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)), (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitImportDefinition$(self_, _w1, $task))
}), $task))]);
const parts_ = [(ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 === selfImport_)
}))
? imports_
: [selfImport_, ...imports_]), (await ff_core_List.List_map$(module_.types_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition$(self_, _w1, $task))
}), $task)), (await ff_core_List.List_map$(module_.lets_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitLetDefinition$(self_, _w1, false, false, $task)))
}), $task)), (await ff_core_List.List_map$(module_.functions_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, false, "", $task)))
}), $task)), (await ff_compiler_JsEmitter.JsEmitter_withEmittingAsync$(self_, (async ($task) => {
return (await ff_core_List.List_map$(module_.functions_, (async (_w1, $task) => {
return ("export " + (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, _w1, true, "", $task)))
}), $task))
}), $task)), (await ff_core_List.List_map$(module_.extends_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition$(self_, _w1, $task))
}), $task)), (await ff_core_List.List_map$(module_.instances_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitInstanceDefinition$(self_, _w1, $task))
}), $task)), (self_.isMainModule_
? (await ff_compiler_JsEmitter.JsEmitter_emitRun$(self_, module_.functions_, packagePair_, ((packagePair_.group_ === "ff") && (packagePair_.name_ === "compiler")), $task))
: [])];
const ignoreJsImports_ = (((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable()) && (packagePair_.group_ === "ff")) && (packagePair_.name_ === "core"))
? ["esbuild"]
: []);
const jsImports_ = ff_compiler_JsImporter.JsImporter_generateImports(self_.jsImporter_, ff_core_List.List_toSet(ignoreJsImports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (ff_core_List.List_join(ff_core_List.List_map([jsImports_, ...parts_], ((_w1) => {
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
return [ff_core_List.List_join(["export async function $run$(fireflyPath_, arguments_) {", "Error.stackTraceLimit = 50", "const $task = {controller: new AbortController(), subtasks: new Set(), promise: new Promise(() => {}), started: performance.now() * 0.001}", ...(ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
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
? ["ff_core_Task.Task_abort$($task)", "clearInterval(interval)"]
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
return ff_core_List.List_join([...syncMethods_, ...asyncMethods_], "\n\n")
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
const signature_ = (await ff_compiler_JsEmitter.JsEmitter_emitSignature$(self_, definition_.signature_, async_, suffix_, $task));
{
const _1 = ff_core_Pair.Pair(async_, definition_.body_);
if(!_1.first_ && _1.second_.ForeignTarget && _1.second_.syncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in sync context.');\n}")
}
if(_1.first_ && _1.second_.ForeignTarget && _1.second_.asyncCode_.None) {
return (((signature_ + " {\nthrow new Error('Function ") + definition_.signature_.name_) + " is missing on this target in async context.');\n}")
}
if(!_1.first_ && _1.second_.ForeignTarget && _1.second_.syncCode_.Some) {
const code_ = _1.second_.syncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
}
if(_1.first_ && _1.second_.ForeignTarget && _1.second_.asyncCode_.Some) {
const code_ = _1.second_.asyncCode_.value_;
return (((signature_ + " {\n") + ff_compiler_JsImporter.JsImporter_process(self_.jsImporter_, definition_.at_, code_)) + "\n}")
}
if(_1.second_.FireflyTarget) {
const lambda_ = _1.second_.lambda_;
{
const _1 = lambda_;
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
const body_ = (await ff_compiler_JsEmitter.JsEmitter_emitTailCall$(self_, (async ($task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, matchCase_.body_, true, async_, $task))
}), $task));
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
const body_ = (await ff_compiler_JsEmitter.JsEmitter_emitTailCall$(self_, (async ($task) => {
const casesString_ = ff_core_List.List_join((await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, escapedArguments_, _w1, [], [], true, true, async_, $task))
}), $task)), "\n");
return ((shadowingWorkaround_ + "\n") + casesString_)
}), $task));
return (((signature_ + " {\n") + body_) + "\n}")
}
}
return
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
const allFields_ = [...typeDefinition_.commonFields_, ...definition_.fields_];
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
return (await ff_compiler_JsEmitter.JsEmitter_emitList$(self_, items_, async_, $task))
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
const fieldCode_ = ff_core_List.List_join((await ff_core_List.List_map$(fields_, (async (f_, $task) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, f_.value_, async_, $task)))
}), $task)), ", ");
return (((("{..." + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, record_, async_, $task))) + ", ") + fieldCode_) + "}")
}
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
return (((((("(" + prefix_) + "(") + parameters_) + ") => {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, true, newAsync_, $task))) + "\n})")
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
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_grab(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const caseStrings_ = (await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, escapedArguments_, _w1, [], [], true, true, newAsync_, $task))
}), $task));
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
const call_ = ((((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, function_, async_, $task))) + ")(") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task))) + c_) + ")");
if(await_) {
return (("(await " + call_) + ")")
} else {
return call_
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.typeArguments_.length === 0 && _1.arguments_.length === 1) {
const at_ = _1.at_;
const operator_ = _1.target_.name_;
const value_ = _1.arguments_[0];
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)))) {
return ((("(" + operator_) + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, value_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.typeArguments_.length === 0 && _1.arguments_.length === 2) {
const at_ = _1.at_;
const operator_ = _1.target_.name_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grabFirst(operator_)))) {
return (((((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " ") + operator_) + " ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.List_grab" && _1.arguments_.length === 2 && _1.arguments_[0].value_.EVariable && _1.arguments_[1].value_.EVariable) {
const at_ = _1.at_;
const x1_ = _1.arguments_[0].value_.name_;
const x2_ = _1.arguments_[1].value_.name_;
return ((((((((("(" + ff_compiler_JsEmitter.escapeResolved_(x1_)) + "[") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "] ?? ") + "ff_core_List.internalGrab_(") + ff_compiler_JsEmitter.escapeResolved_(x1_)) + ", ") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "))")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Array.Array_grab" && _1.arguments_.length === 2 && _1.arguments_[0].value_.EVariable && _1.arguments_[1].value_.EVariable) {
const at_ = _1.at_;
const x1_ = _1.arguments_[0].value_.name_;
const x2_ = _1.arguments_[1].value_.name_;
return ((((((((("(" + ff_compiler_JsEmitter.escapeResolved_(x1_)) + ".array[") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "] ?? ") + "ff_core_Array.internalGrab_(") + ff_compiler_JsEmitter.escapeResolved_(x1_)) + ", ") + ff_compiler_JsEmitter.escapeResolved_(x2_)) + "))")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.import" && _1.arguments_.length === 1 && _1.arguments_[0].value_.EString) {
const at_ = _1.at_;
const url_ = _1.arguments_[0].value_.value_;
return ff_compiler_JsImporter.JsImporter_add(self_.jsImporter_, ff_core_String.String_replace(url_, "\"", ""))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.await" && _1.arguments_.length === 1) {
const at_ = _1.at_;
const body_ = _1.arguments_[0].value_;
const emittedBody_ = (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task));
if(async_) {
return (("(await " + emittedBody_) + "($task))")
} else {
return (("(" + emittedBody_) + "())")
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.cancelled" && _1.arguments_.length === 0) {
const at_ = _1.at_;
if(async_) {
return "$task.controller.signal.aborted"
} else {
return "false"
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.throwIfCancelled" && _1.arguments_.length === 0) {
const at_ = _1.at_;
if(async_) {
return "((() => ff_core_Task.Task_throwIfAborted($task))())"
} else {
return ""
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Equal.equals" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " === ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Equal.notEquals" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if((ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || (typeName_ === "ff:core/Ordering.Ordering"))) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " !== ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.before" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " < ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.notBefore" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " >= ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.after" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " > ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Ordering.notAfter" && _1.arguments_.length === 2 && _1.dictionaries_.length === 1 && _1.dictionaries_[0].dictionaries_.length === 0) {
const at_ = _1.at_;
const left_ = _1.arguments_[0];
const right_ = _1.arguments_[1];
const typeName_ = _1.dictionaries_[0].typeName_;
if(ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (((("(" + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, left_, async_, $task))) + " <= ") + (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, right_, async_, $task))) + ")")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/List.fillBy" && _1.arguments_.length === 2 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].PVariable && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const effect_ = _1.effect_;
const size_ = _1.arguments_[0];
const at_ = _1.arguments_[1].value_.at_;
const l_ = _1.arguments_[1].value_.lambda_;
const c_ = _1.arguments_[1].value_.lambda_.cases_[0];
const name_ = _1.arguments_[1].value_.lambda_.cases_[0].patterns_[0].name_;
const body_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
if((!ff_compiler_JsEmitter.effectTypeIsAsync_(effect_))) {
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
if(ff_core_String.String_contains(name_, "bundleForBrowser")) {
if((!ff_core_Option.Option_contains(ff_core_List.List_grab(arguments_, 0).name_, "system", ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
ff_core_Log.debug_(("Wrong arguments for bundleForBrowser: " + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String)).show_(ff_core_List.List_map(arguments_, ((_w1) => {
return _w1.name_
})))));
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
};
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
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
return (("(" + (await ff_core_List.List_foldLeft$(list_, (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, elseBody_, async_, $task)), (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return (((((await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task)) + "\n? ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task))) + "\n: ") + otherwise_)
}
}), $task))) + ")")
return
}
{
const list_ = _1;
return (("(" + (await ff_core_List.List_foldLeft$(list_, "ff_core_Option.None()", (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return (((((await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task)) + "\n? ff_core_Option.Some(") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task))) + ")\n: ") + otherwise_)
}
}), $task))) + ")")
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
const functionCode_ = (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, function_, async_, $task));
const emittedArguments_ = (await ff_core_List.List_map$(arguments_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, _w1, async_, $task))
}), $task));
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
const list_ = (await ff_core_List.List_map$(fields_, (async (f_, $task) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + ": ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, f_.value_, async_, $task)))
}), $task));
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
if(async_) {
return (("(await (async function() {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, term_, true, async_, $task))) + "\n})())")
}
{
return (("(function() {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, term_, true, async_, $task))) + "\n})()")
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
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionStrings_ = (await ff_core_List.List_map$(functions_, (async (f_, $task) => {
const newAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
return (await ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition$(self_, f_, newAsync_, "", $task))
}), $task));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task)))
}
if(_1.ELet) {
const at_ = _1.at_;
const mutable_ = _1.mutable_;
const name_ = _1.name_;
const valueType_ = _1.valueType_;
const value_ = _1.value_;
const body_ = _1.body_;
return (((await ff_compiler_JsEmitter.JsEmitter_emitLetDefinition$(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_), mutable_, async_, $task)) + "\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task)))
}
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
return ""
}
if(_1.ESequential && _1.before_.EVariant && _1.before_.name_ === "ff:core/Unit.Unit") {
const after_ = _1.after_;
return (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, after_, last_, async_, $task))
}
if(_1.ESequential && _1.after_.EVariant && _1.after_.name_ === "ff:core/Unit.Unit") {
const before_ = _1.before_;
return (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, before_, false, async_, $task))
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return (((await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, before_, false, async_, $task)) + ";\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, after_, last_, async_, $task)))
}
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const name_ = _1.variable_;
const value_ = _1.value_;
return ((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task)))
}
if(_1.EAssignField) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
return (((((((await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, record_, async_, $task)) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task)))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.while" && _1.arguments_.length === 2) {
const at_ = _1.at_;
const condition_ = _1.arguments_[0];
const body_ = _1.arguments_[1];
return (((("while(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), async_, $task))) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_, $task))) + "\n}")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.doWhile" && _1.arguments_.length === 1) {
const at_ = _1.at_;
const doWhileBody_ = _1.arguments_[0].value_;
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
if(_guard1.ESequential) {
const body_ = _guard1.before_;
const condition_ = _guard1.after_;
return ((((("while(true) {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, false, async_, $task))) + "\nif(!") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task))) + ") break") + "\n}")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.doWhile" && _1.arguments_.length === 1) {
const at_ = _1.at_;
const doWhileBody_ = _1.arguments_[0].value_;
const _guard1 = ff_compiler_JsEmitter.invokeImmediately_(doWhileBody_);
{
const body_ = _guard1;
return (("while(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, body_, async_, $task))) + ") {}")
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.if" && _1.arguments_.length === 2) {
const at_ = _1.at_;
const condition_ = _1.arguments_[0];
const body_ = _1.arguments_[1];
return ((("if(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_.value_, async_, $task))) + ") {\n") + (last_
? (("return ff_core_Option.Some(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), async_, $task))) + ")\n} else return ff_core_Option.None()")
: ((await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false, async_, $task)) + "\n}")))
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Core.throw" && _1.arguments_.length === 1 && _1.dictionaries_.length === 1) {
const at_ = _1.at_;
const argument_ = _1.arguments_[0];
const dictionary_ = _1.dictionaries_[0];
const d_ = (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, dictionary_, $task));
const a_ = (await ff_compiler_JsEmitter.JsEmitter_emitArgument$(self_, at_, argument_, async_, $task));
return (((("throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(" + a_) + ", ") + d_) + ")})")
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch") {
const at_ = _1.at_;
const _guard1 = (await ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally$(self_, term_, last_, async_, $task));
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catchAny") {
const at_ = _1.at_;
const _guard1 = (await ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally$(self_, term_, last_, async_, $task));
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_finally") {
const at_ = _1.at_;
const _guard1 = (await ff_compiler_JsEmitter.JsEmitter_emitTryCatchFinally$(self_, term_, last_, async_, $task));
if(_guard1.Some) {
const code_ = _guard1.value_;
return code_
}
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:unsafejs/UnsafeJs.throwIfCancelled" && _1.arguments_.length === 0) {
const at_ = _1.at_;
if(async_) {
return "ff_core_Task.Task_throwIfAborted($task)"
} else {
return ""
}
return
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.tailCall_) {
const at_ = _1.at_;
const name_ = _1.target_.name_;
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
}
if(_1.EPipe && _1.function_.ELambda) {
const at_ = _1.at_;
const value_ = _1.value_;
const cases_ = _1.function_.lambda_.cases_;
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
return ((((((((!last_)
? "do "
: "") + "{\nconst _1 = ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task))) + ";\n") + ff_core_List.List_join((await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, ["_1"], _w1, [], [], true, last_, async_, $task))
}), $task)), "\n")) + "\n}") + ((!last_)
? " while(false)"
: ""))
return
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_);
if(_1.length === 0) {
if(last_) {
return ("return " + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, term_, async_, $task)))
} else {
return (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, term_, async_, $task))
}
return
}
if(_1.length >= 1 && _1[0].first_.EVariant && _1[0].first_.name_ === "ff:core/Bool.True") {
const elseBody_ = _1[0].second_;
const list_ = _1.slice(1);
const initial_ = (("{\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, elseBody_, last_, async_, $task))) + "\n}");
return (await ff_core_List.List_foldLeft$(list_, initial_, (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task))) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task))) + "\n} else ") + otherwise_)
}
}), $task))
return
}
{
const list_ = _1;
if((!last_)) {
return (await ff_core_List.List_foldLeft$(list_, "{}", (async (_1, _2, $task) => {
{
const otherwise_ = _1;
const condition_ = _2.first_;
const body_ = _2.second_;
return ((((("if(" + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, condition_, async_, $task))) + ") {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, body_, last_, async_, $task))) + "\n} else ") + otherwise_)
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
const arguments_ = ["_exception.value_", "_error"];
{
const _1 = cases_;
if(_1.length === 1) {
const case_ = _1[0];
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, case_, [], [], false, last_, catchAsync_, $task))
}
{
const cs_ = _1;
const caseStrings_ = (await ff_core_List.List_map$(cases_, (async (_w1, $task) => {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, _w1, [], [], true, last_, catchAsync_, $task))
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
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_finally" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.arguments_[1].value_.lambda_.cases_.length === 1 && _1.arguments_[1].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[1].value_.lambda_.cases_[0].guards_.length === 0) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const finallyEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const finallyBody_ = _1.arguments_[1].value_.lambda_.cases_[0].body_;
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const finallyAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(finallyEffect_));
return ff_core_Option.Some((((("try {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, tryBody_, last_, tryAsync_, $task))) + "\n} finally {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, finallyBody_, last_, finallyAsync_, $task))) + "\n}"))
}
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/Try.Try_catch" && _1.arguments_.length === 2 && _1.arguments_[0].value_.ECall && _1.arguments_[0].value_.target_.StaticCall && _1.arguments_[0].value_.target_.name_ === "ff:core/Core.try" && _1.arguments_[0].value_.arguments_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.ELambda && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_.length === 1 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].patterns_.length === 0 && _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].guards_.length === 0 && _1.arguments_[1].value_.ELambda && _1.dictionaries_.length === 1) {
const tryEffect_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.effect_;
const tryBody_ = _1.arguments_[0].value_.arguments_[0].value_.lambda_.cases_[0].body_;
const catchEffect_ = _1.arguments_[1].value_.lambda_.effect_;
const cases_ = _1.arguments_[1].value_.lambda_.cases_;
const dictionary_ = _1.dictionaries_[0];
const tryAsync_ = (self_.emittingAsync_ && ff_compiler_JsEmitter.effectTypeIsAsync_(tryEffect_));
const d_ = (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, dictionary_, $task));
return ff_core_Option.Some(((((((((("try {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, tryBody_, last_, tryAsync_, $task))) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + (await emitCatch_$(catchEffect_, cases_, $task))) + "\n}"))
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
const d_ = (await ff_compiler_JsEmitter.JsEmitter_emitDictionary$(self_, dictionary_, $task));
return ff_core_Option.Some(((((((((((("try {\n" + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, tryBody_, last_, tryAsync_, $task))) + "\n} catch(_error) {\n") + "if(!_error.ffException) throw _error\n") + "const _exception = ff_core_Any.fromAny_(_error.ffException, ") + d_) + ")\n") + "if(!_exception.Some) throw _error\n") + (await emitCatch_$(catchEffect_, cases_, $task))) + "\n} finally {\n") + (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, finallyBody_, last_, finallyAsync_, $task))) + "\n}"))
}
{
return ff_core_Option.None()
}
}
}

export async function JsEmitter_emitCase$(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, async_, $task) {
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
return (await ff_compiler_JsEmitter.JsEmitter_emitPattern$(self_, ff_core_List.List_grab(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), conditions_, variables_, jump_, last_, async_, $task))
return
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
if(ff_core_List.List_isEmpty(variables_)) {
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, [], newCase_, [...conditions_, (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, e_, async_, $task))], [], jump_, last_, async_, $task))
}
}
if(_1.first_.length === 0 && _1.second_.length === 1 && _1.second_[0].pattern_.PVariant && _1.second_[0].pattern_.name_ === "ff:core/Bool.True") {
const e_ = _1.second_[0].term_;
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [], [], _c.body_)
}))(matchCase_);
const code_ = (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, [], newCase_, [(await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, e_, async_, $task))], [], jump_, last_, async_, $task));
return emitWrapper_(code_)
}
if(_1.first_.length === 0 && _1.second_.length >= 1) {
const guard_ = _1.second_[0];
const guards_ = _1.second_.slice(1);
const guardName_ = ("_guard" + (ff_core_List.List_size(guards_) + 1));
const newCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [guard_.pattern_], guards_, _c.body_)
}))(matchCase_);
const code_ = ((((("const " + guardName_) + " = ") + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, guard_.term_, async_, $task))) + ";\n") + (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, [guardName_], newCase_, [], [], jump_, last_, async_, $task)));
return emitWrapper_(code_)
}
if(_1.first_.length === 0 && _1.second_.length === 0) {
const statementsCode_ = (await ff_compiler_JsEmitter.JsEmitter_emitStatements$(self_, matchCase_.body_, last_, async_, $task));
const lastLine_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(statementsCode_), ((_w1) => {
return (_w1 !== 10)
})));
const returns_ = ((((((ff_core_String.String_startsWith(lastLine_, "return ", 0) || ff_core_String.String_startsWith(lastLine_, "break ", 0)) || ff_core_String.String_startsWith(lastLine_, "continue ", 0)) || ff_core_String.String_startsWith(lastLine_, "return;", 0)) || ff_core_String.String_startsWith(lastLine_, "break;", 0)) || ff_core_String.String_startsWith(lastLine_, "continue;", 0)) || ff_core_String.String_startsWith(lastLine_, "throw ", 0));
const code_ = (statementsCode_ + (((jump_ && last_) && (!returns_))
? "\nreturn"
: (jump_ && (!returns_))
? "\nbreak"
: ""));
return emitWrapper_(code_)
}
}
}

export async function JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, conditions_, variables_, jump_, last_, async_, $task) {
{
const _1 = pattern_;
if(_1.PString) {
const value_ = _1.value_;
const newConditions_ = [...conditions_, ((argument_ + " === ") + value_)];
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, async_, $task))
}
if(_1.PInt) {
const value_ = _1.value_;
const newConditions_ = [...conditions_, ((argument_ + " === ") + value_)];
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, async_, $task))
}
if(_1.PChar) {
const value_ = _1.value_;
const newConditions_ = [...conditions_, ((argument_ + " === ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_))];
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, variables_, jump_, last_, async_, $task))
}
if(_1.PVariable && _1.name_.None) {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, conditions_, variables_, jump_, last_, async_, $task))
}
if(_1.PVariable && _1.name_.Some) {
const name_ = _1.name_.value_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, async_, $task))
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.False" && _1.patterns_.length === 0) {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, [...conditions_, ("!" + argument_)], variables_, jump_, last_, async_, $task))
}
if(_1.PVariant && _1.name_ === "ff:core/Bool.True" && _1.patterns_.length === 0) {
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, [...conditions_, argument_], variables_, jump_, last_, async_, $task))
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
return (((argument_ + ".slice(") + ff_core_List.List_size(patterns_)) + ")")
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
const newConditions_ = [...conditions_, ((((argument_ + ".length ") + operator_) + " ") + ff_core_List.List_size(patterns_))];
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, async_, $task))
}
}
if(_1.PVariant) {
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const processed_ = (await ff_compiler_JsEmitter.JsEmitter_processVariantCase$(self_, name_, argument_, $task));
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, [...patterns_, ...matchCase_.patterns_], _c.guards_, _c.body_)
}))(matchCase_);
const newConditions_ = (processed_.loneVariant_
? conditions_
: [...conditions_, ((argument_ + ".") + processed_.variantName_)]);
const newArguments_ = [...processed_.arguments_, ...arguments_];
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, newArguments_, newMatchCase_, newConditions_, variables_, jump_, last_, async_, $task))
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variable_ = _1.variable_;
const processed_ = (await ff_compiler_JsEmitter.JsEmitter_processVariantCase$(self_, name_, argument_, $task));
const newConditions_ = (processed_.loneVariant_
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
return (await ff_compiler_JsEmitter.JsEmitter_emitCase$(self_, arguments_, matchCase_, newConditions_, newVariables_, jump_, last_, async_, $task))
}
if(_1.PAlias) {
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_);
const newVariables_ = ((escaped_ !== argument_)
? [...variables_, (((("const " + escaped_) + " = ") + argument_) + ";\n")]
: variables_);
return (await ff_compiler_JsEmitter.JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, conditions_, newVariables_, jump_, last_, async_, $task))
}
}
}

export async function JsEmitter_emitList$(self_, items_, async_, $task) {
return (("[" + ff_core_List.List_join((await ff_core_List.List_map$(items_, (async (_1, $task) => {
if(!_1.second_) {
const item_ = _1.first_;
return (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, item_, async_, $task))
}
if(_1.second_) {
const item_ = _1.first_;
return ("..." + (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, item_, async_, $task)))
}
}), $task)), ", ")) + "]")
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
}

export async function JsEmitter_emitArgument$(self_, callAt_, argument_, async_, $task) {
{
const _1 = argument_.value_;
if(_1.ECall && _1.target_.StaticCall && _1.target_.name_ === "ff:core/SourceLocation.callSite") {
return (((((((((("\"" + self_.moduleName_) + ":") + callAt_.line_) + ":") + callAt_.column_) + ",") + self_.packagePair_.group_) + ",") + self_.packagePair_.name_) + "\"")
}
{
const value_ = _1;
return (await ff_compiler_JsEmitter.JsEmitter_emitTerm$(self_, value_, async_, $task))
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
if(value_a.EmitExecutable) {
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
if(value_a.EmitExecutable) {
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
if(z_a.EmitExecutable) {
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
if(z_a.EmitExecutable) {
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
if(value_a.EmitExecutable) {
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
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
if(value_a.EmitExecutable) {
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};


