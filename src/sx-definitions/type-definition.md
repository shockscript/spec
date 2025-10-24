# Type definition

A type definition is used to define an alias to an existing type.

**Syntax**

```
type M = Map.<Number, Number>
```

Type definitions are only allowed in package blocks and top-level region.

<ul>
    <i>TypeDefinition</i> :
    <ul>
        <b>type</b> <i>IdentifierName</i> <i>TypeParameters</i><sub>opt</sub> <b>=</b> <i>TypeExpression</i>
    </ul>
</ul>