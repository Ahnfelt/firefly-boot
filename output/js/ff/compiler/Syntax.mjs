

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

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

// type Location
export function Location(file_, line_, column_) {
return {file_, line_, column_};
}

// type CompileError
export function CompileError(at_, message_) {
return {at_, message_};
}

// type ModuleWithPackageInfo
export function ModuleWithPackageInfo(packageInfo_, module_) {
return {packageInfo_, module_};
}

// type PackageInfo
export function PackageInfo(package_, dependencies_) {
return {package_, dependencies_};
}

// type Module
export function Module(file_, packagePair_, imports_, types_, traits_, instances_, extends_, lets_, functions_) {
return {file_, packagePair_, imports_, types_, traits_, instances_, extends_, lets_, functions_};
}

// type PackagePair
export function PackagePair(group_, name_) {
return {group_, name_};
}

// type DPackage
export function DPackage(at_, packagePair_, version_, targets_) {
return {at_, packagePair_, version_, targets_};
}

// type DDependency
export function DDependency(at_, packagePair_, version_, safety_, targets_) {
return {at_, packagePair_, version_, safety_, targets_};
}

// type TargetNames
export function TargetNames(node_, browser_) {
return {node_, browser_};
}

// type DImport
export function DImport(at_, alias_, package_, directory_, file_) {
return {at_, alias_, package_, directory_, file_};
}

// type DFunction
export function DFunction(at_, signature_, body_) {
return {at_, signature_, body_};
}

// type DLet
export function DLet(at_, name_, variableType_, value_) {
return {at_, name_, variableType_, value_};
}

// type DExtend
export function DExtend(at_, name_, generics_, constraints_, type_, methods_) {
return {at_, name_, generics_, constraints_, type_, methods_};
}

// type DType
export function DType(at_, newtype_, name_, generics_, constraints_, commonFields_, variants_) {
return {at_, newtype_, name_, generics_, constraints_, commonFields_, variants_};
}

// type DTrait
export function DTrait(at_, name_, generics_, constraints_, generatorParameters_, methods_, methodDefaults_, methodGenerators_) {
return {at_, name_, generics_, constraints_, generatorParameters_, methods_, methodDefaults_, methodGenerators_};
}

// type DInstance
export function DInstance(at_, generics_, constraints_, traitName_, typeArguments_, generatorArguments_, methods_) {
return {at_, generics_, constraints_, traitName_, typeArguments_, generatorArguments_, methods_};
}

// type Term
export function EString(at_, value_) {
return {EString: true, at_, value_};
}
export function EChar(at_, value_) {
return {EChar: true, at_, value_};
}
export function EInt(at_, value_) {
return {EInt: true, at_, value_};
}
export function EFloat(at_, value_) {
return {EFloat: true, at_, value_};
}
export function EVariable(at_, name_) {
return {EVariable: true, at_, name_};
}
export function ELambda(at_, lambda_) {
return {ELambda: true, at_, lambda_};
}
export function EFunctions(at_, functions_, body_) {
return {EFunctions: true, at_, functions_, body_};
}
export function ELet(at_, mutable_, name_, valueType_, value_, body_) {
return {ELet: true, at_, mutable_, name_, valueType_, value_, body_};
}
export function ESequential(at_, before_, after_) {
return {ESequential: true, at_, before_, after_};
}
export function EAssign(at_, operator_, variable_, value_) {
return {EAssign: true, at_, operator_, variable_, value_};
}
export function EAssignField(at_, operator_, record_, field_, value_) {
return {EAssignField: true, at_, operator_, record_, field_, value_};
}
export function EPipe(at_, value_, effect_, function_) {
return {EPipe: true, at_, value_, effect_, function_};
}
export function ECall(at_, target_, effect_, typeArguments_, arguments_, dictionaries_) {
return {ECall: true, at_, target_, effect_, typeArguments_, arguments_, dictionaries_};
}
export function EList(at_, elementType_, items_) {
return {EList: true, at_, elementType_, items_};
}
export function ECopy(at_, name_, record_, arguments_) {
return {ECopy: true, at_, name_, record_, arguments_};
}
export function EVariant(at_, name_, typeArguments_, arguments_) {
return {EVariant: true, at_, name_, typeArguments_, arguments_};
}
export function EVariantIs(at_, name_, typeArguments_) {
return {EVariantIs: true, at_, name_, typeArguments_};
}
export function ERecord(at_, fields_) {
return {ERecord: true, at_, fields_};
}
export function EField(at_, newtype_, record_, field_) {
return {EField: true, at_, newtype_, record_, field_};
}
export function EWildcard(at_, index_) {
return {EWildcard: true, at_, index_};
}

// type CallTarget
export function DynamicCall(function_, tailCall_) {
return {DynamicCall: true, function_, tailCall_};
}
export function StaticCall(name_, tailCall_, instanceCall_) {
return {StaticCall: true, name_, tailCall_, instanceCall_};
}

// type MatchCase
export function MatchCase(at_, patterns_, guards_, body_) {
return {at_, patterns_, guards_, body_};
}

