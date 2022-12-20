

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

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

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Iterator
export function Iterator(next_, close_) {
return {next_, close_};
}



export function make_(next_, close_ = (() => {

})) {
return ff_core_Iterator.Iterator(next_, close_)
}

export async function make_$(next_, close_ = (async ($c) => {

}), $c) {
return ff_core_Iterator.Iterator(next_, close_)
}

export function Iterator_concat(self_, that_) {
let firstDone_ = false;
return ff_core_Iterator.Iterator((() => {
if(firstDone_) {
return that_.next_()
} else {
return ff_core_Option.Option_orElse(self_.next_(), (() => {
firstDone_ = true;
return that_.next_()
}))
}
}), (() => {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return self_.close_()
})), (() => {
that_.close_()
})))
}))
}

export function Iterator_map(self_, body_) {
return ff_core_Iterator.Iterator((() => {
return ff_core_Option.Option_map(self_.next_(), body_)
}), (() => {
self_.close_()
}))
}

export function Iterator_flatMap(self_, body_) {
let inner_ = ff_core_Iterator.Iterator((() => {
return ff_core_Option.None()
}), (() => {

}));
return ff_core_Iterator.Iterator((() => {
let result_ = ff_core_Option.None();
while((result_ == ff_core_Option.None())) {
for(;;) {
const _1 = inner_.next_();
{
const i_ = _1;
if(_1.Some) {
result_ = ff_core_Option.Some(i_)
break
}
}
{
if(_1.None) {
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
}
{
if(_1.Some) {
const o_ = _1.value_;
inner_ = body_(o_)
break
}
}
}
break
}
}
}
};
return ff_core_Option.Option_expect(result_)
}), (() => {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return inner_.close_()
})), (() => {
self_.close_()
})))
}))
}

export function Iterator_collect(self_, body_) {
return ff_core_Iterator.Iterator_flatMap(self_, ((_w1) => {
return ff_core_Option.Option_toIterator(body_(_w1))
}))
}

export function Iterator_filter(self_, body_) {
return ff_core_Iterator.Iterator((() => {
let result_ = ff_core_Option.None();
while((result_ == ff_core_Option.None())) {
for(;;) {
const _1 = self_.next_();
{
if(_1.Some) {
const x_ = _1.value_;
const _guard1 = body_(x_);
if(_guard1) {
result_ = ff_core_Option.Some(ff_core_Option.Some(x_))
break
}
}
}
{
if(_1.Some) {

break
}
}
{
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
}
}
};
return ff_core_Option.Option_expect(result_)
}), (() => {
self_.close_()
}))
}

export function Iterator_zip(self_, that_) {
return ff_core_Iterator.Iterator((() => {
{
const _1 = ff_core_Pair.Pair(self_.next_(), that_.next_());
{
if(_1.first_.Some) {
const x_ = _1.first_.value_;
if(_1.second_.Some) {
const y_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(x_, y_))
return
}
}
}
{
return ff_core_Option.None()
return
}
}
}), (() => {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return self_.close_()
})), (() => {
that_.close_()
})))
}))
}

export function Iterator_takeFirst(self_, count_ = 1) {
let remaining_ = count_;
return ff_core_Iterator.Iterator((() => {
return ff_core_Option.Option_filter(self_.next_(), ((_) => {
remaining_ -= 1;
return (remaining_ >= 0)
}))
}), (() => {
self_.close_()
}))
}

export function Iterator_dropFirst(self_, count_ = 1) {
let remaining_ = count_;
return ff_core_Iterator.Iterator((() => {
while((remaining_ >= 1)) {
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
remaining_ = 0
break
}
}
{
if(_1.Some) {
remaining_ -= 1
break
}
}
}
};
return self_.next_()
}), (() => {
self_.close_()
}))
}

