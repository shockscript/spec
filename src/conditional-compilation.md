# Conditional compilation

The `NAMESPACE::constant` expression may match a configuration constant used for conditional compilation.

```
NAMESPACE::constant {
    //
}

NAMESPACE::constant var x
```

The following program uses an inline constant.

```
trace(NAMESPACE::constant)
```