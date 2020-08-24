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

}
