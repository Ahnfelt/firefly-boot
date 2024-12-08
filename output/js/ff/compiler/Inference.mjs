

import * as ff_compiler_Inference from "../../ff/compiler/Inference.mjs"

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Substitution from "../../ff/compiler/Substitution.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

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

// type Inference
export function Inference(unification_, missing_, lspHook_) {
return {unification_, missing_, lspHook_};
}



export function new_(modules_, lspHook_) {
return ff_compiler_Inference.Inference(ff_compiler_Unification.new_(modules_, ff_compiler_LspHook.LspHook_isEnabled(lspHook_)), ff_core_StringMap.new_(), lspHook_)
}

export function fail_(at_, message_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}

export function core_(name_) {
return ((("ff:core/" + name_) + ".") + name_)
}

export function constraintsToInstances_(constraints_) {
return ff_core_List.List_toMap(ff_core_List.List_map(constraints_, ((c_) => {
const typeName_ = (((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
}
if(_1.TVariable) {
const at_ = _1.at_;
const i_ = _1.index_;
return ff_compiler_Inference.fail_(c_.at_, ("Unexpected unification variable: $" + i_))
}
}))(ff_core_List.List_grabFirst(c_.generics_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(c_.name_, typeName_), ff_compiler_Unification.InstanceValue([], [], ff_compiler_Syntax.PackagePair("", ""), "", c_.name_, c_.generics_))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey)
}

export async function new_$(modules_, lspHook_, $task) {
return ff_compiler_Inference.Inference(ff_compiler_Unification.new_(modules_, ff_compiler_LspHook.LspHook_isEnabled(lspHook_)), ff_core_StringMap.new_(), lspHook_)
}

export async function fail_$(at_, message_, $task) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}

export async function core_$(name_, $task) {
return ((("ff:core/" + name_) + ".") + name_)
}

export async function constraintsToInstances_$(constraints_, $task) {
return ff_core_List.List_toMap(ff_core_List.List_map(constraints_, ((c_) => {
const typeName_ = (((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
return name_
}
if(_1.TVariable) {
const at_ = _1.at_;
const i_ = _1.index_;
return ff_compiler_Inference.fail_(c_.at_, ("Unexpected unification variable: $" + i_))
}
}))(ff_core_List.List_grabFirst(c_.generics_));
return ff_core_Pair.Pair(ff_compiler_Unification.InstanceKey(c_.name_, typeName_), ff_compiler_Unification.InstanceValue([], [], ff_compiler_Syntax.PackagePair("", ""), "", c_.name_, c_.generics_))
})), ff_compiler_Unification.ff_core_Ordering_Order$ff_compiler_Unification_InstanceKey)
}

export function Inference_inferModule(self_, module_, otherModules_) {
const environment_ = ff_compiler_Environment.new_(module_, otherModules_, false);
const traits_ = ff_core_List.List_map(module_.traits_, ((_w1) => {
return ff_compiler_Inference.Inference_inferTraitDefinition(self_, environment_, _w1)
}));
const instances_ = ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_Inference.Inference_inferInstanceDefinition(self_, environment_, _w1)
}));
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Inference.Inference_inferLetDefinition(self_, environment_, _w1)
}));
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment_, _w1)
}));
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Inference.Inference_inferExtendDefinition(self_, environment_, _w1)
}));
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, _c.imports_, _c.types_, traits_, instances_, extends_, lets_, functions_)
}))(module_);
const subsititution_ = ff_compiler_Substitution.Substitution(self_.unification_.substitution_);
return ff_compiler_Substitution.Substitution_substituteModule(subsititution_, result_)
}

export function Inference_inferTraitDefinition(self_, environment_, definition_) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DTrait(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.generatorParameters_, _c.methods_, _c.methodDefaults_, _c.methodGenerators_)
}
}
}

export function Inference_inferInstanceDefinition(self_, environment_, definition_) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && definition_.derived_)) {
return definition_
} else {
const instances_ = ff_compiler_Inference.constraintsToInstances_(definition_.constraints_);
return ff_compiler_Unification.Unification_withLocalInstances(self_.unification_, instances_, (() => {
const traitName_ = definition_.traitName_;
const traitDefinition_ = ff_core_Option.Option_else(ff_core_Map.Map_get(environment_.traits_, traitName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(definition_.at_, ("No such trait: " + traitName_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
if((traitDefinition_.generics_.length !== definition_.typeArguments_.length)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(definition_.at_, ((((("Wrong number of type arguments for " + traitName_) + ", expected ") + (traitDefinition_.generics_.length - 1)) + ", got ") + (definition_.typeArguments_.length - 1))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const instantiationMap_ = ff_core_List.List_toMap(ff_core_List.List_zip(traitDefinition_.generics_, definition_.typeArguments_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
for(let for_a = traitDefinition_.methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const traitMethod_ = for_a[for_i];
const found_ = ff_core_List.List_filter(definition_.methods_, ((_w1) => {
return (_w1.signature_.name_ === traitMethod_.name_)
}));
if(ff_core_List.List_isEmpty(found_)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(definition_.at_, ("Missing instance method: " + traitMethod_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
for(let for_a = found_, for_i = 1, for_l = for_a.length; for_i < for_l; for_i++) {
const duplicateMethod_ = for_a[for_i];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(duplicateMethod_.at_, ("Duplicated instance method: " + traitMethod_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, _c.constraints_, _c.traitName_, _c.typeArguments_, _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((instanceFunction_) => {
const methodName_ = instanceFunction_.signature_.name_;
const traitMethodName_ = (ff_core_String.String_reverse(ff_core_String.String_dropWhile(ff_core_String.String_reverse(traitName_), ((_w1) => {
return (_w1 !== 46)
}))) + methodName_);
const traitMethodScheme_ = ff_core_Option.Option_else(ff_core_Map.Map_get(environment_.symbols_, traitMethodName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(instanceFunction_.at_, ((("Trait " + traitName_) + " has no such method: ") + methodName_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
const parameters_ = ff_core_List.List_map(traitMethodScheme_.signature_.parameters_, ((p_) => {
{
const _1 = p_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, p_.valueType_), _c.default_)
}
}
}));
const returnType_ = ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, traitMethodScheme_.signature_.returnType_);
for(let for_a = instanceFunction_.signature_.parameters_, for_i = Math.max(parameters_.length, 0), for_l = for_a.length; for_i < for_l; for_i++) {
const instanceParameter_ = for_a[for_i];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(instanceParameter_.at_, ("Unexpected parameter: " + instanceParameter_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
for(let for_a = parameters_, for_i = Math.max(instanceFunction_.signature_.parameters_.length, 0), for_l = for_a.length; for_i < for_l; for_i++) {
const traitParameter_ = for_a[for_i];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(instanceFunction_.at_, ("Missing parameter: " + traitParameter_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
for(let for_a = parameters_, for_i = 0, for_l = for_a.length, for_a2 = instanceFunction_.signature_.parameters_, for_i2 = 0, for_l2 = for_a2.length; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {
const traitParameter_ = for_a[for_i];
const instanceParameter_ = for_a2[for_i2];
ff_compiler_Unification.Unification_unify(self_.unification_, instanceParameter_.valueType_.at_, traitParameter_.valueType_, instanceParameter_.valueType_)
};
ff_compiler_Unification.Unification_unify(self_.unification_, instanceFunction_.signature_.returnType_.at_, returnType_, instanceFunction_.signature_.returnType_);
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, instanceFunction_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, traitMethodScheme_.signature_.at_))) {
const symbolHook_ = ff_compiler_LspHook.SymbolHook(instanceFunction_.signature_.name_, instanceFunction_.at_, traitMethodScheme_.signature_.at_);
const h_ = ff_compiler_LspHook.InferLookupHook(self_.unification_, environment_, instanceFunction_.signature_.returnType_, ff_core_Option.None(), ff_compiler_LspHook.Box(symbolHook_), ff_compiler_LspHook.Box(ff_core_Option.None()));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, h_)
};
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment_, instanceFunction_)
})), _c.derived_)
return
}
}
}))
}
}

export function Inference_inferLetDefinition(self_, environment_, definition_) {
const value_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, definition_.variableType_, definition_.value_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, _c.variableType_, value_)
}
}
}

export function Inference_inferExtendDefinition(self_, environment_, definition_) {
const selfParameter_ = ff_compiler_Syntax.Parameter(definition_.at_, false, definition_.name_, definition_.type_, ff_core_Option.None());
const functions_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, [...definition_.generics_, ...method_.signature_.generics_], [...definition_.constraints_, ...method_.signature_.constraints_], [selfParameter_, ...method_.signature_.parameters_], _c.returnType_, _c.effect_)
}))(method_.signature_);
const body_ = ff_compiler_Syntax.Target_mapFirefly(method_.body_, ((lambda_) => {
{
const _1 = lambda_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(lambda_.cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, [ff_compiler_Syntax.PVariable(method_.at_, ff_core_Option.None()), ...case_.patterns_], _c.guards_, _c.body_)
}
}
})))
return
}
}
}));
const function_ = (((_c) => {
return ff_compiler_Syntax.DFunction(_c.at_, signature_, body_)
}))(method_);
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, _c.symbols_, _c.traits_, _c.imports_, _c.effect_, ff_core_Option.Some(definition_.name_))
}))(environment_), function_)
}));
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, functions_)
}
}
}

export function Inference_inferFunctionDefinition(self_, environment_, definition_) {
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferFunctionDefinitionHook(self_.unification_, environment_, definition_, self_.missing_))
};
const parameters_ = ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(p_.at_, "ff:core/Nothing.Nothing", []);
const scheme_ = ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(p_.at_, p_.name_, false, [], [], [], p_.valueType_, noEffect_));
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, p_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferParameterHook(self_.unification_, environment_, p_, self_.missing_))
};
return ff_core_Pair.Pair(p_.name_, scheme_)
}));
const parameterMap_ = ff_core_List.List_toMap(parameters_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment_.symbols_, parameterMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}))(environment_);
const parameterTypes_ = ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.second_.signature_.returnType_
}));
const functionType_ = ff_compiler_Syntax.TConstructor(definition_.at_, ("Function$" + parameterTypes_.length), [definition_.signature_.effect_, ...parameterTypes_, definition_.signature_.returnType_]);
const instances_ = ff_compiler_Inference.constraintsToInstances_(definition_.signature_.constraints_);
return ff_compiler_Unification.Unification_withLocalInstances(self_.unification_, instances_, (() => {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Syntax.Target_mapFirefly(definition_.body_, ((_w1) => {
return ff_compiler_Inference.Inference_inferLambda(self_, environment2_, functionType_, _w1)
})))
return
}
}
}))
}

export function Inference_inferLambda(self_, environment_, expected_, lambda_) {
const unitName_ = ff_compiler_Inference.core_("Unit");
const returnsUnit_ = (((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
const ts_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
{
const _1 = ff_core_List.List_grabLast(ts_);
if(_1.TConstructor && _1.generics_.length === 0) {
const n_ = _1.name_;
return (n_ === unitName_)
}
{
return false
}
}
return
}
}
{
return false
}
}))(ff_compiler_Unification.Unification_substitute(self_.unification_, expected_));
const cases_ = ((!returnsUnit_)
? lambda_.cases_
: ff_core_List.List_map(lambda_.cases_, ((c_) => {
{
const _1 = c_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.guards_, ff_compiler_Syntax.ESequential(c_.at_, c_.body_, ff_compiler_Syntax.EVariant(c_.at_, unitName_, [], ff_core_Option.None())))
}
}
})));
const newEnvironment_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, _c.symbols_, _c.traits_, _c.imports_, lambda_.effect_, _c.selfVariable_)
}))(environment_);
{
const _1 = lambda_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_Inference.Inference_inferMatchCase(self_, newEnvironment_, expected_, _w1)
})))
return
}
}
}

export function Inference_inferMatchCase(self_, environment_, expected_, case_) {
const parameterTypes_ = ff_core_List.List_map(case_.patterns_, ((_w1) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, _w1.at_)
}));
const returnType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, case_.at_);
const functionType_ = ff_compiler_Syntax.TConstructor(case_.at_, ("Function$" + case_.patterns_.length), [environment_.effect_, ...parameterTypes_, returnType_]);
ff_compiler_Unification.Unification_unify(self_.unification_, case_.at_, expected_, functionType_);
const environment1_ = ff_core_List.List_foldLeft(ff_core_List.List_zip(parameterTypes_, case_.patterns_), environment_, ((_1, _2) => {
{
const environment1_ = _1;
const t_ = _2.first_;
const c_ = _2.second_;
const symbols_ = ff_core_Map.Map_mapValues(ff_compiler_Inference.Inference_inferPattern(self_, environment_, t_, c_), ((_1, _2) => {
{
const name_ = _1;
const at_ = _2.first_;
const type_ = _2.second_;
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
return ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(at_, name_, false, [], [], [], type_, noEffect_))
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = environment_;
{
const _c = _1;
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment1_.symbols_, symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}
}
return
}
}));
const guards_ = ff_core_List.List_toArray([]);
const environment3_ = ff_core_List.List_foldLeft(case_.guards_, environment1_, ((environment2_, g_) => {
const guardType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, g_.at_);
const guardTerm_ = ff_compiler_Inference.Inference_inferTerm(self_, environment2_, guardType_, g_.term_);
const symbols_ = ff_core_Map.Map_mapValues(ff_compiler_Inference.Inference_inferPattern(self_, environment2_, guardType_, g_.pattern_), ((_1, _2) => {
{
const name_ = _1;
const at_ = _2.first_;
const type_ = _2.second_;
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
return ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(at_, name_, false, [], [], [], type_, noEffect_))
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
guards_.array.push((((_c) => {
return ff_compiler_Syntax.MatchGuard(_c.at_, guardTerm_, _c.pattern_)
}))(g_));
{
const _1 = environment2_;
{
const _c = _1;
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment2_.symbols_, symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}
}
}));
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, ff_core_Array.Array_drain(guards_), ff_compiler_Inference.Inference_inferTerm(self_, environment3_, returnType_, case_.body_))
}
}
}

