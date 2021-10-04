import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Resolver
export function Resolver(variables_, variants_, types_, traits_) {
return {_: 'Resolver', variables_, variants_, types_, traits_};
}



export function make_() {
return ff_compiler_Resolver.Resolver(ff_core_List.List_toMap(ff_core_Array.Array_toList([])), ff_core_List.List_toMap(ff_core_Array.Array_toList([])), ff_core_List.List_toMap(ff_core_Array.Array_toList([])), ff_core_List.List_toMap(ff_core_Array.Array_toList([])))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Resolver_resolveModule(self_, module_, otherModules_) {
const moduleNamespace_ = ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_replace(module_.file_, "\\", "/")), ((_w1) => {
return (_w1 != 47)
}))), ((_w1) => {
return (_w1 != 46)
}))
const self2_ = ff_compiler_Resolver.Resolver_processImports(self_, module_.imports_, otherModules_)
const self3_ = ff_compiler_Resolver.Resolver_processDefinitions(self2_, module_, ff_core_Option.None())
{
const _1 = module_
{
const _c = _1
return ff_compiler_Syntax.Module(_c.packagePair_, _c.file_, _c.dependencies_, _c.imports_, ff_core_List.List_map(module_.types_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTypeDefinition(self3_, _w1)
})), ff_core_List.List_map(module_.traits_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTraitDefinition(self3_, _w1)
})), ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveInstanceDefinition(self3_, _w1)
})), ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveExtendDefinition(self3_, _w1)
})), ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveLetDefinition(self3_, _w1)
})), ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self3_, _w1)
})))
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Resolver_processImports(self_, imports_, modules_) {
let resolver_ = self_
ff_core_List.List_each(imports_, ((import_) => {
for(;;) {
const _1 = ff_core_List.List_find(modules_, ((_w1) => {
return (ff_core_String.String_dropLast(_w1.file_, 3) == import_.file_)
}))
{
if(_1._ === 'Some') {
const module_ = _1.value_
resolver_ = ff_compiler_Resolver.Resolver_processDefinitions(resolver_, module_, ff_core_Option.Some(import_.alias_))
break
}
}
{
if(_1._ === 'None') {
ff_compiler_Resolver.fail_(import_.at_, ("No such module: " + import_.file_))
break
}
}
throw new Error('Unexhaustive pattern match')
}
}))
return resolver_
}

export function Resolver_processDefinitions(self_, module_, importAlias_) {
function entry_(name_, unqualified_) {
const full_ = ((((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".") + name_)
{
const _1 = importAlias_
{
if(_1._ === 'None') {
return ff_core_Array.Array_toList([ff_core_Pair.Pair(name_, full_)])
return
}
}
{
if(_1._ === 'Some') {
const alias_ = _1.value_
if(unqualified_) {
return ff_core_Array.Array_toList([ff_core_Pair.Pair(((alias_ + ".") + name_), full_), ff_core_Pair.Pair(name_, full_)])
return
}
}
}
{
if(_1._ === 'Some') {
const alias_ = _1.value_
return ff_core_Array.Array_toList([ff_core_Pair.Pair(((alias_ + ".") + name_), full_)])
return
}
}
throw new Error('Unexhaustive pattern match')
}
}
const isCore_ = (((module_.packagePair_.first_ == "ff") && (module_.packagePair_.second_ == "core")) && (module_.file_ == "Core.ff"))
const lets_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.lets_, ((_w1) => {
return entry_(_w1.name_, isCore_)
})))
const functions_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.functions_, ((_w1) => {
return entry_(_w1.signature_.name_, isCore_)
})))
const traitMethods_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return _w1.methods_
})), ((_w1) => {
return entry_(_w1.name_, false)
})))
const traits_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.traits_, ((_w1) => {
return entry_(_w1.name_, true)
})))
const types_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(module_.types_, ((_w1) => {
return entry_(_w1.name_, true)
})))
const variants_ = ff_core_List.List_toMap(ff_core_List.List_flatMap(ff_core_List.List_flatMap(module_.types_, ((_w1) => {
return _w1.variants_
})), ((_w1) => {
return entry_(_w1.name_, true)
})))
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(ff_core_Map.Map_addAll(self_.variables_, lets_), functions_), traitMethods_), ff_core_Map.Map_addAll(self_.variants_, variants_), ff_core_Map.Map_addAll(self_.types_, types_), ff_core_Map.Map_addAll(self_.traits_, traits_))
}

