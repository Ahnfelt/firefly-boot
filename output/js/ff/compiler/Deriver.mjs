

import * as ff_compiler_Deriver from "../../ff/compiler/Deriver.mjs"

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

// type Deriver
const Deriver$ = {Deriver: true};
export function Deriver() {
return Deriver$;
}



export function new_() {
return ff_compiler_Deriver.Deriver()
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function new_$($task) {
return ff_compiler_Deriver.Deriver()
}

export async function fail_$(at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Deriver_deriveModule(self_, module_) {
const modulePrefix_ = ff_compiler_Syntax.ModuleKey_qualifiedName(module_.moduleKey_);
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, _c.types_, _c.traits_, [...module_.instances_, ...ff_compiler_Deriver.Deriver_makeHasAnyTagInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeShowInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeEqualInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeOrderingInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeSerializableInstances(self_, modulePrefix_, module_)], _c.extends_, _c.lets_, _c.functions_)
}
}
}

export function Deriver_makeHasAnyTagInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Serializable.DeserializationChecksumException", "ff:core/Core.GrabException", "ff:core/NodeSystem.ProcessException", "ff:core/Unit.Unit", "ff:core/Pair.Pair", "ff:core/Option.Option", "ff:core/Int.Int", "ff:core/Float.Float", "ff:core/String.String", "ff:core/Char.Char", "ff:core/Bool.Bool", "ff:core/List.List"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Any.HasAnyTag", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeHasAnyTagInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeHasAnyTagInstance(self_, modulePrefix_, declaration_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Any.HasAnyTag", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfTypeName_ = ((modulePrefix_ + ".") + declaration_.name_);
const selfType_ = ff_compiler_Syntax.TConstructor(at_, selfTypeName_, typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "anyTag", false, [], [], [], ff_compiler_Syntax.TConstructor(at_, "ff:core/Any.AnyTag", [selfType_]), noEffect_);
const typeArgumentStrings_ = ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Any.anyTag", [], [_w1]), "show", [])
}));
const strings_ = [ff_compiler_Syntax.EString(at_, "\"[\""), ...ff_core_List.List_separate(typeArgumentStrings_, [ff_compiler_Syntax.EString(at_, "\",\"")]), ff_compiler_Syntax.EString(at_, "\"]\"")];
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [], [], ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Any.internalAnyTag", [ff_core_List.List_foldLeft(strings_, ff_compiler_Syntax.EString(at_, (("\"" + selfTypeName_) + "\"")), ((a_, b_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", [a_, b_], [])
}))], []))]);
const method_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Any.HasAnyTag", [selfType_], [], [method_], true)
}

export function Deriver_makeShowInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option", "ff:core/Serializable.DeserializationChecksumException", "ff:core/Core.GrabException", "ff:core/NodeSystem.ProcessException"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Show.Show", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeShowInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeShowInstance(self_, modulePrefix_, declaration_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Show.Show", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "show", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "value", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/String.String", []), noEffect_);
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeShowCases(self_, modulePrefix_, declaration_, selfType_));
const showMethod_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Show.Show", [selfType_], [], [showMethod_], true)
}

export function Deriver_makeShowCases(self_, modulePrefix_, declaration_, selfType_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
{
const _1 = declaration_.variants_;
{
const variants_ = _1;
return ff_core_List.List_map(variants_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const strings_ = ((fields_.length === 0)
? []
: [ff_compiler_Syntax.EString(at_, "\"(\""), ...ff_core_List.List_separate(ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Show.show", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "z"), field_.name_)], [])
})), [ff_compiler_Syntax.EString(at_, "\", \"")]), ff_compiler_Syntax.EString(at_, "\")\"")]);
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("z"))], [], ff_core_List.List_foldLeft(strings_, ff_compiler_Syntax.EString(at_, (("\"" + variant_.name_) + "\"")), ((a_, b_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", [a_, b_], [])
})))
}))
return
}
}
}