export function Inference_inferPattern(self_, environment_, expected_, pattern_) {
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
if((((_1) => {
if(_1.PVariantAs) {
const at_ = _1.at_;
const variableAt_ = _1.variableAt_;
return ((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_) || ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, variableAt_)) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, variableAt_))
}
if(_1.PAlias) {
const at_ = _1.at_;
return (ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, at_))
}
{
return ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, pattern_.at_)
}
}))(pattern_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferPatternHook(self_.unification_, environment_, expected_, pattern_))
}
};
function literal_(coreTypeName_) {
ff_compiler_Unification.Unification_unify(self_.unification_, pattern_.at_, expected_, ff_compiler_Syntax.TConstructor(pattern_.at_, ff_compiler_Inference.core_(coreTypeName_), []));
return ff_core_Map.new_()
}
{
const _1 = pattern_;
if(_1.PString) {
return literal_("String")
}
if(_1.PInt) {
return literal_("Int")
}
if(_1.PChar) {
return literal_("Char")
}
if(_1.PVariable && _1.name_.None) {
const at_ = _1.at_;
return ff_core_Map.new_()
}
if(_1.PVariable && _1.name_.Some) {
const at_ = _1.at_;
const name_ = _1.name_.value_;
return ff_core_List.List_toMap([ff_core_Pair.Pair(name_, ff_core_Pair.Pair(at_, expected_))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PAlias) {
const at_ = _1.at_;
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
return ff_core_Map.Map_add(ff_compiler_Inference.Inference_inferPattern(self_, environment_, expected_, pattern_), variable_, ff_core_Pair.Pair(at_, expected_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variableOption_ = _1.variable_;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, at_, name_, [], ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("No such variant: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
if(instantiated_.scheme_.isNewtype_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "This kind of pattern is not allowed for newtypes"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, instantiated_.scheme_.signature_.returnType_);
const parameters_ = ff_core_List.List_sortBy(instantiated_.scheme_.signature_.parameters_, ((_w1) => {
return _w1.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const paramtersWithFieldAt_ = ff_core_List.List_map(parameters_, ((p_) => {
{
const _1 = p_.valueType_;
if(_1.TConstructor) {
const t_ = _1;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(p_.at_, _c.name_, _c.generics_)
}
}
return
}
if(_1.TVariable) {
const t_ = _1;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TVariable(p_.at_, _c.index_)
}
}
return
}
}
}));
const recordType_ = ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.name_
})), "$")), paramtersWithFieldAt_);
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Option.Option_toList(variableOption_), ((_w1) => {
return ff_core_Pair.Pair(_w1, ff_core_Pair.Pair(variableAt_, recordType_))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
return
}
if(_1.PVariant && _1.name_ === "List$Empty" && _1.patterns_.length === 0) {
const at_ = _1.at_;
const itemType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const listType_ = ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("List"), [itemType_]);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_);
return ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PVariant && _1.name_ === "List$Link" && _1.patterns_.length === 2) {
const at_ = _1.at_;
const head_ = _1.patterns_[0];
const tail_ = _1.patterns_[1];
const itemType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const listType_ = ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("List"), [itemType_]);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_);
const headVariables_ = ff_compiler_Inference.Inference_inferPattern(self_, environment_, itemType_, head_);
const tailVariables_ = ff_compiler_Inference.Inference_inferPattern(self_, environment_, listType_, tail_);
return ff_core_Map.Map_addAll(headVariables_, tailVariables_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, at_, name_, [], ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("No such variant: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, instantiated_.scheme_.signature_.returnType_);
if(((patterns_.length !== instantiated_.scheme_.signature_.parameters_.length) && (!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, (((("Wrong number of subpatterns, expected " + instantiated_.scheme_.signature_.parameters_.length) + ", got ") + patterns_.length) + ".")), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return ff_core_List.List_foldLeft(ff_core_List.List_map(ff_core_List.List_zip(patterns_, instantiated_.scheme_.signature_.parameters_), ((_1) => {
{
const pattern_ = _1.first_;
const parameter_ = _1.second_;
return ff_compiler_Inference.Inference_inferPattern(self_, environment_, parameter_.valueType_, pattern_)
}
})), ff_core_Map.new_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
return
}
}
}

export function Inference_inferTerm(self_, environment_, expected_, term_) {
const hookRecordTypeBox_ = (ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, term_.at_)
? ff_core_Option.Some((function() {
const box_ = ff_compiler_LspHook.Box(ff_core_Option.None());
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferTermHook(self_.unification_, environment_, expected_, term_, box_, self_.missing_));
return box_
})())
: ff_core_Option.None());
function literal_(coreTypeName_) {
ff_compiler_Unification.Unification_unify(self_.unification_, term_.at_, expected_, ff_compiler_Syntax.TConstructor(term_.at_, ff_compiler_Inference.core_(coreTypeName_), []));
return term_
}
{
const _1 = term_;
if(_1.EString) {
return literal_("String")
}
if(_1.EChar) {
return literal_("Char")
}
if(_1.EInt) {
return literal_("Int")
}
if(_1.EFloat) {
return literal_("Float")
}
if(_1.EVariable) {
const e_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, [], ff_core_Option.None()), ((instantiated_) => {
if(instantiated_.scheme_.isVariable_) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
return term_
} else {
return ff_compiler_Inference.Inference_inferEtaExpansion(self_, environment_, expected_, e_.at_, instantiated_.scheme_.signature_, term_)
}
})), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}))
return
}
if(_1.EField) {
const e_ = _1;
const recordType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, term_.at_)) {
for(const for_o = hookRecordTypeBox_; for_o.Some;) {
const _w1 = for_o.value_;
_w1.value_ = ff_core_Option.Some(recordType_)
break
}
};
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, e_.record_);
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_);
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
const fieldNames_ = ff_core_List.List_dropFirst(ff_core_String.String_split(name_, 36), 1);
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
const definedAt_ = ff_core_List.List_collectFirst(ff_core_List.List_zip(fieldNames_, typeArguments_), ((_1) => {
{
const fieldName_ = _1.first_;
const fieldType_ = _1.second_;
if((e_.field_ === fieldName_)) {
return ff_core_Option.Some(ff_compiler_Unification.Unification_substitute(self_.unification_, fieldType_).at_)
} else return ff_core_Option.None()
return
}
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, e_.at_) || ff_core_Option.Option_any(definedAt_, ((_w1) => {
return ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, _w1)
})))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferRecordFieldHook(e_.at_, self_.unification_, environment_, expected_, t_, e_.field_))
}
};
return ff_core_Option.Option_else(ff_core_Option.Option_elseIf(ff_core_Option.Option_map(ff_core_Option.Option_map(ff_core_List.List_find(ff_core_List.List_pairs(fieldNames_), ((_w1) => {
return (_w1.second_ === e_.field_)
})), ((_w1) => {
return _w1.first_
})), ((index_) => {
const t1_ = (typeArguments_[index_] ?? ff_core_List.List_grab(typeArguments_, index_));
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, record_, _c.field_)
}
}
})), (() => {
return ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)
}), (() => {
return term_
})), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}))
return
}
}
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
const memberPrefix_ = (name_ + "_");
const memberName_ = (memberPrefix_ + e_.field_);
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, memberName_, typeArguments_, ff_core_Option.None());
if(_1.Some) {
const instantiated_ = _1.value_;
if((!instantiated_.scheme_.isVariable_)) {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, _c.constraints_, ff_core_List.List_dropFirst(instantiated_.scheme_.signature_.parameters_, 1), _c.returnType_, _c.effect_)
}))(instantiated_.scheme_.signature_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, recordType_, (instantiated_.scheme_.signature_.parameters_[0] ?? ff_core_List.List_grab(instantiated_.scheme_.signature_.parameters_, 0)).valueType_);
return ff_compiler_Inference.Inference_inferEtaExpansion(self_, environment_, expected_, e_.at_, signature_, term_)
}
}
if(_1.Some) {
const instantiated_ = _1.value_;
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, instantiated_.scheme_.isNewtype_, record_, _c.field_)
}
}
return
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.TVariable && ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return term_
}
if(_1.TVariable) {
const index_ = _1.index_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.EWildcard) {
const e_ = _1;
return ff_core_Option.Option_grab(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, ("_w" + e_.index_), [], ff_core_Option.None()), ((instantiated_) => {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
return term_
})))
return
}
if(_1.EList) {
const at_ = _1.at_;
const t_ = _1.elementType_;
const items_ = _1.items_;
const listType_ = ff_compiler_Syntax.TConstructor(term_.at_, ff_compiler_Inference.core_("List"), [t_]);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_);
return ff_compiler_Syntax.EList(at_, t_, ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_;
const spread_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Inference.Inference_inferTerm(self_, environment_, (spread_
? listType_
: t_), item_), spread_)
return
}
})))
return
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, before_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferSequentialStartHook(self_.unification_, term_, self_.missing_))
};
const newExpected_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
{
const _1 = before_;
if(_1.EPipe && _1.function_.ELambda) {
const at1_ = _1.at_;
const value_ = _1.value_;
const effect1_ = _1.effect_;
const at2_ = _1.function_.at_;
const at3_ = _1.function_.lambda_.at_;
const effect3_ = _1.function_.lambda_.effect_;
const cases_ = _1.function_.lambda_.cases_;
const e_ = ff_compiler_Syntax.EVariant(at_, "ff:core/Unit.Unit", [], ff_core_Option.None());
const newCases_ = ff_core_List.List_map(cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.guards_, ff_compiler_Syntax.ESequential(case_.at_, case_.body_, e_))
}
}
}));
const newPipe_ = ff_compiler_Syntax.EPipe(at1_, value_, effect1_, ff_compiler_Syntax.ELambda(at2_, ff_compiler_Syntax.Lambda(at3_, effect3_, newCases_)));
{
const _1 = after_;
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
const unitType_ = ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Unit"), []);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, unitType_);
return ff_compiler_Inference.Inference_inferTerm(self_, environment_, newExpected_, newPipe_)
}
{
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, newExpected_, newPipe_), ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, after_))
}
}
return
}
{
const unitName_ = ff_compiler_Inference.core_("Unit");
function semicolonUnit_(body_) {
const body_a = body_;
if(body_a.ECall) {
const e_ = body_a;
const _guard3 = e_.target_;
if(_guard3.DynamicCall) {
const c_ = _guard3;
const _guard2 = c_.function_;
if(_guard2.EVariable) {
const x_ = _guard2;
if(((x_.name_ === "ff:core/Core.if") || (x_.name_ === "ff:core/Core.try"))) {
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, _c.target_, _c.effect_, _c.typeArguments_, ff_core_List.List_map(e_.arguments_, ((_1) => {
{
const a_ = _1;
const _guard1 = a_.value_;
if(_guard1.ELambda) {
const l_ = _guard1;
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, (((_c) => {
return ff_compiler_Syntax.ELambda(_c.at_, (((_c) => {
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(l_.lambda_.cases_, ((c_) => {
{
const _1 = c_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.guards_, ff_compiler_Syntax.ESequential(c_.at_, c_.body_, ff_compiler_Syntax.EVariant(c_.at_, unitName_, [], ff_core_Option.None())))
}
}
})))
}))(l_.lambda_))
}))(l_))
return
}
}
return
}
}
{
const a_ = _1;
return a_
}
})), _c.dictionaries_)
return
}
}
return
}
}
}
}
if(body_a.ECall) {
const e_ = body_a;
const _guard3 = e_.target_;
if(_guard3.DynamicCall) {
const c_ = _guard3;
const _guard2 = c_.function_;
if(_guard2.EField) {
const f_ = _guard2;
if(((((((((f_.field_ === "else") || (f_.field_ === "elseIf")) || (f_.field_ === "tryCatch")) || (f_.field_ === "tryCatchAny")) || (f_.field_ === "tryFinally")) || (f_.field_ === "catch")) || (f_.field_ === "catchAny")) || (f_.field_ === "finally"))) {
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall((((_c) => {
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, semicolonUnit_(f_.record_), _c.field_)
}))(f_), _c.tailCall_)
}))(c_), _c.effect_, _c.typeArguments_, _c.arguments_, _c.dictionaries_)
return
}
}
return
}
}
}
}
if(body_a.ESequential) {
const e_ = body_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, _c.before_, semicolonUnit_(e_.after_))
}
}
return
}
if(body_a.ELet) {
const e_ = body_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, _c.value_, semicolonUnit_(e_.body_))
}
}
return
}
if(body_a.EFunctions) {
const e_ = body_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EFunctions(_c.at_, _c.functions_, semicolonUnit_(e_.body_))
}
}
return
}
{
return body_
}
}
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, newExpected_, semicolonUnit_(before_)), ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, after_))
}
}
return
}
if(_1.ELet) {
const e_ = _1;
const noEffect_ = ff_compiler_Syntax.TConstructor(e_.at_, "ff:core/Nothing.Nothing", []);
const scheme_ = ff_compiler_Environment.Scheme(true, e_.mutable_, false, false, ff_compiler_Syntax.Signature(e_.at_, e_.name_, false, [], [], [], e_.valueType_, noEffect_));
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_add(environment_.symbols_, e_.name_, scheme_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}))(environment_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, e_.valueType_, e_.value_), ff_compiler_Inference.Inference_inferTerm(self_, environment2_, expected_, e_.body_))
}
}
return
}
if(_1.ELambda) {
const at_ = _1.at_;
const l_ = _1.lambda_;
do {
const _1 = l_.cases_;
if(_1.length === 1 && _1[0].patterns_.length === 0 && _1[0].guards_.length === 0 && _1[0].body_.EVariable && _1[0].body_.name_ === "") {
const insideAt_ = _1[0].body_.at_;
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, insideAt_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferLambdaStartHook(self_.unification_, environment_, expected_))
break
}
}
if(_1.length === 1 && _1[0].patterns_.length === 0 && _1[0].guards_.length === 0 && _1[0].body_.ESequential && _1[0].body_.before_.EVariable && _1[0].body_.before_.name_ === "" && _1[0].body_.after_.EVariant && _1[0].body_.after_.name_ === "ff:core/Unit.Unit") {
const insideAt_ = _1[0].body_.before_.at_;
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, insideAt_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferLambdaStartHook(self_.unification_, environment_, expected_))
break
}
}
{

break
}
} while(false);
const lambda_ = ff_compiler_Inference.Inference_inferLambda(self_, environment_, expected_, l_);
return ff_compiler_Syntax.ELambda(at_, lambda_)
}
if(_1.EVariant) {
const e_ = _1;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, e_.typeArguments_, e_.arguments_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
const arguments_ = ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_compiler_Inference.Inference_inferArguments(self_, e_.at_, e_.name_, environment_, instantiated_.scheme_.signature_.parameters_, _w1)
}));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, ff_core_List.List_map(instantiated_.typeArguments_, ((_w1) => {
return _w1.second_
})), arguments_)
return
}
}
return
}
if(_1.EVariantIs) {
const e_ = _1;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, e_.typeArguments_, ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
const parameters_ = ff_core_List.List_sortBy(instantiated_.scheme_.signature_.parameters_, ((_w1) => {
return _w1.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const recordType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.name_
})), "$")), ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.valueType_
})));
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, "Function$1", [ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_), instantiated_.scheme_.signature_.returnType_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Option"), [recordType_])]);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, functionType_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariantIs(_c.at_, _c.name_, ff_core_List.List_map(instantiated_.typeArguments_, ((_w1) => {
return _w1.second_
})))
return
}
}
return
}
if(_1.ECopy) {
const e_ = _1;
const scheme_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, [], ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
})).scheme_;
if(scheme_.isNewtype_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Newtypes can't be copied"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const signature_ = scheme_.signature_;
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
for(let for_a = e_.arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const a_ = for_a[for_i];
const p_ = ff_core_List.List_find(signature_.parameters_, ((_w1) => {
return (_w1.name_ === a_.name_)
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, a_.at_) || ff_core_Option.Option_any(p_, ((_w1) => {
return ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, _w1.at_)
})))) {
const arguments_ = ff_core_List.List_map(e_.arguments_, ((f_) => {
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, ff_core_Option.Some(f_.name_), _c.value_)
}
}
}));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferArgumentHook(self_.unification_, environment_, true, term_.at_, e_.name_, signature_.parameters_, arguments_, i_))
}
}
};
const parameterNames_ = ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
}));
ff_core_Option.Option_each(ff_core_List.List_find(e_.arguments_, ((a_) => {
return (!ff_core_List.List_any(parameterNames_, ((_w1) => {
return (_w1 === a_.name_)
})))
})), ((_1) => {
{
const at_ = _1.at_;
const name_ = _1.name_;
const value_ = _1.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("Unknown parameter: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}));
const arguments_ = ff_core_List.List_map(parameterNames_, ((name_) => {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(e_.arguments_, ((_w1) => {
return (_w1.name_ === name_)
})), ((_1) => {
{
const at_ = _1.at_;
const value_ = _1.value_;
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(name_), value_)
}
})), (() => {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((e_.at_.file_ + "/<copy>"), _c.line_, _c.column_)
}))(e_.at_);
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "_c"), name_))
}))
}));
const body_ = ff_compiler_Syntax.EVariant(e_.at_, e_.name_, [], ff_core_Option.Some(arguments_));
const effect_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Syntax.EPipe(e_.at_, e_.record_, effect_, ff_compiler_Syntax.ELambda(e_.at_, ff_compiler_Syntax.Lambda(e_.at_, effect_, [ff_compiler_Syntax.MatchCase(e_.at_, [ff_compiler_Syntax.PVariable(e_.at_, ff_core_Option.Some("_c"))], [], body_)])));
return ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, e1_)
}
if(_1.EPipe) {
const e_ = _1;
const valueType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, "Function$1", [e_.effect_, valueType_, expected_]);
const value_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, valueType_, e_.value_);
const function_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, functionType_, e_.function_);
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, e_.effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, value_, _c.effect_, function_)
}
}
return
}
if(_1.ECall) {
const e_ = _1;
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((_1) => {
if(_1.StaticCall) {
return true
}
{
return false
}
}))(e_.target_))) {
return term_
} else {
const call_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
return {
function_: call_.function_,
tailCall_: call_.tailCall_
}
return
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in the Inference phase")
}
}))(e_.target_);
{
const _1 = call_.function_;
if(_1.EVariable) {
const variableAt_ = _1.at_;
const x_ = _1.name_;
if(ff_core_Option.Option_any(ff_core_String.String_first(x_), ((c_) => {
return ((c_ !== 95) && (!ff_core_Char.Char_isAsciiLetter(c_)))
}))) {
return ff_compiler_Inference.Inference_inferOperator(self_, environment_, expected_, x_, term_)
} else {
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, x_, e_.typeArguments_, ff_core_Option.Some(e_.arguments_));
if(_1.Some) {
const instantiated_ = _1.value_;
if(instantiated_.scheme_.isVariable_) {
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, term_)
} else {
const signature_ = instantiated_.scheme_.signature_;
return ff_compiler_Inference.Inference_inferFunctionCall(self_, environment_, expected_, signature_, instantiated_.scheme_.isTraitMethod_, instantiated_.typeArguments_, term_, x_)
}
return
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(variableAt_, ("No such function: " + x_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
}
return
}
if(_1.EField) {
const f_ = _1;
const recordType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, f_.at_);
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, term_.at_)) {
for(const for_o = hookRecordTypeBox_; for_o.Some;) {
const _w1 = for_o.value_;
_w1.value_ = ff_core_Option.Some(recordType_)
break
}
};
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, f_.record_);
const e2_ = (((_c) => {
return ff_compiler_Syntax.ECall(_c.at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall((((_c) => {
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, record_, _c.field_)
}))(f_), _c.tailCall_)
}))(call_), _c.effect_, _c.typeArguments_, _c.arguments_, _c.dictionaries_)
}))(e_);
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_);
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const methodName_ = ((name_ + "_") + f_.field_);
const arguments_ = [ff_compiler_Syntax.Argument(f_.record_.at_, ff_core_Option.None(), f_.record_), ...e_.arguments_];
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, f_.at_, methodName_, [], ff_core_Option.Some(arguments_));
if(_1.Some) {
const instantiated_ = _1.value_;
if((!instantiated_.scheme_.isVariable_)) {
return ff_compiler_Inference.Inference_inferMethodCall(self_, environment_, expected_, instantiated_.scheme_.signature_, instantiated_.typeArguments_, e2_, record_, recordType_, methodName_)
}
}
if(_1.Some) {
const instantiated_ = _1.value_;
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, e2_)
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(f_.at_, ((("No such field " + f_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.TVariable && ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, e2_)
}
if(_1.TVariable) {
const index_ = _1.index_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(f_.at_, ((("No such field " + f_.field_) + " on unknown type: $") + index_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
{
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, term_)
}
}
}
return
}
if(_1.ERecord) {
const e_ = _1;
const fields_ = ff_core_List.List_sortBy(e_.fields_, ((_w1) => {
return _w1.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const fieldTypes_ = ff_core_List.List_map(fields_, ((_w1) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, _w1.at_)
}));
const recordType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(fields_, ((_w1) => {
return _w1.name_
})), "$")), fieldTypes_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, recordType_);
const newFields_ = ff_core_List.List_map(ff_core_List.List_zip(fields_, fieldTypes_), ((_1) => {
{
const field_ = _1.first_;
const t_ = _1.second_;
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, field_.value_))
}
}
return
}
}));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ERecord(_c.at_, newFields_)
}
}
return
}
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionMap_ = ff_core_List.List_toMap(ff_core_List.List_map(functions_, ((f_) => {
const scheme_ = ff_compiler_Environment.Scheme(false, false, false, false, f_.signature_);
return ff_core_Pair.Pair(f_.signature_.name_, scheme_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment_.symbols_, functionMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}))(environment_);
const newFunctions_ = ff_core_List.List_map(functions_, ((_w1) => {
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment2_, _w1)
}));
const newBody_ = ff_compiler_Inference.Inference_inferTerm(self_, environment2_, expected_, body_);
return ff_compiler_Syntax.EFunctions(at_, newFunctions_, newBody_)
}
if(_1.EAssign) {
const e_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.variable_, [], ff_core_Option.None()), ((instantiated_) => {
if((instantiated_.scheme_.isMutable_ || ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
const value_ = ff_compiler_Inference.Inference_inferAssignment(self_, environment_, expected_, e_.at_, e_.operator_, e_.value_, instantiated_.scheme_.signature_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, value_)
}
}
} else {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol is not mutable: " + e_.variable_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
})), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.variable_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}))
return
}
if(_1.EAssignField) {
const e_ = _1;
const recordType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, e_.record_);
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_);
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Can't assign fields of anonymous records: " + e_.field_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
const methodName_ = ((name_ + "_") + e_.field_);
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, methodName_, typeArguments_, ff_core_Option.None());
if(_1.Some) {
const instantiated_ = _1.value_;
if((instantiated_.scheme_.isMutable_ || ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
const value_ = ff_compiler_Inference.Inference_inferAssignment(self_, environment_, expected_, e_.at_, e_.operator_, e_.value_, instantiated_.scheme_.signature_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, record_, _c.field_, value_)
}
}
return
}
}
if(_1.Some) {
const instantiated_ = _1.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("Can't assign an immutable field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.TVariable && ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return term_
}
if(_1.TVariable) {
const index_ = _1.index_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
}
}

