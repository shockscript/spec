# Function types

Structural function types inherit from the `Function` class, taking the form `function(...) : t`.

```sx
function(t, t=, ...[t]):t
```

A structural function type may specify:

- zero or more required parameters (`t`) followed by
- zero or more optional parameters (`t=`) followed by
- a rest parameter (`...[t]`),
- and a result type.