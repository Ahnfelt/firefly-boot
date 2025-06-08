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

import * as ff_core_Date from "../../ff/core/Date.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

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

import * as ff_core_Queue from "../../ff/core/Queue.mjs"

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


export function hypot_(a_, b_, c_ = 0.0, d_ = 0.0) {
Math.hypot(a_, b_, c_, d_)
}

export function e_() {
return Math.E
}

export function ln10_() {
return Math.LN10
}

export function ln2_() {
return Math.LN2
}

export function log10e_() {
return Math.LOG10E
}

export function log2e_() {
return Math.LOG2E
}

export function pi_() {
return Math.PI
}

export function sqrtHalf_() {
return Math["SQRT1_2"]
}

export function sqrt2_() {
return Math.SQRT2
}

export function nan_() {
return NaN
}

export function infinity_() {
return Infinity
}

export async function hypot_$(a_, b_, c_ = 0.0, d_ = 0.0, $task) {
Math.hypot(a_, b_, c_, d_)
}

export async function e_$($task) {
return Math.E
}

export async function ln10_$($task) {
return Math.LN10
}

export async function ln2_$($task) {
return Math.LN2
}

export async function log10e_$($task) {
return Math.LOG10E
}

export async function log2e_$($task) {
return Math.LOG2E
}

export async function pi_$($task) {
return Math.PI
}

export async function sqrtHalf_$($task) {
return Math["SQRT1_2"]
}

export async function sqrt2_$($task) {
return Math.SQRT2
}

export async function nan_$($task) {
return NaN
}

export async function infinity_$($task) {
return Infinity
}

export function Float_toInt(self_) {
return ff_core_JsValue.JsValue_coalesce(Math.trunc(self_), 0, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_Int_Int)
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
return Math.min(self_, that_)
}

export function Float_max(self_, that_) {
return Math.max(self_, that_)
}

export function Float_clamp(self_, from_, to_) {
return Math.min(Math.max(self_, from_), to_)
}

export function Float_lerp(self_, that_, factor_) {
return (self_ + (factor_ * (that_ - self_)))
}

export function Float_smoothstep(self_, that_, factor_) {
const t_ = ff_core_Float.Float_clamp(((factor_ - self_) / (that_ - self_)), 0.0, 1.0);
return ((t_ * t_) * (3.0 - (2.0 * t_)))
}

export function Float_expDecay(self_, that_, decay_, factor_) {
return (that_ + ((self_ - that_) * ff_core_Float.Float_exp(((-decay_) * factor_))))
}

export function Float_acos(self_) {
return Math.acos(self_)
}

export function Float_acosh(self_) {
return Math.acosh(self_)
}

export function Float_asin(self_) {
return Math.asin(self_)
}

export function Float_asinh(self_) {
return Math.asinh(self_)
}

export function Float_atan(self_) {
return Math.atan(self_)
}

export function Float_atan2(self_, that_) {
return Math.atan2(self_, that_)
}

export function Float_atanh(self_) {
return Math.atanh(self_)
}

export function Float_cbrt(self_) {
return Math.cbrt(self_)
}

export function Float_cos(self_) {
return Math.cos(self_)
}

export function Float_cosh(self_) {
return Math.cosh(self_)
}

export function Float_exp(self_) {
return Math.exp(self_)
}

export function Float_expm1(self_) {
return Math.expm1(self_)
}

export function Float_log(self_, that_) {
const l_ = Math.log2(self_);
return (l_ / Math.log2(that_))
}

export function Float_log10(self_) {
return Math.log10(self_)
}

export function Float_log2(self_) {
return Math.log2(self_)
}

export function Float_ln(self_) {
return Math.log(self_)
}

export function Float_ln1p(self_) {
return Math.log1p(self_)
}

export function Float_sin(self_) {
return Math.sin(self_)
}

export function Float_sinh(self_) {
return Math.sinh(self_)
}

export function Float_sqrt(self_) {
return Math.sqrt(self_)
}

export function Float_tan(self_) {
return Math.tan(self_)
}

export function Float_tanh(self_) {
return Math.tanh(self_)
}

export function Float_isFinite(self_) {
return Number.isFinite(self_)
}

