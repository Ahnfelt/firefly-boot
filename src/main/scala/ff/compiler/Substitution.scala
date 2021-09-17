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
object Substitution_ {

case class Substitution(var substitution_ : ff.core.Map_.Map[ff.core.Int_.Int, ff.compiler.Syntax_.Type])

def core_(name_ : ff.core.String_.String) : ff.core.String_.String = {
((("ff:core/" + name_) + ".") + name_)
}
implicit class Substitution_extend0(self_ : ff.compiler.Substitution_.Substitution) {

def substituteModule_(module_ : ff.compiler.Syntax_.Module) : ff.compiler.Syntax_.Module = {
val lets_ = module_.lets_.map_({(_w1) =>
self_.substituteLetDefinition_(_w1)
});
val functions_ = module_.functions_.map_({(_w1) =>
self_.substituteFunctionDefinition_(_w1)
});
val extends_ = module_.extends_.map_({(_w1) =>
self_.substituteExtendDefinition_(_w1)
});
module_.copy(extends_ = extends_, lets_ = lets_, functions_ = functions_)
}

def substituteLetDefinition_(definition_ : ff.compiler.Syntax_.DLet) : ff.compiler.Syntax_.DLet = {
definition_.copy(variableType_ = self_.substituteType_(definition_.variableType_), value_ = self_.substituteTerm_(definition_.value_))
}

def substituteExtendDefinition_(definition_ : ff.compiler.Syntax_.DExtend) : ff.compiler.Syntax_.DExtend = {
definition_.copy(methods_ = definition_.methods_.map_({(_w1) =>
self_.substituteFunctionDefinition_(_w1)
}))
}

def substituteFunctionDefinition_(definition_ : ff.compiler.Syntax_.DFunction) : ff.compiler.Syntax_.DFunction = {
definition_.copy(body_ = self_.substituteLambda_(definition_.body_))
}

def substituteLambda_(definition_ : ff.compiler.Syntax_.Lambda) : ff.compiler.Syntax_.Lambda = {
definition_.copy(cases_ = definition_.cases_.map_({(case_) =>
case_.copy(condition_ = case_.condition_.map_(self_.substituteTerm_), body_ = self_.substituteTerm_(case_.body_))
}))
}

def substituteTerm_(term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = {
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
e_.copy(generics_ = e_.generics_.map_(self_.substituteType_))
case (e_ : ff.compiler.Syntax_.EField) =>
e_.copy(record_ = self_.substituteTerm_(e_.record_))
case (e_ : ff.compiler.Syntax_.EWildcard) =>
term_
case (e_ : ff.compiler.Syntax_.EList) =>
e_.copy(elementType_ = self_.substituteType_(e_.elementType_), items_ = e_.items_.map_({
case (ff.core.Pair_.Pair(item_, b_)) =>
ff.core.Pair_.Pair(self_.substituteTerm_(item_), b_)
}))
case (e_ : ff.compiler.Syntax_.ESequential) =>
e_.copy(before_ = self_.substituteTerm_(e_.before_), after_ = self_.substituteTerm_(e_.after_))
case (e_ : ff.compiler.Syntax_.ELet) =>
e_.copy(valueType_ = self_.substituteType_(e_.valueType_), value_ = self_.substituteTerm_(e_.value_), body_ = self_.substituteTerm_(e_.body_))
case (e_ : ff.compiler.Syntax_.ELambda) =>
e_.copy(lambda_ = self_.substituteLambda_(e_.lambda_))
case (e_ : ff.compiler.Syntax_.EVariant) =>
e_.copy(typeArguments_ = e_.typeArguments_.map_(self_.substituteType_), arguments_ = e_.arguments_.map_({(_w1) =>
_w1.map_(self_.substituteArgument_)
}))
case (e_ : ff.compiler.Syntax_.EVariantIs) =>
e_.copy(typeArguments_ = e_.typeArguments_.map_(self_.substituteType_))
case (e_ : ff.compiler.Syntax_.ECopy) =>
e_.copy(record_ = self_.substituteTerm_(e_.record_), arguments_ = e_.arguments_.map_(self_.substituteField_))
case (e_ : ff.compiler.Syntax_.EPipe) =>
e_.copy(value_ = self_.substituteTerm_(e_.value_), function_ = self_.substituteTerm_(e_.function_))
case (e_ : ff.compiler.Syntax_.ECall) =>
e_.copy(function_ = self_.substituteTerm_(e_.function_), typeArguments_ = e_.typeArguments_.map_(self_.substituteType_), arguments_ = e_.arguments_.map_(self_.substituteArgument_))
case (e_ : ff.compiler.Syntax_.ERecord) =>
e_.copy(fields_ = e_.fields_.map_(self_.substituteField_))
case (e_ : ff.compiler.Syntax_.EFunctions) =>
e_.copy(functions_ = e_.functions_.map_(self_.substituteFunctionDefinition_), body_ = self_.substituteTerm_(e_.body_))
case (e_ : ff.compiler.Syntax_.EAssign) =>
e_.copy(value_ = self_.substituteTerm_(e_.value_))
case (e_ : ff.compiler.Syntax_.EAssignField) =>
e_.copy(record_ = self_.substituteTerm_(e_.record_), value_ = self_.substituteTerm_(e_.value_))
})
}

def substituteArgument_(argument_ : ff.compiler.Syntax_.Argument) : ff.compiler.Syntax_.Argument = {
argument_.copy(value_ = self_.substituteTerm_(argument_.value_))
}

def substituteField_(field_ : ff.compiler.Syntax_.Field) : ff.compiler.Syntax_.Field = {
field_.copy(value_ = self_.substituteTerm_(field_.value_))
}

def substituteType_(type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (type_) match {
case (ff.compiler.Syntax_.TVariable(at_, i_)) =>
ff.core.Core_.if_(self_.has_(i_), {() =>
self_.substituteType_(self_.get_(i_))
}).else_({() =>
ff.compiler.Syntax_.TConstructor(at_, ff.compiler.Substitution_.core_("Nothing"), List())
})
case (t_ : ff.compiler.Syntax_.TConstructor) =>
t_.copy(generics_ = t_.generics_.map_({(t_) =>
self_.substituteType_(t_)
}))
}

def get_(index_ : ff.core.Int_.Int) : ff.compiler.Syntax_.Type = {
pipe_dot(self_.substitution_.expect_(index_))({
case (ff.compiler.Syntax_.TVariable(_, i_)) if self_.has_(i_) =>
val t_ = self_.get_(i_);
self_.substitution_ = self_.substitution_.add_(index_, t_);
t_
case (ff.compiler.Syntax_.TVariable(at_, _)) =>
ff.compiler.Syntax_.TConstructor(at_, ff.compiler.Substitution_.core_("Nothing"), List())
case (t_) =>
t_
})
}

def has_(index_ : ff.core.Int_.Int) : ff.core.Bool_.Bool = {
self_.substitution_.contains_(index_)
}

}


}
