

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

import * as ff_core_Random from "../../ff/core/Random.mjs"

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

// type Random




export function make_(seed_) {

        var n = 0xefc8249d;
        function mash(data) {
            data = data.toString();
            for (var i = 0; i < data.length; i++) {
                n += data.charCodeAt(i);
                var h = 0.02519603282416938 * n;
                n = h >>> 0;
                h -= n;
                h *= n;
                n = h >>> 0;
                h -= n;
                n += h * 0x100000000; // 2^32
            }
            return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
        }
        var r = {
            s0: mash(' '),
            s1: mash(' '),
            s2: mash(' '),
            c: 1,
        }
        var args = [seed_];
        for(var i = 0; i < args.length; i++) {
            r.s0 -= mash(args[i]);
            if(r.s0 < 0) r.s0 += 1;
            r.s1 -= mash(args[i]);
            if(r.s1 < 0) r.s1 += 1;
            r.s2 -= mash(args[i]);
            if(r.s2 < 0) r.s2 += 1;
        }
        return r;
    
}

export async function make_$(seed_, $task) {
throw new Error('Function make is missing on this target in async context.');
}

export function Random_nextInt(self_, below_) {

            return (Random_nextFloat(self_) * below_) | 0;
        
}

export function Random_nextFloat(self_) {

            var t = 2091639 * self_.s0 + self_.c * 2.3283064365386963e-10; // 2^-32
            self_.s0 = self_.s1;
            self_.s1 = self_.s2;
            return self_.s2 = t - (self_.c = t | 0);
        
}

export function Random_nextBool(self_) {
return (ff_core_Random.Random_nextInt(self_, 2) === 0)
}

export function Random_nextBuffer(self_, buffer_) {
ff_core_List.List_each(ff_core_Int.Int_until(0, ff_core_Buffer.Buffer_size(buffer_)), ((i_) => {
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Random.Random_nextInt(self_, 256))
}))
}

export function Random_shuffleStack(self_, stack_) {
ff_core_List.List_each(ff_core_Int.Int_until(0, (ff_core_Stack.Stack_size(stack_) - 1)), ((i_) => {
const j_ = (ff_core_Random.Random_nextInt(self_, (ff_core_Stack.Stack_size(stack_) - i_)) + i_);
const value_ = ff_core_Stack.Stack_grab(stack_, i_);
ff_core_Stack.Stack_set(stack_, i_, ff_core_Stack.Stack_grab(stack_, j_));
ff_core_Stack.Stack_set(stack_, j_, value_)
}))
}

export function Random_shuffleArray(self_, array_) {
const stack_ = ff_core_Array.Array_toStack(array_);
ff_core_Random.Random_shuffleStack(self_, ff_core_Array.Array_toStack(array_));
return ff_core_Stack.Stack_drain(stack_)
}

export function Random_shuffleList(self_, list_) {
const stack_ = ff_core_List.List_toStack(list_);
ff_core_Random.Random_shuffleStack(self_, ff_core_List.List_toStack(list_));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}

export async function Random_nextInt$(self_, below_, $task) {
throw new Error('Function Random_nextInt is missing on this target in async context.');
}

export async function Random_nextFloat$(self_, $task) {
throw new Error('Function Random_nextFloat is missing on this target in async context.');
}

export async function Random_nextBool$(self_, $task) {
return (ff_core_Random.Random_nextInt(self_, 2) === 0)
}

export async function Random_nextBuffer$(self_, buffer_, $task) {
ff_core_List.List_each(ff_core_Int.Int_until(0, ff_core_Buffer.Buffer_size(buffer_)), ((i_) => {
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Random.Random_nextInt(self_, 256))
}))
}

export async function Random_shuffleStack$(self_, stack_, $task) {
ff_core_List.List_each(ff_core_Int.Int_until(0, (ff_core_Stack.Stack_size(stack_) - 1)), ((i_) => {
const j_ = (ff_core_Random.Random_nextInt(self_, (ff_core_Stack.Stack_size(stack_) - i_)) + i_);
const value_ = ff_core_Stack.Stack_grab(stack_, i_);
ff_core_Stack.Stack_set(stack_, i_, ff_core_Stack.Stack_grab(stack_, j_));
ff_core_Stack.Stack_set(stack_, j_, value_)
}))
}

export async function Random_shuffleArray$(self_, array_, $task) {
const stack_ = ff_core_Array.Array_toStack(array_);
ff_core_Random.Random_shuffleStack(self_, ff_core_Array.Array_toStack(array_));
return ff_core_Stack.Stack_drain(stack_)
}

export async function Random_shuffleList$(self_, list_, $task) {
const stack_ = ff_core_List.List_toStack(list_);
ff_core_Random.Random_shuffleStack(self_, ff_core_List.List_toStack(list_));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}




