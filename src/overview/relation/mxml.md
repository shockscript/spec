# MXML

The MXML language, as part of the Apache Flex framework, was used for describing UI components in an intuitive way. ShockScript uses XML expressions semantically similiar to the React.js + JSX technologies, but designed to feel close to MXML in readability.

The following demonstrates a basic UI component implemented in Jet+Spot:

```
package com.business.components {
    //
    public function AppBar() {
        return (
            <j:HGroup>
                <j:Button click&={trace("clicked!")}>button 1</j:Button>
            </j:HGroup>
        );
    }
}
```

## Event handlers

In MXML, event handlers were expressed as `e="statements"`. In ShockScript, they are expressed as `e&={statements}` (note the ampersand **\&**) as a shorthand to `e={function(event){statements}}`.

> **Note**: Although not demanded as such, as opposed to React.js + DOM, event handlers are conventionally expressed without a `on` prefix, such as `click&={trace("clicked!")}` rather than React.js `onClick={e=>{console.log("clicked!")}}`. Event parameters are conventionally given the `@eventparam` tag in the ShockDoc comments. Classes continue using the `Event` meta-data, though without needing the `@eventType` tag.

## Effects

The `Spot::useEffect` hook may be used to detect state, parameter or derived changes as well as the component mount and unmount phases.

```
Spot::useEffect(function() {
    // cleanup
    return function() {
        //
    };
}, [dep1, ...depN]);

Spot::useEffect(function() {
    //
}, "*");
```

When the dependencies list is empty (`[]`), the hook is equivalent to a component mount/unmount event, with the unmount phase handled through the returned function.

```
Spot::useEffect(function() {
    // did mount
    return function() {
        // unmount
    };
}, []);
```