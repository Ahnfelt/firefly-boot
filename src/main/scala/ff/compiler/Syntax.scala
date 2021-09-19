package ff.compiler
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
object Syntax_ {

case class Location(file_ : ff.core.String_.String, line_ : ff.core.Int_.Int, column_ : ff.core.Int_.Int)

case class CompileError(at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String)

case class Module(packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], file_ : ff.core.String_.String, dependencies_ : ff.core.List_.List[ff.compiler.Syntax_.DDependency], imports_ : ff.core.List_.List[ff.compiler.Syntax_.DImport], types_ : ff.core.List_.List[ff.compiler.Syntax_.DType], traits_ : ff.core.List_.List[ff.compiler.Syntax_.DTrait], instances_ : ff.core.List_.List[ff.compiler.Syntax_.DInstance], extends_ : ff.core.List_.List[ff.compiler.Syntax_.DExtend], lets_ : ff.core.List_.List[ff.compiler.Syntax_.DLet], functions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction])

case class DDependency(at_ : ff.compiler.Syntax_.Location, package_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], safety_ : ff.compiler.Syntax_.Safety, goodVersions_ : ff.core.List_.List[ff.compiler.Syntax_.Version], badVersions_ : ff.core.List_.List[ff.compiler.Syntax_.Version])

case class DImport(at_ : ff.compiler.Syntax_.Location, alias_ : ff.core.String_.String, package_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String], directory_ : ff.core.List_.List[ff.core.String_.String], file_ : ff.core.String_.String)

case class DFunction(at_ : ff.compiler.Syntax_.Location, signature_ : ff.compiler.Syntax_.Signature, body_ : ff.compiler.Syntax_.Lambda, targets_ : ff.compiler.Syntax_.Targets)

case class DLet(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, variableType_ : ff.compiler.Syntax_.Type, value_ : ff.compiler.Syntax_.Term, targets_ : ff.compiler.Syntax_.Targets)

case class DExtend(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.core.String_.String], constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint], type_ : ff.compiler.Syntax_.Type, methods_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction])

case class DType(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.core.String_.String], constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint], commonFields_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter], variants_ : ff.core.List_.List[ff.compiler.Syntax_.Variant], targets_ : ff.compiler.Syntax_.Targets)

case class DTrait(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.core.String_.String], constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint], generatorParameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter], methods_ : ff.core.List_.List[ff.compiler.Syntax_.Signature], methodDefaults_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]], methodGenerators_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.compiler.Syntax_.Lambda]])

case class DInstance(at_ : ff.compiler.Syntax_.Location, generics_ : ff.core.List_.List[ff.core.String_.String], constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint], traitType_ : ff.compiler.Syntax_.Type, generatorArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument], methods_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction])

sealed abstract class Term extends Product with Serializable {
    val at_ : ff.compiler.Syntax_.Location
}
case class EString(at_ : ff.compiler.Syntax_.Location, value_ : ff.core.String_.String) extends Term
case class EChar(at_ : ff.compiler.Syntax_.Location, value_ : ff.core.String_.String) extends Term
case class EInt(at_ : ff.compiler.Syntax_.Location, value_ : ff.core.String_.String) extends Term
case class EFloat(at_ : ff.compiler.Syntax_.Location, value_ : ff.core.String_.String) extends Term
case class EVariable(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type], instances_ : ff.core.List_.List[ff.compiler.Syntax_.Instance]) extends Term
case class ELambda(at_ : ff.compiler.Syntax_.Location, lambda_ : ff.compiler.Syntax_.Lambda) extends Term
case class EFunctions(at_ : ff.compiler.Syntax_.Location, functions_ : ff.core.List_.List[ff.compiler.Syntax_.DFunction], body_ : ff.compiler.Syntax_.Term) extends Term
case class ELet(at_ : ff.compiler.Syntax_.Location, mutable_ : ff.core.Bool_.Bool, name_ : ff.core.String_.String, valueType_ : ff.compiler.Syntax_.Type, value_ : ff.compiler.Syntax_.Term, body_ : ff.compiler.Syntax_.Term) extends Term
case class ESequential(at_ : ff.compiler.Syntax_.Location, before_ : ff.compiler.Syntax_.Term, after_ : ff.compiler.Syntax_.Term) extends Term
case class EAssign(at_ : ff.compiler.Syntax_.Location, operator_ : ff.core.String_.String, variable_ : ff.core.String_.String, value_ : ff.compiler.Syntax_.Term) extends Term
case class EAssignField(at_ : ff.compiler.Syntax_.Location, operator_ : ff.core.String_.String, record_ : ff.compiler.Syntax_.Term, field_ : ff.core.String_.String, value_ : ff.compiler.Syntax_.Term) extends Term
case class EPipe(at_ : ff.compiler.Syntax_.Location, value_ : ff.compiler.Syntax_.Term, function_ : ff.compiler.Syntax_.Term) extends Term
case class ECall(at_ : ff.compiler.Syntax_.Location, tailCall_ : ff.core.Bool_.Bool, function_ : ff.compiler.Syntax_.Term, typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type], arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Argument]) extends Term
case class EList(at_ : ff.compiler.Syntax_.Location, elementType_ : ff.compiler.Syntax_.Type, items_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]]) extends Term
case class ECopy(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, record_ : ff.compiler.Syntax_.Term, arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Field]) extends Term
case class EVariant(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type], arguments_ : ff.core.Option_.Option[ff.core.List_.List[ff.compiler.Syntax_.Argument]]) extends Term
case class EVariantIs(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, typeArguments_ : ff.core.List_.List[ff.compiler.Syntax_.Type]) extends Term
case class ERecord(at_ : ff.compiler.Syntax_.Location, fields_ : ff.core.List_.List[ff.compiler.Syntax_.Field]) extends Term
case class EField(at_ : ff.compiler.Syntax_.Location, record_ : ff.compiler.Syntax_.Term, field_ : ff.core.String_.String) extends Term
case class EWildcard(at_ : ff.compiler.Syntax_.Location, index_ : ff.core.Int_.Int) extends Term