export function Inference_inferAssignment(self_, environment_, expected_, at_, operator_, value_, signature_) {
const t_ = signature_.returnType_;
const newValue_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, value_);
if(((((operator_ === "+") || (operator_ === "-")) || (operator_ === "*")) || (operator_ === "/"))) {
do {
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_);
if(_1.TConstructor) {
const name_ = _1.name_;
if(((((name_ === ff_compiler_Inference.core_("Int")) || (name_ === ff_compiler_Inference.core_("Float"))) || (name_ === ff_compiler_Inference.core_("JsValue"))) || ((name_ === ff_compiler_Inference.core_("String")) && (operator_ === "+")))) {

break
}
}
{
ff_compiler_Unification.Unification_unify(self_.unification_, at_, t_, ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Int"), []))
break
}
} while(false)
} else if((operator_ !== "")) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, (("Only +=, -=, *=, /= and = assignments are supported. Got: " + operator_) + "=")), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else {};
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Unit"), []));
return newValue_
}

export function Inference_inferMethodCall(self_, environment_, expected_, signature_, instantiation_, term_, record_, recordType_, name_) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
const tailCall_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
return call_.tailCall_
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in inferMethodCall")
}
}))(e_.target_);
const selfParameter_ = ff_core_List.List_grabFirst(signature_.parameters_);
const selfArgument_ = ff_compiler_Syntax.Argument(record_.at_, ff_core_Option.Some(selfParameter_.name_), record_);
ff_compiler_Unification.Unification_unify(self_.unification_, term_.at_, expected_, signature_.returnType_);
ff_compiler_Unification.Unification_unify(self_.unification_, term_.at_, selfParameter_.valueType_, recordType_);
const arguments_ = ff_compiler_Inference.Inference_inferArguments(self_, term_.at_, name_, environment_, ff_core_List.List_dropFirst(signature_.parameters_, 1), e_.arguments_);
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, signature_.effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, ff_compiler_Syntax.StaticCall(name_, tailCall_, false), signature_.effect_, ff_core_List.List_map(instantiation_, ((_w1) => {
return _w1.second_
})), [selfArgument_, ...arguments_], _c.dictionaries_)
return
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export function Inference_inferFunctionCall(self_, environment_, expected_, signature_, instanceCall_, instantiation_, term_, name_) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
let isUnsafeJsAwaitCall_ = false;
const tailCall_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
do {
const _1 = call_.function_;
if(_1.EVariable && _1.name_ === "ff:core/Js.await") {
isUnsafeJsAwaitCall_ = true
break
}
if(_1.EVariable && _1.name_ === "ff:core/Js.awaitCancellablePromise") {
isUnsafeJsAwaitCall_ = true
break
}
{

break
}
} while(false);
return call_.tailCall_
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in inferFunctionCall")
}
}))(e_.target_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, signature_.returnType_);
const arguments_ = ff_compiler_Inference.Inference_inferArguments(self_, e_.at_, name_, environment_, signature_.parameters_, e_.arguments_);
const effect_ = (isUnsafeJsAwaitCall_
? ff_compiler_Syntax.TConstructor(term_.at_, "Q$", [])
: signature_.effect_);
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, ff_compiler_Syntax.StaticCall(name_, tailCall_, instanceCall_), effect_, ff_core_List.List_map(instantiation_, ((_w1) => {
return _w1.second_
})), arguments_, _c.dictionaries_)
return
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export function Inference_inferLambdaCall(self_, environment_, expected_, term_) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
const call_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
if((!call_.tailCall_)) {
return {
function_: call_.function_,
tailCall_: call_.tailCall_
}
return
}
}
if(_1.DynamicCall) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Tailcalls not supported on lambda functions"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in inferLambdaCall")
}
}))(e_.target_);
const effect_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, term_.at_);
const argumentTypes_ = ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, _w1.at_)
}));
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Function$" + e_.arguments_.length), [effect_, ...argumentTypes_, expected_]);
const function_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, functionType_, call_.function_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_zip(e_.arguments_, argumentTypes_), ((_1) => {
{
const argument_ = _1.first_;
const t_ = _1.second_;
for(const for_o = argument_.name_; for_o.Some;) {
const name_ = for_o.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(argument_.at_, ("Named argument not allowed here: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
};
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, argument_.value_))
}
}
return
}
}));
for(const for_o = ff_core_List.List_first(e_.typeArguments_); for_o.Some;) {
const typeArgument_ = for_o.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(typeArgument_.at_, "Type arguments not allowed here"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
};
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall(function_, _c.tailCall_)
}))(call_), effect_, [], arguments_, _c.dictionaries_)
return
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export function Inference_inferOperator(self_, environment_, expected_, operator_, term_) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
const target_ = ff_compiler_Syntax.StaticCall(operator_, false, false);
{
const _1 = e_.arguments_;
if(_1.length === 1) {
const a1_ = _1[0];
if((operator_ === "!")) {
const t_ = ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), []);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a1_.value_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 1) {
const a1_ = _1[0];
if((operator_ === "-")) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
do {
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t1_);
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Float"))) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
break
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Int"))) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
break
}
}
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {

break
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Operators on unknown types not currently supported"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} while(false);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((operator_ === "||") || (operator_ === "&&"))) {
const t_ = ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), []);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a2_.value_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((operator_ === "===") || (operator_ === "!=="))) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a2_.value_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), []));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((operator_ === "/") || (operator_ === "%"))) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const t2_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t2_, a2_.value_);
const magic_ = ((t_) => {
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_);
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Float"))) {

return
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Int"))) {

return
}
}
{
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, t_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Float"), []))
return
}
}
});
magic_(t1_);
magic_(t2_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Float"), []));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((((operator_ === "+") || (operator_ === "-")) || (operator_ === "*")) || (operator_ === "^"))) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const t2_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t2_, a2_.value_);
const magic_ = ((t_) => {
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_);
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("JsValue"))) {
return ff_core_Option.Some("JsValue")
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Float"))) {
return ff_core_Option.Some("Float")
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Int"))) {
return ff_core_Option.Some("Int")
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if(((operator_ === "+") && (name_ === ff_compiler_Inference.core_("String")))) {
return ff_core_Option.Some("String")
}
}
{
return ff_core_Option.None()
}
}
});
const chooseType_ = ((_1, _2) => {
if(_1.Some && _1.value_ === "JsValue") {
ff_compiler_Unification.Unification_unify(self_.unification_, e2_.at_, t1_, t2_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_2.Some && _2.value_ === "JsValue") {
ff_compiler_Unification.Unification_unify(self_.unification_, e1_.at_, t2_, t1_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _1.value_ === "String" && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.Some && _2.Some && _2.value_ === "String") {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _1.value_ === "Float" && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.Some && _2.Some && _2.value_ === "Float") {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _1.value_ === "Int" && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.Some && _2.Some && _2.value_ === "Int") {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _2.None) {
ff_compiler_Unification.Unification_unify(self_.unification_, e2_.at_, t1_, t2_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.None && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e1_.at_, t2_, t1_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {

return
}
if(_1.Some && _2.Some) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Operators on these types not currently supported"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
if(_1.None && _2.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Operators on unknown types not currently supported"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
});
chooseType_(magic_(t1_), magic_(t2_));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return term_
}
{
return ff_compiler_Inference.fail_(e_.at_, ("Unknown operator: " + operator_))
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export function Inference_inferEtaExpansion(self_, environment_, expected_, at_, signature_, term_) {
const parameters_ = ff_core_List.List_map(ff_core_List.List_filter(signature_.parameters_, ((_w1) => {
return ff_core_Option.Option_isEmpty(_w1.default_)
})), ((p_) => {
return p_.name_
}));
const effect1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const body_ = ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(term_, false), effect1_, [], ff_core_List.List_map(parameters_, ((x_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(x_), ff_compiler_Syntax.EVariable(at_, x_))
})), []);
const effect2_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const lambda_ = ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, effect2_, [ff_compiler_Syntax.MatchCase(at_, ff_core_List.List_map(parameters_, ((_w1) => {
return ff_compiler_Syntax.PVariable(at_, ff_core_Option.Some(_w1))
})), [], body_)]));
return ff_compiler_Inference.Inference_inferTerm(self_, (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, _c.symbols_, _c.traits_, _c.imports_, effect2_, _c.selfVariable_)
}))(environment_), expected_, lambda_)
}

