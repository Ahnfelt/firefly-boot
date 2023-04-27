

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Environment from "../../ff/compiler/Environment.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

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

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type LspHook
export function LspHook(targetAt_, sourceAt_, inferTypes_, references_, inference_) {
return {targetAt_, sourceAt_, inferTypes_, references_, inference_};
}

// type SymbolHook
export function SymbolHook(qualifiedName_, usageAt_, definedAt_) {
return {qualifiedName_, usageAt_, definedAt_};
}

// type ResolveHook
export function ResolveSymbolHook(symbol_, annotation_) {
return {ResolveSymbolHook: true, symbol_, annotation_};
}
export function ResolveTypeHook(symbol_) {
return {ResolveTypeHook: true, symbol_};
}

// type InferHook
export function InferTermHook(unification_, environment_, expected_, term_, recordType_) {
return {InferTermHook: true, unification_, environment_, expected_, term_, recordType_};
}
export function InferPatternHook(unification_, environment_, expected_, pattern_) {
return {InferPatternHook: true, unification_, environment_, expected_, pattern_};
}
export function InferParameterHook(unification_, environment_, parameter_) {
return {InferParameterHook: true, unification_, environment_, parameter_};
}
export function InferArgumentHook(unification_, environment_, isCopy_, callAt_, callName_, parameters_, arguments_, argumentIndex_) {
return {InferArgumentHook: true, unification_, environment_, isCopy_, callAt_, callName_, parameters_, arguments_, argumentIndex_};
}
export function InferLookupHook(unification_, environment_, symbol_, instantiated_) {
return {InferLookupHook: true, unification_, environment_, symbol_, instantiated_};
}



export function disabled_() {
return ff_compiler_LspHook.make_(ff_core_Option.None(), ff_core_Option.None(), false)
}

export function make_(targetAt_, sourceAt_, inferTypes_) {
return ff_compiler_LspHook.LspHook(ff_core_Option.Option_else(targetAt_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), ff_core_Option.Option_else(sourceAt_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), inferTypes_, ff_core_List.List_toStack(ff_core_List.Empty()), ff_core_List.List_toStack(ff_core_List.Empty()))
}

export async function disabled_$($c) {
return ff_compiler_LspHook.make_(ff_core_Option.None(), ff_core_Option.None(), false)
}

export async function make_$(targetAt_, sourceAt_, inferTypes_, $c) {
return ff_compiler_LspHook.LspHook(ff_core_Option.Option_else(targetAt_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), ff_core_Option.Option_else(sourceAt_, (() => {
return ff_compiler_Syntax.Location("^lsp", (-7), (-7))
})), inferTypes_, ff_core_List.List_toStack(ff_core_List.Empty()), ff_core_List.List_toStack(ff_core_List.Empty()))
}

export function LspHook_isEnabled(self_) {
return ((self_.targetAt_.line_ !== (-7)) || (self_.sourceAt_.line_ !== (-7)))
}

export function LspHook_isTarget(self_, at_) {
return (((self_.targetAt_.line_ === at_.line_) && (self_.targetAt_.column_ === at_.column_)) && (self_.targetAt_.file_ === at_.file_))
}

export function LspHook_isSource(self_, at_) {
return (((self_.sourceAt_.line_ === at_.line_) && (self_.sourceAt_.column_ === at_.column_)) && (self_.sourceAt_.file_ === at_.file_))
}

export async function LspHook_isEnabled$(self_, $c) {
return ((self_.targetAt_.line_ !== (-7)) || (self_.sourceAt_.line_ !== (-7)))
}

export async function LspHook_isTarget$(self_, at_, $c) {
return (((self_.targetAt_.line_ === at_.line_) && (self_.targetAt_.column_ === at_.column_)) && (self_.targetAt_.file_ === at_.file_))
}

export async function LspHook_isSource$(self_, at_, $c) {
return (((self_.sourceAt_.line_ === at_.line_) && (self_.sourceAt_.column_ === at_.column_)) && (self_.sourceAt_.file_ === at_.file_))
}

export const ff_core_Any_HasAnyTag$ff_compiler_LspHook_SymbolHook = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/LspHook.SymbolHook" + "[") + "]"))
},
async anyTag_$($c) {
return ff_core_Any.internalAnyTag_((("ff:compiler/LspHook.SymbolHook" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_LspHook_SymbolHook = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((("SymbolHook" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.qualifiedName_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.usageAt_)) + ", ") + ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Location.show_(z_.definedAt_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
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
serializeUsing_(serialization_, x_) {
{
const serialization_a = serialization_;
const x_a = x_;
{
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, value_.qualifiedName_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, value_.usageAt_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, value_.definedAt_)
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
async serializeUsing_$(serialization_, x_, $c) {
{
const serialization_a = serialization_;
const x_a = x_;
{
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, value_.qualifiedName_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, value_.usageAt_);
ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Location.serializeUsing_(serialization_, value_.definedAt_)
return
}
}
},
async deserializeUsing_$(serialization_, $c) {
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


