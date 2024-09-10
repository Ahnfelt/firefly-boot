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

This function takes two arguments of type `Int` and returns their sum as an `Int`. A function with a return type other than `Unit`, must have an expression as the last statement, which is returned. In the example above, the value of `sum` is returned. 

When a function returns Unit, it can end with any statement. 

```firefly
class Counter(mutable value: Int)

reset(box: Counter): Unit {
    box.value = 0
}
```

The example above defines a type `Counter` with a mutable field. The function `reset` sets this value to zero. 


A `Unit` return type can be omitted in a function definition, like this:

```firefly
reset(box: Counter) {
    box.value = 0
}
```

The parameter types must be declares expitly and the parentheses are required, even if there are no parameters. The function name and parameter names must start with a lowercase letter.


# Type parameters

The function signature may introduce a list of type parameters in square brackets, right after the function name. These type parameters may be used in parameter types, the return type, or to constrain other type parameters. The section [Traits and instances](traits-and-instances) will cover contraints.

Here is an example of a function definition introducing an unbounded type parameter called `T`, which is used for the parameter type and in the return type:

```firefly
single[T](e: T): List[T] {
    [e]
}
```

As `T` is unbounded, this function may be called with values of any type.


# Calling functions

Functions are called like this:

```firefly
add(1, 2)       // Returns an Int
single("Apple") // Returns a String
single(3.14)    // Returns a Float
```

# Recursion

# Anonymous functions

# Local functions

Local functions are declared exactly like top-level functions but with the `function` keyword in front of the signature, like this:


```firefly
function square(n: Int): Int {
    n * n
}
```

# Methods