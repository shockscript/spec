# Namespace definition

The namespace definition may be primarily used to define a namespace that may be used for protecting or versioning other definitions and XML data processing.

```
namespace ns1
namespace ns2 = "http://example.com/secret/2015"
```

In addition, the namespace definition may also be used to define aliases to a package wildcard import, as in:

```
// com.inexistentninja.kunai.*
namespace kunai = "com.inexistentninja.kunai";

// an alias to the top-level package.
// users can just use `global` if it doesn't conflict
// with their names.
namespace shock_global = global;
```

**Syntax**

<ul>
    <i>NamespaceDefinition</i> :
    <ul>
        <b>namespace</b> <i>IdentifierName</i><br>
        <b>namespace</b> <i>IdentifierName</i> <b>=</b> <i>AssignmentExpression</i><sup>allowIn</sup>
    </ul>
</ul>

**Semantics**

A URI namespace contains at least a colon; namespaces assigned a string literal without a colon will result into an alias to a package wildcard import.