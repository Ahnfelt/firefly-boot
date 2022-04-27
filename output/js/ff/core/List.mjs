

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

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

export function reverseList_(list_) {
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
return go_(list_, ff_core_List.Empty())
}

export function groupList_(list_, ff_core_Ordering_Order$K) {
const initial_ = ff_core_List.Empty();
return ff_core_List.List_foldLeft(list_, ff_core_List.List_toMap(initial_, ff_core_Ordering_Order$K), ((map_, pair_) => {
return ff_core_Map.Map_addToList(map_, pair_.first_, ff_core_Core.panic_("pair.second"), ff_core_Ordering_Order$K)
}))
}

export async function range_$(size_, $c) {
throw new Error('Function range not available on this target in async context.');
}

export async function build_$(initial_, body_, $c) {
async function go_$(state_, result_, $c) {
_tailcall: for(;;) {
{
const _1 = (await body_(state_, $c));
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
return (await go_$(initial_, ff_core_List.Empty(), $c))
}

export async function reverseList_$(list_, $c) {
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
return go_(list_, ff_core_List.Empty())
}

export async function groupList_$(list_, ff_core_Ordering_Order$K, $c) {
const initial_ = ff_core_List.Empty();
return ff_core_List.List_foldLeft(list_, ff_core_List.List_toMap(initial_, ff_core_Ordering_Order$K), ((map_, pair_) => {
return ff_core_Map.Map_addToList(map_, pair_.first_, ff_core_Core.panic_("pair.second"), ff_core_Ordering_Order$K)
}))
}

export function List_addAll(self_, list_) {
return ff_core_List.List_flatten(ff_core_List.Link(self_, ff_core_List.Link(list_, ff_core_List.Empty())))
}

export function List_toArray(self_) {

            let current = self_;
            let result = [];
            while(current.Link) {
                result.push(current.head_);
                current = current.tail_;
            }
            return result;
        
}

export function List_expect(self_, index_) {
function go_(list_, i_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_Core.panic_(((("expect(" + index_) + ") on list of size ") + ff_core_List.List_size(self_)))
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (i_ == 0);
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

export function List_expectFirst(self_) {
return ff_core_Option.Option_else(ff_core_List.List_first(self_), (() => {
return ff_core_Core.panic_("expectFirst() on empty list")
}))
}

export function List_expectLast(self_) {
return ff_core_Option.Option_else(ff_core_List.List_last(self_), (() => {
return ff_core_Core.panic_("expectLast() on empty list")
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
const _1 = body_(head_);
{
if(_1.None) {
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
{
if(_1.Some) {
const value_ = _1.value_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(value_, result_);
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
}
return
}
}
return go_(self_, ff_core_List.Empty())
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
const _guard1 = (i_ == 0);
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
const _guard1 = (i_ == 0);
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
return ff_core_List.reverseList_(result_)
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
function divide_(list_, xs_, ys_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_Pair.Pair(xs_, ys_)
return
}
}
{
if(_1.Link) {
const x_ = _1.head_;
if(_1.tail_.Empty) {
return ff_core_Pair.Pair(ff_core_List.Link(x_, xs_), ys_)
return
}
}
}
{
if(_1.Link) {
const x_ = _1.head_;
if(_1.tail_.Link) {
const y_ = _1.tail_.head_;
const tail_ = _1.tail_.tail_;
{
const list_r_ = tail_;
const xs_r_ = ff_core_List.Link(x_, xs_);
const ys_r_ = ff_core_List.Link(y_, ys_);
list_ = list_r_
xs_ = xs_r_
ys_ = ys_r_
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
function merge_(xs_, ys_, result_) {
_tailcall: for(;;) {
{
const _1 = ff_core_Pair.Pair(xs_, ys_);
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
const xs2_ = _1.first_.tail_;
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const _guard1 = (ff_core_Ordering_Order$O.compare_(body_(x_), body_(y_)) == ff_core_Ordering.OrderingBefore());
if(_guard1) {
{
const xs_r_ = xs2_;
const ys_r_ = ys_;
const result_r_ = ff_core_List.Link(x_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
}
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const ys2_ = _1.second_.tail_;
{
const xs_r_ = xs_;
const ys_r_ = ys2_;
const result_r_ = ff_core_List.Link(y_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
const xs2_ = _1.first_.tail_;
if(_1.second_.Empty) {
{
const xs_r_ = xs2_;
const ys_r_ = ff_core_List.Empty();
const result_r_ = ff_core_List.Link(x_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const ys2_ = _1.second_.tail_;
{
const xs_r_ = ff_core_List.Empty();
const ys_r_ = ys2_;
const result_r_ = ff_core_List.Link(y_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
}
}
return
}
}
const pair_ = divide_(self_, ff_core_List.Empty(), ff_core_List.Empty());
return merge_(ff_core_List.List_sortBy(pair_.first_, body_, ff_core_Ordering_Order$O), ff_core_List.List_sortBy(pair_.second_, body_, ff_core_Ordering_Order$O), ff_core_List.Empty())
}
}

export function List_reverse(self_) {
return ff_core_List.reverseList_(self_)
}

export async function List_addAll$(self_, list_, $c) {
return ff_core_List.List_flatten(ff_core_List.Link(self_, ff_core_List.Link(list_, ff_core_List.Empty())))
}

export async function List_toArray$(self_, $c) {
throw new Error('Function List_toArray not available on this target in async context.');
}

export async function List_expect$(self_, index_, $c) {
function go_(list_, i_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_Core.panic_(((("expect(" + index_) + ") on list of size ") + ff_core_List.List_size(self_)))
return
}
}
{
if(_1.Link) {
const head_ = _1.head_;
const _guard1 = (i_ == 0);
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

export async function List_first$(self_, $c) {
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

export async function List_last$(self_, $c) {
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

export async function List_expectFirst$(self_, $c) {
return ff_core_Option.Option_else(ff_core_List.List_first(self_), (() => {
return ff_core_Core.panic_("expectFirst() on empty list")
}))
}

export async function List_expectLast$(self_, $c) {
return ff_core_Option.Option_else(ff_core_List.List_last(self_), (() => {
return ff_core_Core.panic_("expectLast() on empty list")
}))
}

export async function List_dropFirst$(self_, count_ = 1, $c) {
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

export async function List_dropLast$(self_, count_ = 1, $c) {
return ff_core_List.List_reverse(ff_core_List.List_dropFirst(ff_core_List.List_reverse(self_), count_))
}

export async function List_takeFirst$(self_, count_ = 1, $c) {
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

export async function List_takeLast$(self_, count_ = 1, $c) {
return ff_core_List.List_reverse(ff_core_List.List_takeFirst(ff_core_List.List_reverse(self_), count_))
}

export async function List_pairs$(self_, $c) {
let i_ = 0;
return ff_core_List.List_map(self_, ((x_) => {
const r_ = ff_core_Pair.Pair(i_, x_);
i_ += 1;
return r_
}))
}

export async function List_slice$(self_, from_, until_, $c) {
return ff_core_List.List_takeFirst(ff_core_List.List_dropFirst(self_, from_), (until_ - from_))
}

export async function List_isEmpty$(self_, $c) {
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

export async function List_size$(self_, $c) {
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

export async function List_each$(self_, body_, $c) {
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
(await body_(head_, $c));
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

export async function List_all$(self_, body_, $c) {
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
const _guard1 = (!(await body_(head_, $c)));
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

export async function List_any$(self_, body_, $c) {
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
const _guard1 = (await body_(head_, $c));
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

export async function List_find$(self_, body_, $c) {
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
const _guard1 = (await body_(head_, $c));
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

export async function List_filter$(self_, body_, $c) {
async function go_$(list_, result_, $c) {
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
const _guard1 = (await body_(head_, $c));
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
return (await go_$(self_, ff_core_List.Empty(), $c))
}

export async function List_map$(self_, body_, $c) {
async function go_$(list_, result_, $c) {
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
const result_r_ = ff_core_List.Link((await body_(head_, $c)), result_);
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
return (await go_$(self_, ff_core_List.Empty(), $c))
}

export async function List_flatMap$(self_, body_, $c) {
async function go_$(list_, result_, $c) {
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
const result_r_ = ff_core_List.Link((await body_(head_, $c)), result_);
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
return (await go_$(self_, ff_core_List.Empty(), $c))
}

export async function List_collect$(self_, body_, $c) {
async function go_$(list_, result_, $c) {
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
const _1 = (await body_(head_, $c));
{
if(_1.None) {
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
{
if(_1.Some) {
const value_ = _1.value_;
{
const list_r_ = tail_;
const result_r_ = ff_core_List.Link(value_, result_);
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
}
return
}
}
return (await go_$(self_, ff_core_List.Empty(), $c))
}

export async function List_collectFirst$(self_, body_, $c) {
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
const _1 = (await body_(head_, $c));
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

export async function List_foldLeft$(self_, initial_, body_, $c) {
async function go_$(state_, list_, $c) {
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
const state_r_ = (await body_(state_, head_, $c));
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
return (await go_$(initial_, self_, $c))
}

export async function List_updated$(self_, index_, value_, $c) {
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
const _guard1 = (i_ == 0);
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

export async function List_modify$(self_, index_, body_, $c) {
async function go_$(list_, i_, result_, $c) {
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
const _guard1 = (i_ == 0);
if(_guard1) {
{
const list_r_ = tail_;
const i_r_ = (i_ - 1);
const result_r_ = ff_core_List.Link((await body_(head_, $c)), result_);
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
return (await go_$(self_, index_, ff_core_List.Empty(), $c))
}

export async function List_zip$(self_, that_, $c) {
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
return ff_core_List.reverseList_(result_)
return
}
}
return
}
}
return go_(self_, that_, ff_core_List.Empty())
}

export async function List_sortBy$(self_, body_, ff_core_Ordering_Order$O, $c) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
function divide_(list_, xs_, ys_) {
_tailcall: for(;;) {
{
const _1 = list_;
{
if(_1.Empty) {
return ff_core_Pair.Pair(xs_, ys_)
return
}
}
{
if(_1.Link) {
const x_ = _1.head_;
if(_1.tail_.Empty) {
return ff_core_Pair.Pair(ff_core_List.Link(x_, xs_), ys_)
return
}
}
}
{
if(_1.Link) {
const x_ = _1.head_;
if(_1.tail_.Link) {
const y_ = _1.tail_.head_;
const tail_ = _1.tail_.tail_;
{
const list_r_ = tail_;
const xs_r_ = ff_core_List.Link(x_, xs_);
const ys_r_ = ff_core_List.Link(y_, ys_);
list_ = list_r_
xs_ = xs_r_
ys_ = ys_r_
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
async function merge_$(xs_, ys_, result_, $c) {
_tailcall: for(;;) {
{
const _1 = ff_core_Pair.Pair(xs_, ys_);
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
const xs2_ = _1.first_.tail_;
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const _guard1 = (ff_core_Ordering_Order$O.compare_((await body_(x_, $c)), (await body_(y_, $c))) == ff_core_Ordering.OrderingBefore());
if(_guard1) {
{
const xs_r_ = xs2_;
const ys_r_ = ys_;
const result_r_ = ff_core_List.Link(x_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
}
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const ys2_ = _1.second_.tail_;
{
const xs_r_ = xs_;
const ys_r_ = ys2_;
const result_r_ = ff_core_List.Link(y_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.first_.Link) {
const x_ = _1.first_.head_;
const xs2_ = _1.first_.tail_;
if(_1.second_.Empty) {
{
const xs_r_ = xs2_;
const ys_r_ = ff_core_List.Empty();
const result_r_ = ff_core_List.Link(x_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Link) {
const y_ = _1.second_.head_;
const ys2_ = _1.second_.tail_;
{
const xs_r_ = ff_core_List.Empty();
const ys_r_ = ys2_;
const result_r_ = ff_core_List.Link(y_, result_);
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue _tailcall
}
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Empty) {
return ff_core_List.List_reverse(result_)
return
}
}
}
}
return
}
}
const pair_ = divide_(self_, ff_core_List.Empty(), ff_core_List.Empty());
return (await merge_$((await ff_core_List.List_sortBy$(pair_.first_, body_, $c, ff_core_Ordering_Order$O)), (await ff_core_List.List_sortBy$(pair_.second_, body_, $c, ff_core_Ordering_Order$O)), ff_core_List.Empty(), $c))
}
}

export async function List_reverse$(self_, $c) {
return ff_core_List.reverseList_(self_)
}

export function List_toSet(self_, ff_core_Ordering_Order$T) {
return ff_core_List.List_foldLeft(self_, ff_core_Set.empty_(), ((set_, value_) => {
return ff_core_Set.Set_add(set_, value_, ff_core_Ordering_Order$T)
}))
}

export async function List_toSet$(self_, ff_core_Ordering_Order$T, $c) {
return ff_core_List.List_foldLeft(self_, ff_core_Set.empty_(), ((set_, value_) => {
return ff_core_Set.Set_add(set_, value_, ff_core_Ordering_Order$T)
}))
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

export async function List_flatten$(self_, $c) {
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
return ff_core_List.groupList_(self_, ff_core_Ordering_Order$K)
}

export async function List_toMap$(self_, ff_core_Ordering_Order$K, $c) {
return ff_core_List.List_foldLeft(self_, ff_core_Map.empty_(), ((map_, pair_) => {
return ff_core_Map.Map_add(map_, pair_.first_, pair_.second_, ff_core_Ordering_Order$K)
}))
}

export async function List_group$(self_, ff_core_Ordering_Order$K, $c) {
return ff_core_List.groupList_(self_, ff_core_Ordering_Order$K)
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

export async function List_unzip$(self_, $c) {
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

export async function List_join$(self_, separator_ = "", $c) {
return ff_core_Array.Array_join(ff_core_List.List_toArray(self_), separator_)
}




