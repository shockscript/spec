# Use decimal directive

The `use decimal` directive is used to provide a `DecimalContext` instance at the surrounding frame for configuring the `decimal` data type.

```
const ctx = new DecimalContext("half_even") // round to even

{
    use decimal ctx
    x = a + b // "+" rounds to even if necessary
}
```

**Syntax**

<ul>
    <i>UseDecimalDirective</i> :
    <ul>
        <b>use decimal</b> <i>ListExpression</i><sup>allowIn</sup>
    </ul>
</ul>