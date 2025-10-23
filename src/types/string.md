# String type

The `String` type represents an UTF-8 encoded character sequence.

> **Note**: the `.length` property of a String equals the byte total, and the `.chars().length()` method of a String equals the Code Point total.

## Nullability

Even though it is a primitive type, the `String` type may be assigned `null` to indicate absence of value, as it is a reference type.

> **Note**: `null` and `""` are two different values. You may test for both through using `String` as a falsy condition.