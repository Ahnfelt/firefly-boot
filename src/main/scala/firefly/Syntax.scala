package firefly

import firefly.Firefly_Core._

import firefly.Emitter._

import firefly.Main._

import firefly.Parser._

import firefly.Syntax._

import firefly.Token._

import firefly.Tokenizer._

import firefly.Wildcards._
object Syntax {

case class Location(file : String, line : Int, column : Int)

case class Module(file : String, types : List[DType], traits : List[DTrait], instances : List[DInstance], lets : List[DLet], functions : List[DFunction])

case class DFunction(at : Location, namespace : Option[String], signature : Signature, body : ELambda)

case class DLet(at : Location, namespace : Option[String], name : String, variableType : Type, value : Term)

case class DType(at : Location, name : String, generics : List[String], constraints : List[Constraint], commonFields : List[Parameter], variants : List[Variant])

case class DTrait(at : Location, name : String, generics : List[String], constraints : List[Constraint], generatorParameters : List[Parameter], methods : List[Signature], methodDefaults : List[Pair[String, Term]], methodGenerators : List[Pair[String, Term]])

case class DInstance(at : Location, generics : List[String], constraints : List[Constraint], traitType : Type, generatorArguments : List[Argument], methods : List[DFunction])

sealed abstract class Term extends Product with Serializable {
    val at : Location
}
case class EString(at : Location, value : String) extends Term
case class EChar(at : Location, value : String) extends Term
case class EInt(at : Location, value : String) extends Term
case class EFloat(at : Location, value : String) extends Term
case class EVariable(at : Location, name : String) extends Term
case class ELambda(at : Location, cases : List[MatchCase]) extends Term
case class EFunctions(at : Location, functions : List[LocalFunction], body : Term) extends Term
case class ELet(at : Location, mutable : Boolean, name : String, valueType : Type, value : Term, body : Term) extends Term
case class ESequential(at : Location, before : Term, after : Term) extends Term
case class EAssign(at : Location, operator : String, variable : String, value : Term) extends Term
case class EAssignField(at : Location, operator : String, field : EField, value : Term) extends Term
case class EPipe(at : Location, value : Term, function : Term) extends Term
case class ECall(at : Location, function : Term, typeArguments : List[Type], arguments : List[Argument]) extends Term
case class EList(at : Location, items : List[Term]) extends Term
case class ECopy(at : Location, name : String, record : Term, arguments : List[Field]) extends Term
case class EVariant(at : Location, name : String, typeArguments : List[Type], arguments : Option[List[Argument]]) extends Term
case class ERecord(at : Location, fields : List[Field]) extends Term
case class EField(at : Location, record : Term, field : String) extends Term
case class EWildcard(at : Location, index : Int) extends Term

case class MatchCase(at : Location, patterns : List[MatchPattern], condition : Option[Term], body : Term)

sealed abstract class MatchPattern extends Product with Serializable {
    val at : Location
}
case class PVariable(at : Location, name : Option[String]) extends MatchPattern
case class PVariant(at : Location, name : String, patterns : List[MatchPattern]) extends MatchPattern
case class PVariantAs(at : Location, name : String, variable : Option[String]) extends MatchPattern
case class PAlias(at : Location, pattern : MatchPattern, variable : String) extends MatchPattern

case class Signature(at : Location, name : String, generics : List[String], constraints : List[Constraint], parameters : List[Parameter], returnType : Type)

case class LocalFunction(signature : Signature, body : ELambda)

case class Variant(at : Location, name : String, fields : List[Parameter])

case class Parameter(at : Location, mutable : Boolean, name : String, valueType : Type, default : Option[Term])

case class Argument(at : Location, name : Option[String], value : Term)

case class Field(at : Location, name : String, value : Term)

case class Constraint(representation : Type)

case class Type(at : Location, name : String, generics : List[Type])


implicit class Location_show(location : Location) {

def show() = Location.show(location)

}


object Location {

def show(location : Location) = {
(((((("in " + location.file) + " ") + "at line ") + location.line) + ", column ") + location.column)
}

}
}
