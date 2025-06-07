# What has changed from ActionScript 3

The ShockScript language looks similiar to ActionScript 3. This section describes several details that changed on the language.

## String type

The `String` type stores an UTF-8 encoded text, not an UTF-16 encoded text.

- Use `.length` for getting the string's byte count.
- Use `.charAt()` and `.charCodeAt()` for reading an UTF-8 code point at the specified byte offset.
- Use `.byteAt()` for getting the byte at the specified byte offset.
- Use `.bytes()` to create an iterator over the UTF-8 bytes.
- Use `.chars()` to create an iterator over the Unicode Code Points. Provides manual skipping, index control, peeking, taking or peeking a number of code points, EOF checking and more.
- Use `.chars().length()` for getting the total of Unicode Code Points.

## Include directive

The `include` directive is not implemented in ShockScript.

## Default XML namespace

The `default xml namespace =` E4X statement is not implemented in ShockScript due to WebAssembly limitations.

## Dynamic

The `Object` type is not dynamic per se, nor are there dynamic classes, nor are there legacy ECMAScript `prototype` objects. Only the `*` type is dynamic.

- Methods such as `str.match` therefore return an object slightly different than the standard, since `Array` can't be attached properties such as `index`.
- Instead of `(o as Object).constructor` you do `Reflect.constructor(o)`.
- Methods such as `toString()` and `valueOf()` are defined in `Object` without `prototype`. This implies the language allows to override methods with additional optional parameters (including the rest parameter) and a more contravariant result type.

## Overriding methods

- Instance methods may override another method and include additional optional parameters (including the rest parameter).
- Instance methods may override another method and return a more contravariant result type.

## “in” operator

The `in` operator behaves differently. It triggers `jet_proxy::has()` which is in general used for determining whether a collection contains a specific value; for `Map`s it determines whether a pair key exists; for `XML` and `XMLList` objects it performs the same E4X behavior.

## Filter operator

The filter operator has been modified to take a binding name (`.(pattern if test)`) rather than cluttering the lexical scope with dynamic names.

```
xnode.(o if o.@x.startsWith("abc"))
```

## With statement

The with statement is not implemented since using it with dynamic types such as `XML` clutters the lexical scope.

## “this” capture

The `this` object is always captured from the parent activation in nested activations; there is no way to override the `this` object with another value.

## E4X

XML markup does not produce `XML` or `XMLList`; the result of XML and XML list expressions is implementation-defined. Typically those expressions result in nodes suitable for rendering user interface components.

## Events

Events are declared without defining related static constants, as ShockScript performs vast type inference; thus, the ASDoc `@eventType` tag does not exist in ShockScript.
