# Emitted JavaScript

While most Firefly code maps directly to the JavaScript equivalent, there are two important exceptions:

 * I/O appears to be blocking, but compiles down to JavaScript `async`/`await`.
 * Methods are resolved statically in Firefly and become top level functions in JavaScript.

In addition, pattern matching doesn't have a direct equivalent in JavaScript, and neither does traits.


# Example

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