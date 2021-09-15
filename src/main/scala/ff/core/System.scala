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
object System_ {

type System = SystemArguments;


case class SystemArguments(array_ : ff.core.Array_.Array[ff.core.String_.String])


implicit class System_extend0(self_ : ff.core.System_.System) {

def arguments_() : ff.core.List_.List[ff.core.String_.String] = {
self_.array_.getList_
}

def files_() : ff.core.FileSystem_.FileSystem = {
null
}

}


}
