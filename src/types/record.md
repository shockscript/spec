# Record types

Record types **\{\}** are simple property records.

Specifically, there are variants of record types, which are each represented and used in a different way.

**dynamic \{\}** types are like a hash-map internally, using boxing for primitive types. Fields that are not specified are not inserted into the structure.

```sx
type Options = dynamic {
    quack? : uint,
    shot? : boolean,
};
```

**track \{\}** types are similar to **dynamic \{\}**, but their creation and field accessors are implementation-defined, and they desugar to classes.

Although **dynamic \{\}** and **track \{\}** types appear as type expressions, they are unique; structurally-matching records cannot be assigned to the other, or vice versa.

## Version control

Fields of a record type may be tied to a namespace, which is useful for version control.

**Flexible.sx**

```sx
package zero.hit {
    public namespace Flexible = "http://www.zero.org/hit/Flexible";
}
```

**Judgement.sx**

```sx
package zero.hit {
    public namespace Judgement = "http://www.zero.org/hit/Judgement";
}
```

**Pair.sx**

```sx
package zero.hit {
    public type Information = dynamic {
        Flexible::strength : [decimal],
        Judgement::strength : [decimal],
    };
}
```

## Field omission

A field is required to be initialized in object literals unless it contains `undefined`. A field such as `x? : T` is equivalent to `x : (void, T)`.

A field containing `null` but not `undefined` must be initialized.

## Field order

Due to sensitive field order, record types with equivalent fields but in different orders will be incompatible.

## Writing ShockDoc comments

Fields may have a preceding ShockDoc comment, as in:

```sx
type R = dynamic {
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
type A = dynamic { x : double };
// B < A
type B = dynamic { y : double, ...A };
```

## “track \{\}”

**track \{\}** types desugar into classes dedicated to reactive systems like Whack DS, typically for representing UI component properties.

```sx
type Props = track {
    x? : double,
}
```

- In Whack DS, when the `x` property of the above `Props` type is accessed, the `x` property is auto tracked as a dependency of the surrounding effect or callback.
- A **track \{\}** type in Whack DS uses a hash map for storing props internally, since components use to define several properties, including several event handlers, which are not always specified by the consumer.