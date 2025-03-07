

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

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type JsSystem








export function JsSystem_globalThis(self_) {
return globalThis
}

export function JsSystem_get(self_, key_) {
return ff_core_Js.get_(key_)
}

export function JsSystem_set(self_, key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_Js.set_(key_, value_, ff_core_JsValue_IsJsValue$V)
}

export function JsSystem_increment(self_, key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_Js.increment_(key_, value_, ff_core_JsValue_IsJsValue$V)
}

export function JsSystem_decrement(self_, key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_Js.decrement_(key_, value_, ff_core_JsValue_IsJsValue$V)
}

export function JsSystem_call0(self_, name_) {
return ff_core_Js.call0_(name_)
}

export function JsSystem_call1(self_, name_, a1_, ff_core_JsValue_IsJsValue$A1) {
return ff_core_Js.call1_(name_, a1_, ff_core_JsValue_IsJsValue$A1)
}

export function JsSystem_call2(self_, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2) {
return ff_core_Js.call2_(name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2)
}

export function JsSystem_call3(self_, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3) {
return ff_core_Js.call3_(name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3)
}

export function JsSystem_call4(self_, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4) {
return ff_core_Js.call4_(name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4)
}

export function JsSystem_call5(self_, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5) {
return ff_core_Js.call5_(name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5)
}

export function JsSystem_call6(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6) {
return ff_core_Js.call6_(name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6)
}

export function JsSystem_call7(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7) {
return ff_core_Js.call7_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7)
}

export function JsSystem_call8(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8) {
return ff_core_Js.call8_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8)
}

export function JsSystem_call9(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9) {
return ff_core_Js.call9_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9)
}

export function JsSystem_null(self_) {
return null
}

export function JsSystem_undefined(self_) {
return (void 0)
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
return ff_core_Js.array_(values_)
}

export function JsSystem_json(self_, value_) {
return ff_core_Js.json_(value_)
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
return globalThis
}

export async function JsSystem_get$(self_, key_, $task) {
return ff_core_Js.get_(key_)
}

export async function JsSystem_set$(self_, key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_Js.set_(key_, value_, ff_core_JsValue_IsJsValue$V)
}

export async function JsSystem_increment$(self_, key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_Js.increment_(key_, value_, ff_core_JsValue_IsJsValue$V)
}

export async function JsSystem_decrement$(self_, key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_Js.decrement_(key_, value_, ff_core_JsValue_IsJsValue$V)
}

export async function JsSystem_call0$(self_, name_, $task) {
return ff_core_Js.call0_(name_)
}

export async function JsSystem_call1$(self_, name_, a1_, ff_core_JsValue_IsJsValue$A1, $task) {
return ff_core_Js.call1_(name_, a1_, ff_core_JsValue_IsJsValue$A1)
}

export async function JsSystem_call2$(self_, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, $task) {
return ff_core_Js.call2_(name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2)
}

export async function JsSystem_call3$(self_, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, $task) {
return ff_core_Js.call3_(name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3)
}

export async function JsSystem_call4$(self_, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, $task) {
return ff_core_Js.call4_(name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4)
}

export async function JsSystem_call5$(self_, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, $task) {
return ff_core_Js.call5_(name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5)
}

export async function JsSystem_call6$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, $task) {
return ff_core_Js.call6_(name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6)
}

export async function JsSystem_call7$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, $task) {
return ff_core_Js.call7_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7)
}

export async function JsSystem_call8$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, $task) {
return ff_core_Js.call8_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8)
}

export async function JsSystem_call9$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9, $task) {
return ff_core_Js.call9_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9)
}

export async function JsSystem_null$(self_, $task) {
return null
}

export async function JsSystem_undefined$(self_, $task) {
return (void 0)
}

export async function JsSystem_value$(self_, jsValue_, ff_core_JsValue_IsJsValue$T, $task) {
return jsValue_
}

export async function JsSystem_object$(self_, $task) {
return {}
}

export async function JsSystem_new0$(self_, $task) {
return {}
}

export async function JsSystem_array$(self_, values_, $task) {
return ff_core_Js.array_(values_)
}

export async function JsSystem_json$(self_, value_, $task) {
return ff_core_Js.json_(value_)
}

export async function JsSystem_function0$(self_, body_, $task) {
return (async () => await body_($task))
}

export async function JsSystem_function1$(self_, body_, $task) {
return (async (a_1) => await body_(a_1, $task))
}

export async function JsSystem_function2$(self_, body_, $task) {
return (async (a_1, a_2) => await body_(a_1, a_2, $task))
}

export async function JsSystem_function3$(self_, body_, $task) {
return (async (a_1, a_2, a_3) => await body_(a_1, a_2, a_3, $task))
}

export async function JsSystem_function4$(self_, body_, $task) {
return (async (a_1, a_2, a_3, a_4) => await body_(a_1, a_2, a_3, a_4, $task))
}

export async function JsSystem_function5$(self_, body_, $task) {
return (async (a_1, a_2, a_3, a_4, a_5) => await body_(a_1, a_2, a_3, a_4, a_5, $task))
}

export async function JsSystem_function6$(self_, body_, $task) {
return (async (a_1, a_2, a_3, a_4, a_5, a_6) => await body_(a_1, a_2, a_3, a_4, a_5, a_6, $task))
}

export async function JsSystem_function7$(self_, body_, $task) {
return (async (a_1, a_2, a_3, a_4, a_5, a_6, a_7) => await body_(a_1, a_2, a_3, a_4, a_5, a_6, a_7, $task))
}

export async function JsSystem_function8$(self_, body_, $task) {
return (async (a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8) => await body_(a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, $task))
}

export async function JsSystem_function9$(self_, body_, $task) {
return (async (a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9) => await body_(a_1, a_2, a_3, a_4, a_5, a_6, a_7, a_8, a_9, $task))
}


