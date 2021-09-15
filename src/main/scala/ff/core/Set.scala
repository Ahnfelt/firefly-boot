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
object Set_ {

type Set[T] = scala.collection.immutable.Set[T];



implicit class Set_extend0[T](self_ : ff.core.Set_.Set[T]) {

def add_(value_ : T) : ff.core.Set_.Set[T] = {
self_ + value_
}

def remove_(value_ : T) : ff.core.Set_.Set[T] = {
self_ - value_
}

def contains_(value_ : T) : ff.core.Bool_.Bool = {
self_.contains(value_)
}

}


}
