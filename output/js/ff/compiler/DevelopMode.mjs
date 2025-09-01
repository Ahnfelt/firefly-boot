import * as ff_compiler_DevelopMode from "../../ff/compiler/DevelopMode.mjs"

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

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
export function Runner(lock_, lockCondition_, iteration_, state_, changedSinceCompilationStarted_, recompile_, appRunning_) {
return {lock_, lockCondition_, iteration_, state_, changedSinceCompilationStarted_, recompile_, appRunning_};
}

// type RunnerState
const CompilingState$ = {CompilingState: true};
export function CompilingState() {
return CompilingState$;
}
export function CompileErrorState(at_, output_) {
return {CompileErrorState: true, at_, output_};
}
const ApplicationRunningState$ = {ApplicationRunningState: true};
export function ApplicationRunningState() {
return ApplicationRunningState$;
}
export function ApplicationCrashedState(output_) {
return {ApplicationCrashedState: true, output_};
}

export const waiterHtml_ = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Firefly develop mode</title>\n    <style>\n        body {\n            background-color: #121212;\n            color: #e0e0e0;\n            font-family: 'Courier New', monospace;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n            height: 100vh;\n            margin: 0;\n            background-image: radial-gradient(circle at center, #1a1a2e, #121212);\n        }\n\n        h1 {\n            color: #00f2ff;\n            text-shadow: 0 0 10px #00f2ff;\n            font-size: 3rem;\n            margin-bottom: 20px;\n            animation: glow 2s ease-in-out infinite alternate;\n        }\n\n        p {\n            background-color: #1a1a2e;\n            color: #00f2ff;\n            padding: 15px 30px;\n            border-radius: 25px;\n            font-size: 1.2rem;\n            border: 2px solid #00f2ff;\n            box-shadow: 0 0 15px #00f2ff;\n            animation: pulse 1.5s infinite;\n        }\n            \n        a {\n            color: #00f2ff;\n        }\n\n        @media only screen and (max-width: 600px) {\n            h1 {\n                font-size: 1.7rem;\n            }\n            p {\n                padding: 10px 20px;\n                border-radius: 50px;\n                font-size: 1.1rem;\n                max-width: 100%;\n                box-sizing: border-box;\n            }\n        }\n                    \n        @keyframes glow {\n            from {\n                text-shadow: 0 0 10px #00f2ff;\n            }\n            to {\n                text-shadow: 0 0 20px #00f2ff, 0 0 30px #00f2ff;\n            }\n        }\n\n        @keyframes pulse {\n            0% {\n                box-shadow: 0 0 0 0 rgba(0, 242, 255, 0.7);\n            }\n            70% {\n                box-shadow: 0 0 0 10px rgba(0, 242, 255, 0);\n            }\n            100% {\n                box-shadow: 0 0 0 0 rgba(0, 242, 255, 0);\n            }\n        }\n    </style>\n    <script>\n        let start = Date.now()\n        let appStarted = null\n        let delay = 10\n        let poll = async () => {\n            //delay *= 1.1\n            try {\n                let response = await fetch(\".\", {cache: 'no-store'})\n                if(!response.headers.has('x-firefly-develop-mode')) {\n                    let now = Date.now()\n                    let compiling = appStarted - start\n                    let appStarting = now - appStarted\n                    //window.alert(\"Reloading after: \" + (now - start) + \" ms. Compiling: \" + compiling + \" ms. Starting application: \" + appStarting + \" ms.\")\n                    window.location.reload(true)\n                    return\n                } else {\n                    let html = await response.text()\n                    if(appStarted == null && html.includes(\"Starting application...\")) appStarted = Date.now()\n                    let parser = new DOMParser()\n                    let d = parser.parseFromString(html, 'text/html')\n                    let bodyHtml = d.body.innerHTML\n                    if(document.body.innerHTML !== bodyHtml) {\n                        document.body.innerHTML = bodyHtml\n                    }\n                    setTimeout(poll, delay)\n                }\n            } catch (error) {\n                console.error(\"Polling error:\", error)\n                setTimeout(poll, delay)\n            }\n        }\n        setTimeout(poll, delay)\n    </script>\n</head>\n<body>\n    <h1>Firefly develop mode</h1>\n    <p>[STATUS]</p>\n</body>\n</html>\n";

export function run_(system_, fireflyPath_, mainFile_, arguments_) {
const lock_ = ff_core_Task.Task_lock(ff_core_NodeSystem.NodeSystem_mainTask(system_));
const lockCondition_ = ff_core_Lock.Lock_condition(lock_);
const runner_ = ff_compiler_DevelopMode.Runner(lock_, lockCondition_, 1, ff_compiler_DevelopMode.CompilingState(), ff_core_Set.new_(), false, false);
ff_compiler_DevelopMode.startProxy_(system_, runner_, 8081, 8080);
ff_compiler_DevelopMode.startChangeListener_(system_, runner_, ff_core_NodeSystem.NodeSystem_path(system_, "."));
const moduleCache_ = ff_compiler_ModuleCache.new_(0);
while(true) {
ff_compiler_DevelopMode.print_(system_, "Compiling...");
const moduleKey_ = ff_compiler_DevelopMode.build_(system_, runner_, mainFile_, moduleCache_);
const task_ = (((_1) => {
if(_1.None) {
return ff_core_Task.Task_spawn(ff_core_NodeSystem.NodeSystem_mainTask(system_), ((_) => {

}))
return
}
{
const key_ = _1.value_;
ff_compiler_DevelopMode.print_(system_, "Running...");
ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.state_ = ff_compiler_DevelopMode.ApplicationRunningState()
}));
return ff_compiler_DevelopMode.startApp_(system_, runner_, fireflyPath_, moduleCache_, key_, mainFile_, arguments_)
}
}))(moduleKey_);
ff_core_Lock.Lock_do(runner_.lock_, (() => {
if(runner_.appRunning_) {
ff_compiler_DevelopMode.print_(system_, "Still shutting down app...");
while(runner_.appRunning_) {
ff_core_Lock.LockCondition_sleep(runner_.lockCondition_)
}
};
ff_compiler_DevelopMode.print_(system_, "Waiting for refresh...");
while((!runner_.recompile_)) {
ff_core_Lock.LockCondition_sleep(runner_.lockCondition_)
};
ff_compiler_DevelopMode.print_(system_, "Shutting down app...");
ff_core_Task.Task_abort(task_);
ff_core_Set.Set_each(runner_.changedSinceCompilationStarted_, ((key_) => {
ff_compiler_ModuleCache.ModuleCache_invalidate(moduleCache_, key_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
runner_.state_ = ff_compiler_DevelopMode.CompilingState();
runner_.recompile_ = false;
runner_.changedSinceCompilationStarted_ = ff_core_Set.new_();
runner_.iteration_ += 1
}))
}
}

export function build_(system_, runner_, mainFile_, moduleCache_) {
return ff_core_Try.Try_catchAny(ff_core_Try.Try_tryCatch(ff_core_Try.Try_tryCatch(ff_core_Core.try_((() => {
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
const mainPath_ = ff_core_NodeSystem.NodeSystem_path(system_, mainFile_);
return ff_core_Option.Some(ff_compiler_Main.buildScript_(system_, mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, moduleCache_, true))
})), ((_1, _2) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
const error_ = _2;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_));
ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.state_ = ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.Some(at_), message_)
}));
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError), ((_1, _2) => {
{
const compileErrors_ = _1.errors_;
const error_ = _2;
ff_core_List.List_each(compileErrors_, ((_1) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_));
ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.state_ = ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.Some(at_), message_)
}))
return
}
}));
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors), ((error_) => {
ff_core_Log.debug_(ff_core_Error.Error_message(error_));
ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.state_ = ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.None(), ff_core_Error.Error_message(error_))
}));
return ff_core_Option.None()
}))
}

