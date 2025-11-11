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

It is possible to fully qualify a name in an expression using a package and one of its items, shadowing any other variables.

```
import org.colourful.color.Color;
var com = 0;
trace( org.colourful.color.Color(0x10_00_00) );
trace( Color(0x10_00_00) );
```

## ReadMe

A directory identifying a package relative to a source path may contain a README file (either `README` or `README.md`) written as Markdown text, which serves as a means to attach documentation to the package.

## Package single import

A package single import is contributed to the lexical scope for the following directive:

```
import f.q.x;
```

## Package wildcard import

A package wildcard import is aliased for the following directive:

```
import q = com.business.quantum.*;
```

Then `q` may be used as a qualifier to resolve to a name in the `com.business.quantum.*` package (excluding subpackages).

```
q::x
```

For the following directive, the package wildcard import is contributed to the lexical scope:

```
import com.business.quantum.*;
```

## Source path

- A package definition must contain exactly one definition item, and its name must match the source path.
- A source file must consist of exactly one package definition.

