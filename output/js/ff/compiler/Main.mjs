

import * as ff_compiler_Main from "../../ff/compiler/Main.mjs"

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

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

// type MainCommand
const BootstrapCommand$ = {BootstrapCommand: true};
export function BootstrapCommand() {
return BootstrapCommand$;
}
export function RunCommand(mainPath_) {
return {RunCommand: true, mainPath_};
}
export function BrowserCommand(mainPath_) {
return {BrowserCommand: true, mainPath_};
}
export function BuildCommand(mainPath_) {
return {BuildCommand: true, mainPath_};
}



export function main_(system_) {
let arguments_ = ff_core_NodeSystem.NodeSystem_arguments(system_);
function consumeArgument_() {
const first_ = ff_core_List.List_first(arguments_);
arguments_ = ff_core_List.List_dropFirst(arguments_, 1);
return first_
}
const fireflyPath_ = ff_core_Option.Option_expect(consumeArgument_());
const command_ = (((_1) => {
{
const s_ = _1;
const _guard1 = ff_core_String.String_endsWith(s_, ".ff");
if(_guard1) {
return ff_compiler_Main.RunCommand(ff_core_String.String_dropLast(s_, 3))
return
}
}
{
if(_1 == "run") {
return ff_compiler_Main.RunCommand(ff_core_String.String_dropLast(ff_core_Option.Option_expect(consumeArgument_()), 3))
return
}
}
{
if(_1 == "browser") {
return ff_compiler_Main.BrowserCommand(ff_core_String.String_dropLast(ff_core_Option.Option_expect(consumeArgument_()), 3))
return
}
}
{
if(_1 == "build") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_expect(consumeArgument_()), 3))
return
}
}
{
if(_1 == "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
return
}
}
{
const s_ = _1;
return ff_core_Core.panic_((("Unknown command '" + s_) + "'"))
return
}
}))(ff_core_Option.Option_expect(consumeArgument_()));
for(;;) {
const _1 = command_;
{
if(_1.RunCommand) {
const moduleName_ = _1.mainPath_;

break
}
}
{
ff_core_Option.Option_each(ff_core_List.List_first(arguments_), ((argument_) => {
ff_core_Core.panic_(("Unknown argument: " + argument_))
}))
break
}
};
function buildScript_(mainFile_, mainPackagePair_, emitTarget_, resolvedDependencies_) {
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (fireflyPath_ + "/core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const compilerModulePath_ = ((ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
? ff_core_Option.Some((fireflyPath_ + "/output/js/ff/compiler/Builder.mjs"))
: ff_core_Option.None());
const targetName_ = (((_1) => {
{
if(_1.EmitBuild) {
return "build"
return
}
}
{
if(_1.EmitNode) {
return "node"
return
}
}
{
if(_1.EmitBrowser) {
return "browser"
return
}
}
{
if(_1.EmitExecutable) {
return "executable"
return
}
}
}))(emitTarget_);
ff_compiler_Builder.build_(system_, emitTarget_, mainPackagePair_, mainFile_, (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), compilerModulePath_, ".firefly/temporary", (".firefly/output/" + targetName_), false)
}
for(;;) {
const _1 = command_;
{
if(_1.RunCommand) {
const mainFile_ = _1.mainPath_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_files(system_), ff_core_NodeSystem.NodeSystem_fetch(system_), (mainFile_ + ".ff"));
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_files(system_));
buildScript_(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), fixedDependencies_);
ff_compiler_Main.importAndRun_(ff_core_NodeSystem.NodeSystem_files(system_), fireflyPath_, "node", resolvedDependencies_.mainPackagePair_, mainFile_, arguments_)
break
}
}
{
if(_1.BrowserCommand) {
const mainFile_ = _1.mainPath_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_files(system_), ff_core_NodeSystem.NodeSystem_fetch(system_), (mainFile_ + ".ff"));
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_files(system_));
buildScript_(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBrowser(), fixedDependencies_);
ff_compiler_Main.bundleForBrowser_(system_, resolvedDependencies_.mainPackagePair_, mainFile_)
break
}
}
{
if(_1.BuildCommand) {
const mainFile_ = _1.mainPath_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_files(system_), ff_core_NodeSystem.NodeSystem_fetch(system_), (mainFile_ + ".ff"));
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_files(system_));
buildScript_(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBuild(), fixedDependencies_);
buildScript_(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitExecutable(), fixedDependencies_);
ff_compiler_Main.bundleForPkg_(system_, resolvedDependencies_.mainPackagePair_, mainFile_);
ff_compiler_Main.importAndRun_(ff_core_NodeSystem.NodeSystem_files(system_), fireflyPath_, "build", resolvedDependencies_.mainPackagePair_, mainFile_, arguments_)
break
}
}
{
if(_1.BootstrapCommand) {
ff_compiler_Builder.build_(system_, ff_compiler_JsEmitter.EmitNode(), ff_compiler_Syntax.PackagePair("ff", "compiler"), "Main", ff_compiler_Dependencies.ResolvedDependencies(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "compiler"), "compiler"), ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), "core"), ff_core_List.Empty())), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)), ff_core_Option.None(), "output/temporary", "output/js", true)
break
}
}
}
}

