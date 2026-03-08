# Default XML namespace statement

The `default xml namespace` statement is used to specify the default E4X namespace used for lookups where the XML prefix is omitted, influencing the surrounding frame's *\[\[DefaultNamespace\]\]* internal property; in other words, it can be said that `default xml namespace` is block-scoped.

```sx
namespace Samurai = "http://www.samurai.com/2007"

{
    default xml namespace = Samurai
    xn = <Envato>swiss</Envato>
}
```

This affects not only the lexical scope, but also external function calls that are called subsequently from the same scope or nested scopes during runtime.

> **Note**: Internally functions receive a hierarchical *environment* frame reference, which is decently optimized, where every frame contains a ?context local that includes the *\[\[DefaultNamespace\]\]* internal property that may be a null pointer (which means *skip to parent frame*).
>
> Thus, that syntactic construct should work with both synchronous and asynchronous code.

**Syntax**

<ul>
    <i>DefaultXMLNamespaceStatement</i> :
    <ul>
        <b>default</b> [no line break] <b>xml</b> [no line break] <b>namespace</b> <b>=</b> <i>NonAssignmentExpression</i><sup>allowIn</sup>
    </ul>
</ul>
