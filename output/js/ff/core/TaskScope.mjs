

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

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

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_TaskScope from "../../ff/core/TaskScope.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type TaskScope








export function TaskScope_withSubscope(self_, body_, shielded_ = false, rethrow_ = true) {
const subscope_ = ff_core_TaskScope.TaskScope_subscope(self_, shielded_);
try {
return body_(subscope_)
} finally {
ff_core_TaskScope.TaskScope_close(subscope_, rethrow_)
}
}

export function TaskScope_subscope(self_, shielded_ = false) {
throw new Error('Function TaskScope_subscope is missing on this target in sync context.');
}

export function TaskScope_close(self_, rethrow_ = true) {
throw new Error('Function TaskScope_close is missing on this target in sync context.');
}

export function TaskScope_spawn(self_, task_) {
throw new Error('Function TaskScope_spawn is missing on this target in sync context.');
}

export function TaskScope_channel(self_, capacity_ = 0) {
throw new Error('Function TaskScope_channel is missing on this target in sync context.');
}

export function TaskScope_sleep(self_, duration_) {
ff_core_Channel.ChannelAction_timeout(ff_core_Channel.readOr_(ff_core_TaskScope.TaskScope_channel(self_, 0), ((_) => {

})), duration_, (() => {

}))
}

export function TaskScope_all(self_, tasks_) {
const channel_ = ff_core_TaskScope.TaskScope_channel(self_, 0);
return ff_core_TaskScope.TaskScope_withSubscope(self_, ((scope_) => {
ff_core_List.List_each(ff_core_List.List_pairs(tasks_), ((_1) => {
{
const i_ = _1.first_;
const task_ = _1.second_;
ff_core_TaskScope.TaskScope_spawn(scope_, (() => {
ff_core_Channel.Channel_write(channel_, ff_core_Pair.Pair(i_, task_()))
}))
return
}
}));
return ff_core_List.List_map(ff_core_List.List_sortBy(ff_core_List.List_map(tasks_, ((_) => {
return ff_core_Channel.Channel_read(channel_)
})), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_w1) => {
return _w1.second_
}))
}), false, true)
}

export function TaskScope_race(self_, tasks_) {
const successChannel_ = ff_core_TaskScope.TaskScope_channel(self_, 0);
const failureChannel_ = ff_core_TaskScope.TaskScope_channel(self_, 0);
let live_ = ff_core_List.List_size(tasks_);
return ff_core_TaskScope.TaskScope_withSubscope(self_, ((scope_) => {
ff_core_List.List_each(tasks_, ((task_) => {
ff_core_TaskScope.TaskScope_spawn(scope_, (() => {
ff_core_Try.Try_grab(ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
return ff_core_Channel.Channel_write(successChannel_, task_())
})), ((e_) => {
live_ -= 1;
if((live_ === 0)) {
ff_core_Channel.Channel_write(failureChannel_, e_)
}
})))
}))
}));
return ff_core_Channel.ChannelAction_wait(ff_core_Channel.ChannelAction_readOr(ff_core_Channel.readOr_(successChannel_, ((_w1) => {
return _w1
})), failureChannel_, ((_w1) => {
return ff_core_Error.Error_rethrow(_w1)
})))
}), false, true)
}

export async function TaskScope_withSubscope$(self_, body_, shielded_ = false, rethrow_ = true, $c) {
const subscope_ = (await ff_core_TaskScope.TaskScope_subscope$(self_, shielded_, $c));
try {
return (await body_(subscope_, $c))
} finally {
(await ff_core_TaskScope.TaskScope_close$(subscope_, rethrow_, $c))
}
}

export async function TaskScope_subscope$(self_, shielded_ = false, $c) {

            if(!shielded_ && $c.signal.aborted) throw new Error("Cancelled", {cause: $c.ffReason})
            let scope = new AbortController()
            scope.ffClosed = false
            scope.ffParent = $c
            scope.ffPromises = new Set()
            scope.ffShielded = shielded_
            scope.ffAbort = () => {
                scope.ffReason = scope.ffParent.ffReason
                scope.abort()
            }
            if(!shielded_) scope.ffParent.signal.addEventListener('abort', scope.ffAbort)
            return scope
        
}

