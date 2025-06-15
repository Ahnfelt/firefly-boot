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

// type BuildSystem


export function internalBrowserCallEsBuild_(self_, mainJsFiles_, outputPath_, minify_, sourceMap_) {
const esbuild_ = import$0;
esbuild_.build({entryPoints: mainJsFiles_, bundle: true, minify: minify_, sourcemap: sourceMap_, platform: "browser", target: "es2017", outdir: outputPath_, outExtension: {[".js"]: ".bundle.js"}})
}

export function internalNodeCallEsBuild_(self_, mainJsFile_, outputPath_, minify_) {
const esbuild_ = import$0;
esbuild_.build({entryPoints: [mainJsFile_], bundle: true, minify: minify_, sourcemap: true, platform: "node", target: "es2017", external: ["../../../node_modules/*"], outfile: outputPath_})
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

export function internalListPath_(path_) {
return ff_core_Stream.Stream_flatMap(ff_core_Path.Path_entries(path_), ((file_) => {
if(ff_core_Path.PathEntry_isDirectory(file_)) {
return ff_core_BuildSystem.internalListPath_(ff_core_Path.PathEntry_path(file_))
} else {
return ff_core_List.List_toStream([ff_core_Path.PathEntry_path(file_)], false)
}
}))
}

export function internalPath_(buildSystem_, absoluteOrRelative_) {
const nodePath_ = import$1;
return ff_core_Path.Path(nodePath_.resolve(absoluteOrRelative_))
}

export function internalCompile_(buildSystem_, mainFiles_, target_) {
$firefly_compiler["buildViaBuildSystem_$"](buildSystem_, ff_core_BuildSystem.internalPath_(buildSystem_, buildSystem_["fireflyPath_"]), mainFiles_, target_, $task)
}

export function internalMainPackagePair_(buildSystem_) {
return ff_core_Pair.Pair(buildSystem_["mainPackagePair_"]["group_"], buildSystem_["mainPackagePair_"]["name_"])
}

export async function internalBrowserCallEsBuild_$(self_, mainJsFiles_, outputPath_, minify_, sourceMap_, $task) {
const esbuild_ = import$0;
(await esbuild_.build({entryPoints: mainJsFiles_, bundle: true, minify: minify_, sourcemap: sourceMap_, platform: "browser", target: "es2017", outdir: outputPath_, outExtension: {[".js"]: ".bundle.js"}}))
}

export async function internalNodeCallEsBuild_$(self_, mainJsFile_, outputPath_, minify_, $task) {
const esbuild_ = import$0;
esbuild_.build({entryPoints: [mainJsFile_], bundle: true, minify: minify_, sourcemap: true, platform: "node", target: "es2017", external: ["../../../node_modules/*"], outfile: outputPath_})
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

export async function internalListPath_$(path_, $task) {
return (await ff_core_Stream.Stream_flatMap$((await ff_core_Path.Path_entries$(path_, $task)), (async (file_, $task) => {
if((await ff_core_Path.PathEntry_isDirectory$(file_, $task))) {
return (await ff_core_BuildSystem.internalListPath_$((await ff_core_Path.PathEntry_path$(file_, $task)), $task))
} else {
return (await ff_core_List.List_toStream$([(await ff_core_Path.PathEntry_path$(file_, $task))], false, $task))
}
}), $task))
}

export async function internalPath_$(buildSystem_, absoluteOrRelative_, $task) {
const nodePath_ = import$1;
return ff_core_Path.Path(nodePath_.resolve(absoluteOrRelative_))
}

export async function internalCompile_$(buildSystem_, mainFiles_, target_, $task) {
(await $firefly_compiler["buildViaBuildSystem_$"](buildSystem_, (await ff_core_BuildSystem.internalPath_$(buildSystem_, buildSystem_["fireflyPath_"], $task)), mainFiles_, target_, $task))
}

export async function internalMainPackagePair_$(buildSystem_, $task) {
return ff_core_Pair.Pair(buildSystem_["mainPackagePair_"]["group_"], buildSystem_["mainPackagePair_"]["name_"])
}

export function BuildSystem_compileForBrowser(self_, mainFiles_) {
ff_core_BuildSystem.internalCompile_(self_, ff_core_List.List_map(mainFiles_, ((_w1) => {
return ff_core_BuildSystem.internalPath_(self_, _w1)
})), "browser");
const streams_ = ff_core_BuildSystem.internalListDirectory_(ff_core_BuildSystem.internalPath_(self_, ".firefly/output/browser"));
const mainPackagePair_ = ff_core_BuildSystem.internalMainPackagePair_(self_);
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function BuildSystem_bundleForBrowser(self_, mainFiles_, minify_ = true, sourceMaps_ = false) {
ff_core_BuildSystem.internalCompile_(self_, ff_core_List.List_map(mainFiles_, ((_w1) => {
return ff_core_BuildSystem.internalPath_(self_, _w1)
})), "browser");
const browserOutputPath_ = ff_core_BuildSystem.internalPath_(self_, ".firefly/output/browser");
const runPaths_ = ff_core_Stream.Stream_toList(ff_core_Stream.Stream_filter(ff_core_BuildSystem.internalListPath_(browserOutputPath_), ((_w1) => {
return ff_core_String.String_endsWith(ff_core_Path.Path_base(_w1), ".run.mjs")
})));
const outputPath_ = ff_core_Option.Option_grab(ff_core_Path.Path_parent(ff_core_List.List_grabFirst(runPaths_)));
ff_core_BuildSystem.internalBrowserCallEsBuild_(self_, ff_core_List.List_map(runPaths_, ((_w1) => {
return ff_core_Path.Path_absolute(_w1)
})), ff_core_Path.Path_absolute(outputPath_), minify_, sourceMaps_);
const bundlePaths_ = ff_core_Stream.Stream_toList(ff_core_Stream.Stream_filter(ff_core_BuildSystem.internalListPath_(browserOutputPath_), ((p_) => {
return (ff_core_String.String_endsWith(ff_core_Path.Path_base(p_), ".bundle.js") || ff_core_String.String_endsWith(ff_core_Path.Path_base(p_), ".bundle.js.map"))
})));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(ff_core_List.List_map(bundlePaths_, ((p_) => {
return ff_core_Pair.Pair(("/" + ff_core_String.String_replace(ff_core_Path.Path_relativeTo(p_, browserOutputPath_), "\\", "/")), (() => {
return ff_core_Path.Path_readStream(p_)
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function BuildSystem_buildMode(self_) {
return (!(!self_["buildMode_"]))
}

export function BuildSystem_setAssets(self_, assetSystem_) {
self_["assets_"] = assetSystem_
}

export function BuildSystem_packageAssets(self_) {
const streams_ = ff_core_BuildSystem.internalListDirectory_(ff_core_BuildSystem.internalPath_(self_, "."));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function BuildSystem_dependencyAssets(self_, user_, package_) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export function BuildSystem_arguments(self_) {
return self_["array_"]
}

export function BuildSystem_mainTask(self_) {
return self_["task_"]
}

export function BuildSystem_crypto(self_) {
return crypto
}

export async function BuildSystem_compileForBrowser$(self_, mainFiles_, $task) {
(await ff_core_BuildSystem.internalCompile_$(self_, (await ff_core_List.List_map$(mainFiles_, (async (_w1, $task) => {
return (await ff_core_BuildSystem.internalPath_$(self_, _w1, $task))
}), $task)), "browser", $task));
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$((await ff_core_BuildSystem.internalPath_$(self_, ".firefly/output/browser", $task)), $task));
const mainPackagePair_ = (await ff_core_BuildSystem.internalMainPackagePair_$(self_, $task));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function BuildSystem_bundleForBrowser$(self_, mainFiles_, minify_ = true, sourceMaps_ = false, $task) {
(await ff_core_BuildSystem.internalCompile_$(self_, (await ff_core_List.List_map$(mainFiles_, (async (_w1, $task) => {
return (await ff_core_BuildSystem.internalPath_$(self_, _w1, $task))
}), $task)), "browser", $task));
const browserOutputPath_ = (await ff_core_BuildSystem.internalPath_$(self_, ".firefly/output/browser", $task));
const runPaths_ = (await ff_core_Stream.Stream_toList$((await ff_core_Stream.Stream_filter$((await ff_core_BuildSystem.internalListPath_$(browserOutputPath_, $task)), (async (_w1, $task) => {
return ff_core_String.String_endsWith((await ff_core_Path.Path_base$(_w1, $task)), ".run.mjs")
}), $task)), $task));
const outputPath_ = ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(ff_core_List.List_grabFirst(runPaths_), $task)));
(await ff_core_BuildSystem.internalBrowserCallEsBuild_$(self_, (await ff_core_List.List_map$(runPaths_, (async (_w1, $task) => {
return (await ff_core_Path.Path_absolute$(_w1, $task))
}), $task)), (await ff_core_Path.Path_absolute$(outputPath_, $task)), minify_, sourceMaps_, $task));
const bundlePaths_ = (await ff_core_Stream.Stream_toList$((await ff_core_Stream.Stream_filter$((await ff_core_BuildSystem.internalListPath_$(browserOutputPath_, $task)), (async (p_, $task) => {
return (ff_core_String.String_endsWith((await ff_core_Path.Path_base$(p_, $task)), ".bundle.js") || ff_core_String.String_endsWith((await ff_core_Path.Path_base$(p_, $task)), ".bundle.js.map"))
}), $task)), $task));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap((await ff_core_List.List_map$(bundlePaths_, (async (p_, $task) => {
return ff_core_Pair.Pair(("/" + ff_core_String.String_replace((await ff_core_Path.Path_relativeTo$(p_, browserOutputPath_, $task)), "\\", "/")), (async ($task) => {
return (await ff_core_Path.Path_readStream$(p_, $task))
}))
}), $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function BuildSystem_buildMode$(self_, $task) {
return (!(!self_["buildMode_"]))
}

export async function BuildSystem_setAssets$(self_, assetSystem_, $task) {
self_["assets_"] = assetSystem_
}

export async function BuildSystem_packageAssets$(self_, $task) {
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$((await ff_core_BuildSystem.internalPath_$(self_, ".", $task)), $task));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function BuildSystem_dependencyAssets$(self_, user_, package_, $task) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export async function BuildSystem_arguments$(self_, $task) {
return self_["array_"]
}

export async function BuildSystem_mainTask$(self_, $task) {
return self_["task_"]
}

export async function BuildSystem_crypto$(self_, $task) {
return crypto
}


//# sourceMappingURL=BuildSystem.mjs.map