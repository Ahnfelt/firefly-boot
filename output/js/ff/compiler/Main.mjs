import * as ff_compiler_Main from "../../ff/compiler/Main.mjs"

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_DependencyLock from "../../ff/compiler/DependencyLock.mjs"

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_ModuleCache from "../../ff/compiler/ModuleCache.mjs"

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

import * as import$0 from 'url';
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
export function SymbolsCommand(outPath_, filePaths_) {
return {SymbolsCommand: true, outPath_, filePaths_};
}

// type CommandLineError
export function CommandLineError(problem_) {
return {problem_};
}

export const usageString_ = "\r\nusage: firefly <main-file> [<main-arguments>] | <command> [<command-arguments>]\r\n\r\nThese are the commands:\r\n   run <main-file> [<main-arguments>]    Run the main file with the provided arguments\r\n   browser <main-file>                   Compile the main file for the browser\r\n   build <main-file>                     Build the main file\r\n   check <firefly-file>                  Check the firefly source file for errors\r\n   symbols <out-file> <firefly-file>     Print a .tsv with the symbols of a firefly source file\r\n   bootstrap                             Bootstrap the compiler\r\n";

export function main_(system_) {
const fireflyPath_ = ff_compiler_Main.detectFireflyPath_(system_);
function buildScript_(mainPath_, mainPackagePair_, emitTarget_, resolvedDependencies_) {
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(fireflyPath_, "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const compilerModulePath_ = ((ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
? ff_core_Option.Some(ff_core_Path.Path_slash(ff_core_Path.Path_slash(ff_core_Path.Path_slash(ff_core_Path.Path_slash(fireflyPath_, "output"), "js"), "ff"), "compiler/Builder.mjs"))
: ff_core_Option.None());
const targetName_ = (((_1) => {
if(_1.EmitBuild) {
return "build"
}
if(_1.EmitNode) {
return "node"
}
if(_1.EmitBrowser) {
return "browser"
}
{
return "executable"
}
}))(emitTarget_);
const folders_ = ff_core_Path.Path_relativeListTo(ff_core_Option.Option_grab(ff_core_Path.Path_parent(mainPath_)), ff_core_Map.Map_grab(fixedPackagePaths_, mainPackagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const name_ = ff_core_Option.Option_grab(ff_core_String.String_removeLast(ff_core_Path.Path_base(mainPath_), ".ff"));
const moduleKey_ = ff_compiler_Syntax.ModuleKey(mainPackagePair_, folders_, name_);
ff_compiler_Builder.build_(system_, emitTarget_, [moduleKey_], (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), compilerModulePath_, ff_core_Path.Path_slash(ff_core_NodeSystem.NodeSystem_path(system_, ".firefly"), "temporary"), ff_core_Path.Path_path(ff_core_Path.Path_path(ff_core_NodeSystem.NodeSystem_path(system_, ".firefly"), "output"), targetName_), false, ff_compiler_ModuleCache.new_(0));
return moduleKey_
}
function runCommand_(command_) {
const command_a = command_;
if(command_a.RunCommand) {
const mainFile_ = command_a.mainPath_;
const arguments_ = command_a.argument_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const mainPath_ = ff_core_NodeSystem.NodeSystem_path(system_, mainFile_);
const moduleKey_ = buildScript_(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_);
if((!ff_compiler_Main.importAndRun_(system_, fireflyPath_, "node", moduleKey_, arguments_))) {
const at_ = ff_compiler_Syntax.Location(ff_core_Path.Path_absolute(ff_core_NodeSystem.NodeSystem_path(system_, mainFile_)), 1, 1);
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "This module does not contain a 'nodeMain' function"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
return
}
if(command_a.BrowserCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const mainPath_ = ff_core_NodeSystem.NodeSystem_path(system_, mainFile_);
const moduleKey_ = buildScript_(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_);
ff_compiler_Main.bundleForBrowser_(system_, resolvedDependencies_.mainPackagePair_, moduleKey_)
return
}
if(command_a.BuildCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), ff_core_NodeSystem.NodeSystem_path(system_, (mainFile_ + ".ff")));
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const mainPath_ = ff_core_NodeSystem.NodeSystem_path(system_, mainFile_);
const moduleKey_ = buildScript_(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBuild(), resolvedDependencies_);
buildScript_(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitExecutable(), resolvedDependencies_);
ff_compiler_Main.bundleForPkg_(system_, resolvedDependencies_.mainPackagePair_, ff_core_Path.Path_base(mainPath_));
ff_compiler_Main.importAndRun_(system_, fireflyPath_, "build", moduleKey_, [])
return
}
if(command_a.CheckCommand) {
const filePath_ = command_a.filePath_;
const errors_ = ff_compiler_Builder.check_(system_, fireflyPath_, ff_core_NodeSystem.NodeSystem_path(system_, filePath_), ff_core_Option.None(), ff_core_Set.new_(), ff_core_Map.new_(), ff_compiler_ModuleCache.new_(1), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), 0, ff_compiler_LspHook.disabled_(), true);
if((!ff_core_List.List_isEmpty(errors_))) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileErrors(ff_core_List.List_distinct(errors_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CompileError)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileErrors)
}
return
}
if(command_a.BootstrapCommand) {
const workingDirectory_ = ff_core_NodeSystem.NodeSystem_path(system_, ".");
const fakeLocation_ = ff_compiler_Syntax.Location("<core>", 0, 0);
ff_compiler_Builder.build_(system_, ff_compiler_JsEmitter.EmitNode(), [ff_compiler_Syntax.ModuleKey(ff_compiler_Syntax.PackagePair("ff", "compiler"), [], "Main")], ff_compiler_Dependencies.ResolvedDependencies(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_List.List_toMap([ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.PackageInfo(ff_compiler_Syntax.DPackage(fakeLocation_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.Version(fakeLocation_, 0, 0, 0), ff_compiler_Syntax.TargetNames(true, false)), [], [ff_compiler_Syntax.DInclude(fakeLocation_, "node_modules")]))], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap([ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_Path.Path_slash(workingDirectory_, "compiler")), ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(workingDirectory_, "core"))], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)), ff_core_Option.None(), ff_core_Path.Path_slash(ff_core_Path.Path_slash(workingDirectory_, "output"), "temporary"), ff_core_Path.Path_slash(ff_core_Path.Path_slash(workingDirectory_, "output"), "js"), true, ff_compiler_ModuleCache.new_(0))
return
}
{
const outPath_ = command_a.outPath_;
const filePaths_ = command_a.filePaths_;
const columns_ = ff_core_List.List_flatMap(filePaths_, ((filePath_) => {
const path_ = ff_core_NodeSystem.NodeSystem_path(system_, filePath_);
const code_ = ff_core_Path.Path_readText(path_);
const packagePair_ = ff_compiler_Syntax.scriptPackagePair_;
const moduleKey_ = ff_compiler_Syntax.ModuleKey(packagePair_, [], ff_core_Option.Option_grab(ff_core_String.String_removeLast(ff_core_Path.Path_base(path_), ".ff")));
const tokens_ = ff_compiler_Tokenizer.tokenize_(ff_core_Path.Path_absolute(path_), code_, ff_core_Option.None(), false);
const parser_ = ff_compiler_Parser.new_(moduleKey_, tokens_, true, ff_compiler_LspHook.disabled_());
const module_ = ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_;
return ff_compiler_Main.makeSymbolColumns_(module_)
}));
const rowCount_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_last(ff_core_List.List_sortBy(columns_, ((_w1) => {
return _w1.length
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)), ((_w1) => {
return _w1.length
})), (() => {
return 0
}));
const tsv_ = ff_core_List.List_map(ff_core_Int.Int_until(0, rowCount_), ((i_) => {
return ff_core_List.List_map(columns_, ((_w1) => {
return ff_core_Option.Option_else(ff_core_List.List_get(_w1, i_), (() => {
return ""
}))
}))
}));
ff_core_Path.Path_writeText(ff_core_NodeSystem.NodeSystem_path(system_, outPath_), (ff_core_List.List_join(ff_core_List.List_map(tsv_, ((_w1) => {
return ff_core_List.List_join(_w1, "\t")
})), "\n") + "\n"))
return
}
}
ff_core_Try.Try_catch(ff_core_Try.Try_tryCatch(ff_core_Try.Try_tryCatch(ff_core_Core.try_((() => {
const command_ = ff_compiler_Main.parseCommandLine_(ff_core_NodeSystem.NodeSystem_arguments(system_));
runCommand_(command_)
})), ((_1, _2) => {
{
const message_ = _1.problem_;
ff_core_Log.debug_(message_)
return
}
}), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError), ((_1, _2) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_))
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError), ((_1, _2) => {
{
const errors_ = _1.errors_;
ff_core_List.List_map(errors_, ((_1) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
ff_core_Log.debug_(message_);
return ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_))
}
}))
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors)
}