export function startApp_(system_, runner_, fireflyPath_, moduleCache_, moduleKey_, mainFile_, arguments_) {
const taskIteration_ = runner_.iteration_;
return ff_core_Task.Task_spawn(ff_core_NodeSystem.NodeSystem_mainTask(system_), ((task_) => {
try {
const runFile_ = ff_compiler_Main.locateRunFile_(system_, "node", moduleKey_);
const runFilePath_ = (ff_core_String.String_contains(runFile_, "://")
? ff_core_NodeSystem.NodeSystem_pathFromUrl(system_, runFile_)
: ff_core_NodeSystem.NodeSystem_path(system_, runFile_));
const startPath_ = ff_core_Path.Path_slash(ff_core_Option.Option_grab(ff_core_Path.Path_parent(runFilePath_)), (ff_core_Path.Path_base(runFilePath_) + ".start.mjs"));
ff_core_Path.Path_writeText(startPath_, ((((((((("import * as run from " + ff_core_Json.Json_write(("./" + ff_core_Path.Path_base(runFilePath_)), ff_core_Option.None())) + "\n") + "console.log('Nod ' + Date.now() + ': Run (after import)')\n") + "globalThis.ffDevelopMode = true\n") + "run.$run$(") + ff_core_Json.Json_write(ff_core_Path.Path_absolute(fireflyPath_), ff_core_Option.None())) + ", ") + ff_core_Json.Json_write(ff_core_Json.ff_core_Json_JsonLike$ff_core_List_List(ff_core_Json.ff_core_Json_JsonLike$ff_core_String_String).toJson_(arguments_), ff_core_Option.None())) + ")"));
const esBuildPath_ = ff_core_Path.Path_slash(ff_core_Option.Option_grab(ff_core_Path.Path_parent(runFilePath_)), (ff_core_Path.Path_base(runFilePath_) + ".minified.js"));
ff_core_BuildSystem.internalNodeCallEsBuild_(system_, ff_core_Path.Path_absolute(startPath_), ff_core_Path.Path_absolute(esBuildPath_), true);
const relativeStartFile_ = ff_core_Path.Path_relativeTo(esBuildPath_, ff_core_NodeSystem.NodeSystem_path(system_, "."));
ff_compiler_DevelopMode.print_(system_, "Execute with node");
const result_ = ff_core_NodeSystem.NodeSystem_execute(system_, relativeStartFile_, arguments_, ff_core_Buffer.new_(0, false), ff_core_Option.None(), ff_core_Option.None(), 16777216, 9, false, ff_core_Option.Some(((message_, forkedProcess_) => {
if((message_.ffDevelopMode === "internalCompile")) {
const mainFiles_ = message_.mainFiles;
const mainPaths_ = ff_core_List.List_map(mainFiles_, ((_w1) => {
return ff_core_NodeSystem.NodeSystem_path(system_, _w1)
}));
const target_ = message_.target;
ff_core_Lock.Lock_do(runner_.lock_, (() => {
if((taskIteration_ === runner_.iteration_)) {
return ff_core_Option.Some((ff_compiler_Builder.buildViaBuildSystem_(system_, fireflyPath_, mainPaths_, target_, moduleCache_, true), forkedProcess_.send({ffDevelopMode: "internalCompile"})))
} else return ff_core_Option.None()
}))
}
})));
const standardOut_ = ff_core_Buffer.Buffer_toString(result_.standardOut_, "utf8");
const standardError_ = ff_core_Buffer.Buffer_toString(result_.standardError_, "utf8");
ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.appRunning_ = false;
ff_core_Log.debug_(((((("Exited with code: " + result_.exitCode_) + "\n\n") + standardOut_) + "\n\n") + standardError_));
do {
const _1 = runner_.state_;
if(_1.ApplicationRunningState && (taskIteration_ === runner_.iteration_)) {
runner_.state_ = ff_compiler_DevelopMode.ApplicationCrashedState(((((("Exited with code: " + result_.exitCode_) + "\n\n") + standardOut_) + "\n\n") + standardError_))
break
}
{

}
} while(false);
return ff_core_Lock.LockCondition_wakeAll(runner_.lockCondition_)
}))
} catch(error_) {
ff_core_Lock.Lock_do(runner_.lock_, (() => {
runner_.appRunning_ = false;
return ff_core_Lock.LockCondition_wakeAll(runner_.lockCondition_)
}))
}
}))
}

