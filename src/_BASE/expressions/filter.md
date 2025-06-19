# Filter expression

```
o.(test)
```

Creates a `*` binding within the test.

Instance usage:

```
const list = ["foo", "bar", "qux"];
trace( list.(*.includes("a")) ); // ["bar"]
```
