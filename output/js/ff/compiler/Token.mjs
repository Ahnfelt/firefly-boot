

import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Box from "../../ff/core/Box.mjs"

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

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Token
export function Token(file_, code_, kind_, startLine_, startLineOffset_, startOffset_, stopLine_, stopLineOffset_, stopOffset_) {
return {file_, code_, kind_, startLine_, startLineOffset_, startOffset_, stopLine_, stopLineOffset_, stopOffset_};
}

// type TokenKind
const LEnd$ = {LEnd: true};
export function LEnd() {
return LEnd$;
}
const LString$ = {LString: true};
export function LString() {
return LString$;
}
const LChar$ = {LChar: true};
export function LChar() {
return LChar$;
}
const LInt$ = {LInt: true};
export function LInt() {
return LInt$;
}
const LFloat$ = {LFloat: true};
export function LFloat() {
return LFloat$;
}
const LKeyword$ = {LKeyword: true};
export function LKeyword() {
return LKeyword$;
}
const LNamespace$ = {LNamespace: true};
export function LNamespace() {
return LNamespace$;
}
const LLower$ = {LLower: true};
export function LLower() {
return LLower$;
}
const LUpper$ = {LUpper: true};
export function LUpper() {
return LUpper$;
}
const LWildcard$ = {LWildcard: true};
export function LWildcard() {
return LWildcard$;
}
const LBracketLeft$ = {LBracketLeft: true};
export function LBracketLeft() {
return LBracketLeft$;
}
const LBracketRight$ = {LBracketRight: true};
export function LBracketRight() {
return LBracketRight$;
}
const LOperator$ = {LOperator: true};
export function LOperator() {
return LOperator$;
}
const LComma$ = {LComma: true};
export function LComma() {
return LComma$;
}
const LSeparator$ = {LSeparator: true};
export function LSeparator() {
return LSeparator$;
}
const LDot$ = {LDot: true};
export function LDot() {
return LDot$;
}
const LSemicolon$ = {LSemicolon: true};
export function LSemicolon() {
return LSemicolon$;
}
const LPipe$ = {LPipe: true};
export function LPipe() {
return LPipe$;
}
const LColon$ = {LColon: true};
export function LColon() {
return LColon$;
}
const LDotDotDot$ = {LDotDotDot: true};
export function LDotDotDot() {
return LDotDotDot$;
}
const LArrowThick$ = {LArrowThick: true};
export function LArrowThick() {
return LArrowThick$;
}
const LAssign$ = {LAssign: true};
export function LAssign() {
return LAssign$;
}
const LAssignPlus$ = {LAssignPlus: true};
export function LAssignPlus() {
return LAssignPlus$;
}
const LAssignMinus$ = {LAssignMinus: true};
export function LAssignMinus() {
return LAssignMinus$;
}
const LAssignLink$ = {LAssignLink: true};
export function LAssignLink() {
return LAssignLink$;
}







export function Token_at(token_) {
return ff_compiler_Syntax.Location(token_.file_, token_.startLine_, ((token_.startOffset_ - token_.startLineOffset_) + 1))
}

export function Token_end(token_) {
return ff_compiler_Syntax.Location(token_.file_, token_.startLine_, ((token_.stopOffset_ - token_.startLineOffset_) + 1))
}

export function Token_raw(token_) {
return ff_core_String.String_slice(token_.code_, token_.startOffset_, token_.stopOffset_)
}

export function Token_is(token_, kind1_) {
return ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_)
}

export function Token_is2(token_, kind1_, kind2_) {
return (ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind2_))
}

export function Token_is3(token_, kind1_, kind2_, kind3_) {
return ((ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind2_)) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind3_))
}

export function Token_rawIs(token_, value_) {
return (((token_.stopOffset_ - token_.startOffset_) === ff_core_String.String_size(value_)) && ff_core_String.String_startsWith(token_.code_, value_, token_.startOffset_))
}

export function Token_rawIs2(token_, value1_, value2_) {
return (ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_))
}

export function Token_rawIs3(token_, value1_, value2_, value3_) {
return ((ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_)) || ff_compiler_Token.Token_rawIs(token_, value3_))
}

export function Token_rawIs4(token_, value1_, value2_, value3_, value4_) {
return (((ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_)) || ff_compiler_Token.Token_rawIs(token_, value3_)) || ff_compiler_Token.Token_rawIs(token_, value4_))
}

