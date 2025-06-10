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

import * as ff_core_Date from "../../ff/core/Date.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpClient from "../../ff/core/HttpClient.mjs"

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

import * as ff_core_Queue from "../../ff/core/Queue.mjs"

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

// type HttpClient


// type FetchBody


// type FetchResponse


// type FetchRedirect
const RedirectFollow$ = {RedirectFollow: true};
export function RedirectFollow() {
return RedirectFollow$;
}
const RedirectError$ = {RedirectError: true};
export function RedirectError() {
return RedirectError$;
}
const RedirectManual$ = {RedirectManual: true};
export function RedirectManual() {
return RedirectManual$;
}

// type FetchOptions
export function FetchOptions(redirect_, referrer_, integrity_, mode_, credentials_, cache_) {
return {redirect_, referrer_, integrity_, mode_, credentials_, cache_};
}

export function internalCheck_(fetchResponse_) {
if(ff_core_JsValue.JsValue_isNull(fetchResponse_.response)) {
throw (new Error("Response closed"))
};
if(((!fetchResponse_.statusChecked) && (!fetchResponse_.response.ok))) {
throw (new Error(("Unchecked HTTP status code: " + fetchResponse_.response.status)))
}
}

export async function internalCheck_$(fetchResponse_, $task) {
if(ff_core_JsValue.JsValue_isNull(fetchResponse_.response)) {
throw (new Error("Response closed"))
};
if(((!fetchResponse_.statusChecked) && (!fetchResponse_.response.ok))) {
throw (new Error(("Unchecked HTTP status code: " + fetchResponse_.response.status)))
}
}

export function HttpClient_get(self_, url_, headers_, body_) {
return ff_core_HttpClient.HttpClient_fetch(self_, "GET", url_, headers_, ff_core_Option.None(), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_)
}

export function HttpClient_post(self_, url_, headers_, payload_, body_) {
return ff_core_HttpClient.HttpClient_fetch(self_, "POST", url_, headers_, ff_core_Option.Some(payload_), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_)
}

export function HttpClient_put(self_, url_, headers_, payload_, body_) {
return ff_core_HttpClient.HttpClient_fetch(self_, "PUT", url_, headers_, ff_core_Option.Some(payload_), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_)
}

export function HttpClient_delete(self_, url_, headers_, body_) {
return ff_core_HttpClient.HttpClient_fetch(self_, "DELETE", url_, headers_, ff_core_Option.None(), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_)
}

export function HttpClient_fetch(self_, method_, url_, headers_ = [], payload_ = ff_core_Option.None(), options_ = ff_core_HttpClient.FetchOptions(), body_) {
const fetchResponse_ = {response: null, statusChecked: false};
return ff_core_Js.withSignal_(((signal_) => {
try {
const fetchOptions_ = {headers: {}, signal: signal_, method: method_};
ff_core_List.List_each(headers_, ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
fetchOptions_.headers[k_] = v_
return
}
}));
{
const if_o = payload_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.body = v_
}
};
do {
const _1 = options_.redirect_;
if(_1.RedirectError) {
fetchOptions_.redirect = "error"
break
}
if(_1.RedirectFollow) {

break
}
{
fetchOptions_.redirect = "manual"
}
} while(false);
{
const if_o = options_.referrer_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.referrer = v_
}
};
{
const if_o = options_.integrity_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.integrity = v_
}
};
{
const if_o = options_.mode_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.mode = v_
}
};
{
const if_o = options_.credentials_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.credentials = v_
}
};
{
const if_o = options_.cache_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.cache = v_
}
};
fetchResponse_.response = self_.fetch(url_, fetchOptions_);
const result_ = body_(fetchResponse_);
ff_core_HttpClient.internalCheck_(fetchResponse_);
return result_
} finally {
fetchResponse_.response = null
}
}))
}

export async function HttpClient_get$(self_, url_, headers_, body_, $task) {
return (await ff_core_HttpClient.HttpClient_fetch$(self_, "GET", url_, headers_, ff_core_Option.None(), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_, $task))
}

export async function HttpClient_post$(self_, url_, headers_, payload_, body_, $task) {
return (await ff_core_HttpClient.HttpClient_fetch$(self_, "POST", url_, headers_, ff_core_Option.Some(payload_), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_, $task))
}

export async function HttpClient_put$(self_, url_, headers_, payload_, body_, $task) {
return (await ff_core_HttpClient.HttpClient_fetch$(self_, "PUT", url_, headers_, ff_core_Option.Some(payload_), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_, $task))
}

