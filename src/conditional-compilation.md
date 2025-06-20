# Conditional compilation

The `NAMESPACE::CONSTANT` expression may match a configuration constant used for conditional compilation.

```
NAMESPACE::CONSTANT {
    //
}

NAMESPACE::CONSTANT var x
```

The following program uses an inline constant.

```
trace(NAMESPACE::CONSTANT)
```