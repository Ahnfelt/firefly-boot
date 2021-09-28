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

import ff.core.Nothing_._

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
val binaryOperators_ : ff.core.Array_.Array[ff.core.List_.List[ff.core.String_.String]] = ff.core.List_.List_getArray[ff.core.List_.List[ff.core.String_.String]](self_ = List(List("||"), List("&&"), List("!=", "=="), List("<=", ">=", "<", ">"), List("++"), List("+", "-"), List("*", "/", "%"), List("^")))
def make_(packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], file_ : ff.core.String_.String, tokens_ : ff.core.Array_.Array[ff.compiler.Token_.Token]) : ff.compiler.Parser_.Parser = {
ff.compiler.Parser_.Parser(packagePair_ = packagePair_, file_ = file_, tokens_ = tokens_, end_ = ff.core.Array_.Array_expectLast[ff.compiler.Token_.Token](self_ = tokens_), offset_ = 0, nextTypeVariableIndex_ = 1)
}
def Parser_fail[T](self_ : ff.compiler.Parser_.Parser, at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = (self_, at_, message_) match {
case (self_, _, _) =>
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}

def Parser_current(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Token_.Token = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (self_.offset_ < ff.core.Array_.Array_getSize[ff.compiler.Token_.Token](self_ = self_.tokens_)), body_ = {() =>
ff.core.Array_.Array_expect[ff.compiler.Token_.Token](self_ = self_.tokens_, index_ = self_.offset_)
}), body_ = {() =>
self_.end_
})
}

def Parser_ahead(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Token_.Token = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ((self_.offset_ + 1) < ff.core.Array_.Array_getSize[ff.compiler.Token_.Token](self_ = self_.tokens_)), body_ = {() =>
ff.core.Array_.Array_expect[ff.compiler.Token_.Token](self_ = self_.tokens_, index_ = (self_.offset_ + 1))
}), body_ = {() =>
self_.end_
})
}

def Parser_aheadAhead(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Token_.Token = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ((self_.offset_ + 2) < ff.core.Array_.Array_getSize[ff.compiler.Token_.Token](self_ = self_.tokens_)), body_ = {() =>
ff.core.Array_.Array_expect[ff.compiler.Token_.Token](self_ = self_.tokens_, index_ = (self_.offset_ + 2))
}), body_ = {() =>
self_.end_
})
}

def Parser_skip(self_ : ff.compiler.Parser_.Parser, kind_ : ff.compiler.Token_.TokenKind) : ff.compiler.Token_.Token = (self_, kind_) match {
case (self_, _) =>
val c_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_current(self_ = self_);
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (c_.kind_ != kind_), body_ = {() =>
ff.compiler.Parser_.Parser_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = ff.compiler.Token_.Token_at(token_ = c_), message_ = ((("Expected " + ff.core.Core_.magicShow_[ff.compiler.Token_.TokenKind](value_ = kind_)) + ", got ") + ff.compiler.Token_.Token_raw(token_ = c_)))
});
self_.offset_ += 1;
c_
}

def Parser_rawSkip(self_ : ff.compiler.Parser_.Parser, kind_ : ff.compiler.Token_.TokenKind, value_ : ff.core.String_.String) : ff.compiler.Token_.Token = (self_, kind_, value_) match {
case (self_, _, _) =>
val c_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_current(self_ = self_);
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (c_.kind_ != kind_), body_ = {() =>
ff.compiler.Parser_.Parser_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = ff.compiler.Token_.Token_at(token_ = c_), message_ = ((((("Expected " + ff.core.Core_.magicShow_[ff.compiler.Token_.TokenKind](value_ = kind_)) + " ") + value_) + ", got ") + ff.compiler.Token_.Token_raw(token_ = c_)))
});
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = c_, value_ = value_)), body_ = {() =>
ff.compiler.Parser_.Parser_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = ff.compiler.Token_.Token_at(token_ = c_), message_ = ((("Expected " + value_) + " got ") + ff.compiler.Token_.Token_raw(token_ = c_)))
});
self_.offset_ += 1;
c_
}

def Parser_freshTypeVariable(self_ : ff.compiler.Parser_.Parser, at_ : ff.compiler.Syntax_.Location) : ff.compiler.Syntax_.Type = (self_, at_) match {
case (self_, _) =>
val result_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TVariable(at_ = at_, index_ = self_.nextTypeVariableIndex_);
self_.nextTypeVariableIndex_ += 2;
result_
}

def Parser_currentIsSeparator(self_ : ff.compiler.Parser_.Parser, kind_ : ff.compiler.Token_.TokenKind) : ff.core.Bool_.Bool = (self_, kind_) match {
case (self_, _) =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = kind_) || ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LSeparator()))
}

def Parser_skipSeparator(self_ : ff.compiler.Parser_.Parser, kind_ : ff.compiler.Token_.TokenKind) : ff.compiler.Token_.Token = (self_, kind_) match {
case (self_, _) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LSeparator()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LSeparator())
}), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = kind_)
})
}

def Parser_parseModule(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Module = (self_) match {
case (self_) =>
val dependencies_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DDependency] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DDependency]();
val imports_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DImport] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DImport]();
val types_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DType] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DType]();
val traits_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DTrait] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DTrait]();
val instances_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DInstance] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DInstance]();
val extends_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DExtend] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DExtend]();
val lets_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DLet] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DLet]();
val functions_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DFunction] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LEnd()))
}, body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower()) && (ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LAssign()) || ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LColon()))), body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DLet](self_ = lets_, value_ = ff.compiler.Parser_.Parser_parseLetDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower()) && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LBracketLeft()))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DFunction](self_ = functions_, value_ = ff.compiler.Parser_.Parser_parseFunctionDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "extend"))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DExtend](self_ = extends_, value_ = ff.compiler.Parser_.Parser_parseExtendDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "trait"))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DTrait](self_ = traits_, value_ = ff.compiler.Parser_.Parser_parseTraitDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "instance"))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DInstance](self_ = instances_, value_ = ff.compiler.Parser_.Parser_parseInstanceDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "type"))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DType](self_ = types_, value_ = ff.compiler.Parser_.Parser_parseTypeDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "import"))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DImport](self_ = imports_, value_ = ff.compiler.Parser_.Parser_parseImportDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ((ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "safe") || ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "unsafe")) || ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "trust")))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DDependency](self_ = dependencies_, value_ = ff.compiler.Parser_.Parser_parseDependencyDefinition(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LEnd());
ff.core.Unit_.Unit()
});
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LEnd())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon())
});
ff.core.Unit_.Unit()
});
ff.compiler.Syntax_.Module(packagePair_ = self_.packagePair_, file_ = self_.file_, dependencies_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DDependency](self_ = dependencies_), imports_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DImport](self_ = imports_), types_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DType](self_ = types_), traits_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DTrait](self_ = traits_), instances_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DInstance](self_ = instances_), extends_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DExtend](self_ = extends_), lets_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DLet](self_ = lets_), functions_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DFunction](self_ = functions_))
}

def Parser_parseLetDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DLet = (self_) match {
case (self_) =>
val nameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
val variableType_ : ff.compiler.Syntax_.Type = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Type](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LColon()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
ff.compiler.Parser_.Parser_parseType(self_ = self_)
}), body_ = {() =>
ff.compiler.Parser_.Parser_freshTypeVariable(self_ = self_, at_ = ff.compiler.Token_.Token_at(token_ = nameToken_))
});
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssign());
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseTerm(self_ = self_);
val targets_ : ff.compiler.Syntax_.Targets = ff.compiler.Parser_.Parser_parseTargets(self_ = self_);
ff.compiler.Syntax_.DLet(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), variableType_ = variableType_, value_ = value_, targets_ = targets_)
}

