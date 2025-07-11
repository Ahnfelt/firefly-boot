import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

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

// type Resolver
export function Resolver(variables_, variableLocations_, variants_, types_, typeGenerics_, typeLocations_, asyncTypes_, typeParameters_, traits_, traitLocations_, state_, lspHook_) {
return {variables_, variableLocations_, variants_, types_, typeGenerics_, typeLocations_, asyncTypes_, typeParameters_, traits_, traitLocations_, state_, lspHook_};
}

// type ResolverState
export function ResolverState(nextUnificationVariableIndex_) {
return {nextUnificationVariableIndex_};
}

// type CaseVariable
export function CaseVariable(at_, name_, asBound_) {
return {at_, name_, asBound_};
}

export function new_(lspHook_) {
return ff_compiler_Resolver.Resolver(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_Resolver.ResolverState(2), lspHook_)
}

export function checkDuplicates_(items_, name_, at_) {
let seen_ = ff_core_Map.new_();
ff_core_List.List_map(items_, ((item_) => {
const n_ = name_(item_);
if(ff_core_Map.Map_contains(seen_, n_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_(item_), ("Duplicate definition: " + n_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
seen_ = ff_core_Map.Map_add(seen_, n_, item_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
return items_
}

export async function new_$(lspHook_, $task) {
return ff_compiler_Resolver.Resolver(ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_Resolver.ResolverState(2), lspHook_)
}

export async function checkDuplicates_$(items_, name_, at_, $task) {
let seen_ = ff_core_Map.new_();
(await ff_core_List.List_map$(items_, (async (item_, $task) => {
const n_ = (await name_(item_, $task));
if(ff_core_Map.Map_contains(seen_, n_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError((await at_(item_, $task)), ("Duplicate definition: " + n_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
seen_ = ff_core_Map.Map_add(seen_, n_, item_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}), $task));
return items_
}

export function Resolver_freshUnificationVariable(self_, at_) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.state_.nextUnificationVariableIndex_);
self_.state_.nextUnificationVariableIndex_ += 3;
return result_
}

export function Resolver_resolveModule(self_, module_, otherModules_) {
const self2_ = ff_compiler_Resolver.Resolver_processImports(self_, module_.imports_, otherModules_);
const self3_ = ff_compiler_Resolver.Resolver_processDefinitions(self2_, module_, ff_core_Option.None());
const errors_ = ff_core_Array.new_();
const module2_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, ff_compiler_Syntax.catchManyInto_(errors_, module_.types_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTypeDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.traits_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTraitDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.instances_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveInstanceDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.extends_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveExtendDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.lets_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveLetDefinition(self3_, _w1, true)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.functions_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self3_, _w1, true, false)
})))
}))(module_);
do {
const _1 = ff_core_Array.Array_drain(errors_);
if(_1.length === 0) {

break
}
if(_1.length === 1) {
const error_ = _1[0].second_;
ff_core_Error.Error_rethrow(error_)
break
}
{
const allErrors_ = _1;
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileErrors(ff_core_List.List_map(allErrors_, ((_w1) => {
return _w1.first_
}))), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileErrors)
}
} while(false);
ff_compiler_Resolver.checkDuplicates_(module2_.types_, ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
ff_compiler_Resolver.checkDuplicates_(module2_.traits_, ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
ff_compiler_Resolver.checkDuplicates_(module2_.lets_, ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
ff_compiler_Resolver.checkDuplicates_(module2_.functions_, ((_w1) => {
return _w1.signature_.name_
}), ((_w1) => {
return _w1.at_
}));
const groupedExtendMethods_ = ff_core_List.List_group(ff_core_List.List_map(module2_.extends_, ((x_) => {
return ff_core_Pair.Pair(ff_core_String.String_takeWhile(ff_compiler_Syntax.Type_show(x_.type_, []), ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
})), x_.methods_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
ff_core_List.List_map(ff_core_List.List_map(ff_core_Map.Map_values(groupedExtendMethods_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return ff_core_List.List_flatten(_w1)
})), ((methods_) => {
return ff_compiler_Resolver.checkDuplicates_(methods_, ((_w1) => {
return _w1.signature_.name_
}), ((_w1) => {
return _w1.at_
}))
}));
for(let for_a = module2_.instances_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
for(let for_a = _w1.typeArguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_Resolver.Resolver_checkInstanceType(self3_, _w1)
}
};
return module2_
}

export function Resolver_checkInstanceType(self_, type_) {
{
const _1 = type_;
if(_1.TConstructor) {
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
if(ff_core_Set.Set_contains(self_.asyncTypes_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(type_.at_, "Traits must not be instantiated for capability types"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
for(let for_a = typeArguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_Resolver.Resolver_checkInstanceType(self_, _w1)
}
return
}
{

return
}
}
}

export function Resolver_processImports(self_, imports_, modules_) {
let resolver_ = self_;
for(let for_a = imports_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const import_ = for_a[for_i];
do {
const _1 = ff_core_List.List_find(modules_, ((_w1) => {
return ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_ModuleKey.equals_(_w1.moduleKey_, import_.moduleKey_)
}));
if(_1.Some) {
const module_ = _1.value_;
resolver_ = ff_compiler_Resolver.Resolver_processDefinitions(resolver_, module_, ff_core_Option.Some(import_.alias_))
break
}
{
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(import_.at_, ("No such module: " + ff_compiler_Syntax.ModuleKey_importName(import_.moduleKey_))), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
} while(false)
};
return resolver_
}

export function Resolver_processDefinitions(self_, module_, importAlias_) {
function entry_(name_, unqualified_) {
const full_ = ff_compiler_Syntax.ModuleKey_qualifiedSymbol(module_.moduleKey_, name_);
{
const _1 = importAlias_;
if(_1.None) {
return [ff_core_Pair.Pair(name_, full_), ff_core_Pair.Pair(full_, full_)]
}
if(_1.Some) {
const alias_ = _1.value_;
if(unqualified_) {
return [ff_core_Pair.Pair(((alias_ + ".") + name_), full_), ff_core_Pair.Pair(name_, full_), ff_core_Pair.Pair(full_, full_)]
}
}
{
const alias_ = _1.value_;
return [ff_core_Pair.Pair(((alias_ + ".") + name_), full_), ff_core_Pair.Pair(full_, full_)]
}
}
}
const isCore_ = ((((module_.moduleKey_.packagePair_.group_ === "ff") && (module_.moduleKey_.packagePair_.name_ === "core")) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(module_.moduleKey_.folders_, [])) && (module_.moduleKey_.name_ === "Core"));
const lets_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.lets_, ((_w1) => {
return entry_(_w1.name_, isCore_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const letLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.lets_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const functions_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.functions_, ((_w1) => {
return entry_(_w1.signature_.name_, isCore_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const functionLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.functions_, ((d_) => {
return ff_core_List.List_map(entry_(d_.signature_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitMethods_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return _w1.methods_
})), ((_w1) => {
return entry_(_w1.name_, false)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitMethodLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return _w1.methods_
})), ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traits_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return entry_(_w1.name_, true)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.traits_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const types_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.types_, ((_w1) => {
return entry_(_w1.name_, true)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const typeGenerics_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.types_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((p_) => {
return ff_core_Pair.Pair(p_.first_, d_.generics_)
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const typeLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.types_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const asyncTypes_ = ff_core_List.List_toSet(ff_core_List.List_flatMap(ff_core_List.List_filter(module_.types_, ((_w1) => {
return ff_core_Option.Option_any(ff_core_List.List_first(_w1.generics_), ((_w1) => {
return (_w1 === "Q$")
}))
})), ((_w1) => {
return ff_core_List.List_map(entry_(_w1.name_, true), ((_w1) => {
return _w1.first_
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const variants_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.types_, ((_w1) => {
return _w1.variants_
})), ((_w1) => {
return entry_(_w1.name_, true)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(self_.variables_, lets_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), functions_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), traitMethods_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(self_.variableLocations_, letLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), functionLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), traitMethodLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variants_, variants_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.types_, types_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.typeGenerics_, typeGenerics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.typeLocations_, typeLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.asyncTypes_, asyncTypes_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.traits_, traits_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.traitLocations_, traitLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), self_.state_, _c.lspHook_)
}
}
}

export function Resolver_resolveTypeDefinition(self_, definition_) {
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.name_, definition_.at_, definition_.at_), ff_core_Option.None(), true))
};
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
if((!ff_core_Option.Option_any(ff_core_List.List_first(definition_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))) {
for(let for_a = [...definition_.commonFields_, ...ff_core_List.List_flatMap(definition_.variants_, ((_w1) => {
return _w1.fields_
}))], for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
if(ff_compiler_Resolver.Resolver_containsAsyncType(self2_, f_.valueType_)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(f_.at_, "Only capabilities can contain fields of concrete capability types"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
};
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DType(_c.at_, _c.newtype_, _c.data_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, true)
})), ff_compiler_Resolver.checkDuplicates_(ff_core_List.List_map(definition_.commonFields_, ((f_) => {
const valueType_ = ff_compiler_Resolver.Resolver_resolveType(self2_, f_.valueType_, true);
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, f_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, f_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveVariantFieldHook(ff_compiler_LspHook.SymbolHook(f_.name_, f_.at_, f_.at_), valueType_, true))
};
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, valueType_, ff_core_Option.Option_map(f_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1, true, false)
})))
return
}
}
})), ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
})), ff_compiler_Resolver.checkDuplicates_(ff_core_List.List_map(definition_.variants_, ((v_) => {
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, v_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(v_.name_, v_.at_, v_.at_), ff_core_Option.None(), true))
};
ff_compiler_Resolver.checkDuplicates_([...definition_.commonFields_, ...v_.fields_], ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
{
const _1 = v_;
{
const _c = _1;
return ff_compiler_Syntax.Variant(_c.at_, _c.name_, ff_core_List.List_map(v_.fields_, ((f_) => {
const valueType_ = ff_compiler_Resolver.Resolver_resolveType(self2_, f_.valueType_, true);
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, f_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, f_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveVariantFieldHook(ff_compiler_LspHook.SymbolHook(f_.name_, f_.at_, f_.at_), valueType_, false))
};
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, valueType_, ff_core_Option.Option_map(f_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1, true, false)
})))
return
}
}
})))
return
}
}
})), ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
})))
return
}
}
}

