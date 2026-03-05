# Identifier pattern

```sx
x
Wildcard
Vector(x, y)
Vector(*, y)      // skips "x"
Vector({ x, y })
```

**Syntax**

<ul>
    <i>IdentifierPattern</i> :
    <ul>
        <i>IdentifierPatternStart</i> <i>IdentifierPatternContinue</i>{0,} <i>IdentifierPatternArguments</i><sub>opt</sub>
    </ul>
</ul>

<ul>
    <i>IdentifierPatternStart</i> :
    <ul>
        <i>QualifiedIdentifier</i>
    </ul>
</ul>

<ul>
    <i>IdentifierPatternContinue</i> :
    <ul>
        <b>.</b> <i>QualifiedIdentifier</i>
    </ul>
</ul>

<ul>
    <i>IdentifierPatternArguments</i> :
    <ul>
        <b>(</b> <b>)</b><br>
        <b>(</b> <i>IdentifierPatternArgument</i> <b>)</b><br>
        <b>(</b> <i>IdentifierPatternArgument</i> <b>,</b> <b>)</b>
    </ul>
</ul>

<ul>
    <i>IdentifierPatternArgument</i> :
    <ul>
        <i>Pattern</i><br>
        <i>IdentifierPatternArgument</i> <b>,</b> <i>Pattern</i>
    </ul>
</ul>