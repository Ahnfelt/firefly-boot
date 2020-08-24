package com.github.ahnfelt.firefly.library

object Firefly_Core {

    type Never = scala.Nothing
    type Bool = scala.Boolean

    def True() : Bool = true
    def False() : Bool = false

    object Some {
        def apply[T](value : T) : scala.Option[T] = scala.Some(value)
        def unapply[T](option : scala.Option[T]) : scala.Option[T] = option
    }

    object None {
        def apply[T]() : scala.Option[T] = scala.None
        def unapply[T](option : scala.Option[T]) : scala.Boolean = option.isEmpty
    }

    case class Pair[A, B](first : A, second : B)

    final class System(val arguments : Array[String]) {
        def write(value : String) : Unit = scala.Predef.print(value)
        def writeLine(value : String) : Unit = scala.Predef.println(value)
        val files = new FileSystem()
    }

    final class FileSystem() {

        import java.io.{File, FileWriter}
        import scala.io.Source

        def readText(file : String) : String = {
            val source = Source.fromFile(new File(file), "UTF-8")
            val result = source.mkString
            source.close()
            result
        }

        def writeText(file : String, text : String) : Unit = {
            val writer = new FileWriter(new File(file))
            writer.write(text)
            writer.close()
        }

        def list(path : String) : List[String] = {
            new File(path).listFiles().map(_.toString).toList
        }

        def exists(path : String) : Boolean = {
            new File(path).exists()
        }

        def isDirectory(path : String) : Boolean = {
            new File(path).isDirectory
        }

        def createDirectory(path : String) : Unit = {
            new File(path).mkdir()
        }

        def createDirectories(path : String) : Unit = {
            new File(path).mkdirs()
        }

        def delete(path : String) : Unit = {
            new File(path).delete()
        }

    }

}
