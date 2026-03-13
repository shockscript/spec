# Map type

The `Map.<k,v>` type represents a hash map.

> **Note:** Property access on a `Map` equals data access. Method call on a `Map` equals a `Map` method use.

## Instance usage

```sx
const map = new Map.<string,double>();

map.x = 10;
map.y    // ReferenceError.
         //   use "in" before

const fns = new Map.<string,Function>();

fns.m = function() 10;
(fns.m)()       // 10
```