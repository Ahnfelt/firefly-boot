

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

import * as ff_compiler_Wildcards from "../../ff/compiler/Wildcards.mjs"

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

import * as ff_core_TaskScope from "../../ff/core/TaskScope.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Parser
export function Parser(packagePair_, file_, tokens_, end_, targetIsNode_, lspHook_, lspEmittedArgumentHook_, offset_, nextUnificationVariableIndex_) {
return {packagePair_, file_, tokens_, end_, targetIsNode_, lspHook_, lspEmittedArgumentHook_, offset_, nextUnificationVariableIndex_};
}

// type Poly
export function Poly(generics_, constraints_) {
return {generics_, constraints_};
}

// type ParsedTargets
export function ParsedTargets(js_, jsSync_, jsAsync_, browser_, browserSync_, browserAsync_, node_, nodeSync_, nodeAsync_) {
return {js_, jsSync_, jsAsync_, browser_, browserSync_, browserAsync_, node_, nodeSync_, nodeAsync_};
}

export const binaryOperators_ = ff_core_List.List_toArray(ff_core_List.Link(ff_core_List.Link("||", ff_core_List.Empty()), ff_core_List.Link(ff_core_List.Link("&&", ff_core_List.Empty()), ff_core_List.Link(ff_core_List.Link("!=", ff_core_List.Link("==", ff_core_List.Empty())), ff_core_List.Link(ff_core_List.Link("<=", ff_core_List.Link(">=", ff_core_List.Link("<", ff_core_List.Link(">", ff_core_List.Empty())))), ff_core_List.Link(ff_core_List.Link("+", ff_core_List.Link("-", ff_core_List.Empty())), ff_core_List.Link(ff_core_List.Link("*", ff_core_List.Link("/", ff_core_List.Link("%", ff_core_List.Empty()))), ff_core_List.Link(ff_core_List.Link("^", ff_core_List.Empty()), ff_core_List.Empty()))))))));

export function make_(packagePair_, file_, tokens_, targetIsNode_, lspHook_) {
return ff_compiler_Parser.Parser(packagePair_, file_, tokens_, ff_core_Array.Array_grabLast(tokens_), targetIsNode_, lspHook_, false, 0, 1)
}

export function findBestTarget_(targetIsNode_, body_, targets_) {
const foreignTarget_ = (targetIsNode_
? (function() {
const sync_ = ff_core_Option.Option_orElse(targets_.nodeSync_, (() => {
return targets_.jsSync_
}));
const async_ = ff_core_Option.Option_orElse(targets_.nodeAsync_, (() => {
return targets_.jsAsync_
}));
return ff_compiler_Syntax.ForeignTarget(sync_, async_)
})()
: (function() {
const sync_ = ff_core_Option.Option_orElse(targets_.browserSync_, (() => {
return targets_.jsSync_
}));
const async_ = ff_core_Option.Option_orElse(targets_.browserAsync_, (() => {
return targets_.jsAsync_
}));
return ff_compiler_Syntax.ForeignTarget(sync_, async_)
})());
{
const _1 = foreignTarget_;
{
if(_1.ForeignTarget) {
if(_1.syncCode_.None) {
if(_1.asyncCode_.None) {
const _guard1 = targetIsNode_;
if(_guard1) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_orElse(targets_.node_, (() => {
return ff_core_Option.Option_orElse(targets_.js_, (() => {
return body_
}))
})), ((_w1) => {
return ff_compiler_Syntax.FireflyTarget(_w1)
})), (() => {
return foreignTarget_
}))
return
}
}
}
}
}
{
if(_1.ForeignTarget) {
if(_1.syncCode_.None) {
if(_1.asyncCode_.None) {
const _guard1 = (!targetIsNode_);
if(_guard1) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_orElse(targets_.browser_, (() => {
return ff_core_Option.Option_orElse(targets_.js_, (() => {
return body_
}))
})), ((_w1) => {
return ff_compiler_Syntax.FireflyTarget(_w1)
})), (() => {
return foreignTarget_
}))
return
}
}
}
}
}
{
return foreignTarget_
return
}
}
}

export async function make_$(packagePair_, file_, tokens_, targetIsNode_, lspHook_, $c) {
return ff_compiler_Parser.Parser(packagePair_, file_, tokens_, ff_core_Array.Array_grabLast(tokens_), targetIsNode_, lspHook_, false, 0, 1)
}

export async function findBestTarget_$(targetIsNode_, body_, targets_, $c) {
const foreignTarget_ = (targetIsNode_
? (await (async function() {
const sync_ = ff_core_Option.Option_orElse(targets_.nodeSync_, (() => {
return targets_.jsSync_
}));
const async_ = ff_core_Option.Option_orElse(targets_.nodeAsync_, (() => {
return targets_.jsAsync_
}));
return ff_compiler_Syntax.ForeignTarget(sync_, async_)
})())
: (await (async function() {
const sync_ = ff_core_Option.Option_orElse(targets_.browserSync_, (() => {
return targets_.jsSync_
}));
const async_ = ff_core_Option.Option_orElse(targets_.browserAsync_, (() => {
return targets_.jsAsync_
}));
return ff_compiler_Syntax.ForeignTarget(sync_, async_)
})()));
{
const _1 = foreignTarget_;
{
if(_1.ForeignTarget) {
if(_1.syncCode_.None) {
if(_1.asyncCode_.None) {
const _guard1 = targetIsNode_;
if(_guard1) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_orElse(targets_.node_, (() => {
return ff_core_Option.Option_orElse(targets_.js_, (() => {
return body_
}))
})), ((_w1) => {
return ff_compiler_Syntax.FireflyTarget(_w1)
})), (() => {
return foreignTarget_
}))
return
}
}
}
}
}
{
if(_1.ForeignTarget) {
if(_1.syncCode_.None) {
if(_1.asyncCode_.None) {
const _guard1 = (!targetIsNode_);
if(_guard1) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_orElse(targets_.browser_, (() => {
return ff_core_Option.Option_orElse(targets_.js_, (() => {
return body_
}))
})), ((_w1) => {
return ff_compiler_Syntax.FireflyTarget(_w1)
})), (() => {
return foreignTarget_
}))
return
}
}
}
}
}
{
return foreignTarget_
return
}
}
}

export function Parser_fail(self_, at_, message_) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export function Parser_current(self_) {
if((self_.offset_ < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_grab(self_.tokens_, self_.offset_)
} else {
return self_.end_
}
}

export function Parser_ahead(self_) {
if(((self_.offset_ + 1) < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_grab(self_.tokens_, (self_.offset_ + 1))
} else {
return self_.end_
}
}

export function Parser_aheadAhead(self_) {
if(((self_.offset_ + 2) < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_grab(self_.tokens_, (self_.offset_ + 2))
} else {
return self_.end_
}
}

export function Parser_skip(self_, kind_) {
const c_ = ff_compiler_Parser.Parser_current(self_);
if(ff_core_Equal.notEquals_(c_.kind_, kind_, ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind)) {
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(kind_, ff_compiler_Token.LUpper())) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(c_.kind_, ff_compiler_Token.LLower()))) {

} else {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + ", got ") + ff_compiler_Token.Token_raw(c_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + " ") + value_) + ", got ") + ff_compiler_Token.Token_raw(c_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
if((!ff_compiler_Token.Token_rawIs(c_, value_))) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((value_ === ")") || (value_ === "]")) || (value_ === "}")))) {
self_.offset_ -= 1
} else {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + value_) + " got ") + ff_compiler_Token.Token_raw(c_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
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
ff_core_Option.Option_each(moduleWithPackageInfo_.packageInfo_, ((info_) => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(info_.package_.at_, "Package and dependencies already declared in package.ff"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
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
: ff_compiler_Syntax.DPackage(location_, self_.packagePair_, ff_compiler_Syntax.Version(location_, 0, 0, 0), ff_compiler_Syntax.TargetNames(self_.targetIsNode_, (!self_.targetIsNode_))));
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Duplicate package definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const dependencies_ = ff_core_Stack.make_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
ff_core_Stack.Stack_push(dependencies_, ff_compiler_Parser.Parser_parseDependencyDefinition(self_, package_.targets_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const includes_ = ff_core_Stack.make_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
ff_core_Stack.Stack_push(includes_, ff_compiler_Parser.Parser_parseIncludeDefinition(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.PackageInfo(package_, ff_core_Stack.Stack_toList(dependencies_, 0, 9007199254740991), ff_core_Stack.Stack_toList(includes_, 0, 9007199254740991))
}

export function Parser_parseModule(self_) {
const imports_ = ff_core_Stack.make_();
const types_ = ff_core_Stack.make_();
const traits_ = ff_core_Stack.make_();
const instances_ = ff_core_Stack.make_();
const extends_ = ff_core_Stack.make_();
const lets_ = ff_core_Stack.make_();
const functions_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LColon())))) {
ff_core_Stack.Stack_push(lets_, ff_compiler_Parser.Parser_parseLetDefinition(self_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
ff_core_Stack.Stack_push(functions_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "extend"))) {
ff_core_Stack.Stack_push(extends_, ff_compiler_Parser.Parser_parseExtendDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trait"))) {
ff_core_Stack.Stack_push(traits_, ff_compiler_Parser.Parser_parseTraitDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "instance"))) {
ff_core_Stack.Stack_push(instances_, ff_compiler_Parser.Parser_parseInstanceDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs4(ff_compiler_Parser.Parser_current(self_), "data", "class", "capability", "newtype"))) {
ff_core_Stack.Stack_push(types_, ff_compiler_Parser.Parser_parseTypeDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "import"))) {
ff_core_Stack.Stack_push(imports_, ff_compiler_Parser.Parser_parseImportDefinition(self_, self_.packagePair_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Includes must be at the top of the file or below 'package'"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Dependencies must be at the top of the file or below 'package'"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Package definition must be at the top of the file"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LEnd())
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.Module(self_.file_, self_.packagePair_, ff_core_Stack.Stack_toList(imports_, 0, 9007199254740991), ff_core_Stack.Stack_toList(types_, 0, 9007199254740991), ff_core_Stack.Stack_toList(traits_, 0, 9007199254740991), ff_core_Stack.Stack_toList(instances_, 0, 9007199254740991), ff_core_Stack.Stack_toList(extends_, 0, 9007199254740991), ff_core_Stack.Stack_toList(lets_, 0, 9007199254740991), ff_core_Stack.Stack_toList(functions_, 0, 9007199254740991))
}

export function Parser_parseLetDefinition(self_) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const variableType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
return ff_compiler_Parser.Parser_parseType(self_)
})()
: ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_)));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
return ff_compiler_Syntax.DLet(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), variableType_, value_)
}

