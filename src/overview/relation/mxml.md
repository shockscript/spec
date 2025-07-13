# MXML

The MXML language, as part of the Apache Flex framework, was used for describing UI components in an intuitive way. ShockScript uses XML expressions semantically similiar to the React.js + JSX technologies, but designed to feel close to MXML in readability.

The following demonstrates a basic UI component implemented in Jet + Fuse:

```
package com.business.components {
    /** App bar */
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

## Use effect

The `use effect` statement may be used to detect state and parameter changes as well as the component mount and unmount phases.

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

When the dependencies list is empty (`[]`), the `use effect` statement is equivalent to a component mount/unmount event, with the unmount phase handled through an inner `cleanup {}` statement.

```
use effect [] {
    // did mount

    cleanup {
        // unmount
    }
}
```