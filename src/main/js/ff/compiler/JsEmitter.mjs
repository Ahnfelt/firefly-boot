import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

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

// type JsEmitter
export function JsEmitter(otherModules_, tailCallUsed_) {
return {otherModules_, tailCallUsed_};
}

// type ProcessedVariantCase
export function ProcessedVariantCase(variantName_, newtype_, loneVariant_, arguments_) {
return {variantName_, newtype_, loneVariant_, arguments_};
}



export function make_(otherModules_) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((((m_.packagePair_.first_ + ":") + m_.packagePair_.second_) + "/") + ff_core_String.String_dropLast(m_.file_, 3))
return ff_core_Pair.Pair(moduleName_, m_)
}))), false)
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function detectIfElse_(term_) {
{
const term_a = term_
{
if(term_a.ECall) {
const at_ = term_a.at_
if(term_a.function_.EVariable) {
const word_ = term_a.function_.name_
if(term_a.arguments_.Link) {
const condition_ = term_a.arguments_.head_
if(term_a.arguments_.tail_.Link) {
const body_ = term_a.arguments_.tail_.head_
if(term_a.arguments_.tail_.tail_.Empty) {
if((word_ == "ff:core/Core.if")) {
return ff_core_List.Link(ff_core_Pair.Pair(condition_.value_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), ff_core_List.Empty())
return
}
}
}
}
}
}
}
{
if(term_a.ECall) {
const at_ = term_a.at_
if(term_a.function_.EVariable) {
const word_ = term_a.function_.name_
if(term_a.arguments_.Link) {
const option_ = term_a.arguments_.head_
if(term_a.arguments_.tail_.Link) {
const condition_ = term_a.arguments_.tail_.head_
if(term_a.arguments_.tail_.tail_.Link) {
const body_ = term_a.arguments_.tail_.tail_.head_
if(term_a.arguments_.tail_.tail_.tail_.Empty) {
if((word_ == "ff:core/Option.Option_elseIf")) {
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_)
if(ff_core_List.List_isEmpty(list_)) {
return ff_core_List.Empty()
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_JsEmitter.invokeImmediately_(condition_.value_), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), list_)
}
return
}
}
}
}
}
}
}
}
{
if(term_a.ECall) {
const at_ = term_a.at_
if(term_a.function_.EVariable) {
const word_ = term_a.function_.name_
if(term_a.arguments_.Link) {
const option_ = term_a.arguments_.head_
if(term_a.arguments_.tail_.Link) {
const body_ = term_a.arguments_.tail_.head_
if(term_a.arguments_.tail_.tail_.Empty) {
if((word_ == "ff:core/Option.Option_else")) {
const list_ = ff_compiler_JsEmitter.detectIfElse_(option_.value_)
if(ff_core_List.List_isEmpty(list_)) {
return ff_core_List.Empty()
} else {
return ff_core_List.Link(ff_core_Pair.Pair(ff_compiler_Syntax.EVariant(at_, "ff:core/Bool.True", ff_core_List.Empty(), ff_core_Option.None()), ff_compiler_JsEmitter.invokeImmediately_(body_.value_)), list_)
}
return
}
}
}
}
}
}
}
{
return ff_core_List.Empty()
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function invokeImmediately_(function_) {
{
const function_a = function_
{
if(function_a.ELambda) {
if(function_a.lambda_.cases_.Link) {
if(function_a.lambda_.cases_.head_.patterns_.Empty) {
if(function_a.lambda_.cases_.head_.condition_.None) {
const body_ = function_a.lambda_.cases_.head_.body_
if(function_a.lambda_.cases_.tail_.Empty) {
return body_
return
}
}
}
}
}
}
{
return ff_compiler_Syntax.ECall(function_.at_, false, function_, ff_core_List.Empty(), ff_core_List.Empty())
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function extractTypeName_(type_) {
{
const type_a = type_
{
if(type_a.TVariable) {
const at_ = type_a.at_
const index_ = type_a.index_
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
return
}
}
{
if(type_a.TConstructor) {
const t_ = type_a
return t_.name_
return
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function escapeResolved_(word_) {
const parts_ = ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46))
const initialParts_ = ff_core_List.List_dropLast(parts_, 1)
if(ff_core_List.List_isEmpty(initialParts_)) {
return ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_))
} else {
return ((ff_core_List.List_join(initialParts_, "_") + ".") + ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_)))
}
}

export function escapeKeyword_(word_) {
if(ff_core_Char.Char_isAsciiLower(ff_core_String.String_expectFirst(word_))) {
return (word_ + "_")
} else {
return word_
}
}

export function JsEmitter_emitModule(self_, packagePair_, module_) {
const selfImport_ = ((((((((((((("import * as " + packagePair_.first_) + "_") + packagePair_.second_) + "_") + ff_core_String.String_dropLast(module_.file_, 3)) + " ") + "from \"../../") + packagePair_.first_) + "/") + packagePair_.second_) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".mjs\"")
const imports_ = ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((i_) => {
return ((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
})), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitImportDefinition(self_, _w1)
}))
const parts_ = ff_core_List.Link((ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 == selfImport_)
}))
? imports_
: ff_core_List.Link(selfImport_, imports_)), ff_core_List.Link(ff_core_List.List_map(module_.types_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition(self_, _w1)
})), ff_core_List.Link(ff_core_List.List_map(module_.lets_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, _w1, false))
})), ff_core_List.Link(ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, ""))
})), ff_core_List.Link(ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition(self_, _w1)
})), ff_core_List.Link((((module_.file_ == "Main.ff") && ff_core_List.List_any(module_.functions_, ((_w1) => {
return (_w1.signature_.name_ == "main")
})))
? ff_core_List.Link(ff_compiler_JsEmitter.JsEmitter_emitMain(self_), ff_core_List.Empty())
: ff_core_List.Empty()), ff_core_List.Empty()))))))
return (ff_core_List.List_join(ff_core_List.List_map(parts_, ((_w1) => {
return ff_core_List.List_join(_w1, "\n\n")
})), "\n\n") + "\n")
}

