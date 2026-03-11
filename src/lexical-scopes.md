# Lexical scopes

## Internal properties

| Name                      | Description |
| ------------------------- | ----------- |
| \[\[*Parent*]]            | Optional parent scope. |
| \[\[*OpenNamespaces*]]    | Open namespace list. |
| \[\[*Properties*]]        | The scope properties. |
| \[\[*Imports*]]           | The import list. |
| \[\[*AnnotationImports*]] | The annotation import list (used for verifying meta-data). |

### Import list

The import list may contain package single imports and package wildcard imports.

## Scope variations

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

## Implicit scope

The topmost scope from which all scopes inherit is implicitly created by the language.

### Imports

The topmost scope imports the top-level package by wildcard. It is allowed to shadow names from the top-level package, in which case, the `SX` alias may be used to access the top-level package.

The topmost scope imports annotations from `sx.annotations.*`, as if by including a `import@ sx.annotations.*` pragma.

### SX

The top-level package defines an `SX` property, which is an alias to a package wildcard import of the top-level package.

### meta

The top-level package defines a `meta` namespace, which is the system `meta` namespace; used a few times such as for the `meta::class` method. It is not a reserved word in qualified identifiers as users may need their own namespace prefix with that name.

### generic

The top-level package defines a `generic` namespace, which is useful for the `generic::clone` method that won't collide with an user `clone`.

### Intl

The top-level package defines an `Intl` property, which is an alias to a package wildcard import of the `sx.intl` package.

### Temporal

The top-level package defines an `Temporal` property, which is an alias to a package wildcard import of the `sx.temporal` package.