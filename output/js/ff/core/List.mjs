

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

// type List




export function new_() {

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

export function internalGrab_(self_, index_) {

        return index_ < 0 || index_ >= self_.length ? ff_core_Try.internalThrowGrabException_() : self_[index_];
    
}

export async function new_$($task) {
throw new Error('Function new is missing on this target in async context.');
}

export async function fill_$(size_, value_, $task) {
throw new Error('Function fill is missing on this target in async context.');
}

export async function fillBy_$(size_, body_, $task) {

        const array = new Array(size_);
        for(let i = 0; i < size_; i++) {
            array[i] = await(body_(_i));
        }
        return array;
    
}

export async function range_$(size_, $task) {
throw new Error('Function range is missing on this target in async context.');
}

export async function internalSame_$(left_, right_, $task) {
throw new Error('Function internalSame is missing on this target in async context.');
}

export async function internalGrab_$(self_, index_, $task) {
throw new Error('Function internalGrab is missing on this target in async context.');
}

export function List_addAll(self_, that_) {
return self_.concat(that_)
}

export function List_isEmpty(self_) {
return self_.length === 0
}

export function List_size(self_) {
return self_.length
}

export function List_get(self_, index_) {

            return index_ >= 0 && index_ < self_.length
                ? ff_core_Option.Some(self_[index_])
                : ff_core_Option.None()
        
}

export function List_grab(self_, index_) {

            return self_[index_] ?? internalGrab_(self_, index_);
        
}

export function List_first(self_) {
return ff_core_List.List_get(self_, 0)
}

export function List_last(self_) {
return ff_core_List.List_get(self_, (ff_core_List.List_size(self_) - 1))
}

export function List_grabFirst(self_) {
return ff_core_List.List_grab(self_, 0)
}

export function List_grabLast(self_) {
return ff_core_List.List_grab(self_, (ff_core_List.List_size(self_) - 1))
}

export function List_takeFirst(self_, count_ = 1) {
return self_.slice(0, count_)
}

export function List_takeLast(self_, count_ = 1) {
return self_.slice(-count_)
}

export function List_dropFirst(self_, count_ = 1) {
return self_.slice(count_)
}

export function List_dropLast(self_, count_ = 1) {
return self_.slice(0, self_.length - count_)
}

export function List_count(self_, body_) {
let result_ = 0;
let i_ = 0;
while((i_ < ff_core_List.List_size(self_))) {
if(body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)))) {
result_ += 1
};
i_ += 1
};
return result_
}

export function List_countWhile(self_, body_) {
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_))))) {
i_ += 1
};
return i_
}

export function List_takeWhile(self_, body_) {
const result_ = ff_core_Array.new_();
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_))))) {
result_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
return ff_core_Array.Array_drain(result_)
}

export function List_dropWhile(self_, body_) {
const result_ = ff_core_Array.new_();
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_))))) {
i_ += 1
};
while((i_ < ff_core_List.List_size(self_))) {
result_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
return ff_core_Array.Array_drain(result_)
}

export function List_partitionWhile(self_, body_) {
const first_ = ff_core_Array.new_();
const second_ = ff_core_Array.new_();
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_))))) {
first_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
while((i_ < ff_core_List.List_size(self_))) {
second_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
return ff_core_Pair.Pair(ff_core_Array.Array_drain(first_), ff_core_Array.Array_drain(second_))
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

export function List_foldLeft(self_, initial_, body_) {
let result_ = initial_;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
result_ = body_(result_, x_)
};
return result_
}

export function List_update(self_, index_, value_) {
return ff_core_List.List_modify(self_, index_, ((_) => {
return value_
}))
}

export function List_modify(self_, index_, body_) {

            if(index_ < 0 || index_ >= self_.length) {
                ff_core_Try.internalThrowGrabException_()
            }
            let result = self_.slice();
            result[index_] = body_(result[index_]);
            return result;
        
}

export function List_zip(self_, that_) {
if((ff_core_List.List_size(self_) <= ff_core_List.List_size(that_))) {
let i_ = (-1);
return ff_core_List.List_map(self_, ((x_) => {
i_ += 1;
return ff_core_Pair.Pair(x_, (that_[i_] ?? ff_core_List.internalGrab_(that_, i_)))
}))
} else {
let i_ = (-1);
return ff_core_List.List_map(that_, ((y_) => {
i_ += 1;
return ff_core_Pair.Pair((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)), y_)
}))
}
}

