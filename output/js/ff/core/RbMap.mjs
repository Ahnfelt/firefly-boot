

import * as ff_core_RbMap from "../../ff/core/RbMap.mjs"

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

import * as ff_core_SourceLocation from "../../ff/core/SourceLocation.mjs"

import * as ff_core_Stack from "../../ff/core/Stack.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_StringMap from "../../ff/core/StringMap.mjs"

import * as ff_core_Task from "../../ff/core/Task.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// type Color
const R$ = {R: true};
export function R() {
return R$;
}
const B$ = {B: true};
export function B() {
return B$;
}

// type RB
const E$ = {E: true};
export function E() {
return E$;
}
export function T(color_, left_, key_, value_, right_) {
return {T: true, color_, left_, key_, value_, right_};
}



export function insert_(x_, xv_, s_, ff_core_Ordering_Order$K) {
function ins_(s_) {
{
const s_a = s_;
{
if(s_a.E) {
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.E(), x_, xv_, ff_core_RbMap.E())
return
}
}
{
if(s_a.T) {
if(s_a.color_.B) {
const a_ = s_a.left_;
const y_ = s_a.key_;
const yv_ = s_a.value_;
const b_ = s_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.balance_(ins_(a_), y_, yv_, b_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.balance_(a_, y_, yv_, ins_(b_), ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingSame) {
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_)
return
}
}
}
return
}
}
}
{
if(s_a.T) {
if(s_a.color_.R) {
const a_ = s_a.left_;
const y_ = s_a.key_;
const yv_ = s_a.value_;
const b_ = s_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.T(ff_core_RbMap.R(), ins_(a_), y_, yv_, b_)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, y_, yv_, ins_(b_))
return
}
}
{
if(_1.OrderingSame) {
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b_)
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
const _1 = ins_(s_);
{
if(_1.E) {
return ff_core_Core.panic_("Unexpected empty tree")
return
}
}
{
if(_1.T) {
const a_ = _1.left_;
const z_ = _1.key_;
const zv_ = _1.value_;
const b_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, z_, zv_, b_)
return
}
}
}
}

export function member_(key_, tree_, ff_core_Ordering_Order$K) {
{
const key_a = key_;
const tree_a = tree_;
{
const x_ = key_a;
if(tree_a.E) {
return false
return
}
}
{
const x_ = key_a;
if(tree_a.T) {
const a_ = tree_a.left_;
const y_ = tree_a.key_;
const b_ = tree_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.member_(x_, a_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.member_(x_, b_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingSame) {
return true
return
}
}
}
return
}
}
}
}

