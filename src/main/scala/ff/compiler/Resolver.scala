package ff.compiler
import ff.compiler.Syntax_._

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
object Resolver_ {

case class Resolver(variables_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], variants_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], types_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], traits_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String])

def make_() : ff.compiler.Resolver_.Resolver = {
ff.compiler.Resolver_.Resolver(variables_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = List()), variants_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = List()), types_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = List()), traits_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = List()))
}

def fail_[T](at_ : ff.compiler.Syntax_.Location, message_ : ff.core.String_.String) : T = {
ff.core.Core_.panic_[T](message_ = ((message_ + " ") + ff.compiler.Syntax_.Location_show(self_ = at_)))
}
def Resolver_resolveModule(self_ : ff.compiler.Resolver_.Resolver, module_ : ff.compiler.Syntax_.Module, otherModules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Syntax_.Module = (self_, module_, otherModules_) match {
case (self_, _, _) =>
val moduleNamespace_ : ff.core.String_.String = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = ff.core.String_.String_takeWhile(self_ = ff.core.String_.String_reverse(self_ = ff.core.String_.String_replace(self_ = module_.file_, needle_ = "\\", replacement_ = "/")), p_ = {(_w1) =>
(_w1 != '/')
})), p_ = {(_w1) =>
(_w1 != '.')
});
val self2_ : ff.compiler.Resolver_.Resolver = ff.compiler.Resolver_.Resolver_processImports(self_ = self_, imports_ = module_.imports_, modules_ = otherModules_);
val self3_ : ff.compiler.Resolver_.Resolver = ff.compiler.Resolver_.Resolver_processDefinitions(self_ = self2_, module_ = module_, importAlias_ = ff.core.Option_.None[ff.core.String_.String]());
pipe_dot(module_)({(_c) =>
ff.compiler.Syntax_.Module(packagePair_ = _c.packagePair_, file_ = _c.file_, dependencies_ = _c.dependencies_, imports_ = _c.imports_, types_ = ff.core.List_.List_map[ff.compiler.Syntax_.DType, ff.compiler.Syntax_.DType](self_ = module_.types_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveTypeDefinition(self_ = self3_, definition_ = _w1)
}), traits_ = ff.core.List_.List_map[ff.compiler.Syntax_.DTrait, ff.compiler.Syntax_.DTrait](self_ = module_.traits_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveTraitDefinition(self_ = self3_, definition_ = _w1)
}), instances_ = ff.core.List_.List_map[ff.compiler.Syntax_.DInstance, ff.compiler.Syntax_.DInstance](self_ = module_.instances_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveInstanceDefinition(self_ = self3_, definition_ = _w1)
}), extends_ = ff.core.List_.List_map[ff.compiler.Syntax_.DExtend, ff.compiler.Syntax_.DExtend](self_ = module_.extends_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveExtendDefinition(self_ = self3_, definition_ = _w1)
}), lets_ = ff.core.List_.List_map[ff.compiler.Syntax_.DLet, ff.compiler.Syntax_.DLet](self_ = module_.lets_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveLetDefinition(self_ = self3_, definition_ = _w1)
}), functions_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = module_.functions_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveFunctionDefinition(self_ = self3_, definition_ = _w1)
}))
})
}

def Resolver_processImports(self_ : ff.compiler.Resolver_.Resolver, imports_ : ff.core.List_.List[ff.compiler.Syntax_.DImport], modules_ : ff.core.List_.List[ff.compiler.Syntax_.Module]) : ff.compiler.Resolver_.Resolver = (self_, imports_, modules_) match {
case (self_, _, _) =>
var resolver_ : ff.compiler.Resolver_.Resolver = self_;
ff.core.List_.List_each[ff.compiler.Syntax_.DImport](self_ = imports_, body_ = {(import_) =>
pipe_dot(ff.core.List_.List_find[ff.compiler.Syntax_.Module](self_ = modules_, body_ = {(_w1) =>
(ff.core.String_.String_dropLast(self_ = _w1.file_, count_ = 3) == import_.file_)
}))({
case (ff.core.Option_.Some(module_)) =>
resolver_ = ff.compiler.Resolver_.Resolver_processDefinitions(self_ = resolver_, module_ = module_, importAlias_ = ff.core.Option_.Some[ff.core.String_.String](value_ = import_.alias_))
case (ff.core.Option_.None()) =>
ff.compiler.Resolver_.fail_[ff.core.Unit_.Unit](at_ = import_.at_, message_ = ("No such module: " + import_.file_))
});
ff.core.Unit_.Unit()
});
resolver_
}

