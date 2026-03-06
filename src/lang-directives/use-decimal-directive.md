# Use decimal directive

The `use decimal` directive is used to provide a `DecimalContext` instance at the surrounding frame for configuring the `decimal` data type.

```sx
var ctx:DecimalContext, x:decimal

ctx = new DecimalContext(12, "half_even") // 12 digits of precision,
                                          //   round to even

{
    use decimal ctx
    x = a + b         // "+" rounds to even if necessary
}
```

> **Note**: Internally functions receive a *context* object, which holds a hierarchical *environment* frame reference, which is decently optimized, where every frame contains a mandatory local for the `DecimalContext` that may be a null pointer (which means *skip to parent frame*).
>
> Thus, that syntactic construct should work with both synchronous and asynchronous code.

**Syntax**

<ul>
    <i>UseDecimalDirective</i> :
    <ul>
        <b>use decimal</b> <i>ListExpression</i><sup>allowIn</sup>
    </ul>
</ul>