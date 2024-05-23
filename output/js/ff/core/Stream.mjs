

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

import * as ff_core_Digest from "../../ff/core/Digest.mjs"

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

// type Stream
export function Stream(next_, close_) {
return {next_, close_};
}



export function new_(next_, close_ = (() => {

})) {
return ff_core_Stream.Stream(next_, close_)
}

export function init_(body_) {
let initialized_ = false;
let stream_ = ff_core_Stream.Stream((() => {
return ff_core_Option.None()
}), (() => {

}));
return ff_core_Stream.Stream((() => {
if(initialized_) {
return stream_.next_()
} else {
initialized_ = true;
stream_ = body_();
return stream_.next_()
}
}), (() => {
initialized_ = true;
stream_.close_()
}))
}

export async function new_$(next_, close_ = (async ($task) => {

}), $task) {
return ff_core_Stream.Stream(next_, close_)
}

export async function init_$(body_, $task) {
let initialized_ = false;
let stream_ = ff_core_Stream.Stream((async ($task) => {
return ff_core_Option.None()
}), (async ($task) => {

}));
return ff_core_Stream.Stream((async ($task) => {
if(initialized_) {
return (await stream_.next_($task))
} else {
initialized_ = true;
stream_ = (await body_($task));
return (await stream_.next_($task))
}
}), (async ($task) => {
initialized_ = true;
(await stream_.close_($task))
}))
}

export function Stream_addAll(self_, that_) {
let firstDone_ = false;
return ff_core_Stream.Stream((() => {
if(firstDone_) {
return that_.next_()
} else {
return ff_core_Option.Option_orElse(self_.next_(), (() => {
firstDone_ = true;
return that_.next_()
}))
}
}), (() => {
try {
self_.close_()
} finally {
that_.close_()
}
}))
}

export function Stream_map(self_, body_) {
return ff_core_Stream.Stream((() => {
return ff_core_Option.Option_map(self_.next_(), body_)
}), (() => {
self_.close_()
}))
}

export function Stream_flatMap(self_, body_) {
let inner_ = ff_core_Stream.Stream((() => {
return ff_core_Option.None()
}), (() => {

}));
return ff_core_Stream.Stream((() => {
let result_ = ff_core_Option.None();
while(ff_core_Option.Option_isEmpty(result_)) {
do {
const _1 = inner_.next_();
if(_1.Some) {
const i_ = _1;
result_ = ff_core_Option.Some(i_)
break
}
if(_1.None) {
do {
const _1 = self_.next_();
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
if(_1.Some) {
const o_ = _1.value_;
inner_.close_();
inner_ = body_(o_)
break
}
} while(false)
break
}
} while(false)
};
return ff_core_Option.Option_grab(result_)
}), (() => {
try {
inner_.close_()
} finally {
self_.close_()
}
}))
}

export function Stream_collect(self_, body_) {
return ff_core_Stream.Stream_flatMap(self_, ((_w1) => {
return ff_core_Option.Option_toStream(body_(_w1), false)
}))
}

export function Stream_filter(self_, body_) {
return ff_core_Stream.Stream((() => {
let result_ = ff_core_Option.None();
while(ff_core_Option.Option_isEmpty(result_)) {
do {
const _1 = self_.next_();
if(_1.Some) {
const x_ = _1.value_;
if(body_(x_)) {
result_ = ff_core_Option.Some(ff_core_Option.Some(x_))
break
}
}
if(_1.Some) {

break
}
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
} while(false)
};
return ff_core_Option.Option_grab(result_)
}), (() => {
self_.close_()
}))
}

export function Stream_zip(self_, that_) {
return ff_core_Stream.Stream((() => {
{
const _1 = ff_core_Pair.Pair(self_.next_(), that_.next_());
if(_1.first_.Some && _1.second_.Some) {
const x_ = _1.first_.value_;
const y_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(x_, y_))
}
{
return ff_core_Option.None()
}
}
}), (() => {
try {
self_.close_()
} finally {
that_.close_()
}
}))
}