export function parseCommandLine_(arguments_) {
const arguments_a = arguments_;
if(arguments_a.length >= 1) {
const mainFile_ = arguments_a[0];
const mainArguments_ = arguments_a.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainFile_, mainArguments_)
}
}
if(arguments_a.length >= 1 && arguments_a[0] === "run") {
const runArguments_ = arguments_a.slice(1);
{
const _1 = runArguments_;
if(_1.length >= 1) {
const mainFile_ = _1[0];
const mainArguments_ = _1.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainFile_, mainArguments_)
}
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as first argument to run." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "browser") {
const browserArguments_ = arguments_a.slice(1);
{
const _1 = browserArguments_;
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BrowserCommand(mainFile_)
}
}
if(_1.length >= 2) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to browser." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to browser." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "build") {
const buildArguments_ = arguments_a.slice(1);
{
const _1 = buildArguments_;
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BuildCommand(mainFile_)
}
}
if(_1.length >= 2) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to build." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to build." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "check") {
const checkArguments_ = arguments_a.slice(1);
{
const _1 = checkArguments_;
if(_1.length === 1) {
const fileName_ = _1[0];
return ff_compiler_Main.CheckCommand(fileName_)
}
if(_1.length >= 2) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to check." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) or directory as the argument to check." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "symbols") {
const checkArguments_ = arguments_a.slice(1);
{
const _1 = checkArguments_;
if(_1.length >= 2) {
const outName_ = _1[0];
const fileName_ = _1[1];
const fileNames_ = _1.slice(2);
if(ff_core_String.String_endsWith(outName_, ".tsv")) {
return ff_compiler_Main.SymbolsCommand(outName_, [fileName_, ...fileNames_])
}
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a output file (.tsv) and 1+ Firefly files (.ff) to symbols." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length === 2 && arguments_a[0] === "bootstrap") {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("bootstrap takes no arguments" + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
if(arguments_a.length === 1 && arguments_a[0] === "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
}
if(arguments_a.length === 0) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a command or a main file to run." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
const s_ = arguments_a[0];
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(((("Unknown command '" + s_) + "'") + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}

export function bundleForPkg_(system_, packagePair_, mainFile_) {
const prefix_ = ".firefly/output/executable/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
ff_core_BuildSystem.internalNodeCallEsBuild_(system_, mainJsFile_, file_, false)
}

export function bundleForBrowser_(system_, packagePair_, moduleKey_) {
const packagePath_ = ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "/");
const outputPath_ = ff_core_NodeSystem.NodeSystem_path(system_, ((".firefly/output/browser/" + packagePath_) + "/"));
const runFile_ = ff_core_Path.Path_slash(outputPath_, (ff_compiler_Syntax.ModuleKey_importName(moduleKey_) + ".run.mjs"));
ff_core_BuildSystem.internalBrowserCallEsBuild_(system_, [ff_core_Path.Path_absolute(runFile_)], ff_core_Path.Path_absolute(outputPath_), true, true)
}

export function importAndRun_(system_, fireflyPath_, target_, moduleKey_, arguments_) {
const process_ = import("process");
const cwd_ = process_.cwd();
const workingDirectory_ = ((cwd_.indexOf(":") === 1)
? ("file:///" + cwd_)
: cwd_);
const packagePath_ = ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "/");
const runFile_ = (((((((workingDirectory_ + "/.firefly/output/") + target_) + "/") + packagePath_) + "/") + ff_compiler_Syntax.ModuleKey_importName(moduleKey_)) + ".run.mjs");
const runFilePath_ = (ff_core_String.String_contains(runFile_, "://")
? ff_core_NodeSystem.NodeSystem_pathFromUrl(system_, runFile_)
: ff_core_NodeSystem.NodeSystem_path(system_, runFile_));
if(ff_core_Path.Path_exists(runFilePath_, false, false, false)) {
const main_ = import(runFile_);
try {
main_["$run$"](fireflyPath_.absolutePath_, arguments_)
} catch(error_) {
console.error(ff_core_Error.Error_stack(error_));
process.exit(1)
};
return true
} else {
return false
}
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
const url_ = import$0;
const suffix_ = "/output/js/ff/compiler/Main.mjs";
const moduleUrl_ = import.meta.url;
if((!import.meta.url.endsWith(suffix_))) {
throw (new Error(((("Expected module path to end with: " + suffix_) + ", but got: ") + moduleUrl_)))
} else {
return ff_core_Path.Path(url_.fileURLToPath((new URL(moduleUrl_.slice(0, (-suffix_.length))))))
}
}

export function makeSymbolColumns_(module_) {
function processSignature_(signature_) {
const generics_ = (ff_core_List.List_isEmpty(signature_.generics_)
? ""
: (("[" + ff_core_List.List_join(signature_.generics_, ", ")) + "]"));
const parameters_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
})), ", ")) + ")");
return ((signature_.name_ + generics_) + parameters_)
}
const traits_ = ff_core_List.List_map(module_.traits_, ((x_) => {
const generics_ = ff_core_List.List_dropFirst(x_.generics_, 1);
const g_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_first(x_.generics_), ((_w1) => {
return (_w1 + ": ")
})), (() => {
return ""
}));
return {
generics_: generics_, 
name_: (g_ + x_.name_), 
symbols_: ff_core_List.List_map(x_.methods_, ((_w1) => {
return processSignature_(_w1)
}))
}
}));
const types_ = ff_core_List.List_map(module_.types_, ((x_) => {
const variants_ = ff_core_List.List_map(x_.variants_, ((variant_) => {
const parameters_ = ((ff_core_List.List_isEmpty(variant_.fields_) && ff_core_List.List_isEmpty(x_.commonFields_))
? ""
: (("(" + ff_core_List.List_join(ff_core_List.List_map([...x_.commonFields_, ...variant_.fields_], ((_w1) => {
return _w1.name_
})), ", ")) + ")"));
return (variant_.name_ + parameters_)
}));
const methods_ = ff_core_List.List_map(ff_core_List.List_map(ff_core_List.List_flatMap(ff_core_List.List_filter(module_.extends_, ((_w1) => {
{
const _1 = _w1.type_;
if(_1.TConstructor) {
const name_ = _1.name_;
return (name_ === x_.name_)
}
{
return false
}
}
})), ((_w1) => {
return _w1.methods_
})), ((_w1) => {
return _w1.signature_
})), ((_w1) => {
return processSignature_(_w1)
}));
return {
generics_: x_.generics_, 
name_: x_.name_, 
symbols_: [...variants_, ...methods_]
}
}));
const toplevel_ = (ff_core_List.List_isEmpty(module_.functions_)
? []
: (function() {
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return processSignature_(_w1.signature_)
}));
return [{
generics_: [], 
name_: "", 
symbols_: [...ff_core_List.List_map(module_.lets_, ((_w1) => {
return _w1.name_
})), ...functions_]
}]
})());
const all_ = [...toplevel_, ...types_, ...traits_];
return ff_core_List.List_map(all_, ((r_) => {
const generics_ = (ff_core_List.List_isEmpty(r_.generics_)
? ""
: (("[" + ff_core_List.List_join(r_.generics_, ", ")) + "]"));
const header_ = ff_core_String.String_trim((((ff_compiler_Syntax.ModuleKey_importName(module_.moduleKey_) + " ") + r_.name_) + generics_));
return [header_, ...ff_core_List.List_sort(r_.symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)]
}))
}

