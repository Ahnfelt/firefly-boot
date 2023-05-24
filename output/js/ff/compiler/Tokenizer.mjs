

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

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

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"





export function tokenize_(file_, code_, completionAt_, attemptFixes_) {
const completionLine_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(completionAt_, ((_w1) => {
return (_w1.file_ === file_)
})), ((_w1) => {
return _w1.line_
})), (() => {
return (-1)
}));
const completionColumn_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(completionAt_, ((_w1) => {
return (_w1.file_ === file_)
})), ((_w1) => {
return _w1.column_
})), (() => {
return (-1)
}));
const tokens_ = ff_core_Stack.make_();
let line_ = 1;
let lineOffset_ = 0;
let startLine_ = line_;
let startLineOffset_ = lineOffset_;
const operatorCharactersString_ = "!@#$%&/=?+|^~*<>.:-;";
let operatorCharacters_ = ff_core_Set.empty_();
ff_core_List.List_map(ff_core_List.range_(ff_core_String.String_size(operatorCharactersString_)), ((j_) => {
operatorCharacters_ = ff_core_Set.Set_add(operatorCharacters_, ff_core_String.String_grab(operatorCharactersString_, j_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Char_Char)
}));
function emitToken_(kind_, startOffset_, stopOffset_) {
if((!ff_core_Stack.Stack_isEmpty(tokens_))) {
const last_ = ff_core_Stack.Stack_grabLast(tokens_);
if((((last_.stopLine_ === startLine_) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(last_.kind_, ff_compiler_Token.LLower())) && ff_compiler_Token.TokenKind_afterKeyword(kind_))) {
if((((completionLine_ === last_.startLine_) && (completionColumn_ >= ((1 + last_.startOffset_) - last_.startLineOffset_))) && (completionColumn_ <= ((1 + last_.stopOffset_) - last_.stopLineOffset_)))) {
ff_core_Stack.Stack_push(tokens_, ff_compiler_Token.Token(file_, code_, ff_compiler_Token.LSeparator(), startLine_, startLineOffset_, startLineOffset_, startLine_, startLineOffset_, startLineOffset_))
} else {
ff_core_Stack.Stack_modify(tokens_, (ff_core_Stack.Stack_size(tokens_) - 1), ((_w1) => {
{
const _1 = _w1;
{
const _c = _1;
return ff_compiler_Token.Token(_c.file_, _c.code_, ff_compiler_Token.LKeyword(), _c.startLine_, _c.startLineOffset_, _c.startOffset_, _c.stopLine_, _c.stopLineOffset_, _c.stopOffset_)
return
}
}
}))
}
};
if((((last_.stopLine_ !== startLine_) && ff_compiler_Token.TokenKind_beforeSeparator(last_.kind_)) && ff_compiler_Token.TokenKind_afterSeparator(kind_))) {
ff_core_Stack.Stack_push(tokens_, ff_compiler_Token.Token(file_, code_, ff_compiler_Token.LSeparator(), startLine_, startLineOffset_, startLineOffset_, startLine_, startLineOffset_, startLineOffset_))
}
};
ff_core_Stack.Stack_push(tokens_, ff_compiler_Token.Token(file_, code_, kind_, startLine_, startLineOffset_, startOffset_, line_, lineOffset_, stopOffset_))
}
let i_ = 0;
function throwError_(message_) {
const column_ = ((i_ - startLineOffset_) + 1);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Syntax.Location(file_, line_, column_), message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
while((i_ < ff_core_String.String_size(code_))) {
startLine_ = line_;
startLineOffset_ = lineOffset_;
if((completionLine_ === line_)) {
while(((i_ < ff_core_String.String_size(code_)) && (((ff_core_String.String_grab(code_, i_) === 32) || (ff_core_String.String_grab(code_, i_) === 9)) || (ff_core_String.String_grab(code_, i_) === 13)))) {
if((completionColumn_ === ((1 + i_) - lineOffset_))) {
emitToken_(ff_compiler_Token.LLower(), i_, i_)
};
i_ += 1
};
if(((i_ < ff_core_String.String_size(code_)) && (completionColumn_ === ((1 + i_) - lineOffset_)))) {
const c_ = ff_core_String.String_grab(code_, i_);
if(((((!ff_core_Char.Char_isAsciiLetterOrDigit(c_)) && (c_ !== 95)) && (c_ !== 39)) && (c_ !== 34))) {
emitToken_(ff_compiler_Token.LLower(), i_, i_);
if((((i_ + 1) < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) === 95))) {
i_ += 1
}
}
}
} else {
while(((i_ < ff_core_String.String_size(code_)) && (((ff_core_String.String_grab(code_, i_) === 32) || (ff_core_String.String_grab(code_, i_) === 9)) || (ff_core_String.String_grab(code_, i_) === 13)))) {
i_ += 1
}
};
if((i_ < ff_core_String.String_size(code_))) {
const start_ = i_;
if((ff_core_String.String_grab(code_, i_) === 10)) {
i_ += 1;
line_ += 1;
lineOffset_ = i_
} else if(((ff_core_String.String_grab(code_, i_) === 47) && (ff_core_String.String_grab(code_, (i_ + 1)) === 47))) {
i_ += 2;
while(((i_ < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) !== 10))) {
i_ += 1
}
} else if(((ff_core_String.String_grab(code_, i_) === 47) && (ff_core_String.String_grab(code_, (i_ + 1)) === 42))) {
i_ += 2;
while(((i_ < ff_core_String.String_size(code_)) && ((ff_core_String.String_grab(code_, i_) !== 42) || (ff_core_String.String_grab(code_, (i_ + 1)) !== 47)))) {
if((i_ >= ff_core_String.String_size(code_))) {
throwError_((("Expected end of comment started on line " + startLine_) + ", got end of file."))
};
if((ff_core_String.String_grab(code_, i_) === 10)) {
line_ += 1;
lineOffset_ = (i_ + 1)
};
i_ += 1
};
i_ += 2
} else if(((ff_core_String.String_grab(code_, i_) === 34) || (ff_core_String.String_grab(code_, i_) === 39))) {
const endSign_ = ff_core_String.String_grab(code_, i_);
let multiLine_ = (((((i_ + 2) < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) === 34)) && (ff_core_String.String_grab(code_, (i_ + 1)) === 34)) && (ff_core_String.String_grab(code_, (i_ + 2)) === 34));
i_ += (multiLine_
? 3
: 1);
while(((i_ < ff_core_String.String_size(code_)) && (multiLine_ || (ff_core_String.String_grab(code_, i_) !== endSign_)))) {
if((ff_core_String.String_grab(code_, i_) === 10)) {
if(multiLine_) {
line_ += 1;
lineOffset_ = (i_ + 1)
} else {
throwError_("Unexpected end of line in string.")
}
};
if((i_ >= ff_core_String.String_size(code_))) {
throwError_((("Expected end of string started on line " + startLine_) + ", got end of file."))
};
if(((ff_core_String.String_grab(code_, i_) === 92) && (ff_core_String.String_grab(code_, (i_ + 1)) !== 10))) {
i_ += 1
};
if((((((multiLine_ && ((i_ + 2) < ff_core_String.String_size(code_))) && (((i_ + 3) >= ff_core_String.String_size(code_)) || (ff_core_String.String_grab(code_, (i_ + 3)) !== 34))) && (ff_core_String.String_grab(code_, i_) === 34)) && (ff_core_String.String_grab(code_, (i_ + 1)) === 34)) && (ff_core_String.String_grab(code_, (i_ + 2)) === 34))) {
multiLine_ = false;
i_ += 2
} else {
i_ += 1
}
};
i_ += 1;
emitToken_(((endSign_ === 34)
? ff_compiler_Token.LString()
: ff_compiler_Token.LChar()), start_, i_)
} else if(ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grab(code_, i_))) {
const kind_ = ((ff_core_String.String_grab(code_, i_) >= 97)
? ff_compiler_Token.LLower()
: ff_compiler_Token.LUpper());
i_ += 1;
while(((i_ < ff_core_String.String_size(code_)) && ff_core_Char.Char_isAsciiLetterOrDigit(ff_core_String.String_grab(code_, i_)))) {
i_ += 1
};
if((ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(kind_, ff_compiler_Token.LUpper()) && (ff_core_String.String_grab(code_, i_) === 46))) {
i_ += 1;
emitToken_(ff_compiler_Token.LNamespace(), start_, i_)
} else {
emitToken_(kind_, start_, i_)
}
} else if(ff_core_Char.Char_isAsciiDigit(ff_core_String.String_grab(code_, i_))) {
let dot_ = false;
let exponent_ = false;
while(((i_ < ff_core_String.String_size(code_)) && ff_core_Char.Char_isAsciiDigit(ff_core_String.String_grab(code_, i_)))) {
i_ += 1;
if((((ff_core_String.String_grab(code_, i_) === 101) || (ff_core_String.String_grab(code_, i_) === 69)) && (!exponent_))) {
i_ += 1;
dot_ = true;
exponent_ = true;
if(((ff_core_String.String_grab(code_, i_) === 43) || (ff_core_String.String_grab(code_, i_) === 45))) {
i_ += 1
}
};
if(((((((i_ + 1) < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) === 46)) && ff_core_Char.Char_isAsciiDigit(ff_core_String.String_grab(code_, (i_ + 1)))) && (!dot_)) && (!exponent_))) {
i_ += 1;
dot_ = true
}
};
emitToken_(((dot_ || exponent_)
? ff_compiler_Token.LFloat()
: ff_compiler_Token.LInt()), start_, i_)
} else if((ff_core_String.String_grab(code_, i_) === 95)) {
i_ += 1;
emitToken_(ff_compiler_Token.LWildcard(), start_, i_)
} else if((ff_core_String.String_grab(code_, i_) === 44)) {
i_ += 1;
emitToken_(ff_compiler_Token.LComma(), start_, i_)
} else if(ff_core_Set.Set_contains(operatorCharacters_, ff_core_String.String_grab(code_, i_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Char_Char)) {
i_ += 1;
if(((((ff_core_String.String_grab(code_, (i_ - 1)) === 46) && ((i_ + 1) < ff_core_String.String_size(code_))) && (ff_core_String.String_grab(code_, i_) === 46)) && (ff_core_String.String_grab(code_, (i_ + 1)) !== 46))) {
emitToken_(ff_compiler_Token.LDot(), start_, i_);
const newStart_ = i_;
if((!ff_core_Option.Option_isEmpty(completionAt_))) {
emitToken_(ff_compiler_Token.LLower(), newStart_, newStart_)
};
i_ += 1;
emitToken_(ff_compiler_Token.LDot(), newStart_, i_)
} else {
while(((i_ < ff_core_String.String_size(code_)) && ff_core_Set.Set_contains(operatorCharacters_, ff_core_String.String_grab(code_, i_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Char_Char))) {
i_ += 1
};
const o_ = ((((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 46))
? ff_compiler_Token.LDot()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 59))
? ff_compiler_Token.LSemicolon()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 124))
? ff_compiler_Token.LPipe()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 58))
? ff_compiler_Token.LColon()
: (((((i_ - start_) === 3) && (ff_core_String.String_grab(code_, (i_ - 3)) === 46)) && (ff_core_String.String_grab(code_, (i_ - 2)) === 46)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 46))
? ff_compiler_Token.LDotDotDot()
: ((((i_ - start_) === 2) && (ff_core_String.String_grab(code_, (i_ - 2)) === 61)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 62))
? ff_compiler_Token.LArrowThick()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssign()
: ((((i_ - start_) === 2) && (ff_core_String.String_grab(code_, (i_ - 2)) === 43)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssignPlus()
: ((((i_ - start_) === 2) && (ff_core_String.String_grab(code_, (i_ - 2)) === 45)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssignMinus()
: (((((i_ - start_) === 3) && (ff_core_String.String_grab(code_, (i_ - 3)) === 58)) && (ff_core_String.String_grab(code_, (i_ - 2)) === 58)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssignLink()
: ff_compiler_Token.LOperator());
emitToken_(o_, start_, i_)
}
} else if((((ff_core_String.String_grab(code_, i_) === 40) || (ff_core_String.String_grab(code_, i_) === 91)) || (ff_core_String.String_grab(code_, i_) === 123))) {
i_ += 1;
emitToken_(ff_compiler_Token.LBracketLeft(), start_, i_)
} else if((((ff_core_String.String_grab(code_, i_) === 41) || (ff_core_String.String_grab(code_, i_) === 93)) || (ff_core_String.String_grab(code_, i_) === 125))) {
i_ += 1;
emitToken_(ff_compiler_Token.LBracketRight(), start_, i_)
} else if((i_ < ff_core_String.String_size(code_))) {
if(attemptFixes_) {
i_ += 1
} else {
throwError_(("Unexpected character: " + ff_core_Show.ff_core_Show_Show$ff_core_Char_Char.show_(ff_core_String.String_grab(code_, i_))))
}
} else {}
}
};
ff_core_List.List_each(ff_core_List.range_(5), ((_) => {
emitToken_(ff_compiler_Token.LEnd(), i_, i_)
}));
return ff_core_Stack.Stack_drain(tokens_)
}

