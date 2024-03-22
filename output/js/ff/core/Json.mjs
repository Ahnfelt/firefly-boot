

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

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

import * as ff_core_WebSocket from "../../ff/core/WebSocket.mjs"

// type Json




export function read_(json_) {

        try {
            return ff_core_Option.Some(JSON.parse(json_));
        } catch(e) {
            return ff_core_Option.None();
        }
    
}

export function write_(json_, space_ = ff_core_Option.None()) {

        return JSON.stringify(json_, null, space_.value_);
    
}

export function string_(json_) {

        return json_;
    
}

export function int_(json_) {

        return json_;
    
}

export function float_(json_) {

        return json_;
    
}

export function bool_(json_) {

        return json_;
    
}

export function null_() {

        return null;
    
}

export function array_(json_) {

        return json_;
    
}

export function list_(json_) {
return ff_core_Json.array_(ff_core_List.List_toArray(json_))
}

export function object_() {

        return {};
    
}

export function internalEach_(self_, body_) {
for(const [key, value] of Object.entries(self_)) body_(key, value)
}

export function internalEachWhile_(self_, body_) {
for(const [key, value] of Object.entries(self_)) if(!body_(key, value)) break
}

export async function read_$(json_, $task) {
throw new Error('Function read is missing on this target in async context.');
}

export async function write_$(json_, space_ = ff_core_Option.None(), $task) {
throw new Error('Function write is missing on this target in async context.');
}

export async function string_$(json_, $task) {
throw new Error('Function string is missing on this target in async context.');
}

export async function int_$(json_, $task) {
throw new Error('Function int is missing on this target in async context.');
}

export async function float_$(json_, $task) {
throw new Error('Function float is missing on this target in async context.');
}

export async function bool_$(json_, $task) {
throw new Error('Function bool is missing on this target in async context.');
}

export async function null_$($task) {
throw new Error('Function null is missing on this target in async context.');
}

export async function array_$(json_, $task) {
throw new Error('Function array is missing on this target in async context.');
}

export async function list_$(json_, $task) {
return ff_core_Json.array_(ff_core_List.List_toArray(json_))
}

export async function object_$($task) {
throw new Error('Function object is missing on this target in async context.');
}

export async function internalEach_$(self_, body_, $task) {
for(const [key, value] of Object.entries(self_)) await body_(key, value, $task)
}

export async function internalEachWhile_$(self_, body_, $task) {
for(const [key, value] of Object.entries(self_)) if(!await body_(key, value, $task)) break
}

export function Json_with(self_, field_, value_) {

            if(typeof self_ !== 'object' || self_ === null || Array.isArray(self_)) {
                throw new Error('Not an object: ' + JSON.stringify(self_));
            }
            return {...self_, [field_]: value_};
        
}

export function Json_merge(self_, that_) {

            if(typeof self_ !== 'object' || self_ === null || Array.isArray(self_)) {
                throw new Error('Not an object: ' + JSON.stringify(self_));
            }
            if(typeof that_ !== 'object' || that_ === null || Array.isArray(that_)) {
                throw new Error('Not an object: ' + JSON.stringify(that_));
            }
            return {...self_, ...that_};
        
}

export function Json_grabString(self_) {

            if(typeof self_ !== 'string') throw new Error('Not a string: ' + JSON.stringify(self_));
            return self_;
        
}

export function Json_grabInt(self_) {

            if(!Number.isSafeInteger(self_)) throw new Error('Not an int: ' + JSON.stringify(self_));
            return Math.trunc(self_);
        
}

export function Json_grabFloat(self_) {

            if(typeof self_ !== 'number') throw new Error('Not a float: ' + JSON.stringify(self_));
            return self_;
        
}

export function Json_grabBool(self_) {

            if(self_ === true) return true;
            if(self_ === false) return false;
            throw new Error('Not a bool: ' + JSON.stringify(self_));
        
}

export function Json_grabArray(self_) {

            if(!Array.isArray(self_)) throw new Error('Not an array: ' + JSON.stringify(self_));
            return self_;
        
}

export function Json_isString(self_) {

            return typeof self_ === 'string';
        
}

export function Json_isInt(self_) {

            return Number.isSafeInteger(self_);
        
}

export function Json_isFloat(self_) {

            return typeof self_ === 'number';
        
}

export function Json_isBool(self_) {

            return typeof self_ === 'boolean';
        
}

export function Json_isArray(self_) {

            return Array.isArray(self_);
        
}

export function Json_isObject(self_) {

            return typeof self_ === 'object' && self_ !== null && !Array.isArray(self_);
        
}

export function Json_isNull(self_) {

            return typeof self_ === null;
        
}

export function Json_field(self_, key_) {

            return typeof self_ === 'object' && self_ !== null && !Array.isArray(self_) && Object.hasOwn(self_, key_)
                ? self_[key_] : null;
        
}

export function Json_index(self_, key_) {

            return typeof self_ === 'array' ? self_[key] ?? null : null;
        
}

