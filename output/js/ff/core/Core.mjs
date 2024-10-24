

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

// type GrabException
const GrabException$ = {GrabException: true};
export function GrabException() {
return GrabException$;
}



export function if_(condition_, body_) {
{
const _1 = condition_;
if(!_1) {
return ff_core_Option.None()
}
if(_1) {
return ff_core_Option.Some(body_())
}
}
}

export function while_(condition_, body_) {
{
const _1 = condition_();
if(!_1) {

return
}
if(_1) {
body_();
while(condition_()) {
body_()
}
return
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
if(_1.Some) {
const v_ = _1.value_;
return v_
}
if(_1.None) {
{
const body_r_ = body_;
body_ = body_r_
continue _tailcall
}
return
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

export function throw_(exception_, ff_core_Any_HasAnyTag$E) {
return ff_core_Core.throwAny_(ff_core_Any.toAny_(exception_, ff_core_Any_HasAnyTag$E))
}

export function throwAny_(exception_) {
throw Object.assign(new Error(), {ffException: exception_})
}

export function panic_(message_) {
throw new Error(message_)
}

export function same_(x_, y_) {
return x_ === y_
}

export async function if_$(condition_, body_, $task) {
{
const _1 = condition_;
if(!_1) {
return ff_core_Option.None()
}
if(_1) {
return ff_core_Option.Some((await body_($task)))
}
}
}

export async function while_$(condition_, body_, $task) {
{
const _1 = (await condition_($task));
if(!_1) {

return
}
if(_1) {
(await body_($task));
while((await condition_($task))) {
(await body_($task))
}
return
}
}
}

export async function doWhile_$(body_, $task) {
while((await body_($task))) {

}
}

export async function doUntil_$(body_, $task) {
_tailcall: for(;;) {
{
const _1 = (await body_($task));
if(_1.Some) {
const v_ = _1.value_;
return v_
}
if(_1.None) {
{
const body_r_ = body_;
body_ = body_r_
continue _tailcall
}
return
}
}
return
}
}

export async function do_$(body_, $task) {
return (await body_($task))
}

export async function try_$(body_, $task) {

        try {
            return {Success: true, value_: await body_($task)}
        } catch(e) {
            return {Failure: true, error_: e}
        }
    
}

export async function throw_$(exception_, ff_core_Any_HasAnyTag$E, $task) {
return ff_core_Core.throwAny_(ff_core_Any.toAny_(exception_, ff_core_Any_HasAnyTag$E))
}

export async function throwAny_$(exception_, $task) {
throw new Error('Function throwAny is missing on this target in async context.');
}

export async function panic_$(message_, $task) {
throw new Error('Function panic is missing on this target in async context.');
}

export async function same_$(x_, y_, $task) {
throw new Error('Function same is missing on this target in async context.');
}



export const ff_core_Any_HasAnyTag$ff_core_Core_GrabException = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/Core.GrabException" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/Core.GrabException" + "[") + "]"))
}
};


