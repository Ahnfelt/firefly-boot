package ff.compiler
import ff.compiler.Syntax_._

import ff.compiler.Token_._

import ff.compiler.Wildcards_._

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
object Parser_ {

case class Parser(packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], file_ : ff.core.String_.String, tokens_ : ff.core.Array_.Array[ff.compiler.Token_.Token], end_ : ff.compiler.Token_.Token, var offset_ : ff.core.Int_.Int, var nextTypeVariableIndex_ : ff.core.Int_.Int)

case class Poly(generics_ : ff.core.List_.List[ff.core.String_.String], constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint])
val binaryOperators_ = List(List("||"), List("&&"), List("!=", "=="), List("<=", ">=", "<", ">"), List("++"), List("+", "-"), List("*", "/", "%"), List("^")).getArray_()
def make_(packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], file_ : ff.core.String_.String, tokens_ : ff.core.Array_.Array[ff.compiler.Token_.Token]) : ff.compiler.Parser_.Parser = {
ff.compiler.Parser_.Parser(packagePair_, file_, tokens_, tokens_.expectLast_(), 0, 1)
}
implicit class Parser_extend0(self_ : ff.compiler.Parser_.Parser) {

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_(((message_ + " ") + at_.show_()))
}

def current_() : ff.compiler.Token_.Token = {
ff.core.Core_.if_((self_.offset_ < self_.tokens_.getSize_()), {() =>
self_.tokens_.expect_(self_.offset_)
}).else_({() =>
self_.end_
})
}

def ahead_() : ff.compiler.Token_.Token = {
ff.core.Core_.if_(((self_.offset_ + 1) < self_.tokens_.getSize_()), {() =>
self_.tokens_.expect_((self_.offset_ + 1))
}).else_({() =>
self_.end_
})
}

def aheadAhead_() : ff.compiler.Token_.Token = {
ff.core.Core_.if_(((self_.offset_ + 2) < self_.tokens_.getSize_()), {() =>
self_.tokens_.expect_((self_.offset_ + 2))
}).else_({() =>
self_.end_
})
}

def skip_(kind_ : ff.compiler.Token_.TokenKind) : ff.compiler.Token_.Token = {
val c_ = self_.current_();
ff.core.Core_.if_((c_.kind_ != kind_), {() =>
self_.fail_(c_.at_(), ((("Expected " + ff.core.Core_.magicShow_(kind_)) + ", got ") + c_.raw_()))
});
self_.offset_ += 1;
c_
}

def rawSkip_(kind_ : ff.compiler.Token_.TokenKind, value_ : ff.core.String_.String) : ff.compiler.Token_.Token = {
val c_ = self_.current_();
ff.core.Core_.if_((c_.kind_ != kind_), {() =>
self_.fail_(c_.at_(), ((((("Expected " + ff.core.Core_.magicShow_(kind_)) + " ") + value_) + ", got ") + c_.raw_()))
});
ff.core.Core_.if_((!c_.rawIs_(value_)), {() =>
self_.fail_(c_.at_(), ((("Expected " + value_) + " got ") + c_.raw_()))
});
self_.offset_ += 1;
c_
}

def freshTypeVariable_(at_ : ff.compiler.Syntax_.Location) : ff.compiler.Syntax_.Type = {
val result_ = ff.compiler.Syntax_.TVariable(at_, self_.nextTypeVariableIndex_);
self_.nextTypeVariableIndex_ += 2;
result_
}

def currentIsSeparator_(kind_ : ff.compiler.Token_.TokenKind) : ff.core.Bool_.Bool = {
(self_.current_().is_(kind_) || self_.current_().is_(ff.compiler.Token_.LSeparator()))
}

def skipSeparator_(kind_ : ff.compiler.Token_.TokenKind) : ff.compiler.Token_.Token = {
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LSeparator()), {() =>
self_.skip_(ff.compiler.Token_.LSeparator())
}).else_({() =>
self_.skip_(kind_)
})
}

def parseModule_() : ff.compiler.Syntax_.Module = {
val dependencies_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DDependency]();
val imports_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DImport]();
val types_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DType]();
val traits_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DTrait]();
val instances_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DInstance]();
val extends_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DExtend]();
val lets_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DLet]();
val functions_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LEnd()))
}, {() =>
ff.core.Core_.if_((self_.current_().is_(ff.compiler.Token_.LLower()) && (self_.ahead_().is_(ff.compiler.Token_.LAssign()) || self_.ahead_().is_(ff.compiler.Token_.LColon()))), {() =>
lets_.append_(self_.parseLetDefinition_())
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LLower()) && self_.ahead_().is_(ff.compiler.Token_.LBracketLeft()))
}, {() =>
functions_.append_(self_.parseFunctionDefinition_())
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_("extend"))
}, {() =>
extends_.append_(self_.parseExtendDefinition_())
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_("trait"))
}, {() =>
traits_.append_(self_.parseTraitDefinition_())
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_("instance"))
}, {() =>
instances_.append_(self_.parseInstanceDefinition_())
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_("type"))
}, {() =>
types_.append_(self_.parseTypeDefinition_())
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_("import"))
}, {() =>
imports_.append_(self_.parseImportDefinition_())
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LKeyword()) && ((self_.current_().rawIs_("safe") || self_.current_().rawIs_("unsafe")) || self_.current_().rawIs_("trust")))
}, {() =>
dependencies_.append_(self_.parseDependencyDefinition_())
}).else_({() =>
self_.skip_(ff.compiler.Token_.LEnd())
});
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LEnd())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LSemicolon())
})
});
ff.compiler.Syntax_.Module(packagePair_ = self_.packagePair_, file_ = self_.file_, dependencies_ = dependencies_.getList_(), imports_ = imports_.getList_(), lets_ = lets_.getList_(), functions_ = functions_.getList_(), extends_ = extends_.getList_(), types_ = types_.getList_(), traits_ = traits_.getList_(), instances_ = instances_.getList_())
}

