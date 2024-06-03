

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

// type Float




export function hypot_(values_) {

        return Math.hypot(...values);
    
}

export function e_() {

        return Math.E;
    
}

export function ln10_() {

        return Math.LN10;
    
}

export function ln2_() {

        return Math.LN2;
    
}

export function log10e_() {

        return Math.LOG10E;
    
}

export function log2e_() {

        return Math.LOG2E;
    
}

export function pi_() {

        return Math.PI;
    
}

export function sqrtHalf_() {

        return Math.SQRT1_2;
    
}

export function sqrt2_() {

        return Math.SQRT2;
    
}

export async function hypot_$(values_, $task) {
throw new Error('Function hypot is missing on this target in async context.');
}

export async function e_$($task) {
throw new Error('Function e is missing on this target in async context.');
}

export async function ln10_$($task) {
throw new Error('Function ln10 is missing on this target in async context.');
}

export async function ln2_$($task) {
throw new Error('Function ln2 is missing on this target in async context.');
}

export async function log10e_$($task) {
throw new Error('Function log10e is missing on this target in async context.');
}

export async function log2e_$($task) {
throw new Error('Function log2e is missing on this target in async context.');
}

export async function pi_$($task) {
throw new Error('Function pi is missing on this target in async context.');
}

export async function sqrtHalf_$($task) {
throw new Error('Function sqrtHalf is missing on this target in async context.');
}

export async function sqrt2_$($task) {
throw new Error('Function sqrt2 is missing on this target in async context.');
}

export function Float_toInt(self_) {
return Math.trunc(self_) || 0
}

export function Float_round(self_) {
return Math.round(self_)
}

export function Float_floor(self_) {
return Math.floor(self_)
}

export function Float_ceil(self_) {
return Math.ceil(self_)
}

export function Float_truncate(self_) {
return Math.trunc(self_)
}

export function Float_sign(self_) {
return Math.sign(self_)
}

export function Float_abs(self_) {
return Math.abs(self_)
}

export function Float_toFixed(self_, digits_) {
return self_.toFixed(digits_)
}

export function Float_min(self_, that_) {
return Math.min(self, that)
}

export function Float_max(self_, that_) {
return Math.max(self, that)
}

export function Float_clamp(self_, from_, to_) {
if((self_ <= from_)) {
return from_
} else if((self_ >= to_)) {
return to_
} else {
return self_
}
}

export function Float_expDecay(self_, that_, decay_, delta_) {
return (that_ + ((self_ - that_) * ff_core_Float.Float_exp(((-decay_) * delta_))))
}

export function Float_acos(self_) {

            return Math.acos(self);
        
}

export function Float_acosh(self_) {

            return Math.acosh(self);
        
}

export function Float_asin(self_) {

            return Math.asin(self);
        
}

export function Float_asinh(self_) {

            return Math.asinh(self);
        
}

export function Float_atan(self_) {

            return Math.atan(self);
        
}

export function Float_atan2(self_, that_) {

            return Math.atan2(self, that);
        
}

export function Float_atanh(self_) {

            return Math.atanh(self);
        
}

export function Float_cbrt(self_) {

            return Math.cbrt(self);
        
}

export function Float_cos(self_) {

            return Math.cos(self);
        
}

export function Float_cosh(self_) {

            return Math.cosh(self);
        
}

export function Float_exp(self_) {

            return Math.exp(self);
        
}

export function Float_expm1(self_) {

            return Math.expm1(self);
        
}

export function Float_log(self_, that_) {

            return Math.log2(self) / Math.log2(that);
        
}

export function Float_log10(self_) {

            return Math.log10(self);
        
}

export function Float_log2(self_) {

            return Math.log2(self);
        
}

export function Float_ln(self_) {

            return Math.log(self);
        
}

export function Float_ln1p(self_) {

            return Math.log1p(self);
        
}

export function Float_sin(self_) {

            return Math.sin(self);
        
}

export function Float_sinh(self_) {

            return Math.sinh(self);
        
}

export function Float_sqrt(self_) {

            return Math.sqrt(self);
        
}

export function Float_tan(self_) {

            return Math.tan(self);
        
}

export function Float_tanh(self_) {

            return Math.tanh(self);
        
}

