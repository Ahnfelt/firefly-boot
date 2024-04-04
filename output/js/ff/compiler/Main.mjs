import * as import$0 from 'url';

import * as ff_compiler_Main from "../../ff/compiler/Main.mjs"

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

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

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type MainCommand
const BootstrapCommand$ = {BootstrapCommand: true};
export function BootstrapCommand() {
return BootstrapCommand$;
}
export function RunCommand(mainPath_, argument_) {
return {RunCommand: true, mainPath_, argument_};
}
export function BrowserCommand(mainPath_) {
return {BrowserCommand: true, mainPath_};
}
export function BuildCommand(mainPath_) {
return {BuildCommand: true, mainPath_};
}
export function CheckCommand(filePath_) {
return {CheckCommand: true, filePath_};
}

// type CommandLineError
export function CommandLineError(problem_) {
return {problem_};
}

export const usageString_ = `
usage: firefly <main-file> [<main-arguments>] | <command> [<command-arguments>]

These are the commands:
   run <main-file> [<main-arguments>]    Run the main file with the provided arguments
   browser <main-file>                   Compile the main file for the browser
   build <main-file>                     Build the main file
   check <firefly-file>                  Check the firefly source file for errors
   bootstrap                             Bootstrap the compiler
`;

export function main_(system_) {
const fireflyPath_ = ff_compiler_Main.detectFireflyPath_(system_);
function buildScript_(mainFile_, mainPackagePair_, emitTarget_, resolvedDependencies_) {
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(fireflyPath_, "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const compilerModulePath_ = ((ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
? ff_core_Option.Some(ff_core_Path.Path_slash(ff_core_Path.Path_slash(ff_core_Path.Path_slash(ff_core_Path.Path_slash(fireflyPath_, "output"), "js"), "ff"), "compiler/Builder.mjs"))
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
}))(resolvedDependencies_), compilerModulePath_, ff_core_Path.Path_slash(ff_core_NodeSystem.NodeSystem_path(system_, ".firefly"), "temporary"), ff_core_Path.Path_path(ff_core_Path.Path_path(ff_core_NodeSystem.NodeSystem_path(system_, ".firefly"), "output"), targetName_), false)
}
function runCommand_(command_) {
{
const command_a = command_;
{
if(command_a.RunCommand) {
const mainFile_ = command_a.mainPath_;
const arguments_ = command_a.argument_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_core_NodeSystem.NodeSystem_path(system_, (mainFile_ + ".ff")));
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const localMainFile_ = ff_core_Path.Path_base(ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
buildScript_(localMainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_);
ff_compiler_Main.importAndRun_(fireflyPath_, "node", resolvedDependencies_.mainPackagePair_, localMainFile_, arguments_)
return
}
}
{
if(command_a.BrowserCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_core_NodeSystem.NodeSystem_path(system_, (mainFile_ + ".ff")));
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const localMainFile_ = ff_core_Path.Path_base(ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
buildScript_(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_);
ff_compiler_Main.bundleForBrowser_(system_, resolvedDependencies_.mainPackagePair_, localMainFile_)
return
}
}
{
if(command_a.BuildCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_core_NodeSystem.NodeSystem_path(system_, (mainFile_ + ".ff")));
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const localMainFile_ = ff_core_Path.Path_base(ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
buildScript_(localMainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBuild(), resolvedDependencies_);
buildScript_(localMainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitExecutable(), resolvedDependencies_);
ff_compiler_Main.bundleForPkg_(system_, resolvedDependencies_.mainPackagePair_, localMainFile_);
ff_compiler_Main.importAndRun_(fireflyPath_, "build", resolvedDependencies_.mainPackagePair_, localMainFile_, [])
return
}
}
{
if(command_a.CheckCommand) {
const filePath_ = command_a.filePath_;
ff_compiler_Builder.check_(system_, fireflyPath_, ff_core_NodeSystem.NodeSystem_path(system_, filePath_), ff_core_Map.empty_(), ff_compiler_LspHook.disabled_(), true)
return
}
}
{
if(command_a.BootstrapCommand) {
const workingDirectory_ = ff_core_NodeSystem.NodeSystem_path(system_, ".");
ff_compiler_Builder.build_(system_, ff_compiler_JsEmitter.EmitNode(), ff_compiler_Syntax.PackagePair("ff", "compiler"), "Main", ff_compiler_Dependencies.ResolvedDependencies(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_List.List_toMap([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap([ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_Path.Path_slash(workingDirectory_, "compiler")), ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(workingDirectory_, "core"))], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)), ff_core_Option.None(), ff_core_Path.Path_slash(ff_core_Path.Path_slash(workingDirectory_, "output"), "temporary"), ff_core_Path.Path_slash(ff_core_Path.Path_slash(workingDirectory_, "output"), "js"), true)
return
}
}
}
}
ff_core_Try.Try_grab(ff_core_Try.Try_catch(ff_core_Try.Try_catch(ff_core_Core.try_((() => {
const command_ = ff_compiler_Main.parseCommandLine_(ff_core_NodeSystem.NodeSystem_arguments(system_));
return runCommand_(command_)
})), ((_1, _2) => {
{
const message_ = _1.problem_;
const error_ = _2;
ff_core_Log.debug_(message_)
return
}
}), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError), ((_1, _2) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
const error_ = _2;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_))
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError))
}

