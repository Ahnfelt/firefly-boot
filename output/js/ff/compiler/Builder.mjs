import * as import$0 from 'pkg';

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_LspHook from "../../ff/compiler/LspHook.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Box from "../../ff/core/Box.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

import * as ff_core_Json from "../../ff/core/Json.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Lock from "../../ff/core/Lock.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Path from "../../ff/core/Path.mjs"

import * as ff_core_Random from "../../ff/core/Random.mjs"

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type PackageFiles
export function PackageFiles(root_, packageFile_, files_) {
return {root_, packageFile_, files_};
}



export function build_(system_, emitTarget_, mainPackage_, mainModule_, resolvedDependencies_, compilerModulePath_, tempPath_, jsOutputPath_, printMeasurements_) {
if(ff_core_Path.Path_exists(tempPath_, false, false, false)) {
ff_core_Path.Path_delete(tempPath_, 0, 100)
};
ff_core_Path.Path_createDirectory(tempPath_, false);
const jsPathFile_ = ff_core_Path.Path_slash(tempPath_, "js");
ff_core_Path.Path_createDirectory(jsPathFile_, true);
const success_ = ff_core_Core.do_((() => {
const compiler_ = ff_compiler_Compiler.make_(emitTarget_, ff_core_NodeSystem.NodeSystem_mainTask(system_), compilerModulePath_, jsPathFile_, resolvedDependencies_, ff_core_Map.empty_(), ff_compiler_LspHook.disabled_());
ff_compiler_Compiler.Compiler_emit(compiler_, mainPackage_, mainModule_, true);
if(printMeasurements_) {
ff_compiler_Compiler.Compiler_printMeasurements(compiler_)
};
ff_core_Map.Map_each(resolvedDependencies_.packagePaths_, ((packagePair_, packagePath_) => {
ff_core_Option.Option_each(ff_core_Map.Map_get(resolvedDependencies_.packages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ((packageInfo_) => {
ff_compiler_Builder.processIncludes_(jsPathFile_, packagePath_, packageInfo_)
}))
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return true
}));
if(success_) {
if(ff_core_Path.Path_exists(jsOutputPath_, false, false, false)) {
ff_core_Path.Path_delete(jsOutputPath_, 0, 100)
};
ff_core_Path.Path_renameTo(jsPathFile_, jsOutputPath_)
}
}

export function processIncludes_(jsPathFile_, packagePath_, info_) {
ff_core_List.List_each(info_.includes_, ((include_) => {
const fromPath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(ff_core_Path.Path_slash(packagePath_, ".firefly"), "include"), include_.path_);
const toPath_ = ff_core_Path.Path_slash(ff_core_Path.Path_slash(jsPathFile_, ff_compiler_Syntax.PackagePair_groupName(info_.package_.packagePair_, "/")), include_.path_);
ff_core_Path.Path_copyTo(fromPath_, toPath_, 0, 100)
}))
}

export function buildViaBuildSystem_(system_, fireflyPath_, mainFile_, target_) {
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), ff_core_NodeSystem.NodeSystem_path(system_, mainFile_));
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(fireflyPath_, "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
if((target_ !== "browser")) {
ff_core_Core.panic_("buildViaBuildSystem is currently limited to browser target only - the restriction can be lifted")
};
ff_compiler_Builder.build_(system_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(mainFile_, ff_core_String.String_size(".ff")), (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), ff_core_Option.None(), ff_core_NodeSystem.NodeSystem_path(system_, ".firefly/temporary"), ff_core_Path.Path_slash(ff_core_NodeSystem.NodeSystem_path(system_, ".firefly/output"), target_), false)
}

export function check_(system_, fireflyPath_, path_, virtualFiles_, lspHook_, infer_) {
const packages_ = (((_1) => {
{
if(_1) {
return ff_compiler_Builder.findPackageFiles_(path_)
return
}
}
{
if(!_1) {
const _guard1 = ff_core_Path.Path_endsWith(path_, ff_core_List.Link(".firefly", ff_core_List.Link("package.ff", ff_core_List.Empty())));
if(_guard1) {
return ff_core_List.Link(ff_compiler_Builder.PackageFiles(ff_core_Option.Option_grab(ff_core_Path.Path_parent(path_)), ff_core_Option.Some(path_), ff_core_List.Empty()), ff_core_List.Empty())
return
}
}
}
{
if(!_1) {
return ff_core_List.Link(ff_compiler_Builder.PackageFiles(ff_core_Option.Option_grab(ff_core_Path.Path_parent(path_)), ff_core_Option.None(), ff_core_List.Link(path_, ff_core_List.Empty())), ff_core_List.Empty())
return
}
}
}))(ff_core_Path.Path_isDirectory(path_));
ff_core_List.List_each(ff_core_List.List_filter(packages_, ((_w1) => {
return (!ff_core_List.List_isEmpty(_w1.files_))
})), ((package_) => {
const firstFile_ = ff_core_List.List_grabFirst(package_.files_);
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_httpClient(system_), firstFile_);
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_core_Path.Path_slash(fireflyPath_, "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const fixedResolvedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_);
const compiler_ = ff_compiler_Compiler.make_(ff_compiler_JsEmitter.EmitBuild(), ff_core_NodeSystem.NodeSystem_mainTask(system_), ff_core_Option.None(), ff_core_Path.Path_slash(ff_core_Path.Path_slash(package_.root_, ".firefly"), "temporary"), fixedResolvedDependencies_, virtualFiles_, lspHook_);
ff_core_List.List_each(package_.files_, ((file_) => {
const localFile_ = ff_core_Path.Path_base(file_);
if(infer_) {
ff_compiler_Compiler.Compiler_infer(compiler_, resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(localFile_, ff_core_String.String_size(".ff")))
} else {
ff_compiler_Compiler.Compiler_resolve(compiler_, resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(localFile_, ff_core_String.String_size(".ff")))
}
}))
}))
}

export function findPackageFiles_(path_) {
const files_ = ff_compiler_Builder.findFireflyFiles_(path_);
const split_ = ff_core_List.List_partition(files_, ((_w1) => {
return ff_core_Path.Path_endsWith(_w1, ff_core_List.Link(".firefly", ff_core_List.Link("package.ff", ff_core_List.Empty())))
}));
const packageFiles_ = split_.first_;
let singleFiles_ = split_.second_;
const multiFileProjects_ = ff_core_List.List_map(packageFiles_, ((packageFile_) => {
const projectRoot_ = ff_core_Option.Option_grab(ff_core_Path.Path_parent(ff_core_Option.Option_grab(ff_core_Path.Path_parent(packageFile_))));
const files_ = ff_core_List.List_partition(singleFiles_, ((_w1) => {
return ff_core_Path.Path_isInsideOf(_w1, projectRoot_)
}));
singleFiles_ = files_.second_;
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.Some(packageFile_), files_.first_)
}));
const singleFileProjects_ = ff_core_List.List_map(singleFiles_, ((file_) => {
const projectRoot_ = ff_core_Option.Option_grab(ff_core_Path.Path_parent(file_));
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.None(), ff_core_List.Link(file_, ff_core_List.Empty()))
}));
return ff_core_List.List_addAll(multiFileProjects_, singleFileProjects_)
}

