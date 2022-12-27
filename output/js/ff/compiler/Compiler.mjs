

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_Deriver from "../../ff/compiler/Deriver.mjs"

import * as ff_compiler_Dictionaries from "../../ff/compiler/Dictionaries.mjs"

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

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

import * as ff_core_Table from "../../ff/core/Table.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Compiler
export function Compiler(emitTarget_, files_, time_, compilerModulePath_, jsOutputPath_, packagePaths_, singleFilePackages_, parsedModules_, resolvedModules_, derivedModules_, inferredModules_, emittedModules_, phaseDurations_, phaseDurationDelta_) {
return {emitTarget_, files_, time_, compilerModulePath_, jsOutputPath_, packagePaths_, singleFilePackages_, parsedModules_, resolvedModules_, derivedModules_, inferredModules_, emittedModules_, phaseDurations_, phaseDurationDelta_};
}

export const coreImports_ = ff_core_List.List_map(ff_core_List.Link("Array", ff_core_List.Link("AssetSystem", ff_core_List.Link("Bool", ff_core_List.Link("BrowserSystem", ff_core_List.Link("Buffer", ff_core_List.Link("BuildSystem", ff_core_List.Link("Channel", ff_core_List.Link("Char", ff_core_List.Link("Core", ff_core_List.Link("Duration", ff_core_List.Link("Equal", ff_core_List.Link("Error", ff_core_List.Link("FetchSystem", ff_core_List.Link("FileHandle", ff_core_List.Link("FileSystem", ff_core_List.Link("Float", ff_core_List.Link("Instant", ff_core_List.Link("Int", ff_core_List.Link("JsValue", ff_core_List.Link("JsSystem", ff_core_List.Link("List", ff_core_List.Link("Log", ff_core_List.Link("Map", ff_core_List.Link("NodeSystem", ff_core_List.Link("Nothing", ff_core_List.Link("Option", ff_core_List.Link("Ordering", ff_core_List.Link("Pair", ff_core_List.Link("Set", ff_core_List.Link("Show", ff_core_List.Link("Stream", ff_core_List.Link("String", ff_core_List.Link("TaskSystem", ff_core_List.Link("TimeSystem", ff_core_List.Link("Try", ff_core_List.Link("Unit", ff_core_List.Link("Table", ff_core_List.Empty()))))))))))))))))))))))))))))))))))))), ((moduleName_) => {
return ff_compiler_Syntax.DImport(ff_compiler_Syntax.Location("<prelude>", 1, 1), moduleName_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_List.Empty(), moduleName_)
}));