export function Inference_inferArguments(self_, callAt_, callName_, environment_, parameters_, arguments_) {
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const a_ = for_a[for_i];
const p_ = ff_core_List.List_find(parameters_, ((p_) => {
return ff_core_Option.Option_any(a_.name_, ((_w1) => {
return (_w1 === p_.name_)
}))
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, a_.at_) || ff_core_Option.Option_any(p_, ((_w1) => {
return ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, _w1.at_)
})))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferArgumentHook(self_.unification_, environment_, false, callAt_, callName_, parameters_, arguments_, i_))
}
}
};
let remainingArguments_ = ff_core_List.List_toArray(arguments_);
ff_core_Array.Array_reverse(remainingArguments_);
const newArguments_ = ff_core_List.List_map(parameters_, ((p_) => {
const t_ = p_.valueType_;
function defaultArgument_() {
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.default_, ((e_) => {
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, e_);
return ff_compiler_Syntax.Argument(callAt_, ff_core_Option.Some(p_.name_), e2_)
})), (() => {
if((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
return ff_compiler_Inference.fail_(callAt_, ("Missing argument: " + p_.name_))
} else {
return ff_compiler_Syntax.Argument(callAt_, ff_core_Option.Some(p_.name_), ff_compiler_Syntax.EVariable(callAt_, ""))
}
}))
}
if(ff_core_Array.Array_isEmpty(remainingArguments_)) {
return defaultArgument_()
} else if(ff_core_Option.Option_isEmpty(ff_core_Array.Array_grabLast(remainingArguments_).name_)) {
const a_ = ff_core_Option.Option_grab(ff_core_Array.Array_pop(remainingArguments_));
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a_.value_);
return ff_compiler_Syntax.Argument(a_.at_, ff_core_Option.Some(p_.name_), e2_)
} else {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Array.Array_find(remainingArguments_, ((_w1) => {
return ff_core_Option.Option_contains(_w1.name_, p_.name_, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String)
})), ((_1) => {
{
const at_ = _1.at_;
const e_ = _1.value_;
for(const for_o = ff_core_Array.Array_indexWhere(remainingArguments_, ((_w1) => {
return ff_core_Option.Option_contains(_w1.name_, p_.name_, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String)
})); for_o.Some;) {
const _w1 = for_o.value_;
ff_core_Array.Array_delete(remainingArguments_, _w1, 1)
break
};
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, e_);
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(p_.name_), e2_)
}
})), (() => {
return defaultArgument_()
}))
}
}));
if((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
ff_core_Option.Option_each(ff_core_Array.Array_first(remainingArguments_), ((_1) => {
if(_1.name_.None) {
const callAt_ = _1.at_;
ff_compiler_Inference.fail_(callAt_, "Too many arguments")
return
}
if(_1.name_.Some) {
const callAt_ = _1.at_;
const n_ = _1.name_.value_;
ff_compiler_Inference.fail_(callAt_, ("Unknown argument: " + n_))
return
}
}));
return newArguments_
} else {
return [...newArguments_, ...ff_core_List.List_map(ff_core_Array.Array_drain(remainingArguments_), ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, a_.at_), a_.value_))
}
}
}))]
}
}

export function Inference_lookup(self_, environment_, expected_, at_, symbol_, typeArguments_, arguments_) {
return ff_core_Option.Option_elseIf(ff_compiler_Inference.Inference_lookupOption(self_, environment_, expected_, at_, symbol_, typeArguments_), (() => {
return ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)
}), (() => {
const instantiated_ = ff_compiler_Environment.Instantiated([], ff_compiler_Environment.Scheme(ff_core_Option.Option_isEmpty(arguments_), false, false, false, ff_compiler_Syntax.Signature(at_, symbol_, false, [], [], ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_))), ((_1) => {
{
const i_ = _1.first_;
const a_ = _1.second_;
const t_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
return ff_compiler_Syntax.Parameter(a_.at_, false, ff_core_Option.Option_else(a_.name_, (() => {
return ("_p" + i_)
})), t_, ff_core_Option.None())
return
}
})), ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_), ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_))));
if(((!ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_)) && (!ff_core_StringMap.StringMap_has(self_.missing_, symbol_)))) {
ff_core_StringMap.StringMap_set(self_.missing_, symbol_, ff_core_Pair.Pair(instantiated_, arguments_))
};
return instantiated_
}))
}

export function Inference_lookupOption(self_, environment_, expected_, at_, symbol_, typeArguments_) {
const hook_ = (ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_)
? ff_core_Option.Some((function() {
const symbolHook_ = ff_compiler_LspHook.SymbolHook(symbol_, at_, at_);
const selfName_ = environment_.selfVariable_;
const h_ = ff_compiler_LspHook.InferLookupHook(self_.unification_, environment_, expected_, selfName_, ff_compiler_LspHook.Box(symbolHook_), ff_compiler_LspHook.Box(ff_core_Option.None()));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, h_);
return h_
})())
: ff_core_Option.None());
return ff_core_Option.Option_map(ff_core_Map.Map_get(environment_.symbols_, symbol_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((scheme_) => {
const instantiation_ = ((!ff_core_List.List_isEmpty(typeArguments_))
? (function() {
const newTypeArguments_ = (((!scheme_.isVariable_) && ff_core_Option.Option_any(ff_core_List.List_first(scheme_.signature_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))
? [ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_), ...typeArguments_]
: typeArguments_);
if(((scheme_.signature_.generics_.length !== newTypeArguments_.length) && (!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)))) {
const extra_ = (newTypeArguments_.length - typeArguments_.length);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((((("Wrong number of type arguments for " + symbol_) + ", expected ") + (scheme_.signature_.generics_.length - extra_)) + ", got ") + (newTypeArguments_.length - extra_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return ff_core_List.List_zip(scheme_.signature_.generics_, newTypeArguments_)
})()
: ff_core_List.List_map(scheme_.signature_.generics_, ((name_) => {
return ff_core_Pair.Pair(name_, ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_))
})));
const instantiationMap_ = ff_core_List.List_toMap(instantiation_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const parameters_ = ff_core_List.List_map(scheme_.signature_.parameters_, ((p_) => {
{
const _1 = p_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, p_.valueType_), _c.default_)
}
}
}));
const returnType_ = ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, scheme_.signature_.returnType_);
const effect_ = ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, scheme_.signature_.effect_);
for(let for_a = scheme_.signature_.constraints_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
const generics_ = ff_core_List.List_map(c_.generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, _w1)
}));
ff_compiler_Unification.Unification_constrain(self_.unification_, at_, ff_core_List.List_grabFirst(generics_), c_.name_, ff_core_List.List_dropFirst(generics_, 1))
};
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, [], [], parameters_, returnType_, effect_)
}))(scheme_.signature_);
const instantiated_ = ff_compiler_Environment.Instantiated(instantiation_, (((_c) => {
return ff_compiler_Environment.Scheme(_c.isVariable_, _c.isMutable_, _c.isNewtype_, _c.isTraitMethod_, signature_)
}))(scheme_));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, scheme_.signature_.at_))) {
const symbolHook_ = ff_compiler_LspHook.SymbolHook(symbol_, at_, scheme_.signature_.at_);
const emittedHook_ = (((_1) => {
if(_1.InferLookupHook) {
const h_ = _1;
h_.symbol_.value_ = symbolHook_;
h_.instantiated_.value_ = ff_core_Option.Some(instantiated_)
return
}
{

return
}
}))(ff_core_Option.Option_else(hook_, (() => {
const selfName_ = environment_.selfVariable_;
const h_ = ff_compiler_LspHook.InferLookupHook(self_.unification_, environment_, expected_, selfName_, ff_compiler_LspHook.Box(symbolHook_), ff_compiler_LspHook.Box(ff_core_Option.None()));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, h_);
return h_
})));

};
return instantiated_
}))
}

export async function Inference_inferModule$(self_, module_, otherModules_, $task) {
const environment_ = ff_compiler_Environment.new_(module_, otherModules_, false);
const traits_ = ff_core_List.List_map(module_.traits_, ((_w1) => {
return ff_compiler_Inference.Inference_inferTraitDefinition(self_, environment_, _w1)
}));
const instances_ = ff_core_List.List_map(module_.instances_, ((_w1) => {
return ff_compiler_Inference.Inference_inferInstanceDefinition(self_, environment_, _w1)
}));
const lets_ = ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_Inference.Inference_inferLetDefinition(self_, environment_, _w1)
}));
const functions_ = ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment_, _w1)
}));
const extends_ = ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_Inference.Inference_inferExtendDefinition(self_, environment_, _w1)
}));
const result_ = (((_c) => {
return ff_compiler_Syntax.Module(_c.file_, _c.packagePair_, _c.imports_, _c.types_, traits_, instances_, extends_, lets_, functions_)
}))(module_);
const subsititution_ = ff_compiler_Substitution.Substitution(self_.unification_.substitution_);
return ff_compiler_Substitution.Substitution_substituteModule(subsititution_, result_)
}

export async function Inference_inferTraitDefinition$(self_, environment_, definition_, $task) {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DTrait(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.generatorParameters_, _c.methods_, _c.methodDefaults_, _c.methodGenerators_)
}
}
}

