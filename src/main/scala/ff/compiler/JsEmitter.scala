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

case class JsEmitter(otherModules_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Module], var tailCallUsed_ : ff.core.Bool_.Bool)

case class ProcessedVariantCase(variantName_ : ff.core.String_.String, loneVariant_ : ff.core.Bool_.Bool, arguments_ : ff.core.List_.List[ff.core.String_.String])

def make_(otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.JsEmitter_.JsEmitter = {
ff.compiler.JsEmitter_.JsEmitter(otherModules_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Module, ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Module]](self_ = otherModules_, body_ = {(m_) =>
val moduleName_ : ff.core.String_.String = ((((m_.packagePair_.first_ + ":") + m_.packagePair_.second_) + "/") + ff.core.String_.String_dropLast(self_ = m_.file_, count_ = 3));
ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Module](first_ = moduleName_, second_ = m_)
})), tailCallUsed_ = ff.core.Bool_.False())
}

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}

def detectIfElse_(term_ : ff.compiler.Syntax_.Term) : ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term]] = (term_) match {
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, word_, _, _), _, List(condition_, body_))) if (word_ == "ff:core/Core.if") =>
List(ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](first_ = condition_.value_, second_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = body_.value_)))
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, word_, _, _), _, List(option_, condition_, body_))) if (word_ == "ff:core/Option.Option_elseIf") =>
val list_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term]] = ff.compiler.JsEmitter_.detectIfElse_(term_ = option_.value_);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term]]](condition_ = ff.core.List_.List_isEmpty[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term]](self_ = list_), body_ = {() =>
List()
}), body_ = {() =>
(List(List(ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](first_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = condition_.value_), second_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = body_.value_))), list_).flatten)
})
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, word_, _, _), _, List(option_, body_))) if (word_ == "ff:core/Option.Option_else") =>
val list_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term]] = ff.compiler.JsEmitter_.detectIfElse_(term_ = option_.value_);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term]]](condition_ = ff.core.List_.List_isEmpty[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term]](self_ = list_), body_ = {() =>
List()
}), body_ = {() =>
(List(List(ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](first_ = ff.compiler.Syntax_.EVariant(at_ = at_, name_ = "ff:core/Bool.True", typeArguments_ = List(), arguments_ = ff.core.Option_.None[ff.core.List_.List[ff.compiler.Syntax_.Argument]]()), second_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = body_.value_))), list_).flatten)
})
case (_) =>
List()
}

def invokeImmediately_(function_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (function_) match {
case (ff.compiler.Syntax_.ELambda(_, ff.compiler.Syntax_.Lambda(_, List(ff.compiler.Syntax_.MatchCase(_, List(), ff.core.Option_.None(), body_))))) =>
body_
case (_) =>
ff.compiler.Syntax_.ECall(at_ = function_.at_, tailCall_ = ff.core.Bool_.False(), function_ = function_, typeArguments_ = List(), arguments_ = List())
}

def extractTypeName_(type_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (type_) match {
case (ff.compiler.Syntax_.TVariable(at_, index_)) =>
ff.compiler.JsEmitter_.fail_[ff.core.String_.String](at_ = at_, message_ = ("Unexpected type variable: $" + index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
t_.name_
}

def escapeResolved_(word_ : ff.core.String_.String) : ff.core.String_.String = {
val parts_ : ff.core.List_.List[ff.core.String_.String] = ff.core.Array_.Array_toList[ff.core.String_.String](self_ = ff.core.String_.String_split(self_ = ff.core.String_.String_replace(self_ = ff.core.String_.String_replace(self_ = word_, needle_ = ":", replacement_ = "."), needle_ = "/", replacement_ = "."), char_ = '.'));
val initialParts_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_dropLast[ff.core.String_.String](self_ = parts_, count_ = 1);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.core.String_.String](self_ = initialParts_), body_ = {() =>
ff.compiler.JsEmitter_.escapeKeyword_(word_ = ff.core.List_.List_expectLast[ff.core.String_.String](self_ = parts_))
}), body_ = {() =>
((ff.core.List_.List_join(self_ = initialParts_, separator_ = "_") + ".") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = ff.core.List_.List_expectLast[ff.core.String_.String](self_ = parts_)))
})
}

