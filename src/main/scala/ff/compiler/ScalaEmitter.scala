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
object ScalaEmitter_ {


val keywords_ : ff.core.Set_.Set[ff.core.String_.String] = ff.core.List_.List_toSet[ff.core.String_.String](self_ = List("abstract", "case", "catch", "class", "def", "do", "else", "extends", "false", "final", "finally", "for", "forSome", "if", "implicit", "import", "lazy", "match", "new", "null", "object", "override", "package", "private", "protected", "return", "sealed", "super", "this", "throw", "trait", "true", "try", "type", "val", "var", "while", "with", "yield", "scala", "java"))
def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}

def emitModule_(packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], module_ : ff.compiler.Syntax_.Module) : ff.core.String_.String = {
val moduleNamespace_ : ff.core.String_.String = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = ff.core.String_.String_replace(self_ = module_.file_, needle_ = "\\", replacement_ = "/")), p_ = {(_w1) =>
(_w1 != '/')
})), p_ = {(_w1) =>
(_w1 != '.')
});
val modulePrefix_ : ff.core.String_.String = (((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + ff.core.String_.String_dropLast(self_ = module_.file_, count_ = 3)) + ".");
val package_ : ff.core.String_.String = ((packagePair_.first_ + ".") + packagePair_.second_);
val parts_ : ff.core.List_.List[ff.core.List_.List[ff.core.String_.String]] = List(List(("package " + package_)), ff.core.List_.List_map[ff.compiler.Syntax_.DImport, ff.core.String_.String](self_ = ff.core.List_.List_sortBy[ff.compiler.Syntax_.DImport](self_ = module_.imports_, body_ = {(i_) =>
((((i_.package_.first_ + ".") + i_.package_.second_) + ".") + i_.file_)
}), body_ = {(i_) =>
(((((("import " + i_.package_.first_) + ".") + i_.package_.second_) + ".") + i_.file_) + "_._")
}), List((("object " + moduleNamespace_) + "_ {")), ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.core.String_.String]](condition_ = ff.core.List_.List_any[ff.compiler.Syntax_.DFunction](self_ = module_.functions_, body_ = {(_w1) =>
(_w1.signature_.name_ == "main")
}), body_ = {() =>
List(ff.compiler.ScalaEmitter_.emitMain_())
}), body_ = {() =>
List()
}), ff.core.List_.List_map[ff.compiler.Syntax_.DType, ff.core.String_.String](self_ = module_.types_, body_ = {(definition_) =>
ff.compiler.ScalaEmitter_.emitTypeDefinition_(definition_ = definition_)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.core.String_.String](self_ = module_.lets_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitLetDefinition_(definition_ = _w1, mutable_ = ff.core.Bool_.False())
}), ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = module_.functions_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitFunctionDefinition_(definition_ = _w1, suffix_ = "")
}), ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.core.String_.String](self_ = module_.extends_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitExtendsDefinition_(definition_ = _w1)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DTrait, ff.core.String_.String](self_ = module_.traits_, body_ = {(definition_) =>
ff.compiler.ScalaEmitter_.emitTraitDefinition_(definition_ = definition_)
}), ff.core.List_.List_map[ff.compiler.Syntax_.DInstance, ff.core.String_.String](self_ = module_.instances_, body_ = {(definition_) =>
ff.compiler.ScalaEmitter_.emitInstanceDefinition_(definition_ = definition_)
}), List("}"));
ff.core.Option_.Option_each[{val at_ : ff.compiler.Syntax_.Location; val generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type]; val name_ : ff.core.String_.String}](self_ = ff.core.List_.List_find[{val at_ : ff.compiler.Syntax_.Location; val generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type]; val name_ : ff.core.String_.String}](self_ = ff.core.List_.List_collect[ff.compiler.Syntax_.Type, {val at_ : ff.compiler.Syntax_.Location; val generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type]; val name_ : ff.core.String_.String}](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.compiler.Syntax_.Type](self_ = module_.extends_, body_ = {(_w1) =>
_w1.type_
}), body_ = ({ case _w : ff.compiler.Syntax_.TConstructor => Some(_w); case _ => None() })), body_ = {(t_) =>
(!ff.core.List_.List_any[ff.compiler.Syntax_.DType](self_ = module_.types_, body_ = {(_w1) =>
((modulePrefix_ + _w1.name_) == t_.name_)
}))
}), body_ = {(t_) =>
ff.compiler.ScalaEmitter_.fail_[ff.core.Nothing_.Nothing](at_ = t_.at_, message_ = ("Type not defined in this file: " + t_.name_));
ff.core.Unit_.Unit()
});
(ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.List_.List[ff.core.String_.String], ff.core.String_.String](self_ = parts_, body_ = {(_w1) =>
ff.core.List_.List_join(self_ = _w1, separator_ = "\n\n")
}), separator_ = "\n") + "\n")
}

