

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

// type List
const Empty$ = {Empty: true};
export function Empty() {
return Empty$;
}
export function Link(head_, tail_) {
return {Link: true, head_, tail_};
}



export function range_(size_) {

        let result = ff_core_List.Empty();
        for(let i = size_ - 1; i >= 0; i--) {
            result = ff_core_List.Link(i, result);
        }
        return result;
    
}

export function build_(initial_, body_) {
function go_(state_, result_) {
_tailcall: for(;;) {
{
const _1 = body_(state_);
{
if(_1.None) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Some) {
const s_ = _1.value_.first_;
const x_ = _1.value_.second_;
{
const state_r_ = s_;
const result_r_ = ff_core_List.Link(x_, result_);
state_ = state_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(initial_, ff_core_List.Empty())
}

export async function range_$(size_, $task) {
throw new Error('Function range is missing on this target in async context.');
}

export async function build_$(initial_, body_, $task) {
async function go_$(state_, result_, $task) {
_tailcall: for(;;) {
{
const _1 = (await body_(state_, $task));
{
if(_1.None) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Some) {
const s_ = _1.value_.first_;
const x_ = _1.value_.second_;
{
const state_r_ = s_;
const result_r_ = ff_core_List.Link(x_, result_);
state_ = state_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$(initial_, ff_core_List.Empty(), $task))
}

export function List_addAll(self_, list_) {
return ff_core_List.List_flatten(ff_core_List.Link(self_, ff_core_List.Link(list_, ff_core_List.Empty())))
}

export function List_toStack(self_) {

            let current = self_;
            let result = [];
            while(current.Link) {
                result.push(current.head_);
                current = current.tail_;
            }
            return {array: result};
        
}

export function List_toArray(self_) {
return ff_core_Stack.Stack_drain(ff_core_List.List_toStack(self_))
}

export function List_grab(self_, index_) {
function go_(list_, i_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_Try.internalThrowGrabException_()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (i_ === 0);
if(_guard1) {
return head_
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
list_ = list_r_
i_ = i_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, index_)
}

export function List_first(self_) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
return ff_core_Option.Some(head_)
return
}
}
}
}

export function List_last(self_) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
if(_1.tail_.Empty) {
return ff_core_Option.Some(head_)
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
self_ = self_r_
continue _tailcall
}
return
}
}
}
return
}
}

export function List_grabFirst(self_) {
return ff_core_Option.Option_else(ff_core_List.List_first(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
}))
}

export function List_grabLast(self_) {
return ff_core_Option.Option_else(ff_core_List.List_last(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
}))
}

export function List_dropFirst(self_, count_ = 1) {
_tailcall: for(;;) {
{
const _1 = self_;
{
const _guard1 = (count_ <= 0);
if(_guard1) {
return self_
return
}
}
{
if(_1.Empty) {
return self_
return
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const count_r_ = (count_ - 1);
self_ = self_r_
count_ = count_r_
continue _tailcall
}
return
}
}
}
return
}
}

export function List_dropLast(self_, count_ = 1) {
return ff_core_List.List_reverse(ff_core_List.List_dropFirst(ff_core_List.List_reverse(self_), count_))
}

export function List_takeFirst(self_, count_ = 1) {
function go_(list_, count_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
const _guard1 = (count_ <= 0);
if(_guard1) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const count_r_ = (count_ - 1);
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
count_ = count_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, count_, ff_core_List.Empty())
}

export function List_takeLast(self_, count_ = 1) {
return ff_core_List.List_reverse(ff_core_List.List_takeFirst(ff_core_List.List_reverse(self_), count_))
}

export function List_pairs(self_) {
let i_ = 0;
return ff_core_List.List_map(self_, ((x_) => {
const r_ = ff_core_Pair.Pair(i_, x_);
i_ += 1;
return r_
}))
}

export function List_slice(self_, from_, until_) {
return ff_core_List.List_takeFirst(ff_core_List.List_dropFirst(self_, from_), (until_ - from_))
}

export function List_isEmpty(self_) {
{
const _1 = self_;
{
if(_1.Empty) {
return true
return
}
}
{
return false
return
}
}
}

export function List_size(self_) {
function go_(list_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return result_
return
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = (result_ + 1);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, 0)
}

