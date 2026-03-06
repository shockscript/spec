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

> **Note**: Internally functions receive a *context* object, which holds a hierarchical *environment* frame reference, which is decently optimized, where every frame contains a mandatory local for the `XMLContext` that may be a null pointer (which means *skip to parent frame*).
>
> Thus, that syntactic construct should work with both synchronous and asynchronous code.

**Syntax**

<ul>
    <i>UseXMLDirective</i> :
    <ul>
        <b>use xml</b> <i>ListExpression</i><sup>allowIn</sup>
    </ul>
</ul>