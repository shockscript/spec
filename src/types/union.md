# Union

The structural union type, written `(m1, m2, ...mN)`, consists of two or more non-union member types containing all possible values of the member types.

```
(decimal, String)
```

## Default value

The default value of an union type is determined as follows:

1. If it contains `void`, then `undefined`.
2. If it contains a type that accepts `null`, then `null`.
3. Return the default value of the first member type.