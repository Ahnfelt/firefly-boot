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

// type Option
const None$ = {_: 'None'};
export function None() {
return None$;
}
export function Some(value_) {
return {_: 'Some', value_};
}





export function Option_else(self_, body_) {
return (((_1) => {
{
if(_1._ === 'None') {
return body_()
return
}
}
{
if(_1._ === 'Some') {
const value_ = _1.value_
return value_
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_elseIf(self_, condition_, body_) {
return (((_1) => {
{
if(_1._ === 'None') {
return (((_1) => {
{
if(_1) {
return ff_core_Option.Some(body_())
return
}
}
{
if(!_1) {
return ff_core_Option.None()
return
}
}
throw new Error('Unexhaustive pattern match')
}))(condition_())
return
}
}
{
if(_1._ === 'Some') {
return self_
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_orElse(self_, body_) {
return (((_1) => {
{
if(_1._ === 'None') {
return body_()
return
}
}
{
if(_1._ === 'Some') {
return self_
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_isEmpty(self_) {
return (((_1) => {
{
if(_1._ === 'None') {
return true
return
}
}
{
if(_1._ === 'Some') {
return false
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_toList(self_) {
return (((_1) => {
{
if(_1._ === 'None') {
return ff_core_Array.Array_toList([])
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return ff_core_Array.Array_toList([v_])
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_filter(self_, body_) {
return (((_1) => {
{
if(_1._ === 'Some') {
const v_ = _1.value_
if(body_(v_)) {
return ff_core_Option.Some(v_)
return
}}
}
{
return ff_core_Option.None()
return

}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_map(self_, body_) {
return (((_1) => {
{
if(_1._ === 'None') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return ff_core_Option.Some(body_(v_))
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_flatMap(self_, body_) {
return (((_1) => {
{
if(_1._ === 'None') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return body_(v_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_each(self_, body_) {
(((_1) => {
{
if(_1._ === 'None') {

return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return body_(v_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_all(self_, body_) {
return (((_1) => {
{
if(_1._ === 'None') {
return true
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return body_(v_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_any(self_, body_) {
return (((_1) => {
{
if(_1._ === 'None') {
return false
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return body_(v_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_expect(self_) {
return (((_1) => {
{
if(_1._ === 'None') {
return ff_core_Core.panic_("None.expect()")
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return v_
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_contains(self_, value_) {
return (((_1) => {
{
if(_1._ === 'None') {
return false
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return (v_ == value_)
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}

export function Option_flatten(self_) {
return (((_1) => {
{
if(_1._ === 'None') {
return ff_core_Option.None()
return
}
}
{
if(_1._ === 'Some') {
const v_ = _1.value_
return v_
return
}
}
throw new Error('Unexhaustive pattern match')
}))(self_)
}


