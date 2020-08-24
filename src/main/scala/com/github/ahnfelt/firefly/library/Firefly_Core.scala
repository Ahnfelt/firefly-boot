package com.github.ahnfelt.firefly.library

object Firefly_Core {

    type Never = Nothing
    type Bool = Boolean
    def True() : Bool = true
    def False() : Bool = false

    object Some {
        def apply[T](value : T) : Option[T] = scala.Some(value)
        def unapply[T](option : Option[T]) : Option[T] = option
    }

    object None {
        def apply[T]() : Option[T] = scala.None
        def unapply[T](option : Option[T]) : Boolean = option.isEmpty
    }

    case class Pair[A, B](first : A, second : B)

}
