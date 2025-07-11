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

// type Buffer


export function new_(size_, shared_ = false) {
return (new DataView((shared_
? (new SharedArrayBuffer(size_))
: (new ArrayBuffer(size_)))))
}

export function fromByteList_(array_) {
return (new DataView((new Uint8Array(array_)).buffer))
}

export function fromBufferList_(array_) {
let length_ = 0;
for(let for_a = array_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
length_ += _w1.byteLength
};
const arrayBuffer_ = (new ArrayBuffer(length_));
const result_ = (new Uint8Array(arrayBuffer_));
let offset_ = 0;
for(let for_a = array_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const b_ = for_a[for_i];
result_.set((new Uint8Array(b_.buffer, b_.byteOffset, b_.byteLength)), offset_);
offset_ += b_.byteLength
};
return (new DataView(arrayBuffer_))
}

export function fromHex_(hex_) {
const byteCount_ = ff_core_Float.Float_toInt(ff_core_Float.Float_ceil((hex_.length * 0.5)));
const arrayBuffer_ = (new ArrayBuffer(byteCount_));
const result_ = (new Uint8Array(arrayBuffer_));
for(let for_i = 0, for_e = byteCount_; for_i < for_e; for_i++) {
const i_ = for_i;
result_[i_] = parseInt(hex_.slice((i_ * 2), ((i_ * 2) + 2)), 16)
};
return (new DataView(arrayBuffer_))
}

export function fromBase64_(base64_) {
const binaryString_ = atob(base64_);
const bytes_ = Uint8Array.from(binaryString_, ((char_) => {
return char_.codePointAt(0)
}));
return (new DataView(bytes_.buffer))
}

export function fromLetter16_(letters_) {
const buffer_ = ff_core_Buffer.new_((letters_.length >>> 1), false);
for(let for_i = 0, for_e = ff_core_Buffer.Buffer_size(buffer_); for_i < for_e; for_i++) {
const i_ = for_i;
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Int.Int_bitOr(ff_core_Int.Int_bitLeft(((ff_core_String.String_grab(letters_, ff_core_Int.Int_bitLeft(i_, 1)) & 0x1f) - 0x8), 4), ((ff_core_String.String_grab(letters_, ff_core_Int.Int_bitOr(ff_core_Int.Int_bitLeft(i_, 1), 1)) & 0x1f) - 0x8)))
};
return buffer_
}

export async function new_$(size_, shared_ = false, $task) {
return (new DataView((shared_
? (new SharedArrayBuffer(size_))
: (new ArrayBuffer(size_)))))
}

export async function fromByteList_$(array_, $task) {
return (new DataView((new Uint8Array(array_)).buffer))
}

export async function fromBufferList_$(array_, $task) {
let length_ = 0;
for(let for_a = array_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
length_ += _w1.byteLength
};
const arrayBuffer_ = (new ArrayBuffer(length_));
const result_ = (new Uint8Array(arrayBuffer_));
let offset_ = 0;
for(let for_a = array_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const b_ = for_a[for_i];
result_.set((new Uint8Array(b_.buffer, b_.byteOffset, b_.byteLength)), offset_);
offset_ += b_.byteLength
};
return (new DataView(arrayBuffer_))
}

export async function fromHex_$(hex_, $task) {
const byteCount_ = ff_core_Float.Float_toInt(ff_core_Float.Float_ceil((hex_.length * 0.5)));
const arrayBuffer_ = (new ArrayBuffer(byteCount_));
const result_ = (new Uint8Array(arrayBuffer_));
for(let for_i = 0, for_e = byteCount_; for_i < for_e; for_i++) {
const i_ = for_i;
result_[i_] = parseInt(hex_.slice((i_ * 2), ((i_ * 2) + 2)), 16)
};
return (new DataView(arrayBuffer_))
}

export async function fromBase64_$(base64_, $task) {
const binaryString_ = atob(base64_);
const bytes_ = Uint8Array.from(binaryString_, ((char_) => {
return char_.codePointAt(0)
}));
return (new DataView(bytes_.buffer))
}

