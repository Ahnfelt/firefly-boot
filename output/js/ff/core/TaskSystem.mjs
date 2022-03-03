import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

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

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type TaskSystem


// type Task


// type Either
export function Left(value_) {
return {Left: true, value_};
}
export function Right(value_) {
return {Right: true, value_};
}







export function TaskSystem_start(self_, taskBody_) {
return ff_core_Core.panic_("magic")
}

export function TaskSystem_channel(self_, capacity_ = 0) {
return ff_core_Core.panic_("magic")
}

export function TaskSystem_race(self_, tasks_) {
const channel_ = ff_core_TaskSystem.TaskSystem_channel(self_, 0);
const taskReferences_ = ff_core_List.List_map(tasks_, ((task_) => {
return ff_core_TaskSystem.TaskSystem_start(self_, (() => {
ff_core_Channel.Channel_write(channel_, task_())
}))
}));
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return ff_core_Channel.Channel_read(channel_)
})), (() => {
ff_core_List.List_each(taskReferences_, ((_w1) => {
ff_core_TaskSystem.Task_cancel(_w1)
}))
})))
}

export function TaskSystem_all(self_, tasks_) {
const channel_ = ff_core_TaskSystem.TaskSystem_channel(self_, 0);
const taskReferences_ = ff_core_List.List_map(ff_core_List.List_pairs(tasks_), ((_1) => {
{
const i_ = _1.first_;
const task_ = _1.second_;
return ff_core_TaskSystem.TaskSystem_start(self_, (() => {
const result_ = ff_core_Try.Try_expect(ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
return ff_core_TaskSystem.Right(ff_core_Pair.Pair(i_, task_()))
})), ((e_) => {
return ff_core_TaskSystem.Left(e_)
})));
ff_core_Channel.Channel_write(channel_, result_)
}))
return
}
}));
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
let error_ = ff_core_Option.None();
const pairs_ = ff_core_List.List_collect(taskReferences_, ((_) => {
{
const _1 = ff_core_Channel.Channel_read(channel_);
{
if(_1.Right) {
const i_ = _1.value_.first_;
const r_ = _1.value_.second_;
return ff_core_Option.Some(ff_core_Pair.Pair(i_, r_))
return
}
}
{
if(_1.Left) {
const e_ = _1.value_;
if((error_ == ff_core_Option.None())) {
ff_core_List.List_each(taskReferences_, ((_w1) => {
ff_core_TaskSystem.Task_cancel(_w1)
}));
error_ = ff_core_Option.Some(e_)
};
return ff_core_Option.None()
return
}
}
}
}));
ff_core_Option.Option_each(error_, ((error_) => {
ff_core_Core.throw_(error_)
}));
return ff_core_List.List_map(ff_core_List.List_sortBy(pairs_, ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_w1) => {
return _w1.second_
}))
})), (() => {
ff_core_List.List_each(taskReferences_, ((_w1) => {
ff_core_TaskSystem.Task_cancel(_w1)
}))
})))
}

export function TaskSystem_sleep(self_, duration_) {
ff_core_Core.panic_("magic")
}

export async function TaskSystem_start$(self_, taskBody_, $controller) {

            if($controller.signal.aborted) throw new Error("Cancelled", {cause: $controller.reasonWorkaround})
            let controller = new AbortController()
            controller.promises = new Set()
            async function spawn() {
                let abort = () => {
                    controller.reasonWorkaround = $controller.reasonWorkaround
                    controller.abort()
                }
                $controller.signal.addEventListener('abort', abort)
                let promise = Promise.resolve(controller).then(taskBody_)
                $controller.promises.add(promise)
                let outcomes = []
                try {
                    await promise
                } finally {
                    $controller.signal.removeEventListener('abort', abort)
                    outcomes = await Promise.allSettled(controller.promises)
                    $controller.promises.delete(promise)
                }
                for(let outcome of outcomes) if(outcome.status === "rejected") throw status.reason
                // Who will ever benefit from this throw?
                // What difference does it make if a spawned task waits for its subtasks?
            }
            spawn()
            return controller
        
}

export async function TaskSystem_channel$(self_, capacity_ = 0, $controller) {
return {capacity: capacity_, buffer: [], readers: new Set(), writers: new Set()}
}

