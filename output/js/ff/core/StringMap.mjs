

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Box from "../../ff/core/Box.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type StringMap




export function make_() {
return new Map()
}

export async function make_$($task) {
throw new Error('Function make is missing on this target in async context.');
}

export function StringMap_get(self_, key_) {
return self_.has(key_) ? ff_core_Option.Some(self_.get(key_)) : ff_core_Option.None()
}

export function StringMap_grab(self_, key_) {

            const result = self_.get(key_)
            if(key_ === void 0 && !self_.has(key_)) {
                ff_core_Try.internalThrowGrabException_()
            }
            return result
        
}

export function StringMap_set(self_, key_, value_) {
self_.set(key_, value_)
}

export function StringMap_has(self_, key_) {
return self_.has(key_)
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
return self_.forEach((v, k) => body_(k, v))
}

export function StringMap_eachWhile(self_, body_) {
for(const [k, v] of self_) if(!body_(k, v)) break
}

export function StringMap_toStack(self_) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, ff_core_Pair.Pair(k_, v_))
}));
return stack_
}

export function StringMap_toArray(self_) {
return ff_core_Stack.Stack_drain(ff_core_StringMap.StringMap_toStack(self_))
}

export function StringMap_toList(self_) {
return ff_core_Array.Array_toList(ff_core_StringMap.StringMap_toArray(self_))
}

export function StringMap_toStream(self_) {
return ff_core_Array.Array_toStream(ff_core_StringMap.StringMap_toArray(self_), false)
}

export function StringMap_toMap(self_) {
return ff_core_Array.Array_toMap(ff_core_StringMap.StringMap_toArray(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function StringMap_keys(self_) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, k_)
}));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}

export function StringMap_values(self_) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, v_)
}));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}

export function StringMap_copy(self_) {
return new Map(self_)
}

export function StringMap_getOrSet(self_, key_, body_) {
if((!ff_core_StringMap.StringMap_has(self_, key_))) {
ff_core_StringMap.StringMap_set(self_, key_, body_())
};
return ff_core_StringMap.StringMap_grab(self_, key_)
}

export async function StringMap_get$(self_, key_, $task) {
throw new Error('Function StringMap_get is missing on this target in async context.');
}

export async function StringMap_grab$(self_, key_, $task) {
throw new Error('Function StringMap_grab is missing on this target in async context.');
}

export async function StringMap_set$(self_, key_, value_, $task) {
throw new Error('Function StringMap_set is missing on this target in async context.');
}

export async function StringMap_has$(self_, key_, $task) {
throw new Error('Function StringMap_has is missing on this target in async context.');
}

export async function StringMap_remove$(self_, key_, $task) {
throw new Error('Function StringMap_remove is missing on this target in async context.');
}

export async function StringMap_clear$(self_, $task) {
throw new Error('Function StringMap_clear is missing on this target in async context.');
}

export async function StringMap_size$(self_, $task) {
throw new Error('Function StringMap_size is missing on this target in async context.');
}

export async function StringMap_each$(self_, body_, $task) {
for(const [k, v] of self_) await body_(k, v)
}

export async function StringMap_eachWhile$(self_, body_, $task) {
for(const [k, v] of self_) if(!await body_(k, v)) break
}

export async function StringMap_toStack$(self_, $task) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, ff_core_Pair.Pair(k_, v_))
}));
return stack_
}

export async function StringMap_toArray$(self_, $task) {
return ff_core_Stack.Stack_drain(ff_core_StringMap.StringMap_toStack(self_))
}

export async function StringMap_toList$(self_, $task) {
return ff_core_Array.Array_toList(ff_core_StringMap.StringMap_toArray(self_))
}

export async function StringMap_toStream$(self_, $task) {
return (await ff_core_Array.Array_toStream$(ff_core_StringMap.StringMap_toArray(self_), false, $task))
}

export async function StringMap_toMap$(self_, $task) {
return ff_core_Array.Array_toMap(ff_core_StringMap.StringMap_toArray(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function StringMap_keys$(self_, $task) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, k_)
}));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}

export async function StringMap_values$(self_, $task) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, v_)
}));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}

export async function StringMap_copy$(self_, $task) {
throw new Error('Function StringMap_copy is missing on this target in async context.');
}

export async function StringMap_getOrSet$(self_, key_, body_, $task) {
if((!ff_core_StringMap.StringMap_has(self_, key_))) {
ff_core_StringMap.StringMap_set(self_, key_, (await body_($task)))
};
return ff_core_StringMap.StringMap_grab(self_, key_)
}