def emitMain_() : ff.core.String_.String = {
"def main(arguments : scala.Array[String]) : Unit = main_(ff.core.System_.SystemArguments(List_toArray(arguments.toList)))"
}

def emitTypeMembers_(name_ : ff.core.String_.String, lets_ : ff.core.List_.List[ff.compiler.Syntax_.DLet], functions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction]) : ff.core.String_.String = {
val strings_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_addAll[ff.core.String_.String](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.core.String_.String](self_ = lets_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitLetDefinition_(definition_ = _w1, mutable_ = ff.core.Bool_.False())
}), list_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = functions_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitFunctionDefinition_(definition_ = _w1, suffix_ = "")
}));
(((("object " + name_) + " {\n\n") + ff.core.List_.List_join(self_ = strings_, separator_ = "\n\n")) + "\n\n}")
}

def emitTypeDefinition_(definition_ : ff.compiler.Syntax_.DType) : ff.core.String_.String = {
val generics_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitTypeParameters_(generics_ = definition_.generics_);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ((ff.core.Option_.Option_isEmpty[ff.core.String_.String](self_ = definition_.targets_.scala_) && (ff.core.List_.List_size[ff.compiler.Syntax_.Variant](self_ = definition_.variants_) == 1)) && (ff.core.List_.List_expectFirst[ff.compiler.Syntax_.Variant](self_ = definition_.variants_).name_ == definition_.name_)), body_ = {() =>
val fields_ : ff.core.String_.String = (("(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.commonFields_, body_ = {(parameter_) =>
ff.compiler.ScalaEmitter_.emitParameter_(parameter_ = parameter_)
}), separator_ = ", ")) + ")");
((("case class " + definition_.name_) + generics_) + fields_)
}), body_ = {() =>
val variants_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.Variant, ff.core.String_.String](self_ = definition_.variants_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitVariantDefinition_(typeDefinition_ = definition_, definition_ = _w1)
});
val head_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = definition_.targets_.scala_, body_ = {(code_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.String_.String_startsWith(self_ = code_, prefix_ = "#", offset_ = 0), body_ = {() =>
(ff.core.String_.String_dropFirst(self_ = code_, count_ = 1) + ";\n")
}), body_ = {() =>
((((("type " + definition_.name_) + generics_) + " = ") + code_) + ";\n")
})
}), body_ = {() =>
val commonFields_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Parameter](self_ = definition_.commonFields_), body_ = {() =>
""
}), body_ = {() =>
((" {\n" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.commonFields_, body_ = {(parameter_) =>
ff.compiler.ScalaEmitter_.emitParameter_(parameter_ = parameter_)
}), body_ = {(_w1) =>
(("    val " + _w1) + "\n")
}), separator_ = "")) + "}")
});
(((("sealed abstract class " + definition_.name_) + generics_) + " extends Product with Serializable") + commonFields_)
});
(head_ + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.String_.String](self_ = variants_, body_ = {(_w1) =>
("\n" + _w1)
}), separator_ = ""))
})
}

def emitLetDefinition_(definition_ : ff.compiler.Syntax_.DLet, mutable_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.String_.String = {
val typeAnnotation_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitTypeAnnotation_(t_ = definition_.variableType_);
val mutability_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = mutable_, body_ = {() =>
"var"
}), body_ = {() =>
"val"
});
val valueCode_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = definition_.targets_.scala_, body_ = {() =>
ff.compiler.ScalaEmitter_.emitTerm_(term_ = definition_.value_)
});
(((((mutability_ + " ") + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = definition_.name_)) + typeAnnotation_) + " = ") + valueCode_)
}

def emitFunctionDefinition_(definition_ : ff.compiler.Syntax_.DFunction, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = {
val signature_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitSignature_(signature_ = definition_.signature_, suffix_ = suffix_);
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = definition_.targets_.scala_, body_ = {(code_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.String_.String_startsWith(self_ = code_, prefix_ = "#", offset_ = 0), body_ = {() =>
ff.core.String_.String_dropFirst(self_ = code_, count_ = 1)
}), body_ = {() =>
(((signature_ + " = {\n") + code_) + "\n}")
})
}), body_ = {() =>
pipe_dot(definition_.body_)({
case (ff.compiler.Syntax_.Lambda(_, List(matchCase_))) if ff.core.List_.List_all[ff.compiler.Syntax_.MatchPattern](self_ = matchCase_.patterns_, body_ = {
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.None())) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
}) =>
val body_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitStatements_(term_ = matchCase_.body_);
(((signature_ + " = {\n") + body_) + "\n}")
case (_) =>
val tuple_ : ff.core.String_.String = (("(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.signature_.parameters_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = _w1.name_)
}), separator_ = ", ")) + ")");
val cases_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.core.String_.String](self_ = definition_.body_.cases_, body_ = {(matchCase_) =>
ff.compiler.ScalaEmitter_.emitCase_(matchCase_ = matchCase_)
}), separator_ = "\n");
(((((signature_ + " = ") + tuple_) + " match {\n") + cases_) + "\n}")
})
})
}

