

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

import * as ff_core_RbMap from "../../ff/core/RbMap.mjs"

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

// newtype Map



export function new_() {
return ff_core_RbMap.E()
}

export async function new_$($task) {
return ff_core_RbMap.E()
}

export function Map_add(self_, key_, value_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.insert_(key_, value_, self_, ff_core_Ordering_Order$K)
}

export function Map_addAll(self_, that_, ff_core_Ordering_Order$K) {
let result_ = self_;
ff_core_RbMap.RB_each(that_, ((k_, v_) => {
result_ = ff_core_RbMap.insert_(k_, v_, result_, ff_core_Ordering_Order$K)
}), ff_core_Ordering_Order$K);
return result_
}

export function Map_addList(self_, that_, ff_core_Ordering_Order$K) {
let result_ = self_;
ff_core_List.List_each(that_, ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
result_ = ff_core_RbMap.insert_(k_, v_, result_, ff_core_Ordering_Order$K)
return
}
}));
return result_
}

export function Map_get(self_, key_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RB_get(self_, key_, ff_core_Ordering_Order$K)
}

export function Map_remove(self_, key_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.delete_(key_, self_, ff_core_Ordering_Order$K)
}

export function Map_removeAll(self_, that_, ff_core_Ordering_Order$K) {
let result_ = self_;
ff_core_RbMap.RB_each(that_, ((k_, _) => {
result_ = ff_core_RbMap.delete_(k_, result_, ff_core_Ordering_Order$K)
}), ff_core_Ordering_Order$K);
return result_
}

export function Map_removeList(self_, keys_, ff_core_Ordering_Order$K) {
let result_ = self_;
ff_core_List.List_each(keys_, ((k_) => {
result_ = ff_core_RbMap.delete_(k_, result_, ff_core_Ordering_Order$K)
}));
return result_
}

export function Map_pairs(self_, ff_core_Ordering_Order$K) {
return ff_core_Map.Map_toList(self_, ff_core_Ordering_Order$K)
}

export function Map_toList(self_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RB_pairs(self_, ff_core_Ordering_Order$K)
}

export function Map_toStream(self_, cycle_ = false, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RB_toStream(self_, cycle_, ff_core_Ordering_Order$K)
}

export function Map_keys(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_toSet(ff_core_List.List_map(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), ((_w1) => {
return _w1.first_
})), ff_core_Ordering_Order$K)
}

export function Map_values(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), ((_w1) => {
return _w1.second_
}))
}

export function Map_size(self_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RB_size(self_, ff_core_Ordering_Order$K)
}

export function Map_map(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K1) {
return ff_core_RbMap.RB_map(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K1)
}

export function Map_mapValues(self_, body_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RB_mapValues(self_, body_, ff_core_Ordering_Order$K)
}

export function Map_contains(self_, key_, ff_core_Ordering_Order$K) {
return (!ff_core_Option.Option_isEmpty(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K)))
}

export function Map_grab(self_, key_, ff_core_Ordering_Order$K) {
return ff_core_Option.Option_grab(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K))
}

export function Map_updateOrInsert(self_, key_, update_, default_, ff_core_Ordering_Order$K) {
{
const _1 = ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K);
if(_1.None) {
return ff_core_Map.Map_add(self_, key_, default_(), ff_core_Ordering_Order$K)
}
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Map.Map_add(self_, key_, update_(v_), ff_core_Ordering_Order$K)
}
}
}

export function Map_each(self_, body_, ff_core_Ordering_Order$K) {
ff_core_RbMap.RB_each(self_, body_, ff_core_Ordering_Order$K)
}

export function Map_eachWhile(self_, body_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RB_eachWhile(self_, body_, ff_core_Ordering_Order$K)
}

export function Map_find(self_, body_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RB_find(self_, body_, ff_core_Ordering_Order$K)
}

export async function Map_add$(self_, key_, value_, ff_core_Ordering_Order$K, $task) {
return ff_core_RbMap.insert_(key_, value_, self_, ff_core_Ordering_Order$K)
}

export async function Map_addAll$(self_, that_, ff_core_Ordering_Order$K, $task) {
let result_ = self_;
ff_core_RbMap.RB_each(that_, ((k_, v_) => {
result_ = ff_core_RbMap.insert_(k_, v_, result_, ff_core_Ordering_Order$K)
}), ff_core_Ordering_Order$K);
return result_
}

export async function Map_addList$(self_, that_, ff_core_Ordering_Order$K, $task) {
let result_ = self_;
ff_core_List.List_each(that_, ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
result_ = ff_core_RbMap.insert_(k_, v_, result_, ff_core_Ordering_Order$K)
return
}
}));
return result_
}

export async function Map_get$(self_, key_, ff_core_Ordering_Order$K, $task) {
return ff_core_RbMap.RB_get(self_, key_, ff_core_Ordering_Order$K)
}

export async function Map_remove$(self_, key_, ff_core_Ordering_Order$K, $task) {
return ff_core_RbMap.delete_(key_, self_, ff_core_Ordering_Order$K)
}

export async function Map_removeAll$(self_, that_, ff_core_Ordering_Order$K, $task) {
let result_ = self_;
ff_core_RbMap.RB_each(that_, ((k_, _) => {
result_ = ff_core_RbMap.delete_(k_, result_, ff_core_Ordering_Order$K)
}), ff_core_Ordering_Order$K);
return result_
}

export async function Map_removeList$(self_, keys_, ff_core_Ordering_Order$K, $task) {
let result_ = self_;
ff_core_List.List_each(keys_, ((k_) => {
result_ = ff_core_RbMap.delete_(k_, result_, ff_core_Ordering_Order$K)
}));
return result_
}

export async function Map_pairs$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_Map.Map_toList(self_, ff_core_Ordering_Order$K)
}

