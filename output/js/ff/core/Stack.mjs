

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

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Stack




export function empty_() {
return {array: []}
}

export function make_(value_) {
return {array: [value_]}
}

export function fill_(size_, value_) {

        return {array: new Array(size_).fill(value_)};
    
}

export function range_(size_) {

        return {array: Array.from({length: size_}, (_, i) => i)};
    
}

export function mergeSort_(stack_, compare_, start_, end_) {
if(((end_ - start_) < 2)) {

} else {
let middle_ = (start_ + ((end_ - start_) / 2));
ff_core_Stack.mergeSort_(stack_, compare_, start_, middle_);
ff_core_Stack.mergeSort_(stack_, compare_, middle_, end_);
let i_ = start_;
let j_ = middle_;
while(((i_ < middle_) && (j_ < end_))) {
if((compare_(ff_core_Stack.Stack_expect(stack_, i_), ff_core_Stack.Stack_expect(stack_, j_)) !== ff_core_Ordering.OrderingAfter())) {
i_ += 1
} else {
const value_ = ff_core_Stack.Stack_expect(stack_, j_);
let k_ = j_;
while((k_ > i_)) {
ff_core_Stack.Stack_set(stack_, k_, ff_core_Stack.Stack_expect(stack_, (k_ - 1)));
k_ -= 1
};
ff_core_Stack.Stack_set(stack_, i_, value_);
i_ += 1;
middle_ += 1;
j_ += 1
}
}
}
}

export async function empty_$($c) {
throw new Error('Function empty is missing on this target in async context.');
}

export async function make_$(value_, $c) {
throw new Error('Function make is missing on this target in async context.');
}

export async function fill_$(size_, value_, $c) {
throw new Error('Function fill is missing on this target in async context.');
}

export async function range_$(size_, $c) {
throw new Error('Function range is missing on this target in async context.');
}

export async function mergeSort_$(stack_, compare_, start_, end_, $c) {
if(((end_ - start_) < 2)) {

} else {
let middle_ = (start_ + ((end_ - start_) / 2));
(await ff_core_Stack.mergeSort_$(stack_, compare_, start_, middle_, $c));
(await ff_core_Stack.mergeSort_$(stack_, compare_, middle_, end_, $c));
let i_ = start_;
let j_ = middle_;
while(((i_ < middle_) && (j_ < end_))) {
if(((await compare_(ff_core_Stack.Stack_expect(stack_, i_), ff_core_Stack.Stack_expect(stack_, j_), $c)) !== ff_core_Ordering.OrderingAfter())) {
i_ += 1
} else {
const value_ = ff_core_Stack.Stack_expect(stack_, j_);
let k_ = j_;
while((k_ > i_)) {
ff_core_Stack.Stack_set(stack_, k_, ff_core_Stack.Stack_expect(stack_, (k_ - 1)));
k_ -= 1
};
ff_core_Stack.Stack_set(stack_, i_, value_);
i_ += 1;
middle_ += 1;
j_ += 1
}
}
}
}

export function Stack_isEmpty(self_) {
return self_.array.length === 0
}

export function Stack_size(self_) {
return self_.array.length
}

export function Stack_get(self_, index_) {

            return index_ >= 0 && index_ < self_.array.length
                ? ff_core_Option.Some(self_.array[index_])
                : ff_core_Option.None()
        
}

export function Stack_expect(self_, index_) {

            if(index_ < 0 || index_ >= self_.array.length) {
                throw new Error('Index ' + index_ + ' is out of bounds in an array of size ' + self_.array.length)
            }
            return self_.array[index_]
        
}

export function Stack_expectFirst(self_) {
return ff_core_Stack.Stack_expect(self_, 0)
}

export function Stack_expectLast(self_) {
return ff_core_Stack.Stack_expect(self_, (ff_core_Stack.Stack_size(self_) - 1))
}

export function Stack_first(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array[0])
                : ff_core_Option.None()
        
}

export function Stack_last(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array[self_.array.length - 1])
                : ff_core_Option.None()
        
}

export function Stack_push(self_, value_) {
self_.array.push(value_)
}

export function Stack_pushAll(self_, value_) {
self_.array.push(...value_.array)
}

export function Stack_pushArray(self_, value_) {
self_.array.push(...value_)
}

export function Stack_pop(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array.pop())
                : ff_core_Option.None()
        
}