export function List_chunk(self_, chunkSize_) {
const results_ = ff_core_Array.new_();
const result_ = ff_core_Array.new_();
let added_ = 0;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const item_ = for_a[for_i];
if((added_ < chunkSize_)) {
added_ += 1
} else {
results_.array.push(ff_core_Array.Array_drain(result_));
added_ = 1
};
result_.array.push(item_)
};
if((added_ !== 0)) {
results_.array.push(ff_core_Array.Array_drain(result_))
};
return ff_core_Array.Array_drain(results_)
}

export function List_toStream(self_, cycle_ = false) {
let index_ = 0;
return ff_core_Stream.new_((() => {
if((index_ < ff_core_List.List_size(self_))) {
return ff_core_Option.Some((function() {
const result_ = (self_[index_] ?? ff_core_List.internalGrab_(self_, index_));
index_ += 1;
return result_
})())
} else if((cycle_ && (index_ !== 0))) {
return ff_core_Option.Some((function() {
const result_ = ff_core_List.List_grab(self_, 0);
index_ = 1;
return result_
})())
} else return ff_core_Option.None()
}), (() => {

}))
}

export function List_toArray(self_) {
return {array: self_.slice()}
}

export function List_each(self_, body_) {

            return self_.forEach(body_);
        
}

export function List_eachWhile(self_, body_) {
for(const value of self_) if(!body_(value)) break
}

export function List_all(self_, body_) {
let result_ = true;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
result_ = (result_ && body_(x_));
if(!result_) break
};
return result_
}

export function List_any(self_, body_) {
let result_ = false;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
result_ = (result_ || body_(x_));
if(!(!result_)) break
};
return result_
}

export function List_indexWhere(self_, body_) {
let result_ = ff_core_Option.None();
let i_ = 0;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if(!(body_(x_)
? (function() {
result_ = ff_core_Option.Some(i_);
return false
})()
: (function() {
i_ += 1;
return true
})())) break
};
return result_
}

export function List_find(self_, body_) {
let result_ = ff_core_Option.None();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if(!(body_(x_)
? (function() {
result_ = ff_core_Option.Some(x_);
return false
})()
: true)) break
};
return result_
}

export function List_filter(self_, body_) {
const result_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if(body_(x_)) {
result_.array.push(x_)
}
};
return ff_core_Array.Array_drain(result_)
}

export function List_partition(self_, body_) {
return ff_core_Pair.Pair(ff_core_List.List_filter(self_, body_), ff_core_List.List_filter(self_, ((_w1) => {
return (!body_(_w1))
})))
}

export function List_map(self_, body_) {

            return self_.map(body_)
        
}

export function List_flatMap(self_, body_) {
const results_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
ff_core_Array.Array_pushList(results_, body_(x_))
};
return ff_core_Array.Array_drain(results_)
}

export function List_collect(self_, body_) {
let result_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
ff_core_Option.Option_each(body_(x_), ((_w1) => {
result_.array.push(_w1)
}))
};
return ff_core_Array.Array_drain(result_)
}

export function List_collectFirst(self_, body_) {
let result_ = ff_core_Option.None();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if(!(((_1) => {
if(_1.None) {
return true
}
{
const o_ = _1;
result_ = o_;
return false
}
}))(body_(x_))) break
};
return result_
}

export function List_sortBy(self_, body_, ff_core_Ordering_Order$S) {
return ff_core_List.List_sortWith(self_, ((_w1, _w2) => {
return ff_core_Ordering_Order$S.compare_(body_(_w1), body_(_w2))
}))
}

