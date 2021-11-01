import * as ff_compiler_Substitution from "../../ff/compiler/Substitution.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

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

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Substitution
export function Substitution(substitution_) {
return {substitution_};
}



export function core_(name_) {
return ((("ff:core/" + name_) + ".") + name_)
}

export function Substitution_substituteModule(self_, module_) {
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteLetDefinition(self_, _w1)
}))
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
}))
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteExtendDefinition(self_, _w1)
}))
{
const _1 = module_
{
const _c = _1
return ff_compiler_Syntax.Module(_c.packagePair_, _c.file_, _c.dependencies_, _c.imports_, _c.types_, _c.traits_, _c.instances_, extends_, lets_, functions_)
return
}
}
}

export function Substitution_substituteLetDefinition(self_, definition_) {
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, definition_.variableType_), ff_compiler_Substitution.Substitution_substituteTerm(self_, definition_.value_), _c.targets_)
return
}
}
}

export function Substitution_substituteExtendDefinition(self_, definition_) {
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, _w1)
})))
return
}
}
}

export function Substitution_substituteFunctionDefinition(self_, definition_) {
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Substitution.Substitution_substituteLambda(self_, definition_.body_), _c.targets_)
return
}
}
}

export function Substitution_substituteLambda(self_, definition_) {
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.Lambda(_c.at_, ff_core_List.List_map(definition_.cases_, ((case_) => {
{
const _1 = case_
{
const _c = _1
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, ff_core_Option.Option_map(case_.condition_, ((term_) => {
return ff_compiler_Substitution.Substitution_substituteTerm(self_, term_)
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
const _1 = term_
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
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EVariable(_c.at_, _c.name_, ff_core_List.List_map(e_.generics_, ((type_) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, type_)
})), _c.instances_)
return
}
}
return
}
}
{
if(_1.EField) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), _c.field_)
return
}
}
return
}
}
{
if(_1.EWildcard) {
const e_ = _1
return term_
return
}
}
{
if(_1.EList) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EList(_c.at_, ff_compiler_Substitution.Substitution_substituteType(self_, e_.elementType_), ff_core_List.List_map(e_.items_, ((_1) => {
{
const item_ = _1.first_
const b_ = _1.second_
return ff_core_Pair.Pair(ff_compiler_Substitution.Substitution_substituteTerm(self_, item_), b_)
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
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ESequential(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.before_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.after_))
return
}
}
return
}
}
{
if(_1.ELet) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, ff_compiler_Substitution.Substitution_substituteType(self_, e_.valueType_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.body_))
return
}
}
return
}
}
{
if(_1.ELambda) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ELambda(_c.at_, ff_compiler_Substitution.Substitution_substituteLambda(self_, e_.lambda_))
return
}
}
return
}
}
{
if(_1.EVariant) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, ff_core_List.List_map(e_.typeArguments_, ((type_) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, type_)
})), ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((argument_) => {
return ff_compiler_Substitution.Substitution_substituteArgument(self_, argument_)
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
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EVariantIs(_c.at_, _c.name_, ff_core_List.List_map(e_.typeArguments_, ((type_) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, type_)
})))
return
}
}
return
}
}
{
if(_1.ECopy) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECopy(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), ff_core_List.List_map(e_.arguments_, ((field_) => {
return ff_compiler_Substitution.Substitution_substituteField(self_, field_)
})))
return
}
}
return
}
}
{
if(_1.EPipe) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EPipe(_c.at_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.function_))
return
}
}
return
}
}
{
if(_1.ECall) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ECall(_c.at_, _c.tailCall_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.function_), ff_core_List.List_map(e_.typeArguments_, ((type_) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, type_)
})), ff_core_List.List_map(e_.arguments_, ((argument_) => {
return ff_compiler_Substitution.Substitution_substituteArgument(self_, argument_)
})))
return
}
}
return
}
}
{
if(_1.ERecord) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ERecord(_c.at_, ff_core_List.List_map(e_.fields_, ((field_) => {
return ff_compiler_Substitution.Substitution_substituteField(self_, field_)
})))
return
}
}
return
}
}
{
if(_1.EFunctions) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EFunctions(_c.at_, ff_core_List.List_map(e_.functions_, ((definition_) => {
return ff_compiler_Substitution.Substitution_substituteFunctionDefinition(self_, definition_)
})), ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.body_))
return
}
}
return
}
}
{
if(_1.EAssign) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_))
return
}
}
return
}
}
{
if(_1.EAssignField) {
const e_ = _1
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.record_), _c.field_, ff_compiler_Substitution.Substitution_substituteTerm(self_, e_.value_))
return
}
}
return
}
}
}
}

export function Substitution_substituteArgument(self_, argument_) {
{
const _1 = argument_
{
const _c = _1
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, argument_.value_))
return
}
}
}

export function Substitution_substituteField(self_, field_) {
{
const _1 = field_
{
const _c = _1
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Substitution.Substitution_substituteTerm(self_, field_.value_))
return
}
}
}

export function Substitution_substituteType(self_, type_) {
{
const self_a = self_
const type_a = type_
{
const self_ = self_a
if(type_a.TVariable) {
const at_ = type_a.at_
const i_ = type_a.index_
if(ff_compiler_Substitution.Substitution_has(self_, i_)) {
return ff_compiler_Substitution.Substitution_substituteType(self_, ff_compiler_Substitution.Substitution_get(self_, i_))
} else {
return ff_compiler_Syntax.TConstructor(at_, ff_compiler_Substitution.core_("Nothing"), ff_core_List.Empty())
}
return
}
}
{
const self_ = self_a
if(type_a.TConstructor) {
const t_ = type_a
{
const _1 = t_
{
const _c = _1
return ff_compiler_Syntax.TConstructor(_c.at_, _c.name_, ff_core_List.List_map(t_.generics_, ((t_) => {
return ff_compiler_Substitution.Substitution_substituteType(self_, t_)
})))
return
}
}
return
}
}
}
}

export function Substitution_get(self_, index_) {
{
const _1 = ff_core_Map.Map_expect(self_.substitution_, index_)
{
if(_1.TVariable) {
const i_ = _1.index_
if(ff_compiler_Substitution.Substitution_has(self_, i_)) {
const t_ = ff_compiler_Substitution.Substitution_get(self_, i_)
self_.substitution_ = ff_core_Map.Map_add(self_.substitution_, index_, t_)
return t_
return
}
}
}
{
if(_1.TVariable) {
const at_ = _1.at_
return ff_compiler_Syntax.TConstructor(at_, ff_compiler_Substitution.core_("Nothing"), ff_core_List.Empty())
return
}
}
{
const t_ = _1
return t_
return
}
}
}

export function Substitution_has(self_, index_) {
return ff_core_Map.Map_contains(self_.substitution_, index_)
}


