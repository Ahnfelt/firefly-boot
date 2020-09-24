package firefly
import firefly.Firefly_Core._

import firefly.Tokenizer_._

import firefly.Parser_._

import firefly.Emitter_._

import firefly.Syntax_._

import firefly.Resolver_._

import firefly.Compiler_._
object Main_ {
def main(arguments : Array[String]) : Unit = main(new System(arguments))


def main(system : Firefly_Core.System) : Firefly_Core.Unit = {
val corePath = system.arguments(0);
val inputPath = system.arguments(1);
val tempPath = system.arguments(2);
val outputPath = system.arguments(3);
val fs = system.files;
Firefly_Core.if_(fs.exists(tempPath), {() =>
deleteDirectory(fs, tempPath)
});
fs.createDirectory(tempPath);
val scalaPathFile = (tempPath + "/src/main/scala/firefly");
fs.createDirectories(scalaPathFile);
Compiler_.make(fs, inputPath, scalaPathFile).emit("Main");
writeExtraFiles(fs, corePath, tempPath, scalaPathFile);
Firefly_Core.if_(fs.exists(outputPath), {() =>
deleteDirectory(fs, outputPath)
});
fs.rename(scalaPathFile, outputPath)
}

def writeExtraFiles(fs : Firefly_Core.FileSystem, corePath : Firefly_Core.String, outputFile : Firefly_Core.String, scalaFile : Firefly_Core.String) : Firefly_Core.Unit = {
val coreSubPath = "scala/com/github/ahnfelt/firefly/library/Firefly_Core.scala";
val core = fs.readText(((corePath + "/") + coreSubPath)).replaceFirst("package com.github.ahnfelt.firefly.library", "package firefly");
fs.writeText((scalaFile + "/Firefly_Core.scala"), core);
fs.writeText((outputFile + "/build.sbt"), "scalaVersion := \"2.13.3\"")
}

def deleteDirectory(fs : Firefly_Core.FileSystem, outputFile : Firefly_Core.String) : Firefly_Core.Unit = {
fs.list(outputFile).each({(file) =>
Firefly_Core.if_(fs.isDirectory(file), {() =>
deleteDirectory(fs, file)
}).else_({() =>
fs.delete(file)
})
});
fs.delete(outputFile)
}



}