export function Deriver_makeOrderingInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Ordering.Order", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeOrderingInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeOrderingInstance(self_, modulePrefix_, declaration_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Ordering.Order", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "compare", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "x", selfType_, ff_core_Option.None()), ff_compiler_Syntax.Parameter(at_, false, "y", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/Ordering.Ordering", []), noEffect_);
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeOrderingCases(self_, modulePrefix_, declaration_, selfType_));
const compareMethod_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Ordering.Order", [selfType_], [], [compareMethod_], true)
}

export function Deriver_makeOrderingCases(self_, modulePrefix_, declaration_, selfType_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", [ff_compiler_Syntax.EVariable(at_, "x"), ff_compiler_Syntax.EVariable(at_, "y")], []), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", []))], ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", [], ff_core_Option.None()));
{
const _1 = declaration_.variants_;
if(_1.length === 1) {
const variant_ = _1[0];
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return [sameCase_, ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_))]
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("x")), ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("y"))], [], ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_))
}));
const intType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Int.Int", []);
const numberSignature_ = ff_compiler_Syntax.Signature(at_, "number", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "z", selfType_, ff_core_Option.None())], intType_, noEffect_);
const numberCases_ = ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.None())], [], ff_compiler_Syntax.EInt(at_, ("" + index_)))
}
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Syntax.EFunctions(at_, [ff_compiler_Syntax.DFunction(at_, numberSignature_, ff_compiler_Syntax.Lambda(at_, noEffect_, numberCases_))], ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", [ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", [ff_compiler_Syntax.EVariable(at_, "x")], []), ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", [ff_compiler_Syntax.EVariable(at_, "y")], [])], [])));
return [sameCase_, ...sameVariantCases_, differentVariant_]
}
}
}

export function Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const orderingType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Ordering.Ordering", []);
const orderingSame_ = ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", [], ff_core_Option.None());
function go_(fields_) {
const fields_a = fields_;
if(fields_a.length === 0) {
return orderingSame_
}
{
const head_ = fields_a[0];
const tail_ = fields_a.slice(1);
const variableName_ = (head_.name_ + "Ordering");
const compareTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_)], []);
const notEqualTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "!==", [ff_compiler_Syntax.EVariable(at_, variableName_), orderingSame_], []);
const ifTerm_ = ff_compiler_Deriver.Deriver_makeIf(self_, at_, notEqualTerm_, ff_compiler_Syntax.EVariable(at_, variableName_), go_(tail_));
return ff_compiler_Syntax.ELet(at_, false, variableName_, orderingType_, compareTerm_, ifTerm_)
}
}
return go_(fields_)
}

export function Deriver_makeEqualInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option", "ff:core/List.List", "ff:core/Pair.Pair", "ff:core/Unit.Unit"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Equal.Equal", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeEqualInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeEqualInstance(self_, modulePrefix_, declaration_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Equal.Equal", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "equals", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "x", selfType_, ff_core_Option.None()), ff_compiler_Syntax.Parameter(at_, false, "y", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/Bool.Bool", []), noEffect_);
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeEqualsCases(self_, modulePrefix_, declaration_, selfType_));
const equalsMethod_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Equal.Equal", [selfType_], [], [equalsMethod_], true)
}

export function Deriver_makeEqualsCases(self_, modulePrefix_, declaration_, selfType_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", [ff_compiler_Syntax.EVariable(at_, "x"), ff_compiler_Syntax.EVariable(at_, "y")], []), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", []))], ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", [], ff_core_Option.None()));
{
const _1 = declaration_.variants_;
if(_1.length === 1) {
const variant_ = _1[0];
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return [sameCase_, ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_))]
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("x")), ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("y"))], [], ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_))
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.False", [], ff_core_Option.None()));
return [sameCase_, ...sameVariantCases_, differentVariant_]
}
}
}

export function Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
function go_(fields_) {
const fields_a = fields_;
if(fields_a.length === 0) {
return ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", [], ff_core_Option.None())
}
if(fields_a.length === 1) {
const head_ = fields_a[0];
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_)], [])
}
{
const head_ = fields_a[0];
const tail_ = fields_a.slice(1);
const equalsTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_)], []);
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "&&", [equalsTerm_, go_(tail_)], [])
}
}
return go_(fields_)
}

