import * as ff_compiler_ScalaEmitter from "../../ff/compiler/ScalaEmitter.mjs"

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



export const keywords_ = ff_core_List.List_toSet(ff_core_Array.Array_toList(["abstract", "case", "catch", "class", "def", "do", "else", "extends", "false", "final", "finally", "for", "forSome", "if", "implicit", "import", "lazy", "match", "new", "null", "object", "override", "package", "private", "protected", "return", "sealed", "super", "this", "throw", "trait", "true", "try", "type", "val", "var", "while", "with", "yield", "scala", "java"]))

export function fail_(at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function emitModule_(packagePair_, module_) {
const moduleNamespace_ = ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_replace(module_.file_, "\\", "/")), ((_w1) => {
return (_w1 != 47)
}))), ((_w1) => {
return (_w1 != 46)
}));
const modulePrefix_ = (((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + ff_core_String.String_dropLast(module_.file_, 3)) + ".");
const package_ = ((packagePair_.first_ + ".") + packagePair_.second_);
const parts_ = ff_core_Array.Array_toList([ff_core_Array.Array_toList([("package " + package_)]), ff_core_List.List_map(ff_core_List.List_sortBy(module_.imports_, ((i_) => {
return ((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
})), ((i_) => {
return (((((("import " + i_.package_.first_) + ".") + i_.package_.second_) + ".") + i_.file_) + "_._")
})), ff_core_Array.Array_toList([(("object " + moduleNamespace_) + "_ {")]), ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_any(module_.functions_, ((_w1) => {
return (_w1.signature_.name_ == "main")
})), (() => {
return ff_core_Array.Array_toList([ff_compiler_ScalaEmitter.emitMain_()])
})), (() => {
return ff_core_Array.Array_toList([])
})), ff_core_List.List_map(module_.types_, ((definition_) => {
return ff_compiler_ScalaEmitter.emitTypeDefinition_(definition_)
})), ff_core_List.List_map(module_.lets_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitLetDefinition_(_w1, false)
})), ff_core_List.List_map(module_.functions_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitFunctionDefinition_(_w1, "")
})), ff_core_List.List_map(module_.extends_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitExtendsDefinition_(_w1)
})), ff_core_List.List_map(module_.traits_, ((definition_) => {
return ff_compiler_ScalaEmitter.emitTraitDefinition_(definition_)
})), ff_core_List.List_map(module_.instances_, ((definition_) => {
return ff_compiler_ScalaEmitter.emitInstanceDefinition_(definition_)
})), ff_core_Array.Array_toList(["}"])]);
ff_core_Option.Option_each(ff_core_List.List_find(ff_core_List.List_collect(ff_core_List.List_map(module_.extends_, ((_w1) => {
return _w1.type_
})), (function(_v) { return _v._ === 'ff_compiler_Syntax.TConstructor' ? ff_core_Option.Some(_v) : ff_core_Option.None();})), ((t_) => {
return (!ff_core_List.List_any(module_.types_, ((_w1) => {
return ((modulePrefix_ + _w1.name_) == t_.name_)
})))
})), ((t_) => {
ff_compiler_ScalaEmitter.fail_(t_.at_, ("Type not defined in this file: " + t_.name_));
return (void 0)
}));
return (ff_core_List.List_join(ff_core_List.List_map(parts_, ((_w1) => {
return ff_core_List.List_join(_w1, "\n\n")
})), "\n") + "\n")
}

export function emitMain_() {
return "def main(arguments : scala.Array[String]) : Unit = main_(ff.core.System_.SystemArguments(List_toArray(arguments.toList)))"
}

export function emitTypeMembers_(name_, lets_, functions_) {
const strings_ = ff_core_List.List_addAll(ff_core_List.List_map(lets_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitLetDefinition_(_w1, false)
})), ff_core_List.List_map(functions_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitFunctionDefinition_(_w1, "")
})));
return (((("object " + name_) + " {\n\n") + ff_core_List.List_join(strings_, "\n\n")) + "\n\n}")
}

