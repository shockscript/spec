# Interfaces

Interfaces are non opaque types that may be implemented by classes through the `implements` clause.

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

Interface methods may omit the body, being classified as *provided methods*:

```
interface I {
    function m() {
        //
    }
}
```

Interface methods may have an access modifier that is allowed to be an user namespace such as `sx_proxy`.

```
interface I {
    sx_proxy function get(key:String):String;
}
```