

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

import * as ff_core_Digest from "../../ff/core/Digest.mjs"

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

// type JsSystem








export function JsSystem_global(self_) {
return self_
}

export function JsSystem_parseJson(self_, json_) {
return JSON.parse(json_)
}

export function JsSystem_null(self_) {
return null
}

export function JsSystem_undefined(self_) {
return void 0
}

export function JsSystem_value(self_, jsValue_, ff_core_JsValue_IsJsValue$T) {
return jsValue_
}

export function JsSystem_object(self_) {
return {}
}

export function JsSystem_array(self_, values_) {
return values_.slice()
}

export function JsSystem_json(self_, value_) {
return value_
}

export function JsSystem_function0(self_, body_) {
return body_
}

export function JsSystem_function1(self_, body_) {
return body_
}

export function JsSystem_function2(self_, body_) {
return body_
}

export function JsSystem_function3(self_, body_) {
return body_
}

export function JsSystem_function4(self_, body_) {
return body_
}

export function JsSystem_function5(self_, body_) {
return body_
}

export function JsSystem_function6(self_, body_) {
return body_
}

export function JsSystem_function7(self_, body_) {
return body_
}

export function JsSystem_function8(self_, body_) {
return body_
}

export function JsSystem_function9(self_, body_) {
return body_
}

export async function JsSystem_global$(self_, $task) {
throw new Error('Function JsSystem_global is missing on this target in async context.');
}

export async function JsSystem_parseJson$(self_, json_, $task) {
throw new Error('Function JsSystem_parseJson is missing on this target in async context.');
}

export async function JsSystem_null$(self_, $task) {
throw new Error('Function JsSystem_null is missing on this target in async context.');
}

export async function JsSystem_undefined$(self_, $task) {
throw new Error('Function JsSystem_undefined is missing on this target in async context.');
}

export async function JsSystem_value$(self_, jsValue_, ff_core_JsValue_IsJsValue$T, $task) {
throw new Error('Function JsSystem_value is missing on this target in async context.');
}

export async function JsSystem_object$(self_, $task) {
throw new Error('Function JsSystem_object is missing on this target in async context.');
}

export async function JsSystem_array$(self_, values_, $task) {
throw new Error('Function JsSystem_array is missing on this target in async context.');
}

export async function JsSystem_json$(self_, value_, $task) {
throw new Error('Function JsSystem_json is missing on this target in async context.');
}

export async function JsSystem_function0$(self_, body_, $task) {
return () => body_($task)
}

export async function JsSystem_function1$(self_, body_, $task) {
return a1 => body_(a1, $task)
}

export async function JsSystem_function2$(self_, body_, $task) {
return (a1, a2) => body_(a1, a2, $task)
}

export async function JsSystem_function3$(self_, body_, $task) {
return (a1, a2, a3) => body_(a1, a2, a3, $task)
}

export async function JsSystem_function4$(self_, body_, $task) {
return (a1, a2, a3, a4) => body_(a1, a2, a3, a4, $task)
}

export async function JsSystem_function5$(self_, body_, $task) {
return (a1, a2, a3, a4, a5) => body_(a1, a2, a3, a4, a5, $task)
}

export async function JsSystem_function6$(self_, body_, $task) {
return (a1, a2, a3, a4, a5, a6) => body_(a1, a2, a3, a4, a5, a6, $task)
}

export async function JsSystem_function7$(self_, body_, $task) {
return (a1, a2, a3, a4, a5, a6, a7) => body_(a1, a2, a3, a4, a5, a6, a7, $task)
}

export async function JsSystem_function8$(self_, body_, $task) {
return (a1, a2, a3, a4, a5, a6, a7, a8) => body_(a1, a2, a3, a4, a5, a6, a7, a8, $task)
}

export async function JsSystem_function9$(self_, body_, $task) {
return (a1, a2, a3, a4, a5, a6, a7, a8, a9) => body_(a1, a2, a3, a4, a5, a6, a7, a8, a9, $task)
}




