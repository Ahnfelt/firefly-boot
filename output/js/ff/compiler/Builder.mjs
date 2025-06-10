import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_DependencyLock from "../../ff/compiler/DependencyLock.mjs"

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

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

import * as import$0 from 'pkg';
import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

// type PackageFiles
export function PackageFiles(root_, packageFile_, files_) {
return {root_, packageFile_, files_};
}

export function build_(system_, emitTarget_, mainModules_, resolvedDependencies_, compilerModulePath_, tempPath_, jsOutputPath_, printMeasurements_, moduleCache_) {
if(ff_core_Path.Path_exists(tempPath_, false, false, false)) {
ff_core_Path.Path_delete(tempPath_, 0, 100)
};
ff_core_Path.Path_createDirectory(tempPath_, false);
const jsPathFile_ = ff_core_Path.Path_slash(tempPath_, "js");
ff_core_Path.Path_createDirectory(jsPathFile_, true);
const success_ = ff_core_Core.do_((() => {
const compiler_ = ff_compiler_Compiler.new_(emitTarget_, ff_core_NodeSystem.NodeSystem_mainTask(system_), compilerModulePath_, jsPathFile_, resolvedDependencies_, ff_core_Map.new_(), moduleCache_, ff_compiler_LspHook.disabled_());
for(let for_a = mainModules_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const moduleKey_ = for_a[for_i];
ff_compiler_Compiler.Compiler_emit(compiler_, moduleKey_, true)
};
if(printMeasurements_) {
ff_compiler_Compiler.Compiler_printMeasurements(compiler_)
};
ff_core_Map.Map_each(resolvedDependencies_.packagePaths_, ((packagePair_, packagePath_) => {
{
const if_o = ff_core_Map.Map_get(resolvedDependencies_.packages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
if(if_o.Some) {
const packageInfo_ = if_o.value_;
ff_compiler_Builder.processNodeModules_(system_, jsPathFile_, packagePath_, packageInfo_);
ff_compiler_Builder.processIncludes_(jsPathFile_, packagePath_, packageInfo_)
}
}
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return true
}));
if(success_) {
if(ff_core_Path.Path_exists(jsOutputPath_, false, false, false)) {
ff_core_Path.Path_delete(jsOutputPath_, 0, 100)
};
ff_core_Path.Path_renameTo(jsPathFile_, jsOutputPath_)
}
}

export function processIncludes_(jsPathFile_, packagePath_, info_) {
for(let for_a = info_.includes_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const include_ = for_a[for_i];
const fromPath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(ff_core_Path.Path_slash(packagePath_, ".firefly"), "include"), include_.path_);
const toPath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(jsPathFile_, ff_compiler_Syntax.PackagePair_groupName(info_.package_.packagePair_, "/")), include_.path_);
ff_core_Path.Path_createSymlinkTo(toPath_, fromPath_, true)
}
}

export function processNodeModules_(system_, jsPathFile_, packagePath_, info_) {
if(ff_core_List.List_any(info_.includes_, ((_w1) => {
return (_w1.path_ === "node_modules")
}))) {
const includePath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(packagePath_, ".firefly"), "include");
const nodeModules_ = ff_core_Path.Path_slash(includePath_, "node_modules");
const packageJson_ = ff_core_Path.Path_slash(includePath_, "package.json");
if(((!ff_core_Path.Path_exists(nodeModules_, false, false, false)) && ff_core_Path.Path_exists(packageJson_, false, false, false))) {
ff_core_NodeSystem.NodeSystem_writeErrorLine(system_, ("Running npm install --no-bin-links in " + ff_core_Path.Path_absolute(includePath_)));
const result_ = ff_core_NodeSystem.NodeSystem_execute(system_, "npm", ["install", "--no-bin-links"], ff_core_Buffer.new_(0, false), ff_core_Option.Some(includePath_), ff_core_Option.None(), 16777216, 9, true);
if((result_.exitCode_ !== 0)) {
ff_core_NodeSystem.NodeSystem_writeErrorLine(system_, (("Running npm failed with exit code " + result_.exitCode_) + ":"));
ff_core_NodeSystem.NodeSystem_writeErrorBuffer(system_, result_.standardOut_);
ff_core_NodeSystem.NodeSystem_writeErrorBuffer(system_, result_.standardError_)
}
}
}
}

export function buildViaBuildSystem_(system_, fireflyPath_, mainFiles_, target_) {
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), ff_core_List.List_grabFirst(mainFiles_));
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(fireflyPath_, "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageRoot_ = ff_core_Map.Map_grab(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const mainModuleKeys_ = ff_core_List.List_map(mainFiles_, ((mainFile_) => {
return ff_core_Option.Option_else(ff_compiler_Syntax.PackagePair_moduleKey(resolvedDependencies_.mainPackagePair_, packageRoot_, mainFile_), (() => {
return ff_core_Core.panic_(((("Can't build multiple main files in different packages: " + ff_core_Path.Path_absolute(mainFile_)) + " isn't part of ") + ff_core_Path.Path_absolute(packageRoot_)))
}))
}));
if((target_ !== "browser")) {
ff_core_Core.panic_("buildViaBuildSystem is currently limited to browser target only - the restriction can be lifted")
};
ff_compiler_Builder.build_(system_, ff_compiler_JsEmitter.EmitBrowser(), mainModuleKeys_, (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), ff_core_Option.None(), ff_core_NodeSystem.NodeSystem_path(system_, ".firefly/temporary"), ff_core_Path.Path_slash(ff_core_NodeSystem.NodeSystem_path(system_, ".firefly/output"), target_), false, ff_compiler_ModuleCache.new_(0))
}

