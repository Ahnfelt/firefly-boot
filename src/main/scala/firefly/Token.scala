package firefly
import firefly.Firefly_Core._

import firefly.Syntax._
object Token {

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

def at() : Location = {
Location(token.file, token.startLine, ((token.startOffset - token.startLineOffset) + 1))
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

def beforeSeparator() : Bool = {
pipe_dot(self)({
case (LEnd()) =>
False()
case (LString()) =>
True()
case (LChar()) =>
True()
case (LInt()) =>
True()
case (LFloat()) =>
True()
case (LKeyword()) =>
True()
case (LNamespace()) =>
False()
case (LLower()) =>
True()
case (LUpper()) =>
True()
case (LWildcard()) =>
True()
case (LBracketLeft()) =>
False()
case (LBracketRight()) =>
True()
case (LOperator()) =>
False()
case (LComma()) =>
False()
case (LSeparator()) =>
False()
case (LDot()) =>
False()
case (LSemicolon()) =>
False()
case (LPipe()) =>
False()
case (LColon()) =>
False()
case (LDotDotDot()) =>
False()
case (LArrowThick()) =>
False()
case (LAssign()) =>
False()
case (LAssignPlus()) =>
False()
case (LAssignMinus()) =>
False()
case (LAssignLink()) =>
False()
})
}

def afterSeparator() : Bool = {
pipe_dot(self)({
case (LEnd()) =>
False()
case (LString()) =>
True()
case (LChar()) =>
True()
case (LInt()) =>
True()
case (LFloat()) =>
True()
case (LKeyword()) =>
True()
case (LNamespace()) =>
True()
case (LLower()) =>
True()
case (LUpper()) =>
True()
case (LWildcard()) =>
True()
case (LBracketLeft()) =>
True()
case (LBracketRight()) =>
False()
case (LOperator()) =>
False()
case (LComma()) =>
False()
case (LSeparator()) =>
False()
case (LDot()) =>
False()
case (LSemicolon()) =>
False()
case (LPipe()) =>
False()
case (LColon()) =>
False()
case (LDotDotDot()) =>
True()
case (LArrowThick()) =>
False()
case (LAssign()) =>
False()
case (LAssignPlus()) =>
False()
case (LAssignMinus()) =>
False()
case (LAssignLink()) =>
False()
})
}

def afterKeyword() : Bool = {
pipe_dot(self)({
case (LEnd()) =>
False()
case (LString()) =>
True()
case (LChar()) =>
True()
case (LInt()) =>
True()
case (LFloat()) =>
True()
case (LKeyword()) =>
True()
case (LNamespace()) =>
True()
case (LLower()) =>
True()
case (LUpper()) =>
True()
case (LWildcard()) =>
True()
case (LBracketLeft()) =>
False()
case (LBracketRight()) =>
False()
case (LOperator()) =>
False()
case (LComma()) =>
False()
case (LSeparator()) =>
False()
case (LDot()) =>
False()
case (LSemicolon()) =>
False()
case (LPipe()) =>
False()
case (LColon()) =>
False()
case (LDotDotDot()) =>
False()
case (LArrowThick()) =>
False()
case (LAssign()) =>
False()
case (LAssignPlus()) =>
False()
case (LAssignMinus()) =>
False()
case (LAssignLink()) =>
False()
})
}

}


object Token {



}

}
