# firefly-boot
This is a bootstrap transpiler for converting Firefly code to JavaScript code.

Status: Firefly has been bootstrapped and now transpiles itself into JavaScript.

## Compiling the compiler

```
node output/js/ff/compiler/Main.mjs ff:compiler Main ff:compiler@compiler,ff:core@core output/temporary output/js
```