export async function Inference_inferInstanceDefinition$(self_, environment_, definition_, $task) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && definition_.derived_)) {
return definition_
} else {
const instances_ = ff_compiler_Inference.constraintsToInstances_(definition_.constraints_);
return ff_compiler_Unification.Unification_withLocalInstances(self_.unification_, instances_, (() => {
const traitName_ = definition_.traitName_;
const traitDefinition_ = ff_core_Option.Option_else(ff_core_Map.Map_get(environment_.traits_, traitName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(definition_.at_, ("No such trait: " + traitName_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
if((traitDefinition_.generics_.length !== definition_.typeArguments_.length)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(definition_.at_, ((((("Wrong number of type arguments for " + traitName_) + ", expected ") + (traitDefinition_.generics_.length - 1)) + ", got ") + (definition_.typeArguments_.length - 1))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const instantiationMap_ = ff_core_List.List_toMap(ff_core_List.List_zip(traitDefinition_.generics_, definition_.typeArguments_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
for(let for_a = traitDefinition_.methods_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const traitMethod_ = for_a[for_i];
const found_ = ff_core_List.List_filter(definition_.methods_, ((_w1) => {
return (_w1.signature_.name_ === traitMethod_.name_)
}));
if(ff_core_List.List_isEmpty(found_)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(definition_.at_, ("Missing instance method: " + traitMethod_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
for(let for_a = found_, for_i = 1, for_l = for_a.length; for_i < for_l; for_i++) {
const duplicateMethod_ = for_a[for_i];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(duplicateMethod_.at_, ("Duplicated instance method: " + traitMethod_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DInstance(_c.at_, _c.generics_, _c.constraints_, _c.traitName_, _c.typeArguments_, _c.generatorArguments_, ff_core_List.List_map(definition_.methods_, ((instanceFunction_) => {
const methodName_ = instanceFunction_.signature_.name_;
const traitMethodName_ = (ff_core_String.String_reverse(ff_core_String.String_dropWhile(ff_core_String.String_reverse(traitName_), ((_w1) => {
return (_w1 !== 46)
}))) + methodName_);
const traitMethodScheme_ = ff_core_Option.Option_else(ff_core_Map.Map_get(environment_.symbols_, traitMethodName_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(instanceFunction_.at_, ((("Trait " + traitName_) + " has no such method: ") + methodName_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
const parameters_ = ff_core_List.List_map(traitMethodScheme_.signature_.parameters_, ((p_) => {
{
const _1 = p_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, p_.valueType_), _c.default_)
}
}
}));
const returnType_ = ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, traitMethodScheme_.signature_.returnType_);
for(let for_a = instanceFunction_.signature_.parameters_, for_i = Math.max(parameters_.length, 0), for_l = for_a.length; for_i < for_l; for_i++) {
const instanceParameter_ = for_a[for_i];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(instanceParameter_.at_, ("Unexpected parameter: " + instanceParameter_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
for(let for_a = parameters_, for_i = Math.max(instanceFunction_.signature_.parameters_.length, 0), for_l = for_a.length; for_i < for_l; for_i++) {
const traitParameter_ = for_a[for_i];
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(instanceFunction_.at_, ("Missing parameter: " + traitParameter_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
for(let for_a = parameters_, for_i = 0, for_l = for_a.length, for_a2 = instanceFunction_.signature_.parameters_, for_i2 = 0, for_l2 = for_a2.length; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {
const traitParameter_ = for_a[for_i];
const instanceParameter_ = for_a2[for_i2];
ff_compiler_Unification.Unification_unify(self_.unification_, instanceParameter_.valueType_.at_, traitParameter_.valueType_, instanceParameter_.valueType_)
};
ff_compiler_Unification.Unification_unify(self_.unification_, instanceFunction_.signature_.returnType_.at_, returnType_, instanceFunction_.signature_.returnType_);
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, instanceFunction_.at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, traitMethodScheme_.signature_.at_))) {
const symbolHook_ = ff_compiler_LspHook.SymbolHook(instanceFunction_.signature_.name_, instanceFunction_.at_, traitMethodScheme_.signature_.at_);
const h_ = ff_compiler_LspHook.InferLookupHook(self_.unification_, environment_, instanceFunction_.signature_.returnType_, ff_core_Option.None(), ff_compiler_LspHook.Box(symbolHook_), ff_compiler_LspHook.Box(ff_core_Option.None()));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, h_)
};
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment_, instanceFunction_)
})), _c.derived_)
return
}
}
}))
}
}

export async function Inference_inferLetDefinition$(self_, environment_, definition_, $task) {
const value_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, definition_.variableType_, definition_.value_);
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DLet(_c.at_, _c.name_, _c.variableType_, value_)
}
}
}

export async function Inference_inferExtendDefinition$(self_, environment_, definition_, $task) {
const selfParameter_ = ff_compiler_Syntax.Parameter(definition_.at_, false, definition_.name_, definition_.type_, ff_core_Option.None());
const functions_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, [...definition_.generics_, ...method_.signature_.generics_], [...definition_.constraints_, ...method_.signature_.constraints_], [selfParameter_, ...method_.signature_.parameters_], _c.returnType_, _c.effect_)
}))(method_.signature_);
const body_ = ff_compiler_Syntax.Target_mapFirefly(method_.body_, ((lambda_) => {
{
const _1 = lambda_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(lambda_.cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, [ff_compiler_Syntax.PVariable(method_.at_, ff_core_Option.None()), ...case_.patterns_], _c.guards_, _c.body_)
}
}
})))
return
}
}
}));
const function_ = (((_c) => {
return ff_compiler_Syntax.DFunction(_c.at_, signature_, body_)
}))(method_);
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, _c.symbols_, _c.traits_, _c.imports_, _c.effect_, ff_core_Option.Some(definition_.name_))
}))(environment_), function_)
}));
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DExtend(_c.at_, _c.name_, _c.generics_, _c.constraints_, _c.type_, functions_)
}
}
}

export async function Inference_inferFunctionDefinition$(self_, environment_, definition_, $task) {
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, definition_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferFunctionDefinitionHook(self_.unification_, environment_, definition_, self_.missing_))
};
const parameters_ = ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
const noEffect_ = ff_compiler_Syntax.TConstructor(p_.at_, "ff:core/Nothing.Nothing", []);
const scheme_ = ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(p_.at_, p_.name_, false, [], [], [], p_.valueType_, noEffect_));
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, p_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferParameterHook(self_.unification_, environment_, p_, self_.missing_))
};
return ff_core_Pair.Pair(p_.name_, scheme_)
}));
const parameterMap_ = ff_core_List.List_toMap(parameters_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment_.symbols_, parameterMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}))(environment_);
const parameterTypes_ = ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.second_.signature_.returnType_
}));
const functionType_ = ff_compiler_Syntax.TConstructor(definition_.at_, ("Function$" + parameterTypes_.length), [definition_.signature_.effect_, ...parameterTypes_, definition_.signature_.returnType_]);
const instances_ = ff_compiler_Inference.constraintsToInstances_(definition_.signature_.constraints_);
return ff_compiler_Unification.Unification_withLocalInstances(self_.unification_, instances_, (() => {
{
const _1 = definition_;
{
const _c = _1;
return ff_compiler_Syntax.DFunction(_c.at_, _c.signature_, ff_compiler_Syntax.Target_mapFirefly(definition_.body_, ((_w1) => {
return ff_compiler_Inference.Inference_inferLambda(self_, environment2_, functionType_, _w1)
})))
return
}
}
}))
}

export async function Inference_inferLambda$(self_, environment_, expected_, lambda_, $task) {
const unitName_ = ff_compiler_Inference.core_("Unit");
const returnsUnit_ = (((_1) => {
if(_1.TConstructor) {
const name_ = _1.name_;
const ts_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Function$", 0)) {
{
const _1 = ff_core_List.List_grabLast(ts_);
if(_1.TConstructor && _1.generics_.length === 0) {
const n_ = _1.name_;
return (n_ === unitName_)
}
{
return false
}
}
return
}
}
{
return false
}
}))(ff_compiler_Unification.Unification_substitute(self_.unification_, expected_));
const cases_ = ((!returnsUnit_)
? lambda_.cases_
: ff_core_List.List_map(lambda_.cases_, ((c_) => {
{
const _1 = c_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.guards_, ff_compiler_Syntax.ESequential(c_.at_, c_.body_, ff_compiler_Syntax.EVariant(c_.at_, unitName_, [], ff_core_Option.None())))
}
}
})));
const newEnvironment_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, _c.symbols_, _c.traits_, _c.imports_, lambda_.effect_, _c.selfVariable_)
}))(environment_);
{
const _1 = lambda_;
{
const _c = _1;
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(cases_, ((_w1) => {
return ff_compiler_Inference.Inference_inferMatchCase(self_, newEnvironment_, expected_, _w1)
})))
return
}
}
}

