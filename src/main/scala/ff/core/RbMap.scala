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
object RbMap_ {

sealed abstract class RbMap[K, +V] extends Product with Serializable;

case class RbLeaf[K, V]() extends RbMap[K, V]
case class RbNode[K, V](isRed_ : ff.core.Bool_.Bool, left_ : ff.core.RbMap_.RbMap[K, V], key_ : K, value_ : V, right_ : ff.core.RbMap_.RbMap[K, V]) extends RbMap[K, V]


def RbMap_size[K, V](self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.Int_.Int = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
0
case (ff.core.RbMap_.RbNode(_, l_, _, _, r_)) =>
((ff.core.RbMap_.RbMap_size[K, V](self_ = l_) + 1) + ff.core.RbMap_.RbMap_size[K, V](self_ = r_))
})
}

def RbMap_pairs[K, V](self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.List_.List[ff.core.Pair_.Pair[K, V]] = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
List()
case (ff.core.RbMap_.RbNode(_, l_, k_, v_, r_)) =>
ff.core.List_.List_addAll[ff.core.Pair_.Pair[K, V]](self_ = ff.core.List_.List_addAll[ff.core.Pair_.Pair[K, V]](self_ = ff.core.RbMap_.RbMap_pairs[K, V](self_ = l_), list_ = List(ff.core.Pair_.Pair[K, V](first_ = k_, second_ = v_))), list_ = ff.core.RbMap_.RbMap_pairs[K, V](self_ = r_))
})
}

def RbMap_each[K, V](self_ : ff.core.RbMap_.RbMap[K, V], body_ : Function2[K, V, ff.core.Unit_.Unit]) : ff.core.Unit_.Unit = (self_, body_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.Unit_.Unit()
case (ff.core.RbMap_.RbNode(_, l_, k_, v_, r_)) =>
ff.core.RbMap_.RbMap_each[K, V](self_ = l_, body_ = body_);
body_(k_, v_);
ff.core.RbMap_.RbMap_each[K, V](self_ = r_, body_ = body_)
});
ff.core.Unit_.Unit()
}

def RbMap_get[K, V](self_ : ff.core.RbMap_.RbMap[K, V], key_ : K) : ff.core.Option_.Option[V] = (self_, key_) match {
case (self_, _) =>
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.Option_.None[V]()
case (ff.core.RbMap_.RbNode(_, l_, k_, _, _)) if ff.core.Core_.magicLess_[K](x_ = key_, y_ = k_) =>
ff.core.RbMap_.RbMap_get[K, V](self_ = l_, key_ = key_)
case (ff.core.RbMap_.RbNode(_, _, k_, _, r_)) if ff.core.Core_.magicLess_[K](x_ = k_, y_ = key_) =>
ff.core.RbMap_.RbMap_get[K, V](self_ = r_, key_ = key_)
case (ff.core.RbMap_.RbNode(_, _, _, v_, _)) =>
ff.core.Option_.Some[V](value_ = v_)
})
}

def RbMap_add[K, V](self_ : ff.core.RbMap_.RbMap[K, V], key_ : K, value_ : V) : ff.core.RbMap_.RbMap[K, V] = (self_, key_, value_) match {
case (self_, _, _) =>
def go_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbLeaf[K, V](), key_ = key_, value_ = value_, right_ = ff.core.RbMap_.RbLeaf[K, V]())
case (ff.core.RbMap_.RbNode(c_, l_, k_, v_, r_)) if ff.core.Core_.magicLess_[K](x_ = key_, y_ = k_) =>
ff.core.RbMap_.RbMap_balance[K, V](self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = c_, left_ = go_(self_ = l_), key_ = k_, value_ = v_, right_ = r_))
case (ff.core.RbMap_.RbNode(c_, l_, k_, v_, r_)) if ff.core.Core_.magicLess_[K](x_ = k_, y_ = key_) =>
ff.core.RbMap_.RbMap_balance[K, V](self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = c_, left_ = l_, key_ = k_, value_ = v_, right_ = go_(self_ = r_)))
case (ff.core.RbMap_.RbNode(c_, l_, _, _, r_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = c_, left_ = l_, key_ = key_, value_ = value_, right_ = r_)
})
}
pipe_dot(go_(self_ = self_))({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), l_, k_, v_, r_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = l_, key_ = k_, value_ = v_, right_ = r_)
case (n_) =>
n_
})
}

