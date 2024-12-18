

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

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

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

// type Location
export function Location(file_, line_, column_) {
return {file_, line_, column_};
}

// type CompileError
export function CompileError(at_, message_) {
return {at_, message_};
}

// type CompileErrors
export function CompileErrors(errors_) {
return {errors_};
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
export function DType(at_, newtype_, data_, name_, generics_, constraints_, commonFields_, variants_) {
return {at_, newtype_, data_, name_, generics_, constraints_, commonFields_, variants_};
}

// type DTrait
export function DTrait(at_, name_, generics_, constraints_, generatorParameters_, methods_, methodDefaults_, methodGenerators_) {
return {at_, name_, generics_, constraints_, generatorParameters_, methods_, methodDefaults_, methodGenerators_};
}

// type DInstance
export function DInstance(at_, generics_, constraints_, traitName_, typeArguments_, generatorArguments_, methods_, derived_) {
return {at_, generics_, constraints_, traitName_, typeArguments_, generatorArguments_, methods_, derived_};
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
export function PVariantAs(at_, name_, variableAt_, variable_) {
return {PVariantAs: true, at_, name_, variableAt_, variable_};
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
export function Signature(at_, name_, member_, generics_, constraints_, parameters_, returnType_, effect_) {
return {at_, name_, member_, generics_, constraints_, parameters_, returnType_, effect_};
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

export async function Location_show$(self_, $task) {
return (((((("in " + self_.file_) + " ") + "at line ") + self_.line_) + ", column ") + self_.column_)
}

export function PackagePair_groupName(self_, delimiter_ = ":") {
return ((self_.group_ + delimiter_) + self_.name_)
}

export async function PackagePair_groupName$(self_, delimiter_ = ":", $task) {
return ((self_.group_ + delimiter_) + self_.name_)
}

export function Type_show(self_, shownTypes_) {
let seenTypes_ = ff_core_Map.new_();
const typeNames_ = ff_core_List.List_toStream(ff_core_List.List_map(ff_core_Int.Int_to(97, 122), ((_w1) => {
return ff_core_Char.Char_toString(_w1)
})), false);
function shortenType_(qualified_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(qualified_), ((_w1) => {
return (_w1 !== 46)
})))
}
function shortenTypes_(types_) {
ff_core_List.List_each(types_, ((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
const shortenedName_ = shortenType_(name_);
do {
const _1 = ff_core_Map.Map_get(seenTypes_, shortenedName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_1.None) {
seenTypes_ = ff_core_Map.Map_add(seenTypes_, shortenedName_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
break
}
{
const qualified_ = _1.value_;
if((name_ !== qualified_)) {
seenTypes_ = ff_core_Map.Map_add(seenTypes_, shortenedName_, "", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}
} while(false);
shortenTypes_(typeArguments_)
return
}
{
const index_ = _1.index_;
if((!ff_core_Map.Map_contains(seenTypes_, ("$" + index_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) {
seenTypes_ = ff_core_Map.Map_add(seenTypes_, ("$" + index_), ff_core_Option.Option_else(typeNames_.next_(), (() => {
return ("$" + index_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
return
}
}))
}
shortenTypes_([...shownTypes_, self_]);
function go_(type_) {
{
const _1 = type_;
if(_1.TConstructor && _1.generics_.length === 2) {
const at_ = _1.at_;
const name_ = _1.name_;
const r_ = _1.generics_[1];
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
return ("() => " + go_(r_))
}
}
if(_1.TConstructor && _1.generics_.length === 3) {
const at_ = _1.at_;
const name_ = _1.name_;
const a_ = _1.generics_[1];
const r_ = _1.generics_[2];
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
return ((go_(a_) + " => ") + go_(r_))
}
}
if(_1.TConstructor && _1.generics_.length >= 1) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_.slice(1);
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
return ((("(" + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_dropLast(generics_, 1), ((_w1) => {
return go_(_w1)
})), ", ")) + ") => ") + go_(ff_core_List.List_grabLast(generics_)))
return
}
}
if(_1.TConstructor) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
const as_ = ff_core_List.List_zip(ff_core_List.List_dropFirst(ff_core_String.String_split(name_, 36), 1), generics_);
return (("(" + ff_core_List.List_join(ff_core_List.List_map(as_, ((_1) => {
{
const label_ = _1.first_;
const t_ = _1.second_;
return ((label_ + ": ") + go_(t_))
}
})), ", ")) + ")")
return
}
}
if(_1.TConstructor) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_;
const shortenedName_ = shortenType_(name_);
const chosenName_ = (((_1) => {
if(_1 === "") {
return name_
}
{
return shortenedName_
}
}))(ff_core_Map.Map_grab(seenTypes_, shortenedName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
const filteredGenerics_ = ff_core_List.List_filter(generics_, ((_1) => {
if(_1.TConstructor && _1.name_ === "Q$") {
return false
}
{
return true
}
}));
if(ff_core_List.List_isEmpty(filteredGenerics_)) {
return chosenName_
} else {
return (((chosenName_ + "[") + ff_core_List.List_join(ff_core_List.List_map(filteredGenerics_, ((_w1) => {
return go_(_w1)
})), ", ")) + "]")
}
return
}
{
const at_ = _1.at_;
const index_ = _1.index_;
return ff_core_Map.Map_grab(seenTypes_, ("$" + index_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}
}
return go_(self_)
}

export async function Type_show$(self_, shownTypes_, $task) {
let seenTypes_ = ff_core_Map.new_();
const typeNames_ = ff_core_List.List_toStream(ff_core_List.List_map(ff_core_Int.Int_to(97, 122), ((_w1) => {
return ff_core_Char.Char_toString(_w1)
})), false);
function shortenType_(qualified_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(qualified_), ((_w1) => {
return (_w1 !== 46)
})))
}
function shortenTypes_(types_) {
ff_core_List.List_each(types_, ((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
const shortenedName_ = shortenType_(name_);
do {
const _1 = ff_core_Map.Map_get(seenTypes_, shortenedName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
if(_1.None) {
seenTypes_ = ff_core_Map.Map_add(seenTypes_, shortenedName_, name_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
break
}
{
const qualified_ = _1.value_;
if((name_ !== qualified_)) {
seenTypes_ = ff_core_Map.Map_add(seenTypes_, shortenedName_, "", ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}
} while(false);
shortenTypes_(typeArguments_)
return
}
{
const index_ = _1.index_;
if((!ff_core_Map.Map_contains(seenTypes_, ("$" + index_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String))) {
seenTypes_ = ff_core_Map.Map_add(seenTypes_, ("$" + index_), ff_core_Option.Option_else(typeNames_.next_(), (() => {
return ("$" + index_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
return
}
}))
}
shortenTypes_([...shownTypes_, self_]);
function go_(type_) {
{
const _1 = type_;
if(_1.TConstructor && _1.generics_.length === 2) {
const at_ = _1.at_;
const name_ = _1.name_;
const r_ = _1.generics_[1];
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
return ("() => " + go_(r_))
}
}
if(_1.TConstructor && _1.generics_.length === 3) {
const at_ = _1.at_;
const name_ = _1.name_;
const a_ = _1.generics_[1];
const r_ = _1.generics_[2];
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
return ((go_(a_) + " => ") + go_(r_))
}
}
if(_1.TConstructor && _1.generics_.length >= 1) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_.slice(1);
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
return ((("(" + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_dropLast(generics_, 1), ((_w1) => {
return go_(_w1)
})), ", ")) + ") => ") + go_(ff_core_List.List_grabLast(generics_)))
return
}
}
if(_1.TConstructor) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
const as_ = ff_core_List.List_zip(ff_core_List.List_dropFirst(ff_core_String.String_split(name_, 36), 1), generics_);
return (("(" + ff_core_List.List_join(ff_core_List.List_map(as_, ((_1) => {
{
const label_ = _1.first_;
const t_ = _1.second_;
return ((label_ + ": ") + go_(t_))
}
})), ", ")) + ")")
return
}
}
if(_1.TConstructor) {
const at_ = _1.at_;
const name_ = _1.name_;
const generics_ = _1.generics_;
const shortenedName_ = shortenType_(name_);
const chosenName_ = (((_1) => {
if(_1 === "") {
return name_
}
{
return shortenedName_
}
}))(ff_core_Map.Map_grab(seenTypes_, shortenedName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String));
const filteredGenerics_ = ff_core_List.List_filter(generics_, ((_1) => {
if(_1.TConstructor && _1.name_ === "Q$") {
return false
}
{
return true
}
}));
if(ff_core_List.List_isEmpty(filteredGenerics_)) {
return chosenName_
} else {
return (((chosenName_ + "[") + ff_core_List.List_join(ff_core_List.List_map(filteredGenerics_, ((_w1) => {
return go_(_w1)
})), ", ")) + "]")
}
return
}
{
const at_ = _1.at_;
const index_ = _1.index_;
return ff_core_Map.Map_grab(seenTypes_, ("$" + index_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
}
}
return go_(self_)
}

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Location = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Location" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Location" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.CompileError" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.CompileError" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileErrors = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.CompileErrors" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.CompileErrors" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_ModuleWithPackageInfo = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.ModuleWithPackageInfo" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.ModuleWithPackageInfo" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_PackageInfo = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.PackageInfo" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.PackageInfo" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Module = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Module" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Module" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_PackagePair = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.PackagePair" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.PackagePair" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DPackage = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DPackage" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DPackage" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DDependency = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DDependency" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DDependency" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DInclude = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DInclude" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DInclude" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_TargetNames = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.TargetNames" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.TargetNames" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DImport = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DImport" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DImport" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DFunction = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DFunction" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DFunction" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DLet = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DLet" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DLet" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DExtend = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DExtend" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DExtend" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DType = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DType" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DType" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DTrait = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DTrait" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DTrait" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_DInstance = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DInstance" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.DInstance" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Term = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Term" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Term" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_CallTarget = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.CallTarget" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.CallTarget" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_MatchCase = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.MatchCase" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.MatchCase" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_MatchPattern = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.MatchPattern" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.MatchPattern" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_MatchGuard = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.MatchGuard" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.MatchGuard" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Dictionary = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Dictionary" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Dictionary" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Signature = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Signature" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Signature" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Lambda = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Lambda" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Lambda" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Variant = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Variant" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Variant" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Parameter = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Parameter" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Parameter" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Argument = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Argument" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Argument" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Field = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Field" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Field" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Constraint = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Constraint" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Constraint" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Type = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Type" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Type" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Safety = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Safety" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Safety" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Syntax_Version = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Version" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Syntax.Version" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Location = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Location" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.line_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.column_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Location" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.line_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.column_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_CompileError = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("CompileError" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.message_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("CompileError" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.message_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_CompileErrors = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((("CompileErrors" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError).show_(z_.errors_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((("CompileErrors" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError).show_(z_.errors_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_ModuleWithPackageInfo = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("ModuleWithPackageInfo" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackageInfo).show_(z_.packageInfo_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Module.show_(z_.module_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("ModuleWithPackageInfo" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackageInfo).show_(z_.packageInfo_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Module.show_(z_.module_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_PackageInfo = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("PackageInfo" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DPackage.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DDependency).show_(z_.dependencies_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInclude).show_(z_.includes_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("PackageInfo" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DPackage.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DDependency).show_(z_.dependencies_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInclude).show_(z_.includes_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Module = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((((("Module" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DImport).show_(z_.imports_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DType).show_(z_.types_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DTrait).show_(z_.traits_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInstance).show_(z_.instances_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DExtend).show_(z_.extends_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DLet).show_(z_.lets_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((((("Module" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DImport).show_(z_.imports_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DType).show_(z_.types_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DTrait).show_(z_.traits_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DInstance).show_(z_.instances_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DExtend).show_(z_.extends_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DLet).show_(z_.lets_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_PackagePair = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("PackagePair" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.group_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("PackagePair" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.group_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DPackage = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("DPackage" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("DPackage" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DDependency = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("DDependency" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Safety.show_(z_.safety_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("DDependency" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Version.show_(z_.version_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Safety.show_(z_.safety_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_TargetNames.show_(z_.targets_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DInclude = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("DInclude" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.path_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("DInclude" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.path_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_TargetNames = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("TargetNames" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.node_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.browser_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("TargetNames" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.node_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.browser_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DImport = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("DImport" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.alias_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.directory_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("DImport" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.alias_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.package_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.directory_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DFunction = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("DFunction" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature.show_(z_.signature_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.body_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("DFunction" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature.show_(z_.signature_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.body_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DLet = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("DLet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.variableType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("DLet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.variableType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DExtend = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((("DExtend" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.type_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((("DExtend" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.type_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DType = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("DType" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.data_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.commonFields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Variant).show_(z_.variants_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("DType" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.data_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.commonFields_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Variant).show_(z_.variants_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DTrait = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("DTrait" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.generatorParameters_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature).show_(z_.methods_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodDefaults_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodGenerators_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("DTrait" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.generatorParameters_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Signature).show_(z_.methods_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodDefaults_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_core_Show.ff_core_Show_Show$ff_core_String_String, ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda)).show_(z_.methodGenerators_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_DInstance = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("DInstance" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.generatorArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.derived_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("DInstance" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.generatorArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.methods_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.derived_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Term = {
show_(value_) {
const value_a = value_;
if(value_a.EString) {
const z_ = value_a;
return ((((("EString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EChar) {
const z_ = value_a;
return ((((("EChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EInt) {
const z_ = value_a;
return ((((("EInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EFloat) {
const z_ = value_a;
return ((((("EFloat" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EVariable) {
const z_ = value_a;
return ((((("EVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
}
if(value_a.ELambda) {
const z_ = value_a;
return ((((("ELambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.lambda_)) + ")")
}
if(value_a.EFunctions) {
const z_ = value_a;
return ((((((("EFunctions" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
}
if(value_a.ELet) {
const z_ = value_a;
return ((((((((((((("ELet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
}
if(value_a.ESequential) {
const z_ = value_a;
return ((((((("ESequential" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.before_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.after_)) + ")")
}
if(value_a.EAssign) {
const z_ = value_a;
return ((((((((("EAssign" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
if(value_a.EAssignField) {
const z_ = value_a;
return ((((((((((("EAssignField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
if(value_a.EPipe) {
const z_ = value_a;
return ((((((((("EPipe" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ")")
}
if(value_a.ECall) {
const z_ = value_a;
return ((((((((((((("ECall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CallTarget.show_(z_.target_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.arguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
}
if(value_a.EList) {
const z_ = value_a;
return ((((((("EList" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.elementType_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term, ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool)).show_(z_.items_)) + ")")
}
if(value_a.ECopy) {
const z_ = value_a;
return ((((((((("ECopy" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.arguments_)) + ")")
}
if(value_a.EVariant) {
const z_ = value_a;
return ((((((((("EVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument)).show_(z_.arguments_)) + ")")
}
if(value_a.EVariantIs) {
const z_ = value_a;
return ((((((("EVariantIs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ")")
}
if(value_a.ERecord) {
const z_ = value_a;
return ((((("ERecord" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.fields_)) + ")")
}
if(value_a.EField) {
const z_ = value_a;
return ((((((((("EField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ")")
}
{
const z_ = value_a;
return ((((("EWildcard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.EString) {
const z_ = value_a;
return ((((("EString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EChar) {
const z_ = value_a;
return ((((("EChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EInt) {
const z_ = value_a;
return ((((("EInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EFloat) {
const z_ = value_a;
return ((((("EFloat" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.EVariable) {
const z_ = value_a;
return ((((("EVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ")")
}
if(value_a.ELambda) {
const z_ = value_a;
return ((((("ELambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda.show_(z_.lambda_)) + ")")
}
if(value_a.EFunctions) {
const z_ = value_a;
return ((((((("EFunctions" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_DFunction).show_(z_.functions_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
}
if(value_a.ELet) {
const z_ = value_a;
return ((((((((((((("ELet" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
}
if(value_a.ESequential) {
const z_ = value_a;
return ((((((("ESequential" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.before_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.after_)) + ")")
}
if(value_a.EAssign) {
const z_ = value_a;
return ((((((((("EAssign" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
if(value_a.EAssignField) {
const z_ = value_a;
return ((((((((((("EAssignField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.operator_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
if(value_a.EPipe) {
const z_ = value_a;
return ((((((((("EPipe" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ")")
}
if(value_a.ECall) {
const z_ = value_a;
return ((((((((((((("ECall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CallTarget.show_(z_.target_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument).show_(z_.arguments_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
}
if(value_a.EList) {
const z_ = value_a;
return ((((((("EList" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.elementType_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term, ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool)).show_(z_.items_)) + ")")
}
if(value_a.ECopy) {
const z_ = value_a;
return ((((((((("ECopy" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.arguments_)) + ")")
}
if(value_a.EVariant) {
const z_ = value_a;
return ((((((((("EVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Argument)).show_(z_.arguments_)) + ")")
}
if(value_a.EVariantIs) {
const z_ = value_a;
return ((((((("EVariantIs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.typeArguments_)) + ")")
}
if(value_a.ERecord) {
const z_ = value_a;
return ((((("ERecord" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Field).show_(z_.fields_)) + ")")
}
if(value_a.EField) {
const z_ = value_a;
return ((((((((("EField" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.newtype_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.record_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.field_)) + ")")
}
{
const z_ = value_a;
return ((((("EWildcard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_CallTarget = {
show_(value_) {
const value_a = value_;
if(value_a.DynamicCall) {
const z_ = value_a;
return ((((("DynamicCall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ")")
}
{
const z_ = value_a;
return ((((((("StaticCall" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.instanceCall_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.DynamicCall) {
const z_ = value_a;
return ((((("DynamicCall" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.function_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ")")
}
{
const z_ = value_a;
return ((((((("StaticCall" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.tailCall_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.instanceCall_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_MatchCase = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("MatchCase" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchGuard).show_(z_.guards_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("MatchCase" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchGuard).show_(z_.guards_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.body_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_MatchPattern = {
show_(value_) {
const value_a = value_;
if(value_a.PString) {
const z_ = value_a;
return ((((("PString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.PInt) {
const z_ = value_a;
return ((((("PInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.PChar) {
const z_ = value_a;
return ((((("PChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.PVariable) {
const z_ = value_a;
return ((((("PVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ")")
}
if(value_a.PVariant) {
const z_ = value_a;
return ((((((("PVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ")")
}
if(value_a.PVariantAs) {
const z_ = value_a;
return ((((((((("PVariantAs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.variableAt_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.variable_)) + ")")
}
{
const z_ = value_a;
return ((((((("PAlias" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.PString) {
const z_ = value_a;
return ((((("PString" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.PInt) {
const z_ = value_a;
return ((((("PInt" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.PChar) {
const z_ = value_a;
return ((((("PChar" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.value_)) + ")")
}
if(value_a.PVariable) {
const z_ = value_a;
return ((((("PVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ")")
}
if(value_a.PVariant) {
const z_ = value_a;
return ((((((("PVariant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern).show_(z_.patterns_)) + ")")
}
if(value_a.PVariantAs) {
const z_ = value_a;
return ((((((((("PVariantAs" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.variableAt_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.variable_)) + ")")
}
{
const z_ = value_a;
return ((((((("PAlias" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.variable_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_MatchGuard = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("MatchGuard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.term_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("MatchGuard" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.term_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchPattern.show_(z_.pattern_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Dictionary = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("Dictionary" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.moduleName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.typeName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("Dictionary" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_PackagePair.show_(z_.packagePair_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.moduleName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.traitName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.typeName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Dictionary).show_(z_.dictionaries_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Signature = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("Signature" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.member_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.parameters_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.returnType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((("Signature" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.member_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.parameters_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.returnType_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Lambda = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Lambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchCase).show_(z_.cases_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Lambda" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.effect_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_MatchCase).show_(z_.cases_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Variant = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Variant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.fields_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Variant" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter).show_(z_.fields_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Parameter = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("Parameter" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term).show_(z_.default_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((((("Parameter" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Bool_Bool.show_(z_.mutable_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type.show_(z_.valueType_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term).show_(z_.default_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Argument = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Argument" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Argument" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Field = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Field" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Field" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Term.show_(z_.value_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Constraint = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Constraint" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Constraint" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Type = {
show_(value_) {
const value_a = value_;
if(value_a.TConstructor) {
const z_ = value_a;
return ((((((("TConstructor" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
}
{
const z_ = value_a;
return ((((("TVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.TConstructor) {
const z_ = value_a;
return ((((((("TConstructor" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.name_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Type).show_(z_.generics_)) + ")")
}
{
const z_ = value_a;
return ((((("TVariable" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.index_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Safety = {
show_(value_) {
const value_a = value_;
if(value_a.Safe) {
const z_ = value_a;
return "Safe"
}
if(value_a.Unsafe) {
const z_ = value_a;
return "Unsafe"
}
{
const z_ = value_a;
return "Trusted"
}
},
async show_$(value_, $task) {
const value_a = value_;
if(value_a.Safe) {
const z_ = value_a;
return "Safe"
}
if(value_a.Unsafe) {
const z_ = value_a;
return "Unsafe"
}
{
const z_ = value_a;
return "Trusted"
}
}
};

export const ff_core_Show_Show$ff_compiler_Syntax_Version = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("Version" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.major_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.minor_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.patch_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((((("Version" + "(") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.at_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.major_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.minor_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.patch_)) + ")")
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Location = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.file_ === y_.file_) && ((x_.line_ === y_.line_) && (x_.column_ === y_.column_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.file_ === y_.file_) && ((x_.line_ === y_.line_) && (x_.column_ === y_.column_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_CompileError = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.message_ === y_.message_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.message_ === y_.message_))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_CompileErrors = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_CompileError).equals_(x_.errors_, y_.errors_)
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_CompileError).equals_(x_.errors_, y_.errors_)
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_ModuleWithPackageInfo = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackageInfo).equals_(x_.packageInfo_, y_.packageInfo_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Module.equals_(x_.module_, y_.module_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackageInfo).equals_(x_.packageInfo_, y_.packageInfo_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Module.equals_(x_.module_, y_.module_))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_PackageInfo = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DPackage.equals_(x_.package_, y_.package_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DDependency).equals_(x_.dependencies_, y_.dependencies_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DInclude).equals_(x_.includes_, y_.includes_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DPackage.equals_(x_.package_, y_.package_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DDependency).equals_(x_.dependencies_, y_.dependencies_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DInclude).equals_(x_.includes_, y_.includes_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Module = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.file_ === y_.file_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DImport).equals_(x_.imports_, y_.imports_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DType).equals_(x_.types_, y_.types_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DTrait).equals_(x_.traits_, y_.traits_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DInstance).equals_(x_.instances_, y_.instances_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DExtend).equals_(x_.extends_, y_.extends_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DLet).equals_(x_.lets_, y_.lets_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.functions_, y_.functions_)))))))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.file_ === y_.file_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DImport).equals_(x_.imports_, y_.imports_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DType).equals_(x_.types_, y_.types_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DTrait).equals_(x_.traits_, y_.traits_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DInstance).equals_(x_.instances_, y_.instances_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DExtend).equals_(x_.extends_, y_.extends_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DLet).equals_(x_.lets_, y_.lets_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.functions_, y_.functions_)))))))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.group_ === y_.group_) && (x_.name_ === y_.name_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.group_ === y_.group_) && (x_.name_ === y_.name_))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DPackage = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Version.equals_(x_.version_, y_.version_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_TargetNames.equals_(x_.targets_, y_.targets_))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Version.equals_(x_.version_, y_.version_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_TargetNames.equals_(x_.targets_, y_.targets_))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DDependency = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Version.equals_(x_.version_, y_.version_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Safety.equals_(x_.safety_, y_.safety_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_TargetNames.equals_(x_.targets_, y_.targets_)))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Version.equals_(x_.version_, y_.version_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Safety.equals_(x_.safety_, y_.safety_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_TargetNames.equals_(x_.targets_, y_.targets_)))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DInclude = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.path_ === y_.path_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.path_ === y_.path_))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_TargetNames = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.node_ === y_.node_) && (x_.browser_ === y_.browser_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.node_ === y_.node_) && (x_.browser_ === y_.browser_))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DImport = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.alias_ === y_.alias_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.package_, y_.package_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.directory_, y_.directory_) && (x_.file_ === y_.file_)))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.alias_ === y_.alias_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.package_, y_.package_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.directory_, y_.directory_) && (x_.file_ === y_.file_)))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DFunction = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Signature.equals_(x_.signature_, y_.signature_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda.equals_(x_.body_, y_.body_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Signature.equals_(x_.signature_, y_.signature_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda.equals_(x_.body_, y_.body_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DLet = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.variableType_, y_.variableType_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.variableType_, y_.variableType_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DExtend = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.type_, y_.type_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.methods_, y_.methods_))))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.type_, y_.type_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.methods_, y_.methods_))))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DType = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.newtype_ === y_.newtype_) && ((x_.data_ === y_.data_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.commonFields_, y_.commonFields_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Variant).equals_(x_.variants_, y_.variants_))))))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.newtype_ === y_.newtype_) && ((x_.data_ === y_.data_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.commonFields_, y_.commonFields_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Variant).equals_(x_.variants_, y_.variants_))))))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DTrait = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.generatorParameters_, y_.generatorParameters_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Signature).equals_(x_.methods_, y_.methods_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda)).equals_(x_.methodDefaults_, y_.methodDefaults_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda)).equals_(x_.methodGenerators_, y_.methodGenerators_))))))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.generatorParameters_, y_.generatorParameters_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Signature).equals_(x_.methods_, y_.methods_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda)).equals_(x_.methodDefaults_, y_.methodDefaults_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String, ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda)).equals_(x_.methodGenerators_, y_.methodGenerators_))))))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_DInstance = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && ((x_.traitName_ === y_.traitName_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Argument).equals_(x_.generatorArguments_, y_.generatorArguments_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.methods_, y_.methods_) && (x_.derived_ === y_.derived_))))))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && ((x_.traitName_ === y_.traitName_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Argument).equals_(x_.generatorArguments_, y_.generatorArguments_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.methods_, y_.methods_) && (x_.derived_ === y_.derived_))))))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Term = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.EString && y_a.EString) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EChar && y_a.EChar) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EInt && y_a.EInt) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EFloat && y_a.EFloat) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EVariable && y_a.EVariable) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.name_ === y_.name_))
}
if(x_a.ELambda && y_a.ELambda) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda.equals_(x_.lambda_, y_.lambda_))
}
if(x_a.EFunctions && y_a.EFunctions) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.functions_, y_.functions_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.body_, y_.body_)))
}
if(x_a.ELet && y_a.ELet) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.mutable_ === y_.mutable_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.valueType_, y_.valueType_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.body_, y_.body_))))))
}
if(x_a.ESequential && y_a.ESequential) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.before_, y_.before_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.after_, y_.after_)))
}
if(x_a.EAssign && y_a.EAssign) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.operator_ === y_.operator_) && ((x_.variable_ === y_.variable_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_))))
}
if(x_a.EAssignField && y_a.EAssignField) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.operator_ === y_.operator_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.record_, y_.record_) && ((x_.field_ === y_.field_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_)))))
}
if(x_a.EPipe && y_a.EPipe) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.function_, y_.function_))))
}
if(x_a.ECall && y_a.ECall) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_CallTarget.equals_(x_.target_, y_.target_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Argument).equals_(x_.arguments_, y_.arguments_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Dictionary).equals_(x_.dictionaries_, y_.dictionaries_))))))
}
if(x_a.EList && y_a.EList) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.elementType_, y_.elementType_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term, ff_core_Equal.ff_core_Equal_Equal$ff_core_Bool_Bool)).equals_(x_.items_, y_.items_)))
}
if(x_a.ECopy && y_a.ECopy) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.record_, y_.record_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Field).equals_(x_.arguments_, y_.arguments_))))
}
if(x_a.EVariant && y_a.EVariant) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Argument)).equals_(x_.arguments_, y_.arguments_))))
}
if(x_a.EVariantIs && y_a.EVariantIs) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_)))
}
if(x_a.ERecord && y_a.ERecord) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Field).equals_(x_.fields_, y_.fields_))
}
if(x_a.EField && y_a.EField) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.newtype_ === y_.newtype_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.record_, y_.record_) && (x_.field_ === y_.field_))))
}
if(x_a.EWildcard && y_a.EWildcard) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.index_ === y_.index_))
}
{
return false
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.EString && y_a.EString) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EChar && y_a.EChar) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EInt && y_a.EInt) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EFloat && y_a.EFloat) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.EVariable && y_a.EVariable) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.name_ === y_.name_))
}
if(x_a.ELambda && y_a.ELambda) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda.equals_(x_.lambda_, y_.lambda_))
}
if(x_a.EFunctions && y_a.EFunctions) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_DFunction).equals_(x_.functions_, y_.functions_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.body_, y_.body_)))
}
if(x_a.ELet && y_a.ELet) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.mutable_ === y_.mutable_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.valueType_, y_.valueType_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.body_, y_.body_))))))
}
if(x_a.ESequential && y_a.ESequential) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.before_, y_.before_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.after_, y_.after_)))
}
if(x_a.EAssign && y_a.EAssign) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.operator_ === y_.operator_) && ((x_.variable_ === y_.variable_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_))))
}
if(x_a.EAssignField && y_a.EAssignField) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.operator_ === y_.operator_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.record_, y_.record_) && ((x_.field_ === y_.field_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_)))))
}
if(x_a.EPipe && y_a.EPipe) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.function_, y_.function_))))
}
if(x_a.ECall && y_a.ECall) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_CallTarget.equals_(x_.target_, y_.target_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Argument).equals_(x_.arguments_, y_.arguments_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Dictionary).equals_(x_.dictionaries_, y_.dictionaries_))))))
}
if(x_a.EList && y_a.EList) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.elementType_, y_.elementType_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Pair.ff_core_Equal_Equal$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term, ff_core_Equal.ff_core_Equal_Equal$ff_core_Bool_Bool)).equals_(x_.items_, y_.items_)))
}
if(x_a.ECopy && y_a.ECopy) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.record_, y_.record_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Field).equals_(x_.arguments_, y_.arguments_))))
}
if(x_a.EVariant && y_a.EVariant) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Argument)).equals_(x_.arguments_, y_.arguments_))))
}
if(x_a.EVariantIs && y_a.EVariantIs) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.typeArguments_, y_.typeArguments_)))
}
if(x_a.ERecord && y_a.ERecord) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Field).equals_(x_.fields_, y_.fields_))
}
if(x_a.EField && y_a.EField) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.newtype_ === y_.newtype_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.record_, y_.record_) && (x_.field_ === y_.field_))))
}
if(x_a.EWildcard && y_a.EWildcard) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.index_ === y_.index_))
}
{
return false
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_CallTarget = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.DynamicCall && y_a.DynamicCall) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.function_, y_.function_) && (x_.tailCall_ === y_.tailCall_))
}
if(x_a.StaticCall && y_a.StaticCall) {
const x_ = x_a;
const y_ = y_a;
return ((x_.name_ === y_.name_) && ((x_.tailCall_ === y_.tailCall_) && (x_.instanceCall_ === y_.instanceCall_)))
}
{
return false
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.DynamicCall && y_a.DynamicCall) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.function_, y_.function_) && (x_.tailCall_ === y_.tailCall_))
}
if(x_a.StaticCall && y_a.StaticCall) {
const x_ = x_a;
const y_ = y_a;
return ((x_.name_ === y_.name_) && ((x_.tailCall_ === y_.tailCall_) && (x_.instanceCall_ === y_.instanceCall_)))
}
{
return false
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_MatchCase = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern).equals_(x_.patterns_, y_.patterns_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchGuard).equals_(x_.guards_, y_.guards_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.body_, y_.body_))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern).equals_(x_.patterns_, y_.patterns_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchGuard).equals_(x_.guards_, y_.guards_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.body_, y_.body_))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.PString && y_a.PString) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.PInt && y_a.PInt) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.PChar && y_a.PChar) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.PVariable && y_a.PVariable) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.name_, y_.name_))
}
if(x_a.PVariant && y_a.PVariant) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern).equals_(x_.patterns_, y_.patterns_)))
}
if(x_a.PVariantAs && y_a.PVariantAs) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.variableAt_, y_.variableAt_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.variable_, y_.variable_))))
}
if(x_a.PAlias && y_a.PAlias) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern.equals_(x_.pattern_, y_.pattern_) && (x_.variable_ === y_.variable_)))
}
{
return false
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.PString && y_a.PString) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.PInt && y_a.PInt) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.PChar && y_a.PChar) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.value_ === y_.value_))
}
if(x_a.PVariable && y_a.PVariable) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.name_, y_.name_))
}
if(x_a.PVariant && y_a.PVariant) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern).equals_(x_.patterns_, y_.patterns_)))
}
if(x_a.PVariantAs && y_a.PVariantAs) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.variableAt_, y_.variableAt_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.variable_, y_.variable_))))
}
if(x_a.PAlias && y_a.PAlias) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern.equals_(x_.pattern_, y_.pattern_) && (x_.variable_ === y_.variable_)))
}
{
return false
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_MatchGuard = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.term_, y_.term_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern.equals_(x_.pattern_, y_.pattern_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.term_, y_.term_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchPattern.equals_(x_.pattern_, y_.pattern_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Dictionary = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && ((x_.moduleName_ === y_.moduleName_) && ((x_.traitName_ === y_.traitName_) && ((x_.typeName_ === y_.typeName_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Dictionary).equals_(x_.dictionaries_, y_.dictionaries_)))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_PackagePair.equals_(x_.packagePair_, y_.packagePair_) && ((x_.moduleName_ === y_.moduleName_) && ((x_.traitName_ === y_.traitName_) && ((x_.typeName_ === y_.typeName_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Dictionary).equals_(x_.dictionaries_, y_.dictionaries_)))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Signature = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ((x_.member_ === y_.member_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.parameters_, y_.parameters_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.returnType_, y_.returnType_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_))))))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ((x_.member_ === y_.member_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_) && (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.parameters_, y_.parameters_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.returnType_, y_.returnType_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_))))))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Lambda = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchCase).equals_(x_.cases_, y_.cases_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.effect_, y_.effect_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_MatchCase).equals_(x_.cases_, y_.cases_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Variant = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.fields_, y_.fields_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Parameter).equals_(x_.fields_, y_.fields_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Parameter = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.mutable_ === y_.mutable_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.valueType_, y_.valueType_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term).equals_(x_.default_, y_.default_)))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.mutable_ === y_.mutable_) && ((x_.name_ === y_.name_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type.equals_(x_.valueType_, y_.valueType_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term).equals_(x_.default_, y_.default_)))))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Argument = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.name_, y_.name_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.name_, y_.name_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Field = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Term.equals_(x_.value_, y_.value_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Constraint = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.generics_, y_.generics_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.generics_, y_.generics_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Type = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.TConstructor && y_a.TConstructor) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.generics_, y_.generics_)))
}
if(x_a.TVariable && y_a.TVariable) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.index_ === y_.index_))
}
{
return false
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
if(x_a.TConstructor && y_a.TConstructor) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.name_ === y_.name_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Type).equals_(x_.generics_, y_.generics_)))
}
if(x_a.TVariable && y_a.TVariable) {
const x_ = x_a;
const y_ = y_a;
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && (x_.index_ === y_.index_))
}
{
return false
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Safety = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return false
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return false
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Syntax_Version = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.major_ === y_.major_) && ((x_.minor_ === y_.minor_) && (x_.patch_ === y_.patch_))))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.at_, y_.at_) && ((x_.major_ === y_.major_) && ((x_.minor_ === y_.minor_) && (x_.patch_ === y_.patch_))))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Location = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const lineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.line_, y_.line_);
if((lineOrdering_ !== ff_core_Ordering.OrderingSame())) {
return lineOrdering_
} else {
const columnOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.column_, y_.column_);
if((columnOrdering_ !== ff_core_Ordering.OrderingSame())) {
return columnOrdering_
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
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const lineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.line_, y_.line_);
if((lineOrdering_ !== ff_core_Ordering.OrderingSame())) {
return lineOrdering_
} else {
const columnOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.column_, y_.column_);
if((columnOrdering_ !== ff_core_Ordering.OrderingSame())) {
return columnOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_CompileError = {
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
const messageOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.message_, y_.message_);
if((messageOrdering_ !== ff_core_Ordering.OrderingSame())) {
return messageOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const messageOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.message_, y_.message_);
if((messageOrdering_ !== ff_core_Ordering.OrderingSame())) {
return messageOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_CompileErrors = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const errorsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CompileError).compare_(x_.errors_, y_.errors_);
if((errorsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return errorsOrdering_
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
const errorsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CompileError).compare_(x_.errors_, y_.errors_);
if((errorsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return errorsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_ModuleWithPackageInfo = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const packageInfoOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo).compare_(x_.packageInfo_, y_.packageInfo_);
if((packageInfoOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageInfoOrdering_
} else {
const moduleOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Module.compare_(x_.module_, y_.module_);
if((moduleOrdering_ !== ff_core_Ordering.OrderingSame())) {
return moduleOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const packageInfoOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo).compare_(x_.packageInfo_, y_.packageInfo_);
if((packageInfoOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageInfoOrdering_
} else {
const moduleOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Module.compare_(x_.module_, y_.module_);
if((moduleOrdering_ !== ff_core_Ordering.OrderingSame())) {
return moduleOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_PackageInfo = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DPackage.compare_(x_.package_, y_.package_);
if((packageOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const dependenciesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DDependency).compare_(x_.dependencies_, y_.dependencies_);
if((dependenciesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return dependenciesOrdering_
} else {
const includesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInclude).compare_(x_.includes_, y_.includes_);
if((includesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return includesOrdering_
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
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DPackage.compare_(x_.package_, y_.package_);
if((packageOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const dependenciesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DDependency).compare_(x_.dependencies_, y_.dependencies_);
if((dependenciesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return dependenciesOrdering_
} else {
const includesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInclude).compare_(x_.includes_, y_.includes_);
if((includesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return includesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Module = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const importsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DImport).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
const typesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DType).compare_(x_.types_, y_.types_);
if((typesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typesOrdering_
} else {
const traitsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DTrait).compare_(x_.traits_, y_.traits_);
if((traitsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitsOrdering_
} else {
const instancesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInstance).compare_(x_.instances_, y_.instances_);
if((instancesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return instancesOrdering_
} else {
const extendsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DExtend).compare_(x_.extends_, y_.extends_);
if((extendsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return extendsOrdering_
} else {
const letsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DLet).compare_(x_.lets_, y_.lets_);
if((letsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return letsOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const importsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DImport).compare_(x_.imports_, y_.imports_);
if((importsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return importsOrdering_
} else {
const typesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DType).compare_(x_.types_, y_.types_);
if((typesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typesOrdering_
} else {
const traitsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DTrait).compare_(x_.traits_, y_.traits_);
if((traitsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitsOrdering_
} else {
const instancesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DInstance).compare_(x_.instances_, y_.instances_);
if((instancesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return instancesOrdering_
} else {
const extendsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DExtend).compare_(x_.extends_, y_.extends_);
if((extendsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return extendsOrdering_
} else {
const letsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DLet).compare_(x_.lets_, y_.lets_);
if((letsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return letsOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const groupOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.group_, y_.group_);
if((groupOrdering_ !== ff_core_Ordering.OrderingSame())) {
return groupOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const groupOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.group_, y_.group_);
if((groupOrdering_ !== ff_core_Ordering.OrderingSame())) {
return groupOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DPackage = {
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
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return targetsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DDependency = {
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
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const safetyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Safety.compare_(x_.safety_, y_.safety_);
if((safetyOrdering_ !== ff_core_Ordering.OrderingSame())) {
return safetyOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const versionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Version.compare_(x_.version_, y_.version_);
if((versionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return versionOrdering_
} else {
const safetyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Safety.compare_(x_.safety_, y_.safety_);
if((safetyOrdering_ !== ff_core_Ordering.OrderingSame())) {
return safetyOrdering_
} else {
const targetsOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames.compare_(x_.targets_, y_.targets_);
if((targetsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DInclude = {
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
const pathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.path_, y_.path_);
if((pathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return pathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const pathOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.path_, y_.path_);
if((pathOrdering_ !== ff_core_Ordering.OrderingSame())) {
return pathOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_TargetNames = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const nodeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.node_, y_.node_);
if((nodeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeOrdering_
} else {
const browserOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.browser_, y_.browser_);
if((browserOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserOrdering_
} else {
return ff_core_Ordering.OrderingSame()
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
const nodeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.node_, y_.node_);
if((nodeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeOrdering_
} else {
const browserOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.browser_, y_.browser_);
if((browserOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DImport = {
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
const aliasOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.alias_, y_.alias_);
if((aliasOrdering_ !== ff_core_Ordering.OrderingSame())) {
return aliasOrdering_
} else {
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.package_, y_.package_);
if((packageOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const directoryOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.directory_, y_.directory_);
if((directoryOrdering_ !== ff_core_Ordering.OrderingSame())) {
return directoryOrdering_
} else {
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
const aliasOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.alias_, y_.alias_);
if((aliasOrdering_ !== ff_core_Ordering.OrderingSame())) {
return aliasOrdering_
} else {
const packageOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.package_, y_.package_);
if((packageOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageOrdering_
} else {
const directoryOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.directory_, y_.directory_);
if((directoryOrdering_ !== ff_core_Ordering.OrderingSame())) {
return directoryOrdering_
} else {
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DFunction = {
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
const signatureOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature.compare_(x_.signature_, y_.signature_);
if((signatureOrdering_ !== ff_core_Ordering.OrderingSame())) {
return signatureOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
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
const signatureOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature.compare_(x_.signature_, y_.signature_);
if((signatureOrdering_ !== ff_core_Ordering.OrderingSame())) {
return signatureOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DLet = {
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
const variableTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.variableType_, y_.variableType_);
if((variableTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const variableTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.variableType_, y_.variableType_);
if((variableTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DExtend = {
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const typeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.type_, y_.type_);
if((typeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const typeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.type_, y_.type_);
if((typeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DType = {
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
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const dataOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.data_, y_.data_);
if((dataOrdering_ !== ff_core_Ordering.OrderingSame())) {
return dataOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const commonFieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.commonFields_, y_.commonFields_);
if((commonFieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return commonFieldsOrdering_
} else {
const variantsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Variant).compare_(x_.variants_, y_.variants_);
if((variantsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const dataOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.data_, y_.data_);
if((dataOrdering_ !== ff_core_Ordering.OrderingSame())) {
return dataOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const commonFieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.commonFields_, y_.commonFields_);
if((commonFieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return commonFieldsOrdering_
} else {
const variantsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Variant).compare_(x_.variants_, y_.variants_);
if((variantsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DTrait = {
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const generatorParametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.generatorParameters_, y_.generatorParameters_);
if((generatorParametersOrdering_ !== ff_core_Ordering.OrderingSame())) {
return generatorParametersOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
const methodDefaultsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodDefaults_, y_.methodDefaults_);
if((methodDefaultsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return methodDefaultsOrdering_
} else {
const methodGeneratorsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodGenerators_, y_.methodGenerators_);
if((methodGeneratorsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const generatorParametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.generatorParameters_, y_.generatorParameters_);
if((generatorParametersOrdering_ !== ff_core_Ordering.OrderingSame())) {
return generatorParametersOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Signature).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
const methodDefaultsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodDefaults_, y_.methodDefaults_);
if((methodDefaultsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return methodDefaultsOrdering_
} else {
const methodGeneratorsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda)).compare_(x_.methodGenerators_, y_.methodGenerators_);
if((methodGeneratorsOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_DInstance = {
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const generatorArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.generatorArguments_, y_.generatorArguments_);
if((generatorArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return generatorArgumentsOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
const derivedOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.derived_, y_.derived_);
if((derivedOrdering_ !== ff_core_Ordering.OrderingSame())) {
return derivedOrdering_
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const generatorArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.generatorArguments_, y_.generatorArguments_);
if((generatorArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return generatorArgumentsOrdering_
} else {
const methodsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.methods_, y_.methods_);
if((methodsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return methodsOrdering_
} else {
const derivedOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.derived_, y_.derived_);
if((derivedOrdering_ !== ff_core_Ordering.OrderingSame())) {
return derivedOrdering_
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Term = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.EString && y_a.EString) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EChar && y_a.EChar) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EInt && y_a.EInt) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EFloat && y_a.EFloat) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EVariable && y_a.EVariable) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.ELambda && y_a.ELambda) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const lambdaOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.lambda_, y_.lambda_);
if((lambdaOrdering_ !== ff_core_Ordering.OrderingSame())) {
return lambdaOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EFunctions && y_a.EFunctions) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return functionsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.ELet && y_a.ELet) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
if(x_a.ESequential && y_a.ESequential) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const beforeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.before_, y_.before_);
if((beforeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return beforeOrdering_
} else {
const afterOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.after_, y_.after_);
if((afterOrdering_ !== ff_core_Ordering.OrderingSame())) {
return afterOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.EAssign && y_a.EAssign) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EAssignField && y_a.EAssignField) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ !== ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
if(x_a.EPipe && y_a.EPipe) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.ECall && y_a.ECall) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const targetOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CallTarget.compare_(x_.target_, y_.target_);
if((targetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return targetOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
if(x_a.EList && y_a.EList) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const elementTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.elementType_, y_.elementType_);
if((elementTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return elementTypeOrdering_
} else {
const itemsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool)).compare_(x_.items_, y_.items_);
if((itemsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return itemsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.ECopy && y_a.ECopy) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ !== ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EVariant && y_a.EVariant) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument)).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EVariantIs && y_a.EVariantIs) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.ERecord && y_a.ERecord) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EField && y_a.EField) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ !== ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EWildcard && y_a.EWildcard) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ !== ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.EString) {
return 0
}
if(z_a.EChar) {
return 1
}
if(z_a.EInt) {
return 2
}
if(z_a.EFloat) {
return 3
}
if(z_a.EVariable) {
return 4
}
if(z_a.ELambda) {
return 5
}
if(z_a.EFunctions) {
return 6
}
if(z_a.ELet) {
return 7
}
if(z_a.ESequential) {
return 8
}
if(z_a.EAssign) {
return 9
}
if(z_a.EAssignField) {
return 10
}
if(z_a.EPipe) {
return 11
}
if(z_a.ECall) {
return 12
}
if(z_a.EList) {
return 13
}
if(z_a.ECopy) {
return 14
}
if(z_a.EVariant) {
return 15
}
if(z_a.EVariantIs) {
return 16
}
if(z_a.ERecord) {
return 17
}
if(z_a.EField) {
return 18
}
{
return 19
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.EString && y_a.EString) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EChar && y_a.EChar) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EInt && y_a.EInt) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EFloat && y_a.EFloat) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EVariable && y_a.EVariable) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.ELambda && y_a.ELambda) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const lambdaOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda.compare_(x_.lambda_, y_.lambda_);
if((lambdaOrdering_ !== ff_core_Ordering.OrderingSame())) {
return lambdaOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EFunctions && y_a.EFunctions) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const functionsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_DFunction).compare_(x_.functions_, y_.functions_);
if((functionsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return functionsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.ELet && y_a.ELet) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
if(x_a.ESequential && y_a.ESequential) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const beforeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.before_, y_.before_);
if((beforeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return beforeOrdering_
} else {
const afterOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.after_, y_.after_);
if((afterOrdering_ !== ff_core_Ordering.OrderingSame())) {
return afterOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.EAssign && y_a.EAssign) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EAssignField && y_a.EAssignField) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const operatorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.operator_, y_.operator_);
if((operatorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return operatorOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ !== ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
if(x_a.EPipe && y_a.EPipe) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.ECall && y_a.ECall) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const targetOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_CallTarget.compare_(x_.target_, y_.target_);
if((targetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return targetOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
if(x_a.EList && y_a.EList) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const elementTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.elementType_, y_.elementType_);
if((elementTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return elementTypeOrdering_
} else {
const itemsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term, ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool)).compare_(x_.items_, y_.items_);
if((itemsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return itemsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.ECopy && y_a.ECopy) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ !== ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const argumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EVariant && y_a.EVariant) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
const argumentsOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Argument)).compare_(x_.arguments_, y_.arguments_);
if((argumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return argumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EVariantIs && y_a.EVariantIs) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const typeArgumentsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.typeArguments_, y_.typeArguments_);
if((typeArgumentsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeArgumentsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.ERecord && y_a.ERecord) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Field).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.EField && y_a.EField) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const newtypeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.newtype_, y_.newtype_);
if((newtypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return newtypeOrdering_
} else {
const recordOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.record_, y_.record_);
if((recordOrdering_ !== ff_core_Ordering.OrderingSame())) {
return recordOrdering_
} else {
const fieldOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.field_, y_.field_);
if((fieldOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.EWildcard && y_a.EWildcard) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ !== ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.EString) {
return 0
}
if(z_a.EChar) {
return 1
}
if(z_a.EInt) {
return 2
}
if(z_a.EFloat) {
return 3
}
if(z_a.EVariable) {
return 4
}
if(z_a.ELambda) {
return 5
}
if(z_a.EFunctions) {
return 6
}
if(z_a.ELet) {
return 7
}
if(z_a.ESequential) {
return 8
}
if(z_a.EAssign) {
return 9
}
if(z_a.EAssignField) {
return 10
}
if(z_a.EPipe) {
return 11
}
if(z_a.ECall) {
return 12
}
if(z_a.EList) {
return 13
}
if(z_a.ECopy) {
return 14
}
if(z_a.EVariant) {
return 15
}
if(z_a.EVariantIs) {
return 16
}
if(z_a.ERecord) {
return 17
}
if(z_a.EField) {
return 18
}
{
return 19
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_CallTarget = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.DynamicCall && y_a.DynamicCall) {
const x_ = x_a;
const y_ = y_a;
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ !== ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.StaticCall && y_a.StaticCall) {
const x_ = x_a;
const y_ = y_a;
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ !== ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
const instanceCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.instanceCall_, y_.instanceCall_);
if((instanceCallOrdering_ !== ff_core_Ordering.OrderingSame())) {
return instanceCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.DynamicCall) {
return 0
}
{
return 1
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.DynamicCall && y_a.DynamicCall) {
const x_ = x_a;
const y_ = y_a;
const functionOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.function_, y_.function_);
if((functionOrdering_ !== ff_core_Ordering.OrderingSame())) {
return functionOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ !== ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.StaticCall && y_a.StaticCall) {
const x_ = x_a;
const y_ = y_a;
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const tailCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.tailCall_, y_.tailCall_);
if((tailCallOrdering_ !== ff_core_Ordering.OrderingSame())) {
return tailCallOrdering_
} else {
const instanceCallOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.instanceCall_, y_.instanceCall_);
if((instanceCallOrdering_ !== ff_core_Ordering.OrderingSame())) {
return instanceCallOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.DynamicCall) {
return 0
}
{
return 1
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_MatchCase = {
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
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
const guardsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchGuard).compare_(x_.guards_, y_.guards_);
if((guardsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return guardsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
return bodyOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
const guardsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchGuard).compare_(x_.guards_, y_.guards_);
if((guardsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return guardsOrdering_
} else {
const bodyOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.body_, y_.body_);
if((bodyOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.PString && y_a.PString) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PInt && y_a.PInt) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PChar && y_a.PChar) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PVariable && y_a.PVariable) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PVariant && y_a.PVariant) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.PVariantAs && y_a.PVariantAs) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const variableAtOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.variableAt_, y_.variableAt_);
if((variableAtOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableAtOrdering_
} else {
const variableOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.variable_, y_.variable_);
if((variableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.PAlias && y_a.PAlias) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.PString) {
return 0
}
if(z_a.PInt) {
return 1
}
if(z_a.PChar) {
return 2
}
if(z_a.PVariable) {
return 3
}
if(z_a.PVariant) {
return 4
}
if(z_a.PVariantAs) {
return 5
}
{
return 6
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.PString && y_a.PString) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PInt && y_a.PInt) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PChar && y_a.PChar) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const valueOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PVariable && y_a.PVariable) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
if(x_a.PVariant && y_a.PVariant) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const patternsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern).compare_(x_.patterns_, y_.patterns_);
if((patternsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.PVariantAs && y_a.PVariantAs) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const variableAtOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.variableAt_, y_.variableAt_);
if((variableAtOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableAtOrdering_
} else {
const variableOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.variable_, y_.variable_);
if((variableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
return
}
if(x_a.PAlias && y_a.PAlias) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternOrdering_
} else {
const variableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.variable_, y_.variable_);
if((variableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return variableOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.PString) {
return 0
}
if(z_a.PInt) {
return 1
}
if(z_a.PChar) {
return 2
}
if(z_a.PVariable) {
return 3
}
if(z_a.PVariant) {
return 4
}
if(z_a.PVariantAs) {
return 5
}
{
return 6
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_MatchGuard = {
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
const termOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.term_, y_.term_);
if((termOrdering_ !== ff_core_Ordering.OrderingSame())) {
return termOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternOrdering_
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
const termOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.term_, y_.term_);
if((termOrdering_ !== ff_core_Ordering.OrderingSame())) {
return termOrdering_
} else {
const patternOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchPattern.compare_(x_.pattern_, y_.pattern_);
if((patternOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patternOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const moduleNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.moduleName_, y_.moduleName_);
if((moduleNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return moduleNameOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_);
if((typeNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeNameOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const packagePairOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair.compare_(x_.packagePair_, y_.packagePair_);
if((packagePairOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packagePairOrdering_
} else {
const moduleNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.moduleName_, y_.moduleName_);
if((moduleNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return moduleNameOrdering_
} else {
const traitNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.traitName_, y_.traitName_);
if((traitNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return traitNameOrdering_
} else {
const typeNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.typeName_, y_.typeName_);
if((typeNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return typeNameOrdering_
} else {
const dictionariesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Dictionary).compare_(x_.dictionaries_, y_.dictionaries_);
if((dictionariesOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Signature = {
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
const memberOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.member_, y_.member_);
if((memberOrdering_ !== ff_core_Ordering.OrderingSame())) {
return memberOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const parametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.parameters_, y_.parameters_);
if((parametersOrdering_ !== ff_core_Ordering.OrderingSame())) {
return parametersOrdering_
} else {
const returnTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.returnType_, y_.returnType_);
if((returnTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return returnTypeOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
const memberOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.member_, y_.member_);
if((memberOrdering_ !== ff_core_Ordering.OrderingSame())) {
return memberOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
const parametersOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.parameters_, y_.parameters_);
if((parametersOrdering_ !== ff_core_Ordering.OrderingSame())) {
return parametersOrdering_
} else {
const returnTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.returnType_, y_.returnType_);
if((returnTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return returnTypeOrdering_
} else {
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Lambda = {
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
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const casesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchCase).compare_(x_.cases_, y_.cases_);
if((casesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return casesOrdering_
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
const effectOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.effect_, y_.effect_);
if((effectOrdering_ !== ff_core_Ordering.OrderingSame())) {
return effectOrdering_
} else {
const casesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_MatchCase).compare_(x_.cases_, y_.cases_);
if((casesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return casesOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Variant = {
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
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
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
const fieldsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Parameter).compare_(x_.fields_, y_.fields_);
if((fieldsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fieldsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Parameter = {
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
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const defaultOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term).compare_(x_.default_, y_.default_);
if((defaultOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
const mutableOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Bool_Bool.compare_(x_.mutable_, y_.mutable_);
if((mutableOrdering_ !== ff_core_Ordering.OrderingSame())) {
return mutableOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueTypeOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type.compare_(x_.valueType_, y_.valueType_);
if((valueTypeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueTypeOrdering_
} else {
const defaultOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term).compare_(x_.default_, y_.default_);
if((defaultOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Argument = {
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
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
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
const nameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Field = {
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
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
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
const valueOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Term.compare_(x_.value_, y_.value_);
if((valueOrdering_ !== ff_core_Ordering.OrderingSame())) {
return valueOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Constraint = {
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
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
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Type = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.TConstructor && y_a.TConstructor) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.TVariable && y_a.TVariable) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ !== ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.TConstructor) {
return 0
}
{
return 1
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
if(x_a.TConstructor && y_a.TConstructor) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const nameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.name_, y_.name_);
if((nameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nameOrdering_
} else {
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Type).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
if(x_a.TVariable && y_a.TVariable) {
const x_ = x_a;
const y_ = y_a;
const atOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.at_, y_.at_);
if((atOrdering_ !== ff_core_Ordering.OrderingSame())) {
return atOrdering_
} else {
const indexOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.index_, y_.index_);
if((indexOrdering_ !== ff_core_Ordering.OrderingSame())) {
return indexOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
{
function number_(z_) {
const z_a = z_;
if(z_a.TConstructor) {
return 0
}
{
return 1
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Safety = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
function number_(z_) {
const z_a = z_;
if(z_a.Safe) {
return 0
}
if(z_a.Unsafe) {
return 1
}
{
return 2
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
function number_(z_) {
const z_a = z_;
if(z_a.Safe) {
return 0
}
if(z_a.Unsafe) {
return 1
}
{
return 2
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Syntax_Version = {
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
const majorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.major_, y_.major_);
if((majorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return majorOrdering_
} else {
const minorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.minor_, y_.minor_);
if((minorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return minorOrdering_
} else {
const patchOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.patch_, y_.patch_);
if((patchOrdering_ !== ff_core_Ordering.OrderingSame())) {
return patchOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
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
const majorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.major_, y_.major_);
if((majorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return majorOrdering_
} else {
const minorOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.minor_, y_.minor_);
if((minorOrdering_ !== ff_core_Ordering.OrderingSame())) {
return minorOrdering_
} else {
const patchOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.patch_, y_.patch_);
if((patchOrdering_ !== ff_core_Ordering.OrderingSame())) {
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
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Location = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.line_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.column_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.Location(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.line_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.column_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.Location(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_CompileError = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.message_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Syntax.CompileError(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.message_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Syntax.CompileError(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_CompileErrors = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CompileError).serializeUsing_(serialization_, v_.errors_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
return ff_compiler_Syntax.CompileErrors(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CompileError).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CompileError).serializeUsing_(serialization_, v_.errors_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
return ff_compiler_Syntax.CompileErrors(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CompileError).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_ModuleWithPackageInfo = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 40), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).serializeUsing_(serialization_, v_.packageInfo_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Module.serializeUsing_(serialization_, v_.module_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 40), 0);
return ff_compiler_Syntax.ModuleWithPackageInfo(ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Module.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 40), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).serializeUsing_(serialization_, v_.packageInfo_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Module.serializeUsing_(serialization_, v_.module_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 40), 0);
return ff_compiler_Syntax.ModuleWithPackageInfo(ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Module.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_PackageInfo = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DPackage.serializeUsing_(serialization_, v_.package_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DDependency).serializeUsing_(serialization_, v_.dependencies_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInclude).serializeUsing_(serialization_, v_.includes_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.PackageInfo(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DPackage.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DDependency).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInclude).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DPackage.serializeUsing_(serialization_, v_.package_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DDependency).serializeUsing_(serialization_, v_.dependencies_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInclude).serializeUsing_(serialization_, v_.includes_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.PackageInfo(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DPackage.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DDependency).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInclude).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Module = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).serializeUsing_(serialization_, v_.imports_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DType).serializeUsing_(serialization_, v_.types_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).serializeUsing_(serialization_, v_.traits_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInstance).serializeUsing_(serialization_, v_.instances_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DExtend).serializeUsing_(serialization_, v_.extends_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DLet).serializeUsing_(serialization_, v_.lets_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.functions_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.Module(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DType).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInstance).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DExtend).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DLet).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).serializeUsing_(serialization_, v_.imports_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DType).serializeUsing_(serialization_, v_.types_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).serializeUsing_(serialization_, v_.traits_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInstance).serializeUsing_(serialization_, v_.instances_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DExtend).serializeUsing_(serialization_, v_.extends_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DLet).serializeUsing_(serialization_, v_.lets_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.functions_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.Module(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DType).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DInstance).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DExtend).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DLet).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.group_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.PackagePair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.group_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.PackagePair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DPackage = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.serializeUsing_(serialization_, v_.version_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.serializeUsing_(serialization_, v_.targets_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.DPackage(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.serializeUsing_(serialization_, v_.version_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.serializeUsing_(serialization_, v_.targets_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.DPackage(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DDependency = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.serializeUsing_(serialization_, v_.version_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Safety.serializeUsing_(serialization_, v_.safety_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.serializeUsing_(serialization_, v_.targets_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.DDependency(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Safety.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.serializeUsing_(serialization_, v_.version_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Safety.serializeUsing_(serialization_, v_.safety_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.serializeUsing_(serialization_, v_.targets_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.DDependency(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Version.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Safety.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DInclude = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.path_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.DInclude(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.path_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.DInclude(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_TargetNames = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.node_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.browser_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.TargetNames(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.node_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.browser_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.TargetNames(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DImport = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.alias_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.package_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.directory_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.DImport(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.alias_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.package_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.directory_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.DImport(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.serializeUsing_(serialization_, v_.signature_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.serializeUsing_(serialization_, v_.body_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.DFunction(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.serializeUsing_(serialization_, v_.signature_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.serializeUsing_(serialization_, v_.body_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.DFunction(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DLet = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.variableType_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.DLet(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.variableType_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.DLet(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DExtend = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.type_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.methods_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.DExtend(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.type_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.methods_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.DExtend(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DType = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.newtype_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.data_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.commonFields_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Variant).serializeUsing_(serialization_, v_.variants_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.DType(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Variant).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.newtype_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.data_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.commonFields_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Variant).serializeUsing_(serialization_, v_.variants_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.DType(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Variant).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DTrait = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.generatorParameters_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature).serializeUsing_(serialization_, v_.methods_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).serializeUsing_(serialization_, v_.methodDefaults_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).serializeUsing_(serialization_, v_.methodGenerators_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.DTrait(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.generatorParameters_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature).serializeUsing_(serialization_, v_.methods_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).serializeUsing_(serialization_, v_.methodDefaults_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).serializeUsing_(serialization_, v_.methodGenerators_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.DTrait(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String, ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda)).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_DInstance = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).serializeUsing_(serialization_, v_.generatorArguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.methods_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.derived_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.DInstance(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).serializeUsing_(serialization_, v_.generatorArguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.methods_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.derived_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.DInstance(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Term = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.EString) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EChar) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EInt) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EFloat) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EVariable) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_)
return
}
if(value_a.ELambda) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.serializeUsing_(serialization_, v_.lambda_)
return
}
if(value_a.EFunctions) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 6);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.functions_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.body_)
return
}
if(value_a.ELet) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 7);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.mutable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.valueType_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.body_)
return
}
if(value_a.ESequential) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 8);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.before_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.after_)
return
}
if(value_a.EAssign) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 9);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.operator_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variable_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EAssignField) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 10);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.operator_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.record_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.field_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EPipe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 11);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.function_)
return
}
if(value_a.ECall) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 12);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CallTarget.serializeUsing_(serialization_, v_.target_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).serializeUsing_(serialization_, v_.arguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).serializeUsing_(serialization_, v_.dictionaries_)
return
}
if(value_a.EList) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 13);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.elementType_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool)).serializeUsing_(serialization_, v_.items_)
return
}
if(value_a.ECopy) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 14);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.record_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).serializeUsing_(serialization_, v_.arguments_)
return
}
if(value_a.EVariant) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 15);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument)).serializeUsing_(serialization_, v_.arguments_)
return
}
if(value_a.EVariantIs) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 16);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_)
return
}
if(value_a.ERecord) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 17);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).serializeUsing_(serialization_, v_.fields_)
return
}
if(value_a.EField) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 18);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.newtype_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.record_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.field_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 19);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.index_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.EString(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.EChar(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.EInt(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.EFloat(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.EVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.ELambda(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.deserializeUsing_(serialization_))
}
if(_1 === 6) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.EFunctions(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 7) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.ELet(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 8) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.ESequential(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 9) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.EAssign(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 10) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Syntax.EAssignField(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 11) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.EPipe(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 12) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.ECall(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CallTarget.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).deserializeUsing_(serialization_))
}
if(_1 === 13) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.EList(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool)).deserializeUsing_(serialization_))
}
if(_1 === 14) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.ECopy(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).deserializeUsing_(serialization_))
}
if(_1 === 15) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.EVariant(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument)).deserializeUsing_(serialization_))
}
if(_1 === 16) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.EVariantIs(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
if(_1 === 17) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.ERecord(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).deserializeUsing_(serialization_))
}
if(_1 === 18) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.EField(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 19) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.EWildcard(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.EString) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EChar) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EInt) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EFloat) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EVariable) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_)
return
}
if(value_a.ELambda) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.serializeUsing_(serialization_, v_.lambda_)
return
}
if(value_a.EFunctions) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 6);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).serializeUsing_(serialization_, v_.functions_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.body_)
return
}
if(value_a.ELet) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 7);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.mutable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.valueType_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.body_)
return
}
if(value_a.ESequential) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 8);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.before_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.after_)
return
}
if(value_a.EAssign) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 9);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.operator_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variable_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EAssignField) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 10);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.operator_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.record_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.field_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.EPipe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 11);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.function_)
return
}
if(value_a.ECall) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 12);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CallTarget.serializeUsing_(serialization_, v_.target_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).serializeUsing_(serialization_, v_.arguments_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).serializeUsing_(serialization_, v_.dictionaries_)
return
}
if(value_a.EList) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 13);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.elementType_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool)).serializeUsing_(serialization_, v_.items_)
return
}
if(value_a.ECopy) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 14);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.record_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).serializeUsing_(serialization_, v_.arguments_)
return
}
if(value_a.EVariant) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 15);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument)).serializeUsing_(serialization_, v_.arguments_)
return
}
if(value_a.EVariantIs) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 16);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.typeArguments_)
return
}
if(value_a.ERecord) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 17);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).serializeUsing_(serialization_, v_.fields_)
return
}
if(value_a.EField) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 18);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.newtype_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.record_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.field_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 19);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.index_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.EString(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.EChar(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.EInt(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.EFloat(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.EVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.ELambda(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda.deserializeUsing_(serialization_))
}
if(_1 === 6) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.EFunctions(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_DFunction).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 7) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.ELet(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 8) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.ESequential(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 9) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.EAssign(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 10) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Syntax.EAssignField(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 11) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.EPipe(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
if(_1 === 12) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.ECall(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_CallTarget.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).deserializeUsing_(serialization_))
}
if(_1 === 13) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.EList(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Pair.ff_core_Serializable_Serializable$ff_core_Pair_Pair(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term, ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool)).deserializeUsing_(serialization_))
}
if(_1 === 14) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.ECopy(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).deserializeUsing_(serialization_))
}
if(_1 === 15) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.EVariant(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument)).deserializeUsing_(serialization_))
}
if(_1 === 16) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.EVariantIs(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
if(_1 === 17) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.ERecord(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Field).deserializeUsing_(serialization_))
}
if(_1 === 18) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.EField(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 19) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.EWildcard(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_CallTarget = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.DynamicCall) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.function_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.tailCall_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.tailCall_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.instanceCall_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.StaticCall(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.DynamicCall) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.function_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.tailCall_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.tailCall_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.instanceCall_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.StaticCall(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchCase = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).serializeUsing_(serialization_, v_.patterns_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchGuard).serializeUsing_(serialization_, v_.guards_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.body_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.MatchCase(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchGuard).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).serializeUsing_(serialization_, v_.patterns_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchGuard).serializeUsing_(serialization_, v_.guards_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.body_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.MatchCase(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchGuard).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.PString) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.PInt) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.PChar) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.PVariable) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.name_)
return
}
if(value_a.PVariant) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).serializeUsing_(serialization_, v_.patterns_)
return
}
if(value_a.PVariantAs) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.variableAt_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.variable_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 6);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.serializeUsing_(serialization_, v_.pattern_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variable_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.PString(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.PInt(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.PChar(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.PVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.PVariant(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).deserializeUsing_(serialization_))
}
if(_1 === 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.PVariantAs(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
if(_1 === 6) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.PAlias(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.PString) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.PInt) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.PChar) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.value_)
return
}
if(value_a.PVariable) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.name_)
return
}
if(value_a.PVariant) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).serializeUsing_(serialization_, v_.patterns_)
return
}
if(value_a.PVariantAs) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.variableAt_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.variable_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 6);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.serializeUsing_(serialization_, v_.pattern_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.variable_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.PString(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.PInt(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.PChar(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
if(_1 === 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.PVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
if(_1 === 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.PVariant(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern).deserializeUsing_(serialization_))
}
if(_1 === 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.PVariantAs(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
}
if(_1 === 6) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.PAlias(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchGuard = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.term_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.serializeUsing_(serialization_, v_.pattern_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.MatchGuard(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.term_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.serializeUsing_(serialization_, v_.pattern_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.MatchGuard(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchPattern.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.moduleName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.typeName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).serializeUsing_(serialization_, v_.dictionaries_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.Dictionary(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.serializeUsing_(serialization_, v_.packagePair_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.moduleName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.traitName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.typeName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).serializeUsing_(serialization_, v_.dictionaries_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.Dictionary(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_PackagePair.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Dictionary).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Signature = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.member_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.parameters_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.returnType_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.Signature(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.member_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.parameters_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.returnType_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.Signature(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchCase).serializeUsing_(serialization_, v_.cases_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.Lambda(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchCase).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.effect_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchCase).serializeUsing_(serialization_, v_.cases_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.Lambda(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_MatchCase).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Variant = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.fields_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.Variant(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).serializeUsing_(serialization_, v_.fields_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.Variant(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Parameter = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.mutable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.valueType_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term).serializeUsing_(serialization_, v_.default_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.Parameter(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.serializeUsing_(serialization_, v_.mutable_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.serializeUsing_(serialization_, v_.valueType_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term).serializeUsing_(serialization_, v_.default_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.Parameter(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Bool_Bool.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Argument = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.Argument(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Syntax.Argument(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Field = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.Field(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.serializeUsing_(serialization_, v_.value_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Syntax.Field(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Term.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.generics_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.Constraint(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.generics_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Syntax.Constraint(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Type = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.TConstructor) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.generics_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.index_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.TVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.TConstructor) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.name_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).serializeUsing_(serialization_, v_.generics_)
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.index_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Syntax.TConstructor(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Type).deserializeUsing_(serialization_))
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Syntax.TVariable(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Safety = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.Safe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
if(value_a.Unsafe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.Safe()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.Unsafe()
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.Trusted()
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
if(value_a.Safe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
if(value_a.Unsafe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Syntax.Safe()
}
if(_1 === 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Syntax.Unsafe()
}
if(_1 === 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.Trusted()
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Syntax_Version = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.major_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.minor_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.patch_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.Version(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.at_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.major_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.minor_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.patch_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Syntax.Version(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};


