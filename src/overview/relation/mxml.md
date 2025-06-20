# MXML

The MXML language, as part of the Apache Flex framework, is used for describing UI components in an intuitive way. ShockScript uses XML expressions similiar to what is known as ECMAScript for XML (E4X) which implementations may use similiarly to MXML.

Note however that the ShockScript approach is more related to the React.js framework which is often combined with the JSX language extension for TypeScript.

The following demonstrates a basic UI component in Jet Engine:

```
package com.business.components {
    import j = jet.**;

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

In MXML, event handlers were expressed as `e="statementList"`. In ShockScript, they are expressed as `e&={statementList}` (note the ampersand **\&**) as a shorthand to `e={function(event){statementList}}`.

> **Note**: Although not demanded as such, as opposed to React.js + DOM, event handlers are conventionally expressed without a `on` prefix, such as `click&={trace("clicked!")}` rather than React.js `onClick={console.log("clicked!")}`. Event parameters are conventionally given the `@event` tag in the documentation comments. Classes continue using the `Event` meta-data, though without needing the `@eventType` tag.