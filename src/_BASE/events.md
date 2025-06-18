# Events

The native `EventTarget` class is designated for dispatching and listening to events, and actual implementations may use it for implementing a hierarchic DOM event model.

In addition, the `IEventTarget` interface may be implemented instead of extending the `EventTarget` class.

## An event target

```
/**
 * On play event.
 */
[Event(name="play", type="Event")]
/**
 * My player class.
 */
class Player extends EventTarget {

    public function aMethod() {
        this.emit(new Event("play"));
    }
}
```

`Player` usage:

```
player.on("play", function() { trace("played") });
```

> **Note:** Unlike in Flash Player, the convention of using static constants for identifying event types is discarded.

## An event class

Event constructors must always take the event type as the first argument; any other arguments may follow.

```
class SomeEvent extends Event {
    //
    public function SomeEvent(type : String) {
        super(type);
    }
}
```

## Emitting

The `EventTarget#emit()` method is defined as follows:

```
public function emit.<E extends Event(this,object)>(e:E) : Boolean {
    //
}
```

When the `emit()` method is used, it will force a `new E(...)` expression to be a correct `Event` object construction, by ensuring the first argument identifies a determined event type according to `E`.

## Listening

The `EventTarget#on()` method is roughly defined as follows:

```
public function on.<E extends Event(this,type)>(
    type : E.name,
    listener : function(E.type):void,
) : void {
    //
}
```