export function bundleForPkg_(system_, packagePair_, mainFile_) {
const prefix_ = ".firefly/output/executable/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
ff_core_BuildSystem.internalNodeCallEsBuild_(system_, mainJsFile_, file_, false)
}

export function bundleForBrowser_(system_, packagePair_, mainFile_) {
const prefix_ = ".firefly/output/browser/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
const browserCode_ = ff_core_BuildSystem.BrowserCode(packagePair_.group_, packagePair_.name_, mainFile_, ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair("/", (() => {
return ff_core_FileSystem.FileSystem_readStream(ff_core_NodeSystem.NodeSystem_files(system_), "")
})), ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)));
ff_core_BuildSystem.internalCallEsBuild_(browserCode_, mainJsFile_, file_, true, true)
}

export function importAndRun_(fs_, fireflyPath_, target_, packagePair_, mainFile_, arguments_) {
throw new Error('Function importAndRun is missing on this target in sync context.');
}

export function prepareFireflyDirectory_(fs_) {
if((!ff_core_FileSystem.FileSystem_exists(fs_, ".firefly/output"))) {
if((!ff_core_FileSystem.FileSystem_exists(fs_, ".firefly"))) {
ff_core_FileSystem.FileSystem_createDirectory(fs_, ".firefly")
};
ff_core_FileSystem.FileSystem_createDirectory(fs_, ".firefly/output")
}
}

export function detectBuildMain_(fs_, packagePair_, mainFile_) {
const file_ = (mainFile_ + ".ff");
const code_ = ff_core_FileSystem.FileSystem_readText(fs_, file_);
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const parser_ = ff_compiler_Parser.make_(ff_compiler_Syntax.PackagePair("script", "script"), file_, tokens_, false);
const module_ = ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_;
return ff_core_List.List_any(module_.functions_, ((definition_) => {
return (((definition_.signature_.name_ === "buildMain") || (definition_.signature_.name_ === "main")) && (((_1) => {
{
if(_1.Link) {
const p_ = _1.head_;
if(_1.tail_.Empty) {
const _guard1 = p_.valueType_;
if(_guard1.TConstructor) {
if(_guard1.name_ == "BuildSystem") {
return true
return
}
}
}
}
}
{
return false
return
}
}))(definition_.signature_.parameters_))
}))
}

