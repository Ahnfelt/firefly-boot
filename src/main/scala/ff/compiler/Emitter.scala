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
object Emitter_ {


val keywords_ = List("abstract", "case", "catch", "class", "def", "do", "else", "extends", "false", "final", "finally", "for", "forSome", "if", "implicit", "import", "lazy", "match", "new", "null", "object", "override", "package", "private", "protected", "return", "sealed", "super", "this", "throw", "trait", "true", "try", "type", "val", "var", "while", "with", "yield", "scala", "java").getSet_()
def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_(((message_ + " ") + at_.show_()))
}

def emitModule_(packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], module_ : ff.compiler.Syntax_.Module) : ff.core.String_.String = {
val moduleNamespace_ = module_.file_.replace_("\\", "/").getReverse_().takeWhile_({(_w1) =>
(_w1 != '/')
}).getReverse_().takeWhile_({(_w1) =>
(_w1 != '.')
});
val modulePrefix_ = (((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + module_.file_.dropLast_(3)) + ".");
val package_ = ((packagePair_.first_ + ".") + packagePair_.second_);
val parts_ = List(List(("package " + package_)), module_.imports_.sortBy_({(i_) =>
((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
}).map_({(i_) =>
(((((("import " + i_.package_.first_) + ".") + i_.package_.second_) + ".") + i_.file_) + "_._")
}), List((("object " + moduleNamespace_) + "_ {")), ff.core.Core_.if_(module_.functions_.any_({(_w1) =>
(_w1.signature_.name_ == "main")
}), {() =>
List(ff.compiler.Emitter_.emitMain_())
}).else_({() =>
List()
}), module_.types_.map_(ff.compiler.Emitter_.emitTypeDefinition_), module_.lets_.map_({(_w1) =>
ff.compiler.Emitter_.emitLetDefinition_(_w1)
}), module_.functions_.map_({(_w1) =>
ff.compiler.Emitter_.emitFunctionDefinition_(_w1)
}), module_.extends_.pairs_().map_({(pair_) =>
ff.compiler.Emitter_.emitExtendImplicit_(pair_.second_, pair_.first_)
}), module_.traits_.map_(ff.compiler.Emitter_.emitTraitDefinition_), module_.instances_.map_(ff.compiler.Emitter_.emitInstanceDefinition_), List("}"));
module_.extends_.map_({(_w1) =>
_w1.type_
}).getCollect_(({ case _w : ff.compiler.Syntax_.TConstructor => Some(_w); case _ => None() })).find_({(t_) =>
(!module_.types_.any_({(_w1) =>
((modulePrefix_ + _w1.name_) == t_.name_)
}))
}).each_({(t_) =>
ff.compiler.Emitter_.fail_(t_.at_, ("Type not defined in this file: " + t_.name_))
});
(parts_.map_({(_w1) =>
_w1.join_("\n\n")
}).join_("\n") + "\n")
}

def emitMain_() : ff.core.String_.String = {
"def main(arguments : scala.Array[String]) : Unit = main_(ff.core.System_.SystemArguments(arguments.toList.getArray_()))"
}

def emitTypeMembers_(name_ : ff.core.String_.String, lets_ : ff.core.List_.List[ff.compiler.Syntax_.DLet], functions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction]) : ff.core.String_.String = {
val strings_ = (lets_.map_({(_w1) =>
ff.compiler.Emitter_.emitLetDefinition_(_w1)
}) ++ functions_.map_({(_w1) =>
ff.compiler.Emitter_.emitFunctionDefinition_(_w1)
}));
(((("object " + name_) + " {\n\n") + strings_.join_("\n\n")) + "\n\n}")
}

def emitTypeDefinition_(definition_ : ff.compiler.Syntax_.DType) : ff.core.String_.String = {
val generics_ = ff.compiler.Emitter_.emitTypeParameters_(definition_.generics_);
ff.core.Core_.if_(((definition_.scalaTarget_.getEmpty_() && (definition_.variants_.getSize_() == 1)) && (definition_.variants_.expectFirst_().name_ == definition_.name_)), {() =>
val fields_ = (("(" + definition_.commonFields_.map_(ff.compiler.Emitter_.emitParameter_).join_(", ")) + ")");
((("case class " + definition_.name_) + generics_) + fields_)
}).else_({() =>
val variants_ = definition_.variants_.map_({(_w1) =>
ff.compiler.Emitter_.emitVariantDefinition_(definition_, _w1)
});
val head_ = definition_.scalaTarget_.map_({(code_) =>
ff.core.Core_.if_(code_.startsWith_("#"), {() =>
(code_.dropFirst_() + ";\n")
}).else_({() =>
((((("type " + definition_.name_) + generics_) + " = ") + code_) + ";\n")
})
}).else_({() =>
val commonFields_ = ff.core.Core_.if_(definition_.commonFields_.getEmpty_(), {() =>
""
}).else_({() =>
((" {\n" + definition_.commonFields_.map_(ff.compiler.Emitter_.emitParameter_).map_({(_w1) =>
(("    val " + _w1) + "\n")
}).join_()) + "}")
});
(((("sealed abstract class " + definition_.name_) + generics_) + " extends Product with Serializable") + commonFields_)
});
(head_ + variants_.map_({(_w1) =>
("\n" + _w1)
}).join_())
})
}

def emitLetDefinition_(definition_ : ff.compiler.Syntax_.DLet, mutable_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.String_.String = {
val typeAnnotation_ = ff.compiler.Emitter_.emitTypeAnnotation_(definition_.variableType_);
val mutability_ = ff.core.Core_.if_(mutable_, {() =>
"var"
}).else_({() =>
"val"
});
val valueCode_ = definition_.scalaTarget_.else_({() =>
ff.compiler.Emitter_.emitTerm_(definition_.value_)
});
(((((mutability_ + " ") + ff.compiler.Emitter_.escapeKeyword_(definition_.name_)) + typeAnnotation_) + " = ") + valueCode_)
}

def emitFunctionDefinition_(definition_ : ff.compiler.Syntax_.DFunction, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = {
val signature_ = ff.compiler.Emitter_.emitSignature_(definition_.signature_, suffix_);
definition_.scalaTarget_.map_({(code_) =>
ff.core.Core_.if_(code_.startsWith_("#"), {() =>
code_.dropFirst_()
}).else_({() =>
(((signature_ + " = {\n") + code_) + "\n}")
})
}).else_({() =>
pipe_dot(definition_.body_)({
case (ff.compiler.Syntax_.Lambda(_, List(matchCase_))) if matchCase_.patterns_.all_({
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.None())) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
}) =>
val body_ = ff.compiler.Emitter_.emitStatements_(matchCase_.body_);
(((signature_ + " = {\n") + body_) + "\n}")
case (_) =>
val tuple_ = (("(" + definition_.signature_.parameters_.map_({(_w1) =>
ff.compiler.Emitter_.escapeKeyword_(_w1.name_)
}).join_(", ")) + ")");
val cases_ = definition_.body_.cases_.map_(ff.compiler.Emitter_.emitCase_).join_("\n");
(((((signature_ + " = ") + tuple_) + " match {\n") + cases_) + "\n}")
})
})
}

def emitExtendImplicit_(definition_ : ff.compiler.Syntax_.DExtend, index_ : ff.core.Int_.Int) : ff.core.String_.String = {
val generics_ = ff.compiler.Emitter_.emitTypeParameters_(definition_.generics_);
val implicits_ = ff.compiler.Emitter_.emitConstraints_(definition_.constraints_);
val parameter_ = ((ff.compiler.Emitter_.escapeKeyword_(definition_.name_) + " : ") + ff.compiler.Emitter_.emitType_(definition_.type_));
val methods_ = definition_.methods_.map_({(_w1) =>
ff.compiler.Emitter_.emitFunctionDefinition_(_w1)
}).join_("\n\n");
val typeName_ = ff.compiler.Emitter_.extractTypeName_(definition_.type_).getReverse_().takeWhile_({(_w1) =>
(_w1 != '.')
}).getReverse_();
((((((((((("implicit class " + typeName_) + "_extend") + index_) + generics_) + "(") + parameter_) + ")") + implicits_) + " {\n\n") + methods_) + "\n\n}")
}

def emitTraitDefinition_(definition_ : ff.compiler.Syntax_.DTrait) : ff.core.String_.String = {
val generics_ = ff.compiler.Emitter_.emitTypeParameters_(definition_.generics_);
val implicits_ = ff.compiler.Emitter_.emitConstraints_(definition_.constraints_);
val parameters_ = ff.core.Core_.if_(definition_.generatorParameters_.getEmpty_(), {() =>
""
}).else_({() =>
(("(" + definition_.generatorParameters_.map_(ff.compiler.Emitter_.emitParameter_).join_(", ")) + ")")
});
val methods_ = ff.core.Core_.if_(definition_.methods_.getEmpty_(), {() =>
""
}).else_({() =>
((((" {\n\nimport " + definition_.name_) + "._\n\n") + definition_.methods_.map_({(signature_) =>
val body_ = definition_.methodDefaults_.find_({(_w1) =>
(_w1.first_ == signature_.name_)
}).map_({
case (ff.core.Pair_.Pair(_, lambda_)) =>
((" {\n" + ff.compiler.Emitter_.emitStatements_(ff.compiler.Syntax_.ELambda(lambda_.at_, lambda_))) + "\n}")
}).getElse_({() =>
definition_.methodGenerators_.find_({(_w1) =>
(_w1.first_ == signature_.name_)
}).map_({
case (ff.core.Pair_.Pair(_, e_)) =>
" {\n// TODO: Generate\n}"
})
}).else_({() =>
""
});
(ff.compiler.Emitter_.emitSignature_(signature_, "_m") + body_)
}).join_("\n\n")) + "\n\n}")
});
val methodWrappers_ = ff.core.Core_.if_(definition_.methods_.getEmpty_(), {() =>
""
}).else_({() =>
((" \n\n" + definition_.methods_.map_({(signature_) =>
val t_ = ff.compiler.Syntax_.TConstructor(definition_.at_, definition_.name_, definition_.generics_.map_({(_w1) =>
ff.compiler.Syntax_.TConstructor(definition_.at_, _w1, List())
}));
(((((((ff.compiler.Emitter_.emitSignature_(signature_.copy(generics_ = (definition_.generics_ ++ signature_.generics_), constraints_ = (List(List(ff.compiler.Syntax_.Constraint(t_)), definition_.constraints_, signature_.constraints_).flatten))) + " =\n    scala.Predef.implicitly[") + ff.compiler.Emitter_.emitType_(t_)) + "].") + ff.compiler.Emitter_.escapeKeyword_(signature_.name_)) + "_m(") + signature_.parameters_.map_({(_w1) =>
_w1.name_
}).map_(ff.compiler.Emitter_.escapeKeyword_).join_(", ")) + ")")
}).join_("\n\n")) + "\n\n")
});
((((((((((("abstract class " + definition_.name_) + generics_) + parameters_) + implicits_) + methods_) + "\n") + "object ") + definition_.name_) + " {") + methodWrappers_) + "}")
}

def emitInstanceDefinition_(definition_ : ff.compiler.Syntax_.DInstance) : ff.core.String_.String = {
val signature_ = ff.compiler.Emitter_.emitSignature_(ff.compiler.Syntax_.Signature(definition_.at_, ((ff.compiler.Emitter_.extractTypeName_(definition_.traitType_) + "_") + ff.core.Core_.magicHashCode_(definition_).getAbs_()), definition_.generics_, definition_.constraints_, List(), definition_.traitType_));
val methods_ = ((((" {\n\nimport " + ff.compiler.Emitter_.extractTypeName_(definition_.traitType_)) + "._\n\n") + definition_.methods_.map_({(_w1) =>
ff.compiler.Emitter_.emitFunctionDefinition_(_w1, "_m")
}).join_("\n\n")) + "\n\n}");
val value_ = (("new " + ff.compiler.Emitter_.emitType_(definition_.traitType_)) + methods_);
((("implicit " + signature_) + " =\n    ") + value_)
}

def emitVariantDefinition_(typeDefinition_ : ff.compiler.Syntax_.DType, definition_ : ff.compiler.Syntax_.Variant) : ff.core.String_.String = {
val generics_ = ff.compiler.Emitter_.emitTypeParameters_(typeDefinition_.generics_);
val allFields_ = (typeDefinition_.commonFields_ ++ definition_.fields_);
val fields_ = (("(" + allFields_.map_(ff.compiler.Emitter_.emitParameter_).join_(", ")) + ")");
definition_.scalaTarget_.map_({(originalCode_) =>
val code_ = ff.core.Core_.if_((originalCode_ == "scala.Unit"), {() =>
"{}"
}).else_({() =>
originalCode_
});
((((((((((((((((("object " + definition_.name_) + " {\n") + "def apply") + generics_) + fields_) + " = ") + code_) + ff.core.Core_.if_((fields_ != "()"), {() =>
fields_
}).else_({() =>
""
})) + ";\n") + "def unapply") + generics_) + "(value : ") + typeDefinition_.name_) + generics_) + ") = ") + ff.core.Core_.if_((fields_ != "()"), {() =>
((((("scala.Some(value).collectFirst { case " + code_) + fields_) + " => ") + fields_) + " };\n")
}).else_({() =>
(("value == " + code_) + ";\n")
})) + "}")
}).else_({() =>
(((((("case class " + definition_.name_) + generics_) + fields_) + " extends ") + typeDefinition_.name_) + generics_)
})
}

def emitSignature_(signature_ : ff.compiler.Syntax_.Signature, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = {
val generics_ = ff.compiler.Emitter_.emitTypeParameters_(signature_.generics_);
val parameters_ = (("(" + signature_.parameters_.map_(ff.compiler.Emitter_.emitParameter_).join_(", ")) + ")");
val implicits_ = ff.core.Core_.if_(signature_.constraints_.getEmpty_(), {() =>
""
}).else_({() =>
(("(implicit " + signature_.constraints_.pairs_().map_({
case (ff.core.Pair_.Pair(i_, c_)) =>
((("i_" + i_) + " : ") + ff.compiler.Emitter_.emitType_(c_.representation_))
}).join_(", ")) + ")")
});
val returnType_ = ff.compiler.Emitter_.emitTypeAnnotation_(signature_.returnType_);
(((((("def " + ff.compiler.Emitter_.escapeKeyword_(signature_.name_)) + suffix_) + generics_) + parameters_) + implicits_) + returnType_)
}

def emitParameter_(parameter_ : ff.compiler.Syntax_.Parameter) : ff.core.String_.String = {
val mutability_ = ff.core.Core_.if_(parameter_.mutable_, {() =>
"var "
}).else_({() =>
""
});
val defaultValue_ = parameter_.default_.map_({(_w1) =>
(" = " + ff.compiler.Emitter_.emitTerm_(_w1))
}).else_({() =>
""
});
(((mutability_ + ff.compiler.Emitter_.escapeKeyword_(parameter_.name_)) + ff.compiler.Emitter_.emitTypeAnnotation_(parameter_.valueType_)) + defaultValue_)
}

def emitConstraints_(constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint]) : ff.core.String_.String = {
ff.core.Core_.if_(constraints_.getEmpty_(), {() =>
""
}).else_({() =>
val pairs_ = constraints_.map_({(_w1) =>
_w1.representation_
}).map_(ff.compiler.Emitter_.emitType_).pairs_();
(("(implicit " + pairs_.map_({
case (ff.core.Pair_.Pair(k_, v_)) =>
((("i_" + k_) + " : ") + v_)
}).join_(", ")) + ")")
})
}

def emitTypeParameters_(generics_ : ff.core.List_.List[ff.core.String_.String]) : ff.core.String_.String = {
ff.core.Core_.if_(generics_.getEmpty_(), {() =>
""
}).else_({() =>
(("[" + generics_.join_(", ")) + "]")
})
}

def emitTypeAnnotation_(t_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (t_) match {
case (_ : ff.compiler.Syntax_.TVariable) =>
""
case (_ : ff.compiler.Syntax_.TConstructor) =>
(" : " + ff.compiler.Emitter_.emitType_(t_))
}

def emitType_(type_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (type_) match {
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
("$" + index_)
case (t_ : ff.compiler.Syntax_.TConstructor) =>
ff.core.Core_.if_(t_.name_.startsWith_("Function$"), {() =>
ff.compiler.Emitter_.emitType_(t_.copy(name_ = t_.name_.replace_("$", "")))
}).elseIf_({() =>
t_.name_.startsWith_("Record$")
}, {() =>
(("{" + t_.name_.split_('$').dropFirst_(1).getList_().zip_(t_.generics_).map_({
case (ff.core.Pair_.Pair(field_, fieldType_)) =>
((("val " + ff.compiler.Emitter_.escapeKeyword_(field_)) + " : ") + ff.compiler.Emitter_.emitType_(fieldType_))
}).join_("; ")) + "}")
}).else_({() =>
val generics_ = ff.core.Core_.if_(t_.generics_.getEmpty_(), {() =>
""
}).else_({() =>
(("[" + t_.generics_.map_(ff.compiler.Emitter_.emitType_).join_(", ")) + "]")
});
(ff.compiler.Emitter_.escapeResolved_(t_.name_) + generics_)
})
}

def emitStatements_(term_ : ff.compiler.Syntax_.Term) : ff.core.String_.String = (term_) match {
case (ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionStrings_ = functions_.map_({(f_) =>
ff.compiler.Emitter_.emitFunctionDefinition_(ff.compiler.Syntax_.DFunction(at_, f_.signature_, f_.body_, ff.core.Option_.None()))
});
((functionStrings_.join_("\n") + "\n") + ff.compiler.Emitter_.emitStatements_(body_))
case (ff.compiler.Syntax_.ELet(at_, mutable_, name_, valueType_, value_, body_)) =>
((ff.compiler.Emitter_.emitLetDefinition_(ff.compiler.Syntax_.DLet(at_, name_, valueType_, value_, ff.core.Option_.None()), mutable_) + ";\n") + ff.compiler.Emitter_.emitStatements_(body_))
case (ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
((ff.compiler.Emitter_.emitStatements_(before_) + ";\n") + ff.compiler.Emitter_.emitStatements_(after_))
case (ff.compiler.Syntax_.EAssign(at_, operator_, name_, value_)) =>
((((ff.compiler.Emitter_.escapeKeyword_(name_) + " ") + operator_) + "= ") + ff.compiler.Emitter_.emitTerm_(value_))
case (ff.compiler.Syntax_.EAssignField(at_, operator_, record_, field_, value_)) =>
((((((ff.compiler.Emitter_.emitTerm_(record_) + ".") + ff.compiler.Emitter_.escapeKeyword_(field_)) + " ") + operator_) + "= ") + ff.compiler.Emitter_.emitTerm_(value_))
case (_) =>
ff.compiler.Emitter_.emitTerm_(term_)
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
ff.compiler.Emitter_.escapeResolved_(name_)
case (ff.compiler.Syntax_.EList(at_, _, items_)) if items_.all_({(_w1) =>
(!_w1.second_)
}) =>
(("List(" + items_.map_({(_w1) =>
ff.compiler.Emitter_.emitTerm_(_w1.first_)
}).join_(", ")) + ")")
case (ff.compiler.Syntax_.EList(at_, _, items_)) =>
(("(List(" + items_.map_({
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.False())) =>
(("List(" + ff.compiler.Emitter_.emitTerm_(item_)) + ")")
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.True())) =>
ff.compiler.Emitter_.emitTerm_(item_)
}).join_(", ")) + ").flatten)")
case (ff.compiler.Syntax_.EVariant(at_, name_, typeArguments_, arguments_)) =>
val generics_ = ff.core.Core_.if_(typeArguments_.getEmpty_(), {() =>
""
}).else_({() =>
(("[" + typeArguments_.map_(ff.compiler.Emitter_.emitType_).join_(", ")) + "]")
});
((((ff.compiler.Emitter_.escapeResolved_(name_) + generics_) + "(") + arguments_.getList_().getFlatten_().map_(ff.compiler.Emitter_.emitArgument_).join_(", ")) + ")")
case (ff.compiler.Syntax_.EVariantIs(at_, name_, typeArguments_)) =>
val generics_ = ff.core.Core_.if_(typeArguments_.getEmpty_(), {() =>
""
}).else_({() =>
(("[" + typeArguments_.map_(ff.compiler.Emitter_.emitType_).join_(", ")) + "]")
});
((("({ case _w : " + ff.compiler.Emitter_.escapeResolved_(name_)) + generics_) + " => Some(_w); case _ => None() })")
case (ff.compiler.Syntax_.ECopy(at_, name_, record_, fields_)) =>
val fieldCode_ = fields_.map_({(f_) =>
((ff.compiler.Emitter_.escapeKeyword_(f_.name_) + " = ") + ff.compiler.Emitter_.emitTerm_(f_.value_))
}).join_(", ");
(((ff.compiler.Emitter_.emitTerm_(record_) + ".copy(") + fieldCode_) + ")")
case (ff.compiler.Syntax_.EField(at_, record_, field_)) =>
((ff.compiler.Emitter_.emitTerm_(record_) + ".") + ff.compiler.Emitter_.escapeKeyword_(field_))
case (ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, List(ff.compiler.Syntax_.MatchCase(_, patterns_, ff.core.Option_.None(), body_))))) if patterns_.all_({
case (_ : ff.compiler.Syntax_.PVariable) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
}) =>
val parameters_ = patterns_.map_({
case (p_ : ff.compiler.Syntax_.PVariable) =>
p_.name_.map_(ff.compiler.Emitter_.escapeKeyword_).else_({() =>
"_"
})
case (_) =>
ff.core.Core_.panic_("!")
}).join_(", ");
(((("{(" + parameters_) + ") =>\n") + ff.compiler.Emitter_.emitStatements_(body_)) + "\n}")
case (ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, cases_))) =>
val casesString_ = cases_.map_(ff.compiler.Emitter_.emitCase_).join_("\n");
(("{\n" + casesString_) + "\n}")
case (ff.compiler.Syntax_.EPipe(at_, value_, function_)) =>
(((("pipe_dot(" + ff.compiler.Emitter_.emitTerm_(value_)) + ")(") + ff.compiler.Emitter_.emitTerm_(function_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(value_))) if (!operator_.expectFirst_().getIsLetter_()) =>
((("(" + operator_) + ff.compiler.Emitter_.emitArgument_(value_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(left_, right_))) if (!operator_.expectFirst_().getIsLetter_()) =>
(((((("(" + ff.compiler.Emitter_.emitArgument_(left_)) + " ") + operator_) + " ") + ff.compiler.Emitter_.emitArgument_(right_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, function_, typeArguments_, arguments_)) =>
val generics_ = ff.core.Core_.if_(typeArguments_.getEmpty_(), {() =>
""
}).else_({() =>
(("[" + typeArguments_.map_(ff.compiler.Emitter_.emitType_).join_(", ")) + "]")
});
((((ff.compiler.Emitter_.emitTerm_(function_) + generics_) + "(") + arguments_.map_(ff.compiler.Emitter_.emitArgument_).join_(", ")) + ")")
case (ff.compiler.Syntax_.ERecord(at_, fields_)) =>
ff.core.Core_.if_(fields_.getEmpty_(), {() =>
"{}"
}).else_({() =>
val list_ = fields_.map_({(f_) =>
((("val " + ff.compiler.Emitter_.escapeKeyword_(f_.name_)) + " = ") + ff.compiler.Emitter_.emitTerm_(f_.value_))
});
(("new {\n" + list_.join_(";\n")) + ";\n}")
})
case (ff.compiler.Syntax_.EWildcard(at_, index_)) =>
ff.core.Core_.if_((index_ == 0), {() =>
ff.compiler.Emitter_.fail_(at_, "Unbound wildcard")
});
("_w" + index_)
case (_) =>
(("{\n" + ff.compiler.Emitter_.emitStatements_(term_)) + "\n}")
}

def emitArgument_(argument_ : ff.compiler.Syntax_.Argument) : ff.core.String_.String = {
(argument_.name_.map_({(name_) =>
(ff.compiler.Emitter_.escapeKeyword_(name_) + " = ")
}).else_({() =>
""
}) + ff.compiler.Emitter_.emitTerm_(argument_.value_))
}

def emitCase_(matchCase_ : ff.compiler.Syntax_.MatchCase) : ff.core.String_.String = {
val pair_ = matchCase_.patterns_.map_(ff.compiler.Emitter_.emitPattern_).getUnzip_();
val patterns_ = pair_.first_.join_(", ");
val condition_ = matchCase_.condition_.map_({(_w1) =>
(("if " + ff.compiler.Emitter_.emitTerm_(_w1)) + " ")
}).else_({() =>
""
});
val toLists_ = pair_.second_.getFlatten_().join_();
(((((("case (" + patterns_) + ") ") + condition_) + "=>\n") + toLists_) + ff.compiler.Emitter_.emitStatements_(matchCase_.body_))
}

def emitPattern_(pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]] = (pattern_) match {
case (ff.compiler.Syntax_.PVariable(at_, name_)) =>
ff.core.Pair_.Pair(name_.map_(ff.compiler.Emitter_.escapeKeyword_).else_({() =>
"_"
}), List())
case (ff.compiler.Syntax_.PVariant(at_, name_, patterns_)) =>
val pairs_ = patterns_.map_(ff.compiler.Emitter_.emitPattern_);
ff.core.Pair_.Pair((((ff.compiler.Emitter_.escapeResolved_(name_) + "(") + pairs_.map_({(_w1) =>
_w1.first_
}).join_(", ")) + ")"), pairs_.flatMap_({(_w1) =>
_w1.second_
}))
case (ff.compiler.Syntax_.PVariantAs(at_, name_, variable_)) =>
ff.core.Pair_.Pair(((variable_.map_(ff.compiler.Emitter_.escapeKeyword_).else_({() =>
"_"
}) + " : ") + ff.compiler.Emitter_.escapeResolved_(name_)), List())
case (ff.compiler.Syntax_.PAlias(at_, p_, variable_)) =>
val pair_ = ff.compiler.Emitter_.emitPattern_(p_);
ff.core.Pair_.Pair((((ff.compiler.Emitter_.escapeKeyword_(variable_) + " @ (") + pair_.first_) + ")"), pair_.second_)
case (ff.compiler.Syntax_.PList(at_, _, items_)) =>
val pair_ = items_.map_({
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.False())) =>
ff.compiler.Emitter_.emitPattern_(item_)
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.True())) =>
val pair_ = ff.compiler.Emitter_.emitPattern_(item_);
ff.core.Pair_.Pair((pair_.first_ + "_seq @ _*"), (List(List((((("val " + pair_.first_) + " = ") + pair_.first_) + "_seq.toList;\n")), pair_.second_).flatten))
}).getUnzip_();
ff.core.Pair_.Pair((("List(" + pair_.first_.join_(", ")) + ")"), pair_.second_.getFlatten_())
}

def extractTypeName_(type_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (type_) match {
case (ff.compiler.Syntax_.TVariable(at_, index_)) =>
ff.compiler.Emitter_.fail_(at_, ("Unexpected type variable: $" + index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
t_.name_
}

def escapeResolved_(word_ : ff.core.String_.String) : ff.core.String_.String = {
val parts_ = word_.replace_(":", ".").replace_("/", ".").split_('.').getList_();
val initialParts_ = parts_.dropLast_();
ff.core.Core_.if_(initialParts_.getEmpty_(), {() =>
ff.compiler.Emitter_.escapeKeyword_(parts_.expectLast_())
}).else_({() =>
((initialParts_.join_(".") + "_.") + ff.compiler.Emitter_.escapeKeyword_(parts_.expectLast_()))
})
}

def escapeKeyword_(word_ : ff.core.String_.String) : ff.core.String_.String = {
ff.core.Core_.if_((ff.compiler.Emitter_.keywords_.contains_(word_) || word_.expectFirst_().getIsLower_()), {() =>
(word_ + "_")
}).else_({() =>
word_
})
}



}