export function Resolver_resolveTypeDefinition(self_, definition_) {
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})))
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(_c.variables_, _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_), _c.traits_)
}))(self_)
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DType(_c.at_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((c_) => {
{
const _1 = c_
{
const _c = _1
return ff_compiler_Syntax.Constraint(ff_compiler_Resolver.Resolver_resolveType(self2_, c_.representation_))
return
}
throw new Error('Unexhaustive pattern match')
}
})), ff_core_List.List_map(definition_.commonFields_, ((f_) => {
{
const _1 = f_
{
const _c = _1
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self2_, f_.valueType_), ff_core_Option.Option_map(f_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1)
})))
return
}
throw new Error('Unexhaustive pattern match')
}
})), ff_core_List.List_map(definition_.variants_, ((v_) => {
{
const _1 = v_
{
const _c = _1
return ff_compiler_Syntax.Variant(_c.at_, _c.name_, ff_core_List.List_map(v_.fields_, ((f_) => {
{
const _1 = f_
{
const _c = _1
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self2_, f_.valueType_), ff_core_Option.Option_map(f_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1)
})))
return
}
throw new Error('Unexhaustive pattern match')
}
})), _c.targets_)
return
}
throw new Error('Unexhaustive pattern match')
}
})), _c.targets_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Resolver_resolveTraitDefinition(self_, definition_) {
return definition_
}

export function Resolver_resolveInstanceDefinition(self_, definition_) {
return definition_
}

