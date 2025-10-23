# String literal

**Syntax**

```
"shockscript"
```

Triple string literals span multiple lines and are indentation-aware:

```
(
    """
    shockscript, nicely beauty
    scripting.
    """
) == "shockscript, nicely beauty\nscripting."
```