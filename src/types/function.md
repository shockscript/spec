# Function types

Structural function types inherit from the `Function` class, taking the form `function(...) : T`.

```
function(T1, T=, ...[T]):T
```

A structural function type may specify:

- zero or more required parameters (`T`) followed by
- zero or more optional parameters (`T=`) followed by
- a rest parameter (`...[T]`),
- and a result type.