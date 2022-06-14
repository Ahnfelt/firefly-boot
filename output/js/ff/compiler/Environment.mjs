

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

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

// type Environment
export function Environment(symbols_, effect_) {
return {symbols_, effect_};
}

// type Scheme
export function Scheme(isVariable_, isMutable_, isNewtype_, isTraitMethod_, signature_) {
return {isVariable_, isMutable_, isNewtype_, isTraitMethod_, signature_};
}

// type Instantiated
export function Instantiated(typeArguments_, scheme_) {
return {typeArguments_, scheme_};
}



export function make_(module_, otherModules_) {
return ff_compiler_Environment.Environment(ff_core_Map.Map_addAll(ff_compiler_Environment.processModule_(module_, true).symbols_, ff_core_List.List_foldLeft(ff_core_List.List_map(otherModules_, ((_w1) => {
return ff_compiler_Environment.processModule_(_w1, false).symbols_
})), ff_core_Map.empty_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty()))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function processModule_(module_, isCurrentModule_) {
function full_(module_, name_) {
return ((((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".") + name_)
}
const functions_ = ff_core_List.List_map(module_.functions_, ((d_) => {
return ff_core_Pair.Pair(full_(module_, d_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, d_.signature_))
}));
const lets_ = ff_core_List.List_map(module_.lets_, ((d_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(full_(module_, d_.name_), ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(d_.at_, d_.name_, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty(), d_.variableType_, noEffect_)))
}));
const traitMethods_ = ff_core_List.List_flatMap(module_.traits_, ((definition_) => {
const generics_ = ff_core_List.List_map(definition_.generics_, ((name_) => {
return ff_compiler_Syntax.TConstructor(definition_.at_, name_, ff_core_List.Empty())
}));
const constraint_ = ff_compiler_Syntax.Constraint(definition_.at_, full_(module_, definition_.name_), generics_);
return ff_core_List.List_map(definition_.methods_, ((methodSignature_) => {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, ff_core_List.List_addAll(definition_.generics_, methodSignature_.generics_), ff_core_List.Link(constraint_, ff_core_List.List_addAll(definition_.constraints_, methodSignature_.constraints_)), _c.parameters_, _c.returnType_, _c.effect_)
}))(methodSignature_);
return ff_core_Pair.Pair(full_(module_, signature_.name_), ff_compiler_Environment.Scheme(false, false, false, true, signature_))
}))
}));
const extends_ = ff_core_List.List_flatMap(module_.extends_, ((d_) => {
{
const _1 = d_.type_;
{
if(_1.TVariable) {
const t_ = _1;
return ff_compiler_Environment.fail_(t_.at_, ("Unexpected type variable: $" + t_.index_))
return
}
}
{
if(_1.TConstructor) {
const t_ = _1;
const prefix_ = (t_.name_ + "_");
const selfParameter_ = ff_compiler_Syntax.Parameter(d_.at_, false, d_.name_, d_.type_, ff_core_Option.None());
return ff_core_List.List_map(d_.methods_, ((method_) => {
const effect_ = ff_core_List.List_filter(method_.signature_.generics_, ((_w1) => {
return (_w1 == "Q$")
}));
const normalGenerics_ = ff_core_List.List_filter(method_.signature_.generics_, ((_w1) => {
return (_w1 != "Q$")
}));
return ff_core_Pair.Pair((prefix_ + method_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, ff_core_List.List_addAll(effect_, ff_core_List.List_addAll(d_.generics_, normalGenerics_)), ff_core_List.List_addAll(d_.constraints_, method_.signature_.constraints_), ff_core_List.Link(selfParameter_, method_.signature_.parameters_), _c.returnType_, _c.effect_)
}))(method_.signature_)))
}))
return
}
}
}
}));
const fields_ = ff_core_List.List_flatMap(module_.types_, ((d_) => {
const prefix_ = (d_.name_ + "_");
const t_ = ff_compiler_Syntax.TConstructor(d_.at_, d_.name_, ff_core_List.List_map(d_.generics_, ((g_) => {
return ff_compiler_Syntax.TConstructor(d_.at_, g_, ff_core_List.Empty())
})));
const selfParameter_ = ff_compiler_Syntax.Parameter(d_.at_, false, d_.name_, t_, ff_core_Option.None());
return ff_core_List.List_map(d_.commonFields_, ((f_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(full_(module_, (prefix_ + f_.name_)), ff_compiler_Environment.Scheme(true, f_.mutable_, d_.newtype_, false, ff_compiler_Syntax.Signature(f_.at_, f_.name_, d_.generics_, d_.constraints_, ff_core_List.Link(selfParameter_, ff_core_List.Empty()), f_.valueType_, noEffect_)))
}))
}));
const variants_ = ff_core_List.List_flatMap(module_.types_, ((d_) => {
const returnType_ = ff_compiler_Syntax.TConstructor(d_.at_, full_(module_, d_.name_), ff_core_List.List_map(d_.generics_, ((typeParameter_) => {
return ff_compiler_Syntax.TConstructor(d_.at_, typeParameter_, ff_core_List.Empty())
})));
return ff_core_List.List_map(d_.variants_, ((variant_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(full_(module_, variant_.name_), ff_compiler_Environment.Scheme(false, false, d_.newtype_, false, ff_compiler_Syntax.Signature(variant_.at_, variant_.name_, d_.generics_, d_.constraints_, ff_core_List.List_addAll(d_.commonFields_, variant_.fields_), returnType_, noEffect_)))
}))
}));
const effect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_compiler_Environment.Environment(ff_core_List.List_toMap(ff_core_List.List_addAll(functions_, ff_core_List.List_addAll(lets_, ff_core_List.List_addAll(fields_, ff_core_List.List_addAll(extends_, ff_core_List.List_addAll(variants_, traitMethods_))))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), effect_)
}

