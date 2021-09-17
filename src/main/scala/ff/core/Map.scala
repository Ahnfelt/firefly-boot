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

import ff.core.RbMap_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object Map_ {

sealed abstract class Map[K, +V] { val redBlack_ : ff.core.RbMap_.RbMap[K, ff.core.Option_.Option[V]] };

case class MapOf[K, V](redBlack_ : ff.core.RbMap_.RbMap[K, ff.core.Option_.Option[V]]) extends Map[K, V]

def empty_[K, V]() : ff.core.Map_.Map[K, V] = {
ff.core.Map_.MapOf[K, V](redBlack_ = ff.core.RbMap_.RbLeaf[K, ff.core.Option_.Option[V]]())
}

def append_[K, V](self_ : ff.core.Map_.Map[K, V], that_ : ff.core.Map_.Map[K, V]) : ff.core.Map_.Map[K, V] = {
var result_ : ff.core.RbMap_.RbMap[K, ff.core.Option_.Option[V]] = self_.redBlack_;
ff.core.RbMap_.RbMap_each[K, ff.core.Option_.Option[V]](self_ = that_.redBlack_, body_ = {
case (k_, v_ @ (ff.core.Option_.Some(_))) =>
result_ = ff.core.RbMap_.RbMap_add[K, ff.core.Option_.Option[V]](self_ = result_, key_ = k_, value_ = v_);
ff.core.Unit_.Unit()
case (k_, ff.core.Option_.None()) =>
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Map_.MapOf[K, V](redBlack_ = result_)
}
def Map_add[K, V](self_ : ff.core.Map_.Map[K, V], key_ : K, value_ : V) : ff.core.Map_.Map[K, V] = (self_, key_, value_) match {
case (self_, _, _) =>
ff.core.Map_.MapOf[K, V](redBlack_ = ff.core.RbMap_.RbMap_add[K, ff.core.Option_.Option[V]](self_ = self_.redBlack_, key_ = key_, value_ = ff.core.Option_.Some[V](value_ = value_)))
}

    implicit class Map_plusPlus_implicit[K, V](self_ : Map[K, V]) { def ++(that_ : Map[K, V]) : Map[K, V] = append_(self_, that_) }
def Map_get[K, V](self_ : ff.core.Map_.Map[K, V], key_ : K) : ff.core.Option_.Option[V] = (self_, key_) match {
case (self_, _) =>
ff.core.Option_.Option_flatten[V](self_ = ff.core.RbMap_.RbMap_get[K, ff.core.Option_.Option[V]](self_ = self_.redBlack_, key_ = key_))
}

def Map_remove[K, V](self_ : ff.core.Map_.Map[K, V], key_ : K) : ff.core.Map_.Map[K, V] = (self_, key_) match {
case (self_, _) =>
ff.core.Map_.MapOf[K, V](redBlack_ = ff.core.RbMap_.RbMap_add[K, ff.core.Option_.Option[V]](self_ = self_.redBlack_, key_ = key_, value_ = ff.core.Option_.None[V]()))
}

def Map_pairs[K, V](self_ : ff.core.Map_.Map[K, V]) : ff.core.List_.List[ff.core.Pair_.Pair[K, V]] = (self_) match {
case (self_) =>
ff.core.List_.List_flatMap[ff.core.Pair_.Pair[K, ff.core.Option_.Option[V]], ff.core.Pair_.Pair[K, V]](self_ = ff.core.RbMap_.RbMap_pairs[K, ff.core.Option_.Option[V]](self_ = self_.redBlack_), body_ = {
case (ff.core.Pair_.Pair(k_, ff.core.Option_.Some(v_))) =>
List(ff.core.Pair_.Pair[K, V](first_ = k_, second_ = v_))
case (ff.core.Pair_.Pair(k_, ff.core.Option_.None())) =>
List()
})
}

def Map_getSize[K, V](self_ : ff.core.Map_.Map[K, V]) : ff.core.Int_.Int = (self_) match {
case (self_) =>
ff.core.RbMap_.RbMap_size[K, ff.core.Option_.Option[V]](self_ = self_.redBlack_)
}

def Map_map[K, V, K1, V1](self_ : ff.core.Map_.Map[K, V], body_ : Function1[ff.core.Pair_.Pair[K, V], ff.core.Pair_.Pair[K1, V1]]) : ff.core.Map_.Map[K1, V1] = (self_, body_) match {
case (self_, _) =>
val initial_ : ff.core.Map_.Map[K1, V1] = ff.core.Map_.MapOf[K1, V1](redBlack_ = ff.core.RbMap_.RbLeaf[K1, ff.core.Option_.Option[V1]]());
ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[K, V], ff.core.Map_.Map[K1, V1]](self_ = ff.core.Map_.Map_pairs[K, V](self_ = self_), initial_ = initial_)({(tree_, pair_) =>
pipe_dot(body_(pair_))({
case (ff.core.Pair_.Pair(k_, v_)) =>
ff.core.Map_.Map_add[K1, V1](self_ = tree_, key_ = k_, value_ = v_)
})
})
}

def Map_contains[K, V](self_ : ff.core.Map_.Map[K, V], key_ : K) : ff.core.Bool_.Bool = (self_, key_) match {
case (self_, _) =>
(!ff.core.Option_.Option_getEmpty[V](self_ = ff.core.Map_.Map_get[K, V](self_ = self_, key_ = key_)))
}

def Map_expect[K, V](self_ : ff.core.Map_.Map[K, V], key_ : K) : V = (self_, key_) match {
case (self_, _) =>
ff.core.Option_.Option_expect[V](self_ = ff.core.Map_.Map_get[K, V](self_ = self_, key_ = key_))
}

def Map_updateOrInsert[K, V](self_ : ff.core.Map_.Map[K, V], key_ : K, update_ : Function1[V, V], default_ : Function0[V]) : ff.core.Map_.Map[K, V] = (self_, key_, update_, default_) match {
case (self_, _, _, _) =>
pipe_dot(ff.core.Map_.Map_get[K, V](self_ = self_, key_ = key_))({
case (ff.core.Option_.None()) =>
ff.core.Map_.Map_add[K, V](self_ = self_, key_ = key_, value_ = default_())
case (ff.core.Option_.Some(v_)) =>
ff.core.Map_.Map_add[K, V](self_ = self_, key_ = key_, value_ = update_(v_))
})
}

def Map_addToList[K, V](self_ : ff.core.Map_.Map[K, ff.core.List_.List[V]], key_ : K, value_ : V) : ff.core.Map_.Map[K, ff.core.List_.List[V]] = (self_, key_, value_) match {
case (self_, _, _) =>
ff.core.Map_.Map_updateOrInsert[K, ff.core.List_.List[V]](self_ = self_, key_ = key_, update_ = {(_w1) =>
(List(List(value_), _w1).flatten)
}, default_ = {() =>
List(value_)
})
}


}