def parseLetDefinition_() : ff.compiler.Syntax_.DLet = {
val nameToken_ = self_.skip_(ff.compiler.Token_.LLower());
val variableType_ = ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LColon()), {() =>
self_.skip_(ff.compiler.Token_.LColon());
self_.parseType_()
}).else_({() =>
self_.freshTypeVariable_(nameToken_.at_())
});
self_.skip_(ff.compiler.Token_.LAssign());
val value_ = self_.parseTerm_();
val scalaTarget_ = self_.parseTargetOption_("scala");
ff.compiler.Syntax_.DLet(nameToken_.at_(), nameToken_.raw_(), variableType_, value_, scalaTarget_)
}

def parseFunctionDefinition_() : ff.compiler.Syntax_.DFunction = {
val signature_ = self_.parseSignature_();
val body_ = self_.parseLambda_(signature_.parameters_.getSize_());
val scalaTarget_ = self_.parseTargetOption_("scala");
ff.compiler.Syntax_.DFunction(signature_.at_, signature_, body_, scalaTarget_)
}

def parseTargetOption_(target_ : ff.core.String_.String) : ff.core.Option_.Option[ff.core.String_.String] = {
ff.core.Core_.if_((self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_(target_)), {() =>
self_.skip_(ff.compiler.Token_.LKeyword());
val result_ = self_.skip_(ff.compiler.Token_.LString()).raw_();
result_.dropFirst_().dropLast_().replace_("\\\"", "\"").replace_("\\r", "\r").replace_("\\n", "\n").replace_("\\t", "\t").replace_("\\\\", "\\")
})
}

def parseSignature_() : ff.compiler.Syntax_.Signature = {
val nameToken_ = self_.skip_(ff.compiler.Token_.LLower());
val poly_ = ff.core.Core_.if_(self_.current_().rawIs_("["), {() =>
self_.parseTypeParameters_()
}).else_({() =>
ff.compiler.Parser_.Poly(List(), List())
});
val parameters_ = self_.parseFunctionParameters_();
val returnType_ = ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LColon()), {() =>
self_.skip_(ff.compiler.Token_.LColon());
self_.parseType_()
}).else_({() =>
ff.compiler.Syntax_.TConstructor(self_.current_().at_(), "Unit", List())
});
ff.compiler.Syntax_.Signature(nameToken_.at_(), nameToken_.raw_(), poly_.generics_, poly_.constraints_, parameters_, returnType_)
}

def parseExtendDefinition_() : ff.compiler.Syntax_.DExtend = {
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "extend");
val nameToken_ = self_.skip_(ff.compiler.Token_.LLower());
val poly_ = ff.core.Core_.if_(self_.current_().rawIs_("["), {() =>
self_.parseTypeParameters_()
}).else_({() =>
ff.compiler.Parser_.Poly(List(), List())
});
self_.skip_(ff.compiler.Token_.LColon());
val type_ = self_.parseType_();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "{");
val methods_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
methods_.append_(self_.parseFunctionDefinition_());
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LSemicolon())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "}");
ff.compiler.Syntax_.DExtend(nameToken_.at_(), nameToken_.raw_(), poly_.generics_, poly_.constraints_, type_, methods_.getList_())
}

def parseTraitDefinition_() : ff.compiler.Syntax_.DTrait = {
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "trait");
val nameToken_ = self_.skip_(ff.compiler.Token_.LUpper());
val poly_ = ff.core.Core_.if_((!self_.current_().rawIs_("[")), {() =>
ff.compiler.Parser_.Poly(List(), List())
}).else_({() =>
self_.parseTypeParameters_()
});
val generatorParameters_ = ff.core.Core_.if_((!self_.current_().rawIs_("(")), {() =>
List()
}).else_({() =>
self_.parseFunctionParameters_()
});
val methodGenerators_ = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]]();
val methodDefaults_ = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]]();
val methodSignatures_ = ff.core.Core_.if_((!self_.current_().rawIs_("{")), {() =>
List()
}).else_({() =>
val signatures_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Signature]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "{");
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val signature_ = self_.parseSignature_();
signatures_.append_(signature_);
ff.core.Core_.if_(self_.current_().rawIs_("{"), {() =>
val generator_ = (self_.ahead_().is_(ff.compiler.Token_.LKeyword()) && self_.ahead_().rawIs_("generate"));
val body_ = self_.parseLambda_(signature_.parameters_.getSize_(), ignoreGenerateKeyword_ = ff.core.Bool_.True());
ff.core.Core_.if_(generator_, {() =>
methodGenerators_.append_(ff.core.Pair_.Pair(signature_.name_, body_))
}).else_({() =>
methodDefaults_.append_(ff.core.Pair_.Pair(signature_.name_, body_))
})
});
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LSemicolon())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "}");
signatures_.getList_()
});
ff.compiler.Syntax_.DTrait(nameToken_.at_(), nameToken_.raw_(), poly_.generics_, poly_.constraints_, generatorParameters_, methodSignatures_, methodDefaults_.getList_(), methodGenerators_.getList_())
}

def parseInstanceDefinition_() : ff.compiler.Syntax_.DInstance = {
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "instance");
val nameToken_ = self_.skip_(ff.compiler.Token_.LUpper());
val typeArguments_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Type]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "[");
val token_ = self_.skip_(ff.compiler.Token_.LUpper());
val poly_ = ff.core.Core_.if_((!self_.current_().rawIs_("[")), {() =>
ff.compiler.Parser_.Poly(List(), List())
}).else_({() =>
self_.parseTypeParameters_()
});
typeArguments_.append_(ff.compiler.Syntax_.TConstructor(token_.at_(), token_.raw_(), poly_.generics_.map_({(_w1) =>
ff.compiler.Syntax_.TConstructor(token_.at_(), _w1, List())
})));
ff.core.Core_.while_({() =>
self_.current_().is_(ff.compiler.Token_.LComma())
}, {() =>
self_.skip_(ff.compiler.Token_.LComma());
typeArguments_.append_(self_.parseType_())
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "]");
val generatorArguments_ = ff.core.Core_.if_((!self_.current_().rawIs_("(")), {() =>
List()
}).else_({() =>
self_.parseFunctionArguments_()
});
val methods_ = ff.core.Core_.if_((!self_.current_().rawIs_("{")), {() =>
List()
}).else_({() =>
val definitions_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "{");
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
definitions_.append_(self_.parseFunctionDefinition_());
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LSemicolon())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "}");
definitions_.getList_()
});
val traitType_ = ff.compiler.Syntax_.TConstructor(nameToken_.at_(), nameToken_.raw_(), typeArguments_.getList_());
ff.compiler.Syntax_.DInstance(nameToken_.at_(), poly_.generics_, poly_.constraints_, traitType_, generatorArguments_, methods_)
}

