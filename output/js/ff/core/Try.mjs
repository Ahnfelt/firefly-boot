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

// type Try
export function Success(value_) {
return {Success: true, value_};
}
export function Failure(error_) {
return {Failure: true, error_};
}

export function internalThrowGrabException_() {
throw ff_core_Js.initializeError_(new Error(), ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
}

export async function internalThrowGrabException_$($task) {
throw ff_core_Js.initializeError_(new Error(), ff_core_Core.GrabException(), ff_core_Core.ff_core_Any_HasAnyTag$ff_core_Core_GrabException, ff_core_Core.ff_core_Show_Show$ff_core_Core_GrabException)
}

export function Try_map(self_, body_) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return ff_core_Core.try_((() => {
return body_(value_)
}))
return
}
{
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
}
}
}

export function Try_flatMap(self_, body_) {
return ff_core_Try.Try_flatten(ff_core_Try.Try_map(self_, body_))
}

export function Try_catch(self_, body_, ff_core_Any_HasAnyTag$E) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
const _guard1 = ff_core_Option.Option_flatMap(ff_core_Error.Error_exception(error_), ((any_) => {
return ff_core_Any.fromAny_(any_, ff_core_Any_HasAnyTag$E)
}));
if(_guard1.Some) {
const e_ = _guard1.value_;
return body_(e_, error_)
}
}
{
return ff_core_Try.Try_grab(self_)
}
}
}

export function Try_catchAny(self_, body_) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
return body_(error_)
}
{
return ff_core_Try.Try_grab(self_)
}
}
}

export function Try_finally(self_, body_) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
body_();
return value_
}
{
body_();
return ff_core_Try.Try_grab(self_)
}
}
}

export function Try_tryCatch(self_, body_, ff_core_Any_HasAnyTag$E) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
const _guard1 = ff_core_Option.Option_flatMap(ff_core_Error.Error_exception(error_), ((any_) => {
return ff_core_Any.fromAny_(any_, ff_core_Any_HasAnyTag$E)
}));
if(_guard1.Some) {
const e_ = _guard1.value_;
return ff_core_Core.try_((() => {
return body_(e_, error_)
}))
return
}
}
{
return self_
}
}
}

export function Try_tryCatchAny(self_, body_) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Core.try_((() => {
return body_(error_)
}))
return
}
{
return self_
}
}
}

export function Try_tryFinally(self_, body_) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return ff_core_Core.try_((() => {
body_();
return value_
}))
return
}
{
{
const _1 = ff_core_Core.try_((() => {
return body_()
}));
if(_1.Success) {
return self_
}
{
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
}
}
return
}
}
}

export function Try_else(self_, body_) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return value_
}
{
return body_()
}
}
}

export function Try_grab(self_) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return value_
}
{
const error_ = _1.error_;
return ff_core_Error.Error_rethrow(error_)
}
}
}

export function Try_toOption(self_) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return ff_core_Option.Some(value_)
}
{
return ff_core_Option.None()
}
}
}

export async function Try_map$(self_, body_, $task) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return (await ff_core_Core.try_$((async ($task) => {
return (await body_(value_, $task))
}), $task))
return
}
{
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
}
}
}

export async function Try_flatMap$(self_, body_, $task) {
return ff_core_Try.Try_flatten((await ff_core_Try.Try_map$(self_, body_, $task)))
}

export async function Try_catch$(self_, body_, ff_core_Any_HasAnyTag$E, $task) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
const _guard1 = ff_core_Option.Option_flatMap(ff_core_Error.Error_exception(error_), ((any_) => {
return ff_core_Any.fromAny_(any_, ff_core_Any_HasAnyTag$E)
}));
if(_guard1.Some) {
const e_ = _guard1.value_;
return (await body_(e_, error_, $task))
}
}
{
return ff_core_Try.Try_grab(self_)
}
}
}

export async function Try_catchAny$(self_, body_, $task) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
return (await body_(error_, $task))
}
{
return ff_core_Try.Try_grab(self_)
}
}
}

export async function Try_finally$(self_, body_, $task) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
(await body_($task));
return value_
}
{
(await body_($task));
return ff_core_Try.Try_grab(self_)
}
}
}

export async function Try_tryCatch$(self_, body_, ff_core_Any_HasAnyTag$E, $task) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
const _guard1 = ff_core_Option.Option_flatMap(ff_core_Error.Error_exception(error_), ((any_) => {
return ff_core_Any.fromAny_(any_, ff_core_Any_HasAnyTag$E)
}));
if(_guard1.Some) {
const e_ = _guard1.value_;
return (await ff_core_Core.try_$((async ($task) => {
return (await body_(e_, error_, $task))
}), $task))
return
}
}
{
return self_
}
}
}

export async function Try_tryCatchAny$(self_, body_, $task) {
{
const _1 = self_;
if(_1.Failure) {
const error_ = _1.error_;
return (await ff_core_Core.try_$((async ($task) => {
return (await body_(error_, $task))
}), $task))
return
}
{
return self_
}
}
}

export async function Try_tryFinally$(self_, body_, $task) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return (await ff_core_Core.try_$((async ($task) => {
(await body_($task));
return value_
}), $task))
return
}
{
{
const _1 = (await ff_core_Core.try_$((async ($task) => {
return (await body_($task))
}), $task));
if(_1.Success) {
return self_
}
{
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
}
}
return
}
}
}

export async function Try_else$(self_, body_, $task) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return value_
}
{
return (await body_($task))
}
}
}

export async function Try_grab$(self_, $task) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return value_
}
{
const error_ = _1.error_;
return ff_core_Error.Error_rethrow(error_)
}
}
}

export async function Try_toOption$(self_, $task) {
{
const _1 = self_;
if(_1.Success) {
const value_ = _1.value_;
return ff_core_Option.Some(value_)
}
{
return ff_core_Option.None()
}
}
}

export function Try_flatten(self_) {
{
const _1 = self_;
if(_1.Success && _1.value_.Success) {
const t_ = _1.value_;
return t_
}
if(_1.Success && _1.value_.Failure) {
const t_ = _1.value_;
return t_
}
{
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
}
}
}

export async function Try_flatten$(self_, $task) {
{
const _1 = self_;
if(_1.Success && _1.value_.Success) {
const t_ = _1.value_;
return t_
}
if(_1.Success && _1.value_.Failure) {
const t_ = _1.value_;
return t_
}
{
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
}
}
}


//# sourceMappingURL=Try.mjs.map