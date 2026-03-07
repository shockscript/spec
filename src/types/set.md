# Set type

The `Set.<T>` type represents a hash set collection of elements.

```sx
Set.<T>
```

> **Note:** Property access on a `Set` equals data access. Method call on a `Set` equals a `Set` method use.

## Instance usage

```sx
var set : Set.<string> ;

set = [];

// x=1
set.shock = true;

set.qux // false, no ReferenceError
```