export async function Float_toInt$(self_, $task) {
throw new Error('Function Float_toInt is missing on this target in async context.');
}

export async function Float_round$(self_, $task) {
throw new Error('Function Float_round is missing on this target in async context.');
}

export async function Float_floor$(self_, $task) {
throw new Error('Function Float_floor is missing on this target in async context.');
}

export async function Float_ceil$(self_, $task) {
throw new Error('Function Float_ceil is missing on this target in async context.');
}

export async function Float_truncate$(self_, $task) {
throw new Error('Function Float_truncate is missing on this target in async context.');
}

export async function Float_sign$(self_, $task) {
throw new Error('Function Float_sign is missing on this target in async context.');
}

export async function Float_abs$(self_, $task) {
throw new Error('Function Float_abs is missing on this target in async context.');
}

export async function Float_toFixed$(self_, digits_, $task) {
throw new Error('Function Float_toFixed is missing on this target in async context.');
}

export async function Float_min$(self_, that_, $task) {
throw new Error('Function Float_min is missing on this target in async context.');
}

export async function Float_max$(self_, that_, $task) {
throw new Error('Function Float_max is missing on this target in async context.');
}

export async function Float_clamp$(self_, from_, to_, $task) {
if((self_ <= from_)) {
return from_
} else if((self_ >= to_)) {
return to_
} else {
return self_
}
}

export async function Float_expDecay$(self_, that_, decay_, delta_, $task) {
return (that_ + ((self_ - that_) * ff_core_Float.Float_exp(((-decay_) * delta_))))
}

export async function Float_acos$(self_, $task) {
throw new Error('Function Float_acos is missing on this target in async context.');
}

export async function Float_acosh$(self_, $task) {
throw new Error('Function Float_acosh is missing on this target in async context.');
}

export async function Float_asin$(self_, $task) {
throw new Error('Function Float_asin is missing on this target in async context.');
}

export async function Float_asinh$(self_, $task) {
throw new Error('Function Float_asinh is missing on this target in async context.');
}

export async function Float_atan$(self_, $task) {
throw new Error('Function Float_atan is missing on this target in async context.');
}

export async function Float_atan2$(self_, that_, $task) {
throw new Error('Function Float_atan2 is missing on this target in async context.');
}

export async function Float_atanh$(self_, $task) {
throw new Error('Function Float_atanh is missing on this target in async context.');
}

export async function Float_cbrt$(self_, $task) {
throw new Error('Function Float_cbrt is missing on this target in async context.');
}

export async function Float_cos$(self_, $task) {
throw new Error('Function Float_cos is missing on this target in async context.');
}

export async function Float_cosh$(self_, $task) {
throw new Error('Function Float_cosh is missing on this target in async context.');
}

export async function Float_exp$(self_, $task) {
throw new Error('Function Float_exp is missing on this target in async context.');
}

export async function Float_expm1$(self_, $task) {
throw new Error('Function Float_expm1 is missing on this target in async context.');
}

export async function Float_log$(self_, that_, $task) {
throw new Error('Function Float_log is missing on this target in async context.');
}

export async function Float_log10$(self_, $task) {
throw new Error('Function Float_log10 is missing on this target in async context.');
}

export async function Float_log2$(self_, $task) {
throw new Error('Function Float_log2 is missing on this target in async context.');
}

export async function Float_ln$(self_, $task) {
throw new Error('Function Float_ln is missing on this target in async context.');
}

export async function Float_ln1p$(self_, $task) {
throw new Error('Function Float_ln1p is missing on this target in async context.');
}

export async function Float_sin$(self_, $task) {
throw new Error('Function Float_sin is missing on this target in async context.');
}

export async function Float_sinh$(self_, $task) {
throw new Error('Function Float_sinh is missing on this target in async context.');
}

export async function Float_sqrt$(self_, $task) {
throw new Error('Function Float_sqrt is missing on this target in async context.');
}

export async function Float_tan$(self_, $task) {
throw new Error('Function Float_tan is missing on this target in async context.');
}

export async function Float_tanh$(self_, $task) {
throw new Error('Function Float_tanh is missing on this target in async context.');
}

export const ff_core_Any_HasAnyTag$ff_core_Float_Float = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/Float.Float" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/Float.Float" + "[") + "]"))
}
};


