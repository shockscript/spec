# Enum

Enum types work differently from most languages. Through type inference, you can refer to an enum using a string literal such as `"variantN"` rather than typing `Variant.VARIANT_N`.

```
enum Variant {
    const VARIANT_ONE;
    const VARIANT_TWO = "variantTwo";
    const VARIANT_THREE = [2, "variantThree"];
}
```

Each enum member has an associated constant, number and string.

- The number counter starts at zero.
- Constant names are automatically converted from screaming snake case into a camel case string.