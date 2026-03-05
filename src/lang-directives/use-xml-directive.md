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

**Syntax**

<ul>
    <i>UseXMLDirective</i> :
    <ul>
        <b>use xml</b> <i>ListExpression</i><sup>allowIn</sup>
    </ul>
</ul>