export function check_(system_, fireflyPath_, path_, mustContain_, skipFiles_, virtualFiles_, cache_, dependencyLock_, newVersion_, lspHook_, infer_) {
const packages_ = (((_1) => {
if(!_1 && ff_core_Path.Path_endsWith(path_, [".firefly", "package.ff"])) {
return [ff_compiler_Builder.PackageFiles(ff_core_Option.Option_grab(ff_core_Path.Path_parent(path_)), ff_core_Option.Some(path_), [])]
}
if(_1) {
return ff_compiler_Builder.findPackageFilesForDirectory_(path_, virtualFiles_, mustContain_, skipFiles_)
}
{
return ff_core_Option.Option_toList(ff_compiler_Builder.findPackageFilesForFile_(path_))
}
}))(ff_core_Path.Path_isDirectory(path_));
const errors_ = ff_core_Array.new_();
const filteredPackages_ = ff_core_List.List_filter(packages_, ((_w1) => {
return (!ff_core_Path.Path_contains(_w1.root_, [".firefly", "dependencies"]))
}));
for(let for_a = ff_core_List.List_filter(filteredPackages_, ((_w1) => {
return (!ff_core_List.List_isEmpty(_w1.files_))
})), for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const package_ = for_a[for_i];
const firstFile_ = ff_core_List.List_grabFirst(package_.files_);
{
const if_o = ff_core_Try.Try_catch(ff_core_Try.Try_tryCatch(ff_core_Core.try_((() => {
return ff_core_Option.Some(ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), dependencyLock_, firstFile_))
})), ((_1, _2) => {
{
const c_ = _1;
const error_ = _2;
errors_.array.push(c_);
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError), ((_1, _2) => {
{
const compileErrors_ = _1.errors_;
const error_ = _2;
ff_core_Array.Array_pushList(errors_, compileErrors_);
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors)
if(if_o.Some) {
const resolvedDependencies_ = if_o.value_;
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(fireflyPath_, "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const fixedResolvedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_);
const newCache_ = ff_compiler_ModuleCache.ModuleCache_without(cache_, newVersion_, path_);
const compiler_ = ff_compiler_Compiler.new_(ff_compiler_JsEmitter.EmitBuild(), ff_core_NodeSystem.NodeSystem_mainTask(system_), ff_core_Option.None(), ff_core_Path.Path_slash(ff_core_Path.Path_slash(package_.root_, ".firefly"), "temporary"), fixedResolvedDependencies_, virtualFiles_, newCache_, lspHook_);
for(let for_a = package_.files_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const file_ = for_a[for_i];
const packagePair_ = resolvedDependencies_.mainPackagePair_;
const folders_ = ff_core_Path.Path_relativeListTo(ff_core_Option.Option_grab(ff_core_Path.Path_parent(file_)), package_.root_);
const name_ = ff_core_Option.Option_grab(ff_core_String.String_removeLast(ff_core_Path.Path_base(file_), ".ff"));
const moduleKey_ = ff_compiler_Syntax.ModuleKey(packagePair_, folders_, name_);
ff_core_Try.Try_catch(ff_core_Try.Try_tryCatch(ff_core_Core.try_((() => {
if(infer_) {
ff_compiler_Compiler.Compiler_infer(compiler_, moduleKey_)
} else {
ff_compiler_Compiler.Compiler_resolve(compiler_, moduleKey_)
}
})), ((_1, _2) => {
{
const c_ = _1;
const error_ = _2;
errors_.array.push(c_)
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError), ((_1, _2) => {
{
const compileErrors_ = _1.errors_;
const error_ = _2;
ff_core_Array.Array_pushList(errors_, compileErrors_)
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors)
};
ff_compiler_ModuleCache.ModuleCache_mergeVersions(cache_, compiler_.cache_)
}
}
};
return ff_core_Array.Array_drain(errors_)
}

export function findPackageFilesForFile_(file_) {
if((ff_core_Path.Path_extension(file_) === ".ff")) {
return ff_core_Option.Some((function() {
let packageFile_ = ff_core_Option.None();
let currentDirectory_ = ff_core_Path.Path_parent(file_);
while(((!ff_core_Option.Option_isEmpty(currentDirectory_)) && ff_core_Option.Option_isEmpty(packageFile_))) {
packageFile_ = ff_core_Option.Option_filter(ff_core_Option.Option_map(currentDirectory_, ((_w1) => {
return ff_core_Path.Path_slash(ff_core_Path.Path_slash(_w1, ".firefly"), "package.ff")
})), ((_w1) => {
return ff_core_Path.Path_exists(_w1, false, false, false)
}));
currentDirectory_ = ff_core_Path.Path_parent(ff_core_Option.Option_grab(currentDirectory_))
};
const projectRoot_ = ff_core_Option.Option_else(ff_core_Option.Option_map(packageFile_, ((_w1) => {
return ff_core_Option.Option_grab(ff_core_Path.Path_parent(ff_core_Option.Option_grab(ff_core_Path.Path_parent(_w1))))
})), (() => {
return ff_core_Option.Option_grab(ff_core_Path.Path_parent(file_))
}));
return ff_compiler_Builder.PackageFiles(projectRoot_, packageFile_, [file_])
})())
} else return ff_core_Option.None()
}

export function findPackageFilesForDirectory_(directory_, virtualFiles_, mustContain_, skipFiles_) {
const files_ = ff_compiler_Builder.findFireflyFiles_(directory_, virtualFiles_, mustContain_, skipFiles_);
const split_ = ff_core_List.List_partition(files_, ((_w1) => {
return ff_core_Path.Path_endsWith(_w1, [".firefly", "package.ff"])
}));
const packageFiles_ = split_.first_;
let singleFiles_ = split_.second_;
const multiFileProjects_ = ff_core_List.List_map(packageFiles_, ((packageFile_) => {
const projectRoot_ = ff_core_Option.Option_grab(ff_core_Path.Path_parent(ff_core_Option.Option_grab(ff_core_Path.Path_parent(packageFile_))));
const files_ = ff_core_List.List_partition(singleFiles_, ((_w1) => {
return ff_core_Path.Path_isInsideOf(_w1, projectRoot_)
}));
singleFiles_ = files_.second_;
const packageFiles_ = files_.first_;
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.Some(packageFile_), packageFiles_)
}));
const singleFileProjects_ = ff_core_List.List_map(singleFiles_, ((file_) => {
const projectRoot_ = ff_core_Option.Option_grab(ff_core_Path.Path_parent(file_));
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.None(), [file_])
}));
return [...multiFileProjects_, ...singleFileProjects_]
}

export function findFireflyFiles_(path_, virtualFiles_, mustContain_, skipFiles_) {
const split_ = ff_core_List.List_partition(ff_core_Stream.Stream_toList(ff_core_Path.Path_entries(path_)), ((_w1) => {
return ff_core_Path.PathEntry_isDirectory(_w1)
}));
const directories_ = split_.first_;
const files_ = split_.second_;
const relevantDirectories_ = ff_core_List.List_filter(ff_core_List.List_map(directories_, ((_w1) => {
return ff_core_Path.PathEntry_path(_w1)
})), ((_w1) => {
return ff_core_String.String_all(ff_core_Path.Path_base(_w1), ((c_) => {
return (((c_ === 46) || ff_core_Char.Char_isAsciiLower(c_)) || ff_core_Char.Char_isAsciiDigit(c_))
}))
}));
const fireflyFiles_ = ff_core_List.List_filter(ff_core_List.List_map(files_, ((_w1) => {
return ff_core_Path.PathEntry_path(_w1)
})), ((file_) => {
return (((ff_core_Path.Path_extension(file_) === ".ff") && (!ff_core_Set.Set_contains(skipFiles_, ff_core_Path.Path_absolute(file_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) && (ff_core_Path.Path_endsWith(file_, [".firefly", "package.ff"]) || ff_core_Option.Option_all(mustContain_, ((s_) => {
const code_ = ff_core_Option.Option_else(ff_core_Map.Map_get(virtualFiles_, ff_core_Path.Path_absolute(file_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_core_Path.Path_readText(file_)
}));
return ff_core_String.String_contains(code_, s_)
}))))
}));
return [...fireflyFiles_, ...ff_core_List.List_flatMap(relevantDirectories_, ((_w1) => {
return ff_compiler_Builder.findFireflyFiles_(_w1, virtualFiles_, mustContain_, skipFiles_)
}))]
}

export function internalCreateExecutable_(self_, mainJsFile_ = ".firefly/output/executable/Main.bundle.js", outputPath_ = ".firefly/output", targets_ = ["host"], assets_ = ff_core_AssetSystem.create_()) {
const assetOutputPath_ = ff_core_Path.Path_slash(outputPath_, "assets");
ff_core_List.List_each(ff_core_Map.Map_pairs(assets_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const path_ = _1.first_;
const makeStream_ = _1.second_;
const p_ = ff_core_Path.Path_slash(assetOutputPath_, path_);
ff_core_Path.Path_createDirectory(ff_core_Option.Option_grab(ff_core_Path.Path_parent(p_)), true);
ff_core_Path.Path_writeStream(p_, makeStream_(), false)
return
}
}));
const json_ = `{
        "name": "main",
        "bin": {
            "firefly-main": "Main.bundle.js"
        },
        "devDependencies": {
            "pkg": "^5.8.0"
        },
        "pkg": {
            "scripts": "Main.bundle.js",
            "outputPath": "bin",
            "assets": ["../assets/**/*"],
            "targets": [
                "node18-linux-x64",
                "node18-macos-x64",
                "node18-win-x64"
            ]
        }
    }`;
const packageFile_ = ff_core_Path.Path_slash(outputPath_, "executable/package.json");
ff_core_Path.Path_writeText(packageFile_, json_);
ff_compiler_Builder.internalCallPkg_(self_, packageFile_, outputPath_, targets_)
}

export function internalCallPkg_(self_, packageFile_, outputPath_, targets_) {
const pkg_ = import$0;
pkg_.exec([packageFile_.absolutePath_, "--out-path", outputPath_.absolutePath_, "--target", ff_core_List.List_join(targets_, ",")])
}

export async function build_$(system_, emitTarget_, mainModules_, resolvedDependencies_, compilerModulePath_, tempPath_, jsOutputPath_, printMeasurements_, moduleCache_, $task) {
if((await ff_core_Path.Path_exists$(tempPath_, false, false, false, $task))) {
(await ff_core_Path.Path_delete$(tempPath_, 0, 100, $task))
};
(await ff_core_Path.Path_createDirectory$(tempPath_, false, $task));
const jsPathFile_ = (await ff_core_Path.Path_slash$(tempPath_, "js", $task));
(await ff_core_Path.Path_createDirectory$(jsPathFile_, true, $task));
const success_ = (await ff_core_Core.do_$((async ($task) => {
const compiler_ = (await ff_compiler_Compiler.new_$(emitTarget_, (await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), compilerModulePath_, jsPathFile_, resolvedDependencies_, ff_core_Map.new_(), moduleCache_, ff_compiler_LspHook.disabled_(), $task));
for(let for_a = mainModules_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const moduleKey_ = for_a[for_i];
(await ff_compiler_Compiler.Compiler_emit$(compiler_, moduleKey_, true, $task))
};
if(printMeasurements_) {
(await ff_compiler_Compiler.Compiler_printMeasurements$(compiler_, $task))
};
(await ff_core_Map.Map_each$(resolvedDependencies_.packagePaths_, (async (packagePair_, packagePath_, $task) => {
{
const if_o = ff_core_Map.Map_get(resolvedDependencies_.packages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
if(if_o.Some) {
const packageInfo_ = if_o.value_;
(await ff_compiler_Builder.processNodeModules_$(system_, jsPathFile_, packagePath_, packageInfo_, $task));
(await ff_compiler_Builder.processIncludes_$(jsPathFile_, packagePath_, packageInfo_, $task))
}
}
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, $task));
return true
}), $task));
if(success_) {
if((await ff_core_Path.Path_exists$(jsOutputPath_, false, false, false, $task))) {
(await ff_core_Path.Path_delete$(jsOutputPath_, 0, 100, $task))
};
(await ff_core_Path.Path_renameTo$(jsPathFile_, jsOutputPath_, $task))
}
}

export async function processIncludes_$(jsPathFile_, packagePath_, info_, $task) {
for(let for_a = info_.includes_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const include_ = for_a[for_i];
const fromPath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(packagePath_, ".firefly", $task)), "include", $task)), include_.path_, $task));
const toPath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(jsPathFile_, ff_compiler_Syntax.PackagePair_groupName(info_.package_.packagePair_, "/"), $task)), include_.path_, $task));
(await ff_core_Path.Path_createSymlinkTo$(toPath_, fromPath_, true, $task))
}
}

export async function processNodeModules_$(system_, jsPathFile_, packagePath_, info_, $task) {
if(ff_core_List.List_any(info_.includes_, ((_w1) => {
return (_w1.path_ === "node_modules")
}))) {
const includePath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(packagePath_, ".firefly", $task)), "include", $task));
const nodeModules_ = (await ff_core_Path.Path_slash$(includePath_, "node_modules", $task));
const packageJson_ = (await ff_core_Path.Path_slash$(includePath_, "package.json", $task));
if(((!(await ff_core_Path.Path_exists$(nodeModules_, false, false, false, $task))) && (await ff_core_Path.Path_exists$(packageJson_, false, false, false, $task)))) {
(await ff_core_NodeSystem.NodeSystem_writeErrorLine$(system_, ("Running npm install --no-bin-links in " + (await ff_core_Path.Path_absolute$(includePath_, $task))), $task));
const result_ = (await ff_core_NodeSystem.NodeSystem_execute$(system_, "npm", ["install", "--no-bin-links"], ff_core_Buffer.new_(0, false), ff_core_Option.Some(includePath_), ff_core_Option.None(), 16777216, 9, true, $task));
if((result_.exitCode_ !== 0)) {
(await ff_core_NodeSystem.NodeSystem_writeErrorLine$(system_, (("Running npm failed with exit code " + result_.exitCode_) + ":"), $task));
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(system_, result_.standardOut_, $task));
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(system_, result_.standardError_, $task))
}
}
}
}

