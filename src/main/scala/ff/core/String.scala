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
object String_ {

type String = java.lang.String;



implicit class String_extend0(self_ : ff.core.String_.String) {

def getSize_() : ff.core.Int_.Int = {
self_.size
}

def expect_(index_ : ff.core.Int_.Int) : ff.core.Char_.Char = {
self_(index_)
}

def replace_(needle_ : ff.core.String_.String, replacement_ : ff.core.String_.String) : ff.core.String_.String = {
self_.replaceAllLiterally(needle_, replacement_)
}

def replaceFirst_(needle_ : ff.core.String_.String, replacement_ : ff.core.String_.String) : ff.core.String_.String = {
self_.replaceFirst(scala.util.matching.Regex.quote(needle_), replacement_)
}

def getReverse_() : ff.core.String_.String = {
self_.reverse
}

def dropWhile_(p_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.String_.String = {
self_.dropWhile(p_)
}

def takeWhile_(p_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.String_.String = {
self_.takeWhile(p_)
}

def slice_(from_ : ff.core.Int_.Int, until_ : ff.core.Int_.Int) : ff.core.String_.String = {
self_.slice(from_, until_)
}

def sliceEquals_(offset_ : ff.core.Int_.Int, that_ : ff.core.String_.String, thatOffset_ : ff.core.Int_.Int, length_ : ff.core.Int_.Int, ignoreCase_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.Bool_.Bool = {
self_.regionMatches(ignoreCase_, offset_, that_, thatOffset_, length_)
}

def split_(char_ : ff.core.Char_.Char) : ff.core.Array_.Array[ff.core.String_.String] = {
self_.split(char_).toList.getArray_()
}

def dropFirst_(count_ : ff.core.Int_.Int = 1) : ff.core.String_.String = {
self_.drop(count_)
}

def dropLast_(count_ : ff.core.Int_.Int = 1) : ff.core.String_.String = {
self_.dropRight(count_)
}

def expectInt_() : ff.core.Int_.Int = {
self_.toInt
}

def first_() : ff.core.Option_.Option[ff.core.Char_.Char] = {
self_.headOption
}

def last_() : ff.core.Option_.Option[ff.core.Char_.Char] = {
self_.lastOption
}

def expectFirst_() : ff.core.Char_.Char = {
self_.head
}

def expectLast_() : ff.core.Char_.Char = {
self_.last
}

def contains_(substring_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
self_.contains(substring_)
}

def startsWith_(prefix_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
self_.startsWith(prefix_)
}

def any_(p_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
self_.exists(p_)
}

def all_(p_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
self_.forall(p_)
}

}


}
