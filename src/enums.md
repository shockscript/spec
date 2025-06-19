# Enumerations

Enumerations are special classes consisting of zero or more variants.

```
enum Variant {
    const VARIANT_ONE;
    const VARIANT_TWO = "variantTwo";
    const VARIANT_THREE = [2, "variantThree"];
}
```

## Type inference

When the inference type in a string literal is an enumeration, the literal may identify a variant by its name.

```
var val:Variant = "variantOne";
```

When the inference type in an array literal is a flag enumeration, the literal may be used to identify multiple variants.

```
[Flags]
enum F { const A, B, C }

var m:F = ["a", "b", "c"];
```

## Flag enumerations

Flag enumerations differ from regular enumerations by having instances being able to contain zero or more variants.

```
[Flags]
enum F { const A, B, C }
```

Flag enumerations may be assigned `undefined`, `null` or `[]` to indicate absence of variants.

### All variants

Obtain all variants of a flag enumeration by using the `**` expression with the enumeration as the inference type:

```
var f:F = **;
```

## Numeric type

Enumerations use the `Number` type by default to represent the variant values. The user is allowed to change the type to another numeric type through the `Type` meta-data.

```
[Type(decimal)]
enum E1 {
    const A, B, C;
}
```

## Variant name

The variant name as declared by the `const` is determined as follows:

1. Let r = empty string
2. If the initializer does not contain a string literal
    1. Let orig = binding identifier name
    2. r = a screaming snake case (`ABC_DEF`) to camel case (`abcDef`) conversion of n1.
3. Else
    1. r = the value of the string literal at the initializer.
4. If r is already used by another variant's name
    1. Throw a verify error
5. Return r

## Variant value

The variant value as declared by the `const` is determined as follows:

1. If the enumeration is a flag enumeration
    2. Return *DecideFlagValue*()
1. Return *DecideValue*()

*DecideValue*()

1. Let r = zero
2. If the initializer does not contain a numeric literal
    1. If there is no previous variant, return zero.
    2. Let k = previous variant's value
    3. r = k + 1
3. Else
    1. r = the value of the numeric literal at the initializer.
4. If r is already used by another variant's value
    1. Throw a verify error
5. Return r

*DecideFlagValue*()

1. Let r = zero
2. If the initializer does not contain a numeric literal
    1. If there is no previous variant, return one.
    2. Let k = previous variant's value
    3. r = k * 2
3. Else
    1. r = the value of the numeric literal at the initializer.
    2. If r is not one or a multiple of two
        1. Throw a verify error
4. If r is already used by another variant's value
    1. Throw a verify error
5. Return r

## Implicitly added properties and methods

### For all enumerations

#### valueOf()

```
public function valueOf():T {
    //
}
```

Returns the numeric value of the enumeration instance, where `T` is the numeric type.

#### toString()

```
public function toString():String {
    //
}
```

Returns the name of the enumeration instance. For a flag enumeration, returns the names of the enumeration instance delimited by comma (**,**) by ascending value order.

### For flag enumerations

#### shock_proxy::has()

```
shock_proxy function has(v:E):Boolean {
    //
}
```

Returns a boolean indicating whether the instance contains the specified flags or not, where `E` is the enumeration itself.

This allows for `f in e` expressions.

#### with()

```
public function with(v:E):E {
    //
}
```

Returns a new value containing the specified flags, where `E` is the enumeration itself.

#### without()

```
public function without(v:E):E {
    //
}
```

Returns a new value removing the specified flags, where `E` is the enumeration itself.

#### toggled()

```
public function toggled(v:E):E {
    //
}
```

Returns a new value toggling the specified flags, where `E` is the enumeration itself.