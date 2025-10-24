# ShockScript: Type expressions

**Syntax**

<ul>
    <i>TypeExpression</i> :
    <ul>
        <i>NonPrefixedTypeExpression</i><br>
        <b>?</b> <i>NonPrefixedTypeExpression</i>
    </ul>
</ul>

<ul>
    <i>TypeExpressionList</i> :
    <ul>
        <i>TypeExpression</i><br>
        <i>TypeExpressionList</i> <b>,</b> <i>TypeExpression</i>
    </ul>
</ul>

<ul>
    <i>NonPrefixedTypeExpression</i> :
    <ul>
        <b>*</b><br>
        <b>this</b><br>
        <b>void</b><br>
        <b>null</b><br>
        [lookahead ≠ <b>&#x28;</b> ] <i>QualifiedIdentifier</i><br>
        <b>&#x28;</b> <i>TypeExpression</i> <b>&#x29;</b><br>
        <b>&#x28;</b> <i>TypeExpression</i> <b>,</b> <i>TypeExpressionList</i> <b>&#x29;</b><br>
        <i>TupleTypeExpression</i><br>
        <i>RecordTypeExpression</i><br>
        <i>FunctionTypeExpression</i><br>
        <i>NonPrefixedTypeExpression</i> <i>PropertyOperator</i><br>
        <i>NonPrefixedTypeExpression</i> [lookahead = <b>.</b> ] <i>QueryOperator</i><br>
        <i>NonPrefixedTypeExpression</i> <i>TypeArguments</i><br>
        <i>NonPrefixedTypeExpression</i> <i>NonNull</i><br>
        <i>NonPrefixedTypeExpression</i> <b>?</b>
    </ul>
</ul>

<ul>
    <i>TupleTypeExpression</i> :
    <ul>
        <b>&#x5B;</b> <i>TypeExpression</i> <b>&#x5D;</b><br>
        <b>&#x5B;</b> <i>TypeExpression</i> <b>,</b> <i>TypeExpressionList</i> <b>&#x5D;</b><br>
        <b>&#x5B;</b> <i>TypeExpression</i> <b>,</b> <i>TypeExpressionList</i> <b>,</b> <b>&#x5D;</b>
    </ul>
</ul>

<ul>
    <i>RecordTypeExpression</i> :
    <ul>
        <b>&#x7B;&#x7D;</b><br>
        <b>&#x7B;</b> <i>RecordTypeItemList</i> <b>&#x7D;</b>
    </ul>
</ul>

<ul>
    <i>RecordTypeItemList</i> :
    <ul>
        <i>RecordTypeField</i><br>
        <i>RecordTypeField</i> <b>,</b> <i>RecordTypeItemList</i><br>
        <b>...</b> <i>TypeExpression</i>
    </ul>
</ul>

<ul>
    <i>RecordTypeField</i> :
    <ul>
        <i>NonAttributeQualifiedIdentifier</i> <b>:</b> <i>TypeExpression</i>
    </ul>
</ul>

<ul>
    <i>FunctionTypeExpression</i> :
    <ul>
        <b>function</b> <b>&#x28;</b> <b>&#x29;</b> <b>:</b> <i>TypeExpression</i><br>
        <b>function</b> <b>&#x28;</b> <i>FunctionTypeParameterList</i> <b>&#x29;</b> <b>:</b> <i>TypeExpression</i>
    </ul>
</ul>

<ul>
    <i>FunctionTypeParameterList</i> :
    <ul>
        <i>FunctionTypeParameter</i><br>
        <i>FunctionTypeParameterList</i> <b>,</b> <i>FunctionTypeParameter</i>
    </ul>
</ul>

<ul>
    <i>FunctionTypeParameter</i> :
    <ul>
        <b>...</b> <i>TypeExpression</i><sub>opt</sub><br>
        <i>TypeExpression</i> [lookahead ≠ <b>=</b> ]<br>
        <i>TypeExpression</i> <b>=</b>
    </ul>
</ul>

<ul>
    <i>TypeArguments</i> :
    <ul>
        <b>.</b> <b>&lt;</b> <i>TypeArgumentsList</i> <i>GenericGreaterThan</i>
    </ul>
</ul>

<ul>
    <i>GenericGreaterThan</i> :
    <ul>
        <b>&gt;</b><br>
        first greater-than <b>&gt;</b> from the offending token
    </ul>
</ul>

<ul>
    <i>TypeArgumentsList</i> :
    <ul>
        <i>TypeExpression</i><br>
        <i>TypeArgumentsList</i> <b>,</b> <i>TypeExpression</i>
    </ul>
</ul>