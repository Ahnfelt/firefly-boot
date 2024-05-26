

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

// newtype Set



export function new_() {
return ff_core_Map.new_()
}

export async function new_$($task) {
return ff_core_Map.new_()
}

export function Set_add(self_, value_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_add(self_, value_, (void 0), ff_core_Ordering_Order$T)
}

export function Set_addAll(self_, that_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_addAll(self_, that_, ff_core_Ordering_Order$T)
}

export function Set_addList(self_, that_, ff_core_Ordering_Order$T) {
let result_ = self_;
ff_core_List.List_each(that_, ((k_) => {
result_ = ff_core_Map.Map_add(result_, k_, (void 0), ff_core_Ordering_Order$T)
}));
return result_
}

export function Set_remove(self_, value_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_remove(self_, value_, ff_core_Ordering_Order$T)
}

export function Set_removeAll(self_, that_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_removeAll(self_, that_, ff_core_Ordering_Order$T)
}

export function Set_contains(self_, value_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_contains(self_, value_, ff_core_Ordering_Order$T)
}

export function Set_size(self_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_size(self_, ff_core_Ordering_Order$T)
}

export function Set_toList(self_, ff_core_Ordering_Order$T) {
return ff_core_List.List_map(ff_core_Map.Map_toList(self_, ff_core_Ordering_Order$T), ((_w1) => {
return _w1.first_
}))
}

export function Set_toStream(self_, cycle_ = false, ff_core_Ordering_Order$T) {
return ff_core_Stream.Stream_map(ff_core_Map.Map_toStream(self_, cycle_, ff_core_Ordering_Order$T), ((_w1) => {
return _w1.first_
}))
}

export function Set_each(self_, body_, ff_core_Ordering_Order$T) {
ff_core_Map.Map_each(self_, ((k_, _) => {
body_(k_)
}), ff_core_Ordering_Order$T)
}

export function Set_eachWhile(self_, body_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_eachWhile(self_, ((k_, _) => {
return body_(k_)
}), ff_core_Ordering_Order$T)
}

export function Set_find(self_, body_, ff_core_Ordering_Order$T) {
return ff_core_Option.Option_map(ff_core_Map.Map_find(self_, ((k_, _) => {
return body_(k_)
}), ff_core_Ordering_Order$T), ((_w1) => {
return _w1.first_
}))
}

export async function Set_add$(self_, value_, ff_core_Ordering_Order$T, $task) {
return ff_core_Map.Map_add(self_, value_, (void 0), ff_core_Ordering_Order$T)
}

export async function Set_addAll$(self_, that_, ff_core_Ordering_Order$T, $task) {
return ff_core_Map.Map_addAll(self_, that_, ff_core_Ordering_Order$T)
}

export async function Set_addList$(self_, that_, ff_core_Ordering_Order$T, $task) {
let result_ = self_;
ff_core_List.List_each(that_, ((k_) => {
result_ = ff_core_Map.Map_add(result_, k_, (void 0), ff_core_Ordering_Order$T)
}));
return result_
}

export async function Set_remove$(self_, value_, ff_core_Ordering_Order$T, $task) {
return ff_core_Map.Map_remove(self_, value_, ff_core_Ordering_Order$T)
}

export async function Set_removeAll$(self_, that_, ff_core_Ordering_Order$T, $task) {
return ff_core_Map.Map_removeAll(self_, that_, ff_core_Ordering_Order$T)
}

export async function Set_contains$(self_, value_, ff_core_Ordering_Order$T, $task) {
return ff_core_Map.Map_contains(self_, value_, ff_core_Ordering_Order$T)
}

export async function Set_size$(self_, ff_core_Ordering_Order$T, $task) {
return ff_core_Map.Map_size(self_, ff_core_Ordering_Order$T)
}

export async function Set_toList$(self_, ff_core_Ordering_Order$T, $task) {
return ff_core_List.List_map(ff_core_Map.Map_toList(self_, ff_core_Ordering_Order$T), ((_w1) => {
return _w1.first_
}))
}

export async function Set_toStream$(self_, cycle_ = false, ff_core_Ordering_Order$T, $task) {
return (await ff_core_Stream.Stream_map$((await ff_core_Map.Map_toStream$(self_, cycle_, ff_core_Ordering_Order$T, $task)), (async (_w1, $task) => {
return _w1.first_
}), $task))
}

export async function Set_each$(self_, body_, ff_core_Ordering_Order$T, $task) {
(await ff_core_Map.Map_each$(self_, (async (k_, _, $task) => {
(await body_(k_, $task))
}), ff_core_Ordering_Order$T, $task))
}

export async function Set_eachWhile$(self_, body_, ff_core_Ordering_Order$T, $task) {
return (await ff_core_Map.Map_eachWhile$(self_, (async (k_, _, $task) => {
return (await body_(k_, $task))
}), ff_core_Ordering_Order$T, $task))
}

export async function Set_find$(self_, body_, ff_core_Ordering_Order$T, $task) {
return ff_core_Option.Option_map((await ff_core_Map.Map_find$(self_, (async (k_, _, $task) => {
return (await body_(k_, $task))
}), ff_core_Ordering_Order$T, $task)), ((_w1) => {
return _w1.first_
}))
}

export function ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal_Equal$A, ff_core_Ordering_Order$A) { return {
equals_(x_, y_) {
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$A).equals_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
},
async equals_$(x_, y_, $task) {
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$A).equals_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
}
}}

export function ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering_Order$A) { return {
compare_(x_, y_) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$A).compare_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
},
async compare_$(x_, y_, $task) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$A).compare_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
}
}}

export function ff_core_Show_Show$ff_core_Set_Set(ff_core_Show_Show$A, ff_core_Ordering_Order$A) { return {
show_(value_) {
return (ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$A).show_(ff_core_Set.Set_toList(value_, ff_core_Ordering_Order$A)) + ".toSet()")
},
async show_$(value_, $task) {
return (ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$A).show_(ff_core_Set.Set_toList(value_, ff_core_Ordering_Order$A)) + ".toSet()")
}
}}