export function print_(nodeSystem_, text_) {
const now_ = ff_core_Date.Date_epochMilliseconds(ff_core_NodeSystem.NodeSystem_date(nodeSystem_, ff_core_Option.None(), ff_core_Date.isoCalendarId_));
ff_core_NodeSystem.NodeSystem_writeErrorLine(nodeSystem_, ((("Dev " + now_) + ": ") + text_))
}

export function startChangeListener_(system_, runner_, path_) {
const fs_ = import$0;
fs_.watch(ff_core_Path.Path_absolute(path_), {recursive: true}, ((eventType_, fileName_) => {
if((!ff_core_JsValue.JsValue_isNullOrUndefined(fileName_))) {
return ff_core_Option.Some((function() {
const file_ = fileName_;
if((ff_core_String.String_endsWith(file_, ".ff") || ff_core_String.String_endsWith(file_, ".firefly-workspace"))) {
return ff_core_Option.Some((function() {
const key_ = ff_core_Path.Path_absolute(ff_core_NodeSystem.NodeSystem_path(system_, file_));
return ff_core_Lock.Lock_do(runner_.lock_, (() => {
ff_compiler_DevelopMode.print_(system_, ("Changed! " + key_));
runner_.changedSinceCompilationStarted_ = ff_core_Set.Set_add(runner_.changedSinceCompilationStarted_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
})())
} else return ff_core_Option.None()
})())
} else return ff_core_Option.None()
}))
}

export function startProxy_(system_, runner_, proxyPort_, targetPort_) {
const net_ = import$1;
const targetServer_ = "localhost";
const proxyServer_ = net_.createServer({pauseOnConnect: true}, ((clientSocket_) => {
let targetSocket_ = (void 0);
let connected_ = false;
clientSocket_.on("error", ((err_) => {
if((!ff_core_JsValue.JsValue_isUndefined(targetSocket_))) {
targetSocket_.end()
};
return ff_core_Log.debugDynamic_(err_)
}));
function serveWaiterHtml_() {
if((ff_core_Set.Set_size(runner_.changedSinceCompilationStarted_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)) {
runner_.recompile_ = true;
ff_core_Task.Task_spawn(ff_core_NodeSystem.NodeSystem_mainTask(system_), ((task_) => {
ff_core_Lock.Lock_do(runner_.lock_, (() => {
return ff_core_Lock.LockCondition_wakeAll(runner_.lockCondition_)
}))
}))
};
function escapeHtml_(html_) {
return ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(html_, "&", "&amp;"), "'", "&#039;"), "\"", "&quot;"), "<", "&lt;"), ">", "&gt;")
}
const status_ = (((_1) => {
if(runner_.recompile_) {
return "Restarting..."
}
if(_1.ApplicationCrashedState) {
const output_ = _1.output_;
return ("Application crashed!<br>" + escapeHtml_(output_))
}
if(_1.ApplicationRunningState) {
return "Starting application..."
}
if(_1.CompileErrorState && _1.at_.Some) {
const at_ = _1.at_.value_;
const output_ = _1.output_;
const location_ = escapeHtml_(((((at_.file_ + ":") + at_.line_) + ":") + at_.column_));
const relativeFile_ = ff_core_Path.Path_relativeTo(ff_core_NodeSystem.NodeSystem_path(system_, at_.file_), ff_core_NodeSystem.NodeSystem_path(system_, "."));
const relativeLocation_ = escapeHtml_(((((relativeFile_ + ":") + at_.line_) + ":") + at_.column_));
const link_ = (((("<a href='vscode://file/" + escapeHtml_(location_)) + "'>") + relativeLocation_) + "</a>");
return ((escapeHtml_(output_) + "<br><br>at ") + link_)
}
if(_1.CompileErrorState && _1.at_.None) {
const output_ = _1.output_;
return ("Compiler crashed!<br>" + escapeHtml_(output_))
}
{
return "Compiling..."
}
}))(runner_.state_);
const waiterBuffer_ = ff_core_String.String_toBuffer(ff_core_String.String_replace(ff_compiler_DevelopMode.waiterHtml_, "[STATUS]", status_));
clientSocket_.write("HTTP/1.1 200 OK\r\n");
clientSocket_.write("Content-Type: text/html\r\n");
clientSocket_.write((("Content-Length: " + ff_core_Buffer.Buffer_size(waiterBuffer_)) + "\r\n"));
clientSocket_.write("x-firefly-develop-mode: true\r\n");
clientSocket_.write("Connection: close\r\n");
clientSocket_.write("\r\n");
clientSocket_.write(Buffer.from(waiterBuffer_.buffer, waiterBuffer_.byteOffset, waiterBuffer_.byteLength));
clientSocket_.end()
}
targetSocket_ = net_.createConnection(targetPort_, targetServer_, (() => {
connected_ = true;
const direct_ = (((_1) => {
if(_1.ApplicationRunningState) {
return ((!runner_.recompile_) && (ff_core_Set.Set_size(runner_.changedSinceCompilationStarted_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) === 0))
}
{
return false
}
}))(runner_.state_);
if(direct_) {
clientSocket_.pipe(targetSocket_).pipe(clientSocket_);
return clientSocket_.resume()
} else {
return serveWaiterHtml_()
}
}));
return targetSocket_.on("error", ((err_) => {
if(connected_) {
return clientSocket_.end()
} else {
return serveWaiterHtml_()
}
}))
}));
proxyServer_.listen(proxyPort_, (() => {
return ff_compiler_DevelopMode.print_(system_, ("Proxy server running on port " + proxyPort_))
}))
}

export async function run_$(system_, fireflyPath_, mainFile_, arguments_, $task) {
const lock_ = (await ff_core_Task.Task_lock$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task));
const lockCondition_ = (await ff_core_Lock.Lock_condition$(lock_, $task));
const runner_ = ff_compiler_DevelopMode.Runner(lock_, lockCondition_, 1, ff_compiler_DevelopMode.CompilingState(), ff_core_Set.new_(), false, false);
(await ff_compiler_DevelopMode.startProxy_$(system_, runner_, 8081, 8080, $task));
(await ff_compiler_DevelopMode.startChangeListener_$(system_, runner_, (await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const moduleCache_ = ff_compiler_ModuleCache.new_(0);
while(true) {
(await ff_compiler_DevelopMode.print_$(system_, "Compiling...", $task));
const moduleKey_ = (await ff_compiler_DevelopMode.build_$(system_, runner_, mainFile_, moduleCache_, $task));
const task_ = (await ((async (_1, $task) => {
if(_1.None) {
return (await ff_core_Task.Task_spawn$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), (async (_, $task) => {

}), $task))
return
}
{
const key_ = _1.value_;
(await ff_compiler_DevelopMode.print_$(system_, "Running...", $task));
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.state_ = ff_compiler_DevelopMode.ApplicationRunningState()
}), $task));
return (await ff_compiler_DevelopMode.startApp_$(system_, runner_, fireflyPath_, moduleCache_, key_, mainFile_, arguments_, $task))
}
}))(moduleKey_, $task));
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
if(runner_.appRunning_) {
(await ff_compiler_DevelopMode.print_$(system_, "Still shutting down app...", $task));
while(runner_.appRunning_) {
(await ff_core_Lock.LockCondition_sleep$(runner_.lockCondition_, $task))
}
};
(await ff_compiler_DevelopMode.print_$(system_, "Waiting for refresh...", $task));
while((!runner_.recompile_)) {
(await ff_core_Lock.LockCondition_sleep$(runner_.lockCondition_, $task))
};
(await ff_compiler_DevelopMode.print_$(system_, "Shutting down app...", $task));
(await ff_core_Task.Task_abort$(task_, $task));
ff_core_Set.Set_each(runner_.changedSinceCompilationStarted_, ((key_) => {
ff_compiler_ModuleCache.ModuleCache_invalidate(moduleCache_, key_)
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
runner_.state_ = ff_compiler_DevelopMode.CompilingState();
runner_.recompile_ = false;
runner_.changedSinceCompilationStarted_ = ff_core_Set.new_();
runner_.iteration_ += 1
}), $task))
}
}