export async function tokenize_$(file_, code_, completionAt_, attemptFixes_, $task) {
const completionLine_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(completionAt_, ((_w1) => {
return (_w1.file_ === file_)
})), ((_w1) => {
return _w1.line_
})), (() => {
return (-1)
}));
const completionColumn_ = ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_Option.Option_filter(completionAt_, ((_w1) => {
return (_w1.file_ === file_)
})), ((_w1) => {
return _w1.column_
})), (() => {
return (-1)
}));
const tokens_ = ff_core_Stack.make_();
let line_ = 1;
let lineOffset_ = 0;
let startLine_ = line_;
let startLineOffset_ = lineOffset_;
const operatorCharactersString_ = "!@#$%&/=?+|^~*<>.:-;";
let operatorCharacters_ = ff_core_Set.empty_();
ff_core_List.List_map(ff_core_List.range_(ff_core_String.String_size(operatorCharactersString_)), ((j_) => {
operatorCharacters_ = ff_core_Set.Set_add(operatorCharacters_, ff_core_String.String_grab(operatorCharactersString_, j_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Char_Char)
}));
function emitToken_(kind_, startOffset_, stopOffset_) {
if((!ff_core_Stack.Stack_isEmpty(tokens_))) {
const last_ = ff_core_Stack.Stack_grabLast(tokens_);
if((((last_.stopLine_ === startLine_) && ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(last_.kind_, ff_compiler_Token.LLower())) && ff_compiler_Token.TokenKind_afterKeyword(kind_))) {
if((((completionLine_ === last_.startLine_) && (completionColumn_ >= ((1 + last_.startOffset_) - last_.startLineOffset_))) && (completionColumn_ <= ((1 + last_.stopOffset_) - last_.stopLineOffset_)))) {
ff_core_Stack.Stack_push(tokens_, ff_compiler_Token.Token(file_, code_, ff_compiler_Token.LSeparator(), startLine_, startLineOffset_, startLineOffset_, startLine_, startLineOffset_, startLineOffset_))
} else {
ff_core_Stack.Stack_modify(tokens_, (ff_core_Stack.Stack_size(tokens_) - 1), ((_w1) => {
{
const _1 = _w1;
{
const _c = _1;
return ff_compiler_Token.Token(_c.file_, _c.code_, ff_compiler_Token.LKeyword(), _c.startLine_, _c.startLineOffset_, _c.startOffset_, _c.stopLine_, _c.stopLineOffset_, _c.stopOffset_)
return
}
}
}))
}
};
if((((last_.stopLine_ !== startLine_) && ff_compiler_Token.TokenKind_beforeSeparator(last_.kind_)) && ff_compiler_Token.TokenKind_afterSeparator(kind_))) {
ff_core_Stack.Stack_push(tokens_, ff_compiler_Token.Token(file_, code_, ff_compiler_Token.LSeparator(), startLine_, startLineOffset_, startLineOffset_, startLine_, startLineOffset_, startLineOffset_))
}
};
ff_core_Stack.Stack_push(tokens_, ff_compiler_Token.Token(file_, code_, kind_, startLine_, startLineOffset_, startOffset_, line_, lineOffset_, stopOffset_))
}
let i_ = 0;
function throwError_(message_) {
const column_ = ((i_ - startLineOffset_) + 1);
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_compiler_Syntax.CompileError(ff_compiler_Syntax.Location(file_, line_, column_), message_), ff_compiler_Syntax.ff_core_Any_HasAnyTag$ff_compiler_Syntax_CompileError)})
}
while((i_ < ff_core_String.String_size(code_))) {
startLine_ = line_;
startLineOffset_ = lineOffset_;
if((completionLine_ === line_)) {
while(((i_ < ff_core_String.String_size(code_)) && (((ff_core_String.String_grab(code_, i_) === 32) || (ff_core_String.String_grab(code_, i_) === 9)) || (ff_core_String.String_grab(code_, i_) === 13)))) {
if((completionColumn_ === ((1 + i_) - lineOffset_))) {
emitToken_(ff_compiler_Token.LLower(), i_, i_)
};
i_ += 1
};
if(((i_ < ff_core_String.String_size(code_)) && (completionColumn_ === ((1 + i_) - lineOffset_)))) {
const c_ = ff_core_String.String_grab(code_, i_);
if(((((!ff_core_Char.Char_isAsciiLetterOrDigit(c_)) && (c_ !== 95)) && (c_ !== 39)) && (c_ !== 34))) {
emitToken_(ff_compiler_Token.LLower(), i_, i_);
if((((i_ + 1) < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) === 95))) {
i_ += 1
}
}
}
} else {
while(((i_ < ff_core_String.String_size(code_)) && (((ff_core_String.String_grab(code_, i_) === 32) || (ff_core_String.String_grab(code_, i_) === 9)) || (ff_core_String.String_grab(code_, i_) === 13)))) {
i_ += 1
}
};
if((i_ < ff_core_String.String_size(code_))) {
const start_ = i_;
if((ff_core_String.String_grab(code_, i_) === 10)) {
i_ += 1;
line_ += 1;
lineOffset_ = i_
} else if(((ff_core_String.String_grab(code_, i_) === 47) && (ff_core_String.String_grab(code_, (i_ + 1)) === 47))) {
i_ += 2;
while(((i_ < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) !== 10))) {
i_ += 1
}
} else if(((ff_core_String.String_grab(code_, i_) === 47) && (ff_core_String.String_grab(code_, (i_ + 1)) === 42))) {
i_ += 2;
while(((i_ < ff_core_String.String_size(code_)) && ((ff_core_String.String_grab(code_, i_) !== 42) || (ff_core_String.String_grab(code_, (i_ + 1)) !== 47)))) {
if((i_ >= ff_core_String.String_size(code_))) {
throwError_((("Expected end of comment started on line " + startLine_) + ", got end of file."))
};
if((ff_core_String.String_grab(code_, i_) === 10)) {
line_ += 1;
lineOffset_ = (i_ + 1)
};
i_ += 1
};
i_ += 2
} else if(((ff_core_String.String_grab(code_, i_) === 34) || (ff_core_String.String_grab(code_, i_) === 39))) {
const endSign_ = ff_core_String.String_grab(code_, i_);
let multiLine_ = (((((i_ + 2) < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) === 34)) && (ff_core_String.String_grab(code_, (i_ + 1)) === 34)) && (ff_core_String.String_grab(code_, (i_ + 2)) === 34));
i_ += (multiLine_
? 3
: 1);
while(((i_ < ff_core_String.String_size(code_)) && (multiLine_ || (ff_core_String.String_grab(code_, i_) !== endSign_)))) {
if((ff_core_String.String_grab(code_, i_) === 10)) {
if(multiLine_) {
line_ += 1;
lineOffset_ = (i_ + 1)
} else {
throwError_("Unexpected end of line in string.")
}
};
if((i_ >= ff_core_String.String_size(code_))) {
throwError_((("Expected end of string started on line " + startLine_) + ", got end of file."))
};
if(((ff_core_String.String_grab(code_, i_) === 92) && (ff_core_String.String_grab(code_, (i_ + 1)) !== 10))) {
i_ += 1
};
if((((((multiLine_ && ((i_ + 2) < ff_core_String.String_size(code_))) && (((i_ + 3) >= ff_core_String.String_size(code_)) || (ff_core_String.String_grab(code_, (i_ + 3)) !== 34))) && (ff_core_String.String_grab(code_, i_) === 34)) && (ff_core_String.String_grab(code_, (i_ + 1)) === 34)) && (ff_core_String.String_grab(code_, (i_ + 2)) === 34))) {
multiLine_ = false;
i_ += 2
} else {
i_ += 1
}
};
i_ += 1;
emitToken_(((endSign_ === 34)
? ff_compiler_Token.LString()
: ff_compiler_Token.LChar()), start_, i_)
} else if(ff_core_Char.Char_isAsciiLetter(ff_core_String.String_grab(code_, i_))) {
const kind_ = ((ff_core_String.String_grab(code_, i_) >= 97)
? ff_compiler_Token.LLower()
: ff_compiler_Token.LUpper());
i_ += 1;
while(((i_ < ff_core_String.String_size(code_)) && ff_core_Char.Char_isAsciiLetterOrDigit(ff_core_String.String_grab(code_, i_)))) {
i_ += 1
};
if((ff_compiler_Token.ff_core_Equal_Equal$ff_compiler_Token_TokenKind.equals_(kind_, ff_compiler_Token.LUpper()) && (ff_core_String.String_grab(code_, i_) === 46))) {
i_ += 1;
emitToken_(ff_compiler_Token.LNamespace(), start_, i_)
} else {
emitToken_(kind_, start_, i_)
}
} else if(ff_core_Char.Char_isAsciiDigit(ff_core_String.String_grab(code_, i_))) {
let dot_ = false;
let exponent_ = false;
while(((i_ < ff_core_String.String_size(code_)) && ff_core_Char.Char_isAsciiDigit(ff_core_String.String_grab(code_, i_)))) {
i_ += 1;
if((((ff_core_String.String_grab(code_, i_) === 101) || (ff_core_String.String_grab(code_, i_) === 69)) && (!exponent_))) {
i_ += 1;
dot_ = true;
exponent_ = true;
if(((ff_core_String.String_grab(code_, i_) === 43) || (ff_core_String.String_grab(code_, i_) === 45))) {
i_ += 1
}
};
if(((((((i_ + 1) < ff_core_String.String_size(code_)) && (ff_core_String.String_grab(code_, i_) === 46)) && ff_core_Char.Char_isAsciiDigit(ff_core_String.String_grab(code_, (i_ + 1)))) && (!dot_)) && (!exponent_))) {
i_ += 1;
dot_ = true
}
};
emitToken_(((dot_ || exponent_)
? ff_compiler_Token.LFloat()
: ff_compiler_Token.LInt()), start_, i_)
} else if((ff_core_String.String_grab(code_, i_) === 95)) {
i_ += 1;
emitToken_(ff_compiler_Token.LWildcard(), start_, i_)
} else if((ff_core_String.String_grab(code_, i_) === 44)) {
i_ += 1;
emitToken_(ff_compiler_Token.LComma(), start_, i_)
} else if(ff_core_Set.Set_contains(operatorCharacters_, ff_core_String.String_grab(code_, i_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Char_Char)) {
i_ += 1;
if(((((ff_core_String.String_grab(code_, (i_ - 1)) === 46) && ((i_ + 1) < ff_core_String.String_size(code_))) && (ff_core_String.String_grab(code_, i_) === 46)) && (ff_core_String.String_grab(code_, (i_ + 1)) !== 46))) {
emitToken_(ff_compiler_Token.LDot(), start_, i_);
const newStart_ = i_;
if((!ff_core_Option.Option_isEmpty(completionAt_))) {
emitToken_(ff_compiler_Token.LLower(), newStart_, newStart_)
};
i_ += 1;
emitToken_(ff_compiler_Token.LDot(), newStart_, i_)
} else {
while(((i_ < ff_core_String.String_size(code_)) && ff_core_Set.Set_contains(operatorCharacters_, ff_core_String.String_grab(code_, i_), ff_core_Ordering.ff_core_Ordering_Order$ff_core_Char_Char))) {
i_ += 1
};
const o_ = ((((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 46))
? ff_compiler_Token.LDot()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 59))
? ff_compiler_Token.LSemicolon()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 124))
? ff_compiler_Token.LPipe()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 58))
? ff_compiler_Token.LColon()
: (((((i_ - start_) === 3) && (ff_core_String.String_grab(code_, (i_ - 3)) === 46)) && (ff_core_String.String_grab(code_, (i_ - 2)) === 46)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 46))
? ff_compiler_Token.LDotDotDot()
: ((((i_ - start_) === 2) && (ff_core_String.String_grab(code_, (i_ - 2)) === 61)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 62))
? ff_compiler_Token.LArrowThick()
: (((i_ - start_) === 1) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssign()
: ((((i_ - start_) === 2) && (ff_core_String.String_grab(code_, (i_ - 2)) === 43)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssignPlus()
: ((((i_ - start_) === 2) && (ff_core_String.String_grab(code_, (i_ - 2)) === 45)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssignMinus()
: (((((i_ - start_) === 3) && (ff_core_String.String_grab(code_, (i_ - 3)) === 58)) && (ff_core_String.String_grab(code_, (i_ - 2)) === 58)) && (ff_core_String.String_grab(code_, (i_ - 1)) === 61))
? ff_compiler_Token.LAssignLink()
: ff_compiler_Token.LOperator());
emitToken_(o_, start_, i_)
}
} else if((((ff_core_String.String_grab(code_, i_) === 40) || (ff_core_String.String_grab(code_, i_) === 91)) || (ff_core_String.String_grab(code_, i_) === 123))) {
i_ += 1;
emitToken_(ff_compiler_Token.LBracketLeft(), start_, i_)
} else if((((ff_core_String.String_grab(code_, i_) === 41) || (ff_core_String.String_grab(code_, i_) === 93)) || (ff_core_String.String_grab(code_, i_) === 125))) {
i_ += 1;
emitToken_(ff_compiler_Token.LBracketRight(), start_, i_)
} else if((i_ < ff_core_String.String_size(code_))) {
if(attemptFixes_) {
i_ += 1
} else {
throwError_(("Unexpected character: " + ff_core_Show.ff_core_Show_Show$ff_core_Char_Char.show_(ff_core_String.String_grab(code_, i_))))
}
} else {}
}
};
ff_core_List.List_each(ff_core_List.range_(5), ((_) => {
emitToken_(ff_compiler_Token.LEnd(), i_, i_)
}));
return ff_core_Stack.Stack_drain(tokens_)
}






