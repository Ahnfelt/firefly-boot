

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

// type IntMap




export function new_() {
return (new Map())
}

export async function new_$($task) {
return (new Map())
}

export function IntMap_get(self_, key_) {
const result_ = self_.get(key_);
if(((!ff_core_JsValue.JsValue_isUndefined(result_)) || self_.has(key_))) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export function IntMap_grab(self_, key_) {
const result_ = self_.get(key_);
if((ff_core_JsValue.JsValue_isUndefined(result_) && (!ff_core_IntMap.IntMap_has(self_, key_)))) {
ff_core_Core.throw_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
return result_
}

export function IntMap_set(self_, key_, value_) {
self_.set(key_, value_)
}

export function IntMap_has(self_, key_) {
return self_.has(key_)
}

export function IntMap_remove(self_, key_) {
return self_.delete(key_)
}

export function IntMap_clear(self_) {
self_.clear()
}

export function IntMap_size(self_) {
return self_.size
}

export function IntMap_isEmpty(self_) {
return (ff_core_IntMap.IntMap_size(self_) === 0)
}

export function IntMap_each(self_, body_) {
if(false) {
const iterator_ = self_.entries();
let result_ = iterator_.next();
while((!result_.done)) {
const value_ = result_.value;
body_(value_[0], value_[1]);
result_ = iterator_.next()
}
} else {
self_.forEach(((v_, k_) => {
return body_(k_, v_)
}))
}
}

export function IntMap_eachWhile(self_, body_) {
ff_core_JsValue.JsValue_eachWhile(self_, ((value_) => {
return body_(value_[0], value_[1])
}))
}

export function IntMap_toArray(self_) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_, ((k_, v_) => {
array_.array.push(ff_core_Pair.Pair(k_, v_))
}));
return array_
}

export function IntMap_toList(self_) {
return ff_core_Array.Array_drain(ff_core_IntMap.IntMap_toArray(self_))
}

export function IntMap_toStream(self_) {
return ff_core_List.List_toStream(ff_core_IntMap.IntMap_toList(self_), false)
}

export function IntMap_toMap(self_) {
return ff_core_List.List_toMap(ff_core_IntMap.IntMap_toList(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}

export function IntMap_keys(self_) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_, ((k_, v_) => {
array_.array.push(k_)
}));
return ff_core_Array.Array_drain(array_)
}

export function IntMap_values(self_) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_, ((k_, v_) => {
array_.array.push(v_)
}));
return ff_core_Array.Array_drain(array_)
}

export function IntMap_copy(self_) {
return (new Map(self_))
}

export function IntMap_getOrSet(self_, key_, body_) {
if((!ff_core_IntMap.IntMap_has(self_, key_))) {
ff_core_IntMap.IntMap_set(self_, key_, body_())
};
return ff_core_IntMap.IntMap_grab(self_, key_)
}

export async function IntMap_get$(self_, key_, $task) {
const result_ = self_.get(key_);
if(((!ff_core_JsValue.JsValue_isUndefined(result_)) || self_.has(key_))) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export async function IntMap_grab$(self_, key_, $task) {
const result_ = self_.get(key_);
if((ff_core_JsValue.JsValue_isUndefined(result_) && (!ff_core_IntMap.IntMap_has(self_, key_)))) {
ff_core_Core.throw_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
return result_
}

export async function IntMap_set$(self_, key_, value_, $task) {
self_.set(key_, value_)
}

export async function IntMap_has$(self_, key_, $task) {
return self_.has(key_)
}

export async function IntMap_remove$(self_, key_, $task) {
return self_.delete(key_)
}

export async function IntMap_clear$(self_, $task) {
self_.clear()
}

export async function IntMap_size$(self_, $task) {
return self_.size
}

export async function IntMap_isEmpty$(self_, $task) {
return (ff_core_IntMap.IntMap_size(self_) === 0)
}

export async function IntMap_each$(self_, body_, $task) {
if(true) {
const iterator_ = self_.entries();
let result_ = iterator_.next();
while((!result_.done)) {
const value_ = result_.value;
(await body_(value_[0], value_[1], $task));
result_ = iterator_.next()
}
} else {
self_.forEach((async (a_1, a_2) => await (async (v_, k_, $task) => {
return (await body_(k_, v_, $task))
})(a_1, a_2, $task)))
}
}

export async function IntMap_eachWhile$(self_, body_, $task) {
(await ff_core_JsValue.JsValue_eachWhile$(self_, (async (value_, $task) => {
return (await body_(value_[0], value_[1], $task))
}), $task))
}

export async function IntMap_toArray$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_, ((k_, v_) => {
array_.array.push(ff_core_Pair.Pair(k_, v_))
}));
return array_
}

export async function IntMap_toList$(self_, $task) {
return ff_core_Array.Array_drain(ff_core_IntMap.IntMap_toArray(self_))
}

export async function IntMap_toStream$(self_, $task) {
return (await ff_core_List.List_toStream$(ff_core_IntMap.IntMap_toList(self_), false, $task))
}

export async function IntMap_toMap$(self_, $task) {
return ff_core_List.List_toMap(ff_core_IntMap.IntMap_toList(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}

export async function IntMap_keys$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_, ((k_, v_) => {
array_.array.push(k_)
}));
return ff_core_Array.Array_drain(array_)
}

export async function IntMap_values$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_IntMap.IntMap_each(self_, ((k_, v_) => {
array_.array.push(v_)
}));
return ff_core_Array.Array_drain(array_)
}

export async function IntMap_copy$(self_, $task) {
return (new Map(self_))
}

export async function IntMap_getOrSet$(self_, key_, body_, $task) {
if((!ff_core_IntMap.IntMap_has(self_, key_))) {
ff_core_IntMap.IntMap_set(self_, key_, (await body_($task)))
};
return ff_core_IntMap.IntMap_grab(self_, key_)
}

export function IntMap_push(self_, key_, value_) {
{
const _1 = ff_core_IntMap.IntMap_get(self_, key_);
if(_1.None) {
ff_core_IntMap.IntMap_set(self_, key_, ff_core_List.List_toArray([value_]))
return
}
{
const array_ = _1.value_;
array_.array.push(value_)
return
}
}
}

export async function IntMap_push$(self_, key_, value_, $task) {
{
const _1 = ff_core_IntMap.IntMap_get(self_, key_);
if(_1.None) {
ff_core_IntMap.IntMap_set(self_, key_, ff_core_List.List_toArray([value_]))
return
}
{
const array_ = _1.value_;
array_.array.push(value_)
return
}
}
}


