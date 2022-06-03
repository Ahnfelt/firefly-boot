

import * as ff_compiler_Workspace from "../../ff/compiler/Workspace.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

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

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Workspace
export function Workspace(rules_, defaultLocation_, packageDirectory_) {
return {rules_, defaultLocation_, packageDirectory_};
}

// type WorkspaceRule
export function WorkspaceRule(packageGroup_, packageName_, location_) {
return {packageGroup_, packageName_, location_};
}

export const centralLocation_ = "http://ting.ahnfelt.dk/firefly/repository/";

export function loadWorkspace_(fs_, path_) {
const packageDirectory_ = (ff_core_String.String_endsWith(path_, ".ff")
? ff_core_FileSystem.directoryName_(path_)
: path_);
const fixedPackageDirectory_ = ((packageDirectory_ == "")
? "."
: packageDirectory_);
const workspaceFile_ = (fixedPackageDirectory_ + "/.firefly-workspace");
if(ff_core_FileSystem.FileSystem_exists(fs_, workspaceFile_)) {
return ff_compiler_Workspace.parseWorkspaceFile_(fs_, workspaceFile_, fixedPackageDirectory_)
} else if(ff_core_FileSystem.FileSystem_exists(fs_, (fixedPackageDirectory_ + "/.."))) {
return ff_compiler_Workspace.loadWorkspace_(fs_, (fixedPackageDirectory_ + "/.."))
} else {
return ff_compiler_Workspace.Workspace(ff_core_List.Empty(), ff_compiler_Workspace.centralLocation_, ".")
}
}

export function parseWorkspaceFile_(fs_, path_, packageDirectory_) {
const text_ = ff_core_FileSystem.FileSystem_readText(fs_, path_);
let defaultLocation_ = ff_core_Option.None();
const lines_ = ff_core_List.List_filter(ff_core_List.List_map(ff_core_Array.Array_toList(ff_core_String.String_split(text_, 10)), ((_w1) => {
return ff_core_String.String_takeWhile(ff_core_String.String_replace(_w1, "\r", ""), ((_w1) => {
return (_w1 != 35)
}))
})), ((_w1) => {
return (ff_core_String.String_size(_w1) != 0)
}));
const rules_ = ff_core_List.List_collect(lines_, ((line_) => {
const columns_ = ff_core_List.List_filter(ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(line_, "\t", " "), 32)), ((_w1) => {
return (ff_core_String.String_size(_w1) != 0)
}));
ff_core_Option.Option_each(defaultLocation_, ((_) => {
ff_core_Core.panic_(("Unexpected rule after the * rule: " + line_))
}));
if((ff_core_List.List_size(columns_) != 2)) {
ff_core_Core.panic_(("Could not parse workspace rule: " + line_))
};
const package_ = ff_core_List.List_expect(columns_, 0);
const location_ = ff_core_List.List_expect(columns_, 1);
const fixedLocation_ = (ff_core_String.String_endsWith(location_, "/")
? location_
: (location_ + "/"));
if((package_ == "*")) {
defaultLocation_ = ff_core_Option.Some(fixedLocation_);
return ff_core_Option.None()
} else {
const packageParts_ = ff_core_String.String_split(package_, 58);
if((ff_core_Array.Array_size(packageParts_) != 2)) {
ff_core_Core.panic_(("Could not parse workspace package: " + package_))
};
if((ff_core_Array.Array_expect(packageParts_, 0) == "*")) {
ff_core_Core.panic_(("Unexpected wildcard: " + package_))
};
return ff_core_Option.Some(ff_compiler_Workspace.WorkspaceRule(ff_core_Array.Array_expect(packageParts_, 0), ((ff_core_Array.Array_expect(packageParts_, 1) != "*")
? ff_core_Option.Some(ff_core_Array.Array_expect(packageParts_, 1))
: ff_core_Option.None()), fixedLocation_))
}
}));
return ff_compiler_Workspace.Workspace(rules_, ff_core_Option.Option_else(defaultLocation_, (() => {
return ff_compiler_Workspace.centralLocation_
})), packageDirectory_)
}

export function tarGzName_(packagePair_, version_) {
return (((((((((packagePair_.first_ + "_") + packagePair_.second_) + "_") + version_.major_) + "_") + version_.minor_) + "_") + version_.patch_) + ".tar.gz")
}

export async function loadWorkspace_$(fs_, path_, $c) {
const packageDirectory_ = (ff_core_String.String_endsWith(path_, ".ff")
? ff_core_FileSystem.directoryName_(path_)
: path_);
const fixedPackageDirectory_ = ((packageDirectory_ == "")
? "."
: packageDirectory_);
const workspaceFile_ = (fixedPackageDirectory_ + "/.firefly-workspace");
if((await ff_core_FileSystem.FileSystem_exists$(fs_, workspaceFile_, $c))) {
return (await ff_compiler_Workspace.parseWorkspaceFile_$(fs_, workspaceFile_, fixedPackageDirectory_, $c))
} else if((await ff_core_FileSystem.FileSystem_exists$(fs_, (fixedPackageDirectory_ + "/.."), $c))) {
return (await ff_compiler_Workspace.loadWorkspace_$(fs_, (fixedPackageDirectory_ + "/.."), $c))
} else {
return ff_compiler_Workspace.Workspace(ff_core_List.Empty(), ff_compiler_Workspace.centralLocation_, ".")
}
}

