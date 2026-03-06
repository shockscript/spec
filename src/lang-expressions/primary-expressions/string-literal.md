# String literal

**Syntax**

```sx
"shockscript"
```

Triple string literals span multiple lines and are indentation-aware:

```sx
"""
    shockscript, nicely beauty
    scripting.
""" == "shockscript, nicely beauty\nscripting."
```

**Semantics**

A string literal may be assigned to a simple enumeration at compile-time, matching a variant's string; therefore returning a value whose static type is that enumeration.

A string literal may be assigned to `int`, `uint`, `byte` (ASCII) or the `Number` union, resulting into the integer value identifying the single Unicode Code Point in the string literal. In that case, it is a verify error if the string literal does not contain exactly one Code Point (which may be an escape sequence itself).

```sx
"A".charCodeAt(0) == "A"
```