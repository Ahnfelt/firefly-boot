

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

// type RunMode
export function ExecutableMode(mode_) {
return {ExecutableMode: true, mode_};
}
export function ScriptMode(mode_) {
return {ScriptMode: true, mode_};
}

// type ExecutableMode


// type ScriptMode




export function internalListDirectory_(fs_, path_) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? ff_core_String.String_dropLast(path_, 1)
: path_);
function go_(currentPath_) {
return ff_core_List.List_flatMap(ff_core_FileSystem.FileSystem_list(fs_, currentPath_), ((file_) => {
if(ff_core_FileSystem.FileSystem_isDirectory(fs_, file_)) {
return go_(file_)
} else {
return ff_core_List.Link(file_, ff_core_List.Empty())
}
}))
}
return ff_core_List.List_map(go_(path_), ((file_) => {
return ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), ff_core_FileSystem.FileSystem_readStream(fs_, file_))
}))
}

export function internalExecutableModeFileSystem_(dummy_) {
throw new Error('Function internalExecutableModeFileSystem is missing on this target in sync context.');
}

export function internalScriptModeFileSystem_(dummy_) {
throw new Error('Function internalScriptModeFileSystem is missing on this target in sync context.');
}

export async function internalListDirectory_$(fs_, path_, $c) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? ff_core_String.String_dropLast(path_, 1)
: path_);
async function go_$(currentPath_, $c) {
return (await ff_core_List.List_flatMap$((await ff_core_FileSystem.FileSystem_list$(fs_, currentPath_, $c)), (async (file_, $c) => {
if((await ff_core_FileSystem.FileSystem_isDirectory$(fs_, file_, $c))) {
return (await go_$(file_, $c))
} else {
return ff_core_List.Link(file_, ff_core_List.Empty())
}
}), $c))
}
return (await ff_core_List.List_map$((await go_$(path_, $c)), (async (file_, $c) => {
return ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $c)))
}), $c))
}

export async function internalExecutableModeFileSystem_$(dummy_, $c) {

        return null;
    
}

export async function internalScriptModeFileSystem_$(dummy_, $c) {

        return null;
    
}

export function ExecutableMode_assets(self_) {
const fs_ = ff_core_RunMode.internalExecutableModeFileSystem_(self_);
const files_ = ff_core_FileSystem.FileSystem_list(fs_, "/snapshot/.firefly/output/assets");
const streams_ = ff_core_List.List_map(files_, ((file_) => {
return ff_core_Pair.Pair(file_, ff_core_FileSystem.FileSystem_readStream(fs_, file_))
}));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function ExecutableMode_assets$(self_, $c) {
const fs_ = (await ff_core_RunMode.internalExecutableModeFileSystem_$(self_, $c));
const files_ = (await ff_core_FileSystem.FileSystem_list$(fs_, "/snapshot/.firefly/output/assets", $c));
const streams_ = (await ff_core_List.List_map$(files_, (async (file_, $c) => {
return ff_core_Pair.Pair(file_, (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $c)))
}), $c));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function ScriptMode_packageAssets(self_) {
const fs_ = ff_core_RunMode.internalScriptModeFileSystem_(self_);
const streams_ = ff_core_RunMode.internalListDirectory_(fs_, ".");
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function ScriptMode_dependencyAssets(self_, user_, package_) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export function ScriptMode_compiledBrowserAssets(self_) {
const fs_ = ff_core_RunMode.internalScriptModeFileSystem_(self_);
const streams_ = ff_core_RunMode.internalListDirectory_(fs_, ".firefly/output/browser");
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function ScriptMode_packageAssets$(self_, $c) {
const fs_ = (await ff_core_RunMode.internalScriptModeFileSystem_$(self_, $c));
const streams_ = (await ff_core_RunMode.internalListDirectory_$(fs_, ".", $c));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function ScriptMode_dependencyAssets$(self_, user_, package_, $c) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export async function ScriptMode_compiledBrowserAssets$(self_, $c) {
const fs_ = (await ff_core_RunMode.internalScriptModeFileSystem_$(self_, $c));
const streams_ = (await ff_core_RunMode.internalListDirectory_$(fs_, ".firefly/output/browser", $c));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}




