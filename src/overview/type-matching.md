# Type matching

## “is” operator

```
v is T
```

## “switch type” statement

```
switch type (v) {
    case (regex : RegExp) {
        trace("a regex");
    }
    case ([x, y] : [Number, Number]) {
        trace("a tuple of double");
    }
    default {
        trace("any other");
    }
}
```