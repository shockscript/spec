# ShockScript: Directives

**Syntax**

<ul>
    <i>Directive</i><sup>ω</sup> :
    <ul>
        <i>EmptyStatement</i><br>
        <i>Statement</i><sup>ω</sup><br>
        <i>ConfigurationConstant</i><sub>opt</sub> <i>Attributes</i><sub>opt</sub> <i>AnnotatableDirective</i><sup>ω</sup><br>
        <i>ConfigurationConstant</i> <i>Block</i><br>
        <i>ImportDirective</i> <i>Semicolon</i><sup>ω</sup><br>
        <i>UseDirective</i> <i>Semicolon</i><sup>ω</sup>
    </ul>
</ul>

<ul>
    <i>AnnotatableDirective</i><sup>ω</sup> :
    <ul>
        <i>NamespaceDefinition</i> <i>Semicolon</i><sup>ω</sup><br>
        <i>VariableDefinition</i><sup>allowIn</sup> <i>Semicolon</i><sup>ω</sup><br>
        <i>FunctionDefinition</i><br>
        <i>ClassDefinition</i><br>
        <i>EnumDefinition</i><br>
        <i>InterfaceDefinition</i><br>
        <i>TypeDefinition</i> <i>Semicolon</i><sup>ω</sup>
    </ul>
</ul>

<ul>
    <i>Directives</i> :
    <ul>
        «empty»<br>
        <i>DirectivesPrefix</i> <i>Directive</i><sup>abbrev</sup>
    </ul>
</ul>

<ul>
    <i>DirectivesPrefix</i> :
    <ul>
        «empty»<br>
        <i>DirectivesPrefix</i> <i>Directive</i><sup>full</sup>
    </ul>
</ul>

<ul>
    <i>ConfigurationConstant</i> :
    <ul>
        <i>Identifier</i> <b>::</b> <i>IdentifierName</i>
    </ul>
</ul>