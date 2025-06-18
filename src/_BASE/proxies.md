# Proxies

`sx_proxy` methods may be defined in a class or interface to allow overriding language behavior.

> **Note**: Unlike with Adobe ActionScript 3, a `Proxy` class does not need to be extended for overriding language behavior.

## Static sx_proxy::call()

A static `sx_proxy::call()` method may be defined with any number of parameters and any result type, overidding the behavior of calling the class object.

```
sx_proxy static function call():T {}
```

## sx_proxy::keys()

Part of the `IterableKeys.<T>` interface. Must return an `Iterator.<T>` object. Used by the `for..in` statement.

```
sx_proxy function keys():Iterator.<T> {
    //
}
```

## sx_proxy::values()

Part of the `IterableValues.<T>` interface. Must return an `Iterator.<T>` object. Used by the `for each..in` statement.

```
sx_proxy function values():Iterator.<T> {
    //
}
```

## sx_proxy::get()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

```
sx_proxy function get(key:K):V {
    //
}
```

## sx_proxy::set()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

```
sx_proxy function set(key:K, value:V):void {
    //
}
```

## sx_proxy::delete()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

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
