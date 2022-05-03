

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

// type Array




export function range_(size_) {

        return Array.from({length: size_}, (_, i) => i);
    
}

export function build_(initial_, body_) {
const builder_ = ff_core_ArrayBuilder.empty_();
function go_(state_) {
_tailcall: for(;;) {
{
const _1 = body_(state_);
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const s_ = _1.value_.first_;
const x_ = _1.value_.second_;
ff_core_ArrayBuilder.ArrayBuilder_add(builder_, x_);
{
const state_r_ = s_;
state_ = state_r_
continue _tailcall
}
return
}
}
}
return
}
}
go_(initial_);
return ff_core_ArrayBuilder.ArrayBuilder_drain(builder_)
}

export function fill_(size_, value_) {

        return new Array(size_).fill(value_);
    
}

export function empty_() {

        return [];
    
}

export async function range_$(size_, $c) {
throw new Error('Function range is missing on this target in async context.');
}

export async function build_$(initial_, body_, $c) {
const builder_ = ff_core_ArrayBuilder.empty_();
async function go_$(state_, $c) {
_tailcall: for(;;) {
{
const _1 = (await body_(state_, $c));
{
if(_1.None) {

return
}
}
{
if(_1.Some) {
const s_ = _1.value_.first_;
const x_ = _1.value_.second_;
ff_core_ArrayBuilder.ArrayBuilder_add(builder_, x_);
{
const state_r_ = s_;
state_ = state_r_
continue _tailcall
}
return
}
}
}
return
}
}
(await go_$(initial_, $c));
return ff_core_ArrayBuilder.ArrayBuilder_drain(builder_)
}

export async function fill_$(size_, value_, $c) {
throw new Error('Function fill is missing on this target in async context.');
}

export async function empty_$($c) {
throw new Error('Function empty is missing on this target in async context.');
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

export function Array_expect(self_, index_) {

            if(index_ < 0 || index_ >= self_.length) {
                throw new Error('Index ' + index_ + ' is out of bounds in an array of size ' + self_.length)
            }
            return self_[index_]
        
}

export function Array_expectFirst(self_) {
return ff_core_Array.Array_expect(self_, 0)
}

export function Array_expectLast(self_) {
return ff_core_Array.Array_expect(self_, (ff_core_Array.Array_size(self_) - 1))
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

export async function Array_addAll$(self_, that_, $c) {
throw new Error('Function Array_addAll is missing on this target in async context.');
}

export async function Array_isEmpty$(self_, $c) {
throw new Error('Function Array_isEmpty is missing on this target in async context.');
}

export async function Array_size$(self_, $c) {
throw new Error('Function Array_size is missing on this target in async context.');
}

export async function Array_expect$(self_, index_, $c) {
throw new Error('Function Array_expect is missing on this target in async context.');
}

export async function Array_expectFirst$(self_, $c) {
return ff_core_Array.Array_expect(self_, 0)
}

export async function Array_expectLast$(self_, $c) {
return ff_core_Array.Array_expect(self_, (ff_core_Array.Array_size(self_) - 1))
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

export function Array_join(self_, separator_ = "") {
return self_.join(separator_)
}

export async function Array_join$(self_, separator_ = "", $c) {
throw new Error('Function Array_join is missing on this target in async context.');
}