export function Deriver_makeSerializableInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option", "ff:core/Pair.Pair"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Serializable.Serializable", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeSerializableInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeSerializableInstance(self_, modulePrefix_, declaration_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Serializable.Serializable", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const serializationType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Serializable.Serialization", []);
const serializeSignature_ = ff_compiler_Syntax.Signature(at_, "serializeUsing", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "serialization", serializationType_, ff_core_Option.None()), ff_compiler_Syntax.Parameter(at_, false, "value", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/Unit.Unit", []), noEffect_);
const deserializeSignature_ = ff_compiler_Syntax.Signature(at_, "deserializeUsing", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "serialization", serializationType_, ff_core_Option.None())], selfType_, noEffect_);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const serializeBody_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeSerializeBody(self_, modulePrefix_, declaration_, selfType_));
const deserializeBody_ = ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeDeserializeBody(self_, modulePrefix_, declaration_, selfType_))]);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Serializable.Serializable", [selfType_], [], [ff_compiler_Syntax.DFunction(at_, serializeSignature_, serializeBody_), ff_compiler_Syntax.DFunction(at_, deserializeSignature_, deserializeBody_)], true)
}

export function Deriver_makeSerializeBody(self_, modulePrefix_, declaration_, selfType_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
return ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const updateChecksum_ = ff_compiler_Deriver.Deriver_makeUpdateChecksum(self_, at_, variantName_, declaration_, variant_);
const autoResize_ = ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Syntax.EVariable(at_, "serialization"), "autoResize", [ff_compiler_Syntax.EInt(at_, "1")]);
const setVariantIndex_ = ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "buffer"), "setUint8", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "offset"), ff_compiler_Syntax.EInt(at_, ("" + index_))]);
const fieldSerializations_ = ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Serializable.serializeUsing", [ff_compiler_Syntax.EVariable(at_, "serialization"), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "v"), field_.name_)], [])
}));
return ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("v"))], [], ff_core_List.List_foldLeft([autoResize_, setVariantIndex_, ff_compiler_Syntax.EAssignField(at_, "+", ff_compiler_Syntax.EVariable(at_, "serialization"), "offset", ff_compiler_Syntax.EInt(at_, "1")), ...fieldSerializations_], updateChecksum_, ((_w1, _w2) => {
return ff_compiler_Syntax.ESequential(at_, _w1, _w2)
})))
return
}
}))
}

export function Deriver_makeDeserializeBody(self_, modulePrefix_, declaration_, selfType_) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const grabVariantIndex_ = ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "buffer"), "grabUint8", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "offset")]);
const intType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Int.Int", []);
const incrementOffset_ = ff_compiler_Syntax.EAssignField(at_, "+", ff_compiler_Syntax.EVariable(at_, "serialization"), "offset", ff_compiler_Syntax.EInt(at_, "1"));
const cases_ = ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const fieldValues_ = ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Serializable.deserializeUsing", [ff_compiler_Syntax.EVariable(at_, "serialization")], []))
}));
const updateChecksum_ = ff_compiler_Deriver.Deriver_makeUpdateChecksum(self_, at_, variantName_, declaration_, variant_);
const makeVariant_ = ff_compiler_Syntax.EVariant(at_, variantName_, [], ff_core_Option.Some(fieldValues_));
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PInt(at_, ("" + index_))], [], ff_compiler_Syntax.ESequential(at_, updateChecksum_, makeVariant_))
}
}));
const otherwiseCase_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Core.throw", [ff_compiler_Syntax.EVariant(at_, "ff:core/Serializable.DeserializationChecksumException", [], ff_core_Option.None())], []));
const matchLambda_ = ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, [...cases_, otherwiseCase_]));
const match_ = ff_compiler_Syntax.EPipe(at_, ff_compiler_Syntax.EVariable(at_, "variantIndex"), noEffect_, matchLambda_);
return ff_compiler_Syntax.ELet(at_, false, "variantIndex", intType_, grabVariantIndex_, ff_compiler_Syntax.ESequential(at_, incrementOffset_, match_))
}