export async function main_$(system_, $c) {
let arguments_ = (await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c));
function consumeArgument_() {
const first_ = ff_core_List.List_first(arguments_);
arguments_ = ff_core_List.List_dropFirst(arguments_, 1);
return first_
}
const fireflyPath_ = ff_core_Option.Option_expect(consumeArgument_());
const command_ = (((_1) => {
{
const s_ = _1;
const _guard1 = ff_core_String.String_endsWith(s_, ".ff");
if(_guard1) {
return ff_compiler_Main.RunCommand(ff_core_String.String_dropLast(s_, 3))
return
}
}
{
if(_1 == "run") {
return ff_compiler_Main.RunCommand(ff_core_String.String_dropLast(ff_core_Option.Option_expect(consumeArgument_()), 3))
return
}
}
{
if(_1 == "browser") {
return ff_compiler_Main.BrowserCommand(ff_core_String.String_dropLast(ff_core_Option.Option_expect(consumeArgument_()), 3))
return
}
}
{
if(_1 == "build") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_expect(consumeArgument_()), 3))
return
}
}
{
if(_1 == "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
return
}
}
{
const s_ = _1;
return ff_core_Core.panic_((("Unknown command '" + s_) + "'"))
return
}
}))(ff_core_Option.Option_expect(consumeArgument_()));
for(;;) {
const _1 = command_;
{
if(_1.RunCommand) {
const moduleName_ = _1.mainPath_;

break
}
}
{
ff_core_Option.Option_each(ff_core_List.List_first(arguments_), ((argument_) => {
ff_core_Core.panic_(("Unknown argument: " + argument_))
}))
break
}
};
async function buildScript_$(mainFile_, mainPackagePair_, emitTarget_, resolvedDependencies_, $c) {
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (fireflyPath_ + "/core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const compilerModulePath_ = ((ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
? ff_core_Option.Some((fireflyPath_ + "/output/js/ff/compiler/Builder.mjs"))
: ff_core_Option.None());
const targetName_ = (((_1) => {
{
if(_1.EmitBuild) {
return "build"
return
}
}
{
if(_1.EmitNode) {
return "node"
return
}
}
{
if(_1.EmitBrowser) {
return "browser"
return
}
}
{
if(_1.EmitExecutable) {
return "executable"
return
}
}
}))(emitTarget_);
(await ff_compiler_Builder.build_$(system_, emitTarget_, mainPackagePair_, mainFile_, (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), compilerModulePath_, ".firefly/temporary", (".firefly/output/" + targetName_), false, $c))
}
for(;;) {
const _1 = command_;
{
if(_1.RunCommand) {
const mainFile_ = _1.mainPath_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), (await ff_core_NodeSystem.NodeSystem_fetch$(system_, $c)), (mainFile_ + ".ff"), $c));
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), $c));
(await buildScript_$(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), fixedDependencies_, $c));
(await ff_compiler_Main.importAndRun_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), fireflyPath_, "node", resolvedDependencies_.mainPackagePair_, mainFile_, arguments_, $c))
break
}
}
{
if(_1.BrowserCommand) {
const mainFile_ = _1.mainPath_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), (await ff_core_NodeSystem.NodeSystem_fetch$(system_, $c)), (mainFile_ + ".ff"), $c));
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), $c));
(await buildScript_$(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBrowser(), fixedDependencies_, $c));
(await ff_compiler_Main.bundleForBrowser_$(system_, resolvedDependencies_.mainPackagePair_, mainFile_, $c))
break
}
}
{
if(_1.BuildCommand) {
const mainFile_ = _1.mainPath_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), (await ff_core_NodeSystem.NodeSystem_fetch$(system_, $c)), (mainFile_ + ".ff"), $c));
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), $c));
(await buildScript_$(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBuild(), fixedDependencies_, $c));
(await buildScript_$(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitExecutable(), fixedDependencies_, $c));
(await ff_compiler_Main.bundleForPkg_$(system_, resolvedDependencies_.mainPackagePair_, mainFile_, $c));
(await ff_compiler_Main.importAndRun_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), fireflyPath_, "build", resolvedDependencies_.mainPackagePair_, mainFile_, arguments_, $c))
break
}
}
{
if(_1.BootstrapCommand) {
(await ff_compiler_Builder.build_$(system_, ff_compiler_JsEmitter.EmitNode(), ff_compiler_Syntax.PackagePair("ff", "compiler"), "Main", ff_compiler_Dependencies.ResolvedDependencies(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "compiler"), "compiler"), ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), "core"), ff_core_List.Empty())), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)), ff_core_Option.None(), "output/temporary", "output/js", true, $c))
break
}
}
}
}

export async function bundleForPkg_$(system_, packagePair_, mainFile_, $c) {
const prefix_ = ".firefly/output/executable/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
(await ff_core_BuildSystem.internalNodeCallEsBuild_$(system_, mainJsFile_, file_, false, $c))
}

export async function bundleForBrowser_$(system_, packagePair_, mainFile_, $c) {
const prefix_ = ".firefly/output/browser/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
const browserCode_ = ff_core_BuildSystem.BrowserCode(packagePair_.group_, packagePair_.name_, mainFile_, ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair("/", (async ($c) => {
return (await ff_core_FileSystem.FileSystem_readStream$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), "", $c))
})), ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)));
(await ff_core_BuildSystem.internalCallEsBuild_$(browserCode_, mainJsFile_, file_, true, true, $c))
}

export async function importAndRun_$(fs_, fireflyPath_, target_, packagePair_, mainFile_, arguments_, $c) {

        const process = await import('process');
        const cwd = process.cwd();
        const packagePath = packagePair_.group_ + "/" + packagePair_.name_
        const main = await import(cwd + "/.firefly/output/" + target_ + "/" + packagePath + "/" + mainFile_ + ".mjs");
        await main.$run$(fireflyPath_, ff_core_List.List_toTable(arguments_))
    
}

