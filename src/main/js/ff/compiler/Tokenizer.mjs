import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Token from "../../ff/compiler/Token.mjs"

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





export function tokenize_(file_, code_) {
const tokens_ = ff_core_ArrayBuilder.empty_();
let line_ = 1;
let lineOffset_ = 0;
let startLine_ = line_;
let startLineOffset_ = lineOffset_;
const operatorCharactersString_ = "!@#$%&/=?+|^~*<>.:-,;";
let operatorCharacters_ = ff_core_Set.empty_();
ff_core_List.List_map(ff_core_Int.Int_until(0, ff_core_String.String_size(operatorCharactersString_)), ((j_) => {
operatorCharacters_ = ff_core_Set.Set_add(operatorCharacters_, ff_core_String.String_expect(operatorCharactersString_, j_))
}));
function emitToken_(kind_, startOffset_, stopOffset_) {
if((!ff_core_ArrayBuilder.ArrayBuilder_isEmpty(tokens_))) {
const last_ = ff_core_ArrayBuilder.ArrayBuilder_expectLast(tokens_);
if((((last_.stopLine_ == startLine_) && (last_.kind_ == ff_compiler_Token.LLower())) && ff_compiler_Token.TokenKind_afterKeyword(kind_))) {
ff_core_ArrayBuilder.ArrayBuilder_modify(tokens_, (ff_core_ArrayBuilder.ArrayBuilder_size(tokens_) - 1), ((_w1) => {
return (((_c) => {
return ff_compiler_Token.Token(_c.file_, _c.code_, ff_compiler_Token.LKeyword(), _c.startLine_, _c.startLineOffset_, _c.startOffset_, _c.stopLine_, _c.stopLineOffset_, _c.stopOffset_)
}))(_w1)
}))
};
if((((last_.stopLine_ != startLine_) && ff_compiler_Token.TokenKind_beforeSeparator(last_.kind_)) && ff_compiler_Token.TokenKind_afterSeparator(kind_))) {
ff_core_ArrayBuilder.ArrayBuilder_append(tokens_, ff_compiler_Token.Token(file_, code_, ff_compiler_Token.LSeparator(), startLine_, startLineOffset_, startOffset_, startLine_, startLineOffset_, startOffset_))
}
};
ff_core_ArrayBuilder.ArrayBuilder_append(tokens_, ff_compiler_Token.Token(file_, code_, kind_, startLine_, startLineOffset_, startOffset_, line_, lineOffset_, stopOffset_));
return (void 0)
}
let i_ = 0;
while((i_ < ff_core_String.String_size(code_))) {
while(((i_ < ff_core_String.String_size(code_)) && (((ff_core_String.String_expect(code_, i_) == 32) || (ff_core_String.String_expect(code_, i_) == 9)) || (ff_core_String.String_expect(code_, i_) == 13)))) {
i_ += 1;
(void 0)
};
const start_ = i_;
startLine_ = line_;
startLineOffset_ = lineOffset_;
if((ff_core_String.String_expect(code_, i_) == 10)) {
i_ += 1;
line_ += 1;
lineOffset_ = i_;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else if(((ff_core_String.String_expect(code_, i_) == 47) && (ff_core_String.String_expect(code_, (i_ + 1)) == 47))) {
i_ += 2;
while(((i_ < ff_core_String.String_size(code_)) && (ff_core_String.String_expect(code_, i_) != 10))) {
i_ += 1;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else if(((ff_core_String.String_expect(code_, i_) == 47) && (ff_core_String.String_expect(code_, (i_ + 1)) == 42))) {
i_ += 2;
while(((i_ < ff_core_String.String_size(code_)) && ((ff_core_String.String_expect(code_, i_) != 42) || (ff_core_String.String_expect(code_, (i_ + 1)) != 47)))) {
if((i_ >= ff_core_String.String_size(code_))) {
ff_core_Core.panic_((("Expected end of comment started on line " + startLine_) + ", got end of file."))
};
if((ff_core_String.String_expect(code_, i_) == 10)) {
line_ += 1;
lineOffset_ = (i_ + 1);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
i_ += 1;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
i_ += 2;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else if(((ff_core_String.String_expect(code_, i_) == 34) || (ff_core_String.String_expect(code_, i_) == 39))) {
const endSign_ = ff_core_String.String_expect(code_, i_);
let multiLine_ = (((((i_ + 2) < ff_core_String.String_size(code_)) && (ff_core_String.String_expect(code_, i_) == 34)) && (ff_core_String.String_expect(code_, (i_ + 1)) == 34)) && (ff_core_String.String_expect(code_, (i_ + 2)) == 34));
i_ += (multiLine_
? 3
: 1);
while(((i_ < ff_core_String.String_size(code_)) && (multiLine_ || (ff_core_String.String_expect(code_, i_) != endSign_)))) {
if((ff_core_String.String_expect(code_, i_) == 10)) {
if(multiLine_) {
line_ += 1;
lineOffset_ = (i_ + 1);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else {
ff_core_Core.panic_((("Unexpected end of line in string started on line " + startLine_) + "."));
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
if((i_ >= ff_core_String.String_size(code_))) {
ff_core_Core.panic_((("Expected end of string started on line " + startLine_) + ", got end of file."))
};
if(((ff_core_String.String_expect(code_, i_) == 92) && (ff_core_String.String_expect(code_, (i_ + 1)) != 10))) {
i_ += 1;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
if((((((multiLine_ && ((i_ + 2) < ff_core_String.String_size(code_))) && (((i_ + 3) >= ff_core_String.String_size(code_)) || (ff_core_String.String_expect(code_, (i_ + 3)) != 34))) && (ff_core_String.String_expect(code_, i_) == 34)) && (ff_core_String.String_expect(code_, (i_ + 1)) == 34)) && (ff_core_String.String_expect(code_, (i_ + 2)) == 34))) {
multiLine_ = false;
i_ += 2;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else {
i_ += 1;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
i_ += 1;
emitToken_(((endSign_ == 34)
? ff_compiler_Token.LString()
: ff_compiler_Token.LChar()), start_, i_);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else if((((ff_core_String.String_expect(code_, i_) >= 97) && (ff_core_String.String_expect(code_, i_) <= 122)) || ((ff_core_String.String_expect(code_, i_) >= 65) && (ff_core_String.String_expect(code_, i_) <= 90)))) {
const kind_ = ((ff_core_String.String_expect(code_, i_) >= 97)
? ff_compiler_Token.LLower()
: ff_compiler_Token.LUpper());
i_ += 1;
while(((i_ < ff_core_String.String_size(code_)) && ((((ff_core_String.String_expect(code_, i_) >= 97) && (ff_core_String.String_expect(code_, i_) <= 122)) || ((ff_core_String.String_expect(code_, i_) >= 65) && (ff_core_String.String_expect(code_, i_) <= 90))) || ((ff_core_String.String_expect(code_, i_) >= 48) && (ff_core_String.String_expect(code_, i_) <= 57))))) {
i_ += 1;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
if(((kind_ == ff_compiler_Token.LUpper()) && (ff_core_String.String_expect(code_, i_) == 46))) {
i_ += 1;
emitToken_(ff_compiler_Token.LNamespace(), start_, i_);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else {
emitToken_(kind_, start_, i_);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else if(((ff_core_String.String_expect(code_, i_) >= 48) && (ff_core_String.String_expect(code_, i_) <= 57))) {
let dot_ = false;
let exponent_ = false;
while(((i_ < ff_core_String.String_size(code_)) && ((ff_core_String.String_expect(code_, i_) >= 48) && (ff_core_String.String_expect(code_, i_) <= 57)))) {
i_ += 1;
if((((ff_core_String.String_expect(code_, i_) == 101) || (ff_core_String.String_expect(code_, i_) == 69)) && (!exponent_))) {
i_ += 1;
dot_ = true;
exponent_ = true;
if(((ff_core_String.String_expect(code_, i_) == 43) || (ff_core_String.String_expect(code_, i_) == 45))) {
i_ += 1;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
}
};
if((((((((i_ + 1) < ff_core_String.String_size(code_)) && (ff_core_String.String_expect(code_, i_) == 46)) && (ff_core_String.String_expect(code_, (i_ + 1)) >= 48)) && (ff_core_String.String_expect(code_, (i_ + 1)) <= 57)) && (!dot_)) && (!exponent_))) {
i_ += 1;
dot_ = true;
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
};
emitToken_(((dot_ || exponent_)
? ff_compiler_Token.LFloat()
: ff_compiler_Token.LInt()), start_, i_);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else if((ff_core_String.String_expect(code_, i_) == 95)) {
i_ += 1;
emitToken_(ff_compiler_Token.LWildcard(), start_, i_);
(void 0);
(void 0);
(void 0);
(void 0);
(void 0)
} else if(ff_core_Set.Set_contains(operatorCharacters_, ff_core_String.String_expect(code_, i_))) {
i_ += 1;
while(((i_ < ff_core_String.String_size(code_)) && ff_core_Set.Set_contains(operatorCharacters_, ff_core_String.String_expect(code_, i_)))) {
i_ += 1;
(void 0);
(void 0);
(void 0);
(void 0)
};
const o_ = ((((i_ - start_) == 1) && (ff_core_String.String_expect(code_, (i_ - 1)) == 46))
? ff_compiler_Token.LDot()
: (((i_ - start_) == 1) && (ff_core_String.String_expect(code_, (i_ - 1)) == 44))
? ff_compiler_Token.LComma()
: (((i_ - start_) == 1) && (ff_core_String.String_expect(code_, (i_ - 1)) == 59))
? ff_compiler_Token.LSemicolon()
: (((i_ - start_) == 1) && (ff_core_String.String_expect(code_, (i_ - 1)) == 124))
? ff_compiler_Token.LPipe()
: (((i_ - start_) == 1) && (ff_core_String.String_expect(code_, (i_ - 1)) == 58))
? ff_compiler_Token.LColon()
: (((((i_ - start_) == 3) && (ff_core_String.String_expect(code_, (i_ - 3)) == 46)) && (ff_core_String.String_expect(code_, (i_ - 2)) == 46)) && (ff_core_String.String_expect(code_, (i_ - 1)) == 46))
? ff_compiler_Token.LDotDotDot()
: ((((i_ - start_) == 2) && (ff_core_String.String_expect(code_, (i_ - 2)) == 61)) && (ff_core_String.String_expect(code_, (i_ - 1)) == 62))
? ff_compiler_Token.LArrowThick()
: (((i_ - start_) == 1) && (ff_core_String.String_expect(code_, (i_ - 1)) == 61))
? ff_compiler_Token.LAssign()
: ((((i_ - start_) == 2) && (ff_core_String.String_expect(code_, (i_ - 2)) == 43)) && (ff_core_String.String_expect(code_, (i_ - 1)) == 61))
? ff_compiler_Token.LAssignPlus()
: ((((i_ - start_) == 2) && (ff_core_String.String_expect(code_, (i_ - 2)) == 45)) && (ff_core_String.String_expect(code_, (i_ - 1)) == 61))
? ff_compiler_Token.LAssignMinus()
: (((((i_ - start_) == 3) && (ff_core_String.String_expect(code_, (i_ - 3)) == 58)) && (ff_core_String.String_expect(code_, (i_ - 2)) == 58)) && (ff_core_String.String_expect(code_, (i_ - 1)) == 61))
? ff_compiler_Token.LAssignLink()
: ff_compiler_Token.LOperator());
emitToken_(o_, start_, i_);
(void 0);
(void 0);
(void 0);
(void 0)
} else if((((ff_core_String.String_expect(code_, i_) == 40) || (ff_core_String.String_expect(code_, i_) == 91)) || (ff_core_String.String_expect(code_, i_) == 123))) {
i_ += 1;
emitToken_(ff_compiler_Token.LBracketLeft(), start_, i_);
(void 0);
(void 0);
(void 0)
} else if((((ff_core_String.String_expect(code_, i_) == 41) || (ff_core_String.String_expect(code_, i_) == 93)) || (ff_core_String.String_expect(code_, i_) == 125))) {
i_ += 1;
emitToken_(ff_compiler_Token.LBracketRight(), start_, i_);
(void 0);
(void 0)
} else if((i_ < ff_core_String.String_size(code_))) {
const column_ = ((i_ - startLineOffset_) + 1);
ff_core_Core.panic_(((((((("Unexpected character: " + ff_core_Core.magicShow_(ff_core_String.String_expect(code_, i_))) + " in ") + file_) + " at line ") + line_) + ", column ") + column_));
(void 0)
} else {};
(void 0)
};
ff_core_List.List_each(ff_core_Int.Int_to(1, 5), ((i_) => {
emitToken_(ff_compiler_Token.LEnd(), i_, i_);
return (void 0)
}));
return ff_core_ArrayBuilder.ArrayBuilder_drain(tokens_)
}




