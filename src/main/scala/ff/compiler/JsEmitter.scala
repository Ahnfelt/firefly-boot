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
val parts_ : ff.core.List_.List[ff.core.List_.List[ff.core.String_.String]] = List(List(((((("// package " + packagePair_.first_) + ":") + packagePair_.second_) + "/") + ff.core.String_.String_dropLast(self_ = module_.file_, count_ = 3))), ff.core.List_.List_map[ff.compiler.Syntax_.DImport, ff.core.String_.String](self_ = ff.core.List_.List_sortBy[ff.compiler.Syntax_.DImport](self_ = module_.imports_, body_ = {(i_) =>
((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
}), body_ = {(_w1) =>
ff.compiler.JsEmitter_.emitImportDefinition_(definition_ = _w1)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DType, ff.core.String_.String](self_ = module_.types_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.emitTypeDefinition_(definition_ = _w1)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.core.String_.String](self_ = module_.lets_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.emitLetDefinition_(definition_ = _w1, mutable_ = ff.core.Bool_.False())
}), ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = module_.functions_, body_ = {(_w1) =>
("export " + ff.compiler.JsEmitter_.emitFunctionDefinition_(definition_ = _w1, suffix_ = ""))
}), ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.core.String_.String](self_ = module_.extends_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.emitExtendsDefinition_(definition_ = _w1)
}));
(ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.List_.List[ff.core.String_.String], ff.core.String_.String](self_ = parts_, body_ = {(_w1) =>
ff.core.List_.List_join(self_ = _w1, separator_ = "\n\n")
}), separator_ = "\n\n") + "\n")
}

def emitImportDefinition_(definition_ : ff.compiler.Syntax_.DImport) : ff.core.String_.String = {
((((((((((((("import * as " + definition_.package_.first_) + "_") + definition_.package_.second_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.first_) + "/") + definition_.package_.second_) + "/") + definition_.file_) + ".js\"")
}

def emitLetDefinition_(definition_ : ff.compiler.Syntax_.DLet, mutable_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.String_.String = {
val mutability_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = mutable_, body_ = {() =>
"let"
}), body_ = {() =>
"const"
});
val valueCode_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = definition_.targets_.scala_, body_ = {() =>
ff.compiler.JsEmitter_.emitTerm_(term_ = definition_.value_)
});
((((mutability_ + " ") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = definition_.name_)) + " = ") + valueCode_)
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
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.Some(x_))) if ff.core.Bool_.True() =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
}) =>
val body_ : ff.core.String_.String = ff.compiler.JsEmitter_.emitStatements_(term_ = matchCase_.body_, last_ = ff.core.Bool_.True());
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

def emitTypeDefinition_(definition_ : ff.compiler.Syntax_.DType) : ff.core.String_.String = {
("// type " + definition_.name_)
}

