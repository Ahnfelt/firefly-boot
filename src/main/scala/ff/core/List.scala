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
go_(list_ = tail_, result_ = (List(List(head_), result_).flatten))
})
}
go_(list_ = list_, result_ = List())
}

def groupList_[K, V](list_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]]) : ff.core.Map_.Map[K, ff.core.List_.List[V]] = {
val initial_ : ff.core.List_.List[ff.core.Pair_.Pair[K, ff.core.List_.List[V]]] = List();
ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[K, V], ff.core.Map_.Map[K, ff.core.List_.List[V]]](self_ = list_, initial_ = ff.core.List_.List_toMap[K, ff.core.List_.List[V]](self_ = initial_))({(map_, pair_) =>
ff.core.Map_.Map_addToList[K, V](self_ = map_, key_ = pair_.first_, value_ = ff.core.Core_.panic_[V](message_ = "pair.second"))
})
}
def List_append[T](self_ : ff.core.List_.List[T], list_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = (self_, list_) match {
case (self_, _) =>
ff.core.List_.List_flatten[T](self_ = List(self_, list_))
}

def List_addAll[T](self_ : ff.core.List_.List[T], list_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = (self_, list_) match {
case (self_, _) =>
ff.core.List_.List_flatten[T](self_ = List(self_, list_))
}

def List_toArray[T](self_ : ff.core.List_.List[T]) : ff.core.Array_.Array[T] = {
ArrayBuilder_toArray(new scala.collection.mutable.ArrayBuffer[T]() ++ self_)
}

def List_toSet[T](self_ : ff.core.List_.List[T]) : ff.core.Set_.Set[T] = (self_) match {
case (self_) =>
ff.core.List_.List_foldLeft[T, ff.core.Set_.Set[T]](self_ = self_, initial_ = ff.core.Set_.empty_[T]())({(set_, value_) =>
ff.core.Set_.Set_add[T](self_ = set_, value_ = value_)
})
}

def List_expect[T](self_ : ff.core.List_.List[T], index_ : ff.core.Int_.Int) : T = (self_, index_) match {
case (self_, _) =>
def go_(list_ : ff.core.List_.List[T], i_ : ff.core.Int_.Int) : T = {
pipe_dot(list_)({
case (ff.core.List_.Empty()) =>
ff.core.Core_.panic_[T](message_ = ((("expect(" + index_) + ") on list of size ") + ff.core.List_.List_size[T](self_ = self_)))
case (ff.core.List_.Link(head_, _)) if (i_ == 0) =>
head_
case (ff.core.List_.Link(_, tail_)) =>
go_(list_ = tail_, i_ = (i_ - 1))
})
}
go_(list_ = self_, i_ = index_)
}

def List_first[T](self_ : ff.core.List_.List[T]) : ff.core.Option_.Option[T] = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.List_.Empty()) =>
ff.core.Option_.None[T]()
case (ff.core.List_.Link(head_, _)) =>
ff.core.Option_.Some[T](value_ = head_)
})
}

def List_last[T](self_ : ff.core.List_.List[T]) : ff.core.Option_.Option[T] = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.List_.Empty()) =>
ff.core.Option_.None[T]()
case (ff.core.List_.Link(head_, ff.core.List_.Empty())) =>
ff.core.Option_.Some[T](value_ = head_)
case (ff.core.List_.Link(_, tail_)) =>
ff.core.List_.List_last[T](self_ = tail_)
})
}

def List_expectFirst[T](self_ : ff.core.List_.List[T]) : T = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.List_.List_first[T](self_ = self_), body_ = {() =>
ff.core.Core_.panic_[T](message_ = "expectFirst() on empty list")
})
}

def List_expectLast[T](self_ : ff.core.List_.List[T]) : T = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.List_.List_last[T](self_ = self_), body_ = {() =>
ff.core.Core_.panic_[T](message_ = "expectLast() on empty list")
})
}

