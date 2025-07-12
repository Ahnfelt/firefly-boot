import * as ff_compiler_DevelopMode from "../../ff/compiler/DevelopMode.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_DependencyLock from "../../ff/compiler/DependencyLock.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_Main from "../../ff/compiler/Main.mjs"

import * as ff_compiler_ModuleCache from "../../ff/compiler/ModuleCache.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

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

import * as import$0 from 'node:fs';
import * as import$1 from 'node:net';
import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Runner
export function Runner(lock_, lockCondition_, state_, recompile_, changedSinceCompilationStarted_) {
return {lock_, lockCondition_, state_, recompile_, changedSinceCompilationStarted_};
}

// type RunnerState
const CompilingState$ = {CompilingState: true};
export function CompilingState() {
return CompilingState$;
}
export function CompileErrorState(output_) {
return {CompileErrorState: true, output_};
}
const AppRunningState$ = {AppRunningState: true};
export function AppRunningState() {
return AppRunningState$;
}
export function AppCrashedState(output_) {
return {AppCrashedState: true, output_};
}

export const waiterHtml_ = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n    <meta charset=\"UTF-8\">\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n    <title>Firefly develop mode</title>\r\n</head>\r\n<body>\r\n    <h1>Develop mode</h1>\r\n    <p>Waiting...</p>\r\n</body>\r\n</html>\r\n";