def emitTerm_(term_ : ff.compiler.Syntax_.Term) : ff.core.String_.String = (term_) match {
case (ff.compiler.Syntax_.EString(at_, value_)) =>
value_
case (ff.compiler.Syntax_.EChar(at_, value_)) =>
value_
case (ff.compiler.Syntax_.EInt(at_, value_)) =>
value_
case (ff.compiler.Syntax_.EFloat(at_, value_)) =>
value_
case (ff.compiler.Syntax_.EVariable(at_, name_, _, _)) =>
ff.compiler.JsEmitter_.escapeResolved_(word_ = name_)
case (ff.compiler.Syntax_.EList(at_, _, items_)) =>
(("ff_core_Array.Array_getList([" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool], ff.core.String_.String](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.False())) =>
ff.compiler.JsEmitter_.emitTerm_(term_ = item_)
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.True())) =>
(("...ff_core_List.List_getArray(" + ff.compiler.JsEmitter_.emitTerm_(term_ = item_)) + ")")
}), separator_ = ", ")) + "])")
case (ff.compiler.Syntax_.EVariant(at_, name_, _, arguments_)) =>
(((ff.compiler.JsEmitter_.escapeResolved_(word_ = name_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.String_.String](self_ = ff.core.List_.List_getFlatten[ff.compiler.Syntax_.Argument](self_ = ff.core.Option_.Option_getList[ff.core.List_.List[ff.compiler.Syntax_.Argument]](self_ = arguments_)), body_ = {(argument_) =>
ff.compiler.JsEmitter_.emitArgument_(argument_ = argument_)
}), separator_ = ", ")) + ")")
case (ff.compiler.Syntax_.EVariantIs(at_, name_, _)) =>
(((("(function(_v) { " + "return _v._ === '") + ff.compiler.JsEmitter_.escapeResolved_(word_ = name_)) + "' ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
case (ff.compiler.Syntax_.ECopy(at_, name_, record_, fields_)) =>
val fieldCode_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.core.String_.String](self_ = fields_, body_ = {(f_) =>
((ff.compiler.JsEmitter_.escapeKeyword_(word_ = f_.name_) + " = ") + ff.compiler.JsEmitter_.emitTerm_(term_ = f_.value_))
}), separator_ = ", ");
(((("{..." + ff.compiler.JsEmitter_.emitTerm_(term_ = record_)) + ", ") + fieldCode_) + "}")
case (ff.compiler.Syntax_.EField(at_, record_, field_)) =>
((ff.compiler.JsEmitter_.emitTerm_(term_ = record_) + ".") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = field_))
case (ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, List(ff.compiler.Syntax_.MatchCase(_, patterns_, ff.core.Option_.None(), body_))))) if ff.core.List_.List_all[ff.compiler.Syntax_.MatchPattern](self_ = patterns_, body_ = {
case (_ : ff.compiler.Syntax_.PVariable) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
}) =>
val parameters_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.core.String_.String](self_ = patterns_, body_ = {
case (p_ : ff.compiler.Syntax_.PVariable) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = p_.name_, body_ = {(word_) =>
ff.compiler.JsEmitter_.escapeKeyword_(word_ = word_)
}), body_ = {() =>
"_"
})
case (_) =>
ff.core.Core_.panic_[ff.core.String_.String](message_ = "!")
}), separator_ = ", ");
(((("((" + parameters_) + ") => {\n") + ff.compiler.JsEmitter_.emitStatements_(term_ = body_, last_ = ff.core.Bool_.True())) + "\n})")
case (ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, cases_))) =>
val casesString_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.core.String_.String](self_ = cases_, body_ = {(matchCase_) =>
ff.compiler.JsEmitter_.emitCase_(matchCase_ = matchCase_)
}), separator_ = "\n");
(("((/* TODO */) => {\n" + casesString_) + "\nthrow 'Unexhaustive pattern match'\n})")
case (ff.compiler.Syntax_.EPipe(at_, value_, function_)) =>
(((("(" + ff.compiler.JsEmitter_.emitTerm_(term_ = function_)) + ")(") + ff.compiler.JsEmitter_.emitTerm_(term_ = value_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(value_))) if (!ff.core.Char_.Char_getIsLetter(self_ = ff.core.String_.String_expectFirst(self_ = operator_))) =>
((("(" + operator_) + ff.compiler.JsEmitter_.emitArgument_(argument_ = value_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(left_, right_))) if (!ff.core.Char_.Char_getIsLetter(self_ = ff.core.String_.String_expectFirst(self_ = operator_))) =>
(((((("(" + ff.compiler.JsEmitter_.emitArgument_(argument_ = left_)) + " ") + operator_) + " ") + ff.compiler.JsEmitter_.emitArgument_(argument_ = right_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, function_, _, arguments_)) =>
(((ff.compiler.JsEmitter_.emitTerm_(term_ = function_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.String_.String](self_ = arguments_, body_ = {(argument_) =>
ff.compiler.JsEmitter_.emitArgument_(argument_ = argument_)
}), separator_ = ", ")) + ")")
case (ff.compiler.Syntax_.ERecord(at_, fields_)) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_getEmpty[ff.compiler.Syntax_.Field](self_ = fields_), body_ = {() =>
"{}"
}), body_ = {() =>
val list_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.core.String_.String](self_ = fields_, body_ = {(f_) =>
((ff.compiler.JsEmitter_.escapeKeyword_(word_ = f_.name_) + " = ") + ff.compiler.JsEmitter_.emitTerm_(term_ = f_.value_))
});
(("{\n" + ff.core.List_.List_join(self_ = list_, separator_ = ",\n")) + "\n}")
})
case (ff.compiler.Syntax_.EWildcard(at_, index_)) =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (index_ == 0), body_ = {() =>
ff.compiler.JsEmitter_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = "Unbound wildcard")
});
("_w" + index_)
case (_) =>
(("(function() {\n" + ff.compiler.JsEmitter_.emitStatements_(term_ = term_, last_ = ff.core.Bool_.True())) + "\n})()")
}