def Resolver_processDefinitions(self_ : ff.compiler.Resolver_.Resolver, module_ : ff.compiler.Syntax_.Module, importAlias_ : ff.core.Option_.Option[ff.core.String_.String]) : ff.compiler.Resolver_.Resolver = (self_, module_, importAlias_) match {
case (self_, _, _) =>
def entry_(name_ : ff.core.String_.String, unqualified_ : ff.core.Bool_.Bool) : ff.core.List_.List[ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]] = {
val full_ : ff.core.String_.String = ((((((module_.packagePair_.first_ + ":") + module_.packagePair_.second_) + "/") + ff.core.String_.String_dropLast(self_ = module_.file_, count_ = 3)) + ".") + name_);
pipe_dot(importAlias_)({
case (ff.core.Option_.None()) =>
List(ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = name_, second_ = full_))
case (ff.core.Option_.Some(alias_)) if unqualified_ =>
List(ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = ((alias_ + ".") + name_), second_ = full_), ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = name_, second_ = full_))
case (ff.core.Option_.Some(alias_)) =>
List(ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = ((alias_ + ".") + name_), second_ = full_))
})
}
val isCore_ : ff.core.Bool_.Bool = (((module_.packagePair_.first_ == "ff") && (module_.packagePair_.second_ == "core")) && (module_.file_ == "Core.ff"));
val lets_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DLet, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = module_.lets_, body_ = {(_w1) =>
entry_(name_ = _w1.name_, unqualified_ = isCore_)
}));
val functions_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DFunction, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = module_.functions_, body_ = {(_w1) =>
entry_(name_ = _w1.signature_.name_, unqualified_ = isCore_)
}));
val traitMethods_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.Signature, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DTrait, ff.compiler.Syntax_.Signature](self_ = module_.traits_, body_ = {(_w1) =>
_w1.methods_
}), body_ = {(_w1) =>
entry_(name_ = _w1.name_, unqualified_ = ff.core.Bool_.False())
}));
val traits_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DTrait, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = module_.traits_, body_ = {(_w1) =>
entry_(name_ = _w1.name_, unqualified_ = ff.core.Bool_.True())
}));
val types_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DType, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = module_.types_, body_ = {(_w1) =>
entry_(name_ = _w1.name_, unqualified_ = ff.core.Bool_.True())
}));
val variants_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.Variant, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_flatMap[ff.compiler.Syntax_.DType, ff.compiler.Syntax_.Variant](self_ = module_.types_, body_ = {(_w1) =>
_w1.variants_
}), body_ = {(_w1) =>
entry_(name_ = _w1.name_, unqualified_ = ff.core.Bool_.True())
}));
ff.compiler.Resolver_.Resolver(variables_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, that_ = lets_), that_ = functions_), that_ = traitMethods_), variants_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.variants_, that_ = variants_), types_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.types_, that_ = types_), traits_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.traits_, that_ = traits_))
}

def Resolver_resolveTypeDefinition(self_ : ff.compiler.Resolver_.Resolver, definition_ : ff.compiler.Syntax_.DType) : ff.compiler.Syntax_.DType = (self_, definition_) match {
case (self_, _) =>
val generics_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = definition_.generics_, body_ = {(g_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = g_, second_ = g_)
}));
val self2_ : ff.compiler.Resolver_.Resolver = pipe_dot(self_)({(_c) =>
ff.compiler.Resolver_.Resolver(variables_ = _c.variables_, variants_ = _c.variants_, types_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.types_, that_ = generics_), traits_ = _c.traits_)
});
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DType(at_ = _c.at_, name_ = _c.name_, generics_ = _c.generics_, constraints_ = ff.core.List_.List_map[ff.compiler.Syntax_.Constraint, ff.compiler.Syntax_.Constraint](self_ = definition_.constraints_, body_ = {(c_) =>
pipe_dot(c_)({(_c) =>
ff.compiler.Syntax_.Constraint(representation_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = c_.representation_))
})
}), commonFields_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.compiler.Syntax_.Parameter](self_ = definition_.commonFields_, body_ = {(f_) =>
pipe_dot(f_)({(_c) =>
ff.compiler.Syntax_.Parameter(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = f_.valueType_), default_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](self_ = f_.default_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self2_, term_ = _w1)
}))
})
}), variants_ = ff.core.List_.List_map[ff.compiler.Syntax_.Variant, ff.compiler.Syntax_.Variant](self_ = definition_.variants_, body_ = {(v_) =>
pipe_dot(v_)({(_c) =>
ff.compiler.Syntax_.Variant(at_ = _c.at_, name_ = _c.name_, fields_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.compiler.Syntax_.Parameter](self_ = v_.fields_, body_ = {(f_) =>
pipe_dot(f_)({(_c) =>
ff.compiler.Syntax_.Parameter(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = f_.valueType_), default_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](self_ = f_.default_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self2_, term_ = _w1)
}))
})
}), targets_ = _c.targets_)
})
}), targets_ = _c.targets_)
})
}

