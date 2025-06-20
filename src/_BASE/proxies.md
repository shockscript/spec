# Proxies

`shock_proxy` methods may be defined in a class or interface to allow overriding language behavior.

## static shock_proxy::call()

A static `shock_proxy::call()` method may be defined with any number of parameters and any result type, overidding the behavior of calling the class object.

```
shock_proxy static function call():T {}
```

## shock_proxy::get()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

```
shock_proxy function get(key:K):V {
    //
}
```

## shock_proxy::set()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

```
shock_proxy function set(key:K, value:V):void {
    //
}
```

## shock_proxy::delete()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

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
