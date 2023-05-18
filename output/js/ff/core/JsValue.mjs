

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

import * as ff_core_TaskScope from "../../ff/core/TaskScope.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type JsValue








export function JsValue_grabString(self_) {
return self_
}

export function JsValue_grabChar(self_) {
return self_
}

export function JsValue_grabInt(self_) {
return self_
}

export function JsValue_grabFloat(self_) {
return self_
}

export function JsValue_grabBool(self_) {
return self_
}

export function JsValue_grabArray(self_) {
return self_
}

export function JsValue_grabBuffer(self_) {

            if(!(self_ instanceof DataView)) throw new Error('Expected buffer, got '+ typeof self_);
            return self_
        
}

export function JsValue_isString(self_) {
return typeof self_ === 'string'
}

export function JsValue_isChar(self_) {

            return Number.isInteger(self_) && Math.abs(self_) <= Number.MAX_SAFE_INTEGER
                && self_ >= 0 && self_ < 1114112
        
}

export function JsValue_isInt(self_) {
return Number.isInteger(self_) && Math.abs(self_) <= Number.MAX_SAFE_INTEGER
}

export function JsValue_isFloat(self_) {
return typeof self_ === 'number'
}

export function JsValue_isBool(self_) {
return typeof self_ === 'boolean'
}

export function JsValue_isArray(self_) {
return Array.isArray(self_)
}

export function JsValue_isObject(self_) {
return self_ != null && typeof self_ === 'object'
}

export function JsValue_isFunction(self_) {
return typeof self_ === 'function'
}

export function JsValue_isNull(self_) {
return self_ === null
}

export function JsValue_isUndefined(self_) {
return typeof self_ === 'undefined'
}

export function JsValue_isNullOrUndefined(self_) {
return self_ == null
}

export function JsValue_isNan(self_) {
return typeof self_ === 'number' && self_ !== self_
}

export function JsValue_isFinite(self_) {
return typeof self_ === 'number' && isFinite(self_)
}

export function JsValue_get(self_, key_, ff_core_JsValue_IsJsValue$K) {
return self_[key_]
}

export function JsValue_getOwn(self_, key_) {
if(ff_core_JsValue.JsValue_hasOwn(self_, key_)) {
return ff_core_Option.Some(ff_core_JsValue.JsValue_get(self_, key_, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_String_String))
} else {
return ff_core_Option.None()
}
}

export function JsValue_set(self_, key_, value_, ff_core_JsValue_IsJsValue$K, ff_core_JsValue_IsJsValue$V) {
self_[key_] = value_
}

export function JsValue_with(self_, key_, value_, ff_core_JsValue_IsJsValue$K, ff_core_JsValue_IsJsValue$V) {
return {...self_, [key_]: value_}
}

export function JsValue_hasOwn(self_, name_) {
return Object.prototype.hasOwnProperty.call(self_, name_)
}

export function JsValue_assign(self_, source_, source2_ = source_) {
return Object.assign(self_, source_, source2_ !== source_ ? source2_ : null)
}

export function JsValue_each(self_, body_) {
for(const value of self_) body_(value)
}

export function JsValue_eachWhile(self_, body_) {
for(const value of self_) if(!body_(value)) break
}

export function JsValue_call(self_, name_, arguments_) {
return self_[name_].apply(this_, ff_core_List.List_toArray(arguments_))
}

export function JsValue_call0(self_, name_) {
return self_[name_].call(self_)
}

export function JsValue_call1(self_, name_, a1_, ff_core_JsValue_IsJsValue$A1) {
return self_[name_].call(self_, a1_)
}

export function JsValue_call2(self_, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2) {
return self_[name_].call(self_, a1_, a2_)
}

export function JsValue_call3(self_, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3) {
return self_[name_].call(self_, a1_, a2_, a3_)
}

export function JsValue_call4(self_, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4) {
return self_[name_].call(self_, a1_, a2_, a3_, a4_)
}

export function JsValue_call5(self_, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5) {
return self_[name_].call(self_, a1_, a2_, a3_, a4_, a5_)
}

export function JsValue_call6(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6) {
return self_[name_].call(self_, a1_, a2_, a3_, a4_, a5_, a6_)
}

export function JsValue_call7(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7) {
return self_[name_].call(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_)
}

