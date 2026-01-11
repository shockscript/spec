# Object pattern

**Syntax**

<ul>
    <i>ObjectPattern</i> :
    <ul>
        <b>&#x7B;&#x7D;</b><br>
        <b>&#x7B;</b> <i>ObjectPatternFieldList</i> <b>&#x7D;</b>
    </ul>
</ul>

<ul>
    <i>ObjectPatternFieldList</i> :
    <ul>
        <i>ObjectPatternField</i><br>
        <i>ObjectPatternField</i> <b>,</b><br>
        <i>ObjectPatternField</i> <b>,</b> <i>ObjectPatternFieldList</i>
    </ul>
</ul>

<ul>
    <i>ObjectPatternField</i> :
    <ul>
        <i>FieldName</i> <b>:</b> <i>Pattern</i><br>
        <i>NonAttributeQualifiedIdentifier</i>
    </ul>
</ul>