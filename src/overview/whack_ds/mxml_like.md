# MXML like constructs

This section describes E4X syntactic constructs applied as Whack DS nodes.

## Intrinsic elements

Intrinsic elements belong to the implicit `w` namespace, such as `<w:VGroup>`. Compiler special elements belong to the implicit `fx` namespace for an Adobe MXML feel, such as `<fx:Style>`.

These prefixes may be shadowed by user definitions; in such cases, to use these, the user may define them with any lexical name as follows:

```sx
namespace w = "http://www.sweaxizone.com/2015/whack";
namespace fx = "http://www.sweaxizone.com/2015/whack/fx";
```

The user may do this short however:

```sx
namespace w = SX::w;
namespace fx = SX::fx;
```

## Tag meta-data

Meta-data (like `meta:x`, or, in CSS selectors, `[meta|x]`) may be set mainly over native DOM tags, serving as meta-data. For a component to support these, it is required to define a `metadata? : Map.<string, string>` prop.

Using a Whack DS bindable, the attribute would be accessed as `bindable!.@x`.

For Whack Red, meta-data under the hood map to `data-` prefixed attributes, which can be seen when inspecting the elements in the browser console.

## “key” attribute

The `key` attribute is reserved for uniquely identifying interpolated collection items.

## Style sheets

**&lt;fx:Style&gt;** tags are used for linking style sheets to the parent tag and passing properties to the style sheet (which are referred by the style sheet as `Property(color)`).

```sx
package zero.components {
    public class Ark extends whack.ds.UIComponent {
        public function Ark() {
            super();
            final = (
                <div>
                    <fx:Style color="yellow">
                    <![CDATA[
                        root {
                            color: Property(color)
                        }
                    ]]>
                    </fx:Style>
                    click me
                </div>
            );
        }
    }
}
```

If the style sheet is too large, it may be moved out of the ShockScript file; for instance:

**Ark.sx**

```sx
package zero.components {
    public class Ark extends whack.ds.UIComponent {
        public function Ark() {
            super();
            final = (
                <div>
                    <fx:Style source="Ark.css"
                              color="yellow" />
                    click me
                </div>
            );
        }
    }
}
```

**Ark.css**

```css
root {
    color: Property(color);
}
```

Style blocks can be conditional, as in:

```sx
<fx:Style if={condition}>
    ...
</fx:Style>
```

An arbitrary map of properties (`Map.<string, *>`) may be passed as well:

```sx
<fx:Style {map}>
    ...
</fx:Style>
```

#### Objects as style sheet properties

Takeaway: Whatever you pass to a style sheet is reactive together with the component's `final` assignment (States, Props and Contexts). A style sheet property passed as an object isn't necessarily reactive if you're explicitly constructing a whack.ds.StyleSheet instance yourself and have not passed it to a final `whack.ds.Node` creation directly for a component's evaluation.

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

For a component to support `<fx:Style>` tags, it simply needs to support a `stylesheet? : [whack.ds.StyleSheet]` prop.

```sx
package zero.components {
    public class Ark extends whack.ds.UIComponent {
        public function Ark(props : Props) {
            super();
            final = (
                <div>
                    <fx:Style extend={props.stylesheet}/>
                    click me
                </div>
            );
        }

        public type Props = tap {
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

## Prop tags

Child tags may be used as parent-attached Props as long as they always use a prefix and it matches the parent's prefix.

If not an interpolation, the child tag of a Prop tag is interpreted similarly to an object literal.

```sx
package {
    import whack.ds.UIComponent;
    import s = spark.components.*;

    public class HelloWorld extends UIComponent {
        public function HelloWorld() {
            super();

            final = (
                <s:Group>
                    <s:layout>
                        <s:VerticalLayout gap={10}/>
                    </s:layout>
                </s:Group>
            );
        }
    }
}
```