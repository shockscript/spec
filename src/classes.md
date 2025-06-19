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

## Documentation comment

A class may be prefixed by a documentation comment.

## Inheritance

```
class A {}
class B extends A {}
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