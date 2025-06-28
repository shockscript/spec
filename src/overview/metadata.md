# Meta-data

Meta-data are bracketed, arbitrary entries of textual key-value pairs that may be attached to definitions. Meta-data are not unique and may appear more than once, as well as key-value pairs.

```
[M1]
class A {}

[M1(x="y", z="w")]
class A {}

[M1(y)]
class A {}
```

Keyless entries are a single identifier or a string literal not accompanied by a key.

## Reserved meta-data

Certain meta-data are reserved in some contexts, such as `Event`.