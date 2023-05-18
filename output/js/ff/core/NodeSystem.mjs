

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

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

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

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_TaskScope from "../../ff/core/TaskScope.mjs"

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
const assetPkgSnapshotPath_ = "/snapshot/output/assets";
if(ff_core_FileSystem.FileSystem_isDirectory(ff_core_NodeSystem.NodeSystem_files(self_), assetPkgSnapshotPath_)) {
const fs_ = ff_core_NodeSystem.NodeSystem_files(self_);
function streams_(path_) {
const files_ = ff_core_FileSystem.FileSystem_list(fs_, path_);
return ff_core_List.List_flatMap(files_, ((file_) => {
if(ff_core_FileSystem.FileSystem_isDirectory(fs_, file_)) {
return streams_(file_)
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(assetPkgSnapshotPath_)), (() => {
return ff_core_FileSystem.FileSystem_readStream(fs_, file_)
})), ff_core_List.Empty())
}
}))
}
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_(assetPkgSnapshotPath_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
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

export function NodeSystem_time(self_) {
throw new Error('Function NodeSystem_time is missing on this target in sync context.');
}

export function NodeSystem_js(self_) {
throw new Error('Function NodeSystem_js is missing on this target in sync context.');
}

export function NodeSystem_scope(self_, body_, shielded_ = false, rethrow_ = true) {
const scope_ = ff_core_NodeSystem.NodeSystem_openScope(self_, shielded_);
try {
return body_(scope_)
} finally {
ff_core_TaskScope.TaskScope_close(scope_, rethrow_)
}
}

export function NodeSystem_openScope(self_, shielded_ = false) {
throw new Error('Function NodeSystem_openScope is missing on this target in sync context.');
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

export async function NodeSystem_arguments$(self_, $c) {
return self_.array_
}

export async function NodeSystem_assets$(self_, $c) {
const assetPkgSnapshotPath_ = "/snapshot/output/assets";
if((await ff_core_FileSystem.FileSystem_isDirectory$((await ff_core_NodeSystem.NodeSystem_files$(self_, $c)), assetPkgSnapshotPath_, $c))) {
const fs_ = (await ff_core_NodeSystem.NodeSystem_files$(self_, $c));
async function streams_$(path_, $c) {
const files_ = (await ff_core_FileSystem.FileSystem_list$(fs_, path_, $c));
return (await ff_core_List.List_flatMap$(files_, (async (file_, $c) => {
if((await ff_core_FileSystem.FileSystem_isDirectory$(fs_, file_, $c))) {
return (await streams_$(file_, $c))
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(assetPkgSnapshotPath_)), (async ($c) => {
return (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $c))
})), ff_core_List.Empty())
}
}), $c))
}
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap((await streams_$(assetPkgSnapshotPath_, $c)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
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

export async function NodeSystem_time$(self_, $c) {
return null
}

export async function NodeSystem_js$(self_, $c) {
return typeof globalThis !== 'undefined' ? globalThis : window
}

export async function NodeSystem_scope$(self_, body_, shielded_ = false, rethrow_ = true, $c) {
const scope_ = (await ff_core_NodeSystem.NodeSystem_openScope$(self_, shielded_, $c));
try {
return (await body_(scope_, $c))
} finally {
(await ff_core_TaskScope.TaskScope_close$(scope_, rethrow_, $c))
}
}

export async function NodeSystem_openScope$(self_, shielded_ = false, $c) {

            return await ff_core_TaskScope.TaskScope_openSubscope$($c, shielded_, $c)
        
}

export async function NodeSystem_exit$(self_, exitCode_ = 0, $c) {
process.exit(exitCode_)
}

export async function NodeSystem_readStream$(self_, $c) {

            return ff_core_FileSystem.internalReadStream_$(() => process.stdin)
        
}

export async function NodeSystem_writeBuffer$(self_, buffer_, $c) {
process.stdout.write(new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))
}

export async function NodeSystem_writeStream$(self_, stream_, $c) {
(await ff_core_Stream.Stream_each$(stream_, (async (_w1, $c) => {
(await ff_core_NodeSystem.NodeSystem_writeBuffer$(self_, _w1, $c))
}), $c))
}

export async function NodeSystem_writeText$(self_, text_, $c) {
(await ff_core_NodeSystem.NodeSystem_writeBuffer$(self_, ff_core_String.String_toBuffer(text_), $c))
}

export async function NodeSystem_writeLine$(self_, text_, $c) {
(await ff_core_NodeSystem.NodeSystem_writeText$(self_, (text_ + "\n"), $c))
}

export async function NodeSystem_writeErrorBuffer$(self_, buffer_, $c) {
process.stderr.write(new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))
}

export async function NodeSystem_writeErrorStream$(self_, stream_, $c) {
(await ff_core_Stream.Stream_each$(stream_, (async (_w1, $c) => {
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(self_, _w1, $c))
}), $c))
}

export async function NodeSystem_writeErrorText$(self_, text_, $c) {
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(self_, ff_core_String.String_toBuffer(text_), $c))
}

export async function NodeSystem_writeErrorLine$(self_, text_, $c) {
(await ff_core_NodeSystem.NodeSystem_writeErrorText$(self_, (text_ + "\n"), $c))
}