export function List_sortWith(self_, ordering_) {
const array_ = ff_core_List.List_toArray(self_);
ff_core_Array.Array_sortWith(array_, ordering_);
return ff_core_Array.Array_drain(array_)
}

export function List_reverse(self_) {
return ff_core_List.List_map(ff_core_Int.Int_to(1, ff_core_List.List_size(self_)), ((i_) => {
return ff_core_List.List_grab(self_, (ff_core_List.List_size(self_) - i_))
}))
}

export function List_separate(self_, separator_) {
const array_ = ff_core_Array.new_();
ff_core_List.List_each(ff_core_List.List_pairs(self_), ((_1) => {
{
const i_ = _1.first_;
const x_ = _1.second_;
if((i_ !== 0)) {
ff_core_Array.Array_pushList(array_, separator_)
};
array_.array.push(x_)
return
}
}));
return ff_core_Array.Array_drain(array_)
}

export async function List_addAll$(self_, that_, $task) {
throw new Error('Function List_addAll is missing on this target in async context.');
}

export async function List_isEmpty$(self_, $task) {
throw new Error('Function List_isEmpty is missing on this target in async context.');
}

export async function List_size$(self_, $task) {
throw new Error('Function List_size is missing on this target in async context.');
}

export async function List_get$(self_, index_, $task) {
throw new Error('Function List_get is missing on this target in async context.');
}

export async function List_grab$(self_, index_, $task) {
throw new Error('Function List_grab is missing on this target in async context.');
}

export async function List_first$(self_, $task) {
return ff_core_List.List_get(self_, 0)
}

export async function List_last$(self_, $task) {
return ff_core_List.List_get(self_, (ff_core_List.List_size(self_) - 1))
}

export async function List_grabFirst$(self_, $task) {
return ff_core_List.List_grab(self_, 0)
}

export async function List_grabLast$(self_, $task) {
return ff_core_List.List_grab(self_, (ff_core_List.List_size(self_) - 1))
}

export async function List_takeFirst$(self_, count_ = 1, $task) {
throw new Error('Function List_takeFirst is missing on this target in async context.');
}

export async function List_takeLast$(self_, count_ = 1, $task) {
throw new Error('Function List_takeLast is missing on this target in async context.');
}

export async function List_dropFirst$(self_, count_ = 1, $task) {
throw new Error('Function List_dropFirst is missing on this target in async context.');
}

export async function List_dropLast$(self_, count_ = 1, $task) {
throw new Error('Function List_dropLast is missing on this target in async context.');
}

export async function List_count$(self_, body_, $task) {
let result_ = 0;
let i_ = 0;
while((i_ < ff_core_List.List_size(self_))) {
if((await body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)), $task))) {
result_ += 1
};
i_ += 1
};
return result_
}

export async function List_countWhile$(self_, body_, $task) {
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && (await body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)), $task)))) {
i_ += 1
};
return i_
}

export async function List_takeWhile$(self_, body_, $task) {
const result_ = ff_core_Array.new_();
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && (await body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)), $task)))) {
result_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
return ff_core_Array.Array_drain(result_)
}

export async function List_dropWhile$(self_, body_, $task) {
const result_ = ff_core_Array.new_();
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && (await body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)), $task)))) {
i_ += 1
};
while((i_ < ff_core_List.List_size(self_))) {
result_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
return ff_core_Array.Array_drain(result_)
}

export async function List_partitionWhile$(self_, body_, $task) {
const first_ = ff_core_Array.new_();
const second_ = ff_core_Array.new_();
let i_ = 0;
while(((i_ < ff_core_List.List_size(self_)) && (await body_((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)), $task)))) {
first_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
while((i_ < ff_core_List.List_size(self_))) {
second_.array.push((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)));
i_ += 1
};
return ff_core_Pair.Pair(ff_core_Array.Array_drain(first_), ff_core_Array.Array_drain(second_))
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

