

import * as ff_core_Any from "../../ff/core/Any.mjs"

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

// type Array




export function empty_() {

        return [];
    
}

export function fill_(size_, value_) {

        return new Array(size_).fill(value_);
    
}

export function fillBy_(size_, body_) {

        return Array.from({length: size_}, (_, i) => body_(i));
    
}

export function range_(size_) {

        return Array.from({length: size_}, (_, i) => i);
    
}

export function internalSame_(left_, right_) {
return left_ === right_
}

export async function empty_$($c) {
throw new Error('Function empty is missing on this target in async context.');
}

export async function fill_$(size_, value_, $c) {
throw new Error('Function fill is missing on this target in async context.');
}

export async function fillBy_$(size_, body_, $c) {
throw new Error('Function fillBy is missing on this target in async context.');
}

export async function range_$(size_, $c) {
throw new Error('Function range is missing on this target in async context.');
}

export async function internalSame_$(left_, right_, $c) {
throw new Error('Function internalSame is missing on this target in async context.');
}

export function Array_addAll(self_, that_) {
return self_.concat(that_)
}

export function Array_isEmpty(self_) {
return self_.length === 0
}

export function Array_size(self_) {
return self_.length
}

export function Array_get(self_, index_) {

            return index_ >= 0 && index_ < self_.length
                ? ff_core_Option.Some(self_[index_])
                : ff_core_Option.None()
        
}

export function Array_grab(self_, index_) {

            if(index_ < 0 || index_ >= self_.length) {
                throw new Error('Index ' + index_ + ' is out of bounds in an array of size ' + self_.length)
            }
            return self_[index_]
        
}

export function Array_first(self_) {
return ff_core_Array.Array_get(self_, 0)
}

export function Array_last(self_) {
return ff_core_Array.Array_get(self_, (ff_core_Array.Array_size(self_) - 1))
}

export function Array_grabFirst(self_) {
return ff_core_Array.Array_grab(self_, 0)
}

export function Array_grabLast(self_) {
return ff_core_Array.Array_grab(self_, (ff_core_Array.Array_size(self_) - 1))
}

export function Array_dropFirst(self_, count_ = 1) {
return self_.slice(count_)
}

export function Array_dropLast(self_, count_ = 1) {
return self_.slice(0, self_.length - count_)
}

export function Array_update(self_, index_, body_) {

            let result = self_.slice();
            result[index_] = body_(result[index_]);
            return result;
        
}

export function Array_toList(self_) {

            let result = ff_core_List.Empty();
            for(let i = self_.length - 1; i >= 0; i--) {
                result = ff_core_List.Link(self_[i], result);
            }
            return result;
        
}

export function Array_toStream(self_, cycle_ = false) {
let index_ = 0;
return ff_core_Stream.make_((() => {
if((index_ < ff_core_Array.Array_size(self_))) {
return ff_core_Option.Some((function() {
const result_ = ff_core_Array.Array_grab(self_, index_);
index_ += 1;
return result_
})())
} else if((cycle_ && (index_ !== 0))) {
return ff_core_Option.Some((function() {
const result_ = ff_core_Array.Array_grab(self_, 0);
index_ = 1;
return result_
})())
} else return ff_core_Option.None()
}), (() => {

}))
}

export function Array_toStack(self_) {
return {array: self_.slice()}
}

export function Array_each(self_, body_) {

            return self_.forEach(body_);
        
}

export function Array_eachWhile(self_, body_) {
for(const value of self_) if(!body_(value)) break
}

export function Array_all(self_, body_) {
let result_ = true;
ff_core_Array.Array_eachWhile(self_, ((x_) => {
result_ = (result_ && body_(x_));
return result_
}));
return result_
}

export function Array_any(self_, body_) {
let result_ = false;
ff_core_Array.Array_eachWhile(self_, ((x_) => {
result_ = (result_ || body_(x_));
return (!result_)
}));
return result_
}

export function Array_map(self_, body_) {

            return self_.map(body_)
        
}

export function Array_sortBy(self_, body_, ff_core_Ordering_Order$S) {
return ff_core_Array.Array_sortWith(self_, ((_w1, _w2) => {
return ff_core_Ordering_Order$S.compare_(body_(_w1), body_(_w2))
}))
}

export function Array_sortWith(self_, ordering_) {
const stack_ = ff_core_Array.Array_toStack(self_);
ff_core_Stack.Stack_sortWith(stack_, ordering_);
return ff_core_Stack.Stack_drain(stack_)
}

export async function Array_addAll$(self_, that_, $c) {
throw new Error('Function Array_addAll is missing on this target in async context.');
}