export function emitTypeDefinition_(definition_) {
const generics_ = ff_compiler_ScalaEmitter.emitTypeParameters_(definition_.generics_);
return ff_core_Option.Option_else(ff_core_Core.if_(((ff_core_Option.Option_isEmpty(definition_.targets_.scala_) && (ff_core_List.List_size(definition_.variants_) == 1)) && (ff_core_List.List_expectFirst(definition_.variants_).name_ == definition_.name_)), (() => {
const fields_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(definition_.commonFields_, ((parameter_) => {
return ff_compiler_ScalaEmitter.emitParameter_(parameter_)
})), ", ")) + ")");
return ((("case class " + definition_.name_) + generics_) + fields_)
})), (() => {
const variants_ = ff_core_List.List_map(definition_.variants_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitVariantDefinition_(definition_, _w1)
}));
const head_ = ff_core_Option.Option_else(ff_core_Option.Option_map(definition_.targets_.scala_, ((code_) => {
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_String.String_startsWith(code_, "#", 0), (() => {
return (ff_core_String.String_dropFirst(code_, 1) + ";\n")
})), (() => {
return ((((("type " + definition_.name_) + generics_) + " = ") + code_) + ";\n")
}))
})), (() => {
const commonFields_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(definition_.commonFields_), (() => {
return ""
})), (() => {
return ((" {\n" + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_map(definition_.commonFields_, ((parameter_) => {
return ff_compiler_ScalaEmitter.emitParameter_(parameter_)
})), ((_w1) => {
return (("    val " + _w1) + "\n")
})), "")) + "}")
}));
return (((("sealed abstract class " + definition_.name_) + generics_) + " extends Product with Serializable") + commonFields_)
}));
return (head_ + ff_core_List.List_join(ff_core_List.List_map(variants_, ((_w1) => {
return ("\n" + _w1)
})), ""))
}))
}

export function emitLetDefinition_(definition_, mutable_ = false) {
const typeAnnotation_ = ff_compiler_ScalaEmitter.emitTypeAnnotation_(definition_.variableType_);
const mutability_ = ff_core_Option.Option_else(ff_core_Core.if_(mutable_, (() => {
return "var"
})), (() => {
return "val"
}));
const valueCode_ = ff_core_Option.Option_else(definition_.targets_.scala_, (() => {
return ff_compiler_ScalaEmitter.emitTerm_(definition_.value_)
}));
return (((((mutability_ + " ") + ff_compiler_ScalaEmitter.escapeKeyword_(definition_.name_)) + typeAnnotation_) + " = ") + valueCode_)
}

export function emitFunctionDefinition_(definition_, suffix_ = "") {
const signature_ = ff_compiler_ScalaEmitter.emitSignature_(definition_.signature_, suffix_);
return ff_core_Option.Option_else(ff_core_Option.Option_map(definition_.targets_.scala_, ((code_) => {
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_String.String_startsWith(code_, "#", 0), (() => {
return ff_core_String.String_dropFirst(code_, 1)
})), (() => {
return (((signature_ + " = {\n") + code_) + "\n}")
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
return false
return

}
throw new Error('Unexhaustive pattern match')
}))) {
const body_ = ff_compiler_ScalaEmitter.emitStatements_(matchCase_.body_);
return (((signature_ + " = {\n") + body_) + "\n}")
return
}}}}
}
{
const tuple_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(definition_.signature_.parameters_, ((_w1) => {
return ff_compiler_ScalaEmitter.escapeKeyword_(_w1.name_)
})), ", ")) + ")");
const cases_ = ff_core_List.List_join(ff_core_List.List_map(definition_.body_.cases_, ((matchCase_) => {
return ff_compiler_ScalaEmitter.emitCase_(matchCase_)
})), "\n");
return (((((signature_ + " = ") + tuple_) + " match {\n") + cases_) + "\n}")
return

}
throw new Error('Unexhaustive pattern match')
}))(definition_.body_)
}))
}

export function emitExtendsDefinition_(definition_) {
const typeName_ = ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_compiler_ScalaEmitter.extractTypeName_(definition_.type_)), ((_w1) => {
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
return ff_compiler_ScalaEmitter.emitFunctionDefinition_(_w1, "")
})), "\n\n")
}

