import * as import$0 from 'http';

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_AssetSystem from "../../ff/core/AssetSystem.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_BrowserSystem from "../../ff/core/BrowserSystem.mjs"

import * as ff_core_Buffer from "../../ff/core/Buffer.mjs"

import * as ff_core_BuildSystem from "../../ff/core/BuildSystem.mjs"

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

// type HttpRequest


// type HttpResponse




export function listen_(system_, host_, port_, handler_) {
throw new Error('Function listen is missing on this target in sync context.');
}

export async function listen_$(system_, host_, port_, handler_, $c) {

        const http = import$0
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

export function HttpRequest_method(self_) {
throw new Error('Function HttpRequest_method is missing on this target in sync context.');
}

export function HttpRequest_path(self_) {
throw new Error('Function HttpRequest_path is missing on this target in sync context.');
}

export function HttpRequest_parameters(self_) {
throw new Error('Function HttpRequest_parameters is missing on this target in sync context.');
}

export function HttpRequest_parameter(self_, name_) {
throw new Error('Function HttpRequest_parameter is missing on this target in sync context.');
}

export function HttpRequest_header(self_, name_) {
throw new Error('Function HttpRequest_header is missing on this target in sync context.');
}

export function HttpRequest_encoding(self_) {
throw new Error('Function HttpRequest_encoding is missing on this target in sync context.');
}

export function HttpRequest_readText(self_, encoding_ = ff_core_Option.None()) {
return ff_core_Stream.Stream_toString(ff_core_HttpServer.HttpRequest_readStream(self_), ff_core_Option.Option_else(encoding_, (() => {
return ff_core_Option.Option_else(ff_core_HttpServer.HttpRequest_encoding(self_), (() => {
return "utf8"
}))
})))
}

export function HttpRequest_readStream(self_) {
throw new Error('Function HttpRequest_readStream is missing on this target in sync context.');
}

export async function HttpRequest_method$(self_, $c) {
return self_.method
}

export async function HttpRequest_path$(self_, $c) {

            let i = self_.url.indexOf('?')
            return i === -1 ? self_.url : self_.url.slice(0, i)
        
}

export async function HttpRequest_parameters$(self_, $c) {

            let i = self_.url.indexOf('?')
            return i === -1 ? ff_core_Option.None() : ff_core_Option.Some(self_.url.slice(i + 1))
        
}

export async function HttpRequest_parameter$(self_, name_, $c) {

            let i = self_.url.indexOf('?')
            if(i === -1) return ff_core_Option.None()
            let ps = self_.url.slice(i + 1).split('&')
            let n = name_ + '='
            let r = ps.find(p => p === name_ || p.startsWith(n))
            if(r == null) return ff_core_Option.None()
            return ff_core_Option.Some(r.slice(name_.length + 1))
        
}

export async function HttpRequest_header$(self_, name_, $c) {

            let header = self_.headers[name_.toLowerCase()]
            if(header == null || header.length == 0) ff_core_Option.None()
            return ff_core_Option.Some(Array.isArray(header) ? header[0] : header)
        
}

export async function HttpRequest_encoding$(self_, $c) {

            return self_.readableEncoding ? ff_core_Option.Some(self_.readableEncoding) : ff_core_Option.None()
        
}

export async function HttpRequest_readText$(self_, encoding_ = ff_core_Option.None(), $c) {
return (await ff_core_Stream.Stream_toString$((await ff_core_HttpServer.HttpRequest_readStream$(self_, $c)), (await ff_core_Option.Option_else$(encoding_, (async ($c) => {
return ff_core_Option.Option_else((await ff_core_HttpServer.HttpRequest_encoding$(self_, $c)), (() => {
return "utf8"
}))
}), $c)), $c))
}

export async function HttpRequest_readStream$(self_, $c) {

            const http = import$0
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
                    readable.destroy()
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
throw new Error('Function HttpResponse_setHeader is missing on this target in sync context.');
}

export function HttpResponse_writeStatus(self_, code_, message_) {
throw new Error('Function HttpResponse_writeStatus is missing on this target in sync context.');
}

export function HttpResponse_write(self_, buffer_) {
throw new Error('Function HttpResponse_write is missing on this target in sync context.');
}

export function HttpResponse_writeText(self_, text_, encoding_ = "utf8") {
throw new Error('Function HttpResponse_writeText is missing on this target in sync context.');
}

export async function HttpResponse_setHeader$(self_, name_, values_, $c) {
self_.setHeader(name_, ff_core_List.List_toArray(values_))
}

export async function HttpResponse_writeStatus$(self_, code_, message_, $c) {
self_.writeHead(code_, message_.value_)
}

export async function HttpResponse_write$(self_, buffer_, $c) {

            const http = import$0
            if(!self_.write(buffer_)) {
                const abort = () => {
                    $c.signal.addEventListener('abort', abort())
                    reject(new Error("Cancelled", {cause: $c.reasonWorkaround}))
                }
                await new Promise((resolve, reject) => {
                    $c.signal.addEventListener('abort', abort)
                    self_.once('drain', () => {
                        $c.signal.removeEventListener('abort', abort)
                        resolve()
                    })
                })
            }
        
}

export async function HttpResponse_writeText$(self_, text_, encoding_ = "utf8", $c) {

            const http = import$0
            if(!self_.write(text_, encoding_)) {
                const abort = () => {
                    $c.signal.addEventListener('abort', abort())
                    reject(new Error("Cancelled", {cause: $c.reasonWorkaround}))
                }
                await new Promise((resolve, reject) => {
                    $c.signal.addEventListener('abort', abort)
                    self_.once('drain', () => {
                        $c.signal.removeEventListener('abort', abort)
                        resolve()
                    })
                })
            }
        
}