export async function List_foldLeft$(self_, initial_, body_, $task) {
let result_ = initial_;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
result_ = (await body_(result_, x_, $task))
};
return result_
}

export async function List_update$(self_, index_, value_, $task) {
return ff_core_List.List_modify(self_, index_, ((_) => {
return value_
}))
}

export async function List_modify$(self_, index_, body_, $task) {

            if(index_ < 0 || index_ >= self_.length) {
                ff_core_Try.internalThrowGrabException_()
            }
            let result = self_.slice();
            result[index_] = await body_(result[index_], $task);
            return result;
        
}

export async function List_zip$(self_, that_, $task) {
if((ff_core_List.List_size(self_) <= ff_core_List.List_size(that_))) {
let i_ = (-1);
return ff_core_List.List_map(self_, ((x_) => {
i_ += 1;
return ff_core_Pair.Pair(x_, (that_[i_] ?? ff_core_List.internalGrab_(that_, i_)))
}))
} else {
let i_ = (-1);
return ff_core_List.List_map(that_, ((y_) => {
i_ += 1;
return ff_core_Pair.Pair((self_[i_] ?? ff_core_List.internalGrab_(self_, i_)), y_)
}))
}
}

export async function List_chunk$(self_, chunkSize_, $task) {
const results_ = ff_core_Array.new_();
const result_ = ff_core_Array.new_();
let added_ = 0;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const item_ = for_a[for_i];
if((added_ < chunkSize_)) {
added_ += 1
} else {
results_.array.push(ff_core_Array.Array_drain(result_));
added_ = 1
};
result_.array.push(item_)
};
if((added_ !== 0)) {
results_.array.push(ff_core_Array.Array_drain(result_))
};
return ff_core_Array.Array_drain(results_)
}

export async function List_toStream$(self_, cycle_ = false, $task) {
let index_ = 0;
return (await ff_core_Stream.new_$((async ($task) => {
if((index_ < ff_core_List.List_size(self_))) {
return ff_core_Option.Some((await (async function() {
const result_ = (self_[index_] ?? ff_core_List.internalGrab_(self_, index_));
index_ += 1;
return result_
})()))
} else if((cycle_ && (index_ !== 0))) {
return ff_core_Option.Some((await (async function() {
const result_ = ff_core_List.List_grab(self_, 0);
index_ = 1;
return result_
})()))
} else return ff_core_Option.None()
}), (async ($task) => {

}), $task))
}

export async function List_toArray$(self_, $task) {
throw new Error('Function List_toArray is missing on this target in async context.');
}

export async function List_each$(self_, body_, $task) {

            for(let i = 0; i < self_.length; i++) {
                await body_(self_[i], $task)
            }
        
}

export async function List_eachWhile$(self_, body_, $task) {
for(const value of self_) if(!await body_(value, $task)) break
}

export async function List_all$(self_, body_, $task) {
let result_ = true;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
result_ = (result_ && (await body_(x_, $task)));
if(!result_) break
};
return result_
}

export async function List_any$(self_, body_, $task) {
let result_ = false;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
result_ = (result_ || (await body_(x_, $task)));
if(!(!result_)) break
};
return result_
}

export async function List_indexWhere$(self_, body_, $task) {
let result_ = ff_core_Option.None();
let i_ = 0;
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if(!((await body_(x_, $task))
? (await (async function() {
result_ = ff_core_Option.Some(i_);
return false
})())
: (await (async function() {
i_ += 1;
return true
})()))) break
};
return result_
}

export async function List_find$(self_, body_, $task) {
let result_ = ff_core_Option.None();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if(!((await body_(x_, $task))
? (await (async function() {
result_ = ff_core_Option.Some(x_);
return false
})())
: true)) break
};
return result_
}

export async function List_filter$(self_, body_, $task) {
const result_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if((await body_(x_, $task))) {
result_.array.push(x_)
}
};
return ff_core_Array.Array_drain(result_)
}

