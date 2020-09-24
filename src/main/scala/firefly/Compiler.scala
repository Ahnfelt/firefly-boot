package firefly
import firefly.Firefly_Core._

import firefly.Syntax_._

import firefly.Tokenizer_._

import firefly.Parser_._

import firefly.Resolver_._

import firefly.Emitter_._
object Compiler_ {

case class Compiler(files : Firefly_Core.FileSystem, inputPath : Firefly_Core.String, outputPath : Firefly_Core.String, var parsedModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var resolvedModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var emittedModules : Firefly_Core.Set[Firefly_Core.String])

def make(files : Firefly_Core.FileSystem, inputPath : Firefly_Core.String, outputPath : Firefly_Core.String) : Compiler = {
Compiler(files = files, inputPath = inputPath, outputPath = outputPath, parsedModules = Firefly_Core.Map(), resolvedModules = Firefly_Core.Map(), emittedModules = Firefly_Core.Set())
}
implicit class Compiler_extend0(self : Compiler) {

def parse(moduleName : Firefly_Core.String) : Syntax_.Module = {
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

def resolve(moduleName : Firefly_Core.String) : Syntax_.Module = {
self.resolvedModules.get(moduleName).else_({() =>
val module = self.parse(moduleName);
val otherModules = self.imports(module);
val result = Resolver_.make().resolveModule(module, otherModules);
self.resolvedModules = self.resolvedModules.updated(moduleName, result);
result
})
}

def emit(moduleName : Firefly_Core.String) : Firefly_Core.Unit = {
Firefly_Core.if_(self.emittedModules(moduleName), {() =>
Firefly_Core.Unit()
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