export function Stream_takeFirst(self_, count_ = 1) {
let remaining_ = count_;
return ff_core_Stream.Stream((() => {
return ff_core_Option.Option_filter(self_.next_(), ((_) => {
remaining_ -= 1;
return (remaining_ >= 0)
}))
}), (() => {
self_.close_()
}))
}

export function Stream_dropFirst(self_, count_ = 1) {
let remaining_ = count_;
return ff_core_Stream.Stream((() => {
while((remaining_ >= 1)) {
do {
const _1 = self_.next_();
if(_1.None) {
remaining_ = 0
break
}
if(_1.Some) {
remaining_ -= 1
break
}
} while(false)
};
return self_.next_()
}), (() => {
self_.close_()
}))
}

export function Stream_takeWhile(self_, body_) {
let done_ = false;
return ff_core_Stream.Stream((() => {
if(done_) {
return ff_core_Option.None()
} else {
{
const _1 = self_.next_();
if(_1.None) {
done_ = true;
return ff_core_Option.None()
}
if(_1.Some) {
const o_ = _1;
const x_ = _1.value_;
done_ = (!body_(x_));
if(done_) {
return ff_core_Option.None()
} else {
return o_
}
return
}
}
}
}), (() => {
self_.close_()
}))
}

export function Stream_dropWhile(self_, body_) {
let done_ = false;
return ff_core_Stream.Stream((() => {
if((!done_)) {
let result_ = ff_core_Option.None();
while((!done_)) {
do {
const _1 = self_.next_();
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
if(body_(x_)) {

break
}
}
if(_1.Some) {
const o_ = _1;
const x_ = _1.value_;
result_ = o_;
done_ = true
break
}
} while(false)
};
return result_
} else {
return self_.next_()
}
}), (() => {
self_.close_()
}))
}

export function Stream_pairs(self_) {
let i_ = 0;
return ff_core_Stream.Stream_map(self_, ((x_) => {
const r_ = ff_core_Pair.Pair(i_, x_);
i_ += 1;
return r_
}))
}

export function Stream_chunked(self_, size_) {
let remaining_ = size_;
return ff_core_Stream.Stream((() => {
if((remaining_ <= 0)) {
return ff_core_Option.None()
} else {
{
const _1 = self_.next_();
if(_1.None) {
remaining_ = (-1);
return ff_core_Option.None()
}
if(_1.Some) {
const x_ = _1.value_;
let list_ = [x_];
remaining_ -= 1;
while((remaining_ > 0)) {
remaining_ -= 1;
do {
const _1 = self_.next_();
if(_1.None) {
remaining_ = (-1)
break
}
if(_1.Some) {
const x_ = _1.value_;
list_ = [x_, ...list_]
break
}
} while(false)
};
if((remaining_ !== (-1))) {
remaining_ = size_
};
return ff_core_Option.Some(ff_core_List.List_reverse(list_))
}
}
}
}), (() => {
self_.close_()
}))
}

export function Stream_use(self_, body_) {
try {
return body_(self_)
} finally {
self_.close_()
}
}

export function Stream_each(self_, body_) {
try {
let done_ = false;
while((!done_)) {
do {
const _1 = self_.next_();
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
body_(x_)
break
}
} while(false)
}
} finally {
self_.close_()
}
}

export function Stream_eachWhile(self_, body_) {
try {
let done_ = false;
while((!done_)) {
do {
const _1 = self_.next_();
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
done_ = (!body_(x_))
break
}
} while(false)
}
} finally {
self_.close_()
}
}

export function Stream_all(self_, body_) {
let result_ = true;
ff_core_Stream.Stream_eachWhile(self_, ((x_) => {
result_ = (result_ && body_(x_));
return result_
}));
return result_
}

export function Stream_any(self_, body_) {
let result_ = false;
ff_core_Stream.Stream_eachWhile(self_, ((x_) => {
result_ = (result_ || body_(x_));
return (!result_)
}));
return result_
}

export function Stream_first(self_) {
try {
return self_.next_()
} finally {
self_.close_()
}
}