export function Parser_parseFunctionDefinition(self_, member_) {
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, member_);
const body_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")
? ff_core_Option.Some(ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), false, false))
: ff_core_Option.None());
const targets_ = ff_compiler_Parser.Parser_parseTargets(self_, ff_core_List.List_size(signature_.parameters_));
const bestTarget_ = ff_compiler_Parser.findBestTarget_(self_.targetIsNode_, body_, targets_);
return ff_compiler_Syntax.DFunction(signature_.at_, signature_, bestTarget_)
}

export function Parser_parseTargets(self_, parameterCount_) {
function processCode_(code_) {
const dropCount_ = (ff_core_String.String_startsWith(code_, "\"\"\"", 0)
? 3
: 1);
return ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(code_, dropCount_), dropCount_), "\\\"", "\""), "\\r", "\r"), "\\n", "\n"), "\\t", "\t"), "\\\\", "\\")
}
let targets_ = ff_compiler_Parser.ParsedTargets(ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None());
while(((ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), "target"))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LSeparator());
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const target_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()))
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())));
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, parameterCount_, false, false);
do {
const _1 = target_;
{
if(_1 == "js") {
if(ff_core_Equal.notEquals_(targets_.jsSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(ff_core_Option.Some(lambda_), _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
{
if(_1 == "browser") {
if(ff_core_Equal.notEquals_(targets_.browserSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, ff_core_Option.Some(lambda_), _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
{
if(_1 == "node") {
if(ff_core_Equal.notEquals_(targets_.nodeAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, ff_core_Option.Some(lambda_), _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Unknown target"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
} while(false)
} else {
const mode_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const code_ = processCode_(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString())));
do {
const _1 = ff_core_Pair.Pair(target_, mode_);
{
if(_1.first_ == "js") {
if(_1.second_ == "sync") {
if(ff_core_Equal.notEquals_(targets_.jsSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, ff_core_Option.Some(code_), _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "js") {
if(_1.second_ == "async") {
if(ff_core_Equal.notEquals_(targets_.jsAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, ff_core_Option.Some(code_), _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "browser") {
if(_1.second_ == "sync") {
if(ff_core_Equal.notEquals_(targets_.browserSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, ff_core_Option.Some(code_), _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "browser") {
if(_1.second_ == "async") {
if(ff_core_Equal.notEquals_(targets_.browserAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, ff_core_Option.Some(code_), _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "node") {
if(_1.second_ == "sync") {
if(ff_core_Equal.notEquals_(targets_.nodeSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, ff_core_Option.Some(code_), _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "node") {
if(_1.second_ == "async") {
if(ff_core_Equal.notEquals_(targets_.nodeAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, ff_core_Option.Some(code_))
}))(targets_)
break
}
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Unknown target or mode"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
} while(false)
}
};
return targets_
}

export function Parser_parseSignature(self_, member_) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty()));
const parameters_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const returnType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
return ff_compiler_Parser.Parser_parseType(self_)
})()
: ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "ff:core/Unit.Unit", ff_core_List.Empty()));
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(nameToken_), "TemporaryEffect$", ff_core_List.Empty());
return ff_compiler_Syntax.Signature(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), member_, poly_.generics_, poly_.constraints_, parameters_, returnType_, temporaryEffect_)
}

export function Parser_parseExtendDefinition(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "extend");
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const type_ = ff_compiler_Parser.Parser_parseType(self_);
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const methods_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(methods_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_, true));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_compiler_Syntax.DExtend(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, type_, ff_core_Stack.Stack_toList(methods_, 0, 9007199254740991))
}

export function Parser_parseTraitDefinition(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "trait");
const typeParameterToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const constraints_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Trait constraints is not yet implemented");
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
ff_core_Stack.Stack_push(constraints_, (((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, ff_core_List.Link(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(typeParameterToken_), ff_compiler_Token.Token_raw(typeParameterToken_), ff_core_List.Empty()), constraint_.generics_))
}))(constraint_))
};
const generatorParameters_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const methodGenerators_ = ff_core_Stack.make_();
const methodDefaults_ = ff_core_Stack.make_();
const methodSignatures_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? ff_core_List.Empty()
: (function() {
const signatures_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, true);
ff_core_Stack.Stack_push(signatures_, signature_);
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const generator_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), "generate"));
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), true, false);
if(generator_) {
ff_core_Stack.Stack_push(methodGenerators_, ff_core_Pair.Pair(signature_.name_, body_))
} else {
ff_core_Stack.Stack_push(methodDefaults_, ff_core_Pair.Pair(signature_.name_, body_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Stack.Stack_toList(signatures_, 0, 9007199254740991)
})());
return ff_compiler_Syntax.DTrait(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), ff_core_List.Link(ff_compiler_Token.Token_raw(typeParameterToken_), poly_.generics_), ff_core_List.List_addAll(ff_core_Stack.Stack_toList(constraints_, 0, 9007199254740991), poly_.constraints_), generatorParameters_, methodSignatures_, ff_core_Stack.Stack_toList(methodDefaults_, 0, 9007199254740991), ff_core_Stack.Stack_toList(methodGenerators_, 0, 9007199254740991))
}

export function Parser_parseInstanceDefinition(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "instance");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const typeArguments_ = ff_core_Stack.make_();
ff_core_Stack.Stack_push(typeArguments_, ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.List_map(poly_.generics_, ((_w1) => {
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), _w1, ff_core_List.Empty())
}))));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(typeArguments_, ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
};
const generatorArguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(nameToken_), false).first_;
const methods_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? ff_core_List.Empty()
: (function() {
const definitions_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(definitions_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Stack.Stack_toList(definitions_, 0, 9007199254740991)
})());
return ff_compiler_Syntax.DInstance(ff_compiler_Token.Token_at(nameToken_), poly_.generics_, poly_.constraints_, ff_compiler_Token.Token_raw(nameToken_), ff_core_Stack.Stack_toList(typeArguments_, 0, 9007199254740991), generatorArguments_, methods_, false)
}

export function Parser_parseTypeDefinition(self_) {
const newtype_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype");
const effectParameter_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "capability")
? ff_core_List.Link("Q$", ff_core_List.Empty())
: ff_core_List.Empty());
const allowMutable_ = ff_compiler_Token.Token_rawIs2(ff_compiler_Parser.Parser_current(self_), "class", "capability");
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "newtype")
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "data")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "data")
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "class")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "class")
} else {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "capability")
};
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
if(((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
};
const commonFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
const variants_ = ((newtype_ || (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? ff_core_List.Link(ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), ff_core_List.Empty()), ff_core_List.Empty())
: (function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const variantsBuilder_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const variantNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const variantFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
if(((!allowMutable_) && ff_core_List.List_any(variantFields_, ((_w1) => {
return _w1.mutable_
})))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(variantFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes can have mutable fields"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
ff_core_Stack.Stack_push(variantsBuilder_, ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_raw(variantNameToken_), variantFields_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Stack.Stack_toList(variantsBuilder_, 0, 9007199254740991)
})());
if((newtype_ && (ff_core_List.List_size(commonFields_) !== 1))) {
ff_core_Log.show_(commonFields_, ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter));
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(nameToken_), "Newtypes must have exactly one field"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
if(((!allowMutable_) && ff_core_List.List_any(commonFields_, ((_w1) => {
return _w1.mutable_
})))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(commonFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes and capabilities can have mutable fields"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const generics_ = ff_core_List.List_addAll(effectParameter_, poly_.generics_);
return ff_compiler_Syntax.DType(ff_compiler_Token.Token_at(nameToken_), newtype_, (!allowMutable_), ff_compiler_Token.Token_raw(nameToken_), generics_, poly_.constraints_, commonFields_, variants_)
}

export function Parser_parseImportDefinition(self_, currentPackagePair_) {
const importToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "import");
const path_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
ff_core_Stack.Stack_push(path_, ff_compiler_Parser.Parser_parseDashedName(self_));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot())
};
const fileToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const alias_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "as")
? (function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "as");
return ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper()))
})()
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
return ff_compiler_Syntax.DImport(ff_compiler_Token.Token_at(fileToken_), alias_, packagePair_, ff_core_Stack.Stack_toList(path_, 0, 9007199254740991), ff_compiler_Token.Token_raw(fileToken_))
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
{
if(_1 == "node") {
const _guard1 = targets_.node_;
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
}
}
{
if(_1 == "node") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(true, _c.browser_)
}))(targets_)
break
}
}
{
if(_1 == "browser") {
const _guard1 = targets_.browser_;
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
}
}
{
if(_1 == "browser") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(_c.node_, true)
}))(targets_)
break
}
}
{
const t_ = _1;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), ("Unexpected target: " + t_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
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
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot());
return ff_core_String.String_grabInt(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt())))
})()
: 0);
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(majorMinor_), ff_core_String.String_grabInt(ff_core_Array.Array_grab(parts_, 0)), ff_core_String.String_grabInt(ff_core_Array.Array_grab(parts_, 1)), patch_)
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain upper case letters: " + part_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
if((ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 95)
})) || ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 46)
})))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain underscores or dots: " + part_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return part_
}

export function Parser_parseTypeParameters(self_) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
const parameters_ = ff_core_Stack.make_();
const constraints_ = ff_core_Stack.make_();
while(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSemicolon())))) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LBracketLeft())) {
ff_core_Stack.Stack_push(constraints_, ff_compiler_Parser.Parser_parseConstraint(self_))
} else {
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
ff_core_Stack.Stack_push(parameters_, ff_compiler_Token.Token_raw(parameterNameToken_));
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
ff_core_Stack.Stack_push(constraints_, (((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, ff_core_List.Link(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), ff_compiler_Token.Token_raw(parameterNameToken_), ff_core_List.Empty()), constraint_.generics_))
}))(constraint_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Parser.Poly(ff_core_Stack.Stack_toList(parameters_, 0, 9007199254740991), ff_core_Stack.Stack_toList(constraints_, 0, 9007199254740991))
}

