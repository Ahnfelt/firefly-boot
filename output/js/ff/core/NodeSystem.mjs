import * as import$0 from 'fs/promises';

import * as import$3 from 'node:child_process';

import * as import$1 from 'path';

import * as import$2 from 'url';

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

// type NodeSystem


// type ProcessResult
export function ProcessResult(exitCode_, standardOut_, standardError_) {
return {exitCode_, standardOut_, standardError_};
}

// type ProcessException
export function ProcessException(problem_) {
return {problem_};
}



export function internalAssets_(system_) {
throw new Error('Function internalAssets is missing on this target in sync context.');
}

export function internalListDirectoryWithoutOpendir_(system_, path_) {
throw new Error('Function internalListDirectoryWithoutOpendir is missing on this target in sync context.');
}

export function internalProcessError_(problem_) {
return ff_core_Try.Try_grab(ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_NodeSystem.ProcessException(problem_), ff_core_NodeSystem.ff_core_Any_HasAnyTag$ff_core_NodeSystem_ProcessException)})
})), ((error_) => {
return error_
})))
}

export async function internalAssets_$(system_, $task) {
return system_.assets_
}

export async function internalListDirectoryWithoutOpendir_$(system_, path_, $task) {

        const fsPromises = import$0
        const path = import$1
        let files = await fsPromises.readdir(path_)
        return files.map(file => path.join(path_, file))
    
}

export async function internalProcessError_$(problem_, $task) {
return ff_core_Try.Try_grab(ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_NodeSystem.ProcessException(problem_), ff_core_NodeSystem.ff_core_Any_HasAnyTag$ff_core_NodeSystem_ProcessException)})
})), ((error_) => {
return error_
})))
}

export function NodeSystem_arguments(self_) {
throw new Error('Function NodeSystem_arguments is missing on this target in sync context.');
}

