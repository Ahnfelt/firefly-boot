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
object Int_ {

type Int = scala.Int;



def Int_getTo(self_ : ff.core.Int_.Int, inclusive_ : ff.core.Int_.Int) : ff.core.List_.List[ff.core.Int_.Int] = {
self_.to(inclusive_).toList
}

def Int_getUntil(self_ : ff.core.Int_.Int, exclusive_ : ff.core.Int_.Int) : ff.core.List_.List[ff.core.Int_.Int] = {
self_.until(exclusive_).toList
}

def Int_getAbs(self_ : ff.core.Int_.Int) : ff.core.Int_.Int = {
self_.abs
}


}