export function Parser_parseTypeArguments(self_, parenthesis_ = false) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), (parenthesis_
? "("
: "["));
const types_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(types_, ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), (parenthesis_
? ")"
: "]"));
return ff_core_Stack.Stack_toList(types_, 0, 9007199254740991)
}

export function Parser_parseFunctionParameters(self_, allowMutable_ = false) {
const parameters_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const mutable_ = ((allowMutable_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable"));
if(mutable_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
};
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())))) {
const t_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), "ff:core/Nothing.Nothing", ff_core_List.Empty());
ff_core_Stack.Stack_push(parameters_, ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), t_, ff_core_Option.None()));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const parameterType_ = ff_compiler_Parser.Parser_parseType(self_);
const default_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? ff_core_Option.None()
: (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
return ff_core_Option.Some(ff_compiler_Parser.Parser_parseTerm(self_))
})());
ff_core_Stack.Stack_push(parameters_, ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), parameterType_, default_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Stack.Stack_toList(parameters_, 0, 9007199254740991)
}

export function Parser_parseFunctionArguments(self_, callAt_, trailing_) {
const arguments_ = ff_core_Stack.make_();
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
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
}))));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(arguments_, ff_compiler_Syntax.Argument(ff_compiler_Token.Token_at(argumentToken_), ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
})), value_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_)) && ff_core_Stack.Stack_isEmpty(arguments_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.None()));
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
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(term_.at_, "TemporaryEffect$", ff_core_List.Empty());
const cases_ = ff_core_List.Link(ff_compiler_Syntax.MatchCase(term_.at_, ff_core_List.Empty(), ff_core_List.Empty(), term_), ff_core_List.Empty());
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(arguments_, ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(term_.at_, ff_compiler_Syntax.Lambda(term_.at_, temporaryEffect_, cases_))))
} else {
while((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{") || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))) {
lastWasCurly_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{");
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, true);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(arguments_, ff_compiler_Syntax.Argument(lambda_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)))
}
}
};
return ff_core_Pair.Pair(ff_core_Stack.Stack_toList(arguments_, 0, 9007199254740991), lastWasCurly_)
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
const cases_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())) {
ff_core_Stack.Stack_push(cases_, ff_compiler_Parser.Parser_parseCase(self_))
};
return ff_core_Stack.Stack_toList(cases_, 0, 9007199254740991)
})()
: (ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower(), ff_compiler_Token.LWildcard()) && ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LComma(), ff_compiler_Token.LArrowThick()))
? (function() {
const parameters_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
const isVariable_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower());
const parameterToken_ = (isVariable_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard()));
ff_core_Stack.Stack_push(parameters_, ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(parameterToken_), (isVariable_
? ff_core_Option.Some(ff_compiler_Token.Token_raw(parameterToken_))
: ff_core_Option.None())));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_core_List.Link(ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_toList(parameters_, 0, 9007199254740991), ff_core_List.Empty(), term_), ff_core_List.Empty())
})()
: (function() {
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const wildcards_ = ff_compiler_Wildcards.make_();
const e_ = ff_compiler_Wildcards.Wildcards_fixWildcards(wildcards_, term_);
const arguments_ = ((wildcards_.seenWildcards_ !== 0)
? ff_core_List.List_map(ff_core_List.range_(wildcards_.seenWildcards_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(("_w" + (i_ + 1))))
}))
: ff_core_List.List_map(ff_core_List.range_(defaultParameterCount_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})));
return ff_core_List.Link(ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), arguments_, ff_core_List.Empty(), e_), ff_core_List.Empty())
})());
if((!colon_)) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
};
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), "TemporaryEffect$", ff_core_List.Empty());
return ff_compiler_Syntax.Lambda(ff_compiler_Token.Token_at(token_), temporaryEffect_, result_)
}

export function Parser_parseCase(self_) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe());
const patterns_ = ff_core_Stack.make_();
while(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_core_Stack.Stack_push(patterns_, ff_compiler_Parser.Parser_parsePattern(self_));
if(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
const guards_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
ff_core_Stack.Stack_push(guards_, ff_compiler_Parser.Parser_parseCaseGuard(self_))
};
if(((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || (!ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick())
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_toList(patterns_, 0, 9007199254740991), ff_core_Stack.Stack_toList(guards_, 0, 9007199254740991), body_)
}

export function Parser_parseCaseGuard(self_) {
const guardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketLeft());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const p_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe()))
? ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(guardToken_), "True", ff_core_List.Empty())
: (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe());
return ff_compiler_Parser.Parser_parsePattern(self_)
})());
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
const patterns_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const pattern_ = ff_compiler_Parser.Parser_parsePattern(self_);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_size(patterns_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(patterns_, pattern_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_size(patterns_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_Stack.Stack_toList(patterns_, 0, 9007199254740991))
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(asToken_), ff_core_Option.Some(ff_compiler_Token.Token_raw(asToken_)))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
const wildcardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(wildcardToken_), ff_core_Option.None())
} else {
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.Empty())
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
return ff_core_List.Link(ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_), ff_core_List.Empty())
})()
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? ff_compiler_Parser.Parser_parseTypeArguments(self_, true)
: (function() {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return ff_core_List.Link(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_), ff_core_List.Empty())
})());
if(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick())) && (ff_core_List.List_size(leftTypes_) === 1))) {
return ff_core_List.List_grabFirst(leftTypes_)
} else {
const arrowToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const rightType_ = ff_compiler_Parser.Parser_parseType(self_);
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(arrowToken_), ("Function$" + ff_core_List.List_size(leftTypes_)), ff_core_List.List_addAll(leftTypes_, ff_core_List.Link(rightType_, ff_core_List.Empty())))
}
}

export function Parser_parseConstraint(self_) {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return ff_compiler_Syntax.Constraint(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_)
}

export function Parser_parseStatements(self_) {
if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight(), ff_compiler_Token.LPipe())) {
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Unit", ff_core_List.Empty(), ff_core_Option.None())
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
}));
const operator_ = ff_core_String.String_dropLast(ff_compiler_Token.Token_raw(token_), 1);
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
{
const _1 = term_;
{
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_Syntax.EAssign(at_, operator_, name_, value_)
return
}
}
{
if(_1.EField) {
const e_ = _1;
return ff_compiler_Syntax.EAssignField(e_.at_, operator_, e_.record_, e_.field_, value_)
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Only variables and fields are assignable"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
}

export function Parser_parseLet(self_) {
const mutable_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable");
const keywordToken_ = (mutable_
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "mutable")
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "let"));
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const valueType_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))
? ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_))
: (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
return ff_compiler_Parser.Parser_parseType(self_)
})());
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign())))) {
const unit_ = ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", ff_core_List.Empty(), ff_core_Option.None());
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, unit_, unit_)
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
const body_ = (ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())
? (function() {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon());
return ff_compiler_Parser.Parser_parseStatements(self_)
})()
: ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", ff_core_List.Empty(), ff_core_Option.None()));
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, value_, body_)
}
}

export function Parser_parseFunctions(self_) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const functions_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function")) {
const functionAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "function"));
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, false);
const body_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? (function() {
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(functionAt_, "TemporaryEffect$", ff_core_List.Empty());
return ff_compiler_Syntax.Lambda(functionAt_, temporaryEffect_, ff_core_List.Empty())
})()
: ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), false, false));
ff_core_Stack.Stack_push(functions_, ff_compiler_Syntax.DFunction(signature_.at_, signature_, ff_compiler_Syntax.FireflyTarget(body_)));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())))) {

} else {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.EFunctions(at_, ff_core_Stack.Stack_toList(functions_, 0, 9007199254740991), body_)
}

export function Parser_parseTerm(self_) {
return ff_compiler_Parser.Parser_parseBinary(self_, 0)
}

export function Parser_parseBinary(self_, level_) {
if((level_ >= ff_core_Array.Array_size(ff_compiler_Parser.binaryOperators_))) {
return ff_compiler_Parser.Parser_parseUnary(self_)
} else {
const operators_ = ff_core_Array.Array_grab(ff_compiler_Parser.binaryOperators_, level_);
let result_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
while(ff_core_List.List_any(operators_, ((value_) => {
return ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), value_)
}))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const right_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
const arguments_ = ff_core_List.Link(ff_compiler_Syntax.Argument(result_.at_, ff_core_Option.None(), result_), ff_core_List.Link(ff_compiler_Syntax.Argument(right_.at_, ff_core_Option.None(), right_), ff_core_List.Empty()));
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = (((_1) => {
{
if(_1 == "==") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.equals"), false)
return
}
}
{
if(_1 == "!=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.notEquals"), false)
return
}
}
{
if(_1 == "<") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.before"), false)
return
}
}
{
if(_1 == "<=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notAfter"), false)
return
}
}
{
if(_1 == ">") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.after"), false)
return
}
}
{
if(_1 == ">=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notBefore"), false)
return
}
}
{
const o_ = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), o_), false)
return
}
}))(ff_compiler_Token.Token_raw(token_));
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, ff_core_List.Empty(), arguments_, ff_core_List.Empty())
}
};
return result_
}
}

export function Parser_parseUnary(self_) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const term_ = ff_compiler_Parser.Parser_parseUnary(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_)), false);
return ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), term_), ff_core_List.Empty()), ff_core_List.Empty())
} else {
return ff_compiler_Parser.Parser_parseFieldsAndCalls(self_)
}
}

export function Parser_parseFieldsAndCalls(self_) {
const tailCall_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "tailcall"))
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword());
return true
})()
: false);
let result_ = ff_compiler_Parser.Parser_parseAtom(self_);
while(((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketLeft()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot()))) {
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
} else {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, result_.at_, true);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_);
const target_ = ff_compiler_Syntax.DynamicCall(result_, tailCall_);
result_ = ff_compiler_Syntax.ECall(result_.at_, target_, effect_, typeArguments_, arguments_.first_, ff_core_List.Empty());
if((arguments_.second_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
}
};
return result_
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ("Expected atom, got " + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_current(self_)))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}