export function JsEmitter_emitMain(self_) {
return "if(!globalThis.$ffSkipMain) queueMicrotask(() => main_({array_: process.argv.slice(2)}))"
}

export function JsEmitter_emitImportDefinition(self_, definition_) {
return ((((((((((((("import * as " + definition_.package_.first_) + "_") + definition_.package_.second_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.first_) + "/") + definition_.package_.second_) + "/") + definition_.file_) + ".mjs\"")
}

export function JsEmitter_emitLetDefinition(self_, definition_, mutable_ = false) {
const mutability_ = (mutable_
? "let"
: "const")
const valueCode_ = ff_core_Option.Option_else(definition_.targets_.javaScript_, (() => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_)
}))
return ((((mutability_ + " ") + ff_compiler_JsEmitter.escapeKeyword_(definition_.name_)) + " = ") + valueCode_)
}

export function JsEmitter_emitExtendsDefinition(self_, definition_) {
const typeName_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_compiler_JsEmitter.extractTypeName_(definition_.type_)), ((_w1) => {
return (_w1 != 46)
})))
const methods_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
{
const _1 = method_
{
const _c = _1
return ff_compiler_Syntax.DFunction(_c.at_, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, ((typeName_ + "_") + method_.signature_.name_), _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_)
}))(method_.signature_), _c.body_, _c.targets_)
return
}
throw new Error('Unexhaustive pattern match')
}
}))
return ff_core_List.List_join(ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, ""))
})), "\n\n")
}

export function JsEmitter_emitFunctionDefinition(self_, definition_, suffix_ = "") {
const signature_ = ff_compiler_JsEmitter.JsEmitter_emitSignature(self_, definition_.signature_, suffix_)
return ff_core_Option.Option_else(ff_core_Option.Option_map(definition_.targets_.javaScript_, ((code_) => {
if(ff_core_String.String_startsWith(code_, "#", 0)) {
return ff_core_String.String_dropFirst(code_, 1)
} else {
return (((signature_ + " {\n") + code_) + "\n}")
}
})), (() => {
{
const _1 = definition_.body_
{
if(_1.cases_.Link) {
const matchCase_ = _1.cases_.head_
if(_1.cases_.tail_.Empty) {
if(ff_core_List.List_all(matchCase_.patterns_, ((_1) => {
{
if(_1.PVariable) {
if(_1.name_.None) {
return true
return
}
}
}
{
if(_1.PVariable) {
if(_1.name_.Some) {
const x_ = _1.name_.value_
if(true) {
return true
return
}
}
}
}
{
return false
return
}
throw new Error('Unexhaustive pattern match')
}))) {
const body_ = ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true)
}))
return (((signature_ + " {\n") + body_) + "\n}")
return
}
}
}
}
{
const cases_ = _1.cases_
const escapedArguments_ = ff_core_List.List_map(definition_.signature_.parameters_, ((_w1) => {
return (_w1.name_ + "_a")
}))
const shadowingWorkaround_ = ff_core_List.List_join(ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
return ((("const " + p_.name_) + "_a = ") + ff_compiler_JsEmitter.escapeKeyword_(p_.name_))
})), "\n")
const body_ = ff_compiler_JsEmitter.JsEmitter_emitTailCall(self_, (() => {
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true)) + "\n}")
})), "\n")
return (((("{\n" + shadowingWorkaround_) + "\n") + casesString_) + "\nthrow new Error('Unexhaustive pattern match')\n}")
}))
return (((signature_ + " {\n") + body_) + "\n}")
return
}
throw new Error('Unexhaustive pattern match')
}
}))
}

