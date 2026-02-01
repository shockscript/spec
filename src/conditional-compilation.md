# Conditional compilation

The `__ns__::constant` expression may match a configuration constant used for conditional compilation.

```
__ns__::constant {
    //
}

__ns__::constant var x
```

The following program uses an inline constant.

```
trace(__ns__::constant)
```
