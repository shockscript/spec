# Generics

Classes, interfaces, type aliases and functions may specify type parameters, turning into *generic* entities. ShockScript implements generic entities using polymorphism.

> **Note**: `[Number]`, `[float]`, `[decimal]`, `[int]` and `[uint]` are specialized so they are represented in a memory efficient way.

```
class A.<T> {
    // code
}
interface I.<T> {
    // code
}

type Alias.<T> = (decimal, [T]);

function f.<T>():void {
}
```

## Parameter constraints

Type parameters may be attached multiple constraints.

```
[Limit(T, subtypeOf="A")]
/**
 * Some function.
 */
function f.<T>(o:T) {
    //
}

[Limit(E, eventOf="A", match="type")]
/**
 * Another function.
 */
function f.<E>(type:E.name, value:E.type) {
    //
}

[Limit(E, eventOf="A", match="object")]
/**
 * Yet another function.
 */
function f.<E>(value:E) {
    //
}
```

### “eventOf” constraints

`eventOf` constraints allow inspecting available events as defined by the `Event` meta-data in classes and interfaces, including the inherited events and events from the implemented interfaces.

`eventOf` constraints are allowed to take `this` as the base type, reflecting the current class's events:

```
package com.business.coreRT.events {
    /**
     * Event dispatcher.
     */
    public class EventTarget {

        [Limit(E, eventOf="this", match="object")]
        /**
         * Dispatches an event.
         */
        public function emit.<E>(e:E):Boolean {
            //
        }
    }
}
```

- `match="type"` yields the name-type pair of an event. The `.type` property of the pair relies on previous introduction of the respective `.name` somewhere.
- `match="object"` ensures event creation is correct by analyzing the `new E(type, ...)` expression.

> **Note**: The `match="type"` constraint contributes a `name` field that yields the `String` type, but its purpose is for auto completion in integrated development environments.