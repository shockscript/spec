# XML capabilities

The ShockScript language includes XML capabilities.

## XML expressions

XML expressions by default are used for creating implementation-defined objects; however, when the inference type is `XML` or `XMLList`, XML expressions evaluate to one of these types.

```
package com.business.editor {
    //
    public function SomeBar() {
        return (
            <j:VGroup gap={5}>
                <!-- content -->
                <j:Label>
                    Hi, <b>there</b>.
                </j:Label>
            </j:VGroup>
        );
    }

    //
    public function data(a:String):XML {
        return (
            <tag>{a}</tag>
        );
    }
}

const xn = XML(<tag/>);
```

> **Note**: The official ShockScript Compiler supports the compiler option `xmleval` which decides the APIs used for evaluating default XML expressions in a project, however only a limited number of technologies are supported.

### Attributes

`<t a/>` is equivalent to `<t a={true}/>`. Accessing `XML` attributes can be directly done by the `@` operator, as in `xnode.@x`.

### Event handlers

Inline event handlers may be expressed as `eventName&={statementList}` as a shortcut to `eventName={function(event){statementList}}`, as in:

```
<j:Button click&={trace("clicked!")}>Click me</j:Button>
```

If the event has no parameters, then the attribute above is equivalent to `eventName={function(){statementList}}`.

### Interpolation

```
<j:VGroup {params}>
    {undefined}
    {null}
    {node}
    {nodeList}
    {plainText}
</j:VGroup>
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