def emitStatements_(term_ : ff.compiler.Syntax_.Term, last_ : ff.core.Bool_.Bool) : ff.core.String_.String = {
pipe_dot(term_)({
case (ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionStrings_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = functions_, body_ = {(f_) =>
ff.compiler.JsEmitter_.emitFunctionDefinition_(definition_ = ff.compiler.Syntax_.DFunction(at_ = at_, signature_ = f_.signature_, body_ = f_.body_, targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())), suffix_ = "")
});
((ff.core.List_.List_join(self_ = functionStrings_, separator_ = "\n") + "\n") + ff.compiler.JsEmitter_.emitStatements_(term_ = body_, last_ = ff.core.Bool_.True()))
case (ff.compiler.Syntax_.ELet(at_, mutable_, name_, valueType_, value_, body_)) =>
((ff.compiler.JsEmitter_.emitLetDefinition_(definition_ = ff.compiler.Syntax_.DLet(at_ = at_, name_ = name_, variableType_ = valueType_, value_ = value_, targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())), mutable_ = mutable_) + ";\n") + ff.compiler.JsEmitter_.emitStatements_(term_ = body_, last_ = ff.core.Bool_.True()))
case (ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
((ff.compiler.JsEmitter_.emitStatements_(term_ = before_, last_ = ff.core.Bool_.False()) + ";\n") + ff.compiler.JsEmitter_.emitStatements_(term_ = after_, last_ = last_))
case (ff.compiler.Syntax_.EAssign(at_, operator_, name_, value_)) =>
((((ff.compiler.JsEmitter_.escapeKeyword_(word_ = name_) + " ") + operator_) + "= ") + ff.compiler.JsEmitter_.emitTerm_(term_ = value_))
case (ff.compiler.Syntax_.EAssignField(at_, operator_, record_, field_, value_)) =>
((((((ff.compiler.JsEmitter_.emitTerm_(term_ = record_) + ".") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = field_)) + " ") + operator_) + "= ") + ff.compiler.JsEmitter_.emitTerm_(term_ = value_))
case (_) if last_ =>
("return " + ff.compiler.JsEmitter_.emitTerm_(term_ = term_))
case (_) =>
ff.compiler.JsEmitter_.emitTerm_(term_ = term_)
})
}

def emitCase_(matchCase_ : ff.compiler.Syntax_.MatchCase) : ff.core.String_.String = {
(("if(true /* TODO */) {\n" + ff.compiler.JsEmitter_.emitStatements_(term_ = matchCase_.body_, last_ = ff.core.Bool_.True())) + "\n}")
}

def emitArgument_(argument_ : ff.compiler.Syntax_.Argument) : ff.core.String_.String = {
ff.compiler.JsEmitter_.emitTerm_(term_ = argument_.value_)
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
((ff.core.List_.List_join(self_ = initialParts_, separator_ = "_") + ".") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = ff.core.List_.List_expectLast[ff.core.String_.String](self_ = parts_)))
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
