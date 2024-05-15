

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_Deriver from "../../ff/compiler/Deriver.mjs"

import * as ff_compiler_Dictionaries from "../../ff/compiler/Dictionaries.mjs"

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_ModuleCache from "../../ff/compiler/ModuleCache.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

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

// type Compiler
export function Compiler(emitTarget_, task_, compilerModulePath_, jsOutputPath_, packagePaths_, singleFilePackages_, virtualFiles_, cache_, lspHook_, phaseDurationDelta_, phaseDurations_) {
return {emitTarget_, task_, compilerModulePath_, jsOutputPath_, packagePaths_, singleFilePackages_, virtualFiles_, cache_, lspHook_, phaseDurationDelta_, phaseDurations_};
}

export const coreImports_ = ff_core_List.List_map(["Any", "Array", "AssetSystem", "Atomic", "Bool", "BrowserSystem", "Buffer", "BuildSystem", "Channel", "Char", "Core", "Duration", "Equal", "Error", "FileHandle", "Float", "HttpClient", "Instant", "Int", "IntMap", "Json", "JsValue", "JsSystem", "List", "Lock", "Log", "Map", "NodeSystem", "Nothing", "Option", "Ordering", "Pair", "Path", "Random", "Serializable", "Set", "Show", "SourceLocation", "Stream", "String", "StringMap", "Task", "Try", "Unit"], ((moduleName_) => {
return ff_compiler_Syntax.DImport(ff_compiler_Syntax.Location("<prelude>", 1, 1), moduleName_, ff_compiler_Syntax.PackagePair("ff", "core"), [], moduleName_)
}));

export function new_(emitTarget_, task_, compilerModulePath_, jsOutputPath_, resolvedDependencies_, virtualFiles_, cache_, lspHook_) {
return ff_compiler_Compiler.Compiler(emitTarget_, task_, compilerModulePath_, jsOutputPath_, resolvedDependencies_.packagePaths_, resolvedDependencies_.singleFilePackages_, virtualFiles_, cache_, lspHook_, 0.0, ff_core_List.List_toArray([]))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function new_$(emitTarget_, task_, compilerModulePath_, jsOutputPath_, resolvedDependencies_, virtualFiles_, cache_, lspHook_, $task) {
return ff_compiler_Compiler.Compiler(emitTarget_, task_, compilerModulePath_, jsOutputPath_, resolvedDependencies_.packagePaths_, resolvedDependencies_.singleFilePackages_, virtualFiles_, cache_, lspHook_, 0.0, ff_core_List.List_toArray([]))
}

export async function fail_$(at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Compiler_measure(self_, phase_, packagePair_, moduleName_, body_) {
const start_ = (ff_core_Task.Task_elapsed(self_.task_) - self_.phaseDurationDelta_);
const result_ = body_();
const stop_ = (ff_core_Task.Task_elapsed(self_.task_) - self_.phaseDurationDelta_);
const duration_ = (stop_ - start_);
self_.phaseDurationDelta_ = (self_.phaseDurationDelta_ + duration_);
const text_ = ((((phase_ + " ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")) + "/") + moduleName_);
ff_core_Array.Array_push(self_.phaseDurations_, ff_core_Pair.Pair(text_, duration_));
return result_
}

export function Compiler_printMeasurements(self_) {
const worst_ = ff_core_List.List_reverse(ff_core_List.List_takeLast(ff_core_List.List_sortBy(ff_core_Array.Array_toList(self_.phaseDurations_, 0, 9007199254740991), ((_w1) => {
return ((_w1.second_ + 1000000.0) + "")
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), 5));
ff_core_List.List_each(worst_, ((_1) => {
{
const text_ = _1.first_;
const duration_ = _1.second_;
ff_core_Log.debug_(((text_ + ":\t") + ff_core_Duration.Duration_show(duration_, 3)))
return
}
}))
}

export function Compiler_parse(self_, packagePair_, moduleName_, importedAt_) {
return ff_compiler_ModuleCache.ModuleCache_cacheParsedModule(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, ((path_) => {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return ff_compiler_Compiler.Compiler_measure(self_, "Parse", packagePair_, moduleName_, (() => {
const code_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.virtualFiles_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
ff_core_Option.Option_each(importedAt_, ((at_) => {
if((!ff_core_Path.Path_exists(path_, false, false, false))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((("Imported module not found: " + packageName_) + "/") + moduleName_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}));
return ff_core_Path.Path_readText(path_)
}));
const completionAt_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && self_.lspHook_.insertIdentifier_)
? ff_core_Option.Some(self_.lspHook_.at_)
: ff_core_Option.None());
const tokens_ = ff_compiler_Tokenizer.tokenize_(ff_core_Path.Path_absolute(path_), code_, completionAt_, ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_));
const parser_ = ff_compiler_Parser.new_(packagePair_, ff_core_Path.Path_base(path_), tokens_, ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget), self_.lspHook_);
const module_ = (ff_core_Set.Set_contains(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_
: ff_compiler_Parser.Parser_parseModuleWithoutPackageInfo(parser_));
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, [...ff_compiler_Compiler.coreImports_, ...module_.imports_], _c.types_, _c.traits_, _c.instances_, _c.extends_, _c.lets_, _c.functions_)
}))(module_);
return result_
}))
}))
}

