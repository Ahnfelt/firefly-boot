# firefly-boot
This is a bootstrap transpiler for converting Firefly code to JavaScript code.

Status: Firefly has been bootstrapped and now transpiles itself into JavaScript.

You can create a whole webapp (frontend+backend) in a single file and it can be build as an executable for linux, windows and osx.

**Async/await inference:** https://www.ahnfelt.net/async-await-inference-in-firefly/


## Running a main file

```
firefly.sh MyApp.ff
```

*You must stand in the project directory when running this command.*

This will run `main` or `nodeMain` in MyApp.ff.

If there is a `buildMain(system: BuildSystem)` method, it will be run before `main`,
and if it calls `system.setAssets(assets)`, those assets will be available to the main file via `system.assets()`.

You can also have a `browserMain(system: BrowserSystem)` in the file, which can be compiled to a browser JS-file and included as an asset.

Missing dependencies are fetched from the central or configured package repository before building and running.

## Building an executable

*Not yet implemented.*

```
firefly.sh build MyApp.ff
```

*You must stand in the project directory when running this command.*

This will generate a stand-alone executable file `MyApp` with the necessary assets and dependencies, compatible with most linux distributions, windows and osx. 

## Building for the browser

```
firefly.sh browser MyApp.ff
```

*You must stand in the project directory when running this command.*

This generates a single, minified `MyApp.min.js`, compatible with all modern browsers (ES6+).

## Bootstrapping the compiler

```
firefly.sh bootstrap
```

*You must stand in the project directory when running this command.*

If you botch the compiler, just roll back the output directory and try again.

## Dependencies and imports

You may list your dependencies either in the top of the main file or in `.firefly/package.ff`.

In order to establish a package directory, and thus allow importing other files from the current package, you must place a `.firefly/package.ff` file. 

Example (all lines optional):
```
package john:stuff:0.1.7
dependency anne:goodies:2.1.0
dependency chris:images:0.7.0
```

You don't have to manually install dependencies - they will be automatically downloaded when necessary.

## Workspaces

You may place a `.firefly-workspace` file somewhere in a parent directory.

The workspace file configures where source code is fetched from. 

It can be a local directory or a remote repository.

Example:

```
foo:stuff projects/foo/stuff
bar:* projects/foo
* https://example.com/repository
```
