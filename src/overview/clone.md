# Clone

The `generic::clone` method present in objects performs a general clone.

```sx
o.generic::clone()
```

For classes that need their own clone implementation and need to be used with `generic::clone`, it is best to have a `clone` method with a `function(boolean=):C` signature (where the boolean is the `deep` parameter); any additional optional parameters are allowed after `deep`.