def Parser_parseFunctionDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DFunction = (self_) match {
case (self_) =>
val signature_ : ff.compiler.Syntax_.Signature = ff.compiler.Parser_.Parser_parseSignature(self_ = self_);
val body_ : ff.compiler.Syntax_.Lambda = ff.compiler.Parser_.Parser_parseLambda(self_ = self_, defaultParameterCount_ = ff.core.List_.List_getSize[ff.compiler.Syntax_.Parameter](self_ = signature_.parameters_), ignoreGenerateKeyword_ = ff.core.Bool_.False(), allowColon_ = ff.core.Bool_.False());
val targets_ : ff.compiler.Syntax_.Targets = ff.compiler.Parser_.Parser_parseTargets(self_ = self_);
ff.compiler.Syntax_.DFunction(at_ = signature_.at_, signature_ = signature_, body_ = body_, targets_ = targets_)
}

def Parser_parseTargets(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Targets = (self_) match {
case (self_) =>
def parseTargetOption_(target_ : ff.core.String_.String) : ff.core.Option_.Option[ff.core.String_.String] = {
ff.core.Core_.if_[ff.core.String_.String](condition_ = ((ff.compiler.Parser_.Parser_currentIsSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon()) && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword())) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), value_ = target_)), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LSeparator());
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword());
val result_ : ff.core.String_.String = ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LString()));
val dropCount_ : ff.core.Int_.Int = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Int_.Int](condition_ = ff.core.String_.String_startsWith(self_ = result_, prefix_ = "\"\"\""), body_ = {() =>
3
}), body_ = {() =>
1
});
ff.core.String_.String_replace(self_ = ff.core.String_.String_replace(self_ = ff.core.String_.String_replace(self_ = ff.core.String_.String_replace(self_ = ff.core.String_.String_replace(self_ = ff.core.String_.String_dropLast(self_ = ff.core.String_.String_dropFirst(self_ = result_, count_ = dropCount_), count_ = dropCount_), needle_ = "\\\"", replacement_ = "\""), needle_ = "\\r", replacement_ = "\r"), needle_ = "\\n", replacement_ = "\n"), needle_ = "\\t", replacement_ = "\t"), needle_ = "\\\\", replacement_ = "\\")
})
}
val scala1_ : ff.core.Option_.Option[ff.core.String_.String] = parseTargetOption_(target_ = "scala");
val javaScript_ : ff.core.Option_.Option[ff.core.String_.String] = parseTargetOption_(target_ = "javascript");
val scala_ : ff.core.Option_.Option[ff.core.String_.String] = ff.core.Option_.Option_getElse(self_ = scala1_, body_ = {() =>
parseTargetOption_(target_ = "scala")
});
ff.compiler.Syntax_.Targets(scala_ = scala_, javaScript_ = javaScript_)
}

def Parser_parseSignature(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Signature = (self_) match {
case (self_) =>
val nameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
val poly_ : ff.compiler.Parser_.Poly = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Parser_.Poly](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "["), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeParameters(self_ = self_)
}), body_ = {() =>
ff.compiler.Parser_.Poly(generics_ = List(), constraints_ = List())
});
val parameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.compiler.Parser_.Parser_parseFunctionParameters(self_ = self_, allowMutable_ = ff.core.Bool_.False());
val returnType_ : ff.compiler.Syntax_.Type = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Type](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LColon()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
ff.compiler.Parser_.Parser_parseType(self_ = self_)
}), body_ = {() =>
ff.compiler.Syntax_.TConstructor(at_ = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_)), name_ = "ff:core/Unit.Unit", generics_ = List())
});
ff.compiler.Syntax_.Signature(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), generics_ = poly_.generics_, constraints_ = poly_.constraints_, parameters_ = parameters_, returnType_ = returnType_)
}

def Parser_parseExtendDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DExtend = (self_) match {
case (self_) =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "extend");
val nameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
val poly_ : ff.compiler.Parser_.Poly = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Parser_.Poly](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "["), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeParameters(self_ = self_)
}), body_ = {() =>
ff.compiler.Parser_.Poly(generics_ = List(), constraints_ = List())
});
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
val type_ : ff.compiler.Syntax_.Type = ff.compiler.Parser_.Parser_parseType(self_ = self_);
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "{");
val methods_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DFunction] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DFunction](self_ = methods_, value_ = ff.compiler.Parser_.Parser_parseFunctionDefinition(self_ = self_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "}");
ff.compiler.Syntax_.DExtend(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), generics_ = poly_.generics_, constraints_ = poly_.constraints_, type_ = type_, methods_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DFunction](self_ = methods_))
}

def Parser_parseTraitDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DTrait = (self_) match {
case (self_) =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "trait");
val nameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val poly_ : ff.compiler.Parser_.Poly = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Parser_.Poly](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")), body_ = {() =>
ff.compiler.Parser_.Poly(generics_ = List(), constraints_ = List())
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeParameters(self_ = self_)
});
val generatorParameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Parameter]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseFunctionParameters(self_ = self_, allowMutable_ = ff.core.Bool_.False())
});
val methodGenerators_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]] = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]]();
val methodDefaults_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]] = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]]();
val methodSignatures_ : ff.core.List_.List[ff.compiler.Syntax_.Signature] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Signature]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{")), body_ = {() =>
List()
}), body_ = {() =>
val signatures_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Signature] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Signature]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "{");
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val signature_ : ff.compiler.Syntax_.Signature = ff.compiler.Parser_.Parser_parseSignature(self_ = self_);
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Signature](self_ = signatures_, value_ = signature_);
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{"), body_ = {() =>
val generator_ : ff.core.Bool_.Bool = (ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), value_ = "generate"));
val body_ : ff.compiler.Syntax_.Lambda = ff.compiler.Parser_.Parser_parseLambda(self_ = self_, defaultParameterCount_ = ff.core.List_.List_getSize[ff.compiler.Syntax_.Parameter](self_ = signature_.parameters_), ignoreGenerateKeyword_ = ff.core.Bool_.True(), allowColon_ = ff.core.Bool_.False());
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = generator_, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]](self_ = methodGenerators_, value_ = ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda](first_ = signature_.name_, second_ = body_));
ff.core.Unit_.Unit()
}), body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]](self_ = methodDefaults_, value_ = ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda](first_ = signature_.name_, second_ = body_));
ff.core.Unit_.Unit()
})
});
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "}");
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Signature](self_ = signatures_)
});
ff.compiler.Syntax_.DTrait(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), generics_ = poly_.generics_, constraints_ = poly_.constraints_, generatorParameters_ = generatorParameters_, methods_ = methodSignatures_, methodDefaults_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]](self_ = methodDefaults_), methodGenerators_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]](self_ = methodGenerators_))
}

