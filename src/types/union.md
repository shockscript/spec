# Union types

The structural union type, written `(m1, m2, ...mN)`, consists of two or more member types, containing all possible values of the member types.

```
(decimal, string)
```

## Restrictions

- Unions contain two or more members.

## Default value

The default value of an union type is determined as follows:

1. If it contains `void`, then `undefined`.
2. If it contains `null`, then `null`.
3. No default value.

## Nullability

The following shorthands are available for nullability:

- `T?` or `?T` is equivalent to `(null, T)`.
- `T!` removes `null` and/or `void` from `T`.