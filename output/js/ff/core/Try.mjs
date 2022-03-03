import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Try
export function Success(value_) {
return {Success: true, value_};
}
export function Failure(error_) {
return {Failure: true, error_};
}







export function Try_map(self_, body_) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return ff_core_Core.try_((() => {
return body_(value_)
}))
return
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
return
}
}
}
}

export function Try_flatMap(self_, body_) {
return ff_core_Try.Try_flatten(ff_core_Try.Try_map(self_, body_))
}

export function Try_else(self_, body_) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.Failure) {
return body_()
return
}
}
}
}

export function Try_expect(self_) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Error.Error_rethrow(error_)
return
}
}
}
}

export function Try_catchAny(self_, body_) {
{
const _1 = self_;
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Core.try_((() => {
return body_(error_)
}))
return
}
}
{
return self_
return
}
}
}

export function Try_finally(self_, body_) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return ff_core_Core.try_((() => {
body_();
return value_
}))
return
}
}
{
if(_1.Failure) {
{
const _1 = ff_core_Core.try_((() => {
return body_()
}));
{
if(_1.Success) {
return self_
return
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
return
}
}
}
return
}
}
}
}

export async function Try_map$(self_, body_, $controller) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return (await ff_core_Core.try_$((async ($controller) => {
return (await body_(value_, $controller))
}), $controller))
return
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
return
}
}
}
}

export async function Try_flatMap$(self_, body_, $controller) {
return ff_core_Try.Try_flatten((await ff_core_Try.Try_map$(self_, body_, $controller)))
}

export async function Try_else$(self_, body_, $controller) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.Failure) {
return (await body_($controller))
return
}
}
}
}

export async function Try_expect$(self_, $controller) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return value_
return
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Error.Error_rethrow(error_)
return
}
}
}
}

export async function Try_catchAny$(self_, body_, $controller) {
{
const _1 = self_;
{
if(_1.Failure) {
const error_ = _1.error_;
return (await ff_core_Core.try_$((async ($controller) => {
return (await body_(error_, $controller))
}), $controller))
return
}
}
{
return self_
return
}
}
}

export async function Try_finally$(self_, body_, $controller) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return (await ff_core_Core.try_$((async ($controller) => {
(await body_($controller));
return value_
}), $controller))
return
}
}
{
if(_1.Failure) {
{
const _1 = (await ff_core_Core.try_$((async ($controller) => {
return (await body_($controller))
}), $controller));
{
if(_1.Success) {
return self_
return
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
return
}
}
}
return
}
}
}
}

export function Try_flatten(self_) {
{
const _1 = self_;
{
if(_1.Success) {
const t_ = _1.value_;
if(_1.value_.Success) {
return t_
return
}
}
}
{
if(_1.Success) {
const t_ = _1.value_;
if(_1.value_.Failure) {
return t_
return
}
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
return
}
}
}
}

export async function Try_flatten$(self_, $controller) {
{
const _1 = self_;
{
if(_1.Success) {
const t_ = _1.value_;
if(_1.value_.Success) {
return t_
return
}
}
}
{
if(_1.Success) {
const t_ = _1.value_;
if(_1.value_.Failure) {
return t_
return
}
}
}
{
if(_1.Failure) {
const error_ = _1.error_;
return ff_core_Try.Failure(error_)
return
}
}
}
}




