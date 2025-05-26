# Events

The native `EventEmitter` class is designated for dispatching and listening to events, and is the one used for implementing the hierarchic event model in the display list API.

In addition, the `IEventEmitter` interface may be implemented instead of extending the `EventEmitter` class.

## An event emitter

```
/**
 * On play event.
 */
[Event(name="play", type="Event")]
/**
 * My player class.
 */
class Player extends EventEmitter {

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
    public function SomeEvent(type: String) {
        super(type);
    }
}
```

## Emitting

The `EventEmitter#emit()` method is defined as follows:

```
public function emit.<E extends Event(this,object)>(e:E) : Boolean {
    //
}
```

When the `emit()` method is used, it will force a `new E(...)` expression to be a correct `Event` object construction, by ensuring the first argument identifies a determined event type according to `E`.

## Listening

The `EventEmitter#on()` method is roughly defined as follows:

```
public function on.<E extends Event(this,type)>(
    type: E.name,
    listener: function(E.type):void,
) : void {
    //
}
```