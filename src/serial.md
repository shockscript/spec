# The Serial feature

The Serial feature allows serializing and deserializing complex types into data formats like JSON and possibly other user types.

> **Note**: This section lacks certain contents yet.

## JSON

How one serializes or deserializes into/from JSON:

```sx
JSON.parse(str, T)
JSON.stringify(v)
```

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

## XML

How one serializes or deserializes into/from JSON:

```sx
import xs = org.sx.serial.xs.*
xs::parse(str, T)
xs::parse(xn, T)
xs::parse(xlist, T)
xs::xml(v)             // XML
xs::stringify(v)
```

A meta-data is used for custom configuration which differs slightly from `Serial` as used by JSON or TOML, since it may be desired to configure whether a field should be a tag or an attribute and declare namespace prefixes and use them.

The `default xml namespace = ns` statement influences serialization or deserialization.

> **Note**: Lacking content.