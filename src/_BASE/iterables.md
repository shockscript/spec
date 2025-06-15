# Iterables

Any class that implements `Iterator.<T>`, `IterableKeys.<T>` or `IterableValues.<T>` may be iterated.

## sx_proxy usage

```
class A implements IterableKeys.<Number>, IterableValues.<Number> {
    //
    sx_proxy function keys() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }

    //
    sx_proxy function values() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }
}
```