def emitExtendsDefinition_(definition_ : ff.compiler.Syntax_.DExtend) : ff.core.String_.String = {
val typeName_ : ff.core.String_.String = ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = ff.compiler.ScalaEmitter_.extractTypeName_(type_ = definition_.type_)), p_ = {(_w1) =>
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
ff.compiler.ScalaEmitter_.emitFunctionDefinition_(definition_ = _w1, suffix_ = "")
}), separator_ = "\n\n")
}

def emitTraitDefinition_(definition_ : ff.compiler.Syntax_.DTrait) : ff.core.String_.String = {
val generics_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitTypeParameters_(generics_ = definition_.generics_);
val implicits_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitConstraints_(constraints_ = definition_.constraints_);
val parameters_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Parameter](self_ = definition_.generatorParameters_), body_ = {() =>
""
}), body_ = {() =>
(("(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.generatorParameters_, body_ = {(parameter_) =>
ff.compiler.ScalaEmitter_.emitParameter_(parameter_ = parameter_)
}), separator_ = ", ")) + ")")
});
val methods_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Signature](self_ = definition_.methods_), body_ = {() =>
""
}), body_ = {() =>
((((" {\n\nimport " + definition_.name_) + "._\n\n") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Signature, ff.core.String_.String](self_ = definition_.methods_, body_ = {(signature_) =>
val body_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_orElse(self_ = ff.core.Option_.Option_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda], ff.core.String_.String](self_ = ff.core.List_.List_find[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]](self_ = definition_.methodDefaults_, body_ = {(_w1) =>
(_w1.first_ == signature_.name_)
}), body_ = {
case (ff.core.Pair_.Pair(_, lambda_)) =>
((" {\n" + ff.compiler.ScalaEmitter_.emitStatements_(term_ = ff.compiler.Syntax_.ELambda(at_ = lambda_.at_, lambda_ = lambda_))) + "\n}")
}), body_ = {() =>
ff.core.Option_.Option_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda], ff.core.String_.String](self_ = ff.core.List_.List_find[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]](self_ = definition_.methodGenerators_, body_ = {(_w1) =>
(_w1.first_ == signature_.name_)
}), body_ = {
case (ff.core.Pair_.Pair(_, e_)) =>
" {\n// TODO: Generate\n}"
})
}), body_ = {() =>
""
});
(ff.compiler.ScalaEmitter_.emitSignature_(signature_ = signature_, suffix_ = "_m") + body_)
}), separator_ = "\n\n")) + "\n\n}")
});
val methodWrappers_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Signature](self_ = definition_.methods_), body_ = {() =>
""
}), body_ = {() =>
((" \n\n" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Signature, ff.core.String_.String](self_ = definition_.methods_, body_ = {(signature_) =>
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = definition_.at_, name_ = definition_.name_, generics_ = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = definition_.generics_, body_ = {(_w1) =>
ff.compiler.Syntax_.TConstructor(at_ = definition_.at_, name_ = _w1, generics_ = List())
}));
(((((((ff.compiler.ScalaEmitter_.emitSignature_(signature_ = pipe_dot(signature_)({(_c) =>
ff.compiler.Syntax_.Signature(at_ = _c.at_, name_ = _c.name_, generics_ = ff.core.List_.List_addAll[ff.core.String_.String](self_ = definition_.generics_, list_ = signature_.generics_), constraints_ = (List(List(ff.compiler.Syntax_.Constraint(representation_ = t_)), definition_.constraints_, signature_.constraints_).flatten), parameters_ = _c.parameters_, returnType_ = _c.returnType_)
}), suffix_ = "") + " =\n    scala.Predef.implicitly[") + ff.compiler.ScalaEmitter_.emitType_(type_ = t_)) + "].") + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = signature_.name_)) + "_m(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = signature_.parameters_, body_ = {(_w1) =>
_w1.name_
}), body_ = {(word_) =>
ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = word_)
}), separator_ = ", ")) + ")")
}), separator_ = "\n\n")) + "\n\n")
});
((((((((((("abstract class " + definition_.name_) + generics_) + parameters_) + implicits_) + methods_) + "\n") + "object ") + definition_.name_) + " {") + methodWrappers_) + "}")
}