export async function build_$(system_, runner_, mainFile_, moduleCache_, $task) {
return (await ff_core_Try.Try_catchAny$((await ff_core_Try.Try_tryCatch$((await ff_core_Try.Try_tryCatch$((await ff_core_Core.try_$((async ($task) => {
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
const mainPath_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task));
return ff_core_Option.Some((await ff_compiler_Main.buildScript_$(system_, mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, moduleCache_, true, $task)))
}), $task)), (async (_1, _2, $task) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
const error_ = _2;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_));
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.state_ = ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.Some(at_), message_)
}), $task));
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, $task)), (async (_1, _2, $task) => {
{
const compileErrors_ = _1.errors_;
const error_ = _2;
(await ff_core_List.List_each$(compileErrors_, (async (_1, $task) => {
{
const at_ = _1.at_;
const message_ = _1.message_;
ff_core_Log.debug_(message_);
ff_core_Log.debug_((((((" at " + ff_core_String.String_replace(at_.file_, "./", "")) + ":") + at_.line_) + ":") + at_.column_));
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.state_ = ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.Some(at_), message_)
}), $task))
return
}
}), $task));
return ff_core_Option.None()
}
}), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors, $task)), (async (error_, $task) => {
ff_core_Log.debug_(ff_core_Error.Error_message(error_));
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.state_ = ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.None(), ff_core_Error.Error_message(error_))
}), $task));
return ff_core_Option.None()
}), $task))
}

