import * as import$0 from 'esbuild';

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

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type BuildSystem


// type BrowserCode
export function BrowserCode(packageGroup_, packageName_, mainFile_, assetSystem_) {
return {packageGroup_, packageName_, mainFile_, assetSystem_};
}

// type BrowserBundle
export function BrowserBundle(assetSystem_) {
return {assetSystem_};
}



export function internalCallEsBuild_(self_, mainJsFile_, outputPath_, minify_, sourceMap_) {
throw new Error('Function internalCallEsBuild is missing on this target in sync context.');
}

export function internalNodeCallEsBuild_(self_, mainJsFile_, outputPath_, minify_) {
throw new Error('Function internalNodeCallEsBuild is missing on this target in sync context.');
}

export function internalListDirectory_(fs_, path_) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? ff_core_String.String_dropLast(path_, 1)
: path_);
function go_(currentPath_) {
return ff_core_List.List_flatMap(ff_core_FileSystem.FileSystem_list(fs_, currentPath_), ((file_) => {
if(ff_core_FileSystem.FileSystem_isDirectory(fs_, file_)) {
return go_(file_)
} else {
return ff_core_List.Link(file_, ff_core_List.Empty())
}
}))
}
return ff_core_List.List_map(go_(path_), ((file_) => {
return ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), (() => {
return ff_core_FileSystem.FileSystem_readStream(fs_, file_)
}))
}))
}

export function internalFileSystem_(dummy_) {
throw new Error('Function internalFileSystem is missing on this target in sync context.');
}

export function internalBrowserCodeFileSystem_(dummy_) {
throw new Error('Function internalBrowserCodeFileSystem is missing on this target in sync context.');
}

export function internalCompile_(buildSystem_, mainFile_, target_) {
throw new Error('Function internalCompile is missing on this target in sync context.');
}

export function internalMainPackagePair_(buildSystem_) {
throw new Error('Function internalMainPackagePair is missing on this target in sync context.');
}

export async function internalCallEsBuild_$(self_, mainJsFile_, outputPath_, minify_, sourceMap_, $task) {

        const esbuild = import$0
        return await esbuild.build({
            entryPoints: [mainJsFile_],
            bundle: true,
            minify: minify_,
            sourcemap: sourceMap_,
            platform: 'browser',
            target: 'es6',
            external: ['../../../node_modules/*'], // TODO
            outfile: outputPath_
        })
    
}

export async function internalNodeCallEsBuild_$(self_, mainJsFile_, outputPath_, minify_, $task) {

        const esbuild = import$0
        return await esbuild.build({
            entryPoints: [mainJsFile_],
            bundle: true,
            minify: minify_,
            sourcemap: true,
            platform: 'node',
            target: 'es6',
            external: ['../../../node_modules/*'], // TODO
            outfile: outputPath_
        })
    
}

export async function internalListDirectory_$(fs_, path_, $task) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? ff_core_String.String_dropLast(path_, 1)
: path_);
async function go_$(currentPath_, $task) {
return (await ff_core_List.List_flatMap$((await ff_core_FileSystem.FileSystem_list$(fs_, currentPath_, $task)), (async (file_, $task) => {
if((await ff_core_FileSystem.FileSystem_isDirectory$(fs_, file_, $task))) {
return (await go_$(file_, $task))
} else {
return ff_core_List.Link(file_, ff_core_List.Empty())
}
}), $task))
}
return ff_core_List.List_map((await go_$(path_, $task)), ((file_) => {
return ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), (async ($task) => {
return (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $task))
}))
}))
}

export async function internalFileSystem_$(dummy_, $task) {

        return null;
    
}

export async function internalBrowserCodeFileSystem_$(dummy_, $task) {

        return null;
    
}

export async function internalCompile_$(buildSystem_, mainFile_, target_, $task) {

        return await $firefly_compiler.buildViaBuildSystem_$(buildSystem_, buildSystem_.fireflyPath_, mainFile_, target_, $task)
    
}

export async function internalMainPackagePair_$(buildSystem_, $task) {

        return {first_: buildSystem_.mainPackagePair_.group_, second_: buildSystem_.mainPackagePair_.name_}
    
}

