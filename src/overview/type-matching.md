# Type matching

## “is” operator

```sx
v is T
```

## “switch type” statement

```sx
switch type (v) {
    case (d : Date) {
    }
    default {
    }
}
```

`switch type` also works on algebraic data types:

```sx
switch type (exp) {
    case (Plus(10, right)) {
    }
}
```

## "if let" statement

```sx
if (let Plus(10, right) = exp) {
}
```