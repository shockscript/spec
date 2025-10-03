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

## Provided by Whack

The following names and imports are provided implicitly when targetting Whack Engine.

### whack.\*\*

The topmost scope imports `whack.**`, so that the Whack APIs are made available globally.

### whack_ds

The topmost scope defines a `whack_ds` property, which is an alias to a package recursive import of `whackx.ds.**`, used for creating UI components using WhackDS.