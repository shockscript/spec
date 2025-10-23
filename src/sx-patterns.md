# ShockScript: Patterns

Destructuring patterns may be used in a number of contexts, including variable bindings, `try..catch` clauses, `switch type` cases and assignment left-hand sides.

Where applicable, expressions are disambiguated into destructuring patterns, in which case any incompatible or illegal expression results in a syntax error; for example, an expression is disambiguated in a pattern in an assignment whose left-hand side starts with a bracket **&#x5b;** or a brace **&#x7b;**.

**Syntax**

<ul>
    <i>Pattern</i> :
    <ul>
        <i>Identifier</i> [when keywords are enabled]<br>
        <i>IdentifierName</i> [when keywords are disabled]<br>
        <i>ArrayPattern</i><br>
        <i>ObjectPattern</i>
    </ul>
</ul>