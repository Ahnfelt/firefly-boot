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

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

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

// type Iterator
export function Iterator(next_, close_) {
return {next_, close_};
}







export function Iterator_concat(self_, that_) {
return ff_core_Iterator.Iterator((() => {
return ff_core_Option.Option_orElse(self_.next_(), (() => {
return that_.next_()
}))
}), (() => {
ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return self_.close_()
})), (() => {
that_.close_()
})))
}))
}

export function Iterator_use(self_, body_) {
return ff_core_Try.Try_expect(ff_core_Try.Try_finally(ff_core_Core.try_((() => {
return body_(self_)
})), (() => {
self_.close_()
})))
}

export async function Iterator_concat$(self_, that_, $c) {
return ff_core_Iterator.Iterator((async ($c) => {
return (await ff_core_Option.Option_orElse$((await self_.next_($c)), (async ($c) => {
return (await that_.next_($c))
}), $c))
}), (async ($c) => {
ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await self_.close_($c))
}), $c)), (async ($c) => {
(await that_.close_($c))
}), $c)))
}))
}

export async function Iterator_use$(self_, body_, $c) {
return ff_core_Try.Try_expect((await ff_core_Try.Try_finally$((await ff_core_Core.try_$((async ($c) => {
return (await body_(self_, $c))
}), $c)), (async ($c) => {
(await self_.close_($c))
}), $c)))
}




