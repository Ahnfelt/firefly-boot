

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_JsImporter from "../../ff/compiler/JsImporter.mjs"

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

// type JsEmitter
export function JsEmitter(otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModulePath_, tailCallUsed_) {
return {otherModules_, jsImporter_, emitTarget_, isMainModule_, compilerModulePath_, tailCallUsed_};
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

export const primitiveTypes_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Bool.Bool", ff_core_List.Link("ff:core/Char.Char", ff_core_List.Link("ff:core/Int.Int", ff_core_List.Link("ff:core/Float.Float", ff_core_List.Link("ff:core/String.String", ff_core_List.Link("ff:core/Ordering.Ordering", ff_core_List.Empty())))))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);

export function make_(otherModules_, emitTarget_, isMainModule_, compilerModulePath_) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((ff_compiler_Syntax.PackagePair_groupName(m_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(m_.file_, 3));
return ff_core_Pair.Pair(moduleName_, m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.make_(), emitTarget_, isMainModule_, compilerModulePath_, false)
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
}))(ff_core_List.List_expectFirst(types_)).name_
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
return ("" + ff_core_String.String_expect(value_, 1))
return
}
}
}

export function escapeResolved_(word_) {
const parts_ = ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46));
const initialParts_ = ff_core_List.List_dropLast(parts_, 1);
if(ff_core_List.List_isEmpty(initialParts_)) {
return ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_))
} else {
return ((ff_core_List.List_join(initialParts_, "_") + ".") + ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_)))
}
}

export function escapeKeyword_(word_) {
if(ff_core_Char.Char_isAsciiLower(ff_core_String.String_expectFirst(word_))) {
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

export async function make_$(otherModules_, emitTarget_, isMainModule_, compilerModulePath_, $c) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((ff_compiler_Syntax.PackagePair_groupName(m_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(m_.file_, 3));
return ff_core_Pair.Pair(moduleName_, m_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_JsImporter.make_(), emitTarget_, isMainModule_, compilerModulePath_, false)
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function detectIfElse_$(term_, $c) {
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

export async function invokeImmediately_$(function_, $c) {
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

export async function extractTypeName_$(type_, $c) {
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

export async function firstTypeName_$(types_, $c) {
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
}))(ff_core_List.List_expectFirst(types_)).name_
}

export async function makeDictionaryName_$(traitName_, typeName_, $c) {
return ((ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(traitName_, ".", "_"), ":", "_"), "/", "_") + "$") + ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(typeName_, ".", "_"), ":", "_"), "/", "_"))
}

export async function charLiteralToNumber_$(charLiteral_, $c) {
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
return ("" + ff_core_String.String_expect(value_, 1))
return
}
}
}

export async function escapeResolved_$(word_, $c) {
const parts_ = ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46));
const initialParts_ = ff_core_List.List_dropLast(parts_, 1);
if(ff_core_List.List_isEmpty(initialParts_)) {
return ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_))
} else {
return ((ff_core_List.List_join(initialParts_, "_") + ".") + ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_)))
}
}

export async function escapeKeyword_$(word_, $c) {
if(ff_core_Char.Char_isAsciiLower(ff_core_String.String_expectFirst(word_))) {
return (word_ + "_")
} else {
return word_
}
}

