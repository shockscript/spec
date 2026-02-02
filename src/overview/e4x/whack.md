# E4X application to Whack

This section describes E4X features specifically when applied as Whack DS nodes.

## Native tags

Native tags belong to the implicit `w` namespace, such as `<w:Button>`.

The `w` prefix may be shadowed by user definitions; in that case, to use native tags the user needs to define a namespace like follows:

```es
namespace whack = "http://www.sweaxizone.com/2015/whack";
```

## DOM “data” attributes

`data` attributes (like `data-x`) set over native tags, such as `<w:Button>`, contribute plain data attributes to the underlying DOM element.

Using a Whack DS bindable, the attribute would be accessed as `bindable!.@["data-name"]`.

## “key” attribute

The `key` attribute is reserved for uniquely identifying interpolated collection items.

## Linking cascading style sheets

`<w:Style>` tags are used for linking style sheets to the parent tag and passing arguments to the style sheet (which are referred by the style sheet as `param(color)`).

```
package com.jhunter.spark.components {
    public function Case() : whack.ds.Node {
        return (
            <w:Button>
                <w:Style color="yellow"><![CDATA[
                    :host { color: param(color) }
                ]]></w:Style>
                click me
            </w:Button>
        );
    }
}
```

If the style sheet is too large, it may be moved out of the ShockScript file; for instance:

```plain
// ===== Custom.sx =====


package com.jhunter.spark.components {
    public function Case() : whack.ds.Node {
        return (
            <w:Button>
                <w:Style source="Custom.css"
                         color="yellow" />
                click me
            </w:Button>
        );
    }
}



// ===== Custom.css =====


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

An arbitrary map of parameters (`Map.<string, string>`) may be passed as well:

```
<w:Style {map}>
    ...
</w:Style>
```

#### Linking style sheets in custom components

For a component to support `<w:Style>` tags, it simply needs to support a `stylesheet : [whack.ds.StyleSheet]` parameter.

```
package com.jhunter.spark.components {
    public function Case(props: {
        stylesheet? : [ whack.ds.StyleSheet ],
    }) : whack.ds.Node {
        //

        return (
            <w:Button>
                <w:Style extend={props.stylesheet}/>
                click me
            </w:Button>
        );
    }
}
```

The `extend` attribute may be used to include externally loaded styles as well.

## Specifying inline styles

Use `s:n={v}` attributes as a shortcut to `style={{ ..., n: v }}`.

```
<w:Button s:background="orange">button1</w:Button>
```