export function Stack_set(self_, index_, value_) {

            if(index < 0 || index > self.array.length) {
                throw new Error('Index ' + index_ + ' is out of bounds in an array of size ' + self_.array.length)
            }
            self_.array[index_] = value
        
}

export function Stack_modify(self_, index_, body_) {
self_.array[index_] = body_(self_.array[index_])
}

export function Stack_fill(self_, value_, start_ = 0, end_ = 9007199254740991) {

            self.array.fill(value_, start, end);
        
}

export function Stack_copy(self_, target_, start_, end_) {

            self.array.copyWithin(target, start, end);
        
}

export function Stack_each(self_, body_) {

            return self_.array.forEach(body_);
        
}

export function Stack_eachWhile(self_, body_) {
for(const value of self_.array) if(!body_(value)) break
}

export function Stack_all(self_, body_) {
let result_ = true;
ff_core_Stack.Stack_eachWhile(self_, ((x_) => {
result_ = body_(x_);
return result_
}));
return result_
}

export function Stack_any(self_, body_) {
let result_ = false;
ff_core_Stack.Stack_eachWhile(self_, ((x_) => {
result_ = body_(x_);
return (!result_)
}));
return result_
}

export function Stack_indexWhere(self_, body_) {
let i_ = (-1);
let result_ = false;
ff_core_Stack.Stack_eachWhile(self_, ((x_) => {
i_ += 1;
result_ = body_(x_);
return (!result_)
}));
if(result_) {
return ff_core_Option.Some(i_)
} else return ff_core_Option.None()
}

export function Stack_drain(self_) {
const result = self_.array; self_.array = []; return result
}

export function Stack_toArray(self_, start_ = 0, end_ = 9007199254740991) {
return self_.array.slice(start_, end_)
}

export function Stack_toList(self_, start_ = 0, end_ = 9007199254740991) {

            if(start_ < 0) start_ = self_.array.length + start_
            if(end_ < 0) end_ = self_.array.length + start_
            start_ = Math.max(0, Math.min(start_, self_.array.length))
            end_ = Math.max(0, Math.min(end_, self_.array.length))
            let result = ff_core_List.Empty();
            for(let i = end_ - 1; i >= start_; i--) {
                result = ff_core_List.Link(self_.array[i], result);
            }
            return result;
        
}

export function Stack_reverse(self_) {
self_.array.reverse()
}

export function Stack_sortBy(self_, body_, ff_core_Ordering_Order$S) {
ff_core_Stack.Stack_sortUsing(self_, ((_w1, _w2) => {
return ff_core_Ordering_Order$S.compare_(body_(_w1), body_(_w2))
}))
}

export function Stack_sortUsing(self_, ordering_) {
self_.array.sort((x, y) => ff_core_Ordering.Ordering_toInt(ordering_(x, y)))
}

export async function Stack_isEmpty$(self_, $c) {
throw new Error('Function Stack_isEmpty is missing on this target in async context.');
}

export async function Stack_size$(self_, $c) {
throw new Error('Function Stack_size is missing on this target in async context.');
}

export async function Stack_get$(self_, index_, $c) {
throw new Error('Function Stack_get is missing on this target in async context.');
}

export async function Stack_expect$(self_, index_, $c) {
throw new Error('Function Stack_expect is missing on this target in async context.');
}

export async function Stack_expectFirst$(self_, $c) {
return ff_core_Stack.Stack_expect(self_, 0)
}

export async function Stack_expectLast$(self_, $c) {
return ff_core_Stack.Stack_expect(self_, (ff_core_Stack.Stack_size(self_) - 1))
}

export async function Stack_first$(self_, $c) {
throw new Error('Function Stack_first is missing on this target in async context.');
}

export async function Stack_last$(self_, $c) {
throw new Error('Function Stack_last is missing on this target in async context.');
}

export async function Stack_push$(self_, value_, $c) {
throw new Error('Function Stack_push is missing on this target in async context.');
}

export async function Stack_pushAll$(self_, value_, $c) {
throw new Error('Function Stack_pushAll is missing on this target in async context.');
}

export async function Stack_pushArray$(self_, value_, $c) {
throw new Error('Function Stack_pushArray is missing on this target in async context.');
}

export async function Stack_pop$(self_, $c) {
throw new Error('Function Stack_pop is missing on this target in async context.');
}

export async function Stack_set$(self_, index_, value_, $c) {
throw new Error('Function Stack_set is missing on this target in async context.');
}

