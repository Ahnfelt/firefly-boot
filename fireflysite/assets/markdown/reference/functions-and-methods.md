# Functions and methods

There are 5 kinds of functions in Firefly: 
 
 * Top-level functions
 * Anonymous functions
 * Local functions 
 * Methods
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

In a function signature, you can introduce a list of type parameters enclosed in square brackets, immediately following the function name. These type parameters can be used in the rest of the signature. 

The following example defines a function `swap` that takes any Pair and returns a Pair with first and second values swapped:

```firefly
swap[A, B](pair: Pair[A, B]): Pair[B, A] {
    Pair(pair.second, pair.first)
}
```

Two type parameters `A` and `B` are first introduced in the square brackets. These type parameters are swapped in the input and return type, expressing the value swap at type level. The type parameters are unbounded in the sense that `swap` may be called with `A` and `B` replaced by any types.

Type parameters can be bounded or constrained like this:

```firefly
same[E: Equal](pair: Pair[E, E]): Bool {
    pair.first == pair.second
}
```

The type parameter `E` must implement the Equal trait, which is required to perform equality comparisons. The section on [traits and instances](traits-and-instances) will discuss constraints in more detail.

Firefly cannot operate on the concrete types of type parameters at runtime. The behavior of a function is limited to what is specified in the function signature. 


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

# Default Values

Function parameters in Firefly can have default values, which are used when no argument is provided for that parameter during a function call. Default values are specified in the function signature by assigning a value to the parameter.

Here’s an example of a function with a default value:

```firefly
add(a: Int, b: Int = 1): Int {
    a + b
}
```

When called without the second arguments, the function will use the default value:

```firefly
add(1)  // returns 2
```

If an argument is provided, it overrides the default:

```firefly
add(1, 2)  // returns 3
```


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

# Tail Recursion

In some recursive functions, the recursive call is the last operation performed before returning the result. This is _tail recursion_. The Firefly compiler can optimize tail recursive calls, avoiding the buildup of function calls on the stack.

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

In firefly anonymous functions are written in curlybrases and constucted like this:

```firefly
{a, b => 
    let sum = a + b
    sum
}
```

This anonymous function takes two arguments and returns their sum. Like named functions, the body is a sequence of statements where the last expression is returned.

Anonymous functions are often used right away, like below:

```firefly
[1, 2, 3].map({x => x + 1}) // Returns [2, 3, 4]
```

An anonymous function that increments the given value by one is passed as argument to the method `map` working on lists.

These functions are anonymous in the sense that they do not bring a name into scope themselves. They are just expressions that construct a function value. Like all other values, they can be assigned to variables, passed as arguments, or returned from other functions. But unlike other values, they can also be called.

This is in contrast to named functions, which are not first-class in Firefly. The name of a top-level function can only be called but is not an expression in Firefly. To pass a top-level function as an argument, for instance, it must be converted to an anonymous function first.

The type of function values are writen like this:

```firefly
Int => Int         // One parameter
(Int, Int) => Int  // Multiple parameters
() => Int          // No parameters
```

The type of an anonymous function cannot be written explicitly in the definition but is inferred from its usage. It will always have a monomorphic type where the argument and return types are concrete types.

Here are some examples of anonymous functions assigned to variables explicitly given a type.

Anonymous function without parameters are written without the arrow (`=>`), like this:

```firefly
let life: () => Int = {42}
```

This is an anonymous function taking no arguments and returning `Unit`:

```firefly
let unit: () => Unit = {}
```

This is an anonymous function that increments its input by one:

```firefly
let next: Int => Int = {i => i + 1}
```

This anonymous function takes multiple arguments:

```firefly
let plus: (Int, Int) => Int = {a, b => a + b}
```

Anonymous function are called like named function.

```firefly
life()      // returns 42
unit()      // returns unit
next(1)     // returns 2
plus(1, 2)  // returns 3
```

Parameter names are not part of the function type, and likewise, anonymous functions cannot be called with named arguments. The same goes for default argument values, which are not supported for anonymous functions.

The parameter list and the function arrow can be omitted when the parameters are only used once in the function body. In such cases, the parameters in the body are replaced with underscores (`_`), like this:


```firefly
let next: Int => Int = {_ + 1}
let plus: (Int, Int) => Int = {_ + _}
let identity: Int => Int = {_}
```

