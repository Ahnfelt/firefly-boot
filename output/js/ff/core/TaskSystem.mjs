

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

// type TaskSystem


// type TaskScope








export function TaskScope_spawn(self_, task_) {
throw new Error('Function TaskScope_spawn is missing on this target in sync context.');
}

export async function TaskScope_spawn$(self_, task_, $c) {

            if(self_.closed) throw new Error("Spawn outside scope")
            async function spawn() {
                try {
                    await Promise.resolve(self_).then(controller => {
                        if(self_.signal.aborted) throw new Error("Cancelled", {cause: self_.reasonWorkaround})
                        task_(controller)
                    })
                } catch(e) {
                    if(!self_.signal.aborted) {
                        self_.reasonWorkaround = e
                        self_.abort()
                    }
                } finally {
                    self_.promises.delete(promise)
                }
            }
            let promise = spawn()
            self_.promises.add(promise)
        
}

export function TaskSystem_scope(self_, body_, shield_ = false) {
throw new Error('Function TaskSystem_scope is missing on this target in sync context.');
}

export function TaskSystem_channel(self_, capacity_ = 0) {
throw new Error('Function TaskSystem_channel is missing on this target in sync context.');
}

export function TaskSystem_sleep(self_, duration_) {
ff_core_Channel.ChannelAction_timeout(ff_core_Channel.readOr_(ff_core_TaskSystem.TaskSystem_channel(self_, 0), ((_) => {

})), duration_, (() => {

}))
}

export function TaskSystem_all(self_, tasks_) {
const channel_ = ff_core_TaskSystem.TaskSystem_channel(self_, 0);
return ff_core_TaskSystem.TaskSystem_scope(self_, ((scope_) => {
ff_core_List.List_each(ff_core_List.List_pairs(tasks_), ((_1) => {
{
const i_ = _1.first_;
const task_ = _1.second_;
ff_core_TaskSystem.TaskScope_spawn(scope_, (() => {
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
}), false)
}

export function TaskSystem_race(self_, tasks_) {
const successChannel_ = ff_core_TaskSystem.TaskSystem_channel(self_, 0);
const failureChannel_ = ff_core_TaskSystem.TaskSystem_channel(self_, 0);
let live_ = ff_core_List.List_size(tasks_);
return ff_core_TaskSystem.TaskSystem_scope(self_, ((scope_) => {
ff_core_List.List_each(tasks_, ((task_) => {
ff_core_TaskSystem.TaskScope_spawn(scope_, (() => {
ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
return ff_core_Channel.Channel_write(successChannel_, task_())
})), ((e_) => {
live_ -= 1;
if((live_ == 0)) {
ff_core_Channel.Channel_write(failureChannel_, e_)
}
}))
}))
}));
return ff_core_Channel.ChannelAction_wait(ff_core_Channel.ChannelAction_readOr(ff_core_Channel.readOr_(successChannel_, ((_w1) => {
return _w1
})), failureChannel_, ((error_) => {
return ff_core_Core.throw_(error_)
})))
}), false)
}

export async function TaskSystem_scope$(self_, body_, shield_ = false, $c) {

            if(!shield_ && $c.signal.aborted) throw new Error("Cancelled", {cause: $c.reasonWorkaround})
            let controller = new AbortController()
            controller.closed = false
            controller.promises = new Set()
            let abort = () => {
                controller.reasonWorkaround = $c.reasonWorkaround
                controller.abort()
            }
            let result = undefined
            let outcomes = []
            try {
                if(!shield_) $c.signal.addEventListener('abort', abort)
                result = await body_(controller, controller)
            } catch(e) {
                if(!controller.signal.aborted) {
                    controller.reasonWorkaround = e
                    controller.abort()
                }
                throw e
            } finally {
                if(!shield_) $c.signal.removeEventListener('abort', abort)
                if(!controller.signal.aborted) {
                    controller.reasonWorkaround = new Error("Cancelled")
                    controller.abort()
                }
                outcomes = await Promise.allSettled(controller.promises)
                controller.closed = true
            }
            for(let outcome of outcomes) if(outcome.status === "rejected") throw outcome.reason
            return result
        
}

export async function TaskSystem_channel$(self_, capacity_ = 0, $c) {
return {capacity: capacity_, buffer: [], readers: new Set(), writers: new Set()}
}

export async function TaskSystem_sleep$(self_, duration_, $c) {
(await ff_core_Channel.ChannelAction_timeout$((await ff_core_Channel.readOr_$((await ff_core_TaskSystem.TaskSystem_channel$(self_, 0, $c)), (async (_, $c) => {

}), $c)), duration_, (async ($c) => {

}), $c))
}

export async function TaskSystem_all$(self_, tasks_, $c) {
const channel_ = (await ff_core_TaskSystem.TaskSystem_channel$(self_, 0, $c));
return (await ff_core_TaskSystem.TaskSystem_scope$(self_, (async (scope_, $c) => {
(await ff_core_List.List_each$(ff_core_List.List_pairs(tasks_), (async (_1, $c) => {
{
const i_ = _1.first_;
const task_ = _1.second_;
(await ff_core_TaskSystem.TaskScope_spawn$(scope_, (async ($c) => {
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
}), false, $c))
}

export async function TaskSystem_race$(self_, tasks_, $c) {
const successChannel_ = (await ff_core_TaskSystem.TaskSystem_channel$(self_, 0, $c));
const failureChannel_ = (await ff_core_TaskSystem.TaskSystem_channel$(self_, 0, $c));
let live_ = ff_core_List.List_size(tasks_);
return (await ff_core_TaskSystem.TaskSystem_scope$(self_, (async (scope_, $c) => {
(await ff_core_List.List_each$(tasks_, (async (task_, $c) => {
(await ff_core_TaskSystem.TaskScope_spawn$(scope_, (async ($c) => {
(await ff_core_Try.Try_catchAny$((await ff_core_Core.try_$((async ($c) => {
return (await ff_core_Channel.Channel_write$(successChannel_, (await task_($c)), $c))
}), $c)), (async (e_, $c) => {
live_ -= 1;
if((live_ == 0)) {
(await ff_core_Channel.Channel_write$(failureChannel_, e_, $c))
}
}), $c))
}), $c))
}), $c));
return (await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.ChannelAction_readOr$((await ff_core_Channel.readOr_$(successChannel_, (async (_w1, $c) => {
return _w1
}), $c)), failureChannel_, (async (error_, $c) => {
return ff_core_Core.throw_(error_)
}), $c)), $c))
}), false, $c))
}




