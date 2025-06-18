# Generics

Classes, interfaces, type aliases and functions may be type *parameterized*, using polymorphism. Note however that `Array`s are internally specialized such that numeric collections are represented and accessed in the most efficient way.

```
class A.<T> {}

type Alias.<T> = (decimal, Complex.<T>);

function m.<T>():void {
}
```

## Parameter bounds

```
function f.<T extends A> {
}
function f.<T implements I> {
}
function f.<E extends Event(A,type)>(type: E.name, value: E.type) {
}
function f.<E extends Event(A,object)>(value: E) {
}
```

### Event bounds

`Event()` bounds allow inspecting available events as defined by the `[Event]` meta-data in classes and interfaces, including the inherited events and events from the implemented interfaces.

`Event()` bounds are allowed to take `this` as the base type:

```
package my.framework {
    //
    public class EventTarget {
        //
        public function emit.<E extends Event(this,object)>(e:E) : Boolean {
            //
        }
    }
}
```