def parseTypeDefinition_() : ff.compiler.Syntax_.DType = {
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "type");
val nameToken_ = self_.skip_(ff.compiler.Token_.LUpper());
val poly_ = ff.core.Core_.if_((!self_.current_().rawIs_("[")), {() =>
ff.compiler.Parser_.Poly(List(), List())
}).else_({() =>
self_.parseTypeParameters_()
});
val commonFields_ = ff.core.Core_.if_((!self_.current_().rawIs_("(")), {() =>
List()
}).else_({() =>
self_.parseFunctionParameters_(allowMutable_ = ff.core.Bool_.True())
});
val variants_ = ff.core.Core_.if_((!self_.current_().rawIs_("{")), {() =>
List(ff.compiler.Syntax_.Variant(nameToken_.at_(), nameToken_.raw_(), List(), ff.core.Option_.None()))
}).else_({() =>
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "{");
val variantsBuilder_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Variant]();
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val variantNameToken_ = self_.skip_(ff.compiler.Token_.LUpper());
val variantFields_ = ff.core.Core_.if_((!self_.current_().rawIs_("(")), {() =>
List()
}).else_({() =>
self_.parseFunctionParameters_(allowMutable_ = ff.core.Bool_.True())
});
val scalaTarget_ = self_.parseTargetOption_("scala");
variantsBuilder_.append_(ff.compiler.Syntax_.Variant(variantNameToken_.at_(), variantNameToken_.raw_(), variantFields_, scalaTarget_));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LSemicolon())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "}");
variantsBuilder_.getList_()
});
val scalaTarget_ = self_.parseTargetOption_("scala");
ff.compiler.Syntax_.DType(nameToken_.at_(), nameToken_.raw_(), poly_.generics_, poly_.constraints_, commonFields_, variants_, scalaTarget_)
}

def parseImportDefinition_() : ff.compiler.Syntax_.DImport = {
val importToken_ = self_.rawSkip_(ff.compiler.Token_.LKeyword(), "import");
val path_ = ff.core.ArrayBuilder_.empty_[ff.core.String_.String]();
ff.core.Core_.while_({() =>
self_.current_().is_(ff.compiler.Token_.LLower())
}, {() =>
path_.append_(self_.parseDashedName_());
self_.skip_(ff.compiler.Token_.LDot())
});
val file_ = self_.skip_(ff.compiler.Token_.LUpper()).raw_();
val alias_ = ff.core.Core_.if_(self_.current_().rawIs_("as"), {() =>
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "as");
self_.skip_(ff.compiler.Token_.LUpper()).raw_()
}).else_({() =>
file_
});
val package_ = ff.core.Core_.if_(self_.current_().rawIs_("from"), {() =>
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "from");
val userName_ = self_.parseDashedName_();
self_.skip_(ff.compiler.Token_.LColon());
val packageName_ = self_.parseDashedName_();
ff.core.Pair_.Pair(userName_, packageName_)
}).else_({() =>
self_.packagePair_
});
ff.compiler.Syntax_.DImport(importToken_.at_(), alias_, package_, path_.getList_(), file_)
}

def parseDependencyDefinition_() : ff.compiler.Syntax_.DDependency = {
val safety_ = ff.core.Core_.if_(self_.current_().rawIs_("safe"), {() =>
ff.compiler.Syntax_.Safe()
}).else_({() =>
ff.core.Core_.if_(self_.current_().rawIs_("unsafe"), {() =>
ff.compiler.Syntax_.Unsafe()
}).else_({() =>
ff.compiler.Syntax_.Trust()
})
});
val at_ = self_.skip_(ff.compiler.Token_.LKeyword()).at_();
val user_ = self_.skip_(ff.compiler.Token_.LLower()).raw_();
self_.skip_(ff.compiler.Token_.LColon());
val name_ = self_.skip_(ff.compiler.Token_.LLower()).raw_();
val goodVersions_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Version]();
val badVersions_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Version]();
ff.core.Core_.if_(self_.current_().rawIs_("("), {() =>
self_.skip_(ff.compiler.Token_.LBracketLeft());
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val bad_ = self_.current_().rawIs_("!");
ff.core.Core_.if_(bad_, {() =>
self_.skip_(ff.compiler.Token_.LOperator())
});
val version_ = self_.parseVersion_();
ff.core.Core_.if_(bad_, {() =>
badVersions_.append_(version_)
}).else_({() =>
goodVersions_.append_(version_)
});
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skip_(ff.compiler.Token_.LComma())
})
});
self_.skip_(ff.compiler.Token_.LBracketRight())
});
ff.compiler.Syntax_.DDependency(at_, ff.core.Pair_.Pair(user_, name_), safety_, goodVersions_.getList_(), badVersions_.getList_())
}

def parseVersion_() : ff.compiler.Syntax_.Version = {
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LFloat()), {() =>
val majorMinor_ = self_.skip_(ff.compiler.Token_.LFloat());
val parts_ = majorMinor_.raw_().split_('.');
val patch_ = ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LDot()), {() =>
self_.skip_(ff.compiler.Token_.LDot());
self_.skip_(ff.compiler.Token_.LInt()).raw_().expectInt_()
}).else_({() =>
0
});
ff.compiler.Syntax_.Version(majorMinor_.at_(), parts_.expect_(0).expectInt_(), parts_.expect_(1).expectInt_(), patch_)
}).else_({() =>
val major_ = self_.skip_(ff.compiler.Token_.LInt());
ff.compiler.Syntax_.Version(major_.at_(), major_.raw_().expectInt_(), 0, 0)
})
}

