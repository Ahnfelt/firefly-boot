

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

// type JsSystem








export function JsSystem_globalThis(self_) {
return self_
}

export function JsSystem_get(self_, key_) {
return self_[key_]
}

export function JsSystem_set(self_, key_, value_, ff_core_JsValue_IsJsValue$V) {
self_[key_] = value_
}

export function JsSystem_increment(self_, key_, value_, ff_core_JsValue_IsJsValue$V) {
self_[key_] += value_
}

export function JsSystem_decrement(self_, key_, value_, ff_core_JsValue_IsJsValue$V) {
self_[key_] -= value_
}

export function JsSystem_call0(self_, name_) {
return self_[name_].call(void 0)
}

export function JsSystem_call1(self_, name_, a1_, ff_core_JsValue_IsJsValue$A1) {
return self_[name_].call(void 0, a1_)
}

export function JsSystem_call2(self_, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2) {
return self_[name_].call(void 0, a1_, a2_)
}

export function JsSystem_call3(self_, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3) {
return self_[name_].call(void 0, a1_, a2_, a3_)
}

export function JsSystem_call4(self_, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4) {
return self_[name_].call(void 0, a1_, a2_, a3_, a4_)
}

export function JsSystem_call5(self_, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5) {
return self_[name_].call(void 0, a1_, a2_, a3_, a4_, a5_)
}

export function JsSystem_call6(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6) {
return self_[name_].call(void 0, a1_, a2_, a3_, a4_, a5_, a6_)
}

export function JsSystem_call7(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7) {
return self_[name_].call(void 0, a1_, a2_, a3_, a4_, a5_, a6_, a7_)
}

export function JsSystem_call8(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8) {
return self_[name_].call(void 0, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_)
}

export function JsSystem_call9(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9) {
return self_[name_].call(void 0, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_)
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

export function JsSystem_new0(self_) {
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

export async function JsSystem_globalThis$(self_, $task) {
throw new Error('Function JsSystem_globalThis is missing on this target in async context.');
}

export async function JsSystem_get$(self_, key_, $task) {
throw new Error('Function JsSystem_get is missing on this target in async context.');
}

export async function JsSystem_set$(self_, key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
throw new Error('Function JsSystem_set is missing on this target in async context.');
}

export async function JsSystem_increment$(self_, key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
throw new Error('Function JsSystem_increment is missing on this target in async context.');
}

export async function JsSystem_decrement$(self_, key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
throw new Error('Function JsSystem_decrement is missing on this target in async context.');
}

export async function JsSystem_call0$(self_, name_, $task) {
throw new Error('Function JsSystem_call0 is missing on this target in async context.');
}

export async function JsSystem_call1$(self_, name_, a1_, ff_core_JsValue_IsJsValue$A1, $task) {
throw new Error('Function JsSystem_call1 is missing on this target in async context.');
}

export async function JsSystem_call2$(self_, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, $task) {
throw new Error('Function JsSystem_call2 is missing on this target in async context.');
}

export async function JsSystem_call3$(self_, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, $task) {
throw new Error('Function JsSystem_call3 is missing on this target in async context.');
}

export async function JsSystem_call4$(self_, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, $task) {
throw new Error('Function JsSystem_call4 is missing on this target in async context.');
}

export async function JsSystem_call5$(self_, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, $task) {
throw new Error('Function JsSystem_call5 is missing on this target in async context.');
}

export async function JsSystem_call6$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, $task) {
throw new Error('Function JsSystem_call6 is missing on this target in async context.');
}

export async function JsSystem_call7$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, $task) {
throw new Error('Function JsSystem_call7 is missing on this target in async context.');
}

export async function JsSystem_call8$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, $task) {
throw new Error('Function JsSystem_call8 is missing on this target in async context.');
}

export async function JsSystem_call9$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9, $task) {
throw new Error('Function JsSystem_call9 is missing on this target in async context.');
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

export async function JsSystem_new0$(self_, $task) {
throw new Error('Function JsSystem_new0 is missing on this target in async context.');
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




