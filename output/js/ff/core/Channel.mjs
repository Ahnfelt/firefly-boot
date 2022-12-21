

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

import * as ff_core_Equal from "../../ff/core/Equal.mjs"

import * as ff_core_Error from "../../ff/core/Error.mjs"

import * as ff_core_FetchSystem from "../../ff/core/FetchSystem.mjs"

import * as ff_core_FileHandle from "../../ff/core/FileHandle.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Float from "../../ff/core/Float.mjs"

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

// type Channel


// type ChannelAction




export function readOr_(channel_, body_) {
throw new Error('Function readOr is missing on this target in sync context.');
}

export function writeOr_(channel_, message_, body_) {
throw new Error('Function writeOr is missing on this target in sync context.');
}

export function internalRunChannelAction_(action_, mode_) {
throw new Error('Function internalRunChannelAction is missing on this target in sync context.');
}

export async function readOr_$(channel_, body_, $c) {
return {channel: channel_, body: body_, previous: null}
}

export async function writeOr_$(channel_, message_, body_, $c) {
return {channel: channel_, body: body_, message: message_, previous: null}
}

export async function internalRunChannelAction_$(action_, mode_, $c) {

        // If already aborted, throw.
        if($c.signal.aborted) throw new Error("Cancelled", {cause: $c.reasonWorkaround})

        // Convert the linked actions into an array.
        let actions = []
        while(action_ != null) {
            actions.push(action_)
            action_ = action_.previous
        }
        actions.reverse()

        // If any reads or writes can be done immediately, do the first one and return.
        for(let action of actions) {
            if(action.hasOwnProperty("message")) {
                if(action.channel.readers.size != 0) {
                    let reader = action.channel.readers.values().next().value
                    action.channel.readers.delete(reader)
                    reader.resolve(action.message)
                    return await action.body($c)
                } else if(action.channel.buffer.length < action.channel.capacity) {
                    action.channel.buffer.push(action.message)
                    return await action.body($c)
                }
            } else {
                if(action.channel.buffer.length != 0) {
                    return await action.body(action.channel.buffer.shift(), $c)
                } else if(action.channel.writers.size != 0) {
                    let writer = action.channel.writers.values().next().value
                    action.channel.writers.delete(writer)
                    writer.resolve()
                    return await action.body(writer.message, $c)
                }
            }
        }

        // If there's an "immediately(body)" action, do that now.
        if(mode_.value_ && mode_.value_.second_.value_ == null) return await mode_.value_.first_($c)

        // Otherwise, start waiting for one of the readers or writers (or timeout(body), or cancellation) to happen.
        let abort = null
        let finish = null
        let cleanups = []
        function doCleanup() {
            for(let cleanup of cleanups) cleanup()
        }
        let promise = new Promise((resolve, reject) => {
            if(mode_.value_) finish = () => {doCleanup(); resolve(() => mode_.value_.first_($c))}
            abort = () => {doCleanup(); reject(new Error("Cancelled", {cause: $c.reasonWorkaround}))}
            for(let action of actions) {
                if(action.hasOwnProperty("message")) {
                    let writer = {
                        resolve: () => {
                            doCleanup()
                            resolve(() => action.body($c))
                        },
                        message: action.message
                    }
                    cleanups.push(() => action.channel.writers.delete(writer))
                    action.channel.writers.add(writer)
                } else {
                    let reader = {
                        resolve: m => {
                            doCleanup()
                            resolve(() => action.body(m, $c))
                        }
                    }
                    cleanups.push(() => action.channel.readers.delete(reader))
                    action.channel.readers.add(reader)
                }
            }
        })
        let timeout = null
        try {
            $c.signal.addEventListener('abort', abort)
            if(finish != null) timeout = setTimeout(finish, mode_.value_.second_.value_ * 1000)
            let body = await promise
            if(timeout != null) { clearTimeout(timeout); timeout = null }
            return await body()
        } finally {
            if(timeout != null) clearTimeout(timeout)
            $c.signal.removeEventListener('abort', abort)
        }
    
}

export function Channel_read(self_) {
return ff_core_Channel.ChannelAction_wait(ff_core_Channel.readOr_(self_, ((_w1) => {
return _w1
})))
}

export function Channel_write(self_, message_) {
ff_core_Channel.ChannelAction_wait(ff_core_Channel.writeOr_(self_, message_, (() => {

})))
}

export async function Channel_read$(self_, $c) {
return (await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.readOr_$(self_, (async (_w1, $c) => {
return _w1
}), $c)), $c))
}

export async function Channel_write$(self_, message_, $c) {
(await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.writeOr_$(self_, message_, (async ($c) => {

}), $c)), $c))
}

export function ChannelAction_readOr(self_, channel_, body_) {
throw new Error('Function ChannelAction_readOr is missing on this target in sync context.');
}

export function ChannelAction_writeOr(self_, channel_, message_, body_) {
throw new Error('Function ChannelAction_writeOr is missing on this target in sync context.');
}

export function ChannelAction_wait(self_) {
return ff_core_Channel.internalRunChannelAction_(self_, ff_core_Option.None())
}

export function ChannelAction_timeout(self_, duration_, body_) {
return ff_core_Channel.internalRunChannelAction_(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.Some(duration_))))
}

export function ChannelAction_immediately(self_, body_) {
return ff_core_Channel.internalRunChannelAction_(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.None())))
}

export async function ChannelAction_readOr$(self_, channel_, body_, $c) {
return {channel: channel_, body: body_, previous: self_}
}

export async function ChannelAction_writeOr$(self_, channel_, message_, body_, $c) {
return {channel: channel_, body: body_, message: message_, previous: self_}
}

export async function ChannelAction_wait$(self_, $c) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.None(), $c))
}

export async function ChannelAction_timeout$(self_, duration_, body_, $c) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.Some(duration_))), $c))
}

export async function ChannelAction_immediately$(self_, body_, $c) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.None())), $c))
}




