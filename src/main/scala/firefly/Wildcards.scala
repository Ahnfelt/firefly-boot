package firefly
import firefly.Firefly_Core._

import firefly.Syntax._
object Wildcards {

case class Wildcards(var seenWildcards : Int)

def make() = {
Wildcards(0)
}
implicit class Wildcards_extend0(self : Wildcards) {

def fixWildcards(term : Term) : Term = (term) match {
case (e : ELet) =>
e.copy(value = self.fixWildcards(e.value), body = self.fixWildcards(e.body))
case (e : ESequential) =>
e.copy(before = self.fixWildcards(e.before), after = self.fixWildcards(e.after))
case (e : EAssign) =>
e.copy(value = self.fixWildcards(e.value))
case (e : EAssignField) =>
e.copy(value = self.fixWildcards(e.value))
case (e : EPipe) =>
e.copy(value = self.fixWildcards(e.value), function = self.fixWildcards(e.function))
case (e : ECall) =>
e.copy(function = self.fixWildcards(e.function), arguments = e.arguments.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (e : EList) =>
e.copy(items = e.items.map(self.fixWildcards))
case (e : ECopy) =>
e.copy(record = self.fixWildcards(e.record), arguments = e.arguments.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (e : EVariant) =>
e.copy(arguments = e.arguments.map({(_w1) =>
_w1.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
})
}))
case (e : ERecord) =>
e.copy(fields = e.fields.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (e : EField) =>
e.copy(record = self.fixWildcards(e.record))
case (e : EWildcard) =>
self.seenWildcards += 1;
e.copy(index = self.seenWildcards)
case (_) =>
term
}

}


object Wildcards {

def make() = {
Wildcards(0)
}

}

}
