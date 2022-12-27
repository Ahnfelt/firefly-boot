

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_Table from "../../ff/core/Table.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// newtype Set



export function empty_() {
return ff_core_Map.empty_()
}

export async function empty_$($c) {
return ff_core_Map.empty_()
}

export function Set_add(self_, value_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_add(self_, value_, (void 0), ff_core_Ordering_Order$T)
}

export function Set_addAll(self_, that_, ff_core_Ordering_Order$T) {
return ff_core_Map.Map_addAll(self_, that_, ff_core_Ordering_Order$T)
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
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$T), ((_w1) => {
return _w1.first_
}))
}

export function Set_toStream(self_, ff_core_Ordering_Order$T) {
return ff_core_Stream.Stream_map(ff_core_Map.Map_toStream(self_, ff_core_Ordering_Order$T), ((_w1) => {
return _w1.first_
}))
}

export function Set_each(self_, body_, ff_core_Ordering_Order$T) {
ff_core_Map.Map_each(self_, ((k_, _) => {
body_(k_)
}), ff_core_Ordering_Order$T)
}

export async function Set_add$(self_, value_, ff_core_Ordering_Order$T, $c) {
return ff_core_Map.Map_add(self_, value_, (void 0), ff_core_Ordering_Order$T)
}

export async function Set_addAll$(self_, that_, ff_core_Ordering_Order$T, $c) {
return ff_core_Map.Map_addAll(self_, that_, ff_core_Ordering_Order$T)
}

export async function Set_remove$(self_, value_, ff_core_Ordering_Order$T, $c) {
return ff_core_Map.Map_remove(self_, value_, ff_core_Ordering_Order$T)
}

export async function Set_removeAll$(self_, that_, ff_core_Ordering_Order$T, $c) {
return ff_core_Map.Map_removeAll(self_, that_, ff_core_Ordering_Order$T)
}

export async function Set_contains$(self_, value_, ff_core_Ordering_Order$T, $c) {
return ff_core_Map.Map_contains(self_, value_, ff_core_Ordering_Order$T)
}

export async function Set_size$(self_, ff_core_Ordering_Order$T, $c) {
return ff_core_Map.Map_size(self_, ff_core_Ordering_Order$T)
}

export async function Set_toList$(self_, ff_core_Ordering_Order$T, $c) {
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$T), ((_w1) => {
return _w1.first_
}))
}

export async function Set_toStream$(self_, ff_core_Ordering_Order$T, $c) {
return (await ff_core_Stream.Stream_map$((await ff_core_Map.Map_toStream$(self_, $c, ff_core_Ordering_Order$T)), (async (_w1, $c) => {
return _w1.first_
}), $c))
}

export async function Set_each$(self_, body_, ff_core_Ordering_Order$T, $c) {
(await ff_core_Map.Map_each$(self_, (async (k_, _, $c) => {
(await body_(k_, $c))
}), $c, ff_core_Ordering_Order$T))
}

export function ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal_Equal$A, ff_core_Ordering_Order$A) { return {
equals_(x_, y_) {
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$A).equals_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
},
async equals_$(x_, y_, $c) {
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$A).equals_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
}
}}

export function ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering_Order$A) { return {
compare_(x_, y_) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$A).compare_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
},
async compare_$(x_, y_, $c) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$A).compare_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A), ff_core_Set.Set_toList(y_, ff_core_Ordering_Order$A))
}
}}

export function ff_core_Show_Show$ff_core_Set_Set(ff_core_Show_Show$A, ff_core_Ordering_Order$A) { return {
show_(x_) {
return (ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$A).show_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A)) + ".toSet()")
},
async show_$(x_, $c) {
return (ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$A).show_(ff_core_Set.Set_toList(x_, ff_core_Ordering_Order$A)) + ".toSet()")
}
}}