export function Resolver_resolveTraitDefinition(self_, definition_) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, definition_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.name_, definition_.at_, definition_.at_), ff_core_Option.None(), true))
};
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DTrait(_c.at_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, true)
})), _c.generatorParameters_, ff_compiler_Resolver.checkDuplicates_(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveSignature(self2_, _w1, true, false)
})), ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
})), ff_core_List.List_map(definition_.methodDefaults_, ((_1) => {
{
const name_ = _1.first_;
const lambda_ = _1.second_;
const signature_ = ff_core_Option.Option_grab(ff_core_List.List_find(definition_.methods_, ((_w1) => {
return (_w1.name_ === name_)
})));
const function1_ = ff_compiler_Syntax.DFunction(signature_.at_, signature_, lambda_);
const function2_ = ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, function1_, true, false);
return ff_core_Pair.Pair(name_, function2_.body_)
}
})), _c.methodGenerators_)
return
}
}
}

export function Resolver_resolveInstanceDefinition(self_, definition_) {
const traitDefinedAt_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.traitLocations_, definition_.traitName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return definition_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, traitDefinedAt_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.traitName_, definition_.at_, traitDefinedAt_), ff_core_Option.None(), true))
};
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
const traitName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self2_.traits_, definition_.traitName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(definition_.at_, ("No such trait: " + definition_.traitName_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}));
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, true)
})), traitName_, ff_core_List.List_map(definition_.typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self2_, _w1, true)
})), _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, _w1, true, true)
})), _c.derived_)
return
}
}
}

export function Resolver_resolveExtendDefinition(self_, definition_) {
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const selfWithNoQ_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_add(self_.variables_, definition_.name_, definition_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_add(self_.variableLocations_, definition_.name_, definition_.at_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
const selfWithQ_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_add(selfWithNoQ_.types_, "Q$", "Q$", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, ff_core_Set.Set_add(selfWithNoQ_.typeParameters_, "Q$", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(selfWithNoQ_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(selfWithQ_, _w1, true)
})), ff_compiler_Resolver.Resolver_resolveType(selfWithQ_, definition_.type_, true), ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(selfWithNoQ_, _w1, true, false)
})))
return
}
}
}

export function Resolver_resolveLetDefinition(self_, definition_, topLevel_) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, definition_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.name_, definition_.at_, definition_.at_), ff_core_Option.None(), topLevel_))
};
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self_, definition_.variableType_, topLevel_), ff_compiler_Resolver.Resolver_resolveTerm(self_, definition_.value_, true, false))
}
}
}