export function balance_(tree1_, key_, value_, tree2_, ff_core_Ordering_Order$K) {
{
const tree1_a = tree1_;
const key_a = key_;
const value_a = value_;
const tree2_a = tree2_;
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const y_ = key_a;
const yv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const c_ = tree2_a.left_;
const z_ = tree2_a.key_;
const zv_ = tree2_a.value_;
const d_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
if(tree1_a.left_.T) {
if(tree1_a.left_.color_.R) {
const a_ = tree1_a.left_.left_;
const x_ = tree1_a.left_.key_;
const xv_ = tree1_a.left_.value_;
const b_ = tree1_a.left_.right_;
const y_ = tree1_a.key_;
const yv_ = tree1_a.value_;
const c_ = tree1_a.right_;
const z_ = key_a;
const zv_ = value_a;
const d_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
if(tree1_a.right_.T) {
if(tree1_a.right_.color_.R) {
const b_ = tree1_a.right_.left_;
const y_ = tree1_a.right_.key_;
const yv_ = tree1_a.right_.value_;
const c_ = tree1_a.right_.right_;
const z_ = key_a;
const zv_ = value_a;
const d_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const b_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
if(tree2_a.right_.T) {
if(tree2_a.right_.color_.R) {
const c_ = tree2_a.right_.left_;
const z_ = tree2_a.right_.key_;
const zv_ = tree2_a.right_.value_;
const d_ = tree2_a.right_.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
if(tree2_a.left_.T) {
if(tree2_a.left_.color_.R) {
const b_ = tree2_a.left_.left_;
const y_ = tree2_a.left_.key_;
const yv_ = tree2_a.left_.value_;
const c_ = tree2_a.left_.right_;
const z_ = tree2_a.key_;
const zv_ = tree2_a.value_;
const d_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
const b_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_)
return
}
}
}

export function delete_(x_, t_, ff_core_Ordering_Order$K) {
function del_(ss_) {
{
const ss_a = ss_;
{
if(ss_a.E) {
return ff_core_RbMap.E()
return
}
}
{
if(ss_a.T) {
const a_ = ss_a.left_;
const y_ = ss_a.key_;
const yv_ = ss_a.value_;
const b_ = ss_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return delformLeft_(a_, y_, yv_, b_)
return
}
}
{
if(_1.OrderingAfter) {
return delformRight_(a_, y_, yv_, b_)
return
}
}
{
if(_1.OrderingSame) {
return ff_core_RbMap.app_(a_, b_, ff_core_Ordering_Order$K)
return
}
}
}
return
}
}
}
}
function delformLeft_(left_, key_, value_, right_) {
{
const left_a = left_;
const key_a = key_;
const value_a = value_;
const right_a = right_;
{
if(left_a.T) {
if(left_a.color_.B) {
const y_ = key_a;
const yv_ = value_a;
const b_ = right_a;
return ff_core_RbMap.balleft_(del_(left_), y_, yv_, b_, ff_core_Ordering_Order$K)
return
}
}
}
{
const a_ = left_a;
const y_ = key_a;
const yv_ = value_a;
const b_ = right_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), del_(a_), y_, yv_, b_)
return
}
}
}
function delformRight_(left_, key_, value_, right_) {
{
const left_a = left_;
const key_a = key_;
const value_a = value_;
const right_a = right_;
{
const a_ = left_a;
const y_ = key_a;
const yv_ = value_a;
if(right_a.T) {
if(right_a.color_.B) {
return ff_core_RbMap.balright_(a_, y_, yv_, del_(right_), ff_core_Ordering_Order$K)
return
}
}
}
{
const a_ = left_a;
const y_ = key_a;
const yv_ = value_a;
const b_ = right_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, y_, yv_, del_(b_))
return
}
}
}
{
const _1 = del_(t_);
{
if(_1.T) {
const a_ = _1.left_;
const y_ = _1.key_;
const yv_ = _1.value_;
const b_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, y_, yv_, b_)
return
}
}
{
return ff_core_RbMap.E()
return
}
}
}

export function balleft_(tree1_, key_, value_, tree2_, ff_core_Ordering_Order$K) {
{
const tree1_a = tree1_;
const key_a = key_;
const value_a = value_;
const tree2_a = tree2_;
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const y_ = key_a;
const yv_ = value_a;
const c_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, c_)
return
}
}
}
{
const bl_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.B) {
const a_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const b_ = tree2_a.right_;
return ff_core_RbMap.balance_(bl_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.R(), a_, y_, yv_, b_), ff_core_Ordering_Order$K)
return
}
}
}
{
const bl_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
if(tree2_a.left_.T) {
if(tree2_a.left_.color_.B) {
const a_ = tree2_a.left_.left_;
const y_ = tree2_a.left_.key_;
const yv_ = tree2_a.left_.value_;
const b_ = tree2_a.left_.right_;
const z_ = tree2_a.key_;
const zv_ = tree2_a.value_;
const c_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), bl_, x_, xv_, a_), y_, yv_, ff_core_RbMap.balance_(b_, z_, zv_, ff_core_RbMap.sub1_(c_, ff_core_Ordering_Order$K), ff_core_Ordering_Order$K))
return
}
}
}
}
}
{
return ff_core_Core.panic_("Unexhaustive match in balleft")
return
}
}
}

export function balright_(tree1_, key_, value_, tree2_, ff_core_Ordering_Order$K) {
{
const tree1_a = tree1_;
const key_a = key_;
const value_a = value_;
const tree2_a = tree2_;
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const b_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const c_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.B(), b_, y_, yv_, c_))
return
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.B) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const y_ = key_a;
const yv_ = value_a;
const bl_ = tree2_a;
return ff_core_RbMap.balance_(ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b_), y_, yv_, bl_, ff_core_Ordering_Order$K)
return
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
if(tree1_a.right_.T) {
if(tree1_a.right_.color_.B) {
const b_ = tree1_a.right_.left_;
const y_ = tree1_a.right_.key_;
const yv_ = tree1_a.right_.value_;
const c_ = tree1_a.right_.right_;
const z_ = key_a;
const zv_ = value_a;
const bl_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.balance_(ff_core_RbMap.sub1_(a_, ff_core_Ordering_Order$K), x_, xv_, b_, ff_core_Ordering_Order$K), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, bl_))
return
}
}
}
}
}
{
return ff_core_Core.panic_("Unexhaustive match in balright")
return
}
}
}

