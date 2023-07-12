

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

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

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type LspHook
export function LspHook(at_, definedAt_, insertIdentifier_, trackSymbols_, stackOfResults_) {
return {at_, definedAt_, insertIdentifier_, trackSymbols_, stackOfResults_};
}

// type SymbolHook
export function SymbolHook(qualifiedName_, usageAt_, definedAt_) {
return {qualifiedName_, usageAt_, definedAt_};
}

// type Box
export function Box(value_) {
return {value_};
}

// type ResultHook
const ParseSymbolBegin$ = {ParseSymbolBegin: true};
export function ParseSymbolBegin() {
return ParseSymbolBegin$;
}
export function ParseSymbolEnd(name_, kind_, selectionStart_, selectionEnd_, start_, end_) {
return {ParseSymbolEnd: true, name_, kind_, selectionStart_, selectionEnd_, start_, end_};
}
export function ParseArgumentHook(callAt_, argumentIndex_, parameterName_) {
return {ParseArgumentHook: true, callAt_, argumentIndex_, parameterName_};
}
export function ResolveSymbolHook(symbol_, annotation_) {
return {ResolveSymbolHook: true, symbol_, annotation_};
}
export function ResolveTypeHook(types_, typeGenerics_, symbol_, explicitType_) {
return {ResolveTypeHook: true, types_, typeGenerics_, symbol_, explicitType_};
}
export function ResolveConstraintHook(symbol_, constrant_) {
return {ResolveConstraintHook: true, symbol_, constrant_};
}
export function ResolveSignatureHook(signature_, isInstanceMethod_) {
return {ResolveSignatureHook: true, signature_, isInstanceMethod_};
}
export function ResolveVariantFieldHook(symbol_, type_, commonField_) {
return {ResolveVariantFieldHook: true, symbol_, type_, commonField_};
}
export function InferTermHook(unification_, environment_, expected_, term_, recordType_, missing_) {
return {InferTermHook: true, unification_, environment_, expected_, term_, recordType_, missing_};
}
export function InferLambdaStartHook(unification_, environment_, lambdaType_) {
return {InferLambdaStartHook: true, unification_, environment_, lambdaType_};
}
export function InferSequentialStartHook(unification_, term_, missing_) {
return {InferSequentialStartHook: true, unification_, term_, missing_};
}
export function InferFunctionDefinitionHook(unification_, environment_, definition_, missing_) {
return {InferFunctionDefinitionHook: true, unification_, environment_, definition_, missing_};
}
export function InferPatternHook(unification_, environment_, expected_, pattern_) {
return {InferPatternHook: true, unification_, environment_, expected_, pattern_};
}
export function InferParameterHook(unification_, environment_, parameter_, missing_) {
return {InferParameterHook: true, unification_, environment_, parameter_, missing_};
}
export function InferArgumentHook(unification_, environment_, isCopy_, callAt_, callName_, parameters_, arguments_, argumentIndex_) {
return {InferArgumentHook: true, unification_, environment_, isCopy_, callAt_, callName_, parameters_, arguments_, argumentIndex_};
}
export function InferLookupHook(unification_, environment_, expected_, selfVariable_, symbol_, instantiated_) {
return {InferLookupHook: true, unification_, environment_, expected_, selfVariable_, symbol_, instantiated_};
}
export function InferRecordFieldHook(unification_, environment_, expected_, recordType_, fieldName_) {
return {InferRecordFieldHook: true, unification_, environment_, expected_, recordType_, fieldName_};
}



export function disabled_() {
return ff_compiler_LspHook.make_(ff_core_Option.None(), ff_core_Option.None(), false, false)
}

export function make_(at_, definedAt_, insertIdentifier_, trackSymbols_) {
return ff_compiler_LspHook.LspHook(ff_core_Option.Option_else(at_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), ff_core_Option.Option_else(definedAt_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), insertIdentifier_, trackSymbols_, ff_core_List.List_toStack(ff_core_List.Empty()))
}

export function strictlyBetween_(afterAt_, beforeAt_, at_, extraColumns_) {
return (((at_.file_ === afterAt_.file_) && (((at_.line_ === afterAt_.line_) && (at_.column_ > afterAt_.column_)) || (at_.line_ > afterAt_.line_))) && (((at_.line_ === beforeAt_.line_) && (at_.column_ < (beforeAt_.column_ + extraColumns_))) || (at_.line_ < beforeAt_.line_)))
}