export function Compiler_imports(self_, module_) {
return ff_core_List.List_map(module_.imports_, ((import_) => {
const newPackagePair_ = import_.package_;
const newModuleName_ = (ff_core_List.List_join(ff_core_List.List_map(import_.directory_, ((_w1) => {
return (_w1 + "/")
})), "") + import_.file_);
if((!ff_core_Map.Map_contains(self_.packagePaths_, newPackagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(import_.at_, ("Missing dependency declaration for: " + ff_compiler_Syntax.PackagePair_groupName(newPackagePair_, ":"))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return ff_compiler_Compiler.Compiler_parse(self_, newPackagePair_, newModuleName_, ff_core_Option.Some(import_.at_))
}))
}

export function Compiler_resolve(self_, packagePair_, moduleName_) {
return ff_compiler_ModuleCache.ModuleCache_cacheResolvedModule(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, ((path_) => {
return ff_compiler_Compiler.Compiler_measure(self_, "Resolve", packagePair_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_parse(self_, packagePair_, moduleName_, ff_core_Option.None());
const otherModules_ = ff_compiler_Compiler.Compiler_imports(self_, module_);
const resolver_ = ff_compiler_Resolver.new_(packagePair_, moduleName_, self_.lspHook_);
return ff_compiler_Resolver.Resolver_resolveModule(resolver_, module_, otherModules_)
}))
}))
}

export function Compiler_derive(self_, packagePair_, moduleName_) {
return ff_compiler_ModuleCache.ModuleCache_cacheDerivedModule(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, ((path_) => {
return ff_compiler_Compiler.Compiler_measure(self_, "Derive", packagePair_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_resolve(self_, packagePair_, moduleName_);
return ff_compiler_Deriver.Deriver_deriveModule(ff_compiler_Deriver.new_(), module_)
}))
}))
}

export function Compiler_infer(self_, packagePair_, moduleName_) {
return ff_compiler_ModuleCache.ModuleCache_cacheInferredModule(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, ((path_) => {
return ff_compiler_Compiler.Compiler_measure(self_, "Infer", packagePair_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_derive(self_, packagePair_, moduleName_);
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, module_), ((i_) => {
return ff_compiler_Compiler.Compiler_derive(self_, i_.packagePair_, ff_core_String.String_dropLast(i_.file_, ff_core_String.String_size(".ff")))
}));
const inference_ = ff_compiler_Inference.new_([module_, ...otherModules_], self_.lspHook_);
const inferredModule_ = ff_compiler_Inference.Inference_inferModule(inference_, module_, otherModules_);
return ff_compiler_Dictionaries.Dictionaries_processModule(ff_compiler_Dictionaries.new_([module_, ...otherModules_]), inferredModule_, otherModules_)
}))
}))
}

