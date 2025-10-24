# Namespace definition

The namespace definition may be used to define a namespace that may be used for protecting or versioning other definitions and XML data processing.

```
namespace ns1
namespace ns2 = "http://example.com/secret"
```

**Syntax**

<ul>
    <i>NamespaceDefinition</i> :
    <ul>
        <b>namespace</b> <i>IdentifierName</i><br>
        <b>namespace</b> <i>IdentifierName</i> <b>=</b> <i>AssignmentExpression</i><sup>allowIn</sup>
    </ul>
</ul>