def Parser_parseInstanceDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DInstance = (self_) match {
case (self_) =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "instance");
val nameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val typeArguments_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Type] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Type]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "[");
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val poly_ : ff.compiler.Parser_.Poly = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Parser_.Poly](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")), body_ = {() =>
ff.compiler.Parser_.Poly(generics_ = List(), constraints_ = List())
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeParameters(self_ = self_)
});
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Type](self_ = typeArguments_, value_ = ff.compiler.Syntax_.TConstructor(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), generics_ = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = poly_.generics_, body_ = {(_w1) =>
ff.compiler.Syntax_.TConstructor(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = _w1, generics_ = List())
})));
ff.core.Core_.while_(condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LComma())
}, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Type](self_ = typeArguments_, value_ = ff.compiler.Parser_.Parser_parseType(self_ = self_));
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "]");
val generatorArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Argument]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseFunctionArguments(self_ = self_)
});
val methods_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.DFunction]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{")), body_ = {() =>
List()
}), body_ = {() =>
val definitions_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DFunction] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "{");
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DFunction](self_ = definitions_, value_ = ff.compiler.Parser_.Parser_parseFunctionDefinition(self_ = self_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "}");
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DFunction](self_ = definitions_)
});
val traitType_ : ff.compiler.Syntax_.Type = ff.compiler.Syntax_.TConstructor(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), generics_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Type](self_ = typeArguments_));
ff.compiler.Syntax_.DInstance(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), generics_ = poly_.generics_, constraints_ = poly_.constraints_, traitType_ = traitType_, generatorArguments_ = generatorArguments_, methods_ = methods_)
}

def Parser_parseTypeDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DType = (self_) match {
case (self_) =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "type");
val nameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val poly_ : ff.compiler.Parser_.Poly = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Parser_.Poly](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")), body_ = {() =>
ff.compiler.Parser_.Poly(generics_ = List(), constraints_ = List())
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeParameters(self_ = self_)
});
val commonFields_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Parameter]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseFunctionParameters(self_ = self_, allowMutable_ = ff.core.Bool_.True())
});
val variants_ : ff.core.List_.List[ff.compiler.Syntax_.Variant] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Variant]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{")), body_ = {() =>
List(ff.compiler.Syntax_.Variant(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), fields_ = List(), targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())))
}), body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "{");
val variantsBuilder_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Variant] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Variant]();
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val variantNameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val variantFields_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Parameter]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseFunctionParameters(self_ = self_, allowMutable_ = ff.core.Bool_.True())
});
val targets_ : ff.compiler.Syntax_.Targets = ff.compiler.Parser_.Parser_parseTargets(self_ = self_);
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Variant](self_ = variantsBuilder_, value_ = ff.compiler.Syntax_.Variant(at_ = ff.compiler.Token_.Token_at(token_ = variantNameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = variantNameToken_), fields_ = variantFields_, targets_ = targets_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "}");
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Variant](self_ = variantsBuilder_)
});
val targets_ : ff.compiler.Syntax_.Targets = ff.compiler.Parser_.Parser_parseTargets(self_ = self_);
ff.compiler.Syntax_.DType(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), generics_ = poly_.generics_, constraints_ = poly_.constraints_, commonFields_ = commonFields_, variants_ = variants_, targets_ = targets_)
}

def Parser_parseImportDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DImport = (self_) match {
case (self_) =>
val importToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "import");
val path_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.String_.String] = ff.core.ArrayBuilder_.empty_[ff.core.String_.String]();
ff.core.Core_.while_(condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower())
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.String_.String](self_ = path_, value_ = ff.compiler.Parser_.Parser_parseDashedName(self_ = self_));
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LDot());
ff.core.Unit_.Unit()
});
val file_ : ff.core.String_.String = ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper()));
val alias_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "as"), body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "as");
ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper()))
}), body_ = {() =>
file_
});
val package_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "from"), body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "from");
val userName_ : ff.core.String_.String = ff.compiler.Parser_.Parser_parseDashedName(self_ = self_);
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
val packageName_ : ff.core.String_.String = ff.compiler.Parser_.Parser_parseDashedName(self_ = self_);
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = userName_, second_ = packageName_)
}), body_ = {() =>
self_.packagePair_
});
ff.compiler.Syntax_.DImport(at_ = ff.compiler.Token_.Token_at(token_ = importToken_), alias_ = alias_, package_ = package_, directory_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.String_.String](self_ = path_), file_ = file_)
}

def Parser_parseDependencyDefinition(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.DDependency = (self_) match {
case (self_) =>
val safety_ : ff.compiler.Syntax_.Safety = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Safety](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "safe"), body_ = {() =>
ff.compiler.Syntax_.Safe()
}), body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Safety](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "unsafe"), body_ = {() =>
ff.compiler.Syntax_.Unsafe()
}), body_ = {() =>
ff.compiler.Syntax_.Trust()
})
});
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword()));
val user_ : ff.core.String_.String = ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower()));
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
val name_ : ff.core.String_.String = ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower()));
val goodVersions_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Version] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Version]();
val badVersions_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Version] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Version]();
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "("), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft());
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val bad_ : ff.core.Bool_.Bool = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "!");
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = bad_, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LOperator())
});
val version_ : ff.compiler.Syntax_.Version = ff.compiler.Parser_.Parser_parseVersion(self_ = self_);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = bad_, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Version](self_ = badVersions_, value_ = version_);
ff.core.Unit_.Unit()
}), body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Version](self_ = goodVersions_, value_ = version_);
ff.core.Unit_.Unit()
});
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight())
});
ff.compiler.Syntax_.DDependency(at_ = at_, package_ = ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = user_, second_ = name_), safety_ = safety_, goodVersions_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Version](self_ = goodVersions_), badVersions_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Version](self_ = badVersions_))
}

def Parser_parseVersion(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Version = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Version](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LFloat()), body_ = {() =>
val majorMinor_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LFloat());
val parts_ : ff.core.Array_.Array[ff.core.String_.String] = ff.core.String_.String_split(self_ = ff.compiler.Token_.Token_raw(token_ = majorMinor_), char_ = '.');
val patch_ : ff.core.Int_.Int = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Int_.Int](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LDot()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LDot());
ff.core.String_.String_expectInt(self_ = ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LInt())))
}), body_ = {() =>
0
});
ff.compiler.Syntax_.Version(at_ = ff.compiler.Token_.Token_at(token_ = majorMinor_), major_ = ff.core.String_.String_expectInt(self_ = ff.core.Array_.Array_expect[ff.core.String_.String](self_ = parts_, index_ = 0)), minor_ = ff.core.String_.String_expectInt(self_ = ff.core.Array_.Array_expect[ff.core.String_.String](self_ = parts_, index_ = 1)), patch_ = patch_)
}), body_ = {() =>
val major_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LInt());
ff.compiler.Syntax_.Version(at_ = ff.compiler.Token_.Token_at(token_ = major_), major_ = ff.core.String_.String_expectInt(self_ = ff.compiler.Token_.Token_raw(token_ = major_)), minor_ = 0, patch_ = 0)
})
}

def Parser_parseDashedName(self_ : ff.compiler.Parser_.Parser) : ff.core.String_.String = (self_) match {
case (self_) =>
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_));
def readPart_() : ff.core.String_.String = {
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LInt()), body_ = {() =>
val prefix_ : ff.core.String_.String = ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LInt()));
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower()), body_ = {() =>
(prefix_ + ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower())))
}), body_ = {() =>
prefix_
})
}), body_ = {() =>
ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower()))
})
}
var part_ : ff.core.String_.String = readPart_();
ff.core.Core_.while_(condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "-")
}, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LOperator());
part_ = ((part_ + "-") + readPart_());
ff.core.Unit_.Unit()
});
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = ff.core.String_.String_any(self_ = part_, p_ = {(_w1) =>
ff.core.Char_.Char_isAsciiUpper(self_ = _w1)
}), body_ = {() =>
ff.compiler.Parser_.Parser_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = at_, message_ = ("Package names and paths must not contain upper case letters: " + part_))
});
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (ff.core.String_.String_any(self_ = part_, p_ = {(_w1) =>
(_w1 == '_')
}) || ff.core.String_.String_any(self_ = part_, p_ = {(_w1) =>
(_w1 == '.')
})), body_ = {() =>
ff.compiler.Parser_.Parser_fail[ff.core.Nothing_.Nothing](self_ = self_, at_ = at_, message_ = ("Package names and paths must not contain underscores or dots: " + part_))
});
part_
}

