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

import * as import$0 from 'path';
import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type BuildSystem


// type BuildSystemBridge
export function BuildSystemBridge(compileForBrowser_, bundleForBrowser_) {
return {compileForBrowser_, bundleForBrowser_};
}

export function internalListDirectory_(path_) {
function go_(currentPath_) {
return ff_core_Stream.Stream_flatMap(ff_core_Path.Path_entries(currentPath_), ((file_) => {
if(ff_core_Path.PathEntry_isDirectory(file_)) {
return go_(ff_core_Path.PathEntry_path(file_))
} else {
return ff_core_List.List_toStream([ff_core_Path.PathEntry_path(file_)], false)
}
}))
}
return ff_core_Stream.Stream_toList(ff_core_Stream.Stream_map(go_(path_), ((file_) => {
return ff_core_Pair.Pair(("/" + ff_core_String.String_replace(ff_core_Path.Path_relativeTo(file_, path_), "\\", "/")), (() => {
return ff_core_Path.Path_readStream(file_)
}))
})))
}

export function internalListPath_(path_) {
return ff_core_Stream.Stream_flatMap(ff_core_Path.Path_entries(path_), ((file_) => {
if(ff_core_Path.PathEntry_isDirectory(file_)) {
return ff_core_BuildSystem.internalListPath_(ff_core_Path.PathEntry_path(file_))
} else {
return ff_core_List.List_toStream([ff_core_Path.PathEntry_path(file_)], false)
}
}))
}

export function internalPath_(buildSystem_, absoluteOrRelative_) {
const nodePath_ = import$0;
return ff_core_Path.Path(nodePath_.resolve(absoluteOrRelative_))
}

export function internalMainPackagePair_(buildSystem_) {
return ff_core_Pair.Pair(buildSystem_["mainPackagePair_"]["group_"], buildSystem_["mainPackagePair_"]["name_"])
}

export function internalWriteAssets_(system_, assetSystem_) {
const path_ = ff_core_Path.Path_slash(ff_core_Path.Path_path(ff_core_Path.Path_slash(ff_core_NodeSystem.NodeSystem_path(system_, "."), ".firefly"), "output"), "assets");
if(ff_core_Path.Path_exists(path_, false, false, false)) {
ff_core_Path.Path_delete(path_, 0, 100)
};
ff_core_Path.Path_createDirectory(path_, false);
ff_core_Log.debug_(("Writing assets to " + ff_core_Path.Path_absolute(path_)));
ff_core_Map.Map_each(assetSystem_.files_, ((p_, s_) => {
ff_core_Log.debug_(p_);
if((!ff_core_String.String_contains(p_, ".."))) {
const assetPath_ = ff_core_Path.Path_slash(path_, p_);
ff_core_Path.Path_createDirectory(ff_core_Option.Option_grab(ff_core_Path.Path_parent(assetPath_)), true);
ff_core_Path.Path_writeStream(assetPath_, s_(), false)
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function internalReadAssets_(system_) {
const path_ = ff_core_Path.Path_slash(ff_core_Path.Path_path(ff_core_Path.Path_slash(ff_core_NodeSystem.NodeSystem_path(system_, "."), ".firefly"), "output"), "assets");
ff_core_Log.debug_(("Reading assets from " + ff_core_Path.Path_absolute(path_)));
const streams_ = ff_core_BuildSystem.internalListDirectory_(path_);
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function internalBridge_(self_) {
return globalThis["$firefly_bridge"]
}

export async function internalListDirectory_$(path_, $task) {
async function go_$(currentPath_, $task) {
return (await ff_core_Stream.Stream_flatMap$((await ff_core_Path.Path_entries$(currentPath_, $task)), (async (file_, $task) => {
if((await ff_core_Path.PathEntry_isDirectory$(file_, $task))) {
return (await go_$((await ff_core_Path.PathEntry_path$(file_, $task)), $task))
} else {
return (await ff_core_List.List_toStream$([(await ff_core_Path.PathEntry_path$(file_, $task))], false, $task))
}
}), $task))
}
return (await ff_core_Stream.Stream_toList$((await ff_core_Stream.Stream_map$((await go_$(path_, $task)), (async (file_, $task) => {
return ff_core_Pair.Pair(("/" + ff_core_String.String_replace((await ff_core_Path.Path_relativeTo$(file_, path_, $task)), "\\", "/")), (async ($task) => {
return (await ff_core_Path.Path_readStream$(file_, $task))
}))
}), $task)), $task))
}

export async function internalListPath_$(path_, $task) {
return (await ff_core_Stream.Stream_flatMap$((await ff_core_Path.Path_entries$(path_, $task)), (async (file_, $task) => {
if((await ff_core_Path.PathEntry_isDirectory$(file_, $task))) {
return (await ff_core_BuildSystem.internalListPath_$((await ff_core_Path.PathEntry_path$(file_, $task)), $task))
} else {
return (await ff_core_List.List_toStream$([(await ff_core_Path.PathEntry_path$(file_, $task))], false, $task))
}
}), $task))
}

export async function internalPath_$(buildSystem_, absoluteOrRelative_, $task) {
const nodePath_ = import$0;
return ff_core_Path.Path(nodePath_.resolve(absoluteOrRelative_))
}

export async function internalMainPackagePair_$(buildSystem_, $task) {
return ff_core_Pair.Pair(buildSystem_["mainPackagePair_"]["group_"], buildSystem_["mainPackagePair_"]["name_"])
}

export async function internalWriteAssets_$(system_, assetSystem_, $task) {
const path_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_path$((await ff_core_Path.Path_slash$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), ".firefly", $task)), "output", $task)), "assets", $task));
if((await ff_core_Path.Path_exists$(path_, false, false, false, $task))) {
(await ff_core_Path.Path_delete$(path_, 0, 100, $task))
};
(await ff_core_Path.Path_createDirectory$(path_, false, $task));
ff_core_Log.debug_(("Writing assets to " + (await ff_core_Path.Path_absolute$(path_, $task))));
(await ff_core_Map.Map_each$(assetSystem_.files_, (async (p_, s_, $task) => {
ff_core_Log.debug_(p_);
if((!ff_core_String.String_contains(p_, ".."))) {
const assetPath_ = (await ff_core_Path.Path_slash$(path_, p_, $task));
(await ff_core_Path.Path_createDirectory$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(assetPath_, $task))), true, $task));
(await ff_core_Path.Path_writeStream$(assetPath_, (await s_($task)), false, $task))
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, $task))
}

export async function internalReadAssets_$(system_, $task) {
const path_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_path$((await ff_core_Path.Path_slash$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), ".firefly", $task)), "output", $task)), "assets", $task));
ff_core_Log.debug_(("Reading assets from " + (await ff_core_Path.Path_absolute$(path_, $task))));
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$(path_, $task));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function internalBridge_$(self_, $task) {
return globalThis["$firefly_bridge"]
}

