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

import * as ff_core_Date from "../../ff/core/Date.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_Js from "../../ff/core/Js.mjs"

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

import * as ff_core_Queue from "../../ff/core/Queue.mjs"

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

// type Task
export function Task(controller_, subtasks_, promise_, started_) {
return {controller_, subtasks_, promise_, started_};
}

export function Task_spawn(self_, body_) {
ff_core_Task.Task_throwIfAborted(self_);
const task_ = ff_core_Task.Task((new AbortController()), (new Set()), (void 0), (performance.now() * 0.001));
self_.subtasks_.add(task_);
task_.promise_ = Promise.resolve(task_).then(async () => {
return ff_core_Try.Try_finally(ff_core_Try.Try_tryCatchAny(ff_core_Core.try_((() => {
return body_(task_, task_)
})), ((e_) => {
self_.controller_.abort();
return ff_core_Error.Error_rethrow(e_)
})), (() => {
ff_core_JsValue.JsValue_each(task_.subtasks_, ((subtask_) => {
subtask_.controller_.abort()
}));
Promise.allSettled(ff_core_List.List_map([...task_.subtasks_], ((subtask_) => {
return subtask_.promise_
})));
self_.subtasks_.delete(task_)
}))
});
return task_
}

export function Task_throwIfAborted(self_) {
const signal_ = self_.controller_.signal;
if(signal_.aborted) {
self_.controller_ = (new AbortController());
signal_.throwIfAborted()
}
}

export function Task_abort(self_) {
self_.controller_.abort()
}

export function Task_channel(self_, capacity_ = 0) {
return ff_core_Channel.Channel(capacity_, ff_core_Array.new_(), (new Set()), (new Set()))
}

export function Task_lock(self_) {
return ff_core_Lock.Lock((void 0), 0, ff_core_Queue.new_())
}

export function Task_elapsed(self_) {
const now_ = (performance.now() * 0.001);
return (now_ - self_.started_)
}

export function Task_time(self_, body_) {
const start_ = ff_core_Task.Task_elapsed(self_);
const result_ = body_();
const stop_ = ff_core_Task.Task_elapsed(self_);
const duration_ = (stop_ - start_);
return ff_core_Pair.Pair(result_, duration_)
}

export async function Task_spawn$(self_, body_, $task) {
(await ff_core_Task.Task_throwIfAborted$(self_, $task));
const task_ = ff_core_Task.Task((new AbortController()), (new Set()), (void 0), (performance.now() * 0.001));
self_.subtasks_.add(task_);
task_.promise_ = Promise.resolve(task_).then(async () => {
return ff_core_Try.Try_finally(ff_core_Try.Try_tryCatchAny(ff_core_Core.try_((async ($task) => {
return (await body_(task_, task_))
})), (async (e_, $task) => {
(await self_.controller_.abort());
return ff_core_Error.Error_rethrow(e_)
})), (async ($task) => {
ff_core_JsValue.JsValue_each(task_.subtasks_, ((subtask_) => {
subtask_.controller_.abort()
}));
(await Promise.allSettled(ff_core_List.List_map([...task_.subtasks_], ((subtask_) => {
return subtask_.promise_
}))));
self_.subtasks_.delete(task_)
}))
});
return task_
}

export async function Task_throwIfAborted$(self_, $task) {
const signal_ = self_.controller_.signal;
if(signal_.aborted) {
self_.controller_ = (new AbortController());
signal_.throwIfAborted()
}
}

export async function Task_abort$(self_, $task) {
self_.controller_.abort()
}

export async function Task_channel$(self_, capacity_ = 0, $task) {
return ff_core_Channel.Channel(capacity_, ff_core_Array.new_(), (new Set()), (new Set()))
}

export async function Task_lock$(self_, $task) {
return ff_core_Lock.Lock((void 0), 0, ff_core_Queue.new_())
}

export async function Task_elapsed$(self_, $task) {
const now_ = (performance.now() * 0.001);
return (now_ - self_.started_)
}

export async function Task_time$(self_, body_, $task) {
const start_ = (await ff_core_Task.Task_elapsed$(self_, $task));
const result_ = (await body_($task));
const stop_ = (await ff_core_Task.Task_elapsed$(self_, $task));
const duration_ = (stop_ - start_);
return ff_core_Pair.Pair(result_, duration_)
}

export function Task_sleep(self_, duration_) {
ff_core_Channel.ChannelAction_timeout(ff_core_Channel.readOr_(ff_core_Task.Task_channel(self_, 0), ((_) => {

})), duration_, (() => {

}))
}

export function Task_mapList(self_, list_, body_) {
return ff_core_Task.Task_all(self_, ff_core_List.List_map(list_, ((x_) => {
return (() => {
return body_(x_)
})
})))
}

export function Task_raceList(self_, list_, body_) {
return ff_core_Task.Task_race(self_, ff_core_List.List_map(list_, ((x_) => {
return (() => {
return body_(x_)
})
})))
}

