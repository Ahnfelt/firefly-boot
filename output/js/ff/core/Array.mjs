

import * as ff_core_Array from "../../ff/core/Array.mjs"

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

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

import * as ff_core_Vector from "../../ff/core/Vector.mjs"

// type Array




export function empty_() {
return {array: []}
}

export async function empty_$($c) {
throw new Error('Function empty is missing on this target in async context.');
}

export function Array_isEmpty(self_) {
return self_.array.length === 0
}

export function Array_size(self_) {
return self_.array.length
}

export function Array_expect(self_, index_) {

            if(index_ < 0 || index_ >= self_.array.length) {
                throw new Error('Index ' + index_ + ' is out of bounds in an vector of size ' + self_.array.length)
            }
            return self_.array[index_]
        
}

export function Array_expectFirst(self_) {
return ff_core_Array.Array_expect(self_, 0)
}

export function Array_expectLast(self_) {
return ff_core_Array.Array_expect(self_, (ff_core_Array.Array_size(self_) - 1))
}

export function Array_first(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array[0])
                : ff_core_Option.None()
        
}

export function Array_last(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array[self_.array.length - 1])
                : ff_core_Option.None()
        
}

export function Array_push(self_, value_) {
self_.array.push(value_)
}

export function Array_pushAll(self_, value_) {
self_.array.push(...value_.array)
}

export function Array_pushVector(self_, value_) {
self_.array.push(...value_)
}

export function Array_pop(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array.pop())
                : ff_core_Option.None()
        
}

export function Array_set(self_, index_, value_) {
self_.array[index_] = body_(self_.array[index_])
}

export function Array_modify(self_, index_, body_) {
self_.array[index_] = body_(self_.array[index_])
}

export function Array_each(self_, body_) {

            return self_.array.forEach(body_);
        
}

export function Array_drain(self_) {
const result = self_.array; self_.array = []; return result
}

export function Array_toVector(self_) {
return self_.array.slice()
}

export function Array_toList(self_) {

            let result = ff_core_List.Empty();
            for(let i = self_.array.length - 1; i >= 0; i--) {
                result = ff_core_List.Link(self_.array[i], result);
            }
            return result;
        
}

export function Array_sortBy(self_, ordering_) {
self_.array.sort((x, y) => ff_core_Ordering.Ordering_toInt(ordering_(x, y)))
}

export async function Array_isEmpty$(self_, $c) {
throw new Error('Function Array_isEmpty is missing on this target in async context.');
}

export async function Array_size$(self_, $c) {
throw new Error('Function Array_size is missing on this target in async context.');
}

export async function Array_expect$(self_, index_, $c) {
throw new Error('Function Array_expect is missing on this target in async context.');
}

export async function Array_expectFirst$(self_, $c) {
return ff_core_Array.Array_expect(self_, 0)
}

export async function Array_expectLast$(self_, $c) {
return ff_core_Array.Array_expect(self_, (ff_core_Array.Array_size(self_) - 1))
}

export async function Array_first$(self_, $c) {
throw new Error('Function Array_first is missing on this target in async context.');
}

export async function Array_last$(self_, $c) {
throw new Error('Function Array_last is missing on this target in async context.');
}

export async function Array_push$(self_, value_, $c) {
throw new Error('Function Array_push is missing on this target in async context.');
}

export async function Array_pushAll$(self_, value_, $c) {
throw new Error('Function Array_pushAll is missing on this target in async context.');
}

export async function Array_pushVector$(self_, value_, $c) {
throw new Error('Function Array_pushVector is missing on this target in async context.');
}

export async function Array_pop$(self_, $c) {
throw new Error('Function Array_pop is missing on this target in async context.');
}

export async function Array_set$(self_, index_, value_, $c) {
throw new Error('Function Array_set is missing on this target in async context.');
}

export async function Array_modify$(self_, index_, body_, $c) {
self_.array[index_] = await body_(self_.array[index_], $c)
}

export async function Array_each$(self_, body_, $c) {

            for(let i = 0; i < self_.array.length; i++) {
                await body_(self_.array[i], $c)
            }
        
}

export async function Array_drain$(self_, $c) {
throw new Error('Function Array_drain is missing on this target in async context.');
}

export async function Array_toVector$(self_, $c) {
throw new Error('Function Array_toVector is missing on this target in async context.');
}

export async function Array_toList$(self_, $c) {
throw new Error('Function Array_toList is missing on this target in async context.');
}

export async function Array_sortBy$(self_, ordering_, $c) {
throw new Error('Function Array_sortBy is missing on this target in async context.');
}




