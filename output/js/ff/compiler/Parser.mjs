import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

import * as ff_compiler_Wildcards from "../../ff/compiler/Wildcards.mjs"

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

// type Parser
export function Parser(moduleKey_, tokens_, end_, targetIsNode_, lspHook_, lspEmittedArgumentHook_, offset_, nextUnificationVariableIndex_) {
return {moduleKey_, tokens_, end_, targetIsNode_, lspHook_, lspEmittedArgumentHook_, offset_, nextUnificationVariableIndex_};
}

// type Poly
export function Poly(generics_, constraints_) {
return {generics_, constraints_};
}

export const binaryOperators_ = [["||"], ["&&"], ["!=", "==", "!==", "==="], ["<=", ">=", "<", ">"], ["+", "-"], ["*", "/", "%"], ["^"]];

export function new_(moduleKey_, tokens_, targetIsNode_, lspHook_) {
return ff_compiler_Parser.Parser(moduleKey_, tokens_, ff_core_List.List_grabLast(tokens_), targetIsNode_, lspHook_, false, 0, 1)
}

export async function new_$(moduleKey_, tokens_, targetIsNode_, lspHook_, $task) {
return ff_compiler_Parser.Parser(moduleKey_, tokens_, ff_core_List.List_grabLast(tokens_), targetIsNode_, lspHook_, false, 0, 1)
}

export function Parser_fail(self_, at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Parser_behind(self_) {
if((self_.offset_ === 0)) {
return ff_compiler_Parser.Parser_current(self_)
} else {
if(((self_.offset_ - 1) < self_.tokens_.length)) {
return ff_core_List.List_grab(self_.tokens_, (self_.offset_ - 1))
} else {
return self_.end_
}
}
}

export function Parser_current(self_) {
if((self_.offset_ < self_.tokens_.length)) {
return (self_.tokens_[self_.offset_] ?? ff_core_List.List_grab(self_.tokens_, self_.offset_))
} else {
return self_.end_
}
}

export function Parser_ahead(self_) {
if(((self_.offset_ + 1) < self_.tokens_.length)) {
return ff_core_List.List_grab(self_.tokens_, (self_.offset_ + 1))
} else {
return self_.end_
}
}

export function Parser_aheadAhead(self_) {
if(((self_.offset_ + 2) < self_.tokens_.length)) {
return ff_core_List.List_grab(self_.tokens_, (self_.offset_ + 2))
} else {
return self_.end_
}
}

export function Parser_skip(self_, kind_) {
const c_ = ff_compiler_Parser.Parser_current(self_);
if(ff_core_Equal.notEquals_(c_.kind_, kind_, ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind)) {
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(kind_, ff_compiler_Token.LUpper())) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(c_.kind_, ff_compiler_Token.LLower()))) {

} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + ", got ") + ff_compiler_Token.Token_raw(c_))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
self_.offset_ += 1;
return c_
}

export function Parser_rawSkip(self_, kind_, value_) {
const c_ = ff_compiler_Parser.Parser_current(self_);
if(ff_core_Equal.notEquals_(c_.kind_, kind_, ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind)) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((value_ === ")") || (value_ === "]")) || (value_ === "}")))) {

} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + " ") + value_) + ", got ") + ff_compiler_Token.Token_raw(c_))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
if((!ff_compiler_Token.Token_rawIs(c_, value_))) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((value_ === ")") || (value_ === "]")) || (value_ === "}")))) {
self_.offset_ -= 1
} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + value_) + " got ") + ff_compiler_Token.Token_raw(c_))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
self_.offset_ += 1;
return c_
}

export function Parser_freshUnificationVariable(self_, at_) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextUnificationVariableIndex_);
self_.nextUnificationVariableIndex_ += 3;
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

export function Parser_parseModuleWithoutPackageInfo(self_) {
const moduleWithPackageInfo_ = ff_compiler_Parser.Parser_parseModuleWithPackageInfo(self_);
{
const if_o = moduleWithPackageInfo_.packageInfo_
if(if_o.Some) {
const info_ = if_o.value_;
{
const _exception = ff_compiler_Syntax.CompileError(info_.package_.at_, "Package and dependencies already declared in package.ff"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
return moduleWithPackageInfo_.module_
}

export function Parser_parseModuleWithPackageInfo(self_) {
const packageInfo_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs3(ff_compiler_Parser.Parser_current(self_), "package", "dependency", "include"))
? ff_core_Option.Some(ff_compiler_Parser.Parser_parsePackageInfo(self_))
: ff_core_Option.None());
const module_ = ff_compiler_Parser.Parser_parseModule(self_);
return ff_compiler_Syntax.ModuleWithPackageInfo(packageInfo_, module_)
}

export function Parser_parsePackageInfo(self_) {
const location_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const package_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))
? (function() {
const p_ = ff_compiler_Parser.Parser_parsePackageDefinition(self_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
};
return p_
})()
: ff_compiler_Syntax.DPackage(location_, self_.moduleKey_.packagePair_, ff_compiler_Syntax.Version(location_, 0, 0, 0), ff_compiler_Syntax.TargetNames(self_.targetIsNode_, (!self_.targetIsNode_))));
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Duplicate package definition"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
const dependencies_ = ff_core_Array.new_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
dependencies_.array.push(ff_compiler_Parser.Parser_parseDependencyDefinition(self_, package_.targets_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const includes_ = ff_core_Array.new_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
includes_.array.push(ff_compiler_Parser.Parser_parseIncludeDefinition(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.PackageInfo(package_, ff_core_Array.Array_toList(dependencies_, 0, 9007199254740991), ff_core_Array.Array_toList(includes_, 0, 9007199254740991))
}

export function Parser_parseModule(self_) {
const imports_ = ff_core_Array.new_();
const types_ = ff_core_Array.new_();
const traits_ = ff_core_Array.new_();
const instances_ = ff_core_Array.new_();
const extends_ = ff_core_Array.new_();
const lets_ = ff_core_Array.new_();
const functions_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LColon())))) {
lets_.array.push(ff_compiler_Parser.Parser_parseLetDefinition(self_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
functions_.array.push(ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "extend"))) {
extends_.array.push(ff_compiler_Parser.Parser_parseExtendDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trait"))) {
traits_.array.push(ff_compiler_Parser.Parser_parseTraitDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "instance"))) {
instances_.array.push(ff_compiler_Parser.Parser_parseInstanceDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs4(ff_compiler_Parser.Parser_current(self_), "data", "class", "capability", "newtype"))) {
types_.array.push(ff_compiler_Parser.Parser_parseTypeDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "import"))) {
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LDot())))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
} else {
imports_.array.push(ff_compiler_Parser.Parser_parseImportDefinition(self_, self_.moduleKey_.packagePair_))
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Includes must be at the top of the file or below 'package'"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Dependencies must be at the top of the file or below 'package'"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Package definition must be at the top of the file"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LEnd())
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.Module(self_.moduleKey_, ff_core_Array.Array_toList(imports_, 0, 9007199254740991), ff_core_Array.Array_toList(types_, 0, 9007199254740991), ff_core_Array.Array_toList(traits_, 0, 9007199254740991), ff_core_Array.Array_toList(instances_, 0, 9007199254740991), ff_core_Array.Array_toList(extends_, 0, 9007199254740991), ff_core_Array.Array_toList(lets_, 0, 9007199254740991), ff_core_Array.Array_toList(functions_, 0, 9007199254740991))
}

export function Parser_parseLetDefinition(self_) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const variableType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon()), ff_compiler_Parser.Parser_parseType(self_))
: ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_)));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
const retult_ = ff_compiler_Syntax.DLet(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), variableType_, value_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.SLet(false), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return retult_
}

export function Parser_parseFunctionDefinition(self_, member_) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, member_);
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, signature_.parameters_.length, false, false);
const result_ = ff_compiler_Syntax.DFunction(signature_.at_, signature_, body_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(signature_.name_, ff_compiler_LspHook.SFunction(member_), signature_.at_, (((_c) => {
return ff_compiler_Syntax.Location(_c.file_, _c.line_, (signature_.at_.column_ + signature_.name_.length))
}))(signature_.at_), signature_.at_, ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return result_
}

export function Parser_parseSignature(self_, member_) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly([], []));
const parameters_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const returnType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon()), ff_compiler_Parser.Parser_parseType(self_))
: ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "ff:core/Unit.Unit", []));
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(nameToken_), "TemporaryEffect$", []);
return ff_compiler_Syntax.Signature(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), member_, poly_.generics_, poly_.constraints_, parameters_, returnType_, temporaryEffect_)
}

export function Parser_parseExtendDefinition(self_) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const extendToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "extend");
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly([], []));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const type_ = ff_compiler_Parser.Parser_parseType(self_);
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const methods_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
methods_.array.push(ff_compiler_Parser.Parser_parseFunctionDefinition(self_, true));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
if(self_.lspHook_.trackSymbols_) {
let name_ = ff_compiler_Syntax.Type_show(type_, []);
for(let for_a = poly_.generics_, for_i = 0, for_l = for_a.length, for_a2 = poly_.constraints_, for_i2 = 0, for_l2 = for_a2.length; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {
const generic_ = for_a[for_i];
const constraint_ = for_a2[for_i2];
name_ = ff_core_String.String_replace(name_, (("[" + generic_) + "]"), (((("[" + generic_) + ": ") + constraint_.name_) + "]"));
name_ = ff_core_String.String_replace(name_, (("[" + generic_) + ","), (((("[" + generic_) + ": ") + constraint_.name_) + ","));
name_ = ff_core_String.String_replace(name_, ((", " + generic_) + ","), ((((", " + generic_) + ": ") + constraint_.name_) + ","));
name_ = ff_core_String.String_replace(name_, ((", " + generic_) + "]"), ((((", " + generic_) + ": ") + constraint_.name_) + "]"))
};
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(name_, ff_compiler_LspHook.SExtend(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(extendToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return ff_compiler_Syntax.DExtend(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, type_, ff_core_Array.Array_toList(methods_, 0, 9007199254740991))
}

export function Parser_parseTraitDefinition(self_) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const traitToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "trait");
const typeParameterToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly([], [])
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const constraints_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Trait constraints is not yet implemented");
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
constraints_.array.push((((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, [ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(typeParameterToken_), ff_compiler_Token.Token_raw(typeParameterToken_), []), ...constraint_.generics_])
}))(constraint_))
};
const generatorParameters_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const methodGenerators_ = ff_core_Array.new_();
const methodDefaults_ = ff_core_Array.new_();
const methodSignatures_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? []
: (function() {
const signatures_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const signatureNameToken_ = ff_compiler_Parser.Parser_current(self_);
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, true);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(signatureNameToken_), ff_compiler_LspHook.STraitFunction(), ff_compiler_Token.Token_at(signatureNameToken_), ff_compiler_Token.Token_end(signatureNameToken_), ff_compiler_Token.Token_at(signatureNameToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
signatures_.array.push(signature_);
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const generator_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), "generate"));
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, signature_.parameters_.length, true, false);
if(generator_) {
methodGenerators_.array.push(ff_core_Pair.Pair(signature_.name_, body_))
} else {
methodDefaults_.array.push(ff_core_Pair.Pair(signature_.name_, body_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Array.Array_toList(signatures_, 0, 9007199254740991)
})());
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.STrait(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(traitToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return ff_compiler_Syntax.DTrait(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), [ff_compiler_Token.Token_raw(typeParameterToken_), ...poly_.generics_], [...ff_core_Array.Array_toList(constraints_, 0, 9007199254740991), ...poly_.constraints_], generatorParameters_, methodSignatures_, ff_core_Array.Array_toList(methodDefaults_, 0, 9007199254740991), ff_core_Array.Array_toList(methodGenerators_, 0, 9007199254740991))
}

