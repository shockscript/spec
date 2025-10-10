# MXML

The MXML language, as part of the Apache Flex framework, was used for describing UI components in an intuitive way. ShockScript uses XML expressions semantically similiar to the React.js + JSX technologies, but designed to feel close to MXML in readability.

The following demonstrates a basic UI component implemented in WhackDS:

```
package com.business.components {
    //
    public function AppBar() {
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

> **Note**: Although not demanded as such, as opposed to React.js + DOM, event handlers are conventionally expressed without a `on` prefix, such as `click&={trace("clicked!")}` rather than React.js `onClick={e=>{console.log("clicked!")}}`. Event parameters are conventionally given the `@eventparam` tag in the SXDoc comments. Classes continue using the `Event` meta-data, though without needing the `@eventType` tag.

## Rendering components

The Whack Engine's WhackDS feature allows programmers to implement UI components as functions that wrap around the built-in class-based components of Whack Engine. The component is rendered by evaluating the function initially and whenever a state changes.

## Effects

The `whack_ds::useEffect` hook may be used to detect state, parameter or derived changes as well as the component mount and unmount phases.

```
whack_ds::useEffect(function() {
    // cleanup
    return function() {
        //
    };
}, [dep1, ...depN]);

whack_ds::useEffect(function() {
    //
}, "*");
```

When the dependencies list is empty (`[]`), the hook is equivalent to a component mount/unmount event, with the unmount phase handled through the returned function.

```
whack_ds::useEffect(function() {
    // did mount
    return function() {
        // unmount
    };
}, []);
```

## States

In the top-level of a component, declare states using the `State` meta-data:

```
[State]
var counter:uint = 0;
```

The initial value of `counter` is zero, although that initializer is only assigned to the state the first time the component renders.

Note that, like with React.js, arrays and structures as states will not trigger a re-render on operations like `.push()`; instead the programmer needs to reconstruct the array or structure, like in:

```
list = [...list, v];
```

## Fixtures

In the top-level of a component, declare fixtures by using the `Fixture` meta-data. Fixtures have certain use-cases, such as persisting a value across renders, and extracting class-based components from certain tags (in which case the `bind` attribute is used).

```
[Fixture]
var button:Button? = null;

return (
    <w:Button bind={button}>click me</w:Button>
);
```

## Contexts

In the top-level of a component, reflect inherited contexts by using the `Context` meta-data.

```
[Context(ThemeContext)]
var theme:Theme;
```

## Capture safety

Unlike in React.js combined with TypeScript, states, fixtures ("refs") and context reflections are captured by reference from nested functions, guaranteeing the "outdated" value of, say, a state, is never captured, which facilitates development by requiring no additional fixture declaration.

## Styling

Unlike with React.js, there is built-in support for linking style sheets in a WhackDS component.

```
<w:Container>
    <w:Style>
        <![CDATA[
            :host {
                background: red;
            }
        ]]>
    </w:Style>
</w:Container>
```


[More on style sheets](../xml-capabilities/whack.md#linking-cascading-style-sheets)