export async function fromLetter16_$(letters_, $task) {
const buffer_ = ff_core_Buffer.new_((letters_.length >>> 1), false);
for(let for_i = 0, for_e = ff_core_Buffer.Buffer_size(buffer_); for_i < for_e; for_i++) {
const i_ = for_i;
ff_core_Buffer.Buffer_setUint8(buffer_, i_, ff_core_Int.Int_bitOr(ff_core_Int.Int_bitLeft(((ff_core_String.String_grab(letters_, ff_core_Int.Int_bitLeft(i_, 1)) & 0x1f) - 0x8), 4), ((ff_core_String.String_grab(letters_, ff_core_Int.Int_bitOr(ff_core_Int.Int_bitLeft(i_, 1), 1)) & 0x1f) - 0x8)))
};
return buffer_
}

export function Buffer_grabUint64(self_, byteOffset_, littleEndian_ = true) {
const high_ = self_.getUint32((byteOffset_ + (littleEndian_
? 4
: 0)), littleEndian_);
const low_ = self_.getUint32((byteOffset_ + (littleEndian_
? 0
: 4)), littleEndian_);
const result_ = ((high_ * 0x100000000) + low_);
if((!Number.isSafeInteger(result_))) {
throw ff_core_Js.initializeError_(ff_core_Core.GrabException(), new Error(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
return result_
}

export function Buffer_grabInt64(self_, byteOffset_, littleEndian_ = true) {
const high_ = self_.getInt32((byteOffset_ + (littleEndian_
? 4
: 0)), littleEndian_);
const low_ = self_.getUint32((byteOffset_ + (littleEndian_
? 0
: 4)), littleEndian_);
const result_ = ((high_ * 0x100000000) + low_);
if((!Number.isSafeInteger(result_))) {
throw ff_core_Js.initializeError_(ff_core_Core.GrabException(), new Error(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
return result_
}

export function Buffer_grabFloat32(self_, byteOffset_, littleEndian_ = true) {
return self_.getFloat32(byteOffset_, littleEndian_)
}

export function Buffer_grabFloat64(self_, byteOffset_, littleEndian_ = true) {
return self_.getFloat64(byteOffset_, littleEndian_)
}

export function Buffer_grabInt16(self_, byteOffset_, littleEndian_ = true) {
return self_.getInt16(byteOffset_, littleEndian_)
}

export function Buffer_grabInt32(self_, byteOffset_, littleEndian_ = true) {
return self_.getInt32(byteOffset_, littleEndian_)
}

export function Buffer_grabInt8(self_, byteOffset_) {
return self_.getInt8(byteOffset_)
}

export function Buffer_grabUint16(self_, byteOffset_, littleEndian_ = true) {
return self_.getUint16(byteOffset_, littleEndian_)
}

export function Buffer_grabUint32(self_, byteOffset_, littleEndian_ = true) {
return self_.getUint32(byteOffset_, littleEndian_)
}

export function Buffer_grabUint8(self_, byteOffset_) {
return self_.getUint8(byteOffset_)
}

export function Buffer_setUint64(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setUint32((byteOffset_ + (littleEndian_
? 4
: 0)), ((value_ >>> 16) >>> 16), littleEndian_);
self_.setUint32((byteOffset_ + (littleEndian_
? 0
: 4)), (value_ & 0xffffffff), littleEndian_)
}

export function Buffer_setInt64(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setUint32((byteOffset_ + (littleEndian_
? 4
: 0)), ((value_ >> 16) >> 16), littleEndian_);
self_.setUint32((byteOffset_ + (littleEndian_
? 0
: 4)), (value_ & 0xffffffff), littleEndian_)
}

export function Buffer_setFloat32(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setFloat32(byteOffset_, value_, littleEndian_)
}

export function Buffer_setFloat64(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setFloat64(byteOffset_, value_, littleEndian_)
}

export function Buffer_setInt16(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setInt16(byteOffset_, value_, littleEndian_)
}

export function Buffer_setInt32(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setInt32(byteOffset_, value_, littleEndian_)
}

export function Buffer_setInt8(self_, byteOffset_, value_) {
self_.setInt8(byteOffset_, value_)
}

export function Buffer_setUint16(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setUint16(byteOffset_, value_, littleEndian_)
}

export function Buffer_setUint32(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setUint32(byteOffset_, value_, littleEndian_)
}

export function Buffer_setUint8(self_, byteOffset_, value_) {
self_.setUint8(byteOffset_, value_)
}

export function Buffer_setAll(self_, byteOffset_, buffer_) {
const sourceBuffer_ = (new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength));
const targetBuffer_ = (new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength));
targetBuffer_.set(sourceBuffer_, byteOffset_)
}

export function Buffer_size(self_) {
return self_.byteLength
}

export function Buffer_shared(self_) {
return (((typeof SharedArrayBuffer) !== "undefined") && (self_.buffer instanceof SharedArrayBuffer))
}

export function Buffer_view(self_, begin_, end_) {
return (new DataView(self_.buffer, (self_.byteOffset + begin_), (end_ - begin_)))
}

export function Buffer_copy(self_) {
return (new DataView(self_.buffer.slice(self_.byteOffset, (self_.byteOffset + self_.byteLength))))
}

export function Buffer_toString(self_, encoding_ = "utf8") {
if((encoding_ === "utf8")) {
if(((typeof TextDecoder.ffSingleton) === "undefined")) {
TextDecoder.ffSingleton = (new TextDecoder())
};
return TextDecoder.ffSingleton.decode(self_)
} else {
return (new TextDecoder()).decode(self_)
}
}

export function Buffer_toByteList(self_) {
return [...(new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength))]
}

export function Buffer_toHex(self_) {
let hex_ = "";
for(let for_i = 0, for_e = self_.byteLength; for_i < for_e; for_i++) {
const i_ = for_i;
hex_ = (hex_ + self_.getUint8(i_).toString(16).padStart(2, "0"))
};
return hex_
}

export function Buffer_toBase64(self_) {
const view_ = (new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength));
const binaryString_ = Array.from(view_, ((byte_) => {
return String.fromCodePoint(byte_)
})).join("");
return btoa(binaryString_)
}

export function Buffer_toLetter16(self_) {
const result_ = ff_core_Buffer.new_(ff_core_Int.Int_bitLeft(ff_core_Buffer.Buffer_size(self_), 1), false);
for(let for_i = 0, for_e = ff_core_Buffer.Buffer_size(self_); for_i < for_e; for_i++) {
const i_ = for_i;
const b_ = ff_core_Buffer.Buffer_grabUint8(self_, i_);
ff_core_Buffer.Buffer_setUint16(result_, ff_core_Int.Int_bitLeft(i_, 1), ff_core_Int.Int_bitOr((((b_ >>> 4) & 0xf) + 0x68), ff_core_Int.Int_bitLeft(((b_ & 0xf) + 0x68), 8)), true)
};
return ff_core_Buffer.Buffer_toString(result_, "utf8")
}

export async function Buffer_grabUint64$(self_, byteOffset_, littleEndian_ = true, $task) {
const high_ = self_.getUint32((byteOffset_ + (littleEndian_
? 4
: 0)), littleEndian_);
const low_ = self_.getUint32((byteOffset_ + (littleEndian_
? 0
: 4)), littleEndian_);
const result_ = ((high_ * 0x100000000) + low_);
if((!Number.isSafeInteger(result_))) {
throw ff_core_Js.initializeError_(ff_core_Core.GrabException(), new Error(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
return result_
}

export async function Buffer_grabInt64$(self_, byteOffset_, littleEndian_ = true, $task) {
const high_ = self_.getInt32((byteOffset_ + (littleEndian_
? 4
: 0)), littleEndian_);
const low_ = self_.getUint32((byteOffset_ + (littleEndian_
? 0
: 4)), littleEndian_);
const result_ = ((high_ * 0x100000000) + low_);
if((!Number.isSafeInteger(result_))) {
throw ff_core_Js.initializeError_(ff_core_Core.GrabException(), new Error(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
return result_
}

export async function Buffer_grabFloat32$(self_, byteOffset_, littleEndian_ = true, $task) {
return self_.getFloat32(byteOffset_, littleEndian_)
}

export async function Buffer_grabFloat64$(self_, byteOffset_, littleEndian_ = true, $task) {
return self_.getFloat64(byteOffset_, littleEndian_)
}

export async function Buffer_grabInt16$(self_, byteOffset_, littleEndian_ = true, $task) {
return self_.getInt16(byteOffset_, littleEndian_)
}

export async function Buffer_grabInt32$(self_, byteOffset_, littleEndian_ = true, $task) {
return self_.getInt32(byteOffset_, littleEndian_)
}

export async function Buffer_grabInt8$(self_, byteOffset_, $task) {
return self_.getInt8(byteOffset_)
}

export async function Buffer_grabUint16$(self_, byteOffset_, littleEndian_ = true, $task) {
return self_.getUint16(byteOffset_, littleEndian_)
}

export async function Buffer_grabUint32$(self_, byteOffset_, littleEndian_ = true, $task) {
return self_.getUint32(byteOffset_, littleEndian_)
}

export async function Buffer_grabUint8$(self_, byteOffset_, $task) {
return self_.getUint8(byteOffset_)
}

export async function Buffer_setUint64$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setUint32((byteOffset_ + (littleEndian_
? 4
: 0)), ((value_ >>> 16) >>> 16), littleEndian_);
self_.setUint32((byteOffset_ + (littleEndian_
? 0
: 4)), (value_ & 0xffffffff), littleEndian_)
}

export async function Buffer_setInt64$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setUint32((byteOffset_ + (littleEndian_
? 4
: 0)), ((value_ >> 16) >> 16), littleEndian_);
self_.setUint32((byteOffset_ + (littleEndian_
? 0
: 4)), (value_ & 0xffffffff), littleEndian_)
}

export async function Buffer_setFloat32$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setFloat32(byteOffset_, value_, littleEndian_)
}

export async function Buffer_setFloat64$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setFloat64(byteOffset_, value_, littleEndian_)
}

export async function Buffer_setInt16$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setInt16(byteOffset_, value_, littleEndian_)
}

export async function Buffer_setInt32$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setInt32(byteOffset_, value_, littleEndian_)
}

export async function Buffer_setInt8$(self_, byteOffset_, value_, $task) {
self_.setInt8(byteOffset_, value_)
}

export async function Buffer_setUint16$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setUint16(byteOffset_, value_, littleEndian_)
}

export async function Buffer_setUint32$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
self_.setUint32(byteOffset_, value_, littleEndian_)
}

