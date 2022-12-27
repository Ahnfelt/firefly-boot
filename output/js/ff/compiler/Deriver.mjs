

import * as ff_compiler_Deriver from "../../ff/compiler/Deriver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

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

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_Table from "../../ff/core/Table.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Deriver
const Deriver$ = {Deriver: true};
export function Deriver() {
return Deriver$;
}



export function make_() {
return ff_compiler_Deriver.Deriver()
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function make_$($c) {
return ff_compiler_Deriver.Deriver()
}

export async function fail_$(at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Deriver_deriveModule(self_, module_) {
const modulePrefix_ = ((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(module_.file_, 3));
const showInstances_ = ff_compiler_Deriver.Deriver_makeShowInstances(self_, modulePrefix_, module_);
const equalInstances_ = ff_compiler_Deriver.Deriver_makeEqualInstances(self_, modulePrefix_, module_);
const orderingInstances_ = ff_compiler_Deriver.Deriver_makeOrderingInstances(self_, modulePrefix_, module_);
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, _c.imports_, _c.types_, _c.traits_, ff_core_List.List_addAll(module_.instances_, ff_core_List.List_addAll(showInstances_, ff_core_List.List_addAll(equalInstances_, orderingInstances_))), _c.extends_, _c.lets_, _c.functions_)
return
}
}
}

export function Deriver_makeShowInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Option.Option", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Show.Show", modulePrefix_, coreWhitelist_, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeShowInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeShowInstance(self_, modulePrefix_, declaration_) {
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(declaration_.at_, "ff:core/Show.Show", ff_core_List.Link(ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty()), ff_core_List.Empty()))
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty())
}));
const selfType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const signature_ = ff_compiler_Syntax.Signature(declaration_.at_, "show", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "x", selfType_, ff_core_Option.None()), ff_core_List.Empty()), ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/String.String", ff_core_List.Empty()), noEffect_);
const body_ = ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(declaration_.at_, noEffect_, ff_compiler_Deriver.Deriver_makeShowCases(self_, modulePrefix_, declaration_, selfType_)));
const showMethod_ = ff_compiler_Syntax.DFunction(declaration_.at_, signature_, body_);
return ff_compiler_Syntax.DInstance(declaration_.at_, declaration_.generics_, constraints_, "ff:core/Show.Show", ff_core_List.Link(selfType_, ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.Link(showMethod_, ff_core_List.Empty()))
}

export function Deriver_makeShowCases(self_, modulePrefix_, declaration_, selfType_) {
const at_ = declaration_.at_;
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
{
const _1 = declaration_.variants_;
{
const variants_ = _1;
return ff_core_List.List_map(variants_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
const strings_ = ((ff_core_List.List_size(fields_) === 0)
? ff_core_List.Empty()
: ff_core_List.Link(ff_compiler_Syntax.EString(at_, "\"(\""), ff_core_List.List_addAll(ff_core_List.List_insertBetween(ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Show.show", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "z"), field_.name_), ff_core_List.Empty()))
})), ff_core_List.Link(ff_compiler_Syntax.EString(at_, "\", \""), ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Syntax.EString(at_, "\")\""), ff_core_List.Empty()))));
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("z")), ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.List_foldLeft(strings_, ff_compiler_Syntax.EString(at_, (("\"" + variant_.name_) + "\"")), ((a_, b_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", ff_core_List.Link(a_, ff_core_List.Link(b_, ff_core_List.Empty())))
})))
}))
return
}
}
}

