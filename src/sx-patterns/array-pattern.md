# Array pattern

**Syntax**

<ul>
    <i>ArrayPattern</i> :
    <ul>
        <b>&#x5B;&#x5D;</b><br>
        <b>&#x5B;</b> <i>ArrayPatternItemList</i> <b>&#x5D;</b>
    </ul>
</ul>

<ul>
    <i>ArrayPatternItemList</i> :
    <ul>
        <b>,</b><br>
        <b>,</b> <i>ArrayPatternItemList</i><br>
        <i>Pattern</i><br>
        <i>Pattern</i> <b>,</b> <i>ArrayPatternItemList</i><br>
        <b>...</b> <i>Pattern</i>
    </ul>
</ul>