export async function Buffer_setUint8$(self_, byteOffset_, value_, $task) {
self_.setUint8(byteOffset_, value_)
}

export async function Buffer_setAll$(self_, byteOffset_, buffer_, $task) {
const sourceBuffer_ = (new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength));
const targetBuffer_ = (new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength));
targetBuffer_.set(sourceBuffer_, byteOffset_)
}

export async function Buffer_size$(self_, $task) {
return self_.byteLength
}

export async function Buffer_shared$(self_, $task) {
return (((typeof SharedArrayBuffer) !== "undefined") && (self_.buffer instanceof SharedArrayBuffer))
}

export async function Buffer_view$(self_, begin_, end_, $task) {
return (new DataView(self_.buffer, (self_.byteOffset + begin_), (end_ - begin_)))
}

export async function Buffer_copy$(self_, $task) {
return (new DataView(self_.buffer.slice(self_.byteOffset, (self_.byteOffset + self_.byteLength))))
}

export async function Buffer_toString$(self_, encoding_ = "utf8", $task) {
if((encoding_ === "utf8")) {
if(((typeof TextDecoder.ffSingleton) === "undefined")) {
TextDecoder.ffSingleton = (new TextDecoder())
};
return TextDecoder.ffSingleton.decode(self_)
} else {
return (new TextDecoder()).decode(self_)
}
}

