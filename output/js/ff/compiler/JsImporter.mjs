

import * as ff_compiler_JsImporter from "../../ff/compiler/JsImporter.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type JsImporter
export function JsImporter(imports_) {
return {imports_};
}



export function make_() {
return ff_compiler_JsImporter.JsImporter(ff_core_Map.empty_())
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function make_$($c) {
return ff_compiler_JsImporter.JsImporter(ff_core_Map.empty_())
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function JsImporter_process(self_, at_, code_) {
const space_ = ff_core_String.String_takeWhile(code_, ((c_) => {
return (((((c_ == 32) || (c_ == 9)) || (c_ == 13)) || (c_ == 10)) || (c_ == 59))
}));
const rest_ = ff_core_String.String_dropFirst(code_, ff_core_String.String_size(space_));
if((!ff_core_String.String_startsWith(rest_, "import * as ", 0))) {
return code_
} else {
const rest2_ = ff_core_String.String_dropFirst(rest_, ff_core_String.String_size("import * as "));
const name_ = ff_core_String.String_takeWhile(rest2_, ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
}));
if((ff_core_String.String_size(name_) == 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected alias after \"import * as \"")
};
const rest3_ = ff_core_String.String_dropFirst(rest2_, ff_core_String.String_size(name_));
if((!ff_core_String.String_startsWith(rest3_, " from '", 0))) {
ff_compiler_JsImporter.fail_(at_, "Expected \" from '\" after \"import * as ...\"")
};
const rest4_ = ff_core_String.String_dropFirst(rest3_, ff_core_String.String_size(" from '"));
const url_ = ff_core_String.String_takeWhile(rest4_, ((_w1) => {
return (_w1 != 39)
}));
if((ff_core_String.String_size(url_) == 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected module name after \" from '\"")
};
if(ff_core_String.String_any(url_, ((_w1) => {
return (_w1 == 10)
}))) {
ff_compiler_JsImporter.fail_(at_, "Unclosed module name string")
};
const rest5_ = ff_core_String.String_dropFirst(rest4_, (ff_core_String.String_size(url_) + 1));
const importName_ = (((_1) => {
{
if(_1.None) {
const n_ = ("import$" + ff_core_Map.Map_size(self_.imports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
self_.imports_ = ff_core_Map.Map_add(self_.imports_, url_, n_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return n_
return
}
}
{
if(_1.Some) {
const n_ = _1.value_;
return n_
return
}
}
}))(ff_core_Map.Map_get(self_.imports_, url_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (((((space_ + "const ") + name_) + " = ") + importName_) + ff_compiler_JsImporter.JsImporter_process(self_, at_, rest5_))
}
}

export function JsImporter_generateImports(self_) {
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_.imports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const moduleName_ = _1.first_;
const mangledName_ = _1.second_;
return (((("import * as " + mangledName_) + " from '") + moduleName_) + "';")
return
}
}))
}

export async function JsImporter_process$(self_, at_, code_, $c) {
const space_ = ff_core_String.String_takeWhile(code_, ((c_) => {
return (((((c_ == 32) || (c_ == 9)) || (c_ == 13)) || (c_ == 10)) || (c_ == 59))
}));
const rest_ = ff_core_String.String_dropFirst(code_, ff_core_String.String_size(space_));
if((!ff_core_String.String_startsWith(rest_, "import * as ", 0))) {
return code_
} else {
const rest2_ = ff_core_String.String_dropFirst(rest_, ff_core_String.String_size("import * as "));
const name_ = ff_core_String.String_takeWhile(rest2_, ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
}));
if((ff_core_String.String_size(name_) == 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected alias after \"import * as \"")
};
const rest3_ = ff_core_String.String_dropFirst(rest2_, ff_core_String.String_size(name_));
if((!ff_core_String.String_startsWith(rest3_, " from '", 0))) {
ff_compiler_JsImporter.fail_(at_, "Expected \" from '\" after \"import * as ...\"")
};
const rest4_ = ff_core_String.String_dropFirst(rest3_, ff_core_String.String_size(" from '"));
const url_ = ff_core_String.String_takeWhile(rest4_, ((_w1) => {
return (_w1 != 39)
}));
if((ff_core_String.String_size(url_) == 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected module name after \" from '\"")
};
if(ff_core_String.String_any(url_, ((_w1) => {
return (_w1 == 10)
}))) {
ff_compiler_JsImporter.fail_(at_, "Unclosed module name string")
};
const rest5_ = ff_core_String.String_dropFirst(rest4_, (ff_core_String.String_size(url_) + 1));
const importName_ = (((_1) => {
{
if(_1.None) {
const n_ = ("import$" + ff_core_Map.Map_size(self_.imports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
self_.imports_ = ff_core_Map.Map_add(self_.imports_, url_, n_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return n_
return
}
}
{
if(_1.Some) {
const n_ = _1.value_;
return n_
return
}
}
}))(ff_core_Map.Map_get(self_.imports_, url_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
return (((((space_ + "const ") + name_) + " = ") + importName_) + ff_compiler_JsImporter.JsImporter_process(self_, at_, rest5_))
}
}

export async function JsImporter_generateImports$(self_, $c) {
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_.imports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const moduleName_ = _1.first_;
const mangledName_ = _1.second_;
return (((("import * as " + mangledName_) + " from '") + moduleName_) + "';")
return
}
}))
}



