# Statements and expressions

In Firefly, the body of functions and methods consist of zero or more statements, separated by `;`.

When `;` is the last token on a line, it can be omitted.

A statement is either a [local function definition](functions-and-methods), a local variable definition, an assignment or an expression.

Field assignments were covered in [user defined types](user-defined-types).


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


# Expressions

Expressions can be one of the following syntactic constructs:

```firefly
42          // Int literal
42.0        // Float literal
'a'         // Char literal
"foo"       // String literal
[]          // List literal
{}          // Function literal
()          // Record literal
True        // Variant construction
x           // Variable
_           // Anonymous parameter
f()         // Function call
x.y         // Field access
x.V()       // Copy construction
x.{_}       // Piping
!x          // Unary operator
a + b       // Binary operator
(a + b) * c // Grouping parenthesis
```

Binary operators are left associative and the operator precedence is as follows, lowest to highest:

 * `||`
 * `&&`
 * `!=` `==`
 * `<=` `>=` `<` `>`
 *  `+` `-`
 * `*` `/` `%`
 * `^`
 * `f()`
 * `x.y` `x.V()` `x.{_}`

Unary operators `!` and `-` have higher precedence than `^` and lower precedence than `f()`.