def Resolver_resolveTraitDefinition(self_ : ff.compiler.Resolver_.Resolver, definition_ : ff.compiler.Syntax_.DTrait) : ff.compiler.Syntax_.DTrait = (self_, definition_) match {
case (self_, _) =>
definition_
}

def Resolver_resolveInstanceDefinition(self_ : ff.compiler.Resolver_.Resolver, definition_ : ff.compiler.Syntax_.DInstance) : ff.compiler.Syntax_.DInstance = (self_, definition_) match {
case (self_, _) =>
definition_
}

def Resolver_resolveExtendDefinition(self_ : ff.compiler.Resolver_.Resolver, definition_ : ff.compiler.Syntax_.DExtend) : ff.compiler.Syntax_.DExtend = (self_, definition_) match {
case (self_, _) =>
val generics_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = definition_.generics_, body_ = {(g_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = g_, second_ = g_)
}));
val self2_ : ff.compiler.Resolver_.Resolver = pipe_dot(self_)({(_c) =>
ff.compiler.Resolver_.Resolver(variables_ = ff.core.Map_.Map_add[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, key_ = definition_.name_, value_ = definition_.name_), variants_ = _c.variants_, types_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.types_, that_ = generics_), traits_ = _c.traits_)
});
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DExtend(at_ = _c.at_, name_ = _c.name_, generics_ = _c.generics_, constraints_ = ff.core.List_.List_map[ff.compiler.Syntax_.Constraint, ff.compiler.Syntax_.Constraint](self_ = definition_.constraints_, body_ = {(c_) =>
pipe_dot(c_)({(_c) =>
ff.compiler.Syntax_.Constraint(representation_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = c_.representation_))
})
}), type_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = definition_.type_), methods_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = definition_.methods_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveFunctionDefinition(self_ = self2_, definition_ = _w1)
}))
})
}

def Resolver_resolveLetDefinition(self_ : ff.compiler.Resolver_.Resolver, definition_ : ff.compiler.Syntax_.DLet) : ff.compiler.Syntax_.DLet = (self_, definition_) match {
case (self_, _) =>
val self2_ : ff.compiler.Resolver_.Resolver = pipe_dot(self_)({(_c) =>
ff.compiler.Resolver_.Resolver(variables_ = ff.core.Map_.Map_add[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, key_ = definition_.name_, value_ = definition_.name_), variants_ = _c.variants_, types_ = _c.types_, traits_ = _c.traits_)
});
pipe_dot(definition_)({(_c) =>
ff.compiler.Syntax_.DLet(at_ = _c.at_, name_ = _c.name_, variableType_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = definition_.variableType_), value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = definition_.value_), targets_ = _c.targets_)
})
}

