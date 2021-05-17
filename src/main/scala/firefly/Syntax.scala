package firefly
import firefly.Firefly_Core._
object Syntax_ {

case class Location(file : Firefly_Core.String, line : Firefly_Core.Int, column : Firefly_Core.Int)

case class CompileError(at : Syntax_.Location, message : Firefly_Core.String)

case class Module(file : Firefly_Core.String, dependencies : Firefly_Core.List[Syntax_.DDependency], imports : Firefly_Core.List[Syntax_.DImport], types : Firefly_Core.List[Syntax_.DType], traits : Firefly_Core.List[Syntax_.DTrait], instances : Firefly_Core.List[Syntax_.DInstance], extends_ : Firefly_Core.List[Syntax_.DExtend], lets : Firefly_Core.List[Syntax_.DLet], functions : Firefly_Core.List[Syntax_.DFunction])

case class DDependency(at : Syntax_.Location, package_ : Firefly_Core.Pair[Firefly_Core.String, Firefly_Core.String], safety : Syntax_.Safety, goodVersions : Firefly_Core.List[Syntax_.Version], badVersions : Firefly_Core.List[Syntax_.Version])

case class DImport(at : Syntax_.Location, alias : Firefly_Core.String, package_ : Firefly_Core.Option[Firefly_Core.Pair[Firefly_Core.String, Firefly_Core.String]], directory : Firefly_Core.List[Firefly_Core.String], file : Firefly_Core.String)

case class DFunction(at : Syntax_.Location, signature : Syntax_.Signature, body : Syntax_.Lambda)

case class DLet(at : Syntax_.Location, name : Firefly_Core.String, variableType : Syntax_.Type, value : Syntax_.Term)

case class DExtend(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Syntax_.Constraint], type_ : Syntax_.Type, methods : Firefly_Core.List[Syntax_.DFunction])

case class DType(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Syntax_.Constraint], commonFields : Firefly_Core.List[Syntax_.Parameter], variants : Firefly_Core.List[Syntax_.Variant])

case class DTrait(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Syntax_.Constraint], generatorParameters : Firefly_Core.List[Syntax_.Parameter], methods : Firefly_Core.List[Syntax_.Signature], methodDefaults : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Lambda]], methodGenerators : Firefly_Core.List[Firefly_Core.Pair[Firefly_Core.String, Syntax_.Lambda]])

case class DInstance(at : Syntax_.Location, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Syntax_.Constraint], traitType : Syntax_.Type, generatorArguments : Firefly_Core.List[Syntax_.Argument], methods : Firefly_Core.List[Syntax_.DFunction])

sealed abstract class Term extends Product with Serializable {
    val at : Syntax_.Location
}
case class EString(at : Syntax_.Location, value : Firefly_Core.String) extends Term
case class EChar(at : Syntax_.Location, value : Firefly_Core.String) extends Term
case class EInt(at : Syntax_.Location, value : Firefly_Core.String) extends Term
case class EFloat(at : Syntax_.Location, value : Firefly_Core.String) extends Term
case class EVariable(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Syntax_.Type], instances : Firefly_Core.List[Syntax_.Instance]) extends Term
case class ELambda(at : Syntax_.Location, lambda : Syntax_.Lambda) extends Term
case class EFunctions(at : Syntax_.Location, functions : Firefly_Core.List[Syntax_.LocalFunction], body : Syntax_.Term) extends Term
case class ELet(at : Syntax_.Location, mutable : Firefly_Core.Bool, name : Firefly_Core.String, valueType : Syntax_.Type, value : Syntax_.Term, body : Syntax_.Term) extends Term
case class ESequential(at : Syntax_.Location, before : Syntax_.Term, after : Syntax_.Term) extends Term
case class EAssign(at : Syntax_.Location, operator : Firefly_Core.String, variable : Firefly_Core.String, value : Syntax_.Term) extends Term
case class EAssignField(at : Syntax_.Location, operator : Firefly_Core.String, record : Syntax_.Term, field : Firefly_Core.String, value : Syntax_.Term) extends Term
case class EPipe(at : Syntax_.Location, value : Syntax_.Term, function : Syntax_.Term) extends Term
case class ECall(at : Syntax_.Location, function : Syntax_.Term, typeArguments : Firefly_Core.List[Syntax_.Type], arguments : Firefly_Core.List[Syntax_.Argument]) extends Term
case class EList(at : Syntax_.Location, elementType : Syntax_.Type, items : Firefly_Core.List[Firefly_Core.Pair[Syntax_.Term, Firefly_Core.Bool]]) extends Term
case class ECopy(at : Syntax_.Location, name : Firefly_Core.String, record : Syntax_.Term, arguments : Firefly_Core.List[Syntax_.Field]) extends Term
case class EVariant(at : Syntax_.Location, name : Firefly_Core.String, typeArguments : Firefly_Core.List[Syntax_.Type], arguments : Firefly_Core.Option[Firefly_Core.List[Syntax_.Argument]]) extends Term
case class EVariantIs(at : Syntax_.Location, name : Firefly_Core.String, typeArguments : Firefly_Core.List[Syntax_.Type]) extends Term
case class ERecord(at : Syntax_.Location, fields : Firefly_Core.List[Syntax_.Field]) extends Term
case class EField(at : Syntax_.Location, record : Syntax_.Term, field : Firefly_Core.String) extends Term
case class EWildcard(at : Syntax_.Location, index : Firefly_Core.Int) extends Term

