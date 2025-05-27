# Structural function

Structural function types inherit from `Function`, taking the form `function(...) : E`.

```
function(T1, T2=, ...[T3]):E
```

A structural function type may specify:

- zero or more required parameters (`T`) followed by
- zero or more optional parameters (`T=`) followed by
- a rest parameter (`...[T]`).