export async function startApp_$(system_, runner_, fireflyPath_, moduleCache_, moduleKey_, mainFile_, arguments_, $task) {
const taskIteration_ = runner_.iteration_;
return (await ff_core_Task.Task_spawn$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), (async (task_, $task) => {
try {
const runFile_ = (await ff_compiler_Main.locateRunFile_$(system_, "node", moduleKey_, $task));
const runFilePath_ = (ff_core_String.String_contains(runFile_, "://")
? (await ff_core_NodeSystem.NodeSystem_pathFromUrl$(system_, runFile_, $task))
: (await ff_core_NodeSystem.NodeSystem_path$(system_, runFile_, $task)));
const startPath_ = (await ff_core_Path.Path_slash$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(runFilePath_, $task))), ((await ff_core_Path.Path_base$(runFilePath_, $task)) + ".start.mjs"), $task));
(await ff_core_Path.Path_writeText$(startPath_, ((((((((("import * as run from " + ff_core_Json.Json_write(("./" + (await ff_core_Path.Path_base$(runFilePath_, $task))), ff_core_Option.None())) + "\n") + "console.log('Nod ' + Date.now() + ': Run (after import)')\n") + "globalThis.ffDevelopMode = true\n") + "run.$run$(") + ff_core_Json.Json_write((await ff_core_Path.Path_absolute$(fireflyPath_, $task)), ff_core_Option.None())) + ", ") + ff_core_Json.Json_write(ff_core_Json.ff_core_Json_JsonLike$ff_core_List_List(ff_core_Json.ff_core_Json_JsonLike$ff_core_String_String).toJson_(arguments_), ff_core_Option.None())) + ")"), $task));
const esBuildPath_ = (await ff_core_Path.Path_slash$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(runFilePath_, $task))), ((await ff_core_Path.Path_base$(runFilePath_, $task)) + ".minified.js"), $task));
(await ff_core_BuildSystem.internalNodeCallEsBuild_$(system_, (await ff_core_Path.Path_absolute$(startPath_, $task)), (await ff_core_Path.Path_absolute$(esBuildPath_, $task)), true, $task));
const relativeStartFile_ = (await ff_core_Path.Path_relativeTo$(esBuildPath_, (await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
(await ff_compiler_DevelopMode.print_$(system_, "Execute with node", $task));
const result_ = (await ff_core_NodeSystem.NodeSystem_execute$(system_, relativeStartFile_, arguments_, ff_core_Buffer.new_(0, false), ff_core_Option.None(), ff_core_Option.None(), 16777216, 9, false, ff_core_Option.Some((async (message_, forkedProcess_, $task) => {
if((message_.ffDevelopMode === "internalCompile")) {
const mainFiles_ = message_.mainFiles;
const mainPaths_ = (await ff_core_List.List_map$(mainFiles_, (async (_w1, $task) => {
return (await ff_core_NodeSystem.NodeSystem_path$(system_, _w1, $task))
}), $task));
const target_ = message_.target;
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
if((taskIteration_ === runner_.iteration_)) {
return ff_core_Option.Some(((await ff_compiler_Builder.buildViaBuildSystem_$(system_, fireflyPath_, mainPaths_, target_, moduleCache_, true, $task)), forkedProcess_.send({ffDevelopMode: "internalCompile"})))
} else return ff_core_Option.None()
}), $task))
}
})), $task));
const standardOut_ = ff_core_Buffer.Buffer_toString(result_.standardOut_, "utf8");
const standardError_ = ff_core_Buffer.Buffer_toString(result_.standardError_, "utf8");
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.appRunning_ = false;
ff_core_Log.debug_(((((("Exited with code: " + result_.exitCode_) + "\n\n") + standardOut_) + "\n\n") + standardError_));
do {
const _1 = runner_.state_;
if(_1.ApplicationRunningState && (taskIteration_ === runner_.iteration_)) {
runner_.state_ = ff_compiler_DevelopMode.ApplicationCrashedState(((((("Exited with code: " + result_.exitCode_) + "\n\n") + standardOut_) + "\n\n") + standardError_))
break
}
{

}
} while(false);
return (await ff_core_Lock.LockCondition_wakeAll$(runner_.lockCondition_, $task))
}), $task))
} catch(error_) {
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
runner_.appRunning_ = false;
return (await ff_core_Lock.LockCondition_wakeAll$(runner_.lockCondition_, $task))
}), $task))
}
}), $task))
}

