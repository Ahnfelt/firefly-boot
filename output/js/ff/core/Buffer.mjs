

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

import * as ff_core_Table from "../../ff/core/Table.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Buffer




export function make_(size_) {
return Buffer.alloc(size_)
}

export function fromBufferTable_(table_) {
return Buffer.concat(array_)
}

export async function make_$(size_, $c) {
throw new Error('Function make is missing on this target in async context.');
}

export async function fromBufferTable_$(table_, $c) {
throw new Error('Function fromBufferTable is missing on this target in async context.');
}

export function Buffer_size(self_) {
return self_.length
}

export function Buffer_expect(self_, index_) {

            if(index_ < 0 || index_ >= self_.length) throw Error("Index out of bounds: " + index_)
            return self_[index_]
        
}

export function Buffer_set(self_, index_, byte_) {

            if(index_ < 0 || index_ >= self_.length) throw Error("Index out of bounds: " + index_)
            self_[index_] = byte_
        
}

export function Buffer_toString(self_, encoding_ = "utf8") {
return self_.toString(encoding_)
}

export async function Buffer_size$(self_, $c) {
throw new Error('Function Buffer_size is missing on this target in async context.');
}

export async function Buffer_expect$(self_, index_, $c) {
throw new Error('Function Buffer_expect is missing on this target in async context.');
}

export async function Buffer_set$(self_, index_, byte_, $c) {
throw new Error('Function Buffer_set is missing on this target in async context.');
}

export async function Buffer_toString$(self_, encoding_ = "utf8", $c) {
throw new Error('Function Buffer_toString is missing on this target in async context.');
}




