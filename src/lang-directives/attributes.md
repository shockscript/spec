# Attributes

Attributes are in the sequence of meta-data followed by modifiers. A parser shall disambiguate expressions into attributes as applicable.

**Syntax**

<ul>
    <i>Attributes</i> :
    <ul>
        <i>Attribute</i> <i>AttributeLineBreakRestriction</i><br>
        <i>AttributeCombination</i> <i>AttributeLineBreakRestriction</i>
    </ul>
</ul>

<ul>
    <i>AttributeCombination</i> :
    <ul>
        <i>Attribute</i> <i>AttributeLineBreakRestriction</i> <i>Attributes</i>
    </ul>
</ul>

<ul>
    <i>BlockAttributes</i> :
    <ul>
        <i>Metadata</i><br>
        <i>BlockAttributes</i> <i>Metadata</i>
    </ul>
</ul>

<ul>
    <i>AttributeLineBreakRestriction</i> :
    <ul>
        no line break if the previous and offending tokens match an <i>IdentifierName</i>
    </ul>
</ul>

<ul>
    <i>Attribute</i> :
    <ul>
        <i>Metadata</i><br>
        <i>UserAttribute</i><br>
        <i>ReservedNamespace</i><br>
        <b>final</b><br>
        <b>native</b><br>
        <b>static</b><br>
        <b>abstract</b><br>
        <b>override</b><br>
        <b>generic</b>
    </ul>
</ul>

<ul>
    <i>UserAttribute</i> :
    <ul>
        <i>Identifier</i><br>
        <i>UserAttribute</i> <b>.</b> <i>IdentifierName</i>
    </ul>
</ul>

<ul>
    <i>Metadata</i> :
    <ul>
        <i>MetadataPreRestriction</i> <b>&#x5B;</b> <i>MetadataForm</i> <b>&#x5D;</b>&#x5D;<br>
        <i>MetadataPreRestriction</i> <b>&#x5B;</b> <i>MetadataForm</i> <i>MetadataTrailingComma</i> <b>&#x5D;</b>
    </ul>
</ul>

<ul>
    <i>MetadataPreRestriction</i> :
    <ul>
        if the <i>Metadata</i> is in the beginning of <i>Attributes</i> or if the <i>Metadata</i> appears before an <i>IdentifierName</i> in <i>Attributes</i>
    </ul>
</ul>

<ul>
    <i>MetadataTrailingComma</i> :
    <ul>
        comma <b>,</b> if the <i>Metadata</i> is the first occurrence in <i>Attributes</i> or <i>BlockAttributes</i>
    </ul>
</ul>

<ul>
    <i>MetadataForm</i> :
    <ul>
        <i>MetadataName</i><br>
        <i>MetadataName</i> <b>&#x28;&#x29;</b><br>
        <i>MetadataName</i> <b>&#x28;</b> <i>MetadataEntryList</i> <b>&#x29;</b>
    </ul>
</ul>

<ul>
    <i>MetadataName</i> :
    <ul>
        <i>Identifier</i><br>
        <i>Identifier</i> <b>::</b> <i>IdentifierName</i>
    </ul>
</ul>

<ul>
    <i>MetadataEntryList</i> :
    <ul>
        <i>MetadataEntry</i><br>
        <i>MetadataEntryList</i> <b>,</b> <i>MetadataEntry</i>
    </ul>
</ul>

<ul>
    <i>MetadataEntry</i> :
    <ul>
        <i>MetadataName</i><br>
        <i>StringLiteral</i><br>
        <i>MetadataName</i> <b>=</b> <i>StringLiteral</i>
    </ul>
</ul>