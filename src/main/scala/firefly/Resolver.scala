package firefly
import firefly.Firefly_Core._

import firefly.Syntax._
object Resolver {

case class Resolver(variables : Map[String, String], variants : Map[String, String], types : Map[String, String], traits : Map[String, String])

def make() = {
def core(name : String) : Pair[String, String] = {
Pair(name, ("ff:core/Core." + name))
}
Resolver(variables = List("if", "while", "do", "panic", "try", "log").map(core).toMap, variants = List("True", "False", "Some", "None", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, types = List("Bool", "Option", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, traits = Map())
}
implicit class Resolver_extend0(self : Resolver) {



def resolveModule(module : Module, otherModules : List[Module]) : Module = {
val moduleNamespace = module.file.replace('\\', '/').reverse.takeWhile({(_w1) =>
(_w1 != '/')
}).reverse.takeWhile({(_w1) =>
(_w1 != '.')
});
val selfImports = self.resolveImports(module.imports, otherModules);
log.debug(selfImports);
module
}

def resolveImports(imports : List[DImport], modules : List[Module]) : Resolver = {
var resolver = self;
imports.each({(import_) =>
modules.find({(_w1) =>
(_w1.file.dropRight(3) == import_.file)
}).each({(module) =>
def entry(name : String, unqualified : Bool) : List[Pair[String, String]] = {
val full = ((module.file.dropRight(3) + ".") + name);
if_(unqualified, {() =>
List(Pair(((import_.alias + ".") + name), full), Pair(name, full))
}).else_({() =>
List(Pair(((import_.alias + ".") + name), full))
})
}
val lets = module.lets.flatMap({(_w1) =>
entry(_w1.name, False())
}).toMap;
val functions = module.functions.flatMap({(_w1) =>
entry(_w1.signature.name, False())
}).toMap;
val traitMethods = module.traits.flatMap({(_w1) =>
_w1.methods
}).flatMap({(_w1) =>
entry(_w1.name, True())
}).toMap;
val traits = module.traits.flatMap({(_w1) =>
entry(_w1.name, True())
}).toMap;
val types = module.types.flatMap({(_w1) =>
entry(_w1.name, True())
}).toMap;
val variants = module.types.flatMap({(_w1) =>
_w1.variants
}).flatMap({(_w1) =>
entry(_w1.name, True())
}).toMap;
resolver = Resolver(variables = (((resolver.variables ++ lets) ++ functions) ++ traitMethods), variants = (resolver.variants ++ variants), types = (resolver.types ++ types), traits = (resolver.traits ++ traits))
})
});
resolver
}

}


object Resolver {

def make() = {
def core(name : String) : Pair[String, String] = {
Pair(name, ("ff:core/Core." + name))
}
Resolver(variables = List("if", "while", "do", "panic", "try", "log").map(core).toMap, variants = List("True", "False", "Some", "None", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, types = List("Bool", "Option", "Pair", "Array", "ArrayBuilder", "List", "Map", "Set").map(core).toMap, traits = Map())
}

}

}
