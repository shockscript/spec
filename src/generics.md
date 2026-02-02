# Generics

Classes, interfaces, type aliases and functions may specify type parameters, turning into *generic* entities. ShockScript implements generic entities using polymorphism.

> **Note**: Array data types of `double`, `float`, `decimal`, `int` and `uint` are specialised so they are represented in a memory efficient way.

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
[Limit("T extends A, B")]
/**
 * Some function.
 */
function f.<T>(o:T) {
    //
}

[Limit("E extends Event(A)")]
/**
 * Another function.
 */
function f.<E>(type:E.name, value:E.type) {
    //
}

[Limit("E extends Event*(A)")]
/**
 * Yet another function.
 */
function f.<E>(value:E) {
    //
}
```

### Event() constraints

`Event()` constraints allow inspecting available events as defined by the `Event` meta-data in classes and interfaces, including the inherited events and events from the implemented interfaces.

`Event()` constraints are allowed to take `this` as the base type, reflecting the current class's events:

```
package com.business.coreRT.events {
    /**
    * Event dispatcher.
    */
    public class EventTarget {

        [Limit("E extends Event(this)")]
        /**
        * Dispatches an event.
        */
        public function emit.<E>(e:E):boolean {
            //
        }
    }
}
```

- `Event()` yields the name-type pair of an event. The `.type` property of the pair relies on previous introduction of the respective `.name` somewhere.
- `Event*()` ensures event creation is correct by analyzing the `new E(type, ...)` expression.

> **Note**: The `Event()` constraint contributes a `name` field that yields the `string` type, but its purpose is for auto completion in integrated development environments.