export async function HttpClient_delete$(self_, url_, headers_, body_, $task) {
return (await ff_core_HttpClient.HttpClient_fetch$(self_, "DELETE", url_, headers_, ff_core_Option.None(), ff_core_HttpClient.FetchOptions(ff_core_HttpClient.RedirectFollow(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None(), ff_core_Option.None()), body_, $task))
}

export async function HttpClient_fetch$(self_, method_, url_, headers_ = [], payload_ = ff_core_Option.None(), options_ = ff_core_HttpClient.FetchOptions(), body_, $task) {
const fetchResponse_ = {response: null, statusChecked: false};
return (await ff_core_Js.withSignal_$((async (signal_, $task) => {
try {
const fetchOptions_ = {headers: {}, signal: signal_, method: method_};
ff_core_List.List_each(headers_, ((_1) => {
{
const k_ = _1.first_;
const v_ = _1.second_;
fetchOptions_.headers[k_] = v_
return
}
}));
{
const if_o = payload_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.body = v_
}
};
do {
const _1 = options_.redirect_;
if(_1.RedirectError) {
fetchOptions_.redirect = "error"
break
}
if(_1.RedirectFollow) {

break
}
{
fetchOptions_.redirect = "manual"
}
} while(false);
{
const if_o = options_.referrer_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.referrer = v_
}
};
{
const if_o = options_.integrity_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.integrity = v_
}
};
{
const if_o = options_.mode_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.mode = v_
}
};
{
const if_o = options_.credentials_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.credentials = v_
}
};
{
const if_o = options_.cache_
if(if_o.Some) {
const v_ = if_o.value_;
fetchOptions_.cache = v_
}
};
fetchResponse_.response = (await self_.fetch(url_, fetchOptions_));
const result_ = (await (await body_(fetchResponse_, $task)));
ff_core_HttpClient.internalCheck_(fetchResponse_);
return result_
} finally {
fetchResponse_.response = null
}
}), $task))
}

export function FetchResponse_ok(self_) {
self_.statusChecked = true;
ff_core_HttpClient.internalCheck_(self_);
return self_.response.ok
}

export function FetchResponse_status(self_) {
self_.statusChecked = true;
ff_core_HttpClient.internalCheck_(self_);
return self_.response.status
}

export function FetchResponse_statusText(self_) {
self_.statusChecked = true;
ff_core_HttpClient.internalCheck_(self_);
return self_.response.statusText
}

export function FetchResponse_header(self_, name_) {
ff_core_HttpClient.internalCheck_(self_);
const header_ = self_.response.headers.get(name_);
if((!ff_core_JsValue.JsValue_isNullOrUndefined(header_))) {
return ff_core_Option.Some(header_)
} else return ff_core_Option.None()
}

export function FetchResponse_readText(self_) {
ff_core_HttpClient.internalCheck_(self_);
return self_.response.text()
}

export function FetchResponse_readJson(self_) {
ff_core_HttpClient.internalCheck_(self_);
return self_.response.json()
}

export function FetchResponse_readBuffer(self_) {
ff_core_HttpClient.internalCheck_(self_);
return (new DataView(self_.response.arrayBuffer()))
}

export async function FetchResponse_ok$(self_, $task) {
self_.statusChecked = true;
(await ff_core_HttpClient.internalCheck_$(self_, $task));
return self_.response.ok
}

export async function FetchResponse_status$(self_, $task) {
self_.statusChecked = true;
(await ff_core_HttpClient.internalCheck_$(self_, $task));
return self_.response.status
}

export async function FetchResponse_statusText$(self_, $task) {
self_.statusChecked = true;
(await ff_core_HttpClient.internalCheck_$(self_, $task));
return self_.response.statusText
}

export async function FetchResponse_header$(self_, name_, $task) {
(await ff_core_HttpClient.internalCheck_$(self_, $task));
const header_ = self_.response.headers.get(name_);
if((!ff_core_JsValue.JsValue_isNullOrUndefined(header_))) {
return ff_core_Option.Some(header_)
} else return ff_core_Option.None()
}

export async function FetchResponse_readText$(self_, $task) {
(await ff_core_HttpClient.internalCheck_$(self_, $task));
return (await self_.response.text())
}

export async function FetchResponse_readJson$(self_, $task) {
(await ff_core_HttpClient.internalCheck_$(self_, $task));
return (await self_.response.json())
}

export async function FetchResponse_readBuffer$(self_, $task) {
(await ff_core_HttpClient.internalCheck_$(self_, $task));
return (new DataView((await self_.response.arrayBuffer())))
}


//# sourceMappingURL=HttpClient.mjs.map