export function Deriver_makeOrderingInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Option.Option", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Ordering.Order", modulePrefix_, coreWhitelist_, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeOrderingInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeOrderingInstance(self_, modulePrefix_, declaration_) {
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(declaration_.at_, "ff:core/Ordering.Order", ff_core_List.Link(ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty()), ff_core_List.Empty()))
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty())
}));
const selfType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const signature_ = ff_compiler_Syntax.Signature(declaration_.at_, "compare", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "x", selfType_, ff_core_Option.None()), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "y", selfType_, ff_core_Option.None()), ff_core_List.Empty())), ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Ordering.Ordering", ff_core_List.Empty()), noEffect_);
const body_ = ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(declaration_.at_, noEffect_, ff_compiler_Deriver.Deriver_makeOrderingCases(self_, modulePrefix_, declaration_, selfType_)));
const compareMethod_ = ff_compiler_Syntax.DFunction(declaration_.at_, signature_, body_);
return ff_compiler_Syntax.DInstance(declaration_.at_, declaration_.generics_, constraints_, "ff:core/Ordering.Order", ff_core_List.Link(selfType_, ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.Link(compareMethod_, ff_core_List.Empty()))
}

export function Deriver_makeOrderingCases(self_, modulePrefix_, declaration_, selfType_) {
const at_ = declaration_.at_;
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "x"), ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "y"), ff_core_List.Empty()))), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", ff_core_List.Empty())), ff_core_List.Empty()), ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", ff_core_List.Empty(), ff_core_Option.None()));
{
const _1 = declaration_.variants_;
{
if(_1.Link) {
const variant_ = _1.head_;
if(_1.tail_.Empty) {
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_core_List.Link(sameCase_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_)), ff_core_List.Empty()))
return
}
}
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("x")), ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("y")), ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_))
}));
const intType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Int.Int", ff_core_List.Empty());
const numberSignature_ = ff_compiler_Syntax.Signature(at_, "number", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(at_, false, "z", selfType_, ff_core_Option.None()), ff_core_List.Empty()), intType_, noEffect_);
const numberCases_ = ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.None()), ff_core_List.Empty()), ff_core_List.Empty(), ff_compiler_Syntax.EInt(at_, ("" + index_)))
return
}
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Syntax.EFunctions(at_, ff_core_List.Link(ff_compiler_Syntax.DFunction(at_, numberSignature_, ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(at_, noEffect_, numberCases_))), ff_core_List.Empty()), ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", ff_core_List.Link(ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "x"), ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "y"), ff_core_List.Empty())), ff_core_List.Empty())))));
return ff_core_List.Link(sameCase_, ff_core_List.List_addAll(sameVariantCases_, ff_core_List.Link(differentVariant_, ff_core_List.Empty())))
return
}
}
}

export function Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_) {
const at_ = declaration_.at_;
const orderingType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Ordering.Ordering", ff_core_List.Empty());
const orderingSame_ = ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", ff_core_List.Empty(), ff_core_Option.None());
function go_(fields_) {
{
const fields_a = fields_;
{
if(fields_a.Empty) {
return orderingSame_
return
}
}
{
if(fields_a.Link) {
const head_ = fields_a.head_;
const tail_ = fields_a.tail_;
const variableName_ = (head_.name_ + "Ordering");
const compareTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_), ff_core_List.Empty())));
const notEqualTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "!==", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, variableName_), ff_core_List.Link(orderingSame_, ff_core_List.Empty())));
const ifTerm_ = ff_compiler_Deriver.Deriver_makeIf(self_, at_, notEqualTerm_, ff_compiler_Syntax.EVariable(at_, variableName_), go_(tail_));
return ff_compiler_Syntax.ELet(at_, false, variableName_, orderingType_, compareTerm_, ifTerm_)
return
}
}
}
}
return go_(fields_)
}

export function Deriver_makeEqualInstances(self_, modulePrefix_, module_) {
const coreWhitelist_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Option.Option", ff_core_List.Link("ff:core/List.List", ff_core_List.Link("ff:core/Pair.Pair", ff_core_List.Empty()))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Equal.Equal", modulePrefix_, coreWhitelist_, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeEqualInstance(self_, modulePrefix_, _w1)
}))
}

