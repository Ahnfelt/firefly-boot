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

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Runner
export function Runner(state_, changedSinceCompilationStarted_) {
return {state_, changedSinceCompilationStarted_};
}

// type RunnerState
const CompilingState$ = {CompilingState: true};
export function CompilingState() {
return CompilingState$;
}
export function CompileErrorState(output_) {
return {CompileErrorState: true, output_};
}
export function AppRunningState(output_) {
return {AppRunningState: true, output_};
}
export function AppCrashedState(output_) {
return {AppCrashedState: true, output_};
}

export function run_(system_, fireflyPath_, mainFile_, arguments_) {
ff_compiler_Main.prepareFireflyDirectory_(ff_core_NodeSystem.NodeSystem_path(system_, "."));
const moduleCache_ = ff_compiler_ModuleCache.new_(0);
while(true) {
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_compiler_DependencyLock.new_(ff_core_NodeSystem.NodeSystem_mainTask(system_)), ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
const mainPath_ = ff_core_NodeSystem.NodeSystem_path(system_, mainFile_);
const moduleKey_ = ff_compiler_Main.buildScript_(system_, mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, moduleCache_);
if((!ff_compiler_Main.importAndRun_(system_, fireflyPath_, "node", moduleKey_, arguments_))) {
const at_ = ff_compiler_Syntax.Location(ff_core_Path.Path_absolute(ff_core_NodeSystem.NodeSystem_path(system_, mainFile_)), 1, 1);
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "This module does not contain a 'nodeMain' function"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
}

export async function run_$(system_, fireflyPath_, mainFile_, arguments_, $task) {
(await ff_compiler_Main.prepareFireflyDirectory_$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".", $task)), $task));
const moduleCache_ = ff_compiler_ModuleCache.new_(0);
while(true) {
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_compiler_DependencyLock.new_$((await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
const mainPath_ = (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task));
const moduleKey_ = (await ff_compiler_Main.buildScript_$(system_, mainPath_, resolvedDependencies_.mainPackagePair_, ff_compiler_JsEmitter.EmitNode(), resolvedDependencies_, moduleCache_, $task));
if((!(await ff_compiler_Main.importAndRun_$(system_, fireflyPath_, "node", moduleKey_, arguments_, $task)))) {
const at_ = ff_compiler_Syntax.Location((await ff_core_Path.Path_absolute$((await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task)), 1, 1);
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "This module does not contain a 'nodeMain' function"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_DevelopMode_Runner = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/DevelopMode.Runner" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/DevelopMode.Runner" + "[") + "]"))
},
};

export const ff_core_Any_HasAnyTag$ff_compiler_DevelopMode_RunnerState = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/DevelopMode.RunnerState" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/DevelopMode.RunnerState" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_DevelopMode_Runner = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("Runner" + "(") + ff_compiler_DevelopMode.ff_core_Show_Show$ff_compiler_DevelopMode_RunnerState.show_(z_.state_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).show_(z_.changedSinceCompilationStarted_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("Runner" + "(") + ff_compiler_DevelopMode.ff_core_Show_Show$ff_compiler_DevelopMode_RunnerState.show_(z_.state_)) + ", ") + ff_core_Set.ff_core_Show_Show$ff_core_Set_Set(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).show_(z_.changedSinceCompilationStarted_)) + ")")
}
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
return ((("AppRunningState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
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
return ((("AppRunningState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
{
const z_ = value_a;
return ((("AppCrashedState" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.output_)) + ")")
}
},
};

export const ff_core_Equal_Equal$ff_compiler_DevelopMode_Runner = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_DevelopMode.ff_core_Equal_Equal$ff_compiler_DevelopMode_RunnerState.equals_(x_.state_, y_.state_) && ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).equals_(x_.changedSinceCompilationStarted_, y_.changedSinceCompilationStarted_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_DevelopMode.ff_core_Equal_Equal$ff_compiler_DevelopMode_RunnerState.equals_(x_.state_, y_.state_) && ff_core_Set.ff_core_Equal_Equal$ff_core_Set_Set(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).equals_(x_.changedSinceCompilationStarted_, y_.changedSinceCompilationStarted_))
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
if(x_a.AppRunningState && y_a.AppRunningState) {
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
if(x_a.AppRunningState && y_a.AppRunningState) {
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

export const ff_core_Ordering_Order$ff_compiler_DevelopMode_Runner = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const stateOrdering_ = ff_compiler_DevelopMode.ff_core_Ordering_Order$ff_compiler_DevelopMode_RunnerState.compare_(x_.state_, y_.state_);
if((stateOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stateOrdering_
} else {
const changedSinceCompilationStartedOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.changedSinceCompilationStarted_, y_.changedSinceCompilationStarted_);
if((changedSinceCompilationStartedOrdering_ !== ff_core_Ordering.OrderingSame())) {
return changedSinceCompilationStartedOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const stateOrdering_ = ff_compiler_DevelopMode.ff_core_Ordering_Order$ff_compiler_DevelopMode_RunnerState.compare_(x_.state_, y_.state_);
if((stateOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stateOrdering_
} else {
const changedSinceCompilationStartedOrdering_ = ff_core_Set.ff_core_Ordering_Order$ff_core_Set_Set(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.changedSinceCompilationStarted_, y_.changedSinceCompilationStarted_);
if((changedSinceCompilationStartedOrdering_ !== ff_core_Ordering.OrderingSame())) {
return changedSinceCompilationStartedOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
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
if(x_a.AppRunningState && y_a.AppRunningState) {
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
if(x_a.AppRunningState && y_a.AppRunningState) {
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

export const ff_core_Serializable_Serializable$ff_compiler_DevelopMode_Runner = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_DevelopMode.ff_core_Serializable_Serializable$ff_compiler_DevelopMode_RunnerState.serializeUsing_(serialization_, v_.state_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).serializeUsing_(serialization_, v_.changedSinceCompilationStarted_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_DevelopMode.Runner(ff_compiler_DevelopMode.ff_core_Serializable_Serializable$ff_compiler_DevelopMode_RunnerState.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_DevelopMode.ff_core_Serializable_Serializable$ff_compiler_DevelopMode_RunnerState.serializeUsing_(serialization_, v_.state_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).serializeUsing_(serialization_, v_.changedSinceCompilationStarted_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_DevelopMode.Runner(ff_compiler_DevelopMode.ff_core_Serializable_Serializable$ff_compiler_DevelopMode_RunnerState.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Set_Set(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
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
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
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
return ff_compiler_DevelopMode.AppRunningState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
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
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.output_)
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
return ff_compiler_DevelopMode.AppRunningState(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
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