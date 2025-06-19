# Interfaces

Interfaces are user defined, non opaque types that may be implemented by classes through their `implements` clause.

```
interface I {
    //
    function m() : void;

    //
    function get x() : Number;
    function set x(value);
}

interface Ia extends I {}
```

The `interface` block may only contain function definitions, including regular methods, getters and setters.

## Documentation comment

An interface may be prefixed by a documentation comment.

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
    shock_proxy function get(key:String):String;
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