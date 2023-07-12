import * as import$0 from 'path';

import * as import$1 from 'url';

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type NodeSystem




export function internalAssets_(system_) {
throw new Error('Function internalAssets is missing on this target in sync context.');
}

export async function internalAssets_$(system_, $task) {
return system_.assets_
}

export function NodeSystem_arguments(self_) {
throw new Error('Function NodeSystem_arguments is missing on this target in sync context.');
}

export function NodeSystem_assets(self_) {
const assetPkgSnapshotPath_ = ff_core_NodeSystem.NodeSystem_path(self_, "/snapshot/output/assets");
if(ff_core_Path.Path_isDirectory(assetPkgSnapshotPath_)) {
function streams_(path_) {
return ff_core_Stream.Stream_flatMap(ff_core_Path.Path_entries(path_), ((file_) => {
if(ff_core_Path.PathEntry_isDirectory(file_)) {
return streams_(ff_core_Path.PathEntry_path(file_))
} else {
return ff_core_List.List_toStream(ff_core_List.Link(ff_core_Pair.Pair(ff_core_Path.Path_relativeTo(ff_core_Path.PathEntry_path(file_), assetPkgSnapshotPath_), (() => {
return ff_core_Path.Path_readStream(ff_core_Path.PathEntry_path(file_))
})), ff_core_List.Empty()), false)
}
}))
}
return ff_core_AssetSystem.AssetSystem(ff_core_Stream.Stream_toMap(streams_(assetPkgSnapshotPath_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
} else {
return ff_core_NodeSystem.internalAssets_(self_)
}
}

export function NodeSystem_path(self_, relativePath_) {
throw new Error('Function NodeSystem_path is missing on this target in sync context.');
}

export function NodeSystem_pathFromUrl(self_, url_) {
throw new Error('Function NodeSystem_pathFromUrl is missing on this target in sync context.');
}

export function NodeSystem_httpClient(self_) {
throw new Error('Function NodeSystem_httpClient is missing on this target in sync context.');
}

export function NodeSystem_mainTask(self_) {
throw new Error('Function NodeSystem_mainTask is missing on this target in sync context.');
}

export function NodeSystem_js(self_) {
throw new Error('Function NodeSystem_js is missing on this target in sync context.');
}

export function NodeSystem_exit(self_, exitCode_ = 0) {
throw new Error('Function NodeSystem_exit is missing on this target in sync context.');
}

export function NodeSystem_readStream(self_) {
throw new Error('Function NodeSystem_readStream is missing on this target in sync context.');
}

export function NodeSystem_writeBuffer(self_, buffer_) {
throw new Error('Function NodeSystem_writeBuffer is missing on this target in sync context.');
}

export function NodeSystem_writeStream(self_, stream_) {
ff_core_Stream.Stream_each(stream_, ((_w1) => {
ff_core_NodeSystem.NodeSystem_writeBuffer(self_, _w1)
}))
}

export function NodeSystem_writeText(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeBuffer(self_, ff_core_String.String_toBuffer(text_))
}

export function NodeSystem_writeLine(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeText(self_, (text_ + "\n"))
}

export function NodeSystem_writeErrorBuffer(self_, buffer_) {
throw new Error('Function NodeSystem_writeErrorBuffer is missing on this target in sync context.');
}

export function NodeSystem_writeErrorStream(self_, stream_) {
ff_core_Stream.Stream_each(stream_, ((_w1) => {
ff_core_NodeSystem.NodeSystem_writeErrorBuffer(self_, _w1)
}))
}

export function NodeSystem_writeErrorText(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeErrorBuffer(self_, ff_core_String.String_toBuffer(text_))
}

export function NodeSystem_writeErrorLine(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeErrorText(self_, (text_ + "\n"))
}

export async function NodeSystem_arguments$(self_, $task) {
return self_.array_
}

export async function NodeSystem_assets$(self_, $task) {
const assetPkgSnapshotPath_ = (await ff_core_NodeSystem.NodeSystem_path$(self_, "/snapshot/output/assets", $task));
if((await ff_core_Path.Path_isDirectory$(assetPkgSnapshotPath_, $task))) {
async function streams_$(path_, $task) {
return (await ff_core_Stream.Stream_flatMap$((await ff_core_Path.Path_entries$(path_, $task)), (async (file_, $task) => {
if((await ff_core_Path.PathEntry_isDirectory$(file_, $task))) {
return (await streams_$((await ff_core_Path.PathEntry_path$(file_, $task)), $task))
} else {
return (await ff_core_List.List_toStream$(ff_core_List.Link(ff_core_Pair.Pair((await ff_core_Path.Path_relativeTo$((await ff_core_Path.PathEntry_path$(file_, $task)), assetPkgSnapshotPath_, $task)), (async ($task) => {
return (await ff_core_Path.Path_readStream$((await ff_core_Path.PathEntry_path$(file_, $task)), $task))
})), ff_core_List.Empty()), false, $task))
}
}), $task))
}
return ff_core_AssetSystem.AssetSystem((await ff_core_Stream.Stream_toMap$((await streams_$(assetPkgSnapshotPath_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, $task)))
} else {
return (await ff_core_NodeSystem.internalAssets_$(self_, $task))
}
}

export async function NodeSystem_path$(self_, relativePath_, $task) {

            const path = import$0
            return path.resolve(relativePath_)
        
}

export async function NodeSystem_pathFromUrl$(self_, url_, $task) {

            const url = import$1;
            return url.fileURLToPath(new URL(url_));
        
}

export async function NodeSystem_httpClient$(self_, $task) {
return null
}

export async function NodeSystem_mainTask$(self_, $task) {
return self_.task_
}

export async function NodeSystem_js$(self_, $task) {
return typeof globalThis !== 'undefined' ? globalThis : window
}

export async function NodeSystem_exit$(self_, exitCode_ = 0, $task) {
process.exit(exitCode_)
}

export async function NodeSystem_readStream$(self_, $task) {

            return ff_core_Path.internalReadStream_$(() => process.stdin)
        
}

export async function NodeSystem_writeBuffer$(self_, buffer_, $task) {
process.stdout.write(new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))
}

export async function NodeSystem_writeStream$(self_, stream_, $task) {
(await ff_core_Stream.Stream_each$(stream_, (async (_w1, $task) => {
(await ff_core_NodeSystem.NodeSystem_writeBuffer$(self_, _w1, $task))
}), $task))
}

export async function NodeSystem_writeText$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeBuffer$(self_, ff_core_String.String_toBuffer(text_), $task))
}

export async function NodeSystem_writeLine$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeText$(self_, (text_ + "\n"), $task))
}

export async function NodeSystem_writeErrorBuffer$(self_, buffer_, $task) {
process.stderr.write(new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))
}

export async function NodeSystem_writeErrorStream$(self_, stream_, $task) {
(await ff_core_Stream.Stream_each$(stream_, (async (_w1, $task) => {
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(self_, _w1, $task))
}), $task))
}

export async function NodeSystem_writeErrorText$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(self_, ff_core_String.String_toBuffer(text_), $task))
}

export async function NodeSystem_writeErrorLine$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeErrorText$(self_, (text_ + "\n"), $task))
}




