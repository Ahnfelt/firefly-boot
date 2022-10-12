

import * as ff_compiler_Dictionaries from "../../ff/compiler/Dictionaries.mjs"

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

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

// type Dictionaries
export function Dictionaries(instances_) {
return {instances_};
}



export function make_(modules_) {
return ff_compiler_Dictionaries.Dictionaries(ff_compiler_Unification.make_(modules_).instances_)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function constraintsToInstances_(constraints_) {
return ff_core_List.List_toMap(ff_core_List.List_map(constraints_, ((c_) => {
const typeName_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
return
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
return ff_compiler_Dictionaries.fail_(c_.at_, ("Unexpected unification variable: $" + i_))
return
}
}
}))(ff_core_List.List_expectFirst(c_.generics_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(c_.name_, typeName_), ff_compiler_Unification.InstanceValue(ff_core_List.Empty(), ff_core_List.Empty(), ff_compiler_Syntax.PackagePair("", ""), "", c_.name_, c_.generics_))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey)
}

export async function make_$(modules_, $c) {
return ff_compiler_Dictionaries.Dictionaries(ff_compiler_Unification.make_(modules_).instances_)
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function constraintsToInstances_$(constraints_, $c) {
return ff_core_List.List_toMap(ff_core_List.List_map(constraints_, ((c_) => {
const typeName_ = (((_1) => {
{
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
return
}
}
{
if(_1.TVariable) {
const i_ = _1.index_;
return ff_compiler_Dictionaries.fail_(c_.at_, ("Unexpected unification variable: $" + i_))
return
}
}
}))(ff_core_List.List_expectFirst(c_.generics_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(c_.name_, typeName_), ff_compiler_Unification.InstanceValue(ff_core_List.Empty(), ff_core_List.Empty(), ff_compiler_Syntax.PackagePair("", ""), "", c_.name_, c_.generics_))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey)
}

export function Dictionaries_processModule(self_, module_, otherModules_) {
const environment_ = ff_compiler_Environment.make_(module_, otherModules_);
const functionSignatures_ = ff_core_List.List_toMap(ff_core_List.List_collect(ff_core_Map.Map_pairs(environment_.symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const name_ = _1.first_;
const s_ = _1.second_;
const _guard1 = (!s_.isVariable_);
if(_guard1) {
return ff_core_Option.Some(ff_core_Pair.Pair(name_, s_.signature_))
return
}
}
{
return ff_core_Option.None()
return
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
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, _c.imports_, _c.types_, _c.traits_, instances_, extends_, lets_, functions_)
return
}
}
}

export function Dictionaries_processLetDefinition(self_, functions_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, _c.variableType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, definition_.value_))
return
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
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Syntax.Target_mapFirefly(definition_.body_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processLambda(self2_, functions_, _w1)
})))
return
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
})))
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
return
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
{
if(_1.EString) {
return term_
return
}
}
{
if(_1.EChar) {
return term_
return
}
}
{
if(_1.EInt) {
return term_
return
}
}
{
if(_1.EFloat) {
return term_
return
}
}
{
if(_1.EVariable) {
return term_
return
}
}
{
if(_1.EField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_)
return
}
}
return
}
}
{
if(_1.EWildcard) {
const e_ = _1;
return term_
return
}
}
{
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
return
}
})))
return
}
}
return
}
}
{
if(_1.ESequential) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.before_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.after_))
return
}
}
return
}
}
{
if(_1.ELet) {
const e_ = _1;
const newFunctions_ = ff_core_Map.Map_remove(functions_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, newFunctions_, e_.body_))
return
}
}
return
}
}
{
if(_1.ELambda) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELambda(_c.at_, ff_compiler_Dictionaries.Dictionaries_processLambda(self_, functions_, e_.lambda_))
return
}
}
return
}
}
{
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
}
{
if(_1.EVariantIs) {
const e_ = _1;
return term_
return
}
}
{
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
}
{
if(_1.EPipe) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), _c.effect_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.function_))
return
}
}
return
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const target_ = _1.target_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const _guard1 = ff_core_Map.Map_get(functions_, target_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1.Some) {
const signature_ = _guard1.value_;
const dictionaries_ = ff_core_List.List_map(signature_.constraints_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, signature_.generics_, typeArguments_, _w1)
}));
return ff_compiler_Syntax.ECall(at_, (((_c) => {
return ff_compiler_Syntax.StaticCall(_c.name_, _c.tailCall_, _c.instanceCall_)
}))(target_), effect_, typeArguments_, ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
})), dictionaries_)
return
}
}
}
}
{
if(_1.ECall) {
const e_ = _1;
const target_ = (((_1) => {
{
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, call_.function_), _c.tailCall_)
return
}
}
return
}
}
{
if(_1.StaticCall) {
return e_.target_
return
}
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
}
{
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
}
{
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
}
{
if(_1.EAssign) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
return
}
}
return
}
}
{
if(_1.EAssignField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
return
}
}
return
}
}
}
}

