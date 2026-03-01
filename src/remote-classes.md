# Remote classes

Classes annotated with the `Remote` meta-data may be serialized or deserialized by `JSON` and possibly other user types.

> **TODO**

<!--

===== enum plans =====


package {
    [Remote(tag="type")]
    public enum Item {
        [Remote::rename(flyout)]
        [Remote::renameField(backdropBlur, "backdrop_blur")]
        type Flyout(
            color : uint,
            backdropBlur : boolean,
        );
    }
}



-->