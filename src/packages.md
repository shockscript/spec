# Packages

A package consists of a left-to-right identifying name sequence, a set of properties and two namespaces, `public` and `internal`.

A package `me.diantha.calculator.enum` is expressed as:

```
package me.diantha.calculator.enum {
    //
}
```

## Top-level package

The top-level package, which defines global properties, is equivalent to:

```
package {
    //
}
```

When a global name is shadowed, the user may use the special `global` namespace to lookup a global name:

```
Math
    // or
global::Math
```

## Name shadowing

When a package or a specific item of a package is imported, it is possible to fully qualify a name in an expression using that package and the imported items, shadowing any other variables.

```
import com.color.types.Color;
var com = "shockscript";
trace( com.color.types.Color(0x10_00_00) );
```

## Documentation comment

A `package` definition may have a prefix documentation comment, allowing to document the package once.

```
/**
 * Enumerations used in the core runtime.
 */
package com.business.coreRT.enum {}
```