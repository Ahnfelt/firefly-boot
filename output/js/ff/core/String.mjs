

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

// type String








export function String_size(self_) {
return self_.length
}

export function String_grab(self_, index_) {
if(((index_ < 0) || (index_ >= self_.length))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
return self_.charCodeAt(index_)
}

export function String_replace(self_, needle_, replacement_) {
return self_.replaceAll(needle_, replacement_)
}

export function String_replaceFirst(self_, needle_, replacement_) {
return self_.replace(needle_, replacement_)
}

export function String_reverse(self_) {
return self_.split("").reverse().join("")
}

export function String_repeat(self_, count_) {
return self_.repeat(count_)
}

export function String_trim(self_) {
return self_.trim()
}

export function String_trimStart(self_) {
return self_.trimStart()
}

export function String_trimEnd(self_) {
return self_.trimEnd()
}

export function String_lower(self_) {
return self_.toLowerCase()
}

export function String_upper(self_) {
return self_.toUpperCase()
}

export function String_dropWhile(self_, p_) {
let i_ = 0;
while(((i_ < self_.length) && p_(self_.charCodeAt(i_)))) {
i_ += 1
};
return self_.slice(i_)
}

export function String_takeWhile(self_, p_) {
let i_ = 0;
while(((i_ < self_.length) && p_(self_.charCodeAt(i_)))) {
i_ += 1
};
return self_.slice(0, i_)
}

export function String_slice(self_, from_, until_) {
return self_.slice(from_, until_)
}

export function String_split(self_, char_) {
return self_.split(String.fromCharCode(char_))
}

export function String_splitFirst(self_, char_) {
const array_ = self_.split(String.fromCharCode(char_), 2);
if((array_.length === 2)) {
return ff_core_Option.Some(ff_core_Pair.Pair(array_[0], array_[1]))
} else return ff_core_Option.None()
}

export function String_lines(self_) {
return self_.split((new RegExp((((("[" + String.fromCharCode(13)) + "]?[") + String.fromCharCode(10)) + "]"), "g")))
}

export function String_dropFirst(self_, count_ = 1) {
return self_.slice(count_)
}

export function String_dropLast(self_, count_ = 1) {
return self_.slice(0, (self_.length - count_))
}

export function String_getInt(self_) {
if(((self_.length > 0) && ff_core_String.String_all(self_, ((c_) => {
return ((48 <= c_) && (c_ <= 57))
})))) {
return ff_core_Option.Some(parseInt(self_, 10))
} else return ff_core_Option.None()
}

export function String_getFloat(self_) {
const result_ = parseFloat(self_, 10);
if(isFinite(result_)) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export function String_grabInt(self_) {
return ff_core_Option.Option_else(ff_core_String.String_getInt(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export function String_grabFloat(self_) {
return ff_core_Option.Option_else(ff_core_String.String_getFloat(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export function String_first(self_) {
if((self_.length > 0)) {
return ff_core_Option.Some(self_.charCodeAt(0))
} else return ff_core_Option.None()
}

export function String_last(self_) {
if((self_.length > 0)) {
return ff_core_Option.Some(self_.charCodeAt((self_.length - 1)))
} else return ff_core_Option.None()
}

export function String_grabFirst(self_) {
return ff_core_Option.Option_else(ff_core_String.String_first(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export function String_grabLast(self_) {
return ff_core_Option.Option_else(ff_core_String.String_last(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export function String_contains(self_, substring_) {
return self_.includes(substring_)
}

export function String_startsWith(self_, prefix_, offset_ = 0) {
return self_.startsWith(prefix_, offset_)
}

export function String_endsWith(self_, prefix_) {
return self_.endsWith(prefix_)
}

export function String_removeFirst(self_, prefix_) {
if(ff_core_String.String_startsWith(self_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_String.String_dropFirst(self_, prefix_.length))
} else {
return ff_core_Option.None()
}
}

export function String_removeLast(self_, suffix_) {
if(ff_core_String.String_endsWith(self_, suffix_)) {
return ff_core_Option.Some(ff_core_String.String_dropLast(self_, suffix_.length))
} else {
return ff_core_Option.None()
}
}

export function String_padStart(self_, length_, padding_ = " ") {
return self_.padStart(length_, padding_)
}

export function String_padEnd(self_, length_, padding_ = " ") {
return self_.padEnd(length_, padding_)
}

export function String_each(self_, body_) {
let i_ = 0;
while((i_ < self_.length)) {
body_(self_.charCodeAt(i_));
i_ += 1
}
}

export function String_eachWhile(self_, body_) {
let i_ = 0;
while((i_ < self_.length)) {
if(body_(self_.charCodeAt(i_))) {
i_ += 1
} else {
i_ = self_.length
}
}
}

export function String_all(self_, body_) {
let result_ = true;
ff_core_String.String_eachWhile(self_, ((x_) => {
result_ = body_(x_);
return result_
}));
return result_
}

export function String_any(self_, body_) {
let result_ = false;
ff_core_String.String_eachWhile(self_, ((x_) => {
result_ = body_(x_);
return (!result_)
}));
return result_
}

export function String_find(self_, body_) {
let result_ = ff_core_Option.None();
ff_core_String.String_eachWhile(self_, ((x_) => {
if(body_(x_)) {
result_ = ff_core_Option.Some(x_);
return false
} else {
return true
}
}));
return result_
}

export function String_indexOf(self_, needle_, position_ = 0) {
const index_ = self_.indexOf(needle_, position_);
if((index_ !== (-1))) {
return ff_core_Option.Some(index_)
} else return ff_core_Option.None()
}

export function String_indexWhere(self_, body_) {
let i_ = (-1);
let result_ = false;
ff_core_String.String_eachWhile(self_, ((x_) => {
i_ += 1;
result_ = body_(x_);
return (!result_)
}));
if(result_) {
return ff_core_Option.Some(i_)
} else return ff_core_Option.None()
}

export function String_filter(self_, body_) {
const result_ = ff_core_Array.new_();
ff_core_String.String_each(self_, ((x_) => {
if(body_(x_)) {
result_.array.push(ff_core_Char.Char_toString(x_))
}
}));
return ff_core_Array.Array_join(result_, "")
}

export function String_toBuffer(self_) {
const encoded_ = (new TextEncoder()).encode(self_);
return (new DataView(encoded_.buffer, encoded_.byteOffset, encoded_.byteLength))
}

export async function String_size$(self_, $task) {
return self_.length
}

export async function String_grab$(self_, index_, $task) {
if(((index_ < 0) || (index_ >= self_.length))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
return self_.charCodeAt(index_)
}

export async function String_replace$(self_, needle_, replacement_, $task) {
return self_.replaceAll(needle_, replacement_)
}

export async function String_replaceFirst$(self_, needle_, replacement_, $task) {
return self_.replace(needle_, replacement_)
}

export async function String_reverse$(self_, $task) {
return self_.split("").reverse().join("")
}

export async function String_repeat$(self_, count_, $task) {
return self_.repeat(count_)
}

export async function String_trim$(self_, $task) {
return self_.trim()
}

export async function String_trimStart$(self_, $task) {
return self_.trimStart()
}

export async function String_trimEnd$(self_, $task) {
return self_.trimEnd()
}

export async function String_lower$(self_, $task) {
return self_.toLowerCase()
}

export async function String_upper$(self_, $task) {
return self_.toUpperCase()
}

export async function String_dropWhile$(self_, p_, $task) {
let i_ = 0;
while(((i_ < self_.length) && (await p_(self_.charCodeAt(i_), $task)))) {
i_ += 1
};
return self_.slice(i_)
}

export async function String_takeWhile$(self_, p_, $task) {
let i_ = 0;
while(((i_ < self_.length) && (await p_(self_.charCodeAt(i_), $task)))) {
i_ += 1
};
return self_.slice(0, i_)
}

export async function String_slice$(self_, from_, until_, $task) {
return self_.slice(from_, until_)
}

export async function String_split$(self_, char_, $task) {
return self_.split(String.fromCharCode(char_))
}

export async function String_splitFirst$(self_, char_, $task) {
const array_ = self_.split(String.fromCharCode(char_), 2);
if((array_.length === 2)) {
return ff_core_Option.Some(ff_core_Pair.Pair(array_[0], array_[1]))
} else return ff_core_Option.None()
}

export async function String_lines$(self_, $task) {
return self_.split((new RegExp((((("[" + String.fromCharCode(13)) + "]?[") + String.fromCharCode(10)) + "]"), "g")))
}

export async function String_dropFirst$(self_, count_ = 1, $task) {
return self_.slice(count_)
}

export async function String_dropLast$(self_, count_ = 1, $task) {
return self_.slice(0, (self_.length - count_))
}

export async function String_getInt$(self_, $task) {
if(((self_.length > 0) && ff_core_String.String_all(self_, ((c_) => {
return ((48 <= c_) && (c_ <= 57))
})))) {
return ff_core_Option.Some(parseInt(self_, 10))
} else return ff_core_Option.None()
}

export async function String_getFloat$(self_, $task) {
const result_ = parseFloat(self_, 10);
if(isFinite(result_)) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export async function String_grabInt$(self_, $task) {
return ff_core_Option.Option_else(ff_core_String.String_getInt(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export async function String_grabFloat$(self_, $task) {
return ff_core_Option.Option_else(ff_core_String.String_getFloat(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export async function String_first$(self_, $task) {
if((self_.length > 0)) {
return ff_core_Option.Some(self_.charCodeAt(0))
} else return ff_core_Option.None()
}

export async function String_last$(self_, $task) {
if((self_.length > 0)) {
return ff_core_Option.Some(self_.charCodeAt((self_.length - 1)))
} else return ff_core_Option.None()
}

export async function String_grabFirst$(self_, $task) {
return ff_core_Option.Option_else(ff_core_String.String_first(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export async function String_grabLast$(self_, $task) {
return ff_core_Option.Option_else(ff_core_String.String_last(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export async function String_contains$(self_, substring_, $task) {
return self_.includes(substring_)
}

export async function String_startsWith$(self_, prefix_, offset_ = 0, $task) {
return self_.startsWith(prefix_, offset_)
}

export async function String_endsWith$(self_, prefix_, $task) {
return self_.endsWith(prefix_)
}

export async function String_removeFirst$(self_, prefix_, $task) {
if(ff_core_String.String_startsWith(self_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_String.String_dropFirst(self_, prefix_.length))
} else {
return ff_core_Option.None()
}
}

export async function String_removeLast$(self_, suffix_, $task) {
if(ff_core_String.String_endsWith(self_, suffix_)) {
return ff_core_Option.Some(ff_core_String.String_dropLast(self_, suffix_.length))
} else {
return ff_core_Option.None()
}
}

export async function String_padStart$(self_, length_, padding_ = " ", $task) {
return self_.padStart(length_, padding_)
}

export async function String_padEnd$(self_, length_, padding_ = " ", $task) {
return self_.padEnd(length_, padding_)
}

export async function String_each$(self_, body_, $task) {
let i_ = 0;
while((i_ < self_.length)) {
(await body_(self_.charCodeAt(i_), $task));
i_ += 1
}
}

export async function String_eachWhile$(self_, body_, $task) {
let i_ = 0;
while((i_ < self_.length)) {
if((await body_(self_.charCodeAt(i_), $task))) {
i_ += 1
} else {
i_ = self_.length
}
}
}

export async function String_all$(self_, body_, $task) {
let result_ = true;
(await ff_core_String.String_eachWhile$(self_, (async (x_, $task) => {
result_ = (await body_(x_, $task));
return result_
}), $task));
return result_
}

export async function String_any$(self_, body_, $task) {
let result_ = false;
(await ff_core_String.String_eachWhile$(self_, (async (x_, $task) => {
result_ = (await body_(x_, $task));
return (!result_)
}), $task));
return result_
}

export async function String_find$(self_, body_, $task) {
let result_ = ff_core_Option.None();
(await ff_core_String.String_eachWhile$(self_, (async (x_, $task) => {
if((await body_(x_, $task))) {
result_ = ff_core_Option.Some(x_);
return false
} else {
return true
}
}), $task));
return result_
}

export async function String_indexOf$(self_, needle_, position_ = 0, $task) {
const index_ = self_.indexOf(needle_, position_);
if((index_ !== (-1))) {
return ff_core_Option.Some(index_)
} else return ff_core_Option.None()
}

export async function String_indexWhere$(self_, body_, $task) {
let i_ = (-1);
let result_ = false;
(await ff_core_String.String_eachWhile$(self_, (async (x_, $task) => {
i_ += 1;
result_ = (await body_(x_, $task));
return (!result_)
}), $task));
if(result_) {
return ff_core_Option.Some(i_)
} else return ff_core_Option.None()
}

export async function String_filter$(self_, body_, $task) {
const result_ = ff_core_Array.new_();
(await ff_core_String.String_each$(self_, (async (x_, $task) => {
if((await body_(x_, $task))) {
result_.array.push(ff_core_Char.Char_toString(x_))
}
}), $task));
return ff_core_Array.Array_join(result_, "")
}

export async function String_toBuffer$(self_, $task) {
const encoded_ = (new TextEncoder()).encode(self_);
return (new DataView(encoded_.buffer, encoded_.byteOffset, encoded_.byteLength))
}

export const ff_core_Any_HasAnyTag$ff_core_String_String = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/String.String" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/String.String" + "[") + "]"))
}
};