def parseDashedName_() : ff.core.String_.String = {
val at_ = self_.current_().at_();
def readPart_() : ff.core.String_.String = {
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LInt()), {() =>
val prefix_ = self_.skip_(ff.compiler.Token_.LInt()).raw_();
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LLower()), {() =>
(prefix_ + self_.skip_(ff.compiler.Token_.LLower()).raw_())
}).else_({() =>
prefix_
})
}).else_({() =>
self_.skip_(ff.compiler.Token_.LLower()).raw_()
})
}
var part_ = readPart_();
ff.core.Core_.while_({() =>
self_.current_().rawIs_("-")
}, {() =>
self_.skip_(ff.compiler.Token_.LOperator());
part_ = ((part_ + "-") + readPart_())
});
ff.core.Core_.if_(part_.any_({(_w1) =>
_w1.getIsUpper_()
}), {() =>
self_.fail_(at_, ("Package names and paths must not contain upper case letters: " + part_))
});
ff.core.Core_.if_((part_.any_({(_w1) =>
(_w1 == '_')
}) || part_.any_({(_w1) =>
(_w1 == '.')
})), {() =>
self_.fail_(at_, ("Package names and paths must not contain underscores or dots: " + part_))
});
part_
}

def parseTypeParameters_() : ff.compiler.Parser_.Poly = {
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "[");
val parameters_ = ff.core.ArrayBuilder_.empty_[ff.core.String_.String]();
val constraints_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Constraint]();
ff.core.Core_.while_({() =>
((!self_.current_().is_(ff.compiler.Token_.LBracketRight())) && (!self_.current_().is_(ff.compiler.Token_.LSemicolon())))
}, {() =>
ff.core.Core_.if_(self_.ahead_().is_(ff.compiler.Token_.LBracketLeft()), {() =>
constraints_.append_(ff.compiler.Syntax_.Constraint(self_.parseType_()))
}).else_({() =>
val parameterNameToken_ = self_.skip_(ff.compiler.Token_.LUpper());
parameters_.append_(parameterNameToken_.raw_());
ff.core.Core_.while_({() =>
self_.current_().is_(ff.compiler.Token_.LColon())
}, {() =>
self_.skip_(ff.compiler.Token_.LColon());
pipe_dot(self_.parseType_())({
case (t_ : ff.compiler.Syntax_.TVariable) =>
self_.fail_(t_.at_, ("Unexpected type variable: $" + t_.index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
constraints_.append_(ff.compiler.Syntax_.Constraint(t_.copy(generics_ = (List(List(ff.compiler.Syntax_.TConstructor(t_.at_, parameterNameToken_.raw_(), List())), t_.generics_).flatten))))
})
})
});
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skip_(ff.compiler.Token_.LComma())
})
});
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LSemicolon()), {() =>
self_.skip_(ff.compiler.Token_.LSemicolon());
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
constraints_.append_(ff.compiler.Syntax_.Constraint(self_.parseType_()));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skip_(ff.compiler.Token_.LComma())
})
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "]");
ff.compiler.Parser_.Poly(parameters_.getList_(), constraints_.getList_())
}

def parseTypeArguments_(parenthesis_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.List_.List[ff.compiler.Syntax_.Type] = {
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), ff.core.Core_.if_(parenthesis_, {() =>
"("
}).else_({() =>
"["
}));
val types_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Type]();
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
types_.append_(self_.parseType_());
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skip_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ff.core.Core_.if_(parenthesis_, {() =>
")"
}).else_({() =>
"]"
}));
types_.getList_()
}

def parseFunctionParameters_(allowMutable_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = {
val parameters_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Parameter]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "(");
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val mutable_ = ((allowMutable_ && self_.current_().is_(ff.compiler.Token_.LKeyword())) && self_.current_().rawIs_("mutable"));
ff.core.Core_.if_(mutable_, {() =>
self_.skip_(ff.compiler.Token_.LKeyword())
});
val parameterNameToken_ = self_.skip_(ff.compiler.Token_.LLower());
self_.skip_(ff.compiler.Token_.LColon());
val parameterType_ = self_.parseType_();
val default_ = ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LAssign())), {() =>
ff.core.Option_.None()
}).else_({() =>
self_.skip_(ff.compiler.Token_.LAssign());
ff.core.Option_.Some(self_.parseTerm_())
});
parameters_.append_(ff.compiler.Syntax_.Parameter(parameterNameToken_.at_(), mutable_, parameterNameToken_.raw_(), parameterType_, default_));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ")");
parameters_.getList_()
}

def parseFunctionArguments_() : ff.core.List_.List[ff.compiler.Syntax_.Argument] = {
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "(");
val arguments_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Argument]();
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val nameToken_ = ff.core.Core_.if_((self_.current_().is_(ff.compiler.Token_.LLower()) && self_.ahead_().is_(ff.compiler.Token_.LAssign())), {() =>
val token_ = self_.skip_(ff.compiler.Token_.LLower());
self_.skip_(ff.compiler.Token_.LAssign());
ff.core.Option_.Some(token_)
}).else_({() =>
ff.core.Option_.None()
});
val value_ = self_.parseTerm_();
arguments_.append_(ff.compiler.Syntax_.Argument(nameToken_.map_({(_w1) =>
_w1.at_()
}).else_({() =>
value_.at_
}), nameToken_.map_({(_w1) =>
_w1.raw_()
}), value_));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ")");
arguments_.getList_()
}

