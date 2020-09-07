package firefly
import firefly.Firefly_Core._

import firefly.Emitter._

import firefly.Main._

import firefly.Parser._

import firefly.Syntax._

import firefly.Token._

import firefly.Tokenizer._

import firefly.Wildcards._
object Wildcards {

case class Wildcards(var seenWildcards : Int)


implicit class Wildcards_fixWildcards(self : Wildcards) {

def fixWildcards(term : Term) : Term = Wildcards.fixWildcards(self, term)

}


object Wildcards {

def of() = {
Wildcards(0)
}

def fixWildcards(self : Wildcards, term : Term) : Term = (self, term) match {
case (_, e : ELet) =>
e.copy(value = self.fixWildcards(e.value), body = self.fixWildcards(e.body))
case (_, e : ESequential) =>
e.copy(before = self.fixWildcards(e.before), after = self.fixWildcards(e.after))
case (_, e : EAssign) =>
e.copy(value = self.fixWildcards(e.value))
case (_, e : EAssignField) =>
e.copy(value = self.fixWildcards(e.value))
case (_, e : EPipe) =>
e.copy(value = self.fixWildcards(e.value), function = self.fixWildcards(e.function))
case (_, e : ECall) =>
e.copy(function = self.fixWildcards(e.function), arguments = e.arguments.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (_, e : EList) =>
e.copy(items = e.items.map(self.fixWildcards))
case (_, e : ECopy) =>
e.copy(record = self.fixWildcards(e.record), arguments = e.arguments.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (_, e : EVariant) =>
e.copy(arguments = e.arguments.map({(_w1) =>
_w1.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
})
}))
case (_, e : ERecord) =>
e.copy(fields = e.fields.map({(a) =>
a.copy(value = self.fixWildcards(a.value))
}))
case (_, e : EField) =>
e.copy(record = self.fixWildcards(e.record))
case (_, e : EWildcard) =>
self.seenWildcards += 1;
e.copy(index = self.seenWildcards)
case (_, _) =>
term
}

}
}
