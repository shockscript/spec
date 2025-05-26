# Type conversion

## Optional conversion

An optional conversion will return the default value of `T` on conversion failure (such as `null` for most types).

```
v as T
```

## Forced conversion

A forced conversion throws a `TypeError` on conversion failure.

```
T(v)
```