export function findFireflyFiles_(path_) {
const split_ = ff_core_List.List_partition(ff_core_Stream.Stream_toList(ff_core_Path.Path_entries(path_)), ((_w1) => {
return ff_core_Path.PathEntry_isDirectory(_w1)
}));
const directories_ = ff_core_List.List_filter(ff_core_List.List_map(split_.first_, ((_w1) => {
return ff_core_Path.PathEntry_path(_w1)
})), ((_w1) => {
return ff_core_String.String_all(ff_core_Path.Path_base(_w1), ((c_) => {
return (((c_ === 46) || ff_core_Char.Char_isAsciiLower(c_)) || ff_core_Char.Char_isAsciiDigit(c_))
}))
}));
const fireflyFiles_ = ff_core_List.List_filter(ff_core_List.List_map(split_.second_, ((_w1) => {
return ff_core_Path.PathEntry_path(_w1)
})), ((_w1) => {
return (ff_core_Path.Path_extension(_w1) === ".ff")
}));
return ff_core_List.List_addAll(fireflyFiles_, ff_core_List.List_flatMap(directories_, ((_w1) => {
return ff_compiler_Builder.findFireflyFiles_(_w1)
})))
}

export function internalCreateExecutable_(self_, mainJsFile_ = ".firefly/output/executable/Main.bundle.js", outputPath_ = ".firefly/output", targets_ = ff_core_List.Link("host", ff_core_List.Empty()), assets_ = ff_core_AssetSystem.create_()) {
const assetOutputPath_ = ff_core_Path.Path_slash(outputPath_, "assets");
ff_core_List.List_each(ff_core_Map.Map_pairs(assets_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const path_ = _1.first_;
const makeStream_ = _1.second_;
const p_ = ff_core_Path.Path_slash(assetOutputPath_, path_);
ff_core_Path.Path_createDirectory(ff_core_Option.Option_grab(ff_core_Path.Path_parent(p_)), true);
ff_core_Path.Path_writeStream(p_, makeStream_(), false)
return
}
}));
const json_ = `{
            "name": "main",
            "bin": {
                "firefly-main": "Main.bundle.js"
            },
            "devDependencies": {
                "pkg": "^5.8.0"
            },
            "pkg": {
                "scripts": "Main.bundle.js",
                "outputPath": "bin",
                "assets": ["../assets/**/*"],
                "targets": [
                    "node18-linux-x64",
                    "node18-macos-x64",
                    "node18-win-x64"
                ]
            }
        }`;
