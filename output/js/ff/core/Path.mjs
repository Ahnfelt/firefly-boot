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

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Path
export function Path(absolutePath_) {
return {absolutePath_};
}

// type PathEntry




export function internalReadStream_(createReadStream_) {
let readable_ = ff_core_Option.None();
let seenError_ = null;
const emptyResolve_ = (() => {

});
const emptyReject_ = ((_) => {

});
let doResolve_ = emptyResolve_;
let doReject_ = emptyReject_;
const open_ = (() => {
const newReadable_ = createReadStream_();
newReadable_.on("readable", (() => {
return doResolve_()
}));
newReadable_.on("error", ((error_) => {
seenError_ = error_;
return doReject_(error_)
}));
newReadable_.on("close", (() => {
return doResolve_()
}));
readable_ = ff_core_Option.Some(newReadable_);
return newReadable_
});
return ff_core_Stream.Stream((() => {
;
const jsStream_ = ff_core_Option.Option_else(readable_, open_);
function go_() {
_tailcall: for(;;) {
const jsBuffer_ = jsStream_.read();
if((!ff_core_JsValue.JsValue_isNullOrUndefined(jsBuffer_))) {
const buffer_ = (new DataView(jsBuffer_.buffer, jsBuffer_.byteOffset, jsBuffer_.length));
return ff_core_Option.Some(buffer_)
} else {
if((!ff_core_JsValue.JsValue_isNullOrUndefined(seenError_))) {
return ff_core_Core.throwAny_(seenError_)
} else {
if(jsStream_.destroyed) {
return ff_core_Option.None()
} else {
ff_core_Js.withSignal_(((signal_) => {
const promise_ = (new Promise(((resolve_, reject_) => {
const jsDoReject_ = ((_w1) => {
return doReject_(_w1)
});
doResolve_ = (() => {
signal_.removeEventListener("abort", jsDoReject_);
doResolve_ = emptyResolve_;
doReject_ = emptyReject_;
resolve_()
});
doReject_ = ((error_) => {
signal_.removeEventListener("abort", jsDoReject_);
doResolve_ = emptyResolve_;
doReject_ = emptyReject_;
reject_(error_)
});
return signal_.addEventListener("abort", jsDoReject_)
})));
return promise_
}));
{


continue _tailcall
}
}
}
}
return
}
}
return go_()
}), (() => {
for(const for_o = readable_; for_o.Some;) {
const _w1 = for_o.value_;
_w1.destroy()
break
}
}))
}

export function internalWriteStream_(path_, stream_, flags_) {
const fs_ = import$0;
const writable_ = fs_.createWriteStream(path_.absolutePath_, {flags: flags_});
try {
ff_core_Stream.Stream_each(stream_, ((buffer_) => {
if((!writable_.write((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))))) {
ff_core_Js.withSignal_(((signal_) => {
return (new Promise(((resolve_, reject_) => {
signal_.addEventListener("abort", reject_);
return writable_.once("drain", (() => {
signal_.removeEventListener("abort", reject_);
return resolve_()
}))
})))
}))
}
}))
} finally {
(new Promise(((resolve_, reject_) => {
return writable_.close(((err_) => {
if(err_) {
return reject_(err_)
} else {
return resolve_()
}
}))
})))
}
}