case class MatchCase(at_ : ff.compiler.Syntax_.Location, patterns_ : ff.core.List_.List[ff.compiler.Syntax_.MatchPattern], condition_ : ff.core.Option_.Option[ff.compiler.Syntax_.Term], body_ : ff.compiler.Syntax_.Term)

sealed abstract class MatchPattern extends Product with Serializable {
    val at_ : ff.compiler.Syntax_.Location
}
case class PVariable(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.Option_.Option[ff.core.String_.String]) extends MatchPattern
case class PVariant(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, patterns_ : ff.core.List_.List[ff.compiler.Syntax_.MatchPattern]) extends MatchPattern
case class PVariantAs(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, variable_ : ff.core.Option_.Option[ff.core.String_.String]) extends MatchPattern
case class PAlias(at_ : ff.compiler.Syntax_.Location, pattern_ : ff.compiler.Syntax_.MatchPattern, variable_ : ff.core.String_.String) extends MatchPattern
case class PList(at_ : ff.compiler.Syntax_.Location, itemType_ : ff.compiler.Syntax_.Type, items_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]]) extends MatchPattern

case class Signature(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.core.String_.String], constraints_ : ff.core.List_.List[ff.compiler.Syntax_.Constraint], parameters_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter], returnType_ : ff.compiler.Syntax_.Type)

case class Lambda(at_ : ff.compiler.Syntax_.Location, cases_ : ff.core.List_.List[ff.compiler.Syntax_.MatchCase])

case class Variant(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, fields_ : ff.core.List_.List[ff.compiler.Syntax_.Parameter], targets_ : ff.compiler.Syntax_.Targets)

case class Parameter(at_ : ff.compiler.Syntax_.Location, mutable_ : ff.core.Bool_.Bool, name_ : ff.core.String_.String, valueType_ : ff.compiler.Syntax_.Type, default_ : ff.core.Option_.Option[ff.compiler.Syntax_.Term])

case class Argument(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.Option_.Option[ff.core.String_.String], value_ : ff.compiler.Syntax_.Term)

case class Field(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, value_ : ff.compiler.Syntax_.Term)

case class Constraint(representation_ : ff.compiler.Syntax_.Type)

case class Targets(scala_ : ff.core.Option_.Option[ff.core.String_.String], javaScript_ : ff.core.Option_.Option[ff.core.String_.String])

sealed abstract class Type extends Product with Serializable {
    val at_ : ff.compiler.Syntax_.Location
}
case class TConstructor(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, generics_ : ff.core.List_.List[ff.compiler.Syntax_.Type]) extends Type
case class TVariable(at_ : ff.compiler.Syntax_.Location, index_ : ff.core.Int_.Int) extends Type

sealed abstract class Instance extends Product with Serializable {
    val at_ : ff.compiler.Syntax_.Location
}
case class IConstructor(at_ : ff.compiler.Syntax_.Location, name_ : ff.core.String_.String, arguments_ : ff.core.List_.List[ff.compiler.Syntax_.Instance]) extends Instance
case class IField(at_ : ff.compiler.Syntax_.Location, instance_ : ff.compiler.Syntax_.Instance, field_ : ff.core.String_.String) extends Instance
case class IVariable(at_ : ff.compiler.Syntax_.Location, index_ : ff.core.Int_.Int) extends Instance

sealed abstract class Safety extends Product with Serializable
case class Safe() extends Safety
case class Unsafe() extends Safety
case class Trust() extends Safety

case class Version(at_ : ff.compiler.Syntax_.Location, major_ : ff.core.Int_.Int, minor_ : ff.core.Int_.Int, patch_ : ff.core.Int_.Int)


def Location_show(self_ : ff.compiler.Syntax_.Location) : ff.core.String_.String = (self_) match {
case (self_) =>
(((((("in " + self_.file_) + " ") + "at line ") + self_.line_) + ", column ") + self_.column_)
}

def Type_show(self_ : ff.compiler.Syntax_.Type) : ff.core.String_.String = (self_) match {
case (self_) =>
pipe_dot(self_)({
case (ff.compiler.Syntax_.TConstructor(at_, name_, generics_)) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.List_.List_getEmpty[ff.compiler.Syntax_.Type](self_ = generics_), body_ = {() =>
name_
}), body_ = {() =>
(((name_ + "[") + ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.core.String_.String](self_ = generics_, body_ = {(_w1) =>
ff.compiler.Syntax_.Type_show(self_ = _w1)
}), separator_ = ", ")) + "]")
})
case (ff.compiler.Syntax_.TVariable(at_, index_)) =>
("$" + index_)
})
}


}
