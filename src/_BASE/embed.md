# Embed

The `Embed()` expression may be used for embedding static media into the program.

```
const text : String = Embed("data.txt");
```

> **Note**: In Flash Player, an `[Embed]` meta-data was used in definitions in order to embed static files; this is not the case with Jet engine.

## MIME type

Through type inference, the `Embed()` expression results in either `String` (UTF-8 interpretation) or `ByteArray` (octet stream).