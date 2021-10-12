import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

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
if(lessThan_(x_, y_)) {
return ff_core_Ordering.OrderingBefore()
return
}
}
{
const x_ = _1
const y_ = _2
if(lessThan_(y_, x_)) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
return ff_core_Ordering.OrderingSame()
return
}
throw new Error('Unexhaustive pattern match')
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
throw new Error('Unexhaustive pattern match')
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
throw new Error('Unexhaustive pattern match')
}
}


