import * as ff_compiler_DependencyLock from "../../ff/compiler/DependencyLock.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Workspace from "../../ff/compiler/Workspace.mjs"

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

import * as import$0 from 'tar';
import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

// type Dependencies
export function Dependencies(workspace_, packages_, packagePaths_, singleFilePackages_) {
return {workspace_, packages_, packagePaths_, singleFilePackages_};
}

// type ResolvedDependencies
export function ResolvedDependencies(mainPackagePair_, packages_, packagePaths_, singleFilePackages_) {
return {mainPackagePair_, packages_, packagePaths_, singleFilePackages_};
}

export function process_(fetch_, dependencyLock_, path_) {
const workspace_ = ff_compiler_Workspace.loadWorkspace_(path_);
const self_ = ff_compiler_Dependencies.Dependencies(workspace_, ff_core_List.List_toMap([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageInfo_ = ff_core_Option.Option_else(ff_compiler_Dependencies.Dependencies_loadPackageInfo(self_, ff_compiler_Syntax.scriptPackagePair_, path_), (() => {
if((!ff_core_Path.Path_exists(path_, false, false, false))) {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(ff_compiler_Syntax.Location(ff_core_Path.Path_absolute(path_), 1, 1), "File not found"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
} else {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(ff_compiler_Syntax.Location(ff_core_Path.Path_absolute(path_), 1, 1), "Could not load package info"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}));
const newDependencies_ = ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, packageInfo_);
ff_compiler_Dependencies.Dependencies_processDependencies(self_, path_, fetch_, dependencyLock_, newDependencies_);
const packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, packageInfo_.package_.packagePair_, ff_compiler_Dependencies.findScriptPackageLocation_(path_), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return ff_compiler_Dependencies.ResolvedDependencies(packageInfo_.package_.packagePair_, self_.packages_, packagePaths_, self_.singleFilePackages_)
}

export function findScriptPackageLocation_(path_) {
const packageDirectory_ = ((ff_core_Path.Path_extension(path_) === ".ff")
? ff_core_Option.Option_grab(ff_core_Path.Path_parent(path_))
: path_);
function go_(directory_) {
const packageFile_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(directory_, ".firefly"), "package.ff");
if(ff_core_Path.Path_exists(packageFile_, false, false, false)) {
return directory_
} else if((!ff_core_Option.Option_isEmpty(ff_core_Path.Path_parent(directory_)))) {
return go_(ff_core_Option.Option_grab(ff_core_Path.Path_parent(directory_)))
} else {
return packageDirectory_
}
}
return go_(packageDirectory_)
}

export function checkPackagePairs_(dependencyPair_, packagePair_) {
if(((packagePair_.group_ !== dependencyPair_.group_) || (packagePair_.name_ !== dependencyPair_.name_))) {
ff_core_Core.panic_(((("Dependency declaration and package declaration disagree on package name: " + ff_compiler_Syntax.PackagePair_groupName(dependencyPair_, ":")) + " vs. ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}
}

export function internalExtractTarGz_(tarGzPath_, path_) {
const tar_ = import$0;
tar_.extract({file: tarGzPath_.absolutePath_, cwd: path_.absolutePath_, strict: true})
}

export async function process_$(fetch_, dependencyLock_, path_, $task) {
const workspace_ = (await ff_compiler_Workspace.loadWorkspace_$(path_, $task));
const self_ = ff_compiler_Dependencies.Dependencies(workspace_, ff_core_List.List_toMap([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet([], ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageInfo_ = (await ff_core_Option.Option_else$((await ff_compiler_Dependencies.Dependencies_loadPackageInfo$(self_, ff_compiler_Syntax.scriptPackagePair_, path_, $task)), (async ($task) => {
if((!(await ff_core_Path.Path_exists$(path_, false, false, false, $task)))) {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(ff_compiler_Syntax.Location((await ff_core_Path.Path_absolute$(path_, $task)), 1, 1), "File not found"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
} else {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(ff_compiler_Syntax.Location((await ff_core_Path.Path_absolute$(path_, $task)), 1, 1), "Could not load package info"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}), $task));
const newDependencies_ = (await ff_compiler_Dependencies.Dependencies_processPackageInfo$(self_, packageInfo_, $task));
(await ff_compiler_Dependencies.Dependencies_processDependencies$(self_, path_, fetch_, dependencyLock_, newDependencies_, $task));
const packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, packageInfo_.package_.packagePair_, (await ff_compiler_Dependencies.findScriptPackageLocation_$(path_, $task)), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return ff_compiler_Dependencies.ResolvedDependencies(packageInfo_.package_.packagePair_, self_.packages_, packagePaths_, self_.singleFilePackages_)
}

export async function findScriptPackageLocation_$(path_, $task) {
const packageDirectory_ = (((await ff_core_Path.Path_extension$(path_, $task)) === ".ff")
? ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(path_, $task)))
: path_);
async function go_$(directory_, $task) {
const packageFile_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(directory_, ".firefly", $task)), "package.ff", $task));
if((await ff_core_Path.Path_exists$(packageFile_, false, false, false, $task))) {
return directory_
} else if((!ff_core_Option.Option_isEmpty((await ff_core_Path.Path_parent$(directory_, $task))))) {
return (await go_$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(directory_, $task))), $task))
} else {
return packageDirectory_
}
}
return (await go_$(packageDirectory_, $task))
}

export async function checkPackagePairs_$(dependencyPair_, packagePair_, $task) {
if(((packagePair_.group_ !== dependencyPair_.group_) || (packagePair_.name_ !== dependencyPair_.name_))) {
ff_core_Core.panic_(((("Dependency declaration and package declaration disagree on package name: " + ff_compiler_Syntax.PackagePair_groupName(dependencyPair_, ":")) + " vs. ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}
}

export async function internalExtractTarGz_$(tarGzPath_, path_, $task) {
const tar_ = import$0;
(await tar_.extract({file: tarGzPath_.absolutePath_, cwd: path_.absolutePath_, strict: true}))
}

export function Dependencies_loadPackageInfo(self_, packagePair_, path_) {
const packageDirectory_ = ff_compiler_Dependencies.findScriptPackageLocation_(path_);
const sharedPackageFile_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(packageDirectory_, ".firefly"), "package.ff");
const packageFile_ = (ff_core_Path.Path_exists(sharedPackageFile_, false, false, false)
? sharedPackageFile_
: (self_.singleFilePackages_ = ff_core_Set.Set_add(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), path_));
return ff_core_Option.Option_map(ff_core_Try.Try_toOption(ff_core_Core.try_((() => {
return ff_core_Path.Path_readText(packageFile_)
}))), ((code_) => {
return ff_compiler_Dependencies.Dependencies_parsePackageFile(self_, packagePair_, ff_core_Path.Path_absolute(packageFile_), code_)
}))
}

export function Dependencies_parsePackageFile(self_, packagePair_, fileName_, code_) {
const tokens_ = ff_compiler_Tokenizer.tokenize_(fileName_, code_, ff_core_Option.None(), true);
const moduleKey_ = ff_compiler_Syntax.ModuleKey(packagePair_, [], "<package>");
const parser_ = ff_compiler_Parser.new_(moduleKey_, tokens_, false, ff_compiler_LspHook.disabled_());
const info_ = ff_compiler_Parser.Parser_parsePackageInfo(parser_);
return ff_compiler_Dependencies.Dependencies_addCoreDependencyIfMissing(self_, info_)
}

export function Dependencies_addCoreDependencyIfMissing(self_, info_) {
if(ff_core_List.List_any(info_.dependencies_, ((d_) => {
return ((d_.packagePair_.group_ === "ff") && (d_.packagePair_.name_ === "core"))
}))) {
return info_
} else {
const coreDependency_ = ff_compiler_Syntax.DDependency(info_.package_.at_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.Version(info_.package_.at_, 0, 0, 0), ff_compiler_Syntax.Trusted(), info_.package_.targets_);
{
const _1 = info_;
{
const _c = _1;
return ff_compiler_Syntax.PackageInfo(_c.package_, [coreDependency_, ...info_.dependencies_], _c.includes_)
}
}
}
}

export function Dependencies_processPackageInfo(self_, packageInfo_) {
self_.packages_ = ff_core_Map.Map_add(self_.packages_, packageInfo_.package_.packagePair_, packageInfo_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return ff_core_List.List_filter(packageInfo_.dependencies_, ((_w1) => {
return (!ff_core_Map.Map_contains(self_.packages_, _w1.packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))
}))
}

export function Dependencies_fetchDependency(self_, path_, httpClient_, dependencyLock_, dependency_) {
const location_ = ff_compiler_Workspace.Workspace_findPackageLocation(self_.workspace_, dependency_.packagePair_, dependency_.version_);
if((ff_core_String.String_contains(location_, ":") && (!ff_core_String.String_startsWith(ff_core_String.String_dropFirst(location_, 1), ":", 0)))) {
if((ff_core_String.String_startsWith(location_, "http://", 0) || ff_core_String.String_startsWith(location_, "https://", 0))) {
const packagePair_ = dependency_.packagePair_;
const directory_ = (ff_core_Path.Path_isDirectory(path_)
? path_
: ff_core_Option.Option_grab(ff_core_Path.Path_parent(path_)));
const dependenciesPath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(directory_, ".firefly"), "dependencies");
const dependencyPath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(dependenciesPath_, packagePair_.group_), packagePair_.name_);
const tarGzPath_ = ff_core_Path.Path_slash(dependenciesPath_, ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_));
const donePath_ = ff_core_Path.Path_slash(dependenciesPath_, (ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_) + ".done"));
if((!ff_core_Path.Path_exists(donePath_, false, false, false))) {
ff_compiler_DependencyLock.DependencyLock_do(dependencyLock_, ff_core_Path.Path_absolute(donePath_), (() => {
if((!ff_core_Path.Path_exists(donePath_, false, false, false))) {
return ff_core_Option.Some((function() {
ff_core_Log.trace_(("Fetching " + location_));
const buffer_ = ff_core_HttpClient.HttpClient_get(httpClient_, location_, [], ((response_) => {
if((!ff_core_HttpClient.FetchResponse_ok(response_))) {
ff_core_Core.throw_(ff_compiler_Syntax.CompileError(dependency_.at_, ("Could not download dependency: " + location_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
return ff_core_HttpClient.FetchResponse_readBuffer(response_)
}));
if(ff_core_Path.Path_exists(dependencyPath_, false, false, false)) {
ff_core_Path.Path_delete(dependencyPath_, 0, 100)
};
ff_core_Path.Path_createDirectory(dependencyPath_, true);
ff_core_Path.Path_writeStream(tarGzPath_, ff_core_List.List_toStream([buffer_], false), false);
ff_compiler_Dependencies.internalExtractTarGz_(tarGzPath_, dependencyPath_);
return ff_core_Path.Path_renameTo(tarGzPath_, donePath_)
})())
} else return ff_core_Option.None()
}))
};
return dependencyPath_
} else {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(dependency_.at_, ("Loading packages by this protocol is not supported: " + location_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
} else {
return ff_core_Path.Path_path(path_, location_)
}
}

export function Dependencies_processDependencies(self_, path_, httpClient_, dependencyLock_, dependencies_) {
const packageInfos_ = ff_core_List.List_map(dependencies_, ((dependency_) => {
const dependencyPath_ = ff_compiler_Dependencies.Dependencies_fetchDependency(self_, path_, httpClient_, dependencyLock_, dependency_);
self_.packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, dependency_.packagePair_, dependencyPath_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const packageInfo_ = ff_core_Option.Option_else(ff_compiler_Dependencies.Dependencies_loadPackageInfo(self_, dependency_.packagePair_, dependencyPath_), (() => {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(dependency_.at_, ("Dependency not found: " + ff_core_Path.Path_absolute(dependencyPath_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}));
ff_compiler_Dependencies.checkPackagePairs_(dependency_.packagePair_, packageInfo_.package_.packagePair_);
return packageInfo_
}));
const newDependencies_ = ff_core_List.List_flatMap(packageInfos_, ((_w1) => {
return ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, _w1)
}));
if(ff_core_Equal.notEquals_(newDependencies_, [], ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DDependency))) {
ff_compiler_Dependencies.Dependencies_processDependencies(self_, path_, httpClient_, dependencyLock_, newDependencies_)
}
}

export async function Dependencies_loadPackageInfo$(self_, packagePair_, path_, $task) {
const packageDirectory_ = (await ff_compiler_Dependencies.findScriptPackageLocation_$(path_, $task));
const sharedPackageFile_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(packageDirectory_, ".firefly", $task)), "package.ff", $task));
const packageFile_ = ((await ff_core_Path.Path_exists$(sharedPackageFile_, false, false, false, $task))
? sharedPackageFile_
: (self_.singleFilePackages_ = ff_core_Set.Set_add(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), path_));
return (await ff_core_Option.Option_map$(ff_core_Try.Try_toOption((await ff_core_Core.try_$((async ($task) => {
return (await ff_core_Path.Path_readText$(packageFile_, $task))
}), $task))), (async (code_, $task) => {
return (await ff_compiler_Dependencies.Dependencies_parsePackageFile$(self_, packagePair_, (await ff_core_Path.Path_absolute$(packageFile_, $task)), code_, $task))
}), $task))
}

export async function Dependencies_parsePackageFile$(self_, packagePair_, fileName_, code_, $task) {
const tokens_ = ff_compiler_Tokenizer.tokenize_(fileName_, code_, ff_core_Option.None(), true);
const moduleKey_ = ff_compiler_Syntax.ModuleKey(packagePair_, [], "<package>");
const parser_ = ff_compiler_Parser.new_(moduleKey_, tokens_, false, ff_compiler_LspHook.disabled_());
const info_ = ff_compiler_Parser.Parser_parsePackageInfo(parser_);
return (await ff_compiler_Dependencies.Dependencies_addCoreDependencyIfMissing$(self_, info_, $task))
}

export async function Dependencies_addCoreDependencyIfMissing$(self_, info_, $task) {
if(ff_core_List.List_any(info_.dependencies_, ((d_) => {
return ((d_.packagePair_.group_ === "ff") && (d_.packagePair_.name_ === "core"))
}))) {
return info_
} else {
const coreDependency_ = ff_compiler_Syntax.DDependency(info_.package_.at_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.Version(info_.package_.at_, 0, 0, 0), ff_compiler_Syntax.Trusted(), info_.package_.targets_);
{
const _1 = info_;
{
const _c = _1;
return ff_compiler_Syntax.PackageInfo(_c.package_, [coreDependency_, ...info_.dependencies_], _c.includes_)
}
}
}
}

export async function Dependencies_processPackageInfo$(self_, packageInfo_, $task) {
self_.packages_ = ff_core_Map.Map_add(self_.packages_, packageInfo_.package_.packagePair_, packageInfo_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return ff_core_List.List_filter(packageInfo_.dependencies_, ((_w1) => {
return (!ff_core_Map.Map_contains(self_.packages_, _w1.packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))
}))
}

export async function Dependencies_fetchDependency$(self_, path_, httpClient_, dependencyLock_, dependency_, $task) {
const location_ = ff_compiler_Workspace.Workspace_findPackageLocation(self_.workspace_, dependency_.packagePair_, dependency_.version_);
if((ff_core_String.String_contains(location_, ":") && (!ff_core_String.String_startsWith(ff_core_String.String_dropFirst(location_, 1), ":", 0)))) {
if((ff_core_String.String_startsWith(location_, "http://", 0) || ff_core_String.String_startsWith(location_, "https://", 0))) {
const packagePair_ = dependency_.packagePair_;
const directory_ = ((await ff_core_Path.Path_isDirectory$(path_, $task))
? path_
: ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(path_, $task))));
const dependenciesPath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(directory_, ".firefly", $task)), "dependencies", $task));
const dependencyPath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(dependenciesPath_, packagePair_.group_, $task)), packagePair_.name_, $task));
const tarGzPath_ = (await ff_core_Path.Path_slash$(dependenciesPath_, ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_), $task));
const donePath_ = (await ff_core_Path.Path_slash$(dependenciesPath_, (ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_) + ".done"), $task));
if((!(await ff_core_Path.Path_exists$(donePath_, false, false, false, $task)))) {
(await ff_compiler_DependencyLock.DependencyLock_do$(dependencyLock_, (await ff_core_Path.Path_absolute$(donePath_, $task)), (async ($task) => {
if((!(await ff_core_Path.Path_exists$(donePath_, false, false, false, $task)))) {
return ff_core_Option.Some((await (async function() {
ff_core_Log.trace_(("Fetching " + location_));
const buffer_ = (await ff_core_HttpClient.HttpClient_get$(httpClient_, location_, [], (async (response_, $task) => {
if((!(await ff_core_HttpClient.FetchResponse_ok$(response_, $task)))) {
ff_core_Core.throw_(ff_compiler_Syntax.CompileError(dependency_.at_, ("Could not download dependency: " + location_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
return (await ff_core_HttpClient.FetchResponse_readBuffer$(response_, $task))
}), $task));
if((await ff_core_Path.Path_exists$(dependencyPath_, false, false, false, $task))) {
(await ff_core_Path.Path_delete$(dependencyPath_, 0, 100, $task))
};
(await ff_core_Path.Path_createDirectory$(dependencyPath_, true, $task));
(await ff_core_Path.Path_writeStream$(tarGzPath_, (await ff_core_List.List_toStream$([buffer_], false, $task)), false, $task));
(await ff_compiler_Dependencies.internalExtractTarGz_$(tarGzPath_, dependencyPath_, $task));
return (await ff_core_Path.Path_renameTo$(tarGzPath_, donePath_, $task))
})()))
} else return ff_core_Option.None()
}), $task))
};
return dependencyPath_
} else {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(dependency_.at_, ("Loading packages by this protocol is not supported: " + location_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
} else {
return (await ff_core_Path.Path_path$(path_, location_, $task))
}
}

export async function Dependencies_processDependencies$(self_, path_, httpClient_, dependencyLock_, dependencies_, $task) {
const packageInfos_ = (await ff_core_List.List_map$(dependencies_, (async (dependency_, $task) => {
const dependencyPath_ = (await ff_compiler_Dependencies.Dependencies_fetchDependency$(self_, path_, httpClient_, dependencyLock_, dependency_, $task));
self_.packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, dependency_.packagePair_, dependencyPath_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const packageInfo_ = (await ff_core_Option.Option_else$((await ff_compiler_Dependencies.Dependencies_loadPackageInfo$(self_, dependency_.packagePair_, dependencyPath_, $task)), (async ($task) => {
return ff_core_Core.throw_(ff_compiler_Syntax.CompileError(dependency_.at_, ("Dependency not found: " + (await ff_core_Path.Path_absolute$(dependencyPath_, $task)))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}), $task));
ff_compiler_Dependencies.checkPackagePairs_(dependency_.packagePair_, packageInfo_.package_.packagePair_);
return packageInfo_
}), $task));
const newDependencies_ = (await ff_core_List.List_flatMap$(packageInfos_, (async (_w1, $task) => {
return (await ff_compiler_Dependencies.Dependencies_processPackageInfo$(self_, _w1, $task))
}), $task));
if(ff_core_Equal.notEquals_(newDependencies_, [], ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DDependency))) {
(await ff_compiler_Dependencies.Dependencies_processDependencies$(self_, path_, httpClient_, dependencyLock_, newDependencies_, $task))
}
}

//# sourceMappingURL=Dependencies.mjs.map