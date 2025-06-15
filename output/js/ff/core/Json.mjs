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

// newtype Json

export function read_(json_) {
try {
return ff_core_Option.Some(JSON.parse(json_))
} catch {
return ff_core_Option.None()
}
}

export function string_(json_) {
return json_
}

export function int_(json_) {
return json_
}

export function float_(json_) {
return json_
}

export function bool_(json_) {
return json_
}

export function null_() {
return null
}

export function array_(json_) {
return json_
}

export function object_() {
return {}
}

export function new0_() {
return {}
}

export function fields_(body_) {
const result_ = {};
body_(((k_, v_) => {
result_[k_] = v_
}));
return result_
}

export function internalEquals_(a_, b_) {
if((a_ === b_)) {
return true
} else {
if((ff_core_JsValue.JsValue_isArray(a_) || ff_core_JsValue.JsValue_isArray(b_))) {
if(((!ff_core_JsValue.JsValue_isArray(a_)) || (!ff_core_JsValue.JsValue_isArray(b_)))) {
return false
} else {
if((a_.length !== b_.length)) {
return false
} else {
let equal_ = true;
for(let for_i = 0, for_e = a_.length; for_i < for_e; for_i++) {
const i_ = for_i;
equal_ = ff_core_Json.internalEquals_(a_[i_], b_[i_]);
if(!equal_) break
};
return equal_
}
}
} else {
if((ff_core_Json.Json_isObject(a_) && ff_core_Json.Json_isObject(b_))) {
const aKeys_ = Object.keys(a_);
const bKeys_ = Object.keys(b_);
if((aKeys_.length !== bKeys_.length)) {
return false
} else {
let equal_ = true;
ff_core_JsValue.JsValue_eachWhile(aKeys_, ((key_) => {
equal_ = (ff_core_JsValue.JsValue_hasOwn(b_, key_) && ff_core_Json.internalEquals_(a_[key_], b_[key_]));
return equal_
}));
return equal_
}
} else {
return false
}
}
}
}

export function internalCompare_(a_, b_) {
if((a_ === b_)) {
return 0
} else {
if(((a_ === null) || (b_ === null))) {
if((a_ === null)) {
return (-1)
} else {
return 1
}
} else {
if((ff_core_Json.Json_isBool(a_) || ff_core_Json.Json_isBool(b_))) {
if(((!ff_core_Json.Json_isBool(b_)) || b_)) {
return (-1)
} else {
return 1
}
} else {
if((ff_core_Json.Json_isFloat(a_) || ff_core_Json.Json_isFloat(b_))) {
if((!ff_core_Json.Json_isFloat(b_))) {
return (-1)
} else {
if((!ff_core_Json.Json_isFloat(a_))) {
return 1
} else {
if(ff_core_JsValue.JsValue_isNan(a_)) {
if(ff_core_JsValue.JsValue_isNan(b_)) {
return 0
} else {
return (-1)
}
} else {
if(ff_core_JsValue.JsValue_isNan(b_)) {
return 1
} else {
if(ff_core_Ordering.before_(a_, b_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Nothing_Nothing)) {
return (-1)
} else {
return 1
}
}
}
}
}
} else {
if((ff_core_Json.Json_isString(a_) || ff_core_Json.Json_isString(b_))) {
if((!ff_core_Json.Json_isString(b_))) {
return (-1)
} else {
if((!ff_core_Json.Json_isString(a_))) {
return 1
} else {
return a_.localeCompare(b_, "en")
}
}
} else {
if((ff_core_Json.Json_isArray(a_) || ff_core_Json.Json_isArray(b_))) {
if((!ff_core_Json.Json_isArray(b_))) {
return (-1)
} else {
if((!ff_core_Json.Json_isArray(a_))) {
return 1
} else {
const aLength_ = a_.length;
const bLength_ = b_.length;
let result_ = 0;
for(let for_i = 0, for_e = ff_core_Int.Int_min(aLength_, bLength_); for_i < for_e; for_i++) {
const i_ = for_i;
result_ = ff_core_Json.internalCompare_(a_[i_], b_[i_]);
if(!(result_ === 0)) break
};
if((result_ !== 0)) {
return result_
} else {
return (aLength_ - bLength_)
}
}
}
} else {
const aKeys_ = Object.keys(a_).sort();
const bKeys_ = Object.keys(b_).sort();
const keyResult_ = ff_core_Json.internalCompare_(aKeys_, bKeys_);
if((keyResult_ !== 0)) {
return keyResult_
} else {
let result_ = 0;
ff_core_JsValue.JsValue_eachWhile(aKeys_, ((key_) => {
result_ = ff_core_Json.internalCompare_(a_[key_], b_[key_]);
return (result_ === 0)
}));
return result_
}
}
}
}
}
}
}
}

