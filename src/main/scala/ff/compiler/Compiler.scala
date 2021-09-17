package ff.compiler
import ff.compiler.Emitter_._

import ff.compiler.Inference_._

import ff.compiler.Parser_._

import ff.compiler.Resolver_._

import ff.compiler.Syntax_._

import ff.compiler.Tokenizer_._

import ff.core.Array_._

import ff.core.ArrayBuilder_._

import ff.core.Bool_._

import ff.core.Char_._

import ff.core.Core_._

import ff.core.FileSystem_._

import ff.core.Int_._

import ff.core.List_._

import ff.core.Log_._

import ff.core.Map_._

import ff.core.Nothing_._

import ff.core.Option_._

import ff.core.Pair_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object Compiler_ {

case class Compiler(files_ : ff.core.FileSystem_.FileSystem, outputPath_ : ff.core.String_.String, packagePaths_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], var parsedModules_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Module], var resolvedModules_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Module], var inferredModules_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Module], var emittedModules_ : ff.core.Set_.Set[ff.core.String_.String])
val coreImports_ : ff.core.List_.List[ff.compiler.Syntax_.DImport] = ff.core.List_.List_map[ff.core.String_.String, ff.compiler.Syntax_.DImport](self_ = List("Array", "ArrayBuilder", "Bool", "Char", "Core", "FileSystem", "Int", "List", "Log", "Map", "Nothing", "Option", "Pair", "Set", "String", "System", "Try", "Unit"), body_ = {(moduleName_) =>
ff.compiler.Syntax_.DImport(at_ = ff.compiler.Syntax_.Location(file_ = "<prelude>", line_ = 1, column_ = 1), alias_ = moduleName_, package_ = ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = "ff", second_ = "core"), directory_ = List(), file_ = moduleName_)
})
def make_(files_ : ff.core.FileSystem_.FileSystem, outputPath_ : ff.core.String_.String, packagePaths_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]) : ff.compiler.Compiler_.Compiler = {
ff.compiler.Compiler_.Compiler(files_ = files_, outputPath_ = outputPath_, packagePaths_ = packagePaths_, parsedModules_ = ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Module](), resolvedModules_ = ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Module](), inferredModules_ = ff.core.Map_.empty_[ff.core.String_.String, ff.compiler.Syntax_.Module](), emittedModules_ = ff.core.Set_.empty_[ff.core.String_.String]())
}
def Compiler_parse(self_ : ff.compiler.Compiler_.Compiler, packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.compiler.Syntax_.Module = (self_, packageName_, moduleName_) match {
case (self_, _, _) =>
ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = self_.parsedModules_, key_ = ((packageName_ + ":") + moduleName_)), body_ = {() =>
val packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String] = ff.core.Core_.do_[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](body_ = {() =>
val array_ : ff.core.Array_.Array[ff.core.String_.String] = ff.core.String_.String_split(self_ = packageName_, char_ = ':');
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = ff.core.Array_.Array_expect[ff.core.String_.String](self_ = array_, index_ = 0), second_ = ff.core.Array_.Array_expect[ff.core.String_.String](self_ = array_, index_ = 1))
});
val packagePath_ : ff.core.String_.String = ff.core.Map_.Map_expect[ff.core.String_.String, ff.core.String_.String](self_ = self_.packagePaths_, key_ = packageName_);
val file_ : ff.core.String_.String = (moduleName_ + ".ff");
val code_ : ff.core.String_.String = ff.core.FileSystem_.FileSystem_readText(self_ = self_.files_, file_ = ((packagePath_ + "/") + file_));
val tokens_ : ff.core.Array_.Array[ff.compiler.Token_.Token] = ff.compiler.Tokenizer_.tokenize_(file_ = file_, code_ = code_);
val module_ : ff.compiler.Syntax_.Module = ff.compiler.Parser_.Parser_parseModule(self_ = ff.compiler.Parser_.make_(packagePair_ = packagePair_, file_ = file_, tokens_ = tokens_));
val result_ : ff.compiler.Syntax_.Module = pipe_dot(module_)({(_c) =>
ff.compiler.Syntax_.Module(packagePair_ = _c.packagePair_, file_ = _c.file_, dependencies_ = _c.dependencies_, imports_ = (ff.compiler.Compiler_.coreImports_ ++ module_.imports_), types_ = _c.types_, traits_ = _c.traits_, instances_ = _c.instances_, extends_ = _c.extends_, lets_ = _c.lets_, functions_ = _c.functions_)
});
self_.parsedModules_ = ff.core.Map_.Map_add[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = self_.parsedModules_, key_ = ((packageName_ + ":") + moduleName_), value_ = result_);
result_
})
}

def Compiler_imports(self_ : ff.compiler.Compiler_.Compiler, packageName_ : ff.core.String_.String, module_ : ff.compiler.Syntax_.Module) : ff.core.List_.List[ff.compiler.Syntax_.Module] = (self_, packageName_, module_) match {
case (self_, _, _) =>
ff.core.List_.List_map[ff.compiler.Syntax_.DImport, ff.compiler.Syntax_.Module](self_ = module_.imports_, body_ = {(import_) =>
val newPackageName_ : ff.core.String_.String = ((import_.package_.first_ + ":") + import_.package_.second_);
val newModuleName_ : ff.core.String_.String = (ff.core.List_.List_join(self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.String_.String](self_ = import_.directory_, body_ = {(_w1) =>
(_w1 + "/")
}), separator_ = "") + import_.file_);
ff.compiler.Compiler_.Compiler_parse(self_ = self_, packageName_ = newPackageName_, moduleName_ = newModuleName_)
})
}

