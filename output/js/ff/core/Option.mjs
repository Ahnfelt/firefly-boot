

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

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Option
const None$ = {None: true};
export function None() {
return None$;
}
export function Some(value_) {
return {Some: true, value_};
}







export function Option_else(self_, body_) {
{
const _1 = self_;
{
if(_1.None) {
return body_()
return
}
}
{
if(_1.Some) {
const value_ = _1.value_;
return value_
return
}
}
}
}

export function Option_elseIf(self_, condition_, body_) {
{
const _1 = self_;
{
if(_1.None) {
{
const _1 = condition_();
{
if(_1) {
return ff_core_Option.Some(body_())
return
}
}
{
if(!_1) {
return ff_core_Option.None()
return
}
}
}
return
}
}
{
if(_1.Some) {
return self_
return
}
}
}
}

export function Option_orElse(self_, body_) {
{
const _1 = self_;
{
if(_1.None) {
return body_()
return
}
}
{
if(_1.Some) {
return self_
return
}
}
}
}

export function Option_isEmpty(self_) {
{
const _1 = self_;
{
if(_1.None) {
return true
return
}
}
{
if(_1.Some) {
return false
return
}
}
}
}

export function Option_toList(self_) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_List.Empty()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_List.Link(v_, ff_core_List.Empty())
return
}
}
}
}

export function Option_toStack(self_) {
return ff_core_List.List_toStack(ff_core_Option.Option_toList(self_))
}

export function Option_toArray(self_) {
return ff_core_List.List_toArray(ff_core_Option.Option_toList(self_))
}

export function Option_toStream(self_, cycle_ = false) {
let next_ = self_;
return ff_core_Stream.make_((() => {
const result_ = next_;
if((!cycle_)) {
next_ = ff_core_Option.None()
};
return result_
}), (() => {

}))
}

export function Option_filter(self_, body_) {
{
const _1 = self_;
{
if(_1.Some) {
const v_ = _1.value_;
const _guard1 = body_(v_);
if(_guard1) {
return ff_core_Option.Some(v_)
return
}
}
}
{
return ff_core_Option.None()
return
}
}
}

export function Option_map(self_, body_) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Option.Some(body_(v_))
return
}
}
}
}

export function Option_flatMap(self_, body_) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return body_(v_)
return
}
}
}
}

export function Option_each(self_, body_) {
{
const _1 = self_;
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
body_(v_)
return
}
}
}
}

export function Option_all(self_, body_) {
{
const _1 = self_;
{
if(_1.None) {
return true
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return body_(v_)
return
}
}
}
}

export function Option_any(self_, body_) {
{
const _1 = self_;
{
if(_1.None) {
return false
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return body_(v_)
return
}
}
}
}

export function Option_grab(self_) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Try.internalThrowGrabException_()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return v_
return
}
}
}
}

export async function Option_else$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return (await body_($c))
return
}
}
{
if(_1.Some) {
const value_ = _1.value_;
return value_
return
}
}
}
}

export async function Option_elseIf$(self_, condition_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {
{
const _1 = (await condition_($c));
{
if(_1) {
return ff_core_Option.Some((await body_($c)))
return
}
}
{
if(!_1) {
return ff_core_Option.None()
return
}
}
}
return
}
}
{
if(_1.Some) {
return self_
return
}
}
}
}

export async function Option_orElse$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return (await body_($c))
return
}
}
{
if(_1.Some) {
return self_
return
}
}
}
}

export async function Option_isEmpty$(self_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return true
return
}
}
{
if(_1.Some) {
return false
return
}
}
}
}

export async function Option_toList$(self_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_List.Empty()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_List.Link(v_, ff_core_List.Empty())
return
}
}
}
}

export async function Option_toStack$(self_, $c) {
return ff_core_List.List_toStack(ff_core_Option.Option_toList(self_))
}

export async function Option_toArray$(self_, $c) {
return ff_core_List.List_toArray(ff_core_Option.Option_toList(self_))
}

export async function Option_toStream$(self_, cycle_ = false, $c) {
let next_ = self_;
return (await ff_core_Stream.make_$((async ($c) => {
const result_ = next_;
if((!cycle_)) {
next_ = ff_core_Option.None()
};
return result_
}), (async ($c) => {

}), $c))
}

