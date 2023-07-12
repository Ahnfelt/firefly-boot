

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

import * as ff_core_Serializable from "../../ff/core/Serializable.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Buffer




export function make_(size_, shared_ = false) {
return new DataView(shared_ ? new SharedArrayBuffer(size_) : new ArrayBuffer(size_))
}

export function fromByteArray_(array_) {
return new DataView(new Uint8Array(array_).buffer)
}

export function fromBufferArray_(array_) {

        let length = 0
        for(let b of array_) length += b.byteLength
        const arrayBuffer = new ArrayBuffer(length);
        const result = new Uint8Array(arrayBuffer)
        let offset = 0
        for(let b of array_) {
            result.set(new Uint8Array(b.buffer, b.byteOffset, b.byteLength), offset)
            offset += b.byteLength
        }
        return new DataView(arrayBuffer)
    
}

export function fromHex_(hex_) {

        const hexValues = hexString.match(/.{1,2}/g) || []
        const numbers = hexValues.map(value => parseInt(value, 16))
        return new DataView(new Uint8Array(numbers).buffer)
    
}

export function fromBase64_(base64_) {

        const binaryString = atob(base64_)
        const dataView = new DataView(new ArrayBuffer(binaryString.length))
        dataView.setUint8(binaryString.split('').map(char => char.charCodeAt(0)))
        return dataView
    
}

export async function make_$(size_, shared_ = false, $task) {
throw new Error('Function make is missing on this target in async context.');
}

export async function fromByteArray_$(array_, $task) {
throw new Error('Function fromByteArray is missing on this target in async context.');
}

export async function fromBufferArray_$(array_, $task) {
throw new Error('Function fromBufferArray is missing on this target in async context.');
}

export async function fromHex_$(hex_, $task) {
throw new Error('Function fromHex is missing on this target in async context.');
}

export async function fromBase64_$(base64_, $task) {
throw new Error('Function fromBase64 is missing on this target in async context.');
}

export function Buffer_grabUint64(self_, byteOffset_, littleEndian_ = true) {

            const high = self_.getUint32(byteOffset_ + (littleEndian_ ? 4 : 0), littleEndian_)
            const low = self_.getUint32(byteOffset_ + (littleEndian_ ? 0 : 4), littleEndian_)
            const result = (high * 0x100000000) + low
            if(!Number.isSafeInteger(result)) throw 'grabUint64 out of range (consider grabBigUint64)'
            return result
        
}

export function Buffer_grabInt64(self_, byteOffset_, littleEndian_ = true) {

            const high = self_.getInt32(byteOffset_ + (littleEndian_ ? 4 : 0), littleEndian_)
            const low = self_.getUint32(byteOffset_ + (littleEndian_ ? 0 : 4), littleEndian_)
            const result = (high * 0x100000000) + low
            if(!Number.isSafeInteger(result)) throw 'grabInt64 out of range (consider grabBigInt64)'
            return result
        
}

export function Buffer_grabFloat32(self_, byteOffset_, littleEndian_ = true) {
return self_.getFloat32(byteOffset_, littleEndian_)
}

export function Buffer_grabFloat64(self_, byteOffset_, littleEndian_ = true) {
return self_.getFloat64(byteOffset_, littleEndian_)
}

export function Buffer_grabInt16(self_, byteOffset_, littleEndian_ = true) {
return self_.getInt16(byteOffset_, littleEndian_)
}

export function Buffer_grabInt32(self_, byteOffset_, littleEndian_ = true) {
return self_.getInt32(byteOffset_, littleEndian_)
}

export function Buffer_grabInt8(self_, byteOffset_) {
return self_.getInt8(byteOffset_)
}

export function Buffer_grabUint16(self_, byteOffset_, littleEndian_ = true) {
return self_.getUint16(byteOffset_, littleEndian_)
}

export function Buffer_grabUint32(self_, byteOffset_, littleEndian_ = true) {
return self_.getUint32(byteOffset_, littleEndian_)
}

export function Buffer_grabUint8(self_, byteOffset_) {
return self_.getUint8(byteOffset_)
}

