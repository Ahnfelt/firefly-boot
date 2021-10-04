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
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const result_r_ = ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)])
list_ = list_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(list_, ff_core_Array.Array_toList([]))
}

export function groupList_(list_) {
const initial_ = ff_core_Array.Array_toList([])
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
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const i_r_ = (i_ - 1)
list_ = list_r_
i_ = i_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, index_)
}

export function List_first(self_) {
{
const _1 = self_
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
}
}

export function List_last(self_) {
while(true) {
{
const _1 = self_
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
{
const self_r_ = tail_
self_ = self_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
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
while(true) {
{
const _1 = self_
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
{
const self_r_ = tail_
const count_r_ = (count_ - 1)
self_ = self_r_
count_ = count_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}

export function List_dropLast(self_, count_ = 1) {
return ff_core_List.List_reverse(ff_core_List.List_dropFirst(ff_core_List.List_reverse(self_), count_))
}

export function List_takeFirst(self_, count_ = 1) {
function go_(list_, count_, result_) {
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const count_r_ = (count_ - 1)
const result_r_ = ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)])
list_ = list_r_
count_ = count_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, count_, ff_core_Array.Array_toList([]))
}

export function List_takeLast(self_, count_ = 1) {
return ff_core_List.List_reverse(ff_core_List.List_takeFirst(ff_core_List.List_reverse(self_), count_))
}

export function List_pairs(self_) {
let i_ = 0
return ff_core_List.List_map(self_, ((x_) => {
const r_ = ff_core_Pair.Pair(i_, x_)
i_ += 1
return r_
}))
}

export function List_slice(self_, from_, until_) {
return ff_core_List.List_takeFirst(ff_core_List.List_dropFirst(self_, from_), (until_ - from_))
}

export function List_isEmpty(self_) {
{
const _1 = self_
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
}
}

export function List_size(self_) {
function go_(list_, result_) {
while(true) {
{
const _1 = list_
{
if(_1._ === 'Empty') {
return result_
return
}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
{
const list_r_ = tail_
const result_r_ = (result_ + 1)
list_ = list_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, 0)
}

export function List_each(self_, body_) {
while(true) {
{
const _1 = self_
{
if(_1._ === 'Empty') {

return
}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
body_(head_)
{
const self_r_ = tail_
const body_r_ = body_
self_ = self_r_
body_ = body_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}

export function List_all(self_, body_) {
while(true) {
{
const _1 = self_
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
{
const self_r_ = tail_
const body_r_ = body_
self_ = self_r_
body_ = body_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}

export function List_any(self_, body_) {
while(true) {
{
const _1 = self_
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
{
const self_r_ = tail_
const body_r_ = body_
self_ = self_r_
body_ = body_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}

export function List_find(self_, body_) {
while(true) {
{
const _1 = self_
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
{
const self_r_ = tail_
const body_r_ = body_
self_ = self_r_
body_ = body_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}

export function List_filter(self_, body_) {
function go_(list_, result_) {
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const result_r_ = ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)])
list_ = list_r_
result_ = result_r_
continue
}
return
}}
}
{
if(_1._ === 'Link') {
const tail_ = _1.tail_
{
const list_r_ = tail_
const result_r_ = result_
list_ = list_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_map(self_, body_) {
function go_(list_, result_) {
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const result_r_ = ff_core_Array.Array_toList([body_(head_), ...ff_core_List.List_toArray(result_)])
list_ = list_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_flatMap(self_, body_) {
function go_(list_, result_) {
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const result_r_ = ff_core_Array.Array_toList([body_(head_), ...ff_core_List.List_toArray(result_)])
list_ = list_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_collect(self_, body_) {
function go_(list_, result_) {
while(true) {
{
const _1 = list_
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
{
const _1 = body_(head_)
{
if(_1._ === 'None') {
{
const list_r_ = tail_
const result_r_ = result_
list_ = list_r_
result_ = result_r_
continue
}
return
}
}
{
if(_1._ === 'Some') {
const value_ = _1.value_
{
const list_r_ = tail_
const result_r_ = ff_core_Array.Array_toList([value_, ...ff_core_List.List_toArray(result_)])
list_ = list_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, ff_core_Array.Array_toList([]))
}

export function List_collectFirst(self_, body_) {
while(true) {
{
const _1 = self_
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
{
const _1 = body_(head_)
{
if(_1._ === 'None') {
{
const self_r_ = tail_
const body_r_ = body_
self_ = self_r_
body_ = body_r_
continue
}
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
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}

export function List_foldLeft(self_, initial_) {
return ((body_) => {
function go_(state_, list_) {
while(true) {
{
const _1 = list_
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
{
const state_r_ = body_(state_, head_)
const list_r_ = tail_
state_ = state_r_
list_ = list_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(initial_, self_)
})
}

export function List_updated(self_, index_, value_) {
function go_(list_, i_, result_) {
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const i_r_ = (i_ - 1)
const result_r_ = ff_core_Array.Array_toList([value_, ...ff_core_List.List_toArray(result_)])
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue
}
return
}}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
{
const list_r_ = tail_
const i_r_ = (i_ - 1)
const result_r_ = ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)])
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, index_, ff_core_Array.Array_toList([]))
}

export function List_modify(self_, index_, body_) {
function go_(list_, i_, result_) {
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const i_r_ = (i_ - 1)
const result_r_ = ff_core_Array.Array_toList([body_(head_), ...ff_core_List.List_toArray(result_)])
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue
}
return
}}
}
{
if(_1._ === 'Link') {
const head_ = _1.head_
const tail_ = _1.tail_
{
const list_r_ = tail_
const i_r_ = (i_ - 1)
const result_r_ = ff_core_Array.Array_toList([head_, ...ff_core_List.List_toArray(result_)])
list_ = list_r_
i_ = i_r_
result_ = result_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, index_, ff_core_Array.Array_toList([]))
}

export function List_zip(self_, that_) {
function go_(list1_, list2_, result_) {
while(true) {
{
const _1 = ff_core_Pair.Pair(list1_, list2_)
{
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
const xs_ = _1.first_.tail_
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
const ys_ = _1.second_.tail_
{
const list1_r_ = xs_
const list2_r_ = ys_
const result_r_ = ff_core_Array.Array_toList([ff_core_Pair.Pair(x_, y_), ...ff_core_List.List_toArray(result_)])
list1_ = list1_r_
list2_ = list2_r_
result_ = result_r_
continue
}
return
}}
}
{
return ff_core_List.reverseList_(result_)
return

}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, that_, ff_core_Array.Array_toList([]))
}

export function List_sortBy(self_, body_) {
if((ff_core_List.List_size(self_) <= 1)) {
return self_
} else {
function divide_(list_, xs_, ys_) {
while(true) {
{
const _1 = list_
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
{
const list_r_ = tail_
const xs_r_ = ff_core_Array.Array_toList([x_, ...ff_core_List.List_toArray(xs_)])
const ys_r_ = ff_core_Array.Array_toList([y_, ...ff_core_List.List_toArray(ys_)])
list_ = list_r_
xs_ = xs_r_
ys_ = ys_r_
continue
}
return
}}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
function merge_(xs_, ys_, result_) {
while(true) {
{
const _1 = ff_core_Pair.Pair(xs_, ys_)
{
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
const xs2_ = _1.first_.tail_
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
if((body_(x_) < body_(y_))) {
{
const xs_r_ = xs2_
const ys_r_ = ys_
const result_r_ = ff_core_Array.Array_toList([x_, ...ff_core_List.List_toArray(result_)])
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue
}
return
}}}
}
{
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
const ys2_ = _1.second_.tail_
{
const xs_r_ = xs_
const ys_r_ = ys2_
const result_r_ = ff_core_Array.Array_toList([y_, ...ff_core_List.List_toArray(result_)])
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue
}
return
}}
}
{
if(_1.first_._ === 'Link') {
const x_ = _1.first_.head_
const xs2_ = _1.first_.tail_
if(_1.second_._ === 'Empty') {
{
const xs_r_ = xs2_
const ys_r_ = ff_core_Array.Array_toList([])
const result_r_ = ff_core_Array.Array_toList([x_, ...ff_core_List.List_toArray(result_)])
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue
}
return
}}
}
{
if(_1.first_._ === 'Empty') {
if(_1.second_._ === 'Link') {
const y_ = _1.second_.head_
const ys2_ = _1.second_.tail_
{
const xs_r_ = ff_core_Array.Array_toList([])
const ys_r_ = ys2_
const result_r_ = ff_core_Array.Array_toList([y_, ...ff_core_List.List_toArray(result_)])
xs_ = xs_r_
ys_ = ys_r_
result_ = result_r_
continue
}
return
}}
}
{
if(_1.first_._ === 'Empty') {
if(_1.second_._ === 'Empty') {
return ff_core_List.List_reverse(result_)
return
}}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
const pair_ = divide_(self_, ff_core_Array.Array_toList([]), ff_core_Array.Array_toList([]))
return merge_(ff_core_List.List_sortBy(pair_.first_, body_), ff_core_List.List_sortBy(pair_.second_, body_), ff_core_Array.Array_toList([]))
}
}

export function List_reverse(self_) {
return ff_core_List.reverseList_(self_)
}

export function List_flatten(self_) {
function go_(lists_, result_) {
while(true) {
{
const _1 = lists_
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
{
const lists_r_ = aas_
const result_r_ = result_
lists_ = lists_r_
result_ = result_r_
continue
}
return
}}
}
{
if(_1._ === 'Link') {
if(_1.head_._ === 'Link') {
const a_ = _1.head_.head_
const as_ = _1.head_.tail_
const aas_ = _1.tail_
{
const lists_r_ = ff_core_List.Link(as_, aas_)
const result_r_ = ff_core_Array.Array_toList([a_, ...ff_core_List.List_toArray(result_)])
lists_ = lists_r_
result_ = result_r_
continue
}
return
}}
}
throw new Error('Unexhaustive pattern match')
}
return
}
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
while(true) {
{
const _1 = pairs_
{
if(_1._ === 'Empty') {
return ff_core_Pair.Pair(ff_core_List.List_reverse(ks_), ff_core_List.List_reverse(vs_))
return
}
}
{
if(_1._ === 'Link') {
const k_ = _1.head_.first_
const v_ = _1.head_.second_
const tail_ = _1.tail_
{
const pairs_r_ = tail_
const ks_r_ = ff_core_Array.Array_toList([k_, ...ff_core_List.List_toArray(ks_)])
const vs_r_ = ff_core_Array.Array_toList([v_, ...ff_core_List.List_toArray(vs_)])
pairs_ = pairs_r_
ks_ = ks_r_
vs_ = vs_r_
continue
}
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
return go_(self_, ff_core_Array.Array_toList([]), ff_core_Array.Array_toList([]))
}

export function List_join(self_, separator_ = "") {
return ff_core_Array.Array_join(ff_core_List.List_toArray(self_), separator_)
}