export function Parser_parseVariant(self_, prefix_) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
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
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseRecord(self_, ff_core_Option.Some(ff_compiler_Token.Token_at(token_))));
return ff_compiler_Syntax.ECopy(ff_compiler_Token.Token_at(token_), name_, record_, fields_)
}

export function Parser_parseRecord(self_, copyAt_) {
const fields_ = ff_core_Stack.make_();
const startBracketAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "("));
const startAt_ = ff_core_Option.Option_else(copyAt_, (() => {
return startBracketAt_
}));
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const field_ = (((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? (function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
return ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseTerm(self_))
})()
: ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_))));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, ff_core_Stack.Stack_size(fields_), ff_core_Option.Option_filter(ff_core_Option.Some(field_.name_), ((_w1) => {
return (_w1 !== "")
}))));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(fields_, field_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, ff_core_Stack.Stack_size(fields_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Stack.Stack_toList(fields_, 0, 9007199254740991)
}

export function Parser_parseRecordType(self_) {
const fields_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LColon());
ff_core_Stack.Stack_push(fields_, ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseType(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Stack.Stack_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function Parser_parseRecordPattern(self_) {
const fields_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
ff_core_Stack.Stack_push(fields_, ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parsePattern(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Stack.Stack_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export function Parser_parseListPattern(self_) {
function convertListPattern_(at_, items_) {
{
const at_a = at_;
const items_a = items_;
{
if(items_a.Empty) {
return ff_compiler_Syntax.PVariant(at_, "ff:core/List.Empty", ff_core_List.Empty())
return
}
}
{
if(items_a.Link) {
const p_ = items_a.head_.first_;
if(!items_a.head_.second_) {
const ps_ = items_a.tail_;
return ff_compiler_Syntax.PVariant(at_, "ff:core/List.Link", ff_core_List.Link(p_, ff_core_List.Link(convertListPattern_(at_, ps_), ff_core_List.Empty())))
return
}
}
}
{
if(items_a.Link) {
const p_ = items_a.head_.first_;
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
const p_ = items_a.head_.first_;
if(items_a.head_.second_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(p_.at_, "Invalid pattern: ... is only allowed for the last element in a list"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
const items_ = ff_core_Stack.make_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
const pattern_ = ((spread_ && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))
? ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_core_Option.None())
: ff_compiler_Parser.Parser_parsePattern(self_));
ff_core_Stack.Stack_push(items_, ff_core_Pair.Pair(pattern_, spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return convertListPattern_(at_, ff_core_Stack.Stack_toList(items_, 0, 9007199254740991))
}

export function Parser_parseList(self_) {
const items_ = ff_core_Stack.make_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
ff_core_Stack.Stack_push(items_, ff_core_Pair.Pair(ff_compiler_Parser.Parser_parseTerm(self_), spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Syntax.EList(at_, ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_), ff_core_Stack.Stack_toList(items_, 0, 9007199254740991))
}

export async function Parser_fail$(self_, at_, message_, $c) {
return ff_core_Core.panic_(((message_ + " ") + ff_compiler_Syntax.Location_show(at_)))
}

export async function Parser_current$(self_, $c) {
if((self_.offset_ < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_grab(self_.tokens_, self_.offset_)
} else {
return self_.end_
}
}

export async function Parser_ahead$(self_, $c) {
if(((self_.offset_ + 1) < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_grab(self_.tokens_, (self_.offset_ + 1))
} else {
return self_.end_
}
}

export async function Parser_aheadAhead$(self_, $c) {
if(((self_.offset_ + 2) < ff_core_Array.Array_size(self_.tokens_))) {
return ff_core_Array.Array_grab(self_.tokens_, (self_.offset_ + 2))
} else {
return self_.end_
}
}

export async function Parser_skip$(self_, kind_, $c) {
const c_ = ff_compiler_Parser.Parser_current(self_);
if(ff_core_Equal.notEquals_(c_.kind_, kind_, ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind)) {
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(kind_, ff_compiler_Token.LUpper())) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(c_.kind_, ff_compiler_Token.LLower()))) {

} else {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + ", got ") + ff_compiler_Token.Token_raw(c_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
self_.offset_ += 1;
return c_
}

export async function Parser_rawSkip$(self_, kind_, value_, $c) {
const c_ = ff_compiler_Parser.Parser_current(self_);
if(ff_core_Equal.notEquals_(c_.kind_, kind_, ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind)) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((value_ === ")") || (value_ === "]")) || (value_ === "}")))) {

} else {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((((("Expected " + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(kind_)) + " ") + value_) + ", got ") + ff_compiler_Token.Token_raw(c_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
if((!ff_compiler_Token.Token_rawIs(c_, value_))) {
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (((value_ === ")") || (value_ === "]")) || (value_ === "}")))) {
self_.offset_ -= 1
} else {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(c_), ((("Expected " + value_) + " got ") + ff_compiler_Token.Token_raw(c_))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
};
self_.offset_ += 1;
return c_
}

export async function Parser_freshUnificationVariable$(self_, at_, $c) {
const result_ = ff_compiler_Syntax.TVariable(at_, self_.nextUnificationVariableIndex_);
self_.nextUnificationVariableIndex_ += 3;
return result_
}

export async function Parser_currentIsSeparator$(self_, kind_, $c) {
return (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), kind_) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSeparator()))
}

export async function Parser_skipSeparator$(self_, kind_, $c) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSeparator())) {
return ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LSeparator())
} else {
return ff_compiler_Parser.Parser_skip(self_, kind_)
}
}

export async function Parser_parseModuleWithoutPackageInfo$(self_, $c) {
const moduleWithPackageInfo_ = ff_compiler_Parser.Parser_parseModuleWithPackageInfo(self_);
ff_core_Option.Option_each(moduleWithPackageInfo_.packageInfo_, ((info_) => {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(info_.package_.at_, "Package and dependencies already declared in package.ff"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}));
return moduleWithPackageInfo_.module_
}

export async function Parser_parseModuleWithPackageInfo$(self_, $c) {
const packageInfo_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs3(ff_compiler_Parser.Parser_current(self_), "package", "dependency", "include"))
? ff_core_Option.Some(ff_compiler_Parser.Parser_parsePackageInfo(self_))
: ff_core_Option.None());
const module_ = ff_compiler_Parser.Parser_parseModule(self_);
return ff_compiler_Syntax.ModuleWithPackageInfo(packageInfo_, module_)
}

export async function Parser_parsePackageInfo$(self_, $c) {
const location_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const package_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))
? (await (async function() {
const p_ = ff_compiler_Parser.Parser_parsePackageDefinition(self_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
};
return p_
})())
: ff_compiler_Syntax.DPackage(location_, self_.packagePair_, ff_compiler_Syntax.Version(location_, 0, 0, 0), ff_compiler_Syntax.TargetNames(self_.targetIsNode_, (!self_.targetIsNode_))));
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Duplicate package definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const dependencies_ = ff_core_Stack.make_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
ff_core_Stack.Stack_push(dependencies_, ff_compiler_Parser.Parser_parseDependencyDefinition(self_, package_.targets_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const includes_ = ff_core_Stack.make_();
while((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
ff_core_Stack.Stack_push(includes_, ff_compiler_Parser.Parser_parseIncludeDefinition(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.PackageInfo(package_, ff_core_Stack.Stack_toList(dependencies_, 0, 9007199254740991), ff_core_Stack.Stack_toList(includes_, 0, 9007199254740991))
}

export async function Parser_parseModule$(self_, $c) {
const imports_ = ff_core_Stack.make_();
const types_ = ff_core_Stack.make_();
const traits_ = ff_core_Stack.make_();
const instances_ = ff_core_Stack.make_();
const extends_ = ff_core_Stack.make_();
const lets_ = ff_core_Stack.make_();
const functions_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()) && (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LAssign()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LColon())))) {
ff_core_Stack.Stack_push(lets_, ff_compiler_Parser.Parser_parseLetDefinition(self_))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
ff_core_Stack.Stack_push(functions_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "extend"))) {
ff_core_Stack.Stack_push(extends_, ff_compiler_Parser.Parser_parseExtendDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "trait"))) {
ff_core_Stack.Stack_push(traits_, ff_compiler_Parser.Parser_parseTraitDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "instance"))) {
ff_core_Stack.Stack_push(instances_, ff_compiler_Parser.Parser_parseInstanceDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs4(ff_compiler_Parser.Parser_current(self_), "data", "class", "capability", "newtype"))) {
ff_core_Stack.Stack_push(types_, ff_compiler_Parser.Parser_parseTypeDefinition(self_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "import"))) {
ff_core_Stack.Stack_push(imports_, ff_compiler_Parser.Parser_parseImportDefinition(self_, self_.packagePair_))
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "include"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Includes must be at the top of the file or below 'package'"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "dependency"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Dependencies must be at the top of the file or below 'package'"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "package"))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Package definition must be at the top of the file"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LEnd())
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LEnd()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
return ff_compiler_Syntax.Module(self_.file_, self_.packagePair_, ff_core_Stack.Stack_toList(imports_, 0, 9007199254740991), ff_core_Stack.Stack_toList(types_, 0, 9007199254740991), ff_core_Stack.Stack_toList(traits_, 0, 9007199254740991), ff_core_Stack.Stack_toList(instances_, 0, 9007199254740991), ff_core_Stack.Stack_toList(extends_, 0, 9007199254740991), ff_core_Stack.Stack_toList(lets_, 0, 9007199254740991), ff_core_Stack.Stack_toList(functions_, 0, 9007199254740991))
}

export async function Parser_parseLetDefinition$(self_, $c) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const variableType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
return ff_compiler_Parser.Parser_parseType(self_)
})())
: ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_)));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
return ff_compiler_Syntax.DLet(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), variableType_, value_)
}