export function Buffer_setUint64(self_, byteOffset_, value_, littleEndian_ = true) {

            self_.setUint32(byteOffset_ + (littleEndian_ ? 4 : 0), (value_ >>> 16) >>> 16, littleEndian_)
            self_.setUint32(byteOffset_ + (littleEndian_ ? 0 : 4), value_ & 0xffffffff, littleEndian_)
        
}

export function Buffer_setInt64(self_, byteOffset_, value_, littleEndian_ = true) {

            self_.setUint32(byteOffset_ + (littleEndian_ ? 4 : 0), (value_ >> 16) >> 16, littleEndian_)
            self_.setUint32(byteOffset_ + (littleEndian_ ? 0 : 4), value_ & 0xffffffff, littleEndian_)
        
}

export function Buffer_setFloat32(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setFloat32(byteOffset_, value_, littleEndian_)
}

export function Buffer_setFloat64(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setFloat64(byteOffset_, value_, littleEndian_)
}

export function Buffer_setInt16(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setInt16(byteOffset_, value_, littleEndian_)
}

export function Buffer_setInt32(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setInt32(byteOffset_, value_, littleEndian_)
}

export function Buffer_setInt8(self_, byteOffset_, value_) {
self_.setInt8(byteOffset_, value_)
}

export function Buffer_setUint16(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setUint16(byteOffset_, value_, littleEndian_)
}

export function Buffer_setUint32(self_, byteOffset_, value_, littleEndian_ = true) {
self_.setUint32(byteOffset_, value_, littleEndian_)
}

export function Buffer_setUint8(self_, byteOffset_, value_) {
self_.setUint8(byteOffset_, value_)
}

export function Buffer_setAll(self_, byteOffset_, buffer_) {

            const sourceBuffer = new Uint8Array(buffer_.buffer, buffer_.byteOffset, buffer_.byteLength)
            const targetBuffer = new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength)
            targetBuffer.set(sourceBuffer, byteOffset_)
        
}

export function Buffer_size(self_) {
return self_.byteLength
}

export function Buffer_shared(self_) {
return typeof SharedArrayBuffer !== 'undefined' && self_.buffer instanceof SharedArrayBuffer
}

export function Buffer_view(self_, begin_, end_) {
return new DataView(self_.buffer, self_.byteOffset + begin_, end_ - begin_)
}

export function Buffer_copy(self_) {
return new DataView(self_.buffer.slice(self_.byteOffset, self_.byteOffset + self_.byteLength))
}

export function Buffer_toString(self_, encoding_ = "utf8") {

            if(encoding_ === "utf8") {
                if(typeof TextDecoder.ffSingleton === 'undefined') TextDecoder.ffSingleton = new TextDecoder()
                return TextDecoder.ffSingleton.decode(self_)
            }
            return new TextDecoder().decode(self_)
        
}

export function Buffer_toByteArray(self_) {
return [...new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength)]
}

export function Buffer_toHex(self_) {

            let hex = ''
            for (let i = 0; i < self_.byteLength; i++) {
                hex += self_.getUint8(i).toString(16).padStart(2, '0')
            }
            return hex
        
}

export function Buffer_toBase64(self_) {

            const view = new Uint8Array(self_.buffer, self_.byteOffset, self_.byteLength);
            return btoa(String.fromCharCode(...view));
        
}

export async function Buffer_grabUint64$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabUint64 is missing on this target in async context.');
}

export async function Buffer_grabInt64$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabInt64 is missing on this target in async context.');
}

export async function Buffer_grabFloat32$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabFloat32 is missing on this target in async context.');
}

export async function Buffer_grabFloat64$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabFloat64 is missing on this target in async context.');
}

export async function Buffer_grabInt16$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabInt16 is missing on this target in async context.');
}

export async function Buffer_grabInt32$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabInt32 is missing on this target in async context.');
}

export async function Buffer_grabInt8$(self_, byteOffset_, $task) {
throw new Error('Function Buffer_grabInt8 is missing on this target in async context.');
}

export async function Buffer_grabUint16$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabUint16 is missing on this target in async context.');
}

export async function Buffer_grabUint32$(self_, byteOffset_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_grabUint32 is missing on this target in async context.');
}

export async function Buffer_grabUint8$(self_, byteOffset_, $task) {
throw new Error('Function Buffer_grabUint8 is missing on this target in async context.');
}

