# This

The `this` type expression may be used to refer to the enclosing class. In subclasses, the `this` type expression will yield the subclass itself, not the original enclosing class.

```
class A {
    function m():this (this);
}

class B extends A {}

const obj = new B();
obj.m() // known as B
```