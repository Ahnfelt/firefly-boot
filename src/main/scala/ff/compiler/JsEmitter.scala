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
val parts_ : ff.core.List_.List[ff.core.List_.List[ff.core.String_.String]] = List(ff.core.List_.List_map[ff.compiler.Syntax_.DImport, ff.core.String_.String](self_ = ff.core.List_.List_sortBy[ff.compiler.Syntax_.DImport](self_ = module_.imports_, body_ = {(i_) =>
((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
}), body_ = {(_w1) =>
ff.compiler.JsEmitter_.emitImportDefinition_(definition_ = _w1)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = module_.functions_, body_ = {(_w1) =>
("export " + ff.compiler.JsEmitter_.emitFunctionDefinition_(definition_ = _w1, suffix_ = ""))
}), ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.core.String_.String](self_ = module_.extends_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.emitExtendsDefinition_(definition_ = _w1)
}), List(("// TODO: JavaScript goes here" + "\n\n")));
(ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.List_.List[ff.core.String_.String], ff.core.String_.String](self_ = parts_, body_ = {(_w1) =>
ff.core.List_.List_join(self_ = _w1, separator_ = "\n\n")
}), separator_ = "\n\n") + "\n")
}

def emitImportDefinition_(definition_ : ff.compiler.Syntax_.DImport) : ff.core.String_.String = {
((((((((((((("import * as " + definition_.package_.first_) + "_") + definition_.package_.second_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.first_) + "/") + definition_.package_.second_) + "/") + definition_.file_) + ".js\"")
}

def emitExtendsDefinition_(definition_ : ff.compiler.Syntax_.DExtend) : ff.core.String_.String = {
val typeName_ : ff.core.String_.String = ff.core.String_.String_getReverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_getReverse(self_ = ff.compiler.JsEmitter_.extractTypeName_(type_ = definition_.type_)), p_ = {(_w1) =>
(_w1 != '.')
}));
val methods_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = definition_.methods_, body_ = {(method_) =>
pipe_dot(method_)({(_c) =>
ff.compiler.Syntax_.DFunction(at_ = _c.at_, signature_ = pipe_dot(method_.signature_)({(_c) =>
ff.compiler.Syntax_.Signature(at_ = _c.at_, name_ = ((typeName_ + "_") + method_.signature_.name_), generics_ = _c.generics_, constraints_ = _c.constraints_, parameters_ = _c.parameters_, returnType_ = _c.returnType_)
}), body_ = _c.body_, targets_ = _c.targets_)
})
});
ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = methods_, body_ = {(_w1) =>
("export " + ff.compiler.JsEmitter_.emitFunctionDefinition_(definition_ = _w1, suffix_ = ""))
}), separator_ = "\n\n")
}

def emitFunctionDefinition_(definition_ : ff.compiler.Syntax_.DFunction, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = {
val signature_ : ff.core.String_.String = ff.compiler.JsEmitter_.emitSignature_(signature_ = definition_.signature_, suffix_ = suffix_);
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = definition_.targets_.javaScript_, body_ = {(code_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.String_.String_startsWith(self_ = code_, prefix_ = "#"), body_ = {() =>
ff.core.String_.String_dropFirst(self_ = code_, count_ = 1)
}), body_ = {() =>
(((signature_ + " {\n") + code_) + "\n}")
})
}), body_ = {() =>
pipe_dot(definition_.body_)({
case (ff.compiler.Syntax_.Lambda(_, List(matchCase_))) if ff.core.List_.List_all[ff.compiler.Syntax_.MatchPattern](self_ = matchCase_.patterns_, body_ = {
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.None())) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
}) =>
val body_ : ff.core.String_.String = "// TODO: emitStatements(matchCase.body)";
(((signature_ + " {\n") + body_) + "\n}")
case (_) =>
val body_ : ff.core.String_.String = "// TODO: Pattern matching";
(((signature_ + " {\n") + body_) + "\n}")
})
})
}

def emitSignature_(signature_ : ff.compiler.Syntax_.Signature, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = {
val parameters_ : ff.core.String_.String = (("(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = signature_.parameters_, body_ = {(parameter_) =>
ff.compiler.JsEmitter_.emitParameter_(parameter_ = parameter_)
}), separator_ = ", ")) + ")");
((("function " + ff.compiler.JsEmitter_.escapeKeyword_(word_ = signature_.name_)) + suffix_) + parameters_)
}

def emitParameter_(parameter_ : ff.compiler.Syntax_.Parameter) : ff.core.String_.String = {
val defaultValue_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.core.String_.String](self_ = parameter_.default_, body_ = {(_w1) =>
(" = " + ff.compiler.JsEmitter_.emitTerm_(term_ = _w1))
}), body_ = {() =>
""
});
(ff.compiler.JsEmitter_.escapeKeyword_(word_ = parameter_.name_) + defaultValue_)
}

def emitTerm_(term_ : ff.compiler.Syntax_.Term) : ff.core.String_.String = {
"// TODO: emitTerm"
}

def extractTypeName_(type_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (type_) match {
case (ff.compiler.Syntax_.TVariable(at_, index_)) =>
ff.compiler.JsEmitter_.fail_[ff.core.String_.String](at_ = at_, message_ = ("Unexpected type variable: $" + index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
t_.name_
}

def escapeResolved_(word_ : ff.core.String_.String) : ff.core.String_.String = {
val parts_ : ff.core.List_.List[ff.core.String_.String] = ff.core.Array_.Array_getList[ff.core.String_.String](self_ = ff.core.String_.String_split(self_ = ff.core.String_.String_replace(self_ = ff.core.String_.String_replace(self_ = word_, needle_ = ":", replacement_ = "."), needle_ = "/", replacement_ = "."), char_ = '.'));
val initialParts_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_dropLast[ff.core.String_.String](self_ = parts_, count_ = 1);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_getEmpty[ff.core.String_.String](self_ = initialParts_), body_ = {() =>
ff.compiler.JsEmitter_.escapeKeyword_(word_ = ff.core.List_.List_expectLast[ff.core.String_.String](self_ = parts_))
}), body_ = {() =>
((ff.core.List_.List_join(self_ = initialParts_, separator_ = ".") + "_.") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = ff.core.List_.List_expectLast[ff.core.String_.String](self_ = parts_)))
})
}

def escapeKeyword_(word_ : ff.core.String_.String) : ff.core.String_.String = {
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.Char_.Char_getIsLower(self_ = ff.core.String_.String_expectFirst(self_ = word_)), body_ = {() =>
(word_ + "_")
}), body_ = {() =>
word_
})
}



}