export function Stream_last(self_) {
try {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
do {
const _1 = self_.next_();
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const o_ = _1;
const x_ = _1.value_;
result_ = o_
break
}
} while(false)
};
return result_
} finally {
self_.close_()
}
}

export function Stream_grabFirst(self_) {
return ff_core_Option.Option_else(ff_core_Stream.Stream_first(self_), (() => {
return ff_core_Core.panic_("grabFirst() on empty iterator")
}))
}

export function Stream_grabLast(self_) {
return ff_core_Option.Option_else(ff_core_Stream.Stream_last(self_), (() => {
return ff_core_Core.panic_("grabLast() on empty iterator")
}))
}

export function Stream_collectFirst(self_, body_) {
try {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
do {
const _1 = self_.next_();
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
do {
const _1 = body_(x_);
if(_1.None) {

break
}
{
const o_ = _1;
done_ = true;
result_ = o_
break
}
} while(false)
break
}
} while(false)
};
return result_
} finally {
self_.close_()
}
}

export function Stream_find(self_, body_) {
return ff_core_Stream.Stream_first(ff_core_Stream.Stream_filter(self_, body_))
}

export function Stream_foldLeft(self_, initial_, body_) {
let result_ = initial_;
ff_core_Stream.Stream_each(self_, ((_w1) => {
result_ = body_(result_, _w1)
}));
return result_
}

export function Stream_toArray(self_) {
const array_ = ff_core_Array.new_();
ff_core_Stream.Stream_each(self_, ((_w1) => {
ff_core_Array.Array_push(array_, _w1)
}));
return array_
}

export function Stream_toList(self_) {
return ff_core_Array.Array_drain(ff_core_Stream.Stream_toArray(self_))
}

export async function Stream_addAll$(self_, that_, $task) {
let firstDone_ = false;
return ff_core_Stream.Stream((async ($task) => {
if(firstDone_) {
return (await that_.next_($task))
} else {
return (await ff_core_Option.Option_orElse$((await self_.next_($task)), (async ($task) => {
firstDone_ = true;
return (await that_.next_($task))
}), $task))
}
}), (async ($task) => {
try {
(await self_.close_($task))
} finally {
(await that_.close_($task))
}
}))
}

export async function Stream_map$(self_, body_, $task) {
return ff_core_Stream.Stream((async ($task) => {
return (await ff_core_Option.Option_map$((await self_.next_($task)), body_, $task))
}), (async ($task) => {
(await self_.close_($task))
}))
}

export async function Stream_flatMap$(self_, body_, $task) {
let inner_ = ff_core_Stream.Stream((async ($task) => {
return ff_core_Option.None()
}), (async ($task) => {

}));
return ff_core_Stream.Stream((async ($task) => {
let result_ = ff_core_Option.None();
while(ff_core_Option.Option_isEmpty(result_)) {
do {
const _1 = (await inner_.next_($task));
if(_1.Some) {
const i_ = _1;
result_ = ff_core_Option.Some(i_)
break
}
if(_1.None) {
do {
const _1 = (await self_.next_($task));
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
if(_1.Some) {
const o_ = _1.value_;
(await inner_.close_($task));
inner_ = (await body_(o_, $task))
break
}
} while(false)
break
}
} while(false)
};
return ff_core_Option.Option_grab(result_)
}), (async ($task) => {
try {
(await inner_.close_($task))
} finally {
(await self_.close_($task))
}
}))
}

export async function Stream_collect$(self_, body_, $task) {
return (await ff_core_Stream.Stream_flatMap$(self_, (async (_w1, $task) => {
return (await ff_core_Option.Option_toStream$((await body_(_w1, $task)), false, $task))
}), $task))
}

export async function Stream_filter$(self_, body_, $task) {
return ff_core_Stream.Stream((async ($task) => {
let result_ = ff_core_Option.None();
while(ff_core_Option.Option_isEmpty(result_)) {
do {
const _1 = (await self_.next_($task));
if(_1.Some) {
const x_ = _1.value_;
if((await body_(x_, $task))) {
result_ = ff_core_Option.Some(ff_core_Option.Some(x_))
break
}
}
if(_1.Some) {

break
}
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
} while(false)
};
return ff_core_Option.Option_grab(result_)
}), (async ($task) => {
(await self_.close_($task))
}))
}