export function Compiler_emit(self_, packagePair_, moduleName_, isMainModule_) {
ff_compiler_ModuleCache.ModuleCache_cacheEmittedModule(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, ((path_) => {
ff_compiler_Compiler.Compiler_measure(self_, "Emit", packagePair_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_infer(self_, packagePair_, moduleName_);
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, module_), ((i_) => {
const newModuleName_ = ff_core_String.String_dropLast(i_.file_, ff_core_String.String_size(".ff"));
ff_compiler_Compiler.Compiler_emit(self_, i_.packagePair_, newModuleName_, false);
return ff_compiler_Compiler.Compiler_infer(self_, i_.packagePair_, newModuleName_)
}));
const allModules_ = [module_, ...otherModules_];
const js_ = ff_compiler_JsEmitter.JsEmitter_emitModule(ff_compiler_JsEmitter.new_(allModules_, self_.emitTarget_, isMainModule_, self_.compilerModulePath_, packagePair_, moduleName_), packagePair_, module_);
const jsPath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(self_.jsOutputPath_, packagePair_.group_), packagePair_.name_);
const jsFile_ = ff_core_Path.Path_slash(jsPath_, (moduleName_ + ".mjs"));
ff_core_Path.Path_createDirectory(jsPath_, true);
return ff_core_Path.Path_writeText(jsFile_, js_)
}))
}))
}

export async function Compiler_measure$(self_, phase_, packagePair_, moduleName_, body_, $task) {
const start_ = ((await ff_core_Task.Task_elapsed$(self_.task_, $task)) - self_.phaseDurationDelta_);
const result_ = (await body_($task));
const stop_ = ((await ff_core_Task.Task_elapsed$(self_.task_, $task)) - self_.phaseDurationDelta_);
const duration_ = (stop_ - start_);
self_.phaseDurationDelta_ = (self_.phaseDurationDelta_ + duration_);
const text_ = ((((phase_ + " ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")) + "/") + moduleName_);
ff_core_Array.Array_push(self_.phaseDurations_, ff_core_Pair.Pair(text_, duration_));
return result_
}

export async function Compiler_printMeasurements$(self_, $task) {
const worst_ = ff_core_List.List_reverse(ff_core_List.List_takeLast(ff_core_List.List_sortBy(ff_core_Array.Array_toList(self_.phaseDurations_, 0, 9007199254740991), ((_w1) => {
return ((_w1.second_ + 1000000.0) + "")
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), 5));
ff_core_List.List_each(worst_, ((_1) => {
{
const text_ = _1.first_;
const duration_ = _1.second_;
ff_core_Log.debug_(((text_ + ":\t") + ff_core_Duration.Duration_show(duration_, 3)))
return
}
}))
}

export async function Compiler_parse$(self_, packagePair_, moduleName_, importedAt_, $task) {
return (await ff_compiler_ModuleCache.ModuleCache_cacheParsedModule$(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, (async (path_, $task) => {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Parse", packagePair_, moduleName_, (async ($task) => {
const code_ = (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.virtualFiles_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($task) => {
(await ff_core_Option.Option_each$(importedAt_, (async (at_, $task) => {
if((!(await ff_core_Path.Path_exists$(path_, false, false, false, $task)))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((("Imported module not found: " + packageName_) + "/") + moduleName_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}), $task));
return (await ff_core_Path.Path_readText$(path_, $task))
}), $task));
const completionAt_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && self_.lspHook_.insertIdentifier_)
? ff_core_Option.Some(self_.lspHook_.at_)
: ff_core_Option.None());
const tokens_ = ff_compiler_Tokenizer.tokenize_((await ff_core_Path.Path_absolute$(path_, $task)), code_, completionAt_, ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_));
const parser_ = ff_compiler_Parser.new_(packagePair_, (await ff_core_Path.Path_base$(path_, $task)), tokens_, ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget), self_.lspHook_);
const module_ = (ff_core_Set.Set_contains(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_
: ff_compiler_Parser.Parser_parseModuleWithoutPackageInfo(parser_));
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, [...ff_compiler_Compiler.coreImports_, ...module_.imports_], _c.types_, _c.traits_, _c.instances_, _c.extends_, _c.lets_, _c.functions_)
}))(module_);
return result_
}), $task))
}), $task))
}

