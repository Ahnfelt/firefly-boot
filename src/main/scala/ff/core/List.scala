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
object List_ {

type List[+T] = scala.collection.immutable.List[T];

object Empty {
def apply[T]() = scala.collection.immutable.Nil;
def unapply[T](value : List[T]) = value == scala.collection.immutable.Nil;
}
object Link {
def apply[T](head_ : T, tail_ : ff.core.List_.List[T]) = scala.collection.immutable.::(head_ : T, tail_ : ff.core.List_.List[T]);
def unapply[T](value : List[T]) = scala.Some(value).collectFirst { case scala.collection.immutable.::(head_ : T, tail_ : ff.core.List_.List[T]) => (head_ : T, tail_ : ff.core.List_.List[T]) };
}

def reverseList_[T](list_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (List()) =>
result_
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (List(List(head_), result_).flatten))
})
}
go_(list_, List())
}

def groupList_[K, V](list_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]]) : ff.core.Map_.Map[K, ff.core.List_.List[V]] = {
val initial_ : ff.core.List_.List[ff.core.Pair_.Pair[K, ff.core.List_.List[V]]] = List();
list_.foldLeft_(initial_.getMap_())({(map_, pair_) =>
map_.addToList_(pair_.first_, ff.core.Core_.panic_("pair.second"))
})
}
implicit class List_extend0[T](self_ : ff.core.List_.List[T]) {

def append_(list_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
List(self_, list_).getFlatten_()
}

def getArray_() : ff.core.Array_.Array[T] = {
(new scala.collection.mutable.ArrayBuffer[T]() ++ self_).getArray_()
}

def getSet_() : ff.core.Set_.Set[T] = {
self_.foldLeft_(ff.core.Set_.empty_[T]())({(set_, value_) =>
set_.add_(value_)
})
}

def expect_(index_ : ff.core.Int_.Int) : T = {
def go_(list_ : ff.core.List_.List[T], i_ : ff.core.Int_.Int) : T = {
pipe_dot(list_)({
case (ff.core.List_.Empty()) =>
ff.core.Core_.panic_(((("expect(" + index_) + ") on list of size ") + self_.getSize_()))
case (ff.core.List_.Link(head_, _)) if (i_ == 0) =>
head_
case (ff.core.List_.Link(_, tail_)) =>
go_(tail_, (i_ - 1))
})
}
go_(self_, index_)
}

def first_() : ff.core.Option_.Option[T] = {
pipe_dot(self_)({
case (ff.core.List_.Empty()) =>
ff.core.Option_.None()
case (ff.core.List_.Link(head_, _)) =>
ff.core.Option_.Some(head_)
})
}

def last_() : ff.core.Option_.Option[T] = {
pipe_dot(self_)({
case (ff.core.List_.Empty()) =>
ff.core.Option_.None()
case (ff.core.List_.Link(head_, ff.core.List_.Empty())) =>
ff.core.Option_.Some(head_)
case (ff.core.List_.Link(_, tail_)) =>
tail_.last_()
})
}

def expectFirst_() : T = {
self_.first_().else_({() =>
ff.core.Core_.panic_("expectFirst() on empty list")
})
}

def expectLast_() : T = {
self_.last_().else_({() =>
ff.core.Core_.panic_("expectLast() on empty list")
})
}

def dropFirst_(count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = {
pipe_dot(self_)({
case (_) if (count_ <= 0) =>
self_
case (List()) =>
self_
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
tail_.dropFirst_((count_ - 1))
})
}

def dropLast_(count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = {
self_.reverse_().dropFirst_(count_).reverse_()
}

def takeFirst_(count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = {
def go_(list_ : ff.core.List_.List[T], count_ : ff.core.Int_.Int, result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (_) if (count_ <= 0) =>
result_.reverse_()
case (List()) =>
result_.reverse_()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (count_ - 1), (List(List(head_), result_).flatten))
})
}
go_(self_, count_, List())
}

def takeLast_(count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = {
self_.reverse_().takeFirst_(count_).reverse_()
}

def pairs_() : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.Int_.Int, T]] = {
var i_ = 0;
self_.map_({(x_) =>
val r_ = ff.core.Pair_.Pair(i_, x_);
i_ += 1;
r_
})
}

def slice_(from_ : ff.core.Int_.Int, until_ : ff.core.Int_.Int) : ff.core.List_.List[T] = {
self_.dropFirst_(from_).takeFirst_((until_ - from_))
}

def getEmpty_() : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (List()) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
})
}

def getSize_() : ff.core.Int_.Int = {
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.Int_.Int) : ff.core.Int_.Int = {
pipe_dot(list_)({
case (List()) =>
result_
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (result_ + 1))
})
}
go_(self_, 0)
}

def each_(body_ : Function1[T, ff.core.Unit_.Unit]) : ff.core.Unit_.Unit = {
pipe_dot(self_)({
case (List()) =>
ff.core.Unit_.Unit()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
body_(head_);
tail_.each_(body_)
})
}

