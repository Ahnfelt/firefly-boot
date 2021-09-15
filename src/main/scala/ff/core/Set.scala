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

case class Set[T](map_ : ff.core.Map_.Map[T, ff.core.Unit_.Unit])

def empty_[T]() : ff.core.Set_.Set[T] = {
ff.core.Set_.Set(ff.core.Map_.empty_())
}
implicit class Set_extend0[T](self_ : ff.core.Set_.Set[T]) {

def add_(value_ : T) : ff.core.Set_.Set[T] = {
ff.core.Set_.Set(self_.map_.add_(value_, ff.core.Unit_.Unit()))
}

def remove_(value_ : T) : ff.core.Set_.Set[T] = {
ff.core.Set_.Set(self_.map_.remove_(value_))
}

def contains_(value_ : T) : ff.core.Bool_.Bool = {
self_.map_.contains_(value_)
}

}


}
