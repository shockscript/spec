# Embed expression

**Syntax**

```
Embed("flower.webp")

// UTF-8 text
Embed("data.txt", "text/plain")

// ByteArray
Embed("data.bin", "application/octet-stream")
```

<ul>
    <i>EmbedExpression</i> :
    <ul>
        <b>Embed &#x28;</b> <i>MetadataEntryList</i><sub>opt</sub> <b>&#x29;</b>
    </ul>
</ul>

**Semantics**

The default form of the embed expression specifying solely a path is implementation-defined, but always returns a `String` representing an URL.

The form that specifies a path followed by a `"text/plain"` option will embed the referenced file at the program's static memory as an UTF-8 encoded text, returning the `String` data type.

The form that specifies a path followed by a `"application/octet-stream"` option will embed the referenced file at the program's static memory as an octet stream, returning the `ByteArray` data type.