export async function read_$(json_, $task) {
try {
return ff_core_Option.Some(JSON.parse(json_))
} catch {
return ff_core_Option.None()
}
}

export async function string_$(json_, $task) {
return json_
}

export async function int_$(json_, $task) {
return json_
}

export async function float_$(json_, $task) {
return json_
}

export async function bool_$(json_, $task) {
return json_
}

export async function null_$($task) {
return null
}

export async function array_$(json_, $task) {
return json_
}

export async function object_$($task) {
return {}
}

export async function new0_$($task) {
return {}
}

export async function fields_$(body_, $task) {
const result_ = {};
(await body_((async (k_, v_, $task) => {
result_[k_] = v_
}), $task));
return result_
}

export async function internalEquals_$(a_, b_, $task) {
if((a_ === b_)) {
return true
} else {
if((ff_core_JsValue.JsValue_isArray(a_) || ff_core_JsValue.JsValue_isArray(b_))) {
if(((!ff_core_JsValue.JsValue_isArray(a_)) || (!ff_core_JsValue.JsValue_isArray(b_)))) {
return false
} else {
if((a_.length !== b_.length)) {
return false
} else {
let equal_ = true;
for(let for_i = 0, for_e = a_.length; for_i < for_e; for_i++) {
const i_ = for_i;
equal_ = ff_core_Json.internalEquals_(a_[i_], b_[i_]);
if(!equal_) break
};
return equal_
}
}
} else {
if((ff_core_Json.Json_isObject(a_) && ff_core_Json.Json_isObject(b_))) {
const aKeys_ = Object.keys(a_);
const bKeys_ = Object.keys(b_);
if((aKeys_.length !== bKeys_.length)) {
return false
} else {
let equal_ = true;
ff_core_JsValue.JsValue_eachWhile(aKeys_, ((key_) => {
equal_ = (ff_core_JsValue.JsValue_hasOwn(b_, key_) && ff_core_Json.internalEquals_(a_[key_], b_[key_]));
return equal_
}));
return equal_
}
} else {
return false
}
}
}
}

export async function internalCompare_$(a_, b_, $task) {
if((a_ === b_)) {
return 0
} else {
if(((a_ === null) || (b_ === null))) {
if((a_ === null)) {
return (-1)
} else {
return 1
}
} else {
if((ff_core_Json.Json_isBool(a_) || ff_core_Json.Json_isBool(b_))) {
if(((!ff_core_Json.Json_isBool(b_)) || b_)) {
return (-1)
} else {
return 1
}
} else {
if((ff_core_Json.Json_isFloat(a_) || ff_core_Json.Json_isFloat(b_))) {
if((!ff_core_Json.Json_isFloat(b_))) {
return (-1)
} else {
if((!ff_core_Json.Json_isFloat(a_))) {
return 1
} else {
if(ff_core_JsValue.JsValue_isNan(a_)) {
if(ff_core_JsValue.JsValue_isNan(b_)) {
return 0
} else {
return (-1)
}
} else {
if(ff_core_JsValue.JsValue_isNan(b_)) {
return 1
} else {
if(ff_core_Ordering.before_(a_, b_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Nothing_Nothing)) {
return (-1)
} else {
return 1
}
}
}
}
}
} else {
if((ff_core_Json.Json_isString(a_) || ff_core_Json.Json_isString(b_))) {
if((!ff_core_Json.Json_isString(b_))) {
return (-1)
} else {
if((!ff_core_Json.Json_isString(a_))) {
return 1
} else {
return a_.localeCompare(b_, "en")
}
}
} else {
if((ff_core_Json.Json_isArray(a_) || ff_core_Json.Json_isArray(b_))) {
if((!ff_core_Json.Json_isArray(b_))) {
return (-1)
} else {
if((!ff_core_Json.Json_isArray(a_))) {
return 1
} else {
const aLength_ = a_.length;
const bLength_ = b_.length;
let result_ = 0;
for(let for_i = 0, for_e = ff_core_Int.Int_min(aLength_, bLength_); for_i < for_e; for_i++) {
const i_ = for_i;
result_ = ff_core_Json.internalCompare_(a_[i_], b_[i_]);
if(!(result_ === 0)) break
};
if((result_ !== 0)) {
return result_
} else {
return (aLength_ - bLength_)
}
}
}
} else {
const aKeys_ = Object.keys(a_).sort();
const bKeys_ = Object.keys(b_).sort();
const keyResult_ = ff_core_Json.internalCompare_(aKeys_, bKeys_);
if((keyResult_ !== 0)) {
return keyResult_
} else {
let result_ = 0;
ff_core_JsValue.JsValue_eachWhile(aKeys_, ((key_) => {
result_ = ff_core_Json.internalCompare_(a_[key_], b_[key_]);
return (result_ === 0)
}));
return result_
}
}
}
}
}
}
}
}