export function make_(emitTarget_, files_, time_, compilerModulePath_, jsOutputPath_, resolvedDependencies_) {
return ff_compiler_Compiler.Compiler(emitTarget_, files_, time_, compilerModulePath_, jsOutputPath_, resolvedDependencies_.packagePaths_, resolvedDependencies_.singleFilePackages_, ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Set.empty_(), ff_core_List.Empty(), 0.0)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function make_$(emitTarget_, files_, time_, compilerModulePath_, jsOutputPath_, resolvedDependencies_, $c) {
return ff_compiler_Compiler.Compiler(emitTarget_, files_, time_, compilerModulePath_, jsOutputPath_, resolvedDependencies_.packagePaths_, resolvedDependencies_.singleFilePackages_, ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Set.empty_(), ff_core_List.Empty(), 0.0)
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Compiler_measure(self_, phase_, packagePair_, moduleName_, body_) {
const start_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const result_ = body_();
const stop_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const duration_ = (stop_ - start_);
self_.phaseDurationDelta_ = (self_.phaseDurationDelta_ + duration_);
const text_ = ((((phase_ + " ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")) + "/") + moduleName_);
self_.phaseDurations_ = ff_core_List.Link(ff_core_Pair.Pair(text_, duration_), self_.phaseDurations_);
return result_
}

export function Compiler_printMeasurements(self_) {
const worst_ = ff_core_List.List_reverse(ff_core_List.List_takeLast(ff_core_List.List_sortBy(self_.phaseDurations_, ((_w1) => {
return ((_w1.second_ + 1000000.0) + "")
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), 5));
ff_core_List.List_each(worst_, ((_1) => {
{
const text_ = _1.first_;
const duration_ = _1.second_;
ff_core_Log.debug_(((text_ + ":\t") + ff_core_Duration.Duration_toString(duration_, 3)))
return
}
}))
}

export function Compiler_parse(self_, packagePair_, moduleName_) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.parsedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_compiler_Compiler.Compiler_measure(self_, "Parse", packagePair_, moduleName_, (() => {
const packagePath_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.packagePaths_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (() => {
return ff_core_Core.panic_(("Internal error - package path missing: " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}));
const file_ = (moduleName_ + ".ff");
const code_ = ff_core_FileSystem.FileSystem_readText(self_.files_, ((packagePath_ + "/") + file_));
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const parser_ = ff_compiler_Parser.make_(packagePair_, file_, tokens_, ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget));
const module_ = (ff_core_Set.Set_contains(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_
: ff_compiler_Parser.Parser_parseModuleWithoutPackageInfo(parser_));
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, ff_core_List.List_addAll(ff_compiler_Compiler.coreImports_, module_.imports_), _c.types_, _c.traits_, _c.instances_, _c.extends_, _c.lets_, _c.functions_)
}))(module_);
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
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
ff_compiler_Compiler.fail_(import_.at_, ("Missing dependency declaration for: " + ff_compiler_Syntax.PackagePair_groupName(newPackagePair_, ":")))
};
return ff_compiler_Compiler.Compiler_parse(self_, newPackagePair_, newModuleName_)
}))
}

export function Compiler_resolve(self_, packagePair_, moduleName_) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_compiler_Compiler.Compiler_measure(self_, "Resolve", packagePair_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_parse(self_, packagePair_, moduleName_);
const otherModules_ = ff_compiler_Compiler.Compiler_imports(self_, module_);
const result_ = ff_compiler_Resolver.Resolver_resolveModule(ff_compiler_Resolver.make_(), module_, otherModules_);
self_.resolvedModules_ = ff_core_Map.Map_add(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}))
}

export function Compiler_derive(self_, packagePair_, moduleName_) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.derivedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_compiler_Compiler.Compiler_measure(self_, "Derive", packagePair_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_resolve(self_, packagePair_, moduleName_);
const result_ = ff_compiler_Deriver.Deriver_deriveModule(ff_compiler_Deriver.make_(), module_);
self_.derivedModules_ = ff_core_Map.Map_add(self_.derivedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}))
}

export function Compiler_infer(self_, packagePair_, moduleName_) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.inferredModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_compiler_Compiler.Compiler_measure(self_, "Infer", packagePair_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_derive(self_, packagePair_, moduleName_);
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, module_), ((i_) => {
return ff_compiler_Compiler.Compiler_derive(self_, i_.packagePair_, ff_core_FileSystem.prefixName_(i_.file_))
}));
const inferredModule_ = ff_compiler_Inference.Inference_inferModule(ff_compiler_Inference.make_(ff_core_List.Link(module_, otherModules_)), module_, otherModules_);
const result_ = ff_compiler_Dictionaries.Dictionaries_processModule(ff_compiler_Dictionaries.make_(ff_core_List.Link(module_, otherModules_)), inferredModule_, otherModules_);
self_.inferredModules_ = ff_core_Map.Map_add(self_.inferredModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}))
}

