

import * as ff_core_Any from "../../ff/core/Any.mjs"

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

// type Ordering
const OrderingBefore$ = {OrderingBefore: true};
export function OrderingBefore() {
return OrderingBefore$;
}
const OrderingSame$ = {OrderingSame: true};
export function OrderingSame() {
return OrderingSame$;
}
const OrderingAfter$ = {OrderingAfter: true};
export function OrderingAfter() {
return OrderingAfter$;
}



export function before_(x_, y_, ff_core_Ordering_Order$T) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) === ff_core_Ordering.OrderingBefore())
}

export function notBefore_(x_, y_, ff_core_Ordering_Order$T) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) !== ff_core_Ordering.OrderingBefore())
}

export function after_(x_, y_, ff_core_Ordering_Order$T) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) === ff_core_Ordering.OrderingAfter())
}

export function notAfter_(x_, y_, ff_core_Ordering_Order$T) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) !== ff_core_Ordering.OrderingAfter())
}

export function reverse_(compare_) {
return ((x_, y_) => {
{
const _1 = compare_(x_, y_);
{
if(_1.OrderingBefore) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(_1.OrderingSame) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
})
}

export function pair_(compareFirst_, compareSecond_) {
return ((x_, y_) => {
{
const _1 = compareFirst_(x_.first_, y_.first_);
{
if(_1.OrderingSame) {
return compareSecond_(x_.second_, y_.second_)
return
}
}
{
const ordering_ = _1;
return ordering_
return
}
}
})
}

export function fromInt_(order_) {
if((order_ < 0)) {
return ff_core_Ordering.OrderingBefore()
} else if((order_ === 0)) {
return ff_core_Ordering.OrderingSame()
} else {
return ff_core_Ordering.OrderingAfter()
}
}

export function fromFloat_(order_) {
if((order_ < 0.0)) {
return ff_core_Ordering.OrderingBefore()
} else if((order_ === 0.0)) {
return ff_core_Ordering.OrderingSame()
} else {
return ff_core_Ordering.OrderingAfter()
}
}

export function fromLessThan_(lessThan_) {
return ((_1, _2) => {
{
const x_ = _1;
const y_ = _2;
const _guard1 = lessThan_(x_, y_);
if(_guard1) {
return ff_core_Ordering.OrderingBefore()
return
}
}
{
const x_ = _1;
const y_ = _2;
const _guard1 = lessThan_(y_, x_);
if(_guard1) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
return ff_core_Ordering.OrderingSame()
return
}
})
}

export async function before_$(x_, y_, ff_core_Ordering_Order$T, $task) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) === ff_core_Ordering.OrderingBefore())
}

export async function notBefore_$(x_, y_, ff_core_Ordering_Order$T, $task) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) !== ff_core_Ordering.OrderingBefore())
}

export async function after_$(x_, y_, ff_core_Ordering_Order$T, $task) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) === ff_core_Ordering.OrderingAfter())
}

export async function notAfter_$(x_, y_, ff_core_Ordering_Order$T, $task) {
return (ff_core_Ordering_Order$T.compare_(x_, y_) !== ff_core_Ordering.OrderingAfter())
}