export function run_(system_, fireflyPath_, mainFile_, arguments_) {
const lock_ = ff_core_Task.Task_lock(ff_core_NodeSystem.NodeSystem_mainTask(system_));
const lockCondition_ = ff_core_Lock.Lock_condition(lock_);
const runner_ = ff_compiler_DevelopMode.Runner(lock_, lockCondition_, ff_compiler_DevelopMode.CompilingState(), false, ff_core_Set.new_());
const moduleCache_ = ff_compiler_ModuleCache.new_(0);
let iteration_ = 0;
ff_compiler_DevelopMode.startProxy_(system_, runner_, 8081, 8080);
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
ff_compiler_DevelopMode.startChangeListener_(system_, runner_, ff_core_NodeSystem.NodeSystem_path(system_, "."));
while(true) {
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
const mainPath_ = ff_core_NodeSystem.NodeSystem_path(system_, mainFile_);
const moduleKey_ = ff_compiler_Main.buildScript_(system_, mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, moduleCache_);
ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.state_ = ff_compiler_DevelopMode.AppRunningState()
}));
const taskIteration_ = iteration_;
const task_ = ff_compiler_DevelopMode.startApp_(system_, fireflyPath_, moduleKey_, mainFile_, arguments_, ((exitCode_, standardOut_, standardError_) => {
ff_core_Lock.Lock_do(runner_.lock_, (() => {
{
const _1 = runner_.state_;
if(_1.AppRunningState && (taskIteration_ === iteration_)) {
runner_.state_ = ff_compiler_DevelopMode.AppCrashedState(((((("Exited with code: " + exitCode_) + "\n\n") + standardOut_) + "\n\n") + standardError_))
return
}
{

return
}
}
}))
}));
ff_core_Lock.Lock_do(runner_.lock_, (() => {
while((!runner_.recompile_)) {
ff_core_Lock.LockCondition_sleep(runner_.lockCondition_)
};
ff_core_Task.Task_abort(task_);
ff_core_Set.Set_each(runner_.changedSinceCompilationStarted_, ((key_) => {
ff_compiler_ModuleCache.ModuleCache_invalidate(moduleCache_, key_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
runner_.state_ = ff_compiler_DevelopMode.CompilingState();
runner_.recompile_ = false;
runner_.changedSinceCompilationStarted_ = ff_core_Set.new_();
iteration_ += 1
}))
}
}

export function startApp_(system_, fireflyPath_, moduleKey_, mainFile_, arguments_, onExit_) {
return ff_core_Task.Task_spawn(ff_core_NodeSystem.NodeSystem_mainTask(system_), ((task_) => {
if((!ff_compiler_Main.importAndRun_(system_, fireflyPath_, "node", moduleKey_, arguments_))) {
const at_ = ff_compiler_Syntax.Location(ff_core_Path.Path_absolute(ff_core_NodeSystem.NodeSystem_path(system_, mainFile_)), 1, 1);
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "This module does not contain a 'nodeMain' function"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}))
}

export function startChangeListener_(system_, runner_, path_) {
const fs_ = import$0;
fs_.watch(ff_core_Path.Path_absolute(path_), {recursive: true}, ((eventType_, fileName_) => {
const file_ = fileName_;
if((ff_core_String.String_endsWith(file_, ".ff") || ff_core_String.String_endsWith(file_, ".firefly-workspace"))) {
return ff_core_Option.Some((function() {
const key_ = ff_core_Path.Path_url(ff_core_NodeSystem.NodeSystem_path(system_, file_));
return ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.changedSinceCompilationStarted_ = ff_core_Set.Set_add(runner_.changedSinceCompilationStarted_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
})())
} else return ff_core_Option.None()
}))
}

export function startProxy_(system_, runner_, proxyPort_, targetPort_) {
const net_ = import$1;
const targetServer_ = "localhost";
function parseHeaders_(headerData_) {
const headers_ = {};
const lines_ = headerData_.split("\r\n");
if((lines_[0].endsWith(" HTTP/1.1") || lines_[0].endsWith(" HTTP/1.0"))) {
lines_.forEach(((line_) => {
const index_ = line_.indexOf(":");
if((index_ !== (-1))) {
return ff_core_Option.Some((function() {
const key_ = line_.substring(0, index_).trim().toLowerCase();
const value_ = line_.substring((index_ + 1)).trim();
headers_[key_] = value_
})())
} else return ff_core_Option.None()
}))
};
return headers_
}
const proxyServer_ = net_.createServer(((clientSocket_) => {
let buffer_ = Buffer.alloc(0);
let isHttpNavigateRequest_ = false;
return clientSocket_.on("data", ((data_) => {
return ff_core_Task.Task_spawn(ff_core_NodeSystem.NodeSystem_mainTask(system_), ((task_) => {
buffer_ = Buffer.concat([buffer_, data_]);
const headerEnd_ = buffer_.indexOf("\r\n\r\n");
if(((headerEnd_ !== (-1)) || (buffer_.length >= (64 * 1024)))) {
const headerData_ = buffer_.subarray(0, headerEnd_).toString();
const headers_ = parseHeaders_(headerData_);
let serveWaiter_ = false;
if((headers_["sec-fetch-user"] === "?1")) {
isHttpNavigateRequest_ = true;
ff_core_Lock.Lock_do(runner_.lock_, (() => {
if((ff_core_Set.Set_size(runner_.changedSinceCompilationStarted_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)) {
runner_.recompile_ = true;
ff_core_Lock.LockCondition_wakeAll(runner_.lockCondition_);
serveWaiter_ = true
} else {
serveWaiter_ = (((_1) => {
if(_1.AppRunningState) {
return false
}
{
return true
}
}))(runner_.state_)
}
}))
};
let targetSocket_ = (void 0);
clientSocket_.on("error", ((err_) => {
console.error("Client socket error:", err_);
if((!ff_core_JsValue.JsValue_isUndefined(targetSocket_))) {
return ff_core_Option.Some(targetSocket_.end())
} else return ff_core_Option.None()
}));
function serveWaiterHtml_() {
const waiterBuffer_ = ff_core_String.String_toBuffer(ff_compiler_DevelopMode.waiterHtml_);
clientSocket_.write("HTTP/1.1 200 OK\r\n");
clientSocket_.write("Content-Type: text/html\r\n");
clientSocket_.write((("Content-Length: " + ff_core_Buffer.Buffer_size(waiterBuffer_)) + "\r\n"));
clientSocket_.write("Connection: close\r\n");
clientSocket_.write("\r\n");
clientSocket_.write(waiterBuffer_);
clientSocket_.end()
}
if(serveWaiter_) {
serveWaiterHtml_()
} else {
let connectedToTarget_ = false;
targetSocket_ = net_.createConnection(targetPort_, targetServer_, (() => {
connectedToTarget_ = true;
targetSocket_.write(buffer_);
return clientSocket_.pipe(targetSocket_).pipe(clientSocket_)
}));
targetSocket_.on("error", ((err_) => {
if(connectedToTarget_) {
console.error("Target socket error:", err_);
return clientSocket_.end()
} else {
return serveWaiterHtml_()
}
}))
}
}
}))
}))
}));
proxyServer_.listen(proxyPort_, (() => {
return console.log(("Proxy server running on port " + proxyPort_))
}))
}

export async function run_$(system_, fireflyPath_, mainFile_, arguments_, $task) {
const lock_ = (await ff_core_Task.Task_lock$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task));
const lockCondition_ = (await ff_core_Lock.Lock_condition$(lock_, $task));
const runner_ = ff_compiler_DevelopMode.Runner(lock_, lockCondition_, ff_compiler_DevelopMode.CompilingState(), false, ff_core_Set.new_());
const moduleCache_ = ff_compiler_ModuleCache.new_(0);
let iteration_ = 0;
(await ff_compiler_DevelopMode.startProxy_$(system_, runner_, 8081, 8080, $task));
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
(await ff_compiler_DevelopMode.startChangeListener_$(system_, runner_, (await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
while(true) {
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
const mainPath_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task));
const moduleKey_ = (await ff_compiler_Main.buildScript_$(system_, mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, moduleCache_, $task));
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.state_ = ff_compiler_DevelopMode.AppRunningState()
}), $task));
const taskIteration_ = iteration_;
const task_ = (await ff_compiler_DevelopMode.startApp_$(system_, fireflyPath_, moduleKey_, mainFile_, arguments_, (async (exitCode_, standardOut_, standardError_, $task) => {
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
{
const _1 = runner_.state_;
if(_1.AppRunningState && (taskIteration_ === iteration_)) {
runner_.state_ = ff_compiler_DevelopMode.AppCrashedState(((((("Exited with code: " + exitCode_) + "\n\n") + standardOut_) + "\n\n") + standardError_))
return
}
{

return
}
}
}), $task))
}), $task));
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
while((!runner_.recompile_)) {
(await ff_core_Lock.LockCondition_sleep$(runner_.lockCondition_, $task))
};
(await ff_core_Task.Task_abort$(task_, $task));
ff_core_Set.Set_each(runner_.changedSinceCompilationStarted_, ((key_) => {
ff_compiler_ModuleCache.ModuleCache_invalidate(moduleCache_, key_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
runner_.state_ = ff_compiler_DevelopMode.CompilingState();
runner_.recompile_ = false;
runner_.changedSinceCompilationStarted_ = ff_core_Set.new_();
iteration_ += 1
}), $task))
}
}

