# Filter expression

```
o.(pattern; test)
```

Instance usage:

```
const list = ["foo", "bar", "qux"];
trace( list.(a, a.includes("a")) ); // ["bar"]
```