def emitInstanceDefinition_(definition_ : ff.compiler.Syntax_.DInstance) : ff.core.String_.String = {
val signature_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitSignature_(signature_ = ff.compiler.Syntax_.Signature(at_ = definition_.at_, name_ = ((ff.compiler.ScalaEmitter_.extractTypeName_(type_ = definition_.traitType_) + "_") + ff.core.Int_.Int_abs(self_ = ff.core.Core_.magicHashCode_[ff.compiler.Syntax_.DInstance](value_ = definition_))), generics_ = definition_.generics_, constraints_ = definition_.constraints_, parameters_ = List(), returnType_ = definition_.traitType_), suffix_ = "");
val methods_ : ff.core.String_.String = ((((" {\n\nimport " + ff.compiler.ScalaEmitter_.extractTypeName_(type_ = definition_.traitType_)) + "._\n\n") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = definition_.methods_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitFunctionDefinition_(definition_ = _w1, suffix_ = "_m")
}), separator_ = "\n\n")) + "\n\n}");
val value_ : ff.core.String_.String = (("new " + ff.compiler.ScalaEmitter_.emitType_(type_ = definition_.traitType_)) + methods_);
((("implicit " + signature_) + " =\n    ") + value_)
}

def emitVariantDefinition_(typeDefinition_ : ff.compiler.Syntax_.DType, definition_ : ff.compiler.Syntax_.Variant) : ff.core.String_.String = {
val generics_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitTypeParameters_(generics_ = typeDefinition_.generics_);
val allFields_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.List_.List_addAll[ff.compiler.Syntax_.Parameter](self_ = typeDefinition_.commonFields_, list_ = definition_.fields_);
val fields_ : ff.core.String_.String = (("(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = allFields_, body_ = {(parameter_) =>
ff.compiler.ScalaEmitter_.emitParameter_(parameter_ = parameter_)
}), separator_ = ", ")) + ")");
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = definition_.targets_.scala_, body_ = {(originalCode_) =>
val code_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (originalCode_ == "scala.Unit"), body_ = {() =>
"{}"
}), body_ = {() =>
originalCode_
});
((((((((((((((((("object " + definition_.name_) + " {\n") + "def apply") + generics_) + fields_) + " = ") + code_) + ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (fields_ != "()"), body_ = {() =>
fields_
}), body_ = {() =>
""
})) + ";\n") + "def unapply") + generics_) + "(value : ") + typeDefinition_.name_) + generics_) + ") = ") + ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (fields_ != "()"), body_ = {() =>
((((("scala.Some(value).collectFirst { case " + code_) + fields_) + " => ") + fields_) + " };\n")
}), body_ = {() =>
(("value == " + code_) + ";\n")
})) + "}")
}), body_ = {() =>
(((((("case class " + definition_.name_) + generics_) + fields_) + " extends ") + typeDefinition_.name_) + generics_)
})
}

def emitSignature_(signature_ : ff.compiler.Syntax_.Signature, suffix_ : ff.core.String_.String = "") : ff.core.String_.String = {
val generics_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitTypeParameters_(generics_ = signature_.generics_);
val parameters_ : ff.core.String_.String = (("(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = signature_.parameters_, body_ = {(parameter_) =>
ff.compiler.ScalaEmitter_.emitParameter_(parameter_ = parameter_)
}), separator_ = ", ")) + ")");
val implicits_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Constraint](self_ = signature_.constraints_), body_ = {() =>
""
}), body_ = {() =>
(("(implicit " + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.Int_.Int, ff.compiler.Syntax_.Constraint], ff.core.String_.String](self_ = ff.core.List_.List_pairs[ff.compiler.Syntax_.Constraint](self_ = signature_.constraints_), body_ = {
case (ff.core.Pair_.Pair(i_, c_)) =>
((("i_" + i_) + " : ") + ff.compiler.ScalaEmitter_.emitType_(type_ = c_.representation_))
}), separator_ = ", ")) + ")")
});
val returnType_ : ff.core.String_.String = ff.compiler.ScalaEmitter_.emitTypeAnnotation_(t_ = signature_.returnType_);
(((((("def " + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = signature_.name_)) + suffix_) + generics_) + parameters_) + implicits_) + returnType_)
}

def emitParameter_(parameter_ : ff.compiler.Syntax_.Parameter) : ff.core.String_.String = {
val mutability_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = parameter_.mutable_, body_ = {() =>
"var "
}), body_ = {() =>
""
});
val defaultValue_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.core.String_.String](self_ = parameter_.default_, body_ = {(_w1) =>
(" = " + ff.compiler.ScalaEmitter_.emitTerm_(term_ = _w1))
}), body_ = {() =>
""
});
(((mutability_ + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = parameter_.name_)) + ff.compiler.ScalaEmitter_.emitTypeAnnotation_(t_ = parameter_.valueType_)) + defaultValue_)
}