export function Parser_parseInstanceDefinition(self_) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const instanceToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "instance");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly([], [])
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const typeArguments_ = ff_core_Array.new_();
typeArguments_.array.push(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.List_map(poly_.generics_, ((_w1) => {
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), _w1, [])
}))));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
typeArguments_.array.push(ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
};
const generatorArguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(nameToken_), false).first_;
const methods_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? []
: (function() {
const definitions_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
definitions_.array.push(ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Array.Array_toList(definitions_, 0, 9007199254740991)
})());
if(self_.lspHook_.trackSymbols_) {
const name_ = ((ff_compiler_Token.Token_raw(token_) + ": ") + ff_compiler_Token.Token_raw(nameToken_));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(name_, ff_compiler_LspHook.SInstance(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(instanceToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return ff_compiler_Syntax.DInstance(ff_compiler_Token.Token_at(nameToken_), poly_.generics_, poly_.constraints_, ff_compiler_Token.Token_raw(nameToken_), ff_core_Array.Array_toList(typeArguments_, 0, 9007199254740991), generatorArguments_, methods_, false)
}

export function Parser_parseTypeDefinition(self_) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const newtype_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype");
const effectParameter_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "capability")
? ["Q$"]
: []);
const allowMutable_ = ff_compiler_Token.Token_rawIs2(ff_compiler_Parser.Parser_current(self_), "class", "capability");
const kindToken_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype")
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "newtype")
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "data")
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "data")
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "class")
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "class")
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "capability"));
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly([], [])
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
if(((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
};
const commonFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
const variants_ = ((newtype_ || (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? [ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), [])]
: (function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const variantsBuilder_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const variantNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const variantFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
if(((!allowMutable_) && ff_core_List.List_any(variantFields_, ((_w1) => {
return _w1.mutable_
})))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(variantFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes can have mutable fields"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
variantsBuilder_.array.push(ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_raw(variantNameToken_), variantFields_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
};
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(variantNameToken_), ff_compiler_LspHook.SVariant(), ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_end(variantNameToken_), ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Array.Array_toList(variantsBuilder_, 0, 9007199254740991)
})());
if((newtype_ && (commonFields_.length !== 1))) {
ff_core_Log.show_(commonFields_, ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter));
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(nameToken_), "Newtypes must have exactly one field"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
if(((!allowMutable_) && ff_core_List.List_any(commonFields_, ((_w1) => {
return _w1.mutable_
})))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(commonFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes and capabilities can have mutable fields"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
const generics_ = [...effectParameter_, ...poly_.generics_];
const result_ = ff_compiler_Syntax.DType(ff_compiler_Token.Token_at(nameToken_), newtype_, (!allowMutable_), ff_compiler_Token.Token_raw(nameToken_), generics_, poly_.constraints_, commonFields_, variants_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.SType(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(kindToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return result_
}

export function Parser_parseImportDefinition(self_, currentPackagePair_) {
const importToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "import");
const path_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
path_.array.push(ff_compiler_Parser.Parser_parseDashedName(self_));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot())
};
const fileToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const alias_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "as")
? (ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "as"), ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())))
: ff_compiler_Token.Token_raw(fileToken_));
const packagePair_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "from")
? (function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "from");
const userName_ = ff_compiler_Parser.Parser_parseDashedName(self_);
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const packageName_ = ff_compiler_Parser.Parser_parseDashedName(self_);
return ff_compiler_Syntax.PackagePair(userName_, packageName_)
})()
: currentPackagePair_);
return ff_compiler_Syntax.DImport(ff_compiler_Token.Token_at(fileToken_), alias_, ff_compiler_Syntax.ModuleKey(packagePair_, ff_core_Array.Array_toList(path_, 0, 9007199254740991), ff_compiler_Token.Token_raw(fileToken_)))
}

export function Parser_parsePackageDefinition(self_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const user_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const name_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const version_ = ff_compiler_Parser.Parser_parseVersion(self_);
const targets_ = ff_compiler_Parser.Parser_parseTargetNames(self_, ff_compiler_Syntax.TargetNames(true, true));
return ff_compiler_Syntax.DPackage(at_, ff_compiler_Syntax.PackagePair(user_, name_), version_, targets_)
}

export function Parser_parseDependencyDefinition(self_, defaultTargetNames_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const user_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const name_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const version_ = ff_compiler_Parser.Parser_parseVersion(self_);
const safety_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trusted")
? ff_compiler_Syntax.Trusted()
: (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "unsafe")
? ff_compiler_Syntax.Unsafe()
: ff_compiler_Syntax.Safe()));
const targets_ = ff_compiler_Parser.Parser_parseTargetNames(self_, defaultTargetNames_);
return ff_compiler_Syntax.DDependency(at_, ff_compiler_Syntax.PackagePair(user_, name_), version_, safety_, targets_)
}

export function Parser_parseIncludeDefinition(self_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const path_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString()));
return ff_compiler_Syntax.DInclude(at_, ff_core_String.String_dropLast(ff_core_String.String_dropFirst(path_, 1), 1))
}

export function Parser_parseTargetNames(self_, defaultTargets_) {
let targets_ = ff_compiler_Syntax.TargetNames(false, false);
while(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword(), ff_compiler_Token.LLower())) {
const token_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
do {
const _1 = ff_compiler_Token.Token_raw(token_);
if(_1 === "node" && targets_.node_) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
break
}
if(_1 === "node") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(true, _c.browser_)
}))(targets_)
break
}
if(_1 === "browser" && targets_.browser_) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
break
}
if(_1 === "browser") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(_c.node_, true)
}))(targets_)
break
}
{
const t_ = _1;
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), ("Unexpected target: " + t_)); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
} while(false)
};
if(((!targets_.node_) && (!targets_.browser_))) {
return defaultTargets_
} else {
return targets_
}
}

export function Parser_parseVersion(self_) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LFloat())) {
const majorMinor_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LFloat());
const parts_ = ff_core_String.String_split(ff_compiler_Token.Token_raw(majorMinor_), 46);
const patch_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot()), ff_core_String.String_grabInt(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt()))))
: 0);
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(majorMinor_), ff_core_String.String_grabInt((parts_[0] ?? ff_core_List.List_grab(parts_, 0))), ff_core_String.String_grabInt((parts_[1] ?? ff_core_List.List_grab(parts_, 1))), patch_)
} else {
const major_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt());
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(major_), ff_core_String.String_grabInt(ff_compiler_Token.Token_raw(major_)), 0, 0)
}
}

export function Parser_parseDashedName(self_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
function readPart_() {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())) {
const prefix_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt()));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
return (prefix_ + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())))
} else {
return prefix_
}
} else {
return ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()))
}
}
let part_ = readPart_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "-")) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
part_ = ((part_ + "-") + readPart_())
};
if(ff_core_String.String_any(part_, ((_w1) => {
return ff_core_Char.Char_isAsciiUpper(_w1)
}))) {
{
const _exception = ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain upper case letters: " + part_)); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
if((ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 95)
})) || ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 46)
})))) {
{
const _exception = ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain underscores or dots: " + part_)); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
return part_
}

export function Parser_parseTypeParameters(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
const parameters_ = ff_core_Array.new_();
const constraints_ = ff_core_Array.new_();
while(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSemicolon())))) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LBracketLeft())) {
constraints_.array.push(ff_compiler_Parser.Parser_parseConstraint(self_))
} else {
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
parameters_.array.push(ff_compiler_Token.Token_raw(parameterNameToken_));
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
constraints_.array.push((((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, [ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), ff_compiler_Token.Token_raw(parameterNameToken_), []), ...constraint_.generics_])
}))(constraint_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Parser.Poly(ff_core_Array.Array_toList(parameters_, 0, 9007199254740991), ff_core_Array.Array_toList(constraints_, 0, 9007199254740991))
}

export function Parser_parseTypeArguments(self_, parenthesis_ = false) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), (parenthesis_
? "("
: "["));
const types_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
types_.array.push(ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), (parenthesis_
? ")"
: "]"));
return ff_core_Array.Array_toList(types_, 0, 9007199254740991)
}

export function Parser_parseFunctionParameters(self_, allowMutable_ = false) {
const parameters_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const lspTrackSymbols_ = (self_.lspHook_.trackSymbols_ && allowMutable_);
if(lspTrackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const lspFirst_ = ff_compiler_Parser.Parser_current(self_);
const mutable_ = ((allowMutable_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable"));
if(mutable_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
};
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())))) {
const t_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), "ff:core/Nothing.Nothing", []);
parameters_.array.push(ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), t_, ff_core_Option.None()));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const parameterType_ = ff_compiler_Parser.Parser_parseType(self_);
const default_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? ff_core_Option.None()
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign()), ff_core_Option.Some(ff_compiler_Parser.Parser_parseTerm(self_))));
parameters_.array.push(ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), parameterType_, default_));
if(lspTrackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(parameterNameToken_), ff_compiler_LspHook.SParameter(), ff_compiler_Token.Token_at(parameterNameToken_), ff_compiler_Token.Token_end(parameterNameToken_), ff_compiler_Token.Token_at(lspFirst_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Array.Array_toList(parameters_, 0, 9007199254740991)
}

export function Parser_parseFunctionArguments(self_, callAt_, trailing_) {
const arguments_ = ff_core_Array.new_();
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const argumentToken_ = ff_compiler_Parser.Parser_current(self_);
const nameToken_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()))
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
return ff_core_Option.Some(token_)
})()
: ff_core_Option.None());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
}))));
self_.lspEmittedArgumentHook_ = true
}
};
arguments_.array.push(ff_compiler_Syntax.Argument(ff_compiler_Token.Token_at(argumentToken_), ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
})), value_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
};
let lastWasCurly_ = false;
if(trailing_) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower(), ff_compiler_Token.LUpper(), ff_compiler_Token.LString()) || ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt(), ff_compiler_Token.LChar(), ff_compiler_Token.LFloat())))) {
lastWasCurly_ = true;
const term_ = ff_compiler_Parser.Parser_parseTerm(self_);
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(term_.at_, "TemporaryEffect$", []);
const cases_ = [ff_compiler_Syntax.MatchCase(term_.at_, [], [], term_)];
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
arguments_.array.push(ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(term_.at_, ff_compiler_Syntax.Lambda(term_.at_, temporaryEffect_, cases_))))
} else {
while((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{") || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))) {
lastWasCurly_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{");
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, true);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
arguments_.array.push(ff_compiler_Syntax.Argument(lambda_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)))
}
}
};
return ff_core_Pair.Pair(ff_core_Array.Array_toList(arguments_, 0, 9007199254740991), lastWasCurly_)
}