export async function Buffer_toByteList$(self_, $task) {
return [...(new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength))]
}

export async function Buffer_toHex$(self_, $task) {
let hex_ = "";
for(let for_i = 0, for_e = self_.byteLength; for_i < for_e; for_i++) {
const i_ = for_i;
hex_ = (hex_ + self_.getUint8(i_).toString(16).padStart(2, "0"))
};
return hex_
}

export async function Buffer_toBase64$(self_, $task) {
const view_ = (new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength));
const binaryString_ = Array.from(view_, ((byte_) => {
return String.fromCodePoint(byte_)
})).join("");
return btoa(binaryString_)
}

export async function Buffer_toLetter16$(self_, $task) {
const result_ = ff_core_Buffer.new_(ff_core_Int.Int_bitLeft(ff_core_Buffer.Buffer_size(self_), 1), false);
for(let for_i = 0, for_e = ff_core_Buffer.Buffer_size(self_); for_i < for_e; for_i++) {
const i_ = for_i;
const b_ = ff_core_Buffer.Buffer_grabUint8(self_, i_);
ff_core_Buffer.Buffer_setUint16(result_, ff_core_Int.Int_bitLeft(i_, 1), ff_core_Int.Int_bitOr((((b_ >>> 4) & 0xf) + 0x68), ff_core_Int.Int_bitLeft(((b_ & 0xf) + 0x68), 8)), true)
};
return ff_core_Buffer.Buffer_toString(result_, "utf8")
}

