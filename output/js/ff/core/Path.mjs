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
const fs_ = import$0;
const fsPromises_ = import$1;
const flagsR_ = (fs_.constants["R_OK"] * checkReadable_);
const flagsW_ = (fs_.constants["W_OK"] * checkWritable_);
const flagsX_ = (fs_.constants["X_OK"] * checkExecutable_);
const flags_ = ff_core_Int.Int_bitOr(flagsR_, ff_core_Int.Int_bitOr(flagsW_, flagsX_));
return ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
fsPromises_.access(self_, ((flags_ === 0)
? fs_.constants["F_OK"]
: flags_));
return true
})), ((_) => {
return false
}))
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
const fsPromises_ = import$1;
return ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
return fsPromises_.lstat(self_).isDirectory()
})), ((_) => {
return false
}))
}

export function Path_isFile(self_) {
const fsPromises_ = import$1;
return ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
return fsPromises_.lstat(self_).isFile()
})), ((_) => {
return false
}))
}

export function Path_isSymbolicLink(self_) {
const fsPromises_ = import$1;
return ff_core_Try.Try_catchAny(ff_core_Core.try_((() => {
return fsPromises_.lstat(self_).isSymbolicLink()
})), ((_) => {
return false
}))
}

export function Path_isInsideOf(self_, path_) {
const nodePath_ = import$2;
if((path_ === "/")) {
return true
} else {
const childPath_ = nodePath_.resolve(self_);
const parentPath_ = nodePath_.resolve(path_);
return (childPath_.startsWith((parentPath_ + nodePath_.sep)) || (childPath_ === parentPath_))
}
}

export function Path_size(self_) {
const fs_ = import$0;
return fs_.promises.stat(self_)
}

export function Path_modified(self_) {
const fs_ = import$0;
return (fs_.promises.stat(self_).mtimeMs * 0.001)
}

export function Path_entries(self_) {
throw new Error('Function Path_entries is missing on this target in sync context.');
}

export function Path_absolute(self_) {
const path_ = import$2;
return path_.resolve(self_)
}

export function Path_relativeTo(self_, path_) {
const nodePath_ = import$2;
return nodePath_.relative(path_, self_)
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
const path_ = import$2;
return path_.basename(self_)
}

export function Path_extension(self_) {
const path_ = import$2;
return path_.extname(self_)
}

export function Path_url(self_) {
const url_ = import$3;
return ("" + url_.pathToFileURL(self_))
}

export function Path_delimiter(self_) {
const path_ = import$2;
return path_.delimiter(self_)
}

export function Path_separator(self_) {
const path_ = import$2;
return path_.separator(self_)
}

export function Path_parent(self_) {
const path_ = import$2;
const result_ = path_.dirname(self_);
if(((result_ !== "") && (result_ !== self_))) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export function Path_slash(self_, relativePath_) {
const path_ = import$2;
return path_.join(self_, relativePath_)
}

export function Path_path(self_, absoluteOrRelativePath_) {
const path_ = import$2;
return path_.resolve(self_, absoluteOrRelativePath_)
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
} else if(ff_core_Path.Path_isSymbolicLink(self_)) {
ff_core_Path.Path_createSymlinkTo(path_, ff_core_Path.Path_path(self_, ff_core_Path.Path_readSymbolicLink(self_)), true)
} else {
ff_core_Path.Path_writeStream(path_, ff_core_Path.Path_readStream(self_), false)
}
}

export function Path_createDirectory(self_, createParentDirectories_ = false) {
const fsPromises_ = import$1;
fsPromises_.mkdir(self_, {recursive: createParentDirectories_})
}

export function Path_createSymlinkTo(self_, path_, junction_ = false) {
const fsPromises_ = import$1;
fsPromises_.symlink(path_, self_, (junction_
? "junction"
: null))
}

export function Path_delete(self_, retries_ = 0, retryDelay_ = 100) {
const fsPromises_ = import$1;
fsPromises_.rm(self_, {recursive: true, retries: retries_, retryDelay: retryDelay_})
}

export function Path_truncate(self_, length_ = 0) {
const fsPromises_ = import$1;
fsPromises_.truncate(self_, length_)
}

export function Path_renameTo(self_, path_) {
const fsPromises_ = import$1;
fsPromises_.rename(self_, path_)
}