export async function Buffer_setUint64$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setUint64 is missing on this target in async context.');
}

export async function Buffer_setInt64$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setInt64 is missing on this target in async context.');
}

export async function Buffer_setFloat32$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setFloat32 is missing on this target in async context.');
}

export async function Buffer_setFloat64$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setFloat64 is missing on this target in async context.');
}

export async function Buffer_setInt16$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setInt16 is missing on this target in async context.');
}

export async function Buffer_setInt32$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setInt32 is missing on this target in async context.');
}

export async function Buffer_setInt8$(self_, byteOffset_, value_, $task) {
throw new Error('Function Buffer_setInt8 is missing on this target in async context.');
}

export async function Buffer_setUint16$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setUint16 is missing on this target in async context.');
}

export async function Buffer_setUint32$(self_, byteOffset_, value_, littleEndian_ = true, $task) {
throw new Error('Function Buffer_setUint32 is missing on this target in async context.');
}

export async function Buffer_setUint8$(self_, byteOffset_, value_, $task) {
throw new Error('Function Buffer_setUint8 is missing on this target in async context.');
}

export async function Buffer_setAll$(self_, byteOffset_, buffer_, $task) {
throw new Error('Function Buffer_setAll is missing on this target in async context.');
}

export async function Buffer_size$(self_, $task) {
throw new Error('Function Buffer_size is missing on this target in async context.');
}

export async function Buffer_shared$(self_, $task) {
throw new Error('Function Buffer_shared is missing on this target in async context.');
}

export async function Buffer_view$(self_, begin_, end_, $task) {
throw new Error('Function Buffer_view is missing on this target in async context.');
}

export async function Buffer_copy$(self_, $task) {
throw new Error('Function Buffer_copy is missing on this target in async context.');
}

export async function Buffer_toString$(self_, encoding_ = "utf8", $task) {
throw new Error('Function Buffer_toString is missing on this target in async context.');
}

export async function Buffer_toByteArray$(self_, $task) {
throw new Error('Function Buffer_toByteArray is missing on this target in async context.');
}

export async function Buffer_toHex$(self_, $task) {
throw new Error('Function Buffer_toHex is missing on this target in async context.');
}

export async function Buffer_toBase64$(self_, $task) {
throw new Error('Function Buffer_toBase64 is missing on this target in async context.');
}

export const ff_core_Show_Show$ff_core_Buffer_Buffer = {
show_(value_) {
return ((`Buffer.fromHex("` + ff_core_Buffer.Buffer_toHex(value_)) + `")`)
},
async show_$(value_, $task) {
return ((`Buffer.fromHex("` + ff_core_Buffer.Buffer_toHex(value_)) + `")`)
}
};

export const ff_core_Equal_Equal$ff_core_Buffer_Buffer = {
equals_(x_, y_) {

            if(x_.buffer.byteLength !== y_.buffer.byteLength) return false
            if(x_.buffer === y_.buffer) return true
            for(let i = 0; i + 4 <= x_.buffer.byteLength; i += 4) {
                if(x_.getInt32(i) !== y_.getInt32(i)) return false
            }
            for(; i < x_.buffer.byteLength; i++) {
                if(x_.getUint8(i) !== y_.getUint8(i)) return false
            }
            return true
        
},
async equals_$(x_, y_, $task) {
throw new Error('Function equals is missing on this target in async context.');
}
};

export const ff_core_Ordering_Order$ff_core_Buffer_Buffer = {
compare_(x_, y_) {

            if(x_.buffer === y_.buffer) return ff_core_Ordering.OrderingSame()
            const minLength = Math.min(x_.buffer.byteLength, y_.buffer.byteLength)
            for(let i = 0; i < minLength; i++) {
                if(x_.getUint8(i) !== y_.getUint8(i)) {
                    return ff_core_Ordering.fromInt_(x_.getUint8(i) - y_.getUint8(i))
                }
            }
            return ff_core_Ordering.fromInt_(x_.buffer.byteLength - y_.buffer.byteLength)
        
},
async compare_$(x_, y_, $task) {
throw new Error('Function compare is missing on this target in async context.');
}
};


