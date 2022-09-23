

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

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

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type String








export function String_size(self_) {
return self_.length
}

export function String_expect(self_, index_) {
return self_.charCodeAt(index_)
}

export function String_replace(self_, needle_, replacement_) {
return self_.replaceAll(needle_, replacement_)
}

export function String_replaceFirst(self_, needle_, replacement_) {
return self_.replace(needle_, replacement_)
}

export function String_reverse(self_) {
return [...self_].reverse().join('')
}

export function String_dropWhile(self_, p_) {

            let i = 0
            for(; i < self_.length && p_(self_.codePointAt(i)); i++);
            return self_.slice(i)
        
}

export function String_takeWhile(self_, p_) {

            let i = 0
            for(; i < self_.length && p_(self_.codePointAt(i)); i++);
            return self_.slice(0, i)
        
}

export function String_slice(self_, from_, until_) {
return self_.slice(from_, until_)
}

export function String_split(self_, char_) {
return self_.split(String.fromCharCode(char_))
}

export function String_dropFirst(self_, count_ = 1) {
return self_.slice(count_)
}

export function String_dropLast(self_, count_ = 1) {
return self_.slice(0, self_.length - count_)
}

export function String_expectInt(self_) {

            if(self_.length == 0) throw "expectInt on empty string"
            for(let i = 0; i < self_.length; i++) {
                let c = self_.codePointAt(i);
                if(c < 48 || c > 57) throw "expectInt on non-digit string";
            }
            return parseInt(self_, 10);
        
}

export function String_first(self_) {

            return self_.length > 0
                ? ff_core_Option.Some(self_.charCodeAt(0))
                : ff_core_Option.None()
        
}

export function String_last(self_) {

            return self_.length > 0
                ? ff_core_Option.Some(self_.charCodeAt(self_.length - 1))
                : ff_core_Option.None()
        
}

export function String_expectFirst(self_) {
return ff_core_Option.Option_else(ff_core_String.String_first(self_), (() => {
return ff_core_Core.panic_("expectFirst() on empty string")
}))
}

export function String_expectLast(self_) {
return ff_core_Option.Option_else(ff_core_String.String_last(self_), (() => {
return ff_core_Core.panic_("expectFirst() on empty string")
}))
}

export function String_contains(self_, substring_) {
return self_.includes(substring_)
}

export function String_startsWith(self_, prefix_, offset_ = 0) {
return self_.startsWith(prefix_, offset_)
}

export function String_endsWith(self_, prefix_) {
return self_.endsWith(prefix_)
}

export function String_any(self_, body_) {

            for(let i = 0; i < self_.length; i++) {
                if(body_(self_.charCodeAt(i))) return true;
            }
            return false;
        
}

export function String_all(self_, body_) {

            for(let i = 0; i < self_.length; i++) {
                if(!body_(self_.charCodeAt(i))) return false;
            }
            return true;
        
}

export function String_toBuffer(self_) {

            return Buffer.from(self_, 'utf8');
        
}

export async function String_size$(self_, $c) {
throw new Error('Function String_size is missing on this target in async context.');
}

export async function String_expect$(self_, index_, $c) {
throw new Error('Function String_expect is missing on this target in async context.');
}

export async function String_replace$(self_, needle_, replacement_, $c) {
throw new Error('Function String_replace is missing on this target in async context.');
}

export async function String_replaceFirst$(self_, needle_, replacement_, $c) {
throw new Error('Function String_replaceFirst is missing on this target in async context.');
}

export async function String_reverse$(self_, $c) {
throw new Error('Function String_reverse is missing on this target in async context.');
}

export async function String_dropWhile$(self_, p_, $c) {

            let i = 0
            for(; i < self_.length && await p_(self_.codePointAt(i), $c); i++);
            return self_.slice(i)
        
}

export async function String_takeWhile$(self_, p_, $c) {

            let i = 0
            for(; i < self_.length && await p_(self_.codePointAt(i), $c); i++);
            return self_.slice(0, i)
        
}

export async function String_slice$(self_, from_, until_, $c) {
throw new Error('Function String_slice is missing on this target in async context.');
}

export async function String_split$(self_, char_, $c) {
throw new Error('Function String_split is missing on this target in async context.');
}

export async function String_dropFirst$(self_, count_ = 1, $c) {
throw new Error('Function String_dropFirst is missing on this target in async context.');
}

export async function String_dropLast$(self_, count_ = 1, $c) {
throw new Error('Function String_dropLast is missing on this target in async context.');
}

export async function String_expectInt$(self_, $c) {
throw new Error('Function String_expectInt is missing on this target in async context.');
}

export async function String_first$(self_, $c) {
throw new Error('Function String_first is missing on this target in async context.');
}

export async function String_last$(self_, $c) {
throw new Error('Function String_last is missing on this target in async context.');
}

export async function String_expectFirst$(self_, $c) {
return ff_core_Option.Option_else(ff_core_String.String_first(self_), (() => {
return ff_core_Core.panic_("expectFirst() on empty string")
}))
}

export async function String_expectLast$(self_, $c) {
return ff_core_Option.Option_else(ff_core_String.String_last(self_), (() => {
return ff_core_Core.panic_("expectFirst() on empty string")
}))
}

export async function String_contains$(self_, substring_, $c) {
throw new Error('Function String_contains is missing on this target in async context.');
}

export async function String_startsWith$(self_, prefix_, offset_ = 0, $c) {
throw new Error('Function String_startsWith is missing on this target in async context.');
}

export async function String_endsWith$(self_, prefix_, $c) {
throw new Error('Function String_endsWith is missing on this target in async context.');
}

export async function String_any$(self_, body_, $c) {

            for(let i = 0; i < self_.length; i++) {
                if(await body_(self_.charCodeAt(i), $c)) return true;
            }
            return false;
        
}

export async function String_all$(self_, body_, $c) {

            for(let i = 0; i < self_.length; i++) {
                if(!await body_(self_.charCodeAt(i), $c)) return false;
            }
            return true;
        
}

export async function String_toBuffer$(self_, $c) {
throw new Error('Function String_toBuffer is missing on this target in async context.');
}




