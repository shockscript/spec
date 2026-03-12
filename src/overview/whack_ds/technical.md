# Technical

## Memoization

Whack DS automatically memoizes components, allowing for user customizable Prop/State equality comparison and clones through overriding the `equals` method and implementing a `clone` method.

Memoization allows to skip re-rendering a component when its Props do not change.

Just like with ReactJS, memoizing components has drawbacks such as possibly volatile code regions (such as when internationalizing a product with locale-specific translation strings). In such cases, relying on a Whack DS context will re-render the component when the context changes regardless of whether props did or not change.

Whack DS skips re-rendering component if the parent re-renders and the props are equals to the previous render; the Whack DS component's own states updating with a different value will always re-render it.

Whack DS implementation stores previous state or previous properties by performing a `generic::clone`. For using custom classes inside states or Properties — like when a tuple, record, `Array` or `Map` is not enough — you may need a `clone` method that returns an object of the same kind and perhaps an `equals` method.

- Custom classes do not need a `clone` method if they are, say, purely data with an optional constructor.
- Custom classes whose instances should be references (that is, cloned by reference and equal by reference) should implement a `clone` method that returns the this receiver as is and an `equals` method that does simply `===`.

## Callback caching

Whack DS caches callbacks (either lambdas, inline event handlers, instance methods of the same component or Functions declared inside the constructor) within applicable E4X attributes, since they are naturally ever changing `Function` objects regardless of whether they are lambdas or fixtures ─ for example, since they capture locals, `this` or ShockScript lexical contexts, they tend to return different `Function` objects ─ and this is crucial for memoization.

> **Note**: Whack currently **does not cache** callbacks nested in objects. It is not recommended to use lambdas or ever changing Functions inside Prop objects within an E4X literal, as Whack will not give an error or warning for now.
>
> For the tag-form of setting a Prop in an E4X literal (as in `<s:f>{function(){}}</s:f>`), we have not considered caching either, since this is not very common; although that is easy to support in the future as well.

If a callback appears within a nested block, Whack tries contributing it as a `whack.ds.useCallback` to the component main evaluation's body.

Whack DS doesn't attempt to cache such a callback if it it does not belong to a component's constructor or instance method. If it does belong to a constructor, the callback is cached; but after IR generation, if there is a chance of the constructor exiting execution before the generated `whack.ds.useCallback` callback, the compiler generates an error at the respective tag's attribute.

## Auto dependency tracking

- Whack DS presents extra overhead for State/Context/Prop accessors, so that, say, the surrounding effect or callback is said to be dependent on an used State/Context/Prop.
  - Subsequent renders may still accumulate more dependencies, like conditional ones.
- Whack DS E4X attributes assigned to functions or methods from the same component are cached based on dependency tracking; same for E4X event handlers **&amp;=**.

### Props tracking

Whack DS automatically tracks not only states and context dependencies in an effect or callback, but also props.

What Whack DS does internally:

- The Props object is reused across renders. For every render, its internal hash map is cleared and then overwritten.
- **tap \{\}** types, which are used for representing props, desugar into classes which use a hash map internally for storing only props that are specified. Each prop gets its own getter, which detects surrounding effect or callback and returns the current value of the prop at the internal hash map.
  - Track prop name for comparison + previous value for the surrounding effect/callback if any

## Component validation

The following apply when using E4X literals to construct `whack.ds.Node`.

- A tag name must resolve to either
  - A component class that extends `whack.ds.UIComponent`
    - May be an Alias itself
  - A Prop (clarified in the subsections)
  - A context provider
  - An intrinsic element

Class definitions that extend `whack.ds.UIComponent` are validated in a flat way to avoid programmer bugs:

- The `Alias` meta-data
- Every instance variable is either
  - **tap \{\}** typed (at most one variable of this kind, which is usually the Props object)
  - A `Bindable` annotatated variable
  - A `Context` annotatated variable
  - A `State` annotatated variable
- The class either omits the constructor, or defines a constructor whose signature is either `function():void` or `function(Props):void`, where `Props` must be a **tap \{\}** type.