export function sub1_(tree_, ff_core_Ordering_Order$K) {
{
const tree_a = tree_;
{
if(tree_a.T) {
if(tree_a.color_.B) {
const a_ = tree_a.left_;
const x_ = tree_a.key_;
const xv_ = tree_a.value_;
const b_ = tree_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b_)
return
}
}
}
{
return ff_core_Core.panic_("invariance violation")
return
}
}
}

export function app_(tree1_, tree2_, ff_core_Ordering_Order$K) {
{
const tree1_a = tree1_;
const tree2_a = tree2_;
{
if(tree1_a.E) {
const b_ = tree2_a;
return b_
return
}
}
{
const a_ = tree1_a;
if(tree2_a.E) {
return a_
return
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const c_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const d_ = tree2_a.right_;
{
const _1 = ff_core_RbMap.app_(b_, c_, ff_core_Ordering_Order$K);
{
if(_1.T) {
if(_1.color_.R) {
const b2_ = _1.left_;
const z_ = _1.key_;
const zv_ = _1.value_;
const c2_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b2_), z_, zv_, ff_core_RbMap.T(ff_core_RbMap.R(), c2_, y_, yv_, d_))
return
}
}
}
{
const bc_ = _1;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.R(), bc_, y_, yv_, d_))
return
}
}
return
}
}
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.B) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
if(tree2_a.T) {
if(tree2_a.color_.B) {
const c_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const d_ = tree2_a.right_;
{
const _1 = ff_core_RbMap.app_(b_, c_, ff_core_Ordering_Order$K);
{
if(_1.T) {
if(_1.color_.R) {
const b2_ = _1.left_;
const z_ = _1.key_;
const zv_ = _1.value_;
const c2_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b2_), z_, zv_, ff_core_RbMap.T(ff_core_RbMap.B(), c2_, y_, yv_, d_))
return
}
}
}
{
const bc_ = _1;
return ff_core_RbMap.balleft_(a_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.B(), bc_, y_, yv_, d_), ff_core_Ordering_Order$K)
return
}
}
return
}
}
}
}
}
{
const a_ = tree1_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const b_ = tree2_a.left_;
const x_ = tree2_a.key_;
const xv_ = tree2_a.value_;
const c_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.app_(a_, b_, ff_core_Ordering_Order$K), x_, xv_, c_)
return
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const c_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, ff_core_RbMap.app_(b_, c_, ff_core_Ordering_Order$K))
return
}
}
}
}
}

export async function insert_$(x_, xv_, s_, ff_core_Ordering_Order$K, $task) {
function ins_(s_) {
{
const s_a = s_;
{
if(s_a.E) {
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.E(), x_, xv_, ff_core_RbMap.E())
return
}
}
{
if(s_a.T) {
if(s_a.color_.B) {
const a_ = s_a.left_;
const y_ = s_a.key_;
const yv_ = s_a.value_;
const b_ = s_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.balance_(ins_(a_), y_, yv_, b_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.balance_(a_, y_, yv_, ins_(b_), ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingSame) {
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_)
return
}
}
}
return
}
}
}
{
if(s_a.T) {
if(s_a.color_.R) {
const a_ = s_a.left_;
const y_ = s_a.key_;
const yv_ = s_a.value_;
const b_ = s_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.T(ff_core_RbMap.R(), ins_(a_), y_, yv_, b_)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, y_, yv_, ins_(b_))
return
}
}
{
if(_1.OrderingSame) {
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b_)
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
const _1 = ins_(s_);
{
if(_1.E) {
return ff_core_Core.panic_("Unexpected empty tree")
return
}
}
{
if(_1.T) {
const a_ = _1.left_;
const z_ = _1.key_;
const zv_ = _1.value_;
const b_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, z_, zv_, b_)
return
}
}
}
}

export async function member_$(key_, tree_, ff_core_Ordering_Order$K, $task) {
{
const key_a = key_;
const tree_a = tree_;
{
const x_ = key_a;
if(tree_a.E) {
return false
return
}
}
{
const x_ = key_a;
if(tree_a.T) {
const a_ = tree_a.left_;
const y_ = tree_a.key_;
const b_ = tree_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.member_(x_, a_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.member_(x_, b_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingSame) {
return true
return
}
}
}
return
}
}
}
}

