# Base types

Firefly has four primitive types: `String`, `Char`, `Int`, `Float`. They have the following literal syntax:

```firefly
"Hello, World!" // String
'H' // Char
42 // Int
3.14 // Float
```

Strings may be concatenated using plus, e.g. `"ban" + "ana"`. String literals may contain escape sequences, e.g. `\n`, `\t`, `\r`, `\"`, `\'`. You may also write multiline strings using triple quotes: `"""..."""`.

Ints support the usual arithmetic operators: `+` `-` `*` `/` `^` (division returns a Float, use the `.div()` method for integer division).

Float literals may use scientific notation, e.g. `1.0e3`, `1.0e-3` The usual arithmetic operators are available: `+` `-` `*` `/` `^`


# Booleans

Bool is defined as a data type:

```firefly
data Bool {
    False
    True
}
```

Meaning it has two values: `False`, `True`. They support the usual logical operators: `&&` `||` `!`


# Durations and instants

Durations represent elapsed time, and instants represent points in time.

```firefly
newtype Duration(seconds: Float)
newtype Instant(since1970: Duration)
```

You can get the current instant: `system.mainTask.now()` or ask how much time elapsed since the program started: `system.mainTask.elapsed()`. Note that neither has a time zone nor support for local calendars.


# Lists and arrays

List is the most common data structure in Firefly. It's an immutable contiguous blocks of values that can be indexed by integers, mapped over, filtered and so on.

```firefly
let fruits: List[String] = 
    ["apple", "banana", "orange"]
```

You can flatten one list into another using the spread syntax: `[...friuts, "cherry"] == ["apple", "banana", "orange", "cherry"]`.

Arrays is the mutable (and resizable) version of lists. You can convert a list to an array like this: `fruits.toArray()`, and you can construct an empty array like this: `Array.new()`.


# Sets and maps

Set and Map are immutable and sorted collections. Sets have no duplicate entries, and maps have no duplicate keys.

```firefly
let fruitSet: Set[String] = 
    ["apple", "banana", "orange"].toSet()
    
let numberMap: Map[String, Int] = 
    [Pair("one", 1), Pair("two", 2)].toMap()
```

They have methods for lookup, union, intersection, etc. In addition, there's a mutable IntMap and StringMap that's optimized for integer and string keys, respectively.


# Streams and buffers

Streams are lazy sequences that are consumed when read. They're often used for streaming I/O.

```firefly
// Streaming file copy
let stream = system.path("file1.txt").readStream()
system.path("file2.txt").writeStream(stream)
```

Note that there is no risk of leaking a file handle above, as the file isn't opened until the first element of the stream is read, and the writeStream method will take care of closing the stream, even in the face of I/O errors.

In this case you get a `Stream[Buffer]` back, which is common for streaming I/O in Firefly. A buffer is a mutable fixed-size array of bytes that you can manipulate with hardware friendly binary operations (8-bit, 16-bit, 32-bit etc.).


# Option, Pair, Unit and Nothing

Option represent a value that may be missing. There's no null in Firefly, so Option is often the return type of lookups. It's defined like this:

```firefly
data Option[T] {
    None
    Some(value: T)
}
```

Pair is a generic record with two fields, e.g. for key/value pairs in a map:

```firefly
data Pair[A, B](first: A, second: B)
```

Unit is the return type for functions that have no interesting return value:

```firefly
data Unit {
    Unit
}
```

Meaning it only has one possible value: `Unit`.

Nothing is a type that has no values:

```firefly
data Nothing {}
```

It's occasionally useful to statically rule out the possibility of constructing something.