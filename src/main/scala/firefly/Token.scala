package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Token_ {

case class Token(file : String, code : String, kind : TokenKind, startLine : Int, startLineOffset : Int, startOffset : Int, stopLine : Int, stopLineOffset : Int, stopOffset : Int)

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


implicit class Token_extend0(token : Token) {

def at() : Syntax_.Location = {
Syntax_.Location(token.file, token.startLine, ((token.startOffset - token.startLineOffset) + 1))
}

def raw() : String = {
token.code.slice(token.startOffset, token.stopOffset)
}

def is(kind1 : TokenKind) = {
(token.kind == kind1)
}

def is2(kind1 : TokenKind, kind2 : TokenKind) = {
((token.kind == kind1) || (token.kind == kind2))
}

def is3(kind1 : TokenKind, kind2 : TokenKind, kind3 : TokenKind) = {
(((token.kind == kind1) || (token.kind == kind2)) || (token.kind == kind3))
}

def rawIs(value : String) = {
token.code.regionMatches(token.startOffset, value, 0, value.length)
}

}

implicit class TokenKind_extend1(self : TokenKind) {

def beforeSeparator() : Firefly_Core.Bool = {
pipe_dot(self)({
case (LEnd()) =>
Firefly_Core.False()
case (LString()) =>
Firefly_Core.True()
case (LChar()) =>
Firefly_Core.True()
case (LInt()) =>
Firefly_Core.True()
case (LFloat()) =>
Firefly_Core.True()
case (LKeyword()) =>
Firefly_Core.True()
case (LNamespace()) =>
Firefly_Core.False()
case (LLower()) =>
Firefly_Core.True()
case (LUpper()) =>
Firefly_Core.True()
case (LWildcard()) =>
Firefly_Core.True()
case (LBracketLeft()) =>
Firefly_Core.False()
case (LBracketRight()) =>
Firefly_Core.True()
case (LOperator()) =>
Firefly_Core.False()
case (LComma()) =>
Firefly_Core.False()
case (LSeparator()) =>
Firefly_Core.False()
case (LDot()) =>
Firefly_Core.False()
case (LSemicolon()) =>
Firefly_Core.False()
case (LPipe()) =>
Firefly_Core.False()
case (LColon()) =>
Firefly_Core.False()
case (LDotDotDot()) =>
Firefly_Core.False()
case (LArrowThick()) =>
Firefly_Core.False()
case (LAssign()) =>
Firefly_Core.False()
case (LAssignPlus()) =>
Firefly_Core.False()
case (LAssignMinus()) =>
Firefly_Core.False()
case (LAssignLink()) =>
Firefly_Core.False()
})
}

def afterSeparator() : Firefly_Core.Bool = {
pipe_dot(self)({
case (LEnd()) =>
Firefly_Core.False()
case (LString()) =>
Firefly_Core.True()
case (LChar()) =>
Firefly_Core.True()
case (LInt()) =>
Firefly_Core.True()
case (LFloat()) =>
Firefly_Core.True()
case (LKeyword()) =>
Firefly_Core.True()
case (LNamespace()) =>
Firefly_Core.True()
case (LLower()) =>
Firefly_Core.True()
case (LUpper()) =>
Firefly_Core.True()
case (LWildcard()) =>
Firefly_Core.True()
case (LBracketLeft()) =>
Firefly_Core.True()
case (LBracketRight()) =>
Firefly_Core.False()
case (LOperator()) =>
Firefly_Core.False()
case (LComma()) =>
Firefly_Core.False()
case (LSeparator()) =>
Firefly_Core.False()
case (LDot()) =>
Firefly_Core.False()
case (LSemicolon()) =>
Firefly_Core.False()
case (LPipe()) =>
Firefly_Core.False()
case (LColon()) =>
Firefly_Core.False()
case (LDotDotDot()) =>
Firefly_Core.True()
case (LArrowThick()) =>
Firefly_Core.False()
case (LAssign()) =>
Firefly_Core.False()
case (LAssignPlus()) =>
Firefly_Core.False()
case (LAssignMinus()) =>
Firefly_Core.False()
case (LAssignLink()) =>
Firefly_Core.False()
})
}

def afterKeyword() : Firefly_Core.Bool = {
pipe_dot(self)({
case (LEnd()) =>
Firefly_Core.False()
case (LString()) =>
Firefly_Core.True()
case (LChar()) =>
Firefly_Core.True()
case (LInt()) =>
Firefly_Core.True()
case (LFloat()) =>
Firefly_Core.True()
case (LKeyword()) =>
Firefly_Core.True()
case (LNamespace()) =>
Firefly_Core.True()
case (LLower()) =>
Firefly_Core.True()
case (LUpper()) =>
Firefly_Core.True()
case (LWildcard()) =>
Firefly_Core.True()
case (LBracketLeft()) =>
Firefly_Core.False()
case (LBracketRight()) =>
Firefly_Core.False()
case (LOperator()) =>
Firefly_Core.False()
case (LComma()) =>
Firefly_Core.False()
case (LSeparator()) =>
Firefly_Core.False()
case (LDot()) =>
Firefly_Core.False()
case (LSemicolon()) =>
Firefly_Core.False()
case (LPipe()) =>
Firefly_Core.False()
case (LColon()) =>
Firefly_Core.False()
case (LDotDotDot()) =>
Firefly_Core.False()
case (LArrowThick()) =>
Firefly_Core.False()
case (LAssign()) =>
Firefly_Core.False()
case (LAssignPlus()) =>
Firefly_Core.False()
case (LAssignMinus()) =>
Firefly_Core.False()
case (LAssignLink()) =>
Firefly_Core.False()
})
}

}


}
