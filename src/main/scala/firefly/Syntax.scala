package firefly
import firefly.Firefly_Core._
object Syntax_ {

case class Location(file : Firefly_Core.String, line : Firefly_Core.Int, column : Firefly_Core.Int)

case class CompileError(at : Location, message : Firefly_Core.String)

case class Module(file : Firefly_Core.String, dependencies : Firefly_Core.List[DDependency], imports : Firefly_Core.List[DImport], types : Firefly_Core.List[DType], traits : Firefly_Core.List[DTrait], instances : Firefly_Core.List[DInstance], extends_ : Firefly_Core.List[DExtend], lets : Firefly_Core.List[DLet], functions : Firefly_Core.List[DFunction])

case class DDependency(at : Location, package_ : Firefly_Core.Pair[Firefly_Core.String, Firefly_Core.String], safety : Safety, goodVersions : Firefly_Core.List[Version], badVersions : Firefly_Core.List[Version])

case class DImport(at : Location, alias : Firefly_Core.String, package_ : Firefly_Core.Option[Firefly_Core.Pair[Firefly_Core.String, Firefly_Core.String]], directory : Firefly_Core.List[Firefly_Core.String], file : Firefly_Core.String)

case class DFunction(at : Location, signature : Signature, body : Lambda)

case class DLet(at : Location, name : Firefly_Core.String, variableType : Type, value : Term)

case class DExtend(at : Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Constraint], type_ : Type, methods : Firefly_Core.List[DFunction])

case class DType(at : Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Constraint], commonFields : Firefly_Core.List[Parameter], variants : Firefly_Core.List[Variant])

case class DTrait(at : Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Constraint], generatorParameters : Firefly_Core.List[Parameter], methods : Firefly_Core.List[Signature], methodDefaults : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Lambda]], methodGenerators : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Lambda]])

case class DInstance(at : Location, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Constraint], traitType : Type, generatorArguments : Firefly_Core.List[Argument], methods : Firefly_Core.List[DFunction])

sealed abstract class Term extends Product with Serializable {
    val at : Location
}
case class EString(at : Location, value : Firefly_Core.String) extends Term
case class EChar(at : Location, value : Firefly_Core.String) extends Term
case class EInt(at : Location, value : Firefly_Core.String) extends Term
case class EFloat(at : Location, value : Firefly_Core.String) extends Term
case class EVariable(at : Location, name : Firefly_Core.String, generics : Firefly_Core.List[Type], instances : Firefly_Core.List[Instance]) extends Term
case class ELambda(at : Location, lambda : Lambda) extends Term
case class EFunctions(at : Location, functions : Firefly_Core.List[LocalFunction], body : Term) extends Term
case class ELet(at : Location, mutable : Firefly_Core.Bool, name : Firefly_Core.String, valueType : Type, value : Term, body : Term) extends Term
case class ESequential(at : Location, before : Term, after : Term) extends Term
case class EAssign(at : Location, operator : Firefly_Core.String, variable : Firefly_Core.String, value : Term) extends Term
case class EAssignField(at : Location, operator : Firefly_Core.String, record : Term, field : Firefly_Core.String, value : Term) extends Term
case class EPipe(at : Location, value : Term, function : Term) extends Term
case class ECall(at : Location, function : Term, typeArguments : Firefly_Core.List[Type], arguments : Firefly_Core.List[Argument]) extends Term
case class EList(at : Location, items : Firefly_Core.List[Term]) extends Term
case class ECopy(at : Location, name : Firefly_Core.String, record : Term, arguments : Firefly_Core.List[Field]) extends Term
case class EVariant(at : Location, name : Firefly_Core.String, typeArguments : Firefly_Core.List[Type], arguments : Firefly_Core.Option[Firefly_Core.List[Argument]]) extends Term
case class EVariantIs(at : Location, name : Firefly_Core.String, typeArguments : Firefly_Core.List[Type]) extends Term
case class ERecord(at : Location, fields : Firefly_Core.List[Field]) extends Term
case class EField(at : Location, record : Term, field : Firefly_Core.String) extends Term
case class EWildcard(at : Location, index : Firefly_Core.Int) extends Term

case class MatchCase(at : Location, patterns : Firefly_Core.List[MatchPattern], condition : Firefly_Core.Option[Term], body : Term)

sealed abstract class MatchPattern extends Product with Serializable {
    val at : Location
}
case class PVariable(at : Location, name : Firefly_Core.Option[Firefly_Core.String]) extends MatchPattern
case class PVariant(at : Location, name : Firefly_Core.String, patterns : Firefly_Core.List[MatchPattern]) extends MatchPattern
case class PVariantAs(at : Location, name : Firefly_Core.String, variable : Firefly_Core.Option[Firefly_Core.String]) extends MatchPattern
case class PAlias(at : Location, pattern : MatchPattern, variable : Firefly_Core.String) extends MatchPattern

case class Signature(at : Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Constraint], parameters : Firefly_Core.List[Parameter], returnType : Type)

case class LocalFunction(signature : Signature, body : Lambda)

case class Lambda(at : Location, cases : Firefly_Core.List[MatchCase])

case class Variant(at : Location, name : Firefly_Core.String, fields : Firefly_Core.List[Parameter])

case class Parameter(at : Location, mutable : Firefly_Core.Bool, name : Firefly_Core.String, valueType : Type, default : Firefly_Core.Option[Term])

case class Argument(at : Location, name : Firefly_Core.Option[Firefly_Core.String], value : Term)

case class Field(at : Location, name : Firefly_Core.String, value : Term)

case class Constraint(representation : Type)

sealed abstract class Type extends Product with Serializable {
    val at : Location
}
case class TConstructor(at : Location, name : Firefly_Core.String, generics : Firefly_Core.List[Type]) extends Type
case class TVariable(at : Location, index : Firefly_Core.Int) extends Type

sealed abstract class Instance extends Product with Serializable {
    val at : Location
}
case class IConstructor(at : Location, name : Firefly_Core.String, arguments : Firefly_Core.List[Instance]) extends Instance
case class IField(at : Location, instance : Instance, field : Firefly_Core.String) extends Instance
case class IVariable(at : Location, index : Firefly_Core.Int) extends Instance

sealed abstract class Safety extends Product with Serializable
case class Safe() extends Safety
case class Unsafe() extends Safety
case class Trust() extends Safety

case class Version(at : Location, major : Firefly_Core.Int, minor : Firefly_Core.Int, patch : Firefly_Core.Int)


implicit class Location_extend0(self : Location) {

def show() : Firefly_Core.String = {
(((((("in " + self.file) + " ") + "at line ") + self.line) + ", column ") + self.column)
}

}


}