export function Compiler_emit(self_, packagePair_, moduleName_, isMainModule_) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
if(ff_core_Set.Set_contains(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {

} else {
ff_compiler_Compiler.Compiler_measure(self_, "Emit", packagePair_, moduleName_, (() => {
self_.emittedModules_ = ff_core_Set.Set_add(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const module_ = ff_compiler_Compiler.Compiler_infer(self_, packagePair_, moduleName_);
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, module_), ((i_) => {
const newModuleName_ = ff_core_FileSystem.prefixName_(i_.file_);
ff_compiler_Compiler.Compiler_emit(self_, i_.packagePair_, newModuleName_, false);
return ff_compiler_Compiler.Compiler_infer(self_, i_.packagePair_, newModuleName_)
}));
const js_ = ff_compiler_JsEmitter.JsEmitter_emitModule(ff_compiler_JsEmitter.make_(ff_core_List.Link(module_, otherModules_), self_.emitTarget_, isMainModule_, self_.compilerModulePath_), packagePair_, module_);
const jsPath_ = ((self_.jsOutputPath_ + "/") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/"));
const jsFile_ = (((jsPath_ + "/") + moduleName_) + ".mjs");
ff_core_FileSystem.FileSystem_createDirectories(self_.files_, jsPath_);
return ff_core_FileSystem.FileSystem_writeText(self_.files_, jsFile_, js_)
}))
}
}

export async function Compiler_measure$(self_, phase_, packagePair_, moduleName_, body_, $c) {
const start_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const result_ = (await body_($c));
const stop_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const duration_ = (stop_ - start_);
self_.phaseDurationDelta_ = (self_.phaseDurationDelta_ + duration_);
const text_ = ((((phase_ + " ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")) + "/") + moduleName_);
self_.phaseDurations_ = ff_core_List.Link(ff_core_Pair.Pair(text_, duration_), self_.phaseDurations_);
return result_
}

export async function Compiler_printMeasurements$(self_, $c) {
const worst_ = ff_core_List.List_reverse(ff_core_List.List_takeLast(ff_core_List.List_sortBy(self_.phaseDurations_, ((_w1) => {
return ((_w1.second_ + 1000000.0) + "")
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), 5));
ff_core_List.List_each(worst_, ((_1) => {
{
const text_ = _1.first_;
const duration_ = _1.second_;
ff_core_Log.debug_(((text_ + ":\t") + ff_core_Duration.Duration_toString(duration_, 3)))
return
}
}))
}

export async function Compiler_parse$(self_, packagePair_, moduleName_, $c) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.parsedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($c) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Parse", packagePair_, moduleName_, (async ($c) => {
const packagePath_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.packagePaths_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (() => {
return ff_core_Core.panic_(("Internal error - package path missing: " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}));
const file_ = (moduleName_ + ".ff");
const code_ = (await ff_core_FileSystem.FileSystem_readText$(self_.files_, ((packagePath_ + "/") + file_), $c));
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const parser_ = ff_compiler_Parser.make_(packagePair_, file_, tokens_, ff_core_Equal.notEquals_(self_.emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget));
const module_ = (ff_core_Set.Set_contains(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_
: ff_compiler_Parser.Parser_parseModuleWithoutPackageInfo(parser_));
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, ff_core_List.List_addAll(ff_compiler_Compiler.coreImports_, module_.imports_), _c.types_, _c.traits_, _c.instances_, _c.extends_, _c.lets_, _c.functions_)
}))(module_);
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $c))
}), $c))
}

export async function Compiler_imports$(self_, module_, $c) {
return (await ff_core_List.List_map$(module_.imports_, (async (import_, $c) => {
const newPackagePair_ = import_.package_;
const newModuleName_ = (ff_core_List.List_join(ff_core_List.List_map(import_.directory_, ((_w1) => {
return (_w1 + "/")
})), "") + import_.file_);
if((!ff_core_Map.Map_contains(self_.packagePaths_, newPackagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))) {
ff_compiler_Compiler.fail_(import_.at_, ("Missing dependency declaration for: " + ff_compiler_Syntax.PackagePair_groupName(newPackagePair_, ":")))
};
return (await ff_compiler_Compiler.Compiler_parse$(self_, newPackagePair_, newModuleName_, $c))
}), $c))
}

