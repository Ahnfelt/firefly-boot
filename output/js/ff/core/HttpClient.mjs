

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

export const emptyList_ = ff_core_List.Empty();

export function bodyText_(body_) {
return body_
}

export function bodyBuffer_(body_) {
return body_
}

export async function bodyText_$(body_, $task) {
return body_
}

export async function bodyBuffer_$(body_, $task) {
return body_
}

export function HttpClient_fetch(self_, url_, method_ = "GET", headers_ = ff_core_HttpClient.emptyList_, body_ = ff_core_Option.None(), redirect_ = ff_core_HttpClient.RedirectFollow(), referrer_ = ff_core_Option.None(), integrity_ = ff_core_Option.None(), mode_ = ff_core_Option.None(), credentials_ = ff_core_Option.None(), cache_ = ff_core_Option.None(), throw_ = true) {
throw new Error('Function HttpClient_fetch is missing on this target in sync context.');
}

export async function HttpClient_fetch$(self_, url_, method_ = "GET", headers_ = ff_core_HttpClient.emptyList_, body_ = ff_core_Option.None(), redirect_ = ff_core_HttpClient.RedirectFollow(), referrer_ = ff_core_Option.None(), integrity_ = ff_core_Option.None(), mode_ = ff_core_Option.None(), credentials_ = ff_core_Option.None(), cache_ = ff_core_Option.None(), throw_ = true, $task) {

            try {
                const options = {headers: {}, signal: $task.controller.signal}
                options.method = method_
                ff_core_List.List_each(headers_, pair => {options.headers[pair.first_] = pair.second_})
                if(body_.value_) options.body = body_.value_
                if(redirect_.RedirectError) options.redirect = "error"
                else if(redirect_.RedirectManual) options.redirect = "manual"
                if(referrer_.value_) options.referrer = referrer_.value_
                if(integrity_.value_) options.integrity = integrity_.value_
                if(mode_.value_) options.mode = mode_.value_
                if(credentials_.value_) options.credentials = credentials_.value_
                if(cache_.value_) options.cache = cache_.value_
                let result = await fetch(url_, options)
                if(throw_ && !result.ok) throw new Error("Unexpected HTTP status code: " + result.status)
                return result
            } finally {
                if($task.controller.signal.aborted) $task.controller = new AbortController()
            }
        
}

export function FetchResponse_ok(self_) {
throw new Error('Function FetchResponse_ok is missing on this target in sync context.');
}

export function FetchResponse_status(self_) {
throw new Error('Function FetchResponse_status is missing on this target in sync context.');
}

export function FetchResponse_statusText(self_) {
throw new Error('Function FetchResponse_statusText is missing on this target in sync context.');
}

export function FetchResponse_header(self_, name_) {
throw new Error('Function FetchResponse_header is missing on this target in sync context.');
}

export function FetchResponse_readText(self_) {
throw new Error('Function FetchResponse_readText is missing on this target in sync context.');
}

export function FetchResponse_readJson(self_) {
throw new Error('Function FetchResponse_readJson is missing on this target in sync context.');
}

export function FetchResponse_readBuffer(self_) {
throw new Error('Function FetchResponse_readBuffer is missing on this target in sync context.');
}

export async function FetchResponse_ok$(self_, $task) {
return self_.ok
}

export async function FetchResponse_status$(self_, $task) {
return self_.status
}

export async function FetchResponse_statusText$(self_, $task) {
return self_.statusText
}

export async function FetchResponse_header$(self_, name_, $task) {

            const header = self_.headers.get(name_)
            return header != null
                ? ff_core_Option.Some(header)
                : ff_core_Option.None()
        
}

export async function FetchResponse_readText$(self_, $task) {
return await self_.text()
}

export async function FetchResponse_readJson$(self_, $task) {
return await self_.json()
}

export async function FetchResponse_readBuffer$(self_, $task) {
return new DataView(await self_.arrayBuffer())
}