These underscores, or anonymous parameters, always belong to the nearest anonymous function. Consider the following function:

```firefly
let f: Int => Int = {{_ + 1}(_)}
```

In this code, there is an outer and an inner anonymous function, both taking one argument. The first underscore belongs to the inner function, which is called immediately by the outer function with the outer function's anonymous parameter as the argument.


# Trailing Anonymous Function Arguments

Firefly has a special syntax for calling functions with function arguments. When a call has a sequence of literal anonymous functions as the last arguments, these arguments may be given using this special syntax. Consider the `if` function from the standard library, with this signature:

```firefly
if[T](condition: Bool, body: () => T): Option[T]
```

The `if` function takes two parameters, where the last is a function. Calling `if` with the standard syntax could look like this:

```firefly
if(x == 0, {"Zero"}) 
```

Using the special syntax for trailing anonymous function arguments, it looks like this:

```firefly
if(x == 0) {"Zero"}
```

With this syntax, the anonymous function is written after the call parentheses. Multiple trailing function arguments may be given in sequence. Consider the `while` function from the standard library, with this signature:

```firefly
while(condition: () => Bool, body: () => Unit): Unit
```

The `while` function takes two parameters, both functions. Using the special syntax, a call to `while` may look like this:

```firefly
while {array.size() < 5} {
    array.push("X")
}
```

The code above will push a string to an array while the size of the array is less than 5.

This syntax for trailing anonymous function arguments allows the use of `if` and `while` to resemble constructs in languages such as C and JavaScript, where these constructs are built-in keywords rather than functions.

# Trailing Colon Function Argument

Firefly has a variation of the trailing anonymous function argument syntax. The very last anonymous function argument may be written after a colon, without curly braces. The purpose of this syntax is to avoid aditional indentation.

The example below calls `if` with a trailing colon function argument:

```firefly
safeFactorial(n: Int, acc: Int = 1): Option[Int] {
    if(n >= 0): 
    factorial(n)
}
```

In this example, the `if` function is called with the condition `n >= 0` and an anonymous function that computes `factorial(n)`. If `n` is negative, the `if` function returns `None` and so does `safeFactorial`. Using the colon syntax, the `safeFactorial` functions continues unindented otherwise.


# Local functions

Local functions are declared exactly like top-level functions but with the `function` keyword in front of the signature, like this:

```firefly
function square(n: Int): Int {
    n * n
}
```

The above local function definition is a statement, similar to local variables declared with `let`. The function name `square` will be in scope for the rest of the code block.

Furthermore, local functions declared in sequence are in scope within each other's bodies, allowing them to be mutually recursive.

# Methods

Firefly has methods, which are called like this:

```firefly
Some(1).isEmpty() // False
Some(1).map({_ + 1}) // Some(2)
```

The examples above, calls the two methods `isEmpty` and `map` defined on `Option`. The code below, shows how these methods are defined in `ff:core` package:

```firefly
extend self[T]: Option[T] {
    isEmpty(): Bool {...}
    map[R](body: T => R): Option[R] {...}    
}
```

The `extend` keyword is used to declare methods on values of a given type. The code above extend values of type `Option[T]` with two methods. The identifier `self` holds a reference to the value receiving the methods. The square bracket right after the self variable are optional and used to introduce type variables used to express the type extended with methods.

The two methods above are defined for all values of type `Option[T]`, but methods can be også be defined for a more narrow targer type, like `flatten` below:

```firefly
extend self[T]: Option[Option[T]] {
    flatten(): Option[T] {...}
}
```

The extend block above declares `self` as ` Option[Option[T]]`, and likewise will only define `flatten` for options types of options. 

The scope of a method can also be narrowed down with trait constraints. 

```firefly
extend self[T: Equal]: Option[T] {
    contains(value: T): Bool {...}
}
```

In code above, the extend block defines methods for the target type `Option[T]`, but only when `T` implements the `Equal` trait.

Extend blocks must reside in the same module at definition of the type that are extended with methods.

Methods are equivalent to top level functions in terms of expressibility but differnt in terms of scoping. Each type definition has its own method scope.

# Special method call syntax

```firefly
if(x == 1) {"One"} else {"Several"}
Some(1).map {_ + 1} // Some(2)

```

# Trait functions
 
Trait functions are covered in the section about [traits and instances](traits-and-instances)

[Next](pattern-matching)
