# Generics

Classes, interfaces, type aliases and functions may specify type parameters, turning into *generic* entities. ShockScript implements generic entities using polymorphism.

> **Note**: `[Number]`, `[float]`, `[decimal]`, `[int]` and `[uint]` are specialized so they are represented in a memory efficient way.

```
class A.<T> {}
interface I.<T> {}
type Alias.<T> = (decimal, Complex.<T>);

function f.<T>():void {
}
```

## Parameter constraints

Type parameters may have at most one constraint, such as `extends`.

```
function f.<T extends A>(o:T) {
}
function f.<T implements I>(o:T) {
}
function f.<E extends Event(A, type)>(type:E.name, value:E.type) {
}
function f.<E extends Event(A, object)>(value:E) {
}
```

### Event constraints

`Event()` constraints allow inspecting available events as defined by the `Event` meta-data in classes and interfaces, including the inherited events and events from the implemented interfaces.

`Event()` constraints are allowed to take `this` as the base type, reflecting the current class's events:

```
package com.business.coreRT.events {
    //
    public class EventTarget {
        //
        public function emit.<E extends Event(this, object)>(e:E):Boolean {
            //
        }
    }
}
```

- `Event(T, type)` yields the name-type pair of an event.
- `Event(T, object)` ensures event creation is correct by analyzing the `new E(type, ...)` expression.

> **Note**: The `Event(T, type)` constraint's `name` field yields the `String` type, but its purpose is for auto completion in integrated development environments.