def escapeKeyword_(word_ : ff.core.String_.String) : ff.core.String_.String = {
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.Char_.Char_isAsciiLower(self_ = ff.core.String_.String_expectFirst(self_ = word_)), body_ = {() =>
(word_ + "_")
}), body_ = {() =>
word_
})
}
def JsEmitter_emitModule(self_ : ff.compiler.JsEmitter_.JsEmitter, packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], module_ : ff.compiler.Syntax_.Module) : ff.core.String_.String = (self_, packagePair_, module_) match {
case (self_, _, _) =>
val selfImport_ : ff.core.String_.String = ((((((((((((("import * as " + packagePair_.first_) + "_") + packagePair_.second_) + "_") + ff.core.String_.String_dropLast(self_ = module_.file_, count_ = 3)) + " ") + "from \"../../") + packagePair_.first_) + "/") + packagePair_.second_) + "/") + ff.core.String_.String_dropLast(self_ = module_.file_, count_ = 3)) + ".mjs\"");
val imports_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.DImport, ff.core.String_.String](self_ = ff.core.List_.List_sortBy[ff.compiler.Syntax_.DImport](self_ = module_.imports_, body_ = {(i_) =>
((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
}), body_ = {(_w1) =>
ff.compiler.JsEmitter_.JsEmitter_emitImportDefinition(self_ = self_, definition_ = _w1)
});
val parts_ : ff.core.List_.List[ff.core.List_.List[ff.core.String_.String]] = List(ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.core.String_.String]](condition_ = ff.core.List_.List_any[ff.core.String_.String](self_ = imports_, body_ = {(_w1) =>
(_w1 == selfImport_)
}), body_ = {() =>
imports_
}), body_ = {() =>
(List(List(selfImport_), imports_).flatten)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DType, ff.core.String_.String](self_ = module_.types_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.JsEmitter_emitTypeDefinition(self_ = self_, definition_ = _w1)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.core.String_.String](self_ = module_.lets_, body_ = {(_w1) =>
("export " + ff.compiler.JsEmitter_.JsEmitter_emitLetDefinition(self_ = self_, definition_ = _w1, mutable_ = ff.core.Bool_.False()))
}), ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = module_.functions_, body_ = {(_w1) =>
("export " + ff.compiler.JsEmitter_.JsEmitter_emitFunctionDefinition(self_ = self_, definition_ = _w1, suffix_ = ""))
}), ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.core.String_.String](self_ = module_.extends_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.JsEmitter_emitExtendsDefinition(self_ = self_, definition_ = _w1)
}), ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.core.String_.String]](condition_ = ((module_.file_ == "Main.ff") && ff.core.List_.List_any[ff.compiler.Syntax_.DFunction](self_ = module_.functions_, body_ = {(_w1) =>
(_w1.signature_.name_ == "main")
})), body_ = {() =>
List(ff.compiler.JsEmitter_.JsEmitter_emitMain(self_ = self_))
}), body_ = {() =>
List()
}));
(ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.List_.List[ff.core.String_.String], ff.core.String_.String](self_ = parts_, body_ = {(_w1) =>
ff.core.List_.List_join(self_ = _w1, separator_ = "\n\n")
}), separator_ = "\n\n") + "\n")
}

def JsEmitter_emitMain(self_ : ff.compiler.JsEmitter_.JsEmitter) : ff.core.String_.String = (self_) match {
case (self_) =>
"queueMicrotask(() => main_({array_: process.argv.slice(2)}))"
}

def JsEmitter_emitImportDefinition(self_ : ff.compiler.JsEmitter_.JsEmitter, definition_ : ff.compiler.Syntax_.DImport) : ff.core.String_.String = (self_, definition_) match {
case (self_, _) =>
((((((((((((("import * as " + definition_.package_.first_) + "_") + definition_.package_.second_) + "_") + definition_.file_) + " ") + "from \"../../") + definition_.package_.first_) + "/") + definition_.package_.second_) + "/") + definition_.file_) + ".mjs\"")
}

def JsEmitter_emitLetDefinition(self_ : ff.compiler.JsEmitter_.JsEmitter, definition_ : ff.compiler.Syntax_.DLet, mutable_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.String_.String = (self_, definition_, mutable_) match {
case (self_, _, _) =>
val mutability_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = mutable_, body_ = {() =>
"let"
}), body_ = {() =>
"const"
});
val valueCode_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = definition_.targets_.scala_, body_ = {() =>
ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = definition_.value_)
});
((((mutability_ + " ") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = definition_.name_)) + " = ") + valueCode_)
}

def JsEmitter_emitExtendsDefinition(self_ : ff.compiler.JsEmitter_.JsEmitter, definition_ : ff.compiler.Syntax_.DExtend) : ff.core.String_.String = (self_, definition_) match {
case (self_, _) =>
val typeName_ : ff.core.String_.String = ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = ff.compiler.JsEmitter_.extractTypeName_(type_ = definition_.type_)), p_ = {(_w1) =>
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
("export " + ff.compiler.JsEmitter_.JsEmitter_emitFunctionDefinition(self_ = self_, definition_ = _w1, suffix_ = ""))
}), separator_ = "\n\n")
}

def JsEmitter_emitFunctionDefinition(self_ : ff.compiler.JsEmitter_.JsEmitter, definition_ : ff.compiler.Syntax_.DFunction, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = (self_, definition_, suffix_) match {
case (self_, _, _) =>
val signature_ : ff.core.String_.String = ff.compiler.JsEmitter_.JsEmitter_emitSignature(self_ = self_, signature_ = definition_.signature_, suffix_ = suffix_);
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = definition_.targets_.javaScript_, body_ = {(code_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.String_.String_startsWith(self_ = code_, prefix_ = "#", offset_ = 0), body_ = {() =>
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
val body_ : ff.core.String_.String = ff.compiler.JsEmitter_.JsEmitter_emitTailCall(self_ = self_, body_ = {() =>
ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = matchCase_.body_, last_ = ff.core.Bool_.True())
});
(((signature_ + " {\n") + body_) + "\n}")
case (ff.compiler.Syntax_.Lambda(_, cases_)) =>
val escapedArguments_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.signature_.parameters_, body_ = {(_w1) =>
(_w1.name_ + "_a")
});
val shadowingWorkaround_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.signature_.parameters_, body_ = {(p_) =>
((("const " + p_.name_) + "_a = ") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = p_.name_))
}), separator_ = "\n");
val body_ : ff.core.String_.String = ff.compiler.JsEmitter_.JsEmitter_emitTailCall(self_ = self_, body_ = {() =>
val casesString_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.core.String_.String](self_ = cases_, body_ = {(_w1) =>
(("{\n" + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = escapedArguments_, matchCase_ = _w1, last_ = ff.core.Bool_.True())) + "\n}")
}), separator_ = "\n");
(((("{\n" + shadowingWorkaround_) + "\n") + casesString_) + "\nthrow new Error('Unexhaustive pattern match')\n}")
});
(signature_ + body_)
})
})
}

