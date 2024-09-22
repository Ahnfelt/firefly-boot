# JavaScript interop

Firefly compiles to JavaScript, which enables it to run in the browser.
It uses Node.js as its server side and desktop runtime.

The JavaScript interop features enable the wrapping of libraries that are written in JavaScript so that they can be used in Firefly.


# The JsSystem

Most JavaScript functionality can be accessed via the `JsSystem` object.

```firefly
browserMain(system: BrowserSystem): Unit {
    let document = system.js().global().get("document")
    let element = document.call1("getElementById", "my-id")
    element.set("innerText", "Hi!")
}
```

This example gets the global `document`, calls `getElementId("my-id")` on it, and sets `innerText = "Hi!"`.

The type of the `document` and `element` variables here is `JsValue`, which represents an arbitrary JavaScript value.


# The ff:unsafejs package

This package provides access to unsafe JavaScript features:

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
```

In the future, it may be possible to provide a whitelist of dependencies that are allowed to use this package.


# Internal FFI

The `target` keyword allows writing almost raw JavaScript.

```firefly
sayHi(): String
    target js sync """
        return "Hi!";
    """
```

Multiple target keywords are allowed per function/method. 
The target type is `js` or the more specific types `browser` or `node`, and then a variant that's either `sync` for when called synchronously, or `async` for when called asynchronously.

In the future, the `target` keyword and its functionality may be removed from the language.