export function JsEmitter_emitTailCall(self_, body_) {
const outerTailCallUsed_ = self_.tailCallUsed_
self_.tailCallUsed_ = false
const result_ = body_()
const tailCallUsed_ = self_.tailCallUsed_
self_.tailCallUsed_ = outerTailCallUsed_
if(tailCallUsed_) {
return (("_tailcall: for(;;) {\n" + result_) + "\nreturn\n}")
} else {
return result_
}
}

export function JsEmitter_emitSignature(self_, signature_, suffix_ = "") {
const parameters_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(signature_.parameters_, ((parameter_) => {
return ff_compiler_JsEmitter.JsEmitter_emitParameter(self_, parameter_)
})), ", ")) + ")")
return ((("function " + ff_compiler_JsEmitter.escapeKeyword_(signature_.name_)) + suffix_) + parameters_)
}

export function JsEmitter_emitParameter(self_, parameter_) {
const defaultValue_ = ff_core_Option.Option_else(ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return (" = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1))
})), (() => {
return ""
}))
return (ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_) + defaultValue_)
}

export function JsEmitter_emitTypeDefinition(self_, definition_) {
if(definition_.newtype_) {
return ("// newtype " + definition_.name_)
} else {
return ((("// type " + definition_.name_) + "\n") + ff_core_List.List_join(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition(self_, definition_, _w1)
})), "\n"))
}
}

export function JsEmitter_emitVariantDefinition(self_, typeDefinition_, definition_) {
const allFields_ = ff_core_List.List_addAll(typeDefinition_.commonFields_, definition_.fields_)
const fields_ = ff_core_List.List_join(ff_core_List.List_map(allFields_, ((_w1) => {
return ff_compiler_JsEmitter.escapeKeyword_(_w1.name_)
})), ", ")
return ff_core_Option.Option_else(definition_.targets_.javaScript_, (() => {
if(ff_core_List.List_isEmpty(allFields_)) {
return ((((((((((((("const " + definition_.name_) + "$ = {") + definition_.name_) + ": true};\n") + "export function ") + definition_.name_) + "(") + fields_) + ") {\n") + "return ") + definition_.name_) + "$;\n") + "}")
} else if((ff_core_List.List_size(typeDefinition_.variants_) == 1)) {
return (((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + fields_) + "};\n") + "}")
} else {
return (((((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + definition_.name_) + ": true, ") + fields_) + "};\n") + "}")
}
}))
}

