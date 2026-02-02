# Package definition

**Syntax**

<ul>
    <i>PackageDefinition</i> :
    <ul>
        <b>package</b> <i>Block</i><br>
        <b>package</b> [no line break] <i>PackageName</i> <i>Block</i>
    </ul>
</ul>

A *PackageDefinition* may be used in a *Program* before any *Directive* that is not a *PackageDefinition* is used.

## Package name

**Syntax**

<ul>
    <i>PackageName</i> :
    <ul>
        <i>Identifier</i><br>
        <i>PackageName</i> <b>.</b> <i>IdentifierName</i>
    </ul>
</ul>