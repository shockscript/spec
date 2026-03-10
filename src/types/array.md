# Array type

The `Array.<T>` type, abbreviated `[T]`, represents a growable list of elements.

## Numeric optimization

`[t]` is optimized for when `t` is a number or boolean type; for instance, `[uint]` uses a growable buffer optimized specifically for 32-bit integers.