export async function Inference_inferMatchCase$(self_, environment_, expected_, case_, $task) {
const parameterTypes_ = ff_core_List.List_map(case_.patterns_, ((_w1) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, _w1.at_)
}));
const returnType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, case_.at_);
const functionType_ = ff_compiler_Syntax.TConstructor(case_.at_, ("Function$" + case_.patterns_.length), [environment_.effect_, ...parameterTypes_, returnType_]);
ff_compiler_Unification.Unification_unify(self_.unification_, case_.at_, expected_, functionType_);
const environment1_ = ff_core_List.List_foldLeft(ff_core_List.List_zip(parameterTypes_, case_.patterns_), environment_, ((_1, _2) => {
{
const environment1_ = _1;
const t_ = _2.first_;
const c_ = _2.second_;
const symbols_ = ff_core_Map.Map_mapValues(ff_compiler_Inference.Inference_inferPattern(self_, environment_, t_, c_), ((_1, _2) => {
{
const name_ = _1;
const at_ = _2.first_;
const type_ = _2.second_;
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
return ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(at_, name_, false, [], [], [], type_, noEffect_))
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
{
const _1 = environment_;
{
const _c = _1;
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment1_.symbols_, symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}
}
return
}
}));
const guards_ = ff_core_List.List_toArray([]);
const environment3_ = ff_core_List.List_foldLeft(case_.guards_, environment1_, ((environment2_, g_) => {
const guardType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, g_.at_);
const guardTerm_ = ff_compiler_Inference.Inference_inferTerm(self_, environment2_, guardType_, g_.term_);
const symbols_ = ff_core_Map.Map_mapValues(ff_compiler_Inference.Inference_inferPattern(self_, environment2_, guardType_, g_.pattern_), ((_1, _2) => {
{
const name_ = _1;
const at_ = _2.first_;
const type_ = _2.second_;
const noEffect_ = ff_compiler_Syntax.TConstructor(at_, "ff:core/Nothing.Nothing", []);
return ff_compiler_Environment.Scheme(true, false, false, false, ff_compiler_Syntax.Signature(at_, name_, false, [], [], [], type_, noEffect_))
}
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
guards_.array.push((((_c) => {
return ff_compiler_Syntax.MatchGuard(_c.at_, guardTerm_, _c.pattern_)
}))(g_));
{
const _1 = environment2_;
{
const _c = _1;
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment2_.symbols_, symbols_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}
}
}));
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, ff_core_Array.Array_drain(guards_), ff_compiler_Inference.Inference_inferTerm(self_, environment3_, returnType_, case_.body_))
}
}
}

export async function Inference_inferPattern$(self_, environment_, expected_, pattern_, $task) {
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
if((((_1) => {
if(_1.PVariantAs) {
const at_ = _1.at_;
const variableAt_ = _1.variableAt_;
return ((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_) || ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, variableAt_)) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, variableAt_))
}
if(_1.PAlias) {
const at_ = _1.at_;
return (ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, at_))
}
{
return ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, pattern_.at_)
}
}))(pattern_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferPatternHook(self_.unification_, environment_, expected_, pattern_))
}
};
function literal_(coreTypeName_) {
ff_compiler_Unification.Unification_unify(self_.unification_, pattern_.at_, expected_, ff_compiler_Syntax.TConstructor(pattern_.at_, ff_compiler_Inference.core_(coreTypeName_), []));
return ff_core_Map.new_()
}
{
const _1 = pattern_;
if(_1.PString) {
return literal_("String")
}
if(_1.PInt) {
return literal_("Int")
}
if(_1.PChar) {
return literal_("Char")
}
if(_1.PVariable && _1.name_.None) {
const at_ = _1.at_;
return ff_core_Map.new_()
}
if(_1.PVariable && _1.name_.Some) {
const at_ = _1.at_;
const name_ = _1.name_.value_;
return ff_core_List.List_toMap([ff_core_Pair.Pair(name_, ff_core_Pair.Pair(at_, expected_))], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PAlias) {
const at_ = _1.at_;
const pattern_ = _1.pattern_;
const variable_ = _1.variable_;
return ff_core_Map.Map_add(ff_compiler_Inference.Inference_inferPattern(self_, environment_, expected_, pattern_), variable_, ff_core_Pair.Pair(at_, expected_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PVariantAs) {
const at_ = _1.at_;
const name_ = _1.name_;
const variableAt_ = _1.variableAt_;
const variableOption_ = _1.variable_;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, at_, name_, [], ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("No such variant: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
if(instantiated_.scheme_.isNewtype_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "This kind of pattern is not allowed for newtypes"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, instantiated_.scheme_.signature_.returnType_);
const parameters_ = ff_core_List.List_sortBy(instantiated_.scheme_.signature_.parameters_, ((_w1) => {
return _w1.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const paramtersWithFieldAt_ = ff_core_List.List_map(parameters_, ((p_) => {
{
const _1 = p_.valueType_;
if(_1.TConstructor) {
const t_ = _1;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TConstructor(p_.at_, _c.name_, _c.generics_)
}
}
return
}
if(_1.TVariable) {
const t_ = _1;
{
const _1 = t_;
{
const _c = _1;
return ff_compiler_Syntax.TVariable(p_.at_, _c.index_)
}
}
return
}
}
}));
const recordType_ = ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.name_
})), "$")), paramtersWithFieldAt_);
return ff_core_List.List_toMap(ff_core_List.List_map(ff_core_Option.Option_toList(variableOption_), ((_w1) => {
return ff_core_Pair.Pair(_w1, ff_core_Pair.Pair(variableAt_, recordType_))
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
return
}
if(_1.PVariant && _1.name_ === "List$Empty" && _1.patterns_.length === 0) {
const at_ = _1.at_;
const itemType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const listType_ = ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("List"), [itemType_]);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_);
return ff_core_List.List_toMap([], ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PVariant && _1.name_ === "List$Link" && _1.patterns_.length === 2) {
const at_ = _1.at_;
const head_ = _1.patterns_[0];
const tail_ = _1.patterns_[1];
const itemType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const listType_ = ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("List"), [itemType_]);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_);
const headVariables_ = ff_compiler_Inference.Inference_inferPattern(self_, environment_, itemType_, head_);
const tailVariables_ = ff_compiler_Inference.Inference_inferPattern(self_, environment_, listType_, tail_);
return ff_core_Map.Map_addAll(headVariables_, tailVariables_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}
if(_1.PVariant) {
const at_ = _1.at_;
const name_ = _1.name_;
const patterns_ = _1.patterns_;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, at_, name_, [], ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("No such variant: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, instantiated_.scheme_.signature_.returnType_);
if(((patterns_.length !== instantiated_.scheme_.signature_.parameters_.length) && (!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, (((("Wrong number of subpatterns, expected " + instantiated_.scheme_.signature_.parameters_.length) + ", got ") + patterns_.length) + ".")), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return ff_core_List.List_foldLeft(ff_core_List.List_map(ff_core_List.List_zip(patterns_, instantiated_.scheme_.signature_.parameters_), ((_1) => {
{
const pattern_ = _1.first_;
const parameter_ = _1.second_;
return ff_compiler_Inference.Inference_inferPattern(self_, environment_, parameter_.valueType_, pattern_)
}
})), ff_core_Map.new_(), ((_w1, _w2) => {
return ff_core_Map.Map_addAll(_w1, _w2, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}))
return
}
}
}

export async function Inference_inferTerm$(self_, environment_, expected_, term_, $task) {
const hookRecordTypeBox_ = (ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, term_.at_)
? ff_core_Option.Some((await (async function() {
const box_ = ff_compiler_LspHook.Box(ff_core_Option.None());
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferTermHook(self_.unification_, environment_, expected_, term_, box_, self_.missing_));
return box_
})()))
: ff_core_Option.None());
function literal_(coreTypeName_) {
ff_compiler_Unification.Unification_unify(self_.unification_, term_.at_, expected_, ff_compiler_Syntax.TConstructor(term_.at_, ff_compiler_Inference.core_(coreTypeName_), []));
return term_
}
{
const _1 = term_;
if(_1.EString) {
return literal_("String")
}
if(_1.EChar) {
return literal_("Char")
}
if(_1.EInt) {
return literal_("Int")
}
if(_1.EFloat) {
return literal_("Float")
}
if(_1.EVariable) {
const e_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, [], ff_core_Option.None()), ((instantiated_) => {
if(instantiated_.scheme_.isVariable_) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
return term_
} else {
return ff_compiler_Inference.Inference_inferEtaExpansion(self_, environment_, expected_, e_.at_, instantiated_.scheme_.signature_, term_)
}
})), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}))
return
}
if(_1.EField) {
const e_ = _1;
const recordType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, term_.at_)) {
for(const for_o = hookRecordTypeBox_; for_o.Some;) {
const _w1 = for_o.value_;
_w1.value_ = ff_core_Option.Some(recordType_)
break
}
};
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, e_.record_);
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_);
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
const fieldNames_ = ff_core_List.List_dropFirst(ff_core_String.String_split(name_, 36), 1);
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
const definedAt_ = ff_core_List.List_collectFirst(ff_core_List.List_zip(fieldNames_, typeArguments_), ((_1) => {
{
const fieldName_ = _1.first_;
const fieldType_ = _1.second_;
if((e_.field_ === fieldName_)) {
return ff_core_Option.Some(ff_compiler_Unification.Unification_substitute(self_.unification_, fieldType_).at_)
} else return ff_core_Option.None()
return
}
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, e_.at_) || ff_core_Option.Option_any(definedAt_, ((_w1) => {
return ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, _w1)
})))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferRecordFieldHook(e_.at_, self_.unification_, environment_, expected_, t_, e_.field_))
}
};
return ff_core_Option.Option_else(ff_core_Option.Option_elseIf(ff_core_Option.Option_map(ff_core_Option.Option_map(ff_core_List.List_find(ff_core_List.List_pairs(fieldNames_), ((_w1) => {
return (_w1.second_ === e_.field_)
})), ((_w1) => {
return _w1.first_
})), ((index_) => {
const t1_ = (typeArguments_[index_] ?? ff_core_List.List_grab(typeArguments_, index_));
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, record_, _c.field_)
}
}
})), (() => {
return ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)
}), (() => {
return term_
})), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}))
return
}
}
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
const memberPrefix_ = (name_ + "_");
const memberName_ = (memberPrefix_ + e_.field_);
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, memberName_, typeArguments_, ff_core_Option.None());
if(_1.Some) {
const instantiated_ = _1.value_;
if((!instantiated_.scheme_.isVariable_)) {
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, _c.generics_, _c.constraints_, ff_core_List.List_dropFirst(instantiated_.scheme_.signature_.parameters_, 1), _c.returnType_, _c.effect_)
}))(instantiated_.scheme_.signature_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, recordType_, (instantiated_.scheme_.signature_.parameters_[0] ?? ff_core_List.List_grab(instantiated_.scheme_.signature_.parameters_, 0)).valueType_);
return ff_compiler_Inference.Inference_inferEtaExpansion(self_, environment_, expected_, e_.at_, signature_, term_)
}
}
if(_1.Some) {
const instantiated_ = _1.value_;
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EField(_c.at_, instantiated_.scheme_.isNewtype_, record_, _c.field_)
}
}
return
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.TVariable && ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return term_
}
if(_1.TVariable) {
const index_ = _1.index_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.EWildcard) {
const e_ = _1;
return ff_core_Option.Option_grab(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, ("_w" + e_.index_), [], ff_core_Option.None()), ((instantiated_) => {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
return term_
})))
return
}
if(_1.EList) {
const at_ = _1.at_;
const t_ = _1.elementType_;
const items_ = _1.items_;
const listType_ = ff_compiler_Syntax.TConstructor(term_.at_, ff_compiler_Inference.core_("List"), [t_]);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, listType_);
return ff_compiler_Syntax.EList(at_, t_, ff_core_List.List_map(items_, ((_1) => {
{
const item_ = _1.first_;
const spread_ = _1.second_;
return ff_core_Pair.Pair(ff_compiler_Inference.Inference_inferTerm(self_, environment_, (spread_
? listType_
: t_), item_), spread_)
return
}
})))
return
}
if(_1.ESequential) {
const at_ = _1.at_;
const before_ = _1.before_;
const after_ = _1.after_;
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, before_.at_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferSequentialStartHook(self_.unification_, term_, self_.missing_))
};
const newExpected_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
{
const _1 = before_;
if(_1.EPipe && _1.function_.ELambda) {
const at1_ = _1.at_;
const value_ = _1.value_;
const effect1_ = _1.effect_;
const at2_ = _1.function_.at_;
const at3_ = _1.function_.lambda_.at_;
const effect3_ = _1.function_.lambda_.effect_;
const cases_ = _1.function_.lambda_.cases_;
const e_ = ff_compiler_Syntax.EVariant(at_, "ff:core/Unit.Unit", [], ff_core_Option.None());
const newCases_ = ff_core_List.List_map(cases_, ((case_) => {
{
const _1 = case_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.guards_, ff_compiler_Syntax.ESequential(case_.at_, case_.body_, e_))
}
}
}));
const newPipe_ = ff_compiler_Syntax.EPipe(at1_, value_, effect1_, ff_compiler_Syntax.ELambda(at2_, ff_compiler_Syntax.Lambda(at3_, effect3_, newCases_)));
{
const _1 = after_;
if(_1.EVariant && _1.name_ === "ff:core/Unit.Unit") {
const at_ = _1.at_;
const unitType_ = ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Unit"), []);
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, unitType_);
return ff_compiler_Inference.Inference_inferTerm(self_, environment_, newExpected_, newPipe_)
}
{
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, newExpected_, newPipe_), ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, after_))
}
}
return
}
{
const unitName_ = ff_compiler_Inference.core_("Unit");
function semicolonUnit_(body_) {
const body_a = body_;
if(body_a.ECall) {
const e_ = body_a;
const _guard3 = e_.target_;
if(_guard3.DynamicCall) {
const c_ = _guard3;
const _guard2 = c_.function_;
if(_guard2.EVariable) {
const x_ = _guard2;
if(((x_.name_ === "ff:core/Core.if") || (x_.name_ === "ff:core/Core.try"))) {
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, _c.target_, _c.effect_, _c.typeArguments_, ff_core_List.List_map(e_.arguments_, ((_1) => {
{
const a_ = _1;
const _guard1 = a_.value_;
if(_guard1.ELambda) {
const l_ = _guard1;
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, (((_c) => {
return ff_compiler_Syntax.ELambda(_c.at_, (((_c) => {
return ff_compiler_Syntax.Lambda(_c.at_, _c.effect_, ff_core_List.List_map(l_.lambda_.cases_, ((c_) => {
{
const _1 = c_;
{
const _c = _1;
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.guards_, ff_compiler_Syntax.ESequential(c_.at_, c_.body_, ff_compiler_Syntax.EVariant(c_.at_, unitName_, [], ff_core_Option.None())))
}
}
})))
}))(l_.lambda_))
}))(l_))
return
}
}
return
}
}
{
const a_ = _1;
return a_
}
})), _c.dictionaries_)
return
}
}
return
}
}
}
}
if(body_a.ECall) {
const e_ = body_a;
const _guard3 = e_.target_;
if(_guard3.DynamicCall) {
const c_ = _guard3;
const _guard2 = c_.function_;
if(_guard2.EField) {
const f_ = _guard2;
if(((((((((f_.field_ === "else") || (f_.field_ === "elseIf")) || (f_.field_ === "tryCatch")) || (f_.field_ === "tryCatchAny")) || (f_.field_ === "tryFinally")) || (f_.field_ === "catch")) || (f_.field_ === "catchAny")) || (f_.field_ === "finally"))) {
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall((((_c) => {
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, semicolonUnit_(f_.record_), _c.field_)
}))(f_), _c.tailCall_)
}))(c_), _c.effect_, _c.typeArguments_, _c.arguments_, _c.dictionaries_)
return
}
}
return
}
}
}
}
if(body_a.ESequential) {
const e_ = body_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ESequential(_c.at_, _c.before_, semicolonUnit_(e_.after_))
}
}
return
}
if(body_a.ELet) {
const e_ = body_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, _c.value_, semicolonUnit_(e_.body_))
}
}
return
}
if(body_a.EFunctions) {
const e_ = body_a;
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EFunctions(_c.at_, _c.functions_, semicolonUnit_(e_.body_))
}
}
return
}
{
return body_
}
}
return ff_compiler_Syntax.ESequential(at_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, newExpected_, semicolonUnit_(before_)), ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, after_))
}
}
return
}
if(_1.ELet) {
const e_ = _1;
const noEffect_ = ff_compiler_Syntax.TConstructor(e_.at_, "ff:core/Nothing.Nothing", []);
const scheme_ = ff_compiler_Environment.Scheme(true, e_.mutable_, false, false, ff_compiler_Syntax.Signature(e_.at_, e_.name_, false, [], [], [], e_.valueType_, noEffect_));
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_add(environment_.symbols_, e_.name_, scheme_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}))(environment_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ELet(_c.at_, _c.mutable_, _c.name_, _c.valueType_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, e_.valueType_, e_.value_), ff_compiler_Inference.Inference_inferTerm(self_, environment2_, expected_, e_.body_))
}
}
return
}
if(_1.ELambda) {
const at_ = _1.at_;
const l_ = _1.lambda_;
do {
const _1 = l_.cases_;
if(_1.length === 1 && _1[0].patterns_.length === 0 && _1[0].guards_.length === 0 && _1[0].body_.EVariable && _1[0].body_.name_ === "") {
const insideAt_ = _1[0].body_.at_;
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, insideAt_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferLambdaStartHook(self_.unification_, environment_, expected_))
break
}
}
if(_1.length === 1 && _1[0].patterns_.length === 0 && _1[0].guards_.length === 0 && _1[0].body_.ESequential && _1[0].body_.before_.EVariable && _1[0].body_.before_.name_ === "" && _1[0].body_.after_.EVariant && _1[0].body_.after_.name_ === "ff:core/Unit.Unit") {
const insideAt_ = _1[0].body_.before_.at_;
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, insideAt_)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferLambdaStartHook(self_.unification_, environment_, expected_))
break
}
}
{

break
}
} while(false);
const lambda_ = ff_compiler_Inference.Inference_inferLambda(self_, environment_, expected_, l_);
return ff_compiler_Syntax.ELambda(at_, lambda_)
}
if(_1.EVariant) {
const e_ = _1;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, e_.typeArguments_, e_.arguments_), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, instantiated_.scheme_.signature_.returnType_);
const arguments_ = ff_core_Option.Option_map(e_.arguments_, ((_w1) => {
return ff_compiler_Inference.Inference_inferArguments(self_, e_.at_, e_.name_, environment_, instantiated_.scheme_.signature_.parameters_, _w1)
}));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariant(_c.at_, _c.name_, ff_core_List.List_map(instantiated_.typeArguments_, ((_w1) => {
return _w1.second_
})), arguments_)
return
}
}
return
}
if(_1.EVariantIs) {
const e_ = _1;
const instantiated_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, e_.typeArguments_, ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
const parameters_ = ff_core_List.List_sortBy(instantiated_.scheme_.signature_.parameters_, ((_w1) => {
return _w1.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const recordType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.name_
})), "$")), ff_core_List.List_map(parameters_, ((_w1) => {
return _w1.valueType_
})));
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, "Function$1", [ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_), instantiated_.scheme_.signature_.returnType_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Option"), [recordType_])]);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, functionType_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EVariantIs(_c.at_, _c.name_, ff_core_List.List_map(instantiated_.typeArguments_, ((_w1) => {
return _w1.second_
})))
return
}
}
return
}
if(_1.ECopy) {
const e_ = _1;
const scheme_ = ff_core_Option.Option_else(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.name_, [], ff_core_Option.None()), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
})).scheme_;
if(scheme_.isNewtype_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Newtypes can't be copied"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const signature_ = scheme_.signature_;
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
for(let for_a = e_.arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const a_ = for_a[for_i];
const p_ = ff_core_List.List_find(signature_.parameters_, ((_w1) => {
return (_w1.name_ === a_.name_)
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, a_.at_) || ff_core_Option.Option_any(p_, ((_w1) => {
return ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, _w1.at_)
})))) {
const arguments_ = ff_core_List.List_map(e_.arguments_, ((f_) => {
{
const _1 = f_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, ff_core_Option.Some(f_.name_), _c.value_)
}
}
}));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferArgumentHook(self_.unification_, environment_, true, term_.at_, e_.name_, signature_.parameters_, arguments_, i_))
}
}
};
const parameterNames_ = ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
}));
ff_core_Option.Option_each(ff_core_List.List_find(e_.arguments_, ((a_) => {
return (!ff_core_List.List_any(parameterNames_, ((_w1) => {
return (_w1 === a_.name_)
})))
})), ((_1) => {
{
const at_ = _1.at_;
const name_ = _1.name_;
const value_ = _1.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("Unknown parameter: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}));
const arguments_ = ff_core_List.List_map(parameterNames_, ((name_) => {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(e_.arguments_, ((_w1) => {
return (_w1.name_ === name_)
})), ((_1) => {
{
const at_ = _1.at_;
const value_ = _1.value_;
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(name_), value_)
}
})), (() => {
const at_ = (((_c) => {
return ff_compiler_Syntax.Location((e_.at_.file_ + "/<copy>"), _c.line_, _c.column_)
}))(e_.at_);
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(name_), ff_compiler_Syntax.EField(at_, false, ff_compiler_Syntax.EVariable(at_, "_c"), name_))
}))
}));
const body_ = ff_compiler_Syntax.EVariant(e_.at_, e_.name_, [], ff_core_Option.Some(arguments_));
const effect_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Syntax.EPipe(e_.at_, e_.record_, effect_, ff_compiler_Syntax.ELambda(e_.at_, ff_compiler_Syntax.Lambda(e_.at_, effect_, [ff_compiler_Syntax.MatchCase(e_.at_, [ff_compiler_Syntax.PVariable(e_.at_, ff_core_Option.Some("_c"))], [], body_)])));
return ff_compiler_Inference.Inference_inferTerm(self_, environment_, expected_, e1_)
}
if(_1.EPipe) {
const e_ = _1;
const valueType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, "Function$1", [e_.effect_, valueType_, expected_]);
const value_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, valueType_, e_.value_);
const function_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, functionType_, e_.function_);
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, e_.effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EPipe(_c.at_, value_, _c.effect_, function_)
}
}
return
}
if(_1.ECall) {
const e_ = _1;
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((_1) => {
if(_1.StaticCall) {
return true
}
{
return false
}
}))(e_.target_))) {
return term_
} else {
const call_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
return {
function_: call_.function_,
tailCall_: call_.tailCall_
}
return
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in the Inference phase")
}
}))(e_.target_);
{
const _1 = call_.function_;
if(_1.EVariable) {
const variableAt_ = _1.at_;
const x_ = _1.name_;
if(ff_core_Option.Option_any(ff_core_String.String_first(x_), ((c_) => {
return ((c_ !== 95) && (!ff_core_Char.Char_isAsciiLetter(c_)))
}))) {
return ff_compiler_Inference.Inference_inferOperator(self_, environment_, expected_, x_, term_)
} else {
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, x_, e_.typeArguments_, ff_core_Option.Some(e_.arguments_));
if(_1.Some) {
const instantiated_ = _1.value_;
if(instantiated_.scheme_.isVariable_) {
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, term_)
} else {
const signature_ = instantiated_.scheme_.signature_;
return ff_compiler_Inference.Inference_inferFunctionCall(self_, environment_, expected_, signature_, instantiated_.scheme_.isTraitMethod_, instantiated_.typeArguments_, term_, x_)
}
return
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(variableAt_, ("No such function: " + x_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
}
return
}
if(_1.EField) {
const f_ = _1;
const recordType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, f_.at_);
if(ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, term_.at_)) {
for(const for_o = hookRecordTypeBox_; for_o.Some;) {
const _w1 = for_o.value_;
_w1.value_ = ff_core_Option.Some(recordType_)
break
}
};
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, f_.record_);
const e2_ = (((_c) => {
return ff_compiler_Syntax.ECall(_c.at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall((((_c) => {
return ff_compiler_Syntax.EField(_c.at_, _c.newtype_, record_, _c.field_)
}))(f_), _c.tailCall_)
}))(call_), _c.effect_, _c.typeArguments_, _c.arguments_, _c.dictionaries_)
}))(e_);
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_);
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const methodName_ = ((name_ + "_") + f_.field_);
const arguments_ = [ff_compiler_Syntax.Argument(f_.record_.at_, ff_core_Option.None(), f_.record_), ...e_.arguments_];
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, f_.at_, methodName_, [], ff_core_Option.Some(arguments_));
if(_1.Some) {
const instantiated_ = _1.value_;
if((!instantiated_.scheme_.isVariable_)) {
return ff_compiler_Inference.Inference_inferMethodCall(self_, environment_, expected_, instantiated_.scheme_.signature_, instantiated_.typeArguments_, e2_, record_, recordType_, methodName_)
}
}
if(_1.Some) {
const instantiated_ = _1.value_;
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, e2_)
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(f_.at_, ((("No such field " + f_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.TVariable && ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, e2_)
}
if(_1.TVariable) {
const index_ = _1.index_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(f_.at_, ((("No such field " + f_.field_) + " on unknown type: $") + index_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
{
return ff_compiler_Inference.Inference_inferLambdaCall(self_, environment_, expected_, term_)
}
}
}
return
}
if(_1.ERecord) {
const e_ = _1;
const fields_ = ff_core_List.List_sortBy(e_.fields_, ((_w1) => {
return _w1.name_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const fieldTypes_ = ff_core_List.List_map(fields_, ((_w1) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, _w1.at_)
}));
const recordType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Record$" + ff_core_List.List_join(ff_core_List.List_map(fields_, ((_w1) => {
return _w1.name_
})), "$")), fieldTypes_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, recordType_);
const newFields_ = ff_core_List.List_map(ff_core_List.List_zip(fields_, fieldTypes_), ((_1) => {
{
const field_ = _1.first_;
const t_ = _1.second_;
{
const _1 = field_;
{
const _c = _1;
return ff_compiler_Syntax.Field(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, field_.value_))
}
}
return
}
}));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ERecord(_c.at_, newFields_)
}
}
return
}
if(_1.EFunctions) {
const at_ = _1.at_;
const functions_ = _1.functions_;
const body_ = _1.body_;
const functionMap_ = ff_core_List.List_toMap(ff_core_List.List_map(functions_, ((f_) => {
const scheme_ = ff_compiler_Environment.Scheme(false, false, false, false, f_.signature_);
return ff_core_Pair.Pair(f_.signature_.name_, scheme_)
})), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const environment2_ = (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, ff_core_Map.Map_addAll(environment_.symbols_, functionMap_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), _c.traits_, _c.imports_, _c.effect_, _c.selfVariable_)
}))(environment_);
const newFunctions_ = ff_core_List.List_map(functions_, ((_w1) => {
return ff_compiler_Inference.Inference_inferFunctionDefinition(self_, environment2_, _w1)
}));
const newBody_ = ff_compiler_Inference.Inference_inferTerm(self_, environment2_, expected_, body_);
return ff_compiler_Syntax.EFunctions(at_, newFunctions_, newBody_)
}
if(_1.EAssign) {
const e_ = _1;
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, e_.variable_, [], ff_core_Option.None()), ((instantiated_) => {
if((instantiated_.scheme_.isMutable_ || ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
const value_ = ff_compiler_Inference.Inference_inferAssignment(self_, environment_, expected_, e_.at_, e_.operator_, e_.value_, instantiated_.scheme_.signature_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssign(_c.at_, _c.operator_, _c.variable_, value_)
}
}
} else {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol is not mutable: " + e_.variable_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
})), (() => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Symbol not in scope: " + e_.variable_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}))
return
}
if(_1.EAssignField) {
const e_ = _1;
const recordType_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const record_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, recordType_, e_.record_);
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, recordType_);
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
if(ff_core_String.String_startsWith(name_, "Record$", 0)) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ("Can't assign fields of anonymous records: " + e_.field_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
if(_1.TConstructor) {
const t_ = _1;
const name_ = _1.name_;
const typeArguments_ = _1.generics_;
const methodName_ = ((name_ + "_") + e_.field_);
{
const _1 = ff_compiler_Inference.Inference_lookup(self_, environment_, expected_, e_.at_, methodName_, typeArguments_, ff_core_Option.None());
if(_1.Some) {
const instantiated_ = _1.value_;
if((instantiated_.scheme_.isMutable_ || ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
const value_ = ff_compiler_Inference.Inference_inferAssignment(self_, environment_, expected_, e_.at_, e_.operator_, e_.value_, instantiated_.scheme_.signature_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.EAssignField(_c.at_, _c.operator_, record_, _c.field_, value_)
}
}
return
}
}
if(_1.Some) {
const instantiated_ = _1.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("Can't assign an immutable field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
if(_1.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on type: ") + ff_compiler_Syntax.Type_show(t_, []))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
if(_1.TVariable && ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return term_
}
if(_1.TVariable) {
const index_ = _1.index_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, ((("No such field " + e_.field_) + " on unknown type: $") + index_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
return
}
}
}

export async function Inference_inferAssignment$(self_, environment_, expected_, at_, operator_, value_, signature_, $task) {
const t_ = signature_.returnType_;
const newValue_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, value_);
if(((((operator_ === "+") || (operator_ === "-")) || (operator_ === "*")) || (operator_ === "/"))) {
do {
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_);
if(_1.TConstructor) {
const name_ = _1.name_;
if(((((name_ === ff_compiler_Inference.core_("Int")) || (name_ === ff_compiler_Inference.core_("Float"))) || (name_ === ff_compiler_Inference.core_("JsValue"))) || ((name_ === ff_compiler_Inference.core_("String")) && (operator_ === "+")))) {

break
}
}
{
ff_compiler_Unification.Unification_unify(self_.unification_, at_, t_, ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Int"), []))
break
}
} while(false)
} else if((operator_ !== "")) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, (("Only +=, -=, *=, /= and = assignments are supported. Got: " + operator_) + "=")), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else {};
ff_compiler_Unification.Unification_unify(self_.unification_, at_, expected_, ff_compiler_Syntax.TConstructor(at_, ff_compiler_Inference.core_("Unit"), []));
return newValue_
}

export async function Inference_inferMethodCall$(self_, environment_, expected_, signature_, instantiation_, term_, record_, recordType_, name_, $task) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
const tailCall_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
return call_.tailCall_
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in inferMethodCall")
}
}))(e_.target_);
const selfParameter_ = ff_core_List.List_grabFirst(signature_.parameters_);
const selfArgument_ = ff_compiler_Syntax.Argument(record_.at_, ff_core_Option.Some(selfParameter_.name_), record_);
ff_compiler_Unification.Unification_unify(self_.unification_, term_.at_, expected_, signature_.returnType_);
ff_compiler_Unification.Unification_unify(self_.unification_, term_.at_, selfParameter_.valueType_, recordType_);
const arguments_ = ff_compiler_Inference.Inference_inferArguments(self_, term_.at_, name_, environment_, ff_core_List.List_dropFirst(signature_.parameters_, 1), e_.arguments_);
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, signature_.effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, ff_compiler_Syntax.StaticCall(name_, tailCall_, false), signature_.effect_, ff_core_List.List_map(instantiation_, ((_w1) => {
return _w1.second_
})), [selfArgument_, ...arguments_], _c.dictionaries_)
return
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export async function Inference_inferFunctionCall$(self_, environment_, expected_, signature_, instanceCall_, instantiation_, term_, name_, $task) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
let isUnsafeJsAwaitCall_ = false;
const tailCall_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
do {
const _1 = call_.function_;
if(_1.EVariable && _1.name_ === "ff:core/Js.await") {
isUnsafeJsAwaitCall_ = true
break
}
if(_1.EVariable && _1.name_ === "ff:core/Js.awaitCancellablePromise") {
isUnsafeJsAwaitCall_ = true
break
}
{

break
}
} while(false);
return call_.tailCall_
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in inferFunctionCall")
}
}))(e_.target_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, signature_.returnType_);
const arguments_ = ff_compiler_Inference.Inference_inferArguments(self_, e_.at_, name_, environment_, signature_.parameters_, e_.arguments_);
const effect_ = (isUnsafeJsAwaitCall_
? ff_compiler_Syntax.TConstructor(term_.at_, "Q$", [])
: signature_.effect_);
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, ff_compiler_Syntax.StaticCall(name_, tailCall_, instanceCall_), effect_, ff_core_List.List_map(instantiation_, ((_w1) => {
return _w1.second_
})), arguments_, _c.dictionaries_)
return
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export async function Inference_inferLambdaCall$(self_, environment_, expected_, term_, $task) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
const call_ = (((_1) => {
if(_1.DynamicCall) {
const call_ = _1;
if((!call_.tailCall_)) {
return {
function_: call_.function_,
tailCall_: call_.tailCall_
}
return
}
}
if(_1.DynamicCall) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Tailcalls not supported on lambda functions"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
if(_1.StaticCall) {
return ff_compiler_Inference.fail_(e_.at_, "Internal error: Static calls not expected in inferLambdaCall")
}
}))(e_.target_);
const effect_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, term_.at_);
const argumentTypes_ = ff_core_List.List_map(e_.arguments_, ((_w1) => {
return ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, _w1.at_)
}));
const functionType_ = ff_compiler_Syntax.TConstructor(e_.at_, ("Function$" + e_.arguments_.length), [effect_, ...argumentTypes_, expected_]);
const function_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, functionType_, call_.function_);
const arguments_ = ff_core_List.List_map(ff_core_List.List_zip(e_.arguments_, argumentTypes_), ((_1) => {
{
const argument_ = _1.first_;
const t_ = _1.second_;
for(const for_o = argument_.name_; for_o.Some;) {
const name_ = for_o.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(argument_.at_, ("Named argument not allowed here: " + name_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
};
{
const _1 = argument_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, argument_.value_))
}
}
return
}
}));
for(const for_o = ff_core_List.List_first(e_.typeArguments_); for_o.Some;) {
const typeArgument_ = for_o.value_;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(typeArgument_.at_, "Type arguments not allowed here"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
};
ff_compiler_Unification.Unification_affect(self_.unification_, term_.at_, effect_, environment_.effect_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, (((_c) => {
return ff_compiler_Syntax.DynamicCall(function_, _c.tailCall_)
}))(call_), effect_, [], arguments_, _c.dictionaries_)
return
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export async function Inference_inferOperator$(self_, environment_, expected_, operator_, term_, $task) {
{
const _1 = term_;
if(_1.ECall) {
const e_ = _1;
const target_ = ff_compiler_Syntax.StaticCall(operator_, false, false);
{
const _1 = e_.arguments_;
if(_1.length === 1) {
const a1_ = _1[0];
if((operator_ === "!")) {
const t_ = ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), []);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a1_.value_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 1) {
const a1_ = _1[0];
if((operator_ === "-")) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
do {
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t1_);
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Float"))) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
break
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Int"))) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
break
}
}
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {

break
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Operators on unknown types not currently supported"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} while(false);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((operator_ === "||") || (operator_ === "&&"))) {
const t_ = ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), []);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a2_.value_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t_);
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((operator_ === "===") || (operator_ === "!=="))) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a2_.value_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Bool"), []));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((operator_ === "/") || (operator_ === "%"))) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const t2_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t2_, a2_.value_);
const magic_ = ((t_) => {
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_);
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Float"))) {

return
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Int"))) {

return
}
}
{
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, t_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Float"), []))
return
}
}
});
magic_(t1_);
magic_(t2_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, ff_compiler_Syntax.TConstructor(e_.at_, ff_compiler_Inference.core_("Float"), []));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(_1.length === 2) {
const a1_ = _1[0];
const a2_ = _1[1];
if(((((operator_ === "+") || (operator_ === "-")) || (operator_ === "*")) || (operator_ === "^"))) {
const t1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const t2_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, e_.at_);
const e1_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t1_, a1_.value_);
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t2_, a2_.value_);
const magic_ = ((t_) => {
{
const _1 = ff_compiler_Unification.Unification_substitute(self_.unification_, t_);
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("JsValue"))) {
return ff_core_Option.Some("JsValue")
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Float"))) {
return ff_core_Option.Some("Float")
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if((name_ === ff_compiler_Inference.core_("Int"))) {
return ff_core_Option.Some("Int")
}
}
if(_1.TConstructor && _1.generics_.length === 0) {
const name_ = _1.name_;
if(((operator_ === "+") && (name_ === ff_compiler_Inference.core_("String")))) {
return ff_core_Option.Some("String")
}
}
{
return ff_core_Option.None()
}
}
});
const chooseType_ = ((_1, _2) => {
if(_1.Some && _1.value_ === "JsValue") {
ff_compiler_Unification.Unification_unify(self_.unification_, e2_.at_, t1_, t2_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_2.Some && _2.value_ === "JsValue") {
ff_compiler_Unification.Unification_unify(self_.unification_, e1_.at_, t2_, t1_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _1.value_ === "String" && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.Some && _2.Some && _2.value_ === "String") {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _1.value_ === "Float" && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.Some && _2.Some && _2.value_ === "Float") {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _1.value_ === "Int" && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.Some && _2.Some && _2.value_ === "Int") {
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(_1.Some && _2.None) {
ff_compiler_Unification.Unification_unify(self_.unification_, e2_.at_, t1_, t2_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t1_)
return
}
if(_1.None && _2.Some) {
ff_compiler_Unification.Unification_unify(self_.unification_, e1_.at_, t2_, t1_);
ff_compiler_Unification.Unification_unify(self_.unification_, e_.at_, expected_, t2_)
return
}
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {

return
}
if(_1.Some && _2.Some) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Operators on these types not currently supported"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
if(_1.None && _2.None) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(e_.at_, "Operators on unknown types not currently supported"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
});
chooseType_(magic_(t1_), magic_(t2_));
{
const _1 = e_;
{
const _c = _1;
return ff_compiler_Syntax.ECall(_c.at_, target_, _c.effect_, _c.typeArguments_, [(((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e1_)
}))(a1_), (((_c) => {
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, e2_)
}))(a2_)], _c.dictionaries_)
return
}
}
return
}
}
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
return term_
}
{
return ff_compiler_Inference.fail_(e_.at_, ("Unknown operator: " + operator_))
}
}
return
}
{
return ff_compiler_Inference.fail_(term_.at_, "Call expected")
}
}
}

