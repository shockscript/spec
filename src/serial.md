# The Serial feature

The Serial feature allows serializing and deserializing complex types into data formats like JSON and possibly other user types.

> **Note**: This section lacks certain contents yet.

## JSON

How one serializes or deserializes into/from JSON using the Serial feature:

```sx
import js = org.sx.serial.json.*
js::parse(str, T)
js::parse(obj, T)
js::object(v)
js::stringify(v)
```

`stringify` also accepts an options object for pretty formatting.

### Rename

```sx
class U {
    [Serial("short-if")]
    public var shortIf:boolean
}

package {
    [Serial(tag="type")]
    public enum Item {
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
}
```

Remarks:

- For enumeration variant's field renames, more than one assign is allowed, in case the user needs an assign in the name of the renamed field.

### Skip

```sx
class U {
    [Serial(skip="true")]
    public var shortIf:boolean
}

package {
    [Serial(tag="type")]
    public enum Item {
        [Serial(
            "flyout",
            f="!backdropBlur",
        )]
        type Flyout(
            color:uint,
            backdropBlur:boolean,
        );
    }
}
```

### Classes as variants

Users may need hierarchical class definitions rather than algebraic type definitions mainly due to inheritance and other factors. The `Serial` meta-data may be used to configure these.

> **Note**: Lacking content. Migrate some plans from the Whack Engine 2024 for this.

### Custom implementation

A class may implement a self-attached `fromJSON` method and/or an instance `toJSON` method for manually controlling serialization or deserialization.

## TOML

How one serializes or deserializes into/from TOML:

```sx
import toml = org.sx.serial.toml.*
toml::parse(str, T)
toml::parse(obj, T)
toml::object(v)
toml::stringify(v)
```

TOML is handled the same way as JSON. The stringifier decides if it's best to desugar objects and arrays into sections based on complexity.

## XML

How one serializes or deserializes into/from XML:

```sx
import xs = org.sx.serial.xml.*
xs::parse(str, T)
xs::parse(xn, T)
xs::parse(xlist, T)
xs::xml(v)             // XML
xs::stringify(v)
```

The `XSerial` meta-data is used for custom configuration which differs slightly from `Serial` as used by JSON or TOML, since it may be desired to configure whether a field should be a tag or an attribute and declare namespace prefixes and use them.

The `default xml namespace = ns` statement influences serialization or deserialization.

> **Note**: Lacking content.

### Marking a field as a tag

```sx
package {
    public class Person {
        [XSerial(tag="true")]
        public var name:string;
    }
}
```

## Patching data

The best way to patch data while retaining formatting and structure is having:

- The original document text
- A modified object, obtained from parsing the original document text

The `org.sx.serial.<data format>.*` subpackages provide a function for serializing an object into the data format's most adequate object:

- `org.sx.serial.json.object(o)`
- `org.sx.serial.toml.object(o)`
- `org.sx.serial.xml.xml(o)`

A third-party library may be used for patching the data document, which will typically take at least (*originalDoc* text, *modification* object), figure out what has changed and return a new document text.