def all_(body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (List()) =>
ff.core.Bool_.True()
case (List(head_, __seq @ _*)) if (!body_(head_)) =>
val _ = __seq.toList;
ff.core.Bool_.False()
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
tail_.all_(body_)
})
}

def any_(body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
pipe_dot(self_)({
case (List()) =>
ff.core.Bool_.False()
case (List(head_, __seq @ _*)) if body_(head_) =>
val _ = __seq.toList;
ff.core.Bool_.True()
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
tail_.any_(body_)
})
}

def find_(body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Option_.Option[T] = {
pipe_dot(self_)({
case (List()) =>
ff.core.Option_.None()
case (List(head_, __seq @ _*)) if body_(head_) =>
val _ = __seq.toList;
ff.core.Option_.Some(head_)
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
tail_.find_(body_)
})
}

def filter_(body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.List_.List[T] = {
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (List()) =>
result_.reverse_()
case (List(head_, tail__seq @ _*)) if body_(head_) =>
val tail_ = tail__seq.toList;
go_(tail_, (List(List(head_), result_).flatten))
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, result_)
})
}
go_(self_, List())
}

def map_[R](body_ : Function1[T, R]) : ff.core.List_.List[R] = {
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[R]) : ff.core.List_.List[R] = {
pipe_dot(list_)({
case (List()) =>
result_.reverse_()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (List(List(body_(head_)), result_).flatten))
})
}
go_(self_, List())
}

def flatMap_[R](body_ : Function1[T, ff.core.List_.List[R]]) : ff.core.List_.List[R] = {
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[ff.core.List_.List[R]]) : ff.core.List_.List[R] = {
pipe_dot(list_)({
case (List()) =>
result_.reverse_().getFlatten_()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (List(List(body_(head_)), result_).flatten))
})
}
go_(self_, List())
}

def getCollect_[R](body_ : Function1[T, ff.core.Option_.Option[R]]) : ff.core.List_.List[R] = {
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[R]) : ff.core.List_.List[R] = {
pipe_dot(list_)({
case (List()) =>
result_.reverse_()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
pipe_dot(body_(head_))({
case (ff.core.Option_.None()) =>
go_(tail_, result_)
case (ff.core.Option_.Some(value_)) =>
go_(tail_, (List(List(value_), result_).flatten))
})
})
}
go_(self_, List())
}

def getCollectFirst_[R](body_ : Function1[T, ff.core.Option_.Option[R]]) : ff.core.Option_.Option[R] = {
pipe_dot(self_)({
case (List()) =>
ff.core.Option_.None()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
pipe_dot(body_(head_))({
case (ff.core.Option_.None()) =>
tail_.getCollectFirst_(body_)
case (ff.core.Option_.Some(value_)) =>
ff.core.Option_.Some(value_)
})
})
}

def foldLeft_[R](initial_ : R) : Function1[Function2[R, T, R], R] = {
{(body_) =>
def go_(state_ : R, list_ : ff.core.List_.List[T]) : R = {
pipe_dot(list_)({
case (List()) =>
state_
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(body_(state_, head_), tail_)
})
}
go_(initial_, self_)
}
}

def updated_(index_ : ff.core.Int_.Int, value_ : T) : ff.core.List_.List[T] = {
def go_(list_ : ff.core.List_.List[T], i_ : ff.core.Int_.Int, result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (List()) =>
result_.reverse_()
case (List(head_, tail__seq @ _*)) if (i_ == 0) =>
val tail_ = tail__seq.toList;
go_(tail_, (i_ - 1), (List(List(value_), result_).flatten))
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (i_ - 1), (List(List(head_), result_).flatten))
})
}
go_(self_, index_, List())
}

def modify_(index_ : ff.core.Int_.Int, body_ : Function1[T, T]) : ff.core.List_.List[T] = {
def go_(list_ : ff.core.List_.List[T], i_ : ff.core.Int_.Int, result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (List()) =>
result_.reverse_()
case (List(head_, tail__seq @ _*)) if (i_ == 0) =>
val tail_ = tail__seq.toList;
go_(tail_, (i_ - 1), (List(List(body_(head_)), result_).flatten))
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (i_ - 1), (List(List(head_), result_).flatten))
})
}
go_(self_, index_, List())
}

def zip_[S](that_ : ff.core.List_.List[S]) : ff.core.List_.List[ff.core.Pair_.Pair[T, S]] = {
def go_(list1_ : ff.core.List_.List[T], list2_ : ff.core.List_.List[S], result_ : ff.core.List_.List[ff.core.Pair_.Pair[T, S]]) : ff.core.List_.List[ff.core.Pair_.Pair[T, S]] = {
pipe_dot(ff.core.Pair_.Pair(list1_, list2_))({
case (ff.core.Pair_.Pair(List(x_, xs__seq @ _*), List(y_, ys__seq @ _*))) =>
val xs_ = xs__seq.toList;
val ys_ = ys__seq.toList;
go_(xs_, ys_, (List(List(ff.core.Pair_.Pair(x_, y_)), result_).flatten))
case (_) =>
ff.core.List_.reverseList_(result_)
})
}
go_(self_, that_, List())
}