export async function make_$(module_, otherModules_, $c) {
return ff_compiler_Environment.Environment(ff_core_Map.Map_addAll(ff_compiler_Environment.processModule_(module_, true).symbols_, ff_core_List.List_foldLeft(ff_core_List.List_map(otherModules_, ((_w1) => {
return ff_compiler_Environment.processModule_(_w1, false).symbols_
})), ff_core_Map.empty_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty()))
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function processModule_$(module_, isCurrentModule_, $c) {
function full_(module_, name_) {
return ((((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".") + name_)
}
const functions_ = ff_core_List.List_map(module_.functions_, ((d_) => {
return ff_core_Pair.Pair(full_(module_, d_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, d_.signature_))
}));
const lets_ = ff_core_List.List_map(module_.lets_, ((d_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(full_(module_, d_.name_), ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(d_.at_, d_.name_, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty(), d_.variableType_, noEffect_)))
}));
const traitMethods_ = ff_core_List.List_flatMap(module_.traits_, ((definition_) => {
const generics_ = ff_core_List.List_map(definition_.generics_, ((name_) => {
return ff_compiler_Syntax.TConstructor(definition_.at_, name_, ff_core_List.Empty())
}));
const constraint_ = ff_compiler_Syntax.Constraint(definition_.at_, full_(module_, definition_.name_), generics_);
return ff_core_List.List_map(definition_.methods_, ((methodSignature_) => {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, ff_core_List.List_addAll(definition_.generics_, methodSignature_.generics_), ff_core_List.Link(constraint_, ff_core_List.List_addAll(definition_.constraints_, methodSignature_.constraints_)), _c.parameters_, _c.returnType_, _c.effect_)
}))(methodSignature_);
return ff_core_Pair.Pair(full_(module_, signature_.name_), ff_compiler_Environment.Scheme(false, false, false, true, signature_))
}))
}));
const extends_ = ff_core_List.List_flatMap(module_.extends_, ((d_) => {
{
const _1 = d_.type_;
{
if(_1.TVariable) {
const t_ = _1;
return ff_compiler_Environment.fail_(t_.at_, ("Unexpected type variable: $" + t_.index_))
return
}
}
{
if(_1.TConstructor) {
const t_ = _1;
const prefix_ = (t_.name_ + "_");
const selfParameter_ = ff_compiler_Syntax.Parameter(d_.at_, false, d_.name_, d_.type_, ff_core_Option.None());
return ff_core_List.List_map(d_.methods_, ((method_) => {
const effect_ = ff_core_List.List_filter(method_.signature_.generics_, ((_w1) => {
return (_w1 == "Q$")
}));
const normalGenerics_ = ff_core_List.List_filter(method_.signature_.generics_, ((_w1) => {
return (_w1 != "Q$")
}));
return ff_core_Pair.Pair((prefix_ + method_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, ff_core_List.List_addAll(effect_, ff_core_List.List_addAll(d_.generics_, normalGenerics_)), ff_core_List.List_addAll(d_.constraints_, method_.signature_.constraints_), ff_core_List.Link(selfParameter_, method_.signature_.parameters_), _c.returnType_, _c.effect_)
}))(method_.signature_)))
}))
return
}
}
}
}));
const fields_ = ff_core_List.List_flatMap(module_.types_, ((d_) => {
const prefix_ = (d_.name_ + "_");
const t_ = ff_compiler_Syntax.TConstructor(d_.at_, d_.name_, ff_core_List.List_map(d_.generics_, ((g_) => {
return ff_compiler_Syntax.TConstructor(d_.at_, g_, ff_core_List.Empty())
})));
const selfParameter_ = ff_compiler_Syntax.Parameter(d_.at_, false, d_.name_, t_, ff_core_Option.None());
return ff_core_List.List_map(d_.commonFields_, ((f_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(full_(module_, (prefix_ + f_.name_)), ff_compiler_Environment.Scheme(true, f_.mutable_, d_.newtype_, false, ff_compiler_Syntax.Signature(f_.at_, f_.name_, d_.generics_, d_.constraints_, ff_core_List.Link(selfParameter_, ff_core_List.Empty()), f_.valueType_, noEffect_)))
}))
}));
const variants_ = ff_core_List.List_flatMap(module_.types_, ((d_) => {
const returnType_ = ff_compiler_Syntax.TConstructor(d_.at_, full_(module_, d_.name_), ff_core_List.List_map(d_.generics_, ((typeParameter_) => {
return ff_compiler_Syntax.TConstructor(d_.at_, typeParameter_, ff_core_List.Empty())
})));
return ff_core_List.List_map(d_.variants_, ((variant_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(full_(module_, variant_.name_), ff_compiler_Environment.Scheme(false, false, d_.newtype_, false, ff_compiler_Syntax.Signature(variant_.at_, variant_.name_, d_.generics_, d_.constraints_, ff_core_List.List_addAll(d_.commonFields_, variant_.fields_), returnType_, noEffect_)))
}))
}));
const effect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_compiler_Environment.Environment(ff_core_List.List_toMap(ff_core_List.List_addAll(functions_, ff_core_List.List_addAll(lets_, ff_core_List.List_addAll(fields_, ff_core_List.List_addAll(extends_, ff_core_List.List_addAll(variants_, traitMethods_))))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), effect_)
}






