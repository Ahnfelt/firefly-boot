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
object Substitution_ {

case class Substitution(var substitution_ : ff.core.Map_.Map[ff.core.Int_.Int, ff.compiler.Syntax_.Type])

def core_(name_ : ff.core.String_.String) : ff.core.String_.String = {
((("ff:core/" + name_) + ".") + name_)
}
def Substitution_substituteModule(self_ : ff.compiler.Substitution_.Substitution, module_ : ff.compiler.Syntax_.Module) : ff.compiler.Syntax_.Module = (self_, module_) match {
case (self_, _) =>
val lets_ : ff.core.List_.List[ff.compiler.Syntax_.DLet] = ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.compiler.Syntax_.DLet](self_ = module_.lets_, body_ = {(_w1) =>
ff.compiler.Substitution_.Substitution_substituteLetDefinition(self_ = self_, definition_ = _w1)
});
val functions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction] = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = module_.functions_, body_ = {(_w1) =>
ff.compiler.Substitution_.Substitution_substituteFunctionDefinition(self_ = self_, definition_ = _w1)
});
val extends_ : ff.core.List_.List[ff.compiler.Syntax_.DExtend] = ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.compiler.Syntax_.DExtend](self_ = module_.extends_, body_ = {(_w1) =>
ff.compiler.Substitution_.Substitution_substituteExtendDefinition(self_ = self_, definition_ = _w1)
});
pipe_dot(module_)({(_c) =>
ff.compiler.Syntax_.Module(packagePair_ = _c.packagePair_, file_ = _c.file_, dependencies_ = _c.dependencies_, imports_ = _c.imports_, types_ = _c.types_, traits_ = _c.traits_, instances_ = _c.instances_, extends_ = extends_, lets_ = lets_, functions_ = functions_)
})
}

def Substitution_substituteLetDefinition(self_ : ff.compiler.Substitution_.Substitution, definition_ : ff.compiler.Syntax_.DLet) : ff.compiler.Syntax_.DLet = (self_, definition_) match {
case (self_, _) =>
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DLet(at_ = _c.at_, name_ = _c.name_, variableType_ = ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = definition_.variableType_), value_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = definition_.value_), scalaTarget_ = _c.scalaTarget_)
})
}

def Substitution_substituteExtendDefinition(self_ : ff.compiler.Substitution_.Substitution, definition_ : ff.compiler.Syntax_.DExtend) : ff.compiler.Syntax_.DExtend = (self_, definition_) match {
case (self_, _) =>
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DExtend(at_ = _c.at_, name_ = _c.name_, generics_ = _c.generics_, constraints_ = _c.constraints_, type_ = _c.type_, methods_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = definition_.methods_, body_ = {(_w1) =>
ff.compiler.Substitution_.Substitution_substituteFunctionDefinition(self_ = self_, definition_ = _w1)
}))
})
}

def Substitution_substituteFunctionDefinition(self_ : ff.compiler.Substitution_.Substitution, definition_ : ff.compiler.Syntax_.DFunction) : ff.compiler.Syntax_.DFunction = (self_, definition_) match {
case (self_, _) =>
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DFunction(at_ = _c.at_, signature_ = _c.signature_, body_ = ff.compiler.Substitution_.Substitution_substituteLambda(self_ = self_, definition_ = definition_.body_), scalaTarget_ = _c.scalaTarget_)
})
}

def Substitution_substituteLambda(self_ : ff.compiler.Substitution_.Substitution, definition_ : ff.compiler.Syntax_.Lambda) : ff.compiler.Syntax_.Lambda = (self_, definition_) match {
case (self_, _) =>
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.Lambda(at_ = _c.at_, cases_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.compiler.Syntax_.MatchCase](self_ = definition_.cases_, body_ = {(case_) =>
pipe_dot(case_)({(_c) =>
ff.compiler.Syntax_.MatchCase(at_ = _c.at_, patterns_ = _c.patterns_, condition_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](self_ = case_.condition_, body_ = {(term_) =>
ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = term_)
}), body_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = case_.body_))
})
}))
})
}

