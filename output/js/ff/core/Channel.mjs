

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

// type Channel
export function Channel(capacity_, buffer_, readers_, writers_) {
return {capacity_, buffer_, readers_, writers_};
}

// type ChannelAction
export function ChannelAction(channel_, body_, message_, previous_) {
return {channel_, body_, message_, previous_};
}



export function readOr_(channel_, body_) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.None(), ff_core_Option.None())
}

export function writeOr_(channel_, message_, body_) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.Some(message_), ff_core_Option.None())
}

export function internalRunChannelAction_(action_, mode_) {
;
const actions_ = ff_core_List.List_toArray([]);
function findActions_(action_) {
actions_.array.push(action_);
for(const for_o = action_.previous_; for_o.Some;) {
const _w1 = for_o.value_;
findActions_(_w1)
break
}
}
findActions_(action_);
let foundPromise_ = ff_core_Option.None();
for(let for_a = actions_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const action_ = for_a[for_i];
do {
const _1 = action_.message_;
if(_1.Some) {
const message_ = _1.value_;
if((action_.channel_.readers_.size !== 0)) {
const reader_ = action_.channel_.readers_.values().next().value;
action_.channel_.readers_.delete(reader_);
reader_.resolve(message_);
foundPromise_ = ff_core_Option.Some(action_.body_($task))
break
}
}
if(_1.Some) {
const message_ = _1.value_;
if((action_.channel_.buffer_.array.length < action_.channel_.capacity_)) {
action_.channel_.buffer_.array.push(message_);
foundPromise_ = ff_core_Option.Some(action_.body_($task))
break
}
}
if(_1.Some) {

break
}
if(_1.None && (action_.channel_.buffer_.array.length !== 0)) {
ff_core_Array.Array_reverse(action_.channel_.buffer_);
const message_ = ff_core_Array.Array_pop(action_.channel_.buffer_);
ff_core_Array.Array_reverse(action_.channel_.buffer_);
foundPromise_ = ff_core_Option.Some(action_.body_(message_, $task))
break
}
if(_1.None && (action_.channel_.writers_.size !== 0)) {
const writer_ = action_.channel_.writers_.values().next().value;
action_.channel_.writers_.delete(writer_);
writer_.resolve();
foundPromise_ = ff_core_Option.Some(action_.body_(writer_.message, $task))
break
}
if(_1.None) {

break
}
} while(false);
if(!ff_core_Option.Option_isEmpty(foundPromise_)) break
};
return ff_core_Option.Option_else(ff_core_Option.Option_map(foundPromise_, ((_w1) => {
return _w1
})), (() => {
if(ff_core_Option.Option_any(mode_, ((_w1) => {
return ff_core_Option.Option_isEmpty(_w1.second_)
}))) {
const makePromise_ = ff_core_Option.Option_grab(mode_).first_;
return makePromise_()
} else {
let abort_;
let finish_;
const cleanups_ = ff_core_Array.new_();
function doCleanup_() {
for(let for_a = cleanups_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const cleanup_ = for_a[for_i];
cleanup_()
}
}
const promise_ = (new Promise(((resolve_, reject_) => {
for(const for_o = mode_; for_o.Some;) {
const m_ = for_o.value_;
finish_ = (() => {
doCleanup_();
return resolve_((() => {
return m_.first_()
}))
})
break
};
abort_ = (() => {
doCleanup_();
return reject_($task.controller_.signal.reason)
});
for(let for_a = actions_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const action_ = for_a[for_i];
{
const _1 = action_.message_;
if(_1.Some) {
const message_ = _1.value_;
const writer_ = {resolve: (() => {
doCleanup_();
return resolve_((() => {
return action_.body_($task)
}))
}), message: message_};
cleanups_.array.push((() => {
return action_.channel_.writers_.delete(writer_)
}));
action_.channel_.writers_.add(writer_)
return
}
if(_1.None) {
const reader_ = {resolve: ((m_) => {
doCleanup_();
return resolve_((() => {
return action_.body_(m_, $task)
}))
})};
cleanups_.array.push((() => {
return action_.channel_.readers_.delete(reader_)
}));
action_.channel_.readers_.add(reader_)
return
}
}
}
})));
let timeout_;
const controller_ = $task.controller_;
return ff_core_Js.withSignal_(((signal_) => {
try {
signal_.addEventListener("abort", abort_);
if((!ff_core_JsValue.JsValue_isUndefined(finish_))) {
timeout_ = setTimeout(finish_, (ff_core_Option.Option_grab(ff_core_Option.Option_grab(mode_).second_) * 1000.0))
};
const body_ = promise_;
if((!ff_core_JsValue.JsValue_isUndefined(timeout_))) {
clearTimeout(timeout_);
timeout_ = (void 0)
};
return body_()
} finally {
if((!ff_core_JsValue.JsValue_isUndefined(timeout_))) {
clearTimeout(timeout_)
};
signal_.removeEventListener("abort", abort_)
}
}))
}
}))
}

export async function readOr_$(channel_, body_, $task) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.None(), ff_core_Option.None())
}

export async function writeOr_$(channel_, message_, body_, $task) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.Some(message_), ff_core_Option.None())
}

