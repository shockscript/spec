# Variable definition

**Syntax**

- `var` and `let` are equivalent.
- `const` and `let const` are equivalent.

> **Note**: The `let` and `let const` kinds compared to `var` and `const` are a matter of personal taste. They are introduced in ShockScript since they were proposed in the non-existing ECMAScript 4.

<ul>
    <i>VariableDefinition</i><sup>β</sup> :
    <ul>
        <i>VariableDefinitionKind</i> <i>VariableBindingList</i><sup>β</sup>
    </ul>
</ul>

<ul>
    <i>VariableDefinitionKind</i> :
    <ul>
        <b>var</b><br>
        <b>const</b><br>
        <b>let</b> [lookahead ≠ <b>const</b> ]<br>
        <b>let const</b>
    </ul>
</ul>

<ul>
    <i>VariableBindingList</i><sup>β</sup> :
    <ul>
        <i>VariableBinding</i><sup>β</sup><br>
        <i>VariableBindingList</i><sup>β</sup> <b>,</b> <i>VariableBinding</i><sup>β</sup>
    </ul>
</ul>

<ul>
    <i>VariableBinding</i><sup>β</sup> :
    <ul>
        <i>TypedPattern</i> <i>VariableInitialization</i><sup>β</sup>
    </ul>
</ul>

<ul>
    <i>VariableInitialization</i><sup>β</sup> :
    <ul>
        «empty»<br>
        <b>=</b> <i>AssignmentExpression</i><sup>β</sup>
    </ul>
</ul>