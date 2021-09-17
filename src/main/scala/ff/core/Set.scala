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
object Set_ {

case class Set[T](map_ : ff.core.Map_.Map[T, ff.core.Unit_.Unit])

def empty_[T]() : ff.core.Set_.Set[T] = {
ff.core.Set_.Set[T](map_ = ff.core.Map_.empty_[T, ff.core.Unit_.Unit]())
}
def Set_add[T](self_ : ff.core.Set_.Set[T], value_ : T) : ff.core.Set_.Set[T] = (self_, value_) match {
case (self_, _) =>
ff.core.Set_.Set[T](map_ = ff.core.Map_.Map_add[T, ff.core.Unit_.Unit](self_ = self_.map_, key_ = value_, value_ = ff.core.Unit_.Unit()))
}

def Set_remove[T](self_ : ff.core.Set_.Set[T], value_ : T) : ff.core.Set_.Set[T] = (self_, value_) match {
case (self_, _) =>
ff.core.Set_.Set[T](map_ = ff.core.Map_.Map_remove[T, ff.core.Unit_.Unit](self_ = self_.map_, key_ = value_))
}

def Set_contains[T](self_ : ff.core.Set_.Set[T], value_ : T) : ff.core.Bool_.Bool = (self_, value_) match {
case (self_, _) =>
ff.core.Map_.Map_contains[T, ff.core.Unit_.Unit](self_ = self_.map_, key_ = value_)
}


}