export function Deriver_makeUpdateChecksum(self_, at_, variantName_, declaration_, variant_) {
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const variantChecksum_ = variantName_.length;
return ff_compiler_Syntax.EAssignField(at_, "", ff_compiler_Syntax.EVariable(at_, "serialization"), "checksum", ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", [ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "*", [ff_compiler_Syntax.EInt(at_, "31"), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "checksum")], []), ff_compiler_Syntax.EInt(at_, ("" + variantChecksum_))], []), "bitOr", [ff_compiler_Syntax.EInt(at_, "0")]))
}

export function Deriver_findTypesThatNeedInstances(self_, traitName_, modulePrefix_, coreWhitelist_, allowGenerics_, module_) {
const typesWithInstance_ = ff_core_List.List_toSet(ff_core_List.List_collect(module_.instances_, ((_1) => {
{
const instance_ = _1;
const _guard1 = ff_core_List.List_first(instance_.typeArguments_);
if(_guard1.Some && _guard1.value_.TConstructor) {
const name_ = _guard1.value_.name_;
if((instance_.traitName_ === traitName_)) {
return ff_core_Option.Some(name_)
} else return ff_core_Option.None()
return
}
}
{
return ff_core_Option.None()
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_List.List_filter(module_.types_, ((t_) => {
return (((((((!ff_compiler_Syntax.PackagePair_isCore(module_.moduleKey_.packagePair_)) || ff_core_Set.Set_contains(coreWhitelist_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) && (!ff_core_Option.Option_any(ff_core_List.List_first(t_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))) && (allowGenerics_ || ff_core_List.List_isEmpty(t_.generics_))) && t_.data_) && (!t_.newtype_)) && (!ff_core_Set.Set_contains(typesWithInstance_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}))
}

export function Deriver_makeSimpleCall(self_, at_, name_, arguments_, typeArguments_ = []) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const callTarget_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, name_), false);
return ff_compiler_Syntax.ECall(at_, callTarget_, noEffect_, typeArguments_, ff_core_List.List_map(arguments_, ((e_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), e_)
})), [])
}

export function Deriver_makeMethodCall(self_, at_, target_, methodName_, arguments_) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const method_ = ff_compiler_Syntax.EField(at_, false, target_, methodName_);
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(method_, false), noEffect_, [], ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), _w1)
})), [])
}

export function Deriver_makeIf(self_, at_, condition_, then_, else_) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, "ff:core/Core.if"), false);
const option_ = ff_compiler_Syntax.ECall(at_, target_, noEffect_, [], [ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), condition_), ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [], [], then_)])))], []);
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EField(at_, false, option_, "else"), false), noEffect_, [], [ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [], [], else_)])))], [])
}

export async function Deriver_deriveModule$(self_, module_, $task) {
const modulePrefix_ = ff_compiler_Syntax.ModuleKey_qualifiedName(module_.moduleKey_);
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.moduleKey_, _c.imports_, _c.types_, _c.traits_, [...module_.instances_, ...ff_compiler_Deriver.Deriver_makeHasAnyTagInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeShowInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeEqualInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeOrderingInstances(self_, modulePrefix_, module_), ...ff_compiler_Deriver.Deriver_makeSerializableInstances(self_, modulePrefix_, module_)], _c.extends_, _c.lets_, _c.functions_)
}
}
}

