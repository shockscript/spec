# Filter expression

```
o.(pattern if test)
```

Instance usage:

```
const list = ["foo", "bar", "qux"];
trace( list.(a if a.includes("a")) ); // ["bar"]
```
