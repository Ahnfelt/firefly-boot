import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// newtype Stream







export function Stream_map(self_, body_) {
return (() => {
const a_ = self_();
return ff_core_Iterator.Iterator((() => {
return ff_core_Option.Option_map(a_.next_(), body_)
}), (() => {
a_.close_()
}))
})
}

export function Stream_flatMap(self_, body_) {
return (() => {
const a_ = self_();
let b_ = ff_core_Option.None();
return ff_core_Iterator.Iterator((() => {
function go_() {
_tailcall: for(;;) {
{
const _1 = ff_core_Option.Option_flatMap(b_, ((_w1) => {
return _w1.next_()
}));
{
const o_ = _1;
if(_1.Some) {
const v_ = _1.value_;
return o_
return
}
}
{
if(_1.None) {
ff_core_Option.Option_each(b_, ((_w1) => {
_w1.close_()
}));
{
const _1 = a_.next_();
{
if(_1.Some) {
const x_ = _1.value_;
const s_ = body_(x_);
b_ = ff_core_Option.Some(s_());
{


continue _tailcall
}
return
}
}
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
}
return
}
}
}
return
}
}
return go_()
}), (() => {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return ff_core_Option.Option_each(b_, ((_w1) => {
_w1.close_()
}))
})), (() => {
a_.close_()
})))
}))
})
}

export function Stream_filter(self_, body_) {
return (() => {
const a_ = self_();
return ff_core_Iterator.Iterator((() => {
function go_() {
_tailcall: for(;;) {
{
const _1 = a_.next_();
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
const _guard1 = body_(x_);
if(_guard1) {
return ff_core_Option.Some(x_)
return
}
}
}
{
if(_1.Some) {
{


continue _tailcall
}
return
}
}
}
return
}
}
return go_()
}), (() => {
a_.close_()
}))
})
}

export function Stream_zip(self_, that_) {
return (() => {
const a_ = self_();
const b_ = ff_core_Try.Try_expect(ff_core_Try.Try_onThrow(ff_core_Core.try_((() => {
return that_()
})), (() => {
a_.close_()
})));
return ff_core_Iterator.Iterator((() => {
{
const _1 = ff_core_Pair.Pair(a_.next_(), b_.next_());
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
return a_.close_()
})), (() => {
b_.close_()
})))
}))
})
}

export function Stream_concat(self_, that_) {
return (() => {
let firstDone_ = false;
let iterator_ = self_();
return ff_core_Iterator.Iterator((() => {
return ff_core_Option.Option_orElse(iterator_.next_(), (() => {
if(firstDone_) {
return ff_core_Option.None()
} else {
firstDone_ = true;
iterator_.close_();
iterator_ = that_();
return iterator_.next_()
}
}))
}), (() => {
iterator_.close_()
}))
})
}

export function Stream_parse(self_, body_) {
return (() => {
const iterator_ = self_();
const i_ = ff_core_Try.Try_expect(ff_core_Try.Try_onThrow(ff_core_Core.try_((() => {
return body_(iterator_)
})), (() => {
iterator_.close_()
})));
return ff_core_Iterator.Iterator((() => {
return i_.next_()
}), (() => {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return i_.close_()
})), (() => {
iterator_.close_()
})))
}))
})
}

export function Stream_each(self_, body_) {
const a_ = self_();
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
function go_() {
_tailcall: for(;;) {
{
const _1 = a_.next_();
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
body_(x_);
{


continue _tailcall
}
return
}
}
}
return
}
}
return go_()
})), (() => {
a_.close_()
})))
}

export function Stream_eachWhile(self_, body_) {
const a_ = self_();
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
function go_() {
_tailcall: for(;;) {
{
const _1 = a_.next_();
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
if(body_(x_)) {
{


continue _tailcall
}
}
return
}
}
}
return
}
}
return go_()
})), (() => {
a_.close_()
})))
}

export async function Stream_map$(self_, body_, $c) {
return (async ($c) => {
const a_ = (await self_($c));
return ff_core_Iterator.Iterator((async ($c) => {
return (await ff_core_Option.Option_map$((await a_.next_($c)), body_, $c))
}), (async ($c) => {
(await a_.close_($c))
}))
})
}

