# E4X

E4X (ECMAScript for XML) comprises the ShockScript language features specifically designed for eXtensible Markup Language.

## XML literals

By default XML literals evaluate to one of the `XML` and `XMLList` types; however, depending on the inference type, XML literals may be used for constructing implementation-defined objects with different semantics.

```
// ===== Presentation.sx =====


package com.zero.relic {
    public function Presentation():whack.ds.Node {
        return (
            <w:VGroup>
                <w:Button click&={trace("clicked!")}>button 1</w:Button>
            </w:VGroup>
        );
    }
}



// ===== fn.sx =====


package com.zero.information.generator {
    public function retrieve(a:string):XML {
        return (
            <information>{a}</information>
        );
    }
}
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
<w:VGroup {rest}>
    {undefined}
    {null}
    {node}
    {node_list}
    {plain_text}
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
