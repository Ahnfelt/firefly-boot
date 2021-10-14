import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

import * as ff_compiler_Wildcards from "../../ff/compiler/Wildcards.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Parser
export function Parser(packagePair_, file_, tokens_, end_, offset_, nextTypeVariableIndex_) {
return {packagePair_, file_, tokens_, end_, offset_, nextTypeVariableIndex_};
}

// type Poly
export function Poly(generics_, constraints_) {
return {generics_, constraints_};
}

export const binaryOperators_ = ff_core_List.List_toArray(ff_core_List.Link(ff_core_List.Link("||", ff_core_List.Empty()), ff_core_List.Link(ff_core_List.Link("&&", ff_core_List.Empty()), ff_core_List.Link(ff_core_List.Link("!=", ff_core_List.Link("==", ff_core_List.Empty())), ff_core_List.Link(ff_core_List.Link("<=", ff_core_List.Link(">=", ff_core_List.Link("<", ff_core_List.Link(">", ff_core_List.Empty())))), ff_core_List.Link(ff_core_List.Link("++", ff_core_List.Empty()), ff_core_List.Link(ff_core_List.Link("+", ff_core_List.Link("-", ff_core_List.Empty())), ff_core_List.Link(ff_core_List.Link("*", ff_core_List.Link("/", ff_core_List.Link("%", ff_core_List.Empty()))), ff_core_List.Link(ff_core_List.Link("^", ff_core_List.Empty()), ff_core_List.Empty())))))))))

export function make_(packagePair_, file_, tokens_) {
return ff_compiler_Parser.Parser(packagePair_, file_, tokens_, ff_core_Array.Array_expectLast(tokens_), 0, 1)
}

export function Parser_fail(self_, at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Parser_current(self_) {
if((self_.offset_ < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_expect(self_.tokens_, self_.offset_)
} else {
return self_.end_
}
}

export function Parser_ahead(self_) {
if(((self_.offset_ + 1) < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_expect(self_.tokens_, (self_.offset_ + 1))
} else {
return self_.end_
}
}

export function Parser_aheadAhead(self_) {
if(((self_.offset_ + 2) < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_expect(self_.tokens_, (self_.offset_ + 2))
} else {
return self_.end_
}
}

export function Parser_skip(self_, kind_) {
const c_ = ff_compiler_Parser.Parser_current(self_)
if((c_.kind_ != kind_)) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(c_), ((("Expected " + ff_core_Core.magicShow_(kind_)) + ", got ") + ff_compiler_Token.Token_raw(c_)))
}
self_.offset_ += 1
return c_
}

export function Parser_rawSkip(self_, kind_, value_) {
const c_ = ff_compiler_Parser.Parser_current(self_)
if((c_.kind_ != kind_)) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(c_), ((((("Expected " + ff_core_Core.magicShow_(kind_)) + " ") + value_) + ", got ") + ff_compiler_Token.Token_raw(c_)))
}
if((!ff_compiler_Token.Token_rawIs(c_, value_))) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(c_), ((("Expected " + value_) + " got ") + ff_compiler_Token.Token_raw(c_)))
}
self_.offset_ += 1
return c_
}

export function Parser_freshTypeVariable(self_, at_) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextTypeVariableIndex_)
self_.nextTypeVariableIndex_ += 2
return result_
}

export function Parser_currentIsSeparator(self_, kind_) {
return (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), kind_) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSeparator()))
}

export function Parser_skipSeparator(self_, kind_) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSeparator())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LSeparator())
} else {
return ff_compiler_Parser.Parser_skip(self_, kind_)
}
}