export async function Compiler_resolve$(self_, packagePair_, moduleName_, $c) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($c) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Resolve", packagePair_, moduleName_, (async ($c) => {
const module_ = (await ff_compiler_Compiler.Compiler_parse$(self_, packagePair_, moduleName_, $c));
const otherModules_ = (await ff_compiler_Compiler.Compiler_imports$(self_, module_, $c));
const result_ = ff_compiler_Resolver.Resolver_resolveModule(ff_compiler_Resolver.make_(), module_, otherModules_);
self_.resolvedModules_ = ff_core_Map.Map_add(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $c))
}), $c))
}

export async function Compiler_derive$(self_, packagePair_, moduleName_, $c) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.derivedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($c) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Derive", packagePair_, moduleName_, (async ($c) => {
const module_ = (await ff_compiler_Compiler.Compiler_resolve$(self_, packagePair_, moduleName_, $c));
const result_ = ff_compiler_Deriver.Deriver_deriveModule(ff_compiler_Deriver.make_(), module_);
self_.derivedModules_ = ff_core_Map.Map_add(self_.derivedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $c))
}), $c))
}

export async function Compiler_infer$(self_, packagePair_, moduleName_, $c) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.inferredModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($c) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Infer", packagePair_, moduleName_, (async ($c) => {
const module_ = (await ff_compiler_Compiler.Compiler_derive$(self_, packagePair_, moduleName_, $c));
const otherModules_ = (await ff_core_List.List_map$((await ff_compiler_Compiler.Compiler_imports$(self_, module_, $c)), (async (i_, $c) => {
return (await ff_compiler_Compiler.Compiler_derive$(self_, i_.packagePair_, ff_core_FileSystem.prefixName_(i_.file_), $c))
}), $c));
const inferredModule_ = ff_compiler_Inference.Inference_inferModule(ff_compiler_Inference.make_(ff_core_List.Link(module_, otherModules_)), module_, otherModules_);
const result_ = ff_compiler_Dictionaries.Dictionaries_processModule(ff_compiler_Dictionaries.make_(ff_core_List.Link(module_, otherModules_)), inferredModule_, otherModules_);
self_.inferredModules_ = ff_core_Map.Map_add(self_.inferredModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $c))
}), $c))
}

export async function Compiler_emit$(self_, packagePair_, moduleName_, isMainModule_, $c) {
const packageName_ = ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":");
if(ff_core_Set.Set_contains(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {

} else {
(await ff_compiler_Compiler.Compiler_measure$(self_, "Emit", packagePair_, moduleName_, (async ($c) => {
self_.emittedModules_ = ff_core_Set.Set_add(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const module_ = (await ff_compiler_Compiler.Compiler_infer$(self_, packagePair_, moduleName_, $c));
const otherModules_ = (await ff_core_List.List_map$((await ff_compiler_Compiler.Compiler_imports$(self_, module_, $c)), (async (i_, $c) => {
const newModuleName_ = ff_core_FileSystem.prefixName_(i_.file_);
(await ff_compiler_Compiler.Compiler_emit$(self_, i_.packagePair_, newModuleName_, false, $c));
return (await ff_compiler_Compiler.Compiler_infer$(self_, i_.packagePair_, newModuleName_, $c))
}), $c));
const js_ = ff_compiler_JsEmitter.JsEmitter_emitModule(ff_compiler_JsEmitter.make_(ff_core_List.Link(module_, otherModules_), self_.emitTarget_, isMainModule_, self_.compilerModulePath_), packagePair_, module_);
const jsPath_ = ((self_.jsOutputPath_ + "/") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/"));
const jsFile_ = (((jsPath_ + "/") + moduleName_) + ".mjs");
(await ff_core_FileSystem.FileSystem_createDirectories$(self_.files_, jsPath_, $c));
return (await ff_core_FileSystem.FileSystem_writeText$(self_.files_, jsFile_, js_, $c))
}), $c))
}
}




