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

import * as import$0 from 'fs/promises';
import * as import$3 from 'node:child_process';
import * as import$1 from 'path';
import * as import$2 from 'url';
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

export function internalListDirectoryWithoutOpendir_(system_, path_) {
const fsPromises_ = import$0;
const nodePath_ = import$1;
const files_ = fsPromises_.readdir(path_.absolutePath_);
return ff_core_List.List_map(ff_core_JsValue.JsValue_grabArray(files_), ((file_) => {
return ff_core_Path.Path(nodePath_.join(path_.absolutePath_, file_))
}))
}

export function internalProcessError_(problem_) {
try {
throw ff_core_Js.initializeError_(ff_core_NodeSystem.ProcessException(problem_), new Error(), ff_core_NodeSystem.ff_core_Any_HasAnyTag$ff_core_NodeSystem_ProcessException, ff_core_NodeSystem.ff_core_Show_Show$ff_core_NodeSystem_ProcessException)
} catch(error_) {
return error_
}
}

export async function internalListDirectoryWithoutOpendir_$(system_, path_, $task) {
const fsPromises_ = import$0;
const nodePath_ = import$1;
const files_ = (await fsPromises_.readdir(path_.absolutePath_));
return ff_core_List.List_map(ff_core_JsValue.JsValue_grabArray(files_), ((file_) => {
return ff_core_Path.Path(nodePath_.join(path_.absolutePath_, file_))
}))
}

export async function internalProcessError_$(problem_, $task) {
try {
throw ff_core_Js.initializeError_(ff_core_NodeSystem.ProcessException(problem_), new Error(), ff_core_NodeSystem.ff_core_Any_HasAnyTag$ff_core_NodeSystem_ProcessException, ff_core_NodeSystem.ff_core_Show_Show$ff_core_NodeSystem_ProcessException)
} catch(error_) {
return error_
}
}

export function NodeSystem_arguments(self_) {
return self_["array_"]
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
return self_["assets_"]
}
}

export function NodeSystem_path(self_, relativePath_) {
const nodePath_ = import$1;
return ff_core_Path.Path(nodePath_.resolve(relativePath_))
}

export function NodeSystem_pathFromUrl(self_, url_) {
const nodeUrl_ = import$2;
return ff_core_Path.Path(nodeUrl_.fileURLToPath((new URL(url_))))
}

export function NodeSystem_httpClient(self_) {
return globalThis
}

export function NodeSystem_mainTask(self_) {
return self_["task_"]
}

export function NodeSystem_crypto(self_) {
return globalThis.crypto
}

export function NodeSystem_js(self_) {
return globalThis
}

export function NodeSystem_date(self_, timeZoneId_ = ff_core_Option.None(), calendarId_ = ff_core_Date.isoCalendarId_) {
const date_ = Temporal.Now.zonedDateTimeISO(ff_core_Option.Option_else(ff_core_Option.Option_map(timeZoneId_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})));
if((calendarId_ === ff_core_Date.isoCalendarId_)) {
return date_
} else {
return ff_core_Date.Date_withCalendar(date_, calendarId_)
}
}

export function NodeSystem_exit(self_, exitCode_ = 0) {
return process.exit(exitCode_)
}

export function NodeSystem_readStream(self_) {
return ff_core_Path.internalReadStream_((() => {
return process.stdin
}), true)
}

