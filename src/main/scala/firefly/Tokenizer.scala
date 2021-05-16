package firefly
import firefly.Firefly_Core._

import firefly.Token_._
object Tokenizer_ {



def tokenize(file : Firefly_Core.String, code : Firefly_Core.String) = {
val tokens = Firefly_Core.ArrayBuilder[Token_.Token]();
var line = 1;
var lineOffset = 0;
var startLine = line;
var startLineOffset = lineOffset;
val operatorCharactersString = "!@#$%&/=?+|^~*<>.:-,;";
val operatorCharacters = Firefly_Core.SetBuilder[Firefly_Core.Char]();
0.until(operatorCharactersString.getSize()).map({(j) =>
operatorCharacters.add(operatorCharactersString.expect(j))
});
def emitToken(kind : Token_.TokenKind, startOffset : Firefly_Core.Int, stopOffset : Firefly_Core.Int) : Firefly_Core.Unit = {
Firefly_Core.if_(tokens.nonEmpty, {() =>
val last = tokens.last;
Firefly_Core.if_((((last.stopLine == startLine) && (last.kind == Token_.LLower())) && kind.afterKeyword()), {() =>
tokens.modify((tokens.getSize() - 1), {(_w1) =>
_w1.copy(kind = Token_.LKeyword())
})
});
Firefly_Core.if_((((last.stopLine != startLine) && last.kind.beforeSeparator()) && kind.afterSeparator()), {() =>
tokens.append(Token_.Token(file, code, Token_.LSeparator(), startLine, startLineOffset, startOffset, line, lineOffset, stopOffset))
})
});
tokens.append(Token_.Token(file, code, kind, startLine, startLineOffset, startOffset, line, lineOffset, stopOffset))
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
Token_.LString()
}).else_({() =>
Token_.LChar()
}), start, i)
}).elseIf({() =>
(((code(i) >= 'a') && (code(i) <= 'z')) || ((code(i) >= 'A') && (code(i) <= 'Z')))
}, {() =>
val kind = Firefly_Core.if_((code(i) >= 'a'), {() =>
Token_.LLower()
}).else_({() =>
Token_.LUpper()
});
i += 1;
Firefly_Core.while_({() =>
((i < code.length) && ((((code(i) >= 'a') && (code(i) <= 'z')) || ((code(i) >= 'A') && (code(i) <= 'Z'))) || ((code(i) >= '0') && (code(i) <= '9'))))
}, {() =>
i += 1
});
Firefly_Core.if_(((kind == Token_.LUpper()) && (code(i) == '.')), {() =>
i += 1;
emitToken(Token_.LNamespace(), start, i)
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
Token_.LFloat()
}).else_({() =>
Token_.LInt()
}), start, i)
}).elseIf({() =>
(code(i) == '_')
}, {() =>
i += 1;
emitToken(Token_.LWildcard(), start, i)
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
Token_.LDot()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ','))
}, {() =>
Token_.LComma()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ';'))
}, {() =>
Token_.LSemicolon()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == '|'))
}, {() =>
Token_.LPipe()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == ':'))
}, {() =>
Token_.LColon()
}).elseIf({() =>
(((((i - start) == 3) && (code((i - 3)) == '.')) && (code((i - 2)) == '.')) && (code((i - 1)) == '.'))
}, {() =>
Token_.LDotDotDot()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '=')) && (code((i - 1)) == '>'))
}, {() =>
Token_.LArrowThick()
}).elseIf({() =>
(((i - start) == 1) && (code((i - 1)) == '='))
}, {() =>
Token_.LAssign()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '+')) && (code((i - 1)) == '='))
}, {() =>
Token_.LAssignPlus()
}).elseIf({() =>
((((i - start) == 2) && (code((i - 2)) == '-')) && (code((i - 1)) == '='))
}, {() =>
Token_.LAssignMinus()
}).elseIf({() =>
(((((i - start) == 3) && (code((i - 3)) == ':')) && (code((i - 2)) == ':')) && (code((i - 1)) == '='))
}, {() =>
Token_.LAssignLink()
}).else_({() =>
Token_.LOperator()
});
emitToken(o, start, i)
}).elseIf({() =>
(((code(i) == '(') || (code(i) == '[')) || (code(i) == '{'))
}, {() =>
i += 1;
emitToken(Token_.LBracketLeft(), start, i)
}).elseIf({() =>
(((code(i) == ')') || (code(i) == ']')) || (code(i) == '}'))
}, {() =>
i += 1;
emitToken(Token_.LBracketRight(), start, i)
}).elseIf({() =>
(i < code.length)
}, {() =>
Firefly_Core.panic(("Unexpected character: " + code(i)))
})
});
1.to(5).each({(i) =>
emitToken(Token_.LEnd(), i, i)
});
tokens.toArray
}



}