def Resolver_resolveTerm(self_ : ff.compiler.Resolver_.Resolver, term_ : ff.compiler.Syntax_.Term) : ff.compiler.Syntax_.Term = (self_, term_) match {
case (self_, _ : ff.compiler.Syntax_.EString) =>
term_
case (self_, _ : ff.compiler.Syntax_.EChar) =>
term_
case (self_, _ : ff.compiler.Syntax_.EInt) =>
term_
case (self_, _ : ff.compiler.Syntax_.EFloat) =>
term_
case (self_, e_ : ff.compiler.Syntax_.EVariable) =>
ff.core.Option_.Option_else(self_ = ff.core.Option_.Option_map[ff.core.String_.String, ff.compiler.Syntax_.Term](self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, key_ = e_.name_), body_ = {(_w1) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EVariable(at_ = _c.at_, name_ = _w1, generics_ = _c.generics_, instances_ = _c.instances_)
})
}), body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.compiler.Syntax_.Term](condition_ = ff.core.Option_.Option_any[ff.core.Char_.Char](self_ = ff.core.String_.String_first(self_ = e_.name_), body_ = {(_w1) =>
ff.core.Char_.Char_isAsciiLetter(self_ = _w1)
}), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.compiler.Syntax_.Term](at_ = e_.at_, message_ = ("No such variable: " + e_.name_))
}), body_ = {() =>
term_
})
})
case (self_, ff.compiler.Syntax_.EList(at_, t_, items_)) =>
ff.compiler.Syntax_.EList(at_ = at_, elementType_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = t_), items_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool], ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool]](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(item_, spread_)) =>
ff.core.Pair_.Pair[ff.compiler.Syntax_.Term, ff.core.Bool_.Bool](first_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = item_), second_ = spread_)
}))
case (self_, ff.compiler.Syntax_.EVariant(at_, name_, typeArguments_, arguments_)) =>
ff.compiler.Syntax_.EVariant(at_ = at_, name_ = ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.variants_, key_ = name_), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.String_.String](at_ = at_, message_ = ("No such variant: " + name_))
}), typeArguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = typeArguments_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = _w1)
}), arguments_ = ff.core.Option_.Option_map[ff.core.List_.List[ff.compiler.Syntax_.Argument], ff.core.List_.List[ff.compiler.Syntax_.Argument]](self_ = arguments_, body_ = {(_w1) =>
ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Argument](self_ = _w1, body_ = {(a_) =>
pipe_dot(a_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = a_.value_))
})
})
}))
case (self_, ff.compiler.Syntax_.EVariantIs(at_, name_, typeArguments_)) =>
ff.compiler.Syntax_.EVariantIs(at_ = at_, name_ = ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.variants_, key_ = name_), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.String_.String](at_ = at_, message_ = ("No such variant: " + name_))
}), typeArguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = typeArguments_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = _w1)
}))
case (self_, ff.compiler.Syntax_.ECopy(at_, name_, record_, arguments_)) =>
ff.compiler.Syntax_.ECopy(at_ = at_, name_ = ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.variants_, key_ = name_), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.String_.String](at_ = at_, message_ = ("No such variant: " + name_))
}), record_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = record_), arguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Field](self_ = arguments_, body_ = {(f_) =>
pipe_dot(f_)({(_c) =>
ff.compiler.Syntax_.Field(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = f_.value_))
})
}))
case (self_, e_ : ff.compiler.Syntax_.EField) =>
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EField(at_ = _c.at_, record_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = e_.record_), field_ = _c.field_)
})
case (self_, ff.compiler.Syntax_.ELambda(at_, ff.compiler.Syntax_.Lambda(lambdaAt_, cases_))) =>
ff.compiler.Syntax_.ELambda(at_ = at_, lambda_ = ff.compiler.Syntax_.Lambda(at_ = lambdaAt_, cases_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.compiler.Syntax_.MatchCase](self_ = cases_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveCase(self_ = self_, case_ = _w1)
})))
case (self_, ff.compiler.Syntax_.EPipe(at_, value_, function_)) =>
ff.compiler.Syntax_.EPipe(at_ = at_, value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = value_), function_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = function_))
case (self_, ff.compiler.Syntax_.ECall(at_, tailCall_, function_, typeArguments_, arguments_)) =>
ff.compiler.Syntax_.ECall(at_ = at_, tailCall_ = tailCall_, function_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = function_), typeArguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = typeArguments_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = _w1)
}), arguments_ = ff.core.List_.List_map[ff.compiler.Syntax_.Argument, ff.compiler.Syntax_.Argument](self_ = arguments_, body_ = {(a_) =>
pipe_dot(a_)({(_c) =>
ff.compiler.Syntax_.Argument(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = a_.value_))
})
}))
case (self_, ff.compiler.Syntax_.ERecord(at_, fields_)) =>
ff.compiler.Syntax_.ERecord(at_ = at_, fields_ = ff.core.List_.List_map[ff.compiler.Syntax_.Field, ff.compiler.Syntax_.Field](self_ = fields_, body_ = {(f_) =>
pipe_dot(f_)({(_c) =>
ff.compiler.Syntax_.Field(at_ = _c.at_, name_ = _c.name_, value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = f_.value_))
})
}))
case (self_, e_ : ff.compiler.Syntax_.EWildcard) =>
ff.core.Core_.if_[ff.core.Nothing_.Nothing](condition_ = (e_.index_ == 0), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.Nothing_.Nothing](at_ = e_.at_, message_ = "Unbound wildcard")
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.EWildcard(at_ = _c.at_, index_ = _c.index_)
})
case (self_, ff.compiler.Syntax_.EFunctions(at_, functions_, body_)) =>
val functionMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.core.String_.String](self_ = functions_, body_ = {(_w1) =>
_w1.signature_.name_
}), body_ = {(name_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = name_, second_ = name_)
}));
val self2_ : ff.compiler.Resolver_.Resolver = pipe_dot(self_)({(_c) =>
ff.compiler.Resolver_.Resolver(variables_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, that_ = functionMap_), variants_ = _c.variants_, types_ = _c.types_, traits_ = _c.traits_)
});
ff.compiler.Syntax_.EFunctions(at_ = at_, functions_ = ff.core.List_.List_map[ff.compiler.Syntax_.DFunction, ff.compiler.Syntax_.DFunction](self_ = functions_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveFunctionDefinition(self_ = self2_, definition_ = _w1)
}), body_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self2_, term_ = body_))
case (self_, e_ : ff.compiler.Syntax_.ELet) =>
val self2_ : ff.compiler.Resolver_.Resolver = pipe_dot(self_)({(_c) =>
ff.compiler.Resolver_.Resolver(variables_ = ff.core.Map_.Map_add[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, key_ = e_.name_, value_ = e_.name_), variants_ = _c.variants_, types_ = _c.types_, traits_ = _c.traits_)
});
pipe_dot(e_)({(_c) =>
ff.compiler.Syntax_.ELet(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = e_.valueType_), value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = e_.value_), body_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self2_, term_ = e_.body_))
})
case (self_, ff.compiler.Syntax_.ESequential(at_, before_, after_)) =>
ff.compiler.Syntax_.ESequential(at_ = at_, before_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = before_), after_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = after_))
case (self_, ff.compiler.Syntax_.EAssign(at_, operator_, variable_, value_)) =>
ff.compiler.Syntax_.EAssign(at_ = at_, operator_ = operator_, variable_ = ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, key_ = variable_), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.String_.String](at_ = at_, message_ = ("No such variable: " + variable_))
}), value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = value_))
case (self_, ff.compiler.Syntax_.EAssignField(at_, operator_, record_, field_, value_)) =>
ff.compiler.Syntax_.EAssignField(at_ = at_, operator_ = operator_, record_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = record_), field_ = field_, value_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self_, term_ = value_))
}