export async function Stream_flatMap$(self_, body_, $c) {
return (async ($c) => {
const a_ = (await self_($c));
let b_ = ff_core_Option.None();
return ff_core_Iterator.Iterator((async ($c) => {
async function go_$($c) {
_tailcall: for(;;) {
{
const _1 = (await ff_core_Option.Option_flatMap$(b_, (async (_w1, $c) => {
return (await _w1.next_($c))
}), $c));
{
const o_ = _1;
if(_1.Some) {
const v_ = _1.value_;
return o_
return
}
}
{
if(_1.None) {
(await ff_core_Option.Option_each$(b_, (async (_w1, $c) => {
(await _w1.close_($c))
}), $c));
{
const _1 = (await a_.next_($c));
{
if(_1.Some) {
const x_ = _1.value_;
const s_ = (await body_(x_, $c));
b_ = ff_core_Option.Some((await s_($c)));
{


continue _tailcall
}
return
}
}
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
}
return
}
}
}
return
}
}
return (await go_$($c))
}), (async ($c) => {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await ff_core_Option.Option_each$(b_, (async (_w1, $c) => {
(await _w1.close_($c))
}), $c))
}), $c)), (async ($c) => {
(await a_.close_($c))
}), $c)))
}))
})
}

export async function Stream_filter$(self_, body_, $c) {
return (async ($c) => {
const a_ = (await self_($c));
return ff_core_Iterator.Iterator((async ($c) => {
async function go_$($c) {
_tailcall: for(;;) {
{
const _1 = (await a_.next_($c));
{
if(_1.None) {
return ff_core_Option.None()
return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
const _guard1 = (await body_(x_, $c));
if(_guard1) {
return ff_core_Option.Some(x_)
return
}
}
}
{
if(_1.Some) {
{


continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$($c))
}), (async ($c) => {
(await a_.close_($c))
}))
})
}

export async function Stream_zip$(self_, that_, $c) {
return (async ($c) => {
const a_ = (await self_($c));
const b_ = ff_core_Try.Try_expect((await ff_core_Try.Try_onThrow$((await ff_core_Core.try_$((async ($c) => {
return (await that_($c))
}), $c)), (async ($c) => {
(await a_.close_($c))
}), $c)));
return ff_core_Iterator.Iterator((async ($c) => {
{
const _1 = ff_core_Pair.Pair((await a_.next_($c)), (await b_.next_($c)));
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
return (await a_.close_($c))
}), $c)), (async ($c) => {
(await b_.close_($c))
}), $c)))
}))
})
}

export async function Stream_concat$(self_, that_, $c) {
return (async ($c) => {
let firstDone_ = false;
let iterator_ = (await self_($c));
return ff_core_Iterator.Iterator((async ($c) => {
return (await ff_core_Option.Option_orElse$((await iterator_.next_($c)), (async ($c) => {
if(firstDone_) {
return ff_core_Option.None()
} else {
firstDone_ = true;
(await iterator_.close_($c));
iterator_ = (await that_($c));
return (await iterator_.next_($c))
}
}), $c))
}), (async ($c) => {
(await iterator_.close_($c))
}))
})
}

export async function Stream_parse$(self_, body_, $c) {
return (async ($c) => {
const iterator_ = (await self_($c));
const i_ = ff_core_Try.Try_expect((await ff_core_Try.Try_onThrow$((await ff_core_Core.try_$((async ($c) => {
return (await body_(iterator_, $c))
}), $c)), (async ($c) => {
(await iterator_.close_($c))
}), $c)));
return ff_core_Iterator.Iterator((async ($c) => {
return (await i_.next_($c))
}), (async ($c) => {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await i_.close_($c))
}), $c)), (async ($c) => {
(await iterator_.close_($c))
}), $c)))
}))
})
}

export async function Stream_each$(self_, body_, $c) {
const a_ = (await self_($c));
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
async function go_$($c) {
_tailcall: for(;;) {
{
const _1 = (await a_.next_($c));
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
(await body_(x_, $c));
{


continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$($c))
}), $c)), (async ($c) => {
(await a_.close_($c))
}), $c)))
}

export async function Stream_eachWhile$(self_, body_, $c) {
const a_ = (await self_($c));
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
async function go_$($c) {
_tailcall: for(;;) {
{
const _1 = (await a_.next_($c));
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const x_ = _1.value_;
if((await body_(x_, $c))) {
{


continue _tailcall
}
}
return
}
}
}
return
}
}
return (await go_$($c))
}), $c)), (async ($c) => {
(await a_.close_($c))
}), $c)))
}