def parseLambda_(defaultParameterCount_ : ff.core.Int_.Int = 0, ignoreGenerateKeyword_ : ff.core.Bool_.Bool = ff.core.Bool_.False(), allowColon_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.compiler.Syntax_.Lambda = {
val colon_ = (allowColon_ && self_.current_().is_(ff.compiler.Token_.LColon()));
val token_ = ff.core.Core_.if_(colon_, {() =>
self_.skip_(ff.compiler.Token_.LColon())
}).else_({() =>
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "{")
});
ff.core.Core_.if_(((ignoreGenerateKeyword_ && self_.current_().is_(ff.compiler.Token_.LKeyword())) && self_.current_().rawIs_("generate")), {() =>
self_.skip_(ff.compiler.Token_.LKeyword())
});
val result_ = ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LPipe()), {() =>
val cases_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchCase]();
ff.core.Core_.while_({() =>
self_.current_().is_(ff.compiler.Token_.LPipe())
}, {() =>
cases_.append_(self_.parseCase_())
});
cases_.getList_()
}).elseIf_({() =>
(self_.current_().is_(ff.compiler.Token_.LLower()) && self_.ahead_().is2_(ff.compiler.Token_.LComma(), ff.compiler.Token_.LArrowThick()))
}, {() =>
val parameters_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchPattern]();
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LArrowThick()))
}, {() =>
val parameterToken_ = self_.skip_(ff.compiler.Token_.LLower());
parameters_.append_(ff.compiler.Syntax_.PVariable(parameterToken_.at_(), ff.core.Option_.Some(parameterToken_.raw_())));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LArrowThick())), {() =>
self_.skip_(ff.compiler.Token_.LComma())
})
});
self_.skip_(ff.compiler.Token_.LArrowThick());
val term_ = self_.parseStatements_();
List(ff.compiler.Syntax_.MatchCase(token_.at_(), parameters_.getList_(), ff.core.Option_.None(), term_))
}).else_({() =>
val term_ = self_.parseStatements_();
val wildcards_ = ff.compiler.Wildcards_.make_();
val e_ = wildcards_.fixWildcards_(term_);
val arguments_ = ff.core.Core_.if_((wildcards_.seenWildcards_ != 0), {() =>
1.getTo_(wildcards_.seenWildcards_).map_({(i_) =>
ff.compiler.Syntax_.PVariable(token_.at_(), ff.core.Option_.Some(("_w" + i_)))
})
}).else_({() =>
1.getTo_(defaultParameterCount_).map_({(i_) =>
ff.compiler.Syntax_.PVariable(token_.at_(), ff.core.Option_.None())
})
});
List(ff.compiler.Syntax_.MatchCase(token_.at_(), arguments_, ff.core.Option_.None(), e_))
});
ff.core.Core_.if_((!colon_), {() =>
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "}")
});
ff.compiler.Syntax_.Lambda(token_.at_(), result_)
}

def parseCase_() : ff.compiler.Syntax_.MatchCase = {
val token_ = self_.skip_(ff.compiler.Token_.LPipe());
val patterns_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchPattern]();
ff.core.Core_.while_({() =>
((!self_.current_().is_(ff.compiler.Token_.LArrowThick())) && (!self_.current_().rawIs_("{")))
}, {() =>
patterns_.append_(self_.parsePattern_());
ff.core.Core_.if_(((!self_.current_().is_(ff.compiler.Token_.LArrowThick())) && (!self_.current_().rawIs_("{"))), {() =>
self_.skip_(ff.compiler.Token_.LComma())
})
});
val condition_ = ff.core.Core_.if_((!self_.current_().rawIs_("{")), {() =>
ff.core.Option_.None()
}).else_({() =>
self_.skip_(ff.compiler.Token_.LBracketLeft());
val term_ = self_.parseStatements_();
self_.skip_(ff.compiler.Token_.LBracketRight());
ff.core.Option_.Some(term_)
});
self_.skip_(ff.compiler.Token_.LArrowThick());
val body_ = self_.parseStatements_();
ff.compiler.Syntax_.MatchCase(token_.at_(), patterns_.getList_(), condition_, body_)
}

def parsePattern_() : ff.compiler.Syntax_.MatchPattern = {
val pattern_ = ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LWildcard()), {() =>
val token_ = self_.skip_(ff.compiler.Token_.LWildcard());
ff.compiler.Syntax_.PVariable(token_.at_(), ff.core.Option_.None())
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LLower())
}, {() =>
val token_ = self_.skip_(ff.compiler.Token_.LLower());
ff.compiler.Syntax_.PVariable(token_.at_(), ff.core.Option_.Some(token_.raw_()))
}).elseIf_({() =>
self_.current_().rawIs_("(")
}, {() =>
val at_ = self_.current_().at_();
val pair_ = self_.parseRecordPattern_().getUnzip_();
ff.compiler.Syntax_.PVariant(at_, ("Record$" + pair_.first_.join_("$")), pair_.second_)
}).elseIf_({() =>
self_.current_().rawIs_("[")
}, {() =>
self_.parseListPattern_()
}).else_({() =>
val token_ = self_.skip_(ff.compiler.Token_.LUpper());
ff.core.Core_.if_(self_.current_().rawIs_("("), {() =>
val patterns_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchPattern]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "(");
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
patterns_.append_(self_.parsePattern_());
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skip_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ")");
ff.compiler.Syntax_.PVariant(token_.at_(), token_.raw_(), patterns_.getList_())
}).else_({() =>
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LLower()), {() =>
val asToken_ = self_.skip_(ff.compiler.Token_.LLower());
ff.compiler.Syntax_.PVariantAs(token_.at_(), token_.raw_(), ff.core.Option_.Some(asToken_.raw_()))
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LWildcard())
}, {() =>
self_.skip_(ff.compiler.Token_.LWildcard());
ff.compiler.Syntax_.PVariantAs(token_.at_(), token_.raw_(), ff.core.Option_.None())
}).else_({() =>
ff.compiler.Syntax_.PVariant(token_.at_(), token_.raw_(), List())
})
})
});
ff.core.Core_.if_(self_.current_().rawIs_("@"), {() =>
val atToken_ = self_.skip_(ff.compiler.Token_.LOperator());
val asToken_ = self_.skip_(ff.compiler.Token_.LLower());
ff.compiler.Syntax_.PAlias(atToken_.at_(), pattern_, asToken_.raw_())
}).else_({() =>
pattern_
})
}