export async function buildViaBuildSystem_$(system_, fireflyPath_, mainFiles_, target_, $task) {
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), ff_core_List.List_grabFirst(mainFiles_), $task));
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(fireflyPath_, "core", $task)), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageRoot_ = ff_core_Map.Map_grab(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const mainModuleKeys_ = (await ff_core_List.List_map$(mainFiles_, (async (mainFile_, $task) => {
return (await ff_core_Option.Option_else$((await ff_compiler_Syntax.PackagePair_moduleKey$(resolvedDependencies_.mainPackagePair_, packageRoot_, mainFile_, $task)), (async ($task) => {
return ff_core_Core.panic_(((("Can't build multiple main files in different packages: " + (await ff_core_Path.Path_absolute$(mainFile_, $task))) + " isn't part of ") + (await ff_core_Path.Path_absolute$(packageRoot_, $task))))
}), $task))
}), $task));
if((target_ !== "browser")) {
ff_core_Core.panic_("buildViaBuildSystem is currently limited to browser target only - the restriction can be lifted")
};
(await ff_compiler_Builder.build_$(system_, ff_compiler_JsEmitter.EmitBrowser(), mainModuleKeys_, (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), ff_core_Option.None(), (await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly/temporary", $task)), (await ff_core_Path.Path_slash$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly/output", $task)), target_, $task)), false, ff_compiler_ModuleCache.new_(0), $task))
}