export function Parser_parseModule(self_) {
const dependencies_ = ff_core_ArrayBuilder.empty_()
const imports_ = ff_core_ArrayBuilder.empty_()
const types_ = ff_core_ArrayBuilder.empty_()
const traits_ = ff_core_ArrayBuilder.empty_()
const instances_ = ff_core_ArrayBuilder.empty_()
const extends_ = ff_core_ArrayBuilder.empty_()
const lets_ = ff_core_ArrayBuilder.empty_()
const functions_ = ff_core_ArrayBuilder.empty_()
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LColon())))) {
ff_core_ArrayBuilder.ArrayBuilder_add(lets_, ff_compiler_Parser.Parser_parseLetDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LBracketLeft()))) {
ff_core_ArrayBuilder.ArrayBuilder_add(functions_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "extend"))) {
ff_core_ArrayBuilder.ArrayBuilder_add(extends_, ff_compiler_Parser.Parser_parseExtendDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trait"))) {
ff_core_ArrayBuilder.ArrayBuilder_add(traits_, ff_compiler_Parser.Parser_parseTraitDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "instance"))) {
ff_core_ArrayBuilder.ArrayBuilder_add(instances_, ff_compiler_Parser.Parser_parseInstanceDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "type") || ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype")))) {
ff_core_ArrayBuilder.ArrayBuilder_add(types_, ff_compiler_Parser.Parser_parseTypeDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "import"))) {
ff_core_ArrayBuilder.ArrayBuilder_add(imports_, ff_compiler_Parser.Parser_parseImportDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "safe") || ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "unsafe")) || ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trust")))) {
ff_core_ArrayBuilder.ArrayBuilder_add(dependencies_, ff_compiler_Parser.Parser_parseDependencyDefinition(self_))
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LEnd())
}
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
}
return ff_compiler_Syntax.Module(self_.packagePair_, self_.file_, ff_core_ArrayBuilder.ArrayBuilder_toList(dependencies_), ff_core_ArrayBuilder.ArrayBuilder_toList(imports_), ff_core_ArrayBuilder.ArrayBuilder_toList(types_), ff_core_ArrayBuilder.ArrayBuilder_toList(traits_), ff_core_ArrayBuilder.ArrayBuilder_toList(instances_), ff_core_ArrayBuilder.ArrayBuilder_toList(extends_), ff_core_ArrayBuilder.ArrayBuilder_toList(lets_), ff_core_ArrayBuilder.ArrayBuilder_toList(functions_))
}

export function Parser_parseLetDefinition(self_) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
const variableType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
return ff_compiler_Parser.Parser_parseType(self_)
})()
: ff_compiler_Parser.Parser_freshTypeVariable(self_, ff_compiler_Token.Token_at(nameToken_)))
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
const value_ = ff_compiler_Parser.Parser_parseTerm(self_)
const targets_ = ff_compiler_Parser.Parser_parseTargets(self_)
return ff_compiler_Syntax.DLet(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), variableType_, value_, targets_)
}

export function Parser_parseFunctionDefinition(self_) {
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_)
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), false, false)
const targets_ = ff_compiler_Parser.Parser_parseTargets(self_)
return ff_compiler_Syntax.DFunction(signature_.at_, signature_, body_, targets_)
}

export function Parser_parseTargets(self_) {
function parseTargetOption_(target_) {
if(((ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), target_))) {
return ff_core_Option.Some((function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LSeparator())
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
const result_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString()))
const dropCount_ = (ff_core_String.String_startsWith(result_, "\"\"\"", 0)
? 3
: 1)
return ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(result_, dropCount_), dropCount_), "\\\"", "\""), "\\r", "\r"), "\\n", "\n"), "\\t", "\t"), "\\\\", "\\")
})())
} else return ff_core_Option.None()
}
const javaScript_ = parseTargetOption_("javascript")
return ff_compiler_Syntax.Targets(javaScript_)
}

export function Parser_parseSignature(self_) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty()))
const parameters_ = ff_compiler_Parser.Parser_parseFunctionParameters(self_, false)
const returnType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
return ff_compiler_Parser.Parser_parseType(self_)
})()
: ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "ff:core/Unit.Unit", ff_core_List.Empty()))
return ff_compiler_Syntax.Signature(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, parameters_, returnType_)
}

export function Parser_parseExtendDefinition(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "extend")
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty()))
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
const type_ = ff_compiler_Parser.Parser_parseType(self_)
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
const methods_ = ff_core_ArrayBuilder.empty_()
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_ArrayBuilder.ArrayBuilder_add(methods_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
return ff_compiler_Syntax.DExtend(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, type_, ff_core_ArrayBuilder.ArrayBuilder_toList(methods_))
}