export const ff_core_Show_Show$ff_core_Buffer_Buffer = {
show_(value_) {
return (("Buffer.fromHex(\"" + ff_core_Buffer.Buffer_toHex(value_)) + "\")")
},
async show_$(value_, $task) {
return (("Buffer.fromHex(\"" + ff_core_Buffer.Buffer_toHex(value_)) + "\")")
},
};

export const ff_core_Equal_Equal$ff_core_Buffer_Buffer = {
equals_(x_, y_) {
if((ff_core_Buffer.Buffer_size(x_) !== ff_core_Buffer.Buffer_size(y_))) {
return false
} else {
if((x_ === y_)) {
return true
} else {
let i_ = 0;
let same_ = true;
while((((i_ + 4) < ff_core_Buffer.Buffer_size(x_)) && same_)) {
same_ = (x_.getInt32(i_) === y_.getInt32(i_));
i_ += 4
};
if((!same_)) {
return false
} else {
for(let for_i = i_, for_e = ff_core_Buffer.Buffer_size(x_); for_i < for_e; for_i++) {
const i_ = for_i;
same_ = (x_.getUint8(i_) === y_.getUint8(i_));
if(!same_) break
};
return same_
}
}
}
},
async equals_$(x_, y_, $task) {
if((ff_core_Buffer.Buffer_size(x_) !== ff_core_Buffer.Buffer_size(y_))) {
return false
} else {
if((x_ === y_)) {
return true
} else {
let i_ = 0;
let same_ = true;
while((((i_ + 4) < ff_core_Buffer.Buffer_size(x_)) && same_)) {
same_ = (x_.getInt32(i_) === y_.getInt32(i_));
i_ += 4
};
if((!same_)) {
return false
} else {
for(let for_i = i_, for_e = ff_core_Buffer.Buffer_size(x_); for_i < for_e; for_i++) {
const i_ = for_i;
same_ = (x_.getUint8(i_) === y_.getUint8(i_));
if(!same_) break
};
return same_
}
}
}
},
};

export const ff_core_Ordering_Order$ff_core_Buffer_Buffer = {
compare_(x_, y_) {
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
} else {
const minLength_ = ff_core_Int.Int_min(ff_core_Buffer.Buffer_size(x_), ff_core_Buffer.Buffer_size(y_));
let ordering_ = ff_core_Ordering.OrderingSame();
for(let for_i = 0, for_e = minLength_; for_i < for_e; for_i++) {
const i_ = for_i;
if((x_.getUint8(i_) !== x_.getUint8(i_))) {
ordering_ = ff_core_Ordering.fromInt_((x_.getUint8(i_) - y_.getUint8(i_)));
if(!false) break
} else {
if(!true) break
}
};
if((ordering_ === ff_core_Ordering.OrderingSame())) {
return ff_core_Ordering.fromInt_((ff_core_Buffer.Buffer_size(x_) - ff_core_Buffer.Buffer_size(y_)))
} else {
return ordering_
}
}
},
async compare_$(x_, y_, $task) {
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
} else {
const minLength_ = ff_core_Int.Int_min(ff_core_Buffer.Buffer_size(x_), ff_core_Buffer.Buffer_size(y_));
let ordering_ = ff_core_Ordering.OrderingSame();
for(let for_i = 0, for_e = minLength_; for_i < for_e; for_i++) {
const i_ = for_i;
if((x_.getUint8(i_) !== x_.getUint8(i_))) {
ordering_ = ff_core_Ordering.fromInt_((x_.getUint8(i_) - y_.getUint8(i_)));
if(!false) break
} else {
if(!true) break
}
};
if((ordering_ === ff_core_Ordering.OrderingSame())) {
return ff_core_Ordering.fromInt_((ff_core_Buffer.Buffer_size(x_) - ff_core_Buffer.Buffer_size(y_)))
} else {
return ordering_
}
}
},
};


//# sourceMappingURL=Buffer.mjs.map