export async function effectTypeIsAsync_$(effect_, $c) {
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
return (("import * as $firefly_compiler from '" + _w1) + "'")
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
})), ff_core_List.Link(ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
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
return ff_core_List.Link(ff_core_List.List_join(ff_core_List.Link("export async function $run$(fireflyPath_, arguments_) {", ff_core_List.Link("const controller = new AbortController()", ff_core_List.Link("controller.promises = new Set()", ff_core_List.Link("let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)", ff_core_List.Link("let system = {", ff_core_List.Link("array_: arguments_,", ff_core_List.Link("fireflyPath_: fireflyPath_,", ff_core_List.Link((((("mainPackagePair_: {group_: \"" + mainPackagePair_.group_) + "\", name_: \"") + mainPackagePair_.name_) + "\"},"), ff_core_List.Link((("executableMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable())
? "true"
: "false")) + ","), ff_core_List.Link(("buildMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false")), ff_core_List.Link("}", ff_core_List.Link("try {", ff_core_List.List_addAll(((!ff_core_Option.Option_isEmpty(buildMainFunction_))
? ff_core_List.Link("await buildMain_$(system, controller)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link((("await " + mainName_) + "_$(system, controller)"), ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? ff_core_List.Link("await $firefly_compiler.internalCreateExecutable_$(system, '.firefly/output/executable/Main.bundle.js', '.firefly/output', ['host'], system.assets_, controller)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.Link("} finally {", ff_core_List.Link("controller.abort()", ff_core_List.Link("clearInterval(interval)", ff_core_List.Link("}", ff_core_List.Link("}", (((_1) => {
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
return ff_compiler_Syntax.Signature(_c.at_, ((typeName_ + "_") + method_.signature_.name_), _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_, _c.effect_)
}))(method_.signature_), _c.body_)
return
}
}
}));
const syncMethods_ = ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, ""))
}));
const asyncMethods_ = ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
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
const asyncMethods_ = ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "")
})), ((_w1) => {
return ("async " + ff_core_String.String_dropFirst(_w1, ff_core_String.String_size("async function ")))
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
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true, async_)) + "\n}")
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
? ff_core_List.Link("$c", ff_core_List.Empty())
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
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
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
const newAsync_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
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
? ff_core_List.Link("$c", ff_core_List.Empty())
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
const newAsync_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const controller_ = (newAsync_
? ff_core_List.Link("$c", ff_core_List.Empty())
: ff_core_List.Empty());
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_expect(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true, newAsync_)) + "\n}")
})), "\n");
const prefix_ = (newAsync_
? "async "
: "");
return ((((((("(" + prefix_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(escapedArguments_, controller_), ", ")) + ") => ") + "{\n") + casesString_) + "\n})")
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
const call_ = (((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + ")");
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
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)));
if(_guard1) {
return ((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, value_, async_)) + ")")
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
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)));
if(_guard1) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_, async_)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_, async_)) + ")")
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
return (("(await " + emittedBody_) + "($c))")
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
return "$c.signal.aborted"
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
return "((() => if($c.signal.aborted) throw new Error(\"Cancelled\", {cause: $c.reasonWorkaround}))())"
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
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_, async_)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_, async_)) + ")")
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
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_, async_)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_, async_)) + ")")
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
const name_ = _1.target_.name_;
if(_1.target_.instanceCall_) {
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const dictionaryStrings_ = ff_core_List.List_map(dictionaries_, ((d_) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, d_)
}));
const ds_ = ((ff_core_List.List_size(dictionaries_) <= 1)
? ""
: ((ff_core_List.List_isEmpty(arguments_)
? ""
: ", ") + ff_core_List.List_join(ff_core_List.List_dropFirst(dictionaryStrings_, 1), ", ")));
const d_ = ff_core_List.List_expectFirst(dictionaryStrings_);
const asyncSuffix_ = (await_
? "$"
: "");
const n_ = (ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))) + asyncSuffix_);
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
}));
const controller_ = (await_
? ff_core_List.Link("$c", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = ((((((d_ + ".") + n_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, controller_), ", ")) + ds_) + ")");
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
const ds_ = (ff_core_List.List_isEmpty(dictionaries_)
? ""
: ((ff_core_List.List_isEmpty(arguments_)
? ""
: ", ") + ff_core_List.List_join(ff_core_List.List_map(dictionaries_, ((d_) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, d_)
})), ", ")));
const functionCode_ = (ff_compiler_JsEmitter.escapeResolved_(name_) + (await_
? "$"
: ""));
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
}));
const controller_ = (await_
? ff_core_List.Link("$c", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = ((((functionCode_ + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, controller_), ", ")) + ds_) + ")");
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
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
}));
const controller_ = (await_
? ff_core_List.Link("$c", ff_core_List.Empty())
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
return (((c_ + "(") + ff_core_List.List_join(ff_core_List.List_map(d_.dictionaries_, ((d_) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, d_)
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
const newAsync_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
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
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.throwIfCancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "if($c.signal.aborted) throw new Error(\"Cancelled\", {cause: $c.reasonWorkaround})"
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
ff_compiler_JsEmitter.fail_(at_, "Not yet implemented: Tail calls on trait methods.")
};
self_.tailCallUsed_ = true;
const pair_ = ff_core_List.List_unzip(ff_core_List.List_collect(ff_core_List.List_map(arguments_, ((a_) => {
return ff_core_Option.Some(ff_core_Pair.Pair((((("const " + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_expect(a_.name_) + "_r"))) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_, async_)) + ";"), ((ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_expect(a_.name_)) + " = ") + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_expect(a_.name_) + "_r")))))
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
return (((((((!last_)
? "for(;;) "
: "") + "{\nconst _1 = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + ";\n") + ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link("_1", ff_core_List.Empty()), _w1, last_, async_)) + "\n}")
})), "\n")) + "\n}")
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

export function JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_) {
{
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
{
if(_1.first_.Link) {
const p_ = _1.first_.head_;
const ps_ = _1.first_.tail_;
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, ff_core_List.List_expect(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), last_, async_)
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
return ((((("const " + guardName_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_)) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link(guardName_, ff_core_List.Empty()), newCase_, last_, async_))
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
return (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, async_) + (last_
? "\nreturn"
: "\nbreak"))
return
}
}
}
}
}