export async function List_partition$(self_, body_, $task) {
return ff_core_Pair.Pair((await ff_core_List.List_filter$(self_, body_, $task)), (await ff_core_List.List_filter$(self_, (async (_w1, $task) => {
return (!(await body_(_w1, $task)))
}), $task)))
}

export async function List_map$(self_, body_, $task) {

            let result = [];
            for(let i = 0; i < self_.length; i++) {
                result.push(await body_(self_[i], $task));
            }
            return result;
        
}

export async function List_flatMap$(self_, body_, $task) {
const results_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
ff_core_Array.Array_pushList(results_, (await body_(x_, $task)))
};
return ff_core_Array.Array_drain(results_)
}

export async function List_collect$(self_, body_, $task) {
let result_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
ff_core_Option.Option_each((await body_(x_, $task)), ((_w1) => {
result_.array.push(_w1)
}))
};
return ff_core_Array.Array_drain(result_)
}

export async function List_collectFirst$(self_, body_, $task) {
let result_ = ff_core_Option.None();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if(!(((_1) => {
if(_1.None) {
return true
}
{
const o_ = _1;
result_ = o_;
return false
}
}))((await body_(x_, $task)))) break
};
return result_
}

export async function List_sortBy$(self_, body_, ff_core_Ordering_Order$S, $task) {
return (await ff_core_List.List_sortWith$(self_, (async (_w1, _w2, $task) => {
return ff_core_Ordering_Order$S.compare_((await body_(_w1, $task)), (await body_(_w2, $task)))
}), $task))
}

export async function List_sortWith$(self_, ordering_, $task) {
const array_ = ff_core_List.List_toArray(self_);
(await ff_core_Array.Array_sortWith$(array_, ordering_, $task));
return ff_core_Array.Array_drain(array_)
}

export async function List_reverse$(self_, $task) {
return ff_core_List.List_map(ff_core_Int.Int_to(1, ff_core_List.List_size(self_)), ((i_) => {
return ff_core_List.List_grab(self_, (ff_core_List.List_size(self_) - i_))
}))
}

export async function List_separate$(self_, separator_, $task) {
const array_ = ff_core_Array.new_();
ff_core_List.List_each(ff_core_List.List_pairs(self_), ((_1) => {
{
const i_ = _1.first_;
const x_ = _1.second_;
if((i_ !== 0)) {
ff_core_Array.Array_pushList(array_, separator_)
};
array_.array.push(x_)
return
}
}));
return ff_core_Array.Array_drain(array_)
}