export function Iterator_takeWhile(self_, body_) {
let done_ = false;
return ff_core_Iterator.Iterator((() => {
if(done_) {
return ff_core_Option.None()
} else {
{
const _1 = self_.next_();
{
if(_1.None) {
done_ = true;
return ff_core_Option.None()
return
}
}
{
const o_ = _1;
if(_1.Some) {
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
}
}), (() => {
self_.close_()
}))
}

export function Iterator_dropWhile(self_, body_) {
let done_ = false;
return ff_core_Iterator.Iterator((() => {
if((!done_)) {
let result_ = ff_core_Option.None();
while((!done_)) {
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
const _guard1 = body_(x_);
if(_guard1) {

break
}
}
}
{
const o_ = _1;
if(_1.Some) {
const x_ = _1.value_;
result_ = o_;
done_ = true
break
}
}
}
};
return result_
} else {
return self_.next_()
}
}), (() => {
self_.close_()
}))
}

export function Iterator_pairs(self_) {
let i_ = 0;
return ff_core_Iterator.Iterator_map(self_, ((x_) => {
const r_ = ff_core_Pair.Pair(i_, x_);
i_ += 1;
return r_
}))
}

export function Iterator_chunked(self_, size_) {
let remaining_ = size_;
return ff_core_Iterator.Iterator((() => {
if((remaining_ <= 0)) {
return ff_core_Option.None()
} else {
{
const _1 = self_.next_();
{
if(_1.None) {
remaining_ = (-1);
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
let list_ = ff_core_List.Link(x_, ff_core_List.Empty());
remaining_ -= 1;
while((remaining_ > 0)) {
remaining_ -= 1;
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
remaining_ = (-1)
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
list_ = ff_core_List.Link(x_, list_)
break
}
}
}
};
if((remaining_ != (-1))) {
remaining_ = size_
};
return ff_core_Option.Some(ff_core_List.List_reverse(list_))
return
}
}
}
}
}), (() => {
self_.close_()
}))
}

export function Iterator_use(self_, body_) {
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return body_(self_)
})), (() => {
self_.close_()
})))
}

export function Iterator_each(self_, body_) {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
let done_ = false;
while((!done_)) {
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
body_(x_)
break
}
}
}
}
})), (() => {
self_.close_()
})))
}

export function Iterator_eachWhile(self_, body_) {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
let done_ = false;
while((!done_)) {
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
done_ = (!body_(x_))
break
}
}
}
}
})), (() => {
self_.close_()
})))
}

export function Iterator_all(self_, body_) {
let result_ = true;
ff_core_Iterator.Iterator_eachWhile(self_, ((x_) => {
result_ = (result_ && body_(x_));
return result_
}));
return result_
}

export function Iterator_any(self_, body_) {
let result_ = false;
ff_core_Iterator.Iterator_eachWhile(self_, ((x_) => {
result_ = (result_ || body_(x_));
return (!result_)
}));
return result_
}

export function Iterator_first(self_) {
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return self_.next_()
})), (() => {
self_.close_()
})))
}

export function Iterator_last(self_) {
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
done_ = true
break
}
}
{
const o_ = _1;
if(_1.Some) {
const x_ = _1.value_;
result_ = o_
break
}
}
}
};
return result_
})), (() => {
self_.close_()
})))
}

export function Iterator_expectFirst(self_) {
return ff_core_Option.Option_else(ff_core_Iterator.Iterator_first(self_), (() => {
return ff_core_Core.panic_("expectFirst() on empty iterator")
}))
}

export function Iterator_expectLast(self_) {
return ff_core_Option.Option_else(ff_core_Iterator.Iterator_last(self_), (() => {
return ff_core_Core.panic_("expectLast() on empty iterator")
}))
}

export function Iterator_collectFirst(self_, body_) {
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
for(;;) {
const _1 = self_.next_();
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
for(;;) {
const _1 = body_(x_);
{
if(_1.None) {

break
}
}
{
const o_ = _1;
done_ = true;
result_ = o_
break
}
}
break
}
}
}
};
return result_
})), (() => {
self_.close_()
})))
}

export function Iterator_find(self_, body_) {
return ff_core_Iterator.Iterator_first(ff_core_Iterator.Iterator_filter(self_, body_))
}

export function Iterator_foldLeft(self_, initial_, body_) {
let result_ = initial_;
ff_core_Iterator.Iterator_each(self_, ((_w1) => {
result_ = body_(result_, _w1)
}));
return result_
}