export async function prepareFireflyDirectory_$(fs_, $c) {
if((!(await ff_core_FileSystem.FileSystem_exists$(fs_, ".firefly/output", $c)))) {
if((!(await ff_core_FileSystem.FileSystem_exists$(fs_, ".firefly", $c)))) {
(await ff_core_FileSystem.FileSystem_createDirectory$(fs_, ".firefly", $c))
};
(await ff_core_FileSystem.FileSystem_createDirectory$(fs_, ".firefly/output", $c))
}
}

export async function detectBuildMain_$(fs_, packagePair_, mainFile_, $c) {
const file_ = (mainFile_ + ".ff");
const code_ = (await ff_core_FileSystem.FileSystem_readText$(fs_, file_, $c));
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const parser_ = ff_compiler_Parser.make_(ff_compiler_Syntax.PackagePair("script", "script"), file_, tokens_, false);
const module_ = ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_;
return ff_core_List.List_any(module_.functions_, ((definition_) => {
return (((definition_.signature_.name_ === "buildMain") || (definition_.signature_.name_ === "main")) && (((_1) => {
{
if(_1.Link) {
const p_ = _1.head_;
if(_1.tail_.Empty) {
const _guard1 = p_.valueType_;
if(_guard1.TConstructor) {
if(_guard1.name_ == "BuildSystem") {
return true
return
}
}
}
}
}
{
return false
return
}
}))(definition_.signature_.parameters_))
}))
}



export const ff_core_Show_Show$ff_compiler_Main_MainCommand = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.BootstrapCommand) {
const z_ = x_a;
return "BootstrapCommand"
return
}
}
{
if(x_a.RunCommand) {
const z_ = x_a;
return ((("RunCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(x_a.BrowserCommand) {
const z_ = x_a;
return ((("BrowserCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(x_a.BuildCommand) {
const z_ = x_a;
return ((("BuildCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.BootstrapCommand) {
const z_ = x_a;
return "BootstrapCommand"
return
}
}
{
if(x_a.RunCommand) {
const z_ = x_a;
return ((("RunCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(x_a.BrowserCommand) {
const z_ = x_a;
return ((("BrowserCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(x_a.BuildCommand) {
const z_ = x_a;
return ((("BuildCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Main_MainCommand = {
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
if(x_a.RunCommand) {
const x_ = x_a;
if(y_a.RunCommand) {
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
return
}
}
}
{
if(x_a.BrowserCommand) {
const x_ = x_a;
if(y_a.BrowserCommand) {
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
return
}
}
}
{
if(x_a.BuildCommand) {
const x_ = x_a;
if(y_a.BuildCommand) {
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
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
if(x_a.RunCommand) {
const x_ = x_a;
if(y_a.RunCommand) {
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
return
}
}
}
{
if(x_a.BrowserCommand) {
const x_ = x_a;
if(y_a.BrowserCommand) {
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
return
}
}
}
{
if(x_a.BuildCommand) {
const x_ = x_a;
if(y_a.BuildCommand) {
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
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

export const ff_core_Ordering_Order$ff_compiler_Main_MainCommand = {
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
if(x_a.RunCommand) {
const x_ = x_a;
if(y_a.RunCommand) {
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
if(x_a.BrowserCommand) {
const x_ = x_a;
if(y_a.BrowserCommand) {
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
if(x_a.BuildCommand) {
const x_ = x_a;
if(y_a.BuildCommand) {
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.BootstrapCommand) {
return 0
return
}
}
{
if(z_a.RunCommand) {
return 1
return
}
}
{
if(z_a.BrowserCommand) {
return 2
return
}
}
{
if(z_a.BuildCommand) {
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
if(x_a.RunCommand) {
const x_ = x_a;
if(y_a.RunCommand) {
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
if(x_a.BrowserCommand) {
const x_ = x_a;
if(y_a.BrowserCommand) {
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
if(x_a.BuildCommand) {
const x_ = x_a;
if(y_a.BuildCommand) {
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.BootstrapCommand) {
return 0
return
}
}
{
if(z_a.RunCommand) {
return 1
return
}
}
{
if(z_a.BrowserCommand) {
return 2
return
}
}
{
if(z_a.BuildCommand) {
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

export async function $run$(fireflyPath_, arguments_) {
const controller = new AbortController()
controller.promises = new Set()
let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)
let system = {
array_: arguments_,
fireflyPath_: fireflyPath_,
mainPackagePair_: {group_: "ff", name_: "compiler"},
executableMode_: false,
buildMode_: false
}
try {
await main_$(system, controller)
} finally {
controller.abort()
clearInterval(interval)
}
}
import * as path from 'node:path'
queueMicrotask(async () => {
let fireflyPath_ = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(process.argv[1])))))
await $run$(fireflyPath_, process.argv.slice(2))
})