export function List_sort(self_, ff_core_Ordering_Order$T) {
return ff_core_List.List_sortWith(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export function List_toSet(self_, ff_core_Ordering_Order$T) {
return ff_core_List.List_foldLeft(self_, ff_core_Set.new_(), ((_w1, _w2) => {
return ff_core_Set.Set_add(_w1, _w2, ff_core_Ordering_Order$T)
}))
}

export function List_distinct(self_, ff_core_Ordering_Order$T) {
let seen_ = ff_core_List.List_toSet([], ff_core_Ordering_Order$T);
return ff_core_List.List_filter(self_, ((_1) => {
{
const item_ = _1;
if((!ff_core_Set.Set_contains(seen_, item_, ff_core_Ordering_Order$T))) {
seen_ = ff_core_Set.Set_add(seen_, item_, ff_core_Ordering_Order$T);
return true
}
}
{
return false
}
}))
}

export async function List_sort$(self_, ff_core_Ordering_Order$T, $task) {
return ff_core_List.List_sortWith(self_, ((x_, y_) => {
return ff_core_Ordering_Order$T.compare_(x_, y_)
}))
}

export async function List_toSet$(self_, ff_core_Ordering_Order$T, $task) {
return ff_core_List.List_foldLeft(self_, ff_core_Set.new_(), ((_w1, _w2) => {
return ff_core_Set.Set_add(_w1, _w2, ff_core_Ordering_Order$T)
}))
}

export async function List_distinct$(self_, ff_core_Ordering_Order$T, $task) {
let seen_ = ff_core_List.List_toSet([], ff_core_Ordering_Order$T);
return ff_core_List.List_filter(self_, ((_1) => {
{
const item_ = _1;
if((!ff_core_Set.Set_contains(seen_, item_, ff_core_Ordering_Order$T))) {
seen_ = ff_core_Set.Set_add(seen_, item_, ff_core_Ordering_Order$T);
return true
}
}
{
return false
}
}))
}

export function List_flatten(self_) {
const result_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const xs_ = for_a[for_i];
ff_core_Array.Array_pushList(result_, xs_)
};
return ff_core_Array.Array_drain(result_)
}

export async function List_flatten$(self_, $task) {
const result_ = ff_core_Array.new_();
for(let for_i = 0, for_a = self_, for_l = for_a.length; for_i < for_l; for_i++) {
const xs_ = for_a[for_i];
ff_core_Array.Array_pushList(result_, xs_)
};
return ff_core_Array.Array_drain(result_)
}

export function List_toMap(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_foldLeft(self_, ff_core_Map.new_(), ((_1, _2) => {
{
const map_ = _1;
const key_ = _2.first_;
const value_ = _2.second_;
return ff_core_Map.Map_add(map_, key_, value_, ff_core_Ordering_Order$K)
}
}))
}

export function List_group(self_, ff_core_Ordering_Order$K) {
let map_ = ff_core_Map.new_();
ff_core_List.List_each(self_, ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
map_ = ff_core_Map.Map_push(map_, k_, v_, ff_core_Ordering_Order$K)
return
}
}));
return ff_core_Map.Map_mapValues(map_, ((_, v_) => {
return ff_core_Array.Array_drain(v_)
}), ff_core_Ordering_Order$K)
}

export async function List_toMap$(self_, ff_core_Ordering_Order$K, $task) {
return ff_core_List.List_foldLeft(self_, ff_core_Map.new_(), ((_1, _2) => {
{
const map_ = _1;
const key_ = _2.first_;
const value_ = _2.second_;
return ff_core_Map.Map_add(map_, key_, value_, ff_core_Ordering_Order$K)
}
}))
}

export async function List_group$(self_, ff_core_Ordering_Order$K, $task) {
let map_ = ff_core_Map.new_();
ff_core_List.List_each(self_, ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
map_ = ff_core_Map.Map_push(map_, k_, v_, ff_core_Ordering_Order$K)
return
}
}));
return ff_core_Map.Map_mapValues(map_, ((_, v_) => {
return ff_core_Array.Array_drain(v_)
}), ff_core_Ordering_Order$K)
}

export function List_unzip(self_) {
const first_ = ff_core_Array.new_();
const second_ = ff_core_Array.new_();
ff_core_List.List_each(self_, ((_1) => {
{
const x_ = _1.first_;
const y_ = _1.second_;
first_.array.push(x_);
second_.array.push(y_)
return
}
}));
return ff_core_Pair.Pair(ff_core_Array.Array_drain(first_), ff_core_Array.Array_drain(second_))
}

export async function List_unzip$(self_, $task) {
const first_ = ff_core_Array.new_();
const second_ = ff_core_Array.new_();
ff_core_List.List_each(self_, ((_1) => {
{
const x_ = _1.first_;
const y_ = _1.second_;
first_.array.push(x_);
second_.array.push(y_)
return
}
}));
return ff_core_Pair.Pair(ff_core_Array.Array_drain(first_), ff_core_Array.Array_drain(second_))
}

export function List_join(self_, separator_ = "") {
return self_.join(separator_)
}

export async function List_join$(self_, separator_ = "", $task) {
throw new Error('Function List_join is missing on this target in async context.');
}