def List_dropFirst[T](self_ : ff.core.List_.List[T], count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = (self_, count_) match {
case (self_, _) =>
pipe_dot(self_)({
case (_) if (count_ <= 0) =>
self_
case (List()) =>
self_
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
ff.core.List_.List_dropFirst[T](self_ = tail_, count_ = (count_ - 1))
})
}

def List_dropLast[T](self_ : ff.core.List_.List[T], count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = (self_, count_) match {
case (self_, _) =>
ff.core.List_.List_reverse[T](self_ = ff.core.List_.List_dropFirst[T](self_ = ff.core.List_.List_reverse[T](self_ = self_), count_ = count_))
}

def List_takeFirst[T](self_ : ff.core.List_.List[T], count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = (self_, count_) match {
case (self_, _) =>
def go_(list_ : ff.core.List_.List[T], count_ : ff.core.Int_.Int, result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (_) if (count_ <= 0) =>
ff.core.List_.List_reverse[T](self_ = result_)
case (List()) =>
ff.core.List_.List_reverse[T](self_ = result_)
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, count_ = (count_ - 1), result_ = (List(List(head_), result_).flatten))
})
}
go_(list_ = self_, count_ = count_, result_ = List())
}

def List_takeLast[T](self_ : ff.core.List_.List[T], count_ : ff.core.Int_.Int = 1) : ff.core.List_.List[T] = (self_, count_) match {
case (self_, _) =>
ff.core.List_.List_reverse[T](self_ = ff.core.List_.List_takeFirst[T](self_ = ff.core.List_.List_reverse[T](self_ = self_), count_ = count_))
}

def List_pairs[T](self_ : ff.core.List_.List[T]) : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.Int_.Int, T]] = (self_) match {
case (self_) =>
var i_ : ff.core.Int_.Int = 0;
ff.core.List_.List_map[T, ff.core.Pair_.Pair[ff.core.Int_.Int, T]](self_ = self_, body_ = {(x_) =>
val r_ : ff.core.Pair_.Pair[ff.core.Int_.Int, T] = ff.core.Pair_.Pair[ff.core.Int_.Int, T](first_ = i_, second_ = x_);
i_ += 1;
r_
})
}

def List_slice[T](self_ : ff.core.List_.List[T], from_ : ff.core.Int_.Int, until_ : ff.core.Int_.Int) : ff.core.List_.List[T] = (self_, from_, until_) match {
case (self_, _, _) =>
ff.core.List_.List_takeFirst[T](self_ = ff.core.List_.List_dropFirst[T](self_ = self_, count_ = from_), count_ = (until_ - from_))
}

def List_isEmpty[T](self_ : ff.core.List_.List[T]) : ff.core.Bool_.Bool = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (List()) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
})
}

def List_size[T](self_ : ff.core.List_.List[T]) : ff.core.Int_.Int = (self_) match {
case (self_) =>
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.Int_.Int) : ff.core.Int_.Int = {
pipe_dot(list_)({
case (List()) =>
result_
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, result_ = (result_ + 1))
})
}
go_(list_ = self_, result_ = 0)
}

def List_each[T](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.Unit_.Unit]) : ff.core.Unit_.Unit = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (List()) =>
ff.core.Unit_.Unit()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
body_(head_);
ff.core.List_.List_each[T](self_ = tail_, body_ = body_)
});
ff.core.Unit_.Unit()
}

def List_all[T](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (List()) =>
ff.core.Bool_.True()
case (List(head_, __seq @ _*)) if (!body_(head_)) =>
val _ = __seq.toList;
ff.core.Bool_.False()
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
ff.core.List_.List_all[T](self_ = tail_, body_ = body_)
})
}

def List_any[T](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (List()) =>
ff.core.Bool_.False()
case (List(head_, __seq @ _*)) if body_(head_) =>
val _ = __seq.toList;
ff.core.Bool_.True()
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
ff.core.List_.List_any[T](self_ = tail_, body_ = body_)
})
}

def List_find[T](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.Option_.Option[T] = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (List()) =>
ff.core.Option_.None[T]()
case (List(head_, __seq @ _*)) if body_(head_) =>
val _ = __seq.toList;
ff.core.Option_.Some[T](value_ = head_)
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
ff.core.List_.List_find[T](self_ = tail_, body_ = body_)
})
}

