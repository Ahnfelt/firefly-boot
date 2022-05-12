

import * as ff_compiler_Main from "../../ff/compiler/Main.mjs"

import * as ff_compiler_Builder from "../../ff/compiler/Builder.mjs"

import * as ff_compiler_Compiler from "../../ff/compiler/Compiler.mjs"

import * as ff_compiler_Parser from "../../ff/compiler/Parser.mjs"

import * as ff_compiler_Resolver from "../../ff/compiler/Resolver.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

import * as ff_compiler_Tokenizer from "../../ff/compiler/Tokenizer.mjs"

import * as ff_compiler_Unification from "../../ff/compiler/Unification.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

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

// type MainCommand
const BootstrapCommand$ = {BootstrapCommand: true};
export function BootstrapCommand() {
return BootstrapCommand$;
}
export function RunCommand(mainPath_) {
return {RunCommand: true, mainPath_};
}
export function BuildCommand(mainPath_, platform_) {
return {BuildCommand: true, mainPath_, platform_};
}

// type BuildPlatform
const BrowserPlatform$ = {BrowserPlatform: true};
export function BrowserPlatform() {
return BrowserPlatform$;
}
const LinuxPlatform$ = {LinuxPlatform: true};
export function LinuxPlatform() {
return LinuxPlatform$;
}
const WindowsPlatform$ = {WindowsPlatform: true};
export function WindowsPlatform() {
return WindowsPlatform$;
}
const MacosPlatform$ = {MacosPlatform: true};
export function MacosPlatform() {
return MacosPlatform$;
}



export function main_(system_) {
let arguments_ = ff_core_NodeSystem.NodeSystem_arguments(system_);
function consumeArgument_() {
const first_ = ff_core_List.List_first(arguments_);
arguments_ = ff_core_List.List_dropFirst(arguments_, 1);
return first_
}
const fireflyPath_ = ff_core_Option.Option_expect(consumeArgument_());
const parseCommand_ = ((_1) => {
{
const s_ = _1;
const _guard1 = ff_core_String.String_endsWith(s_, ".ff");
if(_guard1) {
return ff_compiler_Main.RunCommand(s_)
return
}
}
{
if(_1 == "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
return
}
}
{
if(_1 == "run") {
return ff_compiler_Main.RunCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3))
return
}
}
{
if(_1 == "browser") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.BrowserPlatform())
return
}
}
{
if(_1 == "linux") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.LinuxPlatform())
return
}
}
{
if(_1 == "windows") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.WindowsPlatform())
return
}
}
{
if(_1 == "macos") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.MacosPlatform())
return
}
}
{
const s_ = _1;
return ff_core_Core.panic_((("Unknown command '" + s_) + "'"))
return
}
});
const command_ = parseCommand_(ff_core_Option.Option_expect(consumeArgument_()));
ff_core_Option.Option_each(ff_core_List.List_first(arguments_), ((argument_) => {
ff_core_Core.panic_(("Unknown argument: " + argument_))
}));
function prepareFireflyDirectory_() {
if((!ff_core_FileSystem.FileSystem_exists(ff_core_NodeSystem.NodeSystem_files(system_), ".firefly/output"))) {
if((!ff_core_FileSystem.FileSystem_exists(ff_core_NodeSystem.NodeSystem_files(system_), ".firefly"))) {
ff_core_FileSystem.FileSystem_createDirectory(ff_core_NodeSystem.NodeSystem_files(system_), ".firefly")
};
ff_core_FileSystem.FileSystem_createDirectory(ff_core_NodeSystem.NodeSystem_files(system_), ".firefly/output")
}
}
function buildScript_(mainFile_, target_) {
ff_compiler_Builder.build_(system_, target_, "script:script", mainFile_, ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair("script:script", "."), ff_core_List.Link(ff_core_Pair.Pair("ff:core", (fireflyPath_ + "/core")), ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ".firefly/temporary", (".firefly/output/" + target_), false)
}
for(;;) {
const _1 = command_;
{
if(_1.RunCommand) {
const mainFile_ = _1.mainPath_;
prepareFireflyDirectory_();
if(ff_compiler_Main.detectBrowserMain_(ff_core_NodeSystem.NodeSystem_files(system_), ff_core_Pair.Pair("script", "script"), mainFile_)) {
buildScript_(mainFile_, "browser")
};
buildScript_(mainFile_, "node")
break
}
}
{
if(_1.BootstrapCommand) {
ff_compiler_Builder.build_(system_, "node", "ff:compiler", "Main", ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair("ff:compiler", "compiler"), ff_core_List.Link(ff_core_Pair.Pair("ff:core", "core"), ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), "output/temporary", "output/js", true)
break
}
}
{
ff_core_Core.panic_("Only the 'bootstrap' and 'run' commands are supported for now")
break
}
}
}

export function detectBrowserMain_(fs_, packagePair_, mainFile_) {
const file_ = (mainFile_ + ".ff");
const code_ = ff_core_FileSystem.FileSystem_readText(fs_, file_);
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const parser_ = ff_compiler_Parser.make_(ff_core_Pair.Pair("script", "script"), file_, tokens_, false);
const module_ = ff_compiler_Parser.Parser_parseModule(parser_);
return ff_core_List.List_any(module_.functions_, ((definition_) => {
return (((definition_.signature_.name_ == "browserMain") || (definition_.signature_.name_ == "main")) && (((_1) => {
{
if(_1.Link) {
const p_ = _1.head_;
if(_1.tail_.Empty) {
const _guard1 = p_.valueType_;
if(_guard1.TConstructor) {
if(_guard1.name_ == "BrowserSystem") {
return true
return
}
}
}
}
}
{
return false
return
}
}))(definition_.signature_.parameters_))
}))
}