def parseType_() : ff.compiler.Syntax_.Type = {
val leftTypes_ = ff.core.Core_.if_(((self_.current_().rawIs_("(") && self_.ahead_().is_(ff.compiler.Token_.LLower())) && self_.aheadAhead_().is_(ff.compiler.Token_.LColon())), {() =>
val at_ = self_.current_().at_();
val pair_ = self_.parseRecordType_().getUnzip_();
List(ff.compiler.Syntax_.TConstructor(at_, ("Record$" + pair_.first_.join_("$")), pair_.second_))
}).elseIf_({() =>
self_.current_().rawIs_("(")
}, {() =>
self_.parseTypeArguments_(parenthesis_ = ff.core.Bool_.True())
}).else_({() =>
val namespace_ = ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LNamespace()), {() =>
self_.skip_(ff.compiler.Token_.LNamespace()).raw_()
}).else_({() =>
""
});
val token_ = self_.skip_(ff.compiler.Token_.LUpper());
val arguments_ = ff.core.Core_.if_((!self_.current_().rawIs_("[")), {() =>
List()
}).else_({() =>
self_.parseTypeArguments_()
});
List(ff.compiler.Syntax_.TConstructor(token_.at_(), (namespace_ + token_.raw_()), arguments_))
});
ff.core.Core_.if_(((!self_.current_().is_(ff.compiler.Token_.LArrowThick())) && (leftTypes_.getSize_() == 1)), {() =>
leftTypes_.expectFirst_()
}).else_({() =>
val arrowToken_ = self_.skip_(ff.compiler.Token_.LArrowThick());
val rightType_ = self_.parseType_();
ff.compiler.Syntax_.TConstructor(arrowToken_.at_(), ("Function$" + leftTypes_.getSize_()), (List(leftTypes_, List(rightType_)).flatten))
})
}

def parseStatements_() : ff.compiler.Syntax_.Term = {
ff.core.Core_.if_(self_.current_().is2_(ff.compiler.Token_.LBracketRight(), ff.compiler.Token_.LPipe()), {() =>
ff.compiler.Syntax_.EVariant(self_.current_().at_(), "Unit", List(), ff.core.Option_.None())
}).else_({() =>
var result_ = self_.parseStatement_();
ff.core.Core_.while_({() =>
self_.currentIsSeparator_(ff.compiler.Token_.LSemicolon())
}, {() =>
val token_ = self_.skipSeparator_(ff.compiler.Token_.LSemicolon());
result_ = ff.compiler.Syntax_.ESequential(token_.at_(), result_, self_.parseStatement_())
});
result_
})
}

def parseStatement_() : ff.compiler.Syntax_.Term = {
ff.core.Core_.if_((self_.current_().is_(ff.compiler.Token_.LKeyword()) && (self_.current_().rawIs_("let") || self_.current_().rawIs_("mutable"))), {() =>
self_.parseLet_()
}).else_({() =>
ff.core.Core_.if_((self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_("function")), {() =>
self_.parseFunctions_()
}).else_({() =>
val term_ = self_.parseTerm_();
ff.core.Core_.if_(((!self_.current_().is_(ff.compiler.Token_.LAssign())) && (!self_.current_().is3_(ff.compiler.Token_.LAssignPlus(), ff.compiler.Token_.LAssignMinus(), ff.compiler.Token_.LAssignLink()))), {() =>
term_
}).else_({() =>
val token_ = ff.core.Core_.do_({() =>
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LAssignPlus()), {() =>
self_.skip_(ff.compiler.Token_.LAssignPlus())
}).else_({() =>
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LAssignMinus()), {() =>
self_.skip_(ff.compiler.Token_.LAssignMinus())
}).else_({() =>
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LAssignLink()), {() =>
self_.skip_(ff.compiler.Token_.LAssignLink())
}).else_({() =>
self_.skip_(ff.compiler.Token_.LAssign())
})
})
})
});
val operator_ = token_.raw_().dropLast_(1);
val value_ = self_.parseTerm_();
pipe_dot(term_)({
case (ff.compiler.Syntax_.EVariable(_, name_, _, _)) =>
ff.compiler.Syntax_.EAssign(token_.at_(), operator_, name_, value_)
case (e_ : ff.compiler.Syntax_.EField) =>
ff.compiler.Syntax_.EAssignField(token_.at_(), operator_, e_.record_, e_.field_, value_)
case (_) =>
self_.fail_(token_.at_(), "Only variables and fields are assignable")
})
})
})
})
}

def parseLet_() : ff.compiler.Syntax_.Term = {
val mutable_ = self_.current_().rawIs_("mutable");
ff.core.Core_.if_(mutable_, {() =>
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "mutable")
}).else_({() =>
self_.rawSkip_(ff.compiler.Token_.LKeyword(), "let")
});
val nameToken_ = self_.skip_(ff.compiler.Token_.LLower());
val valueType_ = ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LColon())), {() =>
self_.freshTypeVariable_(nameToken_.at_())
}).else_({() =>
self_.skip_(ff.compiler.Token_.LColon());
self_.parseType_()
});
self_.skip_(ff.compiler.Token_.LAssign());
val value_ = self_.parseTerm_();
self_.skipSeparator_(ff.compiler.Token_.LSemicolon());
val body_ = self_.parseStatements_();
ff.compiler.Syntax_.ELet(nameToken_.at_(), mutable_, nameToken_.raw_(), valueType_, value_, body_)
}

def parseFunctions_() : ff.compiler.Syntax_.Term = {
val at_ = self_.current_().at_();
val functions_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
ff.core.Core_.while_({() =>
self_.current_().rawIs_("function")
}, {() =>
val functionAt_ = self_.rawSkip_(ff.compiler.Token_.LKeyword(), "function").at_();
val signature_ = self_.parseSignature_();
val body_ = self_.parseLambda_(defaultParameterCount_ = signature_.parameters_.getSize_());
functions_.append_(ff.compiler.Syntax_.DFunction(functionAt_, signature_, body_, ff.core.Option_.None()));
self_.skipSeparator_(ff.compiler.Token_.LSemicolon())
});
val body_ = self_.parseStatements_();
ff.compiler.Syntax_.EFunctions(at_, functions_.getList_(), body_)
}

def parseTerm_() : ff.compiler.Syntax_.Term = {
self_.parseBinary_(0)
}