export async function Deriver_makeHasAnyTagInstances$(self_, modulePrefix_, module_, $task) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Serializable.DeserializationChecksumException", "ff:core/Core.GrabException", "ff:core/NodeSystem.ProcessException", "ff:core/Unit.Unit", "ff:core/Pair.Pair", "ff:core/Option.Option", "ff:core/Int.Int", "ff:core/Float.Float", "ff:core/String.String", "ff:core/Char.Char", "ff:core/Bool.Bool", "ff:core/List.List"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Any.HasAnyTag", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeHasAnyTagInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeHasAnyTagInstance$(self_, modulePrefix_, declaration_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Any.HasAnyTag", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfTypeName_ = ((modulePrefix_ + ".") + declaration_.name_);
const selfType_ = ff_compiler_Syntax.TConstructor(at_, selfTypeName_, typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "anyTag", false, [], [], [], ff_compiler_Syntax.TConstructor(at_, "ff:core/Any.AnyTag", [selfType_]), noEffect_);
const typeArgumentStrings_ = ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Any.anyTag", [], [_w1]), "show", [])
}));
const strings_ = [ff_compiler_Syntax.EString(at_, "\"[\""), ...ff_core_List.List_separate(typeArgumentStrings_, [ff_compiler_Syntax.EString(at_, "\",\"")]), ff_compiler_Syntax.EString(at_, "\"]\"")];
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [], [], ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Any.internalAnyTag", [ff_core_List.List_foldLeft(strings_, ff_compiler_Syntax.EString(at_, (("\"" + selfTypeName_) + "\"")), ((a_, b_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", [a_, b_], [])
}))], []))]);
const method_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Any.HasAnyTag", [selfType_], [], [method_], true)
}

export async function Deriver_makeShowInstances$(self_, modulePrefix_, module_, $task) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option", "ff:core/Serializable.DeserializationChecksumException", "ff:core/Core.GrabException", "ff:core/NodeSystem.ProcessException"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Show.Show", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeShowInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeShowInstance$(self_, modulePrefix_, declaration_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Show.Show", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "show", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "value", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/String.String", []), noEffect_);
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeShowCases(self_, modulePrefix_, declaration_, selfType_));
const showMethod_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Show.Show", [selfType_], [], [showMethod_], true)
}

export async function Deriver_makeShowCases$(self_, modulePrefix_, declaration_, selfType_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
{
const _1 = declaration_.variants_;
{
const variants_ = _1;
return ff_core_List.List_map(variants_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const strings_ = ((fields_.length === 0)
? []
: [ff_compiler_Syntax.EString(at_, "\"(\""), ...ff_core_List.List_separate(ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Show.show", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "z"), field_.name_)], [])
})), [ff_compiler_Syntax.EString(at_, "\", \"")]), ff_compiler_Syntax.EString(at_, "\")\"")]);
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("z"))], [], ff_core_List.List_foldLeft(strings_, ff_compiler_Syntax.EString(at_, (("\"" + variant_.name_) + "\"")), ((a_, b_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", [a_, b_], [])
})))
}))
return
}
}
}

export async function Deriver_makeOrderingInstances$(self_, modulePrefix_, module_, $task) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Ordering.Order", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeOrderingInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeOrderingInstance$(self_, modulePrefix_, declaration_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Ordering.Order", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "compare", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "x", selfType_, ff_core_Option.None()), ff_compiler_Syntax.Parameter(at_, false, "y", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/Ordering.Ordering", []), noEffect_);
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeOrderingCases(self_, modulePrefix_, declaration_, selfType_));
const compareMethod_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Ordering.Order", [selfType_], [], [compareMethod_], true)
}

export async function Deriver_makeOrderingCases$(self_, modulePrefix_, declaration_, selfType_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", [ff_compiler_Syntax.EVariable(at_, "x"), ff_compiler_Syntax.EVariable(at_, "y")], []), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", []))], ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", [], ff_core_Option.None()));
{
const _1 = declaration_.variants_;
if(_1.length === 1) {
const variant_ = _1[0];
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return [sameCase_, ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_))]
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("x")), ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("y"))], [], ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_))
}));
const intType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Int.Int", []);
const numberSignature_ = ff_compiler_Syntax.Signature(at_, "number", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "z", selfType_, ff_core_Option.None())], intType_, noEffect_);
const numberCases_ = ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.None())], [], ff_compiler_Syntax.EInt(at_, ("" + index_)))
}
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Syntax.EFunctions(at_, [ff_compiler_Syntax.DFunction(at_, numberSignature_, ff_compiler_Syntax.Lambda(at_, noEffect_, numberCases_))], ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", [ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", [ff_compiler_Syntax.EVariable(at_, "x")], []), ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", [ff_compiler_Syntax.EVariable(at_, "y")], [])], [])));
return [sameCase_, ...sameVariantCases_, differentVariant_]
}
}
}