export function Path_readSymbolicLink(self_) {
const fsPromises_ = import$1;
return fsPromises_.readlink(self_)
}

export function Path_readText(self_) {
const fsPromises_ = import$1;
return ff_core_Js.withSignal_(((signal_) => {
return fsPromises_.readFile(self_, {encoding: "UTF-8", signal: signal_})
}))
}

export function Path_writeText(self_, text_) {
const fsPromises_ = import$1;
ff_core_Js.withSignal_(((signal_) => {
return fsPromises_.writeFile(self_, text_, {encoding: "UTF-8", signal: signal_})
}))
}

export function Path_appendText(self_, text_) {
const fsPromises_ = import$1;
ff_core_Js.withSignal_(((signal_) => {
return fsPromises_.appendFile(self_, text_, {encoding: "UTF-8", signal: signal_})
}))
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
const fsPromises_ = import$1;
return fsPromises_.open(self_, (alsoWrite_
? "r+"
: "r"))
}

export function Path_writeHandle(self_, alsoRead_ = false, mustCreate_ = false) {
const fsPromises_ = import$1;
const flags_ = ((mustCreate_
? "wx"
: "w") + (alsoRead_
? "+"
: ""));
return fsPromises_.open(self_, flags_)
}

export function Path_appendHandle(self_, alsoRead_ = false, mustCreate_ = false) {
throw new Error('Function Path_appendHandle is missing on this target in sync context.');
}

export async function Path_exists$(self_, checkReadable_ = false, checkWritable_ = false, checkExecutable_ = false, $task) {
const fs_ = import$0;
const fsPromises_ = import$1;
const flagsR_ = (fs_.constants["R_OK"] * checkReadable_);
const flagsW_ = (fs_.constants["W_OK"] * checkWritable_);
const flagsX_ = (fs_.constants["X_OK"] * checkExecutable_);
const flags_ = ff_core_Int.Int_bitOr(flagsR_, ff_core_Int.Int_bitOr(flagsW_, flagsX_));
return ff_core_Try.Try_catchAny((await ff_core_Core.try_$((async ($task) => {
(await fsPromises_.access(self_, ((flags_ === 0)
? fs_.constants["F_OK"]
: flags_)));
return true
}), $task)), ((_) => {
return false
}))
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
const fsPromises_ = import$1;
return ff_core_Try.Try_catchAny((await ff_core_Core.try_$((async ($task) => {
return (await fsPromises_.lstat(self_)).isDirectory()
}), $task)), ((_) => {
return false
}))
}

export async function Path_isFile$(self_, $task) {
const fsPromises_ = import$1;
return ff_core_Try.Try_catchAny((await ff_core_Core.try_$((async ($task) => {
return (await fsPromises_.lstat(self_)).isFile()
}), $task)), ((_) => {
return false
}))
}

export async function Path_isSymbolicLink$(self_, $task) {
const fsPromises_ = import$1;
return ff_core_Try.Try_catchAny((await ff_core_Core.try_$((async ($task) => {
return (await fsPromises_.lstat(self_)).isSymbolicLink()
}), $task)), ((_) => {
return false
}))
}

export async function Path_isInsideOf$(self_, path_, $task) {
const nodePath_ = import$2;
if((path_ === "/")) {
return true
} else {
const childPath_ = nodePath_.resolve(self_);
const parentPath_ = nodePath_.resolve(path_);
return (childPath_.startsWith((parentPath_ + nodePath_.sep)) || (childPath_ === parentPath_))
}
}

export async function Path_size$(self_, $task) {
const fs_ = import$0;
return (await fs_.promises.stat(self_))
}

export async function Path_modified$(self_, $task) {
const fs_ = import$0;
return ((await fs_.promises.stat(self_)).mtimeMs * 0.001)
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
const path_ = import$2;
return path_.resolve(self_)
}

export async function Path_relativeTo$(self_, path_, $task) {
const nodePath_ = import$2;
return nodePath_.relative(path_, self_)
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
const path_ = import$2;
return path_.basename(self_)
}

export async function Path_extension$(self_, $task) {
const path_ = import$2;
return path_.extname(self_)
}

export async function Path_url$(self_, $task) {
const url_ = import$3;
return ("" + url_.pathToFileURL(self_))
}