export function Resolver_resolveExtendDefinition(self_, definition_) {
const generics_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.generics_, ((g_) => {
return ff_core_Pair.Pair(g_, g_)
})))
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_add(self_.variables_, definition_.name_, definition_.name_), _c.variants_, ff_core_Map.Map_addAll(self_.types_, generics_), _c.traits_)
}))(self_)
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.constraints_, ((c_) => {
{
const _1 = c_
{
const _c = _1
return ff_compiler_Syntax.Constraint(ff_compiler_Resolver.Resolver_resolveType(self2_, c_.representation_))
return
}
throw new Error('Unexhaustive pattern match')
}
})), ff_compiler_Resolver.Resolver_resolveType(self2_, definition_.type_), ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, _w1)
})))
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Resolver_resolveLetDefinition(self_, definition_) {
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_add(self_.variables_, definition_.name_, definition_.name_), _c.variants_, _c.types_, _c.traits_)
}))(self_)
{
const _1 = definition_
{
const _c = _1
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self_, definition_.variableType_), ff_compiler_Resolver.Resolver_resolveTerm(self_, definition_.value_), _c.targets_)
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function Resolver_resolveTerm(self_, term_){
const self_a = self_
const term_a = term_
{
const self_ = self_a
if(term_a._ === 'EString') {
return term_
return
}
}
{
const self_ = self_a
if(term_a._ === 'EChar') {
return term_
return
}
}
{
const self_ = self_a
if(term_a._ === 'EInt') {
return term_
return
}
}
{
const self_ = self_a
if(term_a._ === 'EFloat') {
return term_
return
}
}
{
const self_ = self_a
if(term_a._ === 'EVariable') {
const e_ = term_a
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Map.Map_get(self_.variables_, e_.name_), ((_w1) => {
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EVariable(_c.at_, _w1, _c.generics_, _c.instances_)
return
}
throw new Error('Unexhaustive pattern match')
}
})), (() => {
if(ff_core_Option.Option_any(ff_core_String.String_first(e_.name_), ((_w1) => {
return ff_core_Char.Char_isAsciiLetter(_w1)
}))) {
return ff_compiler_Resolver.fail_(e_.at_, ("No such variable: " + e_.name_))
} else {
return term_
}
}))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EList') {
const at_ = term_a.at_
const t_ = term_a.elementType_
const items_ = term_a.items_
return ff_compiler_Syntax.EList(at_, ff_compiler_Resolver.Resolver_resolveType(self_, t_), ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_
const spread_ = _1.second_
return ff_core_Pair.Pair(ff_compiler_Resolver.Resolver_resolveTerm(self_, item_), spread_)
return
}
throw new Error('Unexhaustive pattern match')
})))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EVariant') {
const at_ = term_a.at_
const name_ = term_a.name_
const typeArguments_ = term_a.typeArguments_
const arguments_ = term_a.arguments_
return ff_compiler_Syntax.EVariant(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_), (() => {
return ff_compiler_Resolver.fail_(at_, ("No such variant: " + name_))
})), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1)
})), ff_core_Option.Option_map(arguments_, ((_w1) => {
return ff_core_List.List_map(_w1, ((a_) => {
{
const _1 = a_
{
const _c = _1
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, a_.value_))
return
}
throw new Error('Unexhaustive pattern match')
}
}))
})))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EVariantIs') {
const at_ = term_a.at_
const name_ = term_a.name_
const typeArguments_ = term_a.typeArguments_
return ff_compiler_Syntax.EVariantIs(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_), (() => {
return ff_compiler_Resolver.fail_(at_, ("No such variant: " + name_))
})), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1)
})))
return
}
}
{
const self_ = self_a
if(term_a._ === 'ECopy') {
const at_ = term_a.at_
const name_ = term_a.name_
const record_ = term_a.record_
const arguments_ = term_a.arguments_
return ff_compiler_Syntax.ECopy(at_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_), (() => {
return ff_compiler_Resolver.fail_(at_, ("No such variant: " + name_))
})), ff_compiler_Resolver.Resolver_resolveTerm(self_, record_), ff_core_List.List_map(arguments_, ((f_) => {
{
const _1 = f_
{
const _c = _1
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, f_.value_))
return
}
throw new Error('Unexhaustive pattern match')
}
})))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EField') {
const e_ = term_a
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EField(_c.at_, ff_compiler_Resolver.Resolver_resolveTerm(self_, e_.record_), _c.field_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
const self_ = self_a
if(term_a._ === 'ELambda') {
const at_ = term_a.at_
const lambdaAt_ = term_a.lambda_.at_
const cases_ = term_a.lambda_.cases_
return ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(lambdaAt_, ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveCase(self_, _w1)
}))))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EPipe') {
const at_ = term_a.at_
const value_ = term_a.value_
const function_ = term_a.function_
return ff_compiler_Syntax.EPipe(at_, ff_compiler_Resolver.Resolver_resolveTerm(self_, value_), ff_compiler_Resolver.Resolver_resolveTerm(self_, function_))
return
}
}
{
const self_ = self_a
if(term_a._ === 'ECall') {
const at_ = term_a.at_
const tailCall_ = term_a.tailCall_
const function_ = term_a.function_
const typeArguments_ = term_a.typeArguments_
const arguments_ = term_a.arguments_
return ff_compiler_Syntax.ECall(at_, tailCall_, ff_compiler_Resolver.Resolver_resolveTerm(self_, function_), ff_core_List.List_map(typeArguments_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1)
})), ff_core_List.List_map(arguments_, ((a_) => {
{
const _1 = a_
{
const _c = _1
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, a_.value_))
return
}
throw new Error('Unexhaustive pattern match')
}
})))
return
}
}
{
const self_ = self_a
if(term_a._ === 'ERecord') {
const at_ = term_a.at_
const fields_ = term_a.fields_
return ff_compiler_Syntax.ERecord(at_, ff_core_List.List_map(fields_, ((f_) => {
{
const _1 = f_
{
const _c = _1
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Resolver.Resolver_resolveTerm(self_, f_.value_))
return
}
throw new Error('Unexhaustive pattern match')
}
})))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EWildcard') {
const e_ = term_a
if((e_.index_ == 0)) {
ff_compiler_Resolver.fail_(e_.at_, "Unbound wildcard")
}
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.EWildcard(_c.at_, _c.index_)
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
const self_ = self_a
if(term_a._ === 'EFunctions') {
const at_ = term_a.at_
const functions_ = term_a.functions_
const body_ = term_a.body_
const functionMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(functions_, ((_w1) => {
return _w1.signature_.name_
})), ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})))
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, functionMap_), _c.variants_, _c.types_, _c.traits_)
}))(self_)
return ff_compiler_Syntax.EFunctions(at_, ff_core_List.List_map(functions_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveFunctionDefinition(self2_, _w1)
})), ff_compiler_Resolver.Resolver_resolveTerm(self2_, body_))
return
}
}
{
const self_ = self_a
if(term_a._ === 'ELet') {
const e_ = term_a
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_add(self_.variables_, e_.name_, e_.name_), _c.variants_, _c.types_, _c.traits_)
}))(self_)
{
const _1 = e_
{
const _c = _1
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self_, e_.valueType_), ff_compiler_Resolver.Resolver_resolveTerm(self_, e_.value_), ff_compiler_Resolver.Resolver_resolveTerm(self2_, e_.body_))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
const self_ = self_a
if(term_a._ === 'ESequential') {
const at_ = term_a.at_
const before_ = term_a.before_
const after_ = term_a.after_
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Resolver.Resolver_resolveTerm(self_, before_), ff_compiler_Resolver.Resolver_resolveTerm(self_, after_))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EAssign') {
const at_ = term_a.at_
const operator_ = term_a.operator_
const variable_ = term_a.variable_
const value_ = term_a.value_
return ff_compiler_Syntax.EAssign(at_, operator_, ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variables_, variable_), (() => {
return ff_compiler_Resolver.fail_(at_, ("No such variable: " + variable_))
})), ff_compiler_Resolver.Resolver_resolveTerm(self_, value_))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EAssignField') {
const at_ = term_a.at_
const operator_ = term_a.operator_
const record_ = term_a.record_
const field_ = term_a.field_
const value_ = term_a.value_
return ff_compiler_Syntax.EAssignField(at_, operator_, ff_compiler_Resolver.Resolver_resolveTerm(self_, record_), field_, ff_compiler_Resolver.Resolver_resolveTerm(self_, value_))
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function Resolver_resolveType(self_, type_){
const self_a = self_
const type_a = type_
{
const self_ = self_a
if(type_a._ === 'TVariable') {
return type_
return
}
}
{
const self_ = self_a
if(type_a._ === 'TConstructor') {
const constructor_ = type_a
const name_ = (ff_core_String.String_contains(constructor_.name_, "$")
? constructor_.name_
: ff_core_Option.Option_else(ff_core_Map.Map_get(self_.types_, constructor_.name_), (() => {
return ff_compiler_Resolver.fail_(constructor_.at_, ("No such type: " + constructor_.name_))
})))
{
const _1 = constructor_
{
const _c = _1
return ff_compiler_Syntax.TConstructor(_c.at_, name_, ff_core_List.List_map(constructor_.generics_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveType(self_, _w1)
})))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function Resolver_resolveFunctionDefinition(self_, definition_) {
const variableMap_ = ff_core_List.List_toMap(ff_core_List.List_map(ff_core_List.List_map(definition_.signature_.parameters_, ((_w1) => {
return _w1.name_
})), ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})))
const typeMap_ = ff_core_List.List_toMap(ff_core_List.List_map(definition_.signature_.generics_, ((name_) => {
return ff_core_Pair.Pair(name_, name_)
})))
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, variableMap_), _c.variants_, ff_core_Map.Map_addAll(self_.types_, typeMap_), _c.traits_)
}))(self_)
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.generics_, ff_core_List.List_map(definition_.signature_.constraints_, ((c_) => {
return ff_compiler_Syntax.Constraint(ff_compiler_Resolver.Resolver_resolveType(self2_, c_.representation_))
})), ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
{
const _1 = p_
{
const _c = _1
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Resolver.Resolver_resolveType(self2_, p_.valueType_), ff_core_Option.Option_map(p_.default_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1)
})))
return
}
throw new Error('Unexhaustive pattern match')
}
})), ff_compiler_Resolver.Resolver_resolveType(self2_, definition_.signature_.returnType_))
}))(definition_.signature_)
const body_ = (((_c) => {
return ff_compiler_Syntax.Lambda(_c.at_, ff_core_List.List_map(definition_.body_.cases_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveCase(self2_, _w1)
})))
}))(definition_.body_)
return ff_compiler_Syntax.DFunction(definition_.at_, signature_, body_, definition_.targets_)
}

