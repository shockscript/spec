# Record types

Record types `{ ... }` are simple property records. Record types are memory-efficient in cost of a hash-map-like field access.

> **Note**: The decision for having record types compiling into hash-map structures is because these types use to contain many fields, for instance, in Whack DS components and in operations requiring a large number of options.

```sx
type N1 = { x : decimal, y : decimal };

type N2 = {
    /** x */
    x:double,

    /** y */
    y?:boolean,
};
```

> **Note**: Record types do not match with types structurally unlike in structural-type-first languages. They are simply structures the user may express inline.

A record type is interned at compile-time only if:

- None if its fields contain ShockDoc.

Otherwise a record type is unique and another record type, even though compatible, cannot be assigned to the other, or vice versa.

## Version control

Fields of a record type may be tied to a namespace, which is useful for version control.

```sx
// ===== Flexible.sx =====


package com.zero.xy {
    /**
     * Flexible version control namespace.
     */
    public namespace Flexible = "http://www.yveltal.me/xy/flexible";
}


// ===== Judgement.sx =====


package com.zero.xy {
    /**
    * Judgement version control namespace.
    */
    public namespace Judgement = "http://www.yveltal.me/xy/judgement";
}



// ===== Pair.sx =====


package com.zero.xy {
    /**
    * Pair.
    */
    public type Pair = {
        Flexible::strength : [decimal],
        Judgement::strength : [decimal],
    };
}
```

## Field omission

All fields are required unless they contain `undefined` or `null`. A field such as `x?:T` is equivalent to `x:(void, T)`.

## Field order

Due to sensitive field order, record types with equivalent fields but in different orders will be incompatible.

## Writing ShockDoc comments

Fields may have a preceding ShockDoc comment, as in:

```sx
type R = {
    /**
     * Comment.
     */
    x : double,
};
```

## Compatibility

Two record types are compatible only if either:

- One is used as a subset of another
- Fields are equivalent, appear in the same order and include no ShockDoc.

## Rest

One trailing `...rest` component may appear in a record, where `rest` must be another record type. The resulting type is a subtype of `rest` and properties **must not** collide.

```sx
// A
type A = { x:double };
// B < A
type B = { y:double, ...A };
```