export function List_each(self_, body_) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {

return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
body_(head_);
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export function List_all(self_, body_) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return true
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (!body_(head_));
if(_guard1) {
return false
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export function List_any(self_, body_) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return false
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = body_(head_);
if(_guard1) {
return true
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export function List_find(self_, body_) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = body_(head_);
if(_guard1) {
return ff_core_Option.Some(head_)
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export function List_filter(self_, body_) {
function go_(list_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
const _guard1 = body_(head_);
if(_guard1) {
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = result_;
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty())
}

export function List_partition(self_, body_) {
return ff_core_Pair.Pair(ff_core_List.List_filter(self_, body_), ff_core_List.List_filter(self_, ((_w1) => {
return (!body_(_w1))
})))
}

export function List_map(self_, body_) {
function go_(list_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(body_(head_), result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty())
}

export function List_flatMap(self_, body_) {
function go_(list_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_flatten(ff_core_List.List_reverse(result_))
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(body_(head_), result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty())
}

export function List_collect(self_, body_) {
return ff_core_Stream.Stream_toList(ff_core_Stream.Stream_collect(ff_core_List.List_toStream(self_, false), body_))
}

export function List_collectFirst(self_, body_) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const _1 = body_(head_);
{
if(_1.None) {
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
{
if(_1.Some) {
const value_ = _1.value_;
return ff_core_Option.Some(value_)
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

export function List_foldLeft(self_, initial_, body_) {
function go_(state_, list_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return state_
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const state_r_ = body_(state_, head_);
const list_r_ = tail_;
state_ = state_r_
list_ = list_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(initial_, self_)
}

export function List_updated(self_, index_, value_) {
function go_(list_, i_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
const _guard1 = (i_ === 0);
if(_guard1) {
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link(value_, result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, index_, ff_core_List.Empty())
}

export function List_modify(self_, index_, body_) {
function go_(list_, i_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
const _guard1 = (i_ === 0);
if(_guard1) {
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link(body_(head_), result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, index_, ff_core_List.Empty())
}

export function List_zip(self_, that_) {
function go_(list1_, list2_, result_) {
_tailcall: for(;;) {
{
const _1 = ff_core_Pair.Pair(list1_, list2_);
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
const xs_ = _1.first_.tail_;
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const ys_ = _1.second_.tail_;
{
const list1_r_ = xs_;
const list2_r_ = ys_;
const result_r_ = ff_core_List.Link(ff_core_Pair.Pair(x_, y_), result_);
list1_ = list1_r_
list2_ = list2_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
return ff_core_List.List_reverse(result_)
return
}
}
return
}
}
return go_(self_, that_, ff_core_List.Empty())
}

export function List_sortBy(self_, body_, ff_core_Ordering_Order$O) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
const stack_ = ff_core_List.List_toStack(self_);
ff_core_Stack.Stack_sortBy(stack_, body_, ff_core_Ordering_Order$O);
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}
}

export function List_sortWith(self_, compare_) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
const stack_ = ff_core_List.List_toStack(self_);
ff_core_Stack.Stack_sortWith(stack_, compare_);
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}
}

export function List_reverse(self_) {
function go_(list_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return result_
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty())
}

export function List_chunk(self_, chunkSize_) {
let results_ = ff_core_List.Empty();
let result_ = ff_core_List.Empty();
let added_ = 0;
ff_core_List.List_each(self_, ((item_) => {
if((added_ < chunkSize_)) {
result_ = ff_core_List.Link(item_, result_);
added_ += 1
} else {
results_ = ff_core_List.Link(ff_core_List.List_reverse(result_), results_);
result_ = ff_core_List.Link(item_, ff_core_List.Empty());
added_ = 1
}
}));
if((added_ !== 0)) {
results_ = ff_core_List.Link(ff_core_List.List_reverse(result_), results_)
};
return ff_core_List.List_reverse(results_)
}

export function List_toStream(self_, cycle_ = false) {
let remaining_ = self_;
return ff_core_Stream.Stream((() => {
{
const _1 = remaining_;
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
remaining_ = tail_;
return ff_core_Option.Some(head_)
return
}
}
{
if(_1.Empty) {
const _guard2 = self_;
if(_guard2.Link) {
const head_ = _guard2.head_;
const tail_ = _guard2.tail_;
const _guard1 = cycle_;
if(_guard1) {
remaining_ = tail_;
return ff_core_Option.Some(head_)
return
}
}
}
}
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
}
}), (() => {
remaining_ = ff_core_List.Empty()
}))
}

export function List_insertBetween(self_, separator_) {
return ff_core_List.List_dropFirst(ff_core_List.List_flatMap(self_, ((e_) => {
return ff_core_List.List_addAll(separator_, ff_core_List.Link(e_, ff_core_List.Empty()))
})), ff_core_List.List_size(separator_))
}

export async function List_addAll$(self_, list_, $task) {
return ff_core_List.List_flatten(ff_core_List.Link(self_, ff_core_List.Link(list_, ff_core_List.Empty())))
}

export async function List_toStack$(self_, $task) {
throw new Error('Function List_toStack is missing on this target in async context.');
}

export async function List_toArray$(self_, $task) {
return ff_core_Stack.Stack_drain(ff_core_List.List_toStack(self_))
}

export async function List_grab$(self_, index_, $task) {
function go_(list_, i_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_Try.internalThrowGrabException_()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (i_ === 0);
if(_guard1) {
return head_
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
list_ = list_r_
i_ = i_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, index_)
}

export async function List_first$(self_, $task) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
return ff_core_Option.Some(head_)
return
}
}
}
}

export async function List_last$(self_, $task) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
if(_1.tail_.Empty) {
return ff_core_Option.Some(head_)
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
self_ = self_r_
continue _tailcall
}
return
}
}
}
return
}
}

export async function List_grabFirst$(self_, $task) {
return ff_core_Option.Option_else(ff_core_List.List_first(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
}))
}

export async function List_grabLast$(self_, $task) {
return ff_core_Option.Option_else(ff_core_List.List_last(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
}))
}

