

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

// type DeserializationChecksumException
const DeserializationChecksumException$ = {DeserializationChecksumException: true};
export function DeserializationChecksumException() {
return DeserializationChecksumException$;
}

// type Serialization
export function Serialization(buffer_, offset_, checksum_) {
return {buffer_, offset_, checksum_};
}



export function serialize_(value_, initialBufferSize_ = 1024, ff_core_Serializable_Serializable$T) {
const serialization_ = ff_core_Serializable.Serialization(ff_core_Buffer.new_(initialBufferSize_, false), 0, 0);
ff_core_Serializable_Serializable$T.serializeUsing_(serialization_, value_);
ff_core_Serializable.Serialization_autoResize(serialization_, 4);
ff_core_Buffer.Buffer_setInt32(serialization_.buffer_, serialization_.offset_, serialization_.checksum_, true);
serialization_.offset_ += 4;
return ff_core_Buffer.Buffer_view(serialization_.buffer_, 0, serialization_.offset_)
}

export function deserialize_(buffer_, ff_core_Serializable_Serializable$T) {
const serialization_ = ff_core_Serializable.Serialization(buffer_, 0, 0);
const result_ = ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_);
const checksum_ = ff_core_Buffer.Buffer_grabInt32(serialization_.buffer_, serialization_.offset_, true);
if((checksum_ !== serialization_.checksum_)) {
ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
};
return result_
}

export function internalSetLatin1_(self_, byteOffset_, value_) {
let result_ = true;
for(let for_i = 0, for_e = value_.length; for_i < for_e; for_i++) {
const i_ = for_i;
const charCode_ = value_.charCodeAt(i_);
if((charCode_ >= 256)) {
result_ = false
} else {
self_.setUint8((byteOffset_ + i_), charCode_)
};
if(!result_) break
};
return result_
}

export function internalGrabLatin1_(self_, byteOffset_, size_) {
const codeUnits_ = (new Uint8Array(self_.buffer, (self_.byteOffset + byteOffset_), size_));
return String.fromCharCode.apply(null, codeUnits_)
}

export async function serialize_$(value_, initialBufferSize_ = 1024, ff_core_Serializable_Serializable$T, $task) {
const serialization_ = ff_core_Serializable.Serialization(ff_core_Buffer.new_(initialBufferSize_, false), 0, 0);
ff_core_Serializable_Serializable$T.serializeUsing_(serialization_, value_);
ff_core_Serializable.Serialization_autoResize(serialization_, 4);
ff_core_Buffer.Buffer_setInt32(serialization_.buffer_, serialization_.offset_, serialization_.checksum_, true);
serialization_.offset_ += 4;
return ff_core_Buffer.Buffer_view(serialization_.buffer_, 0, serialization_.offset_)
}

export async function deserialize_$(buffer_, ff_core_Serializable_Serializable$T, $task) {
const serialization_ = ff_core_Serializable.Serialization(buffer_, 0, 0);
const result_ = ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_);
const checksum_ = ff_core_Buffer.Buffer_grabInt32(serialization_.buffer_, serialization_.offset_, true);
if((checksum_ !== serialization_.checksum_)) {
ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
};
return result_
}

export async function internalSetLatin1_$(self_, byteOffset_, value_, $task) {
let result_ = true;
for(let for_i = 0, for_e = value_.length; for_i < for_e; for_i++) {
const i_ = for_i;
const charCode_ = value_.charCodeAt(i_);
if((charCode_ >= 256)) {
result_ = false
} else {
self_.setUint8((byteOffset_ + i_), charCode_)
};
if(!result_) break
};
return result_
}

export async function internalGrabLatin1_$(self_, byteOffset_, size_, $task) {
const codeUnits_ = (new Uint8Array(self_.buffer, (self_.byteOffset + byteOffset_), size_));
return String.fromCharCode.apply(null, codeUnits_)
}

export function Serialization_autoResize(self_, minSpareCapacity_) {
if(((self_.offset_ + minSpareCapacity_) > ff_core_Buffer.Buffer_size(self_.buffer_))) {
const minSize_ = (ff_core_Buffer.Buffer_size(self_.buffer_) + minSpareCapacity_);
const newBuffer_ = ff_core_Buffer.new_(ff_core_Int.Int_max((ff_core_Buffer.Buffer_size(self_.buffer_) * 2), minSize_), false);
ff_core_Buffer.Buffer_setAll(newBuffer_, 0, self_.buffer_);
self_.buffer_ = newBuffer_
}
}

export async function Serialization_autoResize$(self_, minSpareCapacity_, $task) {
if(((self_.offset_ + minSpareCapacity_) > ff_core_Buffer.Buffer_size(self_.buffer_))) {
const minSize_ = (ff_core_Buffer.Buffer_size(self_.buffer_) + minSpareCapacity_);
const newBuffer_ = ff_core_Buffer.new_(ff_core_Int.Int_max((ff_core_Buffer.Buffer_size(self_.buffer_) * 2), minSize_), false);
ff_core_Buffer.Buffer_setAll(newBuffer_, 0, self_.buffer_);
self_.buffer_ = newBuffer_
}
}

