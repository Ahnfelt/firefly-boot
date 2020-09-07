package firefly
import firefly.Firefly_Core._

import firefly.Emitter._

import firefly.Main._

import firefly.Parser._

import firefly.Syntax._

import firefly.Token._

import firefly.Tokenizer._

import firefly.Wildcards._
object Main {
def main(arguments : Array[String]) : Unit = main(new System(arguments))


def main(system : System) : Unit = {
val corePath = system.arguments(0);
val inputPath = system.arguments(1);
val tempPath = system.arguments(2);
val outputPath = system.arguments(3);
val fs = system.files;
if_(fs.exists(tempPath), {() =>
deleteDirectory(fs, tempPath)
});
fs.createDirectory(tempPath);
var resultFiles = List[String]();
val scalaPathFile = (tempPath + "/src/main/scala/firefly");
fs.createDirectories(scalaPathFile);
val files = fs.list(inputPath).filter({(_w1) =>
_w1.endsWith(".ff")
});
files.each({(file) =>
val scalaFile = (((scalaPathFile + "/") + fs.prefixName(file)) + ".scala");
compileFile(fs, fs.getAbsolutePath(file), files.map({(_w1) =>
fs.prefixName(_w1)
}), scalaFile);
resultFiles ::= file
});
resultFiles = resultFiles.reverse;
writeExtraFiles(fs, corePath, tempPath, scalaPathFile);
if_(fs.exists(outputPath), {() =>
deleteDirectory(fs, outputPath)
});
fs.rename(scalaPathFile, outputPath)
}

def writeExtraFiles(fs : FileSystem, corePath : String, outputFile : String, scalaFile : String) : Unit = {
val coreSubPath = "scala/com/github/ahnfelt/firefly/library/Firefly_Core.scala";
val core = fs.readText(((corePath + "/") + coreSubPath)).replaceFirst("package com.github.ahnfelt.firefly.library", "package firefly");
fs.writeText((scalaFile + "/Firefly_Core.scala"), core);
fs.writeText((outputFile + "/build.sbt"), "scalaVersion := \"2.13.3\"")
}

def compileFile(fs : FileSystem, input : String, modules : List[String], output : String) : String = {
val code = fs.readText(input);
val tokens = Tokenizer.tokenize(input, code);
val module = do_({() =>
Parser.of(input, tokens).parseModule()
});
val out = Emitter.emitModule(module, modules.filter({(_w1) =>
(_w1 != module.file.dropRight(3))
}));
fs.writeText(output, out);
out
}

def deleteDirectory(fs : FileSystem, outputFile : String) : Unit = {
fs.list(outputFile).each({(file) =>
if_(fs.isDirectory(file), {() =>
deleteDirectory(fs, file)
}).else_({() =>
fs.delete(file)
})
});
fs.delete(outputFile)
}




}