export function Deriver_makeEqualInstance(self_, modulePrefix_, declaration_) {
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(declaration_.at_, "ff:core/Equal.Equal", ff_core_List.Link(ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty()), ff_core_List.Empty()))
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty())
}));
const selfType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const signature_ = ff_compiler_Syntax.Signature(declaration_.at_, "equals", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "x", selfType_, ff_core_Option.None()), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "y", selfType_, ff_core_Option.None()), ff_core_List.Empty())), ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Bool.Bool", ff_core_List.Empty()), noEffect_);
const body_ = ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(declaration_.at_, noEffect_, ff_compiler_Deriver.Deriver_makeEqualsCases(self_, modulePrefix_, declaration_, selfType_)));
const equalsMethod_ = ff_compiler_Syntax.DFunction(declaration_.at_, signature_, body_);
return ff_compiler_Syntax.DInstance(declaration_.at_, declaration_.generics_, constraints_, "ff:core/Equal.Equal", ff_core_List.Link(selfType_, ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.Link(equalsMethod_, ff_core_List.Empty()))
}

export function Deriver_makeEqualsCases(self_, modulePrefix_, declaration_, selfType_) {
const at_ = declaration_.at_;
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "x"), ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "y"), ff_core_List.Empty()))), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", ff_core_List.Empty())), ff_core_List.Empty()), ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", ff_core_List.Empty(), ff_core_Option.None()));
{
const _1 = declaration_.variants_;
{
if(_1.Link) {
const variant_ = _1.head_;
if(_1.tail_.Empty) {
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_core_List.Link(sameCase_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_)), ff_core_List.Empty()))
return
}
}
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("x")), ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("y")), ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_))
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.False", ff_core_List.Empty(), ff_core_Option.None()));
return ff_core_List.Link(sameCase_, ff_core_List.List_addAll(sameVariantCases_, ff_core_List.Link(differentVariant_, ff_core_List.Empty())))
return
}
}
}

export function Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_) {
const at_ = declaration_.at_;
function go_(fields_) {
{
const fields_a = fields_;
{
if(fields_a.Empty) {
return ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", ff_core_List.Empty(), ff_core_Option.None())
return
}
}
{
if(fields_a.Link) {
const head_ = fields_a.head_;
if(fields_a.tail_.Empty) {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_), ff_core_List.Empty())))
return
}
}
}
{
if(fields_a.Link) {
const head_ = fields_a.head_;
const tail_ = fields_a.tail_;
const equalsTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_), ff_core_List.Empty())));
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "&&", ff_core_List.Link(equalsTerm_, ff_core_List.Link(go_(tail_), ff_core_List.Empty())))
return
}
}
}
}
return go_(fields_)
}

export function Deriver_findTypesThatNeedInstances(self_, traitName_, modulePrefix_, coreWhitelist_, module_) {
const typesWithInstance_ = ff_core_List.List_toSet(ff_core_List.List_collect(module_.instances_, ((_1) => {
{
const instance_ = _1;
const _guard1 = ff_core_List.List_first(instance_.typeArguments_);
if(_guard1.Some) {
if(_guard1.value_.TConstructor) {
const name_ = _guard1.value_.name_;
if((instance_.traitName_ === traitName_)) {
return ff_core_Option.Some(name_)
} else return ff_core_Option.None()
return
}
}
}
{
return ff_core_Option.None()
return
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_List.List_filter(module_.types_, ((t_) => {
return (((((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") !== "ff:core") || ff_core_Set.Set_contains(coreWhitelist_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) && (!ff_core_Option.Option_any(ff_core_List.List_first(t_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))) && (!t_.newtype_)) && (!ff_core_Set.Set_contains(typesWithInstance_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}))
}

export function Deriver_makeSimpleCall(self_, at_, name_, arguments_) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const callTarget_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, name_), false);
return ff_compiler_Syntax.ECall(at_, callTarget_, noEffect_, ff_core_List.Empty(), ff_core_List.List_map(arguments_, ((e_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), e_)
})), ff_core_List.Empty())
}

export function Deriver_makeIf(self_, at_, condition_, then_, else_) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, "ff:core/Core.if"), false);
const option_ = ff_compiler_Syntax.ECall(at_, target_, noEffect_, ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), condition_), ff_core_List.Link(ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Empty(), ff_core_List.Empty(), then_), ff_core_List.Empty())))), ff_core_List.Empty())), ff_core_List.Empty());
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EField(at_, false, option_, "else"), false), noEffect_, ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Empty(), ff_core_List.Empty(), else_), ff_core_List.Empty())))), ff_core_List.Empty()), ff_core_List.Empty())
}

