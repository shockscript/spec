# Variable definition

**Syntax**

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
        <b>const</b>
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
        <i>TypedDestructuring</i> <i>VariableInitialization</i><sup>β</sup>
    </ul>
</ul>

<ul>
    <i>VariableInitialization</i><sup>β</sup> :
    <ul>
        «empty»<br>
        <b>=</b> <i>AssignmentExpression</i><sup>β</sup>
    </ul>
</ul>