def JsEmitter_emitTailCall(self_ : ff.compiler.JsEmitter_.JsEmitter, body_ : Function0[ff.core.String_.String]) : ff.core.String_.String = (self_, body_) match {
case (self_, _) =>
val outerTailCallUsed_ : ff.core.Bool_.Bool = self_.tailCallUsed_;
self_.tailCallUsed_ = ff.core.Bool_.False();
val result_ : ff.core.String_.String = body_();
val tailCallUsed_ : ff.core.Bool_.Bool = self_.tailCallUsed_;
self_.tailCallUsed_ = outerTailCallUsed_;
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = tailCallUsed_, body_ = {() =>
(("_tailcall: for(;;) {\n" + result_) + "\nreturn\n}")
}), body_ = {() =>
result_
})
}

def JsEmitter_emitSignature(self_ : ff.compiler.JsEmitter_.JsEmitter, signature_ : ff.compiler.Syntax_.Signature, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = (self_, signature_, suffix_) match {
case (self_, _, _) =>
val parameters_ : ff.core.String_.String = (("(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = signature_.parameters_, body_ = {(parameter_) =>
ff.compiler.JsEmitter_.JsEmitter_emitParameter(self_ = self_, parameter_ = parameter_)
}), separator_ = ", ")) + ")");
((("function " + ff.compiler.JsEmitter_.escapeKeyword_(word_ = signature_.name_)) + suffix_) + parameters_)
}

def JsEmitter_emitParameter(self_ : ff.compiler.JsEmitter_.JsEmitter, parameter_ : ff.compiler.Syntax_.Parameter) : ff.core.String_.String = (self_, parameter_) match {
case (self_, _) =>
val defaultValue_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.core.String_.String](self_ = parameter_.default_, body_ = {(_w1) =>
(" = " + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = _w1))
}), body_ = {() =>
""
});
(ff.compiler.JsEmitter_.escapeKeyword_(word_ = parameter_.name_) + defaultValue_)
}

def JsEmitter_emitTypeDefinition(self_ : ff.compiler.JsEmitter_.JsEmitter, definition_ : ff.compiler.Syntax_.DType) : ff.core.String_.String = (self_, definition_) match {
case (self_, _) =>
((("// type " + definition_.name_) + "\n") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Variant, ff.core.String_.String](self_ = definition_.variants_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.JsEmitter_emitVariantDefinition(self_ = self_, typeDefinition_ = definition_, definition_ = _w1)
}), separator_ = "\n"))
}

def JsEmitter_emitVariantDefinition(self_ : ff.compiler.JsEmitter_.JsEmitter, typeDefinition_ : ff.compiler.Syntax_.DType, definition_ : ff.compiler.Syntax_.Variant) : ff.core.String_.String = (self_, typeDefinition_, definition_) match {
case (self_, _, _) =>
val allFields_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.List_.List_addAll[ff.compiler.Syntax_.Parameter](self_ = typeDefinition_.commonFields_, list_ = definition_.fields_);
val fields_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = allFields_, body_ = {(_w1) =>
ff.compiler.JsEmitter_.escapeKeyword_(word_ = _w1.name_)
}), separator_ = ", ");
ff.core.Option_.Option_else(self_ = definition_.targets_.javaScript_, body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Parameter](self_ = allFields_), body_ = {() =>
((((((((((((("const " + definition_.name_) + "$ = {_: '") + definition_.name_) + "'};\n") + "export function ") + definition_.name_) + "(") + fields_) + ") {\n") + "return ") + definition_.name_) + "$;\n") + "}")
}), condition_ = {() =>
(ff.core.List_.List_size[ff.compiler.Syntax_.Variant](self_ = typeDefinition_.variants_) == 1)
}, body_ = {() =>
(((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {") + fields_) + "};\n") + "}")
}), body_ = {() =>
(((((((((("export function " + definition_.name_) + "(") + fields_) + ") {\n") + "return {_: '") + definition_.name_) + "', ") + fields_) + "};\n") + "}")
})
})
}