export async function Parser_parseFunctionDefinition$(self_, member_, $c) {
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, member_);
const body_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")
? ff_core_Option.Some(ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), false, false))
: ff_core_Option.None());
const targets_ = ff_compiler_Parser.Parser_parseTargets(self_, ff_core_List.List_size(signature_.parameters_));
const bestTarget_ = ff_compiler_Parser.findBestTarget_(self_.targetIsNode_, body_, targets_);
return ff_compiler_Syntax.DFunction(signature_.at_, signature_, bestTarget_)
}

export async function Parser_parseTargets$(self_, parameterCount_, $c) {
function processCode_(code_) {
const dropCount_ = (ff_core_String.String_startsWith(code_, "\"\"\"", 0)
? 3
: 1);
return ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_replace(ff_core_String.String_dropLast(ff_core_String.String_dropFirst(code_, dropCount_), dropCount_), "\\\"", "\""), "\\r", "\r"), "\\n", "\n"), "\\t", "\t"), "\\\\", "\\")
}
let targets_ = ff_compiler_Parser.ParsedTargets(ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None());
while(((ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon()) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), "target"))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LSeparator());
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const target_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()))
: ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())));
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, parameterCount_, false, false);
do {
const _1 = target_;
{
if(_1 == "js") {
if(ff_core_Equal.notEquals_(targets_.jsSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(ff_core_Option.Some(lambda_), _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
{
if(_1 == "browser") {
if(ff_core_Equal.notEquals_(targets_.browserSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, ff_core_Option.Some(lambda_), _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
{
if(_1 == "node") {
if(ff_core_Equal.notEquals_(targets_.nodeAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, ff_core_Option.Some(lambda_), _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Unknown target"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
} while(false)
} else {
const mode_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const code_ = processCode_(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString())));
do {
const _1 = ff_core_Pair.Pair(target_, mode_);
{
if(_1.first_ == "js") {
if(_1.second_ == "sync") {
if(ff_core_Equal.notEquals_(targets_.jsSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, ff_core_Option.Some(code_), _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "js") {
if(_1.second_ == "async") {
if(ff_core_Equal.notEquals_(targets_.jsAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, ff_core_Option.Some(code_), _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "browser") {
if(_1.second_ == "sync") {
if(ff_core_Equal.notEquals_(targets_.browserSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, ff_core_Option.Some(code_), _c.browserAsync_, _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "browser") {
if(_1.second_ == "async") {
if(ff_core_Equal.notEquals_(targets_.browserAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, ff_core_Option.Some(code_), _c.node_, _c.nodeSync_, _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "node") {
if(_1.second_ == "sync") {
if(ff_core_Equal.notEquals_(targets_.nodeSync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, ff_core_Option.Some(code_), _c.nodeAsync_)
}))(targets_)
break
}
}
}
{
if(_1.first_ == "node") {
if(_1.second_ == "async") {
if(ff_core_Equal.notEquals_(targets_.nodeAsync_, ff_core_Option.None(), ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Duplicate target definition"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
targets_ = (((_c) => {
return ff_compiler_Parser.ParsedTargets(_c.js_, _c.jsSync_, _c.jsAsync_, _c.browser_, _c.browserSync_, _c.browserAsync_, _c.node_, _c.nodeSync_, ff_core_Option.Some(code_))
}))(targets_)
break
}
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, "Unknown target or mode"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
} while(false)
}
};
return targets_
}

export async function Parser_parseSignature$(self_, member_, $c) {
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty()));
const parameters_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const returnType_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())
? (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
return ff_compiler_Parser.Parser_parseType(self_)
})())
: ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "ff:core/Unit.Unit", ff_core_List.Empty()));
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(nameToken_), "TemporaryEffect$", ff_core_List.Empty());
return ff_compiler_Syntax.Signature(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), member_, poly_.generics_, poly_.constraints_, parameters_, returnType_, temporaryEffect_)
}

export async function Parser_parseExtendDefinition$(self_, $c) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "extend");
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const poly_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")
? ff_compiler_Parser.Parser_parseTypeParameters(self_)
: ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const type_ = ff_compiler_Parser.Parser_parseType(self_);
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const methods_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(methods_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_, true));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_compiler_Syntax.DExtend(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), poly_.generics_, poly_.constraints_, type_, ff_core_Stack.Stack_toList(methods_, 0, 9007199254740991))
}

export async function Parser_parseTraitDefinition$(self_, $c) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "trait");
const typeParameterToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const constraints_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_fail(self_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Trait constraints is not yet implemented");
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
ff_core_Stack.Stack_push(constraints_, (((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, ff_core_List.Link(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(typeParameterToken_), ff_compiler_Token.Token_raw(typeParameterToken_), ff_core_List.Empty()), constraint_.generics_))
}))(constraint_))
};
const generatorParameters_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, false));
const methodGenerators_ = ff_core_Stack.make_();
const methodDefaults_ = ff_core_Stack.make_();
const methodSignatures_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? ff_core_List.Empty()
: (await (async function() {
const signatures_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, true);
ff_core_Stack.Stack_push(signatures_, signature_);
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
const generator_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_ahead(self_), "generate"));
const body_ = ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), true, false);
if(generator_) {
ff_core_Stack.Stack_push(methodGenerators_, ff_core_Pair.Pair(signature_.name_, body_))
} else {
ff_core_Stack.Stack_push(methodDefaults_, ff_core_Pair.Pair(signature_.name_, body_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Stack.Stack_toList(signatures_, 0, 9007199254740991)
})()));
return ff_compiler_Syntax.DTrait(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), ff_core_List.Link(ff_compiler_Token.Token_raw(typeParameterToken_), poly_.generics_), ff_core_List.List_addAll(ff_core_Stack.Stack_toList(constraints_, 0, 9007199254740991), poly_.constraints_), generatorParameters_, methodSignatures_, ff_core_Stack.Stack_toList(methodDefaults_, 0, 9007199254740991), ff_core_Stack.Stack_toList(methodGenerators_, 0, 9007199254740991))
}

export async function Parser_parseInstanceDefinition$(self_, $c) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "instance");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
const typeArguments_ = ff_core_Stack.make_();
ff_core_Stack.Stack_push(typeArguments_, ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.List_map(poly_.generics_, ((_w1) => {
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), _w1, ff_core_List.Empty())
}))));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "[")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(typeArguments_, ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]")
};
const generatorArguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, ff_compiler_Token.Token_at(nameToken_), false).first_;
const methods_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{"))
? ff_core_List.Empty()
: (await (async function() {
const definitions_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(definitions_, ff_compiler_Parser.Parser_parseFunctionDefinition(self_, false));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Stack.Stack_toList(definitions_, 0, 9007199254740991)
})()));
return ff_compiler_Syntax.DInstance(ff_compiler_Token.Token_at(nameToken_), poly_.generics_, poly_.constraints_, ff_compiler_Token.Token_raw(nameToken_), ff_core_Stack.Stack_toList(typeArguments_, 0, 9007199254740991), generatorArguments_, methods_, false)
}

export async function Parser_parseTypeDefinition$(self_, $c) {
const newtype_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype");
const effectParameter_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "capability")
? ff_core_List.Link("Q$", ff_core_List.Empty())
: ff_core_List.Empty());
const allowMutable_ = ff_compiler_Token.Token_rawIs2(ff_compiler_Parser.Parser_current(self_), "class", "capability");
if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "newtype")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "newtype")
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "data")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "data")
} else if(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "class")) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "class")
} else {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "capability")
};
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const poly_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_compiler_Parser.Poly(ff_core_List.Empty(), ff_core_List.Empty())
: ff_compiler_Parser.Parser_parseTypeParameters(self_));
if(((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{")
};
const commonFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
const variants_ = ((newtype_ || (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? ff_core_List.Link(ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(nameToken_), ff_compiler_Token.Token_raw(nameToken_), ff_core_List.Empty()), ff_core_List.Empty())
: (await (async function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{");
const variantsBuilder_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const variantNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const variantFields_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "("))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseFunctionParameters(self_, true));
if(((!allowMutable_) && ff_core_List.List_any(variantFields_, ((_w1) => {
return _w1.mutable_
})))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(variantFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes can have mutable fields"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
ff_core_Stack.Stack_push(variantsBuilder_, ff_compiler_Syntax.Variant(ff_compiler_Token.Token_at(variantNameToken_), ff_compiler_Token.Token_raw(variantNameToken_), variantFields_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}");
return ff_core_Stack.Stack_toList(variantsBuilder_, 0, 9007199254740991)
})()));
if((newtype_ && (ff_core_List.List_size(commonFields_) !== 1))) {
ff_core_Log.show_(commonFields_, ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Parameter));
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(nameToken_), "Newtypes must have exactly one field"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
if(((!allowMutable_) && ff_core_List.List_any(commonFields_, ((_w1) => {
return _w1.mutable_
})))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_core_Option.Option_grab(ff_core_List.List_find(commonFields_, ((_w1) => {
return _w1.mutable_
}))).at_, "Only classes and capabilities can have mutable fields"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
const generics_ = ff_core_List.List_addAll(effectParameter_, poly_.generics_);
return ff_compiler_Syntax.DType(ff_compiler_Token.Token_at(nameToken_), newtype_, (!allowMutable_), ff_compiler_Token.Token_raw(nameToken_), generics_, poly_.constraints_, commonFields_, variants_)
}

export async function Parser_parseImportDefinition$(self_, currentPackagePair_, $c) {
const importToken_ = ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "import");
const path_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
ff_core_Stack.Stack_push(path_, ff_compiler_Parser.Parser_parseDashedName(self_));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot())
};
const fileToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const alias_ = (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "as")
? (await (async function() {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "as");
return ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper()))
})())
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
return ff_compiler_Syntax.DImport(ff_compiler_Token.Token_at(fileToken_), alias_, packagePair_, ff_core_Stack.Stack_toList(path_, 0, 9007199254740991), ff_compiler_Token.Token_raw(fileToken_))
}

export async function Parser_parsePackageDefinition$(self_, $c) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const user_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const name_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const version_ = ff_compiler_Parser.Parser_parseVersion(self_);
const targets_ = ff_compiler_Parser.Parser_parseTargetNames(self_, ff_compiler_Syntax.TargetNames(true, true));
return ff_compiler_Syntax.DPackage(at_, ff_compiler_Syntax.PackagePair(user_, name_), version_, targets_)
}