export async function balance_$(tree1_, key_, value_, tree2_, ff_core_Ordering_Order$K, $task) {
{
const tree1_a = tree1_;
const key_a = key_;
const value_a = value_;
const tree2_a = tree2_;
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const y_ = key_a;
const yv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const c_ = tree2_a.left_;
const z_ = tree2_a.key_;
const zv_ = tree2_a.value_;
const d_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
if(tree1_a.left_.T) {
if(tree1_a.left_.color_.R) {
const a_ = tree1_a.left_.left_;
const x_ = tree1_a.left_.key_;
const xv_ = tree1_a.left_.value_;
const b_ = tree1_a.left_.right_;
const y_ = tree1_a.key_;
const yv_ = tree1_a.value_;
const c_ = tree1_a.right_;
const z_ = key_a;
const zv_ = value_a;
const d_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
if(tree1_a.right_.T) {
if(tree1_a.right_.color_.R) {
const b_ = tree1_a.right_.left_;
const y_ = tree1_a.right_.key_;
const yv_ = tree1_a.right_.value_;
const c_ = tree1_a.right_.right_;
const z_ = key_a;
const zv_ = value_a;
const d_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const b_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
if(tree2_a.right_.T) {
if(tree2_a.right_.color_.R) {
const c_ = tree2_a.right_.left_;
const z_ = tree2_a.right_.key_;
const zv_ = tree2_a.right_.value_;
const d_ = tree2_a.right_.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
if(tree2_a.left_.T) {
if(tree2_a.left_.color_.R) {
const b_ = tree2_a.left_.left_;
const y_ = tree2_a.left_.key_;
const yv_ = tree2_a.left_.value_;
const c_ = tree2_a.left_.right_;
const z_ = tree2_a.key_;
const zv_ = tree2_a.value_;
const d_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, d_))
return
}
}
}
}
}
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
const b_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_)
return
}
}
}

export async function delete_$(x_, t_, ff_core_Ordering_Order$K, $task) {
function del_(ss_) {
{
const ss_a = ss_;
{
if(ss_a.E) {
return ff_core_RbMap.E()
return
}
}
{
if(ss_a.T) {
const a_ = ss_a.left_;
const y_ = ss_a.key_;
const yv_ = ss_a.value_;
const b_ = ss_a.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(x_, y_);
{
if(_1.OrderingBefore) {
return delformLeft_(a_, y_, yv_, b_)
return
}
}
{
if(_1.OrderingAfter) {
return delformRight_(a_, y_, yv_, b_)
return
}
}
{
if(_1.OrderingSame) {
return ff_core_RbMap.app_(a_, b_, ff_core_Ordering_Order$K)
return
}
}
}
return
}
}
}
}
function delformLeft_(left_, key_, value_, right_) {
{
const left_a = left_;
const key_a = key_;
const value_a = value_;
const right_a = right_;
{
if(left_a.T) {
if(left_a.color_.B) {
const y_ = key_a;
const yv_ = value_a;
const b_ = right_a;
return ff_core_RbMap.balleft_(del_(left_), y_, yv_, b_, ff_core_Ordering_Order$K)
return
}
}
}
{
const a_ = left_a;
const y_ = key_a;
const yv_ = value_a;
const b_ = right_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), del_(a_), y_, yv_, b_)
return
}
}
}
function delformRight_(left_, key_, value_, right_) {
{
const left_a = left_;
const key_a = key_;
const value_a = value_;
const right_a = right_;
{
const a_ = left_a;
const y_ = key_a;
const yv_ = value_a;
if(right_a.T) {
if(right_a.color_.B) {
return ff_core_RbMap.balright_(a_, y_, yv_, del_(right_), ff_core_Ordering_Order$K)
return
}
}
}
{
const a_ = left_a;
const y_ = key_a;
const yv_ = value_a;
const b_ = right_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, y_, yv_, del_(b_))
return
}
}
}
{
const _1 = del_(t_);
{
if(_1.T) {
const a_ = _1.left_;
const y_ = _1.key_;
const yv_ = _1.value_;
const b_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.B(), a_, y_, yv_, b_)
return
}
}
{
return ff_core_RbMap.E()
return
}
}
}

