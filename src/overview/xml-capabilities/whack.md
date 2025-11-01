# Whack

This section describes XML features specifically when applied as WhackDS nodes.

## Native tags

Native tags belong to the implicit `w` namespace, such as `w:Button`. The `w` namespace is not overridable.

## DOM “data” attributes

`data` attributes (like `data-x`) set over native tags, such as `w:Button`, contribute plain data attributes to the underlying DOM element.

Using a WhackDS reference, the attribute would be accessed as `reference!.@["data-name"]`.

## “key” attribute

The `key` attribute is reserved for uniquely identifying interpolated collection items.

## Linking cascading style sheets

`<w:Style>` tags are used for linking style sheets to the parent tag and passing arguments to the style sheet (which are referred by the style sheet as `param(color)`).

```
package com.fun.components {
    //
    public function CustomComponent() {
        return (
            <w:Button>
                <w:Style color="yellow">
                    <![CDATA[
                        :host { color: param(color) }
                    ]]>
                </w:Style>

                click me
            </w:Button>
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
            <w:Button>
                <w:Style
                    source="CustomComponent.css"
                    color="yellow"/>
                click me
            </w:Button>
        );
    }
}
/* CustomComponent.css */
:host {
    color: param(color);
}
```

Style blocks can be conditional, as in:

```
<w:Style if={condition}>
    ...
</w:Style>
```

#### Linking style sheets in custom components

For a component to support `<w:Style>` tags, it simply needs to support a `stylesheet : [whack.ds.StyleSheet]` parameter.

```
package com.fun.components {
    //
    public function CustomComponent({
        stylesheet
    }: {
        stylesheet? : [whack.ds.StyleSheet],
    }) {
        //

        return (
            <w:Button>
                <w:Style extend={stylesheet}/>

                click me
            </w:Button>
        );
    }
}
```

## Specifying inline styles

Use `s:n={v}` attributes as a shortcut to `style={{ ..., n: v }}`.

```
<w:Button s:background="orange">button1</w:Button>
```
