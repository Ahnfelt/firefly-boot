package firefly

import scala.collection.mutable

object Firefly_Core {

    def pipe_dot[A, B](value : A)(function : A => B) : B = function(value)

    type Never = scala.Nothing
    type Bool = scala.Boolean
    type Pair[A, B] = (A, B)

    type SetBuilder[T] = mutable.SortedSet[T]
    type ArrayBuilder[T] = mutable.ArrayBuffer[T]

    def SetBuilder[T](items : T*)(implicit ordering : Ordering[T]) = mutable.SortedSet[T](items : _*)
    def ArrayBuilder[T](items : T*) = mutable.ArrayBuffer[T](items : _*)


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


    object Pair {
        def apply[A, B](first : A, second : B) : (A, B) = (first, second)
        def unapply[A, B](pair : (A, B)) : scala.Option[(A, B)] = Some(pair)
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
            new File(path).listFiles().map(_.toString.replace('\\', '/')).toList
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

        def getAbsolutePath(path : String) : String = {
            new File(path).getAbsolutePath.replace('\\', '/')
        }

        def directoryName(path : String) : String = {
            path.reverse.dropWhile(_ != '/').drop(1).reverse
        }

        def baseName(path : String) : String = {
            path.reverse.takeWhile(_ != '/').reverse
        }

        def prefixName(path : String) : String = {
            path.reverse.takeWhile(_ != '/').reverse.takeWhile(_ != '.')
        }

        def suffixName(path : String) : String = {
            path.reverse.takeWhile(_ != '/').takeWhile(_ != '.').reverse
        }

    }

    def each[T](list : List[T], body : T => Unit) : Unit = list.foreach(body)
    def while_(condition : () => Bool, body : () => Unit) : Unit = while(condition()) body()
    def if_[T](condition : Bool, body : () => T) : Option[T] = if(condition) scala.Some(body()) else scala.None
    def panic(message : String) : Nothing = {
        println(message)
        System.exit(1)
        throw new RuntimeException(message)
    }

    def do_[T](body : () => T) : T = body()
    def switch[A, R](a : A, body : A => R) : R = body(a)
    def switch2[A, B, R](a : A, b : B, body : (A, B) => R) : R = body(a, b)
    def switch3[A, B, C, R](a : A, b : B, c : C, body : (A, B, C) => R) : R = body(a, b, c)
    def switch4[A, B, C, D, R](a : A, b : B, c : C, d : D, body : (A, B, C, D) => R) : R = body(a, b, c, d)
    def switch5[A, B, C, D, E, R](a : A, b : B, c : C, d : D, e : E, body : (A, B, C, D, E) => R) : R = body(a, b, c, d, e)

    implicit class Firefly_Option[T](option : Option[T]) {
        def elseIf[U >: T](condition : () => Bool, value : () => U) : Option[U] =
            if(option.nonEmpty) option else if_(condition(), value)
        def else_[U >: T](value : () => U) : U =
            option.getOrElse(value())
        def each(body : T => Unit) : Unit = option.foreach(body)
        def all(body : T => Bool) : Bool = option.forall(body)
        def any(body : T => Bool) : Bool = option.exists(body)
    }

    implicit class Firefly_List[T](list : List[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def modify(index : Int, body : T => T) : List[T] = list.updated(index, body(list(index)))
        def pairs() : List[(Int, T)] = list.zipWithIndex.map(_.swap)
    }

    implicit class Firefly_String_List(list : List[String]) {
        def join(separator : String) : String = list.mkString(separator)
    }

    implicit class Firefly_Array[T : scala.reflect.ClassTag](list : Array[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def modify(index : Int, body : T => T) : Array[T] = list.updated(index, body(list(index)))
        def pairs() : Array[(Int, T)] = list.zipWithIndex.map(_.swap)
    }

    implicit class Firefly_ArrayBuilder[T](list : ArrayBuilder[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def modify(index : Int, body : T => T) : Unit = list.update(index, body(list(index)))
    }

    implicit class Firefly_SetBuilder[T](list : SetBuilder[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
    }

    implicit class Firefly_Range(list : Range) {
        def each(body : Int => Unit) : Unit = list.foreach(body)
        def all(body : Int => Bool) : Bool = list.forall(body)
        def any(body : Int => Bool) : Bool = list.exists(body)
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