export function Parser_parseLambda(self_, defaultParameterCount_ = 0, ignoreGenerateKeyword_ = false, allowColon_ = false) {
const colon_ = (allowColon_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()));
const token_ = (colon_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{"));
if(((ignoreGenerateKeyword_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "generate"))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
};
const result_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())
? (function() {
const cases_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())) {
cases_.array.push(ff_compiler_Parser.Parser_parseCase(self_))
};
return ff_core_Array.Array_toList(cases_, 0, 9007199254740991)
})()
: (ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower(), ff_compiler_Token.LWildcard()) && ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LComma(), ff_compiler_Token.LArrowThick()))
? (function() {
const parameters_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
const isVariable_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower());
const parameterToken_ = (isVariable_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard()));
parameters_.array.push(ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(parameterToken_), (isVariable_
? ff_core_Option.Some(ff_compiler_Token.Token_raw(parameterToken_))
: ff_core_Option.None())));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
return [ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Array.Array_toList(parameters_, 0, 9007199254740991), [], term_)]
})()
: (function() {
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const wildcards_ = ff_compiler_Wildcards.new_();
const e_ = ff_compiler_Wildcards.Wildcards_fixWildcards(wildcards_, term_);
const arguments_ = ((wildcards_.seenWildcards_ !== 0)
? ff_core_List.List_map(ff_core_List.range_(wildcards_.seenWildcards_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(("_w" + (i_ + 1))))
}))
: ff_core_List.List_map(ff_core_List.range_(defaultParameterCount_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})));
return [ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), arguments_, [], e_)]
})());
if((!colon_)) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
};
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), "TemporaryEffect$", []);
return ff_compiler_Syntax.Lambda(ff_compiler_Token.Token_at(token_), temporaryEffect_, result_)
}

export function Parser_parseCase(self_) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe());
const patterns_ = ff_core_Array.new_();
while(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
patterns_.array.push(ff_compiler_Parser.Parser_parsePattern(self_));
if(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
const guards_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
guards_.array.push(ff_compiler_Parser.Parser_parseCaseGuard(self_))
};
if(((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick())
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Array.Array_toList(patterns_, 0, 9007199254740991), ff_core_Array.Array_toList(guards_, 0, 9007199254740991), body_)
}

export function Parser_parseCaseGuard(self_) {
const guardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketLeft());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const p_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe()))
? ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(guardToken_), "True", [])
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe()), ff_compiler_Parser.Parser_parsePattern(self_)));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketRight());
return ff_compiler_Syntax.MatchGuard(ff_compiler_Token.Token_at(guardToken_), term_, p_)
}

export function Parser_parsePattern(self_) {
const pattern_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})()
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(ff_compiler_Token.Token_raw(token_)))
})()
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? (function() {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const pair_ = ff_core_List.List_unzip(ff_compiler_Parser.Parser_parseRecordPattern(self_));
return ff_compiler_Syntax.PVariant(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_)
})()
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseListPattern(self_)
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LString())
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString());
return ff_compiler_Syntax.PString(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
})()
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt());
return ff_compiler_Syntax.PInt(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
})()
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LChar())
? (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LChar());
return ff_compiler_Syntax.PChar(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
})()
: (function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
const patterns_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const pattern_ = ff_compiler_Parser.Parser_parsePattern(self_);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), patterns_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
patterns_.array.push(pattern_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), patterns_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_Array.Array_toList(patterns_, 0, 9007199254740991))
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(asToken_), ff_core_Option.Some(ff_compiler_Token.Token_raw(asToken_)))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
const wildcardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(wildcardToken_), ff_core_Option.None())
} else {
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), [])
}
}
})());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "@")) {
const atToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PAlias(ff_compiler_Token.Token_at(asToken_), pattern_, ff_compiler_Token.Token_raw(asToken_))
} else {
return pattern_
}
}

export function Parser_parseType(self_) {
const leftTypes_ = (((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(") && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LColon()))
? (function() {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const pair_ = ff_core_List.List_unzip(ff_compiler_Parser.Parser_parseRecordType(self_));
return [ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_)]
})()
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? ff_compiler_Parser.Parser_parseTypeArguments(self_, true)
: (function() {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return [ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_)]
})());
if(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick())) && (leftTypes_.length === 1))) {
return ff_core_List.List_grabFirst(leftTypes_)
} else {
const arrowToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const rightType_ = ff_compiler_Parser.Parser_parseType(self_);
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(arrowToken_), ("Function$" + leftTypes_.length), [...leftTypes_, rightType_])
}
}

export function Parser_parseConstraint(self_) {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return ff_compiler_Syntax.Constraint(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_)
}

export function Parser_parseStatements(self_) {
if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight(), ff_compiler_Token.LPipe())) {
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Unit", [], ff_core_Option.None())
} else {
let result_ = ff_compiler_Parser.Parser_parseStatement(self_);
while(ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())) {
const token_ = ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon());
result_ = ff_compiler_Syntax.ESequential(ff_compiler_Token.Token_at(token_), result_, ff_compiler_Parser.Parser_parseStatement(self_))
};
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
const term_ = ff_compiler_Parser.Parser_parseTerm(self_);
if((!ff_compiler_Token.Token_is5(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign(), ff_compiler_Token.LAssignPlus(), ff_compiler_Token.LAssignMinus(), ff_compiler_Token.LAssignMultiplication(), ff_compiler_Token.LAssignDivision()))) {
return term_
} else {
const token_ = ff_core_Core.do_((() => {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignPlus())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignPlus())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMinus())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMinus())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMultiplication())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMultiplication())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignDivision())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignDivision())
} else {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
}
}
}
}
}));
const operator_ = ff_core_String.String_dropLast(ff_compiler_Token.Token_raw(token_), 1);
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
{
const _1 = term_;
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_Syntax.EAssign(at_, operator_, name_, value_)
}
if(_1.EField) {
const e_ = _1;
return ff_compiler_Syntax.EAssignField(e_.at_, operator_, e_.record_, e_.field_, value_)
}
{
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Only variables and fields are assignable"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
return
}
}
}
}
}
}

export function Parser_parseLet(self_) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const mutableToken_ = ff_compiler_Parser.Parser_current(self_);
const mutable_ = ff_compiler_Token.Token_rawIs(mutableToken_, "mutable");
const keywordToken_ = (mutable_
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "mutable")
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "let"));
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const valueType_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))
? ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_))
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon()), ff_compiler_Parser.Parser_parseType(self_)));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign())))) {
const unit_ = ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", [], ff_core_Option.None());
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, unit_, unit_)
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.SLet(mutable_), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(mutableToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
const body_ = (ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())
? (ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon()), ff_compiler_Parser.Parser_parseStatements(self_))
: ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", [], ff_core_Option.None()));
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, value_, body_)
}
}

export function Parser_parseFunctions(self_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const functions_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function")) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const functionAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "function"));
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, false);
const body_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? (function() {
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(functionAt_, "TemporaryEffect$", []);
return ff_compiler_Syntax.Lambda(functionAt_, temporaryEffect_, [])
})()
: ff_compiler_Parser.Parser_parseLambda(self_, signature_.parameters_.length, false, false));
functions_.array.push(ff_compiler_Syntax.DFunction(signature_.at_, signature_, body_));
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(signature_.name_, ff_compiler_LspHook.SFunction(false), signature_.at_, (((_c) => {
return ff_compiler_Syntax.Location(_c.file_, _c.line_, (signature_.at_.column_ + signature_.name_.length))
}))(signature_.at_), functionAt_, ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())))) {

} else {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.EFunctions(at_, ff_core_Array.Array_toList(functions_, 0, 9007199254740991), body_)
}

export function Parser_parseTerm(self_) {
return ff_compiler_Parser.Parser_parseBinary(self_, 0)
}

export function Parser_parseBinary(self_, level_) {
if((level_ >= ff_compiler_Parser.binaryOperators_.length)) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "")
} else {
return ff_compiler_Parser.Parser_parseUnary(self_)
}
} else {
const operators_ = (ff_compiler_Parser.binaryOperators_[level_] ?? ff_core_List.List_grab(ff_compiler_Parser.binaryOperators_, level_));
let result_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
while(ff_core_List.List_any(operators_, ((value_) => {
return ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), value_)
}))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const right_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
const arguments_ = [ff_compiler_Syntax.Argument(result_.at_, ff_core_Option.None(), result_), ff_compiler_Syntax.Argument(right_.at_, ff_core_Option.None(), right_)];
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = (((_1) => {
if(_1 === "==") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.equals"), false)
}
if(_1 === "!=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.notEquals"), false)
}
if(_1 === "<") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.before"), false)
}
if(_1 === "<=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notAfter"), false)
}
if(_1 === ">") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.after"), false)
}
if(_1 === ">=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notBefore"), false)
}
if(_1 === "===") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/JsValue.JsValue_equals"), false)
}
if(_1 === "!==") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/JsValue.JsValue_notEquals"), false)
}
{
const o_ = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), o_), false)
}
}))(ff_compiler_Token.Token_raw(token_));
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, [], arguments_, [])
}
};
return result_
}
}

export function Parser_parseUnary(self_) {
if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUnary(), ff_compiler_Token.LOperator())) {
const token_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUnary())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUnary())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator()));
const term_ = ff_compiler_Parser.Parser_parseUnary(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_)), false);
return ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, [], [ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), term_)], [])
} else {
return ff_compiler_Parser.Parser_parseFieldsAndCalls(self_)
}
}

