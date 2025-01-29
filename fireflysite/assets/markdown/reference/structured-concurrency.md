# Structured concurrency

Firefly has a lightweight task system that supports structured concurrency and cancellation. 

Tasks are structured in a parent-child relationship, where the parent scope waits for all its child tasks to complete before proceeding.

If the parent task or a sibling subtask fails with an uncaught exception, the other subtasks are cancelled.


# Waiting for results

A simple use case is to concurrently run some tasks and waiting for their results.
This can be done without explicitly spawning tasks, as there's a utility method `task.mapList()` for this:

```firefly
let results = system.mainTask().mapList(urls) {url =>
    system.httpClient().get(url) {_.readText()}
}
```

This fetches all of the URLs concurrently. 
If any fetch throws an exception, the other fetches are cancelled and `task.mapList()` rethrows an exception. 
Otherwise, the list of results is returned.

Similarly, `task.raceList()` can be used to run some tasks concurrently, wait for the first one to complete, and cancel the others.


# Spawning tasks

A slightly more advanced use case is handling requests concurrently. It might look like this:

```firefly
while {True} {
    let request = waitForRequest()
    system.mainTask().spawn {subtask =>
        handleRequest(subtask, request)
    }
}
```

The infinite loop here calls some function to wait for the next request.
Then it spawns a subtask to handle the request, and loops back to waiting for the next request.
The subtask executes concurrently, and thus doesn't block the loop while the request is being handled.


# Channels

Concurrently running tasks may need to communicate while executing.
One mechanism for inter-task communication is the `Channel[T]` type, which represents an unbuffered multi-producer multi-consumer channel for messages of type `T`.

A function to read URLs from a channel, fetch JSON from those URLs, and write the results to another channel could look like this:

```firefly
fetchTask(in: Channel[String], out: Channel[Json]) {
    while {True} {
        let url = in.read()
        let result = system.httpClient().get(url) {_.readJson()}
        out.write(result)
    }
}
```

The `in.read()` call waits until there's a task ready to write to the `in` channel.
Similarly, the `out.write()` call waits until there's a task ready to read from the `out` channel.

To do multiple requests concurrently, spawn multiple instances of the task:

```firefly
let in = system.mainTask().channel()
let out = system.mainTask().channel()
1.to(3).each {_ => 
    system.mainTask().spawn {_ =>
        fetchTask(in, out)
    }
}
```

Consider calling an API that either returns `{value: ...}` where `...` is some number, or `{add: ...}` where `...` is a list of API URLs to add up to a total.
A first attempt could be adding the following code:

```firefly
mutable total = 0
in.write("https://example.com/my-api")
while {True} {
    let json = out.read()
    json.field("value").map {total += _.grabInt()}.else {
        let urls = json.field("add").map {_.grabArray().map {_.grabString()}}
        urls.each {url =>
            in.write(url)
        }
    }
}
```

However, there are two problems here:

 * If all the fetch tasks are waiting to write to the `out` channel, `in.write(url)` will block forever.
 * There's no logic to discover that there are no API calls left to do, so the `total` will never be reported.
 
[Next](javascript-interop)
