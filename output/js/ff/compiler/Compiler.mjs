import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dictionaries from "../../ff/compiler/Dictionaries.mjs"

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Compiler
export function Compiler(files_, time_, jsOutputPath_, packagePaths_, parsedModules_, resolvedModules_, inferredModules_, emittedModules_, phaseDurations_, phaseDurationDelta_) {
return {files_, time_, jsOutputPath_, packagePaths_, parsedModules_, resolvedModules_, inferredModules_, emittedModules_, phaseDurations_, phaseDurationDelta_};
}

export const coreImports_ = ff_core_List.List_map(ff_core_List.Link("Array", ff_core_List.Link("ArrayBuilder", ff_core_List.Link("Bool", ff_core_List.Link("Channel", ff_core_List.Link("Char", ff_core_List.Link("Core", ff_core_List.Link("Duration", ff_core_List.Link("Error", ff_core_List.Link("FileSystem", ff_core_List.Link("Float", ff_core_List.Link("Instant", ff_core_List.Link("Int", ff_core_List.Link("List", ff_core_List.Link("Log", ff_core_List.Link("Map", ff_core_List.Link("Nothing", ff_core_List.Link("Option", ff_core_List.Link("Ordering", ff_core_List.Link("Pair", ff_core_List.Link("Set", ff_core_List.Link("Show", ff_core_List.Link("String", ff_core_List.Link("System", ff_core_List.Link("TaskSystem", ff_core_List.Link("TimeSystem", ff_core_List.Link("Try", ff_core_List.Link("Unit", ff_core_List.Empty()))))))))))))))))))))))))))), ((moduleName_) => {
return ff_compiler_Syntax.DImport(ff_compiler_Syntax.Location("<prelude>", 1, 1), moduleName_, ff_core_Pair.Pair("ff", "core"), ff_core_List.Empty(), moduleName_)
}));

export function make_(files_, time_, jsOutputPath_, packagePaths_) {
return ff_compiler_Compiler.Compiler(files_, time_, jsOutputPath_, packagePaths_, ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Set.empty_(), ff_core_List.Empty(), 0.0)
}

export async function make_$(files_, time_, jsOutputPath_, packagePaths_, $controller) {
return ff_compiler_Compiler.Compiler(files_, time_, jsOutputPath_, packagePaths_, ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Set.empty_(), ff_core_List.Empty(), 0.0)
}

export function Compiler_measure(self_, phase_, packageName_, moduleName_, body_) {
const start_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const result_ = body_();
const stop_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const duration_ = (stop_ - start_);
self_.phaseDurationDelta_ = (self_.phaseDurationDelta_ + duration_);
const text_ = ((((phase_ + " ") + packageName_) + "/") + moduleName_);
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

export function Compiler_parse(self_, packageName_, moduleName_) {
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.parsedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_compiler_Compiler.Compiler_measure(self_, "Parse", packageName_, moduleName_, (() => {
const packagePair_ = ff_core_Core.do_((() => {
const array_ = ff_core_String.String_split(packageName_, 58);
return ff_core_Pair.Pair(ff_core_Array.Array_expect(array_, 0), ff_core_Array.Array_expect(array_, 1))
}));
const packagePath_ = ff_core_Map.Map_expect(self_.packagePaths_, packageName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const file_ = (moduleName_ + ".ff");
const code_ = ff_core_FileSystem.FileSystem_readText(self_.files_, ((packagePath_ + "/") + file_));
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const module_ = ff_compiler_Parser.Parser_parseModule(ff_compiler_Parser.make_(packagePair_, file_, tokens_));
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.packagePair_, _c.file_, _c.dependencies_, ff_core_List.List_addAll(ff_compiler_Compiler.coreImports_, module_.imports_), _c.types_, _c.traits_, _c.instances_, _c.extends_, _c.lets_, _c.functions_)
}))(module_);
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}))
}

export function Compiler_imports(self_, packageName_, module_) {
return ff_core_List.List_map(module_.imports_, ((import_) => {
const newPackageName_ = ((import_.package_.first_ + ":") + import_.package_.second_);
const newModuleName_ = (ff_core_List.List_join(ff_core_List.List_map(import_.directory_, ((_w1) => {
return (_w1 + "/")
})), "") + import_.file_);
return ff_compiler_Compiler.Compiler_parse(self_, newPackageName_, newModuleName_)
}))
}

export function Compiler_resolve(self_, packageName_, moduleName_) {
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_compiler_Compiler.Compiler_measure(self_, "Resolve", packageName_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_parse(self_, packageName_, moduleName_);
const otherModules_ = ff_compiler_Compiler.Compiler_imports(self_, packageName_, module_);
const result_ = ff_compiler_Resolver.Resolver_resolveModule(ff_compiler_Resolver.make_(), module_, otherModules_);
self_.resolvedModules_ = ff_core_Map.Map_add(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}))
}

