

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











export const ff_core_Show_Show$ff_core_Bool_Bool = {
show_(value_) {
{
const value_a = value_;
{
if(!value_a) {
return "False"
return
}
}
{
if(value_a) {
return "True"
return
}
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
if(!value_a) {
return "False"
return
}
}
{
if(value_a) {
return "True"
return
}
}
}
}
};

export const ff_core_Show_Show$ff_core_Nothing_Nothing = {
show_(value_) {
return ""
},
async show_$(value_, $task) {
return ""
}
};

export const ff_core_Show_Show$ff_core_Char_Char = {
show_(value_) {
return ff_core_Char.Char_toString(value_)
},
async show_$(value_, $task) {
return ff_core_Char.Char_toString(value_)
}
};

export const ff_core_Show_Show$ff_core_Int_Int = {
show_(value_) {
return ("" + value_)
},
async show_$(value_, $task) {
return ("" + value_)
}
};

export const ff_core_Show_Show$ff_core_Float_Float = {
show_(value_) {
return ("" + value_)
},
async show_$(value_, $task) {
return ("" + value_)
}
};

export const ff_core_Show_Show$ff_core_String_String = {
show_(value_) {
return JSON.stringify(value_);
},
async show_$(value_, $task) {
throw new Error('Function show is missing on this target in async context.');
}
};

export function ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$T) { return {
show_(value_) {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(value_, ((value_) => {
return ff_core_Show_Show$T.show_(value_)
})), ", ")) + "]")
},
async show_$(value_, $task) {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(value_, ((value_) => {
return ff_core_Show_Show$T.show_(value_)
})), ", ")) + "]")
}
}}

export function ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show_Show$A, ff_core_Show_Show$B) { return {
show_(value_) {
return (((("Pair(" + ff_core_Show_Show$A.show_(value_.first_)) + ", ") + ff_core_Show_Show$B.show_(value_.second_)) + ")")
},
async show_$(value_, $task) {
return (((("Pair(" + ff_core_Show_Show$A.show_(value_.first_)) + ", ") + ff_core_Show_Show$B.show_(value_.second_)) + ")")
}
}}