export function JsEmitter_emitTerm(self_, term_) {
{
const self_a = self_
const term_a = term_
{
const self_ = self_a
if(term_a.EString) {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
const self_ = self_a
if(term_a.EChar) {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\t'")) {
return "9"
return
}
}
}
{
const self_ = self_a
if(term_a.EChar) {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\n'")) {
return "10"
return
}
}
}
{
const self_ = self_a
if(term_a.EChar) {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\r'")) {
return "13"
return
}
}
}
{
const self_ = self_a
if(term_a.EChar) {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\\"'")) {
return "34"
return
}
}
}
{
const self_ = self_a
if(term_a.EChar) {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\''")) {
return "39"
return
}
}
}
{
const self_ = self_a
if(term_a.EChar) {
const at_ = term_a.at_
const value_ = term_a.value_
return ("" + ff_core_Char.Char_toInt(ff_core_String.String_expect(value_, 1)))
return
}
}
{
const self_ = self_a
if(term_a.EInt) {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
const self_ = self_a
if(term_a.EFloat) {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
const self_ = self_a
if(term_a.EVariable) {
const at_ = term_a.at_
const name_ = term_a.name_
return ff_compiler_JsEmitter.escapeResolved_(name_)
return
}
}
{
const self_ = self_a
if(term_a.EList) {
const at_ = term_a.at_
const items_ = term_a.items_
return ff_compiler_JsEmitter.JsEmitter_emitList(self_, items_)
return
}
}
{
const self_ = self_a
if(term_a.EVariant) {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.False")) {
return "false"
return
}
}
}
{
const self_ = self_a
if(term_a.EVariant) {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.True")) {
return "true"
return
}
}
}
{
const self_ = self_a
if(term_a.EVariant) {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Unit.Unit")) {
return "(void 0)"
return
}
}
}
{
const self_ = self_a
if(term_a.EVariant) {
const at_ = term_a.at_
const name_ = term_a.name_
const arguments_ = term_a.arguments_
return (((ff_compiler_JsEmitter.escapeResolved_(name_) + "(") + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_)), ((argument_) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, argument_)
})), ", ")) + ")")
return
}
}
{
const self_ = self_a
if(term_a.EVariantIs) {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.False")) {
return "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}
}
}
{
const self_ = self_a
if(term_a.EVariantIs) {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.True")) {
return "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}
}
}
{
const self_ = self_a
if(term_a.EVariantIs) {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Unit.Unit")) {
return "function(_v) { return ff_core_Option.Some(_v); }"
return
}
}
}
{
const self_ = self_a
if(term_a.EVariantIs) {
const at_ = term_a.at_
const name_ = term_a.name_
const n_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 != 46)
})))
return (((("(function(_v) { " + "return _v.") + ff_compiler_JsEmitter.escapeResolved_(n_)) + " ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
return
}
}
{
const self_ = self_a
if(term_a.ECopy) {
const at_ = term_a.at_
const name_ = term_a.name_
const record_ = term_a.record_
const fields_ = term_a.arguments_
const fieldCode_ = ff_core_List.List_join(ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_))
})), ", ")
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_)) + ", ") + fieldCode_) + "}")
return
}
}
{
const self_ = self_a
if(term_a.EField) {
const at_ = term_a.at_
const newtype_ = term_a.newtype_
const record_ = term_a.record_
const field_ = term_a.field_
if(newtype_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_)
} else {
return ((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
}
return
}
}
{
const self_ = self_a
if(term_a.ELambda) {
const at_ = term_a.at_
if(term_a.lambda_.cases_.Link) {
const patterns_ = term_a.lambda_.cases_.head_.patterns_
if(term_a.lambda_.cases_.head_.condition_.None) {
const body_ = term_a.lambda_.cases_.head_.body_
if(term_a.lambda_.cases_.tail_.Empty) {
if(ff_core_List.List_all(patterns_, ((_1) => {
{
if(_1.PVariable) {
return true
return
}
}
{
return false
return
}
throw new Error('Unexhaustive pattern match')
}))) {
const parameters_ = ff_core_List.List_join(ff_core_List.List_map(patterns_, ((_1) => {
{
if(_1.PVariable) {
const p_ = _1
return ff_core_Option.Option_else(ff_core_Option.Option_map(p_.name_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), (() => {
return "_"
}))
return
}
}
{
return ff_core_Core.panic_("!")
return
}
throw new Error('Unexhaustive pattern match')
})), ", ")
return (((("((" + parameters_) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true)) + "\n})")
return
}
}
}
}
}
}
{
const self_ = self_a
if(term_a.ELambda) {
const at_ = term_a.at_
const cases_ = term_a.lambda_.cases_
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_expect(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}))
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}))
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1, true)) + "\n}")
})), "\n")
return ((((("((" + ff_core_List.List_join(escapedArguments_, ", ")) + ") => ") + "{\n") + casesString_) + "\nthrow new Error('Unexhaustive pattern match')\n})")
return
}
}
{
const self_ = self_a
if(term_a.EPipe) {
const at_ = term_a.at_
const value_ = term_a.value_
const function_ = term_a.function_
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_)) + ")")
return
}
}
{
const self_ = self_a
if(term_a.ECall) {
const at_ = term_a.at_
if(term_a.function_.EVariable) {
const operator_ = term_a.function_.name_
if(term_a.typeArguments_.Empty) {
if(term_a.arguments_.Link) {
const value_ = term_a.arguments_.head_
if(term_a.arguments_.tail_.Empty) {
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)))) {
return ((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, value_)) + ")")
return
}
}
}
}
}
}
}
{
const self_ = self_a
if(term_a.ECall) {
const at_ = term_a.at_
if(term_a.function_.EVariable) {
const operator_ = term_a.function_.name_
if(term_a.typeArguments_.Empty) {
if(term_a.arguments_.Link) {
const left_ = term_a.arguments_.head_
if(term_a.arguments_.tail_.Link) {
const right_ = term_a.arguments_.tail_.head_
if(term_a.arguments_.tail_.tail_.Empty) {
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)))) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_)) + ")")
return
}
}
}
}
}
}
}
}
{
const self_ = self_a
if(term_a.ECall) {
const at_ = term_a.at_
const function_ = term_a.function_
const arguments_ = term_a.arguments_
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_)
{
if(_1.Empty) {
return (((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_) + "(") + ff_core_List.List_join(ff_core_List.List_map(arguments_, ((argument_) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, argument_)
})), ", ")) + ")")
return
}
}
{
if(_1.Link) {
if(_1.head_.first_.EVariant) {
const word_ = _1.head_.first_.name_
const elseBody_ = _1.head_.second_
const list_ = _1.tail_
if((word_ == "ff:core/Bool.True")) {
return (("(" + ff_core_List.List_foldLeft(list_, ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, elseBody_))(((_1, _2) => {
{
const otherwise_ = _1
const condition_ = _2.first_
const body_ = _2.second_
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_) + "\n? ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_)) + "\n: ") + otherwise_)
return
}
throw new Error('Unexhaustive pattern match')
}))) + ")")
return
}
}
}
}
{
const list_ = _1
return (("(" + ff_core_List.List_foldLeft(list_, "ff_core_Option.None()")(((_1, _2) => {
{
const otherwise_ = _1
const condition_ = _2.first_
const body_ = _2.second_
return ((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_) + "\n? ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_)) + ")\n: ") + otherwise_)
return
}
throw new Error('Unexhaustive pattern match')
}))) + ")")
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
{
const self_ = self_a
if(term_a.ERecord) {
const at_ = term_a.at_
const fields_ = term_a.fields_
if(ff_core_List.List_isEmpty(fields_)) {
return "{}"
} else {
const list_ = ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_))
}))
return (("{\n" + ff_core_List.List_join(list_, ",\n")) + "\n}")
}
return
}
}
{
const self_ = self_a
if(term_a.EWildcard) {
const at_ = term_a.at_
const index_ = term_a.index_
if((index_ == 0)) {
ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
}
return ("_w" + index_)
return
}
}
{
const self_ = self_a
return (("(function() {\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, term_, true)) + "\n})()")
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function JsEmitter_emitStatements(self_, term_, last_) {
{
const _1 = term_
{
if(_1.EFunctions) {
const at_ = _1.at_
const functions_ = _1.functions_
const body_ = _1.body_
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, ff_compiler_Syntax.DFunction(at_, f_.signature_, f_.body_, ff_compiler_Syntax.Targets(ff_core_Option.None())), "")
}))
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_))
return
}
}
{
if(_1.ELet) {
const at_ = _1.at_
const mutable_ = _1.mutable_
const name_ = _1.name_
const valueType_ = _1.valueType_
const value_ = _1.value_
const body_ = _1.body_
return ((ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_, ff_compiler_Syntax.Targets(ff_core_Option.None())), mutable_) + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_))
return
}
}
{
if(_1.EVariant) {
const at_ = _1.at_
const word_ = _1.name_
if((word_ == "ff:core/Unit.Unit")) {
return ""
return
}
}
}
{
if(_1.ESequential) {
const at0_ = _1.at_
if(_1.before_.EPipe) {
const at1_ = _1.before_.at_
const value_ = _1.before_.value_
if(_1.before_.function_.ELambda) {
const at2_ = _1.before_.function_.at_
const at3_ = _1.before_.function_.lambda_.at_
const cases_ = _1.before_.function_.lambda_.cases_
const e_ = _1.after_
if(_1.after_.EVariant) {
const at_ = _1.after_.at_
const word_ = _1.after_.name_
if((last_ && (word_ == "ff:core/Unit.Unit"))) {
const newCases_ = ff_core_List.List_map(cases_, ((case_) => {
{
const _1 = case_
{
const _c = _1
return ff_compiler_Syntax.MatchCase(_c.at_, _c.patterns_, _c.condition_, ff_compiler_Syntax.ESequential(at0_, case_.body_, e_))
return
}
throw new Error('Unexhaustive pattern match')
}
}))
const newPipe_ = ff_compiler_Syntax.EPipe(at1_, value_, ff_compiler_Syntax.ELambda(at2_, ff_compiler_Syntax.Lambda(at3_, newCases_)))
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, newPipe_, last_)
return
}
}
}
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_
if(_1.before_.EVariant) {
const at_ = _1.before_.at_
const word_ = _1.before_.name_
const after_ = _1.after_
if((word_ == "ff:core/Unit.Unit")) {
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_)
return
}
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_
const before_ = _1.before_
if(_1.after_.EVariant) {
const at_ = _1.after_.at_
const word_ = _1.after_.name_
if((word_ == "ff:core/Unit.Unit")) {
return ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false)
return
}
}
}
}
{
if(_1.ESequential) {
const at_ = _1.at_
const before_ = _1.before_
const after_ = _1.after_
return ((ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false) + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_))
return
}
}
{
if(_1.EAssign) {
const at_ = _1.at_
const operator_ = _1.operator_
const name_ = _1.variable_
const value_ = _1.value_
return ((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_))
return
}
}
{
if(_1.EAssignField) {
const at_ = _1.at_
const operator_ = _1.operator_
const record_ = _1.record_
const field_ = _1.field_
const value_ = _1.value_
return ((((((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_))
return
}
}
{
if(_1.ECall) {
const at_ = _1.at_
if(_1.function_.EVariable) {
const word_ = _1.function_.name_
if(_1.arguments_.Link) {
const condition_ = _1.arguments_.head_
if(_1.arguments_.tail_.Link) {
const body_ = _1.arguments_.tail_.head_
if(_1.arguments_.tail_.tail_.Empty) {
if((word_ == "ff:core/Core.while")) {
return (((("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(condition_.value_))) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false)) + "\n}")
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_
if(_1.function_.EVariable) {
const word_ = _1.function_.name_
if(_1.arguments_.Link) {
const condition_ = _1.arguments_.head_
if(_1.arguments_.tail_.Link) {
const body_ = _1.arguments_.tail_.head_
if(_1.arguments_.tail_.tail_.Empty) {
if((word_ == "ff:core/Core.if")) {
return ((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_.value_)) + ") {\n") + (last_
? (("return ff_core_Option.Some(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_))) + ")\n} else return ff_core_Option.None()")
: (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, ff_compiler_JsEmitter.invokeImmediately_(body_.value_), false) + "\n}")))
return
}
}
}
}
}
}
}
{
if(_1.ECall) {
const at_ = _1.at_
if(_1.tailCall_) {
const function_ = _1.function_
const arguments_ = _1.arguments_
self_.tailCallUsed_ = true
const pair_ = ff_core_List.List_unzip(ff_core_List.List_collect(ff_core_List.List_map(arguments_, ((a_) => {
return ff_core_Option.Some(ff_core_Pair.Pair(((("const " + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_expect(a_.name_) + "_r"))) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, a_.value_)), ((ff_compiler_JsEmitter.escapeKeyword_(ff_core_Option.Option_expect(a_.name_)) + " = ") + ff_compiler_JsEmitter.escapeKeyword_((ff_core_Option.Option_expect(a_.name_) + "_r")))))
})), ((_w1) => {
return _w1
})))
return (((("{\n" + ff_core_List.List_join(pair_.first_, "\n")) + "\n") + ff_core_List.List_join(pair_.second_, "\n")) + "\ncontinue _tailcall\n}")
return
}
}
}
{
if(_1.EPipe) {
const at_ = _1.at_
const value_ = _1.value_
if(_1.function_.ELambda) {
const cases_ = _1.function_.lambda_.cases_
return (((((((!last_)
? "for(;;) "
: "") + "{\nconst _1 = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_)) + "\n") + ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link("_1", ff_core_List.Empty()), _w1, last_)) + "\n}")
})), "\n")) + "\nthrow new Error('Unexhaustive pattern match')\n}")
return
}
}
}
{
{
const _1 = ff_compiler_JsEmitter.detectIfElse_(term_)
{
if(_1.Empty) {
if(last_) {
return ("return " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_))
} else {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_)
}
return
}
}
{
if(_1.Link) {
if(_1.head_.first_.EVariant) {
const word_ = _1.head_.first_.name_
const elseBody_ = _1.head_.second_
const list_ = _1.tail_
if((word_ == "ff:core/Bool.True")) {
const initial_ = (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, elseBody_, last_)) + "\n}")
return ff_core_List.List_foldLeft(list_, initial_)(((_1, _2) => {
{
const otherwise_ = _1
const condition_ = _2.first_
const body_ = _2.second_
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_)) + "\n} else ") + otherwise_)
return
}
throw new Error('Unexhaustive pattern match')
}))
return
}
}
}
}
{
const list_ = _1
if((!last_)) {
return ff_core_List.List_foldLeft(list_, "{}")(((_1, _2) => {
{
const otherwise_ = _1
const condition_ = _2.first_
const body_ = _2.second_
return ((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_)) + "\n} else ") + otherwise_)
return
}
throw new Error('Unexhaustive pattern match')
}))
return
}
}
{
const list_ = _1
return ff_core_List.List_foldLeft(list_, "return ff_core_Option.None()")(((_1, _2) => {
{
const otherwise_ = _1
const condition_ = _2.first_
const body_ = _2.second_
return (((((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_)) + ") {\n") + "return ff_core_Option.Some(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, body_)) + ")\n} else ") + otherwise_)
return
}
throw new Error('Unexhaustive pattern match')
}))
return
}
throw new Error('Unexhaustive pattern match')
}
return
}
throw new Error('Unexhaustive pattern match')
}
}

