package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Token_ {

case class Token(file : Firefly_Core.String, code : Firefly_Core.String, kind : Token_.TokenKind, startLine : Firefly_Core.Int, startLineOffset : Firefly_Core.Int, startOffset : Firefly_Core.Int, stopLine : Firefly_Core.Int, stopLineOffset : Firefly_Core.Int, stopOffset : Firefly_Core.Int)

sealed abstract class TokenKind extends Product with Serializable
case class LEnd() extends TokenKind
case class LString() extends TokenKind
case class LChar() extends TokenKind
case class LInt() extends TokenKind
case class LFloat() extends TokenKind
case class LKeyword() extends TokenKind
case class LNamespace() extends TokenKind
case class LLower() extends TokenKind
case class LUpper() extends TokenKind
case class LWildcard() extends TokenKind
case class LBracketLeft() extends TokenKind
case class LBracketRight() extends TokenKind
case class LOperator() extends TokenKind
case class LComma() extends TokenKind
case class LSeparator() extends TokenKind
case class LDot() extends TokenKind
case class LSemicolon() extends TokenKind
case class LPipe() extends TokenKind
case class LColon() extends TokenKind
case class LDotDotDot() extends TokenKind
case class LArrowThick() extends TokenKind
case class LAssign() extends TokenKind
case class LAssignPlus() extends TokenKind
case class LAssignMinus() extends TokenKind
case class LAssignLink() extends TokenKind


implicit class Token_extend0(token : Token_.Token) {

def at() : Syntax_.Location = {
Syntax_.Location(token.file, token.startLine, ((token.startOffset - token.startLineOffset) + 1))
}

def raw() : Firefly_Core.String = {
token.code.slice(token.startOffset, token.stopOffset)
}

def is(kind1 : Token_.TokenKind) : Firefly_Core.Bool = {
(token.kind == kind1)
}

def is2(kind1 : Token_.TokenKind, kind2 : Token_.TokenKind) : Firefly_Core.Bool = {
((token.kind == kind1) || (token.kind == kind2))
}

def is3(kind1 : Token_.TokenKind, kind2 : Token_.TokenKind, kind3 : Token_.TokenKind) : Firefly_Core.Bool = {
(((token.kind == kind1) || (token.kind == kind2)) || (token.kind == kind3))
}

def rawIs(value : Firefly_Core.String) : Firefly_Core.Bool = {
token.code.sliceEquals(token.startOffset, value, 0, value.getSize())
}

}

implicit class TokenKind_extend1(self : Token_.TokenKind) {

def beforeSeparator() : Firefly_Core.Bool = {
pipe_dot(self)({
case (Token_.LEnd()) =>
Firefly_Core.False()
case (Token_.LString()) =>
Firefly_Core.True()
case (Token_.LChar()) =>
Firefly_Core.True()
case (Token_.LInt()) =>
Firefly_Core.True()
case (Token_.LFloat()) =>
Firefly_Core.True()
case (Token_.LKeyword()) =>
Firefly_Core.True()
case (Token_.LNamespace()) =>
Firefly_Core.False()
case (Token_.LLower()) =>
Firefly_Core.True()
case (Token_.LUpper()) =>
Firefly_Core.True()
case (Token_.LWildcard()) =>
Firefly_Core.True()
case (Token_.LBracketLeft()) =>
Firefly_Core.False()
case (Token_.LBracketRight()) =>
Firefly_Core.True()
case (Token_.LOperator()) =>
Firefly_Core.False()
case (Token_.LComma()) =>
Firefly_Core.False()
case (Token_.LSeparator()) =>
Firefly_Core.False()
case (Token_.LDot()) =>
Firefly_Core.False()
case (Token_.LSemicolon()) =>
Firefly_Core.False()
case (Token_.LPipe()) =>
Firefly_Core.False()
case (Token_.LColon()) =>
Firefly_Core.False()
case (Token_.LDotDotDot()) =>
Firefly_Core.False()
case (Token_.LArrowThick()) =>
Firefly_Core.False()
case (Token_.LAssign()) =>
Firefly_Core.False()
case (Token_.LAssignPlus()) =>
Firefly_Core.False()
case (Token_.LAssignMinus()) =>
Firefly_Core.False()
case (Token_.LAssignLink()) =>
Firefly_Core.False()
})
}

def afterSeparator() : Firefly_Core.Bool = {
pipe_dot(self)({
case (Token_.LEnd()) =>
Firefly_Core.False()
case (Token_.LString()) =>
Firefly_Core.True()
case (Token_.LChar()) =>
Firefly_Core.True()
case (Token_.LInt()) =>
Firefly_Core.True()
case (Token_.LFloat()) =>
Firefly_Core.True()
case (Token_.LKeyword()) =>
Firefly_Core.True()
case (Token_.LNamespace()) =>
Firefly_Core.True()
case (Token_.LLower()) =>
Firefly_Core.True()
case (Token_.LUpper()) =>
Firefly_Core.True()
case (Token_.LWildcard()) =>
Firefly_Core.True()
case (Token_.LBracketLeft()) =>
Firefly_Core.True()
case (Token_.LBracketRight()) =>
Firefly_Core.False()
case (Token_.LOperator()) =>
Firefly_Core.False()
case (Token_.LComma()) =>
Firefly_Core.False()
case (Token_.LSeparator()) =>
Firefly_Core.False()
case (Token_.LDot()) =>
Firefly_Core.False()
case (Token_.LSemicolon()) =>
Firefly_Core.False()
case (Token_.LPipe()) =>
Firefly_Core.False()
case (Token_.LColon()) =>
Firefly_Core.False()
case (Token_.LDotDotDot()) =>
Firefly_Core.True()
case (Token_.LArrowThick()) =>
Firefly_Core.False()
case (Token_.LAssign()) =>
Firefly_Core.False()
case (Token_.LAssignPlus()) =>
Firefly_Core.False()
case (Token_.LAssignMinus()) =>
Firefly_Core.False()
case (Token_.LAssignLink()) =>
Firefly_Core.False()
})
}

def afterKeyword() : Firefly_Core.Bool = {
pipe_dot(self)({
case (Token_.LEnd()) =>
Firefly_Core.False()
case (Token_.LString()) =>
Firefly_Core.True()
case (Token_.LChar()) =>
Firefly_Core.True()
case (Token_.LInt()) =>
Firefly_Core.True()
case (Token_.LFloat()) =>
Firefly_Core.True()
case (Token_.LKeyword()) =>
Firefly_Core.True()
case (Token_.LNamespace()) =>
Firefly_Core.True()
case (Token_.LLower()) =>
Firefly_Core.True()
case (Token_.LUpper()) =>
Firefly_Core.True()
case (Token_.LWildcard()) =>
Firefly_Core.True()
case (Token_.LBracketLeft()) =>
Firefly_Core.False()
case (Token_.LBracketRight()) =>
Firefly_Core.False()
case (Token_.LOperator()) =>
Firefly_Core.False()
case (Token_.LComma()) =>
Firefly_Core.False()
case (Token_.LSeparator()) =>
Firefly_Core.False()
case (Token_.LDot()) =>
Firefly_Core.False()
case (Token_.LSemicolon()) =>
Firefly_Core.False()
case (Token_.LPipe()) =>
Firefly_Core.False()
case (Token_.LColon()) =>
Firefly_Core.False()
case (Token_.LDotDotDot()) =>
Firefly_Core.False()
case (Token_.LArrowThick()) =>
Firefly_Core.False()
case (Token_.LAssign()) =>
Firefly_Core.False()
case (Token_.LAssignPlus()) =>
Firefly_Core.False()
case (Token_.LAssignMinus()) =>
Firefly_Core.False()
case (Token_.LAssignLink()) =>
Firefly_Core.False()
})
}

}


}
