import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// newtype Set



export function empty_() {
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




