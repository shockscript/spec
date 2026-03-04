# Embed

The `Embed()` expression may be used for embedding files and media into the program. Its default behavior is to return a `data:` (for small files) or external URL (for large files).

```sx
Embed("flower.gif")
```

> **Note**: When returning an external URL, implementations such as Whack Engine use the `app://` scheme to fetch a file in the application's installation directory.

<blockquote>

**Note**: Implementations may support an artifact path interpolation, as in:

```sx
Embed("{target}/auto.generated")
```

That is useful when a build script is involved that generates files at the artifact path.

</blockquote>

## Forcing external embedding

With the following, files are never embedded inside the program, even if they are short:

```sx
Embed("flower.gif", external="true")
```

## Where external files go and license

External files are typically embedded in a structured way in the final program, using project ID + source path + resource path + filename, which is also useful for embedding licensed resources such as fonts.

> **Note**: When using Whack Red, do not worry about web cache. Files respond with appropriate HTTP ETag (like a SHA-512 hash of the file contents), Last-Modified and Cache-Control headers.

## Including statically

The user may embed files statically as either an UTF-8 encoded string, or `ByteArray`, rather than obtaining an URL.

```sx
Embed("BeautySecrets.txt", type="text/plain")
Embed("Hacker.bin", type="application/octet-stream")
```