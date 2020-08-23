package com.github.ahnfelt.firefly.language

import com.github.ahnfelt.firefly.language.Syntax.Location

import scala.collection.mutable
import scala.collection.mutable.ArrayBuffer

case class Token(
    file : String,
    code : String,
    kind : TokenKind,
    startLine : Int,
    startLineOffset : Int,
    startOffset : Int,
    stopLine : Int,
    stopLineOffset : Int,
    stopOffset : Int
) {
    def at : Location = Location(file, startLine, (startOffset - startLineOffset) + 1)
    def raw : String = {
        code.slice(startOffset, stopOffset)
    }
    def is(kind1 : TokenKind) = {
        kind == kind1
    }
    def is(kind1 : TokenKind, kind2 : TokenKind) = {
        kind == kind1 || kind == kind2
    }
    def is(kind1 : TokenKind, kind2 : TokenKind, kind3 : TokenKind) = {
        kind == kind1 || kind == kind2 || kind == kind3
    }
    def rawIs(value : String) = {
        code.regionMatches(startOffset, value, 0, value.length)
    }
}

sealed abstract class TokenKind(val beforeSeparator : Boolean, val afterSeparator : Boolean, val afterKeyword : Boolean)
case object LEnd extends TokenKind(false, false, false)
case object LString extends TokenKind(true, true, true)
case object LInt extends TokenKind(true, true, true)
case object LFloat extends TokenKind(true, true, true)
case object LKeyword extends TokenKind(true, true, true)
case object LNamespace extends TokenKind(false, true, true)
case object LLower extends TokenKind(true, true, true)
case object LUpper extends TokenKind(true, true, true)
case object LWildcard extends TokenKind(true, true, true)
case object LBracketLeft extends TokenKind(false, true, false)
case object LBracketRight extends TokenKind(true, false, false)
case object LOperator extends TokenKind(false, false, false)
case object LComma extends TokenKind(false, false, false)
case object LSeparator extends TokenKind(false, false, false)
case object LDot extends TokenKind(false, false, false)
case object LSemicolon extends TokenKind(false, false, false)
case object LPipe extends TokenKind(false, false, false)
case object LColon extends TokenKind(false, false, false)
case object LDotDotDot extends TokenKind(false, true, false)
case object LArrowThick extends TokenKind(false, false, false)
case object LAssign extends TokenKind(false, false, false)
case object LAssignPlus extends TokenKind(false, false, false)
case object LAssignMinus extends TokenKind(false, false, false)

object Tokenizer {

