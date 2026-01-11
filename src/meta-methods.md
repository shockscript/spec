# Meta-methods

Methods of the `meta` namespace may be implemented in a class or interface for overriding language behavior; those are referred to as *meta-methods*.

## meta::call()

A static `meta::call()` method may be defined with any number of parameters and any result type, overriding the behavior of calling the class object.

```
meta static function call():T {}
```

A multi-method may be used, allowing for multiple call signatures.

## meta::get()

> **Note**: Overriding the property accessor with a possibly `string` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.
>
> If the user needs to access an instance variable in such a case it is recommended to use a fixed expression as in
>
> ```
> <?fixed={object.q::n}?>
> ```

```
meta function get(key:K):V {
    //
}
```

## meta::set()

> **Note**: Overriding the property accessor with a possibly `string` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.

```
meta function set(key:K, value:V):void {
    //
}
```

## meta::delete()

> **Note**: Overriding the property accessor with a possibly `string` or `QName` key type (including base types `*` and `Object`) will override all names (like `.x`), except when calling a method (like `.m()`). In that case, a class is said to be *dynamic*.

```
meta function delete(key:K):boolean {
    //
}
```

## meta::has()

Overrides the behavior of the `in` operator.

```
meta function has(key:K):boolean {
    //
}
```

## meta::getAttribute()

Overrides the behavior of the `.@k` accessor.

```
meta function getAttribute(key:K):V {
    //
}
```

## meta::setAttribute()

Overrides the behavior of the `.@k = v` accessor.

```
meta function setAttribute(key:K, value:V):void {
    //
}
```

## meta::deleteAttribute()

Overrides the behavior of the `delete (...).@k` accessor.

```
meta function deleteAttribute(key:K):boolean {
    //
}
```

## meta::filter()

Overrides the behavior of the filter operator (`.(test)`).

```
meta function filter(testFn:function(T):boolean):E {
    //
}
```

## meta::descendants()

Overrides the behavior of the descendants operator (`..x`). The parameter is expected to be typed `string` or `QName`.

```
meta function descendants(name:QName):E {
    //
}
```
