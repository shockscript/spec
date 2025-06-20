# Default lexical scope

The topmost scope from which all scopes inherit is implicitly created by ShockScript.

## Imports

The topmost scope imports the top-level package by wildcard.

## global

The topmost scope defines a `global` property, which is an alias to the `public` namespace of the top-level package.