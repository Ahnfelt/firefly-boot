

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Box from "../../ff/core/Box.mjs"

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

import * as ff_core_Random from "../../ff/core/Random.mjs"

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

import * as ff_core_WebSocket from "../../ff/core/WebSocket.mjs"

// type WebSocket




export function internalOpenBrowserWebSocket_(browserSystem_, url_) {
throw new Error('Function internalOpenBrowserWebSocket is missing on this target in sync context.');
}

export async function internalOpenBrowserWebSocket_$(browserSystem_, url_, $task) {
throw new Error('Function internalOpenBrowserWebSocket is missing on this target in async context.');
}

export function WebSocket_readText(self_, encoding_ = "utf8") {
return ff_core_WebSocket.WebSocket_readAny(self_, ((_w1) => {
return _w1
}), ((_w1) => {
return ff_core_Buffer.Buffer_toString(_w1, encoding_)
}))
}

export function WebSocket_readBuffer(self_) {
return ff_core_WebSocket.WebSocket_readAny(self_, ((_w1) => {
return ff_core_String.String_toBuffer(_w1)
}), ((_w1) => {
return _w1
}))
}

export function WebSocket_readAny(self_, fromText_, fromBuffer_) {
throw new Error('Function WebSocket_readAny is missing on this target in sync context.');
}

export function WebSocket_writeBuffer(self_, data_) {
throw new Error('Function WebSocket_writeBuffer is missing on this target in sync context.');
}

export function WebSocket_writeText(self_, data_) {
throw new Error('Function WebSocket_writeText is missing on this target in sync context.');
}

export function WebSocket_close(self_, code_ = 1000, reason_ = "") {
throw new Error('Function WebSocket_close is missing on this target in sync context.');
}

export function WebSocket_isOpen(self_) {
throw new Error('Function WebSocket_isOpen is missing on this target in sync context.');
}

export function WebSocket_isClosing(self_) {
throw new Error('Function WebSocket_isClosing is missing on this target in sync context.');
}

export function WebSocket_isClosed(self_) {
throw new Error('Function WebSocket_isClosed is missing on this target in sync context.');
}

export async function WebSocket_readText$(self_, encoding_ = "utf8", $task) {
return (await ff_core_WebSocket.WebSocket_readAny$(self_, (async (_w1, $task) => {
return _w1
}), (async (_w1, $task) => {
return ff_core_Buffer.Buffer_toString(_w1, encoding_)
}), $task))
}

export async function WebSocket_readBuffer$(self_, $task) {
return (await ff_core_WebSocket.WebSocket_readAny$(self_, (async (_w1, $task) => {
return ff_core_String.String_toBuffer(_w1)
}), (async (_w1, $task) => {
return _w1
}), $task))
}

export async function WebSocket_readAny$(self_, fromText_, fromBuffer_, $task) {
throw new Error('Function WebSocket_readAny is missing on this target in async context.');
}

export async function WebSocket_writeBuffer$(self_, data_, $task) {
throw new Error('Function WebSocket_writeBuffer is missing on this target in async context.');
}

export async function WebSocket_writeText$(self_, data_, $task) {
throw new Error('Function WebSocket_writeText is missing on this target in async context.');
}

export async function WebSocket_close$(self_, code_ = 1000, reason_ = "", $task) {
throw new Error('Function WebSocket_close is missing on this target in async context.');
}

export async function WebSocket_isOpen$(self_, $task) {
throw new Error('Function WebSocket_isOpen is missing on this target in async context.');
}

export async function WebSocket_isClosing$(self_, $task) {
throw new Error('Function WebSocket_isClosing is missing on this target in async context.');
}

export async function WebSocket_isClosed$(self_, $task) {
throw new Error('Function WebSocket_isClosed is missing on this target in async context.');
}




