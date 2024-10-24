import * as import$0 from 'fs';

import * as import$1 from 'fs/promises';

import * as import$2 from 'path';

import * as import$3 from 'url';

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

import * as ff_core_UnsafeJs from "../../ff/core/UnsafeJs.mjs"

// type Path


// type PathEntry




export function internalReadStream_(createReadStream_) {
throw new Error('Function internalReadStream is missing on this target in sync context.');
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

export function Path_exists(self_, checkReadable_ = false, checkWritable_ = false, checkExecutable_ = false) {
throw new Error('Function Path_exists is missing on this target in sync context.');
}

export function Path_isReadable(self_) {
return ff_core_Path.Path_exists(self_, true, false, false)
}

export function Path_isWritable(self_) {
return ff_core_Path.Path_exists(self_, false, true, false)
}

export function Path_isExecutable(self_) {
return ff_core_Path.Path_exists(self_, false, false, true)
}

export function Path_isDirectory(self_) {
throw new Error('Function Path_isDirectory is missing on this target in sync context.');
}

export function Path_isFile(self_) {
throw new Error('Function Path_isFile is missing on this target in sync context.');
}

export function Path_isSymbolicLink(self_) {
throw new Error('Function Path_isSymbolicLink is missing on this target in sync context.');
}

export function Path_isInsideOf(self_, path_) {
throw new Error('Function Path_isInsideOf is missing on this target in sync context.');
}

export function Path_size(self_) {
throw new Error('Function Path_size is missing on this target in sync context.');
}

export function Path_modified(self_) {
throw new Error('Function Path_modified is missing on this target in sync context.');
}

export function Path_entries(self_) {
throw new Error('Function Path_entries is missing on this target in sync context.');
}

export function Path_absolute(self_) {
throw new Error('Function Path_absolute is missing on this target in sync context.');
}

export function Path_relativeTo(self_, path_) {
throw new Error('Function Path_relativeTo is missing on this target in sync context.');
}

export function Path_endsWith(self_, parts_) {
function go_(pathOption_, reversed_) {
const pathOption_a = pathOption_;
const reversed_a = reversed_;
if(reversed_a.length === 0) {
return true
}
if(pathOption_a.Some && reversed_a.length >= 1) {
const path_ = pathOption_a.value_;
const p_ = reversed_a[0];
const ps_ = reversed_a.slice(1);
return ((ff_core_Path.Path_base(path_) === p_) && go_(ff_core_Path.Path_parent(path_), ps_))
}
if(pathOption_a.None) {
return false
}
}
return go_(ff_core_Option.Some(self_), ff_core_List.List_reverse(parts_))
}

export function Path_contains(self_, parts_) {
return (ff_core_Path.Path_endsWith(self_, parts_) || ff_core_Option.Option_any(ff_core_Path.Path_parent(self_), ((_w1) => {
return ff_core_Path.Path_contains(_w1, parts_)
})))
}

export function Path_base(self_) {
throw new Error('Function Path_base is missing on this target in sync context.');
}

export function Path_extension(self_) {
throw new Error('Function Path_extension is missing on this target in sync context.');
}

export function Path_url(self_) {
throw new Error('Function Path_url is missing on this target in sync context.');
}

export function Path_delimiter(self_) {
throw new Error('Function Path_delimiter is missing on this target in sync context.');
}

export function Path_separator(self_) {
throw new Error('Function Path_separator is missing on this target in sync context.');
}

export function Path_parent(self_) {
throw new Error('Function Path_parent is missing on this target in sync context.');
}

export function Path_slash(self_, relativePath_) {
throw new Error('Function Path_slash is missing on this target in sync context.');
}

export function Path_path(self_, absoluteOrRelativePath_) {
throw new Error('Function Path_path is missing on this target in sync context.');
}

export function Path_copyTo(self_, path_, retries_ = 0, retryDelay_ = 100) {
if(ff_core_Path.Path_isDirectory(self_)) {
if(ff_core_Path.Path_exists(path_, false, false, false)) {
ff_core_Path.Path_delete(path_, retries_, retryDelay_)
};
ff_core_Path.Path_createDirectory(path_, false);
ff_core_Stream.Stream_each(ff_core_Path.Path_entries(self_), ((file_) => {
ff_core_Path.Path_copyTo(ff_core_Path.PathEntry_path(file_), ff_core_Path.Path_slash(path_, ff_core_Path.Path_relativeTo(ff_core_Path.PathEntry_path(file_), self_)), retries_, retryDelay_)
}))
} else {
ff_core_Path.Path_writeStream(path_, ff_core_Path.Path_readStream(self_), false)
}
}

export function Path_createDirectory(self_, createParentDirectories_ = false) {
throw new Error('Function Path_createDirectory is missing on this target in sync context.');
}

export function Path_createSymlinkTo(self_, path_) {
throw new Error('Function Path_createSymlinkTo is missing on this target in sync context.');
}

export function Path_delete(self_, retries_ = 0, retryDelay_ = 100) {
throw new Error('Function Path_delete is missing on this target in sync context.');
}

export function Path_truncate(self_, length_ = 0) {
throw new Error('Function Path_truncate is missing on this target in sync context.');
}

export function Path_renameTo(self_, path_) {
throw new Error('Function Path_renameTo is missing on this target in sync context.');
}

export function Path_readText(self_) {
throw new Error('Function Path_readText is missing on this target in sync context.');
}

export function Path_writeText(self_, text_) {
throw new Error('Function Path_writeText is missing on this target in sync context.');
}

export function Path_appendText(self_, text_) {
throw new Error('Function Path_appendText is missing on this target in sync context.');
}

export function Path_readBuffer(self_) {
return ff_core_Stream.Stream_toBuffer(ff_core_Path.Path_readStream(self_))
}

export function Path_writeBuffer(self_, buffer_) {
ff_core_Path.Path_writeStream(self_, ff_core_List.List_toStream([buffer_], false), false)
}

export function Path_appendBuffer(self_, buffer_) {
ff_core_Path.Path_appendStream(self_, ff_core_List.List_toStream([buffer_], false))
}

export function Path_readStream(self_) {
throw new Error('Function Path_readStream is missing on this target in sync context.');
}

export function Path_writeStream(self_, stream_, createOnly_ = false) {
throw new Error('Function Path_writeStream is missing on this target in sync context.');
}

export function Path_appendStream(self_, stream_) {
throw new Error('Function Path_appendStream is missing on this target in sync context.');
}

export function Path_readHandle(self_, alsoWrite_ = false) {
throw new Error('Function Path_readHandle is missing on this target in sync context.');
}

export function Path_writeHandle(self_, alsoRead_ = false, mustCreate_ = false) {
throw new Error('Function Path_writeHandle is missing on this target in sync context.');
}

export function Path_appendHandle(self_, alsoRead_ = false, mustCreate_ = false) {
throw new Error('Function Path_appendHandle is missing on this target in sync context.');
}

export async function Path_exists$(self_, checkReadable_ = false, checkWritable_ = false, checkExecutable_ = false, $task) {

            const fs = import$0
            const fsPromises = import$1
            const flags = 
                (fs.constants.R_OK * checkReadable_) | 
                (fs.constants.W_OK * checkWritable_) | 
                (fs.constants.X_OK * checkExecutable_)
            try {
                await fsPromises.access(self_, flags === 0 ? fs.constants.F_OK : flags)
                return true
            } catch(e) {
                return false
            }
        
}

export async function Path_isReadable$(self_, $task) {
return (await ff_core_Path.Path_exists$(self_, true, false, false, $task))
}

export async function Path_isWritable$(self_, $task) {
return (await ff_core_Path.Path_exists$(self_, false, true, false, $task))
}

export async function Path_isExecutable$(self_, $task) {
return (await ff_core_Path.Path_exists$(self_, false, false, true, $task))
}

export async function Path_isDirectory$(self_, $task) {

            const fsPromises = import$1
            try {
                return (await fsPromises.lstat(self_)).isDirectory();
            } catch(e) {
                return false;
            }
        
}

export async function Path_isFile$(self_, $task) {

            const fsPromises = import$1
            try {
                return (await fsPromises.lstat(self_)).isFile();
            } catch(e) {
                return false;
            }
        
}

export async function Path_isSymbolicLink$(self_, $task) {

            const fsPromises = import$1
            try {
                return (await fsPromises.lstat(self_)).isSymbolicLink();
            } catch(e) {
                return false;
            }
        
}

export async function Path_isInsideOf$(self_, path_, $task) {

            const path = import$2
            if(path_ === '/') return true
            const childPath = path.resolve(self_)
            const parentPath = path.resolve(path_)
            return childPath.startsWith(parentPath + path.sep) || childPath === parentPath
        
}

export async function Path_size$(self_, $task) {

            return (await fs.promises.stat(file)).size
        
}

export async function Path_modified$(self_, $task) {

            return (await fs.promises.stat(file)).mtimeMs * 0.001
        
}

export async function Path_entries$(self_, $task) {

            const fsPromises = import$1
            let dir = null
            return ff_core_Stream.Stream(
                async () => {
                    if(dir === null) dir = await fsPromises.opendir(self_, {bufferSize: 128})
                    const entry = await dir.read()
                    if(entry === null) return ff_core_Option.None()
                    entry.ffPath = self_
                    return ff_core_Option.Some(entry)
                },
                async () => {
                    if(dir !== null) await dir.close()
                }
            )
        
}

export async function Path_absolute$(self_, $task) {

            const path = import$2
            return path.resolve(self_)
        
}

export async function Path_relativeTo$(self_, path_, $task) {

            const path = import$2;
            return path.relative(path_, self_);
        
}

export async function Path_endsWith$(self_, parts_, $task) {
async function go_$(pathOption_, reversed_, $task) {
const pathOption_a = pathOption_;
const reversed_a = reversed_;
if(reversed_a.length === 0) {
return true
}
if(pathOption_a.Some && reversed_a.length >= 1) {
const path_ = pathOption_a.value_;
const p_ = reversed_a[0];
const ps_ = reversed_a.slice(1);
return (((await ff_core_Path.Path_base$(path_, $task)) === p_) && (await go_$((await ff_core_Path.Path_parent$(path_, $task)), ps_, $task)))
}
if(pathOption_a.None) {
return false
}
}
return (await go_$(ff_core_Option.Some(self_), ff_core_List.List_reverse(parts_), $task))
}

export async function Path_contains$(self_, parts_, $task) {
return ((await ff_core_Path.Path_endsWith$(self_, parts_, $task)) || (await ff_core_Option.Option_any$((await ff_core_Path.Path_parent$(self_, $task)), (async (_w1, $task) => {
return (await ff_core_Path.Path_contains$(_w1, parts_, $task))
}), $task)))
}

export async function Path_base$(self_, $task) {

            const path = import$2
            return path.basename(self_)
        
}

export async function Path_extension$(self_, $task) {

            const path = import$2
            return path.extname(self_)
        
}

export async function Path_url$(self_, $task) {

            const url = import$3;
            return '' + url.pathToFileURL(self_);
        
}

export async function Path_delimiter$(self_, $task) {

            const path = import$2;
            return path.delimiter(self_);
        
}

export async function Path_separator$(self_, $task) {

            const path = import$2;
            return path.separator();
        
}

export async function Path_parent$(self_, $task) {

            const path = import$2
            const result = path.dirname(self_)
            return result !== "" && result !== self_
                ? ff_core_Option.Some(result) 
                : ff_core_Option.None()
        
}

export async function Path_slash$(self_, relativePath_, $task) {

            const path = import$2
            return path.join(self_, relativePath_)
        
}

export async function Path_path$(self_, absoluteOrRelativePath_, $task) {

            const path = import$2
            return path.resolve(self_, absoluteOrRelativePath_)
        
}

export async function Path_copyTo$(self_, path_, retries_ = 0, retryDelay_ = 100, $task) {
if((await ff_core_Path.Path_isDirectory$(self_, $task))) {
if((await ff_core_Path.Path_exists$(path_, false, false, false, $task))) {
(await ff_core_Path.Path_delete$(path_, retries_, retryDelay_, $task))
};
(await ff_core_Path.Path_createDirectory$(path_, false, $task));
(await ff_core_Stream.Stream_each$((await ff_core_Path.Path_entries$(self_, $task)), (async (file_, $task) => {
(await ff_core_Path.Path_copyTo$((await ff_core_Path.PathEntry_path$(file_, $task)), (await ff_core_Path.Path_slash$(path_, (await ff_core_Path.Path_relativeTo$((await ff_core_Path.PathEntry_path$(file_, $task)), self_, $task)), $task)), retries_, retryDelay_, $task))
}), $task))
} else {
(await ff_core_Path.Path_writeStream$(path_, (await ff_core_Path.Path_readStream$(self_, $task)), false, $task))
}
}

export async function Path_createDirectory$(self_, createParentDirectories_ = false, $task) {

            const fsPromises = import$1
            await fsPromises.mkdir(self_, {recursive: createParentDirectories_})
        
}

export async function Path_createSymlinkTo$(self_, path_, $task) {

            const fsPromises = import$1
            await fsPromises.symlink(path_, self_)
        
}

export async function Path_delete$(self_, retries_ = 0, retryDelay_ = 100, $task) {

            const fsPromises = import$1
            await fsPromises.rm(self_, {recursive: true, retries: retries_, retryDelay: retryDelay_})
        
}

export async function Path_truncate$(self_, length_ = 0, $task) {

            const fsPromises = import$1
            await fsPromises.truncate(self_, length_)
        
}

export async function Path_renameTo$(self_, path_, $task) {

            const fsPromises = import$1
            await fsPromises.rename(self_, path_)
        
}

export async function Path_readText$(self_, $task) {

            const fsPromises = import$1
            try {
                return await fsPromises.readFile(self_, {encoding: 'UTF-8', signal: $task.controller.signal})
            } finally {
                if($task.controller.signal.aborted) $task.controller = new AbortController()
            }
        
}

export async function Path_writeText$(self_, text_, $task) {

            const fsPromises = import$1
            try {
                await fsPromises.writeFile(self_, text_, {encoding: 'UTF-8', signal: $task.controller.signal})
            } finally {
                if($task.controller.signal.aborted) $task.controller = new AbortController()
            }
        
}

export async function Path_appendText$(self_, text_, $task) {

            const fsPromises = import$1
            try {
                await fsPromises.appendFile(self_, text_, {encoding: 'UTF-8', signal: $task.controller.signal})
            } finally {
                if($task.controller.signal.aborted) $task.controller = new AbortController()
            }
        
}

export async function Path_readBuffer$(self_, $task) {
return (await ff_core_Stream.Stream_toBuffer$((await ff_core_Path.Path_readStream$(self_, $task)), $task))
}

export async function Path_writeBuffer$(self_, buffer_, $task) {
(await ff_core_Path.Path_writeStream$(self_, (await ff_core_List.List_toStream$([buffer_], false, $task)), false, $task))
}

export async function Path_appendBuffer$(self_, buffer_, $task) {
(await ff_core_Path.Path_appendStream$(self_, (await ff_core_List.List_toStream$([buffer_], false, $task)), $task))
}

export async function Path_readStream$(self_, $task) {

            const fs = import$0
            return ff_core_Path.internalReadStream_$(() => fs.createReadStream(self_))
        
}

export async function Path_writeStream$(self_, stream_, createOnly_ = false, $task) {

            const fs = import$0
            let writeable = fs.createWriteStream(self_, {flags: createOnly_ ? 'wx' : 'w'})
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
                await new Promise((resolve, reject) => {
                    writeable.close(err => {if(err) reject(err); else resolve();});
                });
            }
        
}

