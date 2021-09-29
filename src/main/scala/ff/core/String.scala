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
object String_ {

type String = java.lang.String;



def String_size(self_ : ff.core.String_.String) : ff.core.Int_.Int = {
self_.size
}

def String_expect(self_ : ff.core.String_.String, index_ : ff.core.Int_.Int) : ff.core.Char_.Char = {
self_(index_)
}

def String_replace(self_ : ff.core.String_.String, needle_ : ff.core.String_.String, replacement_ : ff.core.String_.String) : ff.core.String_.String = {
self_.replaceAllLiterally(needle_, replacement_)
}

def String_replaceFirst(self_ : ff.core.String_.String, needle_ : ff.core.String_.String, replacement_ : ff.core.String_.String) : ff.core.String_.String = {
self_.replaceFirst(scala.util.matching.Regex.quote(needle_), replacement_)
}

def String_reverse(self_ : ff.core.String_.String) : ff.core.String_.String = {
self_.reverse
}

def String_dropWhile(self_ : ff.core.String_.String, p_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.String_.String = {
self_.dropWhile(p_)
}

def String_takeWhile(self_ : ff.core.String_.String, p_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.String_.String = {
self_.takeWhile(p_)
}

def String_slice(self_ : ff.core.String_.String, from_ : ff.core.Int_.Int, until_ : ff.core.Int_.Int) : ff.core.String_.String = {
self_.slice(from_, until_)
}

def String_split(self_ : ff.core.String_.String, char_ : ff.core.Char_.Char) : ff.core.Array_.Array[ff.core.String_.String] = {
List_toArray(self_.split(char_).toList)
}

def String_dropFirst(self_ : ff.core.String_.String, count_ : ff.core.Int_.Int = 1) : ff.core.String_.String = {
self_.drop(count_)
}

def String_dropLast(self_ : ff.core.String_.String, count_ : ff.core.Int_.Int = 1) : ff.core.String_.String = {
self_.dropRight(count_)
}

def String_expectInt(self_ : ff.core.String_.String) : ff.core.Int_.Int = {
self_.toInt
}

def String_first(self_ : ff.core.String_.String) : ff.core.Option_.Option[ff.core.Char_.Char] = {
self_.headOption
}

def String_last(self_ : ff.core.String_.String) : ff.core.Option_.Option[ff.core.Char_.Char] = {
self_.lastOption
}

def String_expectFirst(self_ : ff.core.String_.String) : ff.core.Char_.Char = {
self_.head
}

def String_expectLast(self_ : ff.core.String_.String) : ff.core.Char_.Char = {
self_.last
}

def String_contains(self_ : ff.core.String_.String, substring_ : ff.core.String_.String) : ff.core.Bool_.Bool = {
self_.contains(substring_)
}

def String_startsWith(self_ : ff.core.String_.String, prefix_ : ff.core.String_.String, offset_ : ff.core.Int_.Int = 0) : ff.core.Bool_.Bool = {

            if(offset_ == 0) self_.startsWith(prefix_)
            else self_.regionMatches(false, offset_, prefix_, 0, prefix_.size)
        
}

def String_any(self_ : ff.core.String_.String, body_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
self_.exists(body_)
}

def String_all(self_ : ff.core.String_.String, body_ : Function1[ff.core.Char_.Char, ff.core.Bool_.Bool]) : ff.core.Bool_.Bool = {
self_.forall(body_)
}


}
