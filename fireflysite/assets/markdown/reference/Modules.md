# Modules

Every Firefly module lives in a single `.ff` file. The name of the file without the extension is the module name. It must start with a capital letter, and can only contain alphanumeric characters. In general, names in Firefly must only contain ASCII letters and numbers.

A file may contain module imports and top level definitions, in that order.

A top level definition is either a [type](user-defined-types), a [trait or instance](traits-and-instances), a [function or extends block](functions-and-methods), or a constant.

For single-file `.ff` scripts, the contents of `.firefly/package.ff` can be placed at the top of your script instead, see [Packages and depdendencies](packages-and-dependencies).


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

Currently, all top level symbols are automatically exported.


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

Named constants may be defined at the top level:

```firefly
x: Int = 42
```

