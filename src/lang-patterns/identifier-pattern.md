# Identifier pattern

An identifier pattern is most commonly used for variable bindings; however it can also be used for pattern matching within algebraic data types by using call-like parentheses, where it can also match parameters or fields using compile-time constants.

```sx
x
Nothing()
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
        <i>PropertyIdentifier</i>
    </ul>
</ul>

<ul>
    <i>IdentifierPatternContinue</i> :
    <ul>
        <b>.</b> <i>IdentifierName</i>
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

**Semantics**

An *IdentifierPattern* representing exactly a single wildcard **\*** identifier is treated as a parameter skip.

```sx
if (let Plus(*, 10) = exp) {
    f = true
}
```