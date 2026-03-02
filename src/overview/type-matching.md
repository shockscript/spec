# Type matching

## “is” operator

```sx
v is T
```

## “switch type” statement

```sx
switch type (v) {
    case (regex : RegExp) {
        trace("a regex");
    }
    case ([x, y] : [double, double]) {
        trace("a tuple of double");
    }
    default {
        trace("any other");
    }
}
```

`switch type` also works on algebraic data types:

```sx
switch type (exp) {
    case (Plus(10, right)) {
        //
    }
}
```

## "if let" statement

```sx
if (let Plus(10, right) = exp) {
    //
}
```