export const ff_core_Serializable_Serializable$ff_core_Int_Int = {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.Serialization_autoResize(serialization_, 8);
ff_core_Buffer.Buffer_setInt64(serialization_.buffer_, serialization_.offset_, value_, true);
serialization_.offset_ += 8
},
deserializeUsing_(serialization_) {
const result_ = ff_core_Buffer.Buffer_grabInt64(serialization_.buffer_, serialization_.offset_, true);
serialization_.offset_ += 8;
return result_
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.Serialization_autoResize(serialization_, 8);
ff_core_Buffer.Buffer_setInt64(serialization_.buffer_, serialization_.offset_, value_, true);
serialization_.offset_ += 8
},
async deserializeUsing_$(serialization_, $task) {
const result_ = ff_core_Buffer.Buffer_grabInt64(serialization_.buffer_, serialization_.offset_, true);
serialization_.offset_ += 8;
return result_
}
};

export const ff_core_Serializable_Serializable$ff_core_Bool_Bool = {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, (value_
? 1
: 0));
serialization_.offset_ += 1
},
deserializeUsing_(serialization_) {
const result_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
return (result_ === 1)
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, (value_
? 1
: 0));
serialization_.offset_ += 1
},
async deserializeUsing_$(serialization_, $task) {
const result_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
return (result_ === 1)
}
};

export function ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable_Serializable$T) { return {
serializeUsing_(serialization_, value_) {
if((value_.length < 255)) {
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, value_.length);
serialization_.offset_ += 1
} else if((value_.length < 1073741824)) {
ff_core_Serializable.Serialization_autoResize(serialization_, (1 + 4));
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 255);
ff_core_Buffer.Buffer_setUint32(serialization_.buffer_, (1 + serialization_.offset_), value_.length, true);
serialization_.offset_ += (1 + 4)
} else {
ff_core_Core.panic_("Can't serialize arrays where size() >= 1073741824")
};
for(let for_a = value_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_core_Serializable_Serializable$T.serializeUsing_(serialization_, _w1)
}
},
deserializeUsing_(serialization_) {
const smallSize_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
if((smallSize_ !== 255)) {
serialization_.offset_ += 1;
return ((() => {
const size = smallSize_;
const result = [];
for(let i = 0; i < size; i++) {
result.push(ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_));
}
return result;
})())
} else {
const size_ = ff_core_Buffer.Buffer_grabUint32(serialization_.buffer_, (serialization_.offset_ + 1), true);
serialization_.offset_ += (1 + 4);
return ((() => {
const size = size_;
const result = [];
for(let i = 0; i < size; i++) {
result.push(ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_));
}
return result;
})())
}
},
async serializeUsing_$(serialization_, value_, $task) {
if((value_.length < 255)) {
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, value_.length);
serialization_.offset_ += 1
} else if((value_.length < 1073741824)) {
ff_core_Serializable.Serialization_autoResize(serialization_, (1 + 4));
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 255);
ff_core_Buffer.Buffer_setUint32(serialization_.buffer_, (1 + serialization_.offset_), value_.length, true);
serialization_.offset_ += (1 + 4)
} else {
ff_core_Core.panic_("Can't serialize arrays where size() >= 1073741824")
};
for(let for_a = value_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_core_Serializable_Serializable$T.serializeUsing_(serialization_, _w1)
}
},
async deserializeUsing_$(serialization_, $task) {
const smallSize_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
if((smallSize_ !== 255)) {
serialization_.offset_ += 1;
return ((() => {
const size = smallSize_;
const result = [];
for(let i = 0; i < size; i++) {
result.push(ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_));
}
return result;
})())
} else {
const size_ = ff_core_Buffer.Buffer_grabUint32(serialization_.buffer_, (serialization_.offset_ + 1), true);
serialization_.offset_ += (1 + 4);
return ((() => {
const size = size_;
const result = [];
for(let i = 0; i < size; i++) {
result.push(ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_));
}
return result;
})())
}
}
}}

export function ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable_Serializable$T, ff_core_Ordering_Order$T) { return {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable_Serializable$T).serializeUsing_(serialization_, ff_core_Set.Set_toList(value_, ff_core_Ordering_Order$T))
},
deserializeUsing_(serialization_) {
return ff_core_List.List_toSet(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable_Serializable$T).deserializeUsing_(serialization_), ff_core_Ordering_Order$T)
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable_Serializable$T).serializeUsing_(serialization_, ff_core_Set.Set_toList(value_, ff_core_Ordering_Order$T))
},
async deserializeUsing_$(serialization_, $task) {
return ff_core_List.List_toSet(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable_Serializable$T).deserializeUsing_(serialization_), ff_core_Ordering_Order$T)
}
}}