export async function main_$(system_, $c) {
let arguments_ = (await ff_core_NodeSystem.NodeSystem_arguments$(system_, $c));
function consumeArgument_() {
const first_ = ff_core_List.List_first(arguments_);
arguments_ = ff_core_List.List_dropFirst(arguments_, 1);
return first_
}
const fireflyPath_ = ff_core_Option.Option_expect(consumeArgument_());
const parseCommand_ = ((_1) => {
{
const s_ = _1;
const _guard1 = ff_core_String.String_endsWith(s_, ".ff");
if(_guard1) {
return ff_compiler_Main.RunCommand(s_)
return
}
}
{
if(_1 == "bootstrap") {
return ff_compiler_Main.BootstrapCommand()
return
}
}
{
if(_1 == "run") {
return ff_compiler_Main.RunCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3))
return
}
}
{
if(_1 == "browser") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.BrowserPlatform())
return
}
}
{
if(_1 == "linux") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.LinuxPlatform())
return
}
}
{
if(_1 == "windows") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.WindowsPlatform())
return
}
}
{
if(_1 == "macos") {
return ff_compiler_Main.BuildCommand(ff_core_String.String_dropLast(ff_core_Option.Option_else(consumeArgument_(), (() => {
return "Main.ff"
})), 3), ff_compiler_Main.MacosPlatform())
return
}
}
{
const s_ = _1;
return ff_core_Core.panic_((("Unknown command '" + s_) + "'"))
return
}
});
const command_ = parseCommand_(ff_core_Option.Option_expect(consumeArgument_()));
ff_core_Option.Option_each(ff_core_List.List_first(arguments_), ((argument_) => {
ff_core_Core.panic_(("Unknown argument: " + argument_))
}));
async function prepareFireflyDirectory_$($c) {
if((!(await ff_core_FileSystem.FileSystem_exists$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), ".firefly/output", $c)))) {
if((!(await ff_core_FileSystem.FileSystem_exists$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), ".firefly", $c)))) {
(await ff_core_FileSystem.FileSystem_createDirectory$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), ".firefly", $c))
};
(await ff_core_FileSystem.FileSystem_createDirectory$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), ".firefly/output", $c))
}
}
async function buildScript_$(mainFile_, target_, $c) {
(await ff_compiler_Builder.build_$(system_, target_, "script:script", mainFile_, ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair("script:script", "."), ff_core_List.Link(ff_core_Pair.Pair("ff:core", (fireflyPath_ + "/core")), ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), ".firefly/temporary", (".firefly/output/" + target_), false, $c))
}
for(;;) {
const _1 = command_;
{
if(_1.RunCommand) {
const mainFile_ = _1.mainPath_;
(await prepareFireflyDirectory_$($c));
if((await ff_compiler_Main.detectBrowserMain_$((await ff_core_NodeSystem.NodeSystem_files$(system_, $c)), ff_core_Pair.Pair("script", "script"), mainFile_, $c))) {
(await buildScript_$(mainFile_, "browser", $c))
};
(await buildScript_$(mainFile_, "node", $c))
break
}
}
{
if(_1.BootstrapCommand) {
(await ff_compiler_Builder.build_$(system_, "node", "ff:compiler", "Main", ff_core_List.List_toMap(ff_core_List.Link(ff_core_Pair.Pair("ff:compiler", "compiler"), ff_core_List.Link(ff_core_Pair.Pair("ff:core", "core"), ff_core_List.Empty())), ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String), "output/temporary", "output/js", true, $c))
break
}
}
{
ff_core_Core.panic_("Only the 'bootstrap' and 'run' commands are supported for now")
break
}
}
}

export async function detectBrowserMain_$(fs_, packagePair_, mainFile_, $c) {
const file_ = (mainFile_ + ".ff");
const code_ = (await ff_core_FileSystem.FileSystem_readText$(fs_, file_, $c));
const tokens_ = ff_compiler_Tokenizer.tokenize_(file_, code_);
const parser_ = ff_compiler_Parser.make_(ff_core_Pair.Pair("script", "script"), file_, tokens_, false);
const module_ = ff_compiler_Parser.Parser_parseModule(parser_);
return ff_core_List.List_any(module_.functions_, ((definition_) => {
return (((definition_.signature_.name_ == "browserMain") || (definition_.signature_.name_ == "main")) && (((_1) => {
{
if(_1.Link) {
const p_ = _1.head_;
if(_1.tail_.Empty) {
const _guard1 = p_.valueType_;
if(_guard1.TConstructor) {
if(_guard1.name_ == "BrowserSystem") {
return true
return
}
}
}
}
}
{
return false
return
}
}))(definition_.signature_.parameters_))
}))
}





queueMicrotask(async () => {
const controller = new AbortController()
controller.promises = new Set()
let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)
try {
await main_$({array_: typeof process !== 'undefined' ? process.argv.slice(2) : []}, controller)
} finally {
controller.abort()
clearInterval(interval)
}
})
