import * as import$0 from 'pkg';

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Dependencies from "../../ff/compiler/Dependencies.mjs"

import * as ff_compiler_JsEmitter from "../../ff/compiler/JsEmitter.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_JsSystem from "../../ff/core/JsSystem.mjs"

import * as ff_core_JsValue from "../../ff/core/JsValue.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_NodeSystem from "../../ff/core/NodeSystem.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

import * as ff_core_Vector from "../../ff/core/Vector.mjs"





export function build_(system_, emitTarget_, mainPackage_, mainModule_, resolvedDependencies_, compilerModulePath_, tempPath_, jsOutputPath_, printMeasurements_) {
const fs_ = ff_core_NodeSystem.NodeSystem_files(system_);
if(ff_core_FileSystem.FileSystem_exists(fs_, tempPath_)) {
ff_core_FileSystem.FileSystem_deleteDirectory(fs_, tempPath_)
};
ff_core_FileSystem.FileSystem_createDirectory(fs_, tempPath_);
const jsPathFile_ = (tempPath_ + "/js");
ff_core_FileSystem.FileSystem_createDirectories(fs_, jsPathFile_);
const success_ = ff_core_Core.do_((() => {
const compiler_ = ff_compiler_Compiler.make_(emitTarget_, fs_, ff_core_NodeSystem.NodeSystem_time(system_), compilerModulePath_, jsPathFile_, resolvedDependencies_);
ff_compiler_Compiler.Compiler_emit(compiler_, mainPackage_, mainModule_, true);
if(printMeasurements_) {
ff_compiler_Compiler.Compiler_printMeasurements(compiler_)
};
ff_core_Map.Map_each(resolvedDependencies_.packagePaths_, ((packagePair_, packagePath_) => {
ff_core_Option.Option_each(ff_core_Map.Map_get(resolvedDependencies_.packages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), ((packageInfo_) => {
ff_compiler_Builder.processIncludes_(fs_, jsPathFile_, packagePath_, packageInfo_)
}))
}), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair);
return true
}));
if(success_) {
if(ff_core_FileSystem.FileSystem_exists(fs_, jsOutputPath_)) {
ff_core_FileSystem.FileSystem_deleteDirectory(fs_, jsOutputPath_)
};
ff_core_FileSystem.FileSystem_rename(fs_, jsPathFile_, jsOutputPath_)
}
}

export function processIncludes_(fs_, jsPathFile_, packagePath_, info_) {
ff_core_List.List_each(info_.includes_, ((include_) => {
ff_core_FileSystem.FileSystem_copy(fs_, ((packagePath_ + "/.firefly/include/") + include_.path_), ((((jsPathFile_ + "/") + ff_compiler_Syntax.PackagePair_groupName(info_.package_.packagePair_, "/")) + "/") + include_.path_))
}))
}