export async function Option_filter$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.Some) {
const v_ = _1.value_;
const _guard1 = (await body_(v_, $c));
if(_guard1) {
return ff_core_Option.Some(v_)
return
}
}
}
{
return ff_core_Option.None()
return
}
}
}

export async function Option_map$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Option.Some((await body_(v_, $c)))
return
}
}
}
}

export async function Option_flatMap$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return (await body_(v_, $c))
return
}
}
}
}

export async function Option_each$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
(await body_(v_, $c))
return
}
}
}
}

export async function Option_all$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return true
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return (await body_(v_, $c))
return
}
}
}
}

export async function Option_any$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return false
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return (await body_(v_, $c))
return
}
}
}
}

export async function Option_grab$(self_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Try.internalThrowGrabException_()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return v_
return
}
}
}
}

export function Option_contains(self_, value_, ff_core_Equal_Equal$T) {
{
const _1 = self_;
{
if(_1.None) {
return false
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Equal_Equal$T.equals_(v_, value_)
return
}
}
}
}

export async function Option_contains$(self_, value_, ff_core_Equal_Equal$T, $c) {
{
const _1 = self_;
{
if(_1.None) {
return false
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Equal_Equal$T.equals_(v_, value_)
return
}
}
}
}

export function Option_flatten(self_) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return v_
return
}
}
}
}

export async function Option_flatten$(self_, $c) {
{
const _1 = self_;
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return v_
return
}
}
}
}

export function ff_core_Show_Show$ff_core_Option_Option(ff_core_Show_Show$T) { return {
show_(x_) {
{
const x_a = x_;
{
if(x_a.None) {
const z_ = x_a;
return "None"
return
}
}
{
if(x_a.Some) {
const z_ = x_a;
return ((("Some" + "(") + ff_core_Show_Show$T.show_(z_.value_)) + ")")
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.None) {
const z_ = x_a;
return "None"
return
}
}
{
if(x_a.Some) {
const z_ = x_a;
return ((("Some" + "(") + ff_core_Show_Show$T.show_(z_.value_)) + ")")
return
}
}
}
}
}}

export function ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal_Equal$T) { return {
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
if(x_a.Some) {
const x_ = x_a;
if(y_a.Some) {
const y_ = y_a;
return ff_core_Equal_Equal$T.equals_(x_.value_, y_.value_)
return
}
}
}
{
return false
return
}
}
},
async equals_$(x_, y_, $c) {
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
if(x_a.Some) {
const x_ = x_a;
if(y_a.Some) {
const y_ = y_a;
return ff_core_Equal_Equal$T.equals_(x_.value_, y_.value_)
return
}
}
}
{
return false
return
}
}
}
}}

export function ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering_Order$T) { return {
compare_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
if(x_a.Some) {
const x_ = x_a;
if(y_a.Some) {
const y_ = y_a;
const valueOrdering_ = ff_core_Ordering_Order$T.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.None) {
return 0
return
}
}
{
if(z_a.Some) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
},
async compare_$(x_, y_, $c) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
if(x_a.Some) {
const x_ = x_a;
if(y_a.Some) {
const y_ = y_a;
const valueOrdering_ = ff_core_Ordering_Order$T.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.None) {
return 0
return
}
}
{
if(z_a.Some) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
}}

export function ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable_Serializable$T) { return {
serializeUsing_(serialization_, x_) {
{
const serialization_a = serialization_;
const x_a = x_;
{
if(x_a.None) {
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(x_a.Some) {
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable_Serializable$T.serializeUsing_(serialization_, value_.value_)
return
}
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
return ff_core_Option.None()
return
}
}
{
if(_1 == 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
return ff_core_Option.Some(ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, x_, $c) {
{
const serialization_a = serialization_;
const x_a = x_;
{
if(x_a.None) {
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(x_a.Some) {
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable_Serializable$T.serializeUsing_(serialization_, value_.value_)
return
}
}
}
},
async deserializeUsing_$(serialization_, $c) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
return ff_core_Option.None()
return
}
}
{
if(_1 == 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 19), 0);
return ff_core_Option.Some(ff_core_Serializable_Serializable$T.deserializeUsing_(serialization_))
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


