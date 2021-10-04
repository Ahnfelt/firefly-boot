import * as ff_core_RbMap from "../../ff/core/RbMap.mjs"

import * as ff_core_Array from "../../ff/core/Array.mjs"

import * as ff_core_ArrayBuilder from "../../ff/core/ArrayBuilder.mjs"

import * as ff_core_Bool from "../../ff/core/Bool.mjs"

import * as ff_core_Char from "../../ff/core/Char.mjs"

import * as ff_core_Core from "../../ff/core/Core.mjs"

import * as ff_core_FileSystem from "../../ff/core/FileSystem.mjs"

import * as ff_core_Int from "../../ff/core/Int.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type RbMap
const RbLeaf$ = {_: 'RbLeaf'};
export function RbLeaf() {
return RbLeaf$;
}
export function RbNode(isRed_, left_, key_, value_, right_) {
return {_: 'RbNode', isRed_, left_, key_, value_, right_};
}





export function RbMap_size(self_) {
{
const _1 = self_
{
if(_1._ === 'RbLeaf') {
return 0
return
}
}
{
if(_1._ === 'RbNode') {
const l_ = _1.left_
const r_ = _1.right_
return ((ff_core_RbMap.RbMap_size(l_) + 1) + ff_core_RbMap.RbMap_size(r_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function RbMap_pairs(self_) {
{
const _1 = self_
{
if(_1._ === 'RbLeaf') {
return ff_core_Array.Array_toList([])
return
}
}
{
if(_1._ === 'RbNode') {
const l_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const r_ = _1.right_
return ff_core_List.List_addAll(ff_core_List.List_addAll(ff_core_RbMap.RbMap_pairs(l_), ff_core_Array.Array_toList([ff_core_Pair.Pair(k_, v_)])), ff_core_RbMap.RbMap_pairs(r_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function RbMap_each(self_, body_) {
_26_14: do {
const _1 = self_
{
if(_1._ === 'RbLeaf') {

break _26_14
}
}
{
if(_1._ === 'RbNode') {
const l_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const r_ = _1.right_
ff_core_RbMap.RbMap_each(l_, body_)
body_(k_, v_)
ff_core_RbMap.RbMap_each(r_, body_)
break _26_14
}
}
throw new Error('Unexhaustive pattern match')
} while(false)
}

export function RbMap_get(self_, key_) {
{
const _1 = self_
{
if(_1._ === 'RbLeaf') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'RbNode') {
const l_ = _1.left_
const k_ = _1.key_
if(ff_core_Core.magicLess_(key_, k_)) {
return ff_core_RbMap.RbMap_get(l_, key_)
return
}
}
}
{
if(_1._ === 'RbNode') {
const k_ = _1.key_
const r_ = _1.right_
if(ff_core_Core.magicLess_(k_, key_)) {
return ff_core_RbMap.RbMap_get(r_, key_)
return
}
}
}
{
if(_1._ === 'RbNode') {
const v_ = _1.value_
return ff_core_Option.Some(v_)
return
}
}
throw new Error('Unexhaustive pattern match')
}
}

export function RbMap_add(self_, key_, value_) {
function go_(self_) {
{
const _1 = self_
{
if(_1._ === 'RbLeaf') {
return ff_core_RbMap.RbNode(true, ff_core_RbMap.RbLeaf(), key_, value_, ff_core_RbMap.RbLeaf())
return
}
}
{
if(_1._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
const c_ = _1.isRed_
const l_ = _1.left_
const r_ = _1.right_
return ff_core_RbMap.RbNode(c_, l_, key_, value_, r_)
return
}
}
throw new Error('Unexhaustive pattern match')
}
}
{
const _1 = go_(self_)
{
if(_1._ === 'RbNode') {
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
throw new Error('Unexhaustive pattern match')
}
}

export function RbMap_remove(self_, key_) {
function go_(self_) {
{
const _1 = self_
{
if(_1._ === 'RbLeaf') {
return self_
return
}
}
{
if(_1._ === 'RbNode') {
const k_ = _1.key_
if(ff_core_Core.magicLess_(key_, k_)) {
return goLeft_(self_)
return
}
}
}
{
if(_1._ === 'RbNode') {
const k_ = _1.key_
if(ff_core_Core.magicLess_(k_, key_)) {
return goRight_(self_)
return
}
}
}
{
if(_1._ === 'RbNode') {
const a_ = _1.left_
const b_ = _1.right_
return fuse_(a_, b_)
return
}
}
throw new Error('Unexhaustive pattern match')
}
}
function goLeft_(self_) {
{
const _1 = self_
{
if(_1._ === 'RbLeaf') {
return self_
return
}
}
{
if(_1._ === 'RbNode') {
if(_1.left_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
const a_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const b_ = _1.right_
return ff_core_RbMap.RbNode(true, go_(a_), k_, v_, b_)
return
}
}
throw new Error('Unexhaustive pattern match')
}
}
function balanceLeft_(self_) {
{
const _1 = self_
{
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
if(_1.left_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_._ === 'RbNode') {
if(_1.right_.isRed_) {
if(_1.right_.left_._ === 'RbNode') {
if(!_1.right_.left_.isRed_) {
const b_ = _1.right_.left_.left_
const k2_ = _1.right_.left_.key_
const v2_ = _1.right_.left_.value_
const c_ = _1.right_.left_.right_
const k3_ = _1.right_.key_
const v3_ = _1.right_.value_
if(_1.right_.right_._ === 'RbNode') {
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
throw new Error('Unexhaustive pattern match')
}
}
function goRight_(self_) {
{
const _1 = self_
{
if(_1._ === 'RbLeaf') {
return self_
return
}
}
{
if(_1._ === 'RbNode') {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
const a_ = _1.left_
const k_ = _1.key_
const v_ = _1.value_
const b_ = _1.right_
return ff_core_RbMap.RbNode(true, a_, k_, v_, go_(b_))
return
}
}
throw new Error('Unexhaustive pattern match')
}
}
function balanceRight_(self_) {
{
const _1 = self_
{
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
if(_1.left_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
if(_1.left_._ === 'RbNode') {
if(_1.left_.isRed_) {
if(_1.left_.left_._ === 'RbNode') {
if(!_1.left_.left_.isRed_) {
const a_ = _1.left_.left_.left_
const k1_ = _1.left_.left_.key_
const v1_ = _1.left_.left_.value_
const b_ = _1.left_.left_.right_
const k2_ = _1.left_.key_
const v2_ = _1.left_.value_
if(_1.left_.right_._ === 'RbNode') {
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
throw new Error('Unexhaustive pattern match')
}
}
function fuse_(x_, y_) {
{
const _1 = ff_core_Pair.Pair(x_, y_)
{
if(_1.first_._ === 'RbLeaf') {
const a_ = _1.second_
return a_
return
}
}
{
const a_ = _1.first_
if(_1.second_._ === 'RbLeaf') {
return a_
return
}
}
{
if(_1.first_._ === 'RbNode') {
if(!_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_._ === 'RbNode') {
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
if(_1.first_._ === 'RbNode') {
if(_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_._ === 'RbNode') {
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
if(_1.first_._ === 'RbNode') {
if(_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_._ === 'RbNode') {
if(_1.second_.isRed_) {
const c_ = _1.second_.left_
const k2_ = _1.second_.key_
const v2_ = _1.second_.value_
const d_ = _1.second_.right_
const e_ = fuse_(b_, c_)
{
const _1 = e_
{
if(_1._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
return ff_core_RbMap.RbNode(true, a_, k1_, v1_, ff_core_RbMap.RbNode(true, e_, k2_, v2_, d_))
return
}
}
}
{
if(_1._ === 'RbLeaf') {
return ff_core_RbMap.RbLeaf()
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
}
{
if(_1.first_._ === 'RbNode') {
if(!_1.first_.isRed_) {
const a_ = _1.first_.left_
const k1_ = _1.first_.key_
const v1_ = _1.first_.value_
const b_ = _1.first_.right_
if(_1.second_._ === 'RbNode') {
if(!_1.second_.isRed_) {
const c_ = _1.second_.left_
const k2_ = _1.second_.key_
const v2_ = _1.second_.value_
const d_ = _1.second_.right_
const e_ = fuse_(b_, c_)
{
const _1 = e_
{
if(_1._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
return balanceLeft_(ff_core_RbMap.RbNode(false, a_, k1_, v1_, ff_core_RbMap.RbNode(false, e_, k2_, v2_, d_)))
return
}
}
}
{
if(_1._ === 'RbLeaf') {
return ff_core_RbMap.RbLeaf()
return
}
}
throw new Error('Unexhaustive pattern match')
}
return
}
}
}
}
}
throw new Error('Unexhaustive pattern match')
}
}
{
const _1 = go_(self_)
{
if(_1._ === 'RbNode') {
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
throw new Error('Unexhaustive pattern match')
}
}

export function RbMap_balance(self_) {
{
const _1 = self_
{
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
if(_1.left_._ === 'RbNode') {
if(_1.left_.isRed_) {
if(_1.left_.left_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
if(_1.left_._ === 'RbNode') {
if(_1.left_.isRed_) {
const a_ = _1.left_.left_
const k1_ = _1.left_.key_
const v1_ = _1.left_.value_
if(_1.left_.right_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_._ === 'RbNode') {
if(_1.right_.isRed_) {
if(_1.right_.left_._ === 'RbNode') {
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
if(_1._ === 'RbNode') {
if(!_1.isRed_) {
const a_ = _1.left_
const k1_ = _1.key_
const v1_ = _1.value_
if(_1.right_._ === 'RbNode') {
if(_1.right_.isRed_) {
const b_ = _1.right_.left_
const k2_ = _1.right_.key_
const v2_ = _1.right_.value_
if(_1.right_.right_._ === 'RbNode') {
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
throw new Error('Unexhaustive pattern match')
}
}