def sortBy_(body_ : Function1[T, ff.core.String_.String]) : ff.core.List_.List[T] = {
ff.core.Core_.if_((self_.getSize_() <= 1), {() =>
self_
}).else_({() =>
def divide_(list_ : ff.core.List_.List[T], xs_ : ff.core.List_.List[T], ys_ : ff.core.List_.List[T]) : ff.core.Pair_.Pair[ff.core.List_.List[T], ff.core.List_.List[T]] = {
pipe_dot(list_)({
case (List()) =>
ff.core.Pair_.Pair(xs_, ys_)
case (List(x_)) =>
ff.core.Pair_.Pair((List(List(x_), xs_).flatten), ys_)
case (List(x_, y_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
divide_(tail_, (List(List(x_), xs_).flatten), (List(List(y_), ys_).flatten))
})
}
def merge_(xs_ : ff.core.List_.List[T], ys_ : ff.core.List_.List[T], result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(ff.core.Pair_.Pair(xs_, ys_))({
case (ff.core.Pair_.Pair(List(x_, xs2__seq @ _*), List(y_, __seq @ _*))) if (body_(x_) < body_(y_)) =>
val xs2_ = xs2__seq.toList;
val _ = __seq.toList;
merge_(xs2_, ys_, (List(List(x_), result_).flatten))
case (ff.core.Pair_.Pair(List(x_, __seq @ _*), List(y_, ys2__seq @ _*))) =>
val _ = __seq.toList;
val ys2_ = ys2__seq.toList;
merge_(xs_, ys2_, (List(List(y_), result_).flatten))
case (ff.core.Pair_.Pair(List(x_, xs2__seq @ _*), List())) =>
val xs2_ = xs2__seq.toList;
merge_(xs2_, List(), (List(List(x_), result_).flatten))
case (ff.core.Pair_.Pair(List(), List(y_, ys2__seq @ _*))) =>
val ys2_ = ys2__seq.toList;
merge_(List(), ys2_, (List(List(y_), result_).flatten))
case (ff.core.Pair_.Pair(List(), List())) =>
result_.reverse_()
})
}
val pair_ = divide_(self_, List(), List());
merge_(pair_.first_.sortBy_(body_), pair_.second_.sortBy_(body_), List())
})
}

def reverse_() : ff.core.List_.List[T] = {
ff.core.List_.reverseList_(self_)
}

}

implicit class List_extend1[T](self_ : ff.core.List_.List[ff.core.List_.List[T]]) {

def getFlatten_() : ff.core.List_.List[T] = {
def go_(lists_ : ff.core.List_.List[ff.core.List_.List[T]], result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(lists_)({
case (List()) =>
result_.reverse_()
case (List(List(), aas__seq @ _*)) =>
val aas_ = aas__seq.toList;
go_(aas_, result_)
case (List(List(a_, as__seq @ _*), aas__seq @ _*)) =>
val as_ = as__seq.toList;
val aas_ = aas__seq.toList;
go_(ff.core.List_.Link(as_, aas_), (List(List(a_), result_).flatten))
})
}
go_(self_, List())
}

}

implicit class List_extend2[K, V](self_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]]) {

def getMap_() : ff.core.Map_.Map[K, V] = {
self_.foldLeft_(ff.core.Map_.empty_[K, V]())({(map_, pair_) =>
map_.add_(pair_.first_, pair_.second_)
})
}

def group_() : ff.core.Map_.Map[K, ff.core.List_.List[V]] = {
ff.core.List_.groupList_(self_)
}

def getUnzip_() : ff.core.Pair_.Pair[ff.core.List_.List[K], ff.core.List_.List[V]] = {
def go_(pairs_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]], ks_ : ff.core.List_.List[K], vs_ : ff.core.List_.List[V]) : ff.core.Pair_.Pair[ff.core.List_.List[K], ff.core.List_.List[V]] = {
pipe_dot(pairs_)({
case (List()) =>
ff.core.Pair_.Pair(ks_.reverse_(), vs_.reverse_())
case (List(ff.core.Pair_.Pair(k_, v_), tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(tail_, (List(List(k_), ks_).flatten), (List(List(v_), vs_).flatten))
})
}
go_(self_, List(), List())
}

}

implicit class List_extend3(self_ : ff.core.List_.List[ff.core.String_.String]) {

def join_(separator_ : ff.core.String_.String = "") : ff.core.String_.String = {
self_.mkString(separator_)
}

}


}