def List_filter[T](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.Bool_.Bool]) : ff.core.List_.List[T] = (self_, body_) match {
case (self_, _) =>
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (List()) =>
ff.core.List_.List_reverse[T](self_ = result_)
case (List(head_, tail__seq @ _*)) if body_(head_) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, result_ = (List(List(head_), result_).flatten))
case (List(_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, result_ = result_)
})
}
go_(list_ = self_, result_ = List())
}

def List_map[T, R](self_ : ff.core.List_.List[T], body_ : Function1[T, R]) : ff.core.List_.List[R] = (self_, body_) match {
case (self_, _) =>
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[R]) : ff.core.List_.List[R] = {
pipe_dot(list_)({
case (List()) =>
ff.core.List_.List_reverse[R](self_ = result_)
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, result_ = (List(List(body_(head_)), result_).flatten))
})
}
go_(list_ = self_, result_ = List())
}

def List_flatMap[T, R](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.List_.List[R]]) : ff.core.List_.List[R] = (self_, body_) match {
case (self_, _) =>
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[ff.core.List_.List[R]]) : ff.core.List_.List[R] = {
pipe_dot(list_)({
case (List()) =>
ff.core.List_.List_flatten[R](self_ = ff.core.List_.List_reverse[ff.core.List_.List[R]](self_ = result_))
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, result_ = (List(List(body_(head_)), result_).flatten))
})
}
go_(list_ = self_, result_ = List())
}

def List_collect[T, R](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.Option_.Option[R]]) : ff.core.List_.List[R] = (self_, body_) match {
case (self_, _) =>
def go_(list_ : ff.core.List_.List[T], result_ : ff.core.List_.List[R]) : ff.core.List_.List[R] = {
pipe_dot(list_)({
case (List()) =>
ff.core.List_.List_reverse[R](self_ = result_)
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
pipe_dot(body_(head_))({
case (ff.core.Option_.None()) =>
go_(list_ = tail_, result_ = result_)
case (ff.core.Option_.Some(value_)) =>
go_(list_ = tail_, result_ = (List(List(value_), result_).flatten))
})
})
}
go_(list_ = self_, result_ = List())
}

def List_collectFirst[T, R](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.Option_.Option[R]]) : ff.core.Option_.Option[R] = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (List()) =>
ff.core.Option_.None[R]()
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
pipe_dot(body_(head_))({
case (ff.core.Option_.None()) =>
ff.core.List_.List_collectFirst[T, R](self_ = tail_, body_ = body_)
case (ff.core.Option_.Some(value_)) =>
ff.core.Option_.Some[R](value_ = value_)
})
})
}

def List_foldLeft[T, R](self_ : ff.core.List_.List[T], initial_ : R) : Function1[Function2[R, T, R], R] = (self_, initial_) match {
case (self_, _) =>
{(body_) =>
def go_(state_ : R, list_ : ff.core.List_.List[T]) : R = {
pipe_dot(list_)({
case (List()) =>
state_
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(state_ = body_(state_, head_), list_ = tail_)
})
}
go_(state_ = initial_, list_ = self_)
}
}

def List_updated[T](self_ : ff.core.List_.List[T], index_ : ff.core.Int_.Int, value_ : T) : ff.core.List_.List[T] = (self_, index_, value_) match {
case (self_, _, _) =>
def go_(list_ : ff.core.List_.List[T], i_ : ff.core.Int_.Int, result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (List()) =>
ff.core.List_.List_reverse[T](self_ = result_)
case (List(head_, tail__seq @ _*)) if (i_ == 0) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, i_ = (i_ - 1), result_ = (List(List(value_), result_).flatten))
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, i_ = (i_ - 1), result_ = (List(List(head_), result_).flatten))
})
}
go_(list_ = self_, i_ = index_, result_ = List())
}

