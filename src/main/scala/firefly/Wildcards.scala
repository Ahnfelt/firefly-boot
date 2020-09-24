package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._
object Wildcards_ {

case class Wildcards(var seenWildcards : Firefly_Core.Int)

def make() = {
Wildcards(0)
}
implicit class Wildcards_extend0(self : Wildcards) {

def fixWildcards(term : Syntax_.Term) : Syntax_.Term = (term) match {
case (e : Syntax_.ELet) =>
e.copy(value = self.fixWildcards(e.value), body = self.fixWildcards(e.body))
case (e : Syntax_.ESequential) =>
e.copy(before = self.fixWildcards(e.before), after = self.fixWildcards(e.after))
case (e : Syntax_.EAssign) =>
e.copy(value = self.fixWildcards(e.value))
case (e : Syntax_.EAssignField) =>
e.copy(record = self.fixWildcards(e.record), value = self.fixWildcards(e.value))
case (e : Syntax_.EPipe) =>
e.copy(value = self.fixWildcards(e.value), function = self.fixWildcards(e.function))
case (e : Syntax_.ECall) =>
e.copy(function = self.fixWildcards(e.function), arguments = e.arguments.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (e : Syntax_.EList) =>
e.copy(items = e.items.map(self.fixWildcards))
case (e : Syntax_.ECopy) =>
e.copy(record = self.fixWildcards(e.record), arguments = e.arguments.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (e : Syntax_.EVariant) =>
e.copy(arguments = e.arguments.map({(_w1) =>
_w1.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
})
}))
case (e : Syntax_.ERecord) =>
e.copy(fields = e.fields.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (e : Syntax_.EField) =>
e.copy(record = self.fixWildcards(e.record))
case (e : Syntax_.EWildcard) =>
self.seenWildcards += 1;
e.copy(index = self.seenWildcards)
case (_) =>
term
}

}


}
