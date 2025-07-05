# Clonage

The `[object Object].clone()` implementation clones tuples, arrays and maps structurally; for `class` instances, the default implementation requires an *optional* constructor. You may override `clone` for a custom clonage implementation.

```
object.clone()
```