import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

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

// type JsEmitter
export function JsEmitter(otherModules_) {
return {_: 'JsEmitter', otherModules_};
}



export function make_(otherModules_) {
return ff_compiler_JsEmitter.JsEmitter(ff_core_List.List_toMap(ff_core_List.List_map(otherModules_, ((m_) => {
const moduleName_ = ((((m_.packagePair_.first_ + ":") + m_.packagePair_.second_) + "/") + ff_core_String.String_dropLast(m_.file_, 3));
return ff_core_Pair.Pair(moduleName_, m_)
}))))
}

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function extractTypeName_(type_){
const type_a = type_
{
if(type_a._ === 'TVariable') {
const at_ = type_a.at_
const index_ = type_a.index_
return ff_compiler_JsEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
return
}
}
{
if(type_a._ === 'TConstructor') {
const t_ = type_a
return t_.name_
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function escapeResolved_(word_) {
const parts_ = ff_core_Array.Array_toList(ff_core_String.String_split(ff_core_String.String_replace(ff_core_String.String_replace(word_, ":", "."), "/", "."), 46));
const initialParts_ = ff_core_List.List_dropLast(parts_, 1);
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(initialParts_), (() => {
return ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_))
})), (() => {
return ((ff_core_List.List_join(initialParts_, "_") + ".") + ff_compiler_JsEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_)))
}))
}

export function escapeKeyword_(word_) {
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_Char.Char_isAsciiLower(ff_core_String.String_expectFirst(word_)), (() => {
return (word_ + "_")
})), (() => {
return word_
}))
}

export function JsEmitter_emitModule(self_, packagePair_, module_) {
const selfImport_ = ((((((((((((("import * as " + packagePair_.first_) + "_") + packagePair_.second_) + "_") + ff_core_String.String_dropLast(module_.file_, 3)) + " ") + "from \"../../") + packagePair_.first_) + "/") + packagePair_.second_) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".mjs\"");
const imports_ = ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((i_) => {
return ((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
})), ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitImportDefinition(self_, _w1)
}));
const parts_ = ff_core_Array.Array_toList([ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_any(imports_, ((_w1) => {
return (_w1 == selfImport_)
})), (() => {
return imports_
})), (() => {
return ff_core_Array.Array_toList([selfImport_, ...ff_core_List.List_toArray(imports_)])
})), ff_core_List.List_map(module_.types_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitTypeDefinition(self_, _w1)
})), ff_core_List.List_map(module_.lets_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, _w1, false))
})), ff_core_List.List_map(module_.functions_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, ""))
})), ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitExtendsDefinition(self_, _w1)
})), ff_core_Option.Option_else(ff_core_Core.if_(((module_.file_ == "Main.ff") && ff_core_List.List_any(module_.functions_, ((_w1) => {
return (_w1.signature_.name_ == "main")
}))), (() => {
return ff_core_Array.Array_toList([ff_compiler_JsEmitter.JsEmitter_emitMain(self_)])
})), (() => {
return ff_core_Array.Array_toList([])
}))]);
return (ff_core_List.List_join(ff_core_List.List_map(parts_, ((_w1) => {
return ff_core_List.List_join(_w1, "\n\n")
})), "\n\n") + "\n")
}

export function JsEmitter_emitMain(self_) {
return "queueMicrotask(() => main_({array_: process.argv.slice(2)}))"
}