export function Iterator_toArray(self_) {
const builder_ = ff_core_ArrayBuilder.empty_();
ff_core_Iterator.Iterator_each(self_, ((value_) => {
ff_core_ArrayBuilder.ArrayBuilder_add(builder_, value_)
}));
return ff_core_ArrayBuilder.ArrayBuilder_toArray(builder_)
}

export function Iterator_toList(self_) {
return ff_core_Array.Array_toList(ff_core_Iterator.Iterator_toArray(self_))
}

export async function Iterator_concat$(self_, that_, $c) {
let firstDone_ = false;
return ff_core_Iterator.Iterator((async ($c) => {
if(firstDone_) {
return (await that_.next_($c))
} else {
return (await ff_core_Option.Option_orElse$((await self_.next_($c)), (async ($c) => {
firstDone_ = true;
return (await that_.next_($c))
}), $c))
}
}), (async ($c) => {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await self_.close_($c))
}), $c)), (async ($c) => {
(await that_.close_($c))
}), $c)))
}))
}

export async function Iterator_map$(self_, body_, $c) {
return ff_core_Iterator.Iterator((async ($c) => {
return (await ff_core_Option.Option_map$((await self_.next_($c)), body_, $c))
}), (async ($c) => {
(await self_.close_($c))
}))
}

export async function Iterator_flatMap$(self_, body_, $c) {
let inner_ = ff_core_Iterator.Iterator((async ($c) => {
return ff_core_Option.None()
}), (async ($c) => {

}));
return ff_core_Iterator.Iterator((async ($c) => {
let result_ = ff_core_Option.None();
while((result_ == ff_core_Option.None())) {
for(;;) {
const _1 = (await inner_.next_($c));
{
const i_ = _1;
if(_1.Some) {
result_ = ff_core_Option.Some(i_)
break
}
}
{
if(_1.None) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
}
{
if(_1.Some) {
const o_ = _1.value_;
inner_ = (await body_(o_, $c))
break
}
}
}
break
}
}
}
};
return ff_core_Option.Option_expect(result_)
}), (async ($c) => {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await inner_.close_($c))
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}))
}

export async function Iterator_collect$(self_, body_, $c) {
return (await ff_core_Iterator.Iterator_flatMap$(self_, (async (_w1, $c) => {
return (await ff_core_Option.Option_toIterator$((await body_(_w1, $c)), $c))
}), $c))
}

export async function Iterator_filter$(self_, body_, $c) {
return ff_core_Iterator.Iterator((async ($c) => {
let result_ = ff_core_Option.None();
while((result_ == ff_core_Option.None())) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.Some) {
const x_ = _1.value_;
const _guard1 = (await body_(x_, $c));
if(_guard1) {
result_ = ff_core_Option.Some(ff_core_Option.Some(x_))
break
}
}
}
{
if(_1.Some) {

break
}
}
{
if(_1.None) {
result_ = ff_core_Option.Some(ff_core_Option.None())
break
}
}
}
};
return ff_core_Option.Option_expect(result_)
}), (async ($c) => {
(await self_.close_($c))
}))
}

export async function Iterator_zip$(self_, that_, $c) {
return ff_core_Iterator.Iterator((async ($c) => {
{
const _1 = ff_core_Pair.Pair((await self_.next_($c)), (await that_.next_($c)));
{
if(_1.first_.Some) {
const x_ = _1.first_.value_;
if(_1.second_.Some) {
const y_ = _1.second_.value_;
return ff_core_Option.Some(ff_core_Pair.Pair(x_, y_))
return
}
}
}
{
return ff_core_Option.None()
return
}
}
}), (async ($c) => {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await self_.close_($c))
}), $c)), (async ($c) => {
(await that_.close_($c))
}), $c)))
}))
}

export async function Iterator_takeFirst$(self_, count_ = 1, $c) {
let remaining_ = count_;
return ff_core_Iterator.Iterator((async ($c) => {
return ff_core_Option.Option_filter((await self_.next_($c)), ((_) => {
remaining_ -= 1;
return (remaining_ >= 0)
}))
}), (async ($c) => {
(await self_.close_($c))
}))
}