export async function Parser_parseDependencyDefinition$(self_, defaultTargetNames_, $c) {
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

export async function Parser_parseIncludeDefinition$(self_, $c) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
const path_ = ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LString()));
return ff_compiler_Syntax.DInclude(at_, ff_core_String.String_dropLast(ff_core_String.String_dropFirst(path_, 1), 1))
}

export async function Parser_parseTargetNames$(self_, defaultTargets_, $c) {
let targets_ = ff_compiler_Syntax.TargetNames(false, false);
while(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword(), ff_compiler_Token.LLower())) {
const token_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword()));
do {
const _1 = ff_compiler_Token.Token_raw(token_);
{
if(_1 == "node") {
const _guard1 = targets_.node_;
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
}
}
{
if(_1 == "node") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(true, _c.browser_)
}))(targets_)
break
}
}
{
if(_1 == "browser") {
const _guard1 = targets_.browser_;
if(_guard1) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Duplicate target name"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
}
}
{
if(_1 == "browser") {
targets_ = (((_c) => {
return ff_compiler_Syntax.TargetNames(_c.node_, true)
}))(targets_)
break
}
}
{
const t_ = _1;
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), ("Unexpected target: " + t_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
break
}
} while(false)
};
if(((!targets_.node_) && (!targets_.browser_))) {
return defaultTargets_
} else {
return targets_
}
}

export async function Parser_parseVersion$(self_, $c) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LFloat())) {
const majorMinor_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LFloat());
const parts_ = ff_core_String.String_split(ff_compiler_Token.Token_raw(majorMinor_), 46);
const patch_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot())
? (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDot());
return ff_core_String.String_grabInt(ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt())))
})())
: 0);
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(majorMinor_), ff_core_String.String_grabInt(ff_core_Array.Array_grab(parts_, 0)), ff_core_String.String_grabInt(ff_core_Array.Array_grab(parts_, 1)), patch_)
} else {
const major_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LInt());
return ff_compiler_Syntax.Version(ff_compiler_Token.Token_at(major_), ff_core_String.String_grabInt(ff_compiler_Token.Token_raw(major_)), 0, 0)
}
}

export async function Parser_parseDashedName$(self_, $c) {
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain upper case letters: " + part_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
if((ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 95)
})) || ff_core_String.String_any(part_, ((_w1) => {
return (_w1 === 46)
})))) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(at_, ("Package names and paths must not contain underscores or dots: " + part_)), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
};
return part_
}

export async function Parser_parseTypeParameters$(self_, $c) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "[");
const parameters_ = ff_core_Stack.make_();
const constraints_ = ff_core_Stack.make_();
while(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LSemicolon())))) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LBracketLeft())) {
ff_core_Stack.Stack_push(constraints_, ff_compiler_Parser.Parser_parseConstraint(self_))
} else {
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
ff_core_Stack.Stack_push(parameters_, ff_compiler_Token.Token_raw(parameterNameToken_));
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const constraint_ = ff_compiler_Parser.Parser_parseConstraint(self_);
ff_core_Stack.Stack_push(constraints_, (((_c) => {
return ff_compiler_Syntax.Constraint(_c.at_, _c.name_, ff_core_List.Link(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), ff_compiler_Token.Token_raw(parameterNameToken_), ff_core_List.Empty()), constraint_.generics_))
}))(constraint_))
}
};
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Parser.Poly(ff_core_Stack.Stack_toList(parameters_, 0, 9007199254740991), ff_core_Stack.Stack_toList(constraints_, 0, 9007199254740991))
}

export async function Parser_parseTypeArguments$(self_, parenthesis_ = false, $c) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), (parenthesis_
? "("
: "["));
const types_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_core_Stack.Stack_push(types_, ff_compiler_Parser.Parser_parseType(self_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), (parenthesis_
? ")"
: "]"));
return ff_core_Stack.Stack_toList(types_, 0, 9007199254740991)
}

export async function Parser_parseFunctionParameters$(self_, allowMutable_ = false, $c) {
const parameters_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const mutable_ = ((allowMutable_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable"));
if(mutable_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
};
const parameterNameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())))) {
const t_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(parameterNameToken_), "ff:core/Nothing.Nothing", ff_core_List.Empty());
ff_core_Stack.Stack_push(parameters_, ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), t_, ff_core_Option.None()));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
const parameterType_ = ff_compiler_Parser.Parser_parseType(self_);
const default_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? ff_core_Option.None()
: (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
return ff_core_Option.Some(ff_compiler_Parser.Parser_parseTerm(self_))
})()));
ff_core_Stack.Stack_push(parameters_, ff_compiler_Syntax.Parameter(ff_compiler_Token.Token_at(parameterNameToken_), mutable_, ff_compiler_Token.Token_raw(parameterNameToken_), parameterType_, default_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Stack.Stack_toList(parameters_, 0, 9007199254740991)
}

export async function Parser_parseFunctionArguments$(self_, callAt_, trailing_, $c) {
const arguments_ = ff_core_Stack.make_();
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
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
}))));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(arguments_, ff_compiler_Syntax.Argument(ff_compiler_Token.Token_at(argumentToken_), ff_core_Option.Option_map(nameToken_, ((_w1) => {
return ff_compiler_Token.Token_raw(_w1)
})), value_));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if(((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_)) && ff_core_Stack.Stack_isEmpty(arguments_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.None()));
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
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(term_.at_, "TemporaryEffect$", ff_core_List.Empty());
const cases_ = ff_core_List.Link(ff_compiler_Syntax.MatchCase(term_.at_, ff_core_List.Empty(), ff_core_List.Empty(), term_), ff_core_List.Empty());
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(arguments_, ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(term_.at_, ff_compiler_Syntax.Lambda(term_.at_, temporaryEffect_, cases_))))
} else {
while((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{") || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))) {
lastWasCurly_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{");
const lambda_ = ff_compiler_Parser.Parser_parseLambda(self_, 0, false, true);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(callAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(callAt_, ff_core_Stack.Stack_size(arguments_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(arguments_, ff_compiler_Syntax.Argument(lambda_.at_, ff_core_Option.None(), ff_compiler_Syntax.ELambda(lambda_.at_, lambda_)))
}
}
};
return ff_core_Pair.Pair(ff_core_Stack.Stack_toList(arguments_, 0, 9007199254740991), lastWasCurly_)
}

export async function Parser_parseLambda$(self_, defaultParameterCount_ = 0, ignoreGenerateKeyword_ = false, allowColon_ = false, $c) {
const colon_ = (allowColon_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()));
const token_ = (colon_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon())
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "{"));
if(((ignoreGenerateKeyword_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword())) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "generate"))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword())
};
const result_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())
? (await (async function() {
const cases_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe())) {
ff_core_Stack.Stack_push(cases_, ff_compiler_Parser.Parser_parseCase(self_))
};
return ff_core_Stack.Stack_toList(cases_, 0, 9007199254740991)
})())
: (ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower(), ff_compiler_Token.LWildcard()) && ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LComma(), ff_compiler_Token.LArrowThick()))
? (await (async function() {
const parameters_ = ff_core_Stack.make_();
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
const isVariable_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower());
const parameterToken_ = (isVariable_
? ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower())
: ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard()));
ff_core_Stack.Stack_push(parameters_, ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(parameterToken_), (isVariable_
? ff_core_Option.Some(ff_compiler_Token.Token_raw(parameterToken_))
: ff_core_Option.None())));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_core_List.Link(ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_toList(parameters_, 0, 9007199254740991), ff_core_List.Empty(), term_), ff_core_List.Empty())
})())
: (await (async function() {
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const wildcards_ = ff_compiler_Wildcards.make_();
const e_ = ff_compiler_Wildcards.Wildcards_fixWildcards(wildcards_, term_);
const arguments_ = ((wildcards_.seenWildcards_ !== 0)
? ff_core_List.List_map(ff_core_List.range_(wildcards_.seenWildcards_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.Some(("_w" + (i_ + 1))))
}))
: ff_core_List.List_map(ff_core_List.range_(defaultParameterCount_), ((i_) => {
return ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(token_), ff_core_Option.None())
})));
return ff_core_List.Link(ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), arguments_, ff_core_List.Empty(), e_), ff_core_List.Empty())
})()));
if((!colon_)) {
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "}")
};
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), "TemporaryEffect$", ff_core_List.Empty());
return ff_compiler_Syntax.Lambda(ff_compiler_Token.Token_at(token_), temporaryEffect_, result_)
}

export async function Parser_parseCase$(self_, $c) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe());
const patterns_ = ff_core_Stack.make_();
while(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_core_Stack.Stack_push(patterns_, ff_compiler_Parser.Parser_parsePattern(self_));
if(((!ff_compiler_Token.Token_is3(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick(), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
const guards_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")) {
ff_core_Stack.Stack_push(guards_, ff_compiler_Parser.Parser_parseCaseGuard(self_))
};
if(((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || (!ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe(), ff_compiler_Token.LBracketRight())))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick())
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.MatchCase(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_toList(patterns_, 0, 9007199254740991), ff_core_Stack.Stack_toList(guards_, 0, 9007199254740991), body_)
}

export async function Parser_parseCaseGuard$(self_, $c) {
const guardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketLeft());
const term_ = ff_compiler_Parser.Parser_parseStatements(self_);
const p_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LPipe()))
? ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(guardToken_), "True", ff_core_List.Empty())
: (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LPipe());
return ff_compiler_Parser.Parser_parsePattern(self_)
})()));
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LBracketRight());
return ff_compiler_Syntax.MatchGuard(ff_compiler_Token.Token_at(guardToken_), term_, p_)
}

export async function Parser_parsePattern$(self_, $c) {
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
const patterns_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const pattern_ = ff_compiler_Parser.Parser_parsePattern(self_);
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_size(patterns_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(patterns_, pattern_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(ff_compiler_Token.Token_at(token_), ff_core_Stack.Stack_size(patterns_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_Stack.Stack_toList(patterns_, 0, 9007199254740991))
} else {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower())) {
const asToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(asToken_), ff_core_Option.Some(ff_compiler_Token.Token_raw(asToken_)))
} else if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LWildcard())) {
const wildcardToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LWildcard());
return ff_compiler_Syntax.PVariantAs(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_compiler_Token.Token_at(wildcardToken_), ff_core_Option.None())
} else {
return ff_compiler_Syntax.PVariant(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_), ff_core_List.Empty())
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