def Resolver_resolveType(self_ : ff.compiler.Resolver_.Resolver, type_ : ff.compiler.Syntax_.Type) : ff.compiler.Syntax_.Type = (self_, type_) match {
case (self_, _ : ff.compiler.Syntax_.TVariable) =>
type_
case (self_, constructor_ : ff.compiler.Syntax_.TConstructor) =>
val name_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Core_.if_[ff.core.String_.String](condition_ = ff.core.String_.String_contains(self_ = constructor_.name_, substring_ = "$"), body_ = {() =>
constructor_.name_
}), body_ = {() =>
ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.types_, key_ = constructor_.name_), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.String_.String](at_ = constructor_.at_, message_ = ("No such type: " + constructor_.name_))
})
});
pipe_dot(constructor_)({(_c) =>
ff.compiler.Syntax_.TConstructor(at_ = _c.at_, name_ = name_, generics_ = ff.core.List_.List_map[ff.compiler.Syntax_.Type, ff.compiler.Syntax_.Type](self_ = constructor_.generics_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = _w1)
}))
})
}

def Resolver_resolveFunctionDefinition(self_ : ff.compiler.Resolver_.Resolver, definition_ : ff.compiler.Syntax_.DFunction) : ff.compiler.Syntax_.DFunction = (self_, definition_) match {
case (self_, _) =>
val variableMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.core.String_.String](self_ = definition_.signature_.parameters_, body_ = {(_w1) =>
_w1.name_
}), body_ = {(name_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = name_, second_ = name_)
}));
val typeMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = definition_.signature_.generics_, body_ = {(name_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = name_, second_ = name_)
}));
val self2_ : ff.compiler.Resolver_.Resolver = pipe_dot(self_)({(_c) =>
ff.compiler.Resolver_.Resolver(variables_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, that_ = variableMap_), variants_ = _c.variants_, types_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.types_, that_ = typeMap_), traits_ = _c.traits_)
});
val signature_ : ff.compiler.Syntax_.Signature = pipe_dot(definition_.signature_)({(_c) =>
ff.compiler.Syntax_.Signature(at_ = _c.at_, name_ = _c.name_, generics_ = _c.generics_, constraints_ = ff.core.List_.List_map[ff.compiler.Syntax_.Constraint, ff.compiler.Syntax_.Constraint](self_ = definition_.signature_.constraints_, body_ = {(c_) =>
ff.compiler.Syntax_.Constraint(representation_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = c_.representation_))
}), parameters_ = ff.core.List_.List_map[ff.compiler.Syntax_.Parameter, ff.compiler.Syntax_.Parameter](self_ = definition_.signature_.parameters_, body_ = {(p_) =>
pipe_dot(p_)({(_c) =>
ff.compiler.Syntax_.Parameter(at_ = _c.at_, mutable_ = _c.mutable_, name_ = _c.name_, valueType_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = p_.valueType_), default_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](self_ = p_.default_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self2_, term_ = _w1)
}))
})
}), returnType_ = ff.compiler.Resolver_.Resolver_resolveType(self_ = self2_, type_ = definition_.signature_.returnType_))
});
val body_ : ff.compiler.Syntax_.Lambda = pipe_dot(definition_.body_)({(_c) =>
ff.compiler.Syntax_.Lambda(at_ = _c.at_, cases_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchCase, ff.compiler.Syntax_.MatchCase](self_ = definition_.body_.cases_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveCase(self_ = self2_, case_ = _w1)
}))
});
ff.compiler.Syntax_.DFunction(at_ = definition_.at_, signature_ = signature_, body_ = body_, targets_ = definition_.targets_)
}

