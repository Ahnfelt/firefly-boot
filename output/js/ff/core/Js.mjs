

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

export function throwIfCancelled_() {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function cancelled_() {
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

export function inBuild_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function controller_() {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function setController_(controller_) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function withSignal_(body_) {
const controller_ = $task.controller;
try {
return body_(controller_.signal)
} finally {
if(controller_.signal.aborted) {
($task.controller = (new AbortController()))
}
}
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

export function unaryOperator_(operator_, a1_, ff_core_JsValue_IsJsValue$T1) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function binaryOperator_(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function shortCircuitingOperator_(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export function globalThis_() {
return ff_core_JsSystem.JsSystem_globalThis(globalThis)
}

export function get_(key_) {
return ff_core_JsSystem.JsSystem_get(globalThis, key_)
}

export function set_(key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_JsSystem.JsSystem_set(globalThis, key_, value_, ff_core_JsValue_IsJsValue$V)
}

export function increment_(key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_JsSystem.JsSystem_increment(globalThis, key_, value_, ff_core_JsValue_IsJsValue$V)
}

export function decrement_(key_, value_, ff_core_JsValue_IsJsValue$V) {
ff_core_JsSystem.JsSystem_decrement(globalThis, key_, value_, ff_core_JsValue_IsJsValue$V)
}

export function call0_(name_) {
return ff_core_JsSystem.JsSystem_call0(globalThis, name_)
}

export function call1_(name_, a1_, ff_core_JsValue_IsJsValue$A1) {
return ff_core_JsSystem.JsSystem_call1(globalThis, name_, a1_, ff_core_JsValue_IsJsValue$A1)
}

export function call2_(name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2) {
return ff_core_JsSystem.JsSystem_call2(globalThis, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2)
}

export function call3_(name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3) {
return ff_core_JsSystem.JsSystem_call3(globalThis, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3)
}

export function call4_(name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4) {
return ff_core_JsSystem.JsSystem_call4(globalThis, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4)
}

export function call5_(name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5) {
return ff_core_JsSystem.JsSystem_call5(globalThis, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5)
}

export function call6_(name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6) {
return ff_core_JsSystem.JsSystem_call6(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6)
}

export function call7_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7) {
return ff_core_JsSystem.JsSystem_call7(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7)
}

export function call8_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8) {
return ff_core_JsSystem.JsSystem_call8(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8)
}

export function call9_(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9) {
return ff_core_JsSystem.JsSystem_call9(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9)
}

export function parseJson_(json_) {
return ff_core_JsSystem.JsSystem_parseJson(globalThis, json_)
}

export function null_() {
return null
}

export function undefined_() {
return (void 0)
}

export function orUndefined_(value_, ff_core_JsValue_IsJsValue$T) {
{
const _1 = value_;
if(_1.None) {
return (void 0)
}
if(_1.Some) {
const v_ = _1.value_;
return v_
}
}
}

export function object_() {
return {}
}

export function new0_() {
return {}
}

export function array_(values_) {
return ff_core_JsSystem.JsSystem_array(globalThis, values_)
}

export function json_(value_) {
return ff_core_JsSystem.JsSystem_json(globalThis, value_)
}

export function function0_(body_) {
return ff_core_JsSystem.JsSystem_function0(globalThis, body_)
}

export function function1_(body_) {
return ff_core_JsSystem.JsSystem_function1(globalThis, body_)
}

export function function2_(body_) {
return ff_core_JsSystem.JsSystem_function2(globalThis, body_)
}

export function function3_(body_) {
return ff_core_JsSystem.JsSystem_function3(globalThis, body_)
}

export function function4_(body_) {
return ff_core_JsSystem.JsSystem_function4(globalThis, body_)
}

export function function5_(body_) {
return ff_core_JsSystem.JsSystem_function5(globalThis, body_)
}

export function function6_(body_) {
return ff_core_JsSystem.JsSystem_function6(globalThis, body_)
}

export function function7_(body_) {
return ff_core_JsSystem.JsSystem_function7(globalThis, body_)
}

export function function8_(body_) {
return ff_core_JsSystem.JsSystem_function8(globalThis, body_)
}

export function function9_(body_) {
return ff_core_JsSystem.JsSystem_function9(globalThis, body_)
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

export async function throwIfCancelled_$($task) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function cancelled_$($task) {
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

export async function inBuild_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function controller_$($task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function setController_$(controller_, $task) {
ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function withSignal_$(body_, $task) {
const controller_ = $task.controller;
try {
return (await body_(controller_.signal, $task))
} finally {
if(controller_.signal.aborted) {
($task.controller = (new AbortController()))
}
}
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

export async function unaryOperator_$(operator_, a1_, ff_core_JsValue_IsJsValue$T1, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function binaryOperator_$(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function shortCircuitingOperator_$(operator_, a1_, a2_, ff_core_JsValue_IsJsValue$T1, ff_core_JsValue_IsJsValue$T2, $task) {
return ff_core_Core.panic_("This call should have been eliminated by the compiler")
}

export async function globalThis_$($task) {
return ff_core_JsSystem.JsSystem_globalThis(globalThis)
}

export async function get_$(key_, $task) {
return ff_core_JsSystem.JsSystem_get(globalThis, key_)
}

export async function set_$(key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_JsSystem.JsSystem_set(globalThis, key_, value_, ff_core_JsValue_IsJsValue$V)
}

export async function increment_$(key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_JsSystem.JsSystem_increment(globalThis, key_, value_, ff_core_JsValue_IsJsValue$V)
}

export async function decrement_$(key_, value_, ff_core_JsValue_IsJsValue$V, $task) {
ff_core_JsSystem.JsSystem_decrement(globalThis, key_, value_, ff_core_JsValue_IsJsValue$V)
}

export async function call0_$(name_, $task) {
return ff_core_JsSystem.JsSystem_call0(globalThis, name_)
}

export async function call1_$(name_, a1_, ff_core_JsValue_IsJsValue$A1, $task) {
return ff_core_JsSystem.JsSystem_call1(globalThis, name_, a1_, ff_core_JsValue_IsJsValue$A1)
}

export async function call2_$(name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, $task) {
return ff_core_JsSystem.JsSystem_call2(globalThis, name_, a1_, a2_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2)
}

export async function call3_$(name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, $task) {
return ff_core_JsSystem.JsSystem_call3(globalThis, name_, a1_, a2_, a3_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3)
}

export async function call4_$(name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, $task) {
return ff_core_JsSystem.JsSystem_call4(globalThis, name_, a1_, a2_, a3_, a4_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4)
}

export async function call5_$(name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, $task) {
return ff_core_JsSystem.JsSystem_call5(globalThis, name_, a1_, a2_, a3_, a4_, a5_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5)
}

export async function call6_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, $task) {
return ff_core_JsSystem.JsSystem_call6(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6)
}

export async function call7_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, $task) {
return ff_core_JsSystem.JsSystem_call7(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7)
}

export async function call8_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, $task) {
return ff_core_JsSystem.JsSystem_call8(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8)
}

export async function call9_$(name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9, $task) {
return ff_core_JsSystem.JsSystem_call9(globalThis, name_, a1_, a2_, a3_, a4_, a5_, a6_, a7_, a8_, a9_, ff_core_JsValue_IsJsValue$A1, ff_core_JsValue_IsJsValue$A2, ff_core_JsValue_IsJsValue$A3, ff_core_JsValue_IsJsValue$A4, ff_core_JsValue_IsJsValue$A5, ff_core_JsValue_IsJsValue$A6, ff_core_JsValue_IsJsValue$A7, ff_core_JsValue_IsJsValue$A8, ff_core_JsValue_IsJsValue$A9)
}

export async function parseJson_$(json_, $task) {
return ff_core_JsSystem.JsSystem_parseJson(globalThis, json_)
}

export async function null_$($task) {
return null
}

export async function undefined_$($task) {
return (void 0)
}

export async function orUndefined_$(value_, ff_core_JsValue_IsJsValue$T, $task) {
{
const _1 = value_;
if(_1.None) {
return (void 0)
}
if(_1.Some) {
const v_ = _1.value_;
return v_
}
}
}

export async function object_$($task) {
return {}
}

export async function new0_$($task) {
return {}
}

export async function array_$(values_, $task) {
return ff_core_JsSystem.JsSystem_array(globalThis, values_)
}

export async function json_$(value_, $task) {
return ff_core_JsSystem.JsSystem_json(globalThis, value_)
}

export async function function0_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function0$(globalThis, body_, $task))
}

export async function function1_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function1$(globalThis, body_, $task))
}

export async function function2_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function2$(globalThis, body_, $task))
}

export async function function3_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function3$(globalThis, body_, $task))
}

export async function function4_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function4$(globalThis, body_, $task))
}

export async function function5_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function5$(globalThis, body_, $task))
}

export async function function6_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function6$(globalThis, body_, $task))
}

export async function function7_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function7$(globalThis, body_, $task))
}

export async function function8_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function8$(globalThis, body_, $task))
}

export async function function9_$(body_, $task) {
return (await ff_core_JsSystem.JsSystem_function9$(globalThis, body_, $task))
}






