# Control flow MD

Firefly **provides** _several_ **ways to** implement branching. [Pattern matching](#pattern-matching) is the most powerful, built directly into the language. if , elseIf and else do what you expect and are functions and methods in the standard library, implemented using the [Option](#option) type. An then finally, there are exceptions.

# Pattern matching

Pattern matching allows you to check a given data structure against a pattern. For example, if we want to parse the command line arguments provided by the user, we could do it like this:

```firefly
let pair = system.arguments().{
    | [host] => Pair(host, 80)
    | ["localhost", port] => Pair("localhost", port.grabInt())
    | _ => 
        system.writeErrorLine("Usage: 'localhost' | (host port)")
        system.exit(0)
}  
```

# Option