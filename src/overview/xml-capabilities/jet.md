# Jet Engine: XML features

This section describes XML features specifically when applied as Jet Engine's Fuse nodes.

## Native tags

Native tags belong to the implicit `j` namespace, such as `j:Button`. The `j` namespace is not overridable.

## DOM “data” attributes

`data-` attributes applied to native tags, such as `j:Button`, contribute plain data attributes to the underlying DOM element.

Using a Fuse store, the attribute would be accessed as `store.current!.@["data-name"]`.

## “key” attribute

The `key` attribute is reserved for uniquely identifying interpolated collection items.

## Linking cascading style sheets

`<j:Style>` tags are used for linking style sheets to the parent tag and passing arguments to the style sheet (which are referred by the style sheet as `param(color)`).

```
package com.fun.components {
    //
    public function CustomComponent() {
        return (
            <j:Button>
                <j:Style color="yellow">
                    <![CDATA[
                        :host { color: param(color) }
                    ]]>
                </j:Style>
                click me
            </j:Button>
        );
    }
}
```

If the style sheet is too large, it may be moved out of the ShockScript file using `Embed()`; for instance:

```plain
// CustomComponent.sx
package com.fun.components {
    //
    public function CustomComponent() {
        return (
            <j:Button>
                <j:Style
                    source={Embed("CustomComponent.css", static="text/plain")}
                    color="yellow"/>
                Click me
            </j:Button>
        );
    }
}
/* CustomComponent.css */
:host {
    color: param(color);
}
```

#### Linking style sheets in custom components

For a component to support `<j:Style>` tags, it simply needs to support a `stylesheet : [Fuse::StyleSheet]` parameter.

```
package com.fun.components {
    //
    public function CustomComponent({
        stylesheet
    }: {
        stylesheet? : [Fuse::StyleSheet],
    }) {
        //

        return (
            <j:Button>
                <j:Style source={stylesheet}/>
                Click me
            </j:Button>
        );
    }
}
```

## Specifying inline styles

Use `style:n={v}` attributes as a shortcut to `style={{ ..., n: v }}`.

```
<j:Button style:background="orange">button1</j:Button>
```

Inline style values are converted to `String` automatically.