export async function Parser_parseType$(self_, $c) {
const leftTypes_ = (((ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(") && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_ahead(self_), ff_compiler_Token.LLower())) && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_aheadAhead(self_), ff_compiler_Token.LColon()))
? (await (async function() {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const pair_ = ff_core_List.List_unzip(ff_compiler_Parser.Parser_parseRecordType(self_));
return ff_core_List.Link(ff_compiler_Syntax.TConstructor(at_, ("Record$" + ff_core_List.List_join(pair_.first_, "$")), pair_.second_), ff_core_List.Empty())
})())
: ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "(")
? ff_compiler_Parser.Parser_parseTypeArguments(self_, true)
: (await (async function() {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return ff_core_List.Link(ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_), ff_core_List.Empty())
})()));
if(((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LArrowThick())) && (ff_core_List.List_size(leftTypes_) === 1))) {
return ff_core_List.List_grabFirst(leftTypes_)
} else {
const arrowToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LArrowThick());
const rightType_ = ff_compiler_Parser.Parser_parseType(self_);
return ff_compiler_Syntax.TConstructor(ff_compiler_Token.Token_at(arrowToken_), ("Function$" + ff_core_List.List_size(leftTypes_)), ff_core_List.List_addAll(leftTypes_, ff_core_List.Link(rightType_, ff_core_List.Empty())))
}
}

export async function Parser_parseConstraint$(self_, $c) {
const namespace_ = (ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LNamespace())
? ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LNamespace()))
: "");
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const arguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
return ff_compiler_Syntax.Constraint(ff_compiler_Token.Token_at(token_), (namespace_ + ff_compiler_Token.Token_raw(token_)), arguments_)
}

export async function Parser_parseStatements$(self_, $c) {
if(ff_compiler_Token.Token_is2(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight(), ff_compiler_Token.LPipe())) {
return ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), "Unit", ff_core_List.Empty(), ff_core_Option.None())
} else {
let result_ = ff_compiler_Parser.Parser_parseStatement(self_);
while(ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())) {
const token_ = ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon());
result_ = ff_compiler_Syntax.ESequential(ff_compiler_Token.Token_at(token_), result_, ff_compiler_Parser.Parser_parseStatement(self_))
};
return result_
}
}

export async function Parser_parseStatement$(self_, $c) {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && (ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "let") || ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable")))) {
return ff_compiler_Parser.Parser_parseLet(self_)
} else {
if((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function"))) {
return ff_compiler_Parser.Parser_parseFunctions(self_)
} else {
const term_ = ff_compiler_Parser.Parser_parseTerm(self_);
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
}));
const operator_ = ff_core_String.String_dropLast(ff_compiler_Token.Token_raw(token_), 1);
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
{
const _1 = term_;
{
if(_1.EVariable) {
const at_ = _1.at_;
const name_ = _1.name_;
return ff_compiler_Syntax.EAssign(at_, operator_, name_, value_)
return
}
}
{
if(_1.EField) {
const e_ = _1;
return ff_compiler_Syntax.EAssignField(e_.at_, operator_, e_.record_, e_.field_, value_)
return
}
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(token_), "Only variables and fields are assignable"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
}

export async function Parser_parseLet$(self_, $c) {
const mutable_ = ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "mutable");
const keywordToken_ = (mutable_
? ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "mutable")
: ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "let"));
const nameToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const valueType_ = ((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon()))
? ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(nameToken_))
: (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LColon());
return ff_compiler_Parser.Parser_parseType(self_)
})()));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign())))) {
const unit_ = ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", ff_core_List.Empty(), ff_core_Option.None());
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, unit_, unit_)
} else {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
const value_ = ff_compiler_Parser.Parser_parseTerm(self_);
const body_ = (ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())
? (await (async function() {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon());
return ff_compiler_Parser.Parser_parseStatements(self_)
})())
: ff_compiler_Syntax.EVariant(ff_compiler_Token.Token_at(keywordToken_), "Unit", ff_core_List.Empty(), ff_core_Option.None()));
return ff_compiler_Syntax.ELet(ff_compiler_Token.Token_at(nameToken_), mutable_, ff_compiler_Token.Token_raw(nameToken_), valueType_, value_, body_)
}
}

export async function Parser_parseFunctions$(self_, $c) {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const functions_ = ff_core_Stack.make_();
while(ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "function")) {
const functionAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LKeyword(), "function"));
const signature_ = ff_compiler_Parser.Parser_parseSignature(self_, false);
const body_ = ((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "{")))
? (await (async function() {
const temporaryEffect_ = ff_compiler_Syntax.TConstructor(functionAt_, "TemporaryEffect$", ff_core_List.Empty());
return ff_compiler_Syntax.Lambda(functionAt_, temporaryEffect_, ff_core_List.Empty())
})())
: ff_compiler_Parser.Parser_parseLambda(self_, ff_core_List.List_size(signature_.parameters_), false, false));
ff_core_Stack.Stack_push(functions_, ff_compiler_Syntax.DFunction(signature_.at_, signature_, ff_compiler_Syntax.FireflyTarget(body_)));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!ff_compiler_Parser.Parser_currentIsSeparator(self_, ff_compiler_Token.LSemicolon())))) {

} else {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LSemicolon())
}
};
const body_ = ff_compiler_Parser.Parser_parseStatements(self_);
return ff_compiler_Syntax.EFunctions(at_, ff_core_Stack.Stack_toList(functions_, 0, 9007199254740991), body_)
}

export async function Parser_parseTerm$(self_, $c) {
return ff_compiler_Parser.Parser_parseBinary(self_, 0)
}

export async function Parser_parseBinary$(self_, level_, $c) {
if((level_ >= ff_core_Array.Array_size(ff_compiler_Parser.binaryOperators_))) {
return ff_compiler_Parser.Parser_parseUnary(self_)
} else {
const operators_ = ff_core_Array.Array_grab(ff_compiler_Parser.binaryOperators_, level_);
let result_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
while(ff_core_List.List_any(operators_, ((value_) => {
return ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), value_)
}))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const right_ = ff_compiler_Parser.Parser_parseBinary(self_, (level_ + 1));
const arguments_ = ff_core_List.Link(ff_compiler_Syntax.Argument(result_.at_, ff_core_Option.None(), result_), ff_core_List.Link(ff_compiler_Syntax.Argument(right_.at_, ff_core_Option.None(), right_), ff_core_List.Empty()));
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = (((_1) => {
{
if(_1 == "==") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.equals"), false)
return
}
}
{
if(_1 == "!=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Equal.notEquals"), false)
return
}
}
{
if(_1 == "<") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.before"), false)
return
}
}
{
if(_1 == "<=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notAfter"), false)
return
}
}
{
if(_1 == ">") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.after"), false)
return
}
}
{
if(_1 == ">=") {
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), "ff:core/Ordering.notBefore"), false)
return
}
}
{
const o_ = _1;
return ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), o_), false)
return
}
}))(ff_compiler_Token.Token_raw(token_));
result_ = ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, ff_core_List.Empty(), arguments_, ff_core_List.Empty())
}
};
return result_
}
}

export async function Parser_parseUnary$(self_, $c) {
if(ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LOperator())) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LOperator());
const term_ = ff_compiler_Parser.Parser_parseUnary(self_);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, ff_compiler_Token.Token_at(token_));
const target_ = ff_compiler_Syntax.DynamicCall(ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(token_), ff_compiler_Token.Token_raw(token_)), false);
return ff_compiler_Syntax.ECall(ff_compiler_Token.Token_at(token_), target_, effect_, ff_core_List.Empty(), ff_core_List.Link(ff_compiler_Syntax.Argument(term_.at_, ff_core_Option.None(), term_), ff_core_List.Empty()), ff_core_List.Empty())
} else {
return ff_compiler_Parser.Parser_parseFieldsAndCalls(self_)
}
}

export async function Parser_parseFieldsAndCalls$(self_, $c) {
const tailCall_ = ((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LKeyword()) && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "tailcall"))
? (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LKeyword());
return true
})())
: false);
let result_ = ff_compiler_Parser.Parser_parseAtom(self_);
while(((ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketLeft()) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LColon())) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDot()))) {
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
} else {
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseTypeArguments(self_, false));
const arguments_ = ff_compiler_Parser.Parser_parseFunctionArguments(self_, result_.at_, true);
const effect_ = ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_);
const target_ = ff_compiler_Syntax.DynamicCall(result_, tailCall_);
result_ = ff_compiler_Syntax.ECall(result_.at_, target_, effect_, typeArguments_, arguments_.first_, ff_core_List.Empty());
if((arguments_.second_ && ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LLower()))) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
result_ = ff_compiler_Syntax.EField(ff_compiler_Token.Token_at(token_), false, result_, ff_compiler_Token.Token_raw(token_))
}
}
};
return result_
}

export async function Parser_parseAtom$(self_, $c) {
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
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ("Expected atom, got " + ff_compiler_Token.Token_raw(ff_compiler_Parser.Parser_current(self_)))), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
}

export async function Parser_parseVariant$(self_, prefix_, $c) {
const token_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LUpper());
const name_ = (prefix_ + ff_compiler_Token.Token_raw(token_));
const typeArguments_ = ((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "["))
? ff_core_List.Empty()
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

export async function Parser_parseCopy$(self_, record_, $c) {
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
? ff_core_List.Empty()
: ff_compiler_Parser.Parser_parseRecord(self_, ff_core_Option.Some(ff_compiler_Token.Token_at(token_))));
return ff_compiler_Syntax.ECopy(ff_compiler_Token.Token_at(token_), name_, record_, fields_)
}

