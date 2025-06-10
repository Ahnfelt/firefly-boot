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

import * as ff_compiler_SourceMap from "../../ff/compiler/SourceMap.mjs"

export const vlqBaseShift_ = 5;

export const vlqBaseMask_ = (ff_core_Int.Int_bitLeft(1, ff_compiler_SourceMap.vlqBaseShift_) - 1);

export const vlqContinuationBit_ = ff_core_Int.Int_bitLeft(1, ff_compiler_SourceMap.vlqBaseShift_);

export const base64Characters_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/;,";

export const semicolonIndex_ = ff_core_Option.Option_grab(ff_core_String.String_indexOf(ff_compiler_SourceMap.base64Characters_, ";", 0));

export const commaIndex_ = ff_core_Option.Option_grab(ff_core_String.String_indexOf(ff_compiler_SourceMap.base64Characters_, ",", 0));

export function makeOutputAndSourceMap_(fireflyFile_, fireflySource_, writtenStrings_, writtenSegments_, writtenAnchors_, writtenNames_) {
const lines_ = ff_core_Array.new_();
const output_ = ff_core_Array.new_();
let index_ = 0;
let lastSource_ = 0;
let lastLine_ = 0;
let lastColumn_ = 0;
let lastName_ = 0;
for(let for_a = ff_core_Array.Array_drain(writtenStrings_), for_i = 0, for_l = for_a.length, for_a2 = ff_core_Array.Array_drain(writtenSegments_), for_i2 = 0, for_l2 = for_a2.length; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {
const strings_ = for_a[for_i];
const segments_ = for_a2[for_i2];
{
const if_o = ff_core_IntMap.IntMap_get(writtenAnchors_, index_)
if(if_o.Some) {
const anchorLines_ = if_o.value_;
for(let for_a = anchorLines_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const l_ = for_a[for_i];
lines_.array.push([]);
output_.array.push(l_);
output_.array.push("\n")
}
}
};
let lastOutputColumn_ = 0;
const line_ = ff_core_Array.new_();
for(let for_a = segments_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const segment_ = for_a[for_i];
const relative_ = ff_core_Array.new_();
const newOutputColumn_ = (segment_[0] ?? ff_core_List.List_grab(segment_, 0));
relative_.array.push((newOutputColumn_ - lastOutputColumn_));
lastOutputColumn_ = newOutputColumn_;
if((segment_.length > 1)) {
const newSource_ = (segment_[1] ?? ff_core_List.List_grab(segment_, 1));
relative_.array.push((newSource_ - lastSource_));
lastSource_ = newSource_;
const newLine_ = (segment_[2] ?? ff_core_List.List_grab(segment_, 2));
relative_.array.push((newLine_ - lastLine_));
lastLine_ = newLine_;
const newColumn_ = (segment_[3] ?? ff_core_List.List_grab(segment_, 3));
relative_.array.push((newColumn_ - lastColumn_));
lastColumn_ = newColumn_;
if((segment_.length === 5)) {
const newName_ = (segment_[4] ?? ff_core_List.List_grab(segment_, 4));
relative_.array.push((newName_ - lastName_));
lastName_ = newName_
}
};
line_.array.push(ff_core_Array.Array_drain(relative_))
};
lines_.array.push(ff_core_Array.Array_drain(line_));
for(let for_a = strings_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
output_.array.push(_w1)
};
output_.array.push("\n");
index_ += 1
};
const sourceMap_ = ff_compiler_SourceMap.sourceMap_([fireflyFile_], [fireflySource_], ff_core_StringMap.StringMap_keys(writtenNames_), ff_core_Array.Array_drain(lines_));
return ff_core_Pair.Pair(ff_core_Array.Array_join(output_, ""), sourceMap_)
}

export function makeOutput_(writtenStrings_, writtenAnchors_) {
const output_ = ff_core_Array.new_();
for(let for_a = ff_core_Array.Array_drain(writtenStrings_), for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const index_ = for_i;
const strings_ = for_a[for_i];
{
const if_o = ff_core_IntMap.IntMap_get(writtenAnchors_, index_)
if(if_o.Some) {
const anchorLines_ = if_o.value_;
for(let for_a = anchorLines_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const l_ = for_a[for_i];
output_.array.push(l_)
}
}
};
output_.array.push(ff_core_Array.Array_join(strings_, ""))
};
return ff_core_Array.Array_join(output_, "\n")
}

export function sourceMap_(sources_, contents_, names_, lines_) {
return {...ff_core_Json.object_(), version: 3, sources: sources_, sourcesContent: ff_core_List.List_map(contents_, ((_w1) => {
return ff_core_Option.Option_else(ff_core_Option.Option_map(_w1, ((_w1) => {
return _w1
})), (() => {
return ff_core_Json.null_()
}))
})), names: names_, mappings: ff_compiler_SourceMap.toMappings_(lines_)}
}

export function toMappings_(lines_) {
const vlq_ = ff_core_Array.new_();
let firstLine_ = true;
for(let for_a = lines_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const line_ = for_a[for_i];
if(firstLine_) {
firstLine_ = false
} else {
vlq_.array.push(ff_compiler_SourceMap.semicolonIndex_)
};
let firstSegment_ = true;
for(let for_a = line_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const segment_ = for_a[for_i];
if(firstSegment_) {
firstSegment_ = false
} else {
vlq_.array.push(ff_compiler_SourceMap.commaIndex_)
};
for(let for_a = segment_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const field_ = for_a[for_i];
ff_compiler_SourceMap.internalToVlq_(vlq_, field_)
}
}
};
return ff_compiler_SourceMap.toBase64Vlq_(ff_core_Array.Array_drain(vlq_))
}

export function toBase64Vlq_(vlq_) {
const result_ = ff_core_Buffer.new_(vlq_.length, false);
for(let for_i = 0, for_e = vlq_.length; for_i < for_e; for_i++) {
const i_ = for_i;
ff_core_Buffer.Buffer_setUint8(result_, i_, ff_core_String.String_grab(ff_compiler_SourceMap.base64Characters_, (vlq_[i_] ?? ff_core_List.List_grab(vlq_, i_))))
};
return ff_core_Buffer.Buffer_toString(result_, "utf8")
}

export function internalToVlq_(vlq_, value_) {
let digit_ = 0;
let v_ = value_;
if((v_ < 0)) {
v_ = ff_core_Int.Int_bitOr(ff_core_Int.Int_bitLeft(ff_core_Int.Int_abs(v_), 1), 1)
} else {
v_ = ff_core_Int.Int_bitLeft(v_, 1)
};
while(true) {
digit_ = (v_ & ff_compiler_SourceMap.vlqBaseMask_);
v_ = (v_ >>> ff_compiler_SourceMap.vlqBaseShift_);
if((v_ > 0)) {
digit_ = ff_core_Int.Int_bitOr(digit_, ff_compiler_SourceMap.vlqContinuationBit_)
};
vlq_.array.push(digit_);
if(!(v_ > 0)) break
}
}

export async function makeOutputAndSourceMap_$(fireflyFile_, fireflySource_, writtenStrings_, writtenSegments_, writtenAnchors_, writtenNames_, $task) {
const lines_ = ff_core_Array.new_();
const output_ = ff_core_Array.new_();
let index_ = 0;
let lastSource_ = 0;
let lastLine_ = 0;
let lastColumn_ = 0;
let lastName_ = 0;
for(let for_a = ff_core_Array.Array_drain(writtenStrings_), for_i = 0, for_l = for_a.length, for_a2 = ff_core_Array.Array_drain(writtenSegments_), for_i2 = 0, for_l2 = for_a2.length; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {
const strings_ = for_a[for_i];
const segments_ = for_a2[for_i2];
{
const if_o = ff_core_IntMap.IntMap_get(writtenAnchors_, index_)
if(if_o.Some) {
const anchorLines_ = if_o.value_;
for(let for_a = anchorLines_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const l_ = for_a[for_i];
lines_.array.push([]);
output_.array.push(l_);
output_.array.push("\n")
}
}
};
let lastOutputColumn_ = 0;
const line_ = ff_core_Array.new_();
for(let for_a = segments_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const segment_ = for_a[for_i];
const relative_ = ff_core_Array.new_();
const newOutputColumn_ = (segment_[0] ?? ff_core_List.List_grab(segment_, 0));
relative_.array.push((newOutputColumn_ - lastOutputColumn_));
lastOutputColumn_ = newOutputColumn_;
if((segment_.length > 1)) {
const newSource_ = (segment_[1] ?? ff_core_List.List_grab(segment_, 1));
relative_.array.push((newSource_ - lastSource_));
lastSource_ = newSource_;
const newLine_ = (segment_[2] ?? ff_core_List.List_grab(segment_, 2));
relative_.array.push((newLine_ - lastLine_));
lastLine_ = newLine_;
const newColumn_ = (segment_[3] ?? ff_core_List.List_grab(segment_, 3));
relative_.array.push((newColumn_ - lastColumn_));
lastColumn_ = newColumn_;
if((segment_.length === 5)) {
const newName_ = (segment_[4] ?? ff_core_List.List_grab(segment_, 4));
relative_.array.push((newName_ - lastName_));
lastName_ = newName_
}
};
line_.array.push(ff_core_Array.Array_drain(relative_))
};
lines_.array.push(ff_core_Array.Array_drain(line_));
for(let for_a = strings_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
output_.array.push(_w1)
};
output_.array.push("\n");
index_ += 1
};
const sourceMap_ = ff_compiler_SourceMap.sourceMap_([fireflyFile_], [fireflySource_], ff_core_StringMap.StringMap_keys(writtenNames_), ff_core_Array.Array_drain(lines_));
return ff_core_Pair.Pair(ff_core_Array.Array_join(output_, ""), sourceMap_)
}

export async function makeOutput_$(writtenStrings_, writtenAnchors_, $task) {
const output_ = ff_core_Array.new_();
for(let for_a = ff_core_Array.Array_drain(writtenStrings_), for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const index_ = for_i;
const strings_ = for_a[for_i];
{
const if_o = ff_core_IntMap.IntMap_get(writtenAnchors_, index_)
if(if_o.Some) {
const anchorLines_ = if_o.value_;
for(let for_a = anchorLines_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const l_ = for_a[for_i];
output_.array.push(l_)
}
}
};
output_.array.push(ff_core_Array.Array_join(strings_, ""))
};
return ff_core_Array.Array_join(output_, "\n")
}

export async function sourceMap_$(sources_, contents_, names_, lines_, $task) {
return {...ff_core_Json.object_(), version: 3, sources: sources_, sourcesContent: ff_core_List.List_map(contents_, ((_w1) => {
return ff_core_Option.Option_else(ff_core_Option.Option_map(_w1, ((_w1) => {
return _w1
})), (() => {
return ff_core_Json.null_()
}))
})), names: names_, mappings: ff_compiler_SourceMap.toMappings_(lines_)}
}

export async function toMappings_$(lines_, $task) {
const vlq_ = ff_core_Array.new_();
let firstLine_ = true;
for(let for_a = lines_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const line_ = for_a[for_i];
if(firstLine_) {
firstLine_ = false
} else {
vlq_.array.push(ff_compiler_SourceMap.semicolonIndex_)
};
let firstSegment_ = true;
for(let for_a = line_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const segment_ = for_a[for_i];
if(firstSegment_) {
firstSegment_ = false
} else {
vlq_.array.push(ff_compiler_SourceMap.commaIndex_)
};
for(let for_a = segment_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const field_ = for_a[for_i];
ff_compiler_SourceMap.internalToVlq_(vlq_, field_)
}
}
};
return ff_compiler_SourceMap.toBase64Vlq_(ff_core_Array.Array_drain(vlq_))
}

export async function toBase64Vlq_$(vlq_, $task) {
const result_ = ff_core_Buffer.new_(vlq_.length, false);
for(let for_i = 0, for_e = vlq_.length; for_i < for_e; for_i++) {
const i_ = for_i;
ff_core_Buffer.Buffer_setUint8(result_, i_, ff_core_String.String_grab(ff_compiler_SourceMap.base64Characters_, (vlq_[i_] ?? ff_core_List.List_grab(vlq_, i_))))
};
return ff_core_Buffer.Buffer_toString(result_, "utf8")
}

export async function internalToVlq_$(vlq_, value_, $task) {
let digit_ = 0;
let v_ = value_;
if((v_ < 0)) {
v_ = ff_core_Int.Int_bitOr(ff_core_Int.Int_bitLeft(ff_core_Int.Int_abs(v_), 1), 1)
} else {
v_ = ff_core_Int.Int_bitLeft(v_, 1)
};
while(true) {
digit_ = (v_ & ff_compiler_SourceMap.vlqBaseMask_);
v_ = (v_ >>> ff_compiler_SourceMap.vlqBaseShift_);
if((v_ > 0)) {
digit_ = ff_core_Int.Int_bitOr(digit_, ff_compiler_SourceMap.vlqContinuationBit_)
};
vlq_.array.push(digit_);
if(!(v_ > 0)) break
}
}


//# sourceMappingURL=SourceMap.mjs.map