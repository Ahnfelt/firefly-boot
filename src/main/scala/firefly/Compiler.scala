package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._

import firefly.Tokenizer_._

import firefly.Parser_._

import firefly.Resolver_._

import firefly.Emitter_._
object Compiler_ {

case class Compiler(files : FileSystem, inputPath : String, outputPath : String, var parsedModules : Firefly_Core.Map[String, Syntax_.Module], var resolvedModules : Firefly_Core.Map[String, Syntax_.Module], var emittedModules : Firefly_Core.Set[String])

def make(files : FileSystem, inputPath : String, outputPath : String) : Compiler = {
Compiler(files = files, inputPath = inputPath, outputPath = outputPath, parsedModules = Firefly_Core.Map(), resolvedModules = Firefly_Core.Map(), emittedModules = Firefly_Core.Set())
}
implicit class Compiler_extend0(self : Compiler) {

def parse(moduleName : String) : Syntax_.Module = {
self.parsedModules.get(moduleName).else_({() =>
val file = (moduleName + ".ff");
val code = self.files.readText(((self.inputPath + "/") + file));
val tokens = Tokenizer_.tokenize(file, code);
val result = Parser_.make(file, tokens).parseModule();
self.parsedModules = self.parsedModules.updated(moduleName, result);
result
})
}

def imports(module : Syntax_.Module) : Firefly_Core.List[Syntax_.Module] = {
module.imports.map({(import_) =>
val otherModuleName = (import_.directory.map({(_w1) =>
(_w1 + "/")
}).join("") + import_.file);
self.parse(otherModuleName)
})
}

def resolve(moduleName : String) : Syntax_.Module = {
self.resolvedModules.get(moduleName).else_({() =>
val module = self.parse(moduleName);
val otherModules = self.imports(module);
val result = Resolver_.make().resolveModule(module, otherModules);
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
val emitted = Emitter_.emitModule(module);
val file = (((self.outputPath + "/") + moduleName) + ".scala");
self.files.writeText(file, emitted)
})
}

}


}
