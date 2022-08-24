

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Workspace from "../../ff/compiler/Workspace.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

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

import * as ff_core_RunMode from "../../ff/core/RunMode.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

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
export function ResolvedDependencies(packagePaths_, singleFilePackages_) {
return {packagePaths_, singleFilePackages_};
}



export function process_(fs_, path_) {
const workspace_ = ff_compiler_Workspace.loadWorkspace_(fs_, path_);
const self_ = ff_compiler_Dependencies.Dependencies(workspace_, ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageInfo_ = ff_compiler_Dependencies.Dependencies_loadPackageInfo(self_, fs_, ff_compiler_Syntax.PackagePair("script", "script"), path_);
const newDependencies_ = ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, packageInfo_);
ff_compiler_Dependencies.Dependencies_processDependencies(self_, fs_, newDependencies_);
return ff_compiler_Dependencies.ResolvedDependencies(self_.packagePaths_, self_.singleFilePackages_)
}

export function checkPackagePairs_(dependencyPair_, packagePair_) {
if(((packagePair_.group_ != dependencyPair_.group_) || (packagePair_.name_ != dependencyPair_.name_))) {
ff_core_Core.panic_(((("Dependency declaration and package declaration disagree on package name: " + ff_compiler_Syntax.PackagePair_groupName(dependencyPair_, ":")) + " vs. ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}
}

export async function process_$(fs_, path_, $c) {
const workspace_ = (await ff_compiler_Workspace.loadWorkspace_$(fs_, path_, $c));
const self_ = ff_compiler_Dependencies.Dependencies(workspace_, ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toMap(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ff_core_List.List_toSet(ff_core_List.Empty(), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const packageInfo_ = (await ff_compiler_Dependencies.Dependencies_loadPackageInfo$(self_, fs_, ff_compiler_Syntax.PackagePair("script", "script"), path_, $c));
const newDependencies_ = ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, packageInfo_);
(await ff_compiler_Dependencies.Dependencies_processDependencies$(self_, fs_, newDependencies_, $c));
return ff_compiler_Dependencies.ResolvedDependencies(self_.packagePaths_, self_.singleFilePackages_)
}

export async function checkPackagePairs_$(dependencyPair_, packagePair_, $c) {
if(((packagePair_.group_ != dependencyPair_.group_) || (packagePair_.name_ != dependencyPair_.name_))) {
ff_core_Core.panic_(((("Dependency declaration and package declaration disagree on package name: " + ff_compiler_Syntax.PackagePair_groupName(dependencyPair_, ":")) + " vs. ") + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}
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
return ff_compiler_Parser.Parser_parsePackageInfo(parser_)
}

export function Dependencies_processPackageInfo(self_, packageInfo_) {
self_.packages_ = ff_core_Map.Map_add(self_.packages_, packageInfo_.package_.packagePair_, packageInfo_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return ff_core_List.List_filter(packageInfo_.dependencies_, ((_w1) => {
return (!ff_core_Map.Map_contains(self_.packages_, _w1.packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))
}))
}

export function Dependencies_fetchDependency(self_, fs_, dependency_) {
const location_ = ff_compiler_Workspace.Workspace_findPackageLocation(self_.workspace_, dependency_.packagePair_, dependency_.version_);
if(ff_core_String.String_contains(location_, ":")) {
return ff_core_Core.panic_(("Loading packages by URL is not yet supported: " + location_))
} else {
return location_
}
}

export function Dependencies_processDependencies(self_, fs_, dependencies_) {
const packageInfos_ = ff_core_List.List_map(dependencies_, ((dependency_) => {
const path_ = ff_compiler_Dependencies.Dependencies_fetchDependency(self_, fs_, dependency_);
self_.packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, dependency_.packagePair_, path_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const packageInfo_ = ff_compiler_Dependencies.Dependencies_loadPackageInfo(self_, fs_, dependency_.packagePair_, path_);
ff_compiler_Dependencies.checkPackagePairs_(dependency_.packagePair_, packageInfo_.package_.packagePair_);
return packageInfo_
}));
const newDependencies_ = ff_core_List.List_flatMap(packageInfos_, ((_w1) => {
return ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, _w1)
}));
if((newDependencies_ != ff_core_List.Empty())) {
ff_compiler_Dependencies.Dependencies_processDependencies(self_, fs_, newDependencies_)
}
}

export async function Dependencies_loadPackageInfo$(self_, fs_, packagePair_, path_, $c) {
const packageDirectory_ = (ff_core_String.String_endsWith(path_, ".ff")
? ff_core_FileSystem.directoryName_(path_)
: path_);
const sharedPackageFile_ = (packageDirectory_ + "/.firefly/package.ff");
const packageFile_ = ((await ff_core_FileSystem.FileSystem_exists$(fs_, sharedPackageFile_, $c))
? sharedPackageFile_
: (function() {
self_.singleFilePackages_ = ff_core_Set.Set_add(self_.singleFilePackages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return path_
})());
const code_ = (await ff_core_FileSystem.FileSystem_readText$(fs_, packageFile_, $c));
const tokens_ = ff_compiler_Tokenizer.tokenize_(packageFile_, code_);
const parser_ = ff_compiler_Parser.make_(packagePair_, packageFile_, tokens_, false);
return ff_compiler_Parser.Parser_parsePackageInfo(parser_)
}

export async function Dependencies_processPackageInfo$(self_, packageInfo_, $c) {
self_.packages_ = ff_core_Map.Map_add(self_.packages_, packageInfo_.package_.packagePair_, packageInfo_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return ff_core_List.List_filter(packageInfo_.dependencies_, ((_w1) => {
return (!ff_core_Map.Map_contains(self_.packages_, _w1.packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair))
}))
}

export async function Dependencies_fetchDependency$(self_, fs_, dependency_, $c) {
const location_ = ff_compiler_Workspace.Workspace_findPackageLocation(self_.workspace_, dependency_.packagePair_, dependency_.version_);
if(ff_core_String.String_contains(location_, ":")) {
return ff_core_Core.panic_(("Loading packages by URL is not yet supported: " + location_))
} else {
return location_
}
}

export async function Dependencies_processDependencies$(self_, fs_, dependencies_, $c) {
const packageInfos_ = (await ff_core_List.List_map$(dependencies_, (async (dependency_, $c) => {
const path_ = (await ff_compiler_Dependencies.Dependencies_fetchDependency$(self_, fs_, dependency_, $c));
self_.packagePaths_ = ff_core_Map.Map_add(self_.packagePaths_, dependency_.packagePair_, path_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
const packageInfo_ = (await ff_compiler_Dependencies.Dependencies_loadPackageInfo$(self_, fs_, dependency_.packagePair_, path_, $c));
ff_compiler_Dependencies.checkPackagePairs_(dependency_.packagePair_, packageInfo_.package_.packagePair_);
return packageInfo_
}), $c));
const newDependencies_ = ff_core_List.List_flatMap(packageInfos_, ((_w1) => {
return ff_compiler_Dependencies.Dependencies_processPackageInfo(self_, _w1)
}));
if((newDependencies_ != ff_core_List.Empty())) {
(await ff_compiler_Dependencies.Dependencies_processDependencies$(self_, fs_, newDependencies_, $c))
}
}




