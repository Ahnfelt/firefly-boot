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
object Map_ {

type Map[K, +V] = scala.collection.immutable.Map[K, V];


def empty_[K, V]() : ff.core.Map_.Map[K, V] = {
scala.collection.immutable.Map()
}
implicit class Map_extend0[K, V](self_ : ff.core.Map_.Map[K, V]) {

def pairs_() : ff.core.List_.List[ff.core.Pair_.Pair[K, V]] = {
self_.toList
}

def getSize_() : ff.core.Int_.Int = {
self_.size
}

def get_(key_ : K) : ff.core.Option_.Option[V] = {
self_.get(key_)
}

def expect_(key_ : K) : V = {
self_(key_)
}

def add_(key_ : K, value_ : V) : ff.core.Map_.Map[K, V] = {
self_ + ((key_, value_))
}

def remove_(key_ : K) : ff.core.Map_.Map[K, V] = {
self_ - key_
}

def map_[K1, V1](body_ : Function1[ff.core.Pair_.Pair[K, V], ff.core.Pair_.Pair[K1, V1]]) : ff.core.Map_.Map[K1, V1] = {
self_.map(body_)
}

def contains_(key_ : K) : ff.core.Bool_.Bool = {
self_.contains(key_)
}

def updateOrInsert_(key_ : K, update_ : Function1[V, V], default_ : Function0[V]) : ff.core.Map_.Map[K, V] = {
pipe_dot(self_.get_(key_))({
case (ff.core.Option_.None()) =>
self_.add_(key_, default_())
case (ff.core.Option_.Some(v_)) =>
self_.add_(key_, update_(v_))
})
}

}

implicit class Map_extend1[K, V](self_ : ff.core.Map_.Map[K, ff.core.List_.List[V]]) {

def addToList_(key_ : K, value_ : V) : ff.core.Map_.Map[K, ff.core.List_.List[V]] = {
self_.updateOrInsert_(key_, {(_w1) =>
(List(List(value_), _w1).flatten)
}, {() =>
List(value_)
})
}

}


}