export function Parser_parseTraitDefinition(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "trait")
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_))
const generatorParameters_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false))
const methodGenerators_ = ff_core_ArrayBuilder.empty_()
const methodDefaults_ = ff_core_ArrayBuilder.empty_()
const methodSignatures_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? ff_core_List.Empty()
: (function() {
const signatures_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_)
ff_core_ArrayBuilder.ArrayBuilder_add(signatures_, signature_)
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const generator_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), "generate"))
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), true, false)
if(generator_) {
ff_core_ArrayBuilder.ArrayBuilder_add(methodGenerators_, ff_core_Pair.Pair(signature_.name_, body_))
} else {
ff_core_ArrayBuilder.ArrayBuilder_add(methodDefaults_, ff_core_Pair.Pair(signature_.name_, body_))
}
}
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
return ff_core_ArrayBuilder.ArrayBuilder_toList(signatures_)
})())
return ff_compiler_Syntax.DTrait(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, generatorParameters_, methodSignatures_, ff_core_ArrayBuilder.ArrayBuilder_toList(methodDefaults_), ff_core_ArrayBuilder.ArrayBuilder_toList(methodGenerators_))
}

export function Parser_parseInstanceDefinition(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "instance")
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const typeArguments_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[")
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_))
ff_core_ArrayBuilder.ArrayBuilder_add(typeArguments_, ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.List_map(poly_.generics_, ((_w1) => {
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), _w1, ff_core_List.Empty())
}))))
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LComma())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
ff_core_ArrayBuilder.ArrayBuilder_add(typeArguments_, ff_compiler_Parser.Parser_parseType(self_))
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
const generatorArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionArguments(self_))
const methods_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? ff_core_List.Empty()
: (function() {
const definitions_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_ArrayBuilder.ArrayBuilder_add(definitions_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
return ff_core_ArrayBuilder.ArrayBuilder_toList(definitions_)
})())
const traitType_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), ff_core_ArrayBuilder.ArrayBuilder_toList(typeArguments_))
return ff_compiler_Syntax.DInstance(ff_compiler_Token.Token_at(nameToken_), poly_.generics_, poly_.constraints_, traitType_, generatorArguments_, methods_)
}

export function Parser_parseTypeDefinition(self_) {
const newtype_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype")
if(newtype_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "newtype")
} else {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "type")
}
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_))
const commonFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true))
const variants_ = ((newtype_ || (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? ff_core_List.Link(ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), ff_core_List.Empty(), ff_compiler_Syntax.Targets(ff_core_Option.None())), ff_core_List.Empty())
: (function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
const variantsBuilder_ = ff_core_ArrayBuilder.empty_()
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const variantNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const variantFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true))
const targets_ = ff_compiler_Parser.Parser_parseTargets(self_)
ff_core_ArrayBuilder.ArrayBuilder_add(variantsBuilder_, ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_raw(variantNameToken_), variantFields_, targets_))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
return ff_core_ArrayBuilder.ArrayBuilder_toList(variantsBuilder_)
})())
const targets_ = ff_compiler_Parser.Parser_parseTargets(self_)
if((newtype_ && (ff_core_List.List_size(commonFields_) != 1))) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(nameToken_), "Newtypes must have exactly one field")
}
if((newtype_ && ff_core_List.List_expect(commonFields_, 0).mutable_)) {
ff_compiler_Parser.Parser_fail(self_, ff_core_List.List_expect(commonFields_, 0).at_, "Newtypes can't have mutable fields")
}
return ff_compiler_Syntax.DType(ff_compiler_Token.Token_at(nameToken_), newtype_, ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, commonFields_, variants_, targets_)
}

export function Parser_parseImportDefinition(self_) {
const importToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "import")
const path_ = ff_core_ArrayBuilder.empty_()
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
ff_core_ArrayBuilder.ArrayBuilder_add(path_, ff_compiler_Parser.Parser_parseDashedName(self_))
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot())
}
const file_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper()))
const alias_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "as")
? (function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "as")
return ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper()))
})()
: file_)
const package_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "from")
? (function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "from")
const userName_ = ff_compiler_Parser.Parser_parseDashedName(self_)
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
const packageName_ = ff_compiler_Parser.Parser_parseDashedName(self_)
return ff_core_Pair.Pair(userName_, packageName_)
})()
: self_.packagePair_)
return ff_compiler_Syntax.DImport(ff_compiler_Token.Token_at(importToken_), alias_, package_, ff_core_ArrayBuilder.ArrayBuilder_toList(path_), file_)
}