export function Resolver_resolveTerm(self_, term_, topLevel_, inField_ = false) {
{
const _1 = term_;
if(_1.EString) {
return term_
}
if(_1.EChar) {
return term_
}
if(_1.EInt) {
return term_
}
if(_1.EFloat) {
return term_
}
if(_1.EVariable) {
const e_ = _1;
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
const at_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variableLocations_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return e_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, e_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(e_.name_, e_.at_, at_), ff_core_Option.None(), true))
}
};
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.variables_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariable(_c.at_, _w1)
}
}
})), (() => {
return term_
}))
return
}
if(_1.EList) {
const at_ = _1.at_;
const t_ = _1.elementType_;
const items_ = _1.items_;
return ff_compiler_Syntax.EList(at_, ff_compiler_Resolver.Resolver_resolveType(self_, t_, topLevel_), ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_;
const spread_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Resolver.Resolver_resolveTerm(self_, item_, topLevel_, false), spread_)
}
})))
return
}
if(_1.EVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
return ff_compiler_Syntax.EVariant(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
})), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})), ff_core_Option.Option_map(arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, a_.value_, topLevel_, false))
}
}
}))
})))
return
}
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const typeArguments_ = _1.typeArguments_;
return ff_compiler_Syntax.EVariantIs(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, ("No such variant: " + name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
})), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})))
return
}
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const arguments_ = _1.arguments_;
return ff_compiler_Syntax.ECopy(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
})), ff_compiler_Resolver.Resolver_resolveTerm(self_, record_, topLevel_, true), ff_core_List.List_map(arguments_, ((f_) => {
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, f_.value_, topLevel_, false))
}
}
})))
return
}
if(_1.EField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Resolver.Resolver_resolveTerm(self_, e_.record_, topLevel_, true), _c.field_)
}
}
return
}
if(_1.ELambda) {
const at_ = _1.at_;
const lambdaAt_ = _1.lambda_.at_;
const cases_ = _1.lambda_.cases_;
const effect_ = ff_compiler_Resolver.Resolver_makeEffectArgument(self_, lambdaAt_, topLevel_);
return ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(lambdaAt_, effect_, ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveCase(self_, _w1, topLevel_)
}))))
return
}
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
return ff_compiler_Syntax.EPipe(at_, ff_compiler_Resolver.Resolver_resolveTerm(self_, value_, topLevel_, false), ff_compiler_Resolver.Resolver_resolveType(self_, effect_, topLevel_), ff_compiler_Resolver.Resolver_resolveTerm(self_, function_, topLevel_, false))
}
if(_1.ECall && _1.target_.DynamicCall) {
const at_ = _1.at_;
const target_ = _1.target_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
return ff_compiler_Syntax.ECall(at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Resolver.Resolver_resolveTerm(self_, target_.function_, topLevel_, false), _c.tailCall_)
}))(target_), ff_compiler_Resolver.Resolver_resolveType(self_, effect_, topLevel_), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})), ff_core_List.List_map(arguments_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, a_.value_, topLevel_, false))
}
}
})), dictionaries_)
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "Internal error: Static calls not expected in the Resolver phase"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
return ff_compiler_Syntax.ERecord(at_, ff_core_List.List_map(fields_, ((f_) => {
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, f_.value_, topLevel_, false))
}
}
})))
return
}
if(_1.EWildcard) {
const e_ = _1;
if((e_.index_ === 0)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(e_.at_, "Unbound wildcard"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EWildcard(_c.at_, _c.index_)
}
}
return
}
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(functions_, ((_w1) => {
return _w1.signature_.name_
})), ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const locationMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(functions_, ((_w1) => {
return _w1.signature_
})), ((s_) => {
return ff_core_Pair.Pair(s_.name_, s_.at_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, functionMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, locationMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
return ff_compiler_Syntax.EFunctions(at_, ff_core_List.List_map(functions_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, _w1, topLevel_, false)
})), ff_compiler_Resolver.Resolver_resolveTerm(self2_, body_, topLevel_, false))
return
}
if(_1.ELet) {
const e_ = _1;
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_add(self_.variables_, e_.name_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_add(self_.variableLocations_, e_.name_, e_.at_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, e_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, e_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(e_.name_, e_.at_, e_.at_), ff_core_Option.None(), false))
}
};
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self_, e_.valueType_, topLevel_), ff_compiler_Resolver.Resolver_resolveTerm(self_, e_.value_, topLevel_, false), ff_compiler_Resolver.Resolver_resolveTerm(self2_, e_.body_, topLevel_, false))
}
}
return
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Resolver.Resolver_resolveTerm(self_, before_, topLevel_, false), ff_compiler_Resolver.Resolver_resolveTerm(self_, after_, topLevel_, false))
}
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const variable_ = _1.variable_;
const value_ = _1.value_;
return ff_compiler_Syntax.EAssign(at_, operator_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variables_, variable_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, ("No such variable: " + variable_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
})), ff_compiler_Resolver.Resolver_resolveTerm(self_, value_, topLevel_, false))
return
}
{
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
return ff_compiler_Syntax.EAssignField(at_, operator_, ff_compiler_Resolver.Resolver_resolveTerm(self_, record_, topLevel_, false), field_, ff_compiler_Resolver.Resolver_resolveTerm(self_, value_, topLevel_, false))
}
}
}

export function Resolver_resolveType(self_, type_, topLevel_) {
const self_a = self_;
const type_a = type_;
const topLevel_a = topLevel_;
if(type_a.TVariable) {
return type_
}
{
const constructor_ = type_a;
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
const at_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.typeLocations_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return type_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, type_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveTypeHook(self_.types_, self_.typeGenerics_, ff_compiler_LspHook.SymbolHook(constructor_.name_, type_.at_, at_), type_))
}
};
const name_ = (ff_core_String.String_contains(constructor_.name_, "$")
? constructor_.name_
: ff_core_Option.Option_else(ff_core_Map.Map_get(self_.types_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
if((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(constructor_.at_, ("No such type: " + constructor_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
} else {
return constructor_.name_
}
})));
const isFunctionType_ = ff_core_String.String_startsWith(name_, "Function$", 0);
const effect_ = ((isFunctionType_ || ff_core_Set.Set_contains(self_.asyncTypes_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
? [ff_compiler_Resolver.Resolver_makeEffectArgument(self_, constructor_.at_, topLevel_)]
: []);
const generics_ = ff_core_List.List_map(constructor_.generics_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
}));
if(isFunctionType_) {
const arguments_ = ff_core_List.List_dropLast(generics_, 1);
const returnType_ = ff_core_List.List_grabLast(generics_);
{
const _1 = constructor_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, name_, [...effect_, ...arguments_, returnType_])
}
}
} else {
{
const _1 = constructor_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, name_, [...effect_, ...generics_])
}
}
}
return
}
}

export function Resolver_makeEffectArgument(self_, at_, topLevel_) {
if(topLevel_) {
if((!ff_core_Set.Set_contains(self_.typeParameters_, "Q$", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) {
return ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", [])
} else {
return ff_compiler_Syntax.TConstructor(at_, "Q$", [])
}
} else {
return ff_compiler_Resolver.Resolver_freshUnificationVariable(self_, at_)
}
}

export function Resolver_resolveConstraint(self_, constraint_, topLevel_) {
const traitDefinedAt_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.traitLocations_, constraint_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return constraint_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, constraint_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, traitDefinedAt_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveConstraintHook(ff_compiler_LspHook.SymbolHook(constraint_.name_, constraint_.at_, traitDefinedAt_), constraint_))
};
const name_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.traits_, constraint_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(constraint_.at_, ("No such trait: " + constraint_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}));
{
const _1 = constraint_;
{
const _c = _1;
return ff_compiler_Syntax.Constraint(_c.at_, name_, ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})))
return
}
}
}

export function Resolver_resolveFunctionDefinition(self_, definition_, topLevel_, isInstanceMethod_) {
const signature_ = ff_compiler_Resolver.Resolver_resolveSignature(self_, definition_.signature_, topLevel_, isInstanceMethod_);
const self2_ = ff_compiler_Resolver.Resolver_withSignature(self_, signature_);
const body_ = (((_c) => {
return ff_compiler_Syntax.Lambda(_c.at_, signature_.effect_, ff_core_List.List_map(definition_.body_.cases_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveCase(self2_, _w1, false)
})))
}))(definition_.body_);
return ff_compiler_Syntax.DFunction(definition_.at_, signature_, body_)
}

export function Resolver_resolveSignature(self_, signature_, topLevel_, isInstanceMethod_) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, signature_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, signature_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSignatureHook(signature_, isInstanceMethod_, topLevel_))
};
const newSignature_ = (topLevel_
? (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, ["Q$", ...signature_.generics_], _c.constraints_, _c.parameters_, _c.returnType_, ff_compiler_Syntax.TConstructor(signature_.at_, "Q$", []))
}))(signature_)
: (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_, ff_compiler_Resolver.Resolver_freshUnificationVariable(self_, signature_.at_))
}))(signature_));
{
const if_o = ff_core_List.List_find(newSignature_.generics_, ((name_) => {
return ff_core_Set.Set_contains(self_.typeParameters_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
if(if_o.Some) {
const name_ = if_o.value_;
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(signature_.at_, (("Type parameter " + name_) + " is already in scope")), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
};
const self2_ = ff_compiler_Resolver.Resolver_withSignature(self_, newSignature_);
{
const _1 = newSignature_;
{
const _c = _1;
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, ff_core_List.List_map(newSignature_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, topLevel_)
})), ff_core_List.List_map(newSignature_.parameters_, ((p_) => {
{
const _1 = p_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self2_, p_.valueType_, topLevel_), ff_core_Option.Option_map(p_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1, topLevel_, false)
})))
return
}
}
})), ff_compiler_Resolver.Resolver_resolveType(self2_, newSignature_.returnType_, topLevel_), _c.effect_)
return
}
}
}

