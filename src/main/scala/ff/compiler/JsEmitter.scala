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
object JsEmitter_ {



def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}

def emitModule_(packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], module_ : ff.compiler.Syntax_.Module) : ff.core.String_.String = {
(ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DImport, ff.core.String_.String](self_ = ff.core.List_.List_sortBy[ff.compiler.Syntax_.DImport](self_ = module_.imports_, body_ = {(i_) =>
((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
}), body_ = {(i_) =>
((((((((((((("import * as " + i_.package_.first_) + "_") + i_.package_.second_) + "_") + i_.file_) + " ") + "from \"../../") + i_.package_.first_) + "/") + i_.package_.second_) + "/") + i_.file_) + ".js\"")
}), separator_ = "\n") + "// TODO: JavaScript goes here")
}



}
