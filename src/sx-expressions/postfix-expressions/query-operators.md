# Query operators

**Syntax**

<ul>
    <i>QueryOperator</i> :
    <ul>
        <b>..</b> <i>QualifiedIdentifier</i><br>
        <b>.</b> <b>(</b> <i>ListExpression</i><sup>allowIn</sup> <b>)</b>
    </ul>
</ul>

## Descendants operator

```
o..x
```

**Semantics**

The descendants operator `o..x` looks at `o` for the `sx_proxy::descendants()` method and returns the result of invoking that method with the given identifier key.

## Filter operator

```
o.(*.name.startsWith("A"))
```

**Semantics**

The filter operator `o.(...)` looks at `o` for the `sx_proxy::filter()` method and creates a wildcard **\*** binding inside the parenthesized expression that represents the element being tested. The parenthesized expression must return a Boolean and represents an activation.