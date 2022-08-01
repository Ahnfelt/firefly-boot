import * as import$1 from 'esbuild';

import * as import$0 from 'pkg';

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

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

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

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




export function createExecutable_(self_, packageFile_, outputPath_, targets_) {
throw new Error('Function createExecutable is missing on this target in sync context.');
}

export async function createExecutable_$(self_, packageFile_, outputPath_, targets_, $c) {

        const pkg = import$0
        return await pkg.exec([
            packageFile_,
            '--out-path', outputPath_,
            '--target', ff_core_List.List_toArray(targets_).join(',')
        ])
    
}

export function BuildSystem_compile(self_, mainFile_) {
throw new Error('Function BuildSystem_compile is missing on this target in sync context.');
}

export function BuildSystem_bundle(self_, mainJsFile_ = ".firefly/output/node/script/script/Main.mjs", outputPath_ = ".firefly/output/node/Main.min.js", minify_ = true) {
throw new Error('Function BuildSystem_bundle is missing on this target in sync context.');
}

export function BuildSystem_executable(self_, mainJsFile_ = ".firefly/output/node/Main.min.js", outputPath_ = ".firefly/output", targets_ = ff_core_List.Link("host", ff_core_List.Empty()), assets_ = ff_core_List.Empty()) {
const json_ = `{
              "pkg": {
                "scripts": "Main.min.js",
                "targets": [ "node14-linux-amd64" ]
              }
            }`;
const packageFile_ = ".firefly/output/node/package.json";
ff_core_FileSystem.FileSystem_writeText(ff_core_BuildSystem.BuildSystem_files(self_), packageFile_, json_);
ff_core_BuildSystem.createExecutable_(self_, packageFile_, outputPath_, targets_)
}

export function BuildSystem_arguments(self_) {
throw new Error('Function BuildSystem_arguments is missing on this target in sync context.');
}

export function BuildSystem_tasks(self_) {
throw new Error('Function BuildSystem_tasks is missing on this target in sync context.');
}

export function BuildSystem_files(self_) {
throw new Error('Function BuildSystem_files is missing on this target in sync context.');
}

export async function BuildSystem_compile$(self_, mainFile_, $c) {

            return await $firefly_compiler.buildViaBuildSystem_$(self_, self_.fireflyPath_, mainFile_, $c)
        
}

export async function BuildSystem_bundle$(self_, mainJsFile_ = ".firefly/output/node/script/script/Main.mjs", outputPath_ = ".firefly/output/node/Main.min.js", minify_ = true, $c) {

            const esbuild = import$1
            // TODO: assets
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

export async function BuildSystem_executable$(self_, mainJsFile_ = ".firefly/output/node/Main.min.js", outputPath_ = ".firefly/output", targets_ = ff_core_List.Link("host", ff_core_List.Empty()), assets_ = ff_core_List.Empty(), $c) {
const json_ = `{
              "pkg": {
                "scripts": "Main.min.js",
                "targets": [ "node14-linux-amd64" ]
              }
            }`;
const packageFile_ = ".firefly/output/node/package.json";
(await ff_core_FileSystem.FileSystem_writeText$((await ff_core_BuildSystem.BuildSystem_files$(self_, $c)), packageFile_, json_, $c));
(await ff_core_BuildSystem.createExecutable_$(self_, packageFile_, outputPath_, targets_, $c))
}

export async function BuildSystem_arguments$(self_, $c) {
return ff_core_Array.Array_toList(self_.array_)
}

export async function BuildSystem_tasks$(self_, $c) {
return null
}

export async function BuildSystem_files$(self_, $c) {
return null
}