export async function Path_delimiter$(self_, $task) {
const path_ = import$2;
return path_.delimiter(self_)
}

export async function Path_separator$(self_, $task) {
const path_ = import$2;
return path_.separator(self_)
}

export async function Path_parent$(self_, $task) {
const path_ = import$2;
const result_ = path_.dirname(self_);
if(((result_ !== "") && (result_ !== self_))) {
return ff_core_Option.Some(result_)
} else return ff_core_Option.None()
}

export async function Path_slash$(self_, relativePath_, $task) {
const path_ = import$2;
return path_.join(self_, relativePath_)
}

export async function Path_path$(self_, absoluteOrRelativePath_, $task) {
const path_ = import$2;
return path_.resolve(self_, absoluteOrRelativePath_)
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
} else if((await ff_core_Path.Path_isSymbolicLink$(self_, $task))) {
(await ff_core_Path.Path_createSymlinkTo$(path_, (await ff_core_Path.Path_path$(self_, (await ff_core_Path.Path_readSymbolicLink$(self_, $task)), $task)), true, $task))
} else {
(await ff_core_Path.Path_writeStream$(path_, (await ff_core_Path.Path_readStream$(self_, $task)), false, $task))
}
}

export async function Path_createDirectory$(self_, createParentDirectories_ = false, $task) {
const fsPromises_ = import$1;
(await fsPromises_.mkdir(self_, {recursive: createParentDirectories_}))
}

export async function Path_createSymlinkTo$(self_, path_, junction_ = false, $task) {
const fsPromises_ = import$1;
(await fsPromises_.symlink(path_, self_, (junction_
? "junction"
: null)))
}

export async function Path_delete$(self_, retries_ = 0, retryDelay_ = 100, $task) {
const fsPromises_ = import$1;
(await fsPromises_.rm(self_, {recursive: true, retries: retries_, retryDelay: retryDelay_}))
}

export async function Path_truncate$(self_, length_ = 0, $task) {
const fsPromises_ = import$1;
(await fsPromises_.truncate(self_, length_))
}

export async function Path_renameTo$(self_, path_, $task) {
const fsPromises_ = import$1;
(await fsPromises_.rename(self_, path_))
}

export async function Path_readSymbolicLink$(self_, $task) {
const fsPromises_ = import$1;
return (await fsPromises_.readlink(self_))
}

export async function Path_readText$(self_, $task) {
const fsPromises_ = import$1;
return (await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await fsPromises_.readFile(self_, {encoding: "UTF-8", signal: signal_}))
}), $task))
}

export async function Path_writeText$(self_, text_, $task) {
const fsPromises_ = import$1;
(await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await fsPromises_.writeFile(self_, text_, {encoding: "UTF-8", signal: signal_}))
}), $task))
}

export async function Path_appendText$(self_, text_, $task) {
const fsPromises_ = import$1;
(await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await fsPromises_.appendFile(self_, text_, {encoding: "UTF-8", signal: signal_}))
}), $task))
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
const fsPromises_ = import$1;
return (await fsPromises_.open(self_, (alsoWrite_
? "r+"
: "r")))
}

export async function Path_writeHandle$(self_, alsoRead_ = false, mustCreate_ = false, $task) {
const fsPromises_ = import$1;
const flags_ = ((mustCreate_
? "wx"
: "w") + (alsoRead_
? "+"
: ""));
return (await fsPromises_.open(self_, flags_))
}

export async function Path_appendHandle$(self_, alsoRead_ = false, mustCreate_ = false, $task) {

            const fsPromises = import$1
            return await fsPromises.open(self_, (mustCreate_ ? 'wx' : 'w') + (alsoRead_ ? '+' : ''))
        
}

export function PathEntry_path(self_) {
const path_ = import$2;
return path_.join(self_.ffPath, self_.name)
}

export function PathEntry_isDirectory(self_) {
return self_.isDirectory()
}

export function PathEntry_isFile(self_) {
return self_.isFile()
}

export function PathEntry_isSymbolicLink(self_) {
return self_.isSymbolicLink()
}

export async function PathEntry_path$(self_, $task) {
const path_ = import$2;
return path_.join(self_.ffPath, self_.name)
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