def Compiler_resolve(self_ : ff.compiler.Compiler_.Compiler, packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.compiler.Syntax_.Module = (self_, packageName_, moduleName_) match {
case (self_, _, _) =>
ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = self_.resolvedModules_, key_ = ((packageName_ + ":") + moduleName_)), body_ = {() =>
val module_ : ff.compiler.Syntax_.Module = ff.compiler.Compiler_.Compiler_parse(self_ = self_, packageName_ = packageName_, moduleName_ = moduleName_);
val otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module] = ff.compiler.Compiler_.Compiler_imports(self_ = self_, packageName_ = packageName_, module_ = module_);
val result_ : ff.compiler.Syntax_.Module = ff.compiler.Resolver_.Resolver_resolveModule(self_ = ff.compiler.Resolver_.make_(), module_ = module_, otherModules_ = otherModules_);
self_.resolvedModules_ = ff.core.Map_.Map_add[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = self_.resolvedModules_, key_ = ((packageName_ + ":") + moduleName_), value_ = result_);
result_
})
}

def Compiler_infer(self_ : ff.compiler.Compiler_.Compiler, packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.compiler.Syntax_.Module = (self_, packageName_, moduleName_) match {
case (self_, _, _) =>
ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = self_.inferredModules_, key_ = ((packageName_ + ":") + moduleName_)), body_ = {() =>
val module_ : ff.compiler.Syntax_.Module = ff.compiler.Compiler_.Compiler_resolve(self_ = self_, packageName_ = packageName_, moduleName_ = moduleName_);
val otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module] = ff.core.List_.List_map[ff.compiler.Syntax_.Module, ff.compiler.Syntax_.Module](self_ = ff.compiler.Compiler_.Compiler_imports(self_ = self_, packageName_ = packageName_, module_ = module_), body_ = {(i_) =>
val newPackageName_ : ff.core.String_.String = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
ff.compiler.Compiler_.Compiler_resolve(self_ = self_, packageName_ = newPackageName_, moduleName_ = ff.core.FileSystem_.FileSystem_prefixName(self_ = self_.files_, path_ = i_.file_))
});
val instances_ : ff.core.List_.List[ff.compiler.Syntax_.DInstance] = (module_.instances_ ++ ff.core.List_.List_flatMap[ff.compiler.Syntax_.Module, ff.compiler.Syntax_.DInstance](self_ = otherModules_, body_ = {(_w1) =>
_w1.instances_
}));
val result_ : ff.compiler.Syntax_.Module = ff.compiler.Inference_.Inference_inferModule(self_ = ff.compiler.Inference_.make_(instances_ = instances_), module_ = module_, otherModules_ = otherModules_);
self_.inferredModules_ = ff.core.Map_.Map_add[ff.core.String_.String, ff.compiler.Syntax_.Module](self_ = self_.inferredModules_, key_ = ((packageName_ + ":") + moduleName_), value_ = result_);
result_
})
}

def Compiler_emit(self_ : ff.compiler.Compiler_.Compiler, packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.core.Unit_.Unit = (self_, packageName_, moduleName_) match {
case (self_, _, _) =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.Unit_.Unit](condition_ = ff.core.Set_.Set_contains[ff.core.String_.String](self_ = self_.emittedModules_, value_ = ((packageName_ + ":") + moduleName_)), body_ = {() =>
ff.core.Unit_.Unit();
ff.core.Unit_.Unit()
}), body_ = {() =>
self_.emittedModules_ = ff.core.Set_.Set_add[ff.core.String_.String](self_ = self_.emittedModules_, value_ = ((packageName_ + ":") + moduleName_));
val module_ : ff.compiler.Syntax_.Module = ff.compiler.Compiler_.Compiler_infer(self_ = self_, packageName_ = packageName_, moduleName_ = moduleName_);
ff.core.List_.List_each[ff.compiler.Syntax_.Module](self_ = ff.compiler.Compiler_.Compiler_imports(self_ = self_, packageName_ = packageName_, module_ = module_), body_ = {(i_) =>
val newPackageName_ : ff.core.String_.String = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
ff.compiler.Compiler_.Compiler_emit(self_ = self_, packageName_ = newPackageName_, moduleName_ = ff.core.FileSystem_.FileSystem_prefixName(self_ = self_.files_, path_ = i_.file_));
ff.core.Unit_.Unit()
});
val packagePair_ : ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String] = ff.core.Core_.do_[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](body_ = {() =>
val array_ : ff.core.Array_.Array[ff.core.String_.String] = ff.core.String_.String_split(self_ = packageName_, char_ = ':');
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = ff.core.Array_.Array_expect[ff.core.String_.String](self_ = array_, index_ = 0), second_ = ff.core.Array_.Array_expect[ff.core.String_.String](self_ = array_, index_ = 1))
});
val emitted_ : ff.core.String_.String = ff.compiler.Emitter_.emitModule_(packagePair_ = packagePair_, module_ = module_);
val path_ : ff.core.String_.String = ((self_.outputPath_ + "/") + ff.core.String_.String_replace(self_ = packageName_, needle_ = ":", replacement_ = "/"));
val file_ : ff.core.String_.String = (((path_ + "/") + moduleName_) + ".scala");
ff.core.FileSystem_.FileSystem_createDirectories(self_ = self_.files_, path_ = path_);
ff.core.FileSystem_.FileSystem_writeText(self_ = self_.files_, file_ = file_, text_ = emitted_);
ff.core.Unit_.Unit()
});
ff.core.Unit_.Unit()
}


}
