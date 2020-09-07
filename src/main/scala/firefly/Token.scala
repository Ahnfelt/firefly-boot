package firefly

import firefly.Firefly_Core._

import firefly.Emitter._

import firefly.Main._

import firefly.Parser._

import firefly.Syntax._

import firefly.Token._

import firefly.Tokenizer._

import firefly.Wildcards._
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


implicit class Token_at(token : Token) {

def at() : Syntax.Location = Token.at(token)

}

implicit class Token_raw(token : Token) {

def raw() : String = Token.raw(token)

}

implicit class Token_is(token : Token) {

def is(kind1 : TokenKind) = Token.is(token, kind1)

}

implicit class Token_is2(token : Token) {

def is2(kind1 : TokenKind, kind2 : TokenKind) = Token.is2(token, kind1, kind2)

}

implicit class Token_is3(token : Token) {

def is3(kind1 : TokenKind, kind2 : TokenKind, kind3 : TokenKind) = Token.is3(token, kind1, kind2, kind3)

}

implicit class Token_rawIs(token : Token) {

def rawIs(value : String) = Token.rawIs(token, value)

}

implicit class TokenKind_beforeSeparator(kind : TokenKind) {

def beforeSeparator() : Bool = TokenKind.beforeSeparator(kind)

}

implicit class TokenKind_afterSeparator(kind : TokenKind) {

def afterSeparator() : Bool = TokenKind.afterSeparator(kind)

}

implicit class TokenKind_afterKeyword(kind : TokenKind) {

def afterKeyword() : Bool = TokenKind.afterKeyword(kind)

}


object Token {

def at(token : Token) : Syntax.Location = {
Syntax.Location(token.file, token.startLine, ((token.startOffset - token.startLineOffset) + 1))
}

def raw(token : Token) : String = {
token.code.slice(token.startOffset, token.stopOffset)
}

def is(token : Token, kind1 : TokenKind) = {
(token.kind == kind1)
}

def is2(token : Token, kind1 : TokenKind, kind2 : TokenKind) = {
((token.kind == kind1) || (token.kind == kind2))
}

def is3(token : Token, kind1 : TokenKind, kind2 : TokenKind, kind3 : TokenKind) = {
(((token.kind == kind1) || (token.kind == kind2)) || (token.kind == kind3))
}

def rawIs(token : Token, value : String) = {
token.code.regionMatches(token.startOffset, value, 0, value.length)
}

}

object TokenKind {

def beforeSeparator(kind : TokenKind) : Bool = (kind) match {
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
}

def afterSeparator(kind : TokenKind) : Bool = (kind) match {
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
}

def afterKeyword(kind : TokenKind) : Bool = (kind) match {
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
}

}
}
