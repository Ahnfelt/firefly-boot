# Modules

Every Firefly module lives in a single `.ff` file. The name of the file without the extension is the module name. It must start with a capital letter, and can only contain alphanumeric characters. In general, names in Firefly must only contain ASCII letters and numbers.

A file may contain module imports and top level definitions, in that order.

A top level definition is either a [type](user-defined-types), a [trait or instance](traits-and-instances), a [function or extends block](functions-and-methods), or a constant.

For single-file `.ff` scripts, the contents of `.firefly/package.ff` can be placed at the top of your script instead, see [Packages and depdendencies](packages-and-dependencies).

```firefly
package foo:bar:1.2.3
dependency quux:baz:4.5.6
include 'binary-or-js-stuff'

import Lorem from foo:bar

ipsum: Int = 42

dolor(sit: String) {
    // function body
}

data Amet(x: Int, y: Int)

extend self: Amet {
    // method definitions
}

trait T: Hello {
    // trait function signatures
}

instance Amet: Hello {
    // trait function implementations
}
```



# Imports

To access the symbols that a module exports, it is necessary to import it:

```firefly
import WebServer from ff:webserver
```

This imports the `WebServer` module from the `ff:webserver` package, which must have been declared as a dependency elsewhere.

Symbols exported from the module can then be accessed using the `WebServer.` prefix:

```firefly
WebServer.new(system, "localhost", 8080)
```

Types, variants and traits are available under the prefix, but can also be accessed with no prefix at all. In the case of naming collisions between these, the last import wins.

If two imported modules have the same name, or a different prefix is desired, the symbols can be imported under a different prefix:

```firefly
import WebServer as W from ff:webserver
```

The symbols can then be accessed using the `W.` prefix:

```firefly
W.new(system, "localhost", 8080)
```


# Exports

Currently, all top level definitions are automatically exported. This is likely to change in the future.


# Main

In Firefly, there are three targets, each with its own main function:

```firefly
nodeMain(system: NodeSystem) {
    system.writeLine("Hello server!")
}

browserMain(system: BrowserSystem) {
    system.writeLine("Hello browser!")
}

buildMain(system: BuildSystem) {
    system.writeLine("Hello build!")
}
```

The three main functions may coexist in the same file.

The `nodeMain` function runs when you run your executable.

The `browserMain` function runs in the browser.

The `buildMain` function runs when you build your program.

The `system` parameter is an object that lets you do I/O in the target system.


# Constants

Named constants may be defined at the top level, and must have an explict type:

```firefly
answer: Int = 42
```

Here `answer` is defined to be an `Int` with the value `42`.

There's no global state in Firefly, and to enforce this, the type of a named constant must have be declared with the `data` or `newtype` keyword.

Named constants that occur on the right hand side must not directly or indirecly refer to the named constant being defined.

Neither of the requirements are enforced currently, but this is likely to change in the future.