export function parseCommandLine_(arguments_) {
{
const arguments_a = arguments_;
{
if(arguments_a.length >= 1) {
const mainFile_ = arguments_a[0];
const mainArguments_ = arguments_a.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainName_, mainArguments_)
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "run") {
const runArguments_ = arguments_a.slice(1);
{
const _1 = runArguments_;
{
if(_1.length >= 1) {
const mainFile_ = _1[0];
const mainArguments_ = _1.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainName_, mainArguments_)
return
}
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as first argument to run." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "browser") {
const browserArguments_ = arguments_a.slice(1);
{
const _1 = browserArguments_;
{
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BrowserCommand(mainName_)
return
}
}
}
{
if(_1.length >= 2) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to browser." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to browser." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "build") {
const buildArguments_ = arguments_a.slice(1);
{
const _1 = buildArguments_;
{
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BuildCommand(mainName_)
return
}
}
}
{
if(_1.length >= 2) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to build." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to build." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "check") {
const checkArguments_ = arguments_a.slice(1);
{
const _1 = checkArguments_;
{
if(_1.length === 1) {
const fileName_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(fileName_, ".ff");
if(_guard1.Some) {
return ff_compiler_Main.CheckCommand(fileName_)
return
}
}
}
{
if(_1.length >= 2) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to check." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to build." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length === 2) {
if(arguments_a[0] === "bootstrap") {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("bootstrap takes no arguments" + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
}
{
if(arguments_a.length === 1) {
if(arguments_a[0] === "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
return
}
}
}
{
if(arguments_a.length === 0) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a command or a main file to run." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
if(arguments_a.length >= 1) {
const s_ = arguments_a[0];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(((("Unknown command '" + s_) + "'") + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
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
const browserCode_ = ff_core_BuildSystem.BrowserCode(packagePair_.group_, packagePair_.name_, ff_core_NodeSystem.NodeSystem_path(system_, mainFile_), ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap([ff_core_Pair.Pair("/", (() => {
return ff_core_Path.Path_readStream(ff_core_NodeSystem.NodeSystem_path(system_, "."))
}))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)));
ff_core_BuildSystem.internalCallEsBuild_(browserCode_, mainJsFile_, file_, true, true)
}

export function importAndRun_(fireflyPath_, target_, packagePair_, mainFile_, arguments_) {
throw new Error('Function importAndRun is missing on this target in sync context.');
}

export function prepareFireflyDirectory_(path_) {
if((!ff_core_Path.Path_exists(ff_core_Path.Path_slash(ff_core_Path.Path_slash(path_, ".firefly"), "output"), false, false, false))) {
if((!ff_core_Path.Path_exists(ff_core_Path.Path_slash(path_, ".firefly"), false, false, false))) {
ff_core_Path.Path_createDirectory(ff_core_Path.Path_slash(path_, ".firefly"), false)
};
ff_core_Path.Path_createDirectory(ff_core_Path.Path_slash(ff_core_Path.Path_slash(path_, ".firefly"), "output"), false)
}
}

export function detectFireflyPath_(system_) {
throw new Error('Function detectFireflyPath is missing on this target in sync context.');
}

export async function main_$(system_, $task) {
const fireflyPath_ = (await ff_compiler_Main.detectFireflyPath_$(system_, $task));
async function buildScript_$(mainFile_, mainPackagePair_, emitTarget_, resolvedDependencies_, $task) {
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(fireflyPath_, "core", $task)), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const compilerModulePath_ = ((ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
? ff_core_Option.Some((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(fireflyPath_, "output", $task)), "js", $task)), "ff", $task)), "compiler/Builder.mjs", $task)))
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
}))(resolvedDependencies_), compilerModulePath_, (await ff_core_Path.Path_slash$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly", $task)), "temporary", $task)), (await ff_core_Path.Path_path$((await ff_core_Path.Path_path$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly", $task)), "output", $task)), targetName_, $task)), false, $task))
}
async function runCommand_$(command_, $task) {
{
const command_a = command_;
{
if(command_a.RunCommand) {
const mainFile_ = command_a.mainPath_;
const arguments_ = command_a.argument_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, (mainFile_ + ".ff"), $task)), $task));
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const localMainFile_ = (await ff_core_Path.Path_base$((await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
(await buildScript_$(localMainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, $task));
(await ff_compiler_Main.importAndRun_$(fireflyPath_, "node", resolvedDependencies_.mainPackagePair_, localMainFile_, arguments_, $task))
return
}
}
{
if(command_a.BrowserCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, (mainFile_ + ".ff"), $task)), $task));
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const localMainFile_ = (await ff_core_Path.Path_base$((await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
(await buildScript_$(mainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_, $task));
(await ff_compiler_Main.bundleForBrowser_$(system_, resolvedDependencies_.mainPackagePair_, localMainFile_, $task))
return
}
}
{
if(command_a.BuildCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, (mainFile_ + ".ff"), $task)), $task));
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const localMainFile_ = (await ff_core_Path.Path_base$((await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
(await buildScript_$(localMainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBuild(), resolvedDependencies_, $task));
(await buildScript_$(localMainFile_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitExecutable(), resolvedDependencies_, $task));
(await ff_compiler_Main.bundleForPkg_$(system_, resolvedDependencies_.mainPackagePair_, localMainFile_, $task));
(await ff_compiler_Main.importAndRun_$(fireflyPath_, "build", resolvedDependencies_.mainPackagePair_, localMainFile_, [], $task))
return
}
}
{
if(command_a.CheckCommand) {
const filePath_ = command_a.filePath_;
(await ff_compiler_Builder.check_$(system_, fireflyPath_, (await ff_core_NodeSystem.NodeSystem_path$(system_, filePath_, $task)), ff_core_Map.empty_(), ff_compiler_LspHook.disabled_(), true, $task))
return
}
}
{
if(command_a.BootstrapCommand) {
const workingDirectory_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task));
(await ff_compiler_Builder.build_$(system_, ff_compiler_JsEmitter.EmitNode(), ff_compiler_Syntax.PackagePair("ff", "compiler"), "Main", ff_compiler_Dependencies.ResolvedDependencies(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_List.List_toMap([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap([ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "compiler"), (await ff_core_Path.Path_slash$(workingDirectory_, "compiler", $task))), ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(workingDirectory_, "core", $task)))], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)), ff_core_Option.None(), (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(workingDirectory_, "output", $task)), "temporary", $task)), (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(workingDirectory_, "output", $task)), "js", $task)), true, $task))
return
}
}
}
}
ff_core_Try.Try_grab(ff_core_Try.Try_catch(ff_core_Try.Try_catch((await ff_core_Core.try_$((async ($task) => {
const command_ = ff_compiler_Main.parseCommandLine_((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $task)));
return (await runCommand_$(command_, $task))
}), $task)), ((_1, _2) => {
{
const message_ = _1.problem_;
const error_ = _2;
ff_core_Log.debug_(message_)
return
}
}), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError), ((_1, _2) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
const error_ = _2;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_))
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError))
}

