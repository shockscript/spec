# Embed expression

**Syntax**

```sx
Embed("flower.webp")

// force embedding externally
// even if file is short
Embed("flower.webp", external="true")

// UTF-8 text
Embed("data.txt", type="text/plain")

// ByteArray
Embed("data.bin", type="application/octet-stream")
```

<ul>
    <i>EmbedExpression</i> :
    <ul>
        <b>Embed &#x28;</b> <i>MetadataEntryList</i><sub>opt</sub> <b>&#x29;</b>
    </ul>
</ul>

**Semantics**

The default form of the embed expression specifying solely a path is implementation-defined, but always returns a `string` representing an URL or resource path.

- External resources are typically embedded in a structured way in the final program, using project ID + source path + resource path + filename, which is also useful for embedding licensed resources such as fonts.

The form that specifies `type="text/plain"` will embed the referenced file at the program's static memory as an UTF-8 encoded text, returning the `string` data type.

The form that specifies `type="application/octet-stream"` will embed the referenced file at the program's static memory as an octet stream, returning the `ByteArray` data type.