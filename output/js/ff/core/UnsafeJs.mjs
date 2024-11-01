

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

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

import * as ff_core_UnsafeJs from "../../ff/core/UnsafeJs.mjs"





export function jsSystem_() {
return typeof globalThis !== 'undefined' ? globalThis : window
}

export function import_(module_) {
throw Error('Dynamic JS imports are not currently supported.')
}

export function await_(body_) {
return body_()
}

export function throwIfCancelled_() {

}

export function cancelled_() {
return false
}

export function inAsync_() {
return false
}

export function inBrowser_() {
return false
}

export function inNode_() {
return false
}

export function inBuild_() {
return false
}

export function value_(value_) {
return value_
}

export function fromValue_(value_) {
return value_
}

export async function jsSystem_$($task) {
return typeof globalThis !== 'undefined' ? globalThis : window
}

export async function import_$(module_, $task) {
throw new Error('Function import is missing on this target in async context.');
}

export async function await_$(body_, $task) {
throw new Error('Function await is missing on this target in async context.');
}

export async function throwIfCancelled_$($task) {
throw new Error('Function throwIfCancelled is missing on this target in async context.');
}

export async function cancelled_$($task) {
throw new Error('Function cancelled is missing on this target in async context.');
}

export async function inAsync_$($task) {
throw new Error('Function inAsync is missing on this target in async context.');
}

export async function inBrowser_$($task) {
throw new Error('Function inBrowser is missing on this target in async context.');
}

export async function inNode_$($task) {
throw new Error('Function inNode is missing on this target in async context.');
}

export async function inBuild_$($task) {
throw new Error('Function inBuild is missing on this target in async context.');
}

export async function value_$(value_, $task) {
throw new Error('Function value is missing on this target in async context.');
}

export async function fromValue_$(value_, $task) {
throw new Error('Function fromValue is missing on this target in async context.');
}