export function Parser_parseFieldsAndCalls(self_) {
const tailCall_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "tailcall"))
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()), true)
: false);
let result_ = ff_compiler_Parser.Parser_parseAtom(self_);
while(ff_compiler_Token.Token_is5(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketLeft(), ff_compiler_Token.LColon(), ff_compiler_Token.LDot(), ff_compiler_Token.LArrowThin(), ff_compiler_Token.LUnary())) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const term_ = ff_compiler_Parser.Parser_parseAtom(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, term_.at_);
result_ = ff_compiler_Syntax.EPipe(term_.at_, result_, effect_, term_)
} else if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper(), ff_compiler_Token.LNamespace())) {
result_ = ff_compiler_Parser.Parser_parseCopy(self_, result_)
} else {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThin())) {
result_ = ff_compiler_Parser.Parser_parseDynamicMember(self_, result_, false)
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUnary())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUnary());
const method_ = (ff_compiler_Token.Token_rawIs(token_, "!")
? "ff:core/Js.value"
: "ff:core/Js.fromValue");
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), method_), false);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, [], [ff_compiler_Syntax.Argument(result_.at_, ff_core_Option.None(), result_)], [])
} else {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, result_.at_, true);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_);
const target_ = ff_compiler_Syntax.DynamicCall(result_, tailCall_);
result_ = ff_compiler_Syntax.ECall(result_.at_, target_, effect_, typeArguments_, arguments_.first_, []);
if((arguments_.second_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
}
};
return result_
}

export function Parser_parseDynamicMember(self_, record_, isModule_) {
function recordField_(at_, name_) {
{
const _1 = record_;
if(_1.EVariant) {
const e_ = _1;
if(isModule_) {
return ff_compiler_Syntax.EVariable(at_, ((e_.name_ + ".") + name_))
}
}
{
return ff_compiler_Syntax.EField(at_, false, record_, name_)
}
}
}
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThin());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(token_), false);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
{
const _1 = ff_core_List.List_indexWhere(arguments_.first_, ((_w1) => {
return (!ff_core_Option.Option_isEmpty(_w1.name_))
}));
if(_1.None) {
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), ("new" + arguments_.first_.length)), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], arguments_.first_, [])
}
if(_1.Some && _1.value_ === 0) {
const objectTarget_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), "object"), false);
let result_ = ff_compiler_Syntax.ECall(record_.at_, objectTarget_, effect_, [], [], []);
for(let for_a = arguments_.first_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const argument_ = for_a[for_i];
if(ff_core_Option.Option_isEmpty(argument_.name_)) {
{
const _exception = ff_compiler_Syntax.CompileError(argument_.at_, "Expected a named argument"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, "with"), false);
result_ = ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(argument_.at_, ff_core_Option.None(), ff_compiler_Syntax.EString(argument_.at_, (("\"" + ff_core_Option.Option_grab(argument_.name_)) + "\""))), ff_compiler_Syntax.Argument(argument_.value_.at_, ff_core_Option.None(), argument_.value_)], [])
};
return result_
}
{
const i_ = _1.value_;
{
const _exception = ff_compiler_Syntax.CompileError((arguments_.first_[i_] ?? ff_core_List.List_grab(arguments_.first_, i_)).at_, "Unexpected named argument"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
return
}
}
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, false);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const arguments_ = ff_core_List.List_grabFirst(lambda_.cases_).patterns_.length;
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), ("function" + arguments_)), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(lambda_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(lambda_.at_, lambda_))], [])
} else {
const token_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString()));
const member_ = ff_compiler_Syntax.EString(ff_compiler_Token.Token_at(token_), (ff_compiler_Token.Token_is(token_, ff_compiler_Token.LString())
? ff_compiler_Token.Token_raw(token_)
: (("\"" + ff_compiler_Token.Token_raw(token_)) + "\"")));
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, record_.at_, false);
{
const if_o = ff_core_List.List_find(arguments_.first_, ((_w1) => {
return (!ff_core_Option.Option_isEmpty(_w1.name_))
}))
if(if_o.Some) {
const argument_ = if_o.value_;
{
const _exception = ff_compiler_Syntax.CompileError(argument_.at_, "Unexpected named argument"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), ("call" + arguments_.first_.length)), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(member_.at_, ff_core_Option.None(), member_), ...arguments_.first_], [])
} else if(ff_compiler_Token.Token_is5(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign(), ff_compiler_Token.LAssignPlus(), ff_compiler_Token.LAssignMinus(), ff_compiler_Token.LAssignMultiplication(), ff_compiler_Token.LAssignDivision())) {
const method_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign()), "set")
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignPlus())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignPlus()), "increment")
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMinus())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMinus()), "decrement")
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMultiplication())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMultiplication()), "multiply")
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignDivision()), "divide"));
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), method_), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(member_.at_, ff_core_Option.None(), member_), ff_compiler_Syntax.Argument(value_.at_, ff_core_Option.None(), value_)], [])
} else {
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), "get"), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(member_.at_, ff_core_Option.None(), member_)], [])
}
}
}

export function Parser_parseAtom(self_) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LString())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString());
return ff_compiler_Syntax.EString(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LChar())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LChar());
return ff_compiler_Syntax.EChar(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt());
return ff_compiler_Syntax.EInt(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LFloat())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LFloat());
return ff_compiler_Syntax.EFloat(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())) {
const namespaceToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace());
const extraNamespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ff_core_Option.None()
: ff_core_Option.Some(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))));
const prefix_ = (ff_compiler_Token.Token_raw(namespaceToken_) + ff_core_Option.Option_else(extraNamespace_, (() => {
return ""
})));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), (prefix_ + ff_compiler_Token.Token_raw(token_)))
} else {
return ff_compiler_Parser.Parser_parseVariant(self_, prefix_)
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LArrowThin()))) {
return ff_compiler_Parser.Parser_parseDynamicMember(self_, ff_compiler_Parser.Parser_parseVariant(self_, ""), true)
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper())) {
return ff_compiler_Parser.Parser_parseVariant(self_, "")
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, false);
return ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")) {
return ff_compiler_Parser.Parser_parseList(self_)
} else if(((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(") && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LAssign()))) {
return ff_compiler_Syntax.ERecord(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_compiler_Parser.Parser_parseRecord(self_, ff_core_Option.None()))
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
const result_ = ff_compiler_Parser.Parser_parseTerm(self_);
while((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LComma()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma());
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_parseTerm(self_)
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return result_
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.EWildcard(ff_compiler_Token.Token_at(token_), 0)
} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ("Expected atom, got " + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_current(self_)))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
}

export function Parser_parseVariant(self_, prefix_) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "?")) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
return ff_compiler_Syntax.EVariantIs(ff_compiler_Token.Token_at(token_), name_, typeArguments_)
} else {
const arguments_ = ff_core_Option.Some(ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(token_), true));
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(token_), name_, typeArguments_, ff_core_Option.Option_map(arguments_, ((_w1) => {
return _w1.first_
})))
}
}

export function Parser_parseCopy(self_, record_) {
const namespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ""
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace())));
const extraNamespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ""
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace())));
const prefix_ = (namespace_ + extraNamespace_);
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_));
const fields_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")))
? []
: ff_compiler_Parser.Parser_parseRecord(self_, ff_core_Option.Some(ff_compiler_Token.Token_at(token_))));
return ff_compiler_Syntax.ECopy(ff_compiler_Token.Token_at(token_), name_, record_, fields_)
}

export function Parser_parseRecord(self_, copyAt_) {
const fields_ = ff_core_Array.new_();
const startBracketAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "("));
const startAt_ = ff_core_Option.Option_else(copyAt_, (() => {
return startBracketAt_
}));
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const field_ = (((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign()), ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseTerm(self_)))
: ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_))));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, fields_.array.length, ff_core_Option.Option_filter(ff_core_Option.Some(field_.name_), ((_w1) => {
return (_w1 !== "")
}))));
self_.lspEmittedArgumentHook_ = true
}
};
fields_.array.push(field_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, fields_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Array.Array_toList(fields_, 0, 9007199254740991)
}

export function Parser_parseRecordType(self_) {
const fields_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LColon());
fields_.array.push(ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseType(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Array.Array_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function Parser_parseRecordPattern(self_) {
const fields_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
fields_.array.push(ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parsePattern(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Array.Array_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function Parser_parseListPattern(self_) {
function convertListPattern_(at_, items_) {
const at_a = at_;
const items_a = items_;
if(items_a.length === 0) {
return ff_compiler_Syntax.PVariant(at_, "List$Empty", [])
}
if(items_a.length >= 1 && !items_a[0].second_) {
const p_ = items_a[0].first_;
const ps_ = items_a.slice(1);
return ff_compiler_Syntax.PVariant(at_, "List$Link", [p_, convertListPattern_(at_, ps_)])
}
if(items_a.length === 1 && items_a[0].second_) {
const p_ = items_a[0].first_;
return p_
}
{
const p_ = items_a[0].first_;
{
const _exception = ff_compiler_Syntax.CompileError(p_.at_, "Invalid pattern: ... is only allowed for the last element in a list"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
return
}
}
const items_ = ff_core_Array.new_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
const pattern_ = ((spread_ && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))
? ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_core_Option.None())
: ff_compiler_Parser.Parser_parsePattern(self_));
items_.array.push(ff_core_Pair.Pair(pattern_, spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return convertListPattern_(at_, ff_core_Array.Array_toList(items_, 0, 9007199254740991))
}

export function Parser_parseList(self_) {
const items_ = ff_core_Array.new_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
items_.array.push(ff_core_Pair.Pair(ff_compiler_Parser.Parser_parseTerm(self_), spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Syntax.EList(at_, ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_), ff_core_Array.Array_toList(items_, 0, 9007199254740991))
}

export async function Parser_fail$(self_, at_, message_, $task) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function Parser_behind$(self_, $task) {
if((self_.offset_ === 0)) {
return ff_compiler_Parser.Parser_current(self_)
} else {
if(((self_.offset_ - 1) < self_.tokens_.length)) {
return ff_core_List.List_grab(self_.tokens_, (self_.offset_ - 1))
} else {
return self_.end_
}
}
}

export async function Parser_current$(self_, $task) {
if((self_.offset_ < self_.tokens_.length)) {
return (self_.tokens_[self_.offset_] ?? ff_core_List.List_grab(self_.tokens_, self_.offset_))
} else {
return self_.end_
}
}

export async function Parser_ahead$(self_, $task) {
if(((self_.offset_ + 1) < self_.tokens_.length)) {
return ff_core_List.List_grab(self_.tokens_, (self_.offset_ + 1))
} else {
return self_.end_
}
}

export async function Parser_aheadAhead$(self_, $task) {
if(((self_.offset_ + 2) < self_.tokens_.length)) {
return ff_core_List.List_grab(self_.tokens_, (self_.offset_ + 2))
} else {
return self_.end_
}
}

export async function Parser_skip$(self_, kind_, $task) {
const c_ = ff_compiler_Parser.Parser_current(self_);
if(ff_core_Equal.notEquals_(c_.kind_, kind_, ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind)) {
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(kind_, ff_compiler_Token.LUpper())) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(c_.kind_, ff_compiler_Token.LLower()))) {

} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + ", got ") + ff_compiler_Token.Token_raw(c_))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
self_.offset_ += 1;
return c_
}

export async function Parser_rawSkip$(self_, kind_, value_, $task) {
const c_ = ff_compiler_Parser.Parser_current(self_);
if(ff_core_Equal.notEquals_(c_.kind_, kind_, ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind)) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((value_ === ")") || (value_ === "]")) || (value_ === "}")))) {

} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + " ") + value_) + ", got ") + ff_compiler_Token.Token_raw(c_))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
if((!ff_compiler_Token.Token_rawIs(c_, value_))) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((value_ === ")") || (value_ === "]")) || (value_ === "}")))) {
self_.offset_ -= 1
} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + value_) + " got ") + ff_compiler_Token.Token_raw(c_))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
self_.offset_ += 1;
return c_
}

