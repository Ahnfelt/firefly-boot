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
object Array_ {

type Array[T] = java.util.ArrayList[T];



implicit class Array_extend0[T](self_ : ff.core.Array_.Array[T]) {

def getEmpty_() : ff.core.Bool_.Bool = {
self_.isEmpty()
}

def getSize_() : ff.core.Int_.Int = {
self_.size()
}

def expect_(index_ : ff.core.Int_.Int) : T = {
self_.get(index_)
}

def expectFirst_() : T = {
self_.expect_(0)
}

def expectLast_() : T = {
self_.expect_((self_.getSize_() - 1))
}

def dropFirst_(count_ : ff.core.Int_.Int = 1) : ff.core.Array_.Array[T] = {
val r = new java.util.ArrayList[T](Math.max(0, self_.size() - count_)); for(i <- count_.until(self_.size())) r.add(self_.get(i)); r
}

def dropLast_(count_ : ff.core.Int_.Int = 1) : ff.core.Array_.Array[T] = {
val r = new java.util.ArrayList[T](Math.max(0, self_.size() - count_)); for(i <- 0.until(self_.size() - count_)) r.add(self_.get(i)); r
}

def getList_() : ff.core.List_.List[T] = {
import scala.collection.JavaConverters._; self_.asScala.toList
}

}


}
