# Union

The structural union type, written `(M1, M2, ...MN)`, consists of two or more member types, containing all possible values of the member types.

```
(decimal, String)
```

## Default value

The default value of an union type is determined as follows:

1. If it contains `void`, then `undefined`.
2. If it contains a type that accepts `null`, then `null`.
3. Return the default value of the first member type.