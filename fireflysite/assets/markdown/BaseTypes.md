# Base types

In Firefly, all nominal types are defined in a `.ff` file somewhere. 
However, some of the types in the `ff:core` package have dedicated syntax.
These are considered base types and are documented in the following sections.


# Bool

Values of the `Bool` type represent truth values. They are either `False` or `True`.

The type is defined in `ff:core` as follows:

```firefly
data Bool {
    False
    True
}
```

Logical negation is an operator on booleans:

```firefly
!True  == False
!False == True
```

Logical and is an operator on booleans. The right hand side is only evaluated when the left hand side is `True`:

```firefly
True  && True  == True
True  && False == False
False && True  == False
False && False == False
```

Logical or is an operator on booleans. The right hand side is only evaluated when the left hand side is `False`:

```firefly
True  || True  == True
True  || False == True
False || True  == True
False || False == False
```

The comparison operators are supported for `Bool`:

```firefly
True  == True     // Equality
True  != False    // Inequality
False <  True     // Less than
False <= True     // Less than or equal
True  >  False    // Greater than
True  >= True     // Greater than or equal
```

In addition, the standard library defines `if`, `while`, etc. as a functions with a `Bool` condition.


# Int

Values of the `Int` type represent whole numbers in the range `-9,007,199,254,740,991` to `9,007,199,254,740,991`. This range is specifically chosen to work inside the safe integer range of the `Number` type in JavaScript. Outside of this range, `Int` values may act like `Float` values.

They can be constructed using the following literal syntax:

```firefly
42  // Fourty two
0   // Zero
-1  // Minus one
```

Basic arithmetic operators are supported:

```firefly
3 + 5       // Addition, == 8
3 - 5       // Subtraction, == -2
3 * 5       // Multiplication, == 15
-(3 + 5)    // Negation, == -8
3 / 5       // Division, == 0.6
```

As are the comparison operators.

Note that the division `3 / 5` does not return an `Int`, but rather a `Float` value `0.6`. If you want integer division, which rounds towards zero, you can do `3.div(5) == 0`.


# Float

Values of the `Float` type are floating point numbers with the semantics of the `Number` type in JavaScript.

They be constructed using following literal syntax:

```firefly
42.0    // Fourty two point zero
0.0     // Zero point zero
-1.0    // Minus one point zero
1.0e3   // == 1000.0
1.0e-3  // == 0.001
```

Like `Number` values in JavaScript, `Float` values may also be `Float.nan()`, `Float.infinity()` or `-Float.infinity()`.

Basic arithmetic operators are supported:

```firefly
3.5 + 5.75      // Addition, == 9.25
3.0 - 5.0       // Subtraction, == -2.0
3.0 * 5.0       // Multiplication, == 15.0
-(3.0 + 5.0)    // Negation, == -8.0
3.0 / 5.0       // Division, == 0.6
```

As are the comparison operators. 
However, as with `Number` values in JavaScript, comparing `Float.nan()` with any floating point value, including `Float.nan()` will return `False`.
To test whether a number is `Float.nan()`, use the `isNan()` method, e.g. `x.isNan()`.


# Char

Values of the `Char` type represent UTF-16 code units. 
Graphemes outside of the Unicode Basic Multilingual Plane may consist of multiple UTF-16 code units and thus require multiple `Char` values.

They can be constructed using following literal syntax, where `\` (backslash) is used to escape characters:

```firefly
' '     // A space
'\''    // Single quote
'\r'    // Carriage return
'\n'    // Line feed (Unix newline)
'\t'    // Horizontal tab
'\\'    // Backslash
'A'     // Capital A
```

The comparison operators also works for `Char` values, but note that they compare the code unit rather than compare by any language-specific character ordering.


# String

Values of the `String` type are immutable sequences of `Char` values, representing Unicode strings. 

Single line strings must be contained within a single line, and can be constructed using following literal syntax:

```firefly
"Hello, World!"
```

Multiline string literals begin and end with three double quotes, and may contain newlines:

```firefly
"""
    Once upon a time,
    in a land far, far away...
"""
```

There's an operator for string concatenation:

```firefly
"ban" + "ana" == "banana"
```

The comparison operators are supported, but note that they compare the string as a sequence of `Char` values rather than by any language-specific ordering.

The escape mechanism is the same as with the `Char` type.


# List

Values of the `List[T]` types are immutable sequences of `T` values, where `T` is a type of your choice.

They can be constructed using list literals:

```firefly
[1, 2, 3]   // A List[Int] with three elements
```

Note that commas can be omitted when they would occur before a newline:

```firefly
[
    1
    2
    3
]
```

Lists can be flattened into other lists using the spread syntax:

```firefly
[1, ...[2, 3], 4, 5] == [1, 2, 3, 4, 5]
```

The comparison operators are available for values of type `List[T]` when they're available for values of type `T`.


# Unit

The `Unit` type has just one possible value, and is used as the return type for functions that have no interesting return value.

The type is defined in `ff:core` as follows:

```firefly
data Unit {
    Unit
}
```

If you omit the return type, the `Unit` type is assumed. If you don't end a function with an expression, the `Unit` value is returned.
