import * as import$3 from 'fs';

import * as import$2 from 'fs/promises';

import * as import$1 from 'path';

import * as import$0 from 'url';

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

// type FileSystem




export function directoryName_(path_) {
const directory_ = ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})), 1));
if((directory_ === "")) {
return "."
} else {
return directory_
}
}

export function baseName_(path_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})))
}

export function prefixName_(path_) {
return ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
}))), ((_w1) => {
return (_w1 !== 46)
}))
}

export function suffixName_(path_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})), ((_w1) => {
return (_w1 !== 46)
})))
}

export function internalReadStream_(createReadStream_) {
throw new Error('Function internalReadStream is missing on this target in sync context.');
}

export function urlToPath_(fileUrl_) {

        const url = import$0;
        return url.fileURLToPath(new URL(fileUrl_));
    
}

export function pathToUrl_(path_) {

        const url = import$0;
        return '' + url.pathToFileURL(path_);
    
}

export function relative_(fromPath_, toPath_) {

        const path = import$1;
        return path.relative(fromPath_, toPath_);
    
}

export async function directoryName_$(path_, $task) {
const directory_ = ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})), 1));
if((directory_ === "")) {
return "."
} else {
return directory_
}
}

export async function baseName_$(path_, $task) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})))
}

export async function prefixName_$(path_, $task) {
return ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
}))), ((_w1) => {
return (_w1 !== 46)
}))
}

export async function suffixName_$(path_, $task) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 !== 47)
})), ((_w1) => {
return (_w1 !== 46)
})))
}

export async function internalReadStream_$(createReadStream_, $task) {

        let task = null
        let readable = null
        let doResolve = null
        let doReject = null
        let seenError = null
        const abort = () => {
            if(task != null) {
                task.controller.signal.removeEventListener('abort', abort)
                readable.destroy()
            }
        }
        function open($task) {
            ff_core_Task.Task_throwIfAborted($task)
            task = $task
            readable = createReadStream_()
            readable.on('readable', () => {
                if(doResolve != null) doResolve()
            })
            readable.on('error', error => {
                task.controller.signal.removeEventListener('abort', abort)
                seenError = error
                if(doReject != null) doReject(error)
            })
            readable.on('close', () => {
                task.controller.signal.removeEventListener('abort', abort)
                if(doResolve != null) doResolve()
            })
            $task.controller.signal.addEventListener('abort', abort)
        }
        return ff_core_Stream.Stream(async function go($task) {
            if(task == null) open($task)
            let buffer = readable.read()
            if(buffer != null) return ff_core_Option.Some(new DataView(buffer.buffer, buffer.byteOffset, buffer.length))
            if(seenError != null) throw seenError
            if(readable.destroyed) return ff_core_Option.None()
            let promise = new Promise((resolve, reject) => {
                doResolve = () => {doResolve = null; doReject = null; resolve()}
                doReject = error => {doResolve = null; doReject = null; reject(error)}
            }).then(() => go($task))
            return await promise
        }, abort)
    
}

export async function urlToPath_$(fileUrl_, $task) {
throw new Error('Function urlToPath is missing on this target in async context.');
}

export async function pathToUrl_$(path_, $task) {
throw new Error('Function pathToUrl is missing on this target in async context.');
}

export async function relative_$(fromPath_, toPath_, $task) {
throw new Error('Function relative is missing on this target in async context.');
}

export function FileSystem_copy(self_, fromPath_, toPath_) {
if(ff_core_FileSystem.FileSystem_isDirectory(self_, fromPath_)) {
if(ff_core_FileSystem.FileSystem_exists(self_, toPath_)) {
ff_core_FileSystem.FileSystem_deleteDirectory(self_, toPath_)
};
ff_core_FileSystem.FileSystem_createDirectory(self_, toPath_);
ff_core_List.List_each(ff_core_FileSystem.FileSystem_list(self_, fromPath_), ((file_) => {
ff_core_FileSystem.FileSystem_copy(self_, file_, ((toPath_ + "/") + ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(file_), ((_w1) => {
return (_w1 !== 47)
})))))
}))
} else {
ff_core_FileSystem.FileSystem_writeStream(self_, toPath_, ff_core_FileSystem.FileSystem_readStream(self_, fromPath_), false)
}
}

