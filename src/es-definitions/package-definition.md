# Package definition

**Syntax**

<ul>
    <i>PackageDefinition</i> :
    <ul>
        <b>package</b> <i>PackageName</i><sub>opt</sub> <i>Block</i>
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