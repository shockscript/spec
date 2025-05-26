# E4X

ECMAScript for XML (E4X) comprises XML markup and XML data manipulation facilities.

## Markup

XML markup is directly used in ActionScript for rendering reactive user interface.

```
package me.diantha.portfolio {
    import j = jet.components.**;
 
    /** Portfolio */
    public function Portfolio() {
        return (
            <>
                <j:VGroup gap={5}>
                    <!-- content -->
                    <j:Label>
                        <markdown>
                            Hi **there**.
                        </markdown>
                    </j:Label>
                </j:VGroup>
            </>
        );
    }
}
```

> **Note:** Unlike the E4X standard 2nd edition, markup does not result in `XML` or `XMLList` objects, but rather `ReactNode`; and there is support for `a` attributes without an attribute value, which equals `a={true}`.

### Markdown

Use `<markdown>` tags for translating Markdown to HyperText Markup Language (HTML) text.

> **Note:** Tags nested with `<markdown>` must comply with XHTML tags; for instance, use `<br/>` instead of `<br>`.

It is additionally allowed to interpolate text or arbitrary markup inside a `<markdown>` tag:

```xml
<markdown>
    <!-- interpolate plain text -->
    Hi, {personName}

    <!-- interpolate HTML -->
    Hi, <?hypertext {personName}?>

    <!-- interpolate Markdown (not XHTML) -->
    Hi, <?markdown {personName}?>
</markdown>
```