export function Resolver_resolveCase(self_, case_) {
function findVariables_(pattern_){
const pattern_a = pattern_
{
if(pattern_a._ === 'PVariable') {
if(pattern_a.name_._ === 'Some') {
const name_ = pattern_a.name_.value_
return ff_core_List.List_toMap(ff_core_Array.Array_toList([ff_core_Pair.Pair(name_, name_)]))
return
}
}
}
{
if(pattern_a._ === 'PVariable') {
if(pattern_a.name_._ === 'None') {
return ff_core_Map.empty_()
return
}
}
}
{
if(pattern_a._ === 'PVariant') {
const patterns_ = pattern_a.patterns_
return ff_core_List.List_foldLeft(ff_core_List.List_map(patterns_, ((pattern_) => {
return findVariables_(pattern_)
})), ff_core_Map.empty_())(((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2)
}))
return
}
}
{
if(pattern_a._ === 'PVariantAs') {
const variable_ = pattern_a.variable_
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Option.Option_toList(variable_), ((x_) => {
return ff_core_Pair.Pair(x_, x_)
})))
return
}
}
{
if(pattern_a._ === 'PAlias') {
const pattern_ = pattern_a.pattern_
const variable_ = pattern_a.variable_
return ff_core_Map.Map_addAll(ff_core_List.List_toMap(ff_core_Array.Array_toList([ff_core_Pair.Pair(variable_, variable_)])), findVariables_(pattern_))
return
}
}
{
if(pattern_a._ === 'PList') {
const items_ = pattern_a.items_
return ff_core_List.List_foldLeft(ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_
return findVariables_(item_)
return
}
throw new Error('Unexhaustive pattern match')
})), ff_core_Map.empty_())(((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2)
}))
return
}
}
throw new Error('Unexhaustive pattern match')
}
const variableMap_ = ff_core_List.List_foldLeft(ff_core_List.List_map(case_.patterns_, ((pattern_) => {
return findVariables_(pattern_)
})), ff_core_Map.empty_())(((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2)
}))
const self2_ = (((_c) => {
return ff_compiler_Resolver.Resolver(ff_core_Map.Map_addAll(self_.variables_, variableMap_), _c.variants_, _c.types_, _c.traits_)
}))(self_)
return ff_compiler_Syntax.MatchCase(case_.at_, ff_core_List.List_map(case_.patterns_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolvePattern(self2_, _w1)
})), ff_core_Option.Option_map(case_.condition_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolveTerm(self2_, _w1)
})), ff_compiler_Resolver.Resolver_resolveTerm(self2_, case_.body_))
}