export async function Deriver_deriveModule$(self_, module_, $c) {
const modulePrefix_ = ((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") + "/") + ff_core_String.String_dropLast(module_.file_, 3));
const showInstances_ = ff_compiler_Deriver.Deriver_makeShowInstances(self_, modulePrefix_, module_);
const equalInstances_ = ff_compiler_Deriver.Deriver_makeEqualInstances(self_, modulePrefix_, module_);
const orderingInstances_ = ff_compiler_Deriver.Deriver_makeOrderingInstances(self_, modulePrefix_, module_);
{
const _1 = module_;
{
const _c = _1;
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, _c.imports_, _c.types_, _c.traits_, ff_core_List.List_addAll(module_.instances_, ff_core_List.List_addAll(showInstances_, ff_core_List.List_addAll(equalInstances_, orderingInstances_))), _c.extends_, _c.lets_, _c.functions_)
return
}
}
}

export async function Deriver_makeShowInstances$(self_, modulePrefix_, module_, $c) {
const coreWhitelist_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Option.Option", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Show.Show", modulePrefix_, coreWhitelist_, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeShowInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeShowInstance$(self_, modulePrefix_, declaration_, $c) {
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(declaration_.at_, "ff:core/Show.Show", ff_core_List.Link(ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty()), ff_core_List.Empty()))
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty())
}));
const selfType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const signature_ = ff_compiler_Syntax.Signature(declaration_.at_, "show", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "x", selfType_, ff_core_Option.None()), ff_core_List.Empty()), ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/String.String", ff_core_List.Empty()), noEffect_);
const body_ = ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(declaration_.at_, noEffect_, ff_compiler_Deriver.Deriver_makeShowCases(self_, modulePrefix_, declaration_, selfType_)));
const showMethod_ = ff_compiler_Syntax.DFunction(declaration_.at_, signature_, body_);
return ff_compiler_Syntax.DInstance(declaration_.at_, declaration_.generics_, constraints_, "ff:core/Show.Show", ff_core_List.Link(selfType_, ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.Link(showMethod_, ff_core_List.Empty()))
}

export async function Deriver_makeShowCases$(self_, modulePrefix_, declaration_, selfType_, $c) {
const at_ = declaration_.at_;
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
{
const _1 = declaration_.variants_;
{
const variants_ = _1;
return ff_core_List.List_map(variants_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
const strings_ = ((ff_core_List.List_size(fields_) === 0)
? ff_core_List.Empty()
: ff_core_List.Link(ff_compiler_Syntax.EString(at_, "\"(\""), ff_core_List.List_addAll(ff_core_List.List_insertBetween(ff_core_List.List_map(fields_, ((field_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Show.show", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "z"), field_.name_), ff_core_List.Empty()))
})), ff_core_List.Link(ff_compiler_Syntax.EString(at_, "\", \""), ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Syntax.EString(at_, "\")\""), ff_core_List.Empty()))));
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("z")), ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.List_foldLeft(strings_, ff_compiler_Syntax.EString(at_, (("\"" + variant_.name_) + "\"")), ((a_, b_) => {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "+", ff_core_List.Link(a_, ff_core_List.Link(b_, ff_core_List.Empty())))
})))
}))
return
}
}
}

export async function Deriver_makeOrderingInstances$(self_, modulePrefix_, module_, $c) {
const coreWhitelist_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Option.Option", ff_core_List.Empty()), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Ordering.Order", modulePrefix_, coreWhitelist_, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeOrderingInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeOrderingInstance$(self_, modulePrefix_, declaration_, $c) {
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(declaration_.at_, "ff:core/Ordering.Order", ff_core_List.Link(ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty()), ff_core_List.Empty()))
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty())
}));
const selfType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const signature_ = ff_compiler_Syntax.Signature(declaration_.at_, "compare", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "x", selfType_, ff_core_Option.None()), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "y", selfType_, ff_core_Option.None()), ff_core_List.Empty())), ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Ordering.Ordering", ff_core_List.Empty()), noEffect_);
const body_ = ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(declaration_.at_, noEffect_, ff_compiler_Deriver.Deriver_makeOrderingCases(self_, modulePrefix_, declaration_, selfType_)));
const compareMethod_ = ff_compiler_Syntax.DFunction(declaration_.at_, signature_, body_);
return ff_compiler_Syntax.DInstance(declaration_.at_, declaration_.generics_, constraints_, "ff:core/Ordering.Order", ff_core_List.Link(selfType_, ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.Link(compareMethod_, ff_core_List.Empty()))
}

