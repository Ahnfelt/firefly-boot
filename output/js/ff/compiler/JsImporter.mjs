

import * as ff_compiler_JsImporter from "../../ff/compiler/JsImporter.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

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

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

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

export function JsImporter_add(self_, url_) {
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
return importName_
}

export function JsImporter_process(self_, at_, code_) {
const space_ = ff_core_String.String_takeWhile(code_, ((c_) => {
return (((((c_ === 32) || (c_ === 9)) || (c_ === 13)) || (c_ === 10)) || (c_ === 59))
}));
const rest_ = ff_core_String.String_dropFirst(code_, ff_core_String.String_size(space_));
if((!ff_core_String.String_startsWith(rest_, "import * as ", 0))) {
return code_
} else {
const rest2_ = ff_core_String.String_dropFirst(rest_, ff_core_String.String_size("import * as "));
const name_ = ff_core_String.String_takeWhile(rest2_, ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
}));
if((ff_core_String.String_size(name_) === 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected alias after \"import * as \"")
};
const rest3_ = ff_core_String.String_dropFirst(rest2_, ff_core_String.String_size(name_));
if((!ff_core_String.String_startsWith(rest3_, " from '", 0))) {
ff_compiler_JsImporter.fail_(at_, "Expected \" from '\" after \"import * as ...\"")
};
const rest4_ = ff_core_String.String_dropFirst(rest3_, ff_core_String.String_size(" from '"));
const url_ = ff_core_String.String_takeWhile(rest4_, ((_w1) => {
return (_w1 !== 39)
}));
if((ff_core_String.String_size(url_) === 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected module name after \" from '\"")
};
if(ff_core_String.String_any(url_, ((_w1) => {
return (_w1 === 10)
}))) {
ff_compiler_JsImporter.fail_(at_, "Unclosed module name string")
};
const rest5_ = ff_core_String.String_dropFirst(rest4_, (ff_core_String.String_size(url_) + 1));
const importName_ = ff_compiler_JsImporter.JsImporter_add(self_, url_);
return (((((space_ + "const ") + name_) + " = ") + importName_) + ff_compiler_JsImporter.JsImporter_process(self_, at_, rest5_))
}
}

export function JsImporter_generateImports(self_, ignoreModules_) {
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_.imports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const moduleName_ = _1.first_;
const mangledName_ = _1.second_;
if(ff_core_Set.Set_contains(ignoreModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (("const " + mangledName_) + " = void 0; // Ignored import")
} else {
return (((("import * as " + mangledName_) + " from '") + moduleName_) + "';")
}
return
}
}))
}

export async function JsImporter_add$(self_, url_, $c) {
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
return importName_
}

export async function JsImporter_process$(self_, at_, code_, $c) {
const space_ = ff_core_String.String_takeWhile(code_, ((c_) => {
return (((((c_ === 32) || (c_ === 9)) || (c_ === 13)) || (c_ === 10)) || (c_ === 59))
}));
const rest_ = ff_core_String.String_dropFirst(code_, ff_core_String.String_size(space_));
if((!ff_core_String.String_startsWith(rest_, "import * as ", 0))) {
return code_
} else {
const rest2_ = ff_core_String.String_dropFirst(rest_, ff_core_String.String_size("import * as "));
const name_ = ff_core_String.String_takeWhile(rest2_, ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
}));
if((ff_core_String.String_size(name_) === 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected alias after \"import * as \"")
};
const rest3_ = ff_core_String.String_dropFirst(rest2_, ff_core_String.String_size(name_));
if((!ff_core_String.String_startsWith(rest3_, " from '", 0))) {
ff_compiler_JsImporter.fail_(at_, "Expected \" from '\" after \"import * as ...\"")
};
const rest4_ = ff_core_String.String_dropFirst(rest3_, ff_core_String.String_size(" from '"));
const url_ = ff_core_String.String_takeWhile(rest4_, ((_w1) => {
return (_w1 !== 39)
}));
if((ff_core_String.String_size(url_) === 0)) {
ff_compiler_JsImporter.fail_(at_, "Expected module name after \" from '\"")
};
if(ff_core_String.String_any(url_, ((_w1) => {
return (_w1 === 10)
}))) {
ff_compiler_JsImporter.fail_(at_, "Unclosed module name string")
};
const rest5_ = ff_core_String.String_dropFirst(rest4_, (ff_core_String.String_size(url_) + 1));
const importName_ = ff_compiler_JsImporter.JsImporter_add(self_, url_);
return (((((space_ + "const ") + name_) + " = ") + importName_) + ff_compiler_JsImporter.JsImporter_process(self_, at_, rest5_))
}
}

export async function JsImporter_generateImports$(self_, ignoreModules_, $c) {
return ff_core_List.List_map(ff_core_Map.Map_pairs(self_.imports_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const moduleName_ = _1.first_;
const mangledName_ = _1.second_;
if(ff_core_Set.Set_contains(ignoreModules_, moduleName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
return (("const " + mangledName_) + " = void 0; // Ignored import")
} else {
return (((("import * as " + mangledName_) + " from '") + moduleName_) + "';")
}
return
}
}))
}

export const ff_core_Any_FromToAny$ff_compiler_JsImporter_JsImporter = {
toAny_(x_) {
return {typeTag: 'ff:compiler/JsImporter.JsImporter', value: x_}
},
fromAny_(x_) {
return x_.typeTag === 'ff:compiler/JsImporter.JsImporter' ? ff_core_Option.Some(x_.value) : ff_core_Option.None()
},
async toAny_$(x_, $c) {
throw new Error('Function toAny is missing on this target in async context.');
},
async fromAny_$(x_, $c) {
throw new Error('Function fromAny is missing on this target in async context.');
}
};

export const ff_core_Show_Show$ff_compiler_JsImporter_JsImporter = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((("JsImporter" + "(") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.imports_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((("JsImporter" + "(") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.imports_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_JsImporter_JsImporter = {
equals_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.imports_, y_.imports_)
return
}
}
},
async equals_$(x_, y_, $c) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return true
return
}
}
{
return ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.imports_, y_.imports_)
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_JsImporter_JsImporter = {
compare_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
const importsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
},
async compare_$(x_, y_, $c) {
{
const x_a = x_;
const y_a = y_;
{
const _guard1 = (x_ === y_);
if(_guard1) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
const importsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
};


