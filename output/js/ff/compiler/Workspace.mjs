

import * as ff_compiler_Workspace from "../../ff/compiler/Workspace.mjs"

import * as ff_compiler_Syntax from "../../ff/compiler/Syntax.mjs"

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

import * as ff_core_Queue from "../../ff/core/Queue.mjs"

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

// type Workspace
export function Workspace(rules_, defaultLocation_, packageDirectory_) {
return {rules_, defaultLocation_, packageDirectory_};
}

// type WorkspaceRule
export function WorkspaceRule(packageGroup_, packageName_, location_) {
return {packageGroup_, packageName_, location_};
}

export const centralLocation_ = "https://www.firefly-lang.org/packages/";

export function loadWorkspace_(path_) {
const packageDirectory_ = ((ff_core_Path.Path_extension(path_) === ".ff")
? ff_core_Option.Option_grab(ff_core_Path.Path_parent(path_))
: path_);
const workspaceFile_ = ff_core_Path.Path_slash(packageDirectory_, ".firefly-workspace");
if(ff_core_Path.Path_exists(workspaceFile_, false, false, false)) {
return ff_compiler_Workspace.parseWorkspaceFile_(workspaceFile_, packageDirectory_)
} else if((!ff_core_Option.Option_isEmpty(ff_core_Path.Path_parent(packageDirectory_)))) {
return ff_compiler_Workspace.loadWorkspace_(ff_core_Option.Option_grab(ff_core_Path.Path_parent(packageDirectory_)))
} else {
return ff_compiler_Workspace.Workspace([], ff_compiler_Workspace.centralLocation_, ".")
}
}

export function parseWorkspaceFile_(path_, packageDirectory_) {
const text_ = ff_core_Path.Path_readText(path_);
let defaultLocation_ = ff_core_Option.None();
const lines_ = ff_core_List.List_filter(ff_core_List.List_map(ff_core_String.String_split(text_, 10), ((_w1) => {
return ff_core_String.String_takeWhile(ff_core_String.String_replace(_w1, "\r", ""), ((_w1) => {
return (_w1 !== 35)
}))
})), ((_w1) => {
return (_w1.length !== 0)
}));
const rules_ = ff_core_List.List_collect(lines_, ((line_) => {
const columns_ = ff_core_List.List_filter(ff_core_String.String_split(ff_core_String.String_replace(line_, "\t", " "), 32), ((_w1) => {
return (_w1.length !== 0)
}));
for(const for_o = defaultLocation_; for_o.Some;) {
ff_core_Core.panic_(("Unexpected rule after the * rule: " + line_))
break
};
if((columns_.length !== 2)) {
ff_core_Core.panic_(("Could not parse workspace rule: " + line_))
};
const package_ = (columns_[0] ?? ff_core_List.List_grab(columns_, 0));
const location_ = (columns_[1] ?? ff_core_List.List_grab(columns_, 1));
const fixedLocation_ = (ff_core_String.String_endsWith(location_, "/")
? location_
: (location_ + "/"));
if((package_ === "*")) {
defaultLocation_ = ff_core_Option.Some(fixedLocation_);
return ff_core_Option.None()
} else {
const packageParts_ = ff_core_String.String_split(package_, 58);
if((packageParts_.length !== 2)) {
ff_core_Core.panic_(("Could not parse workspace package: " + package_))
};
if(((packageParts_[0] ?? ff_core_List.List_grab(packageParts_, 0)) === "*")) {
ff_core_Core.panic_(("Unexpected wildcard: " + package_))
};
return ff_core_Option.Some(ff_compiler_Workspace.WorkspaceRule((packageParts_[0] ?? ff_core_List.List_grab(packageParts_, 0)), (((packageParts_[1] ?? ff_core_List.List_grab(packageParts_, 1)) !== "*")
? ff_core_Option.Some((packageParts_[1] ?? ff_core_List.List_grab(packageParts_, 1)))
: ff_core_Option.None()), fixedLocation_))
}
}));
return ff_compiler_Workspace.Workspace(rules_, ff_core_Option.Option_else(defaultLocation_, (() => {
return ff_compiler_Workspace.centralLocation_
})), ff_core_Path.Path_absolute(packageDirectory_))
}

export function tarGzName_(packagePair_, version_) {
return (((((((((packagePair_.group_ + "_") + packagePair_.name_) + "_") + version_.major_) + "_") + version_.minor_) + "_") + version_.patch_) + ".tar.gz")
}