export function Parser_parseDependencyDefinition(self_) {
const safety_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "safe")
? ff_compiler_Syntax.Safe()
: (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "unsafe")
? ff_compiler_Syntax.Unsafe()
: ff_compiler_Syntax.Trust()))
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()))
const user_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()))
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
const name_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()))
const goodVersions_ = ff_core_ArrayBuilder.empty_()
const badVersions_ = ff_core_ArrayBuilder.empty_()
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketLeft())
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const bad_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "!")
if(bad_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator())
}
const version_ = ff_compiler_Parser.Parser_parseVersion(self_)
if(bad_) {
ff_core_ArrayBuilder.ArrayBuilder_add(badVersions_, version_)
} else {
ff_core_ArrayBuilder.ArrayBuilder_add(goodVersions_, version_)
}
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketRight())
}
return ff_compiler_Syntax.DDependency(at_, ff_core_Pair.Pair(user_, name_), safety_, ff_core_ArrayBuilder.ArrayBuilder_toList(goodVersions_), ff_core_ArrayBuilder.ArrayBuilder_toList(badVersions_))
}

export function Parser_parseVersion(self_) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LFloat())) {
const majorMinor_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LFloat())
const parts_ = ff_core_String.String_split(ff_compiler_Token.Token_raw(majorMinor_), 46)
const patch_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot())
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot())
return ff_core_String.String_expectInt(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt())))
})()
: 0)
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(majorMinor_), ff_core_String.String_expectInt(ff_core_Array.Array_expect(parts_, 0)), ff_core_String.String_expectInt(ff_core_Array.Array_expect(parts_, 1)), patch_)
} else {
const major_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt())
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(major_), ff_core_String.String_expectInt(ff_compiler_Token.Token_raw(major_)), 0, 0)
}
}

export function Parser_parseDashedName(self_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_))
function readPart_() {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())) {
const prefix_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt()))
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
return (prefix_ + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())))
} else {
return prefix_
}
} else {
return ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()))
}
}
let part_ = readPart_()
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "-")) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator())
part_ = ((part_ + "-") + readPart_())
}
if(ff_core_String.String_any(part_, ((_w1) => {
return ff_core_Char.Char_isAsciiUpper(_w1)
}))) {
ff_compiler_Parser.Parser_fail(self_, at_, ("Package names and paths must not contain upper case letters: " + part_))
}
if((ff_core_String.String_any(part_, ((_w1) => {
return (_w1 == 95)
})) || ff_core_String.String_any(part_, ((_w1) => {
return (_w1 == 46)
})))) {
ff_compiler_Parser.Parser_fail(self_, at_, ("Package names and paths must not contain underscores or dots: " + part_))
}
return part_
}

export function Parser_parseTypeParameters(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[")
const parameters_ = ff_core_ArrayBuilder.empty_()
const constraints_ = ff_core_ArrayBuilder.empty_()
while(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSemicolon())))) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LBracketLeft())) {
ff_core_ArrayBuilder.ArrayBuilder_add(constraints_, ff_compiler_Syntax.Constraint(ff_compiler_Parser.Parser_parseType(self_)))
} else {
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
ff_core_ArrayBuilder.ArrayBuilder_add(parameters_, ff_compiler_Token.Token_raw(parameterNameToken_))
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
for(;;) {
const _1 = ff_compiler_Parser.Parser_parseType(self_)
{
if(_1.TVariable) {
const t_ = _1
ff_compiler_Parser.Parser_fail(self_, t_.at_, ("Unexpected type variable: $" + t_.index_))
break
}
}
{
if(_1.TConstructor) {
const t_ = _1
ff_core_ArrayBuilder.ArrayBuilder_add(constraints_, ff_compiler_Syntax.Constraint((((_c) => {
return ff_compiler_Syntax.TConstructor(_c.at_, _c.name_, ff_core_List.Link(ff_compiler_Syntax.TConstructor(t_.at_, ff_compiler_Token.Token_raw(parameterNameToken_), ff_core_List.Empty()), t_.generics_))
}))(t_)))
break
}
}
throw new Error('Unexhaustive pattern match')
}
}
}
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
}
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSemicolon())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LSemicolon())
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_ArrayBuilder.ArrayBuilder_add(constraints_, ff_compiler_Syntax.Constraint(ff_compiler_Parser.Parser_parseType(self_)))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
return ff_compiler_Parser.Poly(ff_core_ArrayBuilder.ArrayBuilder_toList(parameters_), ff_core_ArrayBuilder.ArrayBuilder_toList(constraints_))
}

export function Parser_parseTypeArguments(self_, parenthesis_ = false) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), (parenthesis_
? "("
: "["))
const types_ = ff_core_ArrayBuilder.empty_()
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_ArrayBuilder.ArrayBuilder_add(types_, ff_compiler_Parser.Parser_parseType(self_))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), (parenthesis_
? ")"
: "]"))
return ff_core_ArrayBuilder.ArrayBuilder_toList(types_)
}

