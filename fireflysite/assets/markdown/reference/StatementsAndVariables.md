# Statements and variables

In Firefly, the body of functions and methods consist of zero or more statements, separated by `;`.

When `;` is the last token on a line, it can be omitted.

A statement is either a [local function definition](functions-and-methods), a local variable definition, an assignment or an expression.

Field assignments were covered in [user defined types](user-defined types).


# Local variables

Local variables need an initial value:

```firefly
let x = 42
```

This defines immutable local variable `x: Int` with the value `42`.

Variables can be reffered to by name:

```firefly
x + x       // Returns 84
```

The type of a variable can be stated explicitly:

```firefly
let y: String = "Hello"
```

Mutable variables are introduced using the `mutable` keyword:

```firefly
mutable z = 1
```

This works like `let`, except that you're allowed to update mutable variables by assigning to them:

```firefly
z = 2       // z is now 2
z += 2      // z is now 4
z -= 1      // z is now 3
```

