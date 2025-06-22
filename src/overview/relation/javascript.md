# JavaScript

ShockScript gets too many roots from JavaScript.

## Map data type

The ShockScript's `Map` data type differs fundamentally from JavaScript's `Map` in that key-value pairs are accessed more naturally. ShockScript resolves the ambiguity between pairs and the prototype by differentiating property *read* and *call*.

```
m.x = 10
m.length()
```