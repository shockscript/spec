# Packages

ActionScript packages are used for organizing definitions, using left-to-right hierarchic names.

```
package            { public var x = 10 }
package me.diantha { public var y = 15 }

// (top-level).x
x

import me.diantha.*;

// me.diantha.y
y
me.diantha.y
```

## Default scope

The language's default scope imports the top-level package and `jet.ui.react.*`, and it is the parent scope of the scope in each source file; therefore it is possible to override the name of top-level items, such as `Number`, `Array` and `parseInt`.

## global

The `global` namespace equals the `public` namespace of the top-level package. It may be necessary when an item overrides a top-level item, as in:

```
package q.f {
    public const Number : global::Number = 10;
}
```

## React

The `React` namespace equals the `public` namespace of the `jet.ui.react.*` package. It can be used similiarly to `global` when an item overrides React functionality.

```
React::useEffect(function() {
    // changed

    return function() {
        // cleanp
    };
}, []);
```