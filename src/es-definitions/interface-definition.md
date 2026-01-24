# Interface definition

**Syntax**

Interfaces may nest inside classes; outside of classes, interfaces are only allowed in package blocks and top-level region. When inside a class block, contributes a static property.

The interface block must only contain function definitions, which may only contain certain annotations (meta-data and the `generic` attribute).

<ul>
    <i>InterfaceDefinition</i> :
    <ul>
        <b>interface</b> <i>IdentifierName</i> <i>TypeParameters</i><sub>opt</sub> <i>ExtendsList</i> <i>Block</i>
    </ul>
</ul>

## Interface inheritance

**Syntax**

<ul>
    <i>ExtendsList</i> :
    <ul>
        «empty»<br>
        <b>extends</b> <i>TypeExpressionList</i>
    </ul>
</ul>