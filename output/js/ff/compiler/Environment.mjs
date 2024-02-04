

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Box from "../../ff/core/Box.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

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

import * as ff_core_Random from "../../ff/core/Random.mjs"

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Environment
export function Environment(modulePrefix_, symbols_, traits_, imports_, effect_, selfVariable_) {
return {modulePrefix_, symbols_, traits_, imports_, effect_, selfVariable_};
}

// type Scheme
export function Scheme(isVariable_, isMutable_, isNewtype_, isTraitMethod_, signature_) {
return {isVariable_, isMutable_, isNewtype_, isTraitMethod_, signature_};
}

// type Instantiated
export function Instantiated(typeArguments_, scheme_) {
return {typeArguments_, scheme_};
}



export function make_(module_, otherModules_, alreadyFlat_) {
const processed_ = ff_compiler_Environment.processModule_(module_, true, alreadyFlat_);
const otherProcessed_ = ff_core_List.List_map(otherModules_, ((_w1) => {
return ff_compiler_Environment.processModule_(_w1, false, false)
}));
return ff_compiler_Environment.Environment(ff_compiler_Environment.fullName_(module_, ""), ff_core_Map.Map_addAll(processed_.symbols_, ff_core_List.List_foldLeft(ff_core_List.List_map(otherProcessed_, ((_w1) => {
return _w1.symbols_
})), ff_core_Map.empty_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(processed_.traits_, ff_core_List.List_foldLeft(ff_core_List.List_map(otherProcessed_, ((_w1) => {
return _w1.traits_
})), ff_core_Map.empty_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_map(module_.imports_, ((i_) => {
return ff_core_Pair.Pair(i_.alias_, i_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty()), ff_core_Option.None())
}

export function fullName_(module_, name_) {
return ((((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".") + name_)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function processModule_(module_, isCurrentModule_, alreadyFlat_) {
const functions_ = ff_core_List.List_map(module_.functions_, ((d_) => {
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, d_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, d_.signature_))
}));
const lets_ = ff_core_List.List_map(module_.lets_, ((d_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, d_.name_), ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(d_.at_, d_.name_, false, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty(), d_.variableType_, noEffect_)))
}));
const traitMethods_ = ff_core_List.List_flatMap(module_.traits_, ((definition_) => {
const generics_ = ff_core_List.List_map(definition_.generics_, ((name_) => {
return ff_compiler_Syntax.TConstructor(definition_.at_, name_, ff_core_List.Empty())
}));
const constraint_ = ff_compiler_Syntax.Constraint(definition_.at_, ff_compiler_Environment.fullName_(module_, definition_.name_), generics_);
const outerConstraints_ = (alreadyFlat_
? ff_core_List.Empty()
: definition_.constraints_);
return ff_core_List.List_map(definition_.methods_, ((methodSignature_) => {
const generics_ = ff_core_List.List_partition(ff_core_List.List_addAll(definition_.generics_, methodSignature_.generics_), ((_w1) => {
return (_w1 === "Q$")
}));
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, ff_core_List.List_addAll(ff_core_List.List_takeFirst(generics_.first_, 1), generics_.second_), ff_core_List.Link(constraint_, ff_core_List.List_addAll(outerConstraints_, methodSignature_.constraints_)), _c.parameters_, _c.returnType_, _c.effect_)
}))(methodSignature_);
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, signature_.name_), ff_compiler_Environment.Scheme(false, false, false, true, signature_))
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
return (_w1 === "Q$")
}));
const normalGenerics_ = ff_core_List.List_filter(method_.signature_.generics_, ((_w1) => {
return (_w1 !== "Q$")
}));
const outerGenerics_ = (alreadyFlat_
? ff_core_List.Empty()
: d_.generics_);
const outerConstraints_ = (alreadyFlat_
? ff_core_List.Empty()
: d_.constraints_);
return ff_core_Pair.Pair((prefix_ + method_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, ff_core_List.List_addAll(effect_, ff_core_List.List_addAll(outerGenerics_, normalGenerics_)), ff_core_List.List_addAll(outerConstraints_, method_.signature_.constraints_), ff_core_List.Link(selfParameter_, method_.signature_.parameters_), _c.returnType_, _c.effect_)
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
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, (prefix_ + f_.name_)), ff_compiler_Environment.Scheme(true, f_.mutable_, d_.newtype_, false, ff_compiler_Syntax.Signature(f_.at_, f_.name_, true, d_.generics_, d_.constraints_, ff_core_List.Link(selfParameter_, ff_core_List.Empty()), f_.valueType_, noEffect_)))
}))
}));
const variants_ = ff_core_List.List_flatMap(module_.types_, ((d_) => {
const returnType_ = ff_compiler_Syntax.TConstructor(d_.at_, ff_compiler_Environment.fullName_(module_, d_.name_), ff_core_List.List_map(d_.generics_, ((typeParameter_) => {
return ff_compiler_Syntax.TConstructor(d_.at_, typeParameter_, ff_core_List.Empty())
})));
return ff_core_List.List_map(d_.variants_, ((variant_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, variant_.name_), ff_compiler_Environment.Scheme(false, false, d_.newtype_, false, ff_compiler_Syntax.Signature(variant_.at_, variant_.name_, false, d_.generics_, d_.constraints_, ff_core_List.List_addAll(d_.commonFields_, variant_.fields_), returnType_, noEffect_)))
}))
}));
const traits_ = ff_core_List.List_map(module_.traits_, ((d_) => {
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, d_.name_), d_)
}));
const effect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_compiler_Environment.Environment("", ff_core_List.List_toMap(ff_core_List.List_addAll(functions_, ff_core_List.List_addAll(lets_, ff_core_List.List_addAll(fields_, ff_core_List.List_addAll(extends_, ff_core_List.List_addAll(variants_, traitMethods_))))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(traits_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), effect_, ff_core_Option.None())
}

export async function make_$(module_, otherModules_, alreadyFlat_, $task) {
const processed_ = ff_compiler_Environment.processModule_(module_, true, alreadyFlat_);
const otherProcessed_ = ff_core_List.List_map(otherModules_, ((_w1) => {
return ff_compiler_Environment.processModule_(_w1, false, false)
}));
return ff_compiler_Environment.Environment(ff_compiler_Environment.fullName_(module_, ""), ff_core_Map.Map_addAll(processed_.symbols_, ff_core_List.List_foldLeft(ff_core_List.List_map(otherProcessed_, ((_w1) => {
return _w1.symbols_
})), ff_core_Map.empty_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Map.Map_addAll(processed_.traits_, ff_core_List.List_foldLeft(ff_core_List.List_map(otherProcessed_, ((_w1) => {
return _w1.traits_
})), ff_core_Map.empty_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.List_map(module_.imports_, ((i_) => {
return ff_core_Pair.Pair(i_.alias_, i_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty()), ff_core_Option.None())
}

export async function fullName_$(module_, name_, $task) {
return ((((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".") + name_)
}

export async function fail_$(at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function processModule_$(module_, isCurrentModule_, alreadyFlat_, $task) {
const functions_ = ff_core_List.List_map(module_.functions_, ((d_) => {
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, d_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, d_.signature_))
}));
const lets_ = ff_core_List.List_map(module_.lets_, ((d_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, d_.name_), ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(d_.at_, d_.name_, false, ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Empty(), d_.variableType_, noEffect_)))
}));
const traitMethods_ = ff_core_List.List_flatMap(module_.traits_, ((definition_) => {
const generics_ = ff_core_List.List_map(definition_.generics_, ((name_) => {
return ff_compiler_Syntax.TConstructor(definition_.at_, name_, ff_core_List.Empty())
}));
const constraint_ = ff_compiler_Syntax.Constraint(definition_.at_, ff_compiler_Environment.fullName_(module_, definition_.name_), generics_);
const outerConstraints_ = (alreadyFlat_
? ff_core_List.Empty()
: definition_.constraints_);
return ff_core_List.List_map(definition_.methods_, ((methodSignature_) => {
const generics_ = ff_core_List.List_partition(ff_core_List.List_addAll(definition_.generics_, methodSignature_.generics_), ((_w1) => {
return (_w1 === "Q$")
}));
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, ff_core_List.List_addAll(ff_core_List.List_takeFirst(generics_.first_, 1), generics_.second_), ff_core_List.Link(constraint_, ff_core_List.List_addAll(outerConstraints_, methodSignature_.constraints_)), _c.parameters_, _c.returnType_, _c.effect_)
}))(methodSignature_);
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, signature_.name_), ff_compiler_Environment.Scheme(false, false, false, true, signature_))
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
return (_w1 === "Q$")
}));
const normalGenerics_ = ff_core_List.List_filter(method_.signature_.generics_, ((_w1) => {
return (_w1 !== "Q$")
}));
const outerGenerics_ = (alreadyFlat_
? ff_core_List.Empty()
: d_.generics_);
const outerConstraints_ = (alreadyFlat_
? ff_core_List.Empty()
: d_.constraints_);
return ff_core_Pair.Pair((prefix_ + method_.signature_.name_), ff_compiler_Environment.Scheme(false, false, false, false, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, ff_core_List.List_addAll(effect_, ff_core_List.List_addAll(outerGenerics_, normalGenerics_)), ff_core_List.List_addAll(outerConstraints_, method_.signature_.constraints_), ff_core_List.Link(selfParameter_, method_.signature_.parameters_), _c.returnType_, _c.effect_)
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
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, (prefix_ + f_.name_)), ff_compiler_Environment.Scheme(true, f_.mutable_, d_.newtype_, false, ff_compiler_Syntax.Signature(f_.at_, f_.name_, true, d_.generics_, d_.constraints_, ff_core_List.Link(selfParameter_, ff_core_List.Empty()), f_.valueType_, noEffect_)))
}))
}));
const variants_ = ff_core_List.List_flatMap(module_.types_, ((d_) => {
const returnType_ = ff_compiler_Syntax.TConstructor(d_.at_, ff_compiler_Environment.fullName_(module_, d_.name_), ff_core_List.List_map(d_.generics_, ((typeParameter_) => {
return ff_compiler_Syntax.TConstructor(d_.at_, typeParameter_, ff_core_List.Empty())
})));
return ff_core_List.List_map(d_.variants_, ((variant_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(d_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, variant_.name_), ff_compiler_Environment.Scheme(false, false, d_.newtype_, false, ff_compiler_Syntax.Signature(variant_.at_, variant_.name_, false, d_.generics_, d_.constraints_, ff_core_List.List_addAll(d_.commonFields_, variant_.fields_), returnType_, noEffect_)))
}))
}));
const traits_ = ff_core_List.List_map(module_.traits_, ((d_) => {
return ff_core_Pair.Pair(ff_compiler_Environment.fullName_(module_, d_.name_), d_)
}));
const effect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.Location(module_.file_, 0, 0), "ff:core/Nothing.Nothing", ff_core_List.Empty());
return ff_compiler_Environment.Environment("", ff_core_List.List_toMap(ff_core_List.List_addAll(functions_, ff_core_List.List_addAll(lets_, ff_core_List.List_addAll(fields_, ff_core_List.List_addAll(extends_, ff_core_List.List_addAll(variants_, traitMethods_))))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(traits_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_List.List_toMap(ff_core_List.Empty(), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), effect_, ff_core_Option.None())
}



export const ff_core_Any_HasAnyTag$ff_compiler_Environment_Environment = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Environment.Environment" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Environment.Environment" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Environment_Scheme = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Environment.Scheme" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Environment.Scheme" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Environment_Instantiated = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Environment.Instantiated" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Environment.Instantiated" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Environment_Environment = {
show_(value_) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((("Environment" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.modulePrefix_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Show_Show$ff_compiler_Environment_Scheme).show_(z_.symbols_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DTrait).show_(z_.traits_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DImport).show_(z_.imports_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.selfVariable_)) + ")")
return
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((("Environment" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.modulePrefix_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Show_Show$ff_compiler_Environment_Scheme).show_(z_.symbols_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DTrait).show_(z_.traits_)) + ", ") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DImport).show_(z_.imports_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.selfVariable_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Environment_Scheme = {
show_(value_) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("Scheme" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isVariable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isMutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isNewtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isTraitMethod_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature.show_(z_.signature_)) + ")")
return
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("Scheme" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isVariable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isMutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isNewtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.isTraitMethod_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature.show_(z_.signature_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Environment_Instantiated = {
show_(value_) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((("Instantiated" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type)).show_(z_.typeArguments_)) + ", ") + ff_compiler_Environment.ff_core_Show_Show$ff_compiler_Environment_Scheme.show_(z_.scheme_)) + ")")
return
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((("Instantiated" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type)).show_(z_.typeArguments_)) + ", ") + ff_compiler_Environment.ff_core_Show_Show$ff_compiler_Environment_Scheme.show_(z_.scheme_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Environment_Environment = {
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
return ((x_.modulePrefix_ === y_.modulePrefix_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Equal_Equal$ff_compiler_Environment_Scheme).equals_(x_.symbols_, y_.symbols_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DTrait).equals_(x_.traits_, y_.traits_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DImport).equals_(x_.imports_, y_.imports_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.selfVariable_, y_.selfVariable_))))))
return
}
}
},
async equals_$(x_, y_, $task) {
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
return ((x_.modulePrefix_ === y_.modulePrefix_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Equal_Equal$ff_compiler_Environment_Scheme).equals_(x_.symbols_, y_.symbols_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DTrait).equals_(x_.traits_, y_.traits_) && (ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DImport).equals_(x_.imports_, y_.imports_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.selfVariable_, y_.selfVariable_))))))
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Environment_Scheme = {
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
return ((x_.isVariable_ === y_.isVariable_) && ((x_.isMutable_ === y_.isMutable_) && ((x_.isNewtype_ === y_.isNewtype_) && ((x_.isTraitMethod_ === y_.isTraitMethod_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Signature.equals_(x_.signature_, y_.signature_)))))
return
}
}
},
async equals_$(x_, y_, $task) {
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
return ((x_.isVariable_ === y_.isVariable_) && ((x_.isMutable_ === y_.isMutable_) && ((x_.isNewtype_ === y_.isNewtype_) && ((x_.isTraitMethod_ === y_.isTraitMethod_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Signature.equals_(x_.signature_, y_.signature_)))))
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Environment_Instantiated = {
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
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type)).equals_(x_.typeArguments_, y_.typeArguments_) && ff_compiler_Environment.ff_core_Equal_Equal$ff_compiler_Environment_Scheme.equals_(x_.scheme_, y_.scheme_))
return
}
}
},
async equals_$(x_, y_, $task) {
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
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type)).equals_(x_.typeArguments_, y_.typeArguments_) && ff_compiler_Environment.ff_core_Equal_Equal$ff_compiler_Environment_Scheme.equals_(x_.scheme_, y_.scheme_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Environment_Environment = {
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
const modulePrefixOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.modulePrefix_, y_.modulePrefix_);
if((modulePrefixOrdering_ !== ff_core_Ordering.OrderingSame())) {
return modulePrefixOrdering_
} else {
const symbolsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Ordering_Order$ff_compiler_Environment_Scheme).compare_(x_.symbols_, y_.symbols_);
if((symbolsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return symbolsOrdering_
} else {
const traitsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DTrait).compare_(x_.traits_, y_.traits_);
if((traitsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitsOrdering_
} else {
const importsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DImport).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const selfVariableOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.selfVariable_, y_.selfVariable_);
if((selfVariableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return selfVariableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
}
return
}
}
},
async compare_$(x_, y_, $task) {
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
const modulePrefixOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.modulePrefix_, y_.modulePrefix_);
if((modulePrefixOrdering_ !== ff_core_Ordering.OrderingSame())) {
return modulePrefixOrdering_
} else {
const symbolsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Ordering_Order$ff_compiler_Environment_Scheme).compare_(x_.symbols_, y_.symbols_);
if((symbolsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return symbolsOrdering_
} else {
const traitsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DTrait).compare_(x_.traits_, y_.traits_);
if((traitsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitsOrdering_
} else {
const importsOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DImport).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const selfVariableOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.selfVariable_, y_.selfVariable_);
if((selfVariableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return selfVariableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Environment_Scheme = {
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
const isVariableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isVariable_, y_.isVariable_);
if((isVariableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isVariableOrdering_
} else {
const isMutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isMutable_, y_.isMutable_);
if((isMutableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isMutableOrdering_
} else {
const isNewtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isNewtype_, y_.isNewtype_);
if((isNewtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isNewtypeOrdering_
} else {
const isTraitMethodOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isTraitMethod_, y_.isTraitMethod_);
if((isTraitMethodOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isTraitMethodOrdering_
} else {
const signatureOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature.compare_(x_.signature_, y_.signature_);
if((signatureOrdering_ !== ff_core_Ordering.OrderingSame())) {
return signatureOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
return
}
}
},
async compare_$(x_, y_, $task) {
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
const isVariableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isVariable_, y_.isVariable_);
if((isVariableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isVariableOrdering_
} else {
const isMutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isMutable_, y_.isMutable_);
if((isMutableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isMutableOrdering_
} else {
const isNewtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isNewtype_, y_.isNewtype_);
if((isNewtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isNewtypeOrdering_
} else {
const isTraitMethodOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.isTraitMethod_, y_.isTraitMethod_);
if((isTraitMethodOrdering_ !== ff_core_Ordering.OrderingSame())) {
return isTraitMethodOrdering_
} else {
const signatureOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature.compare_(x_.signature_, y_.signature_);
if((signatureOrdering_ !== ff_core_Ordering.OrderingSame())) {
return signatureOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Environment_Instantiated = {
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
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type)).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const schemeOrdering_ = ff_compiler_Environment.ff_core_Ordering_Order$ff_compiler_Environment_Scheme.compare_(x_.scheme_, y_.scheme_);
if((schemeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return schemeOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
},
async compare_$(x_, y_, $task) {
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
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type)).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const schemeOrdering_ = ff_compiler_Environment.ff_core_Ordering_Order$ff_compiler_Environment_Scheme.compare_(x_.scheme_, y_.scheme_);
if((schemeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return schemeOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Environment_Environment = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.modulePrefix_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme).serializeUsing_(serialization_, v_.symbols_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).serializeUsing_(serialization_, v_.traits_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).serializeUsing_(serialization_, v_.imports_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.selfVariable_)
return
}
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
return ff_compiler_Environment.Environment(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.modulePrefix_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme).serializeUsing_(serialization_, v_.symbols_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).serializeUsing_(serialization_, v_.traits_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).serializeUsing_(serialization_, v_.imports_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.selfVariable_)
return
}
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
return ff_compiler_Environment.Environment(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isVariable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isMutable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isNewtype_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isTraitMethod_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.serializeUsing_(serialization_, v_.signature_)
return
}
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Environment.Scheme(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isVariable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isMutable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isNewtype_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.isTraitMethod_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.serializeUsing_(serialization_, v_.signature_)
return
}
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Environment.Scheme(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Environment_Instantiated = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type)).serializeUsing_(serialization_, v_.typeArguments_);
ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme.serializeUsing_(serialization_, v_.scheme_)
return
}
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_Environment.Instantiated(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type)).deserializeUsing_(serialization_), ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type)).serializeUsing_(serialization_, v_.typeArguments_);
ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme.serializeUsing_(serialization_, v_.scheme_)
return
}
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 36), 0);
return ff_compiler_Environment.Instantiated(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type)).deserializeUsing_(serialization_), ff_compiler_Environment.ff_core_Serializable_Serializable$ff_compiler_Environment_Scheme.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
}
};


