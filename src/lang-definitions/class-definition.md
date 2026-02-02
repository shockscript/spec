# Class definition

**Syntax**

Nested classes are allowed; however, classes are only allowed in package blocks and top-level region. When nested in another class, contributes a static property.

<ul>
    <i>ClassDefinition</i> :
    <ul>
        <b>class</b> <i>IdentifierName</i> <i>TypeParameters</i><sub>opt</sub> <i>Inheritance</i> <i>Block</i>
    </ul>
</ul>

<ul>
    <i>TypeParameters</i> :
    <ul>
        <b>. &lt;</b> <i>TypeParameterList</i> <i>GenericGreaterThan</i>
    </ul>
</ul>

<ul>
    <i>TypeParameterList</i> :
    <ul>
        <i>TypeParameter</i><br>
        <i>TypeParameterList</i> <b>,</b> <i>TypeParameter</i>
    </ul>
</ul>

<ul>
    <i>TypeParameter</i> :
    <ul>
        <i>Identifier</i>
    </ul>
</ul>

## Class inheritance

**Syntax**

<ul>
    <i>Inheritance</i> :
    <ul>
        «empty»<br>
        <b>extends</b> <i>TypeExpression</i><br>
        <b>implements</b> <i>TypeExpressionList</i><br>
        <b>extends</b> <i>TypeExpression</i> <b>implements</b> <i>TypeExpressionList</i>
    </ul>
</ul>