export function ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$T) { return {
show_(value_) {
const array_ = ff_core_Array.new_();
array_.array.push("[");
for(let for_i = 0, for_a = value_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if((ff_core_Array.Array_size(array_) > 1)) {
array_.array.push(", ")
};
array_.array.push(ff_core_Show_Show$T.show_(x_))
};
array_.array.push("]");
return ff_core_Array.Array_join(array_, "")
},
async show_$(value_, $task) {
const array_ = ff_core_Array.new_();
array_.array.push("[");
for(let for_i = 0, for_a = value_, for_l = for_a.length; for_i < for_l; for_i++) {
const x_ = for_a[for_i];
if((ff_core_Array.Array_size(array_) > 1)) {
array_.array.push(", ")
};
array_.array.push(ff_core_Show_Show$T.show_(x_))
};
array_.array.push("]");
return ff_core_Array.Array_join(array_, "")
}
}}

export function ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal_Equal$T) { return {
equals_(x_, y_) {
if(ff_core_List.internalSame_(x_, y_)) {
return true
} else {
if((ff_core_List.List_size(x_) !== ff_core_List.List_size(y_))) {
return false
} else {
let i_ = (-1);
return ff_core_List.List_all(x_, ((l_) => {
i_ += 1;
return ff_core_Equal_Equal$T.equals_(l_, (y_[i_] ?? ff_core_List.internalGrab_(y_, i_)))
}))
}
}
},
async equals_$(x_, y_, $task) {
if(ff_core_List.internalSame_(x_, y_)) {
return true
} else {
if((ff_core_List.List_size(x_) !== ff_core_List.List_size(y_))) {
return false
} else {
let i_ = (-1);
return ff_core_List.List_all(x_, ((l_) => {
i_ += 1;
return ff_core_Equal_Equal$T.equals_(l_, (y_[i_] ?? ff_core_List.internalGrab_(y_, i_)))
}))
}
}
}
}}

export function ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$T) { return {
compare_(x_, y_) {
if(ff_core_List.internalSame_(x_, y_)) {
return ff_core_Ordering.OrderingSame()
} else {
const size_ = ff_core_Int.Int_min(ff_core_List.List_size(x_), ff_core_List.List_size(y_));
let i_ = 0;
let ordering_ = ff_core_Ordering.OrderingSame();
while(((ordering_ === ff_core_Ordering.OrderingSame()) && (i_ < size_))) {
ordering_ = ff_core_Ordering_Order$T.compare_((x_[i_] ?? ff_core_List.internalGrab_(x_, i_)), (y_[i_] ?? ff_core_List.internalGrab_(y_, i_)));
i_ += 1
};
if((ordering_ !== ff_core_Ordering.OrderingSame())) {
return ordering_
} else {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(ff_core_List.List_size(x_), ff_core_List.List_size(y_))
}
}
},
async compare_$(x_, y_, $task) {
if(ff_core_List.internalSame_(x_, y_)) {
return ff_core_Ordering.OrderingSame()
} else {
const size_ = ff_core_Int.Int_min(ff_core_List.List_size(x_), ff_core_List.List_size(y_));
let i_ = 0;
let ordering_ = ff_core_Ordering.OrderingSame();
while(((ordering_ === ff_core_Ordering.OrderingSame()) && (i_ < size_))) {
ordering_ = ff_core_Ordering_Order$T.compare_((x_[i_] ?? ff_core_List.internalGrab_(x_, i_)), (y_[i_] ?? ff_core_List.internalGrab_(y_, i_)));
i_ += 1
};
if((ordering_ !== ff_core_Ordering.OrderingSame())) {
return ordering_
} else {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(ff_core_List.List_size(x_), ff_core_List.List_size(y_))
}
}
}
}}

export function ff_core_Any_HasAnyTag$ff_core_List_List(ff_core_Any_HasAnyTag$T) { return {
anyTag_() {
return ff_core_Any.internalAnyTag_(((("ff:core/List.List" + "[") + ff_core_Any.AnyTag_show(ff_core_Any_HasAnyTag$T.anyTag_())) + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_(((("ff:core/List.List" + "[") + ff_core_Any.AnyTag_show(ff_core_Any_HasAnyTag$T.anyTag_())) + "]"))
}
}}


