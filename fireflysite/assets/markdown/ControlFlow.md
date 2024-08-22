# Control flow

Firefly provides several ways to implement branching. Pattern matching is the most powerful, built directly into the language. `if`, `elseIf` and `else` do what you expect and are functions and methods in the standard library, implemented using the `Option` type. An then finally, there are [exceptions](#Exceptions).

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

In Firefly you construct a list of strings (`List[String]`) like this `["example.com", "80"]`, and using pattern matching you can de-construct in the same way.

```firefly
data.{
    | pattern1 => // case 1
    | pattern2 => // case N
    ...
}
```

The patterns must be exhaustive, that is, for any possible value of the given type, there must be a matching pattern. In the example above, there are no value for the empty list `[]` , list with two values, where the first is not `"localhost"` or lists with more than 2 arguments. That's why we need the wildcard case at the end. Without this last case, the compiler would produce a compile-time error, stating that the patterns must be exhaustive.

Here are more examples — all exhaustive. Let's start with records:

```firefly
pair.{
    | Pair(first, second) => 
}
```

Numbers

```firefly
n.{
    | 1 => 
    | 2 => 
    | n => 
}
```

Booleans

```firefly
n.{
    | True => 
    | False => 
}
```

And you can combine pattern as needed. Imagine you have a pair of type `Pair[List[Bool], Pair(Int, String)]`


```firefly
pair.{
    | Pair([True, False], Pair(42, "foo")) => 
    | other => 
}
```


# Option

Sometimes you don't have a value. Other languages uses null for this purpose, but Firefly does not have null. Instead, we have `Option` from the core package.


```firefly
data Option[T] {
    None
    Some(value: T)
}
```

For some type `T`, say `String`, `Option[String]` is either some string or no value `None`. This way, the type system guides you to check for no-value.

Many functions and methods returns an `Option` in Firefly. For instance the `getInt` method on `String`. This method returns `Some[Int]` when the string consists only of digits and `None` otherwise. We can perform pattern matching on Option like this:

```firefly
port.getInt().{
    | None => 80
    | Some(p) => p
}
```

Many methods like `getInt` have a non-total counterpart `grabInt`, which returns an `Int`. But it will throw an exception when the input cannot be parsed. Options let's you code in an exception-safe manner.


# if - elseIf - else

You write if-statements in Firefly like this:

```firefly
if(path == "/") {
    response.writeText("<!doctype html>")
} elseIf {path.startsWith("/js/")} {
    response.writeText("<script>")
} else {
    response.writeStatus("404 Not found")
}
```

You can also use it as an expression like this


```firefly
let contentType = if(path == "/") {
    "text/html; charset=UTF-8"
} elseIf(directory2.exists) {
    "text/javascript; charset=UTF-8"
} else {
    "text/plain; charset=UTF-8"
}
```

`if`, `elseIf` and `else` are not keywords or construct build into Firefly. `if` is just a function defined like this: 


```firefly
if[T](condition: Bool, body: () => T): Option[T] {
    condition.{
        | False => None
        | True => Some(body())
    }
}
```

# Exceptions

...