def emitConstraints_(constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint]) : ff.core.String_.String = {
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Constraint](self_ = constraints_), body_ = {() =>
""
}), body_ = {() =>
val pairs_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.Int_.Int, ff.core.String_.String]] = ff.core.List_.List_pairs[ff.core.String_.String](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Constraint, ff.compiler.Syntax_.Type](self_ = constraints_, body_ = {(_w1) =>
_w1.representation_
}), body_ = {(type_) =>
ff.compiler.ScalaEmitter_.emitType_(type_ = type_)
}));
(("(implicit " + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.Int_.Int, ff.core.String_.String], ff.core.String_.String](self_ = pairs_, body_ = {
case (ff.core.Pair_.Pair(k_, v_)) =>
((("i_" + k_) + " : ") + v_)
}), separator_ = ", ")) + ")")
})
}

def emitTypeParameters_(generics_ : ff.core.List_.List[ff.core.String_.String]) : ff.core.String_.String = {
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.core.String_.String](self_ = generics_), body_ = {() =>
""
}), body_ = {() =>
(("[" + ff.core.List_.List_join(self_ = generics_, separator_ = ", ")) + "]")
})
}

def emitTypeAnnotation_(t_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (t_) match {
case (_ : ff.compiler.Syntax_.TVariable) =>
""
case (_ : ff.compiler.Syntax_.TConstructor) =>
(" : " + ff.compiler.ScalaEmitter_.emitType_(type_ = t_))
}

def emitType_(type_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (type_) match {
case (ff.compiler.Syntax_.TVariable(_, index_)) =>
("$" + index_)
case (t_ : ff.compiler.Syntax_.TConstructor) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.String_.String_startsWith(self_ = t_.name_, prefix_ = "Function$", offset_ = 0), body_ = {() =>
ff.compiler.ScalaEmitter_.emitType_(type_ = pipe_dot(t_)({(_c) =>
ff.compiler.Syntax_.TConstructor(at_ = _c.at_, name_ = ff.core.String_.String_replace(self_ = t_.name_, needle_ = "$", replacement_ = ""), generics_ = _c.generics_)
}))
}), condition_ = {() =>
ff.core.String_.String_startsWith(self_ = t_.name_, prefix_ = "Record$", offset_ = 0)
}, body_ = {() =>
(("{" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type], ff.core.String_.String](self_ = ff.core.List_.List_zip[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = ff.core.Array_.Array_toList[ff.core.String_.String](self_ = ff.core.Array_.Array_dropFirst[ff.core.String_.String](self_ = ff.core.String_.String_split(self_ = t_.name_, char_ = '$'), count_ = 1)), that_ = t_.generics_), body_ = {
case (ff.core.Pair_.Pair(field_, fieldType_)) =>
((("val " + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = field_)) + " : ") + ff.compiler.ScalaEmitter_.emitType_(type_ = fieldType_))
}), separator_ = "; ")) + "}")
}), body_ = {() =>
val generics_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Type](self_ = t_.generics_), body_ = {() =>
""
}), body_ = {() =>
(("[" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.core.String_.String](self_ = t_.generics_, body_ = {(type_) =>
ff.compiler.ScalaEmitter_.emitType_(type_ = type_)
}), separator_ = ", ")) + "]")
});
(ff.compiler.ScalaEmitter_.escapeResolved_(word_ = t_.name_) + generics_)
})
}

