package com.github.ahnfelt.firefly

import java.io.{File, FileWriter}

import com.github.ahnfelt.firefly.language.{Emitter, Parser, Tokenizer}

import scala.io.Source


object Main {

    def main(arguments : Array[String]) : Unit = {

        val Array(corePath, inputPath, outputPath) = arguments

        val outputFile = new File(outputPath)
        if(outputFile.exists()) deleteDirectory(outputFile)
        outputFile.mkdir()

        var resultFiles = List[File]()
        val scalaFile = new File(outputPath, "src/main/scala/firefly")
        scalaFile.mkdirs()
        for(file <- new File(inputPath).listFiles()) {
            if(file.getName.endsWith(".ff")) {
                val _ = compileFile(file.getAbsolutePath, new File(scalaFile, file.getName.dropRight(3) + ".scala"))
                resultFiles ::= file
            }
        }
        resultFiles = resultFiles.reverse

        writeExtraFiles(corePath, outputFile, scalaFile)

    }

    private def writeExtraFiles(corePath : String, outputFile : File, scalaFile : File) : Unit = {
        val coreSubPath = "scala/com/github/ahnfelt/firefly/library/Firefly_Core.scala"
        val source = Source.fromFile(new File(corePath, coreSubPath), "UTF-8")
        val core = source.mkString.replaceFirst(
            "package com.github.ahnfelt.firefly.library",
            "package firefly"
        )
        source.close()

        val writer = new FileWriter(new File(scalaFile, "Firefly_Core.scala"))
        writer.write(core)
        writer.close()

        val sbtWriter = new FileWriter(new File(outputFile, "build.sbt"))
        sbtWriter.write("""scalaVersion := "2.13.3"""")
        sbtWriter.close()
    }

    def compileFile(input : String, output : File) : String = {

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

        out

    }

    def deleteDirectory(outputFile : File) : Unit = {
        for(file <- outputFile.listFiles()) {
            if(file.isDirectory) deleteDirectory(file)
            else file.delete()
        }
        outputFile.delete()
    }

}