export function Float_isNan(self_) {
return Number.isNaN(self_)
}

export function Float_isSafeInteger(self_) {
return Number.isSafeInteger(self_)
}

export async function Float_toInt$(self_, $task) {
return ff_core_JsValue.JsValue_coalesce(Math.trunc(self_), 0, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_Int_Int)
}

export async function Float_round$(self_, $task) {
return Math.round(self_)
}

export async function Float_floor$(self_, $task) {
return Math.floor(self_)
}

export async function Float_ceil$(self_, $task) {
return Math.ceil(self_)
}

export async function Float_truncate$(self_, $task) {
return Math.trunc(self_)
}

export async function Float_sign$(self_, $task) {
return Math.sign(self_)
}

export async function Float_abs$(self_, $task) {
return Math.abs(self_)
}

export async function Float_toFixed$(self_, digits_, $task) {
return self_.toFixed(digits_)
}

export async function Float_min$(self_, that_, $task) {
return Math.min(self_, that_)
}

export async function Float_max$(self_, that_, $task) {
return Math.max(self_, that_)
}

export async function Float_clamp$(self_, from_, to_, $task) {
return Math.min(Math.max(self_, from_), to_)
}

export async function Float_lerp$(self_, that_, factor_, $task) {
return (self_ + (factor_ * (that_ - self_)))
}

export async function Float_smoothstep$(self_, that_, factor_, $task) {
const t_ = ff_core_Float.Float_clamp(((factor_ - self_) / (that_ - self_)), 0.0, 1.0);
return ((t_ * t_) * (3.0 - (2.0 * t_)))
}

export async function Float_expDecay$(self_, that_, decay_, factor_, $task) {
return (that_ + ((self_ - that_) * ff_core_Float.Float_exp(((-decay_) * factor_))))
}

export async function Float_acos$(self_, $task) {
return Math.acos(self_)
}

export async function Float_acosh$(self_, $task) {
return Math.acosh(self_)
}

export async function Float_asin$(self_, $task) {
return Math.asin(self_)
}

export async function Float_asinh$(self_, $task) {
return Math.asinh(self_)
}

export async function Float_atan$(self_, $task) {
return Math.atan(self_)
}

export async function Float_atan2$(self_, that_, $task) {
return Math.atan2(self_, that_)
}

export async function Float_atanh$(self_, $task) {
return Math.atanh(self_)
}

export async function Float_cbrt$(self_, $task) {
return Math.cbrt(self_)
}

export async function Float_cos$(self_, $task) {
return Math.cos(self_)
}

export async function Float_cosh$(self_, $task) {
return Math.cosh(self_)
}

export async function Float_exp$(self_, $task) {
return Math.exp(self_)
}

export async function Float_expm1$(self_, $task) {
return Math.expm1(self_)
}

export async function Float_log$(self_, that_, $task) {
const l_ = Math.log2(self_);
return (l_ / Math.log2(that_))
}

export async function Float_log10$(self_, $task) {
return Math.log10(self_)
}

export async function Float_log2$(self_, $task) {
return Math.log2(self_)
}

export async function Float_ln$(self_, $task) {
return Math.log(self_)
}

export async function Float_ln1p$(self_, $task) {
return Math.log1p(self_)
}

export async function Float_sin$(self_, $task) {
return Math.sin(self_)
}

export async function Float_sinh$(self_, $task) {
return Math.sinh(self_)
}

export async function Float_sqrt$(self_, $task) {
return Math.sqrt(self_)
}

export async function Float_tan$(self_, $task) {
return Math.tan(self_)
}

export async function Float_tanh$(self_, $task) {
return Math.tanh(self_)
}

export async function Float_isFinite$(self_, $task) {
return Number.isFinite(self_)
}

export async function Float_isNan$(self_, $task) {
return Number.isNaN(self_)
}

export async function Float_isSafeInteger$(self_, $task) {
return Number.isSafeInteger(self_)
}

export const ff_core_Any_HasAnyTag$ff_core_Float_Float = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/Float.Float" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/Float.Float" + "[") + "]"))
},
};

//# sourceMappingURL=Float.mjs.map