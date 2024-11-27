

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

// newtype SourceLocation



export function here_(location_ = ff_core_SourceLocation.callSite_()) {
return location_
}

export function callSite_() {
return ff_core_Core.panic_("SourceLocation.callSite() can only occur as the default value of an argument")
}

export async function here_$(location_ = ff_core_SourceLocation.callSite_(), $task) {
return location_
}

export async function callSite_$($task) {
return ff_core_Core.panic_("SourceLocation.callSite() can only occur as the default value of an argument")
}

export function SourceLocation_group(self_) {
return ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 44)
})), 1), ((_w1) => {
return (_w1 !== 44)
}))
}

export function SourceLocation_package(self_) {
return ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 44)
})), 1), ((_w1) => {
return (_w1 !== 44)
})), 1), ((_w1) => {
return (_w1 !== 62)
}))
}

export function SourceLocation_directory(self_) {
return ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(self_, ((_w1) => {
return (_w1 !== 58)
}))), ((_w1) => {
return (_w1 !== 47)
})), 1))
}

export function SourceLocation_module(self_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(self_, ((_w1) => {
return (_w1 !== 58)
}))), ((_w1) => {
return (_w1 !== 47)
})))
}

export function SourceLocation_line(self_) {
return ff_core_String.String_grabInt(ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 58)
})), 1), ((_w1) => {
return (_w1 !== 58)
})))
}

export function SourceLocation_column(self_) {
return ff_core_String.String_grabInt(ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 58)
})), 1), ((_w1) => {
return (_w1 !== 58)
})), 1), ((_w1) => {
return (_w1 !== 44)
})))
}

export function SourceLocation_breadcrumbs(self_) {
return ff_core_String.String_split(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 62)
})), 1), 62)
}

export async function SourceLocation_group$(self_, $task) {
return ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 44)
})), 1), ((_w1) => {
return (_w1 !== 44)
}))
}

export async function SourceLocation_package$(self_, $task) {
return ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 44)
})), 1), ((_w1) => {
return (_w1 !== 44)
})), 1), ((_w1) => {
return (_w1 !== 62)
}))
}

export async function SourceLocation_directory$(self_, $task) {
return ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(self_, ((_w1) => {
return (_w1 !== 58)
}))), ((_w1) => {
return (_w1 !== 47)
})), 1))
}

export async function SourceLocation_module$(self_, $task) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(self_, ((_w1) => {
return (_w1 !== 58)
}))), ((_w1) => {
return (_w1 !== 47)
})))
}

export async function SourceLocation_line$(self_, $task) {
return ff_core_String.String_grabInt(ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 58)
})), 1), ((_w1) => {
return (_w1 !== 58)
})))
}

export async function SourceLocation_column$(self_, $task) {
return ff_core_String.String_grabInt(ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 58)
})), 1), ((_w1) => {
return (_w1 !== 58)
})), 1), ((_w1) => {
return (_w1 !== 44)
})))
}

export async function SourceLocation_breadcrumbs$(self_, $task) {
return ff_core_String.String_split(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(self_, ((_w1) => {
return (_w1 !== 62)
})), 1), 62)
}

export const ff_core_Show_Show$ff_core_SourceLocation_SourceLocation = {
show_(self_) {
return self_
},
async show_$(self_, $task) {
return self_
}
};

export const ff_core_Equal_Equal$ff_core_SourceLocation_SourceLocation = {
equals_(a_, b_) {
return (a_ === b_)
},
async equals_$(a_, b_, $task) {
return (a_ === b_)
}
};

export const ff_core_Ordering_Order$ff_core_SourceLocation_SourceLocation = {
compare_(a_, b_) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(a_, b_)
},
async compare_$(a_, b_, $task) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(a_, b_)
}
};

export const ff_core_Serializable_Serializable$ff_core_SourceLocation_SourceLocation = {
serializeUsing_(serialization_, self_) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, self_)
},
deserializeUsing_(serialization_) {
return ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_)
},
async serializeUsing_$(serialization_, self_, $task) {
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, self_)
},
async deserializeUsing_$(serialization_, $task) {
return ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_)
}
};


