# With statement

The **with** statement is used to declare a **\*** binding to the statement's scope. The **\*** binding holds the value of the parenthesized expression.

```
with (o) {
    *.x += 10;
    *.y += 5;
}
```

**Syntax**

<ul>
    <i>WithStatement</i><sup>ω</sup> :
    <ul>
        <b>with</b> <i>ParenListExpression</i> <i>Substatement</i><sup>ω</sup>
    </ul>
</ul>