export async function loadWorkspace_$(path_, $task) {
const packageDirectory_ = (((await ff_core_Path.Path_extension$(path_, $task)) === ".ff")
? ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(path_, $task)))
: path_);
const workspaceFile_ = (await ff_core_Path.Path_slash$(packageDirectory_, ".firefly-workspace", $task));
if((await ff_core_Path.Path_exists$(workspaceFile_, false, false, false, $task))) {
return (await ff_compiler_Workspace.parseWorkspaceFile_$(workspaceFile_, packageDirectory_, $task))
} else if((!ff_core_Option.Option_isEmpty((await ff_core_Path.Path_parent$(packageDirectory_, $task))))) {
return (await ff_compiler_Workspace.loadWorkspace_$(ff_core_Option.Option_grab((await ff_core_Path.Path_parent$(packageDirectory_, $task))), $task))
} else {
return ff_compiler_Workspace.Workspace([], ff_compiler_Workspace.centralLocation_, ".")
}
}

export async function parseWorkspaceFile_$(path_, packageDirectory_, $task) {
const text_ = (await ff_core_Path.Path_readText$(path_, $task));
let defaultLocation_ = ff_core_Option.None();
const lines_ = ff_core_List.List_filter(ff_core_List.List_map(ff_core_String.String_split(text_, 10), ((_w1) => {
return ff_core_String.String_takeWhile(ff_core_String.String_replace(_w1, "\r", ""), ((_w1) => {
return (_w1 !== 35)
}))
})), ((_w1) => {
return (_w1.length !== 0)
}));
const rules_ = ff_core_List.List_collect(lines_, ((line_) => {
const columns_ = ff_core_List.List_filter(ff_core_String.String_split(ff_core_String.String_replace(line_, "\t", " "), 32), ((_w1) => {
return (_w1.length !== 0)
}));
for(const for_o = defaultLocation_; for_o.Some;) {
ff_core_Core.panic_(("Unexpected rule after the * rule: " + line_))
break
};
if((columns_.length !== 2)) {
ff_core_Core.panic_(("Could not parse workspace rule: " + line_))
};
const package_ = (columns_[0] ?? ff_core_List.List_grab(columns_, 0));
const location_ = (columns_[1] ?? ff_core_List.List_grab(columns_, 1));
const fixedLocation_ = (ff_core_String.String_endsWith(location_, "/")
? location_
: (location_ + "/"));
if((package_ === "*")) {
defaultLocation_ = ff_core_Option.Some(fixedLocation_);
return ff_core_Option.None()
} else {
const packageParts_ = ff_core_String.String_split(package_, 58);
if((packageParts_.length !== 2)) {
ff_core_Core.panic_(("Could not parse workspace package: " + package_))
};
if(((packageParts_[0] ?? ff_core_List.List_grab(packageParts_, 0)) === "*")) {
ff_core_Core.panic_(("Unexpected wildcard: " + package_))
};
return ff_core_Option.Some(ff_compiler_Workspace.WorkspaceRule((packageParts_[0] ?? ff_core_List.List_grab(packageParts_, 0)), (((packageParts_[1] ?? ff_core_List.List_grab(packageParts_, 1)) !== "*")
? ff_core_Option.Some((packageParts_[1] ?? ff_core_List.List_grab(packageParts_, 1)))
: ff_core_Option.None()), fixedLocation_))
}
}));
return ff_compiler_Workspace.Workspace(rules_, ff_core_Option.Option_else(defaultLocation_, (() => {
return ff_compiler_Workspace.centralLocation_
})), (await ff_core_Path.Path_absolute$(packageDirectory_, $task)))
}

export async function tarGzName_$(packagePair_, version_, $task) {
return (((((((((packagePair_.group_ + "_") + packagePair_.name_) + "_") + version_.major_) + "_") + version_.minor_) + "_") + version_.patch_) + ".tar.gz")
}

export function Workspace_findPackageLocation(self_, packagePair_, version_) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(self_.rules_, ((rule_) => {
return ((rule_.packageGroup_ === packagePair_.group_) && ff_core_Option.Option_all(rule_.packageName_, ((_w1) => {
return (_w1 === packagePair_.name_)
})))
})), ((rule_) => {
const prefix_ = (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(rule_.packageName_, ff_core_Option.None())
? (packagePair_.name_ + "/")
: "");
if(ff_core_String.String_contains(rule_.location_, ":")) {
return ((rule_.location_ + prefix_) + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
} else {
return (((self_.packageDirectory_ + "/") + rule_.location_) + prefix_)
}
})), (() => {
return (((((self_.defaultLocation_ + packagePair_.group_) + "/") + packagePair_.name_) + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
}))
}

