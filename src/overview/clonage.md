# Clonage

The `[object Object].clone()` implementation clones tuples, arrays, maps and sets structurally; for `class` instances, the default implementation requires an *optional* constructor. You may override `clone` for a custom clonage implementation.

```
object.clone()
```