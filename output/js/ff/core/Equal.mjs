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

export function notEquals_(x_, y_, ff_core_Equal_Equal$T) {
return (!ff_core_Equal_Equal$T.equals_(x_, y_))
}

export async function notEquals_$(x_, y_, ff_core_Equal_Equal$T, $task) {
return (!ff_core_Equal_Equal$T.equals_(x_, y_))
}

export const ff_core_Equal_Equal$ff_core_Nothing_Nothing = {
equals_(x_, y_) {
return true
},
async equals_$(x_, y_, $task) {
return true
},
};

export const ff_core_Equal_Equal$ff_core_Bool_Bool = {
equals_(x_, y_) {
return (x_ === y_)
},
async equals_$(x_, y_, $task) {
return (x_ === y_)
},
};

export const ff_core_Equal_Equal$ff_core_Char_Char = {
equals_(x_, y_) {
return (x_ === y_)
},
async equals_$(x_, y_, $task) {
return (x_ === y_)
},
};

export const ff_core_Equal_Equal$ff_core_Int_Int = {
equals_(x_, y_) {
return (x_ === y_)
},
async equals_$(x_, y_, $task) {
return (x_ === y_)
},
};

export const ff_core_Equal_Equal$ff_core_Float_Float = {
equals_(x_, y_) {
return (x_ === y_)
},
async equals_$(x_, y_, $task) {
return (x_ === y_)
},
};

export const ff_core_Equal_Equal$ff_core_String_String = {
equals_(x_, y_) {
return (x_ === y_)
},
async equals_$(x_, y_, $task) {
return (x_ === y_)
},
};


//# sourceMappingURL=Equal.mjs.map