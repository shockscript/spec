# WhackDS

WhackDS is a feature of the Whack engine used for extending the closed set of Whack's UI component classes with reactive components. It is functionally similiar to React.js, but its syntax is more similiar to Adobe MXML.

## Memoization

WhackDS automatically memoizes components, allowing for user customizable parameter/state equality comparison through overriding the `[object Object].equals(obj)` method. Memoization basically serves the purpose of avoiding re-rendering a component when its parameters do not change.

Just like with React.js, memoizing components has drawbacks such as possibly volatile code regions (such as when internationalizing a product with locale-specific translation strings). In such cases, relying on a WhackDS context will re-render the component when the context changes regardless of whether parameters did or not change.

WhackDS skips re-rendering component if the parent re-renders and the parameters are equals to the previous render; the WhackDS component's own states updating with a different value will always re-render it.

> **Note**: To avoid *old state comparison issues*, the properties object must not be reused for mutation (since WhackDS does not know how to clone them).

## Style blocks

WhackDS supports style sheets out of the box. Here is a simple example:

```
<w:VGroup>
    <w:Style><![CDATA[
        :host {
            background: red;
        }
    ]]></w:Style>
</w:VGroup>
```