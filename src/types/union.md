# Union types

The structural union type, written `(t1, t2, tN)`, consists of two or more member types, containing all possible values of the member types.

```sx
(decimal,string)
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

- “`t?`” is equivalent to `(t,null)`.
- “`t!`” removes `null` and/or `void` from `t`.