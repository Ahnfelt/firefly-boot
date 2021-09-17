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
object Option_ {

type Option[+T] = scala.Option[T];

object None {
def apply[T]() = scala.None;
def unapply[T](value : Option[T]) = value == scala.None;
}
object Some {
def apply[T](value_ : T) = scala.Some(value_ : T);
def unapply[T](value : Option[T]) = scala.Some(value).collectFirst { case scala.Some(value_ : T) => (value_ : T) };
}


def Option_else[T, S >: T, T2 <: S](self_ : Option[T], body_ : Function0[T2]) : S = { pipe_dot(self_)({ case (ff.core.Option_.None()) => body_(); case (ff.core.Option_.Some(value_)) => value_})}

def Option_elseIf[T, S >: T, T2 <: S](self_ : Option[T], condition_ : Function0[ff.core.Bool_.Bool], body_ : Function0[T2]) : ff.core.Option_.Option[S] = { pipe_dot(self_)({ case (ff.core.Option_.None()) => pipe_dot(condition_())({ case (ff.core.Bool_.True()) => ff.core.Option_.Some(body_()); case (ff.core.Bool_.False()) => ff.core.Option_.None()}); case (ff.core.Option_.Some(_)) => self_ })}

def Option_getElse[T, S >: T, T2 <: S](self_ : Option[T], body_ : Function0[ff.core.Option_.Option[T2]]) : ff.core.Option_.Option[S] = { pipe_dot(self_)({ case (ff.core.Option_.None()) => body_(); case (ff.core.Option_.Some(_)) => self_ })}

def Option_getEmpty[T](self_ : ff.core.Option_.Option[T]) : ff.core.Bool_.Bool = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.True()
case (ff.core.Option_.Some(_)) =>
ff.core.Bool_.False()
})
}

def Option_getList[T](self_ : ff.core.Option_.Option[T]) : ff.core.List_.List[T] = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
List()
case (ff.core.Option_.Some(v_)) =>
List(v_)
})
}

def Option_filter[T](self_ : ff.core.Option_.Option[T], body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Option_.Option[T] = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.Option_.Some(v_)) if body_(v_) =>
ff.core.Option_.Some[T](value_ = v_)
case (_) =>
ff.core.Option_.None[T]()
})
}

def Option_map[T, R](self_ : ff.core.Option_.Option[T], body_ : Function1[T, R]) : ff.core.Option_.Option[R] = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Option_.None[R]()
case (ff.core.Option_.Some(v_)) =>
ff.core.Option_.Some[R](value_ = body_(v_))
})
}

def Option_flatMap[T, R](self_ : ff.core.Option_.Option[T], body_ : Function1[T, ff.core.Option_.Option[R]]) : ff.core.Option_.Option[R] = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Option_.None[R]()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
})
}

def Option_each[T](self_ : ff.core.Option_.Option[T], body_ : Function1[T, ff.core.Unit_.Unit]) : ff.core.Unit_.Unit = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
});
ff.core.Unit_.Unit()
}

def Option_all[T](self_ : ff.core.Option_.Option[T], body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.True()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
})
}

def Option_any[T](self_ : ff.core.Option_.Option[T], body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.False()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
})
}

def Option_expect[T](self_ : ff.core.Option_.Option[T]) : T = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Core_.panic_[T](message_ = "None.expect()")
case (ff.core.Option_.Some(v_)) =>
v_
})
}

def Option_contains[T](self_ : ff.core.Option_.Option[T], value_ : T) : ff.core.Bool_.Bool = (self_, value_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.False()
case (ff.core.Option_.Some(v_)) =>
(v_ == value_)
})
}

def Option_flatten[T](self_ : ff.core.Option_.Option[ff.core.Option_.Option[T]]) : ff.core.Option_.Option[T] = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Option_.None[T]()
case (ff.core.Option_.Some(v_)) =>
v_
})
}


}
