import * as ff_compiler_Dictionaries from "../../ff/compiler/Dictionaries.mjs"

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

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

// type Dictionaries
export function Dictionaries(instances_) {
return {instances_};
}

export function new_(modules_) {
return ff_compiler_Dictionaries.Dictionaries(ff_compiler_Unification.new_(modules_, false).instances_)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function constraintsToInstances_(constraints_) {
return ff_core_List.List_toMap(ff_core_List.List_map(constraints_, ((c_) => {
const typeName_ = (((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
}
{
const i_ = _1.index_;
return ff_compiler_Dictionaries.fail_(c_.at_, ("Unexpected unification variable: $" + i_))
}
}))(ff_core_List.List_grabFirst(c_.generics_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(c_.name_, typeName_), ff_compiler_Unification.InstanceValue([], [], ff_compiler_Syntax.ModuleKey(ff_compiler_Syntax.PackagePair("", ""), [], ""), c_.name_, c_.generics_))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey)
}

export async function new_$(modules_, $task) {
return ff_compiler_Dictionaries.Dictionaries(ff_compiler_Unification.new_(modules_, false).instances_)
}

export async function fail_$(at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function constraintsToInstances_$(constraints_, $task) {
return ff_core_List.List_toMap(ff_core_List.List_map(constraints_, ((c_) => {
const typeName_ = (((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
}
{
const i_ = _1.index_;
return ff_compiler_Dictionaries.fail_(c_.at_, ("Unexpected unification variable: $" + i_))
}
}))(ff_core_List.List_grabFirst(c_.generics_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(c_.name_, typeName_), ff_compiler_Unification.InstanceValue([], [], ff_compiler_Syntax.ModuleKey(ff_compiler_Syntax.PackagePair("", ""), [], ""), c_.name_, c_.generics_))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey)
}

export function Dictionaries_processModule(self_, module_, otherModules_) {
const environment_ = ff_compiler_Environment.new_(module_, otherModules_, true);
const functionSignatures_ = ff_core_List.List_toMap(ff_core_List.List_collect(ff_core_Map.Map_pairs(environment_.symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const name_ = _1.first_;
const s_ = _1.second_;
if((!s_.isVariable_)) {
return ff_core_Option.Some(ff_core_Pair.Pair(name_, s_.signature_))
}
}
{
return ff_core_Option.None()
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processLetDefinition(self_, functionSignatures_, _w1)
}));
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self_, functionSignatures_, _w1)
}));
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processExtendDefinition(self_, functionSignatures_, _w1)
}));
const instances_ = ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processInstanceDefinition(self_, functionSignatures_, _w1)
}));
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, _c.types_, _c.traits_, instances_, extends_, lets_, functions_)
}
}
}

export function Dictionaries_processLetDefinition(self_, functions_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, _c.variableType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, definition_.value_))
}
}
}

export function Dictionaries_processExtendDefinition(self_, functions_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self_, functions_, _w1)
})))
return
}
}
}

export function Dictionaries_processFunctionDefinition(self_, functions_, definition_) {
const instances_ = ff_compiler_Dictionaries.constraintsToInstances_(definition_.signature_.constraints_);
const self2_ = (((_c) => {
return ff_compiler_Dictionaries.Dictionaries(ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey))
}))(self_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Dictionaries.Dictionaries_processLambda(self2_, functions_, definition_.body_))
}
}
}

export function Dictionaries_processInstanceDefinition(self_, functions_, definition_) {
const instances_ = ff_compiler_Dictionaries.constraintsToInstances_(definition_.constraints_);
const self2_ = (((_c) => {
return ff_compiler_Dictionaries.Dictionaries(ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey))
}))(self_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, _c.constraints_, _c.traitName_, _c.typeArguments_, _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self2_, functions_, _w1)
})), _c.derived_)
return
}
}
}

export function Dictionaries_processLambda(self_, functions_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(definition_.cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, ff_core_List.List_map(case_.guards_, ((g_) => {
{
const _1 = g_;
{
const _c = _1;
return ff_compiler_Syntax.MatchGuard(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, g_.term_), _c.pattern_)
}
}
})), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, case_.body_))
return
}
}
})))
return
}
}
}

