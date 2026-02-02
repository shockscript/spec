# Assignment expressions

**Syntax**

<ul>
    <i>AssignmentExpression</i><sup>β</sup> :
    <ul>
        <i>ConditionalExpression</i><sup>β</sup><br>
        <b>yield</b> [no line break] <i>AssignmentExpression</i><sup>β</sup><br>
        <i>FunctionExpression</i><sup>β</sup><br>
        <i>AssignmentLeftHandSide</i> <b>=</b> <i>AssignmentExpression</i><sup>β</sup><br>
        <i>PostfixExpression</i> <i>CompoundAssignmentPunctuator</i> <i>AssignmentExpression</i><sup>β</sup><br>
        <i>PostfixExpression</i> <b>/=</b> <i>AssignmentExpression</i><sup>β</sup>
    </ul>
</ul>

<ul>
    <i>AssignmentLeftHandSide</i> :
    <ul>
        <i>ArrayPattern</i><br>
        <i>ObjectPattern</i><br>
        <i>PostfixExpression</i> [but not <i>ArrayLiteral</i> or <i>ObjectLiteral</i>]
    </ul>
</ul>