def parseBinary_(level_ : ff.core.Int_.Int) : ff.compiler.Syntax_.Term = {
ff.core.Core_.if_((level_ >= ff.compiler.Parser_.binaryOperators_.getSize_()), {() =>
self_.parseUnary_()
}).else_({() =>
val operators_ = ff.compiler.Parser_.binaryOperators_.expect_(level_);
var result_ = self_.parseBinary_((level_ + 1));
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LOperator()), {() =>
ff.core.Core_.while_({() =>
operators_.any_(self_.current_().rawIs_)
}, {() =>
val token_ = self_.skip_(ff.compiler.Token_.LOperator());
val right_ = self_.parseBinary_((level_ + 1));
val arguments_ = List(ff.compiler.Syntax_.Argument(result_.at_, ff.core.Option_.None(), result_), ff.compiler.Syntax_.Argument(right_.at_, ff.core.Option_.None(), right_));
result_ = ff.compiler.Syntax_.ECall(token_.at_(), ff.core.Bool_.False(), ff.compiler.Syntax_.EVariable(token_.at_(), token_.raw_(), List(), List()), List(), arguments_)
})
});
result_
})
}

def parseUnary_() : ff.compiler.Syntax_.Term = {
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LOperator()), {() =>
val token_ = self_.skip_(ff.compiler.Token_.LOperator());
val term_ = self_.parseUnary_();
ff.compiler.Syntax_.ECall(token_.at_(), ff.core.Bool_.False(), ff.compiler.Syntax_.EVariable(token_.at_(), token_.raw_(), List(), List()), List(), List(ff.compiler.Syntax_.Argument(term_.at_, ff.core.Option_.None(), term_)))
}).else_({() =>
self_.parseFieldsAndCalls_()
})
}

def parseFieldsAndCalls_() : ff.compiler.Syntax_.Term = {
val tailCall_ = ff.core.Core_.if_((self_.current_().is_(ff.compiler.Token_.LKeyword()) && self_.current_().rawIs_("tailcall")), {() =>
self_.skip_(ff.compiler.Token_.LKeyword());
ff.core.Bool_.True()
}).else_({() =>
ff.core.Bool_.False()
});
var result_ = self_.parseAtom_();
ff.core.Core_.while_({() =>
((self_.current_().is_(ff.compiler.Token_.LBracketLeft()) || self_.current_().is_(ff.compiler.Token_.LColon())) || self_.current_().is_(ff.compiler.Token_.LDot()))
}, {() =>
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LDot()), {() =>
self_.skip_(ff.compiler.Token_.LDot());
ff.core.Core_.if_(self_.current_().rawIs_("{"), {() =>
val term_ = self_.parseAtom_();
result_ = ff.compiler.Syntax_.EPipe(term_.at_, result_, term_)
}).elseIf_({() =>
self_.current_().is2_(ff.compiler.Token_.LUpper(), ff.compiler.Token_.LNamespace())
}, {() =>
result_ = self_.parseCopy_(result_)
}).else_({() =>
val token_ = self_.skip_(ff.compiler.Token_.LLower());
result_ = ff.compiler.Syntax_.EField(token_.at_(), result_, token_.raw_())
})
}).else_({() =>
val at_ = self_.current_().at_();
val typeArguments_ = ff.core.Core_.if_((!self_.current_().rawIs_("[")), {() =>
List()
}).else_({() =>
self_.parseTypeArguments_()
});
val arguments_ = ff.core.Core_.if_((!self_.current_().rawIs_("(")), {() =>
List()
}).else_({() =>
self_.parseFunctionArguments_()
});
val moreArguments_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Argument]();
var lastWasCurly_ = ff.core.Bool_.False();
ff.core.Core_.while_({() =>
(self_.current_().rawIs_("{") || self_.current_().is_(ff.compiler.Token_.LColon()))
}, {() =>
lastWasCurly_ = self_.current_().rawIs_("{");
val lambda_ = self_.parseLambda_(allowColon_ = ff.core.Bool_.True());
moreArguments_.append_(ff.compiler.Syntax_.Argument(lambda_.at_, ff.core.Option_.None(), ff.compiler.Syntax_.ELambda(lambda_.at_, lambda_)))
});
result_ = ff.compiler.Syntax_.ECall(at_, tailCall_, result_, typeArguments_, (List(arguments_, moreArguments_.getList_()).flatten));
ff.core.Core_.if_((lastWasCurly_ && self_.current_().is_(ff.compiler.Token_.LLower())), {() =>
val token_ = self_.skip_(ff.compiler.Token_.LLower());
result_ = ff.compiler.Syntax_.EField(token_.at_(), result_, token_.raw_())
})
})
});
result_
}

def parseAtom_() : ff.compiler.Syntax_.Term = {
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LString()), {() =>
val token_ = self_.skip_(ff.compiler.Token_.LString());
ff.compiler.Syntax_.EString(token_.at_(), token_.raw_())
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LChar())
}, {() =>
val token_ = self_.skip_(ff.compiler.Token_.LChar());
ff.compiler.Syntax_.EChar(token_.at_(), token_.raw_())
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LInt())
}, {() =>
val token_ = self_.skip_(ff.compiler.Token_.LInt());
ff.compiler.Syntax_.EInt(token_.at_(), token_.raw_())
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LFloat())
}, {() =>
val token_ = self_.skip_(ff.compiler.Token_.LFloat());
ff.compiler.Syntax_.EFloat(token_.at_(), token_.raw_())
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LLower())
}, {() =>
val token_ = self_.skip_(ff.compiler.Token_.LLower());
ff.compiler.Syntax_.EVariable(token_.at_(), token_.raw_(), List(), List())
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LNamespace())
}, {() =>
val namespaceToken_ = self_.skip_(ff.compiler.Token_.LNamespace());
val extraNamespace_ = ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LNamespace())), {() =>
ff.core.Option_.None()
}).else_({() =>
ff.core.Option_.Some(self_.skip_(ff.compiler.Token_.LNamespace()).raw_())
});
val prefix_ = (namespaceToken_.raw_() + extraNamespace_.else_({() =>
""
}));
ff.core.Core_.if_(self_.current_().is_(ff.compiler.Token_.LLower()), {() =>
val token_ = self_.skip_(ff.compiler.Token_.LLower());
ff.compiler.Syntax_.EVariable(token_.at_(), (prefix_ + token_.raw_()), List(), List())
}).else_({() =>
self_.parseVariant_(prefix_)
})
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LUpper())
}, {() =>
self_.parseVariant_("")
}).elseIf_({() =>
self_.current_().rawIs_("{")
}, {() =>
val lambda_ = self_.parseLambda_();
ff.compiler.Syntax_.ELambda(lambda_.at_, lambda_)
}).elseIf_({() =>
self_.current_().rawIs_("[")
}, {() =>
self_.parseList_()
}).elseIf_({() =>
((self_.current_().rawIs_("(") && self_.ahead_().is_(ff.compiler.Token_.LLower())) && self_.aheadAhead_().is_(ff.compiler.Token_.LAssign()))
}, {() =>
ff.compiler.Syntax_.ERecord(self_.current_().at_(), self_.parseRecord_())
}).elseIf_({() =>
self_.current_().rawIs_("(")
}, {() =>
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "(");
val result_ = self_.parseTerm_();
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ")");
result_
}).elseIf_({() =>
self_.current_().is_(ff.compiler.Token_.LWildcard())
}, {() =>
val token_ = self_.skip_(ff.compiler.Token_.LWildcard());
ff.compiler.Syntax_.EWildcard(token_.at_(), 0)
}).else_({() =>
self_.fail_(self_.current_().at_(), ("Expected atom, got " + self_.current_().raw_()))
})
}