export async function Deriver_makeOrderingCases$(self_, modulePrefix_, declaration_, selfType_, $c) {
const at_ = declaration_.at_;
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "x"), ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "y"), ff_core_List.Empty()))), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", ff_core_List.Empty())), ff_core_List.Empty()), ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", ff_core_List.Empty(), ff_core_Option.None()));
{
const _1 = declaration_.variants_;
{
if(_1.Link) {
const variant_ = _1.head_;
if(_1.tail_.Empty) {
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_core_List.Link(sameCase_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_)), ff_core_List.Empty()))
return
}
}
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("x")), ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("y")), ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeOrderingFields(self_, modulePrefix_, declaration_, fields_))
}));
const intType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Int.Int", ff_core_List.Empty());
const numberSignature_ = ff_compiler_Syntax.Signature(at_, "number", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(at_, false, "z", selfType_, ff_core_Option.None()), ff_core_List.Empty()), intType_, noEffect_);
const numberCases_ = ff_core_List.List_map(ff_core_List.List_pairs(declaration_.variants_), ((_1) => {
{
const index_ = _1.first_;
const variant_ = _1.second_;
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.None()), ff_core_List.Empty()), ff_core_List.Empty(), ff_compiler_Syntax.EInt(at_, ("" + index_)))
return
}
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Syntax.EFunctions(at_, ff_core_List.Link(ff_compiler_Syntax.DFunction(at_, numberSignature_, ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(at_, noEffect_, numberCases_))), ff_core_List.Empty()), ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", ff_core_List.Link(ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "x"), ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "number", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "y"), ff_core_List.Empty())), ff_core_List.Empty())))));
return ff_core_List.Link(sameCase_, ff_core_List.List_addAll(sameVariantCases_, ff_core_List.Link(differentVariant_, ff_core_List.Empty())))
return
}
}
}

export async function Deriver_makeOrderingFields$(self_, modulePrefix_, declaration_, fields_, $c) {
const at_ = declaration_.at_;
const orderingType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Ordering.Ordering", ff_core_List.Empty());
const orderingSame_ = ff_compiler_Syntax.EVariant(at_, "ff:core/Ordering.OrderingSame", ff_core_List.Empty(), ff_core_Option.None());
function go_(fields_) {
{
const fields_a = fields_;
{
if(fields_a.Empty) {
return orderingSame_
return
}
}
{
if(fields_a.Link) {
const head_ = fields_a.head_;
const tail_ = fields_a.tail_;
const variableName_ = (head_.name_ + "Ordering");
const compareTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Ordering.compare", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_), ff_core_List.Empty())));
const notEqualTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "!==", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, variableName_), ff_core_List.Link(orderingSame_, ff_core_List.Empty())));
const ifTerm_ = ff_compiler_Deriver.Deriver_makeIf(self_, at_, notEqualTerm_, ff_compiler_Syntax.EVariable(at_, variableName_), go_(tail_));
return ff_compiler_Syntax.ELet(at_, false, variableName_, orderingType_, compareTerm_, ifTerm_)
return
}
}
}
}
return go_(fields_)
}