export function emitTraitDefinition_(definition_) {
const generics_ = ff_compiler_ScalaEmitter.emitTypeParameters_(definition_.generics_);
const implicits_ = ff_compiler_ScalaEmitter.emitConstraints_(definition_.constraints_);
const parameters_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(definition_.generatorParameters_), (() => {
return ""
})), (() => {
return (("(" + ff_core_List.List_join(ff_core_List.List_map(definition_.generatorParameters_, ((parameter_) => {
return ff_compiler_ScalaEmitter.emitParameter_(parameter_)
})), ", ")) + ")")
}));
const methods_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(definition_.methods_), (() => {
return ""
})), (() => {
return ((((" {\n\nimport " + definition_.name_) + "._\n\n") + ff_core_List.List_join(ff_core_List.List_map(definition_.methods_, ((signature_) => {
const body_ = ff_core_Option.Option_else(ff_core_Option.Option_orElse(ff_core_Option.Option_map(ff_core_List.List_find(definition_.methodDefaults_, ((_w1) => {
return (_w1.first_ == signature_.name_)
})), ((_1) => {
{
if(_1._ === 'Pair') {
const lambda_ = _1.second_
return ((" {\n" + ff_compiler_ScalaEmitter.emitStatements_(ff_compiler_Syntax.ELambda(lambda_.at_, lambda_))) + "\n}")
return
}
}
throw new Error('Unexhaustive pattern match')
})), (() => {
return ff_core_Option.Option_map(ff_core_List.List_find(definition_.methodGenerators_, ((_w1) => {
return (_w1.first_ == signature_.name_)
})), ((_1) => {
{
if(_1._ === 'Pair') {
const e_ = _1.second_
return " {\n// TODO: Generate\n}"
return
}
}
throw new Error('Unexhaustive pattern match')
}))
})), (() => {
return ""
}));
return (ff_compiler_ScalaEmitter.emitSignature_(signature_, "_m") + body_)
})), "\n\n")) + "\n\n}")
}));
const methodWrappers_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(definition_.methods_), (() => {
return ""
})), (() => {
return ((" \n\n" + ff_core_List.List_join(ff_core_List.List_map(definition_.methods_, ((signature_) => {
const t_ = ff_compiler_Syntax.TConstructor(definition_.at_, definition_.name_, ff_core_List.List_map(definition_.generics_, ((_w1) => {
return ff_compiler_Syntax.TConstructor(definition_.at_, _w1, ff_core_Array.Array_toList([]))
})));
return (((((((ff_compiler_ScalaEmitter.emitSignature_((((_c) => {
return ff_compiler_Syntax.Signature(_c.at_, _c.name_, ff_core_List.List_addAll(definition_.generics_, signature_.generics_), ff_core_Array.Array_toList([ff_compiler_Syntax.Constraint(t_), ...ff_core_List.List_toArray(definition_.constraints_), ...ff_core_List.List_toArray(signature_.constraints_)]), _c.parameters_, _c.returnType_)
}))(signature_), "") + " =\n    scala.Predef.implicitly[") + ff_compiler_ScalaEmitter.emitType_(t_)) + "].") + ff_compiler_ScalaEmitter.escapeKeyword_(signature_.name_)) + "_m(") + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_map(signature_.parameters_, ((_w1) => {
return _w1.name_
})), ((word_) => {
return ff_compiler_ScalaEmitter.escapeKeyword_(word_)
})), ", ")) + ")")
})), "\n\n")) + "\n\n")
}));
return ((((((((((("abstract class " + definition_.name_) + generics_) + parameters_) + implicits_) + methods_) + "\n") + "object ") + definition_.name_) + " {") + methodWrappers_) + "}")
}

export function emitInstanceDefinition_(definition_) {
const signature_ = ff_compiler_ScalaEmitter.emitSignature_(ff_compiler_Syntax.Signature(definition_.at_, ((ff_compiler_ScalaEmitter.extractTypeName_(definition_.traitType_) + "_") + ff_core_Int.Int_abs(ff_core_Core.magicHashCode_(definition_))), definition_.generics_, definition_.constraints_, ff_core_Array.Array_toList([]), definition_.traitType_), "");
const methods_ = ((((" {\n\nimport " + ff_compiler_ScalaEmitter.extractTypeName_(definition_.traitType_)) + "._\n\n") + ff_core_List.List_join(ff_core_List.List_map(definition_.methods_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitFunctionDefinition_(_w1, "_m")
})), "\n\n")) + "\n\n}");
const value_ = (("new " + ff_compiler_ScalaEmitter.emitType_(definition_.traitType_)) + methods_);
return ((("implicit " + signature_) + " =\n    ") + value_)
}

