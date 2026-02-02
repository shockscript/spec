# Variables

A variable may be read-only or writeable, and consists of a type.

```
var x = 0
const y = 10
```

## ShockDoc comment

A ShockDoc comment can be applied to a variable.

```
/** Comment */
var x
```

## Meta-data

A variable may have zero or more meta-data.

```
[M1]
[M2]
var x
```

## Initializer

If the initializer of a variable is a constant, then the variable consists of a constant initializer.

```
var x = 0
```

## Local shadowing

Re-declaring a variable is allowed inside activation blocks.

```
var m:* = central.manager;
// more code...
var m = Manager(m);
```