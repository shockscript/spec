# Type matching

## “is” operator

```
v is T
```

## “switch type” statement

```
switch type (v) {
    case (d:Date) {
        trace("date");
    }
    case ([x, y] : [Number, Number]) {
        trace("tuple of double");
    }
    default {
        trace("any other");
    }
}
```