export async function main_$(system_, $task) {
const fireflyPath_ = (await ff_compiler_Main.detectFireflyPath_$(system_, $task));
async function buildScript_$(mainPath_, mainPackagePair_, emitTarget_, resolvedDependencies_, $task) {
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(fireflyPath_, "core", $task)), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const compilerModulePath_ = ((ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitBrowser(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget) && ff_core_Equal.notEquals_(emitTarget_, ff_compiler_JsEmitter.EmitExecutable(), ff_compiler_JsEmitter.ff_core_Equal_Equal$ff_compiler_JsEmitter_EmitTarget))
? ff_core_Option.Some((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(fireflyPath_, "output", $task)), "js", $task)), "ff", $task)), "compiler/Builder.mjs", $task)))
: ff_core_Option.None());
const targetName_ = (((_1) => {
if(_1.EmitBuild) {
return "build"
}
if(_1.EmitNode) {
return "node"
}
if(_1.EmitBrowser) {
return "browser"
}
{
return "executable"
}
}))(emitTarget_);
const folders_ = (await ff_core_Path.Path_relativeListTo$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(mainPath_, $task))), ff_core_Map.Map_grab(fixedPackagePaths_, mainPackagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), $task));
const name_ = ff_core_Option.Option_grab(ff_core_String.String_removeLast((await ff_core_Path.Path_base$(mainPath_, $task)), ".ff"));
const moduleKey_ = ff_compiler_Syntax.ModuleKey(mainPackagePair_, folders_, name_);
(await ff_compiler_Builder.build_$(system_, emitTarget_, [moduleKey_], (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), compilerModulePath_, (await ff_core_Path.Path_slash$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly", $task)), "temporary", $task)), (await ff_core_Path.Path_path$((await ff_core_Path.Path_path$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly", $task)), "output", $task)), targetName_, $task)), false, ff_compiler_ModuleCache.new_(0), $task));
return moduleKey_
}
async function runCommand_$(command_, $task) {
const command_a = command_;
if(command_a.RunCommand) {
const mainFile_ = command_a.mainPath_;
const arguments_ = command_a.argument_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const mainPath_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task));
const moduleKey_ = (await buildScript_$(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, $task));
if((!(await ff_compiler_Main.importAndRun_$(system_, fireflyPath_, "node", moduleKey_, arguments_, $task)))) {
const at_ = ff_compiler_Syntax.Location((await ff_core_Path.Path_absolute$((await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task)), 1, 1);
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "This module does not contain a 'nodeMain' function"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
return
}
if(command_a.BrowserCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const mainPath_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task));
const moduleKey_ = (await buildScript_$(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_, $task));
(await ff_compiler_Main.bundleForBrowser_$(system_, resolvedDependencies_.mainPackagePair_, moduleKey_, $task))
return
}
if(command_a.BuildCommand) {
const mainFile_ = command_a.mainPath_;
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, (mainFile_ + ".ff"), $task)), $task));
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const mainPath_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task));
const moduleKey_ = (await buildScript_$(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitBuild(), resolvedDependencies_, $task));
(await buildScript_$(mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitExecutable(), resolvedDependencies_, $task));
(await ff_compiler_Main.bundleForPkg_$(system_, resolvedDependencies_.mainPackagePair_, (await ff_core_Path.Path_base$(mainPath_, $task)), $task));
(await ff_compiler_Main.importAndRun_$(system_, fireflyPath_, "build", moduleKey_, [], $task))
return
}
if(command_a.CheckCommand) {
const filePath_ = command_a.filePath_;
const errors_ = (await ff_compiler_Builder.check_$(system_, fireflyPath_, (await ff_core_NodeSystem.NodeSystem_path$(system_, filePath_, $task)), ff_core_Option.None(), ff_core_Set.new_(), ff_core_Map.new_(), ff_compiler_ModuleCache.new_(1), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), 0, ff_compiler_LspHook.disabled_(), true, $task));
if((!ff_core_List.List_isEmpty(errors_))) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileErrors(ff_core_List.List_distinct(errors_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CompileError)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileErrors)
}
return
}
if(command_a.BootstrapCommand) {
const workingDirectory_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task));
const fakeLocation_ = ff_compiler_Syntax.Location("<core>", 0, 0);
(await ff_compiler_Builder.build_$(system_, ff_compiler_JsEmitter.EmitNode(), [ff_compiler_Syntax.ModuleKey(ff_compiler_Syntax.PackagePair("ff", "compiler"), [], "Main")], ff_compiler_Dependencies.ResolvedDependencies(ff_compiler_Syntax.PackagePair("ff", "compiler"), ff_core_List.List_toMap([ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.PackageInfo(ff_compiler_Syntax.DPackage(fakeLocation_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.Version(fakeLocation_, 0, 0, 0), ff_compiler_Syntax.TargetNames(true, false)), [], [ff_compiler_Syntax.DInclude(fakeLocation_, "node_modules")]))], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap([ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "compiler"), (await ff_core_Path.Path_slash$(workingDirectory_, "compiler", $task))), ff_core_Pair.Pair(ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(workingDirectory_, "core", $task)))], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)), ff_core_Option.None(), (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(workingDirectory_, "output", $task)), "temporary", $task)), (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(workingDirectory_, "output", $task)), "js", $task)), true, ff_compiler_ModuleCache.new_(0), $task))
return
}
{
const outPath_ = command_a.outPath_;
const filePaths_ = command_a.filePaths_;
const columns_ = (await ff_core_List.List_flatMap$(filePaths_, (async (filePath_, $task) => {
const path_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, filePath_, $task));
const code_ = (await ff_core_Path.Path_readText$(path_, $task));
const packagePair_ = ff_compiler_Syntax.scriptPackagePair_;
const moduleKey_ = ff_compiler_Syntax.ModuleKey(packagePair_, [], ff_core_Option.Option_grab(ff_core_String.String_removeLast((await ff_core_Path.Path_base$(path_, $task)), ".ff")));
const tokens_ = ff_compiler_Tokenizer.tokenize_((await ff_core_Path.Path_absolute$(path_, $task)), code_, ff_core_Option.None(), false);
const parser_ = ff_compiler_Parser.new_(moduleKey_, tokens_, true, ff_compiler_LspHook.disabled_());
const module_ = ff_compiler_Parser.Parser_parseModuleWithPackageInfo(parser_).module_;
return ff_compiler_Main.makeSymbolColumns_(module_)
}), $task));
const rowCount_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_last(ff_core_List.List_sortBy(columns_, ((_w1) => {
return _w1.length
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)), ((_w1) => {
return _w1.length
})), (() => {
return 0
}));
const tsv_ = ff_core_List.List_map(ff_core_Int.Int_until(0, rowCount_), ((i_) => {
return ff_core_List.List_map(columns_, ((_w1) => {
return ff_core_Option.Option_else(ff_core_List.List_get(_w1, i_), (() => {
return ""
}))
}))
}));
(await ff_core_Path.Path_writeText$((await ff_core_NodeSystem.NodeSystem_path$(system_, outPath_, $task)), (ff_core_List.List_join(ff_core_List.List_map(tsv_, ((_w1) => {
return ff_core_List.List_join(_w1, "\t")
})), "\n") + "\n"), $task))
return
}
}
ff_core_Try.Try_catch(ff_core_Try.Try_tryCatch(ff_core_Try.Try_tryCatch((await ff_core_Core.try_$((async ($task) => {
const command_ = ff_compiler_Main.parseCommandLine_((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $task)));
(await runCommand_$(command_, $task))
}), $task)), ((_1, _2) => {
{
const message_ = _1.problem_;
ff_core_Log.debug_(message_)
return
}
}), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError), ((_1, _2) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_))
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError), ((_1, _2) => {
{
const errors_ = _1.errors_;
ff_core_List.List_map(errors_, ((_1) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
ff_core_Log.debug_(message_);
return ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_))
}
}))
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors)
}

