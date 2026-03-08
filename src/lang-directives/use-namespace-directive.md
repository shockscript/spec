# Use namespace directive

The **use namespace** pragma is used to contribute a namespace to the compile-time open namespace list of the enclosing scope.

```sx
use namespace ns1
```

**use namespace** belongs to the compile-time and only affects the open namespace list of the current block scope and any *syntactically* nested scopes, unlike, say, **default xml namespace**.

**Syntax**

<ul>
    <i>UseNamespaceDirective</i> :
    <ul>
        <b>use namespace</b> <i>ListExpression</i><sup>allowIn</sup>
    </ul>
</ul>