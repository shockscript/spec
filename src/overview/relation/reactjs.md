# React.js

ShockScript incorporates XML capabilities, and XML expressions allow for implementations to produce anything desired, similiar to JSX. There are certain differences to JSX or React.js.

The following demonstrates a basic XML expression for Jet Engine:

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
</j:VGroup>
```

Interpolating attributes uses `{ object }` and not `{ ...object }` and must appear at most once at the end of all attributes:

```
<j:Button {params}>click me</j:Button>
```

## Preventing outdated captures

As in React.js, it is rarely possible to accidentally capture the outdated value of a state in nested functions. To prevent this, it is a common pratice to declare a store that reflects the state's current value, as the following component demonstrates.

```
package com.business.components {
    public function HelloWorld() {
        const [x, setX] = Fuse::useState.<decimal>(0);
        const x$ = Fuse::useStore.<decimal>(0);

        // reflect x
        Fuse::useEffect(function() { x$.current = x }, [x]);

        // a nested function that is stored somewhere...
        function nested() {
            trace(x);          // maybe outdated
            trace(x$.current); // always current
        }

        // ...

        return (
            <j:Button>button 1</j:Button>
        );
    }
}
```

> **Note**: This pratice does not apply to functions directly nested in the component, which directly appear in event handlers of resulting XML expressions; such functions will always read the latest state's value.
>
> The following example uses an inline function, but an outer function also effectively works.
>
> ```
> package com.business.components {
>     public function HelloWorld() {
>         const [x, setX] = Fuse::useState.<decimal>(0);
>         return (
>             <j:Button click&={setX(x + 1)}>{x}</j:Button>
>         );
>     }
> }
> ```