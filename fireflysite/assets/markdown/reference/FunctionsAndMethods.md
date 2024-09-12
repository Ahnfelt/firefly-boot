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

reset(counter: Counter): Unit {
    counter.value = 0
}
```

The example above defines a type `Counter` with a mutable field. The function `reset` sets this value to zero. 


A `Unit` return type can be omitted in a function definition, like this:

```firefly
reset(counter: Counter) {
    counter.value = 0
}
```

The parameter types must be declares expitly and the parentheses are required, even if there are no parameters. The function name and parameter names must start with a lowercase letter.

# Type parameters

In a function signature, you can introduce a list of type parameters enclosed in square brackets, immediately following the function name. These type parameters can be referenced in the types of the function's parameters, its return type, or to constrain other type parameters. 

The following example defines a function `swap` that takes any Pair and returns a Pair with first and second values swapped:

```firefly
swap[A, B](pair: Pair[A, B]): Pair[B, A] {
    Pair(pair.second, pair.first)
}
```

The relation between the input and the output type is expressed using the type parameters `A` and `B`. The type parameters are unbuilded in the sense that `swap` may be called with `A` and `B` replaced by any types.

Type parameters can be bounded like this:

```firefly
same[E: Equal](pair: Pair[E, E]): Bool {
    pair.first == pair.second
}
```

The type parameter `E` must implement the Equal trait, which is required to perform equality comparisons. The section on [traits and instances](traits-and-instances) will discuss constraints in more detail.


# Calling functions

Functions are called like this:

```firefly
add(1, 2)              // 3
same(Pair('A', 'a'))   // False
```

Just like variants, the arguments can be named, and given out of order, like this:
```firefly
add(b = 2, a = 1)
add(b = 2, 1)     // Same as above
```

The function signature must match the types of the given arguments. The following calls are not well typed.

```firefly
add("1", 2)                          // Type mismatch: Int vs. String
same(Pair('A', "a"))                 // Type mismatch: String vs. Char
same(Pair(Counter(1), Counter(1)))   // No such instance: Counter: Equal
```

# Default Values

Function parameters in Firefly can have default values, which are used when no argument is provided for that parameter during a function call. Default values are specified in the function signature by assigning a value to the parameter.

Here’s an example of a function with a default value:

```firefly
greet(name: String = "World"): String {
    "Hello, " + name + "!"
}
```

When called without arguments, the function will use the default value:

```firefly
greet()  // returns "Hello, World!"
```

If an argument is provided, it overrides the default:

```firefly
greet("Alice")  // returns "Hello, Alice!"
```

Using default values can simplify function calls by allowing common values to be assumed, while still giving the flexibility to specify custom values when needed.

# Recursion

Function definitions can be recursive, meaning that a function can call itself. Here’s an example of a recursive function that calculates the factorial of a number:

```firefly
factorial(n: Int): Int {
    if(n == 0) {
        1
    } else {
        n * factorial(n - 1)
    }
}
```

When calling `factorial(0)`, the base case is triggered, returning `1`. Calling the function with a positive integer will recursively calculate the factorial. However, calling it with negative values will result in infinite recursion, as no base case exists for such input.

## Tail Recursion

In some recursive functions, the recursive call is the last operation performed before returning the result. This is *tail recursion*. The Firefly compiler can optimize tail recursive calls, avoiding the buildup of function calls on the stack.

You can use the `tailcall` keyword to explicitly mark a recursive call as tail-recursive, ensuring the compiler applies the optimization.

Here is a tail-recursive implementation of the factorial function:

```firefly
factorial(n: Int, acc: Int = 1): Int {
    if(n == 0) {
        acc
    } else {
        tailcall factorial(n - 1, n * acc)
    }
}
```

This version introduces an additional parameter, `acc`, which acts as an accumulator to hold the running result of the factorial calculation. It is initialized to 1 by default, ensuring that when the function is first called with a single argument, the computation starts correctly. By moving the multiplication into the recursive call via the accumulator, the call becomes a tail-call, allowing the Firefly compiler to optimize it.

# Anonymous functions

# Local functions

Local functions are declared exactly like top-level functions but with the `function` keyword in front of the signature, like this:


```firefly
function square(n: Int): Int {
    n * n
}
```

# Methods