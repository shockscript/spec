# Methods

A method is a function that may be invoked. An instance method is a method defined in a `class`, `enum` or `interface` block which is not marked `static`.

```
function m() {}
```

Getters and setters are methods belonging to a virtual variable:

```
function get x():decimal 10;
function set x(val) {}
```

Constructors are methods that implement initialization for a class instance, as in:

```
class A {
    function A() {}
}
```

## Documentation comment

A documentation comment can be applied to a method.

```
/** Comment */
function m() {}
```

## Meta-data

A method may have zero or more meta-data.

```
[M1]
[M2]
function m() {}
```

## Final method

Instance methods may have a `final` modifier, indicating that they are not to overriden by subclasses.

```
class A {
    final function m() {}
}
```

## Abstract method

Instance methods may have an `abstract` modifier under an `abstract` class, indicating that they must be overriden by subclasses.

```
abstract class A {
    abstract function m():void;
}
```

## Generators

A method is a generator if the `yield` operator appears at least once in the method's body. A generator is a method that evaluates like an iterator, consumed in pauses of `yield` operators until it hits a `return` statement or the end of code.

```
function g():Iterator.<decimal> {
    yield 100.5;
}
```

If a method uses both `yield` and `await`, it is considered an iterator of `Promise`, therefore returning `Iterator.<Promise.<T>>`.

## Asynchronous methods

A method is asynchronous if the `await` operator appears at least once in the method's body. An asynchronous method returns a `Promise.<T>` object.

```
function f() {
    await otherF();
}
```

If a method uses both `yield` and `await`, it is considered an iterator of `Promise`, therefore returning `Iterator.<Promise.<T>>`.

## Multi-methods

A method may be defined more than once with varying signatures, being considered a *multi-method*.

```
function f():decimal {
    //
}
function f(val:decimal):Chainable {
    //
}
```

## Overriding

An instance method may override a method in a base class through using the `override` modifier:

```
override protected function m() {
    //
}
```

A getter must override a getter, and a setter must override a setter.

### Overriding rules

A method S may override a method B with the following rules:

- S must begin with the same list of parameters as that of B.
- If B does not contain a rest parameter
  - S may include additional *optional* parameters and/or a *rest* parameter.
- S must have the same result type of B, or a subtype of the B result type.