export async function Token_at$(token_, $task) {
return ff_compiler_Syntax.Location(token_.file_, token_.startLine_, ((token_.startOffset_ - token_.startLineOffset_) + 1))
}

export async function Token_end$(token_, $task) {
return ff_compiler_Syntax.Location(token_.file_, token_.startLine_, ((token_.stopOffset_ - token_.startLineOffset_) + 1))
}

export async function Token_raw$(token_, $task) {
return ff_core_String.String_slice(token_.code_, token_.startOffset_, token_.stopOffset_)
}

export async function Token_is$(token_, kind1_, $task) {
return ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_)
}

export async function Token_is2$(token_, kind1_, kind2_, $task) {
return (ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind2_))
}

export async function Token_is3$(token_, kind1_, kind2_, kind3_, $task) {
return ((ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind2_)) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind3_))
}

export async function Token_rawIs$(token_, value_, $task) {
return (((token_.stopOffset_ - token_.startOffset_) === ff_core_String.String_size(value_)) && ff_core_String.String_startsWith(token_.code_, value_, token_.startOffset_))
}

export async function Token_rawIs2$(token_, value1_, value2_, $task) {
return (ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_))
}

export async function Token_rawIs3$(token_, value1_, value2_, value3_, $task) {
return ((ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_)) || ff_compiler_Token.Token_rawIs(token_, value3_))
}

export async function Token_rawIs4$(token_, value1_, value2_, value3_, value4_, $task) {
return (((ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_)) || ff_compiler_Token.Token_rawIs(token_, value3_)) || ff_compiler_Token.Token_rawIs(token_, value4_))
}

export function TokenKind_beforeSeparator(self_) {
{
const _1 = self_;
{
if(_1.LEnd) {
return false
return
}
}
{
if(_1.LString) {
return true
return
}
}
{
if(_1.LChar) {
return true
return
}
}
{
if(_1.LInt) {
return true
return
}
}
{
if(_1.LFloat) {
return true
return
}
}
{
if(_1.LKeyword) {
return true
return
}
}
{
if(_1.LNamespace) {
return false
return
}
}
{
if(_1.LLower) {
return true
return
}
}
{
if(_1.LUpper) {
return true
return
}
}
{
if(_1.LWildcard) {
return true
return
}
}
{
if(_1.LBracketLeft) {
return false
return
}
}
{
if(_1.LBracketRight) {
return true
return
}
}
{
if(_1.LOperator) {
return false
return
}
}
{
if(_1.LComma) {
return false
return
}
}
{
if(_1.LSeparator) {
return false
return
}
}
{
if(_1.LDot) {
return false
return
}
}
{
if(_1.LSemicolon) {
return false
return
}
}
{
if(_1.LPipe) {
return false
return
}
}
{
if(_1.LColon) {
return false
return
}
}
{
if(_1.LDotDotDot) {
return false
return
}
}
{
if(_1.LArrowThick) {
return false
return
}
}
{
if(_1.LAssign) {
return false
return
}
}
{
if(_1.LAssignPlus) {
return false
return
}
}
{
if(_1.LAssignMinus) {
return false
return
}
}
{
if(_1.LAssignLink) {
return false
return
}
}
}
}

export function TokenKind_afterSeparator(self_) {
{
const _1 = self_;
{
if(_1.LEnd) {
return false
return
}
}
{
if(_1.LString) {
return true
return
}
}
{
if(_1.LChar) {
return true
return
}
}
{
if(_1.LInt) {
return true
return
}
}
{
if(_1.LFloat) {
return true
return
}
}
{
if(_1.LKeyword) {
return true
return
}
}
{
if(_1.LNamespace) {
return true
return
}
}
{
if(_1.LLower) {
return true
return
}
}
{
if(_1.LUpper) {
return true
return
}
}
{
if(_1.LWildcard) {
return true
return
}
}
{
if(_1.LBracketLeft) {
return true
return
}
}
{
if(_1.LBracketRight) {
return false
return
}
}
{
if(_1.LOperator) {
return false
return
}
}
{
if(_1.LComma) {
return false
return
}
}
{
if(_1.LSeparator) {
return false
return
}
}
{
if(_1.LDot) {
return false
return
}
}
{
if(_1.LSemicolon) {
return false
return
}
}
{
if(_1.LPipe) {
return false
return
}
}
{
if(_1.LColon) {
return false
return
}
}
{
if(_1.LDotDotDot) {
return true
return
}
}
{
if(_1.LArrowThick) {
return false
return
}
}
{
if(_1.LAssign) {
return false
return
}
}
{
if(_1.LAssignPlus) {
return false
return
}
}
{
if(_1.LAssignMinus) {
return false
return
}
}
{
if(_1.LAssignLink) {
return false
return
}
}
}
}

