

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

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

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type FetchSystem


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

export function bodyString_(body_) {
return body_
}

export function bodyBuffer_(body_) {
return body_
}

export async function bodyString_$(body_, $c) {
return ff_core_Core.panic_("magic")
}

export async function bodyBuffer_$(body_, $c) {
return ff_core_Core.panic_("magic")
}

export function FetchSystem_fetch(self_, url_, method_ = "GET", headers_ = ff_core_FetchSystem.emptyList_, body_ = ff_core_Option.None(), redirect_ = ff_core_FetchSystem.RedirectFollow(), referrer_ = ff_core_Option.None(), integrity_ = ff_core_Option.None(), mode_ = ff_core_Option.None(), credentials_ = ff_core_Option.None(), cache_ = ff_core_Option.None(), throw_ = true) {
return ff_core_Core.panic_("magic")
}

export async function FetchSystem_fetch$(self_, url_, method_ = "GET", headers_ = ff_core_FetchSystem.emptyList_, body_ = ff_core_Option.None(), redirect_ = ff_core_FetchSystem.RedirectFollow(), referrer_ = ff_core_Option.None(), integrity_ = ff_core_Option.None(), mode_ = ff_core_Option.None(), credentials_ = ff_core_Option.None(), cache_ = ff_core_Option.None(), throw_ = true, $c) {

            const options = {headers: {}, signal: $c.signal}
            options.method = method_
            ff_core_List.List_each(headers_, pair => {options.headers[pair.key_] = pair.value_})
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
        
}

export function FetchResponse_ok(self_) {
return ff_core_Core.panic_("magic")
}

export function FetchResponse_status(self_) {
return ff_core_Core.panic_("magic")
}

export function FetchResponse_statusText(self_) {
return ff_core_Core.panic_("magic")
}

export function FetchResponse_header(self_, name_) {
return ff_core_Core.panic_("magic")
}

export function FetchResponse_readText(self_) {
return ff_core_Core.panic_("magic")
}

export async function FetchResponse_ok$(self_, $c) {
return self_.ok
}

export async function FetchResponse_status$(self_, $c) {
return self_.status
}

export async function FetchResponse_statusText$(self_, $c) {
return self_.statusText
}

export async function FetchResponse_header$(self_, name_, $c) {

            const header = self_.headers.get(name_)
            return header != null
                ? ff_core_Option.Some(header)
                : ff_core_Option.None()
        
}

export async function FetchResponse_readText$(self_, $c) {
return await self_.text()
}




