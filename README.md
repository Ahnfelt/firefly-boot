# Firefly programming language

A straightforward language for full-stack development. 

* Hybrid imperative+functional style with uncomplicated types.
* Code sharing between the browser and the server.
* Comprehensive IDE support (MacOS/Windows/Linux).
* Cross-compilation of executables (MacOS/Windows/Linux).
* Asynchronous functions without the async/await hassle.
* Super simple package management with repeatable builds.

*This is a preview. Please take it for a ride and tell us what you think!*

## Writing your first webapp

Install the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=firefly-team.firefly-lang).

Create a `WebApp.ff` file.

Type `webapp` and autocomplete to get a minimalistic client and server (you may need to give the extension a few seconds to initialize first).

Go to the *Run and debug* side bar and choose *create a launch.json file*.

Press F5 or click *Run*. View the running webapp at http://localhost:8080/

In the `WebApp.ff` file you'll see a `nodeMain`, which runs on the server, and a `browserMain`, which runs on the client. There's also a `buildMain` which is the build step that compiles the client side code to JavaScript so that it can be served to the browser.

## Building an executable

Install the `firefly` compiler:

```npm install -g firefly-compiler```

Build executables for Linux, MacOS and Windows:

```firefly build WebApp.ff```

You can find the executables in `.firefly/`

The command line interface can also run `WebApp.ff` directly by typing: 

```firefly WebApp.ff```

## Connecting to PostgreSQL

To connect to a PostgreSQL database, add this dependency to the top of the file:

```dependency ff:postgresql:0.0.0```

And import the `Pg` module from it:

```import Pg from ff:postgresql```

Create a connection pool with the appropriate connection parameters:

```let pool = Pg.makePool(...)```

And run your first transaction, e.g.:

```
pool.transaction {connection =>
    let emails = connection.statement("""
        select email from users
    """).map {row =>
        row.getString("email").grab()
    }
    Log.debug(emails)
}
```

## What's next

For now, you're on your own! Lots of things you'll be missing. We're working on it.

To follow the development or get help, join `#firefly` on https://discord.gg/FHv8vXJNVf - we're a friendly bunch, and your feedback is appreciated!

This repository contains the source code of the compiler and language server. It's all written in Firefly! Apart from `extension.js`, the JavaScript files you see in this repository are generated from Firefly code.