export async function Deriver_makeOrderingFields$(self_, modulePrefix_, declaration_, fields_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const orderingType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Ordering.Ordering", []);
const orderingSame_ = ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", [], ff_core_Option.None());
function go_(fields_) {
const fields_a = fields_;
if(fields_a.length === 0) {
return orderingSame_
}
{
const head_ = fields_a[0];
const tail_ = fields_a.slice(1);
const variableName_ = (head_.name_ + "Ordering");
const compareTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_)], []);
const notEqualTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "!==", [ff_compiler_Syntax.EVariable(at_, variableName_), orderingSame_], []);
const ifTerm_ = ff_compiler_Deriver.Deriver_makeIf(self_, at_, notEqualTerm_, ff_compiler_Syntax.EVariable(at_, variableName_), go_(tail_));
return ff_compiler_Syntax.ELet(at_, false, variableName_, orderingType_, compareTerm_, ifTerm_)
}
}
return go_(fields_)
}

export async function Deriver_makeEqualInstances$(self_, modulePrefix_, module_, $task) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option", "ff:core/List.List", "ff:core/Pair.Pair", "ff:core/Unit.Unit"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Equal.Equal", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeEqualInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeEqualInstance$(self_, modulePrefix_, declaration_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Equal.Equal", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const signature_ = ff_compiler_Syntax.Signature(at_, "equals", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "x", selfType_, ff_core_Option.None()), ff_compiler_Syntax.Parameter(at_, false, "y", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/Bool.Bool", []), noEffect_);
const body_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeEqualsCases(self_, modulePrefix_, declaration_, selfType_));
const equalsMethod_ = ff_compiler_Syntax.DFunction(at_, signature_, body_);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Equal.Equal", [selfType_], [], [equalsMethod_], true)
}

export async function Deriver_makeEqualsCases$(self_, modulePrefix_, declaration_, selfType_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", [ff_compiler_Syntax.EVariable(at_, "x"), ff_compiler_Syntax.EVariable(at_, "y")], []), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", []))], ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", [], ff_core_Option.None()));
{
const _1 = declaration_.variants_;
if(_1.length === 1) {
const variant_ = _1[0];
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return [sameCase_, ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_))]
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("x")), ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("y"))], [], ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_))
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, wildcardPattern_], [], ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.False", [], ff_core_Option.None()));
return [sameCase_, ...sameVariantCases_, differentVariant_]
}
}
}

export async function Deriver_makeEqualFields$(self_, modulePrefix_, declaration_, fields_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
function go_(fields_) {
const fields_a = fields_;
if(fields_a.length === 0) {
return ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", [], ff_core_Option.None())
}
if(fields_a.length === 1) {
const head_ = fields_a[0];
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_)], [])
}
{
const head_ = fields_a[0];
const tail_ = fields_a.slice(1);
const equalsTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_)], []);
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "&&", [equalsTerm_, go_(tail_)], [])
}
}
return go_(fields_)
}

