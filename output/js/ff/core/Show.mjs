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

// type Tree
export function Branch(left_, right_) {
return {Branch: true, left_, right_};
}
export function Leaf(value_) {
return {Leaf: true, value_};
}



export function baz_(value_, ff_core_Show_Show$T) {
return ff_core_Show_Show$T.show_(value_)
}

export function foobar_() {
ff_core_Log.debug_(ff_core_Show.baz_(ff_core_List.Link(42, ff_core_List.Empty()), ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Int_Int)))
}

export function quux_() {
ff_core_Log.debug_(ff_core_Show.ff_core_Show_Show$ff_core_Show_Tree(ff_core_Show.ff_core_Show_Show$ff_core_Int_Int).show_(ff_core_Show.Branch(ff_core_Show.Branch(ff_core_Show.Leaf(7), ff_core_Show.Leaf(8)), ff_core_Show.Leaf(9))))
}

export async function baz_$(value_, ff_core_Show_Show$T, $c) {
return ff_core_Show_Show$T.show_(value_)
}

export async function foobar_$($c) {
ff_core_Log.debug_(ff_core_Show.baz_(ff_core_List.Link(42, ff_core_List.Empty()), ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_core_Show.ff_core_Show_Show$ff_core_Int_Int)))
}

export async function quux_$($c) {
ff_core_Log.debug_(ff_core_Show.ff_core_Show_Show$ff_core_Show_Tree(ff_core_Show.ff_core_Show_Show$ff_core_Int_Int).show_(ff_core_Show.Branch(ff_core_Show.Branch(ff_core_Show.Leaf(7), ff_core_Show.Leaf(8)), ff_core_Show.Leaf(9))))
}



export const ff_core_Show_Show$ff_core_Bool_Bool = {
show_(value_) {
{
const value_a = value_;
{
if(!value_a) {
return "False"
return
}
}
{
if(value_a) {
return "True"
return
}
}
}
},
async show_$(value_, $c) {
{
const value_a = value_;
{
if(!value_a) {
return "False"
return
}
}
{
if(value_a) {
return "True"
return
}
}
}
}
};

export const ff_core_Show_Show$ff_core_Char_Char = {
show_(value_) {
return ff_core_Char.Char_toString(value_)
},
async show_$(value_, $c) {
return ff_core_Char.Char_toString(value_)
}
};

export const ff_core_Show_Show$ff_core_Int_Int = {
show_(value_) {
return ("" + value_)
},
async show_$(value_, $c) {
return ("" + value_)
}
};

export const ff_core_Show_Show$ff_core_String_String = {
show_(value_) {
return JSON.stringify(value_);
},
async show_$(value_, $c) {
return ff_core_Core.panic_("magic")
}
};

export function ff_core_Show_Show$ff_core_List_List(ff_core_Show_Show$T) { return {
show_(value_) {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(value_, ((value_) => {
return ff_core_Show_Show$T.show_(value_)
})), ", ")) + "]")
},
async show_$(value_, $c) {
return (("[" + ff_core_List.List_join(ff_core_List.List_map(value_, ((value_) => {
return ff_core_Show_Show$T.show_(value_)
})), ", ")) + "]")
}
}}

export function ff_core_Show_Show$ff_core_Show_Tree(ff_core_Show_Show$T) { return {
show_(value_) {
{
const value_a = value_;
{
if(value_a.Branch) {
const l_ = value_a.left_;
const r_ = value_a.right_;
return (((("Branch(" + ff_core_Show.ff_core_Show_Show$ff_core_Show_Tree(ff_core_Show_Show$T).show_(l_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Show_Tree(ff_core_Show_Show$T).show_(r_)) + ")")
return
}
}
{
if(value_a.Leaf) {
const v_ = value_a.value_;
return (("Leaf(" + ff_core_Show_Show$T.show_(v_)) + ")")
return
}
}
}
},
async show_$(value_, $c) {
{
const value_a = value_;
{
if(value_a.Branch) {
const l_ = value_a.left_;
const r_ = value_a.right_;
return (((("Branch(" + ff_core_Show.ff_core_Show_Show$ff_core_Show_Tree(ff_core_Show_Show$T).show_(l_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_Show_Tree(ff_core_Show_Show$T).show_(r_)) + ")")
return
}
}
{
if(value_a.Leaf) {
const v_ = value_a.value_;
return (("Leaf(" + ff_core_Show_Show$T.show_(v_)) + ")")
return
}
}
}
}
}}