def Parser_parseTypeParameters(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Parser_.Poly = (self_) match {
case (self_) =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "[");
val parameters_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.String_.String] = ff.core.ArrayBuilder_.empty_[ff.core.String_.String]();
val constraints_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Constraint] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Constraint]();
ff.core.Core_.while_(condition_ = {() =>
((!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())) && (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LSemicolon())))
}, body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LBracketLeft()), body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Constraint](self_ = constraints_, value_ = ff.compiler.Syntax_.Constraint(representation_ = ff.compiler.Parser_.Parser_parseType(self_ = self_)));
ff.core.Unit_.Unit()
}), body_ = {() =>
val parameterNameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.String_.String](self_ = parameters_, value_ = ff.compiler.Token_.Token_raw(token_ = parameterNameToken_));
ff.core.Core_.while_(condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LColon())
}, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
pipe_dot(ff.compiler.Parser_.Parser_parseType(self_ = self_))({
case (t_ : ff.compiler.Syntax_.TVariable) =>
ff.compiler.Parser_.Parser_fail[ff.core.Unit_.Unit](self_ = self_, at_ = t_.at_, message_ = ("Unexpected type variable: $" + t_.index_))
case (t_ : ff.compiler.Syntax_.TConstructor) =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Constraint](self_ = constraints_, value_ = ff.compiler.Syntax_.Constraint(representation_ = pipe_dot(t_)({(_c) =>
ff.compiler.Syntax_.TConstructor(at_ = _c.at_, name_ = _c.name_, generics_ = (List(List(ff.compiler.Syntax_.TConstructor(at_ = t_.at_, name_ = ff.compiler.Token_.Token_raw(token_ = parameterNameToken_), generics_ = List())), t_.generics_).flatten))
})))
});
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
});
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LSemicolon()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon());
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Constraint](self_ = constraints_, value_ = ff.compiler.Syntax_.Constraint(representation_ = ff.compiler.Parser_.Parser_parseType(self_ = self_)));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
})
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "]");
ff.compiler.Parser_.Poly(generics_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.String_.String](self_ = parameters_), constraints_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Constraint](self_ = constraints_))
}

def Parser_parseTypeArguments(self_ : ff.compiler.Parser_.Parser, parenthesis_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.List_.List[ff.compiler.Syntax_.Type] = (self_, parenthesis_) match {
case (self_, _) =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = parenthesis_, body_ = {() =>
"("
}), body_ = {() =>
"["
}));
val types_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Type] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Type]();
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Type](self_ = types_, value_ = ff.compiler.Parser_.Parser_parseType(self_ = self_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = parenthesis_, body_ = {() =>
")"
}), body_ = {() =>
"]"
}));
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Type](self_ = types_)
}

def Parser_parseFunctionParameters(self_ : ff.compiler.Parser_.Parser, allowMutable_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.core.List_.List[ff.compiler.Syntax_.Parameter] = (self_, allowMutable_) match {
case (self_, _) =>
val parameters_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Parameter] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Parameter]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "(");
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val mutable_ : ff.core.Bool_.Bool = ((allowMutable_ && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword())) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "mutable"));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = mutable_, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword())
});
val parameterNameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
val parameterType_ : ff.compiler.Syntax_.Type = ff.compiler.Parser_.Parser_parseType(self_ = self_);
val default_ : ff.core.Option_.Option[ff.compiler.Syntax_.Term] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Option_.Option[ff.compiler.Syntax_.Term]](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LAssign())), body_ = {() =>
ff.core.Option_.None[ff.compiler.Syntax_.Term]()
}), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssign());
ff.core.Option_.Some[ff.compiler.Syntax_.Term](value_ = ff.compiler.Parser_.Parser_parseTerm(self_ = self_))
});
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Parameter](self_ = parameters_, value_ = ff.compiler.Syntax_.Parameter(at_ = ff.compiler.Token_.Token_at(token_ = parameterNameToken_), mutable_ = mutable_, name_ = ff.compiler.Token_.Token_raw(token_ = parameterNameToken_), valueType_ = parameterType_, default_ = default_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ")");
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Parameter](self_ = parameters_)
}

def Parser_parseFunctionArguments(self_ : ff.compiler.Parser_.Parser) : ff.core.List_.List[ff.compiler.Syntax_.Argument] = (self_) match {
case (self_) =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "(");
val arguments_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Argument] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Argument]();
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val nameToken_ : ff.core.Option_.Option[ff.compiler.Token_.Token] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Option_.Option[ff.compiler.Token_.Token]](condition_ = (ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower()) && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LAssign())), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssign());
ff.core.Option_.Some[ff.compiler.Token_.Token](value_ = token_)
}), body_ = {() =>
ff.core.Option_.None[ff.compiler.Token_.Token]()
});
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseTerm(self_ = self_);
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Argument](self_ = arguments_, value_ = ff.compiler.Syntax_.Argument(at_ = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.compiler.Token_.Token, ff.compiler.Syntax_.Location](self_ = nameToken_, body_ = {(_w1) =>
ff.compiler.Token_.Token_at(token_ = _w1)
}), body_ = {() =>
value_.at_
}), name_ = ff.core.Option_.Option_map[ff.compiler.Token_.Token, ff.core.String_.String](self_ = nameToken_, body_ = {(_w1) =>
ff.compiler.Token_.Token_raw(token_ = _w1)
}), value_ = value_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ")");
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Argument](self_ = arguments_)
}

