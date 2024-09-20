# Traits and instances

A trait defines an open set of types that support a common set of functions. 
For example, here's a trait for shapes with a common function to compute the area:

```firefly
trait T: Shape {
    area(shape: T): Float
}
```

The function becomes a top level function `area[T: Shape](shape: T): Float`.
Here `T` is a bounded type parameter: It can only be instantiated to a type that has an instance of the `Shape` trait.

Consider these two types that would be good candidates for having an instance of the `Shape` trait:

```firefly
data Circle(radius: Float)
data Rectangle(width: Float, height: Float)
```

Only types defined with the `data` or `newtype` keyword can have trait instances.

Instances for these types can be created with the `instance` keyword as follows:

```firefly
instance Circle: Shape {
    area(shape: Circle): Float {
        Float.pi() * (shape.radius ^ 2.0)
    }
}

instance Rectangle: Shape {
    area(shape: Rectangle): Float {
        shape.width * shape.height
    }
}
```

Each instance provides an implementation of `area` specific to the type.

Here's an example of how to define a normal top level function with a bounded type parameter:

```firefly
printArea[T: Shape](shape: T) {
    Log.trace("Area: " + area(shape))
}

printArea(Circle(0.0))          // Prints "Area: 0"
printArea(Rectangle(5.0, 6.0))  // Prints "Area: 30"
```

Multiple bounds are separated by colons, e.g. `foo[T: Bar: Baz]` means that `T` must have instances for both `Bar` and `Baz`.


# Traits with type parameters

Traits can have type parameters:

```firefly
trait I: Rpc[O] {}

instance MyMessage: Rpc[Int] {}
```

The choice of `I` fully determines `O` - in this case, if `I` is `MyMessage`, then `O` is `Int`.


# Automatic traits

If instances for the following traits are not explicitly defined, they will be generated automatically.
This only applies to types defined with the `data` or `newtype` keyword.

```firefly
// Used for == !=
trait T: Equal {
    equals(x: T, y: T): Bool
}

// Used for < > <= >= and sorting
trait T: Order {
    compare(x: T, y: T): Ordering
}

// Used to display values for debugging
trait T: Show {
    show(value: T): String
}

// Used for binary serialization
trait T: Serializable {
    serializeUsing(serialization: Serialization, value: T): Unit
    deserializeUsing(serialization: Serialization): T
}

// Used for throwing and catching exceptions
trait T: HasAnyTag {
    anyTag(): AnyTag[T]
}
```
