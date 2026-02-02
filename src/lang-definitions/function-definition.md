# Function definition

**Syntax**

<ul>
    <i>FunctionDefinition</i> :
    <ul>
        <b>function</b> <i>FunctionName</i> <i>TypeParameters</i><sub>opt</sub> <i>FunctionCommon</i><sup>allowIn</sup>
    </ul>
</ul>

## Function name

**Syntax**

<ul>
    <i>FunctionName</i> :
    <ul>
        <i>IdentifierName</i><br>
        <b>get</b> [no line break] <i>IdentifierName</i><br>
        <b>set</b> [no line break] <i>IdentifierName</i>
    </ul>
</ul>

*FunctionName* is used inside *FunctionDefinition*.

```
function f(): void {}
function get x(): double (impl.x)
function set x(v: double): void { impl.x = v }
```

*TypeParameters* may not appear in a function definition defining a getter, setter or constructor.

## Function body

**Syntax**

```
function f():double 10

function f():void {
    // code
}
```

<ul>
    <i>FunctionCommon</i><sup>β</sup> :
    <ul>
        <i>FunctionSignature</i><br>
        <i>FunctionSignature</i> [lookahead ∉ { <b>&#x7B;</b> }] [inline, or in a greater indentation, or lookahead = **&#x28;**] <i>AssignmentExpression</i><sup>β</sup><br>
        <i>FunctionSignature</i> <i>Block</i>
    </ul>
</ul>

## Function signature

**Syntax**

<ul>
    <i>FunctionSignature</i> :
    <ul>
        <b>(</b> <i>Parameters</i> <b>)</b> <i>ResultType</i>
    </ul>
</ul>

<ul>
    <i>ResultType</i> :
    <ul>
        «empty»<br>
        <b>:</b> <i>TypeExpression</i>
    </ul>
</ul>

## Parameter list

**Syntax**

<ul>
    <i>Parameters</i> :
    <ul>
        «empty»<br>
        <i>NonemptyParameters</i>
    </ul>
</ul>

<ul>
    <i>NonemptyParameters</i> :
    <ul>
        <i>Parameter</i><br>
        <i>Parameter</i> <b>,</b> <i>NonemptyParameters</i><br>
        <i>RestParameter</i>
    </ul>
</ul>

<ul>
    <i>Parameter</i> :
    <ul>
        <i>TypedPattern</i><br>
        <i>TypedPattern</i> <b>=</b> <i>AssignmentExpression</i><sup>allowIn</sup>
    </ul>
</ul>

<ul>
    <i>RestParameter</i> :
    <ul>
        <b>...</b> <i>TypedPattern</i><sub>opt</sub>
    </ul>
</ul>