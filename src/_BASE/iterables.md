# Iterables

Any class that implements `Iterator.<T>`, `Keys.<T>` or `Values.<T>` may be iterated.

## shock_proxy usage

```
class A implements Keys.<Number>, Values.<Number> {
    //
    public function keys() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }

    //
    public function values() {
        for (var i = 0; i < 10; i++) {
            yield i;
        }
    }
}
```