export function Resolver_withSignature(self_, signature_) {
const variableMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
})), ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const variableLocationMap_ = ff_core_List.List_toMap(ff_core_List.List_map(signature_.parameters_, ((p_) => {
return ff_core_Pair.Pair(p_.name_, p_.at_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const typeMap_ = ff_core_List.List_toMap(ff_core_List.List_map(signature_.generics_, ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, variableMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, variableLocationMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, ff_core_Map.Map_addAll(self_.types_, typeMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(signature_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(signature_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}
}
}

export function Resolver_resolveCase(self_, case_, topLevel_) {
function findVariables_(pattern_) {
const pattern_a = pattern_;
if(pattern_a.PString) {
return ff_core_Map.new_()
}
if(pattern_a.PInt) {
return ff_core_Map.new_()
}
if(pattern_a.PChar) {
return ff_core_Map.new_()
}
if(pattern_a.PVariable && pattern_a.name_.Some) {
const at_ = pattern_a.at_;
const name_ = pattern_a.name_.value_;
return ff_core_List.List_toMap([ff_core_Pair.Pair(name_, ff_compiler_Resolver.CaseVariable(at_, name_, ff_core_Option.None()))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(pattern_a.PVariable && pattern_a.name_.None) {
return ff_core_Map.new_()
}
if(pattern_a.PVariant) {
const patterns_ = pattern_a.patterns_;
return ff_core_List.List_foldLeft(ff_core_List.List_map(patterns_, ((pattern_) => {
return findVariables_(pattern_)
})), ff_core_Map.new_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
return
}
if(pattern_a.PVariantAs) {
const at_ = pattern_a.at_;
const variant_ = pattern_a.name_;
const variableAt_ = pattern_a.variableAt_;
const variable_ = pattern_a.variable_;
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Option.Option_toList(variable_), ((x_) => {
return ff_core_Pair.Pair(x_, ff_compiler_Resolver.CaseVariable(variableAt_, x_, ff_core_Option.Some(variant_)))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
return
}
{
const at_ = pattern_a.at_;
const pattern_ = pattern_a.pattern_;
const variable_ = pattern_a.variable_;
return ff_core_Map.Map_addAll(ff_core_List.List_toMap([ff_core_Pair.Pair(variable_, ff_compiler_Resolver.CaseVariable(at_, variable_, ff_core_Option.None()))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), findVariables_(pattern_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}
const variableMap_ = ff_core_List.List_foldLeft(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return findVariables_(pattern_)
})), ff_core_Map.new_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
let guards_ = [];
const variableMap2_ = ff_core_List.List_foldLeft(case_.guards_, variableMap_, ((variableMap1_, g_) => {
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, ff_core_Map.Map_mapValues(variableMap1_, ((_, p_) => {
return p_.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, ff_core_Map.Map_mapValues(variableMap1_, ((_, p_) => {
return p_.at_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
const guard_ = (((_c) => {
return ff_compiler_Syntax.MatchGuard(_c.at_, ff_compiler_Resolver.Resolver_resolveTerm(self2_, g_.term_, topLevel_, false), ff_compiler_Resolver.Resolver_resolvePattern(self2_, g_.pattern_))
}))(g_);
guards_ = [guard_, ...guards_];
return ff_core_Map.Map_addAll(variableMap1_, findVariables_(guard_.pattern_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
const self3_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, ff_core_Map.Map_mapValues(variableMap2_, ((_, p_) => {
return p_.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, ff_core_Map.Map_mapValues(variableMap2_, ((_, p_) => {
return p_.at_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
return ff_compiler_Syntax.MatchCase(case_.at_, ff_core_List.List_map(case_.patterns_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolvePattern(self_, _w1)
})), ff_core_List.List_reverse(guards_), ff_compiler_Resolver.Resolver_resolveTerm(self3_, case_.body_, topLevel_, false))
}

export function Resolver_resolvePattern(self_, pattern_) {
const self_a = self_;
const pattern_a = pattern_;
if(pattern_a.PString) {
return pattern_
}
if(pattern_a.PInt) {
return pattern_
}
if(pattern_a.PChar) {
return pattern_
}
if(pattern_a.PVariable) {
return pattern_
}
if(pattern_a.PVariant) {
const at_ = pattern_a.at_;
const name_ = pattern_a.name_;
const patterns_ = pattern_a.patterns_;
const newName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
}));
const newPatterns_ = ff_core_List.List_map(patterns_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolvePattern(self_, _w1)
}));
return ff_compiler_Syntax.PVariant(at_, newName_, newPatterns_)
}
if(pattern_a.PVariantAs) {
const at_ = pattern_a.at_;
const name_ = pattern_a.name_;
const variableAt_ = pattern_a.variableAt_;
const variable_ = pattern_a.variable_;
const newName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
}));
return ff_compiler_Syntax.PVariantAs(at_, newName_, variableAt_, variable_)
}
{
const at_ = pattern_a.at_;
const pattern_ = pattern_a.pattern_;
const variable_ = pattern_a.variable_;
const newPattern_ = ff_compiler_Resolver.Resolver_resolvePattern(self_, pattern_);
return ff_compiler_Syntax.PAlias(at_, newPattern_, variable_)
}
}

export function Resolver_containsAsyncType(self_, type_) {
const self_a = self_;
const type_a = type_;
if(type_a.TVariable) {
return false
}
{
const constructor_ = type_a;
const name_ = (ff_core_String.String_contains(constructor_.name_, "$")
? constructor_.name_
: ff_core_Option.Option_else(ff_core_Map.Map_get(self_.types_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return constructor_.name_
} else {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(constructor_.at_, ("No such type: " + constructor_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
})));
const isFunctionType_ = ff_core_String.String_startsWith(name_, "Function$", 0);
return ((isFunctionType_ || ff_core_Set.Set_contains(self_.asyncTypes_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) || ff_core_List.List_any(constructor_.generics_, ((_w1) => {
return ff_compiler_Resolver.Resolver_containsAsyncType(self_, _w1)
})))
return
}
}

export async function Resolver_freshUnificationVariable$(self_, at_, $task) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.state_.nextUnificationVariableIndex_);
self_.state_.nextUnificationVariableIndex_ += 3;
return result_
}

export async function Resolver_resolveModule$(self_, module_, otherModules_, $task) {
const self2_ = ff_compiler_Resolver.Resolver_processImports(self_, module_.imports_, otherModules_);
const self3_ = ff_compiler_Resolver.Resolver_processDefinitions(self2_, module_, ff_core_Option.None());
const errors_ = ff_core_Array.new_();
const module2_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, ff_compiler_Syntax.catchManyInto_(errors_, module_.types_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTypeDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.traits_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTraitDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.instances_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveInstanceDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.extends_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveExtendDefinition(self3_, _w1)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.lets_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveLetDefinition(self3_, _w1, true)
})), ff_compiler_Syntax.catchManyInto_(errors_, module_.functions_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self3_, _w1, true, false)
})))
}))(module_);
do {
const _1 = ff_core_Array.Array_drain(errors_);
if(_1.length === 0) {

break
}
if(_1.length === 1) {
const error_ = _1[0].second_;
ff_core_Error.Error_rethrow(error_)
break
}
{
const allErrors_ = _1;
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileErrors(ff_core_List.List_map(allErrors_, ((_w1) => {
return _w1.first_
}))), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileErrors)
}
} while(false);
ff_compiler_Resolver.checkDuplicates_(module2_.types_, ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
ff_compiler_Resolver.checkDuplicates_(module2_.traits_, ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
ff_compiler_Resolver.checkDuplicates_(module2_.lets_, ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
ff_compiler_Resolver.checkDuplicates_(module2_.functions_, ((_w1) => {
return _w1.signature_.name_
}), ((_w1) => {
return _w1.at_
}));
const groupedExtendMethods_ = ff_core_List.List_group(ff_core_List.List_map(module2_.extends_, ((x_) => {
return ff_core_Pair.Pair(ff_core_String.String_takeWhile(ff_compiler_Syntax.Type_show(x_.type_, []), ((_w1) => {
return ff_core_Char.Char_isAsciiLetterOrDigit(_w1)
})), x_.methods_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
ff_core_List.List_map(ff_core_List.List_map(ff_core_Map.Map_values(groupedExtendMethods_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
return ff_core_List.List_flatten(_w1)
})), ((methods_) => {
return ff_compiler_Resolver.checkDuplicates_(methods_, ((_w1) => {
return _w1.signature_.name_
}), ((_w1) => {
return _w1.at_
}))
}));
for(let for_a = module2_.instances_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
for(let for_a = _w1.typeArguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_Resolver.Resolver_checkInstanceType(self3_, _w1)
}
};
return module2_
}

export async function Resolver_checkInstanceType$(self_, type_, $task) {
{
const _1 = type_;
if(_1.TConstructor) {
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
if(ff_core_Set.Set_contains(self_.asyncTypes_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(type_.at_, "Traits must not be instantiated for capability types"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
for(let for_a = typeArguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const _w1 = for_a[for_i];
ff_compiler_Resolver.Resolver_checkInstanceType(self_, _w1)
}
return
}
{

return
}
}
}

export async function Resolver_processImports$(self_, imports_, modules_, $task) {
let resolver_ = self_;
for(let for_a = imports_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const import_ = for_a[for_i];
do {
const _1 = ff_core_List.List_find(modules_, ((_w1) => {
return ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_ModuleKey.equals_(_w1.moduleKey_, import_.moduleKey_)
}));
if(_1.Some) {
const module_ = _1.value_;
resolver_ = ff_compiler_Resolver.Resolver_processDefinitions(resolver_, module_, ff_core_Option.Some(import_.alias_))
break
}
{
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(import_.at_, ("No such module: " + ff_compiler_Syntax.ModuleKey_importName(import_.moduleKey_))), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
} while(false)
};
return resolver_
}

export async function Resolver_processDefinitions$(self_, module_, importAlias_, $task) {
function entry_(name_, unqualified_) {
const full_ = ff_compiler_Syntax.ModuleKey_qualifiedSymbol(module_.moduleKey_, name_);
{
const _1 = importAlias_;
if(_1.None) {
return [ff_core_Pair.Pair(name_, full_), ff_core_Pair.Pair(full_, full_)]
}
if(_1.Some) {
const alias_ = _1.value_;
if(unqualified_) {
return [ff_core_Pair.Pair(((alias_ + ".") + name_), full_), ff_core_Pair.Pair(name_, full_), ff_core_Pair.Pair(full_, full_)]
}
}
{
const alias_ = _1.value_;
return [ff_core_Pair.Pair(((alias_ + ".") + name_), full_), ff_core_Pair.Pair(full_, full_)]
}
}
}
const isCore_ = ((((module_.moduleKey_.packagePair_.group_ === "ff") && (module_.moduleKey_.packagePair_.name_ === "core")) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(module_.moduleKey_.folders_, [])) && (module_.moduleKey_.name_ === "Core"));
const lets_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.lets_, ((_w1) => {
return entry_(_w1.name_, isCore_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const letLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.lets_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const functions_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.functions_, ((_w1) => {
return entry_(_w1.signature_.name_, isCore_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const functionLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.functions_, ((d_) => {
return ff_core_List.List_map(entry_(d_.signature_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitMethods_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return _w1.methods_
})), ((_w1) => {
return entry_(_w1.name_, false)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitMethodLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return _w1.methods_
})), ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traits_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return entry_(_w1.name_, true)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const traitLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.traits_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const types_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.types_, ((_w1) => {
return entry_(_w1.name_, true)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const typeGenerics_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.types_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((p_) => {
return ff_core_Pair.Pair(p_.first_, d_.generics_)
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const typeLocations_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.types_, ((d_) => {
return ff_core_List.List_map(entry_(d_.name_, true), ((_w1) => {
return ff_core_Pair.Pair_mapSecond(_w1, ((_) => {
return d_.at_
}))
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const asyncTypes_ = ff_core_List.List_toSet(ff_core_List.List_flatMap(ff_core_List.List_filter(module_.types_, ((_w1) => {
return ff_core_Option.Option_any(ff_core_List.List_first(_w1.generics_), ((_w1) => {
return (_w1 === "Q$")
}))
})), ((_w1) => {
return ff_core_List.List_map(entry_(_w1.name_, true), ((_w1) => {
return _w1.first_
}))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const variants_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.types_, ((_w1) => {
return _w1.variants_
})), ((_w1) => {
return entry_(_w1.name_, true)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(self_.variables_, lets_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), functions_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), traitMethods_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(self_.variableLocations_, letLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), functionLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), traitMethodLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variants_, variants_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.types_, types_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.typeGenerics_, typeGenerics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.typeLocations_, typeLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.asyncTypes_, asyncTypes_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toSet([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.traits_, traits_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.traitLocations_, traitLocations_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), self_.state_, _c.lspHook_)
}
}
}

export async function Resolver_resolveTypeDefinition$(self_, definition_, $task) {
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.name_, definition_.at_, definition_.at_), ff_core_Option.None(), true))
};
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
if((!ff_core_Option.Option_any(ff_core_List.List_first(definition_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))) {
for(let for_a = [...definition_.commonFields_, ...ff_core_List.List_flatMap(definition_.variants_, ((_w1) => {
return _w1.fields_
}))], for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const f_ = for_a[for_i];
if(ff_compiler_Resolver.Resolver_containsAsyncType(self2_, f_.valueType_)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(f_.at_, "Only capabilities can contain fields of concrete capability types"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
}
};
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DType(_c.at_, _c.newtype_, _c.data_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, true)
})), ff_compiler_Resolver.checkDuplicates_(ff_core_List.List_map(definition_.commonFields_, ((f_) => {
const valueType_ = ff_compiler_Resolver.Resolver_resolveType(self2_, f_.valueType_, true);
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, f_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, f_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveVariantFieldHook(ff_compiler_LspHook.SymbolHook(f_.name_, f_.at_, f_.at_), valueType_, true))
};
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, valueType_, ff_core_Option.Option_map(f_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1, true, false)
})))
return
}
}
})), ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
})), ff_compiler_Resolver.checkDuplicates_(ff_core_List.List_map(definition_.variants_, ((v_) => {
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, v_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(v_.name_, v_.at_, v_.at_), ff_core_Option.None(), true))
};
ff_compiler_Resolver.checkDuplicates_([...definition_.commonFields_, ...v_.fields_], ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
}));
{
const _1 = v_;
{
const _c = _1;
return ff_compiler_Syntax.Variant(_c.at_, _c.name_, ff_core_List.List_map(v_.fields_, ((f_) => {
const valueType_ = ff_compiler_Resolver.Resolver_resolveType(self2_, f_.valueType_, true);
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, f_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, f_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveVariantFieldHook(ff_compiler_LspHook.SymbolHook(f_.name_, f_.at_, f_.at_), valueType_, false))
};
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, valueType_, ff_core_Option.Option_map(f_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1, true, false)
})))
return
}
}
})))
return
}
}
})), ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
})))
return
}
}
}

export async function Resolver_resolveTraitDefinition$(self_, definition_, $task) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, definition_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.name_, definition_.at_, definition_.at_), ff_core_Option.None(), true))
};
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DTrait(_c.at_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, true)
})), _c.generatorParameters_, ff_compiler_Resolver.checkDuplicates_(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveSignature(self2_, _w1, true, false)
})), ((_w1) => {
return _w1.name_
}), ((_w1) => {
return _w1.at_
})), ff_core_List.List_map(definition_.methodDefaults_, ((_1) => {
{
const name_ = _1.first_;
const lambda_ = _1.second_;
const signature_ = ff_core_Option.Option_grab(ff_core_List.List_find(definition_.methods_, ((_w1) => {
return (_w1.name_ === name_)
})));
const function1_ = ff_compiler_Syntax.DFunction(signature_.at_, signature_, lambda_);
const function2_ = ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, function1_, true, false);
return ff_core_Pair.Pair(name_, function2_.body_)
}
})), _c.methodGenerators_)
return
}
}
}