export async function parseCommandLine_$(arguments_, $task) {
const arguments_a = arguments_;
if(arguments_a.length >= 1) {
const mainFile_ = arguments_a[0];
const mainArguments_ = arguments_a.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainFile_, mainArguments_)
}
}
if(arguments_a.length >= 1 && arguments_a[0] === "run") {
const runArguments_ = arguments_a.slice(1);
{
const _1 = runArguments_;
if(_1.length >= 1) {
const mainFile_ = _1[0];
const mainArguments_ = _1.slice(1);
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.RunCommand(mainFile_, mainArguments_)
}
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as first argument to run." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "browser") {
const browserArguments_ = arguments_a.slice(1);
{
const _1 = browserArguments_;
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BrowserCommand(mainFile_)
}
}
if(_1.length >= 2) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to browser." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to browser." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "build") {
const buildArguments_ = arguments_a.slice(1);
{
const _1 = buildArguments_;
if(_1.length === 1) {
const mainFile_ = _1[0];
const _guard1 = ff_core_String.String_removeLast(mainFile_, ".ff");
if(_guard1.Some) {
const mainName_ = _guard1.value_;
return ff_compiler_Main.BuildCommand(mainFile_)
}
}
if(_1.length >= 2) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to build." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) as the argument to build." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "check") {
const checkArguments_ = arguments_a.slice(1);
{
const _1 = checkArguments_;
if(_1.length === 1) {
const fileName_ = _1[0];
return ff_compiler_Main.CheckCommand(fileName_)
}
if(_1.length >= 2) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must only specify a single argument to check." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a Firefly file (.ff) or directory as the argument to check." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length >= 1 && arguments_a[0] === "symbols") {
const checkArguments_ = arguments_a.slice(1);
{
const _1 = checkArguments_;
if(_1.length >= 2) {
const outName_ = _1[0];
const fileName_ = _1[1];
const fileNames_ = _1.slice(2);
if(ff_core_String.String_endsWith(outName_, ".tsv")) {
return ff_compiler_Main.SymbolsCommand(outName_, [fileName_, ...fileNames_])
}
}
{
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a output file (.tsv) and 1+ Firefly files (.ff) to symbols." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}
return
}
if(arguments_a.length === 2 && arguments_a[0] === "bootstrap") {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("bootstrap takes no arguments" + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
if(arguments_a.length === 1 && arguments_a[0] === "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
}
if(arguments_a.length === 0) {
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(("You must specify a command or a main file to run." + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
{
const s_ = arguments_a[0];
throw ff_core_Js.initializeError_(ff_compiler_Main.CommandLineError(((("Unknown command '" + s_) + "'") + ff_compiler_Main.usageString_)), new Error(), ff_compiler_Main.ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError, ff_compiler_Main.ff_core_Show_Show$ff_compiler_Main_CommandLineError)
}
}

export async function bundleForPkg_$(system_, packagePair_, mainFile_, $task) {
const prefix_ = ".firefly/output/executable/";
const mainJsFile_ = ((((prefix_ + ff_compiler_Syntax.PackagePair_groupName(packagePair_, "/")) + "/") + mainFile_) + ".mjs");
const file_ = (prefix_ + "Main.bundle.js");
(await ff_core_BuildSystem.internalNodeCallEsBuild_$(system_, mainJsFile_, file_, false, $task))
}

export async function bundleForBrowser_$(system_, packagePair_, moduleKey_, $task) {
const packagePath_ = ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "/");
const outputPath_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, ((".firefly/output/browser/" + packagePath_) + "/"), $task));
const runFile_ = (await ff_core_Path.Path_slash$(outputPath_, (ff_compiler_Syntax.ModuleKey_importName(moduleKey_) + ".run.mjs"), $task));
ff_core_BuildSystem.internalBrowserCallEsBuild_(system_, [(await ff_core_Path.Path_absolute$(runFile_, $task))], (await ff_core_Path.Path_absolute$(outputPath_, $task)), true, true)
}

export async function importAndRun_$(system_, fireflyPath_, target_, moduleKey_, arguments_, $task) {
const process_ = (await import("process"));
const cwd_ = process_.cwd();
const workingDirectory_ = ((cwd_.indexOf(":") === 1)
? ("file:///" + cwd_)
: cwd_);
const packagePath_ = ff_compiler_Syntax.PackagePair_groupName(moduleKey_.packagePair_, "/");
const runFile_ = (((((((workingDirectory_ + "/.firefly/output/") + target_) + "/") + packagePath_) + "/") + ff_compiler_Syntax.ModuleKey_importName(moduleKey_)) + ".run.mjs");
const runFilePath_ = (ff_core_String.String_contains(runFile_, "://")
? (await ff_core_NodeSystem.NodeSystem_pathFromUrl$(system_, runFile_, $task))
: (await ff_core_NodeSystem.NodeSystem_path$(system_, runFile_, $task)));
if((await ff_core_Path.Path_exists$(runFilePath_, false, false, false, $task))) {
const main_ = (await import(runFile_));
try {
(await main_["$run$"](fireflyPath_.absolutePath_, arguments_))
} catch(error_) {
console.error(ff_core_Error.Error_stack(error_));
process.exit(1)
};
return true
} else {
return false
}
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
const url_ = import$0;
const suffix_ = "/output/js/ff/compiler/Main.mjs";
const moduleUrl_ = import.meta.url;
if((!import.meta.url.endsWith(suffix_))) {
throw (new Error(((("Expected module path to end with: " + suffix_) + ", but got: ") + moduleUrl_)))
} else {
return ff_core_Path.Path(url_.fileURLToPath((new URL(moduleUrl_.slice(0, (-suffix_.length))))))
}
}

export async function makeSymbolColumns_$(module_, $task) {
function processSignature_(signature_) {
const generics_ = (ff_core_List.List_isEmpty(signature_.generics_)
? ""
: (("[" + ff_core_List.List_join(signature_.generics_, ", ")) + "]"));
const parameters_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
})), ", ")) + ")");
return ((signature_.name_ + generics_) + parameters_)
}
const traits_ = ff_core_List.List_map(module_.traits_, ((x_) => {
const generics_ = ff_core_List.List_dropFirst(x_.generics_, 1);
const g_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_first(x_.generics_), ((_w1) => {
return (_w1 + ": ")
})), (() => {
return ""
}));
return {
generics_: generics_, 
name_: (g_ + x_.name_), 
symbols_: ff_core_List.List_map(x_.methods_, ((_w1) => {
return processSignature_(_w1)
}))
}
}));
const types_ = ff_core_List.List_map(module_.types_, ((x_) => {
const variants_ = ff_core_List.List_map(x_.variants_, ((variant_) => {
const parameters_ = ((ff_core_List.List_isEmpty(variant_.fields_) && ff_core_List.List_isEmpty(x_.commonFields_))
? ""
: (("(" + ff_core_List.List_join(ff_core_List.List_map([...x_.commonFields_, ...variant_.fields_], ((_w1) => {
return _w1.name_
})), ", ")) + ")"));
return (variant_.name_ + parameters_)
}));
const methods_ = ff_core_List.List_map(ff_core_List.List_map(ff_core_List.List_flatMap(ff_core_List.List_filter(module_.extends_, ((_w1) => {
{
const _1 = _w1.type_;
if(_1.TConstructor) {
const name_ = _1.name_;
return (name_ === x_.name_)
}
{
return false
}
}
})), ((_w1) => {
return _w1.methods_
})), ((_w1) => {
return _w1.signature_
})), ((_w1) => {
return processSignature_(_w1)
}));
return {
generics_: x_.generics_, 
name_: x_.name_, 
symbols_: [...variants_, ...methods_]
}
}));
const toplevel_ = (ff_core_List.List_isEmpty(module_.functions_)
? []
: (await (async function() {
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return processSignature_(_w1.signature_)
}));
return [{
generics_: [], 
name_: "", 
symbols_: [...ff_core_List.List_map(module_.lets_, ((_w1) => {
return _w1.name_
})), ...functions_]
}]
})()));
const all_ = [...toplevel_, ...types_, ...traits_];
return ff_core_List.List_map(all_, ((r_) => {
const generics_ = (ff_core_List.List_isEmpty(r_.generics_)
? ""
: (("[" + ff_core_List.List_join(r_.generics_, ", ")) + "]"));
const header_ = ff_core_String.String_trim((((ff_compiler_Syntax.ModuleKey_importName(module_.moduleKey_) + " ") + r_.name_) + generics_));
return [header_, ...ff_core_List.List_sort(r_.symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)]
}))
}