export function Dictionaries_processTerm(self_, functions_, term_) {
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
return term_
}
if(_1.EField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_)
}
}
return
}
if(_1.EWildcard) {
const e_ = _1;
return term_
}
if(_1.EList) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EList(_c.at_, _c.elementType_, ff_core_List.List_map(e_.items_, ((_1) => {
{
const item_ = _1.first_;
const b_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, item_), b_)
}
})))
return
}
}
return
}
if(_1.ESequential) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.before_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.after_))
}
}
return
}
if(_1.ELet) {
const e_ = _1;
const newFunctions_ = ff_core_Map.Map_remove(functions_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, newFunctions_, e_.body_))
}
}
return
}
if(_1.ELambda) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELambda(_c.at_, ff_compiler_Dictionaries.Dictionaries_processLambda(self_, functions_, e_.lambda_))
}
}
return
}
if(_1.EVariant) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, _c.typeArguments_, ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
}))
})))
return
}
}
return
}
if(_1.EVariantIs) {
const e_ = _1;
return term_
}
if(_1.ECopy) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECopy(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processField(self_, functions_, _w1)
})))
return
}
}
return
}
if(_1.EPipe) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), _c.effect_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.function_))
}
}
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const target_ = _1.target_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const _guard1 = ff_core_Map.Map_get(functions_, target_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1.Some) {
const signature_ = _guard1.value_;
const dictionaries_ = ff_core_List.List_map(signature_.constraints_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, at_, signature_.generics_, typeArguments_, _w1)
}));
return ff_compiler_Syntax.ECall(at_, (((_c) => {
return ff_compiler_Syntax.StaticCall(_c.name_, _c.tailCall_, _c.instanceCall_)
}))(target_), effect_, typeArguments_, ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
})), dictionaries_)
return
}
}
if(_1.ECall) {
const e_ = _1;
const target_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, call_.function_), _c.tailCall_)
}
}
return
}
{
return e_.target_
}
}))(e_.target_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
})), _c.dictionaries_)
return
}
}
return
}
if(_1.ERecord) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ERecord(_c.at_, ff_core_List.List_map(e_.fields_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processField(self_, functions_, _w1)
})))
return
}
}
return
}
if(_1.EFunctions) {
const e_ = _1;
const newFunctions_ = ff_core_Map.Map_addAll(functions_, ff_core_List.List_toMap(ff_core_List.List_map(e_.functions_, ((f_) => {
return ff_core_Pair.Pair(f_.signature_.name_, f_.signature_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EFunctions(_c.at_, ff_core_List.List_map(e_.functions_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self_, newFunctions_, _w1)
})), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, newFunctions_, e_.body_))
return
}
}
return
}
if(_1.EAssign) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
}
}
return
}
{
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
}
}
return
}
}
}

export function Dictionaries_processArgument(self_, functions_, argument_) {
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, argument_.value_))
}
}
}

export function Dictionaries_processField(self_, functions_, field_) {
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, field_.value_))
}
}
}

export function Dictionaries_makeDictionary(self_, at_, typeParameters_, typeArguments_, constraint_) {
const instantiationMap_ = ff_core_List.List_toMap(ff_core_List.List_zip(typeParameters_, typeArguments_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const unification_ = ff_compiler_Unification.new_([], false);
const newGenerics_ = ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(unification_, instantiationMap_, _w1)
}));
{
const _1 = ff_core_List.List_grabFirst(newGenerics_);
if(_1.TConstructor) {
const firstType_ = _1;
const instance_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.instances_, ff_compiler_Unification.InstanceKey(constraint_.name_, firstType_.name_), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, ((("Missing instance " + firstType_.name_) + ": ") + constraint_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}));
const dictionaries_ = ff_core_List.List_map(instance_.constraints_, ((c_) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, at_, instance_.generics_, firstType_.generics_, c_)
}));
return ff_compiler_Syntax.Dictionary(instance_.moduleKey_, constraint_.name_, firstType_.name_, dictionaries_)
}
{
const t_ = _1;
return ff_compiler_Dictionaries.fail_(t_.at_, " is still a unification variable")
}
}
}