export function NodeSystem_assets(self_) {
const assetPkgSnapshotPath_ = ff_core_NodeSystem.NodeSystem_path(self_, "/snapshot/output/assets");
if(ff_core_Path.Path_isDirectory(assetPkgSnapshotPath_)) {
function streams_(path_) {
return ff_core_Stream.Stream_flatMap(ff_core_List.List_toStream(ff_core_NodeSystem.internalListDirectoryWithoutOpendir_(self_, path_), false), ((file_) => {
if(ff_core_Path.Path_isDirectory(file_)) {
return streams_(file_)
} else {
return ff_core_List.List_toStream([ff_core_Pair.Pair(("/" + ff_core_Path.Path_relativeTo(file_, assetPkgSnapshotPath_)), (() => {
return ff_core_Path.Path_readStream(file_)
}))], false)
}
}))
}
return ff_core_AssetSystem.AssetSystem(ff_core_Stream.Stream_toMap(streams_(assetPkgSnapshotPath_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
} else {
return ff_core_NodeSystem.internalAssets_(self_)
}
}

export function NodeSystem_path(self_, relativePath_) {
throw new Error('Function NodeSystem_path is missing on this target in sync context.');
}

export function NodeSystem_pathFromUrl(self_, url_) {
throw new Error('Function NodeSystem_pathFromUrl is missing on this target in sync context.');
}

export function NodeSystem_httpClient(self_) {
throw new Error('Function NodeSystem_httpClient is missing on this target in sync context.');
}

export function NodeSystem_mainTask(self_) {
throw new Error('Function NodeSystem_mainTask is missing on this target in sync context.');
}

export function NodeSystem_crypto(self_) {
throw new Error('Function NodeSystem_crypto is missing on this target in sync context.');
}

export function NodeSystem_js(self_) {
throw new Error('Function NodeSystem_js is missing on this target in sync context.');
}

export function NodeSystem_exit(self_, exitCode_ = 0) {
throw new Error('Function NodeSystem_exit is missing on this target in sync context.');
}

export function NodeSystem_readStream(self_) {
throw new Error('Function NodeSystem_readStream is missing on this target in sync context.');
}

export function NodeSystem_writeBuffer(self_, buffer_) {
throw new Error('Function NodeSystem_writeBuffer is missing on this target in sync context.');
}

export function NodeSystem_writeStream(self_, stream_) {
ff_core_Stream.Stream_each(stream_, ((_w1) => {
ff_core_NodeSystem.NodeSystem_writeBuffer(self_, _w1)
}))
}

export function NodeSystem_writeText(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeBuffer(self_, ff_core_String.String_toBuffer(text_))
}

export function NodeSystem_writeLine(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeText(self_, (text_ + "\n"))
}

export function NodeSystem_writeErrorBuffer(self_, buffer_) {
throw new Error('Function NodeSystem_writeErrorBuffer is missing on this target in sync context.');
}

export function NodeSystem_writeErrorStream(self_, stream_) {
ff_core_Stream.Stream_each(stream_, ((_w1) => {
ff_core_NodeSystem.NodeSystem_writeErrorBuffer(self_, _w1)
}))
}

export function NodeSystem_writeErrorText(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeErrorBuffer(self_, ff_core_String.String_toBuffer(text_))
}

export function NodeSystem_writeErrorLine(self_, text_) {
ff_core_NodeSystem.NodeSystem_writeErrorText(self_, (text_ + "\n"))
}

export function NodeSystem_environment(self_) {
throw new Error('Function NodeSystem_environment is missing on this target in sync context.');
}

export function NodeSystem_execute(self_, command_, arguments_, standardIn_ = ff_core_Buffer.new_(0), workingDirectory_ = ff_core_Option.None(), environment_ = ff_core_Option.None(), maxBuffer_ = 16777216, killSignal_ = 9) {
throw new Error('Function NodeSystem_execute is missing on this target in sync context.');
}

export async function NodeSystem_arguments$(self_, $task) {
return self_.array_
}

export async function NodeSystem_assets$(self_, $task) {
const assetPkgSnapshotPath_ = (await ff_core_NodeSystem.NodeSystem_path$(self_, "/snapshot/output/assets", $task));
if((await ff_core_Path.Path_isDirectory$(assetPkgSnapshotPath_, $task))) {
async function streams_$(path_, $task) {
return (await ff_core_Stream.Stream_flatMap$((await ff_core_List.List_toStream$((await ff_core_NodeSystem.internalListDirectoryWithoutOpendir_$(self_, path_, $task)), false, $task)), (async (file_, $task) => {
if((await ff_core_Path.Path_isDirectory$(file_, $task))) {
return (await streams_$(file_, $task))
} else {
return (await ff_core_List.List_toStream$([ff_core_Pair.Pair(("/" + (await ff_core_Path.Path_relativeTo$(file_, assetPkgSnapshotPath_, $task))), (async ($task) => {
return (await ff_core_Path.Path_readStream$(file_, $task))
}))], false, $task))
}
}), $task))
}
return ff_core_AssetSystem.AssetSystem((await ff_core_Stream.Stream_toMap$((await streams_$(assetPkgSnapshotPath_, $task)), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, $task)))
} else {
return (await ff_core_NodeSystem.internalAssets_$(self_, $task))
}
}

export async function NodeSystem_path$(self_, relativePath_, $task) {

            const path = import$1
            return path.resolve(relativePath_)
        
}

export async function NodeSystem_pathFromUrl$(self_, url_, $task) {

            const url = import$2;
            return url.fileURLToPath(new URL(url_));
        
}

export async function NodeSystem_httpClient$(self_, $task) {
return null
}

export async function NodeSystem_mainTask$(self_, $task) {
return self_.task_
}

export async function NodeSystem_crypto$(self_, $task) {
return (typeof globalThis !== 'undefined' ? globalThis : window).crypto
}

export async function NodeSystem_js$(self_, $task) {
return typeof globalThis !== 'undefined' ? globalThis : window
}

export async function NodeSystem_exit$(self_, exitCode_ = 0, $task) {
process.exit(exitCode_)
}

export async function NodeSystem_readStream$(self_, $task) {

            return ff_core_Path.internalReadStream_$(() => process.stdin)
        
}

export async function NodeSystem_writeBuffer$(self_, buffer_, $task) {
process.stdout.write(new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))
}

export async function NodeSystem_writeStream$(self_, stream_, $task) {
(await ff_core_Stream.Stream_each$(stream_, (async (_w1, $task) => {
(await ff_core_NodeSystem.NodeSystem_writeBuffer$(self_, _w1, $task))
}), $task))
}

export async function NodeSystem_writeText$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeBuffer$(self_, ff_core_String.String_toBuffer(text_), $task))
}

