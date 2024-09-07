# User defined types

Named types can be defined at the top level, using one of four keywords: `data`, `class`, `capability` or `newtype`.


# data

To define an immutable type, you can use the `data` keyword.

```firefly
data Shape {
    Circle(x: Float, y: Float, radius: Float)
    Rectangle(x: Float, y: Float, width: Float, height: Float)
}
```

This defines a type called `Shape` with two variants `Circle` and `Rectangle`. 
The `Circle` variant has three named fields of type `Float`, while the `Rectangle` variant has four.

Type and variant names must start with a capital letter.

Concrete field types of a `data` type must have been defined using `data` or `newtype`. This ensures that fields have no interior mutability.

A value of type `Shape` is either a `Circle` or a `Rectangle`, and they can be constructed as follows:

```firefly
Circle(0.0, 0.0, 1.0)           // Variant, : Shape
Rectangle(5.0, 7.0, 3.0, 2.0)   // Variant, : Shape
```

Above the variants are constructed using positional arguments, whose order must coincide with the order of the parameters in the type definition.

Named arguments are supported as well:

```firefly
Circle(x = 0.0, y = 0.0, radius = 1.0)
```

Named parameters don't have to be in order, and can be mixed with positional arguments:

```firefly
Circle(radius = 1.0, 0.0, 0.0)
```

To branch on the specific variant of a type, use [pattern matching](pattern-matching).


# Common fields

When all the variants share a set of fields, they can be moved to the common fields section of the declaration:

```firefly
data Shape(x: Float, y: Float) {
    Circle(radius: Float)
    Rectangle(width: Float, height: Float)
}
```

This is similar to the `Shape` definition above, but the `x` and `y` fields have been pulled out as common fields. 
Given a value of a type, e.g. `shape: Shape`, common fields can be accessed without knowing which specific variant it is:

```firefly
shape.x     // Returns a Float
shape.y     // Returns a Float
```

When there is only one variant of a type, and its name coincides with the name of the type, we can use a shorthand definition:

```firefly
data Point(x: Float, y: Float)
```

This defines a type called `Point` with a single variant, also named `Point`, and two common fields of type `Float`.


# Copying

Variants can also be constructed from other values by specifying any fields that should be updated or are fields that the value doesn't expose.
E.g. given a `point: Point`, we can construct a `Shape` of the `Rectangle` variant:

```firefly
point.Rectangle(width = 2.0, height = 1.5)
```

This is equivalent to:

```firefly
Rectangle(x = point.x, y = point.y, width = 2.0, height = 1.5)
```


# class

Types defined with the `class` keyword work like `data` types, except for the differences noted here.

Fields of `class` types may be declared `mutable`:

```firefly
class FruitBasket(
    mutable apples: Int
    mutable oranges: Int
    mutable bananas: Int
)
```

Mutable fields can be updated. Given a value `basket: FruitBasket`, its fields can be assigned to:

```firefly
basket.apples = 42      // The apples field now holds the value 42
basket.oranges += 1     // The oranges field is now one greater
basket.bananas -= 1     // The bananas field is now one less
```

In addition to `data` and `newtype`, concrete field types of a `class` type may also have been defined using `class`,
letting `class` types contain other mutable values.


# capability

Types defined with the `capability` keyword work like `class` types, except for the differences noted here.

Function types `=>` are considered `capability` types.

In addition to `data`, `newtype` and `class`, concrete field types of a `capability` type may also have been defined using `capability`,
letting `capability` types contain other capabilities.

```firefly
capability EventHandler(
    onEvent: () => Unit
)
```

The `onEvent` field here contains a first class function, which may have captured other capabilities or classes in its closure.
Therefore, calling the function contained in this field may cause side effects.

In particular, it may have captured the `system` argument that's passed to the main function, or other capabilities that allow it to do I/O.


# newtype

Types defined with the `newtype` keyword work like `data` types, except that they must have exactly one common field and no explicitly listed variants.

```firefly
newtype UserId(id: Int)
```

At runtime, they are represented as values of the field type.
In this case, it means that `UserId(42)` is represented as the `Int` value `42` at runtime, with zero overhead.


# Generic types

Whether you use `data`, `class`, `capability` or `newtype` to define a type, it may have type parameters.

```firefly
data Basket[T] {
    items: List[T]
}
```

Here the `T` in `Basket[T]` is a type parameter, and it's used as a type argument in `List[T]`.

An unbounded type parameter can be instantiated to any type. 
We can have a `Basket[Shape]`, which has a field `items: List[Shape]`, and a different type `Basket[EventHandler]`, which has a field `items: List[EventHandler]`.

Note that type parameters are not concrete types, and are thus not subject to the field type restrictions stated earlier.


# Anonymous records

An anonymous record is not defined anywhere, but consists of zero or more fields. The fields can have any type, but they can't be assigned to.

```firefly
(red = 255, green = 255, blue = 0)
```

This constructs an anonymous record.
If you have an anonymous record value, e.g. `color: (red: Int, green: Int, blue: Int)`, you can access its fields:

```firefly
color.red       // Returns an Int
color.green     // Returns an Int
color.blue      // Returns an Int
```