export function JsEmitter_emitImportDefinition(self_, definition_) {
return ((((((((((((("import * as " + definition_.package_.first_) + "_") + definition_.package_.second_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.first_) + "/") + definition_.package_.second_) + "/") + definition_.file_) + ".mjs\"")
}

export function JsEmitter_emitLetDefinition(self_, definition_, mutable_ = false) {
const mutability_ = ff_core_Option.Option_else(ff_core_Core.if_(mutable_, (() => {
return "let"
})), (() => {
return "const"
}));
const valueCode_ = ff_core_Option.Option_else(definition_.targets_.scala_, (() => {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, definition_.value_)
}));
return ((((mutability_ + " ") + ff_compiler_JsEmitter.escapeKeyword_(definition_.name_)) + " = ") + valueCode_)
}

export function JsEmitter_emitExtendsDefinition(self_, definition_) {
const typeName_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_compiler_JsEmitter.extractTypeName_(definition_.type_)), ((_w1) => {
return (_w1 != 46)
})));
const methods_ = ff_core_List.List_map(definition_.methods_, ((method_) => {
return (((_c) => {
return ff_compiler_Syntax.DFunction(_c.at_, (((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, ((typeName_ + "_") + method_.signature_.name_), _c.generics_, _c.constraints_, _c.parameters_, _c.returnType_)
}))(method_.signature_), _c.body_, _c.targets_)
}))(method_)
}));
return ff_core_List.List_join(ff_core_List.List_map(methods_, ((_w1) => {
return ("export " + ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, _w1, ""))
})), "\n\n")
}

export function JsEmitter_emitFunctionDefinition(self_, definition_, suffix_ = "") {
const signature_ = ff_compiler_JsEmitter.JsEmitter_emitSignature(self_, definition_.signature_, suffix_);
return ff_core_Option.Option_else(ff_core_Option.Option_map(definition_.targets_.javaScript_, ((code_) => {
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_String.String_startsWith(code_, "#", 0), (() => {
return ff_core_String.String_dropFirst(code_, 1)
})), (() => {
return (((signature_ + " {\n") + code_) + "\n}")
}))
})), (() => {
return (((_1) => {
{
if(_1._ === 'Lambda') {
if(_1.cases_._ === 'Link') {
const matchCase_ = _1.cases_.head_
if(_1.cases_.tail_._ === 'Empty') {
if(ff_core_List.List_all(matchCase_.patterns_, ((_1) => {
{
if(_1._ === 'PVariable') {
if(_1.name_._ === 'None') {
return true
return
}}
}
{
if(_1._ === 'PVariable') {
if(_1.name_._ === 'Some') {
const x_ = _1.name_.value_
if(true) {
return true
return
}}}
}
{
return false
return

}
throw new Error('Unexhaustive pattern match')
}))) {
const body_ = ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true);
return (((signature_ + " {\n") + body_) + "\n}")
return
}}}}
}
{
if(_1._ === 'Lambda') {
const cases_ = _1.cases_
const escapedArguments_ = ff_core_List.List_map(definition_.signature_.parameters_, ((_w1) => {
return (_w1.name_ + "_a")
}));
const shadowingWorkaround_ = ff_core_List.List_join(ff_core_List.List_map(definition_.signature_.parameters_, ((p_) => {
return ((("const " + p_.name_) + "_a = ") + ff_compiler_JsEmitter.escapeKeyword_(p_.name_))
})), "\n");
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1)) + "\n}")
})), "\n");
return (((((signature_ + "{\n") + shadowingWorkaround_) + "\n") + casesString_) + "\nthrow new Error('Unexhaustive pattern match')\n}")
return
}
}
throw new Error('Unexhaustive pattern match')
}))(definition_.body_)
}))
}

export function JsEmitter_emitSignature(self_, signature_, suffix_ = "") {
const parameters_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(signature_.parameters_, ((parameter_) => {
return ff_compiler_JsEmitter.JsEmitter_emitParameter(self_, parameter_)
})), ", ")) + ")");
return ((("function " + ff_compiler_JsEmitter.escapeKeyword_(signature_.name_)) + suffix_) + parameters_)
}

export function JsEmitter_emitParameter(self_, parameter_) {
const defaultValue_ = ff_core_Option.Option_else(ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return (" = " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, _w1))
})), (() => {
return ""
}));
return (ff_compiler_JsEmitter.escapeKeyword_(parameter_.name_) + defaultValue_)
}