def Substitution_substituteTerm(self_ : ff.compiler.Substitution_.Substitution, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, term_) match {
case (self_, _) =>
pipe_dot(term_)({
case (_ : ff.compiler.Syntax_.EString) =>
term_
case (_ : ff.compiler.Syntax_.EChar) =>
term_
case (_ : ff.compiler.Syntax_.EInt) =>
term_
case (_ : ff.compiler.Syntax_.EFloat) =>
term_
case (e_ : ff.compiler.Syntax_.EVariable) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EVariable(at_ = _c.at_, name_ = _c.name_, generics_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = e_.generics_, body_ = {(type_) =>
ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = type_)
}), instances_ = _c.instances_)
})
case (e_ : ff.compiler.Syntax_.EField) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EField(at_ = _c.at_, record_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.record_), field_ = _c.field_)
})
case (e_ : ff.compiler.Syntax_.EWildcard) =>
term_
case (e_ : ff.compiler.Syntax_.EList) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EList(at_ = _c.at_, elementType_ = ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = e_.elementType_), items_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool], ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]](self_ = e_.items_, body_ = {
case (ff.core.Pair_.Pair(item_, b_)) =>
ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool](first_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = item_), second_ = b_)
}))
})
case (e_ : ff.compiler.Syntax_.ESequential) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ESequential(at_ = _c.at_, before_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.before_), after_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.after_))
})
case (e_ : ff.compiler.Syntax_.ELet) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ELet(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = e_.valueType_), value_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.value_), body_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.body_))
})
case (e_ : ff.compiler.Syntax_.ELambda) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ELambda(at_ = _c.at_, lambda_ = ff.compiler.Substitution_.Substitution_substituteLambda(self_ = self_, definition_ = e_.lambda_))
})
case (e_ : ff.compiler.Syntax_.EVariant) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EVariant(at_ = _c.at_, name_ = _c.name_, typeArguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = e_.typeArguments_, body_ = {(type_) =>
ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = type_)
}), arguments_ = ff.core.Option_.Option_map[ff.core.List_.List[ff.compiler.Syntax_.Argument], ff.core.List_.List[ff.compiler.Syntax_.Argument]](self_ = e_.arguments_, body_ = {(_w1) =>
ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Argument](self_ = _w1, body_ = {(argument_) =>
ff.compiler.Substitution_.Substitution_substituteArgument(self_ = self_, argument_ = argument_)
})
}))
})
case (e_ : ff.compiler.Syntax_.EVariantIs) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EVariantIs(at_ = _c.at_, name_ = _c.name_, typeArguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = e_.typeArguments_, body_ = {(type_) =>
ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = type_)
}))
})
case (e_ : ff.compiler.Syntax_.ECopy) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECopy(at_ = _c.at_, name_ = _c.name_, record_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.record_), arguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Field](self_ = e_.arguments_, body_ = {(field_) =>
ff.compiler.Substitution_.Substitution_substituteField(self_ = self_, field_ = field_)
}))
})
case (e_ : ff.compiler.Syntax_.EPipe) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EPipe(at_ = _c.at_, value_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.value_), function_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.function_))
})
case (e_ : ff.compiler.Syntax_.ECall) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ECall(at_ = _c.at_, tailCall_ = _c.tailCall_, function_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.function_), typeArguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = e_.typeArguments_, body_ = {(type_) =>
ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = type_)
}), arguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Argument](self_ = e_.arguments_, body_ = {(argument_) =>
ff.compiler.Substitution_.Substitution_substituteArgument(self_ = self_, argument_ = argument_)
}))
})
case (e_ : ff.compiler.Syntax_.ERecord) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ERecord(at_ = _c.at_, fields_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Field](self_ = e_.fields_, body_ = {(field_) =>
ff.compiler.Substitution_.Substitution_substituteField(self_ = self_, field_ = field_)
}))
})
case (e_ : ff.compiler.Syntax_.EFunctions) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EFunctions(at_ = _c.at_, functions_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = e_.functions_, body_ = {(definition_) =>
ff.compiler.Substitution_.Substitution_substituteFunctionDefinition(self_ = self_, definition_ = definition_)
}), body_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.body_))
})
case (e_ : ff.compiler.Syntax_.EAssign) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EAssign(at_ = _c.at_, operator_ = _c.operator_, variable_ = _c.variable_, value_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.value_))
})
case (e_ : ff.compiler.Syntax_.EAssignField) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EAssignField(at_ = _c.at_, operator_ = _c.operator_, record_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.record_), field_ = _c.field_, value_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = e_.value_))
})
})
}

