package com.github.ahnfelt.firefly

import java.io.{File, FileWriter}

import com.github.ahnfelt.firefly.language.{Emitter, Parser, Tokenizer}

import scala.io.Source

object Main {

    def main(arguments : Array[String]) : Unit = {

        val Array(inputPath, outputPath) = arguments

        val outputFile = new File(outputPath)
        if(outputFile.exists()) deleteDirectory(outputFile)
        outputFile.mkdir()

        for(file <- new File(inputPath).listFiles()) {
            if(file.getName.endsWith(".ff")) {
                compileFile(file.getAbsolutePath, new File(outputFile, file.getName.dropRight(3) + ".scala"))
            }
        }

        println("Done.")

    }

    def compileFile(input : String, output : File) : Unit = {

        val source = Source.fromFile(input, "UTF-8")
        val code = source.mkString
        source.close()

        val tokens = Tokenizer.tokenize(input, code)
        //for(token <- tokens) println(token.kind)

        //println()

        val module = new Parser(input, tokens).parseModule()

        //println(module)
        //println()

        val out = new Emitter().emitModule(module)

        val writer = new FileWriter(output)
        writer.write(out)
        writer.close()

        //println(out)

    }

    def deleteDirectory(outputFile : File) : Unit = {
        for(file <- outputFile.listFiles()) {
            if(file.isDirectory) deleteDirectory(file)
            else file.delete()
        }
        outputFile.delete()
    }

}