export function JsEmitter_emitTypeDefinition(self_, definition_) {
return ((("// type " + definition_.name_) + "\n") + ff_core_List.List_join(ff_core_List.List_map(definition_.variants_, ((_w1) => {
return ff_compiler_JsEmitter.JsEmitter_emitVariantDefinition(self_, definition_, _w1)
})), "\n"))
}

export function JsEmitter_emitVariantDefinition(self_, typeDefinition_, definition_) {
const allFields_ = ff_core_List.List_addAll(typeDefinition_.commonFields_, definition_.fields_);
const fields_ = ff_core_List.List_join(ff_core_List.List_map(allFields_, ((_w1) => {
return ff_compiler_JsEmitter.escapeKeyword_(_w1.name_)
})), ", ");
return ff_core_Option.Option_else(definition_.targets_.javaScript_, (() => {
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(allFields_), (() => {
return ((((((((((((("const " + definition_.name_) + "$ = {_: '") + definition_.name_) + "'};\n") + "export function ") + definition_.name_) + "(") + fields_) + ") {\n") + "return ") + definition_.name_) + "$;\n") + "}")
})), (() => {
return (((((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {_: '") + definition_.name_) + "', ") + fields_) + "};\n") + "}")
}))
}))
}

export function JsEmitter_emitTerm(self_, term_){
const self_a = self_
const term_a = term_
{
const self_ = self_a
if(term_a._ === 'EString') {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
const self_ = self_a
if(term_a._ === 'EChar') {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\t'")) {
return "9"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EChar') {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\n'")) {
return "10"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EChar') {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\r'")) {
return "13"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EChar') {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\\"'")) {
return "34"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EChar') {
const at_ = term_a.at_
const value_ = term_a.value_
if((value_ == "'\\''")) {
return "39"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EChar') {
const at_ = term_a.at_
const value_ = term_a.value_
return ("" + ff_core_Char.Char_toInt(ff_core_String.String_expect(value_, 1)))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EInt') {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
const self_ = self_a
if(term_a._ === 'EFloat') {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
const self_ = self_a
if(term_a._ === 'EVariable') {
const at_ = term_a.at_
const name_ = term_a.name_
return ff_compiler_JsEmitter.escapeResolved_(name_)
return
}
}
{
const self_ = self_a
if(term_a._ === 'EList') {
const at_ = term_a.at_
const items_ = term_a.items_
return (("ff_core_Array.Array_toList([" + ff_core_List.List_join(ff_core_List.List_map(items_, ((_1) => {
{
if(_1._ === 'Pair') {
const item_ = _1.first_
if(!_1.second_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_)
return
}}
}
{
if(_1._ === 'Pair') {
const item_ = _1.first_
if(_1.second_) {
return (("...ff_core_List.List_toArray(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, item_)) + ")")
return
}}
}
throw new Error('Unexhaustive pattern match')
})), ", ")) + "])")
return
}
}
{
const self_ = self_a
if(term_a._ === 'EVariant') {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.False")) {
return "false"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EVariant') {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.True")) {
return "true"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EVariant') {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Unit.Unit")) {
return "(void 0)"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EVariant') {
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
if(term_a._ === 'EVariantIs') {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.False")) {
return "function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EVariantIs') {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Bool.True")) {
return "function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EVariantIs') {
const at_ = term_a.at_
const name_ = term_a.name_
if((name_ == "ff:core/Unit.Unit")) {
return "function(_v) { return ff_core_Option.Some(_v); }"
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EVariantIs') {
const at_ = term_a.at_
const name_ = term_a.name_
return (((("(function(_v) { " + "return _v._ === '") + ff_compiler_JsEmitter.escapeResolved_(name_)) + "' ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
return
}
}
{
const self_ = self_a
if(term_a._ === 'ECopy') {
const at_ = term_a.at_
const name_ = term_a.name_
const record_ = term_a.record_
const fields_ = term_a.arguments_
const fieldCode_ = ff_core_List.List_join(ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_))
})), ", ");
return (((("{..." + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_)) + ", ") + fieldCode_) + "}")
return
}
}
{
const self_ = self_a
if(term_a._ === 'EField') {
const at_ = term_a.at_
const record_ = term_a.record_
const field_ = term_a.field_
return ((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, record_) + ".") + ff_compiler_JsEmitter.escapeKeyword_(field_))
return
}
}
{
const self_ = self_a
if(term_a._ === 'ELambda') {
const at_ = term_a.at_
if(term_a.lambda_._ === 'Lambda') {
if(term_a.lambda_.cases_._ === 'Link') {
if(term_a.lambda_.cases_.head_._ === 'MatchCase') {
const patterns_ = term_a.lambda_.cases_.head_.patterns_
if(term_a.lambda_.cases_.head_.condition_._ === 'None') {
const body_ = term_a.lambda_.cases_.head_.body_
if(term_a.lambda_.cases_.tail_._ === 'Empty') {
if(ff_core_List.List_all(patterns_, ((_1) => {
{
if(_1._ === 'PVariable') {
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
if(_1._ === 'PVariable') {
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
})), ", ");
return (((("((" + parameters_) + ") => {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, true)) + "\n})")
return
}}}}}}}
}
{
const self_ = self_a
if(term_a._ === 'ELambda') {
const at_ = term_a.at_
if(term_a.lambda_._ === 'Lambda') {
const cases_ = term_a.lambda_.cases_
const arguments_ = ff_core_List.List_map(ff_core_List.List_pairs(ff_core_List.List_expect(cases_, 0).patterns_), ((_w1) => {
return ("_" + (_w1.first_ + 1))
}));
const escapedArguments_ = ff_core_List.List_map(arguments_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
}));
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((_w1) => {
return (("{\n" + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, escapedArguments_, _w1)) + "\n}")
})), "\n");
return ((((("((" + ff_core_List.List_join(escapedArguments_, ", ")) + ") => ") + "{\n") + casesString_) + "\nthrow new Error('Unexhaustive pattern match')\n})")
return
}}
}
{
const self_ = self_a
if(term_a._ === 'EPipe') {
const at_ = term_a.at_
const value_ = term_a.value_
const function_ = term_a.function_
return (((("(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_)) + ")(") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_)) + ")")
return
}
}
{
const self_ = self_a
if(term_a._ === 'ECall') {
const at_ = term_a.at_
if(term_a.function_._ === 'EVariable') {
const operator_ = term_a.function_.name_
if(term_a.typeArguments_._ === 'Empty') {
if(term_a.arguments_._ === 'Link') {
const value_ = term_a.arguments_.head_
if(term_a.arguments_.tail_._ === 'Empty') {
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)))) {
return ((("(" + operator_) + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, value_)) + ")")
return
}}}}}}
}
{
const self_ = self_a
if(term_a._ === 'ECall') {
const at_ = term_a.at_
if(term_a.function_._ === 'EVariable') {
const operator_ = term_a.function_.name_
if(term_a.typeArguments_._ === 'Empty') {
if(term_a.arguments_._ === 'Link') {
const left_ = term_a.arguments_.head_
if(term_a.arguments_.tail_._ === 'Link') {
const right_ = term_a.arguments_.tail_.head_
if(term_a.arguments_.tail_.tail_._ === 'Empty') {
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)))) {
return (((((("(" + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, left_)) + " ") + operator_) + " ") + ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, right_)) + ")")
return
}}}}}}}
}
{
const self_ = self_a
if(term_a._ === 'ECall') {
const at_ = term_a.at_
const function_ = term_a.function_
const arguments_ = term_a.arguments_
return (((ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, function_) + "(") + ff_core_List.List_join(ff_core_List.List_map(arguments_, ((argument_) => {
return ff_compiler_JsEmitter.JsEmitter_emitArgument(self_, argument_)
})), ", ")) + ")")
return
}
}
{
const self_ = self_a
if(term_a._ === 'ERecord') {
const at_ = term_a.at_
const fields_ = term_a.fields_
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(fields_), (() => {
return "{}"
})), (() => {
const list_ = ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_JsEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, f_.value_))
}));
return (("{\n" + ff_core_List.List_join(list_, ",\n")) + "\n}")
}))
return
}
}
{
const self_ = self_a
if(term_a._ === 'EWildcard') {
const at_ = term_a.at_
const index_ = term_a.index_
ff_core_Core.if_((index_ == 0), (() => {
return ff_compiler_JsEmitter.fail_(at_, "Unbound wildcard")
}));
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

export function JsEmitter_emitStatements(self_, term_, last_) {
return (((_1) => {
{
if(_1._ === 'EFunctions') {
const at_ = _1.at_
const functions_ = _1.functions_
const body_ = _1.body_
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
return ff_compiler_JsEmitter.JsEmitter_emitFunctionDefinition(self_, ff_compiler_Syntax.DFunction(at_, f_.signature_, f_.body_, ff_compiler_Syntax.Targets(ff_core_Option.None(), ff_core_Option.None())), "")
}));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_))
return
}
}
{
if(_1._ === 'ELet') {
const at_ = _1.at_
const mutable_ = _1.mutable_
const name_ = _1.name_
const valueType_ = _1.valueType_
const value_ = _1.value_
const body_ = _1.body_
return ((ff_compiler_JsEmitter.JsEmitter_emitLetDefinition(self_, ff_compiler_Syntax.DLet(at_, name_, valueType_, value_, ff_compiler_Syntax.Targets(ff_core_Option.None(), ff_core_Option.None())), mutable_) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, body_, last_))
return
}
}
{
if(_1._ === 'ESequential') {
const at_ = _1.at_
const before_ = _1.before_
const after_ = _1.after_
return ((ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, before_, false) + ";\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, after_, last_))
return
}
}
{
if(_1._ === 'EAssign') {
const at_ = _1.at_
const operator_ = _1.operator_
const name_ = _1.variable_
const value_ = _1.value_
return ((((ff_compiler_JsEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, value_))
return
}
}
{
if(_1._ === 'EAssignField') {
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
if(_1._ === 'ECall') {
const at_ = _1.at_
if(_1.function_._ === 'EVariable') {
const word_ = _1.function_.name_
if(_1.arguments_._ === 'Link') {
const condition_ = _1.arguments_.head_
if(_1.arguments_.tail_._ === 'Link') {
const body_ = _1.arguments_.tail_.head_
if(_1.arguments_.tail_.tail_._ === 'Empty') {
if((word_ == "ff:core/Core.while")) {
function invoke_(function_){
const function_a = function_
{
if(function_a._ === 'ELambda') {
const at_ = function_a.at_
if(function_a.lambda_._ === 'Lambda') {
if(function_a.lambda_.cases_._ === 'Link') {
if(function_a.lambda_.cases_.head_._ === 'MatchCase') {
if(function_a.lambda_.cases_.head_.patterns_._ === 'Empty') {
if(function_a.lambda_.cases_.head_.condition_._ === 'None') {
const body_ = function_a.lambda_.cases_.head_.body_
if(function_a.lambda_.cases_.tail_._ === 'Empty') {
return body_
return
}}}}}}}
}
{
return ff_compiler_Syntax.ECall(at_, false, function_, ff_core_Array.Array_toList([]), ff_core_Array.Array_toList([]))
return

}
throw new Error('Unexhaustive pattern match')
}
return (((("while(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, invoke_(condition_.value_))) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, invoke_(body_.value_), false)) + "\n}")
return
}}}}}}
}
{
if(last_) {
return ("return " + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_))
return
}
}
{
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, term_)
return

}
throw new Error('Unexhaustive pattern match')
}))(term_)
}

export function JsEmitter_emitCase(self_, arguments_, matchCase_) {
return (((_1) => {
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Link') {
const p_ = _1.first_.head_
const ps_ = _1.first_.tail_
return ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, ff_core_List.List_expect(arguments_, 0), p_, ff_core_List.List_dropFirst(arguments_, 1), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ps_, _c.condition_, _c.body_)
}))(matchCase_))
return
}}
}
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Empty') {
if(_1.second_._ === 'Some') {
const condition_ = _1.second_.value_
return (((("if(" + ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, condition_)) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true)) + "\nreturn\n}")
return
}}}
}
{
if(_1._ === 'Pair') {
if(_1.first_._ === 'Empty') {
if(_1.second_._ === 'None') {
return (ff_compiler_JsEmitter.JsEmitter_emitStatements(self_, matchCase_.body_, true) + "\nreturn\n")
return
}}}
}
throw new Error('Unexhaustive pattern match')
}))(ff_core_Pair.Pair(matchCase_.patterns_, matchCase_.condition_))
}