export async function Parser_parseRecord$(self_, copyAt_, $c) {
const fields_ = ff_core_Stack.make_();
const startBracketAt_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "("));
const startAt_ = ff_core_Option.Option_else(copyAt_, (() => {
return startBracketAt_
}));
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
const field_ = (((!ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_)) || ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LAssign()))
? (await (async function() {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
return ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseTerm(self_))
})())
: ff_compiler_Syntax.Field(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Syntax.EVariable(ff_compiler_Token.Token_at(fieldToken_), ff_compiler_Token.Token_raw(fieldToken_))));
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, ff_core_Stack.Stack_size(fields_), ff_core_Option.Option_filter(ff_core_Option.Some(field_.name_), ((_w1) => {
return (_w1 !== "")
}))));
self_.lspEmittedArgumentHook_ = true
}
};
ff_core_Stack.Stack_push(fields_, field_);
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
if((ff_compiler_LspHook.LspHook_isEnabled(self_.lspHook_) && (!self_.lspEmittedArgumentHook_))) {
if(ff_compiler_LspHook.strictlyBetween_(startAt_, ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), self_.lspHook_.at_, 1)) {
ff_compiler_LspHook.LspHook_emit(self_.lspHook_, ff_compiler_LspHook.ParseArgumentHook(startAt_, ff_core_Stack.Stack_size(fields_), ff_core_Option.None()));
self_.lspEmittedArgumentHook_ = true
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_Stack.Stack_toList(fields_, 0, 9007199254740991)
}

export async function Parser_parseRecordType$(self_, $c) {
const fields_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LColon());
ff_core_Stack.Stack_push(fields_, ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parseType(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Stack.Stack_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function Parser_parseRecordPattern$(self_, $c) {
const fields_ = ff_core_Stack.make_();
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "(");
while((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
const fieldToken_ = ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LLower());
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LAssign());
ff_core_Stack.Stack_push(fields_, ff_core_Pair.Pair(ff_compiler_Token.Token_raw(fieldToken_), ff_compiler_Parser.Parser_parsePattern(self_)));
if((!ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LBracketRight()))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), ")");
return ff_core_List.List_sortBy(ff_core_Stack.Stack_toList(fields_, 0, 9007199254740991), ((_w1) => {
return _w1.first_
}), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String)
}

export async function Parser_parseListPattern$(self_, $c) {
function convertListPattern_(at_, items_) {
{
const at_a = at_;
const items_a = items_;
{
if(items_a.Empty) {
return ff_compiler_Syntax.PVariant(at_, "ff:core/List.Empty", ff_core_List.Empty())
return
}
}
{
if(items_a.Link) {
const p_ = items_a.head_.first_;
if(!items_a.head_.second_) {
const ps_ = items_a.tail_;
return ff_compiler_Syntax.PVariant(at_, "ff:core/List.Link", ff_core_List.Link(p_, ff_core_List.Link(convertListPattern_(at_, ps_), ff_core_List.Empty())))
return
}
}
}
{
if(items_a.Link) {
const p_ = items_a.head_.first_;
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
const p_ = items_a.head_.first_;
if(items_a.head_.second_) {
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(p_.at_, "Invalid pattern: ... is only allowed for the last element in a list"), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
return
}
}
}
}
}
const items_ = ff_core_Stack.make_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
const pattern_ = ((spread_ && ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))
? ff_compiler_Syntax.PVariable(ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_current(self_)), ff_core_Option.None())
: ff_compiler_Parser.Parser_parsePattern(self_));
ff_core_Stack.Stack_push(items_, ff_core_Pair.Pair(pattern_, spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return convertListPattern_(at_, ff_core_Stack.Stack_toList(items_, 0, 9007199254740991))
}

export async function Parser_parseList$(self_, $c) {
const items_ = ff_core_Stack.make_();
const at_ = ff_compiler_Token.Token_at(ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketLeft(), "["));
while((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
const spread_ = ff_compiler_Token.Token_is(ff_compiler_Parser.Parser_current(self_), ff_compiler_Token.LDotDotDot());
if(spread_) {
ff_compiler_Parser.Parser_skip(self_, ff_compiler_Token.LDotDotDot())
};
ff_core_Stack.Stack_push(items_, ff_core_Pair.Pair(ff_compiler_Parser.Parser_parseTerm(self_), spread_));
if((!ff_compiler_Token.Token_rawIs(ff_compiler_Parser.Parser_current(self_), "]"))) {
ff_compiler_Parser.Parser_skipSeparator(self_, ff_compiler_Token.LComma())
}
};
ff_compiler_Parser.Parser_rawSkip(self_, ff_compiler_Token.LBracketRight(), "]");
return ff_compiler_Syntax.EList(at_, ff_compiler_Parser.Parser_freshUnificationVariable(self_, at_), ff_core_Stack.Stack_toList(items_, 0, 9007199254740991))
}

export const ff_core_Any_HasAnyTag$ff_compiler_Parser_Poly = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Parser.Poly" + "[") + "]"))
},
async anyTag_$($c) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Parser.Poly" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Parser_ParsedTargets = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Parser.ParsedTargets" + "[") + "]"))
},
async anyTag_$($c) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Parser.ParsedTargets" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Parser_Poly = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("Poly" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((("Poly" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.generics_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Constraint).show_(z_.constraints_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Parser_ParsedTargets = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((((("ParsedTargets" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda).show_(z_.js_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.jsSync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.jsAsync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda).show_(z_.browser_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.browserSync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.browserAsync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda).show_(z_.node_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.nodeSync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.nodeAsync_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((((("ParsedTargets" + "(") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda).show_(z_.js_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.jsSync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.jsAsync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda).show_(z_.browser_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.browserSync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.browserAsync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Show_Show$ff_compiler_Syntax_Lambda).show_(z_.node_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.nodeSync_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.nodeAsync_)) + ")")
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Parser_Poly = {
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
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_))
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
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.generics_, y_.generics_) && ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Constraint).equals_(x_.constraints_, y_.constraints_))
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Parser_ParsedTargets = {
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
return (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda).equals_(x_.js_, y_.js_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.jsSync_, y_.jsSync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.jsAsync_, y_.jsAsync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda).equals_(x_.browser_, y_.browser_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.browserSync_, y_.browserSync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.browserAsync_, y_.browserAsync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda).equals_(x_.node_, y_.node_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.nodeSync_, y_.nodeSync_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.nodeAsync_, y_.nodeAsync_)))))))))
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
return (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda).equals_(x_.js_, y_.js_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.jsSync_, y_.jsSync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.jsAsync_, y_.jsAsync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda).equals_(x_.browser_, y_.browser_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.browserSync_, y_.browserSync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.browserAsync_, y_.browserAsync_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Equal_Equal$ff_compiler_Syntax_Lambda).equals_(x_.node_, y_.node_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.nodeSync_, y_.nodeSync_) && ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.nodeAsync_, y_.nodeAsync_)))))))))
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Parser_Poly = {
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
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Parser_ParsedTargets = {
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
const jsOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda).compare_(x_.js_, y_.js_);
if((jsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return jsOrdering_
} else {
const jsSyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.jsSync_, y_.jsSync_);
if((jsSyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return jsSyncOrdering_
} else {
const jsAsyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.jsAsync_, y_.jsAsync_);
if((jsAsyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return jsAsyncOrdering_
} else {
const browserOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda).compare_(x_.browser_, y_.browser_);
if((browserOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserOrdering_
} else {
const browserSyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.browserSync_, y_.browserSync_);
if((browserSyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserSyncOrdering_
} else {
const browserAsyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.browserAsync_, y_.browserAsync_);
if((browserAsyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserAsyncOrdering_
} else {
const nodeOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda).compare_(x_.node_, y_.node_);
if((nodeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeOrdering_
} else {
const nodeSyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.nodeSync_, y_.nodeSync_);
if((nodeSyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeSyncOrdering_
} else {
const nodeAsyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.nodeAsync_, y_.nodeAsync_);
if((nodeAsyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeAsyncOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
}
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
const jsOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda).compare_(x_.js_, y_.js_);
if((jsOrdering_ !== ff_core_Ordering.OrderingSame())) {
return jsOrdering_
} else {
const jsSyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.jsSync_, y_.jsSync_);
if((jsSyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return jsSyncOrdering_
} else {
const jsAsyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.jsAsync_, y_.jsAsync_);
if((jsAsyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return jsAsyncOrdering_
} else {
const browserOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda).compare_(x_.browser_, y_.browser_);
if((browserOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserOrdering_
} else {
const browserSyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.browserSync_, y_.browserSync_);
if((browserSyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserSyncOrdering_
} else {
const browserAsyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.browserAsync_, y_.browserAsync_);
if((browserAsyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return browserAsyncOrdering_
} else {
const nodeOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_Lambda).compare_(x_.node_, y_.node_);
if((nodeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeOrdering_
} else {
const nodeSyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.nodeSync_, y_.nodeSync_);
if((nodeSyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeSyncOrdering_
} else {
const nodeAsyncOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.nodeAsync_, y_.nodeAsync_);
if((nodeAsyncOrdering_ !== ff_core_Ordering.OrderingSame())) {
return nodeAsyncOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
}
}
}
}
}
}
return
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Parser_Poly = {
serializeUsing_(serialization_, x_) {
{
const serialization_a = serialization_;
const x_a = x_;
{
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, value_.constraints_)
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Parser.Poly(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_))
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.generics_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).serializeUsing_(serialization_, value_.constraints_)
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Parser.Poly(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Constraint).deserializeUsing_(serialization_))
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

export const ff_core_Serializable_Serializable$ff_compiler_Parser_ParsedTargets = {
serializeUsing_(serialization_, x_) {
{
const serialization_a = serialization_;
const x_a = x_;
{
const value_ = x_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).serializeUsing_(serialization_, value_.js_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.jsSync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.jsAsync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).serializeUsing_(serialization_, value_.browser_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.browserSync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.browserAsync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).serializeUsing_(serialization_, value_.node_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.nodeSync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.nodeAsync_)
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
return ff_compiler_Parser.ParsedTargets(ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).serializeUsing_(serialization_, value_.js_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.jsSync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.jsAsync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).serializeUsing_(serialization_, value_.browser_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.browserSync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.browserAsync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).serializeUsing_(serialization_, value_.node_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.nodeSync_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, value_.nodeAsync_)
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 32), 0);
return ff_compiler_Parser.ParsedTargets(ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_compiler_Syntax.ff_core_Serializable_Serializable$ff_compiler_Syntax_Lambda).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_))
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


