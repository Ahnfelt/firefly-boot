import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Compiler
export function Compiler(files_, scalaOutputPath_, jsOutputPath_, packagePaths_, parsedModules_, resolvedModules_, inferredModules_, emittedModules_) {
return {files_, scalaOutputPath_, jsOutputPath_, packagePaths_, parsedModules_, resolvedModules_, inferredModules_, emittedModules_};
}

export const coreImports_ = ff_core_List.List_map(ff_core_List.Link("Array", ff_core_List.Link("ArrayBuilder", ff_core_List.Link("Bool", ff_core_List.Link("Char", ff_core_List.Link("Core", ff_core_List.Link("Duration", ff_core_List.Link("FileSystem", ff_core_List.Link("Float", ff_core_List.Link("Int", ff_core_List.Link("List", ff_core_List.Link("Log", ff_core_List.Link("Map", ff_core_List.Link("Nothing", ff_core_List.Link("Option", ff_core_List.Link("Pair", ff_core_List.Link("Set", ff_core_List.Link("String", ff_core_List.Link("System", ff_core_List.Link("TimeSystem", ff_core_List.Link("Try", ff_core_List.Link("Unit", ff_core_List.Empty()))))))))))))))))))))), ((moduleName_) => {
return ff_compiler_Syntax.DImport(ff_compiler_Syntax.Location("<prelude>", 1, 1), moduleName_, ff_core_Pair.Pair("ff", "core"), ff_core_List.Empty(), moduleName_)
}))

export function make_(files_, scalaOutputPath_, jsOutputPath_, packagePaths_) {
return ff_compiler_Compiler.Compiler(files_, scalaOutputPath_, jsOutputPath_, packagePaths_, ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Set.empty_())
}

export function Compiler_parse(self_, packageName_, moduleName_) {
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.parsedModules_, ((packageName_ + ":") + moduleName_)), (() => {
const packagePair_ = ff_core_Core.do_((() => {
const array_ = ff_core_String.String_split(packageName_, 58)
return ff_core_Pair.Pair(ff_core_Array.Array_expect(array_, 0), ff_core_Array.Array_expect(array_, 1))
}))
const packagePath_ = ff_core_Map.Map_expect(self_.packagePaths_, packageName_)
const file_ = (moduleName_ + ".ff")
const code_ = ff_core_FileSystem.FileSystem_readText(self_.files_, ((packagePath_ + "/") + file_))
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_)
const module_ = ff_compiler_Parser.Parser_parseModule(ff_compiler_Parser.make_(packagePair_, file_, tokens_))
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.packagePair_, _c.file_, _c.dependencies_, ff_core_List.List_addAll(ff_compiler_Compiler.coreImports_, module_.imports_), _c.types_, _c.traits_, _c.instances_, _c.extends_, _c.lets_, _c.functions_)
}))(module_)
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, ((packageName_ + ":") + moduleName_), result_)
return result_
}))
}

export function Compiler_imports(self_, packageName_, module_) {
return ff_core_List.List_map(module_.imports_, ((import_) => {
const newPackageName_ = ((import_.package_.first_ + ":") + import_.package_.second_)
const newModuleName_ = (ff_core_List.List_join(ff_core_List.List_map(import_.directory_, ((_w1) => {
return (_w1 + "/")
})), "") + import_.file_)
return ff_compiler_Compiler.Compiler_parse(self_, newPackageName_, newModuleName_)
}))
}

export function Compiler_resolve(self_, packageName_, moduleName_) {
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.resolvedModules_, ((packageName_ + ":") + moduleName_)), (() => {
const module_ = ff_compiler_Compiler.Compiler_parse(self_, packageName_, moduleName_)
const otherModules_ = ff_compiler_Compiler.Compiler_imports(self_, packageName_, module_)
const result_ = ff_compiler_Resolver.Resolver_resolveModule(ff_compiler_Resolver.make_(), module_, otherModules_)
self_.resolvedModules_ = ff_core_Map.Map_add(self_.resolvedModules_, ((packageName_ + ":") + moduleName_), result_)
return result_
}))
}

export function Compiler_infer(self_, packageName_, moduleName_) {
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.inferredModules_, ((packageName_ + ":") + moduleName_)), (() => {
const module_ = ff_compiler_Compiler.Compiler_resolve(self_, packageName_, moduleName_)
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, packageName_, module_), ((i_) => {
const newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_)
return ff_compiler_Compiler.Compiler_resolve(self_, newPackageName_, ff_core_FileSystem.FileSystem_prefixName(self_.files_, i_.file_))
}))
const instances_ = ff_core_List.List_addAll(module_.instances_, ff_core_List.List_flatMap(otherModules_, ((_w1) => {
return _w1.instances_
})))
const result_ = ff_compiler_Inference.Inference_inferModule(ff_compiler_Inference.make_(instances_), module_, otherModules_)
self_.inferredModules_ = ff_core_Map.Map_add(self_.inferredModules_, ((packageName_ + ":") + moduleName_), result_)
return result_
}))
}

export function Compiler_emit(self_, packageName_, moduleName_) {
if(ff_core_Set.Set_contains(self_.emittedModules_, ((packageName_ + ":") + moduleName_))) {

} else {
self_.emittedModules_ = ff_core_Set.Set_add(self_.emittedModules_, ((packageName_ + ":") + moduleName_))
const module_ = ff_compiler_Compiler.Compiler_infer(self_, packageName_, moduleName_)
const otherModules_ = ff_core_List.List_map(ff_compiler_Compiler.Compiler_imports(self_, packageName_, module_), ((i_) => {
const newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_)
const newModuleName_ = ff_core_FileSystem.FileSystem_prefixName(self_.files_, i_.file_)
ff_compiler_Compiler.Compiler_emit(self_, newPackageName_, newModuleName_)
return ff_compiler_Compiler.Compiler_infer(self_, newPackageName_, newModuleName_)
}))
const packagePair_ = ff_core_Core.do_((() => {
const array_ = ff_core_String.String_split(packageName_, 58)
return ff_core_Pair.Pair(ff_core_Array.Array_expect(array_, 0), ff_core_Array.Array_expect(array_, 1))
}))
const js_ = ff_compiler_JsEmitter.JsEmitter_emitModule(ff_compiler_JsEmitter.make_(ff_core_List.Link(module_, otherModules_)), packagePair_, module_)
const jsPath_ = ((self_.jsOutputPath_ + "/") + ff_core_String.String_replace(packageName_, ":", "/"))
const jsFile_ = (((jsPath_ + "/") + moduleName_) + ".mjs")
ff_core_FileSystem.FileSystem_createDirectories(self_.files_, jsPath_)
ff_core_FileSystem.FileSystem_writeText(self_.files_, jsFile_, js_)
}
}


