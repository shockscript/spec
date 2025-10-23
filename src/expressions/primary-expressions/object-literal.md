# Object literal

**Syntax**

<ul>
    <i>ObjectLiteral</i> :
    <ul>
        <b>{</b> <i>FieldList</i> <b>}</b>
    </ul>
</ul>

<ul>
    <i>FieldList</i> :
    <ul>
        «empty»<br>
        <i>NonEmptyFieldList</i><br>
        <i>NonEmptyFieldList</i> <b>,</b>
    </ul>
</ul>

<ul>
    <i>NonEmptyFieldList</i> :
    <ul>
        <i>LiteralField</i><br>
        <i>LiteralRest</i><br>
        <i>NonEmptyFieldList</i> <b>,</b> <i>LiteralField</i><br>
        <i>NonEmptyFieldList</i> <b>,</b> <i>LiteralRest</i>
    </ul>
</ul>

<ul>
    <i>LiteralRest</i> :
    <ul>
        <b>...</b> <i>AssignmentExpression</i><sup>allowIn</sup>
    </ul>
</ul>

<ul>
    <i>LiteralField</i> :
    <ul>
        <i>FieldName</i> <b>:</b> <i>AssignmentExpression</i><sup>allowIn</sup><br>
        <i>NonAttributeQualifiedIdentifier</i>
    </ul>
</ul>

<ul>
    <i>FieldName</i> :
    <ul>
        <i>NonAttributeQualifiedIdentifier</i><br>
        <i>Brackets</i><br>
        <i>StringLiteral</i><br>
        <i>NumericLiteral</i>
    </ul>
</ul>