export async function Path_appendStream$(self_, stream_, $task) {

            const fs = import$0
            let writeable = fs.createWriteStream(self_, {flags: 'a'})
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
                await new Promise((resolve, reject) => {
                    writeable.close(err => {if(err) reject(err); else resolve();});
                });
            }
        
}

export async function Path_readHandle$(self_, alsoWrite_ = false, $task) {

            const fsPromises = import$1
            return await fsPromises.open(self_, alsoWrite_ ? 'r+' : 'r')
        
}

export async function Path_writeHandle$(self_, alsoRead_ = false, mustCreate_ = false, $task) {

            const fsPromises = import$1
            return await fsPromises.open(self_, (mustCreate_ ? 'wx' : 'w') + (alsoRead_ ? '+' : ''))
        
}

export async function Path_appendHandle$(self_, alsoRead_ = false, mustCreate_ = false, $task) {

            const fsPromises = import$1
            return await fsPromises.open(self_, (mustCreate_ ? 'wx' : 'w') + (alsoRead_ ? '+' : ''))
        
}

export function PathEntry_path(self_) {
throw new Error('Function PathEntry_path is missing on this target in sync context.');
}

export function PathEntry_isDirectory(self_) {
throw new Error('Function PathEntry_isDirectory is missing on this target in sync context.');
}

export function PathEntry_isFile(self_) {
throw new Error('Function PathEntry_isFile is missing on this target in sync context.');
}

export function PathEntry_isSymbolicLink(self_) {
throw new Error('Function PathEntry_isSymbolicLink is missing on this target in sync context.');
}

export async function PathEntry_path$(self_, $task) {

            const path = import$2
            return path.join(self_.ffPath, self_.name)
        
}

export async function PathEntry_isDirectory$(self_, $task) {

            return self_.isDirectory()
        
}

export async function PathEntry_isFile$(self_, $task) {

            return self_.isFile()
        
}

export async function PathEntry_isSymbolicLink$(self_, $task) {

            return self_.isSymbolicLink()
        
}




