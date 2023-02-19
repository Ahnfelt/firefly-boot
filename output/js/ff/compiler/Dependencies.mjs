import * as import$0 from 'tar';

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Workspace from "../../ff/compiler/Workspace.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Dependencies
export function Dependencies(workspace_, packages_, packagePaths_, singleFilePackages_) {
return {workspace_, packages_, packagePaths_, singleFilePackages_};
}

// type ResolvedDependencies
export function ResolvedDependencies(mainPackagePair_, packages_, packagePaths_, singleFilePackages_) {
return {mainPackagePair_, packages_, packagePaths_, singleFilePackages_};
}



export function process_(fs_, fetch_, path_) {
const workspace_ = ff_compiler_Workspace.loadWorkspace_(fs_, path_);
const self_ = ff_compiler_Dependencies.Dependencies(workspace_, ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageInfo_ = ff_compiler_Dependencies.Dependencies_loadPackageInfo(self_, fs_, ff_compiler_Syntax.PackagePair("script", "script"), path_);
const newDependencies_ = ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, packageInfo_);
ff_compiler_Dependencies.Dependencies_processDependencies(self_, fs_, fetch_, newDependencies_);
return ff_compiler_Dependencies.ResolvedDependencies(packageInfo_.package_.packagePair_, self_.packages_, self_.packagePaths_, self_.singleFilePackages_)
}

