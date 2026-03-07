# Map type

The `Map.<K, V>` type represents a hash map.

```sx
Map.<K, V>
```

> **Note:** Property access on a `Map` equals data access. Method call on a `Map` equals a `Map` method use.

## Instance usage

```sx
const map = new Map.<string, double>();

// x=10
map.x = 10;

map.y // TypeError. use "in" before

const fns = new Map.<string, Function>();

// m=function
fns.m = function() 10;

// m()
trace((fns.m)());
```