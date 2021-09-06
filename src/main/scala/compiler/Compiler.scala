package compiler
import compiler.Firefly_Core._

import compiler.Syntax_._

import compiler.Tokenizer_._

import compiler.Parser_._

import compiler.Resolver_._

import compiler.Inference_._

import compiler.Emitter_._
object Compiler_ {

case class Compiler(files : Firefly_Core.FileSystem, outputPath : Firefly_Core.String, packagePaths : Firefly_Core.Map[Firefly_Core.String, Firefly_Core.String], var parsedModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var resolvedModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var inferredModules : Firefly_Core.Map[Firefly_Core.String, Syntax_.Module], var emittedModules : Firefly_Core.Set[Firefly_Core.String])
val coreImports : Firefly_Core.List[Syntax_.DImport] = List("Array", "ArrayBuilder", "Bool", "Char", "Core", "FileSystem", "Int", "List", "Map", "Option", "Pair", "Set", "String", "System", "Try", "Unit", "Log").map({(moduleName) =>
Syntax_.DImport(at = Syntax_.Location("<prelude>", 1, 1), alias = moduleName, package_ = Firefly_Core.Pair("ff", "core"), directory = List(), file = moduleName)
})
def make(files : Firefly_Core.FileSystem, outputPath : Firefly_Core.String, packagePaths : Firefly_Core.Map[Firefly_Core.String, Firefly_Core.String]) : Compiler_.Compiler = {
Compiler_.Compiler(files = files, outputPath = outputPath, packagePaths = packagePaths, parsedModules = Firefly_Core.mapOf(), resolvedModules = Firefly_Core.mapOf(), inferredModules = Firefly_Core.mapOf(), emittedModules = Firefly_Core.setOf())
}
implicit class Compiler_extend0(self : Compiler_.Compiler) {

def parse(packageName : Firefly_Core.String, moduleName : Firefly_Core.String) : Syntax_.Module = {
self.parsedModules.get(((packageName + ":") + moduleName)).else_({() =>
val packagePair = Firefly_Core.do_({() =>
val array = packageName.split(':');
Firefly_Core.Pair(array.expect(0), array.expect(1))
});
val packagePath = self.packagePaths.expect(packageName);
val file = (moduleName + ".ff");
val code = self.files.readText(((packagePath + "/") + file));
val tokens = Tokenizer_.tokenize(file, code);
val module = Parser_.make(packagePair, file, tokens).parseModule();
val result = module.copy(imports = (Compiler_.coreImports ++ module.imports));
self.parsedModules = self.parsedModules.add(((packageName + ":") + moduleName), result);
result
})
}

def imports(packageName : Firefly_Core.String, module : Syntax_.Module) : Firefly_Core.List[Syntax_.Module] = {
module.imports.map({(import_) =>
val newPackageName = ((import_.package_.first + ":") + import_.package_.second);
val newModuleName = (import_.directory.map({(_w1) =>
(_w1 + "/")
}).join("") + import_.file);
self.parse(newPackageName, newModuleName)
})
}

def resolve(packageName : Firefly_Core.String, moduleName : Firefly_Core.String) : Syntax_.Module = {
self.resolvedModules.get(((packageName + ":") + moduleName)).else_({() =>
val module = self.parse(packageName, moduleName);
val otherModules = self.imports(packageName, module);
val result = Resolver_.make().resolveModule(module, otherModules);
self.resolvedModules = self.resolvedModules.add(((packageName + ":") + moduleName), result);
result
})
}

def infer(packageName : Firefly_Core.String, moduleName : Firefly_Core.String) : Syntax_.Module = {
self.inferredModules.get(((packageName + ":") + moduleName)).else_({() =>
val module = self.resolve(packageName, moduleName);
val otherModules = self.imports(packageName, module).map({(i) =>
val newPackageName = ((i.packagePair.first + ":") + i.packagePair.second);
self.resolve(newPackageName, self.files.prefixName(i.file))
});
val instances = (module.instances ++ otherModules.flatMap({(_w1) =>
_w1.instances
}));
val result = Inference_.make(instances).inferModule(module, otherModules);
self.inferredModules = self.inferredModules.add(((packageName + ":") + moduleName), result);
module
})
}

def emit(packageName : Firefly_Core.String, moduleName : Firefly_Core.String) : Firefly_Core.Unit = {
Firefly_Core.if_(self.emittedModules.contains(((packageName + ":") + moduleName)), {() =>
Firefly_Core.Unit()
}).else_({() =>
self.emittedModules = self.emittedModules.add(((packageName + ":") + moduleName));
val module = self.infer(packageName, moduleName);
self.imports(packageName, module).each({(i) =>
val newPackageName = ((i.packagePair.first + ":") + i.packagePair.second);
self.emit(newPackageName, self.files.prefixName(i.file))
});
val packagePair = Firefly_Core.do_({() =>
val array = packageName.split(':');
Firefly_Core.Pair(array.expect(0), array.expect(1))
});
val emitted = Emitter_.emitModule(packagePair, module);
val file = (((((self.outputPath + "/") + packageName.replace(":", "/")) + "/") + moduleName) + ".scala");
self.files.writeText(file, emitted)
})
}

}


}