export async function Dictionaries_processModule$(self_, module_, otherModules_, $task) {
const environment_ = ff_compiler_Environment.new_(module_, otherModules_, true);
const functionSignatures_ = ff_core_List.List_toMap(ff_core_List.List_collect(ff_core_Map.Map_pairs(environment_.symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const name_ = _1.first_;
const s_ = _1.second_;
if((!s_.isVariable_)) {
return ff_core_Option.Some(ff_core_Pair.Pair(name_, s_.signature_))
}
}
{
return ff_core_Option.None()
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processLetDefinition(self_, functionSignatures_, _w1)
}));
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self_, functionSignatures_, _w1)
}));
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processExtendDefinition(self_, functionSignatures_, _w1)
}));
const instances_ = ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processInstanceDefinition(self_, functionSignatures_, _w1)
}));
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, _c.types_, _c.traits_, instances_, extends_, lets_, functions_)
}
}
}

export async function Dictionaries_processLetDefinition$(self_, functions_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, _c.variableType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, definition_.value_))
}
}
}

export async function Dictionaries_processExtendDefinition$(self_, functions_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self_, functions_, _w1)
})))
return
}
}
}

export async function Dictionaries_processFunctionDefinition$(self_, functions_, definition_, $task) {
const instances_ = ff_compiler_Dictionaries.constraintsToInstances_(definition_.signature_.constraints_);
const self2_ = (((_c) => {
return ff_compiler_Dictionaries.Dictionaries(ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey))
}))(self_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Dictionaries.Dictionaries_processLambda(self2_, functions_, definition_.body_))
}
}
}

export async function Dictionaries_processInstanceDefinition$(self_, functions_, definition_, $task) {
const instances_ = ff_compiler_Dictionaries.constraintsToInstances_(definition_.constraints_);
const self2_ = (((_c) => {
return ff_compiler_Dictionaries.Dictionaries(ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey))
}))(self_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, _c.constraints_, _c.traitName_, _c.typeArguments_, _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self2_, functions_, _w1)
})), _c.derived_)
return
}
}
}

export async function Dictionaries_processLambda$(self_, functions_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(definition_.cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, ff_core_List.List_map(case_.guards_, ((g_) => {
{
const _1 = g_;
{
const _c = _1;
return ff_compiler_Syntax.MatchGuard(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, g_.term_), _c.pattern_)
}
}
})), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, case_.body_))
return
}
}
})))
return
}
}
}

export async function Dictionaries_processTerm$(self_, functions_, term_, $task) {
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
return term_
}
if(_1.EField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_)
}
}
return
}
if(_1.EWildcard) {
const e_ = _1;
return term_
}
if(_1.EList) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EList(_c.at_, _c.elementType_, ff_core_List.List_map(e_.items_, ((_1) => {
{
const item_ = _1.first_;
const b_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, item_), b_)
}
})))
return
}
}
return
}
if(_1.ESequential) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.before_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.after_))
}
}
return
}
if(_1.ELet) {
const e_ = _1;
const newFunctions_ = ff_core_Map.Map_remove(functions_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, newFunctions_, e_.body_))
}
}
return
}
if(_1.ELambda) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELambda(_c.at_, ff_compiler_Dictionaries.Dictionaries_processLambda(self_, functions_, e_.lambda_))
}
}
return
}
if(_1.EVariant) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, _c.typeArguments_, ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
}))
})))
return
}
}
return
}
if(_1.EVariantIs) {
const e_ = _1;
return term_
}
if(_1.ECopy) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECopy(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processField(self_, functions_, _w1)
})))
return
}
}
return
}
if(_1.EPipe) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), _c.effect_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.function_))
}
}
return
}
if(_1.ECall && _1.target_.StaticCall) {
const at_ = _1.at_;
const target_ = _1.target_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const _guard1 = ff_core_Map.Map_get(functions_, target_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1.Some) {
const signature_ = _guard1.value_;
const dictionaries_ = ff_core_List.List_map(signature_.constraints_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, at_, signature_.generics_, typeArguments_, _w1)
}));
return ff_compiler_Syntax.ECall(at_, (((_c) => {
return ff_compiler_Syntax.StaticCall(_c.name_, _c.tailCall_, _c.instanceCall_)
}))(target_), effect_, typeArguments_, ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
})), dictionaries_)
return
}
}
if(_1.ECall) {
const e_ = _1;
const target_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, call_.function_), _c.tailCall_)
}
}
return
}
{
return e_.target_
}
}))(e_.target_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
})), _c.dictionaries_)
return
}
}
return
}
if(_1.ERecord) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ERecord(_c.at_, ff_core_List.List_map(e_.fields_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processField(self_, functions_, _w1)
})))
return
}
}
return
}
if(_1.EFunctions) {
const e_ = _1;
const newFunctions_ = ff_core_Map.Map_addAll(functions_, ff_core_List.List_toMap(ff_core_List.List_map(e_.functions_, ((f_) => {
return ff_core_Pair.Pair(f_.signature_.name_, f_.signature_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EFunctions(_c.at_, ff_core_List.List_map(e_.functions_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processFunctionDefinition(self_, newFunctions_, _w1)
})), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, newFunctions_, e_.body_))
return
}
}
return
}
if(_1.EAssign) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
}
}
return
}
{
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
}
}
return
}
}
}