def emitStatements_(term_ : ff.compiler.Syntax_.Term) : ff.core.String_.String = (term_) match {
case (ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionStrings_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = functions_, body_ = {(f_) =>
ff.compiler.ScalaEmitter_.emitFunctionDefinition_(definition_ = ff.compiler.Syntax_.DFunction(at_ = at_, signature_ = f_.signature_, body_ = f_.body_, targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())), suffix_ = "")
});
((ff.core.List_.List_join(self_ = functionStrings_, separator_ = "\n") + "\n") + ff.compiler.ScalaEmitter_.emitStatements_(term_ = body_))
case (ff.compiler.Syntax_.ELet(at_, mutable_, name_, valueType_, value_, body_)) =>
((ff.compiler.ScalaEmitter_.emitLetDefinition_(definition_ = ff.compiler.Syntax_.DLet(at_ = at_, name_ = name_, variableType_ = valueType_, value_ = value_, targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())), mutable_ = mutable_) + ";\n") + ff.compiler.ScalaEmitter_.emitStatements_(term_ = body_))
case (ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
((ff.compiler.ScalaEmitter_.emitStatements_(term_ = before_) + ";\n") + ff.compiler.ScalaEmitter_.emitStatements_(term_ = after_))
case (ff.compiler.Syntax_.EAssign(at_, operator_, name_, value_)) =>
((((ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = name_) + " ") + operator_) + "= ") + ff.compiler.ScalaEmitter_.emitTerm_(term_ = value_))
case (ff.compiler.Syntax_.EAssignField(at_, operator_, record_, field_, value_)) =>
((((((ff.compiler.ScalaEmitter_.emitTerm_(term_ = record_) + ".") + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = field_)) + " ") + operator_) + "= ") + ff.compiler.ScalaEmitter_.emitTerm_(term_ = value_))
case (_) =>
ff.compiler.ScalaEmitter_.emitTerm_(term_ = term_)
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
ff.compiler.ScalaEmitter_.escapeResolved_(word_ = name_)
case (ff.compiler.Syntax_.EList(at_, _, items_)) if ff.core.List_.List_all[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]](self_ = items_, body_ = {(_w1) =>
(!_w1.second_)
}) =>
(("List(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool], ff.core.String_.String](self_ = items_, body_ = {(_w1) =>
ff.compiler.ScalaEmitter_.emitTerm_(term_ = _w1.first_)
}), separator_ = ", ")) + ")")
case (ff.compiler.Syntax_.EList(at_, _, items_)) =>
(("(List(" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool], ff.core.String_.String](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.False())) =>
(("List(" + ff.compiler.ScalaEmitter_.emitTerm_(term_ = item_)) + ")")
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.True())) =>
ff.compiler.ScalaEmitter_.emitTerm_(term_ = item_)
}), separator_ = ", ")) + ").flatten)")
case (ff.compiler.Syntax_.EVariant(at_, name_, typeArguments_, arguments_)) =>
val generics_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Type](self_ = typeArguments_), body_ = {() =>
""
}), body_ = {() =>
(("[" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.core.String_.String](self_ = typeArguments_, body_ = {(type_) =>
ff.compiler.ScalaEmitter_.emitType_(type_ = type_)
}), separator_ = ", ")) + "]")
});
((((ff.compiler.ScalaEmitter_.escapeResolved_(word_ = name_) + generics_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.String_.String](self_ = ff.core.List_.List_flatten[ff.compiler.Syntax_.Argument](self_ = ff.core.Option_.Option_toList[ff.core.List_.List[ff.compiler.Syntax_.Argument]](self_ = arguments_)), body_ = {(argument_) =>
ff.compiler.ScalaEmitter_.emitArgument_(argument_ = argument_)
}), separator_ = ", ")) + ")")
case (ff.compiler.Syntax_.EVariantIs(at_, name_, typeArguments_)) =>
val generics_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Type](self_ = typeArguments_), body_ = {() =>
""
}), body_ = {() =>
(("[" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.core.String_.String](self_ = typeArguments_, body_ = {(type_) =>
ff.compiler.ScalaEmitter_.emitType_(type_ = type_)
}), separator_ = ", ")) + "]")
});
((("({ case _w : " + ff.compiler.ScalaEmitter_.escapeResolved_(word_ = name_)) + generics_) + " => Some(_w); case _ => None() })")
case (ff.compiler.Syntax_.ECopy(at_, name_, record_, fields_)) =>
val fieldCode_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.core.String_.String](self_ = fields_, body_ = {(f_) =>
((ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = f_.name_) + " = ") + ff.compiler.ScalaEmitter_.emitTerm_(term_ = f_.value_))
}), separator_ = ", ");
(((ff.compiler.ScalaEmitter_.emitTerm_(term_ = record_) + ".copy(") + fieldCode_) + ")")
case (ff.compiler.Syntax_.EField(at_, record_, field_)) =>
((ff.compiler.ScalaEmitter_.emitTerm_(term_ = record_) + ".") + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = field_))
case (ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, List(ff.compiler.Syntax_.MatchCase(_, patterns_, ff.core.Option_.None(), body_))))) if ff.core.List_.List_all[ff.compiler.Syntax_.MatchPattern](self_ = patterns_, body_ = {
case (_ : ff.compiler.Syntax_.PVariable) =>
ff.core.Bool_.True()
case (_) =>
ff.core.Bool_.False()
}) =>
val parameters_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.core.String_.String](self_ = patterns_, body_ = {
case (p_ : ff.compiler.Syntax_.PVariable) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = p_.name_, body_ = {(word_) =>
ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = word_)
}), body_ = {() =>
"_"
})
case (_) =>
ff.core.Core_.panic_[ff.core.String_.String](message_ = "!")
}), separator_ = ", ");
(((("{(" + parameters_) + ") =>\n") + ff.compiler.ScalaEmitter_.emitStatements_(term_ = body_)) + "\n}")
case (ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(_, cases_))) =>
val casesString_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.core.String_.String](self_ = cases_, body_ = {(matchCase_) =>
ff.compiler.ScalaEmitter_.emitCase_(matchCase_ = matchCase_)
}), separator_ = "\n");
(("{\n" + casesString_) + "\n}")
case (ff.compiler.Syntax_.EPipe(at_, value_, function_)) =>
(((("pipe_dot(" + ff.compiler.ScalaEmitter_.emitTerm_(term_ = value_)) + ")(") + ff.compiler.ScalaEmitter_.emitTerm_(term_ = function_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(value_))) if (!ff.core.Char_.Char_isAsciiLetter(self_ = ff.core.String_.String_expectFirst(self_ = operator_))) =>
((("(" + operator_) + ff.compiler.ScalaEmitter_.emitArgument_(argument_ = value_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, ff.compiler.Syntax_.EVariable(_, operator_, _, _), List(), List(left_, right_))) if (!ff.core.Char_.Char_isAsciiLetter(self_ = ff.core.String_.String_expectFirst(self_ = operator_))) =>
(((((("(" + ff.compiler.ScalaEmitter_.emitArgument_(argument_ = left_)) + " ") + operator_) + " ") + ff.compiler.ScalaEmitter_.emitArgument_(argument_ = right_)) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, function_ @ (ff.compiler.Syntax_.EVariable(_, name_, _, _)), _, arguments_)) if (((name_ == "ff:core/Option.Option_else") || (name_ == "ff:core/Option.Option_elseIf")) || (name_ == "ff:core/Option.Option_orElse")) =>
(((ff.compiler.ScalaEmitter_.emitTerm_(term_ = function_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.String_.String](self_ = arguments_, body_ = {(argument_) =>
ff.compiler.ScalaEmitter_.emitArgument_(argument_ = argument_)
}), separator_ = ", ")) + ")")
case (ff.compiler.Syntax_.ECall(at_, _, function_, typeArguments_, arguments_)) =>
val generics_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Type](self_ = typeArguments_), body_ = {() =>
""
}), body_ = {() =>
(("[" + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.core.String_.String](self_ = typeArguments_, body_ = {(type_) =>
ff.compiler.ScalaEmitter_.emitType_(type_ = type_)
}), separator_ = ", ")) + "]")
});
((((ff.compiler.ScalaEmitter_.emitTerm_(term_ = function_) + generics_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.core.String_.String](self_ = arguments_, body_ = {(argument_) =>
ff.compiler.ScalaEmitter_.emitArgument_(argument_ = argument_)
}), separator_ = ", ")) + ")")
case (ff.compiler.Syntax_.ERecord(at_, fields_)) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.compiler.Syntax_.Field](self_ = fields_), body_ = {() =>
"{}"
}), body_ = {() =>
val list_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.core.String_.String](self_ = fields_, body_ = {(f_) =>
((("val " + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = f_.name_)) + " = ") + ff.compiler.ScalaEmitter_.emitTerm_(term_ = f_.value_))
});
(("new {\n" + ff.core.List_.List_join(self_ = list_, separator_ = ";\n")) + ";\n}")
})
case (ff.compiler.Syntax_.EWildcard(at_, index_)) =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (index_ == 0), body_ = {() =>
ff.compiler.ScalaEmitter_.fail_[ff.core.Nothing_.Nothing](at_ = at_, message_ = "Unbound wildcard")
});
("_w" + index_)
case (_) =>
(("{\n" + ff.compiler.ScalaEmitter_.emitStatements_(term_ = term_)) + "\n}")
}