export async function Inference_inferEtaExpansion$(self_, environment_, expected_, at_, signature_, term_, $task) {
const parameters_ = ff_core_List.List_map(ff_core_List.List_filter(signature_.parameters_, ((_w1) => {
return ff_core_Option.Option_isEmpty(_w1.default_)
})), ((p_) => {
return p_.name_
}));
const effect1_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const body_ = ff_compiler_Syntax.ECall(at_, ff_compiler_Syntax.DynamicCall(term_, false), effect1_, [], ff_core_List.List_map(parameters_, ((x_) => {
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(x_), ff_compiler_Syntax.EVariable(at_, x_))
})), []);
const effect2_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
const lambda_ = ff_compiler_Syntax.ELambda(at_, ff_compiler_Syntax.Lambda(at_, effect2_, [ff_compiler_Syntax.MatchCase(at_, ff_core_List.List_map(parameters_, ((_w1) => {
return ff_compiler_Syntax.PVariable(at_, ff_core_Option.Some(_w1))
})), [], body_)]));
return ff_compiler_Inference.Inference_inferTerm(self_, (((_c) => {
return ff_compiler_Environment.Environment(_c.modulePrefix_, _c.symbols_, _c.traits_, _c.imports_, effect2_, _c.selfVariable_)
}))(environment_), expected_, lambda_)
}

