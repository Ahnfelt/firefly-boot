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

// type Channel


// type ChannelAction




export function readOr_(channel_, body_) {
return ff_core_Core.panic_("magic")
}

export function writeOr_(channel_, message_, body_) {
return ff_core_Core.panic_("magic")
}

export function internalRunChannelAction_(action_, mode_) {
return ff_core_Core.panic_("magic")
}

export async function readOr_$(channel_, body_, $controller) {
return {channel: channel_, body: body_, previous: null}
}

export async function writeOr_$(channel_, message_, body_, $controller) {
return {channel: channel_, body: body_, message: message_, previous: null}
}

export async function internalRunChannelAction_$(action_, mode_, $controller) {

        if($controller.signal.aborted) throw new Error("Cancelled", {cause: $controller.reasonWorkaround})
        let actions = []
        while(action_ != null) {
            actions.push(action_)
            action_ = action_.previous
        }
        actions.reverse()
        for(let action of actions) {
            if(action.hasOwnProperty("message")) {
                if(action.channel.readers.size != 0) {
                    let reader = action.channel.readers.values().next().value
                    action.channel.readers.delete(reader)
                    reader.resolve(action.message)
                    return await action.body($controller)
                } else if(action.channel.buffer.length < action.channel.capacity) {
                    action.channel.buffer.push(action.message)
                    return await action.body($controller)
                }
            } else {
                if(action.channel.buffer.length != 0) {
                    return await action.body(action.channel.buffer.shift(), $controller)
                } else if(action.channel.writers.size != 0) {
                    let writer = action.channel.writers.values().next().value
                    action.channel.writers.delete(writer)
                    writer.resolve()
                    return await action.body(writer.message, $controller)
                }
            }
        }
        if(mode_.value_ && mode_.value_.second_.value_ == null) return await mode_.value_.first_($controller)
        let abort = null
        let finish = null
        let cleanups = []
        function doCleanup() {
            for(let cleanup of cleanups) cleanup()
        }
        let promise = new Promise((resolve, reject) => {
            if(mode_.value_) finish = () => {doCleanup(); resolve(() => mode_.value_.first_($controller))}
            abort = () => {doCleanup(); reject(new Error("Cancelled", {cause: $controller.reasonWorkaround}))}
            for(let action of actions) {
                if(action.hasOwnProperty("message")) {
                    let writer = {
                        resolve: () => {
                            doCleanup()
                            resolve(() => action.body($controller))
                        },
                        message: action.message
                    }
                    cleanups.push(() => action.channel.writers.delete(writer))
                    action.channel.writers.add(writer)
                } else {
                    let reader = {
                        resolve: m => {
                            doCleanup()
                            resolve(() => action.body(m, $controller))
                        }
                    }
                    cleanups.push(() => action.channel.readers.delete(reader))
                    action.channel.readers.add(reader)
                }
            }
        })
        let timeout = null
        try {
            $controller.signal.addEventListener('abort', abort)
            if(finish != null) timeout = setTimeout(finish, mode_.value_.second_.value_)
            let body = await promise
            if(timeout != null) { clearTimeout(timeout); timeout = null }
            return await body()
        } finally {
            if(timeout != null) clearTimeout(timeout)
            $controller.signal.removeEventListener('abort', abort)
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

export async function Channel_read$(self_, $controller) {
return (await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.readOr_$(self_, (async (_w1, $controller) => {
return _w1
}), $controller)), $controller))
}

export async function Channel_write$(self_, message_, $controller) {
(await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.writeOr_$(self_, message_, (async ($controller) => {

}), $controller)), $controller))
}

export function ChannelAction_readOr(self_, channel_, body_) {
return ff_core_Core.panic_("magic")
}

export function ChannelAction_writeOr(self_, channel_, message_, body_) {
return ff_core_Core.panic_("magic")
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

export async function ChannelAction_readOr$(self_, channel_, body_, $controller) {
return {channel: channel_, body: body_, previous: self_}
}

export async function ChannelAction_writeOr$(self_, channel_, message_, body_, $controller) {
return {channel: channel_, body: body_, message: message_, previous: self_}
}

export async function ChannelAction_wait$(self_, $controller) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.None(), $controller))
}

export async function ChannelAction_timeout$(self_, duration_, body_, $controller) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.Some(duration_))), $controller))
}

export async function ChannelAction_immediately$(self_, body_, $controller) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.None())), $controller))
}