export async function Workspace_findPackageLocation$(self_, packagePair_, version_, $task) {
return ff_core_Option.Option_else(ff_core_Option.Option_map(ff_core_List.List_find(self_.rules_, ((rule_) => {
return ((rule_.packageGroup_ === packagePair_.group_) && ff_core_Option.Option_all(rule_.packageName_, ((_w1) => {
return (_w1 === packagePair_.name_)
})))
})), ((rule_) => {
const prefix_ = (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(rule_.packageName_, ff_core_Option.None())
? (packagePair_.name_ + "/")
: "");
if(ff_core_String.String_contains(rule_.location_, ":")) {
return ((rule_.location_ + prefix_) + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
} else {
return (((self_.packageDirectory_ + "/") + rule_.location_) + prefix_)
}
})), (() => {
return (((((self_.defaultLocation_ + packagePair_.group_) + "/") + packagePair_.name_) + "/") + ff_compiler_Workspace.tarGzName_(packagePair_, version_))
}))
}

export const ff_core_Any_HasAnyTag$ff_compiler_Workspace_Workspace = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Workspace.Workspace" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Workspace.Workspace" + "[") + "]"))
}
};

export const ff_core_Any_HasAnyTag$ff_compiler_Workspace_WorkspaceRule = {
anyTag_() {
return ff_core_Any.internalAnyTag_((("ff:compiler/Workspace.WorkspaceRule" + "[") + "]"))
},
async anyTag_$($task) {
return ff_core_Any.internalAnyTag_((("ff:compiler/Workspace.WorkspaceRule" + "[") + "]"))
}
};

export const ff_core_Show_Show$ff_compiler_Workspace_Workspace = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Workspace" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Workspace.ff_core_Show_Show$ff_compiler_Workspace_WorkspaceRule).show_(z_.rules_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.defaultLocation_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.packageDirectory_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("Workspace" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_List_List(ff_compiler_Workspace.ff_core_Show_Show$ff_compiler_Workspace_WorkspaceRule).show_(z_.rules_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.defaultLocation_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.packageDirectory_)) + ")")
}
}
};

export const ff_core_Show_Show$ff_compiler_Workspace_WorkspaceRule = {
show_(value_) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("WorkspaceRule" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.packageGroup_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.packageName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.location_)) + ")")
}
},
async show_$(value_, $task) {
const value_a = value_;
{
const z_ = value_a;
return ((((((("WorkspaceRule" + "(") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.packageGroup_)) + ", ") + ff_core_Option.ff_core_Show_Show$ff_core_Option_Option(ff_core_Show.ff_core_Show_Show$ff_core_String_String).show_(z_.packageName_)) + ", ") + ff_core_Show.ff_core_Show_Show$ff_core_String_String.show_(z_.location_)) + ")")
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Workspace_Workspace = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Workspace.ff_core_Equal_Equal$ff_compiler_Workspace_WorkspaceRule).equals_(x_.rules_, y_.rules_) && ((x_.defaultLocation_ === y_.defaultLocation_) && (x_.packageDirectory_ === y_.packageDirectory_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return (ff_core_List.ff_core_Equal_Equal$ff_core_List_List(ff_compiler_Workspace.ff_core_Equal_Equal$ff_compiler_Workspace_WorkspaceRule).equals_(x_.rules_, y_.rules_) && ((x_.defaultLocation_ === y_.defaultLocation_) && (x_.packageDirectory_ === y_.packageDirectory_)))
}
}
};