export async function Parser_freshUnificationVariable$(self_, at_, $task) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextUnificationVariableIndex_);
self_.nextUnificationVariableIndex_ += 3;
return result_
}

export async function Parser_currentIsSeparator$(self_, kind_, $task) {
return (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), kind_) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSeparator()))
}

export async function Parser_skipSeparator$(self_, kind_, $task) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSeparator())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LSeparator())
} else {
return ff_compiler_Parser.Parser_skip(self_, kind_)
}
}

export async function Parser_parseModuleWithoutPackageInfo$(self_, $task) {
const moduleWithPackageInfo_ = ff_compiler_Parser.Parser_parseModuleWithPackageInfo(self_);
{
const if_o = moduleWithPackageInfo_.packageInfo_
if(if_o.Some) {
const info_ = if_o.value_;
{
const _exception = ff_compiler_Syntax.CompileError(info_.package_.at_, "Package and dependencies already declared in package.ff"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
return moduleWithPackageInfo_.module_
}

export async function Parser_parseModuleWithPackageInfo$(self_, $task) {
const packageInfo_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs3(ff_compiler_Parser.Parser_current(self_), "package", "dependency", "include"))
? ff_core_Option.Some(ff_compiler_Parser.Parser_parsePackageInfo(self_))
: ff_core_Option.None());
const module_ = ff_compiler_Parser.Parser_parseModule(self_);
return ff_compiler_Syntax.ModuleWithPackageInfo(packageInfo_, module_)
}

export async function Parser_parsePackageInfo$(self_, $task) {
const location_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const package_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))
? (await (async function() {
const p_ = ff_compiler_Parser.Parser_parsePackageDefinition(self_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
};
return p_
})())
: ff_compiler_Syntax.DPackage(location_, self_.moduleKey_.packagePair_, ff_compiler_Syntax.Version(location_, 0, 0, 0), ff_compiler_Syntax.TargetNames(self_.targetIsNode_, (!self_.targetIsNode_))));
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Duplicate package definition"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
const dependencies_ = ff_core_Array.new_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
dependencies_.array.push(ff_compiler_Parser.Parser_parseDependencyDefinition(self_, package_.targets_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const includes_ = ff_core_Array.new_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
includes_.array.push(ff_compiler_Parser.Parser_parseIncludeDefinition(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.PackageInfo(package_, ff_core_Array.Array_toList(dependencies_, 0, 9007199254740991), ff_core_Array.Array_toList(includes_, 0, 9007199254740991))
}

export async function Parser_parseModule$(self_, $task) {
const imports_ = ff_core_Array.new_();
const types_ = ff_core_Array.new_();
const traits_ = ff_core_Array.new_();
const instances_ = ff_core_Array.new_();
const extends_ = ff_core_Array.new_();
const lets_ = ff_core_Array.new_();
const functions_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LColon())))) {
lets_.array.push(ff_compiler_Parser.Parser_parseLetDefinition(self_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
functions_.array.push(ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "extend"))) {
extends_.array.push(ff_compiler_Parser.Parser_parseExtendDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trait"))) {
traits_.array.push(ff_compiler_Parser.Parser_parseTraitDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "instance"))) {
instances_.array.push(ff_compiler_Parser.Parser_parseInstanceDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs4(ff_compiler_Parser.Parser_current(self_), "data", "class", "capability", "newtype"))) {
types_.array.push(ff_compiler_Parser.Parser_parseTypeDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "import"))) {
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LDot())))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
} else {
imports_.array.push(ff_compiler_Parser.Parser_parseImportDefinition(self_, self_.moduleKey_.packagePair_))
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Includes must be at the top of the file or below 'package'"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Dependencies must be at the top of the file or below 'package'"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Package definition must be at the top of the file"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LEnd())
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.Module(self_.moduleKey_, ff_core_Array.Array_toList(imports_, 0, 9007199254740991), ff_core_Array.Array_toList(types_, 0, 9007199254740991), ff_core_Array.Array_toList(traits_, 0, 9007199254740991), ff_core_Array.Array_toList(instances_, 0, 9007199254740991), ff_core_Array.Array_toList(extends_, 0, 9007199254740991), ff_core_Array.Array_toList(lets_, 0, 9007199254740991), ff_core_Array.Array_toList(functions_, 0, 9007199254740991))
}

export async function Parser_parseLetDefinition$(self_, $task) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const variableType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon()), ff_compiler_Parser.Parser_parseType(self_))
: ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_)));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
const retult_ = ff_compiler_Syntax.DLet(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), variableType_, value_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.SLet(false), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return retult_
}

export async function Parser_parseFunctionDefinition$(self_, member_, $task) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, member_);
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, signature_.parameters_.length, false, false);
const result_ = ff_compiler_Syntax.DFunction(signature_.at_, signature_, body_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(signature_.name_, ff_compiler_LspHook.SFunction(member_), signature_.at_, (((_c) => {
return ff_compiler_Syntax.Location(_c.file_, _c.line_, (signature_.at_.column_ + signature_.name_.length))
}))(signature_.at_), signature_.at_, ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return result_
}

export async function Parser_parseSignature$(self_, member_, $task) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly([], []));
const parameters_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const returnType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon()), ff_compiler_Parser.Parser_parseType(self_))
: ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "ff:core/Unit.Unit", []));
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(nameToken_), "TemporaryEffect$", []);
return ff_compiler_Syntax.Signature(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), member_, poly_.generics_, poly_.constraints_, parameters_, returnType_, temporaryEffect_)
}

export async function Parser_parseExtendDefinition$(self_, $task) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const extendToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "extend");
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly([], []));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const type_ = ff_compiler_Parser.Parser_parseType(self_);
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const methods_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
methods_.array.push(ff_compiler_Parser.Parser_parseFunctionDefinition(self_, true));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
if(self_.lspHook_.trackSymbols_) {
let name_ = ff_compiler_Syntax.Type_show(type_, []);
for(let for_a = poly_.generics_, for_i = 0, for_l = for_a.length, for_a2 = poly_.constraints_, for_i2 = 0, for_l2 = for_a2.length; for_i < for_l && for_i2 < for_l2; for_i++, for_i2++) {
const generic_ = for_a[for_i];
const constraint_ = for_a2[for_i2];
name_ = ff_core_String.String_replace(name_, (("[" + generic_) + "]"), (((("[" + generic_) + ": ") + constraint_.name_) + "]"));
name_ = ff_core_String.String_replace(name_, (("[" + generic_) + ","), (((("[" + generic_) + ": ") + constraint_.name_) + ","));
name_ = ff_core_String.String_replace(name_, ((", " + generic_) + ","), ((((", " + generic_) + ": ") + constraint_.name_) + ","));
name_ = ff_core_String.String_replace(name_, ((", " + generic_) + "]"), ((((", " + generic_) + ": ") + constraint_.name_) + "]"))
};
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(name_, ff_compiler_LspHook.SExtend(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(extendToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return ff_compiler_Syntax.DExtend(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, type_, ff_core_Array.Array_toList(methods_, 0, 9007199254740991))
}

export async function Parser_parseTraitDefinition$(self_, $task) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const traitToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "trait");
const typeParameterToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly([], [])
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const constraints_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Trait constraints is not yet implemented");
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
constraints_.array.push((((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, [ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(typeParameterToken_), ff_compiler_Token.Token_raw(typeParameterToken_), []), ...constraint_.generics_])
}))(constraint_))
};
const generatorParameters_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const methodGenerators_ = ff_core_Array.new_();
const methodDefaults_ = ff_core_Array.new_();
const methodSignatures_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? []
: (await (async function() {
const signatures_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const signatureNameToken_ = ff_compiler_Parser.Parser_current(self_);
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, true);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(signatureNameToken_), ff_compiler_LspHook.STraitFunction(), ff_compiler_Token.Token_at(signatureNameToken_), ff_compiler_Token.Token_end(signatureNameToken_), ff_compiler_Token.Token_at(signatureNameToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
signatures_.array.push(signature_);
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const generator_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), "generate"));
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, signature_.parameters_.length, true, false);
if(generator_) {
methodGenerators_.array.push(ff_core_Pair.Pair(signature_.name_, body_))
} else {
methodDefaults_.array.push(ff_core_Pair.Pair(signature_.name_, body_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Array.Array_toList(signatures_, 0, 9007199254740991)
})()));
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.STrait(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(traitToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return ff_compiler_Syntax.DTrait(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), [ff_compiler_Token.Token_raw(typeParameterToken_), ...poly_.generics_], [...ff_core_Array.Array_toList(constraints_, 0, 9007199254740991), ...poly_.constraints_], generatorParameters_, methodSignatures_, ff_core_Array.Array_toList(methodDefaults_, 0, 9007199254740991), ff_core_Array.Array_toList(methodGenerators_, 0, 9007199254740991))
}

