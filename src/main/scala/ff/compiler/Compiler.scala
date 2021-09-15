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

import ff.core.Option_._

import ff.core.Pair_._

import ff.core.Set_._

import ff.core.String_._

import ff.core.System_._

import ff.core.Try_._

import ff.core.Unit_._
object Compiler_ {

case class Compiler(files_ : ff.core.FileSystem_.FileSystem, outputPath_ : ff.core.String_.String, packagePaths_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], var parsedModules_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Module], var resolvedModules_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Module], var inferredModules_ : ff.core.Map_.Map[ff.core.String_.String, ff.compiler.Syntax_.Module], var emittedModules_ : ff.core.Set_.Set[ff.core.String_.String])
val coreImports_ : ff.core.List_.List[ff.compiler.Syntax_.DImport] = List("Array", "ArrayBuilder", "Bool", "Char", "Core", "FileSystem", "Int", "List", "Log", "Map", "Option", "Pair", "Set", "String", "System", "Try", "Unit").map_({(moduleName_) =>
ff.compiler.Syntax_.DImport(at_ = ff.compiler.Syntax_.Location("<prelude>", 1, 1), alias_ = moduleName_, package_ = ff.core.Pair_.Pair("ff", "core"), directory_ = List(), file_ = moduleName_)
})
def make_(files_ : ff.core.FileSystem_.FileSystem, outputPath_ : ff.core.String_.String, packagePaths_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]) : ff.compiler.Compiler_.Compiler = {
ff.compiler.Compiler_.Compiler(files_ = files_, outputPath_ = outputPath_, packagePaths_ = packagePaths_, parsedModules_ = ff.core.Core_.mapOf_(), resolvedModules_ = ff.core.Core_.mapOf_(), inferredModules_ = ff.core.Core_.mapOf_(), emittedModules_ = ff.core.Core_.setOf_())
}
implicit class Compiler_extend0(self_ : ff.compiler.Compiler_.Compiler) {

def parse_(packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.compiler.Syntax_.Module = {
self_.parsedModules_.get_(((packageName_ + ":") + moduleName_)).else_({() =>
val packagePair_ = ff.core.Core_.do_({() =>
val array_ = packageName_.split_(':');
ff.core.Pair_.Pair(array_.expect_(0), array_.expect_(1))
});
val packagePath_ = self_.packagePaths_.expect_(packageName_);
val file_ = (moduleName_ + ".ff");
val code_ = self_.files_.readText_(((packagePath_ + "/") + file_));
val tokens_ = ff.compiler.Tokenizer_.tokenize_(file_, code_);
val module_ = ff.compiler.Parser_.make_(packagePair_, file_, tokens_).parseModule_();
val result_ = module_.copy(imports_ = (ff.compiler.Compiler_.coreImports_ ++ module_.imports_));
self_.parsedModules_ = self_.parsedModules_.add_(((packageName_ + ":") + moduleName_), result_);
result_
})
}

def imports_(packageName_ : ff.core.String_.String, module_ : ff.compiler.Syntax_.Module) : ff.core.List_.List[ff.compiler.Syntax_.Module] = {
module_.imports_.map_({(import_) =>
val newPackageName_ = ((import_.package_.first_ + ":") + import_.package_.second_);
val newModuleName_ = (import_.directory_.map_({(_w1) =>
(_w1 + "/")
}).join_("") + import_.file_);
self_.parse_(newPackageName_, newModuleName_)
})
}

def resolve_(packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.compiler.Syntax_.Module = {
self_.resolvedModules_.get_(((packageName_ + ":") + moduleName_)).else_({() =>
val module_ = self_.parse_(packageName_, moduleName_);
val otherModules_ = self_.imports_(packageName_, module_);
val result_ = ff.compiler.Resolver_.make_().resolveModule_(module_, otherModules_);
self_.resolvedModules_ = self_.resolvedModules_.add_(((packageName_ + ":") + moduleName_), result_);
result_
})
}

def infer_(packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.compiler.Syntax_.Module = {
self_.inferredModules_.get_(((packageName_ + ":") + moduleName_)).else_({() =>
val module_ = self_.resolve_(packageName_, moduleName_);
val otherModules_ = self_.imports_(packageName_, module_).map_({(i_) =>
val newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
self_.resolve_(newPackageName_, self_.files_.prefixName_(i_.file_))
});
val instances_ = (module_.instances_ ++ otherModules_.flatMap_({(_w1) =>
_w1.instances_
}));
val result_ = ff.compiler.Inference_.make_(instances_).inferModule_(module_, otherModules_);
self_.inferredModules_ = self_.inferredModules_.add_(((packageName_ + ":") + moduleName_), result_);
module_
})
}

def emit_(packageName_ : ff.core.String_.String, moduleName_ : ff.core.String_.String) : ff.core.Unit_.Unit = {
ff.core.Core_.if_(self_.emittedModules_.contains_(((packageName_ + ":") + moduleName_)), {() =>
ff.core.Unit_.Unit()
}).else_({() =>
self_.emittedModules_ = self_.emittedModules_.add_(((packageName_ + ":") + moduleName_));
val module_ = self_.infer_(packageName_, moduleName_);
self_.imports_(packageName_, module_).each_({(i_) =>
val newPackageName_ = ((i_.packagePair_.first_ + ":") + i_.packagePair_.second_);
self_.emit_(newPackageName_, self_.files_.prefixName_(i_.file_))
});
val packagePair_ = ff.core.Core_.do_({() =>
val array_ = packageName_.split_(':');
ff.core.Pair_.Pair(array_.expect_(0), array_.expect_(1))
});
val emitted_ = ff.compiler.Emitter_.emitModule_(packagePair_, module_);
val path_ = ((self_.outputPath_ + "/") + packageName_.replace_(":", "/"));
val file_ = (((path_ + "/") + moduleName_) + ".scala");
self_.files_.createDirectories_(path_);
self_.files_.writeText_(file_, emitted_)
})
}

}


}
