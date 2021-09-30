import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

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

// type Token
export function Token(file_, code_, kind_, startLine_, startLineOffset_, startOffset_, stopLine_, stopLineOffset_, stopOffset_) {
return {_: 'Token', file_, code_, kind_, startLine_, startLineOffset_, startOffset_, stopLine_, stopLineOffset_, stopOffset_};
}

// type TokenKind
const LEnd$ = {_: 'LEnd'};
export function LEnd() {
return LEnd$;
}
const LString$ = {_: 'LString'};
export function LString() {
return LString$;
}
const LChar$ = {_: 'LChar'};
export function LChar() {
return LChar$;
}
const LInt$ = {_: 'LInt'};
export function LInt() {
return LInt$;
}
const LFloat$ = {_: 'LFloat'};
export function LFloat() {
return LFloat$;
}
const LKeyword$ = {_: 'LKeyword'};
export function LKeyword() {
return LKeyword$;
}
const LNamespace$ = {_: 'LNamespace'};
export function LNamespace() {
return LNamespace$;
}
const LLower$ = {_: 'LLower'};
export function LLower() {
return LLower$;
}
const LUpper$ = {_: 'LUpper'};
export function LUpper() {
return LUpper$;
}
const LWildcard$ = {_: 'LWildcard'};
export function LWildcard() {
return LWildcard$;
}
const LBracketLeft$ = {_: 'LBracketLeft'};
export function LBracketLeft() {
return LBracketLeft$;
}
const LBracketRight$ = {_: 'LBracketRight'};
export function LBracketRight() {
return LBracketRight$;
}
const LOperator$ = {_: 'LOperator'};
export function LOperator() {
return LOperator$;
}
const LComma$ = {_: 'LComma'};
export function LComma() {
return LComma$;
}
const LSeparator$ = {_: 'LSeparator'};
export function LSeparator() {
return LSeparator$;
}
const LDot$ = {_: 'LDot'};
export function LDot() {
return LDot$;
}
const LSemicolon$ = {_: 'LSemicolon'};
export function LSemicolon() {
return LSemicolon$;
}
const LPipe$ = {_: 'LPipe'};
export function LPipe() {
return LPipe$;
}
const LColon$ = {_: 'LColon'};
export function LColon() {
return LColon$;
}
const LDotDotDot$ = {_: 'LDotDotDot'};
export function LDotDotDot() {
return LDotDotDot$;
}
const LArrowThick$ = {_: 'LArrowThick'};
export function LArrowThick() {
return LArrowThick$;
}
const LAssign$ = {_: 'LAssign'};
export function LAssign() {
return LAssign$;
}
const LAssignPlus$ = {_: 'LAssignPlus'};
export function LAssignPlus() {
return LAssignPlus$;
}
const LAssignMinus$ = {_: 'LAssignMinus'};
export function LAssignMinus() {
return LAssignMinus$;
}
const LAssignLink$ = {_: 'LAssignLink'};
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
return (((_1) => {
{
if(_1._ === 'LEnd') {
return false
return
}
}
{
if(_1._ === 'LString') {
return true
return
}
}
{
if(_1._ === 'LChar') {
return true
return
}
}
{
if(_1._ === 'LInt') {
return true
return
}
}
{
if(_1._ === 'LFloat') {
return true
return
}
}
{
if(_1._ === 'LKeyword') {
return true
return
}
}
{
if(_1._ === 'LNamespace') {
return false
return
}
}
{
if(_1._ === 'LLower') {
return true
return
}
}
{
if(_1._ === 'LUpper') {
return true
return
}
}
{
if(_1._ === 'LWildcard') {
return true
return
}
}
{
if(_1._ === 'LBracketLeft') {
return false
return
}
}
{
if(_1._ === 'LBracketRight') {
return true
return
}
}
{
if(_1._ === 'LOperator') {
return false
return
}
}
{
if(_1._ === 'LComma') {
return false
return
}
}
{
if(_1._ === 'LSeparator') {
return false
return
}
}
{
if(_1._ === 'LDot') {
return false
return
}
}
{
if(_1._ === 'LSemicolon') {
return false
return
}
}
{
if(_1._ === 'LPipe') {
return false
return
}
}
{
if(_1._ === 'LColon') {
return false
return
}
}
{
if(_1._ === 'LDotDotDot') {
return false
return
}
}
{
if(_1._ === 'LArrowThick') {
return false
return
}
}
{
if(_1._ === 'LAssign') {
return false
return
}
}
{
if(_1._ === 'LAssignPlus') {
return false
return
}
}
{
if(_1._ === 'LAssignMinus') {
return false
return
}
}
{
if(_1._ === 'LAssignLink') {
return false
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function TokenKind_afterSeparator(self_) {
return (((_1) => {
{
if(_1._ === 'LEnd') {
return false
return
}
}
{
if(_1._ === 'LString') {
return true
return
}
}
{
if(_1._ === 'LChar') {
return true
return
}
}
{
if(_1._ === 'LInt') {
return true
return
}
}
{
if(_1._ === 'LFloat') {
return true
return
}
}
{
if(_1._ === 'LKeyword') {
return true
return
}
}
{
if(_1._ === 'LNamespace') {
return true
return
}
}
{
if(_1._ === 'LLower') {
return true
return
}
}
{
if(_1._ === 'LUpper') {
return true
return
}
}
{
if(_1._ === 'LWildcard') {
return true
return
}
}
{
if(_1._ === 'LBracketLeft') {
return true
return
}
}
{
if(_1._ === 'LBracketRight') {
return false
return
}
}
{
if(_1._ === 'LOperator') {
return false
return
}
}
{
if(_1._ === 'LComma') {
return false
return
}
}
{
if(_1._ === 'LSeparator') {
return false
return
}
}
{
if(_1._ === 'LDot') {
return false
return
}
}
{
if(_1._ === 'LSemicolon') {
return false
return
}
}
{
if(_1._ === 'LPipe') {
return false
return
}
}
{
if(_1._ === 'LColon') {
return false
return
}
}
{
if(_1._ === 'LDotDotDot') {
return true
return
}
}
{
if(_1._ === 'LArrowThick') {
return false
return
}
}
{
if(_1._ === 'LAssign') {
return false
return
}
}
{
if(_1._ === 'LAssignPlus') {
return false
return
}
}
{
if(_1._ === 'LAssignMinus') {
return false
return
}
}
{
if(_1._ === 'LAssignLink') {
return false
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function TokenKind_afterKeyword(self_) {
return (((_1) => {
{
if(_1._ === 'LEnd') {
return false
return
}
}
{
if(_1._ === 'LString') {
return true
return
}
}
{
if(_1._ === 'LChar') {
return true
return
}
}
{
if(_1._ === 'LInt') {
return true
return
}
}
{
if(_1._ === 'LFloat') {
return true
return
}
}
{
if(_1._ === 'LKeyword') {
return true
return
}
}
{
if(_1._ === 'LNamespace') {
return true
return
}
}
{
if(_1._ === 'LLower') {
return true
return
}
}
{
if(_1._ === 'LUpper') {
return true
return
}
}
{
if(_1._ === 'LWildcard') {
return true
return
}
}
{
if(_1._ === 'LBracketLeft') {
return false
return
}
}
{
if(_1._ === 'LBracketRight') {
return false
return
}
}
{
if(_1._ === 'LOperator') {
return false
return
}
}
{
if(_1._ === 'LComma') {
return false
return
}
}
{
if(_1._ === 'LSeparator') {
return false
return
}
}
{
if(_1._ === 'LDot') {
return false
return
}
}
{
if(_1._ === 'LSemicolon') {
return false
return
}
}
{
if(_1._ === 'LPipe') {
return false
return
}
}
{
if(_1._ === 'LColon') {
return false
return
}
}
{
if(_1._ === 'LDotDotDot') {
return false
return
}
}
{
if(_1._ === 'LArrowThick') {
return false
return
}
}
{
if(_1._ === 'LAssign') {
return false
return
}
}
{
if(_1._ === 'LAssignPlus') {
return false
return
}
}
{
if(_1._ === 'LAssignMinus') {
return false
return
}
}
{
if(_1._ === 'LAssignLink') {
return false
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}


