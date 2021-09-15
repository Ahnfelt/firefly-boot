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
object Pair_ {

type Pair[A, B] = scala.Tuple2[A, B];

object Pair {
def apply[A, B](first_ : A, second_ : B) = scala.Tuple2(first_ : A, second_ : B);
def unapply[A, B](value : Pair[A, B]) = scala.Some(value).collectFirst { case scala.Tuple2(first_ : A, second_ : B) => (first_ : A, second_ : B) };
}


implicit class Pair_extend0[A, B](self_ : ff.core.Pair_.Pair[A, B]) {

def mapFirst_[C](body_ : Function1[A, C]) : ff.core.Pair_.Pair[C, B] = {
self_.copy(_1 = body_(self_._1))}; def first_ = { self_._1
}

def mapSecond_[C](body_ : Function1[B, C]) : ff.core.Pair_.Pair[A, C] = {
self_.copy(_2 = body_(self_._2))}; def second_ = { self_._2
}

def swap_() : ff.core.Pair_.Pair[B, A] = {
(self_._2, self_._1)
}

}


}