export function Json_write(self_, indentation_ = ff_core_Option.None()) {
return JSON.stringify(self_, null, ff_core_Js.orUndefined_(indentation_, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_String_String))
}

export function Json_with(self_, field_, value_, ff_core_Json_JsonLike$T) {
if((!ff_core_Json.Json_isObject(self_))) {
throw (new Error(("Not an object: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return {...self_, [field_]: ff_core_Json_JsonLike$T.toJson_(value_)}
}

export function Json_merge(self_, that_) {
if((!ff_core_Json.Json_isObject(self_))) {
throw (new Error(("Not an object: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
if((!ff_core_Json.Json_isObject(that_))) {
throw (new Error(("Not an object: " + ff_core_Json.Json_write(that_, ff_core_Option.None()))))
};
return ff_core_JsValue.JsValue_assign({}, self_, that_)
}

export function Json_grabString(self_) {
if((!ff_core_Json.Json_isString(self_))) {
throw (new Error(("Not a String: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export function Json_grabInt(self_) {
if((!ff_core_Json.Json_isInt(self_))) {
throw (new Error(("Not an Int: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export function Json_grabFloat(self_) {
if((!ff_core_Json.Json_isFloat(self_))) {
throw (new Error(("Not a Float: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export function Json_grabBool(self_) {
if((!ff_core_Json.Json_isBool(self_))) {
throw (new Error(("Not a Bool: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export function Json_grabArray(self_) {
if((!ff_core_Json.Json_isArray(self_))) {
throw (new Error(("Not an array: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export function Json_grabMap(self_) {
let map_ = ff_core_Map.new_();
ff_core_Json.Json_each(self_, ((key_, value_) => {
map_ = ff_core_Map.Map_add(map_, key_, value_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
return map_
}

export function Json_getString(self_) {
if(ff_core_Json.Json_isString(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabString(self_))
} else return ff_core_Option.None()
}

export function Json_getInt(self_) {
if(ff_core_Json.Json_isInt(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabInt(self_))
} else return ff_core_Option.None()
}

export function Json_getFloat(self_) {
if(ff_core_Json.Json_isFloat(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabFloat(self_))
} else return ff_core_Option.None()
}

export function Json_getBool(self_) {
if(ff_core_Json.Json_isBool(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabBool(self_))
} else return ff_core_Option.None()
}

export function Json_getArray(self_) {
if(ff_core_Json.Json_isArray(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabArray(self_))
} else return ff_core_Option.None()
}

export function Json_getMap(self_) {
if(ff_core_Json.Json_isObject(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabMap(self_))
} else return ff_core_Option.None()
}

export function Json_isString(self_) {
return ((typeof self_) === "string")
}

export function Json_isInt(self_) {
return Number.isSafeInteger(self_)
}

export function Json_isFloat(self_) {
return ((typeof self_) === "number")
}

export function Json_isBool(self_) {
return ((typeof self_) === "boolean")
}

export function Json_isArray(self_) {
return Array.isArray(self_)
}

export function Json_isObject(self_) {
return ((((typeof self_) === "object") && (!ff_core_JsValue.JsValue_isNull(self_))) && (!ff_core_JsValue.JsValue_isArray(self_)))
}

export function Json_isNull(self_) {
return ff_core_JsValue.JsValue_isNull(self_)
}

export function Json_get(self_, key_) {
return ff_core_Json.Json_field(self_, key_)
}

export function Json_field(self_, key_) {
if((ff_core_Json.Json_isObject(self_) && ff_core_JsValue.JsValue_hasOwn(self_, key_))) {
return self_[key_]
} else {
return null
}
}

export function Json_index(self_, key_) {
if(ff_core_Json.Json_isArray(self_)) {
return ff_core_JsValue.JsValue_coalesce(self_[key_], null, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_JsValue_JsValue)
} else {
return null
}
}

export function Json_hasField(self_, key_) {
return (ff_core_Json.Json_isObject(self_) && ff_core_JsValue.JsValue_hasOwn(self_, key_))
}

export function Json_getField(self_, key_) {
if(ff_core_Json.Json_hasField(self_, key_)) {
return ff_core_Option.Some(ff_core_Json.Json_get(self_, key_))
} else return ff_core_Option.None()
}

export function Json_getIndex(self_, key_) {
if((ff_core_Json.Json_isArray(self_) && (!ff_core_JsValue.JsValue_isUndefined(self_[key_])))) {
return ff_core_Option.Some(self_[key_])
} else return ff_core_Option.None()
}

export function Json_getFields(self_) {
if(ff_core_Json.Json_isObject(self_)) {
return ff_core_Option.Some(Object.keys(self_))
} else return ff_core_Option.None()
}

export function Json_grabField(self_, key_) {
return ff_core_Option.Option_else(ff_core_Json.Json_getField(self_, key_), (() => {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
}))
}

export function Json_grabIndex(self_, key_) {
return ff_core_Option.Option_else(ff_core_Json.Json_getIndex(self_, key_), (() => {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
}))
}

export function Json_grabFields(self_) {
return ff_core_Option.Option_else(ff_core_Json.Json_getFields(self_), (() => {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
}))
}

export function Json_map(self_, body_) {
const array_ = ff_core_Array.new_();
ff_core_Json.Json_each(self_, ((field_, value_) => {
array_.array.push(body_(field_, value_))
}));
return ff_core_Array.Array_drain(array_)
}

export function Json_flatMap(self_, body_) {
const array_ = ff_core_Array.new_();
ff_core_Json.Json_each(self_, ((field_, value_) => {
ff_core_Array.Array_pushList(array_, body_(field_, value_))
}));
return ff_core_Array.Array_drain(array_)
}

export function Json_each(self_, body_) {
if((!ff_core_Json.Json_isObject(self_))) {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
};
ff_core_JsValue.JsValue_each(Object.entries(self_), ((p_) => {
body_(p_[0], p_[1])
}))
}

export function Json_eachWhile(self_, body_) {
if((!ff_core_Json.Json_isObject(self_))) {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
};
ff_core_JsValue.JsValue_eachWhile(Object.entries(self_), ((p_) => {
return body_(p_[0], p_[1])
}))
}

export async function Json_write$(self_, indentation_ = ff_core_Option.None(), $task) {
return JSON.stringify(self_, null, ff_core_Js.orUndefined_(indentation_, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_String_String))
}

export async function Json_with$(self_, field_, value_, ff_core_Json_JsonLike$T, $task) {
if((!ff_core_Json.Json_isObject(self_))) {
throw (new Error(("Not an object: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return {...self_, [field_]: ff_core_Json_JsonLike$T.toJson_(value_)}
}

export async function Json_merge$(self_, that_, $task) {
if((!ff_core_Json.Json_isObject(self_))) {
throw (new Error(("Not an object: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
if((!ff_core_Json.Json_isObject(that_))) {
throw (new Error(("Not an object: " + ff_core_Json.Json_write(that_, ff_core_Option.None()))))
};
return ff_core_JsValue.JsValue_assign({}, self_, that_)
}

export async function Json_grabString$(self_, $task) {
if((!ff_core_Json.Json_isString(self_))) {
throw (new Error(("Not a String: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export async function Json_grabInt$(self_, $task) {
if((!ff_core_Json.Json_isInt(self_))) {
throw (new Error(("Not an Int: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export async function Json_grabFloat$(self_, $task) {
if((!ff_core_Json.Json_isFloat(self_))) {
throw (new Error(("Not a Float: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export async function Json_grabBool$(self_, $task) {
if((!ff_core_Json.Json_isBool(self_))) {
throw (new Error(("Not a Bool: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export async function Json_grabArray$(self_, $task) {
if((!ff_core_Json.Json_isArray(self_))) {
throw (new Error(("Not an array: " + ff_core_Json.Json_write(self_, ff_core_Option.None()))))
};
return self_
}

export async function Json_grabMap$(self_, $task) {
let map_ = ff_core_Map.new_();
ff_core_Json.Json_each(self_, ((key_, value_) => {
map_ = ff_core_Map.Map_add(map_, key_, value_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
return map_
}

export async function Json_getString$(self_, $task) {
if(ff_core_Json.Json_isString(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabString(self_))
} else return ff_core_Option.None()
}

export async function Json_getInt$(self_, $task) {
if(ff_core_Json.Json_isInt(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabInt(self_))
} else return ff_core_Option.None()
}

export async function Json_getFloat$(self_, $task) {
if(ff_core_Json.Json_isFloat(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabFloat(self_))
} else return ff_core_Option.None()
}

export async function Json_getBool$(self_, $task) {
if(ff_core_Json.Json_isBool(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabBool(self_))
} else return ff_core_Option.None()
}

export async function Json_getArray$(self_, $task) {
if(ff_core_Json.Json_isArray(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabArray(self_))
} else return ff_core_Option.None()
}

export async function Json_getMap$(self_, $task) {
if(ff_core_Json.Json_isObject(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabMap(self_))
} else return ff_core_Option.None()
}

export async function Json_isString$(self_, $task) {
return ((typeof self_) === "string")
}

export async function Json_isInt$(self_, $task) {
return Number.isSafeInteger(self_)
}

export async function Json_isFloat$(self_, $task) {
return ((typeof self_) === "number")
}

export async function Json_isBool$(self_, $task) {
return ((typeof self_) === "boolean")
}

export async function Json_isArray$(self_, $task) {
return Array.isArray(self_)
}

export async function Json_isObject$(self_, $task) {
return ((((typeof self_) === "object") && (!ff_core_JsValue.JsValue_isNull(self_))) && (!ff_core_JsValue.JsValue_isArray(self_)))
}

export async function Json_isNull$(self_, $task) {
return ff_core_JsValue.JsValue_isNull(self_)
}

export async function Json_get$(self_, key_, $task) {
return ff_core_Json.Json_field(self_, key_)
}

export async function Json_field$(self_, key_, $task) {
if((ff_core_Json.Json_isObject(self_) && ff_core_JsValue.JsValue_hasOwn(self_, key_))) {
return self_[key_]
} else {
return null
}
}

export async function Json_index$(self_, key_, $task) {
if(ff_core_Json.Json_isArray(self_)) {
return ff_core_JsValue.JsValue_coalesce(self_[key_], null, ff_core_JsValue.ff_core_JsValue_IsJsValue$ff_core_JsValue_JsValue)
} else {
return null
}
}

export async function Json_hasField$(self_, key_, $task) {
return (ff_core_Json.Json_isObject(self_) && ff_core_JsValue.JsValue_hasOwn(self_, key_))
}

export async function Json_getField$(self_, key_, $task) {
if(ff_core_Json.Json_hasField(self_, key_)) {
return ff_core_Option.Some(ff_core_Json.Json_get(self_, key_))
} else return ff_core_Option.None()
}

export async function Json_getIndex$(self_, key_, $task) {
if((ff_core_Json.Json_isArray(self_) && (!ff_core_JsValue.JsValue_isUndefined(self_[key_])))) {
return ff_core_Option.Some(self_[key_])
} else return ff_core_Option.None()
}

export async function Json_getFields$(self_, $task) {
if(ff_core_Json.Json_isObject(self_)) {
return ff_core_Option.Some(Object.keys(self_))
} else return ff_core_Option.None()
}

export async function Json_grabField$(self_, key_, $task) {
return ff_core_Option.Option_else(ff_core_Json.Json_getField(self_, key_), (() => {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
}))
}

export async function Json_grabIndex$(self_, key_, $task) {
return ff_core_Option.Option_else(ff_core_Json.Json_getIndex(self_, key_), (() => {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
}))
}

export async function Json_grabFields$(self_, $task) {
return ff_core_Option.Option_else(ff_core_Json.Json_getFields(self_), (() => {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
}))
}

export async function Json_map$(self_, body_, $task) {
const array_ = ff_core_Array.new_();
(await ff_core_Json.Json_each$(self_, (async (field_, value_, $task) => {
array_.array.push((await body_(field_, value_, $task)))
}), $task));
return ff_core_Array.Array_drain(array_)
}

export async function Json_flatMap$(self_, body_, $task) {
const array_ = ff_core_Array.new_();
(await ff_core_Json.Json_each$(self_, (async (field_, value_, $task) => {
ff_core_Array.Array_pushList(array_, (await body_(field_, value_, $task)))
}), $task));
return ff_core_Array.Array_drain(array_)
}

export async function Json_each$(self_, body_, $task) {
if((!ff_core_Json.Json_isObject(self_))) {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
};
(await ff_core_JsValue.JsValue_each$(Object.entries(self_), (async (p_, $task) => {
(await body_(p_[0], p_[1], $task))
}), $task))
}

export async function Json_eachWhile$(self_, body_, $task) {
if((!ff_core_Json.Json_isObject(self_))) {
{
const _exception = ff_core_Core.GrabException(); 
throw Object.assign(new Error(ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}
};
(await ff_core_JsValue.JsValue_eachWhile$(Object.entries(self_), (async (p_, $task) => {
return (await body_(p_[0], p_[1], $task))
}), $task))
}

export const ff_core_Json_JsonLike$ff_core_Json_Json = {
toJson_(value_) {
return value_
},
fromJson_(json_) {
return ff_core_Option.Some(json_)
},
async toJson_$(value_, $task) {
return value_
},
async fromJson_$(json_, $task) {
return ff_core_Option.Some(json_)
},
};

export const ff_core_Json_JsonLike$ff_core_String_String = {
toJson_(value_) {
return value_
},
fromJson_(json_) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getString(_w1)
}
},
async toJson_$(value_, $task) {
return value_
},
async fromJson_$(json_, $task) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getString(_w1)
}
},
};

export const ff_core_Json_JsonLike$ff_core_Int_Int = {
toJson_(value_) {
return value_
},
fromJson_(json_) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getInt(_w1)
}
},
async toJson_$(value_, $task) {
return value_
},
async fromJson_$(json_, $task) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getInt(_w1)
}
},
};

export const ff_core_Json_JsonLike$ff_core_Float_Float = {
toJson_(value_) {
return value_
},
fromJson_(json_) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getFloat(_w1)
}
},
async toJson_$(value_, $task) {
return value_
},
async fromJson_$(json_, $task) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getFloat(_w1)
}
},
};

export const ff_core_Json_JsonLike$ff_core_Bool_Bool = {
toJson_(value_) {
return value_
},
fromJson_(json_) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getBool(_w1)
}
},
async toJson_$(value_, $task) {
return value_
},
async fromJson_$(json_, $task) {
const json_a = json_;
{
const _w1 = json_a;
return ff_core_Json.Json_getBool(_w1)
}
},
};

export function ff_core_Json_JsonLike$ff_core_List_List(ff_core_Json_JsonLike$T) { return {
toJson_(value_) {
return ff_core_List.List_map(value_, ((value_) => {
return ff_core_Json_JsonLike$T.toJson_(value_)
}))
},
fromJson_(json_) {
return ff_core_Option.Option_flatMap(ff_core_Json.Json_getArray(json_), ((array_) => {
let convertible_ = true;
const result_ = ff_core_Array.new_();
for(let for_a = array_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const item_ = for_a[for_i];
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(item_);
if(_1.None) {
convertible_ = false
break
}
{
const value_ = _1.value_;
result_.array.push(value_)
}
} while(false);
if(!convertible_) break
};
if(convertible_) {
return ff_core_Option.Some(ff_core_Array.Array_drain(result_))
} else return ff_core_Option.None()
}))
},
async toJson_$(value_, $task) {
return ff_core_List.List_map(value_, ((value_) => {
return ff_core_Json_JsonLike$T.toJson_(value_)
}))
},
async fromJson_$(json_, $task) {
return ff_core_Option.Option_flatMap(ff_core_Json.Json_getArray(json_), ((array_) => {
let convertible_ = true;
const result_ = ff_core_Array.new_();
for(let for_a = array_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const item_ = for_a[for_i];
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(item_);
if(_1.None) {
convertible_ = false
break
}
{
const value_ = _1.value_;
result_.array.push(value_)
}
} while(false);
if(!convertible_) break
};
if(convertible_) {
return ff_core_Option.Some(ff_core_Array.Array_drain(result_))
} else return ff_core_Option.None()
}))
},
}}

export function ff_core_Json_JsonLike$ff_core_StringMap_StringMap(ff_core_Json_JsonLike$T) { return {
toJson_(value_) {
return ff_core_Json.fields_(((setField_) => {
ff_core_StringMap.StringMap_each(value_, ((key_, value_) => {
setField_(key_, ff_core_Json_JsonLike$T.toJson_(value_))
}))
}))
},
fromJson_(json_) {
return ff_core_Option.Option_flatten((ff_core_Json.Json_isObject(json_)
? ff_core_Option.Some((function() {
const map_ = ff_core_StringMap.new_();
let convertible_ = true;
ff_core_Json.Json_eachWhile(json_, ((key_, value_) => {
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(value_);
if(_1.None) {
convertible_ = false
break
}
{
const v_ = _1.value_;
ff_core_StringMap.StringMap_set(map_, key_, v_)
}
} while(false);
return convertible_
}));
if(convertible_) {
return ff_core_Option.Some(map_)
} else return ff_core_Option.None()
})())
: ff_core_Option.None()))
},
async toJson_$(value_, $task) {
return ff_core_Json.fields_(((setField_) => {
ff_core_StringMap.StringMap_each(value_, ((key_, value_) => {
setField_(key_, ff_core_Json_JsonLike$T.toJson_(value_))
}))
}))
},
async fromJson_$(json_, $task) {
return ff_core_Option.Option_flatten((ff_core_Json.Json_isObject(json_)
? ff_core_Option.Some((await (async function() {
const map_ = ff_core_StringMap.new_();
let convertible_ = true;
ff_core_Json.Json_eachWhile(json_, ((key_, value_) => {
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(value_);
if(_1.None) {
convertible_ = false
break
}
{
const v_ = _1.value_;
ff_core_StringMap.StringMap_set(map_, key_, v_)
}
} while(false);
return convertible_
}));
if(convertible_) {
return ff_core_Option.Some(map_)
} else return ff_core_Option.None()
})()))
: ff_core_Option.None()))
},
}}

export const ff_core_Any_HasAnyTag$ff_core_Json_Json = {
anyTag_() {
return ff_core_Any.internalAnyTag_("ff:core/Json.Json[]")
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_("ff:core/Json.Json[]")
},
};

export const ff_core_Show_Show$ff_core_Json_Json = {
show_(value_) {
return ff_core_Json.Json_write(value_, ff_core_Option.Some("    "))
},
async show_$(value_, $task) {
return ff_core_Json.Json_write(value_, ff_core_Option.Some("    "))
},
};

export const ff_core_Equal_Equal$ff_core_Json_Json = {
equals_(a_, b_) {
return ff_core_Json.internalEquals_(a_, b_)
},
async equals_$(a_, b_, $task) {
return ff_core_Json.internalEquals_(a_, b_)
},
};

export const ff_core_Ordering_Order$ff_core_Json_Json = {
compare_(a_, b_) {
return ff_core_Ordering.fromInt_(ff_core_Json.internalCompare_(a_, b_))
},
async compare_$(a_, b_, $task) {
return ff_core_Ordering.fromInt_(ff_core_Json.internalCompare_(a_, b_))
},
};

export const ff_core_Serializable_Serializable$ff_core_Json_Json = {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, ff_core_Json.Json_write(value_, ff_core_Option.None()))
},
deserializeUsing_(serialization_) {
return ff_core_Option.Option_grab(ff_core_Json.read_(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_)))
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, ff_core_Json.Json_write(value_, ff_core_Option.None()))
},
async deserializeUsing_$(serialization_, $task) {
return ff_core_Option.Option_grab(ff_core_Json.read_(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_)))
},
};


//# sourceMappingURL=Json.mjs.map