export function JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_) {
return (((_1) => {
{
if(_1._ === 'PVariable') {
if(_1.name_._ === 'None') {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_)
return
}}
}
{
if(_1._ === 'PVariable') {
if(_1.name_._ === 'Some') {
const name_ = _1.name_.value_
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(name_);
return (ff_core_Option.Option_else(ff_core_Core.if_((escaped_ != argument_), (() => {
return (((("const " + escaped_) + " = ") + argument_) + "\n")
})), (() => {
return ""
})) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_))
return
}}
}
{
if(_1._ === 'PVariant') {
const name_ = _1.name_
if(_1.patterns_._ === 'Empty') {
if((name_ == "ff:core/Bool.False")) {
return (((("if(!" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_)) + "}")
return
}}}
}
{
if(_1._ === 'PVariant') {
const name_ = _1.name_
if(_1.patterns_._ === 'Empty') {
if((name_ == "ff:core/Bool.True")) {
return (((("if(" + argument_) + ") {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_)) + "}")
return
}}}
}
{
if(_1._ === 'PVariant') {
const name_ = _1.name_
if(_1.patterns_._ === 'Empty') {
if((name_ == "ff:core/Unit.Unit")) {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_)
return
}}}
}
{
if(_1._ === 'PVariant') {
const name_ = _1.name_
const patterns_ = _1.patterns_
const variantNameUnqualified_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 != 46)
})));
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(variantNameUnqualified_);
const moduleName_ = ff_core_String.String_dropLast(name_, (ff_core_String.String_size(variantNameUnqualified_) + 1));
const variantModule_ = ff_core_Map.Map_expect(self_.otherModules_, moduleName_);
const newArguments_ = ff_core_List.List_map(ff_core_Option.Option_expect(ff_core_List.List_collectFirst(variantModule_.types_, ((definition_) => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.variants_, ((_w1) => {
return (_w1.name_ == variantName_)
})), ((variant_) => {
return ff_core_List.List_addAll(ff_core_List.List_map(definition_.commonFields_, ((_w1) => {
return _w1.name_
})), ff_core_List.List_map(variant_.fields_, ((_w1) => {
return _w1.name_
})))
}))
}))), ((_w1) => {
return ((argument_ + ".") + ff_compiler_JsEmitter.escapeKeyword_(_w1))
}));
return (((((("if(" + argument_) + "._ === '") + variantName_) + "') {\n") + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_List.List_addAll(newArguments_, arguments_), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_List.List_addAll(patterns_, matchCase_.patterns_), _c.condition_, _c.body_)
}))(matchCase_))) + "}")
return
}
}
{
if(_1._ === 'PVariantAs') {
const at_ = _1.at_
const name_ = _1.name_
const variable_ = _1.variable_
const variantName_ = ff_compiler_JsEmitter.escapeKeyword_(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(name_), ((_w1) => {
return (_w1 != 46)
}))));
return ((((((("if(" + argument_) + "._ === '") + ff_compiler_JsEmitter.escapeKeyword_(variantName_)) + "') {\n") + ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(ff_core_Option.Option_map(variable_, ((word_) => {
return ff_compiler_JsEmitter.escapeKeyword_(word_)
})), ((_w1) => {
return (_w1 != argument_)
})), ((_w1) => {
return (((("const " + _w1) + " = ") + argument_) + "\n")
})), (() => {
return ""
}))) + ff_compiler_JsEmitter.JsEmitter_emitCase(self_, arguments_, matchCase_)) + "}")
return
}
}
{
if(_1._ === 'PAlias') {
const pattern_ = _1.pattern_
const variable_ = _1.variable_
const escaped_ = ff_compiler_JsEmitter.escapeKeyword_(variable_);
return (ff_core_Option.Option_else(ff_core_Core.if_((escaped_ != argument_), (() => {
return (((("const " + escaped_) + " = ") + argument_) + "\n")
})), (() => {
return ""
})) + ff_compiler_JsEmitter.JsEmitter_emitPattern(self_, argument_, pattern_, arguments_, matchCase_))
return
}
}
{
if(_1._ === 'PList') {
const at_ = _1.at_
if(_1.items_._ === 'Empty') {
const p_ = ff_compiler_Syntax.PVariant(at_, "ff:core/List.Empty", ff_core_Array.Array_toList([]));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_Array.Array_toList([argument_, ...ff_core_List.List_toArray(arguments_)]), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_Array.Array_toList([p_, ...ff_core_List.List_toArray(matchCase_.patterns_)]), _c.condition_, _c.body_)
}))(matchCase_))
return
}}
}
{
if(_1._ === 'PList') {
const at_ = _1.at_
const t_ = _1.itemType_
if(_1.items_._ === 'Link') {
if(_1.items_.head_._ === 'Pair') {
const p_ = _1.items_.head_.first_
if(!_1.items_.head_.second_) {
const ps_ = _1.items_.tail_
const p2_ = ff_compiler_Syntax.PVariant(at_, "ff:core/List.Link", ff_core_Array.Array_toList([p_, ff_compiler_Syntax.PList(at_, t_, ps_)]));
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_Array.Array_toList([argument_, ...ff_core_List.List_toArray(arguments_)]), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_Array.Array_toList([p2_, ...ff_core_List.List_toArray(matchCase_.patterns_)]), _c.condition_, _c.body_)
}))(matchCase_))
return
}}}}
}
{
if(_1._ === 'PList') {
const at_ = _1.at_
const t_ = _1.itemType_
if(_1.items_._ === 'Link') {
if(_1.items_.head_._ === 'Pair') {
const p_ = _1.items_.head_.first_
if(_1.items_.head_.second_) {
if(_1.items_.tail_._ === 'Empty') {
return ff_compiler_JsEmitter.JsEmitter_emitCase(self_, ff_core_Array.Array_toList([argument_, ...ff_core_List.List_toArray(arguments_)]), (((_c) => {
return ff_compiler_Syntax.MatchCase(_c.at_, ff_core_Array.Array_toList([p_, ...ff_core_List.List_toArray(matchCase_.patterns_)]), _c.condition_, _c.body_)
}))(matchCase_))
return
}}}}}
}
{
if(_1._ === 'PList') {
const at_ = _1.at_
const t_ = _1.itemType_
if(_1.items_._ === 'Link') {
if(_1.items_.head_._ === 'Pair') {
const p_ = _1.items_.head_.first_
if(_1.items_.head_.second_) {
return "throw 'Invalid pattern: ... is only allowed for the last element in a list'\n"
return
}}}}
}
throw new Error('Unexhaustive pattern match')
}))(pattern_)
}

export function JsEmitter_emitArgument(self_, argument_) {
return ff_compiler_JsEmitter.JsEmitter_emitTerm(self_, argument_.value_)
}