export async function Compiler_imports$(self_, module_, $task) {
return (await ff_core_List.List_map$(module_.imports_, (async (import_, $task) => {
const newPackagePair_ = import_.package_;
const newModuleName_ = (ff_core_List.List_join(ff_core_List.List_map(import_.directory_, ((_w1) => {
return (_w1 + "/")
})), "") + import_.file_);
if((!ff_core_Map.Map_contains(self_.packagePaths_, newPackagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(import_.at_, ("Missing dependency declaration for: " + ff_compiler_Syntax.PackagePair_groupName(newPackagePair_, ":"))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return (await ff_compiler_Compiler.Compiler_parse$(self_, newPackagePair_, newModuleName_, ff_core_Option.Some(import_.at_), $task))
}), $task))
}

export async function Compiler_resolve$(self_, packagePair_, moduleName_, $task) {
return (await ff_compiler_ModuleCache.ModuleCache_cacheResolvedModule$(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, (async (path_, $task) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Resolve", packagePair_, moduleName_, (async ($task) => {
const module_ = (await ff_compiler_Compiler.Compiler_parse$(self_, packagePair_, moduleName_, ff_core_Option.None(), $task));
const otherModules_ = (await ff_compiler_Compiler.Compiler_imports$(self_, module_, $task));
const resolver_ = ff_compiler_Resolver.new_(packagePair_, moduleName_, self_.lspHook_);
return ff_compiler_Resolver.Resolver_resolveModule(resolver_, module_, otherModules_)
}), $task))
}), $task))
}

export async function Compiler_derive$(self_, packagePair_, moduleName_, $task) {
return (await ff_compiler_ModuleCache.ModuleCache_cacheDerivedModule$(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, (async (path_, $task) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Derive", packagePair_, moduleName_, (async ($task) => {
const module_ = (await ff_compiler_Compiler.Compiler_resolve$(self_, packagePair_, moduleName_, $task));
return ff_compiler_Deriver.Deriver_deriveModule(ff_compiler_Deriver.new_(), module_)
}), $task))
}), $task))
}

export async function Compiler_infer$(self_, packagePair_, moduleName_, $task) {
return (await ff_compiler_ModuleCache.ModuleCache_cacheInferredModule$(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, (async (path_, $task) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Infer", packagePair_, moduleName_, (async ($task) => {
const module_ = (await ff_compiler_Compiler.Compiler_derive$(self_, packagePair_, moduleName_, $task));
const otherModules_ = (await ff_core_List.List_map$((await ff_compiler_Compiler.Compiler_imports$(self_, module_, $task)), (async (i_, $task) => {
return (await ff_compiler_Compiler.Compiler_derive$(self_, i_.packagePair_, ff_core_String.String_dropLast(i_.file_, ff_core_String.String_size(".ff")), $task))
}), $task));
const inference_ = ff_compiler_Inference.new_([module_, ...otherModules_], self_.lspHook_);
const inferredModule_ = ff_compiler_Inference.Inference_inferModule(inference_, module_, otherModules_);
return ff_compiler_Dictionaries.Dictionaries_processModule(ff_compiler_Dictionaries.new_([module_, ...otherModules_]), inferredModule_, otherModules_)
}), $task))
}), $task))
}

export async function Compiler_emit$(self_, packagePair_, moduleName_, isMainModule_, $task) {
(await ff_compiler_ModuleCache.ModuleCache_cacheEmittedModule$(self_.cache_, self_.packagePaths_, packagePair_, moduleName_, (async (path_, $task) => {
(await ff_compiler_Compiler.Compiler_measure$(self_, "Emit", packagePair_, moduleName_, (async ($task) => {
const module_ = (await ff_compiler_Compiler.Compiler_infer$(self_, packagePair_, moduleName_, $task));
const otherModules_ = (await ff_core_List.List_map$((await ff_compiler_Compiler.Compiler_imports$(self_, module_, $task)), (async (i_, $task) => {
const newModuleName_ = ff_core_String.String_dropLast(i_.file_, ff_core_String.String_size(".ff"));
(await ff_compiler_Compiler.Compiler_emit$(self_, i_.packagePair_, newModuleName_, false, $task));
return (await ff_compiler_Compiler.Compiler_infer$(self_, i_.packagePair_, newModuleName_, $task))
}), $task));
const allModules_ = [module_, ...otherModules_];
const js_ = (await ff_compiler_JsEmitter.JsEmitter_emitModule$((await ff_compiler_JsEmitter.new_$(allModules_, self_.emitTarget_, isMainModule_, self_.compilerModulePath_, packagePair_, moduleName_, $task)), packagePair_, module_, $task));
const jsPath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(self_.jsOutputPath_, packagePair_.group_, $task)), packagePair_.name_, $task));
const jsFile_ = (await ff_core_Path.Path_slash$(jsPath_, (moduleName_ + ".mjs"), $task));
(await ff_core_Path.Path_createDirectory$(jsPath_, true, $task));
return (await ff_core_Path.Path_writeText$(jsFile_, js_, $task))
}), $task))
}), $task))
}




