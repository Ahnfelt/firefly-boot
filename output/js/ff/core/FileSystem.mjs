import * as import$2 from 'fs';

import * as import$1 from 'fs/promises';

import * as import$0 from 'path';

import * as import$3 from 'zlib';

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

// type FileSystem




export function directoryName_(path_) {
const directory_ = ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), 1));
if((directory_ == "")) {
return "."
} else {
return directory_
}
}

export function baseName_(path_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})))
}

export function prefixName_(path_) {
return ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
}))), ((_w1) => {
return (_w1 != 46)
}))
}

export function suffixName_(path_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), ((_w1) => {
return (_w1 != 46)
})))
}

export async function directoryName_$(path_, $c) {
const directory_ = ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), 1));
if((directory_ == "")) {
return "."
} else {
return directory_
}
}

export async function baseName_$(path_, $c) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})))
}

export async function prefixName_$(path_, $c) {
return ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
}))), ((_w1) => {
return (_w1 != 46)
}))
}

export async function suffixName_$(path_, $c) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), ((_w1) => {
return (_w1 != 46)
})))
}

export function FileSystem_readText(self_, file_) {
throw new Error('Function FileSystem_readText is missing on this target in sync context.');
}

export function FileSystem_writeText(self_, file_, text_) {
throw new Error('Function FileSystem_writeText is missing on this target in sync context.');
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

export function FileSystem_getAbsolutePath(self_, path_) {

            const path = import$0
            return path.resolve(path_)
        
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

export function FileSystem_decompressGzipStream(self_, stream_) {
throw new Error('Function FileSystem_decompressGzipStream is missing on this target in sync context.');
}

export function FileSystem_open(self_, file_, flags_) {
throw new Error('Function FileSystem_open is missing on this target in sync context.');
}

export async function FileSystem_readText$(self_, file_, $c) {

            const fsPromises = import$1
            return await fsPromises.readFile(file_, {encoding: 'UTF-8', signal: $c.signal})
        
}

export async function FileSystem_writeText$(self_, file_, text_, $c) {

            const fsPromises = import$1
            await fsPromises.writeFile(file_, text_, {encoding: 'UTF-8', signal: $c.signal})
        
}

export async function FileSystem_list$(self_, path_, $c) {

            const fsPromises = import$1
            return ff_core_Array.Array_toList((await fsPromises.readdir(path_)).map(f => path_ + '/' + f))
        
}

export async function FileSystem_exists$(self_, path_, $c) {

            const fsPromises = import$1
            return await fsPromises.access(path_).then(() => true).catch(() => false)
        
}

export async function FileSystem_isDirectory$(self_, path_, $c) {

            const fsPromises = import$1
            try {
                return (await fsPromises.lstat(path_)).isDirectory();
            } catch(e) {
                return false;
            }
        
}

export async function FileSystem_createDirectory$(self_, path_, $c) {

            const fsPromises = import$1
            await fsPromises.mkdir(path_)
        
}

export async function FileSystem_createDirectories$(self_, path_, $c) {

            const fsPromises = import$1
            await fsPromises.mkdir(path_, {recursive: true})
        
}

export async function FileSystem_delete$(self_, path_, $c) {

            const fsPromises = import$1
            try { await fsPromises.rmdir(path_) } catch(_) { await fsPromises.rm(path_) }
        
}

export async function FileSystem_deleteDirectory$(self_, path_, $c) {
(await ff_core_List.List_each$((await ff_core_FileSystem.FileSystem_list$(self_, path_, $c)), (async (file_, $c) => {
if((await ff_core_FileSystem.FileSystem_isDirectory$(self_, file_, $c))) {
(await ff_core_FileSystem.FileSystem_deleteDirectory$(self_, file_, $c))
} else {
(await ff_core_FileSystem.FileSystem_delete$(self_, file_, $c))
}
}), $c));
(await ff_core_FileSystem.FileSystem_delete$(self_, path_, $c))
}

export async function FileSystem_rename$(self_, fromPath_, toPath_, $c) {

            const fsPromises = import$1
            await fsPromises.rename(fromPath_, toPath_)
        
}

export async function FileSystem_getAbsolutePath$(self_, path_, $c) {
throw new Error('Function FileSystem_getAbsolutePath is missing on this target in async context.');
}

export async function FileSystem_readStream$(self_, file_, $c) {

            const fs = import$2
            return $c => {
                if($c.signal.aborted) throw new Error("Cancelled", {cause: $c.reasonWorkaround})
                const readable = fs.createReadStream(file_)
                let doResolve = null
                let doReject = null
                let seenError = null
                readable.on('readable', () => {
                    if(doResolve != null) doResolve()
                })
                readable.on('error', error => {
                    seenError = error
                    if(doReject != null) doReject(error)
                })
                readable.on('close', () => {
                    if(doResolve != null) doResolve()
                })
                const abort = () => {
                    $c.signal.removeEventListener('abort', abort)
                    readable.close()
                }
                $c.signal.addEventListener('abort', abort)
                return ff_core_Iterator.Iterator(async function go($c) {
                    let buffer = readable.read()
                    if(buffer != null) return ff_core_Option.Some(buffer)
                    if(seenError != null) throw seenError
                    if(readable.destroyed) return ff_core_Option.None()
                    let promise = new Promise((resolve, reject) => {
                        doResolve = () => {doResolve = null; doReject = null; resolve()}
                        doReject = error => {doResolve = null; doReject = null; reject(error)}
                    }).then(() => go($c))
                    return await promise
                }, abort)
            }
        
}

export async function FileSystem_writeStream$(self_, file_, stream_, createOnly_ = false, $c) {

            const fs = import$2
            let writeable = fs.createWriteStream(file_, {flags: createOnly_ ? 'wx' : 'w'})
            try {
                await ff_core_Stream.Stream_each$(stream_, async buffer => {
                    if(!writeable.write(buffer)) {
                        await new Promise((resolve, reject) => {
                            $c.signal.addEventListener('abort', reject)
                            writeable.once('drain', () => {
                                $c.signal.removeEventListener('abort', reject)
                                resolve()
                            })
                        })
                    }
                }, $c)
            } finally {
                writeable.close()
            }
        
}

export async function FileSystem_appendStream$(self_, file_, stream_, $c) {

            const fs = import$2
            let writeable = fs.createWriteStream(file_, {flags: 'a'})
            try {
                await ff_core_Stream.Stream_each$(stream_, async buffer => {
                    if(!writeable.write(buffer)) {
                        await new Promise((resolve, reject) => {
                            $c.signal.addEventListener('abort', reject)
                            writeable.once('drain', () => {
                                $c.signal.removeEventListener('abort', reject)
                                resolve()
                            })
                        })
                    }
                }, $c)
            } finally {
                writeable.close()
            }
        
}

export async function FileSystem_decompressGzipStream$(self_, stream_, $c) {

            const zlib = import$3
            return async ($c) => {
                const iterator = stream_($c)
                let decompress = zlib.createGunzip()
                let doResolve = null
                let doReject = null
                let seenError = null
                decompress.on('readable', () => {
                    if(doResolve != null) doResolve()
                })
                decompress.on('error', error => {
                    seenError = error
                    if(doReject != null) doReject(error)
                })
                decompress.on('close', () => {
                    if(doResolve != null) doResolve()
                })
                const abort = () => {
                    $c.signal.removeEventListener('abort', abort)
                    decompress.destroy()
                }
                $c.signal.addEventListener('abort', abort)
                return ff_core_Iterator.Iterator(async function go($c) {
                    if(seenError != null) throw seenError
                    if(!decompress.readable) return ff_core_Option.None()
                    let buffer = decompress.read()
                    if(buffer != null) return ff_core_Option.Some(buffer)
                    buffer = (await iterator.next_($c)).value_
                    if(buffer == null) decompress.end()
                    let wait = buffer == null || !decompress.write(buffer)
                    if(seenError != null) throw seenError
                    if(!wait) return go($c)
                    let promise = new Promise((resolve, reject) => {
                        function reset() { decompress.off('drain', doResolve); doResolve = null; doReject = null }
                        doResolve = () => {reset(); resolve()}
                        doReject = error => {reset(); reject(error)}
                    }).then(() => go($c))
                    decompress.on('drain', doResolve)
                    return await promise
                }, abort)
            }
        
}

export async function FileSystem_open$(self_, file_, flags_, $c) {

            const fsPromises = import$1
            return await fsPromises.open(file, flags)
        
}




