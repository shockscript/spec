# Structural object

Structural object types, `{ ... }`, are simple property records, whose field order and documentation comments are sensitive. Those types are compiled into efficient structures.

```
{ x : decimal, y : decimal }

{
    /** x */
    x:Number,

    /** y */
    y?:Boolean,
}
```

## Field omission

All fields are optional; however, if it is desired to default to `undefined`, a field such as `x?:T` is equivalent to `x:(void,T)`.

## Field order

Due to sensitive field order, structural object types with equivalent fields but in different orders will be incompatible.

## Documentation comments

Due to sensitive documentation comments, structural object types with equivalent fields (including their order) but differing documentation comments in their fields will be incompatible.

## Compatibility

Two structural object types are compatible only if either a\) one is used as a subset of another or b\) fields are equivalent and consist of the same order and the same documentation comments.

## Rest

`...rest` components may appear, where `rest` must be another structural object type; the resulting type may be a subtype of `rest` depending on whether properties do not collide and there is only one rest component.

```
// A
type A = { x:Number };
// B
type B = { y:Number, ...A };
// U
type U = { ...W, ...B };
// W
type W = { z:Number };
```