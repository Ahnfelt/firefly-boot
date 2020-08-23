package com.github.ahnfelt.firefly.language

import com.github.ahnfelt.firefly.language.Syntax._

class Emitter() {

    def emitModule(module : Module) : String = {
        val parts = List(
            module.types.map(emitTypeDefinition),
            module.lets.map(emitLetDefinition),
            module.functions.map(emitFunctionDefinition),
            module.traits.map(emitTraitDefinition),
            module.instances.map(emitInstanceDefinition),
        )
        parts.map(_.mkString("\n\n")).mkString("\n") + "\n"
    }

    def emitTypeDefinition(definition : DType) : String = {
        val generics = emitTypeParameters(definition.generics)
        if(definition.variants.size == 1 && definition.variants.head.name == definition.name) {
            val fields = "(" + definition.commonFields.map(emitParameter).mkString(", ") + ")"
            "case class " + definition.name + generics + fields
        } else {
            val commonFields = if(definition.commonFields.isEmpty) "" else
                " {\n" + definition.commonFields.map(emitParameter).map("    val " + _ + "\n").mkString + "}"
            val variants = definition.variants.map(emitVariantDefinition(definition, _))
            val head = "sealed abstract class " + definition.name + generics + " extends Product with Serializable"
            head + commonFields + variants.map("\n" + _).mkString
        }
    }

    def emitLetDefinition(definition : DLet) : String = {
        "// TODO: Lets"
    }

    def emitFunctionDefinition(definition : DFunction) : String = {
        "// TODO: Functions"
    }

    def emitTraitDefinition(definition : DTrait) : String = {
        "// TODO: Traits"
    }

    def emitInstanceDefinition(definition : DInstance) : String = {
        "// TODO: Instances"
    }

    def emitVariantDefinition(typeDefinition : DType, definition : Variant) : String = {
        val generics = emitTypeParameters(typeDefinition.generics)
        val allFields = typeDefinition.commonFields ++ definition.fields
        val fields = "(" + allFields.map(emitParameter).mkString(", ") + ")"
        "case class " + definition.name + generics + fields + " extends " + typeDefinition.name + generics
    }

    def emitParameter(parameter : Parameter) : String = {
        val defaultValue = parameter.default.map(f => " = " + emitTerm(f)).getOrElse("")
        parameter.name + emitTypeAnnotation(parameter.valueType) + defaultValue
    }

    def emitTypeParameters(generics : List[String]) = {
        if(generics.isEmpty) "" else "[" + generics.mkString(", ") + "]"
    }

    def emitTypeAnnotation(t : Type) : String = {
        if(t.name == "?") "" else " : " + emitType(t)
    }

    def emitType(t : Type) : String = {
        val generics = if(t.generics.isEmpty) "" else "[" + t.generics.map(emitType).mkString(", ") + "]"
        t.name + generics
    }

    def emitTerm(e : Term) : String = {
        "// TODO: Term"
    }

}
