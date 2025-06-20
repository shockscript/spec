# React.js

ShockScript incorporates XML capabilities, and XML expressions allow for implementations to produce anything desired, similiar to JSX. There are certain differences to JSX or React.js.

The following demonstrates a basic XML expression for Jet Engine:

```
import j = jet.**;

<j:HGroup>
    <j:Button click&={trace("clicked!")}>button 1</j:Button>
</j:HGroup>
```

## Event handlers

In ShockScript, event handlers are expressed as `e&={statementList}` (note the ampersand **\&**) as a shorthand to `e={function(event){statementList}}`. Furthermore, event handlers are conventionally expressed without an `on` prefix (for instance, `click` instead of `onClick`), and they are documented with the `@event` tag.

## Prefixes

ShockScript allows for `<q:N>`, whose name resolution equals `q::N`. Dots may be used for entities other than namespaces, as in:

```
<com.business.components.AppBar/>
```

For brevity, you do either:

```
import bComps = com.business.components.**

<bComps:AppBar/>
```

or:

```
import com.business.components.*

<AppBar/>
```

## Interpolation

Interpolation works similiarly to React.js, except for HTML.

```
<j:VGroup>
    {undefined}
    {null}
    {node}
    {nodeList}
    {plainText}
    <?html={someHTML}?>
</j:VGroup>
```