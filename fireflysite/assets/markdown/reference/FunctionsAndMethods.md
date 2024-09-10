# Functions and methods

There are 5 kinds of functions in Firefly: 
 
 * Top-level functions
 * Local functions 
 * Methods
 * Anonymous functions
 * Trait functions
 
 Trait functions are covered in section [Traits and instances](traits-and-instances), the rest are covered below. 
 
# Top-level functions

Functions at the top level are defined like this:

```firefly
add(a: Int, b: Int): Int {
    let sum = a + b
    sum
}
```

This function takes two arguments of type `Int` and returns their sum as an `Int`. The last statement in the function body is returned. In this case this is the expression `sum`. 

When a function returns Unit, it can end with any statement. Otherwise, the last statement must be an expression of the return type.

A function definition begins with a signature, followed by a body in curly braces. The signature includes the function name, a parameter list in parentheses, and a return type after a colon. Parameters, if present, have names and types, separated by a colon, and both the function name and parameter names must start with a lowercase letter. The parentheses are required, even if there are no parameters.


# Type parameters

The function signature may introduce a list of type parameters in square brackets, right after the function name. These type parameters may be used in parameter types, the return type, or to constrain other type parameters. The section [Traits and instances](traits-and-instances) will cover contraints.

Here is an example of a function definition introducing an unbounded type parameter called `T`, which is used for the parameter type and in the return type:

```firefly
single[T](e: T): List[T] {
    [e]
}
```

As `T` is unbounded, this function may be called with values of any type.


# Local functions

Local functions are declared exactly like top-level functions but with the `function` keyword in front of the signature, like this:


```firefly
function square(n: Int): Int {
    n * n
}
```