export const ff_core_Equal_Equal$ff_compiler_Workspace_WorkspaceRule = {
equals_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.packageGroup_ === y_.packageGroup_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.packageName_, y_.packageName_) && (x_.location_ === y_.location_)))
}
},
async equals_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return true
}
{
return ((x_.packageGroup_ === y_.packageGroup_) && (ff_core_Option.ff_core_Equal_Equal$ff_core_Option_Option(ff_core_Equal.ff_core_Equal_Equal$ff_core_String_String).equals_(x_.packageName_, y_.packageName_) && (x_.location_ === y_.location_)))
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Workspace_Workspace = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const rulesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Workspace.ff_core_Ordering_Order$ff_compiler_Workspace_WorkspaceRule).compare_(x_.rules_, y_.rules_);
if((rulesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return rulesOrdering_
} else {
const defaultLocationOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.defaultLocation_, y_.defaultLocation_);
if((defaultLocationOrdering_ !== ff_core_Ordering.OrderingSame())) {
return defaultLocationOrdering_
} else {
const packageDirectoryOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.packageDirectory_, y_.packageDirectory_);
if((packageDirectoryOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageDirectoryOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const rulesOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_List_List(ff_compiler_Workspace.ff_core_Ordering_Order$ff_compiler_Workspace_WorkspaceRule).compare_(x_.rules_, y_.rules_);
if((rulesOrdering_ !== ff_core_Ordering.OrderingSame())) {
return rulesOrdering_
} else {
const defaultLocationOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.defaultLocation_, y_.defaultLocation_);
if((defaultLocationOrdering_ !== ff_core_Ordering.OrderingSame())) {
return defaultLocationOrdering_
} else {
const packageDirectoryOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.packageDirectory_, y_.packageDirectory_);
if((packageDirectoryOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageDirectoryOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Ordering_Order$ff_compiler_Workspace_WorkspaceRule = {
compare_(x_, y_) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const packageGroupOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.packageGroup_, y_.packageGroup_);
if((packageGroupOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageGroupOrdering_
} else {
const packageNameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.packageName_, y_.packageName_);
if((packageNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageNameOrdering_
} else {
const locationOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.location_, y_.location_);
if((locationOrdering_ !== ff_core_Ordering.OrderingSame())) {
return locationOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
},
async compare_$(x_, y_, $task) {
const x_a = x_;
const y_a = y_;
if((x_ === y_)) {
return ff_core_Ordering.OrderingSame()
}
{
const packageGroupOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.packageGroup_, y_.packageGroup_);
if((packageGroupOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageGroupOrdering_
} else {
const packageNameOrdering_ = ff_core_Option.ff_core_Ordering_Order$ff_core_Option_Option(ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String).compare_(x_.packageName_, y_.packageName_);
if((packageNameOrdering_ !== ff_core_Ordering.OrderingSame())) {
return packageNameOrdering_
} else {
const locationOrdering_ = ff_core_Ordering.ff_core_Ordering_Order$ff_core_String_String.compare_(x_.location_, y_.location_);
if((locationOrdering_ !== ff_core_Ordering.OrderingSame())) {
return locationOrdering_
} else {
return ff_core_Ordering.OrderingSame()
}
}
}
return
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Workspace_Workspace = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Workspace.ff_core_Serializable_Serializable$ff_compiler_Workspace_WorkspaceRule).serializeUsing_(serialization_, v_.rules_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.defaultLocation_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.packageDirectory_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Workspace.Workspace(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Workspace.ff_core_Serializable_Serializable$ff_compiler_Workspace_WorkspaceRule).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Workspace.ff_core_Serializable_Serializable$ff_compiler_Workspace_WorkspaceRule).serializeUsing_(serialization_, v_.rules_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.defaultLocation_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.packageDirectory_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 31), 0);
return ff_compiler_Workspace.Workspace(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_List_List(ff_compiler_Workspace.ff_core_Serializable_Serializable$ff_compiler_Workspace_WorkspaceRule).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};

export const ff_core_Serializable_Serializable$ff_compiler_Workspace_WorkspaceRule = {
serializeUsing_(serialization_, value_) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.packageGroup_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.packageName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.location_)
return
}
},
deserializeUsing_(serialization_) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
return ff_compiler_Workspace.WorkspaceRule(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
},
async serializeUsing_$(serialization_, value_, $task) {
const serialization_a = serialization_;
const value_a = value_;
{
const v_ = value_a;
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
ff_core_Serializable.Serialization_autoResize(serialization_, 1);
ff_core_Buffer.Buffer_setUint8(serialization_.buffer_, serialization_.offset_, 0);
serialization_.offset_ += 1;
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.packageGroup_);
ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).serializeUsing_(serialization_, v_.packageName_);
ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.serializeUsing_(serialization_, v_.location_)
return
}
},
async deserializeUsing_$(serialization_, $task) {
const variantIndex_ = ff_core_Buffer.Buffer_grabUint8(serialization_.buffer_, serialization_.offset_);
serialization_.offset_ += 1;
{
const _1 = variantIndex_;
if(_1 === 0) {
serialization_.checksum_ = ff_core_Int.Int_bitOr(((31 * serialization_.checksum_) + 35), 0);
return ff_compiler_Workspace.WorkspaceRule(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_), ff_core_Option.ff_core_Serializable_Serializable$ff_core_Option_Option(ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String).deserializeUsing_(serialization_), ff_core_Serializable.ff_core_Serializable_Serializable$ff_core_String_String.deserializeUsing_(serialization_))
}
{
throw Object.assign(new Error(), {ffException: ff_core_Any.toAny_(ff_core_Serializable.DeserializationChecksumException(), ff_core_Serializable.ff_core_Any_HasAnyTag$ff_core_Serializable_DeserializationChecksumException)})
}
}
}
};


