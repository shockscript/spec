# Iterables

Any class that implements `Iterator.<T>`, `IterableKeys.<T>` or `IterableValues.<T>` may be iterated.

## jet_proxy usage

```
class A implements IterableKeys.<Number>, IterableValues.<Number> {
    //
    jet_proxy function keys() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }

    //
    jet_proxy function values() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }
}
```