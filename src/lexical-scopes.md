# Lexical scopes

## Internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Parent*]]            | Optional parent scope. |
| \[\[*OpenNamespaces*]]    | Open namespace list. |
| \[\[*Properties*]]        | The scope properties. |
| \[\[*Imports*]]           | The import list. |

### Import list

The import list may contain package single imports, package wildcard imports, and package recursive imports.

## Scope variants

### With scope

The `with` scope is created by the `with` statement, causing the wildcard `*` expression to resolve to the parenthesized object.

```
with (object.from.somewhere)
    *.x *= 10,
    *.y *= 3;
```

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Object*]]            | Object used in the `with` statement. |

### Filter scope

The filter scope is created by the filter operator, causing the wildcard `*` expression to resolve to the test parameter.

```
objects.(*.x > 0)
```

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Object*]]            | Base object of the filter operator. |

### Class scope

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Class*]]            | Class object. |

### Enum scope

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Class*]]            | Class object. |

### Interface scope

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Interface*]]         | The interface. |

### Package scope

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Package*]]           | Package. |

### Activation

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*This*]]              | The `this` object. |
| \[\[*Method*]]            | Method. |