const packageFile_ = ff_core_Path.Path_slash(outputPath_, "executable/package.json");
ff_core_Path.Path_writeText(packageFile_, json_);
ff_compiler_Builder.internalCallPkg_(self_, packageFile_, outputPath_, targets_)
}

export function internalCallPkg_(self_, packageFile_, outputPath_, targets_) {
throw new Error('Function internalCallPkg is missing on this target in sync context.');
}

export async function build_$(system_, emitTarget_, mainPackage_, mainModule_, resolvedDependencies_, compilerModulePath_, tempPath_, jsOutputPath_, printMeasurements_, $task) {
if((await ff_core_Path.Path_exists$(tempPath_, false, false, false, $task))) {
(await ff_core_Path.Path_delete$(tempPath_, 0, 100, $task))
};
(await ff_core_Path.Path_createDirectory$(tempPath_, false, $task));
const jsPathFile_ = (await ff_core_Path.Path_slash$(tempPath_, "js", $task));
(await ff_core_Path.Path_createDirectory$(jsPathFile_, true, $task));
const success_ = (await ff_core_Core.do_$((async ($task) => {
const compiler_ = (await ff_compiler_Compiler.make_$(emitTarget_, (await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), compilerModulePath_, jsPathFile_, resolvedDependencies_, ff_core_Map.empty_(), ff_compiler_LspHook.disabled_(), $task));
(await ff_compiler_Compiler.Compiler_emit$(compiler_, mainPackage_, mainModule_, true, $task));
if(printMeasurements_) {
(await ff_compiler_Compiler.Compiler_printMeasurements$(compiler_, $task))
};
(await ff_core_Map.Map_each$(resolvedDependencies_.packagePaths_, (async (packagePair_, packagePath_, $task) => {
(await ff_core_Option.Option_each$(ff_core_Map.Map_get(resolvedDependencies_.packages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (async (packageInfo_, $task) => {
(await ff_compiler_Builder.processIncludes_$(jsPathFile_, packagePath_, packageInfo_, $task))
}), $task))
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair, $task));
return true
}), $task));
if(success_) {
if((await ff_core_Path.Path_exists$(jsOutputPath_, false, false, false, $task))) {
(await ff_core_Path.Path_delete$(jsOutputPath_, 0, 100, $task))
};
(await ff_core_Path.Path_renameTo$(jsPathFile_, jsOutputPath_, $task))
}
}

export async function processIncludes_$(jsPathFile_, packagePath_, info_, $task) {
(await ff_core_List.List_each$(info_.includes_, (async (include_, $task) => {
const fromPath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(packagePath_, ".firefly", $task)), "include", $task)), include_.path_, $task));
const toPath_ = (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(jsPathFile_, ff_compiler_Syntax.PackagePair_groupName(info_.package_.packagePair_, "/"), $task)), include_.path_, $task));
(await ff_core_Path.Path_copyTo$(fromPath_, toPath_, 0, 100, $task))
}), $task))
}