export function showHook_(hook_) {
{
const hook_a = hook_;
{
if(hook_a.InferArgumentHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const isCopy_ = hook_a.isCopy_;
const callAt_ = hook_a.callAt_;
const callName_ = hook_a.callName_;
const parameters_ = hook_a.parameters_;
const arguments_ = hook_a.arguments_;
const argumentIndex_ = hook_a.argumentIndex_;
return "InferArgumentHook(...)"
return
}
}
{
if(hook_a.InferFunctionDefinitionHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const definition_ = hook_a.definition_;
const missing_ = hook_a.missing_;
return "InferFunctionDefinitionHook(...)"
return
}
}
{
if(hook_a.InferLambdaStartHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const lambdaType_ = hook_a.lambdaType_;
return "InferLambdaStartHook(...)"
return
}
}
{
if(hook_a.InferLookupHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const selfVariable_ = hook_a.selfVariable_;
const symbol_ = hook_a.symbol_;
const instantiated_ = hook_a.instantiated_;
return "InferLookupHook(...)"
return
}
}
{
if(hook_a.InferParameterHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const parameter_ = hook_a.parameter_;
const missing_ = hook_a.missing_;
return "InferParameterHook(...)"
return
}
}
{
if(hook_a.InferPatternHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const pattern_ = hook_a.pattern_;
return "InferPatternHook(...)"
return
}
}
{
if(hook_a.InferRecordFieldHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const recordType_ = hook_a.recordType_;
const fieldName_ = hook_a.fieldName_;
return "InferRecordFieldHook(...)"
return
}
}
{
if(hook_a.InferSequentialStartHook) {
const unification_ = hook_a.unification_;
const term_ = hook_a.term_;
const missing_ = hook_a.missing_;
return "InferSequentialStartHook(...)"
return
}
}
{
if(hook_a.InferTermHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const term_ = hook_a.term_;
const recordType_ = hook_a.recordType_;
const missing_ = hook_a.missing_;
return "InferTermHook(...)"
return
}
}
{
if(hook_a.ParseArgumentHook) {
const callAt_ = hook_a.callAt_;
const argumentIndex_ = hook_a.argumentIndex_;
const parameterName_ = hook_a.parameterName_;
return "ParseArgumentHook(...)"
return
}
}
{
if(hook_a.ParseSymbolBegin) {
return "ParseSymbolBegin(...)"
return
}
}
{
if(hook_a.ParseSymbolEnd) {
const name_ = hook_a.name_;
const kind_ = hook_a.kind_;
const selectionStart_ = hook_a.selectionStart_;
const selectionEnd_ = hook_a.selectionEnd_;
const start_ = hook_a.start_;
const end_ = hook_a.end_;
return "ParseSymbolEnd(...)"
return
}
}
{
if(hook_a.ResolveConstraintHook) {
const symbol_ = hook_a.symbol_;
const constrant_ = hook_a.constrant_;
return "ResolveConstraintHook(...)"
return
}
}
{
if(hook_a.ResolveSignatureHook) {
const signature_ = hook_a.signature_;
return "ResolveSignatureHook(...)"
return
}
}
{
if(hook_a.ResolveSymbolHook) {
const symbol_ = hook_a.symbol_;
const annotation_ = hook_a.annotation_;
return "ResolveSymbolHook(...)"
return
}
}
{
if(hook_a.ResolveTypeHook) {
const types_ = hook_a.types_;
const typeGenerics_ = hook_a.typeGenerics_;
const symbol_ = hook_a.symbol_;
const explicitType_ = hook_a.explicitType_;
return "ResolveTypeHook(...)"
return
}
}
{
if(hook_a.ResolveVariantFieldHook) {
const symbol_ = hook_a.symbol_;
const type_ = hook_a.type_;
const commonField_ = hook_a.commonField_;
return "ResolveVariantFieldHook(...)"
return
}
}
}
}

export async function disabled_$($task) {
return ff_compiler_LspHook.make_(ff_core_Option.None(), ff_core_Option.None(), false, false)
}

export async function make_$(at_, definedAt_, insertIdentifier_, trackSymbols_, $task) {
return ff_compiler_LspHook.LspHook(ff_core_Option.Option_else(at_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), ff_core_Option.Option_else(definedAt_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), insertIdentifier_, trackSymbols_, ff_core_List.List_toStack(ff_core_List.Empty()))
}

