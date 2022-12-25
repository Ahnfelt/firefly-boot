

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

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"





export function if_(condition_, body_) {
{
const _1 = condition_;
{
if(!_1) {
return ff_core_Option.None()
return
}
}
{
if(_1) {
return ff_core_Option.Some(body_())
return
}
}
}
}

export function while_(condition_, body_) {
{
const _1 = condition_();
{
if(!_1) {

return
}
}
{
if(_1) {
body_();
while(condition_()) {
body_()
}
return
}
}
}
}

export function doWhile_(body_) {
while(body_()) {

}
}

export function doUntil_(body_) {
_tailcall: for(;;) {
{
const _1 = body_();
{
if(_1.Some) {
const v_ = _1.value_;
return v_
return
}
}
{
if(_1.None) {
{
const body_r_ = body_;
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export function do_(body_) {
return body_()
}

export function try_(body_) {

        try {
            return {Success: true, value_: body_()}
        } catch(e) {
            return {Failure: true, error_: e}
        }
    
}

export function throw_(error_) {
throw error_
}

export function panic_(message_) {
throw new Error(message_)
}

export async function if_$(condition_, body_, $c) {
{
const _1 = condition_;
{
if(!_1) {
return ff_core_Option.None()
return
}
}
{
if(_1) {
return ff_core_Option.Some((await body_($c)))
return
}
}
}
}

export async function while_$(condition_, body_, $c) {
{
const _1 = (await condition_($c));
{
if(!_1) {

return
}
}
{
if(_1) {
(await body_($c));
while((await condition_($c))) {
(await body_($c))
}
return
}
}
}
}

export async function doWhile_$(body_, $c) {
while((await body_($c))) {

}
}

export async function doUntil_$(body_, $c) {
_tailcall: for(;;) {
{
const _1 = (await body_($c));
{
if(_1.Some) {
const v_ = _1.value_;
return v_
return
}
}
{
if(_1.None) {
{
const body_r_ = body_;
body_ = body_r_
continue _tailcall
}
return
}
}
}
return
}
}

export async function do_$(body_, $c) {
return (await body_($c))
}

export async function try_$(body_, $c) {

        try {
            return {Success: true, value_: await body_($c)}
        } catch(e) {
            return {Failure: true, error_: e}
        }
    
}

export async function throw_$(error_, $c) {
throw new Error('Function throw is missing on this target in async context.');
}

export async function panic_$(message_, $c) {
throw new Error('Function panic is missing on this target in async context.');
}