export function Dictionaries_processArgument(self_, functions_, argument_) {
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, argument_.value_))
return
}
}
}

export function Dictionaries_processField(self_, functions_, field_) {
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, field_.value_))
return
}
}
}

export function Dictionaries_makeDictionary(self_, typeParameters_, typeArguments_, constraint_) {
const instantiationMap_ = ff_core_List.List_toMap(ff_core_List.List_zip(typeParameters_, typeArguments_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const unification_ = ff_compiler_Unification.make_(ff_core_List.Empty());
const newGenerics_ = ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(unification_, instantiationMap_, _w1)
}));
const firstType_ = (((_1) => {
{
if(_1.TConstructor) {
const t_ = _1;
return t_
return
}
}
{
if(_1.TVariable) {
const t_ = _1;
return ff_compiler_Dictionaries.fail_(t_.at_, " is still a unification variable")
return
}
}
}))(ff_core_List.List_expectFirst(newGenerics_));
const instance_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.instances_, ff_compiler_Unification.InstanceKey(constraint_.name_, firstType_.name_), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), (() => {
return ff_compiler_Dictionaries.fail_(constraint_.at_, ((("Internal error - missing instance " + firstType_.name_) + ": ") + constraint_.name_))
}));
const dictionaries_ = ff_core_List.List_map(instance_.constraints_, ((c_) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, instance_.generics_, firstType_.generics_, c_)
}));
return ff_compiler_Syntax.Dictionary(instance_.packagePair_, instance_.moduleName_, constraint_.name_, firstType_.name_, dictionaries_)
}

export async function Dictionaries_processModule$(self_, module_, otherModules_, $c) {
const environment_ = ff_compiler_Environment.make_(module_, otherModules_);
const functionSignatures_ = ff_core_List.List_toMap(ff_core_List.List_collect(ff_core_Map.Map_pairs(environment_.symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const name_ = _1.first_;
const s_ = _1.second_;
const _guard1 = (!s_.isVariable_);
if(_guard1) {
return ff_core_Option.Some(ff_core_Pair.Pair(name_, s_.signature_))
return
}
}
{
return ff_core_Option.None()
return
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
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, _c.imports_, _c.types_, _c.traits_, instances_, extends_, lets_, functions_)
return
}
}
}

export async function Dictionaries_processLetDefinition$(self_, functions_, definition_, $c) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, _c.variableType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, definition_.value_))
return
}
}
}

export async function Dictionaries_processExtendDefinition$(self_, functions_, definition_, $c) {
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

export async function Dictionaries_processFunctionDefinition$(self_, functions_, definition_, $c) {
const instances_ = ff_compiler_Dictionaries.constraintsToInstances_(definition_.signature_.constraints_);
const self2_ = (((_c) => {
return ff_compiler_Dictionaries.Dictionaries(ff_core_Map.Map_addAll(self_.instances_, instances_, ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey))
}))(self_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Syntax.Target_mapFirefly(definition_.body_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processLambda(self2_, functions_, _w1)
})))
return
}
}
}

export async function Dictionaries_processInstanceDefinition$(self_, functions_, definition_, $c) {
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
})))
return
}
}
}

