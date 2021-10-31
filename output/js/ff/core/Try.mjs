import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

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

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Try
export function Success(value_) {
return {Success: true, value_};
}
export function Failure(exception_) {
return {Failure: true, exception_};
}

// type DynamicException






export function DynamicException_rethrow(self_) {
throw self_;
}

export function Try_map(self_, body_) {
{
const _1 = self_
{
if(_1.Success) {
const value_ = _1.value_
return ff_core_Core.try_((() => {
return body_(value_)
}))
return
}
}
{
if(_1.Failure) {
const exception_ = _1.exception_
return ff_core_Try.Failure(exception_)
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
const _1 = self_
{
if(_1.Success) {
const value_ = _1.value_
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
const _1 = self_
{
if(_1.Success) {
const value_ = _1.value_
return value_
return
}
}
{
if(_1.Failure) {
const exception_ = _1.exception_
return ff_core_Try.DynamicException_rethrow(exception_)
return
}
}
}
}

export function Try_finally(self_, body_) {
{
const _1 = self_
{
if(_1.Success) {
const value_ = _1.value_
return ff_core_Core.try_((() => {
body_()
return value_
}))
return
}
}
{
if(_1.Failure) {
body_()
return self_
return
}
}
}
}

export function Try_flatten(self_) {
{
const _1 = self_
{
if(_1.Success) {
const t_ = _1.value_
if(_1.value_.Success) {
return t_
return
}
}
}
{
if(_1.Success) {
const t_ = _1.value_
if(_1.value_.Failure) {
return t_
return
}
}
}
{
if(_1.Failure) {
const e_ = _1.exception_
return ff_core_Try.Failure(e_)
return
}
}
}
}