export function Parser_parseFunctionParameters(self_, allowMutable_ = false) {
const parameters_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(")
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const mutable_ = ((allowMutable_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable"))
if(mutable_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
}
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
const parameterType_ = ff_compiler_Parser.Parser_parseType(self_)
const default_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? ff_core_Option.None()
: (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
return ff_core_Option.Some(ff_compiler_Parser.Parser_parseTerm(self_))
})())
ff_core_ArrayBuilder.ArrayBuilder_add(parameters_, ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), parameterType_, default_))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
return ff_core_ArrayBuilder.ArrayBuilder_toList(parameters_)
}

export function Parser_parseFunctionArguments(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(")
const arguments_ = ff_core_ArrayBuilder.empty_()
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const nameToken_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()))
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
return ff_core_Option.Some(token_)
})()
: ff_core_Option.None())
const value_ = ff_compiler_Parser.Parser_parseTerm(self_)
ff_core_ArrayBuilder.ArrayBuilder_add(arguments_, ff_compiler_Syntax.Argument(ff_core_Option.Option_else(ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_at(_w1)
})), (() => {
return value_.at_
})), ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
})), value_))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
return ff_core_ArrayBuilder.ArrayBuilder_toList(arguments_)
}

export function Parser_parseLambda(self_, defaultParameterCount_ = 0, ignoreGenerateKeyword_ = false, allowColon_ = false) {
const colon_ = (allowColon_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))
const token_ = (colon_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{"))
if(((ignoreGenerateKeyword_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "generate"))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
}
const result_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())
? (function() {
const cases_ = ff_core_ArrayBuilder.empty_()
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())) {
ff_core_ArrayBuilder.ArrayBuilder_add(cases_, ff_compiler_Parser.Parser_parseCase(self_))
}
return ff_core_ArrayBuilder.ArrayBuilder_toList(cases_)
})()
: (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LComma(), ff_compiler_Token.LArrowThick()))
? (function() {
const parameters_ = ff_core_ArrayBuilder.empty_()
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
const parameterToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
ff_core_ArrayBuilder.ArrayBuilder_add(parameters_, ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(parameterToken_), ff_core_Option.Some(ff_compiler_Token.Token_raw(parameterToken_))))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick())
const term_ = ff_compiler_Parser.Parser_parseStatements(self_)
return ff_core_List.Link(ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_ArrayBuilder.ArrayBuilder_toList(parameters_), ff_core_Option.None(), term_), ff_core_List.Empty())
})()
: (function() {
const term_ = ff_compiler_Parser.Parser_parseStatements(self_)
const wildcards_ = ff_compiler_Wildcards.make_()
const e_ = ff_compiler_Wildcards.Wildcards_fixWildcards(wildcards_, term_)
const arguments_ = ((wildcards_.seenWildcards_ != 0)
? ff_core_List.List_map(ff_core_Int.Int_to(1, wildcards_.seenWildcards_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(("_w" + i_)))
}))
: ff_core_List.List_map(ff_core_Int.Int_to(1, defaultParameterCount_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})))
return ff_core_List.Link(ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), arguments_, ff_core_Option.None(), e_), ff_core_List.Empty())
})())
if((!colon_)) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
}
return ff_compiler_Syntax.Lambda(ff_compiler_Token.Token_at(token_), result_)
}

export function Parser_parseCase(self_) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe())
const patterns_ = ff_core_ArrayBuilder.empty_()
while(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_core_ArrayBuilder.ArrayBuilder_add(patterns_, ff_compiler_Parser.Parser_parsePattern(self_))
if(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
}
const condition_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? ff_core_Option.None()
: (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketLeft())
const term_ = ff_compiler_Parser.Parser_parseStatements(self_)
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketRight())
return ff_core_Option.Some(term_)
})())
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick())
const body_ = ff_compiler_Parser.Parser_parseStatements(self_)
return ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_ArrayBuilder.ArrayBuilder_toList(patterns_), condition_, body_)
}

