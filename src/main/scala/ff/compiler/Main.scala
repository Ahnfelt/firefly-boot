package ff.compiler
import ff.compiler.Compiler_._

import ff.compiler.Emitter_._

import ff.compiler.Parser_._

import ff.compiler.Resolver_._

import ff.compiler.Syntax_._

import ff.compiler.Tokenizer_._

import ff.compiler.Unification_._

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
object Main_ {
def main(arguments : scala.Array[String]) : Unit = main_(ff.core.System_.SystemArguments(arguments.toList.getArray_()))


def main_(system_ : ff.core.System_.System) : ff.core.Unit_.Unit = {
val corePath_ = system_.arguments_().expect_(0);
val inputPath_ = system_.arguments_().expect_(1);
val tempPath_ = system_.arguments_().expect_(2);
val outputPath_ = system_.arguments_().expect_(3);
val fs_ = system_.files_();
ff.core.Core_.if_(fs_.exists_(tempPath_), {() =>
ff.compiler.Main_.deleteDirectory_(fs_, tempPath_)
});
fs_.createDirectory_(tempPath_);
val scalaPathFile_ = (tempPath_ + "/src/main/scala");
fs_.createDirectories_(scalaPathFile_);
val packagePaths_ = List(ff.core.Pair_.Pair("ff:compiler", "compiler"), ff.core.Pair_.Pair("ff:core", "core")).getMap_();
val success_ = ff.core.Core_.do_({() =>
ff.compiler.Compiler_.make_(fs_, scalaPathFile_, packagePaths_).emit_("ff:compiler", "Main");
ff.core.Bool_.True()
});
ff.core.Core_.if_(success_, {() =>
ff.compiler.Main_.writeExtraFiles_(fs_, inputPath_, corePath_, tempPath_, scalaPathFile_);
ff.core.Core_.if_(fs_.exists_(outputPath_), {() =>
ff.compiler.Main_.deleteDirectory_(fs_, outputPath_)
});
fs_.rename_(scalaPathFile_, outputPath_)
})
}

def writeExtraFiles_(fs_ : ff.core.FileSystem_.FileSystem, package_ : ff.core.String_.String, corePath_ : ff.core.String_.String, outputFile_ : ff.core.String_.String, scalaFile_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
fs_.writeText_((outputFile_ + "/build.sbt"), "scalaVersion := \"2.13.3\"")
}

def deleteDirectory_(fs_ : ff.core.FileSystem_.FileSystem, outputFile_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
fs_.list_(outputFile_).each_({(file_) =>
ff.core.Core_.if_(fs_.isDirectory_(file_), {() =>
ff.compiler.Main_.deleteDirectory_(fs_, file_)
}).else_({() =>
fs_.delete_(file_)
})
});
fs_.delete_(outputFile_)
}



}
