import * as import$0 from 'esbuild';

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type BuildSystem


// type BrowserCode
export function BrowserCode(assetSystem_) {
return {assetSystem_};
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
return ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), ff_core_FileSystem.FileSystem_readStream(fs_, file_))
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

export async function internalCallEsBuild_$(self_, mainJsFile_, outputPath_, minify_, sourceMap_, $c) {

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

export async function internalNodeCallEsBuild_$(self_, mainJsFile_, outputPath_, minify_, $c) {

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

export async function internalListDirectory_$(fs_, path_, $c) {
const prefix_ = (ff_core_String.String_endsWith(path_, "/")
? ff_core_String.String_dropLast(path_, 1)
: path_);
async function go_$(currentPath_, $c) {
return (await ff_core_List.List_flatMap$((await ff_core_FileSystem.FileSystem_list$(fs_, currentPath_, $c)), (async (file_, $c) => {
if((await ff_core_FileSystem.FileSystem_isDirectory$(fs_, file_, $c))) {
return (await go_$(file_, $c))
} else {
return ff_core_List.Link(file_, ff_core_List.Empty())
}
}), $c))
}
return (await ff_core_List.List_map$((await go_$(path_, $c)), (async (file_, $c) => {
return ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $c)))
}), $c))
}

export async function internalFileSystem_$(dummy_, $c) {

        return null;
    
}

export async function internalBrowserCodeFileSystem_$(dummy_, $c) {

        return null;
    
}

export async function internalCompile_$(buildSystem_, mainFile_, target_, $c) {

        return await $firefly_compiler.buildViaBuildSystem_$(buildSystem_, buildSystem_.fireflyPath_, mainFile_, target_, $c)
    
}

export function BuildSystem_compileForBrowser(self_, mainFile_) {
ff_core_BuildSystem.internalCompile_(self_, mainFile_, "browser");
const fs_ = ff_core_BuildSystem.internalFileSystem_(self_);
const streams_ = ff_core_BuildSystem.internalListDirectory_(fs_, ".firefly/output/browser");
return ff_core_BuildSystem.BrowserCode(ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
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

export function BuildSystem_tasks(self_) {
throw new Error('Function BuildSystem_tasks is missing on this target in sync context.');
}

export async function BuildSystem_compileForBrowser$(self_, mainFile_, $c) {
(await ff_core_BuildSystem.internalCompile_$(self_, mainFile_, "browser", $c));
const fs_ = (await ff_core_BuildSystem.internalFileSystem_$(self_, $c));
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$(fs_, ".firefly/output/browser", $c));
return ff_core_BuildSystem.BrowserCode(ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}

export async function BuildSystem_buildMode$(self_, $c) {
return !!self_.buildMode_
}

export async function BuildSystem_setAssets$(self_, assetSystem_, $c) {
self_.assets_ = assetSystem_
}

export async function BuildSystem_packageAssets$(self_, $c) {
const fs_ = (await ff_core_BuildSystem.internalFileSystem_$(self_, $c));
const streams_ = (await ff_core_BuildSystem.internalListDirectory_$(fs_, ".", $c));
return ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(streams_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
}

export async function BuildSystem_dependencyAssets$(self_, user_, package_, $c) {
return ff_core_Core.panic_("dependencyAssets not yet implemented")
}

export async function BuildSystem_arguments$(self_, $c) {
return ff_core_Array.Array_toList(self_.array_)
}

export async function BuildSystem_tasks$(self_, $c) {
return null
}

export function BrowserCode_assets(self_) {
return self_.assetSystem_
}

export function BrowserCode_bundle(self_, minify_ = true, sourceMap_ = false) {
const prefix_ = ".firefly/output/browser";
const mainJsFile_ = (prefix_ + "/script/script/Main.mjs");
const file_ = (prefix_ + "/Main.bundle.js");
ff_core_BuildSystem.internalCallEsBuild_(self_, mainJsFile_, file_, minify_, sourceMap_);
const fs_ = ff_core_BuildSystem.internalBrowserCodeFileSystem_(self_);
const assets_ = ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), ff_core_FileSystem.FileSystem_readStream(fs_, file_)), (sourceMap_
? ff_core_List.Link(ff_core_Pair.Pair((ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)) + ".map"), ff_core_FileSystem.FileSystem_readStream(fs_, (file_ + ".map"))), ff_core_List.Empty())
: ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return ff_core_BuildSystem.BrowserBundle(assets_)
}

export async function BrowserCode_assets$(self_, $c) {
return self_.assetSystem_
}

export async function BrowserCode_bundle$(self_, minify_ = true, sourceMap_ = false, $c) {
const prefix_ = ".firefly/output/browser";
const mainJsFile_ = (prefix_ + "/script/script/Main.mjs");
const file_ = (prefix_ + "/Main.bundle.js");
(await ff_core_BuildSystem.internalCallEsBuild_$(self_, mainJsFile_, file_, minify_, sourceMap_, $c));
const fs_ = (await ff_core_BuildSystem.internalBrowserCodeFileSystem_$(self_, $c));
const assets_ = ff_core_AssetSystem.AssetSystem(ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair(ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)), (await ff_core_FileSystem.FileSystem_readStream$(fs_, file_, $c))), (sourceMap_
? ff_core_List.Link(ff_core_Pair.Pair((ff_core_String.String_dropFirst(file_, ff_core_String.String_size(prefix_)) + ".map"), (await ff_core_FileSystem.FileSystem_readStream$(fs_, (file_ + ".map"), $c))), ff_core_List.Empty())
: ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return ff_core_BuildSystem.BrowserBundle(assets_)
}

export function BrowserBundle_assets(self_) {
return self_.assetSystem_
}

export async function BrowserBundle_assets$(self_, $c) {
return self_.assetSystem_
}



