package ff.compiler
import ff.compiler.Syntax_._

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
object Token_ {

case class Token(file_ : ff.core.String_.String, code_ : ff.core.String_.String, kind_ : ff.compiler.Token_.TokenKind, startLine_ : ff.core.Int_.Int, startLineOffset_ : ff.core.Int_.Int, startOffset_ : ff.core.Int_.Int, stopLine_ : ff.core.Int_.Int, stopLineOffset_ : ff.core.Int_.Int, stopOffset_ : ff.core.Int_.Int)

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


implicit class Token_extend0(token_ : ff.compiler.Token_.Token) {

def at_() : ff.compiler.Syntax_.Location = {
ff.compiler.Syntax_.Location(token_.file_, token_.startLine_, ((token_.startOffset_ - token_.startLineOffset_) + 1))
}

def raw_() : ff.core.String_.String = {
token_.code_.slice_(token_.startOffset_, token_.stopOffset_)
}

def is_(kind1_ : ff.compiler.Token_.TokenKind) : ff.core.Bool_.Bool = {
(token_.kind_ == kind1_)
}

def is2_(kind1_ : ff.compiler.Token_.TokenKind, kind2_ : ff.compiler.Token_.TokenKind) : ff.core.Bool_.Bool = {
((token_.kind_ == kind1_) || (token_.kind_ == kind2_))
}

def is3_(kind1_ : ff.compiler.Token_.TokenKind, kind2_ : ff.compiler.Token_.TokenKind, kind3_ : ff.compiler.Token_.TokenKind) : ff.core.Bool_.Bool = {
(((token_.kind_ == kind1_) || (token_.kind_ == kind2_)) || (token_.kind_ == kind3_))
}

def rawIs_(value_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
(((token_.stopOffset_ - token_.startOffset_) == value_.getSize_()) && token_.code_.sliceEquals_(token_.startOffset_, value_, 0, value_.getSize_()))
}

}

implicit class TokenKind_extend1(self_ : ff.compiler.Token_.TokenKind) {

def beforeSeparator_() : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (ff.compiler.Token_.LEnd()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LString()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LChar()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LInt()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LFloat()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LKeyword()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LNamespace()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LLower()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LUpper()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LWildcard()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LBracketLeft()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LBracketRight()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LOperator()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LComma()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LSeparator()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LDot()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LSemicolon()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LPipe()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LColon()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LDotDotDot()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LArrowThick()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssign()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignPlus()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignMinus()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignLink()) =>
ff.core.Bool_.False()
})
}

def afterSeparator_() : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (ff.compiler.Token_.LEnd()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LString()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LChar()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LInt()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LFloat()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LKeyword()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LNamespace()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LLower()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LUpper()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LWildcard()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LBracketLeft()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LBracketRight()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LOperator()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LComma()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LSeparator()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LDot()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LSemicolon()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LPipe()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LColon()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LDotDotDot()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LArrowThick()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssign()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignPlus()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignMinus()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignLink()) =>
ff.core.Bool_.False()
})
}

def afterKeyword_() : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (ff.compiler.Token_.LEnd()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LString()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LChar()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LInt()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LFloat()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LKeyword()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LNamespace()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LLower()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LUpper()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LWildcard()) =>
ff.core.Bool_.True()
case (ff.compiler.Token_.LBracketLeft()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LBracketRight()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LOperator()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LComma()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LSeparator()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LDot()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LSemicolon()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LPipe()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LColon()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LDotDotDot()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LArrowThick()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssign()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignPlus()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignMinus()) =>
ff.core.Bool_.False()
case (ff.compiler.Token_.LAssignLink()) =>
ff.core.Bool_.False()
})
}

}


}
