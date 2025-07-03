# Record

Record types `{ ... }` are simple property records, whose field order is sensitive. Those types are compiled into efficient structures.

```
type N1 = { x : decimal, y : decimal };

type N2 = {
    /** x */
    x:Number,

    /** y */
    y?:Boolean,
};
```

> **Note**: Record types do not match with types structurally. They are simply structures the user may express inline.

## Version control

Fields of a record type may be tied to a namespace, which is useful for version control.

```
package com.business.product {
    /**
     * Flexible version control namespace.
     */
    public namespace Flexible = "http://business.com/product/flexible";

    /**
     * Judgement version control namespace.
     */
    public namespace Judgement = "http://business.com/product/judgement";

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

## Compatibility

Two record types are compatible only if either a\) one is used as a subset of another or b\) fields are equivalent and appear in the same order.

## Rest

One trailing `...rest` component may appear in a record, where `rest` must be another record type. The resulting type is a subtype of `rest` and properties **must not** collide.

```
// A
type A = { x:Number };
// B < A
type B = { y:Number, ...A };
```