export async function Stream_zip$(self_, that_, $task) {
return ff_core_Stream.Stream((async ($task) => {
{
const _1 = ff_core_Pair.Pair((await self_.next_($task)), (await that_.next_($task)));
if(_1.first_.Some && _1.second_.Some) {
const x_ = _1.first_.value_;
const y_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(x_, y_))
}
{
return ff_core_Option.None()
}
}
}), (async ($task) => {
try {
(await self_.close_($task))
} finally {
(await that_.close_($task))
}
}))
}

export async function Stream_takeFirst$(self_, count_ = 1, $task) {
let remaining_ = count_;
return ff_core_Stream.Stream((async ($task) => {
return ff_core_Option.Option_filter((await self_.next_($task)), ((_) => {
remaining_ -= 1;
return (remaining_ >= 0)
}))
}), (async ($task) => {
(await self_.close_($task))
}))
}

export async function Stream_dropFirst$(self_, count_ = 1, $task) {
let remaining_ = count_;
return ff_core_Stream.Stream((async ($task) => {
while((remaining_ >= 1)) {
do {
const _1 = (await self_.next_($task));
if(_1.None) {
remaining_ = 0
break
}
if(_1.Some) {
remaining_ -= 1
break
}
} while(false)
};
return (await self_.next_($task))
}), (async ($task) => {
(await self_.close_($task))
}))
}

export async function Stream_takeWhile$(self_, body_, $task) {
let done_ = false;
return ff_core_Stream.Stream((async ($task) => {
if(done_) {
return ff_core_Option.None()
} else {
{
const _1 = (await self_.next_($task));
if(_1.None) {
done_ = true;
return ff_core_Option.None()
}
if(_1.Some) {
const o_ = _1;
const x_ = _1.value_;
done_ = (!(await body_(x_, $task)));
if(done_) {
return ff_core_Option.None()
} else {
return o_
}
return
}
}
}
}), (async ($task) => {
(await self_.close_($task))
}))
}

export async function Stream_dropWhile$(self_, body_, $task) {
let done_ = false;
return ff_core_Stream.Stream((async ($task) => {
if((!done_)) {
let result_ = ff_core_Option.None();
while((!done_)) {
do {
const _1 = (await self_.next_($task));
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
if((await body_(x_, $task))) {

break
}
}
if(_1.Some) {
const o_ = _1;
const x_ = _1.value_;
result_ = o_;
done_ = true
break
}
} while(false)
};
return result_
} else {
return (await self_.next_($task))
}
}), (async ($task) => {
(await self_.close_($task))
}))
}

export async function Stream_pairs$(self_, $task) {
let i_ = 0;
return (await ff_core_Stream.Stream_map$(self_, (async (x_, $task) => {
const r_ = ff_core_Pair.Pair(i_, x_);
i_ += 1;
return r_
}), $task))
}

export async function Stream_chunked$(self_, size_, $task) {
let remaining_ = size_;
return ff_core_Stream.Stream((async ($task) => {
if((remaining_ <= 0)) {
return ff_core_Option.None()
} else {
{
const _1 = (await self_.next_($task));
if(_1.None) {
remaining_ = (-1);
return ff_core_Option.None()
}
if(_1.Some) {
const x_ = _1.value_;
let list_ = [x_];
remaining_ -= 1;
while((remaining_ > 0)) {
remaining_ -= 1;
do {
const _1 = (await self_.next_($task));
if(_1.None) {
remaining_ = (-1)
break
}
if(_1.Some) {
const x_ = _1.value_;
list_ = [x_, ...list_]
break
}
} while(false)
};
if((remaining_ !== (-1))) {
remaining_ = size_
};
return ff_core_Option.Some(ff_core_List.List_reverse(list_))
}
}
}
}), (async ($task) => {
(await self_.close_($task))
}))
}

export async function Stream_use$(self_, body_, $task) {
try {
return (await body_(self_, $task))
} finally {
(await self_.close_($task))
}
}

