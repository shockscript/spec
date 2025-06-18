# ActionScript 3 relationship

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

The `Object` type is not dynamic per se, nor are there dynamic classes, nor are there legacy ECMAScript `prototype` objects. Only the `*` type is dynamic.

**Matching**: The `str.match` resulting object is slightly different.

**Obtaining constructor**: `o.ReflectionProperties::constructor`

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

The `in` operator behaves differently. It triggers `sx_proxy::has()` which is in general used for determining whether a collection contains a specific value; for `Map`s it determines whether a pair key exists; for `XML` and `XMLList` objects it performs the same E4X behavior.

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

XML expressions do not produce `XML` or `XMLList`; they are implementation-defined. Such expressions have also undergone incremental syntax additions:

- `<t a/>` equals `<t a={true}/>`
- `<t e&={}/>` equals `<t e={function(event){}}/>` or `<t e={function(){}}/>`
- `<?html={exp}?>` alternative for `{exp}`
- `<?markdown={exp}?>` alternative for `{exp}`

> **Note**: Jet Engine translates XML expressions into nodes suitable for a graphical user interface.

```
<j:VGroup>
    <j:Label variant="heading">Welcome</j:Label>
    <j:Button click&={trace("clicked me");}>Click me</j:Button>
</j:VGroup>
```

## Events

Events are declared without defining related static constants, as ShockScript performs vast type inference; thus, the ASDoc `@eventType` tag does not exist in ShockScript.

```
/**
 * Emitted on play.
 */
[Event(name="play", type="Event")]
/**
 * My class A
 */
class A extends EventTarget {}
```

## Embedding

Embedding raw files is much easier in ShockScript. Unlike Adobe Flex though, there is no preprocessing of such files, and they are included as either `String` (UTF-8 encoded) or `ByteArray` (octet stream) based on type inference.

```
trace(Embed("data.bin"));
```