export async function internalRunChannelAction_$(action_, mode_, $task) {
ff_core_Task.Task_throwIfAborted($task);
const actions_ = ff_core_List.List_toArray([]);
function findActions_(action_) {
actions_.array.push(action_);
for(const for_o = action_.previous_; for_o.Some;) {
const _w1 = for_o.value_;
findActions_(_w1)
break
}
}
findActions_(action_);
let foundPromise_ = ff_core_Option.None();
for(let for_a = actions_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const action_ = for_a[for_i];
do {
const _1 = action_.message_;
if(_1.Some) {
const message_ = _1.value_;
if((action_.channel_.readers_.size !== 0)) {
const reader_ = action_.channel_.readers_.values().next().value;
action_.channel_.readers_.delete(reader_);
reader_.resolve(message_);
foundPromise_ = ff_core_Option.Some(action_.body_($task))
break
}
}
if(_1.Some) {
const message_ = _1.value_;
if((action_.channel_.buffer_.array.length < action_.channel_.capacity_)) {
action_.channel_.buffer_.array.push(message_);
foundPromise_ = ff_core_Option.Some(action_.body_($task))
break
}
}
if(_1.Some) {

break
}
if(_1.None && (action_.channel_.buffer_.array.length !== 0)) {
ff_core_Array.Array_reverse(action_.channel_.buffer_);
const message_ = ff_core_Array.Array_pop(action_.channel_.buffer_);
ff_core_Array.Array_reverse(action_.channel_.buffer_);
foundPromise_ = ff_core_Option.Some(action_.body_(message_, $task))
break
}
if(_1.None && (action_.channel_.writers_.size !== 0)) {
const writer_ = action_.channel_.writers_.values().next().value;
action_.channel_.writers_.delete(writer_);
writer_.resolve();
foundPromise_ = ff_core_Option.Some(action_.body_(writer_.message, $task))
break
}
if(_1.None) {

break
}
} while(false);
if(!ff_core_Option.Option_isEmpty(foundPromise_)) break
};
return (await ff_core_Option.Option_else$((await ff_core_Option.Option_map$(foundPromise_, (async (_w1, $task) => {
return (await _w1)
}), $task)), (async ($task) => {
if(ff_core_Option.Option_any(mode_, ((_w1) => {
return ff_core_Option.Option_isEmpty(_w1.second_)
}))) {
const makePromise_ = ff_core_Option.Option_grab(mode_).first_;
return (await (await makePromise_($task)))
} else {
let abort_;
let finish_;
const cleanups_ = ff_core_Array.new_();
function doCleanup_() {
for(let for_a = cleanups_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const cleanup_ = for_a[for_i];
cleanup_()
}
}
const promise_ = (new Promise((async (a_1, a_2) => await (async (resolve_, reject_, $task) => {
for(const for_o = mode_; for_o.Some;) {
const m_ = for_o.value_;
finish_ = (async () => await (async ($task) => {
doCleanup_();
return resolve_((async () => await (async ($task) => {
return (await m_.first_($task))
})($task)))
})($task))
break
};
abort_ = (() => {
doCleanup_();
return reject_($task.controller_.signal.reason)
});
for(let for_a = actions_.array, for_i = 0, for_l = for_a.length; for_i < for_l; for_i++) {
const action_ = for_a[for_i];
{
const _1 = action_.message_;
if(_1.Some) {
const message_ = _1.value_;
const writer_ = {resolve: (() => {
doCleanup_();
return resolve_((() => {
return action_.body_($task)
}))
}), message: message_};
cleanups_.array.push((() => {
return action_.channel_.writers_.delete(writer_)
}));
action_.channel_.writers_.add(writer_)
return
}
if(_1.None) {
const reader_ = {resolve: ((m_) => {
doCleanup_();
return resolve_((() => {
return action_.body_(m_, $task)
}))
})};
cleanups_.array.push((() => {
return action_.channel_.readers_.delete(reader_)
}));
action_.channel_.readers_.add(reader_)
return
}
}
}
})(a_1, a_2, $task))));
let timeout_;
const controller_ = $task.controller_;
return (await ff_core_Js.withSignal_$((async (signal_, $task) => {
try {
signal_.addEventListener("abort", abort_);
if((!ff_core_JsValue.JsValue_isUndefined(finish_))) {
timeout_ = setTimeout(finish_, (ff_core_Option.Option_grab(ff_core_Option.Option_grab(mode_).second_) * 1000.0))
};
const body_ = (await promise_);
if((!ff_core_JsValue.JsValue_isUndefined(timeout_))) {
clearTimeout(timeout_);
timeout_ = (void 0)
};
return (await body_())
} finally {
if((!ff_core_JsValue.JsValue_isUndefined(timeout_))) {
clearTimeout(timeout_)
};
signal_.removeEventListener("abort", abort_)
}
}), $task))
}
}), $task))
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

export async function Channel_read$(self_, $task) {
return (await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.readOr_$(self_, (async (_w1, $task) => {
return _w1
}), $task)), $task))
}

export async function Channel_write$(self_, message_, $task) {
(await ff_core_Channel.ChannelAction_wait$((await ff_core_Channel.writeOr_$(self_, message_, (async ($task) => {

}), $task)), $task))
}

export function ChannelAction_readOr(self_, channel_, body_) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.None(), ff_core_Option.Some(self_))
}

export function ChannelAction_writeOr(self_, channel_, message_, body_) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.Some(message_), ff_core_Option.Some(self_))
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

export async function ChannelAction_readOr$(self_, channel_, body_, $task) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.None(), ff_core_Option.Some(self_))
}

export async function ChannelAction_writeOr$(self_, channel_, message_, body_, $task) {
return ff_core_Channel.ChannelAction(channel_, body_, ff_core_Option.Some(message_), ff_core_Option.Some(self_))
}

export async function ChannelAction_wait$(self_, $task) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.None(), $task))
}

export async function ChannelAction_timeout$(self_, duration_, body_, $task) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.Some(duration_))), $task))
}

export async function ChannelAction_immediately$(self_, body_, $task) {
return (await ff_core_Channel.internalRunChannelAction_$(self_, ff_core_Option.Some(ff_core_Pair.Pair(body_, ff_core_Option.None())), $task))
}




