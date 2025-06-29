# ActionScript 3

ShockScript looks like ActionScript 3. This section describes several details that changed on the language.

## String type

The `String` type stores an UTF-8 encoded text, not an UTF-16 encoded text.

```
"\u{10FFFF}".length // UTF-8 length
"\u{10FFFF}".charAt(0) // Code Point at byte 0

for each (var ch in "shockscript".chars()) {
    // ch:uint
}

"shockscript".chars().length() // Code Point length
```

## Include directive

The `include` directive is not included in ShockScript.

## Default XML namespace

The `default xml namespace =` E4X statement is not included in ShockScript due to WebAssembly limitations.

## Dynamic

The `Object` type is not dynamic per se, nor does it contain `undefined`, nor are there dynamic classes, nor are there legacy ECMAScript `prototype` objects. Only the `*` type is dynamic and contains `undefined`.

**Matching**: The `str.match` resulting object is slightly different, but still supports indexing.

**Obtaining constructor**: `o.shock_reflect::constructor()`

## Overriding methods

- Instance methods may override another method and include additional optional parameters (including the rest parameter).
- Instance methods may override another method and return a more contravariant result type.

```
class A {
    function m() {}
}
class B extends A {
    override function m(...rest:[float]) {}
}
```

## “in” operator

The `in` operator behaves differently. It triggers `shock_proxy::has()` which is in general used for determining whether a collection contains a specific value; for `Map`s it determines whether a pair key exists; for `XML` and `XMLList` objects it performs the same E4X behavior.

```
trace(e in arr);
trace(k in m);
```

## Filter operator

The filter operator has been modified to use a `*` identifier rather than cluttering the lexical scope with dynamic names.

```
xnode.(*.@x.startsWith("abc"))
```

## With statement

The with statement is modified to use the `*` identifier to avoid cluttering the lexical scope.

```
with (o) {
    *.x =
    *.y = 10;
}
```

## “this” capture

The `this` object is always captured from the parent activation in nested activations; there is no way to override the `this` object with another value.

```
class A {
    function m() {
        function n() {
            // this:A
        }
    }
}
```

## E4X

XML expressions do not produce `XML` or `XMLList` unless the inference type is one of these; they are implementation-defined by default. Such expressions have also undergone incremental syntax additions:

- `<t a/>` equals `<t a={true}/>`
- `<t e&={}/>` equals `<t e={function(event){}}/>` or `<t e={function(){}}/>`

```
<j:VGroup>
    <j:Label variant="heading">Welcome</j:Label>
    <j:Button click&={trace("clicked me");}>Click me</j:Button>
</j:VGroup>
```

> **Note**: `XML(<tag/>)` equals `var _loc_0:XML = <tag/>;`.

## Events

Events are declared without defining related static constants, as ShockScript performs vast type inference; thus, the ASDoc `@eventType` tag does not exist in ShockScript.

```
/** Some event */
[Event(name="act", type="Event")]
/** Some class */
class A extends EventTarget {}
```

> **Note**: The `@eventHandler` tag introduced in ShockScript is used for documenting events better in reactive systems that use structural object types rather than classes for component parameters.

## Embedding

Embedding files is much easier in ShockScript. The following returns typically an `app://` URI for a file that will be automatically added to the application's installation directory.

```
trace(Embed("flower.webp"));
```

<blockquote>

**Note**: Implementations may support interpolating an artifact directory at the `Embed` path, such as `{target}`.

```
trace(Embed("{target}/auto.generated.bin"));
```

This is useful for when a build script generates a file at an artifact directory.

</blockquote>

For static embedding, use the `static="mime type"` option.

```
Embed("data.txt", static="text/plain") // or "application/text"
Embed("data.bin", static="application/octet-stream")
```

## Variable shadowing

In ShockScript the following is valid in an activation:

```
var m:* = complexCentral.manager;
// more code...
var m = Manager(m);
```

## Switch fallthroughs

The `switch` statement does not support fallthroughs, which helps preventing logical bugs by not requiring the `break` statement.

```
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

The `switch type` statement allows for simple type matching:

```
switch type (v) {
    case (d : Date) {
        //
    }
    default {
        //
    }
}
```