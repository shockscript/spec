# The generic::clone method

The `generic::clone` method is efficient and does not rely on runtime type information.

It is non-final because the ShockScript compiler auto-overrides it for each class.

Circular references are not preserved.

```sx
genericn function clone(deep:boolean = true):Object (this)
```

## Primitive types

For String, Boolean and Numbers:

```sx
/*
override genericn function clone(deep:boolean = true):Object (
    this
);
*/
```

## Tuples

```sx
/*
override genericn function clone(deep:boolean = true):Object (
    this
);
*/
```

## map &#x7B;&#x7D; records

Handle that well.

## tap &#x7B;&#x7D; records

Handle that well.

## Simple enums

```sx
/*
override genericn function clone(deep:boolean = true):Object (
    this
);
*/
```

## Default behavior for other classes

If the class defines a `clone` method, it is used by `generic::clone`, and the verifier:

- Ensures its signature's result type is either the enclosing class, `Object` or `*`.
- Ensures its signature consists only of optional or rest parameters.
- Understands the first Boolean parameter as `deep`.

(In this case, the ShockScript compiler must remember to decide between calling the dispatch or non-dispatch version of `clone` (if it has not been overriden).)

Otherwise the behavior is roughly:

- Let o:c
- If `c[[Constructor]].length == 0`
  - o = new c()
- Else
  - o = Create a new instance of c without evaluating the constructor (*preinitialize*)
- Copy instance fields from this to o
  - If deep=true, map the field value to fieldVal?.generic::clone()
- Return o