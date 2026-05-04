import * as ff_compiler_Bridge from "../../ff/compiler/Bridge.mjs"

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_ModuleCache from "../../ff/compiler/ModuleCache.mjs"

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

import * as import$0 from 'esbuild';
import * as import$1 from 'path';
import * as ff_core_Unit from "../../ff/core/Unit.mjs"

export function setGlobalBridge_(nodeSystem_) {
ff_core_JsSystem.JsSystem_globalThis(globalThis)["$firefly_bridge"] = ff_core_BuildSystem.BuildSystemBridge(((_w1, _w2) => {
ff_compiler_Bridge.internalCompile_(nodeSystem_, _w1, _w2)
}), ((_w1, _w2, _w3, _w4) => {
ff_compiler_Bridge.internalBrowserCallEsBuild_(nodeSystem_, _w1, _w2, _w3, _w4)
}))
}

export function internalCompile_(nodeSystem_, mainFiles_, target_) {
ff_compiler_Builder.buildViaBuildSystem_(nodeSystem_, ff_compiler_Bridge.internalPath_(nodeSystem_, nodeSystem_["fireflyPath_"]), mainFiles_, target_, ff_compiler_ModuleCache.new_(0), false)
}

export function internalBrowserCallEsBuild_(nodeSystem_, mainJsFiles_, outputPath_, minify_, sourceMap_) {
const esbuild_ = import$0;
esbuild_.build({entryPoints: mainJsFiles_, bundle: true, minify: minify_, sourcemap: sourceMap_, platform: "browser", target: "es2017", outdir: outputPath_, outExtension: {[".js"]: ".bundle.js"}})
}

export function internalNodeCallEsBuild_(self_, mainJsFile_, outputPath_, minify_) {
const esbuild_ = import$0;
esbuild_.build({entryPoints: [mainJsFile_], bundle: true, minify: minify_, sourcemap: true, platform: "node", target: "es2017", external: ["esbuild", "uws.js"], loader: {[".node"]: "copy"}, outdir: outputPath_})
}

export function internalNodeCallEsBuildContext_(self_, mainJsFile_, outputPath_, minify_) {
const esbuild_ = import$0;
return esbuild_.context({entryPoints: [mainJsFile_], bundle: true, minify: minify_, sourcemap: true, platform: "node", target: "es2017", external: ["esbuild", "uws.js"], loader: {[".node"]: "copy"}, outfile: outputPath_})
}

export function internalPath_(nodeSystem_, absoluteOrRelative_) {
const nodePath_ = import$1;
return ff_core_Path.Path(nodePath_.resolve(absoluteOrRelative_))
}

export function internalListPath_(path_) {
return ff_core_Stream.Stream_flatMap(ff_core_Path.Path_entries(path_), ((file_) => {
if(ff_core_Path.PathEntry_isDirectory(file_)) {
return ff_compiler_Bridge.internalListPath_(ff_core_Path.PathEntry_path(file_))
} else {
return ff_core_List.List_toStream([ff_core_Path.PathEntry_path(file_)], false)
}
}))
}

export function internalListDirectory_(path_) {
function go_(currentPath_) {
return ff_core_Stream.Stream_flatMap(ff_core_Path.Path_entries(currentPath_), ((file_) => {
if(ff_core_Path.PathEntry_isDirectory(file_)) {
return go_(ff_core_Path.PathEntry_path(file_))
} else {
return ff_core_List.List_toStream([ff_core_Path.PathEntry_path(file_)], false)
}
}))
}
return ff_core_Stream.Stream_toList(ff_core_Stream.Stream_map(go_(path_), ((file_) => {
return ff_core_Pair.Pair(("/" + ff_core_String.String_replace(ff_core_Path.Path_relativeTo(file_, path_), "\\", "/")), (() => {
return ff_core_Path.Path_readStream(file_)
}))
})))
}

export function internalMainPackagePair_(buildSystem_) {
return ff_core_Pair.Pair(buildSystem_["mainPackagePair_"]["group_"], buildSystem_["mainPackagePair_"]["name_"])
}