// type MatchPattern
export function PString(at_, value_) {
return {PString: true, at_, value_};
}
export function PInt(at_, value_) {
return {PInt: true, at_, value_};
}
export function PChar(at_, value_) {
return {PChar: true, at_, value_};
}
export function PVariable(at_, name_) {
return {PVariable: true, at_, name_};
}
export function PVariant(at_, name_, patterns_) {
return {PVariant: true, at_, name_, patterns_};
}
export function PVariantAs(at_, name_, variable_) {
return {PVariantAs: true, at_, name_, variable_};
}
export function PAlias(at_, pattern_, variable_) {
return {PAlias: true, at_, pattern_, variable_};
}

// type MatchGuard
export function MatchGuard(at_, term_, pattern_) {
return {at_, term_, pattern_};
}

// type Dictionary
export function Dictionary(packagePair_, moduleName_, traitName_, typeName_, dictionaries_) {
return {packagePair_, moduleName_, traitName_, typeName_, dictionaries_};
}

// type Signature
export function Signature(at_, name_, generics_, constraints_, parameters_, returnType_, effect_) {
return {at_, name_, generics_, constraints_, parameters_, returnType_, effect_};
}

// type Lambda
export function Lambda(at_, effect_, cases_) {
return {at_, effect_, cases_};
}

// type Variant
export function Variant(at_, name_, fields_) {
return {at_, name_, fields_};
}

// type Parameter
export function Parameter(at_, mutable_, name_, valueType_, default_) {
return {at_, mutable_, name_, valueType_, default_};
}

// type Argument
export function Argument(at_, name_, value_) {
return {at_, name_, value_};
}

// type Field
export function Field(at_, name_, value_) {
return {at_, name_, value_};
}

// type Constraint
export function Constraint(at_, name_, generics_) {
return {at_, name_, generics_};
}

// type Target
export function FireflyTarget(lambda_) {
return {FireflyTarget: true, lambda_};
}
export function ForeignTarget(syncCode_, asyncCode_) {
return {ForeignTarget: true, syncCode_, asyncCode_};
}

// type Type
export function TConstructor(at_, name_, generics_) {
return {TConstructor: true, at_, name_, generics_};
}
export function TVariable(at_, index_) {
return {TVariable: true, at_, index_};
}

// type Safety
const Safe$ = {Safe: true};
export function Safe() {
return Safe$;
}
const Unsafe$ = {Unsafe: true};
export function Unsafe() {
return Unsafe$;
}
const Trusted$ = {Trusted: true};
export function Trusted() {
return Trusted$;
}

// type Version
export function Version(at_, major_, minor_, patch_) {
return {at_, major_, minor_, patch_};
}







export function Location_show(self_) {
return (((((("in " + self_.file_) + " ") + "at line ") + self_.line_) + ", column ") + self_.column_)
}

export async function Location_show$(self_, $c) {
return (((((("in " + self_.file_) + " ") + "at line ") + self_.line_) + ", column ") + self_.column_)
}

export function PackagePair_groupName(self_, delimiter_ = ":") {
return ((self_.group_ + delimiter_) + self_.name_)
}

export async function PackagePair_groupName$(self_, delimiter_ = ":", $c) {
return ((self_.group_ + delimiter_) + self_.name_)
}

export function Type_show(self_) {
{
const _1 = self_;
{
if(_1.TConstructor) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_;
if(ff_core_List.List_isEmpty(generics_)) {
return name_
} else {
return (((name_ + "[") + ff_core_List.List_join(ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Syntax.Type_show(_w1)
})), ", ")) + "]")
}
return
}
}
{
if(_1.TVariable) {
const at_ = _1.at_;
const index_ = _1.index_;
return ("$" + index_)
return
}
}
}
}

export async function Type_show$(self_, $c) {
{
const _1 = self_;
{
if(_1.TConstructor) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_;
if(ff_core_List.List_isEmpty(generics_)) {
return name_
} else {
return (((name_ + "[") + ff_core_List.List_join(ff_core_List.List_map(generics_, ((_w1) => {
return ff_compiler_Syntax.Type_show(_w1)
})), ", ")) + "]")
}
return
}
}
{
if(_1.TVariable) {
const at_ = _1.at_;
const index_ = _1.index_;
return ("$" + index_)
return
}
}
}
}

export function Target_mapFirefly(self_, body_) {
{
const _1 = self_;
{
if(_1.FireflyTarget) {
const lambda_ = _1.lambda_;
return ff_compiler_Syntax.FireflyTarget(body_(lambda_))
return
}
}
{
if(_1.ForeignTarget) {
return self_
return
}
}
}
}

export async function Target_mapFirefly$(self_, body_, $c) {
{
const _1 = self_;
{
if(_1.FireflyTarget) {
const lambda_ = _1.lambda_;
return ff_compiler_Syntax.FireflyTarget((await body_(lambda_, $c)))
return
}
}
{
if(_1.ForeignTarget) {
return self_
return
}
}
}
}

export const ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair = {
compare_(x_, y_) {
{
const _1 = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.group_, y_.group_);
{
if(_1.OrderingSame) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
},
async compare_$(x_, y_, $c) {
{
const _1 = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.group_, y_.group_);
{
if(_1.OrderingSame) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
}
};


