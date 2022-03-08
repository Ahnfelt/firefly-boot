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

import * as ff_core_Iterator from "../../ff/core/Iterator.mjs"

import * as ff_core_List from "../../ff/core/List.mjs"

import * as ff_core_Log from "../../ff/core/Log.mjs"

import * as ff_core_Map from "../../ff/core/Map.mjs"

import * as ff_core_Nothing from "../../ff/core/Nothing.mjs"

import * as ff_core_Option from "../../ff/core/Option.mjs"

import * as ff_core_Ordering from "../../ff/core/Ordering.mjs"

import * as ff_core_Pair from "../../ff/core/Pair.mjs"

import * as ff_core_RbMap from "../../ff/core/RbMap.mjs"

import * as ff_core_Set from "../../ff/core/Set.mjs"

import * as ff_core_Show from "../../ff/core/Show.mjs"

import * as ff_core_Stream from "../../ff/core/Stream.mjs"

import * as ff_core_String from "../../ff/core/String.mjs"

import * as ff_core_System from "../../ff/core/System.mjs"

import * as ff_core_TaskSystem from "../../ff/core/TaskSystem.mjs"

import * as ff_core_TimeSystem from "../../ff/core/TimeSystem.mjs"

import * as ff_core_Try from "../../ff/core/Try.mjs"

import * as ff_core_Unit from "../../ff/core/Unit.mjs"

// newtype Map



export function empty_() {
return ff_core_RbMap.RbLeaf()
}

export async function empty_$($c) {
return ff_core_RbMap.RbLeaf()
}

export function Map_add(self_, key_, value_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RbMap_add(self_, key_, ff_core_Option.Some(value_), ff_core_Ordering_Order$K)
}

export function Map_addAll(self_, that_, ff_core_Ordering_Order$K) {
let result_ = self_;
ff_core_RbMap.RbMap_each(that_, ((_1, _2) => {
{
const k_ = _1;
const v_ = _2;
if(_2.Some) {
result_ = ff_core_RbMap.RbMap_add(result_, k_, v_, ff_core_Ordering_Order$K)
return
}
}
{
const k_ = _1;
if(_2.None) {

return
}
}
}), ff_core_Ordering_Order$K);
return result_
}

export function Map_get(self_, key_, ff_core_Ordering_Order$K) {
return ff_core_Option.Option_flatten(ff_core_RbMap.RbMap_get(self_, key_, ff_core_Ordering_Order$K))
}

export function Map_remove(self_, key_, ff_core_Ordering_Order$K) {
return ff_core_RbMap.RbMap_add(self_, key_, ff_core_Option.None(), ff_core_Ordering_Order$K)
}

export function Map_removeAll(self_, that_, ff_core_Ordering_Order$K) {
let result_ = self_;
ff_core_RbMap.RbMap_each(that_, ((_1, _2) => {
{
const k_ = _1;
if(_2.Some) {
result_ = ff_core_RbMap.RbMap_remove(result_, k_, ff_core_Ordering_Order$K)
return
}
}
{
const k_ = _1;
if(_2.None) {

return
}
}
}), ff_core_Ordering_Order$K);
return result_
}

export function Map_pairs(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_flatMap(ff_core_RbMap.RbMap_pairs(self_, ff_core_Ordering_Order$K), ((_1) => {
{
const k_ = _1.first_;
if(_1.second_.Some) {
const v_ = _1.second_.value_;
return ff_core_List.Link(ff_core_Pair.Pair(k_, v_), ff_core_List.Empty())
return
}
}
{
const k_ = _1.first_;
if(_1.second_.None) {
return ff_core_List.Empty()
return
}
}
}))
}

export function Map_size(self_, ff_core_Ordering_Order$K) {
return ff_core_List.List_foldLeft(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), 0, ((total_, _) => {
return (total_ + 1)
}))
}

export function Map_map(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K1) {
const initial_ = ff_core_RbMap.RbLeaf();
return ff_core_List.List_foldLeft(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), initial_, ((tree_, pair_) => {
{
const _1 = body_(pair_);
{
const k_ = _1.first_;
const v_ = _1.second_;
return ff_core_Map.Map_add(tree_, k_, v_, ff_core_Ordering_Order$K1)
return
}
}
}))
}

export function Map_contains(self_, key_, ff_core_Ordering_Order$K) {
return (!ff_core_Option.Option_isEmpty(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K)))
}

export function Map_expect(self_, key_, ff_core_Ordering_Order$K) {
return ff_core_Option.Option_expect(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K))
}

export function Map_updateOrInsert(self_, key_, update_, default_, ff_core_Ordering_Order$K) {
{
const _1 = ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K);
{
if(_1.None) {
return ff_core_Map.Map_add(self_, key_, default_(), ff_core_Ordering_Order$K)
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Map.Map_add(self_, key_, update_(v_), ff_core_Ordering_Order$K)
return
}
}
}
}

export function Map_each(self_, body_, ff_core_Ordering_Order$K) {
ff_core_RbMap.RbMap_each(self_, ((_1, _2) => {
{
const k_ = _1;
if(_2.Some) {
const v_ = _2.value_;
body_(k_, v_)
return
}
}
{
if(_2.None) {

return
}
}
}), ff_core_Ordering_Order$K)
}

