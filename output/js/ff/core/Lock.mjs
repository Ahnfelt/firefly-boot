

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

// type Lock


// type LockCondition








export function Lock_condition(self_) {
throw new Error('Function Lock_condition is missing on this target in sync context.');
}

export function Lock_acquire(self_, reentrant_) {
throw new Error('Function Lock_acquire is missing on this target in sync context.');
}

export function Lock_release(self_) {
throw new Error('Function Lock_release is missing on this target in sync context.');
}

export function Lock_do(self_, reentrant_, body_) {
ff_core_Lock.Lock_acquire(self_, reentrant_);
try {
return body_()
} finally {
ff_core_Lock.Lock_release(self_)
}
}

export async function Lock_condition$(self_, $task) {

            return {lock: self_, stack: [], queue: []}
        
}

export async function Lock_acquire$(self_, reentrant_, $task) {

            if(self_.level === 0) {
                self_.owner = $task
                self_.level += 1
            } else {
                if(self_.owner !== $task || !reentrant_) {
                    try {
                        await new Promise((resolve, reject) => {
                            $task.controller.signal.addEventListener('abort', reject)
                            try {
                                self_.queue.push({owner: $task, resolve: resolve})
                            } finally {
                                $task.controller.signal.removeEventListener('abort', reject)
                            }
                        })
                    } finally {
                        if($task.controller.signal.aborted) $task.controller = new AbortController()
                    }
                } else {
                    self_.level += 1
                }
            }
        
}

export async function Lock_release$(self_, $task) {

            if(self_.owner !== $task) {
                throw new Error("Tried to release a lock without acquiring it first.")
            } else if(self_.level > 1) {
                self_.level -= 1
            } else {
                self_.owner = null
                self_.level = 0
                if(self_.stack.length === 0) {
                    const empty = self_.stack
                    self_.stack = self_.queue.reverse()
                    self_.queue = empty
                }
                if(self_.stack.length !== 0) {
                    const pending = self_.stack.pop()
                    self_.owner = pending.owner
                    self_.level = 1
                    pending.resolve()
                }
            }
        
}

export async function Lock_do$(self_, reentrant_, body_, $task) {
(await ff_core_Lock.Lock_acquire$(self_, reentrant_, $task));
try {
return (await body_($task))
} finally {
(await ff_core_Lock.Lock_release$(self_, $task))
}
}

export function LockCondition_sleep(self_) {
throw new Error('Function LockCondition_sleep is missing on this target in sync context.');
}

export function LockCondition_sleepUntil(self_, body_) {
_tailcall: for(;;) {
{
const _1 = body_();
{
if(_1.Some) {
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.None) {
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
}
return
}
}

export function LockCondition_wakeOne(self_) {
throw new Error('Function LockCondition_wakeOne is missing on this target in sync context.');
}

export function LockCondition_wakeAll(self_) {
throw new Error('Function LockCondition_wakeAll is missing on this target in sync context.');
}

export async function LockCondition_sleep$(self_, $task) {

            if(self_.lock.owner !== $task) {
                throw new Error("Tried to sleep on a condition without acquiring it first.")
            }
            const level = self_.lock.level
            self_.lock.level = 1
            await ff_core.Lock_release$(self_.lock)
            try {
                await new Promise((resolve, reject) => {
                    $task.controller.signal.addEventListener('abort', reject)
                    try {
                        self_.queue.push(resolve)
                    } finally {
                        $task.controller.signal.removeEventListener('abort', reject)
                        if($task.controller.signal.aborted) $task.controller = new AbortController()
                    }
                })
            } finally {
                let exception = null
                let acquired = false
                while(!acquired) {
                    try {
                        await ff_core.Lock_acquire$(self_.lock)
                        self_.lock.level = level
                        acquired = true
                    } catch(e) {
                        exception = e
                    }
                }
                if(e !== null) throw e;
            }
        
}

export async function LockCondition_sleepUntil$(self_, body_, $task) {
_tailcall: for(;;) {
{
const _1 = (await body_($task));
{
if(_1.Some) {
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.None) {
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
}
return
}
}

export async function LockCondition_wakeOne$(self_, $task) {

            if(self_.stack.length === 0) {
                const empty = self_.stack
                self_.stack = self_.queue.reverse()
                self_.queue = empty
            }
            if(self_.stack.length !== 0) {
                const resolve = self_.stack.pop()
                resolve()
            }
        
}

export async function LockCondition_wakeAll$(self_, $task) {

            while(self_.stack.length !== 0) {
                const resolve = self_.stack.pop()
                resolve()
            }
            const empty = self_.stack
            self_.stack = self_.queue.reverse()
            self_.queue = empty
            while(self_.stack.length !== 0) {
                const resolve = self_.stack.pop()
                resolve()
            }
        
}