export async function Iterator_dropFirst$(self_, count_ = 1, $c) {
let remaining_ = count_;
return ff_core_Iterator.Iterator((async ($c) => {
while((remaining_ >= 1)) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
remaining_ = 0
break
}
}
{
if(_1.Some) {
remaining_ -= 1
break
}
}
}
};
return (await self_.next_($c))
}), (async ($c) => {
(await self_.close_($c))
}))
}

export async function Iterator_takeWhile$(self_, body_, $c) {
let done_ = false;
return ff_core_Iterator.Iterator((async ($c) => {
if(done_) {
return ff_core_Option.None()
} else {
{
const _1 = (await self_.next_($c));
{
if(_1.None) {
done_ = true;
return ff_core_Option.None()
return
}
}
{
const o_ = _1;
if(_1.Some) {
const x_ = _1.value_;
done_ = (!(await body_(x_, $c)));
if(done_) {
return ff_core_Option.None()
} else {
return o_
}
return
}
}
}
}
}), (async ($c) => {
(await self_.close_($c))
}))
}

export async function Iterator_dropWhile$(self_, body_, $c) {
let done_ = false;
return ff_core_Iterator.Iterator((async ($c) => {
if((!done_)) {
let result_ = ff_core_Option.None();
while((!done_)) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
const _guard1 = (await body_(x_, $c));
if(_guard1) {

break
}
}
}
{
const o_ = _1;
if(_1.Some) {
const x_ = _1.value_;
result_ = o_;
done_ = true
break
}
}
}
};
return result_
} else {
return (await self_.next_($c))
}
}), (async ($c) => {
(await self_.close_($c))
}))
}

export async function Iterator_pairs$(self_, $c) {
let i_ = 0;
return (await ff_core_Iterator.Iterator_map$(self_, (async (x_, $c) => {
const r_ = ff_core_Pair.Pair(i_, x_);
i_ += 1;
return r_
}), $c))
}

export async function Iterator_chunked$(self_, size_, $c) {
let remaining_ = size_;
return ff_core_Iterator.Iterator((async ($c) => {
if((remaining_ <= 0)) {
return ff_core_Option.None()
} else {
{
const _1 = (await self_.next_($c));
{
if(_1.None) {
remaining_ = (-1);
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
let list_ = ff_core_List.Link(x_, ff_core_List.Empty());
remaining_ -= 1;
while((remaining_ > 0)) {
remaining_ -= 1;
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
remaining_ = (-1)
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
list_ = ff_core_List.Link(x_, list_)
break
}
}
}
};
if((remaining_ != (-1))) {
remaining_ = size_
};
return ff_core_Option.Some(ff_core_List.List_reverse(list_))
return
}
}
}
}
}), (async ($c) => {
(await self_.close_($c))
}))
}

export async function Iterator_use$(self_, body_, $c) {
return ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await body_(self_, $c))
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}

export async function Iterator_each$(self_, body_, $c) {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
let done_ = false;
while((!done_)) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
(await body_(x_, $c))
break
}
}
}
}
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}

export async function Iterator_eachWhile$(self_, body_, $c) {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
let done_ = false;
while((!done_)) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
done_ = (!(await body_(x_, $c)))
break
}
}
}
}
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}

export async function Iterator_all$(self_, body_, $c) {
let result_ = true;
(await ff_core_Iterator.Iterator_eachWhile$(self_, (async (x_, $c) => {
result_ = (result_ && (await body_(x_, $c)));
return result_
}), $c));
return result_
}

export async function Iterator_any$(self_, body_, $c) {
let result_ = false;
(await ff_core_Iterator.Iterator_eachWhile$(self_, (async (x_, $c) => {
result_ = (result_ || (await body_(x_, $c)));
return (!result_)
}), $c));
return result_
}

export async function Iterator_first$(self_, $c) {
return ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await self_.next_($c))
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}

export async function Iterator_last$(self_, $c) {
return ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
done_ = true
break
}
}
{
const o_ = _1;
if(_1.Some) {
const x_ = _1.value_;
result_ = o_
break
}
}
}
};
return result_
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}

export async function Iterator_expectFirst$(self_, $c) {
return ff_core_Option.Option_else((await ff_core_Iterator.Iterator_first$(self_, $c)), (() => {
return ff_core_Core.panic_("expectFirst() on empty iterator")
}))
}