export function emitVariantDefinition_(typeDefinition_, definition_) {
const generics_ = ff_compiler_ScalaEmitter.emitTypeParameters_(typeDefinition_.generics_);
const allFields_ = ff_core_List.List_addAll(typeDefinition_.commonFields_, definition_.fields_);
const fields_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(allFields_, ((parameter_) => {
return ff_compiler_ScalaEmitter.emitParameter_(parameter_)
})), ", ")) + ")");
return ff_core_Option.Option_else(ff_core_Option.Option_map(definition_.targets_.scala_, ((originalCode_) => {
const code_ = ff_core_Option.Option_else(ff_core_Core.if_((originalCode_ == "scala.Unit"), (() => {
return "{}"
})), (() => {
return originalCode_
}));
return ((((((((((((((((("object " + definition_.name_) + " {\n") + "def apply") + generics_) + fields_) + " = ") + code_) + ff_core_Option.Option_else(ff_core_Core.if_((fields_ != "()"), (() => {
return fields_
})), (() => {
return ""
}))) + ";\n") + "def unapply") + generics_) + "(value : ") + typeDefinition_.name_) + generics_) + ") = ") + ff_core_Option.Option_else(ff_core_Core.if_((fields_ != "()"), (() => {
return ((((("scala.Some(value).collectFirst { case " + code_) + fields_) + " => ") + fields_) + " };\n")
})), (() => {
return (("value == " + code_) + ";\n")
}))) + "}")
})), (() => {
return (((((("case class " + definition_.name_) + generics_) + fields_) + " extends ") + typeDefinition_.name_) + generics_)
}))
}

export function emitSignature_(signature_, suffix_ = "") {
const generics_ = ff_compiler_ScalaEmitter.emitTypeParameters_(signature_.generics_);
const parameters_ = (("(" + ff_core_List.List_join(ff_core_List.List_map(signature_.parameters_, ((parameter_) => {
return ff_compiler_ScalaEmitter.emitParameter_(parameter_)
})), ", ")) + ")");
const implicits_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(signature_.constraints_), (() => {
return ""
})), (() => {
return (("(implicit " + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_pairs(signature_.constraints_), ((_1) => {
{
if(_1._ === 'Pair') {
const i_ = _1.first_
const c_ = _1.second_
return ((("i_" + i_) + " : ") + ff_compiler_ScalaEmitter.emitType_(c_.representation_))
return
}
}
throw new Error('Unexhaustive pattern match')
})), ", ")) + ")")
}));
const returnType_ = ff_compiler_ScalaEmitter.emitTypeAnnotation_(signature_.returnType_);
return (((((("def " + ff_compiler_ScalaEmitter.escapeKeyword_(signature_.name_)) + suffix_) + generics_) + parameters_) + implicits_) + returnType_)
}

export function emitParameter_(parameter_) {
const mutability_ = ff_core_Option.Option_else(ff_core_Core.if_(parameter_.mutable_, (() => {
return "var "
})), (() => {
return ""
}));
const defaultValue_ = ff_core_Option.Option_else(ff_core_Option.Option_map(parameter_.default_, ((_w1) => {
return (" = " + ff_compiler_ScalaEmitter.emitTerm_(_w1))
})), (() => {
return ""
}));
return (((mutability_ + ff_compiler_ScalaEmitter.escapeKeyword_(parameter_.name_)) + ff_compiler_ScalaEmitter.emitTypeAnnotation_(parameter_.valueType_)) + defaultValue_)
}

export function emitConstraints_(constraints_) {
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(constraints_), (() => {
return ""
})), (() => {
const pairs_ = ff_core_List.List_pairs(ff_core_List.List_map(ff_core_List.List_map(constraints_, ((_w1) => {
return _w1.representation_
})), ((type_) => {
return ff_compiler_ScalaEmitter.emitType_(type_)
})));
return (("(implicit " + ff_core_List.List_join(ff_core_List.List_map(pairs_, ((_1) => {
{
if(_1._ === 'Pair') {
const k_ = _1.first_
const v_ = _1.second_
return ((("i_" + k_) + " : ") + v_)
return
}
}
throw new Error('Unexhaustive pattern match')
})), ", ")) + ")")
}))
}

export function emitTypeParameters_(generics_) {
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(generics_), (() => {
return ""
})), (() => {
return (("[" + ff_core_List.List_join(generics_, ", ")) + "]")
}))
}