export async function parseCommandLine_$(arguments_, $task) {
{
const arguments_a = arguments_;
{
if(arguments_a.length >= 1) {
const mainFile_ = arguments_a[0];
const mainArguments_ = arguments_a.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainName_, mainArguments_)
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "run") {
const runArguments_ = arguments_a.slice(1);
{
const _1 = runArguments_;
{
if(_1.length >= 1) {
const mainFile_ = _1[0];
const mainArguments_ = _1.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainName_, mainArguments_)
return
}
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as first argument to run." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "browser") {
const browserArguments_ = arguments_a.slice(1);
{
const _1 = browserArguments_;
{
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BrowserCommand(mainName_)
return
}
}
}
{
if(_1.length >= 2) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to browser." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to browser." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "build") {
const buildArguments_ = arguments_a.slice(1);
{
const _1 = buildArguments_;
{
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BuildCommand(mainName_)
return
}
}
}
{
if(_1.length >= 2) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to build." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to build." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length >= 1) {
if(arguments_a[0] === "check") {
const checkArguments_ = arguments_a.slice(1);
{
const _1 = checkArguments_;
{
if(_1.length === 1) {
const fileName_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(fileName_, ".ff");
if(_guard1.Some) {
return ff_compiler_Main.CheckCommand(fileName_)
return
}
}
}
{
if(_1.length >= 2) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to check." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to build." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
return
}
}
}
{
if(arguments_a.length === 2) {
if(arguments_a[0] === "bootstrap") {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("bootstrap takes no arguments" + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
}
{
if(arguments_a.length === 1) {
if(arguments_a[0] === "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
return
}
}
}
{
if(arguments_a.length === 0) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(("You must specify a command or a main file to run." + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
{
if(arguments_a.length >= 1) {
const s_ = arguments_a[0];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Main.CommandLineError(((("Unknown command '" + s_) + "'") + ff_compiler_Main.usageString_)), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError)})
return
}
}
}
}

export async function bundleForPkg_$(system_, packagePair_, mainFile_, $task) {
const prefix_ = ".firefly/output/executable/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
(await ff_core_BuildSystem.internalNodeCallEsBuild_$(system_, mainJsFile_, file_, false, $task))
}

export async function bundleForBrowser_$(system_, packagePair_, mainFile_, $task) {
const prefix_ = ".firefly/output/browser/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
const browserCode_ = ff_core_BuildSystem.BrowserCode(packagePair_.group_, packagePair_.name_, (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap([ff_core_Pair.Pair("/", (async ($task) => {
return (await ff_core_Path.Path_readStream$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task))
}))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)));
(await ff_core_BuildSystem.internalCallEsBuild_$(browserCode_, mainJsFile_, file_, true, true, $task))
}

export async function importAndRun_$(fireflyPath_, target_, packagePair_, mainFile_, arguments_, $task) {

        const process = await import('process');
        const cwd = process.cwd();
        const workingDirectory = cwd.indexOf(':') == 1 ? 'file:///' + cwd : cwd;
        const packagePath = packagePair_.group_ + "/" + packagePair_.name_
        const main = await import(workingDirectory + "/.firefly/output/" + target_ + "/" + packagePath + "/" + mainFile_ + ".mjs");
        await main.$run$(fireflyPath_, arguments_)
    
}

export async function prepareFireflyDirectory_$(path_, $task) {
if((!(await ff_core_Path.Path_exists$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(path_, ".firefly", $task)), "output", $task)), false, false, false, $task)))) {
if((!(await ff_core_Path.Path_exists$((await ff_core_Path.Path_slash$(path_, ".firefly", $task)), false, false, false, $task)))) {
(await ff_core_Path.Path_createDirectory$((await ff_core_Path.Path_slash$(path_, ".firefly", $task)), false, $task))
};
(await ff_core_Path.Path_createDirectory$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(path_, ".firefly", $task)), "output", $task)), false, $task))
}
}

