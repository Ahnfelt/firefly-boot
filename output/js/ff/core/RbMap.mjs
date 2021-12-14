import * as ff_core_RbMap from "../../ff/core/RbMap.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

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

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type RbMap
const RbLeaf$ = {RbLeaf: true};
export function RbLeaf() {
return RbLeaf$;
}
export function RbNode(isRed_, left_, key_, value_, right_) {
return {RbNode: true, isRed_, left_, key_, value_, right_};
}





export function RbMap_size(self_) {
{
const _1 = self_
{
if(_1.RbLeaf) {
return 0
return
}
}
{
if(_1.RbNode) {
const l_ = _1.left_
const r_ = _1.right_
return ((ff_core_RbMap.RbMap_size(l_) + 1) + ff_core_RbMap.RbMap_size(r_))
return
}
}
}
}

export function RbMap_pairs(self_) {
{
const _1 = self_
{
if(_1.RbLeaf) {
return ff_core_List.Empty()
return
}
}
{
if(_1.RbNode) {
const l_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const r_ = _1.right_
return ff_core_List.List_addAll(ff_core_List.List_addAll(ff_core_RbMap.RbMap_pairs(l_), ff_core_List.Link(ff_core_Pair.Pair(k_, v_), ff_core_List.Empty())), ff_core_RbMap.RbMap_pairs(r_))
return
}
}
}
}

export function RbMap_each(self_, body_) {
{
const _1 = self_
{
if(_1.RbLeaf) {

return
}
}
{
if(_1.RbNode) {
const l_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const r_ = _1.right_
ff_core_RbMap.RbMap_each(l_, body_)
body_(k_, v_)
ff_core_RbMap.RbMap_each(r_, body_)
return
}
}
}
}

export function RbMap_get(self_, key_) {
_tailcall: for(;;) {
{
const _1 = self_
{
if(_1.RbLeaf) {
return ff_core_Option.None()
return
}
}
{
if(_1.RbNode) {
const l_ = _1.left_
const k_ = _1.key_
if(ff_core_Core.magicLess_(key_, k_)) {
{
const self_r_ = l_
const key_r_ = key_
self_ = self_r_
key_ = key_r_
continue _tailcall
}
return
}
}
}
{
if(_1.RbNode) {
const k_ = _1.key_
const r_ = _1.right_
if(ff_core_Core.magicLess_(k_, key_)) {
{
const self_r_ = r_
const key_r_ = key_
self_ = self_r_
key_ = key_r_
continue _tailcall
}
return
}
}
}
{
if(_1.RbNode) {
const v_ = _1.value_
return ff_core_Option.Some(v_)
return
}
}
}
return
}
}

export function RbMap_add(self_, key_, value_) {
function go_(self_) {
{
const _1 = self_
{
if(_1.RbLeaf) {
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbLeaf(), key_, value_, ff_core_RbMap.RbLeaf())
return
}
}
{
if(_1.RbNode) {
const c_ = _1.isRed_
const l_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const r_ = _1.right_
if(ff_core_Core.magicLess_(key_, k_)) {
return ff_core_RbMap.RbMap_balance(ff_core_RbMap.RbNode(c_, go_(l_), k_, v_, r_))
return
}
}
}
{
if(_1.RbNode) {
const c_ = _1.isRed_
const l_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const r_ = _1.right_
if(ff_core_Core.magicLess_(k_, key_)) {
return ff_core_RbMap.RbMap_balance(ff_core_RbMap.RbNode(c_, l_, k_, v_, go_(r_)))
return
}
}
}
{
if(_1.RbNode) {
const c_ = _1.isRed_
const l_ = _1.left_
const r_ = _1.right_
return ff_core_RbMap.RbNode(c_, l_, key_, value_, r_)
return
}
}
}
}
{
const _1 = go_(self_)
{
if(_1.RbNode) {
if(_1.isRed_) {
const l_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const r_ = _1.right_
return ff_core_RbMap.RbNode(false, l_, k_, v_, r_)
return
}
}
}
{
const n_ = _1
return n_
return
}
}
}

