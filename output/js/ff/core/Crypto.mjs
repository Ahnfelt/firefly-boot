

import * as ff_core_Any from "../../ff/core/Any.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Atomic from "../../ff/core/Atomic.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Crypto from "../../ff/core/Crypto.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_IntMap from "../../ff/core/IntMap.mjs"

import * as ff_core_Js from "../../ff/core/Js.mjs"

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

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Crypto




export function internalHashPassword_(system_, salt_, password_, iterations_) {
;
const keyMaterial_ = system_.subtle.importKey("raw", password_, {name: "PBKDF2"}, false, ["deriveBits"]);
const hashBuffer_ = system_.subtle.deriveBits({name: "PBKDF2", salt: salt_, iterations: iterations_, hash: "SHA-256"}, keyMaterial_, 256);
return (new DataView(hashBuffer_))
}

export async function internalHashPassword_$(system_, salt_, password_, iterations_, $task) {
ff_core_Task.Task_throwIfAborted($task);
const keyMaterial_ = (await system_.subtle.importKey("raw", password_, {name: "PBKDF2"}, false, ["deriveBits"]));
const hashBuffer_ = (await system_.subtle.deriveBits({name: "PBKDF2", salt: salt_, iterations: iterations_, hash: "SHA-256"}, keyMaterial_, 256));
return (new DataView(hashBuffer_))
}

export function Crypto_randomUuid(self_) {
return self_.randomUUID()
}

export function Crypto_randomBuffer(self_, size_) {
const buffer_ = ff_core_Buffer.new_(size_, false);
ff_core_Crypto.Crypto_randomizeBuffer(self_, buffer_);
return buffer_
}

export function Crypto_randomizeBuffer(self_, buffer_) {
self_.getRandomValues((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength)))
}

export function Crypto_hmacSha256(self_, key_, buffer_) {
;
const cryptoKey_ = self_.subtle.importKey("raw", key_, {name: "HMAC", hash: {name: "SHA-256"}}, false, ["sign"]);
const signature_ = self_.subtle.sign("HMAC", cryptoKey_, buffer_);
return (new DataView(signature_))
}

export function Crypto_sha256(self_, buffer_) {
;
const hash_ = self_.subtle.digest("SHA-256", buffer_);
return (new DataView(hash_))
}

export function Crypto_hashPassword(self_, password_, iterations_ = 600000) {
const salt_ = ff_core_Crypto.Crypto_randomBuffer(self_, 16);
const hash_ = ff_core_Crypto.internalHashPassword_(self_, salt_, ff_core_String.String_toBuffer(password_), iterations_);
return ((((("$pbkdf2-sha256-hex$" + iterations_) + "$") + ff_core_Buffer.Buffer_toHex(salt_)) + "$") + ff_core_Buffer.Buffer_toHex(hash_))
}

export function Crypto_checkPassword(self_, password_, passwordHash_) {
{
const _1 = ff_core_String.String_split(passwordHash_, 36);
if(_1.length === 5 && _1[0] === "" && _1[1] === "pbkdf2-sha256-hex") {
const iterationsText_ = _1[2];
const saltText_ = _1[3];
const hashText_ = _1[4];
const _guard1 = ff_core_String.String_getInt(iterationsText_);
if(_guard1.Some) {
const iterations_ = _guard1.value_;
const computedHash_ = ff_core_Crypto.internalHashPassword_(self_, ff_core_Buffer.fromHex_(saltText_), ff_core_String.String_toBuffer(password_), iterations_);
const hash_ = ff_core_Buffer.fromHex_(hashText_);
return ff_core_Crypto.Crypto_constantTimeEquals(self_, computedHash_, hash_)
}
}
{
return false
}
}
}

export function Crypto_constantTimeEquals(self_, buffer1_, buffer2_) {
if((ff_core_Buffer.Buffer_size(buffer1_) !== ff_core_Buffer.Buffer_size(buffer2_))) {
return false
} else {
let v_ = 0;
let i_ = 0;
while((i_ < ff_core_Buffer.Buffer_size(buffer1_))) {
v_ = ff_core_Int.Int_bitOr(v_, ff_core_Int.Int_bitXor(ff_core_Buffer.Buffer_grabUint8(buffer1_, i_), ff_core_Buffer.Buffer_grabUint8(buffer2_, i_)));
i_ += 1
};
return (v_ === 0)
}
}

export async function Crypto_randomUuid$(self_, $task) {
return self_.randomUUID()
}

export async function Crypto_randomBuffer$(self_, size_, $task) {
const buffer_ = ff_core_Buffer.new_(size_, false);
(await ff_core_Crypto.Crypto_randomizeBuffer$(self_, buffer_, $task));
return buffer_
}

export async function Crypto_randomizeBuffer$(self_, buffer_, $task) {
self_.getRandomValues((new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength)))
}

export async function Crypto_hmacSha256$(self_, key_, buffer_, $task) {
ff_core_Task.Task_throwIfAborted($task);
const cryptoKey_ = (await self_.subtle.importKey("raw", key_, {name: "HMAC", hash: {name: "SHA-256"}}, false, ["sign"]));
const signature_ = (await self_.subtle.sign("HMAC", cryptoKey_, buffer_));
return (new DataView(signature_))
}

export async function Crypto_sha256$(self_, buffer_, $task) {
ff_core_Task.Task_throwIfAborted($task);
const hash_ = (await self_.subtle.digest("SHA-256", buffer_));
return (new DataView(hash_))
}

export async function Crypto_hashPassword$(self_, password_, iterations_ = 600000, $task) {
const salt_ = (await ff_core_Crypto.Crypto_randomBuffer$(self_, 16, $task));
const hash_ = (await ff_core_Crypto.internalHashPassword_$(self_, salt_, ff_core_String.String_toBuffer(password_), iterations_, $task));
return ((((("$pbkdf2-sha256-hex$" + iterations_) + "$") + ff_core_Buffer.Buffer_toHex(salt_)) + "$") + ff_core_Buffer.Buffer_toHex(hash_))
}

export async function Crypto_checkPassword$(self_, password_, passwordHash_, $task) {
{
const _1 = ff_core_String.String_split(passwordHash_, 36);
if(_1.length === 5 && _1[0] === "" && _1[1] === "pbkdf2-sha256-hex") {
const iterationsText_ = _1[2];
const saltText_ = _1[3];
const hashText_ = _1[4];
const _guard1 = ff_core_String.String_getInt(iterationsText_);
if(_guard1.Some) {
const iterations_ = _guard1.value_;
const computedHash_ = (await ff_core_Crypto.internalHashPassword_$(self_, ff_core_Buffer.fromHex_(saltText_), ff_core_String.String_toBuffer(password_), iterations_, $task));
const hash_ = ff_core_Buffer.fromHex_(hashText_);
return (await ff_core_Crypto.Crypto_constantTimeEquals$(self_, computedHash_, hash_, $task))
}
}
{
return false
}
}
}

export async function Crypto_constantTimeEquals$(self_, buffer1_, buffer2_, $task) {
if((ff_core_Buffer.Buffer_size(buffer1_) !== ff_core_Buffer.Buffer_size(buffer2_))) {
return false
} else {
let v_ = 0;
let i_ = 0;
while((i_ < ff_core_Buffer.Buffer_size(buffer1_))) {
v_ = ff_core_Int.Int_bitOr(v_, ff_core_Int.Int_bitXor(ff_core_Buffer.Buffer_grabUint8(buffer1_, i_), ff_core_Buffer.Buffer_grabUint8(buffer2_, i_)));
i_ += 1
};
return (v_ === 0)
}
}




