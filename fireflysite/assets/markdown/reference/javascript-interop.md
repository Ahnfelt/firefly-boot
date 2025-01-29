# JavaScript interop

Firefly compiles to JavaScript, which enables it to run in the browser.
It uses Node.js as its server side and desktop runtime.

The JavaScript interop features enable the wrapping of libraries that are written in JavaScript so that they can be used in Firefly.


# The JsSystem

Most JavaScript functionality can be accessed via the `JsSystem` object.

```firefly
browserMain(system: BrowserSystem): Unit {
    let js = system.js()
    js->document->onclick = js->{
        js->Notification->requestPermission()->then(js->{
            js->Notification->(
                "Hi!"
                js->(body = "From the Firefly JS FFI")
            )
        })
    }
}
```

This is equivalent to the following JavaScript:

```js
document.onclick = () =>
    Notification.requestPermission().then(() =>
        new Notification(
            "Hi!",
            {body: "From the Firefly JS FFI"}
        )
    )
```

The `->` is shorthand for calling the methods `get`, `set`, `increment`, `decrement`, `object`, `call1`, `new1` and `function1` (substitute 0 to 9 for 1).

The `js` variable is of the type `JsSystem` and the rest of the expressions return `JsValue`, which represents an arbitrary JavaScript value.

In addition, the `!` and `?` postfix operators can be used as shorthand for `Js.value(...)` and `Js.fromValue(...)`.


# The Js module

This module provides access to unsafe JavaScript features:

```firefly
// Returns a JsSystem.
jsSystem(): JsSystem

// A static JS import that works anywhere but the browser target.
import(module: String): JsValue

// A static JS import that works in the browser target.
browserImport(module: String): JsValue

// A dynamic JS import.
dynamicImport(module: String): JsValue

// Creates an async JS function. Goes up to 9.
async0[R](body: () => JsValue): JsValue
    
// Returns True if the current target is async
inAsync(): Bool
    
// Returns True if the current target is browser
inBrowser(): Bool
    
// Returns True if the current target is node
inNode(): Bool
    
// Returns True if the current target is build
inBuild(): Bool

// Returns the current task.
currentTask(): Task

// Throws if the current task is cancelled.
throwIfCancelled(): Unit

// Returns True if the current task is cancelled.
cancelled(): Bool

// Returns the AbortController of the current task.
controller(): JsValue {
    currentTask().controller
}

// Sets the AbortController of the current task.
setController(controller: JsValue)
    
// Gives access to the AbortSignal of the current task and resets it if needed after use.
withSignal[T](body: JsValue => T): T

// Awaits a JS promise.
await(promise: JsValue): JsValue

// Creates a promise and awaits it, while handling cancellation and cleanup. Used like:
// awaitCancellablePromise {resolve, reject, onSettle => ... onSettle {fulfilled => cleanup()} ...}
awaitCancellablePromise[T](body: (T => Unit, Error => Unit, (Bool => Unit) => Unit) => Unit): T

// Casts a Firefly value to a JS value.
value[T](value: T): JsValue

// Casts a JS value to a Firefly value.
fromValue[T](value: JsValue): T

// Throw a JS value (preferably a JS Error).
throw[T](value: JsValue): T

// JS operators like !
unaryOperator[T1: IsJsValue](operator: String, a1: T1): JsValue

// JS operators like + - *
binaryOperator[T1: IsJsValue, T2: IsJsValue](operator: String, a1: T1, a2: T2): JsValue

// JS operators like || && ??
shortCircuitingOperator[T1: IsJsValue, T2: IsJsValue](operator: String, a1: T1, a2: () => T2): JsValue

// Access a raw JS identifier.
rawIdentifier(operator: String): JsValue

// Returns the JS globalThis object.
globalThis(): JsValue

// Gets the value of a JS variable.
get(key: String): JsValue

// Sets the value of a JS variable.
set[V: IsJsValue](key: String, value: V): Unit

// Increments the value of a JS variable.
increment[V: IsJsValue](key: String, value: V): Unit

// Decrements the value of a JS variable.
decrement[V: IsJsValue](key: String, value: V): Unit

// Calls a JS variable with zero arguments. Goes up to 9.
call0(name: String): JsValue

// Returns JS null
null(): JsValue

// Returns JS undefined
undefined(): JsValue

// Returns JS undefined if None, and casts the value otherwise
orUndefined[T: IsJsValue](value: Option[T]): JsValue

// Creates an empty JS object
object(): JsValue

// Same as Js.object()
new0(): JsValue

// Cast a List to a JsValue
array(values: List[JsValue]): JsValue

// Cast a Json value to a JsValue
json(value: Json): JsValue

// A JS function of 0 parameters. Goes up to 9.
function0[R](body: () => R): JsValue
```

In the future, it may be possible to provide a whitelist of dependencies that are allowed to use this module.


# Emitted JavaScript

While most Firefly code maps directly to the JavaScript equivalent, there are two notable exceptions:

 * I/O appears to be blocking, but compiles down to JavaScript `async`/`await`.
 * Methods are resolved statically in Firefly and become top level functions in JavaScript.

In addition, pattern matching doesn't have a direct equivalent in JavaScript, and neither does traits.

Consider the following main function:

```firefly
nodeMain(system: NodeSystem) {
    
    let files = ["a.txt", "b.txt"]
    
    let contents = files.map {file =>
        system.path(file).readText()
    }
    
    let upper = contents.map {content =>
        content.upper()
    }
    
    system.writeLine("Result: " + upper.join(""))
    
}
```

The JavaScript that's emitted looks roughly like this:

```js
export async function nodeMain$(system) {
    
    const files = ["a.txt", "b.txt"]
    
    const contents = await List_map$(files, async file => {
        return await Path_readText$(await NodeSystem_path$(system, file))
    })
    
    const upper = List_map(contents, content => {
        return String_upper(content)
    })
    
    NodeSystem_writeLine$("Result: " + String_join(upper, ""))
    
}
```

In JavaScript, `nodeMain` becomes an `async` function and gets the `$` suffix to distinguish it from a synchronous function.

The `let` keyword in Firefly corresponds to the `const` keyword in JavaScript, and Firefly list literals become JavaScript array literals.

The `map` method becomes a top level function, or rather, one `async` top level function named `List_map$` and another synchronous function named `List_map`.
A static analysis is performed to decide which version to call.

Because the first call to `map` is passed an anonymous function that calls a method on `system`, which is a capability, and the current top level function is asynchronous,
the analysis picks the asynchronous version `List_map$` and uses the `await` keyword.

The second call to `map` is passed an anonymous function that doesn't involve any other capabilities, the analysis picks the synchronous version `List_map`.

This static analysis is necessarily conservative, and may occasionally call the asynchronous version of a function where the synchrhonous version would suffice.
When using the VSCode extension, the hover information for a call will note if the call is asynchronous.