export async function Stream_each$(self_, body_, $task) {
try {
let done_ = false;
while((!done_)) {
do {
const _1 = (await self_.next_($task));
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
(await body_(x_, $task))
break
}
} while(false)
}
} finally {
(await self_.close_($task))
}
}

export async function Stream_eachWhile$(self_, body_, $task) {
try {
let done_ = false;
while((!done_)) {
do {
const _1 = (await self_.next_($task));
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
done_ = (!(await body_(x_, $task)))
break
}
} while(false)
}
} finally {
(await self_.close_($task))
}
}

export async function Stream_all$(self_, body_, $task) {
let result_ = true;
(await ff_core_Stream.Stream_eachWhile$(self_, (async (x_, $task) => {
result_ = (result_ && (await body_(x_, $task)));
return result_
}), $task));
return result_
}

export async function Stream_any$(self_, body_, $task) {
let result_ = false;
(await ff_core_Stream.Stream_eachWhile$(self_, (async (x_, $task) => {
result_ = (result_ || (await body_(x_, $task)));
return (!result_)
}), $task));
return result_
}

export async function Stream_first$(self_, $task) {
try {
return (await self_.next_($task))
} finally {
(await self_.close_($task))
}
}

export async function Stream_last$(self_, $task) {
try {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
do {
const _1 = (await self_.next_($task));
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const o_ = _1;
const x_ = _1.value_;
result_ = o_
break
}
} while(false)
};
return result_
} finally {
(await self_.close_($task))
}
}

export async function Stream_grabFirst$(self_, $task) {
return ff_core_Option.Option_else((await ff_core_Stream.Stream_first$(self_, $task)), (() => {
return ff_core_Core.panic_("grabFirst() on empty iterator")
}))
}

export async function Stream_grabLast$(self_, $task) {
return ff_core_Option.Option_else((await ff_core_Stream.Stream_last$(self_, $task)), (() => {
return ff_core_Core.panic_("grabLast() on empty iterator")
}))
}

export async function Stream_collectFirst$(self_, body_, $task) {
try {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
do {
const _1 = (await self_.next_($task));
if(_1.None) {
done_ = true
break
}
if(_1.Some) {
const x_ = _1.value_;
do {
const _1 = (await body_(x_, $task));
if(_1.None) {

break
}
{
const o_ = _1;
done_ = true;
result_ = o_
break
}
} while(false)
break
}
} while(false)
};
return result_
} finally {
(await self_.close_($task))
}
}

export async function Stream_find$(self_, body_, $task) {
return (await ff_core_Stream.Stream_first$((await ff_core_Stream.Stream_filter$(self_, body_, $task)), $task))
}

export async function Stream_foldLeft$(self_, initial_, body_, $task) {
let result_ = initial_;
(await ff_core_Stream.Stream_each$(self_, (async (_w1, $task) => {
result_ = (await body_(result_, _w1, $task))
}), $task));
return result_
}

export async function Stream_toArray$(self_, $task) {
const array_ = ff_core_Array.new_();
(await ff_core_Stream.Stream_each$(self_, (async (_w1, $task) => {
ff_core_Array.Array_push(array_, _w1)
}), $task));
return array_
}

export async function Stream_toList$(self_, $task) {
return ff_core_Array.Array_drain((await ff_core_Stream.Stream_toArray$(self_, $task)))
}

export function Stream_flatten(self_) {
return ff_core_Stream.Stream_flatMap(self_, ((_w1) => {
return _w1
}))
}

export async function Stream_flatten$(self_, $task) {
return (await ff_core_Stream.Stream_flatMap$(self_, (async (_w1, $task) => {
return _w1
}), $task))
}

export function Stream_toSet(self_, ff_core_Ordering_Order$T) {
return ff_core_List.List_toSet(ff_core_Stream.Stream_toList(self_), ff_core_Ordering_Order$T)
}

export async function Stream_toSet$(self_, ff_core_Ordering_Order$T, $task) {
return ff_core_List.List_toSet((await ff_core_Stream.Stream_toList$(self_, $task)), ff_core_Ordering_Order$T)
}

