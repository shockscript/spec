# Jet Engine features

## Native tags

Native tags belong to the implicit `j` namespace, such as `j:Button`. The `j` namespace is the `http://jet.net` URI, which, if overriden, may be aliased using a `namespace` definition, like `namespace jet = "http://jet.net";`

## “data-” attributes

`data-` attributes applied to native tags, such as `j:Button`, contribute `data-` attributes to the underlying DOM element.

## “key” attribute

The `key` attribute is reserved for uniquely identifying interpolated collection items.

## Linking cascading style sheets

`s:` attributes are used for linking a style sheet (`s:link={source}` where `source:String`) and argumenting the stylesheet (like `s:color={"red"}`, which is referred by the style sheet as `param(color)`), in native tags.

```
const stylesheet = """
    :host { color: param(color) }
    """;

<j:Button s:link={stylesheet} s:color="yellow">
    <!-- content -->
</j:Button>
```

If the style sheet is too large, it may be moved out of the ShockScript file using `Embed()`; for instance:

```plain
// CustomComponent.sx
package me.diantha.components {
    //
    public function CustomComponent() {
        const stylesheet = Embed("CustomComponent.css", static="text/plain");

        return (
            <j:Button s:link={stylesheet} s:color="yellow">Click me</j:Button>
        );
    }
}
/* CustomComponent.css */
:host {
    color: param(color);
}
```