# Modules and packages

In Firefly, source code is organized in packages, which can be versioned, released and depended on. 
Inside packages, there are modules, which are individual files that can be imported from other modules.

The minimal package consists of just a single module file, and nothing else.
Such a module can contain the following top level constructs:

```firefly
// Package information
package mygroup:mypackage:1.2.3
dependency ff:webserver:0.0.0
include "node_modules"

// Module imports
import WebServer from ff:webserver

// Named constants
answer: Int = 42

// Function definitions
f(x: Int): Int {
    
}

// Type definitions
data Point(x: Int, y: Int)

// Method definitions
extend self: Point {

}

// Traits and trait instances
trait T: HasCenter {

}
instance Point: HasCenter {

}
```

In a multi-file package, the package information is instead specified in a separate `package.ff` file which must live in the `.firefly/` subdirectory. A typical multi-file package looks like this:

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


# Package information

The `package` keyword specifies the group name, package name and major.minor.patch package version:

```firefly
package mygroup:mypackage:1.2.3
```

A group is a person, organization or similar entity that's allowed to publish packages under that group name.

If present, the `package` keyword must be the first token in the file. In a single file package, all the package information goes before any other content.

The `dependency` keyword specifies the group name, package name and major.minor.patch package version of a package that is a dependency of this package:

```firefly
dependency ff:webserver:0.0.0
```

There may be zero or more dependencies. If there are conflicting versions of the same package in the dependencies or transitive dependencies, the first version that's encountered in a breadth first search from top to bottom will be used.

The `include` keyword includes files verbatim in the JavaScript that is emitted by the compiler:

```firefly
include "node_modules"
```

This instructs the compiler to copy the file or directory `mypackage/.firefly/include/node_modules` verbatim into the `mypackage/.firefly/ouput/node/mygroup/mypackage/node/node_modules` directory. It doesn't do anything for the browser target.


# Imports

To access the symbols that a module exports, it is necessary to import it:

```firefly
import WebServer from ff:webserver
```

This imports the `WebServer` module from the `ff:webserver` package, which must have been declared as a dependency.

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
