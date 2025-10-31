# Default lexical scope

The topmost scope from which all scopes inherit is implicitly created by ShockScript.

## Imports

The topmost scope imports the top-level package by wildcard. It is allowed to shadow names from the top-level package, in which case, the `SX` alias may be used to access the top-level package.

## SX

The topmost scope defines a `SX` property, which is an alias to a package wildcard import of the top-level package.

## Intl

The topmost scope defines an `Intl` property, which is an alias to a package wildcard import of the `shockscript.intl` package.

## Temporal

The topmost scope defines an `Temporal` property, which is an alias to a package wildcard import of the `shockscript.temporal` package.

## GlobalReflection

The topmost scope defines an `GlobalReflection` property, which is an alias to a package wildcard import of the `shockscript.globalreflection` package.