def Parser_parseLambda(self_ : ff.compiler.Parser_.Parser, defaultParameterCount_ : ff.core.Int_.Int = 0, ignoreGenerateKeyword_ : ff.core.Bool_.Bool = ff.core.Bool_.False(), allowColon_ : ff.core.Bool_.Bool = ff.core.Bool_.False()) : ff.compiler.Syntax_.Lambda = (self_, defaultParameterCount_, ignoreGenerateKeyword_, allowColon_) match {
case (self_, _, _, _) =>
val colon_ : ff.core.Bool_.Bool = (allowColon_ && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LColon()));
val token_ : ff.compiler.Token_.Token = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = colon_, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon())
}), body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "{")
});
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ((ignoreGenerateKeyword_ && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword())) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "generate")), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword())
});
val result_ : ff.core.List_.List[ff.compiler.Syntax_.MatchCase] = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.MatchCase]](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LPipe()), body_ = {() =>
val cases_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.MatchCase] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchCase]();
ff.core.Core_.while_(condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LPipe())
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.MatchCase](self_ = cases_, value_ = ff.compiler.Parser_.Parser_parseCase(self_ = self_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.MatchCase](self_ = cases_)
}), condition_ = {() =>
(ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower()) && ff.compiler.Token_.Token_is2(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LComma(), kind2_ = ff.compiler.Token_.LArrowThick()))
}, body_ = {() =>
val parameters_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.MatchPattern] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchPattern]();
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LArrowThick()))
}, body_ = {() =>
val parameterToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.MatchPattern](self_ = parameters_, value_ = ff.compiler.Syntax_.PVariable(at_ = ff.compiler.Token_.Token_at(token_ = parameterToken_), name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = ff.compiler.Token_.Token_raw(token_ = parameterToken_))));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LArrowThick())), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LArrowThick());
val term_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseStatements(self_ = self_);
List(ff.compiler.Syntax_.MatchCase(at_ = ff.compiler.Token_.Token_at(token_ = token_), patterns_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.MatchPattern](self_ = parameters_), condition_ = ff.core.Option_.None[ff.compiler.Syntax_.Term](), body_ = term_))
}), body_ = {() =>
val term_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseStatements(self_ = self_);
val wildcards_ : ff.compiler.Wildcards_.Wildcards = ff.compiler.Wildcards_.make_();
val e_ : ff.compiler.Syntax_.Term = ff.compiler.Wildcards_.Wildcards_fixWildcards(self_ = wildcards_, term_ = term_);
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.MatchPattern] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.MatchPattern]](condition_ = (wildcards_.seenWildcards_ != 0), body_ = {() =>
ff.core.List_.List_map[ff.core.Int_.Int, ff.compiler.Syntax_.MatchPattern](self_ = ff.core.Int_.Int_getTo(self_ = 1, inclusive_ = wildcards_.seenWildcards_), body_ = {(i_) =>
ff.compiler.Syntax_.PVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = ("_w" + i_)))
})
}), body_ = {() =>
ff.core.List_.List_map[ff.core.Int_.Int, ff.compiler.Syntax_.MatchPattern](self_ = ff.core.Int_.Int_getTo(self_ = 1, inclusive_ = defaultParameterCount_), body_ = {(i_) =>
ff.compiler.Syntax_.PVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.core.Option_.None[ff.core.String_.String]())
})
});
List(ff.compiler.Syntax_.MatchCase(at_ = ff.compiler.Token_.Token_at(token_ = token_), patterns_ = arguments_, condition_ = ff.core.Option_.None[ff.compiler.Syntax_.Term](), body_ = e_))
});
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!colon_), body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "}")
});
ff.compiler.Syntax_.Lambda(at_ = ff.compiler.Token_.Token_at(token_ = token_), cases_ = result_)
}

def Parser_parseCase(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.MatchCase = (self_) match {
case (self_) =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LPipe());
val patterns_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.MatchPattern] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchPattern]();
ff.core.Core_.while_(condition_ = {() =>
((!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LArrowThick())) && (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{")))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.MatchPattern](self_ = patterns_, value_ = ff.compiler.Parser_.Parser_parsePattern(self_ = self_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ((!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LArrowThick())) && (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{"))), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
val condition_ : ff.core.Option_.Option[ff.compiler.Syntax_.Term] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Option_.Option[ff.compiler.Syntax_.Term]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{")), body_ = {() =>
ff.core.Option_.None[ff.compiler.Syntax_.Term]()
}), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft());
val term_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseStatements(self_ = self_);
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight());
ff.core.Option_.Some[ff.compiler.Syntax_.Term](value_ = term_)
});
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LArrowThick());
val body_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseStatements(self_ = self_);
ff.compiler.Syntax_.MatchCase(at_ = ff.compiler.Token_.Token_at(token_ = token_), patterns_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.MatchPattern](self_ = patterns_), condition_ = condition_, body_ = body_)
}

def Parser_parsePattern(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.MatchPattern = (self_) match {
case (self_) =>
val pattern_ : ff.compiler.Syntax_.MatchPattern = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.MatchPattern](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LWildcard()), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LWildcard());
ff.compiler.Syntax_.PVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.core.Option_.None[ff.core.String_.String]())
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower())
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Syntax_.PVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.core.Option_.Some[ff.core.String_.String](value_ = ff.compiler.Token_.Token_raw(token_ = token_)))
}), condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")
}, body_ = {() =>
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_));
val pair_ : ff.core.Pair_.Pair[ff.core.List_.List[ff.core.String_.String], ff.core.List_.List[ff.compiler.Syntax_.MatchPattern]] = ff.core.List_.List_getUnzip[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern](self_ = ff.compiler.Parser_.Parser_parseRecordPattern(self_ = self_));
ff.compiler.Syntax_.PVariant(at_ = at_, name_ = ("Record$" + ff.core.List_.List_join(self_ = pair_.first_, separator_ = "$")), patterns_ = pair_.second_)
}), condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")
}, body_ = {() =>
ff.compiler.Parser_.Parser_parseListPattern(self_ = self_)
}), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.MatchPattern](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "("), body_ = {() =>
val patterns_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.MatchPattern] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.MatchPattern]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "(");
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.MatchPattern](self_ = patterns_, value_ = ff.compiler.Parser_.Parser_parsePattern(self_ = self_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ")");
ff.compiler.Syntax_.PVariant(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), patterns_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.MatchPattern](self_ = patterns_))
}), body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.MatchPattern](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower()), body_ = {() =>
val asToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Syntax_.PVariantAs(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), variable_ = ff.core.Option_.Some[ff.core.String_.String](value_ = ff.compiler.Token_.Token_raw(token_ = asToken_)))
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LWildcard())
}, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LWildcard());
ff.compiler.Syntax_.PVariantAs(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), variable_ = ff.core.Option_.None[ff.core.String_.String]())
}), body_ = {() =>
ff.compiler.Syntax_.PVariant(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), patterns_ = List())
})
})
});
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.MatchPattern](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "@"), body_ = {() =>
val atToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LOperator());
val asToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Syntax_.PAlias(at_ = ff.compiler.Token_.Token_at(token_ = atToken_), pattern_ = pattern_, variable_ = ff.compiler.Token_.Token_raw(token_ = asToken_))
}), body_ = {() =>
pattern_
})
}

def Parser_parseType(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Type = (self_) match {
case (self_) =>
val leftTypes_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Type]](condition_ = ((ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(") && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LLower())) && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_aheadAhead(self_ = self_), kind1_ = ff.compiler.Token_.LColon())), body_ = {() =>
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_));
val pair_ : ff.core.Pair_.Pair[ff.core.List_.List[ff.core.String_.String], ff.core.List_.List[ff.compiler.Syntax_.Type]] = ff.core.List_.List_getUnzip[ff.core.String_.String, ff.compiler.Syntax_.Type](self_ = ff.compiler.Parser_.Parser_parseRecordType(self_ = self_));
List(ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = ("Record$" + ff.core.List_.List_join(self_ = pair_.first_, separator_ = "$")), generics_ = pair_.second_))
}), condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")
}, body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeArguments(self_ = self_, parenthesis_ = ff.core.Bool_.True())
}), body_ = {() =>
val namespace_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LNamespace()), body_ = {() =>
ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LNamespace()))
}), body_ = {() =>
""
});
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Type]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeArguments(self_ = self_, parenthesis_ = ff.core.Bool_.False())
});
List(ff.compiler.Syntax_.TConstructor(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = (namespace_ + ff.compiler.Token_.Token_raw(token_ = token_)), generics_ = arguments_))
});
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Type](condition_ = ((!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LArrowThick())) && (ff.core.List_.List_getSize[ff.compiler.Syntax_.Type](self_ = leftTypes_) == 1)), body_ = {() =>
ff.core.List_.List_expectFirst[ff.compiler.Syntax_.Type](self_ = leftTypes_)
}), body_ = {() =>
val arrowToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LArrowThick());
val rightType_ : ff.compiler.Syntax_.Type = ff.compiler.Parser_.Parser_parseType(self_ = self_);
ff.compiler.Syntax_.TConstructor(at_ = ff.compiler.Token_.Token_at(token_ = arrowToken_), name_ = ("Function$" + ff.core.List_.List_getSize[ff.compiler.Syntax_.Type](self_ = leftTypes_)), generics_ = (List(leftTypes_, List(rightType_)).flatten))
})
}