export function buildViaBuildSystem_(system_, fireflyPath_, mainFile_, target_) {
const resolvedDependencies_ = ff_compiler_Dependencies.process_(ff_core_NodeSystem.NodeSystem_files(system_), ff_core_NodeSystem.NodeSystem_fetch(system_), mainFile_);
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
const fixedPackagePaths_ = (ff_core_Map.Map_contains(fixedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? fixedDependencies_.packagePaths_
: ff_core_Map.Map_add(fixedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (fireflyPath_ + "/core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
if((target_ !== "browser")) {
ff_core_Core.panic_("buildViaBuildSystem is currently limited to browser target only - the restriction can be lifted")
};
ff_compiler_Builder.build_(system_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(mainFile_, ff_core_String.String_size(".ff")), (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(fixedDependencies_), ff_core_Option.None(), ".firefly/temporary", (".firefly/output/" + target_), false)
}

export function internalCreateExecutable_(self_, mainJsFile_ = ".firefly/output/executable/Main.bundle.js", outputPath_ = ".firefly/output", targets_ = ff_core_List.Link("host", ff_core_List.Empty()), assets_ = ff_core_AssetSystem.create_()) {
const fs_ = ff_compiler_Builder.internalFileSystem_(self_);
const assetOutputPath_ = (outputPath_ + "/assets");
ff_core_List.List_each(ff_core_Map.Map_pairs(assets_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ((_1) => {
{
const path_ = _1.first_;
const makeStream_ = _1.second_;
const p_ = (assetOutputPath_ + path_);
ff_core_FileSystem.FileSystem_createDirectories(fs_, ff_core_String.String_reverse(ff_core_String.String_dropWhile(ff_core_String.String_reverse(p_), ((_w1) => {
return (_w1 !== 47)
}))));
ff_core_FileSystem.FileSystem_writeStream(fs_, p_, makeStream_(), false)
return
}
}));
const json_ = `{
            "name": "main",
            "bin": {
                "firefly-main": "Main.bundle.js"
            },
            "devDependencies": {
                "pkg": "^5.7.0"
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
const packageFile_ = (outputPath_ + "/executable/package.json");
ff_core_FileSystem.FileSystem_writeText(fs_, packageFile_, json_);
ff_compiler_Builder.internalCallPkg_(self_, packageFile_, outputPath_, targets_)
}

export function internalCallPkg_(self_, packageFile_, outputPath_, targets_) {
throw new Error('Function internalCallPkg is missing on this target in sync context.');
}

export function internalFileSystem_(dummy_) {
throw new Error('Function internalFileSystem is missing on this target in sync context.');
}

export async function build_$(system_, emitTarget_, mainPackage_, mainModule_, resolvedDependencies_, compilerModulePath_, tempPath_, jsOutputPath_, printMeasurements_, $c) {
const fs_ = (await ff_core_NodeSystem.NodeSystem_files$(system_, $c));
if((await ff_core_FileSystem.FileSystem_exists$(fs_, tempPath_, $c))) {
(await ff_core_FileSystem.FileSystem_deleteDirectory$(fs_, tempPath_, $c))
};
(await ff_core_FileSystem.FileSystem_createDirectory$(fs_, tempPath_, $c));
const jsPathFile_ = (tempPath_ + "/js");
(await ff_core_FileSystem.FileSystem_createDirectories$(fs_, jsPathFile_, $c));
const success_ = (await ff_core_Core.do_$((async ($c) => {
const compiler_ = (await ff_compiler_Compiler.make_$(emitTarget_, fs_, (await ff_core_NodeSystem.NodeSystem_time$(system_, $c)), compilerModulePath_, jsPathFile_, resolvedDependencies_, $c));
(await ff_compiler_Compiler.Compiler_emit$(compiler_, mainPackage_, mainModule_, true, $c));
if(printMeasurements_) {
(await ff_compiler_Compiler.Compiler_printMeasurements$(compiler_, $c))
};
(await ff_core_Map.Map_each$(resolvedDependencies_.packagePaths_, (async (packagePair_, packagePath_, $c) => {
(await ff_core_Option.Option_each$(ff_core_Map.Map_get(resolvedDependencies_.packages_, packagePair_, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), (async (packageInfo_, $c) => {
(await ff_compiler_Builder.processIncludes_$(fs_, jsPathFile_, packagePath_, packageInfo_, $c))
}), $c))
}), $c, ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
return true
}), $c));
if(success_) {
if((await ff_core_FileSystem.FileSystem_exists$(fs_, jsOutputPath_, $c))) {
(await ff_core_FileSystem.FileSystem_deleteDirectory$(fs_, jsOutputPath_, $c))
};
(await ff_core_FileSystem.FileSystem_rename$(fs_, jsPathFile_, jsOutputPath_, $c))
}
}

export async function processIncludes_$(fs_, jsPathFile_, packagePath_, info_, $c) {
(await ff_core_List.List_each$(info_.includes_, (async (include_, $c) => {
(await ff_core_FileSystem.FileSystem_copy$(fs_, ((packagePath_ + "/.firefly/include/") + include_.path_), ((((jsPathFile_ + "/") + ff_compiler_Syntax.PackagePair_groupName(info_.package_.packagePair_, "/")) + "/") + include_.path_), $c))
}), $c))
}

export async function buildViaBuildSystem_$(system_, fireflyPath_, mainFile_, target_, $c) {
const resolvedDependencies_ = (await ff_compiler_Dependencies.process_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), (await ff_core_NodeSystem.NodeSystem_fetch$(system_, $c)), mainFile_, $c));
const fixedDependencies_ = (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, ff_core_Map.Map_add(resolvedDependencies_.packagePaths_, resolvedDependencies_.mainPackagePair_, ".", ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair), _c.singleFilePackages_)
}))(resolvedDependencies_);
const fixedPackagePaths_ = (ff_core_Map.Map_contains(fixedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair)
? fixedDependencies_.packagePaths_
: ff_core_Map.Map_add(fixedDependencies_.packagePaths_, ff_compiler_Syntax.PackagePair("ff", "core"), (fireflyPath_ + "/core"), ff_compiler_Syntax.ff_core_Ordering_Order$ff_compiler_Syntax_PackagePair));
if((target_ !== "browser")) {
ff_core_Core.panic_("buildViaBuildSystem is currently limited to browser target only - the restriction can be lifted")
};
(await ff_compiler_Builder.build_$(system_, ff_compiler_JsEmitter.EmitBrowser(), resolvedDependencies_.mainPackagePair_, ff_core_String.String_dropLast(mainFile_, ff_core_String.String_size(".ff")), (((_c) => {
return ff_compiler_Dependencies.ResolvedDependencies(_c.mainPackagePair_, _c.packages_, fixedPackagePaths_, _c.singleFilePackages_)
}))(fixedDependencies_), ff_core_Option.None(), ".firefly/temporary", (".firefly/output/" + target_), false, $c))
}

export async function internalCreateExecutable_$(self_, mainJsFile_ = ".firefly/output/executable/Main.bundle.js", outputPath_ = ".firefly/output", targets_ = ff_core_List.Link("host", ff_core_List.Empty()), assets_ = ff_core_AssetSystem.create_(), $c) {
const fs_ = (await ff_compiler_Builder.internalFileSystem_$(self_, $c));
const assetOutputPath_ = (outputPath_ + "/assets");
(await ff_core_List.List_each$(ff_core_Map.Map_pairs(assets_.files_, ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), (async (_1, $c) => {
{
const path_ = _1.first_;
const makeStream_ = _1.second_;
const p_ = (assetOutputPath_ + path_);
(await ff_core_FileSystem.FileSystem_createDirectories$(fs_, ff_core_String.String_reverse(ff_core_String.String_dropWhile(ff_core_String.String_reverse(p_), ((_w1) => {
return (_w1 !== 47)
}))), $c));
(await ff_core_FileSystem.FileSystem_writeStream$(fs_, p_, (await makeStream_($c)), false, $c))
return
}
}), $c));
const json_ = `{
            "name": "main",
            "bin": {
                "firefly-main": "Main.bundle.js"
            },
            "devDependencies": {
                "pkg": "^5.7.0"
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
const packageFile_ = (outputPath_ + "/executable/package.json");
(await ff_core_FileSystem.FileSystem_writeText$(fs_, packageFile_, json_, $c));
(await ff_compiler_Builder.internalCallPkg_$(self_, packageFile_, outputPath_, targets_, $c))
}

export async function internalCallPkg_$(self_, packageFile_, outputPath_, targets_, $c) {

        const pkg = import$0
        return await pkg.exec([
            packageFile_,
            '--out-path', outputPath_,
            '--target', ff_core_List.List_toVector(targets_).join(',')
        ])
    
}

export async function internalFileSystem_$(dummy_, $c) {

        return null;
    
}






