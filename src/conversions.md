# Conversions

This section describes which type conversions are available.

Explicit conversions may occur as either `T(v)` (strict conversion) or `v as T` (optional conversion). The behavior of the call operator over a type may not always be a conversion depending on if `T` implements the static `meta::call()` hook.

```es
v as T     // returns T?. failure returns null
v as! T    // failure throws a TypeError
T(v)       // same as "v as! T"
```

## Constant coercions

Constant coercions occur implicitly both at compile-time and runtime, converting a constant into another constant.

| Kind                                      | Result                   |
| ----------------------------------------- | ------------------------ |
| `undefined` to flag enumeration           | Interned instance whose value is zero (**0**). |
| `null` to flag enumeration                | Interned instance whose value is zero (**0**). |
| `undefined` to `T` containing both `undefined` and `null` | `undefined` |
| `undefined` to `T` containing `undefined` and no `null`   | `undefined` |
| `undefined` to `T` containing `null` and no `undefined`   | `null` |
| `null` to `T` containing `undefined` but not `null`       | `undefined` |
| `null` to `T` containing `null` but not `undefined`       | `null` |
| `null` to `T` containing both `undefined` or `null`       | `null` |
| Numeric constant to `*` or `Object`  | Equivalent constant of the target type. |
| String constant to `*` or `Object` or union containing `string` | Equivalent constant of the target type. |
| Boolean constant to `*` or `Object` or union containing `boolean` | Equivalent constant of the target type. |
| Namespace constant to `*` or `Object` or union containing `Namespace` | Equivalent constant of the target type. |
| Type constant to `*` or `Object` or union containing `Class` | Equivalent constant of the target type. |
| Numeric constant to another compatible numeric type | Numeric constant with value coerced to target type. |
| Numeric constant to union containing at least one compatible numeric type | Numeric constant of the target type containing value coerced to the containing numeric type, preferring the *same* numeric type or otherwise the first numeric type found. |
| `NaN` to `float`         | `NaN` |
| `NaN` to `decimal`         | `NaN` |
| `-Infinity` to `float`   | `-Infinity` |
| `+Infinity` to `float`   | `+Infinity` |
| `-Infinity` to `decimal`   | `-Infinity` |
| `+Infinity` to `decimal`   | `+Infinity` |

## Implicit coercion

Implicit coercions occur implicitly both at compile-time and runtime, after trying a constant coercion.

| Kind                                      | Result                   |
| ----------------------------------------- | ------------------------ |
| From `*`                                  | |
| To `*`                                    | |
| From numeric type to compatible numeric type | |
| To covariant (includes base classes, implemented interfaces, unions and inherited record type) | |
| From union to compatible union            | |
| From union member to union                | |
| From structural function type to another compatible function type | |

> **Note**: `interface` types inherit `Object`.

## Explicit conversions

Explicit conversions occur when resolving `v as T` or `T(v)`, after trying an implicit coercion.

| Kind                                      | Result                  |
| ----------------------------------------- | ----------------------- |
| To contravariant (from `interface` to `interface` subtype, from `class` to subclass, or record type subtype)  | |
| To union member                           | |
| From `*` or `Object` to `interface`       | |
| To another `[T]` type                     | An array filtering out incompatible elements. |
| `string` to enumeration                   | Identification of an enumeration variant by its `string` name. |
| Number to enumeration (using the same numeric type) | For regular enumerations, identifies a variant by its numeric value. For flag enumerations, identifies variant bits. |
| To `string`                               | For `undefined`, returns `"undefined"`; for `null`, returns `"null"`; for other types, invokes `toString()`. |
| To `boolean`                              | Evaluates truthy value.  |
| To `double`                               | Forced conversion to double-precision floating point. |
| To `float`                                | Forced conversion to single-precision floating point. |
| To `decimal`                              | Forced conversion to 128-bit decimal number. |
| To `int`                                  | Forced conversion to 32-bit signed integer. |
| To `uint`                                 | Forced conversion to 32-bit unsigned uninteger. |
| To `bigint`                               | Forced conversion to an arbitrary range integer. |
| Record type into equivalent record type of non-uniform field order | |
| From type parameter                       | |

> **Note**: `interface` types inherit `Object`.