export function emitTypeAnnotation_(t_){
const t_a = t_
{
if(t_a._ === 'TVariable') {
return ""
return
}
}
{
if(t_a._ === 'TConstructor') {
return (" : " + ff_compiler_ScalaEmitter.emitType_(t_))
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function emitType_(type_){
const type_a = type_
{
if(type_a._ === 'TVariable') {
const index_ = type_a.index_
return ("$" + index_)
return
}
}
{
if(type_a._ === 'TConstructor') {
const t_ = type_a
return ff_core_Option.Option_else(ff_core_Option.Option_elseIf(ff_core_Core.if_(ff_core_String.String_startsWith(t_.name_, "Function$", 0), (() => {
return ff_compiler_ScalaEmitter.emitType_((((_c) => {
return ff_compiler_Syntax.TConstructor(_c.at_, ff_core_String.String_replace(t_.name_, "$", ""), _c.generics_)
}))(t_))
})), (() => {
return ff_core_String.String_startsWith(t_.name_, "Record$", 0)
}), (() => {
return (("{" + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_zip(ff_core_Array.Array_toList(ff_core_Array.Array_dropFirst(ff_core_String.String_split(t_.name_, 36), 1)), t_.generics_), ((_1) => {
{
if(_1._ === 'Pair') {
const field_ = _1.first_
const fieldType_ = _1.second_
return ((("val " + ff_compiler_ScalaEmitter.escapeKeyword_(field_)) + " : ") + ff_compiler_ScalaEmitter.emitType_(fieldType_))
return
}
}
throw new Error('Unexhaustive pattern match')
})), "; ")) + "}")
})), (() => {
const generics_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(t_.generics_), (() => {
return ""
})), (() => {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(t_.generics_, ((type_) => {
return ff_compiler_ScalaEmitter.emitType_(type_)
})), ", ")) + "]")
}));
return (ff_compiler_ScalaEmitter.escapeResolved_(t_.name_) + generics_)
}))
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function emitStatements_(term_){
const term_a = term_
{
if(term_a._ === 'EFunctions') {
const at_ = term_a.at_
const functions_ = term_a.functions_
const body_ = term_a.body_
const functionStrings_ = ff_core_List.List_map(functions_, ((f_) => {
return ff_compiler_ScalaEmitter.emitFunctionDefinition_(ff_compiler_Syntax.DFunction(at_, f_.signature_, f_.body_, ff_compiler_Syntax.Targets(ff_core_Option.None(), ff_core_Option.None())), "")
}));
return ((ff_core_List.List_join(functionStrings_, "\n") + "\n") + ff_compiler_ScalaEmitter.emitStatements_(body_))
return
}
}
{
if(term_a._ === 'ELet') {
const at_ = term_a.at_
const mutable_ = term_a.mutable_
const name_ = term_a.name_
const valueType_ = term_a.valueType_
const value_ = term_a.value_
const body_ = term_a.body_
return ((ff_compiler_ScalaEmitter.emitLetDefinition_(ff_compiler_Syntax.DLet(at_, name_, valueType_, value_, ff_compiler_Syntax.Targets(ff_core_Option.None(), ff_core_Option.None())), mutable_) + ";\n") + ff_compiler_ScalaEmitter.emitStatements_(body_))
return
}
}
{
if(term_a._ === 'ESequential') {
const at_ = term_a.at_
const before_ = term_a.before_
const after_ = term_a.after_
return ((ff_compiler_ScalaEmitter.emitStatements_(before_) + ";\n") + ff_compiler_ScalaEmitter.emitStatements_(after_))
return
}
}
{
if(term_a._ === 'EAssign') {
const at_ = term_a.at_
const operator_ = term_a.operator_
const name_ = term_a.variable_
const value_ = term_a.value_
return ((((ff_compiler_ScalaEmitter.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff_compiler_ScalaEmitter.emitTerm_(value_))
return
}
}
{
if(term_a._ === 'EAssignField') {
const at_ = term_a.at_
const operator_ = term_a.operator_
const record_ = term_a.record_
const field_ = term_a.field_
const value_ = term_a.value_
return ((((((ff_compiler_ScalaEmitter.emitTerm_(record_) + ".") + ff_compiler_ScalaEmitter.escapeKeyword_(field_)) + " ") + operator_) + "= ") + ff_compiler_ScalaEmitter.emitTerm_(value_))
return
}
}
{
return ff_compiler_ScalaEmitter.emitTerm_(term_)
return

}
throw new Error('Unexhaustive pattern match')
}

export function emitTerm_(term_){
const term_a = term_
{
if(term_a._ === 'EString') {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
if(term_a._ === 'EChar') {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
if(term_a._ === 'EInt') {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
if(term_a._ === 'EFloat') {
const at_ = term_a.at_
const value_ = term_a.value_
return value_
return
}
}
{
if(term_a._ === 'EVariable') {
const at_ = term_a.at_
const name_ = term_a.name_
return ff_compiler_ScalaEmitter.escapeResolved_(name_)
return
}
}
{
if(term_a._ === 'EList') {
const at_ = term_a.at_
const items_ = term_a.items_
if(ff_core_List.List_all(items_, ((_w1) => {
return (!_w1.second_)
}))) {
return (("List(" + ff_core_List.List_join(ff_core_List.List_map(items_, ((_w1) => {
return ff_compiler_ScalaEmitter.emitTerm_(_w1.first_)
})), ", ")) + ")")
return
}}
}
{
if(term_a._ === 'EList') {
const at_ = term_a.at_
const items_ = term_a.items_
return (("(List(" + ff_core_List.List_join(ff_core_List.List_map(items_, ((_1) => {
{
if(_1._ === 'Pair') {
const item_ = _1.first_
if(!_1.second_) {
return (("List(" + ff_compiler_ScalaEmitter.emitTerm_(item_)) + ")")
return
}}
}
{
if(_1._ === 'Pair') {
const item_ = _1.first_
if(_1.second_) {
return ff_compiler_ScalaEmitter.emitTerm_(item_)
return
}}
}
throw new Error('Unexhaustive pattern match')
})), ", ")) + ").flatten)")
return
}
}
{
if(term_a._ === 'EVariant') {
const at_ = term_a.at_
const name_ = term_a.name_
const typeArguments_ = term_a.typeArguments_
const arguments_ = term_a.arguments_
const generics_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(typeArguments_), (() => {
return ""
})), (() => {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(typeArguments_, ((type_) => {
return ff_compiler_ScalaEmitter.emitType_(type_)
})), ", ")) + "]")
}));
return ((((ff_compiler_ScalaEmitter.escapeResolved_(name_) + generics_) + "(") + ff_core_List.List_join(ff_core_List.List_map(ff_core_List.List_flatten(ff_core_Option.Option_toList(arguments_)), ((argument_) => {
return ff_compiler_ScalaEmitter.emitArgument_(argument_)
})), ", ")) + ")")
return
}
}
{
if(term_a._ === 'EVariantIs') {
const at_ = term_a.at_
const name_ = term_a.name_
const typeArguments_ = term_a.typeArguments_
const generics_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(typeArguments_), (() => {
return ""
})), (() => {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(typeArguments_, ((type_) => {
return ff_compiler_ScalaEmitter.emitType_(type_)
})), ", ")) + "]")
}));
return ((("({ case _w : " + ff_compiler_ScalaEmitter.escapeResolved_(name_)) + generics_) + " => Some(_w); case _ => None() })")
return
}
}
{
if(term_a._ === 'ECopy') {
const at_ = term_a.at_
const name_ = term_a.name_
const record_ = term_a.record_
const fields_ = term_a.arguments_
const fieldCode_ = ff_core_List.List_join(ff_core_List.List_map(fields_, ((f_) => {
return ((ff_compiler_ScalaEmitter.escapeKeyword_(f_.name_) + " = ") + ff_compiler_ScalaEmitter.emitTerm_(f_.value_))
})), ", ");
return (((ff_compiler_ScalaEmitter.emitTerm_(record_) + ".copy(") + fieldCode_) + ")")
return
}
}
{
if(term_a._ === 'EField') {
const at_ = term_a.at_
const record_ = term_a.record_
const field_ = term_a.field_
return ((ff_compiler_ScalaEmitter.emitTerm_(record_) + ".") + ff_compiler_ScalaEmitter.escapeKeyword_(field_))
return
}
}
{
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
return ff_compiler_ScalaEmitter.escapeKeyword_(word_)
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
return (((("{(" + parameters_) + ") =>\n") + ff_compiler_ScalaEmitter.emitStatements_(body_)) + "\n}")
return
}}}}}}}
}
{
if(term_a._ === 'ELambda') {
const at_ = term_a.at_
if(term_a.lambda_._ === 'Lambda') {
const cases_ = term_a.lambda_.cases_
const casesString_ = ff_core_List.List_join(ff_core_List.List_map(cases_, ((matchCase_) => {
return ff_compiler_ScalaEmitter.emitCase_(matchCase_)
})), "\n");
return (("{\n" + casesString_) + "\n}")
return
}}
}
{
if(term_a._ === 'EPipe') {
const at_ = term_a.at_
const value_ = term_a.value_
const function_ = term_a.function_
return (((("pipe_dot(" + ff_compiler_ScalaEmitter.emitTerm_(value_)) + ")(") + ff_compiler_ScalaEmitter.emitTerm_(function_)) + ")")
return
}
}
{
if(term_a._ === 'ECall') {
const at_ = term_a.at_
if(term_a.function_._ === 'EVariable') {
const operator_ = term_a.function_.name_
if(term_a.typeArguments_._ === 'Empty') {
if(term_a.arguments_._ === 'Link') {
const value_ = term_a.arguments_.head_
if(term_a.arguments_.tail_._ === 'Empty') {
if((!ff_core_Char.Char_isAsciiLetter(ff_core_String.String_expectFirst(operator_)))) {
return ((("(" + operator_) + ff_compiler_ScalaEmitter.emitArgument_(value_)) + ")")
return
}}}}}}
}
{
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
return (((((("(" + ff_compiler_ScalaEmitter.emitArgument_(left_)) + " ") + operator_) + " ") + ff_compiler_ScalaEmitter.emitArgument_(right_)) + ")")
return
}}}}}}}
}
{
if(term_a._ === 'ECall') {
const at_ = term_a.at_
const function_ = term_a.function_
if(term_a.function_._ === 'EVariable') {
const name_ = term_a.function_.name_
const arguments_ = term_a.arguments_
if((((name_ == "ff:core/Option.Option_else") || (name_ == "ff:core/Option.Option_elseIf")) || (name_ == "ff:core/Option.Option_orElse"))) {
return (((ff_compiler_ScalaEmitter.emitTerm_(function_) + "(") + ff_core_List.List_join(ff_core_List.List_map(arguments_, ((argument_) => {
return ff_compiler_ScalaEmitter.emitArgument_(argument_)
})), ", ")) + ")")
return
}}}
}
{
if(term_a._ === 'ECall') {
const at_ = term_a.at_
const function_ = term_a.function_
const typeArguments_ = term_a.typeArguments_
const arguments_ = term_a.arguments_
const generics_ = ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(typeArguments_), (() => {
return ""
})), (() => {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(typeArguments_, ((type_) => {
return ff_compiler_ScalaEmitter.emitType_(type_)
})), ", ")) + "]")
}));
return ((((ff_compiler_ScalaEmitter.emitTerm_(function_) + generics_) + "(") + ff_core_List.List_join(ff_core_List.List_map(arguments_, ((argument_) => {
return ff_compiler_ScalaEmitter.emitArgument_(argument_)
})), ", ")) + ")")
return
}
}
{
if(term_a._ === 'ERecord') {
const at_ = term_a.at_
const fields_ = term_a.fields_
return ff_core_Option.Option_else(ff_core_Core.if_(ff_core_List.List_isEmpty(fields_), (() => {
return "{}"
})), (() => {
const list_ = ff_core_List.List_map(fields_, ((f_) => {
return ((("val " + ff_compiler_ScalaEmitter.escapeKeyword_(f_.name_)) + " = ") + ff_compiler_ScalaEmitter.emitTerm_(f_.value_))
}));
return (("new {\n" + ff_core_List.List_join(list_, ";\n")) + ";\n}")
}))
return
}
}
{
if(term_a._ === 'EWildcard') {
const at_ = term_a.at_
const index_ = term_a.index_
ff_core_Core.if_((index_ == 0), (() => {
return ff_compiler_ScalaEmitter.fail_(at_, "Unbound wildcard")
}));
return ("_w" + index_)
return
}
}
{
return (("{\n" + ff_compiler_ScalaEmitter.emitStatements_(term_)) + "\n}")
return

}
throw new Error('Unexhaustive pattern match')
}

