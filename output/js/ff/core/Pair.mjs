

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

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

import * as ff_core_WebSocket from "../../ff/core/WebSocket.mjs"

// type Pair
export function Pair(first_, second_) {
return {first_, second_};
}







export function Pair_mapFirst(self_, body_) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair(body_(self_.first_), _c.second_)
return
}
}
}

export function Pair_mapSecond(self_, body_) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair(_c.first_, body_(self_.second_))
return
}
}
}

export function Pair_swap(self_) {
return ff_core_Pair.Pair(self_.second_, self_.first_)
}

export async function Pair_mapFirst$(self_, body_, $task) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair((await body_(self_.first_, $task)), _c.second_)
return
}
}
}

export async function Pair_mapSecond$(self_, body_, $task) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair(_c.first_, (await body_(self_.second_, $task)))
return
}
}
}

export async function Pair_swap$(self_, $task) {
return ff_core_Pair.Pair(self_.second_, self_.first_)
}

export function Pair_mapBoth(self_, body_) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair(body_(self_.first_), body_(self_.second_))
return
}
}
}

export function Pair_toList(self_) {
return ff_core_List.Link(self_.first_, ff_core_List.Link(self_.second_, ff_core_List.Empty()))
}

export function Pair_toArray(self_) {
return ff_core_List.List_toArray(ff_core_Pair.Pair_toList(self_))
}

export function Pair_toStack(self_) {
return ff_core_List.List_toStack(ff_core_Pair.Pair_toList(self_))
}

export async function Pair_mapBoth$(self_, body_, $task) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair((await body_(self_.first_, $task)), (await body_(self_.second_, $task)))
return
}
}
}

export async function Pair_toList$(self_, $task) {
return ff_core_List.Link(self_.first_, ff_core_List.Link(self_.second_, ff_core_List.Empty()))
}

export async function Pair_toArray$(self_, $task) {
return ff_core_List.List_toArray(ff_core_Pair.Pair_toList(self_))
}

export async function Pair_toStack$(self_, $task) {
return ff_core_List.List_toStack(ff_core_Pair.Pair_toList(self_))
}

export function Pair_toSet(self_, ff_core_Ordering_Order$A) {
return ff_core_List.List_toSet(ff_core_Pair.Pair_toList(self_), ff_core_Ordering_Order$A)
}

export async function Pair_toSet$(self_, ff_core_Ordering_Order$A, $task) {
return ff_core_List.List_toSet(ff_core_Pair.Pair_toList(self_), ff_core_Ordering_Order$A)
}

export function Pair_toMap(self_, ff_core_Ordering_Order$A) {
return ff_core_List.List_toMap(ff_core_List.Link(self_, ff_core_List.Empty()), ff_core_Ordering_Order$A)
}

export async function Pair_toMap$(self_, ff_core_Ordering_Order$A, $task) {
return ff_core_List.List_toMap(ff_core_List.Link(self_, ff_core_List.Empty()), ff_core_Ordering_Order$A)
}

export function ff_core_Any_HasAnyTag$ff_core_Pair_Pair(ff_core_Any_HasAnyTag$A, ff_core_Any_HasAnyTag$B) { return {
anyTag_() {
return ff_core_Any.internalAnyTag_(((((("ff:core/Pair.Pair" + "[") + ff_core_Any.AnyTag_show(ff_core_Any_HasAnyTag$A.anyTag_())) + ",") + ff_core_Any.AnyTag_show(ff_core_Any_HasAnyTag$B.anyTag_())) + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_(((((("ff:core/Pair.Pair" + "[") + ff_core_Any.AnyTag_show(ff_core_Any_HasAnyTag$A.anyTag_())) + ",") + ff_core_Any.AnyTag_show(ff_core_Any_HasAnyTag$B.anyTag_())) + "]"))
}
}}

export function ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal_Equal$A, ff_core_Equal_Equal$B) { return {
equals_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return (ff_core_Equal_Equal$A.equals_(x_.first_, y_.first_) && ff_core_Equal_Equal$B.equals_(x_.second_, y_.second_))
return
}
}
},
async equals_$(x_, y_, $task) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return (ff_core_Equal_Equal$A.equals_(x_.first_, y_.first_) && ff_core_Equal_Equal$B.equals_(x_.second_, y_.second_))
return
}
}
}
}}

export function ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable_Serializable$A, ff_core_Serializable_Serializable$B) { return {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 17), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable_Serializable$A.serializeUsing_(serialization_, v_.first_);
ff_core_Serializable_Serializable$B.serializeUsing_(serialization_, v_.second_)
return
}
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 17), 0);
return ff_core_Pair.Pair(ff_core_Serializable_Serializable$A.deserializeUsing_(serialization_), ff_core_Serializable_Serializable$B.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 17), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable_Serializable$A.serializeUsing_(serialization_, v_.first_);
ff_core_Serializable_Serializable$B.serializeUsing_(serialization_, v_.second_)
return
}
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 17), 0);
return ff_core_Pair.Pair(ff_core_Serializable_Serializable$A.deserializeUsing_(serialization_), ff_core_Serializable_Serializable$B.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
}
}}


