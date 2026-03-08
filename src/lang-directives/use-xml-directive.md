# Use XML directive

The `use xml` directive is used to provide a `XMLContext` object at the surrounding frame for configuring the `XML`/`XMLList` data types.

```sx
var ctx:XMLContext, xn:XML

ctx = { ignoreWhitespace: true }

{
    use xml ctx
    xn = <information>{"  content  "}</information>
}
```

This affects not only the lexical scope, but also external function calls that are called subsequently from the same scope or nested scopes during runtime.

> **Note**: Internally functions receive a hierarchical *environment* frame reference, which is decently optimized, where every frame contains a ?context local that includes a `XMLContext` reference that may be a null pointer (which means *skip to parent frame*).
>
> Thus, that syntactic construct should work with both synchronous and asynchronous code.

**Syntax**

<ul>
    <i>UseXMLDirective</i> :
    <ul>
        <b>use xml</b> <i>ListExpression</i><sup>allowIn</sup>
    </ul>
</ul>