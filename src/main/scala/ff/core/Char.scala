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
object Char_ {

type Char = scala.Char;



implicit class Char_extend0(self_ : ff.core.Char_.Char) {

def getIsLetter_() : ff.core.Bool_.Bool = {
self_.isLetter
}

def getIsUpper_() : ff.core.Bool_.Bool = {
self_.isUpper
}

def getIsLower_() : ff.core.Bool_.Bool = {
self_.isLower
}

}


}