export function BuildSystem_compileForBrowser(self_, mainFile_) {
ff_core_BuildSystem.internalCompile_(self_, mainFile_, "browser");
const fs_ = ff_core_BuildSystem.internalFileSystem_(self_);
const streams_ = ff_core_BuildSystem.internalListDirectory_(fs_, ".firefly/output/browser");
const mainPackagePair_ = ff_core_BuildSystem.internalMainPackagePair_(self_);
return ff_core_BuildSystem.BrowserCode(mainPackagePair_.first_, mainPackagePair_.second_, mainFile_, ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}

export function BuildSystem_buildMode(self_) {
throw new Error('Function BuildSystem_buildMode is missing on this target in sync context.');
}

export function BuildSystem_setAssets(self_, assetSystem_) {
throw new Error('Function BuildSystem_setAssets is missing on this target in sync context.');
}

export function BuildSystem_packageAssets(self_) {
const fs_ = ff_core_BuildSystem.internalFileSystem_(self_);
const streams_ = ff_core_BuildSystem.internalListDirectory_(fs_, ".");
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export function BuildSystem_dependencyAssets(self_, user_, package_) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export function BuildSystem_arguments(self_) {
throw new Error('Function BuildSystem_arguments is missing on this target in sync context.');
}

export function BuildSystem_mainTask(self_) {
throw new Error('Function BuildSystem_mainTask is missing on this target in sync context.');
}

export async function BuildSystem_compileForBrowser$(self_, mainFile_, $task) {
(await ff_core_BuildSystem.internalCompile_$(self_, mainFile_, "browser", $task));
const fs_ = (await ff_core_BuildSystem.internalFileSystem_$(self_, $task));
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$(fs_, ".firefly/output/browser", $task));
const mainPackagePair_ = (await ff_core_BuildSystem.internalMainPackagePair_$(self_, $task));
return ff_core_BuildSystem.BrowserCode(mainPackagePair_.first_, mainPackagePair_.second_, mainFile_, ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}

export async function BuildSystem_buildMode$(self_, $task) {
return !!self_.buildMode_
}

export async function BuildSystem_setAssets$(self_, assetSystem_, $task) {
self_.assets_ = assetSystem_
}

export async function BuildSystem_packageAssets$(self_, $task) {
const fs_ = (await ff_core_BuildSystem.internalFileSystem_$(self_, $task));
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$(fs_, ".", $task));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function BuildSystem_dependencyAssets$(self_, user_, package_, $task) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export async function BuildSystem_arguments$(self_, $task) {
return self_.array_
}

export async function BuildSystem_mainTask$(self_, $task) {
return self_.task_
}

export function BrowserCode_assets(self_) {
return self_.assetSystem_
}

export function BrowserCode_bundle(self_, minify_ = true, sourceMap_ = false) {
const prefix_ = ".firefly/output/browser";
const mainJsBaseFile_ = (ff_core_Option.Option_grab(ff_core_String.String_removeLast(self_.mainFile_, ".ff")) + ".mjs");
const mainJsFile_ = ((((((prefix_ + "/") + self_.packageGroup_) + "/") + self_.packageName_) + "/") + mainJsBaseFile_);
const file_ = (prefix_ + "/Main.bundle.js");
ff_core_BuildSystem.internalCallEsBuild_(self_, mainJsFile_, file_, minify_, sourceMap_);
const fs_ = ff_core_BuildSystem.internalBrowserCodeFileSystem_(self_);
const assets_ = ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), (() => {
return ff_core_FileSystem.FileSystem_readStream(fs_, file_)
})), (sourceMap_
? ff_core_List.Link(ff_core_Pair.Pair((ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)) + ".map"), (() => {
return ff_core_FileSystem.FileSystem_readStream(fs_, (file_ + ".map"))
})), ff_core_List.Empty())
: ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return ff_core_BuildSystem.BrowserBundle(assets_)
}

export async function BrowserCode_assets$(self_, $task) {
return self_.assetSystem_
}

export async function BrowserCode_bundle$(self_, minify_ = true, sourceMap_ = false, $task) {
const prefix_ = ".firefly/output/browser";
const mainJsBaseFile_ = (ff_core_Option.Option_grab(ff_core_String.String_removeLast(self_.mainFile_, ".ff")) + ".mjs");
const mainJsFile_ = ((((((prefix_ + "/") + self_.packageGroup_) + "/") + self_.packageName_) + "/") + mainJsBaseFile_);
const file_ = (prefix_ + "/Main.bundle.js");
(await ff_core_BuildSystem.internalCallEsBuild_$(self_, mainJsFile_, file_, minify_, sourceMap_, $task));
const fs_ = (await ff_core_BuildSystem.internalBrowserCodeFileSystem_$(self_, $task));
const assets_ = ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), (async ($task) => {
return (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $task))
})), (sourceMap_
? ff_core_List.Link(ff_core_Pair.Pair((ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)) + ".map"), (async ($task) => {
return (await ff_core_FileSystem.FileSystem_readStream$(fs_, (file_ + ".map"), $task))
})), ff_core_List.Empty())
: ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return ff_core_BuildSystem.BrowserBundle(assets_)
}

export function BrowserBundle_assets(self_) {
return self_.assetSystem_
}

export async function BrowserBundle_assets$(self_, $task) {
return self_.assetSystem_
}