export function TokenKind_afterKeyword(self_) {
{
const _1 = self_;
{
if(_1.LEnd) {
return false
return
}
}
{
if(_1.LString) {
return true
return
}
}
{
if(_1.LChar) {
return true
return
}
}
{
if(_1.LInt) {
return true
return
}
}
{
if(_1.LFloat) {
return true
return
}
}
{
if(_1.LKeyword) {
return true
return
}
}
{
if(_1.LNamespace) {
return true
return
}
}
{
if(_1.LLower) {
return true
return
}
}
{
if(_1.LUpper) {
return true
return
}
}
{
if(_1.LWildcard) {
return true
return
}
}
{
if(_1.LBracketLeft) {
return false
return
}
}
{
if(_1.LBracketRight) {
return false
return
}
}
{
if(_1.LOperator) {
return false
return
}
}
{
if(_1.LComma) {
return false
return
}
}
{
if(_1.LSeparator) {
return false
return
}
}
{
if(_1.LDot) {
return false
return
}
}
{
if(_1.LSemicolon) {
return false
return
}
}
{
if(_1.LPipe) {
return false
return
}
}
{
if(_1.LColon) {
return false
return
}
}
{
if(_1.LDotDotDot) {
return false
return
}
}
{
if(_1.LArrowThick) {
return false
return
}
}
{
if(_1.LAssign) {
return false
return
}
}
{
if(_1.LAssignPlus) {
return false
return
}
}
{
if(_1.LAssignMinus) {
return false
return
}
}
{
if(_1.LAssignLink) {
return false
return
}
}
}
}

export async function TokenKind_beforeSeparator$(self_, $task) {
{
const _1 = self_;
{
if(_1.LEnd) {
return false
return
}
}
{
if(_1.LString) {
return true
return
}
}
{
if(_1.LChar) {
return true
return
}
}
{
if(_1.LInt) {
return true
return
}
}
{
if(_1.LFloat) {
return true
return
}
}
{
if(_1.LKeyword) {
return true
return
}
}
{
if(_1.LNamespace) {
return false
return
}
}
{
if(_1.LLower) {
return true
return
}
}
{
if(_1.LUpper) {
return true
return
}
}
{
if(_1.LWildcard) {
return true
return
}
}
{
if(_1.LBracketLeft) {
return false
return
}
}
{
if(_1.LBracketRight) {
return true
return
}
}
{
if(_1.LOperator) {
return false
return
}
}
{
if(_1.LComma) {
return false
return
}
}
{
if(_1.LSeparator) {
return false
return
}
}
{
if(_1.LDot) {
return false
return
}
}
{
if(_1.LSemicolon) {
return false
return
}
}
{
if(_1.LPipe) {
return false
return
}
}
{
if(_1.LColon) {
return false
return
}
}
{
if(_1.LDotDotDot) {
return false
return
}
}
{
if(_1.LArrowThick) {
return false
return
}
}
{
if(_1.LAssign) {
return false
return
}
}
{
if(_1.LAssignPlus) {
return false
return
}
}
{
if(_1.LAssignMinus) {
return false
return
}
}
{
if(_1.LAssignLink) {
return false
return
}
}
}
}