export async function Stack_modify$(self_, index_, body_, $c) {
self_.array[index_] = await body_(self_.array[index_], $c)
}

export async function Stack_fill$(self_, value_, start_ = 0, end_ = 9007199254740991, $c) {
throw new Error('Function Stack_fill is missing on this target in async context.');
}

export async function Stack_copy$(self_, target_, start_, end_, $c) {
throw new Error('Function Stack_copy is missing on this target in async context.');
}

export async function Stack_each$(self_, body_, $c) {

            for(let i = 0; i < self_.array.length; i++) {
                await body_(self_.array[i], $c)
            }
        
}

export async function Stack_eachWhile$(self_, body_, $c) {
for(const value of self_.array) if(!await body_(value, $c)) break
}

export async function Stack_all$(self_, body_, $c) {
let result_ = true;
(await ff_core_Stack.Stack_eachWhile$(self_, (async (x_, $c) => {
result_ = (await body_(x_, $c));
return result_
}), $c));
return result_
}

export async function Stack_any$(self_, body_, $c) {
let result_ = false;
(await ff_core_Stack.Stack_eachWhile$(self_, (async (x_, $c) => {
result_ = (await body_(x_, $c));
return (!result_)
}), $c));
return result_
}

export async function Stack_indexWhere$(self_, body_, $c) {
let i_ = (-1);
let result_ = false;
(await ff_core_Stack.Stack_eachWhile$(self_, (async (x_, $c) => {
i_ += 1;
result_ = (await body_(x_, $c));
return (!result_)
}), $c));
if(result_) {
return ff_core_Option.Some(i_)
} else return ff_core_Option.None()
}

export async function Stack_drain$(self_, $c) {
throw new Error('Function Stack_drain is missing on this target in async context.');
}

export async function Stack_toArray$(self_, start_ = 0, end_ = 9007199254740991, $c) {
throw new Error('Function Stack_toArray is missing on this target in async context.');
}

export async function Stack_toList$(self_, start_ = 0, end_ = 9007199254740991, $c) {
throw new Error('Function Stack_toList is missing on this target in async context.');
}

export async function Stack_reverse$(self_, $c) {
throw new Error('Function Stack_reverse is missing on this target in async context.');
}

export async function Stack_sortBy$(self_, body_, ff_core_Ordering_Order$S, $c) {
(await ff_core_Stack.Stack_sortUsing$(self_, (async (_w1, _w2, $c) => {
return ff_core_Ordering_Order$S.compare_((await body_(_w1, $c)), (await body_(_w2, $c)))
}), $c))
}

export async function Stack_sortUsing$(self_, ordering_, $c) {
throw new Error('Function Stack_sortUsing is missing on this target in async context.');
}

export function Stack_sort(self_, ff_core_Ordering_Order$T) {
ff_core_Stack.Stack_sortUsing(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export async function Stack_sort$(self_, ff_core_Ordering_Order$T, $c) {
ff_core_Stack.Stack_sortUsing(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export function Stack_join(self_, separator_ = "") {
return self_.array.join(separator_)
}

export async function Stack_join$(self_, separator_ = "", $c) {
throw new Error('Function Stack_join is missing on this target in async context.');
}

export function ff_core_Show_Show$ff_core_Array_Array(ff_core_Show_Show$T) { return {
show_(array_) {
const stack_ = ff_core_Stack.empty_();
ff_core_Stack.Stack_push(stack_, "[");
ff_core_Array.Array_each(array_, ((x_) => {
if((ff_core_Stack.Stack_size(stack_) > 1)) {
ff_core_Stack.Stack_push(stack_, ", ")
};
ff_core_Stack.Stack_push(stack_, ff_core_Show_Show$T.show_(x_))
}));
ff_core_Stack.Stack_push(stack_, "].toStack()");
return ff_core_Stack.Stack_join(stack_, "")
},
async show_$(array_, $c) {
const stack_ = ff_core_Stack.empty_();
ff_core_Stack.Stack_push(stack_, "[");
ff_core_Array.Array_each(array_, ((x_) => {
if((ff_core_Stack.Stack_size(stack_) > 1)) {
ff_core_Stack.Stack_push(stack_, ", ")
};
ff_core_Stack.Stack_push(stack_, ff_core_Show_Show$T.show_(x_))
}));
ff_core_Stack.Stack_push(stack_, "].toStack()");
return ff_core_Stack.Stack_join(stack_, "")
}
}}


