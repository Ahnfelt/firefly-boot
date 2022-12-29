

import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

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

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

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

export async function Token_at$(token_, $c) {
return ff_compiler_Syntax.Location(token_.file_, token_.startLine_, ((token_.startOffset_ - token_.startLineOffset_) + 1))
}

export async function Token_raw$(token_, $c) {
return ff_core_String.String_slice(token_.code_, token_.startOffset_, token_.stopOffset_)
}

export async function Token_is$(token_, kind1_, $c) {
return ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_)
}

export async function Token_is2$(token_, kind1_, kind2_, $c) {
return (ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind2_))
}

export async function Token_is3$(token_, kind1_, kind2_, kind3_, $c) {
return ((ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind1_) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind2_)) || ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(token_.kind_, kind3_))
}

export async function Token_rawIs$(token_, value_, $c) {
return (((token_.stopOffset_ - token_.startOffset_) === ff_core_String.String_size(value_)) && ff_core_String.String_startsWith(token_.code_, value_, token_.startOffset_))
}

export async function Token_rawIs2$(token_, value1_, value2_, $c) {
return (ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_))
}

export async function Token_rawIs3$(token_, value1_, value2_, value3_, $c) {
return ((ff_compiler_Token.Token_rawIs(token_, value1_) || ff_compiler_Token.Token_rawIs(token_, value2_)) || ff_compiler_Token.Token_rawIs(token_, value3_))
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

export async function TokenKind_beforeSeparator$(self_, $c) {
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

export async function TokenKind_afterSeparator$(self_, $c) {
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

export async function TokenKind_afterKeyword$(self_, $c) {
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

export const ff_core_Any_ToFromAny$ff_compiler_Token_Token = {
toAny_(x_) {
return {typeTag: 'TConstructor(Location("Token.ff", 3, 6), "ff:compiler/Token.Token", [])', value: x_}
},
fromAny_(x_) {
return x_.typeTag == 'TConstructor(Location("Token.ff", 3, 6), "ff:compiler/Token.Token", [])' ? ff_core_Option.Some(x_.value) : ff_core_Option.None()
},
async toAny_$(x_, $c) {
throw new Error('Function toAny is missing on this target in async context.');
},
async fromAny_$(x_, $c) {
throw new Error('Function fromAny is missing on this target in async context.');
}
};

export const ff_core_Any_ToFromAny$ff_compiler_Token_TokenKind = {
toAny_(x_) {
return {typeTag: 'TConstructor(Location("Token.ff", 52, 6), "ff:compiler/Token.TokenKind", [])', value: x_}
},
fromAny_(x_) {
return x_.typeTag == 'TConstructor(Location("Token.ff", 52, 6), "ff:compiler/Token.TokenKind", [])' ? ff_core_Option.Some(x_.value) : ff_core_Option.None()
},
async toAny_$(x_, $c) {
throw new Error('Function toAny is missing on this target in async context.');
},
async fromAny_$(x_, $c) {
throw new Error('Function fromAny is missing on this target in async context.');
}
};

export const ff_core_Show_Show$ff_compiler_Token_Token = {
show_(x_) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((((("Token" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.code_)) + ", ") + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(z_.kind_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopOffset_)) + ")")
return
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
const z_ = x_a;
return ((((((((((((((((((("Token" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.file_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.code_)) + ", ") + ff_compiler_Token.ff_core_Show_Show$ff_compiler_Token_TokenKind.show_(z_.kind_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.startOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLine_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopLineOffset_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Int_Int.show_(z_.stopOffset_)) + ")")
return
}
}
}
};

export const ff_core_Show_Show$ff_compiler_Token_TokenKind = {
show_(x_) {
{
const x_a = x_;
{
if(x_a.LEnd) {
const z_ = x_a;
return "LEnd"
return
}
}
{
if(x_a.LString) {
const z_ = x_a;
return "LString"
return
}
}
{
if(x_a.LChar) {
const z_ = x_a;
return "LChar"
return
}
}
{
if(x_a.LInt) {
const z_ = x_a;
return "LInt"
return
}
}
{
if(x_a.LFloat) {
const z_ = x_a;
return "LFloat"
return
}
}
{
if(x_a.LKeyword) {
const z_ = x_a;
return "LKeyword"
return
}
}
{
if(x_a.LNamespace) {
const z_ = x_a;
return "LNamespace"
return
}
}
{
if(x_a.LLower) {
const z_ = x_a;
return "LLower"
return
}
}
{
if(x_a.LUpper) {
const z_ = x_a;
return "LUpper"
return
}
}
{
if(x_a.LWildcard) {
const z_ = x_a;
return "LWildcard"
return
}
}
{
if(x_a.LBracketLeft) {
const z_ = x_a;
return "LBracketLeft"
return
}
}
{
if(x_a.LBracketRight) {
const z_ = x_a;
return "LBracketRight"
return
}
}
{
if(x_a.LOperator) {
const z_ = x_a;
return "LOperator"
return
}
}
{
if(x_a.LComma) {
const z_ = x_a;
return "LComma"
return
}
}
{
if(x_a.LSeparator) {
const z_ = x_a;
return "LSeparator"
return
}
}
{
if(x_a.LDot) {
const z_ = x_a;
return "LDot"
return
}
}
{
if(x_a.LSemicolon) {
const z_ = x_a;
return "LSemicolon"
return
}
}
{
if(x_a.LPipe) {
const z_ = x_a;
return "LPipe"
return
}
}
{
if(x_a.LColon) {
const z_ = x_a;
return "LColon"
return
}
}
{
if(x_a.LDotDotDot) {
const z_ = x_a;
return "LDotDotDot"
return
}
}
{
if(x_a.LArrowThick) {
const z_ = x_a;
return "LArrowThick"
return
}
}
{
if(x_a.LAssign) {
const z_ = x_a;
return "LAssign"
return
}
}
{
if(x_a.LAssignPlus) {
const z_ = x_a;
return "LAssignPlus"
return
}
}
{
if(x_a.LAssignMinus) {
const z_ = x_a;
return "LAssignMinus"
return
}
}
{
if(x_a.LAssignLink) {
const z_ = x_a;
return "LAssignLink"
return
}
}
}
},
async show_$(x_, $c) {
{
const x_a = x_;
{
if(x_a.LEnd) {
const z_ = x_a;
return "LEnd"
return
}
}
{
if(x_a.LString) {
const z_ = x_a;
return "LString"
return
}
}
{
if(x_a.LChar) {
const z_ = x_a;
return "LChar"
return
}
}
{
if(x_a.LInt) {
const z_ = x_a;
return "LInt"
return
}
}
{
if(x_a.LFloat) {
const z_ = x_a;
return "LFloat"
return
}
}
{
if(x_a.LKeyword) {
const z_ = x_a;
return "LKeyword"
return
}
}
{
if(x_a.LNamespace) {
const z_ = x_a;
return "LNamespace"
return
}
}
{
if(x_a.LLower) {
const z_ = x_a;
return "LLower"
return
}
}
{
if(x_a.LUpper) {
const z_ = x_a;
return "LUpper"
return
}
}
{
if(x_a.LWildcard) {
const z_ = x_a;
return "LWildcard"
return
}
}
{
if(x_a.LBracketLeft) {
const z_ = x_a;
return "LBracketLeft"
return
}
}
{
if(x_a.LBracketRight) {
const z_ = x_a;
return "LBracketRight"
return
}
}
{
if(x_a.LOperator) {
const z_ = x_a;
return "LOperator"
return
}
}
{
if(x_a.LComma) {
const z_ = x_a;
return "LComma"
return
}
}
{
if(x_a.LSeparator) {
const z_ = x_a;
return "LSeparator"
return
}
}
{
if(x_a.LDot) {
const z_ = x_a;
return "LDot"
return
}
}
{
if(x_a.LSemicolon) {
const z_ = x_a;
return "LSemicolon"
return
}
}
{
if(x_a.LPipe) {
const z_ = x_a;
return "LPipe"
return
}
}
{
if(x_a.LColon) {
const z_ = x_a;
return "LColon"
return
}
}
{
if(x_a.LDotDotDot) {
const z_ = x_a;
return "LDotDotDot"
return
}
}
{
if(x_a.LArrowThick) {
const z_ = x_a;
return "LArrowThick"
return
}
}
{
if(x_a.LAssign) {
const z_ = x_a;
return "LAssign"
return
}
}
{
if(x_a.LAssignPlus) {
const z_ = x_a;
return "LAssignPlus"
return
}
}
{
if(x_a.LAssignMinus) {
const z_ = x_a;
return "LAssignMinus"
return
}
}
{
if(x_a.LAssignLink) {
const z_ = x_a;
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


