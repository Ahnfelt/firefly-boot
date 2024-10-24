

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

// type Atomic




export function new_(value_) {

        return {value: value_}
    
}

export async function new_$(value_, $task) {
throw new Error('Function new is missing on this target in async context.');
}

export function Atomic_modify(self_, body_) {

            return self_.value = body_(self_.value)
        
}

export function Atomic_getAndModify(self_, body_) {

            const currentValue = self_.value
            self_.value = body_(currentValue)
            return currentValue
        
}

export function Atomic_get(self_) {

            return self_.value
        
}

export function Atomic_set(self_, value_) {

            self_.value = value
        
}

export function Atomic_getAndSet(self_, newValue_) {

            const currentValue = self_.value
            self_.value = newValue
            return currentValue
        
}

export function Atomic_compareAndSet(self_, currentValue_, newValue_) {

            if(self_.value !== currentValue) return false
            self_.value = newValue
            return true
        
}

export async function Atomic_modify$(self_, body_, $task) {

            let currentValue, newValue
            do {
                currentValue = self_.value
                newValue = await body_(currentValue)
            } while(currentValue !== self_.value)
            self_.value = newValue
            return newValue
        
}

export async function Atomic_getAndModify$(self_, body_, $task) {

            let currentValue, newValue
            do {
                currentValue = self_.value
                newValue = await body_(currentValue)
            } while(currentValue !== self_.value)
            self_.value = newValue
            return currentValue
        
}

export async function Atomic_get$(self_, $task) {
throw new Error('Function Atomic_get is missing on this target in async context.');
}

export async function Atomic_set$(self_, value_, $task) {
throw new Error('Function Atomic_set is missing on this target in async context.');
}

export async function Atomic_getAndSet$(self_, newValue_, $task) {
throw new Error('Function Atomic_getAndSet is missing on this target in async context.');
}

export async function Atomic_compareAndSet$(self_, currentValue_, newValue_, $task) {
throw new Error('Function Atomic_compareAndSet is missing on this target in async context.');
}




