# Default lexical scope

The topmost scope from which all scopes inherit is implicitly created by ShockScript.

## Imports

The topmost scope imports the top-level package by wildcard. It is allowed to shadow names from the top-level package, in which case, the `global` alias may be used to access the top-level package.

## global

The topmost scope defines a `global` property, which is an alias to a package wildcard import of the top-level package.

## Intl

The topmost scope defines a `Intl` property, which is an alias to `shock.intl.**`.

## Temporal

The topmost scope defines a `Temporal` property, which is an alias to `shock.temporal.**`.

## Provided by Jet™

The following names and imports are provided implicitly when targetting Jet™.

### jet.\*\*

The topmost scope imports `jet.**`, so that the Jet™ APIs are made available globally.

### Fuse

The topmost scope defines a `Fuse` property, which is an alias to a package recursive import of `jetx.fuse.**`, used for creating UI components using Jet+Fuse.