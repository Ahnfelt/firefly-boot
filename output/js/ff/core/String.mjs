import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

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

            if(self_.array.length == 0) throw "expectInt on empty string"
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

export async function String_size$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_expect$(self_, index_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_replace$(self_, needle_, replacement_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_replaceFirst$(self_, needle_, replacement_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_reverse$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_dropWhile$(self_, p_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_takeWhile$(self_, p_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_slice$(self_, from_, until_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_split$(self_, char_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_dropFirst$(self_, count_ = 1, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_dropLast$(self_, count_ = 1, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_expectInt$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_first$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_last$(self_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_expectFirst$(self_, $signal) {
return ff_core_Option.Option_else(ff_core_String.String_first(self_), (($signal) => {
return ff_core_Core.panic_("expectFirst() on empty string")
}))
}

export async function String_expectLast$(self_, $signal) {
return ff_core_Option.Option_else(ff_core_String.String_last(self_), (($signal) => {
return ff_core_Core.panic_("expectFirst() on empty string")
}))
}

export async function String_contains$(self_, substring_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_startsWith$(self_, prefix_, offset_ = 0, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_endsWith$(self_, prefix_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_any$(self_, body_, $signal) {
return ff_core_Core.panic_("magic")
}

export async function String_all$(self_, body_, $signal) {
return ff_core_Core.panic_("magic")
}