export async function parseWorkspaceFile_$(fs_, path_, packageDirectory_, $c) {
const text_ = (await ff_core_FileSystem.FileSystem_readText$(fs_, path_, $c));
let defaultLocation_ = ff_core_Option.None();
const lines_ = ff_core_List.List_filter(ff_core_List.List_map(ff_core_Array.Array_toList(ff_core_String.String_split(text_, 10)), ((_w1) => {
return ff_core_String.String_takeWhile(ff_core_String.String_replace(_w1, "\r", ""), ((_w1) => {
return (_w1 != 35)
}))
})), ((_w1) => {
return (ff_core_String.String_size(_w1) != 0)
}));
const rules_ = ff_core_List.List_collect(lines_, ((line_) => {
const columns_ = ff_core_List.List_filter(ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(line_, "\t", " "), 32)), ((_w1) => {
return (ff_core_String.String_size(_w1) != 0)
}));
ff_core_Option.Option_each(defaultLocation_, ((_) => {
ff_core_Core.panic_(("Unexpected rule after the * rule: " + line_))
}));
if((ff_core_List.List_size(columns_) != 2)) {
ff_core_Core.panic_(("Could not parse workspace rule: " + line_))
};
const package_ = ff_core_List.List_expect(columns_, 0);
const location_ = ff_core_List.List_expect(columns_, 1);
const fixedLocation_ = (ff_core_String.String_endsWith(location_, "/")
? location_
: (location_ + "/"));
if((package_ == "*")) {
defaultLocation_ = ff_core_Option.Some(fixedLocation_);
return ff_core_Option.None()
} else {
const packageParts_ = ff_core_String.String_split(package_, 58);
if((ff_core_Array.Array_size(packageParts_) != 2)) {
ff_core_Core.panic_(("Could not parse workspace package: " + package_))
};
if((ff_core_Array.Array_expect(packageParts_, 0) == "*")) {
ff_core_Core.panic_(("Unexpected wildcard: " + package_))
};
return ff_core_Option.Some(ff_compiler_Workspace.WorkspaceRule(ff_core_Array.Array_expect(packageParts_, 0), ((ff_core_Array.Array_expect(packageParts_, 1) != "*")
? ff_core_Option.Some(ff_core_Array.Array_expect(packageParts_, 1))
: ff_core_Option.None()), fixedLocation_))
}
}));
return ff_compiler_Workspace.Workspace(rules_, ff_core_Option.Option_else(defaultLocation_, (() => {
return ff_compiler_Workspace.centralLocation_
})), packageDirectory_)
}

export async function tarGzName_$(packagePair_, version_, $c) {
return (((((((((packagePair_.first_ + "_") + packagePair_.second_) + "_") + version_.major_) + "_") + version_.minor_) + "_") + version_.patch_) + ".tar.gz")
}

export function Workspace_findPackageLocation(self_, packagePair_, version_) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(self_.rules_, ((rule_) => {
return ((rule_.packageGroup_ == packagePair_.first_) && ff_core_Option.Option_all(rule_.packageName_, ((_w1) => {
return (_w1 == packagePair_.second_)
})))
})), ((rule_) => {
const prefix_ = ((rule_.packageName_ == ff_core_Option.None())
? (packagePair_.second_ + "/")
: "");
if(ff_core_String.String_contains(rule_.location_, ":")) {
return ((rule_.location_ + prefix_) + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
} else {
return (((self_.packageDirectory_ + "/") + rule_.location_) + prefix_)
}
})), (() => {
return (((((self_.defaultLocation_ + packagePair_.first_) + "/") + packagePair_.second_) + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
}))
}

export async function Workspace_findPackageLocation$(self_, packagePair_, version_, $c) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(self_.rules_, ((rule_) => {
return ((rule_.packageGroup_ == packagePair_.first_) && ff_core_Option.Option_all(rule_.packageName_, ((_w1) => {
return (_w1 == packagePair_.second_)
})))
})), ((rule_) => {
const prefix_ = ((rule_.packageName_ == ff_core_Option.None())
? (packagePair_.second_ + "/")
: "");
if(ff_core_String.String_contains(rule_.location_, ":")) {
return ((rule_.location_ + prefix_) + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
} else {
return (((self_.packageDirectory_ + "/") + rule_.location_) + prefix_)
}
})), (() => {
return (((((self_.defaultLocation_ + packagePair_.first_) + "/") + packagePair_.second_) + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
}))
}