export function JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, last_, async_) {
{
const _1 = pattern_;
{
if(_1.PString) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PInt) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PChar) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PVariable) {
if(_1.name_.None) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)
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
: "") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_))
return
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.False") {
if(_1.patterns_.Empty) {
return (((("if(!" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.True") {
if(_1.patterns_.Empty) {
return (((("if(" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
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
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.List_addAll(processed_.arguments_, arguments_), newMatchCase_, last_, async_)) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
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
}))) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + (processed_.loneVariant_
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
: "") + ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, last_, async_))
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
const variantModule_ = ff_core_Map.Map_expect(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
let loneVariant_ = false;
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
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
const variantModule_ = ff_core_Map.Map_expect(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
const newArguments_ = ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_
}))
})));
return newtype_
}

export function JsEmitter_emitArgument(self_, argument_, async_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_, async_)
}

export async function JsEmitter_emitModule$(self_, packagePair_, module_, $c) {
const selfImport_ = ((((((((("import * as " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "_")) + "_") + ff_core_String.String_dropLast(module_.file_, 3)) + " ") + "from \"../../") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".mjs\"");
const imports_ = ff_core_List.List_flatten(ff_core_List.Link(ff_core_Option.Option_toList(ff_core_Option.Option_map(self_.compilerModulePath_, ((_w1) => {
return (("import * as $firefly_compiler from '" + _w1) + "'")
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
})), ff_core_List.Link(ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
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

export async function JsEmitter_emitRun$(self_, functions_, mainPackagePair_, bootstrapping_, $c) {
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
return ff_core_List.Link(ff_core_List.List_join(ff_core_List.Link("export async function $run$(fireflyPath_, arguments_) {", ff_core_List.Link("const controller = new AbortController()", ff_core_List.Link("controller.promises = new Set()", ff_core_List.Link("let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)", ff_core_List.Link("let system = {", ff_core_List.Link("array_: arguments_,", ff_core_List.Link("fireflyPath_: fireflyPath_,", ff_core_List.Link((((("mainPackagePair_: {group_: \"" + mainPackagePair_.group_) + "\", name_: \"") + mainPackagePair_.name_) + "\"},"), ff_core_List.Link((("executableMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitExecutable())
? "true"
: "false")) + ","), ff_core_List.Link(("buildMode_: " + (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? "true"
: "false")), ff_core_List.Link("}", ff_core_List.Link("try {", ff_core_List.List_addAll(((!ff_core_Option.Option_isEmpty(buildMainFunction_))
? ff_core_List.Link("await buildMain_$(system, controller)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget)
? ff_core_List.Link((("await " + mainName_) + "_$(system, controller)"), ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.List_addAll((ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBuild())
? ff_core_List.Link("await $firefly_compiler.internalCreateExecutable_$(system, '.firefly/output/executable/Main.bundle.js', '.firefly/output', ['host'], system.assets_, controller)", ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.Link("} finally {", ff_core_List.Link("controller.abort()", ff_core_List.Link("clearInterval(interval)", ff_core_List.Link("}", ff_core_List.Link("}", (((_1) => {
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

export async function JsEmitter_emitImportDefinition$(self_, definition_, $c) {
return ((((((((((((("import * as " + definition_.package_.group_) + "_") + definition_.package_.name_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.group_) + "/") + definition_.package_.name_) + "/") + definition_.file_) + ".mjs\"")
}

export async function JsEmitter_emitLetDefinition$(self_, definition_, mutable_, async_, $c) {
const mutability_ = (mutable_
? "let"
: "const");
const valueCode_ = ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_, async_);
return (((((mutability_ + " ") + ff_compiler_JsEmitter.escapeKeyword_(definition_.name_)) + " = ") + valueCode_) + ";")
}

export async function JsEmitter_emitExtendsDefinition$(self_, definition_, $c) {
const typeName_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_compiler_JsEmitter.extractTypeName_(definition_.type_)), ((_w1) => {
return (_w1 !== 46)
})));
const methods_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
{
const _1 = method_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, ((typeName_ + "_") + method_.signature_.name_), _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_, _c.effect_)
}))(method_.signature_), _c.body_)
return
}
}
}));
const syncMethods_ = ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, ""))
}));
const asyncMethods_ = ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, ""))
}));
return ff_core_List.List_join(ff_core_List.List_addAll(syncMethods_, asyncMethods_), "\n\n")
}

export async function JsEmitter_emitInstanceDefinition$(self_, definition_, $c) {
const name_ = ff_compiler_JsEmitter.makeDictionaryName_(definition_.traitName_, ff_compiler_JsEmitter.firstTypeName_(definition_.typeArguments_));
const methods_ = ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, false, "")
})), ((_w1) => {
return ff_core_String.String_dropFirst(_w1, ff_core_String.String_size("function "))
}));
const asyncMethods_ = ff_core_List.List_map(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, true, "")
})), ((_w1) => {
return ("async " + ff_core_String.String_dropFirst(_w1, ff_core_String.String_size("async function ")))
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

export async function JsEmitter_emitFunctionDefinition$(self_, definition_, async_, suffix_ = "", $c) {
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
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true, async_)) + "\n}")
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

export async function JsEmitter_emitTailCall$(self_, body_, $c) {
const outerTailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = false;
const result_ = (await body_($c));
const tailCallUsed_ = self_.tailCallUsed_;
self_.tailCallUsed_ = outerTailCallUsed_;
if(tailCallUsed_) {
return (("_tailcall: for(;;) {\n" + result_) + "\nreturn\n}")
} else {
return result_
}
}

export async function JsEmitter_emitSignature$(self_, signature_, async_, suffix_ = "", $c) {
const parameterStrings_ = ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitParameter(self_, _w1, async_)
}));
const dictionaryStrings_ = ff_core_List.List_map(signature_.constraints_, ((c_) => {
return ff_compiler_JsEmitter.makeDictionaryName_(c_.name_, ff_compiler_JsEmitter.firstTypeName_(c_.generics_))
}));
const controller_ = (async_
? ff_core_List.Link("$c", ff_core_List.Empty())
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

export async function JsEmitter_emitParameter$(self_, parameter_, async_, $c) {
const defaultValue_ = ff_core_Option.Option_else(ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return (" = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1, async_))
})), (() => {
return ""
}));
return (ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_) + defaultValue_)
}

export async function JsEmitter_emitTypeDefinition$(self_, definition_, $c) {
if(definition_.newtype_) {
return ("// newtype " + definition_.name_)
} else {
return ((("// type " + definition_.name_) + "\n") + ff_core_List.List_join(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition(self_, definition_, _w1)
})), "\n"))
}
}

export async function JsEmitter_emitVariantDefinition$(self_, typeDefinition_, definition_, $c) {
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

export async function JsEmitter_emitTerm$(self_, term_, async_, $c) {
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
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
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
const newAsync_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
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
? ff_core_List.Link("$c", ff_core_List.Empty())
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
const newAsync_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const controller_ = (newAsync_
? ff_core_List.Link("$c", ff_core_List.Empty())
: ff_core_List.Empty());
ff_compiler_Patterns.convertAndCheck_(self_.otherModules_, cases_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_expect(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true, newAsync_)) + "\n}")
})), "\n");
const prefix_ = (newAsync_
? "async "
: "");
return ((((((("(" + prefix_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(escapedArguments_, controller_), ", ")) + ") => ") + "{\n") + casesString_) + "\n})")
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
const call_ = (((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_, async_)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + ")");
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
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)));
if(_guard1) {
return ((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, value_, async_)) + ")")
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
const _guard1 = (!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)));
if(_guard1) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_, async_)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_, async_)) + ")")
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
return (("(await " + emittedBody_) + "($c))")
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
return "$c.signal.aborted"
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
return "((() => if($c.signal.aborted) throw new Error(\"Cancelled\", {cause: $c.reasonWorkaround}))())"
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
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_, async_)) + " === ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_, async_)) + ")")
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
const _guard1 = ff_core_Set.Set_contains(ff_compiler_JsEmitter.primitiveTypes_, typeName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1) {
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_, async_)) + " !== ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_, async_)) + ")")
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
const name_ = _1.target_.name_;
if(_1.target_.instanceCall_) {
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
const await_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(effect_));
const dictionaryStrings_ = ff_core_List.List_map(dictionaries_, ((d_) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, d_)
}));
const ds_ = ((ff_core_List.List_size(dictionaries_) <= 1)
? ""
: ((ff_core_List.List_isEmpty(arguments_)
? ""
: ", ") + ff_core_List.List_join(ff_core_List.List_dropFirst(dictionaryStrings_, 1), ", ")));
const d_ = ff_core_List.List_expectFirst(dictionaryStrings_);
const asyncSuffix_ = (await_
? "$"
: "");
const n_ = (ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})))) + asyncSuffix_);
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
}));
const controller_ = (await_
? ff_core_List.Link("$c", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = ((((((d_ + ".") + n_) + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, controller_), ", ")) + ds_) + ")");
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
const ds_ = (ff_core_List.List_isEmpty(dictionaries_)
? ""
: ((ff_core_List.List_isEmpty(arguments_)
? ""
: ", ") + ff_core_List.List_join(ff_core_List.List_map(dictionaries_, ((d_) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, d_)
})), ", ")));
const functionCode_ = (ff_compiler_JsEmitter.escapeResolved_(name_) + (await_
? "$"
: ""));
const emittedArguments_ = ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
}));
const controller_ = (await_
? ff_core_List.Link("$c", ff_core_List.Empty())
: ff_core_List.Empty());
const call_ = ((((functionCode_ + "(") + ff_core_List.List_join(ff_core_List.List_addAll(emittedArguments_, controller_), ", ")) + ds_) + ")");
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
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, _w1, async_)
}));
const controller_ = (await_
? ff_core_List.Link("$c", ff_core_List.Empty())
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

export async function JsEmitter_emitDictionary$(self_, d_, $c) {
const m_ = ((d_.moduleName_ !== "")
? (((ff_compiler_Syntax.PackagePair_groupName(d_.packagePair_, "_") + "_") + ff_core_String.String_replace(d_.moduleName_, "/", "_")) + ".")
: "");
const c_ = (m_ + ff_compiler_JsEmitter.makeDictionaryName_(d_.traitName_, d_.typeName_));
if(ff_core_List.List_isEmpty(d_.dictionaries_)) {
return c_
} else {
return (((c_ + "(") + ff_core_List.List_join(ff_core_List.List_map(d_.dictionaries_, ((d_) => {
return ff_compiler_JsEmitter.JsEmitter_emitDictionary(self_, d_)
})), ", ")) + ")")
}
}

export async function JsEmitter_emitStatements$(self_, term_, last_, async_, $c) {
{
const _1 = term_;
{
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
const newAsync_ = (async_ && ff_compiler_JsEmitter.effectTypeIsAsync_(f_.signature_.effect_));
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
if(_1.target_.name_ == "ff:unsafejs/UnsafeJs.throwIfCancelled") {
if(_1.arguments_.Empty) {
if(async_) {
return "if($c.signal.aborted) throw new Error(\"Cancelled\", {cause: $c.reasonWorkaround})"
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
ff_compiler_JsEmitter.fail_(at_, "Not yet implemented: Tail calls on trait methods.")
};
self_.tailCallUsed_ = true;
const pair_ = ff_core_List.List_unzip(ff_core_List.List_collect(ff_core_List.List_map(arguments_, ((a_) => {
return ff_core_Option.Some(ff_core_Pair.Pair((((("const " + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_expect(a_.name_) + "_r"))) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_, async_)) + ";"), ((ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_expect(a_.name_)) + " = ") + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_expect(a_.name_) + "_r")))))
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
return (((((((!last_)
? "for(;;) "
: "") + "{\nconst _1 = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_, async_)) + ";\n") + ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link("_1", ff_core_List.Empty()), _w1, last_, async_)) + "\n}")
})), "\n")) + "\n}")
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

export async function JsEmitter_emitCase$(self_, arguments_, matchCase_, last_, async_, $c) {
{
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.guards_);
{
if(_1.first_.Link) {
const p_ = _1.first_.head_;
const ps_ = _1.first_.tail_;
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, ff_core_List.List_expect(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.guards_, _c.body_)
}))(matchCase_), last_, async_)
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
return ((((("const " + guardName_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, guard_.term_, async_)) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link(guardName_, ff_core_List.Empty()), newCase_, last_, async_))
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
return (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_, async_) + (last_
? "\nreturn"
: "\nbreak"))
return
}
}
}
}
}

