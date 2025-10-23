# Embedding resources

The `Embed()` expression may be used for embedding files and media into the program. Its default behavior is to return a `data:` (for small files) or external URL (for large files).

```
Embed("thumb.webp")
```

> **Note**: When returning an external URL, implementations such as Whack Engine use the `app://` scheme to fetch a file in the application's installation directory.

<blockquote>

**Note**: Implementations may support an artifact path interpolation, as in:

```
Embed("{target}/auto.generated")
```

That is useful when a build script is involved that generates files at the artifact path.

</blockquote>

## Including statically

The user may embed files statically as either an UTF-8 encoded string, or `ByteArray`, rather than obtaining an URL.

```
Embed("data.txt", "text/plain")
Embed("data.bin", "application/octet-stream")
```