def List_modify[T](self_ : ff.core.List_.List[T], index_ : ff.core.Int_.Int, body_ : Function1[T, T]) : ff.core.List_.List[T] = (self_, index_, body_) match {
case (self_, _, _) =>
def go_(list_ : ff.core.List_.List[T], i_ : ff.core.Int_.Int, result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(list_)({
case (List()) =>
ff.core.List_.List_reverse[T](self_ = result_)
case (List(head_, tail__seq @ _*)) if (i_ == 0) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, i_ = (i_ - 1), result_ = (List(List(body_(head_)), result_).flatten))
case (List(head_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(list_ = tail_, i_ = (i_ - 1), result_ = (List(List(head_), result_).flatten))
})
}
go_(list_ = self_, i_ = index_, result_ = List())
}

def List_zip[T, S](self_ : ff.core.List_.List[T], that_ : ff.core.List_.List[S]) : ff.core.List_.List[ff.core.Pair_.Pair[T, S]] = (self_, that_) match {
case (self_, _) =>
def go_(list1_ : ff.core.List_.List[T], list2_ : ff.core.List_.List[S], result_ : ff.core.List_.List[ff.core.Pair_.Pair[T, S]]) : ff.core.List_.List[ff.core.Pair_.Pair[T, S]] = {
pipe_dot(ff.core.Pair_.Pair[ff.core.List_.List[T], ff.core.List_.List[S]](first_ = list1_, second_ = list2_))({
case (ff.core.Pair_.Pair(List(x_, xs__seq @ _*), List(y_, ys__seq @ _*))) =>
val xs_ = xs__seq.toList;
val ys_ = ys__seq.toList;
go_(list1_ = xs_, list2_ = ys_, result_ = (List(List(ff.core.Pair_.Pair[T, S](first_ = x_, second_ = y_)), result_).flatten))
case (_) =>
ff.core.List_.reverseList_[ff.core.Pair_.Pair[T, S]](list_ = result_)
})
}
go_(list1_ = self_, list2_ = that_, result_ = List())
}

def List_sortBy[T](self_ : ff.core.List_.List[T], body_ : Function1[T, ff.core.String_.String]) : ff.core.List_.List[T] = (self_, body_) match {
case (self_, _) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[T]](condition_ = (ff.core.List_.List_size[T](self_ = self_) <= 1), body_ = {() =>
self_
}), body_ = {() =>
def divide_(list_ : ff.core.List_.List[T], xs_ : ff.core.List_.List[T], ys_ : ff.core.List_.List[T]) : ff.core.Pair_.Pair[ff.core.List_.List[T], ff.core.List_.List[T]] = {
pipe_dot(list_)({
case (List()) =>
ff.core.Pair_.Pair[ff.core.List_.List[T], ff.core.List_.List[T]](first_ = xs_, second_ = ys_)
case (List(x_)) =>
ff.core.Pair_.Pair[ff.core.List_.List[T], ff.core.List_.List[T]](first_ = (List(List(x_), xs_).flatten), second_ = ys_)
case (List(x_, y_, tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
divide_(list_ = tail_, xs_ = (List(List(x_), xs_).flatten), ys_ = (List(List(y_), ys_).flatten))
})
}
def merge_(xs_ : ff.core.List_.List[T], ys_ : ff.core.List_.List[T], result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(ff.core.Pair_.Pair[ff.core.List_.List[T], ff.core.List_.List[T]](first_ = xs_, second_ = ys_))({
case (ff.core.Pair_.Pair(List(x_, xs2__seq @ _*), List(y_, __seq @ _*))) if (body_(x_) < body_(y_)) =>
val xs2_ = xs2__seq.toList;
val _ = __seq.toList;
merge_(xs_ = xs2_, ys_ = ys_, result_ = (List(List(x_), result_).flatten))
case (ff.core.Pair_.Pair(List(x_, __seq @ _*), List(y_, ys2__seq @ _*))) =>
val _ = __seq.toList;
val ys2_ = ys2__seq.toList;
merge_(xs_ = xs_, ys_ = ys2_, result_ = (List(List(y_), result_).flatten))
case (ff.core.Pair_.Pair(List(x_, xs2__seq @ _*), List())) =>
val xs2_ = xs2__seq.toList;
merge_(xs_ = xs2_, ys_ = List(), result_ = (List(List(x_), result_).flatten))
case (ff.core.Pair_.Pair(List(), List(y_, ys2__seq @ _*))) =>
val ys2_ = ys2__seq.toList;
merge_(xs_ = List(), ys_ = ys2_, result_ = (List(List(y_), result_).flatten))
case (ff.core.Pair_.Pair(List(), List())) =>
ff.core.List_.List_reverse[T](self_ = result_)
})
}
val pair_ : ff.core.Pair_.Pair[ff.core.List_.List[T], ff.core.List_.List[T]] = divide_(list_ = self_, xs_ = List(), ys_ = List());
merge_(xs_ = ff.core.List_.List_sortBy[T](self_ = pair_.first_, body_ = body_), ys_ = ff.core.List_.List_sortBy[T](self_ = pair_.second_, body_ = body_), result_ = List())
})
}

def List_reverse[T](self_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = (self_) match {
case (self_) =>
ff.core.List_.reverseList_[T](list_ = self_)
}

def List_flatten[T](self_ : ff.core.List_.List[ff.core.List_.List[T]]) : ff.core.List_.List[T] = (self_) match {
case (self_) =>
def go_(lists_ : ff.core.List_.List[ff.core.List_.List[T]], result_ : ff.core.List_.List[T]) : ff.core.List_.List[T] = {
pipe_dot(lists_)({
case (List()) =>
ff.core.List_.List_reverse[T](self_ = result_)
case (List(List(), aas__seq @ _*)) =>
val aas_ = aas__seq.toList;
go_(lists_ = aas_, result_ = result_)
case (List(List(a_, as__seq @ _*), aas__seq @ _*)) =>
val as_ = as__seq.toList;
val aas_ = aas__seq.toList;
go_(lists_ = ff.core.List_.Link[ff.core.List_.List[T]](head_ = as_, tail_ = aas_), result_ = (List(List(a_), result_).flatten))
})
}
go_(lists_ = self_, result_ = List())
}

def List_toMap[K, V](self_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]]) : ff.core.Map_.Map[K, V] = (self_) match {
case (self_) =>
ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[K, V], ff.core.Map_.Map[K, V]](self_ = self_, initial_ = ff.core.Map_.empty_[K, V]())({(map_, pair_) =>
ff.core.Map_.Map_add[K, V](self_ = map_, key_ = pair_.first_, value_ = pair_.second_)
})
}

