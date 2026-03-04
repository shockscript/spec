# Type inference

ShockScript's type inference presents some particular cases.

## Simple enumerations

```sx
x = "variant"
f = ["hotfix", "lazy"]
f = { hotfix: true, lazy: true }
```

## Algebraic enumerations

```sx
x = Variant()
```

## Unicode Code Points

You can assign a string literal to an `uint`, `int`, `byte` or `Number` as long as it contains exactly one character, resulting into an Unicode Code Point value.

```sx
ch = "A"
// equality
ch == "A"
```

## Other object initialisers

Object initialisers are also applicable to:

- `Map.<K, V>`
- Record types like `{ x:double, y:double }`
- Certain classes

```sx
var ctx:Context

ctx = { duck: 10 }
trace(ctx.inspire())

class Context {
    var duck:uint
    var cool:boolean

    public function inspire():uint (
        Math.random(0, duck + (cool ? 5 : 0))
    )
}
```

The rest operator has its own rules for each applicable type, so as to avoid programmer bugs.

## Where the inference type isn't applicable

There may be dynamic spots where compile-time inference is not possible, unless using a syntactic construct like
a variable definition containing a type annotation. If you need inline type inference, consider:

```sx
10     // double
10d    // double
10i    // int
10u    // uint
10f    // float
10m    // decimal. "m" for money
10n    // bigint
T(v)
[] : [T]
```

Note that:

- Not all `Number` data types have a suffix available.
- `T(v)` may be equivalent to a `v as! T` cast, except that `T` is verified before `v` and `v` is verified with `T` as the inference type
  - `T(v)` is not necessarily a cast for certain classes that define a class-attached `meta::call` meta-method.
  - `T(v)` is a cast at least for enumerations, structural types (like unions, tuples, records and functions), primitive types and most global objects.
  - `T(v)` is definitely not a cast for the classes comprising algebraic enumeration variants.