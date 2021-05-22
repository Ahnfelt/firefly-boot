package firefly

import scala.collection.mutable
import scala.util.Try

object Firefly_Core {

    def pipe_dot[A, B](value : A)(function : A => B) : B = function(value)

    type Never = scala.Nothing
    type Bool = scala.Boolean
    type Pair[A, B] = (A, B)

    type SetBuilder[T] = mutable.SortedSet[T]
    type ArrayBuilder[T] = mutable.ArrayBuffer[T]
    type ListBuilder[T] = mutable.ListBuffer[T]

    def SetBuilder[T](items : T*)(implicit ordering : Ordering[T]) = mutable.SortedSet[T](items : _*)
    def ArrayBuilder[T](items : T*) = mutable.ArrayBuffer[T](items : _*)

    def Array[T: scala.reflect.ClassTag](items : T*) = scala.Array(items : _*)
    def List[T](items : T*) = scala.List(items : _*)
    def Set[T](items : T*) = scala.collection.immutable.Set(items : _*)
    def Map[K, V](items : (K, V)*) = scala.collection.immutable.Map(items : _*)

    type Option[T] = scala.Option[T]
    type Array[T] = scala.Array[T]
    type List[T] = scala.List[T]
    type Set[T] = scala.collection.immutable.Set[T]
    type Map[K, V] = scala.collection.immutable.Map[K, V]

    type Int = scala.Int
    type Char = scala.Char
    type Float = scala.Double
    type String = scala.Predef.String
    type Unit = scala.Unit

    case class FireflyException(value : Any) extends RuntimeException


    def listBuilderOf[T](items : T*) = mutable.ListBuffer[T]()


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


    final class System(argumentsArray : Array[String]) {
        def arguments() : List[String] = argumentsArray.toList
        def write(value : String) : Unit = scala.Predef.print(value)
        def writeLine(value : String) : Unit = scala.Predef.println(value)
        def files() = new FileSystem()
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
            if(!new File(path).delete()) {
                throw new java.io.IOException("Could not delete " + path)
            }
        }

        def rename(fromPath : String, toPath : String) : Unit = {
            if(!new File(fromPath).renameTo(new File(toPath))) {
                throw new java.io.IOException("Could not rename " + fromPath + " to " + toPath)
            }
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

    object log {
        def debug(value : Any) : Unit = println(value)
    }

    def while_(condition : () => Bool, body : () => Unit) : Unit = while(condition()) body()
    def if_[T](condition : Bool, body : () => T) : Option[T] = if(condition) scala.Some(body()) else scala.None
    def panic(message : String) : Nothing = {
        println(message)
        //System.exit(1)
        throw new RuntimeException(message)
    }

    def try_[T](body : () => T): Try[T] = {
        Try { body() }
    }

    def do_[T](body : () => T) : T = body()
    def switch[A, R](a : A, body : A => R) : R = body(a)
    def switch2[A, B, R](a : A, b : B, body : (A, B) => R) : R = body(a, b)
    def switch3[A, B, C, R](a : A, b : B, c : C, body : (A, B, C) => R) : R = body(a, b, c)
    def switch4[A, B, C, D, R](a : A, b : B, c : C, d : D, body : (A, B, C, D) => R) : R = body(a, b, c, d)
    def switch5[A, B, C, D, E, R](a : A, b : B, c : C, d : D, e : E, body : (A, B, C, D, E) => R) : R = body(a, b, c, d, e)

    implicit class Firefly_String(value: String) {
        def expect(index : Int) : Char = value(index)
        def getSize() : Int = value.length
        def sliceEquals(offset: Int, that: String, thatOffset: Int, length: Int, ignoreCase: Bool = false): Bool =
            value.regionMatches(ignoreCase, offset, that, thatOffset, length)
    }

    implicit class Firefly_Option[T](option : Option[T]) {
        def elseIf[U >: T](condition : () => Bool, value : () => U) : Option[U] =
            if(option.nonEmpty) option else if_(condition(), value)
        def else_[U >: T](value : () => U) : U =
            option.getOrElse(value())
        def each(body : T => Unit) : Unit = option.foreach(body)
        def all(body : T => Bool) : Bool = option.forall(body)
        def any(body : T => Bool) : Bool = option.exists(body)
        def expect() : T = option.get
        def getEmpty() : Bool = option.isEmpty
    }

    implicit class Firefly_List[T](list : List[T]) {
        def expect(index : Int) : T = list(index)
        def expectFirst() : T = list.head
        def dropFirst(count : Int = 1) : List[T] = list.drop(count)
        def dropLast(count : Int = 1) : List[T] = list.dropRight(count)
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def modify(index : Int, body : T => T) : List[T] = list.updated(index, body(list(index)))
        def pairs() : List[(Int, T)] = list.zipWithIndex.map(_.swap)
        def getEmpty() : Boolean = list.isEmpty
        def getSize() : Int = list.size
    }

    implicit class Firefly_String_List(list : List[String]) {
        def join(separator : String) : String = list.mkString(separator)
    }

    implicit class Firefly_Pair_List[K, V](list : List[Pair[K, V]]) {
        def getMap() : Map[K, V] = list.toMap
    }

    implicit class Firefly_Set[T](set : Set[T]) {
        def each(body : T => Unit) : Unit = set.foreach(body)
        def all(body : T => Bool) : Bool = set.forall(body)
        def any(body : T => Bool) : Bool = set.exists(body)
        def add(value : T) : Set[T] = set + value
        def getSize() : Int = set.size
    }

    implicit class Firefly_Map[K, V](map : Map[K, V]) {
        def each(body : Pair[K, V] => Unit) : Unit = map.foreach(body)
        def all(body : Pair[K, V] => Bool) : Bool = map.forall(body)
        def any(body : Pair[K, V] => Bool) : Bool = map.exists(body)
        def add(key : K, value : V) : Map[K, V] = map + (key -> value)
        def pairs() : List[(K, V)] = map.toList
        def getSize() : Int = map.size
    }

    implicit class Firefly_Array[T : scala.reflect.ClassTag](list : Array[T]) {
        def expect(index : Int) : T = list(index)
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def modify(index : Int, body : T => T) : Array[T] = list.updated(index, body(list(index)))
        def pairs() : Array[(Int, T)] = list.zipWithIndex.map(_.swap)
        def getSize() : Int = list.length
        def getEmpty() : Boolean = list.isEmpty
        def expectFirst() : T = list.head
        def expectLast() : T = list.last
    }

    implicit class Firefly_ListBuilder[T](list : ListBuilder[T]) {
        def append(item : T) = list += item
        def drain = { val result = list.toList; list.clear(); result }
        def getSize() : Int = list.length
    }

    implicit class Firefly_ArrayBuilder[T](list : ArrayBuilder[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def modify(index : Int, body : T => T) : Unit = list.update(index, body(list(index)))
        def getSize() : Int = list.length
    }

    implicit class Firefly_SetBuilder[T](list : SetBuilder[T]) {
        def each(body : T => Unit) : Unit = list.foreach(body)
        def all(body : T => Bool) : Bool = list.forall(body)
        def any(body : T => Bool) : Bool = list.exists(body)
        def getSize() : Int = list.size
    }

    implicit class Firefly_Range(list : Range) {
        def each(body : Int => Unit) : Unit = list.foreach(body)
        def all(body : Int => Bool) : Bool = list.forall(body)
        def any(body : Int => Bool) : Bool = list.exists(body)
        def getSize() : Int = list.length
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
