# Proxies

Methods of the `shock_proxy` namespace may be implemented in a class or interface for overriding language behavior, known as *proxies*.

## shock_proxy::call()

A static `shock_proxy::call()` method may be defined with any number of parameters and any result type, overriding the behavior of calling the class object.

```
shock_proxy static function call():T {}
```

A multi-method may be used, allowing for multiple call signatures.

## shock_proxy::get()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.
>
> If the user needs to access an instance variable in such a case it is recommended to use a fixed expression as in
>
> ```
> <?fixed={object.q::n}?>
> ```

```
shock_proxy function get(key:K):V {
    //
}
```

## shock_proxy::set()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.

```
shock_proxy function set(key:K, value:V):void {
    //
}
```

## shock_proxy::delete()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.

```
shock_proxy function delete(key:K):Boolean {
    //
}
```

## shock_proxy::has()

Overrides the behavior of the `in` operator.

```
shock_proxy function has(key:K):Boolean {
    //
}
```

## shock_proxy::getAttribute()

Overrides the behavior of the `.@k` accessor.

```
shock_proxy function getAttribute(key:K):V {
    //
}
```

## shock_proxy::setAttribute()

Overrides the behavior of the `.@k = v` accessor.

```
shock_proxy function setAttribute(key:K, value:V):void {
    //
}
```

## shock_proxy::deleteAttribute()

Overrides the behavior of the `delete (...).@k` accessor.

```
shock_proxy function deleteAttribute(key:K):Boolean {
    //
}
```

## shock_proxy::filter()

Overrides the behavior of the filter operator (`.(test)`).

```
shock_proxy function filter(testFn:function(T):Boolean):E {
    //
}
```

## shock_proxy::descendants()

Overrides the behavior of the descendants operator (`..x`). The parameter is expected to be typed `String` or `QName`.

```
shock_proxy function descendants(name:QName):E {
    //
}
```