export async function balleft_$(tree1_, key_, value_, tree2_, ff_core_Ordering_Order$K, $task) {
{
const tree1_a = tree1_;
const key_a = key_;
const value_a = value_;
const tree2_a = tree2_;
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const y_ = key_a;
const yv_ = value_a;
const c_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b_), y_, yv_, c_)
return
}
}
}
{
const bl_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.B) {
const a_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const b_ = tree2_a.right_;
return ff_core_RbMap.balance_(bl_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.R(), a_, y_, yv_, b_), ff_core_Ordering_Order$K)
return
}
}
}
{
const bl_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
if(tree2_a.left_.T) {
if(tree2_a.left_.color_.B) {
const a_ = tree2_a.left_.left_;
const y_ = tree2_a.left_.key_;
const yv_ = tree2_a.left_.value_;
const b_ = tree2_a.left_.right_;
const z_ = tree2_a.key_;
const zv_ = tree2_a.value_;
const c_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), bl_, x_, xv_, a_), y_, yv_, ff_core_RbMap.balance_(b_, z_, zv_, ff_core_RbMap.sub1_(c_, ff_core_Ordering_Order$K), ff_core_Ordering_Order$K))
return
}
}
}
}
}
{
return ff_core_Core.panic_("Unexhaustive match in balleft")
return
}
}
}

export async function balright_$(tree1_, key_, value_, tree2_, ff_core_Ordering_Order$K, $task) {
{
const tree1_a = tree1_;
const key_a = key_;
const value_a = value_;
const tree2_a = tree2_;
{
const a_ = tree1_a;
const x_ = key_a;
const xv_ = value_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const b_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const c_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.B(), b_, y_, yv_, c_))
return
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.B) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const y_ = key_a;
const yv_ = value_a;
const bl_ = tree2_a;
return ff_core_RbMap.balance_(ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b_), y_, yv_, bl_, ff_core_Ordering_Order$K)
return
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
if(tree1_a.right_.T) {
if(tree1_a.right_.color_.B) {
const b_ = tree1_a.right_.left_;
const y_ = tree1_a.right_.key_;
const yv_ = tree1_a.right_.value_;
const c_ = tree1_a.right_.right_;
const z_ = key_a;
const zv_ = value_a;
const bl_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.balance_(ff_core_RbMap.sub1_(a_, ff_core_Ordering_Order$K), x_, xv_, b_, ff_core_Ordering_Order$K), y_, yv_, ff_core_RbMap.T(ff_core_RbMap.B(), c_, z_, zv_, bl_))
return
}
}
}
}
}
{
return ff_core_Core.panic_("Unexhaustive match in balright")
return
}
}
}

export async function sub1_$(tree_, ff_core_Ordering_Order$K, $task) {
{
const tree_a = tree_;
{
if(tree_a.T) {
if(tree_a.color_.B) {
const a_ = tree_a.left_;
const x_ = tree_a.key_;
const xv_ = tree_a.value_;
const b_ = tree_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b_)
return
}
}
}
{
return ff_core_Core.panic_("invariance violation")
return
}
}
}

export async function app_$(tree1_, tree2_, ff_core_Ordering_Order$K, $task) {
{
const tree1_a = tree1_;
const tree2_a = tree2_;
{
if(tree1_a.E) {
const b_ = tree2_a;
return b_
return
}
}
{
const a_ = tree1_a;
if(tree2_a.E) {
return a_
return
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const c_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const d_ = tree2_a.right_;
{
const _1 = ff_core_RbMap.app_(b_, c_, ff_core_Ordering_Order$K);
{
if(_1.T) {
if(_1.color_.R) {
const b2_ = _1.left_;
const z_ = _1.key_;
const zv_ = _1.value_;
const c2_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, b2_), z_, zv_, ff_core_RbMap.T(ff_core_RbMap.R(), c2_, y_, yv_, d_))
return
}
}
}
{
const bc_ = _1;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.R(), bc_, y_, yv_, d_))
return
}
}
return
}
}
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.B) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
if(tree2_a.T) {
if(tree2_a.color_.B) {
const c_ = tree2_a.left_;
const y_ = tree2_a.key_;
const yv_ = tree2_a.value_;
const d_ = tree2_a.right_;
{
const _1 = ff_core_RbMap.app_(b_, c_, ff_core_Ordering_Order$K);
{
if(_1.T) {
if(_1.color_.R) {
const b2_ = _1.left_;
const z_ = _1.key_;
const zv_ = _1.value_;
const c2_ = _1.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.T(ff_core_RbMap.B(), a_, x_, xv_, b2_), z_, zv_, ff_core_RbMap.T(ff_core_RbMap.B(), c2_, y_, yv_, d_))
return
}
}
}
{
const bc_ = _1;
return ff_core_RbMap.balleft_(a_, x_, xv_, ff_core_RbMap.T(ff_core_RbMap.B(), bc_, y_, yv_, d_), ff_core_Ordering_Order$K)
return
}
}
return
}
}
}
}
}
{
const a_ = tree1_a;
if(tree2_a.T) {
if(tree2_a.color_.R) {
const b_ = tree2_a.left_;
const x_ = tree2_a.key_;
const xv_ = tree2_a.value_;
const c_ = tree2_a.right_;
return ff_core_RbMap.T(ff_core_RbMap.R(), ff_core_RbMap.app_(a_, b_, ff_core_Ordering_Order$K), x_, xv_, c_)
return
}
}
}
{
if(tree1_a.T) {
if(tree1_a.color_.R) {
const a_ = tree1_a.left_;
const x_ = tree1_a.key_;
const xv_ = tree1_a.value_;
const b_ = tree1_a.right_;
const c_ = tree2_a;
return ff_core_RbMap.T(ff_core_RbMap.R(), a_, x_, xv_, ff_core_RbMap.app_(b_, c_, ff_core_Ordering_Order$K))
return
}
}
}
}
}

