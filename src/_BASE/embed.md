# Embed

The `Embed()` expression may be used for embedding files and media into the program. Its default behavior is to return an external URL.

```
Embed("thumb.webp")
```

> **Note**: When returning an external URL, implementations such as Jet Engine use the `app://` scheme to fetch a file in the application's installation directory.

## Static embedding

The user may embed files statically as either `application/text` (UTF-8 string) or `application/octet-stream` (`ByteArray`).

```
Embed("data.txt", static="application/text")
Embed("data.bin", static="application/octet-stream")
```