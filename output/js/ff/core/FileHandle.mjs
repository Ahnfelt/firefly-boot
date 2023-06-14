

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

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

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

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type FileHandle








export function FileHandle_close(self_) {
throw new Error('Function FileHandle_close is missing on this target in sync context.');
}

export function FileHandle_read(self_, buffer_, offset_ = 0, length_ = ff_core_Option.None(), position_ = ff_core_Option.None()) {
throw new Error('Function FileHandle_read is missing on this target in sync context.');
}

export function FileHandle_write(self_, buffer_, offset_ = 0, length_ = ff_core_Option.None(), position_ = ff_core_Option.None()) {
throw new Error('Function FileHandle_write is missing on this target in sync context.');
}

export function FileHandle_writeText(self_, text_, position_ = ff_core_Option.None(), encoding_ = "utf8") {
throw new Error('Function FileHandle_writeText is missing on this target in sync context.');
}

export function FileHandle_truncate(self_, length_ = 0) {
throw new Error('Function FileHandle_truncate is missing on this target in sync context.');
}

export function FileHandle_sync(self_, dataOnly_ = false) {
throw new Error('Function FileHandle_sync is missing on this target in sync context.');
}

export async function FileHandle_close$(self_, $task) {

            await self_.close()
        
}

export async function FileHandle_read$(self_, buffer_, offset_ = 0, length_ = ff_core_Option.None(), position_ = ff_core_Option.None(), $task) {

            ff_core_Task.Task_throwIfAborted($task)
            await self_.read(buffer_, {offset: offset_, length: length.value_, position: position.value_})
        
}

export async function FileHandle_write$(self_, buffer_, offset_ = 0, length_ = ff_core_Option.None(), position_ = ff_core_Option.None(), $task) {

            ff_core_Task.Task_throwIfAborted($task)
            await self_.write(buffer_, offset_, length.value_, position.value_)
        
}

export async function FileHandle_writeText$(self_, text_, position_ = ff_core_Option.None(), encoding_ = "utf8", $task) {

            ff_core_Task.Task_throwIfAborted($task)
            await self_.write(text, position.value_, encoding_)
        
}

export async function FileHandle_truncate$(self_, length_ = 0, $task) {

            ff_core_Task.Task_throwIfAborted($task)
            await self_.truncate(length_)
        
}

export async function FileHandle_sync$(self_, dataOnly_ = false, $task) {

            ff_core_Task.Task_throwIfAborted($task)
            if(dataOnly_) await self_.datasync()
            else await self_.sync()
        
}




