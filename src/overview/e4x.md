# E4X

ShockScript implements a modified version of the ECMA-357 2nd edition (E4X) standard, which facilitates XML processing and manipulation.

## XML literals

By default XML literals evaluate to one of the `XML` and `XMLList` types.

```sx
package zero.information.generator {
    public function retrieve(a : string) : XML {
        return (
            <information>{a}</information>
        );
    }
}
```

> **Note**: XML literals ignore beginning and end whitespace on character sequence tokens regardless of the active XMLContext. Interpolation or the XML or XMLList constructors may be used instead where applicable with a XMLContext whose `ignoreWhitespace` option is set to false.

Depending on the inference type, XML literals may be used for constructing implementation-defined objects, which apply implementation-specific verification rules.

```sx
package zero {
    import whack.ds.UIComponent;
    import s = spark.components.*

    public class Main extends UIComponent {
        public function Main() {
            super()
            final = (
                <s:Application>
                    <s:Label>Hello World!</s:Label>
                </s:Application>
            )
        }
    }
}
```

### Attributes

`<t a/>` is equivalent to `<t a={true}/>`. Accessing `XML` attributes can be directly done by the `@` operator, as in `xnode.@x`.

### Event handlers

Inline event handlers may be expressed as `eventName&={statementList}` as a shortcut to `eventName={function(event){statementList}}`, as in:

```sx
<button click&={trace("clicked!")}>Click me</button>
```

If the event has no parameters, then the attribute above is equivalent to `eventName={function(){statementList}}`.

### Interpolation

```sx
<div {rest}>
    {undefined}
    {null}
    {node}
    {node_list}
    {plain_text}
    {number}       <!-- The Number union -->
    {boolean}
</div>
```

## Filtering

`XML` and `XMLList` implement the filter operator.

```sx
people.(*.@name == "John")
```

> **Note**: Unlike E4X 2nd, ShockScript does not clutter the lexical scope; the test variable is a wildcard **\*** binding.

## Descendants

`XML` and `XMLList` implement the descendants operator.

```sx
xnode..tag
```

## Lexical contexts

The **default xml namespace** statement sets the default Namespace used in XML literals and name lookups during runtime.

```sx
default xml namespace = n
```

> *Note**: Unlike E4X 2nd, ShockScript makes the **default xml namespace** statement block-scoped, and not necessarily activation-scoped.

In addition, instead of E4X 2nd XML settings self-attached to the XML class, ShockScript includes an **use xml** pragma that acts similar to **default xml namespace**, but used for specifying a `XMLContext` object.

```sx
use xml ctx
```