# Meta-data

Meta-data are bracketed, entries of textual key-value pairs that may be attached to annotatable directives, that are typed on a surface level during compile-time, but are dynamic during runtime. Meta-data are not unique and may appear more than once, as well as their key-value pairs.

```sx
[M1]
class A {}

[M1(x="y", z="w")]
class A {}

[M1(y)]
class A {}
```

Keyless entries are a single identifier (equivalent to a string) or a string literal not accompanied by a key.

The

## Typing meta-data

Meta-data are defined in a conventional `annotations` subpackage of a project, which defines classes containing the special `Annotation` meta-data.

```sx
package bridge.annotations {
    [Annotation]
    public class N {
        public var n : string? = null;
        [Key("Special::t")]
        public var t : Enum = "fly";
    }

    // Used as [B::Max]
    [Annotation(prefix="B")]
    public class Max {
        // Keyless entries
        public var values : [string] = [];
    }

    [Annotation]
    public class Y {
        // Untyped key-value pairs
        public var pairs : [[string?, string]] = [];
    }
}
```

Then the **import\@** pragma may be used to import annotations from a package.

```sx
import@ bridge.annotations.*;
```