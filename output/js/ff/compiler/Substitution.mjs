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

import * as ff_compiler_Substitution from "../../ff/compiler/Substitution.mjs"

// type Substitution
export function Substitution(substitution_) {
return {substitution_};
}

export function core_(name_) {
return ((("ff:core/" + name_) + ".") + name_)
}

export async function core_$(name_, $task) {
return ((("ff:core/" + name_) + ".") + name_)
}

export function Substitution_substituteModule(self_, module_) {
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteLetDefinition(self_, _w1)
}));
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
}));
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteExtendDefinition(self_, _w1)
}));
const instances_ = ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteInstanceDefinition(self_, _w1)
}));
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, _c.types_, _c.traits_, instances_, extends_, lets_, functions_)
}
}
}

export function Substitution_substituteLetDefinition(self_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, definition_.variableType_), ff_compiler_Substitution.Substitution_substituteTerm(self_, definition_.value_))
}
}
}

export function Substitution_substituteExtendDefinition(self_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
})))
return
}
}
}

export function Substitution_substituteFunctionDefinition(self_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, ff_compiler_Substitution.Substitution_substituteSignature(self_, definition_.signature_), ff_compiler_Substitution.Substitution_substituteLambda(self_, definition_.body_))
}
}
}

export function Substitution_substituteSignature(self_, signature_) {
{
const _1 = signature_;
{
const _c = _1;
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, ff_core_List.List_map(signature_.constraints_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteConstraint(self_, _w1)
})), ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteParameter(self_, _w1)
})), ff_compiler_Substitution.Substitution_substituteType(self_, signature_.returnType_), ff_compiler_Substitution.Substitution_substituteType(self_, signature_.effect_))
return
}
}
}

export function Substitution_substituteConstraint(self_, constraint_) {
{
const _1 = constraint_;
{
const _c = _1;
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})))
return
}
}
}

export function Substitution_substituteParameter(self_, parameter_) {
{
const _1 = parameter_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, parameter_.valueType_), ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteTerm(self_, _w1)
})))
return
}
}
}

export function Substitution_substituteInstanceDefinition(self_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, _c.constraints_, _c.traitName_, _c.typeArguments_, _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
})), _c.derived_)
return
}
}
}

export function Substitution_substituteLambda(self_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, ff_compiler_Substitution.Substitution_substituteType(self_, definition_.effect_), ff_core_List.List_map(definition_.cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, ff_core_List.List_map(case_.guards_, ((g_) => {
{
const _1 = g_;
{
const _c = _1;
return ff_compiler_Syntax.MatchGuard(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, g_.term_), _c.pattern_)
}
}
})), ff_compiler_Substitution.Substitution_substituteTerm(self_, case_.body_))
return
}
}
})))
return
}
}
}

export function Substitution_substituteTerm(self_, term_) {
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
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), _c.field_)
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
return ff_compiler_Syntax.EList(_c.at_, ff_compiler_Substitution.Substitution_substituteType(self_, e_.elementType_), ff_core_List.List_map(e_.items_, ((_1) => {
{
const item_ = _1.first_;
const b_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Substitution.Substitution_substituteTerm(self_, item_), b_)
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
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.before_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.after_))
}
}
return
}
if(_1.ELet) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, e_.valueType_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.body_))
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
return ff_compiler_Syntax.ELambda(_c.at_, ff_compiler_Substitution.Substitution_substituteLambda(self_, e_.lambda_))
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
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, ff_core_List.List_map(e_.typeArguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})), ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteArgument(self_, _w1)
}))
})))
return
}
}
return
}
if(_1.EVariantIs) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariantIs(_c.at_, _c.name_, ff_core_List.List_map(e_.typeArguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})))
return
}
}
return
}
if(_1.ECopy) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECopy(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteField(self_, _w1)
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
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_), ff_compiler_Substitution.Substitution_substituteType(self_, e_.effect_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.function_))
}
}
return
}
if(_1.ECall) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Substitution.Substitution_substituteTerm(self_, call_.function_), _c.tailCall_)
}
}
return
}
{
return e_.target_
}
}))(e_.target_), ff_compiler_Substitution.Substitution_substituteType(self_, e_.effect_), ff_core_List.List_map(e_.typeArguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})), ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteArgument(self_, _w1)
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
return ff_compiler_Substitution.Substitution_substituteField(self_, _w1)
})))
return
}
}
return
}
if(_1.EFunctions) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EFunctions(_c.at_, ff_core_List.List_map(e_.functions_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
})), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.body_))
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
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_))
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
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), _c.field_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_))
}
}
return
}
}
}