export async function startApp_$(system_, fireflyPath_, moduleKey_, mainFile_, arguments_, onExit_, $task) {
return (await ff_core_Task.Task_spawn$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), (async (task_, $task) => {
if((!(await ff_compiler_Main.importAndRun_$(system_, fireflyPath_, "node", moduleKey_, arguments_, $task)))) {
const at_ = ff_compiler_Syntax.Location((await ff_core_Path.Path_absolute$((await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task)), 1, 1);
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "This module does not contain a 'nodeMain' function"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}), $task))
}

export async function startChangeListener_$(system_, runner_, path_, $task) {
const fs_ = import$0;
fs_.watch((await ff_core_Path.Path_absolute$(path_, $task)), {recursive: true}, (async (a_1, a_2) => await (async (eventType_, fileName_, $task) => {
const file_ = fileName_;
if((ff_core_String.String_endsWith(file_, ".ff") || ff_core_String.String_endsWith(file_, ".firefly-workspace"))) {
return ff_core_Option.Some((await (async function() {
const key_ = (await ff_core_Path.Path_url$((await ff_core_NodeSystem.NodeSystem_path$(system_, file_, $task)), $task));
return (await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.changedSinceCompilationStarted_ = ff_core_Set.Set_add(runner_.changedSinceCompilationStarted_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}), $task))
})()))
} else return ff_core_Option.None()
})(a_1, a_2, $task)))
}