def parseVariant_(prefix_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = {
val token_ = self_.skip_(ff.compiler.Token_.LUpper());
val name_ = (prefix_ + token_.raw_());
val typeArguments_ = ff.core.Core_.if_((!self_.current_().rawIs_("[")), {() =>
List()
}).else_({() =>
self_.parseTypeArguments_()
});
ff.core.Core_.if_(self_.current_().rawIs_("?"), {() =>
self_.skip_(ff.compiler.Token_.LOperator());
ff.compiler.Syntax_.EVariantIs(token_.at_(), name_, typeArguments_)
}).else_({() =>
val arguments_ = ff.core.Core_.if_((!self_.current_().rawIs_("(")), {() =>
ff.core.Option_.None()
}).else_({() =>
ff.core.Option_.Some(self_.parseFunctionArguments_())
});
ff.compiler.Syntax_.EVariant(token_.at_(), name_, typeArguments_, arguments_)
})
}

def parseCopy_(record_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = {
val namespace_ = ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LNamespace())), {() =>
""
}).else_({() =>
self_.skip_(ff.compiler.Token_.LNamespace()).raw_()
});
val extraNamespace_ = ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LNamespace())), {() =>
""
}).else_({() =>
self_.skip_(ff.compiler.Token_.LNamespace()).raw_()
});
val prefix_ = (namespace_ + extraNamespace_);
val token_ = self_.skip_(ff.compiler.Token_.LUpper());
val name_ = (prefix_ + token_.raw_());
val fields_ = self_.parseRecord_();
ff.compiler.Syntax_.ECopy(token_.at_(), name_, record_, fields_)
}

def parseRecord_() : ff.core.List_.List[ff.compiler.Syntax_.Field] = {
val fields_ = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Field]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "(");
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val fieldToken_ = self_.skip_(ff.compiler.Token_.LLower());
self_.skip_(ff.compiler.Token_.LAssign());
fields_.append_(ff.compiler.Syntax_.Field(fieldToken_.at_(), fieldToken_.raw_(), self_.parseTerm_()));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ")");
fields_.getList_()
}

def parseRecordType_() : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]] = {
val fields_ = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "(");
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val fieldToken_ = self_.skip_(ff.compiler.Token_.LLower());
self_.skipSeparator_(ff.compiler.Token_.LColon());
fields_.append_(ff.core.Pair_.Pair(fieldToken_.raw_(), self_.parseType_()));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ")");
fields_.getList_().sortBy_({(_w1) =>
_w1.first_
})
}

def parseRecordPattern_() : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]] = {
val fields_ = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]]();
self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "(");
ff.core.Core_.while_({() =>
(!self_.current_().is_(ff.compiler.Token_.LBracketRight()))
}, {() =>
val fieldToken_ = self_.skip_(ff.compiler.Token_.LLower());
self_.skip_(ff.compiler.Token_.LAssign());
fields_.append_(ff.core.Pair_.Pair(fieldToken_.raw_(), self_.parsePattern_()));
ff.core.Core_.if_((!self_.current_().is_(ff.compiler.Token_.LBracketRight())), {() =>
self_.skipSeparator_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), ")");
fields_.getList_().sortBy_({(_w1) =>
_w1.first_
})
}

def parseListPattern_() : ff.compiler.Syntax_.MatchPattern = {
val items_ = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]]();
val at_ = self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "[").at_();
ff.core.Core_.while_({() =>
(!self_.current_().rawIs_("]"))
}, {() =>
val spread_ = self_.current_().is_(ff.compiler.Token_.LDotDotDot());
ff.core.Core_.if_(spread_, {() =>
self_.skip_(ff.compiler.Token_.LDotDotDot())
});
val pattern_ = ff.core.Core_.if_((spread_ && self_.current_().rawIs_("]")), {() =>
ff.compiler.Syntax_.PVariable(self_.current_().at_(), ff.core.Option_.None())
}).else_({() =>
self_.parsePattern_()
});
items_.append_(ff.core.Pair_.Pair(pattern_, spread_));
ff.core.Core_.if_((!self_.current_().rawIs_("]")), {() =>
self_.skipSeparator_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "]");
ff.compiler.Syntax_.PList(at_, self_.freshTypeVariable_(at_), items_.getList_())
}

def parseList_() : ff.compiler.Syntax_.Term = {
val items_ = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]]();
val at_ = self_.rawSkip_(ff.compiler.Token_.LBracketLeft(), "[").at_();
ff.core.Core_.while_({() =>
(!self_.current_().rawIs_("]"))
}, {() =>
val spread_ = self_.current_().is_(ff.compiler.Token_.LDotDotDot());
ff.core.Core_.if_(spread_, {() =>
self_.skip_(ff.compiler.Token_.LDotDotDot())
});
items_.append_(ff.core.Pair_.Pair(self_.parseTerm_(), spread_));
ff.core.Core_.if_((!self_.current_().rawIs_("]")), {() =>
self_.skipSeparator_(ff.compiler.Token_.LComma())
})
});
self_.rawSkip_(ff.compiler.Token_.LBracketRight(), "]");
ff.compiler.Syntax_.EList(at_, self_.freshTypeVariable_(at_), items_.getList_())
}

}


}
