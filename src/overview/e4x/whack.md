# E4X application to Whack

This section describes E4X features specifically when applied as Whack DS nodes.

## Native tags

Native tags belong to the implicit `w` namespace, such as `<w:VGroup>`.

The `w` prefix may be shadowed by user definitions; in such a case, to use native tags the user needs to define a namespace like follows:

```sx
namespace whack = "http://www.sweaxizone.com/2015/whack";
```

Or perhaps just:

```sx
namespace whack = SX::w;
```

## Tag meta-data

Meta-data (like `meta:x`, or, in CSS selectors, `[meta|x]`) may be set mainly over native DOM tags, serving as meta-data. For a component to support these, it is required to define a `metadata? : Map.<string, string>` prop.

Using a Whack DS bindable, the attribute would be accessed as `bindable!.@x`.

For Whack Red, meta-data under the hood map to `data-` prefixed attributes, which can be seen when inspecting the elements in the browser console.

## “key” attribute

The `key` attribute is reserved for uniquely identifying interpolated collection items.

## Linking cascading style sheets

`<w:Style>` tags are used for linking style sheets to the parent tag and passing non-tracked properties to the style sheet (which are referred by the style sheet as `Property(color)`).

```sx
package zero.components {
    public class Ark extends whack.ds.UIComponent {
        public function Ark() {
            super();
            final = (
                <div>
                    <w:Style color="yellow">
                    <![CDATA[
                        :host { color: Property(color) }
                    ]]>
                    </w:Style>
                    click me
                </div>
            );
        }
    }
}
```

If the style sheet is too large, it may be moved out of the ShockScript file; for instance:

```plain
// ===== Ark.sx =====


package zero.components {
    public class Ark extends whack.ds.UIComponent {
        public function Ark() {
            super();
            final = (
                <div>
                    <w:Style source="Ark.css"
                             color="yellow" />
                    click me
                </div>
            );
        }
    }
}



// ===== Ark.css =====


:host {
    color: Property(color);
}
```

Style blocks can be conditional, as in:

```sx
<w:Style if={condition}>
    ...
</w:Style>
```

An arbitrary map of properties (`Map.<string, *>`) may be passed as well:

```sx
<w:Style {map}>
    ...
</w:Style>
```

#### Objects as style sheet properties

A style sheet property passed as an object will be treated as immutable. If it is set to, say, a surrounding component's prop, context, state or derived, it is said to be reactive to that during the final `whack.ds.Node` creation.

The `Property(...)` property supports very simple operators without whitespace, like dot (`.x`, `.q::x` (relies on the `@namespace` CSS declarations)) and brackets (`[0]`, `["x"]`, `['x']`).

```css
.skinMe {
    color: Property(theme.colors.foreground);
}

@namespace Ark "http://www.zero.com/ark";

.skinMe {
    background: Property(character.Ark::yay);
}
```

#### Linking style sheets in custom components

For a component to support `<w:Style>` tags, it simply needs to support a `stylesheet? : [whack.ds.StyleSheet]` prop.

```sx
package zero.components {
    public class Ark extends whack.ds.UIComponent {
        public function Ark(props : Props) {
            super();
            final = (
                <div>
                    <w:Style extend={props.stylesheet}/>
                    click me
                </div>
            );
        }

        public type Props = track {
            stylesheet? : [ whack.ds.StyleSheet ],
        };
    }
}
```

The `extend` attribute may be used to include externally loaded styles as well.

## Specifying inline styles

Use `s:n={v}` attributes as a shortcut to `style={{ ..., n: v }}`.

```sx
<button s:background="orange">Button</button>
```