export async function Resolver_resolveInstanceDefinition$(self_, definition_, $task) {
const traitDefinedAt_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.traitLocations_, definition_.traitName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return definition_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, traitDefinedAt_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.traitName_, definition_.at_, traitDefinedAt_), ff_core_Option.None(), true))
};
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
const traitName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self2_.traits_, definition_.traitName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(definition_.at_, ("No such trait: " + definition_.traitName_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}));
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, true)
})), traitName_, ff_core_List.List_map(definition_.typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self2_, _w1, true)
})), _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, _w1, true, true)
})), _c.derived_)
return
}
}
}

export async function Resolver_resolveExtendDefinition$(self_, definition_, $task) {
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const selfWithNoQ_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_add(self_.variables_, definition_.name_, definition_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_add(self_.variableLocations_, definition_.name_, definition_.at_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(definition_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
const selfWithQ_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variableLocations_, _c.variants_, ff_core_Map.Map_add(selfWithNoQ_.types_, "Q$", "Q$", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, ff_core_Set.Set_add(selfWithNoQ_.typeParameters_, "Q$", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(selfWithNoQ_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(selfWithQ_, _w1, true)
})), ff_compiler_Resolver.Resolver_resolveType(selfWithQ_, definition_.type_, true), ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(selfWithNoQ_, _w1, true, false)
})))
return
}
}
}

