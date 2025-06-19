## Override

```
class A {
    function m() {}
}

class B extends A {
    override function m() { trace("B!") }
}
```

## Final method

```
class A {
    final function m() {}
}

class B extends A {
    override function m() { trace("B!") } // ERROR!
}
```

## Super

```
class A {
    function m() { trace("A.m!") }
}

class B extends A {
    override function m() { super.m(); trace("B.m!") }
}
```