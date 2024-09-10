# Modules

Every Firefly module lives in a single `.ff` file. The name of the file without the extension is the module name. It must start with a capital letter, and can only contain alphanumeric characters. In general, names in Firefly must only contain ASCII letters and numbers.

A file may contain module imports and top level definitions, in that order.

A top level definition is either a [type](user-defined-types), a [trait or instance](traits-and-instances), a [function or extends block](functions-and-methods), or a constant.

For single-file `.ff` scripts, the contents of `.firefly/package.ff` can be placed at the top of your script instead, see [Packages and depdendencies](packages-and-dependencies).


# Imports

```firefly
import WebServer from ff:webserver
```

```firefly
import WebServer as W from ff:webserver
```


# Main functions

In Firefly, there are three targets, each with its own main file:

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