export function BuildSystem_compileForBrowser(self_, mainFiles_) {
const bridge_ = ff_core_BuildSystem.internalBridge_(self_);
return bridge_.compileForBrowser_(self_, mainFiles_)
}

export function BuildSystem_bundleForBrowser(self_, mainFiles_, minify_ = true, sourceMaps_ = false) {
const bridge_ = ff_core_BuildSystem.internalBridge_(self_);
return bridge_.bundleForBrowser_(self_, mainFiles_, minify_, sourceMaps_)
}

export function BuildSystem_setAssets(self_, assetSystem_) {
self_["assets_"] = assetSystem_
}

export function BuildSystem_packageAssets(self_) {
const streams_ = ff_core_BuildSystem.internalListDirectory_(ff_core_BuildSystem.internalPath_(self_, "."));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function BuildSystem_dependencyAssets(self_, user_, package_) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export function BuildSystem_arguments(self_) {
return self_["array_"]
}

export function BuildSystem_mainTask(self_) {
return self_["task_"]
}

export function BuildSystem_crypto(self_) {
return crypto
}

export async function BuildSystem_compileForBrowser$(self_, mainFiles_, $task) {
const bridge_ = (await ff_core_BuildSystem.internalBridge_$(self_, $task));
return (await bridge_.compileForBrowser_(self_, mainFiles_, $task))
}

export async function BuildSystem_bundleForBrowser$(self_, mainFiles_, minify_ = true, sourceMaps_ = false, $task) {
const bridge_ = (await ff_core_BuildSystem.internalBridge_$(self_, $task));
return (await bridge_.bundleForBrowser_(self_, mainFiles_, minify_, sourceMaps_, $task))
}

export async function BuildSystem_setAssets$(self_, assetSystem_, $task) {
self_["assets_"] = assetSystem_
}

export async function BuildSystem_packageAssets$(self_, $task) {
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$((await ff_core_BuildSystem.internalPath_$(self_, ".", $task)), $task));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function BuildSystem_dependencyAssets$(self_, user_, package_, $task) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export async function BuildSystem_arguments$(self_, $task) {
return self_["array_"]
}

export async function BuildSystem_mainTask$(self_, $task) {
return self_["task_"]
}

export async function BuildSystem_crypto$(self_, $task) {
return crypto
}


//# sourceMappingURL=BuildSystem.mjs.map