export async function Resolver_resolveLetDefinition$(self_, definition_, topLevel_, $task) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, definition_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(definition_.name_, definition_.at_, definition_.at_), ff_core_Option.None(), topLevel_))
};
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self_, definition_.variableType_, topLevel_), ff_compiler_Resolver.Resolver_resolveTerm(self_, definition_.value_, true, false))
}
}
}

export async function Resolver_resolveTerm$(self_, term_, topLevel_, inField_ = false, $task) {
{
const _1 = term_;
if(_1.EString) {
return term_
}
if(_1.EChar) {
return term_
}
if(_1.EInt) {
return term_
}
if(_1.EFloat) {
return term_
}
if(_1.EVariable) {
const e_ = _1;
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
const at_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variableLocations_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return e_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, e_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(e_.name_, e_.at_, at_), ff_core_Option.None(), true))
}
};
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.variables_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_w1) => {
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariable(_c.at_, _w1)
}
}
})), (() => {
return term_
}))
return
}
if(_1.EList) {
const at_ = _1.at_;
const t_ = _1.elementType_;
const items_ = _1.items_;
return ff_compiler_Syntax.EList(at_, ff_compiler_Resolver.Resolver_resolveType(self_, t_, topLevel_), ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_;
const spread_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Resolver.Resolver_resolveTerm(self_, item_, topLevel_, false), spread_)
}
})))
return
}
if(_1.EVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
return ff_compiler_Syntax.EVariant(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
})), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})), ff_core_Option.Option_map(arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, a_.value_, topLevel_, false))
}
}
}))
})))
return
}
if(_1.EVariantIs) {
const at_ = _1.at_;
const name_ = _1.name_;
const typeArguments_ = _1.typeArguments_;
return ff_compiler_Syntax.EVariantIs(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, ("No such variant: " + name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
})), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})))
return
}
if(_1.ECopy) {
const at_ = _1.at_;
const name_ = _1.name_;
const record_ = _1.record_;
const arguments_ = _1.arguments_;
return ff_compiler_Syntax.ECopy(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
})), ff_compiler_Resolver.Resolver_resolveTerm(self_, record_, topLevel_, true), ff_core_List.List_map(arguments_, ((f_) => {
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, f_.value_, topLevel_, false))
}
}
})))
return
}
if(_1.EField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Resolver.Resolver_resolveTerm(self_, e_.record_, topLevel_, true), _c.field_)
}
}
return
}
if(_1.ELambda) {
const at_ = _1.at_;
const lambdaAt_ = _1.lambda_.at_;
const cases_ = _1.lambda_.cases_;
const effect_ = ff_compiler_Resolver.Resolver_makeEffectArgument(self_, lambdaAt_, topLevel_);
return ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(lambdaAt_, effect_, ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveCase(self_, _w1, topLevel_)
}))))
return
}
if(_1.EPipe) {
const at_ = _1.at_;
const value_ = _1.value_;
const effect_ = _1.effect_;
const function_ = _1.function_;
return ff_compiler_Syntax.EPipe(at_, ff_compiler_Resolver.Resolver_resolveTerm(self_, value_, topLevel_, false), ff_compiler_Resolver.Resolver_resolveType(self_, effect_, topLevel_), ff_compiler_Resolver.Resolver_resolveTerm(self_, function_, topLevel_, false))
}
if(_1.ECall && _1.target_.DynamicCall) {
const at_ = _1.at_;
const target_ = _1.target_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const dictionaries_ = _1.dictionaries_;
return ff_compiler_Syntax.ECall(at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Resolver.Resolver_resolveTerm(self_, target_.function_, topLevel_, false), _c.tailCall_)
}))(target_), ff_compiler_Resolver.Resolver_resolveType(self_, effect_, topLevel_), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})), ff_core_List.List_map(arguments_, ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, a_.value_, topLevel_, false))
}
}
})), dictionaries_)
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, "Internal error: Static calls not expected in the Resolver phase"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
if(_1.ERecord) {
const at_ = _1.at_;
const fields_ = _1.fields_;
return ff_compiler_Syntax.ERecord(at_, ff_core_List.List_map(fields_, ((f_) => {
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, f_.value_, topLevel_, false))
}
}
})))
return
}
if(_1.EWildcard) {
const e_ = _1;
if((e_.index_ === 0)) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(e_.at_, "Unbound wildcard"), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
};
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EWildcard(_c.at_, _c.index_)
}
}
return
}
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(functions_, ((_w1) => {
return _w1.signature_.name_
})), ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const locationMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(functions_, ((_w1) => {
return _w1.signature_
})), ((s_) => {
return ff_core_Pair.Pair(s_.name_, s_.at_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, functionMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, locationMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
return ff_compiler_Syntax.EFunctions(at_, ff_core_List.List_map(functions_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, _w1, topLevel_, false)
})), ff_compiler_Resolver.Resolver_resolveTerm(self2_, body_, topLevel_, false))
return
}
if(_1.ELet) {
const e_ = _1;
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_add(self_.variables_, e_.name_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_add(self_.variableLocations_, e_.name_, e_.at_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, e_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, e_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSymbolHook(ff_compiler_LspHook.SymbolHook(e_.name_, e_.at_, e_.at_), ff_core_Option.None(), false))
}
};
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self_, e_.valueType_, topLevel_), ff_compiler_Resolver.Resolver_resolveTerm(self_, e_.value_, topLevel_, false), ff_compiler_Resolver.Resolver_resolveTerm(self2_, e_.body_, topLevel_, false))
}
}
return
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Resolver.Resolver_resolveTerm(self_, before_, topLevel_, false), ff_compiler_Resolver.Resolver_resolveTerm(self_, after_, topLevel_, false))
}
if(_1.EAssign) {
const at_ = _1.at_;
const operator_ = _1.operator_;
const variable_ = _1.variable_;
const value_ = _1.value_;
return ff_compiler_Syntax.EAssign(at_, operator_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variables_, variable_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, ("No such variable: " + variable_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
})), ff_compiler_Resolver.Resolver_resolveTerm(self_, value_, topLevel_, false))
return
}
{
const at_ = _1.at_;
const operator_ = _1.operator_;
const record_ = _1.record_;
const field_ = _1.field_;
const value_ = _1.value_;
return ff_compiler_Syntax.EAssignField(at_, operator_, ff_compiler_Resolver.Resolver_resolveTerm(self_, record_, topLevel_, false), field_, ff_compiler_Resolver.Resolver_resolveTerm(self_, value_, topLevel_, false))
}
}
}