export async function Array_isEmpty$(self_, $c) {
throw new Error('Function Array_isEmpty is missing on this target in async context.');
}

export async function Array_size$(self_, $c) {
throw new Error('Function Array_size is missing on this target in async context.');
}

export async function Array_get$(self_, index_, $c) {
throw new Error('Function Array_get is missing on this target in async context.');
}

export async function Array_grab$(self_, index_, $c) {
throw new Error('Function Array_grab is missing on this target in async context.');
}

export async function Array_first$(self_, $c) {
return ff_core_Array.Array_get(self_, 0)
}

export async function Array_last$(self_, $c) {
return ff_core_Array.Array_get(self_, (ff_core_Array.Array_size(self_) - 1))
}

export async function Array_grabFirst$(self_, $c) {
return ff_core_Array.Array_grab(self_, 0)
}

export async function Array_grabLast$(self_, $c) {
return ff_core_Array.Array_grab(self_, (ff_core_Array.Array_size(self_) - 1))
}

export async function Array_dropFirst$(self_, count_ = 1, $c) {
throw new Error('Function Array_dropFirst is missing on this target in async context.');
}

export async function Array_dropLast$(self_, count_ = 1, $c) {
throw new Error('Function Array_dropLast is missing on this target in async context.');
}

export async function Array_update$(self_, index_, body_, $c) {

            let result = self_.slice();
            result[index_] = await body_(result[index_], $c);
            return result;
        
}

export async function Array_toList$(self_, $c) {
throw new Error('Function Array_toList is missing on this target in async context.');
}

export async function Array_toStream$(self_, cycle_ = false, $c) {
let index_ = 0;
return (await ff_core_Stream.make_$((async ($c) => {
if((index_ < ff_core_Array.Array_size(self_))) {
return ff_core_Option.Some((await (async function() {
const result_ = ff_core_Array.Array_grab(self_, index_);
index_ += 1;
return result_
})()))
} else if((cycle_ && (index_ !== 0))) {
return ff_core_Option.Some((await (async function() {
const result_ = ff_core_Array.Array_grab(self_, 0);
index_ = 1;
return result_
})()))
} else return ff_core_Option.None()
}), (async ($c) => {

}), $c))
}

export async function Array_toStack$(self_, $c) {
throw new Error('Function Array_toStack is missing on this target in async context.');
}

export async function Array_each$(self_, body_, $c) {

            for(let i = 0; i < self_.length; i++) {
                await body_(self_[i], $c)
            }
        
}

export async function Array_eachWhile$(self_, body_, $c) {
for(const value of self_) if(!await body_(value, $c)) break
}

export async function Array_all$(self_, body_, $c) {
let result_ = true;
(await ff_core_Array.Array_eachWhile$(self_, (async (x_, $c) => {
result_ = (result_ && (await body_(x_, $c)));
return result_
}), $c));
return result_
}

export async function Array_any$(self_, body_, $c) {
let result_ = false;
(await ff_core_Array.Array_eachWhile$(self_, (async (x_, $c) => {
result_ = (result_ || (await body_(x_, $c)));
return (!result_)
}), $c));
return result_
}

export async function Array_map$(self_, body_, $c) {

            let result = [];
            for(let i = self_.length - 1; i >= 0; i--) {
                result.push(await body_(self_[i], $c));
            }
            return result;
        
}

export async function Array_sortBy$(self_, body_, ff_core_Ordering_Order$S, $c) {
return (await ff_core_Array.Array_sortWith$(self_, (async (_w1, _w2, $c) => {
return ff_core_Ordering_Order$S.compare_((await body_(_w1, $c)), (await body_(_w2, $c)))
}), $c))
}

export async function Array_sortWith$(self_, ordering_, $c) {
const stack_ = ff_core_Array.Array_toStack(self_);
(await ff_core_Stack.Stack_sortWith$(stack_, ordering_, $c));
return ff_core_Stack.Stack_drain(stack_)
}

