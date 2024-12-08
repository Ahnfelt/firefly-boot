

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

import * as ff_core_Js from "../../ff/core/Js.mjs"

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
export function Random(s0_, s1_, s2_, c_, spareGauss_) {
return {s0_, s1_, s2_, c_, spareGauss_};
}



export function newFromInt_(seed_) {
return ff_core_Random.newFromFloat_(ff_core_Int.Int_toFloat(seed_))
}

export function newFromFloat_(seed_) {
const buffer_ = ff_core_Buffer.new_(8, false);
ff_core_Buffer.Buffer_setFloat64(buffer_, 0, seed_, true);
return ff_core_Random.newFromBuffer_(buffer_)
}

export function newFromInstant_(seed_) {
return ff_core_Random.newFromFloat_(seed_)
}

export function newFromBuffer_(buffer_) {
let n_ = ff_core_Int.Int_toFloat(0xefc8249d);
function mash_(data_) {
for(let for_i = 0, for_e = ff_core_Buffer.Buffer_size(data_); for_i < for_e; for_i++) {
const i_ = for_i;
n_ += ff_core_Int.Int_toFloat(ff_core_Buffer.Buffer_grabUint8(data_, i_));
let h_ = (0.02519603282416938 * n_);
n_ = (h_ >>> 0);
h_ -= n_;
h_ *= n_;
n_ = (h_ >>> 0);
h_ -= n_;
n_ += (h_ * 0x100000000)
};
return ((n_ >>> 0) * 2.3283064365386963e-10)
}
const space_ = (new DataView((new Uint8Array([32])).buffer));
const r_ = ff_core_Random.Random(mash_(space_), mash_(space_), mash_(space_), 1.0, ff_core_Float.nan_());
r_.s0_ -= mash_(buffer_);
if((r_.s0_ < 0.0)) {
r_.s0_ += 1.0
};
r_.s1_ -= mash_(buffer_);
if((r_.s1_ < 0.0)) {
r_.s1_ += 1.0
};
r_.s2_ -= mash_(buffer_);
if((r_.s2_ < 0.0)) {
r_.s2_ += 1.0
};
return r_
}

export async function newFromInt_$(seed_, $task) {
return ff_core_Random.newFromFloat_(ff_core_Int.Int_toFloat(seed_))
}

export async function newFromFloat_$(seed_, $task) {
const buffer_ = ff_core_Buffer.new_(8, false);
ff_core_Buffer.Buffer_setFloat64(buffer_, 0, seed_, true);
return ff_core_Random.newFromBuffer_(buffer_)
}

export async function newFromInstant_$(seed_, $task) {
return ff_core_Random.newFromFloat_(seed_)
}

export async function newFromBuffer_$(buffer_, $task) {
let n_ = ff_core_Int.Int_toFloat(0xefc8249d);
function mash_(data_) {
for(let for_i = 0, for_e = ff_core_Buffer.Buffer_size(data_); for_i < for_e; for_i++) {
const i_ = for_i;
n_ += ff_core_Int.Int_toFloat(ff_core_Buffer.Buffer_grabUint8(data_, i_));
let h_ = (0.02519603282416938 * n_);
n_ = (h_ >>> 0);
h_ -= n_;
h_ *= n_;
n_ = (h_ >>> 0);
h_ -= n_;
n_ += (h_ * 0x100000000)
};
return ((n_ >>> 0) * 2.3283064365386963e-10)
}
const space_ = (new DataView((new Uint8Array([32])).buffer));
const r_ = ff_core_Random.Random(mash_(space_), mash_(space_), mash_(space_), 1.0, ff_core_Float.nan_());
r_.s0_ -= mash_(buffer_);
if((r_.s0_ < 0.0)) {
r_.s0_ += 1.0
};
r_.s1_ -= mash_(buffer_);
if((r_.s1_ < 0.0)) {
r_.s1_ += 1.0
};
r_.s2_ -= mash_(buffer_);
if((r_.s2_ < 0.0)) {
r_.s2_ += 1.0
};
return r_
}

