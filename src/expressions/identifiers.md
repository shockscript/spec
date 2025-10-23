# Identifiers

**Syntax**

```
x
*
q::x
q::[k]     ;
(q)::x     ;
(q)::[k]   ;
@x
@[k]
@q::x
@q::[k]
@(q)::x
@(q)::[k]
```

<ul>
    <i>PropertyIdentifier</i> :
    <ul>
        <i>Identifier</i> [when keywords are enabled]<br>
        <i>IdentifierName</i> [when keywords are disabled]<br>
        <b>*</b>
    </ul>
</ul>

<ul>
    <i>Qualifier</i> :
    <ul>
        <i>PropertyIdentifier</i>
    </ul>
</ul>

<ul>
    <i>SimpleQualifiedIdentifier</i> :
    <ul>
        <i>PropertyIdentifier</i><br>
        <i>Qualifier</i> <b>::</b> <i>PropertyIdentifier</i><br>
        <i>Qualifier</i> <b>::</b> <i>Brackets</i>
    </ul>
</ul>

<ul>
    <i>ExpressionQualifiedIdentifier</i> :
    <ul>
        <i>ParenExpression</i> <b>::</b> <i>PropertyIdentifier</i><br>
        <i>ParenExpression</i> <b>::</b> <i>Brackets</i>
    </ul>
</ul>

<ul>
    <i>NonAttributeQualifiedIdentifier</i> :
    <ul>
        <i>SimpleQualifiedIdentifier</i><br>
        <i>ExpressionQualifiedIdentifier</i>
    </ul>
</ul>

<ul>
    <i>QualifiedIdentifier</i> :
    <ul>
        <b>@</b> <i>Brackets</i><br>
        <b>@</b> <i>NonAttributeQualifiedIdentifier</i><br>
        <i>NonAttributeQualifiedIdentifier</i>
    </ul>
</ul>