export async function NodeSystem_writeLine$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeText$(self_, (text_ + "\n"), $task))
}

export async function NodeSystem_writeErrorBuffer$(self_, buffer_, $task) {
process.stderr.write(new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))
}

export async function NodeSystem_writeErrorStream$(self_, stream_, $task) {
(await ff_core_Stream.Stream_each$(stream_, (async (_w1, $task) => {
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(self_, _w1, $task))
}), $task))
}

export async function NodeSystem_writeErrorText$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeErrorBuffer$(self_, ff_core_String.String_toBuffer(text_), $task))
}

export async function NodeSystem_writeErrorLine$(self_, text_, $task) {
(await ff_core_NodeSystem.NodeSystem_writeErrorText$(self_, (text_ + "\n"), $task))
}

export async function NodeSystem_environment$(self_, $task) {

            const result = [];
            for(const key in process.env) {
                result.push(ff_core_Pair.Pair(key, process.env[key]));
            }
            return ff_core_List.List_toMap(result, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
        
}

export async function NodeSystem_execute$(self_, command_, arguments_, standardIn_ = ff_core_Buffer.new_(0), workingDirectory_ = ff_core_Option.None(), environment_ = ff_core_Option.None(), maxBuffer_ = 16777216, killSignal_ = 9, $task) {

            const childProcess = import$3;
            const environment = environment_.value_ !== void 0 ? {} : process.env;
            if(environment_.value_ !== void 0) {
                ff_core_Map.Map_each(
                    environment_.value_, 
                    (k, v) => environment[k] = v, 
                    ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String
                );
            }
            if(process.platform === 'win32') {
                arguments_ = ['/C', ...[command_, ...arguments_].map(argument => 
                    argument.replaceAll(/([^A-Za-z0-9/_-])/g, "^$1")
                )];
                command_ = process.env.ComSpec || 'cmd.exe';
            }
            const newProcess = childProcess.spawn(command_, arguments_, {
                cwd: workingDirectory_.value_,
                windowsHide: true,
                signal: $task.controller.signal,
                killSignal: killSignal_,
                env: environment,
            });
            
            let size = 0;
            const out = [];
            const err = [];
            
            newProcess.stdout.on('data', (data) => {
                if(size > maxBuffer_) return;
                size += data.byteLength;
                if(size > maxBuffer_) newProcess.kill(killSignal_);
                else out.push(data);
            });

            newProcess.stderr.on('data', (data) => {
                if(size > maxBuffer_) return;
                size += data.byteLength;
                if(size > maxBuffer_) newProcess.kill(killSignal_);
                else err.push(data);
            });

            return await new Promise((resolve, reject) => {
                if(standardIn_.byteLength !== 0) {
                    newProcess.stdin.write(standardIn_);
                }
                newProcess.stdin.end();
                newProcess.on('error', error => {
                    if(size > maxBuffer_) {
                        reject(internalProcessError_("maxBuffer exceeded"));
                    } else {
                        reject(internalProcessError_(error.message));
                    }
                });
                newProcess.on('close', code => {
                    const o = Buffer.concat(out);
                    const e = Buffer.concat(err);
                    resolve(ProcessResult(
                        code,
                        new DataView(o.buffer, o.byteOffset, o.byteLength),
                        new DataView(e.buffer, e.byteOffset, e.byteLength),
                    ));
                }); 
            });
        
}

export const ff_core_Any_HasAnyTag$ff_core_NodeSystem_ProcessException = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/NodeSystem.ProcessException" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/NodeSystem.ProcessException" + "[") + "]"))
}
};


