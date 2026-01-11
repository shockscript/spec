# E4X

E4X (ECMAScript for XML) comprises the ShockScript language features specifically designed for eXtensible Markup Language.

## XML literals

XML literals by default are used for creating implementation-defined objects; however, when the inference type is `XML` or `XMLList`, XML literals evaluate to one of these types.

```
package com.business.components {
    //
    function AppBar() : whack.ds.Node {
        return (
            <w:HGroup>
                <w:Button click&={trace("clicked!")}>button 1</w:Button>
            </w:HGroup>
        );
    }
}

package com.business.editor {
    //
    function data(a:string) : XML {
        return (
            <tag>{a}</tag>
        );
    }
}

const xn = XML(<tag/>);
```

### Attributes

`<t a/>` is equivalent to `<t a={true}/>`. Accessing `XML` attributes can be directly done by the `@` operator, as in `xnode.@x`.

### Event handlers

Inline event handlers may be expressed as `eventName&={statementList}` as a shortcut to `eventName={function(event){statementList}}`, as in:

```
<w:Button click&={trace("clicked!")}>Click me</w:Button>
```

If the event has no parameters, then the attribute above is equivalent to `eventName={function(){statementList}}`.

### Interpolation

```
<w:VGroup {params}>
    {undefined}
    {null}
    {node}
    {nodeList}
    {plainText}
    {number}
</w:VGroup>
```

## Filtering

`XML` and `XMLList` implement the filter operator.

```
people.(*.@name == "John")
```

## Descendants

`XML` and `XMLList` implement the descendants operator.

```
xnode..tag
```
