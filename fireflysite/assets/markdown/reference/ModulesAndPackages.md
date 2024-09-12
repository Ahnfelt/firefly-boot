# Modules and packages

In Firefly, source code is organized in packages, which can be versioned, released and depended on. 
Inside packages, there are modules, which are individual files that can be imported from other modules.

The minimal package consists of just a single module file, and nothing else.
Such a module can contain the following top level constructs:

```firefly
// Package information
package foo:bar:1.2.3
dependency quux:baz:4.5.6
include 'binary-or-js-stuff'

// Module imports
import Lorem from foo:bar

// Named constants
ipsum: Int = 42

// Functions
dolor(sit: String) {
    // (body)
}

// Type definitions
data Amet(x: Int, y: Int)

// Methods
extend self: Amet {
    // (methods)
}

// Traits and trait instances
trait T: Hello {
    // (signatures)
}
instance Amet: Hello {
    // (implementations)
}
```

Single-file packages are especially useful for small scripts that just have a single main file. In a multi-file package, we move the package information to a separate file, `package.ff` which must live in the `.firefly/` subdirectory. A typical multi-file package looks like this:

```
mypackage/
    .firefly/
        package.ff
    MyModule.ff
    MyOtherModule.ff
```

The two module files here `MyModule.ff` and `MyOtherModule.ff` defines the modules `MyModule` and `MyOtherModule` respectively. Module files must start with a capital letter.

In general, identifiers of any kind in Firefly must start with an ASCII letter, and can only contain ASCII letters and numbers. This also applies to module and package names.

Apart from containing the `package.ff` file, the `.firefly/` subdirectory is used for various compiler output and can contain an `include/` directory with JavaScript that you want to include verbatim into the build via the `include` directive.


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