def Substitution_substituteArgument(self_ : ff.compiler.Substitution_.Substitution, argument_ : ff.compiler.Syntax_.Argument) : ff.compiler.Syntax_.Argument = (self_, argument_) match {
case (self_, _) =>
pipe_dot(argument_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = argument_.value_))
})
}

def Substitution_substituteField(self_ : ff.compiler.Substitution_.Substitution, field_ : ff.compiler.Syntax_.Field) : ff.compiler.Syntax_.Field = (self_, field_) match {
case (self_, _) =>
pipe_dot(field_)({(_c) =>
ff.compiler.Syntax_.Field(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Substitution_.Substitution_substituteTerm(self_ = self_, term_ = field_.value_))
})
}

def Substitution_substituteType(self_ : ff.compiler.Substitution_.Substitution, type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (self_, type_) match {
case (self_, ff.compiler.Syntax_.TVariable(at_, i_)) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Type](condition_ = ff.compiler.Substitution_.Substitution_has(self_ = self_, index_ = i_), body_ = {() =>
ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = ff.compiler.Substitution_.Substitution_get(self_ = self_, index_ = i_))
}), body_ = {() =>
ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = ff.compiler.Substitution_.core_(name_ = "Nothing"), generics_ = List())
})
case (self_, t_ : ff.compiler.Syntax_.TConstructor) =>
pipe_dot(t_)({(_c) =>
ff.compiler.Syntax_.TConstructor(at_ = _c.at_, name_ = _c.name_, generics_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = t_.generics_, body_ = {(t_) =>
ff.compiler.Substitution_.Substitution_substituteType(self_ = self_, type_ = t_)
}))
})
}

def Substitution_get(self_ : ff.compiler.Substitution_.Substitution, index_ : ff.core.Int_.Int) : ff.compiler.Syntax_.Type = (self_, index_) match {
case (self_, _) =>
pipe_dot(ff.core.Map_.Map_expect[ff.core.Int_.Int, ff.compiler.Syntax_.Type](self_ = self_.substitution_, key_ = index_))({
case (ff.compiler.Syntax_.TVariable(_, i_)) if ff.compiler.Substitution_.Substitution_has(self_ = self_, index_ = i_) =>
val t_ : ff.compiler.Syntax_.Type = ff.compiler.Substitution_.Substitution_get(self_ = self_, index_ = i_);
self_.substitution_ = ff.core.Map_.Map_add[ff.core.Int_.Int, ff.compiler.Syntax_.Type](self_ = self_.substitution_, key_ = index_, value_ = t_);
t_
case (ff.compiler.Syntax_.TVariable(at_, _)) =>
ff.compiler.Syntax_.TConstructor(at_ = at_, name_ = ff.compiler.Substitution_.core_(name_ = "Nothing"), generics_ = List())
case (t_) =>
t_
})
}

def Substitution_has(self_ : ff.compiler.Substitution_.Substitution, index_ : ff.core.Int_.Int) : ff.core.Bool_.Bool = (self_, index_) match {
case (self_, _) =>
ff.core.Map_.Map_contains[ff.core.Int_.Int, ff.compiler.Syntax_.Type](self_ = self_.substitution_, key_ = index_)
}


}