export async function JsEmitter_emitPattern$(self_, argument_, pattern_, arguments_, matchCase_, last_, async_, $c) {
{
const _1 = pattern_;
{
if(_1.PString) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PInt) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + value_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PChar) {
const value_ = _1.value_;
return (((((("if(" + argument_) + " == ") + ff_compiler_JsEmitter.charLiteralToNumber_(value_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
{
if(_1.PVariable) {
if(_1.name_.None) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)
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
: "") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_))
return
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.False") {
if(_1.patterns_.Empty) {
return (((("if(!" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
if(_1.name_ == "ff:core/Bool.True") {
if(_1.patterns_.Empty) {
return (((("if(" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + "\n}")
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
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.List_addAll(processed_.arguments_, arguments_), newMatchCase_, last_, async_)) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
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
}))) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_, async_)) + (processed_.loneVariant_
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
: "") + ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, last_, async_))
return
}
}
}
}

export async function JsEmitter_emitList$(self_, items_, async_, $c) {
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

export async function JsEmitter_processVariantCase$(self_, name_, argument_, $c) {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1));
const variantModule_ = ff_core_Map.Map_expect(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
let loneVariant_ = false;
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
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

export async function JsEmitter_processVariant$(self_, name_, $c) {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 !== 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1));
const variantModule_ = ff_core_Map.Map_expect(self_.otherModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
let newtype_ = false;
const newArguments_ = ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ === variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_
}))
})));
return newtype_
}