export async function check_$(system_, fireflyPath_, path_, mustContain_, skipFiles_, virtualFiles_, cache_, dependencyLock_, newVersion_, lspHook_, infer_, $task) {
const packages_ = (await ((async (_1, $task) => {
if(!_1 && (await ff_core_Path.Path_endsWith$(path_, [".firefly", "package.ff"], $task))) {
return [ff_compiler_Builder.PackageFiles(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(path_, $task))), ff_core_Option.Some(path_), [])]
}
if(_1) {
return (await ff_compiler_Builder.findPackageFilesForDirectory_$(path_, virtualFiles_, mustContain_, skipFiles_, $task))
}
{
return ff_core_Option.Option_toList((await ff_compiler_Builder.findPackageFilesForFile_$(path_, $task)))
}
}))((await ff_core_Path.Path_isDirectory$(path_, $task)), $task));
const errors_ = ff_core_Array.new_();
const filteredPackages_ = (await ff_core_List.List_filter$(packages_, (async (_w1, $task) => {
return (!(await ff_core_Path.Path_contains$(_w1.root_, [".firefly", "dependencies"], $task)))
}), $task));
for(let for_a = ff_core_List.List_filter(filteredPackages_, ((_w1) => {
return (!ff_core_List.List_isEmpty(_w1.files_))
})), for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const package_ = for_a[for_i];
const firstFile_ = ff_core_List.List_grabFirst(package_.files_);
{
const if_o = ff_core_Try.Try_catch(ff_core_Try.Try_tryCatch((await ff_core_Core.try_$((async ($task) => {
return ff_core_Option.Some((await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), dependencyLock_, firstFile_, $task)))
}), $task)), ((_1, _2) => {
{
const c_ = _1;
const error_ = _2;
errors_.array.push(c_);
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError), ((_1, _2) => {
{
const compileErrors_ = _1.errors_;
const error_ = _2;
ff_core_Array.Array_pushList(errors_, compileErrors_);
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors)
if(if_o.Some) {
const resolvedDependencies_ = if_o.value_;
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(fireflyPath_, "core", $task)), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const fixedResolvedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_);
const newCache_ = (await ff_compiler_ModuleCache.ModuleCache_without$(cache_, newVersion_, path_, $task));
const compiler_ = (await ff_compiler_Compiler.new_$(ff_compiler_JsEmitter.EmitBuild(), (await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), ff_core_Option.None(), (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(package_.root_, ".firefly", $task)), "temporary", $task)), fixedResolvedDependencies_, virtualFiles_, newCache_, lspHook_, $task));
for(let for_a = package_.files_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const file_ = for_a[for_i];
const packagePair_ = resolvedDependencies_.mainPackagePair_;
const folders_ = (await ff_core_Path.Path_relativeListTo$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(file_, $task))), package_.root_, $task));
const name_ = ff_core_Option.Option_grab(ff_core_String.String_removeLast((await ff_core_Path.Path_base$(file_, $task)), ".ff"));
const moduleKey_ = ff_compiler_Syntax.ModuleKey(packagePair_, folders_, name_);
ff_core_Try.Try_catch(ff_core_Try.Try_tryCatch((await ff_core_Core.try_$((async ($task) => {
if(infer_) {
(await ff_compiler_Compiler.Compiler_infer$(compiler_, moduleKey_, $task))
} else {
(await ff_compiler_Compiler.Compiler_resolve$(compiler_, moduleKey_, $task))
}
}), $task)), ((_1, _2) => {
{
const c_ = _1;
const error_ = _2;
errors_.array.push(c_)
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError), ((_1, _2) => {
{
const compileErrors_ = _1.errors_;
const error_ = _2;
ff_core_Array.Array_pushList(errors_, compileErrors_)
return
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors)
};
ff_compiler_ModuleCache.ModuleCache_mergeVersions(cache_, compiler_.cache_)
}
}
};
return ff_core_Array.Array_drain(errors_)
}

export async function findPackageFilesForFile_$(file_, $task) {
if(((await ff_core_Path.Path_extension$(file_, $task)) === ".ff")) {
return ff_core_Option.Some((await (async function() {
let packageFile_ = ff_core_Option.None();
let currentDirectory_ = (await ff_core_Path.Path_parent$(file_, $task));
while(((!ff_core_Option.Option_isEmpty(currentDirectory_)) && ff_core_Option.Option_isEmpty(packageFile_))) {
packageFile_ = (await ff_core_Option.Option_filter$((await ff_core_Option.Option_map$(currentDirectory_, (async (_w1, $task) => {
return (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(_w1, ".firefly", $task)), "package.ff", $task))
}), $task)), (async (_w1, $task) => {
return (await ff_core_Path.Path_exists$(_w1, false, false, false, $task))
}), $task));
currentDirectory_ = (await ff_core_Path.Path_parent$(ff_core_Option.Option_grab(currentDirectory_), $task))
};
const projectRoot_ = (await ff_core_Option.Option_else$((await ff_core_Option.Option_map$(packageFile_, (async (_w1, $task) => {
return ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(_w1, $task))), $task)))
}), $task)), (async ($task) => {
return ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(file_, $task)))
}), $task));
return ff_compiler_Builder.PackageFiles(projectRoot_, packageFile_, [file_])
})()))
} else return ff_core_Option.None()
}