def JsEmitter_emitTerm(self_ : ff.compiler.JsEmitter_.JsEmitter, term_ : ff.compiler.Syntax_.Term) : ff.core.String_.String = (self_, term_) match {
case (self_, ff.compiler.Syntax_.EString(at_, value_)) =>
value_
case (self_, ff.compiler.Syntax_.EChar(at_, value_)) if (value_ == "'\\t'") =>
"9"
case (self_, ff.compiler.Syntax_.EChar(at_, value_)) if (value_ == "'\\n'") =>
"10"
case (self_, ff.compiler.Syntax_.EChar(at_, value_)) if (value_ == "'\\r'") =>
"13"
case (self_, ff.compiler.Syntax_.EChar(at_, value_)) if (value_ == "'\\\"'") =>
"34"
case (self_, ff.compiler.Syntax_.EChar(at_, value_)) if (value_ == "'\\''") =>
"39"
case (self_, ff.compiler.Syntax_.EChar(at_, value_)) =>
("" + ff.core.Char_.Char_toInt(self_ = ff.core.String_.String_expect(self_ = value_, index_ = 1)))
case (self_, ff.compiler.Syntax_.EInt(at_, value_)) =>
value_
case (self_, ff.compiler.Syntax_.EFloat(at_, value_)) =>
value_
case (self_, ff.compiler.Syntax_.EVariable(at_, name_, _, _)) =>
ff.compiler.JsEmitter_.escapeResolved_(word_ = name_)
case (self_, ff.compiler.Syntax_.EList(at_, _, items_)) =>
ff.compiler.JsEmitter_.JsEmitter_emitList(self_ = self_, items_ = items_)
case (self_, ff.compiler.Syntax_.EVariant(at_, name_, _, _)) if (name_ == "ff:core/Bool.False") =>
"false"
case (self_, ff.compiler.Syntax_.EVariant(at_, name_, _, _)) if (name_ == "ff:core/Bool.True") =>
"true"
case (self_, ff.compiler.Syntax_.EVariant(at_, name_, _, _)) if (name_ == "ff:core/Unit.Unit") =>
"(void 0)"
case (self_, ff.compiler.Syntax_.EVariant(at_, name_, _, arguments_)) =>
(((ff.compiler.JsEmitter_.escapeResolved_(word_ = name_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.String_.String](self_ = ff.core.List_.List_flatten[ff.compiler.Syntax_.Argument](self_ = ff.core.Option_.Option_toList[ff.core.List_.List[ff.compiler.Syntax_.Argument]](self_ = arguments_)), body_ = {(argument_) =>
ff.compiler.JsEmitter_.JsEmitter_emitArgument(self_ = self_, argument_ = argument_)
}), separator_ = ", ")) + ")")
case (self_, ff.compiler.Syntax_.EVariantIs(at_, name_, _)) if (name_ == "ff:core/Bool.False") =>
"function(_v) { return !_v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
case (self_, ff.compiler.Syntax_.EVariantIs(at_, name_, _)) if (name_ == "ff:core/Bool.True") =>
"function(_v) { return _v ? ff_core_Option.Some(_v) : ff_core_Option.None(); }"
case (self_, ff.compiler.Syntax_.EVariantIs(at_, name_, _)) if (name_ == "ff:core/Unit.Unit") =>
"function(_v) { return ff_core_Option.Some(_v); }"
case (self_, ff.compiler.Syntax_.EVariantIs(at_, name_, _)) =>
(((("(function(_v) { " + "return _v._ === '") + ff.compiler.JsEmitter_.escapeResolved_(word_ = name_)) + "' ? ff_core_Option.Some(_v) : ff_core_Option.None();") + "})")
case (self_, ff.compiler.Syntax_.ECopy(at_, name_, record_, fields_)) =>
val fieldCode_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.core.String_.String](self_ = fields_, body_ = {(f_) =>
((ff.compiler.JsEmitter_.escapeKeyword_(word_ = f_.name_) + " = ") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = f_.value_))
}), separator_ = ", ");
(((("{..." + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = record_)) + ", ") + fieldCode_) + "}")
case (self_, ff.compiler.Syntax_.EField(at_, record_, field_)) =>
((ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = record_) + ".") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = field_))
case (self_, ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, List(ff.compiler.Syntax_.MatchCase(_, patterns_, ff.core.Option_.None(), body_))))) if ff.core.List_.List_all[ff.compiler.Syntax_.MatchPattern](self_ = patterns_, body_ = {
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
(((("((" + parameters_) + ") => {\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = body_, last_ = ff.core.Bool_.True())) + "\n})")
case (self_, ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, cases_))) =>
val arguments_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.Int_.Int, ff.compiler.Syntax_.MatchPattern], ff.core.String_.String](self_ = ff.core.List_.List_pairs[ff.compiler.Syntax_.MatchPattern](self_ = ff.core.List_.List_expect[ff.compiler.Syntax_.MatchCase](self_ = cases_, index_ = 0).patterns_), body_ = {(_w1) =>
("_" + (_w1.first_ + 1))
});
val escapedArguments_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.core.String_.String, ff.core.String_.String](self_ = arguments_, body_ = {(word_) =>
ff.compiler.JsEmitter_.escapeKeyword_(word_ = word_)
});
val casesString_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.core.String_.String](self_ = cases_, body_ = {(_w1) =>
(("{\n" + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = escapedArguments_, matchCase_ = _w1, last_ = ff.core.Bool_.True())) + "\n}")
}), separator_ = "\n");
((((("((" + ff.core.List_.List_join(self_ = escapedArguments_, separator_ = ", ")) + ") => ") + "{\n") + casesString_) + "\nthrow new Error('Unexhaustive pattern match')\n})")
case (self_, ff.compiler.Syntax_.EPipe(at_, value_, function_)) =>
(((("(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = function_)) + ")(") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = value_)) + ")")
case (self_, ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(value_))) if (!ff.core.Char_.Char_isAsciiLetter(self_ = ff.core.String_.String_expectFirst(self_ = operator_))) =>
((("(" + operator_) + ff.compiler.JsEmitter_.JsEmitter_emitArgument(self_ = self_, argument_ = value_)) + ")")
case (self_, ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(left_, right_))) if (!ff.core.Char_.Char_isAsciiLetter(self_ = ff.core.String_.String_expectFirst(self_ = operator_))) =>
(((((("(" + ff.compiler.JsEmitter_.JsEmitter_emitArgument(self_ = self_, argument_ = left_)) + " ") + operator_) + " ") + ff.compiler.JsEmitter_.JsEmitter_emitArgument(self_ = self_, argument_ = right_)) + ")")
case (self_, ff.compiler.Syntax_.ECall(at_, _, function_, _, arguments_)) =>
pipe_dot(ff.compiler.JsEmitter_.detectIfElse_(term_ = term_))({
case (List()) =>
(((ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = function_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.String_.String](self_ = arguments_, body_ = {(argument_) =>
ff.compiler.JsEmitter_.JsEmitter_emitArgument(self_ = self_, argument_ = argument_)
}), separator_ = ", ")) + ")")
case (List(ff.core.Pair_.Pair(ff.compiler.Syntax_.EVariant(_, word_, _, _), elseBody_), list__seq @ _*)) if (word_ == "ff:core/Bool.True") =>
val list_ = list__seq.toList;
(("(" + ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term], ff.core.String_.String](self_ = list_, initial_ = ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = elseBody_))({
case (otherwise_, ff.core.Pair_.Pair(condition_, body_)) =>
((((ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = condition_) + "\n? ") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = body_)) + "\n: ") + otherwise_)
})) + ")")
case (list_) =>
(("(" + ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term], ff.core.String_.String](self_ = list_, initial_ = "ff_core_Option.None()")({
case (otherwise_, ff.core.Pair_.Pair(condition_, body_)) =>
((((ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = condition_) + "\n? ff_core_Option.Some(") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = body_)) + ")\n: ") + otherwise_)
})) + ")")
})
case (self_, ff.compiler.Syntax_.ERecord(at_, fields_)) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Field](self_ = fields_), body_ = {() =>
"{}"
}), body_ = {() =>
val list_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.core.String_.String](self_ = fields_, body_ = {(f_) =>
((ff.compiler.JsEmitter_.escapeKeyword_(word_ = f_.name_) + " = ") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = f_.value_))
});
(("{\n" + ff.core.List_.List_join(self_ = list_, separator_ = ",\n")) + "\n}")
})
case (self_, ff.compiler.Syntax_.EWildcard(at_, index_)) =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (index_ == 0), body_ = {() =>
ff.compiler.JsEmitter_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = "Unbound wildcard")
});
("_w" + index_)
case (self_, _) =>
(("(function() {\n" + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = term_, last_ = ff.core.Bool_.True())) + "\n})()")
}