def List_group[K, V](self_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]]) : ff.core.Map_.Map[K, ff.core.List_.List[V]] = (self_) match {
case (self_) =>
ff.core.List_.groupList_[K, V](list_ = self_)
}

def List_unzip[K, V](self_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]]) : ff.core.Pair_.Pair[ff.core.List_.List[K], ff.core.List_.List[V]] = (self_) match {
case (self_) =>
def go_(pairs_ : ff.core.List_.List[ff.core.Pair_.Pair[K, V]], ks_ : ff.core.List_.List[K], vs_ : ff.core.List_.List[V]) : ff.core.Pair_.Pair[ff.core.List_.List[K], ff.core.List_.List[V]] = {
pipe_dot(pairs_)({
case (List()) =>
ff.core.Pair_.Pair[ff.core.List_.List[K], ff.core.List_.List[V]](first_ = ff.core.List_.List_reverse[K](self_ = ks_), second_ = ff.core.List_.List_reverse[V](self_ = vs_))
case (List(ff.core.Pair_.Pair(k_, v_), tail__seq @ _*)) =>
val tail_ = tail__seq.toList;
go_(pairs_ = tail_, ks_ = (List(List(k_), ks_).flatten), vs_ = (List(List(v_), vs_).flatten))
})
}
go_(pairs_ = self_, ks_ = List(), vs_ = List())
}

def List_join(self_ : ff.core.List_.List[ff.core.String_.String], separator_ : ff.core.String_.String = "") : ff.core.String_.String = {
self_.mkString(separator_)
}


}