export async function TaskSystem_race$(self_, tasks_, $controller) {
const channel_ = (await ff_core_TaskSystem.TaskSystem_channel$(self_, 0, $controller));
const taskReferences_ = (await ff_core_List.List_map$(tasks_, (async (task_, $controller) => {
return (await ff_core_TaskSystem.TaskSystem_start$(self_, (async ($controller) => {
(await ff_core_Channel.Channel_write$(channel_, (await task_($controller)), $controller))
}), $controller))
}), $controller));
return ff_core_Try.Try_expect(ff_core_Try.Try_finally((await ff_core_Core.try_$((async ($controller) => {
return (await ff_core_Channel.Channel_read$(channel_, $controller))
}), $controller)), (() => {
ff_core_List.List_each(taskReferences_, ((_w1) => {
ff_core_TaskSystem.Task_cancel(_w1)
}))
})))
}

export async function TaskSystem_all$(self_, tasks_, $controller) {
const channel_ = (await ff_core_TaskSystem.TaskSystem_channel$(self_, 0, $controller));
const taskReferences_ = (await ff_core_List.List_map$(ff_core_List.List_pairs(tasks_), (async (_1, $controller) => {
{
const i_ = _1.first_;
const task_ = _1.second_;
return (await ff_core_TaskSystem.TaskSystem_start$(self_, (async ($controller) => {
const result_ = ff_core_Try.Try_expect(ff_core_Try.Try_catchAny((await ff_core_Core.try_$((async ($controller) => {
return ff_core_TaskSystem.Right(ff_core_Pair.Pair(i_, (await task_($controller))))
}), $controller)), ((e_) => {
return ff_core_TaskSystem.Left(e_)
})));
(await ff_core_Channel.Channel_write$(channel_, result_, $controller))
}), $controller))
return
}
}), $controller));
return ff_core_Try.Try_expect(ff_core_Try.Try_finally((await ff_core_Core.try_$((async ($controller) => {
let error_ = ff_core_Option.None();
const pairs_ = (await ff_core_List.List_collect$(taskReferences_, (async (_, $controller) => {
{
const _1 = (await ff_core_Channel.Channel_read$(channel_, $controller));
{
if(_1.Right) {
const i_ = _1.value_.first_;
const r_ = _1.value_.second_;
return ff_core_Option.Some(ff_core_Pair.Pair(i_, r_))
return
}
}
{
if(_1.Left) {
const e_ = _1.value_;
if((error_ == ff_core_Option.None())) {
ff_core_List.List_each(taskReferences_, ((_w1) => {
ff_core_TaskSystem.Task_cancel(_w1)
}));
error_ = ff_core_Option.Some(e_)
};
return ff_core_Option.None()
return
}
}
}
}), $controller));
ff_core_Option.Option_each(error_, ((error_) => {
ff_core_Core.throw_(error_)
}));
return ff_core_List.List_map(ff_core_List.List_sortBy(pairs_, ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_w1) => {
return _w1.second_
}))
}), $controller)), (() => {
ff_core_List.List_each(taskReferences_, ((_w1) => {
ff_core_TaskSystem.Task_cancel(_w1)
}))
})))
}

export async function TaskSystem_sleep$(self_, duration_, $controller) {

            if($controller.signal.aborted) throw new Error("Cancelled", {cause: $controller.reasonWorkaround})
            await new Promise((resolve, reject) => {
                let abort = () => {
                    $controller.signal.removeEventListener('abort', abort)
                    if(timeoutId != null) clearTimeout(timeoutId)
                    reject(new Error("Cancelled", {cause: $controller.reasonWorkaround}))
                }
                $controller.signal.addEventListener('abort', abort)
                let complete = () => {
                    $controller.signal.removeEventListener('abort', abort)
                    resolve()
                }
                let timeoutId = setTimeout(complete, duration_ * 1000);
            })
        
}

export function Task_cancel(self_) {

            self_.controller.reasonWorkaround = new Error("Cancellation")
            self_.abort()
        
}

export async function Task_cancel$(self_, $controller) {
ff_core_Core.panic_("magic")
}




