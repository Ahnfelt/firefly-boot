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
object System_ {

type System = SystemArguments;


case class SystemArguments(array_ : ff.core.Array_.Array[ff.core.String_.String])


def System_arguments(self_ : ff.core.System_.System) : ff.core.List_.List[ff.core.String_.String] = {
Array_toList(self_.array_)
}

def System_files(self_ : ff.core.System_.System) : ff.core.FileSystem_.FileSystem = {
null
}


}
