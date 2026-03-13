# Set type

The `Set.<t>` type represents a hash set collection of elements.

> **Note:** Property access on a `Set` equals data access. Method call on a `Set` equals a `Set` method use.

## Instance usage

```sx
var set : Set.<string>

set = [];
set.shock = true;
set.qux // false, no ReferenceError
```