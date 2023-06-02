

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

// type Int








export function Int_abs(self_) {
return Math.abs(self_)
}

export function Int_toFloat(self_) {
return self_
}

export function Int_bitNot(self_) {
return ~self_;
}

export function Int_bitOr(self_, that_) {
return self_ | that_;
}

export function Int_bitAnd(self_, that_) {
return self_ & that_;
}

export function Int_bitXor(self_, that_) {
return self_ ^ that_;
}

export function Int_bitLeft(self_, bits_ = 1) {
return self_ << bits_;
}

export function Int_bitRight(self_, bits_ = 1, signed_ = true) {
return signed_ ? self_ >> bits_ : self_ >>> bits_;
}

export function Int_to(self_, inclusiveEnd_) {
let result_ = ff_core_List.Empty();
let n_ = inclusiveEnd_;
while((self_ <= n_)) {
result_ = ff_core_List.Link(n_, result_);
n_ -= 1
};
return result_
}

export function Int_until(self_, exclusiveEnd_) {
let result_ = ff_core_List.Empty();
let n_ = exclusiveEnd_;
while((self_ < n_)) {
result_ = ff_core_List.Link((n_ - 1), result_);
n_ -= 1
};
return result_
}

export function Int_min(self_, that_) {
if((self_ < that_)) {
return self_
} else {
return that_
}
}

export function Int_max(self_, that_) {
if((self_ > that_)) {
return self_
} else {
return that_
}
}

export function Int_clamp(self_, from_, to_) {
if((self_ <= from_)) {
return from_
} else if((self_ >= to_)) {
return to_
} else {
return self_
}
}

export async function Int_abs$(self_, $task) {
throw new Error('Function Int_abs is missing on this target in async context.');
}

export async function Int_toFloat$(self_, $task) {
throw new Error('Function Int_toFloat is missing on this target in async context.');
}

export async function Int_bitNot$(self_, $task) {
throw new Error('Function Int_bitNot is missing on this target in async context.');
}

export async function Int_bitOr$(self_, that_, $task) {
throw new Error('Function Int_bitOr is missing on this target in async context.');
}

export async function Int_bitAnd$(self_, that_, $task) {
throw new Error('Function Int_bitAnd is missing on this target in async context.');
}

export async function Int_bitXor$(self_, that_, $task) {
throw new Error('Function Int_bitXor is missing on this target in async context.');
}

export async function Int_bitLeft$(self_, bits_ = 1, $task) {
throw new Error('Function Int_bitLeft is missing on this target in async context.');
}

export async function Int_bitRight$(self_, bits_ = 1, signed_ = true, $task) {
throw new Error('Function Int_bitRight is missing on this target in async context.');
}

export async function Int_to$(self_, inclusiveEnd_, $task) {
let result_ = ff_core_List.Empty();
let n_ = inclusiveEnd_;
while((self_ <= n_)) {
result_ = ff_core_List.Link(n_, result_);
n_ -= 1
};
return result_
}

export async function Int_until$(self_, exclusiveEnd_, $task) {
let result_ = ff_core_List.Empty();
let n_ = exclusiveEnd_;
while((self_ < n_)) {
result_ = ff_core_List.Link((n_ - 1), result_);
n_ -= 1
};
return result_
}

export async function Int_min$(self_, that_, $task) {
if((self_ < that_)) {
return self_
} else {
return that_
}
}

export async function Int_max$(self_, that_, $task) {
if((self_ > that_)) {
return self_
} else {
return that_
}
}

export async function Int_clamp$(self_, from_, to_, $task) {
if((self_ <= from_)) {
return from_
} else if((self_ >= to_)) {
return to_
} else {
return self_
}
}




