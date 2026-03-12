# The good, the bad

## :&#x28; Mutability

```sx
[State]
var x : [uint] = [];

x.push(10); // BAD
```

## :&#x29; Mutability

```sx
[State]
var x : [uint] = [];

x = [...x, 10] // GOOD
```

<sup>You can also implement deriveds.</sup>

## :&#x28; Callbacks

```sx
final = (
    <cset:Evaluator
        functions={[ function():uint(10)
                   , function():uint (0) ]}/>
)       // BAD
```

<sup>Callback caching (`whack.ds.useCallback`) only occurs implicitly for Functions assigned to the whole attribute.</sup>

## :&#x28; Callbacks

```sx
final = (
    <cset:Evaluator>
        <cset:functions>
            {[
                function():uint (10), // BAD
                function():uint  (0), // BAD
            ]}
        </cset:functions>
    </cset:Evaluator>
)
```

<sup>Callback caching (`whack.ds.useCallback`) only occurs implicitly for Functions assigned to the whole attribute.</sup>

## :&#x28; Callbacks

```sx
final = (
    <cset:Evaluator>
        <cset:finish>
            {function(){doIt()} /* BAD */}
        </cset:finish>
    </cset:Evaluator>
)
```

<sup>Callback caching (`whack.ds.useCallback`) only occurs implicitly for Functions assigned to the whole attribute when using a syntactic XML attribute.</sup>

## :&#x29; Callbacks

```sx
final = (
    <cset:Evaluator
        finish&={doIt()}  />
)       // GOOD
```

## :&#x29; Callbacks

```sx
final = (
    <cset:Evaluator
        finish={function(e){doIt()}} />
)       // GOOD
```