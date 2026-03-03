# The Serial feature

The Serial feature allows serializing and deserializing complex types into data formats like JSON and possibly other user types.

> **Note**: This section lacks certain contents yet.

How one serializes or deserializes, say, JSON:

```sx
JSON.parse(str, T)
JSON.stringify(v)
```

## Rename

```sx
type U = {
    [Serial("short-if")]
    shortIf:boolean,
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

## Skip

```sx
type U = {
    [Serial(skip="true")]
    shortIf:boolean,
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