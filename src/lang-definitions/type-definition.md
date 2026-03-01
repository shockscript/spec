# Type definition

A type definition is either used to define an alias to an existing type or used to define a variant inside an algebraic `enum`.

**Syntax**

```
type M = Map.<double, double>


// inside algebraic enums

type X(n : decimal)
```

Alias type definitions are allowed anywhere. When inside a class block, contributes a static property.

Variant type definitions are only allowed directly in the block of an algebraic `enum`.

<ul>
    <i>TypeDefinition</i><sup>ω</sup> :
    <ul>
        <b>type</b> <i>IdentifierName</i> <i>TypeParameters</i><sub>opt</sub> <b>=</b> <i>TypeExpression</i> <i>Semicolon</i><sup>ω</sup><br>
        <b>type</b> <i>AlgebraicVariantName</i> <b>(</b> <i>Parameters</i> <b>)</b> <i>Semicolon</i><sup>ω</sup><br>
        <b>type</b> <i>AlgebraicVariantName</i> <b>(</b> <i>Parameters</i> <b>)</b> <i>Block</i><sub>opt</sub>
    </ul>
</ul>

<ul>
    <i>AlgebraicVariantName</i> :
    <ul>
        <i>IdentifierName</i><br>
        <i>AlgebraicVariantName</i> <b>.</b> <i>IdentifierName</i>
    </ul>
</ul>