export const ff_core_Any_HasAnyTag$ff_compiler_Main_MainCommand = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.MainCommand" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.MainCommand" + "[") + "]"))
},
};

export const ff_core_Any_HasAnyTag$ff_compiler_Main_CommandLineError = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.CommandLineError" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Main.CommandLineError" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_Main_MainCommand = {
show_(value_) {
const value_a = value_;
if(value_a.BootstrapCommand) {
const z_ = value_a;
return "BootstrapCommand"
}
if(value_a.RunCommand) {
const z_ = value_a;
return ((((("RunCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.argument_)) + ")")
}
if(value_a.BrowserCommand) {
const z_ = value_a;
return ((("BrowserCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
}
if(value_a.BuildCommand) {
const z_ = value_a;
return ((("BuildCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
}
if(value_a.CheckCommand) {
const z_ = value_a;
return ((("CheckCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.filePath_)) + ")")
}
{
const z_ = value_a;
return ((((("SymbolsCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.outPath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.filePaths_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.BootstrapCommand) {
const z_ = value_a;
return "BootstrapCommand"
}
if(value_a.RunCommand) {
const z_ = value_a;
return ((((("RunCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.argument_)) + ")")
}
if(value_a.BrowserCommand) {
const z_ = value_a;
return ((("BrowserCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
}
if(value_a.BuildCommand) {
const z_ = value_a;
return ((("BuildCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.mainPath_)) + ")")
}
if(value_a.CheckCommand) {
const z_ = value_a;
return ((("CheckCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.filePath_)) + ")")
}
{
const z_ = value_a;
return ((((("SymbolsCommand" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.outPath_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.filePaths_)) + ")")
}
},
};

export const ff_core_Show_Show$ff_compiler_Main_CommandLineError = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((("CommandLineError" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.problem_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((("CommandLineError" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.problem_)) + ")")
}
},
};

export const ff_core_Equal_Equal$ff_compiler_Main_MainCommand = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.RunCommand && y_a.RunCommand) {
const x_ = x_a;
const y_ = y_a;
return ((x_.mainPath_ === y_.mainPath_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.argument_, y_.argument_))
}
if(x_a.BrowserCommand && y_a.BrowserCommand) {
const x_ = x_a;
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
}
if(x_a.BuildCommand && y_a.BuildCommand) {
const x_ = x_a;
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
}
if(x_a.CheckCommand && y_a.CheckCommand) {
const x_ = x_a;
const y_ = y_a;
return (x_.filePath_ === y_.filePath_)
}
if(x_a.SymbolsCommand && y_a.SymbolsCommand) {
const x_ = x_a;
const y_ = y_a;
return ((x_.outPath_ === y_.outPath_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.filePaths_, y_.filePaths_))
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
if(x_a.RunCommand && y_a.RunCommand) {
const x_ = x_a;
const y_ = y_a;
return ((x_.mainPath_ === y_.mainPath_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.argument_, y_.argument_))
}
if(x_a.BrowserCommand && y_a.BrowserCommand) {
const x_ = x_a;
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
}
if(x_a.BuildCommand && y_a.BuildCommand) {
const x_ = x_a;
const y_ = y_a;
return (x_.mainPath_ === y_.mainPath_)
}
if(x_a.CheckCommand && y_a.CheckCommand) {
const x_ = x_a;
const y_ = y_a;
return (x_.filePath_ === y_.filePath_)
}
if(x_a.SymbolsCommand && y_a.SymbolsCommand) {
const x_ = x_a;
const y_ = y_a;
return ((x_.outPath_ === y_.outPath_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.filePaths_, y_.filePaths_))
}
{
return false
}
},
};

export const ff_core_Equal_Equal$ff_compiler_Main_CommandLineError = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (x_.problem_ === y_.problem_)
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (x_.problem_ === y_.problem_)
}
},
};

export const ff_core_Ordering_Order$ff_compiler_Main_MainCommand = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.RunCommand && y_a.RunCommand) {
const x_ = x_a;
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
if(x_a.BrowserCommand && y_a.BrowserCommand) {
const x_ = x_a;
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.BuildCommand && y_a.BuildCommand) {
const x_ = x_a;
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.CheckCommand && y_a.CheckCommand) {
const x_ = x_a;
const y_ = y_a;
const filePathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.filePath_, y_.filePath_);
if((filePathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return filePathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.SymbolsCommand && y_a.SymbolsCommand) {
const x_ = x_a;
const y_ = y_a;
const outPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.outPath_, y_.outPath_);
if((outPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outPathOrdering_
} else {
const filePathsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.filePaths_, y_.filePaths_);
if((filePathsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return filePathsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.BootstrapCommand) {
return 0
}
if(z_a.RunCommand) {
return 1
}
if(z_a.BrowserCommand) {
return 2
}
if(z_a.BuildCommand) {
return 3
}
if(z_a.CheckCommand) {
return 4
}
{
return 5
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
if(x_a.RunCommand && y_a.RunCommand) {
const x_ = x_a;
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
if(x_a.BrowserCommand && y_a.BrowserCommand) {
const x_ = x_a;
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.BuildCommand && y_a.BuildCommand) {
const x_ = x_a;
const y_ = y_a;
const mainPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.mainPath_, y_.mainPath_);
if((mainPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.CheckCommand && y_a.CheckCommand) {
const x_ = x_a;
const y_ = y_a;
const filePathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.filePath_, y_.filePath_);
if((filePathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return filePathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.SymbolsCommand && y_a.SymbolsCommand) {
const x_ = x_a;
const y_ = y_a;
const outPathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.outPath_, y_.outPath_);
if((outPathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outPathOrdering_
} else {
const filePathsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.filePaths_, y_.filePaths_);
if((filePathsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return filePathsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.BootstrapCommand) {
return 0
}
if(z_a.RunCommand) {
return 1
}
if(z_a.BrowserCommand) {
return 2
}
if(z_a.BuildCommand) {
return 3
}
if(z_a.CheckCommand) {
return 4
}
{
return 5
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
};

export const ff_core_Ordering_Order$ff_compiler_Main_CommandLineError = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
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
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
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
},
};

export const ff_core_Serializable_Serializable$ff_compiler_Main_MainCommand = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.BootstrapCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
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
if(value_a.BrowserCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
if(value_a.BuildCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
if(value_a.CheckCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.filePath_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.outPath_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.filePaths_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.BootstrapCommand()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Main.RunCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Main.BrowserCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.BuildCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.CheckCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Main.SymbolsCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.BootstrapCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
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
if(value_a.BrowserCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
if(value_a.BuildCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.mainPath_)
return
}
if(value_a.CheckCommand) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.filePath_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.outPath_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.filePaths_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.BootstrapCommand()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Main.RunCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Main.BrowserCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.BuildCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Main.CheckCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Main.SymbolsCommand(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_Main_CommandLineError = {
serializeUsing_(serialization_, value_) {
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
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.CommandLineError(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
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
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Main.CommandLineError(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};


//# sourceMappingURL=Main.mjs.map