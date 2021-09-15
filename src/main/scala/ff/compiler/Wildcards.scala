package ff.compiler
import ff.compiler.Syntax_._

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
object Wildcards_ {

case class Wildcards(var seenWildcards_ : ff.core.Int_.Int)

def make_() : ff.compiler.Wildcards_.Wildcards = {
ff.compiler.Wildcards_.Wildcards(0)
}
implicit class Wildcards_extend0(self_ : ff.compiler.Wildcards_.Wildcards) {

def fixWildcards_(term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (term_) match {
case (e_ : ff.compiler.Syntax_.ELet) =>
e_.copy(value_ = self_.fixWildcards_(e_.value_), body_ = self_.fixWildcards_(e_.body_))
case (e_ : ff.compiler.Syntax_.ESequential) =>
e_.copy(before_ = self_.fixWildcards_(e_.before_), after_ = self_.fixWildcards_(e_.after_))
case (e_ : ff.compiler.Syntax_.EAssign) =>
e_.copy(value_ = self_.fixWildcards_(e_.value_))
case (e_ : ff.compiler.Syntax_.EAssignField) =>
e_.copy(record_ = self_.fixWildcards_(e_.record_), value_ = self_.fixWildcards_(e_.value_))
case (e_ : ff.compiler.Syntax_.EPipe) =>
e_.copy(value_ = self_.fixWildcards_(e_.value_), function_ = self_.fixWildcards_(e_.function_))
case (e_ : ff.compiler.Syntax_.ECall) =>
e_.copy(function_ = self_.fixWildcards_(e_.function_), arguments_ = e_.arguments_.map_({(a_) =>
a_.copy(value_ = self_.fixWildcards_(a_.value_))
}))
case (e_ : ff.compiler.Syntax_.EList) =>
e_.copy(items_ = e_.items_.map_({
case (ff.core.Pair_.Pair(item_, spread_)) =>
ff.core.Pair_.Pair(self_.fixWildcards_(item_), spread_)
}))
case (e_ : ff.compiler.Syntax_.ECopy) =>
e_.copy(record_ = self_.fixWildcards_(e_.record_), arguments_ = e_.arguments_.map_({(a_) =>
a_.copy(value_ = self_.fixWildcards_(a_.value_))
}))
case (e_ : ff.compiler.Syntax_.EVariant) =>
e_.copy(arguments_ = e_.arguments_.map_({(_w1) =>
_w1.map_({(a_) =>
a_.copy(value_ = self_.fixWildcards_(a_.value_))
})
}))
case (e_ : ff.compiler.Syntax_.ERecord) =>
e_.copy(fields_ = e_.fields_.map_({(a_) =>
a_.copy(value_ = self_.fixWildcards_(a_.value_))
}))
case (e_ : ff.compiler.Syntax_.EField) =>
e_.copy(record_ = self_.fixWildcards_(e_.record_))
case (e_ : ff.compiler.Syntax_.EWildcard) =>
self_.seenWildcards_ += 1;
e_.copy(index_ = self_.seenWildcards_)
case (_) =>
term_
}

}


}