export function RB_get(self_, key_, ff_core_Ordering_Order$K) {
{
const _1 = self_;
{
if(_1.E) {
return ff_core_Option.None()
return
}
}
{
if(_1.T) {
const a_ = _1.left_;
const y_ = _1.key_;
const yv_ = _1.value_;
const b_ = _1.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(key_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.RB_get(a_, key_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.RB_get(b_, key_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingSame) {
return ff_core_Option.Some(yv_)
return
}
}
}
return
}
}
}
}

export function RB_size(self_, ff_core_Ordering_Order$K) {
{
const _1 = self_;
{
if(_1.E) {
return 0
return
}
}
{
if(_1.T) {
const l_ = _1.left_;
const r_ = _1.right_;
return ((ff_core_RbMap.RB_size(l_, ff_core_Ordering_Order$K) + 1) + ff_core_RbMap.RB_size(r_, ff_core_Ordering_Order$K))
return
}
}
}
}

export function RB_pairs(self_, ff_core_Ordering_Order$K) {
let result_ = ff_core_List.Empty();
ff_core_RbMap.RB_each(self_, ((k_, v_) => {
result_ = ff_core_List.Link(ff_core_Pair.Pair(k_, v_), result_)
}), ff_core_Ordering_Order$K);
return ff_core_List.List_reverse(result_)
}