export async function Map_add$(self_, key_, value_, ff_core_Ordering_Order$K, $c) {
return ff_core_RbMap.RbMap_add(self_, key_, ff_core_Option.Some(value_), ff_core_Ordering_Order$K)
}

export async function Map_addAll$(self_, that_, ff_core_Ordering_Order$K, $c) {
let result_ = self_;
ff_core_RbMap.RbMap_each(that_, ((_1, _2) => {
{
const k_ = _1;
const v_ = _2;
if(_2.Some) {
result_ = ff_core_RbMap.RbMap_add(result_, k_, v_, ff_core_Ordering_Order$K)
return
}
}
{
const k_ = _1;
if(_2.None) {

return
}
}
}), ff_core_Ordering_Order$K);
return result_
}

export async function Map_get$(self_, key_, ff_core_Ordering_Order$K, $c) {
return ff_core_Option.Option_flatten(ff_core_RbMap.RbMap_get(self_, key_, ff_core_Ordering_Order$K))
}

export async function Map_remove$(self_, key_, ff_core_Ordering_Order$K, $c) {
return ff_core_RbMap.RbMap_add(self_, key_, ff_core_Option.None(), ff_core_Ordering_Order$K)
}

export async function Map_removeAll$(self_, that_, ff_core_Ordering_Order$K, $c) {
let result_ = self_;
ff_core_RbMap.RbMap_each(that_, ((_1, _2) => {
{
const k_ = _1;
if(_2.Some) {
result_ = ff_core_RbMap.RbMap_remove(result_, k_, ff_core_Ordering_Order$K)
return
}
}
{
const k_ = _1;
if(_2.None) {

return
}
}
}), ff_core_Ordering_Order$K);
return result_
}

export async function Map_pairs$(self_, ff_core_Ordering_Order$K, $c) {
return ff_core_List.List_flatMap(ff_core_RbMap.RbMap_pairs(self_, ff_core_Ordering_Order$K), ((_1) => {
{
const k_ = _1.first_;
if(_1.second_.Some) {
const v_ = _1.second_.value_;
return ff_core_List.Link(ff_core_Pair.Pair(k_, v_), ff_core_List.Empty())
return
}
}
{
const k_ = _1.first_;
if(_1.second_.None) {
return ff_core_List.Empty()
return
}
}
}))
}

export async function Map_size$(self_, ff_core_Ordering_Order$K, $c) {
return ff_core_List.List_foldLeft(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), 0, ((total_, _) => {
return (total_ + 1)
}))
}

export async function Map_map$(self_, body_, ff_core_Ordering_Order$K, ff_core_Ordering_Order$K1, $c) {
const initial_ = ff_core_RbMap.RbLeaf();
return (await ff_core_List.List_foldLeft$(ff_core_Map.Map_pairs(self_, ff_core_Ordering_Order$K), initial_, (async (tree_, pair_, $c) => {
{
const _1 = (await body_(pair_, $c));
{
const k_ = _1.first_;
const v_ = _1.second_;
return ff_core_Map.Map_add(tree_, k_, v_, ff_core_Ordering_Order$K1)
return
}
}
}), $c))
}

export async function Map_contains$(self_, key_, ff_core_Ordering_Order$K, $c) {
return (!ff_core_Option.Option_isEmpty(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K)))
}

export async function Map_expect$(self_, key_, ff_core_Ordering_Order$K, $c) {
return ff_core_Option.Option_expect(ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K))
}

export async function Map_updateOrInsert$(self_, key_, update_, default_, ff_core_Ordering_Order$K, $c) {
{
const _1 = ff_core_Map.Map_get(self_, key_, ff_core_Ordering_Order$K);
{
if(_1.None) {
return ff_core_Map.Map_add(self_, key_, (await default_($c)), ff_core_Ordering_Order$K)
return
}
}
{
if(_1.Some) {
const v_ = _1.value_;
return ff_core_Map.Map_add(self_, key_, (await update_(v_, $c)), ff_core_Ordering_Order$K)
return
}
}
}
}

export async function Map_each$(self_, body_, ff_core_Ordering_Order$K, $c) {
(await ff_core_RbMap.RbMap_each$(self_, (async (_1, _2, $c) => {
{
const k_ = _1;
if(_2.Some) {
const v_ = _2.value_;
(await body_(k_, v_, $c))
return
}
}
{
if(_2.None) {

return
}
}
}), $c, ff_core_Ordering_Order$K))
}

export function Map_addToList(self_, key_, value_, ff_core_Ordering_Order$K) {
return ff_core_Map.Map_updateOrInsert(self_, key_, ((_w1) => {
return ff_core_List.Link(value_, _w1)
}), (() => {
return ff_core_List.Link(value_, ff_core_List.Empty())
}), ff_core_Ordering_Order$K)
}

export async function Map_addToList$(self_, key_, value_, ff_core_Ordering_Order$K, $c) {
return ff_core_Map.Map_updateOrInsert(self_, key_, ((_w1) => {
return ff_core_List.Link(value_, _w1)
}), (() => {
return ff_core_List.Link(value_, ff_core_List.Empty())
}), ff_core_Ordering_Order$K)
}