export async function reverse_$(compare_, $task) {
return (async (x_, y_, $task) => {
{
const _1 = (await compare_(x_, y_, $task));
{
if(_1.OrderingBefore) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(_1.OrderingSame) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
})
}

export async function pair_$(compareFirst_, compareSecond_, $task) {
return (async (x_, y_, $task) => {
{
const _1 = (await compareFirst_(x_.first_, y_.first_, $task));
{
if(_1.OrderingSame) {
return (await compareSecond_(x_.second_, y_.second_, $task))
return
}
}
{
const ordering_ = _1;
return ordering_
return
}
}
})
}

export async function fromInt_$(order_, $task) {
if((order_ < 0)) {
return ff_core_Ordering.OrderingBefore()
} else if((order_ === 0)) {
return ff_core_Ordering.OrderingSame()
} else {
return ff_core_Ordering.OrderingAfter()
}
}

export async function fromFloat_$(order_, $task) {
if((order_ < 0.0)) {
return ff_core_Ordering.OrderingBefore()
} else if((order_ === 0.0)) {
return ff_core_Ordering.OrderingSame()
} else {
return ff_core_Ordering.OrderingAfter()
}
}

export async function fromLessThan_$(lessThan_, $task) {
return (async (_1, _2, $task) => {
{
const x_ = _1;
const y_ = _2;
const _guard1 = (await lessThan_(x_, y_, $task));
if(_guard1) {
return ff_core_Ordering.OrderingBefore()
return
}
}
{
const x_ = _1;
const y_ = _2;
const _guard1 = (await lessThan_(y_, x_, $task));
if(_guard1) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
return ff_core_Ordering.OrderingSame()
return
}
})
}

export function Ordering_toInt(self_) {
{
const _1 = self_;
{
if(_1.OrderingBefore) {
return (-1)
return
}
}
{
if(_1.OrderingSame) {
return 0
return
}
}
{
if(_1.OrderingAfter) {
return 1
return
}
}
}
}

export function Ordering_reverse(self_) {
{
const _1 = self_;
{
if(_1.OrderingBefore) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(_1.OrderingSame) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
}

export async function Ordering_toInt$(self_, $task) {
{
const _1 = self_;
{
if(_1.OrderingBefore) {
return (-1)
return
}
}
{
if(_1.OrderingSame) {
return 0
return
}
}
{
if(_1.OrderingAfter) {
return 1
return
}
}
}
}

export async function Ordering_reverse$(self_, $task) {
{
const _1 = self_;
{
if(_1.OrderingBefore) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(_1.OrderingSame) {
return ff_core_Ordering.OrderingSame()
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
}

export const ff_core_Ordering_Order$ff_core_Nothing_Nothing = {
compare_(x_, y_) {
return ff_core_Ordering.OrderingSame()
},
async compare_$(x_, y_, $task) {
return ff_core_Ordering.OrderingSame()
}
};

export const ff_core_Ordering_Order$ff_core_Bool_Bool = {
compare_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
if(!x_a) {
if(y_a) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
{
if(x_a) {
if(!y_a) {
return ff_core_Ordering.OrderingAfter()
return
}
}
}
{
return ff_core_Ordering.OrderingSame()
return
}
}
},
async compare_$(x_, y_, $task) {
{
const x_a = x_;
const y_a = y_;
{
if(!x_a) {
if(y_a) {
return ff_core_Ordering.OrderingBefore()
return
}
}
}
{
if(x_a) {
if(!y_a) {
return ff_core_Ordering.OrderingAfter()
return
}
}
}
{
return ff_core_Ordering.OrderingSame()
return
}
}
}
};

export const ff_core_Ordering_Order$ff_core_Char_Char = {
compare_(x_, y_) {
return ff_core_Ordering.fromInt_((x_ - y_))
},
async compare_$(x_, y_, $task) {
return ff_core_Ordering.fromInt_((x_ - y_))
}
};

export const ff_core_Ordering_Order$ff_core_Int_Int = {
compare_(x_, y_) {
return ff_core_Ordering.fromInt_((x_ - y_))
},
async compare_$(x_, y_, $task) {
return ff_core_Ordering.fromInt_((x_ - y_))
}
};

export const ff_core_Ordering_Order$ff_core_Float_Float = {
compare_(x_, y_) {
return ff_core_Ordering.fromFloat_((x_ - y_))
},
async compare_$(x_, y_, $task) {
return ff_core_Ordering.fromFloat_((x_ - y_))
}
};

export const ff_core_Ordering_Order$ff_core_String_String = {
compare_(x_, y_) {

            if(x_ < y_) {
                return ff_core_Ordering.OrderingBefore()
            } else if(x_ > y_) {
                return ff_core_Ordering.OrderingAfter()
            } else {
                return ff_core_Ordering.OrderingSame()
            }
        
},
async compare_$(x_, y_, $task) {
throw new Error('Function compare is missing on this target in async context.');
}
};

export function ff_core_Ordering_Order$ff_core_Pair_Pair(ff_core_Ordering_Order$A, ff_core_Ordering_Order$B) { return {
compare_(x_, y_) {
{
const _1 = ff_core_Ordering_Order$A.compare_(x_.first_, y_.first_);
{
if(_1.OrderingSame) {
return ff_core_Ordering_Order$B.compare_(x_.second_, y_.second_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
},
async compare_$(x_, y_, $task) {
{
const _1 = ff_core_Ordering_Order$A.compare_(x_.first_, y_.first_);
{
if(_1.OrderingSame) {
return ff_core_Ordering_Order$B.compare_(x_.second_, y_.second_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
}
}}

export function ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$T) { return {
compare_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
if(x_a.length === 0) {
if(y_a.length === 0) {
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.length === 0) {
return ff_core_Ordering.OrderingBefore()
return
}
}
{
if(y_a.length === 0) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(x_a.length !== 0) {
const a_ = x_a[0];
const as_ = x_a.slice(1);
if(y_a.length !== 0) {
const b_ = y_a[0];
const bs_ = y_a.slice(1);
{
const _1 = ff_core_Ordering_Order$T.compare_(a_, b_);
{
if(_1.OrderingSame) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$T).compare_(as_, bs_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
return
}
}
}
}
},
async compare_$(x_, y_, $task) {
{
const x_a = x_;
const y_a = y_;
{
if(x_a.length === 0) {
if(y_a.length === 0) {
return ff_core_Ordering.OrderingSame()
return
}
}
}
{
if(x_a.length === 0) {
return ff_core_Ordering.OrderingBefore()
return
}
}
{
if(y_a.length === 0) {
return ff_core_Ordering.OrderingAfter()
return
}
}
{
if(x_a.length !== 0) {
const a_ = x_a[0];
const as_ = x_a.slice(1);
if(y_a.length !== 0) {
const b_ = y_a[0];
const bs_ = y_a.slice(1);
{
const _1 = ff_core_Ordering_Order$T.compare_(a_, b_);
{
if(_1.OrderingSame) {
return ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_core_Ordering_Order$T).compare_(as_, bs_)
return
}
}
{
const o_ = _1;
return o_
return
}
}
return
}
}
}
}
}
}}

export const ff_core_Equal_Equal$ff_core_Ordering_Ordering = {
equals_(x_, y_) {
{
const x_a = x_;
const y_a = y_;
{
if(x_a.OrderingBefore) {
if(y_a.OrderingBefore) {
return true
return
}
}
}
{
if(x_a.OrderingSame) {
if(y_a.OrderingSame) {
return true
return
}
}
}
{
if(x_a.OrderingAfter) {
if(y_a.OrderingAfter) {
return true
return
}
}
}
{
return false
return
}
}
},
async equals_$(x_, y_, $task) {
{
const x_a = x_;
const y_a = y_;
{
if(x_a.OrderingBefore) {
if(y_a.OrderingBefore) {
return true
return
}
}
}
{
if(x_a.OrderingSame) {
if(y_a.OrderingSame) {
return true
return
}
}
}
{
if(x_a.OrderingAfter) {
if(y_a.OrderingAfter) {
return true
return
}
}
}
{
return false
return
}
}
}
};