export async function findPackageFilesForDirectory_$(directory_, virtualFiles_, mustContain_, skipFiles_, $task) {
const files_ = (await ff_compiler_Builder.findFireflyFiles_$(directory_, virtualFiles_, mustContain_, skipFiles_, $task));
const split_ = (await ff_core_List.List_partition$(files_, (async (_w1, $task) => {
return (await ff_core_Path.Path_endsWith$(_w1, [".firefly", "package.ff"], $task))
}), $task));
const packageFiles_ = split_.first_;
let singleFiles_ = split_.second_;
const multiFileProjects_ = (await ff_core_List.List_map$(packageFiles_, (async (packageFile_, $task) => {
const projectRoot_ = ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(packageFile_, $task))), $task)));
const files_ = (await ff_core_List.List_partition$(singleFiles_, (async (_w1, $task) => {
return (await ff_core_Path.Path_isInsideOf$(_w1, projectRoot_, $task))
}), $task));
singleFiles_ = files_.second_;
const packageFiles_ = files_.first_;
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.Some(packageFile_), packageFiles_)
}), $task));
const singleFileProjects_ = (await ff_core_List.List_map$(singleFiles_, (async (file_, $task) => {
const projectRoot_ = ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(file_, $task)));
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.None(), [file_])
}), $task));
return [...multiFileProjects_, ...singleFileProjects_]
}

