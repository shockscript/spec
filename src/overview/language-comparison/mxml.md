# MXML

The MXML language, as part of the Apache Flex framework, was used for describing UI components in an intuitive way. ShockScript uses XML constructs semantically similar to the ReactJS + JSX technologies, but designed to feel close to MXML.

**HelloWorld.sx**

```sx
package zero {
    import s = spark.components.*

    public class HelloWorld extends whack.ds.UIComponent {
        public function HelloWorld() {
            super()
            final = (
                <s:Application>
                    <s:Label>Hello World!</s:Label>
                </s:Application>
            );
        }
    }
}
```

## Event handlers

In MXML, event handlers were expressed as `e="statements"`. In ShockScript, they are expressed as `e&={statements}` (note the ampersand **\&**) as a shorthand to `e={function(event){statements}}`.

> **Note**: Although not demanded as such, as opposed to ReactJS + DOM, event handlers are conventionally expressed without a `on` prefix, such as `click&={trace("clicked!")}` rather than ReactJS `onClick={e=>{console.log("clicked!")}}`. Event props are conventionally given the `@event` tag in the ShockDoc comments. Classes continue using the `Event` meta-data, though without needing the `@eventType` tag.

## Rendering components

The Whack DS framework allows programmers to implement UI components as throwaway classes that wrap around the DOM elements of Whack Engine. The component is rendered by constructing the class initially and whenever states, props and/or contexts change.

## Effects

*Effect* hooks like `whack.ds.useEffect` may be used to detect changes to props, state or context as well as the component mount and unmount phases.

The effect dependencies — states, props and contexts it relies on — are auto-tracked.

```sx
whack.ds.useEffect(function() {
    // Cleanup
    return function() {
        //
    };
});

// Effect that runs everytime "*"
whack.ds.useEffect(function() {
    //
}, "*");
```

When there are no dependencies, the hook is equivalent to a component mount/unmount event, with the unmount phase handled through the returned function.

```sx
whack.ds.useEffect(function() {
    // Did mount

    return function() {
        // Unmount
    };
});
```

## Callbacks

Similarly to effects, callbacks that appear in E4X literals applied to the `whack.ds.Node` type auto track dependencies, since they are cached for aiding on memoization.

## States

Declare State variables using the `State` meta-data:

```sx
public class Main extends whack.ds.UIComponent {
    [State]
    var counter : uint = 0;
}
```

The initial value of `counter` is zero, although that initializer evaluates only the first time the component renders.

Overwriting a state with a different value (as by an `equals` comparison) will indirectly re-render the component.

Note that, like with ReactJS, arrays and structures as states will not trigger a re-render during `push` like operations; instead the programmer needs to reconstruct the object, as in:

```sx
x = [...x, 10]
```

## Bindables

In the top-level of a Whack DS component, declare bindables by using the `Bindable` meta-data. Bindables have certain use-cases, such as persisting a value across renders, and extracting DOM elements from certain tags (in which case the `bind` attribute is used).

```sx
public class Main extends whack.ds.UIComponent {
    [Bindable]
    var button : ?org.w3.web.Button;

    public function Main() {
        super()
        final = (
            <button bind={button}>Click me</button>
        )
    }
}
```

## Contexts

Obtain inherited contexts by using a Context variable.

```sx
public class Main extends whack.ds.UIComponent {
    [Context("metro.context.Theme")]
    const theme;

    public function Main() {
        super()
        final = (
            <></>
        )
    }
}
```

## Capture safety

Unlike in ReactJS combined with TypeScript, states, bindables ("refs") and context values (if following the recommendations) are captured by reference from nested functions, guaranting the "outdated" value of, say, a state, is never captured, which facilitates development by requiring no additional Bindable declaration.

Props are also safe to use anywhere within the component as long as you follow the recommendations (such as avoiding destructuring it in large method bodies).

## Styling

Unlike with ReactJS, there is built-in support for linking style sheets in a Whack DS component.

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

## Helpful resources

- [See: Whack DS - E4X](../whack_ds/mxml_like.md)
- [See: Whack DS](../whack_ds.md)