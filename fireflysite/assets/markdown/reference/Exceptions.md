# Exceptions

Exceptions allow a program to transfer control from the point of error to a designated exception handler, separating error-handling logic from regular program flow.


# Throwing exceptions

Exceptions are thrown using the `throw` function. Example:

```firefly
grabOption[T](option: Option[T]): T {
    | Some(v) => v
    | None => throw(GrabException())
}
```

In this example, if the argument is `Some(v)`, then `v` is returned. Otherwise, a `GrabException` is thrown.

Any type declared with the `data` or `newtype` keyword can be thrown as an exception, since the type will have an instance for the `HasAnyTag` trait.


# Catching exceptions

When an exception is thrown, it propagates up the call chain to the nearest `try`, where it can be caught:

```firefly
try {
    grabOption(None)
} catch {| GrabException, error =>
    Log.trace("A GrabException occurred")
    error.rethrow()
}
```

The first argument passed to `catch` is the thrown value, and the second parameter contains the stack trace.
The `rethrow()` method throws the exception again without altering the stack trace.
It is used when the exception is caught where it can't be fully handled.

If the exception reaches the top of the call stack, the exception value and the stack trace will be printed.


# Catching any exception

It is also posssible to catch any exception, regardless of its type, using the `catchAny` method:

```firefly
try {
    let result = fragileOperation()
    Some(result)
} catchAny {error =>
    None
}
```


# Cleaning up

Cleanup often needs to happen whether or not an exception is thrown.
This is what the `finally` method guarantees:

```firefly
let fileHandle = path.readHandle()
try {
    process(fileHandle)
} finally {
    fileHandle.close()
}
```

If the program is terminated abnormally (force closed, power is lost, etc.) there is no guarantee that `finally` will get called.
In most environments, the operating system will occasionally terminate the program abnormally, so programs should be designed such that they can recover from abnormal termination.


# Catching multiple exceptions

The `try` function returns a value of type `Try[T]` that is defined as follows:

```firefly
data Try[T] {
    Success(value: T)
    Failure(error: Error)
}
```

The `catch`, `catchAny` and `finally` methods are defined on this type. However, since they don't return a `Try[T]` value, they can't be chained.

However, the alternative `tryCatch`, `tryCatchAny` and `tryFinally` methods do return a `Try[T]` value, and can thus be chained:

```firefly
try {
    doSomething()
} tryCatch {| GrabException, error =>
    reportSpecificError()
} tryCatchAny {error =>
    reportGeneralError()
} finally {
    performCleanup()
}
```

The last method in the chain here is `finally`. If it was `tryFinally`, a value of type `Try[T]` would be returned.
