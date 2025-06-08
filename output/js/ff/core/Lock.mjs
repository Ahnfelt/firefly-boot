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

// type Lock
export function Lock(owner_, level_, queue_) {
return {owner_, level_, queue_};
}

// type LockCondition
export function LockCondition(lock_, queue_) {
return {lock_, queue_};
}

export function Lock_condition(self_) {
return ff_core_Lock.LockCondition(self_, ff_core_Queue.new_())
}

export function Lock_acquire(self_) {
if(((self_.level_ === 0) || (self_.owner_ === $task))) {
self_.owner_ = $task;
self_.level_ += 1
} else {
ff_core_Js.awaitCancellablePromise_(((resolve_, reject_, onSettle_) => {
const key_ = ff_core_Queue.Queue_push(self_.queue_, ff_core_Pair.Pair($task, resolve_));
onSettle_(((_) => {
ff_core_Queue.Queue_remove(self_.queue_, key_)
}))
}))
}
}

export function Lock_release(self_) {
if((self_.owner_ !== $task)) {
ff_core_Core.throw_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
} else if((self_.level_ > 1)) {
self_.level_ -= 1
} else {
self_.owner_ = (void 0);
self_.level_ = 0;
if((!ff_core_Queue.Queue_isEmpty(self_.queue_))) {
const pending_ = ff_core_Option.Option_grab(ff_core_Queue.Queue_pop(self_.queue_));
self_.owner_ = pending_.first_;
self_.level_ = 1;
pending_.second_((void 0))
}
}
}

export function Lock_do(self_, body_) {
ff_core_Lock.Lock_acquire(self_);
try {
return body_()
} finally {
ff_core_Lock.Lock_release(self_)
}
}

export async function Lock_condition$(self_, $task) {
return ff_core_Lock.LockCondition(self_, ff_core_Queue.new_())
}

export async function Lock_acquire$(self_, $task) {
if(((self_.level_ === 0) || (self_.owner_ === $task))) {
self_.owner_ = $task;
self_.level_ += 1
} else {
(await ff_core_Js.awaitCancellablePromise_$((async (resolve_, reject_, onSettle_, $task) => {
const key_ = ff_core_Queue.Queue_push(self_.queue_, ff_core_Pair.Pair($task, resolve_));
(await onSettle_((async (_, $task) => {
ff_core_Queue.Queue_remove(self_.queue_, key_)
}), $task))
}), $task))
}
}

export async function Lock_release$(self_, $task) {
if((self_.owner_ !== $task)) {
ff_core_Core.throw_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
} else if((self_.level_ > 1)) {
self_.level_ -= 1
} else {
self_.owner_ = (void 0);
self_.level_ = 0;
if((!ff_core_Queue.Queue_isEmpty(self_.queue_))) {
const pending_ = ff_core_Option.Option_grab(ff_core_Queue.Queue_pop(self_.queue_));
self_.owner_ = pending_.first_;
self_.level_ = 1;
(await pending_.second_((void 0), $task))
}
}
}

export async function Lock_do$(self_, body_, $task) {
(await ff_core_Lock.Lock_acquire$(self_, $task));
try {
return (await body_($task))
} finally {
(await ff_core_Lock.Lock_release$(self_, $task))
}
}

export function LockCondition_sleep(self_) {
if((self_.lock_.owner_ !== $task)) {
ff_core_Core.throw_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
;
const level_ = self_.lock_.level_;
self_.lock_.level_ = 1;
ff_core_Lock.Lock_release(self_.lock_);
try {
ff_core_Js.awaitCancellablePromise_(((resolve_, reject_, onSettle_) => {
const key_ = ff_core_Queue.Queue_push(self_.queue_, resolve_);
onSettle_(((_) => {
ff_core_Queue.Queue_remove(self_.queue_, key_)
}))
}))
} finally {
let error_ = (void 0);
let acquired_ = false;
while((!acquired_)) {
try {
ff_core_Lock.Lock_acquire(self_.lock_);
self_.lock_.level_ = level_;
acquired_ = true
} catch(e_) {
error_ = e_
}
};
if((!ff_core_JsValue.JsValue_isUndefined(error_))) {
throw error_
}
}
}

export function LockCondition_sleepUntil(self_, body_) {
_tailcall: for(;;) {
{
const _1 = body_();
if(_1.Some) {
const value_ = _1.value_;
return value_
}
{
ff_core_Lock.LockCondition_sleep(self_);
{
const self_r_ = self_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
return
}
}

export function LockCondition_wakeOne(self_) {
{
const if_o = ff_core_Queue.Queue_pop(self_.queue_)
if(if_o.Some) {
const resolve_ = if_o.value_;
resolve_((void 0))
}
}
}

export function LockCondition_wakeAll(self_) {
ff_core_Queue.Queue_each(self_.queue_, ((_, resolve_) => {
resolve_((void 0))
}));
ff_core_Queue.Queue_clear(self_.queue_)
}

export async function LockCondition_sleep$(self_, $task) {
if((self_.lock_.owner_ !== $task)) {
ff_core_Core.throw_(ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
};
ff_core_Task.Task_throwIfAborted($task);
const level_ = self_.lock_.level_;
self_.lock_.level_ = 1;
(await ff_core_Lock.Lock_release$(self_.lock_, $task));
try {
(await ff_core_Js.awaitCancellablePromise_$((async (resolve_, reject_, onSettle_, $task) => {
const key_ = ff_core_Queue.Queue_push(self_.queue_, resolve_);
(await onSettle_((async (_, $task) => {
ff_core_Queue.Queue_remove(self_.queue_, key_)
}), $task))
}), $task))
} finally {
let error_ = (void 0);
let acquired_ = false;
while((!acquired_)) {
try {
(await ff_core_Lock.Lock_acquire$(self_.lock_, $task));
self_.lock_.level_ = level_;
acquired_ = true
} catch(e_) {
error_ = e_
}
};
if((!ff_core_JsValue.JsValue_isUndefined(error_))) {
throw error_
}
}
}

export async function LockCondition_sleepUntil$(self_, body_, $task) {
_tailcall: for(;;) {
{
const _1 = (await body_($task));
if(_1.Some) {
const value_ = _1.value_;
return value_
}
{
(await ff_core_Lock.LockCondition_sleep$(self_, $task));
{
const self_r_ = self_;
const body_r_ = body_;
self_ = self_r_
body_ = body_r_
continue _tailcall
}
return
}
}
return
}
}

export async function LockCondition_wakeOne$(self_, $task) {
{
const if_o = ff_core_Queue.Queue_pop(self_.queue_)
if(if_o.Some) {
const resolve_ = if_o.value_;
(await resolve_((void 0), $task))
}
}
}

export async function LockCondition_wakeAll$(self_, $task) {
(await ff_core_Queue.Queue_each$(self_.queue_, (async (_, resolve_, $task) => {
(await resolve_((void 0), $task))
}), $task));
ff_core_Queue.Queue_clear(self_.queue_)
}

//# sourceMappingURL=Lock.mjs.map