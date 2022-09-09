

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

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

// type NodeSystem




export function internalAssets_(system_) {
throw new Error('Function internalAssets is missing on this target in sync context.');
}

export async function internalAssets_$(system_, $c) {
return system_.assets_
}

export function NodeSystem_arguments(self_) {
throw new Error('Function NodeSystem_arguments is missing on this target in sync context.');
}

export function NodeSystem_assets(self_) {
if(ff_core_FileSystem.FileSystem_exists(ff_core_NodeSystem.NodeSystem_files(self_), "/snapshot/.firefly")) {
const fs_ = ff_core_NodeSystem.NodeSystem_files(self_);
const files_ = ff_core_FileSystem.FileSystem_list(fs_, "/snapshot/.firefly/output/assets");
const streams_ = ff_core_List.List_map(files_, ((file_) => {
return ff_core_Pair.Pair(file_, ff_core_FileSystem.FileSystem_readStream(fs_, file_))
}));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
} else {
return ff_core_NodeSystem.internalAssets_(self_)
}
}

export function NodeSystem_files(self_) {
throw new Error('Function NodeSystem_files is missing on this target in sync context.');
}

export function NodeSystem_fetch(self_) {
throw new Error('Function NodeSystem_fetch is missing on this target in sync context.');
}

export function NodeSystem_tasks(self_) {
throw new Error('Function NodeSystem_tasks is missing on this target in sync context.');
}

export function NodeSystem_time(self_) {
throw new Error('Function NodeSystem_time is missing on this target in sync context.');
}

export function NodeSystem_js(self_) {
throw new Error('Function NodeSystem_js is missing on this target in sync context.');
}

export async function NodeSystem_arguments$(self_, $c) {
return ff_core_Array.Array_toList(self_.array_)
}

export async function NodeSystem_assets$(self_, $c) {
if((await ff_core_FileSystem.FileSystem_exists$((await ff_core_NodeSystem.NodeSystem_files$(self_, $c)), "/snapshot/.firefly", $c))) {
const fs_ = (await ff_core_NodeSystem.NodeSystem_files$(self_, $c));
const files_ = (await ff_core_FileSystem.FileSystem_list$(fs_, "/snapshot/.firefly/output/assets", $c));
const streams_ = (await ff_core_List.List_map$(files_, (async (file_, $c) => {
return ff_core_Pair.Pair(file_, (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $c)))
}), $c));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
} else {
return (await ff_core_NodeSystem.internalAssets_$(self_, $c))
}
}

export async function NodeSystem_files$(self_, $c) {
return null
}

export async function NodeSystem_fetch$(self_, $c) {
return null
}

export async function NodeSystem_tasks$(self_, $c) {
return null
}

export async function NodeSystem_time$(self_, $c) {
return null
}

export async function NodeSystem_js$(self_, $c) {
return typeof globalThis !== 'undefined' ? globalThis : window
}