export async function buildViaBuildSystem_$(system_, fireflyPath_, mainFile_, target_, $task) {
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), (await ff_core_NodeSystem.NodeSystem_path$(system_, mainFile_, $task)), $task));
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(fireflyPath_, "core", $task)), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
if((target_ !== "browser")) {
ff_core_Core.panic_("buildViaBuildSystem is currently limited to browser target only - the restriction can be lifted")
};
(await ff_compiler_Builder.build_$(system_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(mainFile_, ff_core_String.String_size(".ff")), (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_), ff_core_Option.None(), (await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly/temporary", $task)), (await ff_core_Path.Path_slash$((await ff_core_NodeSystem.NodeSystem_path$(system_, ".firefly/output", $task)), target_, $task)), false, $task))
}

export async function check_$(system_, fireflyPath_, path_, virtualFiles_, lspHook_, infer_, $task) {
const packages_ = (await ((async (_1, $task) => {
{
if(_1) {
return (await ff_compiler_Builder.findPackageFiles_$(path_, $task))
return
}
}
{
if(!_1) {
const _guard1 = (await ff_core_Path.Path_endsWith$(path_, ff_core_List.Link(".firefly", ff_core_List.Link("package.ff", ff_core_List.Empty())), $task));
if(_guard1) {
return ff_core_List.Link(ff_compiler_Builder.PackageFiles(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(path_, $task))), ff_core_Option.Some(path_), ff_core_List.Empty()), ff_core_List.Empty())
return
}
}
}
{
if(!_1) {
return ff_core_List.Link(ff_compiler_Builder.PackageFiles(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(path_, $task))), ff_core_Option.None(), ff_core_List.Link(path_, ff_core_List.Empty())), ff_core_List.Empty())
return
}
}
}))((await ff_core_Path.Path_isDirectory$(path_, $task)), $task));
(await ff_core_List.List_each$(ff_core_List.List_filter(packages_, ((_w1) => {
return (!ff_core_List.List_isEmpty(_w1.files_))
})), (async (package_, $task) => {
const firstFile_ = ff_core_List.List_grabFirst(package_.files_);
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_httpClient$(system_, $task)), firstFile_, $task));
const fixedPackagePaths_ = (ff_core_Map.Map_contains(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? resolvedDependencies_.packagePaths_
: ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (await ff_core_Path.Path_slash$(fireflyPath_, "core", $task)), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
const fixedResolvedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(resolvedDependencies_);
const compiler_ = (await ff_compiler_Compiler.make_$(ff_compiler_JsEmitter.EmitBuild(), (await ff_core_NodeSystem.NodeSystem_mainTask$(system_, $task)), ff_core_Option.None(), (await ff_core_Path.Path_slash$((await ff_core_Path.Path_slash$(package_.root_, ".firefly", $task)), "temporary", $task)), fixedResolvedDependencies_, virtualFiles_, lspHook_, $task));
(await ff_core_List.List_each$(package_.files_, (async (file_, $task) => {
const localFile_ = (await ff_core_Path.Path_base$(file_, $task));
if(infer_) {
(await ff_compiler_Compiler.Compiler_infer$(compiler_, resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(localFile_, ff_core_String.String_size(".ff")), $task))
} else {
(await ff_compiler_Compiler.Compiler_resolve$(compiler_, resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(localFile_, ff_core_String.String_size(".ff")), $task))
}
}), $task))
}), $task))
}