export async function Map_toList$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_RbMap.RB_pairs(self_, ff_core_Ordering_Order$K)
}

export async function Map_toStream$(self_, cycle_ = false, ff_core_Ordering_Order$K, $task) {
return (await ff_core_RbMap.RB_toStream$(self_, cycle_, ff_core_Ordering_Order$K, $task))
}

export async function Map_keys$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_List.List_toSet(ff_core_List.List_map(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), ((_w1) => {
return _w1.first_
})), ff_core_Ordering_Order$K)
}

export async function Map_values$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), ((_w1) => {
return _w1.second_
}))
}

export async function Map_size$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_RbMap.RB_size(self_, ff_core_Ordering_Order$K)
}

export async function Map_map$(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K1, $task) {
return (await ff_core_RbMap.RB_map$(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K1, $task))
}

export async function Map_mapValues$(self_, body_, ff_core_Ordering_Order$K, $task) {
return (await ff_core_RbMap.RB_mapValues$(self_, body_, ff_core_Ordering_Order$K, $task))
}

export async function Map_contains$(self_, key_, ff_core_Ordering_Order$K, $task) {
return (!ff_core_Option.Option_isEmpty(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K)))
}

export async function Map_grab$(self_, key_, ff_core_Ordering_Order$K, $task) {
return ff_core_Option.Option_grab(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K))
}

export async function Map_updateOrInsert$(self_, key_, update_, default_, ff_core_Ordering_Order$K, $task) {
{
const _1 = ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K);
if(_1.None) {
return ff_core_Map.Map_add(self_, key_, (await default_($task)), ff_core_Ordering_Order$K)
}
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Map.Map_add(self_, key_, (await update_(v_, $task)), ff_core_Ordering_Order$K)
}
}
}

export async function Map_each$(self_, body_, ff_core_Ordering_Order$K, $task) {
(await ff_core_RbMap.RB_each$(self_, body_, ff_core_Ordering_Order$K, $task))
}

export async function Map_eachWhile$(self_, body_, ff_core_Ordering_Order$K, $task) {
return (await ff_core_RbMap.RB_eachWhile$(self_, body_, ff_core_Ordering_Order$K, $task))
}

export async function Map_find$(self_, body_, ff_core_Ordering_Order$K, $task) {
return (await ff_core_RbMap.RB_find$(self_, body_, ff_core_Ordering_Order$K, $task))
}

export function Map_addToList(self_, key_, value_, ff_core_Ordering_Order$K) {
return ff_core_Map.Map_updateOrInsert(self_, key_, ((_w1) => {
return [value_, ..._w1]
}), (() => {
return [value_]
}), ff_core_Ordering_Order$K)
}

export async function Map_addToList$(self_, key_, value_, ff_core_Ordering_Order$K, $task) {
return ff_core_Map.Map_updateOrInsert(self_, key_, ((_w1) => {
return [value_, ..._w1]
}), (() => {
return [value_]
}), ff_core_Ordering_Order$K)
}

export function Map_push(self_, key_, value_, ff_core_Ordering_Order$K) {
{
const _1 = ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K);
if(_1.None) {
return ff_core_Map.Map_add(self_, key_, ff_core_List.List_toArray([value_]), ff_core_Ordering_Order$K)
}
if(_1.Some) {
const array_ = _1.value_;
ff_core_Array.Array_push(array_, value_);
return self_
}
}
}

export async function Map_push$(self_, key_, value_, ff_core_Ordering_Order$K, $task) {
{
const _1 = ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K);
if(_1.None) {
return ff_core_Map.Map_add(self_, key_, ff_core_List.List_toArray([value_]), ff_core_Ordering_Order$K)
}
if(_1.Some) {
const array_ = _1.value_;
ff_core_Array.Array_push(array_, value_);
return self_
}
}
}

export function ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal_Equal$K, ff_core_Ordering_Order$K, ff_core_Equal_Equal$V) { return {
equals_(x_, y_) {
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal_Equal$K, ff_core_Equal_Equal$V)).equals_(ff_core_Map.Map_pairs(x_, ff_core_Ordering_Order$K), ff_core_Map.Map_pairs(y_, ff_core_Ordering_Order$K))
},
async equals_$(x_, y_, $task) {
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal_Equal$K, ff_core_Equal_Equal$V)).equals_(ff_core_Map.Map_pairs(x_, ff_core_Ordering_Order$K), ff_core_Map.Map_pairs(y_, ff_core_Ordering_Order$K))
}
}}

export function ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering_Order$K, ff_core_Ordering_Order$V) { return {
compare_(x_, y_) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering_Order$K, ff_core_Ordering_Order$V)).compare_(ff_core_Map.Map_pairs(x_, ff_core_Ordering_Order$K), ff_core_Map.Map_pairs(y_, ff_core_Ordering_Order$K))
},
async compare_$(x_, y_, $task) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering_Order$K, ff_core_Ordering_Order$V)).compare_(ff_core_Map.Map_pairs(x_, ff_core_Ordering_Order$K), ff_core_Map.Map_pairs(y_, ff_core_Ordering_Order$K))
}
}}

export function ff_core_Show_Show$ff_core_Map_Map(ff_core_Show_Show$K, ff_core_Ordering_Order$K, ff_core_Show_Show$V) { return {
show_(value_) {
return (ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show_Show$K, ff_core_Show_Show$V)).show_(ff_core_Map.Map_pairs(value_, ff_core_Ordering_Order$K)) + ".toMap()")
},
async show_$(value_, $task) {
return (ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show_Show$K, ff_core_Show_Show$V)).show_(ff_core_Map.Map_pairs(value_, ff_core_Ordering_Order$K)) + ".toMap()")
}
}}