export async function setGlobalBridge_$(nodeSystem_, $task) {
ff_core_JsSystem.JsSystem_globalThis(globalThis)["$firefly_bridge"] = ff_core_BuildSystem.BuildSystemBridge((async (_w1, _w2, $task) => {
(await ff_compiler_Bridge.internalCompile_$(nodeSystem_, _w1, _w2, $task))
}), (async (_w1, _w2, _w3, _w4, $task) => {
(await ff_compiler_Bridge.internalBrowserCallEsBuild_$(nodeSystem_, _w1, _w2, _w3, _w4, $task))
}))
}

export async function internalCompile_$(nodeSystem_, mainFiles_, target_, $task) {
(await ff_compiler_Builder.buildViaBuildSystem_$(nodeSystem_, (await ff_compiler_Bridge.internalPath_$(nodeSystem_, nodeSystem_["fireflyPath_"], $task)), mainFiles_, target_, ff_compiler_ModuleCache.new_(0), false, $task))
}

export async function internalBrowserCallEsBuild_$(nodeSystem_, mainJsFiles_, outputPath_, minify_, sourceMap_, $task) {
const esbuild_ = import$0;
(await esbuild_.build({entryPoints: mainJsFiles_, bundle: true, minify: minify_, sourcemap: sourceMap_, platform: "browser", target: "es2017", outdir: outputPath_, outExtension: {[".js"]: ".bundle.js"}}))
}

export async function internalNodeCallEsBuild_$(self_, mainJsFile_, outputPath_, minify_, $task) {
const esbuild_ = import$0;
(await esbuild_.build({entryPoints: [mainJsFile_], bundle: true, minify: minify_, sourcemap: true, platform: "node", target: "es2017", external: ["esbuild", "uws.js"], loader: {[".node"]: "copy"}, outdir: outputPath_}))
}

export async function internalNodeCallEsBuildContext_$(self_, mainJsFile_, outputPath_, minify_, $task) {
const esbuild_ = import$0;
return (await esbuild_.context({entryPoints: [mainJsFile_], bundle: true, minify: minify_, sourcemap: true, platform: "node", target: "es2017", external: ["esbuild", "uws.js"], loader: {[".node"]: "copy"}, outfile: outputPath_}))
}

export async function internalPath_$(nodeSystem_, absoluteOrRelative_, $task) {
const nodePath_ = import$1;
return ff_core_Path.Path(nodePath_.resolve(absoluteOrRelative_))
}

export async function internalListPath_$(path_, $task) {
return (await ff_core_Stream.Stream_flatMap$((await ff_core_Path.Path_entries$(path_, $task)), (async (file_, $task) => {
if((await ff_core_Path.PathEntry_isDirectory$(file_, $task))) {
return (await ff_compiler_Bridge.internalListPath_$((await ff_core_Path.PathEntry_path$(file_, $task)), $task))
} else {
return (await ff_core_List.List_toStream$([(await ff_core_Path.PathEntry_path$(file_, $task))], false, $task))
}
}), $task))
}

export async function internalListDirectory_$(path_, $task) {
async function go_$(currentPath_, $task) {
return (await ff_core_Stream.Stream_flatMap$((await ff_core_Path.Path_entries$(currentPath_, $task)), (async (file_, $task) => {
if((await ff_core_Path.PathEntry_isDirectory$(file_, $task))) {
return (await go_$((await ff_core_Path.PathEntry_path$(file_, $task)), $task))
} else {
return (await ff_core_List.List_toStream$([(await ff_core_Path.PathEntry_path$(file_, $task))], false, $task))
}
}), $task))
}
return (await ff_core_Stream.Stream_toList$((await ff_core_Stream.Stream_map$((await go_$(path_, $task)), (async (file_, $task) => {
return ff_core_Pair.Pair(("/" + ff_core_String.String_replace((await ff_core_Path.Path_relativeTo$(file_, path_, $task)), "\\", "/")), (async ($task) => {
return (await ff_core_Path.Path_readStream$(file_, $task))
}))
}), $task)), $task))
}

export async function internalMainPackagePair_$(buildSystem_, $task) {
return ff_core_Pair.Pair(buildSystem_["mainPackagePair_"]["group_"], buildSystem_["mainPackagePair_"]["name_"])
}


//# sourceMappingURL=Bridge.mjs.map