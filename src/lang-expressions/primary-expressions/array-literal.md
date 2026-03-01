# Array literal

**Syntax**

```sx
["shock", "script"]
```

The following:

```sx
[0, 1, 2] : [byte]
```

is equivalent to `Array.<byte>([0, 1, 2])`, or:

```sx
type B = [byte]
B([0, 1, 2])
```

<ul>
    <i>ArrayLiteral</i> :
    <ul>
        <b>[</b> <i>Elision</i><sub>opt</sub> <b>]</b> <i>ArrayLiteralTypeAnnotation</i><sub>opt</sub><br>
        <b>[</b> <i>ElementList</i> <b>]</b> <i>ArrayLiteralTypeAnnotation</i><sub>opt</sub><br>
        <b>[</b> <i>ElementList</i> <b>,</b> <i>Elision</i><sub>opt</sub> <b>]</b> <i>ArrayLiteralTypeAnnotation</i><sub>opt</sub>
    </ul>
</ul>

<ul>
    <i>ArrayLiteralTypeAnnotation</i> :
    <ul>
        <b>:</b> <i>TypeExpression</i>
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