case class MatchCase(at : Syntax_.Location, patterns : Firefly_Core.List[Syntax_.MatchPattern], condition : Firefly_Core.Option[Syntax_.Term], body : Syntax_.Term)

sealed abstract class MatchPattern extends Product with Serializable {
    val at : Syntax_.Location
}
case class PVariable(at : Syntax_.Location, name : Firefly_Core.Option[Firefly_Core.String]) extends MatchPattern
case class PVariant(at : Syntax_.Location, name : Firefly_Core.String, patterns : Firefly_Core.List[Syntax_.MatchPattern]) extends MatchPattern
case class PVariantAs(at : Syntax_.Location, name : Firefly_Core.String, variable : Firefly_Core.Option[Firefly_Core.String]) extends MatchPattern
case class PAlias(at : Syntax_.Location, pattern : Syntax_.MatchPattern, variable : Firefly_Core.String) extends MatchPattern
case class PList(at : Syntax_.Location, itemType : Syntax_.Type, items : Firefly_Core.List[Firefly_Core.Pair[Syntax_.MatchPattern, Firefly_Core.Bool]]) extends MatchPattern

case class Signature(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Firefly_Core.String], constraints : Firefly_Core.List[Syntax_.Constraint], parameters : Firefly_Core.List[Syntax_.Parameter], returnType : Syntax_.Type)

case class LocalFunction(signature : Syntax_.Signature, body : Syntax_.Lambda)

case class Lambda(at : Syntax_.Location, cases : Firefly_Core.List[Syntax_.MatchCase])

case class Variant(at : Syntax_.Location, name : Firefly_Core.String, fields : Firefly_Core.List[Syntax_.Parameter])

case class Parameter(at : Syntax_.Location, mutable : Firefly_Core.Bool, name : Firefly_Core.String, valueType : Syntax_.Type, default : Firefly_Core.Option[Syntax_.Term])

case class Argument(at : Syntax_.Location, name : Firefly_Core.Option[Firefly_Core.String], value : Syntax_.Term)

case class Field(at : Syntax_.Location, name : Firefly_Core.String, value : Syntax_.Term)

case class Constraint(representation : Syntax_.Type)

sealed abstract class Type extends Product with Serializable {
    val at : Syntax_.Location
}
case class TConstructor(at : Syntax_.Location, name : Firefly_Core.String, generics : Firefly_Core.List[Syntax_.Type]) extends Type
case class TVariable(at : Syntax_.Location, index : Firefly_Core.Int) extends Type

sealed abstract class Instance extends Product with Serializable {
    val at : Syntax_.Location
}
case class IConstructor(at : Syntax_.Location, name : Firefly_Core.String, arguments : Firefly_Core.List[Syntax_.Instance]) extends Instance
case class IField(at : Syntax_.Location, instance : Syntax_.Instance, field : Firefly_Core.String) extends Instance
case class IVariable(at : Syntax_.Location, index : Firefly_Core.Int) extends Instance

sealed abstract class Safety extends Product with Serializable
case class Safe() extends Safety
case class Unsafe() extends Safety
case class Trust() extends Safety

case class Version(at : Syntax_.Location, major : Firefly_Core.Int, minor : Firefly_Core.Int, patch : Firefly_Core.Int)


implicit class Location_extend0(self : Syntax_.Location) {

def show() : Firefly_Core.String = {
(((((("in " + self.file) + " ") + "at line ") + self.line) + ", column ") + self.column)
}

}

implicit class Type_extend1(self : Syntax_.Type) {

def show() : Firefly_Core.String = {
pipe_dot(self)({
case (Syntax_.TConstructor(at, name, generics)) =>
Firefly_Core.if_(generics.isEmpty(), {() =>
name
}).else_({() =>
(((name + "[") + generics.map({(_w1) =>
_w1.show()
}).join(", ")) + "]")
})
case (Syntax_.TVariable(at, index)) =>
("$" + index)
})
}

}


}
