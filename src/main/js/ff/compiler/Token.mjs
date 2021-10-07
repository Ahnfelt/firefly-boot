import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

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
return (token_.kind_ == kind1_)
}

export function Token_is2(token_, kind1_, kind2_) {
return ((token_.kind_ == kind1_) || (token_.kind_ == kind2_))
}

export function Token_is3(token_, kind1_, kind2_, kind3_) {
return (((token_.kind_ == kind1_) || (token_.kind_ == kind2_)) || (token_.kind_ == kind3_))
}

export function Token_rawIs(token_, value_) {
return (((token_.stopOffset_ - token_.startOffset_) == ff_core_String.String_size(value_)) && ff_core_String.String_startsWith(token_.code_, value_, token_.startOffset_))
}

export function TokenKind_beforeSeparator(self_) {
{
const _1 = self_
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
throw new Error('Unexhaustive pattern match')
}
}

export function TokenKind_afterSeparator(self_) {
{
const _1 = self_
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
throw new Error('Unexhaustive pattern match')
}
}

export function TokenKind_afterKeyword(self_) {
{
const _1 = self_
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
throw new Error('Unexhaustive pattern match')
}
}