export async function Deriver_makeSerializableInstances$(self_, modulePrefix_, module_, $task) {
const coreWhitelist_ = ff_core_List.List_toSet(["ff:core/Option.Option", "ff:core/Pair.Pair"], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Serializable.Serializable", modulePrefix_, coreWhitelist_, true, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeSerializableInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeSerializableInstance$(self_, modulePrefix_, declaration_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(at_, "ff:core/Serializable.Serializable", [ff_compiler_Syntax.TConstructor(at_, t_, [])])
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(at_, t_, [])
}));
const selfType_ = ff_compiler_Syntax.TConstructor(at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const serializationType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Serializable.Serialization", []);
const serializeSignature_ = ff_compiler_Syntax.Signature(at_, "serializeUsing", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "serialization", serializationType_, ff_core_Option.None()), ff_compiler_Syntax.Parameter(at_, false, "value", selfType_, ff_core_Option.None())], ff_compiler_Syntax.TConstructor(at_, "ff:core/Unit.Unit", []), noEffect_);
const deserializeSignature_ = ff_compiler_Syntax.Signature(at_, "deserializeUsing", false, [], [], [ff_compiler_Syntax.Parameter(at_, false, "serialization", serializationType_, ff_core_Option.None())], selfType_, noEffect_);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const serializeBody_ = ff_compiler_Syntax.Lambda(at_, noEffect_, ff_compiler_Deriver.Deriver_makeSerializeBody(self_, modulePrefix_, declaration_, selfType_));
const deserializeBody_ = ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeDeserializeBody(self_, modulePrefix_, declaration_, selfType_))]);
return ff_compiler_Syntax.DInstance(at_, declaration_.generics_, constraints_, "ff:core/Serializable.Serializable", [selfType_], [], [ff_compiler_Syntax.DFunction(at_, serializeSignature_, serializeBody_), ff_compiler_Syntax.DFunction(at_, deserializeSignature_, deserializeBody_)], true)
}

export async function Deriver_makeSerializeBody$(self_, modulePrefix_, declaration_, selfType_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
return ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const updateChecksum_ = ff_compiler_Deriver.Deriver_makeUpdateChecksum(self_, at_, variantName_, declaration_, variant_);
const autoResize_ = ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Syntax.EVariable(at_, "serialization"), "autoResize", [ff_compiler_Syntax.EInt(at_, "1")]);
const setVariantIndex_ = ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "buffer"), "setUint8", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "offset"), ff_compiler_Syntax.EInt(at_, ("" + index_))]);
const fieldSerializations_ = ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Serializable.serializeUsing", [ff_compiler_Syntax.EVariable(at_, "serialization"), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "v"), field_.name_)], [])
}));
return ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_, ff_compiler_Syntax.PVariantAs(at_, variantName_, at_, ff_core_Option.Some("v"))], [], ff_core_List.List_foldLeft([autoResize_, setVariantIndex_, ff_compiler_Syntax.EAssignField(at_, "+", ff_compiler_Syntax.EVariable(at_, "serialization"), "offset", ff_compiler_Syntax.EInt(at_, "1")), ...fieldSerializations_], updateChecksum_, ((_w1, _w2) => {
return ff_compiler_Syntax.ESequential(at_, _w1, _w2)
})))
return
}
}))
}

export async function Deriver_makeDeserializeBody$(self_, modulePrefix_, declaration_, selfType_, $task) {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((declaration_.at_.file_ + "/<derived>"), _c.line_, _c.column_)
}))(declaration_.at_);
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const grabVariantIndex_ = ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "buffer"), "grabUint8", [ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "offset")]);
const intType_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Int.Int", []);
const incrementOffset_ = ff_compiler_Syntax.EAssignField(at_, "+", ff_compiler_Syntax.EVariable(at_, "serialization"), "offset", ff_compiler_Syntax.EInt(at_, "1"));
const cases_ = ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const fieldValues_ = ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Serializable.deserializeUsing", [ff_compiler_Syntax.EVariable(at_, "serialization")], []))
}));
const updateChecksum_ = ff_compiler_Deriver.Deriver_makeUpdateChecksum(self_, at_, variantName_, declaration_, variant_);
const makeVariant_ = ff_compiler_Syntax.EVariant(at_, variantName_, [], ff_core_Option.Some(fieldValues_));
return ff_compiler_Syntax.MatchCase(at_, [ff_compiler_Syntax.PInt(at_, ("" + index_))], [], ff_compiler_Syntax.ESequential(at_, updateChecksum_, makeVariant_))
}
}));
const otherwiseCase_ = ff_compiler_Syntax.MatchCase(at_, [wildcardPattern_], [], ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Core.throw", [ff_compiler_Syntax.EVariant(at_, "ff:core/Serializable.DeserializationChecksumException", [], ff_core_Option.None())], []));
const matchLambda_ = ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, [...cases_, otherwiseCase_]));
const match_ = ff_compiler_Syntax.EPipe(at_, ff_compiler_Syntax.EVariable(at_, "variantIndex"), noEffect_, matchLambda_);
return ff_compiler_Syntax.ELet(at_, false, "variantIndex", intType_, grabVariantIndex_, ff_compiler_Syntax.ESequential(at_, incrementOffset_, match_))
}

