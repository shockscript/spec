# JavaScript

ShockScript gets too many roots from JavaScript.

## Map data type

The ShockScript's `Map` data type differs fundamentally from JavaScript's `Map` in that key-value pairs are accessed more naturally. ShockScript resolves the ambiguity between pairs and the prototype by differentiating property *read* and *call*.

```
m.x = 10
m.length()
```

> **Note**: For a customized type, it might be necessary to access a variable rather than a key-value pair; for that, the user may force fixture access using `<?fixed={object.q::n}?>`.

## Variable shadowing

In ShockScript the following is valid in an activation:

```
var m:* = complexCentral.manager;
// more code...
var m = Manager(m);
```