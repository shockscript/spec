# Parameterized types

Classes, algebraic enumerations, interfaces, type aliases and functions may specify type parameters, turning into *parameterized types*. ShockScript implements parameterized types using polymorphism.

> **Note**: Array, Map and Set data types have certain specializations in their runtime representation internally for more efficient memory usage.
>
> Array, Map and Set are the only types that store the specified type arguments to ensure the collection is strictly valid during runtime.

Any parameterized type other than Array, Map and Set gets its type arguments fully erased and their type parameters are replaced by `*` during evaluation.

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

## Type operations

- `v is Array` (matches an Array of any underlying type)
- `v is Map` (matches a Map of any underlying K/V types)
- `v is Set` (matches a Set of any underlying K/V types)
- The is/as/as-strict operators and `T(v)` casts are implemented at runtime receiving an optional type arguments list, which are used for proper Array, Map or Set check. Involved type arguments may be `*`, in which case any type may be matched.
- is/as/as-strict and `T(v)` completely ignore type arguments for parameterized types other than Array, Map or Set.

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