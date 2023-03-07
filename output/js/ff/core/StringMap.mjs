

import * as ff_core_Any from "../../ff/core/Any.mjs"

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

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type StringMap




export function make_() {
return new Map()
}

export async function make_$($c) {
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

export async function StringMap_get$(self_, key_, $c) {
throw new Error('Function StringMap_get is missing on this target in async context.');
}

export async function StringMap_grab$(self_, key_, $c) {
throw new Error('Function StringMap_grab is missing on this target in async context.');
}

export async function StringMap_set$(self_, key_, value_, $c) {
throw new Error('Function StringMap_set is missing on this target in async context.');
}

export async function StringMap_has$(self_, key_, $c) {
throw new Error('Function StringMap_has is missing on this target in async context.');
}

export async function StringMap_remove$(self_, key_, $c) {
throw new Error('Function StringMap_remove is missing on this target in async context.');
}

export async function StringMap_clear$(self_, $c) {
throw new Error('Function StringMap_clear is missing on this target in async context.');
}

export async function StringMap_size$(self_, $c) {
throw new Error('Function StringMap_size is missing on this target in async context.');
}

export async function StringMap_each$(self_, body_, $c) {
for(const [k, v] of self_) await body_(k, v)
}

export async function StringMap_eachWhile$(self_, body_, $c) {
for(const [k, v] of self_) if(!await body_(k, v)) break
}

export async function StringMap_toStack$(self_, $c) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, ff_core_Pair.Pair(k_, v_))
}));
return stack_
}

export async function StringMap_toArray$(self_, $c) {
return ff_core_Stack.Stack_drain(ff_core_StringMap.StringMap_toStack(self_))
}

export async function StringMap_toList$(self_, $c) {
return ff_core_Array.Array_toList(ff_core_StringMap.StringMap_toArray(self_))
}

export async function StringMap_toStream$(self_, $c) {
return (await ff_core_Array.Array_toStream$(ff_core_StringMap.StringMap_toArray(self_), false, $c))
}

export async function StringMap_toMap$(self_, $c) {
return ff_core_Array.Array_toMap(ff_core_StringMap.StringMap_toArray(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function StringMap_keys$(self_, $c) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, k_)
}));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}

export async function StringMap_values$(self_, $c) {
const stack_ = ff_core_Stack.make_();
ff_core_StringMap.StringMap_each(self_, ((k_, v_) => {
ff_core_Stack.Stack_push(stack_, v_)
}));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}

export async function StringMap_copy$(self_, $c) {
throw new Error('Function StringMap_copy is missing on this target in async context.');
}

export function StringMap_show(self_, ff_core_Show_Show$V) {
return (ff_core_List.List_show(ff_core_StringMap.StringMap_toList(self_), ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Show_Show$V)) + ".toStringMap()")
}

export async function StringMap_show$(self_, ff_core_Show_Show$V, $c) {
return (ff_core_List.List_show(ff_core_StringMap.StringMap_toList(self_), ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Show_Show$V)) + ".toStringMap()")
}

export function ff_core_Show_Show$ff_core_StringMap_StringMap(ff_core_Show_Show$V) { return {
show_(self_) {
return ff_core_StringMap.StringMap_show(self_, ff_core_Show_Show$V)
},
async show_$(self_, $c) {
return ff_core_StringMap.StringMap_show(self_, ff_core_Show_Show$V)
}
}}

export function ff_core_Equal_Equal$ff_core_StringMap_StringMap(ff_core_Equal_Equal$V) { return {
equals_(self_, that_) {
return ff_core_Array.ff_core_Equal_Equal$ff_core_Array_Array(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Equal_Equal$V)).equals_(ff_core_StringMap.StringMap_toArray(self_), ff_core_StringMap.StringMap_toArray(that_))
},
async equals_$(self_, that_, $c) {
return ff_core_Array.ff_core_Equal_Equal$ff_core_Array_Array(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Equal_Equal$V)).equals_(ff_core_StringMap.StringMap_toArray(self_), ff_core_StringMap.StringMap_toArray(that_))
}
}}

export function ff_core_Ordering_Order$ff_core_StringMap_StringMap(ff_core_Ordering_Order$V) { return {
compare_(self_, that_) {
return ff_core_Array.ff_core_Ordering_Order$ff_core_Array_Array(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Ordering_Order$V)).compare_(ff_core_StringMap.StringMap_toArray(self_), ff_core_StringMap.StringMap_toArray(that_))
},
async compare_$(self_, that_, $c) {
return ff_core_Array.ff_core_Ordering_Order$ff_core_Array_Array(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Ordering_Order$V)).compare_(ff_core_StringMap.StringMap_toArray(self_), ff_core_StringMap.StringMap_toArray(that_))
}
}}

export function ff_core_Serializable_Serializable$ff_core_StringMap_StringMap(ff_core_Serializable_Serializable$V) { return {
serializeUsing_(serialization_, self_) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Array_Array(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Serializable_Serializable$V)).serializeUsing_(serialization_, ff_core_StringMap.StringMap_toArray(self_))
},
deserializeUsing_(serialization_) {
const result_ = ff_core_StringMap.make_();
ff_core_Array.Array_each(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Array_Array(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Serializable_Serializable$V)).deserializeUsing_(serialization_), ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
ff_core_StringMap.StringMap_set(result_, k_, v_)
return
}
}));
return result_
},
async serializeUsing_$(serialization_, self_, $c) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Array_Array(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Serializable_Serializable$V)).serializeUsing_(serialization_, ff_core_StringMap.StringMap_toArray(self_))
},
async deserializeUsing_$(serialization_, $c) {
const result_ = ff_core_StringMap.make_();
ff_core_Array.Array_each(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Array_Array(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Serializable_Serializable$V)).deserializeUsing_(serialization_), ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
ff_core_StringMap.StringMap_set(result_, k_, v_)
return
}
}));
return result_
}
}}


