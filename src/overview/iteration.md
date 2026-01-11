# Iteration

ShockScript features full object-oriented iteration.

```
iterator.length()
iterator.some(function(v) v > 0)
iterator.(* > 0) // filter
```

The user may override the key and value iterators by implementing the `Iterable.<K, V>` interface.

```
class A implements Iterable.<string, double> {
    /**
     * Iterate keys.
     */
    function keys():Iterator.<string> {
        for (var i = 0; i < 10; i++) {
            yield i.toString();
        }
    }

    /**
     * Iterate values.
     */
    function values():Iterator.<double> {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }
}
```