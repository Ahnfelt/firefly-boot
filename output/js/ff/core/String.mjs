

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

// type String








export function String_size(self_) {
return self_.length
}

export function String_grab(self_, index_) {

            if(index_ < 0 || index_ >= self_.length) {
                ff_core_Try.internalThrowGrabException_()
            }
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

export function String_repeat(self_, count_) {
return self_.repeat(count_)
}

export function String_trim(self_) {
return self_.trim()
}

export function String_trimStart(self_) {
return self_.trimStart()
}

export function String_trimEnd(self_) {
return self_.trimEnd()
}

export function String_lower(self_) {
return self_.toLowerCase()
}

export function String_upper(self_) {
return self_.toUpperCase()
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

export function String_splitFirst(self_, char_) {

            const array = self_.split(String.fromCharCode(char_), 2)
            return array.length === 2
                ? ff_core_Option.Some(ff_core_Pair.Pair(array[0], array[1]))
                : ff_core_Option.None()
        
}

export function String_lines(self_) {

            return ff_core_Array.Array_toList(self_.split(
                new RegExp("[" + String.fromCharCode(13) + "]?[" + String.fromCharCode(10) + "]", "g")
            ))
        
}

export function String_dropFirst(self_, count_ = 1) {
return self_.slice(count_)
}

export function String_dropLast(self_, count_ = 1) {
return self_.slice(0, self_.length - count_)
}

export function String_getInt(self_) {

            if(self_.length == 0) {
                return ff_core_Option.None()
            }
            for(let i = 0; i < self_.length; i++) {
                const c = self_.codePointAt(i)
                if(c < 48 || c > 57) ff_core_Option.None()
            }
            return ff_core_Option.Some(parseInt(self_, 10));
        
}

export function String_grabInt(self_) {

            if(self_.length == 0) {
                ff_core_Try.internalThrowGrabException_()
            }
            for(let i = 0; i < self_.length; i++) {
                const c = self_.codePointAt(i)
                if(c < 48 || c > 57) ff_core_Try.internalThrowGrabException_()
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

export function String_grabFirst(self_) {
return ff_core_Option.Option_else(ff_core_String.String_first(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
}))
}

export function String_grabLast(self_) {
return ff_core_Option.Option_else(ff_core_String.String_last(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
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

export function String_removeFirst(self_, prefix_) {
if(ff_core_String.String_startsWith(self_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_String.String_dropFirst(self_, ff_core_String.String_size(prefix_)))
} else {
return ff_core_Option.None()
}
}

export function String_removeLast(self_, suffix_) {
if(ff_core_String.String_endsWith(self_, suffix_)) {
return ff_core_Option.Some(ff_core_String.String_dropLast(self_, ff_core_String.String_size(suffix_)))
} else {
return ff_core_Option.None()
}
}

export function String_padStart(self_, length_, padding_ = " ") {

            return self_.padStart(length_, padding_);
        
}

export function String_padEnd(self_, length_, padding_ = " ") {

            return self_.padEnd(length_, padding_);
        
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

            const encoded = new TextEncoder().encode(self_)
            return new DataView(encoded.buffer, encoded.byteOffset, encoded.byteLength)
        
}

export async function String_size$(self_, $task) {
throw new Error('Function String_size is missing on this target in async context.');
}

export async function String_grab$(self_, index_, $task) {
throw new Error('Function String_grab is missing on this target in async context.');
}

export async function String_replace$(self_, needle_, replacement_, $task) {
throw new Error('Function String_replace is missing on this target in async context.');
}

export async function String_replaceFirst$(self_, needle_, replacement_, $task) {
throw new Error('Function String_replaceFirst is missing on this target in async context.');
}

export async function String_reverse$(self_, $task) {
throw new Error('Function String_reverse is missing on this target in async context.');
}

export async function String_repeat$(self_, count_, $task) {
throw new Error('Function String_repeat is missing on this target in async context.');
}

export async function String_trim$(self_, $task) {
throw new Error('Function String_trim is missing on this target in async context.');
}

export async function String_trimStart$(self_, $task) {
throw new Error('Function String_trimStart is missing on this target in async context.');
}

export async function String_trimEnd$(self_, $task) {
throw new Error('Function String_trimEnd is missing on this target in async context.');
}

export async function String_lower$(self_, $task) {
throw new Error('Function String_lower is missing on this target in async context.');
}

export async function String_upper$(self_, $task) {
throw new Error('Function String_upper is missing on this target in async context.');
}

export async function String_dropWhile$(self_, p_, $task) {

            let i = 0
            for(; i < self_.length && await p_(self_.codePointAt(i), $task); i++);
            return self_.slice(i)
        
}

export async function String_takeWhile$(self_, p_, $task) {

            let i = 0
            for(; i < self_.length && await p_(self_.codePointAt(i), $task); i++);
            return self_.slice(0, i)
        
}

export async function String_slice$(self_, from_, until_, $task) {
throw new Error('Function String_slice is missing on this target in async context.');
}

export async function String_split$(self_, char_, $task) {
throw new Error('Function String_split is missing on this target in async context.');
}

export async function String_splitFirst$(self_, char_, $task) {
throw new Error('Function String_splitFirst is missing on this target in async context.');
}

export async function String_lines$(self_, $task) {
throw new Error('Function String_lines is missing on this target in async context.');
}

export async function String_dropFirst$(self_, count_ = 1, $task) {
throw new Error('Function String_dropFirst is missing on this target in async context.');
}

export async function String_dropLast$(self_, count_ = 1, $task) {
throw new Error('Function String_dropLast is missing on this target in async context.');
}

export async function String_getInt$(self_, $task) {
throw new Error('Function String_getInt is missing on this target in async context.');
}

export async function String_grabInt$(self_, $task) {
throw new Error('Function String_grabInt is missing on this target in async context.');
}

export async function String_first$(self_, $task) {
throw new Error('Function String_first is missing on this target in async context.');
}

export async function String_last$(self_, $task) {
throw new Error('Function String_last is missing on this target in async context.');
}

export async function String_grabFirst$(self_, $task) {
return ff_core_Option.Option_else(ff_core_String.String_first(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
}))
}

export async function String_grabLast$(self_, $task) {
return ff_core_Option.Option_else(ff_core_String.String_last(self_), (() => {
return ff_core_Try.internalThrowGrabException_()
}))
}

export async function String_contains$(self_, substring_, $task) {
throw new Error('Function String_contains is missing on this target in async context.');
}

export async function String_startsWith$(self_, prefix_, offset_ = 0, $task) {
throw new Error('Function String_startsWith is missing on this target in async context.');
}

export async function String_endsWith$(self_, prefix_, $task) {
throw new Error('Function String_endsWith is missing on this target in async context.');
}

export async function String_removeFirst$(self_, prefix_, $task) {
if(ff_core_String.String_startsWith(self_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_String.String_dropFirst(self_, ff_core_String.String_size(prefix_)))
} else {
return ff_core_Option.None()
}
}

export async function String_removeLast$(self_, suffix_, $task) {
if(ff_core_String.String_endsWith(self_, suffix_)) {
return ff_core_Option.Some(ff_core_String.String_dropLast(self_, ff_core_String.String_size(suffix_)))
} else {
return ff_core_Option.None()
}
}

export async function String_padStart$(self_, length_, padding_ = " ", $task) {
throw new Error('Function String_padStart is missing on this target in async context.');
}

export async function String_padEnd$(self_, length_, padding_ = " ", $task) {
throw new Error('Function String_padEnd is missing on this target in async context.');
}

export async function String_any$(self_, body_, $task) {

            for(let i = 0; i < self_.length; i++) {
                if(await body_(self_.charCodeAt(i), $task)) return true;
            }
            return false;
        
}

export async function String_all$(self_, body_, $task) {

            for(let i = 0; i < self_.length; i++) {
                if(!await body_(self_.charCodeAt(i), $task)) return false;
            }
            return true;
        
}

export async function String_toBuffer$(self_, $task) {
throw new Error('Function String_toBuffer is missing on this target in async context.');
}

export const ff_core_Any_HasAnyTag$ff_core_String_String = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/String.String" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/String.String" + "[") + "]"))
}
};