export async function List_dropFirst$(self_, count_ = 1, $task) {
_tailcall: for(;;) {
{
const _1 = self_;
{
const _guard1 = (count_ <= 0);
if(_guard1) {
return self_
return
}
}
{
if(_1.Empty) {
return self_
return
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const count_r_ = (count_ - 1);
self_ = self_r_
count_ = count_r_
continue _tailcall
}
return
}
}
}
return
}
}

export async function List_dropLast$(self_, count_ = 1, $task) {
return ff_core_List.List_reverse(ff_core_List.List_dropFirst(ff_core_List.List_reverse(self_), count_))
}

export async function List_takeFirst$(self_, count_ = 1, $task) {
function go_(list_, count_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
const _guard1 = (count_ <= 0);
if(_guard1) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const count_r_ = (count_ - 1);
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
count_ = count_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, count_, ff_core_List.Empty())
}

export async function List_takeLast$(self_, count_ = 1, $task) {
return ff_core_List.List_reverse(ff_core_List.List_takeFirst(ff_core_List.List_reverse(self_), count_))
}

export async function List_pairs$(self_, $task) {
let i_ = 0;
return ff_core_List.List_map(self_, ((x_) => {
const r_ = ff_core_Pair.Pair(i_, x_);
i_ += 1;
return r_
}))
}

export async function List_slice$(self_, from_, until_, $task) {
return ff_core_List.List_takeFirst(ff_core_List.List_dropFirst(self_, from_), (until_ - from_))
}

export async function List_isEmpty$(self_, $task) {
{
const _1 = self_;
{
if(_1.Empty) {
return true
return
}
}
{
return false
return
}
}
}

export async function List_size$(self_, $task) {
function go_(list_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return result_
return
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = (result_ + 1);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, 0)
}