export function Task_all(self_, tasks_) {
const successChannel_ = ff_core_Task.Task_channel(self_, 0);
const failureChannel_ = ff_core_Task.Task_channel(self_, 0);
ff_core_Task.Task_spawn(self_, ((t_) => {
const channel_ = ff_core_Task.Task_channel(t_, 0);
try {
for(let for_a = tasks_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const task_ = for_a[for_i];
ff_core_Task.Task_spawn(t_, ((_) => {
ff_core_Channel.Channel_write(channel_, ff_core_Pair.Pair(i_, task_()))
}))
};
const result_ = ff_core_List.List_map(ff_core_List.List_sortBy(ff_core_List.List_map(tasks_, ((_) => {
return ff_core_Channel.Channel_read(channel_)
})), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_w1) => {
return _w1.second_
}));
ff_core_Channel.Channel_write(successChannel_, result_)
} catch(error_) {
ff_core_Channel.Channel_write(failureChannel_, error_);
ff_core_Task.Task_abort(t_)
}
}));
return ff_core_Channel.ChannelAction_wait(ff_core_Channel.ChannelAction_readOr(ff_core_Channel.readOr_(successChannel_, ((_w1) => {
return _w1
})), failureChannel_, ((_w1) => {
return ff_core_Error.Error_rethrow(_w1)
})))
}

export function Task_race(self_, tasks_) {
const successChannel_ = ff_core_Task.Task_channel(self_, 0);
const failureChannel_ = ff_core_Task.Task_channel(self_, 0);
let live_ = tasks_.length;
const started_ = ff_core_List.List_map(tasks_, ((task_) => {
return ff_core_Task.Task_spawn(self_, ((_) => {
try {
ff_core_Channel.Channel_write(successChannel_, task_())
} catch(e_) {
live_ -= 1;
if((live_ === 0)) {
ff_core_Channel.Channel_write(failureChannel_, e_)
}
}
}))
}));
try {
return ff_core_Channel.ChannelAction_wait(ff_core_Channel.ChannelAction_readOr(ff_core_Channel.readOr_(successChannel_, ((_w1) => {
return _w1
})), failureChannel_, ((_w1) => {
return ff_core_Error.Error_rethrow(_w1)
})))
} finally {
for(let for_a = started_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_core_Task.Task_abort(_w1)
}
}
}

export async function Task_sleep$(self_, duration_, $task) {
(await ff_core_Channel.ChannelAction_timeout$((await ff_core_Channel.readOr_$((await ff_core_Task.Task_channel$(self_, 0, $task)), (async (_, $task) => {

}), $task)), duration_, (async ($task) => {

}), $task))
}

export async function Task_mapList$(self_, list_, body_, $task) {
return (await ff_core_Task.Task_all$(self_, ff_core_List.List_map(list_, ((x_) => {
return (async ($task) => {
return (await body_(x_, $task))
})
})), $task))
}

export async function Task_raceList$(self_, list_, body_, $task) {
return (await ff_core_Task.Task_race$(self_, ff_core_List.List_map(list_, ((x_) => {
return (async ($task) => {
return (await body_(x_, $task))
})
})), $task))
}

export async function Task_all$(self_, tasks_, $task) {
const successChannel_ = (await ff_core_Task.Task_channel$(self_, 0, $task));
const failureChannel_ = (await ff_core_Task.Task_channel$(self_, 0, $task));
(await ff_core_Task.Task_spawn$(self_, (async (t_, $task) => {
const channel_ = (await ff_core_Task.Task_channel$(t_, 0, $task));
try {
for(let for_a = tasks_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const task_ = for_a[for_i];
(await ff_core_Task.Task_spawn$(t_, (async (_, $task) => {
(await ff_core_Channel.Channel_write$(channel_, ff_core_Pair.Pair(i_, (await task_($task))), $task))
}), $task))
};
const result_ = ff_core_List.List_map(ff_core_List.List_sortBy((await ff_core_List.List_map$(tasks_, (async (_, $task) => {
return (await ff_core_Channel.Channel_read$(channel_, $task))
}), $task)), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int), ((_w1) => {
return _w1.second_
}));
(await ff_core_Channel.Channel_write$(successChannel_, result_, $task))
} catch(error_) {
(await ff_core_Channel.Channel_write$(failureChannel_, error_, $task));
(await ff_core_Task.Task_abort$(t_, $task))
}
}), $task));
return (await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.ChannelAction_readOr$((await ff_core_Channel.readOr_$(successChannel_, (async (_w1, $task) => {
return _w1
}), $task)), failureChannel_, (async (_w1, $task) => {
return ff_core_Error.Error_rethrow(_w1)
}), $task)), $task))
}

export async function Task_race$(self_, tasks_, $task) {
const successChannel_ = (await ff_core_Task.Task_channel$(self_, 0, $task));
const failureChannel_ = (await ff_core_Task.Task_channel$(self_, 0, $task));
let live_ = tasks_.length;
const started_ = (await ff_core_List.List_map$(tasks_, (async (task_, $task) => {
return (await ff_core_Task.Task_spawn$(self_, (async (_, $task) => {
try {
(await ff_core_Channel.Channel_write$(successChannel_, (await task_($task)), $task))
} catch(e_) {
live_ -= 1;
if((live_ === 0)) {
(await ff_core_Channel.Channel_write$(failureChannel_, e_, $task))
}
}
}), $task))
}), $task));
try {
return (await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.ChannelAction_readOr$((await ff_core_Channel.readOr_$(successChannel_, (async (_w1, $task) => {
return _w1
}), $task)), failureChannel_, (async (_w1, $task) => {
return ff_core_Error.Error_rethrow(_w1)
}), $task)), $task))
} finally {
for(let for_a = started_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
(await ff_core_Task.Task_abort$(_w1, $task))
}
}
}


//# sourceMappingURL=Task.mjs.map