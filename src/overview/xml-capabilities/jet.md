# Jet XML capabilities

This section describes XML features specifically when applied as Jet+Spot nodes.

## Native tags

Native tags belong to the implicit `j` namespace, such as `j:Button`. The `j` namespace is not overridable.

## DOM “data” attributes

`data` attributes (like `data-x`) set over native tags, such as `j:Button`, contribute plain data attributes to the underlying DOM element.

Using a Spot reference, the attribute would be accessed as `reference!.@["data-name"]`.

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

If the style sheet is too large, it may be moved out of the ShockScript file; for instance:

```plain
// CustomComponent.sx
package com.fun.components {
    //
    public function CustomComponent() {
        return (
            <j:Button>
                <j:Style
                    source="CustomComponent.css"
                    color="yellow"/>
                click me
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

For a component to support `<j:Style>` tags, it simply needs to support a `stylesheet : [Spot::StyleSheet]` parameter.

```
package com.fun.components {
    //
    public function CustomComponent({
        stylesheet
    }: {
        stylesheet? : [Spot::StyleSheet],
    }) {
        //

        return (
            <j:Button>
                <j:Style extend={stylesheet}/>

                click me
            </j:Button>
        );
    }
}
```

## Specifying inline styles

Use `s:n={v}` attributes as a shortcut to `style={{ ..., n: v }}`.

```
<j:Button s:background="orange">button1</j:Button>
```

Inline style values are converted to `String` automatically.