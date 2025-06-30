# Default lexical scope

The topmost scope from which all scopes inherit is implicitly created by ShockScript.

## Imports

The topmost scope imports the top-level package by wildcard. It is allowed to shadow names from the top-level package, in which case, the `global` alias may be used to access the top-level package.

## global

The topmost scope defines a `global` property, which is an alias to a package wildcard import of the top-level package.

## Intl

The topmost scope defines a `Intl` property, which is an alias to `shockscript.intl.**`.

## Temporal

The topmost scope defines a `Temporal` property, which is an alias to `shockscript.temporal.**`.

## Provided by Jet Engine

The following names and imports are provided implicitly when targetting the Jet Engine.

### jet.**

The topmost scope imports `jet.**`, so that the Jet Engine APIs are made available globally.

### fuse

The topmost scope defines a `fuse` property, which is an alias to a package recursive import of `fuse.**`, used for the creating UI components using Fuse.