export async function Parser_parseInstanceDefinition$(self_, $task) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const instanceToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "instance");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly([], [])
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const typeArguments_ = ff_core_Array.new_();
typeArguments_.array.push(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.List_map(poly_.generics_, ((_w1) => {
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), _w1, [])
}))));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
typeArguments_.array.push(ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
};
const generatorArguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(nameToken_), false).first_;
const methods_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? []
: (await (async function() {
const definitions_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
definitions_.array.push(ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Array.Array_toList(definitions_, 0, 9007199254740991)
})()));
if(self_.lspHook_.trackSymbols_) {
const name_ = ((ff_compiler_Token.Token_raw(token_) + ": ") + ff_compiler_Token.Token_raw(nameToken_));
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(name_, ff_compiler_LspHook.SInstance(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(instanceToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return ff_compiler_Syntax.DInstance(ff_compiler_Token.Token_at(nameToken_), poly_.generics_, poly_.constraints_, ff_compiler_Token.Token_raw(nameToken_), ff_core_Array.Array_toList(typeArguments_, 0, 9007199254740991), generatorArguments_, methods_, false)
}

export async function Parser_parseTypeDefinition$(self_, $task) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const newtype_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype");
const effectParameter_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "capability")
? ["Q$"]
: []);
const allowMutable_ = ff_compiler_Token.Token_rawIs2(ff_compiler_Parser.Parser_current(self_), "class", "capability");
const kindToken_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype")
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "newtype")
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "data")
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "data")
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "class")
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "class")
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "capability"));
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly([], [])
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
if(((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
};
const commonFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
const variants_ = ((newtype_ || (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? [ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), [])]
: (await (async function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const variantsBuilder_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const variantNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const variantFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? []
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
if(((!allowMutable_) && ff_core_List.List_any(variantFields_, ((_w1) => {
return _w1.mutable_
})))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(variantFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes can have mutable fields"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
variantsBuilder_.array.push(ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_raw(variantNameToken_), variantFields_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
};
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(variantNameToken_), ff_compiler_LspHook.SVariant(), ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_end(variantNameToken_), ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Array.Array_toList(variantsBuilder_, 0, 9007199254740991)
})()));
if((newtype_ && (commonFields_.length !== 1))) {
ff_core_Log.show_(commonFields_, ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter));
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(nameToken_), "Newtypes must have exactly one field"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
if(((!allowMutable_) && ff_core_List.List_any(commonFields_, ((_w1) => {
return _w1.mutable_
})))) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(commonFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes and capabilities can have mutable fields"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
const generics_ = [...effectParameter_, ...poly_.generics_];
const result_ = ff_compiler_Syntax.DType(ff_compiler_Token.Token_at(nameToken_), newtype_, (!allowMutable_), ff_compiler_Token.Token_raw(nameToken_), generics_, poly_.constraints_, commonFields_, variants_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.SType(), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(kindToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
return result_
}

export async function Parser_parseImportDefinition$(self_, currentPackagePair_, $task) {
const importToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "import");
const path_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
path_.array.push(ff_compiler_Parser.Parser_parseDashedName(self_));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot())
};
const fileToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const alias_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "as")
? (ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "as"), ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())))
: ff_compiler_Token.Token_raw(fileToken_));
const packagePair_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "from")
? (await (async function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "from");
const userName_ = ff_compiler_Parser.Parser_parseDashedName(self_);
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const packageName_ = ff_compiler_Parser.Parser_parseDashedName(self_);
return ff_compiler_Syntax.PackagePair(userName_, packageName_)
})())
: currentPackagePair_);
return ff_compiler_Syntax.DImport(ff_compiler_Token.Token_at(fileToken_), alias_, ff_compiler_Syntax.ModuleKey(packagePair_, ff_core_Array.Array_toList(path_, 0, 9007199254740991), ff_compiler_Token.Token_raw(fileToken_)))
}

export async function Parser_parsePackageDefinition$(self_, $task) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const user_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const name_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const version_ = ff_compiler_Parser.Parser_parseVersion(self_);
const targets_ = ff_compiler_Parser.Parser_parseTargetNames(self_, ff_compiler_Syntax.TargetNames(true, true));
return ff_compiler_Syntax.DPackage(at_, ff_compiler_Syntax.PackagePair(user_, name_), version_, targets_)
}

export async function Parser_parseDependencyDefinition$(self_, defaultTargetNames_, $task) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const user_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const name_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const version_ = ff_compiler_Parser.Parser_parseVersion(self_);
const safety_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trusted")
? ff_compiler_Syntax.Trusted()
: (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "unsafe")
? ff_compiler_Syntax.Unsafe()
: ff_compiler_Syntax.Safe()));
const targets_ = ff_compiler_Parser.Parser_parseTargetNames(self_, defaultTargetNames_);
return ff_compiler_Syntax.DDependency(at_, ff_compiler_Syntax.PackagePair(user_, name_), version_, safety_, targets_)
}

export async function Parser_parseIncludeDefinition$(self_, $task) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const path_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString()));
return ff_compiler_Syntax.DInclude(at_, ff_core_String.String_dropLast(ff_core_String.String_dropFirst(path_, 1), 1))
}

export async function Parser_parseTargetNames$(self_, defaultTargets_, $task) {
let targets_ = ff_compiler_Syntax.TargetNames(false, false);
while(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword(), ff_compiler_Token.LLower())) {
const token_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
do {
const _1 = ff_compiler_Token.Token_raw(token_);
if(_1 === "node" && targets_.node_) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
break
}
if(_1 === "node") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(true, _c.browser_)
}))(targets_)
break
}
if(_1 === "browser" && targets_.browser_) {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
break
}
if(_1 === "browser") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(_c.node_, true)
}))(targets_)
break
}
{
const t_ = _1;
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), ("Unexpected target: " + t_)); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
} while(false)
};
if(((!targets_.node_) && (!targets_.browser_))) {
return defaultTargets_
} else {
return targets_
}
}

export async function Parser_parseVersion$(self_, $task) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LFloat())) {
const majorMinor_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LFloat());
const parts_ = ff_core_String.String_split(ff_compiler_Token.Token_raw(majorMinor_), 46);
const patch_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot()), ff_core_String.String_grabInt(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt()))))
: 0);
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(majorMinor_), ff_core_String.String_grabInt((parts_[0] ?? ff_core_List.List_grab(parts_, 0))), ff_core_String.String_grabInt((parts_[1] ?? ff_core_List.List_grab(parts_, 1))), patch_)
} else {
const major_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt());
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(major_), ff_core_String.String_grabInt(ff_compiler_Token.Token_raw(major_)), 0, 0)
}
}

export async function Parser_parseDashedName$(self_, $task) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
function readPart_() {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())) {
const prefix_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt()));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
return (prefix_ + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())))
} else {
return prefix_
}
} else {
return ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()))
}
}
let part_ = readPart_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "-")) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
part_ = ((part_ + "-") + readPart_())
};
if(ff_core_String.String_any(part_, ((_w1) => {
return ff_core_Char.Char_isAsciiUpper(_w1)
}))) {
{
const _exception = ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain upper case letters: " + part_)); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
if((ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 95)
})) || ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 46)
})))) {
{
const _exception = ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain underscores or dots: " + part_)); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
return part_
}

export async function Parser_parseTypeParameters$(self_, $task) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
const parameters_ = ff_core_Array.new_();
const constraints_ = ff_core_Array.new_();
while(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSemicolon())))) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LBracketLeft())) {
constraints_.array.push(ff_compiler_Parser.Parser_parseConstraint(self_))
} else {
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
parameters_.array.push(ff_compiler_Token.Token_raw(parameterNameToken_));
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
constraints_.array.push((((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, [ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), ff_compiler_Token.Token_raw(parameterNameToken_), []), ...constraint_.generics_])
}))(constraint_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Parser.Poly(ff_core_Array.Array_toList(parameters_, 0, 9007199254740991), ff_core_Array.Array_toList(constraints_, 0, 9007199254740991))
}

export async function Parser_parseTypeArguments$(self_, parenthesis_ = false, $task) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), (parenthesis_
? "("
: "["));
const types_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
types_.array.push(ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), (parenthesis_
? ")"
: "]"));
return ff_core_Array.Array_toList(types_, 0, 9007199254740991)
}

export async function Parser_parseFunctionParameters$(self_, allowMutable_ = false, $task) {
const parameters_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const lspTrackSymbols_ = (self_.lspHook_.trackSymbols_ && allowMutable_);
if(lspTrackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const lspFirst_ = ff_compiler_Parser.Parser_current(self_);
const mutable_ = ((allowMutable_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable"));
if(mutable_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
};
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())))) {
const t_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), "ff:core/Nothing.Nothing", []);
parameters_.array.push(ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), t_, ff_core_Option.None()));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const parameterType_ = ff_compiler_Parser.Parser_parseType(self_);
const default_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? ff_core_Option.None()
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign()), ff_core_Option.Some(ff_compiler_Parser.Parser_parseTerm(self_))));
parameters_.array.push(ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), parameterType_, default_));
if(lspTrackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(parameterNameToken_), ff_compiler_LspHook.SParameter(), ff_compiler_Token.Token_at(parameterNameToken_), ff_compiler_Token.Token_end(parameterNameToken_), ff_compiler_Token.Token_at(lspFirst_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Array.Array_toList(parameters_, 0, 9007199254740991)
}

export async function Parser_parseFunctionArguments$(self_, callAt_, trailing_, $task) {
const arguments_ = ff_core_Array.new_();
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const argumentToken_ = ff_compiler_Parser.Parser_current(self_);
const nameToken_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()))
? (await (async function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
return ff_core_Option.Some(token_)
})())
: ff_core_Option.None());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
}))));
self_.lspEmittedArgumentHook_ = true
}
};
arguments_.array.push(ff_compiler_Syntax.Argument(ff_compiler_Token.Token_at(argumentToken_), ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
})), value_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")")
};
let lastWasCurly_ = false;
if(trailing_) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower(), ff_compiler_Token.LUpper(), ff_compiler_Token.LString()) || ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt(), ff_compiler_Token.LChar(), ff_compiler_Token.LFloat())))) {
lastWasCurly_ = true;
const term_ = ff_compiler_Parser.Parser_parseTerm(self_);
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(term_.at_, "TemporaryEffect$", []);
const cases_ = [ff_compiler_Syntax.MatchCase(term_.at_, [], [], term_)];
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
arguments_.array.push(ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(term_.at_, ff_compiler_Syntax.Lambda(term_.at_, temporaryEffect_, cases_))))
} else {
while((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{") || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))) {
lastWasCurly_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{");
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, true);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, arguments_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
arguments_.array.push(ff_compiler_Syntax.Argument(lambda_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)))
}
}
};
return ff_core_Pair.Pair(ff_core_Array.Array_toList(arguments_, 0, 9007199254740991), lastWasCurly_)
}