export async function strictlyBetween_$(afterAt_, beforeAt_, at_, extraColumns_, $task) {
return (((at_.file_ === afterAt_.file_) && (((at_.line_ === afterAt_.line_) && (at_.column_ > afterAt_.column_)) || (at_.line_ > afterAt_.line_))) && (((at_.line_ === beforeAt_.line_) && (at_.column_ < (beforeAt_.column_ + extraColumns_))) || (at_.line_ < beforeAt_.line_)))
}

export async function showHook_$(hook_, $task) {
{
const hook_a = hook_;
{
if(hook_a.InferArgumentHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const isCopy_ = hook_a.isCopy_;
const callAt_ = hook_a.callAt_;
const callName_ = hook_a.callName_;
const parameters_ = hook_a.parameters_;
const arguments_ = hook_a.arguments_;
const argumentIndex_ = hook_a.argumentIndex_;
return "InferArgumentHook(...)"
return
}
}
{
if(hook_a.InferFunctionDefinitionHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const definition_ = hook_a.definition_;
const missing_ = hook_a.missing_;
return "InferFunctionDefinitionHook(...)"
return
}
}
{
if(hook_a.InferLambdaStartHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const lambdaType_ = hook_a.lambdaType_;
return "InferLambdaStartHook(...)"
return
}
}
{
if(hook_a.InferLookupHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const selfVariable_ = hook_a.selfVariable_;
const symbol_ = hook_a.symbol_;
const instantiated_ = hook_a.instantiated_;
return "InferLookupHook(...)"
return
}
}
{
if(hook_a.InferParameterHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const parameter_ = hook_a.parameter_;
const missing_ = hook_a.missing_;
return "InferParameterHook(...)"
return
}
}
{
if(hook_a.InferPatternHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const pattern_ = hook_a.pattern_;
return "InferPatternHook(...)"
return
}
}
{
if(hook_a.InferRecordFieldHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const recordType_ = hook_a.recordType_;
const fieldName_ = hook_a.fieldName_;
return "InferRecordFieldHook(...)"
return
}
}
{
if(hook_a.InferSequentialStartHook) {
const unification_ = hook_a.unification_;
const term_ = hook_a.term_;
const missing_ = hook_a.missing_;
return "InferSequentialStartHook(...)"
return
}
}
{
if(hook_a.InferTermHook) {
const unification_ = hook_a.unification_;
const environment_ = hook_a.environment_;
const expected_ = hook_a.expected_;
const term_ = hook_a.term_;
const recordType_ = hook_a.recordType_;
const missing_ = hook_a.missing_;
return "InferTermHook(...)"
return
}
}
{
if(hook_a.ParseArgumentHook) {
const callAt_ = hook_a.callAt_;
const argumentIndex_ = hook_a.argumentIndex_;
const parameterName_ = hook_a.parameterName_;
return "ParseArgumentHook(...)"
return
}
}
{
if(hook_a.ParseSymbolBegin) {
return "ParseSymbolBegin(...)"
return
}
}
{
if(hook_a.ParseSymbolEnd) {
const name_ = hook_a.name_;
const kind_ = hook_a.kind_;
const selectionStart_ = hook_a.selectionStart_;
const selectionEnd_ = hook_a.selectionEnd_;
const start_ = hook_a.start_;
const end_ = hook_a.end_;
return "ParseSymbolEnd(...)"
return
}
}
{
if(hook_a.ResolveConstraintHook) {
const symbol_ = hook_a.symbol_;
const constrant_ = hook_a.constrant_;
return "ResolveConstraintHook(...)"
return
}
}
{
if(hook_a.ResolveSignatureHook) {
const signature_ = hook_a.signature_;
return "ResolveSignatureHook(...)"
return
}
}
{
if(hook_a.ResolveSymbolHook) {
const symbol_ = hook_a.symbol_;
const annotation_ = hook_a.annotation_;
return "ResolveSymbolHook(...)"
return
}
}
{
if(hook_a.ResolveTypeHook) {
const types_ = hook_a.types_;
const typeGenerics_ = hook_a.typeGenerics_;
const symbol_ = hook_a.symbol_;
const explicitType_ = hook_a.explicitType_;
return "ResolveTypeHook(...)"
return
}
}
{
if(hook_a.ResolveVariantFieldHook) {
const symbol_ = hook_a.symbol_;
const type_ = hook_a.type_;
const commonField_ = hook_a.commonField_;
return "ResolveVariantFieldHook(...)"
return
}
}
}
}

