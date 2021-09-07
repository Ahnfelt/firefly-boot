package compiler
import compiler.Firefly_Core._

import compiler.Tokenizer_._

import compiler.Parser_._

import compiler.Emitter_._

import compiler.Syntax_._

import compiler.Resolver_._

import compiler.Compiler_._

import compiler.Unification_._
object Main_ {
def main(arguments : Array[String]) : Unit = main(new System(arguments))


def main(system : Firefly_Core.System) : Firefly_Core.Unit = {
val corePath = system.arguments().expect(0);
val inputPath = system.arguments().expect(1);
val tempPath = system.arguments().expect(2);
val outputPath = system.arguments().expect(3);
val fs = system.files();
Firefly_Core.if_(fs.exists(tempPath), {() =>
Main_.deleteDirectory(fs, tempPath)
});
fs.createDirectory(tempPath);
val scalaPathFile = (tempPath + "/src/main/scala");
fs.createDirectories(scalaPathFile);
val packagePaths = List(Firefly_Core.Pair("ff:compiler", "compiler"), Firefly_Core.Pair("ff:core", "core")).getMap();
val success = Firefly_Core.do_({() =>
Compiler_.make(fs, scalaPathFile, packagePaths).emit("ff:compiler", "Main");
Firefly_Core.True()
});
Firefly_Core.if_(success, {() =>
Main_.writeExtraFiles(fs, inputPath, corePath, tempPath, scalaPathFile);
Firefly_Core.if_(fs.exists(outputPath), {() =>
Main_.deleteDirectory(fs, outputPath)
});
fs.rename(scalaPathFile, outputPath)
})
}

def writeExtraFiles(fs : Firefly_Core.FileSystem, package_ : Firefly_Core.String, corePath : Firefly_Core.String, outputFile : Firefly_Core.String, scalaFile : Firefly_Core.String) : Firefly_Core.Unit = {
val coreSubPath = "scala/com/github/ahnfelt/firefly/library/Firefly_Core.scala";
val core = fs.readText(((corePath + "/") + coreSubPath)).replaceFirst("package com.github.ahnfelt.firefly.library", ("package " + package_));
fs.writeText((scalaFile + "/Firefly_Core.scala"), core);
fs.writeText((outputFile + "/build.sbt"), "scalaVersion := \"2.13.3\"")
}

def deleteDirectory(fs : Firefly_Core.FileSystem, outputFile : Firefly_Core.String) : Firefly_Core.Unit = {
fs.list(outputFile).each({(file) =>
Firefly_Core.if_(fs.isDirectory(file), {() =>
Main_.deleteDirectory(fs, file)
}).else_({() =>
fs.delete(file)
})
});
fs.delete(outputFile)
}



}
