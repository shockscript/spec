# ShockScript: Patterns

Matching patterns may be used in a number of contexts, including variable bindings, `try..catch` clauses, `switch type` cases, `if..let` and assignment left-hand sides.

Where applicable, expressions are disambiguated into those patterns, in which case any incompatible or illegal expression results in a syntax error; for example, an expression is disambiguated into a pattern inside an assignment whose left-hand side is either an array or object literal.

**Syntax**

<ul>
    <i>Pattern</i> :
    <ul>
        [lookahead ≠ <b>undefined</b> if pattern is nested] <i>IdentifierPattern</i><br>
        <i>ArrayPattern</i><br>
        <i>ObjectPattern</i><br>
        <i>ConstantPattern</i> [if pattern is nested]
    </ul>
</ul>

<ul>
    <i>TypedPattern</i> :
    <ul>
        <i>Pattern</i> [lookahead ≠ <b>:</b>]<br>
        <i>Pattern</i> <b>:</b> <i>TypeExpression</i>
    </ul>
</ul>