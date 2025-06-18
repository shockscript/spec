# Filter expression

```
o.(test)
```

Instance usage:

```
const list = ["foo", "bar", "qux"];
trace( list.(*.includes("a")) ); // ["bar"]
```
