# Enums

Enums are special classes consisting of zero or more variants. Use the `enum` definition to define enums.

```
enum Variant {
    const VARIANT_ONE;
    const VARIANT_TWO = "variantTwo";
    const VARIANT_THREE = [2, "variantThree"];
}
```

## Type inference

```
var v : Variant = "variantOne";
```