def emitArgument_(argument_ : ff.compiler.Syntax_.Argument) : ff.core.String_.String = {
(ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = argument_.name_, body_ = {(name_) =>
(ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = name_) + " = ")
}), body_ = {() =>
""
}) + ff.compiler.ScalaEmitter_.emitTerm_(term_ = argument_.value_))
}

def emitCase_(matchCase_ : ff.compiler.Syntax_.MatchCase) : ff.core.String_.String = {
val pair_ : ff.core.Pair_.Pair[ff.core.List_.List[ff.core.String_.String], ff.core.List_.List[ff.core.List_.List[ff.core.String_.String]]] = ff.core.List_.List_unzip[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]]](self_ = matchCase_.patterns_, body_ = {(pattern_) =>
ff.compiler.ScalaEmitter_.emitPattern_(pattern_ = pattern_)
}));
val patterns_ : ff.core.String_.String = ff.core.List_.List_join(self_ = pair_.first_, separator_ = ", ");
val condition_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.core.String_.String](self_ = matchCase_.condition_, body_ = {(_w1) =>
(("if " + ff.compiler.ScalaEmitter_.emitTerm_(term_ = _w1)) + " ")
}), body_ = {() =>
""
});
val toLists_ : ff.core.String_.String = ff.core.List_.List_join(self_ = ff.core.List_.List_flatten[ff.core.String_.String](self_ = pair_.second_), separator_ = "");
(((((("case (" + patterns_) + ") ") + condition_) + "=>\n") + toLists_) + ff.compiler.ScalaEmitter_.emitStatements_(term_ = matchCase_.body_))
}

