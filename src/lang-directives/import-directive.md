# Import directive

The **import** pragma may be used to import properties from a package.

The **import\@** pragma may be used to import annotations from a package.

```sx
import@ bridge.annotations.*;
```

**Syntax**

<ul>
    <i>ImportDirective</i> :
    <ul>
        <b>import</b> <i>PackageName</i> <b>. *</b><br>
        <b>import</b> <i>PackageName</i> <b>.</b> <i>IdentifierName</i><br>
        <b>import</b> <i>Identifier</i> <b>=</b> <i>PackageName</i> <b>. *</b><br>
        <b>import</b> <i>Identifier</i> <b>=</b> <i>PackageName</i> <b>.</b> <i>IdentifierName</i>
    </ul>
</ul>

<ul>
    <i>ImportAnnotationDirective</i> :
    <ul>
        <b>import @</b> <i>PackageName</i> <b>. *</b><br>
        <b>import @</b> <i>PackageName</i> <b>.</b> <i>IdentifierName</i>
    </ul>
</ul>