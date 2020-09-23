package firefly
import firefly.Firefly_Core._

import firefly.Syntax._

import firefly.Tokenizer._

import firefly.Parser._

import firefly.Resolver._

import firefly.Emitter._
object Compiler {

case class Compiler(files : FileSystem, inputPath : String, outputPath : String, var parsedModules : Firefly_Core.Map[String, Module], var resolvedModules : Firefly_Core.Map[String, Module], var emittedModules : Firefly_Core.Set[String])

def make(files : FileSystem, inputPath : String, outputPath : String) : Compiler = {
Compiler(files = files, inputPath = inputPath, outputPath = outputPath, parsedModules = Firefly_Core.Map(), resolvedModules = Firefly_Core.Map(), emittedModules = Firefly_Core.Set())
}
implicit class Compiler_extend0(self : Compiler) {

def parse(moduleName : String) : Module = {
self.parsedModules.get(moduleName).else_({() =>
val file = (((self.inputPath + "/") + moduleName) + ".ff");
val code = self.files.readText(file);
val tokens = Tokenizer.tokenize(file, code);
val result = Parser.make(file, tokens).parseModule();
self.parsedModules = self.parsedModules.updated(moduleName, result);
result
})
}

def imports(module : Module) : Firefly_Core.List[Module] = {
module.imports.map({(import_) =>
val otherModuleName = ((import_.directory.join("/") + "/") + import_.file);
self.parse(otherModuleName)
})
}

def resolve(moduleName : String) : Module = {
self.resolvedModules.get(moduleName).else_({() =>
val module = self.parse(moduleName);
val otherModules = self.imports(module);
val result = Resolver.make().resolveModule(module, otherModules);
self.resolvedModules = self.resolvedModules.updated(moduleName, result);
result
})
}

def emit(moduleName : String) : Unit = {
Firefly_Core.if_(self.emittedModules(moduleName), {() =>
Unit()
}).else_({() =>
self.emittedModules = self.emittedModules.add(moduleName);
val module = self.resolve(moduleName);
self.imports(module).each({(_w1) =>
self.emit(self.files.prefixName(_w1.file))
});
val emitted = Emitter.emitModule(module);
val file = (((self.outputPath + "/") + moduleName) + ".scala");
self.files.writeText(file, emitted)
})
}

}


object Compiler {

def make(files : FileSystem, inputPath : String, outputPath : String) : Compiler = {
Compiler(files = files, inputPath = inputPath, outputPath = outputPath, parsedModules = Firefly_Core.Map(), resolvedModules = Firefly_Core.Map(), emittedModules = Firefly_Core.Set())
}

}

}
