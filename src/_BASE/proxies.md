# Proxies

`jet_proxy` methods may be defined in a class or interface to allow overriding language behavior.

> **Note**: Unlike with Adobe ActionScript 3, a `Proxy` class does not need to be extended for overriding language behavior.

## jet_proxy::keys()

Part of the `IterableKeys.<T>` interface. Must return an `Iterator.<T>` object. Used by the `for..in` statement.

```
jet_proxy function keys():Iterator.<T> {
    //
}
```

## jet_proxy::values()

Part of the `IterableValues.<T>` interface. Must return an `Iterator.<T>` object. Used by the `for each..in` statement.

```
jet_proxy function values():Iterator.<T> {
    //
}
```

## jet_proxy::get()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

```
jet_proxy function get(key:K):V {
    //
}
```

## jet_proxy::set()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

```
jet_proxy function set(key:K, value:V):void {
    //
}
```

## jet_proxy::delete()

> **Note**: Overriding the property accessor with a possibly `String` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`).

```
jet_proxy function delete(key:K):Boolean {
    //
}
```

## jet_proxy::has()

Overrides the behavior of the `in` operator.

```
jet_proxy function has(key:K):Boolean {
    //
}
```

## jet_proxy::getAttribute()

Overrides the behavior of the `.@k` accessor.

```
jet_proxy function getAttribute(key:K):V {
    //
}
```

## jet_proxy::setAttribute()

Overrides the behavior of the `.@k = v` accessor.

```
jet_proxy function setAttribute(key:K, value:V):void {
    //
}
```

## jet_proxy::deleteAttribute()

Overrides the behavior of the `delete (...).@k` accessor.

```
jet_proxy function deleteAttribute(key:K):Boolean {
    //
}
```

## jet_proxy::filter()

Overrides the behavior of the filter operator (`.(pattern if test)`).

```
jet_proxy function filter(testFn:function(T):Boolean):E {
    //
}
```