export async function Dictionaries_processLambda$(self_, functions_, definition_, $c) {
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
return
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

export async function Dictionaries_processTerm$(self_, functions_, term_, $c) {
{
const _1 = term_;
{
if(_1.EString) {
return term_
return
}
}
{
if(_1.EChar) {
return term_
return
}
}
{
if(_1.EInt) {
return term_
return
}
}
{
if(_1.EFloat) {
return term_
return
}
}
{
if(_1.EVariable) {
return term_
return
}
}
{
if(_1.EField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_)
return
}
}
return
}
}
{
if(_1.EWildcard) {
const e_ = _1;
return term_
return
}
}
{
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
return
}
})))
return
}
}
return
}
}
{
if(_1.ESequential) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.before_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.after_))
return
}
}
return
}
}
{
if(_1.ELet) {
const e_ = _1;
const newFunctions_ = ff_core_Map.Map_remove(functions_, e_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), ff_compiler_Dictionaries.Dictionaries_processTerm(self_, newFunctions_, e_.body_))
return
}
}
return
}
}
{
if(_1.ELambda) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELambda(_c.at_, ff_compiler_Dictionaries.Dictionaries_processLambda(self_, functions_, e_.lambda_))
return
}
}
return
}
}
{
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
}
{
if(_1.EVariantIs) {
const e_ = _1;
return term_
return
}
}
{
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
}
{
if(_1.EPipe) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_), _c.effect_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.function_))
return
}
}
return
}
}
{
if(_1.ECall) {
const at_ = _1.at_;
if(_1.target_.StaticCall) {
const target_ = _1.target_;
const effect_ = _1.effect_;
const typeArguments_ = _1.typeArguments_;
const arguments_ = _1.arguments_;
const _guard1 = ff_core_Map.Map_get(functions_, target_.name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_guard1.Some) {
const signature_ = _guard1.value_;
const dictionaries_ = ff_core_List.List_map(signature_.constraints_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, signature_.generics_, typeArguments_, _w1)
}));
return ff_compiler_Syntax.ECall(at_, (((_c) => {
return ff_compiler_Syntax.StaticCall(_c.name_, _c.tailCall_, _c.instanceCall_)
}))(target_), effect_, typeArguments_, ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_Dictionaries.Dictionaries_processArgument(self_, functions_, _w1)
})), dictionaries_)
return
}
}
}
}
{
if(_1.ECall) {
const e_ = _1;
const target_ = (((_1) => {
{
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, call_.function_), _c.tailCall_)
return
}
}
return
}
}
{
if(_1.StaticCall) {
return e_.target_
return
}
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
}
{
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
}
{
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
}
{
if(_1.EAssign) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
return
}
}
return
}
}
{
if(_1.EAssignField) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.record_), _c.field_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, e_.value_))
return
}
}
return
}
}
}
}

export async function Dictionaries_processArgument$(self_, functions_, argument_, $c) {
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, argument_.value_))
return
}
}
}

export async function Dictionaries_processField$(self_, functions_, field_, $c) {
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Dictionaries.Dictionaries_processTerm(self_, functions_, field_.value_))
return
}
}
}

export async function Dictionaries_makeDictionary$(self_, typeParameters_, typeArguments_, constraint_, $c) {
const instantiationMap_ = ff_core_List.List_toMap(ff_core_List.List_zip(typeParameters_, typeArguments_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const unification_ = ff_compiler_Unification.make_(ff_core_List.Empty());
const newGenerics_ = ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(unification_, instantiationMap_, _w1)
}));
const firstType_ = (((_1) => {
{
if(_1.TConstructor) {
const t_ = _1;
return t_
return
}
}
{
if(_1.TVariable) {
const t_ = _1;
return ff_compiler_Dictionaries.fail_(t_.at_, " is still a unification variable")
return
}
}
}))(ff_core_List.List_expectFirst(newGenerics_));
const instance_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.instances_, ff_compiler_Unification.InstanceKey(constraint_.name_, firstType_.name_), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey), (() => {
return ff_compiler_Dictionaries.fail_(constraint_.at_, ((("Internal error - missing instance " + firstType_.name_) + ": ") + constraint_.name_))
}));
const dictionaries_ = ff_core_List.List_map(instance_.constraints_, ((c_) => {
return ff_compiler_Dictionaries.Dictionaries_makeDictionary(self_, instance_.generics_, firstType_.generics_, c_)
}));
return ff_compiler_Syntax.Dictionary(instance_.packagePair_, instance_.moduleName_, constraint_.name_, firstType_.name_, dictionaries_)
}




