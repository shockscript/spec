# Array literal

**Syntax**

```
["shock", "script"]
```

<ul>
    <i>ArrayLiteral</i> :
    <ul>
        <b>[</b> <i>Elision</i><sub>opt</sub> <b>]</b><br>
        <b>[</b> <i>ElementList</i> <b>]</b><br>
        <b>[</b> <i>ElementList</i> <b>,</b> <i>Elision</i><sub>opt</sub> <b>]</b>
    </ul>
</ul>

<ul>
    <i>Elision</i> :
    <ul>
        <b>,</b><br>
        <i>Elision</i> <b>,</b>
    </ul>
</ul>

<ul>
    <i>ElementList</i> :
    <ul>
        <i>Elision</i><sub>opt</sub> <i>AssignmentExpression</i><sup>allowIn</sup><br>
        <i>Elision</i><sub>opt</sub> <i>LiteralRest</i><br>
        <i>ElementList</i> <b>,</b> <i>Elision</i><sub>opt</sub> <i>AssignmentExpression</i><sup>allowIn</sup><br>
        <i>ElementList</i> <b>,</b> <i>Elision</i><sub>opt</sub> <i>LiteralRest</i>
    </ul>
</ul>