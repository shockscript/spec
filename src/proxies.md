# Proxies

Methods of the `sx_proxy` namespace may be implemented in a class or interface for overriding language behavior, known as *proxies*.

## static sx_proxy::call()

A static `sx_proxy::call()` method may be defined with any number of parameters and any result type, overriding the behavior of calling the class object.

```
sx_proxy static function call():T {}
```

## sx_proxy::get()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.
>
> If the user needs to access an instance variable in such a case it is recommended to use a fixed expression as in
>
> ```
> <?fixed={object.q::n}?>
> ```

```
sx_proxy function get(key:K):V {
    //
}
```

## sx_proxy::set()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.

```
sx_proxy function set(key:K, value:V):void {
    //
}
```

## sx_proxy::delete()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.

```
sx_proxy function delete(key:K):Boolean {
    //
}
```

## sx_proxy::has()

Overrides the behavior of the `in` operator.

```
sx_proxy function has(key:K):Boolean {
    //
}
```

## sx_proxy::getAttribute()

Overrides the behavior of the `.@k` accessor.

```
sx_proxy function getAttribute(key:K):V {
    //
}
```

## sx_proxy::setAttribute()

Overrides the behavior of the `.@k = v` accessor.

```
sx_proxy function setAttribute(key:K, value:V):void {
    //
}
```

## sx_proxy::deleteAttribute()

Overrides the behavior of the `delete (...).@k` accessor.

```
sx_proxy function deleteAttribute(key:K):Boolean {
    //
}
```

## sx_proxy::filter()

Overrides the behavior of the filter operator (`.(test)`).

```
sx_proxy function filter(testFn:function(T):Boolean):E {
    //
}
```

## sx_proxy::descendants()

Overrides the behavior of the descendants operator (`..x`). The parameter is expected to be typed `String` or `QName`.

```
sx_proxy function descendants(name:QName):E {
    //
}
```
