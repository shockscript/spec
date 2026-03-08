# Variables

A variable may be read-only or writeable, and consists of a type.

```sx
var x = 0
const y = 10

// Equivalent to above
let x = 0
let const y = 10
```

## ShockDoc comment

A ShockDoc comment can be applied to a variable.

```sx
/** Comment */
var x
```

## Meta-data

A variable may have zero or more meta-data.

```sx
[M1]
[M2]
var x
```

## Initializer

If the initializer of a variable is a constant, then the variable consists of a constant initializer.

```sx
var x = 0
```

Variables do not need to have an immediate initialiser, in which case they must be initially assigned later.

## Local shadowing

Re-declaring a variable is allowed inside activation blocks.

```sx
var m:* = central.manager;
// more code...
var m = Manager(m);
```

This is typically used to declare a new variable with a different data type.