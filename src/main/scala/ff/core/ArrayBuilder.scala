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
object ArrayBuilder_ {

type ArrayBuilder[T] = scala.collection.mutable.ArrayBuffer[T];


def empty_[T]() : ff.core.ArrayBuilder_.ArrayBuilder[T] = {
scala.collection.mutable.ArrayBuffer[T]()
}
implicit class ArrayBuilder_extend0[T](self_ : ff.core.ArrayBuilder_.ArrayBuilder[T]) {

def getArray_() : ff.core.Array_.Array[T] = {
val r = new java.util.ArrayList[T](self_.length); for(i <- 0.until(self_.length)) r.add(self_(i)); r
}

def getEmpty_() : ff.core.Bool_.Bool = {
self_.isEmpty
}

def getSize_() : ff.core.Int_.Int = {
self_.size
}

def append_(value_ : T) : ff.core.Unit_.Unit = {
self_.append(value_)
}

def modify_(index_ : ff.core.Int_.Int, body_ : Function1[T, T]) : ff.core.Unit_.Unit = {
self_.update(index_, body_(self_(index_)))
}

def drain_() : ff.core.Array_.Array[T] = {
val result =(self_.getArray_()); self_.clear(); result
}

def getList_() : ff.core.List_.List[T] = {
self_.toList
}

def getLast_() : ff.core.Option_.Option[T] = {
self_.lastOption
}

def expectLast_() : T = {
self_.last
}

}


}
