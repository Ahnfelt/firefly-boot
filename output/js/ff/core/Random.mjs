

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

// type Random




export function seedInt_(seed_) {
return ff_core_Random.seedFloat_(ff_core_Int.Int_toFloat(seed_))
}

export function seedFloat_(seed_) {
const buffer_ = ff_core_Buffer.make_(8, false);
ff_core_Buffer.Buffer_setFloat64(buffer_, 0, seed_, true);
return ff_core_Random.seedBuffer_(buffer_)
}

export function seedInstant_(seed_) {
return ff_core_Random.seedFloat_(seed_)
}

export function seedBuffer_(buffer_) {

        var n = 0xefc8249d;
        function mash(data) {
            for(var i = 0; i < data.byteLength; i++) {
                n += data.getUint8(i);
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
        var space = new DataView(new Uint8Array([32]).buffer);
        var r = {
            s0: mash(space),
            s1: mash(space),
            s2: mash(space),
            c: 1,
            spareGauss: NaN
        };
        r.s0 -= mash(buffer_);
        if(r.s0 < 0) r.s0 += 1;
        r.s1 -= mash(buffer_);
        if(r.s1 < 0) r.s1 += 1;
        r.s2 -= mash(buffer_);
        if(r.s2 < 0) r.s2 += 1;
        return r;
    
}

export async function seedInt_$(seed_, $task) {
return ff_core_Random.seedFloat_(ff_core_Int.Int_toFloat(seed_))
}

export async function seedFloat_$(seed_, $task) {
const buffer_ = ff_core_Buffer.make_(8, false);
ff_core_Buffer.Buffer_setFloat64(buffer_, 0, seed_, true);
return ff_core_Random.seedBuffer_(buffer_)
}

export async function seedInstant_$(seed_, $task) {
return ff_core_Random.seedFloat_(seed_)
}

export async function seedBuffer_$(buffer_, $task) {
throw new Error('Function seedBuffer is missing on this target in async context.');
}

export function Random_copy(self_) {

            return {...self_};
        
}

export function Random_nextInt(self_, from_, until_) {

            return Random_nextFloat(self_, from_, until_) | 0;
        
}

export function Random_nextFloat(self_, from_, until_) {

            var t = 2091639 * self_.s0 + self_.c * 2.3283064365386963e-10; // 2^-32
            self_.s0 = self_.s1;
            self_.s1 = self_.s2;
            var uniform = self_.s2 = t - (self_.c = t | 0);
            return from_ + uniform * (until_ - from_);
        
}

export function Random_nextBool(self_) {
return (ff_core_Random.Random_nextInt(self_, 0, 2) === 0)
}

export function Random_nextBytes(self_, buffer_, start_, stop_) {
ff_core_List.List_each(ff_core_Int.Int_until(start_, stop_), ((i_) => {
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Random.Random_nextInt(self_, 0, 256))
}))
}

export function Random_nextGauss(self_, mean_, standardDeviation_) {

            if(!isNaN(self_.spareGauss)) {
                const result = self_.spareGauss * standardDeviation_ + mean_;
                self_.spareGauss = NaN;
                return result;
            } else {
                let u = 0.5, v = 0.5, s = 0.5;
                do {
                    u = Random_nextFloat(self_, 0.0, 1.0) * 2 - 1;
                    v = Random_nextFloat(self_, 0.0, 1.0) * 2 - 1;
                    s = u * u + v * v;
                } while(s >= 1 || s == 0);
                s = Math.sqrt(-2.0 * Math.log(s) / s);
                self_.spareGauss = v * s;
                return mean_ + standardDeviation_ * u * s;
            }
        
}

export function Random_shuffleArray(self_, array_) {
ff_core_List.List_each(ff_core_Int.Int_until(0, (ff_core_Array.Array_size(array_) - 1)), ((i_) => {
const j_ = (ff_core_Random.Random_nextInt(self_, 0, (ff_core_Array.Array_size(array_) - i_)) + i_);
const value_ = (array_.array[i_] ?? ff_core_Array.internalGrab_(array_, i_));
ff_core_Array.Array_set(array_, i_, (array_.array[j_] ?? ff_core_Array.internalGrab_(array_, j_)));
ff_core_Array.Array_set(array_, j_, value_)
}))
}

export function Random_shuffleList(self_, list_) {
const array_ = ff_core_List.List_toArray(list_);
ff_core_Random.Random_shuffleArray(self_, ff_core_List.List_toArray(list_));
return ff_core_Array.Array_drain(array_)
}

export function Random_sampleArray(self_, count_, array_, body_) {
ff_core_List.List_each(ff_core_List.List_takeFirst(ff_core_Random.Random_shuffleList(self_, ff_core_Array.Array_toList(array_, 0, 9007199254740991)), count_), ((_w1) => {
body_(_w1)
}))
}

export function Random_sampleList(self_, count_, list_) {
return ff_core_List.List_takeFirst(ff_core_Random.Random_shuffleList(self_, list_), count_)
}

export function Random_grabArray(self_, array_) {
return ff_core_Array.Array_grab(array_, ff_core_Random.Random_nextInt(self_, 0, ff_core_Array.Array_size(array_)))
}

export function Random_grabList(self_, list_) {
return ff_core_List.List_grab(list_, ff_core_Random.Random_nextInt(self_, 0, ff_core_List.List_size(list_)))
}

export async function Random_copy$(self_, $task) {
throw new Error('Function Random_copy is missing on this target in async context.');
}

export async function Random_nextInt$(self_, from_, until_, $task) {
throw new Error('Function Random_nextInt is missing on this target in async context.');
}

export async function Random_nextFloat$(self_, from_, until_, $task) {
throw new Error('Function Random_nextFloat is missing on this target in async context.');
}

export async function Random_nextBool$(self_, $task) {
return (ff_core_Random.Random_nextInt(self_, 0, 2) === 0)
}

export async function Random_nextBytes$(self_, buffer_, start_, stop_, $task) {
ff_core_List.List_each(ff_core_Int.Int_until(start_, stop_), ((i_) => {
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Random.Random_nextInt(self_, 0, 256))
}))
}

