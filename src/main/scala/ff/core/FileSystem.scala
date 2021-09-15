package ff.core
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
object FileSystem_ {

sealed abstract class FileSystem extends Product with Serializable


implicit class FileSystem_extend0(self_ : ff.core.FileSystem_.FileSystem) {

def readText_(file_ : ff.core.String_.String) : ff.core.String_.String = {
val source = scala.io.Source.fromFile(new java.io.File(file_), "UTF-8"); val result = source.mkString; source.close(); result
}

def writeText_(file_ : ff.core.String_.String, text_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
val writer = new java.io.FileWriter(new java.io.File(file_)); writer.write(text_); writer.close()
}

def list_(path_ : ff.core.String_.String) : ff.core.List_.List[ff.core.String_.String] = {
new java.io.File(path_).listFiles().map(_.toString.replace('\\', '/')).toList
}

def exists_(path_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
new java.io.File(path_).exists()
}

def isDirectory_(path_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
new java.io.File(path_).isDirectory
}

def createDirectory_(path_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
new java.io.File(path_).mkdir()
}

def createDirectories_(path_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
new java.io.File(path_).mkdirs()
}

def delete_(path_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
if(!new java.io.File(path_).delete()) { throw new java.io.IOException("Could not delete " + path_) }
}

def rename_(fromPath_ : ff.core.String_.String, toPath_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
if(!new java.io.File(fromPath_).renameTo(new java.io.File(toPath_))) { throw new java.io.IOException("Could not rename " + fromPath_ + " to " + toPath_) }
}

def getAbsolutePath_(path_ : ff.core.String_.String) : ff.core.String_.String = {
new java.io.File(path_).getAbsolutePath.replace('\\', '/')
}

def directoryName_(path_ : ff.core.String_.String) : ff.core.String_.String = {
path_.getReverse_().dropWhile_({(_w1) =>
(_w1 != '/')
}).dropFirst_(1).getReverse_()
}

def baseName_(path_ : ff.core.String_.String) : ff.core.String_.String = {
path_.getReverse_().takeWhile_({(_w1) =>
(_w1 != '/')
}).getReverse_()
}

def prefixName_(path_ : ff.core.String_.String) : ff.core.String_.String = {
path_.getReverse_().takeWhile_({(_w1) =>
(_w1 != '/')
}).getReverse_().takeWhile_({(_w1) =>
(_w1 != '.')
})
}

def suffixName_(path_ : ff.core.String_.String) : ff.core.String_.String = {
path_.getReverse_().takeWhile_({(_w1) =>
(_w1 != '/')
}).takeWhile_({(_w1) =>
(_w1 != '.')
}).getReverse_()
}

}


}
