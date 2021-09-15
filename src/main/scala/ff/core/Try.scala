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
object Try_ {

type Try[+T] = scala.util.Try[T];



implicit class Try_extend0[T](self_ : ff.core.Try_.Try[T]) {

def else_(body_ : Function0[T]) : T = {
self_.getOrElse(body_())
}

}


}
