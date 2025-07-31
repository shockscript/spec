# Event model

The native `EventTarget` class is designated for dispatching and listening to events, and actual implementations may use it for implementing a hierarchic DOM event model.

In addition, the `IEventTarget` interface may be implemented instead of extending the `EventTarget` class.

## Implementing an event target

The following program demonstrates implementing a basic `EventTarget` subclass that is able to emit events:

```
/** Some event. */
[Event(name="act", type="Event")]
/** Some class. */
class Actor extends EventTarget {
    //
    public function m() {
        this.emit(new Event("act"));
    }
}
```

## Listening to an event

Subscribing to an event looks as follows:

```
actor.on("act", function() { trace("acting") });
```

## Implementing an event class

`Event` constructors must always take the event type as the first argument; any other arguments may follow. In the following code the user inherits the `Event` constructor.

```
class SomeEvent extends Event {}
```

## EventTarget implementation

It is a rare case for the user to need to implement their own `EventTarget` class: it may only arise if the user needs `EventTarget` to work with their own Document Object Model.

### emit()

The `emit()` method is defined as follows:

```
[Limit(E, eventOf="this", match="object")]
public function emit.<E>(e:E):Boolean {
    //
}
```

When the `emit()` method is used, it will force a `new E(...)` expression to be a correct `Event` object construction, by ensuring the first argument identifies a determined event type according to `E`.

### on()

The `on()` method is roughly defined as follows:

```
[Limit(E, eventOf="this", match="type")]
public function on.<E>(type:E.name, listener:function(E.type):void) : void {
    //
}
```

The third parameter was omitted for clarity.