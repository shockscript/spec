# React.js

ShockScript incorporates the XML language just like the ECMAScript for XML (E4X) specification, however XML literals allow for implementations to produce anything desired based on type inference, similar to JSX. There are many positive differences to JSX or React.js, such as memoization and auto dependency tracking.

The following demonstrates a basic XML literal for Whack DS:

```sx
const xn : whack.ds.Node = (
    <div>
        <button>Click me</button>
    </div>
);
```

## Event handlers

In ShockScript, event handlers are expressed as `e&={statementList}` (note the ampersand **\&**) as a shorthand to `e={function(event){statementList}}`. Furthermore, event handlers are conventionally expressed without an `on` prefix (for instance, `click` instead of `onClick`), and they are documented with the `@event` tag.

When specifying event handlers, note that the callback is cached only if .

## Prefixes

ShockScript allows for `<q:N>`, whose name resolution equals `q::N`. Dots may be used for entities other than namespaces, as in:

```sx
<zero.components.AppBar/>
```

For brevity, you do either:

```sx
import zx = zero.components.*;

xn = <zx:AppBar/>
```

or:

```sx
import zero.components.*

xn = <AppBar/>
```

## Interpolation

Interpolation works similiarly to React.js, except for HTML.

```sx
<div>
    {undefined}
    {null}
    {node}
    {node_list}
    {plain_text}
    {number}       <!-- The Number union -->
    {boolean}
</div>
```

Interpolating attributes uses `{ object }` and not `{ ...object }` and must appear at most once at the end of all attributes:

```sx
<button {arguments}>click me</button>
```

## Component definition

Components are defined as classes extending the `UIComponent` class and not regular functions. It is far different from ReactJS legacy class components.

## States

Unlike React.js, in Whack DS there is no risk of accessing an outdated state's value, due to how states are constructed.

```sx
package spark.components {
    public class Ark extends whack.ds.UIComponent {
        [State]
        var x : uint = 0;

        public function Ark() {
            super();
            final = (
                <w:VGroup>
                    <span>clicked {x} times</span>
                    <button click&={x++}>click me</button>
                </w:VGroup>
            );
        }
    }
}
```

The state's initializer represents the state's initial value.

Like React.js, there is no transitive detection of mutation methods; therefore, the following is necessary over an array `.push(v)`:

```sx
x = [...x, v];
```

As to Map objects:

```sx
m = { ...m, k: v };
```

## Bindables

In Whack DS the concept of "refs" is called *bindables*.

```sx
package spark.components {
    public class Ark extends whack.ds.UIComponent {
        [Bindable]
        var button : ?org.w3.web.Button;

        public function Ark() {
            super();

            whack.ds.useEffect(function() {
                trace(button!.@x);
            });

            final = (
                <button bind={button}>click me</button>
            );
        }
    }
}
```

Note `.@x` is a meta-data attribute accessor for DOM elements.

## Contexts

Using contexts results in `ContextReference.<T>` objects, although they are used as natural `Context`-annotated variables.

```sx
public class View extends whack.ds.UIComponent {
    [Context("zero.context.Example")]
    const example;

    public function View() {
        super()
        final = (
            <></>
        )
    }
}
```

## Props

Props must use the `track { ... }` type and not a regular record type. It is not recommended to destructure props.

```sx
public class View extends whack.ds.UIComponent {
    public function View(props : Props) {
        super()
        final = (
            <></>
        )
    }

    public type Props = track {
        /** @event */
        next? : function() : void,
    }
}
```

## Effects

The popular "useEffect" hook, differently from ReactJS, auto tracks dependencies, preventing mistakes. For listening to any changes, use `"*"`.

```sx
whack.ds.useEffect(function() {
    //
    return function() {
        // Cleanup
    };
});

whack.ds.useEffect(function() {
    //
}, "*");
```

## Styling

Unlike with React.js, there is built-in support for linking style sheets in a Whack DS component.

```sx
<div>
    <w:Style>
    <![CDATA[
        :host {
            background: red;
        }
    ]]>
    </w:Style>
</div>
```

## Helpful resources

- [See: Style sheets](../e4x/whack.md#linking-cascading-style-sheets)
- [See: Whack DS - E4X](../e4x/whack.md)
- [See: Whack DS](../whack_ds.md)