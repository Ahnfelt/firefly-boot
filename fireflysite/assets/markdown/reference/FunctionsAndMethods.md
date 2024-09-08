# Functions and methods

Functions at the top level are defined like this:

```firefly
add(a: Int, b: Int): Int {
    a + b
}
```

The definition starts with the function signature followed by the function body enclosed in curly braces. The signature consists of the function name, a parameter list in parentheses, and a return type after the colon. There may be zero or more arguments, but the parentheses are mandatory. Each argument has a name and a type, separated by a colon. The function name and the argument names must start with a lowercase letter.

The type checker ensures that the declared return type is the type of the function body, with one exception: a function declared to return `Unit` does not return a value, and its body may be of any type.

Local functions are declared exactly like top-level functions but with the `function` keyword in front of the signature, like this:

```firefly
function square(n: Int): Int {
    n * n
}
```

# Type parameters

The function signature may introduce a list of type parameters in square brackets, right after the function name. These type parameters may be used for parameter types, the return type, or to constrain other type parameters. The section [Traits and instances](traits-and-instances) will cover contraints.

Here is an example of a function definition introducing an unbound type parameter called `T`, which is used for the parameter type and the return type:

```firefly
function single[T](e: T): List[T] {
    [e]
}
```

As `T` is unbound, this function may be called with values of any type.


# Calling functions