export function Parser_parsePattern(self_) {
const pattern_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard())
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})()
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(ff_compiler_Token.Token_raw(token_)))
})()
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? (function() {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_))
const pair_ = ff_core_List.List_unzip(ff_compiler_Parser.Parser_parseRecordPattern(self_))
return ff_compiler_Syntax.PVariant(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_)
})()
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseListPattern(self_)
: (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
const patterns_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(")
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_ArrayBuilder.ArrayBuilder_add(patterns_, ff_compiler_Parser.Parser_parsePattern(self_))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_ArrayBuilder.ArrayBuilder_toList(patterns_))
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_Option.Some(ff_compiler_Token.Token_raw(asToken_)))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard())
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_Option.None())
} else {
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.Empty())
}
}
})())
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "@")) {
const atToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator())
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
return ff_compiler_Syntax.PAlias(ff_compiler_Token.Token_at(atToken_), pattern_, ff_compiler_Token.Token_raw(asToken_))
} else {
return pattern_
}
}

export function Parser_parseType(self_) {
const leftTypes_ = (((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(") && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LColon()))
? (function() {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_))
const pair_ = ff_core_List.List_unzip(ff_compiler_Parser.Parser_parseRecordType(self_))
return ff_core_List.Link(ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_), ff_core_List.Empty())
})()
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? ff_compiler_Parser.Parser_parseTypeArguments(self_, true)
: (function() {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "")
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false))
return ff_core_List.Link(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_), ff_core_List.Empty())
})())
if(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick())) && (ff_core_List.List_size(leftTypes_) == 1))) {
return ff_core_List.List_expectFirst(leftTypes_)
} else {
const arrowToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick())
const rightType_ = ff_compiler_Parser.Parser_parseType(self_)
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(arrowToken_), ("Function$" + ff_core_List.List_size(leftTypes_)), ff_core_List.List_addAll(leftTypes_, ff_core_List.Link(rightType_, ff_core_List.Empty())))
}
}

export function Parser_parseStatements(self_) {
if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight(), ff_compiler_Token.LPipe())) {
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Unit", ff_core_List.Empty(), ff_core_Option.None())
} else {
let result_ = ff_compiler_Parser.Parser_parseStatement(self_)
while(ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())) {
const token_ = ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
result_ = ff_compiler_Syntax.ESequential(ff_compiler_Token.Token_at(token_), result_, ff_compiler_Parser.Parser_parseStatement(self_))
}
return result_
}
}

export function Parser_parseStatement(self_) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "let") || ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable")))) {
return ff_compiler_Parser.Parser_parseLet(self_)
} else {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function"))) {
return ff_compiler_Parser.Parser_parseFunctions(self_)
} else {
const term_ = ff_compiler_Parser.Parser_parseTerm(self_)
if(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign())) && (!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignPlus(), ff_compiler_Token.LAssignMinus(), ff_compiler_Token.LAssignLink())))) {
return term_
} else {
const token_ = ff_core_Core.do_((() => {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignPlus())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignPlus())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMinus())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMinus())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignLink())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignLink())
} else {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
}
}
}
}))
const operator_ = ff_core_String.String_dropLast(ff_compiler_Token.Token_raw(token_), 1)
const value_ = ff_compiler_Parser.Parser_parseTerm(self_)
{
const _1 = term_
{
if(_1.EVariable) {
const name_ = _1.name_
return ff_compiler_Syntax.EAssign(ff_compiler_Token.Token_at(token_), operator_, name_, value_)
return
}
}
{
if(_1.EField) {
const e_ = _1
return ff_compiler_Syntax.EAssignField(ff_compiler_Token.Token_at(token_), operator_, e_.record_, e_.field_, value_)
return
}
}
{
return ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(token_), "Only variables and fields are assignable")
return
}
throw new Error('Unexhaustive pattern match')
}
}
}
}
}

export function Parser_parseLet(self_) {
const mutable_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable")
if(mutable_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "mutable")
} else {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "let")
}
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
const valueType_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))
? ff_compiler_Parser.Parser_freshTypeVariable(self_, ff_compiler_Token.Token_at(nameToken_))
: (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
return ff_compiler_Parser.Parser_parseType(self_)
})())
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
const value_ = ff_compiler_Parser.Parser_parseTerm(self_)
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
const body_ = ff_compiler_Parser.Parser_parseStatements(self_)
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, value_, body_)
}

