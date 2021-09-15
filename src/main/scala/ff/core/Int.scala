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
object Int_ {

type Int = scala.Int;



implicit class Int_extend0(self_ : ff.core.Int_.Int) {

def getTo_(inclusive_ : ff.core.Int_.Int) : ff.core.List_.List[ff.core.Int_.Int] = {
self_.to(inclusive_).toList
}

def getUntil_(exclusive_ : ff.core.Int_.Int) : ff.core.List_.List[ff.core.Int_.Int] = {
self_.until(exclusive_).toList
}

def getAbs_() : ff.core.Int_.Int = {
self_.abs
}

}


}