export async function detectFireflyPath_$(system_, $task) {

        const url = import$0
        const suffix = '/output/js/ff/compiler/Main.mjs'
        const moduleUrl = import.meta.url
        if(!import.meta.url.endsWith(suffix)) {
            throw 'Expected module path to end with: ' + suffix + ", but got: " + moduleUrl;
        }
        return url.fileURLToPath(new URL(moduleUrl.slice(0, -suffix.length)))
    
}



export const ff_core_Any_HasAnyTag$ff_compiler_Main_MainCommand = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.MainCommand" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.MainCommand" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.CommandLineError" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.CommandLineError" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Main_MainCommand = {
show_(value_) {
{
const value_a = value_;
{
if(value_a.BootstrapCommand) {
const z_ = value_a;
return "BootstrapCommand"
return
}
}
{
if(value_a.RunCommand) {
const z_ = value_a;
return ((((("RunCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.argument_)) + ")")
return
}
}
{
if(value_a.BrowserCommand) {
const z_ = value_a;
return ((("BrowserCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(value_a.BuildCommand) {
const z_ = value_a;
return ((("BuildCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(value_a.CheckCommand) {
const z_ = value_a;
return ((("CheckCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.filePath_)) + ")")
return
}
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
if(value_a.BootstrapCommand) {
const z_ = value_a;
return "BootstrapCommand"
return
}
}
{
if(value_a.RunCommand) {
const z_ = value_a;
return ((((("RunCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.argument_)) + ")")
return
}
}
{
if(value_a.BrowserCommand) {
const z_ = value_a;
return ((("BrowserCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(value_a.BuildCommand) {
const z_ = value_a;
return ((("BuildCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
return
}
}
{
if(value_a.CheckCommand) {
const z_ = value_a;
return ((("CheckCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.filePath_)) + ")")
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Main_CommandLineError = {
show_(value_) {
{
const value_a = value_;
{
const z_ = value_a;
return ((("CommandLineError" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.problem_)) + ")")
return
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
const z_ = value_a;
return ((("CommandLineError" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.problem_)) + ")")
return
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
return ((x_.mainPath_ === y_.mainPath_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.argument_, y_.argument_))
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
if(x_a.CheckCommand) {
const x_ = x_a;
if(y_a.CheckCommand) {
const y_ = y_a;
return (x_.filePath_ === y_.filePath_)
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
if(x_a.RunCommand) {
const x_ = x_a;
if(y_a.RunCommand) {
const y_ = y_a;
return ((x_.mainPath_ === y_.mainPath_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.argument_, y_.argument_))
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
if(x_a.CheckCommand) {
const x_ = x_a;
if(y_a.CheckCommand) {
const y_ = y_a;
return (x_.filePath_ === y_.filePath_)
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

export const ff_core_Equal_Equal$ff_compiler_Main_CommandLineError = {
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
return (x_.problem_ === y_.problem_)
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
return (x_.problem_ === y_.problem_)
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
const argumentOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.argument_, y_.argument_);
if((argumentOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
if(x_a.CheckCommand) {
const x_ = x_a;
if(y_a.CheckCommand) {
const y_ = y_a;
const filePathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.filePath_, y_.filePath_);
if((filePathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return filePathOrdering_
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
{
if(z_a.CheckCommand) {
return 4
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
if(x_a.RunCommand) {
const x_ = x_a;
if(y_a.RunCommand) {
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
const argumentOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.argument_, y_.argument_);
if((argumentOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
if(x_a.CheckCommand) {
const x_ = x_a;
if(y_a.CheckCommand) {
const y_ = y_a;
const filePathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.filePath_, y_.filePath_);
if((filePathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return filePathOrdering_
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
{
if(z_a.CheckCommand) {
return 4
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

export const ff_core_Ordering_Order$ff_compiler_Main_CommandLineError = {
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
const problemOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.problem_, y_.problem_);
if((problemOrdering_ !== ff_core_Ordering.OrderingSame())) {
return problemOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const problemOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.problem_, y_.problem_);
if((problemOrdering_ !== ff_core_Ordering.OrderingSame())) {
return problemOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Main_MainCommand = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
if(value_a.BootstrapCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(value_a.RunCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.argument_)
return
}
}
{
if(value_a.BrowserCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
}
{
if(value_a.BuildCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
}
{
if(value_a.CheckCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.filePath_)
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
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.BootstrapCommand()
return
}
}
{
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Main.RunCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
return
}
}
{
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Main.BrowserCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
return
}
}
{
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.BuildCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
return
}
}
{
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.CheckCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
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
if(value_a.BootstrapCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(value_a.RunCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.argument_)
return
}
}
{
if(value_a.BrowserCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
}
{
if(value_a.BuildCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
}
{
if(value_a.CheckCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.filePath_)
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
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.BootstrapCommand()
return
}
}
{
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Main.RunCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
return
}
}
{
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Main.BrowserCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
return
}
}
{
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.BuildCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
return
}
}
{
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.CheckCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
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

export const ff_core_Serializable_Serializable$ff_compiler_Main_CommandLineError = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.problem_)
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
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.CommandLineError(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.problem_)
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
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.CommandLineError(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
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

export async function $run$(fireflyPath_, arguments_) {
Error.stackTraceLimit = 50
const $task = {controller: new AbortController(), subtasks: new Set(), promise: new Promise(() => {}), started: performance.now() * 0.001}
let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)
let system = {
task_: $task,
array_: arguments_,
fireflyPath_: fireflyPath_,
mainPackagePair_: {group_: "ff", name_: "compiler"},
executableMode_: false,
buildMode_: false
}
try {
await main_$(system, $task)
} finally {
ff_core_Task.Task_abort$($task)
clearInterval(interval)
}
}
import * as path from 'node:path'
queueMicrotask(async () => {
let fireflyPath_ = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(process.argv[1])))))
await $run$(fireflyPath_, process.argv.slice(2))
})