def JsEmitter_emitStatements(self_ : ff.compiler.JsEmitter_.JsEmitter, term_ : ff.compiler.Syntax_.Term, last_ : ff.core.Bool_.Bool) : ff.core.String_.String = (self_, term_, last_) match {
case (self_, _, _) =>
pipe_dot(term_)({
case (ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionStrings_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = functions_, body_ = {(f_) =>
ff.compiler.JsEmitter_.JsEmitter_emitFunctionDefinition(self_ = self_, definition_ = ff.compiler.Syntax_.DFunction(at_ = at_, signature_ = f_.signature_, body_ = f_.body_, targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())), suffix_ = "")
});
((ff.core.List_.List_join(self_ = functionStrings_, separator_ = "\n") + "\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = body_, last_ = last_))
case (ff.compiler.Syntax_.ELet(at_, mutable_, name_, valueType_, value_, body_)) =>
((ff.compiler.JsEmitter_.JsEmitter_emitLetDefinition(self_ = self_, definition_ = ff.compiler.Syntax_.DLet(at_ = at_, name_ = name_, variableType_ = valueType_, value_ = value_, targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())), mutable_ = mutable_) + "\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = body_, last_ = last_))
case (ff.compiler.Syntax_.EVariant(at_, word_, _, _)) if (word_ == "ff:core/Unit.Unit") =>
""
case (ff.compiler.Syntax_.ESequential(at_, ff.compiler.Syntax_.EVariant(at_, word_, _, _), after_)) if (word_ == "ff:core/Unit.Unit") =>
ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = after_, last_ = last_)
case (ff.compiler.Syntax_.ESequential(at_, before_, ff.compiler.Syntax_.EVariant(at_, word_, _, _))) if (word_ == "ff:core/Unit.Unit") =>
ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = before_, last_ = ff.core.Bool_.False())
case (ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
((ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = before_, last_ = ff.core.Bool_.False()) + "\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = after_, last_ = last_))
case (ff.compiler.Syntax_.EAssign(at_, operator_, name_, value_)) =>
((((ff.compiler.JsEmitter_.escapeKeyword_(word_ = name_) + " ") + operator_) + "= ") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = value_))
case (ff.compiler.Syntax_.EAssignField(at_, operator_, record_, field_, value_)) =>
((((((ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = record_) + ".") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = field_)) + " ") + operator_) + "= ") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = value_))
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, word_, _, _), _, List(condition_, body_))) if (word_ == "ff:core/Core.while") =>
(((("while(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = condition_.value_))) + ") {\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = body_.value_), last_ = ff.core.Bool_.False())) + "\n}")
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, word_, _, _), _, List(condition_, body_))) if (word_ == "ff:core/Core.if") =>
((("if(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = condition_.value_)) + ") {\n") + ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = last_, body_ = {() =>
(("return ff_core_Option.Some(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = body_.value_))) + ")\n} else return ff_core_Option.None()")
}), body_ = {() =>
(ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = ff.compiler.JsEmitter_.invokeImmediately_(function_ = body_.value_), last_ = ff.core.Bool_.False()) + "\n}")
}))
case (ff.compiler.Syntax_.ECall(at_, ff.core.Bool_.True(), function_, _, arguments_)) =>
self_.tailCallUsed_ = ff.core.Bool_.True();
val pair_ : ff.core.Pair_.Pair[ff.core.List_.List[ff.core.String_.String], ff.core.List_.List[ff.core.String_.String]] = ff.core.List_.List_unzip[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_collect[ff.core.Option_.Option[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]], ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.Option_.Option[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]]](self_ = arguments_, body_ = {(a_) =>
ff.core.Option_.Some[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](value_ = ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = ((("const " + ff.compiler.JsEmitter_.escapeKeyword_(word_ = (ff.core.Option_.Option_expect[ff.core.String_.String](self_ = a_.name_) + "_r"))) + " = ") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = a_.value_)), second_ = ((ff.compiler.JsEmitter_.escapeKeyword_(word_ = ff.core.Option_.Option_expect[ff.core.String_.String](self_ = a_.name_)) + " = ") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = (ff.core.Option_.Option_expect[ff.core.String_.String](self_ = a_.name_) + "_r")))))
}), body_ = {(_w1) =>
_w1
}));
(((("{\n" + ff.core.List_.List_join(self_ = pair_.first_, separator_ = "\n")) + "\n") + ff.core.List_.List_join(self_ = pair_.second_, separator_ = "\n")) + "\ncontinue _tailcall\n}")
case (ff.compiler.Syntax_.EPipe(at_, value_, ff.compiler.Syntax_.ELambda(_, ff.compiler.Syntax_.Lambda(_, cases_)))) =>
(((((ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (!last_), body_ = {() =>
"for(;;) "
}), body_ = {() =>
""
}) + "{\nconst _1 = ") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = value_)) + "\n") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.core.String_.String](self_ = cases_, body_ = {(_w1) =>
(("{\n" + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = List("_1"), matchCase_ = _w1, last_ = last_)) + "\n}")
}), separator_ = "\n")) + "\nthrow new Error('Unexhaustive pattern match')\n}")
case (_) =>
pipe_dot(ff.compiler.JsEmitter_.detectIfElse_(term_ = term_))({
case (List()) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = last_, body_ = {() =>
("return " + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = term_))
}), body_ = {() =>
ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = term_)
})
case (List(ff.core.Pair_.Pair(ff.compiler.Syntax_.EVariant(_, word_, _, _), elseBody_), list__seq @ _*)) if (word_ == "ff:core/Bool.True") =>
val list_ = list__seq.toList;
val initial_ : ff.core.String_.String = (("{\n" + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = elseBody_, last_ = last_)) + "\n}");
ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term], ff.core.String_.String](self_ = list_, initial_ = initial_)({
case (otherwise_, ff.core.Pair_.Pair(condition_, body_)) =>
((((("if(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = condition_)) + ") {\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = body_, last_ = last_)) + "\n} else ") + otherwise_)
})
case (list_) if (!last_) =>
ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term], ff.core.String_.String](self_ = list_, initial_ = "{}")({
case (otherwise_, ff.core.Pair_.Pair(condition_, body_)) =>
((((("if(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = condition_)) + ") {\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = body_, last_ = last_)) + "\n} else ") + otherwise_)
})
case (list_) =>
ff.core.List_.List_foldLeft[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term], ff.core.String_.String](self_ = list_, initial_ = "return ff_core_Option.None()")({
case (otherwise_, ff.core.Pair_.Pair(condition_, body_)) =>
(((((("if(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = condition_)) + ") {\n") + "return ff_core_Option.Some(") + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = body_)) + ")\n} else ") + otherwise_)
})
})
})
}