export async function TokenKind_afterSeparator$(self_, $task) {
{
const _1 = self_;
{
if(_1.LEnd) {
return false
return
}
}
{
if(_1.LString) {
return true
return
}
}
{
if(_1.LChar) {
return true
return
}
}
{
if(_1.LInt) {
return true
return
}
}
{
if(_1.LFloat) {
return true
return
}
}
{
if(_1.LKeyword) {
return true
return
}
}
{
if(_1.LNamespace) {
return true
return
}
}
{
if(_1.LLower) {
return true
return
}
}
{
if(_1.LUpper) {
return true
return
}
}
{
if(_1.LWildcard) {
return true
return
}
}
{
if(_1.LBracketLeft) {
return true
return
}
}
{
if(_1.LBracketRight) {
return false
return
}
}
{
if(_1.LOperator) {
return false
return
}
}
{
if(_1.LComma) {
return false
return
}
}
{
if(_1.LSeparator) {
return false
return
}
}
{
if(_1.LDot) {
return false
return
}
}
{
if(_1.LSemicolon) {
return false
return
}
}
{
if(_1.LPipe) {
return false
return
}
}
{
if(_1.LColon) {
return false
return
}
}
{
if(_1.LDotDotDot) {
return true
return
}
}
{
if(_1.LArrowThick) {
return false
return
}
}
{
if(_1.LAssign) {
return false
return
}
}
{
if(_1.LAssignPlus) {
return false
return
}
}
{
if(_1.LAssignMinus) {
return false
return
}
}
{
if(_1.LAssignLink) {
return false
return
}
}
}
}

export async function TokenKind_afterKeyword$(self_, $task) {
{
const _1 = self_;
{
if(_1.LEnd) {
return false
return
}
}
{
if(_1.LString) {
return true
return
}
}
{
if(_1.LChar) {
return true
return
}
}
{
if(_1.LInt) {
return true
return
}
}
{
if(_1.LFloat) {
return true
return
}
}
{
if(_1.LKeyword) {
return true
return
}
}
{
if(_1.LNamespace) {
return true
return
}
}
{
if(_1.LLower) {
return true
return
}
}
{
if(_1.LUpper) {
return true
return
}
}
{
if(_1.LWildcard) {
return true
return
}
}
{
if(_1.LBracketLeft) {
return false
return
}
}
{
if(_1.LBracketRight) {
return false
return
}
}
{
if(_1.LOperator) {
return false
return
}
}
{
if(_1.LComma) {
return false
return
}
}
{
if(_1.LSeparator) {
return false
return
}
}
{
if(_1.LDot) {
return false
return
}
}
{
if(_1.LSemicolon) {
return false
return
}
}
{
if(_1.LPipe) {
return false
return
}
}
{
if(_1.LColon) {
return false
return
}
}
{
if(_1.LDotDotDot) {
return false
return
}
}
{
if(_1.LArrowThick) {
return false
return
}
}
{
if(_1.LAssign) {
return false
return
}
}
{
if(_1.LAssignPlus) {
return false
return
}
}
{
if(_1.LAssignMinus) {
return false
return
}
}
{
if(_1.LAssignLink) {
return false
return
}
}
}
}