export function RbMap_remove(self_, key_) {
function go_(self_) {
{
const _1 = self_
{
if(_1.RbLeaf) {
return self_
return
}
}
{
if(_1.RbNode) {
const k_ = _1.key_
if(ff_core_Core.magicLess_(key_, k_)) {
return goLeft_(self_)
return
}
}
}
{
if(_1.RbNode) {
const k_ = _1.key_
if(ff_core_Core.magicLess_(k_, key_)) {
return goRight_(self_)
return
}
}
}
{
if(_1.RbNode) {
const a_ = _1.left_
const b_ = _1.right_
return fuse_(a_, b_)
return
}
}
}
}
function goLeft_(self_) {
{
const _1 = self_
{
if(_1.RbLeaf) {
return self_
return
}
}
{
if(_1.RbNode) {
if(_1.left_.RbNode) {
if(!_1.left_.isRed_) {
const a_ = _1.left_.left_
const k1_ = _1.left_.key_
const v1_ = _1.left_.value_
const b_ = _1.left_.right_
const k2_ = _1.key_
const v2_ = _1.value_
const c_ = _1.right_
return balanceLeft_(ff_core_RbMap.RbNode(false, go_(ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_)), k2_, v2_, c_))
return
}
}
}
}
{
if(_1.RbNode) {
const a_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const b_ = _1.right_
return ff_core_RbMap.RbNode(true, go_(a_), k_, v_, b_)
return
}
}
}
}
function balanceLeft_(self_) {
{
const _1 = self_
{
if(_1.RbNode) {
if(!_1.isRed_) {
if(_1.left_.RbNode) {
if(_1.left_.isRed_) {
const a_ = _1.left_.left_
const k1_ = _1.left_.key_
const v1_ = _1.left_.value_
const b_ = _1.left_.right_
const k2_ = _1.key_
const v2_ = _1.value_
const c_ = _1.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_), k2_, v2_, c_)
return
}
}
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_.RbNode) {
if(!_1.right_.isRed_) {
const b_ = _1.right_.left_
const k2_ = _1.right_.key_
const v2_ = _1.right_.value_
const c_ = _1.right_.right_
return ff_core_RbMap.RbMap_balance(ff_core_RbMap.RbNode(false, a_, k1_, v1_, ff_core_RbMap.RbNode(true, b_, k2_, v2_, c_)))
return
}
}
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_.RbNode) {
if(_1.right_.isRed_) {
if(_1.right_.left_.RbNode) {
if(!_1.right_.left_.isRed_) {
const b_ = _1.right_.left_.left_
const k2_ = _1.right_.left_.key_
const v2_ = _1.right_.left_.value_
const c_ = _1.right_.left_.right_
const k3_ = _1.right_.key_
const v3_ = _1.right_.value_
if(_1.right_.right_.RbNode) {
if(!_1.right_.right_.isRed_) {
const d_ = _1.right_.right_.left_
const k4_ = _1.right_.right_.key_
const v4_ = _1.right_.right_.value_
const e_ = _1.right_.right_.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_), k2_, v2_, ff_core_RbMap.RbMap_balance(ff_core_RbMap.RbNode(false, c_, k3_, v3_, ff_core_RbMap.RbNode(true, d_, k4_, v4_, e_))))
return
}
}
}
}
}
}
}
}
}
{
return ff_core_Core.panic_("Unexpected input to balanceLeft")
return
}
}
}
function goRight_(self_) {
{
const _1 = self_
{
if(_1.RbLeaf) {
return self_
return
}
}
{
if(_1.RbNode) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_.RbNode) {
if(!_1.right_.isRed_) {
const b_ = _1.right_.left_
const k2_ = _1.right_.key_
const v2_ = _1.right_.value_
const c_ = _1.right_.right_
return balanceRight_(ff_core_RbMap.RbNode(false, a_, k1_, v1_, go_(ff_core_RbMap.RbNode(false, b_, k2_, v2_, c_))))
return
}
}
}
}
{
if(_1.RbNode) {
const a_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const b_ = _1.right_
return ff_core_RbMap.RbNode(true, a_, k_, v_, go_(b_))
return
}
}
}
}
function balanceRight_(self_) {
{
const _1 = self_
{
if(_1.RbNode) {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_.RbNode) {
if(_1.right_.isRed_) {
const b_ = _1.right_.left_
const k2_ = _1.right_.key_
const v2_ = _1.right_.value_
const c_ = _1.right_.right_
return ff_core_RbMap.RbNode(true, a_, k1_, v1_, ff_core_RbMap.RbNode(false, b_, k2_, v2_, c_))
return
}
}
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
if(_1.left_.RbNode) {
if(!_1.left_.isRed_) {
const a_ = _1.left_.left_
const k1_ = _1.left_.key_
const v1_ = _1.left_.value_
const b_ = _1.left_.right_
const k2_ = _1.key_
const v2_ = _1.value_
const c_ = _1.right_
return ff_core_RbMap.RbMap_balance(ff_core_RbMap.RbNode(false, ff_core_RbMap.RbNode(true, a_, k1_, v1_, b_), k2_, v2_, c_))
return
}
}
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
if(_1.left_.RbNode) {
if(_1.left_.isRed_) {
if(_1.left_.left_.RbNode) {
if(!_1.left_.left_.isRed_) {
const a_ = _1.left_.left_.left_
const k1_ = _1.left_.left_.key_
const v1_ = _1.left_.left_.value_
const b_ = _1.left_.left_.right_
const k2_ = _1.left_.key_
const v2_ = _1.left_.value_
if(_1.left_.right_.RbNode) {
if(!_1.left_.right_.isRed_) {
const c_ = _1.left_.right_.left_
const k3_ = _1.left_.right_.key_
const v3_ = _1.left_.right_.value_
const d_ = _1.left_.right_.right_
const k4_ = _1.key_
const v4_ = _1.value_
const e_ = _1.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbMap_balance(ff_core_RbMap.RbNode(false, ff_core_RbMap.RbNode(true, a_, k1_, v1_, b_), k2_, v2_, c_)), k3_, v3_, ff_core_RbMap.RbNode(false, d_, k4_, v4_, e_))
return
}
}
}
}
}
}
}
}
}
{
return ff_core_Core.panic_("Unexpected input to balanceRight")
return
}
}
}
function fuse_(x_, y_) {
{
const _1 = ff_core_Pair.Pair(x_, y_)
{
if(_1.first_.RbLeaf) {
const a_ = _1.second_
return a_
return
}
}
{
const a_ = _1.first_
if(_1.second_.RbLeaf) {
return a_
return
}
}
{
if(_1.first_.RbNode) {
if(!_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_.RbNode) {
if(_1.second_.isRed_) {
const c_ = _1.second_.left_
const k2_ = _1.second_.key_
const v2_ = _1.second_.value_
const d_ = _1.second_.right_
return ff_core_RbMap.RbNode(true, fuse_(ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_), c_), k2_, v2_, d_)
return
}
}
}
}
}
{
if(_1.first_.RbNode) {
if(_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_.RbNode) {
if(!_1.second_.isRed_) {
const c_ = _1.second_.left_
const k2_ = _1.second_.key_
const v2_ = _1.second_.value_
const d_ = _1.second_.right_
return ff_core_RbMap.RbNode(true, a_, k1_, v1_, fuse_(b_, ff_core_RbMap.RbNode(false, c_, k2_, v2_, d_)))
return
}
}
}
}
}
{
if(_1.first_.RbNode) {
if(_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_.RbNode) {
if(_1.second_.isRed_) {
const c_ = _1.second_.left_
const k2_ = _1.second_.key_
const v2_ = _1.second_.value_
const d_ = _1.second_.right_
const e_ = fuse_(b_, c_)
{
const _1 = e_
{
if(_1.RbNode) {
if(_1.isRed_) {
const f_ = _1.left_
const k3_ = _1.key_
const v3_ = _1.value_
const g_ = _1.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(true, a_, k1_, v1_, f_), k3_, v3_, ff_core_RbMap.RbNode(true, g_, k2_, v2_, d_))
return
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
return ff_core_RbMap.RbNode(true, a_, k1_, v1_, ff_core_RbMap.RbNode(true, e_, k2_, v2_, d_))
return
}
}
}
{
if(_1.RbLeaf) {
return ff_core_RbMap.RbLeaf()
return
}
}
}
return
}
}
}
}
}
{
if(_1.first_.RbNode) {
if(!_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_.RbNode) {
if(!_1.second_.isRed_) {
const c_ = _1.second_.left_
const k2_ = _1.second_.key_
const v2_ = _1.second_.value_
const d_ = _1.second_.right_
const e_ = fuse_(b_, c_)
{
const _1 = e_
{
if(_1.RbNode) {
if(_1.isRed_) {
const f_ = _1.left_
const k3_ = _1.key_
const v3_ = _1.value_
const g_ = _1.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(true, a_, k1_, v1_, f_), k3_, v3_, ff_core_RbMap.RbNode(true, g_, k2_, v2_, d_))
return
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
return balanceLeft_(ff_core_RbMap.RbNode(false, a_, k1_, v1_, ff_core_RbMap.RbNode(false, e_, k2_, v2_, d_)))
return
}
}
}
{
if(_1.RbLeaf) {
return ff_core_RbMap.RbLeaf()
return
}
}
}
return
}
}
}
}
}
}
}
{
const _1 = go_(self_)
{
if(_1.RbNode) {
if(_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
const b_ = _1.right_
return ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_)
return
}
}
}
{
const n_ = _1
return n_
return
}
}
}