export async function TaskScope_close$(self_, rethrow_ = true, $c) {

            if(!self_.ffShielded) self_.ffParent.signal.removeEventListener('abort', self_.ffAbort)
            if(!self_.signal.aborted) {
                self_.ffReason = new Error("Cancelled")
                self_.abort()
            }
            let outcomes = await Promise.allSettled(self_.ffPromises)
            self_.ffClosed = true
            if(rethrow_) for(let outcome of outcomes) if(outcome.status === "rejected") throw outcome.reason
        
}

export async function TaskScope_spawn$(self_, task_, $c) {

            if(self_.ffClosed) throw new Error("Spawn outside scope")
            async function spawn() {
                try {
                    await Promise.resolve(self_).then(controller => {
                        if(self_.signal.aborted) throw new Error("Cancelled", {cause: self_.ffReason})
                        task_(controller)
                    })
                } catch(e) {
                    if(!self_.signal.aborted) {
                        self_.ffReason = e
                        self_.abort()
                    }
                } finally {
                    self_.ffPromises.delete(promise)
                }
            }
            let promise = spawn()
            self_.ffPromises.add(promise)
        
}

export async function TaskScope_channel$(self_, capacity_ = 0, $c) {

            return {scope: self_, capacity: capacity_, buffer: [], readers: new Set(), writers: new Set()}
        
}

export async function TaskScope_sleep$(self_, duration_, $c) {
(await ff_core_Channel.ChannelAction_timeout$((await ff_core_Channel.readOr_$((await ff_core_TaskScope.TaskScope_channel$(self_, 0, $c)), (async (_, $c) => {

}), $c)), duration_, (async ($c) => {

}), $c))
}

export async function TaskScope_all$(self_, tasks_, $c) {
const channel_ = (await ff_core_TaskScope.TaskScope_channel$(self_, 0, $c));
return (await ff_core_TaskScope.TaskScope_withSubscope$(self_, (async (scope_, $c) => {
(await ff_core_List.List_each$(ff_core_List.List_pairs(tasks_), (async (_1, $c) => {
{
const i_ = _1.first_;
const task_ = _1.second_;
(await ff_core_TaskScope.TaskScope_spawn$(scope_, (async ($c) => {
(await ff_core_Channel.Channel_write$(channel_, ff_core_Pair.Pair(i_, (await task_($c))), $c))
}), $c))
return
}
}), $c));
return ff_core_List.List_map(ff_core_List.List_sortBy((await ff_core_List.List_map$(tasks_, (async (_, $c) => {
return (await ff_core_Channel.Channel_read$(channel_, $c))
}), $c)), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_w1) => {
return _w1.second_
}))
}), false, true, $c))
}

export async function TaskScope_race$(self_, tasks_, $c) {
const successChannel_ = (await ff_core_TaskScope.TaskScope_channel$(self_, 0, $c));
const failureChannel_ = (await ff_core_TaskScope.TaskScope_channel$(self_, 0, $c));
let live_ = ff_core_List.List_size(tasks_);
return (await ff_core_TaskScope.TaskScope_withSubscope$(self_, (async (scope_, $c) => {
(await ff_core_List.List_each$(tasks_, (async (task_, $c) => {
(await ff_core_TaskScope.TaskScope_spawn$(scope_, (async ($c) => {
ff_core_Try.Try_grab((await ff_core_Try.Try_catchAny$((await ff_core_Core.try_$((async ($c) => {
return (await ff_core_Channel.Channel_write$(successChannel_, (await task_($c)), $c))
}), $c)), (async (e_, $c) => {
live_ -= 1;
if((live_ === 0)) {
(await ff_core_Channel.Channel_write$(failureChannel_, e_, $c))
}
}), $c)))
}), $c))
}), $c));
return (await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.ChannelAction_readOr$((await ff_core_Channel.readOr_$(successChannel_, (async (_w1, $c) => {
return _w1
}), $c)), failureChannel_, (async (_w1, $c) => {
return ff_core_Error.Error_rethrow(_w1)
}), $c)), $c))
}), false, true, $c))
}