export function checkPackagePairs_(dependencyPair_, packagePair_) {
if(((packagePair_.group_ !== dependencyPair_.group_) || (packagePair_.name_ !== dependencyPair_.name_))) {
ff_core_Core.panic_(((("Dependency declaration and package declaration disagree on package name: " + ff_compiler_Syntax.PackagePair_groupName(dependencyPair_, ":")) + " vs. ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}
}

export function internalExtractTarGz_(fs_, tarGzPath_, path_) {
throw new Error('Function internalExtractTarGz is missing on this target in sync context.');
}

export async function process_$(fs_, fetch_, path_, $c) {
const workspace_ = (await ff_compiler_Workspace.loadWorkspace_$(fs_, path_, $c));
const self_ = ff_compiler_Dependencies.Dependencies(workspace_, ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageInfo_ = (await ff_compiler_Dependencies.Dependencies_loadPackageInfo$(self_, fs_, ff_compiler_Syntax.PackagePair("script", "script"), path_, $c));
const newDependencies_ = (await ff_compiler_Dependencies.Dependencies_processPackageInfo$(self_, packageInfo_, $c));
(await ff_compiler_Dependencies.Dependencies_processDependencies$(self_, fs_, fetch_, newDependencies_, $c));
return ff_compiler_Dependencies.ResolvedDependencies(packageInfo_.package_.packagePair_, self_.packages_, self_.packagePaths_, self_.singleFilePackages_)
}

export async function checkPackagePairs_$(dependencyPair_, packagePair_, $c) {
if(((packagePair_.group_ !== dependencyPair_.group_) || (packagePair_.name_ !== dependencyPair_.name_))) {
ff_core_Core.panic_(((("Dependency declaration and package declaration disagree on package name: " + ff_compiler_Syntax.PackagePair_groupName(dependencyPair_, ":")) + " vs. ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}
}

export async function internalExtractTarGz_$(fs_, tarGzPath_, path_, $c) {

        const tar = import$0
        await tar.extract({file: tarGzPath_, cwd: path_, strict: true})
    
}

export function Dependencies_loadPackageInfo(self_, fs_, packagePair_, path_) {
const packageDirectory_ = (ff_core_String.String_endsWith(path_, ".ff")
? ff_core_FileSystem.directoryName_(path_)
: path_);
const sharedPackageFile_ = (packageDirectory_ + "/.firefly/package.ff");
const packageFile_ = (ff_core_FileSystem.FileSystem_exists(fs_, sharedPackageFile_)
? sharedPackageFile_
: (function() {
self_.singleFilePackages_ = ff_core_Set.Set_add(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return path_
})());
const code_ = ff_core_FileSystem.FileSystem_readText(fs_, packageFile_);
const tokens_ = ff_compiler_Tokenizer.tokenize_(packageFile_, code_);
const parser_ = ff_compiler_Parser.make_(packagePair_, packageFile_, tokens_, false);
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
return ff_compiler_Syntax.PackageInfo(_c.package_, ff_core_List.Link(coreDependency_, info_.dependencies_), _c.includes_)
return
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

export function Dependencies_fetchDependency(self_, fs_, fetch_, dependency_) {
const location_ = ff_compiler_Workspace.Workspace_findPackageLocation(self_.workspace_, dependency_.packagePair_, dependency_.version_);
if(ff_core_String.String_contains(location_, ":")) {
if((ff_core_String.String_startsWith(location_, "http://", 0) || ff_core_String.String_startsWith(location_, "https://", 0))) {
const packagePair_ = dependency_.packagePair_;
const dependenciesPath_ = ".firefly/dependencies";
const dependencyPath_ = ((((dependenciesPath_ + "/") + packagePair_.group_) + "/") + packagePair_.name_);
const tarGzPath_ = ((dependenciesPath_ + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_));
const donePath_ = (((dependenciesPath_ + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_)) + ".done");
if((!ff_core_FileSystem.FileSystem_exists(fs_, donePath_))) {
ff_core_Log.debug_(("Fetching " + location_));
const response_ = ff_core_FetchSystem.FetchSystem_fetch(fetch_, location_, "GET", ff_core_FetchSystem.emptyList_, ff_core_Option.None(), ff_core_FetchSystem.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), false);
if((!ff_core_FetchSystem.FetchResponse_ok(response_))) {
ff_core_Core.panic_(("Could not download dependency: " + location_))
};
const buffer_ = ff_core_FetchSystem.FetchResponse_readBuffer(response_);
if(ff_core_FileSystem.FileSystem_exists(fs_, dependencyPath_)) {
ff_core_FileSystem.FileSystem_deleteDirectory(fs_, dependencyPath_)
};
ff_core_FileSystem.FileSystem_createDirectories(fs_, dependencyPath_);
ff_core_FileSystem.FileSystem_writeStream(fs_, tarGzPath_, ff_core_List.List_toStream(ff_core_List.Link(buffer_, ff_core_List.Empty()), false), false);
ff_compiler_Dependencies.internalExtractTarGz_(fs_, tarGzPath_, dependencyPath_);
ff_core_FileSystem.FileSystem_rename(fs_, tarGzPath_, donePath_)
};
return dependencyPath_
} else {
return ff_core_Core.panic_(("Loading packages by this protocol is not supported: " + location_))
}
} else {
return location_
}
}

export function Dependencies_processDependencies(self_, fs_, fetch_, dependencies_) {
const packageInfos_ = ff_core_List.List_map(dependencies_, ((dependency_) => {
const path_ = ff_compiler_Dependencies.Dependencies_fetchDependency(self_, fs_, fetch_, dependency_);
self_.packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, dependency_.packagePair_, path_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const packageInfo_ = ff_compiler_Dependencies.Dependencies_loadPackageInfo(self_, fs_, dependency_.packagePair_, path_);
ff_compiler_Dependencies.checkPackagePairs_(dependency_.packagePair_, packageInfo_.package_.packagePair_);
return packageInfo_
}));
const newDependencies_ = ff_core_List.List_flatMap(packageInfos_, ((_w1) => {
return ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, _w1)
}));
if(ff_core_Equal.notEquals_(newDependencies_, ff_core_List.Empty(), ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DDependency))) {
ff_compiler_Dependencies.Dependencies_processDependencies(self_, fs_, fetch_, newDependencies_)
}
}

export async function Dependencies_loadPackageInfo$(self_, fs_, packagePair_, path_, $c) {
const packageDirectory_ = (ff_core_String.String_endsWith(path_, ".ff")
? ff_core_FileSystem.directoryName_(path_)
: path_);
const sharedPackageFile_ = (packageDirectory_ + "/.firefly/package.ff");
const packageFile_ = ((await ff_core_FileSystem.FileSystem_exists$(fs_, sharedPackageFile_, $c))
? sharedPackageFile_
: (await (async function() {
self_.singleFilePackages_ = ff_core_Set.Set_add(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return path_
})()));
const code_ = (await ff_core_FileSystem.FileSystem_readText$(fs_, packageFile_, $c));
const tokens_ = ff_compiler_Tokenizer.tokenize_(packageFile_, code_);
const parser_ = ff_compiler_Parser.make_(packagePair_, packageFile_, tokens_, false);
const info_ = ff_compiler_Parser.Parser_parsePackageInfo(parser_);
return (await ff_compiler_Dependencies.Dependencies_addCoreDependencyIfMissing$(self_, info_, $c))
}

export async function Dependencies_addCoreDependencyIfMissing$(self_, info_, $c) {
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
return ff_compiler_Syntax.PackageInfo(_c.package_, ff_core_List.Link(coreDependency_, info_.dependencies_), _c.includes_)
return
}
}
}
}

export async function Dependencies_processPackageInfo$(self_, packageInfo_, $c) {
self_.packages_ = ff_core_Map.Map_add(self_.packages_, packageInfo_.package_.packagePair_, packageInfo_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return ff_core_List.List_filter(packageInfo_.dependencies_, ((_w1) => {
return (!ff_core_Map.Map_contains(self_.packages_, _w1.packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))
}))
}

export async function Dependencies_fetchDependency$(self_, fs_, fetch_, dependency_, $c) {
const location_ = ff_compiler_Workspace.Workspace_findPackageLocation(self_.workspace_, dependency_.packagePair_, dependency_.version_);
if(ff_core_String.String_contains(location_, ":")) {
if((ff_core_String.String_startsWith(location_, "http://", 0) || ff_core_String.String_startsWith(location_, "https://", 0))) {
const packagePair_ = dependency_.packagePair_;
const dependenciesPath_ = ".firefly/dependencies";
const dependencyPath_ = ((((dependenciesPath_ + "/") + packagePair_.group_) + "/") + packagePair_.name_);
const tarGzPath_ = ((dependenciesPath_ + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_));
const donePath_ = (((dependenciesPath_ + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, dependency_.version_)) + ".done");
if((!(await ff_core_FileSystem.FileSystem_exists$(fs_, donePath_, $c)))) {
ff_core_Log.debug_(("Fetching " + location_));
const response_ = (await ff_core_FetchSystem.FetchSystem_fetch$(fetch_, location_, "GET", ff_core_FetchSystem.emptyList_, ff_core_Option.None(), ff_core_FetchSystem.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), false, $c));
if((!(await ff_core_FetchSystem.FetchResponse_ok$(response_, $c)))) {
ff_core_Core.panic_(("Could not download dependency: " + location_))
};
const buffer_ = (await ff_core_FetchSystem.FetchResponse_readBuffer$(response_, $c));
if((await ff_core_FileSystem.FileSystem_exists$(fs_, dependencyPath_, $c))) {
(await ff_core_FileSystem.FileSystem_deleteDirectory$(fs_, dependencyPath_, $c))
};
(await ff_core_FileSystem.FileSystem_createDirectories$(fs_, dependencyPath_, $c));
(await ff_core_FileSystem.FileSystem_writeStream$(fs_, tarGzPath_, (await ff_core_List.List_toStream$(ff_core_List.Link(buffer_, ff_core_List.Empty()), false, $c)), false, $c));
(await ff_compiler_Dependencies.internalExtractTarGz_$(fs_, tarGzPath_, dependencyPath_, $c));
(await ff_core_FileSystem.FileSystem_rename$(fs_, tarGzPath_, donePath_, $c))
};
return dependencyPath_
} else {
return ff_core_Core.panic_(("Loading packages by this protocol is not supported: " + location_))
}
} else {
return location_
}
}

export async function Dependencies_processDependencies$(self_, fs_, fetch_, dependencies_, $c) {
const packageInfos_ = (await ff_core_List.List_map$(dependencies_, (async (dependency_, $c) => {
const path_ = (await ff_compiler_Dependencies.Dependencies_fetchDependency$(self_, fs_, fetch_, dependency_, $c));
self_.packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, dependency_.packagePair_, path_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const packageInfo_ = (await ff_compiler_Dependencies.Dependencies_loadPackageInfo$(self_, fs_, dependency_.packagePair_, path_, $c));
ff_compiler_Dependencies.checkPackagePairs_(dependency_.packagePair_, packageInfo_.package_.packagePair_);
return packageInfo_
}), $c));
const newDependencies_ = (await ff_core_List.List_flatMap$(packageInfos_, (async (_w1, $c) => {
return (await ff_compiler_Dependencies.Dependencies_processPackageInfo$(self_, _w1, $c))
}), $c));
if(ff_core_Equal.notEquals_(newDependencies_, ff_core_List.Empty(), ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DDependency))) {
(await ff_compiler_Dependencies.Dependencies_processDependencies$(self_, fs_, fetch_, newDependencies_, $c))
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_Dependencies_ResolvedDependencies = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Dependencies.ResolvedDependencies" + "[") + "]"))
},
async anyTag_$($c) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Dependencies.ResolvedDependencies" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Dependencies_ResolvedDependencies = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("ResolvedDependencies" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.mainPackagePair_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackageInfo).show_(z_.packages_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.packagePaths_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).show_(z_.singleFilePackages_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("ResolvedDependencies" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.mainPackagePair_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackageInfo).show_(z_.packages_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.packagePaths_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).show_(z_.singleFilePackages_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Dependencies_ResolvedDependencies = {
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
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.mainPackagePair_, y_.mainPackagePair_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackageInfo).equals_(x_.packages_, y_.packages_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.packagePaths_, y_.packagePaths_) && ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).equals_(x_.singleFilePackages_, y_.singleFilePackages_))))
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
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.mainPackagePair_, y_.mainPackagePair_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackageInfo).equals_(x_.packages_, y_.packages_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.packagePaths_, y_.packagePaths_) && ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).equals_(x_.singleFilePackages_, y_.singleFilePackages_))))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Dependencies_ResolvedDependencies = {
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
const mainPackagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.mainPackagePair_, y_.mainPackagePair_);
if((mainPackagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPackagePairOrdering_
} else {
const packagesOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo).compare_(x_.packages_, y_.packages_);
if((packagesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagesOrdering_
} else {
const packagePathsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.packagePaths_, y_.packagePaths_);
if((packagePathsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePathsOrdering_
} else {
const singleFilePackagesOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).compare_(x_.singleFilePackages_, y_.singleFilePackages_);
if((singleFilePackagesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return singleFilePackagesOrdering_
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
const mainPackagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.mainPackagePair_, y_.mainPackagePair_);
if((mainPackagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mainPackagePairOrdering_
} else {
const packagesOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo).compare_(x_.packages_, y_.packages_);
if((packagesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagesOrdering_
} else {
const packagePathsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.packagePaths_, y_.packagePaths_);
if((packagePathsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePathsOrdering_
} else {
const singleFilePackagesOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).compare_(x_.singleFilePackages_, y_.singleFilePackages_);
if((singleFilePackagesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return singleFilePackagesOrdering_
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

export const ff_core_Serializable_Serializable$ff_compiler_Dependencies_ResolvedDependencies = {
serializeUsing_(serialization_, x_) {
{
const serialization_a = serialization_;
const x_a = x_;
{
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 45), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, value_.mainPackagePair_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).serializeUsing_(serialization_, value_.packages_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.packagePaths_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).serializeUsing_(serialization_, value_.singleFilePackages_)
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
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 45), 0);
return ff_compiler_Dependencies.ResolvedDependencies(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, x_, $c) {
{
const serialization_a = serialization_;
const x_a = x_;
{
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 45), 0);
(await ff_core_Buffer.Buffer_setUint8$(serialization_.buffer_, serialization_.offset_, 0, $c));
serialization_.offset_ += 1;
(await ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_$(serialization_, value_.mainPackagePair_, $c));
(await ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).serializeUsing_$(serialization_, value_.packages_, $c));
(await ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_$(serialization_, value_.packagePaths_, $c));
(await ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).serializeUsing_$(serialization_, value_.singleFilePackages_, $c))
return
}
}
},
async deserializeUsing_$(serialization_, $c) {
const variantIndex_ = (await ff_core_Buffer.Buffer_grabUint8$(serialization_.buffer_, serialization_.offset_, $c));
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 45), 0);
return ff_compiler_Dependencies.ResolvedDependencies((await ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_$(serialization_, $c)), (await ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).deserializeUsing_$(serialization_, $c)), (await ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_$(serialization_, $c)), (await ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair).deserializeUsing_$(serialization_, $c)))
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


