

import * as ff_compiler_ModuleCache from "../../ff/compiler/ModuleCache.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

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

// type ModuleCache
export function ModuleCache(version_, parsedModules_, resolvedModules_, derivedModules_, inferredModules_, emittedModules_) {
return {version_, parsedModules_, resolvedModules_, derivedModules_, inferredModules_, emittedModules_};
}



export function new_(version_) {
return ff_compiler_ModuleCache.ModuleCache(version_, ff_core_Map.new_(), ff_core_Map.new_(), ff_core_Map.new_(), ff_core_Map.new_(), ff_core_Map.new_())
}

export function mergeVersionedMap_(oldMap_, newMap_, getVersion_) {
let result_ = newMap_;
ff_core_Map.Map_each(oldMap_, ((k_, v_) => {
if((!ff_core_Option.Option_any(ff_core_Map.Map_get(newMap_, k_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return (getVersion_(_w1) >= getVersion_(v_))
})))) {
result_ = ff_core_Map.Map_add(result_, k_, v_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}

export function modulePath_(packagePaths_, packagePair_, moduleName_) {
const packagePath_ = ff_core_Option.Option_else(ff_core_Map.Map_get(packagePaths_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (() => {
return ff_core_Core.panic_(("Internal error - package path missing: " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}));
const file_ = (moduleName_ + ".ff");
return ff_core_Path.Path_slash(packagePath_, file_)
}

export async function new_$(version_, $task) {
return ff_compiler_ModuleCache.ModuleCache(version_, ff_core_Map.new_(), ff_core_Map.new_(), ff_core_Map.new_(), ff_core_Map.new_(), ff_core_Map.new_())
}

export async function mergeVersionedMap_$(oldMap_, newMap_, getVersion_, $task) {
let result_ = newMap_;
(await ff_core_Map.Map_each$(oldMap_, (async (k_, v_, $task) => {
if((!(await ff_core_Option.Option_any$(ff_core_Map.Map_get(newMap_, k_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async (_w1, $task) => {
return ((await getVersion_(_w1, $task)) >= (await getVersion_(v_, $task)))
}), $task)))) {
result_ = ff_core_Map.Map_add(result_, k_, v_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, $task));
return result_
}

export async function modulePath_$(packagePaths_, packagePair_, moduleName_, $task) {
const packagePath_ = ff_core_Option.Option_else(ff_core_Map.Map_get(packagePaths_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (() => {
return ff_core_Core.panic_(("Internal error - package path missing: " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}));
const file_ = (moduleName_ + ".ff");
return (await ff_core_Path.Path_slash$(packagePath_, file_, $task))
}

export function ModuleCache_remove(self_, keys_) {
if((!ff_core_List.List_isEmpty(keys_))) {
self_.parsedModules_ = ff_core_Map.Map_removeList(self_.parsedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.resolvedModules_ = ff_core_Map.Map_removeList(self_.resolvedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.derivedModules_ = ff_core_Map.Map_removeList(self_.derivedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.inferredModules_ = ff_core_Map.Map_removeList(self_.inferredModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.emittedModules_ = ff_core_Map.Map_removeList(self_.emittedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}

export function ModuleCache_invalidate(self_, key_) {
ff_core_Option.Option_each(ff_core_Map.Map_get(self_.parsedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const module_ = _1.first_;
const moduleName_ = ff_core_String.String_dropLast(module_.file_, 3);
ff_compiler_ModuleCache.ModuleCache_remove(self_, [key_]);
ff_core_Map.Map_each(self_.parsedModules_, ((_1, _2) => {
{
const k_ = _1;
const m_ = _2.first_;
if(ff_core_List.List_any(m_.imports_, ((i_) => {
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(i_.package_, module_.packagePair_) && (i_.file_ === moduleName_))
}))) {
ff_compiler_ModuleCache.ModuleCache_remove(self_, [k_])
}
return
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
return
}
}))
}

export function ModuleCache_filesNotImporting(self_, packagePair_, moduleName_) {
return ff_core_List.List_collect(ff_core_Map.Map_toList(self_.parsedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const k_ = _1.first_;
const m_ = _1.second_.first_;
if((!ff_core_List.List_any(m_.imports_, ((i_) => {
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(i_.package_, packagePair_) && (i_.file_ === moduleName_))
})))) {
return ff_core_Option.Some(k_)
} else return ff_core_Option.None()
return
}
}))
}

export function ModuleCache_without(self_, newVersion_, path_) {
const key_ = ff_core_Path.Path_absolute(path_);
if(ff_core_Path.Path_isFile(path_)) {
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_ModuleCache.ModuleCache(newVersion_, ff_core_Map.Map_remove(self_.parsedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.resolvedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.derivedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.inferredModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.emittedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}
}
} else {
function invalidated_(p_) {
return ((ff_core_String.String_startsWith(p_, key_, 0) && (!ff_core_String.String_contains(p_, ".firefly/dependencies"))) && (!ff_core_String.String_contains(p_, ".firefly\\dependencies")))
}
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_ModuleCache.ModuleCache(newVersion_, ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.parsedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.resolvedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.derivedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.inferredModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.emittedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
return
}
}
}
}

export function ModuleCache_mergeVersions(self_, cache_) {
self_.parsedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.parsedModules_, cache_.parsedModules_, ((_w1) => {
return _w1.second_
}));
self_.resolvedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.resolvedModules_, cache_.resolvedModules_, ((_w1) => {
return _w1.second_
}));
self_.derivedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.derivedModules_, cache_.derivedModules_, ((_w1) => {
return _w1.second_
}));
self_.inferredModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.inferredModules_, cache_.inferredModules_, ((_w1) => {
return _w1.second_
}));
self_.emittedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.emittedModules_, cache_.emittedModules_, ((_w1) => {
return _w1
}))
}

export function ModuleCache_cacheParsedModule(self_, packagePaths_, packagePair_, moduleName_, body_) {
const path_ = ff_compiler_ModuleCache.modulePath_(packagePaths_, packagePair_, moduleName_);
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.parsedModules_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (() => {
const result_ = body_(path_);
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, ff_core_Path.Path_absolute(path_), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}

export function ModuleCache_cacheResolvedModule(self_, packagePaths_, packagePair_, moduleName_, body_) {
const path_ = ff_compiler_ModuleCache.modulePath_(packagePaths_, packagePair_, moduleName_);
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.resolvedModules_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (() => {
const result_ = body_(path_);
self_.resolvedModules_ = ff_core_Map.Map_add(self_.resolvedModules_, ff_core_Path.Path_absolute(path_), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}

export function ModuleCache_cacheDerivedModule(self_, packagePaths_, packagePair_, moduleName_, body_) {
const path_ = ff_compiler_ModuleCache.modulePath_(packagePaths_, packagePair_, moduleName_);
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.derivedModules_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (() => {
const result_ = body_(path_);
self_.derivedModules_ = ff_core_Map.Map_add(self_.derivedModules_, ff_core_Path.Path_absolute(path_), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}

export function ModuleCache_cacheInferredModule(self_, packagePaths_, packagePair_, moduleName_, body_) {
const path_ = ff_compiler_ModuleCache.modulePath_(packagePaths_, packagePair_, moduleName_);
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.inferredModules_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (() => {
const result_ = body_(path_);
self_.inferredModules_ = ff_core_Map.Map_add(self_.inferredModules_, ff_core_Path.Path_absolute(path_), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}

export function ModuleCache_cacheEmittedModule(self_, packagePaths_, packagePair_, moduleName_, body_) {
const path_ = ff_compiler_ModuleCache.modulePath_(packagePaths_, packagePair_, moduleName_);
if((!ff_core_Map.Map_contains(self_.emittedModules_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) {
self_.emittedModules_ = ff_core_Map.Map_add(self_.emittedModules_, ff_core_Path.Path_absolute(path_), self_.version_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
try {
body_(path_)
} catch(error_) {
self_.emittedModules_ = ff_core_Map.Map_remove(self_.emittedModules_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
ff_core_Error.Error_rethrow(error_)
}
}
}

export async function ModuleCache_remove$(self_, keys_, $task) {
if((!ff_core_List.List_isEmpty(keys_))) {
self_.parsedModules_ = ff_core_Map.Map_removeList(self_.parsedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.resolvedModules_ = ff_core_Map.Map_removeList(self_.resolvedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.derivedModules_ = ff_core_Map.Map_removeList(self_.derivedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.inferredModules_ = ff_core_Map.Map_removeList(self_.inferredModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
self_.emittedModules_ = ff_core_Map.Map_removeList(self_.emittedModules_, keys_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}

export async function ModuleCache_invalidate$(self_, key_, $task) {
ff_core_Option.Option_each(ff_core_Map.Map_get(self_.parsedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const module_ = _1.first_;
const moduleName_ = ff_core_String.String_dropLast(module_.file_, 3);
ff_compiler_ModuleCache.ModuleCache_remove(self_, [key_]);
ff_core_Map.Map_each(self_.parsedModules_, ((_1, _2) => {
{
const k_ = _1;
const m_ = _2.first_;
if(ff_core_List.List_any(m_.imports_, ((i_) => {
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(i_.package_, module_.packagePair_) && (i_.file_ === moduleName_))
}))) {
ff_compiler_ModuleCache.ModuleCache_remove(self_, [k_])
}
return
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
return
}
}))
}

export async function ModuleCache_filesNotImporting$(self_, packagePair_, moduleName_, $task) {
return ff_core_List.List_collect(ff_core_Map.Map_toList(self_.parsedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const k_ = _1.first_;
const m_ = _1.second_.first_;
if((!ff_core_List.List_any(m_.imports_, ((i_) => {
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(i_.package_, packagePair_) && (i_.file_ === moduleName_))
})))) {
return ff_core_Option.Some(k_)
} else return ff_core_Option.None()
return
}
}))
}

export async function ModuleCache_without$(self_, newVersion_, path_, $task) {
const key_ = (await ff_core_Path.Path_absolute$(path_, $task));
if((await ff_core_Path.Path_isFile$(path_, $task))) {
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_ModuleCache.ModuleCache(newVersion_, ff_core_Map.Map_remove(self_.parsedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.resolvedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.derivedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.inferredModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_remove(self_.emittedModules_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}
}
} else {
function invalidated_(p_) {
return ((ff_core_String.String_startsWith(p_, key_, 0) && (!ff_core_String.String_contains(p_, ".firefly/dependencies"))) && (!ff_core_String.String_contains(p_, ".firefly\\dependencies")))
}
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_ModuleCache.ModuleCache(newVersion_, ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.parsedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.resolvedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.derivedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.inferredModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_filter(ff_core_Map.Map_toList(self_.emittedModules_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const p_ = _1.first_;
return (!invalidated_(p_))
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
return
}
}
}
}

export async function ModuleCache_mergeVersions$(self_, cache_, $task) {
self_.parsedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.parsedModules_, cache_.parsedModules_, ((_w1) => {
return _w1.second_
}));
self_.resolvedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.resolvedModules_, cache_.resolvedModules_, ((_w1) => {
return _w1.second_
}));
self_.derivedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.derivedModules_, cache_.derivedModules_, ((_w1) => {
return _w1.second_
}));
self_.inferredModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.inferredModules_, cache_.inferredModules_, ((_w1) => {
return _w1.second_
}));
self_.emittedModules_ = ff_compiler_ModuleCache.mergeVersionedMap_(self_.emittedModules_, cache_.emittedModules_, ((_w1) => {
return _w1
}))
}

export async function ModuleCache_cacheParsedModule$(self_, packagePaths_, packagePair_, moduleName_, body_, $task) {
const path_ = (await ff_compiler_ModuleCache.modulePath_$(packagePaths_, packagePair_, moduleName_, $task));
return (await ff_core_Option.Option_else$(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.parsedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (async ($task) => {
const result_ = (await body_(path_, $task));
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $task))
}

export async function ModuleCache_cacheResolvedModule$(self_, packagePaths_, packagePair_, moduleName_, body_, $task) {
const path_ = (await ff_compiler_ModuleCache.modulePath_$(packagePaths_, packagePair_, moduleName_, $task));
return (await ff_core_Option.Option_else$(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.resolvedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (async ($task) => {
const result_ = (await body_(path_, $task));
self_.resolvedModules_ = ff_core_Map.Map_add(self_.resolvedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $task))
}

export async function ModuleCache_cacheDerivedModule$(self_, packagePaths_, packagePair_, moduleName_, body_, $task) {
const path_ = (await ff_compiler_ModuleCache.modulePath_$(packagePaths_, packagePair_, moduleName_, $task));
return (await ff_core_Option.Option_else$(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.derivedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (async ($task) => {
const result_ = (await body_(path_, $task));
self_.derivedModules_ = ff_core_Map.Map_add(self_.derivedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $task))
}

export async function ModuleCache_cacheInferredModule$(self_, packagePaths_, packagePair_, moduleName_, body_, $task) {
const path_ = (await ff_compiler_ModuleCache.modulePath_$(packagePaths_, packagePair_, moduleName_, $task));
return (await ff_core_Option.Option_else$(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.inferredModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return _w1.first_
})), (async ($task) => {
const result_ = (await body_(path_, $task));
self_.inferredModules_ = ff_core_Map.Map_add(self_.inferredModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Pair.Pair(result_, self_.version_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $task))
}

export async function ModuleCache_cacheEmittedModule$(self_, packagePaths_, packagePair_, moduleName_, body_, $task) {
const path_ = (await ff_compiler_ModuleCache.modulePath_$(packagePaths_, packagePair_, moduleName_, $task));
if((!ff_core_Map.Map_contains(self_.emittedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) {
self_.emittedModules_ = ff_core_Map.Map_add(self_.emittedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), self_.version_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
try {
(await body_(path_, $task))
} catch(error_) {
self_.emittedModules_ = ff_core_Map.Map_remove(self_.emittedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
ff_core_Error.Error_rethrow(error_)
}
}
}




