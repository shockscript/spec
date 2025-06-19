# Iterables

Any class that implements `Iterator.<T>`, `IterableKeys.<T>` or `IterableValues.<T>` may be iterated.

## shock_proxy usage

```
class A implements IterableKeys.<Number>, IterableValues.<Number> {
    //
    shock_proxy function keys() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }

    //
    shock_proxy function values() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }
}
```