export async function Iterator_expectLast$(self_, $c) {
return ff_core_Option.Option_else((await ff_core_Iterator.Iterator_last$(self_, $c)), (() => {
return ff_core_Core.panic_("expectLast() on empty iterator")
}))
}

export async function Iterator_collectFirst$(self_, body_, $c) {
return ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
let done_ = false;
let result_ = ff_core_Option.None();
while((!done_)) {
for(;;) {
const _1 = (await self_.next_($c));
{
if(_1.None) {
done_ = true
break
}
}
{
if(_1.Some) {
const x_ = _1.value_;
for(;;) {
const _1 = (await body_(x_, $c));
{
if(_1.None) {

break
}
}
{
const o_ = _1;
done_ = true;
result_ = o_
break
}
}
break
}
}
}
};
return result_
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}

export async function Iterator_find$(self_, body_, $c) {
return (await ff_core_Iterator.Iterator_first$((await ff_core_Iterator.Iterator_filter$(self_, body_, $c)), $c))
}

export async function Iterator_foldLeft$(self_, initial_, body_, $c) {
let result_ = initial_;
(await ff_core_Iterator.Iterator_each$(self_, (async (_w1, $c) => {
result_ = (await body_(result_, _w1, $c))
}), $c));
return result_
}

export async function Iterator_toArray$(self_, $c) {
const builder_ = ff_core_ArrayBuilder.empty_();
(await ff_core_Iterator.Iterator_each$(self_, (async (value_, $c) => {
ff_core_ArrayBuilder.ArrayBuilder_add(builder_, value_)
}), $c));
return ff_core_ArrayBuilder.ArrayBuilder_toArray(builder_)
}

export async function Iterator_toList$(self_, $c) {
return ff_core_Array.Array_toList((await ff_core_Iterator.Iterator_toArray$(self_, $c)))
}

export function Iterator_toSet(self_, ff_core_Ordering_Order$T) {
return ff_core_Array.Array_toSet(ff_core_Iterator.Iterator_toArray(self_), ff_core_Ordering_Order$T)
}

export async function Iterator_toSet$(self_, ff_core_Ordering_Order$T, $c) {
return ff_core_Array.Array_toSet((await ff_core_Iterator.Iterator_toArray$(self_, $c)), ff_core_Ordering_Order$T)
}

export function Iterator_toMap(self_, ff_core_Ordering_Order$K) {
return ff_core_Array.Array_toMap(ff_core_Iterator.Iterator_toArray(self_), ff_core_Ordering_Order$K)
}

export async function Iterator_toMap$(self_, ff_core_Ordering_Order$K, $c) {
return ff_core_Array.Array_toMap((await ff_core_Iterator.Iterator_toArray$(self_, $c)), ff_core_Ordering_Order$K)
}

export function Iterator_toBuffer(self_) {
const builder_ = ff_core_ArrayBuilder.empty_();
ff_core_Iterator.Iterator_each(self_, ((value_) => {
ff_core_ArrayBuilder.ArrayBuilder_add(builder_, value_)
}));
return ff_core_Buffer.fromBufferArray_(ff_core_ArrayBuilder.ArrayBuilder_toArray(builder_))
}

export function Iterator_toString(self_, encoding_ = "utf8") {
return ff_core_Buffer.Buffer_toString(ff_core_Iterator.Iterator_toBuffer(self_), encoding_)
}

export async function Iterator_toBuffer$(self_, $c) {
const builder_ = ff_core_ArrayBuilder.empty_();
(await ff_core_Iterator.Iterator_each$(self_, (async (value_, $c) => {
ff_core_ArrayBuilder.ArrayBuilder_add(builder_, value_)
}), $c));
return ff_core_Buffer.fromBufferArray_(ff_core_ArrayBuilder.ArrayBuilder_toArray(builder_))
}

export async function Iterator_toString$(self_, encoding_ = "utf8", $c) {
return ff_core_Buffer.Buffer_toString((await ff_core_Iterator.Iterator_toBuffer$(self_, $c)), encoding_)
}




