# React.js

ShockScript incorporates the XML language, and XML literals allow for implementations to produce anything desired, similiar to JSX. There are certain differences to JSX or React.js.

The following demonstrates a basic XML literal for Whack DS:

```sx
const xn : whack.ds.Node = (
    <w:VGroup>
        <w:Button click&={trace("clicked!")}>button 1</w:Button>
    </w:VGroup>
);
```

## Event handlers

In ShockScript, event handlers are expressed as `e&={statementList}` (note the ampersand **\&**) as a shorthand to `e={function(event){statementList}}`. Furthermore, event handlers are conventionally expressed without an `on` prefix (for instance, `click` instead of `onClick`), and they are documented with the `@event` tag.

## Prefixes

ShockScript allows for `<q:N>`, whose name resolution equals `q::N`. Dots may be used for entities other than namespaces, as in:

```sx
<com.zero.spark.components.AppBar/>
```

For brevity, you do either:

```sx
import bc = com.zero.spark.components.*;

xn = <bc:AppBar/>
```

or:

```sx
import com.zero.spark.components.*

xn = <AppBar/>
```

## Interpolation

Interpolation works similiarly to React.js, except for HTML.

```sx
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

```sx
<w:Button {arguments}>click me</w:Button>
```

## States

Unlike React.js, in Whack DS there is no risk of accessing an outdated state's value, due to how states are constructed.

```sx
package com.zero.spark.components {
    public function HelloWorld() : whack.ds.Node {
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

```sx
x = [...x, v];
```

As to Map objects:

```sx
m = { ...m, k: v };
```

## Bindables

In Whack DS the concept of "refs" is called *bindables*.

```sx
package com.zero.relic.site {
    //
    public function HelloWorld() : whack.ds.Node {
        [Bindable]
        var button:Button?;

        //
        whack.ds.useEffect(function() {
            trace(button!);
        });

        return (
            <w:Button bind={button}>click me</w:Button>
        );
    }
}
```

## Contexts

Context usage is represented as `whack.ds.ContextValue.<T>` objects, although they are used as natural `Context`-annotated locals.

```sx
function Example() : whack.ds.Node {
    //
    [Context("ExampleContext")]
    const example;

    return (
        <></>
    );
}
```

## Effects

The popular "useEffect" hook, differently from ReactJS, auto tracks dependencies, preventing mistakes. For listening to any changes, use `"*"`.

> **Note**: For tracking dependent props, the compiler does some internal machinery. For the compiler, states and contexts are easier, as they are wrapped objects with a virtual accessor under the hood.

```sx
whack.ds.useEffect(function() {
    //
    return function() {
        // Cleanup
    };
});

whack.ds.useEffect(function() {
    //
}, "*");
```

## Styling

Unlike with React.js, there is built-in support for linking style sheets in a Whack DS component.

```sx
<w:Group>
    <w:Style><![CDATA[
        :host {
            background: red;
        }
    ]]></w:Style>
</w:Group>
```


[More on style sheets](../e4x/whack.md#linking-cascading-style-sheets)

## Class-based components

[Whack DS supports class-based components](../whack_ds.md#class-based-components), which are more flexible than function-based components.