def Resolver_resolveCase(self_ : ff.compiler.Resolver_.Resolver, case_ : ff.compiler.Syntax_.MatchCase) : ff.compiler.Syntax_.MatchCase = (self_, case_) match {
case (self_, _) =>
def findVariables_(pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = (pattern_) match {
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.Some(name_))) =>
ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = List(ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = name_, second_ = name_)))
case (ff.compiler.Syntax_.PVariable(_, ff.core.Option_.None())) =>
ff.core.Map_.empty_[ff.core.String_.String, ff.core.String_.String]()
case (ff.compiler.Syntax_.PVariant(_, _, patterns_)) =>
ff.core.List_.List_foldLeft[ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]](self_ = patterns_, body_ = {(pattern_) =>
findVariables_(pattern_ = pattern_)
}), initial_ = ff.core.Map_.empty_[ff.core.String_.String, ff.core.String_.String]())({(_w1, _w2) =>
ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = _w1, that_ = _w2)
})
case (ff.compiler.Syntax_.PVariantAs(_, _, variable_)) =>
ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_map[ff.core.String_.String, ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.Option_.Option_toList[ff.core.String_.String](self_ = variable_), body_ = {(x_) =>
ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = x_, second_ = x_)
}))
case (ff.compiler.Syntax_.PAlias(_, pattern_, variable_)) =>
ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = ff.core.List_.List_toMap[ff.core.String_.String, ff.core.String_.String](self_ = List(ff.core.Pair_.Pair[ff.core.String_.String, ff.core.String_.String](first_ = variable_, second_ = variable_))), that_ = findVariables_(pattern_ = pattern_))
case (ff.compiler.Syntax_.PList(_, _, items_)) =>
ff.core.List_.List_foldLeft[ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool], ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(item_, _)) =>
findVariables_(pattern_ = item_)
}), initial_ = ff.core.Map_.empty_[ff.core.String_.String, ff.core.String_.String]())({(_w1, _w2) =>
ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = _w1, that_ = _w2)
})
}
val variableMap_ : ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String] = ff.core.List_.List_foldLeft[ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String], ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]](self_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.core.Map_.Map[ff.core.String_.String, ff.core.String_.String]](self_ = case_.patterns_, body_ = {(pattern_) =>
findVariables_(pattern_ = pattern_)
}), initial_ = ff.core.Map_.empty_[ff.core.String_.String, ff.core.String_.String]())({(_w1, _w2) =>
ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = _w1, that_ = _w2)
});
val self2_ : ff.compiler.Resolver_.Resolver = pipe_dot(self_)({(_c) =>
ff.compiler.Resolver_.Resolver(variables_ = ff.core.Map_.Map_addAll[ff.core.String_.String, ff.core.String_.String](self_ = self_.variables_, that_ = variableMap_), variants_ = _c.variants_, types_ = _c.types_, traits_ = _c.traits_)
});
ff.compiler.Syntax_.MatchCase(at_ = case_.at_, patterns_ = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.compiler.Syntax_.MatchPattern](self_ = case_.patterns_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolvePattern(self_ = self2_, pattern_ = _w1)
}), condition_ = ff.core.Option_.Option_map[ff.compiler.Syntax_.Term, ff.compiler.Syntax_.Term](self_ = case_.condition_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self2_, term_ = _w1)
}), body_ = ff.compiler.Resolver_.Resolver_resolveTerm(self_ = self2_, term_ = case_.body_))
}

