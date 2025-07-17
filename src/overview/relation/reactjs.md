# React.js

ShockScript incorporates XML capabilities, and XML expressions allow for implementations to produce anything desired, similiar to JSX. There are certain differences to JSX or React.js.

The following demonstrates a basic XML expression for JET™:

```
<j:HGroup>
    <j:Button click&={trace("clicked!")}>button 1</j:Button>
</j:HGroup>
```

## Event handlers

In ShockScript, event handlers are expressed as `e&={statementList}` (note the ampersand **\&**) as a shorthand to `e={function(event){statementList}}`. Furthermore, event handlers are conventionally expressed without an `on` prefix (for instance, `click` instead of `onClick`), and they are documented with the `@eventparam` tag.

## Prefixes

ShockScript allows for `<q:N>`, whose name resolution equals `q::N`. Dots may be used for entities other than namespaces, as in:

```
<com.business.components.AppBar/>
```

For brevity, you do either:

```
import bc = com.business.components.**;

<bc:AppBar/>
```

or:

```
import com.business.components.*

<AppBar/>
```

## Interpolation

Interpolation works similiarly to React.js, except for HTML.

```
<j:VGroup>
    {undefined}
    {null}
    {node}
    {nodeList}
    {plainText}
    {number}
</j:VGroup>
```

Interpolating attributes uses `{ object }` and not `{ ...object }` and must appear at most once at the end of all attributes:

```
<j:Button {params}>click me</j:Button>
```

## States

Unlike React.js, in JET+FUSE there is no risk of accessing an outdated state's value, due to how states are constructed.

```
package com.business.components {
    public function HelloWorld() {
        [State]
        var x:decimal = 0;

        return (
            <j:VGroup>
                <j:Label>clicked {x} times</j:Label>
                <j:Button click&={x++}>click me</j:Button>
            </j:VGroup>
        );
    }
}
```

The state's initializer represents the state's initial value.

Like React.js, there is no transitive detection of mutation methods; therefore, the following is preferred over an array `.push(v)`:

```
x = [...x, v];
```

As to Map objects:

```
m = { ...m, k: v };
```

## References

In JET+FUSE the concept of "refs" is more formally called *references*.

```
package com.business.components {
    public function HelloWorld() {
        [Reference]
        var button:Button?;

        use effect [] {
            trace(button!);
        }

        return (
            <j:Button reference={button}>click me</j:Button>
        );
    }
}
```

## Effects

The popular "use effect" hook is abbreviated as an `use effect` statement.

```
use effect [] {
    //
}
use effect [dep1, ...depN] {
    //
}
use effect * {
    //
}
use effect * {
    cleanup {
        //
    }
}
```