export function NodeSystem_writeBuffer(self_, buffer_) {
process.stdout.write((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength)))
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
process.stderr.write((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength)))
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
let result_ = ff_core_Map.new_();
ff_core_JsValue.JsValue_each(process.env, ((key_) => {
result_ = ff_core_Map.Map_add(result_, key_, process.env[key_], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
return result_
}

export function NodeSystem_execute(self_, command_, arguments_, standardIn_ = ff_core_Buffer.new_(0), directory_ = ff_core_Option.None(), environment_ = ff_core_Option.None(), maxBuffer_ = 16777216, killSignal_ = 9, shell_ = false, node_ = false) {
const childProcess_ = import$3;
const env_ = ff_core_Option.Option_else(ff_core_Option.Option_map(environment_, ((e_) => {
const o_ = {};
ff_core_Map.Map_each(e_, ((k_, v_) => {
o_[k_] = v_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return o_
})), (() => {
return process.env
}));
return ff_core_Js.withSignal_(((signal_) => {
return ff_core_Js.awaitCancellablePromise_(((resolve_, reject_, onSettle_) => {
const newProcess_ = (node_
? childProcess_.fork(command_, arguments_, {cwd: ff_core_Option.Option_else(ff_core_Option.Option_map(directory_, ((_w1) => {
return _w1.absolutePath_
})), (() => {
return (void 0)
})), signal: signal_, killSignal: killSignal_, env: env_, silent: true})
: childProcess_.spawn(command_, arguments_, {cwd: ff_core_Option.Option_else(ff_core_Option.Option_map(directory_, ((_w1) => {
return _w1.absolutePath_
})), (() => {
return (void 0)
})), windowsHide: true, signal: signal_, killSignal: killSignal_, env: env_, shell: shell_}));
let size_ = 0;
const out_ = ff_core_Array.new_();
const err_ = ff_core_Array.new_();
newProcess_.stdout.on("data", ((data_) => {
if((size_ <= maxBuffer_)) {
size_ += data_.byteLength;
if((size_ > maxBuffer_)) {
newProcess_.kill(killSignal_)
} else {
out_.array.push(data_)
}
}
}));
newProcess_.stderr.on("data", ((data_) => {
if((size_ <= maxBuffer_)) {
size_ += data_.byteLength;
if((size_ > maxBuffer_)) {
newProcess_.kill(killSignal_)
} else {
err_.array.push(data_)
}
}
}));
if((standardIn_.byteLength !== 0)) {
newProcess_.stdin.write(standardIn_)
};
newProcess_.stdin.end();
newProcess_.on("error", ((error_) => {
if((size_ > maxBuffer_)) {
return reject_(ff_core_NodeSystem.internalProcessError_("maxBuffer exceeded"))
} else {
reject_(ff_core_NodeSystem.internalProcessError_(error_.message))
}
}));
newProcess_.on("close", ((code_) => {
const o_ = Buffer.concat(ff_core_Array.Array_drain(out_));
const e_ = Buffer.concat(ff_core_Array.Array_drain(err_));
return resolve_(ff_core_NodeSystem.ProcessResult(code_, (new DataView(o_.buffer, o_.byteOffset, o_.byteLength)), (new DataView(e_.buffer, e_.byteOffset, e_.byteLength))))
}));
onSettle_(((fulfilled_) => {
if((!fulfilled_)) {
newProcess_.kill(killSignal_)
}
}))
}))
}))
}

export async function NodeSystem_arguments$(self_, $task) {
return self_["array_"]
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
return self_["assets_"]
}
}

export async function NodeSystem_path$(self_, relativePath_, $task) {
const nodePath_ = import$1;
return ff_core_Path.Path(nodePath_.resolve(relativePath_))
}

export async function NodeSystem_pathFromUrl$(self_, url_, $task) {
const nodeUrl_ = import$2;
return ff_core_Path.Path(nodeUrl_.fileURLToPath((new URL(url_))))
}

export async function NodeSystem_httpClient$(self_, $task) {
return globalThis
}

export async function NodeSystem_mainTask$(self_, $task) {
return self_["task_"]
}

export async function NodeSystem_crypto$(self_, $task) {
return globalThis.crypto
}

export async function NodeSystem_js$(self_, $task) {
return globalThis
}

export async function NodeSystem_date$(self_, timeZoneId_ = ff_core_Option.None(), calendarId_ = ff_core_Date.isoCalendarId_, $task) {
const date_ = Temporal.Now.zonedDateTimeISO(ff_core_Option.Option_else(ff_core_Option.Option_map(timeZoneId_, ((_w1) => {
return _w1
})), (() => {
return (void 0)
})));
if((calendarId_ === ff_core_Date.isoCalendarId_)) {
return date_
} else {
return ff_core_Date.Date_withCalendar(date_, calendarId_)
}
}

export async function NodeSystem_exit$(self_, exitCode_ = 0, $task) {
return process.exit(exitCode_)
}

export async function NodeSystem_readStream$(self_, $task) {
return (await ff_core_Path.internalReadStream_$((async ($task) => {
return process.stdin
}), true, $task))
}

export async function NodeSystem_writeBuffer$(self_, buffer_, $task) {
process.stdout.write((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength)))
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
process.stderr.write((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength)))
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
let result_ = ff_core_Map.new_();
ff_core_JsValue.JsValue_each(process.env, ((key_) => {
result_ = ff_core_Map.Map_add(result_, key_, process.env[key_], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
return result_
}

export async function NodeSystem_execute$(self_, command_, arguments_, standardIn_ = ff_core_Buffer.new_(0), directory_ = ff_core_Option.None(), environment_ = ff_core_Option.None(), maxBuffer_ = 16777216, killSignal_ = 9, shell_ = false, node_ = false, $task) {
const childProcess_ = import$3;
const env_ = ff_core_Option.Option_else(ff_core_Option.Option_map(environment_, ((e_) => {
const o_ = {};
ff_core_Map.Map_each(e_, ((k_, v_) => {
o_[k_] = v_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return o_
})), (() => {
return process.env
}));
return (await ff_core_Js.withSignal_$((async (signal_, $task) => {
return (await ff_core_Js.awaitCancellablePromise_$(((resolve_, reject_, onSettle_) => {
const newProcess_ = (node_
? childProcess_.fork(command_, arguments_, {cwd: ff_core_Option.Option_else(ff_core_Option.Option_map(directory_, ((_w1) => {
return _w1.absolutePath_
})), (() => {
return (void 0)
})), signal: signal_, killSignal: killSignal_, env: env_, silent: true})
: childProcess_.spawn(command_, arguments_, {cwd: ff_core_Option.Option_else(ff_core_Option.Option_map(directory_, ((_w1) => {
return _w1.absolutePath_
})), (() => {
return (void 0)
})), windowsHide: true, signal: signal_, killSignal: killSignal_, env: env_, shell: shell_}));
let size_ = 0;
const out_ = ff_core_Array.new_();
const err_ = ff_core_Array.new_();
newProcess_.stdout.on("data", ((data_) => {
if((size_ <= maxBuffer_)) {
size_ += data_.byteLength;
if((size_ > maxBuffer_)) {
newProcess_.kill(killSignal_)
} else {
out_.array.push(data_)
}
}
}));
newProcess_.stderr.on("data", ((data_) => {
if((size_ <= maxBuffer_)) {
size_ += data_.byteLength;
if((size_ > maxBuffer_)) {
newProcess_.kill(killSignal_)
} else {
err_.array.push(data_)
}
}
}));
if((standardIn_.byteLength !== 0)) {
newProcess_.stdin.write(standardIn_)
};
newProcess_.stdin.end();
newProcess_.on("error", ((error_) => {
if((size_ > maxBuffer_)) {
return reject_(ff_core_NodeSystem.internalProcessError_("maxBuffer exceeded"))
} else {
reject_(ff_core_NodeSystem.internalProcessError_(error_.message))
}
}));
newProcess_.on("close", ((code_) => {
const o_ = Buffer.concat(ff_core_Array.Array_drain(out_));
const e_ = Buffer.concat(ff_core_Array.Array_drain(err_));
return resolve_(ff_core_NodeSystem.ProcessResult(code_, (new DataView(o_.buffer, o_.byteOffset, o_.byteLength)), (new DataView(e_.buffer, e_.byteOffset, e_.byteLength))))
}));
onSettle_(((fulfilled_) => {
if((!fulfilled_)) {
newProcess_.kill(killSignal_)
}
}))
}), $task))
}), $task))
}

export const ff_core_Any_HasAnyTag$ff_core_NodeSystem_ProcessException = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:core/NodeSystem.ProcessException" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:core/NodeSystem.ProcessException" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_core_NodeSystem_ProcessException = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((("ProcessException" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.problem_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((("ProcessException" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.problem_)) + ")")
}
},
};


//# sourceMappingURL=NodeSystem.mjs.map