export function Array_sort(self_, ff_core_Ordering_Order$T) {
return ff_core_Array.Array_sortWith(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export function Array_toSet(self_, ff_core_Ordering_Order$T) {
return ff_core_List.List_toSet(ff_core_Array.Array_toList(self_), ff_core_Ordering_Order$T)
}

export async function Array_sort$(self_, ff_core_Ordering_Order$T, $c) {
return ff_core_Array.Array_sortWith(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export async function Array_toSet$(self_, ff_core_Ordering_Order$T, $c) {
return ff_core_List.List_toSet(ff_core_Array.Array_toList(self_), ff_core_Ordering_Order$T)
}

export function Array_toMap(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_toMap(ff_core_Array.Array_toList(self_), ff_core_Ordering_Order$K)
}

export async function Array_toMap$(self_, ff_core_Ordering_Order$K, $c) {
return ff_core_List.List_toMap(ff_core_Array.Array_toList(self_), ff_core_Ordering_Order$K)
}

export function Array_join(self_, separator_ = "") {
return self_.join(separator_)
}

export async function Array_join$(self_, separator_ = "", $c) {
throw new Error('Function Array_join is missing on this target in async context.');
}

export function ff_core_Show_Show$ff_core_Array_Array(ff_core_Show_Show$T) { return {
show_(array_) {
const stack_ = ff_core_Stack.make_();
ff_core_Stack.Stack_push(stack_, "[");
ff_core_Array.Array_each(array_, ((x_) => {
if((ff_core_Stack.Stack_size(stack_) > 1)) {
ff_core_Stack.Stack_push(stack_, ", ")
};
ff_core_Stack.Stack_push(stack_, ff_core_Show_Show$T.show_(x_))
}));
ff_core_Stack.Stack_push(stack_, "].toArray()");
return ff_core_Stack.Stack_join(stack_, "")
},
async show_$(array_, $c) {
const stack_ = ff_core_Stack.make_();
ff_core_Stack.Stack_push(stack_, "[");
ff_core_Array.Array_each(array_, ((x_) => {
if((ff_core_Stack.Stack_size(stack_) > 1)) {
ff_core_Stack.Stack_push(stack_, ", ")
};
ff_core_Stack.Stack_push(stack_, ff_core_Show_Show$T.show_(x_))
}));
ff_core_Stack.Stack_push(stack_, "].toArray()");
return ff_core_Stack.Stack_join(stack_, "")
}
}}

export function ff_core_Equal_Equal$ff_core_Array_Array(ff_core_Equal_Equal$T) { return {
equals_(left_, right_) {
if(ff_core_Array.internalSame_(left_, right_)) {
return true
} else {
if((ff_core_Array.Array_size(left_) !== ff_core_Array.Array_size(right_))) {
return false
} else {
let i_ = (-1);
return ff_core_Array.Array_all(left_, ((x_) => {
i_ += 1;
return ff_core_Equal_Equal$T.equals_(x_, ff_core_Array.Array_grab(right_, i_))
}))
}
}
},
async equals_$(left_, right_, $c) {
if(ff_core_Array.internalSame_(left_, right_)) {
return true
} else {
if((ff_core_Array.Array_size(left_) !== ff_core_Array.Array_size(right_))) {
return false
} else {
let i_ = (-1);
return ff_core_Array.Array_all(left_, ((x_) => {
i_ += 1;
return ff_core_Equal_Equal$T.equals_(x_, ff_core_Array.Array_grab(right_, i_))
}))
}
}
}
}}

export function ff_core_Ordering_Order$ff_core_Array_Array(ff_core_Ordering_Order$T) { return {
compare_(left_, right_) {
if(ff_core_Array.internalSame_(left_, right_)) {
return ff_core_Ordering.OrderingSame()
} else {
const size_ = ff_core_Int.Int_min(ff_core_Array.Array_size(left_), ff_core_Array.Array_size(right_));
let i_ = 0;
let ordering_ = ff_core_Ordering.OrderingSame();
while(((ordering_ === ff_core_Ordering.OrderingSame()) && (i_ < size_))) {
ordering_ = ff_core_Ordering_Order$T.compare_(ff_core_Array.Array_grab(left_, i_), ff_core_Array.Array_grab(right_, i_));
i_ += 1
};
if((ordering_ !== ff_core_Ordering.OrderingSame())) {
return ordering_
} else {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(ff_core_Array.Array_size(left_), ff_core_Array.Array_size(right_))
}
}
},
async compare_$(left_, right_, $c) {
if(ff_core_Array.internalSame_(left_, right_)) {
return ff_core_Ordering.OrderingSame()
} else {
const size_ = ff_core_Int.Int_min(ff_core_Array.Array_size(left_), ff_core_Array.Array_size(right_));
let i_ = 0;
let ordering_ = ff_core_Ordering.OrderingSame();
while(((ordering_ === ff_core_Ordering.OrderingSame()) && (i_ < size_))) {
ordering_ = ff_core_Ordering_Order$T.compare_(ff_core_Array.Array_grab(left_, i_), ff_core_Array.Array_grab(right_, i_));
i_ += 1
};
if((ordering_ !== ff_core_Ordering.OrderingSame())) {
return ordering_
} else {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(ff_core_Array.Array_size(left_), ff_core_Array.Array_size(right_))
}
}
}
}}