export function RbMap_balance(self_) {
{
const _1 = self_
{
if(_1.RbNode) {
if(!_1.isRed_) {
if(_1.left_.RbNode) {
if(_1.left_.isRed_) {
if(_1.left_.left_.RbNode) {
if(_1.left_.left_.isRed_) {
const a_ = _1.left_.left_.left_
const k1_ = _1.left_.left_.key_
const v1_ = _1.left_.left_.value_
const b_ = _1.left_.left_.right_
const k2_ = _1.left_.key_
const v2_ = _1.left_.value_
const c_ = _1.left_.right_
const k3_ = _1.key_
const v3_ = _1.value_
const d_ = _1.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_), k2_, v2_, ff_core_RbMap.RbNode(false, c_, k3_, v3_, d_))
return
}
}
}
}
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
if(_1.left_.RbNode) {
if(_1.left_.isRed_) {
const a_ = _1.left_.left_
const k1_ = _1.left_.key_
const v1_ = _1.left_.value_
if(_1.left_.right_.RbNode) {
if(_1.left_.right_.isRed_) {
const b_ = _1.left_.right_.left_
const k2_ = _1.left_.right_.key_
const v2_ = _1.left_.right_.value_
const c_ = _1.left_.right_.right_
const k3_ = _1.key_
const v3_ = _1.value_
const d_ = _1.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_), k2_, v2_, ff_core_RbMap.RbNode(false, c_, k3_, v3_, d_))
return
}
}
}
}
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_.RbNode) {
if(_1.right_.isRed_) {
if(_1.right_.left_.RbNode) {
if(_1.right_.left_.isRed_) {
const b_ = _1.right_.left_.left_
const k2_ = _1.right_.left_.key_
const v2_ = _1.right_.left_.value_
const c_ = _1.right_.left_.right_
const k3_ = _1.right_.key_
const v3_ = _1.right_.value_
const d_ = _1.right_.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_), k2_, v2_, ff_core_RbMap.RbNode(false, c_, k3_, v3_, d_))
return
}
}
}
}
}
}
}
{
if(_1.RbNode) {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_.RbNode) {
if(_1.right_.isRed_) {
const b_ = _1.right_.left_
const k2_ = _1.right_.key_
const v2_ = _1.right_.value_
if(_1.right_.right_.RbNode) {
if(_1.right_.right_.isRed_) {
const c_ = _1.right_.right_.left_
const k3_ = _1.right_.right_.key_
const v3_ = _1.right_.right_.value_
const d_ = _1.right_.right_.right_
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbNode(false, a_, k1_, v1_, b_), k2_, v2_, ff_core_RbMap.RbNode(false, c_, k3_, v3_, d_))
return
}
}
}
}
}
}
}
{
return self_
return
}
}
}