export function Parser_parseFunctions(self_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_))
const functions_ = ff_core_ArrayBuilder.empty_()
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function")) {
const functionAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "function"))
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_)
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), false, false)
ff_core_ArrayBuilder.ArrayBuilder_add(functions_, ff_compiler_Syntax.DFunction(functionAt_, signature_, body_, ff_compiler_Syntax.Targets(ff_core_Option.None())))
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
const body_ = ff_compiler_Parser.Parser_parseStatements(self_)
return ff_compiler_Syntax.EFunctions(at_, ff_core_ArrayBuilder.ArrayBuilder_toList(functions_), body_)
}

export function Parser_parseTerm(self_) {
return ff_compiler_Parser.Parser_parseBinary(self_, 0)
}

export function Parser_parseBinary(self_, level_) {
if((level_ >= ff_core_Array.Array_size(ff_compiler_Parser.binaryOperators_))) {
return ff_compiler_Parser.Parser_parseUnary(self_)
} else {
const operators_ = ff_core_Array.Array_expect(ff_compiler_Parser.binaryOperators_, level_)
let result_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1))
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
while(ff_core_List.List_any(operators_, ((value_) => {
return ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), value_)
}))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator())
const right_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1))
if(ff_compiler_Token.Token_rawIs(token_, "++")) {
const arguments_ = ff_core_List.Link(ff_compiler_Syntax.Argument(right_.at_, ff_core_Option.None(), right_), ff_core_List.Empty())
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), false, ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, "addAll"), ff_core_List.Empty(), arguments_)
} else {
const arguments_ = ff_core_List.Link(ff_compiler_Syntax.Argument(result_.at_, ff_core_Option.None(), result_), ff_core_List.Link(ff_compiler_Syntax.Argument(right_.at_, ff_core_Option.None(), right_), ff_core_List.Empty()))
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), false, ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.Empty(), ff_core_List.Empty()), ff_core_List.Empty(), arguments_)
}
}
}
return result_
}
}

export function Parser_parseUnary(self_) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator())
const term_ = ff_compiler_Parser.Parser_parseUnary(self_)
return ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), false, ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.Empty(), ff_core_List.Empty()), ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), term_), ff_core_List.Empty()))
} else {
return ff_compiler_Parser.Parser_parseFieldsAndCalls(self_)
}
}

export function Parser_parseFieldsAndCalls(self_) {
const tailCall_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "tailcall"))
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
return true
})()
: false)
let result_ = ff_compiler_Parser.Parser_parseAtom(self_)
while(((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketLeft()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot()))) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot())
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const term_ = ff_compiler_Parser.Parser_parseAtom(self_)
result_ = ff_compiler_Syntax.EPipe(term_.at_, result_, term_)
} else if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper(), ff_compiler_Token.LNamespace())) {
result_ = ff_compiler_Parser.Parser_parseCopy(self_, result_)
} else {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
} else {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_))
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false))
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionArguments(self_))
const moreArguments_ = ff_core_ArrayBuilder.empty_()
let lastWasCurly_ = false
while((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{") || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))) {
lastWasCurly_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, true)
ff_core_ArrayBuilder.ArrayBuilder_add(moreArguments_, ff_compiler_Syntax.Argument(lambda_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)))
}
result_ = ff_compiler_Syntax.ECall(at_, tailCall_, result_, typeArguments_, ff_core_List.List_addAll(arguments_, ff_core_ArrayBuilder.ArrayBuilder_toList(moreArguments_)))
if((lastWasCurly_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
}
}
return result_
}

export function Parser_parseAtom(self_) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LString())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString())
return ff_compiler_Syntax.EString(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LChar())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LChar())
return ff_compiler_Syntax.EChar(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt())
return ff_compiler_Syntax.EInt(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LFloat())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LFloat())
return ff_compiler_Syntax.EFloat(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.Empty(), ff_core_List.Empty())
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())) {
const namespaceToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace())
const extraNamespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ff_core_Option.None()
: ff_core_Option.Some(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))))
const prefix_ = (ff_compiler_Token.Token_raw(namespaceToken_) + ff_core_Option.Option_else(extraNamespace_, (() => {
return ""
})))
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), (prefix_ + ff_compiler_Token.Token_raw(token_)), ff_core_List.Empty(), ff_core_List.Empty())
} else {
return ff_compiler_Parser.Parser_parseVariant(self_, prefix_)
}
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper())) {
return ff_compiler_Parser.Parser_parseVariant(self_, "")
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, false)
return ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")) {
return ff_compiler_Parser.Parser_parseList(self_)
} else if(((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(") && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LAssign()))) {
return ff_compiler_Syntax.ERecord(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_compiler_Parser.Parser_parseRecord(self_))
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(")
const result_ = ff_compiler_Parser.Parser_parseTerm(self_)
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
return result_
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard())
return ff_compiler_Syntax.EWildcard(ff_compiler_Token.Token_at(token_), 0)
} else {
return ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ("Expected atom, got " + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_current(self_))))
}
}

