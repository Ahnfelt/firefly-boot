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

export function jsSystem_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function import_(module_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function browserImport_(module_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function dynamicImport_(module_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function await_(promise_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async0_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async1_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async2_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async3_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async4_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async5_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async6_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async7_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async8_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function async9_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function inAsync_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function inBrowser_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function inNode_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function currentTask_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function throwIfCancelled_() {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function cancelled_() {
if(false) {
return $task.controller_.signal.aborted
} else {
return false
}
}

export function controller_() {
return $task.controller_
}

export function setController_(controller_) {
$task.controller_ = controller_
}

export function withSignal_(body_) {
const controller_ = $task.controller_;
try {
return body_(controller_.signal)
} finally {
if(controller_.signal.aborted) {
($task.controller_ = (new AbortController()))
}
}
}

export function awaitCancellablePromise_(body_) {
;
return (new Promise(((resolve_, reject_) => {
let settled_ = false;
const cleanups_ = ff_core_Array.new_();
const doResolve_ = ((v_) => {
if((!settled_)) {
settled_ = true;
try {
for(let for_a = cleanups_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
c_(true)
};
resolve_(v_)
} catch(e_) {
reject_(e_)
}
}
});
const doReject_ = ((v_) => {
if((!settled_)) {
settled_ = true;
try {
for(let for_a = cleanups_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
c_(false)
};
reject_(v_)
} catch(e_) {
reject_(e_)
}
}
});
const controller_ = $task.controller_;
const jsDoReject_ = ((_) => {
return doReject_(controller_.signal.reason)
});
controller_.signal.addEventListener("abort", jsDoReject_);
cleanups_.array.push(((_) => {
controller_.signal.removeEventListener("abort", jsDoReject_)
}));
return body_(doResolve_, doReject_, ((cleanup_) => {
cleanups_.array.push(cleanup_)
}))
})))
}

export function value_(value_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function fromValue_(value_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function throw_(value_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function initializeError_(exception_, error_, ff_core_Any_HasAnyTag$E, ff_core_Show_Show$E) {
error_.message = ff_core_Show_Show$E.show_(exception_);
return ff_core_Js.initializeErrorKeepMessage_(exception_, error_, ff_core_Any_HasAnyTag$E)
}

export function initializeErrorKeepMessage_(exception_, error_, ff_core_Any_HasAnyTag$E) {
if(true) {
Object.defineProperty(error_, "ffException", {value: ff_core_Any.toAny_(exception_, ff_core_Any_HasAnyTag$E), enumerable: false})
} else {
error_.ffException = ff_core_Any.toAny_(exception_, ff_core_Any_HasAnyTag$E)
};
return error_
}

export function unaryOperator_(operator_, a1_, ff_core_JsValue_IsJsValue$T1) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function binaryOperator_(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function shortCircuitingOperator_(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function rawIdentifier_(operator_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function globalThis_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function get_(key_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function set_(key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function increment_(key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function decrement_(key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call0_(name_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call1_(name_, a1_, ff_core_JsValue_IsJsValue$A1) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call2_(name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call3_(name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call4_(name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call5_(name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call6_(name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call7_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call8_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function call9_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function null_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function undefined_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function orUndefined_(value_, ff_core_JsValue_IsJsValue$T) {
{
const _1 = value_;
if(_1.None) {
return (void 0)
}
{
const v_ = _1.value_;
return v_
}
}
}

export function object_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function new0_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function array_(values_) {
return values_
}

export function json_(value_) {
return value_
}

export function function0_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function1_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function2_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function3_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function4_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function5_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function6_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function7_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function8_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function function9_(body_) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function jsSystem_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function import_$(module_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function browserImport_$(module_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function dynamicImport_$(module_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function await_$(promise_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async0_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async1_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async2_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async3_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async4_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async5_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async6_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async7_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async8_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function async9_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function inAsync_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function inBrowser_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function inNode_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function currentTask_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function throwIfCancelled_$($task) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function cancelled_$($task) {
if(true) {
return $task.controller_.signal.aborted
} else {
return false
}
}

export async function controller_$($task) {
return $task.controller_
}

export async function setController_$(controller_, $task) {
$task.controller_ = controller_
}

export async function withSignal_$(body_, $task) {
const controller_ = $task.controller_;
try {
return (await body_(controller_.signal, $task))
} finally {
if(controller_.signal.aborted) {
($task.controller_ = (new AbortController()))
}
}
}

export async function awaitCancellablePromise_$(body_, $task) {
ff_core_Task.Task_throwIfAborted($task);
return (await (new Promise((async (a_1, a_2) => await (async (resolve_, reject_, $task) => {
let settled_ = false;
const cleanups_ = ff_core_Array.new_();
const doResolve_ = (async (v_, $task) => {
if((!settled_)) {
settled_ = true;
try {
for(let for_a = cleanups_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
(await c_(true, $task))
};
resolve_(v_)
} catch(e_) {
reject_(e_)
}
}
});
const doReject_ = (async (v_, $task) => {
if((!settled_)) {
settled_ = true;
try {
for(let for_a = cleanups_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
(await c_(false, $task))
};
reject_(v_)
} catch(e_) {
reject_(e_)
}
}
});
const controller_ = $task.controller_;
const jsDoReject_ = (async (a_1) => await (async (_, $task) => {
return (await doReject_(controller_.signal.reason, $task))
})(a_1, $task));
controller_.signal.addEventListener("abort", jsDoReject_);
cleanups_.array.push((async (_, $task) => {
controller_.signal.removeEventListener("abort", jsDoReject_)
}));
return (await body_(doResolve_, doReject_, (async (cleanup_, $task) => {
cleanups_.array.push(cleanup_)
}), $task))
})(a_1, a_2, $task)))))
}

export async function value_$(value_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function fromValue_$(value_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function throw_$(value_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function initializeError_$(exception_, error_, ff_core_Any_HasAnyTag$E, ff_core_Show_Show$E, $task) {
error_.message = ff_core_Show_Show$E.show_(exception_);
return ff_core_Js.initializeErrorKeepMessage_(exception_, error_, ff_core_Any_HasAnyTag$E)
}

export async function initializeErrorKeepMessage_$(exception_, error_, ff_core_Any_HasAnyTag$E, $task) {
if(true) {
Object.defineProperty(error_, "ffException", {value: ff_core_Any.toAny_(exception_, ff_core_Any_HasAnyTag$E), enumerable: false})
} else {
error_.ffException = ff_core_Any.toAny_(exception_, ff_core_Any_HasAnyTag$E)
};
return error_
}

export async function unaryOperator_$(operator_, a1_, ff_core_JsValue_IsJsValue$T1, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function binaryOperator_$(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function shortCircuitingOperator_$(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function rawIdentifier_$(operator_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function globalThis_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function get_$(key_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function set_$(key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function increment_$(key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function decrement_$(key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call0_$(name_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call1_$(name_, a1_, ff_core_JsValue_IsJsValue$A1, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call2_$(name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call3_$(name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call4_$(name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call5_$(name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call6_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call7_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call8_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function call9_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function null_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function undefined_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function orUndefined_$(value_, ff_core_JsValue_IsJsValue$T, $task) {
{
const _1 = value_;
if(_1.None) {
return (void 0)
}
{
const v_ = _1.value_;
return v_
}
}
}

export async function object_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function new0_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function array_$(values_, $task) {
return values_
}

export async function json_$(value_, $task) {
return value_
}

export async function function0_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function1_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function2_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function3_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function4_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function5_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function6_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function7_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function8_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function function9_$(body_, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}


//# sourceMappingURL=Js.mjs.map