export function RB_toStream(self_, cycle_, ff_core_Ordering_Order$K) {
let stack_ = ff_core_List.Link(self_, ff_core_List.Empty());
function next_() {
_tailcall: for(;;) {
{
const _1 = stack_;
{
if(_1.Empty) {
if((cycle_ && (((_1) => {
{
if(_1.E) {
return false
return
}
}
{
return true
return
}
}))(self_))) {
stack_ = ff_core_List.Link(self_, ff_core_List.Empty());
{


continue _tailcall
}
} else {
return ff_core_Option.None()
}
return
}
}
{
if(_1.Link) {
if(_1.head_.E) {
const tail_ = _1.tail_;
stack_ = tail_;
{


continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
if(_1.head_.T) {
if(_1.head_.left_.E) {
const k_ = _1.head_.key_;
const v_ = _1.head_.value_;
if(_1.head_.right_.E) {
const tail_ = _1.tail_;
stack_ = tail_;
return ff_core_Option.Some(ff_core_Pair.Pair(k_, v_))
return
}
}
}
}
}
{
if(_1.Link) {
if(_1.head_.T) {
const l_ = _1.head_.left_;
const k_ = _1.head_.key_;
const v_ = _1.head_.value_;
const r_ = _1.head_.right_;
const tail_ = _1.tail_;
stack_ = ff_core_List.Link(l_, ff_core_List.Link(ff_core_RbMap.T(ff_core_RbMap.B(), ff_core_RbMap.E(), k_, v_, ff_core_RbMap.E()), ff_core_List.Link(r_, tail_)));
{


continue _tailcall
}
return
}
}
}
}
return
}
}
return ff_core_Stream.make_((() => {
return next_()
}), (() => {

}))
}

export function RB_each(self_, body_, ff_core_Ordering_Order$K) {
{
const _1 = self_;
{
if(_1.E) {

return
}
}
{
if(_1.T) {
const l_ = _1.left_;
const k_ = _1.key_;
const v_ = _1.value_;
const r_ = _1.right_;
ff_core_RbMap.RB_each(l_, body_, ff_core_Ordering_Order$K);
body_(k_, v_);
ff_core_RbMap.RB_each(r_, body_, ff_core_Ordering_Order$K)
return
}
}
}
}

export function RB_eachWhile(self_, body_, ff_core_Ordering_Order$K) {
{
const _1 = self_;
{
if(_1.E) {
return true
return
}
}
{
if(_1.T) {
const l_ = _1.left_;
const k_ = _1.key_;
const v_ = _1.value_;
const r_ = _1.right_;
return ((ff_core_RbMap.RB_eachWhile(l_, body_, ff_core_Ordering_Order$K) && body_(k_, v_)) && ff_core_RbMap.RB_eachWhile(r_, body_, ff_core_Ordering_Order$K))
return
}
}
}
}

export function RB_map(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K2) {
let result_ = ff_core_RbMap.E();
ff_core_RbMap.RB_each(self_, ((k_, v_) => {
const pair_ = body_(k_, v_);
result_ = ff_core_RbMap.insert_(pair_.first_, pair_.second_, result_, ff_core_Ordering_Order$K2)
}), ff_core_Ordering_Order$K);
return result_
}

export function RB_mapValues(self_, body_, ff_core_Ordering_Order$K) {
{
const _1 = self_;
{
if(_1.E) {
return ff_core_RbMap.E()
return
}
}
{
if(_1.T) {
const c_ = _1.color_;
const l_ = _1.left_;
const k_ = _1.key_;
const v_ = _1.value_;
const r_ = _1.right_;
return ff_core_RbMap.T(c_, ff_core_RbMap.RB_mapValues(l_, body_, ff_core_Ordering_Order$K), k_, body_(k_, v_), ff_core_RbMap.RB_mapValues(r_, body_, ff_core_Ordering_Order$K))
return
}
}
}
}

export function RB_find(self_, body_, ff_core_Ordering_Order$K) {
let result_ = ff_core_Option.None();
ff_core_RbMap.RB_eachWhile(self_, ((k_, v_) => {
if(body_(k_, v_)) {
result_ = ff_core_Option.Some(ff_core_Pair.Pair(k_, v_));
return false
} else {
return true
}
}), ff_core_Ordering_Order$K);
return result_
}

export async function RB_get$(self_, key_, ff_core_Ordering_Order$K, $task) {
{
const _1 = self_;
{
if(_1.E) {
return ff_core_Option.None()
return
}
}
{
if(_1.T) {
const a_ = _1.left_;
const y_ = _1.key_;
const yv_ = _1.value_;
const b_ = _1.right_;
{
const _1 = ff_core_Ordering_Order$K.compare_(key_, y_);
{
if(_1.OrderingBefore) {
return ff_core_RbMap.RB_get(a_, key_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingAfter) {
return ff_core_RbMap.RB_get(b_, key_, ff_core_Ordering_Order$K)
return
}
}
{
if(_1.OrderingSame) {
return ff_core_Option.Some(yv_)
return
}
}
}
return
}
}
}
}

export async function RB_size$(self_, ff_core_Ordering_Order$K, $task) {
{
const _1 = self_;
{
if(_1.E) {
return 0
return
}
}
{
if(_1.T) {
const l_ = _1.left_;
const r_ = _1.right_;
return ((ff_core_RbMap.RB_size(l_, ff_core_Ordering_Order$K) + 1) + ff_core_RbMap.RB_size(r_, ff_core_Ordering_Order$K))
return
}
}
}
}

export async function RB_pairs$(self_, ff_core_Ordering_Order$K, $task) {
let result_ = ff_core_List.Empty();
ff_core_RbMap.RB_each(self_, ((k_, v_) => {
result_ = ff_core_List.Link(ff_core_Pair.Pair(k_, v_), result_)
}), ff_core_Ordering_Order$K);
return ff_core_List.List_reverse(result_)
}

export async function RB_toStream$(self_, cycle_, ff_core_Ordering_Order$K, $task) {
let stack_ = ff_core_List.Link(self_, ff_core_List.Empty());
function next_() {
_tailcall: for(;;) {
{
const _1 = stack_;
{
if(_1.Empty) {
if((cycle_ && (((_1) => {
{
if(_1.E) {
return false
return
}
}
{
return true
return
}
}))(self_))) {
stack_ = ff_core_List.Link(self_, ff_core_List.Empty());
{


continue _tailcall
}
} else {
return ff_core_Option.None()
}
return
}
}
{
if(_1.Link) {
if(_1.head_.E) {
const tail_ = _1.tail_;
stack_ = tail_;
{


continue _tailcall
}
return
}
}
}
{
if(_1.Link) {
if(_1.head_.T) {
if(_1.head_.left_.E) {
const k_ = _1.head_.key_;
const v_ = _1.head_.value_;
if(_1.head_.right_.E) {
const tail_ = _1.tail_;
stack_ = tail_;
return ff_core_Option.Some(ff_core_Pair.Pair(k_, v_))
return
}
}
}
}
}
{
if(_1.Link) {
if(_1.head_.T) {
const l_ = _1.head_.left_;
const k_ = _1.head_.key_;
const v_ = _1.head_.value_;
const r_ = _1.head_.right_;
const tail_ = _1.tail_;
stack_ = ff_core_List.Link(l_, ff_core_List.Link(ff_core_RbMap.T(ff_core_RbMap.B(), ff_core_RbMap.E(), k_, v_, ff_core_RbMap.E()), ff_core_List.Link(r_, tail_)));
{


continue _tailcall
}
return
}
}
}
}
return
}
}
return (await ff_core_Stream.make_$((async ($task) => {
return next_()
}), (async ($task) => {

}), $task))
}

export async function RB_each$(self_, body_, ff_core_Ordering_Order$K, $task) {
{
const _1 = self_;
{
if(_1.E) {

return
}
}
{
if(_1.T) {
const l_ = _1.left_;
const k_ = _1.key_;
const v_ = _1.value_;
const r_ = _1.right_;
(await ff_core_RbMap.RB_each$(l_, body_, ff_core_Ordering_Order$K, $task));
(await body_(k_, v_, $task));
(await ff_core_RbMap.RB_each$(r_, body_, ff_core_Ordering_Order$K, $task))
return
}
}
}
}

export async function RB_eachWhile$(self_, body_, ff_core_Ordering_Order$K, $task) {
{
const _1 = self_;
{
if(_1.E) {
return true
return
}
}
{
if(_1.T) {
const l_ = _1.left_;
const k_ = _1.key_;
const v_ = _1.value_;
const r_ = _1.right_;
return (((await ff_core_RbMap.RB_eachWhile$(l_, body_, ff_core_Ordering_Order$K, $task)) && (await body_(k_, v_, $task))) && (await ff_core_RbMap.RB_eachWhile$(r_, body_, ff_core_Ordering_Order$K, $task)))
return
}
}
}
}

export async function RB_map$(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K2, $task) {
let result_ = ff_core_RbMap.E();
(await ff_core_RbMap.RB_each$(self_, (async (k_, v_, $task) => {
const pair_ = (await body_(k_, v_, $task));
result_ = ff_core_RbMap.insert_(pair_.first_, pair_.second_, result_, ff_core_Ordering_Order$K2)
}), ff_core_Ordering_Order$K, $task));
return result_
}

export async function RB_mapValues$(self_, body_, ff_core_Ordering_Order$K, $task) {
{
const _1 = self_;
{
if(_1.E) {
return ff_core_RbMap.E()
return
}
}
{
if(_1.T) {
const c_ = _1.color_;
const l_ = _1.left_;
const k_ = _1.key_;
const v_ = _1.value_;
const r_ = _1.right_;
return ff_core_RbMap.T(c_, (await ff_core_RbMap.RB_mapValues$(l_, body_, ff_core_Ordering_Order$K, $task)), k_, (await body_(k_, v_, $task)), (await ff_core_RbMap.RB_mapValues$(r_, body_, ff_core_Ordering_Order$K, $task)))
return
}
}
}
}

export async function RB_find$(self_, body_, ff_core_Ordering_Order$K, $task) {
let result_ = ff_core_Option.None();
(await ff_core_RbMap.RB_eachWhile$(self_, (async (k_, v_, $task) => {
if((await body_(k_, v_, $task))) {
result_ = ff_core_Option.Some(ff_core_Pair.Pair(k_, v_));
return false
} else {
return true
}
}), ff_core_Ordering_Order$K, $task));
return result_
}




