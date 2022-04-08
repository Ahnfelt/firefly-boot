

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

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

// type Pair
export function Pair(first_, second_) {
return {first_, second_};
}







export function Pair_mapFirst(self_, body_) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair(body_(self_.first_), _c.second_)
return
}
}
}

export function Pair_mapSecond(self_, body_) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair(_c.first_, body_(self_.second_))
return
}
}
}

export function Pair_swap(self_) {
return ff_core_Pair.Pair(self_.second_, self_.first_)
}

export async function Pair_mapFirst$(self_, body_, $c) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair((await body_(self_.first_, $c)), _c.second_)
return
}
}
}

export async function Pair_mapSecond$(self_, body_, $c) {
{
const _1 = self_;
{
const _c = _1;
return ff_core_Pair.Pair(_c.first_, (await body_(self_.second_, $c)))
return
}
}
}

export async function Pair_swap$(self_, $c) {
return ff_core_Pair.Pair(self_.second_, self_.first_)
}




