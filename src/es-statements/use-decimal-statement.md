# Use decimal statement

The `use decimal` statement is used to provide a `DecimalContext` object at the surrounding activation for specifying the following settings of the `decimal` data type:

- The division precision (`precision`), influencing division and remainder operations.
- The rounding significant digits (`rounding`) used in methods like `toExponential`/`toPrecision`.

```
use decimal { precision: 64, rounding: 0 }
```

**Syntax**

<ul>
    <i>UseDecimalStatement</i> :
    <ul>
        <b>use decimal</b> <i>ListExpression</i><sup>allowIn</sup>
    </ul>
</ul>