export function JsEmitter_emitCase(self_, arguments_, matchCase_, last_) {
{
const _1 = ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.condition_)
{
if(_1.first_.Link) {
const p_ = _1.first_.head_
const ps_ = _1.first_.tail_
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, ff_core_List.List_expect(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.condition_, _c.body_)
}))(matchCase_), last_)
return
}
}
{
if(_1.first_.Empty) {
if(_1.second_.Some) {
const condition_ = _1.second_.value_
return (((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_)) + (last_
? "\nreturn\n}"
: "\nbreak\n}"))
return
}
}
}
{
if(_1.first_.Empty) {
if(_1.second_.None) {
return (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, last_) + (last_
? "\nreturn"
: "\nbreak"))
return
}
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, last_) {
{
const _1 = pattern_
{
if(_1.PVariable) {
if(_1.name_.None) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_)
return
}
}
}
{
if(_1.PVariable) {
if(_1.name_.Some) {
const name_ = _1.name_.value_
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_)
return (((escaped_ != argument_)
? (((("const " + escaped_) + " = ") + argument_) + "\n")
: "") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_))
return
}
}
}
{
if(_1.PVariant) {
const name_ = _1.name_
if(_1.patterns_.Empty) {
if((name_ == "ff:core/Bool.False")) {
return (((("if(!" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_)) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
const name_ = _1.name_
if(_1.patterns_.Empty) {
if((name_ == "ff:core/Bool.True")) {
return (((("if(" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_)) + "\n}")
return
}
}
}
}
{
if(_1.PVariant) {
const name_ = _1.name_
const patterns_ = _1.patterns_
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_)
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.List_addAll(patterns_, matchCase_.patterns_), _c.condition_, _c.body_)
}))(matchCase_)
return (((processed_.loneVariant_
? ""
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.List_addAll(processed_.arguments_, arguments_), newMatchCase_, last_)) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PVariantAs) {
const at_ = _1.at_
const name_ = _1.name_
const variable_ = _1.variable_
const processed_ = ff_compiler_JsEmitter.JsEmitter_processVariantCase(self_, name_, argument_)
return ((((processed_.loneVariant_
? ""
: (((("if(" + argument_) + ".") + processed_.variantName_) + ") {\n")) + ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(ff_core_Option.Option_map(variable_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), ((_w1) => {
return (_w1 != argument_)
})), ((_w1) => {
return (((("const " + _w1) + " = ") + argument_) + "\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_, last_)) + (processed_.loneVariant_
? ""
: "\n}"))
return
}
}
{
if(_1.PAlias) {
const pattern_ = _1.pattern_
const variable_ = _1.variable_
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_)
return (((escaped_ != argument_)
? (((("const " + escaped_) + " = ") + argument_) + "\n")
: "") + ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_, last_))
return
}
}
{
if(_1.PList) {
const at_ = _1.at_
if(_1.items_.Empty) {
const p_ = ff_compiler_Syntax.PVariant(at_, "ff:core/List.Empty", ff_core_List.Empty())
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.Link(p_, matchCase_.patterns_), _c.condition_, _c.body_)
}))(matchCase_)
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link(argument_, arguments_), newMatchCase_, last_)
return
}
}
}
{
if(_1.PList) {
const at_ = _1.at_
const t_ = _1.itemType_
if(_1.items_.Link) {
const p_ = _1.items_.head_.first_
if(!_1.items_.head_.second_) {
const ps_ = _1.items_.tail_
const p2_ = ff_compiler_Syntax.PVariant(at_, "ff:core/List.Link", ff_core_List.Link(p_, ff_core_List.Link(ff_compiler_Syntax.PList(at_, t_, ps_), ff_core_List.Empty())))
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.Link(p2_, matchCase_.patterns_), _c.condition_, _c.body_)
}))(matchCase_)
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link(argument_, arguments_), newMatchCase_, last_)
return
}
}
}
}
{
if(_1.PList) {
const at_ = _1.at_
const t_ = _1.itemType_
if(_1.items_.Link) {
const p_ = _1.items_.head_.first_
if(_1.items_.head_.second_) {
if(_1.items_.tail_.Empty) {
const newMatchCase_ = (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.Link(p_, matchCase_.patterns_), _c.condition_, _c.body_)
}))(matchCase_)
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.Link(argument_, arguments_), newMatchCase_, last_)
return
}
}
}
}
}
{
if(_1.PList) {
const at_ = _1.at_
const t_ = _1.itemType_
if(_1.items_.Link) {
const p_ = _1.items_.head_.first_
if(_1.items_.head_.second_) {
return "throw 'Invalid pattern: ... is only allowed for the last element in a list'\n"
return
}
}
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function JsEmitter_emitList(self_, items_) {
{
const self_a = self_
const items_a = items_
{
const self_ = self_a
if(items_a.Empty) {
return "ff_core_List.Empty()"
return
}
}
{
const self_ = self_a
if(items_a.Link) {
const e_ = items_a.head_.first_
if(items_a.head_.second_) {
if(items_a.tail_.Empty) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_)
return
}
}
}
}
{
const self_ = self_a
if(items_a.Link) {
const e_ = items_a.head_.first_
if(!items_a.head_.second_) {
const list_ = items_a.tail_
return (((("ff_core_List.Link(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitList(self_, list_)) + ")")
return
}
}
}
{
const self_ = self_a
if(items_a.Link) {
const e_ = items_a.head_.first_
if(items_a.head_.second_) {
const list_ = items_a.tail_
return (((("ff_core_List.List_addAll(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, e_)) + ", ") + ff_compiler_JsEmitter.JsEmitter_emitList(self_, list_)) + ")")
return
}
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function JsEmitter_processVariantCase(self_, name_, argument_) {
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 != 46)
})))
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_)
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1))
const variantModule_ = ff_core_Map.Map_expect(self_.otherModules_, moduleName_)
let newtype_ = false
let loneVariant_ = false
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ == variantName_)
})), ((variant_) => {
newtype_ = definition_.newtype_
loneVariant_ = (ff_core_List.List_size(definition_.variants_) == 1)
return ff_core_List.List_addAll(ff_core_List.List_map(definition_.commonFields_, ((_w1) => {
return _w1.name_
})), ff_core_List.List_map(variant_.fields_, ((_w1) => {
return _w1.name_
})))
}))
}))), ((field_) => {
if(newtype_) {
return argument_
} else {
return ((argument_ + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
}
}))
return ff_compiler_JsEmitter.ProcessedVariantCase(variantName_, newtype_, loneVariant_, newArguments_)
}

export function JsEmitter_emitArgument(self_, argument_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_)
}


