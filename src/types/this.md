# This type

The `this` type expression may be used to match the `this` literal's type, which changes across subclasses.

```
class A {
    function chainable():this (this);
}

class B extends A {}

const obj = new B();
obj.chainable() // known as B
```