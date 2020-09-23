package firefly
import firefly.Firefly_Core._

import firefly.Token._
object Tokenizer {



def tokenize(file : String, code : String) = {
val tokens = Firefly_Core.ArrayBuilder[Token]();
var line = 1;
var lineOffset = 0;
var startLine = line;
var startLineOffset = lineOffset;
val operatorCharactersString = "!@#$%&/=?+|^~*<>.:-,;";
val operatorCharacters = SetBuilder[Char]();
0.until(operatorCharactersString.size).map({(j) =>
operatorCharacters.add(operatorCharactersString(j))
});
def emitToken(kind : TokenKind, startOffset : Int, stopOffset : Int) : Unit = {
Firefly_Core.if_(tokens.nonEmpty, {() =>
val last = tokens.last;
Firefly_Core.if_((((last.stopLine == startLine) && (last.kind == LLower())) && kind.afterKeyword()), {() =>
tokens.modify((tokens.size - 1), {(_w1) =>
_w1.copy(kind = LKeyword())
})
});
Firefly_Core.if_((((last.stopLine != startLine) && last.kind.beforeSeparator()) && kind.afterSeparator()), {() =>
tokens.append(Token(file, code, LSeparator(), startLine, startLineOffset, startOffset, line, lineOffset, stopOffset))
})
});
tokens.append(Token(file, code, kind, startLine, startLineOffset, startOffset, line, lineOffset, stopOffset))
}
var i = 0;
Firefly_Core.while_({() =>
(i < code.length)
}, {() =>
Firefly_Core.while_({() =>
((i < code.length) && (((code(i) == ' ') || (code(i) == '\t')) || (code(i) == '\r')))
}, {() =>
i += 1
});
val start = i;
startLine = line;
startLineOffset = lineOffset;
Firefly_Core.if_((code(i) == '\n'), {() =>
i += 1;
line += 1;
lineOffset = i
}).elseIf({() =>
((code(i) == '/') && (code((i + 1)) == '/'))
}, {() =>
i += 2;
Firefly_Core.while_({() =>
((i < code.length) && (code(i) != '\n'))
}, {() =>
i += 1
})
}).elseIf({() =>
((code(i) == '/') && (code((i + 1)) == '*'))
}, {() =>
i += 2;
Firefly_Core.while_({() =>
((i < code.length) && ((code(i) != '*') || (code((i + 1)) != '/')))
}, {() =>
Firefly_Core.if_((i >= code.length), {() =>
Firefly_Core.panic((("Expected end of comment started on line " + startLine) + ", got end of file."))
});
Firefly_Core.if_((code(i) == '\n'), {() =>
line += 1;
lineOffset = (i + 1)
});
i += 1
});
i += 2
}).elseIf({() =>
((code(i) == '"') || (code(i) == '\''))
}, {() =>
val endSign = code(i);
i += 1;
Firefly_Core.while_({() =>
((i < code.length) && (code(i) != endSign))
}, {() =>
Firefly_Core.if_((code(i) == '\n'), {() =>
Firefly_Core.panic((("Unexpected end of line in string started on line " + startLine) + "."))
});
Firefly_Core.if_((i >= code.length), {() =>
Firefly_Core.panic((("Expected end of string started on line " + startLine) + ", got end of file."))
});
Firefly_Core.if_(((code(i) == '\\') && (code((i + 1)) != '\n')), {() =>
i += 1
});
i += 1
});
i += 1;
emitToken(Firefly_Core.if_((endSign == '"'), {() =>
LString()
}).else_({() =>
LChar()
}), start, i)
}).elseIf({() =>
(((code(i) >= 'a') && (code(i) <= 'z')) || ((code(i) >= 'A') && (code(i) <= 'Z')))
}, {() =>
val kind = Firefly_Core.if_((code(i) >= 'a'), {() =>
LLower()
}).else_({() =>
LUpper()
});
i += 1;
Firefly_Core.while_({() =>
((i < code.length) && ((((code(i) >= 'a') && (code(i) <= 'z')) || ((code(i) >= 'A') && (code(i) <= 'Z'))) || ((code(i) >= '0') && (code(i) <= '9'))))
}, {() =>
i += 1
});
Firefly_Core.if_(((kind == LUpper()) && (code(i) == '.')), {() =>
i += 1;
emitToken(LNamespace(), start, i)
}).else_({() =>
emitToken(kind, start, i)
})
}).elseIf({() =>
((code(i) >= '0') && (code(i) <= '9'))
}, {() =>
var dot = Firefly_Core.False();
var exponent = Firefly_Core.False();
Firefly_Core.while_({() =>
((i < code.length) && ((code(i) >= '0') && (code(i) <= '9')))
}, {() =>
i += 1;
Firefly_Core.if_((((code(i) == 'e') || (code(i) == 'E')) && (!exponent)), {() =>
i += 1;
dot = Firefly_Core.True();
exponent = Firefly_Core.True();
Firefly_Core.if_(((code(i) == '+') || (code(i) == '-')), {() =>
i += 1
})
});
Firefly_Core.if_((((((((i + 1) < code.length) && (code(i) == '.')) && (code((i + 1)) >= '0')) && (code((i + 1)) <= '9')) && (!dot)) && (!exponent)), {() =>
i += 1;
dot = Firefly_Core.True()
})
});
emitToken(Firefly_Core.if_((dot || exponent), {() =>
LFloat()
}).else_({() =>
LInt()
}), start, i)
}).elseIf({() =>
(code(i) == '_')
}, {() =>
i += 1;
emitToken(LWildcard(), start, i)
}).elseIf({() =>
operatorCharacters(code(i))
}, {() =>
i += 1;
Firefly_Core.while_({() =>
((i < code.length) && operatorCharacters(code(i)))
}, {() =>
i += 1
});
val o = Firefly_Core.if_((((i - start) == 1) && (code((i - 1)) == '.')), {() =>
LDot()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ','))
}, {() =>
LComma()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ';'))
}, {() =>
LSemicolon()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == '|'))
}, {() =>
LPipe()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ':'))
}, {() =>
LColon()
}).elseIf({() =>
(((((i - start) == 3) && (code((i - 3)) == '.')) && (code((i - 2)) == '.')) && (code((i - 1)) == '.'))
}, {() =>
LDotDotDot()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '=')) && (code((i - 1)) == '>'))
}, {() =>
LArrowThick()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == '='))
}, {() =>
LAssign()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '+')) && (code((i - 1)) == '='))
}, {() =>
LAssignPlus()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '-')) && (code((i - 1)) == '='))
}, {() =>
LAssignMinus()
}).elseIf({() =>
(((((i - start) == 3) && (code((i - 3)) == ':')) && (code((i - 2)) == ':')) && (code((i - 1)) == '='))
}, {() =>
LAssignLink()
}).else_({() =>
LOperator()
});
emitToken(o, start, i)
}).elseIf({() =>
(((code(i) == '(') || (code(i) == '[')) || (code(i) == '{'))
}, {() =>
i += 1;
emitToken(LBracketLeft(), start, i)
}).elseIf({() =>
(((code(i) == ')') || (code(i) == ']')) || (code(i) == '}'))
}, {() =>
i += 1;
emitToken(LBracketRight(), start, i)
}).elseIf({() =>
(i < code.length)
}, {() =>
Firefly_Core.panic(("Unexpected character: " + code(i)))
})
});
1.to(5).each({(i) =>
emitToken(LEnd(), i, i)
});
tokens.toArray
}



