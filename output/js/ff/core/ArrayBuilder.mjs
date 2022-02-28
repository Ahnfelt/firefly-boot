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

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type ArrayBuilder




export function empty_() {
return {array: []}
}

export async function empty_$($signal) {
return ff_core_Core.panic_("magic")
}

export function ArrayBuilder_toArray(self_) {
return self_.array.slice()
}

export function ArrayBuilder_isEmpty(self_) {
return self_.array.length === 0
}

export function ArrayBuilder_size(self_) {
return self_.array.length
}

export function ArrayBuilder_add(self_, value_) {
self_.array.push(value_)
}

export function ArrayBuilder_modify(self_, index_, body_) {
self_.array[index_] = body_(self_.array[index_])
}

export function ArrayBuilder_drain(self_) {
const result = self_.array; self_.array = []; return result
}

export function ArrayBuilder_toList(self_) {

            let result = ff_core_List.Empty();
            for(let i = self_.array.length - 1; i >= 0; i--) {
                result = ff_core_List.Link(self_.array[i], result);
            }
            return result;
        
}

export function ArrayBuilder_last(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array[self_.array.length - 1])
                : ff_core_Option.None()
        
}

export function ArrayBuilder_expectLast(self_) {
return self_.array[self_.array.length - 1]
}

export function ArrayBuilder_sortBy(self_, ordering_) {
self_.array.sort((x, y) => ff_core_Ordering.Ordering_toInt(ordering_(x, y)))
}

export async function ArrayBuilder_toArray$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_isEmpty$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_size$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_add$(self_, value_, $signal) {
ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_modify$(self_, index_, body_, $signal) {
self_.array[index_] = await body_(self_.array[index_], $signal)
}

export async function ArrayBuilder_drain$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_toList$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_last$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_expectLast$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function ArrayBuilder_sortBy$(self_, ordering_, $signal) {
ff_core_Core.panic_("magic")
}