def Resolver_resolvePattern(self_ : ff.compiler.Resolver_.Resolver, pattern_ : ff.compiler.Syntax_.MatchPattern) : ff.compiler.Syntax_.MatchPattern = (self_, pattern_) match {
case (self_, p_ @ (_ : ff.compiler.Syntax_.PVariable)) =>
p_
case (self_, ff.compiler.Syntax_.PVariant(at_, name_, patterns_)) =>
val newName_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.variants_, key_ = name_), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.String_.String](at_ = at_, message_ = ("No such variant: " + name_))
});
val newPatterns_ : ff.core.List_.List[ff.compiler.Syntax_.MatchPattern] = ff.core.List_.List_map[ff.compiler.Syntax_.MatchPattern, ff.compiler.Syntax_.MatchPattern](self_ = patterns_, body_ = {(_w1) =>
ff.compiler.Resolver_.Resolver_resolvePattern(self_ = self_, pattern_ = _w1)
});
ff.compiler.Syntax_.PVariant(at_ = at_, name_ = newName_, patterns_ = newPatterns_)
case (self_, ff.compiler.Syntax_.PVariantAs(at_, name_, variable_)) =>
val newName_ : ff.core.String_.String = ff.core.Option_.Option_else(self_ = ff.core.Map_.Map_get[ff.core.String_.String, ff.core.String_.String](self_ = self_.variants_, key_ = name_), body_ = {() =>
ff.compiler.Resolver_.fail_[ff.core.String_.String](at_ = at_, message_ = ("No such variant: " + name_))
});
ff.compiler.Syntax_.PVariantAs(at_ = at_, name_ = newName_, variable_ = variable_)
case (self_, ff.compiler.Syntax_.PAlias(at_, pattern_, variable_)) =>
val newPattern_ : ff.compiler.Syntax_.MatchPattern = ff.compiler.Resolver_.Resolver_resolvePattern(self_ = self_, pattern_ = pattern_);
ff.compiler.Syntax_.PAlias(at_ = at_, pattern_ = newPattern_, variable_ = variable_)
case (self_, ff.compiler.Syntax_.PList(at_, t_, items_)) =>
val newType_ : ff.compiler.Syntax_.Type = ff.compiler.Resolver_.Resolver_resolveType(self_ = self_, type_ = t_);
val newPatterns_ : ff.core.List_.List[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]] = ff.core.List_.List_map[ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool], ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool]](self_ = items_, body_ = {
case (ff.core.Pair_.Pair(pattern_, spread_)) =>
ff.core.Pair_.Pair[ff.compiler.Syntax_.MatchPattern, ff.core.Bool_.Bool](first_ = ff.compiler.Resolver_.Resolver_resolvePattern(self_ = self_, pattern_ = pattern_), second_ = spread_)
});
ff.compiler.Syntax_.PList(at_ = at_, itemType_ = newType_, items_ = newPatterns_)
}


}
