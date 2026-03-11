# ActionScript 3

ShockScript looks like ActionScript 3. This section describes several details that changed on the language.

## Primitive types

- ShockScript does have more numeric types close to ECMAScript 4.
- The Boolean and String type names are as they are, although they are alternatively aliased `boolean` and `string` in the top-level package.

## String type

The String type stores an UTF-8 encoded text, not an UTF-16 encoded text.

```sx
"\u{10ffff}".length    // UTF-8 length
"\u{10ffff}".charAt(0) // Code Point at byte 0
"\u{10ffff}".charCodeAt(0)


for each (var ch in "shockscript".chars()) {
    // ch:uint
}


"shockscript".chars().length() // Code Point length
```

## Include directive

The `include` directive is not included in ShockScript. It was attempted before, even though it imposes certain efforts for language servers. That may be reconsidered in the future.

## Dynamic

The `Object` type is not dynamic per se, nor does it contain `undefined`, nor are there dynamic classes, nor are there legacy ECMAScript `prototype` objects. Only the `*` type is dynamic and contains `undefined`.

**Matching**: The `str.match` resulting object is slightly different, but still supports indexing.

**Obtaining constructor**: `o.meta::class()`

## Nullability

Types except `*` are non-nullable by default. Use “`t?`” as a shorthand notation for `(t,null)`, and “`t!`” as a way to exclude `undefined` and/or `null`.

## Overriding methods

- Instance methods may override another method and include additional optional parameters (including the rest parameter).
- Instance methods may override another method and return a more contravariant result type.

```sx
class A {
    function m() {}
}
class B extends A {
    override function m(...rest:[float]) {}
}
```

## “in” operator

The `in` operator behaves differently. It triggers `meta::has()` which is in general used for determining whether a collection contains a specific value; for `Map`s it determines whether a pair key exists; for `XML` and `XMLList` objects it performs the same E4X behavior.

```sx
trace(e in arr);
trace(k in m);
```

## Filter operator

The filter operator has been modified to use a `*` identifier rather than cluttering the lexical scope with dynamic names.

```sx
xn.(*.@x.startsWith("abc"))
```

## With statement

The with statement is modified to use the `*` identifier to avoid cluttering the lexical scope.

```sx
with (o) {
    *.x =
    *.y = 10;
}
```

## “this” capture

The `this` object is always captured from the parent activation in nested activations; there is no way to override the `this` object with another value.

```sx
class A {
    function m() {
        function n() {
            // this:A
        }
    }
}
```

## E4X

XML literals produce by default `XML` or `XMLList` unless the inference type is an implementation-defined component type (such as for the Whack Engine, `whack.ds.Node`). Such expressions have also undergone incremental syntax additions:

- `<t a/>` equals `<t a={true}/>`
- `<t e&={}/>` equals `<t e={function(event){}}/>` or `<t e={function(){}}/>`

```sx
<w:VGroup>
    <h1>welcome</h1>
    <button click&={trace("clicked me");}>Click me</button>
</w:VGroup>
```

## Events

Events are declared without defining related static constants, as ShockScript performs vast type inference; thus, the ASDoc `@eventType` tag does not exist in ShockScript.

```sx
/** Some event */
[Event(name="act", type="Event")]
/** Some class */
class A extends EventTarget {}
```

> **Note**: The `@event` tag introduced in ShockScript is used for documenting events better in reactive systems that use record types rather than classes for component parameters.

## Embedding

Embedding files is much easier in ShockScript. The following returns typically an `app://` URI for a file that will be automatically added to the application's installation directory.

```sx
trace(Embed("flower.webp"));
```

<blockquote>

**Note**: Implementations may support interpolating an artifact directory at the `Embed` path, such as `{target}`.

```sx
trace(Embed("{target}/auto.generated.bin"));
```

This is useful for when a build script generates a file at an artifact directory.

</blockquote>

For static embedding, use a `type=` option:

```sx
Embed("data.txt", type="text/plain")               // string
Embed("data.bin", type="application/octet-stream") // ByteArray
```

## Variable shadowing

In ShockScript the following is valid in an activation:

```sx
var m:* = complexCentral.manager;
// more code...
var m = Manager(m);
```

## Switch fallthroughs

The `switch` statement does not support fallthroughs, which helps preventing logical bugs by not requiring the `break` statement.

```sx
switch (v) {
    case 0:
        trace("zero");
    case 1:
        trace("one");
    default:
        trace("rest");
}
```

## Switch type

The `switch type` statement allows for type and pattern matching:

```sx
switch type (v) {
    case (d : Date) {
    }
    default {
    }
}

switch type (exp) {
    case (Plus(x, y)) {
    }
    case (Nothing()) {
    }
}
```

## Typed meta-data

Meta-data are typed on a surface-level to avoid typos. For custom meta-data, the convention is to define an `annotations.*` subpackage for a project, which contains Annotation classes, and use the **import\@** pragma, as shown in [Meta-data annotations](../../metadata.md).