export async function JsEmitter_emitArgument$(self_, argument_, async_, $c) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_, async_)
}

export const ff_core_Show_Show$ff_compiler_JsEmitter_JsEmitter = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((("JsEmitter" + "(") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Module).show_(z_.otherModules_)) + ", ") + ff_compiler_JsImporter.ff_core_Show_Show$ff_compiler_JsImporter_JsImporter.show_(z_.jsImporter_)) + ", ") + ff_compiler_JsEmitter.ff_core_Show_Show$ff_compiler_JsEmitter_EmitTarget.show_(z_.emitTarget_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isMainModule_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.compilerModulePath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCallUsed_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((("JsEmitter" + "(") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Module).show_(z_.otherModules_)) + ", ") + ff_compiler_JsImporter.ff_core_Show_Show$ff_compiler_JsImporter_JsImporter.show_(z_.jsImporter_)) + ", ") + ff_compiler_JsEmitter.ff_core_Show_Show$ff_compiler_JsEmitter_EmitTarget.show_(z_.emitTarget_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isMainModule_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.compilerModulePath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCallUsed_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_JsEmitter_EmitTarget = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.EmitNode) {
const z_ = x_a;
return "EmitNode"
return
}
}
{
if(x_a.EmitBrowser) {
const z_ = x_a;
return "EmitBrowser"
return
}
}
{
if(x_a.EmitBuild) {
const z_ = x_a;
return "EmitBuild"
return
}
}
{
if(x_a.EmitExecutable) {
const z_ = x_a;
return "EmitExecutable"
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.EmitNode) {
const z_ = x_a;
return "EmitNode"
return
}
}
{
if(x_a.EmitBrowser) {
const z_ = x_a;
return "EmitBrowser"
return
}
}
{
if(x_a.EmitBuild) {
const z_ = x_a;
return "EmitBuild"
return
}
}
{
if(x_a.EmitExecutable) {
const z_ = x_a;
return "EmitExecutable"
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_JsEmitter_ProcessedVariantCase = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("ProcessedVariantCase" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variantName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.loneVariant_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.arguments_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("ProcessedVariantCase" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variantName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.loneVariant_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.arguments_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_JsEmitter_JsEmitter = {
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
return (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Module).equals_(x_.otherModules_, y_.otherModules_) && (ff_compiler_JsImporter.ff_core_Equal_Equal$ff_compiler_JsImporter_JsImporter.equals_(x_.jsImporter_, y_.jsImporter_) && (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(x_.emitTarget_, y_.emitTarget_) && ((x_.isMainModule_ === y_.isMainModule_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.compilerModulePath_, y_.compilerModulePath_) && (x_.tailCallUsed_ === y_.tailCallUsed_))))))
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
return (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Module).equals_(x_.otherModules_, y_.otherModules_) && (ff_compiler_JsImporter.ff_core_Equal_Equal$ff_compiler_JsImporter_JsImporter.equals_(x_.jsImporter_, y_.jsImporter_) && (ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget.equals_(x_.emitTarget_, y_.emitTarget_) && ((x_.isMainModule_ === y_.isMainModule_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.compilerModulePath_, y_.compilerModulePath_) && (x_.tailCallUsed_ === y_.tailCallUsed_))))))
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
if(x_a.EmitNode) {
const x_ = x_a;
if(y_a.EmitNode) {
const y_ = y_a;
return true
return
}
}
}
{
if(x_a.EmitBrowser) {
const x_ = x_a;
if(y_a.EmitBrowser) {
const y_ = y_a;
return true
return
}
}
}
{
if(x_a.EmitBuild) {
const x_ = x_a;
if(y_a.EmitBuild) {
const y_ = y_a;
return true
return
}
}
}
{
if(x_a.EmitExecutable) {
const x_ = x_a;
if(y_a.EmitExecutable) {
const y_ = y_a;
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
if(x_a.EmitNode) {
const x_ = x_a;
if(y_a.EmitNode) {
const y_ = y_a;
return true
return
}
}
}
{
if(x_a.EmitBrowser) {
const x_ = x_a;
if(y_a.EmitBrowser) {
const y_ = y_a;
return true
return
}
}
}
{
if(x_a.EmitBuild) {
const x_ = x_a;
if(y_a.EmitBuild) {
const y_ = y_a;
return true
return
}
}
}
{
if(x_a.EmitExecutable) {
const x_ = x_a;
if(y_a.EmitExecutable) {
const y_ = y_a;
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
return ((x_.variantName_ === y_.variantName_) && ((x_.newtype_ === y_.newtype_) && ((x_.loneVariant_ === y_.loneVariant_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.arguments_, y_.arguments_))))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_JsEmitter_JsEmitter = {
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
const otherModulesOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Module).compare_(x_.otherModules_, y_.otherModules_);
if((otherModulesOrdering_ != ff_core_Ordering.OrderingSame())) {
return otherModulesOrdering_
} else {
const jsImporterOrdering_ = ff_compiler_JsImporter.ff_core_Ordering_Order$ff_compiler_JsImporter_JsImporter.compare_(x_.jsImporter_, y_.jsImporter_);
if((jsImporterOrdering_ != ff_core_Ordering.OrderingSame())) {
return jsImporterOrdering_
} else {
const emitTargetOrdering_ = ff_compiler_JsEmitter.ff_core_Ordering_Order$ff_compiler_JsEmitter_EmitTarget.compare_(x_.emitTarget_, y_.emitTarget_);
if((emitTargetOrdering_ != ff_core_Ordering.OrderingSame())) {
return emitTargetOrdering_
} else {
const isMainModuleOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isMainModule_, y_.isMainModule_);
if((isMainModuleOrdering_ != ff_core_Ordering.OrderingSame())) {
return isMainModuleOrdering_
} else {
const compilerModulePathOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.compilerModulePath_, y_.compilerModulePath_);
if((compilerModulePathOrdering_ != ff_core_Ordering.OrderingSame())) {
return compilerModulePathOrdering_
} else {
const tailCallUsedOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCallUsed_, y_.tailCallUsed_);
if((tailCallUsedOrdering_ != ff_core_Ordering.OrderingSame())) {
return tailCallUsedOrdering_
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
const otherModulesOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Module).compare_(x_.otherModules_, y_.otherModules_);
if((otherModulesOrdering_ != ff_core_Ordering.OrderingSame())) {
return otherModulesOrdering_
} else {
const jsImporterOrdering_ = ff_compiler_JsImporter.ff_core_Ordering_Order$ff_compiler_JsImporter_JsImporter.compare_(x_.jsImporter_, y_.jsImporter_);
if((jsImporterOrdering_ != ff_core_Ordering.OrderingSame())) {
return jsImporterOrdering_
} else {
const emitTargetOrdering_ = ff_compiler_JsEmitter.ff_core_Ordering_Order$ff_compiler_JsEmitter_EmitTarget.compare_(x_.emitTarget_, y_.emitTarget_);
if((emitTargetOrdering_ != ff_core_Ordering.OrderingSame())) {
return emitTargetOrdering_
} else {
const isMainModuleOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isMainModule_, y_.isMainModule_);
if((isMainModuleOrdering_ != ff_core_Ordering.OrderingSame())) {
return isMainModuleOrdering_
} else {
const compilerModulePathOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.compilerModulePath_, y_.compilerModulePath_);
if((compilerModulePathOrdering_ != ff_core_Ordering.OrderingSame())) {
return compilerModulePathOrdering_
} else {
const tailCallUsedOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCallUsed_, y_.tailCallUsed_);
if((tailCallUsedOrdering_ != ff_core_Ordering.OrderingSame())) {
return tailCallUsedOrdering_
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
if(x_a.EmitNode) {
const x_ = x_a;
if(y_a.EmitNode) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.EmitBrowser) {
const x_ = x_a;
if(y_a.EmitBrowser) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.EmitBuild) {
const x_ = x_a;
if(y_a.EmitBuild) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.EmitExecutable) {
const x_ = x_a;
if(y_a.EmitExecutable) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
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
if(x_a.EmitNode) {
const x_ = x_a;
if(y_a.EmitNode) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.EmitBrowser) {
const x_ = x_a;
if(y_a.EmitBrowser) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.EmitBuild) {
const x_ = x_a;
if(y_a.EmitBuild) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.EmitExecutable) {
const x_ = x_a;
if(y_a.EmitExecutable) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
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
if((variantNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return variantNameOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const loneVariantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.loneVariant_, y_.loneVariant_);
if((loneVariantOrdering_ != ff_core_Ordering.OrderingSame())) {
return loneVariantOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
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
const variantNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variantName_, y_.variantName_);
if((variantNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return variantNameOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const loneVariantOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.loneVariant_, y_.loneVariant_);
if((loneVariantOrdering_ != ff_core_Ordering.OrderingSame())) {
return loneVariantOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
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