def JsEmitter_emitCase(self_ : ff.compiler.JsEmitter_.JsEmitter, arguments_ : ff.core.List_.List[ff.core.String_.String], matchCase_ : ff.compiler.Syntax_.MatchCase, last_ : ff.core.Bool_.Bool) : ff.core.String_.String = (self_, arguments_, matchCase_, last_) match {
case (self_, _, _, _) =>
pipe_dot(ff.core.Pair_.Pair[ff.core.List_.List[ff.compiler.Syntax_.MatchPattern], ff.core.Option_.Option[ff.compiler.Syntax_.Term]](first_ = matchCase_.patterns_, second_ = matchCase_.condition_))({
case (ff.core.Pair_.Pair(List(p_, ps__seq @ _*), _)) =>
val ps_ = ps__seq.toList;
ff.compiler.JsEmitter_.JsEmitter_emitPattern(self_ = self_, argument_ = ff.core.List_.List_expect[ff.core.String_.String](self_ = arguments_, index_ = 0), pattern_ = p_, arguments_ = ff.core.List_.List_dropFirst[ff.core.String_.String](self_ = arguments_, count_ = 1), matchCase_ = pipe_dot(matchCase_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = ps_, condition_ = _c.condition_, body_ = _c.body_)
}), last_ = last_)
case (ff.core.Pair_.Pair(List(), ff.core.Option_.Some(condition_))) =>
(((("if(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = condition_)) + ") {\n") + ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = matchCase_.body_, last_ = last_)) + ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = last_, body_ = {() =>
"\nreturn\n}"
}), body_ = {() =>
"\nbreak\n}"
}))
case (ff.core.Pair_.Pair(List(), ff.core.Option_.None())) =>
(ff.compiler.JsEmitter_.JsEmitter_emitStatements(self_ = self_, term_ = matchCase_.body_, last_ = last_) + ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = last_, body_ = {() =>
"\nreturn"
}), body_ = {() =>
"\nbreak"
}))
})
}

