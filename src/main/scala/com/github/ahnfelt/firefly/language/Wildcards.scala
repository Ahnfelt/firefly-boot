package com.github.ahnfelt.firefly.language

import com.github.ahnfelt.firefly.language.Syntax._

class Wildcards() {

    var seenWildcards = 0

    def fixWildcards(term : Term) : Term = term match {
        case e : ELet => e.copy(value = fixWildcards(e.value), body = fixWildcards(e.body))
        case e : ESequential => e.copy(before = fixWildcards(e.before), after = fixWildcards(e.after))
        case e : EAssign => e.copy(value = fixWildcards(e.value))
        case e : EAssignField => e.copy(value = fixWildcards(e.value))
        case e : EPipe => e.copy(value = fixWildcards(e.value), function = fixWildcards(e.function))
        case e : ECall =>
            e.copy(
                function = fixWildcards(e.function),
                arguments = e.arguments.map { a => a.copy(value = fixWildcards(a.value)) }
            )
        case e : EList => e.copy(items = e.items.map(fixWildcards))
        case e : ECopy =>
            e.copy(
                record = fixWildcards(e.record),
                arguments = e.arguments.map { a => a.copy(value = fixWildcards(a.value)) }
            )
        case e : EVariant => e.copy(arguments = e.arguments.map(_.map { a => a.copy(value = fixWildcards(a.value)) }))
        case e : ERecord => e.copy(fields = e.fields.map { a => a.copy(value = fixWildcards(a.value)) })
        case e : EField => e.copy(record = fixWildcards(e.record))
        case e : EWildcard =>
            seenWildcards += 1
            e.copy(index = seenWildcards)
        case _ => term
    }

}