def RbMap_remove[K, V](self_ : ff.core.RbMap_.RbMap[K, V], key_ : K) : ff.core.RbMap_.RbMap[K, V] = (self_, key_) match {
case (self_, _) =>
def go_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
self_
case (ff.core.RbMap_.RbNode(_, _, k_, _, _)) if ff.core.Core_.magicLess_[K](x_ = key_, y_ = k_) =>
goLeft_(self_ = self_)
case (ff.core.RbMap_.RbNode(_, _, k_, _, _)) if ff.core.Core_.magicLess_[K](x_ = k_, y_ = key_) =>
goRight_(self_ = self_)
case (ff.core.RbMap_.RbNode(_, a_, _, _, b_)) =>
fuse_(x_ = a_, y_ = b_)
})
}
def goLeft_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
self_
case (ff.core.RbMap_.RbNode(_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, c_)) =>
balanceLeft_(self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = go_(self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_)), key_ = k2_, value_ = v2_, right_ = c_))
case (ff.core.RbMap_.RbNode(_, a_, k_, v_, b_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = go_(self_ = a_), key_ = k_, value_ = v_, right_ = b_)
})
}
def balanceLeft_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), k2_, v2_, c_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = c_)
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_))) =>
ff.core.RbMap_.RbMap_balance[K, V](self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = b_, key_ = k2_, value_ = v2_, right_ = c_)))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_), k3_, v3_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), d_, k4_, v4_, e_)))) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = ff.core.RbMap_.RbMap_balance[K, V](self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = c_, key_ = k3_, value_ = v3_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = d_, key_ = k4_, value_ = v4_, right_ = e_))))
})
}
def goRight_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
self_
case (ff.core.RbMap_.RbNode(_, a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_))) =>
balanceRight_(self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = go_(self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = b_, key_ = k2_, value_ = v2_, right_ = c_))))
case (ff.core.RbMap_.RbNode(_, a_, k_, v_, b_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k_, value_ = v_, right_ = go_(self_ = b_))
})
}
def balanceRight_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, c_))) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k1_, value_ = v1_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = b_, key_ = k2_, value_ = v2_, right_ = c_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, c_)) =>
ff.core.RbMap_.RbMap_balance[K, V](self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = c_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k3_, v3_, d_)), k4_, v4_, e_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbMap_balance[K, V](self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = c_)), key_ = k3_, value_ = v3_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = d_, key_ = k4_, value_ = v4_, right_ = e_))
})
}
def fuse_(x_ : ff.core.RbMap_.RbMap[K, V], y_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(ff.core.Pair_.Pair[ff.core.RbMap_.RbMap[K, V], ff.core.RbMap_.RbMap[K, V]](first_ = x_, second_ = y_))({
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbLeaf(), a_)) =>
a_
case (ff.core.Pair_.Pair(a_, ff.core.RbMap_.RbLeaf())) =>
a_
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), c_, k2_, v2_, d_))) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = fuse_(x_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), y_ = c_), key_ = k2_, value_ = v2_, right_ = d_)
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k2_, v2_, d_))) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k1_, value_ = v1_, right_ = fuse_(x_ = b_, y_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = c_, key_ = k2_, value_ = v2_, right_ = d_)))
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), c_, k2_, v2_, d_))) =>
val e_ : ff.core.RbMap_.RbMap[K, V] = fuse_(x_ = b_, y_ = c_);
pipe_dot(e_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), f_, k3_, v3_, g_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k1_, value_ = v1_, right_ = f_), key_ = k3_, value_ = v3_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = g_, key_ = k2_, value_ = v2_, right_ = d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), _, _, _, _)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k1_, value_ = v1_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = e_, key_ = k2_, value_ = v2_, right_ = d_))
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.RbMap_.RbLeaf[K, V]()
})
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k2_, v2_, d_))) =>
val e_ : ff.core.RbMap_.RbMap[K, V] = fuse_(x_ = b_, y_ = c_);
pipe_dot(e_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), f_, k3_, v3_, g_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = a_, key_ = k1_, value_ = v1_, right_ = f_), key_ = k3_, value_ = v3_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = g_, key_ = k2_, value_ = v2_, right_ = d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), _, _, _, _)) =>
balanceLeft_(self_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = e_, key_ = k2_, value_ = v2_, right_ = d_)))
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.RbMap_.RbLeaf[K, V]()
})
})
}
pipe_dot(go_(self_ = self_))({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_)
case (n_) =>
n_
})
}

def RbMap_balance[K, V](self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), k2_, v2_, c_), k3_, v3_, d_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = c_, key_ = k3_, value_ = v3_, right_ = d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, c_)), k3_, v3_, d_)) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = c_, key_ = k3_, value_ = v3_, right_ = d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, c_), k3_, v3_, d_))) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = c_, key_ = k3_, value_ = v3_, right_ = d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), c_, k3_, v3_, d_)))) =>
ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.True(), left_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = a_, key_ = k1_, value_ = v1_, right_ = b_), key_ = k2_, value_ = v2_, right_ = ff.core.RbMap_.RbNode[K, V](isRed_ = ff.core.Bool_.False(), left_ = c_, key_ = k3_, value_ = v3_, right_ = d_))
case (_) =>
self_
})
}


}
