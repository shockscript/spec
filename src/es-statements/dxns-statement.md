# Default XML namespace statement

The `default xml namespace` statement is used to specify the default E4X namespace used for lookups where the XML prefix is omitted, influencing the surrounding activation's *\[\[DefaultXMLNamespace\]\]* internal property.

```
namespace ninja = "http://www.ninja.com/build/2007"

{
    default xml namespace = ninja
    // [[DefaultXMLNamespace]] = "http://www.ninja.com/build/2007"
}

// [[DefaultXMLNamespace]] = ""
```

**Syntax**

<ul>
    <i>DefaultXMLNamespaceStatement</i> :
    <ul>
        <b>default</b> [no line break] <b>xml</b> [no line break] <b>namespace</b> <b>=</b> <i>NonAssignmentExpression</i><sup>allowIn</sup>
    </ul>
</ul>