# Namespace definition

The namespace definition may be primarily used to define a namespace that may be used for protecting or versioning other definitions and XML data processing.

```es
namespace ns1
namespace ns2 = "http://example.com/2015/product"
```

In addition, the namespace definition may also be used to define aliases to a package wildcard import, as in:

```es
// com.inexistentninja.kunai.*
namespace kunai = "com.inexistentninja.kunai";

// an alias to the top-level package.
namespace ES4 = "http://www.sweaxizone.com/2015/shockscript/global";
```

Namespaces are allowed to nest within blocks regardless of scope. When inside a class block, contributes a static property.

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