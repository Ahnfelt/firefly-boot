

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

// type ModuleCache
export function ModuleCache(parsedModules_, resolvedModules_, derivedModules_, inferredModules_, emittedModules_) {
return {parsedModules_, resolvedModules_, derivedModules_, inferredModules_, emittedModules_};
}



export function empty_() {
return ff_compiler_ModuleCache.ModuleCache(ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Set.empty_())
}

export async function empty_$($task) {
return ff_compiler_ModuleCache.ModuleCache(ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Map.empty_(), ff_core_Set.empty_())
}

export function ModuleCache_cacheParsedModule(self_, packagePaths_, packagePair_, moduleName_, body_) {
const packagePath_ = ff_core_Option.Option_else(ff_core_Map.Map_get(packagePaths_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (() => {
return ff_core_Core.panic_(("Internal error - package path missing: " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}));
const file_ = (moduleName_ + ".ff");
const path_ = ff_core_Path.Path_slash(packagePath_, file_);
return ff_core_Option.Option_else(ff_core_Map.Map_get(self_.parsedModules_, ff_core_Path.Path_absolute(path_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
const result_ = body_(path_);
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, ff_core_Path.Path_absolute(path_), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}))
}

export async function ModuleCache_cacheParsedModule$(self_, packagePaths_, packagePair_, moduleName_, body_, $task) {
const packagePath_ = ff_core_Option.Option_else(ff_core_Map.Map_get(packagePaths_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (() => {
return ff_core_Core.panic_(("Internal error - package path missing: " + ff_compiler_Syntax.PackagePair_groupName(packagePair_, ":")))
}));
const file_ = (moduleName_ + ".ff");
const path_ = (await ff_core_Path.Path_slash$(packagePath_, file_, $task));
return (await ff_core_Option.Option_else$(ff_core_Map.Map_get(self_.parsedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async ($task) => {
const result_ = (await body_(path_, $task));
self_.parsedModules_ = ff_core_Map.Map_add(self_.parsedModules_, (await ff_core_Path.Path_absolute$(path_, $task)), result_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return result_
}), $task))
}