export function Random_copy(self_) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Random.Random(_c.s0_, _c.s1_, _c.s2_, _c.c_, _c.spareGauss_)
}
}
}

export function Random_nextInt(self_, from_, until_) {
return (ff_core_Random.Random_nextFloat(self_, ff_core_Int.Int_toFloat(from_), ff_core_Int.Int_toFloat(until_)) | 0)
}

export function Random_nextFloat(self_, from_, until_) {
const t_ = ((2091639 * self_.s0_) + (self_.c_ * 2.3283064365386963e-10));
self_.s0_ = self_.s1_;
self_.s1_ = self_.s2_;
self_.c_ = (t_ | 0);
const uniform_ = (t_ - self_.c_);
self_.s2_ = uniform_;
return (from_ + (uniform_ * (until_ - from_)))
}

export function Random_nextBool(self_) {
return (ff_core_Random.Random_nextInt(self_, 0, 2) === 0)
}

export function Random_nextBytes(self_, buffer_, start_, stop_) {
for(let for_i = start_, for_e = stop_; for_i < for_e; for_i++) {
const i_ = for_i;
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Random.Random_nextInt(self_, 0, 256))
}
}

export function Random_nextGauss(self_, mean_, standardDeviation_) {
if((!ff_core_Float.Float_isNan(self_.spareGauss_))) {
const result_ = ((self_.spareGauss_ * standardDeviation_) + mean_);
self_.spareGauss_ = ff_core_Float.nan_();
return result_
} else {
let u_ = 0.5;
let v_ = 0.5;
let s_ = 0.5;
while(true) {
u_ = ((ff_core_Random.Random_nextFloat(self_, 0.0, 1.0) * 2) - 1);
v_ = ((ff_core_Random.Random_nextFloat(self_, 0.0, 1.0) * 2) - 1);
s_ = ((u_ * u_) + (v_ * v_));
if(!((s_ >= 1.0) || (s_ === 0.0))) break
};
s_ = ff_core_Float.Float_sqrt((((-2.0) * ff_core_Float.Float_ln(s_)) / s_));
self_.spareGauss_ = (v_ * s_);
return (mean_ + ((standardDeviation_ * u_) * s_))
}
}

export function Random_shuffleArray(self_, array_) {
for(let for_i = 0, for_e = (array_.array.length - 1); for_i < for_e; for_i++) {
const i_ = for_i;
const j_ = (ff_core_Random.Random_nextInt(self_, 0, (array_.array.length - i_)) + i_);
const value_ = (array_.array[i_] ?? ff_core_Array.Array_grab(array_, i_));
ff_core_Array.Array_set(array_, i_, (array_.array[j_] ?? ff_core_Array.Array_grab(array_, j_)));
ff_core_Array.Array_set(array_, j_, value_)
}
}

export function Random_shuffleList(self_, list_) {
const array_ = ff_core_List.List_toArray(list_);
ff_core_Random.Random_shuffleArray(self_, ff_core_List.List_toArray(list_));
return ff_core_Array.Array_drain(array_)
}

export function Random_sampleArray(self_, count_, array_, body_) {
for(let for_a = ff_core_Random.Random_shuffleList(self_, ff_core_Array.Array_toList(array_, 0, 9007199254740991)), for_i = 0, for_l = Math.min(Math.max(count_, 0), for_a.length); for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
body_(_w1)
}
}

export function Random_sampleList(self_, count_, list_) {
return ff_core_List.List_takeFirst(ff_core_Random.Random_shuffleList(self_, list_), count_)
}

export function Random_grabArray(self_, array_) {
return ff_core_Array.Array_grab(array_, ff_core_Random.Random_nextInt(self_, 0, array_.array.length))
}

export function Random_grabList(self_, list_) {
return ff_core_List.List_grab(list_, ff_core_Random.Random_nextInt(self_, 0, list_.length))
}