export function ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable_Serializable$K, ff_core_Ordering_Order$K, ff_core_Serializable_Serializable$V) { return {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable_Serializable$K, ff_core_Serializable_Serializable$V)).serializeUsing_(serialization_, ff_core_Map.Map_toList(value_, ff_core_Ordering_Order$K))
},
deserializeUsing_(serialization_) {
return ff_core_List.List_toMap(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable_Serializable$K, ff_core_Serializable_Serializable$V)).deserializeUsing_(serialization_), ff_core_Ordering_Order$K)
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable_Serializable$K, ff_core_Serializable_Serializable$V)).serializeUsing_(serialization_, ff_core_Map.Map_toList(value_, ff_core_Ordering_Order$K))
},
async deserializeUsing_$(serialization_, $task) {
return ff_core_List.List_toMap(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable_Serializable$K, ff_core_Serializable_Serializable$V)).deserializeUsing_(serialization_), ff_core_Ordering_Order$K)
}
}}

export const ff_core_Serializable_Serializable$ff_core_String_String = {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.Serialization_autoResize(serialization_, (1 + value_.length));
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, value_.length);
if(((value_.length < 255) && ff_core_Serializable.internalSetLatin1_(serialization_.buffer_, (serialization_.offset_ + 1), value_))) {
serialization_.offset_ += (1 + value_.length)
} else if((value_.length < 1073741824)) {
const stringBuffer_ = ff_core_String.String_toBuffer(value_);
ff_core_Serializable.Serialization_autoResize(serialization_, (5 + ff_core_Buffer.Buffer_size(stringBuffer_)));
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 255);
ff_core_Buffer.Buffer_setUint32(serialization_.buffer_, (serialization_.offset_ + 1), ff_core_Buffer.Buffer_size(stringBuffer_), true);
ff_core_Buffer.Buffer_setAll(serialization_.buffer_, (serialization_.offset_ + 5), stringBuffer_);
serialization_.offset_ += (5 + ff_core_Buffer.Buffer_size(stringBuffer_))
} else {
ff_core_Core.panic_("Can't serialize strings where size() >= 1073741824")
}
},
deserializeUsing_(serialization_) {
const smallSize_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
if((smallSize_ !== 255)) {
const result_ = ff_core_Serializable.internalGrabLatin1_(serialization_.buffer_, (serialization_.offset_ + 1), smallSize_);
serialization_.offset_ += (1 + smallSize_);
return result_
} else {
const size_ = ff_core_Buffer.Buffer_grabUint32(serialization_.buffer_, (serialization_.offset_ + 1), true);
const stringBuffer_ = ff_core_Buffer.Buffer_view(serialization_.buffer_, (serialization_.offset_ + 5), ((serialization_.offset_ + 5) + size_));
serialization_.offset_ += (5 + size_);
return ff_core_Buffer.Buffer_toString(stringBuffer_, "utf8")
}
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.Serialization_autoResize(serialization_, (1 + value_.length));
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, value_.length);
if(((value_.length < 255) && ff_core_Serializable.internalSetLatin1_(serialization_.buffer_, (serialization_.offset_ + 1), value_))) {
serialization_.offset_ += (1 + value_.length)
} else if((value_.length < 1073741824)) {
const stringBuffer_ = ff_core_String.String_toBuffer(value_);
ff_core_Serializable.Serialization_autoResize(serialization_, (5 + ff_core_Buffer.Buffer_size(stringBuffer_)));
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 255);
ff_core_Buffer.Buffer_setUint32(serialization_.buffer_, (serialization_.offset_ + 1), ff_core_Buffer.Buffer_size(stringBuffer_), true);
ff_core_Buffer.Buffer_setAll(serialization_.buffer_, (serialization_.offset_ + 5), stringBuffer_);
serialization_.offset_ += (5 + ff_core_Buffer.Buffer_size(stringBuffer_))
} else {
ff_core_Core.panic_("Can't serialize strings where size() >= 1073741824")
}
},
async deserializeUsing_$(serialization_, $task) {
const smallSize_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
if((smallSize_ !== 255)) {
const result_ = ff_core_Serializable.internalGrabLatin1_(serialization_.buffer_, (serialization_.offset_ + 1), smallSize_);
serialization_.offset_ += (1 + smallSize_);
return result_
} else {
const size_ = ff_core_Buffer.Buffer_grabUint32(serialization_.buffer_, (serialization_.offset_ + 1), true);
const stringBuffer_ = ff_core_Buffer.Buffer_view(serialization_.buffer_, (serialization_.offset_ + 5), ((serialization_.offset_ + 5) + size_));
serialization_.offset_ += (5 + size_);
return ff_core_Buffer.Buffer_toString(stringBuffer_, "utf8")
}
}
};

export const ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/Serializable.DeserializationChecksumException" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/Serializable.DeserializationChecksumException" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return "DeserializationChecksumException"
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return "DeserializationChecksumException"
}
}
};
