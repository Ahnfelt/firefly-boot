import * as ff_compiler_Main from "../../ff/compiler/Main.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"





export function main_(system_) {
const corePath_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 0)
const inputPath_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 1)
const tempPath_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 2)
const scalaOutputPath_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 3)
const jsOutputPath_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 4)
const fs_ = ff_core_System.System_files(system_)
if(ff_core_FileSystem.FileSystem_exists(fs_, tempPath_)) {
ff_compiler_Main.deleteDirectory_(fs_, tempPath_)
}
ff_core_FileSystem.FileSystem_createDirectory(fs_, tempPath_)
const scalaPathFile_ = (tempPath_ + "/src/main/scala")
ff_core_FileSystem.FileSystem_createDirectories(fs_, scalaPathFile_)
const jsPathFile_ = (tempPath_ + "/src/main/js")
ff_core_FileSystem.FileSystem_createDirectories(fs_, jsPathFile_)
const packagePaths_ = ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair("ff:compiler", "compiler"), ff_core_List.Link(ff_core_Pair.Pair("ff:core", "core"), ff_core_List.Empty())))
const success_ = ff_core_Core.do_((() => {
ff_compiler_Compiler.Compiler_emit(ff_compiler_Compiler.make_(fs_, scalaPathFile_, jsPathFile_, packagePaths_), "ff:compiler", "Main")
return true
}))
if(success_) {
ff_compiler_Main.writeExtraFiles_(fs_, inputPath_, corePath_, tempPath_, scalaPathFile_)
if(ff_core_FileSystem.FileSystem_exists(fs_, scalaOutputPath_)) {
ff_compiler_Main.deleteDirectory_(fs_, scalaOutputPath_)
}
if(ff_core_FileSystem.FileSystem_exists(fs_, jsOutputPath_)) {
ff_compiler_Main.deleteDirectory_(fs_, jsOutputPath_)
}
ff_core_FileSystem.FileSystem_rename(fs_, scalaPathFile_, scalaOutputPath_)
ff_core_FileSystem.FileSystem_rename(fs_, jsPathFile_, jsOutputPath_)
}
}

export function writeExtraFiles_(fs_, package_, corePath_, outputFile_, scalaFile_) {
ff_core_FileSystem.FileSystem_writeText(fs_, (outputFile_ + "/build.sbt"), "scalaVersion := \"2.13.3\"")
}

export function deleteDirectory_(fs_, outputFile_) {
ff_core_List.List_each(ff_core_FileSystem.FileSystem_list(fs_, outputFile_), ((file_) => {
if(ff_core_FileSystem.FileSystem_isDirectory(fs_, file_)) {
ff_compiler_Main.deleteDirectory_(fs_, file_)
} else {
ff_core_FileSystem.FileSystem_delete(fs_, file_)
}
}))
ff_core_FileSystem.FileSystem_delete(fs_, outputFile_)
}



if(!globalThis.$ffSkipMain) queueMicrotask(() => main_({array_: process.argv.slice(2)}))
