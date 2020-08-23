package com.github.ahnfelt.firefly

import com.github.ahnfelt.firefly.language.{Emitter, Parser, Tokenizer}

import scala.io.Source

object Main {

    def main(arguments : Array[String]) : Unit = {

        val file = arguments(0)
        val source = Source.fromFile(file, "UTF-8")
        val code = source.mkString
        source.close()

        val tokens = Tokenizer.tokenize(file, code)
        for(token <- tokens) println(token.kind)

        println()

        val module = new Parser(file, tokens).parseModule()

        println(module)
        println()

        val out = new Emitter().emitModule(module)

        println(out)

    }

}