export function Substitution_substituteArgument(self_, argument_) {
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, argument_.value_))
}
}
}

export function Substitution_substituteField(self_, field_) {
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, field_.value_))
}
}
}

export function Substitution_substituteType(self_, type_) {
const self_a = self_;
const type_a = type_;
if(type_a.TVariable) {
const at_ = type_a.at_;
const i_ = type_a.index_;
if(ff_compiler_Substitution.Substitution_has(self_, i_)) {
return ff_compiler_Substitution.Substitution_substituteType(self_, ff_compiler_Substitution.Substitution_get(self_, i_))
} else {
return ff_compiler_Syntax.TConstructor(at_, ff_compiler_Substitution.core_("Nothing"), [])
}
return
}
{
const t_ = type_a;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, _c.name_, ff_core_List.List_map(t_.generics_, ((g_) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, g_)
})))
return
}
}
return
}
}

export function Substitution_get(self_, index_) {
{
const _1 = ff_core_Map.Map_grab(self_.substitution_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
if(_1.TVariable) {
const i_ = _1.index_;
if(ff_compiler_Substitution.Substitution_has(self_, i_)) {
const t_ = ff_compiler_Substitution.Substitution_get(self_, i_);
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, t_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
return t_
}
}
if(_1.TVariable) {
const at_ = _1.at_;
return ff_compiler_Syntax.TConstructor(at_, ff_compiler_Substitution.core_("Nothing"), [])
}
{
const t_ = _1;
return t_
}
}
}

export function Substitution_has(self_, index_) {
return ff_core_Map.Map_contains(self_.substitution_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}

export async function Substitution_substituteModule$(self_, module_, $task) {
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteLetDefinition(self_, _w1)
}));
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
}));
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteExtendDefinition(self_, _w1)
}));
const instances_ = ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteInstanceDefinition(self_, _w1)
}));
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, _c.types_, _c.traits_, instances_, extends_, lets_, functions_)
}
}
}

export async function Substitution_substituteLetDefinition$(self_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, definition_.variableType_), ff_compiler_Substitution.Substitution_substituteTerm(self_, definition_.value_))
}
}
}

export async function Substitution_substituteExtendDefinition$(self_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
})))
return
}
}
}

export async function Substitution_substituteFunctionDefinition$(self_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, ff_compiler_Substitution.Substitution_substituteSignature(self_, definition_.signature_), ff_compiler_Substitution.Substitution_substituteLambda(self_, definition_.body_))
}
}
}

export async function Substitution_substituteSignature$(self_, signature_, $task) {
{
const _1 = signature_;
{
const _c = _1;
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, ff_core_List.List_map(signature_.constraints_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteConstraint(self_, _w1)
})), ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteParameter(self_, _w1)
})), ff_compiler_Substitution.Substitution_substituteType(self_, signature_.returnType_), ff_compiler_Substitution.Substitution_substituteType(self_, signature_.effect_))
return
}
}
}

export async function Substitution_substituteConstraint$(self_, constraint_, $task) {
{
const _1 = constraint_;
{
const _c = _1;
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, ff_core_List.List_map(constraint_.generics_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})))
return
}
}
}

export async function Substitution_substituteParameter$(self_, parameter_, $task) {
{
const _1 = parameter_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, parameter_.valueType_), ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteTerm(self_, _w1)
})))
return
}
}
}

export async function Substitution_substituteInstanceDefinition$(self_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, _c.constraints_, _c.traitName_, _c.typeArguments_, _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
})), _c.derived_)
return
}
}
}

