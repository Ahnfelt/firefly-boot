

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

// type AssetSystem
export function AssetSystem(files_) {
return {files_};
}



export function create_() {
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function create_$($task) {
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function AssetSystem_addAssets(self_, path_, assets_) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? ff_core_String.String_dropLast(path_, 1)
: path_);
return ff_core_AssetSystem.AssetSystem(ff_core_Map.Map_addAll(self_.files_, ff_core_Map.Map_map(assets_.files_, ((p_, stream_) => {
return ff_core_Pair.Pair((prefix_ + p_), stream_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function AssetSystem_assets(self_, path_) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? path_
: (path_ + "/"));
const streams_ = ff_core_List.List_collect(ff_core_Map.Map_pairs(self_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
const s_ = _1.second_;
if(ff_core_String.String_startsWith(p_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_Pair.Pair(ff_core_String.String_dropFirst(p_, (ff_core_String.String_size(prefix_) - 1)), s_))
}
}
{
return ff_core_Option.None()
}
}));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function AssetSystem_asset(self_, path_) {
const name_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})));
const streams_ = ff_core_List.List_map(ff_core_Option.Option_toList(ff_core_Map.Map_get(self_.files_, path_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)), ((s_) => {
return ff_core_Pair.Pair(("/" + name_), s_)
}));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function AssetSystem_list(self_, path_) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? path_
: (path_ + "/"));
return ff_core_List.List_distinct(ff_core_List.List_collect(ff_core_Map.Map_pairs(self_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
if(ff_core_String.String_startsWith(p_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(p_, ff_core_String.String_size(prefix_)), ((_w1) => {
return (_w1 !== 47)
})))
return
}
}
{
return ff_core_Option.None()
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function AssetSystem_exists(self_, path_) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? path_
: (path_ + "/"));
return (ff_core_Map.Map_contains(self_.files_, path_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || ff_core_List.List_any(ff_core_Map.Map_pairs(self_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return ff_core_String.String_startsWith(_w1.first_, prefix_, 0)
})))
}

export function AssetSystem_readStream(self_, file_) {
const makeStream_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.files_, file_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_core_Core.panic_(("Asset not found for readStream: " + file_))
}));
return makeStream_()
}

export function AssetSystem_readText(self_, file_) {
return ff_core_Stream.Stream_toString(ff_core_AssetSystem.AssetSystem_readStream(self_, file_), "utf8")
}

export async function AssetSystem_addAssets$(self_, path_, assets_, $task) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? ff_core_String.String_dropLast(path_, 1)
: path_);
return ff_core_AssetSystem.AssetSystem(ff_core_Map.Map_addAll(self_.files_, ff_core_Map.Map_map(assets_.files_, ((p_, stream_) => {
return ff_core_Pair.Pair((prefix_ + p_), stream_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function AssetSystem_assets$(self_, path_, $task) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? path_
: (path_ + "/"));
const streams_ = ff_core_List.List_collect(ff_core_Map.Map_pairs(self_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
const s_ = _1.second_;
if(ff_core_String.String_startsWith(p_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_Pair.Pair(ff_core_String.String_dropFirst(p_, (ff_core_String.String_size(prefix_) - 1)), s_))
}
}
{
return ff_core_Option.None()
}
}));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function AssetSystem_asset$(self_, path_, $task) {
const name_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})));
const streams_ = ff_core_List.List_map(ff_core_Option.Option_toList(ff_core_Map.Map_get(self_.files_, path_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)), ((s_) => {
return ff_core_Pair.Pair(("/" + name_), s_)
}));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function AssetSystem_list$(self_, path_, $task) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? path_
: (path_ + "/"));
return ff_core_List.List_distinct(ff_core_List.List_collect(ff_core_Map.Map_pairs(self_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
if(ff_core_String.String_startsWith(p_, prefix_, 0)) {
return ff_core_Option.Some(ff_core_String.String_takeWhile(ff_core_String.String_dropFirst(p_, ff_core_String.String_size(prefix_)), ((_w1) => {
return (_w1 !== 47)
})))
return
}
}
{
return ff_core_Option.None()
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function AssetSystem_exists$(self_, path_, $task) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? path_
: (path_ + "/"));
return (ff_core_Map.Map_contains(self_.files_, path_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) || ff_core_List.List_any(ff_core_Map.Map_pairs(self_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return ff_core_String.String_startsWith(_w1.first_, prefix_, 0)
})))
}

export async function AssetSystem_readStream$(self_, file_, $task) {
const makeStream_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.files_, file_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return ff_core_Core.panic_(("Asset not found for readStream: " + file_))
}));
return (await makeStream_($task))
}

export async function AssetSystem_readText$(self_, file_, $task) {
return (await ff_core_Stream.Stream_toString$((await ff_core_AssetSystem.AssetSystem_readStream$(self_, file_, $task)), "utf8", $task))
}