export async function Resolver_resolveType$(self_, type_, topLevel_, $task) {
const self_a = self_;
const type_a = type_;
const topLevel_a = topLevel_;
if(type_a.TVariable) {
return type_
}
{
const constructor_ = type_a;
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
const at_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.typeLocations_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return type_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, type_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveTypeHook(self_.types_, self_.typeGenerics_, ff_compiler_LspHook.SymbolHook(constructor_.name_, type_.at_, at_), type_))
}
};
const name_ = (ff_core_String.String_contains(constructor_.name_, "$")
? constructor_.name_
: ff_core_Option.Option_else(ff_core_Map.Map_get(self_.types_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
if((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(constructor_.at_, ("No such type: " + constructor_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
} else {
return constructor_.name_
}
})));
const isFunctionType_ = ff_core_String.String_startsWith(name_, "Function$", 0);
const effect_ = ((isFunctionType_ || ff_core_Set.Set_contains(self_.asyncTypes_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))
? [ff_compiler_Resolver.Resolver_makeEffectArgument(self_, constructor_.at_, topLevel_)]
: []);
const generics_ = ff_core_List.List_map(constructor_.generics_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
}));
if(isFunctionType_) {
const arguments_ = ff_core_List.List_dropLast(generics_, 1);
const returnType_ = ff_core_List.List_grabLast(generics_);
{
const _1 = constructor_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, name_, [...effect_, ...arguments_, returnType_])
}
}
} else {
{
const _1 = constructor_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, name_, [...effect_, ...generics_])
}
}
}
return
}
}

export async function Resolver_makeEffectArgument$(self_, at_, topLevel_, $task) {
if(topLevel_) {
if((!ff_core_Set.Set_contains(self_.typeParameters_, "Q$", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) {
return ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", [])
} else {
return ff_compiler_Syntax.TConstructor(at_, "Q$", [])
}
} else {
return ff_compiler_Resolver.Resolver_freshUnificationVariable(self_, at_)
}
}

export async function Resolver_resolveConstraint$(self_, constraint_, topLevel_, $task) {
const traitDefinedAt_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.traitLocations_, constraint_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return constraint_.at_
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, constraint_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, traitDefinedAt_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveConstraintHook(ff_compiler_LspHook.SymbolHook(constraint_.name_, constraint_.at_, traitDefinedAt_), constraint_))
};
const name_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.traits_, constraint_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(constraint_.at_, ("No such trait: " + constraint_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}));
{
const _1 = constraint_;
{
const _c = _1;
return ff_compiler_Syntax.Constraint(_c.at_, name_, ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1, topLevel_)
})))
return
}
}
}

export async function Resolver_resolveFunctionDefinition$(self_, definition_, topLevel_, isInstanceMethod_, $task) {
const signature_ = ff_compiler_Resolver.Resolver_resolveSignature(self_, definition_.signature_, topLevel_, isInstanceMethod_);
const self2_ = ff_compiler_Resolver.Resolver_withSignature(self_, signature_);
const body_ = (((_c) => {
return ff_compiler_Syntax.Lambda(_c.at_, signature_.effect_, ff_core_List.List_map(definition_.body_.cases_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveCase(self2_, _w1, false)
})))
}))(definition_.body_);
return ff_compiler_Syntax.DFunction(definition_.at_, signature_, body_)
}

export async function Resolver_resolveSignature$(self_, signature_, topLevel_, isInstanceMethod_, $task) {
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, signature_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, signature_.at_))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ResolveSignatureHook(signature_, isInstanceMethod_, topLevel_))
};
const newSignature_ = (topLevel_
? (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, ["Q$", ...signature_.generics_], _c.constraints_, _c.parameters_, _c.returnType_, ff_compiler_Syntax.TConstructor(signature_.at_, "Q$", []))
}))(signature_)
: (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_, ff_compiler_Resolver.Resolver_freshUnificationVariable(self_, signature_.at_))
}))(signature_));
{
const if_o = ff_core_List.List_find(newSignature_.generics_, ((name_) => {
return ff_core_Set.Set_contains(self_.typeParameters_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
if(if_o.Some) {
const name_ = if_o.value_;
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(signature_.at_, (("Type parameter " + name_) + " is already in scope")), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
};
const self2_ = ff_compiler_Resolver.Resolver_withSignature(self_, newSignature_);
{
const _1 = newSignature_;
{
const _c = _1;
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, ff_core_List.List_map(newSignature_.constraints_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveConstraint(self2_, _w1, topLevel_)
})), ff_core_List.List_map(newSignature_.parameters_, ((p_) => {
{
const _1 = p_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self2_, p_.valueType_, topLevel_), ff_core_Option.Option_map(p_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1, topLevel_, false)
})))
return
}
}
})), ff_compiler_Resolver.Resolver_resolveType(self2_, newSignature_.returnType_, topLevel_), _c.effect_)
return
}
}
}