export async function Parser_parseLambda$(self_, defaultParameterCount_ = 0, ignoreGenerateKeyword_ = false, allowColon_ = false, $task) {
const colon_ = (allowColon_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()));
const token_ = (colon_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{"));
if(((ignoreGenerateKeyword_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "generate"))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
};
const result_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())
? (await (async function() {
const cases_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())) {
cases_.array.push(ff_compiler_Parser.Parser_parseCase(self_))
};
return ff_core_Array.Array_toList(cases_, 0, 9007199254740991)
})())
: (ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower(), ff_compiler_Token.LWildcard()) && ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LComma(), ff_compiler_Token.LArrowThick()))
? (await (async function() {
const parameters_ = ff_core_Array.new_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
const isVariable_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower());
const parameterToken_ = (isVariable_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard()));
parameters_.array.push(ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(parameterToken_), (isVariable_
? ff_core_Option.Some(ff_compiler_Token.Token_raw(parameterToken_))
: ff_core_Option.None())));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
return [ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Array.Array_toList(parameters_, 0, 9007199254740991), [], term_)]
})())
: (await (async function() {
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const wildcards_ = ff_compiler_Wildcards.new_();
const e_ = ff_compiler_Wildcards.Wildcards_fixWildcards(wildcards_, term_);
const arguments_ = ((wildcards_.seenWildcards_ !== 0)
? ff_core_List.List_map(ff_core_List.range_(wildcards_.seenWildcards_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(("_w" + (i_ + 1))))
}))
: ff_core_List.List_map(ff_core_List.range_(defaultParameterCount_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})));
return [ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), arguments_, [], e_)]
})()));
if((!colon_)) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
};
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), "TemporaryEffect$", []);
return ff_compiler_Syntax.Lambda(ff_compiler_Token.Token_at(token_), temporaryEffect_, result_)
}

export async function Parser_parseCase$(self_, $task) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe());
const patterns_ = ff_core_Array.new_();
while(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
patterns_.array.push(ff_compiler_Parser.Parser_parsePattern(self_));
if(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
const guards_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
guards_.array.push(ff_compiler_Parser.Parser_parseCaseGuard(self_))
};
if(((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick())
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Array.Array_toList(patterns_, 0, 9007199254740991), ff_core_Array.Array_toList(guards_, 0, 9007199254740991), body_)
}

export async function Parser_parseCaseGuard$(self_, $task) {
const guardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketLeft());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const p_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe()))
? ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(guardToken_), "True", [])
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe()), ff_compiler_Parser.Parser_parsePattern(self_)));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketRight());
return ff_compiler_Syntax.MatchGuard(ff_compiler_Token.Token_at(guardToken_), term_, p_)
}

export async function Parser_parsePattern$(self_, $task) {
const pattern_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())
? (await (async function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})())
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? (await (async function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(ff_compiler_Token.Token_raw(token_)))
})())
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? (await (async function() {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const pair_ = ff_core_List.List_unzip(ff_compiler_Parser.Parser_parseRecordPattern(self_));
return ff_compiler_Syntax.PVariant(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_)
})())
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseListPattern(self_)
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LString())
? (await (async function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString());
return ff_compiler_Syntax.PString(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
})())
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())
? (await (async function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt());
return ff_compiler_Syntax.PInt(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
})())
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LChar())
? (await (async function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LChar());
return ff_compiler_Syntax.PChar(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
})())
: (await (async function() {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
const patterns_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const pattern_ = ff_compiler_Parser.Parser_parsePattern(self_);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), patterns_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
patterns_.array.push(pattern_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), patterns_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_Array.Array_toList(patterns_, 0, 9007199254740991))
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(asToken_), ff_core_Option.Some(ff_compiler_Token.Token_raw(asToken_)))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
const wildcardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(wildcardToken_), ff_core_Option.None())
} else {
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), [])
}
}
})()));
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "@")) {
const atToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PAlias(ff_compiler_Token.Token_at(asToken_), pattern_, ff_compiler_Token.Token_raw(asToken_))
} else {
return pattern_
}
}

export async function Parser_parseType$(self_, $task) {
const leftTypes_ = (((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(") && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LColon()))
? (await (async function() {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const pair_ = ff_core_List.List_unzip(ff_compiler_Parser.Parser_parseRecordType(self_));
return [ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_)]
})())
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? ff_compiler_Parser.Parser_parseTypeArguments(self_, true)
: (await (async function() {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return [ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_)]
})()));
if(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick())) && (leftTypes_.length === 1))) {
return ff_core_List.List_grabFirst(leftTypes_)
} else {
const arrowToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const rightType_ = ff_compiler_Parser.Parser_parseType(self_);
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(arrowToken_), ("Function$" + leftTypes_.length), [...leftTypes_, rightType_])
}
}

export async function Parser_parseConstraint$(self_, $task) {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return ff_compiler_Syntax.Constraint(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_)
}

export async function Parser_parseStatements$(self_, $task) {
if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight(), ff_compiler_Token.LPipe())) {
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Unit", [], ff_core_Option.None())
} else {
let result_ = ff_compiler_Parser.Parser_parseStatement(self_);
while(ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())) {
const token_ = ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon());
result_ = ff_compiler_Syntax.ESequential(ff_compiler_Token.Token_at(token_), result_, ff_compiler_Parser.Parser_parseStatement(self_))
};
return result_
}
}

export async function Parser_parseStatement$(self_, $task) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "let") || ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable")))) {
return ff_compiler_Parser.Parser_parseLet(self_)
} else {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function"))) {
return ff_compiler_Parser.Parser_parseFunctions(self_)
} else {
const term_ = ff_compiler_Parser.Parser_parseTerm(self_);
if((!ff_compiler_Token.Token_is5(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign(), ff_compiler_Token.LAssignPlus(), ff_compiler_Token.LAssignMinus(), ff_compiler_Token.LAssignMultiplication(), ff_compiler_Token.LAssignDivision()))) {
return term_
} else {
const token_ = ff_core_Core.do_((() => {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignPlus())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignPlus())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMinus())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMinus())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMultiplication())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMultiplication())
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignDivision())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignDivision())
} else {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign())
}
}
}
}
}));
const operator_ = ff_core_String.String_dropLast(ff_compiler_Token.Token_raw(token_), 1);
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
{
const _1 = term_;
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_Syntax.EAssign(at_, operator_, name_, value_)
}
if(_1.EField) {
const e_ = _1;
return ff_compiler_Syntax.EAssignField(e_.at_, operator_, e_.record_, e_.field_, value_)
}
{
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Only variables and fields are assignable"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
return
}
}
}
}
}
}

export async function Parser_parseLet$(self_, $task) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const mutableToken_ = ff_compiler_Parser.Parser_current(self_);
const mutable_ = ff_compiler_Token.Token_rawIs(mutableToken_, "mutable");
const keywordToken_ = (mutable_
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "mutable")
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "let"));
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const valueType_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))
? ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_))
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon()), ff_compiler_Parser.Parser_parseType(self_)));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign())))) {
const unit_ = ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", [], ff_core_Option.None());
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, unit_, unit_)
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(ff_compiler_Token.Token_raw(nameToken_), ff_compiler_LspHook.SLet(mutable_), ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_end(nameToken_), ff_compiler_Token.Token_at(mutableToken_), ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
const body_ = (ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())
? (ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon()), ff_compiler_Parser.Parser_parseStatements(self_))
: ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", [], ff_core_Option.None()));
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, value_, body_)
}
}

export async function Parser_parseFunctions$(self_, $task) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const functions_ = ff_core_Array.new_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function")) {
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolBegin())
};
const functionAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "function"));
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, false);
const body_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? (await (async function() {
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(functionAt_, "TemporaryEffect$", []);
return ff_compiler_Syntax.Lambda(functionAt_, temporaryEffect_, [])
})())
: ff_compiler_Parser.Parser_parseLambda(self_, signature_.parameters_.length, false, false));
functions_.array.push(ff_compiler_Syntax.DFunction(signature_.at_, signature_, body_));
if(self_.lspHook_.trackSymbols_) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseSymbolEnd(signature_.name_, ff_compiler_LspHook.SFunction(false), signature_.at_, (((_c) => {
return ff_compiler_Syntax.Location(_c.file_, _c.line_, (signature_.at_.column_ + signature_.name_.length))
}))(signature_.at_), functionAt_, ff_compiler_Token.Token_end(ff_compiler_Parser.Parser_behind(self_))))
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())))) {

} else {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.EFunctions(at_, ff_core_Array.Array_toList(functions_, 0, 9007199254740991), body_)
}

export async function Parser_parseTerm$(self_, $task) {
return ff_compiler_Parser.Parser_parseBinary(self_, 0)
}

export async function Parser_parseBinary$(self_, level_, $task) {
if((level_ >= ff_compiler_Parser.binaryOperators_.length)) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "")
} else {
return ff_compiler_Parser.Parser_parseUnary(self_)
}
} else {
const operators_ = (ff_compiler_Parser.binaryOperators_[level_] ?? ff_core_List.List_grab(ff_compiler_Parser.binaryOperators_, level_));
let result_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
while(ff_core_List.List_any(operators_, ((value_) => {
return ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), value_)
}))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const right_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
const arguments_ = [ff_compiler_Syntax.Argument(result_.at_, ff_core_Option.None(), result_), ff_compiler_Syntax.Argument(right_.at_, ff_core_Option.None(), right_)];
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = (((_1) => {
if(_1 === "==") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.equals"), false)
}
if(_1 === "!=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.notEquals"), false)
}
if(_1 === "<") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.before"), false)
}
if(_1 === "<=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notAfter"), false)
}
if(_1 === ">") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.after"), false)
}
if(_1 === ">=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notBefore"), false)
}
if(_1 === "===") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/JsValue.JsValue_equals"), false)
}
if(_1 === "!==") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/JsValue.JsValue_notEquals"), false)
}
{
const o_ = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), o_), false)
}
}))(ff_compiler_Token.Token_raw(token_));
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, [], arguments_, [])
}
};
return result_
}
}

export async function Parser_parseUnary$(self_, $task) {
if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUnary(), ff_compiler_Token.LOperator())) {
const token_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUnary())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUnary())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator()));
const term_ = ff_compiler_Parser.Parser_parseUnary(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_)), false);
return ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, [], [ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), term_)], [])
} else {
return ff_compiler_Parser.Parser_parseFieldsAndCalls(self_)
}
}

export async function Parser_parseFieldsAndCalls$(self_, $task) {
const tailCall_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "tailcall"))
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()), true)
: false);
let result_ = ff_compiler_Parser.Parser_parseAtom(self_);
while(ff_compiler_Token.Token_is5(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketLeft(), ff_compiler_Token.LColon(), ff_compiler_Token.LDot(), ff_compiler_Token.LArrowThin(), ff_compiler_Token.LUnary())) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const term_ = ff_compiler_Parser.Parser_parseAtom(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, term_.at_);
result_ = ff_compiler_Syntax.EPipe(term_.at_, result_, effect_, term_)
} else if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper(), ff_compiler_Token.LNamespace())) {
result_ = ff_compiler_Parser.Parser_parseCopy(self_, result_)
} else {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThin())) {
result_ = ff_compiler_Parser.Parser_parseDynamicMember(self_, result_, false)
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUnary())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUnary());
const method_ = (ff_compiler_Token.Token_rawIs(token_, "!")
? "ff:core/Js.value"
: "ff:core/Js.fromValue");
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), method_), false);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, [], [ff_compiler_Syntax.Argument(result_.at_, ff_core_Option.None(), result_)], [])
} else {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, result_.at_, true);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_);
const target_ = ff_compiler_Syntax.DynamicCall(result_, tailCall_);
result_ = ff_compiler_Syntax.ECall(result_.at_, target_, effect_, typeArguments_, arguments_.first_, []);
if((arguments_.second_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
}
};
return result_
}

