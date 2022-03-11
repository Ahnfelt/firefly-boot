import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_Channel from "../../ff/core/Channel.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_Duration from "../../ff/core/Duration.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

import * as ff_core_HttpServer from "../../ff/core/HttpServer.mjs"

import * as ff_core_Instant from "../../ff/core/Instant.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

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

// type HttpRequest


// type HttpResponse


// type Url




export function jsImportHack_() {
return ff_core_Core.panic_("magic")
}

export function listen_(system_, host_, port_, handler_) {
ff_core_Core.panic_("magic")
}

export function jsImportHack() {} import * as http from 'http'

export async function listen_$(system_, host_, port_, handler_, $c) {

        if($c.signal.aborted) throw new Error("Cancelled", {cause: $c.reasonWorkaround})
        const server = http.createServer(async (req, res) => {
            try {
                await ff_core_TaskSystem.TaskSystem_scope$(null, async (scope, $c) => {
                    await handler_(req, res, $c)
                }, false, $c)
                if(!res.headersSent) res.writeHead(200, 'OK')
            } finally {
                if(!res.headersSent) res.writeHead(500, 'Internal Server Error')
                if(!res.writableEnded) res.end()
            }
        })
        await new Promise((resolve, reject) => {
            server.listen(port_, host_, error => {if(error != null) reject(error); else resolve()})
        })
        await new Promise((resolve, reject) => {
            const abort = () => {
                $c.signal.removeEventListener('abort', abort)
                server.close(() => reject(new Error("Cancelled", {cause: $c.reasonWorkaround})))
            }
            $c.signal.addEventListener('abort', abort)
        })
    
}

export function Url_hash(self_) {
return self_.hash
}

export function Url_host(self_) {
return self_.hostname
}

export function Url_origin(self_) {
return self_.origin
}

export function Url_password(self_) {
return self_.password
}

export function Url_path(self_) {
return self_.pathname
}

export function Url_port(self_) {
return self_.port
}

export function Url_protocol(self_) {
return self_.protocol.replace(':', '')
}

export function Url_search(self_) {
return self_.search
}

export function Url_username(self_) {
return self_.username
}

export function Url_toString(self_) {
return self_.href
}

export async function Url_hash$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_host$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_origin$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_password$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_path$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_port$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_protocol$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_search$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_username$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export async function Url_toString$(self_, $c) {
return ff_core_Core.panic_("magic")
}

export function HttpRequest_url(self_) {
return ff_core_Core.panic_("magic")
}

export function HttpRequest_method(self_) {
return ff_core_Core.panic_("magic")
}

export function HttpRequest_header(self_, name_) {
return ff_core_Core.panic_("magic")
}

export function HttpRequest_bodyStream(self_) {
return ff_core_Core.panic_("magic")
}

export async function HttpRequest_url$(self_, $c) {

            return new URL(self_.url, `http://${self_.headers.host}`)
        
}

export async function HttpRequest_method$(self_, $c) {

            return self_.method
        
}

export async function HttpRequest_header$(self_, name_, $c) {

            let header = self_.headers[name_.toLowerCase()]
            if(header == null || header.length == 0) ff_core_Option.None()
            return ff_core_Option.Some(Array.isArray(header) ? header[0] : header)
        
}

export async function HttpRequest_bodyStream$(self_, $c) {

            return $c => {
                if($c.signal.aborted) throw new Error("Cancelled", {cause: $c.reasonWorkaround})
                if(self_.streamWorkaround != null) throw new Error("Can't open HttpRequest body stream twice")
                self_.streamWorkaround = true
                const readable = self_
                let doResolve = null
                let doReject = null
                let seenError = null
                readable.on('readable', () => {
                    if(doResolve != null) doResolve()
                })
                readable.on('error', error => {
                    seenError = error
                    if(doReject != null) doReject(error)
                })
                readable.on('close', () => {
                    if(doResolve != null) doResolve()
                })
                const abort = () => {
                    $c.signal.removeEventListener('abort', abort)
                    readable.close()
                }
                $c.signal.addEventListener('abort', abort)
                return ff_core_Iterator.Iterator(async function go($c) {
                    let buffer = readable.read()
                    if(buffer != null) return ff_core_Option.Some(buffer)
                    if(seenError != null) throw seenError
                    if(readable.destroyed) return ff_core_Option.None()
                    let promise = new Promise((resolve, reject) => {
                        doResolve = () => {doResolve = null; doReject = null; resolve()}
                        doReject = error => {doResolve = null; doReject = null; reject(error)}
                    }).then(() => go($c))
                    return await promise
                }, abort)
            }
        
}

export function HttpResponse_setHeader(self_, name_, values_) {
ff_core_Core.panic_("magic")
}

export function HttpResponse_writeStatus(self_, code_, message_) {
ff_core_Core.panic_("magic")
}

export function HttpResponse_write(self_, buffer_) {
ff_core_Core.panic_("magic")
}

export function HttpResponse_writeText(self_, text_, encoding_ = "utf8") {
ff_core_Core.panic_("magic")
}

export async function HttpResponse_setHeader$(self_, name_, values_, $c) {
self_.setHeader(name_, ff_core_List.List_toArray(values_))
}

export async function HttpResponse_writeStatus$(self_, code_, message_, $c) {
self_.writeHead(code_, message_.value_)
}

export async function HttpResponse_write$(self_, buffer_, $c) {

            if(!self_.write(buffer_, encoding_)) {
                const abort = () => {
                    $c.signal.addEventListener('abort', abort())
                    reject(new Error("Cancelled", {cause: $c.reasonWorkaround}))
                }
                await new Promise((resolve, reject) => {
                    $c.signal.addEventListener('abort', abort)
                    writeable.once('drain', () => {
                        $c.signal.removeEventListener('abort', abort)
                        resolve()
                    })
                })
            }
        
}

export async function HttpResponse_writeText$(self_, text_, encoding_ = "utf8", $c) {

            if(!self_.write(text_, encoding_)) {
                const abort = () => {
                    $c.signal.addEventListener('abort', abort())
                    reject(new Error("Cancelled", {cause: $c.reasonWorkaround}))
                }
                await new Promise((resolve, reject) => {
                    $c.signal.addEventListener('abort', abort)
                    writeable.once('drain', () => {
                        $c.signal.removeEventListener('abort', abort)
                        resolve()
                    })
                })
            }
        
}