export async function Random_nextGauss$(self_, mean_, standardDeviation_, $task) {
throw new Error('Function Random_nextGauss is missing on this target in async context.');
}

export async function Random_shuffleArray$(self_, array_, $task) {
ff_core_List.List_each(ff_core_Int.Int_until(0, (ff_core_Array.Array_size(array_) - 1)), ((i_) => {
const j_ = (ff_core_Random.Random_nextInt(self_, 0, (ff_core_Array.Array_size(array_) - i_)) + i_);
const value_ = (array_.array[i_] ?? ff_core_Array.internalGrab_(array_, i_));
ff_core_Array.Array_set(array_, i_, (array_.array[j_] ?? ff_core_Array.internalGrab_(array_, j_)));
ff_core_Array.Array_set(array_, j_, value_)
}))
}

export async function Random_shuffleList$(self_, list_, $task) {
const array_ = ff_core_List.List_toArray(list_);
ff_core_Random.Random_shuffleArray(self_, ff_core_List.List_toArray(list_));
return ff_core_Array.Array_drain(array_)
}

export async function Random_sampleArray$(self_, count_, array_, body_, $task) {
(await ff_core_List.List_each$(ff_core_List.List_takeFirst(ff_core_Random.Random_shuffleList(self_, ff_core_Array.Array_toList(array_, 0, 9007199254740991)), count_), (async (_w1, $task) => {
(await body_(_w1, $task))
}), $task))
}

export async function Random_sampleList$(self_, count_, list_, $task) {
return ff_core_List.List_takeFirst(ff_core_Random.Random_shuffleList(self_, list_), count_)
}

export async function Random_grabArray$(self_, array_, $task) {
return ff_core_Array.Array_grab(array_, ff_core_Random.Random_nextInt(self_, 0, ff_core_Array.Array_size(array_)))
}

export async function Random_grabList$(self_, list_, $task) {
return ff_core_List.List_grab(list_, ff_core_Random.Random_nextInt(self_, 0, ff_core_List.List_size(list_)))
}