export function JsValue_call8(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8) {
return self_[name_].call(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_)
}

export function JsValue_call9(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9) {
return self_[name_].call(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_)
}

export function JsValue_callValue(self_, this_, arguments_) {
return self_.apply(this_, ff_core_List.List_toArray(arguments_))
}

export function JsValue_callValue0(self_) {
return self_.call(self_)
}

export function JsValue_callValue1(self_, a1_, ff_core_JsValue_IsJsValue$A1) {
return self_.call(self_, a1_)
}

export function JsValue_callValue2(self_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2) {
return self_.call(self_, a1_, a2_)
}

export function JsValue_callValue3(self_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3) {
return self_.call(self_, a1_, a2_, a3_)
}

export function JsValue_callValue4(self_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4) {
return self_.call(self_, a1_, a2_, a3_, a4_)
}

export function JsValue_callValue5(self_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5) {
return self_.call(self_, a1_, a2_, a3_, a4_, a5_)
}

export function JsValue_callValue6(self_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6) {
return self_.call(self_, a1_, a2_, a3_, a4_, a5_, a6_)
}

export function JsValue_callValue7(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7) {
return self_.call(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_)
}

export function JsValue_callValue8(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8) {
return self_.call(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_)
}

export function JsValue_callValue9(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9) {
return self_.call(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_)
}

export function JsValue_new(self_, this_, arguments_) {
return new (Function.prototype.bind.apply(self_, ff_core_List.List_toArray(arguments_)))
}

export function JsValue_new0(self_) {
return new self_()
}

export function JsValue_new1(self_, a1_, ff_core_JsValue_IsJsValue$A1) {
return new self_(a1_)
}

export function JsValue_new2(self_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2) {
return new self_(a1_, a2_)
}

export function JsValue_new3(self_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3) {
return new self_(a1_, a2_, a3_)
}

export function JsValue_new4(self_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4) {
return new self_(a1_, a2_, a3_, a4_)
}

export function JsValue_new5(self_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5) {
return new self_(a1_, a2_, a3_, a4_, a5_)
}

export function JsValue_new6(self_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6) {
return new self_(a1_, a2_, a3_, a4_, a5_, a6_)
}

export function JsValue_new7(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7) {
return new self_(a1_, a2_, a3_, a4_, a5_, a6_, a7_)
}

export function JsValue_new8(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8) {
return new self_(a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_)
}

export function JsValue_new9(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9) {
return new self_(a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_)
}

export function JsValue_toJson(self_, space_ = ff_core_Option.None()) {
return JSON.stringify(self_, null, space_.value_)
}

export function JsValue_grabPairs(self_) {

            if(!(self_ instanceof Object)) throw new Error('Expected object, got '+ typeof self_);;
            let result = ff_core_List.Empty();
            Object.getOwnPropertyNames(self_).forEach((name, i) => {
                let pair = ff_core_Pair.Pair(name, self_[name]);
                result = ff_core_List.Link(pair, result);
            })
            return result;
        
}

