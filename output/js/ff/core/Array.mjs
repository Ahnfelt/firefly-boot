

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

import * as ff_core_Crypto from "../../ff/core/Crypto.mjs"

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

import * as ff_core_UnsafeJs from "../../ff/core/UnsafeJs.mjs"

// type Array




export function new_() {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: []}
}

export function fill_(size_, value_) {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: ff_core_List.fill_(size_, value_)}
}

export function fillBy_(size_, body_) {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: ff_core_List.fillBy_(size_, body_)}
}

export function range_(size_) {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: ff_core_List.range_(size_)}
}

export function sortRange_(array_, compare_, start_, end_) {
if(((end_ - start_) < 2)) {

} else {
let middle_ = (start_ + ff_core_Int.Int_div((end_ - start_), 2));
ff_core_Array.sortRange_(array_, compare_, start_, middle_);
ff_core_Array.sortRange_(array_, compare_, middle_, end_);
let i_ = start_;
let j_ = middle_;
while(((i_ < middle_) && (j_ < end_))) {
if((compare_((array_.array[i_] ?? ff_core_Array.internalGrab_(array_, i_)), (array_.array[j_] ?? ff_core_Array.internalGrab_(array_, j_))) !== ff_core_Ordering.OrderingAfter())) {
i_ += 1
} else {
const value_ = (array_.array[j_] ?? ff_core_Array.internalGrab_(array_, j_));
let k_ = j_;
while((k_ > i_)) {
ff_core_Array.Array_set(array_, k_, (array_.array[(k_ - 1)] ?? ff_core_Array.internalGrab_(array_, (k_ - 1))));
k_ -= 1
};
ff_core_Array.Array_set(array_, i_, value_);
i_ += 1;
middle_ += 1;
j_ += 1
}
}
}
}

export function internalGrab_(self_, index_) {

        return index_ < 0 || index_ >= self_.array.length ? ff_core_Try.internalThrowGrabException_() : self_.array[index_];
    
}

export async function new_$($task) {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: []}
}

export async function fill_$(size_, value_, $task) {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: ff_core_List.fill_(size_, value_)}
}

export async function fillBy_$(size_, body_, $task) {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: (await ff_core_List.fillBy_$(size_, body_, $task))}
}

export async function range_$(size_, $task) {
const js_ = ff_core_UnsafeJs.jsSystem_();
return {array: ff_core_List.range_(size_)}
}

export async function sortRange_$(array_, compare_, start_, end_, $task) {
if(((end_ - start_) < 2)) {

} else {
let middle_ = (start_ + ff_core_Int.Int_div((end_ - start_), 2));
(await ff_core_Array.sortRange_$(array_, compare_, start_, middle_, $task));
(await ff_core_Array.sortRange_$(array_, compare_, middle_, end_, $task));
let i_ = start_;
let j_ = middle_;
while(((i_ < middle_) && (j_ < end_))) {
if(((await compare_((array_.array[i_] ?? ff_core_Array.internalGrab_(array_, i_)), (array_.array[j_] ?? ff_core_Array.internalGrab_(array_, j_)), $task)) !== ff_core_Ordering.OrderingAfter())) {
i_ += 1
} else {
const value_ = (array_.array[j_] ?? ff_core_Array.internalGrab_(array_, j_));
let k_ = j_;
while((k_ > i_)) {
ff_core_Array.Array_set(array_, k_, (array_.array[(k_ - 1)] ?? ff_core_Array.internalGrab_(array_, (k_ - 1))));
k_ -= 1
};
ff_core_Array.Array_set(array_, i_, value_);
i_ += 1;
middle_ += 1;
j_ += 1
}
}
}
}

export async function internalGrab_$(self_, index_, $task) {
throw new Error('Function internalGrab is missing on this target in async context.');
}

export function Array_isEmpty(self_) {
return (self_.array.length === 0)
}

export function Array_size(self_) {
return self_.array.length
}

export function Array_get(self_, index_) {
if(((index_ >= 0) && (index_ < self_.array.length))) {
return ff_core_Option.Some(self_.array[index_])
} else {
return ff_core_Option.None()
}
}

