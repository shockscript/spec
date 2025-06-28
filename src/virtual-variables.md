# Virtual variables

Virtual variables consist of either:

- a getter and a setter (writable);
- a getter (read-only);
- a setter (write-only).

A virtual variable's type is determined based on the getter or setter.

```
function get x():float 10;
function set x(val) {
    //
}
```

## ShockDoc comment

A virtual variable derives ShockDoc comments from its getter or setter.

```
/** Comment */
function get x():float 10;
```

## Meta-data

A virtual variable collects meta-data from its getter or setter.

```
[M1]
[M2]
function get x():float 10;
```