def Parser_parseStatements(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ff.compiler.Token_.Token_is2(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight(), kind2_ = ff.compiler.Token_.LPipe()), body_ = {() =>
ff.compiler.Syntax_.EVariant(at_ = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_)), name_ = "Unit", typeArguments_ = List(), arguments_ = ff.core.Option_.None[ff.core.List_.List[ff.compiler.Syntax_.Argument]]())
}), body_ = {() =>
var result_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseStatement(self_ = self_);
ff.core.Core_.while_(condition_ = {() =>
ff.compiler.Parser_.Parser_currentIsSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon())
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon());
result_ = ff.compiler.Syntax_.ESequential(at_ = ff.compiler.Token_.Token_at(token_ = token_), before_ = result_, after_ = ff.compiler.Parser_.Parser_parseStatement(self_ = self_));
ff.core.Unit_.Unit()
});
result_
})
}

def Parser_parseStatement(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = (ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && (ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "let") || ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "mutable"))), body_ = {() =>
ff.compiler.Parser_.Parser_parseLet(self_ = self_)
}), body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = (ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "function")), body_ = {() =>
ff.compiler.Parser_.Parser_parseFunctions(self_ = self_)
}), body_ = {() =>
val term_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseTerm(self_ = self_);
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ((!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LAssign())) && (!ff.compiler.Token_.Token_is3(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LAssignPlus(), kind2_ = ff.compiler.Token_.LAssignMinus(), kind3_ = ff.compiler.Token_.LAssignLink()))), body_ = {() =>
term_
}), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.core.Core_.do_[ff.compiler.Token_.Token](body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LAssignPlus()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssignPlus())
}), body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LAssignMinus()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssignMinus())
}), body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LAssignLink()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssignLink())
}), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssign())
})
})
})
});
val operator_ : ff.core.String_.String = ff.core.String_.String_dropLast(self_ = ff.compiler.Token_.Token_raw(token_ = token_), count_ = 1);
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseTerm(self_ = self_);
pipe_dot(term_)({
case (ff.compiler.Syntax_.EVariable(_, name_, _, _)) =>
ff.compiler.Syntax_.EAssign(at_ = ff.compiler.Token_.Token_at(token_ = token_), operator_ = operator_, variable_ = name_, value_ = value_)
case (e_ : ff.compiler.Syntax_.EField) =>
ff.compiler.Syntax_.EAssignField(at_ = ff.compiler.Token_.Token_at(token_ = token_), operator_ = operator_, record_ = e_.record_, field_ = e_.field_, value_ = value_)
case (_) =>
ff.compiler.Parser_.Parser_fail[ff.compiler.Syntax_.Term](self_ = self_, at_ = ff.compiler.Token_.Token_at(token_ = token_), message_ = "Only variables and fields are assignable")
})
})
})
})
}

def Parser_parseLet(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
val mutable_ : ff.core.Bool_.Bool = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "mutable");
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = mutable_, body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "mutable")
}), body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "let")
});
val nameToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
val valueType_ : ff.compiler.Syntax_.Type = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Type](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LColon())), body_ = {() =>
ff.compiler.Parser_.Parser_freshTypeVariable(self_ = self_, at_ = ff.compiler.Token_.Token_at(token_ = nameToken_))
}), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LColon());
ff.compiler.Parser_.Parser_parseType(self_ = self_)
});
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssign());
val value_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseTerm(self_ = self_);
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon());
val body_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseStatements(self_ = self_);
ff.compiler.Syntax_.ELet(at_ = ff.compiler.Token_.Token_at(token_ = nameToken_), mutable_ = mutable_, name_ = ff.compiler.Token_.Token_raw(token_ = nameToken_), valueType_ = valueType_, value_ = value_, body_ = body_)
}

def Parser_parseFunctions(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_));
val functions_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.DFunction] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.DFunction]();
ff.core.Core_.while_(condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "function")
}, body_ = {() =>
val functionAt_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword(), value_ = "function"));
val signature_ : ff.compiler.Syntax_.Signature = ff.compiler.Parser_.Parser_parseSignature(self_ = self_);
val body_ : ff.compiler.Syntax_.Lambda = ff.compiler.Parser_.Parser_parseLambda(self_ = self_, defaultParameterCount_ = ff.core.List_.List_getSize[ff.compiler.Syntax_.Parameter](self_ = signature_.parameters_), ignoreGenerateKeyword_ = ff.core.Bool_.False(), allowColon_ = ff.core.Bool_.False());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.DFunction](self_ = functions_, value_ = ff.compiler.Syntax_.DFunction(at_ = functionAt_, signature_ = signature_, body_ = body_, targets_ = ff.compiler.Syntax_.Targets(scala_ = ff.core.Option_.None[ff.core.String_.String](), javaScript_ = ff.core.Option_.None[ff.core.String_.String]())));
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LSemicolon());
ff.core.Unit_.Unit()
});
val body_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseStatements(self_ = self_);
ff.compiler.Syntax_.EFunctions(at_ = at_, functions_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.DFunction](self_ = functions_), body_ = body_)
}

def Parser_parseTerm(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
ff.compiler.Parser_.Parser_parseBinary(self_ = self_, level_ = 0)
}

def Parser_parseBinary(self_ : ff.compiler.Parser_.Parser, level_ : ff.core.Int_.Int) : ff.compiler.Syntax_.Term = (self_, level_) match {
case (self_, _) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = (level_ >= ff.core.Array_.Array_getSize[ff.core.List_.List[ff.core.String_.String]](self_ = ff.compiler.Parser_.binaryOperators_)), body_ = {() =>
ff.compiler.Parser_.Parser_parseUnary(self_ = self_)
}), body_ = {() =>
val operators_ : ff.core.List_.List[ff.core.String_.String] = ff.core.Array_.Array_expect[ff.core.List_.List[ff.core.String_.String]](self_ = ff.compiler.Parser_.binaryOperators_, index_ = level_);
var result_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseBinary(self_ = self_, level_ = (level_ + 1));
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LOperator()), body_ = {() =>
ff.core.Core_.while_(condition_ = {() =>
ff.core.List_.List_any[ff.core.String_.String](self_ = operators_, body_ = {(value_) =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = value_)
})
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LOperator());
val right_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseBinary(self_ = self_, level_ = (level_ + 1));
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.compiler.Token_.Token_rawIs(token_ = token_, value_ = "++"), body_ = {() =>
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = List(ff.compiler.Syntax_.Argument(at_ = right_.at_, name_ = ff.core.Option_.None[ff.core.String_.String](), value_ = right_));
result_ = ff.compiler.Syntax_.ECall(at_ = ff.compiler.Token_.Token_at(token_ = token_), tailCall_ = ff.core.Bool_.False(), function_ = ff.compiler.Syntax_.EField(at_ = ff.compiler.Token_.Token_at(token_ = token_), record_ = result_, field_ = "addAll"), typeArguments_ = List(), arguments_ = arguments_);
ff.core.Unit_.Unit()
}), body_ = {() =>
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = List(ff.compiler.Syntax_.Argument(at_ = result_.at_, name_ = ff.core.Option_.None[ff.core.String_.String](), value_ = result_), ff.compiler.Syntax_.Argument(at_ = right_.at_, name_ = ff.core.Option_.None[ff.core.String_.String](), value_ = right_));
result_ = ff.compiler.Syntax_.ECall(at_ = ff.compiler.Token_.Token_at(token_ = token_), tailCall_ = ff.core.Bool_.False(), function_ = ff.compiler.Syntax_.EVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), generics_ = List(), instances_ = List()), typeArguments_ = List(), arguments_ = arguments_);
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
})
});
result_
})
}

