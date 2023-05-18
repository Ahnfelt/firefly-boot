

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

// type BrowserSystem








export function BrowserSystem_fetch(self_) {
throw new Error('Function BrowserSystem_fetch is missing on this target in sync context.');
}

export function BrowserSystem_scope(self_, body_, shielded_ = false, rethrow_ = true) {
const scope_ = ff_core_BrowserSystem.BrowserSystem_openScope(self_, shielded_);
try {
return body_(scope_)
} finally {
ff_core_TaskScope.TaskScope_close(scope_, rethrow_)
}
}

export function BrowserSystem_openScope(self_, shielded_ = false) {
throw new Error('Function BrowserSystem_openScope is missing on this target in sync context.');
}

export function BrowserSystem_time(self_) {
throw new Error('Function BrowserSystem_time is missing on this target in sync context.');
}

export function BrowserSystem_js(self_) {
throw new Error('Function BrowserSystem_js is missing on this target in sync context.');
}

export async function BrowserSystem_fetch$(self_, $c) {
return null
}

export async function BrowserSystem_scope$(self_, body_, shielded_ = false, rethrow_ = true, $c) {
const scope_ = (await ff_core_BrowserSystem.BrowserSystem_openScope$(self_, shielded_, $c));
try {
return (await body_(scope_, $c))
} finally {
(await ff_core_TaskScope.TaskScope_close$(scope_, rethrow_, $c))
}
}

export async function BrowserSystem_openScope$(self_, shielded_ = false, $c) {

            return await ff_core_TaskScope.TaskScope_openSubscope$($c, shielded_, $c)
        
}

export async function BrowserSystem_time$(self_, $c) {
return null
}

export async function BrowserSystem_js$(self_, $c) {
return typeof globalThis !== 'undefined' ? globalThis : window
}




