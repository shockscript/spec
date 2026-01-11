# React.js

ShockScript incorporates the XML language, and XML literals allow for implementations to produce anything desired, similiar to JSX. There are certain differences to JSX or React.js.

The following demonstrates a basic XML literal for WhackDS:

```
<w:HGroup>
    <w:Button click&={trace("clicked!")}>button 1</w:Button>
</w:HGroup>
```

## Event handlers

In ShockScript, event handlers are expressed as `e&={statementList}` (note the ampersand **\&**) as a shorthand to `e={function(event){statementList}}`. Furthermore, event handlers are conventionally expressed without an `on` prefix (for instance, `click` instead of `onClick`), and they are documented with the `@event` tag.

## Prefixes

ShockScript allows for `<q:N>`, whose name resolution equals `q::N`. Dots may be used for entities other than namespaces, as in:

```
<com.business.components.AppBar/>
```

For brevity, you do either:

```
import bc = com.business.components.*;

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
<w:VGroup>
    {undefined}
    {null}
    {node}
    {nodeList}
    {plainText}
    {number}
</w:VGroup>
```

Interpolating attributes uses `{ object }` and not `{ ...object }` and must appear at most once at the end of all attributes:

```
<w:Button {arguments}>click me</w:Button>
```

## States

Unlike React.js, in WhackDS there is no risk of accessing an outdated state's value, due to how states are constructed.

```
package com.business.components {
    //
    function HelloWorld() : whack.ds.Node {
        // x
        [State]
        var x:uint = 0;

        // layout
        return (
            <w:VGroup>
                <w:Label>clicked {x} times</w:Label>
                <w:Button click&={x++}>click me</w:Button>
            </w:VGroup>
        );
    }
}
```

The state's initializer represents the state's initial value.

Like React.js, there is no transitive detection of mutation methods; therefore, the following is necessary over an array `.push(v)`:

```
x = [...x, v];
```

As to Map objects:

```
m = { ...m, k: v };
```

## Bindables

In WhackDS the concept of "refs" is called *bindables*.

```
package com.business.components {
    //
    function HelloWorld() : whack.ds.Node {
        [Bindable]
        var button:Button?;

        //
        whack.ds.useEffect(function() {
            trace(button!);
        }, []);

        return (
            <w:Button bind={button}>click me</w:Button>
        );
    }
}
```

## Contexts

Context usage is represented as `whack.ds.ContextValue.<T>` objects, although they are used as natural `Context`-annotated locals.

```
function ExampleComponent() : whack.ds.Node {
    //
    [Context("ExampleContext")]
    const example;

    return (
        <></>
    );
}
```

## Effects

The popular "useEffect" hook requires the second argument, preventing mistakes. For listening to any changes, use `"*"`.

```
whack.ds.useEffect(function() {
    //
    return function() {
        // cleanup
    };
}, [dep1, ...depN]);

whack.ds.useEffect(function() {
    //
}, "*");
```

## Styling

Unlike with React.js, there is built-in support for linking style sheets in a WhackDS component.

```
<w:Group>
    <w:Style><![CDATA[
        :host {
            background: red;
        }
    ]]></w:Style>
</w:Group>
```


[More on style sheets](../e4x/whack.md#linking-cascading-style-sheets)
