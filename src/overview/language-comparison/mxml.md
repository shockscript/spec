# MXML

The MXML language, as part of the Apache Flex framework, was used for describing UI components in an intuitive way. ShockScript uses XML literals semantically similar to the React.js + JSX technologies, but designed to feel close to MXML in readability.

The following demonstrates a basic UI component implemented in Whack DS:

```sx
package com.zero.spark.components {
    public function AppBar():whack.ds.Node {
        return (
            <w:HGroup>
                <w:Button click&={trace("clicked!")}>button 1</w:Button>
            </w:HGroup>
        );
    }
}
```

## Event handlers

In MXML, event handlers were expressed as `e="statements"`. In ShockScript, they are expressed as `e&={statements}` (note the ampersand **\&**) as a shorthand to `e={function(event){statements}}`.

> **Note**: Although not demanded as such, as opposed to React.js + DOM, event handlers are conventionally expressed without a `on` prefix, such as `click&={trace("clicked!")}` rather than React.js `onClick={e=>{console.log("clicked!")}}`. Event props are conventionally given the `@event` tag in the ShockDoc comments. Classes continue using the `Event` meta-data, though without needing the `@eventType` tag.

## Rendering components

The Whack DS framework allows programmers to implement UI components as functions that wrap around the built-in class-based components of Whack Engine. The component is rendered by evaluating the function initially and whenever a state changes.

## Effects

The `whack.ds.useEffect` hook may be used to detect changes to props, state or context as well as the component mount and unmount phases.

Dependencies are auto-tracked.

```sx
whack.ds.useEffect(function() {
    // Cleanup
    return function() {
        //
    };
});

// Effect that runs everytime "*"
whack.ds.useEffect(function() {
    //
}, "*");
```

When there are no dependencies, the hook is equivalent to a component mount/unmount event, with the unmount phase handled through the returned function.

```sx
whack.ds.useEffect(function() {
    // Did mount
    return function() {
        // Unmount
    };
});
```

## States

In the top-level of a component, declare states using the `State` meta-data:

```sx
[State]
var counter:uint = 0;
```

The initial value of `counter` is zero, although that initializer evaluates only the first time the component renders.

Overwriting a state with a different value (as by an `equal()` comparison) will re-render the component.

Note that, like with React.js, arrays and structures as states will not trigger a re-render on operations like `.push()`; instead the programmer needs to reconstruct the array or structure, like in:

```sx
list = [...list, v];
```

## Bindables

In the top-level of a Whack DS component, declare bindables by using the `Bindable` meta-data. Bindables have certain use-cases, such as persisting a value across renders, and extracting class-based components from certain tags (in which case the `bind` attribute is used).

```sx
[Bindable]
var button:Button? = null;

return (
    <w:Button bind={button}>click me</w:Button>
);
```

## Contexts

In the top-level of a component, reflect inherited contexts by using the `Context` meta-data.

```sx
[Context("ThemeContext")]
const theme;
```

## Capture safety

Unlike in React.js combined with TypeScript, states, bindables ("refs") and context values are captured by reference from nested functions, guaranting the "outdated" value of, say, a state, is never captured, which facilitates development by requiring no additional bindable declaration.

Props are also safe to use anywhere within the component as long as you follow the recommendations (such as avoiding destructuring it).

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

[Whack DS supports class-based components](../whack_ds.md#class-based-components), which are preferred over function-based components.