export async function internalReadStream_$(createReadStream_, $task) {
let readable_ = ff_core_Option.None();
let seenError_ = null;
const emptyResolve_ = (() => {

});
const emptyReject_ = ((_) => {

});
let doResolve_ = emptyResolve_;
let doReject_ = emptyReject_;
const open_ = (async ($task) => {
const newReadable_ = (await createReadStream_($task));
newReadable_.on("readable", (() => {
return doResolve_()
}));
newReadable_.on("error", ((error_) => {
seenError_ = error_;
return doReject_(error_)
}));
newReadable_.on("close", (() => {
return doResolve_()
}));
readable_ = ff_core_Option.Some(newReadable_);
return newReadable_
});
return ff_core_Stream.Stream((async ($task) => {
ff_core_Task.Task_throwIfAborted($task);
const jsStream_ = (await ff_core_Option.Option_else$(readable_, open_, $task));
async function go_$($task) {
_tailcall: for(;;) {
const jsBuffer_ = jsStream_.read();
if((!ff_core_JsValue.JsValue_isNullOrUndefined(jsBuffer_))) {
const buffer_ = (new DataView(jsBuffer_.buffer, jsBuffer_.byteOffset, jsBuffer_.length));
return ff_core_Option.Some(buffer_)
} else {
if((!ff_core_JsValue.JsValue_isNullOrUndefined(seenError_))) {
return ff_core_Core.throwAny_(seenError_)
} else {
if(jsStream_.destroyed) {
return ff_core_Option.None()
} else {
(await ff_core_Js.withSignal_$((async (signal_, $task) => {
const promise_ = (new Promise(((resolve_, reject_) => {
const jsDoReject_ = ((_w1) => {
return doReject_(_w1)
});
doResolve_ = (() => {
signal_.removeEventListener("abort", jsDoReject_);
doResolve_ = emptyResolve_;
doReject_ = emptyReject_;
resolve_()
});
doReject_ = ((error_) => {
signal_.removeEventListener("abort", jsDoReject_);
doResolve_ = emptyResolve_;
doReject_ = emptyReject_;
reject_(error_)
});
return signal_.addEventListener("abort", jsDoReject_)
})));
return (await promise_)
}), $task));
{


continue _tailcall
}
}
}
}
return
}
}
return (await go_$($task))
}), (async ($task) => {
for(const for_o = readable_; for_o.Some;) {
const _w1 = for_o.value_;
_w1.destroy()
break
}
}))
}

export async function internalWriteStream_$(path_, stream_, flags_, $task) {
const fs_ = import$0;
const writable_ = fs_.createWriteStream(path_.absolutePath_, {flags: flags_});
try {
(await ff_core_Stream.Stream_each$(stream_, (async (buffer_, $task) => {
if((!writable_.write((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength))))) {
(await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await (new Promise(((resolve_, reject_) => {
signal_.addEventListener("abort", reject_);
return writable_.once("drain", (() => {
signal_.removeEventListener("abort", reject_);
return resolve_()
}))
}))))
}), $task))
}
}), $task))
} finally {
(await (new Promise(((resolve_, reject_) => {
return writable_.close(((err_) => {
if(err_) {
return reject_(err_)
} else {
return resolve_()
}
}))
}))))
}
}

export function Path_exists(self_, checkReadable_ = false, checkWritable_ = false, checkExecutable_ = false) {
const fs_ = import$0;
const fsPromises_ = import$1;
const flagsR_ = (fs_.constants["R_OK"] * checkReadable_);
const flagsW_ = (fs_.constants["W_OK"] * checkWritable_);
const flagsX_ = (fs_.constants["X_OK"] * checkExecutable_);
const flags_ = ff_core_Int.Int_bitOr(flagsR_, ff_core_Int.Int_bitOr(flagsW_, flagsX_));
try {
fsPromises_.access(self_.absolutePath_, ((flags_ === 0)
? fs_.constants["F_OK"]
: flags_));
return true
} catch {
return false
}
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
try {
return fsPromises_.lstat(self_.absolutePath_).isDirectory()
} catch {
return false
}
}

export function Path_isFile(self_) {
const fsPromises_ = import$1;
try {
return fsPromises_.lstat(self_.absolutePath_).isFile()
} catch {
return false
}
}

export function Path_isSymbolicLink(self_) {
const fsPromises_ = import$1;
try {
return fsPromises_.lstat(self_.absolutePath_).isSymbolicLink()
} catch {
return false
}
}

export function Path_isInsideOf(self_, path_) {
const nodePath_ = import$2;
if((path_.absolutePath_ === "/")) {
return true
} else {
const childPath_ = self_.absolutePath_;
const parentPath_ = path_.absolutePath_;
return (ff_core_String.String_startsWith(childPath_, (parentPath_ + nodePath_.sep), 0) || (childPath_ === parentPath_))
}
}

export function Path_size(self_) {
const fs_ = import$0;
return fs_.promises.stat(self_.absolutePath_)
}