export function FileSystem_readText(self_, file_) {
throw new Error('Function FileSystem_readText is missing on this target in sync context.');
}

export function FileSystem_writeText(self_, file_, text_) {
throw new Error('Function FileSystem_writeText is missing on this target in sync context.');
}

export function FileSystem_appendText(self_, file_, text_) {
throw new Error('Function FileSystem_appendText is missing on this target in sync context.');
}

export function FileSystem_list(self_, path_) {
throw new Error('Function FileSystem_list is missing on this target in sync context.');
}

export function FileSystem_exists(self_, path_) {
throw new Error('Function FileSystem_exists is missing on this target in sync context.');
}

export function FileSystem_isDirectory(self_, path_) {
throw new Error('Function FileSystem_isDirectory is missing on this target in sync context.');
}

export function FileSystem_createDirectory(self_, path_) {
throw new Error('Function FileSystem_createDirectory is missing on this target in sync context.');
}

export function FileSystem_createDirectories(self_, path_) {
throw new Error('Function FileSystem_createDirectories is missing on this target in sync context.');
}

export function FileSystem_delete(self_, path_) {
throw new Error('Function FileSystem_delete is missing on this target in sync context.');
}

export function FileSystem_deleteDirectory(self_, path_) {
ff_core_List.List_each(ff_core_FileSystem.FileSystem_list(self_, path_), ((file_) => {
if(ff_core_FileSystem.FileSystem_isDirectory(self_, file_)) {
ff_core_FileSystem.FileSystem_deleteDirectory(self_, file_)
} else {
ff_core_FileSystem.FileSystem_delete(self_, file_)
}
}));
ff_core_FileSystem.FileSystem_delete(self_, path_)
}

export function FileSystem_rename(self_, fromPath_, toPath_) {
throw new Error('Function FileSystem_rename is missing on this target in sync context.');
}

export function FileSystem_readStream(self_, file_) {
throw new Error('Function FileSystem_readStream is missing on this target in sync context.');
}

export function FileSystem_writeStream(self_, file_, stream_, createOnly_ = false) {
throw new Error('Function FileSystem_writeStream is missing on this target in sync context.');
}

export function FileSystem_appendStream(self_, file_, stream_) {
throw new Error('Function FileSystem_appendStream is missing on this target in sync context.');
}

export function FileSystem_open(self_, file_, flags_) {
throw new Error('Function FileSystem_open is missing on this target in sync context.');
}

export function FileSystem_absolutePath(self_, path_) {
throw new Error('Function FileSystem_absolutePath is missing on this target in sync context.');
}

export function FileSystem_workingDirectory(self_) {
throw new Error('Function FileSystem_workingDirectory is missing on this target in sync context.');
}

export async function FileSystem_copy$(self_, fromPath_, toPath_, $task) {
if((await ff_core_FileSystem.FileSystem_isDirectory$(self_, fromPath_, $task))) {
if((await ff_core_FileSystem.FileSystem_exists$(self_, toPath_, $task))) {
(await ff_core_FileSystem.FileSystem_deleteDirectory$(self_, toPath_, $task))
};
(await ff_core_FileSystem.FileSystem_createDirectory$(self_, toPath_, $task));
(await ff_core_List.List_each$((await ff_core_FileSystem.FileSystem_list$(self_, fromPath_, $task)), (async (file_, $task) => {
(await ff_core_FileSystem.FileSystem_copy$(self_, file_, ((toPath_ + "/") + ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(file_), ((_w1) => {
return (_w1 !== 47)
})))), $task))
}), $task))
} else {
(await ff_core_FileSystem.FileSystem_writeStream$(self_, toPath_, (await ff_core_FileSystem.FileSystem_readStream$(self_, fromPath_, $task)), false, $task))
}
}

export async function FileSystem_readText$(self_, file_, $task) {

            const fsPromises = import$2
            try {
                return await fsPromises.readFile(file_, {encoding: 'UTF-8', signal: $task.controller.signal})
            } finally {
                if($task.controller.signal.aborted) $task.controller = new AbortController()
            }
        
}

export async function FileSystem_writeText$(self_, file_, text_, $task) {

            const fsPromises = import$2
            try {
                await fsPromises.writeFile(file_, text_, {encoding: 'UTF-8', signal: $task.controller.signal})
            } finally {
                if($task.controller.signal.aborted) $task.controller = new AbortController()
            }
        
}

