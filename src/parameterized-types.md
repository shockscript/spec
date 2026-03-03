# Parameterized types

Classes, algebraic enumerations, interfaces, type aliases and functions may specify type parameters, turning into *parameterized types*. ShockScript implements parameterized types using polymorphism.

> **Note**: Array data types of `double`, , `float`, `decimal`, `byte`, `short`, `int`, `uint` and `long` are specialised so they are represented in a memory efficient way.

```sx
class A.<T> {
    // code
}
enum E.<T> {
    type A(v : T)
}
interface I.<T> {
    // code
}

type Alias.<T> = (decimal, [T])

function f.<T>() : void {
    // code
}
```

## Parameter constraints

Type parameters may be attached multiple constraints.

```sx
[Limit("T extends A, B")]
function f.<T>(o:T) {
    //
}

[Limit(
    "X extends Consumer.<Y>",
    "Y extends Liquid",
)]
function f.<X, Y>(x:X, y:Y) {
    //
}

[Limit("E extends Event(A)")]
function f.<E>(type:E.name, o:E.type) {
    //
}

[Limit("E extends Event*(A)")]
function f.<E>(o:E) {
    //
}
```

The `Limit` meta-data may appear at most once, specifying multiple constraint expressions as its entries.

### Event constraints

`Event` constraints allow inspecting available events as defined by the `Event` meta-data in classes and interfaces, including the inherited events and events from the implemented interfaces.

`Event` constraints are allowed to take `this` as the base type, reflecting the current class's events:

```sx
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