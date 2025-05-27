# Map

The `Map.<K, V>` type represents a hash map.

```
Map.<K, V>
```

> **Note:** Property access on a `Map` equals data access. Method call on a `Map` equals a `Map` method use.

## Instance usage

```
const map = new Map.<String, Number>();

// x=10
map.x = 10;

const fns = new Map.<String, Function>();

// m=function
fns.m = function() 10;

// m()
trace(fns.call("m"));
```