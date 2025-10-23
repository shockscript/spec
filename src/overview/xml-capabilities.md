# XML capabilities

The ShockScript language includes XML capabilities.

## XML expressions

XML expressions by default are used for creating implementation-defined objects; however, when the inference type is `XML` or `XMLList`, XML expressions evaluate to one of these types.

```
package com.business.components {
    //
    public function AppBar():whack.ds.Node {
        return (
            <w:HGroup>
                <w:Button click&={trace("clicked!")}>button 1</w:Button>
            </w:HGroup>
        );
    }
}

package com.business.editor {
    //
    public function data(a:String):XML {
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
xnode.(*.@name == "Diantha")
```

## Descendants

`XML` and `XMLList` implement the descendants operator.

```
xnode..tag
```
