# Default lexical scope

The topmost scope from which all scopes inherit is implicitly created by ShockScript.

## Imports

The topmost scope imports the top-level package by wildcard. It is allowed to shadow names from the top-level package, in which case, the `SX` alias may be used to access the top-level package.

## SX

The topmost scope defines a `SX` property, which is an alias to a package wildcard import of the top-level package.

## Intl

The topmost scope defines a `Intl` property, which is an alias to `sx.intl.**`.

## Temporal

The topmost scope defines a `Temporal` property, which is an alias to `sx.temporal.**`.