export async function Deriver_makeEqualInstances$(self_, modulePrefix_, module_, $c) {
const coreWhitelist_ = ff_core_List.List_toSet(ff_core_List.Link("ff:core/Option.Option", ff_core_List.Link("ff:core/List.List", ff_core_List.Link("ff:core/Pair.Pair", ff_core_List.Empty()))), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const missingInstance_ = ff_compiler_Deriver.Deriver_findTypesThatNeedInstances(self_, "ff:core/Equal.Equal", modulePrefix_, coreWhitelist_, module_);
return ff_core_List.List_map(missingInstance_, ((_w1) => {
return ff_compiler_Deriver.Deriver_makeEqualInstance(self_, modulePrefix_, _w1)
}))
}

export async function Deriver_makeEqualInstance$(self_, modulePrefix_, declaration_, $c) {
const constraints_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.Constraint(declaration_.at_, "ff:core/Equal.Equal", ff_core_List.Link(ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty()), ff_core_List.Empty()))
}));
const typeArguments_ = ff_core_List.List_map(declaration_.generics_, ((t_) => {
return ff_compiler_Syntax.TConstructor(declaration_.at_, t_, ff_core_List.Empty())
}));
const selfType_ = ff_compiler_Syntax.TConstructor(declaration_.at_, ((modulePrefix_ + ".") + declaration_.name_), typeArguments_);
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const signature_ = ff_compiler_Syntax.Signature(declaration_.at_, "equals", ff_core_List.Empty(), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "x", selfType_, ff_core_Option.None()), ff_core_List.Link(ff_compiler_Syntax.Parameter(declaration_.at_, false, "y", selfType_, ff_core_Option.None()), ff_core_List.Empty())), ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Bool.Bool", ff_core_List.Empty()), noEffect_);
const body_ = ff_compiler_Syntax.FireflyTarget(ff_compiler_Syntax.Lambda(declaration_.at_, noEffect_, ff_compiler_Deriver.Deriver_makeEqualsCases(self_, modulePrefix_, declaration_, selfType_)));
const equalsMethod_ = ff_compiler_Syntax.DFunction(declaration_.at_, signature_, body_);
return ff_compiler_Syntax.DInstance(declaration_.at_, declaration_.generics_, constraints_, "ff:core/Equal.Equal", ff_core_List.Link(selfType_, ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.Link(equalsMethod_, ff_core_List.Empty()))
}

export async function Deriver_makeEqualsCases$(self_, modulePrefix_, declaration_, selfType_, $c) {
const at_ = declaration_.at_;
const noEffect_ = ff_compiler_Syntax.TConstructor(declaration_.at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const wildcardPattern_ = ff_compiler_Syntax.PVariable(at_, ff_core_Option.None());
const sameCase_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Link(ff_compiler_Syntax.MatchGuard(at_, ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "===", ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "x"), ff_core_List.Link(ff_compiler_Syntax.EVariable(at_, "y"), ff_core_List.Empty()))), ff_compiler_Syntax.PVariant(at_, "ff:core/Bool.True", ff_core_List.Empty())), ff_core_List.Empty()), ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", ff_core_List.Empty(), ff_core_Option.None()));
{
const _1 = declaration_.variants_;
{
if(_1.Link) {
const variant_ = _1.head_;
if(_1.tail_.Empty) {
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_core_List.Link(sameCase_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_)), ff_core_List.Empty()))
return
}
}
}
{
const variants_ = _1;
const variantsWithFields_ = ff_core_List.List_filter(variants_, ((variant_) => {
return ((!ff_core_List.List_isEmpty(declaration_.commonFields_)) || (!ff_core_List.List_isEmpty(variant_.fields_)))
}));
const sameVariantCases_ = ff_core_List.List_map(variantsWithFields_, ((variant_) => {
const variantName_ = ((modulePrefix_ + ".") + variant_.name_);
const fields_ = ff_core_List.List_addAll(declaration_.commonFields_, variant_.fields_);
return ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("x")), ff_core_List.Link(ff_compiler_Syntax.PVariantAs(at_, variantName_, ff_core_Option.Some("y")), ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Deriver.Deriver_makeEqualFields(self_, modulePrefix_, declaration_, fields_))
}));
const differentVariant_ = ff_compiler_Syntax.MatchCase(at_, ff_core_List.Link(wildcardPattern_, ff_core_List.Link(wildcardPattern_, ff_core_List.Empty())), ff_core_List.Empty(), ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.False", ff_core_List.Empty(), ff_core_Option.None()));
return ff_core_List.Link(sameCase_, ff_core_List.List_addAll(sameVariantCases_, ff_core_List.Link(differentVariant_, ff_core_List.Empty())))
return
}
}
}

