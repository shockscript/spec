# Array type

The `Array.<T>` type, abbreviated `[T]`, represents a growable list of elements.

## Numeric optimization

`[T]` is optimized for when `T` is a number type; for instance, `[uint]` will use a growable buffer optimized specifically for 32-bit unsigned integers.