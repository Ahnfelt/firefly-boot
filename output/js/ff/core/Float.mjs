

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

// type Float








export function Float_toInt(self_) {
return Math.trunc(Math.abs(self_))
}

export function Float_round(self_) {
return Math.round(self_)
}

export function Float_floor(self_) {
return Math.floor(self_)
}

export function Float_ceil(self_) {
return Math.ceil(self_)
}

export function Float_truncate(self_) {
return Math.trunc(self_)
}

export function Float_sign(self_) {
return Math.sign(self_)
}

export function Float_abs(self_) {
return Math.abs(self_)
}

export function Float_toFixed(self_, digits_) {
return self_.toFixed(digits_)
}

export function Float_min(self_, that_) {
if((self_ < that_)) {
return self_
} else {
return that_
}
}

export function Float_max(self_, that_) {
if((self_ > that_)) {
return self_
} else {
return that_
}
}

export function Float_clamp(self_, from_, to_) {
if((self_ <= from_)) {
return from_
} else if((self_ >= to_)) {
return to_
} else {
return self_
}
}

export async function Float_toInt$(self_, $task) {
throw new Error('Function Float_toInt is missing on this target in async context.');
}

export async function Float_round$(self_, $task) {
throw new Error('Function Float_round is missing on this target in async context.');
}

export async function Float_floor$(self_, $task) {
throw new Error('Function Float_floor is missing on this target in async context.');
}

export async function Float_ceil$(self_, $task) {
throw new Error('Function Float_ceil is missing on this target in async context.');
}

export async function Float_truncate$(self_, $task) {
throw new Error('Function Float_truncate is missing on this target in async context.');
}

export async function Float_sign$(self_, $task) {
throw new Error('Function Float_sign is missing on this target in async context.');
}

export async function Float_abs$(self_, $task) {
throw new Error('Function Float_abs is missing on this target in async context.');
}

export async function Float_toFixed$(self_, digits_, $task) {
throw new Error('Function Float_toFixed is missing on this target in async context.');
}

export async function Float_min$(self_, that_, $task) {
if((self_ < that_)) {
return self_
} else {
return that_
}
}

export async function Float_max$(self_, that_, $task) {
if((self_ > that_)) {
return self_
} else {
return that_
}
}

export async function Float_clamp$(self_, from_, to_, $task) {
if((self_ <= from_)) {
return from_
} else if((self_ >= to_)) {
return to_
} else {
return self_
}
}




