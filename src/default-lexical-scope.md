# Default lexical scope

The topmost scope from which all scopes inherit is implicitly created by ShockScript.

## Imports

The topmost scope imports the top-level package by wildcard. It is allowed to shadow names from the top-level package, in which case, the `global` alias may be used to access the top-level package.

## global

The topmost scope defines a `global` property, which is a package wildcard import of the top-level package.

## Provided by Jet Engine

The following names are provided implicitly when targetting the Jet Engine.

### fuse

The topmost scope defines a `fuse` property, which is a package recursive import of `com.jet.fuse.**`, used for the creating UI components using Fuse.