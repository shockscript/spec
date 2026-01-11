# Interfaces

Interfaces are user defined, non opaque types that may be implemented by classes through their `implements` clause.

```
interface I {
    //
    function m() : void;

    //
    function get x() : double;
    function set x(value);
}

interface Ia extends I {}
```

The `interface` block may only contain function definitions, including regular methods, getters and setters.

## Basemost type

An `interface` is a subtype of `Object`, although compile-time property lookups do not inherit `Object` properties.

## ESDoc comment

An interface may be prefixed by a ESDoc comment.

```
/** Comment */
interface I {}
```

## Meta-data

An interface may have zero or more meta-data.

```
[M1]
[M2]
interface I {}
```

## Inheritance

An interface may extend other interfaces through the `extends` clause.

```
interface I3 extends I1, I2 {}
```

### Shadowing members

Members from base interfaces **must not** be shadowed.

```
interface I1 {
    function m() {}
}
interface I2 extends I1 {
    function m() {} // ERROR!
}
```

## Required methods

When interface methods omit their body, they are classified as *required* methods.

```
interface I {
    function m():void;
}
```

## Provided methods

When interface methods contain a body, they are classified as *provided* methods.

```
interface I {
    function m() {
        //
    }
}
```

## Method annotations

As annotations, interface methods may have nothing but an access modifier that is allowed to be anything but a direct reserved namespace.

```
interface I {
    meta function get(key:string):string;
}
```

## Events

The interface, in convention when implementing `IEventTarget`, may define possibly emitted events through using multiple `Event` meta-data.

```
/**
 * Event.
 */
[Event(name="eventName", type="T")]
/**
 * Target.
 */
interface I extends IEventTarget {}
```