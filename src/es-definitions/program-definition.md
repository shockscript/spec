# Program definition

**Syntax**

<ul>
    <i>Program</i> :
    <ul>
        <i>ShortPackagePragma</i> <i>Directives</i><br>
        <i>NonPackageProgram</i>
    </ul>
</ul>

<ul>
    <i>NonPackageProgram</i> :
    <ul>
        <i>Directives</i><br>
        <i>PackageDefinition</i> <i>NonPackageProgram</i>
    </ul>
</ul>