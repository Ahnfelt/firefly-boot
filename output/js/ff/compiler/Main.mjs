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

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"





export function main_(system_) {
const mainPackage_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 0)
const mainModule_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 1)
const packagePaths_ = ff_compiler_Main.parsePackageLocations_(ff_core_List.List_expect(ff_core_System.System_arguments(system_), 2))
const tempPath_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 3)
const jsOutputPath_ = ff_core_List.List_expect(ff_core_System.System_arguments(system_), 4)
const fs_ = ff_core_System.System_files(system_)
if(ff_core_FileSystem.FileSystem_exists(fs_, tempPath_)) {
ff_compiler_Main.deleteDirectory_(fs_, tempPath_)
}
ff_core_FileSystem.FileSystem_createDirectory(fs_, tempPath_)
const jsPathFile_ = (tempPath_ + "/js")
ff_core_FileSystem.FileSystem_createDirectories(fs_, jsPathFile_)
const success_ = ff_core_Core.do_((() => {
const compiler_ = ff_compiler_Compiler.make_(fs_, ff_core_System.System_time(system_), jsPathFile_, packagePaths_)
ff_compiler_Compiler.Compiler_emit(compiler_, mainPackage_, mainModule_)
ff_compiler_Compiler.Compiler_printMeasurements(compiler_)
return true
}))
if(success_) {
if(ff_core_FileSystem.FileSystem_exists(fs_, jsOutputPath_)) {
ff_compiler_Main.deleteDirectory_(fs_, jsOutputPath_)
}
ff_core_FileSystem.FileSystem_rename(fs_, jsPathFile_, jsOutputPath_)
}
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

export function parsePackageLocations_(text_) {
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Array.Array_toList(ff_core_String.String_split(text_, 44)), ((item_) => {
const parts_ = ff_core_String.String_split(item_, 64)
return ff_core_Pair.Pair(ff_core_Array.Array_expect(parts_, 0), ff_core_Array.Array_expect(parts_, 1))
})))
}





queueMicrotask(() => main_({array_: process.argv.slice(2)}))
