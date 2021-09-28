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
object ArrayBuilder_ {

type ArrayBuilder[T] = scala.collection.mutable.ArrayBuffer[T];


def empty_[T]() : ff.core.ArrayBuilder_.ArrayBuilder[T] = {
scala.collection.mutable.ArrayBuffer[T]()
}
def ArrayBuilder_toArray[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) : ff.core.Array_.Array[T] = {
val r = new java.util.ArrayList[T](self_.length); for(i <- 0.until(self_.length)) r.add(self_(i)); r
}

def ArrayBuilder_isEmpty[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) : ff.core.Bool_.Bool = {
self_.isEmpty
}

def ArrayBuilder_size[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) : ff.core.Int_.Int = {
self_.size
}

def ArrayBuilder_append[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T], value_ : T) : ff.core.Unit_.Unit = {
self_.append(value_)
}

def ArrayBuilder_modify[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T], index_ : ff.core.Int_.Int, body_ : Function1[T, T]) : ff.core.Unit_.Unit = {
self_.update(index_, body_(self_(index_)))
}

def ArrayBuilder_drain[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) : ff.core.Array_.Array[T] = {
val result = ArrayBuilder_toArray(self_); self_.clear(); result
}

def ArrayBuilder_toList[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) : ff.core.List_.List[T] = {
self_.toList
}

def ArrayBuilder_last[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) : ff.core.Option_.Option[T] = {
self_.lastOption
}

def ArrayBuilder_expectLast[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) : T = {
self_.last
}


}