export async function FileSystem_appendText$(self_, file_, text_, $task) {

            const fsPromises = import$2
            try {
                await fsPromises.appendFile(file_, text_, {encoding: 'UTF-8', signal: $task.controller.signal})
            } finally {
                if($task.controller.signal.aborted) $task.controller = new AbortController()
            }
        
}

export async function FileSystem_list$(self_, path_, $task) {

            const fsPromises = import$2
            return ff_core_Array.Array_toList((await fsPromises.readdir(path_)).map(f => path_ + '/' + f))
        
}

export async function FileSystem_exists$(self_, path_, $task) {

            const fsPromises = import$2
            return await fsPromises.access(path_).then(() => true).catch(() => false)
        
}

export async function FileSystem_isDirectory$(self_, path_, $task) {

            const fsPromises = import$2
            try {
                return (await fsPromises.lstat(path_)).isDirectory();
            } catch(e) {
                return false;
            }
        
}

export async function FileSystem_createDirectory$(self_, path_, $task) {

            const fsPromises = import$2
            await fsPromises.mkdir(path_)
        
}

export async function FileSystem_createDirectories$(self_, path_, $task) {

            const fsPromises = import$2
            await fsPromises.mkdir(path_, {recursive: true})
        
}

export async function FileSystem_delete$(self_, path_, $task) {

            const fsPromises = import$2
            try { await fsPromises.rmdir(path_) } catch(_) { await fsPromises.rm(path_) }
        
}

export async function FileSystem_deleteDirectory$(self_, path_, $task) {
(await ff_core_List.List_each$((await ff_core_FileSystem.FileSystem_list$(self_, path_, $task)), (async (file_, $task) => {
if((await ff_core_FileSystem.FileSystem_isDirectory$(self_, file_, $task))) {
(await ff_core_FileSystem.FileSystem_deleteDirectory$(self_, file_, $task))
} else {
(await ff_core_FileSystem.FileSystem_delete$(self_, file_, $task))
}
}), $task));
(await ff_core_FileSystem.FileSystem_delete$(self_, path_, $task))
}

export async function FileSystem_rename$(self_, fromPath_, toPath_, $task) {

            const fsPromises = import$2
            await fsPromises.rename(fromPath_, toPath_)
        
}

export async function FileSystem_readStream$(self_, file_, $task) {

            const fs = import$3
            return ff_core_FileSystem.internalReadStream_$(() => fs.createReadStream(file_))
        
}

export async function FileSystem_writeStream$(self_, file_, stream_, createOnly_ = false, $task) {

            const fs = import$3
            let writeable = fs.createWriteStream(file_, {flags: createOnly_ ? 'wx' : 'w'})
            try {
                await ff_core_Stream.Stream_each$(stream_, async buffer => {
                    if(!writeable.write(new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength))) {
                        await new Promise((resolve, reject) => {
                            $task.controller.signal.addEventListener('abort', reject)
                            writeable.once('drain', () => {
                                $task.controller.signal.removeEventListener('abort', reject)
                                resolve()
                            })
                        })
                    }
                }, $task)
            } finally {
                writeable.close()
            }
        
}

export async function FileSystem_appendStream$(self_, file_, stream_, $task) {

            const fs = import$3
            let writeable = fs.createWriteStream(file_, {flags: 'a'})
            try {
                await ff_core_Stream.Stream_each$(stream_, async buffer => {
                    if(!writeable.write(new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength))) {
                        await new Promise((resolve, reject) => {
                            $task.controller.signal.addEventListener('abort', reject)
                            writeable.once('drain', () => {
                                $task.controller.signal.removeEventListener('abort', reject)
                                resolve()
                            })
                        })
                    }
                }, $task)
            } finally {
                writeable.close()
            }
        
}

export async function FileSystem_open$(self_, file_, flags_, $task) {

            const fsPromises = import$2
            return await fsPromises.open(file, flags)
        
}

export async function FileSystem_absolutePath$(self_, path_, $task) {

            const path = import$1
            return path.resolve(path_)
        
}

export async function FileSystem_workingDirectory$(self_, $task) {

            return process.cwd()
        
}