export function Array_grab(self_, index_) {
if(((index_ < 0) || (index_ >= self_.array.length))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
return self_.array[index_]
}

export function Array_first(self_) {
return ff_core_Array.Array_get(self_, 0)
}

export function Array_last(self_) {
return ff_core_Array.Array_get(self_, (self_.array.length - 1))
}

export function Array_grabFirst(self_) {
return (self_.array[0] ?? ff_core_Array.internalGrab_(self_, 0))
}

export function Array_grabLast(self_) {
return (self_.array[(self_.array.length - 1)] ?? ff_core_Array.internalGrab_(self_, (self_.array.length - 1)))
}

export function Array_push(self_, value_) {
self_.array.push(value_)
}

export function Array_pushArray(self_, value_) {
self_.array.push(...value_.array)
}

export function Array_pushList(self_, value_) {
self_.array.push(...value_)
}

export function Array_pop(self_) {

            return self_.array.length > 0
                ? ff_core_Option.Some(self_.array.pop())
                : ff_core_Option.None()
        
}

export function Array_set(self_, index_, value_) {

            if(index_ < 0 || index_ > self_.array.length) {
                ff_core_Try.internalThrowGrabException_()
            }
            self_.array[index_] = value_
        
}

export function Array_modify(self_, index_, body_) {

            if(index_ < 0 || index_ >= self_.array.length) {
                ff_core_Try.internalThrowGrabException_()
            }
            self_.array[index_] = body_(self_.array[index_])
        
}

export function Array_fill(self_, value_, start_ = 0, end_ = 9007199254740991) {

            self_.array.fill(value_, start_, end_);
        
}

export function Array_copy(self_, target_, start_, end_) {

            self_.array.copyWithin(target_, start_, end_);
        
}

export function Array_delete(self_, start_, deleteCount_) {

            self_.array.splice(start_, deleteCount_);
        
}

export function Array_insert(self_, start_, value_, deleteCount_ = 0) {

            self_.array.splice(start_, deleteCount_, value_);
        
}

export function Array_insertArray(self_, start_, value_, deleteCount_ = 0) {

            self_.array.splice(start_, deleteCount_, ...value_.array);
        
}

export function Array_insertList(self_, start_, value_, deleteCount_ = 0) {

            self_.array.splice(start_, deleteCount_, ...value_);
        
}

export function Array_each(self_, body_) {

            return self_.array.forEach(body_);
        
}

export function Array_eachWhile(self_, body_) {
for(const value of self_.array) if(!body_(value)) break
}

export function Array_all(self_, body_) {
let result_ = true;
ff_core_Array.Array_eachWhile(self_, ((x_) => {
result_ = body_(x_);
return result_
}));
return result_
}

export function Array_any(self_, body_) {
let result_ = false;
ff_core_Array.Array_eachWhile(self_, ((x_) => {
result_ = body_(x_);
return (!result_)
}));
return result_
}

export function Array_find(self_, body_) {
let result_ = ff_core_Option.None();
ff_core_Array.Array_eachWhile(self_, ((x_) => {
if(body_(x_)) {
result_ = ff_core_Option.Some(x_);
return false
} else {
return true
}
}));
return result_
}

export function Array_indexWhere(self_, body_) {
let i_ = (-1);
let result_ = false;
ff_core_Array.Array_eachWhile(self_, ((x_) => {
i_ += 1;
result_ = body_(x_);
return (!result_)
}));
if(result_) {
return ff_core_Option.Some(i_)
} else return ff_core_Option.None()
}

export function Array_drain(self_) {
const result = self_.array; self_.array = []; return result
}

export function Array_toList(self_, start_ = 0, end_ = 9007199254740991) {
return self_.array.slice(start_, end_)
}

export function Array_toStream(self_, start_ = 0, end_ = 9007199254740991) {
return ff_core_List.List_toStream(ff_core_Array.Array_toList(self_, start_, end_), false)
}

export function Array_reverse(self_) {
self_.array.reverse()
}

export function Array_sortBy(self_, body_, ff_core_Ordering_Order$S) {
ff_core_Array.Array_sortWith(self_, ((_w1, _w2) => {
return ff_core_Ordering_Order$S.compare_(body_(_w1), body_(_w2))
}))
}

export function Array_sortWith(self_, ordering_) {
self_.array.sort((x, y) => ff_core_Ordering.Ordering_toInt(ordering_(x, y)))
}

export async function Array_isEmpty$(self_, $task) {
return (self_.array.length === 0)
}

export async function Array_size$(self_, $task) {
return self_.array.length
}

export async function Array_get$(self_, index_, $task) {
if(((index_ >= 0) && (index_ < self_.array.length))) {
return ff_core_Option.Some(self_.array[index_])
} else {
return ff_core_Option.None()
}
}

export async function Array_grab$(self_, index_, $task) {
if(((index_ < 0) || (index_ >= self_.array.length))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
return self_.array[index_]
}

export async function Array_first$(self_, $task) {
return ff_core_Array.Array_get(self_, 0)
}

export async function Array_last$(self_, $task) {
return ff_core_Array.Array_get(self_, (self_.array.length - 1))
}

export async function Array_grabFirst$(self_, $task) {
return (self_.array[0] ?? ff_core_Array.internalGrab_(self_, 0))
}

export async function Array_grabLast$(self_, $task) {
return (self_.array[(self_.array.length - 1)] ?? ff_core_Array.internalGrab_(self_, (self_.array.length - 1)))
}

export async function Array_push$(self_, value_, $task) {
self_.array.push(value_)
}

export async function Array_pushArray$(self_, value_, $task) {
throw new Error('Function Array_pushArray is missing on this target in async context.');
}

export async function Array_pushList$(self_, value_, $task) {
throw new Error('Function Array_pushList is missing on this target in async context.');
}

export async function Array_pop$(self_, $task) {
throw new Error('Function Array_pop is missing on this target in async context.');
}

export async function Array_set$(self_, index_, value_, $task) {
throw new Error('Function Array_set is missing on this target in async context.');
}

export async function Array_modify$(self_, index_, body_, $task) {

            if(index_ < 0 || index_ >= self_.array.length) {
                ff_core_Try.internalThrowGrabException_()
            }
            self_.array[index_] = await body_(self_.array[index_], $task)
        
}

export async function Array_fill$(self_, value_, start_ = 0, end_ = 9007199254740991, $task) {
throw new Error('Function Array_fill is missing on this target in async context.');
}

export async function Array_copy$(self_, target_, start_, end_, $task) {
throw new Error('Function Array_copy is missing on this target in async context.');
}

export async function Array_delete$(self_, start_, deleteCount_, $task) {
throw new Error('Function Array_delete is missing on this target in async context.');
}

export async function Array_insert$(self_, start_, value_, deleteCount_ = 0, $task) {
throw new Error('Function Array_insert is missing on this target in async context.');
}

export async function Array_insertArray$(self_, start_, value_, deleteCount_ = 0, $task) {
throw new Error('Function Array_insertArray is missing on this target in async context.');
}

export async function Array_insertList$(self_, start_, value_, deleteCount_ = 0, $task) {
throw new Error('Function Array_insertList is missing on this target in async context.');
}

export async function Array_each$(self_, body_, $task) {

            for(let i = 0; i < self_.array.length; i++) {
                await body_(self_.array[i], $task)
            }
        
}

export async function Array_eachWhile$(self_, body_, $task) {
for(const value of self_.array) if(!await body_(value, $task)) break
}

export async function Array_all$(self_, body_, $task) {
let result_ = true;
(await ff_core_Array.Array_eachWhile$(self_, (async (x_, $task) => {
result_ = (await body_(x_, $task));
return result_
}), $task));
return result_
}

export async function Array_any$(self_, body_, $task) {
let result_ = false;
(await ff_core_Array.Array_eachWhile$(self_, (async (x_, $task) => {
result_ = (await body_(x_, $task));
return (!result_)
}), $task));
return result_
}

export async function Array_find$(self_, body_, $task) {
let result_ = ff_core_Option.None();
(await ff_core_Array.Array_eachWhile$(self_, (async (x_, $task) => {
if((await body_(x_, $task))) {
result_ = ff_core_Option.Some(x_);
return false
} else {
return true
}
}), $task));
return result_
}

export async function Array_indexWhere$(self_, body_, $task) {
let i_ = (-1);
let result_ = false;
(await ff_core_Array.Array_eachWhile$(self_, (async (x_, $task) => {
i_ += 1;
result_ = (await body_(x_, $task));
return (!result_)
}), $task));
if(result_) {
return ff_core_Option.Some(i_)
} else return ff_core_Option.None()
}

export async function Array_drain$(self_, $task) {
throw new Error('Function Array_drain is missing on this target in async context.');
}

export async function Array_toList$(self_, start_ = 0, end_ = 9007199254740991, $task) {
throw new Error('Function Array_toList is missing on this target in async context.');
}

export async function Array_toStream$(self_, start_ = 0, end_ = 9007199254740991, $task) {
return (await ff_core_List.List_toStream$(ff_core_Array.Array_toList(self_, start_, end_), false, $task))
}

export async function Array_reverse$(self_, $task) {
throw new Error('Function Array_reverse is missing on this target in async context.');
}

export async function Array_sortBy$(self_, body_, ff_core_Ordering_Order$S, $task) {
(await ff_core_Array.Array_sortWith$(self_, (async (_w1, _w2, $task) => {
return ff_core_Ordering_Order$S.compare_((await body_(_w1, $task)), (await body_(_w2, $task)))
}), $task))
}

export async function Array_sortWith$(self_, ordering_, $task) {
throw new Error('Function Array_sortWith is missing on this target in async context.');
}

export function Array_sort(self_, ff_core_Ordering_Order$T) {
ff_core_Array.Array_sortWith(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export async function Array_sort$(self_, ff_core_Ordering_Order$T, $task) {
ff_core_Array.Array_sortWith(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export function Array_join(self_, separator_ = "") {
return self_.array.join(separator_)
}

export async function Array_join$(self_, separator_ = "", $task) {
throw new Error('Function Array_join is missing on this target in async context.');
}

export function ff_core_Show_Show$ff_core_Array_Array(ff_core_Show_Show$T) { return {
show_(value_) {
const array_ = ff_core_Array.new_();
array_.array.push("[");
ff_core_Array.Array_each(value_, ((x_) => {
if((array_.array.length > 1)) {
array_.array.push(", ")
};
array_.array.push(ff_core_Show_Show$T.show_(x_))
}));
array_.array.push("].toArray()");
return ff_core_Array.Array_join(array_, "")
},
async show_$(value_, $task) {
const array_ = ff_core_Array.new_();
array_.array.push("[");
ff_core_Array.Array_each(value_, ((x_) => {
if((array_.array.length > 1)) {
array_.array.push(", ")
};
array_.array.push(ff_core_Show_Show$T.show_(x_))
}));
array_.array.push("].toArray()");
return ff_core_Array.Array_join(array_, "")
}
}}


