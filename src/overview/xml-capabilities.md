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

### Jet Engine behavior

- Native tags belong to the implicit `j` namespace, such as `j:Button`. The `j` namespace is the `http://jet.net` URI, which, if overriden, may be aliased using a `namespace` definition, like `namespace jet = "http://jet.net";`
- `data-` attributes applied to native tags, such as `j:Button`, contribute `data-` attributes to the underlying HTML element.
- `s:` attributes are used for linking a style sheet (`s:link={source}` where `source:String`) and argumenting the stylesheet (like `s:color={"red"}`, which is referred by the style sheet as `param(color)`), in native tags.
- `<?html={exp}?>` is used for interpolating HTML.

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
    <?html={someHTML}?>
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