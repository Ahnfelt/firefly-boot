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

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type TaskSystem








export function TaskSystem_start(self_, body_) {
return ff_core_Core.panic_("magic")
}

export function TaskSystem_cancel(self_) {
ff_core_Core.panic_("magic")
}

export function TaskSystem_scope(self_, body_) {
return ff_core_Core.panic_("magic")
}

export function TaskSystem_sleep(self_, duration_) {
ff_core_Core.panic_("magic")
}

export function TaskSystem_race(self_, tasks_) {
return ff_core_Core.panic_("magic")
}

export function TaskSystem_all(self_, tasks_) {
return ff_core_Core.panic_("magic")
}

export function TaskSystem_both(self_, task1_, task2_) {
return ff_core_Core.panic_("magic")
}

export async function TaskSystem_start$(self_, body_, $signal) {

            const promise = Promise.resolve().then(() => {
                try {
                    if(self_.controller.signal.aborted) throw self_.controller.signal.reason
                    return body_(self_.controller.signal)
                } catch(e) {
                    if(self_.error == null) self_.error = e
                    throw e
                } finally {
                    self_.promises.delete(promise)
                }
            })
            self_.promises.add(promise)
            return async (signal) => {
                if(signal.aborted) throw signal.reason
                let abort
                let cancelPromise = new Promise((_, reject) => abort = () => reject(signal.reason))
                signal.addEventListener('abort', abort)
                try {
                    await Promise.race([
                        promise,
                        cancelPromise
                    ])
                } finally {
                    signal.removeEventListener('abort', abort)
                }
            }
        
}

export async function TaskSystem_cancel$(self_, $signal) {

            self_.controller.abort()
        
}

export async function TaskSystem_scope$(self_, body_, $signal) {

            if(self_.controller.signal.aborted) throw self_.controller.signal.reason
            let controller = new AbortController()
            let abort = () => controller.abort(self_.controller.signal.reason)
            self_.controller.signal.addEventListener('abort', abort)
            let result = undefined
            let newTaskSystem = {promises: new Set(), controller: controller, error: null}
            try {
                result = await body_(newTaskSystem, newTaskSystem.controller.signal)
            } finally {
                self_.controller.signal.removeEventListener('abort', abort)
                await Promise.allSettled(newTaskSystem.promises)
            }
            if(self_.error != null) throw e
            return result
        
}

export async function TaskSystem_sleep$(self_, duration_, $signal) {

            if($signal.aborted) throw $signal.reason
            await new Promise((resolve, reject) => {
                let abort = () => {
                    $signal.removeEventListener('abort', abort)
                    if(timeoutId != null) clearTimeout(timeoutId)
                    reject($signal.reason)
                }
                $signal.addEventListener('abort', abort)
                let complete = () => {
                    $signal.removeEventListener('abort', abort)
                    resolve()
                }
                let timeoutId = setTimeout(complete, duration_ * 1000);
            })
        
}

export async function TaskSystem_race$(self_, tasks_, $signal) {

            if($signal.aborted) throw $signal.reason
            let controller = new AbortController()
            let abort = () => controller.abort($signal.reason)
            $signal.addEventListener('abort', abort)
            let promises = []
            try {
                ff_core_List.List_toArray(tasks_).forEach(f =>
                    promises.push(Promise.resolve(controller.signal).then(f))
                )
                return await Promise.race(promises)
            } finally {
                $signal.removeEventListener('abort', abort)
                controller.abort()
                await Promise.allSettled(promises)
            }
        
}

export async function TaskSystem_all$(self_, tasks_, $signal) {

            if($signal.aborted) throw $signal.reason
            let controller = new AbortController()
            let abort = () => controller.abort($signal.reason)
            $signal.addEventListener('abort', abort)
            let promises = []
            try {
                ff_core_List.List_toArray(tasks_).forEach(f =>
                    promises.push(Promise.resolve(controller.signal).then(f))
                )
                let array = await Promise.all(promises)
                return ff_core_Array.Array_toList(array)
            } finally {
                $signal.removeEventListener('abort', abort)
                controller.abort()
                await Promise.allSettled(promises)
            }
        
}

export async function TaskSystem_both$(self_, task1_, task2_, $signal) {

            if($signal.aborted) throw $signal.reason
            let controller = new AbortController()
            let abort = () => controller.abort($signal.reason)
            $signal.addEventListener('abort', abort)
            let promises = []
            try {
                promises.push(Promise.resolve(controller.signal).then(task1_))
                promises.push(Promise.resolve(controller.signal).then(task2_))
                let array = await Promise.all(promises)
                return {first_: array[0], second_: array[1]}
            } finally {
                $signal.removeEventListener('abort', abort)
                controller.abort()
                await Promise.allSettled(promises)
            }
        
}