export async function findPackageFiles_$(path_, $task) {
const files_ = (await ff_compiler_Builder.findFireflyFiles_$(path_, $task));
const split_ = (await ff_core_List.List_partition$(files_, (async (_w1, $task) => {
return (await ff_core_Path.Path_endsWith$(_w1, ff_core_List.Link(".firefly", ff_core_List.Link("package.ff", ff_core_List.Empty())), $task))
}), $task));
const packageFiles_ = split_.first_;
let singleFiles_ = split_.second_;
const multiFileProjects_ = (await ff_core_List.List_map$(packageFiles_, (async (packageFile_, $task) => {
const projectRoot_ = ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(packageFile_, $task))), $task)));
const files_ = (await ff_core_List.List_partition$(singleFiles_, (async (_w1, $task) => {
return (await ff_core_Path.Path_isInsideOf$(_w1, projectRoot_, $task))
}), $task));
singleFiles_ = files_.second_;
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.Some(packageFile_), files_.first_)
}), $task));
const singleFileProjects_ = (await ff_core_List.List_map$(singleFiles_, (async (file_, $task) => {
const projectRoot_ = ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(file_, $task)));
return ff_compiler_Builder.PackageFiles(projectRoot_, ff_core_Option.None(), ff_core_List.Link(file_, ff_core_List.Empty()))
}), $task));
return ff_core_List.List_addAll(multiFileProjects_, singleFileProjects_)
}

export async function findFireflyFiles_$(path_, $task) {
const split_ = (await ff_core_List.List_partition$((await ff_core_Stream.Stream_toList$((await ff_core_Path.Path_entries$(path_, $task)), $task)), (async (_w1, $task) => {
return (await ff_core_Path.PathEntry_isDirectory$(_w1, $task))
}), $task));
const directories_ = (await ff_core_List.List_filter$((await ff_core_List.List_map$(split_.first_, (async (_w1, $task) => {
return (await ff_core_Path.PathEntry_path$(_w1, $task))
}), $task)), (async (_w1, $task) => {
return ff_core_String.String_all((await ff_core_Path.Path_base$(_w1, $task)), ((c_) => {
return (((c_ === 46) || ff_core_Char.Char_isAsciiLower(c_)) || ff_core_Char.Char_isAsciiDigit(c_))
}))
}), $task));
const fireflyFiles_ = (await ff_core_List.List_filter$((await ff_core_List.List_map$(split_.second_, (async (_w1, $task) => {
return (await ff_core_Path.PathEntry_path$(_w1, $task))
}), $task)), (async (_w1, $task) => {
return ((await ff_core_Path.Path_extension$(_w1, $task)) === ".ff")
}), $task));
return ff_core_List.List_addAll(fireflyFiles_, (await ff_core_List.List_flatMap$(directories_, (async (_w1, $task) => {
return (await ff_compiler_Builder.findFireflyFiles_$(_w1, $task))
}), $task)))
}

export async function internalCreateExecutable_$(self_, mainJsFile_ = ".firefly/output/executable/Main.bundle.js", outputPath_ = ".firefly/output", targets_ = ff_core_List.Link("host", ff_core_List.Empty()), assets_ = ff_core_AssetSystem.create_(), $task) {
const assetOutputPath_ = (await ff_core_Path.Path_slash$(outputPath_, "assets", $task));
(await ff_core_List.List_each$(ff_core_Map.Map_pairs(assets_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async (_1, $task) => {
{
const path_ = _1.first_;
const makeStream_ = _1.second_;
const p_ = (await ff_core_Path.Path_slash$(assetOutputPath_, path_, $task));
(await ff_core_Path.Path_createDirectory$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(p_, $task))), true, $task));
(await ff_core_Path.Path_writeStream$(p_, (await makeStream_($task)), false, $task))
return
}
}), $task));
const json_ = `{
            "name": "main",
            "bin": {
                "firefly-main": "Main.bundle.js"
            },
            "devDependencies": {
                "pkg": "^5.8.0"
            },
            "pkg": {
                "scripts": "Main.bundle.js",
                "outputPath": "bin",
                "assets": ["../assets/**/*"],
                "targets": [
                    "node18-linux-x64",
                    "node18-macos-x64",
                    "node18-win-x64"
                ]
            }
        }`;
const packageFile_ = (await ff_core_Path.Path_slash$(outputPath_, "executable/package.json", $task));
(await ff_core_Path.Path_writeText$(packageFile_, json_, $task));
(await ff_compiler_Builder.internalCallPkg_$(self_, packageFile_, outputPath_, targets_, $task))
}

export async function internalCallPkg_$(self_, packageFile_, outputPath_, targets_, $task) {

        const pkg = import$0
        return await pkg.exec([
            packageFile_,
            '--out-path', outputPath_,
            '--target', ff_core_List.List_toArray(targets_).join(',')
        ])
    
}






