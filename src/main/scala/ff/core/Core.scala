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
object Core_ {


val log_ : ff.core.Log_.Log = null
def if_[T](condition_ : ff.core.Bool_.Bool, body_ : Function0[T]) : ff.core.Option_.Option[T] = {
pipe_dot(condition_)({
case (ff.core.Bool_.False()) =>
ff.core.Option_.None[T]()
case (ff.core.Bool_.True()) =>
ff.core.Option_.Some[T](value_ = body_())
})
}

def while_(condition_ : Function0[ff.core.Bool_.Bool], body_ : Function0[ff.core.Unit_.Unit]) : ff.core.Unit_.Unit = {
pipe_dot(condition_())({
case (ff.core.Bool_.False()) =>
ff.core.Unit_.Unit()
case (ff.core.Bool_.True()) =>
body_();
ff.core.Core_.while_(condition_ = condition_, body_ = body_)
});
ff.core.Unit_.Unit()
}

def try_[T](body_ : Function0[T]) : ff.core.Try_.Try[T] = {
scala.util.Try { body_() }
}

def do_[T](body_ : Function0[T]) : T = {
body_()
}

def panic_[T](message_ : ff.core.String_.String) : T = {
println(message_); throw new RuntimeException(message_)
}

def magicShow_[T](value_ : T) : ff.core.String_.String = {
value_.toString
}

def magicHashCode_[T](value_ : T) : ff.core.Int_.Int = {
value_.hashCode()
}

def magicLess_[T](x_ : T, y_ : T) : ff.core.Bool_.Bool = {
x_.asInstanceOf[Comparable[T]].compareTo(y_) < 0
}

def pipeDot_() : ff.core.Unit_.Unit = {
}; def pipe_dot[A, B](value : A)(function : A => B) : B = { function(value)
}



}
