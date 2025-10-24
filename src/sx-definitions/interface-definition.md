# Interface definition

**Syntax**

Nested interfaces are not allowed; interfaces are only allowed in package blocks and top-level region.

The interface block must only contain function definitions.

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