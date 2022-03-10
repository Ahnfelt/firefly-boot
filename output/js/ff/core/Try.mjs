import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

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

export function Try_onThrow(self_, body_) {
{
const _1 = self_;
{
if(_1.Failure) {
const error_ = _1.error_;
ff_core_Core.try_((() => {
return body_()
}));
return self_
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

export async function Try_map$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return (await ff_core_Core.try_$((async ($c) => {
return (await body_(value_, $c))
}), $c))
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

export async function Try_flatMap$(self_, body_, $c) {
return ff_core_Try.Try_flatten((await ff_core_Try.Try_map$(self_, body_, $c)))
}

export async function Try_else$(self_, body_, $c) {
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
return (await body_($c))
return
}
}
}
}

export async function Try_expect$(self_, $c) {
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

export async function Try_catchAny$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.Failure) {
const error_ = _1.error_;
return (await ff_core_Core.try_$((async ($c) => {
return (await body_(error_, $c))
}), $c))
return
}
}
{
return self_
return
}
}
}

export async function Try_onThrow$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.Failure) {
const error_ = _1.error_;
(await ff_core_Core.try_$((async ($c) => {
return (await body_($c))
}), $c));
return self_
return
}
}
{
return self_
return
}
}
}

export async function Try_finally$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.Success) {
const value_ = _1.value_;
return (await ff_core_Core.try_$((async ($c) => {
(await body_($c));
return value_
}), $c))
return
}
}
{
if(_1.Failure) {
{
const _1 = (await ff_core_Core.try_$((async ($c) => {
return (await body_($c))
}), $c));
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

export async function Try_flatten$(self_, $c) {
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




