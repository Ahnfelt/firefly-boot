import {main_$} from './Main.mjs'
import * as ff_core_Error from "../../ff/core/Error.mjs"
export async function $run$(fireflyPath_, arguments_) {
Error.stackTraceLimit = 50
const $task = {controller_: new AbortController(), subtasks_: new Set(), promise_: new Promise(() => {}), started_: performance.now() * 0.001}
let interval = setInterval(() => {}, 24 * 60 * 60 * 1000)
let system = {
task_: $task,
array_: arguments_,
fireflyPath_: fireflyPath_,
mainPackagePair_: {group_: "ff", name_: "compiler"},
executableMode_: false,
buildMode_: false
}
try {
await main_$(system, $task)
} catch(error) {
console.error(ff_core_Error.Error_stack(error))
process.exit(1)
} finally {
$task.controller_.abort()
clearInterval(interval)
}
}
import * as path from 'node:path'
queueMicrotask(async () => {
let fireflyPath_ = path.dirname(path.dirname(path.dirname(path.dirname(path.dirname(process.argv[1])))))
await $run$(fireflyPath_, process.argv.slice(2))
})
