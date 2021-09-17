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

import ff.core.Nothing_._

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
ff.compiler.Wildcards_.Wildcards(seenWildcards_ = 0)
}
def Wildcards_fixWildcards(self_ : ff.compiler.Wildcards_.Wildcards, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, term_) match {
case (self_, e_ : ff.compiler.Syntax_.ELet) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ELet(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = _c.valueType_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.value_), body_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.body_))
})
case (self_, e_ : ff.compiler.Syntax_.ESequential) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ESequential(at_ = _c.at_, before_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.before_), after_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.after_))
})
case (self_, e_ : ff.compiler.Syntax_.EAssign) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EAssign(at_ = _c.at_, operator_ = _c.operator_, variable_ = _c.variable_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.value_))
})
case (self_, e_ : ff.compiler.Syntax_.EAssignField) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EAssignField(at_ = _c.at_, operator_ = _c.operator_, record_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.record_), field_ = _c.field_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.value_))
})
case (self_, e_ : ff.compiler.Syntax_.EPipe) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EPipe(at_ = _c.at_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.value_), function_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.function_))
})
case (self_, e_ : ff.compiler.Syntax_.ECall) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.function_), typeArguments_ = _c.typeArguments_, arguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Argument](self_ = e_.arguments_, body_ = {(a_) =>
pipe_dot(a_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = a_.value_))
})
}))
})
case (self_, e_ : ff.compiler.Syntax_.EList) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EList(at_ = _c.at_, elementType_ = _c.elementType_, items_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool], ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]](self_ = e_.items_, body_ = {
case (ff.core.Pair_.Pair(item_, spread_)) =>
ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool](first_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = item_), second_ = spread_)
}))
})
case (self_, e_ : ff.compiler.Syntax_.ECopy) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECopy(at_ = _c.at_, name_ = _c.name_, record_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.record_), arguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Field](self_ = e_.arguments_, body_ = {(a_) =>
pipe_dot(a_)({(_c) =>
ff.compiler.Syntax_.Field(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = a_.value_))
})
}))
})
case (self_, e_ : ff.compiler.Syntax_.EVariant) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EVariant(at_ = _c.at_, name_ = _c.name_, typeArguments_ = _c.typeArguments_, arguments_ = ff.core.Option_.Option_map[ff.core.List_.List[ff.compiler.Syntax_.Argument], ff.core.List_.List[ff.compiler.Syntax_.Argument]](self_ = e_.arguments_, body_ = {(_w1) =>
ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Argument](self_ = _w1, body_ = {(a_) =>
pipe_dot(a_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = a_.value_))
})
})
}))
})
case (self_, e_ : ff.compiler.Syntax_.ERecord) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ERecord(at_ = _c.at_, fields_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Field](self_ = e_.fields_, body_ = {(a_) =>
pipe_dot(a_)({(_c) =>
ff.compiler.Syntax_.Field(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = a_.value_))
})
}))
})
case (self_, e_ : ff.compiler.Syntax_.EField) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EField(at_ = _c.at_, record_ = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = self_, term_ = e_.record_), field_ = _c.field_)
})
case (self_, e_ : ff.compiler.Syntax_.EWildcard) =>
self_.seenWildcards_ += 1;
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EWildcard(at_ = _c.at_, index_ = self_.seenWildcards_)
})
case (self_, _) =>
term_
}


}