def JsEmitter_emitPattern(self_ : ff.compiler.JsEmitter_.JsEmitter, argument_ : ff.core.String_.String, pattern_ : ff.compiler.Syntax_.MatchPattern, arguments_ : ff.core.List_.List[ff.core.String_.String], matchCase_ : ff.compiler.Syntax_.MatchCase, last_ : ff.core.Bool_.Bool) : ff.core.String_.String = (self_, argument_, pattern_, arguments_, matchCase_, last_) match {
case (self_, _, _, _, _, _) =>
pipe_dot(pattern_)({
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.None())) =>
ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = arguments_, matchCase_ = matchCase_, last_ = last_)
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.Some(name_))) =>
val escaped_ : ff.core.String_.String = ff.compiler.JsEmitter_.escapeKeyword_(word_ = name_);
(ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (escaped_ != argument_), body_ = {() =>
(((("const " + escaped_) + " = ") + argument_) + "\n")
}), body_ = {() =>
""
}) + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = arguments_, matchCase_ = matchCase_, last_ = last_))
case (ff.compiler.Syntax_.PVariant(_, name_, List())) if (name_ == "ff:core/Bool.False") =>
(((("if(!" + argument_) + ") {\n") + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = arguments_, matchCase_ = matchCase_, last_ = last_)) + "\n}")
case (ff.compiler.Syntax_.PVariant(_, name_, List())) if (name_ == "ff:core/Bool.True") =>
(((("if(" + argument_) + ") {\n") + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = arguments_, matchCase_ = matchCase_, last_ = last_)) + "\n}")
case (ff.compiler.Syntax_.PVariant(_, name_, patterns_)) =>
val processed_ : ff.compiler.JsEmitter_.ProcessedVariantCase = ff.compiler.JsEmitter_.JsEmitter_processVariantCase(self_ = self_, name_ = name_, argument_ = argument_);
val newMatchCase_ : ff.compiler.Syntax_.MatchCase = pipe_dot(matchCase_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = ff.core.List_.List_addAll[ff.compiler.Syntax_.MatchPattern](self_ = patterns_, list_ = matchCase_.patterns_), condition_ = _c.condition_, body_ = _c.body_)
});
((ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = processed_.loneVariant_, body_ = {() =>
""
}), body_ = {() =>
(((("if(" + argument_) + "._ === '") + processed_.variantName_) + "') {\n")
}) + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = ff.core.List_.List_addAll[ff.core.String_.String](self_ = processed_.arguments_, list_ = arguments_), matchCase_ = newMatchCase_, last_ = last_)) + ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = processed_.loneVariant_, body_ = {() =>
""
}), body_ = {() =>
"\n}"
}))
case (ff.compiler.Syntax_.PVariantAs(at_, name_, variable_)) =>
val processed_ : ff.compiler.JsEmitter_.ProcessedVariantCase = ff.compiler.JsEmitter_.JsEmitter_processVariantCase(self_ = self_, name_ = name_, argument_ = argument_);
(((ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = processed_.loneVariant_, body_ = {() =>
""
}), body_ = {() =>
(((("if(" + argument_) + "._ === '") + processed_.variantName_) + "') {\n")
}) + ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.Option_.Option_filter[ff.core.String_.String](self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = variable_, body_ = {(word_) =>
ff.compiler.JsEmitter_.escapeKeyword_(word_ = word_)
}), body_ = {(_w1) =>
(_w1 != argument_)
}), body_ = {(_w1) =>
(((("const " + _w1) + " = ") + argument_) + "\n")
}), body_ = {() =>
""
})) + ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = arguments_, matchCase_ = matchCase_, last_ = last_)) + ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = processed_.loneVariant_, body_ = {() =>
""
}), body_ = {() =>
"\n}"
}))
case (ff.compiler.Syntax_.PAlias(_, pattern_, variable_)) =>
val escaped_ : ff.core.String_.String = ff.compiler.JsEmitter_.escapeKeyword_(word_ = variable_);
(ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (escaped_ != argument_), body_ = {() =>
(((("const " + escaped_) + " = ") + argument_) + "\n")
}), body_ = {() =>
""
}) + ff.compiler.JsEmitter_.JsEmitter_emitPattern(self_ = self_, argument_ = argument_, pattern_ = pattern_, arguments_ = arguments_, matchCase_ = matchCase_, last_ = last_))
case (ff.compiler.Syntax_.PList(at_, _, List())) =>
val p_ : ff.compiler.Syntax_.MatchPattern = ff.compiler.Syntax_.PVariant(at_ = at_, name_ = "ff:core/List.Empty", patterns_ = List());
val newMatchCase_ : ff.compiler.Syntax_.MatchCase = pipe_dot(matchCase_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = (List(List(p_), matchCase_.patterns_).flatten), condition_ = _c.condition_, body_ = _c.body_)
});
ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = (List(List(argument_), arguments_).flatten), matchCase_ = newMatchCase_, last_ = last_)
case (ff.compiler.Syntax_.PList(at_, t_, List(ff.core.Pair_.Pair(p_, ff.core.Bool_.False()), ps__seq @ _*))) =>
val ps_ = ps__seq.toList;
val p2_ : ff.compiler.Syntax_.MatchPattern = ff.compiler.Syntax_.PVariant(at_ = at_, name_ = "ff:core/List.Link", patterns_ = List(p_, ff.compiler.Syntax_.PList(at_ = at_, itemType_ = t_, items_ = ps_)));
val newMatchCase_ : ff.compiler.Syntax_.MatchCase = pipe_dot(matchCase_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = (List(List(p2_), matchCase_.patterns_).flatten), condition_ = _c.condition_, body_ = _c.body_)
});
ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = (List(List(argument_), arguments_).flatten), matchCase_ = newMatchCase_, last_ = last_)
case (ff.compiler.Syntax_.PList(at_, t_, List(ff.core.Pair_.Pair(p_, ff.core.Bool_.True())))) =>
val newMatchCase_ : ff.compiler.Syntax_.MatchCase = pipe_dot(matchCase_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = (List(List(p_), matchCase_.patterns_).flatten), condition_ = _c.condition_, body_ = _c.body_)
});
ff.compiler.JsEmitter_.JsEmitter_emitCase(self_ = self_, arguments_ = (List(List(argument_), arguments_).flatten), matchCase_ = newMatchCase_, last_ = last_)
case (ff.compiler.Syntax_.PList(at_, t_, List(ff.core.Pair_.Pair(p_, ff.core.Bool_.True()), __seq @ _*))) =>
val _ = __seq.toList;
"throw 'Invalid pattern: ... is only allowed for the last element in a list'\n"
})
}

