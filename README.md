# firefly-boot
This is a bootstrap transpiler for converting Firefly code to JavaScript code.

Status: Firefly has been bootstrapped and now transpiles itself into JavaScript.

**Async/await inference:** https://www.ahnfelt.net/async-await-inference-in-firefly/

## Compiling the compiler

```
node output/js/ff/compiler/Main.mjs node ff:compiler Main ff:compiler@compiler,ff:core@core output/temporary output/js
```

