# Classes

A class is an inheritable user-defined type that may be used to create objects.

```
class C1 {
    //
}
const obj = new C1();
```

## Inner namespaces

A class owns three namespaces:

- `private`
- `protected`
- `static protected`

`protected` and `static protected` are propagated to the block of subclasses.

## SXDoc comment

A class may be prefixed by a SXDoc comment.

```
/** Comment */
class C1 {}
```

## Meta-data

A class may have zero or more meta-data.

```
[M1]
[M2]
class C1 {}
```

## Inheritance

```
class A {}
class B extends A {}
```

### Member shadowing

Members from base classes **must not** be shadowed except for overriding methods.

```
class C1 {
    function m() {}
}
class C2 extends C1 {
    function m() {} // ERROR!
}
```

### Default inheritance

By default a class, excluding `Object`, inherits `Object`. A class can extend at most one class.

### Final classes

A final class may not be extended:

```
final class A {}

class B extends A {} // ERROR!
```

### Implementing interfaces

A class may implement zero or more interfaces:

```
class C1 implements I1, I2 {
    //
}
```

### Constructor inheritance

If the constructor of a class is not explicitly defined, then it is based on the base class's constructor, using the same signature and initializing the instance with default field values:

```
class A {
    var x:Number;
    function A(x:Number) {
        this.x = x;
    }
}
class B extends A {
    var y:Number = 10;
}
new B(0);
new B(); // ERROR!
```

## Constructor

The constructor of a class is a special initialization method named as the class itself, as in:

```
class C1 {
    function C1() {}
}
```

### Super statement

The super statement is used to invoke the constructor from the base class from a subclass constructor.

A constructor must contain the super statement if a class is inherited which consists of a required constructor.

```
class A {
    function A(x:Number) {}
}
class B extends A {
    function B() {
        super(0);
    }
}
```

## Abstract classes

An abstract class may not be directly instantiated through the `new` operator, and may define abstract methods. Non abstract subclasses are allowed to be instantiated.

```
abstract class A {
    abstract function m():void;
}
```

## Static classes

A static class may not be instantiated or inherited, and by convention consists of static properties and methods.

```
static class MyNamespace {
    public static const VALUE:Number = 10.5;
}
```

## Events

The class, in convention when either extending `EventTarget` or implementing `IEventTarget`, may define possibly emitted events through using multiple `Event` meta-data.

```
/**
 * Event.
 */
[Event(name="eventName", type="T")]
/**
 * Target.
 */
class A extends EventTarget {}
```

## Static properties

Definitions marked `static` that appear within the `class` block are part of the static properties of the class, which are accessed as `C.n` where `C` is teh class and `n` the property name.

## Instance properties

Definitions not marked `static` that appear within the `class` block are part of the prototype of the class, and are called *instance* properties.