export function Compiler_infer(self_, packageName_, moduleName_) {
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.inferredModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_compiler_Compiler.Compiler_measure(self_, "Infer", packageName_, moduleName_, (() => {
const module_ = ff_compiler_Compiler.Compiler_resolve(self_, packageName_, moduleName_);
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, packageName_, module_), ((i_) => {
const newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
return ff_compiler_Compiler.Compiler_resolve(self_, newPackageName_, ff_core_FileSystem.FileSystem_prefixName(self_.files_, i_.file_))
}));
const inferredModule_ = ff_compiler_Inference.Inference_inferModule(ff_compiler_Inference.make_(ff_core_List.Link(module_, otherModules_)), module_, otherModules_);
const result_ = ff_compiler_Dictionaries.Dictionaries_processModule(ff_compiler_Dictionaries.make_(ff_core_List.Link(module_, otherModules_)), inferredModule_, otherModules_);
self_.inferredModules_ = ff_core_Map.Map_add(self_.inferredModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}))
}

export function Compiler_emit(self_, packageName_, moduleName_) {
if(ff_core_Set.Set_contains(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {

} else {
ff_compiler_Compiler.Compiler_measure(self_, "Emit", packageName_, moduleName_, (() => {
self_.emittedModules_ = ff_core_Set.Set_add(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const module_ = ff_compiler_Compiler.Compiler_infer(self_, packageName_, moduleName_);
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, packageName_, module_), ((i_) => {
const newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
const newModuleName_ = ff_core_FileSystem.FileSystem_prefixName(self_.files_, i_.file_);
ff_compiler_Compiler.Compiler_emit(self_, newPackageName_, newModuleName_);
return ff_compiler_Compiler.Compiler_infer(self_, newPackageName_, newModuleName_)
}));
const packagePair_ = ff_core_Core.do_((() => {
const array_ = ff_core_String.String_split(packageName_, 58);
return ff_core_Pair.Pair(ff_core_Array.Array_expect(array_, 0), ff_core_Array.Array_expect(array_, 1))
}));
const js_ = ff_compiler_JsEmitter.JsEmitter_emitModule(ff_compiler_JsEmitter.make_(ff_core_List.Link(module_, otherModules_)), packagePair_, module_);
const jsPath_ = ((self_.jsOutputPath_ + "/") + ff_core_String.String_replace(packageName_, ":", "/"));
const jsFile_ = (((jsPath_ + "/") + moduleName_) + ".mjs");
ff_core_FileSystem.FileSystem_createDirectories(self_.files_, jsPath_);
return ff_core_FileSystem.FileSystem_writeText(self_.files_, jsFile_, js_)
}))
}
}

export async function Compiler_measure$(self_, phase_, packageName_, moduleName_, body_, $controller) {
const start_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const result_ = (await body_($controller));
const stop_ = (ff_core_TimeSystem.TimeSystem_elapsed(self_.time_) - self_.phaseDurationDelta_);
const duration_ = (stop_ - start_);
self_.phaseDurationDelta_ = (self_.phaseDurationDelta_ + duration_);
const text_ = ((((phase_ + " ") + packageName_) + "/") + moduleName_);
self_.phaseDurations_ = ff_core_List.Link(ff_core_Pair.Pair(text_, duration_), self_.phaseDurations_);
return result_
}

export async function Compiler_printMeasurements$(self_, $controller) {
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

export async function Compiler_parse$(self_, packageName_, moduleName_, $controller) {
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.parsedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($controller) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Parse", packageName_, moduleName_, (async ($controller) => {
const packagePair_ = ff_core_Core.do_((() => {
const array_ = ff_core_String.String_split(packageName_, 58);
return ff_core_Pair.Pair(ff_core_Array.Array_expect(array_, 0), ff_core_Array.Array_expect(array_, 1))
}));
const packagePath_ = ff_core_Map.Map_expect(self_.packagePaths_, packageName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const file_ = (moduleName_ + ".ff");
const code_ = (await ff_core_FileSystem.FileSystem_readText$(self_.files_, ((packagePath_ + "/") + file_), $controller));
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const module_ = ff_compiler_Parser.Parser_parseModule(ff_compiler_Parser.make_(packagePair_, file_, tokens_));
const result_ = ((async (_c, $controller) => {
return ff_compiler_Syntax.Module(_c.packagePair_, _c.file_, _c.dependencies_, ff_core_List.List_addAll(ff_compiler_Compiler.coreImports_, module_.imports_), _c.types_, _c.traits_, _c.instances_, _c.extends_, _c.lets_, _c.functions_)
}))(module_);
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $controller))
}), $controller))
}