export async function findFireflyFiles_$(path_, virtualFiles_, mustContain_, skipFiles_, $task) {
const split_ = (await ff_core_List.List_partition$((await ff_core_Stream.Stream_toList$((await ff_core_Path.Path_entries$(path_, $task)), $task)), (async (_w1, $task) => {
return (await ff_core_Path.PathEntry_isDirectory$(_w1, $task))
}), $task));
const directories_ = split_.first_;
const files_ = split_.second_;
const relevantDirectories_ = (await ff_core_List.List_filter$((await ff_core_List.List_map$(directories_, (async (_w1, $task) => {
return (await ff_core_Path.PathEntry_path$(_w1, $task))
}), $task)), (async (_w1, $task) => {
return ff_core_String.String_all((await ff_core_Path.Path_base$(_w1, $task)), ((c_) => {
return (((c_ === 46) || ff_core_Char.Char_isAsciiLower(c_)) || ff_core_Char.Char_isAsciiDigit(c_))
}))
}), $task));
const fireflyFiles_ = (await ff_core_List.List_filter$((await ff_core_List.List_map$(files_, (async (_w1, $task) => {
return (await ff_core_Path.PathEntry_path$(_w1, $task))
}), $task)), (async (file_, $task) => {
return ((((await ff_core_Path.Path_extension$(file_, $task)) === ".ff") && (!ff_core_Set.Set_contains(skipFiles_, (await ff_core_Path.Path_absolute$(file_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) && ((await ff_core_Path.Path_endsWith$(file_, [".firefly", "package.ff"], $task)) || (await ff_core_Option.Option_all$(mustContain_, (async (s_, $task) => {
const code_ = (await ff_core_Option.Option_else$(ff_core_Map.Map_get(virtualFiles_, (await ff_core_Path.Path_absolute$(file_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($task) => {
return (await ff_core_Path.Path_readText$(file_, $task))
}), $task));
return ff_core_String.String_contains(code_, s_)
}), $task))))
}), $task));
return [...fireflyFiles_, ...(await ff_core_List.List_flatMap$(relevantDirectories_, (async (_w1, $task) => {
return (await ff_compiler_Builder.findFireflyFiles_$(_w1, virtualFiles_, mustContain_, skipFiles_, $task))
}), $task))]
}

export async function internalCreateExecutable_$(self_, mainJsFile_ = ".firefly/output/executable/Main.bundle.js", outputPath_ = ".firefly/output", targets_ = ["host"], assets_ = ff_core_AssetSystem.create_(), $task) {
const assetOutputPath_ = (await ff_core_Path.Path_slash$(outputPath_, "assets", $task));
(await ff_core_List.List_each$(ff_core_Map.Map_pairs(assets_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async (_1, $task) => {
{
const path_ = _1.first_;
const makeStream_ = _1.second_;
const p_ = (await ff_core_Path.Path_slash$(assetOutputPath_, path_, $task));
(await ff_core_Path.Path_createDirectory$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(p_, $task))), true, $task));
(await ff_core_Path.Path_writeStream$(p_, (await makeStream_($task)), false, $task))
return
}
}), $task));
const json_ = `{
        "name": "main",
        "bin": {
            "firefly-main": "Main.bundle.js"
        },
        "devDependencies": {
            "pkg": "^5.8.0"
        },
        "pkg": {
            "scripts": "Main.bundle.js",
            "outputPath": "bin",
            "assets": ["../assets/**/*"],
            "targets": [
                "node18-linux-x64",
                "node18-macos-x64",
                "node18-win-x64"
            ]
        }
    }`;
const packageFile_ = (await ff_core_Path.Path_slash$(outputPath_, "executable/package.json", $task));
(await ff_core_Path.Path_writeText$(packageFile_, json_, $task));
(await ff_compiler_Builder.internalCallPkg_$(self_, packageFile_, outputPath_, targets_, $task))
}

export async function internalCallPkg_$(self_, packageFile_, outputPath_, targets_, $task) {
const pkg_ = import$0;
(await pkg_.exec([packageFile_.absolutePath_, "--out-path", outputPath_.absolutePath_, "--target", ff_core_List.List_join(targets_, ",")]))
}


//# sourceMappingURL=Builder.mjs.map