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

// type Location
export function Location(file_, line_, column_) {
return {file_, line_, column_};
}

// type CompileError
export function CompileError(at_, message_) {
return {at_, message_};
}

// type Module
export function Module(packagePair_, file_, dependencies_, imports_, types_, traits_, instances_, extends_, lets_, functions_) {
return {packagePair_, file_, dependencies_, imports_, types_, traits_, instances_, extends_, lets_, functions_};
}

// type DDependency
export function DDependency(at_, package_, safety_, goodVersions_, badVersions_) {
return {at_, package_, safety_, goodVersions_, badVersions_};
}

// type DImport
export function DImport(at_, alias_, package_, directory_, file_) {
return {at_, alias_, package_, directory_, file_};
}

// type DFunction
export function DFunction(at_, signature_, body_, targets_) {
return {at_, signature_, body_, targets_};
}

// type DLet
export function DLet(at_, name_, variableType_, value_, targets_) {
return {at_, name_, variableType_, value_, targets_};
}

// type DExtend
export function DExtend(at_, name_, generics_, constraints_, type_, methods_) {
return {at_, name_, generics_, constraints_, type_, methods_};
}

// type DType
export function DType(at_, newtype_, name_, generics_, constraints_, commonFields_, variants_, targets_) {
return {at_, newtype_, name_, generics_, constraints_, commonFields_, variants_, targets_};
}

// type DTrait
export function DTrait(at_, name_, generics_, constraints_, generatorParameters_, methods_, methodDefaults_, methodGenerators_) {
return {at_, name_, generics_, constraints_, generatorParameters_, methods_, methodDefaults_, methodGenerators_};
}

// type DInstance
export function DInstance(at_, generics_, constraints_, traitType_, generatorArguments_, methods_) {
return {at_, generics_, constraints_, traitType_, generatorArguments_, methods_};
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
export function EPipe(at_, value_, function_) {
return {EPipe: true, at_, value_, function_};
}
export function ECall(at_, tailCall_, function_, typeArguments_, arguments_) {
return {ECall: true, at_, tailCall_, function_, typeArguments_, arguments_};
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

// type MatchCase
export function MatchCase(at_, patterns_, condition_, body_) {
return {at_, patterns_, condition_, body_};
}

// type MatchPattern
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

// type Signature
export function Signature(at_, name_, generics_, constraints_, parameters_, returnType_) {
return {at_, name_, generics_, constraints_, parameters_, returnType_};
}

// type Lambda
export function Lambda(at_, cases_) {
return {at_, cases_};
}

// type Variant
export function Variant(at_, name_, fields_, targets_) {
return {at_, name_, fields_, targets_};
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
export function Constraint(representation_) {
return {representation_};
}

// type Targets
export function Targets(javaScript_) {
return {javaScript_};
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
const Trust$ = {Trust: true};
export function Trust() {
return Trust$;
}

// type Version
export function Version(at_, major_, minor_, patch_) {
return {at_, major_, minor_, patch_};
}





export function Location_show(self_) {
return (((((("in " + self_.file_) + " ") + "at line ") + self_.line_) + ", column ") + self_.column_)
}

export function Type_show(self_) {
{
const _1 = self_
{
if(_1.TConstructor) {
const at_ = _1.at_
const name_ = _1.name_
const generics_ = _1.generics_
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
const at_ = _1.at_
const index_ = _1.index_
return ("$" + index_)
return
}
}
}
}


