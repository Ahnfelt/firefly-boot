package compiler
import compiler.Firefly_Core._

import compiler.Token_._
object Tokenizer_ {



def tokenize(file : Firefly_Core.String, code : Firefly_Core.String) : Firefly_Core.Array[Token_.Token] = {
val tokens = Firefly_Core.arrayBuilderOf[Token_.Token]();
var line = 1;
var lineOffset = 0;
var startLine = line;
var startLineOffset = lineOffset;
val operatorCharactersString = "!@#$%&/=?+|^~*<>.:-,;";
var operatorCharacters = Firefly_Core.setOf[Firefly_Core.Char]();
0.getUntil(operatorCharactersString.getSize()).map({(j) =>
operatorCharacters = operatorCharacters.add(operatorCharactersString.expect(j))
});
def emitToken(kind : Token_.TokenKind, startOffset : Firefly_Core.Int, stopOffset : Firefly_Core.Int) : Firefly_Core.Unit = {
Firefly_Core.if_((!tokens.getEmpty()), {() =>
val last = tokens.expectLast();
Firefly_Core.if_((((last.stopLine == startLine) && (last.kind == Token_.LLower())) && kind.afterKeyword()), {() =>
tokens.modify((tokens.getSize() - 1), {(_w1) =>
_w1.copy(kind = Token_.LKeyword())
})
});
Firefly_Core.if_((((last.stopLine != startLine) && last.kind.beforeSeparator()) && kind.afterSeparator()), {() =>
tokens.append(Token_.Token(file, code, Token_.LSeparator(), startLine, startLineOffset, startOffset, startLine, startLineOffset, startOffset))
})
});
tokens.append(Token_.Token(file, code, kind, startLine, startLineOffset, startOffset, line, lineOffset, stopOffset))
}
var i = 0;
Firefly_Core.while_({() =>
(i < code.getSize())
}, {() =>
Firefly_Core.while_({() =>
((i < code.getSize()) && (((code.expect(i) == ' ') || (code.expect(i) == '\t')) || (code.expect(i) == '\r')))
}, {() =>
i += 1
});
val start = i;
startLine = line;
startLineOffset = lineOffset;
Firefly_Core.if_((code.expect(i) == '\n'), {() =>
i += 1;
line += 1;
lineOffset = i
}).elseIf({() =>
((code.expect(i) == '/') && (code.expect((i + 1)) == '/'))
}, {() =>
i += 2;
Firefly_Core.while_({() =>
((i < code.getSize()) && (code.expect(i) != '\n'))
}, {() =>
i += 1
})
}).elseIf({() =>
((code.expect(i) == '/') && (code.expect((i + 1)) == '*'))
}, {() =>
i += 2;
Firefly_Core.while_({() =>
((i < code.getSize()) && ((code.expect(i) != '*') || (code.expect((i + 1)) != '/')))
}, {() =>
Firefly_Core.if_((i >= code.getSize()), {() =>
Firefly_Core.panic((("Expected end of comment started on line " + startLine) + ", got end of file."))
});
Firefly_Core.if_((code.expect(i) == '\n'), {() =>
line += 1;
lineOffset = (i + 1)
});
i += 1
});
i += 2
}).elseIf({() =>
((code.expect(i) == '"') || (code.expect(i) == '\''))
}, {() =>
val endSign = code.expect(i);
i += 1;
Firefly_Core.while_({() =>
((i < code.getSize()) && (code.expect(i) != endSign))
}, {() =>
Firefly_Core.if_((code.expect(i) == '\n'), {() =>
Firefly_Core.panic((("Unexpected end of line in string started on line " + startLine) + "."))
});
Firefly_Core.if_((i >= code.getSize()), {() =>
Firefly_Core.panic((("Expected end of string started on line " + startLine) + ", got end of file."))
});
Firefly_Core.if_(((code.expect(i) == '\\') && (code.expect((i + 1)) != '\n')), {() =>
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
(((code.expect(i) >= 'a') && (code.expect(i) <= 'z')) || ((code.expect(i) >= 'A') && (code.expect(i) <= 'Z')))
}, {() =>
val kind = Firefly_Core.if_((code.expect(i) >= 'a'), {() =>
Token_.LLower()
}).else_({() =>
Token_.LUpper()
});
i += 1;
Firefly_Core.while_({() =>
((i < code.getSize()) && ((((code.expect(i) >= 'a') && (code.expect(i) <= 'z')) || ((code.expect(i) >= 'A') && (code.expect(i) <= 'Z'))) || ((code.expect(i) >= '0') && (code.expect(i) <= '9'))))
}, {() =>
i += 1
});
Firefly_Core.if_(((kind == Token_.LUpper()) && (code.expect(i) == '.')), {() =>
i += 1;
emitToken(Token_.LNamespace(), start, i)
}).else_({() =>
emitToken(kind, start, i)
})
}).elseIf({() =>
((code.expect(i) >= '0') && (code.expect(i) <= '9'))
}, {() =>
var dot = Firefly_Core.False();
var exponent = Firefly_Core.False();
Firefly_Core.while_({() =>
((i < code.getSize()) && ((code.expect(i) >= '0') && (code.expect(i) <= '9')))
}, {() =>
i += 1;
Firefly_Core.if_((((code.expect(i) == 'e') || (code.expect(i) == 'E')) && (!exponent)), {() =>
i += 1;
dot = Firefly_Core.True();
exponent = Firefly_Core.True();
Firefly_Core.if_(((code.expect(i) == '+') || (code.expect(i) == '-')), {() =>
i += 1
})
});
Firefly_Core.if_((((((((i + 1) < code.getSize()) && (code.expect(i) == '.')) && (code.expect((i + 1)) >= '0')) && (code.expect((i + 1)) <= '9')) && (!dot)) && (!exponent)), {() =>
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
(code.expect(i) == '_')
}, {() =>
i += 1;
emitToken(Token_.LWildcard(), start, i)
}).elseIf({() =>
operatorCharacters.contains(code.expect(i))
}, {() =>
i += 1;
Firefly_Core.while_({() =>
((i < code.getSize()) && operatorCharacters.contains(code.expect(i)))
}, {() =>
i += 1
});
val o = Firefly_Core.if_((((i - start) == 1) && (code.expect((i - 1)) == '.')), {() =>
Token_.LDot()
}).elseIf({() =>
(((i - start) == 1) && (code.expect((i - 1)) == ','))
}, {() =>
Token_.LComma()
}).elseIf({() =>
(((i - start) == 1) && (code.expect((i - 1)) == ';'))
}, {() =>
Token_.LSemicolon()
}).elseIf({() =>
(((i - start) == 1) && (code.expect((i - 1)) == '|'))
}, {() =>
Token_.LPipe()
}).elseIf({() =>
(((i - start) == 1) && (code.expect((i - 1)) == ':'))
}, {() =>
Token_.LColon()
}).elseIf({() =>
(((((i - start) == 3) && (code.expect((i - 3)) == '.')) && (code.expect((i - 2)) == '.')) && (code.expect((i - 1)) == '.'))
}, {() =>
Token_.LDotDotDot()
}).elseIf({() =>
((((i - start) == 2) && (code.expect((i - 2)) == '=')) && (code.expect((i - 1)) == '>'))
}, {() =>
Token_.LArrowThick()
}).elseIf({() =>
(((i - start) == 1) && (code.expect((i - 1)) == '='))
}, {() =>
Token_.LAssign()
}).elseIf({() =>
((((i - start) == 2) && (code.expect((i - 2)) == '+')) && (code.expect((i - 1)) == '='))
}, {() =>
Token_.LAssignPlus()
}).elseIf({() =>
((((i - start) == 2) && (code.expect((i - 2)) == '-')) && (code.expect((i - 1)) == '='))
}, {() =>
Token_.LAssignMinus()
}).elseIf({() =>
(((((i - start) == 3) && (code.expect((i - 3)) == ':')) && (code.expect((i - 2)) == ':')) && (code.expect((i - 1)) == '='))
}, {() =>
Token_.LAssignLink()
}).else_({() =>
Token_.LOperator()
});
emitToken(o, start, i)
}).elseIf({() =>
(((code.expect(i) == '(') || (code.expect(i) == '[')) || (code.expect(i) == '{'))
}, {() =>
i += 1;
emitToken(Token_.LBracketLeft(), start, i)
}).elseIf({() =>
(((code.expect(i) == ')') || (code.expect(i) == ']')) || (code.expect(i) == '}'))
}, {() =>
i += 1;
emitToken(Token_.LBracketRight(), start, i)
}).elseIf({() =>
(i < code.getSize())
}, {() =>
Firefly_Core.panic(("Unexpected character: " + Firefly_Core.magicShow(code.expect(i))))
})
});
1.getTo(5).each({(i) =>
emitToken(Token_.LEnd(), i, i)
});
tokens.drain()
}



}
