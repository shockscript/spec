# E4X

E4X (ECMAScript for XML) comprises the ShockScript language features specifically designed for eXtensible Markup Language.

## XML literals

By default XML literals evaluate to one of the `XML` and `XMLList` types; however, depending on the inference type, XML literals may be used for constructing implementation-defined objects with different semantics.

```sx
// ===== Bar.sx =====


package zero.components {
    public class Bar extends whack.ds.UIComponent {
        public function Bar() {
            super()
            final = (
                <div>
                    <button click&={trace("clicked!")}>Click me</button>
                </div>
            )
        }
    }
}



// ===== fn.sx =====


package zero.information.generator {
    public function retrieve(a : string) : XML {
        return (
            <information>{a}</information>
        );
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

## Descendants

`XML` and `XMLList` implement the descendants operator.

```sx
xnode..tag
```
