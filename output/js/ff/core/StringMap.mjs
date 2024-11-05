

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

// type StringMap




export function new_() {
const js_ = globalThis;
return (new Map())
}

export async function new_$($task) {
const js_ = globalThis;
return (new Map())
}

export function StringMap_get(self_, key_) {
const result_ = self_.get(key_);
if(((!ff_core_JsValue.JsValue_isUndefined(result_)) || self_.has(key_))) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export function StringMap_grab(self_, key_) {
const result_ = self_.get(key_);
if((ff_core_JsValue.JsValue_isUndefined(result_) && (!ff_core_StringMap.StringMap_has(self_, key_)))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
return result_
}

export function StringMap_set(self_, key_, value_) {
self_.set(key_, value_)
}

export function StringMap_has(self_, key_) {
return (!self_.has(key_))
}

export function StringMap_remove(self_, key_) {
return self_.delete(key_)
}

export function StringMap_clear(self_) {
self_.clear()
}

export function StringMap_size(self_) {
return self_.size
}

export function StringMap_each(self_, body_) {
if(false) {
const iterator_ = self_.entries();
let result_ = iterator_.next();
while((!result_.done)) {
const value_ = result_.value;
body_(value_[0], value_[1]);
result_ = iterator_.next()
}
} else {
const js_ = globalThis;
self_.forEach(ff_core_JsSystem.JsSystem_function2(js_, ((v_, k_) => {
return body_(k_, v_)
})))
}
}

export function StringMap_eachWhile(self_, body_) {
for(const [k, v] of self_) if(!body_(k, v)) break
}

export function StringMap_toArray(self_) {
const array_ = ff_core_Array.new_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
array_.array.push(ff_core_Pair.Pair(k_, v_))
}));
return array_
}

export function StringMap_toList(self_) {
return ff_core_Array.Array_drain(ff_core_StringMap.StringMap_toArray(self_))
}

export function StringMap_toStream(self_) {
return ff_core_List.List_toStream(ff_core_StringMap.StringMap_toList(self_), false)
}

export function StringMap_toMap(self_) {
return ff_core_List.List_toMap(ff_core_StringMap.StringMap_toList(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function StringMap_keys(self_) {
const array_ = ff_core_Array.new_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
array_.array.push(k_)
}));
return ff_core_Array.Array_toList(array_, 0, 9007199254740991)
}

export function StringMap_values(self_) {
const array_ = ff_core_Array.new_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
array_.array.push(v_)
}));
return ff_core_Array.Array_toList(array_, 0, 9007199254740991)
}

export function StringMap_copy(self_) {
const js_ = globalThis;
return (new Map(self_))
}

export function StringMap_getOrSet(self_, key_, body_) {
if((!ff_core_StringMap.StringMap_has(self_, key_))) {
ff_core_StringMap.StringMap_set(self_, key_, body_())
};
return ff_core_StringMap.StringMap_grab(self_, key_)
}

export async function StringMap_get$(self_, key_, $task) {
const result_ = self_.get(key_);
if(((!ff_core_JsValue.JsValue_isUndefined(result_)) || self_.has(key_))) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export async function StringMap_grab$(self_, key_, $task) {
const result_ = self_.get(key_);
if((ff_core_JsValue.JsValue_isUndefined(result_) && (!ff_core_StringMap.StringMap_has(self_, key_)))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
return result_
}

export async function StringMap_set$(self_, key_, value_, $task) {
self_.set(key_, value_)
}

export async function StringMap_has$(self_, key_, $task) {
return (!self_.has(key_))
}

export async function StringMap_remove$(self_, key_, $task) {
return self_.delete(key_)
}

export async function StringMap_clear$(self_, $task) {
self_.clear()
}

export async function StringMap_size$(self_, $task) {
return self_.size
}

export async function StringMap_each$(self_, body_, $task) {
if(true) {
const iterator_ = self_.entries();
let result_ = iterator_.next();
while((!result_.done)) {
const value_ = result_.value;
(await body_(value_[0], value_[1], $task));
result_ = iterator_.next()
}
} else {
const js_ = globalThis;
self_.forEach((await ff_core_JsSystem.JsSystem_function2$(js_, (async (v_, k_, $task) => {
return (await body_(k_, v_, $task))
}), $task)))
}
}

export async function StringMap_eachWhile$(self_, body_, $task) {
for(const [k, v] of self_) if(!await body_(k, v)) break
}

export async function StringMap_toArray$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
array_.array.push(ff_core_Pair.Pair(k_, v_))
}));
return array_
}

export async function StringMap_toList$(self_, $task) {
return ff_core_Array.Array_drain(ff_core_StringMap.StringMap_toArray(self_))
}

export async function StringMap_toStream$(self_, $task) {
return (await ff_core_List.List_toStream$(ff_core_StringMap.StringMap_toList(self_), false, $task))
}

export async function StringMap_toMap$(self_, $task) {
return ff_core_List.List_toMap(ff_core_StringMap.StringMap_toList(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function StringMap_keys$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
array_.array.push(k_)
}));
return ff_core_Array.Array_toList(array_, 0, 9007199254740991)
}

export async function StringMap_values$(self_, $task) {
const array_ = ff_core_Array.new_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
array_.array.push(v_)
}));
return ff_core_Array.Array_toList(array_, 0, 9007199254740991)
}

export async function StringMap_copy$(self_, $task) {
const js_ = globalThis;
return (new Map(self_))
}

export async function StringMap_getOrSet$(self_, key_, body_, $task) {
if((!ff_core_StringMap.StringMap_has(self_, key_))) {
ff_core_StringMap.StringMap_set(self_, key_, (await body_($task)))
};
return ff_core_StringMap.StringMap_grab(self_, key_)
}

export function StringMap_push(self_, key_, value_) {
{
const _1 = ff_core_StringMap.StringMap_get(self_, key_);
if(_1.None) {
ff_core_StringMap.StringMap_set(self_, key_, ff_core_List.List_toArray([value_]))
return
}
if(_1.Some) {
const array_ = _1.value_;
array_.array.push(value_)
return
}
}
}

export async function StringMap_push$(self_, key_, value_, $task) {
{
const _1 = ff_core_StringMap.StringMap_get(self_, key_);
if(_1.None) {
ff_core_StringMap.StringMap_set(self_, key_, ff_core_List.List_toArray([value_]))
return
}
if(_1.Some) {
const array_ = _1.value_;
array_.array.push(value_)
return
}
}
}