export const ff_core_Any_HasAnyTag$ff_compiler_Token_Token = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Token.Token" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Token.Token" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Token_TokenKind = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Token.TokenKind" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Token.TokenKind" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Token_Token = {
show_(value_) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((((("Token" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.code_)) + ", ") + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(z_.kind_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopOffset_)) + ")")
return
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
const z_ = value_a;
return ((((((((((((((((((("Token" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.code_)) + ", ") + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(z_.kind_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopOffset_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Token_TokenKind = {
show_(value_) {
{
const value_a = value_;
{
if(value_a.LEnd) {
const z_ = value_a;
return "LEnd"
return
}
}
{
if(value_a.LString) {
const z_ = value_a;
return "LString"
return
}
}
{
if(value_a.LChar) {
const z_ = value_a;
return "LChar"
return
}
}
{
if(value_a.LInt) {
const z_ = value_a;
return "LInt"
return
}
}
{
if(value_a.LFloat) {
const z_ = value_a;
return "LFloat"
return
}
}
{
if(value_a.LKeyword) {
const z_ = value_a;
return "LKeyword"
return
}
}
{
if(value_a.LNamespace) {
const z_ = value_a;
return "LNamespace"
return
}
}
{
if(value_a.LLower) {
const z_ = value_a;
return "LLower"
return
}
}
{
if(value_a.LUpper) {
const z_ = value_a;
return "LUpper"
return
}
}
{
if(value_a.LWildcard) {
const z_ = value_a;
return "LWildcard"
return
}
}
{
if(value_a.LBracketLeft) {
const z_ = value_a;
return "LBracketLeft"
return
}
}
{
if(value_a.LBracketRight) {
const z_ = value_a;
return "LBracketRight"
return
}
}
{
if(value_a.LOperator) {
const z_ = value_a;
return "LOperator"
return
}
}
{
if(value_a.LComma) {
const z_ = value_a;
return "LComma"
return
}
}
{
if(value_a.LSeparator) {
const z_ = value_a;
return "LSeparator"
return
}
}
{
if(value_a.LDot) {
const z_ = value_a;
return "LDot"
return
}
}
{
if(value_a.LSemicolon) {
const z_ = value_a;
return "LSemicolon"
return
}
}
{
if(value_a.LPipe) {
const z_ = value_a;
return "LPipe"
return
}
}
{
if(value_a.LColon) {
const z_ = value_a;
return "LColon"
return
}
}
{
if(value_a.LDotDotDot) {
const z_ = value_a;
return "LDotDotDot"
return
}
}
{
if(value_a.LArrowThick) {
const z_ = value_a;
return "LArrowThick"
return
}
}
{
if(value_a.LAssign) {
const z_ = value_a;
return "LAssign"
return
}
}
{
if(value_a.LAssignPlus) {
const z_ = value_a;
return "LAssignPlus"
return
}
}
{
if(value_a.LAssignMinus) {
const z_ = value_a;
return "LAssignMinus"
return
}
}
{
if(value_a.LAssignLink) {
const z_ = value_a;
return "LAssignLink"
return
}
}
}
},
async show_$(value_, $task) {
{
const value_a = value_;
{
if(value_a.LEnd) {
const z_ = value_a;
return "LEnd"
return
}
}
{
if(value_a.LString) {
const z_ = value_a;
return "LString"
return
}
}
{
if(value_a.LChar) {
const z_ = value_a;
return "LChar"
return
}
}
{
if(value_a.LInt) {
const z_ = value_a;
return "LInt"
return
}
}
{
if(value_a.LFloat) {
const z_ = value_a;
return "LFloat"
return
}
}
{
if(value_a.LKeyword) {
const z_ = value_a;
return "LKeyword"
return
}
}
{
if(value_a.LNamespace) {
const z_ = value_a;
return "LNamespace"
return
}
}
{
if(value_a.LLower) {
const z_ = value_a;
return "LLower"
return
}
}
{
if(value_a.LUpper) {
const z_ = value_a;
return "LUpper"
return
}
}
{
if(value_a.LWildcard) {
const z_ = value_a;
return "LWildcard"
return
}
}
{
if(value_a.LBracketLeft) {
const z_ = value_a;
return "LBracketLeft"
return
}
}
{
if(value_a.LBracketRight) {
const z_ = value_a;
return "LBracketRight"
return
}
}
{
if(value_a.LOperator) {
const z_ = value_a;
return "LOperator"
return
}
}
{
if(value_a.LComma) {
const z_ = value_a;
return "LComma"
return
}
}
{
if(value_a.LSeparator) {
const z_ = value_a;
return "LSeparator"
return
}
}
{
if(value_a.LDot) {
const z_ = value_a;
return "LDot"
return
}
}
{
if(value_a.LSemicolon) {
const z_ = value_a;
return "LSemicolon"
return
}
}
{
if(value_a.LPipe) {
const z_ = value_a;
return "LPipe"
return
}
}
{
if(value_a.LColon) {
const z_ = value_a;
return "LColon"
return
}
}
{
if(value_a.LDotDotDot) {
const z_ = value_a;
return "LDotDotDot"
return
}
}
{
if(value_a.LArrowThick) {
const z_ = value_a;
return "LArrowThick"
return
}
}
{
if(value_a.LAssign) {
const z_ = value_a;
return "LAssign"
return
}
}
{
if(value_a.LAssignPlus) {
const z_ = value_a;
return "LAssignPlus"
return
}
}
{
if(value_a.LAssignMinus) {
const z_ = value_a;
return "LAssignMinus"
return
}
}
{
if(value_a.LAssignLink) {
const z_ = value_a;
return "LAssignLink"
return
}
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Token_Token = {
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
return ((x_.file_ === y_.file_) && ((x_.code_ === y_.code_) && (ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(x_.kind_, y_.kind_) && ((x_.startLine_ === y_.startLine_) && ((x_.startLineOffset_ === y_.startLineOffset_) && ((x_.startOffset_ === y_.startOffset_) && ((x_.stopLine_ === y_.stopLine_) && ((x_.stopLineOffset_ === y_.stopLineOffset_) && (x_.stopOffset_ === y_.stopOffset_)))))))))
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
return ((x_.file_ === y_.file_) && ((x_.code_ === y_.code_) && (ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(x_.kind_, y_.kind_) && ((x_.startLine_ === y_.startLine_) && ((x_.startLineOffset_ === y_.startLineOffset_) && ((x_.startOffset_ === y_.startOffset_) && ((x_.stopLine_ === y_.stopLine_) && ((x_.stopLineOffset_ === y_.stopLineOffset_) && (x_.stopOffset_ === y_.stopOffset_)))))))))
return
}
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Token_TokenKind = {
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
return false
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
return false
return
}
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Token_Token = {
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
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const codeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.code_, y_.code_);
if((codeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return codeOrdering_
} else {
const kindOrdering_ = ff_compiler_Token.ff_core_Ordering_Order$ff_compiler_Token_TokenKind.compare_(x_.kind_, y_.kind_);
if((kindOrdering_ !== ff_core_Ordering.OrderingSame())) {
return kindOrdering_
} else {
const startLineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.startLine_, y_.startLine_);
if((startLineOrdering_ !== ff_core_Ordering.OrderingSame())) {
return startLineOrdering_
} else {
const startLineOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.startLineOffset_, y_.startLineOffset_);
if((startLineOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return startLineOffsetOrdering_
} else {
const startOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.startOffset_, y_.startOffset_);
if((startOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return startOffsetOrdering_
} else {
const stopLineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.stopLine_, y_.stopLine_);
if((stopLineOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stopLineOrdering_
} else {
const stopLineOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.stopLineOffset_, y_.stopLineOffset_);
if((stopLineOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stopLineOffsetOrdering_
} else {
const stopOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.stopOffset_, y_.stopOffset_);
if((stopOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stopOffsetOrdering_
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
const fileOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.file_, y_.file_);
if((fileOrdering_ !== ff_core_Ordering.OrderingSame())) {
return fileOrdering_
} else {
const codeOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.code_, y_.code_);
if((codeOrdering_ !== ff_core_Ordering.OrderingSame())) {
return codeOrdering_
} else {
const kindOrdering_ = ff_compiler_Token.ff_core_Ordering_Order$ff_compiler_Token_TokenKind.compare_(x_.kind_, y_.kind_);
if((kindOrdering_ !== ff_core_Ordering.OrderingSame())) {
return kindOrdering_
} else {
const startLineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.startLine_, y_.startLine_);
if((startLineOrdering_ !== ff_core_Ordering.OrderingSame())) {
return startLineOrdering_
} else {
const startLineOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.startLineOffset_, y_.startLineOffset_);
if((startLineOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return startLineOffsetOrdering_
} else {
const startOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.startOffset_, y_.startOffset_);
if((startOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return startOffsetOrdering_
} else {
const stopLineOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.stopLine_, y_.stopLine_);
if((stopLineOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stopLineOrdering_
} else {
const stopLineOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.stopLineOffset_, y_.stopLineOffset_);
if((stopLineOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stopLineOffsetOrdering_
} else {
const stopOffsetOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(x_.stopOffset_, y_.stopOffset_);
if((stopOffsetOrdering_ !== ff_core_Ordering.OrderingSame())) {
return stopOffsetOrdering_
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

export const ff_core_Ordering_Order$ff_compiler_Token_TokenKind = {
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
function number_(z_) {
{
const z_a = z_;
{
if(z_a.LEnd) {
return 0
return
}
}
{
if(z_a.LString) {
return 1
return
}
}
{
if(z_a.LChar) {
return 2
return
}
}
{
if(z_a.LInt) {
return 3
return
}
}
{
if(z_a.LFloat) {
return 4
return
}
}
{
if(z_a.LKeyword) {
return 5
return
}
}
{
if(z_a.LNamespace) {
return 6
return
}
}
{
if(z_a.LLower) {
return 7
return
}
}
{
if(z_a.LUpper) {
return 8
return
}
}
{
if(z_a.LWildcard) {
return 9
return
}
}
{
if(z_a.LBracketLeft) {
return 10
return
}
}
{
if(z_a.LBracketRight) {
return 11
return
}
}
{
if(z_a.LOperator) {
return 12
return
}
}
{
if(z_a.LComma) {
return 13
return
}
}
{
if(z_a.LSeparator) {
return 14
return
}
}
{
if(z_a.LDot) {
return 15
return
}
}
{
if(z_a.LSemicolon) {
return 16
return
}
}
{
if(z_a.LPipe) {
return 17
return
}
}
{
if(z_a.LColon) {
return 18
return
}
}
{
if(z_a.LDotDotDot) {
return 19
return
}
}
{
if(z_a.LArrowThick) {
return 20
return
}
}
{
if(z_a.LAssign) {
return 21
return
}
}
{
if(z_a.LAssignPlus) {
return 22
return
}
}
{
if(z_a.LAssignMinus) {
return 23
return
}
}
{
if(z_a.LAssignLink) {
return 24
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
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
function number_(z_) {
{
const z_a = z_;
{
if(z_a.LEnd) {
return 0
return
}
}
{
if(z_a.LString) {
return 1
return
}
}
{
if(z_a.LChar) {
return 2
return
}
}
{
if(z_a.LInt) {
return 3
return
}
}
{
if(z_a.LFloat) {
return 4
return
}
}
{
if(z_a.LKeyword) {
return 5
return
}
}
{
if(z_a.LNamespace) {
return 6
return
}
}
{
if(z_a.LLower) {
return 7
return
}
}
{
if(z_a.LUpper) {
return 8
return
}
}
{
if(z_a.LWildcard) {
return 9
return
}
}
{
if(z_a.LBracketLeft) {
return 10
return
}
}
{
if(z_a.LBracketRight) {
return 11
return
}
}
{
if(z_a.LOperator) {
return 12
return
}
}
{
if(z_a.LComma) {
return 13
return
}
}
{
if(z_a.LSeparator) {
return 14
return
}
}
{
if(z_a.LDot) {
return 15
return
}
}
{
if(z_a.LSemicolon) {
return 16
return
}
}
{
if(z_a.LPipe) {
return 17
return
}
}
{
if(z_a.LColon) {
return 18
return
}
}
{
if(z_a.LDotDotDot) {
return 19
return
}
}
{
if(z_a.LArrowThick) {
return 20
return
}
}
{
if(z_a.LAssign) {
return 21
return
}
}
{
if(z_a.LAssignPlus) {
return 22
return
}
}
{
if(z_a.LAssignMinus) {
return 23
return
}
}
{
if(z_a.LAssignLink) {
return 24
return
}
}
}
}
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_Int_Int.compare_(number_(x_), number_(y_))
return
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Token_Token = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.code_);
ff_compiler_Token.ff_core_Serializable_Serializable$ff_compiler_Token_TokenKind.serializeUsing_(serialization_, v_.kind_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.startLine_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.startLineOffset_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.startOffset_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.stopLine_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.stopLineOffset_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.stopOffset_)
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
return ff_compiler_Token.Token(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Token.ff_core_Serializable_Serializable$ff_compiler_Token_TokenKind.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.file_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.code_);
ff_compiler_Token.ff_core_Serializable_Serializable$ff_compiler_Token_TokenKind.serializeUsing_(serialization_, v_.kind_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.startLine_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.startLineOffset_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.startOffset_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.stopLine_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.stopLineOffset_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.serializeUsing_(serialization_, v_.stopOffset_)
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Token.Token(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_compiler_Token.ff_core_Serializable_Serializable$ff_compiler_Token_TokenKind.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_Int_Int.deserializeUsing_(serialization_))
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

export const ff_core_Serializable_Serializable$ff_compiler_Token_TokenKind = {
serializeUsing_(serialization_, value_) {
{
const serialization_a = serialization_;
const value_a = value_;
{
if(value_a.LEnd) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LString) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LChar) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LInt) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LFloat) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LKeyword) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LNamespace) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 6);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LLower) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 7);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LUpper) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 8);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LWildcard) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 9);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LBracketLeft) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 10);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LBracketRight) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 11);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LOperator) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 12);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LComma) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 13);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LSeparator) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 14);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LDot) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 15);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LSemicolon) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 16);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LPipe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 17);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LColon) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 18);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LDotDotDot) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 19);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LArrowThick) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 20);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssign) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 21);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssignPlus) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 22);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssignMinus) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 23);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssignLink) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 24);
serialization_.offset_ += 1
return
}
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
return ff_compiler_Token.LEnd()
return
}
}
{
if(_1 == 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Token.LString()
return
}
}
{
if(_1 == 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Token.LChar()
return
}
}
{
if(_1 == 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
return ff_compiler_Token.LInt()
return
}
}
{
if(_1 == 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LFloat()
return
}
}
{
if(_1 == 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Token.LKeyword()
return
}
}
{
if(_1 == 6) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LNamespace()
return
}
}
{
if(_1 == 7) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LLower()
return
}
}
{
if(_1 == 8) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LUpper()
return
}
}
{
if(_1 == 9) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Token.LWildcard()
return
}
}
{
if(_1 == 10) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Token.LBracketLeft()
return
}
}
{
if(_1 == 11) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Token.LBracketRight()
return
}
}
{
if(_1 == 12) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Token.LOperator()
return
}
}
{
if(_1 == 13) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LComma()
return
}
}
{
if(_1 == 14) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LSeparator()
return
}
}
{
if(_1 == 15) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
return ff_compiler_Token.LDot()
return
}
}
{
if(_1 == 16) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LSemicolon()
return
}
}
{
if(_1 == 17) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Token.LPipe()
return
}
}
{
if(_1 == 18) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LColon()
return
}
}
{
if(_1 == 19) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LDotDotDot()
return
}
}
{
if(_1 == 20) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Token.LArrowThick()
return
}
}
{
if(_1 == 21) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Token.LAssign()
return
}
}
{
if(_1 == 22) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Token.LAssignPlus()
return
}
}
{
if(_1 == 23) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Token.LAssignMinus()
return
}
}
{
if(_1 == 24) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Token.LAssignLink()
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
if(value_a.LEnd) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LString) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 1);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LChar) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 2);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LInt) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 3);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LFloat) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 4);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LKeyword) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 5);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LNamespace) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 6);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LLower) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 7);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LUpper) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 8);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LWildcard) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 9);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LBracketLeft) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 10);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LBracketRight) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 11);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LOperator) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 12);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LComma) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 13);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LSeparator) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 14);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LDot) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 15);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LSemicolon) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 16);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LPipe) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 17);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LColon) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 18);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LDotDotDot) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 19);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LArrowThick) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 20);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssign) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 21);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssignPlus) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 22);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssignMinus) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 23);
serialization_.offset_ += 1
return
}
}
{
if(value_a.LAssignLink) {
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 24);
serialization_.offset_ += 1
return
}
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
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
return ff_compiler_Token.LEnd()
return
}
}
{
if(_1 == 1) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Token.LString()
return
}
}
{
if(_1 == 2) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Token.LChar()
return
}
}
{
if(_1 == 3) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
return ff_compiler_Token.LInt()
return
}
}
{
if(_1 == 4) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LFloat()
return
}
}
{
if(_1 == 5) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 26), 0);
return ff_compiler_Token.LKeyword()
return
}
}
{
if(_1 == 6) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LNamespace()
return
}
}
{
if(_1 == 7) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LLower()
return
}
}
{
if(_1 == 8) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LUpper()
return
}
}
{
if(_1 == 9) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Token.LWildcard()
return
}
}
{
if(_1 == 10) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Token.LBracketLeft()
return
}
}
{
if(_1 == 11) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Token.LBracketRight()
return
}
}
{
if(_1 == 12) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 27), 0);
return ff_compiler_Token.LOperator()
return
}
}
{
if(_1 == 13) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LComma()
return
}
}
{
if(_1 == 14) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LSeparator()
return
}
}
{
if(_1 == 15) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 22), 0);
return ff_compiler_Token.LDot()
return
}
}
{
if(_1 == 16) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LSemicolon()
return
}
}
{
if(_1 == 17) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 23), 0);
return ff_compiler_Token.LPipe()
return
}
}
{
if(_1 == 18) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 24), 0);
return ff_compiler_Token.LColon()
return
}
}
{
if(_1 == 19) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 28), 0);
return ff_compiler_Token.LDotDotDot()
return
}
}
{
if(_1 == 20) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Token.LArrowThick()
return
}
}
{
if(_1 == 21) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 25), 0);
return ff_compiler_Token.LAssign()
return
}
}
{
if(_1 == 22) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Token.LAssignPlus()
return
}
}
{
if(_1 == 23) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 30), 0);
return ff_compiler_Token.LAssignMinus()
return
}
}
{
if(_1 == 24) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 29), 0);
return ff_compiler_Token.LAssignLink()
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