def Parser_parseUnary(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LOperator()), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LOperator());
val term_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseUnary(self_ = self_);
ff.compiler.Syntax_.ECall(at_ = ff.compiler.Token_.Token_at(token_ = token_), tailCall_ = ff.core.Bool_.False(), function_ = ff.compiler.Syntax_.EVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), generics_ = List(), instances_ = List()), typeArguments_ = List(), arguments_ = List(ff.compiler.Syntax_.Argument(at_ = term_.at_, name_ = ff.core.Option_.None[ff.core.String_.String](), value_ = term_)))
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseFieldsAndCalls(self_ = self_)
})
}

def Parser_parseFieldsAndCalls(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
val tailCall_ : ff.core.Bool_.Bool = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Bool_.Bool](condition_ = (ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LKeyword()) && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "tailcall")), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LKeyword());
ff.core.Bool_.True()
}), body_ = {() =>
ff.core.Bool_.False()
});
var result_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseAtom(self_ = self_);
ff.core.Core_.while_(condition_ = {() =>
((ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketLeft()) || ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LColon())) || ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LDot()))
}, body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LDot()), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LDot());
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{"), body_ = {() =>
val term_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseAtom(self_ = self_);
result_ = ff.compiler.Syntax_.EPipe(at_ = term_.at_, value_ = result_, function_ = term_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), condition_ = {() =>
ff.compiler.Token_.Token_is2(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LUpper(), kind2_ = ff.compiler.Token_.LNamespace())
}, body_ = {() =>
result_ = ff.compiler.Parser_.Parser_parseCopy(self_ = self_, record_ = result_);
ff.core.Unit_.Unit();
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
result_ = ff.compiler.Syntax_.EField(at_ = ff.compiler.Token_.Token_at(token_ = token_), record_ = result_, field_ = ff.compiler.Token_.Token_raw(token_ = token_));
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
}), body_ = {() =>
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_));
val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Type]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeArguments(self_ = self_, parenthesis_ = ff.core.Bool_.False())
});
val arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Argument]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseFunctionArguments(self_ = self_)
});
val moreArguments_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Argument] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Argument]();
var lastWasCurly_ : ff.core.Bool_.Bool = ff.core.Bool_.False();
ff.core.Core_.while_(condition_ = {() =>
(ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{") || ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LColon()))
}, body_ = {() =>
lastWasCurly_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{");
val lambda_ : ff.compiler.Syntax_.Lambda = ff.compiler.Parser_.Parser_parseLambda(self_ = self_, defaultParameterCount_ = 0, ignoreGenerateKeyword_ = ff.core.Bool_.False(), allowColon_ = ff.core.Bool_.True());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Argument](self_ = moreArguments_, value_ = ff.compiler.Syntax_.Argument(at_ = lambda_.at_, name_ = ff.core.Option_.None[ff.core.String_.String](), value_ = ff.compiler.Syntax_.ELambda(at_ = lambda_.at_, lambda_ = lambda_)));
ff.core.Unit_.Unit()
});
result_ = ff.compiler.Syntax_.ECall(at_ = at_, tailCall_ = tailCall_, function_ = result_, typeArguments_ = typeArguments_, arguments_ = (List(arguments_, ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Argument](self_ = moreArguments_)).flatten));
ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = (lastWasCurly_ && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower())), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
result_ = ff.compiler.Syntax_.EField(at_ = ff.compiler.Token_.Token_at(token_ = token_), record_ = result_, field_ = ff.compiler.Token_.Token_raw(token_ = token_))
});
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
});
result_
}

def Parser_parseAtom(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Option_.Option_elseIf(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LString()), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LString());
ff.compiler.Syntax_.EString(at_ = ff.compiler.Token_.Token_at(token_ = token_), value_ = ff.compiler.Token_.Token_raw(token_ = token_))
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LChar())
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LChar());
ff.compiler.Syntax_.EChar(at_ = ff.compiler.Token_.Token_at(token_ = token_), value_ = ff.compiler.Token_.Token_raw(token_ = token_))
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LInt())
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LInt());
ff.compiler.Syntax_.EInt(at_ = ff.compiler.Token_.Token_at(token_ = token_), value_ = ff.compiler.Token_.Token_raw(token_ = token_))
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LFloat())
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LFloat());
ff.compiler.Syntax_.EFloat(at_ = ff.compiler.Token_.Token_at(token_ = token_), value_ = ff.compiler.Token_.Token_raw(token_ = token_))
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower())
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Syntax_.EVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = ff.compiler.Token_.Token_raw(token_ = token_), generics_ = List(), instances_ = List())
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LNamespace())
}, body_ = {() =>
val namespaceToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LNamespace());
val extraNamespace_ : ff.core.Option_.Option[ff.core.String_.String] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Option_.Option[ff.core.String_.String]](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LNamespace())), body_ = {() =>
ff.core.Option_.None[ff.core.String_.String]()
}), body_ = {() =>
ff.core.Option_.Some[ff.core.String_.String](value_ = ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LNamespace())))
});
val prefix_ : ff.core.String_.String = (ff.compiler.Token_.Token_raw(token_ = namespaceToken_) + ff.core.Option_.Option_else(self_ = extraNamespace_, body_ = {() =>
""
}));
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LLower()), body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Syntax_.EVariable(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = (prefix_ + ff.compiler.Token_.Token_raw(token_ = token_)), generics_ = List(), instances_ = List())
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseVariant(self_ = self_, prefix_ = prefix_)
})
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LUpper())
}, body_ = {() =>
ff.compiler.Parser_.Parser_parseVariant(self_ = self_, prefix_ = "")
}), condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "{")
}, body_ = {() =>
val lambda_ : ff.compiler.Syntax_.Lambda = ff.compiler.Parser_.Parser_parseLambda(self_ = self_, defaultParameterCount_ = 0, ignoreGenerateKeyword_ = ff.core.Bool_.False(), allowColon_ = ff.core.Bool_.False());
ff.compiler.Syntax_.ELambda(at_ = lambda_.at_, lambda_ = lambda_)
}), condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")
}, body_ = {() =>
ff.compiler.Parser_.Parser_parseList(self_ = self_)
}), condition_ = {() =>
((ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(") && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_ahead(self_ = self_), kind1_ = ff.compiler.Token_.LLower())) && ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_aheadAhead(self_ = self_), kind1_ = ff.compiler.Token_.LAssign()))
}, body_ = {() =>
ff.compiler.Syntax_.ERecord(at_ = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_)), fields_ = ff.compiler.Parser_.Parser_parseRecord(self_ = self_))
}), condition_ = {() =>
ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")
}, body_ = {() =>
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "(");
val result_ : ff.compiler.Syntax_.Term = ff.compiler.Parser_.Parser_parseTerm(self_ = self_);
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ")");
result_
}), condition_ = {() =>
ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LWildcard())
}, body_ = {() =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LWildcard());
ff.compiler.Syntax_.EWildcard(at_ = ff.compiler.Token_.Token_at(token_ = token_), index_ = 0)
}), body_ = {() =>
ff.compiler.Parser_.Parser_fail[ff.compiler.Syntax_.Term](self_ = self_, at_ = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_)), message_ = ("Expected atom, got " + ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_current(self_ = self_))))
})
}

