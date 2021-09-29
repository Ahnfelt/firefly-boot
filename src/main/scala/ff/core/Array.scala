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
object Array_ {

type Array[T] = java.util.ArrayList[T];



def Array_addAll[T](self_ : ff.core.Array_.Array[T], that_ : ff.core.Array_.Array[T]) : ff.core.Array_.Array[T] = (self_, that_) match {
case (self_, _) =>
ff.core.Core_.panic_[ff.core.Array_.Array[T]](message_ = "magic")
}

def Array_isEmpty[T](self_ : ff.core.Array_.Array[T]) : ff.core.Bool_.Bool = {
self_.isEmpty()
}

def Array_size[T](self_ : ff.core.Array_.Array[T]) : ff.core.Int_.Int = {
self_.size()
}

def Array_expect[T](self_ : ff.core.Array_.Array[T], index_ : ff.core.Int_.Int) : T = {
self_.get(index_)
}

def Array_expectFirst[T](self_ : ff.core.Array_.Array[T]) : T = (self_) match {
case (self_) =>
ff.core.Array_.Array_expect[T](self_ = self_, index_ = 0)
}

def Array_expectLast[T](self_ : ff.core.Array_.Array[T]) : T = (self_) match {
case (self_) =>
ff.core.Array_.Array_expect[T](self_ = self_, index_ = (ff.core.Array_.Array_size[T](self_ = self_) - 1))
}

def Array_dropFirst[T](self_ : ff.core.Array_.Array[T], count_ : ff.core.Int_.Int = 1) : ff.core.Array_.Array[T] = {

            val r = new java.util.ArrayList[T](Math.max(0, self_.size() - count_))
            for(i <- count_.until(self_.size())) r.add(self_.get(i))
            r
        
}

def Array_dropLast[T](self_ : ff.core.Array_.Array[T], count_ : ff.core.Int_.Int = 1) : ff.core.Array_.Array[T] = {

            val r = new java.util.ArrayList[T](Math.max(0, self_.size() - count_))
            for(i <- 0.until(self_.size() - count_)) r.add(self_.get(i))
            r
        
}

def Array_update[T](self_ : ff.core.Array_.Array[T], index_ : ff.core.Int_.Int, body_ : Function1[T, T]) : ff.core.Array_.Array[T] = (self_, index_, body_) match {
case (self_, _, _) =>
ff.core.Core_.panic_[ff.core.Array_.Array[T]](message_ = "magic")
}

def Array_toList[T](self_ : ff.core.Array_.Array[T]) : ff.core.List_.List[T] = {

            import scala.collection.JavaConverters._
            self_.asScala.toList
        
}

def Array_join(self_ : ff.core.Array_.Array[ff.core.String_.String], separator_ : ff.core.String_.String = "") : ff.core.String_.String = (self_, separator_) match {
case (self_, _) =>
ff.core.Core_.panic_[ff.core.String_.String](message_ = "magic")
}


}
