# Default XML namespace statement

The `default xml namespace` statement is used to specify the default E4X namespace used for lookups where the XML prefix is omitted, influencing the surrounding frame's *\[\[DefaultXMLNamespace\]\]* internal property; in other words, it can be said that `default xml namespace` is block-scoped.

```sx
namespace Samurai = "http://www.samurai.com/2007"

{
    default xml namespace = Samurai
    xn = <Envato> swiss </Envato>
}
```

**Syntax**

<ul>
    <i>DefaultXMLNamespaceStatement</i> :
    <ul>
        <b>default</b> [no line break] <b>xml</b> [no line break] <b>namespace</b> <b>=</b> <i>NonAssignmentExpression</i><sup>allowIn</sup>
    </ul>
</ul>
