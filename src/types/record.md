# Record types

Record types `{ ... }` are simple property records. Record types are memory-efficient in cost of a hash-map-like field access.

> **Note**: The decision for having record types compiling into hash-map structures is because these types use to contain many fields, for instance, in Whack DS components and in operations requiring a large number of options.

```
type N1 = { x : decimal, y : decimal };

type N2 = {
    /** x */
    x:double,

    /** y */
    y?:boolean,
};
```

> **Note**: Record types do not match with types structurally unlike in structural-type-first languages. They are simply structures the user may express inline.

## Version control

Fields of a record type may be tied to a namespace, which is useful for version control.

```
// ===== Flexible.es =====

package = com.example.product;

/**
 * Flexible version control namespace.
 */
public namespace Flexible = "http://business.com/product/flexible";

// ===== Judgement.es =====

package = com.example.product;

/**
 * Judgement version control namespace.
 */
public namespace Judgement = "http://business.com/product/judgement";

// ===== Pair.es =====

package = com.example.product;

/**
 * Pair.
 */
public type Pair = {
    Flexible::strength : [decimal],
    Judgement::strength : [decimal],
};
```

## Field omission

All fields are required unless they contain `undefined` or `null`. A field such as `x?:T` is equivalent to `x:(void, T)`.

## Field order

Due to sensitive field order, record types with equivalent fields but in different orders will be incompatible.

## Writing ESDoc comments

Fields may have a preceding ESDoc comment, as in:

```
type R = {
    /**
     * Comment.
     */
    x : double,
};
```

## Compatibility

Two record types are compatible only if either a\) one is used as a subset of another or b\) fields are equivalent and appear in the same order.

## Rest

One trailing `...rest` component may appear in a record, where `rest` must be another record type. The resulting type is a subtype of `rest` and properties **must not** collide.

```
// A
type A = { x:double };
// B < A
type B = { y:double, ...A };
```


