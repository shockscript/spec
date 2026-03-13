# Serial

The Serial facility allows serializing and deserializing complex types into data formats like JSON and XML. YAML and TOML are mostly compatible with JSON.

> **Note**: The compiler generates efficient code for serialization and deserialization as `serial::fromJSON`, `serial::toJSON`, `serial::fromXML` and `serial::toXML` overrides.
>
> You may call these back from custom (de-)serializer implementations.

This facility requires annotatating classes with either the `Serial` or `XS` meta-data, otherwise a TypeError is thrown while serializing or deserializing.

Variants of an algebraic data type do not need to specify the `Serial` or `XS` meta-data if the ADT does that already.

The default behavior while deserializing into a class *c* other than primitive types and certain global classes, unless defining a self-attached `fromJSON` or `fromXML` method, is roughly:

1. If *c*<i>[[Constructor]]</i>.length == 0
  1. Let o = new *c*()
2. Else
  1. Let o = Create a new instance of *c* without evaluating the constructor
3. Let *fields* = Each *o*\[*k*\] field that is not configured with the `skip="true"` option.
4. Assign each field of *fields* to the respective data document field with appropriate parsing, applying any configured rename.
5. Return *o*

Simple enums, including Flags enums, are serialized and deserialized in a different way from algebraic enums.

The `map {}` type are handled in the base Object implementation.

## JSON

How one serializes or deserializes into/from JSON using the Serial facility:

```sx
import js = sx.serial.json.*
js::parse(str, T)
js::parse(obj, T)
js::object(v)
js::stringify(v)
```

It is an error if while deserializing a required field (one whose type has no default value) is missing from the input.

`stringify` also accepts an options object for pretty formatting.

### Rename

```sx
[Serial]
class U {
    [Serial("short-if")]
    public var shortIf:boolean
}

[Serial(tag="type")]
enum Item {
    [Serial(
        "flyout",
        f="color=c",
        f="backdropBlur=backdrop_blur",
    )]
    type Flyout(
        color:uint,
        backdropBlur:boolean,
    );
}
```

- The rename excludes any base namespaces.
- For enumeration variant's field renames, more than one assign is allowed, in case the user needs an assign in the name of the renamed field.
- For ADTs, if no rename is specified, the variant name is used (including any base namespaces inside the ADT delimited by dot) instead.
- For class-hierarchies used as variants, like nodes resulting from a parser, if no rename is specified, the class's fully qualified name (excluding the package name) is used instead.

### Skip

```sx
[Serial]
class U {
    [Serial(skip="true")]
    public var shortIf:boolean
}

[Serial(tag="type")]
enum Item {
    [Serial(
        "flyout",
        f="!backdropBlur",
    )]
    type Flyout(
        color:uint,
        backdropBlur:boolean,
    );
}
```

### Tag

The Serial `tag` option allows specifying the property used to identify the kind of an ADT or inheritance-based class. If it is not specified, no property is used; instead, a wrapper plain object is used with the variant name, as in:

```json
{
    "left": {
        "Plus": {
            "left": {
                "Number": 10
            },
            "right": {
                "Number": 9
            }
        }
    },
    "right": {
        "Number": 7
    }
}
```

### Classes as variants

Users may want inheritance-based class definitions rather than ADTs (algebraic data types). Those do naturally work.

### Unions

When using union types, there is a small chance of conflict depending on the union members: if two have the same name, one is preferred over the other. This does not happen for most cases though, so we won't bother much with that for now.

### Custom implementation

A class may implement a self-attached `fromJSON` method and/or an instance `toJSON` method for manually controlling serialization or deserialization.

## TOML

How one serializes or deserializes into/from TOML:

```sx
import toml = sx.serial.toml.*
toml::parse(str, T)
toml::parse(obj, T)
toml::object(v)
toml::stringify(v)
```

TOML is handled the same way as JSON. The stringifier decides if it's best to desugar objects and arrays into sections based on complexity.

## XML

How one serializes or deserializes into/from XML:

```sx
import xs = sx.serial.xml.*
xs::parse(str, T, options)
xs::parse(xn, T, options)
xs::parse(xlist, T, options)
xs::xml(v, options)           // XML
xs::stringify(v, options)
```

Fields that are null or undefined are omitted while serializing.

The `XS` meta-data is used for custom configuration which differs slightly from `Serial` as used by JSON or TOML, since it may be desired to configure whether a field should be a tag or an attribute and declare namespace prefixes and use them.

Supported options:

- A `prefixes` Array containing `Namespace` objects. It must be specified, otherwise an error is thrown.
- Pretty-formatting options for `stringify`.

The `default xml namespace = ns` statement influences serialization or deserialization.

> **Note**: Lacking content.

### Tag

For ADTs, tags representing variants are named either after the variant's name (including any base namespaces inside the ADT delimited by dot), or based on the rename (excluding any base namespaces).

For class-hierarchies used as variants, like nodes resulting from a parser, tags are named either after the class's fully qualified name (excluding the package name), or based on the rename (excluding any base namespaces).

### Marking a field as a tag

A field is implicitly a tag. For using an attribute instead for a field of a primitive type or whose type implements `fromXML` and `toXML` methods that take or return a text node, that field may be marked as an attribute using `attribute="true"`.

```sx
package {
    [XS]
    public class Person {
        [XS(attribute="true")]
        public var name:string;
    }
}
```

### Arrays

Arrays or tuples translate to roughly, always unpacked:

```xml
<value>x</value>
<value>y</value>
<value>z</value>
```

### Document element

The root class for serialization or deserialization must have a configuration meta-data with at least `[XS(docElement="true")]`, otherwise an error is thrown. It may also use a rename with an optional prefix, as in:

```sx
package {
    [XS(docElement="true", "e:example")]
    public class Document {
    }
}
```

### Rename

Renames are pretty much like when working with the `Serial` meta-data, except a prefix can be specified:

```sx
[XS("e:U")]
class U {
    [XS("e:short-if")]
    public var shortIf:boolean
}

[XS(tag="type")]
enum Item {
    [XS(
        "e:flyout",
        f="color=e:c",
        f="backdropBlur=e:backdrop_blur",
    )]
    type Flyout(
        color:uint,
        backdropBlur:boolean,
    );
}
```

If a field contains no rename, its name is deduced from its data type (either its class name or its `XS` meta-data).

### Prefixes

Prefixes must be given while serializing or deserializing, as that allows for more concise XS meta-data.

```sx
docStr = xs::stringify(obj, {
    prefixes: [
        new Namespace("e", "http://www.eve.org"),
    ],
})
```

### Custom implementation

A class may implement a self-attached `fromXML` method and/or an instance `toXML` method for manually controlling serialization or deserialization. Both methods may take or return one of { XML, XMLList }.

## Patching data

The best way to patch data while retaining formatting and structure is having:

- The original document text
- A modified object, obtained from parsing the original document text

The `sx.serial.<data format>.*` subpackages provide a function for serializing an object into the data format's most adequate object:

- `sx.serial.json.object(o)`
- `sx.serial.toml.object(o)`
- `sx.serial.xml.xml(o)`

A third-party library may be used for patching the data document, which will typically take at least (*originalDoc* text, *modification* object), figure out what has changed and return a new document text.

- Such libraries should omit null or undefined fields or sections only if they did not appear in the original document.