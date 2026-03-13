# The good, the bad

## :&#x28; ⸻ Mutant

```sx
[State]
var x : [uint] = [];

x.push(10); // BAD
```

## :&#x29; ⸻ Mutant

```sx
[State]
var x : [uint] = [];

x = [...x, 10] // GOOD
```

<sup>You can also implement deriveds.</sup>

## :&#x28; ⸻ Functions

```sx
final = (
    <cset:Evaluator
        functions={[ function():uint(10)
                   , function():uint (0) ]}/>
)       // BAD
```

<sup>Callback caching (`whack.ds.useCallback`) only occurs implicitly for Functions assigned to the whole attribute.</sup>

## :&#x28; ⸻ Functions

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

## :&#x28; ⸻ Functions

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

## :&#x29; ⸻ Functions

```sx
final = (
    <cset:Evaluator
        finish&={doIt()}  />
)       // GOOD
```

## :&#x29; ⸻ Functions

```sx
final = (
    <cset:Evaluator
        finish={function(e){doIt()}} />
)       // GOOD
```

## :&#x28; ⸻ Props

```sx
class Box extends UIComponent {
    function Box({ x } : Props) {
        super()
        whack.ds.useEffect(function() {
            if (x == 0) {
                trace("zero!")
            }
        });
        final = (
            <></>
        )
    }

    type Props = tap {
        x : uint,
    }
}
```

## :&#x29; ⸻ Props

```sx
class Box extends UIComponent {
    function Box(props : Props) {
        super()
        whack.ds.useEffect(function() {
            if (props.x == 0) {
                trace("zero!")
            }
        });
        final = (
            <></>
        )
    }

    type Props = tap {
        x : uint,
    }
}
```

## :&#x29; ⸻ Evaluation order

```sx
class Box extends UIComponent {
    [Bindable]
    var outside : uint;

    function Box(props : Props) {
        // 1 - super
        super()

        // 2 - variable initials & custom hooks
        outside = props.outside;
        ...

        // 3 - effects & custom hooks
        ...

        // 4 - final
        ...
        final = (
            <></>
        )
    }

    type Props = tap {
        outside : whack.ds.BindableReference.<uint>,
    }
}
```