export function Json_getField(self_, key_) {

            return typeof self_ === 'object' && self_ !== null && !Array.isArray(self_) && Object.hasOwn(self_, key_)
                ? ff_core_Option.Some(self_[key_]) : ff_core_Option.None();
        
}

export function Json_getIndex(self_, key_) {

            return typeof self_ === 'array' ? ff_core_Option.Some(self_[key_] ?? null) : ff_core_Option.None();
        
}

export function Json_getFields(self_) {

            return typeof self_ === 'object' && self_ !== null && !Array.isArray(self_)
                ? ff_core_Option.Some(Object.keys(self_)) : ff_core_Option.None();
        
}

export function Json_grabField(self_, key_) {
return ff_core_Option.Option_else(ff_core_Json.Json_getField(self_, key_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export function Json_grabIndex(self_, key_) {
return ff_core_Option.Option_else(ff_core_Json.Json_getIndex(self_, key_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export function Json_grabFields(self_) {
return ff_core_Option.Option_else(ff_core_Json.Json_getFields(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export function Json_map(self_, body_) {
const stack_ = ff_core_Stack.make_();
ff_core_Json.Json_each(self_, ((field_, value_) => {
ff_core_Stack.Stack_push(stack_, body_(field_, value_))
}));
return ff_core_Stack.Stack_drain(stack_)
}

export function Json_each(self_, body_) {
if((!ff_core_Json.Json_isObject(self_))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
ff_core_Json.internalEach_(self_, body_)
}

export function Json_eachWhile(self_, body_) {
if((!ff_core_Json.Json_isObject(self_))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
ff_core_Json.internalEachWhile_(self_, body_)
}

export async function Json_with$(self_, field_, value_, $task) {
throw new Error('Function Json_with is missing on this target in async context.');
}

export async function Json_merge$(self_, that_, $task) {
throw new Error('Function Json_merge is missing on this target in async context.');
}

export async function Json_grabString$(self_, $task) {
throw new Error('Function Json_grabString is missing on this target in async context.');
}

export async function Json_grabInt$(self_, $task) {
throw new Error('Function Json_grabInt is missing on this target in async context.');
}

export async function Json_grabFloat$(self_, $task) {
throw new Error('Function Json_grabFloat is missing on this target in async context.');
}

export async function Json_grabBool$(self_, $task) {
throw new Error('Function Json_grabBool is missing on this target in async context.');
}

export async function Json_grabArray$(self_, $task) {
throw new Error('Function Json_grabArray is missing on this target in async context.');
}

export async function Json_isString$(self_, $task) {
throw new Error('Function Json_isString is missing on this target in async context.');
}

export async function Json_isInt$(self_, $task) {
throw new Error('Function Json_isInt is missing on this target in async context.');
}

export async function Json_isFloat$(self_, $task) {
throw new Error('Function Json_isFloat is missing on this target in async context.');
}

export async function Json_isBool$(self_, $task) {
throw new Error('Function Json_isBool is missing on this target in async context.');
}

export async function Json_isArray$(self_, $task) {
throw new Error('Function Json_isArray is missing on this target in async context.');
}

export async function Json_isObject$(self_, $task) {
throw new Error('Function Json_isObject is missing on this target in async context.');
}

export async function Json_isNull$(self_, $task) {
throw new Error('Function Json_isNull is missing on this target in async context.');
}

export async function Json_field$(self_, key_, $task) {
throw new Error('Function Json_field is missing on this target in async context.');
}

export async function Json_index$(self_, key_, $task) {
throw new Error('Function Json_index is missing on this target in async context.');
}

export async function Json_getField$(self_, key_, $task) {
throw new Error('Function Json_getField is missing on this target in async context.');
}

export async function Json_getIndex$(self_, key_, $task) {
throw new Error('Function Json_getIndex is missing on this target in async context.');
}

export async function Json_getFields$(self_, $task) {
throw new Error('Function Json_getFields is missing on this target in async context.');
}

export async function Json_grabField$(self_, key_, $task) {
return ff_core_Option.Option_else(ff_core_Json.Json_getField(self_, key_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export async function Json_grabIndex$(self_, key_, $task) {
return ff_core_Option.Option_else(ff_core_Json.Json_getIndex(self_, key_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export async function Json_grabFields$(self_, $task) {
return ff_core_Option.Option_else(ff_core_Json.Json_getFields(self_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
}))
}

export async function Json_map$(self_, body_, $task) {
const stack_ = ff_core_Stack.make_();
(await ff_core_Json.Json_each$(self_, (async (field_, value_, $task) => {
ff_core_Stack.Stack_push(stack_, (await body_(field_, value_, $task)))
}), $task));
return ff_core_Stack.Stack_drain(stack_)
}

export async function Json_each$(self_, body_, $task) {
if((!ff_core_Json.Json_isObject(self_))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
(await ff_core_Json.internalEach_$(self_, body_, $task))
}

export async function Json_eachWhile$(self_, body_, $task) {
if((!ff_core_Json.Json_isObject(self_))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException)})
};
(await ff_core_Json.internalEachWhile_$(self_, body_, $task))
}




