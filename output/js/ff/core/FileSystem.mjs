import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type FileSystem








export function jsFileSystemHack() {} import * as fs from 'fs';

export function FileSystem_readText(self_, file_) {
return fs.readFileSync(file_, {encoding: 'UTF-8'})
}

export function FileSystem_writeText(self_, file_, text_) {
fs.writeFileSync(file_, text_, {encoding: 'UTF-8'})
}

export function FileSystem_list(self_, path_) {
return ff_core_Array.Array_toList(fs.readdirSync(path_).map(f => path_ + '/' + f))
}

export function FileSystem_exists(self_, path_) {
return fs.existsSync(path_)
}

export function FileSystem_isDirectory(self_, path_) {
return fs.lstatSync(path_).isDirectory()
}

export function FileSystem_createDirectory(self_, path_) {
fs.mkdirSync(path_)
}

export function FileSystem_createDirectories(self_, path_) {
fs.mkdirSync(path_, {recursive: true})
}

export function FileSystem_delete(self_, path_) {
try { fs.rmdirSync(path_) } catch(_) { fs.rmSync(path_) }
}

export function FileSystem_rename(self_, fromPath_, toPath_) {
fs.renameSync(fromPath_, toPath_)
}

export function FileSystem_getAbsolutePath(self_, path_) {
return path.resolve(path_)
}

export function FileSystem_directoryName(self_, path_) {
return ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), 1))
}

export function FileSystem_baseName(self_, path_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})))
}

export function FileSystem_prefixName(self_, path_) {
return ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
}))), ((_w1) => {
return (_w1 != 46)
}))
}

export function FileSystem_suffixName(self_, path_) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), ((_w1) => {
return (_w1 != 46)
})))
}

export function jsFileSystemHack$() {} import * as fsPromises from 'fs/promises'; import * as path from 'path';

export async function FileSystem_readText$(self_, file_, $signal) {
return await fsPromises.readFile(file_, {encoding: 'UTF-8', signal: $signal})
}

export async function FileSystem_writeText$(self_, file_, text_, $signal) {
await fsPromises.writeFile(file_, text_, {encoding: 'UTF-8', signal: $signal})
}

export async function FileSystem_list$(self_, path_, $signal) {
return ff_core_Array.Array_toList((await fsPromises.readdir(path_)).map(f => path_ + '/' + f))
}

export async function FileSystem_exists$(self_, path_, $signal) {
return await fsPromises.access(path_).then(() => true).catch(() => false)
}

export async function FileSystem_isDirectory$(self_, path_, $signal) {
return (await fsPromises.lstat(path_)).isDirectory()
}

export async function FileSystem_createDirectory$(self_, path_, $signal) {
await fsPromises.mkdir(path_)
}

export async function FileSystem_createDirectories$(self_, path_, $signal) {
await fsPromises.mkdir(path_, {recursive: true})
}

export async function FileSystem_delete$(self_, path_, $signal) {
try { await fsPromises.rmdir(path_) } catch(_) { await fsPromises.rm(path_) }
}

export async function FileSystem_rename$(self_, fromPath_, toPath_, $signal) {
await fsPromises.rename(fromPath_, toPath_)
}

export async function FileSystem_getAbsolutePath$(self_, path_, $signal) {
return path.resolve(path_)
}

export async function FileSystem_directoryName$(self_, path_, $signal) {
return ff_core_String.String_reverse(ff_core_String.String_dropFirst(ff_core_String.String_dropWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), 1))
}

export async function FileSystem_baseName$(self_, path_, $signal) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})))
}

export async function FileSystem_prefixName$(self_, path_, $signal) {
return ff_core_String.String_takeWhile(ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
}))), ((_w1) => {
return (_w1 != 46)
}))
}

export async function FileSystem_suffixName$(self_, path_, $signal) {
return ff_core_String.String_reverse(ff_core_String.String_takeWhile(ff_core_String.String_takeWhile(ff_core_String.String_reverse(path_), ((_w1) => {
return (_w1 != 47)
})), ((_w1) => {
return (_w1 != 46)
})))
}




