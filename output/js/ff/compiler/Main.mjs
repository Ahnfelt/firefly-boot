

import * as ff_compiler_Main from "../../ff/compiler/Main.mjs"

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





export function main_(system_) {
const target_ = ff_core_List.List_expect(ff_core_NodeSystem.NodeSystem_arguments(system_), 0);
const mainPackage_ = ff_core_List.List_expect(ff_core_NodeSystem.NodeSystem_arguments(system_), 1);
const mainModule_ = ff_core_List.List_expect(ff_core_NodeSystem.NodeSystem_arguments(system_), 2);
const packagePaths_ = ff_compiler_Main.parsePackageLocations_(ff_core_List.List_expect(ff_core_NodeSystem.NodeSystem_arguments(system_), 3));
const tempPath_ = ff_core_List.List_expect(ff_core_NodeSystem.NodeSystem_arguments(system_), 4);
const jsOutputPath_ = ff_core_List.List_expect(ff_core_NodeSystem.NodeSystem_arguments(system_), 5);
ff_compiler_Builder.build_(system_, target_, mainPackage_, mainModule_, packagePaths_, tempPath_, jsOutputPath_)
}

export function parsePackageLocations_(text_) {
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Array.Array_toList(ff_core_String.String_split(text_, 44)), ((item_) => {
const parts_ = ff_core_String.String_split(item_, 64);
return ff_core_Pair.Pair(ff_core_Array.Array_expect(parts_, 0), ff_core_Array.Array_expect(parts_, 1))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function main_$(system_, $c) {
const target_ = ff_core_List.List_expect((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c)), 0);
const mainPackage_ = ff_core_List.List_expect((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c)), 1);
const mainModule_ = ff_core_List.List_expect((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c)), 2);
const packagePaths_ = ff_compiler_Main.parsePackageLocations_(ff_core_List.List_expect((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c)), 3));
const tempPath_ = ff_core_List.List_expect((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c)), 4);
const jsOutputPath_ = ff_core_List.List_expect((await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c)), 5);
(await ff_compiler_Builder.build_$(system_, target_, mainPackage_, mainModule_, packagePaths_, tempPath_, jsOutputPath_, $c))
}

export async function parsePackageLocations_$(text_, $c) {
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Array.Array_toList(ff_core_String.String_split(text_, 44)), ((item_) => {
const parts_ = ff_core_String.String_split(item_, 64);
return ff_core_Pair.Pair(ff_core_Array.Array_expect(parts_, 0), ff_core_Array.Array_expect(parts_, 1))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}





queueMicrotask(async () => {
const controller = new AbortController()
controller.promises = new Set()
let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)
try {
await main_$({array_: typeof process !== 'undefined' ? process.argv.slice(2) : []}, controller)
} finally {
controller.abort()
clearInterval(interval)
}
})
