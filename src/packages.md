# Packages

A package consists of a ascending domain name, a set of properties and two namespaces, `public` and `internal`.

A package `com.business.enum` is expressed as:

```
package com.business.enum {
    //
}
```

> **Note**: One common convention is for packages to use a prefix domain (one of ( `com`, `net`, `org`, `me` )); alternatively an user may use a prefixless domain name (such as `skia` rather than `com.google.skia`). The `me` prefix is used for personal content and the rest for companies, organizations and groups.

The user defines properties under the package inside the `package` block, as in:

```
package f.q {
    public function f() {}
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
var com = 0;
trace( com.color.types.Color(0x10_00_00) );
trace( Color(0x10_00_00) );
```

## Documentation comment

A `package` definition may have a prefix documentation comment, allowing to document the package once.

```
/**
 * Enumerations used in the core runtime.
 */
package com.business.coreRT.enum {}
```

## Package wildcard import

A package wildcard import is aliased for the following directive:

```
import q = com.business.quantum.*;
```

Then `q` may be used as a qualifier to resolve to a name in the `quantum` package (excluding subpackages).

```
q::x
```

## Package recursive import

A package recursive import is aliased for the following directive:

```
import q = com.business.quantum.**;
```

Then `q` may be used as a qualifier to resolve to a name in the `quantum` package and its subpackages in a recursive way.

```
q::x
```