def emitPattern_(pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]] = (pattern_) match {
case (ff.compiler.Syntax_.PVariable(at_, name_)) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](first_ = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = name_, body_ = {(word_) =>
ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = word_)
}), body_ = {() =>
"_"
}), second_ = List())
case (ff.compiler.Syntax_.PVariant(at_, name_, patterns_)) =>
val pairs_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]]] = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]]](self_ = patterns_, body_ = {(pattern_) =>
ff.compiler.ScalaEmitter_.emitPattern_(pattern_ = pattern_)
});
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](first_ = (((ff.compiler.ScalaEmitter_.escapeResolved_(word_ = name_) + "(") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]], ff.core.String_.String](self_ = pairs_, body_ = {(_w1) =>
_w1.first_
}), separator_ = ", ")) + ")"), second_ = ff.core.List_.List_flatMap[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]], ff.core.String_.String](self_ = pairs_, body_ = {(_w1) =>
_w1.second_
}))
case (ff.compiler.Syntax_.PVariantAs(at_, name_, variable_)) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](first_ = ((ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.core.String_.String](self_ = variable_, body_ = {(word_) =>
ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = word_)
}), body_ = {() =>
"_"
}) + " : ") + ff.compiler.ScalaEmitter_.escapeResolved_(word_ = name_)), second_ = List())
case (ff.compiler.Syntax_.PAlias(at_, p_, variable_)) =>
val pair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]] = ff.compiler.ScalaEmitter_.emitPattern_(pattern_ = p_);
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](first_ = (((ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = variable_) + " @ (") + pair_.first_) + ")"), second_ = pair_.second_)
case (ff.compiler.Syntax_.PList(at_, _, items_)) =>
val pair_ : ff.core.Pair_.Pair[ff.core.List_.List[ff.core.String_.String], ff.core.List_.List[ff.core.List_.List[ff.core.String_.String]]] = ff.core.List_.List_unzip[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool], ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]]](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.False())) =>
ff.compiler.ScalaEmitter_.emitPattern_(pattern_ = item_)
case (ff.core.Pair_.Pair(item_, ff.core.Bool_.True())) =>
val pair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]] = ff.compiler.ScalaEmitter_.emitPattern_(pattern_ = item_);
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](first_ = (pair_.first_ + "_seq @ _*"), second_ = (List(List((((("val " + pair_.first_) + " = ") + pair_.first_) + "_seq.toList;\n")), pair_.second_).flatten))
}));
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.List_.List[ff.core.String_.String]](first_ = (("List(" + ff.core.List_.List_join(self_ = pair_.first_, separator_ = ", ")) + ")"), second_ = ff.core.List_.List_flatten[ff.core.String_.String](self_ = pair_.second_))
}

def extractTypeName_(type_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (type_) match {
case (ff.compiler.Syntax_.TVariable(at_, index_)) =>
ff.compiler.ScalaEmitter_.fail_[ff.core.String_.String](at_ = at_, message_ = ("Unexpected type variable: $" + index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
t_.name_
}

def escapeResolved_(word_ : ff.core.String_.String) : ff.core.String_.String = {
val parts_ : ff.core.List_.List[ff.core.String_.String] = ff.core.Array_.Array_toList[ff.core.String_.String](self_ = ff.core.String_.String_split(self_ = ff.core.String_.String_replace(self_ = ff.core.String_.String_replace(self_ = word_, needle_ = ":", replacement_ = "."), needle_ = "/", replacement_ = "."), char_ = '.'));
val initialParts_ : ff.core.List_.List[ff.core.String_.String] = ff.core.List_.List_dropLast[ff.core.String_.String](self_ = parts_, count_ = 1);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_isEmpty[ff.core.String_.String](self_ = initialParts_), body_ = {() =>
ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = ff.core.List_.List_expectLast[ff.core.String_.String](self_ = parts_))
}), body_ = {() =>
((ff.core.List_.List_join(self_ = initialParts_, separator_ = ".") + "_.") + ff.compiler.ScalaEmitter_.escapeKeyword_(word_ = ff.core.List_.List_expectLast[ff.core.String_.String](self_ = parts_)))
})
}

def escapeKeyword_(word_ : ff.core.String_.String) : ff.core.String_.String = {
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (ff.core.Set_.Set_contains[ff.core.String_.String](self_ = ff.compiler.ScalaEmitter_.keywords_, value_ = word_) || ff.core.Char_.Char_isAsciiLower(self_ = ff.core.String_.String_expectFirst(self_ = word_))), body_ = {() =>
(word_ + "_")
}), body_ = {() =>
word_
})
}



}
