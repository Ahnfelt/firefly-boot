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

import ff.core.Nothing_._

import ff.core.Option_._

import ff.core.Pair_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object FileSystem_ {

sealed abstract class FileSystem extends Product with Serializable


def FileSystem_readText(self_ : ff.core.FileSystem_.FileSystem, file_ : ff.core.String_.String) : ff.core.String_.String = {
val source = scala.io.Source.fromFile(new java.io.File(file_), "UTF-8"); val result = source.mkString; source.close(); result
}

def FileSystem_writeText(self_ : ff.core.FileSystem_.FileSystem, file_ : ff.core.String_.String, text_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
val writer = new java.io.FileWriter(new java.io.File(file_)); writer.write(text_); writer.close()
}

def FileSystem_list(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.List_.List[ff.core.String_.String] = {
new java.io.File(path_).listFiles().map(_.toString.replace('\\', '/')).toList
}

def FileSystem_exists(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
new java.io.File(path_).exists()
}

def FileSystem_isDirectory(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
new java.io.File(path_).isDirectory
}

def FileSystem_createDirectory(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
new java.io.File(path_).mkdir()
}

def FileSystem_createDirectories(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
new java.io.File(path_).mkdirs()
}

def FileSystem_delete(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
if(!new java.io.File(path_).delete()) { throw new java.io.IOException("Could not delete " + path_) }
}

def FileSystem_rename(self_ : ff.core.FileSystem_.FileSystem, fromPath_ : ff.core.String_.String, toPath_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
if(!new java.io.File(fromPath_).renameTo(new java.io.File(toPath_))) { throw new java.io.IOException("Could not rename " + fromPath_ + " to " + toPath_) }
}

def FileSystem_getAbsolutePath(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.String_.String = {
new java.io.File(path_).getAbsolutePath.replace('\\', '/')
}

def FileSystem_directoryName(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.String_.String = (self_, path_) match {
case (self_, _) =>
ff.core.String_.String_reverse(self_ = ff.core.String_.String_dropFirst(self_ = ff.core.String_.String_dropWhile(self_ = ff.core.String_.String_reverse(self_ = path_), p_ = {(_w1) =>
(_w1 != '/')
}), count_ = 1))
}

def FileSystem_baseName(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.String_.String = (self_, path_) match {
case (self_, _) =>
ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = path_), p_ = {(_w1) =>
(_w1 != '/')
}))
}

def FileSystem_prefixName(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.String_.String = (self_, path_) match {
case (self_, _) =>
ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = path_), p_ = {(_w1) =>
(_w1 != '/')
})), p_ = {(_w1) =>
(_w1 != '.')
})
}

def FileSystem_suffixName(self_ : ff.core.FileSystem_.FileSystem, path_ : ff.core.String_.String) : ff.core.String_.String = (self_, path_) match {
case (self_, _) =>
ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = path_), p_ = {(_w1) =>
(_w1 != '/')
}), p_ = {(_w1) =>
(_w1 != '.')
}))
}


}
