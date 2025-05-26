# Switch

The switch statement, as opposed to the standard, does not support fallthrough in cases.

```
switch (0) {
    case 0: {
        trace("zero");
    }
    case 1: {
        trace("one");
    }
    default: {
        trace("anything else");
    }
}
```

The above prints only "zero", not "zero", then "one" and "anything else".

## Switch type

```
switch type (v) {
    case (d:Date) {
        //
    }
    default {
        //
    }
}
```