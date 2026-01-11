# Namespaces

Names are three-dimensional, consisting of a namespace (the *qualifier*) and a local name. The `::` punctuator is used in qualified identifiers for using a namespace prefix and a local name, as in:

```
q::n
o.q::n
```

Namespaces appear as optional access modifiers in annotatable definitions, as in:

```
special_properties var acc:decimal = 0;
```

There are *reserved* namespaces and *user* namespaces.

## Reserved namespaces

Reserved namespaces (or *system* namespaces) are created implicitly by the language:

- `public`
- `internal`
- `protected`
- `private`
- `static protected`
- `meta`

They are tied to a parent (such as a package, a class or a scope), except in the case of `meta`.

A `namespace` definition that omits the URI creates an `internal` namespace:

```
namespace special_properties;
```

## User namespaces

User namespaces are identified by an URI.

```
namespace observer_internals = "http://observer.net/internals";
```