export function Path_modified(self_) {
const fs_ = import$0;
return (fs_.promises.stat(self_.absolutePath_).mtimeMs * 0.001)
}

export function Path_entries(self_) {
const fsPromises_ = import$1;
let dir_ = null;
return ff_core_Stream.Stream((() => {
if(ff_core_JsValue.JsValue_isNull(dir_)) {
dir_ = fsPromises_.opendir(self_.absolutePath_, {bufferSize: 128})
};
const entry_ = dir_.read();
if((!ff_core_JsValue.JsValue_isNull(entry_))) {
return ff_core_Option.Some((function() {
entry_.ffPath = self_.absolutePath_;
return entry_
})())
} else return ff_core_Option.None()
}), (() => {
if((!ff_core_JsValue.JsValue_isNull(dir_))) {
dir_.close()
}
}))
}

export function Path_absolute(self_) {
return self_.absolutePath_
}

export function Path_relativeTo(self_, path_) {
const nodePath_ = import$2;
return nodePath_.relative(path_.absolutePath_, self_.absolutePath_)
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
{
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
return path_.basename(self_.absolutePath_)
}

export function Path_extension(self_) {
const path_ = import$2;
return path_.extname(self_.absolutePath_)
}

export function Path_url(self_) {
const url_ = import$3;
return ("" + url_.pathToFileURL(self_.absolutePath_))
}

export function Path_delimiter(self_) {
const path_ = import$2;
return path_.delimiter(self_.absolutePath_)
}

export function Path_separator(self_) {
const path_ = import$2;
return path_.separator(self_.absolutePath_)
}

export function Path_parent(self_) {
const path_ = import$2;
const result_ = path_.dirname(self_.absolutePath_);
if(((result_ !== "") && (result_ !== self_.absolutePath_))) {
return ff_core_Option.Some(ff_core_Path.Path(result_))
} else return ff_core_Option.None()
}

export function Path_slash(self_, relativePath_) {
const path_ = import$2;
return ff_core_Path.Path(path_.join(self_.absolutePath_, relativePath_))
}

export function Path_path(self_, absoluteOrRelativePath_) {
const path_ = import$2;
return ff_core_Path.Path(path_.resolve(self_.absolutePath_, absoluteOrRelativePath_))
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
fsPromises_.mkdir(self_.absolutePath_, {recursive: createParentDirectories_})
}

export function Path_createSymlinkTo(self_, path_, junction_ = false) {
const fsPromises_ = import$1;
fsPromises_.symlink(path_.absolutePath_, self_.absolutePath_, (junction_
? "junction"
: null))
}

export function Path_delete(self_, retries_ = 0, retryDelay_ = 100) {
const fsPromises_ = import$1;
fsPromises_.rm(self_.absolutePath_, {recursive: true, retries: retries_, retryDelay: retryDelay_})
}

export function Path_truncate(self_, length_ = 0) {
const fsPromises_ = import$1;
fsPromises_.truncate(self_.absolutePath_, length_)
}

export function Path_renameTo(self_, path_) {
const fsPromises_ = import$1;
fsPromises_.rename(self_.absolutePath_, path_.absolutePath_)
}

export function Path_readSymbolicLink(self_) {
const fsPromises_ = import$1;
return fsPromises_.readlink(self_.absolutePath_)
}

export function Path_readText(self_) {
const fsPromises_ = import$1;
return ff_core_Js.withSignal_(((signal_) => {
return fsPromises_.readFile(self_.absolutePath_, {encoding: "UTF-8", signal: signal_})
}))
}

export function Path_writeText(self_, text_) {
const fsPromises_ = import$1;
ff_core_Js.withSignal_(((signal_) => {
return fsPromises_.writeFile(self_.absolutePath_, text_, {encoding: "UTF-8", signal: signal_})
}))
}

export function Path_appendText(self_, text_) {
const fsPromises_ = import$1;
ff_core_Js.withSignal_(((signal_) => {
return fsPromises_.appendFile(self_.absolutePath_, text_, {encoding: "UTF-8", signal: signal_})
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
const fs_ = import$0;
return ff_core_Path.internalReadStream_((() => {
return fs_.createReadStream(self_.absolutePath_)
}))
}

export function Path_writeStream(self_, stream_, createOnly_ = false) {
ff_core_Path.internalWriteStream_(self_, stream_, (createOnly_
? "wx"
: "w"))
}

export function Path_appendStream(self_, stream_) {
ff_core_Path.internalWriteStream_(self_, stream_, "a")
}

export function Path_readHandle(self_, alsoWrite_ = false) {
const fsPromises_ = import$1;
return fsPromises_.open(self_.absolutePath_, (alsoWrite_
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
return fsPromises_.open(self_.absolutePath_, flags_)
}

export function Path_appendHandle(self_, alsoRead_ = false, mustCreate_ = false) {
const fsPromises_ = import$1;
const flags_ = ((mustCreate_
? "ax"
: "a") + (alsoRead_
? "+"
: ""));
return fsPromises_.open(self_.absolutePath_, flags_)
}

export async function Path_exists$(self_, checkReadable_ = false, checkWritable_ = false, checkExecutable_ = false, $task) {
const fs_ = import$0;
const fsPromises_ = import$1;
const flagsR_ = (fs_.constants["R_OK"] * checkReadable_);
const flagsW_ = (fs_.constants["W_OK"] * checkWritable_);
const flagsX_ = (fs_.constants["X_OK"] * checkExecutable_);
const flags_ = ff_core_Int.Int_bitOr(flagsR_, ff_core_Int.Int_bitOr(flagsW_, flagsX_));
try {
(await fsPromises_.access(self_.absolutePath_, ((flags_ === 0)
? fs_.constants["F_OK"]
: flags_)));
return true
} catch {
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
const fsPromises_ = import$1;
try {
return (await fsPromises_.lstat(self_.absolutePath_)).isDirectory()
} catch {
return false
}
}

export async function Path_isFile$(self_, $task) {
const fsPromises_ = import$1;
try {
return (await fsPromises_.lstat(self_.absolutePath_)).isFile()
} catch {
return false
}
}

export async function Path_isSymbolicLink$(self_, $task) {
const fsPromises_ = import$1;
try {
return (await fsPromises_.lstat(self_.absolutePath_)).isSymbolicLink()
} catch {
return false
}
}

export async function Path_isInsideOf$(self_, path_, $task) {
const nodePath_ = import$2;
if((path_.absolutePath_ === "/")) {
return true
} else {
const childPath_ = self_.absolutePath_;
const parentPath_ = path_.absolutePath_;
return (ff_core_String.String_startsWith(childPath_, (parentPath_ + nodePath_.sep), 0) || (childPath_ === parentPath_))
}
}

export async function Path_size$(self_, $task) {
const fs_ = import$0;
return (await fs_.promises.stat(self_.absolutePath_))
}

export async function Path_modified$(self_, $task) {
const fs_ = import$0;
return ((await fs_.promises.stat(self_.absolutePath_)).mtimeMs * 0.001)
}

export async function Path_entries$(self_, $task) {
const fsPromises_ = import$1;
let dir_ = null;
return ff_core_Stream.Stream((async ($task) => {
if(ff_core_JsValue.JsValue_isNull(dir_)) {
dir_ = (await fsPromises_.opendir(self_.absolutePath_, {bufferSize: 128}))
};
const entry_ = (await dir_.read());
if((!ff_core_JsValue.JsValue_isNull(entry_))) {
return ff_core_Option.Some((await (async function() {
entry_.ffPath = self_.absolutePath_;
return entry_
})()))
} else return ff_core_Option.None()
}), (async ($task) => {
if((!ff_core_JsValue.JsValue_isNull(dir_))) {
(await dir_.close())
}
}))
}

export async function Path_absolute$(self_, $task) {
return self_.absolutePath_
}

export async function Path_relativeTo$(self_, path_, $task) {
const nodePath_ = import$2;
return nodePath_.relative(path_.absolutePath_, self_.absolutePath_)
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
{
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
return path_.basename(self_.absolutePath_)
}

export async function Path_extension$(self_, $task) {
const path_ = import$2;
return path_.extname(self_.absolutePath_)
}

export async function Path_url$(self_, $task) {
const url_ = import$3;
return ("" + url_.pathToFileURL(self_.absolutePath_))
}

export async function Path_delimiter$(self_, $task) {
const path_ = import$2;
return path_.delimiter(self_.absolutePath_)
}

export async function Path_separator$(self_, $task) {
const path_ = import$2;
return path_.separator(self_.absolutePath_)
}

export async function Path_parent$(self_, $task) {
const path_ = import$2;
const result_ = path_.dirname(self_.absolutePath_);
if(((result_ !== "") && (result_ !== self_.absolutePath_))) {
return ff_core_Option.Some(ff_core_Path.Path(result_))
} else return ff_core_Option.None()
}

export async function Path_slash$(self_, relativePath_, $task) {
const path_ = import$2;
return ff_core_Path.Path(path_.join(self_.absolutePath_, relativePath_))
}

export async function Path_path$(self_, absoluteOrRelativePath_, $task) {
const path_ = import$2;
return ff_core_Path.Path(path_.resolve(self_.absolutePath_, absoluteOrRelativePath_))
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
(await fsPromises_.mkdir(self_.absolutePath_, {recursive: createParentDirectories_}))
}

export async function Path_createSymlinkTo$(self_, path_, junction_ = false, $task) {
const fsPromises_ = import$1;
(await fsPromises_.symlink(path_.absolutePath_, self_.absolutePath_, (junction_
? "junction"
: null)))
}

export async function Path_delete$(self_, retries_ = 0, retryDelay_ = 100, $task) {
const fsPromises_ = import$1;
(await fsPromises_.rm(self_.absolutePath_, {recursive: true, retries: retries_, retryDelay: retryDelay_}))
}

export async function Path_truncate$(self_, length_ = 0, $task) {
const fsPromises_ = import$1;
(await fsPromises_.truncate(self_.absolutePath_, length_))
}

export async function Path_renameTo$(self_, path_, $task) {
const fsPromises_ = import$1;
(await fsPromises_.rename(self_.absolutePath_, path_.absolutePath_))
}

export async function Path_readSymbolicLink$(self_, $task) {
const fsPromises_ = import$1;
return (await fsPromises_.readlink(self_.absolutePath_))
}

export async function Path_readText$(self_, $task) {
const fsPromises_ = import$1;
return (await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await fsPromises_.readFile(self_.absolutePath_, {encoding: "UTF-8", signal: signal_}))
}), $task))
}

export async function Path_writeText$(self_, text_, $task) {
const fsPromises_ = import$1;
(await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await fsPromises_.writeFile(self_.absolutePath_, text_, {encoding: "UTF-8", signal: signal_}))
}), $task))
}

