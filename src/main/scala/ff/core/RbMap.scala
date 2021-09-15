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
object RbMap_ {

sealed abstract class RbMap[K, +V] extends Product with Serializable;

case class RbLeaf[K, V]() extends RbMap[K, V]
case class RbNode[K, V](isRed_ : ff.core.Bool_.Bool, left_ : ff.core.RbMap_.RbMap[K, V], key_ : K, value_ : V, right_ : ff.core.RbMap_.RbMap[K, V]) extends RbMap[K, V]


implicit class RbMap_extend0[K, V](self_ : ff.core.RbMap_.RbMap[K, V]) {

def size_() : ff.core.Int_.Int = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
0
case (ff.core.RbMap_.RbNode(_, l_, _, _, r_)) =>
((l_.size_() + 1) + r_.size_())
})
}

def pairs_() : ff.core.List_.List[ff.core.Pair_.Pair[K, V]] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
List()
case (ff.core.RbMap_.RbNode(_, l_, k_, v_, r_)) =>
((l_.pairs_() ++ List(ff.core.Pair_.Pair(k_, v_))) ++ r_.pairs_())
})
}

def get_(key_ : K) : ff.core.Option_.Option[V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.Option_.None()
case (ff.core.RbMap_.RbNode(_, l_, k_, _, _)) if ff.core.Core_.magicLess_(key_, k_) =>
l_.get_(key_)
case (ff.core.RbMap_.RbNode(_, _, k_, _, r_)) if ff.core.Core_.magicLess_(k_, key_) =>
r_.get_(key_)
case (ff.core.RbMap_.RbNode(_, _, _, v_, _)) =>
ff.core.Option_.Some(v_)
})
}

def add_(key_ : K, value_ : V) : ff.core.RbMap_.RbMap[K, V] = {
def go_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbLeaf(), key_, value_, ff.core.RbMap_.RbLeaf())
case (ff.core.RbMap_.RbNode(c_, l_, k_, v_, r_)) if ff.core.Core_.magicLess_(key_, k_) =>
ff.core.RbMap_.RbNode(c_, go_(l_), k_, v_, r_).balance_()
case (ff.core.RbMap_.RbNode(c_, l_, k_, v_, r_)) if ff.core.Core_.magicLess_(k_, key_) =>
ff.core.RbMap_.RbNode(c_, l_, k_, v_, go_(r_)).balance_()
case (ff.core.RbMap_.RbNode(c_, l_, _, _, r_)) =>
ff.core.RbMap_.RbNode(c_, l_, key_, value_, r_)
})
}
pipe_dot(go_(self_))({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), l_, k_, v_, r_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.False(), l_, k_, v_, r_)
case (n_) =>
n_
})
}

def remove_(key_ : K) : ff.core.RbMap_.RbMap[K, V] = {
def go_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
self_
case (ff.core.RbMap_.RbNode(_, _, k_, _, _)) if ff.core.Core_.magicLess_(key_, k_) =>
goLeft_(self_)
case (ff.core.RbMap_.RbNode(_, _, k_, _, _)) if ff.core.Core_.magicLess_(k_, key_) =>
goRight_(self_)
case (ff.core.RbMap_.RbNode(_, a_, _, _, b_)) =>
fuse_(a_, b_)
})
}
def goLeft_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
self_
case (ff.core.RbMap_.RbNode(_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, c_)) =>
balanceLeft_(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), go_(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_)), k2_, v2_, c_))
case (ff.core.RbMap_.RbNode(_, a_, k_, v_, b_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), go_(a_), k_, v_, b_)
})
}
def balanceLeft_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), k2_, v2_, c_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, c_)
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_))) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, c_)).balance_()
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_), k3_, v3_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), d_, k4_, v4_, e_)))) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k3_, v3_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), d_, k4_, v4_, e_)).balance_())
})
}
def goRight_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbLeaf()) =>
self_
case (ff.core.RbMap_.RbNode(_, a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_))) =>
balanceRight_(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, go_(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_))))
case (ff.core.RbMap_.RbNode(_, a_, k_, v_, b_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k_, v_, go_(b_))
})
}
def balanceRight_(self_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, c_))) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), b_, k2_, v2_, c_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, c_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), k2_, v2_, c_).balance_()
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k3_, v3_, d_)), k4_, v4_, e_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), k2_, v2_, c_).balance_(), k3_, v3_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), d_, k4_, v4_, e_))
})
}
def fuse_(x_ : ff.core.RbMap_.RbMap[K, V], y_ : ff.core.RbMap_.RbMap[K, V]) : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(ff.core.Pair_.Pair(x_, y_))({
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbLeaf(), a_)) =>
a_
case (ff.core.Pair_.Pair(a_, ff.core.RbMap_.RbLeaf())) =>
a_
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), c_, k2_, v2_, d_))) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), fuse_(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), c_), k2_, v2_, d_)
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k2_, v2_, d_))) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, fuse_(b_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k2_, v2_, d_)))
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), c_, k2_, v2_, d_))) =>
val e_ = fuse_(b_, c_);
pipe_dot(e_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), f_, k3_, v3_, g_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, f_), k3_, v3_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), g_, k2_, v2_, d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), _, _, _, _)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), e_, k2_, v2_, d_))
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.RbMap_.RbLeaf()
})
case (ff.core.Pair_.Pair(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k2_, v2_, d_))) =>
val e_ = fuse_(b_, c_);
pipe_dot(e_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), f_, k3_, v3_, g_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, f_), k3_, v3_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), g_, k2_, v2_, d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), _, _, _, _)) =>
balanceLeft_(ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), e_, k2_, v2_, d_)))
case (ff.core.RbMap_.RbLeaf()) =>
ff.core.RbMap_.RbLeaf()
})
})
}
pipe_dot(go_(self_))({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_)
case (n_) =>
n_
})
}

def balance_() : ff.core.RbMap_.RbMap[K, V] = {
pipe_dot(self_)({
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, b_), k2_, v2_, c_), k3_, v3_, d_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k3_, v3_, d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, c_)), k3_, v3_, d_)) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k3_, v3_, d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, c_), k3_, v3_, d_))) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k3_, v3_, d_))
case (ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), b_, k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.True(), c_, k3_, v3_, d_)))) =>
ff.core.RbMap_.RbNode(ff.core.Bool_.True(), ff.core.RbMap_.RbNode(ff.core.Bool_.False(), a_, k1_, v1_, b_), k2_, v2_, ff.core.RbMap_.RbNode(ff.core.Bool_.False(), c_, k3_, v3_, d_))
case (_) =>
self_
})
}

}


}