export async function Deriver_makeEqualFields$(self_, modulePrefix_, declaration_, fields_, $c) {
const at_ = declaration_.at_;
function go_(fields_) {
{
const fields_a = fields_;
{
if(fields_a.Empty) {
return ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", ff_core_List.Empty(), ff_core_Option.None())
return
}
}
{
if(fields_a.Link) {
const head_ = fields_a.head_;
if(fields_a.tail_.Empty) {
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_), ff_core_List.Empty())))
return
}
}
}
{
if(fields_a.Link) {
const head_ = fields_a.head_;
const tail_ = fields_a.tail_;
const equalsTerm_ = ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "ff:core/Equal.equals", ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "x"), head_.name_), ff_core_List.Link(ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "y"), head_.name_), ff_core_List.Empty())));
return ff_compiler_Deriver.Deriver_makeSimpleCall(self_, at_, "&&", ff_core_List.Link(equalsTerm_, ff_core_List.Link(go_(tail_), ff_core_List.Empty())))
return
}
}
}
}
return go_(fields_)
}

export async function Deriver_findTypesThatNeedInstances$(self_, traitName_, modulePrefix_, coreWhitelist_, module_, $c) {
const typesWithInstance_ = ff_core_List.List_toSet(ff_core_List.List_collect(module_.instances_, ((_1) => {
{
const instance_ = _1;
const _guard1 = ff_core_List.List_first(instance_.typeArguments_);
if(_guard1.Some) {
if(_guard1.value_.TConstructor) {
const name_ = _guard1.value_.name_;
if((instance_.traitName_ === traitName_)) {
return ff_core_Option.Some(name_)
} else return ff_core_Option.None()
return
}
}
}
{
return ff_core_Option.None()
return
}
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
return ff_core_List.List_filter(module_.types_, ((t_) => {
return (((((ff_compiler_Syntax.PackagePair_groupName(module_.packagePair_, ":") !== "ff:core") || ff_core_Set.Set_contains(coreWhitelist_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)) && (!ff_core_Option.Option_any(ff_core_List.List_first(t_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))) && (!t_.newtype_)) && (!ff_core_Set.Set_contains(typesWithInstance_, ((modulePrefix_ + ".") + t_.name_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)))
}))
}

export async function Deriver_makeSimpleCall$(self_, at_, name_, arguments_, $c) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const callTarget_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, name_), false);
return ff_compiler_Syntax.ECall(at_, callTarget_, noEffect_, ff_core_List.Empty(), ff_core_List.List_map(arguments_, ((e_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), e_)
})), ff_core_List.Empty())
}

export async function Deriver_makeIf$(self_, at_, condition_, then_, else_, $c) {
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", ff_core_List.Empty());
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(at_, "ff:core/Core.if"), false);
const option_ = ff_compiler_Syntax.ECall(at_, target_, noEffect_, ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), condition_), ff_core_List.Link(ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Empty(), ff_core_List.Empty(), then_), ff_core_List.Empty())))), ff_core_List.Empty())), ff_core_List.Empty());
return ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EField(at_, false, option_, "else"), false), noEffect_, ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Argument(at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, noEffect_, ff_core_List.Link(ff_compiler_Syntax.MatchCase(at_, ff_core_List.Empty(), ff_core_List.Empty(), else_), ff_core_List.Empty())))), ff_core_List.Empty()), ff_core_List.Empty())
}

export const ff_core_Show_Show$ff_compiler_Deriver_Deriver = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return "Deriver"
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return "Deriver"
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Deriver_Deriver = {
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
return true
return
}
}
},
async equals_$(x_, y_, $c) {
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
return true
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Deriver_Deriver = {
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
return ff_core_Ordering.OrderingSame()
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
return ff_core_Ordering.OrderingSame()
return
}
}
}
};


