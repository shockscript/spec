# Implicit lexical scope

The topmost scope from which all scopes inherit is implicitly created by ShockScript.

## Imports

The topmost scope imports the top-level package by wildcard. It is allowed to shadow names from the top-level package, in which case, the `SX` alias may be used to access the top-level package.

## SX

The top-level package defines an `SX` property, which is an alias to a package wildcard import of the top-level package.

## meta

The top-level package defines a `meta` namespace, which is the system `meta` namespace; used a few times such as for the `meta::class` method. It is not a reserved word in qualified identifiers as users may need their own namespace prefix with that name.

## generic

The top-level package defines a `generic` namespace, which is useful for the `generic::clone` method that won't collide with an user `clone`.

## Intl

The top-level package defines an `Intl` property, which is an alias to a package wildcard import of the `org.sx.intl` package.

## Temporal

The top-level package defines an `Temporal` property, which is an alias to a package wildcard import of the `org.sx.temporal` package.