export async function Substitution_substituteLambda$(self_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, ff_compiler_Substitution.Substitution_substituteType(self_, definition_.effect_), ff_core_List.List_map(definition_.cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, ff_core_List.List_map(case_.guards_, ((g_) => {
{
const _1 = g_;
{
const _c = _1;
return ff_compiler_Syntax.MatchGuard(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, g_.term_), _c.pattern_)
}
}
})), ff_compiler_Substitution.Substitution_substituteTerm(self_, case_.body_))
return
}
}
})))
return
}
}
}

export async function Substitution_substituteTerm$(self_, term_, $task) {
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
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), _c.field_)
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
return ff_compiler_Syntax.EList(_c.at_, ff_compiler_Substitution.Substitution_substituteType(self_, e_.elementType_), ff_core_List.List_map(e_.items_, ((_1) => {
{
const item_ = _1.first_;
const b_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Substitution.Substitution_substituteTerm(self_, item_), b_)
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
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.before_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.after_))
}
}
return
}
if(_1.ELet) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, e_.valueType_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.body_))
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
return ff_compiler_Syntax.ELambda(_c.at_, ff_compiler_Substitution.Substitution_substituteLambda(self_, e_.lambda_))
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
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, ff_core_List.List_map(e_.typeArguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})), ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteArgument(self_, _w1)
}))
})))
return
}
}
return
}
if(_1.EVariantIs) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariantIs(_c.at_, _c.name_, ff_core_List.List_map(e_.typeArguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})))
return
}
}
return
}
if(_1.ECopy) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECopy(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteField(self_, _w1)
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
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_), ff_compiler_Substitution.Substitution_substituteType(self_, e_.effect_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.function_))
}
}
return
}
if(_1.ECall) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
{
const _1 = call_;
{
const _c = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Substitution.Substitution_substituteTerm(self_, call_.function_), _c.tailCall_)
}
}
return
}
{
return e_.target_
}
}))(e_.target_), ff_compiler_Substitution.Substitution_substituteType(self_, e_.effect_), ff_core_List.List_map(e_.typeArguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, _w1)
})), ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteArgument(self_, _w1)
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
return ff_compiler_Substitution.Substitution_substituteField(self_, _w1)
})))
return
}
}
return
}
if(_1.EFunctions) {
const e_ = _1;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EFunctions(_c.at_, ff_core_List.List_map(e_.functions_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
})), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.body_))
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
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_))
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
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), _c.field_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_))
}
}
return
}
}
}

export async function Substitution_substituteArgument$(self_, argument_, $task) {
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, argument_.value_))
}
}
}

export async function Substitution_substituteField$(self_, field_, $task) {
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, field_.value_))
}
}
}

export async function Substitution_substituteType$(self_, type_, $task) {
const self_a = self_;
const type_a = type_;
if(type_a.TVariable) {
const at_ = type_a.at_;
const i_ = type_a.index_;
if(ff_compiler_Substitution.Substitution_has(self_, i_)) {
return ff_compiler_Substitution.Substitution_substituteType(self_, ff_compiler_Substitution.Substitution_get(self_, i_))
} else {
return ff_compiler_Syntax.TConstructor(at_, ff_compiler_Substitution.core_("Nothing"), [])
}
return
}
{
const t_ = type_a;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(_c.at_, _c.name_, ff_core_List.List_map(t_.generics_, ((g_) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, g_)
})))
return
}
}
return
}
}

export async function Substitution_get$(self_, index_, $task) {
{
const _1 = ff_core_Map.Map_grab(self_.substitution_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
if(_1.TVariable) {
const i_ = _1.index_;
if(ff_compiler_Substitution.Substitution_has(self_, i_)) {
const t_ = ff_compiler_Substitution.Substitution_get(self_, i_);
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, t_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int);
return t_
}
}
if(_1.TVariable) {
const at_ = _1.at_;
return ff_compiler_Syntax.TConstructor(at_, ff_compiler_Substitution.core_("Nothing"), [])
}
{
const t_ = _1;
return t_
}
}
}

export async function Substitution_has$(self_, index_, $task) {
return ff_core_Map.Map_contains(self_.substitution_, index_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int)
}

//# sourceMappingURL=Substitution.mjs.map