export async function print_$(nodeSystem_, text_, $task) {
const now_ = ff_core_Date.Date_epochMilliseconds((await ff_core_NodeSystem.NodeSystem_date$(nodeSystem_, ff_core_Option.None(), ff_core_Date.isoCalendarId_, $task)));
(await ff_core_NodeSystem.NodeSystem_writeErrorLine$(nodeSystem_, ((("Dev " + now_) + ": ") + text_), $task))
}

export async function startChangeListener_$(system_, runner_, path_, $task) {
const fs_ = import$0;
fs_.watch((await ff_core_Path.Path_absolute$(path_, $task)), {recursive: true}, (async (a_1, a_2) => await (async (eventType_, fileName_, $task) => {
if((!ff_core_JsValue.JsValue_isNullOrUndefined(fileName_))) {
return ff_core_Option.Some((await (async function() {
const file_ = fileName_;
if((ff_core_String.String_endsWith(file_, ".ff") || ff_core_String.String_endsWith(file_, ".firefly-workspace"))) {
return ff_core_Option.Some((await (async function() {
const key_ = (await ff_core_Path.Path_absolute$((await ff_core_NodeSystem.NodeSystem_path$(system_, file_, $task)), $task));
return (await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
(await ff_compiler_DevelopMode.print_$(system_, ("Changed! " + key_), $task));
runner_.changedSinceCompilationStarted_ = ff_core_Set.Set_add(runner_.changedSinceCompilationStarted_, key_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}), $task))
})()))
} else return ff_core_Option.None()
})()))
} else return ff_core_Option.None()
})(a_1, a_2, $task)))
}

