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


implicit class Option_extend0[T](self_ : ff.core.Option_.Option[T]) {

def else_[S >: T, T2 <: S](body_ : Function0[T2]) : S = { pipe_dot(self_)({ case (ff.core.Option_.None()) => body_(); case (ff.core.Option_.Some(value_)) => value_})}

def elseIf_[S >: T, T2 <: S](condition_ : Function0[ff.core.Bool_.Bool], body_ : Function0[T2]) : ff.core.Option_.Option[S] = { pipe_dot(self_)({ case (ff.core.Option_.None()) => pipe_dot(condition_())({ case (ff.core.Bool_.True()) => ff.core.Option_.Some(body_()); case (ff.core.Bool_.False()) => ff.core.Option_.None()}); case (ff.core.Option_.Some(_)) => self_ })}

def getElse_[S >: T, T2 <: S](body_ : Function0[ff.core.Option_.Option[T2]]) : ff.core.Option_.Option[S] = { pipe_dot(self_)({ case (ff.core.Option_.None()) => body_(); case (ff.core.Option_.Some(_)) => self_ })}

def getEmpty_() : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.True()
case (ff.core.Option_.Some(_)) =>
ff.core.Bool_.False()
})
}

def getList_() : ff.core.List_.List[T] = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
List()
case (ff.core.Option_.Some(v_)) =>
List(v_)
})
}

def filter_(body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Option_.Option[T] = {
pipe_dot(self_)({
case (ff.core.Option_.Some(v_)) if body_(v_) =>
ff.core.Option_.Some(v_)
case (_) =>
ff.core.Option_.None()
})
}

def map_[R](body_ : Function1[T, R]) : ff.core.Option_.Option[R] = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Option_.None()
case (ff.core.Option_.Some(v_)) =>
ff.core.Option_.Some(body_(v_))
})
}

def flatMap_[R](body_ : Function1[T, ff.core.Option_.Option[R]]) : ff.core.Option_.Option[R] = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Option_.None()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
})
}

def each_(body_ : Function1[T, ff.core.Unit_.Unit]) : ff.core.Unit_.Unit = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Unit_.Unit()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
})
}

def all_(body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.True()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
})
}

def any_(body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.False()
case (ff.core.Option_.Some(v_)) =>
body_(v_)
})
}

def expect_() : T = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Core_.panic_("None.expect()")
case (ff.core.Option_.Some(v_)) =>
v_
})
}

def contains_(value_ : T) : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Bool_.False()
case (ff.core.Option_.Some(v_)) =>
(v_ == value_)
})
}

}

implicit class Option_extend1[T](self_ : ff.core.Option_.Option[ff.core.Option_.Option[T]]) {

def flatten_() : ff.core.Option_.Option[T] = {
pipe_dot(self_)({
case (ff.core.Option_.None()) =>
ff.core.Option_.None()
case (ff.core.Option_.Some(v_)) =>
v_
})
}

}


}
