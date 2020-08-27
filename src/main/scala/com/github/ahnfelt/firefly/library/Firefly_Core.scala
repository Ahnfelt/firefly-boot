package com.github.ahnfelt.firefly.library

object Firefly_Core {

    type Never = scala.Nothing
    type Bool = scala.Boolean
    type Pair[A, B] = (A, B)


    object Unit {
        def apply() : Unit = {}
        def unapply(value : Unit) : Bool = true
    }


    object True {
        def apply() = true
        def unapply(value : Bool) : Bool = value
    }

    object False {
        def apply() = false
        def unapply(value : Bool) : Bool = !value
    }


    object Empty {
        def apply[T]() : scala.List[T] = List()
        def unapply[T](value : scala.List[T]) : scala.Boolean = value.isEmpty
    }

    object Link {
        def apply[T](head : T, tail : List[T]) : scala.List[T] = head :: tail
        def unapply[T](value : scala.List[T]) : scala.Option[(T, List[T])] =
            value match {
                case head :: tail => scala.Some(head -> tail)
                case Nil => scala.None
            }
    }


    object None {
        def apply[T]() : scala.Option[T] = scala.None
        def unapply[T](option : scala.Option[T]) : scala.Boolean = option.isEmpty
    }

    object Some {
        def apply[T](value : T) : scala.Option[T] = scala.Some(value)
        def unapply[T](option : scala.Option[T]) : scala.Option[T] = option
    }


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

    def each[T](list : List[T], body : T => Unit) : Unit = list.foreach(body)
    def while_(condition : () => Bool, body : () => Unit) : Unit = while(condition()) body()
    def if_[T](condition : Bool, body : () => T) : Option[T] = if(condition) scala.Some(body()) else scala.None

    implicit class Firefly_Option[T](option : Option[T]) {
        def elseIf(condition : () => Bool, value : () => T) : Option[T] =
            if(option.nonEmpty) option else if_(condition(), value)
        def else_(value : () => T) : T =
            option.getOrElse(value())
        def each(body : T => Unit) : Unit = option.foreach(body)
        def all(body : T => Bool) : Bool = option.forall(body)
        def any(body : T => Bool) : Bool = option.exists(body)
    }

    implicit class Firefly_List[T](list : List[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def pairs() : List[(Int, T)] = list.zipWithIndex.map(_.swap)
    }

    implicit class Firefly_String_List(list : List[String]) {
        def join(separator : String) : String = list.mkString(separator)
    }

    implicit class Firefly_Array[T](list : Array[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def pairs() : Array[(Int, T)] = list.zipWithIndex.map(_.swap)
    }

    implicit class Firefly_Pair[A, B](pair : (A, B)) {
        def first = pair._1
        def second = pair._2
        def mapFirst[C](body : A => C) : (C, B) = (body(first), second)
        def mapSecond[C](body : B => C) : (A, C) = (first, body(second))
        def withFirst[C](value : C) : (C, B) = (value, second)
        def withSecond[C](value : C) : (A, C) = (first, value)
    }

}