export async function Path_appendText$(self_, text_, $task) {
const fsPromises_ = import$1;
(await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await fsPromises_.appendFile(self_.absolutePath_, text_, {encoding: "UTF-8", signal: signal_}))
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
const fs_ = import$0;
return (await ff_core_Path.internalReadStream_$((async ($task) => {
return fs_.createReadStream(self_.absolutePath_)
}), $task))
}

export async function Path_writeStream$(self_, stream_, createOnly_ = false, $task) {
(await ff_core_Path.internalWriteStream_$(self_, stream_, (createOnly_
? "wx"
: "w"), $task))
}

export async function Path_appendStream$(self_, stream_, $task) {
(await ff_core_Path.internalWriteStream_$(self_, stream_, "a", $task))
}

export async function Path_readHandle$(self_, alsoWrite_ = false, $task) {
const fsPromises_ = import$1;
return (await fsPromises_.open(self_.absolutePath_, (alsoWrite_
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
return (await fsPromises_.open(self_.absolutePath_, flags_))
}

export async function Path_appendHandle$(self_, alsoRead_ = false, mustCreate_ = false, $task) {
const fsPromises_ = import$1;
const flags_ = ((mustCreate_
? "ax"
: "a") + (alsoRead_
? "+"
: ""));
return (await fsPromises_.open(self_.absolutePath_, flags_))
}

export function PathEntry_path(self_) {
const path_ = import$2;
return ff_core_Path.Path(path_.join(self_.ffPath, self_.name))
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
return ff_core_Path.Path(path_.join(self_.ffPath, self_.name))
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