export async function Random_copy$(self_, $task) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Random.Random(_c.s0_, _c.s1_, _c.s2_, _c.c_, _c.spareGauss_)
}
}
}

export async function Random_nextInt$(self_, from_, until_, $task) {
return (ff_core_Random.Random_nextFloat(self_, ff_core_Int.Int_toFloat(from_), ff_core_Int.Int_toFloat(until_)) | 0)
}

export async function Random_nextFloat$(self_, from_, until_, $task) {
const t_ = ((2091639 * self_.s0_) + (self_.c_ * 2.3283064365386963e-10));
self_.s0_ = self_.s1_;
self_.s1_ = self_.s2_;
self_.c_ = (t_ | 0);
const uniform_ = (t_ - self_.c_);
self_.s2_ = uniform_;
return (from_ + (uniform_ * (until_ - from_)))
}

export async function Random_nextBool$(self_, $task) {
return (ff_core_Random.Random_nextInt(self_, 0, 2) === 0)
}

export async function Random_nextBytes$(self_, buffer_, start_, stop_, $task) {
for(let for_i = start_, for_e = stop_; for_i < for_e; for_i++) {
const i_ = for_i;
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Random.Random_nextInt(self_, 0, 256))
}
}

export async function Random_nextGauss$(self_, mean_, standardDeviation_, $task) {
if((!ff_core_Float.Float_isNan(self_.spareGauss_))) {
const result_ = ((self_.spareGauss_ * standardDeviation_) + mean_);
self_.spareGauss_ = ff_core_Float.nan_();
return result_
} else {
let u_ = 0.5;
let v_ = 0.5;
let s_ = 0.5;
while(true) {
u_ = ((ff_core_Random.Random_nextFloat(self_, 0.0, 1.0) * 2) - 1);
v_ = ((ff_core_Random.Random_nextFloat(self_, 0.0, 1.0) * 2) - 1);
s_ = ((u_ * u_) + (v_ * v_));
if(!((s_ >= 1.0) || (s_ === 0.0))) break
};
s_ = ff_core_Float.Float_sqrt((((-2.0) * ff_core_Float.Float_ln(s_)) / s_));
self_.spareGauss_ = (v_ * s_);
return (mean_ + ((standardDeviation_ * u_) * s_))
}
}

export async function Random_shuffleArray$(self_, array_, $task) {
for(let for_i = 0, for_e = (array_.array.length - 1); for_i < for_e; for_i++) {
const i_ = for_i;
const j_ = (ff_core_Random.Random_nextInt(self_, 0, (array_.array.length - i_)) + i_);
const value_ = (array_.array[i_] ?? ff_core_Array.Array_grab(array_, i_));
ff_core_Array.Array_set(array_, i_, (array_.array[j_] ?? ff_core_Array.Array_grab(array_, j_)));
ff_core_Array.Array_set(array_, j_, value_)
}
}

export async function Random_shuffleList$(self_, list_, $task) {
const array_ = ff_core_List.List_toArray(list_);
ff_core_Random.Random_shuffleArray(self_, ff_core_List.List_toArray(list_));
return ff_core_Array.Array_drain(array_)
}

export async function Random_sampleArray$(self_, count_, array_, body_, $task) {
for(let for_a = ff_core_Random.Random_shuffleList(self_, ff_core_Array.Array_toList(array_, 0, 9007199254740991)), for_i = 0, for_l = Math.min(Math.max(count_, 0), for_a.length); for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
(await body_(_w1, $task))
}
}

export async function Random_sampleList$(self_, count_, list_, $task) {
return ff_core_List.List_takeFirst(ff_core_Random.Random_shuffleList(self_, list_), count_)
}

export async function Random_grabArray$(self_, array_, $task) {
return ff_core_Array.Array_grab(array_, ff_core_Random.Random_nextInt(self_, 0, array_.array.length))
}

export async function Random_grabList$(self_, list_, $task) {
return ff_core_List.List_grab(list_, ff_core_Random.Random_nextInt(self_, 0, list_.length))
}




