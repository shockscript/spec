# Conditional compilation

The `__ns__::constant` expression may match a configuration constant used for conditional compilation.

```sx
__ns__::constant {
    //
}

__ns__::constant var x
```

The following program uses an inline constant.

```sx
trace(__ns__::constant)
```

## Implicit constants

### \_\_sx\_\_::debugging

The `__sx__::debugging` constant indicates whether or not the program is targetting a debug build.

### \_\_sx\_\_::releasing

The `__sx__::releasing` constant indicates whether or not the program is targetting a release build.

### \_\_sx\_\_::testing

The `__sx__::testing` constant indicates whether or not the program is compiling for evaluating unit tests.