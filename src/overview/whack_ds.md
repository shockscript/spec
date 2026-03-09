# Whack DS

Whack DS is a feature of the Whack engine used for extending the closed set of Whack element classes with reactive UI components. It is functionally similar to ReactJS, but its syntax is more similar to Adobe MXML.

## Memoization

Whack DS automatically memoizes components, allowing for user customizable prop/state equality comparison through overriding the `[object Object].equals(obj)` method. Memoization basically serves the purpose of avoiding re-rendering a component when its props do not change.

Just like with ReactJS, memoizing components has drawbacks such as possibly volatile code regions (such as when internationalizing a product with locale-specific translation strings). In such cases, relying on a Whack DS context will re-render the component when the context changes regardless of whether props did or not change.

Whack DS skips re-rendering component if the parent re-renders and the props are equals to the previous render; the Whack DS component's own states updating with a different value will always re-render it.

Whack DS implementation stores previous state or previous properties by performing a `generic::clone()`, so you do not have to worry about later reuse and mutation. For using custom classes inside states or properties — like when a tuple, record, `Array` or `Map` is not enough — ensure you implement a `clone` method that returns an object of the same kind, otherwise you get an error for safety.

- Custom classes do not need a `clone` method if they are, say, purely data that do not rely on the constructor.
- Custom classes representing "unique references" should implement a `clone` method that returns the this receiver as is.

## Style sheets

Whack DS supports style sheets out of the box. Here is a simple example:

```sx
<w:VGroup>
    <fx:Style>
    <![CDATA[
        root {
            background: red
        }
    ]]>
    </fx:Style>
</w:VGroup>
```

[See: Style sheets](./whack_ds/mxml_like.md#style-sheets)

## Very basic components

Here is a little code snippet:

```sx
package metro.components {
    public class TabBar extends whack.ds.UIComponent {
        var props : Props

        public function TabBar(props : Props) {
            super()
            this.props = props
            final = (
                <></>
            )
        }

        public type Props = track {}
    }
}
```

Notet that instances of a component class are throwaway. It's not recommended to explicitly construct such classes or share instances with other code locations.

Here's a slightly bigger code snippet for a linear second accumulator:

```sx
package {
    import whack.util.*

    public class Clock extends whack.ds.UIComponent {
        var props : Props ;
        [State]
        var mSecs : ?bigint ;

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

        public type Props = track { start : bigint }

        private function get secs() : bigint ( mSecs ?? props.start )
        private function set secs(val) { mSecs = val }
    }
}
```

Even though the constructor is frequently re-evaluated, objects originating the initial rendering phase are reused for the instance fields.

## Callback caching

Whack DS caches callbacks, since they are naturally ever changing `Function` objects regardless of whether they are lambdas or fixtures ─ for example, since they capture locals, `this` or ShockScript lexical contexts, they tend to return different `Function` objects ─ and this is crucial for memoization.

- Whack DS doesn't attempt to cache a callback if either:
  - It belongs to another code block (like a loop, an `if`, a `switch` or a `switch type`) and not the component's constructor main block.
  - If a `return` statement has a chance of evaluating before that callback.

The compiler generates a warning at a tag's attribute if its callback does not meet this criteria.

## Auto dependency tracking

- Whack DS presents extra overhead for State/Context/Prop accessors, so that, say, the surrounding effect or callback is said to be dependent on an used State/Context/Prop.
  - Subsequent renders may still accumulate more dependencies, like conditional ones.
- Whack DS E4X attributes assigned to functions or methods from the same component are cached based on dependency tracking; same for E4X event handlers **&amp;=**.

### Props tracking

Whack DS automatically tracks not only states and context dependencies in an effect or callback, but also props.

What Whack DS does internally:

- The Props object is reused across renders. For every render, its internal hash map is cleared and then overwritten.
- `track` prefixed records, which are used for representing props, desugar into classes which use a hash map internally for storing only props that are specified. Each prop gets its own getter, which detects surrounding effect or callback and returns the current value of the prop at the internal hash map.
  - Track prop name for comparison + previous value for the surrounding effect/callback if any

## Deriveds

Variables derived from States, Contexts, Bindables or Props are often expressed as virtual accessors, as in:

```sx
private function get combination() : decimal {
    use decimal ctx
    return x + y
}
```

Using methods is also an option.

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
    import org.w3.web.Div;

    public class Binding extends whack.ds.UIComponent {
        [Bindable]
        var element : ?Div ;

        public function Binding(props : Props) {
            super();
            final = (
                <div
                    bind={function(element_) {
                        element = element_
                        if (props.bind is Function) {
                            Function(props.bind)(element_)
                        } else if (props.bind) {
                            whack.ds.BindableReference.<Div>(props.bind).value = element_
                        }
                    }}>
                    <!-- Element content -->
                </div>
            );
        }

        public type Props = track {
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

## Component validation

The following apply when using E4X literals to construct `whack.ds.Node`.

- A tag name must resolve to either
  - A component class that extends `whack.ds.UIComponent`
  - A context provider

Class definitions that extend `whack.ds.UIComponent` are validated in a flat way to avoid programmer bugs:

- Every instance variable is either
  - Of a `track` record type (at most one variable of this kind, which is usually the props object)
  - A `Bindable` annotatated variable
  - A `Context` annotatated variable
  - A `State` annotatated variable
- The class either omits the constructor, or defines a constructor whose signature is either `function():void` or `function(Props):void`, where `Props` must be a `track` prefixed record type.

## EyeExp

Whack's approach to logotypes and icons is called the EyeExp feature, which uses dynamic icon names rather than `enum`, as well as namespace prefixes to prevent collision between libraries.

A component library typically provides an Application component so you do not have to specify its EyeExp namespace prefix explicitly.

```sx
package {
    import mx = metro.components.*;

    public class Main extends whack.ds.UIComponent {
        public function Main() {
            super()
            final = (
                <mx:Application>
                    <w:EyeExp name="camera" size={37}/>
                </mx:Application>
            )
        }
    }
}
```

Monochrome icons are filled with the current CSS `color`.

## Recommendations

- *Props*
  - Don't destructure the props object in large method bodies.
  - Don't mutate props (although their fields are read-only, unfortunately they are not transitively read-only).
    - Say you want to reuse a `style` prop from the component inside a `final` tag but also set specific fields: You better create a new `style` object spreading that prop, then pass it to that tag.
- A best order for a component's constructor may be 1. `super` statement followed by 2. any initial values for instance variables (e.g. Props, States and/or Bindables) followed by 3. effects followed by 4. any custom hooks followed by 5. the `final` construction.
- If, say, a loop or `switch` creating Whack DS nodes contains its own event handlers, it might be better to define a separate component (perhaps nested) for that purpose, thus getting advantage of callback caching.

## Tips

- Remember that user-defined hooks do not take *props* as actual components do. If an user-defined hook returns any result, it should typically be either a `State` or `BindableReference` which can be assigned to a State or Bindable annotatated variable.