export function Resolver_resolvePattern(self_, pattern_){
const self_a = self_
const pattern_a = pattern_
{
const self_ = self_a
const p_ = pattern_a
if(pattern_a._ === 'PVariable') {
return p_
return
}
}
{
const self_ = self_a
if(pattern_a._ === 'PVariant') {
const at_ = pattern_a.at_
const name_ = pattern_a.name_
const patterns_ = pattern_a.patterns_
const newName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_), (() => {
return ff_compiler_Resolver.fail_(at_, ("No such variant: " + name_))
}))
const newPatterns_ = ff_core_List.List_map(patterns_, ((_w1) => {
return ff_compiler_Resolver.Resolver_resolvePattern(self_, _w1)
}))
return ff_compiler_Syntax.PVariant(at_, newName_, newPatterns_)
return
}
}
{
const self_ = self_a
if(pattern_a._ === 'PVariantAs') {
const at_ = pattern_a.at_
const name_ = pattern_a.name_
const variable_ = pattern_a.variable_
const newName_ = ff_core_Option.Option_else(ff_core_Map.Map_get(self_.variants_, name_), (() => {
return ff_compiler_Resolver.fail_(at_, ("No such variant: " + name_))
}))
return ff_compiler_Syntax.PVariantAs(at_, newName_, variable_)
return
}
}
{
const self_ = self_a
if(pattern_a._ === 'PAlias') {
const at_ = pattern_a.at_
const pattern_ = pattern_a.pattern_
const variable_ = pattern_a.variable_
const newPattern_ = ff_compiler_Resolver.Resolver_resolvePattern(self_, pattern_)
return ff_compiler_Syntax.PAlias(at_, newPattern_, variable_)
return
}
}
{
const self_ = self_a
if(pattern_a._ === 'PList') {
const at_ = pattern_a.at_
const t_ = pattern_a.itemType_
const items_ = pattern_a.items_
const newType_ = ff_compiler_Resolver.Resolver_resolveType(self_, t_)
const newPatterns_ = ff_core_List.List_map(items_, ((_1) => {
{
const pattern_ = _1.first_
const spread_ = _1.second_
return ff_core_Pair.Pair(ff_compiler_Resolver.Resolver_resolvePattern(self_, pattern_), spread_)
return
}
throw new Error('Unexhaustive pattern match')
}))
return ff_compiler_Syntax.PList(at_, newType_, newPatterns_)
return
}
}
throw new Error('Unexhaustive pattern match')
}


