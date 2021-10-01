import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type List
const Empty$ = {_: 'Empty'};
export function Empty() {
return Empty$;
}
export function Link(head_, tail_) {
return {_: 'Link', head_, tail_};
}



export function reverseList_(list_) {
function go_(list_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return result_
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return go_(tail_, ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)]))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(list_, ff_core_Array.Array_toList([]))
}

export function groupList_(list_) {
const initial_ = ff_core_Array.Array_toList([]);
return ff_core_List.List_foldLeft(list_, ff_core_List.List_toMap(initial_))(((map_, pair_) => {
return ff_core_Map.Map_addToList(map_, pair_.first_, ff_core_Core.panic_("pair.second"))
}))
}

export function List_append(self_, list_) {
return ff_core_List.List_flatten(ff_core_Array.Array_toList([self_, list_]))
}

export function List_addAll(self_, list_) {
return ff_core_List.List_flatten(ff_core_Array.Array_toList([self_, list_]))
}

export function List_toArray(self_) {

            let current = self_;
            let result = [];
            while(current._ === 'Link') {
                result.push(current.head_);
                current = current.tail_;
            }
            return result;
        
}

export function List_toSet(self_) {
return ff_core_List.List_foldLeft(self_, ff_core_Set.empty_())(((set_, value_) => {
return ff_core_Set.Set_add(set_, value_)
}))
}

export function List_expect(self_, index_) {
function go_(list_, i_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_Core.panic_(((("expect(" + index_) + ") on list of size ") + ff_core_List.List_size(self_)))
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
if((i_ == 0)) {
return head_
return
}}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return go_(tail_, (i_ - 1))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, index_)
}