export async function Inference_inferArguments$(self_, callAt_, callName_, environment_, parameters_, arguments_, $task) {
if(ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) {
for(let for_a = arguments_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const i_ = for_i;
const a_ = for_a[for_i];
const p_ = ff_core_List.List_find(parameters_, ((p_) => {
return ff_core_Option.Option_any(a_.name_, ((_w1) => {
return (_w1 === p_.name_)
}))
}));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, a_.at_) || ff_core_Option.Option_any(p_, ((_w1) => {
return ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, _w1.at_)
})))) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.InferArgumentHook(self_.unification_, environment_, false, callAt_, callName_, parameters_, arguments_, i_))
}
}
};
let remainingArguments_ = ff_core_List.List_toArray(arguments_);
ff_core_Array.Array_reverse(remainingArguments_);
const newArguments_ = ff_core_List.List_map(parameters_, ((p_) => {
const t_ = p_.valueType_;
function defaultArgument_() {
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.default_, ((e_) => {
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, e_);
return ff_compiler_Syntax.Argument(callAt_, ff_core_Option.Some(p_.name_), e2_)
})), (() => {
if((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
return ff_compiler_Inference.fail_(callAt_, ("Missing argument: " + p_.name_))
} else {
return ff_compiler_Syntax.Argument(callAt_, ff_core_Option.Some(p_.name_), ff_compiler_Syntax.EVariable(callAt_, ""))
}
}))
}
if(ff_core_Array.Array_isEmpty(remainingArguments_)) {
return defaultArgument_()
} else if(ff_core_Option.Option_isEmpty(ff_core_Array.Array_grabLast(remainingArguments_).name_)) {
const a_ = ff_core_Option.Option_grab(ff_core_Array.Array_pop(remainingArguments_));
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, a_.value_);
return ff_compiler_Syntax.Argument(a_.at_, ff_core_Option.Some(p_.name_), e2_)
} else {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Array.Array_find(remainingArguments_, ((_w1) => {
return ff_core_Option.Option_contains(_w1.name_, p_.name_, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String)
})), ((_1) => {
{
const at_ = _1.at_;
const e_ = _1.value_;
for(const for_o = ff_core_Array.Array_indexWhere(remainingArguments_, ((_w1) => {
return ff_core_Option.Option_contains(_w1.name_, p_.name_, ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String)
})); for_o.Some;) {
const _w1 = for_o.value_;
ff_core_Array.Array_delete(remainingArguments_, _w1, 1)
break
};
const e2_ = ff_compiler_Inference.Inference_inferTerm(self_, environment_, t_, e_);
return ff_compiler_Syntax.Argument(at_, ff_core_Option.Some(p_.name_), e2_)
}
})), (() => {
return defaultArgument_()
}))
}
}));
if((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_))) {
ff_core_Option.Option_each(ff_core_Array.Array_first(remainingArguments_), ((_1) => {
if(_1.name_.None) {
const callAt_ = _1.at_;
ff_compiler_Inference.fail_(callAt_, "Too many arguments")
return
}
if(_1.name_.Some) {
const callAt_ = _1.at_;
const n_ = _1.name_.value_;
ff_compiler_Inference.fail_(callAt_, ("Unknown argument: " + n_))
return
}
}));
return newArguments_
} else {
return [...newArguments_, ...ff_core_List.List_map(ff_core_Array.Array_drain(remainingArguments_), ((a_) => {
{
const _1 = a_;
{
const _c = _1;
return ff_compiler_Syntax.Argument(_c.at_, _c.name_, ff_compiler_Inference.Inference_inferTerm(self_, environment_, ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, a_.at_), a_.value_))
}
}
}))]
}
}

export async function Inference_lookup$(self_, environment_, expected_, at_, symbol_, typeArguments_, arguments_, $task) {
return ff_core_Option.Option_elseIf(ff_compiler_Inference.Inference_lookupOption(self_, environment_, expected_, at_, symbol_, typeArguments_), (() => {
return ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)
}), (() => {
const instantiated_ = ff_compiler_Environment.Instantiated([], ff_compiler_Environment.Scheme(ff_core_Option.Option_isEmpty(arguments_), false, false, false, ff_compiler_Syntax.Signature(at_, symbol_, false, [], [], ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_))), ((_1) => {
{
const i_ = _1.first_;
const a_ = _1.second_;
const t_ = ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_);
return ff_compiler_Syntax.Parameter(a_.at_, false, ff_core_Option.Option_else(a_.name_, (() => {
return ("_p" + i_)
})), t_, ff_core_Option.None())
return
}
})), ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_), ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_))));
if(((!ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_)) && (!ff_core_StringMap.StringMap_has(self_.missing_, symbol_)))) {
ff_core_StringMap.StringMap_set(self_.missing_, symbol_, ff_core_Pair.Pair(instantiated_, arguments_))
};
return instantiated_
}))
}

export async function Inference_lookupOption$(self_, environment_, expected_, at_, symbol_, typeArguments_, $task) {
const hook_ = (ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_)
? ff_core_Option.Some((await (async function() {
const symbolHook_ = ff_compiler_LspHook.SymbolHook(symbol_, at_, at_);
const selfName_ = environment_.selfVariable_;
const h_ = ff_compiler_LspHook.InferLookupHook(self_.unification_, environment_, expected_, selfName_, ff_compiler_LspHook.Box(symbolHook_), ff_compiler_LspHook.Box(ff_core_Option.None()));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, h_);
return h_
})()))
: ff_core_Option.None());
return ff_core_Option.Option_map(ff_core_Map.Map_get(environment_.symbols_, symbol_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((scheme_) => {
const instantiation_ = ((!ff_core_List.List_isEmpty(typeArguments_))
? (function() {
const newTypeArguments_ = (((!scheme_.isVariable_) && ff_core_Option.Option_any(ff_core_List.List_first(scheme_.signature_.generics_), ((_w1) => {
return (_w1 === "Q$")
})))
? [ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_), ...typeArguments_]
: typeArguments_);
if(((scheme_.signature_.generics_.length !== newTypeArguments_.length) && (!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)))) {
const extra_ = (newTypeArguments_.length - typeArguments_.length);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ((((("Wrong number of type arguments for " + symbol_) + ", expected ") + (scheme_.signature_.generics_.length - extra_)) + ", got ") + (newTypeArguments_.length - extra_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return ff_core_List.List_zip(scheme_.signature_.generics_, newTypeArguments_)
})()
: ff_core_List.List_map(scheme_.signature_.generics_, ((name_) => {
return ff_core_Pair.Pair(name_, ff_compiler_Unification.Unification_freshUnificationVariable(self_.unification_, at_))
})));
const instantiationMap_ = ff_core_List.List_toMap(instantiation_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String);
const parameters_ = ff_core_List.List_map(scheme_.signature_.parameters_, ((p_) => {
{
const _1 = p_;
{
const _c = _1;
return ff_compiler_Syntax.Parameter(_c.at_, _c.mutable_, _c.name_, ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, p_.valueType_), _c.default_)
}
}
}));
const returnType_ = ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, scheme_.signature_.returnType_);
const effect_ = ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, scheme_.signature_.effect_);
for(let for_a = scheme_.signature_.constraints_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const c_ = for_a[for_i];
const generics_ = ff_core_List.List_map(c_.generics_, ((_w1) => {
return ff_compiler_Unification.Unification_instantiate(self_.unification_, instantiationMap_, _w1)
}));
ff_compiler_Unification.Unification_constrain(self_.unification_, at_, ff_core_List.List_grabFirst(generics_), c_.name_, ff_core_List.List_dropFirst(generics_, 1))
};
const signature_ = (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, _c.member_, [], [], parameters_, returnType_, effect_)
}))(scheme_.signature_);
const instantiated_ = ff_compiler_Environment.Instantiated(instantiation_, (((_c) => {
return ff_compiler_Environment.Scheme(_c.isVariable_, _c.isMutable_, _c.isNewtype_, _c.isTraitMethod_, signature_)
}))(scheme_));
if((ff_compiler_LspHook.LspHook_isAt(self_.lspHook_, at_) || ff_compiler_LspHook.LspHook_isDefinedAt(self_.lspHook_, scheme_.signature_.at_))) {
const symbolHook_ = ff_compiler_LspHook.SymbolHook(symbol_, at_, scheme_.signature_.at_);
const emittedHook_ = (((_1) => {
if(_1.InferLookupHook) {
const h_ = _1;
h_.symbol_.value_ = symbolHook_;
h_.instantiated_.value_ = ff_core_Option.Some(instantiated_)
return
}
{

return
}
}))(ff_core_Option.Option_else(hook_, (() => {
const selfName_ = environment_.selfVariable_;
const h_ = ff_compiler_LspHook.InferLookupHook(self_.unification_, environment_, expected_, selfName_, ff_compiler_LspHook.Box(symbolHook_), ff_compiler_LspHook.Box(ff_core_Option.None()));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, h_);
return h_
})));

};
return instantiated_
}))
}




