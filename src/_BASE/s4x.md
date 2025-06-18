# S4X

ShockScript for XML (S4X) comprises the XML capabilities of the ShockScript language.

## Markup

XML expressions by default are used for building implementation-defined objects; however, when the inference type is `XML` or `XMLList`, XML expressions result in one of these types.

```
package me.diantha.portfolio {
    import j = jet.**;
 
    public function Portfolio() {
        return (
            <j:VGroup gap={5}>
                <!-- content -->
                <j:Label>
                    <markdown>
                        Hi **there**.
                    </markdown>
                </j:Label>
            </j:VGroup>
        );
    }

    public function data(a:String):XML {
        return (
            <tag>{a}</tag>
        );
    }
}

const xn = XML(<tag/>);
```

### Attributes

`<t a/>` is equivalent to `<t a={true}/>`.

### Event handlers

Inline event handlers may be expressed as `eventName&={statementList}` as a shortcut to `eventName={function(event){statementList}}`, as in:

```
<j:Button click&={trace("clicked!")}>Click me</j:Button>
```

If the event has no parameters, then the attribute above is equivalent to `eventName={function(){statementList}}`.

### Markdown

Use `<markdown>` tags for translating Markdown to HTML text.

> **Note:** Tags nested with `<markdown>` must comply with XHTML tags; for instance, use `<br/>` instead of `<br>`.

It is additionally allowed to interpolate text or arbitrary markup inside a `<markdown>` tag:

```xml
<markdown>
    <!-- interpolate plain text -->
    Hi, {personName}

    <!-- interpolate HTML -->
    Hi, <?html={personName}?>

    <!-- interpolate Markdown (use HTML tags; not XHTML tags) -->
    Hi, <?markdown={personName}?>
</markdown>
```