export async function startProxy_$(system_, runner_, proxyPort_, targetPort_, $task) {
const net_ = import$1;
const targetServer_ = "localhost";
const proxyServer_ = net_.createServer({pauseOnConnect: true}, (async (a_1) => await (async (clientSocket_, $task) => {
let targetSocket_ = (void 0);
let connected_ = false;
clientSocket_.on("error", ((err_) => {
if((!ff_core_JsValue.JsValue_isUndefined(targetSocket_))) {
targetSocket_.end()
};
return ff_core_Log.debugDynamic_(err_)
}));
async function serveWaiterHtml_$($task) {
if((ff_core_Set.Set_size(runner_.changedSinceCompilationStarted_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) !== 0)) {
runner_.recompile_ = true;
(await ff_core_Task.Task_spawn$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), (async (task_, $task) => {
(await ff_core_Lock.Lock_do$(runner_.lock_, (async ($task) => {
return (await ff_core_Lock.LockCondition_wakeAll$(runner_.lockCondition_, $task))
}), $task))
}), $task))
};
function escapeHtml_(html_) {
return ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(html_, "&", "&amp;"), "'", "&#039;"), "\"", "&quot;"), "<", "&lt;"), ">", "&gt;")
}
const status_ = (await ((async (_1, $task) => {
if(runner_.recompile_) {
return "Restarting..."
}
if(_1.ApplicationCrashedState) {
const output_ = _1.output_;
return ("Application crashed!<br>" + escapeHtml_(output_))
}
if(_1.ApplicationRunningState) {
return "Starting application..."
}
if(_1.CompileErrorState && _1.at_.Some) {
const at_ = _1.at_.value_;
const output_ = _1.output_;
const location_ = escapeHtml_(((((at_.file_ + ":") + at_.line_) + ":") + at_.column_));
const relativeFile_ = (await ff_core_Path.Path_relativeTo$((await ff_core_NodeSystem.NodeSystem_path$(system_, at_.file_, $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const relativeLocation_ = escapeHtml_(((((relativeFile_ + ":") + at_.line_) + ":") + at_.column_));
const link_ = (((("<a href='vscode://file/" + escapeHtml_(location_)) + "'>") + relativeLocation_) + "</a>");
return ((escapeHtml_(output_) + "<br><br>at ") + link_)
}
if(_1.CompileErrorState && _1.at_.None) {
const output_ = _1.output_;
return ("Compiler crashed!<br>" + escapeHtml_(output_))
}
{
return "Compiling..."
}
}))(runner_.state_, $task));
const waiterBuffer_ = ff_core_String.String_toBuffer(ff_core_String.String_replace(ff_compiler_DevelopMode.waiterHtml_, "[STATUS]", status_));
clientSocket_.write("HTTP/1.1 200 OK\r\n");
clientSocket_.write("Content-Type: text/html\r\n");
clientSocket_.write((("Content-Length: " + ff_core_Buffer.Buffer_size(waiterBuffer_)) + "\r\n"));
clientSocket_.write("x-firefly-develop-mode: true\r\n");
clientSocket_.write("Connection: close\r\n");
clientSocket_.write("\r\n");
clientSocket_.write(Buffer.from(waiterBuffer_.buffer, waiterBuffer_.byteOffset, waiterBuffer_.byteLength));
clientSocket_.end()
}
targetSocket_ = net_.createConnection(targetPort_, targetServer_, (async () => await (async ($task) => {
connected_ = true;
const direct_ = (((_1) => {
if(_1.ApplicationRunningState) {
return ((!runner_.recompile_) && (ff_core_Set.Set_size(runner_.changedSinceCompilationStarted_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String) === 0))
}
{
return false
}
}))(runner_.state_);
if(direct_) {
clientSocket_.pipe(targetSocket_).pipe(clientSocket_);
return clientSocket_.resume()
} else {
return (await serveWaiterHtml_$($task))
}
})($task)));
return targetSocket_.on("error", (async (a_1) => await (async (err_, $task) => {
if(connected_) {
return clientSocket_.end()
} else {
return (await serveWaiterHtml_$($task))
}
})(a_1, $task)))
})(a_1, $task)));
proxyServer_.listen(proxyPort_, (async () => await (async ($task) => {
return (await ff_compiler_DevelopMode.print_$(system_, ("Proxy server running on port " + proxyPort_), $task))
})($task)))
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
return ((((("CompileErrorState" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location).show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
if(value_a.ApplicationRunningState) {
const z_ = value_a;
return "ApplicationRunningState"
}
{
const z_ = value_a;
return ((("ApplicationCrashedState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
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
return ((((("CompileErrorState" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location).show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
if(value_a.ApplicationRunningState) {
const z_ = value_a;
return "ApplicationRunningState"
}
{
const z_ = value_a;
return ((("ApplicationCrashedState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
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
return (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location).equals_(x_.at_, y_.at_) && (x_.output_ === y_.output_))
}
if(x_a.ApplicationCrashedState && y_a.ApplicationCrashedState) {
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
return (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location).equals_(x_.at_, y_.at_) && (x_.output_ === y_.output_))
}
if(x_a.ApplicationCrashedState && y_a.ApplicationCrashedState) {
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
const atOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location).compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const outputOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.output_, y_.output_);
if((outputOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outputOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.ApplicationCrashedState && y_a.ApplicationCrashedState) {
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
if(z_a.ApplicationRunningState) {
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
const atOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location).compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const outputOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.output_, y_.output_);
if((outputOrdering_ !== ff_core_Ordering.OrderingSame())) {
return outputOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.ApplicationCrashedState && y_a.ApplicationCrashedState) {
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
if(z_a.ApplicationRunningState) {
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
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location).serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
return
}
if(value_a.ApplicationRunningState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
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
return ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
return ff_compiler_DevelopMode.ApplicationRunningState()
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
return ff_compiler_DevelopMode.ApplicationCrashedState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
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
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location).serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
return
}
if(value_a.ApplicationRunningState) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
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
return ff_compiler_DevelopMode.CompileErrorState(ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
return ff_compiler_DevelopMode.ApplicationRunningState()
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 47), 0);
return ff_compiler_DevelopMode.ApplicationCrashedState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};


//# sourceMappingURL=DevelopMode.mjs.map