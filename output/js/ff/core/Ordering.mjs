import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Ordering
const OrderingBefore$ = {OrderingBefore: true};
export function OrderingBefore() {
return OrderingBefore$;
}
const OrderingSame$ = {OrderingSame: true};
export function OrderingSame() {
return OrderingSame$;
}
const OrderingAfter$ = {OrderingAfter: true};
export function OrderingAfter() {
return OrderingAfter$;
}



export function fromInt_(order_) {
if((order_ < 0)) {
return ff_core_Ordering.OrderingBefore()
} else if((order_ == 0)) {
return ff_core_Ordering.OrderingSame()
} else {
return ff_core_Ordering.OrderingAfter()
}
}

export function fromLessThan_(lessThan_) {
return ((_1, _2) => {
{
const x_ = _1
const y_ = _2
const _guard1 = lessThan_(x_, y_)
if(_guard1) {
return ff_core_Ordering.OrderingBefore()
return
}
}
{
const x_ = _1
const y_ = _2
const _guard1 = lessThan_(y_, x_)
if(_guard1) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
return ff_core_Ordering.OrderingSame()
return
}
})
}

export function Ordering_toInt(self_) {
{
const _1 = self_
{
if(_1.OrderingBefore) {
return (-1)
return
}
}
{
if(_1.OrderingSame) {
return 0
return
}
}
{
if(_1.OrderingAfter) {
return 1
return
}
}
}
}

export function Ordering_reverse(self_) {
{
const _1 = self_
{
if(_1.OrderingBefore) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(_1.OrderingSame) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
}

export const ff_core_Ordering_Order$ff_core_Bool_Bool = {
compare_(x_, y_) {
{
const x_a = x_
const y_a = y_
{
if(!x_a) {
if(y_a) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
{
if(x_a) {
if(!y_a) {
return ff_core_Ordering.OrderingAfter()
return
}
}
}
{
return ff_core_Ordering.OrderingSame()
return
}
}
}
};

export const ff_core_Ordering_Order$ff_core_Char_Char = {
compare_(x_, y_) {
return ff_core_Ordering.fromInt_((x_ - y_))
}
};

export const ff_core_Ordering_Order$ff_core_Int_Int = {
compare_(x_, y_) {
return ff_core_Ordering.fromInt_((x_ - y_))
}
};

export const ff_core_Ordering_Order$ff_core_String_String = {
compare_(x_, y_) {
if((x_ < y_)) {
return ff_core_Ordering.OrderingBefore()
} else if((x_ > y_)) {
return ff_core_Ordering.OrderingAfter()
} else {
return ff_core_Ordering.OrderingSame()
}
}
};

export function ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering_Order$A, ff_core_Ordering_Order$B) { return {
compare_(x_, y_) {
{
const _1 = ff_core_Ordering_Order$A.compare_(x_.first_, y_.first_)
{
if(_1.OrderingSame) {
return ff_core_Ordering_Order$B.compare_(x_.second_, y_.second_)
return
}
}
{
const o_ = _1
return o_
return
}
}
}
}}

export function ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$T) { return {
compare_(x_, y_) {
{
const x_a = x_
const y_a = y_
{
if(x_a.Empty) {
if(y_a.Empty) {
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.Empty) {
return ff_core_Ordering.OrderingBefore()
return
}
}
{
if(y_a.Empty) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(x_a.Link) {
const a_ = x_a.head_
const as_ = x_a.tail_
if(y_a.Link) {
const b_ = y_a.head_
const bs_ = y_a.tail_
{
const _1 = ff_core_Ordering_Order$T.compare_(a_, b_)
{
if(_1.OrderingSame) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$T).compare_(as_, bs_)
return
}
}
{
const o_ = _1
return o_
return
}
}
return
}
}
}
}
}
}}


