

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

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





export function build_(system_, target_, mainPackage_, mainModule_, packagePaths_, tempPath_, jsOutputPath_, printMeasurements_) {
const fs_ = ff_core_NodeSystem.NodeSystem_files(system_);
const targetIsNode_ = ((target_ == "node")
? true
: (target_ == "browser")
? false
: ff_core_Core.panic_((("Unknown target '" + target_) + "'")));
if(ff_core_FileSystem.FileSystem_exists(fs_, tempPath_)) {
ff_compiler_Builder.deleteDirectory_(fs_, tempPath_)
};
ff_core_FileSystem.FileSystem_createDirectory(fs_, tempPath_);
const jsPathFile_ = (tempPath_ + "/js");
ff_core_FileSystem.FileSystem_createDirectories(fs_, jsPathFile_);
const success_ = ff_core_Core.do_((() => {
const compiler_ = ff_compiler_Compiler.make_(targetIsNode_, fs_, ff_core_NodeSystem.NodeSystem_time(system_), jsPathFile_, packagePaths_);
ff_compiler_Compiler.Compiler_emit(compiler_, mainPackage_, mainModule_);
if(printMeasurements_) {
ff_compiler_Compiler.Compiler_printMeasurements(compiler_)
};
return true
}));
if(success_) {
if(ff_core_FileSystem.FileSystem_exists(fs_, jsOutputPath_)) {
ff_compiler_Builder.deleteDirectory_(fs_, jsOutputPath_)
};
ff_core_FileSystem.FileSystem_rename(fs_, jsPathFile_, jsOutputPath_)
}
}

export function deleteDirectory_(fs_, outputFile_) {
ff_core_List.List_each(ff_core_FileSystem.FileSystem_list(fs_, outputFile_), ((file_) => {
if(ff_core_FileSystem.FileSystem_isDirectory(fs_, file_)) {
ff_compiler_Builder.deleteDirectory_(fs_, file_)
} else {
ff_core_FileSystem.FileSystem_delete(fs_, file_)
}
}));
ff_core_FileSystem.FileSystem_delete(fs_, outputFile_)
}

export async function build_$(system_, target_, mainPackage_, mainModule_, packagePaths_, tempPath_, jsOutputPath_, printMeasurements_, $c) {
const fs_ = (await ff_core_NodeSystem.NodeSystem_files$(system_, $c));
const targetIsNode_ = ((target_ == "node")
? true
: (target_ == "browser")
? false
: ff_core_Core.panic_((("Unknown target '" + target_) + "'")));
if((await ff_core_FileSystem.FileSystem_exists$(fs_, tempPath_, $c))) {
(await ff_compiler_Builder.deleteDirectory_$(fs_, tempPath_, $c))
};
(await ff_core_FileSystem.FileSystem_createDirectory$(fs_, tempPath_, $c));
const jsPathFile_ = (tempPath_ + "/js");
(await ff_core_FileSystem.FileSystem_createDirectories$(fs_, jsPathFile_, $c));
const success_ = (await ff_core_Core.do_$((async ($c) => {
const compiler_ = (await ff_compiler_Compiler.make_$(targetIsNode_, fs_, (await ff_core_NodeSystem.NodeSystem_time$(system_, $c)), jsPathFile_, packagePaths_, $c));
(await ff_compiler_Compiler.Compiler_emit$(compiler_, mainPackage_, mainModule_, $c));
if(printMeasurements_) {
(await ff_compiler_Compiler.Compiler_printMeasurements$(compiler_, $c))
};
return true
}), $c));
if(success_) {
if((await ff_core_FileSystem.FileSystem_exists$(fs_, jsOutputPath_, $c))) {
(await ff_compiler_Builder.deleteDirectory_$(fs_, jsOutputPath_, $c))
};
(await ff_core_FileSystem.FileSystem_rename$(fs_, jsPathFile_, jsOutputPath_, $c))
}
}

export async function deleteDirectory_$(fs_, outputFile_, $c) {
(await ff_core_List.List_each$((await ff_core_FileSystem.FileSystem_list$(fs_, outputFile_, $c)), (async (file_, $c) => {
if((await ff_core_FileSystem.FileSystem_isDirectory$(fs_, file_, $c))) {
(await ff_compiler_Builder.deleteDirectory_$(fs_, file_, $c))
} else {
(await ff_core_FileSystem.FileSystem_delete$(fs_, file_, $c))
}
}), $c));
(await ff_core_FileSystem.FileSystem_delete$(fs_, outputFile_, $c))
}






