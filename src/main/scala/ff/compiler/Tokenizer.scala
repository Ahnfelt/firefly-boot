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

import ff.core.Option_._

import ff.core.Pair_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object Tokenizer_ {



def tokenize_(file_ : ff.core.String_.String, code_ : ff.core.String_.String) : ff.core.Array_.Array[ff.compiler.Token_.Token] = {
val tokens_ = ff.core.Core_.arrayBuilderOf_[ff.compiler.Token_.Token]();
var line_ = 1;
var lineOffset_ = 0;
var startLine_ = line_;
var startLineOffset_ = lineOffset_;
val operatorCharactersString_ = "!@#$%&/=?+|^~*<>.:-,;";
var operatorCharacters_ = ff.core.Core_.setOf_[ff.core.Char_.Char]();
0.getUntil_(operatorCharactersString_.getSize_()).map_({(j_) =>
operatorCharacters_ = operatorCharacters_.add_(operatorCharactersString_.expect_(j_))
});
def emitToken_(kind_ : ff.compiler.Token_.TokenKind, startOffset_ : ff.core.Int_.Int, stopOffset_ : ff.core.Int_.Int) : ff.core.Unit_.Unit = {
ff.core.Core_.if_((!tokens_.getEmpty_()), {() =>
val last_ = tokens_.expectLast_();
ff.core.Core_.if_((((last_.stopLine_ == startLine_) && (last_.kind_ == ff.compiler.Token_.LLower())) && kind_.afterKeyword_()), {() =>
tokens_.modify_((tokens_.getSize_() - 1), {(_w1) =>
_w1.copy(kind_ = ff.compiler.Token_.LKeyword())
})
});
ff.core.Core_.if_((((last_.stopLine_ != startLine_) && last_.kind_.beforeSeparator_()) && kind_.afterSeparator_()), {() =>
tokens_.append_(ff.compiler.Token_.Token(file_, code_, ff.compiler.Token_.LSeparator(), startLine_, startLineOffset_, startOffset_, startLine_, startLineOffset_, startOffset_))
})
});
tokens_.append_(ff.compiler.Token_.Token(file_, code_, kind_, startLine_, startLineOffset_, startOffset_, line_, lineOffset_, stopOffset_))
}
var i_ = 0;
ff.core.Core_.while_({() =>
(i_ < code_.getSize_())
}, {() =>
ff.core.Core_.while_({() =>
((i_ < code_.getSize_()) && (((code_.expect_(i_) == ' ') || (code_.expect_(i_) == '\t')) || (code_.expect_(i_) == '\r')))
}, {() =>
i_ += 1
});
val start_ = i_;
startLine_ = line_;
startLineOffset_ = lineOffset_;
ff.core.Core_.if_((code_.expect_(i_) == '\n'), {() =>
i_ += 1;
line_ += 1;
lineOffset_ = i_
}).elseIf_({() =>
((code_.expect_(i_) == '/') && (code_.expect_((i_ + 1)) == '/'))
}, {() =>
i_ += 2;
ff.core.Core_.while_({() =>
((i_ < code_.getSize_()) && (code_.expect_(i_) != '\n'))
}, {() =>
i_ += 1
})
}).elseIf_({() =>
((code_.expect_(i_) == '/') && (code_.expect_((i_ + 1)) == '*'))
}, {() =>
i_ += 2;
ff.core.Core_.while_({() =>
((i_ < code_.getSize_()) && ((code_.expect_(i_) != '*') || (code_.expect_((i_ + 1)) != '/')))
}, {() =>
ff.core.Core_.if_((i_ >= code_.getSize_()), {() =>
ff.core.Core_.panic_((("Expected end of comment started on line " + startLine_) + ", got end of file."))
});
ff.core.Core_.if_((code_.expect_(i_) == '\n'), {() =>
line_ += 1;
lineOffset_ = (i_ + 1)
});
i_ += 1
});
i_ += 2
}).elseIf_({() =>
((code_.expect_(i_) == '"') || (code_.expect_(i_) == '\''))
}, {() =>
val endSign_ = code_.expect_(i_);
i_ += 1;
ff.core.Core_.while_({() =>
((i_ < code_.getSize_()) && (code_.expect_(i_) != endSign_))
}, {() =>
ff.core.Core_.if_((code_.expect_(i_) == '\n'), {() =>
ff.core.Core_.panic_((("Unexpected end of line in string started on line " + startLine_) + "."))
});
ff.core.Core_.if_((i_ >= code_.getSize_()), {() =>
ff.core.Core_.panic_((("Expected end of string started on line " + startLine_) + ", got end of file."))
});
ff.core.Core_.if_(((code_.expect_(i_) == '\\') && (code_.expect_((i_ + 1)) != '\n')), {() =>
i_ += 1
});
i_ += 1
});
i_ += 1;
emitToken_(ff.core.Core_.if_((endSign_ == '"'), {() =>
ff.compiler.Token_.LString()
}).else_({() =>
ff.compiler.Token_.LChar()
}), start_, i_)
}).elseIf_({() =>
(((code_.expect_(i_) >= 'a') && (code_.expect_(i_) <= 'z')) || ((code_.expect_(i_) >= 'A') && (code_.expect_(i_) <= 'Z')))
}, {() =>
val kind_ = ff.core.Core_.if_((code_.expect_(i_) >= 'a'), {() =>
ff.compiler.Token_.LLower()
}).else_({() =>
ff.compiler.Token_.LUpper()
});
i_ += 1;
ff.core.Core_.while_({() =>
((i_ < code_.getSize_()) && ((((code_.expect_(i_) >= 'a') && (code_.expect_(i_) <= 'z')) || ((code_.expect_(i_) >= 'A') && (code_.expect_(i_) <= 'Z'))) || ((code_.expect_(i_) >= '0') && (code_.expect_(i_) <= '9'))))
}, {() =>
i_ += 1
});
ff.core.Core_.if_(((kind_ == ff.compiler.Token_.LUpper()) && (code_.expect_(i_) == '.')), {() =>
i_ += 1;
emitToken_(ff.compiler.Token_.LNamespace(), start_, i_)
}).else_({() =>
emitToken_(kind_, start_, i_)
})
}).elseIf_({() =>
((code_.expect_(i_) >= '0') && (code_.expect_(i_) <= '9'))
}, {() =>
var dot_ = ff.core.Bool_.False();
var exponent_ = ff.core.Bool_.False();
ff.core.Core_.while_({() =>
((i_ < code_.getSize_()) && ((code_.expect_(i_) >= '0') && (code_.expect_(i_) <= '9')))
}, {() =>
i_ += 1;
ff.core.Core_.if_((((code_.expect_(i_) == 'e') || (code_.expect_(i_) == 'E')) && (!exponent_)), {() =>
i_ += 1;
dot_ = ff.core.Bool_.True();
exponent_ = ff.core.Bool_.True();
ff.core.Core_.if_(((code_.expect_(i_) == '+') || (code_.expect_(i_) == '-')), {() =>
i_ += 1
})
});
ff.core.Core_.if_((((((((i_ + 1) < code_.getSize_()) && (code_.expect_(i_) == '.')) && (code_.expect_((i_ + 1)) >= '0')) && (code_.expect_((i_ + 1)) <= '9')) && (!dot_)) && (!exponent_)), {() =>
i_ += 1;
dot_ = ff.core.Bool_.True()
})
});
emitToken_(ff.core.Core_.if_((dot_ || exponent_), {() =>
ff.compiler.Token_.LFloat()
}).else_({() =>
ff.compiler.Token_.LInt()
}), start_, i_)
}).elseIf_({() =>
(code_.expect_(i_) == '_')
}, {() =>
i_ += 1;
emitToken_(ff.compiler.Token_.LWildcard(), start_, i_)
}).elseIf_({() =>
operatorCharacters_.contains_(code_.expect_(i_))
}, {() =>
i_ += 1;
ff.core.Core_.while_({() =>
((i_ < code_.getSize_()) && operatorCharacters_.contains_(code_.expect_(i_)))
}, {() =>
i_ += 1
});
val o_ = ff.core.Core_.if_((((i_ - start_) == 1) && (code_.expect_((i_ - 1)) == '.')), {() =>
ff.compiler.Token_.LDot()
}).elseIf_({() =>
(((i_ - start_) == 1) && (code_.expect_((i_ - 1)) == ','))
}, {() =>
ff.compiler.Token_.LComma()
}).elseIf_({() =>
(((i_ - start_) == 1) && (code_.expect_((i_ - 1)) == ';'))
}, {() =>
ff.compiler.Token_.LSemicolon()
}).elseIf_({() =>
(((i_ - start_) == 1) && (code_.expect_((i_ - 1)) == '|'))
}, {() =>
ff.compiler.Token_.LPipe()
}).elseIf_({() =>
(((i_ - start_) == 1) && (code_.expect_((i_ - 1)) == ':'))
}, {() =>
ff.compiler.Token_.LColon()
}).elseIf_({() =>
(((((i_ - start_) == 3) && (code_.expect_((i_ - 3)) == '.')) && (code_.expect_((i_ - 2)) == '.')) && (code_.expect_((i_ - 1)) == '.'))
}, {() =>
ff.compiler.Token_.LDotDotDot()
}).elseIf_({() =>
((((i_ - start_) == 2) && (code_.expect_((i_ - 2)) == '=')) && (code_.expect_((i_ - 1)) == '>'))
}, {() =>
ff.compiler.Token_.LArrowThick()
}).elseIf_({() =>
(((i_ - start_) == 1) && (code_.expect_((i_ - 1)) == '='))
}, {() =>
ff.compiler.Token_.LAssign()
}).elseIf_({() =>
((((i_ - start_) == 2) && (code_.expect_((i_ - 2)) == '+')) && (code_.expect_((i_ - 1)) == '='))
}, {() =>
ff.compiler.Token_.LAssignPlus()
}).elseIf_({() =>
((((i_ - start_) == 2) && (code_.expect_((i_ - 2)) == '-')) && (code_.expect_((i_ - 1)) == '='))
}, {() =>
ff.compiler.Token_.LAssignMinus()
}).elseIf_({() =>
(((((i_ - start_) == 3) && (code_.expect_((i_ - 3)) == ':')) && (code_.expect_((i_ - 2)) == ':')) && (code_.expect_((i_ - 1)) == '='))
}, {() =>
ff.compiler.Token_.LAssignLink()
}).else_({() =>
ff.compiler.Token_.LOperator()
});
emitToken_(o_, start_, i_)
}).elseIf_({() =>
(((code_.expect_(i_) == '(') || (code_.expect_(i_) == '[')) || (code_.expect_(i_) == '{'))
}, {() =>
i_ += 1;
emitToken_(ff.compiler.Token_.LBracketLeft(), start_, i_)
}).elseIf_({() =>
(((code_.expect_(i_) == ')') || (code_.expect_(i_) == ']')) || (code_.expect_(i_) == '}'))
}, {() =>
i_ += 1;
emitToken_(ff.compiler.Token_.LBracketRight(), start_, i_)
}).elseIf_({() =>
(i_ < code_.getSize_())
}, {() =>
val column_ = (i_ - startLineOffset_);
ff.core.Core_.panic_(((((((("Unexpected character: " + ff.core.Core_.magicShow_(code_.expect_(i_))) + " in ") + file_) + " at line ") + line_) + ", column ") + column_))
})
});
1.getTo_(5).each_({(i_) =>
emitToken_(ff.compiler.Token_.LEnd(), i_, i_)
});
tokens_.drain_()
}



}