export async function startProxy_$(system_, runner_, proxyPort_, targetPort_, $task) {
const net_ = import$1;
const targetServer_ = "localhost";
function parseHeaders_(headerData_) {
const headers_ = {};
const lines_ = headerData_.split("\r\n");
if((lines_[0].endsWith(" HTTP/1.1") || lines_[0].endsWith(" HTTP/1.0"))) {
lines_.forEach(((line_) => {
const index_ = line_.indexOf(":");
if((index_ !== (-1))) {
return ff_core_Option.Some((function() {
const key_ = line_.substring(0, index_).trim().toLowerCase();
const value_ = line_.substring((index_ + 1)).trim();
headers_[key_] = value_
})())
} else return ff_core_Option.None()
}))
};
return headers_
}
const proxyServer_ = net_.createServer((async (a_1) => await (async (clientSocket_, $task) => {
let buffer_ = Buffer.alloc(0);
let isHttpNavigateRequest_ = false;
return clientSocket_.on("data", (async (a_1) => await (async (data_, $task) => {
return (await ff_core_Task.Task_spawn$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), (async (task_, $task) => {
buffer_ = Buffer.concat([buffer_, data_]);
const headerEnd_ = buffer_.indexOf("\r\n\r\n");
if(((headerEnd_ !== (-1)) || (buffer_.length >= (64 * 1024)))) {
const headerData_ = buffer_.subarray(0, headerEnd_).toString();
const headers_ = parseHeaders_(headerData_);
let serveWaiter_ = false;
if((headers_["sec-fetch-user"] === "?1")) {
isHttpNavigateRequest_ = true;
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
if((ff_core_Set.Set_size(runner_.changedSinceCompilationStarted_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)) {
runner_.recompile_ = true;
(await ff_core_Lock.LockCondition_wakeAll$(runner_.lockCondition_, $task));
serveWaiter_ = true
} else {
serveWaiter_ = (((_1) => {
if(_1.AppRunningState) {
return false
}
{
return true
}
}))(runner_.state_)
}
}), $task))
};
let targetSocket_ = (void 0);
clientSocket_.on("error", ((err_) => {
console.error("Client socket error:", err_);
if((!ff_core_JsValue.JsValue_isUndefined(targetSocket_))) {
return ff_core_Option.Some(targetSocket_.end())
} else return ff_core_Option.None()
}));
function serveWaiterHtml_() {
const waiterBuffer_ = ff_core_String.String_toBuffer(ff_compiler_DevelopMode.waiterHtml_);
clientSocket_.write("HTTP/1.1 200 OK\r\n");
clientSocket_.write("Content-Type: text/html\r\n");
clientSocket_.write((("Content-Length: " + ff_core_Buffer.Buffer_size(waiterBuffer_)) + "\r\n"));
clientSocket_.write("Connection: close\r\n");
clientSocket_.write("\r\n");
clientSocket_.write(waiterBuffer_);
clientSocket_.end()
}
if(serveWaiter_) {
serveWaiterHtml_()
} else {
let connectedToTarget_ = false;
targetSocket_ = net_.createConnection(targetPort_, targetServer_, (() => {
connectedToTarget_ = true;
targetSocket_.write(buffer_);
return clientSocket_.pipe(targetSocket_).pipe(clientSocket_)
}));
targetSocket_.on("error", ((err_) => {
if(connectedToTarget_) {
console.error("Target socket error:", err_);
return clientSocket_.end()
} else {
return serveWaiterHtml_()
}
}))
}
}
}), $task))
})(a_1, $task)))
})(a_1, $task)));
proxyServer_.listen(proxyPort_, (() => {
return console.log(("Proxy server running on port " + proxyPort_))
}))
}