def Parser_parseVariant(self_ : ff.compiler.Parser_.Parser, prefix_ : ff.core.String_.String) : ff.compiler.Syntax_.Term = (self_, prefix_) match {
case (self_, _) =>
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val name_ : ff.core.String_.String = (prefix_ + ff.compiler.Token_.Token_raw(token_ = token_));
val typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.List_.List[ff.compiler.Syntax_.Type]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "[")), body_ = {() =>
List()
}), body_ = {() =>
ff.compiler.Parser_.Parser_parseTypeArguments(self_ = self_, parenthesis_ = ff.core.Bool_.False())
});
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "?"), body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LOperator());
ff.compiler.Syntax_.EVariantIs(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = name_, typeArguments_ = typeArguments_)
}), body_ = {() =>
val arguments_ : ff.core.Option_.Option[ff.core.List_.List[ff.compiler.Syntax_.Argument]] = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Option_.Option[ff.core.List_.List[ff.compiler.Syntax_.Argument]]](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "(")), body_ = {() =>
ff.core.Option_.None[ff.core.List_.List[ff.compiler.Syntax_.Argument]]()
}), body_ = {() =>
ff.core.Option_.Some[ff.core.List_.List[ff.compiler.Syntax_.Argument]](value_ = ff.compiler.Parser_.Parser_parseFunctionArguments(self_ = self_))
});
ff.compiler.Syntax_.EVariant(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = name_, typeArguments_ = typeArguments_, arguments_ = arguments_)
})
}

def Parser_parseCopy(self_ : ff.compiler.Parser_.Parser, record_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, record_) match {
case (self_, _) =>
val namespace_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LNamespace())), body_ = {() =>
""
}), body_ = {() =>
ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LNamespace()))
});
val extraNamespace_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LNamespace())), body_ = {() =>
""
}), body_ = {() =>
ff.compiler.Token_.Token_raw(token_ = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LNamespace()))
});
val prefix_ : ff.core.String_.String = (namespace_ + extraNamespace_);
val token_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LUpper());
val name_ : ff.core.String_.String = (prefix_ + ff.compiler.Token_.Token_raw(token_ = token_));
val fields_ : ff.core.List_.List[ff.compiler.Syntax_.Field] = ff.compiler.Parser_.Parser_parseRecord(self_ = self_);
ff.compiler.Syntax_.ECopy(at_ = ff.compiler.Token_.Token_at(token_ = token_), name_ = name_, record_ = record_, arguments_ = fields_)
}

def Parser_parseRecord(self_ : ff.compiler.Parser_.Parser) : ff.core.List_.List[ff.compiler.Syntax_.Field] = (self_) match {
case (self_) =>
val fields_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.compiler.Syntax_.Field] = ff.core.ArrayBuilder_.empty_[ff.compiler.Syntax_.Field]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "(");
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val fieldToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssign());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.compiler.Syntax_.Field](self_ = fields_, value_ = ff.compiler.Syntax_.Field(at_ = ff.compiler.Token_.Token_at(token_ = fieldToken_), name_ = ff.compiler.Token_.Token_raw(token_ = fieldToken_), value_ = ff.compiler.Parser_.Parser_parseTerm(self_ = self_)));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ")");
ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.compiler.Syntax_.Field](self_ = fields_)
}

def Parser_parseRecordType(self_ : ff.compiler.Parser_.Parser) : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]] = (self_) match {
case (self_) =>
val fields_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]] = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "(");
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val fieldToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LColon());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = fields_, value_ = ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type](first_ = ff.compiler.Token_.Token_raw(token_ = fieldToken_), second_ = ff.compiler.Parser_.Parser_parseType(self_ = self_)));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ")");
ff.core.List_.List_sortBy[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Type]](self_ = fields_), body_ = {(_w1) =>
_w1.first_
})
}

def Parser_parseRecordPattern(self_ : ff.compiler.Parser_.Parser) : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]] = (self_) match {
case (self_) =>
val fields_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]] = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]]();
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "(");
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight()))
}, body_ = {() =>
val fieldToken_ : ff.compiler.Token_.Token = ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LLower());
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LAssign());
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]](self_ = fields_, value_ = ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern](first_ = ff.compiler.Token_.Token_raw(token_ = fieldToken_), second_ = ff.compiler.Parser_.Parser_parsePattern(self_ = self_)));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LBracketRight())), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = ")");
ff.core.List_.List_sortBy[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]](self_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.MatchPattern]](self_ = fields_), body_ = {(_w1) =>
_w1.first_
})
}

def Parser_parseListPattern(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.MatchPattern = (self_) match {
case (self_) =>
val items_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]] = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]]();
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "["));
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "]"))
}, body_ = {() =>
val spread_ : ff.core.Bool_.Bool = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LDotDotDot());
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = spread_, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LDotDotDot())
});
val pattern_ : ff.compiler.Syntax_.MatchPattern = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.MatchPattern](condition_ = (spread_ && ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "]")), body_ = {() =>
ff.compiler.Syntax_.PVariable(at_ = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_current(self_ = self_)), name_ = ff.core.Option_.None[ff.core.String_.String]())
}), body_ = {() =>
ff.compiler.Parser_.Parser_parsePattern(self_ = self_)
});
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]](self_ = items_, value_ = ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool](first_ = pattern_, second_ = spread_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "]")), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "]");
ff.compiler.Syntax_.PList(at_ = at_, itemType_ = ff.compiler.Parser_.Parser_freshTypeVariable(self_ = self_, at_ = at_), items_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]](self_ = items_))
}

def Parser_parseList(self_ : ff.compiler.Parser_.Parser) : ff.compiler.Syntax_.Term = (self_) match {
case (self_) =>
val items_ : ff.core.ArrayBuilder_.ArrayBuilder[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]] = ff.core.ArrayBuilder_.empty_[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]]();
val at_ : ff.compiler.Syntax_.Location = ff.compiler.Token_.Token_at(token_ = ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketLeft(), value_ = "["));
ff.core.Core_.while_(condition_ = {() =>
(!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "]"))
}, body_ = {() =>
val spread_ : ff.core.Bool_.Bool = ff.compiler.Token_.Token_is(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), kind1_ = ff.compiler.Token_.LDotDotDot());
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = spread_, body_ = {() =>
ff.compiler.Parser_.Parser_skip(self_ = self_, kind_ = ff.compiler.Token_.LDotDotDot())
});
ff.core.ArrayBuilder_.ArrayBuilder_append[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]](self_ = items_, value_ = ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool](first_ = ff.compiler.Parser_.Parser_parseTerm(self_ = self_), second_ = spread_));
ff.core.Core_.if_[ff.compiler.Token_.Token](condition_ = (!ff.compiler.Token_.Token_rawIs(token_ = ff.compiler.Parser_.Parser_current(self_ = self_), value_ = "]")), body_ = {() =>
ff.compiler.Parser_.Parser_skipSeparator(self_ = self_, kind_ = ff.compiler.Token_.LComma())
});
ff.core.Unit_.Unit()
});
ff.compiler.Parser_.Parser_rawSkip(self_ = self_, kind_ = ff.compiler.Token_.LBracketRight(), value_ = "]");
ff.compiler.Syntax_.EList(at_ = at_, elementType_ = ff.compiler.Parser_.Parser_freshTypeVariable(self_ = self_, at_ = at_), items_ = ff.core.ArrayBuilder_.ArrayBuilder_getList[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]](self_ = items_))
}


}
