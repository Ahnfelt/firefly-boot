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

In addition, the `!` and `?` postfix operators can be used as shorthand for `UnsafeJs.value(...)` and `UnsafeJs.fromValue(..)`.


# The UnsafeJs module

This module provides access to unsafe JavaScript features:

```firefly
// Obtains the JsSystem without a capability
jsSystem(): JsSystem

// Imports a JavaScript module (the import gets hoisted to a top level import)
import(module: String): JsValue

// Awaits an async function (only works in async context)
await[T](body: () => T): T

// Throws TaskAbortedException if the current task has been aborted
throwIfCancelled(): Unit

// Returns true if the current task has been aborted
cancelled(): Bool

// Returns true if the current target is async
inAsync(): Bool
    
// Returns true if the current target is browser
inBrowser(): Bool
    
// Returns true if the current target is node
inNode(): Bool
    
// Returns true if the current target is build
inBuild(): Bool

// Casts any Firefly value to a JavaScript value without conversion
value[T](value: T): JsValue

// Casts any JavaScript value to a Firefly value without conversion
fromValue[T](value: JsValue): T
```

In the future, it may be possible to provide a whitelist of dependencies that are allowed to use this module.


# Internal FFI

The `target` keyword allows writing almost raw JavaScript.

```firefly
alertHi(name: String)
    target browser sync """
        alert("Hi " + name_ + "!");
    """
```

Multiple target keywords are allowed per function or method. 
The target type is `js` or the more specific types `browser` or `node`, and then a mode that's either `sync` for when called synchronously, or `async` for when called asynchronously.

Argument names are avaliable with a `_` suffix in the JavaScript code block.

JavaScript module imports can be done in the beginning of a JavaScript code block with the specfic syntax `import * as foo from 'bar'`. The import statement will be hoisted to a top level import.

In the future, the `target` keyword and its functionality may be removed from the language.


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

