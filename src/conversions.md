# Conversions

This section describes which type conversions are available.

Explicit conversions may occur as either `T(v)` (strict conversion) or `v as T` (optional conversion). The behavior of the call operator over a type may not always be a conversion depending on if `T` implements the static `shock_proxy::call()` method.

```
T(v)       // failure throws a TypeError
v as T     // failure returns a default value
```

## Constant coercions

Constant coercions occur implicitly both at compile-time and runtime, converting a constant into another constant.

| Kind                                      | Result                   |
| ----------------------------------------- | ------------------------ |
| `undefined` to flag enumeration           | Interned instance whose value is zero (**0**). |
| `null` to flag enumeration                | Interned instance whose value is zero (**0**). |
| `undefined` to `T` containing `undefined` | `undefined` |
| `undefined` to `T` containing `null` and no `undefined` | `null` |
| `null` to `T` containing either `undefined` or `null`   | `null` |
| Numeric constant to `*` or `Object`  | Equivalent constant of the target type. |
| String constant to `*` or `Object` or union containing `String` | Equivalent constant of the target type. |
| Boolean constant to `*` or `Object` or union containing `Boolean` | Equivalent constant of the target type. |
| Namespace constant to `*` or `Object` or union containing `Namespace` | Equivalent constant of the target type. |
| Type constant to `*` or `Object` or union containing `Class` | Equivalent constant of the target type. |
| Numeric constant to another numeric type | Numeric constant with value converted to target type. |
| Numeric constant to union containing at least one numeric type | Numeric constant of the target type containing value converted to the containing numeric type, preferring the *same* numeric type or otherwise the first numeric type found. |

## Implicit coercion

Implicit coercions occur implicitly both at compile-time and runtime, after trying a constant coercion.

| Kind                                      | Result                   |
| ----------------------------------------- | ------------------------ |
| From `*`                                  | |
| To `*`                                    | |
| Between numeric types                     | |
| To covariant (includes base classes, implemented interfaces, unions and inherited record type) | |
| From `interface` to `Object`              | |
| From union to compatible union            | |
| From union member to union                | |

## Explicit conversions

Explicit conversions occur when resolving `v as T` or `T(v)`, after trying an implicit coercion.

| Kind                                      | Result                  |
| ----------------------------------------- | ----------------------- |
| To contravariant (from `interface` to `interface` subtype, from `class` to subclass)  | |
| To union member                           | |
| From `*` or `Object` to `interface`       | |
| To contravariant (subclass, subinterface or record type subtype) | |
| To another `[T]` type                     | An array filtering out incompatible elements. |
| `String` to enumeration                   | Identification of an enumeration variant by its `String` name. |
| Number to enumeration (using the same numeric type) | For regular enumerations, identifies a variant by its numeric value. For flag enumerations, identifies variant bits. |
| To `String`                               | |
| To `Boolean`                              | |
| To `Number`                               | |
| To `float`                                | |
| To `decimal`                              | |
| To `int`                                  | |
| To `uint`                                 | |
| To `BigInt`                               | |
| Record type into equivalent record type of non-uniform field order | |
| From type parameter                       | |