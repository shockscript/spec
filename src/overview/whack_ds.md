# Whack DS

Whack DS is a feature of the Whack engine used for extending the closed set of Whack's UI component classes with reactive components. It is functionally similar to React.js, but its syntax is more similiar to Adobe MXML.

## Memoization

Whack DS automatically memoizes components, allowing for user customizable prop/state equality comparison through overriding the `[object Object].equals(obj)` method. Memoization basically serves the purpose of avoiding re-rendering a component when its props do not change.

Just like with React.js, memoizing components has drawbacks such as possibly volatile code regions (such as when internationalizing a product with locale-specific translation strings). In such cases, relying on a Whack DS context will re-render the component when the context changes regardless of whether props did or not change.

Whack DS skips re-rendering component if the parent re-renders and the props are equals to the previous render; the Whack DS component's own states updating with a different value will always re-render it.

Whack DS implementation stores previous state or previous properties by performing a `generic::clone()`, so you do not have to worry about later reuse and mutation. For using custom classes inside states or properties — like when a tuple, record, `Array` or `Map` is not enough — ensure you implement a `clone()` method that returns an object of the same kind, otherwise you get an error for safety.

## Style blocks

Whack DS supports style sheets out of the box. Here is a simple example:

```sx
<w:VGroup>
    <w:Style>
    <![CDATA[
        :host {
            background: red;
        }
    ]]>
    </w:Style>
</w:VGroup>
```

## How a component is defined

There are different ways to declare a component. Here are some examples:

```sx
// ===== Main.sx =====


package com.pso2.relic {
    public function Main():whack.ds.Node {
        //
    }
}



// ===== TabBar.sx =====


package com.sweaxizone.metro.components {
    public class TabBar {
        // Constructor (optional)
        public function TabBar(props:Props) {}

        public function eval(props:Props):whack.ds.Node {
            //
        }

        public type Props = track {}
    }
}
```

It's recommended to avoid locals other than `State`, `Context` or `Bindable` annotatated locals inside a component, as that avoids accidental accesses of stale values.

### Class-based components

Instances of class-based components are throwaway. It's not recommended to explicitly construct such classes or share instances with other code locations.

Such components may define `State`, `Context` and `Bindable` instance fields and assign their initial values in the constructor:

```sx
package {
    public class Counter {
        [State]
        let n:bigint

        public function Counter(props:Props) {
            n = props.start
        }

        public function eval(props:Props):whack.ds.Node {
            //
        }

        public type Props = track { start : bigint }
    }
}
```

Even though the constructor is frequently re-evaluated, the initial value of `State` or `Bindable` fields only runs in the initial rendering phase.

> **Curiosity**: Class-based components provide not only the advantage of better encapsulating helpers and associated types, but if all fields are compiler special ones as recommended (`State`, `Bindable` or `Context`), it also prevents bugs with stale locals.

## Callback caching

Whack DS considers caching callbacks, since they are naturally ever changing `Function` objects regardless of whether they are lambdas or fixtures ─ for example, since they capture locals, `this` or contexts, they tend to return different `Function` objects.

- Whack DS doesn't attempt to cache a callback if:
  - It belongs to another code block (like a loop, an `if` or a `switch`) or activation or if there is no surrounding component at all.
  - If a `return` statement has a chance of evaluating before that callback,

Whack DS does this as it is important for memoization.

## Auto dependency tracking

- Whack DS presents extra overhead for state/context accessors, so that, say, the surrounding effect or callback is said to be dependent on an used state/context.
  - Subsequent renders may still accumulate more dependencies, like conditional ones.
- Whack DS E4X attributes assigned to functions or methods from the same component are cached based on dependency tracking; same for E4X event handlers **&amp;=**.

### Props tracking

Whack DS automatically tracks not only states and context dependencies in an effect or callback, but also props.

What Whack DS does internally:

- The Props object is reused across renders. For every render, its internal hash map is cleared and then overwritten.
- `track` prefixed records, which are used for representing props, desugar into classes which use a hash map internally for storing only props that are specified. Each prop gets its own getter, which detects surrounding effect or callback and returns the current value of the prop at the internal hash map.
  - Track prop name for comparison + previous value for the surrounding effect/callback if any

## Component validation

The following apply when using E4X literals to construct `whack.ds.Node`.

- A function component must be of a `function():whack.ds.Node` or `function(Props):whack.ds.Node` signature, where `Props` must be exactly a `track` prefixed record type.
- A class-based component must:
  - Define an `eval` method of a `function():whack.ds.Node` or `function(Props):whack.ds.Node` signature, where `Props` must be exactly a `track` prefixed record type.
  - Either omit the constructor, or define a constructor that is compatible with the `eval` method, possibly omitting the `Props` parameter.

## EyeExp

Whack's approach to logotypes and icons is called the EyeExp feature, which uses dynamic icon names rather than `enum`, as well as namespace prefixes to prevent collision between libraries.

```sx
// ===== HelloWorld.sx =====


package {
    import mx = com.sweaxizone.metro.components.*;

    public function HelloWorld():whack.ds.Node {
        return (
            <mx:Wrap>
                <w:EyeExp name="camera" size={37}/>

                <!-- usage as a css background -->

                <w:Group s:background="eyexp(camera) noRepeat center / contain"/>
            </mx:Wrap>
        );
    }
}
```

Monochrome icons are filled with the current CSS `color`.

## Recommendations

- *Props*
  - Don't destructure props.
  - If you need to store props in a class-based component, you **MUST** store the entire object and not a specific field.
- *Derived values*
  - For deriveds from states, props and/or contexts, use instance methods/virtual accessors in class-based components.
  - Don't use props or their deriveds from functions that are not effects or Whack DS callbacks.
  - Don't use parent regular-volatile locals in, say, effects and callbacks; using the props object is fine.
- Avoid variables other than `State`, `Context` or `Bindable` annotatated locals and Props inside a component, as that avoids accidental accesses of stale values. It's fine to create locals for using them while constructing the component's final `whack.ds.Node` object.
- If, say, a loop creating Whack DS nodes contains its own event handlers, it might be better to define a separate component (perhaps nested) for that purpose, thus getting advantage of callback caching.

## Tips

- Remember that user-defined hooks do not take *props* as actual components do.