    def tokenize(file : String, code : String) = {
        val tokens = ArrayBuffer[Token]()
        var line = 1
        var lineOffset = 0

        var startLine = line
        var startLineOffset = lineOffset

        val operatorCharactersString = "!@#$%&/=?+|^~*<>.:-,;"
        val operatorCharacters = mutable.HashSet[Char]()
        for(j <- 0 until operatorCharactersString.length) operatorCharacters.add(operatorCharactersString(j))

        def emitToken(kind : TokenKind, startOffset : Int, stopOffset : Int) : Unit = {
            if(tokens.nonEmpty) {
                val last = tokens.last
                if(last.stopLine == startLine && last.kind == LLower && kind.afterKeyword) {
                    tokens(tokens.size - 1) = tokens(tokens.size - 1).copy(kind = LKeyword)
                }
                if(last.stopLine != startLine && last.kind.beforeSeparator && kind.afterSeparator) {
                    tokens.append(Token(
                        file, code, LSeparator, startLine, startLineOffset, startOffset, line, lineOffset, stopOffset
                    ))
                }
            }
            tokens.append(Token(
                file, code, kind, startLine, startLineOffset, startOffset, line, lineOffset, stopOffset
            ))
        }

        var i = 0
        while(i < code.length) {

            while(i < code.length && (code(i) == ' ' || code(i) == '\t' || code(i) == '\r')) i += 1

            val start = i
            startLine = line
            startLineOffset = lineOffset

            if(code(i) == '\n') {

                i += 1
                line += 1
                lineOffset = i

            } else if(code(i) == '/' && code(i + 1) == '/') {

                i += 2
                while(i < code.length && code(i) != '\n') i += 1

            } else if(code(i) == '/' && code(i + 1) == '*') {

                i += 2
                while(i < code.length && (code(i) != '*' || code(i + 1) != '/')) {
                    if(i >= code.length) {
                        throw new RuntimeException(
                            "Expected end of comment started on line " + startLine + ", got end of file."
                        )
                    }
                    if(code(i) == '\n') {
                        line += 1
                        lineOffset = i + 1
                    }
                    i += 1
                }
                i += 2

            } else if(code(i) == '"') {

                i += 1
                while(i < code.length && code(i) != '"') {
                    if(code(i) == '\n') {
                        throw new RuntimeException(
                            "Unexpected end of line in string started on line " + startLine + "."
                        )
                    }
                    if(i >= code.length) {
                        throw new RuntimeException(
                            "Expected end of string started on line " + startLine + ", got end of file."
                        )
                    }
                    if(code(i) == '\\' && code(i + 1) != '\n') i += 1
                    i += 1
                }
                i += 1
                emitToken(LString, start, i)

            } else if((code(i) >= 'a' && code(i) <= 'z') || (code(i) >= 'A' && code(i) <= 'Z')) {

                val kind = if(code(i) >= 'a') LLower else LUpper
                i += 1
                while(i < code.length && (
                    (code(i) >= 'a' && code(i) <= 'z') ||
                    (code(i) >= 'A' && code(i) <= 'Z') ||
                    (code(i) >= '0' && code(i) <= '9')
                )) i += 1
                if(kind == LUpper && code(i) == '_') {
                    i += 1
                    emitToken(LNamespace, start, i)
                } else {
                    emitToken(kind, start, i)
                }

            } else if(code(i) >= '0' && code(i) <= '9') {

                var dot = false
                var exponent = false
                while(i < code.length && (code(i) >= '0' && code(i) <= '9')) {
                    i += 1
                    if((code(i) == 'e' || code(i) == 'E') && !exponent) {
                        i += 1
                        dot = true
                        exponent = true
                        if(code(i) == '+' || code(i) == '-') i += 1
                    }
                    if(code(i) == '.' && !dot && !exponent) {
                        i += 1
                        dot = true
                    }
                }
                emitToken(if(dot || exponent) LFloat else LInt, start, i)

            } else if(code(i) == '_') {

                i += 1
                emitToken(LWildcard, start, i)

            } else if(operatorCharacters(code(i))) {

                i += 1
                while(i < code.length && operatorCharacters(code(i))) i += 1
                val o =
                    if(i - start == 1 && code(i - 1) == '.') LDot
                    else if(i - start == 1 && code(i - 1) == ',') LComma
                    else if(i - start == 1 && code(i - 1) == ';') LSemicolon
                    else if(i - start == 1 && code(i - 1) == '|') LPipe
                    else if(i - start == 1 && code(i - 1) == ':') LColon
                    else if(i - start == 3 && code(i - 3) == '.' && code(i - 2) == '.' && code(i - 1) == '.') LDotDotDot
                    else if(i - start == 2 && code(i - 2) == '=' && code(i - 1) == '>') LArrowThick
                    else if(i - start == 1 && code(i - 1) == '=') LAssign
                    else if(i - start == 2 && code(i - 2) == '+' && code(i - 1) == '=') LAssignPlus
                    else if(i - start == 2 && code(i - 2) == '-' && code(i - 1) == '=') LAssignMinus
                    else LOperator
                emitToken(o, start, i)

            } else if(
                code(i) == '(' || code(i) == '[' || code(i) == '{'
            ) {
                i += 1
                emitToken(LBracketLeft, start, i)

            } else if(
                code(i) == ')' || code(i) == ']' || code(i) == '}'
            ) {

                i += 1
                emitToken(LBracketRight, start, i)

            } else if(i < code.length) {

                throw new RuntimeException("Unexpected character: " + code(i))

            }

        }

        for(i <- 1 to 5) emitToken(LEnd, i, i)

        tokens

    }

}