def JsEmitter_emitList(self_ : ff.compiler.JsEmitter_.JsEmitter, items_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]]) : ff.core.String_.String = (self_, items_) match {
case (self_, List()) =>
"ff_core_List.Empty()"
case (self_, List(ff.core.Pair_.Pair(e_, ff.core.Bool_.True()))) =>
ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = e_)
case (self_, List(ff.core.Pair_.Pair(e_, ff.core.Bool_.False()), list__seq @ _*)) =>
val list_ = list__seq.toList;
(((("ff_core_List.Link(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = e_)) + ", ") + ff.compiler.JsEmitter_.JsEmitter_emitList(self_ = self_, items_ = list_)) + ")")
case (self_, List(ff.core.Pair_.Pair(e_, ff.core.Bool_.True()), list__seq @ _*)) =>
val list_ = list__seq.toList;
(((("ff_core_List.List_addAll(" + ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = e_)) + ", ") + ff.compiler.JsEmitter_.JsEmitter_emitList(self_ = self_, items_ = list_)) + ")")
}

def JsEmitter_processVariantCase(self_ : ff.compiler.JsEmitter_.JsEmitter, name_ : ff.core.String_.String, argument_ : ff.core.String_.String) : ff.compiler.JsEmitter_.ProcessedVariantCase = (self_, name_, argument_) match {
case (self_, _, _) =>
val variantNameUnqualified_ : ff.core.String_.String = ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = name_), p_ = {(_w1) =>
(_w1 != '.')
}));
val variantName_ : ff.core.String_.String = ff.compiler.JsEmitter_.escapeKeyword_(word_ = variantNameUnqualified_);
val moduleName_ : ff.core.String_.String = ff.core.String_.String_dropLast(self_ = name_, count_ = (ff.core.String_.String_size(self_ = variantNameUnqualified_) + 1));
val variantModule_ : ff.compiler.Syntax_.Module = ff.core.Map_.Map_expect[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = self_.otherModules_, key_ = moduleName_);
var loneVariant_ : ff.core.Bool_.Bool = ff.core.Bool_.False();
val newArguments_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.Option_.Option_expect[ff.core.List_.List[ff.core.String_.String]](self_ = ff.core.List_.List_collectFirst[ff.compiler.Syntax_.DType, ff.core.List_.List[ff.core.String_.String]](self_ = variantModule_.types_, body_ = {(definition_) =>
ff.core.Option_.Option_map[ff.compiler.Syntax_.Variant, ff.core.List_.List[ff.core.String_.String]](self_ = ff.core.List_.List_find[ff.compiler.Syntax_.Variant](self_ = definition_.variants_, body_ = {(_w1) =>
(_w1.name_ == variantName_)
}), body_ = {(variant_) =>
loneVariant_ = (ff.core.List_.List_size[ff.compiler.Syntax_.Variant](self_ = definition_.variants_) == 1);
ff.core.List_.List_addAll[ff.core.String_.String](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.commonFields_, body_ = {(_w1) =>
_w1.name_
}), list_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = variant_.fields_, body_ = {(_w1) =>
_w1.name_
}))
})
})), body_ = {(_w1) =>
((argument_ + ".") + ff.compiler.JsEmitter_.escapeKeyword_(word_ = _w1))
});
ff.compiler.JsEmitter_.ProcessedVariantCase(variantName_ = variantName_, loneVariant_ = loneVariant_, arguments_ = newArguments_)
}

def JsEmitter_emitArgument(self_ : ff.compiler.JsEmitter_.JsEmitter, argument_ : ff.compiler.Syntax_.Argument) : ff.core.String_.String = (self_, argument_) match {
case (self_, _) =>
ff.compiler.JsEmitter_.JsEmitter_emitTerm(self_ = self_, term_ = argument_.value_)
}


}
