

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

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Json




export function read_(json_) {

        try {
            return ff_core_Option.Some(JSON.parse(json_));
        } catch(e) {
            return ff_core_Option.None();
        }
    
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

export function object_() {

        return {};
    
}

export function fields_(body_) {

        const result = {};
        body_((k, v) => {result[k] = v});
        return result;
    
}

export function internalWith_(self_, field_, value_) {

        if(typeof self_ !== 'object' || self_ === null || Array.isArray(self_)) {
            throw new Error('Not an object: ' + JSON.stringify(self_));
        }
        return {...self_, [field_]: value_};
    
}

export function internalEach_(self_, body_) {
for(const [key, value] of Object.entries(self_)) body_(key, value)
}

export function internalEachWhile_(self_, body_) {
for(const [key, value] of Object.entries(self_)) if(!body_(key, value)) break
}

export function internalEquals_(a_, b_) {

        if(a_ === b_) {
            return true;
        } else if(Array.isArray(a_) || Array.isArray(b_)) {
            if(!Array.isArray(a_) || !Array.isArray(b_)) return false;
            if(a_.length !== b_.length) return false;
            for(let i = 0; i < a_.length; i++) {
                if(!internalEquals_(a_[i], b_[i])) return false;
            }
            return true;
        } else if(typeof a_ === 'object' && typeof b_ === 'object' && a_ !== null && b_ !== null) {
            const aKeys = Object.keys(a_);
            const bKeys = Object.keys(b_);
            if(aKeys.length !== bKeys.length) return false;
            for(const key of aKeys) {
                if(!Object.hasOwn(b_, key) || !internalEquals_(a_[key], b_[key])) return false;
            }
            return true;
        } else {
            return false;
        }
    
}

export function internalCompare_(a_, b_) {

        if(a_ === b_) {
            return 0;
        } else if (a_ === null || b_ === null) {
            return a_ === null ? -1 : 1;
        } else if (typeof a_ === 'boolean' || typeof b_ === 'boolean') {
            if(typeof b_ !== 'boolean') return -1;
            if(typeof a_ !== 'boolean') return 1;
            return a_ < b_ ? -1 : 1;
        } else if (typeof a_ === 'number' || typeof b_ === 'number') {
            if(typeof b_ !== 'number') return -1;
            if(typeof a_ !== 'number') return 1;
            if(isNaN(a_)) return isNaN(b_) ? 0 : -1;
            if(isNaN(b_)) return 1;
            return a_ < b_ ? -1 : 1;
        } else if (typeof a_ === 'string' || typeof b_ === 'string') {
            if(typeof b_ !== 'string') return -1;
            if(typeof a_ !== 'string') return 1;
            return a_.localeCompare(b_, 'en');
        } else if(Array.isArray(a_) || Array.isArray(b_)) {
            if(!Array.isArray(a_) || !Array.isArray(b_)) return a_ < b_ ? -1 : 1;
            const length = Math.min(a_.length, b_.length);
            for(let i = 0; i < length; i++) {
                const cmp = internalCompare_(a_[i], b_[i]);
                if(cmp !== 0) return cmp;
            }
            return a_.length - b_.length;
        } else {
            const aKeys = Object.keys(a_).sort();
            const bKeys = Object.keys(b_).sort();
            const keyResult = internalCompare_(aKeys, bKeys);
            if(keyResult !== 0) return keyResult;
            for(const key of aKeys) {
                const result = internalCompare_(a_[key], b_[key]);
                if(result !== 0) return result;
            }
            return 0;
        }
    
}

export async function read_$(json_, $task) {
throw new Error('Function read is missing on this target in async context.');
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

export async function object_$($task) {
throw new Error('Function object is missing on this target in async context.');
}

export async function fields_$(body_, $task) {

        const result = {};
        await body_((k, v) => {result[k] = v}, $task);
        return result;
    
}

export async function internalWith_$(self_, field_, value_, $task) {
throw new Error('Function internalWith is missing on this target in async context.');
}

export async function internalEach_$(self_, body_, $task) {
for(const [key, value] of Object.entries(self_)) await body_(key, value, $task)
}

export async function internalEachWhile_$(self_, body_, $task) {
for(const [key, value] of Object.entries(self_)) if(!await body_(key, value, $task)) break
}

export async function internalEquals_$(a_, b_, $task) {
throw new Error('Function internalEquals is missing on this target in async context.');
}

export async function internalCompare_$(a_, b_, $task) {
throw new Error('Function internalCompare is missing on this target in async context.');
}

export function Json_write(self_, indentation_ = ff_core_Option.None()) {

            return JSON.stringify(self_, null, indentation_.value_);
        
}

export function Json_with(self_, field_, value_, ff_core_Json_JsonLike$T) {
return ff_core_Json.internalWith_(self_, field_, ff_core_Json_JsonLike$T.toJson_(value_))
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

export function Json_grabMap(self_) {
let map_ = ff_core_Map.empty_();
ff_core_Json.Json_each(self_, ((key_, value_) => {
map_ = ff_core_Map.Map_add(map_, key_, value_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
return map_
}

export function Json_getString(self_) {
if(ff_core_Json.Json_isString(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabString(self_))
} else return ff_core_Option.None()
}

export function Json_getInt(self_) {
if(ff_core_Json.Json_isInt(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabInt(self_))
} else return ff_core_Option.None()
}

export function Json_getFloat(self_) {
if(ff_core_Json.Json_isFloat(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabFloat(self_))
} else return ff_core_Option.None()
}

export function Json_getBool(self_) {
if(ff_core_Json.Json_isBool(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabBool(self_))
} else return ff_core_Option.None()
}

export function Json_getArray(self_) {
if(ff_core_Json.Json_isArray(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabArray(self_))
} else return ff_core_Option.None()
}

export function Json_getMap(self_) {
if(ff_core_Json.Json_isObject(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabMap(self_))
} else return ff_core_Option.None()
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

            return self_ === null;
        
}

export function Json_field(self_, key_) {

            return typeof self_ === 'object' && self_ !== null && !Array.isArray(self_) && Object.hasOwn(self_, key_)
                ? self_[key_] : null;
        
}

export function Json_index(self_, key_) {

            return typeof self_ === 'array' ? self_[key] ?? null : null;
        
}

export function Json_hasField(self_, key_) {

            return typeof self_ === 'object' && self_ !== null && !Array.isArray(self_) && Object.hasOwn(self_, key_);
        
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
const array_ = ff_core_Array.make_();
ff_core_Json.Json_each(self_, ((field_, value_) => {
ff_core_Array.Array_push(array_, body_(field_, value_))
}));
return ff_core_Array.Array_drain(array_)
}

export function Json_flatMap(self_, body_) {
const array_ = ff_core_Array.make_();
ff_core_Json.Json_each(self_, ((field_, value_) => {
ff_core_Array.Array_pushList(array_, body_(field_, value_))
}));
return ff_core_Array.Array_drain(array_)
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

export async function Json_write$(self_, indentation_ = ff_core_Option.None(), $task) {
throw new Error('Function Json_write is missing on this target in async context.');
}

export async function Json_with$(self_, field_, value_, ff_core_Json_JsonLike$T, $task) {
return ff_core_Json.internalWith_(self_, field_, ff_core_Json_JsonLike$T.toJson_(value_))
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

export async function Json_grabMap$(self_, $task) {
let map_ = ff_core_Map.empty_();
ff_core_Json.Json_each(self_, ((key_, value_) => {
map_ = ff_core_Map.Map_add(map_, key_, value_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
return map_
}

export async function Json_getString$(self_, $task) {
if(ff_core_Json.Json_isString(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabString(self_))
} else return ff_core_Option.None()
}

export async function Json_getInt$(self_, $task) {
if(ff_core_Json.Json_isInt(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabInt(self_))
} else return ff_core_Option.None()
}

export async function Json_getFloat$(self_, $task) {
if(ff_core_Json.Json_isFloat(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabFloat(self_))
} else return ff_core_Option.None()
}

export async function Json_getBool$(self_, $task) {
if(ff_core_Json.Json_isBool(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabBool(self_))
} else return ff_core_Option.None()
}

export async function Json_getArray$(self_, $task) {
if(ff_core_Json.Json_isArray(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabArray(self_))
} else return ff_core_Option.None()
}

export async function Json_getMap$(self_, $task) {
if(ff_core_Json.Json_isObject(self_)) {
return ff_core_Option.Some(ff_core_Json.Json_grabMap(self_))
} else return ff_core_Option.None()
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

export async function Json_hasField$(self_, key_, $task) {
throw new Error('Function Json_hasField is missing on this target in async context.');
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
const array_ = ff_core_Array.make_();
(await ff_core_Json.Json_each$(self_, (async (field_, value_, $task) => {
ff_core_Array.Array_push(array_, (await body_(field_, value_, $task)))
}), $task));
return ff_core_Array.Array_drain(array_)
}

export async function Json_flatMap$(self_, body_, $task) {
const array_ = ff_core_Array.make_();
(await ff_core_Json.Json_each$(self_, (async (field_, value_, $task) => {
ff_core_Array.Array_pushList(array_, (await body_(field_, value_, $task)))
}), $task));
return ff_core_Array.Array_drain(array_)
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

export const ff_core_Json_JsonLike$ff_core_Json_Json = {
toJson_(value_) {
return value_
},
fromJson_(json_) {
return ff_core_Option.Some(json_)
},
async toJson_$(value_, $task) {
return value_
},
async fromJson_$(json_, $task) {
return ff_core_Option.Some(json_)
}
};

export const ff_core_Json_JsonLike$ff_core_String_String = {
toJson_(value_) {
return ff_core_Json.string_(value_)
},
fromJson_(json_) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getString(_w1)
return
},
async toJson_$(value_, $task) {
return ff_core_Json.string_(value_)
},
async fromJson_$(json_, $task) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getString(_w1)
return
}
};

export const ff_core_Json_JsonLike$ff_core_Int_Int = {
toJson_(value_) {
return ff_core_Json.int_(value_)
},
fromJson_(json_) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getInt(_w1)
return
},
async toJson_$(value_, $task) {
return ff_core_Json.int_(value_)
},
async fromJson_$(json_, $task) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getInt(_w1)
return
}
};

export const ff_core_Json_JsonLike$ff_core_Float_Float = {
toJson_(value_) {
return ff_core_Json.float_(value_)
},
fromJson_(json_) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getFloat(_w1)
return
},
async toJson_$(value_, $task) {
return ff_core_Json.float_(value_)
},
async fromJson_$(json_, $task) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getFloat(_w1)
return
}
};

export const ff_core_Json_JsonLike$ff_core_Bool_Bool = {
toJson_(value_) {
return ff_core_Json.bool_(value_)
},
fromJson_(json_) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getBool(_w1)
return
},
async toJson_$(value_, $task) {
return ff_core_Json.bool_(value_)
},
async fromJson_$(json_, $task) {
const json_a = json_;
const _w1 = json_a;
return ff_core_Json.Json_getBool(_w1)
return
}
};

export function ff_core_Json_JsonLike$ff_core_List_List(ff_core_Json_JsonLike$T) { return {
toJson_(value_) {
return ff_core_Json.array_(ff_core_List.List_map(value_, ((value_) => {
return ff_core_Json_JsonLike$T.toJson_(value_)
})))
},
fromJson_(json_) {
return ff_core_Option.Option_flatMap(ff_core_Json.Json_getArray(json_), ((array_) => {
let convertible_ = true;
const result_ = ff_core_Array.make_();
ff_core_List.List_eachWhile(array_, ((item_) => {
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(item_);
{
if(_1.None) {
convertible_ = false
break
}
}
{
if(_1.Some) {
const value_ = _1.value_;
ff_core_Array.Array_push(result_, value_)
break
}
}
} while(false);
return convertible_
}));
if(convertible_) {
return ff_core_Option.Some(ff_core_Array.Array_drain(result_))
} else return ff_core_Option.None()
}))
},
async toJson_$(value_, $task) {
return ff_core_Json.array_(ff_core_List.List_map(value_, ((value_) => {
return ff_core_Json_JsonLike$T.toJson_(value_)
})))
},
async fromJson_$(json_, $task) {
return ff_core_Option.Option_flatMap(ff_core_Json.Json_getArray(json_), ((array_) => {
let convertible_ = true;
const result_ = ff_core_Array.make_();
ff_core_List.List_eachWhile(array_, ((item_) => {
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(item_);
{
if(_1.None) {
convertible_ = false
break
}
}
{
if(_1.Some) {
const value_ = _1.value_;
ff_core_Array.Array_push(result_, value_)
break
}
}
} while(false);
return convertible_
}));
if(convertible_) {
return ff_core_Option.Some(ff_core_Array.Array_drain(result_))
} else return ff_core_Option.None()
}))
}
}}

export function ff_core_Json_JsonLike$ff_core_StringMap_StringMap(ff_core_Json_JsonLike$T) { return {
toJson_(value_) {
return ff_core_Json.fields_(((setField_) => {
ff_core_StringMap.StringMap_each(value_, ((key_, value_) => {
setField_(key_, ff_core_Json_JsonLike$T.toJson_(value_))
}))
}))
},
fromJson_(json_) {
return ff_core_Option.Option_flatten((ff_core_Json.Json_isObject(json_)
? ff_core_Option.Some((function() {
const map_ = ff_core_StringMap.make_();
let convertible_ = true;
ff_core_Json.Json_eachWhile(json_, ((key_, value_) => {
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(value_);
{
if(_1.None) {
convertible_ = false
break
}
}
{
if(_1.Some) {
const v_ = _1.value_;
ff_core_StringMap.StringMap_set(map_, key_, v_)
break
}
}
} while(false);
return convertible_
}));
if(convertible_) {
return ff_core_Option.Some(map_)
} else return ff_core_Option.None()
})())
: ff_core_Option.None()))
},
async toJson_$(value_, $task) {
return ff_core_Json.fields_(((setField_) => {
ff_core_StringMap.StringMap_each(value_, ((key_, value_) => {
setField_(key_, ff_core_Json_JsonLike$T.toJson_(value_))
}))
}))
},
async fromJson_$(json_, $task) {
return ff_core_Option.Option_flatten((ff_core_Json.Json_isObject(json_)
? ff_core_Option.Some((await (async function() {
const map_ = ff_core_StringMap.make_();
let convertible_ = true;
ff_core_Json.Json_eachWhile(json_, ((key_, value_) => {
do {
const _1 = ff_core_Json_JsonLike$T.fromJson_(value_);
{
if(_1.None) {
convertible_ = false
break
}
}
{
if(_1.Some) {
const v_ = _1.value_;
ff_core_StringMap.StringMap_set(map_, key_, v_)
break
}
}
} while(false);
return convertible_
}));
if(convertible_) {
return ff_core_Option.Some(map_)
} else return ff_core_Option.None()
})()))
: ff_core_Option.None()))
}
}}

export const ff_core_Any_HasAnyTag$ff_core_Json_Json = {
anyTag_() {
return ff_core_Any.internalAnyTag_("ff:core/Json.Json[]")
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_("ff:core/Json.Json[]")
}
};

export const ff_core_Show_Show$ff_core_Json_Json = {
show_(value_) {
return ff_core_Json.Json_write(value_, ff_core_Option.Some("    "))
},
async show_$(value_, $task) {
return ff_core_Json.Json_write(value_, ff_core_Option.Some("    "))
}
};

export const ff_core_Equal_Equal$ff_core_Json_Json = {
equals_(a_, b_) {
return ff_core_Json.internalEquals_(a_, b_)
},
async equals_$(a_, b_, $task) {
return ff_core_Json.internalEquals_(a_, b_)
}
};

export const ff_core_Ordering_Order$ff_core_Json_Json = {
compare_(a_, b_) {
return ff_core_Ordering.fromInt_(ff_core_Json.internalCompare_(a_, b_))
},
async compare_$(a_, b_, $task) {
return ff_core_Ordering.fromInt_(ff_core_Json.internalCompare_(a_, b_))
}
};

export const ff_core_Serializable_Serializable$ff_core_Json_Json = {
serializeUsing_(serialization_, value_) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, ff_core_Json.Json_write(value_, ff_core_Option.None()))
},
deserializeUsing_(serialization_) {
return ff_core_Option.Option_grab(ff_core_Json.read_(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_)))
},
async serializeUsing_$(serialization_, value_, $task) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, ff_core_Json.Json_write(value_, ff_core_Option.None()))
},
async deserializeUsing_$(serialization_, $task) {
return ff_core_Option.Option_grab(ff_core_Json.read_(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_)))
}
};


