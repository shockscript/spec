# Types

## Wildcard

The `*` type means untyped, and accepts all possible values in the language.

```
*
```

## void

undefined.

```
void
```

## null

```
null
```

## String

String is an UTF-8 encoded character sequence.

```
String
```

## Boolean

`false` or `true`.

```
Boolean
```

## Number

IEEE 754 double-precision floating point.

```
Number
```

## BigInt

Arbitrary range integer.

```
BigInt
```

## float

IEEE 754 single-precision floating point.

```
float
```

## decimal

IEEE 754 quadruple-precision floating point (binary128).

```
decimal
```

## int

Signed 32-bit integer.

```
int
```

## uint

Unsigned 32-bit integer.

```
uint
```

## Tuple

Tuples, when untyped, have the `length` property available.

```
[T1, T2]
```

## Array

The `Array` type represents a dynamic list of elements, optimized for when `T` is a number; for instance, `[uint]` will use a growable buffer optimized specifically for 32-bit unsigned integers.

```
[T]
```

## Structural function

Structural function types inherit from `Function`.

```
function(T1, T2=, ...[T3]):E
```

## Union

```
(Ta, Tb)
```

## Map

```
Map.<K, V>
```

Usage instance:

```
const map = new Map.<String, Number>();

// x=10
map.x = 10;

const fns = new Map.<String, Function>();

// m=function
fns.m = function() { return 10 };

// m()
trace(fns.call("m"));
```

> **Note:** Property access on a `Map` equals data access. Method call on a `Map` equals `Map` method use.

## Structural object

Structural object types are compiled into efficient structures. Note that structural object types have sensitive field order; thus, structural object types with equivalent fields but in different orders will be incompatible. Structural object types also have sensitive ASDoc comments, so they may be incompatible depending on them.

Two structural object types are compatible only if either a) one is used as a subset of another or b) fields are equivalent and consist of the same order and the same ASDoc comments.

```
{
    /** x */
    x:Number,

    /** y */
    y?:Boolean,
}
```

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

## Objects

All types except `void`, `null`, `uint`, `int`, `float`, `Number`, `decimal`, `BigInt` and `Boolean` represent referenceable objects that may be `null`. The `Object` class is inherited by all types, except `*`, `void`, `null` and unions.

**Dynamic properties**

The `Object` class, unlike in standard ActionScript, is not untyped and there is no support for `dynamic` classes.

When it is necessary to read the constructor of an object, use:

```
Reflect.constructor(obj)
```