export async function Compiler_imports$(self_, packageName_, module_, $controller) {
return (await ff_core_List.List_map$(module_.imports_, (async (import_, $controller) => {
const newPackageName_ = ((import_.package_.first_ + ":") + import_.package_.second_);
const newModuleName_ = (ff_core_List.List_join(ff_core_List.List_map(import_.directory_, ((_w1) => {
return (_w1 + "/")
})), "") + import_.file_);
return (await ff_compiler_Compiler.Compiler_parse$(self_, newPackageName_, newModuleName_, $controller))
}), $controller))
}

export async function Compiler_resolve$(self_, packageName_, moduleName_, $controller) {
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($controller) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Resolve", packageName_, moduleName_, (async ($controller) => {
const module_ = (await ff_compiler_Compiler.Compiler_parse$(self_, packageName_, moduleName_, $controller));
const otherModules_ = (await ff_compiler_Compiler.Compiler_imports$(self_, packageName_, module_, $controller));
const result_ = ff_compiler_Resolver.Resolver_resolveModule(ff_compiler_Resolver.make_(), module_, otherModules_);
self_.resolvedModules_ = ff_core_Map.Map_add(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $controller))
}), $controller))
}

export async function Compiler_infer$(self_, packageName_, moduleName_, $controller) {
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.inferredModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($controller) => {
return (await ff_compiler_Compiler.Compiler_measure$(self_, "Infer", packageName_, moduleName_, (async ($controller) => {
const module_ = (await ff_compiler_Compiler.Compiler_resolve$(self_, packageName_, moduleName_, $controller));
const otherModules_ = (await ff_core_List.List_map$((await ff_compiler_Compiler.Compiler_imports$(self_, packageName_, module_, $controller)), (async (i_, $controller) => {
const newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
return (await ff_compiler_Compiler.Compiler_resolve$(self_, newPackageName_, (await ff_core_FileSystem.FileSystem_prefixName$(self_.files_, i_.file_, $controller)), $controller))
}), $controller));
const inferredModule_ = ff_compiler_Inference.Inference_inferModule(ff_compiler_Inference.make_(ff_core_List.Link(module_, otherModules_)), module_, otherModules_);
const result_ = ff_compiler_Dictionaries.Dictionaries_processModule(ff_compiler_Dictionaries.make_(ff_core_List.Link(module_, otherModules_)), inferredModule_, otherModules_);
self_.inferredModules_ = ff_core_Map.Map_add(self_.inferredModules_, ((packageName_ + ":") + moduleName_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $controller))
}), $controller))
}

export async function Compiler_emit$(self_, packageName_, moduleName_, $controller) {
if(ff_core_Set.Set_contains(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {

} else {
(await ff_compiler_Compiler.Compiler_measure$(self_, "Emit", packageName_, moduleName_, (async ($controller) => {
self_.emittedModules_ = ff_core_Set.Set_add(self_.emittedModules_, ((packageName_ + ":") + moduleName_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const module_ = (await ff_compiler_Compiler.Compiler_infer$(self_, packageName_, moduleName_, $controller));
const otherModules_ = (await ff_core_List.List_map$((await ff_compiler_Compiler.Compiler_imports$(self_, packageName_, module_, $controller)), (async (i_, $controller) => {
const newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
const newModuleName_ = (await ff_core_FileSystem.FileSystem_prefixName$(self_.files_, i_.file_, $controller));
(await ff_compiler_Compiler.Compiler_emit$(self_, newPackageName_, newModuleName_, $controller));
return (await ff_compiler_Compiler.Compiler_infer$(self_, newPackageName_, newModuleName_, $controller))
}), $controller));
const packagePair_ = ff_core_Core.do_((() => {
const array_ = ff_core_String.String_split(packageName_, 58);
return ff_core_Pair.Pair(ff_core_Array.Array_expect(array_, 0), ff_core_Array.Array_expect(array_, 1))
}));
const js_ = ff_compiler_JsEmitter.JsEmitter_emitModule(ff_compiler_JsEmitter.make_(ff_core_List.Link(module_, otherModules_)), packagePair_, module_);
const jsPath_ = ((self_.jsOutputPath_ + "/") + ff_core_String.String_replace(packageName_, ":", "/"));
const jsFile_ = (((jsPath_ + "/") + moduleName_) + ".mjs");
(await ff_core_FileSystem.FileSystem_createDirectories$(self_.files_, jsPath_, $controller));
return (await ff_core_FileSystem.FileSystem_writeText$(self_.files_, jsFile_, js_, $controller))
}), $controller))
}
}




