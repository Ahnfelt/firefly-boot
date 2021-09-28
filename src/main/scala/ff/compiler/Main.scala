package ff.compiler
import ff.compiler.Compiler_._

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

import ff.core.Nothing_._

import ff.core.Option_._

import ff.core.Pair_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object Main_ {
def main(arguments : scala.Array[String]) : Unit = main_(ff.core.System_.SystemArguments(List_toArray(arguments.toList)))


def main_(system_ : ff.core.System_.System) : ff.core.Unit_.Unit = {
val corePath_ : ff.core.String_.String = ff.core.List_.List_expect[ff.core.String_.String](self_ = ff.core.System_.System_arguments(self_ = system_), index_ = 0);
val inputPath_ : ff.core.String_.String = ff.core.List_.List_expect[ff.core.String_.String](self_ = ff.core.System_.System_arguments(self_ = system_), index_ = 1);
val tempPath_ : ff.core.String_.String = ff.core.List_.List_expect[ff.core.String_.String](self_ = ff.core.System_.System_arguments(self_ = system_), index_ = 2);
val scalaOutputPath_ : ff.core.String_.String = ff.core.List_.List_expect[ff.core.String_.String](self_ = ff.core.System_.System_arguments(self_ = system_), index_ = 3);
val jsOutputPath_ : ff.core.String_.String = ff.core.List_.List_expect[ff.core.String_.String](self_ = ff.core.System_.System_arguments(self_ = system_), index_ = 4);
val fs_ : ff.core.FileSystem_.FileSystem = ff.core.System_.System_files(self_ = system_);
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.core.FileSystem_.FileSystem_exists(self_ = fs_, path_ = tempPath_), body_ = {() =>
ff.compiler.Main_.deleteDirectory_(fs_ = fs_, outputFile_ = tempPath_)
});
ff.core.FileSystem_.FileSystem_createDirectory(self_ = fs_, path_ = tempPath_);
val scalaPathFile_ : ff.core.String_.String = (tempPath_ + "/src/main/scala");
ff.core.FileSystem_.FileSystem_createDirectories(self_ = fs_, path_ = scalaPathFile_);
val jsPathFile_ : ff.core.String_.String = (tempPath_ + "/src/main/js");
ff.core.FileSystem_.FileSystem_createDirectories(self_ = fs_, path_ = jsPathFile_);
val packagePaths_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = List(ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = "ff:compiler", second_ = "compiler"), ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = "ff:core", second_ = "core")));
val success_ : ff.core.Bool_.Bool = ff.core.Core_.do_[ff.core.Bool_.Bool](body_ = {() =>
ff.compiler.Compiler_.Compiler_emit(self_ = ff.compiler.Compiler_.make_(files_ = fs_, scalaOutputPath_ = scalaPathFile_, jsOutputPath_ = jsPathFile_, packagePaths_ = packagePaths_), packageName_ = "ff:compiler", moduleName_ = "Main");
ff.core.Bool_.True()
});
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = success_, body_ = {() =>
ff.compiler.Main_.writeExtraFiles_(fs_ = fs_, package_ = inputPath_, corePath_ = corePath_, outputFile_ = tempPath_, scalaFile_ = scalaPathFile_);
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.core.FileSystem_.FileSystem_exists(self_ = fs_, path_ = scalaOutputPath_), body_ = {() =>
ff.compiler.Main_.deleteDirectory_(fs_ = fs_, outputFile_ = scalaOutputPath_)
});
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.core.FileSystem_.FileSystem_exists(self_ = fs_, path_ = jsOutputPath_), body_ = {() =>
ff.compiler.Main_.deleteDirectory_(fs_ = fs_, outputFile_ = jsOutputPath_)
});
ff.core.FileSystem_.FileSystem_rename(self_ = fs_, fromPath_ = scalaPathFile_, toPath_ = scalaOutputPath_);
ff.core.FileSystem_.FileSystem_rename(self_ = fs_, fromPath_ = jsPathFile_, toPath_ = jsOutputPath_)
});
ff.core.Unit_.Unit()
}

def writeExtraFiles_(fs_ : ff.core.FileSystem_.FileSystem, package_ : ff.core.String_.String, corePath_ : ff.core.String_.String, outputFile_ : ff.core.String_.String, scalaFile_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
ff.core.FileSystem_.FileSystem_writeText(self_ = fs_, file_ = (outputFile_ + "/build.sbt"), text_ = "scalaVersion := \"2.13.3\"");
ff.core.Unit_.Unit()
}

def deleteDirectory_(fs_ : ff.core.FileSystem_.FileSystem, outputFile_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
ff.core.List_.List_each[ff.core.String_.String](self_ = ff.core.FileSystem_.FileSystem_list(self_ = fs_, path_ = outputFile_), body_ = {(file_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.core.FileSystem_.FileSystem_isDirectory(self_ = fs_, path_ = file_), body_ = {() =>
ff.compiler.Main_.deleteDirectory_(fs_ = fs_, outputFile_ = file_);
ff.core.Unit_.Unit()
}), body_ = {() =>
ff.core.FileSystem_.FileSystem_delete(self_ = fs_, path_ = file_);
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
});
ff.core.FileSystem_.FileSystem_delete(self_ = fs_, path_ = outputFile_);
ff.core.Unit_.Unit()
}



}
