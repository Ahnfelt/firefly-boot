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

// type Queue
export function Queue(items_, nextKey_) {
return {items_, nextKey_};
}

// newtype QueueKey

export function new_() {
return ff_core_Queue.Queue(ff_core_IntMap.new_(), 0)
}

export async function new_$($task) {
return ff_core_Queue.Queue(ff_core_IntMap.new_(), 0)
}

export function Queue_push(self_, item_) {
self_.nextKey_ += 1;
ff_core_IntMap.IntMap_set(self_.items_, self_.nextKey_, item_);
return self_.nextKey_
}

export function Queue_pop(self_) {
if((ff_core_IntMap.IntMap_size(self_.items_) === 0)) {
return ff_core_Option.None()
} else {
const key_ = self_.items_.keys().next().value;
const value_ = ff_core_IntMap.IntMap_get(self_.items_, key_);
ff_core_IntMap.IntMap_remove(self_.items_, key_);
return value_
}
}

export function Queue_first(self_) {
if((ff_core_IntMap.IntMap_size(self_.items_) === 0)) {
return ff_core_Option.None()
} else {
const key_ = self_.items_.keys().next().value;
const value_ = ff_core_IntMap.IntMap_get(self_.items_, key_);
return value_
}
}

export function Queue_remove(self_, key_) {
return ff_core_IntMap.IntMap_remove(self_.items_, key_)
}

export function Queue_has(self_, key_) {
return ff_core_IntMap.IntMap_has(self_.items_, key_)
}

export function Queue_clear(self_) {
ff_core_IntMap.IntMap_clear(self_.items_)
}

export function Queue_size(self_) {
return ff_core_IntMap.IntMap_size(self_.items_)
}

export function Queue_isEmpty(self_) {
return (ff_core_Queue.Queue_size(self_) === 0)
}

export function Queue_each(self_, body_) {
ff_core_IntMap.IntMap_each(self_.items_, ((k_, v_) => {
body_(k_, v_)
}))
}

export function Queue_eachWhile(self_, body_) {
ff_core_IntMap.IntMap_eachWhile(self_.items_, ((k_, v_) => {
return body_(k_, v_)
}))
}

export function Queue_toArray(self_) {
const array_ = ff_core_Array.new_();
ff_core_Queue.Queue_each(self_, ((_, v_) => {
array_.array.push(v_)
}));
return array_
}

export function Queue_toList(self_) {
return ff_core_Array.Array_drain(ff_core_Queue.Queue_toArray(self_))
}

export function Queue_toStream(self_) {
return ff_core_List.List_toStream(ff_core_Queue.Queue_toList(self_), false)
}

export function Queue_keys(self_) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_.items_, ((k_, _) => {
array_.array.push(k_)
}));
return ff_core_Array.Array_drain(array_)
}

export function Queue_values(self_) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_.items_, ((_, v_) => {
array_.array.push(v_)
}));
return ff_core_Array.Array_drain(array_)
}

export function Queue_copy(self_) {
return ff_core_Queue.Queue(ff_core_IntMap.IntMap_copy(self_.items_), self_.nextKey_)
}

export async function Queue_push$(self_, item_, $task) {
self_.nextKey_ += 1;
ff_core_IntMap.IntMap_set(self_.items_, self_.nextKey_, item_);
return self_.nextKey_
}

export async function Queue_pop$(self_, $task) {
if((ff_core_IntMap.IntMap_size(self_.items_) === 0)) {
return ff_core_Option.None()
} else {
const key_ = self_.items_.keys().next().value;
const value_ = ff_core_IntMap.IntMap_get(self_.items_, key_);
ff_core_IntMap.IntMap_remove(self_.items_, key_);
return value_
}
}

export async function Queue_first$(self_, $task) {
if((ff_core_IntMap.IntMap_size(self_.items_) === 0)) {
return ff_core_Option.None()
} else {
const key_ = self_.items_.keys().next().value;
const value_ = ff_core_IntMap.IntMap_get(self_.items_, key_);
return value_
}
}

export async function Queue_remove$(self_, key_, $task) {
return ff_core_IntMap.IntMap_remove(self_.items_, key_)
}

export async function Queue_has$(self_, key_, $task) {
return ff_core_IntMap.IntMap_has(self_.items_, key_)
}

export async function Queue_clear$(self_, $task) {
ff_core_IntMap.IntMap_clear(self_.items_)
}

export async function Queue_size$(self_, $task) {
return ff_core_IntMap.IntMap_size(self_.items_)
}

export async function Queue_isEmpty$(self_, $task) {
return (ff_core_Queue.Queue_size(self_) === 0)
}

export async function Queue_each$(self_, body_, $task) {
(await ff_core_IntMap.IntMap_each$(self_.items_, (async (k_, v_, $task) => {
(await body_(k_, v_, $task))
}), $task))
}

export async function Queue_eachWhile$(self_, body_, $task) {
(await ff_core_IntMap.IntMap_eachWhile$(self_.items_, (async (k_, v_, $task) => {
return (await body_(k_, v_, $task))
}), $task))
}

export async function Queue_toArray$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_Queue.Queue_each(self_, ((_, v_) => {
array_.array.push(v_)
}));
return array_
}

export async function Queue_toList$(self_, $task) {
return ff_core_Array.Array_drain(ff_core_Queue.Queue_toArray(self_))
}

export async function Queue_toStream$(self_, $task) {
return (await ff_core_List.List_toStream$(ff_core_Queue.Queue_toList(self_), false, $task))
}

export async function Queue_keys$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_.items_, ((k_, _) => {
array_.array.push(k_)
}));
return ff_core_Array.Array_drain(array_)
}

export async function Queue_values$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_.items_, ((_, v_) => {
array_.array.push(v_)
}));
return ff_core_Array.Array_drain(array_)
}

export async function Queue_copy$(self_, $task) {
return ff_core_Queue.Queue(ff_core_IntMap.IntMap_copy(self_.items_), self_.nextKey_)
}

//# sourceMappingURL=Queue.mjs.map