export function emitArgument_(argument_) {
return (ff_core_Option.Option_else(ff_core_Option.Option_map(argument_.name_, ((name_) => {
return (ff_compiler_ScalaEmitter.escapeKeyword_(name_) + " = ")
})), (() => {
return ""
})) + ff_compiler_ScalaEmitter.emitTerm_(argument_.value_))
}

export function emitCase_(matchCase_) {
const pair_ = ff_core_List.List_unzip(ff_core_List.List_map(matchCase_.patterns_, ((pattern_) => {
return ff_compiler_ScalaEmitter.emitPattern_(pattern_)
})));
const patterns_ = ff_core_List.List_join(pair_.first_, ", ");
const condition_ = ff_core_Option.Option_else(ff_core_Option.Option_map(matchCase_.condition_, ((_w1) => {
return (("if " + ff_compiler_ScalaEmitter.emitTerm_(_w1)) + " ")
})), (() => {
return ""
}));
const toLists_ = ff_core_List.List_join(ff_core_List.List_flatten(pair_.second_), "");
return (((((("case (" + patterns_) + ") ") + condition_) + "=>\n") + toLists_) + ff_compiler_ScalaEmitter.emitStatements_(matchCase_.body_))
}

export function emitPattern_(pattern_){
const pattern_a = pattern_
{
if(pattern_a._ === 'PVariable') {
const at_ = pattern_a.at_
const name_ = pattern_a.name_
return ff_core_Pair.Pair(ff_core_Option.Option_else(ff_core_Option.Option_map(name_, ((word_) => {
return ff_compiler_ScalaEmitter.escapeKeyword_(word_)
})), (() => {
return "_"
})), ff_core_Array.Array_toList([]))
return
}
}
{
if(pattern_a._ === 'PVariant') {
const at_ = pattern_a.at_
const name_ = pattern_a.name_
const patterns_ = pattern_a.patterns_
const pairs_ = ff_core_List.List_map(patterns_, ((pattern_) => {
return ff_compiler_ScalaEmitter.emitPattern_(pattern_)
}));
return ff_core_Pair.Pair((((ff_compiler_ScalaEmitter.escapeResolved_(name_) + "(") + ff_core_List.List_join(ff_core_List.List_map(pairs_, ((_w1) => {
return _w1.first_
})), ", ")) + ")"), ff_core_List.List_flatMap(pairs_, ((_w1) => {
return _w1.second_
})))
return
}
}
{
if(pattern_a._ === 'PVariantAs') {
const at_ = pattern_a.at_
const name_ = pattern_a.name_
const variable_ = pattern_a.variable_
return ff_core_Pair.Pair(((ff_core_Option.Option_else(ff_core_Option.Option_map(variable_, ((word_) => {
return ff_compiler_ScalaEmitter.escapeKeyword_(word_)
})), (() => {
return "_"
})) + " : ") + ff_compiler_ScalaEmitter.escapeResolved_(name_)), ff_core_Array.Array_toList([]))
return
}
}
{
if(pattern_a._ === 'PAlias') {
const at_ = pattern_a.at_
const p_ = pattern_a.pattern_
const variable_ = pattern_a.variable_
const pair_ = ff_compiler_ScalaEmitter.emitPattern_(p_);
return ff_core_Pair.Pair((((ff_compiler_ScalaEmitter.escapeKeyword_(variable_) + " @ (") + pair_.first_) + ")"), pair_.second_)
return
}
}
{
if(pattern_a._ === 'PList') {
const at_ = pattern_a.at_
const items_ = pattern_a.items_
const pair_ = ff_core_List.List_unzip(ff_core_List.List_map(items_, ((_1) => {
{
if(_1._ === 'Pair') {
const item_ = _1.first_
if(!_1.second_) {
return ff_compiler_ScalaEmitter.emitPattern_(item_)
return
}}
}
{
if(_1._ === 'Pair') {
const item_ = _1.first_
if(_1.second_) {
const pair_ = ff_compiler_ScalaEmitter.emitPattern_(item_);
return ff_core_Pair.Pair((pair_.first_ + "_seq @ _*"), ff_core_Array.Array_toList([(((("val " + pair_.first_) + " = ") + pair_.first_) + "_seq.toList;\n"), ...ff_core_List.List_toArray(pair_.second_)]))
return
}}
}
throw new Error('Unexhaustive pattern match')
})));
return ff_core_Pair.Pair((("List(" + ff_core_List.List_join(pair_.first_, ", ")) + ")"), ff_core_List.List_flatten(pair_.second_))
return
}
}
throw new Error('Unexhaustive pattern match')
}

export function extractTypeName_(type_){
const type_a = type_
{
if(type_a._ === 'TVariable') {
const at_ = type_a.at_
const index_ = type_a.index_
return ff_compiler_ScalaEmitter.fail_(at_, ("Unexpected type variable: $" + index_))
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
return ff_compiler_ScalaEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_))
})), (() => {
return ((ff_core_List.List_join(initialParts_, ".") + "_.") + ff_compiler_ScalaEmitter.escapeKeyword_(ff_core_List.List_expectLast(parts_)))
}))
}

export function escapeKeyword_(word_) {
return ff_core_Option.Option_else(ff_core_Core.if_((ff_core_Set.Set_contains(ff_compiler_ScalaEmitter.keywords_, word_) || ff_core_Char.Char_isAsciiLower(ff_core_String.String_expectFirst(word_))), (() => {
return (word_ + "_")
})), (() => {
return word_
}))
}