export function LspHook_isEnabled(self_) {
return (((self_.at_.line_ !== (-7)) || (self_.definedAt_.line_ !== (-7))) || self_.trackSymbols_)
}

export function LspHook_isAt(self_, at_) {
return (((self_.at_.line_ === at_.line_) && (self_.at_.column_ === at_.column_)) && (self_.at_.file_ === at_.file_))
}

export function LspHook_isDefinedAt(self_, at_) {
return (((self_.definedAt_.line_ === at_.line_) && (self_.definedAt_.column_ === at_.column_)) && (self_.definedAt_.file_ === at_.file_))
}

export function LspHook_emit(self_, result_) {
ff_core_Stack.Stack_push(self_.stackOfResults_, result_)
}

export function LspHook_results(self_) {
return ff_core_Stack.Stack_toList(self_.stackOfResults_, 0, 9007199254740991)
}

export async function LspHook_isEnabled$(self_, $task) {
return (((self_.at_.line_ !== (-7)) || (self_.definedAt_.line_ !== (-7))) || self_.trackSymbols_)
}

export async function LspHook_isAt$(self_, at_, $task) {
return (((self_.at_.line_ === at_.line_) && (self_.at_.column_ === at_.column_)) && (self_.at_.file_ === at_.file_))
}

export async function LspHook_isDefinedAt$(self_, at_, $task) {
return (((self_.definedAt_.line_ === at_.line_) && (self_.definedAt_.column_ === at_.column_)) && (self_.definedAt_.file_ === at_.file_))
}

export async function LspHook_emit$(self_, result_, $task) {
ff_core_Stack.Stack_push(self_.stackOfResults_, result_)
}

export async function LspHook_results$(self_, $task) {
return ff_core_Stack.Stack_toList(self_.stackOfResults_, 0, 9007199254740991)
}

export const ff_core_Any_HasAnyTag$ff_compiler_LspHook_SymbolHook = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/LspHook.SymbolHook" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/LspHook.SymbolHook" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_LspHook_SymbolHook = {
show_(value_) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((("SymbolHook" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.qualifiedName_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.usageAt_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.definedAt_)) + ")")
return
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((("SymbolHook" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.qualifiedName_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.usageAt_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.definedAt_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_LspHook_SymbolHook = {
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
return ((x_.qualifiedName_ === y_.qualifiedName_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.usageAt_, y_.usageAt_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.definedAt_, y_.definedAt_)))
return
}
}
},
async equals_$(x_, y_, $task) {
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
return ((x_.qualifiedName_ === y_.qualifiedName_) && (ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.usageAt_, y_.usageAt_) && ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Location.equals_(x_.definedAt_, y_.definedAt_)))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_LspHook_SymbolHook = {
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
const qualifiedNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.qualifiedName_, y_.qualifiedName_);
if((qualifiedNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return qualifiedNameOrdering_
} else {
const usageAtOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.usageAt_, y_.usageAt_);
if((usageAtOrdering_ !== ff_core_Ordering.OrderingSame())) {
return usageAtOrdering_
} else {
const definedAtOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.definedAt_, y_.definedAt_);
if((definedAtOrdering_ !== ff_core_Ordering.OrderingSame())) {
return definedAtOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
},
async compare_$(x_, y_, $task) {
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
const qualifiedNameOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.qualifiedName_, y_.qualifiedName_);
if((qualifiedNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return qualifiedNameOrdering_
} else {
const usageAtOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.usageAt_, y_.usageAt_);
if((usageAtOrdering_ !== ff_core_Ordering.OrderingSame())) {
return usageAtOrdering_
} else {
const definedAtOrdering_ = ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Location.compare_(x_.definedAt_, y_.definedAt_);
if((definedAtOrdering_ !== ff_core_Ordering.OrderingSame())) {
return definedAtOrdering_
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

export const ff_core_Serializable_Serializable$ff_compiler_LspHook_SymbolHook = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.qualifiedName_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.usageAt_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.definedAt_)
return
}
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_LspHook.SymbolHook(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.qualifiedName_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.usageAt_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, v_.definedAt_)
return
}
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
{
if(_1 == 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_LspHook.SymbolHook(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_), ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.deserializeUsing_(serialization_))
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
return
}
}
}
};