export function Parser_parseVariant(self_, prefix_) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_))
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false))
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "?")) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator())
return ff_compiler_Syntax.EVariantIs(ff_compiler_Token.Token_at(token_), name_, typeArguments_)
} else {
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_Option.None()
: ff_core_Option.Some(ff_compiler_Parser.Parser_parseFunctionArguments(self_)))
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(token_), name_, typeArguments_, arguments_)
}
}

export function Parser_parseCopy(self_, record_) {
const namespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ""
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace())))
const extraNamespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ""
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace())))
const prefix_ = (namespace_ + extraNamespace_)
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_))
const fields_ = ff_compiler_Parser.Parser_parseRecord(self_)
return ff_compiler_Syntax.ECopy(ff_compiler_Token.Token_at(token_), name_, record_, fields_)
}

export function Parser_parseRecord(self_) {
const fields_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(")
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
ff_core_ArrayBuilder.ArrayBuilder_add(fields_, ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseTerm(self_)))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
return ff_core_ArrayBuilder.ArrayBuilder_toList(fields_)
}

export function Parser_parseRecordType(self_) {
const fields_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(")
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LColon())
ff_core_ArrayBuilder.ArrayBuilder_add(fields_, ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseType(self_)))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
return ff_core_List.List_sortBy(ff_core_ArrayBuilder.ArrayBuilder_toList(fields_), ((_w1) => {
return _w1.first_
}))
}

export function Parser_parseRecordPattern(self_) {
const fields_ = ff_core_ArrayBuilder.empty_()
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(")
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
ff_core_ArrayBuilder.ArrayBuilder_add(fields_, ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parsePattern(self_)))
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
return ff_core_List.List_sortBy(ff_core_ArrayBuilder.ArrayBuilder_toList(fields_), ((_w1) => {
return _w1.first_
}))
}

export function Parser_parseListPattern(self_) {
function convertListPattern_(at_, items_) {
{
const at_a = at_
const items_a = items_
{
if(items_a.Empty) {
return ff_compiler_Syntax.PVariant(at_, "ff:core/List.Empty", ff_core_List.Empty())
return
}
}
{
if(items_a.Link) {
const p_ = items_a.head_.first_
if(!items_a.head_.second_) {
const ps_ = items_a.tail_
return ff_compiler_Syntax.PVariant(p_.at_, "ff:core/List.Link", ff_core_List.Link(p_, ff_core_List.Link(convertListPattern_(p_.at_, ps_), ff_core_List.Empty())))
return
}
}
}
{
if(items_a.Link) {
const p_ = items_a.head_.first_
if(items_a.head_.second_) {
if(items_a.tail_.Empty) {
return p_
return
}
}
}
}
{
if(items_a.Link) {
const p_ = items_a.head_.first_
if(items_a.head_.second_) {
return ff_compiler_Parser.Parser_fail(self_, p_.at_, "Invalid pattern: ... is only allowed for the last element in a list")
return
}
}
}
throw new Error('Unexhaustive pattern match')
}
}
const items_ = ff_core_ArrayBuilder.empty_()
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["))
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot())
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
}
const pattern_ = ((spread_ && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))
? ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_core_Option.None())
: ff_compiler_Parser.Parser_parsePattern(self_))
ff_core_ArrayBuilder.ArrayBuilder_add(items_, ff_core_Pair.Pair(pattern_, spread_))
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
return convertListPattern_(at_, ff_core_ArrayBuilder.ArrayBuilder_toList(items_))
}

export function Parser_parseList(self_) {
const items_ = ff_core_ArrayBuilder.empty_()
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["))
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot())
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
}
ff_core_ArrayBuilder.ArrayBuilder_add(items_, ff_core_Pair.Pair(ff_compiler_Parser.Parser_parseTerm(self_), spread_))
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
return ff_compiler_Syntax.EList(at_, ff_compiler_Parser.Parser_freshTypeVariable(self_, at_), ff_core_ArrayBuilder.ArrayBuilder_toList(items_))
}


