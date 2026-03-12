# Whack DS

Whack DS takes inspiration from both ReactJS and Adobe MXML for GUI dev.

## Memoization

Whack DS memoizes components.

- It invokes `generic::clone` to clone an object and keep it as a previous state.
- It invokes `equals` to compare two objects.

## Style sheets

Linking style sheets is easy:

```sx
<div>
    <fx:Style>
    <![CDATA[
        root {
            background: red
        }
    ]]>
    </fx:Style>
</div>
```

[See: Style sheets](./whack_ds/mxml_like.md#style-sheets)

## A basic component

Here is a little code snippet:

```sx
package zero {
    import whack.ds.UIComponent;

    public class Box extends UIComponent {
        var props : Props

        public function Box(props : Props) {
            super()
            this.props = props
            final = (
                <></>
            )
        }

        public type Props = tap {}
    }
}

import z = zero.*;

var xn:whack.ds.Node;

xn = <z:Box/>
```

## Monotonic counter

```sx
package {
    import whack.ds.UIComponent;
    import whack.util.*

    public class Clock extends UIComponent {
        var props : Props ;
        [State]
        var mSecs : bigint? = null;

        public function Clock(props : Props) {
            super()
            this.props = props

            whack.ds.useEffect(function() {
                const itrv = setInterval(function() {
                    secs++
                }, 1_000)
                return function() {
                    clearInterval(itrv)
                }
            })
            final = (
                <span>{secs}</span>
            )
        }

        public type Props = tap { start : bigint }

        private function get secs() : bigint ( mSecs ?? props.start )
        private function set secs(val) { mSecs = val }
    }
}
```

## Immutability

Ensure you follow immutability principles with States, Contexts and Props.

> **Note**: ReactJS, Adobe Flex and many other technologies also present the same limitation. Since Whack DS uses always imposes references for States, Contexts and Props, not following these principles may lead to internal bugs.

## Deriveds

```sx
[State]     var x : decimal = 0;
[Bindable]  var y : decimal = 0;

private function get z() : decimal (x + y)
```

## Understanding Bindables

A Bindable may be read as "a variable associated with the surrounding component that does not trigger re-render on write", and is frequently used for purposes like cache and obtaining DOM elements for manipulation, as opposed to States.

Under the hood, a Bindable variable is represented as a `BindableReference.<T>` instance, which must not be mistaken as the `Bindable.<T>` type that is typically:

```sx
public type Bindable.<T> = (
    BindableReference.<T>,
    function(T):void,
);
```

The `function` case allows tag attributes such as `bind` to specify a receiver that executes code, as in:

```sx
package zero.components {
    import whack.ds.UIComponent;
    import org.w3.web.Div;

    public class Binding extends UIComponent {
        [Bindable]
        var element : Div? = null;

        public function Binding(props : Props) {
            super();
            final = (
                <div
                    bind={function($element) {
                        element = $element
                        if (props.bind is Function) {
                            Function(props.bind)($element)
                        } else if (props.bind) {
                            whack.ds.BindableReference.<Div>(props.bind).value = $element
                        }
                    }}>
                    <!-- Element content -->
                </div>
            );
        }

        public type Props = tap {
            bind? : whack.ds.Bindable.<?Div>,
        };
    }
}
```

A `Bindable` annotatated variable may be assigned, in addition to its expected value type, a compatible `whack.ds.BindableReference.<T>`.

## Understading Contexts

A Context annotatated variable may be read as "a variable associated to the surrounding component that uses a context provided by a parent component, which triggers a re-render when the parent assigns a different value for that context".

Context annotatated variables are represented as `ContextReference.<T>` instances.  

Those may be not be reused from other components.

## Understanding States

A State annotatated variable may be read as "a variable associated to the surrounding component that triggers a re-render when it is assigned a different value".

State annotatated variables are represented as `State.<T>` instances.

A `State` annotatated variable may be assigned, in addition to its expected value type, a compatible `whack.ds.State.<T>`.

## Aliases

A component may be an alias by using the Alias meta-data, which specifies a ShockScript qualified identifier which is treated like a tag name.

```sx
package spark.components {
    import whack.ds.UIComponent;

    [Alias("w::VGroup")]
    public class VGroup extends UIComponent {
    }
}
```

The Alias meta-data is verified in such a way only for classes that extend whack.ds.UIComponent.

## EyeExp

Whack's approach to logotypes and icons is called the EyeExp feature, which uses dynamic icon names rather than `enum`, as well as namespace prefixes to prevent collision between libraries.

A component library typically provides an Application component so you do not have to specify its EyeExp namespace prefix explicitly.

```sx
package {
    import whack.ds.UIComponent;
    import s = spark.components.*;

    public class Main extends UIComponent {
        public function Main() {
            super()
            final = (
                <s:Application>
                    <w:EyeExp name="camera" size={37}/>
                </s:Application>
            )
        }
    }
}
```

Monochrome icons are filled with the current CSS `color`.

## Tips

- Remember that user-defined hooks do not take *props* as actual components do. If an user-defined hook returns any result, it should typically be either a `State` or `BindableReference` which can be assigned to a State or Bindable annotatated variable.