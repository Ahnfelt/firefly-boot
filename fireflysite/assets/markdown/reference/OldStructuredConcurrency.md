# Structured concurrency

Firefly has a lightweight task system that supports structured concurrency and cancellation. 

Tasks are structured in a parent-child relationship, where the parent scope waits for all its child tasks to complete before proceeding.

If the parent task or a sibling subtask fails with an uncaught exception, the other subtasks are cancelled.


# Spawning a subtask

The `system` parameter for the main function has a `mainTask()` method that returns a `Task`.
This is the main task whose lifecycle corresponds to that of the application.
A task can `spawn` subtasks:

```firefly
nodeMain(system: NodeSystem) {
    system.mainTask().spawn {subtask =>
        while {True} {
            Log.trace("Hello from subtask!")
            subtask.sleep(Duration(1.0))
        }
    }
    while {True} {
        Log.trace("Hello from main task!")
        system.mainTask().sleep(Duration(1.0))
    }
}
```

In the above example, there's one while loop running in the subtask, and another running in the main task.
They run concurrently, and the `"Hello..."` messages are thus logged in an interleaved fashion.


# Waiting for subtasks

```firefly
nodeMain(system: NodeSystem) {
    system.mainTask().spawn {task =>
        task.spawn {subtask =>
            while {True} {
                Log.trace("Hello from subtask!")
                subtask.sleep(Duration(1.0))
            }
        }
    }
}
```
