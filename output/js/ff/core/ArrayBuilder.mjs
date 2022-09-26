

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

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

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type ArrayBuilder




export function empty_() {
return {array: []}
}

export async function empty_$($c) {
throw new Error('Function empty is missing on this target in async context.');
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

export async function ArrayBuilder_toArray$(self_, $c) {
throw new Error('Function ArrayBuilder_toArray is missing on this target in async context.');
}

export async function ArrayBuilder_isEmpty$(self_, $c) {
throw new Error('Function ArrayBuilder_isEmpty is missing on this target in async context.');
}

export async function ArrayBuilder_size$(self_, $c) {
throw new Error('Function ArrayBuilder_size is missing on this target in async context.');
}

export async function ArrayBuilder_add$(self_, value_, $c) {
throw new Error('Function ArrayBuilder_add is missing on this target in async context.');
}

export async function ArrayBuilder_modify$(self_, index_, body_, $c) {
self_.array[index_] = await body_(self_.array[index_], $c)
}

export async function ArrayBuilder_drain$(self_, $c) {
throw new Error('Function ArrayBuilder_drain is missing on this target in async context.');
}

export async function ArrayBuilder_toList$(self_, $c) {
throw new Error('Function ArrayBuilder_toList is missing on this target in async context.');
}

export async function ArrayBuilder_last$(self_, $c) {
throw new Error('Function ArrayBuilder_last is missing on this target in async context.');
}

export async function ArrayBuilder_expectLast$(self_, $c) {
throw new Error('Function ArrayBuilder_expectLast is missing on this target in async context.');
}

export async function ArrayBuilder_sortBy$(self_, ordering_, $c) {
throw new Error('Function ArrayBuilder_sortBy is missing on this target in async context.');
}