export function JsValue_grabMap(self_) {
return ff_core_List.List_toMap(ff_core_JsValue.JsValue_grabPairs(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function JsValue_grabString$(self_, $c) {
throw new Error('Function JsValue_grabString is missing on this target in async context.');
}

export async function JsValue_grabChar$(self_, $c) {
throw new Error('Function JsValue_grabChar is missing on this target in async context.');
}

export async function JsValue_grabInt$(self_, $c) {
throw new Error('Function JsValue_grabInt is missing on this target in async context.');
}

export async function JsValue_grabFloat$(self_, $c) {
throw new Error('Function JsValue_grabFloat is missing on this target in async context.');
}

export async function JsValue_grabBool$(self_, $c) {
throw new Error('Function JsValue_grabBool is missing on this target in async context.');
}

export async function JsValue_grabArray$(self_, $c) {
throw new Error('Function JsValue_grabArray is missing on this target in async context.');
}

export async function JsValue_grabBuffer$(self_, $c) {
throw new Error('Function JsValue_grabBuffer is missing on this target in async context.');
}

export async function JsValue_isString$(self_, $c) {
throw new Error('Function JsValue_isString is missing on this target in async context.');
}

export async function JsValue_isChar$(self_, $c) {
throw new Error('Function JsValue_isChar is missing on this target in async context.');
}

export async function JsValue_isInt$(self_, $c) {
throw new Error('Function JsValue_isInt is missing on this target in async context.');
}

export async function JsValue_isFloat$(self_, $c) {
throw new Error('Function JsValue_isFloat is missing on this target in async context.');
}

export async function JsValue_isBool$(self_, $c) {
throw new Error('Function JsValue_isBool is missing on this target in async context.');
}

export async function JsValue_isArray$(self_, $c) {
throw new Error('Function JsValue_isArray is missing on this target in async context.');
}

export async function JsValue_isObject$(self_, $c) {
throw new Error('Function JsValue_isObject is missing on this target in async context.');
}

export async function JsValue_isFunction$(self_, $c) {
throw new Error('Function JsValue_isFunction is missing on this target in async context.');
}

export async function JsValue_isNull$(self_, $c) {
throw new Error('Function JsValue_isNull is missing on this target in async context.');
}

export async function JsValue_isUndefined$(self_, $c) {
throw new Error('Function JsValue_isUndefined is missing on this target in async context.');
}

export async function JsValue_isNullOrUndefined$(self_, $c) {
throw new Error('Function JsValue_isNullOrUndefined is missing on this target in async context.');
}

export async function JsValue_isNan$(self_, $c) {
throw new Error('Function JsValue_isNan is missing on this target in async context.');
}

export async function JsValue_isFinite$(self_, $c) {
throw new Error('Function JsValue_isFinite is missing on this target in async context.');
}

export async function JsValue_get$(self_, key_, ff_core_JsValue_IsJsValue$K, $c) {
throw new Error('Function JsValue_get is missing on this target in async context.');
}

export async function JsValue_getOwn$(self_, key_, $c) {
if(ff_core_JsValue.JsValue_hasOwn(self_, key_)) {
return ff_core_Option.Some(ff_core_JsValue.JsValue_get(self_, key_, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_String_String))
} else {
return ff_core_Option.None()
}
}

export async function JsValue_set$(self_, key_, value_, ff_core_JsValue_IsJsValue$K, ff_core_JsValue_IsJsValue$V, $c) {
throw new Error('Function JsValue_set is missing on this target in async context.');
}

export async function JsValue_with$(self_, key_, value_, ff_core_JsValue_IsJsValue$K, ff_core_JsValue_IsJsValue$V, $c) {
throw new Error('Function JsValue_with is missing on this target in async context.');
}

export async function JsValue_hasOwn$(self_, name_, $c) {
throw new Error('Function JsValue_hasOwn is missing on this target in async context.');
}

export async function JsValue_assign$(self_, source_, source2_ = source_, $c) {
throw new Error('Function JsValue_assign is missing on this target in async context.');
}

export async function JsValue_each$(self_, body_, $c) {
for(const value of self_) await body_(value, $c)
}

export async function JsValue_eachWhile$(self_, body_, $c) {
for(const value of self_) if(!await body_(value, $c)) break
}

export async function JsValue_call$(self_, name_, arguments_, $c) {
throw new Error('Function JsValue_call is missing on this target in async context.');
}

export async function JsValue_call0$(self_, name_, $c) {
throw new Error('Function JsValue_call0 is missing on this target in async context.');
}

export async function JsValue_call1$(self_, name_, a1_, ff_core_JsValue_IsJsValue$A1, $c) {
throw new Error('Function JsValue_call1 is missing on this target in async context.');
}

export async function JsValue_call2$(self_, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, $c) {
throw new Error('Function JsValue_call2 is missing on this target in async context.');
}

export async function JsValue_call3$(self_, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, $c) {
throw new Error('Function JsValue_call3 is missing on this target in async context.');
}

export async function JsValue_call4$(self_, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, $c) {
throw new Error('Function JsValue_call4 is missing on this target in async context.');
}

export async function JsValue_call5$(self_, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, $c) {
throw new Error('Function JsValue_call5 is missing on this target in async context.');
}

export async function JsValue_call6$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, $c) {
throw new Error('Function JsValue_call6 is missing on this target in async context.');
}

export async function JsValue_call7$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, $c) {
throw new Error('Function JsValue_call7 is missing on this target in async context.');
}

export async function JsValue_call8$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, $c) {
throw new Error('Function JsValue_call8 is missing on this target in async context.');
}