object Tokenizer {

def tokenize(file : String, code : String) = {
val tokens = Firefly_Core.ArrayBuilder[Token]();
var line = 1;
var lineOffset = 0;
var startLine = line;
var startLineOffset = lineOffset;
val operatorCharactersString = "!@#$%&/=?+|^~*<>.:-,;";
val operatorCharacters = SetBuilder[Char]();
0.until(operatorCharactersString.size).map({(j) =>
operatorCharacters.add(operatorCharactersString(j))
});
def emitToken(kind : TokenKind, startOffset : Int, stopOffset : Int) : Unit = {
Firefly_Core.if_(tokens.nonEmpty, {() =>
val last = tokens.last;
Firefly_Core.if_((((last.stopLine == startLine) && (last.kind == LLower())) && kind.afterKeyword()), {() =>
tokens.modify((tokens.size - 1), {(_w1) =>
_w1.copy(kind = LKeyword())
})
});
Firefly_Core.if_((((last.stopLine != startLine) && last.kind.beforeSeparator()) && kind.afterSeparator()), {() =>
tokens.append(Token(file, code, LSeparator(), startLine, startLineOffset, startOffset, line, lineOffset, stopOffset))
})
});
tokens.append(Token(file, code, kind, startLine, startLineOffset, startOffset, line, lineOffset, stopOffset))
}
var i = 0;
Firefly_Core.while_({() =>
(i < code.length)
}, {() =>
Firefly_Core.while_({() =>
((i < code.length) && (((code(i) == ' ') || (code(i) == '\t')) || (code(i) == '\r')))
}, {() =>
i += 1
});
val start = i;
startLine = line;
startLineOffset = lineOffset;
Firefly_Core.if_((code(i) == '\n'), {() =>
i += 1;
line += 1;
lineOffset = i
}).elseIf({() =>
((code(i) == '/') && (code((i + 1)) == '/'))
}, {() =>
i += 2;
Firefly_Core.while_({() =>
((i < code.length) && (code(i) != '\n'))
}, {() =>
i += 1
})
}).elseIf({() =>
((code(i) == '/') && (code((i + 1)) == '*'))
}, {() =>
i += 2;
Firefly_Core.while_({() =>
((i < code.length) && ((code(i) != '*') || (code((i + 1)) != '/')))
}, {() =>
Firefly_Core.if_((i >= code.length), {() =>
Firefly_Core.panic((("Expected end of comment started on line " + startLine) + ", got end of file."))
});
Firefly_Core.if_((code(i) == '\n'), {() =>
line += 1;
lineOffset = (i + 1)
});
i += 1
});
i += 2
}).elseIf({() =>
((code(i) == '"') || (code(i) == '\''))
}, {() =>
val endSign = code(i);
i += 1;
Firefly_Core.while_({() =>
((i < code.length) && (code(i) != endSign))
}, {() =>
Firefly_Core.if_((code(i) == '\n'), {() =>
Firefly_Core.panic((("Unexpected end of line in string started on line " + startLine) + "."))
});
Firefly_Core.if_((i >= code.length), {() =>
Firefly_Core.panic((("Expected end of string started on line " + startLine) + ", got end of file."))
});
Firefly_Core.if_(((code(i) == '\\') && (code((i + 1)) != '\n')), {() =>
i += 1
});
i += 1
});
i += 1;
emitToken(Firefly_Core.if_((endSign == '"'), {() =>
LString()
}).else_({() =>
LChar()
}), start, i)
}).elseIf({() =>
(((code(i) >= 'a') && (code(i) <= 'z')) || ((code(i) >= 'A') && (code(i) <= 'Z')))
}, {() =>
val kind = Firefly_Core.if_((code(i) >= 'a'), {() =>
LLower()
}).else_({() =>
LUpper()
});
i += 1;
Firefly_Core.while_({() =>
((i < code.length) && ((((code(i) >= 'a') && (code(i) <= 'z')) || ((code(i) >= 'A') && (code(i) <= 'Z'))) || ((code(i) >= '0') && (code(i) <= '9'))))
}, {() =>
i += 1
});
Firefly_Core.if_(((kind == LUpper()) && (code(i) == '.')), {() =>
i += 1;
emitToken(LNamespace(), start, i)
}).else_({() =>
emitToken(kind, start, i)
})
}).elseIf({() =>
((code(i) >= '0') && (code(i) <= '9'))
}, {() =>
var dot = Firefly_Core.False();
var exponent = Firefly_Core.False();
Firefly_Core.while_({() =>
((i < code.length) && ((code(i) >= '0') && (code(i) <= '9')))
}, {() =>
i += 1;
Firefly_Core.if_((((code(i) == 'e') || (code(i) == 'E')) && (!exponent)), {() =>
i += 1;
dot = Firefly_Core.True();
exponent = Firefly_Core.True();
Firefly_Core.if_(((code(i) == '+') || (code(i) == '-')), {() =>
i += 1
})
});
Firefly_Core.if_((((((((i + 1) < code.length) && (code(i) == '.')) && (code((i + 1)) >= '0')) && (code((i + 1)) <= '9')) && (!dot)) && (!exponent)), {() =>
i += 1;
dot = Firefly_Core.True()
})
});
emitToken(Firefly_Core.if_((dot || exponent), {() =>
LFloat()
}).else_({() =>
LInt()
}), start, i)
}).elseIf({() =>
(code(i) == '_')
}, {() =>
i += 1;
emitToken(LWildcard(), start, i)
}).elseIf({() =>
operatorCharacters(code(i))
}, {() =>
i += 1;
Firefly_Core.while_({() =>
((i < code.length) && operatorCharacters(code(i)))
}, {() =>
i += 1
});
val o = Firefly_Core.if_((((i - start) == 1) && (code((i - 1)) == '.')), {() =>
LDot()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ','))
}, {() =>
LComma()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ';'))
}, {() =>
LSemicolon()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == '|'))
}, {() =>
LPipe()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ':'))
}, {() =>
LColon()
}).elseIf({() =>
(((((i - start) == 3) && (code((i - 3)) == '.')) && (code((i - 2)) == '.')) && (code((i - 1)) == '.'))
}, {() =>
LDotDotDot()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '=')) && (code((i - 1)) == '>'))
}, {() =>
LArrowThick()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == '='))
}, {() =>
LAssign()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '+')) && (code((i - 1)) == '='))
}, {() =>
LAssignPlus()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '-')) && (code((i - 1)) == '='))
}, {() =>
LAssignMinus()
}).elseIf({() =>
(((((i - start) == 3) && (code((i - 3)) == ':')) && (code((i - 2)) == ':')) && (code((i - 1)) == '='))
}, {() =>
LAssignLink()
}).else_({() =>
LOperator()
});
emitToken(o, start, i)
}).elseIf({() =>
(((code(i) == '(') || (code(i) == '[')) || (code(i) == '{'))
}, {() =>
i += 1;
emitToken(LBracketLeft(), start, i)
}).elseIf({() =>
(((code(i) == ')') || (code(i) == ']')) || (code(i) == '}'))
}, {() =>
i += 1;
emitToken(LBracketRight(), start, i)
}).elseIf({() =>
(i < code.length)
}, {() =>
Firefly_Core.panic(("Unexpected character: " + code(i)))
})
});
1.to(5).each({(i) =>
emitToken(LEnd(), i, i)
});
tokens.toArray
}

}

}
