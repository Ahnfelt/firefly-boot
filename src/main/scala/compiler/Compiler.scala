package compiler
import compiler.Firefly_Core._

import compiler.Syntax_._

import compiler.Tokenizer_._

import compiler.Parser_._

import compiler.Resolver_._

import compiler.Inference_._

import compiler.Emitter_._
object Compiler_ {

case class Compiler(files : Firefly_Core.FileSystem, inputPath : Firefly_Core.String, outputPath : Firefly_Core.String, var parsedModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var resolvedModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var inferredModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var emittedModules : Firefly_Core.Set[Firefly_Core.String])
val coreImports : Firefly_Core.List[Syntax_.DImport] = List()
def make(files : Firefly_Core.FileSystem, inputPath : Firefly_Core.String, outputPath : Firefly_Core.String) : Compiler_.Compiler = {
Compiler_.Compiler(files = files, inputPath = inputPath, outputPath = outputPath, parsedModules = Firefly_Core.mapOf(), resolvedModules = Firefly_Core.mapOf(), inferredModules = Firefly_Core.mapOf(), emittedModules = Firefly_Core.setOf())
}
implicit class Compiler_extend0(self : Compiler_.Compiler) {

def parse(moduleName : Firefly_Core.String) : Syntax_.Module = {
self.parsedModules.get(moduleName).else_({() =>
val file = (moduleName + ".ff");
val code = self.files.readText(((self.inputPath + "/") + file));
val tokens = Tokenizer_.tokenize(file, code);
val module = Parser_.make(file, tokens).parseModule();
val result = module.copy(imports = (Compiler_.coreImports ++ module.imports));
self.parsedModules = self.parsedModules.add(moduleName, result);
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
val coreModule = self.parse("../core/Core");
val module = self.parse(moduleName);
val otherModules = self.imports(module);
val result = Resolver_.make(coreModule).resolveModule(module, otherModules);
self.resolvedModules = self.resolvedModules.add(moduleName, result);
result
})
}

def infer(moduleName : Firefly_Core.String) : Syntax_.Module = {
self.inferredModules.get(moduleName).else_({() =>
val coreModule = self.resolve("../core/Core");
val module = self.resolve(moduleName);
val otherModules = self.imports(module).map({(_w1) =>
self.resolve(self.files.prefixName(_w1.file))
});
val instances = ((coreModule.instances ++ module.instances) ++ otherModules.flatMap({(_w1) =>
_w1.instances
}));
val result = Inference_.make(instances).inferModule(coreModule, module, otherModules);
self.inferredModules = self.inferredModules.add(moduleName, result);
module
})
}

def emit(moduleName : Firefly_Core.String) : Firefly_Core.Unit = {
Firefly_Core.if_(self.emittedModules.contains(moduleName), {() =>
Firefly_Core.Unit()
}).else_({() =>
self.emittedModules = self.emittedModules.add(moduleName);
val module = self.infer(moduleName);
self.imports(module).each({(_w1) =>
self.emit(self.files.prefixName(_w1.file))
});
val emitted = Emitter_.emitModule(self.inputPath, module);
val file = (((self.outputPath + "/") + moduleName) + ".scala");
self.files.writeText(file, emitted)
})
}

}


}