export async function List_each$(self_, body_, $task) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {

return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
(await body_(head_, $task));
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export async function List_all$(self_, body_, $task) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return true
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (!(await body_(head_, $task)));
if(_guard1) {
return false
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export async function List_any$(self_, body_, $task) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return false
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (await body_(head_, $task));
if(_guard1) {
return true
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export async function List_find$(self_, body_, $task) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (await body_(head_, $task));
if(_guard1) {
return ff_core_Option.Some(head_)
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export async function List_filter$(self_, body_, $task) {
async function go_$(list_, result_, $task) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
const _guard1 = (await body_(head_, $task));
if(_guard1) {
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = result_;
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$(self_, ff_core_List.Empty(), $task))
}

export async function List_partition$(self_, body_, $task) {
return ff_core_Pair.Pair((await ff_core_List.List_filter$(self_, body_, $task)), (await ff_core_List.List_filter$(self_, (async (_w1, $task) => {
return (!(await body_(_w1, $task)))
}), $task)))
}

export async function List_map$(self_, body_, $task) {
async function go_$(list_, result_, $task) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link((await body_(head_, $task)), result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$(self_, ff_core_List.Empty(), $task))
}

export async function List_flatMap$(self_, body_, $task) {
async function go_$(list_, result_, $task) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_flatten(ff_core_List.List_reverse(result_))
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link((await body_(head_, $task)), result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$(self_, ff_core_List.Empty(), $task))
}

export async function List_collect$(self_, body_, $task) {
return (await ff_core_Stream.Stream_toList$((await ff_core_Stream.Stream_collect$((await ff_core_List.List_toStream$(self_, false, $task)), body_, $task)), $task))
}

export async function List_collectFirst$(self_, body_, $task) {
_tailcall: for(;;) {
{
const _1 = self_;
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const _1 = (await body_(head_, $task));
{
if(_1.None) {
{
const self_r_ = tail_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
{
if(_1.Some) {
const value_ = _1.value_;
return ff_core_Option.Some(value_)
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

export async function List_foldLeft$(self_, initial_, body_, $task) {
async function go_$(state_, list_, $task) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return state_
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const state_r_ = (await body_(state_, head_, $task));
const list_r_ = tail_;
state_ = state_r_
list_ = list_r_
continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$(initial_, self_, $task))
}

export async function List_updated$(self_, index_, value_, $task) {
function go_(list_, i_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
const _guard1 = (i_ === 0);
if(_guard1) {
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link(value_, result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, index_, ff_core_List.Empty())
}

export async function List_modify$(self_, index_, body_, $task) {
async function go_$(list_, i_, result_, $task) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
const _guard1 = (i_ === 0);
if(_guard1) {
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link((await body_(head_, $task)), result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return (await go_$(self_, index_, ff_core_List.Empty(), $task))
}

export async function List_zip$(self_, that_, $task) {
function go_(list1_, list2_, result_) {
_tailcall: for(;;) {
{
const _1 = ff_core_Pair.Pair(list1_, list2_);
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
const xs_ = _1.first_.tail_;
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const ys_ = _1.second_.tail_;
{
const list1_r_ = xs_;
const list2_r_ = ys_;
const result_r_ = ff_core_List.Link(ff_core_Pair.Pair(x_, y_), result_);
list1_ = list1_r_
list2_ = list2_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
return ff_core_List.List_reverse(result_)
return
}
}
return
}
}
return go_(self_, that_, ff_core_List.Empty())
}

export async function List_sortBy$(self_, body_, ff_core_Ordering_Order$O, $task) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
const stack_ = ff_core_List.List_toStack(self_);
(await ff_core_Stack.Stack_sortBy$(stack_, body_, ff_core_Ordering_Order$O, $task));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}
}

export async function List_sortWith$(self_, compare_, $task) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
const stack_ = ff_core_List.List_toStack(self_);
(await ff_core_Stack.Stack_sortWith$(stack_, compare_, $task));
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}
}

export async function List_reverse$(self_, $task) {
function go_(list_, result_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return result_
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(head_, result_);
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty())
}

export async function List_chunk$(self_, chunkSize_, $task) {
let results_ = ff_core_List.Empty();
let result_ = ff_core_List.Empty();
let added_ = 0;
ff_core_List.List_each(self_, ((item_) => {
if((added_ < chunkSize_)) {
result_ = ff_core_List.Link(item_, result_);
added_ += 1
} else {
results_ = ff_core_List.Link(ff_core_List.List_reverse(result_), results_);
result_ = ff_core_List.Link(item_, ff_core_List.Empty());
added_ = 1
}
}));
if((added_ !== 0)) {
results_ = ff_core_List.Link(ff_core_List.List_reverse(result_), results_)
};
return ff_core_List.List_reverse(results_)
}

export async function List_toStream$(self_, cycle_ = false, $task) {
let remaining_ = self_;
return ff_core_Stream.Stream((async ($task) => {
{
const _1 = remaining_;
{
if(_1.Link) {
const head_ = _1.head_;
const tail_ = _1.tail_;
remaining_ = tail_;
return ff_core_Option.Some(head_)
return
}
}
{
if(_1.Empty) {
const _guard2 = self_;
if(_guard2.Link) {
const head_ = _guard2.head_;
const tail_ = _guard2.tail_;
const _guard1 = cycle_;
if(_guard1) {
remaining_ = tail_;
return ff_core_Option.Some(head_)
return
}
}
}
}
{
if(_1.Empty) {
return ff_core_Option.None()
return
}
}
}
}), (async ($task) => {
remaining_ = ff_core_List.Empty()
}))
}

export async function List_insertBetween$(self_, separator_, $task) {
return ff_core_List.List_dropFirst(ff_core_List.List_flatMap(self_, ((e_) => {
return ff_core_List.List_addAll(separator_, ff_core_List.Link(e_, ff_core_List.Empty()))
})), ff_core_List.List_size(separator_))
}

export function List_sort(self_, ff_core_Ordering_Order$T) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
const stack_ = ff_core_List.List_toStack(self_);
ff_core_Stack.Stack_sort(stack_, ff_core_Ordering_Order$T);
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}
}

export function List_toSet(self_, ff_core_Ordering_Order$T) {
return ff_core_List.List_foldLeft(self_, ff_core_Set.empty_(), ((set_, value_) => {
return ff_core_Set.Set_add(set_, value_, ff_core_Ordering_Order$T)
}))
}

export function List_distinct(self_, ff_core_Ordering_Order$T) {
let seen_ = ff_core_List.List_toSet(ff_core_List.Empty(), ff_core_Ordering_Order$T);
return ff_core_List.List_filter(self_, ((_1) => {
{
const item_ = _1;
const _guard1 = (!ff_core_Set.Set_contains(seen_, item_, ff_core_Ordering_Order$T));
if(_guard1) {
seen_ = ff_core_Set.Set_add(seen_, item_, ff_core_Ordering_Order$T);
return true
return
}
}
{
return false
return
}
}))
}

export async function List_sort$(self_, ff_core_Ordering_Order$T, $task) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
const stack_ = ff_core_List.List_toStack(self_);
ff_core_Stack.Stack_sort(stack_, ff_core_Ordering_Order$T);
return ff_core_Stack.Stack_toList(stack_, 0, 9007199254740991)
}
}

export async function List_toSet$(self_, ff_core_Ordering_Order$T, $task) {
return ff_core_List.List_foldLeft(self_, ff_core_Set.empty_(), ((set_, value_) => {
return ff_core_Set.Set_add(set_, value_, ff_core_Ordering_Order$T)
}))
}

export async function List_distinct$(self_, ff_core_Ordering_Order$T, $task) {
let seen_ = ff_core_List.List_toSet(ff_core_List.Empty(), ff_core_Ordering_Order$T);
return ff_core_List.List_filter(self_, ((_1) => {
{
const item_ = _1;
const _guard1 = (!ff_core_Set.Set_contains(seen_, item_, ff_core_Ordering_Order$T));
if(_guard1) {
seen_ = ff_core_Set.Set_add(seen_, item_, ff_core_Ordering_Order$T);
return true
return
}
}
{
return false
return
}
}))
}

export function List_show(self_, ff_core_Show_Show$T) {
return ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$T).show_(self_)
}

export async function List_show$(self_, ff_core_Show_Show$T, $task) {
return ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$T).show_(self_)
}

export function List_flatten(self_) {
function finish_(list_, result_) {
_tailcall: for(;;) {
{
const list_a = list_;
const result_a = result_;
{
const as_ = list_a;
if(result_a.Empty) {
return as_
return
}
}
{
const as_ = list_a;
if(result_a.Link) {
const x_ = result_a.head_;
const xs_ = result_a.tail_;
{
const list_r_ = ff_core_List.Link(x_, as_);
const result_r_ = xs_;
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
function go_(lists_, result_) {
_tailcall: for(;;) {
{
const _1 = lists_;
{
if(_1.Empty) {
return ff_core_List.Empty()
return
}
}
{
if(_1.Link) {
const as_ = _1.head_;
if(_1.tail_.Empty) {
return finish_(as_, result_)
return
}
}
}
{
if(_1.Link) {
if(_1.head_.Empty) {
const aas_ = _1.tail_;
{
const lists_r_ = aas_;
const result_r_ = result_;
lists_ = lists_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
if(_1.head_.Link) {
const a_ = _1.head_.head_;
const as_ = _1.head_.tail_;
const aas_ = _1.tail_;
{
const lists_r_ = ff_core_List.Link(as_, aas_);
const result_r_ = ff_core_List.Link(a_, result_);
lists_ = lists_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty())
}

export async function List_flatten$(self_, $task) {
function finish_(list_, result_) {
_tailcall: for(;;) {
{
const list_a = list_;
const result_a = result_;
{
const as_ = list_a;
if(result_a.Empty) {
return as_
return
}
}
{
const as_ = list_a;
if(result_a.Link) {
const x_ = result_a.head_;
const xs_ = result_a.tail_;
{
const list_r_ = ff_core_List.Link(x_, as_);
const result_r_ = xs_;
list_ = list_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
return
}
}
function go_(lists_, result_) {
_tailcall: for(;;) {
{
const _1 = lists_;
{
if(_1.Empty) {
return ff_core_List.Empty()
return
}
}
{
if(_1.Link) {
const as_ = _1.head_;
if(_1.tail_.Empty) {
return finish_(as_, result_)
return
}
}
}
{
if(_1.Link) {
if(_1.head_.Empty) {
const aas_ = _1.tail_;
{
const lists_r_ = aas_;
const result_r_ = result_;
lists_ = lists_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
if(_1.head_.Link) {
const a_ = _1.head_.head_;
const as_ = _1.head_.tail_;
const aas_ = _1.tail_;
{
const lists_r_ = ff_core_List.Link(as_, aas_);
const result_r_ = ff_core_List.Link(a_, result_);
lists_ = lists_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty())
}

export function List_toMap(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_foldLeft(self_, ff_core_Map.empty_(), ((map_, pair_) => {
return ff_core_Map.Map_add(map_, pair_.first_, pair_.second_, ff_core_Ordering_Order$K)
}))
}

export function List_group(self_, ff_core_Ordering_Order$K) {
const initial_ = ff_core_List.Empty();
return ff_core_List.List_foldLeft(self_, ff_core_List.List_toMap(initial_, ff_core_Ordering_Order$K), ((map_, pair_) => {
return ff_core_Map.Map_addToList(map_, pair_.first_, pair_.second_, ff_core_Ordering_Order$K)
}))
}

export async function List_toMap$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_List.List_foldLeft(self_, ff_core_Map.empty_(), ((map_, pair_) => {
return ff_core_Map.Map_add(map_, pair_.first_, pair_.second_, ff_core_Ordering_Order$K)
}))
}

export async function List_group$(self_, ff_core_Ordering_Order$K, $task) {
const initial_ = ff_core_List.Empty();
return ff_core_List.List_foldLeft(self_, ff_core_List.List_toMap(initial_, ff_core_Ordering_Order$K), ((map_, pair_) => {
return ff_core_Map.Map_addToList(map_, pair_.first_, pair_.second_, ff_core_Ordering_Order$K)
}))
}

export function List_unzip(self_) {
function go_(pairs_, ks_, vs_) {
_tailcall: for(;;) {
{
const _1 = pairs_;
{
if(_1.Empty) {
return ff_core_Pair.Pair(ff_core_List.List_reverse(ks_), ff_core_List.List_reverse(vs_))
return
}
}
{
if(_1.Link) {
const k_ = _1.head_.first_;
const v_ = _1.head_.second_;
const tail_ = _1.tail_;
{
const pairs_r_ = tail_;
const ks_r_ = ff_core_List.Link(k_, ks_);
const vs_r_ = ff_core_List.Link(v_, vs_);
pairs_ = pairs_r_
ks_ = ks_r_
vs_ = vs_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty(), ff_core_List.Empty())
}

export async function List_unzip$(self_, $task) {
function go_(pairs_, ks_, vs_) {
_tailcall: for(;;) {
{
const _1 = pairs_;
{
if(_1.Empty) {
return ff_core_Pair.Pair(ff_core_List.List_reverse(ks_), ff_core_List.List_reverse(vs_))
return
}
}
{
if(_1.Link) {
const k_ = _1.head_.first_;
const v_ = _1.head_.second_;
const tail_ = _1.tail_;
{
const pairs_r_ = tail_;
const ks_r_ = ff_core_List.Link(k_, ks_);
const vs_r_ = ff_core_List.Link(v_, vs_);
pairs_ = pairs_r_
ks_ = ks_r_
vs_ = vs_r_
continue _tailcall
}
return
}
}
}
return
}
}
return go_(self_, ff_core_List.Empty(), ff_core_List.Empty())
}

export function List_join(self_, separator_ = "") {
return ff_core_Array.Array_join(ff_core_List.List_toArray(self_), separator_)
}

export async function List_join$(self_, separator_ = "", $task) {
return ff_core_Array.Array_join(ff_core_List.List_toArray(self_), separator_)
}

export function ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$T) { return {
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
if(x_a.Link) {
const x_ = x_a;
if(y_a.Link) {
const y_ = y_a;
return (ff_core_Equal_Equal$T.equals_(x_.head_, y_.head_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$T).equals_(x_.tail_, y_.tail_))
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
if(x_a.Link) {
const x_ = x_a;
if(y_a.Link) {
const y_ = y_a;
return (ff_core_Equal_Equal$T.equals_(x_.head_, y_.head_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$T).equals_(x_.tail_, y_.tail_))
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