export async function Dictionaries_processArgument$(self_, functions_, argument_, $task) {
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, argument_.value_))
}
}
}

export async function Dictionaries_processField$(self_, functions_, field_, $task) {
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, field_.value_))
}
}
}

export async function Dictionaries_makeDictionary$(self_, at_, typeParameters_, typeArguments_, constraint_, $task) {
const instantiationMap_ = ff_core_List.List_toMap(ff_core_List.List_zip(typeParameters_, typeArguments_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const unification_ = ff_compiler_Unification.new_([], false);
const newGenerics_ = ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(unification_, instantiationMap_, _w1)
}));
{
const _1 = ff_core_List.List_grabFirst(newGenerics_);
if(_1.TConstructor) {
const firstType_ = _1;
const instance_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.instances_, ff_compiler_Unification.InstanceKey(constraint_.name_, firstType_.name_), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), (() => {
throw ff_core_Js.initializeError_(ff_compiler_Syntax.CompileError(at_, ((("Missing instance " + firstType_.name_) + ": ") + constraint_.name_)), new Error(), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError)
}));
const dictionaries_ = ff_core_List.List_map(instance_.constraints_, ((c_) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, at_, instance_.generics_, firstType_.generics_, c_)
}));
return ff_compiler_Syntax.Dictionary(instance_.moduleKey_, constraint_.name_, firstType_.name_, dictionaries_)
}
{
const t_ = _1;
return ff_compiler_Dictionaries.fail_(t_.at_, " is still a unification variable")
}
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_Dictionaries_Dictionaries = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Dictionaries.Dictionaries" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Dictionaries.Dictionaries" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_Dictionaries_Dictionaries = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((("Dictionaries" + "(") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_compiler_Unification.ff_core_Show_Show$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Show_Show$ff_compiler_Unification_InstanceValue).show_(z_.instances_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((("Dictionaries" + "(") + ff_core_Map.ff_core_Show_Show$ff_core_Map_Map(ff_compiler_Unification.ff_core_Show_Show$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Show_Show$ff_compiler_Unification_InstanceValue).show_(z_.instances_)) + ")")
}
},
};

export const ff_core_Equal_Equal$ff_compiler_Dictionaries_Dictionaries = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_compiler_Unification.ff_core_Equal_Equal$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Equal_Equal$ff_compiler_Unification_InstanceValue).equals_(x_.instances_, y_.instances_)
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ff_core_Map.ff_core_Equal_Equal$ff_core_Map_Map(ff_compiler_Unification.ff_core_Equal_Equal$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Equal_Equal$ff_compiler_Unification_InstanceValue).equals_(x_.instances_, y_.instances_)
}
},
};

export const ff_core_Ordering_Order$ff_compiler_Dictionaries_Dictionaries = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const instancesOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceValue).compare_(x_.instances_, y_.instances_);
if((instancesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return instancesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const instancesOrdering_ = ff_core_Map.ff_core_Ordering_Order$ff_core_Map_Map(ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceValue).compare_(x_.instances_, y_.instances_);
if((instancesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return instancesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_Dictionaries_Dictionaries = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceValue).serializeUsing_(serialization_, v_.instances_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
return ff_compiler_Dictionaries.Dictionaries(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceValue).deserializeUsing_(serialization_))
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceValue).serializeUsing_(serialization_, v_.instances_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 37), 0);
return ff_compiler_Dictionaries.Dictionaries(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Map_Map(ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey, ff_compiler_Unification.ff_core_Serializable_Serializable$ff_compiler_Unification_InstanceValue).deserializeUsing_(serialization_))
}
{
throw ff_core_Js.initializeError_(ff_core_Serializable.DeserializationChecksumException(), new Error(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
},
};


//# sourceMappingURL=Dictionaries.mjs.map