export async function JsValue_call9$(self_, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9, $c) {
throw new Error('Function JsValue_call9 is missing on this target in async context.');
}

export async function JsValue_callValue$(self_, this_, arguments_, $c) {
throw new Error('Function JsValue_callValue is missing on this target in async context.');
}

export async function JsValue_callValue0$(self_, $c) {
throw new Error('Function JsValue_callValue0 is missing on this target in async context.');
}

export async function JsValue_callValue1$(self_, a1_, ff_core_JsValue_IsJsValue$A1, $c) {
throw new Error('Function JsValue_callValue1 is missing on this target in async context.');
}

export async function JsValue_callValue2$(self_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, $c) {
throw new Error('Function JsValue_callValue2 is missing on this target in async context.');
}

export async function JsValue_callValue3$(self_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, $c) {
throw new Error('Function JsValue_callValue3 is missing on this target in async context.');
}

export async function JsValue_callValue4$(self_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, $c) {
throw new Error('Function JsValue_callValue4 is missing on this target in async context.');
}

export async function JsValue_callValue5$(self_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, $c) {
throw new Error('Function JsValue_callValue5 is missing on this target in async context.');
}

export async function JsValue_callValue6$(self_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, $c) {
throw new Error('Function JsValue_callValue6 is missing on this target in async context.');
}

export async function JsValue_callValue7$(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, $c) {
throw new Error('Function JsValue_callValue7 is missing on this target in async context.');
}

export async function JsValue_callValue8$(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, $c) {
throw new Error('Function JsValue_callValue8 is missing on this target in async context.');
}

export async function JsValue_callValue9$(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9, $c) {
throw new Error('Function JsValue_callValue9 is missing on this target in async context.');
}

export async function JsValue_new$(self_, this_, arguments_, $c) {
throw new Error('Function JsValue_new is missing on this target in async context.');
}

export async function JsValue_new0$(self_, $c) {
throw new Error('Function JsValue_new0 is missing on this target in async context.');
}

export async function JsValue_new1$(self_, a1_, ff_core_JsValue_IsJsValue$A1, $c) {
throw new Error('Function JsValue_new1 is missing on this target in async context.');
}

export async function JsValue_new2$(self_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, $c) {
throw new Error('Function JsValue_new2 is missing on this target in async context.');
}

export async function JsValue_new3$(self_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, $c) {
throw new Error('Function JsValue_new3 is missing on this target in async context.');
}

export async function JsValue_new4$(self_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, $c) {
throw new Error('Function JsValue_new4 is missing on this target in async context.');
}

export async function JsValue_new5$(self_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, $c) {
throw new Error('Function JsValue_new5 is missing on this target in async context.');
}

export async function JsValue_new6$(self_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, $c) {
throw new Error('Function JsValue_new6 is missing on this target in async context.');
}

export async function JsValue_new7$(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, $c) {
throw new Error('Function JsValue_new7 is missing on this target in async context.');
}

export async function JsValue_new8$(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, $c) {
throw new Error('Function JsValue_new8 is missing on this target in async context.');
}

export async function JsValue_new9$(self_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9, $c) {
throw new Error('Function JsValue_new9 is missing on this target in async context.');
}

export async function JsValue_toJson$(self_, space_ = ff_core_Option.None(), $c) {
throw new Error('Function JsValue_toJson is missing on this target in async context.');
}

export async function JsValue_grabPairs$(self_, $c) {
throw new Error('Function JsValue_grabPairs is missing on this target in async context.');
}

export async function JsValue_grabMap$(self_, $c) {
return ff_core_List.List_toMap(ff_core_JsValue.JsValue_grabPairs(self_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export const ff_core_JsValue_IsJsValue$ff_core_JsValue_JsValue = {

};

export const ff_core_JsValue_IsJsValue$ff_core_String_String = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Char_Char = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Int_Int = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Float_Float = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Bool_Bool = {

};

export function ff_core_JsValue_IsJsValue$ff_core_Array_Array(ff_core_JsValue_IsJsValue$T) { return {

}}

export const ff_core_JsValue_IsJsValue$ff_core_Error_Error = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Instant_Instant = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Duration_Duration = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Buffer_Buffer = {

};

export const ff_core_JsValue_IsJsValue$ff_core_Nothing_Nothing = {

};