export async function Resolver_withSignature$(self_, signature_, $task) {
const variableMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
})), ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const variableLocationMap_ = ff_core_List.List_toMap(ff_core_List.List_map(signature_.parameters_, ((p_) => {
return ff_core_Pair.Pair(p_.name_, p_.at_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const typeMap_ = ff_core_List.List_toMap(ff_core_List.List_map(signature_.generics_, ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = self_;
{
const _c = _1;
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, variableMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, variableLocationMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, ff_core_Map.Map_addAll(self_.types_, typeMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.typeGenerics_, _c.typeLocations_, ff_core_Set.Set_removeAll(self_.asyncTypes_, ff_core_List.List_toSet(signature_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Set.Set_addAll(self_.typeParameters_, ff_core_List.List_toSet(signature_.generics_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}
}
}

export async function Resolver_resolveCase$(self_, case_, topLevel_, $task) {
function findVariables_(pattern_) {
const pattern_a = pattern_;
if(pattern_a.PString) {
return ff_core_Map.new_()
}
if(pattern_a.PInt) {
return ff_core_Map.new_()
}
if(pattern_a.PChar) {
return ff_core_Map.new_()
}
if(pattern_a.PVariable && pattern_a.name_.Some) {
const at_ = pattern_a.at_;
const name_ = pattern_a.name_.value_;
return ff_core_List.List_toMap([ff_core_Pair.Pair(name_, ff_compiler_Resolver.CaseVariable(at_, name_, ff_core_Option.None()))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(pattern_a.PVariable && pattern_a.name_.None) {
return ff_core_Map.new_()
}
if(pattern_a.PVariant) {
const patterns_ = pattern_a.patterns_;
return ff_core_List.List_foldLeft(ff_core_List.List_map(patterns_, ((pattern_) => {
return findVariables_(pattern_)
})), ff_core_Map.new_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
return
}
if(pattern_a.PVariantAs) {
const at_ = pattern_a.at_;
const variant_ = pattern_a.name_;
const variableAt_ = pattern_a.variableAt_;
const variable_ = pattern_a.variable_;
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Option.Option_toList(variable_), ((x_) => {
return ff_core_Pair.Pair(x_, ff_compiler_Resolver.CaseVariable(variableAt_, x_, ff_core_Option.Some(variant_)))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
return
}
{
const at_ = pattern_a.at_;
const pattern_ = pattern_a.pattern_;
const variable_ = pattern_a.variable_;
return ff_core_Map.Map_addAll(ff_core_List.List_toMap([ff_core_Pair.Pair(variable_, ff_compiler_Resolver.CaseVariable(at_, variable_, ff_core_Option.None()))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), findVariables_(pattern_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}
const variableMap_ = ff_core_List.List_foldLeft(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return findVariables_(pattern_)
})), ff_core_Map.new_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
let guards_ = [];
const variableMap2_ = ff_core_List.List_foldLeft(case_.guards_, variableMap_, ((variableMap1_, g_) => {
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, ff_core_Map.Map_mapValues(variableMap1_, ((_, p_) => {
return p_.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, ff_core_Map.Map_mapValues(variableMap1_, ((_, p_) => {
return p_.at_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
const guard_ = (((_c) => {
return ff_compiler_Syntax.MatchGuard(_c.at_, ff_compiler_Resolver.Resolver_resolveTerm(self2_, g_.term_, topLevel_, false), ff_compiler_Resolver.Resolver_resolvePattern(self2_, g_.pattern_))
}))(g_);
guards_ = [guard_, ...guards_];
return ff_core_Map.Map_addAll(variableMap1_, findVariables_(guard_.pattern_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}));
const self3_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, ff_core_Map.Map_mapValues(variableMap2_, ((_, p_) => {
return p_.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(self_.variableLocations_, ff_core_Map.Map_mapValues(variableMap2_, ((_, p_) => {
return p_.at_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.variants_, _c.types_, _c.typeGenerics_, _c.typeLocations_, _c.asyncTypes_, _c.typeParameters_, _c.traits_, _c.traitLocations_, _c.state_, _c.lspHook_)
}))(self_);
return ff_compiler_Syntax.MatchCase(case_.at_, ff_core_List.List_map(case_.patterns_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolvePattern(self_, _w1)
})), ff_core_List.List_reverse(guards_), ff_compiler_Resolver.Resolver_resolveTerm(self3_, case_.body_, topLevel_, false))
}

export async function Resolver_resolvePattern$(self_, pattern_, $task) {
const self_a = self_;
const pattern_a = pattern_;
if(pattern_a.PString) {
return pattern_
}
if(pattern_a.PInt) {
return pattern_
}
if(pattern_a.PChar) {
return pattern_
}
if(pattern_a.PVariable) {
return pattern_
}
if(pattern_a.PVariant) {
const at_ = pattern_a.at_;
const name_ = pattern_a.name_;
const patterns_ = pattern_a.patterns_;
const newName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
}));
const newPatterns_ = ff_core_List.List_map(patterns_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolvePattern(self_, _w1)
}));
return ff_compiler_Syntax.PVariant(at_, newName_, newPatterns_)
}
if(pattern_a.PVariantAs) {
const at_ = pattern_a.at_;
const name_ = pattern_a.name_;
const variableAt_ = pattern_a.variableAt_;
const variable_ = pattern_a.variable_;
const newName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
return name_
}));
return ff_compiler_Syntax.PVariantAs(at_, newName_, variableAt_, variable_)
}
{
const at_ = pattern_a.at_;
const pattern_ = pattern_a.pattern_;
const variable_ = pattern_a.variable_;
const newPattern_ = ff_compiler_Resolver.Resolver_resolvePattern(self_, pattern_);
return ff_compiler_Syntax.PAlias(at_, newPattern_, variable_)
}
}

export async function Resolver_containsAsyncType$(self_, type_, $task) {
const self_a = self_;
const type_a = type_;
if(type_a.TVariable) {
return false
}
{
const constructor_ = type_a;
const name_ = (ff_core_String.String_contains(constructor_.name_, "$")
? constructor_.name_
: ff_core_Option.Option_else(ff_core_Map.Map_get(self_.types_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return constructor_.name_
} else {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(constructor_.at_, ("No such type: " + constructor_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}
})));
const isFunctionType_ = ff_core_String.String_startsWith(name_, "Function$", 0);
return ((isFunctionType_ || ff_core_Set.Set_contains(self_.asyncTypes_, constructor_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) || ff_core_List.List_any(constructor_.generics_, ((_w1) => {
return ff_compiler_Resolver.Resolver_containsAsyncType(self_, _w1)
})))
return
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_Resolver_CaseVariable = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Resolver.CaseVariable" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Resolver.CaseVariable" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_Resolver_CaseVariable = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("CaseVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.asBound_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("CaseVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.asBound_)) + ")")
}
},
};

export const ff_core_Equal_Equal$ff_compiler_Resolver_CaseVariable = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.asBound_, y_.asBound_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.asBound_, y_.asBound_)))
}
},
};

export const ff_core_Ordering_Order$ff_compiler_Resolver_CaseVariable = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const asBoundOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.asBound_, y_.asBound_);
if((asBoundOrdering_ !== ff_core_Ordering.OrderingSame())) {
return asBoundOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const asBoundOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.asBound_, y_.asBound_);
if((asBoundOrdering_ !== ff_core_Ordering.OrderingSame())) {
return asBoundOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_Resolver_CaseVariable = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.asBound_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Resolver.CaseVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.asBound_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 33), 0);
return ff_compiler_Resolver.CaseVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};


//# sourceMappingURL=Resolver.mjs.map