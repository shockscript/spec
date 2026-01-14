# Lexical scopes

## Internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Parent*]]            | Optional parent scope. |
| \[\[*OpenNamespaces*]]    | Open namespace list. |
| \[\[*Properties*]]        | The scope properties. |
| \[\[*Imports*]]           | The import list. |

### Import list

The import list may contain package single imports and package wildcard imports.

## Scope variants

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

Method bodies create an activation as scope.

#### Added internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*This*]]              | The `this` object. |
| \[\[*Method*]]            | Method. |