export const ff_core_Any_HasAnyTag$ff_compiler_DevelopMode_RunnerState = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/DevelopMode.RunnerState" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/DevelopMode.RunnerState" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_DevelopMode_RunnerState = {
show_(value_) {
const value_a = value_;
if(value_a.CompilingState) {
const z_ = value_a;
return "CompilingState"
}
if(value_a.CompileErrorState) {
const z_ = value_a;
return ((("CompileErrorState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
if(value_a.AppRunningState) {
const z_ = value_a;
return "AppRunningState"
}
{
const z_ = value_a;
return ((("AppCrashedState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.CompilingState) {
const z_ = value_a;
return "CompilingState"
}
if(value_a.CompileErrorState) {
const z_ = value_a;
return ((("CompileErrorState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
if(value_a.AppRunningState) {
const z_ = value_a;
return "AppRunningState"
}
{
const z_ = value_a;
return ((("AppCrashedState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
},
};

export const ff_core_Equal_Equal$ff_compiler_DevelopMode_RunnerState = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.CompileErrorState && y_a.CompileErrorState) {
const x_ = x_a;
const y_ = y_a;
return (x_.output_ === y_.output_)
}
if(x_a.AppCrashedState && y_a.AppCrashedState) {
const x_ = x_a;
const y_ = y_a;
return (x_.output_ === y_.output_)
}
{
return false
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.CompileErrorState && y_a.CompileErrorState) {
const x_ = x_a;
const y_ = y_a;
return (x_.output_ === y_.output_)
}
if(x_a.AppCrashedState && y_a.AppCrashedState) {
const x_ = x_a;
const y_ = y_a;
return (x_.output_ === y_.output_)
}
{
return false
}
},
};

export const ff_core_Ordering_Order$ff_compiler_DevelopMode_RunnerState = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.CompileErrorState && y_a.CompileErrorState) {
const x_ = x_a;
const y_ = y_a;
const outputOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.output_, y_.output_);
if((outputOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outputOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.AppCrashedState && y_a.AppCrashedState) {
const x_ = x_a;
const y_ = y_a;
const outputOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.output_, y_.output_);
if((outputOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outputOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.CompilingState) {
return 0
}
if(z_a.CompileErrorState) {
return 1
}
if(z_a.AppRunningState) {
return 2
}
{
return 3
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.CompileErrorState && y_a.CompileErrorState) {
const x_ = x_a;
const y_ = y_a;
const outputOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.output_, y_.output_);
if((outputOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outputOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
if(x_a.AppCrashedState && y_a.AppCrashedState) {
const x_ = x_a;
const y_ = y_a;
const outputOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.output_, y_.output_);
if((outputOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outputOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.CompilingState) {
return 0
}
if(z_a.CompileErrorState) {
return 1
}
if(z_a.AppRunningState) {
return 2
}
{
return 3
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_DevelopMode_RunnerState = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.CompilingState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 38), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
if(value_a.CompileErrorState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 41), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
return
}
if(value_a.AppRunningState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 38), 0);
return ff_compiler_DevelopMode.CompilingState()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 41), 0);
return ff_compiler_DevelopMode.CompileErrorState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
return ff_compiler_DevelopMode.AppRunningState()
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
return ff_compiler_DevelopMode.AppCrashedState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.CompilingState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 38), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
if(value_a.CompileErrorState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 41), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
return
}
if(value_a.AppRunningState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 38), 0);
return ff_compiler_DevelopMode.CompilingState()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 41), 0);
return ff_compiler_DevelopMode.CompileErrorState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
return ff_compiler_DevelopMode.AppRunningState()
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 39), 0);
return ff_compiler_DevelopMode.AppCrashedState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};


//# sourceMappingURL=DevelopMode.mjs.map