export async function Deriver_makeUpdateChecksum$(self_, at_, variantName_, declaration_, variant_, $task) {
const fields_ = [...declaration_.commonFields_, ...variant_.fields_];
const variantChecksum_ = variantName_.length;
return ff_compiler_Syntax.EAssignField(at_, "", ff_compiler_Syntax.EVariable(at_, "serialization"), "checksum", ff_compiler_Deriver.Deriver_makeMethodCall(self_, at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", [ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "*", [ff_compiler_Syntax.EInt(at_, "31"), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "serialization"), "checksum")], []), ff_compiler_Syntax.EInt(at_, ("" + variantChecksum_))], []), "bitOr", [ff_compiler_Syntax.EInt(at_, "0")]))
}

export async function Deriver_findTypesThatNeedInstances$(self_, traitName_, modulePrefix_, coreWhitelist_, allowGenerics_, module_, $task) {
const typesWithInstance_ = ff_core_List.List_toSet(ff_core_List.List_collect(module_.instances_, ((_1) => {
{
const instance_ = _1;
const _guard1 = ff_core_List.List_first(instance_.typeArguments_);
if(_guard1.Some && _guard1.value_.TConstructor) {
const name_ = _guard1.value_.name_;
if((instance_.traitName_ === traitName_)) {
return ff_core_Option.Some(name_)
} else return ff_core_Option.None()
return
}
}
{
return ff_core_Option.None()
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_List.List_filter(module_.types_, ((t_) => {
return (((((((!ff_compiler_Syntax.PackagePair_isCore(module_.moduleKey_.packagePair_)) || ff_core_Set.Set_contains(coreWhitelist_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) && (!ff_core_Option.Option_any(ff_core_List.List_first(t_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))) && (allowGenerics_ || ff_core_List.List_isEmpty(t_.generics_))) && t_.data_) && (!t_.newtype_)) && (!ff_core_Set.Set_contains(typesWithInstance_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}))
}

export async function Deriver_makeSimpleCall$(self_, at_, name_, arguments_, typeArguments_ = [], $task) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const callTarget_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, name_), false);
return ff_compiler_Syntax.ECall(at_, callTarget_, noEffect_, typeArguments_, ff_core_List.List_map(arguments_, ((e_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), e_)
})), [])
}

export async function Deriver_makeMethodCall$(self_, at_, target_, methodName_, arguments_, $task) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const method_ = ff_compiler_Syntax.EField(at_, false, target_, methodName_);
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(method_, false), noEffect_, [], ff_core_List.List_map(arguments_, ((_w1) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), _w1)
})), [])
}

export async function Deriver_makeIf$(self_, at_, condition_, then_, else_, $task) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, "ff:core/Core.if"), false);
const option_ = ff_compiler_Syntax.ECall(at_, target_, noEffect_, [], [ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), condition_), ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [], [], then_)])))], []);
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EField(at_, false, option_, "else"), false), noEffect_, [], [ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, [ff_compiler_Syntax.MatchCase(at_, [], [], else_)])))], [])
}

export const ff_core_Any_HasAnyTag$ff_compiler_Deriver_Deriver = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Deriver.Deriver" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Deriver.Deriver" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Deriver_Deriver = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return "Deriver"
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return "Deriver"
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Deriver_Deriver = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return true
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return true
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Deriver_Deriver = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
return ff_core_Ordering.OrderingSame()
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
return ff_core_Ordering.OrderingSame()
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Deriver_Deriver = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Deriver.Deriver()
}
{
return ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Deriver.Deriver()
}
{
return ff_core_Core.throw_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException, ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException)
}
}
}
};
