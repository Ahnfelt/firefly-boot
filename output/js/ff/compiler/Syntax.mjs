

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

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
export function PackageInfo(package_, dependencies_, includes_) {
return {package_, dependencies_, includes_};
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

// type DInclude
export function DInclude(at_, path_) {
return {at_, path_};
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

export const ff_core_Show_Show$ff_compiler_Syntax_Location = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Location" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.line_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.column_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Location" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.line_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.column_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_CompileError = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("CompileError" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.message_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("CompileError" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.message_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_ModuleWithPackageInfo = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("ModuleWithPackageInfo" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackageInfo).show_(z_.packageInfo_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Module.show_(z_.module_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("ModuleWithPackageInfo" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackageInfo).show_(z_.packageInfo_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Module.show_(z_.module_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_PackageInfo = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("PackageInfo" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DPackage.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DDependency).show_(z_.dependencies_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInclude).show_(z_.includes_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("PackageInfo" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DPackage.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DDependency).show_(z_.dependencies_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInclude).show_(z_.includes_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Module = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((((("Module" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DImport).show_(z_.imports_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DType).show_(z_.types_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DTrait).show_(z_.traits_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInstance).show_(z_.instances_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DExtend).show_(z_.extends_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DLet).show_(z_.lets_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((((("Module" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DImport).show_(z_.imports_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DType).show_(z_.types_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DTrait).show_(z_.traits_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInstance).show_(z_.instances_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DExtend).show_(z_.extends_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DLet).show_(z_.lets_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_PackagePair = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("PackagePair" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.group_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("PackagePair" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.group_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DPackage = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("DPackage" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("DPackage" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DDependency = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("DDependency" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Safety.show_(z_.safety_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("DDependency" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Safety.show_(z_.safety_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DInclude = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("DInclude" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.path_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("DInclude" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.path_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_TargetNames = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("TargetNames" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.node_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.browser_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("TargetNames" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.node_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.browser_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DImport = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("DImport" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.alias_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.directory_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("DImport" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.alias_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.directory_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DFunction = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("DFunction" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature.show_(z_.signature_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Target.show_(z_.body_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("DFunction" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature.show_(z_.signature_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Target.show_(z_.body_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DLet = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("DLet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.variableType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("DLet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.variableType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DExtend = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((("DExtend" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.type_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((("DExtend" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.type_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DType = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((("DType" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.commonFields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Variant).show_(z_.variants_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((("DType" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.commonFields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Variant).show_(z_.variants_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DTrait = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((("DTrait" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.generatorParameters_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature).show_(z_.methods_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodDefaults_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodGenerators_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((("DTrait" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.generatorParameters_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature).show_(z_.methods_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodDefaults_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodGenerators_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DInstance = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((("DInstance" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.generatorArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((("DInstance" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.generatorArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Term = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.EString) {
const z_ = x_a;
return ((((("EString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EChar) {
const z_ = x_a;
return ((((("EChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EInt) {
const z_ = x_a;
return ((((("EInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EFloat) {
const z_ = x_a;
return ((((("EFloat" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EVariable) {
const z_ = x_a;
return ((((("EVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
return
}
}
{
if(x_a.ELambda) {
const z_ = x_a;
return ((((("ELambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.lambda_)) + ")")
return
}
}
{
if(x_a.EFunctions) {
const z_ = x_a;
return ((((((("EFunctions" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
return
}
}
{
if(x_a.ELet) {
const z_ = x_a;
return ((((((((((((("ELet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
return
}
}
{
if(x_a.ESequential) {
const z_ = x_a;
return ((((((("ESequential" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.before_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.after_)) + ")")
return
}
}
{
if(x_a.EAssign) {
const z_ = x_a;
return ((((((((("EAssign" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EAssignField) {
const z_ = x_a;
return ((((((((((("EAssignField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EPipe) {
const z_ = x_a;
return ((((((((("EPipe" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ")")
return
}
}
{
if(x_a.ECall) {
const z_ = x_a;
return ((((((((((((("ECall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CallTarget.show_(z_.target_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.arguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
return
}
}
{
if(x_a.EList) {
const z_ = x_a;
return ((((((("EList" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.elementType_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term, ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool)).show_(z_.items_)) + ")")
return
}
}
{
if(x_a.ECopy) {
const z_ = x_a;
return ((((((((("ECopy" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.arguments_)) + ")")
return
}
}
{
if(x_a.EVariant) {
const z_ = x_a;
return ((((((((("EVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument)).show_(z_.arguments_)) + ")")
return
}
}
{
if(x_a.EVariantIs) {
const z_ = x_a;
return ((((((("EVariantIs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ")")
return
}
}
{
if(x_a.ERecord) {
const z_ = x_a;
return ((((("ERecord" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.fields_)) + ")")
return
}
}
{
if(x_a.EField) {
const z_ = x_a;
return ((((((((("EField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ")")
return
}
}
{
if(x_a.EWildcard) {
const z_ = x_a;
return ((((("EWildcard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.EString) {
const z_ = x_a;
return ((((("EString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EChar) {
const z_ = x_a;
return ((((("EChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EInt) {
const z_ = x_a;
return ((((("EInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EFloat) {
const z_ = x_a;
return ((((("EFloat" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EVariable) {
const z_ = x_a;
return ((((("EVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
return
}
}
{
if(x_a.ELambda) {
const z_ = x_a;
return ((((("ELambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.lambda_)) + ")")
return
}
}
{
if(x_a.EFunctions) {
const z_ = x_a;
return ((((((("EFunctions" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
return
}
}
{
if(x_a.ELet) {
const z_ = x_a;
return ((((((((((((("ELet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
return
}
}
{
if(x_a.ESequential) {
const z_ = x_a;
return ((((((("ESequential" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.before_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.after_)) + ")")
return
}
}
{
if(x_a.EAssign) {
const z_ = x_a;
return ((((((((("EAssign" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EAssignField) {
const z_ = x_a;
return ((((((((((("EAssignField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.EPipe) {
const z_ = x_a;
return ((((((((("EPipe" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ")")
return
}
}
{
if(x_a.ECall) {
const z_ = x_a;
return ((((((((((((("ECall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CallTarget.show_(z_.target_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.arguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
return
}
}
{
if(x_a.EList) {
const z_ = x_a;
return ((((((("EList" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.elementType_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term, ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool)).show_(z_.items_)) + ")")
return
}
}
{
if(x_a.ECopy) {
const z_ = x_a;
return ((((((((("ECopy" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.arguments_)) + ")")
return
}
}
{
if(x_a.EVariant) {
const z_ = x_a;
return ((((((((("EVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument)).show_(z_.arguments_)) + ")")
return
}
}
{
if(x_a.EVariantIs) {
const z_ = x_a;
return ((((((("EVariantIs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ")")
return
}
}
{
if(x_a.ERecord) {
const z_ = x_a;
return ((((("ERecord" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.fields_)) + ")")
return
}
}
{
if(x_a.EField) {
const z_ = x_a;
return ((((((((("EField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ")")
return
}
}
{
if(x_a.EWildcard) {
const z_ = x_a;
return ((((("EWildcard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_CallTarget = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.DynamicCall) {
const z_ = x_a;
return ((((("DynamicCall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ")")
return
}
}
{
if(x_a.StaticCall) {
const z_ = x_a;
return ((((((("StaticCall" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.instanceCall_)) + ")")
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.DynamicCall) {
const z_ = x_a;
return ((((("DynamicCall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ")")
return
}
}
{
if(x_a.StaticCall) {
const z_ = x_a;
return ((((((("StaticCall" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.instanceCall_)) + ")")
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_MatchCase = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("MatchCase" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchGuard).show_(z_.guards_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("MatchCase" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchGuard).show_(z_.guards_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_MatchPattern = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.PString) {
const z_ = x_a;
return ((((("PString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.PInt) {
const z_ = x_a;
return ((((("PInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.PChar) {
const z_ = x_a;
return ((((("PChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.PVariable) {
const z_ = x_a;
return ((((("PVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ")")
return
}
}
{
if(x_a.PVariant) {
const z_ = x_a;
return ((((((("PVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ")")
return
}
}
{
if(x_a.PVariantAs) {
const z_ = x_a;
return ((((((("PVariantAs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.variable_)) + ")")
return
}
}
{
if(x_a.PAlias) {
const z_ = x_a;
return ((((((("PAlias" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ")")
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.PString) {
const z_ = x_a;
return ((((("PString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.PInt) {
const z_ = x_a;
return ((((("PInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.PChar) {
const z_ = x_a;
return ((((("PChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
return
}
}
{
if(x_a.PVariable) {
const z_ = x_a;
return ((((("PVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ")")
return
}
}
{
if(x_a.PVariant) {
const z_ = x_a;
return ((((((("PVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ")")
return
}
}
{
if(x_a.PVariantAs) {
const z_ = x_a;
return ((((((("PVariantAs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.variable_)) + ")")
return
}
}
{
if(x_a.PAlias) {
const z_ = x_a;
return ((((((("PAlias" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ")")
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_MatchGuard = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("MatchGuard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.term_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("MatchGuard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.term_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Dictionary = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("Dictionary" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.moduleName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.typeName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("Dictionary" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.moduleName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.typeName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Signature = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((("Signature" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.parameters_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.returnType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((("Signature" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.parameters_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.returnType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Lambda = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Lambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchCase).show_(z_.cases_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Lambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchCase).show_(z_.cases_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Variant = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Variant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.fields_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Variant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.fields_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Parameter = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("Parameter" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term).show_(z_.default_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((("Parameter" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term).show_(z_.default_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Argument = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Argument" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Argument" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Field = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Field" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Field" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Constraint = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Constraint" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("Constraint" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Target = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.FireflyTarget) {
const z_ = x_a;
return ((("FireflyTarget" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.lambda_)) + ")")
return
}
}
{
if(x_a.ForeignTarget) {
const z_ = x_a;
return ((((("ForeignTarget" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.syncCode_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.asyncCode_)) + ")")
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.FireflyTarget) {
const z_ = x_a;
return ((("FireflyTarget" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.lambda_)) + ")")
return
}
}
{
if(x_a.ForeignTarget) {
const z_ = x_a;
return ((((("ForeignTarget" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.syncCode_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.asyncCode_)) + ")")
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Type = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.TConstructor) {
const z_ = x_a;
return ((((((("TConstructor" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
return
}
}
{
if(x_a.TVariable) {
const z_ = x_a;
return ((((("TVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.TConstructor) {
const z_ = x_a;
return ((((((("TConstructor" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
return
}
}
{
if(x_a.TVariable) {
const z_ = x_a;
return ((((("TVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Safety = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.Safe) {
const z_ = x_a;
return "Safe"
return
}
}
{
if(x_a.Unsafe) {
const z_ = x_a;
return "Unsafe"
return
}
}
{
if(x_a.Trusted) {
const z_ = x_a;
return "Trusted"
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.Safe) {
const z_ = x_a;
return "Safe"
return
}
}
{
if(x_a.Unsafe) {
const z_ = x_a;
return "Unsafe"
return
}
}
{
if(x_a.Trusted) {
const z_ = x_a;
return "Trusted"
return
}
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Version = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("Version" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.major_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.minor_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.patch_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((("Version" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.major_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.minor_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.patch_)) + ")")
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Location = {
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
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ != ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const lineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.line_, y_.line_);
if((lineOrdering_ != ff_core_Ordering.OrderingSame())) {
return lineOrdering_
} else {
const columnOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.column_, y_.column_);
if((columnOrdering_ != ff_core_Ordering.OrderingSame())) {
return columnOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ != ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const lineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.line_, y_.line_);
if((lineOrdering_ != ff_core_Ordering.OrderingSame())) {
return lineOrdering_
} else {
const columnOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.column_, y_.column_);
if((columnOrdering_ != ff_core_Ordering.OrderingSame())) {
return columnOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_CompileError = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const messageOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.message_, y_.message_);
if((messageOrdering_ != ff_core_Ordering.OrderingSame())) {
return messageOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const messageOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.message_, y_.message_);
if((messageOrdering_ != ff_core_Ordering.OrderingSame())) {
return messageOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_ModuleWithPackageInfo = {
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
const packageInfoOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo).compare_(x_.packageInfo_, y_.packageInfo_);
if((packageInfoOrdering_ != ff_core_Ordering.OrderingSame())) {
return packageInfoOrdering_
} else {
const moduleOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Module.compare_(x_.module_, y_.module_);
if((moduleOrdering_ != ff_core_Ordering.OrderingSame())) {
return moduleOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const packageInfoOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo).compare_(x_.packageInfo_, y_.packageInfo_);
if((packageInfoOrdering_ != ff_core_Ordering.OrderingSame())) {
return packageInfoOrdering_
} else {
const moduleOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Module.compare_(x_.module_, y_.module_);
if((moduleOrdering_ != ff_core_Ordering.OrderingSame())) {
return moduleOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo = {
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
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DPackage.compare_(x_.package_, y_.package_);
if((packageOrdering_ != ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const dependenciesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DDependency).compare_(x_.dependencies_, y_.dependencies_);
if((dependenciesOrdering_ != ff_core_Ordering.OrderingSame())) {
return dependenciesOrdering_
} else {
const includesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInclude).compare_(x_.includes_, y_.includes_);
if((includesOrdering_ != ff_core_Ordering.OrderingSame())) {
return includesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DPackage.compare_(x_.package_, y_.package_);
if((packageOrdering_ != ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const dependenciesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DDependency).compare_(x_.dependencies_, y_.dependencies_);
if((dependenciesOrdering_ != ff_core_Ordering.OrderingSame())) {
return dependenciesOrdering_
} else {
const includesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInclude).compare_(x_.includes_, y_.includes_);
if((includesOrdering_ != ff_core_Ordering.OrderingSame())) {
return includesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Module = {
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
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ != ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const importsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DImport).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ != ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
const typesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DType).compare_(x_.types_, y_.types_);
if((typesOrdering_ != ff_core_Ordering.OrderingSame())) {
return typesOrdering_
} else {
const traitsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DTrait).compare_(x_.traits_, y_.traits_);
if((traitsOrdering_ != ff_core_Ordering.OrderingSame())) {
return traitsOrdering_
} else {
const instancesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInstance).compare_(x_.instances_, y_.instances_);
if((instancesOrdering_ != ff_core_Ordering.OrderingSame())) {
return instancesOrdering_
} else {
const extendsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DExtend).compare_(x_.extends_, y_.extends_);
if((extendsOrdering_ != ff_core_Ordering.OrderingSame())) {
return extendsOrdering_
} else {
const letsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DLet).compare_(x_.lets_, y_.lets_);
if((letsOrdering_ != ff_core_Ordering.OrderingSame())) {
return letsOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
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
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ != ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const importsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DImport).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ != ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
const typesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DType).compare_(x_.types_, y_.types_);
if((typesOrdering_ != ff_core_Ordering.OrderingSame())) {
return typesOrdering_
} else {
const traitsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DTrait).compare_(x_.traits_, y_.traits_);
if((traitsOrdering_ != ff_core_Ordering.OrderingSame())) {
return traitsOrdering_
} else {
const instancesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInstance).compare_(x_.instances_, y_.instances_);
if((instancesOrdering_ != ff_core_Ordering.OrderingSame())) {
return instancesOrdering_
} else {
const extendsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DExtend).compare_(x_.extends_, y_.extends_);
if((extendsOrdering_ != ff_core_Ordering.OrderingSame())) {
return extendsOrdering_
} else {
const letsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DLet).compare_(x_.lets_, y_.lets_);
if((letsOrdering_ != ff_core_Ordering.OrderingSame())) {
return letsOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_DPackage = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ != ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ != ff_core_Ordering.OrderingSame())) {
return targetsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ != ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ != ff_core_Ordering.OrderingSame())) {
return targetsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DDependency = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ != ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const safetyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Safety.compare_(x_.safety_, y_.safety_);
if((safetyOrdering_ != ff_core_Ordering.OrderingSame())) {
return safetyOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ != ff_core_Ordering.OrderingSame())) {
return targetsOrdering_
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ != ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const safetyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Safety.compare_(x_.safety_, y_.safety_);
if((safetyOrdering_ != ff_core_Ordering.OrderingSame())) {
return safetyOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ != ff_core_Ordering.OrderingSame())) {
return targetsOrdering_
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_DInclude = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const pathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.path_, y_.path_);
if((pathOrdering_ != ff_core_Ordering.OrderingSame())) {
return pathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const pathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.path_, y_.path_);
if((pathOrdering_ != ff_core_Ordering.OrderingSame())) {
return pathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames = {
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
const nodeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.node_, y_.node_);
if((nodeOrdering_ != ff_core_Ordering.OrderingSame())) {
return nodeOrdering_
} else {
const browserOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.browser_, y_.browser_);
if((browserOrdering_ != ff_core_Ordering.OrderingSame())) {
return browserOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const nodeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.node_, y_.node_);
if((nodeOrdering_ != ff_core_Ordering.OrderingSame())) {
return nodeOrdering_
} else {
const browserOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.browser_, y_.browser_);
if((browserOrdering_ != ff_core_Ordering.OrderingSame())) {
return browserOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DImport = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const aliasOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.alias_, y_.alias_);
if((aliasOrdering_ != ff_core_Ordering.OrderingSame())) {
return aliasOrdering_
} else {
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.package_, y_.package_);
if((packageOrdering_ != ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const directoryOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.directory_, y_.directory_);
if((directoryOrdering_ != ff_core_Ordering.OrderingSame())) {
return directoryOrdering_
} else {
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ != ff_core_Ordering.OrderingSame())) {
return fileOrdering_
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const aliasOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.alias_, y_.alias_);
if((aliasOrdering_ != ff_core_Ordering.OrderingSame())) {
return aliasOrdering_
} else {
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.package_, y_.package_);
if((packageOrdering_ != ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const directoryOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.directory_, y_.directory_);
if((directoryOrdering_ != ff_core_Ordering.OrderingSame())) {
return directoryOrdering_
} else {
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ != ff_core_Ordering.OrderingSame())) {
return fileOrdering_
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_DFunction = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const signatureOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature.compare_(x_.signature_, y_.signature_);
if((signatureOrdering_ != ff_core_Ordering.OrderingSame())) {
return signatureOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Target.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const signatureOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature.compare_(x_.signature_, y_.signature_);
if((signatureOrdering_ != ff_core_Ordering.OrderingSame())) {
return signatureOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Target.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DLet = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const variableTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.variableType_, y_.variableType_);
if((variableTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const variableTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.variableType_, y_.variableType_);
if((variableTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DExtend = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const typeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.type_, y_.type_);
if((typeOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const typeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.type_, y_.type_);
if((typeOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_DType = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const commonFieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.commonFields_, y_.commonFields_);
if((commonFieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return commonFieldsOrdering_
} else {
const variantsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Variant).compare_(x_.variants_, y_.variants_);
if((variantsOrdering_ != ff_core_Ordering.OrderingSame())) {
return variantsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const commonFieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.commonFields_, y_.commonFields_);
if((commonFieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return commonFieldsOrdering_
} else {
const variantsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Variant).compare_(x_.variants_, y_.variants_);
if((variantsOrdering_ != ff_core_Ordering.OrderingSame())) {
return variantsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_DTrait = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const generatorParametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.generatorParameters_, y_.generatorParameters_);
if((generatorParametersOrdering_ != ff_core_Ordering.OrderingSame())) {
return generatorParametersOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
const methodDefaultsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodDefaults_, y_.methodDefaults_);
if((methodDefaultsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodDefaultsOrdering_
} else {
const methodGeneratorsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodGenerators_, y_.methodGenerators_);
if((methodGeneratorsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodGeneratorsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const generatorParametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.generatorParameters_, y_.generatorParameters_);
if((generatorParametersOrdering_ != ff_core_Ordering.OrderingSame())) {
return generatorParametersOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
const methodDefaultsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodDefaults_, y_.methodDefaults_);
if((methodDefaultsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodDefaultsOrdering_
} else {
const methodGeneratorsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodGenerators_, y_.methodGenerators_);
if((methodGeneratorsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodGeneratorsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_DInstance = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const generatorArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.generatorArguments_, y_.generatorArguments_);
if((generatorArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return generatorArgumentsOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const generatorArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.generatorArguments_, y_.generatorArguments_);
if((generatorArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return generatorArgumentsOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ != ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_Term = {
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
if(x_a.EString) {
const x_ = x_a;
if(y_a.EString) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EChar) {
const x_ = x_a;
if(y_a.EChar) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EInt) {
const x_ = x_a;
if(y_a.EInt) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EFloat) {
const x_ = x_a;
if(y_a.EFloat) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EVariable) {
const x_ = x_a;
if(y_a.EVariable) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.ELambda) {
const x_ = x_a;
if(y_a.ELambda) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const lambdaOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.lambda_, y_.lambda_);
if((lambdaOrdering_ != ff_core_Ordering.OrderingSame())) {
return lambdaOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EFunctions) {
const x_ = x_a;
if(y_a.EFunctions) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.ELet) {
const x_ = x_a;
if(y_a.ELet) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ != ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
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
{
if(x_a.ESequential) {
const x_ = x_a;
if(y_a.ESequential) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const beforeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.before_, y_.before_);
if((beforeOrdering_ != ff_core_Ordering.OrderingSame())) {
return beforeOrdering_
} else {
const afterOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.after_, y_.after_);
if((afterOrdering_ != ff_core_Ordering.OrderingSame())) {
return afterOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.EAssign) {
const x_ = x_a;
if(y_a.EAssign) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ != ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EAssignField) {
const x_ = x_a;
if(y_a.EAssignField) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ != ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ != ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
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
{
if(x_a.EPipe) {
const x_ = x_a;
if(y_a.EPipe) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.ECall) {
const x_ = x_a;
if(y_a.ECall) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const targetOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CallTarget.compare_(x_.target_, y_.target_);
if((targetOrdering_ != ff_core_Ordering.OrderingSame())) {
return targetOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ != ff_core_Ordering.OrderingSame())) {
return dictionariesOrdering_
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
{
if(x_a.EList) {
const x_ = x_a;
if(y_a.EList) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const elementTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.elementType_, y_.elementType_);
if((elementTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return elementTypeOrdering_
} else {
const itemsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool)).compare_(x_.items_, y_.items_);
if((itemsOrdering_ != ff_core_Ordering.OrderingSame())) {
return itemsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.ECopy) {
const x_ = x_a;
if(y_a.ECopy) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ != ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EVariant) {
const x_ = x_a;
if(y_a.EVariant) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument)).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EVariantIs) {
const x_ = x_a;
if(y_a.EVariantIs) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.ERecord) {
const x_ = x_a;
if(y_a.ERecord) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EField) {
const x_ = x_a;
if(y_a.EField) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ != ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EWildcard) {
const x_ = x_a;
if(y_a.EWildcard) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ != ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.EString) {
return 0
return
}
}
{
if(z_a.EChar) {
return 1
return
}
}
{
if(z_a.EInt) {
return 2
return
}
}
{
if(z_a.EFloat) {
return 3
return
}
}
{
if(z_a.EVariable) {
return 4
return
}
}
{
if(z_a.ELambda) {
return 5
return
}
}
{
if(z_a.EFunctions) {
return 6
return
}
}
{
if(z_a.ELet) {
return 7
return
}
}
{
if(z_a.ESequential) {
return 8
return
}
}
{
if(z_a.EAssign) {
return 9
return
}
}
{
if(z_a.EAssignField) {
return 10
return
}
}
{
if(z_a.EPipe) {
return 11
return
}
}
{
if(z_a.ECall) {
return 12
return
}
}
{
if(z_a.EList) {
return 13
return
}
}
{
if(z_a.ECopy) {
return 14
return
}
}
{
if(z_a.EVariant) {
return 15
return
}
}
{
if(z_a.EVariantIs) {
return 16
return
}
}
{
if(z_a.ERecord) {
return 17
return
}
}
{
if(z_a.EField) {
return 18
return
}
}
{
if(z_a.EWildcard) {
return 19
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
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
if(x_a.EString) {
const x_ = x_a;
if(y_a.EString) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EChar) {
const x_ = x_a;
if(y_a.EChar) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EInt) {
const x_ = x_a;
if(y_a.EInt) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EFloat) {
const x_ = x_a;
if(y_a.EFloat) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EVariable) {
const x_ = x_a;
if(y_a.EVariable) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.ELambda) {
const x_ = x_a;
if(y_a.ELambda) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const lambdaOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.lambda_, y_.lambda_);
if((lambdaOrdering_ != ff_core_Ordering.OrderingSame())) {
return lambdaOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EFunctions) {
const x_ = x_a;
if(y_a.EFunctions) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.ELet) {
const x_ = x_a;
if(y_a.ELet) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ != ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
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
{
if(x_a.ESequential) {
const x_ = x_a;
if(y_a.ESequential) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const beforeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.before_, y_.before_);
if((beforeOrdering_ != ff_core_Ordering.OrderingSame())) {
return beforeOrdering_
} else {
const afterOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.after_, y_.after_);
if((afterOrdering_ != ff_core_Ordering.OrderingSame())) {
return afterOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.EAssign) {
const x_ = x_a;
if(y_a.EAssign) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ != ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EAssignField) {
const x_ = x_a;
if(y_a.EAssignField) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ != ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ != ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
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
{
if(x_a.EPipe) {
const x_ = x_a;
if(y_a.EPipe) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.ECall) {
const x_ = x_a;
if(y_a.ECall) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const targetOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CallTarget.compare_(x_.target_, y_.target_);
if((targetOrdering_ != ff_core_Ordering.OrderingSame())) {
return targetOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ != ff_core_Ordering.OrderingSame())) {
return dictionariesOrdering_
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
{
if(x_a.EList) {
const x_ = x_a;
if(y_a.EList) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const elementTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.elementType_, y_.elementType_);
if((elementTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return elementTypeOrdering_
} else {
const itemsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool)).compare_(x_.items_, y_.items_);
if((itemsOrdering_ != ff_core_Ordering.OrderingSame())) {
return itemsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.ECopy) {
const x_ = x_a;
if(y_a.ECopy) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ != ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EVariant) {
const x_ = x_a;
if(y_a.EVariant) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument)).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EVariantIs) {
const x_ = x_a;
if(y_a.EVariantIs) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.ERecord) {
const x_ = x_a;
if(y_a.ERecord) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.EField) {
const x_ = x_a;
if(y_a.EField) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ != ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
{
if(x_a.EWildcard) {
const x_ = x_a;
if(y_a.EWildcard) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ != ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.EString) {
return 0
return
}
}
{
if(z_a.EChar) {
return 1
return
}
}
{
if(z_a.EInt) {
return 2
return
}
}
{
if(z_a.EFloat) {
return 3
return
}
}
{
if(z_a.EVariable) {
return 4
return
}
}
{
if(z_a.ELambda) {
return 5
return
}
}
{
if(z_a.EFunctions) {
return 6
return
}
}
{
if(z_a.ELet) {
return 7
return
}
}
{
if(z_a.ESequential) {
return 8
return
}
}
{
if(z_a.EAssign) {
return 9
return
}
}
{
if(z_a.EAssignField) {
return 10
return
}
}
{
if(z_a.EPipe) {
return 11
return
}
}
{
if(z_a.ECall) {
return 12
return
}
}
{
if(z_a.EList) {
return 13
return
}
}
{
if(z_a.ECopy) {
return 14
return
}
}
{
if(z_a.EVariant) {
return 15
return
}
}
{
if(z_a.EVariantIs) {
return 16
return
}
}
{
if(z_a.ERecord) {
return 17
return
}
}
{
if(z_a.EField) {
return 18
return
}
}
{
if(z_a.EWildcard) {
return 19
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_CallTarget = {
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
if(x_a.DynamicCall) {
const x_ = x_a;
if(y_a.DynamicCall) {
const y_ = y_a;
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ != ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.StaticCall) {
const x_ = x_a;
if(y_a.StaticCall) {
const y_ = y_a;
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ != ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
const instanceCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.instanceCall_, y_.instanceCall_);
if((instanceCallOrdering_ != ff_core_Ordering.OrderingSame())) {
return instanceCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.DynamicCall) {
return 0
return
}
}
{
if(z_a.StaticCall) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
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
if(x_a.DynamicCall) {
const x_ = x_a;
if(y_a.DynamicCall) {
const y_ = y_a;
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ != ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ != ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.StaticCall) {
const x_ = x_a;
if(y_a.StaticCall) {
const y_ = y_a;
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ != ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
const instanceCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.instanceCall_, y_.instanceCall_);
if((instanceCallOrdering_ != ff_core_Ordering.OrderingSame())) {
return instanceCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.DynamicCall) {
return 0
return
}
}
{
if(z_a.StaticCall) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_MatchCase = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
const guardsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchGuard).compare_(x_.guards_, y_.guards_);
if((guardsOrdering_ != ff_core_Ordering.OrderingSame())) {
return guardsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
const guardsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchGuard).compare_(x_.guards_, y_.guards_);
if((guardsOrdering_ != ff_core_Ordering.OrderingSame())) {
return guardsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ != ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern = {
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
if(x_a.PString) {
const x_ = x_a;
if(y_a.PString) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PInt) {
const x_ = x_a;
if(y_a.PInt) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PChar) {
const x_ = x_a;
if(y_a.PChar) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PVariable) {
const x_ = x_a;
if(y_a.PVariable) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PVariant) {
const x_ = x_a;
if(y_a.PVariant) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.PVariantAs) {
const x_ = x_a;
if(y_a.PVariantAs) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const variableOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.variable_, y_.variable_);
if((variableOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.PAlias) {
const x_ = x_a;
if(y_a.PAlias) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.PString) {
return 0
return
}
}
{
if(z_a.PInt) {
return 1
return
}
}
{
if(z_a.PChar) {
return 2
return
}
}
{
if(z_a.PVariable) {
return 3
return
}
}
{
if(z_a.PVariant) {
return 4
return
}
}
{
if(z_a.PVariantAs) {
return 5
return
}
}
{
if(z_a.PAlias) {
return 6
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
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
if(x_a.PString) {
const x_ = x_a;
if(y_a.PString) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PInt) {
const x_ = x_a;
if(y_a.PInt) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PChar) {
const x_ = x_a;
if(y_a.PChar) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PVariable) {
const x_ = x_a;
if(y_a.PVariable) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
if(x_a.PVariant) {
const x_ = x_a;
if(y_a.PVariant) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.PVariantAs) {
const x_ = x_a;
if(y_a.PVariantAs) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const variableOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.variable_, y_.variable_);
if((variableOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.PAlias) {
const x_ = x_a;
if(y_a.PAlias) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ != ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.PString) {
return 0
return
}
}
{
if(z_a.PInt) {
return 1
return
}
}
{
if(z_a.PChar) {
return 2
return
}
}
{
if(z_a.PVariable) {
return 3
return
}
}
{
if(z_a.PVariant) {
return 4
return
}
}
{
if(z_a.PVariantAs) {
return 5
return
}
}
{
if(z_a.PAlias) {
return 6
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_MatchGuard = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const termOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.term_, y_.term_);
if((termOrdering_ != ff_core_Ordering.OrderingSame())) {
return termOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const termOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.term_, y_.term_);
if((termOrdering_ != ff_core_Ordering.OrderingSame())) {
return termOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ != ff_core_Ordering.OrderingSame())) {
return patternOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary = {
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
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const moduleNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.moduleName_, y_.moduleName_);
if((moduleNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return moduleNameOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_);
if((typeNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeNameOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ != ff_core_Ordering.OrderingSame())) {
return dictionariesOrdering_
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
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ != ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const moduleNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.moduleName_, y_.moduleName_);
if((moduleNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return moduleNameOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_);
if((typeNameOrdering_ != ff_core_Ordering.OrderingSame())) {
return typeNameOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ != ff_core_Ordering.OrderingSame())) {
return dictionariesOrdering_
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_Signature = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const parametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.parameters_, y_.parameters_);
if((parametersOrdering_ != ff_core_Ordering.OrderingSame())) {
return parametersOrdering_
} else {
const returnTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.returnType_, y_.returnType_);
if((returnTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return returnTypeOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ != ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const parametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.parameters_, y_.parameters_);
if((parametersOrdering_ != ff_core_Ordering.OrderingSame())) {
return parametersOrdering_
} else {
const returnTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.returnType_, y_.returnType_);
if((returnTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return returnTypeOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_Lambda = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const casesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchCase).compare_(x_.cases_, y_.cases_);
if((casesOrdering_ != ff_core_Ordering.OrderingSame())) {
return casesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ != ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const casesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchCase).compare_(x_.cases_, y_.cases_);
if((casesOrdering_ != ff_core_Ordering.OrderingSame())) {
return casesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Variant = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ != ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Parameter = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ != ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const defaultOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term).compare_(x_.default_, y_.default_);
if((defaultOrdering_ != ff_core_Ordering.OrderingSame())) {
return defaultOrdering_
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ != ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const defaultOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term).compare_(x_.default_, y_.default_);
if((defaultOrdering_ != ff_core_Ordering.OrderingSame())) {
return defaultOrdering_
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

export const ff_core_Ordering_Order$ff_compiler_Syntax_Argument = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Field = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ != ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Constraint = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Target = {
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
if(x_a.FireflyTarget) {
const x_ = x_a;
if(y_a.FireflyTarget) {
const y_ = y_a;
const lambdaOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.lambda_, y_.lambda_);
if((lambdaOrdering_ != ff_core_Ordering.OrderingSame())) {
return lambdaOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
if(x_a.ForeignTarget) {
const x_ = x_a;
if(y_a.ForeignTarget) {
const y_ = y_a;
const syncCodeOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.syncCode_, y_.syncCode_);
if((syncCodeOrdering_ != ff_core_Ordering.OrderingSame())) {
return syncCodeOrdering_
} else {
const asyncCodeOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.asyncCode_, y_.asyncCode_);
if((asyncCodeOrdering_ != ff_core_Ordering.OrderingSame())) {
return asyncCodeOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.FireflyTarget) {
return 0
return
}
}
{
if(z_a.ForeignTarget) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
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
if(x_a.FireflyTarget) {
const x_ = x_a;
if(y_a.FireflyTarget) {
const y_ = y_a;
const lambdaOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.lambda_, y_.lambda_);
if((lambdaOrdering_ != ff_core_Ordering.OrderingSame())) {
return lambdaOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
}
{
if(x_a.ForeignTarget) {
const x_ = x_a;
if(y_a.ForeignTarget) {
const y_ = y_a;
const syncCodeOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.syncCode_, y_.syncCode_);
if((syncCodeOrdering_ != ff_core_Ordering.OrderingSame())) {
return syncCodeOrdering_
} else {
const asyncCodeOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.asyncCode_, y_.asyncCode_);
if((asyncCodeOrdering_ != ff_core_Ordering.OrderingSame())) {
return asyncCodeOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.FireflyTarget) {
return 0
return
}
}
{
if(z_a.ForeignTarget) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Type = {
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
if(x_a.TConstructor) {
const x_ = x_a;
if(y_a.TConstructor) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.TVariable) {
const x_ = x_a;
if(y_a.TVariable) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ != ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.TConstructor) {
return 0
return
}
}
{
if(z_a.TVariable) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
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
if(x_a.TConstructor) {
const x_ = x_a;
if(y_a.TConstructor) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ != ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ != ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
}
{
if(x_a.TVariable) {
const x_ = x_a;
if(y_a.TVariable) {
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ != ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.TConstructor) {
return 0
return
}
}
{
if(z_a.TVariable) {
return 1
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Safety = {
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
if(x_a.Safe) {
const x_ = x_a;
if(y_a.Safe) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.Unsafe) {
const x_ = x_a;
if(y_a.Unsafe) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.Trusted) {
const x_ = x_a;
if(y_a.Trusted) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.Safe) {
return 0
return
}
}
{
if(z_a.Unsafe) {
return 1
return
}
}
{
if(z_a.Trusted) {
return 2
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
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
if(x_a.Safe) {
const x_ = x_a;
if(y_a.Safe) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.Unsafe) {
const x_ = x_a;
if(y_a.Unsafe) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.Trusted) {
const x_ = x_a;
if(y_a.Trusted) {
const y_ = y_a;
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
function number_(z_) {
{
const z_a = z_;
{
if(z_a.Safe) {
return 0
return
}
}
{
if(z_a.Unsafe) {
return 1
return
}
}
{
if(z_a.Trusted) {
return 2
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Version = {
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const majorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.major_, y_.major_);
if((majorOrdering_ != ff_core_Ordering.OrderingSame())) {
return majorOrdering_
} else {
const minorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.minor_, y_.minor_);
if((minorOrdering_ != ff_core_Ordering.OrderingSame())) {
return minorOrdering_
} else {
const patchOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.patch_, y_.patch_);
if((patchOrdering_ != ff_core_Ordering.OrderingSame())) {
return patchOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
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
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ != ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const majorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.major_, y_.major_);
if((majorOrdering_ != ff_core_Ordering.OrderingSame())) {
return majorOrdering_
} else {
const minorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.minor_, y_.minor_);
if((minorOrdering_ != ff_core_Ordering.OrderingSame())) {
return minorOrdering_
} else {
const patchOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.patch_, y_.patch_);
if((patchOrdering_ != ff_core_Ordering.OrderingSame())) {
return patchOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
}
}
};