export async function Parser_parseDynamicMember$(self_, record_, isModule_, $task) {
function recordField_(at_, name_) {
{
const _1 = record_;
if(_1.EVariant) {
const e_ = _1;
if(isModule_) {
return ff_compiler_Syntax.EVariable(at_, ((e_.name_ + ".") + name_))
}
}
{
return ff_compiler_Syntax.EField(at_, false, record_, name_)
}
}
}
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThin());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(token_), false);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
{
const _1 = ff_core_List.List_indexWhere(arguments_.first_, ((_w1) => {
return (!ff_core_Option.Option_isEmpty(_w1.name_))
}));
if(_1.None) {
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), ("new" + arguments_.first_.length)), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], arguments_.first_, [])
}
if(_1.Some && _1.value_ === 0) {
const objectTarget_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), "object"), false);
let result_ = ff_compiler_Syntax.ECall(record_.at_, objectTarget_, effect_, [], [], []);
for(let for_a = arguments_.first_, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const argument_ = for_a[for_i];
if(ff_core_Option.Option_isEmpty(argument_.name_)) {
{
const _exception = ff_compiler_Syntax.CompileError(argument_.at_, "Expected a named argument"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, "with"), false);
result_ = ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(argument_.at_, ff_core_Option.None(), ff_compiler_Syntax.EString(argument_.at_, (("\"" + ff_core_Option.Option_grab(argument_.name_)) + "\""))), ff_compiler_Syntax.Argument(argument_.value_.at_, ff_core_Option.None(), argument_.value_)], [])
};
return result_
}
{
const i_ = _1.value_;
{
const _exception = ff_compiler_Syntax.CompileError((arguments_.first_[i_] ?? ff_core_List.List_grab(arguments_.first_, i_)).at_, "Unexpected named argument"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
return
}
}
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, false);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const arguments_ = ff_core_List.List_grabFirst(lambda_.cases_).patterns_.length;
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), ("function" + arguments_)), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(lambda_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(lambda_.at_, lambda_))], [])
} else {
const token_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString()));
const member_ = ff_compiler_Syntax.EString(ff_compiler_Token.Token_at(token_), (ff_compiler_Token.Token_is(token_, ff_compiler_Token.LString())
? ff_compiler_Token.Token_raw(token_)
: (("\"" + ff_compiler_Token.Token_raw(token_)) + "\"")));
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, record_.at_, false);
{
const if_o = ff_core_List.List_find(arguments_.first_, ((_w1) => {
return (!ff_core_Option.Option_isEmpty(_w1.name_))
}))
if(if_o.Some) {
const argument_ = if_o.value_;
{
const _exception = ff_compiler_Syntax.CompileError(argument_.at_, "Unexpected named argument"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
};
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), ("call" + arguments_.first_.length)), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(member_.at_, ff_core_Option.None(), member_), ...arguments_.first_], [])
} else if(ff_compiler_Token.Token_is5(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign(), ff_compiler_Token.LAssignPlus(), ff_compiler_Token.LAssignMinus(), ff_compiler_Token.LAssignMultiplication(), ff_compiler_Token.LAssignDivision())) {
const method_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign()), "set")
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignPlus())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignPlus()), "increment")
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMinus())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMinus()), "decrement")
: ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssignMultiplication())
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignMultiplication()), "multiply")
: (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssignDivision()), "divide"));
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), method_), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(member_.at_, ff_core_Option.None(), member_), ff_compiler_Syntax.Argument(value_.at_, ff_core_Option.None(), value_)], [])
} else {
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, record_.at_);
const target_ = ff_compiler_Syntax.DynamicCall(recordField_(ff_compiler_Token.Token_at(token_), "get"), false);
return ff_compiler_Syntax.ECall(record_.at_, target_, effect_, [], [ff_compiler_Syntax.Argument(member_.at_, ff_core_Option.None(), member_)], [])
}
}
}

export async function Parser_parseAtom$(self_, $task) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LString())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString());
return ff_compiler_Syntax.EString(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LChar())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LChar());
return ff_compiler_Syntax.EChar(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LInt())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt());
return ff_compiler_Syntax.EInt(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LFloat())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LFloat());
return ff_compiler_Syntax.EFloat(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())) {
const namespaceToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace());
const extraNamespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ff_core_Option.None()
: ff_core_Option.Some(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))));
const prefix_ = (ff_compiler_Token.Token_raw(namespaceToken_) + ff_core_Option.Option_else(extraNamespace_, (() => {
return ""
})));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), (prefix_ + ff_compiler_Token.Token_raw(token_)))
} else {
return ff_compiler_Parser.Parser_parseVariant(self_, prefix_)
}
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LArrowThin()))) {
return ff_compiler_Parser.Parser_parseDynamicMember(self_, ff_compiler_Parser.Parser_parseVariant(self_, ""), true)
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LUpper())) {
return ff_compiler_Parser.Parser_parseVariant(self_, "")
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, false);
return ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")) {
return ff_compiler_Parser.Parser_parseList(self_)
} else if(((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(") && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LAssign()))) {
return ff_compiler_Syntax.ERecord(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_compiler_Parser.Parser_parseRecord(self_, ff_core_Option.None()))
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
const result_ = ff_compiler_Parser.Parser_parseTerm(self_);
while((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LComma()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma());
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_parseTerm(self_)
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return result_
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.EWildcard(ff_compiler_Token.Token_at(token_), 0)
} else {
{
const _exception = ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ("Expected atom, got " + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_current(self_)))); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}
}

export async function Parser_parseVariant$(self_, prefix_, $task) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? []
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "?")) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
return ff_compiler_Syntax.EVariantIs(ff_compiler_Token.Token_at(token_), name_, typeArguments_)
} else {
const arguments_ = ff_core_Option.Some(ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(token_), true));
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(token_), name_, typeArguments_, ff_core_Option.Option_map(arguments_, ((_w1) => {
return _w1.first_
})))
}
}

export async function Parser_parseCopy$(self_, record_, $task) {
const namespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ""
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace())));
const extraNamespace_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace()))
? ""
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace())));
const prefix_ = (namespace_ + extraNamespace_);
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_));
const fields_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")))
? []
: ff_compiler_Parser.Parser_parseRecord(self_, ff_core_Option.Some(ff_compiler_Token.Token_at(token_))));
return ff_compiler_Syntax.ECopy(ff_compiler_Token.Token_at(token_), name_, record_, fields_)
}

export async function Parser_parseRecord$(self_, copyAt_, $task) {
const fields_ = ff_core_Array.new_();
const startBracketAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "("));
const startAt_ = ff_core_Option.Option_else(copyAt_, (() => {
return startBracketAt_
}));
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const field_ = (((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? (ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign()), ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseTerm(self_)))
: ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_))));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, fields_.array.length, ff_core_Option.Option_filter(ff_core_Option.Some(field_.name_), ((_w1) => {
return (_w1 !== "")
}))));
self_.lspEmittedArgumentHook_ = true
}
};
fields_.array.push(field_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, fields_.array.length, ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Array.Array_toList(fields_, 0, 9007199254740991)
}

export async function Parser_parseRecordType$(self_, $task) {
const fields_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LColon());
fields_.array.push(ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseType(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Array.Array_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function Parser_parseRecordPattern$(self_, $task) {
const fields_ = ff_core_Array.new_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
fields_.array.push(ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parsePattern(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Array.Array_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function Parser_parseListPattern$(self_, $task) {
function convertListPattern_(at_, items_) {
const at_a = at_;
const items_a = items_;
if(items_a.length === 0) {
return ff_compiler_Syntax.PVariant(at_, "List$Empty", [])
}
if(items_a.length >= 1 && !items_a[0].second_) {
const p_ = items_a[0].first_;
const ps_ = items_a.slice(1);
return ff_compiler_Syntax.PVariant(at_, "List$Link", [p_, convertListPattern_(at_, ps_)])
}
if(items_a.length === 1 && items_a[0].second_) {
const p_ = items_a[0].first_;
return p_
}
{
const p_ = items_a[0].first_;
{
const _exception = ff_compiler_Syntax.CompileError(p_.at_, "Invalid pattern: ... is only allowed for the last element in a list"); 
throw Object.assign(new Error(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_CompileError.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
return
}
}
const items_ = ff_core_Array.new_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
const pattern_ = ((spread_ && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))
? ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_core_Option.None())
: ff_compiler_Parser.Parser_parsePattern(self_));
items_.array.push(ff_core_Pair.Pair(pattern_, spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return convertListPattern_(at_, ff_core_Array.Array_toList(items_, 0, 9007199254740991))
}

export async function Parser_parseList$(self_, $task) {
const items_ = ff_core_Array.new_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
items_.array.push(ff_core_Pair.Pair(ff_compiler_Parser.Parser_parseTerm(self_), spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Syntax.EList(at_, ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_), ff_core_Array.Array_toList(items_, 0, 9007199254740991))
}

export const ff_core_Any_HasAnyTag$ff_compiler_Parser_Poly = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Parser.Poly" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Parser.Poly" + "[") + "]"))
},
};

export const ff_core_Show_Show$ff_compiler_Parser_Poly = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((("Poly" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((("Poly" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ")")
}
},
};

export const ff_core_Equal_Equal$ff_compiler_Parser_Poly = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_))
}
},
};

export const ff_core_Ordering_Order$ff_compiler_Parser_Poly = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const genericsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.generics_, y_.generics_);
if((genericsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return genericsOrdering_
} else {
const constraintsOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Constraint).compare_(x_.constraints_, y_.constraints_);
if((constraintsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return constraintsOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
return
}
},
};

export const ff_core_Serializable_Serializable$ff_compiler_Parser_Poly = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Parser.Poly(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_))
}
{
{
const _exception = ff_core_Serializable.DeserializationChecksumException(); 
throw Object.assign(new Error(ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
return
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, v_.constraints_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Parser.Poly(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_))
}
{
{
const _exception = ff_core_Serializable.DeserializationChecksumException(); 
throw Object.assign(new Error(ff_core_Serializable.ff_core_Show_Show$ff_core_Serializable_DeserializationChecksumException.show_(_exception)), {ffException: ff_core_Any.toAny_(_exception, ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
return
}
}
},
};


//# sourceMappingURL=Parser.mjs.map