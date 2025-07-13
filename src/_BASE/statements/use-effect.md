# Use effect

The `use effect` statement consists of implementation-defined behavior, however it is usually used to detect state or parameter changes or implement mount and unmount routines for a component.

```
use effect [] {
    //
}
use effect [dep1, ...depN] {
    //
}
use effect * {
    //
}
use effect * {
    cleanup {
        //
    }
}
```