# firefly-boot
This is a bootstrap transpiler for converting Firefly code to JavaScript code.

Status: Firefly has been bootstrapped and now transpiles itself into JavaScript.

**Async/await inference:** https://www.ahnfelt.net/async-await-inference-in-firefly/

## Compiling the compiler

```
firefly.sh bootstrap
```

## Running a main file

```
firefly.sh run MyApp.ff
```

The main file may include main functions for multiple targets, such as `browserMain` and `nodeMain`. 
Each of those targets will be built before running. 

Missing dependencies are fetched from the central or configured package repository before building and running.

## Building an executable

*Not yet implemented.*

```
firefly.sh linux MyApp.ff
```

This will generate a stand-alone executable file `MyApp` with the necessary assets and dependencies, compatible with most linux distributions. 

Available platforms: `windows`, `linux`, `macos`.

## Building for the browser

```
firefly.sh browser MyApp.ff
```

This generates a single, minified `MyApp.min.js`, compatible with all modern browsers (ES6+).