export function Stream_toMap(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_toMap(ff_core_Stream.Stream_toList(self_), ff_core_Ordering_Order$K)
}

export async function Stream_toMap$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_List.List_toMap((await ff_core_Stream.Stream_toList$(self_, $task)), ff_core_Ordering_Order$K)
}

export function Stream_toBuffer(self_) {
const builder_ = ff_core_Array.new_();
ff_core_Stream.Stream_each(self_, ((_w1) => {
ff_core_Array.Array_push(builder_, _w1)
}));
return ff_core_Buffer.fromBufferArray_(ff_core_Array.Array_drain(builder_))
}

export function Stream_toString(self_, encoding_ = "utf8") {
return ff_core_Buffer.Buffer_toString(ff_core_Stream.Stream_toBuffer(self_), encoding_)
}

export function Stream_readBytes(self_, bytes_) {
if((bytes_ <= 0)) {
return ff_core_Pair.Pair([], self_)
} else {
const buffers_ = ff_core_Array.new_();
let buffer_ = ff_core_Option.Option_grab(self_.next_());
let taken_ = 0;
let remainder_ = ff_core_Option.None();
while(ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Buffer.ff_core_Equal_Equal$ff_core_Buffer_Buffer).equals_(remainder_, ff_core_Option.None())) {
const needed_ = (bytes_ - taken_);
if((needed_ > ff_core_Buffer.Buffer_size(buffer_))) {
ff_core_Array.Array_push(buffers_, buffer_);
taken_ += ff_core_Buffer.Buffer_size(buffer_);
buffer_ = ff_core_Option.Option_grab(self_.next_())
} else {
ff_core_Array.Array_push(buffers_, ff_core_Buffer.Buffer_view(buffer_, 0, needed_));
remainder_ = ff_core_Option.Some(ff_core_Buffer.Buffer_view(buffer_, needed_, ff_core_Buffer.Buffer_size(buffer_)))
}
};
return ff_core_Pair.Pair(ff_core_Array.Array_drain(buffers_), ff_core_Stream.Stream_addAll(ff_core_Option.Option_toStream(remainder_, false), self_))
}
}

export async function Stream_toBuffer$(self_, $task) {
const builder_ = ff_core_Array.new_();
(await ff_core_Stream.Stream_each$(self_, (async (_w1, $task) => {
ff_core_Array.Array_push(builder_, _w1)
}), $task));
return ff_core_Buffer.fromBufferArray_(ff_core_Array.Array_drain(builder_))
}

export async function Stream_toString$(self_, encoding_ = "utf8", $task) {
return ff_core_Buffer.Buffer_toString((await ff_core_Stream.Stream_toBuffer$(self_, $task)), encoding_)
}

export async function Stream_readBytes$(self_, bytes_, $task) {
if((bytes_ <= 0)) {
return ff_core_Pair.Pair([], self_)
} else {
const buffers_ = ff_core_Array.new_();
let buffer_ = ff_core_Option.Option_grab((await self_.next_($task)));
let taken_ = 0;
let remainder_ = ff_core_Option.None();
while(ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Buffer.ff_core_Equal_Equal$ff_core_Buffer_Buffer).equals_(remainder_, ff_core_Option.None())) {
const needed_ = (bytes_ - taken_);
if((needed_ > ff_core_Buffer.Buffer_size(buffer_))) {
ff_core_Array.Array_push(buffers_, buffer_);
taken_ += ff_core_Buffer.Buffer_size(buffer_);
buffer_ = ff_core_Option.Option_grab((await self_.next_($task)))
} else {
ff_core_Array.Array_push(buffers_, ff_core_Buffer.Buffer_view(buffer_, 0, needed_));
remainder_ = ff_core_Option.Some(ff_core_Buffer.Buffer_view(buffer_, needed_, ff_core_Buffer.Buffer_size(buffer_)))
}
};
return ff_core_Pair.Pair(ff_core_Array.Array_drain(buffers_), (await ff_core_Stream.Stream_addAll$((await ff_core_Option.Option_toStream$(remainder_, false, $task)), self_, $task)))
}
}




