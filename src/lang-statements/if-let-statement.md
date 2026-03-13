# If let statement

The `if..let` statement may be used for pattern matching on algebraic data types.

```sx
if (let Plus(10, right) = exp) {
    //
}
```

It may also be used for extracting a non-nullable variable from a test expression, without using a matching pattern; that is, a regular identifier binding.

```sx
if (let node = parseAtom()) {
    //
}
```

`if..let` can also be useful for, say, iterator results.

```sx
if (let [x!,false] = characters.next()) {
    //
} else {
    break;
}
```

**Syntax**

<ul>
    <i>IfLetStatement</i><sup>abbrev</sup> :
    <ul>
        <b>if &#x28;</b> <i>IfLetVariable</i> <b>&#x29;</b> <i>Substatement</i><sup>abbrev</sup><br>
        <b>if &#x28;</b> <i>IfLetVariable</i> <b>&#x29;</b> <i>Substatement</i><sup>noShortIf</sup> <b>else</b> <i>Substatement</i><sup>abbrev</sup>
    </ul>
</ul>

<ul>
    <i>IfLetStatement</i><sup>full</sup> :
    <ul>
        <b>if &#x28;</b> <i>IfLetVariable</i> <b>&#x29;</b> <i>Substatement</i><sup>full</sup><br>
        <b>if &#x28;</b> <i>IfLetVariable</i> <b>&#x29;</b> <i>Substatement</i><sup>noShortIf</sup> <b>else</b> <i>Substatement</i><sup>full</sup>
    </ul>
</ul>

<ul>
    <i>IfLetStatement</i><sup>noShortIf</sup> :
    <ul>
        <b>if &#x28;</b> <i>IfLetVariable</i> <b>&#x29;</b> <i>Substatement</i><sup>noShortIf</sup> <b>else</b> <i>Substatement</i><sup>noShortIf</sup>
    </ul>
</ul>

<ul>
    <i>IfLetVariable</i> :
    <ul>
        <i>VariableDefinitionKind</i> <i>VariableBinding</i><sup>allowIn</sup>
    </ul>
</ul>