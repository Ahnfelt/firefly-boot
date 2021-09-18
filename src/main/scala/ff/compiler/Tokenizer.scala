package ff.compiler
import ff.compiler.Token_._

import ff.core.Array_._

import ff.core.ArrayBuilder_._

import ff.core.Bool_._

import ff.core.Char_._

import ff.core.Core_._

import ff.core.FileSystem_._

import ff.core.Int_._

import ff.core.List_._

import ff.core.Log_._

import ff.core.Map_._

import ff.core.Nothing_._

import ff.core.Option_._

import ff.core.Pair_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object Tokenizer_ {



def tokenize_(file_ : ff.core.String_.String, code_ : ff.core.String_.String) : ff.core.Array_.Array[ff.compiler.Token_.Token] = {
val tokens_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Token_.Token] = ff.core.ArrayBuilder_.empty_[ff.compiler.Token_.Token]();
var line_ : ff.core.Int_.Int = 1;
var lineOffset_ : ff.core.Int_.Int = 0;
var startLine_ : ff.core.Int_.Int = line_;
var startLineOffset_ : ff.core.Int_.Int = lineOffset_;
val operatorCharactersString_ : ff.core.String_.String = "!@#$%&/=?+|^~*<>.:-,;";
var operatorCharacters_ : ff.core.Set_.Set[ff.core.Char_.Char] = ff.core.Set_.empty_[ff.core.Char_.Char]();
ff.core.List_.List_map[ff.core.Int_.Int, ff.core.Unit_.Unit](self_ = ff.core.Int_.Int_getUntil(self_ = 0, exclusive_ = ff.core.String_.String_getSize(self_ = operatorCharactersString_)), body_ = {(j_) =>
operatorCharacters_ = ff.core.Set_.Set_add[ff.core.Char_.Char](self_ = operatorCharacters_, value_ = ff.core.String_.String_expect(self_ = operatorCharactersString_, index_ = j_))
});
def emitToken_(kind_ : ff.compiler.Token_.TokenKind, startOffset_ : ff.core.Int_.Int, stopOffset_ : ff.core.Int_.Int) : ff.core.Unit_.Unit = {
ff.core.Core_.if_[ff.core.Option_.Option[ff.core.Unit_.Unit]](condition_ = (!ff.core.ArrayBuilder_.ArrayBuilder_getEmpty[ff.compiler.Token_.Token](self_ = tokens_)), body_ = {() =>
val last_ : ff.compiler.Token_.Token = ff.core.ArrayBuilder_.ArrayBuilder_expectLast[ff.compiler.Token_.Token](self_ = tokens_);
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (((last_.stopLine_ == startLine_) && (last_.kind_ == ff.compiler.Token_.LLower())) && ff.compiler.Token_.TokenKind_afterKeyword(self_ = kind_)), body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_modify[ff.compiler.Token_.Token](self_ = tokens_, index_ = (ff.core.ArrayBuilder_.ArrayBuilder_getSize[ff.compiler.Token_.Token](self_ = tokens_) - 1), body_ = {(_w1) =>
pipe_dot(_w1)({(_c) =>
ff.compiler.Token_.Token(file_ = _c.file_, code_ = _c.code_, kind_ = ff.compiler.Token_.LKeyword(), startLine_ = _c.startLine_, startLineOffset_ = _c.startLineOffset_, startOffset_ = _c.startOffset_, stopLine_ = _c.stopLine_, stopLineOffset_ = _c.stopLineOffset_, stopOffset_ = _c.stopOffset_)
})
})
});
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (((last_.stopLine_ != startLine_) && ff.compiler.Token_.TokenKind_beforeSeparator(self_ = last_.kind_)) && ff.compiler.Token_.TokenKind_afterSeparator(self_ = kind_)), body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Token_.Token](self_ = tokens_, value_ = ff.compiler.Token_.Token(file_ = file_, code_ = code_, kind_ = ff.compiler.Token_.LSeparator(), startLine_ = startLine_, startLineOffset_ = startLineOffset_, startOffset_ = startOffset_, stopLine_ = startLine_, stopLineOffset_ = startLineOffset_, stopOffset_ = startOffset_))
})
});
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Token_.Token](self_ = tokens_, value_ = ff.compiler.Token_.Token(file_ = file_, code_ = code_, kind_ = kind_, startLine_ = startLine_, startLineOffset_ = startLineOffset_, startOffset_ = startOffset_, stopLine_ = line_, stopLineOffset_ = lineOffset_, stopOffset_ = stopOffset_));
ff.core.Unit_.Unit()
}
var i_ : ff.core.Int_.Int = 0;
ff.core.Core_.while_(condition_ = {() =>
(i_ < ff.core.String_.String_getSize(self_ = code_))
}, body_ = {() =>
ff.core.Core_.while_(condition_ = {() =>
((i_ < ff.core.String_.String_getSize(self_ = code_)) && (((ff.core.String_.String_expect(self_ = code_, index_ = i_) == ' ') || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '\t')) || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '\r')))
}, body_ = {() =>
i_ += 1;
ff.core.Unit_.Unit()
});
val start_ : ff.core.Int_.Int = i_;
startLine_ = line_;
startLineOffset_ = lineOffset_;
ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '\n'), body_ = {() =>
i_ += 1;
line_ += 1;
lineOffset_ = i_;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
((ff.core.String_.String_expect(self_ = code_, index_ = i_) == '/') && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) == '/'))
}, body_ = {() =>
i_ += 2;
ff.core.Core_.while_(condition_ = {() =>
((i_ < ff.core.String_.String_getSize(self_ = code_)) && (ff.core.String_.String_expect(self_ = code_, index_ = i_) != '\n'))
}, body_ = {() =>
i_ += 1;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
((ff.core.String_.String_expect(self_ = code_, index_ = i_) == '/') && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) == '*'))
}, body_ = {() =>
i_ += 2;
ff.core.Core_.while_(condition_ = {() =>
((i_ < ff.core.String_.String_getSize(self_ = code_)) && ((ff.core.String_.String_expect(self_ = code_, index_ = i_) != '*') || (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) != '/')))
}, body_ = {() =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (i_ >= ff.core.String_.String_getSize(self_ = code_)), body_ = {() =>
ff.core.Core_.panic_[ff.core.Nothing_.Nothing](message_ = (("Expected end of comment started on line " + startLine_) + ", got end of file."))
});
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '\n'), body_ = {() =>
line_ += 1;
lineOffset_ = (i_ + 1);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
i_ += 1;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
i_ += 2;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
((ff.core.String_.String_expect(self_ = code_, index_ = i_) == '"') || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '\''))
}, body_ = {() =>
val endSign_ : ff.core.Char_.Char = ff.core.String_.String_expect(self_ = code_, index_ = i_);
var multiLine_ : ff.core.Bool_.Bool = (((((i_ + 2) < ff.core.String_.String_getSize(self_ = code_)) && (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '"')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) == '"')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 2)) == '"'));
i_ += ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Int_.Int](condition_ = multiLine_, body_ = {() =>
3
}), body_ = {() =>
1
});
ff.core.Core_.while_(condition_ = {() =>
((i_ < ff.core.String_.String_getSize(self_ = code_)) && (multiLine_ || (ff.core.String_.String_expect(self_ = code_, index_ = i_) != endSign_)))
}, body_ = {() =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = ((!multiLine_) && (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '\n')), body_ = {() =>
ff.core.Core_.panic_[ff.core.Nothing_.Nothing](message_ = (("Unexpected end of line in string started on line " + startLine_) + "."))
});
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (i_ >= ff.core.String_.String_getSize(self_ = code_)), body_ = {() =>
ff.core.Core_.panic_[ff.core.Nothing_.Nothing](message_ = (("Expected end of string started on line " + startLine_) + ", got end of file."))
});
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ((ff.core.String_.String_expect(self_ = code_, index_ = i_) == '\\') && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) != '\n')), body_ = {() =>
i_ += 1;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (((((multiLine_ && ((i_ + 2) < ff.core.String_.String_getSize(self_ = code_))) && (((i_ + 3) >= ff.core.String_.String_getSize(self_ = code_)) || (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 3)) != '"'))) && (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '"')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) == '"')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 2)) == '"')), body_ = {() =>
multiLine_ = ff.core.Bool_.False();
i_ += 2;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), body_ = {() =>
i_ += 1;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
i_ += 1;
emitToken_(kind_ = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.TokenKind](condition_ = (endSign_ == '"'), body_ = {() =>
ff.compiler.Token_.LString()
}), body_ = {() =>
ff.compiler.Token_.LChar()
}), startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(((ff.core.String_.String_expect(self_ = code_, index_ = i_) >= 'a') && (ff.core.String_.String_expect(self_ = code_, index_ = i_) <= 'z')) || ((ff.core.String_.String_expect(self_ = code_, index_ = i_) >= 'A') && (ff.core.String_.String_expect(self_ = code_, index_ = i_) <= 'Z')))
}, body_ = {() =>
val kind_ : ff.compiler.Token_.TokenKind = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.TokenKind](condition_ = (ff.core.String_.String_expect(self_ = code_, index_ = i_) >= 'a'), body_ = {() =>
ff.compiler.Token_.LLower()
}), body_ = {() =>
ff.compiler.Token_.LUpper()
});
i_ += 1;
ff.core.Core_.while_(condition_ = {() =>
((i_ < ff.core.String_.String_getSize(self_ = code_)) && ((((ff.core.String_.String_expect(self_ = code_, index_ = i_) >= 'a') && (ff.core.String_.String_expect(self_ = code_, index_ = i_) <= 'z')) || ((ff.core.String_.String_expect(self_ = code_, index_ = i_) >= 'A') && (ff.core.String_.String_expect(self_ = code_, index_ = i_) <= 'Z'))) || ((ff.core.String_.String_expect(self_ = code_, index_ = i_) >= '0') && (ff.core.String_.String_expect(self_ = code_, index_ = i_) <= '9'))))
}, body_ = {() =>
i_ += 1;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ((kind_ == ff.compiler.Token_.LUpper()) && (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '.')), body_ = {() =>
i_ += 1;
emitToken_(kind_ = ff.compiler.Token_.LNamespace(), startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), body_ = {() =>
emitToken_(kind_ = kind_, startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
((ff.core.String_.String_expect(self_ = code_, index_ = i_) >= '0') && (ff.core.String_.String_expect(self_ = code_, index_ = i_) <= '9'))
}, body_ = {() =>
var dot_ : ff.core.Bool_.Bool = ff.core.Bool_.False();
var exponent_ : ff.core.Bool_.Bool = ff.core.Bool_.False();
ff.core.Core_.while_(condition_ = {() =>
((i_ < ff.core.String_.String_getSize(self_ = code_)) && ((ff.core.String_.String_expect(self_ = code_, index_ = i_) >= '0') && (ff.core.String_.String_expect(self_ = code_, index_ = i_) <= '9')))
}, body_ = {() =>
i_ += 1;
ff.core.Core_.if_[ff.core.Option_.Option[ff.core.Unit_.Unit]](condition_ = (((ff.core.String_.String_expect(self_ = code_, index_ = i_) == 'e') || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == 'E')) && (!exponent_)), body_ = {() =>
i_ += 1;
dot_ = ff.core.Bool_.True();
exponent_ = ff.core.Bool_.True();
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ((ff.core.String_.String_expect(self_ = code_, index_ = i_) == '+') || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '-')), body_ = {() =>
i_ += 1;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
})
});
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (((((((i_ + 1) < ff.core.String_.String_getSize(self_ = code_)) && (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '.')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) >= '0')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ + 1)) <= '9')) && (!dot_)) && (!exponent_)), body_ = {() =>
i_ += 1;
dot_ = ff.core.Bool_.True();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
emitToken_(kind_ = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.TokenKind](condition_ = (dot_ || exponent_), body_ = {() =>
ff.compiler.Token_.LFloat()
}), body_ = {() =>
ff.compiler.Token_.LInt()
}), startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.core.String_.String_expect(self_ = code_, index_ = i_) == '_')
}, body_ = {() =>
i_ += 1;
emitToken_(kind_ = ff.compiler.Token_.LWildcard(), startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
ff.core.Set_.Set_contains[ff.core.Char_.Char](self_ = operatorCharacters_, value_ = ff.core.String_.String_expect(self_ = code_, index_ = i_))
}, body_ = {() =>
i_ += 1;
ff.core.Core_.while_(condition_ = {() =>
((i_ < ff.core.String_.String_getSize(self_ = code_)) && ff.core.Set_.Set_contains[ff.core.Char_.Char](self_ = operatorCharacters_, value_ = ff.core.String_.String_expect(self_ = code_, index_ = i_)))
}, body_ = {() =>
i_ += 1;
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
val o_ : ff.compiler.Token_.TokenKind = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.compiler.Token_.TokenKind](condition_ = (((i_ - start_) == 1) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '.')), body_ = {() =>
ff.compiler.Token_.LDot()
}), condition_ = {() =>
(((i_ - start_) == 1) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == ','))
}, body_ = {() =>
ff.compiler.Token_.LComma()
}), condition_ = {() =>
(((i_ - start_) == 1) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == ';'))
}, body_ = {() =>
ff.compiler.Token_.LSemicolon()
}), condition_ = {() =>
(((i_ - start_) == 1) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '|'))
}, body_ = {() =>
ff.compiler.Token_.LPipe()
}), condition_ = {() =>
(((i_ - start_) == 1) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == ':'))
}, body_ = {() =>
ff.compiler.Token_.LColon()
}), condition_ = {() =>
(((((i_ - start_) == 3) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 3)) == '.')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 2)) == '.')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '.'))
}, body_ = {() =>
ff.compiler.Token_.LDotDotDot()
}), condition_ = {() =>
((((i_ - start_) == 2) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 2)) == '=')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '>'))
}, body_ = {() =>
ff.compiler.Token_.LArrowThick()
}), condition_ = {() =>
(((i_ - start_) == 1) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '='))
}, body_ = {() =>
ff.compiler.Token_.LAssign()
}), condition_ = {() =>
((((i_ - start_) == 2) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 2)) == '+')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '='))
}, body_ = {() =>
ff.compiler.Token_.LAssignPlus()
}), condition_ = {() =>
((((i_ - start_) == 2) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 2)) == '-')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '='))
}, body_ = {() =>
ff.compiler.Token_.LAssignMinus()
}), condition_ = {() =>
(((((i_ - start_) == 3) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 3)) == ':')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 2)) == ':')) && (ff.core.String_.String_expect(self_ = code_, index_ = (i_ - 1)) == '='))
}, body_ = {() =>
ff.compiler.Token_.LAssignLink()
}), body_ = {() =>
ff.compiler.Token_.LOperator()
});
emitToken_(kind_ = o_, startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(((ff.core.String_.String_expect(self_ = code_, index_ = i_) == '(') || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '[')) || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '{'))
}, body_ = {() =>
i_ += 1;
emitToken_(kind_ = ff.compiler.Token_.LBracketLeft(), startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(((ff.core.String_.String_expect(self_ = code_, index_ = i_) == ')') || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == ']')) || (ff.core.String_.String_expect(self_ = code_, index_ = i_) == '}'))
}, body_ = {() =>
i_ += 1;
emitToken_(kind_ = ff.compiler.Token_.LBracketRight(), startOffset_ = start_, stopOffset_ = i_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(i_ < ff.core.String_.String_getSize(self_ = code_))
}, body_ = {() =>
val column_ : ff.core.Int_.Int = (i_ - startLineOffset_);
ff.core.Core_.panic_[ff.core.Nothing_.Nothing](message_ = ((((((("Unexpected character: " + ff.core.Core_.magicShow_[ff.core.Char_.Char](value_ = ff.core.String_.String_expect(self_ = code_, index_ = i_))) + " in ") + file_) + " at line ") + line_) + ", column ") + column_));
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
});
ff.core.List_.List_each[ff.core.Int_.Int](self_ = ff.core.Int_.Int_getTo(self_ = 1, inclusive_ = 5), body_ = {(i_) =>
emitToken_(kind_ = ff.compiler.Token_.LEnd(), startOffset_ = i_, stopOffset_ = i_);
ff.core.Unit_.Unit()
});
ff.core.ArrayBuilder_.ArrayBuilder_drain[ff.compiler.Token_.Token](self_ = tokens_)
}



}
