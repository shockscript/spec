# Clone

The `generic::clone` method present in objects performs a general clone.

```sx
o.generic::clone()
```

For classes that need their own clone implementation and need to be used with `generic::clone`, it is best to have a `clone` method with either a `function():C` or `function(boolean=):C` signature (where the boolean is the `deep` parameter); any additional optional parameters are allowed after `deep`.

> **Note**: It is best for the `deep` parameter to default to `true` for consistency. If you forget or don't care about the `deep` parameter, make sure the method indeed clones deeply for consistency.

Depending on the use-case, `clone` methods may be implemented for skipping the clone (i.e. returning the same object reference).