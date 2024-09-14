# Pattern matching

Every function lets you pattern match on its arguments. Pattern matching lets you branch on the structure of arguments and extract nested values.


# In anonymous functions

In the following example, `map` is passed an anonymous function, which pattern matches on its argument:

```firefly
blockElements.map {
    | Paragraph(text) => 
        renderParagraph(text)
    | Code(code, Some(type)) => 
        renderHighlighted(code, type)
    | Code(code, None) => 
        renderCode(code)
    | Video(url) {vimeoId(url) | Some(id)} => 
        renderVimeo(id)
    | Video(url) => 
        renderVideo(url)
}
```

In this example there are five cases, and `blockElements: List[BlockElement]` with the following type definition:

```firefly
data BlockElement {
    Paragraph(text: String)
    Code(code: String, type: Option[String])
    Video(url: String)
}
```

If you have multiple arguments, you need to provide a pattern for each argument, separated by commas.


# Cases

Each case must have one or more patterns, zero or more guards, and zero or more statements.

The first case starts with a pattern that matches when the argument is `Paragraph`, and extracts its `text` field into a variable named `text`:

```firefly
| Paragraph(text) => 
```

The variable is in scope in the statements of the case following the `=>`.
The field name and the variable name do not have to be the same. 
The variable could be named `t` or `foo`, even though the type defines a field named `text`.

The second case starts with a pattern that matches when the argument is `Code`, and the second field of that is `Some`:

```firefly
| Code(code, Some(type)) => 
```

The third case starts with a pattern that matches when the argument is `Code`, and the second field of that is `None`:

```firefly
| Code(code, None) => 
```

Together with the case above, it covers all the values that can be constructed using the `Code` variant.

The fourth case starts with a pattern that matches when the argument is `Video`, and then uses a guard:

```firefly
| Video(url) {vimeoId(url) | Some(id)} =>
```

The guard calls a function on the extracted field, and matches the result against the pattern `Some(id)`.

The fifth and final case starts with a pattern that matches when the argument is `Video`, and has no guard:

```firefly
| Video(url) =>
```

Together with the case above, it convers all the values that can be constructed using the `Video` variant.


# Exhaustiveness

Since all the ways to construct a `BlockElement` has been covered by the cases, the pattern match is exhaustive. 
Exhaustiveness is enforced in Firefly, so it's never possible to end up in a situation at runtime where no case matches the arguments.

Cases are tried in order until one of them matches. When a case matches, its statements will be run.
In this case a return value is expected, and thus the last statement must be an expression, whose value will be returned.


# In pipes

Another way to write the above is to pipe the argument into an anonymous function that pattern matches on it:

```firefly
blockElements.map {blockElement =>
    blockElement.{
        | Paragraph(text) => 
            renderParagraph(text)
        | Code(code, Some(type)) => 
            renderHighlighted(code, type)
        | Code(code, None) => 
            renderCode(code)
        | Video(url) {vimeoId(url) | Some(id)} => 
            renderVimeo(id)
        | Video(url) => 
            renderVideo(url)
    }
}
```

This is also a way to pattern match on one of many arguments, a local variable or an expression.


# In named functions

Pattern matching may also be used for the arguments of named functions and methods. Here's an example of pattern matching in a local function:

```firefly
function render(element: BlockElement) {
    | Paragraph(text) => 
        renderParagraph(text)
    | Code(code, Some(type)) => 
        renderHighlighted(code, type)
    | Code(code, None) => 
        renderCode(code)
    | Video(url) {vimeoId(url) | Some(id)} => 
        renderVimeo(id)
    | Video(url) => 
        renderVideo(url)    
}
```

Here's an example of pattern matching in a method:

```firefly
extend self: Renderer {
    render(element: BlockElement) {
        | Paragraph(text) => 
            self.renderParagraph(text)
        | Code(code, Some(type)) => 
            self.renderHighlighted(code, type)
        | Code(code, None) => 
            self.renderCode(code)
        | Video(url) {vimeoId(url) | Some(id)} => 
            self.renderVimeo(id)
        | Video(url) => 
            self.renderVideo(url)    
    }
}
```