export function List_first(self_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
return ff_core_Option.Some(head_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function List_last(self_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
if(_1.tail_._ === 'Empty') {
return ff_core_Option.Some(head_)
return
}}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return ff_core_List.List_last(tail_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
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
return (((_1) => {
{
if((count_ <= 0)) {
return self_
return
}
}
{
if(_1._ === 'Empty') {
return self_
return
}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return ff_core_List.List_dropFirst(tail_, (count_ - 1))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function List_dropLast(self_, count_ = 1) {
return ff_core_List.List_reverse(ff_core_List.List_dropFirst(ff_core_List.List_reverse(self_), count_))
}

export function List_takeFirst(self_, count_ = 1) {
function go_(list_, count_, result_) {
return (((_1) => {
{
if((count_ <= 0)) {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return go_(tail_, (count_ - 1), ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)]))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, count_, ff_core_Array.Array_toList([]))
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
return (((_1) => {
{
if(_1._ === 'Empty') {
return true
return
}
}
{
return false
return

}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function List_size(self_) {
function go_(list_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return result_
return
}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return go_(tail_, (result_ + 1))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, 0)
}

export function List_each(self_, body_) {
(((_1) => {
{
if(_1._ === 'Empty') {
return (void 0)
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
body_(head_);
return ff_core_List.List_each(tail_, body_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_);
return (void 0)
}

export function List_all(self_, body_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return true
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
if((!body_(head_))) {
return false
return
}}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return ff_core_List.List_all(tail_, body_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function List_any(self_, body_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return false
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
if(body_(head_)) {
return true
return
}}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return ff_core_List.List_any(tail_, body_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function List_find(self_, body_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
if(body_(head_)) {
return ff_core_Option.Some(head_)
return
}}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return ff_core_List.List_find(tail_, body_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function List_filter(self_, body_) {
function go_(list_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
if(body_(head_)) {
return go_(tail_, ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)]))
return
}}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
return go_(tail_, result_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_map(self_, body_) {
function go_(list_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return go_(tail_, ff_core_Array.Array_toList([body_(head_), ...ff_core_List.List_toArray(result_)]))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_flatMap(self_, body_) {
function go_(list_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_List.List_flatten(ff_core_List.List_reverse(result_))
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return go_(tail_, ff_core_Array.Array_toList([body_(head_), ...ff_core_List.List_toArray(result_)]))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_collect(self_, body_) {
function go_(list_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return (((_1) => {
{
if(_1._ === 'None') {
return go_(tail_, result_)
return
}
}
{
if(_1._ === 'Some') {
const value_ = _1.value_
return go_(tail_, ff_core_Array.Array_toList([value_, ...ff_core_List.List_toArray(result_)]))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(body_(head_))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_collectFirst(self_, body_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return (((_1) => {
{
if(_1._ === 'None') {
return ff_core_List.List_collectFirst(tail_, body_)
return
}
}
{
if(_1._ === 'Some') {
const value_ = _1.value_
return ff_core_Option.Some(value_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(body_(head_))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function List_foldLeft(self_, initial_) {
return ((body_) => {
function go_(state_, list_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return state_
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return go_(body_(state_, head_), tail_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(initial_, self_)
})
}

export function List_updated(self_, index_, value_) {
function go_(list_, i_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
if((i_ == 0)) {
return go_(tail_, (i_ - 1), ff_core_Array.Array_toList([value_, ...ff_core_List.List_toArray(result_)]))
return
}}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return go_(tail_, (i_ - 1), ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)]))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, index_, ff_core_Array.Array_toList([]))
}

export function List_modify(self_, index_, body_) {
function go_(list_, i_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
if((i_ == 0)) {
return go_(tail_, (i_ - 1), ff_core_Array.Array_toList([body_(head_), ...ff_core_List.List_toArray(result_)]))
return
}}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
return go_(tail_, (i_ - 1), ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)]))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
return go_(self_, index_, ff_core_Array.Array_toList([]))
}

export function List_zip(self_, that_) {
function go_(list1_, list2_, result_) {
return (((_1) => {
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
const xs_ = _1.first_.tail_
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
const ys_ = _1.second_.tail_
return go_(xs_, ys_, ff_core_Array.Array_toList([ff_core_Pair.Pair(x_, y_), ...ff_core_List.List_toArray(result_)]))
return
}}}
}
{
return ff_core_List.reverseList_(result_)
return

}
throw new Error('Unexhaustive pattern match')
}))(ff_core_Pair.Pair(list1_, list2_))
}
return go_(self_, that_, ff_core_Array.Array_toList([]))
}

export function List_sortBy(self_, body_) {
return ((ff_core_List.List_size(self_) <= 1)
? self_
: (function() {
function divide_(list_, xs_, ys_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_Pair.Pair(xs_, ys_)
return
}
}
{
if(_1._ === 'Link') {
const x_ = _1.head_
if(_1.tail_._ === 'Empty') {
return ff_core_Pair.Pair(ff_core_Array.Array_toList([x_, ...ff_core_List.List_toArray(xs_)]), ys_)
return
}}
}
{
if(_1._ === 'Link') {
const x_ = _1.head_
if(_1.tail_._ === 'Link') {
const y_ = _1.tail_.head_
const tail_ = _1.tail_.tail_
return divide_(tail_, ff_core_Array.Array_toList([x_, ...ff_core_List.List_toArray(xs_)]), ff_core_Array.Array_toList([y_, ...ff_core_List.List_toArray(ys_)]))
return
}}
}
throw new Error('Unexhaustive pattern match')
}))(list_)
}
function merge_(xs_, ys_, result_) {
return (((_1) => {
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
const xs2_ = _1.first_.tail_
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
if((body_(x_) < body_(y_))) {
return merge_(xs2_, ys_, ff_core_Array.Array_toList([x_, ...ff_core_List.List_toArray(result_)]))
return
}}}}
}
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
const ys2_ = _1.second_.tail_
return merge_(xs_, ys2_, ff_core_Array.Array_toList([y_, ...ff_core_List.List_toArray(result_)]))
return
}}}
}
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
const xs2_ = _1.first_.tail_
if(_1.second_._ === 'Empty') {
return merge_(xs2_, ff_core_Array.Array_toList([]), ff_core_Array.Array_toList([x_, ...ff_core_List.List_toArray(result_)]))
return
}}}
}
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Empty') {
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
const ys2_ = _1.second_.tail_
return merge_(ff_core_Array.Array_toList([]), ys2_, ff_core_Array.Array_toList([y_, ...ff_core_List.List_toArray(result_)]))
return
}}}
}
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Empty') {
if(_1.second_._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}}}
}
throw new Error('Unexhaustive pattern match')
}))(ff_core_Pair.Pair(xs_, ys_))
}
const pair_ = divide_(self_, ff_core_Array.Array_toList([]), ff_core_Array.Array_toList([]));
return merge_(ff_core_List.List_sortBy(pair_.first_, body_), ff_core_List.List_sortBy(pair_.second_, body_), ff_core_Array.Array_toList([]))
})())
}

export function List_reverse(self_) {
return ff_core_List.reverseList_(self_)
}

export function List_flatten(self_) {
function go_(lists_, result_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}
}
{
if(_1._ === 'Link') {
if(_1.head_._ === 'Empty') {
const aas_ = _1.tail_
return go_(aas_, result_)
return
}}
}
{
if(_1._ === 'Link') {
if(_1.head_._ === 'Link') {
const a_ = _1.head_.head_
const as_ = _1.head_.tail_
const aas_ = _1.tail_
return go_(ff_core_List.Link(as_, aas_), ff_core_Array.Array_toList([a_, ...ff_core_List.List_toArray(result_)]))
return
}}
}
throw new Error('Unexhaustive pattern match')
}))(lists_)
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_toMap(self_) {
return ff_core_List.List_foldLeft(self_, ff_core_Map.empty_())(((map_, pair_) => {
return ff_core_Map.Map_add(map_, pair_.first_, pair_.second_)
}))
}

export function List_group(self_) {
return ff_core_List.groupList_(self_)
}

export function List_unzip(self_) {
function go_(pairs_, ks_, vs_) {
return (((_1) => {
{
if(_1._ === 'Empty') {
return ff_core_Pair.Pair(ff_core_List.List_reverse(ks_), ff_core_List.List_reverse(vs_))
return
}
}
{
if(_1._ === 'Link') {
if(_1.head_._ === 'Pair') {
const k_ = _1.head_.first_
const v_ = _1.head_.second_
const tail_ = _1.tail_
return go_(tail_, ff_core_Array.Array_toList([k_, ...ff_core_List.List_toArray(ks_)]), ff_core_Array.Array_toList([v_, ...ff_core_List.List_toArray(vs_)]))
return
}}
}
throw new Error('Unexhaustive pattern match')
}))(pairs_)
}
return go_(self_, ff_core_Array.Array_toList([]), ff_core_Array.Array_toList([]))
}

export function List_join(self_, separator_ = "") {
return ff_core_Array.Array_join(ff_core_List.List_toArray(self_), separator_)
}


